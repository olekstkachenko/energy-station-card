import test from 'node:test';
import assert from 'node:assert';

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}
if (typeof globalThis.HTMLElement === 'undefined') {
  globalThis.HTMLElement = class {
    constructor() {
      this._shadowRoot = {
        innerHTML: '',
        getElementById: () => null,
        querySelector: () => null,
        querySelectorAll: () => []
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

const { EnergyStationPanel } = await import('../src/panel/energy-station-panel.js');

test('Energy Station Standalone Panel - Initialization & Typography', async (t) => {

  await t.test('EnergyStationPanel initializes with default appearance and loads config', () => {
    const panel = new EnergyStationPanel();
    panel._loadConfig();
    assert.ok(panel._config, 'Config should be initialized');
    assert.strictEqual(panel._config.appearance?.font_family, 'Inter');
    assert.strictEqual(panel._config.appearance?.mono_font_family, 'JetBrains Mono');
    assert.strictEqual(panel._config.appearance?.power_font_size, 'normal');
  });

  await t.test('changeScale updates scale within reasonable bounds and persists config', () => {
    const panel = new EnergyStationPanel();
    panel._loadConfig();
    panel._changeScale(1.25);
    assert.strictEqual(panel._scale, 1.25);
    assert.strictEqual(panel._config.card_scale, 1.25);

    // Test min/max clamp
    panel._changeScale(3.0);
    assert.strictEqual(panel._scale, 1.8);
    panel._changeScale(0.2);
    assert.strictEqual(panel._scale, 0.65);
  });

  await t.test('EnergyStationPanel passes hass to inner card node', () => {
    const panel = new EnergyStationPanel();
    let receivedHass = null;
    panel._cardNode = {
      set hass(val) { receivedHass = val; },
      setConfig: () => {}
    };
    const mockHass = { states: { 'sensor.test': { state: '10' } } };
    panel.hass = mockHass;
    assert.strictEqual(receivedHass, mockHass);
  });

});
