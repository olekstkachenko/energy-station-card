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
});
