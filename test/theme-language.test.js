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

});

