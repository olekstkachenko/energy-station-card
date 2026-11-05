import test from 'node:test';
import assert from 'node:assert/strict';

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}
if (typeof globalThis.HTMLElement === 'undefined') {
  globalThis.HTMLElement = class {
    constructor() {
      this._shadowRoot = {
        innerHTML: '',
        getElementById: () => null,
        querySelector: () => null
      };
    }
    attachShadow() {
      return this._shadowRoot;
    }
    get shadowRoot() {
      return this._shadowRoot;
    }
  };
}
if (typeof globalThis.customElements === 'undefined') {
  globalThis.customElements = {
    define: () => {},
    get: () => null
  };
}
if (typeof globalThis.localStorage === 'undefined') {
  const store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] || null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; }
  };
}
if (typeof globalThis.sessionStorage === 'undefined') {
  const sStore = {};
  globalThis.sessionStorage = {
    getItem: (k) => sStore[k] || null,
    setItem: (k, v) => { sStore[k] = String(v); },
    removeItem: (k) => { delete sStore[k]; }
  };
}
if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
}

const { DEFAULT_CONFIG } = await import('../src/card/default-config.js');
const { EnergyStationCard } = await import('../src/card/energy-station-card.js');

const createMockNode = () => ({
  innerText: '',
  innerHTML: '',
  textContent: '',
  className: '',
  style: { opacity: '1', filter: '', width: '' },
  classList: {
    _classes: new Set(),
    add(c) { this._classes.add(c); },
    remove(c) { this._classes.delete(c); },
    toggle(c, force) { if (force !== undefined) { force ? this.add(c) : this.remove(c); } else { this.contains(c) ? this.remove(c) : this.add(c); } },
    contains(c) { return this._classes.has(c); }
  },
  setAttribute(k, v) { this[k] = v; },
  getAttribute(k) { return this[k] || ''; }
});

test('Energy Station Card - 3D Realistic View & Blackout Semantics', async (t) => {

  await t.test('DEFAULT_CONFIG defaults to 3D view mode', () => {
    assert.strictEqual(DEFAULT_CONFIG.view_mode, '3d');
  });

  await t.test('EnergyStationCard initializes in 3D view and supports view toggle', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._viewMode = '3d';

    assert.strictEqual(card._viewMode, '3d');

    // Toggle to schematic
    card._toggleViewMode();
    assert.strictEqual(card._viewMode, 'schematic');
    assert.strictEqual(localStorage.getItem('energy_station_view_mode'), 'schematic');

    // Toggle back to 3d
    card._toggleViewMode();
    assert.strictEqual(card._viewMode, '3d');
    assert.strictEqual(localStorage.getItem('energy_station_view_mode'), '3d');
  });

  await t.test('3D View updates live telemetry in Charging Mode', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._language = 'uk';

    const dom = {};
    card.shadowRoot.getElementById = (id) => {
      if (!dom[id]) dom[id] = createMockNode();
      return dom[id];
    };

    card._update3DRealisticView({
      unitStr: 'кВт',
      totalSolarKw: 6.54,
      totalPvPct: 78,
      pvStrings: [{ kw: 2.25, v: 385, a: 5.8 }, { kw: 2.10, v: 382, a: 5.5 }, { kw: 2.19, v: 380, a: 5.7 }],
      totalWindKw: 1.25,
      wt1Kw: 1.12,
      wt1Rpm: 240,
      wt2Kw: 0.13,
      wt2Rpm: 165,
      isBlackout: false,
      gridKw: 0.03,
      isImport: false,
      isExport: false,
      inverterKw: 7.79,
      masterSoc: 88,
      batKw: -4.50,
      isBatCharging: true,
      isBatDischarging: false,
      batVolt: 55.20,
      batCurrent: -82.4,
      totalCapacityKwh: 28.8,
      storedKwh: 25.3,
      houseKw: 1.45,
      boilerKw: 1.00
    });

    assert.strictEqual(dom.pvTotalVal.innerText, '6.540 кВт');
    assert.match(dom.pvStatusText.innerText, /Активна генерація/);
    assert.strictEqual(dom.windTotalVal.innerText, '1.250 кВт');
    assert.strictEqual(dom.wt1Power.innerText, '1.120 кВт');
    assert.strictEqual(dom.wt2Power.innerText, '0.130 кВт');
    assert.strictEqual(dom.invScreenStatus.textContent, 'SOLAR + WIND');
    assert.strictEqual(dom.batMasterPower.innerText, '4.500 кВт ↓ (Заряд)');
    assert.strictEqual(dom.batMasterSoc.innerText, '88%');
    assert.strictEqual(dom.boilerStatusBadge3d.innerText, 'Нагрів активний');
  });

  await t.test('3D View applies Vivid Red Semantics on Blackout / Discharge', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._language = 'uk';

    const dom = {};
    card.shadowRoot.getElementById = (id) => {
      if (!dom[id]) dom[id] = createMockNode();
      return dom[id];
    };

    // Simulate Blackout with EPS load
    card._update3DRealisticView({
      unitStr: 'кВт',
      totalSolarKw: 0,
      totalWindKw: 0.35,
      wt1Kw: 0.35,
      wt1Rpm: 110,
      wt2Kw: 0.0,
      wt2Rpm: 0,
      isBlackout: true,
      gridKw: 0,
      isImport: false,
      isExport: false,
      inverterKw: 1.50,
      masterSoc: 74,
      batKw: 1.15,
      isBatCharging: false,
      isBatDischarging: true,
      batVolt: 52.80,
      batCurrent: 21.7,
      totalCapacityKwh: 28.8,
      storedKwh: 16.42,
      houseKw: 1.50,
      boilerKw: 0.00
    });

    // Inverter enters ISLAND · EPS MODE
    assert.strictEqual(dom.invScreenStatus.textContent, 'ISLAND · EPS MODE');
    assert.strictEqual(dom.invScreenStatus.fill, '#fb7185');
    assert.strictEqual(dom.invScreenLed.fill, '#ef4444');

    // Grid shows offline / blackout
    assert.match(dom.gridStatusBadge.innerText, /Мережа знеструмлена/);
    assert.strictEqual(dom.gridPowerVal3d.innerText, '0.000 кВт');
    assert.strictEqual(dom.gridVolt3d.innerText, '0.0 V');
    assert.strictEqual(dom.gridCurrent3d.innerText, '0.0 A');

    // Battery enters Red Discharge & Autonomy Timer
    assert.match(dom.cardBattery.className, /card-discharge-glow/);
    assert.strictEqual(dom.batMasterPower.innerText, '1.150 кВт ↑ (РОЗРЯД)');
    assert.strictEqual(dom.batPredictionTitle.innerText, 'ОЧІКУВАНА АВТОНОМІЯ (ДО РОЗРЯДУ):');
    assert.match(dom.batTimerVal.innerText, /год/);
    assert.strictEqual(dom.boilerStatusBadge3d.innerText, 'Вимкнено для економії');
  });

  await t.test('3D View hides 2D energyFlowCanvas and battery badges', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._viewMode = '3d';

    const dom = {
      realistic3dView: createMockNode(),
      schematicView: createMockNode(),
      headerViewToggle: createMockNode(),
      energyFlowCanvas: createMockNode(),
      batBranchBadgesContainer: createMockNode()
    };
    card.shadowRoot.getElementById = (id) => dom[id] || null;

    card._applyViewMode();
    assert.strictEqual(dom.realistic3dView.style.display, 'block');
    assert.strictEqual(dom.schematicView.style.display, 'none');
    assert.strictEqual(dom.energyFlowCanvas.style.display, 'none');
    assert.strictEqual(dom.batBranchBadgesContainer.style.display, 'none');

    // Toggle to schematic
    card._toggleViewMode('schematic');
    assert.strictEqual(dom.realistic3dView.style.display, 'none');
    assert.strictEqual(dom.schematicView.style.display, 'block');
    assert.strictEqual(dom.energyFlowCanvas.style.display, 'block');
    assert.strictEqual(dom.batBranchBadgesContainer.style.display, 'block');
  });

});
