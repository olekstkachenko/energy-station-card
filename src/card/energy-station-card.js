import { DEFAULT_CONFIG } from './default-config.js';
import { ICONS, getSvgIcon } from './svg-helpers.js';
import './energy-station-card-editor.js';

export const I18N = {
  uk: {
    live_status: 'HA Live',
    solar_yield_today: 'Генерація сьогодні',
    total_pv: 'СУМАРНО PV',
    inverter_title: 'ГІБРИДНИЙ ІНВЕРТОР',
    inverter_working: 'ПРАЦЮЄ',
    inverter_standby: 'ОЧІКУВАННЯ',
    inverter_fault: 'ПОМИЛКА',
    inverter_offline: 'ВИМКНЕНО',
    inverter_self: '⚡ Власне:',
    grid_title: 'Мережа',
    grid_import: 'Імпорт',
    grid_export: 'Експорт',
    grid_dir_import: '→ Імпорт',
    grid_dir_export: '← Експорт',
    grid_dir_off: 'Вимкнено',
    grid_dir_idle: 'Мережа',
    house_title: 'Гарантоване',
    house_badge: 'Будинок',
    bat_charge: 'Заряд',
    bat_discharge: 'Розряд',
    bat_dir_charge: 'Заряд ↓',
    bat_dir_discharge: 'Розряд ↑',
    bat_idle: 'Очікування',
    wind_title: 'Вітрогенерація',
    wind_day: 'День:',
    wind_month: 'Місяць:',
    wind_calm: 'Штиль',
    wind_gen: 'Генерація',
    aux_microinverter: 'Мікроінвертор',
    aux_generator: 'Генератор',
    aux_wind: 'Вітрогенератор',
    aux_smart_load: 'Smart Load',
    aux_source_gen: 'Джерело → GEN port',
    subload_boiler: 'Бойлер',
    subload_heat_pump: 'Тепловий насос',
    subload_other: 'Інше',
    settings_title: 'Керування',
    theme_label: 'Тема',
    theme_dark: 'Темна',
    theme_light: 'Світла',
    lang_label: 'Мова',
    lang_uk: 'УКР',
    lang_en: 'ENG',
    bat_prefix: 'Батарея',
    ctrl_title: 'Контроль струму заряду акумулятора',
    ctrl_solar_charge: 'Струм заряду АКБ від сонця',
    ctrl_sell_power: 'Потужність Продажу',
    ctrl_grid_charge: 'Струм заряду АКБ від мережі',
    tariff_night: 'Ніч',
    tariff_day: 'День',
    tariff_export: 'Зелений тариф',
    tariff_cost: 'Вартість',
    export_income: 'Дохід від експорту',
    solar_saved: 'Заощаджено',
    bat_delta: 'Розбаланс',
    bat_remaining: 'Залишок',
    kwh_unit: 'кВт·год'
  },
  en: {
    live_status: 'HA Live',
    solar_yield_today: 'Today Yield',
    total_pv: 'TOTAL PV',
    inverter_title: 'HYBRID INVERTER',
    inverter_working: 'WORKING',
    inverter_standby: 'STANDBY',
    inverter_fault: 'FAULT',
    inverter_offline: 'OFFLINE',
    inverter_self: '⚡ Self:',
    grid_title: 'Grid',
    grid_import: 'Import',
    grid_export: 'Export',
    grid_dir_import: '→ Import',
    grid_dir_export: '← Export',
    grid_dir_off: 'Disconnected',
    grid_dir_idle: 'Grid',
    house_title: 'Essential Load',
    house_badge: 'House',
    bat_charge: 'Charge',
    bat_discharge: 'Discharge',
    bat_dir_charge: 'Charge ↓',
    bat_dir_discharge: 'Discharge ↑',
    bat_idle: 'Idle',
    wind_title: 'Wind Generation',
    wind_day: 'Day:',
    wind_month: 'Month:',
    wind_calm: 'Calm',
    wind_gen: 'Generating',
    aux_microinverter: 'Microinverter',
    aux_generator: 'Generator',
    aux_wind: 'Wind Turbine',
    aux_smart_load: 'Smart Load',
    aux_source_gen: 'Source → GEN port',
    subload_boiler: 'Boiler',
    subload_heat_pump: 'Heat Pump',
    subload_other: 'Other',
    settings_title: 'Controls',
    theme_label: 'Theme',
    theme_dark: 'Dark',
    theme_light: 'Light',
    lang_label: 'Language',
    lang_uk: 'UA',
    lang_en: 'EN',
    bat_prefix: 'Battery',
    ctrl_title: 'Battery Charge Current Control',
    ctrl_solar_charge: 'Solar Charge Current',
    ctrl_sell_power: 'Sell Power Limit',
    ctrl_grid_charge: 'Grid Charge Current',
    tariff_night: 'Night',
    tariff_day: 'Day',
    tariff_export: 'Feed-in Tariff',
    tariff_cost: 'Cost',
    export_income: 'Export Income',
    solar_saved: 'Saved',
    bat_delta: 'Cell Delta',
    bat_remaining: 'Remaining',
    kwh_unit: 'kWh'
  }
};

export class EnergyStationCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = null;
    this._hass = null;
    this._initialized = false;
    this._themeMode = 'dark';
    this._language = 'uk';
    this._scale = 1.0;
    
    // Cached DOM nodes for high performance live updates
    this._nodes = {};
    this._resizeObserver = null;
  }

  connectedCallback() {
    this._setupResizeObserver();
  }

  disconnectedCallback() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  static getConfigElement() {
    return document.createElement('energy-station-card-editor');
  }

  static getStubConfig() {
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  getCardSize() {
    return 6;
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    // Ensure clean mutable clone to prevent Home Assistant frozen object / read-only property errors
    const safeConfig = JSON.parse(JSON.stringify(config));
    const defaultClone = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    this._config = this._deepMerge(defaultClone, safeConfig);
    const storedTheme = (typeof localStorage !== 'undefined') ? localStorage.getItem('energy_station_theme') : null;
    this._themeMode = storedTheme || this._config.theme_mode || 'dark';
    const storedLang = (typeof localStorage !== 'undefined') ? localStorage.getItem('energy_station_lang') : null;
    this._language = storedLang || this._config.language || 'uk';
    const storedScale = (typeof localStorage !== 'undefined') ? localStorage.getItem('energy_station_scale') : null;
    this._scale = storedScale ? parseFloat(storedScale) : (this._config.card_scale || this._config.scale || 1.0);
    this._renderCardSkeleton();
    if (this._hass) this._updateValues();
  }

  _rAF(cb) {
    if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame(cb);
    }
    return setTimeout(cb, 0);
  }

  _changeScale(targetScale) {
    let s = typeof targetScale === 'number' ? targetScale : (this._scale + (targetScale || 0.1));
    s = Math.max(0.7, Math.min(2.0, Math.round(s * 100) / 100));
    this._scale = s;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('energy_station_scale', s.toString());
    }
    const container = this.shadowRoot?.querySelector('.energy-station-container');
    if (container) {
      container.style.setProperty('--es-card-scale', s.toString());
      container.style.zoom = s.toString();
    }
    const zoomVal = this.shadowRoot?.getElementById('headerZoomVal');
    if (zoomVal) {
      zoomVal.innerText = `${Math.round(s * 100)}%`;
    }
    this._rAF(() => {
      this._updateFlowPaths();
      setTimeout(() => this._updateFlowPaths(), 80);
    });
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._initialized) {
      this._renderCardSkeleton();
    }
    this._updateValues();
  }

  _deepMerge(target, source) {
    const out = Array.isArray(target) ? [...target] : Object.assign({}, target);
    if (!source || typeof source !== 'object') return out;
    for (const key of Object.keys(source)) {
      const srcVal = source[key];
      const tgtVal = target ? target[key] : undefined;
      if (srcVal && typeof srcVal === 'object' && !Array.isArray(srcVal)) {
        out[key] = this._deepMerge(tgtVal || {}, srcVal);
      } else {
        out[key] = srcVal;
      }
    }
    return out;
  }

  _getEntityState(entityId) {
    if (!this._hass || !entityId || !this._hass.states[entityId]) return null;
    const stateObj = this._hass.states[entityId];
    const rawStr = String(stateObj.state).trim();
    const cleanNum = rawStr.replace(',', '.');
    const val = parseFloat(cleanNum);
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return {
      raw: stateObj.state,
      val: isNaN(val) ? 0 : val,
      unit: unit,
      attributes: stateObj.attributes
    };
  }

  _t(key) {
    const lang = this._language || 'uk';
    return I18N[lang]?.[key] || I18N.uk?.[key] || key;
  }

  _toggleTheme(targetTheme) {
    const newTheme = targetTheme || (this._themeMode === 'light' ? 'dark' : 'light');
    this._themeMode = newTheme;
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem('energy_station_theme', newTheme);
    } catch (e) {}
    this._applyTheme();
  }

  _toggleLanguage(targetLang) {
    const newLang = targetLang || (this._language === 'en' ? 'uk' : 'en');
    this._language = newLang;
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem('energy_station_lang', newLang);
    } catch (e) {}
    this._renderCardSkeleton();
    if (this._hass) this._updateValues();
  }

  _applyTheme() {
    const container = this.shadowRoot?.querySelector('.energy-station-container');
    if (!container) return;
    const isLight = this._themeMode === 'light';
    container.classList.toggle('theme-light', isLight);

    const headerBtn = this.shadowRoot.getElementById('headerThemeToggle');
    if (headerBtn) {
      headerBtn.innerHTML = isLight ? '☀️' : '🌙';
      headerBtn.setAttribute('title', isLight ? this._t('theme_dark') : this._t('theme_light'));
    }

    const btnDark = this.shadowRoot.getElementById('btnThemeDark');
    const btnLight = this.shadowRoot.getElementById('btnThemeLight');
    if (btnDark && btnLight) {
      btnDark.classList.toggle('active', !isLight);
      btnLight.classList.toggle('active', isLight);
    }
  }

  _formatPower(entityVal, fallbackVal = 0) {
    const unitStr = this._language === 'en' ? 'kW' : 'кВт';
    if (!entityVal) return { num: fallbackVal.toFixed(3), kw: fallbackVal, str: `${fallbackVal.toFixed(3)} ${unitStr}` };
    let kw = entityVal.val;
    // Auto convert Watts to kW
    if (entityVal.unit === 'W') {
      kw = kw / 1000;
    }
    return {
      num: kw.toFixed(3),
      kw: kw,
      str: `${kw.toFixed(3)} ${unitStr}`
    };
  }

  _fireMoreInfo(entityId) {
    if (!entityId) return;
    const event = new CustomEvent('hass-more-info', {
      detail: { entityId },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  _renderCardSkeleton() {
    const c = this._config || DEFAULT_CONFIG;
    this._initialized = true;

    // Load styles
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${c.animations?.speed || 1.2}s;
        }

        * {
          box-sizing: border-box;
        }

        .energy-station-container {
          background-color: var(--es-bg);
          color: #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.65);
          border: 1px solid var(--es-border);
          position: relative;
          width: 100%;
          max-width: var(--es-card-max-width, ${c.max_width || '1400px'});
          margin: 0 auto;
          padding: 22px 28px 24px 28px;
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
          zoom: var(--es-card-scale, ${this._scale || 1.0});
        }

        .es-mono {
          font-family: 'JetBrains Mono', monospace;
          font-feature-settings: "tnum" 1;
        }

        /* Energy Flow Canvas & Conduit Network */
        .es-energy-flow-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
        }

        .flow-track {
          fill: none;
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .flow-pulse {
          fill: none;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 10 14;
          transition: opacity 0.35s ease, stroke 0.35s ease;
        }

        .flow-pulse.flow-forward {
          animation: esFlowForward var(--flow-speed, 1.2s) linear infinite;
        }

        .flow-pulse.flow-reverse {
          animation: esFlowBackward var(--flow-speed, 1.2s) linear infinite;
        }

        .flow-pulse.flow-grid {
          stroke: #38bdf8;
          filter: drop-shadow(0 0 6px #0284c7) drop-shadow(0 0 2px #38bdf8);
        }

        .flow-pulse.flow-solar {
          stroke: #fbbf24;
          filter: drop-shadow(0 0 6px #d97706) drop-shadow(0 0 2px #fde047);
        }

        .flow-pulse.flow-load {
          stroke: #22d3ee;
          filter: drop-shadow(0 0 6px #0891b2) drop-shadow(0 0 2px #67e8f9);
        }

        .flow-pulse.flow-battery.charging {
          stroke: #34d399;
          filter: drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7);
        }

        .flow-pulse.flow-battery.discharging {
          stroke: #f87171;
          filter: drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5);
        }

        .flow-pulse.flow-car {
          stroke: #38bdf8;
          filter: drop-shadow(0 0 6px #0284c7) drop-shadow(0 0 2px #38bdf8);
        }

        .flow-pulse.flow-wind {
          stroke: #06b6d4;
          filter: drop-shadow(0 0 6px #0891b2) drop-shadow(0 0 2px #67e8f9);
        }

        .flow-pulse.flow-aux {
          stroke: #c084fc;
          filter: drop-shadow(0 0 6px #9333ea) drop-shadow(0 0 2px #d8b4fe);
        }

        .flow-pulse.inactive {
          opacity: 0;
          animation: none !important;
        }

        @keyframes esFlowForward {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes esFlowBackward {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 48; }
        }

        /* Flow animations */
        .flow-line {
          stroke-dasharray: 6 8;
          animation: esDashflow var(--flow-speed, 1.2s) linear infinite;
        }

        .flow-line-reverse {
          stroke-dasharray: 6 8;
          animation: esDashflowRev var(--flow-speed, 1.2s) linear infinite;
        }

        @keyframes esDashflow {
          to { stroke-dashoffset: -28; }
        }

        @keyframes esDashflowRev {
          to { stroke-dashoffset: 28; }
        }

        .es-inverter-card { position: relative; z-index: 2; }
        .es-node-box { position: relative; z-index: 2; }
        .es-master-battery-hub { position: relative; z-index: 2; }
        .es-solar-section { position: relative; z-index: 2; }
        .es-aux-box { position: relative; z-index: 2; }
        .es-wind-station { position: relative; z-index: 2; }

        /* Glow drop-shadows */
        .glow-solar { filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.45)); }
        .glow-battery { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.45)); }
        .glow-grid { filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.45)); }
        .glow-aux { filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.45)); }
        .glow-wind { filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.55)); }

        /* Wind Turbine Rotor Spin Animation */
        @keyframes esSpinTurbine {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .turbine-rotor {
          transform-origin: 12px 10px;
          transition: transform 0.4s ease;
        }

        .turbine-rotor.spinning {
          animation: esSpinTurbine var(--turbine-speed, 1.5s) linear infinite;
        }

        .clickable-node {
          cursor: pointer;
          transition: transform 0.18s ease, filter 0.18s ease, border-color 0.18s ease;
        }
        .clickable-node:hover {
          transform: translateY(-2px);
          filter: brightness(1.15);
        }

        /* Header */
        .es-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .es-header-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.25rem;
          font-weight: 800;
          color: #f59e0b;
          letter-spacing: -0.02em;
        }
        .es-header-badge {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(245, 158, 11, 0.12);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.25);
        }
        .es-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        /* Solar section */
        .es-solar-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4px;
        }
        .es-sun-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #fbbf24;
          margin-bottom: 3px;
        }
        .es-pv-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
          padding: 4px 0;
        }
        .es-pv-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px 10px;
          background: rgba(14, 23, 42, 0.65);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 12px;
          min-width: 76px;
          text-align: center;
          transition: all 0.2s ease;
        }
        .es-pv-top-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }
        .es-pv-label {
          font-size: 11px;
          color: #fbbf24;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 1px;
        }
        .es-pv-val {
          font-size: 14px;
          font-weight: 800;
          color: #fbbf24;
        }
        .es-pv-metrics {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 3px;
          padding-top: 3px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }
        .es-pv-metrics .volt {
          color: #38bdf8;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .es-pv-metrics .volt:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .es-pv-metrics .sep {
          color: rgba(255, 255, 255, 0.25);
          font-size: 8px;
        }
        .es-pv-metrics .curr {
          color: #34d399;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .es-pv-metrics .curr:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .es-pv-cap {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          white-space: nowrap;
        }
        .es-pv-percent-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 800;
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
          vertical-align: middle;
        }
        .theme-light .es-pv-metrics {
          border-top-color: rgba(0, 0, 0, 0.08) !important;
        }
        .theme-light .es-pv-metrics .volt {
          color: #0284c7 !important;
        }
        .theme-light .es-pv-metrics .sep {
          color: rgba(0, 0, 0, 0.25) !important;
        }
        .theme-light .es-pv-metrics .curr {
          color: #059669 !important;
        }
        .theme-light .es-pv-cap {
          color: #64748b !important;
        }
        .theme-light .es-pv-percent-badge {
          background: rgba(245, 158, 11, 0.12) !important;
          color: #d97706 !important;
          border-color: rgba(245, 158, 11, 0.35) !important;
        }

        /* Bus */
        .es-bus-container {
          width: 100%;
          max-width: 1360px;
          height: 26px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tri-col hub */
        .es-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
          max-width: 1360px;
          margin: 8px auto 20px auto;
          position: relative;
        }

        .es-wing-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
          width: 100%;
        }
        .es-center-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
        }
        .es-wing-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          width: 100%;
        }

        .es-schematic-node, .es-node-box {
          background: rgba(10, 18, 32, 0.75);
          border-radius: 14px;
          padding: 8px 14px;
          min-width: 130px;
          max-width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 2;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
          transition: all 0.25s ease;
        }
        .es-schematic-node:hover, .es-node-box:hover {
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }
        .es-node-icon {
          width: 24px;
          height: 24px;
          min-width: 24px;
          min-height: 24px;
          max-width: 24px;
          max-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .es-node-icon svg,
        .es-schematic-node .es-node-icon svg,
        .es-pv-panel svg,
        .es-inverter-icon-box svg,
        .turbine-icon-box svg,
        .es-subload-icon svg,
        .es-aux-box svg {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          display: block;
          flex-shrink: 0;
        }
        .es-node-title {
          font-size: 13px;
          font-weight: 600;
          color: #cbd5e1;
        }
        .es-node-power {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.2;
          margin: 2px 0 1px 0;
        }
        .es-node-dir {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Responsive adaptations for mobile & narrow dashboard columns */
        @container es-card (max-width: 820px) {
          .energy-station-container {
            padding: 12px 10px 18px 10px;
          }

          .es-hub-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "grid  loads"
              "inv   inv";
            gap: 16px 12px;
            margin: 4px 0 14px 0;
            width: 100%;
          }

          .es-wing-left {
            grid-area: grid;
            align-items: center;
            width: 100%;
            gap: 16px;
          }

          .es-wing-right {
            grid-area: loads;
            align-items: center;
            width: 100%;
          }

          .es-center-col {
            grid-area: inv;
            align-items: center;
            width: 100%;
          }

          .es-schematic-node, .es-node-box {
            width: 100%;
            max-width: 160px;
            min-width: 0;
            padding: 6px 8px;
          }

          .es-inverter-wings-row {
            flex-direction: column !important;
            gap: 8px !important;
          }

          .es-inverter-side-telemetry {
            flex-direction: row !important;
            justify-content: center !important;
            gap: 16px !important;
            text-align: center !important;
          }

          .es-aux-box {
            position: static !important;
            margin: 10px auto !important;
          }

          .es-master-battery-hub {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "soc   soc"
              "left  right";
            gap: 8px 12px;
            padding: 10px 14px;
            width: 100%;
            box-sizing: border-box;
          }

          .es-bat-hub-soc-col {
            grid-area: soc;
            justify-self: center;
          }

          .es-bat-hub-left-col {
            grid-area: left;
            text-align: left;
            align-self: center;
          }

          .es-bat-hub-right-col {
            grid-area: right;
            text-align: right;
            align-self: center;
          }

          .es-subloads-row {
            gap: 8px;
            flex-wrap: wrap;
          }

          .es-subload-card {
            min-width: 68px;
            padding: 4px 6px;
          }

          .es-battery-pack-card {
            min-width: 105px;
            padding: 6px 8px;
          }

          .es-bottom-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }

          .es-bottom-spacer {
            display: none !important;
          }
        }

        .es-inverter-wings-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .es-inverter-side-telemetry {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          font-weight: 700;
          color: #f59e0b;
          min-width: 90px;
          margin-top: 2px;
          margin-bottom: 24px;
          position: relative;
          z-index: 3;
        }
        .es-inverter-side-telemetry.left {
          text-align: right;
          align-items: flex-end;
        }
        .es-inverter-side-telemetry.right {
          text-align: left;
          align-items: flex-start;
          position: relative;
        }

        .es-inverter-card {
          width: 205px;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(14, 22, 38, 0.9);
          border: 2px solid rgba(249, 115, 22, 0.75);
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
          margin: 0;
        }
        .es-inverter-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 2px;
        }
        .es-inverter-icon-box {
          width: 30px;
          height: 30px;
          color: #fbbf24;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .es-inverter-freq {
          font-size: 12px;
          font-weight: 700;
          color: #fbbf24;
        }
        .es-inverter-title {
          font-size: 12px;
          font-weight: 600;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .es-inverter-power {
          font-size: 20px;
          font-weight: 900;
          color: #fb923c;
          margin: 2px 0;
        }
        .es-inverter-status-badge {
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.35);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .es-aux-box {
          position: absolute;
          bottom: calc(100% + 14px);
          left: -10px;
          padding: 6px 12px;
          border-radius: 14px;
          background: rgba(88, 28, 135, 0.45);
          border: 1px solid rgba(192, 132, 252, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 125px;
          max-width: 150px;
          z-index: 5;
          box-shadow: 0 4px 16px rgba(88, 28, 135, 0.3);
          transition: all 0.25s ease;
        }
        .es-aux-box:hover {
          border-color: rgba(216, 180, 254, 0.8);
          transform: translateY(-2px);
        }

        .es-wind-station {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          width: 100%;
          max-width: 440px;
          position: relative;
          z-index: 5;
        }

        .es-wind-pods-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }

        .es-wind-summary-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(8, 47, 73, 0.35);
          border: 1px solid rgba(6, 182, 212, 0.25);
          color: #94a3b8;
        }

        .es-turbine-card {
          flex: 1;
          min-width: 135px;
          max-width: 195px;
          padding: 8px 10px;
          border-radius: 14px;
          background: rgba(8, 47, 73, 0.45);
          border: 1px solid rgba(6, 182, 212, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.25s ease;
        }
        .es-turbine-card:hover {
          border-color: #22d3ee;
          transform: translateY(-2px);
        }

        /* Sub-loads grid & bus */
        .es-subloads-bus-container {
          width: 100%;
          max-width: 360px;
          height: 26px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px 0;
        }
        .es-subloads-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: nowrap;
          width: 100%;
          max-width: 380px;
        }

        .es-subload-card {
          padding: 6px 10px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 76px;
          text-align: center;
          transition: all 0.2s ease;
        }
        .es-subload-card:hover {
          border-color: #22d3ee;
          transform: translateY(-2px);
        }

        /* Battery section */
        .es-battery-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 4px;
        }
        .es-master-battery-hub {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 12px 32px;
          border-radius: 16px;
          background: linear-gradient(90deg, rgba(6, 78, 59, 0.2) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(6, 78, 59, 0.2) 100%);
          border: 1px solid rgba(16, 185, 129, 0.35);
          margin-bottom: 0px;
          flex-wrap: wrap;
        }

        /* Battery Branch Floating Power Badges */
        .es-bat-branch-badges {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
          overflow: visible;
        }
        .es-bat-branch-badge {
          position: absolute;
          display: none;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 2px 10px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 800;
          background: rgba(10, 15, 29, 0.95);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: auto;
          cursor: pointer;
          transition: opacity 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          z-index: 12;
        }
        .es-bat-branch-badge.charge {
          border: 1.5px solid rgba(16, 185, 129, 0.7);
          color: #34d399;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.45);
        }
        .es-bat-branch-badge.discharge {
          border: 1.5px solid rgba(239, 68, 68, 0.7);
          color: #f87171;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.45);
        }
        .es-bat-branch-badge.idle {
          border: 1px solid rgba(100, 116, 139, 0.35);
          color: #94a3b8;
          box-shadow: none;
        }

        #batteryBusContainer {
          width: 100%;
          max-width: 1360px;
          height: 48px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .es-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1.6fr 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          position: relative;
        }
        .es-bottom-spacer {
          width: 100%;
        }
        .es-bottom-controls-dock {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .es-battery-rack {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
        }
        .es-battery-pack-card {
          padding: 8px 14px;
          background: rgba(14, 23, 42, 0.75);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 125px;
          text-align: center;
          transition: all 0.25s ease;
          position: relative;
          z-index: 2;
        }
        .es-battery-pack-card:hover {
          border-color: #34d399;
          transform: translateY(-2px);
        }
        .es-bat-name {
          font-size: 11px;
          color: #cbd5e1;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .es-bat-soc-val {
          font-size: 20px;
          font-weight: 900;
          color: #34d399;
          line-height: 1.1;
        }
        .es-bat-volt {
          font-size: 12px;
          font-weight: 700;
          color: #94a3b8;
          margin-top: 2px;
        }
        .es-bat-telemetry-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 4px;
          font-size: 11px;
        }
        .es-bat-delta-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          transition: all 0.25s ease;
        }
        .theme-light .es-bat-delta-badge {
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        /* Quick Settings & Controls Card */
        .es-quick-settings-card {
          padding: 10px 14px 12px 14px;
          background: rgba(14, 23, 42, 0.88);
          border: 1.5px solid rgba(56, 189, 248, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          width: 100%;
          max-width: 320px;
          box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.45);
          transition: all 0.25s ease;
          position: relative;
          z-index: 2;
        }
        .es-quick-settings-card:hover {
          border-color: #38bdf8;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px -2px rgba(56, 189, 248, 0.25);
        }
        .es-qs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .es-qs-title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }
        .es-qs-icon {
          width: 16px;
          height: 16px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .es-qs-title {
          font-size: 11px;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .es-qs-actions {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
        }
        .es-qs-mini-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 6px;
          padding: 2px 6px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 700;
          transition: all 0.2s ease;
          line-height: 1;
          user-select: none;
        }
        .es-qs-mini-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .es-qs-mini-icon {
          display: inline-flex;
          width: 12px;
          height: 12px;
        }

        /* Control Tiles */
        .es-ctrl-tiles {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .es-ctrl-tile {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: rgba(8, 14, 27, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 9px;
          padding: 6px 10px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .es-ctrl-tile:hover {
          border-color: rgba(56, 189, 248, 0.35);
          background: rgba(8, 14, 27, 0.85);
        }
        .es-ctrl-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .es-ctrl-label-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .es-ctrl-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 5px;
        }
        .es-ctrl-solar { color: #fbbf24; }
        .es-ctrl-sell { color: #34d399; }
        .es-ctrl-grid { color: #38bdf8; }
        .es-ctrl-label {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          white-space: nowrap;
        }
        .es-ctrl-val {
          font-size: 13px;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: -0.01em;
        }
        .es-ctrl-slider-wrap {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 2px 0;
        }
        .es-ctrl-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          background: rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: background 0.08s linear;
        }
        .es-ctrl-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
          transition: transform 0.12s ease;
        }
        .es-ctrl-slider::-webkit-slider-thumb:hover {
          transform: scale(1.18);
          background: #0ea5e9;
        }
        .es-ctrl-slider::-moz-range-thumb {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
        }
        .es-segmented-toggle {
          display: flex;
          background: rgba(8, 13, 25, 0.7);
          border-radius: 10px;
          padding: 2px;
          gap: 2px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .es-seg-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 4px 6px;
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }
        .es-seg-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.06);
        }
        .es-seg-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.45);
        }
        .es-header-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .es-header-pill-btn {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 9999px;
          padding: 3px 9px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .es-header-pill-btn:hover {
          border-color: #38bdf8;
          color: #38bdf8;
          background: rgba(14, 165, 233, 0.15);
          transform: translateY(-1px);
        }

        /* LIGHT THEME STYLING OVERRIDES */
        .energy-station-container.theme-light {
          background: radial-gradient(circle at 50% 12%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%) !important;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08) !important;
          color: #0f172a !important;
        }
        .theme-light .es-header-title span:first-child {
          color: #0f172a !important;
        }
        .theme-light .es-header-badge {
          background: rgba(245, 158, 11, 0.15);
          color: #b45309;
          border-color: rgba(245, 158, 11, 0.35);
        }
        .theme-light .es-header-pill-btn {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(203, 213, 225, 0.9);
          color: #334155;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }
        .theme-light .es-header-pill-btn:hover {
          background: #ffffff;
          border-color: #0284c7;
          color: #0284c7;
        }
        .theme-light .flow-track {
          stroke: rgba(203, 213, 225, 0.85) !important;
        }
        .theme-light .es-schematic-node {
          background: rgba(255, 255, 255, 0.92) !important;
          box-shadow: 0 6px 20px -3px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04) !important;
        }
        .theme-light .es-node-title {
          color: #475569 !important;
        }
        .theme-light .es-inverter-card {
          background: rgba(255, 255, 255, 0.94) !important;
          border-color: rgba(249, 115, 22, 0.75) !important;
          box-shadow: 0 10px 25px -4px rgba(249, 115, 22, 0.18), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }
        .theme-light .es-inverter-title {
          color: #475569 !important;
        }
        .theme-light .es-inverter-side-telemetry {
          color: #c2410c !important;
        }
        .theme-light .es-inverter-self-consumption {
          background: rgba(249, 115, 22, 0.1) !important;
          border-color: rgba(249, 115, 22, 0.35) !important;
          color: #c2410c !important;
        }
        .theme-light .es-sun-header {
          background: rgba(255, 255, 255, 0.9) !important;
          border-color: rgba(245, 158, 11, 0.4) !important;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.1) !important;
        }
        .theme-light .es-pv-panel {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(245, 158, 11, 0.45) !important;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.08) !important;
        }
        .theme-light .es-pv-label {
          color: #475569 !important;
        }
        .theme-light .es-master-battery-hub {
          background: linear-gradient(90deg, rgba(209, 250, 229, 0.6) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(209, 250, 229, 0.6) 100%) !important;
          border-color: rgba(16, 185, 129, 0.5) !important;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12) !important;
        }
        .theme-light #masterBatteryFlowHint span:first-child {
          color: #0f172a !important;
        }
        .theme-light .es-battery-pack-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(16, 185, 129, 0.45) !important;
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.1) !important;
        }
        .theme-light .es-bat-name {
          color: #475569 !important;
        }
        .theme-light .es-bat-volt {
          color: #64748b !important;
        }
        .theme-light .es-bat-branch-badge {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12) !important;
        }
        .theme-light .es-bat-branch-badge.charge {
          border-color: #059669 !important;
          color: #047857 !important;
        }
        .theme-light .es-bat-branch-badge.discharge {
          border-color: #dc2626 !important;
          color: #b91c1c !important;
        }
        .theme-light .es-turbine-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(6, 182, 212, 0.45) !important;
          box-shadow: 0 6px 16px rgba(6, 182, 212, 0.1) !important;
        }
        .theme-light .es-wind-summary-bar {
          background: rgba(241, 245, 249, 0.9) !important;
          border-color: rgba(6, 182, 212, 0.3) !important;
          color: #475569 !important;
        }
        .theme-light .es-subload-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(6, 182, 212, 0.35) !important;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.08) !important;
        }
        .theme-light .es-subload-card span:nth-child(2) {
          color: #475569 !important;
        }
        .theme-light .es-aux-box {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(192, 132, 252, 0.6) !important;
          box-shadow: 0 6px 18px rgba(147, 51, 234, 0.12) !important;
        }
        .theme-light #auxTitle {
          color: #475569 !important;
        }
        .theme-light .es-quick-settings-card {
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(14, 165, 233, 0.45) !important;
          box-shadow: 0 6px 18px rgba(14, 165, 233, 0.12) !important;
        }
        .theme-light .es-qs-header {
          border-bottom-color: rgba(0, 0, 0, 0.08) !important;
        }
        .theme-light .es-qs-title {
          color: #334155 !important;
        }
        .theme-light .es-qs-mini-btn {
          background: rgba(0, 0, 0, 0.05) !important;
          border-color: rgba(0, 0, 0, 0.14) !important;
          color: #475569 !important;
        }
        .theme-light .es-qs-mini-btn:hover {
          background: rgba(14, 165, 233, 0.18) !important;
          border-color: #0ea5e9 !important;
          color: #0284c7 !important;
        }
        .theme-light .es-ctrl-tile {
          background: #f8fafc !important;
          border-color: rgba(0, 0, 0, 0.06) !important;
        }
        .theme-light .es-ctrl-tile:hover {
          border-color: rgba(14, 165, 233, 0.35) !important;
          background: #ffffff !important;
        }
        .theme-light .es-ctrl-label {
          color: #64748b !important;
        }
        .theme-light .es-ctrl-slider {
          background: rgba(0, 0, 0, 0.1) !important;
        }
        .theme-light .es-segmented-toggle {
          background: rgba(241, 245, 249, 0.9) !important;
          border-color: rgba(203, 213, 225, 0.8) !important;
        }
        .theme-light .es-seg-btn {
          color: #64748b !important;
        }
        .theme-light .es-seg-btn:hover {
          color: #0f172a !important;
          background: rgba(226, 232, 240, 0.6) !important;
        }
        .theme-light .es-seg-btn.active {
          background: #0284c7 !important;
          color: #ffffff !important;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35) !important;
        }

        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container ${this._themeMode === 'light' ? 'theme-light' : ''}">
        
        <!-- FULL CARD DYNAMIC ENERGY FLOW NETWORK -->
        <svg id="energyFlowCanvas" class="es-energy-flow-canvas">
          <!-- 1. Grid <-> Inverter Path -->
          <path id="pathGridInvBase" class="flow-track" />
          <path id="pathGridInvFlow" class="flow-pulse flow-grid" />

          <!-- 2. Grid -> Non-Essential Path -->
          <path id="pathGridNonEssBase" class="flow-track" />
          <path id="pathGridNonEssFlow" class="flow-pulse flow-grid" />

          <!-- 3. Non-Essential -> Car Path -->
          <path id="pathNonEssCarBase" class="flow-track" />
          <path id="pathNonEssCarFlow" class="flow-pulse flow-car" />

          <!-- 4. Solar -> Inverter Path -->
          <path id="pathSolarInvBase" class="flow-track" />
          <path id="pathSolarInvFlow" class="flow-pulse flow-solar" />

          <!-- 5. Inverter -> Essential Loads Path -->
          <path id="pathInvLoadBase" class="flow-track" />
          <path id="pathInvLoadFlow" class="flow-pulse flow-load" />

          <!-- 6. Essential Loads -> Subloads Bus Stem Path -->
          <path id="pathLoadSubloadsBase" class="flow-track" />
          <path id="pathLoadSubloadsFlow" class="flow-pulse flow-load" />

          <!-- 7. Inverter -> Aux/Microinverter Path -->
          <path id="pathInvAuxBase" class="flow-track" />
          <path id="pathInvAuxFlow" class="flow-pulse flow-aux" />

          <!-- 8. Inverter <-> Battery Hub Path -->
          <path id="pathInvBatBase" class="flow-track" />
          <path id="pathInvBatFlow" class="flow-pulse flow-battery" />

          <!-- 9. Battery Hub -> Battery Bus Stem Path -->
          <path id="pathBatStemBase" class="flow-track" />
          <path id="pathBatStemFlow" class="flow-pulse flow-battery" />

          <!-- 10. Wind Turbines -> Hub Paths -->
          <path id="pathTurbine1Base" class="flow-track" />
          <path id="pathTurbine1Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine2Base" class="flow-track" />
          <path id="pathTurbine2Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine3Base" class="flow-track" />
          <path id="pathTurbine3Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine4Base" class="flow-track" />
          <path id="pathTurbine4Flow" class="flow-pulse flow-wind" />

          <!-- 11. Battery Branch Conduits (Master Hub <-> Battery Packs 1..8) -->
          <path id="pathBat1Base" class="flow-track" />
          <path id="pathBat1Flow" class="flow-pulse flow-battery" />
          <path id="pathBat2Base" class="flow-track" />
          <path id="pathBat2Flow" class="flow-pulse flow-battery" />
          <path id="pathBat3Base" class="flow-track" />
          <path id="pathBat3Flow" class="flow-pulse flow-battery" />
          <path id="pathBat4Base" class="flow-track" />
          <path id="pathBat4Flow" class="flow-pulse flow-battery" />
          <path id="pathBat5Base" class="flow-track" />
          <path id="pathBat5Flow" class="flow-pulse flow-battery" />
          <path id="pathBat6Base" class="flow-track" />
          <path id="pathBat6Flow" class="flow-pulse flow-battery" />
          <path id="pathBat7Base" class="flow-track" />
          <path id="pathBat7Flow" class="flow-pulse flow-battery" />
          <path id="pathBat8Base" class="flow-track" />
          <path id="pathBat8Flow" class="flow-pulse flow-battery" />

        </svg>

        <!-- HEADER -->
        <div class="es-header">
          <div class="es-header-title">
            <span>${c.title || 'Energy Station'}</span>
            <span class="es-header-badge">PRO FLOW</span>
          </div>
          <div class="es-header-controls">
            <div class="es-zoom-control" style="display: flex; align-items: center; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 1px 4px; gap: 2px;">
              <button class="es-header-pill-btn" id="headerZoomOut" title="Зменшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">−</button>
              <span class="es-mono" id="headerZoomVal" style="font-size: 11px; min-width: 36px; text-align: center; color: #38bdf8; font-weight: 700; cursor: pointer; user-select: none;" title="Скинути до 100%">${Math.round(this._scale * 100)}%</span>
              <button class="es-header-pill-btn" id="headerZoomIn" title="Збільшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">+</button>
            </div>
            <button class="es-header-pill-btn" id="headerThemeToggle" title="${this._t('theme_label')}">
              ${this._themeMode === 'light' ? '☀️' : '🌙'}
            </button>
            <button class="es-header-pill-btn es-mono" id="headerLangToggle" title="${this._t('lang_label')}">
              ${this._language === 'uk' ? 'UA' : 'EN'}
            </button>
            <div class="es-status-dot" id="liveStatusDot"></div>
            <span style="font-size: 11px; color: #94a3b8;" id="liveStatusText">HA Live</span>
          </div>
        </div>

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${ICONS.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${c.solar?.target_daily_yield || 55.0}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
            </div>
            <div class="es-mono" id="solarSavingsDaily" style="font-size: 11px; font-weight: 700; color: #34d399; margin-top: 4px; display: none;"></div>
          </div>

          <!-- PV Panels Grid -->
          <div class="es-pv-grid" id="pvPanelsContainer"></div>

          <!-- Solar Bus Line (Dynamic width based on PV count) -->
          <div class="es-bus-container" id="solarBusContainer">
            <svg id="solarBusSvg" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="none">
              <line id="solarBusBase" stroke="#d97706" stroke-width="2" stroke-linecap="round" />
              <line id="solarFlowCollector" class="flow-line" stroke="#fbbf24" stroke-width="2.5" />
              <g id="solarBusFeeders"></g>
              <line id="solarBusStemBase" stroke="#d97706" stroke-width="2" />
              <line id="solarBusStemFlow" class="flow-line" stroke="#fbbf24" stroke-width="3" />
            </svg>
          </div>

          <!-- Total Solar Badge -->
          <div style="display: flex; flex-direction: column; align-items: center; margin-top: -2px;">
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${ICONS.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t('total_pv')}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span id="totalPvPowerVal">12,000 ${this._language === 'en' ? 'kW' : 'кВт'}</span>
              <span id="totalPvPercentBadge" class="es-pv-percent-badge" title="Поточна віддача від встановленої потужності СЕС">0%</span>
            </div>
            <div id="totalPvSubline" class="es-mono" style="font-size: 11px; color: #94a3b8; margin-top: 1px; display: flex; align-items: center; justify-content: center; gap: 3px;" title="Поточний відсоток та встановлена пікова потужність СЕС">
              <span id="totalPvCapDetail" style="color: #fbbf24; font-weight: 700;">0.0%</span>
              <span id="totalPvCapTotal" style="color: #64748b; font-size: 10px;">(з 12.0 кВтп)</span>
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID, NON-ESSENTIAL & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; display: flex; flex-direction: column; gap: 3px; align-items: flex-end; margin-bottom: 2px;">
              <div>${this._t('grid_import')} <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div id="gridCostDailyRow" style="font-size: 11px; display: none; margin-top: -1px; text-align: right;">
                <span id="gridCostDailyVal" style="color: #38bdf8; font-weight: 700;">~0.00 грн</span>
                <span id="gridCostSplitVal" style="color: #64748b; font-size: 10px; margin-left: 2px;"></span>
              </div>
              <div>${this._t('grid_export')} <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
              <div id="gridExportIncomeRow" style="font-size: 11px; display: none; margin-top: -1px; text-align: right;">
                <span id="gridExportIncomeVal" style="color: #34d399; font-weight: 700;">+0.00 грн</span>
              </div>
            </div>

            <!-- Active Tariff Badge -->
            <div id="gridTariffBadgeContainer" style="display: flex; justify-content: flex-end; margin-bottom: 3px;">
              <div class="es-mono" id="gridTariffBadge" style="font-size: 10px; font-weight: 700; border-radius: 9999px; padding: 2px 8px; display: none; align-items: center; gap: 4px;"></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ICONS.grid_tower}</div>
              <div class="es-node-title">${this._t('grid_title')}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t('grid_dir_export')}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(c.grid?.show_non_essential && c.grid?.non_essential_power_entity) ? '' : 'hidden'}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ICONS.house_outline || ICONS.house}</div>
              <div class="es-node-title">${this._t('non_essential')}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c.grid?.show_car && c.grid?.car_power_entity) ? '' : 'hidden'}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ICONS.car}</div>
              <div class="es-node-title" id="carTitle">${c.grid?.car_title || this._t('car')}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">0.000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
            </div>
          </div>

          <!-- CENTER: HYBRID INVERTER & AUX -->
          <div class="es-center-col">
            <div class="es-inverter-wings-row">
              <!-- Left Telemetry: AC & DC Temp -->
              <div class="es-inverter-side-telemetry left es-mono" id="inverterLeftTelemetry">
                <div>AC <span id="inverterAcTemp">41,20</span> °C</div>
                <div>DC <span id="inverterDcTemp">38,40</span> °C</div>
              </div>

              <!-- Center: Inverter Card -->
              <div class="es-inverter-card glow-inverter clickable-node" id="inverterNode">
                <div class="es-inverter-card-top-row">
                  <div class="es-inverter-icon-box">${ICONS.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t('inverter_title')}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t('inverter_working')}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${c.inverter?.show_self_consumption !== false ? 'flex' : 'none'}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t('inverter_self')}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === 'en' ? 'W' : 'Вт'}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${c.aux?.type === 'none' || c.aux?.type === 'wind' ? 'hidden' : ''}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${ICONS[c.aux?.type] || ICONS.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${(c.aux?.type === 'microinverter' && (!c.aux?.title || c.aux?.title === 'Вітрогенератор')) ? this._t('aux_microinverter') : (c.aux?.title || this._t('aux_microinverter'))}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${c.aux?.subtitle || this._t('aux_source_gen')}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${c.wind?.show === false && c.aux?.type !== 'wind' ? 'hidden' : ''}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t('house_badge')} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ICONS.house}</div>
              <div class="es-node-title">${this._t('house_title')}</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">8,000 ${this._language === 'en' ? 'kW' : 'кВт'}</div>
            </div>

            <!-- Subloads Bus Bar -->
            <div class="es-subloads-bus-container" id="subloadsBusContainer">
              <svg id="subloadsBusSvg" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="none">
                <line id="subloadsBusBase" stroke="#0891b2" stroke-width="2" stroke-linecap="round" />
                <line id="subloadsFlowCollector" class="flow-line" stroke="#22d3ee" stroke-width="2.5" />
                <g id="subloadsBusFeeders"></g>
                <line id="subloadsBusStemBase" stroke="#0891b2" stroke-width="2" />
                <line id="subloadsBusStemFlow" class="flow-line" stroke="#22d3ee" stroke-width="2.5" />
              </svg>
            </div>

            <!-- Subloads Row -->
            <div class="es-subloads-row" id="subloadsContainer"></div>
          </div>

        </div>

        <!-- BATTERY TELEMETRY & MULTI-PACK RACK -->
        <div class="es-battery-section">
          
          <!-- Master Battery Hub -->
          <div class="es-master-battery-hub glow-battery clickable-node" id="masterBatteryHub">
            <!-- Left Counters -->
            <div class="es-bat-hub-left-col es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 3px; text-align: right;">
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase;">${this._t('bat_charge')}</div>
              <div id="batChargeDaily" style="color: #34d399; font-weight: 700; font-size: 13px;">4,30 kWh</div>
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-top: 2px;">${this._t('bat_discharge')}</div>
              <div id="batDischargeDaily" style="color: #fbbf24; font-weight: 700; font-size: 13px;">6,10 kWh</div>
            </div>

            <!-- Center SoC & Power (Icon and 'ГОЛОВНА БАТАРЕЯ' removed as requested) -->
            <div class="es-bat-hub-soc-col" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 15px; font-weight: 700; color: #34d399; margin: 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <span style="font-size: 20px; font-weight: 900; color: #f8fafc;">3,000 ${this._language === 'en' ? 'kW' : 'кВт'}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">${this._t('bat_dir_charge')}</span>
              </div>
            </div>

            <!-- Right Telemetry -->
            <div class="es-bat-hub-right-col es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 3px;">
              <div style="display: flex; align-items: center; justify-content: flex-start; gap: 8px;">
                <span id="batVoltVal" style="color: #6ee7b7; font-weight: 700;">53,24 V</span>
                <span id="batMasterTempBadge" style="color: #fdba74; font-size: 11px; font-weight: 600; cursor: pointer;" title="Температура АКБ">🌡️ <span id="batMasterTempVal">25,0</span>°C</span>
              </div>
              <div id="batCurrentVal" style="color: #38bdf8; font-weight: 700;">-56,30 A</div>
              <div id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;" title="Залишок ємності АКБ / Номінальна ємність">~10,40 kWh (13,00 kWh)</div>
            </div>
          </div>

          <!-- Battery Spacer (Conduits drawn on energyFlowCanvas) -->
          <div class="es-bus-container" id="batteryBusContainer" style="height: 44px; width: 100%;"></div>

          <!-- Bottom Grid Row: Spacer (left), Batteries (center), Quick Controls Dock (right) -->
          <div class="es-bottom-row">
            <div class="es-bottom-spacer"></div>
            <div class="es-battery-rack" id="batteryRackContainer"></div>
            <div class="es-bottom-controls-dock" id="bottomControlsDock"></div>
          </div>

        </div>

        <!-- Floating Badges for Battery Branches (Rendered directly over energyFlowCanvas conduits) -->
        <div class="es-bat-branch-badges" id="batBranchBadgesContainer">
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_1"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_2"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_3"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_4"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_5"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_6"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_7"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_8"></div>
        </div>

      </div>
    `;

    // Cache elements
    this._cacheDomNodes();
    this._renderDynamicPvPanels();
    this._renderDynamicWindTurbines();
    this._renderDynamicSubloads();
    this._renderDynamicBatteryRack();
    this._bindInteractions();
    this._setupResizeObserver();
    this._rAF(() => this._updateFlowPaths());
  }

  _cacheDomNodes() {
    const root = this.shadowRoot;
    this._nodes = {
      dailySolarYield: root.getElementById('dailySolarYield'),
      targetSolarYield: root.getElementById('targetSolarYield'),
      solarProgressBar: root.getElementById('solarProgressBar'),
      solarSavingsDaily: root.getElementById('solarSavingsDaily'),
      totalPvPowerBadge: root.getElementById('totalPvPowerBadge'),
      totalPvPowerVal: root.getElementById('totalPvPowerVal'),
      totalPvPercentBadge: root.getElementById('totalPvPercentBadge'),
      totalPvSubline: root.getElementById('totalPvSubline'),
      totalPvCapDetail: root.getElementById('totalPvCapDetail'),
      totalPvCapTotal: root.getElementById('totalPvCapTotal'),
      solarFlowCollector: root.getElementById('solarFlowCollector'),

      gridImportDaily: root.getElementById('gridImportDaily'),
      gridCostDailyRow: root.getElementById('gridCostDailyRow'),
      gridCostDailyVal: root.getElementById('gridCostDailyVal'),
      gridCostSplitVal: root.getElementById('gridCostSplitVal'),
      gridTariffBadge: root.getElementById('gridTariffBadge'),
      gridExportDaily: root.getElementById('gridExportDaily'),
      gridExportIncomeRow: root.getElementById('gridExportIncomeRow'),
      gridExportIncomeVal: root.getElementById('gridExportIncomeVal'),
      gridPowerVal: root.getElementById('gridPowerVal'),
      gridDirectionLabel: root.getElementById('gridDirectionLabel'),
      carPowerVal: root.getElementById('carPowerVal'),
      carNode: root.getElementById('carNode'),
      nonEssentialNode: root.getElementById('nonEssentialNode'),
      nonEssentialPowerVal: root.getElementById('nonEssentialPowerVal'),

      inverterAcTemp: root.getElementById('inverterAcTemp'),
      inverterDcTemp: root.getElementById('inverterDcTemp'),
      inverterModelTag: root.getElementById('inverterModelTag'),
      inverterPowerVal: root.getElementById('inverterPowerVal'),
      inverterStatusBadge: root.getElementById('inverterStatusBadge'),
      inverterSelfConsumptionBox: root.getElementById('inverterSelfConsumptionBox'),
      inverterSelfConsumptionVal: root.getElementById('inverterSelfConsumptionVal'),
      inverterVolt: root.getElementById('inverterVolt'),
      inverterCurrent: root.getElementById('inverterCurrent'),
      inverterFreq: root.getElementById('inverterFreq'),

      auxNode: root.getElementById('auxNode'),
      auxTitle: root.getElementById('auxTitle'),
      auxPowerVal: root.getElementById('auxPowerVal'),
      auxSubtitle: root.getElementById('auxSubtitle'),
      auxIconBox: root.getElementById('auxIconBox'),

      windStationContainer: root.getElementById('windStationContainer'),

      dailyHouseKwh: root.getElementById('dailyHouseKwh'),
      essentialPowerVal: root.getElementById('essentialPowerVal'),
      subloadsBusContainer: root.getElementById('subloadsBusContainer'),
      subloadsBusSvg: root.getElementById('subloadsBusSvg'),
      subloadsFlowCollector: root.getElementById('subloadsFlowCollector'),
      subloadsBusBase: root.getElementById('subloadsBusBase'),
      subloadsBusStemBase: root.getElementById('subloadsBusStemBase'),
      subloadsBusStemFlow: root.getElementById('subloadsBusStemFlow'),
      subloadsBusFeeders: root.getElementById('subloadsBusFeeders'),

      batChargeDaily: root.getElementById('batChargeDaily'),
      batDischargeDaily: root.getElementById('batDischargeDaily'),
      masterBatterySoc: root.getElementById('masterBatterySoc'),
      masterBatteryFlowHint: root.getElementById('masterBatteryFlowHint'),
      batVoltVal: root.getElementById('batVoltVal'),
      batCurrentVal: root.getElementById('batCurrentVal'),
      batMasterTempVal: root.getElementById('batMasterTempVal'),
      batMasterTempBadge: root.getElementById('batMasterTempBadge'),
      batReserveSoc: root.getElementById('batReserveSoc'),
      batReserveProgressBar: root.getElementById('batReserveProgressBar'),
      batCapacityVal: root.getElementById('batCapacityVal'),
      batteryFlowCollector: root.getElementById('batteryFlowCollector'),

      pvPanelsContainer: root.getElementById('pvPanelsContainer'),
      subloadsContainer: root.getElementById('subloadsContainer'),
      batteryRackContainer: root.getElementById('batteryRackContainer'),
      bottomControlsDock: root.getElementById('bottomControlsDock')
    };
  }

  _renderDynamicWindTurbines() {
    const c = this._config || DEFAULT_CONFIG;
    const container = this._nodes?.windStationContainer || this.shadowRoot.getElementById('windStationContainer');
    if (!container) return;

    container.innerHTML = '';
    const isWindActive = c.wind?.show !== false || c.aux?.type === 'wind';
    if (!isWindActive) {
      container.classList.add('hidden');
      return;
    }
    container.classList.remove('hidden');

    const count = c.wind?.turbine_count || (c.wind?.turbines?.length || 2);
    const turbinesList = c.wind?.turbines || [];

    // Summary Bar for Total Wind Generation
    const summaryBar = document.createElement('div');
    summaryBar.className = 'es-wind-summary-bar es-mono';
    summaryBar.id = 'windStationSummaryBar';
    summaryBar.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `;
    container.appendChild(summaryBar);

    // Pods Row for turbine cards
    const podsRow = document.createElement('div');
    podsRow.className = 'es-wind-pods-row';
    container.appendChild(podsRow);

    for (let i = 0; i < count; i++) {
      const t = turbinesList[i] || {
        id: `turbine_${i + 1}`,
        name: `Вітряк ${i + 1}`,
        power_entity: `sensor.wind_turbine_${i + 1}_power`,
        rpm_entity: '',
        speed_entity: '',
        daily_energy_entity: '',
        monthly_energy_entity: '',
        animation_threshold: c.wind?.animation_threshold || 50
      };

      const hasEnergySensors = !!(t.daily_energy_entity || t.monthly_energy_entity);

      const card = document.createElement('div');
      card.className = 'es-turbine-card glow-wind clickable-node';
      card.id = `turbineCard_${i + 1}`;
      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${i + 1}">
              ${ICONS.wind_turbine}
            </div>
            <span>${t.name || `Вітряк ${i + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${i + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${i + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${i + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${i + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${i + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${hasEnergySensors ? 'flex' : 'none'}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${i + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${i + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `;

      card.addEventListener('click', () => {
        this._fireMoreInfo(t.power_entity);
      });

      podsRow.appendChild(card);
    }
  }

  _renderDynamicPvPanels() {
    const c = this._config || DEFAULT_CONFIG;
    const container = this._nodes.pvPanelsContainer;
    if (!container) return;

    container.innerHTML = '';
    const count = c.solar?.pv_count || (c.solar?.strings?.length || 3);
    const kwpUnit = this._language === 'en' ? 'kWp' : 'кВтп';
    const showMetrics = c.solar?.show_metrics !== false;

    for (let i = 1; i <= count; i++) {
      const idStr = i < 10 ? `0${i}` : `${i}`;
      const strConfig = c.solar?.strings?.[i - 1] || {};
      const strName = strConfig.name || `PV ${idStr}`;
      const capKw = strConfig.capacity_kw !== undefined ? parseFloat(strConfig.capacity_kw) : 4.0;
      const voltEnt = strConfig.voltage_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_voltage` : '');
      const currEnt = strConfig.current_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_current` : '');

      const div = document.createElement('div');
      div.className = 'es-pv-panel glow-solar clickable-node';
      div.dataset.pvIndex = i;
      div.id = `pvPanel_${i}`;
      div.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${ICONS.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${strName}</span>
        <span class="es-pv-val es-mono" id="pvVal_${i}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${i}" style="${showMetrics ? 'display: flex;' : 'display: none;'}">
          <span class="volt" id="pvVolt_${i}" title="${this._language === 'en' ? 'PV Voltage' : 'Напруга поля'}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${i}" title="${this._language === 'en' ? 'PV Current' : 'Струм поля'}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${i}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${i}">${capKw.toFixed(1).replace('.', ',')}</span> <span style="font-size: 9px; color: #64748b;">${kwpUnit}</span> <span id="pvPercent_${i}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `;
      div.addEventListener('click', () => {
        const ent = strConfig.power_entity || voltEnt || currEnt || c.solar?.total_power_entity;
        this._fireMoreInfo(ent);
      });

      const voltEl = div.querySelector(`#pvVolt_${i}`);
      if (voltEl) {
        voltEl.addEventListener('click', (e) => {
          e.stopPropagation();
          if (voltEnt) this._fireMoreInfo(voltEnt);
          else if (strConfig.power_entity) this._fireMoreInfo(strConfig.power_entity);
        });
      }

      const currEl = div.querySelector(`#pvCurr_${i}`);
      if (currEl) {
        currEl.addEventListener('click', (e) => {
          e.stopPropagation();
          if (currEnt) this._fireMoreInfo(currEnt);
          else if (strConfig.power_entity) this._fireMoreInfo(strConfig.power_entity);
        });
      }

      container.appendChild(div);
    }
  }

  _renderDynamicSubloads() {
    const c = this._config || DEFAULT_CONFIG;
    const container = this._nodes.subloadsContainer;
    if (!container) return;

    container.innerHTML = '';
    const subloads = c.load?.subloads || [];
    subloads.forEach((sub, idx) => {
      const div = document.createElement('div');
      div.className = 'es-subload-card clickable-node';
      div.id = `subloadCard_${idx}`;
      div.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${ICONS[sub.icon] || ICONS.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${sub.name}</span>
        <span class="es-mono" id="subloadVal_${idx}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `;
      div.addEventListener('click', () => {
        this._fireMoreInfo(sub.entity);
      });
      container.appendChild(div);
    });
  }

  _renderDynamicBatteryRack() {
    const c = this._config || DEFAULT_CONFIG;
    const container = this._nodes.batteryRackContainer;
    if (!container) return;

    container.innerHTML = '';
    const count = c.battery?.parallel_batteries || (c.battery?.modules?.length || 2);
    const defaultSocs = [82, 76, 91, 68, 85, 90, 72, 80];
    const defaultVolts = [52.40, 52.40, 52.40, 52.40, 52.40, 52.40];
    const defaultTemps = [25.0, 21.0, 22.5, 20.0, 24.0, 19.5, 23.0, 21.5];
    const defaultDeltas = [12, 8, 15, 9, 14, 11, 18, 10];
    const defaultPrefix = this._t('bat_prefix');
    const unitStr = this._language === 'en' ? 'kW' : 'кВт';
    const unitKwh = this._language === 'en' ? 'kWh' : 'кВт·год';

    for (let i = 1; i <= count; i++) {
      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      const modName = mod.name || `${defaultPrefix} ${i}`;
      const soc = defaultSocs[(i - 1) % defaultSocs.length];
      const volt = defaultVolts[(i - 1) % defaultVolts.length];
      const temp = defaultTemps[(i - 1) % defaultTemps.length];
      const delta = defaultDeltas[(i - 1) % defaultDeltas.length];

      const div = document.createElement('div');
      div.className = 'es-battery-pack-card glow-battery clickable-node';
      div.id = `batPackCard_${i}`;
      div.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${ICONS.battery_vertical}</div>
        <span class="es-bat-name">${modName}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${soc}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${i}">${volt.toFixed(2).replace('.', ',')} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${i}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${unitStr}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${i}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${i}">${temp.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${i}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${i}">${delta} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${i}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${unitKwh}</div>
      `;

      div.addEventListener('click', (e) => {
        if (e.target.closest(`#batPackTemp_${i}`)) {
          const tEnt = mod.temperature_entity || mod.temp || `sensor.bms_rack${i}_temperature`;
          this._fireMoreInfo(tEnt);
          return;
        }
        if (e.target.closest(`#batPackDelta_${i}`)) {
          const dEnt = mod.cell_delta_entity || mod.delta_entity || `sensor.bms_rack${i}_cell_delta`;
          this._fireMoreInfo(dEnt);
          return;
        }
        const ent = mod.soc_entity || mod.soc || mod.voltage_entity || mod.volt || mod.current_entity || c.battery?.soc_entity;
        this._fireMoreInfo(ent);
      });
      container.appendChild(div);
    }

    this._renderQuickSettingsCard();
  }

  _renderQuickSettingsCard() {
    const c = this._config || DEFAULT_CONFIG;
    const dock = this._nodes?.bottomControlsDock || this.shadowRoot.getElementById('bottomControlsDock');
    if (!dock) return;
    dock.innerHTML = '';
    if (c.show_quick_settings === false) return;

    const isLight = this._themeMode === 'light';
    const isEn = this._language === 'en';

    const solarEnt = c.controls?.solar_charge_entity || 'number.deye_12k_inverter_max_charge_current';
    const sellEnt = c.controls?.sell_power_entity || 'number.deye_12k_inverter_export_surplus_power';
    const gridEnt = c.controls?.grid_charge_entity || 'number.deye_12k_inverter_grid_charge_current';

    const card = document.createElement('div');
    card.className = 'es-quick-settings-card';
    card.id = 'quickSettingsCard';
    card.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${ICONS.battery_vertical}</span>
          <span class="es-qs-title">${this._t('ctrl_title')}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t('theme_label')}">
            <span class="es-qs-mini-icon">${isLight ? ICONS.sun_mode : ICONS.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t('lang_label')}">
            <span>${isEn ? 'EN' : 'UA'}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${solarEnt}">
              <span class="es-ctrl-icon es-ctrl-solar">${ICONS.sun_mode}</span>
              <span class="es-ctrl-label">${this._t('ctrl_solar_charge')}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSolar">80 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSolar" min="0" max="150" step="1" value="80">
          </div>
        </div>

        <!-- 2. Sell Power Limit -->
        <div class="es-ctrl-tile" id="ctrlTileSell">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${sellEnt}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ICONS.inverter}</span>
              <span class="es-ctrl-label">${this._t('ctrl_sell_power')}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${isEn ? 'W' : 'Вт'}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${gridEnt}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ICONS.grid_tower}</span>
              <span class="es-ctrl-label">${this._t('ctrl_grid_charge')}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `;

    // Theme & Language toggles
    card.querySelector('#btnThemeToggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._toggleTheme();
    });
    card.querySelector('#btnLangToggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._toggleLanguage();
    });

    // More info entity click events
    card.querySelector('#ctrlLabelWrapSolar')?.addEventListener('click', () => this._fireMoreInfo(solarEnt));
    card.querySelector('#ctrlLabelWrapSell')?.addEventListener('click', () => this._fireMoreInfo(sellEnt));
    card.querySelector('#ctrlLabelWrapGrid')?.addEventListener('click', () => this._fireMoreInfo(gridEnt));

    // Sliders input & change
    const solarSlider = card.querySelector('#ctrlSliderSolar');
    const solarVal = card.querySelector('#ctrlValSolar');
    if (solarSlider) {
      this._updateSliderGradient(solarSlider);
      solarSlider.addEventListener('input', (e) => {
        if (solarVal) solarVal.innerText = `${e.target.value} A`;
        this._updateSliderGradient(solarSlider);
      });
      solarSlider.addEventListener('change', (e) => {
        this._setNumberValue(solarEnt, e.target.value);
      });
    }

    const sellSlider = card.querySelector('#ctrlSliderSell');
    const sellVal = card.querySelector('#ctrlValSell');
    if (sellSlider) {
      this._updateSliderGradient(sellSlider);
      sellSlider.addEventListener('input', (e) => {
        const valFormatted = Number(e.target.value).toLocaleString(this._language === 'uk' ? 'uk-UA' : 'en-US');
        if (sellVal) sellVal.innerText = `${valFormatted} ${this._language === 'uk' ? 'Вт' : 'W'}`;
        this._updateSliderGradient(sellSlider);
      });
      sellSlider.addEventListener('change', (e) => {
        this._setNumberValue(sellEnt, e.target.value);
      });
    }

    const gridSlider = card.querySelector('#ctrlSliderGrid');
    const gridVal = card.querySelector('#ctrlValGrid');
    if (gridSlider) {
      this._updateSliderGradient(gridSlider);
      gridSlider.addEventListener('input', (e) => {
        if (gridVal) gridVal.innerText = `${e.target.value} A`;
        this._updateSliderGradient(gridSlider);
      });
      gridSlider.addEventListener('change', (e) => {
        this._setNumberValue(gridEnt, e.target.value);
      });
    }

    dock.appendChild(card);
    this._updateControlSliders();
  }

  _updateSliderGradient(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    slider.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${pct}%, rgba(255, 255, 255, 0.12) ${pct}%, rgba(255, 255, 255, 0.12) 100%)`;
  }

  _setNumberValue(entityId, value) {
    if (!this._hass || !entityId) return;
    const parts = entityId.split('.');
    const domain = parts[0] || 'number';
    const numVal = Number(value);
    this._hass.callService(domain, 'set_value', {
      entity_id: entityId,
      value: numVal
    });
  }

  _updateControlSliders() {
    const c = this._config || DEFAULT_CONFIG;
    if (c.show_quick_settings === false) return;
    const root = this.shadowRoot;
    if (!root) return;

    const solarEnt = c.controls?.solar_charge_entity || 'number.deye_12k_inverter_max_charge_current';
    const sellEnt = c.controls?.sell_power_entity || 'number.deye_12k_inverter_export_surplus_power';
    const gridEnt = c.controls?.grid_charge_entity || 'number.deye_12k_inverter_grid_charge_current';

    const solarSlider = root.getElementById('ctrlSliderSolar');
    const solarVal = root.getElementById('ctrlValSolar');
    const sellSlider = root.getElementById('ctrlSliderSell');
    const sellVal = root.getElementById('ctrlValSell');
    const gridSlider = root.getElementById('ctrlSliderGrid');
    const gridVal = root.getElementById('ctrlValGrid');

    // 1. Solar Charge
    if (solarSlider && (!solarSlider.matches || !solarSlider.matches(':active'))) {
      const stateObj = this._hass?.states?.[solarEnt];
      const val = (stateObj && !isNaN(parseFloat(stateObj.state))) ? parseFloat(stateObj.state) : (solarSlider.value ? parseFloat(solarSlider.value) : 80);
      solarSlider.value = val;
      if (solarVal) solarVal.innerText = `${Math.round(val)} A`;
      this._updateSliderGradient(solarSlider);
    }

    // 2. Sell Power
    if (sellSlider && (!sellSlider.matches || !sellSlider.matches(':active'))) {
      const stateObj = this._hass?.states?.[sellEnt];
      const val = (stateObj && !isNaN(parseFloat(stateObj.state))) ? parseFloat(stateObj.state) : (sellSlider.value ? parseFloat(sellSlider.value) : 5000);
      sellSlider.value = val;
      const formatted = Math.round(val).toLocaleString(this._language === 'uk' ? 'uk-UA' : 'en-US');
      const unit = this._language === 'uk' ? 'Вт' : 'W';
      if (sellVal) sellVal.innerText = `${formatted} ${unit}`;
      this._updateSliderGradient(sellSlider);
    }

    // 3. Grid Charge
    if (gridSlider && (!gridSlider.matches || !gridSlider.matches(':active'))) {
      const stateObj = this._hass?.states?.[gridEnt];
      const val = (stateObj && !isNaN(parseFloat(stateObj.state))) ? parseFloat(stateObj.state) : (gridSlider.value ? parseFloat(gridSlider.value) : 70);
      gridSlider.value = val;
      if (gridVal) gridVal.innerText = `${Math.round(val)} A`;
      this._updateSliderGradient(gridSlider);
    }
  }

  _bindInteractions() {
    const root = this.shadowRoot;
    const c = this._config || DEFAULT_CONFIG;

    root.getElementById('headerThemeToggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._toggleTheme();
    });
    root.getElementById('headerLangToggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._toggleLanguage();
    });
    root.getElementById('headerZoomIn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._changeScale(this._scale + 0.1);
    });
    root.getElementById('headerZoomOut')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._changeScale(this._scale - 0.1);
    });
    root.getElementById('headerZoomVal')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._changeScale(1.0);
    });

    root.getElementById('solarHeaderNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.solar?.daily_yield_entity || c.solar?.total_power_entity);
    });
    root.getElementById('totalPvPowerBadge')?.addEventListener('click', () => {
      this._fireMoreInfo(c.solar?.total_power_entity);
    });
    root.getElementById('gridNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.grid?.power_entity);
    });
    root.getElementById('nonEssentialNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.grid?.non_essential_power_entity);
    });
    root.getElementById('carNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.grid?.car_power_entity);
    });
    root.getElementById('inverterNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.inverter?.power_entity);
    });
    root.getElementById('inverterSelfConsumptionBox')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (c.inverter?.self_consumption_entity) {
        this._fireMoreInfo(c.inverter.self_consumption_entity);
      }
    });
    root.getElementById('auxNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.aux?.power_entity);
    });
    root.getElementById('essentialNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.load?.essential_power_entity);
    });
    root.getElementById('masterBatteryHub')?.addEventListener('click', () => {
      this._fireMoreInfo(c.battery?.soc_entity);
    });
    root.getElementById('batChargeDaily')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._fireMoreInfo(c.battery?.charge_daily_entity || 'sensor.inverter_12_kvt_daily_battery_charge');
    });
    root.getElementById('batDischargeDaily')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._fireMoreInfo(c.battery?.discharge_daily_entity || 'sensor.inverter_12_kvt_daily_battery_discharge');
    });

    for (let i = 1; i <= 8; i++) {
      const badge = root.getElementById(`batBranchBadge_${i}`);
      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      badge?.addEventListener('click', () => {
        const ent = mod.power_entity || mod.current_entity || mod.soc_entity || c.battery?.soc_entity;
        this._fireMoreInfo(ent);
      });
    }
  }

  _fetchNightEndFromHa(todayStr, nightEndHour) {
    if (this._fetchingHistoryForDate === todayStr) return;
    const c = this._config || DEFAULT_CONFIG;
    const gridEntity = c.grid?.import_daily_entity;
    if (!this._hass?.callWS || !gridEntity) return;

    this._fetchingHistoryForDate = todayStr;
    const now = new Date();
    const dStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nightEndHour, 0, 0);
    const dEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), nightEndHour, 15, 0);

    this._hass.callWS({
      type: 'history/history_during_period',
      start_time: dStart.toISOString(),
      end_time: dEnd.toISOString(),
      entity_ids: [gridEntity],
      no_attributes: true
    }).then(res => {
      const records = res?.[gridEntity];
      if (records && records.length > 0) {
        const val = parseFloat(records[0].state);
        if (!isNaN(val) && val >= 0) {
          const storageKey = `es_tariff_split_${todayStr}`;
          let snap = {};
          if (typeof localStorage !== 'undefined') {
            try {
              const cur = localStorage.getItem(storageKey);
              if (cur) snap = JSON.parse(cur);
            } catch (e) {}
          }
          snap.night_end = val;
          if (typeof localStorage !== 'undefined') {
            try { localStorage.setItem(storageKey, JSON.stringify(snap)); } catch (e) {}
          }
          if (this._hass) this._updateValues();
        }
      }
    }).catch(() => {
      // Quiet fail if HA history not enabled
    });
  }

  _calculateTariffs(gridImportKwh, gridExportKwh, solarDailyKwh) {
    const c = this._config || DEFAULT_CONFIG;
    const tCfg = c.tariffs || {};
    if (tCfg.enabled === false) {
      if (this._nodes?.gridCostDailyRow) this._nodes.gridCostDailyRow.style.display = 'none';
      if (this._nodes?.gridExportIncomeRow) this._nodes.gridExportIncomeRow.style.display = 'none';
      if (this._nodes?.gridTariffBadge) this._nodes.gridTariffBadge.style.display = 'none';
      if (this._nodes?.solarSavingsDaily) this._nodes.solarSavingsDaily.style.display = 'none';
      return;
    }

    const currency = tCfg.currency || 'грн';
    const dayRate = typeof tCfg.day_rate === 'number' ? tCfg.day_rate : 4.32;
    const nightRate = typeof tCfg.night_rate === 'number' ? tCfg.night_rate : 2.16;
    const exportRate = typeof tCfg.export_rate === 'number' ? tCfg.export_rate : 5.30;
    const nightStart = typeof tCfg.night_start_hour === 'number' ? tCfg.night_start_hour : 23;
    const nightEnd = typeof tCfg.night_end_hour === 'number' ? tCfg.night_end_hour : 7;

    const now = new Date();
    const curHour = now.getHours() + (now.getMinutes() / 60);

    // Is it currently Night tariff?
    const isNight = (nightStart > nightEnd)
      ? (curHour >= nightStart || curHour < nightEnd)
      : (curHour >= nightStart && curHour < nightEnd);

    // Active tariff badge
    if (this._nodes?.gridTariffBadge && tCfg.show_active_badge !== false) {
      const activeRate = isNight ? nightRate : dayRate;
      const activeLabel = isNight ? this._t('tariff_night') : this._t('tariff_day');
      const icon = isNight ? '🌙' : '☀️';
      const badgeBg = isNight ? 'rgba(99, 102, 241, 0.15)' : 'rgba(245, 158, 11, 0.15)';
      const badgeBorder = isNight ? 'rgba(129, 140, 248, 0.35)' : 'rgba(251, 191, 36, 0.35)';
      const badgeColor = isNight ? '#a5b4fc' : '#fbbf24';

      this._nodes.gridTariffBadge.style.background = badgeBg;
      this._nodes.gridTariffBadge.style.border = `1px solid ${badgeBorder}`;
      this._nodes.gridTariffBadge.style.color = badgeColor;
      this._nodes.gridTariffBadge.innerText = `${icon} ${activeLabel}: ${activeRate.toFixed(2)} ${currency}`;
      this._nodes.gridTariffBadge.style.display = 'inline-flex';
    } else if (this._nodes?.gridTariffBadge) {
      this._nodes.gridTariffBadge.style.display = 'none';
    }

    // Solar savings
    if (this._nodes?.solarSavingsDaily && tCfg.show_solar_savings !== false && solarDailyKwh > 0) {
      const savedAmount = solarDailyKwh * dayRate;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t('solar_saved')}: ~${savedAmount.toFixed(2)} ${currency}`;
      this._nodes.solarSavingsDaily.style.display = 'block';
    } else if (this._nodes?.solarSavingsDaily) {
      this._nodes.solarSavingsDaily.style.display = 'none';
    }

    // Export income (Зелений Тариф)
    if (this._nodes?.gridExportIncomeRow && tCfg.show_export_income !== false && typeof gridExportKwh === 'number' && gridExportKwh > 0) {
      const exportIncome = gridExportKwh * exportRate;
      if (this._nodes.gridExportIncomeVal) {
        this._nodes.gridExportIncomeVal.innerText = `+${exportIncome.toFixed(2)} ${currency}`;
      }
      this._nodes.gridExportIncomeRow.style.display = 'block';
    } else if (this._nodes?.gridExportIncomeRow) {
      this._nodes.gridExportIncomeRow.style.display = 'none';
    }

    // Grid daily cost calculation
    if (typeof gridImportKwh !== 'number' || isNaN(gridImportKwh) || gridImportKwh < 0) {
      if (this._nodes?.gridCostDailyRow) this._nodes.gridCostDailyRow.style.display = 'none';
      return;
    }

    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const storageKey = `es_tariff_split_${todayStr}`;
    let snapshot = {};
    if (typeof localStorage !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) snapshot = JSON.parse(stored);
      } catch (e) {}
    }

    let nightKwh = 0;
    let dayKwh = 0;

    if (curHour < nightEnd) {
      // Early morning (00:00 - 07:00): 100% night energy
      nightKwh = gridImportKwh;
      dayKwh = 0;
      snapshot.night_end = gridImportKwh;
      if (typeof localStorage !== 'undefined') {
        try { localStorage.setItem(storageKey, JSON.stringify(snapshot)); } catch (e) {}
      }
    } else if (curHour >= nightEnd && curHour < nightStart) {
      // Daytime (07:00 - 23:00)
      if (typeof snapshot.night_end === 'number' && snapshot.night_end <= gridImportKwh) {
        nightKwh = snapshot.night_end;
        dayKwh = Math.max(0, gridImportKwh - nightKwh);
      } else {
        // Query HA history for 07:00 checkpoint or fallback to time proportion
        this._fetchNightEndFromHa(todayStr, nightEnd);
        const nightPortion = Math.min(1.0, nightEnd / curHour);
        nightKwh = gridImportKwh * nightPortion;
        dayKwh = Math.max(0, gridImportKwh - nightKwh);
      }
      snapshot.day_end = gridImportKwh;
      if (typeof localStorage !== 'undefined') {
        try { localStorage.setItem(storageKey, JSON.stringify(snapshot)); } catch (e) {}
      }
    } else {
      // Late night (23:00 - 24:00)
      const nightEndVal = typeof snapshot.night_end === 'number' ? snapshot.night_end : (gridImportKwh * (nightEnd / curHour));
      const dayEndVal = typeof snapshot.day_end === 'number' ? snapshot.day_end : gridImportKwh;
      dayKwh = Math.max(0, dayEndVal - nightEndVal);
      const extraNight = Math.max(0, gridImportKwh - dayEndVal);
      nightKwh = nightEndVal + extraNight;
    }

    const totalCost = (nightKwh * nightRate) + (dayKwh * dayRate);

    if (this._nodes?.gridCostDailyRow && tCfg.show_daily_cost !== false) {
      if (this._nodes.gridCostDailyVal) {
        this._nodes.gridCostDailyVal.innerText = `~${totalCost.toFixed(2)} ${currency}`;
      }
      if (this._nodes.gridCostSplitVal) {
        this._nodes.gridCostSplitVal.innerText = `(🌙 ${nightKwh.toFixed(1)} + ☀️ ${dayKwh.toFixed(1)})`;
      }
      this._nodes.gridCostDailyRow.style.display = 'block';
    } else if (this._nodes?.gridCostDailyRow) {
      this._nodes.gridCostDailyRow.style.display = 'none';
    }
  }

  _updateValues() {
    if (!this._nodes.dailySolarYield) return;
    const c = this._config || DEFAULT_CONFIG;
    const unitStr = this._language === 'en' ? 'kW' : 'кВт';

    // 1. Solar
    const pvCount = c.solar?.pv_count || (c.solar?.strings?.length || 3);
    let calculatedTotalPvKw = 0;
    let totalSolarCurr = 0;
    let hasConfiguredPvEntities = false;

    // Check if any real entities are present in Home Assistant
    for (let i = 1; i <= pvCount; i++) {
      const strConfig = c.solar?.strings?.[i - 1];
      const voltEnt = strConfig?.voltage_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_voltage` : '');
      const currEnt = strConfig?.current_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_current` : '');
      const pwrEnt = strConfig?.power_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_power` : '');
      if (this._getEntityState(pwrEnt) || this._getEntityState(voltEnt) || this._getEntityState(currEnt)) {
        hasConfiguredPvEntities = true;
        break;
      }
    }

    // Calculate each PV panel / string
    for (let i = 1; i <= pvCount; i++) {
      const panelVal = this.shadowRoot.getElementById(`pvVal_${i}`);
      const panelVolt = this.shadowRoot.getElementById(`pvVolt_${i}`);
      const panelCurr = this.shadowRoot.getElementById(`pvCurr_${i}`);

      const strConfig = c.solar?.strings?.[i - 1];
      const voltEnt = strConfig?.voltage_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_voltage` : '');
      const currEnt = strConfig?.current_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_current` : '');
      const pwrEnt = strConfig?.power_entity || (i <= 3 ? `sensor.deye_12k_inverter_pv${i}_power` : '');

      const sVolt = this._getEntityState(voltEnt);
      const sCurr = this._getEntityState(currEnt);
      const sPwr = this._getEntityState(pwrEnt);

      let voltNum = 0;
      let currNum = 0;
      let kwNum = 0;

      if (sPwr) {
        kwNum = this._formatPower(sPwr).kw;
      } else if (sVolt && sCurr) {
        // Calculate P = V * I in kW
        kwNum = (sVolt.val * sCurr.val) / 1000.0;
      } else if (sVolt) {
        kwNum = 0;
      } else {
        kwNum = hasConfiguredPvEntities ? 0 : 4.0;
      }

      if (sVolt) {
        voltNum = sVolt.val;
      } else {
        voltNum = hasConfiguredPvEntities ? 0 : (380 + (i * 4.5));
      }

      if (sCurr) {
        currNum = sCurr.val;
      } else if (sPwr && voltNum > 0) {
        currNum = (kwNum * 1000) / voltNum;
      } else {
        currNum = hasConfiguredPvEntities ? 0 : (3.12 + (i * 0.28));
      }

      calculatedTotalPvKw += kwNum;
      totalSolarCurr += currNum;

      if (panelVal) {
        panelVal.innerText = `${kwNum.toFixed(3)} ${unitStr}`;
      }
      if (panelVolt) {
        panelVolt.innerText = `${voltNum.toFixed(1)} V`;
      }
      if (panelCurr) {
        panelCurr.innerText = `${currNum.toFixed(2)} A`;
      }

      const panelMetrics = this.shadowRoot.getElementById(`pvMetrics_${i}`);
      if (panelMetrics) {
        const showMetrics = c.solar?.show_metrics !== false;
        const hasData = Boolean(sVolt || sCurr || !hasConfiguredPvEntities || strConfig?.voltage_entity || strConfig?.current_entity || voltNum > 0 || currNum > 0);
        panelMetrics.style.display = (showMetrics && hasData) ? 'flex' : 'none';
      }

      // Nominal capacity and generation % for this field / string
      const strCap = strConfig?.capacity_kw !== undefined
        ? parseFloat(strConfig.capacity_kw)
        : (strConfig?.installed_power !== undefined
            ? parseFloat(strConfig.installed_power)
            : (hasConfiguredPvEntities ? 0 : 4.0));

      const strPct = (strCap > 0 && kwNum > 0)
        ? Math.min(100, Math.round((kwNum / strCap) * 100))
        : 0;

      const panelCapVal = this.shadowRoot.getElementById(`pvCapVal_${i}`);
      const panelPercent = this.shadowRoot.getElementById(`pvPercent_${i}`);
      const panelCapBox = this.shadowRoot.getElementById(`pvCap_${i}`);

      if (panelCapVal) {
        if (strCap > 0) {
          panelCapVal.innerText = strCap.toFixed(1).replace('.', ',');
          if (panelPercent) {
            panelPercent.innerText = `(${strPct}%)`;
            panelPercent.style.color = strPct >= 70 ? '#34d399' : (strPct >= 30 ? '#fbbf24' : '#94a3b8');
          }
          if (panelCapBox) panelCapBox.style.display = 'flex';
        } else {
          if (panelCapBox) panelCapBox.style.display = 'none';
        }
      }
    }

    // Total PV power: use sensor if available, otherwise automatically use sum of all strings
    const sPvTotal = this._getEntityState(c.solar?.total_power_entity);
    let totalSolarKw = 0;
    if (sPvTotal) {
      totalSolarKw = this._formatPower(sPvTotal).kw;
    } else {
      totalSolarKw = calculatedTotalPvKw;
    }

    // Total installed capacity of the station
    let totalInstalledKw = c.solar?.installed_power !== undefined ? parseFloat(c.solar.installed_power) : 0;
    if (isNaN(totalInstalledKw) || totalInstalledKw <= 0) {
      let sumStrCap = 0;
      for (let i = 0; i < pvCount; i++) {
        const s = c.solar?.strings?.[i];
        const cap = s?.capacity_kw !== undefined ? parseFloat(s.capacity_kw) : (s?.installed_power !== undefined ? parseFloat(s.installed_power) : 0);
        if (!isNaN(cap) && cap > 0) sumStrCap += cap;
      }
      totalInstalledKw = sumStrCap > 0 ? sumStrCap : (hasConfiguredPvEntities ? 0 : 12.0);
    }

    const totalPct = totalInstalledKw > 0 ? ((totalSolarKw / totalInstalledKw) * 100) : 0;
    const roundedTotalPct = Math.min(100, Math.max(0, totalPct));
    const kwpUnit = this._language === 'en' ? 'kWp' : 'кВтп';

    if (this._nodes.totalPvPowerVal) {
      this._nodes.totalPvPowerVal.innerText = `${totalSolarKw.toFixed(3)} ${unitStr}`;
    }
    if (this._nodes.totalPvPowerBadge) {
      if (!this._nodes.totalPvPowerVal) {
        this._nodes.totalPvPowerBadge.innerText = `${totalSolarKw.toFixed(3)} ${unitStr}`;
      }
      this._nodes.totalPvPowerBadge.title = this._language === 'en'
        ? `Total PV current: ${totalSolarCurr.toFixed(2)} A`
        : `Сумарний струм СЕС: ${totalSolarCurr.toFixed(2)} A`;
    }

    if (this._nodes.totalPvPercentBadge) {
      if (totalInstalledKw > 0) {
        this._nodes.totalPvPercentBadge.style.display = 'inline-flex';
        this._nodes.totalPvPercentBadge.innerText = `${Math.round(roundedTotalPct)}%`;
        this._nodes.totalPvPercentBadge.style.color = roundedTotalPct >= 70 ? '#34d399' : (roundedTotalPct >= 30 ? '#fbbf24' : '#94a3b8');
        this._nodes.totalPvPercentBadge.style.borderColor = roundedTotalPct >= 70 ? 'rgba(52, 211, 153, 0.35)' : 'rgba(245, 158, 11, 0.35)';
      } else {
        this._nodes.totalPvPercentBadge.style.display = 'none';
      }
    }

    if (this._nodes.totalPvSubline) {
      if (totalInstalledKw > 0) {
        this._nodes.totalPvSubline.style.display = 'flex';
        if (this._nodes.totalPvCapDetail) {
          this._nodes.totalPvCapDetail.innerText = `${roundedTotalPct.toFixed(1).replace('.', ',')}%`;
          this._nodes.totalPvCapDetail.style.color = roundedTotalPct >= 70 ? '#34d399' : (roundedTotalPct >= 30 ? '#fbbf24' : '#94a3b8');
        }
        if (this._nodes.totalPvCapTotal) {
          this._nodes.totalPvCapTotal.innerText = `(з ${totalInstalledKw.toFixed(1).replace('.', ',')} ${kwpUnit})`;
        }
      } else if (totalSolarCurr > 0 && c.solar?.show_metrics !== false) {
        this._nodes.totalPvSubline.style.display = 'flex';
        if (this._nodes.totalPvCapDetail) {
          this._nodes.totalPvCapDetail.innerText = `${totalSolarCurr.toFixed(2)} A`;
          this._nodes.totalPvCapDetail.style.color = '#34d399';
        }
        if (this._nodes.totalPvCapTotal) {
          this._nodes.totalPvCapTotal.innerText = this._language === 'en' ? '(current)' : '(струм)';
        }
      } else {
        this._nodes.totalPvSubline.style.display = 'none';
      }
    }

    const sPvDaily = this._getEntityState(c.solar?.daily_yield_entity);
    const dailyKwh = sPvDaily ? sPvDaily.val : (hasConfiguredPvEntities ? 0 : 48.6);
    this._nodes.dailySolarYield.innerText = dailyKwh.toFixed(1);
    
    const targetKwh = c.solar?.target_daily_yield || 55.0;
    this._nodes.targetSolarYield.innerText = targetKwh.toFixed(1);
    const progress = Math.min(100, Math.round((dailyKwh / targetKwh) * 100));
    this._nodes.solarProgressBar.style.width = `${progress}%`;

    // 2. Inverter
    const sInvPower = this._getEntityState(c.inverter?.power_entity);
    if (this._nodes.inverterPowerVal) {
      if (c.inverter?.power_entity && sInvPower) {
        this._nodes.inverterPowerVal.style.display = 'block';
        this._nodes.inverterPowerVal.innerText = this._formatPower(sInvPower, 0).str;
      } else {
        this._nodes.inverterPowerVal.style.display = 'none';
      }
    }
    
    const sAcTemp = this._getEntityState(c.inverter?.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = sAcTemp ? sAcTemp.val.toFixed(2) : '41,20';
    
    const sDcTemp = this._getEntityState(c.inverter?.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = sDcTemp ? sDcTemp.val.toFixed(2) : '38,40';

    const sVolt = this._getEntityState(c.inverter?.voltage_entity);
    this._nodes.inverterVolt.innerText = sVolt ? sVolt.val.toFixed(2) : '231,45';

    const sCurrent = this._getEntityState(c.inverter?.current_entity);
    this._nodes.inverterCurrent.innerText = sCurrent ? sCurrent.val.toFixed(2) : '8,60';

    const sFreq = this._getEntityState(c.inverter?.frequency_entity);
    this._nodes.inverterFreq.innerText = sFreq ? sFreq.val.toFixed(2) : '50,01';

    // AUX & Wind Turbines System (Supports Multiple Turbines)
    const isWindActive = c.wind?.show !== false || c.aux?.type === 'wind';
    const windStationContainer = this.shadowRoot.getElementById('windStationContainer');
    const auxNode = this._nodes.auxNode;
    let totalWindKw = 0;

    // 1. Wind Turbines Update
    if (windStationContainer) {
      if (!isWindActive) {
        windStationContainer.classList.add('hidden');
      } else {
        windStationContainer.classList.remove('hidden');
        const count = c.wind?.turbine_count || (c.wind?.turbines?.length || 2);
        const turbinesList = c.wind?.turbines || [];

        let totalTurbinesDaily = 0;
        let totalTurbinesMonthly = 0;
        let hasAnyTurbineDaily = false;
        let hasAnyTurbineMonthly = false;

        for (let i = 0; i < count; i++) {
          const t = turbinesList[i] || {
            name: `Вітряк ${i + 1}`,
            power_entity: `sensor.wind_turbine_${i + 1}_power`,
            rpm_entity: '',
            speed_entity: '',
            daily_energy_entity: '',
            monthly_energy_entity: '',
            animation_threshold: c.wind?.animation_threshold || 50
          };

          const powerEl = this.shadowRoot.getElementById(`turbinePower_${i + 1}`);
          const statusEl = this.shadowRoot.getElementById(`turbineStatus_${i + 1}`);
          const iconBox = this.shadowRoot.getElementById(`turbineIcon_${i + 1}`);
          const cardEl = this.shadowRoot.getElementById(`turbineCard_${i + 1}`);
          const rpmVal = this.shadowRoot.getElementById(`turbineRpmVal_${i + 1}`);
          const dailyVal = this.shadowRoot.getElementById(`turbineDailyVal_${i + 1}`);
          const monthlyVal = this.shadowRoot.getElementById(`turbineMonthlyVal_${i + 1}`);
          const energyFooter = this.shadowRoot.getElementById(`turbineEnergyFooter_${i + 1}`);

          // In real HA, default to 0 if sensor is not available
          const fallbackKw = this._hass ? 0 : (i === 0 ? 1.56 : 0.22);
          const sPower = this._getEntityState(t.power_entity);
          const formatted = this._formatPower(sPower, fallbackKw);
          if (powerEl) powerEl.innerText = formatted.str;
          totalWindKw += formatted.kw;

          let powerWatts = formatted.kw * 1000;
          if (sPower && sPower.unit === 'W') {
            powerWatts = sPower.val;
          }

          const threshold = t.animation_threshold ?? c.wind?.animation_threshold ?? 50;
          const rotor = iconBox?.querySelector('.turbine-rotor');

          // RPM / Wind Speed telemetry: support turbine level, station wind level, or auto-detect sensor.wind_rpm
          const rpmEntity = t.rpm_entity || t.speed_entity || c.wind?.rpm_entity || c.wind?.speed_entity || (i === 0 ? 'sensor.wind_rpm' : '');
          let sRpm = (rpmEntity && this._hass?.states[rpmEntity]) ? this._getEntityState(rpmEntity) : null;
          if (!sRpm && i === 0 && this._hass?.states['sensor.wind_rpm']) {
            sRpm = this._getEntityState('sensor.wind_rpm');
          }

          const isSpinning = powerWatts >= threshold || (sRpm && typeof sRpm.val === 'number' && sRpm.val > 0);

          if (isSpinning) {
            // GENERATING: Rotor spins!
            if (rotor) rotor.classList.add('spinning');
            if (cardEl) {
              cardEl.classList.add('glow-wind');
              cardEl.style.borderColor = 'rgba(6, 182, 212, 0.55)';
            }

            const maxPower = c.wind?.max_power || 3000;
            const maxRpm = c.wind?.max_rpm || 600;
            let ratio = 0;
            if (sRpm && typeof sRpm.val === 'number' && sRpm.val > 0) {
              ratio = Math.min(1, Math.max(0, sRpm.val / maxRpm));
            } else {
              ratio = Math.min(1, Math.max(0, (powerWatts - threshold) / (maxPower - threshold)));
            }
            const duration = (3.2 - ratio * 2.75).toFixed(2);
            if (rotor) rotor.style.setProperty('--turbine-speed', `${duration}s`);

            if (statusEl) {
              statusEl.innerText = this._t('wind_gen');
              statusEl.style.color = '#67e8f9';
            }
          } else {
            // STOPPED: Idle!
            if (rotor) rotor.classList.remove('spinning');
            if (cardEl) {
              cardEl.classList.remove('glow-wind');
              cardEl.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }
            if (statusEl) {
              statusEl.innerText = this._t('wind_calm');
              statusEl.style.color = '#94a3b8';
            }
          }

          const rpmBox = this.shadowRoot.getElementById(`turbineRpmBox_${i + 1}`);
          if (rpmBox) {
            const hasValidRpm = sRpm &&
              sRpm.raw !== 'unavailable' &&
              sRpm.raw !== 'unknown' &&
              typeof sRpm.val === 'number' &&
              !isNaN(sRpm.val);
            if (hasValidRpm) {
              rpmBox.style.display = 'inline';
              const unit = sRpm.unit ? sRpm.unit : 'RPM';
              rpmBox.innerHTML = `<span id="turbineRpmVal_${i + 1}">${Math.round(sRpm.val)}</span> ${unit}`;
            } else {
              rpmBox.style.display = 'none';
            }
          }

          // Individual Turbine Energy (День & Місяць)
          const sDaily = this._getEntityState(t.daily_energy_entity);
          const sMonthly = this._getEntityState(t.monthly_energy_entity);

          if (dailyVal) {
            dailyVal.innerText = (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) ? sDaily.val.toFixed(2) : '0.00';
          }

          if (monthlyVal) {
            monthlyVal.innerText = (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) ? sMonthly.val.toFixed(1) : '0.0';
          }

          // Toggle footer display: hide if neither daily nor monthly entity is configured
          const hasTurbineEnergy = !!(t.daily_energy_entity || t.monthly_energy_entity);
          if (energyFooter) {
            energyFooter.style.display = hasTurbineEnergy ? 'flex' : 'none';
          }

          if (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) {
            totalTurbinesDaily += sDaily.val;
            hasAnyTurbineDaily = true;
          }
          if (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) {
            totalTurbinesMonthly += sMonthly.val;
            hasAnyTurbineMonthly = true;
          }
        }

        // Total Wind Daily & Monthly calculation
        const windTotalDaily = this.shadowRoot.getElementById('windTotalDailyVal');
        const windTotalMonthly = this.shadowRoot.getElementById('windTotalMonthlyVal');

        const sStationDaily = this._getEntityState(c.wind?.daily_energy_entity);
        const sStationMonthly = this._getEntityState(c.wind?.monthly_energy_entity);

        if (windTotalDaily) {
          if (sStationDaily && typeof sStationDaily.val === 'number' && !isNaN(sStationDaily.val)) {
            windTotalDaily.innerText = sStationDaily.val.toFixed(2);
          } else if (hasAnyTurbineDaily) {
            windTotalDaily.innerText = totalTurbinesDaily.toFixed(2);
          } else {
            windTotalDaily.innerText = '0.00';
          }
        }

        if (windTotalMonthly) {
          if (sStationMonthly && typeof sStationMonthly.val === 'number' && !isNaN(sStationMonthly.val)) {
            windTotalMonthly.innerText = sStationMonthly.val.toFixed(1);
          } else if (hasAnyTurbineMonthly) {
            windTotalMonthly.innerText = totalTurbinesMonthly.toFixed(1);
          } else {
            windTotalMonthly.innerText = '0.0';
          }
        }
      }
    }

    // 2. Auxiliary Port (when not used as wind turbine)
    let auxKw = 0;
    if (auxNode) {
      if (c.aux?.type === 'none' || c.aux?.type === 'wind') {
        auxNode.classList.add('hidden');
      } else {
        auxNode.classList.remove('hidden');
        const sAux = this._getEntityState(c.aux?.power_entity);
        const fallbackKw = this._hass ? 0 : 2.0;
        const auxFormatted = this._formatPower(sAux, fallbackKw);
        auxKw = auxFormatted.kw;
        if (this._nodes.auxPowerVal) this._nodes.auxPowerVal.innerText = auxFormatted.str;
        
        const typeTitles = {
          microinverter: 'Мікроінвертор',
          generator: 'Генератор',
          wind: 'Вітрогенератор',
          smart_load: 'Smart Load'
        };
        let titleStr = c.aux?.title;
        if (c.aux?.type === 'microinverter' && (!titleStr || titleStr === 'Вітрогенератор')) {
          titleStr = 'Мікроінвертор';
        } else if (c.aux?.type && typeTitles[c.aux.type] && (!titleStr || titleStr === 'Вітрогенератор')) {
          titleStr = typeTitles[c.aux.type];
        } else if (!titleStr) {
          titleStr = 'Мікроінвертор';
        }
        if (this._nodes.auxTitle) this._nodes.auxTitle.innerText = titleStr;
        if (this._nodes.auxIconBox) {
          this._nodes.auxIconBox.innerHTML = ICONS[c.aux?.type] || ICONS.microinverter;
        }

        if (this._nodes.auxSubtitle) {
          this._nodes.auxSubtitle.innerText = c.aux?.subtitle || 'Джерело → GEN port';
          this._nodes.auxSubtitle.style.color = 'rgba(216, 180, 254, 0.85)';
        }
        auxNode.style.borderColor = 'rgba(192, 132, 252, 0.45)';
        auxNode.style.background = 'rgba(88, 28, 135, 0.35)';
        auxNode.classList.remove('glow-wind');
        auxNode.classList.add('glow-aux');
      }
    }

    // 3. Subloads, Non-essential & Car Loads
    const nonEssNode = this.shadowRoot.getElementById('nonEssentialNode');
    const showNonEss = Boolean(c.grid?.show_non_essential && c.grid?.non_essential_power_entity) || (c.grid?.show_non_essential !== false && Boolean(c.grid?.non_essential_power_entity));
    let nonEssKw = 0;
    if (nonEssNode) {
      if (showNonEss) {
        nonEssNode.classList.remove('hidden');
        const sNonEss = this._getEntityState(c.grid.non_essential_power_entity);
        const nonEssFormatted = this._formatPower(sNonEss, 0);
        nonEssKw = nonEssFormatted.kw;
        if (this._nodes.nonEssentialPowerVal) {
          this._nodes.nonEssentialPowerVal.innerText = nonEssFormatted.str;
        }
      } else {
        nonEssNode.classList.add('hidden');
      }
    }

    const carNode = this.shadowRoot.getElementById('carNode');
    const showCar = Boolean(c.grid?.show_car && c.grid?.car_power_entity) || (c.grid?.show_car !== false && Boolean(c.grid?.car_power_entity));
    let carKw = 0;
    if (carNode) {
      if (showCar) {
        carNode.classList.remove('hidden');
        const sCar = this._getEntityState(c.grid.car_power_entity);
        const carFormatted = this._formatPower(sCar, 0);
        carKw = carFormatted.kw;
        if (this._nodes.carPowerVal) {
          this._nodes.carPowerVal.innerText = carFormatted.str;
        }
      } else {
        carNode.classList.add('hidden');
      }
    }

    // Subloads - calculate first so minimum essential load is known
    let subloadsTotalKw = 0;
    (c.load?.subloads || []).forEach((sub, idx) => {
      const subVal = this.shadowRoot.getElementById(`subloadVal_${idx}`);
      const sSub = this._getEntityState(sub.entity);
      const formatted = this._formatPower(sSub, 0);
      subloadsTotalKw += formatted.kw;
      if (subVal) {
        subVal.innerText = formatted.str;
      }
    });

    // 4. Battery System
    const sSoc = this._getEntityState(c.battery?.soc_entity);
    const socVal = sSoc ? sSoc.val : 80.0;
    this._nodes.masterBatterySoc.innerText = `${socVal.toFixed(1)}%`;
    this._nodes.masterBatterySoc.style.fontSize = '15px';
    this._nodes.masterBatterySoc.style.fontWeight = '700';

    const sBatPower = this._getEntityState(c.battery?.power_entity);
    const sBatCurr = this._getEntityState(c.battery?.current_entity);
    const rawBatKw = sBatPower ? (sBatPower.unit === 'W' ? sBatPower.val / 1000 : sBatPower.val) : 0;
    const batPowerSign = c.battery?.power_sign || (c.battery?.invert_power ? 'standard' : 'deye');

    let isCharging = false;
    let isDischarging = false;
    const absBatKw = Math.abs(rawBatKw);
    const batThresholdKw = 0.02; // 20 W

    if (absBatKw >= batThresholdKw) {
      if (batPowerSign === 'deye') {
        // Deye standard: Negative (-) = Charging into battery, Positive (+) = Discharging
        if (rawBatKw < 0) {
          isCharging = true;
        } else {
          isDischarging = true;
        }
      } else {
        // Standard: Positive (+) = Charging, Negative (-) = Discharging
        if (rawBatKw > 0) {
          isCharging = true;
        } else {
          isDischarging = true;
        }
      }
    } else if (sBatCurr && Math.abs(sBatCurr.val) >= 0.3) {
      if (batPowerSign === 'deye') {
        if (sBatCurr.val < 0) isCharging = true;
        else isDischarging = true;
      } else {
        if (sBatCurr.val > 0) isCharging = true;
        else isDischarging = true;
      }
    }

    this._isCharging = isCharging;
    this._isDischarging = isDischarging;
    const batInKw = isCharging ? absBatKw : 0;
    const batOutKw = isDischarging ? absBatKw : 0;

    if (this._nodes.masterBatteryFlowHint) {
      let stateText = this._t('bat_idle');
      let stateColor = '#94a3b8';
      if (isCharging) {
        stateText = this._t('bat_dir_charge');
        stateColor = '#34d399';
      } else if (isDischarging) {
        stateText = this._t('bat_dir_discharge');
        stateColor = '#f87171';
      }
      this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${absBatKw.toFixed(3)} ${unitStr}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${stateColor}; font-weight: 700; font-size: 14px;">${stateText}</span>`;
    }

    const sBatVolt = this._getEntityState(c.battery?.voltage_entity);
    const vStr = sBatVolt ? sBatVolt.val.toFixed(2) : '53.24';
    const cStr = sBatCurr ? sBatCurr.val.toFixed(2) : '-56.30';
    if (this._nodes.batVoltVal) this._nodes.batVoltVal.innerText = `${vStr.replace('.', ',')} V`;
    if (this._nodes.batCurrentVal) this._nodes.batCurrentVal.innerText = `${cStr.replace('.', ',')} A`;
    if (this._nodes.batReserveSoc) this._nodes.batReserveSoc.innerText = c.battery?.reserve_soc !== undefined ? c.battery.reserve_soc : 20;
    if (this._nodes.batReserveProgressBar) {
      const rSoc = c.battery?.reserve_soc !== undefined ? c.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${rSoc}%`;
    }

    // 5. Read House Load Sensor (Essential Load)
    let sEss = this._getEntityState(c.load?.essential_power_entity);
    if (!sEss && (!c.load?.essential_power_entity || c.load?.essential_power_entity === 'sensor.deye_12k_inverter_essential_load_power' || c.load?.essential_power_entity === 'sensor.deye_12k_inverter_load_power')) {
      sEss = this._getEntityState('sensor.deye_12k_inverter_load_power') ||
             this._getEntityState('sensor.deye_12k_inverter_essential_load_power') ||
             this._getEntityState('sensor.load_power') ||
             this._getEntityState('sensor.solarman_essential_load');
    }
    const rawSensorKw = (sEss && typeof sEss.val === 'number' && !isNaN(sEss.val))
      ? Math.max(0, sEss.unit === 'W' ? sEss.val / 1000 : sEss.val)
      : 0;
    const hasValidPositiveSensor = Boolean(sEss && rawSensorKw > 0);

    // 6. Grid Power Resolution & Disambiguation
    // Try resolving an external CT / meter sensor first (measuring the street grid boundary)
    let sGridPower = null;
    let isExternalCt = false;

    if (c.grid?.external_power_entity) {
      sGridPower = this._getEntityState(c.grid.external_power_entity);
      if (sGridPower && typeof sGridPower.val === 'number' && !isNaN(sGridPower.val)) {
        isExternalCt = true;
      }
    }

    if (!sGridPower) {
      const sPrimary = this._getEntityState(c.grid?.power_entity);
      const rawPrimaryKw = sPrimary ? (sPrimary.unit === 'W' ? sPrimary.val / 1000 : sPrimary.val) : 0;
      const totalGenKw = totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + batOutKw;

      const candidateExternalEntities = [
        'sensor.deye_12k_inverter_external_power',
        'sensor.deye_12k_inverter_external_ct_power',
        'sensor.deye_12k_inverter_external_ct_total_power',
        'sensor.deye_12k_inverter_grid_external_power',
        'sensor.solarman_grid_external_power',
        'sensor.solarman_external_power',
        'sensor.solarman_total_grid_external_power',
        'sensor.sunsynk_external_grid_power',
        'sensor.sunsynk_grid_external_power',
        'sensor.external_power',
        'sensor.grid_external_power'
      ];

      // Check 3-phase external CT sum (L1 + L2 + L3)
      const p1 = this._getEntityState('sensor.deye_12k_inverter_external_ct_l1_power') || this._getEntityState('sensor.solarman_external_power_l1');
      const p2 = this._getEntityState('sensor.deye_12k_inverter_external_ct_l2_power') || this._getEntityState('sensor.solarman_external_power_l2');
      const p3 = this._getEntityState('sensor.deye_12k_inverter_external_ct_l3_power') || this._getEntityState('sensor.solarman_external_power_l3');
      let detectedExtCand = null;
      if (p1 && p2 && p3 && !isNaN(p1.val) && !isNaN(p2.val) && !isNaN(p3.val)) {
        const sumVal = (p1.unit === 'kW' ? p1.val * 1000 : p1.val) +
                       (p2.unit === 'kW' ? p2.val * 1000 : p2.val) +
                       (p3.unit === 'kW' ? p3.val * 1000 : p3.val);
        detectedExtCand = { val: sumVal, unit: 'W', raw: String(sumVal) };
      }

      if (!detectedExtCand) {
        for (const ent of candidateExternalEntities) {
          const sCand = this._getEntityState(ent);
          if (sCand && typeof sCand.val === 'number' && !isNaN(sCand.val)) {
            detectedExtCand = sCand;
            break;
          }
        }
      }

      if (!detectedExtCand && this._hass?.states) {
        const stateKeys = Object.keys(this._hass.states);
        const dynamicExtKey = stateKeys.find(k =>
          /(external_power|external_ct|ct1_power|grid_external_power)/i.test(k) &&
          !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(k)
        );
        if (dynamicExtKey) {
          const sCand = this._getEntityState(dynamicExtKey);
          if (sCand && typeof sCand.val === 'number' && !isNaN(sCand.val)) {
            detectedExtCand = sCand;
          }
        }
      }

      // Validate candidate external CT:
      // In Deye inverters without an external CT installed, register 0x0234 is perpetually 0.
      // If candidate reports near 0 (< 30 W) while primary grid port or battery charger is drawing power without local generation,
      // the CT clamp is physically unconnected! Never adopt it over the primary grid sensor.
      if (detectedExtCand) {
        const candKw = Math.abs(detectedExtCand.unit === 'kW' ? detectedExtCand.val : detectedExtCand.val / 1000);
        const isUnconnectedCt = (candKw < 0.03) && ((batInKw > 0.2 && totalGenKw < 0.1) || (rawPrimaryKw > 0.1 && totalGenKw < 0.1));
        if (!isUnconnectedCt) {
          sGridPower = detectedExtCand;
          isExternalCt = true;
        }
      }
    }

    if (!sGridPower) {
      sGridPower = this._getEntityState(c.grid?.power_entity);
    }

    const rawGridKw = sGridPower ? (sGridPower.unit === 'W' ? sGridPower.val / 1000 : sGridPower.val) : 0;
    const powerSign = c.grid?.power_sign || (c.grid?.invert_power ? 'inverted' : 'deye');
    const sellingEnabled = c.grid?.selling_enabled === true;
    const thresholdKw = (c.grid?.min_power_threshold !== undefined ? c.grid.min_power_threshold : 50) / 1000;

    // Detect if Grid is Connected (Mains voltage or status)
    const sGridStatus = this._getEntityState(c.grid?.status_entity);
    const sGridVolt = this._getEntityState(c.grid?.voltage_entity || c.inverter?.voltage_entity);
    const voltThreshold = c.grid?.voltage_threshold !== undefined ? c.grid.voltage_threshold : 90;

    let isGridConnected = true;
    if (sGridStatus) {
      const st = String(sGridStatus.raw || sGridStatus.val).toLowerCase();
      if (st === 'off' || st === 'false' || st === '0' || st === 'disconnected' || st === 'offline' || st === 'unavailable' || st === 'unknown') {
        isGridConnected = false;
      }
    } else if (sGridVolt && typeof sGridVolt.val === 'number' && !isNaN(sGridVolt.val)) {
      if (sGridVolt.val < voltThreshold) {
        isGridConnected = false;
      }
    }

    let isExport = false;
    let isImport = false;
    let absGridKw = 0;

    if (!isGridConnected) {
      // Grid is physically disconnected / blackout / off-grid
      absGridKw = 0;
      isExport = false;
      isImport = false;
    } else {
      if (isExternalCt) {
        // Direct external CT reading at the meter boundary (e.g. 0.03 kW on Deye LCD)
        absGridKw = Math.abs(rawGridKw);
        if (absGridKw >= thresholdKw) {
          if (powerSign === 'deye') {
            if (rawGridKw < 0) isExport = true;
            else isImport = true;
          } else {
            if (rawGridKw > 0) isExport = true;
            else isImport = true;
          }
        }
      } else {
        // Inverter internal grid port (e.g. sensor.deye_12k_inverter_total_grid_power).
        // When whole-home loads are connected to the home AC panel, power flowing from the inverter
        // to the home panel appears as negative power at this port.
        // It is NOT grid export unless the power leaving the port exceeds the house consumption!
        if (powerSign === 'deye') {
          if (rawGridKw > 0) {
            absGridKw = rawGridKw;
            if (absGridKw >= thresholdKw) isImport = true;
          } else if (rawGridKw < 0) {
            const leavingKw = Math.abs(rawGridKw);
            const netExportKw = Math.max(0, leavingKw - rawSensorKw);
            if (netExportKw >= thresholdKw) {
              absGridKw = netExportKw;
              isExport = true;
            } else {
              absGridKw = 0;
              isExport = false;
            }
          }
        } else {
          if (rawGridKw < 0) {
            absGridKw = Math.abs(rawGridKw);
            if (absGridKw >= thresholdKw) isImport = true;
          } else if (rawGridKw > 0) {
            const netExportKw = Math.max(0, rawGridKw - rawSensorKw);
            if (netExportKw >= thresholdKw) {
              absGridKw = netExportKw;
              isExport = true;
            } else {
              absGridKw = 0;
              isExport = false;
            }
          }
        }

        // Auto-reconcile Grid Import when internal grid port only accounts for inverter charger draw:
        // In Deye/Sunsynk, when charging from grid, grid_power measures only the inverter charger bridge.
        // If the house is drawing power and internal generation is 0 (or less than charging + load),
        // the grid port does not include the house load.
        // If auto_calculate is enabled (default), add the unmeasured house load to grid import.
        const shouldAutoCalculateGrid = c.grid?.auto_calculate !== false;
        if (shouldAutoCalculateGrid && isImport) {
          const houseLoadKw = Math.max(rawSensorKw, subloadsTotalKw);
          const totalGenKw = totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + batOutKw;
          const totalInternalLoadKw = batInKw + houseLoadKw + nonEssKw + carKw;
          if (totalInternalLoadKw > (totalGenKw + absGridKw + 0.1)) {
            absGridKw = absGridKw + houseLoadKw;
          }
        }
      }

      // Physical Conservation of Energy bound:
      // Grid export cannot physically exceed surplus generation minus all internal loads
      const maxPossibleExport = Math.max(0, totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + batOutKw - batInKw - rawSensorKw - nonEssKw - carKw);
      if (isExport && absGridKw > (maxPossibleExport + 0.1)) {
        absGridKw = maxPossibleExport;
        if (absGridKw < thresholdKw) {
          isExport = false;
          absGridKw = 0;
        }
      }

      // If station does not sell to the grid (selling_enabled === false), never animate or flag export!
      if (isExport && !sellingEnabled) {
        isExport = false;
        absGridKw = 0;
      }
    }

    const gridNode = this.shadowRoot.getElementById('gridNode');
    if (this._nodes.gridPowerVal) {
      if (!isGridConnected) {
        this._nodes.gridPowerVal.innerText = `0.000 ${unitStr}`;
        this._nodes.gridPowerVal.style.color = '#64748b';
      } else {
        this._nodes.gridPowerVal.innerText = `${absGridKw.toFixed(3)} ${unitStr}`;
        if (isExport) {
          this._nodes.gridPowerVal.style.color = '#34d399';
        } else if (isImport) {
          this._nodes.gridPowerVal.style.color = '#38bdf8';
        } else {
          this._nodes.gridPowerVal.style.color = '#94a3b8';
        }
      }
    }

    if (this._nodes.gridDirectionLabel) {
      if (!isGridConnected) {
        this._nodes.gridDirectionLabel.innerText = this._t('grid_dir_off');
        this._nodes.gridDirectionLabel.style.color = '#ef4444';
      } else if (isExport) {
        this._nodes.gridDirectionLabel.innerText = this._t('grid_dir_export');
        this._nodes.gridDirectionLabel.style.color = '#34d399';
      } else if (isImport) {
        this._nodes.gridDirectionLabel.innerText = this._t('grid_dir_import');
        this._nodes.gridDirectionLabel.style.color = '#38bdf8';
      } else {
        this._nodes.gridDirectionLabel.innerText = this._t('grid_dir_idle');
        this._nodes.gridDirectionLabel.style.color = '#64748b';
      }
    }

    if (gridNode) {
      if (!isGridConnected) {
        gridNode.classList.remove('glow-grid');
        gridNode.style.borderColor = 'rgba(239, 68, 68, 0.45)';
      } else {
        gridNode.classList.add('glow-grid');
        gridNode.style.borderColor = 'rgba(56, 189, 248, 0.4)';
      }
    }

    const sGridImport = this._getEntityState(c.grid?.import_daily_entity);
    this._nodes.gridImportDaily.innerText = sGridImport ? `${sGridImport.val.toFixed(2)} kWh` : '0.00 kWh';

    const sGridExport = this._getEntityState(c.grid?.export_daily_entity);
    this._nodes.gridExportDaily.innerText = sGridExport ? `${sGridExport.val.toFixed(2)} kWh` : '0.00 kWh';

    // Calculate & render dual-zone tariffs, grid costs and export income
    this._calculateTariffs(sGridImport ? sGridImport.val : 0, sGridExport ? sGridExport.val : 0, dailyKwh);

    // 7. Inverter Self-Consumption & Essential House Loads Balance
    const gridInKw = isImport ? absGridKw : 0;
    const gridOutKw = isExport ? absGridKw : 0;
    const totalInflowKw = totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + gridInKw + batOutKw;
    const totalOutflowKnownKw = batInKw + gridOutKw + nonEssKw + carKw;
    const netAvailableKw = Math.max(0, totalInflowKw - totalOutflowKnownKw);

    const sSelf = this._getEntityState(c.inverter?.self_consumption_entity);
    const measuredSelfKw = (sSelf && typeof sSelf.val === 'number' && !isNaN(sSelf.val))
      ? Math.max(0, sSelf.unit === 'W' ? sSelf.val / 1000 : sSelf.val)
      : null;

    const standbyWatts = (c.inverter?.standby_power !== undefined) ? c.inverter.standby_power : 100;
    const nominalLossKw = standbyWatts / 1000;

    let essentialKw = 0;
    let selfConsumptionKw = 0;

    if (hasValidPositiveSensor) {
      // Physical sensor is valid and positive: use the measured load directly!
      essentialKw = Math.max(subloadsTotalKw, rawSensorKw);

      if (measuredSelfKw !== null) {
        selfConsumptionKw = measuredSelfKw;
      } else {
        // Dynamic inverter loss: Net Inflow minus all accounted loads and charging
        const dynamicResidueKw = Math.max(0, totalInflowKw - (batInKw + gridOutKw + essentialKw + nonEssKw + carKw));
        selfConsumptionKw = dynamicResidueKw > 0 ? dynamicResidueKw : nominalLossKw;
      }
    } else {
      // Auto-calculate from balance when sensor is missing, 0, or negative / artifact:
      if (measuredSelfKw !== null) {
        selfConsumptionKw = measuredSelfKw;
      } else {
        selfConsumptionKw = Math.min(netAvailableKw, nominalLossKw);
      }
      essentialKw = Math.max(subloadsTotalKw, Math.max(0, netAvailableKw - selfConsumptionKw));
    }

    // Update Inverter Self-Consumption display
    if (this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal) {
      if (c.inverter?.show_self_consumption !== false) {
        this._nodes.inverterSelfConsumptionBox.style.display = 'flex';
        if (selfConsumptionKw < 1.0) {
          this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(selfConsumptionKw * 1000)} ${this._language === 'en' ? 'W' : 'Вт'}`;
        } else {
          this._nodes.inverterSelfConsumptionVal.innerText = `${selfConsumptionKw.toFixed(3)} ${unitStr}`;
        }
      } else {
        this._nodes.inverterSelfConsumptionBox.style.display = 'none';
      }
    }

    // Update Essential House Load display
    this._nodes.essentialPowerVal.innerText = `${essentialKw.toFixed(3)} ${unitStr}`;

    const sHouseDaily = this._getEntityState(c.load?.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = sHouseDaily ? `${sHouseDaily.val.toFixed(2)} kWh` : '12,40 kWh';

    // Total battery capacity
    const batCount = c.battery?.parallel_batteries || (c.battery?.modules?.length || 2);
    let totalModulesCapacity = 0;
    for (let i = 0; i < batCount; i++) {
      const mod = c.battery?.modules?.[i] || c.battery?.module_entities?.[i] || {};
      const cap = mod.capacity_kwh !== undefined 
        ? parseFloat(mod.capacity_kwh) 
        : (i === 0 ? 7.88 : (i === 1 ? 5.12 : ((c.battery?.capacity_kwh || 13.0) / batCount)));
      totalModulesCapacity += (isNaN(cap) ? 0 : cap);
    }
    if (totalModulesCapacity <= 0) {
      totalModulesCapacity = parseFloat(c.battery?.capacity_kwh) || 13.0;
    }

    const sCap = this._getEntityState(c.battery?.capacity_entity || 'sensor.inverter_12_kvt_battery_capacity');
    const invCapVal = (sCap && !isNaN(sCap.val)) ? sCap.val : null;
    const totalCap = (invCapVal !== null && invCapVal <= 40) ? invCapVal : totalModulesCapacity;

    // Remaining capacity based on master battery SOC
    const sBatSoc = this._getEntityState(c.battery?.soc_entity || 'sensor.deye_12k_inverter_battery_soc');
    const masterSocNum = sBatSoc ? sBatSoc.val : 80.0;
    const remainingCap = totalCap * (masterSocNum / 100.0);
    const unitKwh = this._language === 'en' ? 'kWh' : 'кВт·год';

    if (this._nodes.batCapacityVal) {
      this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${remainingCap.toFixed(2).replace('.', ',')} ${unitKwh} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${totalCap.toFixed(1).replace('.', ',')})</span></span>`;
    }

    // Master Battery Temperature
    const sBatTemp = this._getEntityState(c.battery?.temperature_entity || 'sensor.deye_12k_inverter_battery_temperature') ||
                     this._getEntityState('sensor.inverter_12_kvt_battery_temperature') ||
                     this._getEntityState('sensor.solarman_battery_temperature');
    const masterTempNum = sBatTemp ? sBatTemp.val : 25.0;
    if (this._nodes.batMasterTempVal) {
      this._nodes.batMasterTempVal.innerText = `${masterTempNum.toFixed(1).replace('.', ',')}`;
    }

    const chgEnt = c.battery?.charge_daily_entity;
    let sBatChg = this._getEntityState(chgEnt);
    if (!sBatChg) {
      sBatChg = this._getEntityState('sensor.inverter_12_kvt_daily_battery_charge') ||
                this._getEntityState('sensor.deye_12k_inverter_daily_battery_charge') ||
                this._getEntityState('sensor.daily_battery_charge') ||
                this._getEntityState('sensor.solarman_daily_battery_charge') ||
                this._getEntityState('sensor.solarman_battery_charge_energy_day');
    }

    const disEnt = c.battery?.discharge_daily_entity;
    let sBatDis = this._getEntityState(disEnt);
    if (!sBatDis) {
      sBatDis = this._getEntityState('sensor.inverter_12_kvt_daily_battery_discharge') ||
                this._getEntityState('sensor.deye_12k_inverter_daily_battery_discharge') ||
                this._getEntityState('sensor.daily_battery_discharge') ||
                this._getEntityState('sensor.solarman_daily_battery_discharge') ||
                this._getEntityState('sensor.solarman_battery_discharge_energy_day');
    }

    if (this._nodes.batChargeDaily) {
      this._nodes.batChargeDaily.innerText = sBatChg ? `${sBatChg.val.toFixed(2)} kWh` : (this._hass ? '0.00 kWh' : '4,30 kWh');
    }
    if (this._nodes.batDischargeDaily) {
      this._nodes.batDischargeDaily.innerText = sBatDis ? `${sBatDis.val.toFixed(2)} kWh` : (this._hass ? '0.00 kWh' : '6,10 kWh');
    }

    // Battery modules (SOC, Current, Voltage, Power, Temperature, Cell Delta, Remaining Capacity)
    const batModulesData = [];
    for (let i = 1; i <= batCount; i++) {
      const packSoc = this.shadowRoot.getElementById(`batPackSoc_${i}`);
      const packVolt = this.shadowRoot.getElementById(`batPackVolt_${i}`);
      const packCurr = this.shadowRoot.getElementById(`batPackCurr_${i}`);
      const packPower = this.shadowRoot.getElementById(`batPackPower_${i}`);
      const packTempVal = this.shadowRoot.getElementById(`batPackTempVal_${i}`);
      const packDelta = this.shadowRoot.getElementById(`batPackDelta_${i}`);
      const packDeltaVal = this.shadowRoot.getElementById(`batPackDeltaVal_${i}`);
      const packTag = this.shadowRoot.getElementById(`batPackStateTag_${i}`);
      const packKwh = this.shadowRoot.getElementById(`batPackKwh_${i}`);

      const bar1 = this.shadowRoot.getElementById(`batPackBar1_${i}`);
      const bar2 = this.shadowRoot.getElementById(`batPackBar2_${i}`);
      const bar3 = this.shadowRoot.getElementById(`batPackBar3_${i}`);
      const bar4 = this.shadowRoot.getElementById(`batPackBar4_${i}`);

      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      const socEnt = mod.soc_entity || mod.soc || `sensor.bms_rack${i}_soc`;
      const currEnt = mod.current_entity || `sensor.bms_rack${i}_current`;
      const voltEnt = mod.voltage_entity || mod.volt || `sensor.bms_rack${i}_voltage`;
      const pwrEnt = mod.power_entity || `sensor.bms_rack${i}_power`;
      const tempEnt = mod.temperature_entity || mod.temp || `sensor.bms_rack${i}_temperature`;
      const deltaEnt = mod.cell_delta_entity || mod.delta_entity || `sensor.bms_rack${i}_cell_delta`;

      const sModSoc = this._getEntityState(socEnt);
      const sModCurr = this._getEntityState(currEnt);
      const sModVolt = this._getEntityState(voltEnt);
      const sModPwr = this._getEntityState(pwrEnt);
      const sModTemp = this._getEntityState(tempEnt);
      let sModDelta = this._getEntityState(deltaEnt);
      if (!sModDelta) {
        sModDelta = this._getEntityState(`sensor.bms_rack${i}_delta_cell_voltage`) ||
                    this._getEntityState(`sensor.bms_rack${i}_cell_difference`);
      }

      // Check max/min cell voltage if delta entity is not direct
      if (!sModDelta && (mod.max_cell_voltage_entity || mod.min_cell_voltage_entity)) {
        const sMax = this._getEntityState(mod.max_cell_voltage_entity);
        const sMin = this._getEntityState(mod.min_cell_voltage_entity);
        if (sMax && sMin) {
          const diffV = Math.abs(sMax.val - sMin.val);
          sModDelta = { val: diffV < 1.0 ? Math.round(diffV * 1000) : diffV, unit: 'mV' };
        }
      }

      // Values with realistic fallbacks matching user setup (82% / 85%, 54.1V / 54.0V, 18.4A / 25.2A, 36.5° / 21.0°, 12 mV / 8 mV)
      const socNum = sModSoc ? sModSoc.val : (i === 1 ? 82 : (i === 2 ? 85 : 75));
      const voltNum = sModVolt ? sModVolt.val : (i === 1 ? 54.1 : (i === 2 ? 54.0 : 52.4));
      const currNum = sModCurr ? sModCurr.val : (i === 1 ? 18.4 : (i === 2 ? 25.2 : 8.2));
      const tempNum = sModTemp ? sModTemp.val : (i === 1 ? 36.5 : (i === 2 ? 21.0 : 22.5));

      // Calculate cell delta in mV
      let deltaMv = null;
      if (sModDelta) {
        let rawVal = sModDelta.val;
        // If reported in Volts (e.g. 0.012 V), convert to millivolts
        if (rawVal < 1.0 && rawVal > 0) {
          deltaMv = Math.round(rawVal * 1000);
        } else {
          deltaMv = Math.round(rawVal);
        }
      } else if (!this._hass) {
        deltaMv = i === 1 ? 12 : (i === 2 ? 8 : 15);
      }

      let kwNum = 0;
      if (sModPwr) {
        kwNum = Math.abs(this._formatPower(sModPwr).kw);
      } else {
        // Calculate P = U * I in kW
        kwNum = (voltNum * Math.abs(currNum)) / 1000.0;
      }

      // Module capacity & remaining capacity
      const modNominalCap = mod.capacity_kwh !== undefined 
        ? parseFloat(mod.capacity_kwh) 
        : (i === 1 ? 7.88 : (i === 2 ? 5.12 : (totalCap / batCount)));
      const modRemainingCap = modNominalCap * (socNum / 100.0);

      if (packSoc) packSoc.innerText = `${socNum.toFixed(0)}%`;
      if (packVolt) packVolt.innerText = `${voltNum.toFixed(1).replace('.', ',')} V`;
      if (packCurr) packCurr.innerText = `${Math.abs(currNum).toFixed(1).replace('.', ',')} A`;
      if (packPower) packPower.innerText = `${kwNum.toFixed(2).replace('.', ',')} ${unitStr}`;
      if (packTempVal) packTempVal.innerText = `${tempNum.toFixed(1).replace('.', ',')}`;

      // Update Cell Delta
      if (packDeltaVal) {
        if (deltaMv !== null && !isNaN(deltaMv)) {
          packDeltaVal.innerText = `${deltaMv} mV`;
          if (packDelta) {
            packDelta.style.display = 'inline-flex';
            if (deltaMv <= 25) {
              // Perfect balance (Green)
              packDelta.style.color = '#34d399';
              packDelta.style.background = 'rgba(52, 211, 153, 0.12)';
              packDelta.style.borderColor = 'rgba(52, 211, 153, 0.3)';
            } else if (deltaMv <= 50) {
              // Slight unbalance (Amber)
              packDelta.style.color = '#fbbf24';
              packDelta.style.background = 'rgba(251, 191, 36, 0.12)';
              packDelta.style.borderColor = 'rgba(251, 191, 36, 0.3)';
            } else {
              // High unbalance / Warning (Red)
              packDelta.style.color = '#f87171';
              packDelta.style.background = 'rgba(248, 113, 113, 0.16)';
              packDelta.style.borderColor = 'rgba(248, 113, 113, 0.4)';
            }
          }
        } else {
          if (packDelta) packDelta.style.display = 'none';
        }
      }

      // Update Pack Remaining Capacity
      if (packKwh) {
        packKwh.innerText = `~${modRemainingCap.toFixed(2).replace('.', ',')} ${unitKwh}`;
      }

      // State: Charge (GREEN) or Discharge (RED).
      let isChg = false;
      if (isDischarging) {
        isChg = false;
      } else if (isCharging) {
        isChg = true;
      } else if (sModCurr) {
        const sign = c.battery?.power_sign || 'deye';
        isChg = sign === 'deye' ? currNum < 0 : currNum > 0;
      } else {
        isChg = currNum < 0;
      }

      // Live Battery Branch Power Badge
      const branchBadge = this.shadowRoot.getElementById(`batBranchBadge_${i}`);
      if (branchBadge) {
        const isIdle = kwNum < 0.02;
        if (isIdle) {
          branchBadge.className = 'es-bat-branch-badge es-mono idle';
          branchBadge.innerHTML = `<span>0.00 ${unitStr}</span>`;
        } else if (isChg) {
          branchBadge.className = 'es-bat-branch-badge es-mono charge';
          branchBadge.innerHTML = `<span>${kwNum.toFixed(2)} ${unitStr}</span> <span style="font-weight: 800;">↓</span>`;
        } else {
          branchBadge.className = 'es-bat-branch-badge es-mono discharge';
          branchBadge.innerHTML = `<span>${kwNum.toFixed(2)} ${unitStr}</span> <span style="font-weight: 800;">↑</span>`;
        }
      }

      const cardEl = this.shadowRoot.getElementById(`batPackCard_${i}`);
      const gaugeEl = cardEl?.querySelector('.es-battery-gauge');
      const nippleEl = cardEl?.querySelector('.es-battery-gauge-nipple');

      if (cardEl) {
        cardEl.style.borderColor = isChg ? 'rgba(16, 185, 129, 0.55)' : 'rgba(239, 68, 68, 0.55)';
      }

      if (gaugeEl) {
        gaugeEl.style.borderColor = isChg ? '#10b981' : '#ef4444';
      }
      if (nippleEl) {
        nippleEl.style.background = isChg ? '#10b981' : '#ef4444';
      }

      if (packTag) {
        if (isChg) {
          packTag.className = 'es-bat-state-tag charge';
          packTag.innerText = this._t('bat_charge');
          packTag.style.color = '#34d399';
          packTag.style.background = 'rgba(16, 185, 129, 0.18)';
          packTag.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        } else {
          packTag.className = 'es-bat-state-tag discharge';
          packTag.innerText = this._t('bat_discharge');
          packTag.style.color = '#f87171';
          packTag.style.background = 'rgba(239, 68, 68, 0.18)';
          packTag.style.borderColor = 'rgba(239, 68, 68, 0.4)';
        }
      }

      if (packPower) {
        packPower.style.color = isChg ? '#34d399' : '#f87171';
      }
      if (packCurr) {
        packCurr.style.color = isChg ? '#38bdf8' : '#f87171';
      }

      // Level bars lighting based on SOC and state (GREEN on charge, RED on discharge)
      const barClass = isChg ? 'active-green' : 'active-red';
      if (bar1 && bar2 && bar3 && bar4) {
        bar1.className = `es-bat-bar ${socNum >= 10 ? barClass : ''}`;
        bar2.className = `es-bat-bar ${socNum >= 35 ? barClass : ''}`;
        bar3.className = `es-bat-bar ${socNum >= 65 ? barClass : ''}`;
        bar4.className = `es-bat-bar ${socNum >= 85 ? barClass : ''}`;
      }

      batModulesData.push({ kwNum, isChg });
    }

    // Update live animated SVG energy flow paths and speed/direction
    this._updateFlowPaths();
    this._updateFlowAnimations(
      isGridConnected ? rawGridKw : 0,
      isExport,
      isImport,
      totalSolarKw,
      essentialKw,
      absBatKw,
      isCharging,
      isDischarging,
      carKw,
      batModulesData,
      nonEssKw,
      subloadsTotalKw,
      auxKw
    );

    // Sync live state for control sliders
    this._updateControlSliders();
  }

  _setupResizeObserver() {
    if (this._resizeObserver) return;
    const container = this.shadowRoot?.querySelector('.energy-station-container');
    if (!container) return;

    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(() => {
        this._updateFlowPaths();
      });
      this._resizeObserver.observe(container);
    }
    this._rAF(() => this._updateFlowPaths());
    setTimeout(() => this._updateFlowPaths(), 150);
  }

  _updateFlowPaths() {
    try {
      const container = this.shadowRoot?.querySelector('.energy-station-container');
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      if (cRect.width === 0 || cRect.height === 0) return;
      const c = this._config || DEFAULT_CONFIG;
      const scale = this._scale || 1.0;

      const getPt = (el, xFrac = 0.5, yFrac = 0.5) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: Math.round((r.left - cRect.left + r.width * xFrac) / scale),
          y: Math.round((r.top - cRect.top + r.height * yFrac) / scale)
        };
      };

      const setPathD = (baseId, flowId, d) => {
        const baseEl = this.shadowRoot.getElementById(baseId);
        const flowEl = this.shadowRoot.getElementById(flowId);
        if (baseEl) baseEl.setAttribute('d', d || '');
        if (flowEl) flowEl.setAttribute('d', d || '');
      };

      const gridNode = this.shadowRoot.getElementById('gridNode');
      const inverterNode = this.shadowRoot.getElementById('inverterNode');
      const essentialNode = this.shadowRoot.getElementById('essentialNode');
      const solarBadge = this.shadowRoot.getElementById('totalPvPowerBadge');
      const batHub = this.shadowRoot.getElementById('masterBatteryHub');
      const carNode = this.shadowRoot.getElementById('carNode');

      // 1. Grid <-> Inverter Path
      if (gridNode && inverterNode) {
        const rGrid = gridNode.getBoundingClientRect();
        const rInv = inverterNode.getBoundingClientRect();
        const isMobileStacked = rGrid.bottom < rInv.top + 30;

        if (isMobileStacked) {
          // Mobile 2-row layout: Grid is above Inverter
          const p1 = getPt(gridNode, 0.70, 1.0);
          const p2 = getPt(inverterNode, 0.20, 0.0);
          if (p1 && p2) {
            const midY = Math.round((p1.y + p2.y) / 2);
            const d = `M ${p1.x} ${p1.y} C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
            setPathD('pathGridInvBase', 'pathGridInvFlow', d);
          }
        } else {
          // Desktop 3-column layout: line connects from right edge of gridNode into left edge of inverterNode
          // passing strictly below the AC/DC telemetry text
          const lineY = Math.round((rInv.top - cRect.top + rInv.height * 0.55) / scale);
          const p1X = Math.round((rGrid.right - cRect.left) / scale);
          const p2X = Math.round((rInv.left - cRect.left) / scale);
          const p1Y = Math.round((rGrid.top - cRect.top + rGrid.height * 0.50) / scale);

          let d = '';
          if (Math.abs(p1Y - lineY) <= 8) {
            d = `M ${p1X} ${lineY} L ${p2X} ${lineY}`;
          } else {
            const midX = Math.round(p1X + 24);
            d = `M ${p1X} ${p1Y} C ${midX} ${p1Y}, ${midX} ${lineY}, ${p2X} ${lineY}`;
          }
          setPathD('pathGridInvBase', 'pathGridInvFlow', d);
        }
      }

      // 2. Inverter -> Essential Loads Path
      if (inverterNode && essentialNode) {
        const rLoad = essentialNode.getBoundingClientRect();
        const rInv = inverterNode.getBoundingClientRect();
        const isMobileStacked = rLoad.bottom < rInv.top + 30;

        if (isMobileStacked) {
          // Mobile 2-row layout: Loads is above Inverter
          const p1 = getPt(inverterNode, 0.80, 0.0);
          const p2 = getPt(essentialNode, 0.30, 1.0);
          if (p1 && p2) {
            const midY = Math.round((p1.y + p2.y) / 2);
            const d = `M ${p1.x} ${p1.y} C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
            setPathD('pathInvLoadBase', 'pathInvLoadFlow', d);
          }
        } else {
          // Desktop 3-column layout: line connects from right edge of inverterNode into left edge of essentialNode
          // passing strictly below the Voltage/Current telemetry text
          const lineY = Math.round((rInv.top - cRect.top + rInv.height * 0.55) / scale);
          const p1X = Math.round((rInv.right - cRect.left) / scale);
          const p2X = Math.round((rLoad.left - cRect.left) / scale);
          const p2Y = Math.round((rLoad.top - cRect.top + rLoad.height * 0.50) / scale);

          let d = '';
          if (Math.abs(p2Y - lineY) <= 8) {
            d = `M ${p1X} ${lineY} L ${p2X} ${lineY}`;
          } else {
            const midX = Math.round(p2X - 24);
            d = `M ${p1X} ${lineY} C ${midX} ${lineY}, ${midX} ${p2Y}, ${p2X} ${p2Y}`;
          }
          setPathD('pathInvLoadBase', 'pathInvLoadFlow', d);
        }
      }

      // 3. Solar PV -> Inverter Path (Vertical down from Total PV to Inverter)
      if (solarBadge && inverterNode) {
        const p1 = getPt(solarBadge, 0.5, 1.0);
        const p2 = getPt(inverterNode, 0.5, 0.0);
        if (p1 && p2) {
          const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
          setPathD('pathSolarInvBase', 'pathSolarInvFlow', d);
        }
      }

      // 4. Inverter <-> Battery Hub Path
      if (inverterNode && batHub) {
        const p1 = getPt(inverterNode, 0.5, 1.0);
        const p2 = getPt(batHub, 0.5, 0.0);
        if (p1 && p2) {
          const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
          setPathD('pathInvBatBase', 'pathInvBatFlow', d);
        }
      }

      // 5. Grid -> Non-Essential & Car Vertical Conduits
      const nonEssNode = this.shadowRoot.getElementById('nonEssentialNode');
      const isNonEssVisible = nonEssNode && !nonEssNode.classList.contains('hidden') && nonEssNode.offsetHeight > 0;
      const isCarVisible = carNode && !carNode.classList.contains('hidden') && carNode.offsetHeight > 0;

      if (gridNode && isNonEssVisible) {
        const p1 = getPt(gridNode, 0.5, 1.0);
        const p2 = getPt(nonEssNode, 0.5, 0.0);
        if (p1 && p2) {
          const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
          setPathD('pathGridNonEssBase', 'pathGridNonEssFlow', d);
        }
      } else {
        setPathD('pathGridNonEssBase', 'pathGridNonEssFlow', '');
      }

      if (isCarVisible) {
        const fromNode = isNonEssVisible ? nonEssNode : gridNode;
        if (fromNode) {
          const p1 = getPt(fromNode, 0.5, 1.0);
          const p2 = getPt(carNode, 0.5, 0.0);
          if (p1 && p2) {
            const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
            setPathD('pathNonEssCarBase', 'pathNonEssCarFlow', d);
          }
        } else {
          setPathD('pathNonEssCarBase', 'pathNonEssCarFlow', '');
        }
      } else {
        setPathD('pathNonEssCarBase', 'pathNonEssCarFlow', '');
      }

      // 6. Essential Loads -> Subloads Bus Stem Conduit
      const subloadsBusContainer = this.shadowRoot.getElementById('subloadsBusContainer');
      if (essentialNode && subloadsBusContainer) {
        const p1 = getPt(essentialNode, 0.5, 1.0);
        const p2 = getPt(subloadsBusContainer, 0.5, 0.0);
        if (p1 && p2) {
          const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
          setPathD('pathLoadSubloadsBase', 'pathLoadSubloadsFlow', d);
        }
      } else {
        setPathD('pathLoadSubloadsBase', 'pathLoadSubloadsFlow', '');
      }

      // 7. Inverter -> Aux/Microinverter Conduit (From auxNode into Inverter GEN port)
      const auxNode = this.shadowRoot.getElementById('auxNode');
      if (inverterNode && auxNode && !auxNode.classList.contains('hidden') && auxNode.offsetHeight > 0) {
        const p1 = getPt(auxNode, 0.35, 1.0); // bottom of auxNode
        const p2 = getPt(inverterNode, 0.90, 0.0); // top right of inverter (GEN port)
        if (p1 && p2) {
          const midY = Math.round((p1.y + p2.y) / 2);
          const d = `M ${p1.x} ${p1.y} C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
          setPathD('pathInvAuxBase', 'pathInvAuxFlow', d);
        }
      } else {
        setPathD('pathInvAuxBase', 'pathInvAuxFlow', '');
      }

      // 8. Battery Hub -> Battery Bus Stem Conduit is rendered directly inside batteryBusSvg
      setPathD('pathBatStemBase', 'pathBatStemFlow', '');

      // 9. Wind Turbines -> Battery Hub Paths (Direct DC charging into batteries)
      const windContainer = this.shadowRoot.getElementById('windStationContainer');
      const isWindActive = c.wind?.show !== false || c.aux?.type === 'wind';
      const windCount = isWindActive ? (c.wind?.turbine_count || (c.wind?.turbines?.length || 2)) : 0;

      for (let i = 1; i <= 4; i++) {
        if (i <= windCount && windContainer && !windContainer.classList.contains('hidden')) {
          const turbineCard = this.shadowRoot.getElementById(`turbineCard_${i}`);
          if (turbineCard && batHub) {
            const p1 = getPt(turbineCard, 0.5, 1.0); // from bottom of turbine
            const xFrac = windCount === 1 ? 0.5 : (0.28 + ((i - 1) / (windCount - 1)) * 0.44);
            const p2 = getPt(batHub, xFrac, 0.0); // to top of master battery hub
            if (p1 && p2) {
              const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
              setPathD(`pathTurbine${i}Base`, `pathTurbine${i}Flow`, d);
            }
          } else {
            setPathD(`pathTurbine${i}Base`, `pathTurbine${i}Flow`, '');
          }
        } else {
          setPathD(`pathTurbine${i}Base`, `pathTurbine${i}Flow`, '');
        }
      }

      // 10. Battery Hub -> Individual Battery Packs (Master Hub <-> Bat 1..8)
      const batCount = c.battery?.parallel_batteries || (c.battery?.modules?.length || 2);
      for (let i = 1; i <= 8; i++) {
        const card = this.shadowRoot.getElementById(`batPackCard_${i}`);
        const badge = this.shadowRoot.getElementById(`batBranchBadge_${i}`);

        if (i <= batCount && batHub && card) {
          const p1 = getPt(batHub, 0.5, 1.0); // bottom center of master hub
          const p2 = getPt(card, 0.5, 0.0);   // top center of battery pack card

          if (p1 && p2) {
            const midY = Math.round(p1.y + (p2.y - p1.y) * 0.45);
            let d = '';

            if (Math.abs(p1.x - p2.x) <= 4) {
              d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
            } else {
              d = `M ${p1.x} ${p1.y} C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
            }

            setPathD(`pathBat${i}Base`, `pathBat${i}Flow`, d);

            if (badge) {
              badge.style.left = `${p2.x}px`;
              badge.style.top = `${midY}px`;
              badge.style.display = 'flex';
            }
          } else {
            setPathD(`pathBat${i}Base`, `pathBat${i}Flow`, '');
            if (badge) badge.style.display = 'none';
          }
        } else {
          setPathD(`pathBat${i}Base`, `pathBat${i}Flow`, '');
          if (badge) badge.style.display = 'none';
        }
      }

      // Update dynamic bus bar lengths for Solar, Subloads & Batteries
      this._updateBusBars();
    } catch (e) {
      // Quiet fail if DOM not ready
    }
  }

  _updateBusBars() {
    try {
      const c = this._config || DEFAULT_CONFIG;
      const scale = this._scale || 1.0;

      // 1. Solar Bus: dynamically adjust horizontal line length to span from first to last PV panel
      const solarSvg = this.shadowRoot.getElementById('solarBusSvg');
      const pvCount = c.solar?.pv_count || (c.solar?.strings?.length || 3);
      if (solarSvg && pvCount > 0) {
        const svgRect = solarSvg.getBoundingClientRect();
        const firstPv = this.shadowRoot.getElementById('pvPanel_1');
        const lastPv = this.shadowRoot.getElementById(`pvPanel_${pvCount}`);
        const baseLine = this.shadowRoot.getElementById('solarBusBase');
        const flowLine = this.shadowRoot.getElementById('solarFlowCollector');
        const stemBase = this.shadowRoot.getElementById('solarBusStemBase');
        const stemFlow = this.shadowRoot.getElementById('solarBusStemFlow');
        const feedersGroup = this.shadowRoot.getElementById('solarBusFeeders');

        if (firstPv && lastPv && svgRect.width > 0) {
          const rFirst = firstPv.getBoundingClientRect();
          const rLast = lastPv.getBoundingClientRect();

          const x1 = Math.round((rFirst.left - svgRect.left + rFirst.width / 2) / scale);
          const x2 = Math.round((rLast.left - svgRect.left + rLast.width / 2) / scale);
          const y = 13;
          const midX = Math.round((x1 + x2) / 2);

          if (baseLine) {
            baseLine.setAttribute('x1', x1);
            baseLine.setAttribute('y1', y);
            baseLine.setAttribute('x2', x2);
            baseLine.setAttribute('y2', y);
          }
          if (flowLine) {
            flowLine.setAttribute('x1', x1);
            flowLine.setAttribute('y1', y);
            flowLine.setAttribute('x2', x2);
            flowLine.setAttribute('y2', y);
          }

          if (stemBase) {
            stemBase.setAttribute('x1', midX);
            stemBase.setAttribute('y1', y);
            stemBase.setAttribute('x2', midX);
            stemBase.setAttribute('y2', 26);
          }
          if (stemFlow) {
            stemFlow.setAttribute('x1', midX);
            stemFlow.setAttribute('y1', y);
            stemFlow.setAttribute('x2', midX);
            stemFlow.setAttribute('y2', 26);
          }

          if (feedersGroup) {
            let feedersHtml = '';
            for (let i = 1; i <= pvCount; i++) {
              const card = this.shadowRoot.getElementById(`pvPanel_${i}`);
              if (card) {
                const cr = card.getBoundingClientRect();
                const cx = Math.round((cr.left - svgRect.left + cr.width / 2) / scale);
                feedersHtml += `
                  <line x1="${cx}" y1="0" x2="${cx}" y2="${y}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${cx}" y1="0" x2="${cx}" y2="${y}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            feedersGroup.innerHTML = feedersHtml;
          }
        }
      }

      // 2. Subloads Bus: dynamically adjust horizontal line length to span from first to last subload
      const subloadsSvg = this.shadowRoot.getElementById('subloadsBusSvg');
      const subloadsCount = c.load?.subloads?.length || 3;
      if (subloadsSvg && subloadsCount > 0) {
        const svgRect = subloadsSvg.getBoundingClientRect();
        const firstSub = this.shadowRoot.getElementById('subloadCard_0');
        const lastSub = this.shadowRoot.getElementById(`subloadCard_${subloadsCount - 1}`);
        const essNode = this.shadowRoot.getElementById('essentialNode');
        const baseLine = this.shadowRoot.getElementById('subloadsBusBase');
        const flowLine = this.shadowRoot.getElementById('subloadsFlowCollector');
        const stemBase = this.shadowRoot.getElementById('subloadsBusStemBase');
        const stemFlow = this.shadowRoot.getElementById('subloadsBusStemFlow');
        const feedersGroup = this.shadowRoot.getElementById('subloadsBusFeeders');

        if (firstSub && lastSub && svgRect.width > 0) {
          const rFirst = firstSub.getBoundingClientRect();
          const rLast = lastSub.getBoundingClientRect();

          const x1 = Math.round((rFirst.left - svgRect.left + rFirst.width / 2) / scale);
          const x2 = Math.round((rLast.left - svgRect.left + rLast.width / 2) / scale);
          const y = 13;

          let stemX = Math.round((x1 + x2) / 2);
          if (essNode) {
            const rEss = essNode.getBoundingClientRect();
            stemX = Math.round((rEss.left - svgRect.left + rEss.width / 2) / scale);
          }

          const minBusX = Math.min(x1, stemX);
          const maxBusX = Math.max(x2, stemX);

          if (baseLine) {
            baseLine.setAttribute('x1', minBusX);
            baseLine.setAttribute('y1', y);
            baseLine.setAttribute('x2', maxBusX);
            baseLine.setAttribute('y2', y);
          }
          if (flowLine) {
            flowLine.setAttribute('x1', minBusX);
            flowLine.setAttribute('y1', y);
            flowLine.setAttribute('x2', maxBusX);
            flowLine.setAttribute('y2', y);
          }

          if (stemBase) {
            stemBase.setAttribute('x1', stemX);
            stemBase.setAttribute('y1', 0);
            stemBase.setAttribute('x2', stemX);
            stemBase.setAttribute('y2', y);
          }
          if (stemFlow) {
            stemFlow.setAttribute('x1', stemX);
            stemFlow.setAttribute('y1', 0);
            stemFlow.setAttribute('x2', stemX);
            stemFlow.setAttribute('y2', y);
          }

          if (feedersGroup) {
            let feedersHtml = '';
            for (let i = 0; i < subloadsCount; i++) {
              const card = this.shadowRoot.getElementById(`subloadCard_${i}`);
              if (card) {
                const cr = card.getBoundingClientRect();
                const cx = Math.round((cr.left - svgRect.left + cr.width / 2) / scale);
                feedersHtml += `
                  <line x1="${cx}" y1="${y}" x2="${cx}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${cx}" y1="${y}" x2="${cx}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            feedersGroup.innerHTML = feedersHtml;
          }
        }
      }
    } catch (e) {
      // Quiet fail if elements not ready
    }
  }

  _applyFlowAnimation(el, baseClass, isReverse, speedStr, isActive) {
    if (!el) return;
    if (!isActive) {
      el.setAttribute('class', `flow-pulse ${baseClass} inactive`);
      el.style.opacity = '0';
      el.style.animation = 'none';
      return;
    }
    const dirClass = isReverse ? 'flow-reverse' : 'flow-forward';
    const animName = isReverse ? 'esFlowBackward' : 'esFlowForward';
    el.setAttribute('class', `flow-pulse ${baseClass} ${dirClass}`);
    el.style.opacity = '1';
    el.style.setProperty('--flow-speed', speedStr);
    el.style.animation = `${animName} ${speedStr} linear infinite`;
  }

  _updateFlowAnimations(gridKw, isExport, isImport, solarKw, essentialKw, batKw, isCharging, isDischarging, carKw, batModulesData = [], nonEssKw = 0, subloadsKw = 0, auxKw = 0) {
    const c = this._config || DEFAULT_CONFIG;
    const animEnabled = c.animations?.enabled !== false;
    const baseSpeed = c.animations?.speed || 1.2;

    const calcSpeed = (kw, maxKw = 10.0) => {
      const pwr = Math.abs(kw);
      if (pwr < 0.05) return '2.5s';
      const ratio = Math.min(1, pwr / maxKw);
      const s = Math.max(0.4, (2.6 - ratio * 1.9) * (baseSpeed / 1.2)).toFixed(2);
      return `${s}s`;
    };

    // 1. Grid <-> Inverter
    const fGrid = this.shadowRoot.getElementById('pathGridInvFlow');
    const pwrGrid = Math.abs(gridKw);
    const thresholdKw = (c.grid?.min_power_threshold !== undefined ? c.grid.min_power_threshold : 50) / 1000;
    const sellingEnabled = c.grid?.selling_enabled === true;
    const isGridFlowActive = animEnabled && pwrGrid >= thresholdKw && (isImport || (isExport && sellingEnabled));
    this._applyFlowAnimation(fGrid, 'flow-grid', isExport, calcSpeed(gridKw, 10.0), isGridFlowActive);

    // 2. Solar -> Inverter
    const fSolar = this.shadowRoot.getElementById('pathSolarInvFlow');
    this._applyFlowAnimation(fSolar, 'flow-solar', false, calcSpeed(solarKw, 12.0), animEnabled && solarKw >= 0.05);

    // 3. Inverter -> Essential Loads
    const fLoad = this.shadowRoot.getElementById('pathInvLoadFlow');
    const pwrEss = Math.abs(essentialKw);
    this._applyFlowAnimation(fLoad, 'flow-load', false, calcSpeed(essentialKw, 10.0), animEnabled && pwrEss >= 0.05);

    // 4. Inverter <-> Battery Hub
    const fBat = this.shadowRoot.getElementById('pathInvBatFlow');
    const pwrBat = Math.abs(batKw);
    const isBatActive = animEnabled && pwrBat >= 0.02 && (isCharging || isDischarging);
    const batClass = isCharging ? 'flow-battery charging' : 'flow-battery discharging';
    // Forward flow (isReverse = false): Inverter -> Battery Hub (Charging)
    // Reverse flow (isReverse = true): Battery Hub -> Inverter (Discharging)
    this._applyFlowAnimation(fBat, batClass, isDischarging, calcSpeed(batKw, 8.0), isBatActive);

    // 5. Grid -> Non-Essential Loads
    const fGridNonEss = this.shadowRoot.getElementById('pathGridNonEssFlow');
    const pwrNonEss = Math.abs(nonEssKw);
    this._applyFlowAnimation(fGridNonEss, 'flow-grid', false, calcSpeed(nonEssKw, 5.0), animEnabled && pwrNonEss >= 0.05);

    // 6. Non-Essential -> Car
    const fCar = this.shadowRoot.getElementById('pathNonEssCarFlow') || this.shadowRoot.getElementById('pathGridCarFlow');
    const pwrCar = Math.abs(carKw);
    this._applyFlowAnimation(fCar, 'flow-car', false, calcSpeed(carKw, 7.0), animEnabled && pwrCar >= 0.05);

    // 7. Essential Loads -> Subloads Bus Stem
    const fLoadSubloads = this.shadowRoot.getElementById('pathLoadSubloadsFlow');
    const pwrSub = Math.abs(subloadsKw || essentialKw);
    this._applyFlowAnimation(fLoadSubloads, 'flow-load', false, calcSpeed(pwrSub, 8.0), animEnabled && pwrSub >= 0.05);

    // 8. Inverter <-> Aux/Microinverter
    const fInvAux = this.shadowRoot.getElementById('pathInvAuxFlow');
    const pwrAux = Math.abs(auxKw);
    // Microinverter feeds into Inverter (isReverse = true)
    this._applyFlowAnimation(fInvAux, 'flow-aux', true, calcSpeed(auxKw, 5.0), animEnabled && pwrAux >= 0.05);

    // 9. Battery Hub -> Battery Bus Stem
    const fBatStem = this.shadowRoot.getElementById('pathBatStemFlow');
    this._applyFlowAnimation(fBatStem, batClass, isDischarging, calcSpeed(batKw, 8.0), isBatActive);

    // 10. Solar collector bus
    const solarFlow = this.shadowRoot.getElementById('solarFlowCollector');
    const solarStemFlow = this.shadowRoot.getElementById('solarBusStemFlow');
    if (solarFlow) {
      if (!animEnabled || solarKw < 0.05) {
        solarFlow.style.opacity = '0.2';
        solarFlow.style.animation = 'none';
        if (solarStemFlow) {
          solarStemFlow.style.opacity = '0.2';
          solarStemFlow.style.animation = 'none';
        }
      } else {
        const speed = calcSpeed(solarKw, 12.0);
        solarFlow.style.opacity = '1';
        solarFlow.setAttribute('class', 'flow-line');
        solarFlow.style.animation = `esDashflow ${speed} linear infinite`;
        if (solarStemFlow) {
          solarStemFlow.style.opacity = '1';
          solarStemFlow.setAttribute('class', 'flow-line');
          solarStemFlow.style.animation = `esDashflow ${speed} linear infinite`;
        }
      }
    }

    // 11. Subloads bus collector
    const subloadsFlow = this.shadowRoot.getElementById('subloadsFlowCollector');
    const subloadsStemFlow = this.shadowRoot.getElementById('subloadsBusStemFlow');
    if (subloadsFlow) {
      if (!animEnabled || pwrSub < 0.05) {
        subloadsFlow.style.opacity = '0.2';
        subloadsFlow.style.animation = 'none';
        if (subloadsStemFlow) {
          subloadsStemFlow.style.opacity = '0.2';
          subloadsStemFlow.style.animation = 'none';
        }
      } else {
        const speed = calcSpeed(pwrSub, 8.0);
        subloadsFlow.style.opacity = '1';
        subloadsFlow.setAttribute('class', 'flow-line');
        subloadsFlow.style.animation = `esDashflow ${speed} linear infinite`;
        if (subloadsStemFlow) {
          subloadsStemFlow.style.opacity = '1';
          subloadsStemFlow.setAttribute('class', 'flow-line');
          subloadsStemFlow.style.animation = `esDashflow ${speed} linear infinite`;
        }
      }
    }

    // 12. Battery bus collector & feeder branches
    const batFlow = this.shadowRoot.getElementById('batteryFlowCollector');
    const batStemFlow = this.shadowRoot.getElementById('batteryBusStemFlow');
    const feedersGroup = this.shadowRoot.getElementById('batteryBusFeeders');
    const strokeFlow = isDischarging ? '#f87171' : '#34d399';
    const flowFilter = isDischarging 
      ? 'drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)'
      : 'drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)';

    if (batFlow) {
      batFlow.style.stroke = strokeFlow;
      batFlow.style.filter = flowFilter;
      if (batStemFlow) {
        batStemFlow.style.stroke = strokeFlow;
        batStemFlow.style.filter = flowFilter;
      }

      if (!animEnabled || !isBatActive) {
        batFlow.style.opacity = '0.2';
        batFlow.style.animation = 'none';
        if (batStemFlow) {
          batStemFlow.style.opacity = '0.2';
          batStemFlow.style.animation = 'none';
        }
      } else {
        const speed = calcSpeed(batKw, 8.0);
        const animName = isDischarging ? 'esDashflowRev' : 'esDashflow';
        batFlow.style.opacity = '1';
        batFlow.setAttribute('class', isDischarging ? 'flow-line-reverse' : 'flow-line');
        batFlow.style.animation = `${animName} ${speed} linear infinite`;
        if (batStemFlow) {
          batStemFlow.style.opacity = '1';
          batStemFlow.setAttribute('class', isDischarging ? 'flow-line-reverse' : 'flow-line');
          batStemFlow.style.animation = `${animName} ${speed} linear infinite`;
        }
      }
    }

    if (feedersGroup) {
      feedersGroup.querySelectorAll('line').forEach(line => {
        line.style.stroke = strokeFlow;
        line.style.filter = flowFilter;
        if (!animEnabled || !isBatActive) {
          line.style.opacity = '0.2';
          line.style.animation = 'none';
        } else {
          const speed = calcSpeed(batKw, 8.0);
          const animName = isDischarging ? 'esDashflowRev' : 'esDashflow';
          line.style.opacity = '1';
          line.setAttribute('class', isDischarging ? 'flow-line-reverse' : 'flow-line');
          line.style.animation = `${animName} ${speed} linear infinite`;
        }
      });
    }

    // 13. Individual Battery Packs (Master Hub <-> Bat 1..8)
    for (let i = 1; i <= 8; i++) {
      const fPack = this.shadowRoot.getElementById(`pathBat${i}Flow`);
      if (!fPack) continue;
      const modData = batModulesData[i - 1];
      const pwrMod = modData ? modData.kwNum : 0;
      const isPackActive = animEnabled && (pwrMod >= 0.02 || isBatActive);
      const isReverse = isDischarging; // On discharge, flows from pack UP to hub
      this._applyFlowAnimation(fPack, batClass, isReverse, calcSpeed(pwrMod || batKw, 8.0), isPackActive);
    }

    // 14. Individual Subloads (0..5)
    for (let i = 0; i < 6; i++) {
      const fSub = this.shadowRoot.getElementById(`pathSubload${i}Flow`);
      if (!fSub) continue;
      const subConfig = c.load?.subloads?.[i];
      const sSub = subConfig ? this._getEntityState(subConfig.entity) : null;
      const pwrSubItem = sSub ? this._formatPower(sSub, 2.0).kw : (i === 0 ? 2.0 : (i === 1 ? 3.0 : 4.0));
      this._applyFlowAnimation(fSub, 'flow-load', false, calcSpeed(pwrSubItem, 8.0), animEnabled && pwrSubItem >= 0.05);
    }

    // 15. Wind Turbines -> Inverter Energy Flow Animations
    const isWindActive = c.wind?.show !== false || c.aux?.type === 'wind';
    const windCount = isWindActive ? (c.wind?.turbine_count || (c.wind?.turbines?.length || 2)) : 0;
    const turbinesList = c.wind?.turbines || [];

    for (let i = 1; i <= 4; i++) {
      const fTurbine = this.shadowRoot.getElementById(`pathTurbine${i}Flow`);
      if (!fTurbine) continue;

      if (i <= windCount && isWindActive) {
        const t = turbinesList[i - 1] || {};
        const fallbackKw = this._hass ? 0 : (i === 1 ? 1.45 : 0.85);
        const sPower = this._getEntityState(t.power_entity || `sensor.wind_turbine_${i}_power`);
        const formatted = this._formatPower(sPower, fallbackKw);
        let powerWatts = formatted.kw * 1000;
        if (sPower && sPower.unit === 'W') powerWatts = sPower.val;
        const threshold = t.animation_threshold ?? c.wind?.animation_threshold ?? 50;

        const isGenerating = powerWatts >= threshold;
        this._applyFlowAnimation(fTurbine, 'flow-wind', false, calcSpeed(powerWatts / 1000, 3.0), animEnabled && isGenerating);
      } else {
        this._applyFlowAnimation(fTurbine, 'flow-wind', false, '1.5s', false);
      }
    }
  }
}

// Register custom element
if (!customElements.get('energy-station-card')) {
  customElements.define('energy-station-card', EnergyStationCard);
}

// Register for Lovelace card picker UI
window.customCards = window.customCards || [];
if (!window.customCards.some(card => card.type === 'energy-station-card')) {
  window.customCards.push({
    type: 'energy-station-card',
    name: 'Energy Station Card',
    description: 'Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations',
    preview: true,
    documentationURL: 'https://github.com/custom-cards/energy-station-card'
  });
}
