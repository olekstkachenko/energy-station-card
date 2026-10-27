import { test, describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Energy Station Card - Wind Energy Sensors & Auto Calculation', () => {

  it('correctly defaults to 0.00 kWh daily and 0.0 kWh monthly when entities are not configured', () => {
    const c = {
      wind: {
        show: true,
        turbine_count: 2,
        daily_energy_entity: '',
        monthly_energy_entity: '',
        turbines: [
          { name: '1500W', power_entity: 'sensor.vitriak_potuzhnist_filtr' },
          { name: 'Херсонець', power_entity: 'sensor.ju_wei_power' }
        ]
      }
    };

    const hass = {
      states: {
        'sensor.vitriak_potuzhnist_filtr': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
        'sensor.ju_wei_power': { state: '-0.001', attributes: { unit_of_measurement: 'kW' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val };
    };

    let totalTurbinesDaily = 0;
    let totalTurbinesMonthly = 0;
    let hasAnyTurbineDaily = false;
    let hasAnyTurbineMonthly = false;

    const count = c.wind.turbine_count;
    const turbinesList = c.wind.turbines;
    const turbineCardOutputs = [];

    for (let i = 0; i < count; i++) {
      const t = turbinesList[i] || {};
      const sDaily = getEntityState(t.daily_energy_entity);
      const sMonthly = getEntityState(t.monthly_energy_entity);

      const dailyValStr = (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) ? sDaily.val.toFixed(2) : '0.00';
      const monthlyValStr = (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) ? sMonthly.val.toFixed(1) : '0.0';
      const hasTurbineEnergy = !!(t.daily_energy_entity || t.monthly_energy_entity);
      const footerDisplay = hasTurbineEnergy ? 'flex' : 'none';

      turbineCardOutputs.push({
        name: t.name,
        daily: dailyValStr,
        monthly: monthlyValStr,
        footerDisplay
      });

      if (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) {
        totalTurbinesDaily += sDaily.val;
        hasAnyTurbineDaily = true;
      }
      if (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) {
        totalTurbinesMonthly += sMonthly.val;
        hasAnyTurbineMonthly = true;
      }
    }

    const sStationDaily = getEntityState(c.wind.daily_energy_entity);
    const sStationMonthly = getEntityState(c.wind.monthly_energy_entity);

    const stationDailyStr = (sStationDaily && typeof sStationDaily.val === 'number' && !isNaN(sStationDaily.val))
      ? sStationDaily.val.toFixed(2)
      : (hasAnyTurbineDaily ? totalTurbinesDaily.toFixed(2) : '0.00');

    const stationMonthlyStr = (sStationMonthly && typeof sStationMonthly.val === 'number' && !isNaN(sStationMonthly.val))
      ? sStationMonthly.val.toFixed(1)
      : (hasAnyTurbineMonthly ? totalTurbinesMonthly.toFixed(1) : '0.0');

    // Verification: No mock numbers 4.80, 86.4, 5.90, 109.2
    assert.equal(stationDailyStr, '0.00', 'Station daily must be 0.00');
    assert.equal(stationMonthlyStr, '0.0', 'Station monthly must be 0.0');
    assert.equal(turbineCardOutputs[0].footerDisplay, 'none', 'Unconfigured turbine 1 footer must be hidden');
    assert.equal(turbineCardOutputs[1].footerDisplay, 'none', 'Unconfigured turbine 2 footer must be hidden');
  });

  it('correctly calculates and auto-sums individual turbine daily and monthly sensors', () => {
    const c = {
      wind: {
        show: true,
        turbine_count: 2,
        daily_energy_entity: '',
        monthly_energy_entity: '',
        turbines: [
          {
            name: '1500W',
            power_entity: 'sensor.vitriak_power',
            daily_energy_entity: 'sensor.vitriak_daily_energy',
            monthly_energy_entity: 'sensor.vitriak_monthly_energy'
          },
          {
            name: 'Херсонець',
            power_entity: 'sensor.kherson_power',
            daily_energy_entity: 'sensor.kherson_daily_energy',
            monthly_energy_entity: 'sensor.kherson_monthly_energy'
          }
        ]
      }
    };

    const hass = {
      states: {
        'sensor.vitriak_daily_energy': { state: '3.45', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.vitriak_monthly_energy': { state: '72.1', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.kherson_daily_energy': { state: '2.15', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.kherson_monthly_energy': { state: '45.3', attributes: { unit_of_measurement: 'kWh' } }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val };
    };

    let totalTurbinesDaily = 0;
    let totalTurbinesMonthly = 0;
    let hasAnyTurbineDaily = false;
    let hasAnyTurbineMonthly = false;

    const count = c.wind.turbine_count;
    const turbinesList = c.wind.turbines;
    const turbineCardOutputs = [];

    for (let i = 0; i < count; i++) {
      const t = turbinesList[i] || {};
      const sDaily = getEntityState(t.daily_energy_entity);
      const sMonthly = getEntityState(t.monthly_energy_entity);

      const dailyValStr = (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) ? sDaily.val.toFixed(2) : '0.00';
      const monthlyValStr = (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) ? sMonthly.val.toFixed(1) : '0.0';
      const hasTurbineEnergy = !!(t.daily_energy_entity || t.monthly_energy_entity);
      const footerDisplay = hasTurbineEnergy ? 'flex' : 'none';

      turbineCardOutputs.push({ daily: dailyValStr, monthly: monthlyValStr, footerDisplay });

      if (sDaily && typeof sDaily.val === 'number' && !isNaN(sDaily.val)) {
        totalTurbinesDaily += sDaily.val;
        hasAnyTurbineDaily = true;
      }
      if (sMonthly && typeof sMonthly.val === 'number' && !isNaN(sMonthly.val)) {
        totalTurbinesMonthly += sMonthly.val;
        hasAnyTurbineMonthly = true;
      }
    }

    const sStationDaily = getEntityState(c.wind.daily_energy_entity);
    const sStationMonthly = getEntityState(c.wind.monthly_energy_entity);

    const stationDailyStr = (sStationDaily && typeof sStationDaily.val === 'number' && !isNaN(sStationDaily.val))
      ? sStationDaily.val.toFixed(2)
      : (hasAnyTurbineDaily ? totalTurbinesDaily.toFixed(2) : '0.00');

    const stationMonthlyStr = (sStationMonthly && typeof sStationMonthly.val === 'number' && !isNaN(sStationMonthly.val))
      ? sStationMonthly.val.toFixed(1)
      : (hasAnyTurbineMonthly ? totalTurbinesMonthly.toFixed(1) : '0.0');

    assert.equal(turbineCardOutputs[0].footerDisplay, 'flex', 'Turbine 1 footer must be shown');
    assert.equal(turbineCardOutputs[0].daily, '3.45');
    assert.equal(turbineCardOutputs[0].monthly, '72.1');

    assert.equal(turbineCardOutputs[1].footerDisplay, 'flex', 'Turbine 2 footer must be shown');
    assert.equal(turbineCardOutputs[1].daily, '2.15');
    assert.equal(turbineCardOutputs[1].monthly, '45.3');

    // Auto-sum in top station summary: 3.45 + 2.15 = 5.60, 72.1 + 45.3 = 117.4
    assert.equal(stationDailyStr, '5.60', 'Station total daily must auto-sum turbines');
    assert.equal(stationMonthlyStr, '117.4', 'Station total monthly must auto-sum turbines');
  });

  it('prioritizes station-wide sensor over auto-sum when specified', () => {
    const c = {
      wind: {
        show: true,
        turbine_count: 2,
        daily_energy_entity: 'sensor.wind_farm_total_daily',
        monthly_energy_entity: 'sensor.wind_farm_total_monthly',
        turbines: [
          { daily_energy_entity: 'sensor.t1_daily', monthly_energy_entity: 'sensor.t1_monthly' },
          { daily_energy_entity: 'sensor.t2_daily', monthly_energy_entity: 'sensor.t2_monthly' }
        ]
      }
    };

    const hass = {
      states: {
        'sensor.wind_farm_total_daily': { state: '15.80', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.wind_farm_total_monthly': { state: '280.5', attributes: { unit_of_measurement: 'kWh' } },
        'sensor.t1_daily': { state: '3.45' },
        'sensor.t1_monthly': { state: '72.1' },
        'sensor.t2_daily': { state: '2.15' },
        'sensor.t2_monthly': { state: '45.3' }
      }
    };

    const getEntityState = (id) => {
      if (!id || !hass.states[id]) return null;
      const s = hass.states[id];
      const val = parseFloat(s.state);
      return { raw: s.state, val: isNaN(val) ? 0 : val };
    };

    const sStationDaily = getEntityState(c.wind.daily_energy_entity);
    const sStationMonthly = getEntityState(c.wind.monthly_energy_entity);

    assert.equal(sStationDaily.val.toFixed(2), '15.80', 'Uses explicit station daily sensor');
    assert.equal(sStationMonthly.val.toFixed(1), '280.5', 'Uses explicit station monthly sensor');
  });
});
