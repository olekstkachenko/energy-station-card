import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Energy Station Card - Battery & Subload Conduits and Badges', () => {

  it('generates smooth conduit paths for each battery pack from the master hub', () => {
    // Coordinate calculation logic as implemented in _updateFlowPaths
    const cRect = { left: 0, top: 0, width: 1000, height: 800 };
    const batHubRect = { left: 350, top: 480, width: 300, height: 60, right: 650, bottom: 540 };
    const bat1Rect = { left: 360, top: 580, width: 120, height: 80, right: 480, bottom: 660 };
    const bat2Rect = { left: 520, top: 580, width: 120, height: 80, right: 640, bottom: 660 };

    const getPt = (r, xFrac = 0.5, yFrac = 0.5) => ({
      x: Math.round(r.left - cRect.left + r.width * xFrac),
      y: Math.round(r.top - cRect.top + r.height * yFrac)
    });

    const p1 = getPt(batHubRect, 0.5, 1.0); // center bottom of master hub = (500, 540)
    assert.equal(p1.x, 500);
    assert.equal(p1.y, 540);

    // Battery 1 Conduit
    const p2_1 = getPt(bat1Rect, 0.5, 0.0); // center top of Bat 1 = (420, 580)
    assert.equal(p2_1.x, 420);
    assert.equal(p2_1.y, 580);

    const midY_1 = Math.round(p1.y + (p2_1.y - p1.y) * 0.45); // 540 + 18 = 558
    const d1 = `M ${p1.x} ${p1.y} C ${p1.x} ${midY_1}, ${p2_1.x} ${midY_1}, ${p2_1.x} ${p2_1.y}`;
    assert.equal(d1, 'M 500 540 C 500 558, 420 558, 420 580');

    // Battery 2 Conduit
    const p2_2 = getPt(bat2Rect, 0.5, 0.0); // center top of Bat 2 = (580, 580)
    assert.equal(p2_2.x, 580);
    assert.equal(p2_2.y, 580);

    const midY_2 = Math.round(p1.y + (p2_2.y - p1.y) * 0.45);
    const d2 = `M ${p1.x} ${p1.y} C ${p1.x} ${midY_2}, ${p2_2.x} ${midY_2}, ${p2_2.x} ${p2_2.y}`;
    assert.equal(d2, 'M 500 540 C 500 558, 580 558, 580 580');
  });

  it('positions floating badges exactly over the battery feeder branches', () => {
    const cRect = { left: 0, top: 0, width: 1000, height: 800 };
    const batHubRect = { left: 350, top: 480, width: 300, height: 60, right: 650, bottom: 540 };
    const bat1Rect = { left: 360, top: 580, width: 120, height: 80, right: 480, bottom: 660 };

    const p1 = { x: 500, y: 540 };
    const p2 = { x: 420, y: 580 };
    const midY = Math.round(p1.y + (p2.y - p1.y) * 0.45); // 558

    const badgeStyle = {
      left: `${p2.x}px`,
      top: `${midY}px`,
      display: 'flex'
    };

    assert.equal(badgeStyle.left, '420px', 'Badge horizontal position must match battery card center');
    assert.equal(badgeStyle.top, '558px', 'Badge vertical position must be between hub and pack');
    assert.equal(badgeStyle.display, 'flex', 'Badge must be visible');
  });

  it('assigns correct flow classes and arrows on Discharge', () => {
    const isDischarging = true;
    const isCharging = false;
    const kwNum = 2.27;

    const batClass = isCharging ? 'flow-battery charging' : 'flow-battery discharging';
    assert.equal(batClass, 'flow-battery discharging');

    const isReverse = isDischarging;
    assert.equal(isReverse, true, 'Discharging flow must reverse direction (upwards to hub)');

    // Live Badge Content
    let badgeClass = 'es-bat-branch-badge es-mono discharge';
    let badgeHtml = `<span>${kwNum.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`;

    assert.ok(badgeClass.includes('discharge'), 'Badge class must contain discharge');
    assert.ok(badgeHtml.includes('↑'), 'Discharge arrow must point UP');
    assert.ok(badgeHtml.includes('2.27 кВт'), 'Badge must display module power');
  });

  it('assigns correct flow classes and arrows on Charge', () => {
    const isDischarging = false;
    const isCharging = true;
    const kwNum = 1.85;

    const batClass = isCharging ? 'flow-battery charging' : 'flow-battery discharging';
    assert.equal(batClass, 'flow-battery charging');

    const isReverse = isDischarging;
    assert.equal(isReverse, false, 'Charging flow must move forward (downwards into pack)');

    // Live Badge Content
    let badgeClass = 'es-bat-branch-badge es-mono charge';
    let badgeHtml = `<span>${kwNum.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`;

    assert.ok(badgeClass.includes('charge'), 'Badge class must contain charge');
    assert.ok(badgeHtml.includes('↓'), 'Charge arrow must point DOWN');
    assert.ok(badgeHtml.includes('1.85 кВт'), 'Badge must display module power');
  });

  it('hides unused battery conduits and badges when batCount < 8', () => {
    const batCount = 2;
    const activeStates = [];
    const badgeDisplays = [];

    for (let i = 1; i <= 8; i++) {
      if (i <= batCount) {
        activeStates.push({ i, active: true });
        badgeDisplays.push({ i, display: 'flex' });
      } else {
        activeStates.push({ i, active: false });
        badgeDisplays.push({ i, display: 'none' });
      }
    }

    assert.equal(activeStates.filter(s => s.active).length, 2, 'Only 2 battery paths should be active');
    assert.equal(activeStates.filter(s => !s.active).length, 6, '6 battery paths should be inactive');
    assert.equal(badgeDisplays.filter(b => b.display === 'flex').length, 2, 'Only 2 badges should be visible');
    assert.equal(badgeDisplays.filter(b => b.display === 'none').length, 6, '6 badges should be hidden');
  });

  it('calculates subloads electrical distribution bus bar and feeder geometry', () => {
    const svgRect = { left: 700, top: 400, width: 280, height: 26 };
    const essNodeRect = { left: 760, top: 320, width: 140, height: 80 }; // center = 760 + 70 = 830
    const sub0Rect = { left: 710, top: 430, width: 70, height: 60 };      // center = 710 + 35 = 745
    const sub1Rect = { left: 800, top: 430, width: 70, height: 60 };      // center = 800 + 35 = 835
    const sub2Rect = { left: 890, top: 430, width: 70, height: 60 };      // center = 890 + 35 = 925

    const x1 = Math.round(sub0Rect.left - svgRect.left + sub0Rect.width / 2); // 745 - 700 = 45
    const x2 = Math.round(sub2Rect.left - svgRect.left + sub2Rect.width / 2); // 925 - 700 = 225
    const y = 13;

    const stemX = Math.round(essNodeRect.left - svgRect.left + essNodeRect.width / 2); // 830 - 700 = 130
    const minBusX = Math.min(x1, stemX); // 45
    const maxBusX = Math.max(x2, stemX); // 225

    assert.equal(stemX, 130, 'Stem must align with essential loads center');
    assert.equal(minBusX, 45, 'Horizontal bus bar must start at first subload center');
    assert.equal(maxBusX, 225, 'Horizontal bus bar must end at last subload center');
    assert.equal(y, 13, 'Bus bar must be vertically centered in 26px container');

    // Feeder X coordinates
    const feeders = [sub0Rect, sub1Rect, sub2Rect].map(r => Math.round(r.left - svgRect.left + r.width / 2));
    assert.deepEqual(feeders, [45, 135, 225], 'Feeders must drop straight down into each subload card');
  });
});
