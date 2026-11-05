import { DEFAULT_CONFIG } from './default-config.js';

export class EnergyStationCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = null;
    this._hass = null;
    this._currentTab = 'general';
    this._isInternalChange = false;
    this._debounceTimer = null;
    this._rendered = false;
    this._isDialogExpanded = false;
  }

  set hass(hass) {
    this._hass = hass;
  }

  setConfig(config) {
    this._config = JSON.parse(JSON.stringify(config || DEFAULT_CONFIG));
    if (this._isInternalChange) {
      this._isInternalChange = false;
      return;
    }
    this.render();
  }

  connectedCallback() {
    if (!this._rendered) {
      this.render();
    }
    // Automatically maximize/expand dialog width on desktop screens
    const tryExpand = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 850) {
        this._applyExpand(true);
      }
    };
    tryExpand();
    setTimeout(tryExpand, 80);
    setTimeout(tryExpand, 250);
  }

  _findHuiDialog() {
    let curr = this;
    while (curr) {
      if (curr.tagName && curr.tagName.toLowerCase() === 'hui-dialog-edit-card') {
        return curr;
      }
      if (curr.parentElement) {
        curr = curr.parentElement;
      } else if (curr.parentNode) {
        curr = curr.parentNode;
      } else if (curr.getRootNode && curr.getRootNode().host) {
        curr = curr.getRootNode().host;
      } else {
        break;
      }
    }

    // Direct document search
    if (typeof document !== 'undefined') {
      const docDialog = document.querySelector('hui-dialog-edit-card') ||
                        document.querySelector('ha-dialog-edit-card');
      if (docDialog) return docDialog;

      // Deep search through home-assistant shadow DOM
      try {
        const ha = document.querySelector('home-assistant');
        if (ha?.shadowRoot) {
          const fromHa = ha.shadowRoot.querySelector('hui-dialog-edit-card') ||
                         ha.shadowRoot.querySelector('ha-dialog-edit-card');
          if (fromHa) return fromHa;

          const all = ha.shadowRoot.querySelectorAll('*');
          for (const el of all) {
            if (el.shadowRoot) {
              const found = el.shadowRoot.querySelector('hui-dialog-edit-card') ||
                            el.shadowRoot.querySelector('ha-dialog-edit-card');
              if (found) return found;
            }
          }
        }
      } catch (e) {}
    }

    return null;
  }

  _findHaDialog(huiDialog) {
    if (huiDialog?.shadowRoot) {
      const d = huiDialog.shadowRoot.querySelector('ha-dialog') || 
                huiDialog.shadowRoot.querySelector('mwc-dialog');
      if (d) return d;
    }
    let curr = this;
    while (curr) {
      if (curr.tagName && (curr.tagName.toLowerCase() === 'ha-dialog' || curr.tagName.toLowerCase() === 'mwc-dialog')) {
        return curr;
      }
      if (curr.parentElement) {
        curr = curr.parentElement;
      } else if (curr.parentNode) {
        curr = curr.parentNode;
      } else if (curr.getRootNode && curr.getRootNode().host) {
        curr = curr.getRootNode().host;
      } else {
        break;
      }
    }
    if (typeof document !== 'undefined') {
      return document.querySelector('ha-dialog') || document.querySelector('mwc-dialog');
    }
    return null;
  }

  _applyExpand(expanded) {
    this._isDialogExpanded = expanded;
    const huiDialog = this._findHuiDialog();
    const haDialog = this._findHaDialog(huiDialog);

    if (expanded) {
      if (huiDialog) {
        if (typeof huiDialog._enlarge === 'function' && !huiDialog.large) {
          huiDialog._enlarge();
        } else {
          huiDialog.large = true;
          huiDialog.setAttribute('large', '');
        }

        try {
          if (huiDialog.shadowRoot) {
            let st = huiDialog.shadowRoot.getElementById('energy-station-wide-style');
            if (!st) {
              st = document.createElement('style');
              st.id = 'energy-station-wide-style';
              st.textContent = `
                ha-dialog {
                  --mdc-dialog-min-width: 95vw !important;
                  --mdc-dialog-max-width: 96vw !important;
                  --ha-dialog-max-width: 96vw !important;
                  --ha-dialog-width: 95vw !important;
                }
                .content {
                  width: 100% !important;
                  max-width: 100% !important;
                }
                .element-editor {
                  min-width: 0 !important;
                  flex: 1.1 !important;
                }
                .element-preview {
                  min-width: 0 !important;
                  flex: 0.9 !important;
                }
              `;
              huiDialog.shadowRoot.appendChild(st);
            }
          }
        } catch (e) {}
      }

      if (haDialog) {
        haDialog.style.setProperty('--mdc-dialog-min-width', '95vw', 'important');
        haDialog.style.setProperty('--mdc-dialog-max-width', '96vw', 'important');
        haDialog.style.setProperty('--ha-dialog-max-width', '96vw', 'important');
        haDialog.style.setProperty('--ha-dialog-width', '95vw', 'important');
        haDialog.style.setProperty('--mdc-dialog-width', '95vw', 'important');

        try {
          const surf = haDialog.shadowRoot?.querySelector('.mdc-dialog__surface');
          if (surf) {
            surf.style.setProperty('max-width', '96vw', 'important');
            surf.style.setProperty('width', '95vw', 'important');
          }
        } catch (e) {}
      }
    } else {
      if (huiDialog) {
        if (typeof huiDialog._enlarge === 'function' && huiDialog.large) {
          huiDialog._enlarge();
        } else {
          huiDialog.large = false;
          huiDialog.removeAttribute('large');
        }
        try {
          const st = huiDialog.shadowRoot?.getElementById('energy-station-wide-style');
          if (st) st.remove();
        } catch (e) {}
      }

      if (haDialog) {
        haDialog.style.removeProperty('--mdc-dialog-min-width');
        haDialog.style.removeProperty('--mdc-dialog-max-width');
        haDialog.style.removeProperty('--ha-dialog-max-width');
        haDialog.style.removeProperty('--ha-dialog-width');
        haDialog.style.removeProperty('--mdc-dialog-width');

        try {
          const surf = haDialog.shadowRoot?.querySelector('.mdc-dialog__surface');
          if (surf) {
            surf.style.removeProperty('max-width');
            surf.style.removeProperty('width');
          }
        } catch (e) {}
      }
    }

    this._updateExpandBtn();
  }

  _updateExpandBtn() {
    const btn = this.shadowRoot?.getElementById('btnToggleExpand');
    if (!btn) return;
    const isWide = this._isDialogExpanded;
    btn.innerHTML = isWide ? '❐ Звичайний розмір' : '⛶ На весь екран';
    btn.title = isWide 
      ? 'Згорнути вікно налаштувань до звичайного розміру' 
      : 'Розширити вікно налаштувань на весь екран';
  }

  _flushConfig() {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
      this._dispatchConfig();
    }
  }

  _dispatchConfig() {
    if (!this._config) return;
    this._isInternalChange = true;
    const event = new CustomEvent('config-changed', {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  _valueChanged(path, value, immediate = false) {
    if (!this._config) return;
    
    // Always work on an unfrozen clean clone
    this._config = JSON.parse(JSON.stringify(this._config));

    // Set nested value (e.g. "solar.pv_count")
    const parts = path.split('.');
    let curr = this._config;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!curr[parts[i]]) curr[parts[i]] = {};
      curr = curr[parts[i]];
    }
    curr[parts[parts.length - 1]] = value;

    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }

    if (immediate) {
      this._dispatchConfig();
    } else {
      this._debounceTimer = setTimeout(() => {
        this._dispatchConfig();
      }, 140);
    }
  }

  _switchTab(tab) {
    this._flushConfig();
    this._currentTab = tab;
    this.render();
  }

  _applyPreset(presetName) {
    this._config = JSON.parse(JSON.stringify(this._config || DEFAULT_CONFIG));
    if (presetName === 'deye_esphome') {
      this._config.inverter.model_name = 'DEYE SUN-12K';
      this._config.solar.pv_count = 3;
      this._config.solar.total_power_entity = ''; // Розраховується автоматично як сума стрінгів PV
      this._config.solar.daily_yield_entity = 'sensor.deye_12k_inverter_daily_solar_energy';
      this._config.solar.strings = [
        {
          id: 'pv1',
          name: 'PV 1',
          voltage_entity: 'sensor.deye_12k_inverter_pv1_voltage',
          current_entity: 'sensor.deye_12k_inverter_pv1_current',
          power_entity: 'sensor.deye_12k_inverter_pv1_power'
        },
        {
          id: 'pv2',
          name: 'PV 2',
          voltage_entity: 'sensor.deye_12k_inverter_pv2_voltage',
          current_entity: 'sensor.deye_12k_inverter_pv2_current',
          power_entity: 'sensor.deye_12k_inverter_pv2_power'
        },
        {
          id: 'pv3',
          name: 'PV 3',
          voltage_entity: 'sensor.deye_12k_inverter_pv3_voltage',
          current_entity: 'sensor.deye_12k_inverter_pv3_current',
          power_entity: 'sensor.deye_12k_inverter_pv3_power'
        }
      ];
      this._config.inverter.power_entity = 'sensor.deye_12k_inverter_inverter_power';
      this._config.inverter.ac_temperature_entity = 'sensor.deye_12k_inverter_ac_temperature';
      this._config.inverter.dc_temperature_entity = 'sensor.deye_12k_inverter_dc_temperature';
      this._config.inverter.voltage_entity = 'sensor.deye_12k_inverter_grid_voltage';
      this._config.inverter.current_entity = 'sensor.deye_12k_inverter_grid_current';
      this._config.inverter.frequency_entity = 'sensor.deye_12k_inverter_grid_frequency';
      this._config.battery.soc_entity = 'sensor.deye_12k_inverter_battery_soc';
      this._config.battery.power_entity = 'sensor.deye_12k_inverter_battery_power';
      this._config.battery.voltage_entity = 'sensor.deye_12k_inverter_battery_voltage';
      this._config.battery.current_entity = 'sensor.deye_12k_inverter_battery_current';
      this._config.battery.charge_daily_entity = 'sensor.deye_12k_inverter_daily_battery_charge';
      this._config.battery.discharge_daily_entity = 'sensor.deye_12k_inverter_daily_battery_discharge';
      this._config.battery.capacity_entity = 'sensor.inverter_12_kvt_battery_capacity';
      this._config.battery.parallel_batteries = 2;
      this._config.battery.modules = [
        {
          id: 'bat1',
          name: 'Батарея 1',
          soc_entity: 'sensor.bms_rack1_soc',
          current_entity: 'sensor.bms_rack1_current',
          voltage_entity: 'sensor.bms_rack1_voltage',
          power_entity: 'sensor.bms_rack1_power',
          temperature_entity: 'sensor.bms_rack1_temperature',
          capacity_kwh: 7.88
        },
        {
          id: 'bat2',
          name: 'Батарея 2',
          soc_entity: 'sensor.bms_rack2_soc',
          current_entity: 'sensor.bms_rack2_current',
          voltage_entity: 'sensor.bms_rack2_voltage',
          power_entity: 'sensor.bms_rack2_power',
          temperature_entity: 'sensor.bms_rack2_temperature',
          capacity_kwh: 5.12
        }
      ];
      this._config.grid.power_entity = 'sensor.deye_12k_inverter_total_grid_power';
      this._config.grid.import_daily_entity = 'sensor.deye_12k_inverter_daily_energy_bought';
      this._config.grid.export_daily_entity = 'sensor.deye_12k_inverter_daily_energy_sold';
      this._config.load.auto_calculate = true;
      this._config.load.separate_export = true;
      this._config.load.essential_power_entity = 'sensor.deye_12k_inverter_load_power';
      this._config.load.daily_house_entity = 'sensor.deye_12k_inverter_daily_load_energy';
    } else if (presetName === 'deye_solarman') {
      this._config.inverter.model_name = 'DEYE HYBRID';
      this._config.solar.pv_count = 2;
      this._config.solar.total_power_entity = 'sensor.solarman_pv_total_power';
      this._config.solar.daily_yield_entity = 'sensor.solarman_daily_production';
      this._config.solar.strings = [
        {
          id: 'pv1',
          name: 'PV 1',
          voltage_entity: 'sensor.solarman_pv1_voltage',
          current_entity: 'sensor.solarman_pv1_current',
          power_entity: 'sensor.solarman_pv1_power'
        },
        {
          id: 'pv2',
          name: 'PV 2',
          voltage_entity: 'sensor.solarman_pv2_voltage',
          current_entity: 'sensor.solarman_pv2_current',
          power_entity: 'sensor.solarman_pv2_power'
        }
      ];
      this._config.inverter.power_entity = 'sensor.solarman_inverter_power';
      this._config.battery.soc_entity = 'sensor.solarman_battery_soc';
      this._config.battery.power_entity = 'sensor.solarman_battery_power';
      this._config.grid.power_entity = 'sensor.solarman_grid_external_power';
      this._config.load.auto_calculate = true;
      this._config.load.separate_export = true;
      this._config.load.essential_power_entity = 'sensor.solarman_essential_load';
    }

    this._dispatchConfig();
    this.render();
  }

  render() {
    if (!this._config) return;
    this._rendered = true;

    const c = this._config;

    // Capture active element state (selector + selection range) before replacing innerHTML
    const activeEl = this.shadowRoot?.activeElement;
    let activeSelector = null;
    let caretStart = null;
    let caretEnd = null;

    if (activeEl) {
      if (activeEl.id) {
        activeSelector = `#${activeEl.id}`;
      } else if (activeEl.dataset?.idx !== undefined && activeEl.className) {
        const firstClass = activeEl.className.trim().split(/\s+/)[0];
        activeSelector = `.${firstClass}[data-idx="${activeEl.dataset.idx}"]`;
      }
      if ('selectionStart' in activeEl && 'selectionEnd' in activeEl) {
        caretStart = activeEl.selectionStart;
        caretEnd = activeEl.selectionEnd;
      }
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: #e2e8f0;
          background: #090e1a;
          border-radius: 14px;
          padding: 16px;
          box-sizing: border-box;
        }
        .editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #1e293b;
          margin-bottom: 14px;
          gap: 10px;
          flex-wrap: wrap;
        }
        .editor-title {
          font-size: 16px;
          font-weight: 700;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .presets-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .preset-badge {
          background: #1e293b;
          border: 1px solid #334155;
          color: #f1f5f9;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          user-select: none;
        }
        .preset-badge:hover {
          background: #0284c7;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
          transform: translateY(-1px);
        }
        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 6px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid #1e293b;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .tab-btn {
          flex: 1 1 auto;
          min-width: 110px;
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11.5px;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          user-select: none;
        }
        .tab-btn:hover {
          background: #1e293b;
          color: #f1f5f9;
          border-color: #334155;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.45);
        }
        .field-group {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 14px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .field-group-title {
          font-weight: 700;
          font-size: 13px;
          color: #38bdf8;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .field-row {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        label {
          font-size: 11px;
          color: #cbd5e1;
          font-weight: 500;
        }
        input[type="text"], input[type="number"], select {
          background: #080d19;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          outline: none;
          box-sizing: border-box;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border-color: #38bdf8;
          background: #0b1324;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
        }
        .slider-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        input[type="range"] {
          flex: 1;
          accent-color: #0284c7;
          cursor: pointer;
        }
        .field-hint {
          font-size: 10.5px;
          color: #94a3b8;
          margin-top: 2px;
          line-height: 1.35;
        }
        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: rgba(8, 13, 25, 0.5);
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 8px 12px;
          transition: all 0.2s;
        }
        .checkbox-row:hover {
          border-color: #334155;
          background: rgba(15, 23, 42, 0.8);
        }
        .checkbox-row input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #0284c7;
          cursor: pointer;
          flex-shrink: 0;
        }
        .checkbox-row span {
          font-size: 11.5px;
          color: #e2e8f0;
          user-select: none;
        }
        .fields-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }
        .full-width {
          grid-column: 1 / -1;
        }
      </style>

      <div class="editor-header">
        <div class="editor-title">
          <span>⚡ Energy Station</span>
          <span style="font-size: 10px; background: rgba(245,158,11,0.2); color: #fbbf24; padding: 2px 7px; border-radius: 4px; border: 1px solid rgba(245,158,11,0.3);">HA PRO v1.2.9</span>
        </div>
        <div class="presets-row">
          <button class="preset-badge" id="btnToggleExpand" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" title="Розгорнути вікно налаштувань на весь екран / згорнути до стандартного розміру">
            ${this._isDialogExpanded ? '❐ Звичайний розмір' : '⛶ На весь екран'}
          </button>
          <button class="preset-badge" id="btnPresetEsp" title="Швидко застосувати типові сенсори прошивки ESPHome Deye">⚡ ESPHome Deye</button>
          <button class="preset-badge" id="btnPresetSolarman" title="Швидко застосувати сенсори інтеграції Solarman">☀️ Solarman</button>
        </div>
      </div>

      <!-- TABS -->
      <div class="tabs">
        <button class="tab-btn ${this._currentTab === 'general' ? 'active' : ''}" data-tab="general">⚙️ Загальні</button>
        <button class="tab-btn ${this._currentTab === 'solar' ? 'active' : ''}" data-tab="solar">☀️ PV Сонячні</button>
        <button class="tab-btn ${this._currentTab === 'inverter' ? 'active' : ''}" data-tab="inverter">⚡ Інвертор & AUX</button>
        <button class="tab-btn ${this._currentTab === 'battery' ? 'active' : ''}" data-tab="battery">🔋 Батарея & Стек</button>
        <button class="tab-btn ${this._currentTab === 'grid' ? 'active' : ''}" data-tab="grid">🌐 Мережа & Авто</button>
        <button class="tab-btn ${this._currentTab === 'loads' ? 'active' : ''}" data-tab="loads">🏠 Дім & Споживачі</button>
        <button class="tab-btn ${this._currentTab === 'tariffs' ? 'active' : ''}" data-tab="tariffs">💰 Тарифи</button>
      </div>

      <!-- TAB CONTENT: GENERAL -->
      <div style="display: ${this._currentTab === 'general' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">Основні параметри картки</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Назва станції / Заголовок:</label>
              <input type="text" id="title" value="${c.title || 'Energy Station'}">
            </div>
            <div class="field-row">
              <label>Максимальна ширина картки (Max Width):</label>
              <select id="cardMaxWidth">
                <option value="1400px" ${c.max_width === '1400px' || !c.max_width ? 'selected' : ''}>1400px (Стандартна)</option>
                <option value="1600px" ${c.max_width === '1600px' ? 'selected' : ''}>1600px (Широка)</option>
                <option value="1800px" ${c.max_width === '1800px' ? 'selected' : ''}>1800px (Дуже широка / 2K)</option>
                <option value="100%" ${c.max_width === '100%' ? 'selected' : ''}>100% (На всю ширину панелі)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Тема оформлення (Theme):</label>
              <select id="themeMode">
                <option value="dark" ${c.theme_mode !== 'light' ? 'selected' : ''}>🌙 Темна (Dark)</option>
                <option value="light" ${c.theme_mode === 'light' ? 'selected' : ''}>☀️ Світла (Light)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Мова інтерфейсу (Language):</label>
              <select id="cardLanguage">
                <option value="uk" ${c.language !== 'en' ? 'selected' : ''}>🇺🇦 Українська (UK)</option>
                <option value="en" ${c.language === 'en' ? 'selected' : ''}>🇬🇧 English (EN)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Масштаб картки (Zoom / Scale):</label>
              <div class="slider-row">
                <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${c.card_scale || 1.0}">
                <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((c.card_scale || 1.0) * 100)}%</span>
              </div>
            </div>
            <div class="field-row">
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${c.animations?.speed || 1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${c.animations?.speed || 1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${c.show_quick_settings !== false ? 'checked' : ''}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${c.animations?.enabled !== false ? 'checked' : ''}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${c.controls?.solar_charge_entity || ''}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${c.controls?.sell_power_entity || ''}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${c.controls?.grid_charge_entity || ''}" placeholder="number.deye_12k_inverter_grid_charge_current">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: SOLAR -->
      <div style="display: ${this._currentTab === 'solar' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">☀️ Сонячне поле (PV панелі)</div>
          <div class="fields-grid">
            <div class="field-row full-width">
              <label>Кількість панелей/стрингів (1 - 16):</label>
              <div class="slider-row">
                <input type="range" id="solarPvCount" min="1" max="16" value="${c.solar?.pv_count || 3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${c.solar?.pv_count || 3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${c.solar?.total_power_entity || ''}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${c.solar?.daily_yield_entity || ''}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${c.solar?.target_daily_yield || 55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${c.solar?.installed_power !== undefined ? c.solar.installed_power : 12.0}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${c.solar?.show_metrics !== false ? 'checked' : ''}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${c.solar?.pv_count || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: c.solar?.pv_count || 3 }).map((_, idx) => {
              const num = idx + 1;
              const s = c.solar?.strings?.[idx] || {};
              const defaultVolt = `sensor.deye_12k_inverter_pv${num}_voltage`;
              const defaultCurr = `sensor.deye_12k_inverter_pv${num}_current`;
              const defaultPower = `sensor.deye_12k_inverter_pv${num}_power`;
              return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${num} (Стрінг ${num})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${idx}" value="${s.name || `PV ${num}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${num} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${idx}" value="${s.voltage_entity !== undefined ? s.voltage_entity : defaultVolt}" placeholder="${defaultVolt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${num} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${idx}" value="${s.current_entity !== undefined ? s.current_entity : defaultCurr}" placeholder="${defaultCurr}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${num} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${idx}" value="${s.capacity_kw !== undefined ? s.capacity_kw : 4.0}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${num} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${idx}" value="${s.power_entity !== undefined ? s.power_entity : defaultPower}" placeholder="${defaultPower} (авто P = U × I)">
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: INVERTER & AUX -->
      <div style="display: ${this._currentTab === 'inverter' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">⚡ Гібридний інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Модель / Назва на шильдику:</label>
              <input type="text" id="invModel" value="${c.inverter?.model_name || 'DEYE SUN-12K'}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${c.inverter?.power_entity || ''}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${c.inverter?.show_self_consumption !== false ? 'checked' : ''} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${c.inverter?.self_consumption_entity || ''}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${c.inverter?.standby_power !== undefined ? c.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${c.inverter?.standby_power !== undefined ? c.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${c.inverter?.ac_temperature_entity || ''}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${c.inverter?.dc_temperature_entity || ''}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${c.inverter?.voltage_entity || ''}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${c.inverter?.current_entity || ''}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${c.inverter?.frequency_entity || ''}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${c.aux?.type === 'microinverter' ? 'selected' : ''}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${c.aux?.type === 'generator' ? 'selected' : ''}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${c.aux?.type === 'wind' ? 'selected' : ''}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${c.aux?.type === 'smart_load' ? 'selected' : ''}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${c.aux?.type === 'none' ? 'selected' : ''}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${(c.aux?.type === 'microinverter' && (!c.aux?.title || c.aux?.title === 'Вітрогенератор')) ? 'Мікроінвертор' : (c.aux?.title || (c.aux?.type === 'generator' ? 'Генератор' : (c.aux?.type === 'smart_load' ? 'Smart Load' : 'Мікроінвертор')))}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${c.aux?.power_entity || ''}">
            </div>
          </div>
        </div>

        <!-- WIND TURBINES SECTION (Supports Multiple Turbines) -->
        <div class="field-group" style="border-color: rgba(6, 182, 212, 0.45); background: rgba(8, 47, 73, 0.2);">
          <div class="field-group-title" style="color: #22d3ee;">
            <span>💨 Вітропарк (Вітрогенератори)</span>
            <span style="font-size: 10px; background: rgba(6, 182, 212, 0.2); padding: 2px 7px; border-radius: 4px; color: #67e8f9;">Multi-Turbine System</span>
          </div>

          <div class="field-row">
            <label>Кількість вітряків у системі (1 - 4):</label>
            <div class="slider-row">
              <input type="range" id="windTurbineCount" min="1" max="4" value="${c.wind?.turbine_count || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${c.wind?.turbine_count || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${c.wind?.animation_threshold || c.aux?.wind_animation_threshold || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${c.wind?.animation_threshold || c.aux?.wind_animation_threshold || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${c.wind?.daily_energy_entity || ''}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${c.wind?.monthly_energy_entity || ''}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: c.wind?.turbine_count || 2 }).map((_, idx) => {
              const t = c.wind?.turbines?.[idx] || {};
              return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${idx}" value="${t.name || `Вітряк ${idx + 1}`}" placeholder="Назва (напр. Вітряк ${idx + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${idx}" value="${t.power_entity || `sensor.wind_turbine_${idx + 1}_power`}" placeholder="sensor.wind_turbine_${idx + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${idx}" value="${t.rpm_entity || t.speed_entity || ''}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${idx}" value="${t.daily_energy_entity || ''}" placeholder="sensor.wind_turbine_${idx + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${idx}" value="${t.monthly_energy_entity || ''}" placeholder="sensor.wind_turbine_${idx + 1}_monthly_energy">
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab === 'battery' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Рівень заряду Battery SOC (%) (сенсор):</label>
              <input type="text" id="batSoc" value="${c.battery?.soc_entity || ''}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${c.battery?.power_entity || ''}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${c.battery?.power_sign !== 'standard' ? 'selected' : ''}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${c.battery?.power_sign === 'standard' ? 'selected' : ''}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${c.battery?.capacity_entity || ''}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${c.battery?.voltage_entity || ''}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${c.battery?.current_entity || ''}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${c.battery?.temperature_entity || ''}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${c.battery?.cell_delta_entity || ''}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${c.battery?.charge_daily_entity || ''}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${c.battery?.discharge_daily_entity || ''}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${c.battery?.parallel_batteries || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${c.battery?.parallel_batteries || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${c.battery?.parallel_batteries || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: c.battery?.parallel_batteries || 2 }).map((_, idx) => {
              const num = idx + 1;
              const m = c.battery?.modules?.[idx] || c.battery?.module_entities?.[idx] || {};
              const defaultSoc = `sensor.bms_rack${num}_soc`;
              const defaultCurr = `sensor.bms_rack${num}_current`;
              const defaultVolt = `sensor.bms_rack${num}_voltage`;
              const defaultPower = `sensor.bms_rack${num}_power`;
              const defaultTemp = `sensor.bms_rack${num}_temperature`;
              const defaultDelta = `sensor.bms_rack${num}_cell_delta`;
              return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${num} (Модуль ${num})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${idx}" value="${m.name || `Батарея ${num}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${num} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${idx}" value="${m.soc_entity !== undefined ? m.soc_entity : (m.soc !== undefined ? m.soc : defaultSoc)}" placeholder="${defaultSoc}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${num} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${idx}" value="${m.current_entity !== undefined ? m.current_entity : defaultCurr}" placeholder="${defaultCurr}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${num} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${idx}" value="${m.voltage_entity !== undefined ? m.voltage_entity : (m.volt !== undefined ? m.volt : defaultVolt)}" placeholder="${defaultVolt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${num} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${idx}" value="${m.temperature_entity !== undefined ? m.temperature_entity : (m.temp !== undefined ? m.temp : defaultTemp)}" placeholder="${defaultTemp}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${num} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${idx}" value="${m.capacity_kwh !== undefined ? m.capacity_kwh : (num === 1 ? 7.88 : 5.12)}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${num} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${idx}" value="${m.cell_delta_entity !== undefined ? m.cell_delta_entity : (m.delta !== undefined ? m.delta : defaultDelta)}" placeholder="${defaultDelta}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${num} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${idx}" value="${m.power_entity !== undefined ? m.power_entity : defaultPower}" placeholder="${defaultPower} (авто P = U × I)">
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: GRID & EV -->
      <div style="display: ${this._currentTab === 'grid' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">🌐 Зовнішня електромережа</div>

          <div class="field-row full-width" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 10px; margin-bottom: 12px;">
            <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; margin-bottom: 0;">
              <div>
                <span style="font-weight: 700; color: #38bdf8; font-size: 13px;">Дозволити продаж в мережу (Експорт)</span>
                <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">
                  Увімкніть, якщо станція продає надлишки («зелений тариф» / Net Billing). Якщо вимкнено (Zero Export) — анімація продажу ЗАВЖДИ вимкнена.
                </div>
              </div>
              <input type="checkbox" id="gridSellingEnabled" ${c.grid?.selling_enabled ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${c.grid?.power_entity || ''}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${c.grid?.external_power_entity || ''}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${c.grid?.auto_calculate !== false ? 'checked' : ''}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${c.grid?.power_sign !== 'inverted' ? 'selected' : ''}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${c.grid?.power_sign === 'inverted' ? 'selected' : ''}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${c.grid?.min_power_threshold !== undefined ? c.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${c.grid?.voltage_entity || ''}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${c.grid?.status_entity || ''}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${c.grid?.voltage_threshold !== undefined ? c.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${c.grid?.import_daily_entity || ''}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${c.grid?.export_daily_entity || ''}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${c.grid?.non_essential_power_entity || ''}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${c.grid?.car_power_entity || ''}" placeholder="Залишіть порожнім, якщо немає">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab === 'loads' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadAutoCalculate" ${c.load?.auto_calculate !== false ? 'checked' : ''} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${c.load?.separate_export !== false ? 'checked' : ''} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${c.load?.essential_power_entity || ''}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${c.load?.daily_house_entity || ''}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(c.load?.subloads || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ''}

          ${(c.load?.subloads || []).map((sub, idx) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${idx}" value="${sub.name || ''}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${idx}" style="width: 140px;">
                  <option value="boiler" ${sub.icon === 'boiler' ? 'selected' : ''}>Бойлер</option>
                  <option value="heat_pump" ${sub.icon === 'heat_pump' ? 'selected' : ''}>Тепловий насос</option>
                  <option value="air_conditioner" ${sub.icon === 'air_conditioner' ? 'selected' : ''}>Кондиціонер</option>
                  <option value="washing_machine" ${sub.icon === 'washing_machine' ? 'selected' : ''}>Пральна машина</option>
                  <option value="car" ${sub.icon === 'car' ? 'selected' : ''}>Авто / Зарядка</option>
                  <option value="house" ${sub.icon === 'house' ? 'selected' : ''}>Освітлення / Дім</option>
                  <option value="other" ${sub.icon === 'other' ? 'selected' : ''}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${idx}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${idx}" value="${sub.entity || ''}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join('')}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>

      <!-- TAB CONTENT: TARIFFS -->
      <div style="display: ${this._currentTab === 'tariffs' ? 'block' : 'none'};">
        <div class="field-group">
          <div class="field-group-title">Двозонний облік тарифів (День / Ніч)</div>
          
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="tariffsEnabled" ${(c.tariffs?.enabled !== false) ? 'checked' : ''} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${c.tariffs?.currency || 'грн'}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${c.tariffs?.currency || 'грн'}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${c.tariffs?.day_rate ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${c.tariffs?.currency || 'грн'}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${c.tariffs?.night_rate ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${c.tariffs?.currency || 'грн'}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${c.tariffs?.export_rate ?? 5.30}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length: 24}, (_, i) => `<option value="${i}" ${(c.tariffs?.night_start_hour ?? 23) === i ? 'selected' : ''}>${String(i).padStart(2, '0')}:00</option>`).join('')}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length: 24}, (_, i) => `<option value="${i}" ${(c.tariffs?.night_end_hour ?? 7) === i ? 'selected' : ''}>${String(i).padStart(2, '0')}:00</option>`).join('')}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${c.tariffs?.import_day_entity || ''}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${c.tariffs?.import_night_entity || ''}" placeholder="sensor.daily_energy_night">
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 10px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі на нічну (з 23:00 до 07:00) та денну зону з історії Home Assistant та енергії заряду АКБ, або використовує вказані вище окремі сенсори.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="fields-grid">
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowDailyCost" ${(c.tariffs?.show_daily_cost !== false) ? 'checked' : ''} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${(c.tariffs?.show_export_income !== false) ? 'checked' : ''} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${(c.tariffs?.show_active_badge !== false) ? 'checked' : ''} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${(c.tariffs?.show_solar_savings !== false) ? 'checked' : ''} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `;

    this._bindEvents();
    this._updateExpandBtn();

    // 2. Restore active element focus and selection range
    if (activeSelector) {
      const newActive = this.shadowRoot.querySelector(activeSelector);
      if (newActive) {
        newActive.focus();
        if (caretStart !== null && caretEnd !== null && 'setSelectionRange' in newActive) {
          try {
            newActive.setSelectionRange(caretStart, caretEnd);
          } catch (e) {}
        }
      }
    }
  }

  _bindEvents() {
    const root = this.shadowRoot;

    // Toggle expand button
    root.getElementById('btnToggleExpand')?.addEventListener('click', () => {
      this._applyExpand(!this._isDialogExpanded);
    });

    // Tabs
    root.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this._switchTab(e.target.dataset.tab);
      });
    });

    // Presets
    root.getElementById('btnPresetEsp')?.addEventListener('click', () => this._applyPreset('deye_esphome'));
    root.getElementById('btnPresetSolarman')?.addEventListener('click', () => this._applyPreset('deye_solarman'));

    // Inputs bindings
    const bindInput = (id, path) => {
      const el = root.getElementById(id);
      if (el) {
        el.addEventListener('input', (e) => this._valueChanged(path, e.target.value, false));
        el.addEventListener('change', (e) => this._valueChanged(path, e.target.value, true));
        el.addEventListener('blur', () => this._flushConfig());
      }
    };

    const bindCheckbox = (id, path) => {
      const el = root.getElementById(id);
      if (el) {
        el.addEventListener('change', (e) => this._valueChanged(path, e.target.checked, true));
      }
    };

    const bindNumber = (id, path, displayId, suffix = '') => {
      const el = root.getElementById(id);
      if (el) {
        el.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          if (displayId) {
            const disp = root.getElementById(displayId);
            if (disp) disp.innerText = `${val}${suffix}`;
          }
          this._valueChanged(path, isNaN(val) ? 0 : val, false);
        });
        el.addEventListener('change', (e) => {
          const val = parseFloat(e.target.value);
          this._valueChanged(path, isNaN(val) ? 0 : val, true);
        });
        el.addEventListener('blur', () => this._flushConfig());
      }
    };

    bindInput('title', 'title');
    bindInput('themeMode', 'theme_mode');
    bindInput('cardLanguage', 'language');
    root.getElementById('cardScale')?.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      const disp = root.getElementById('cardScaleVal');
      if (disp) disp.innerText = `${Math.round(val * 100)}%`;
      this._valueChanged('card_scale', val);
    });
    root.getElementById('cardScale')?.addEventListener('change', () => this._flushConfig());
    bindInput('cardMaxWidth', 'max_width');
    bindCheckbox('showQuickSettings', 'show_quick_settings');
    bindInput('ctrlSolarCharge', 'controls.solar_charge_entity');
    bindInput('ctrlSellPower', 'controls.sell_power_entity');
    bindInput('ctrlGridCharge', 'controls.grid_charge_entity');
    bindCheckbox('animEnabled', 'animations.enabled');
    bindNumber('animSpeed', 'animations.speed', 'animSpeedVal', 's');

    // Solar PV strings count & dynamic binding
    root.getElementById('solarPvCount')?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (!this._config.solar) this._config.solar = {};
      this._config.solar.pv_count = val;
      if (!this._config.solar.strings) this._config.solar.strings = [];
      while (this._config.solar.strings.length < val) {
        const i = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${i}`,
          name: `PV ${i}`,
          capacity_kw: 4.0,
          voltage_entity: `sensor.deye_12k_inverter_pv${i}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${i}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${i}_power`
        });
      }
      this._valueChanged('solar.pv_count', val, true);
      this._valueChanged('solar.strings', this._config.solar.strings, true);
      this.render();
    });

    // Individual PV string inputs
    root.querySelectorAll('.pv-str-name-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.solar.strings) this._config.solar.strings = [];
        if (!this._config.solar.strings[idx]) this._config.solar.strings[idx] = {};
        this._config.solar.strings[idx].name = e.target.value;
        this._valueChanged('solar.strings', this._config.solar.strings);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.pv-str-volt-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.solar.strings) this._config.solar.strings = [];
        if (!this._config.solar.strings[idx]) this._config.solar.strings[idx] = {};
        this._config.solar.strings[idx].voltage_entity = e.target.value;
        this._valueChanged('solar.strings', this._config.solar.strings);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.pv-str-curr-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.solar.strings) this._config.solar.strings = [];
        if (!this._config.solar.strings[idx]) this._config.solar.strings[idx] = {};
        this._config.solar.strings[idx].current_entity = e.target.value;
        this._valueChanged('solar.strings', this._config.solar.strings);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.pv-str-power-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.solar.strings) this._config.solar.strings = [];
        if (!this._config.solar.strings[idx]) this._config.solar.strings[idx] = {};
        this._config.solar.strings[idx].power_entity = e.target.value;
        this._valueChanged('solar.strings', this._config.solar.strings);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.pv-str-cap-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.solar.strings) this._config.solar.strings = [];
        if (!this._config.solar.strings[idx]) this._config.solar.strings[idx] = {};
        this._config.solar.strings[idx].capacity_kw = parseFloat(e.target.value) || 0;
        this._valueChanged('solar.strings', this._config.solar.strings);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    bindInput('solarTotalPower', 'solar.total_power_entity');
    bindInput('solarDailyYield', 'solar.daily_yield_entity');
    bindNumber('solarTargetDaily', 'solar.target_daily_yield');
    bindNumber('solarInstalledPower', 'solar.installed_power');
    bindCheckbox('solarShowMetrics', 'solar.show_metrics');

    bindInput('invModel', 'inverter.model_name');
    bindInput('invPower', 'inverter.power_entity');
    bindCheckbox('invShowSelfConsumption', 'inverter.show_self_consumption');
    bindInput('invSelfConsumptionEntity', 'inverter.self_consumption_entity');
    bindNumber('invStandbyPower', 'inverter.standby_power', 'invStandbyPowerVal', 'W');
    bindInput('invTempAc', 'inverter.ac_temperature_entity');
    bindInput('invTempDc', 'inverter.dc_temperature_entity');
    bindInput('invVolt', 'inverter.voltage_entity');
    bindInput('invCurrent', 'inverter.current_entity');
    bindInput('invFreq', 'inverter.frequency_entity');

    root.getElementById('auxType')?.addEventListener('change', (e) => {
      const type = e.target.value;
      if (!this._config.aux) this._config.aux = {};
      this._config.aux.type = type;
      const titles = {
        microinverter: 'Мікроінвертор',
        generator: 'Генератор',
        wind: 'Вітрогенератор',
        smart_load: 'Smart Load',
        none: 'Вимкнено'
      };
      const title = titles[type] || 'Мікроінвертор';
      this._config.aux.title = title;
      const auxTitleInp = root.getElementById('auxTitle');
      if (auxTitleInp) auxTitleInp.value = title;
      this._valueChanged('aux.type', type, true);
      this._valueChanged('aux.title', title, true);
    });
    bindInput('auxTitle', 'aux.title');
    bindInput('auxPower', 'aux.power_entity');

    // Wind Turbines System
    root.getElementById('windTurbineCount')?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (!this._config.wind) this._config.wind = {};
      this._config.wind.turbine_count = val;
      if (!this._config.wind.turbines) this._config.wind.turbines = [];
      while (this._config.wind.turbines.length < val) {
        const i = this._config.wind.turbines.length + 1;
        this._config.wind.turbines.push({
          id: `turbine_${i}`,
          name: `Вітряк ${i}`,
          power_entity: `sensor.wind_turbine_${i}_power`,
          speed_entity: `sensor.wind_turbine_${i}_speed`,
          daily_energy_entity: '',
          monthly_energy_entity: '',
          animation_threshold: this._config.wind.animation_threshold || 50
        });
      }
      this._valueChanged('wind.turbine_count', val, true);
      this._valueChanged('wind.turbines', this._config.wind.turbines, true);
      this.render();
    });

    bindNumber('windThreshold', 'wind.animation_threshold', 'windThresholdVal', 'W');
    root.getElementById('windThreshold')?.addEventListener('input', (e) => {
      this._valueChanged('aux.wind_animation_threshold', parseFloat(e.target.value));
    });

    bindInput('windDailyEnergy', 'wind.daily_energy_entity');
    bindInput('windMonthlyEnergy', 'wind.monthly_energy_entity');

    // Individual turbine field bindings
    root.querySelectorAll('.turbine-name-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.wind.turbines) this._config.wind.turbines = [];
        if (!this._config.wind.turbines[idx]) this._config.wind.turbines[idx] = {};
        this._config.wind.turbines[idx].name = e.target.value;
        this._valueChanged('wind.turbines', this._config.wind.turbines);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.turbine-power-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.wind.turbines) this._config.wind.turbines = [];
        if (!this._config.wind.turbines[idx]) this._config.wind.turbines[idx] = {};
        this._config.wind.turbines[idx].power_entity = e.target.value;
        this._valueChanged('wind.turbines', this._config.wind.turbines);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.turbine-speed-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.wind.turbines) this._config.wind.turbines = [];
        if (!this._config.wind.turbines[idx]) this._config.wind.turbines[idx] = {};
        this._config.wind.turbines[idx].rpm_entity = e.target.value;
        this._config.wind.turbines[idx].speed_entity = e.target.value;
        this._valueChanged('wind.turbines', this._config.wind.turbines);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.turbine-daily-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.wind.turbines) this._config.wind.turbines = [];
        if (!this._config.wind.turbines[idx]) this._config.wind.turbines[idx] = {};
        this._config.wind.turbines[idx].daily_energy_entity = e.target.value;
        this._valueChanged('wind.turbines', this._config.wind.turbines);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.turbine-monthly-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.wind.turbines) this._config.wind.turbines = [];
        if (!this._config.wind.turbines[idx]) this._config.wind.turbines[idx] = {};
        this._config.wind.turbines[idx].monthly_energy_entity = e.target.value;
        this._valueChanged('wind.turbines', this._config.wind.turbines);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    bindInput('batSoc', 'battery.soc_entity');
    bindInput('batPower', 'battery.power_entity');
    bindInput('batPowerSign', 'battery.power_sign');
    bindInput('batVolt', 'battery.voltage_entity');
    bindInput('batCurrent', 'battery.current_entity');
    bindInput('batTemp', 'battery.temperature_entity');
    bindInput('batDelta', 'battery.cell_delta_entity');
    bindInput('batCapacity', 'battery.capacity_entity');
    bindInput('batChargeDaily', 'battery.charge_daily_entity');
    bindInput('batDischargeDaily', 'battery.discharge_daily_entity');
    // Battery modules count & dynamic binding
    root.getElementById('batParallelCount')?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (!this._config.battery) this._config.battery = {};
      this._config.battery.parallel_batteries = val;
      if (!this._config.battery.modules) this._config.battery.modules = [];
      while (this._config.battery.modules.length < val) {
        const i = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${i}`,
          name: `Батарея ${i}`,
          soc_entity: `sensor.bms_rack${i}_soc`,
          current_entity: `sensor.bms_rack${i}_current`,
          voltage_entity: `sensor.bms_rack${i}_voltage`,
          power_entity: `sensor.bms_rack${i}_power`,
          temperature_entity: `sensor.bms_rack${i}_temperature`,
          cell_delta_entity: `sensor.bms_rack${i}_cell_delta`
        });
      }
      this._valueChanged('battery.parallel_batteries', val, true);
      this._valueChanged('battery.modules', this._config.battery.modules, true);
      this.render();
    });

    // Individual battery module inputs
    root.querySelectorAll('.bat-mod-name-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].name = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-soc-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].soc_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-curr-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].current_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-volt-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].voltage_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-temp-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].temperature_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-delta-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].cell_delta_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-power-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].power_entity = e.target.value;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.bat-mod-cap-inp').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (!this._config.battery.modules) this._config.battery.modules = [];
        if (!this._config.battery.modules[idx]) this._config.battery.modules[idx] = {};
        this._config.battery.modules[idx].capacity_kwh = parseFloat(e.target.value) || 0;
        this._valueChanged('battery.modules', this._config.battery.modules);
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    bindCheckbox('gridSellingEnabled', 'grid.selling_enabled');
    bindCheckbox('gridAutoCalculate', 'grid.auto_calculate');
    bindInput('gridPower', 'grid.power_entity');
    bindInput('gridExternalPower', 'grid.external_power_entity');
    bindInput('gridVoltage', 'grid.voltage_entity');
    bindInput('gridStatus', 'grid.status_entity');
    bindNumber('gridVoltageThreshold', 'grid.voltage_threshold');
    bindInput('gridPowerSign', 'grid.power_sign');
    bindNumber('gridMinThreshold', 'grid.min_power_threshold');
    bindInput('gridImportDaily', 'grid.import_daily_entity');
    bindInput('gridExportDaily', 'grid.export_daily_entity');
    bindInput('gridNonEssential', 'grid.non_essential_power_entity');
    bindInput('gridCarPower', 'grid.car_power_entity');

    bindCheckbox('loadAutoCalculate', 'load.auto_calculate');
    bindCheckbox('loadSeparateExport', 'load.separate_export');
    bindInput('loadEssential', 'load.essential_power_entity');
    bindInput('loadDailyHouse', 'load.daily_house_entity');

    // Subload Add Action
    const onAddSubload = () => {
      if (!this._config.load) this._config.load = {};
      if (!this._config.load.subloads) this._config.load.subloads = [];
      const newNum = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${newNum}`,
        icon: 'other',
        entity: ''
      });
      this._valueChanged('load.subloads', this._config.load.subloads, true);
      this.render();
    };

    root.getElementById('btnAddSubload')?.addEventListener('click', onAddSubload);
    root.getElementById('btnAddSubloadBottom')?.addEventListener('click', onAddSubload);

    // Subload Delete Action
    root.querySelectorAll('.btn-del-subload').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const btnEl = e.currentTarget || e.target.closest('.btn-del-subload');
        const idx = parseInt(btnEl.dataset.idx);
        if (!this._config.load?.subloads) return;
        this._config.load.subloads.splice(idx, 1);
        this._valueChanged('load.subloads', this._config.load.subloads, true);
        this.render();
      });
    });

    // Subload dynamic changes
    root.querySelectorAll('.subload-name').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (this._config.load?.subloads?.[idx]) {
          this._config.load.subloads[idx].name = e.target.value;
          this._valueChanged('load.subloads', this._config.load.subloads);
        }
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    root.querySelectorAll('.subload-icon').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (this._config.load?.subloads?.[idx]) {
          this._config.load.subloads[idx].icon = e.target.value;
          this._valueChanged('load.subloads', this._config.load.subloads, true);
        }
      });
    });

    root.querySelectorAll('.subload-entity').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.idx);
        if (this._config.load?.subloads?.[idx]) {
          this._config.load.subloads[idx].entity = e.target.value;
          this._valueChanged('load.subloads', this._config.load.subloads);
        }
      });
      inp.addEventListener('blur', () => this._flushConfig());
    });

    // Tariffs
    bindCheckbox('tariffsEnabled', 'tariffs.enabled');
    bindInput('tariffCurrency', 'tariffs.currency');
    bindNumber('tariffDayRate', 'tariffs.day_rate');
    bindNumber('tariffNightRate', 'tariffs.night_rate');
    bindNumber('tariffExportRate', 'tariffs.export_rate');
    bindNumber('tariffNightStart', 'tariffs.night_start_hour');
    bindNumber('tariffNightEnd', 'tariffs.night_end_hour');
    bindInput('tariffImportDayEntity', 'tariffs.import_day_entity');
    bindInput('tariffImportNightEntity', 'tariffs.import_night_entity');
    bindCheckbox('tariffShowDailyCost', 'tariffs.show_daily_cost');
    bindCheckbox('tariffShowExportIncome', 'tariffs.show_export_income');
    bindCheckbox('tariffShowActiveBadge', 'tariffs.show_active_badge');
    bindCheckbox('tariffShowSolarSavings', 'tariffs.show_solar_savings');
  }
}

if (!customElements.get('energy-station-card-editor')) {
  customElements.define('energy-station-card-editor', EnergyStationCardEditor);
}
