// src/card/station-3d-view.js
// Photorealistic 3D Realistic Station View Component for Energy Station Pro

export function get3DStyles() {
  return `
    /* ========================================================================== */
    /* 3D REALISTIC HARDWARE STATION STYLES                                       */
    /* ========================================================================== */
    @keyframes conduitFlow {
      from { stroke-dashoffset: 40; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes conduitFlowReverse {
      from { stroke-dashoffset: 0; }
      to { stroke-dashoffset: 40; }
    }
    @keyframes rotorSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes beaconPulse {
      0%, 100% { opacity: 0.3; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 10px #ef4444); }
    }
    @keyframes sunGlow {
      0%, 100% { filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.4)); }
      50% { filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.8)); }
    }

    .es-3d-station-container {
      position: relative;
      background: radial-gradient(circle at 50% 30%, #0c142c 0%, #050814 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 24px 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      margin-top: 14px;
      box-sizing: border-box;
      color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .es-3d-conduit-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }

    .conduit-base {
      stroke: rgba(255, 255, 255, 0.08);
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }

    .conduit-flow {
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 8 12;
      fill: none;
      animation: conduitFlow 1.2s linear infinite;
    }

    .conduit-flow-rev {
      animation: conduitFlowReverse 1.2s linear infinite;
    }

    .rotor-spinning {
      transform-origin: 100px 92px;
      animation: rotorSpin 1.6s linear infinite;
    }

    .rotor-idle {
      transform-origin: 100px 92px;
    }

    .beacon-light {
      animation: beaconPulse 1.4s ease-in-out infinite;
    }

    .sun-flare {
      animation: sunGlow 3s ease-in-out infinite;
    }

    .glow-cyan { filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6)); }
    .glow-amber { filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.6)); }
    .glow-green { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.6)); }
    .glow-red { filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.75)); }
    .glow-blue { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)); }

    /* 3D Hardware Cards & Grid */
    .es-3d-grid-top {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      position: relative;
      z-index: 20;
    }

    .es-3d-card {
      background: rgba(15, 23, 42, 0.82);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    .es-3d-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 32px -6px rgba(0, 0, 0, 0.7);
    }

    .es-3d-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .es-3d-title-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .es-3d-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .es-3d-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #cbd5e1;
    }

    .es-3d-badge {
      font-size: 11px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    .es-3d-main-power {
      font-size: 26px;
      font-weight: 900;
      font-family: 'JetBrains Mono', Consolas, monospace;
      color: #ffffff;
      line-height: 1.1;
      margin-top: 4px;
      text-align: center;
    }

    .es-3d-substatus {
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      margin-top: 3px;
    }

    /* Sub-metrics horizontal grids */
    .es-3d-subgrid {
      display: grid;
      gap: 8px;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .es-3d-metric-box {
      background: rgba(2, 6, 23, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 8px;
      text-align: center;
    }

    .es-3d-metric-label {
      font-size: 11px;
      color: #94a3b8;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .es-3d-metric-val {
      font-size: 13px;
      font-weight: 700;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    .es-3d-metric-sub {
      font-size: 10px;
      color: #64748b;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    /* CENTER INVERTER */
    .es-3d-inverter-center {
      margin: 28px auto;
      max-width: 580px;
      position: relative;
      z-index: 20;
    }

    .es-3d-inverter-card {
      background: linear-gradient(180deg, #0f172a 0%, #090e1f 100%);
      border: 1px solid rgba(6, 182, 212, 0.35);
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(6, 182, 212, 0.12);
    }

    /* BOTTOM ROW */
    .es-3d-grid-bottom {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      position: relative;
      z-index: 20;
    }

    /* BATTERY DISCHARGE RED HIGHLIGHTS */
    .es-3d-card-bat-discharge {
      border-color: rgba(239, 68, 68, 0.55) !important;
      box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.8), 0 0 24px rgba(239, 68, 68, 0.25) !important;
    }

    /* RESPONSIVE LAYOUT FOR MOBILE */
    @media (max-width: 860px) {
      .es-3d-grid-top {
        grid-template-columns: 1fr;
      }
      .es-3d-grid-bottom {
        grid-template-columns: 1fr;
      }
      .es-3d-conduit-svg {
        display: none; /* Hide SVG background conduits on narrow screens to prevent overlap */
      }
    }
  `;
}

export function render3DStation(config, t) {
  return `
    <div class="es-3d-station-container" id="station3DContainer">
      <!-- SVG CONDUIT LAYER (Exact Port-to-Port Connections) -->
      <svg class="es-3d-conduit-svg" id="station3DConduits" viewBox="0 0 1200 860" preserveAspectRatio="none">
        <defs>
          <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#fbbf24" />
          </linearGradient>
          <linearGradient id="windGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#38bdf8" />
          </linearGradient>
          <linearGradient id="gridGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#60a5fa" />
          </linearGradient>
        </defs>

        <!-- 1. SOLAR -> INVERTER CONDUIT -->
        <g id="conduitSolar3D">
          <path class="conduit-base" d="M 290 190 H 510 C 530 190, 545 205, 545 225 V 360" />
          <path class="conduit-flow glow-amber" stroke="#f59e0b" d="M 290 190 H 510 C 530 190, 545 205, 545 225 V 360" />
        </g>

        <!-- 2. WIND -> INVERTER CONDUIT -->
        <g id="conduitWind3D">
          <path class="conduit-base" d="M 600 230 V 360" />
          <path class="conduit-flow glow-cyan" stroke="#06b6d4" d="M 600 230 V 360" />
        </g>

        <!-- 3. GRID <-> INVERTER CONDUIT -->
        <g id="conduitGrid3D">
          <path class="conduit-base" d="M 910 190 H 690 C 670 190, 655 205, 655 225 V 360" />
          <path id="flowGrid3D" class="conduit-flow glow-blue" stroke="#3b82f6" d="M 910 190 H 690 C 670 190, 655 205, 655 225 V 360" />
        </g>

        <!-- 4. BATTERY <-> INVERTER CONDUIT -->
        <g id="conduitBat3D">
          <path class="conduit-base" d="M 330 600 H 510 C 530 600, 545 585, 545 565 V 500" />
          <path id="flowBat3D" class="conduit-flow glow-green" stroke="#10b981" d="M 330 600 H 510 C 530 600, 545 585, 545 565 V 500" />
        </g>

        <!-- 5. INVERTER -> HOUSE CONDUIT -->
        <g id="conduitHouse3D">
          <path class="conduit-base" d="M 655 500 V 565 C 655 585, 670 600, 690 600 H 870" />
          <path class="conduit-flow glow-cyan" stroke="#00e5ff" d="M 655 500 V 565 C 655 585, 670 600, 690 600 H 870" />
        </g>

        <!-- 6. HOUSE -> BOILER SUB-CONDUIT -->
        <g id="conduitBoiler3D">
          <path class="conduit-base" d="M 990 700 V 745" />
          <path id="flowBoiler3D" class="conduit-flow glow-amber" stroke="#f59e0b" d="M 990 700 V 745" />
        </g>
      </svg>

      <!-- TOP ROW: SOLAR, WIND, GRID -->
      <div class="es-3d-grid-top">

        <!-- 1. SOLAR ARRAY 3D -->
        <div class="es-3d-card" id="solarCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #f59e0b;"></span>
              <span class="es-3d-title">${t('solar') || 'Сонячні панелі'}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3);" id="solarYieldToday3D">
              0.0 кВт·год
            </span>
          </div>

          <div style="padding: 12px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 240 140" style="width: 170px; height: 100px;">
              <polygon points="35,115 205,115 195,122 45,122" fill="#334155" stroke="#475569" stroke-width="1.5" />
              <line x1="50" y1="95" x2="45" y2="120" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
              <line x1="190" y1="95" x2="195" y2="120" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
              <line x1="120" y1="85" x2="120" y2="120" stroke="#64748b" stroke-width="2.5" />
              <polygon points="50,95 190,95 225,35 15,35" fill="#0f172a" stroke="#38bdf8" stroke-width="2" class="sun-flare" />
              <!-- Cell matrix -->
              <polygon points="22,39 70,39 67,56 26,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="73,39 121,39 120,56 70,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="124,39 172,39 173,56 123,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="175,39 218,39 220,56 176,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="27,60 67,60 64,76 30,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="70,60 120,60 119,76 67,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="123,60 173,60 174,76 122,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="176,60 219,60 216,76 177,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="32,80 64,80 60,93 35,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="67,80 119,80 118,93 63,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="122,80 174,80 175,93 121,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="177,80 215,80 210,93 178,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <!-- Glare -->
              <polygon points="100,36 170,36 140,94 80,94" fill="white" fill-opacity="0.12" />
            </svg>
          </div>

          <div class="es-3d-main-power" id="solarPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #f59e0b;" id="solarStatus3D">Генерації немає</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 1</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv1Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv1V3D">-- V · -- A</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 2</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv2Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv2V3D">-- V · -- A</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 3</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv3Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv3V3D">-- V · -- A</div>
            </div>
          </div>
        </div>

        <!-- 2. WIND GENERATION 3D -->
        <div class="es-3d-card" id="windCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #06b6d4;"></span>
              <span class="es-3d-title">${t('wind') || 'Вітрогенерація'}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.12); color: #06b6d4; border: 1px solid rgba(6,182,212,0.3);">
              2 турбіни
            </span>
          </div>

          <div style="padding: 10px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 200 135" style="width: 150px; height: 100px;">
              <polygon points="96,92 104,92 107,130 93,130" fill="#475569" stroke="#334155" stroke-width="1" />
              <rect x="88" y="86" width="24" height="12" rx="4" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.2" />
              <circle cx="100" cy="92" r="5" fill="#0f172a" stroke="#00e5ff" stroke-width="1.5" />
              <g class="rotor-spinning" id="windRotor3D">
                <path d="M 100 92 C 98 65, 96 40, 100 25 C 104 40, 102 65, 100 92 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8" />
                <path d="M 100 92 C 120 106, 142 120, 155 125 C 147 114, 126 98, 100 92 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8" />
                <path d="M 100 92 C 80 106, 58 120, 45 125 C 53 114, 74 98, 100 92 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8" />
              </g>
            </svg>
          </div>

          <div class="es-3d-main-power" id="windPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #38bdf8;" id="windStatus3D">Штиль</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 2px;">
                <span style="color: #94a3b8;">1500W</span>
                <span style="color: #38bdf8;" id="turb1Rpm3D">0 rpm</span>
              </div>
              <div class="es-3d-metric-val" style="color: #38bdf8;" id="turb1Power3D">0.000 кВт</div>
            </div>
            <div class="es-3d-metric-box">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 2px;">
                <span style="color: #94a3b8;">Херсонець</span>
                <span style="color: #94a3b8;" id="turb2Status3D">Штиль</span>
              </div>
              <div class="es-3d-metric-val" style="color: #38bdf8;" id="turb2Power3D">0.000 кВт</div>
            </div>
          </div>
        </div>

        <!-- 3. POWER GRID 3D (ЛЕП ВЕЖА) -->
        <div class="es-3d-card" id="gridCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #3b82f6;" id="gridDot3D"></span>
              <span class="es-3d-title">${t('grid') || 'Електромережа'}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);" id="gridBadge3D">
              Живлення стабільне
            </span>
          </div>

          <div style="padding: 10px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 160 135" style="width: 140px; height: 100px;">
              <circle cx="80" cy="12" r="3.5" fill="#ef4444" id="gridBeacon3D" class="beacon-light" style="display: none;" />
              <line x1="80" y1="12" x2="45" y2="130" stroke="#64748b" stroke-width="2.2" />
              <line x1="80" y1="12" x2="115" y2="130" stroke="#64748b" stroke-width="2.2" />
              <line x1="30" y1="42" x2="130" y2="42" stroke="#94a3b8" stroke-width="2" />
              <line x1="38" y1="72" x2="122" y2="72" stroke="#94a3b8" stroke-width="2" />
              <line x1="42" y1="102" x2="118" y2="102" stroke="#64748b" stroke-width="1.8" />
              <line x1="68" y1="42" x2="89" y2="72" stroke="#475569" stroke-width="1.2" />
              <line x1="92" y1="42" x2="71" y2="72" stroke="#475569" stroke-width="1.2" />
              <line x1="62" y1="72" x2="98" y2="102" stroke="#475569" stroke-width="1.2" />
              <line x1="98" y1="72" x2="62" y2="102" stroke="#475569" stroke-width="1.2" />
              <line x1="35" y1="42" x2="35" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="125" y1="42" x2="125" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="42" y1="72" x2="42" y2="82" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="118" y1="72" x2="118" y2="82" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <circle cx="35" cy="53" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="125" cy="53" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="42" cy="83" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="118" cy="83" r="2" fill="#00e5ff" class="glow-cyan" />
            </svg>
          </div>

          <div class="es-3d-main-power" id="gridPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #60a5fa;" id="gridDirection3D">Мережа підключена</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">Напруга</div>
              <div class="es-3d-metric-val" style="color: #93c5fd;" id="gridVoltage3D">230.0 V</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">Струм</div>
              <div class="es-3d-metric-val" style="color: #93c5fd;" id="gridCurrent3D">0.0 A</div>
            </div>
          </div>
        </div>

      </div>

      <!-- CENTER ROW: DEYE HYBRID INVERTER -->
      <div class="es-3d-inverter-center">
        <div class="es-3d-inverter-card">
          <div class="es-3d-card-header">
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.15); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3);">
              ${t('inverter_title') || 'ГІБРИДНИЙ ІНВЕРТОР'}
            </span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="es-3d-dot" style="background: #10b981;" id="invDot3D"></span>
              <span class="es-3d-badge" style="background: transparent; color: #10b981; padding: 0;" id="invStatus3D">ПРАЦЮЄ (ON-GRID)</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 20px; margin: 16px 0; flex-wrap: wrap;">
            <!-- 3D Deye Hardware Body -->
            <svg viewBox="0 0 150 200" style="width: 140px; height: 180px;">
              <rect x="25" y="15" width="100" height="165" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" />
              <!-- Cooling Fins Left -->
              <line x1="20" y1="40" x2="25" y2="40" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="60" x2="25" y2="60" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="80" x2="25" y2="80" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="100" x2="25" y2="100" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="120" x2="25" y2="120" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="140" x2="25" y2="140" stroke="#64748b" stroke-width="2" />
              <!-- Cooling Fins Right -->
              <line x1="125" y1="40" x2="130" y2="40" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="60" x2="130" y2="60" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="80" x2="130" y2="80" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="100" x2="130" y2="100" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="120" x2="130" y2="120" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="140" x2="130" y2="140" stroke="#64748b" stroke-width="2" />
              <!-- Deye Logo -->
              <text x="75" y="42" font-family="sans-serif" font-weight="900" font-size="14" fill="#0284c7" text-anchor="middle">Deye</text>
              <!-- Color LCD -->
              <rect x="42" y="55" width="66" height="58" rx="5" fill="#090d16" stroke="#00e5ff" stroke-width="1.5" />
              <text x="75" y="70" font-family="monospace" font-size="7" fill="#38bdf8" text-anchor="middle">EPS LOAD</text>
              <text x="75" y="85" font-family="monospace" font-weight="bold" font-size="11" fill="#ffffff" text-anchor="middle" id="invLcdPower3D">0.00 kW</text>
              <text x="75" y="98" font-family="monospace" font-size="7" fill="#10b981" text-anchor="middle">NORMAL</text>
              <circle cx="50" cy="104" r="2" fill="#10b981" />
              <circle cx="75" cy="104" r="2" fill="#f59e0b" />
              <circle cx="100" cy="104" r="2" fill="#ef4444" />
              <line x1="28" y1="135" x2="122" y2="135" stroke="#cbd5e1" stroke-width="1.2" />
              <polygon points="75,142 84,158 66,158" fill="#f59e0b" stroke="#b45309" stroke-width="1" />
              <text x="75" y="156" font-family="sans-serif" font-weight="900" font-size="10" fill="#000" text-anchor="middle">!</text>
              <text x="75" y="172" font-family="sans-serif" font-weight="bold" font-size="6" fill="#64748b" text-anchor="middle">12kW HYBRID S3</text>
            </svg>

            <!-- Specs & Temps -->
            <div style="flex: 1; min-width: 200px;">
              <h3 style="font-size: 16px; font-weight: 800; color: #ffffff; margin: 0 0 4px 0;">Deye SUN-12K-SG01LP1-EU</h3>
              <p style="font-size: 11px; color: #94a3b8; margin: 0 0 12px 0;">1-фазний низьковольтний гібридний інвертор</p>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Температура AC</div>
                  <div class="es-3d-metric-val" style="color: #f59e0b;" id="invTempAc3D">-- °C</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Температура DC</div>
                  <div class="es-3d-metric-val" style="color: #f59e0b;" id="invTempDc3D">-- °C</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Власне споживання</div>
                  <div class="es-3d-metric-val" style="color: #22d3ee;" id="invSelfPower3D">⚡ 100 Вт</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Ефективність MPPT</div>
                  <div class="es-3d-metric-val" style="color: #10b981;">97.6% (Dual)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM ROW: BATTERY STORAGE (Left) vs HOUSE LOADS (Right) -->
      <div class="es-3d-grid-bottom">

        <!-- 4. BATTERY STORAGE SYSTEM (З ЧЕРВОНОЮ АНІМАЦІЄЮ РОЗРЯДУ) -->
        <div class="es-3d-card" id="batCardWrapper3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #10b981;" id="batDot3D"></span>
              <span class="es-3d-title">${t('battery') || 'Система накопичення (АКБ)'}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);" id="batBadge3D">
              2 Стійки · 28.8 кВт·г
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 14px 0; flex-wrap: wrap;">
            <!-- 3D Wall-Mounted Battery Unit with Digital SOC Faceplate -->
            <svg viewBox="0 0 140 180" style="width: 120px; height: 155px;">
              <rect x="15" y="15" width="110" height="150" rx="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5" />
              <rect id="batFaceplateBorder3D" x="28" y="28" width="84" height="124" rx="8" fill="#090d16" stroke="#10b981" stroke-width="1.5" />
              <circle cx="70" cy="70" r="32" fill="none" stroke="#1e293b" stroke-width="6" />
              <circle id="batSocCircle3D" cx="70" cy="70" r="32" fill="none" stroke="#10b981" stroke-width="6" stroke-dasharray="201" stroke-dashoffset="40" stroke-linecap="round" class="glow-green" />
              <text x="70" y="73" font-family="monospace" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle" id="batSocText3D">--%</text>
              <text id="batModeLabel3D" x="70" y="86" font-family="sans-serif" font-weight="bold" font-size="7" fill="#10b981" text-anchor="middle">ЗАРЯД</text>
              <!-- Indicator Bars -->
              <rect id="batBar1_3D" x="40" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar2_3D" x="56" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar3_3D" x="72" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar4_3D" x="88" y="112" width="12" height="4" rx="1" fill="#10b981" />
            </svg>

            <div style="flex: 1; min-width: 170px;">
              <div class="es-3d-main-power" style="text-align: left;" id="batPower3D">0.000 кВт</div>
              <div class="es-3d-substatus" style="text-align: left; color: #10b981;" id="batDirection3D">↓ Заряджається</div>
              <div style="font-size: 11px; color: #94a3b8; margin: 4px 0;" id="batBusStats3D">Шина: -- V · Темп: -- °C</div>
              <div class="es-3d-metric-box" style="text-align: left; margin-top: 8px;">
                <div class="es-3d-metric-label">Автономність / До повного заряду</div>
                <div class="es-3d-metric-val" style="color: #38bdf8;" id="batEstTime3D">~ --:--:--</div>
              </div>
            </div>
          </div>

          <!-- Dual Battery Racks - Spacious & Non-Squished -->
          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box" style="text-align: left;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 2px;">
                <span style="color: #cbd5e1;">Стійка 1 (АКБ 1)</span>
                <span style="color: #10b981;" id="rack1Soc3D">--%</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr auto; gap: 3px; font-size: 10px; font-family: monospace;">
                <span style="color: #94a3b8;">Потужність:</span><strong id="rack1Power3D" style="color: #10b981;">-- кВт</strong>
                <span style="color: #94a3b8;">Напруга:</span><span id="rack1V3D" style="color: #cbd5e1;">-- V</span>
                <span style="color: #94a3b8;">Температура:</span><span id="rack1T3D" style="color: #f59e0b;">-- °C</span>
                <span style="color: #94a3b8;">Дельта:</span><span id="rack1Delta3D" style="color: #38bdf8;">Δ-- мВ</span>
              </div>
            </div>

            <div class="es-3d-metric-box" style="text-align: left;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 2px;">
                <span style="color: #cbd5e1;">Стійка 2 (АКБ 2)</span>
                <span style="color: #10b981;" id="rack2Soc3D">--%</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr auto; gap: 3px; font-size: 10px; font-family: monospace;">
                <span style="color: #94a3b8;">Потужність:</span><strong id="rack2Power3D" style="color: #10b981;">-- кВт</strong>
                <span style="color: #94a3b8;">Напруга:</span><span id="rack2V3D" style="color: #cbd5e1;">-- V</span>
                <span style="color: #94a3b8;">Температура:</span><span id="rack2T3D" style="color: #f59e0b;">-- °C</span>
                <span style="color: #94a3b8;">Дельта:</span><span id="rack2Delta3D" style="color: #38bdf8;">Δ-- мВ</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. HOUSE AND GUARANTEED EPS LOADS -->
        <div class="es-3d-card" id="houseCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #00e5ff;"></span>
              <span class="es-3d-title">${t('house') || 'Гарантоване навантаження'}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.12); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3);">
              Deye EPS (220V)
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 14px 0; flex-wrap: wrap;">
            <!-- 3D Modern House Villa SVG -->
            <svg viewBox="0 0 160 140" style="width: 130px; height: 110px;">
              <ellipse cx="80" cy="125" rx="65" ry="10" fill="#000000" fill-opacity="0.5" />
              <polygon points="30,65 105,45 140,70 65,90" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
              <polygon points="30,65 65,90 65,120 30,95" fill="#334155" stroke="#475569" stroke-width="1.5" />
              <polygon points="65,90 140,70 140,100 65,120" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
              <polygon points="25,62 105,40 145,67 65,88" fill="#475569" stroke="#64748b" stroke-width="2" />
              <!-- Lit Window -->
              <polygon points="75,65 105,57 105,72 75,80" fill="#f59e0b" fill-opacity="0.9" class="glow-amber" />
              <line x1="90" y1="61" x2="90" y2="76" stroke="#78350f" stroke-width="1" />
              <polygon points="75,93 125,80 125,108 75,116" fill="#fbbf24" fill-opacity="0.85" class="glow-amber" />
              <line x1="100" y1="87" x2="100" y2="112" stroke="#78350f" stroke-width="1.2" />
              <circle cx="50" cy="98" r="3" fill="#fef08a" class="glow-amber" />
            </svg>

            <div style="flex: 1; min-width: 170px;">
              <div class="es-3d-main-power" style="text-align: left;" id="housePower3D">0.000 кВт</div>
              <div class="es-3d-substatus" style="text-align: left; color: #22d3ee;" id="houseStatus3D">Споживання будинку</div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;" id="houseDayTotal3D">Спожито за добу: -- кВт·год</div>
            </div>
          </div>

          <!-- Sub-loads Breakdown: Smart Boiler and Sockets -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.07);">
            <!-- Boiler -->
            <div class="es-3d-metric-box" style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 18px;">♨️</div>
                <div style="text-align: left;">
                  <div style="font-size: 12px; font-weight: 700; color: #ffffff;">
                    ${t('smart_boiler') || 'Розумний Бойлер (ГВП)'}
                    <span id="boilerTemp3D" style="font-size: 10px; color: #f59e0b; margin-left: 4px;">65 °C</span>
                  </div>
                  <div style="font-size: 11px; color: #f59e0b;" id="boilerStatus3D">Нагрів активний</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="es-3d-metric-val" style="color: #fde047;" id="boilerPower3D">0 Вт</div>
              </div>
            </div>

            <!-- Sockets -->
            <div class="es-3d-metric-box" style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 18px;">💡</div>
                <div style="text-align: left;">
                  <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Освітлення та розетки</div>
                  <div style="font-size: 11px; color: #94a3b8;">Побутові споживачі</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="es-3d-metric-val" style="color: #38bdf8;" id="houseOtherPower3D">0 Вт</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function update3DStation(shadowRoot, data, t) {
  if (!shadowRoot) return;

  const getEl = (id) => shadowRoot.getElementById(id);

  // 1. SOLAR
  const solarEl = getEl('solarPower3D');
  if (solarEl) solarEl.textContent = data.solarPowerStr;

  const solarStatusEl = getEl('solarStatus3D');
  if (solarStatusEl) solarStatusEl.textContent = data.solarStatusStr;

  const solarYieldEl = getEl('solarYieldToday3D');
  if (solarYieldEl) solarYieldEl.textContent = data.solarYieldTodayStr;

  if (data.pv1) {
    const pv1P = getEl('pv1Power3D');
    const pv1V = getEl('pv1V3D');
    if (pv1P) pv1P.textContent = data.pv1.powerStr;
    if (pv1V) pv1V.textContent = data.pv1.specStr;
  }
  if (data.pv2) {
    const pv2P = getEl('pv2Power3D');
    const pv2V = getEl('pv2V3D');
    if (pv2P) pv2P.textContent = data.pv2.powerStr;
    if (pv2V) pv2V.textContent = data.pv2.specStr;
  }
  if (data.pv3) {
    const pv3P = getEl('pv3Power3D');
    const pv3V = getEl('pv3V3D');
    if (pv3P) pv3P.textContent = data.pv3.powerStr;
    if (pv3V) pv3V.textContent = data.pv3.specStr;
  }

  const conduitSolar = getEl('conduitSolar3D');
  if (conduitSolar) {
    conduitSolar.style.display = data.solarPowerKw > 0.015 ? 'block' : 'none';
  }

  // 2. WIND
  const windPowerEl = getEl('windPower3D');
  if (windPowerEl) windPowerEl.textContent = data.windPowerStr;

  const windStatusEl = getEl('windStatus3D');
  if (windStatusEl) windStatusEl.textContent = data.windStatusStr;

  const rotorEl = getEl('windRotor3D');
  if (rotorEl) {
    rotorEl.className = data.windPowerKw > 0.005 ? 'rotor-spinning' : 'rotor-idle';
  }

  const turb1P = getEl('turb1Power3D');
  const turb1R = getEl('turb1Rpm3D');
  if (turb1P) turb1P.textContent = data.turb1PowerStr;
  if (turb1R) turb1R.textContent = data.turb1RpmStr;

  const turb2P = getEl('turb2Power3D');
  const turb2S = getEl('turb2Status3D');
  if (turb2P) turb2P.textContent = data.turb2PowerStr;
  if (turb2S) turb2S.textContent = data.turb2StatusStr;

  const conduitWind = getEl('conduitWind3D');
  if (conduitWind) {
    conduitWind.style.display = data.windPowerKw > 0.005 ? 'block' : 'none';
  }

  // 3. GRID & BLACKOUT
  const gridPowerEl = getEl('gridPower3D');
  if (gridPowerEl) gridPowerEl.textContent = data.gridPowerStr;

  const gridDirectionEl = getEl('gridDirection3D');
  if (gridDirectionEl) gridDirectionEl.textContent = data.gridDirectionStr;

  const gridVoltageEl = getEl('gridVoltage3D');
  if (gridVoltageEl) gridVoltageEl.textContent = data.gridVoltageStr;

  const gridCurrentEl = getEl('gridCurrent3D');
  if (gridCurrentEl) gridCurrentEl.textContent = data.gridCurrentStr;

  const gridBadgeEl = getEl('gridBadge3D');
  const gridDotEl = getEl('gridDot3D');
  const gridBeaconEl = getEl('gridBeacon3D');
  const flowGridEl = getEl('flowGrid3D');

  if (data.isBlackout) {
    if (gridBadgeEl) {
      gridBadgeEl.textContent = '🚨 ' + (t('blackout_alert') || 'БЛЕКАУТ / ВІДКЛЮЧЕНО');
      gridBadgeEl.style.cssText = 'background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.5); font-weight: bold;';
    }
    if (gridDotEl) {
      gridDotEl.style.background = '#ef4444';
      gridDotEl.className = 'es-3d-dot beacon-light';
    }
    if (gridBeaconEl) gridBeaconEl.style.display = 'block';
    if (flowGridEl) flowGridEl.style.display = 'none';
  } else {
    if (gridBadgeEl) {
      gridBadgeEl.textContent = t('grid_stable') || 'Живлення стабільне';
      gridBadgeEl.style.cssText = 'background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);';
    }
    if (gridDotEl) {
      gridDotEl.style.background = '#3b82f6';
      gridDotEl.className = 'es-3d-dot';
    }
    if (gridBeaconEl) gridBeaconEl.style.display = 'none';

    if (flowGridEl) {
      if (Math.abs(data.gridPowerKw) > 0.015) {
        flowGridEl.style.display = 'block';
        if (data.gridPowerKw > 0) {
          // Import from grid (Blue)
          flowGridEl.className = 'conduit-flow glow-blue';
          flowGridEl.setAttribute('stroke', '#3b82f6');
        } else {
          // Export / Selling to grid (Green)
          flowGridEl.className = 'conduit-flow conduit-flow-rev glow-green';
          flowGridEl.setAttribute('stroke', '#10b981');
        }
      } else {
        flowGridEl.style.display = 'none';
      }
    }
  }

  // 4. INVERTER
  const invStatusEl = getEl('invStatus3D');
  const invDotEl = getEl('invDot3D');
  if (invStatusEl) {
    invStatusEl.textContent = data.invStatusStr;
    invStatusEl.style.color = data.isBlackout ? '#f59e0b' : '#10b981';
  }
  if (invDotEl) {
    invDotEl.style.background = data.isBlackout ? '#f59e0b' : '#10b981';
  }

  const invLcdEl = getEl('invLcdPower3D');
  if (invLcdEl) invLcdEl.textContent = data.invLcdPowerStr;

  const invTempAcEl = getEl('invTempAc3D');
  if (invTempAcEl) invTempAcEl.textContent = data.invTempAcStr;

  const invTempDcEl = getEl('invTempDc3D');
  if (invTempDcEl) invTempDcEl.textContent = data.invTempDcStr;

  const invSelfEl = getEl('invSelfPower3D');
  if (invSelfEl) invSelfEl.textContent = data.invSelfStr;

  // 5. BATTERY (ЧЕРВОНА АНІМАЦІЯ ПРИ РОЗРЯДІ)
  const batPowerEl = getEl('batPower3D');
  const batDirEl = getEl('batDirection3D');
  const batSocTextEl = getEl('batSocText3D');
  const batSocCircleEl = getEl('batSocCircle3D');
  const batModeLabelEl = getEl('batModeLabel3D');
  const batCardWrapper = getEl('batCardWrapper3D');
  const batDotEl = getEl('batDot3D');
  const batBadgeEl = getEl('batBadge3D');
  const flowBatEl = getEl('flowBat3D');

  if (batSocTextEl) batSocTextEl.textContent = data.batSoc + '%';

  // Update circular dash offset (perimeter = 2 * PI * 32 = 201)
  if (batSocCircleEl) {
    const perimeter = 201;
    const offset = perimeter - (perimeter * Math.min(Math.max(data.batSoc, 0), 100)) / 100;
    batSocCircleEl.setAttribute('stroke-dashoffset', offset);
  }

  const barColor = data.isDischarging ? '#ef4444' : '#10b981';
  ['batBar1_3D', 'batBar2_3D', 'batBar3_3D', 'batBar4_3D'].forEach(id => {
    const el = getEl(id);
    if (el) el.setAttribute('fill', barColor);
  });

  if (data.isDischarging) {
    // ЯСКРАВО-ЧЕРВОНА АНІМАЦІЯ РОЗРЯДУ
    if (flowBatEl) {
      flowBatEl.style.display = 'block';
      flowBatEl.className = 'conduit-flow conduit-flow-rev glow-red';
      flowBatEl.setAttribute('stroke', '#ef4444');
    }
    if (batSocCircleEl) {
      batSocCircleEl.setAttribute('stroke', '#ef4444');
      batSocCircleEl.className = 'glow-red';
    }
    if (batModeLabelEl) {
      batModeLabelEl.textContent = t('discharging') || 'РОЗРЯД';
      batModeLabelEl.setAttribute('fill', '#ef4444');
    }
    if (batDotEl) {
      batDotEl.style.background = '#ef4444';
      batDotEl.className = 'es-3d-dot beacon-light';
    }
    if (batBadgeEl) {
      batBadgeEl.style.cssText = 'background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.4);';
    }
    if (batCardWrapper) {
      batCardWrapper.classList.add('es-3d-card-bat-discharge');
    }
    if (batDirEl) {
      batDirEl.style.color = '#ef4444';
      batDirEl.textContent = '↑ ' + (t('battery_discharging') || 'Розряджається') + ' · ' + data.batCurrentStr;
    }
    if (batPowerEl) {
      batPowerEl.style.color = '#f87171';
      batPowerEl.textContent = data.batPowerStr;
    }
  } else if (data.isCharging) {
    // ЗЕЛЕНА АНІМАЦІЯ ЗАРЯДУ
    if (flowBatEl) {
      flowBatEl.style.display = 'block';
      flowBatEl.className = 'conduit-flow glow-green';
      flowBatEl.setAttribute('stroke', '#10b981');
    }
    if (batSocCircleEl) {
      batSocCircleEl.setAttribute('stroke', '#10b981');
      batSocCircleEl.className = 'glow-green';
    }
    if (batModeLabelEl) {
      batModeLabelEl.textContent = t('charging') || 'ЗАРЯД';
      batModeLabelEl.setAttribute('fill', '#10b981');
    }
    if (batDotEl) {
      batDotEl.style.background = '#10b981';
      batDotEl.className = 'es-3d-dot';
    }
    if (batBadgeEl) {
      batBadgeEl.style.cssText = 'background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);';
    }
    if (batCardWrapper) {
      batCardWrapper.classList.remove('es-3d-card-bat-discharge');
    }
    if (batDirEl) {
      batDirEl.style.color = '#10b981';
      batDirEl.textContent = '↓ ' + (t('battery_charging') || 'Заряджається') + ' · ' + data.batCurrentStr;
    }
    if (batPowerEl) {
      batPowerEl.style.color = '#ffffff';
      batPowerEl.textContent = data.batPowerStr;
    }
  } else {
    // IDLE
    if (flowBatEl) flowBatEl.style.display = 'none';
    if (batCardWrapper) batCardWrapper.classList.remove('es-3d-card-bat-discharge');
    if (batDirEl) {
      batDirEl.style.color = '#94a3b8';
      batDirEl.textContent = t('battery_idle') || 'Очікування';
    }
    if (batPowerEl) {
      batPowerEl.style.color = '#ffffff';
      batPowerEl.textContent = data.batPowerStr;
    }
  }

  const batBusEl = getEl('batBusStats3D');
  if (batBusEl) batBusEl.textContent = data.batBusStatsStr;

  const batEstEl = getEl('batEstTime3D');
  if (batEstEl) batEstEl.textContent = data.batEstTimeStr;

  // Dual Battery Racks
  if (data.rack1) {
    const r1Soc = getEl('rack1Soc3D');
    const r1P = getEl('rack1Power3D');
    const r1V = getEl('rack1V3D');
    const r1T = getEl('rack1T3D');
    const r1D = getEl('rack1Delta3D');
    if (r1Soc) r1Soc.textContent = data.rack1.socStr;
    if (r1P) {
      r1P.textContent = data.rack1.powerStr;
      r1P.style.color = data.isDischarging ? '#f87171' : '#10b981';
    }
    if (r1V) r1V.textContent = data.rack1.voltageStr;
    if (r1T) r1T.textContent = data.rack1.tempStr;
    if (r1D) r1D.textContent = data.rack1.deltaStr;
  }
  if (data.rack2) {
    const r2Soc = getEl('rack2Soc3D');
    const r2P = getEl('rack2Power3D');
    const r2V = getEl('rack2V3D');
    const r2T = getEl('rack2T3D');
    const r2D = getEl('rack2Delta3D');
    if (r2Soc) r2Soc.textContent = data.rack2.socStr;
    if (r2P) {
      r2P.textContent = data.rack2.powerStr;
      r2P.style.color = data.isDischarging ? '#f87171' : '#10b981';
    }
    if (r2V) r2V.textContent = data.rack2.voltageStr;
    if (r2T) r2T.textContent = data.rack2.tempStr;
    if (r2D) r2D.textContent = data.rack2.deltaStr;
  }

  // 6. HOUSE & SMART BOILER
  const housePowerEl = getEl('housePower3D');
  if (housePowerEl) housePowerEl.textContent = data.housePowerStr;

  const houseStatusEl = getEl('houseStatus3D');
  if (houseStatusEl) houseStatusEl.textContent = data.houseStatusStr;

  const houseDayEl = getEl('houseDayTotal3D');
  if (houseDayEl) houseDayEl.textContent = data.houseDayTotalStr;

  const boilerPowerEl = getEl('boilerPower3D');
  const boilerTempEl = getEl('boilerTemp3D');
  const boilerStatusEl = getEl('boilerStatus3D');
  const flowBoilerEl = getEl('flowBoiler3D');

  if (boilerPowerEl) boilerPowerEl.textContent = data.boilerPowerStr;
  if (boilerTempEl) boilerTempEl.textContent = data.boilerTempStr;
  if (boilerStatusEl) boilerStatusEl.textContent = data.boilerStatusStr;

  if (flowBoilerEl) {
    flowBoilerEl.style.display = data.boilerPowerKw > 0.05 ? 'block' : 'none';
  }

  const houseOtherEl = getEl('houseOtherPower3D');
  if (houseOtherEl) houseOtherEl.textContent = data.otherPowerStr;
}
