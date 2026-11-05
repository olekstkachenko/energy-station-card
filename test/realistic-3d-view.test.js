import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_CONFIG } from '../src/card/default-config.js';
import { render3DStation, update3DStation, get3DStyles } from '../src/card/station-3d-view.js';

describe('Energy Station Card - 3D Realistic Station View & Red Discharge Animation', () => {
  test('DEFAULT_CONFIG provides view_mode: 3d', () => {
    assert.strictEqual(DEFAULT_CONFIG.view_mode, '3d');
  });

  test('render3DStation generates complete hardware structure with all IDs', () => {
    const t = (k) => ({ discharging: 'РОЗРЯД', charging: 'ЗАРЯД', blackout_alert: 'БЛЕКАУТ' }[k] || k);
    const html = render3DStation(DEFAULT_CONFIG, t);
    assert.ok(html.includes('id="station3DContainer"'));
    assert.ok(html.includes('id="solarPower3D"'));
    assert.ok(html.includes('id="pv1Power3D"'));
    assert.ok(html.includes('id="pv2Power3D"'));
    assert.ok(html.includes('id="pv3Power3D"'));
    assert.ok(html.includes('id="windPower3D"'));
    assert.ok(html.includes('id="windRotor3D"'));
    assert.ok(html.includes('id="turb1Power3D"'));
    assert.ok(html.includes('id="turb2Power3D"'));
    assert.ok(html.includes('id="gridPower3D"'));
    assert.ok(html.includes('id="gridBadge3D"'));
    assert.ok(html.includes('id="gridBeacon3D"'));
    assert.ok(html.includes('id="flowGrid3D"'));
    assert.ok(html.includes('id="invStatus3D"'));
    assert.ok(html.includes('id="invLcdPower3D"'));
    assert.ok(html.includes('id="batCardWrapper3D"'));
    assert.ok(html.includes('id="batPower3D"'));
    assert.ok(html.includes('id="batSocCircle3D"'));
    assert.ok(html.includes('id="batModeLabel3D"'));
    assert.ok(html.includes('id="flowBat3D"'));
    assert.ok(html.includes('id="rack1Soc3D"'));
    assert.ok(html.includes('id="rack2Soc3D"'));
    assert.ok(html.includes('id="housePower3D"'));
    assert.ok(html.includes('id="boilerPower3D"'));
    assert.ok(html.includes('id="boilerTemp3D"'));
  });

  test('get3DStyles provides animations, glow filters and red discharge styles', () => {
    const css = get3DStyles();
    assert.ok(css.includes('@keyframes conduitFlow'));
    assert.ok(css.includes('@keyframes conduitFlowReverse'));
    assert.ok(css.includes('@keyframes beaconPulse'));
    assert.ok(css.includes('.glow-red'));
    assert.ok(css.includes('.glow-green'));
    assert.ok(css.includes('.glow-cyan'));
    assert.ok(css.includes('.es-3d-card-bat-discharge'));
  });

  test('applies RED animation when battery is discharging', () => {
    // Create a mock shadowRoot with DOM nodes
    const elements = new Map();
    const createMockEl = (id) => {
      const el = {
        id,
        textContent: '',
        innerText: '',
        style: {},
        className: '',
        classList: {
          add: (cls) => { el.className = (el.className + ' ' + cls).trim(); },
          remove: (cls) => { el.className = el.className.replace(cls, '').trim(); },
          contains: (cls) => el.className.includes(cls)
        },
        setAttribute: (attr, val) => { el[attr] = val; }
      };
      elements.set(id, el);
      return el;
    };

    [
      'flowBat3D', 'batSocCircle3D', 'batModeLabel3D', 'batDot3D', 'batBadge3D',
      'batCardWrapper3D', 'batDirection3D', 'batPower3D', 'batSocText3D',
      'batBar1_3D', 'batBar2_3D', 'batBar3_3D', 'batBar4_3D',
      'rack1Soc3D', 'rack1Power3D', 'rack1V3D', 'rack1T3D', 'rack1Delta3D',
      'rack2Soc3D', 'rack2Power3D', 'rack2V3D', 'rack2T3D', 'rack2Delta3D'
    ].forEach(createMockEl);

    const mockRoot = {
      getElementById: (id) => elements.get(id) || null
    };

    const dischargeData = {
      isDischarging: true,
      isCharging: false,
      batPowerKw: 1.85,
      batPowerStr: '1.850 кВт',
      batSoc: 78,
      batCurrentStr: '-38.5 A',
      batBusStatsStr: 'Шина: 53.8 V · Темп: 24.5 °C',
      batEstTimeStr: '~ 05:20:10',
      rack1: { socStr: '78%', powerStr: '0.94 кВт', voltageStr: '53.8 V', tempStr: '38.2 °C', deltaStr: 'Δ12 мВ' },
      rack2: { socStr: '77%', powerStr: '0.91 кВт', voltageStr: '53.7 V', tempStr: '37.1 °C', deltaStr: 'Δ18 мВ' }
    };

    const t = (k) => ({ discharging: 'РОЗРЯД', charging: 'ЗАРЯД', blackout_alert: 'БЛЕКАУТ' }[k] || k);
    update3DStation(mockRoot, dischargeData, t);

    // Verify RED discharge styles
    const flowBat = elements.get('flowBat3D');
    assert.strictEqual(flowBat.stroke, '#ef4444');
    assert.ok(flowBat.className.includes('glow-red'));
    assert.ok(flowBat.className.includes('conduit-flow-rev'));

    const batCircle = elements.get('batSocCircle3D');
    assert.strictEqual(batCircle.stroke, '#ef4444');
    assert.strictEqual(batCircle.className, 'glow-red');

    const batLabel = elements.get('batModeLabel3D');
    assert.strictEqual(batLabel.textContent, 'РОЗРЯД');
    assert.strictEqual(batLabel.fill, '#ef4444');

    const batDot = elements.get('batDot3D');
    assert.strictEqual(batDot.style.background, '#ef4444');
    assert.ok(batDot.className.includes('beacon-light'));

    const batCard = elements.get('batCardWrapper3D');
    assert.ok(batCard.classList.contains('es-3d-card-bat-discharge'));

    const batPower = elements.get('batPower3D');
    assert.strictEqual(batPower.style.color, '#f87171');
    assert.strictEqual(batPower.textContent, '1.850 кВт');

    // Test GREEN on charge
    const chargeData = {
      isDischarging: false,
      isCharging: true,
      batPowerKw: 2.50,
      batPowerStr: '2.500 кВт',
      batSoc: 92,
      batCurrentStr: '48.2 A',
      batBusStatsStr: 'Шина: 54.4 V · Темп: 25.0 °C',
      batEstTimeStr: '~ 01:10:00'
    };

    update3DStation(mockRoot, chargeData, t);

    assert.strictEqual(flowBat.stroke, '#10b981');
    assert.ok(flowBat.className.includes('glow-green'));
    assert.strictEqual(batCircle.stroke, '#10b981');
    assert.strictEqual(batLabel.textContent, 'ЗАРЯД');
    assert.strictEqual(batLabel.fill, '#10b981');
    assert.strictEqual(batDot.style.background, '#10b981');
    assert.strictEqual(batCard.classList.contains('es-3d-card-bat-discharge'), false);
  });

  test('applies blackout mode correctly to grid tower and inverter in 3D', () => {
    const elements = new Map();
    const createMockEl = (id) => {
      const el = {
        id,
        textContent: '',
        style: {},
        className: '',
        setAttribute: (attr, val) => { el[attr] = val; }
      };
      elements.set(id, el);
      return el;
    };

    ['gridBadge3D', 'gridDot3D', 'gridBeacon3D', 'flowGrid3D', 'gridPower3D', 'gridVoltage3D', 'gridCurrent3D', 'gridDirection3D', 'invStatus3D', 'invDot3D'].forEach(createMockEl);

    const mockRoot = {
      getElementById: (id) => elements.get(id) || null
    };

    const blackoutData = {
      isBlackout: true,
      gridPowerKw: 0,
      gridPowerStr: '0.000 кВт',
      gridDirectionStr: 'Мережа знеструмлена!',
      gridVoltageStr: '0.0 V',
      gridCurrentStr: '0.0 A',
      invStatusStr: 'АВТОНОМНИЙ РЕЖИМ (EPS)'
    };

    const t = (k) => ({ discharging: 'РОЗРЯД', charging: 'ЗАРЯД', blackout_alert: 'БЛЕКАУТ' }[k] || k);
    update3DStation(mockRoot, blackoutData, t);

    const gridBadge = elements.get('gridBadge3D');
    assert.ok(gridBadge.textContent.includes('БЛЕКАУТ'));

    const gridBeacon = elements.get('gridBeacon3D');
    assert.strictEqual(gridBeacon.style.display, 'block');

    const flowGrid = elements.get('flowGrid3D');
    assert.strictEqual(flowGrid.style.display, 'none');

    const invStatus = elements.get('invStatus3D');
    assert.strictEqual(invStatus.textContent, 'АВТОНОМНИЙ РЕЖИМ (EPS)');
  });

  test('synchronizes full station telemetry with user scenario without crashing on SVG className in Firefox', () => {
    const elements = new Map();
    const createMockEl = (id) => {
      const el = {
        id,
        textContent: '',
        style: {},
        className: '',
        classList: {
          add: (cls) => { el.className = (el.className + ' ' + cls).trim(); },
          remove: (cls) => { el.className = el.className.replace(cls, '').trim(); },
          contains: (cls) => el.className.includes(cls)
        },
        setAttribute: (attr, val) => { el[attr] = val; }
      };
      elements.set(id, el);
      return el;
    };

    [
      'solarPower3D', 'solarStatus3D', 'solarYieldToday3D',
      'pv1Power3D', 'pv1V3D', 'pv2Power3D', 'pv2V3D', 'pv3Power3D', 'pv3V3D',
      'conduitSolar3D', 'windPower3D', 'windStatus3D', 'windRotor3D',
      'turb1Power3D', 'turb1Rpm3D', 'turb2Power3D', 'turb2Status3D', 'conduitWind3D',
      'gridPower3D', 'gridDirection3D', 'gridVoltage3D', 'gridCurrent3D',
      'gridBadge3D', 'gridDot3D', 'gridBeacon3D', 'flowGrid3D',
      'invStatus3D', 'invDot3D', 'invLcdPower3D', 'invTempAc3D', 'invTempDc3D', 'invSelfPower3D',
      'batPower3D', 'batDirection3D', 'batSocText3D', 'batSocCircle3D', 'batModeLabel3D',
      'batCardWrapper3D', 'batDot3D', 'batBadge3D', 'flowBat3D', 'batBusStats3D', 'batEstTime3D',
      'batBar1_3D', 'batBar2_3D', 'batBar3_3D', 'batBar4_3D',
      'rack1Soc3D', 'rack1Power3D', 'rack1V3D', 'rack1T3D', 'rack1Delta3D',
      'rack2Soc3D', 'rack2Power3D', 'rack2V3D', 'rack2T3D', 'rack2Delta3D',
      'housePower3D', 'houseStatus3D', 'houseDayTotal3D',
      'boilerPower3D', 'boilerTemp3D', 'boilerStatus3D', 'flowBoiler3D', 'houseOtherPower3D'
    ].forEach(createMockEl);

    // Specifically test that windRotor3D as SVG element (with setter that throws if className is assigned directly) does not crash
    Object.defineProperty(elements.get('windRotor3D'), 'className', {
      get() { return this._cls || ''; },
      set(val) { throw new TypeError('setting getter-only property "className"'); }
    });

    const mockRoot = {
      getElementById: (id) => elements.get(id) || null
    };

    const liveData = {
      solarPowerKw: 0.215,
      solarPowerStr: '0.215 кВт',
      solarStatusStr: 'Генерація активна',
      solarYieldTodayStr: '11.0 кВт·год',
      pv1: { powerStr: '0.058 кВт', specStr: '195.3 V · 0.30 A' },
      pv2: { powerStr: '0.081 кВт', specStr: '183.9 V · 0.40 A' },
      pv3: { powerStr: '0.076 кВт', specStr: '205.4 V · 0.30 A' },
      windPowerKw: 0.004,
      windPowerStr: '0.004 кВт',
      windStatusStr: 'Штиль',
      turb1PowerStr: '0.000 кВт',
      turb1RpmStr: '90 rpm',
      turb2PowerStr: '-0.001 кВт',
      turb2StatusStr: 'Штиль',
      gridPowerKw: 0,
      gridPowerStr: '0.000 кВт',
      gridDirectionStr: 'ВИМКНЕНО',
      gridVoltageStr: '8.8 V',
      gridCurrentStr: '0.0 A',
      isBlackout: true,
      invStatusStr: 'АВТОНОМНИЙ РЕЖИМ (EPS)',
      invLcdPowerStr: '1.56 kW',
      invTempAcStr: '41.20 °C',
      invTempDcStr: '38.80 °C',
      invSelfStr: '⚡ 214 Вт',
      batPowerKw: 1.564,
      batPowerStr: '1.564 кВт',
      batSoc: 82,
      isDischarging: true,
      isCharging: false,
      batCurrentStr: '2.96 A',
      batBusStatsStr: 'Шина: 52.85 V · Темп: 25.0 °C',
      batEstTimeStr: '~23.70 кВт·год',
      rack1: { socStr: '84%', powerStr: '0.62 кВт', voltageStr: '52.9 V', tempStr: '30.5 °C', deltaStr: 'Δ6 мВ' },
      rack2: { socStr: '85%', powerStr: '0.63 кВт', voltageStr: '52.9 V', tempStr: '16.0 °C', deltaStr: 'Δ11 мВ' },
      housePowerKw: 1.564,
      housePowerStr: '1.564 кВт',
      houseStatusStr: 'Живлення від батареї (EPS)',
      houseDayTotalStr: 'Спожито за добу: 21.3 кВт·год',
      boilerPowerKw: 1.127,
      boilerPowerStr: '1.127 кВт',
      boilerTempStr: '65 °C',
      boilerStatusStr: 'Нагрів активний',
      otherPowerStr: '0.437 кВт'
    };

    const t = (k) => ({ discharging: 'РОЗРЯД', charging: 'ЗАРЯД', blackout_alert: 'БЛЕКАУТ' }[k] || k);
    update3DStation(mockRoot, liveData, t);

    // Verify all parts updated without error
    assert.strictEqual(elements.get('solarPower3D').textContent, '0.215 кВт');
    assert.strictEqual(elements.get('pv1Power3D').textContent, '0.058 кВт');
    assert.strictEqual(elements.get('pv2Power3D').textContent, '0.081 кВт');
    assert.strictEqual(elements.get('pv3Power3D').textContent, '0.076 кВт');
    assert.strictEqual(elements.get('gridVoltage3D').textContent, '8.8 V');
    assert.strictEqual(elements.get('invTempAc3D').textContent, '41.20 °C');
    assert.strictEqual(elements.get('invTempDc3D').textContent, '38.80 °C');
    assert.strictEqual(elements.get('invSelfPower3D').textContent, '⚡ 214 Вт');
    assert.strictEqual(elements.get('batPower3D').textContent, '1.564 кВт');
    assert.strictEqual(elements.get('batSocText3D').textContent, '82%');
    assert.strictEqual(elements.get('rack1Soc3D').textContent, '84%');
    assert.strictEqual(elements.get('rack1Power3D').textContent, '0.62 кВт');
    assert.strictEqual(elements.get('rack2Soc3D').textContent, '85%');
    assert.strictEqual(elements.get('rack2Power3D').textContent, '0.63 кВт');
    assert.strictEqual(elements.get('housePower3D').textContent, '1.564 кВт');
    assert.strictEqual(elements.get('boilerPower3D').textContent, '1.127 кВт');
  });
});
