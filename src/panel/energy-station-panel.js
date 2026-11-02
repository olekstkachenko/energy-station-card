import '../card/energy-station-card.js';
import { DEFAULT_CONFIG } from '../card/default-config.js';

export class EnergyStationPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._config = null;
    this._isDrawerOpen = false;
    this._activeTab = 'typography';
    this._scale = 1.0;
    this._cardNode = null;
  }

  set hass(hass) {
    this._hass = hass;
    if (this._cardNode) {
      this._cardNode.hass = hass;
    }
    this._updateHaStatusBadge();
  }

  connectedCallback() {
    this._loadConfig();
    this._render();
    this._bindEvents();
    if (this._hass && this._cardNode) {
      this._cardNode.hass = this._hass;
    }
  }

  _loadConfig() {
    try {
      const stored = localStorage.getItem('energy_station_app_config');
      if (stored) {
        this._config = JSON.parse(stored);
      }
    } catch (e) {}

    if (!this._config) {
      this._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    }

    // Merge default appearance if missing
    if (!this._config.appearance) {
      this._config.appearance = JSON.parse(JSON.stringify(DEFAULT_CONFIG.appearance || {
        font_family: 'Inter',
        mono_font_family: 'JetBrains Mono',
        power_font_size: 'normal',
        label_font_size: 'normal',
        theme_preset: 'cyber_dark',
        density: 'balanced',
        glow_intensity: 'high'
      }));
    }

    this._scale = this._config.card_scale || 1.0;
  }

  _saveConfig() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('energy_station_app_config', JSON.stringify(this._config));
      }
    } catch (e) {}
    if (this._cardNode) {
      this._cardNode.setConfig(this._config);
    }
  }

  _updateCardConfig() {
    if (this._cardNode) {
      this._cardNode.setConfig(this._config);
    }
    this._saveConfig();
  }

  _render() {
    const c = this._config;
    const app = c.appearance;

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          min-height: 100vh;
          background: #030712;
          color: #f1f5f9;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
          position: relative;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        /* TOP NAVIGATION BAR */
        .panel-navbar {
          height: 56px;
          background: rgba(11, 19, 36, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .panel-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          user-select: none;
        }

        .panel-brand-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 14px rgba(2, 132, 199, 0.5);
          color: #ffffff;
        }

        .panel-brand-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-brand-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .panel-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-pill-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          user-select: none;
        }

        .panel-pill-btn:hover {
          background: rgba(2, 132, 199, 0.2);
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .panel-settings-btn {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;
          border-color: #38bdf8 !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.45);
        }

        .panel-settings-btn:hover {
          box-shadow: 0 0 22px rgba(56, 189, 248, 0.65);
          transform: translateY(-1px) scale(1.02);
        }

        /* MAIN CONTENT VIEWPORT */
        .panel-viewport {
          width: 100%;
          padding: 20px 24px 60px 24px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          transition: margin-right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* SETTINGS DRAWER OVERLAY */
        .panel-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .panel-drawer-backdrop.active {
          opacity: 1;
          pointer-events: auto;
        }

        .panel-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 580px;
          max-width: 95vw;
          height: 100vh;
          background: #090f1d;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.8);
          z-index: 100;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .panel-drawer.active {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 23, 42, 0.85);
        }

        .drawer-title {
          font-size: 16px;
          font-weight: 800;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .drawer-close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .drawer-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* DRAWER TABS */
        .drawer-tabs {
          display: flex;
          overflow-x: auto;
          background: rgba(8, 14, 26, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 6px 12px;
          gap: 6px;
          scrollbar-width: none;
        }
        .drawer-tabs::-webkit-scrollbar { display: none; }

        .drawer-tab {
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .drawer-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .drawer-tab.active {
          color: #ffffff;
          background: #0284c7;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(2, 132, 199, 0.4);
        }

        /* DRAWER BODY & SECTIONS */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cfg-card {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
        }

        .cfg-card-title {
          font-size: 13px;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 6px;
        }

        .cfg-row {
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cfg-label {
          font-size: 12px;
          font-weight: 600;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cfg-hint {
          font-size: 11px;
          color: #64748b;
          line-height: 1.35;
        }

        /* FONT PICKER TILES */
        .font-tile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 8px;
        }

        .font-tile {
          padding: 8px 10px;
          border-radius: 8px;
          background: #080d19;
          border: 1px solid #334155;
          color: #e2e8f0;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s;
          user-select: none;
        }

        .font-tile:hover {
          border-color: #38bdf8;
          background: #0d1527;
        }

        .font-tile.active {
          border-color: #38bdf8;
          background: rgba(2, 132, 199, 0.25);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
          color: #ffffff;
        }

        .font-tile-name {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .font-tile-sample {
          font-size: 10px;
          color: #94a3b8;
        }

        /* SEGMENTED BUTTONS (SIZES) */
        .seg-btn-group {
          display: flex;
          background: #080d19;
          border: 1px solid #334155;
          border-radius: 8px;
          overflow: hidden;
          padding: 2px;
          gap: 2px;
        }

        .seg-btn {
          flex: 1;
          padding: 8px 10px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          text-align: center;
        }

        .seg-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .seg-btn.active {
          background: #0284c7;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 0 8px rgba(2, 132, 199, 0.45);
        }

        /* INPUTS & CONTROLS */
        input[type="text"], input[type="number"], select {
          background: #080d19;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          font-family: 'JetBrains Mono', monospace;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
        }

        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border-color: #38bdf8;
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

        /* DRAWER FOOTER */
        .drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(14, 23, 42, 0.95);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .btn-action-primary {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border: 1px solid #38bdf8;
          color: #ffffff;
          font-weight: 700;
          padding: 9px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }

        .btn-action-primary:hover {
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
          transform: translateY(-1px);
        }

        .btn-action-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-weight: 600;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12.5px;
          transition: all 0.2s;
        }

        .btn-action-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
        }
      </style>

      <!-- NAVIGATION HEADER -->
      <header class="panel-navbar">
        <div class="panel-brand">
          <div class="panel-brand-icon">
            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <div class="panel-brand-title">
              <span>Energy Station</span>
              <span class="panel-brand-badge">PRO APP</span>
            </div>
          </div>
        </div>

        <div class="panel-controls">
          <!-- Zoom Controls -->
          <div style="display: flex; align-items: center; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 2px 4px; gap: 2px;">
            <button class="panel-pill-btn" id="btnZoomOut" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">−</button>
            <span id="txtZoomVal" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; min-width: 40px; text-align: center; color: #38bdf8; font-weight: 700;">${Math.round(this._scale * 100)}%</span>
            <button class="panel-pill-btn" id="btnZoomIn" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">+</button>
          </div>

          <!-- Quick Theme Toggle -->
          <button class="panel-pill-btn" id="btnQuickTheme" title="Змінити тему">
            ${c.theme_mode === 'light' ? '☀️ Світла' : (c.appearance?.theme_preset === 'oled_black' ? '⬛ OLED' : '🌙 Темна')}
          </button>

          <!-- Fullscreen Toggle -->
          <button class="panel-pill-btn" id="btnFullscreen" title="Повний екран (F11)">
            <span>⛶</span>
          </button>

          <!-- HA Status Badge -->
          <div style="display: flex; align-items: center; gap: 6px; padding: 5px 10px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></div>
            <span style="font-size: 11px; font-weight: 700; color: #34d399;" id="haStatusText">HA Live</span>
          </div>

          <!-- Open Settings Drawer Button -->
          <button class="panel-pill-btn panel-settings-btn" id="btnOpenDrawer">
            <span>⚙️</span>
            <span>Налаштування станції</span>
          </button>
        </div>
      </header>

      <!-- MAIN VIEWPORT -->
      <main class="panel-viewport" id="viewport">
        <energy-station-card id="stationCard"></energy-station-card>
      </main>

      <!-- SETTINGS DRAWER OVERLAY -->
      <div class="panel-drawer-backdrop" id="drawerBackdrop"></div>
      <aside class="panel-drawer" id="settingsDrawer">
        <div class="drawer-header">
          <div class="drawer-title">
            <span>⚙️</span>
            <span>Налаштування Energy Station</span>
          </div>
          <button class="drawer-close-btn" id="btnCloseDrawer">✕</button>
        </div>

        <!-- TABS -->
        <nav class="drawer-tabs">
          <button class="drawer-tab active" data-tab="typography">🎨 Шрифти & Стиль</button>
          <button class="drawer-tab" data-tab="inverter">⚡ Інвертор & Мережа</button>
          <button class="drawer-tab" data-tab="solar">☀️ Сонячні PV</button>
          <button class="drawer-tab" data-tab="battery">🔋 Акумулятори</button>
          <button class="drawer-tab" data-tab="loads">🏠 Споживання</button>
          <button class="drawer-tab" data-tab="tariffs">💰 Тарифи & Слайдери</button>
          <button class="drawer-tab" data-tab="presets">💾 Пресети & Експорт</button>
        </nav>

        <!-- DRAWER BODY -->
        <div class="drawer-body">

          <!-- TAB 1: TYPOGRAPHY & APPEARANCE -->
          <div class="tab-pane" id="pane-typography">
            
            <!-- Font Family Selection -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔤 Основний шрифт інтерфейсу</div>
              <div class="font-tile-grid" id="mainFontGrid">
                <div class="font-tile ${app.font_family === 'Inter' ? 'active' : ''}" data-val="Inter" style="font-family: 'Inter', sans-serif;">
                  <div class="font-tile-name">Inter</div>
                  <div class="font-tile-sample">Чистий гротеск</div>
                </div>
                <div class="font-tile ${app.font_family === 'JetBrains Mono' ? 'active' : ''}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">Моноширинний</div>
                </div>
                <div class="font-tile ${app.font_family === 'Orbitron' ? 'active' : ''}" data-val="Orbitron" style="font-family: 'Orbitron', sans-serif;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">Cyberpunk / Sci-Fi</div>
                </div>
                <div class="font-tile ${app.font_family === 'Exo 2' ? 'active' : ''}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${app.font_family === 'Roboto' ? 'active' : ''}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Android / Material</div>
                </div>
                <div class="font-tile ${app.font_family === 'Ubuntu' ? 'active' : ''}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий плавний</div>
                </div>
                <div class="font-tile ${app.font_family === 'system-ui' ? 'active' : ''}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний шрифт ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔢 Шрифт числових показників (кВт / V / A)</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${app.mono_font_family === 'JetBrains Mono' ? 'active' : ''}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${app.mono_font_family === 'Orbitron' ? 'active' : ''}" data-val="Orbitron" style="font-family: 'Orbitron', monospace;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${app.mono_font_family === 'Roboto Mono' ? 'active' : ''}" data-val="Roboto Mono" style="font-family: 'Roboto Mono', monospace;">
                  <div class="font-tile-name">Roboto Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${app.mono_font_family === 'Fira Code' ? 'active' : ''}" data-val="Fira Code" style="font-family: 'Fira Code', monospace;">
                  <div class="font-tile-name">Fira Code</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
              </div>
            </div>

            <!-- Power Value Size (Розмір цифр) -->
            <div class="cfg-card">
              <div class="cfg-card-title">📏 Розмір головних цифр потужності (кВт)</div>
              <div class="seg-btn-group" id="powerSizeSeg">
                <button class="seg-btn ${app.power_font_size === 'compact' ? 'active' : ''}" data-val="compact">
                  <div>Компактний</div>
                  <div style="font-size: 10px; color: #64748b;">18px</div>
                </button>
                <button class="seg-btn ${app.power_font_size === 'normal' || !app.power_font_size ? 'active' : ''}" data-val="normal">
                  <div>Стандартний</div>
                  <div style="font-size: 10px; color: #64748b;">22px</div>
                </button>
                <button class="seg-btn ${app.power_font_size === 'large' ? 'active' : ''}" data-val="large">
                  <div>Великий</div>
                  <div style="font-size: 10px; color: #64748b;">28px</div>
                </button>
                <button class="seg-btn ${app.power_font_size === 'huge' ? 'active' : ''}" data-val="huge">
                  <div>Гігантський</div>
                  <div style="font-size: 10px; color: #64748b;">34px (на стіну)</div>
                </button>
              </div>
            </div>

            <!-- Labels Font Size (Розмір підписів) -->
            <div class="cfg-card">
              <div class="cfg-card-title">🏷️ Розмір підписів блоків та статусів</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${app.label_font_size === 'compact' ? 'active' : ''}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${app.label_font_size === 'normal' || !app.label_font_size ? 'active' : ''}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${app.label_font_size === 'large' ? 'active' : ''}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div class="cfg-card">
              <div class="cfg-card-title">🌓 Колірна тема оформлення</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${app.theme_preset === 'cyber_dark' || !app.theme_preset ? 'active' : ''}" data-val="cyber_dark">
                  🌙 Cyber Dark (Неон)
                </button>
                <button class="seg-btn ${app.theme_preset === 'oled_black' ? 'active' : ''}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${app.theme_preset === 'clean_light' ? 'active' : ''}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
              <div class="cfg-hint" style="margin-top: 6px;">
                Режим OLED True Black вимикає синє підсвічування фону і робить його абсолютно чорним (#000000), що економить енергію на AMOLED/OLED планшетах.
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔍 Масштаб та розмір станції (Zoom / Scale)</div>
              <div class="slider-row">
                <input type="range" id="sliderCardScale" min="0.7" max="1.6" step="0.05" value="${this._scale}">
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8; min-width: 44px;">${Math.round(this._scale * 100)}%</span>
              </div>
              <div style="display: flex; gap: 6px; margin-top: 10px;">
                <button class="panel-pill-btn btn-scale-preset" data-val="0.85">85% Мобільний</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.0">100% Стандарт</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.2">120% Планшет</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.4">140% ТВ / Монітор</button>
              </div>
            </div>

            <!-- Density / Paddings -->
            <div class="cfg-card">
              <div class="cfg-card-title">📦 Щільність розташування елементів (Відступи)</div>
              <div class="seg-btn-group" id="densitySeg">
                <button class="seg-btn ${app.density === 'compact' ? 'active' : ''}" data-val="compact">Компактна</button>
                <button class="seg-btn ${app.density === 'balanced' || !app.density ? 'active' : ''}" data-val="balanced">Збалансована</button>
                <button class="seg-btn ${app.density === 'spacious' ? 'active' : ''}" data-val="spacious">Простора</button>
              </div>
            </div>

            <!-- Animations -->
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Анімація імпульсів енергії</div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Швидкість анімації:</span>
                  <span id="lblAnimSpeed" style="color: #38bdf8; font-family: 'JetBrains Mono', monospace;">${c.animations?.speed || 1.2}s</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderAnimSpeed" min="0.6" max="3.0" step="0.1" value="${c.animations?.speed || 1.2}">
                </div>
              </div>
            </div>

          </div>

          <!-- TAB 2: INVERTER & GRID -->
          <div class="tab-pane" id="pane-inverter" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Гібридний інвертор</div>
              <div class="cfg-row">
                <label class="cfg-label">Модель / Заголовок інвертора:</label>
                <input type="text" id="inpInverterModel" value="${c.inverter?.model_name || 'DEYE SUN-12K'}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор напруги мережі (Grid Voltage, V):</label>
                <input type="text" id="inpGridVolt" value="${c.inverter?.voltage_entity || ''}" placeholder="sensor.deye_12k_inverter_grid_voltage">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор струму мережі (Grid Current, A):</label>
                <input type="text" id="inpGridCurr" value="${c.inverter?.current_entity || ''}" placeholder="sensor.deye_12k_inverter_grid_current">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор потужності на порту інвертора (Total Grid Power):</label>
                <input type="text" id="inpGridPower" value="${c.grid?.power_entity || ''}" placeholder="sensor.deye_12k_inverter_total_grid_power">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Зовнішній лічильник мережі (External CT / Smart Meter):</label>
                <input type="text" id="inpGridExtPower" value="${c.grid?.external_power_entity || ''}" placeholder="sensor.esp32_deye_inverter_external_power">
                <span class="cfg-hint">Трансформатор струму на вводі від стовпа. Відображає реальний перетік вулиці.</span>
              </div>
            </div>
          </div>

          <!-- TAB 3: SOLAR PV -->
          <div class="tab-pane" id="pane-solar" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">☀️ Сонячне поле (PV панелі)</div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Кількість стрінгів / полів (1 - 16):</span>
                  <span id="lblPvCount" style="color: #fbbf24; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${c.solar?.pv_count || 3}</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderPvCount" min="1" max="16" step="1" value="${c.solar?.pv_count || 3}">
                </div>
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Встановлена пікова потужність СЕС (kWp / кВт):</label>
                <input type="number" step="0.1" id="inpSolarInstalled" value="${c.solar?.installed_power || 12.0}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Ціль генерації на день (kWh):</label>
                <input type="number" id="inpSolarTarget" value="${c.solar?.target_daily_yield || 55}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор щоденної генерації СЕС (kWh):</label>
                <input type="text" id="inpSolarDailyYield" value="${c.solar?.daily_yield_entity || ''}">
              </div>
            </div>
          </div>

          <!-- TAB 4: BATTERY -->
          <div class="tab-pane" id="pane-battery" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">🔋 Акумуляторна система (АКБ)</div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор заряду батареї (SOC, %):</label>
                <input type="text" id="inpBatSoc" value="${c.battery?.soc_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор потужності батареї (Power, W/kW):</label>
                <input type="text" id="inpBatPower" value="${c.battery?.power_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор напруги батареї (Voltage, V):</label>
                <input type="text" id="inpBatVolt" value="${c.battery?.voltage_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор струму батареї (Current, A):</label>
                <input type="text" id="inpBatCurr" value="${c.battery?.current_entity || ''}">
              </div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Кількість паралельних блоків АКБ (1 - 8):</span>
                  <span id="lblBatCount" style="color: #34d399; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${c.battery?.parallel_batteries || 2}</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderBatCount" min="1" max="8" step="1" value="${c.battery?.parallel_batteries || 2}">
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 5: LOADS -->
          <div class="tab-pane" id="pane-loads" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">🏠 Навантаження будинку</div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор споживання будинку (Essential Load Power):</label>
                <input type="text" id="inpLoadPower" value="${c.load?.essential_power_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор щоденного споживання будинку (kWh):</label>
                <input type="text" id="inpLoadDaily" value="${c.load?.daily_house_entity || ''}">
              </div>
            </div>
          </div>

          <!-- TAB 6: TARIFFS & CONTROLS -->
          <div class="tab-pane" id="pane-tariffs" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">💰 Тарифи на електроенергію</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="cfg-row">
                  <label class="cfg-label">Денний тариф (грн/кВт·год):</label>
                  <input type="number" step="0.01" id="inpTariffDay" value="${c.tariffs?.day_rate || 4.32}">
                </div>
                <div class="cfg-row">
                  <label class="cfg-label">Нічний тариф (грн/кВт·год):</label>
                  <input type="number" step="0.01" id="inpTariffNight" value="${c.tariffs?.night_rate || 2.16}">
                </div>
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Зелений тариф / Продаж (грн/кВт·год):</label>
                <input type="number" step="0.01" id="inpTariffExport" value="${c.tariffs?.export_rate || 5.30}">
              </div>
            </div>

            <div class="cfg-card">
              <div class="cfg-card-title">🎛️ Сенсори керування струмом заряду</div>
              <div class="cfg-row">
                <label class="cfg-label">Струм заряду АКБ від сонця (number):</label>
                <input type="text" id="inpCtrlSolar" value="${c.controls?.solar_charge_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Струм заряду АКБ від мережі (number):</label>
                <input type="text" id="inpCtrlGrid" value="${c.controls?.grid_charge_entity || ''}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Потужність продажу в мережу (number):</label>
                <input type="text" id="inpCtrlSell" value="${c.controls?.sell_power_entity || ''}">
              </div>
            </div>
          </div>

          <!-- TAB 7: PRESETS & EXPORT -->
          <div class="tab-pane" id="pane-presets" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Швидкі готові пресети конфігурації</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn-action-secondary" id="btnPresetDeye" style="text-align: left;">
                  <div style="font-weight: 700; color: #38bdf8;">⚡ Deye SUN-12K (Ваш ESPHome)</div>
                  <div style="font-size: 11px; color: #94a3b8;">Автоматичні сенсори ESPHome для Deye 12 кВт, 3 стрінги PV, 2 АКБ, бойлер</div>
                </button>
                <button class="btn-action-secondary" id="btnPresetSolarman" style="text-align: left;">
                  <div style="font-weight: 700; color: #fbbf24;">☀️ Deye Solarman Інтеграція</div>
                  <div style="font-size: 11px; color: #94a3b8;">Для інверторів, підключених через Solarman Wi-Fi логер</div>
                </button>
              </div>
            </div>

            <div class="cfg-card">
              <div class="cfg-card-title">📋 Експорт / Резервна копія</div>
              <button class="btn-action-secondary" id="btnCopyJson" style="width: 100%; margin-bottom: 8px;">
                Скопіювати конфігурацію (JSON)
              </button>
              <button class="btn-action-secondary" id="btnResetDefaults" style="width: 100%; color: #f87171;">
                Скинути все до стандартних
              </button>
            </div>
          </div>

        </div>

        <!-- DRAWER FOOTER -->
        <div class="drawer-footer">
          <button class="btn-action-secondary" id="btnCancelDrawer">Закрити</button>
          <button class="btn-action-primary" id="btnSaveDrawer">✓ Застосувати зміни</button>
        </div>
      </aside>
    `;

    this._cardNode = this.shadowRoot.getElementById('stationCard');
    if (this._cardNode) {
      this._cardNode.setConfig(this._config);
      if (this._hass) this._cardNode.hass = this._hass;
    }
  }

  _bindEvents() {
    const root = this.shadowRoot;

    // Drawer Open / Close
    root.getElementById('btnOpenDrawer')?.addEventListener('click', () => this._openDrawer());
    root.getElementById('btnCloseDrawer')?.addEventListener('click', () => this._closeDrawer());
    root.getElementById('btnCancelDrawer')?.addEventListener('click', () => this._closeDrawer());
    root.getElementById('drawerBackdrop')?.addEventListener('click', () => this._closeDrawer());

    // Save Drawer
    root.getElementById('btnSaveDrawer')?.addEventListener('click', () => {
      this._collectFormData();
      this._updateCardConfig();
      this._closeDrawer();
    });

    // Zoom buttons in top bar
    root.getElementById('btnZoomIn')?.addEventListener('click', () => this._changeScale(this._scale + 0.1));
    root.getElementById('btnZoomOut')?.addEventListener('click', () => this._changeScale(this._scale - 0.1));

    // Fullscreen toggle
    root.getElementById('btnFullscreen')?.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });

    // Quick Theme toggle in top bar
    root.getElementById('btnQuickTheme')?.addEventListener('click', () => {
      const themes = ['cyber_dark', 'oled_black', 'clean_light'];
      const current = this._config.appearance?.theme_preset || 'cyber_dark';
      const nextIdx = (themes.indexOf(current) + 1) % themes.length;
      const nextTheme = themes[nextIdx];
      
      this._config.appearance.theme_preset = nextTheme;
      this._config.theme_mode = nextTheme === 'clean_light' ? 'light' : 'dark';
      this._updateCardConfig();
      
      const btn = root.getElementById('btnQuickTheme');
      if (btn) {
        btn.innerText = nextTheme === 'clean_light' ? '☀️ Світла' : (nextTheme === 'oled_black' ? '⬛ OLED' : '🌙 Темна');
      }
    });

    // Tabs navigation inside drawer
    root.querySelectorAll('.drawer-tab').forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        const targetTab = tabBtn.dataset.tab;
        root.querySelectorAll('.drawer-tab').forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');

        root.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
        const targetPane = root.getElementById(`pane-${targetTab}`);
        if (targetPane) targetPane.style.display = 'block';
      });
    });

    // Font selection tiles
    root.querySelectorAll('#mainFontGrid .font-tile').forEach((tile) => {
      tile.addEventListener('click', () => {
        root.querySelectorAll('#mainFontGrid .font-tile').forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        this._config.appearance.font_family = tile.dataset.val;
        this._updateCardConfig();
      });
    });

    // Monospace numbers font tiles
    root.querySelectorAll('#monoFontGrid .font-tile').forEach((tile) => {
      tile.addEventListener('click', () => {
        root.querySelectorAll('#monoFontGrid .font-tile').forEach(t => t.classList.remove('active'));
        tile.classList.add('active');
        this._config.appearance.mono_font_family = tile.dataset.val;
        this._updateCardConfig();
      });
    });

    // Power size segmented buttons
    root.querySelectorAll('#powerSizeSeg .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#powerSizeSeg .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._config.appearance.power_font_size = btn.dataset.val;
        this._updateCardConfig();
      });
    });

    // Label size segmented buttons
    root.querySelectorAll('#labelSizeSeg .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#labelSizeSeg .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._config.appearance.label_font_size = btn.dataset.val;
        this._updateCardConfig();
      });
    });

    // Theme preset segmented buttons
    root.querySelectorAll('#themePresetSeg .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#themePresetSeg .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const t = btn.dataset.val;
        this._config.appearance.theme_preset = t;
        this._config.theme_mode = t === 'clean_light' ? 'light' : 'dark';
        this._updateCardConfig();
      });
    });

    // Density segmented buttons
    root.querySelectorAll('#densitySeg .seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('#densitySeg .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._config.appearance.density = btn.dataset.val;
        this._updateCardConfig();
      });
    });

    // Scale slider in drawer
    const sliderScale = root.getElementById('sliderCardScale');
    const lblScale = root.getElementById('lblCardScale');
    if (sliderScale) {
      sliderScale.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (lblScale) lblScale.innerText = `${Math.round(val * 100)}%`;
        this._changeScale(val);
      });
    }

    // Scale presets buttons
    root.querySelectorAll('.btn-scale-preset').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.dataset.val);
        if (sliderScale) sliderScale.value = val;
        if (lblScale) lblScale.innerText = `${Math.round(val * 100)}%`;
        this._changeScale(val);
      });
    });

    // Animation speed slider
    const sliderAnim = root.getElementById('sliderAnimSpeed');
    const lblAnim = root.getElementById('lblAnimSpeed');
    if (sliderAnim) {
      sliderAnim.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (lblAnim) lblAnim.innerText = `${val}s`;
        if (!this._config.animations) this._config.animations = {};
        this._config.animations.speed = val;
        this._updateCardConfig();
      });
    }

    // PV Count slider
    const sliderPv = root.getElementById('sliderPvCount');
    const lblPv = root.getElementById('lblPvCount');
    if (sliderPv) {
      sliderPv.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (lblPv) lblPv.innerText = val;
        if (!this._config.solar) this._config.solar = {};
        this._config.solar.pv_count = val;
        this._updateCardConfig();
      });
    }

    // Battery Count slider
    const sliderBat = root.getElementById('sliderBatCount');
    const lblBat = root.getElementById('lblBatCount');
    if (sliderBat) {
      sliderBat.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        if (lblBat) lblBat.innerText = val;
        if (!this._config.battery) this._config.battery = {};
        this._config.battery.parallel_batteries = val;
        this._updateCardConfig();
      });
    }

    // Preset buttons
    root.getElementById('btnPresetDeye')?.addEventListener('click', () => {
      this._applyPreset('deye_esphome');
    });

    // Reset defaults
    root.getElementById('btnResetDefaults')?.addEventListener('click', () => {
      if (confirm('Скинути всі налаштування до початкових?')) {
        this._config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
        this._scale = 1.0;
        this._saveConfig();
        this._render();
        this._bindEvents();
      }
    });

    // Copy JSON config
    root.getElementById('btnCopyJson')?.addEventListener('click', () => {
      navigator.clipboard?.writeText(JSON.stringify(this._config, null, 2));
      alert('Конфігурацію скопійовано в буфер обміну!');
    });
  }

  _collectFormData() {
    const root = this.shadowRoot;
    const c = this._config;

    // Inverter
    if (root.getElementById('inpInverterModel')) c.inverter.model_name = root.getElementById('inpInverterModel').value;
    if (root.getElementById('inpGridVolt')) c.inverter.voltage_entity = root.getElementById('inpGridVolt').value;
    if (root.getElementById('inpGridCurr')) c.inverter.current_entity = root.getElementById('inpGridCurr').value;
    if (root.getElementById('inpGridPower')) c.grid.power_entity = root.getElementById('inpGridPower').value;
    if (root.getElementById('inpGridExtPower')) c.grid.external_power_entity = root.getElementById('inpGridExtPower').value;

    // Solar
    if (root.getElementById('inpSolarInstalled')) c.solar.installed_power = parseFloat(root.getElementById('inpSolarInstalled').value) || 12.0;
    if (root.getElementById('inpSolarTarget')) c.solar.target_daily_yield = parseFloat(root.getElementById('inpSolarTarget').value) || 55;
    if (root.getElementById('inpSolarDailyYield')) c.solar.daily_yield_entity = root.getElementById('inpSolarDailyYield').value;

    // Battery
    if (root.getElementById('inpBatSoc')) c.battery.soc_entity = root.getElementById('inpBatSoc').value;
    if (root.getElementById('inpBatPower')) c.battery.power_entity = root.getElementById('inpBatPower').value;
    if (root.getElementById('inpBatVolt')) c.battery.voltage_entity = root.getElementById('inpBatVolt').value;
    if (root.getElementById('inpBatCurr')) c.battery.current_entity = root.getElementById('inpBatCurr').value;

    // Load
    if (root.getElementById('inpLoadPower')) c.load.essential_power_entity = root.getElementById('inpLoadPower').value;
    if (root.getElementById('inpLoadDaily')) c.load.daily_house_entity = root.getElementById('inpLoadDaily').value;

    // Tariffs
    if (root.getElementById('inpTariffDay')) c.tariffs.day_rate = parseFloat(root.getElementById('inpTariffDay').value) || 4.32;
    if (root.getElementById('inpTariffNight')) c.tariffs.night_rate = parseFloat(root.getElementById('inpTariffNight').value) || 2.16;
    if (root.getElementById('inpTariffExport')) c.tariffs.export_rate = parseFloat(root.getElementById('inpTariffExport').value) || 5.30;

    // Controls
    if (root.getElementById('inpCtrlSolar')) c.controls.solar_charge_entity = root.getElementById('inpCtrlSolar').value;
    if (root.getElementById('inpCtrlGrid')) c.controls.grid_charge_entity = root.getElementById('inpCtrlGrid').value;
    if (root.getElementById('inpCtrlSell')) c.controls.sell_power_entity = root.getElementById('inpCtrlSell').value;
  }

  _applyPreset(presetKey) {
    if (presetKey === 'deye_esphome') {
      this._config.inverter.model_name = 'DEYE SUN-12K';
      this._config.solar.pv_count = 3;
      this._config.solar.daily_yield_entity = 'sensor.deye_12k_inverter_daily_solar_energy';
      this._config.battery.soc_entity = 'sensor.deye_12k_inverter_battery_soc';
      this._config.battery.power_entity = 'sensor.deye_12k_inverter_battery_power';
      this._config.battery.voltage_entity = 'sensor.deye_12k_inverter_battery_voltage';
      this._config.battery.current_entity = 'sensor.deye_12k_inverter_battery_current';
      this._config.grid.power_entity = 'sensor.deye_12k_inverter_total_grid_power';
      this._config.grid.external_power_entity = 'sensor.esp32_deye_inverter_external_power';
      this._config.load.essential_power_entity = 'sensor.boiler_power';
      this._config.controls = {
        show: true,
        solar_charge_entity: 'number.inverter_12_kvt_battery_max_charging_current',
        grid_charge_entity: 'number.inverter_12_kvt_battery_grid_charging_current',
        sell_power_entity: 'number.inverter_12_kvt_export_surplus_power'
      };
      this._saveConfig();
      this._render();
      this._bindEvents();
      alert('Застосовано пресет: Deye SUN-12K (ESPHome)!');
    }
  }

  _openDrawer() {
    this._isDrawerOpen = true;
    const root = this.shadowRoot;
    root.getElementById('settingsDrawer')?.classList.add('active');
    root.getElementById('drawerBackdrop')?.classList.add('active');
  }

  _closeDrawer() {
    this._isDrawerOpen = false;
    const root = this.shadowRoot;
    root.getElementById('settingsDrawer')?.classList.remove('active');
    root.getElementById('drawerBackdrop')?.classList.remove('active');
  }

  _changeScale(targetScale) {
    const s = Math.max(0.65, Math.min(1.8, Math.round(targetScale * 100) / 100));
    this._scale = s;
    this._config.card_scale = s;
    const txt = this.shadowRoot.getElementById('txtZoomVal');
    if (txt) txt.innerText = `${Math.round(s * 100)}%`;
    this._updateCardConfig();
  }

  _updateHaStatusBadge() {
    const textEl = this.shadowRoot?.getElementById('haStatusText');
    if (!textEl) return;
    if (this._hass) {
      const entityCount = Object.keys(this._hass.states || {}).length;
      textEl.innerText = `HA Live (${entityCount} сенсорів)`;
    } else {
      textEl.innerText = 'Демо режим';
    }
  }
}

// Auto-register custom element for Home Assistant panel_custom
if (typeof customElements !== 'undefined' && !customElements.get('energy-station-panel')) {
  customElements.define('energy-station-panel', EnergyStationPanel);
}
