import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Energy Station Card - Inverter Self-Consumption & House Load Balance', () => {

  it('correctly calculates house load and inverter self-consumption during battery charging from grid (matches user scenario)', () => {
    // Exact user telemetry from screenshot:
    // Grid Import: 3.763 kW
    // Battery Charge: 3.383 kW
    // Solar: 0 kW, Wind: 0 kW, Aux: 0 kW, NonEss: 0 kW, Car: 0 kW
    const totalSolarKw = 0;
    const totalWindKw = 0;
    const auxKw = 0;
    const absGridKw = 3.763;
    const isImport = true;
    const isExport = false;
    const absBatKw = 3.383;
    const isCharging = true;
    const isDischarging = false;
    const nonEssKw = 0;
    const carKw = 0;

    const c = {
      inverter: {
        show_self_consumption: true,
        self_consumption_entity: '',
        standby_power: 100 // 100W nominal loss
      },
      load: {
        auto_calculate: true,
        // The sensor that erroneously reports negative grid/inverter power during battery charging:
        essential_power_entity: 'sensor.deye_inverter_power'
      }
    };

    const hass = {
      states: {
        'sensor.deye_inverter_power': { state: '-3.763', attributes: { unit_of_measurement: 'kW' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val, unit: s.attributes?.unit_of_measurement || '' };
    };

    // Calculation logic as implemented in _updateValues:
    const gridInKw = isImport ? absGridKw : 0;
    const batOutKw = isDischarging ? absBatKw : 0;
    const totalInflowKw = totalSolarKw + totalWindKw + (auxKw > 0 ? auxKw : 0) + gridInKw + batOutKw;

    const batInKw = isCharging ? absBatKw : 0;
    const gridOutKw = isExport ? absGridKw : 0;
    const totalOutflowKnownKw = batInKw + gridOutKw + nonEssKw + carKw;

    const netAvailableKw = Math.max(0, totalInflowKw - totalOutflowKnownKw);

    const sSelf = getEntityState(c.inverter?.self_consumption_entity);
    let selfConsumptionKw = 0;

    const sEss = getEntityState(c.load?.essential_power_entity);
    const isAutoCalculateHouse = c.load?.auto_calculate !== false;
    const hasValidPositiveMeasuredHouse = Boolean(sEss && typeof sEss.val === 'number' && !isNaN(sEss.val) && sEss.val > 0 && !isAutoCalculateHouse);

    if (sSelf && typeof sSelf.val === 'number' && !isNaN(sSelf.val)) {
      selfConsumptionKw = Math.max(0, sSelf.unit === 'W' ? sSelf.val / 1000 : sSelf.val);
    } else if (hasValidPositiveMeasuredHouse) {
      const measuredHouseKw = sEss.unit === 'W' ? sEss.val / 1000 : sEss.val;
      selfConsumptionKw = Math.max(0, netAvailableKw - measuredHouseKw);
    } else {
      const standbyWatts = (c.inverter?.standby_power !== undefined) ? c.inverter.standby_power : 100;
      const nominalLossKw = standbyWatts / 1000;
      selfConsumptionKw = Math.min(netAvailableKw, nominalLossKw);
    }

    let essentialKw = 0;
    if (isAutoCalculateHouse || !sEss || typeof sEss.val !== 'number' || isNaN(sEss.val) || sEss.val <= 0) {
      essentialKw = Math.max(0, netAvailableKw - selfConsumptionKw);
    } else {
      essentialKw = Math.max(0, sEss.unit === 'W' ? sEss.val / 1000 : sEss.val);
    }

    // Asserts:
    // 1. Net available power = 3.763 - 3.383 = 0.380 kW (380 W)
    assert.equal(netAvailableKw.toFixed(3), '0.380');

    // 2. Inverter self-consumption = 100 W (0.100 kW)
    assert.equal(selfConsumptionKw.toFixed(3), '0.100');

    // 3. House load must be strictly POSITIVE (0.280 kW), NEVER -3.763 kW!
    assert.equal(essentialKw.toFixed(3), '0.280');
    assert.ok(essentialKw >= 0, 'House load must be positive');

    // 4. Perfect Energy Balance: House (0.280) + Inverter Self (0.100) + Battery (3.383) = Grid Import (3.763)
    const totalAccountedKw = essentialKw + selfConsumptionKw + batInKw;
    assert.equal(totalAccountedKw.toFixed(3), absGridKw.toFixed(3), 'Total accounted power must equal grid import');
  });

  it('calculates dynamic inverter losses when physical house load CT sensor is present', () => {
    const totalSolarKw = 4.500;
    const totalWindKw = 0;
    const auxKw = 0;
    const absGridKw = 0;
    const isImport = false;
    const isExport = false;
    const absBatKw = 3.000;
    const isCharging = true;
    const isDischarging = false;
    const nonEssKw = 0;
    const carKw = 0;

    const c = {
      inverter: {
        show_self_consumption: true,
        self_consumption_entity: '',
        standby_power: 100
      },
      load: {
        auto_calculate: false,
        essential_power_entity: 'sensor.real_house_load'
      }
    };

    const hass = {
      states: {
        'sensor.real_house_load': { state: '1.350', attributes: { unit_of_measurement: 'kW' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val, unit: s.attributes?.unit_of_measurement || '' };
    };

    const totalInflowKw = totalSolarKw;
    const batInKw = absBatKw;
    const netAvailableKw = Math.max(0, totalInflowKw - batInKw); // 4.500 - 3.000 = 1.500 kW

    const sEss = getEntityState(c.load.essential_power_entity);
    const measuredHouseKw = sEss.val; // 1.350 kW

    // Dynamic inverter loss = 1.500 - 1.350 = 0.150 kW (150 W)
    const selfConsumptionKw = Math.max(0, netAvailableKw - measuredHouseKw);

    assert.equal(selfConsumptionKw.toFixed(3), '0.150', 'Dynamic loss must equal generation minus battery minus house load');
  });

  it('uses direct self-consumption sensor when configured', () => {
    const c = {
      inverter: {
        show_self_consumption: true,
        self_consumption_entity: 'sensor.inverter_internal_losses'
      }
    };

    const hass = {
      states: {
        'sensor.inverter_internal_losses': { state: '125', attributes: { unit_of_measurement: 'W' } }
      }
    };

    const sSelf = hass.states[c.inverter.self_consumption_entity];
    const selfKw = sSelf.attributes.unit_of_measurement === 'W' ? parseFloat(sSelf.state) / 1000 : parseFloat(sSelf.state);

    assert.equal(selfKw, 0.125, 'Direct sensor value must be used');
  });

  it('handles blackout / disconnected grid when voltage is low (e.g. 4.90V) and CT clamp reads negative (user off-grid scenario)', () => {
    // User scenario from screenshot:
    // Solar: 0.668 kW
    // Battery: Discharging 1.770 kW
    // Grid Voltage: 4.90 V (< 90 V threshold) -> Grid is DISCONNECTED!
    // Grid Power Sensor: -2.235 kW (CT clamp measuring current to house panel)
    // Inverter Standby: 100 W (0.100 kW)
    // House Load: Must be 0.668 + 1.770 - 0.100 = 2.338 kW! (Not 0.102 kW, and grid must be 0 kW, not exporting!)

    const c = {
      grid: {
        power_entity: 'sensor.deye_grid_power',
        voltage_entity: '',
        voltage_threshold: 90,
        selling_enabled: true, // Even if selling was enabled in config, disconnected grid overrides it!
        power_sign: 'deye'
      },
      inverter: {
        voltage_entity: 'sensor.deye_grid_voltage',
        standby_power: 100,
        show_self_consumption: true
      },
      load: {
        auto_calculate: true
      }
    };

    const hass = {
      states: {
        'sensor.deye_grid_power': { state: '-2235', attributes: { unit_of_measurement: 'W' } },
        'sensor.deye_grid_voltage': { state: '4.90', attributes: { unit_of_measurement: 'V' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val, unit: s.attributes?.unit_of_measurement || '' };
    };

    const sGridPower = getEntityState(c.grid.power_entity);
    const rawGridKw = sGridPower ? (sGridPower.unit === 'W' ? sGridPower.val / 1000 : sGridPower.val) : 0;
    const powerSign = c.grid.power_sign;
    const sellingEnabled = c.grid.selling_enabled === true;
    const thresholdKw = 0.05;

    // Detect grid connection
    const sGridStatus = getEntityState(c.grid.status_entity);
    const sGridVolt = getEntityState(c.grid.voltage_entity || c.inverter.voltage_entity);
    const voltThreshold = c.grid.voltage_threshold !== undefined ? c.grid.voltage_threshold : 90;

    let isGridConnected = true;
    if (sGridStatus) {
      const st = String(sGridStatus.raw || sGridStatus.val).toLowerCase();
      if (st === 'off' || st === 'false' || st === '0' || st === 'disconnected' || st === 'offline') {
        isGridConnected = false;
      }
    } else if (sGridVolt && typeof sGridVolt.val === 'number' && !isNaN(sGridVolt.val)) {
      if (sGridVolt.val < voltThreshold) {
        isGridConnected = false;
      }
    }

    assert.equal(isGridConnected, false, 'Grid must be detected as disconnected when voltage is 4.90V');

    let isExport = false;
    let isImport = false;
    let absGridKw = 0;

    if (!isGridConnected) {
      absGridKw = 0;
      isExport = false;
      isImport = false;
    } else {
      absGridKw = Math.abs(rawGridKw);
      if (absGridKw >= thresholdKw) {
        if (powerSign === 'deye') {
          if (rawGridKw < 0) isExport = true;
          else isImport = true;
        }
      }
      if (isExport && !sellingEnabled) isExport = false;
    }

    // Power balance
    const totalSolarKw = 0.668;
    const totalWindKw = 0;
    const auxKw = 0;
    const absBatKw = 1.770;
    const isCharging = false;
    const isDischarging = true;

    const gridInKw = isImport ? absGridKw : 0;
    const batOutKw = isDischarging ? absBatKw : 0;
    const totalInflowKw = totalSolarKw + totalWindKw + auxKw + gridInKw + batOutKw; // 0.668 + 1.770 = 2.438 kW

    const batInKw = isCharging ? absBatKw : 0;
    const gridOutKw = isExport ? absGridKw : 0; // 0 because grid is disconnected!
    const totalOutflowKnownKw = batInKw + gridOutKw;

    const netAvailableKw = Math.max(0, totalInflowKw - totalOutflowKnownKw); // 2.438 kW
    const standbyWatts = c.inverter.standby_power;
    const nominalLossKw = standbyWatts / 1000; // 0.100 kW
    const selfConsumptionKw = Math.min(netAvailableKw, nominalLossKw); // 0.100 kW
    const essentialKw = Math.max(0, netAvailableKw - selfConsumptionKw); // 2.338 kW

    // Grid assertions:
    assert.equal(absGridKw, 0, 'Grid power must be 0 kW when disconnected');
    assert.equal(isExport, false, 'Export must be false when grid is disconnected');
    assert.equal(isImport, false, 'Import must be false when grid is disconnected');

    // House & Inverter assertions:
    assert.equal(selfConsumptionKw.toFixed(3), '0.100', 'Inverter standby must be 100 W');
    assert.equal(essentialKw.toFixed(3), '2.338', 'House load must be 2.338 kW (covering boiler + house)');
    assert.equal((essentialKw + selfConsumptionKw).toFixed(3), totalInflowKw.toFixed(3), 'Total accounted must equal generation');
  });

  it('respects selling_enabled: false when grid is connected and never treats negative sensor readings as export', () => {
    const rawGridKw = -1.500; // Negative reading (e.g. backfeed or CT noise)
    const sellingEnabled = false; // Zero export
    const powerSign = 'deye';

    let isExport = false;
    let isImport = false;
    const absGridKw = Math.abs(rawGridKw);

    if (absGridKw >= 0.05) {
      if (powerSign === 'deye') {
        if (rawGridKw < 0) isExport = true;
        else isImport = true;
      }
    }
    if (isExport && !sellingEnabled) {
      isExport = false;
    }

    const gridOutKw = isExport ? absGridKw : 0;

    assert.equal(isExport, false, 'isExport must be false when selling_enabled is false');
    assert.equal(gridOutKw, 0, 'gridOutKw must be 0 kW');
  });

  it('correctly calculates dynamic inverter loss and house load from physical Deye sensor at 0:32', () => {
    // User scenario at 00:32:24 from Deye Solarman app screenshot:
    // Grid Import: 4.810 kW
    // Battery Charge: 3.410 kW
    // UPS Load: 1.030 kW (sensor.deye_12k_inverter_load_power)
    // Dynamic Inverter Loss: 4.810 - 3.410 - 1.030 = 0.370 kW (370 W)
    const gridInKw = 4.810;
    const batInKw = 3.410;
    const totalInflowKw = gridInKw;
    const totalOutflowKnownKw = batInKw;
    const netAvailableKw = Math.max(0, totalInflowKw - totalOutflowKnownKw); // 1.400 kW

    const c = {
      inverter: {
        show_self_consumption: true,
        self_consumption_entity: '',
        standby_power: 100
      },
      load: {
        auto_calculate: true,
        essential_power_entity: 'sensor.deye_12k_inverter_load_power'
      }
    };

    const hass = {
      states: {
        'sensor.deye_12k_inverter_load_power': { state: '1030', attributes: { unit_of_measurement: 'W' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val, unit: s.attributes?.unit_of_measurement || '' };
    };

    let sEss = getEntityState(c.load?.essential_power_entity);
    if (!sEss && (!c.load?.essential_power_entity || c.load?.essential_power_entity === 'sensor.deye_12k_inverter_essential_load_power' || c.load?.essential_power_entity === 'sensor.deye_12k_inverter_load_power')) {
      sEss = getEntityState('sensor.deye_12k_inverter_load_power') ||
             getEntityState('sensor.deye_12k_inverter_essential_load_power') ||
             getEntityState('sensor.load_power') ||
             getEntityState('sensor.solarman_essential_load');
    }

    const hasValidPositiveSensor = Boolean(sEss && typeof sEss.val === 'number' && !isNaN(sEss.val) && sEss.val > 0);
    let essentialKw = 0;
    let selfConsumptionKw = 0;

    if (hasValidPositiveSensor) {
      essentialKw = Math.max(0, sEss.unit === 'W' ? sEss.val / 1000 : sEss.val);
      selfConsumptionKw = Math.max(0, netAvailableKw - essentialKw);
    }

    assert.equal(essentialKw.toFixed(3), '1.030', 'Essential load matches 1.03 kW');
    assert.equal(selfConsumptionKw.toFixed(3), '0.370', 'Dynamic inverter loss during 3.41 kW charging is 370 W');
    assert.equal((essentialKw + selfConsumptionKw + batInKw).toFixed(3), gridInKw.toFixed(3), 'Full energy balance preserved');
  });

  it('correctly matches physical Deye inverter screen: Solar 3.00 kW, Battery -1.43 kW, House 1.38 kW, Grid 0.03 kW (Zero Export)', () => {
    // Exact user scenario from physical Deye 12K LCD screen at 13:09:24:
    // PV Generation: 2.951 kW (3.00 kW on Deye LCD)
    // Battery Charging: 1.430 kW (54.8V, -1.43 kW on Deye LCD)
    // House Load: 1.358 kW (1.38 kW on Deye LCD)
    // Grid: 0.030 kW import (0.03 kW on Deye LCD tower icon)
    // Inverter internal grid port: -1358 W (feeding the house panel)
    const totalSolarKw = 2.951;
    const totalWindKw = 0;
    const auxKw = 0;
    const nonEssKw = 0;
    const carKw = 0;
    const subloadsTotalKw = 0;

    const c = {
      grid: {
        power_entity: 'sensor.deye_12k_inverter_total_grid_power',
        external_power_entity: 'sensor.deye_12k_inverter_external_power',
        selling_enabled: true,
        power_sign: 'deye',
        min_power_threshold: 50
      },
      inverter: {
        show_self_consumption: true,
        self_consumption_entity: '',
        standby_power: 100
      },
      load: {
        auto_calculate: true,
        essential_power_entity: 'sensor.deye_12k_inverter_load_power'
      },
      battery: {
        power_sign: 'deye'
      }
    };

    const hass = {
      states: {
        'sensor.deye_12k_inverter_total_grid_power': { state: '-1358', attributes: { unit_of_measurement: 'W' } },
        'sensor.deye_12k_inverter_external_power': { state: '30', attributes: { unit_of_measurement: 'W' } },
        'sensor.deye_12k_inverter_load_power': { state: '1358', attributes: { unit_of_measurement: 'W' } },
        'sensor.deye_12k_inverter_battery_power': { state: '-1430', attributes: { unit_of_measurement: 'W' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val, unit: s.attributes?.unit_of_measurement || '' };
    };

    // 1. Battery
    const sBatPower = getEntityState('sensor.deye_12k_inverter_battery_power');
    const rawBatKw = sBatPower.val / 1000;
    const isCharging = rawBatKw < 0;
    const isDischarging = rawBatKw > 0;
    const absBatKw = Math.abs(rawBatKw);
    const batInKw = isCharging ? absBatKw : 0;
    const batOutKw = isDischarging ? absBatKw : 0;

    // 2. House Load Sensor
    const sEss = getEntityState(c.load.essential_power_entity);
    const rawSensorKw = sEss.val / 1000;
    const hasValidPositiveSensor = Boolean(sEss && rawSensorKw > 0);

    // 3. Grid Resolution
    let sGridPower = getEntityState(c.grid.external_power_entity);
    let isExternalCt = !!sGridPower;
    if (!sGridPower) sGridPower = getEntityState(c.grid.power_entity);

    const rawGridKw = sGridPower.val / 1000;
    const thresholdKw = c.grid.min_power_threshold / 1000;
    let isExport = false;
    let isImport = false;
    let absGridKw = 0;

    if (isExternalCt) {
      absGridKw = Math.abs(rawGridKw);
      if (absGridKw >= thresholdKw) {
        if (rawGridKw < 0) isExport = true;
        else isImport = true;
      }
    }

    // 4. House Load & Self-Consumption
    const gridInKw = isImport ? absGridKw : 0;
    const gridOutKw = isExport ? absGridKw : 0;
    const totalInflowKw = totalSolarKw + totalWindKw + auxKw + gridInKw + batOutKw;
    const essentialKw = hasValidPositiveSensor ? Math.max(subloadsTotalKw, rawSensorKw) : 0;
    const selfConsumptionKw = Math.max(0, totalInflowKw - (batInKw + gridOutKw + essentialKw));

    // Assertions matching physical Deye LCD:
    // 1. House load MUST be 1.358 kW (matching 1.38 kW on Deye LCD), NEVER 0.116 kW!
    assert.equal(essentialKw.toFixed(3), '1.358');
    assert.notEqual(essentialKw.toFixed(3), '0.116');

    // 2. Grid must NOT be exporting 1.358 kW!
    assert.equal(isExport, false);
    assert.equal(gridOutKw, 0);

    // 3. Grid reading reflects external CT (0.03 kW / 30 W import)
    assert.equal(absGridKw.toFixed(3), '0.030');

    // 4. Battery is charging 1.430 kW
    assert.equal(batInKw.toFixed(3), '1.430');

    // 5. Inverter dynamic standby / loss absorbs the residue (~163 W)
    assert.equal(selfConsumptionKw.toFixed(3), '0.163');
  });

  it('correctly handles case where only inverter grid port sensor is present (no external CT configured)', () => {
    // Only sensor.deye_12k_inverter_total_grid_power exists (-1358 W)
    // House load sensor is 1358 W
    const totalSolarKw = 2.951;
    const subloadsTotalKw = 0;
    const nonEssKw = 0;
    const carKw = 0;

    const rawGridKw = -1.358;
    const rawSensorKw = 1.358;
    const isExternalCt = false;
    const thresholdKw = 0.05;

    let isExport = false;
    let isImport = false;
    let absGridKw = 0;

    if (!isExternalCt) {
      if (rawGridKw < 0) {
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
    }

    const batInKw = 1.430;
    const gridInKw = isImport ? absGridKw : 0;
    const gridOutKw = isExport ? absGridKw : 0;
    const totalInflowKw = totalSolarKw + gridInKw;
    const essentialKw = rawSensorKw;
    const selfConsumptionKw = Math.max(0, totalInflowKw - (batInKw + gridOutKw + essentialKw + nonEssKw + carKw));

    // Assertions:
    // 1. Net export is 0 kW because all 1.358 kW leaving the grid port goes to the house!
    assert.equal(isExport, false);
    assert.equal(absGridKw, 0);

    // 2. House load remains 1.358 kW, NOT 0 kW!
    assert.equal(essentialKw.toFixed(3), '1.358');

    // 3. Standby covers the remaining ~163 W
    assert.equal(selfConsumptionKw.toFixed(3), '0.163');
  });

  it('correctly handles genuine solar export (selling) without wiping out house load', () => {
    // 6.0 kW solar, 1.5 kW battery charge, 1.2 kW house load, 3.0 kW grid export
    const totalSolarKw = 6.000;
    const nonEssKw = 0;
    const carKw = 0;
    const batInKw = 1.500;
    const rawSensorKw = 1.200;
    const hasValidPositiveSensor = true;
    const subloadsTotalKw = 0;

    // Inverter grid port reports -4.200 kW (1.2 kW house + 3.0 kW grid export)
    const rawGridKw = -4.200;
    const isExternalCt = false;
    const thresholdKw = 0.05;

    let isExport = false;
    let absGridKw = 0;

    if (!isExternalCt) {
      const leavingKw = Math.abs(rawGridKw);
      const netExportKw = Math.max(0, leavingKw - rawSensorKw); // 4.2 - 1.2 = 3.0 kW
      if (netExportKw >= thresholdKw) {
        absGridKw = netExportKw;
        isExport = true;
      }
    }

    // Conservation check
    const maxPossibleExport = Math.max(0, totalSolarKw - batInKw - rawSensorKw - nonEssKw - carKw); // 3.3 kW
    if (isExport && absGridKw > (maxPossibleExport + 0.1)) {
      absGridKw = maxPossibleExport;
    }

    const gridOutKw = isExport ? absGridKw : 0;
    const essentialKw = hasValidPositiveSensor ? Math.max(subloadsTotalKw, rawSensorKw) : 0;
    const totalInflowKw = totalSolarKw;
    const selfConsumptionKw = Math.max(0, totalInflowKw - (batInKw + gridOutKw + essentialKw + nonEssKw + carKw));

    // Assertions:
    // 1. Grid export is cleanly isolated: 3.000 kW
    assert.equal(isExport, true);
    assert.equal(gridOutKw.toFixed(3), '3.000');

    // 2. House load is preserved: 1.200 kW
    assert.equal(essentialKw.toFixed(3), '1.200');

    // 3. Self-consumption / losses absorb remaining 300 W
    assert.equal(selfConsumptionKw.toFixed(3), '0.300');

    // 4. Perfect conservation of energy
    const totalOutflow = batInKw + gridOutKw + essentialKw + selfConsumptionKw;
    assert.equal(totalOutflow.toFixed(3), totalSolarKw.toFixed(3));
  });
});


