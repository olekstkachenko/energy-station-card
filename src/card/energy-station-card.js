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
          max-width: 1400px;
          margin: 0 auto;
          padding: 22px 28px 24px 28px;
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
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
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
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
        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container">
        
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
          <div style="display: flex; align-items: center; gap: 8px;">
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
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">Сумарно PV</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24;">
              12,000 кВт
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID, NON-ESSENTIAL & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; display: flex; flex-direction: column; gap: 3px; align-items: flex-end; margin-bottom: 2px;">
              <div>Імпорт <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div>Експорт <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8;">${ICONS.grid_tower}</div>
              <div class="es-node-title">Мережа</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">← ЕКСПОРТ</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(c.grid?.show_non_essential && c.grid?.non_essential_power_entity) ? '' : 'hidden'}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${ICONS.house_outline || ICONS.house}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c.grid?.show_car && c.grid?.car_power_entity) ? '' : 'hidden'}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${ICONS.car}</div>
              <div class="es-node-title" id="carTitle">${c.grid?.car_title || 'Авто'}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">0.000 кВт</div>
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
                <div class="es-inverter-title">Гібридний інвертор</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 кВт</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${c.inverter?.show_self_consumption !== false ? 'flex' : 'none'}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">⚡ Власне:</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 Вт</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${c.aux?.type === 'none' || c.aux?.type === 'wind' ? 'hidden' : ''}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${ICONS[c.aux?.type] || ICONS.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${(c.aux?.type === 'microinverter' && (!c.aux?.title || c.aux?.title === 'Вітрогенератор')) ? 'Мікроінвертор' : (c.aux?.title || 'Мікроінвертор')}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${c.aux?.subtitle || 'Джерело → GEN'}</div>
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
              Будинок <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${ICONS.house}</div>
              <div class="es-node-title">Гарантоване</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">8,000 кВт</div>
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
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase;">Заряд</div>
              <div id="batChargeDaily" style="color: #34d399; font-weight: 700; font-size: 13px;">4,30 kWh</div>
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-top: 2px;">Розряд</div>
              <div id="batDischargeDaily" style="color: #fbbf24; font-weight: 700; font-size: 13px;">6,10 kWh</div>
            </div>

            <!-- Center SoC & Power (Icon and 'ГОЛОВНА БАТАРЕЯ' removed as requested) -->
            <div class="es-bat-hub-soc-col" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 15px; font-weight: 700; color: #34d399; margin: 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <span style="font-size: 20px; font-weight: 900; color: #f8fafc;">3,000 кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">Заряд ↓</span>
              </div>
            </div>

            <!-- Right Telemetry ('До резерву 20%' and progress bar removed as requested) -->
            <div class="es-bat-hub-right-col es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 3px;">
              <div id="batVoltVal" style="color: #6ee7b7; font-weight: 700;">53,24 V</div>
              <div id="batCurrentVal" style="color: #38bdf8; font-weight: 700;">-56,30 A</div>
              <div id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;">9,00 kWh</div>
            </div>
          </div>

          <!-- Battery Spacer (Conduits drawn on energyFlowCanvas) -->
          <div class="es-bus-container" id="batteryBusContainer" style="height: 44px; width: 100%;"></div>

          <!-- Parallel Modules Rack -->
          <div class="es-battery-rack" id="batteryRackContainer"></div>

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
      batReserveSoc: root.getElementById('batReserveSoc'),
      batReserveProgressBar: root.getElementById('batReserveProgressBar'),
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
          <div style="width: 22px; height: 22px; color: #fbbf24;">${ICONS.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${strName}</span>
        <span class="es-pv-val es-mono" id="pvVal_${i}">1,200 кВт</span>
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

    for (let i = 1; i <= count; i++) {
      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      const modName = mod.name || `Батарея ${i}`;
      const soc = defaultSocs[(i - 1) % defaultSocs.length];
      const volt = defaultVolts[(i - 1) % defaultVolts.length];

      const div = document.createElement('div');
      div.className = 'es-battery-pack-card glow-battery clickable-node';
      div.id = `batPackCard_${i}`;
      div.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${ICONS.battery_vertical}</div>
        <span class="es-bat-name">${modName}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${soc}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${i}">${volt.toFixed(2).replace('.', ',')} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${i}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
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

    for (let i = 1; i <= 8; i++) {
      const badge = root.getElementById(`batBranchBadge_${i}`);
      const mod = c.battery?.modules?.[i - 1] || c.battery?.module_entities?.[i - 1] || {};
      badge?.addEventListener('click', () => {
        const ent = mod.power_entity || mod.current_entity || mod.soc_entity || c.battery?.soc_entity;
        this._fireMoreInfo(ent);
      });
    }
  }

  _updateValues() {
    if (!this._nodes.dailySolarYield) return;
    const c = this._config || DEFAULT_CONFIG;

    // 1. Solar
    const pvCount = c.solar?.pv_count || (c.solar?.strings?.length || 3);
    let calculatedTotalPvKw = 0;
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

    // Total PV power: use sensor if available, otherwise automatically use sum of all strings
    const sPvTotal = this._getEntityState(c.solar?.total_power_entity);
    let totalSolarKw = 0;
    if (sPvTotal) {
      totalSolarKw = this._formatPower(sPvTotal).kw;
    } else {
      totalSolarKw = calculatedTotalPvKw;
    }
    this._nodes.totalPvPowerBadge.innerText = `${totalSolarKw.toFixed(3)} кВт`;

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

          // RPM / Wind Speed telemetry: ONLY show if valid sensor entity exists and has a numeric state > 0
          const rpmEntity = t.rpm_entity || t.speed_entity;
          const sRpm = (rpmEntity && this._hass?.states[rpmEntity]) ? this._getEntityState(rpmEntity) : null;
          const rpmBox = this.shadowRoot.getElementById(`turbineRpmBox_${i + 1}`);
          if (rpmBox) {
            const hasValidRpm = sRpm &&
              sRpm.raw !== 'unavailable' &&
              sRpm.raw !== 'unknown' &&
              typeof sRpm.val === 'number' &&
              !isNaN(sRpm.val) &&
              sRpm.val > 0;
            if (hasValidRpm) {
              rpmBox.style.display = 'inline';
              if (rpmVal) rpmVal.innerText = Math.round(sRpm.val);
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
        const auxFormatted = this._formatPower(sAux, 2.0);
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

    // 3. Grid
    const sGridPower = this._getEntityState(c.grid?.power_entity);
    const rawGridKw = sGridPower ? (sGridPower.unit === 'W' ? sGridPower.val / 1000 : sGridPower.val) : 0;
    const powerSign = c.grid?.power_sign || (c.grid?.invert_power ? 'inverted' : 'deye');
    const sellingEnabled = c.grid?.selling_enabled === true;
    const thresholdKw = (c.grid?.min_power_threshold !== undefined ? c.grid.min_power_threshold : 50) / 1000;

    let isExport = false;
    let isImport = false;
    const absGridKw = Math.abs(rawGridKw);

    if (absGridKw >= thresholdKw) {
      if (powerSign === 'deye') {
        // Deye standard: Positive (+) = Import from grid, Negative (-) = Export to grid
        if (rawGridKw < 0) {
          isExport = true;
        } else {
          isImport = true;
        }
      } else {
        // Inverted: Positive (+) = Export to grid, Negative (-) = Import from grid
        if (rawGridKw > 0) {
          isExport = true;
        } else {
          isImport = true;
        }
      }
    }

    // If station does not sell to the grid (selling_enabled === false), never animate or flag export!
    if (isExport && !sellingEnabled) {
      isExport = false;
    }

    if (this._nodes.gridPowerVal) {
      this._nodes.gridPowerVal.innerText = `${absGridKw.toFixed(3)} кВт`;
      if (isExport) {
        this._nodes.gridPowerVal.style.color = '#34d399';
      } else if (isImport) {
        this._nodes.gridPowerVal.style.color = '#38bdf8';
      } else {
        this._nodes.gridPowerVal.style.color = '#94a3b8';
      }
    }

    if (this._nodes.gridDirectionLabel) {
      if (isExport) {
        this._nodes.gridDirectionLabel.innerText = '← Експорт';
        this._nodes.gridDirectionLabel.style.color = '#34d399';
      } else if (isImport) {
        this._nodes.gridDirectionLabel.innerText = '→ Імпорт';
        this._nodes.gridDirectionLabel.style.color = '#38bdf8';
      } else {
        this._nodes.gridDirectionLabel.innerText = 'Мережа';
        this._nodes.gridDirectionLabel.style.color = '#64748b';
      }
    }

    const sGridImport = this._getEntityState(c.grid?.import_daily_entity);
    this._nodes.gridImportDaily.innerText = sGridImport ? `${sGridImport.val.toFixed(2)} kWh` : '0.00 kWh';

    const sGridExport = this._getEntityState(c.grid?.export_daily_entity);
    this._nodes.gridExportDaily.innerText = sGridExport ? `${sGridExport.val.toFixed(2)} kWh` : '0.00 kWh';

    // Non-essential & Car (Hidden by default unless entity configured or show explicitly enabled)
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
      // If power is 0 or not reported, check battery current sign
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

    if (this._nodes.masterBatteryFlowHint) {
      let stateText = 'Очікування';
      let stateColor = '#94a3b8';
      if (isCharging) {
        stateText = 'Заряд ↓';
        stateColor = '#34d399';
      } else if (isDischarging) {
        stateText = 'Розряд ↑';
        stateColor = '#f87171';
      }
      this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${absBatKw.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${stateColor}; font-weight: 700; font-size: 14px;">${stateText}</span>`;
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

    // 5. Inverter Self-Consumption & Essential House Loads Calculation
    const gridInKw = isImport ? absGridKw : 0;
    const batOutKw = isDischarging ? absBatKw : 0;
    const totalInflowKw = totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + gridInKw + batOutKw;

    const batInKw = isCharging ? absBatKw : 0;
    const gridOutKw = isExport ? absGridKw : 0;
    const totalOutflowKnownKw = batInKw + gridOutKw + nonEssKw + carKw;

    // Net remaining power available for House load and Inverter self-consumption
    const netAvailableKw = Math.max(0, totalInflowKw - totalOutflowKnownKw);

    // Inverter Self-Consumption
    const sSelf = this._getEntityState(c.inverter?.self_consumption_entity);
    let selfConsumptionKw = 0;

    const sEss = this._getEntityState(c.load?.essential_power_entity);
    const isAutoCalculateHouse = c.load?.auto_calculate !== false;
    const hasValidPositiveMeasuredHouse = Boolean(sEss && typeof sEss.val === 'number' && !isNaN(sEss.val) && sEss.val > 0 && !isAutoCalculateHouse);

    if (sSelf && typeof sSelf.val === 'number' && !isNaN(sSelf.val)) {
      selfConsumptionKw = Math.max(0, sSelf.unit === 'W' ? sSelf.val / 1000 : sSelf.val);
    } else if (hasValidPositiveMeasuredHouse) {
      // If house load is explicitly measured and positive: Inverter loss is the unmeasured residue!
      const measuredHouseKw = sEss.unit === 'W' ? sEss.val / 1000 : sEss.val;
      selfConsumptionKw = Math.max(0, netAvailableKw - measuredHouseKw);
    } else {
      // House load is auto-calculated: use nominal standby power (default 100 W)
      const standbyWatts = (c.inverter?.standby_power !== undefined) ? c.inverter.standby_power : 100;
      const nominalLossKw = standbyWatts / 1000;
      selfConsumptionKw = Math.min(netAvailableKw, nominalLossKw);
    }

    // Essential House Load (Гарантоване)
    let essentialKw = 0;
    if (isAutoCalculateHouse || !sEss || typeof sEss.val !== 'number' || isNaN(sEss.val) || sEss.val <= 0) {
      // Auto-calculate from balance: Net Available - Inverter Self Consumption
      essentialKw = Math.max(0, netAvailableKw - selfConsumptionKw);
    } else {
      // Explicit sensor configured and positive
      essentialKw = Math.max(0, sEss.unit === 'W' ? sEss.val / 1000 : sEss.val);
    }

    // Update Inverter Self-Consumption display
    if (this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal) {
      if (c.inverter?.show_self_consumption !== false) {
        this._nodes.inverterSelfConsumptionBox.style.display = 'flex';
        if (selfConsumptionKw < 1.0) {
          this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(selfConsumptionKw * 1000)} Вт`;
        } else {
          this._nodes.inverterSelfConsumptionVal.innerText = `${selfConsumptionKw.toFixed(3)} кВт`;
        }
      } else {
        this._nodes.inverterSelfConsumptionBox.style.display = 'none';
      }
    }

    // Update Essential House Load display
    this._nodes.essentialPowerVal.innerText = `${essentialKw.toFixed(3)} кВт`;

    const sHouseDaily = this._getEntityState(c.load?.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = sHouseDaily ? `${sHouseDaily.val.toFixed(2)} kWh` : '12,40 kWh';

    // Subloads
    let subloadsTotalKw = 0;
    (c.load?.subloads || []).forEach((sub, idx) => {
      const subVal = this.shadowRoot.getElementById(`subloadVal_${idx}`);
      const sSub = this._getEntityState(sub.entity);
      const formatted = this._formatPower(sSub, 2.0);
      subloadsTotalKw += formatted.kw;
      if (subVal) {
        subVal.innerText = formatted.str;
      }
    });

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

    if (this._nodes.batCapacityVal) {
      const capVal = invCapVal !== null ? invCapVal : totalModulesCapacity;
      this._nodes.batCapacityVal.innerText = `${capVal.toFixed(2).replace('.', ',')} kWh`;
    }

    const sBatChg = this._getEntityState(c.battery?.charge_daily_entity);
    this._nodes.batChargeDaily.innerText = sBatChg ? `${sBatChg.val.toFixed(2)} kWh` : '4,30 kWh';

    const sBatDis = this._getEntityState(c.battery?.discharge_daily_entity);
    this._nodes.batDischargeDaily.innerText = sBatDis ? `${sBatDis.val.toFixed(2)} kWh` : '6,10 kWh';

    // Battery modules (SOC, Current, Voltage, Power, Temperature)
    const batModulesData = [];
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

      // Values with realistic fallbacks matching user setup (82% / 85%, 54.1V / 54.0V, 18.4A / 25.2A, 38.2° / 21.0°)
      const socNum = sModSoc ? sModSoc.val : (i === 1 ? 82 : (i === 2 ? 85 : 75));
      const voltNum = sModVolt ? sModVolt.val : (i === 1 ? 54.1 : (i === 2 ? 54.0 : 52.4));
      const currNum = sModCurr ? sModCurr.val : (i === 1 ? 18.4 : (i === 2 ? 25.2 : 8.2));
      const tempNum = sModTemp ? sModTemp.val : (i === 1 ? 38.2 : (i === 2 ? 21.0 : 21.5));

      let kwNum = 0;
      if (sModPwr) {
        kwNum = Math.abs(this._formatPower(sModPwr).kw);
      } else {
        // Calculate P = U * I in kW
        kwNum = (voltNum * Math.abs(currNum)) / 1000.0;
      }

      if (packSoc) packSoc.innerText = `${socNum.toFixed(0)}%`;
      if (packVolt) packVolt.innerText = `${voltNum.toFixed(1)} V`;
      if (packCurr) packCurr.innerText = `${Math.abs(currNum).toFixed(1)} A`;
      if (packPower) packPower.innerText = `${kwNum.toFixed(2)} кВт`;
      if (packTempVal) packTempVal.innerText = `${tempNum.toFixed(1)}`;

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
          branchBadge.innerHTML = `<span>0.00 кВт</span>`;
        } else if (isChg) {
          branchBadge.className = 'es-bat-branch-badge es-mono charge';
          branchBadge.innerHTML = `<span>${kwNum.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`;
        } else {
          branchBadge.className = 'es-bat-branch-badge es-mono discharge';
          branchBadge.innerHTML = `<span>${kwNum.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`;
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

      batModulesData.push({ kwNum, isChg });
    }

    // Update live animated SVG energy flow paths and speed/direction
    this._updateFlowPaths();
    this._updateFlowAnimations(
      rawGridKw,
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
      const c = this._config || DEFAULT_CONFIG;

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
          const lineY = Math.round(rInv.top - cRect.top + rInv.height * 0.55);
          const p1X = Math.round(rGrid.right - cRect.left);
          const p2X = Math.round(rInv.left - cRect.left);
          const p1Y = Math.round(rGrid.top - cRect.top + rGrid.height * 0.50);

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
          const lineY = Math.round(rInv.top - cRect.top + rInv.height * 0.55);
          const p1X = Math.round(rInv.right - cRect.left);
          const p2X = Math.round(rLoad.left - cRect.left);
          const p2Y = Math.round(rLoad.top - cRect.top + rLoad.height * 0.50);

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

          const x1 = Math.round(rFirst.left - svgRect.left + rFirst.width / 2);
          const x2 = Math.round(rLast.left - svgRect.left + rLast.width / 2);
          const y = 13;

          let stemX = Math.round((x1 + x2) / 2);
          if (essNode) {
            const rEss = essNode.getBoundingClientRect();
            stemX = Math.round(rEss.left - svgRect.left + rEss.width / 2);
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
                const cx = Math.round(cr.left - svgRect.left + cr.width / 2);
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
