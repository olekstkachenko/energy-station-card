import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_CONFIG } from '../src/card/default-config.js';
import { render3DStation, update3DStation } from '../src/card/station-3d-view.js';
import {
  normalizeOutageGroup,
  hourMapToSlots,
  extractOutageIntervals,
  computeOutageSummary,
  renderOutageWidgetHtml,
  getOutageWidgetStyles
} from '../src/card/outage-schedule.js';

describe('Outage Schedule Module - Kyiv Oblast Group 6.1', () => {
  test('DEFAULT_CONFIG defaults outages to Kyiv Oblast (kyiv-region) group 6.1', () => {
    assert.ok(DEFAULT_CONFIG.outages);
    assert.strictEqual(DEFAULT_CONFIG.outages.show, true);
    assert.strictEqual(DEFAULT_CONFIG.outages.region, 'kyiv-region');
    assert.strictEqual(DEFAULT_CONFIG.outages.group, '6.1');
  });

  test('normalizeOutageGroup handles comma, dot and GPV prefix variants', () => {
    assert.deepStrictEqual(normalizeOutageGroup('6,1'), { key: 'GPV6.1', label: '6.1' });
    assert.deepStrictEqual(normalizeOutageGroup('6.1'), { key: 'GPV6.1', label: '6.1' });
    assert.deepStrictEqual(normalizeOutageGroup('gpv6.1'), { key: 'GPV6.1', label: '6.1' });
  });

  test('hourMapToSlots & extractOutageIntervals match exact GPV6.1 schedule', () => {
    const gpv61 = {
      '1': 'no',
      '2': 'first',
      '3': 'yes',
      '4': 'yes',
      '5': 'yes',
      '6': 'yes',
      '7': 'no',
      '8': 'no',
      '9': 'no',
      '10': 'no',
      '11': 'first',
      '12': 'yes',
      '13': 'yes',
      '14': 'yes',
      '15': 'yes',
      '16': 'yes',
      '17': 'yes',
      '18': 'yes',
      '19': 'no',
      '20': 'no',
      '21': 'no',
      '22': 'no',
      '23': 'no',
      '24': 'no'
    };

    const slots = hourMapToSlots(gpv61);
    assert.strictEqual(slots.length, 48);
    assert.strictEqual(slots[0], 'off');  // 00:00-00:30
    assert.strictEqual(slots[2], 'off');  // 01:00-01:30 (first)
    assert.strictEqual(slots[3], 'on');   // 01:30-02:00 (first)
    assert.strictEqual(slots[20], 'off'); // 10:00-10:30 (first)
    assert.strictEqual(slots[21], 'on');  // 10:30-11:00

    const intervals = extractOutageIntervals(slots);
    assert.deepStrictEqual(
      intervals.map((i) => `${i.start}-${i.end}`),
      ['00:00-01:30', '06:00-10:30', '18:00-24:00']
    );
  });

  test('computeOutageSummary computes live ON state, countdown, and cross-midnight restoration', () => {
    // 2026-11-12 00:00:00 Europe/Kyiv (+02:00) == 1794434400
    const tsToday = '1794434400';
    const tsTomorrow = String(1794434400 + 86400);

    const mockJson = {
      regionId: 'kyiv-region',
      lastUpdated: '2026-11-12T11:31:17.967Z',
      fact: {
        update: '12.11.2026 13:31',
        data: {
          [tsToday]: {
            'GPV6.1': {
              '1': 'no', '2': 'first', '3': 'yes', '4': 'yes', '5': 'yes', '6': 'yes',
              '7': 'no', '8': 'no', '9': 'no', '10': 'no', '11': 'first', '12': 'yes',
              '13': 'yes', '14': 'yes', '15': 'yes', '16': 'yes', '17': 'yes', '18': 'yes',
              '19': 'no', '20': 'no', '21': 'no', '22': 'no', '23': 'no', '24': 'no'
            }
          },
          [tsTomorrow]: {
            'GPV6.1': {
              '1': 'no', '2': 'yes', '3': 'yes', '4': 'yes', '5': 'yes', '6': 'yes',
              '7': 'yes', '8': 'yes', '9': 'yes', '10': 'yes', '11': 'yes', '12': 'yes',
              '13': 'yes', '14': 'yes', '15': 'yes', '16': 'yes', '17': 'yes', '18': 'yes',
              '19': 'yes', '20': 'yes', '21': 'yes', '22': 'yes', '23': 'yes', '24': 'yes'
            }
          }
        }
      }
    };

    // At 13:37 Kyiv time (11:37 UTC)
    const nowOn = new Date('2026-11-12T11:37:00Z');
    const summaryOn = computeOutageSummary(mockJson, { region: 'kyiv-region', group: '6,1' }, nowOn, { isGridBlackout: false });
    assert.strictEqual(summaryOn.hasData, true);
    assert.strictEqual(summaryOn.groupLabel, '6.1');
    assert.strictEqual(summaryOn.currentStatus, 'on');
    assert.strictEqual(summaryOn.todayOffHours, 12);
    assert.strictEqual(summaryOn.nextEvent.type, 'off');
    assert.strictEqual(summaryOn.nextEvent.atTime, '18:00');
    assert.strictEqual(summaryOn.nextEvent.minutesLeft, 263); // 4h 23m

    // Render HTML check
    const html = renderOutageWidgetHtml(summaryOn, { lang: 'uk', selectedDay: 'today' });
    assert.ok(html.includes('Київська обл. · Група 6.1'));
    assert.ok(html.includes('00:00–01:30'));
    assert.ok(html.includes('06:00–10:30'));
    assert.ok(html.includes('18:00–24:00'));
    assert.ok(html.includes('4 год 23 хв'));

    // At 19:00 Kyiv time (17:00 UTC) -> outage lasting across midnight until tomorrow 01:00
    const nowOff = new Date('2026-11-12T17:00:00Z');
    const summaryOff = computeOutageSummary(mockJson, { region: 'kyiv-region', group: '6.1' }, nowOff, { isGridBlackout: true });
    assert.strictEqual(summaryOff.currentStatus, 'off');
    assert.strictEqual(summaryOff.nextEvent.type, 'on');
    assert.strictEqual(summaryOff.nextEvent.isTomorrow, true);
    assert.strictEqual(summaryOff.nextEvent.atTime, '01:00');
  });

  test('renderOutageWidgetHtml shows unscheduled grid-down warning when blackout occurs during ON schedule', () => {
    const summary = computeOutageSummary(null, { region: 'kyiv-region', group: '6.1' }, new Date('2026-11-12T11:37:00Z'), {
      statusRaw: 'connected',
      isGridBlackout: true,
      actualGridVoltage: 0
    });
    const html = renderOutageWidgetHtml({ ...summary, currentStatus: 'on' }, { lang: 'uk' });
    assert.ok(html.includes('мережа знеструмлена поза графіком'));
    assert.ok(html.includes('0 V'));

    // When breaker phase voltage sensor reports grid voltage present (e.g. 228 V), warning must NOT show
    const summaryPresent = computeOutageSummary(null, { region: 'kyiv-region', group: '6.1' }, new Date('2026-11-12T11:37:00Z'), {
      statusRaw: 'connected',
      isGridBlackout: false,
      actualGridVoltage: 228
    });
    const htmlPresent = renderOutageWidgetHtml({ ...summaryPresent, currentStatus: 'on' }, { lang: 'uk' });
    assert.ok(!htmlPresent.includes('знеструмлена поза графіком'));
    assert.ok(htmlPresent.includes('⚡ 228 V'));
    assert.strictEqual(DEFAULT_CONFIG.outages.grid_voltage_entity, 'sensor.breaker_phase_a_voltage');
  });

  test('3D view renders outage dock and mini badge and updates without error', () => {
    const html = render3DStation(DEFAULT_CONFIG, (k) => k);
    assert.ok(html.includes('id="gridOutageMini3D"'));
    assert.ok(html.includes('id="outageDock3D"'));
    assert.ok(getOutageWidgetStyles().includes('.es-outage-card'));

    const miniEl = { style: {}, classList: { toggle: () => {} } };
    const miniGroupEl = { textContent: '' };
    const miniStatusEl = { textContent: '' };
    const fakeRoot = {
      getElementById: (id) => ({
        gridOutageMini3D: miniEl,
        gridOutageMiniGroup3D: miniGroupEl,
        gridOutageMiniStatus3D: miniStatusEl
      }[id] || null)
    };
    update3DStation(fakeRoot, {
      solarPowerKw: 0,
      windPowerKw: 0,
      gridPowerKw: 0,
      batSoc: 80,
      outageShow: true,
      outageMini: { groupText: '🕯️ Група 6.1', statusText: '🟢 До відкл. 4 год', state: 'on' }
    }, (k) => k);
    assert.strictEqual(miniGroupEl.textContent, '🕯️ Група 6.1');
    assert.strictEqual(miniStatusEl.textContent, '🟢 До відкл. 4 год');
  });
});

