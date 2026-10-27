/**
 * Default configuration and schema for Energy Station Card
 */
export const DEFAULT_CONFIG = {
  title: 'Energy Station',
  card_style: 'full', // 'full' | 'compact'
  theme_mode: 'dark',
  refresh_rate: 1000,
  animations: {
    enabled: true,
    speed: 1.2, // seconds per pulse cycle
    glow_intensity: 'high' // 'off' | 'subtle' | 'high'
  },

  // 1. Solar PV Configuration
  solar: {
    show: true,
    pv_count: 3, // 1 to 16 strings/trackers
    total_power_entity: 'sensor.deye_12k_inverter_total_pv_power',
    daily_yield_entity: 'sensor.deye_12k_inverter_daily_solar_energy',
    target_daily_yield: 55.0, // kWh
    auto_distribute_power: true,
    strings: [
      {
        id: 'pv1',
        name: 'PV 1',
        voltage_entity: 'sensor.deye_12k_inverter_pv1_voltage',
        current_entity: 'sensor.deye_12k_inverter_pv1_current',
        power_entity: 'sensor.deye_12k_inverter_pv1_power'
      },
      {
        id: 'pv2',
        name: 'PV 2',
        voltage_entity: 'sensor.deye_12k_inverter_pv2_voltage',
        current_entity: 'sensor.deye_12k_inverter_pv2_current',
        power_entity: 'sensor.deye_12k_inverter_pv2_power'
      },
      {
        id: 'pv3',
        name: 'PV 3',
        voltage_entity: 'sensor.deye_12k_inverter_pv3_voltage',
        current_entity: 'sensor.deye_12k_inverter_pv3_current',
        power_entity: 'sensor.deye_12k_inverter_pv3_power'
      }
    ],
    color: '#fbbf24'
  },

  // 2. Inverter & AUX Port
  inverter: {
    model_name: 'DEYE SUN-12K',
    power_entity: 'sensor.deye_12k_inverter_inverter_power',
    status_entity: 'sensor.deye_12k_inverter_inverter_status',
    status_text: 'ПРАЦЮЄ',
    ac_temperature_entity: 'sensor.deye_12k_inverter_ac_temperature',
    dc_temperature_entity: 'sensor.deye_12k_inverter_dc_temperature',
    voltage_entity: 'sensor.deye_12k_inverter_grid_voltage',
    current_entity: 'sensor.deye_12k_inverter_grid_current',
    frequency_entity: 'sensor.deye_12k_inverter_grid_frequency',
    color: '#f97316'
  },

  aux: {
    show: true,
    type: 'microinverter', // 'microinverter' | 'generator' | 'wind' | 'smart_load' | 'none'
    title: 'Мікроінвертор',
    subtitle: 'Джерело → GEN port',
    power_entity: 'sensor.deye_12k_inverter_aux_load_power',
    wind_animation_threshold: 50, // Watts: minimum power threshold to start rotor spinning
    color: '#c084fc'
  },

  // Wind Turbines System (Dual or Multiple Wind Turbines)
  wind: {
    show: true, // Display wind turbines
    turbine_count: 2, // 1 to 4 wind turbines
    animation_threshold: 50, // Default Watts threshold to trigger rotor rotation
    max_power: 3000, // Watts: power for maximum rotor rotation speed
    color: '#06b6d4',
    turbines: [
      {
        id: 'turbine_1',
        name: 'Вітряк 1',
        power_entity: 'sensor.wind_turbine_1_power',
        rpm_entity: 'sensor.wind_turbine_1_rpm',
        daily_energy_entity: 'sensor.wind_turbine_1_daily_energy',
        monthly_energy_entity: 'sensor.wind_turbine_1_monthly_energy',
        animation_threshold: 50
      },
      {
        id: 'turbine_2',
        name: 'Вітряк 2',
        power_entity: 'sensor.wind_turbine_2_power',
        rpm_entity: 'sensor.wind_turbine_2_rpm',
        daily_energy_entity: 'sensor.wind_turbine_2_daily_energy',
        monthly_energy_entity: 'sensor.wind_turbine_2_monthly_energy',
        animation_threshold: 50
      }
    ]
  },

  // 3. Battery System & Individual Rack Modules
  battery: {
    show: true,
    soc_entity: 'sensor.deye_12k_inverter_battery_soc',
    power_entity: 'sensor.deye_12k_inverter_battery_power',
    voltage_entity: 'sensor.deye_12k_inverter_battery_voltage',
    current_entity: 'sensor.deye_12k_inverter_battery_current',
    temperature_entity: 'sensor.deye_12k_inverter_battery_temperature',
    capacity_kwh: 13.0,
    capacity_entity: 'sensor.inverter_12_kvt_battery_capacity',
    charge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_charge',
    discharge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_discharge',
    reserve_soc: 20, // %
    invert_power: false, // if positive means charge or discharge
    parallel_batteries: 2, // 1 to 8 rack modules
    auto_calculate_modules: true,
    modules: [
      {
        id: 'bat1',
        name: 'Батарея 1',
        soc_entity: 'sensor.bms_rack1_soc',
        current_entity: 'sensor.bms_rack1_current',
        voltage_entity: 'sensor.bms_rack1_voltage',
        power_entity: 'sensor.bms_rack1_power',
        temperature_entity: 'sensor.bms_rack1_temperature',
        capacity_kwh: 7.88
      },
      {
        id: 'bat2',
        name: 'Батарея 2',
        soc_entity: 'sensor.bms_rack2_soc',
        current_entity: 'sensor.bms_rack2_current',
        voltage_entity: 'sensor.bms_rack2_voltage',
        power_entity: 'sensor.bms_rack2_power',
        temperature_entity: 'sensor.bms_rack2_temperature',
        capacity_kwh: 5.12
      }
    ],
    module_entities: [
      { soc: 'sensor.bms_rack1_soc', volt: 'sensor.bms_rack1_voltage' },
      { soc: 'sensor.bms_rack2_soc', volt: 'sensor.bms_rack2_voltage' }
    ],
    color: '#10b981'
  },

  // 4. Grid & Non-Essential
  grid: {
    show: true,
    power_entity: 'sensor.deye_12k_inverter_total_grid_power',
    import_daily_entity: 'sensor.deye_12k_inverter_daily_energy_bought',
    export_daily_entity: 'sensor.deye_12k_inverter_daily_energy_sold',
    invert_power: false, // positive = export, negative = import
    show_car: true,
    car_power_entity: 'sensor.ev_charger_power',
    car_title: 'Авто',
    color: '#38bdf8'
  },

  // 5. Essential House Loads & Sub-Loads
  load: {
    show: true,
    essential_power_entity: 'sensor.deye_12k_inverter_essential_load_power',
    daily_house_entity: 'sensor.deye_12k_inverter_daily_load_energy',
    subloads: [
      { id: 'boiler', name: 'Бойлер', entity: 'sensor.boiler_power', icon: 'boiler' },
      { id: 'heat_pump', name: 'Тепловий насос', entity: 'sensor.heat_pump_power', icon: 'heat_pump' },
      { id: 'other', name: 'Інше', entity: 'sensor.other_loads_power', icon: 'other' }
    ],
    color: '#06b6d4'
  }
};
