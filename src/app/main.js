import '../card/energy-station-card.js';
import '../card/energy-station-card-editor.js';
import { PRESETS } from './presets.js';
import { HomeAssistantClient } from './ha-client.js';

// Application State
const appState = {
  isSimulating: true,
  currentPreset: 'deye_esphome',
  config: JSON.parse(JSON.stringify(PRESETS.deye_esphome.config)),
  haClient: null,
  haConnected: false
};

// Realistic mock values state
const mockTelemetry = {
  pvTotal: 12.0,
  pvDaily: 48.6,
  inverterPower: 8.0,
  acTemp: 41.2,
  dcTemp: 38.4,
  volt: 231.45,
  current: 8.6,
  freq: 50.01,
  gridPower: 2.0,
  gridImport: 3.1,
  gridExport: 4.8,
  carPower: 1.0,
  auxPower: 2.0,
  essentialPower: 8.0,
  houseDaily: 12.4,
  batSoc: 80.0,
  batPower: 3.0,
  batVolt: 53.24,
  batCurrent: -56.3,
  batCap: 12.80,
  batCharge: 4.3,
  batDischarge: 6.1
};

// DOM references
let cardElement = null;
let editorElement = null;

window.addEventListener('DOMContentLoaded', () => {
  cardElement = document.getElementById('energyStationCard');
  editorElement = document.getElementById('cardEditor');

  // Initialize card config
  cardElement.setConfig(appState.config);
  editorElement.setConfig(appState.config);

  // Listen to configuration changes from visual editor
  editorElement.addEventListener('config-changed', (e) => {
    appState.config = e.detail.config;
    cardElement.setConfig(appState.config);
    updateYamlDisplay();
  });

  // Setup UI event listeners
  setupControls();
  setupSimulationLoop();
  updateYamlDisplay();
});

function setupControls() {
  // Presets select
  const presetSelect = document.getElementById('presetSelect');
  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => {
      const presetKey = e.target.value;
      if (PRESETS[presetKey]) {
        appState.currentPreset = presetKey;
        appState.config = JSON.parse(JSON.stringify(PRESETS[presetKey].config));
        cardElement.setConfig(appState.config);
        editorElement.setConfig(appState.config);
        updateYamlDisplay();
        showToast(`Застосовано пресет: ${PRESETS[presetKey].name}`);
      }
    });
  }

  // Simulation Toggle button
  const simToggleBtn = document.getElementById('simToggleBtn');
  const simDot = document.getElementById('simDot');
  const simText = document.getElementById('simText');
  if (simToggleBtn) {
    simToggleBtn.addEventListener('click', () => {
      appState.isSimulating = !appState.isSimulating;
      if (appState.isSimulating) {
        simDot.style.background = '#10b981';
        simDot.style.boxShadow = '0 0 8px #10b981';
        simText.innerText = 'Симуляція: Увімк';
        showToast('Симуляція активна');
      } else {
        simDot.style.background = '#64748b';
        simDot.style.boxShadow = 'none';
        simText.innerText = 'Симуляція: Пауза';
        showToast('Симуляцію призупинено');
      }
    });
  }

  // Modals
  setupModal('btnOpenSettings', 'settingsModal', 'btnCloseSettings');
  setupModal('btnOpenHaConnect', 'haConnectModal', 'btnCloseHaConnect');
  setupModal('btnOpenExportYaml', 'exportYamlModal', 'btnCloseExportYaml');

  // HA WebSocket Connect
  const btnConnectHa = document.getElementById('btnConnectHa');
  if (btnConnectHa) {
    btnConnectHa.addEventListener('click', () => {
      const url = document.getElementById('haUrlInput').value.trim();
      const token = document.getElementById('haTokenInput').value.trim();
      if (!url) {
        alert('Введіть URL адресу вашого Home Assistant');
        return;
      }
      initHaConnection(url, token);
    });
  }

  // Copy YAML
  const btnCopyYaml = document.getElementById('btnCopyYaml');
  if (btnCopyYaml) {
    btnCopyYaml.addEventListener('click', () => {
      const yaml = document.getElementById('yamlCodeBlock').innerText;
      navigator.clipboard.writeText(yaml).then(() => {
        showToast('Lovelace YAML скопійовано в буфер обміну!');
      });
    });
  }

  // Fullscreen
  const btnFullscreen = document.getElementById('btnFullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    });
  }
}

function setupModal(triggerId, modalId, closeId) {
  const trigger = document.getElementById(triggerId);
  const modal = document.getElementById(modalId);
  const close = document.getElementById(closeId);

  if (trigger && modal) {
    trigger.addEventListener('click', () => {
      modal.classList.add('active');
      if (modalId === 'exportYamlModal') updateYamlDisplay();
    });
  }

  if (close && modal) {
    close.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// Home Assistant WebSocket live connection
function initHaConnection(url, token) {
  const statusEl = document.getElementById('haStatusMsg');
  const dotEl = document.getElementById('haNavDot');
  const textEl = document.getElementById('haNavStatusText');

  appState.haClient = new HomeAssistantClient({
    url,
    token,
    onStatusChange: (status, message) => {
      if (statusEl) statusEl.innerText = message;
      if (status === 'connected') {
        appState.haConnected = true;
        appState.isSimulating = false; // Turn off mock simulation when real HA is connected!
        if (dotEl) dotEl.style.background = '#10b981';
        if (textEl) textEl.innerText = 'HA Live';
        showToast('Успішне підключення до Home Assistant!');
        document.getElementById('haConnectModal')?.classList.remove('active');
      } else if (status === 'error') {
        appState.haConnected = false;
        if (dotEl) dotEl.style.background = '#ef4444';
        if (textEl) textEl.innerText = 'Помилка HA';
      } else {
        if (dotEl) dotEl.style.background = '#f59e0b';
        if (textEl) textEl.innerText = 'З’єднання...';
      }
    },
    onStateChange: (states) => {
      // Pass real states to the card!
      cardElement.hass = {
        states,
        callService: (domain, service, serviceData) => {
          console.log('Call HA service:', domain, service, serviceData);
        }
      };
    }
  });

  appState.haClient.connect();
}

// Continuous simulation loop for testing
function setupSimulationLoop() {
  const feedMockData = () => {
    if (!appState.isSimulating || appState.haConnected) return;

    // Subtle natural fluctuations
    mockTelemetry.pvTotal = Math.max(0, mockTelemetry.pvTotal + (Math.random() - 0.49) * 0.15);
    mockTelemetry.volt = 230 + (Math.random() - 0.5) * 3;
    mockTelemetry.freq = 50 + (Math.random() - 0.5) * 0.04;
    mockTelemetry.current = 8.5 + (Math.random() - 0.5) * 0.4;
    mockTelemetry.essentialPower = 7.8 + (Math.random() - 0.5) * 0.3;

    // Create a mock hass object with states matching whatever entity IDs are configured
    const c = appState.config;
    const states = {};

    const addState = (entityId, stateVal, unit = 'kW') => {
      if (!entityId) return;
      states[entityId] = {
        state: typeof stateVal === 'number' ? stateVal.toFixed(2) : stateVal,
        attributes: { unit_of_measurement: unit }
      };
    };

    addState(c.solar?.total_power_entity, mockTelemetry.pvTotal, 'kW');
    addState(c.solar?.daily_yield_entity, mockTelemetry.pvDaily, 'kWh');

    // Simulate individual PV strings voltage, current, power
    const pvStrCount = c.solar?.pv_count || 3;
    const baseVolts = [382.4, 376.1, 391.8, 385.0, 379.5, 388.2];
    const baseCurrs = [3.25, 3.08, 3.62, 3.15, 3.40, 3.30];
    for (let sIdx = 0; sIdx < pvStrCount; sIdx++) {
      const sNum = sIdx + 1;
      const sConf = c.solar?.strings?.[sIdx] || {};
      const sV = (baseVolts[sIdx % baseVolts.length] + (Math.random() - 0.5) * 1.5);
      const sI = (baseCurrs[sIdx % baseCurrs.length] + (Math.random() - 0.5) * 0.1);
      const sP = (sV * sI) / 1000.0;

      addState(sConf.voltage_entity || `sensor.deye_12k_inverter_pv${sNum}_voltage`, sV, 'V');
      addState(sConf.current_entity || `sensor.deye_12k_inverter_pv${sNum}_current`, sI, 'A');
      addState(sConf.power_entity || `sensor.deye_12k_inverter_pv${sNum}_power`, sP, 'kW');
    }

    addState(c.inverter?.power_entity, mockTelemetry.inverterPower, 'kW');
    addState(c.inverter?.ac_temperature_entity, mockTelemetry.acTemp, '°C');
    addState(c.inverter?.dc_temperature_entity, mockTelemetry.dcTemp, '°C');
    addState(c.inverter?.voltage_entity, mockTelemetry.volt, 'V');
    addState(c.inverter?.current_entity, mockTelemetry.current, 'A');
    addState(c.inverter?.frequency_entity, mockTelemetry.freq, 'Hz');

    // Wind power simulation: realistic dual wind turbine simulation
    if (!window._simWindCycle) window._simWindCycle = 0;
    window._simWindCycle = (window._simWindCycle + 1) % 6;
    
    // Turbine 1: Strong continuous generation (1.20 - 1.65 kW) -> always spinning!
    const t1Power = 1.35 + (Math.sin(window._simWindCycle) * 0.25);
    const t1Speed = 6.8 + (Math.sin(window._simWindCycle) * 1.2);
    
    // Turbine 2: Variable generation cycling across threshold (from 0.03 kW idle up to 0.95 kW active)
    const t2Stages = [0.03, 0.22, 0.65, 0.95, 0.45, 0.04];
    const t2SpeedStages = [1.2, 4.2, 6.1, 7.8, 5.0, 1.4];
    const t2Power = t2Stages[window._simWindCycle];
    const t2Speed = t2SpeedStages[window._simWindCycle];

    mockTelemetry.auxPower = t1Power + t2Power;

    addState(c.aux?.power_entity, mockTelemetry.auxPower, 'kW');
    addState('sensor.wind_turbine_1_power', t1Power, 'kW');
    addState('sensor.wind_turbine_1_speed', t1Speed, 'm/s');
    addState('sensor.wind_turbine_2_power', t2Power, 'kW');
    addState('sensor.wind_turbine_2_speed', t2Speed, 'm/s');

    if (c.wind?.turbines?.[0]?.power_entity) addState(c.wind.turbines[0].power_entity, t1Power, 'kW');
    if (c.wind?.turbines?.[0]?.speed_entity) addState(c.wind.turbines[0].speed_entity, t1Speed, 'm/s');
    if (c.wind?.turbines?.[1]?.power_entity) addState(c.wind.turbines[1].power_entity, t2Power, 'kW');
    if (c.wind?.turbines?.[1]?.speed_entity) addState(c.wind.turbines[1].speed_entity, t2Speed, 'm/s');

    addState(c.grid?.power_entity, mockTelemetry.gridPower, 'kW');
    addState(c.grid?.import_daily_entity, mockTelemetry.gridImport, 'kWh');
    addState(c.grid?.export_daily_entity, mockTelemetry.gridExport, 'kWh');
    addState(c.grid?.car_power_entity, mockTelemetry.carPower, 'kW');
    addState(c.grid?.non_essential_power_entity || 'sensor.non_essential_power', 1.0, 'kW');

    addState(c.load?.essential_power_entity, mockTelemetry.essentialPower, 'kW');
    addState(c.load?.daily_house_entity, mockTelemetry.houseDaily, 'kWh');

    (c.load?.subloads || []).forEach((sub, i) => {
      addState(sub.entity, 2.0 + i, 'kW');
    });

    addState(c.battery?.soc_entity, mockTelemetry.batSoc, '%');
    addState(c.battery?.power_entity, mockTelemetry.batPower, 'kW');
    addState(c.battery?.voltage_entity, mockTelemetry.batVolt, 'V');
    addState(c.battery?.current_entity, mockTelemetry.batCurrent, 'A');
    addState(c.battery?.capacity_entity || 'sensor.inverter_12_kvt_battery_capacity', mockTelemetry.batCap, 'kWh');
    addState('sensor.inverter_12_kvt_battery_capacity', mockTelemetry.batCap, 'kWh');
    addState(c.battery?.charge_daily_entity, mockTelemetry.batCharge, 'kWh');
    addState(c.battery?.discharge_daily_entity, mockTelemetry.batDischarge, 'kWh');

    // Simulate battery modules (matching screenshot 42% / 43%, 25.0° / 18.0°, 51.6V / 51.8V, 4.4A / 19.6A, 2.27kW / 1.01kW)
    const batModCount = c.battery?.parallel_batteries || 2;
    const mockSocs = [42, 43, 76, 85, 90, 68, 72, 80];
    const mockVolts = [51.6, 51.8, 52.4, 52.1, 52.6, 51.9];
    const mockCurrs = [4.4, 19.6, 8.2, 12.4, 6.0, 10.5];
    const mockTemps = [25.0, 18.0, 22.5, 21.0, 24.0, 20.0];
    const mockPowers = [2.27, 1.01, 0.43, 0.65, 0.31, 0.55];

    for (let bIdx = 0; bIdx < batModCount; bIdx++) {
      const bNum = bIdx + 1;
      const mConf = c.battery?.modules?.[bIdx] || {};
      const mSoc = mockSocs[bIdx % mockSocs.length];
      const mV = mockVolts[bIdx % mockVolts.length] + (Math.random() - 0.5) * 0.1;
      const mI = mockCurrs[bIdx % mockCurrs.length] + (Math.random() - 0.5) * 0.2;
      const mT = mockTemps[bIdx % mockTemps.length];
      const mP = mockPowers[bIdx % mockPowers.length];

      addState(mConf.soc_entity || `sensor.bms_rack${bNum}_soc`, mSoc, '%');
      addState(mConf.current_entity || `sensor.bms_rack${bNum}_current`, mI, 'A');
      addState(mConf.voltage_entity || `sensor.bms_rack${bNum}_voltage`, mV, 'V');
      addState(mConf.temperature_entity || `sensor.bms_rack${bNum}_temperature`, mT, '°C');
      addState(mConf.power_entity || `sensor.bms_rack${bNum}_power`, mP, 'kW');
    }

    cardElement.hass = {
      states,
      callService: () => {}
    };
  };

  feedMockData();
  setInterval(feedMockData, 2200);
}

// Generate Lovelace YAML
function updateYamlDisplay() {
  const c = appState.config;
  const yaml = 
`type: custom:energy-station-card
title: "${c.title || 'Energy Station'}"
animations:
  enabled: ${c.animations?.enabled !== false}
  speed: ${c.animations?.speed || 1.2}

solar:
  pv_count: ${c.solar?.pv_count || 3}
  target_daily_yield: ${c.solar?.target_daily_yield || 55.0}
  total_power_entity: ${c.solar?.total_power_entity || 'sensor.deye_12k_inverter_total_pv_power'}
  daily_yield_entity: ${c.solar?.daily_yield_entity || 'sensor.deye_12k_inverter_daily_solar_energy'}
  strings:
${(c.solar?.strings || [
  { name: 'PV 1', voltage_entity: 'sensor.deye_12k_inverter_pv1_voltage', current_entity: 'sensor.deye_12k_inverter_pv1_current', power_entity: 'sensor.deye_12k_inverter_pv1_power' },
  { name: 'PV 2', voltage_entity: 'sensor.deye_12k_inverter_pv2_voltage', current_entity: 'sensor.deye_12k_inverter_pv2_current', power_entity: 'sensor.deye_12k_inverter_pv2_power' },
  { name: 'PV 3', voltage_entity: 'sensor.deye_12k_inverter_pv3_voltage', current_entity: 'sensor.deye_12k_inverter_pv3_current', power_entity: 'sensor.deye_12k_inverter_pv3_power' }
]).slice(0, c.solar?.pv_count || 3).map((s, idx) => `    - name: "${s.name || `PV ${idx + 1}`}"\n      voltage_entity: ${s.voltage_entity || `sensor.deye_12k_inverter_pv${idx + 1}_voltage`}\n      current_entity: ${s.current_entity || `sensor.deye_12k_inverter_pv${idx + 1}_current`}\n      power_entity: ${s.power_entity || `sensor.deye_12k_inverter_pv${idx + 1}_power`}`).join('\n')}

inverter:
  model_name: "${c.inverter?.model_name || 'DEYE SUN-12K'}"
  power_entity: ${c.inverter?.power_entity || 'sensor.deye_12k_inverter_inverter_power'}
  ac_temperature_entity: ${c.inverter?.ac_temperature_entity || 'sensor.deye_12k_inverter_ac_temperature'}
  dc_temperature_entity: ${c.inverter?.dc_temperature_entity || 'sensor.deye_12k_inverter_dc_temperature'}
  voltage_entity: ${c.inverter?.voltage_entity || 'sensor.deye_12k_inverter_grid_voltage'}
  current_entity: ${c.inverter?.current_entity || 'sensor.deye_12k_inverter_grid_current'}
  frequency_entity: ${c.inverter?.frequency_entity || 'sensor.deye_12k_inverter_grid_frequency'}

aux:
  type: ${c.aux?.type || 'microinverter'}
  title: "${c.aux?.title || (c.aux?.type === 'wind' ? 'Вітрогенератор' : 'Мікроінвертор')}"
  power_entity: ${c.aux?.power_entity || 'sensor.deye_12k_inverter_aux_load_power'}
  wind_animation_threshold: ${c.wind?.animation_threshold || c.aux?.wind_animation_threshold || 50} # Вт (поріг запуску обертання)

wind:
  show: ${c.wind?.show !== false}
  turbine_count: ${c.wind?.turbine_count || 2}
  animation_threshold: ${c.wind?.animation_threshold || 50} # Вт
  max_power: ${c.wind?.max_power || 3000}
  turbines:
${(c.wind?.turbines || [
  { name: 'Вітряк 1', power_entity: 'sensor.wind_turbine_1_power', speed_entity: 'sensor.wind_turbine_1_speed', animation_threshold: 50 },
  { name: 'Вітряк 2', power_entity: 'sensor.wind_turbine_2_power', speed_entity: 'sensor.wind_turbine_2_speed', animation_threshold: 50 }
]).slice(0, c.wind?.turbine_count || 2).map((t, idx) => `    - name: "${t.name || `Вітряк ${idx + 1}`}"\n      power_entity: ${t.power_entity || `sensor.wind_turbine_${idx + 1}_power`}\n      speed_entity: ${t.speed_entity || `sensor.wind_turbine_${idx + 1}_speed`}\n      animation_threshold: ${t.animation_threshold || 50}`).join('\n')}

battery:
  parallel_batteries: ${c.battery?.parallel_batteries || 2}
  reserve_soc: ${c.battery?.reserve_soc || 20}
  soc_entity: ${c.battery?.soc_entity || 'sensor.deye_12k_inverter_battery_soc'}
  power_entity: ${c.battery?.power_entity || 'sensor.deye_12k_inverter_battery_power'}
  voltage_entity: ${c.battery?.voltage_entity || 'sensor.deye_12k_inverter_battery_voltage'}
  current_entity: ${c.battery?.current_entity || 'sensor.deye_12k_inverter_battery_current'}
  capacity_entity: ${c.battery?.capacity_entity || 'sensor.inverter_12_kvt_battery_capacity'}
  charge_daily_entity: ${c.battery?.charge_daily_entity || 'sensor.deye_12k_inverter_daily_battery_charge'}
  discharge_daily_entity: ${c.battery?.discharge_daily_entity || 'sensor.deye_12k_inverter_daily_battery_discharge'}
  modules:
${(c.battery?.modules || [
  { name: 'Батарея 1', soc_entity: 'sensor.bms_rack1_soc', current_entity: 'sensor.bms_rack1_current', voltage_entity: 'sensor.bms_rack1_voltage', power_entity: 'sensor.bms_rack1_power', temperature_entity: 'sensor.bms_rack1_temperature', capacity_kwh: 7.88 },
  { name: 'Батарея 2', soc_entity: 'sensor.bms_rack2_soc', current_entity: 'sensor.bms_rack2_current', voltage_entity: 'sensor.bms_rack2_voltage', power_entity: 'sensor.bms_rack2_power', temperature_entity: 'sensor.bms_rack2_temperature', capacity_kwh: 5.12 }
]).slice(0, c.battery?.parallel_batteries || 2).map((m, idx) => `    - name: "${m.name || `Батарея ${idx + 1}`}"\n      soc_entity: ${m.soc_entity || `sensor.bms_rack${idx + 1}_soc`}\n      current_entity: ${m.current_entity || `sensor.bms_rack${idx + 1}_current`}\n      voltage_entity: ${m.voltage_entity || `sensor.bms_rack${idx + 1}_voltage`}\n      power_entity: ${m.power_entity || `sensor.bms_rack${idx + 1}_power`}\n      temperature_entity: ${m.temperature_entity || `sensor.bms_rack${idx + 1}_temperature`}\n      capacity_kwh: ${m.capacity_kwh !== undefined ? m.capacity_kwh : (idx === 0 ? 7.88 : 5.12)}`).join('\n')}

grid:
  power_entity: ${c.grid?.power_entity || 'sensor.deye_12k_inverter_total_grid_power'}
  import_daily_entity: ${c.grid?.import_daily_entity || 'sensor.deye_12k_inverter_daily_energy_bought'}
  export_daily_entity: ${c.grid?.export_daily_entity || 'sensor.deye_12k_inverter_daily_energy_sold'}
  car_power_entity: ${c.grid?.car_power_entity || 'sensor.ev_charger_power'}

load:
  essential_power_entity: ${c.load?.essential_power_entity || 'sensor.deye_12k_inverter_essential_load_power'}
  daily_house_entity: ${c.load?.daily_house_entity || 'sensor.deye_12k_inverter_daily_load_energy'}
  subloads:
${(c.load?.subloads || []).map(s => `    - name: "${s.name}"\n      entity: ${s.entity}\n      icon: ${s.icon}`).join('\n')}
`;

  const yamlBlock = document.getElementById('yamlCodeBlock');
  if (yamlBlock) yamlBlock.innerText = yaml;
}

function showToast(msg) {
  const toast = document.getElementById('appToast');
  if (toast) {
    toast.innerText = msg;
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }
}
