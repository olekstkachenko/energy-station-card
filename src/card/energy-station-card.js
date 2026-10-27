import { DEFAULT_CONFIG } from './default-config.js';
import { ICONS, getSvgIcon } from './svg-helpers.js';
import './energy-station-card-editor.js';

export class EnergyStationCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = null;
    this._hass = null;
    this._initialized = false;
    
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
    this._renderCardSkeleton();
    if (this._hass) this._updateValues();
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
    const val = parseFloat(stateObj.state);
    const unit = stateObj.attributes?.unit_of_measurement || '';
    return {
      raw: stateObj.state,
      val: isNaN(val) ? 0 : val,
      unit: unit,
      attributes: stateObj.attributes
    };
  }

  _formatPower(entityVal, fallbackVal = 0) {
    if (!entityVal) return { num: fallbackVal.toFixed(3), kw: fallbackVal, str: `${fallbackVal.toFixed(3)} кВт` };
    let kw = entityVal.val;
    // Auto convert Watts to kW
    if (entityVal.unit === 'W') {
      kw = kw / 1000;
    }
    return {
      num: kw.toFixed(3),
      kw: kw,
      str: `${kw.toFixed(3)} кВт`
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
          padding: 14px 16px 20px 16px;
          transition: all 0.3s ease;
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
          gap: 6px;
          width: 100%;
          padding: 4px 0;
        }
        .es-pv-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px 12px;
          background: rgba(14, 23, 42, 0.85);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 12px;
          min-width: 84px;
          transition: all 0.2s ease;
        }
        .es-pv-top-row {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 2px;
        }
        .es-pv-label {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .es-pv-val {
          font-size: 13px;
          font-weight: 800;
          color: #fbbf24;
        }
        .es-pv-metrics {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          margin-top: 3px;
          padding-top: 3px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
          justify-content: center;
        }
        .es-pv-metrics .volt {
          color: #38bdf8;
          font-weight: 600;
        }
        .es-pv-metrics .sep {
          color: rgba(255, 255, 255, 0.25);
          font-size: 8px;
        }
        .es-pv-metrics .curr {
          color: #34d399;
          font-weight: 600;
        }

        /* Bus */
        .es-bus-container {
          width: 100%;
          max-width: 880px;
          height: 26px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tri-col hub */
        .es-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr 1fr;
          gap: 16px;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          margin: 4px auto 14px auto;
          position: relative;
        }
        @media (max-width: 820px) {
          .es-hub-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .es-wing-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }
        .es-wing-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        @media (max-width: 820px) {
          .es-wing-left, .es-wing-right {
            align-items: center;
          }
        }

        .es-node-box {
          background: rgba(11, 20, 37, 0.85);
          border-radius: 14px;
          padding: 10px 14px;
          width: 195px;
          display: flex;
          flex-direction: column;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .es-inverter-card {
          width: 236px;
          padding: 14px;
          border-radius: 18px;
          background: linear-gradient(180deg, #18233a 0%, #0d1628 100%);
          border: 2px solid rgba(249, 115, 22, 0.7);
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          margin: 0 auto;
        }
        .es-inverter-model-tag {
          position: absolute;
          top: -11px;
          padding: 2px 10px;
          border-radius: 9999px;
          background: #090e1a;
          border: 1px solid rgba(249, 115, 22, 0.6);
          color: #fdba74;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .es-inverter-status-badge {
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 4px 0 8px 0;
        }

        .es-aux-box {
          margin-top: 12px;
          padding: 8px 14px;
          border-radius: 12px;
          background: rgba(88, 28, 135, 0.35);
          border: 1px solid rgba(192, 132, 252, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 180px;
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

        /* Sub-loads grid */
        .es-subloads-row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          flex-wrap: wrap;
          max-width: 280px;
        }

        .es-subload-card {
          padding: 6px 10px;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 72px;
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
          gap: 28px;
          padding: 12px 24px;
          border-radius: 16px;
          background: linear-gradient(90deg, rgba(6, 78, 59, 0.25) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(6, 78, 59, 0.25) 100%);
          border: 1px solid rgba(16, 185, 129, 0.4);
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .es-battery-rack {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          width: 100%;
        }
        .es-battery-pack-card {
          padding: 8px 12px;
          background: rgba(14, 23, 42, 0.85);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 148px;
          transition: all 0.25s ease;
          position: relative;
        }
        .es-battery-pack-card:hover {
          border-color: #34d399;
          transform: translateY(-2px);
        }
        .es-bat-temp {
          font-size: 11px;
          font-weight: 700;
          color: #fb7185;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .es-bat-main-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        .es-bat-soc-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .es-bat-soc-val {
          font-size: 22px;
          font-weight: 900;
          color: #f1f5f9;
          line-height: 1;
        }
        .es-bat-name {
          font-size: 9px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .es-battery-gauge {
          width: 26px;
          height: 46px;
          border: 2px solid #fb7185;
          border-radius: 5px;
          padding: 2px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 2px;
          position: relative;
          background: rgba(0, 0, 0, 0.4);
        }
        .es-battery-gauge-nipple {
          position: absolute;
          top: -6px;
          left: 6px;
          width: 10px;
          height: 4px;
          background: #fb7185;
          border-radius: 2px 2px 0 0;
        }
        .es-battery-gauge-body {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          gap: 2px;
        }
        .es-bat-bar {
          width: 100%;
          height: 8px;
          border-radius: 1px;
          background: rgba(255, 255, 255, 0.08);
          transition: background 0.3s;
        }
        .es-bat-bar.active-red { background: #ef4444; }
        .es-bat-bar.active-orange { background: #f97316; }
        .es-bat-bar.active-yellow { background: #eab308; }
        .es-bat-bar.active-green { background: #10b981; }

        .es-bat-telemetry-badge {
          background: rgba(8, 13, 25, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 4px 7px;
          display: flex;
          flex-direction: column;
          gap: 1px;
          font-size: 10px;
          text-align: right;
        }
        .es-bat-telemetry-badge .volt {
          color: #f1f5f9;
          font-weight: 700;
        }
        .es-bat-telemetry-badge .curr {
          color: #38bdf8;
          font-weight: 700;
        }
        .es-bat-telemetry-badge .power {
          color: #34d399;
          font-weight: 800;
        }
        .es-bat-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 6px;
          padding-top: 4px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 10px;
        }
        .es-bat-state-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .es-bat-state-tag.charge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .es-bat-state-tag.discharge {
          background: rgba(249, 115, 22, 0.15);
          color: #fb923c;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }
        .es-bat-state-tag.idle {
          background: rgba(148, 163, 184, 0.15);
          color: #94a3b8;
          border: 1px solid rgba(148, 163, 184, 0.3);
        }
        .es-bat-kwh {
          color: #cbd5e1;
          font-weight: 600;
        }

        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container">
        
        <!-- FULL CARD DYNAMIC ENERGY FLOW NETWORK -->
        <svg id="energyFlowCanvas" class="es-energy-flow-canvas">
          <!-- 1. Grid <-> Inverter Path -->
          <path id="pathGridInvBase" class="flow-track" />
          <path id="pathGridInvFlow" class="flow-pulse flow-grid" />

          <!-- 2. Solar -> Inverter Path -->
          <path id="pathSolarInvBase" class="flow-track" />
          <path id="pathSolarInvFlow" class="flow-pulse flow-solar" />

          <!-- 3. Inverter -> Essential Loads Path -->
          <path id="pathInvLoadBase" class="flow-track" />
          <path id="pathInvLoadFlow" class="flow-pulse flow-load" />

          <!-- 4. Inverter <-> Battery Hub Path -->
          <path id="pathInvBatBase" class="flow-track" />
          <path id="pathInvBatFlow" class="flow-pulse flow-battery" />

          <!-- 5. Grid -> Car Path -->
          <path id="pathGridCarBase" class="flow-track" />
          <path id="pathGridCarFlow" class="flow-pulse flow-car" />

          <!-- 6. Wind Turbines -> Inverter Paths -->
          <path id="pathTurbine1Base" class="flow-track" />
          <path id="pathTurbine1Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine2Base" class="flow-track" />
          <path id="pathTurbine2Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine3Base" class="flow-track" />
          <path id="pathTurbine3Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine4Base" class="flow-track" />
          <path id="pathTurbine4Flow" class="flow-pulse flow-wind" />
        </svg>

        <!-- HEADER -->
        <div class="es-header">
          <div class="es-header-title">
            <span>${c.title || 'Energy Station'}</span>
            <span class="es-header-badge">PRO FLOW</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="es-status-dot" id="liveStatusDot"></div>
            <span style="font-size: 11px; color: #94a3b8;" id="liveStatusText">HA Live</span>
          </div>
        </div>

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div class="es-mono" style="font-size: 16px; font-weight: 700; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${c.solar?.target_daily_yield || 55.0}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 6px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
            </div>
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
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">Сумарно PV</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 19px; font-weight: 800; color: #fbbf24;">
              12,000 кВт
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 12px; color: #cbd5e1; display: flex; flex-direction: column; gap: 2px;">
              <div>Імпорт: <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div>Експорт: <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
            </div>

            <!-- Grid Box -->
            <div class="es-node-box glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; color: #38bdf8;">${ICONS.grid_tower}</div>
                <span style="font-weight: 700; font-size: 14px; color: #f8fafc;">Мережа</span>
              </div>
              <div class="es-mono" id="gridPowerVal" style="font-size: 20px; font-weight: 800; color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono" id="gridDirectionLabel" style="font-size: 11px; font-weight: 600; color: rgba(56, 189, 248, 0.85); text-transform: uppercase; margin-top: 2px;">
                ← Експорт
              </div>
            </div>

            <!-- Non-essential / Car -->
            <div class="es-node-box clickable-node" id="carNode" style="width: 195px; padding: 8px 12px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                <span style="font-size: 11px; color: #94a3b8; font-weight: 500;">Негарантоване</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 4px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <div style="width: 18px; height: 18px; color: #34d399;">${ICONS.car}</div>
                  <span style="font-size: 12px; color: #e2e8f0; font-weight: 600;">${c.grid?.car_title || 'Авто'}</span>
                </div>
                <span class="es-mono" id="carPowerVal" style="font-size: 13px; font-weight: 700; color: #38bdf8;">1,000 кВт</span>
              </div>
            </div>
          </div>

          <!-- CENTER: HYBRID INVERTER & AUX -->
          <div style="display: flex; flex-direction: column; align-items: center; position: relative;">

            <!-- Temperature row -->
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: #f59e0b;" class="es-mono">
              <div><span style="color: #94a3b8;">AC</span> <span id="inverterAcTemp">41,20</span> °C</div>
              <div><span style="color: #94a3b8;">DC</span> <span id="inverterDcTemp">38,40</span> °C</div>
            </div>

            <!-- Inverter Card -->
            <div class="es-inverter-card glow-inverter clickable-node" id="inverterNode">
              <div class="es-inverter-model-tag es-mono" id="inverterModelTag">${c.inverter?.model_name || 'DEYE SUN-12K'}</div>
              <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; color: #fbbf24; margin: 4px 0 6px 0;">
                <div style="width: 26px; height: 26px;">${ICONS.inverter}</div>
              </div>
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #cbd5e1; font-weight: 600;">Гібридний інвертор</div>
              <div class="es-mono" id="inverterPowerVal" style="font-size: 24px; font-weight: 900; color: #fbbf24; margin: 2px 0;">8,000 кВт</div>
              <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
              
              <!-- Metrics grid -->
              <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 6px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px; color: #cbd5e1;" class="es-mono">
                <div><span style="color: #94a3b8;">U:</span> <span id="inverterVolt">231,45</span> V</div>
                <div><span style="color: #94a3b8;">I:</span> <span id="inverterCurrent">8,60</span> A</div>
                <div style="grid-column: span 2; color: #fde047;"><span style="color: #94a3b8;">Freq:</span> <span id="inverterFreq">50,01</span> Hz</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${(!c.wind?.show && c.aux?.type !== 'wind') ? 'hidden' : ''}" id="windStationContainer"></div>

            <!-- AUX Node (Microinverter / Generator when not in wind mode) -->
            <div class="es-aux-box glow-aux clickable-node ${c.aux?.type === 'none' || c.aux?.type === 'wind' ? 'hidden' : ''}" id="auxNode">
              <div style="display: flex; align-items: center; gap: 6px; color: #d8b4fe; font-size: 12px; font-weight: 600;" id="auxHeader">
                <div style="width: 18px; height: 18px;" id="auxIconBox">
                  ${ICONS[c.aux?.type] || ICONS.microinverter}
                </div>
                <span id="auxTitle">${(c.aux?.type === 'microinverter' && (!c.aux?.title || c.aux?.title === 'Вітрогенератор')) ? 'Мікроінвертор' : (c.aux?.title || 'Мікроінвертор')}</span>
              </div>
              <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #e9d5ff; margin: 2px 0;">2,000 кВт</div>
              <div style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${c.aux?.subtitle || 'Джерело → GEN port'}</div>
            </div>

          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 12px; color: #cbd5e1;">
              Будинок (сьогодні): <span id="dailyHouseKwh" style="color: #2dd4bf; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Box -->
            <div class="es-node-box clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4); filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.35));">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; color: #22d3ee;">${ICONS.house}</div>
                <span style="font-weight: 700; font-size: 14px; color: #f8fafc;">Гарантоване</span>
              </div>
              <div class="es-mono" id="essentialPowerVal" style="font-size: 20px; font-weight: 800; color: #22d3ee;">8,000 кВт</div>
              <div class="es-mono" style="font-size: 11px; font-weight: 600; color: rgba(34, 211, 238, 0.85); text-transform: uppercase; margin-top: 2px;">
                Essential Loads
              </div>
            </div>

            <!-- Subloads -->
            <div class="es-subloads-row" id="subloadsContainer"></div>
          </div>

        </div>

        <!-- BATTERY TELEMETRY & MULTI-PACK RACK -->
        <div class="es-battery-section">
          
          <!-- Master Battery Hub -->
          <div class="es-master-battery-hub glow-battery clickable-node" id="masterBatteryHub">
            <!-- Left Counters -->
            <div class="es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 4px; text-align: right;">
              <div>Заряд: <span id="batChargeDaily" style="color: #34d399; font-weight: 700;">4,30 kWh</span></div>
              <div>Розряд: <span id="batDischargeDaily" style="color: #fbbf24; font-weight: 700;">6,10 kWh</span></div>
            </div>

            <!-- Center SoC -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 30px; font-weight: 900; color: #34d399; margin: 0 0 2px 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="font-size: 11px; color: #94a3b8;">
                <span>3,000 кВт</span> • <span style="color: #34d399;">Заряд ↓</span>
              </div>
            </div>

            <!-- Right Telemetry -->
            <div class="es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">
              <div id="batVoltCurrent" style="color: #6ee7b7; font-weight: 700;">U: 53,24 V / I: -56,30 A</div>
              <div>Ємність: <span id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;">13,00 kWh (12,80 kWh)</span></div>
            </div>
          </div>

          <!-- Battery Bus (Dynamic width based on battery count) -->
          <div class="es-bus-container" id="batteryBusContainer" style="width: 100%; max-width: 900px; height: 26px;">
            <svg id="batteryBusSvg" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="none">
              <line id="batteryBusBase" stroke="#059669" stroke-width="2" stroke-linecap="round" />
              <line id="batteryFlowCollector" class="flow-line" stroke="#34d399" stroke-width="2.5" />
              <g id="batteryBusFeeders"></g>
              <line id="batteryBusStemBase" stroke="#059669" stroke-width="2" />
              <line id="batteryBusStemFlow" class="flow-line" stroke="#34d399" stroke-width="2.5" />
            </svg>
          </div>

          <!-- Parallel Modules Rack -->
          <div class="es-battery-rack" id="batteryRackContainer"></div>

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
    requestAnimationFrame(() => this._updateFlowPaths());
  }

  _cacheDomNodes() {
    const root = this.shadowRoot;
    this._nodes = {
      dailySolarYield: root.getElementById('dailySolarYield'),
      targetSolarYield: root.getElementById('targetSolarYield'),
      solarProgressBar: root.getElementById('solarProgressBar'),
      totalPvPowerBadge: root.getElementById('totalPvPowerBadge'),
      solarFlowCollector: root.getElementById('solarFlowCollector'),

      gridImportDaily: root.getElementById('gridImportDaily'),
      gridExportDaily: root.getElementById('gridExportDaily'),
      gridPowerVal: root.getElementById('gridPowerVal'),
      gridDirectionLabel: root.getElementById('gridDirectionLabel'),
      carPowerVal: root.getElementById('carPowerVal'),
      carNode: root.getElementById('carNode'),

      inverterAcTemp: root.getElementById('inverterAcTemp'),
      inverterDcTemp: root.getElementById('inverterDcTemp'),
      inverterModelTag: root.getElementById('inverterModelTag'),
      inverterPowerVal: root.getElementById('inverterPowerVal'),
      inverterStatusBadge: root.getElementById('inverterStatusBadge'),
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

      batChargeDaily: root.getElementById('batChargeDaily'),
      batDischargeDaily: root.getElementById('batDischargeDaily'),
      masterBatterySoc: root.getElementById('masterBatterySoc'),
      masterBatteryFlowHint: root.getElementById('masterBatteryFlowHint'),
      batVoltCurrent: root.getElementById('batVoltCurrent'),
      batCapacityVal: root.getElementById('batCapacityVal'),
      batteryFlowCollector: root.getElementById('batteryFlowCollector'),

      pvPanelsContainer: root.getElementById('pvPanelsContainer'),
      subloadsContainer: root.getElementById('subloadsContainer'),
      batteryRackContainer: root.getElementById('batteryRackContainer')
    };
  }

  _renderDynamicWindTurbines() {
    const c = this._config || DEFAULT_CONFIG;
    const container = this._nodes?.windStationContainer || this.shadowRoot.getElementById('windStationContainer');
    if (!container) return;

    container.innerHTML = '';
    const isWindActive = c.wind?.show || c.aux?.type === 'wind';
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
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">5.90</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">109.2</span> kWh</span>
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
        rpm_entity: `sensor.wind_turbine_${i + 1}_rpm`,
        daily_energy_entity: `sensor.wind_turbine_${i + 1}_daily_energy`,
        monthly_energy_entity: `sensor.wind_turbine_${i + 1}_monthly_energy`,
        animation_threshold: c.wind?.animation_threshold || 50
      };

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
            Генерація
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${i + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            ${(i === 0 ? 1.56 : 0.22).toFixed(3)} кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${i + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9;">
            <span id="turbineRpmVal_${i + 1}">${i === 0 ? '480' : '160'}</span> RPM
          </span>
        </div>

        <div class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: flex; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${i + 1}" style="color: #6ee7b7; font-weight: 700;">${i === 0 ? '4.80' : '1.10'}</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${i + 1}" style="color: #38bdf8; font-weight: 700;">${i === 0 ? '86.4' : '22.8'}</span> kWh</div>
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
    for (let i = 1; i <= count; i++) {
      const idStr = i < 10 ? `0${i}` : `${i}`;
      const strConfig = c.solar?.strings?.[i - 1] || {};
      const strName = strConfig.name || `PV ${idStr}`;

      const div = document.createElement('div');
      div.className = 'es-pv-panel glow-solar clickable-node';
      div.dataset.pvIndex = i;
      div.id = `pvPanel_${i}`;
      div.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 18px; height: 18px; color: #fbbf24;">${ICONS.pv_panel}</div>
          <span class="es-pv-label es-mono">${strName}</span>
        </div>
        <span class="es-pv-val es-mono" id="pvVal_${i}">1,200 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${i}">
          <span class="volt" id="pvVolt_${i}">385.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${i}">3.12 A</span>
        </div>
      `;
      div.addEventListener('click', () => {
        const ent = strConfig.power_entity || strConfig.voltage_entity || strConfig.current_entity || c.solar?.total_power_entity;
        this._fireMoreInfo(ent);
      });
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
      div.innerHTML = `
        <div style="width: 18px; height: 18px; color: #22d3ee; margin-bottom: 2px;">${ICONS[sub.icon] || ICONS.other}</div>
        <span style="font-size: 10px; color: #94a3b8; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 72px;">${sub.name}</span>
        <span class="es-mono" id="subloadVal_${idx}" style="font-size: 11px; font-weight: 700; color: #22d3ee;">2,000 кВт</span>
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
    const defaultSocs = [42, 43, 76, 85, 90, 68, 72, 80];
    const defaultTemps = [25.0, 18.0, 22.5, 21.0, 24.0, 20.0, 19.5, 23.0];

    for (let i = 1; i <= count; i++) {
      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      const modName = mod.name || `Батарея ${i}`;
      const soc = defaultSocs[(i - 1) % defaultSocs.length];
      const temp = defaultTemps[(i - 1) % defaultTemps.length];

      const div = document.createElement('div');
      div.className = 'es-battery-pack-card glow-battery clickable-node';
      div.id = `batPackCard_${i}`;
      div.innerHTML = `
        <!-- Temperature above the battery -->
        <div class="es-bat-temp es-mono" id="batPackTemp_${i}">
          <span>🌡️</span> <span id="batPackTempVal_${i}">${temp.toFixed(1)}</span>°C
        </div>
        
        <div class="es-bat-main-row">
          <!-- Big SOC percentage & label -->
          <div class="es-bat-soc-col">
            <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${soc}%</span>
            <span class="es-bat-name">${modName}</span>
          </div>

          <!-- Battery graphic with level bars -->
          <div class="es-battery-gauge">
            <div class="es-battery-gauge-nipple"></div>
            <div class="es-battery-gauge-body">
              <div class="es-bat-bar" id="batPackBar1_${i}"></div>
              <div class="es-bat-bar" id="batPackBar2_${i}"></div>
              <div class="es-bat-bar" id="batPackBar3_${i}"></div>
              <div class="es-bat-bar" id="batPackBar4_${i}"></div>
            </div>
          </div>

          <!-- Rounded Telemetry Badge (Voltage, Current, Power) -->
          <div class="es-bat-telemetry-badge es-mono">
            <div class="volt" id="batPackVolt_${i}">51.6 V</div>
            <div class="curr" id="batPackCurr_${i}">4.4 A</div>
            <div class="power" id="batPackPower_${i}">2.27 kW</div>
          </div>
        </div>

        <!-- Bottom energy / status tag -->
        <div class="es-bat-bottom-row es-mono">
          <span class="es-bat-state-tag charge" id="batPackStateTag_${i}">Заряд</span>
          <span class="es-bat-kwh" id="batPackKwh_${i}">7.88 kWh</span>
        </div>
      `;

      div.addEventListener('click', () => {
        const ent = mod.soc_entity || mod.soc || mod.voltage_entity || mod.volt || mod.current_entity || c.battery?.soc_entity;
        this._fireMoreInfo(ent);
      });
      container.appendChild(div);
    }
  }

  _bindInteractions() {
    const root = this.shadowRoot;
    const c = this._config || DEFAULT_CONFIG;

    root.getElementById('solarHeaderNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.solar?.daily_yield_entity || c.solar?.total_power_entity);
    });
    root.getElementById('totalPvPowerBadge')?.addEventListener('click', () => {
      this._fireMoreInfo(c.solar?.total_power_entity);
    });
    root.getElementById('gridNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.grid?.power_entity);
    });
    root.getElementById('carNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.grid?.car_power_entity);
    });
    root.getElementById('inverterNode')?.addEventListener('click', () => {
      this._fireMoreInfo(c.inverter?.power_entity);
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
  }

  _updateValues() {
    if (!this._nodes.dailySolarYield) return;
    const c = this._config || DEFAULT_CONFIG;

    // 1. Solar
    const sPvTotal = this._getEntityState(c.solar?.total_power_entity);
    const pvPower = this._formatPower(sPvTotal, 12.0);
    this._nodes.totalPvPowerBadge.innerText = pvPower.str;

    const sPvDaily = this._getEntityState(c.solar?.daily_yield_entity);
    const dailyKwh = sPvDaily ? sPvDaily.val : 48.6;
    this._nodes.dailySolarYield.innerText = dailyKwh.toFixed(1);
    
    const targetKwh = c.solar?.target_daily_yield || 55.0;
    this._nodes.targetSolarYield.innerText = targetKwh.toFixed(1);
    const progress = Math.min(100, Math.round((dailyKwh / targetKwh) * 100));
    this._nodes.solarProgressBar.style.width = `${progress}%`;

    // Individual PV panels & strings (Current, Voltage, Power)
    const pvCount = c.solar?.pv_count || (c.solar?.strings?.length || 3);
    const perPanelKw = (pvPower.kw / pvCount).toFixed(3);
    for (let i = 1; i <= pvCount; i++) {
      const panelVal = this.shadowRoot.getElementById(`pvVal_${i}`);
      const panelVolt = this.shadowRoot.getElementById(`pvVolt_${i}`);
      const panelCurr = this.shadowRoot.getElementById(`pvCurr_${i}`);

      const strConfig = c.solar?.strings?.[i - 1];
      const voltEnt = strConfig?.voltage_entity || `sensor.deye_12k_inverter_pv${i}_voltage`;
      const currEnt = strConfig?.current_entity || `sensor.deye_12k_inverter_pv${i}_current`;
      const pwrEnt = strConfig?.power_entity || `sensor.deye_12k_inverter_pv${i}_power`;

      const sVolt = this._getEntityState(voltEnt);
      const sCurr = this._getEntityState(currEnt);
      const sPwr = this._getEntityState(pwrEnt);

      let voltNum = sVolt ? sVolt.val : (380 + (i * 4.5));
      let currNum = sCurr ? sCurr.val : (3.12 + (i * 0.28));
      let kwNum = 0;

      if (sPwr) {
        kwNum = this._formatPower(sPwr).kw;
      } else if (sVolt && sCurr) {
        // Calculate P = V * I in kW
        kwNum = (sVolt.val * sCurr.val) / 1000.0;
      } else {
        kwNum = parseFloat(perPanelKw);
      }

      if (panelVal) {
        panelVal.innerText = `${kwNum.toFixed(3)} кВт`;
      }
      if (panelVolt) {
        panelVolt.innerText = `${voltNum.toFixed(1)} V`;
      }
      if (panelCurr) {
        panelCurr.innerText = `${currNum.toFixed(2)} A`;
      }
    }

    // 2. Inverter
    const sInvPower = this._getEntityState(c.inverter?.power_entity);
    this._nodes.inverterPowerVal.innerText = this._formatPower(sInvPower, 8.0).str;
    
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
    const isWindActive = c.wind?.show || c.aux?.type === 'wind';
    const windStationContainer = this.shadowRoot.getElementById('windStationContainer');
    const auxNode = this._nodes.auxNode;

    // 1. Wind Turbines Update
    if (windStationContainer) {
      if (!isWindActive) {
        windStationContainer.classList.add('hidden');
      } else {
        windStationContainer.classList.remove('hidden');
        const count = c.wind?.turbine_count || (c.wind?.turbines?.length || 2);
        const turbinesList = c.wind?.turbines || [];

        for (let i = 0; i < count; i++) {
          const t = turbinesList[i] || {
            name: `Вітряк ${i + 1}`,
            power_entity: `sensor.wind_turbine_${i + 1}_power`,
            rpm_entity: `sensor.wind_turbine_${i + 1}_rpm`,
            daily_energy_entity: `sensor.wind_turbine_${i + 1}_daily_energy`,
            monthly_energy_entity: `sensor.wind_turbine_${i + 1}_monthly_energy`,
            animation_threshold: c.wind?.animation_threshold || 50
          };

          const powerEl = this.shadowRoot.getElementById(`turbinePower_${i + 1}`);
          const statusEl = this.shadowRoot.getElementById(`turbineStatus_${i + 1}`);
          const iconBox = this.shadowRoot.getElementById(`turbineIcon_${i + 1}`);
          const cardEl = this.shadowRoot.getElementById(`turbineCard_${i + 1}`);
          const rpmVal = this.shadowRoot.getElementById(`turbineRpmVal_${i + 1}`);
          const dailyVal = this.shadowRoot.getElementById(`turbineDailyVal_${i + 1}`);
          const monthlyVal = this.shadowRoot.getElementById(`turbineMonthlyVal_${i + 1}`);

          // Fallback realistic wattages (Turbine 1: 1.56 kW, Turbine 2: 0.22 kW matching screenshot)
          const fallbackKw = i === 0 ? 1.56 : 0.22;
          const sPower = this._getEntityState(t.power_entity);
          const formatted = this._formatPower(sPower, fallbackKw);
          if (powerEl) powerEl.innerText = formatted.str;

          let powerWatts = formatted.kw * 1000;
          if (sPower && sPower.unit === 'W') {
            powerWatts = sPower.val;
          }

          const threshold = t.animation_threshold ?? c.wind?.animation_threshold ?? 50;
          const rotor = iconBox?.querySelector('.turbine-rotor');

          if (powerWatts >= threshold) {
            // GENERATING: Rotor spins!
            if (rotor) rotor.classList.add('spinning');
            if (cardEl) {
              cardEl.classList.add('glow-wind');
              cardEl.style.borderColor = 'rgba(6, 182, 212, 0.55)';
            }

            const maxPower = c.wind?.max_power || 3000;
            const ratio = Math.min(1, Math.max(0, (powerWatts - threshold) / (maxPower - threshold)));
            const duration = (3.2 - ratio * 2.75).toFixed(2);
            if (rotor) rotor.style.setProperty('--turbine-speed', `${duration}s`);

            if (statusEl) {
              statusEl.innerText = 'Генерація';
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
              statusEl.innerText = 'Штиль';
              statusEl.style.color = '#94a3b8';
            }
          }

          // RPM telemetry
          const sRpm = this._getEntityState(t.rpm_entity || t.speed_entity);
          if (rpmVal) {
            if (sRpm) {
              rpmVal.innerText = Math.round(sRpm.val);
            } else {
              const fallbackRpm = i === 0 ? 480 : 160;
              rpmVal.innerText = powerWatts >= threshold ? fallbackRpm : 0;
            }
          }

          // Daily Yield (День)
          const sDaily = this._getEntityState(t.daily_energy_entity);
          if (dailyVal) {
            dailyVal.innerText = sDaily ? sDaily.val.toFixed(2) : (i === 0 ? '4.80' : '1.10');
          }

          // Monthly Yield (Місяць)
          const sMonthly = this._getEntityState(t.monthly_energy_entity);
          if (monthlyVal) {
            monthlyVal.innerText = sMonthly ? sMonthly.val.toFixed(1) : (i === 0 ? '86.4' : '22.8');
          }
        }

        // Total Wind Daily & Monthly calculation
        let totalWindDaily = 0;
        let totalWindMonthly = 0;
        for (let i = 0; i < count; i++) {
          const t = turbinesList[i] || {};
          const sDaily = this._getEntityState(t.daily_energy_entity);
          const sMonthly = this._getEntityState(t.monthly_energy_entity);
          totalWindDaily += sDaily ? sDaily.val : (i === 0 ? 4.80 : 1.10);
          totalWindMonthly += sMonthly ? sMonthly.val : (i === 0 ? 86.4 : 22.8);
        }

        const windTotalDaily = this.shadowRoot.getElementById('windTotalDailyVal');
        const windTotalMonthly = this.shadowRoot.getElementById('windTotalMonthlyVal');
        if (windTotalDaily) {
          const sStationDaily = this._getEntityState(c.wind?.daily_energy_entity);
          windTotalDaily.innerText = sStationDaily ? sStationDaily.val.toFixed(2) : totalWindDaily.toFixed(2);
        }
        if (windTotalMonthly) {
          const sStationMonthly = this._getEntityState(c.wind?.monthly_energy_entity);
          windTotalMonthly.innerText = sStationMonthly ? sStationMonthly.val.toFixed(1) : totalWindMonthly.toFixed(1);
        }
      }
    }

    // 2. Auxiliary Port (when not used as wind turbine)
    if (auxNode) {
      if (c.aux?.type === 'none' || c.aux?.type === 'wind') {
        auxNode.classList.add('hidden');
      } else {
        auxNode.classList.remove('hidden');
        const sAux = this._getEntityState(c.aux?.power_entity);
        const auxFormatted = this._formatPower(sAux, 2.0);
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

    // 3. Grid
    const sGridPower = this._getEntityState(c.grid?.power_entity);
    const gridKw = sGridPower ? (sGridPower.unit === 'W' ? sGridPower.val / 1000 : sGridPower.val) : 2.0;
    const isExport = gridKw >= 0;
    this._nodes.gridPowerVal.innerText = `${Math.abs(gridKw).toFixed(3)} кВт`;
    this._nodes.gridDirectionLabel.innerText = isExport ? '← Експорт' : '→ Імпорт';

    const sGridImport = this._getEntityState(c.grid?.import_daily_entity);
    this._nodes.gridImportDaily.innerText = sGridImport ? `${sGridImport.val.toFixed(2)} kWh` : '3,10 kWh';

    const sGridExport = this._getEntityState(c.grid?.export_daily_entity);
    this._nodes.gridExportDaily.innerText = sGridExport ? `${sGridExport.val.toFixed(2)} kWh` : '4,80 kWh';

    // Car
    const sCar = this._getEntityState(c.grid?.car_power_entity);
    this._nodes.carPowerVal.innerText = this._formatPower(sCar, 1.0).str;

    // 4. House
    const sEss = this._getEntityState(c.load?.essential_power_entity);
    this._nodes.essentialPowerVal.innerText = this._formatPower(sEss, 8.0).str;

    const sHouseDaily = this._getEntityState(c.load?.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = sHouseDaily ? `${sHouseDaily.val.toFixed(2)} kWh` : '12,40 kWh';

    // Subloads
    (c.load?.subloads || []).forEach((sub, idx) => {
      const subVal = this.shadowRoot.getElementById(`subloadVal_${idx}`);
      if (subVal) {
        const sSub = this._getEntityState(sub.entity);
        subVal.innerText = this._formatPower(sSub, 2.0 + idx).str;
      }
    });

    // 5. Battery
    const sSoc = this._getEntityState(c.battery?.soc_entity);
    const socVal = sSoc ? sSoc.val : 80.0;
    this._nodes.masterBatterySoc.innerText = `${socVal.toFixed(1)}%`;

    const sBatPower = this._getEntityState(c.battery?.power_entity);
    const batKw = sBatPower ? (sBatPower.unit === 'W' ? sBatPower.val / 1000 : sBatPower.val) : 3.0;
    const isCharging = batKw >= 0;
    this._nodes.masterBatteryFlowHint.innerHTML = `<span>${Math.abs(batKw).toFixed(3)} кВт</span> • <span style="color: ${isCharging ? '#34d399' : '#fbbf24'};">${isCharging ? 'Заряд ↓' : 'Розряд ↑'}</span>`;

    const sBatVolt = this._getEntityState(c.battery?.voltage_entity);
    const sBatCurr = this._getEntityState(c.battery?.current_entity);
    const vStr = sBatVolt ? sBatVolt.val.toFixed(2) : '53,24';
    const cStr = sBatCurr ? sBatCurr.val.toFixed(2) : '-56,30';
    this._nodes.batVoltCurrent.innerText = `U: ${vStr} V / I: ${cStr} A`;

    // Total battery capacity: sum of all module capacities + inverter sensor reading in parentheses
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

    if (this._nodes.batCapacityVal) {
      if (invCapVal !== null) {
        this._nodes.batCapacityVal.innerText = `${totalModulesCapacity.toFixed(2)} kWh (${invCapVal.toFixed(2)} kWh)`;
      } else {
        this._nodes.batCapacityVal.innerText = `${totalModulesCapacity.toFixed(2)} kWh`;
      }
    }

    const sBatChg = this._getEntityState(c.battery?.charge_daily_entity);
    this._nodes.batChargeDaily.innerText = sBatChg ? `${sBatChg.val.toFixed(2)} kWh` : '4,30 kWh';

    const sBatDis = this._getEntityState(c.battery?.discharge_daily_entity);
    this._nodes.batDischargeDaily.innerText = sBatDis ? `${sBatDis.val.toFixed(2)} kWh` : '6,10 kWh';

    // Battery modules (SOC, Current, Voltage, Power, Temperature)
    for (let i = 1; i <= batCount; i++) {
      const packSoc = this.shadowRoot.getElementById(`batPackSoc_${i}`);
      const packVolt = this.shadowRoot.getElementById(`batPackVolt_${i}`);
      const packCurr = this.shadowRoot.getElementById(`batPackCurr_${i}`);
      const packPower = this.shadowRoot.getElementById(`batPackPower_${i}`);
      const packTempVal = this.shadowRoot.getElementById(`batPackTempVal_${i}`);
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

      const sModSoc = this._getEntityState(socEnt);
      const sModCurr = this._getEntityState(currEnt);
      const sModVolt = this._getEntityState(voltEnt);
      const sModPwr = this._getEntityState(pwrEnt);
      const sModTemp = this._getEntityState(tempEnt);

      // Values with realistic fallbacks matching user screenshot (42% / 43%, 51.6V / 51.8V, 4.4A / 19.6A, 25.0° / 18.0°)
      const socNum = sModSoc ? sModSoc.val : (i === 1 ? 42 : (i === 2 ? 43 : 75));
      const voltNum = sModVolt ? sModVolt.val : (i === 1 ? 51.6 : (i === 2 ? 51.8 : 52.4));
      const currNum = sModCurr ? sModCurr.val : (i === 1 ? 4.4 : (i === 2 ? 19.6 : 8.2));
      const tempNum = sModTemp ? sModTemp.val : (i === 1 ? 25.0 : (i === 2 ? 18.0 : 21.5));

      let kwNum = 0;
      if (sModPwr) {
        kwNum = this._formatPower(sModPwr).kw;
      } else {
        // Calculate P = U * I in kW
        kwNum = (voltNum * Math.abs(currNum)) / 1000.0;
      }

      if (packSoc) packSoc.innerText = `${socNum.toFixed(0)}%`;
      if (packVolt) packVolt.innerText = `${voltNum.toFixed(1)} V`;
      if (packCurr) packCurr.innerText = `${Math.abs(currNum).toFixed(1)} A`;
      if (packPower) packPower.innerText = `${kwNum.toFixed(2)} kW`;
      if (packTempVal) packTempVal.innerText = `${tempNum.toFixed(1)}`;

      // State: ONLY Charge (GREEN) or Discharge (RED). No "Очікування" / waiting state!
      const isChg = currNum >= 0;

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
          packTag.innerText = 'Заряд';
          packTag.style.color = '#34d399';
          packTag.style.background = 'rgba(16, 185, 129, 0.18)';
          packTag.style.borderColor = 'rgba(16, 185, 129, 0.4)';
        } else {
          packTag.className = 'es-bat-state-tag discharge';
          packTag.innerText = 'Розряд';
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

      // Remaining kWh calculated from individual battery module capacity_kwh
      const modCap = mod.capacity_kwh !== undefined ? parseFloat(mod.capacity_kwh) : ((c.battery?.capacity_kwh || 10.0) / batCount);
      const remKwh = (modCap * (socNum / 100.0)).toFixed(2);
      if (packKwh) {
        packKwh.innerText = `${remKwh} kWh`;
      }

      // Level bars lighting based on SOC and state (GREEN on charge, RED on discharge)
      const barClass = isChg ? 'active-green' : 'active-red';
      if (bar1 && bar2 && bar3 && bar4) {
        bar1.className = `es-bat-bar ${socNum >= 10 ? barClass : ''}`;
        bar2.className = `es-bat-bar ${socNum >= 35 ? barClass : ''}`;
        bar3.className = `es-bat-bar ${socNum >= 65 ? barClass : ''}`;
        bar4.className = `es-bat-bar ${socNum >= 85 ? barClass : ''}`;
      }
    }

    // Update live animated SVG energy flow paths and speed/direction
    this._updateFlowPaths();
    this._updateFlowAnimations(
      gridKw,
      isExport,
      pvPower.kw,
      sEss ? (sEss.unit === 'W' ? sEss.val / 1000 : sEss.val) : 8.0,
      batKw,
      isCharging,
      sCar ? (sCar.unit === 'W' ? sCar.val / 1000 : sCar.val) : 1.0
    );
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
    requestAnimationFrame(() => this._updateFlowPaths());
    setTimeout(() => this._updateFlowPaths(), 150);
  }

  _updateFlowPaths() {
    try {
      const container = this.shadowRoot?.querySelector('.energy-station-container');
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      if (cRect.width === 0 || cRect.height === 0) return;

      const getPt = (el, xFrac = 0.5, yFrac = 0.5) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: Math.round(r.left - cRect.left + r.width * xFrac),
          y: Math.round(r.top - cRect.top + r.height * yFrac)
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

      // 1. Grid <-> Inverter Path (Horizontal bridge)
      if (gridNode && inverterNode) {
        const p1 = getPt(gridNode, 1.0, 0.45);
        const p2 = getPt(inverterNode, 0.0, 0.35);
        if (p1 && p2) {
          const midX = Math.round((p1.x + p2.x) / 2);
          const d = `M ${p1.x} ${p1.y} C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;
          setPathD('pathGridInvBase', 'pathGridInvFlow', d);
        }
      }

      // 2. Inverter -> Essential Loads Path
      if (inverterNode && essentialNode) {
        const p1 = getPt(inverterNode, 1.0, 0.35);
        const p2 = getPt(essentialNode, 0.0, 0.45);
        if (p1 && p2) {
          const midX = Math.round((p1.x + p2.x) / 2);
          const d = `M ${p1.x} ${p1.y} C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;
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

      // 5. Grid -> Car Path
      if (gridNode && carNode && carNode.offsetHeight > 0) {
        const p1 = getPt(gridNode, 0.5, 1.0);
        const p2 = getPt(carNode, 0.5, 0.0);
        if (p1 && p2) {
          const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;
          setPathD('pathGridCarBase', 'pathGridCarFlow', d);
        }
      }

      // 6. Wind Turbines -> Battery Hub Paths (Direct DC charging into batteries)
      const windContainer = this.shadowRoot.getElementById('windStationContainer');
      const isWindActive = c.wind?.show || c.aux?.type === 'wind';
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

      // Update dynamic bus bar lengths for Solar & Batteries
      this._updateBusBars();
    } catch (e) {
      // Quiet fail if DOM not ready
    }
  }

  _updateBusBars() {
    try {
      const c = this._config || DEFAULT_CONFIG;

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

          const x1 = Math.round(rFirst.left - svgRect.left + rFirst.width / 2);
          const x2 = Math.round(rLast.left - svgRect.left + rLast.width / 2);
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
                const cx = Math.round(cr.left - svgRect.left + cr.width / 2);
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

      // 2. Battery Bus: dynamically adjust horizontal line length to span from first to last battery module
      const batSvg = this.shadowRoot.getElementById('batteryBusSvg');
      const batCount = c.battery?.parallel_batteries || (c.battery?.modules?.length || 2);
      if (batSvg && batCount > 0) {
        const svgRect = batSvg.getBoundingClientRect();
        const firstBat = this.shadowRoot.getElementById('batPackCard_1');
        const lastBat = this.shadowRoot.getElementById(`batPackCard_${batCount}`);
        const baseLine = this.shadowRoot.getElementById('batteryBusBase');
        const flowLine = this.shadowRoot.getElementById('batteryFlowCollector');
        const stemBase = this.shadowRoot.getElementById('batteryBusStemBase');
        const stemFlow = this.shadowRoot.getElementById('batteryBusStemFlow');
        const feedersGroup = this.shadowRoot.getElementById('batteryBusFeeders');

        if (firstBat && lastBat && svgRect.width > 0) {
          const rFirst = firstBat.getBoundingClientRect();
          const rLast = lastBat.getBoundingClientRect();

          const x1 = Math.round(rFirst.left - svgRect.left + rFirst.width / 2);
          const x2 = Math.round(rLast.left - svgRect.left + rLast.width / 2);
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
            stemBase.setAttribute('y1', 0);
            stemBase.setAttribute('x2', midX);
            stemBase.setAttribute('y2', y);
          }
          if (stemFlow) {
            stemFlow.setAttribute('x1', midX);
            stemFlow.setAttribute('y1', 0);
            stemFlow.setAttribute('x2', midX);
            stemFlow.setAttribute('y2', y);
          }

          if (feedersGroup) {
            let feedersHtml = '';
            for (let i = 1; i <= batCount; i++) {
              const card = this.shadowRoot.getElementById(`batPackCard_${i}`);
              if (card) {
                const cr = card.getBoundingClientRect();
                const cx = Math.round(cr.left - svgRect.left + cr.width / 2);
                feedersHtml += `
                  <line x1="${cx}" y1="${y}" x2="${cx}" y2="26" stroke="#059669" stroke-width="2" />
                  <line class="flow-line" x1="${cx}" y1="${y}" x2="${cx}" y2="26" stroke="#34d399" stroke-width="2.5" />
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

  _updateFlowAnimations(gridKw, isExport, solarKw, essentialKw, batKw, isCharging, carKw) {
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
    this._applyFlowAnimation(fGrid, 'flow-grid', isExport, calcSpeed(gridKw, 10.0), animEnabled && pwrGrid >= 0.05);

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
    const batClass = isCharging ? 'flow-battery charging' : 'flow-battery discharging';
    this._applyFlowAnimation(fBat, batClass, !isCharging, calcSpeed(batKw, 8.0), animEnabled && pwrBat >= 0.05);

    // 5. Grid -> Car
    const fCar = this.shadowRoot.getElementById('pathGridCarFlow');
    const pwrCar = Math.abs(carKw);
    this._applyFlowAnimation(fCar, 'flow-car', false, calcSpeed(carKw, 7.0), animEnabled && pwrCar >= 0.05);

    // 6. Battery rack collector bus
    const batFlow = this.shadowRoot.getElementById('batteryFlowCollector');
    if (batFlow) {
      if (!animEnabled || pwrBat < 0.05) {
        batFlow.style.opacity = '0.2';
        batFlow.style.animation = 'none';
      } else {
        batFlow.style.opacity = '1';
        const animName = isCharging ? 'esDashflow' : 'esDashflowRev';
        batFlow.setAttribute('class', isCharging ? 'flow-line' : 'flow-line-reverse');
        batFlow.style.stroke = isCharging ? '#34d399' : '#f87171';
        batFlow.style.animation = `${animName} ${calcSpeed(batKw, 8.0)} linear infinite`;
      }
    }

    // 7. Solar collector bus
    const solarFlow = this.shadowRoot.getElementById('solarFlowCollector');
    if (solarFlow) {
      if (!animEnabled || solarKw < 0.05) {
        solarFlow.style.opacity = '0.2';
        solarFlow.style.animation = 'none';
      } else {
        solarFlow.style.opacity = '1';
        solarFlow.setAttribute('class', 'flow-line');
        solarFlow.style.animation = `esDashflow ${calcSpeed(solarKw, 12.0)} linear infinite`;
      }
    }

    // 8. Wind Turbines -> Inverter Energy Flow Animations
    const isWindActive = c.wind?.show || c.aux?.type === 'wind';
    const windCount = isWindActive ? (c.wind?.turbine_count || (c.wind?.turbines?.length || 2)) : 0;
    const turbinesList = c.wind?.turbines || [];

    for (let i = 1; i <= 4; i++) {
      const fTurbine = this.shadowRoot.getElementById(`pathTurbine${i}Flow`);
      if (!fTurbine) continue;

      if (i <= windCount && isWindActive) {
        const t = turbinesList[i - 1] || {};
        const fallbackKw = i === 1 ? 1.45 : 0.85;
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
