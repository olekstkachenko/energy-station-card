console.info(
  '%c⚡ Energy Station Panel v1.6.1 Loaded ⚡',
  'background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
);

import { load as yamlLoad, dump as yamlDump } from 'js-yaml';
import { DEFAULT_CONFIG } from '../card/default-config.js';
import '../card/energy-station-card-editor.js';

export class EnergyStationPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._config = null;
    this._isDrawerOpen = false;
    this._scale = 1.0;
    this._cardNode = null;
    this._editorNode = null;
    this._hasAttemptedAutoImport = false;
  }

  set hass(hass) {
    this._hass = hass;
    if (this._cardNode) {
      this._cardNode.hass = hass;
    }
    if (this._editorNode) {
      this._editorNode.hass = hass;
    }
    this._updateHaStatusBadge();
    
    // Auto-discover existing lovelace card config once on first connect
    if (!this._hasAttemptedAutoImport) {
      this._hasAttemptedAutoImport = true;
      this._autoDiscoverLovelaceConfig();
    }
  }

  connectedCallback() {
    this._loadConfig();
    this._render();
    this._bindEvents();
    if (this._hass) {
      if (this._cardNode) this._cardNode.hass = this._hass;
      if (this._editorNode) this._editorNode.hass = this._hass;
    }
    setTimeout(() => {
      if (this._cardNode && typeof this._cardNode._updateFlowPaths === 'function') {
        this._cardNode._updateFlowPaths();
      }
    }, 120);
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
    if (this._editorNode) {
      this._editorNode.setConfig(this._config);
    }
    this._saveConfig();
  }

  async _autoDiscoverLovelaceConfig() {
    if (!this._hass) return;
    try {
      // If user has already saved a configured state in localStorage, do not overwrite unless requested
      const stored = localStorage.getItem('energy_station_app_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.solar?.strings?.[0]?.voltage_entity && parsed.inverter?.voltage_entity) {
          return;
        }
      }

      await this._importFromLovelace(false);
    } catch (e) {
      console.warn('Lovelace auto-import skipped:', e);
    }
  }

  async _importFromLovelace(notifyUser = true) {
    if (!this._hass) {
      if (notifyUser) alert('Немає підключення до Home Assistant');
      return;
    }

    try {
      const candidates = [];
      const findInViews = (views) => {
        for (const view of (views || [])) {
          if (view.cards) {
            for (const c of view.cards) {
              if (c.type && (c.type === 'custom:energy-station-card' || c.type.includes('energy-station-card'))) {
                candidates.push(c);
              }
              if (c.cards && Array.isArray(c.cards)) {
                for (const sub of c.cards) {
                  if (sub.type && (sub.type === 'custom:energy-station-card' || sub.type.includes('energy-station-card'))) {
                    candidates.push(sub);
                  }
                }
              }
            }
          }
        }
      };

      // 1. Try default Lovelace dashboard
      try {
        const defLovelace = await this._hass.callWS({ type: 'lovelace/config' });
        findInViews(defLovelace?.views);
      } catch (e) {}

      // 2. Try other dashboards (e.g. New Panel, Sansunk, solar, etc.)
      if (candidates.length === 0 && this._hass.panels) {
        const panels = Object.values(this._hass.panels).filter(p => p.component_name === 'lovelace');
        for (const p of panels) {
          if (p.url_path && p.url_path !== 'energy-station') {
            try {
              const dash = await this._hass.callWS({ type: 'lovelace/config', url_path: p.url_path });
              findInViews(dash?.views);
              if (candidates.length > 0) break;
            } catch (err) {}
          }
        }
      }

      if (candidates.length > 0) {
        const best = candidates[0];
        const clone = JSON.parse(JSON.stringify(best));
        delete clone.type;

        clone.appearance = {
          ...DEFAULT_CONFIG.appearance,
          ...(this._config?.appearance || {}),
          ...(clone.appearance || {})
        };

        this._config = clone;
        this._saveConfig();
        this._render();
        this._bindEvents();
        if (notifyUser) {
          alert('✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!');
        }
        return;
      }

      // Check DOM of parent document if in iframe or custom panel
      if (typeof window !== 'undefined' && window.parent?.document) {
        const domCards = window.parent.document.querySelectorAll('energy-station-card');
        for (const domCard of domCards) {
          if (domCard !== this._cardNode && domCard._config) {
            this._config = JSON.parse(JSON.stringify(domCard._config));
            this._saveConfig();
            this._render();
            this._bindEvents();
            if (notifyUser) alert('✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!');
            return;
          }
        }
      }

      if (notifyUser) {
        alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".');
      }
    } catch (err) {
      console.error('Import from Lovelace error:', err);
      if (notifyUser) alert('Помилка імпорту: ' + err.message);
    }
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
          box-sizing: border-box;
          padding: 20px 24px 60px 24px;
          display: block;
          transition: margin-right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        energy-station-card,
        #stationCard {
          display: block;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* SETTINGS DRAWER OVERLAY */
        .panel-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
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
          width: 660px;
          max-width: 96vw;
          height: 100vh;
          background: #090f1d;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.85);
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
          background: rgba(14, 23, 42, 0.95);
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

        /* DRAWER BODY */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px 20px;
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
          padding: 14px 20px;
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

        /* YAML IMPORT / EXPORT MODAL */
        .panel-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 120;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .panel-modal-backdrop.active {
          display: flex;
        }

        .panel-modal-box {
          background: #090f1d;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 680px;
          max-width: 95vw;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .panel-modal-header {
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 23, 42, 0.95);
        }

        .panel-modal-body {
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        textarea.code-area {
          width: 100%;
          height: 340px;
          background: #050a14;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #38bdf8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 12px;
          outline: none;
          resize: vertical;
          box-sizing: border-box;
          line-height: 1.4;
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
              <span class="panel-brand-badge">PRO APP v1.6.0</span>
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

        <!-- DRAWER BODY -->
        <div class="drawer-body">

          <!-- TOOLBAR: ONE-CLICK LOVELACE MIGRATION & YAML IMPORT -->
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <button class="panel-pill-btn" id="btnSyncFromLovelace" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📥</span>
              <span>Перенести налаштування з дашборду Lovelace</span>
            </button>
            <button class="panel-pill-btn" id="btnOpenYamlModal" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); color: #fbbf24; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📋</span>
              <span>Вставити / Експорт YAML</span>
            </button>
          </div>

          <!-- SECTION 1: TYPOGRAPHY, SIZES & STYLES -->
          <div class="cfg-card">
            <div class="cfg-card-title">🎨 Шрифти, Розміри та Стилі</div>
            
            <!-- Font Family Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔤 Основний шрифт інтерфейсу:</div>
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
                  <div class="font-tile-sample">Cyberpunk</div>
                </div>
                <div class="font-tile ${app.font_family === 'Exo 2' ? 'active' : ''}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${app.font_family === 'Roboto' ? 'active' : ''}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Material</div>
                </div>
                <div class="font-tile ${app.font_family === 'Ubuntu' ? 'active' : ''}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий</div>
                </div>
                <div class="font-tile ${app.font_family === 'system-ui' ? 'active' : ''}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔢 Шрифт числових показників (кВт / V / A):</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${app.mono_font_family === 'JetBrains Mono' ? 'active' : ''}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
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
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">📏 Розмір головних цифр потужності (кВт):</div>
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
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🏷️ Розмір підписів блоків та статусів:</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${app.label_font_size === 'compact' ? 'active' : ''}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${app.label_font_size === 'normal' || !app.label_font_size ? 'active' : ''}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${app.label_font_size === 'large' ? 'active' : ''}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🌓 Колірна тема оформлення:</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${app.theme_preset === 'cyber_dark' || !app.theme_preset ? 'active' : ''}" data-val="cyber_dark">
                  🌙 Cyber Dark
                </button>
                <button class="seg-btn ${app.theme_preset === 'oled_black' ? 'active' : ''}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${app.theme_preset === 'clean_light' ? 'active' : ''}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11.5px; font-weight: 600; color: #cbd5e1;">🔍 Масштаб станції (Zoom / Scale):</span>
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8;">${Math.round(this._scale * 100)}%</span>
              </div>
              <div class="slider-row">
                <input type="range" id="sliderCardScale" min="0.7" max="1.6" step="0.05" value="${this._scale}">
              </div>
            </div>
          </div>

          <!-- SECTION 2: COMPREHENSIVE CARD CONFIGURATION (ALL 100+ FIELDS) -->
          <div style="background: #0b1324; border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 12px; margin-top: 4px;">
            <div style="font-size: 13px; font-weight: 800; color: #38bdf8; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
              <span>⚡</span>
              <span>Повні параметри станції (Сенсори, Інвертор, PV, АКБ, Мережа, Дім, Тарифи):</span>
            </div>
            <energy-station-card-editor id="drawerCardEditor"></energy-station-card-editor>
          </div>

        </div>

        <!-- DRAWER FOOTER -->
        <div class="drawer-footer">
          <button class="btn-action-secondary" id="btnCancelDrawer">Закрити</button>
          <button class="btn-action-primary" id="btnSaveDrawer">✓ Зберегти зміни</button>
        </div>
      </aside>

      <!-- YAML / JSON MODAL -->
      <div class="panel-modal-backdrop" id="yamlModal">
        <div class="panel-modal-box">
          <div class="panel-modal-header">
            <span style="font-weight: 800; color: #38bdf8; font-size: 14px;">📋 Вставити або скопіювати YAML / JSON</span>
            <button class="drawer-close-btn" id="btnCloseYamlModal">✕</button>
          </div>
          <div class="panel-modal-body">
            <span style="font-size: 11.5px; color: #94a3b8;">
              Вставте конфігурацію картки (YAML або JSON) з коду Lovelace або скопіюйте поточну для резервної копії:
            </span>
            <textarea class="code-area" id="yamlCodeArea"></textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 6px;">
              <button class="btn-action-secondary" id="btnCopyCurrentYaml">📋 Скопіювати поточну</button>
              <button class="btn-action-primary" id="btnApplyYaml">✓ Застосувати конфігурацію</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this._cardNode = this.shadowRoot.getElementById('stationCard');
    this._editorNode = this.shadowRoot.getElementById('drawerCardEditor');

    if (this._cardNode) {
      this._cardNode.setConfig(this._config);
      if (this._hass) this._cardNode.hass = this._hass;
    }
    if (this._editorNode) {
      this._editorNode.setConfig(this._config);
      if (this._hass) this._editorNode.hass = this._hass;
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
      this._updateCardConfig();
      this._closeDrawer();
      alert('✓ Налаштування збережено!');
    });

    // Editor config-changed event listener (syncs immediately to station card)
    this._editorNode?.addEventListener('config-changed', (e) => {
      const newConfig = e.detail.config;
      // Preserve current appearance (fonts & sizes)
      newConfig.appearance = {
        ...DEFAULT_CONFIG.appearance,
        ...(this._config?.appearance || {}),
        ...(newConfig.appearance || {})
      };
      this._config = newConfig;
      if (this._cardNode) this._cardNode.setConfig(this._config);
      this._saveConfig();
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

    // One-click sync from Lovelace dashboard
    root.getElementById('btnSyncFromLovelace')?.addEventListener('click', () => {
      this._importFromLovelace(true);
    });

    // YAML Modal Open / Close
    const yamlModal = root.getElementById('yamlModal');
    const codeArea = root.getElementById('yamlCodeArea');

    root.getElementById('btnOpenYamlModal')?.addEventListener('click', () => {
      if (yamlModal && codeArea) {
        try {
          codeArea.value = yamlDump(this._config);
        } catch (e) {
          codeArea.value = JSON.stringify(this._config, null, 2);
        }
        yamlModal.classList.add('active');
      }
    });

    root.getElementById('btnCloseYamlModal')?.addEventListener('click', () => {
      yamlModal?.classList.remove('active');
    });

    root.getElementById('btnCopyCurrentYaml')?.addEventListener('click', () => {
      if (codeArea) {
        navigator.clipboard?.writeText(codeArea.value);
        alert('✓ Скопійовано в буфер обміну!');
      }
    });

    root.getElementById('btnApplyYaml')?.addEventListener('click', () => {
      if (codeArea && codeArea.value.trim()) {
        try {
          const raw = codeArea.value.trim();
          let parsed = null;
          if (raw.startsWith('{')) {
            parsed = JSON.parse(raw);
          } else {
            parsed = yamlLoad(raw);
          }
          if (parsed && typeof parsed === 'object') {
            if (parsed.type) delete parsed.type;
            parsed.appearance = {
              ...DEFAULT_CONFIG.appearance,
              ...(this._config?.appearance || {}),
              ...(parsed.appearance || {})
            };
            this._config = parsed;
            this._saveConfig();
            this._render();
            this._bindEvents();
            yamlModal?.classList.remove('active');
            alert('✓ Конфігурацію успішно застосовано!');
          }
        } catch (err) {
          alert('Помилка формату YAML / JSON: ' + err.message);
        }
      }
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
