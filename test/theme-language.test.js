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
if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
}

const { DEFAULT_CONFIG } = await import('../src/card/default-config.js');
const { I18N, EnergyStationCard } = await import('../src/card/energy-station-card.js');

const dummyNode = () => ({
  innerText: '',
  innerHTML: '',
  style: { setProperty() {} },
  classList: { add() {}, remove() {}, contains: () => false },
  setAttribute() {},
  getAttribute: () => '',
  querySelector: () => null,
  querySelectorAll: () => []
});

test('Energy Station Card - Theme & Language Customization', async (t) => {

  await t.test('DEFAULT_CONFIG provides dark theme, uk language, and show_quick_settings enabled', () => {
    assert.strictEqual(DEFAULT_CONFIG.theme_mode, 'dark');
    assert.strictEqual(DEFAULT_CONFIG.language, 'uk');
    assert.strictEqual(DEFAULT_CONFIG.show_quick_settings, true);
  });

  await t.test('I18N dictionary has complete symmetrical keys for uk and en', () => {
    const ukKeys = Object.keys(I18N.uk).sort();
    const enKeys = Object.keys(I18N.en).sort();

    assert.deepStrictEqual(ukKeys, enKeys, 'Both languages should have identical key sets');
    assert.strictEqual(I18N.uk.inverter_title, 'ГІБРИДНИЙ ІНВЕРТОР');
    assert.strictEqual(I18N.en.inverter_title, 'HYBRID INVERTER');
    assert.strictEqual(I18N.uk.grid_title, 'Мережа');
    assert.strictEqual(I18N.en.grid_title, 'Grid');
    assert.strictEqual(I18N.uk.theme_dark, 'Темна');
    assert.strictEqual(I18N.en.theme_dark, 'Dark');
    assert.strictEqual(I18N.uk.theme_light, 'Світла');
    assert.strictEqual(I18N.en.theme_light, 'Light');
    assert.strictEqual(I18N.uk.settings_title, 'Керування');
    assert.strictEqual(I18N.en.settings_title, 'Controls');
  });

  await t.test('formatPower returns localized unit strings based on card language', () => {
    const cardUk = new EnergyStationCard();
    cardUk._language = 'uk';
    const resUk = cardUk._formatPower({ val: 2.5, unit: 'kW' });
    assert.strictEqual(resUk.str, '2.500 кВт');

    const cardEn = new EnergyStationCard();
    cardEn._language = 'en';
    const resEn = cardEn._formatPower({ val: 2.5, unit: 'kW' });
    assert.strictEqual(resEn.str, '2.500 kW');
  });

  await t.test('toggleTheme toggles theme_mode and saves to localStorage', () => {
    const card = new EnergyStationCard();
    card._themeMode = 'dark';

    card._toggleTheme('light');
    assert.strictEqual(card._themeMode, 'light');
    assert.strictEqual(globalThis.localStorage.getItem('energy_station_theme'), 'light');

    card._toggleTheme('dark');
    assert.strictEqual(card._themeMode, 'dark');
    assert.strictEqual(globalThis.localStorage.getItem('energy_station_theme'), 'dark');
  });

  await t.test('toggleLanguage toggles between uk and en and updates translation lookup', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._language = 'uk';

    assert.strictEqual(card._t('settings_title'), 'Керування');
    assert.strictEqual(card._t('inverter_working'), 'ПРАЦЮЄ');

    card._language = 'en';
    assert.strictEqual(card._t('settings_title'), 'Controls');
    assert.strictEqual(card._t('inverter_working'), 'WORKING');
  });

  await t.test('battery charge & sell power controls configured with exact Deye entities and translations', () => {
    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._language = 'uk';

    assert.strictEqual(card._t('ctrl_title'), 'Контроль струму заряду акумулятора');
    assert.strictEqual(card._t('ctrl_solar_charge'), 'Струм заряду АКБ від сонця');
    assert.strictEqual(card._t('ctrl_sell_power'), 'Потужність Продажу');
    assert.strictEqual(card._t('ctrl_grid_charge'), 'Струм заряду АКБ від мережі');

    assert.strictEqual(card._config.controls.solar_charge_entity, 'number.deye_12k_inverter_max_charge_current');
    assert.strictEqual(card._config.controls.grid_charge_entity, 'number.deye_12k_inverter_grid_charge_current');
    assert.strictEqual(card._config.controls.sell_power_entity, 'number.deye_12k_inverter_export_surplus_power');

    card._language = 'en';
    assert.strictEqual(card._t('ctrl_title'), 'Battery Charge Current Control');
    assert.strictEqual(card._t('ctrl_solar_charge'), 'Solar Charge Current');
    assert.strictEqual(card._t('ctrl_sell_power'), 'Sell Power Limit');
    assert.strictEqual(card._t('ctrl_grid_charge'), 'Grid Charge Current');
  });

  await t.test('supports card_scale and max_width configuration and _changeScale bounds', () => {
    assert.strictEqual(DEFAULT_CONFIG.card_scale, 1.0);
    assert.strictEqual(DEFAULT_CONFIG.max_width, '1400px');

    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card.setConfig({ ...DEFAULT_CONFIG, card_scale: 1.2, max_width: '100%' });
    assert.strictEqual(card._scale, 1.2);
    assert.strictEqual(card._config.max_width, '100%');

    card._changeScale(1.5);
    assert.strictEqual(card._scale, 1.5);

    // Clamps within [0.7, 2.0]
    card._changeScale(3.0);
    assert.strictEqual(card._scale, 2.0);

    card._changeScale(0.2);
    assert.strictEqual(card._scale, 0.7);
  });

  await t.test('dual-zone tariffs calculates day/night split, cost, solar savings and feed-in export income correctly', () => {
    assert.strictEqual(DEFAULT_CONFIG.tariffs.day_rate, 4.32);
    assert.strictEqual(DEFAULT_CONFIG.tariffs.night_rate, 2.16);
    assert.strictEqual(DEFAULT_CONFIG.tariffs.export_rate, 5.30);
    assert.strictEqual(DEFAULT_CONFIG.tariffs.night_start_hour, 23);
    assert.strictEqual(DEFAULT_CONFIG.tariffs.night_end_hour, 7);
    assert.strictEqual(DEFAULT_CONFIG.tariffs.currency, 'грн');

    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._nodes = {
      gridCostDailyRow: { style: { display: 'none' } },
      gridCostDailyVal: { innerText: '' },
      gridCostSplitVal: { innerText: '' },
      gridExportIncomeRow: { style: { display: 'none' } },
      gridExportIncomeVal: { innerText: '' },
      gridTariffBadge: { style: { background: '', border: '', color: '', display: 'none' }, innerText: '' },
      solarSavingsDaily: { style: { display: 'none' }, innerText: '' }
    };

    // 10 kWh import, 6 kWh export, 15 kWh solar
    card._calculateTariffs(10.0, 6.0, 15.0);

    // Verify grid daily cost row is displayed and has value
    assert.strictEqual(card._nodes.gridCostDailyRow.style.display, 'block');
    assert.match(card._nodes.gridCostDailyVal.innerText, /грн/);
    assert.match(card._nodes.gridCostSplitVal.innerText, /🌙/);

    // Verify export income (6 kWh * 5.30 = +31.80 грн)
    assert.strictEqual(card._nodes.gridExportIncomeRow.style.display, 'block');
    assert.strictEqual(card._nodes.gridExportIncomeVal.innerText, '+31.80 грн');

    // Verify active tariff badge is displayed
    assert.strictEqual(card._nodes.gridTariffBadge.style.display, 'inline-flex');
    assert.match(card._nodes.gridTariffBadge.innerText, /грн/);

    // Verify solar savings: 15 kWh * 4.32 = ~64.80 грн
    assert.strictEqual(card._nodes.solarSavingsDaily.style.display, 'block');
    assert.strictEqual(card._nodes.solarSavingsDaily.innerText, '💰 Заощаджено: ~64.80 грн');
  });

  await t.test('battery telemetry displays temperature, remaining capacity, and cell delta unbalance', () => {
    assert.strictEqual(I18N.uk.bat_delta, 'Розбаланс');
    assert.strictEqual(I18N.en.bat_delta, 'Cell Delta');
    assert.strictEqual(I18N.uk.bat_remaining, 'Залишок');
    assert.strictEqual(I18N.en.bat_remaining, 'Remaining');

    // Verify cell_delta_entity in default config
    assert.strictEqual(DEFAULT_CONFIG.battery.modules[0].cell_delta_entity, 'sensor.bms_rack1_cell_delta');
    assert.strictEqual(DEFAULT_CONFIG.battery.modules[1].cell_delta_entity, 'sensor.bms_rack2_cell_delta');

    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    const domMap = {
      batCapacityVal: { innerHTML: '', innerText: '', style: {} },
      batMasterTempVal: { innerText: '', style: {} },
      batChargeDaily: { innerText: '', style: {} },
      batDischargeDaily: { innerText: '', style: {} },
      batPackSoc_1: { innerText: '', style: {} },
      batPackVolt_1: { innerText: '', style: {} },
      batPackCurr_1: { innerText: '', style: {} },
      batPackPower_1: { innerText: '', style: {} },
      batPackTempVal_1: { innerText: '', style: {} },
      batPackDelta_1: { style: {} },
      batPackDeltaVal_1: { innerText: '', style: {} },
      batPackKwh_1: { innerText: '', style: {} },
      batPackSoc_2: { innerText: '', style: {} },
      batPackVolt_2: { innerText: '', style: {} },
      batPackCurr_2: { innerText: '', style: {} },
      batPackPower_2: { innerText: '', style: {} },
      batPackTempVal_2: { innerText: '', style: {} },
      batPackDelta_2: { style: {} },
      batPackDeltaVal_2: { innerText: '', style: {} },
      batPackKwh_2: { innerText: '', style: {} }
    };

    card._nodes = new Proxy(domMap, {
      get(target, prop) {
        if (!(prop in target)) {
          target[prop] = dummyNode();
        }
        return target[prop];
      }
    });

    card.shadowRoot.getElementById = (id) => {
      if (!domMap[id]) {
        domMap[id] = dummyNode();
      }
      return domMap[id];
    };

    // Simulate HA with temperature and delta sensors
    card._hass = {
      states: {
        'sensor.deye_12k_inverter_battery_soc': { state: '75', attributes: { unit_of_measurement: '%' } },
        'sensor.deye_12k_inverter_battery_temperature': { state: '26.8', attributes: { unit_of_measurement: '°C' } },
        'sensor.inverter_12_kvt_battery_capacity': { state: '13.0', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.bms_rack1_soc': { state: '80', attributes: { unit_of_measurement: '%' } },
        'sensor.bms_rack1_temperature': { state: '28.5', attributes: { unit_of_measurement: '°C' } },
        'sensor.bms_rack1_cell_delta': { state: '0.014', attributes: { unit_of_measurement: 'V' } }, // 14 mV in Volts
        'sensor.bms_rack2_soc': { state: '70', attributes: { unit_of_measurement: '%' } },
        'sensor.bms_rack2_temperature': { state: '22.0', attributes: { unit_of_measurement: '°C' } },
        'sensor.bms_rack2_cell_delta': { state: '42', attributes: { unit_of_measurement: 'mV' } } // 42 mV (amber)
      }
    };

    card._updateValues();

    // 1. Master battery temperature
    assert.strictEqual(domMap.batMasterTempVal.innerText, '26,8');

    // 2. Master remaining capacity: 13.0 * 75% = 9.75 kWh
    assert.match(domMap.batCapacityVal.innerHTML, /~9,75/);

    // 3. Module 1 temperature, remaining capacity (7.88 * 80% = 6.30 kWh), and cell delta (14 mV -> green)
    assert.strictEqual(domMap.batPackTempVal_1.innerText, '28,5');
    assert.match(domMap.batPackKwh_1.innerText, /~6,30/);
    assert.strictEqual(domMap.batPackDeltaVal_1.innerText, '14 mV');
    assert.strictEqual(domMap.batPackDelta_1.style.color, '#34d399'); // Green (<= 25 mV)

    // 4. Module 2 cell delta (42 mV -> amber)
    assert.strictEqual(domMap.batPackTempVal_2.innerText, '22,0');
    assert.match(domMap.batPackKwh_2.innerText, /~3,58/); // 5.12 * 70% = 3.58 kWh
    assert.strictEqual(domMap.batPackDeltaVal_2.innerText, '42 mV');
    assert.strictEqual(domMap.batPackDelta_2.style.color, '#fbbf24'); // Amber (26..50 mV)
  });

  await t.test('solar fields display installed capacity and live generation percentage, and total solar calculates percentage of installed power', () => {
    assert.strictEqual(DEFAULT_CONFIG.solar.installed_power, 12.0);
    assert.strictEqual(DEFAULT_CONFIG.solar.strings[0].capacity_kw, 4.0);

    const card = new EnergyStationCard();
    card._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    card._config.solar.installed_power = 15.0; // 15 kWp total
    card._config.solar.strings = [
      { name: 'PV 01 - Дах Південь', capacity_kw: 6.0, power_entity: 'sensor.pv1_power' },
      { name: 'PV 02 - Дах Захід', capacity_kw: 4.5, power_entity: 'sensor.pv2_power' },
      { name: 'PV 03 - Навіс', capacity_kw: 4.5, power_entity: 'sensor.pv3_power' }
    ];
    card._language = 'uk';

    const domMap = {};
    card._nodes = new Proxy(domMap, {
      get: (target, prop) => {
        if (!(prop in target)) {
          target[prop] = dummyNode();
        }
        return target[prop];
      }
    });

    card.shadowRoot.getElementById = (id) => {
      if (!domMap[id]) {
        domMap[id] = dummyNode();
      }
      return domMap[id];
    };

    // Simulate PV generation:
    // PV1: 4.5 kW out of 6.0 kWp = 75% (green)
    // PV2: 1.8 kW out of 4.5 kWp = 40% (amber)
    // PV3: 0.9 kW out of 4.5 kWp = 20% (gray)
    // Total: 4.5 + 1.8 + 0.9 = 7.2 kW out of 15.0 kWp = 48.0% (amber)
    card._hass = {
      states: {
        'sensor.pv1_power': { state: '4500', attributes: { unit_of_measurement: 'W' } },
        'sensor.pv2_power': { state: '1800', attributes: { unit_of_measurement: 'W' } },
        'sensor.pv3_power': { state: '900', attributes: { unit_of_measurement: 'W' } }
      }
    };

    card._updateValues();

    // 1. PV1: 6.0 kWp, 75% green
    assert.strictEqual(domMap.pvCapVal_1.innerText, '6,0');
    assert.strictEqual(domMap.pvPercent_1.innerText, '(75%)');
    assert.strictEqual(domMap.pvPercent_1.style.color, '#34d399');

    // 2. PV2: 4.5 kWp, 40% amber
    assert.strictEqual(domMap.pvCapVal_2.innerText, '4,5');
    assert.strictEqual(domMap.pvPercent_2.innerText, '(40%)');
    assert.strictEqual(domMap.pvPercent_2.style.color, '#fbbf24');

    // 3. PV3: 4.5 kWp, 20% gray
    assert.strictEqual(domMap.pvCapVal_3.innerText, '4,5');
    assert.strictEqual(domMap.pvPercent_3.innerText, '(20%)');
    assert.strictEqual(domMap.pvPercent_3.style.color, '#94a3b8');

    // 4. Station Total: 7.200 кВт, 48% (з 15.0 кВтп)
    assert.strictEqual(domMap.totalPvPowerVal.innerText, '7.200 кВт');
    assert.strictEqual(domMap.totalPvPercentBadge.innerText, '48%');
    assert.strictEqual(domMap.totalPvPercentBadge.style.color, '#fbbf24');
    assert.strictEqual(domMap.totalPvCapDetail.innerText, '48,0%');
    assert.strictEqual(domMap.totalPvCapTotal.innerText, '(з 15,0 кВтп)');
  });

});


