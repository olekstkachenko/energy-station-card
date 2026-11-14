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
const { DEFAULT_CONFIG } = await import('../src/card/default-config.js');

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

  await t.test('connectedCallback upgrades pre-existing own hass property set before async element upgrade', () => {
    const panel = new EnergyStationPanel();
    let receivedHass = null;
    const mockCard = {
      set hass(val) { receivedHass = val; },
      setConfig: () => {},
      _updateFlowPaths: () => {}
    };
    panel.shadowRoot.getElementById = (id) => (id === 'stationCard' ? mockCard : null);
    const mockHass = { states: { 'sensor.a': { state: '1' } } };
    // Simulate ha-panel-custom setting .hass onto an un-upgraded custom element before module import completes
    Object.defineProperty(panel, 'hass', {
      value: mockHass,
      writable: true,
      configurable: true,
      enumerable: true
    });
    panel.connectedCallback();
    assert.strictEqual(Object.prototype.hasOwnProperty.call(panel, 'hass'), false);
    assert.strictEqual(panel._hass, mockHass);
    assert.strictEqual(receivedHass, mockHass);
  });

  await t.test('_isDefaultConfig accurately distinguishes DEFAULT_CONFIG from user custom config', () => {
    const panel = new EnergyStationPanel();
    assert.strictEqual(panel._isDefaultConfig(DEFAULT_CONFIG), true, 'DEFAULT_CONFIG must be detected as default');
    assert.strictEqual(panel._isDefaultConfig(null), true, 'null must be detected as default');
    assert.strictEqual(panel._isDefaultConfig({}), true, 'empty object must be detected as default');

    // Real user configuration: 1500W & Khersonets wind, 25 kWh yield, 1 boiler subload, no microinverter
    const userConfig = {
      title: 'Energy Station',
      solar: { target_daily_yield: 25.0, strings: [{ name: 'PV 1', voltage_entity: 'sensor.pv1_volt' }] },
      wind: {
        turbine_count: 2,
        turbines: [
          { name: '1500W', power_entity: 'sensor.vitriak_power' },
          { name: 'Херсонець', power_entity: 'sensor.ju_wei_power' }
        ]
      },
      load: {
        subloads: [{ id: 'boiler', name: 'Бойлер', entity: 'sensor.boiler_power' }]
      },
      aux: { show: false, type: 'none' }
    };
    assert.strictEqual(panel._isDefaultConfig(userConfig), false, 'Real user config must NOT be detected as default');

    // Config with explicit _customized: true
    const customMarked = { ...DEFAULT_CONFIG, _customized: true };
    assert.strictEqual(panel._isDefaultConfig(customMarked), false, 'Marked customized config must be recognized');
  });

  await t.test('auto-discovery does not accept DEFAULT_CONFIG from localStorage and imports from lovelace dashboard', async () => {
    const panel = new EnergyStationPanel();
    panel._cardNode = { setConfig: () => {}, hass: null };

    // Simulate localStorage containing DEFAULT_CONFIG
    globalThis.localStorage.setItem('energy_station_app_config', JSON.stringify(DEFAULT_CONFIG));
    panel._loadConfig();
    assert.strictEqual(panel._hasFoundConfig, false, 'Should not mark config found when localStorage is only DEFAULT_CONFIG');

    // Mock HA WS call returning user dashboard
    const userDashConfig = {
      views: [
        {
          cards: [
            {
              type: 'custom:energy-station-card',
              solar: { target_daily_yield: 25.0 },
              wind: {
                turbines: [
                  { name: '1500W', power_entity: 'sensor.vitriak_power' },
                  { name: 'Херсонець', power_entity: 'sensor.ju_wei_power' }
                ]
              },
              load: {
                subloads: [{ id: 'boiler', name: 'Бойлер' }]
              }
            }
          ]
        }
      ]
    };

    const mockHass = {
      states: { 'sensor.test': { state: '1' } },
      callWS: async (msg) => {
        if (msg.type === 'frontend/get_user_data') return { value: null };
        if (msg.type === 'lovelace/config') return userDashConfig;
        return null;
      }
    };

    panel.hass = mockHass;
    await panel._autoDiscoverLovelaceConfig();

    assert.strictEqual(panel._hasFoundConfig, true, 'Must successfully discover user configuration');
    assert.strictEqual(panel._config.wind?.turbines?.[0]?.name, '1500W');
    assert.strictEqual(panel._config.wind?.turbines?.[1]?.name, 'Херсонець');
    assert.strictEqual(panel._config.load?.subloads?.length, 1);
    assert.strictEqual(panel._config.solar?.target_daily_yield, 25.0);
  });

  await t.test('suppressDemo prevents fake 12.0 kW solar and 48.6 kWh daily yield when HA is connected', async () => {
    const { EnergyStationCard } = await import('../src/card/energy-station-card.js');
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    const domMap = {};
    const dummyNode = () => ({
      innerText: '',
      innerHTML: '',
      title: '',
      style: { setProperty() {} },
      classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
      setAttribute() {},
      getAttribute: () => '',
      querySelector: () => null,
      querySelectorAll: () => [],
      appendChild() {},
      addEventListener() {}
    });

    card._nodes = new Proxy(domMap, {
      get: (target, prop) => {
        if (!(prop in target)) target[prop] = dummyNode();
        return target[prop];
      }
    });

    card.shadowRoot.getElementById = (id) => {
      if (!domMap[id]) domMap[id] = dummyNode();
      return domMap[id];
    };

    // When hass is connected with states but PV sensors are not generating / 0 / unavailable at night
    const mockLiveHass = {
      states: {
        'sensor.breaker_phase_a_voltage': { state: '230.0', attributes: { unit_of_measurement: 'V' } },
        'sensor.grid_freq': { state: '50.0' },
        'sensor.s1': { state: '0' },
        'sensor.s2': { state: '0' },
        'sensor.s3': { state: '0' },
        'sensor.s4': { state: '0' },
        'sensor.s5': { state: '0' },
        'sensor.s6': { state: '0' }
      }
    };

    card._initialized = true;
    card._hass = mockLiveHass;
    card._updateValues();

    const pv1Val = domMap.pvVal_1?.innerText;
    const pv2Val = domMap.pvVal_2?.innerText;
    const pv3Val = domMap.pvVal_3?.innerText;
    const totalPv = domMap.totalPvPowerVal?.innerText;
    const dailyKwh = domMap.dailySolarYield?.innerText;

    // Verify: No fake 4.0 kW or 12.0 kW or 48.6 kWh
    assert.strictEqual(pv1Val, '0.000 кВт', 'PV 1 must be 0.000 кВт when HA is connected, never 4.000 кВт');
    assert.strictEqual(pv2Val, '0.000 кВт', 'PV 2 must be 0.000 кВт when HA is connected, never 4.000 кВт');
    assert.strictEqual(pv3Val, '0.000 кВт', 'PV 3 must be 0.000 кВт when HA is connected, never 4.000 кВт');
    assert.strictEqual(totalPv, '0.000 кВт', 'Total PV must be 0.000 кВт when HA is connected, never 12.000 кВт');
    assert.strictEqual(dailyKwh, '0.0', 'Daily yield must be 0.0, never fake 48.6');
  });

});

