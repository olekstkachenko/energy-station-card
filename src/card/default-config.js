/**
 * Default configuration and schema for Energy Station Card
 */
export const DEFAULT_CONFIG = {
  title: 'Energy Station',
  card_style: 'full', // 'full' | 'compact'
  theme_mode: 'dark', // 'dark' | 'light'
  language: 'uk', // 'uk' | 'en'
  card_scale: 1.0, // Масштаб картки: 0.7 - 2.0
  max_width: '1400px', // '1400px' | '1600px' | '1800px' | '100%'
  show_quick_settings: true, // Показувати панель швидких перемикачів на картці
  controls: {
    show: true,
    solar_charge_entity: 'number.deye_12k_inverter_max_charge_current',
    grid_charge_entity: 'number.deye_12k_inverter_grid_charge_current',
    sell_power_entity: 'number.deye_12k_inverter_export_surplus_power'
  },
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
    installed_power: 12.0, // kWp: загальна встановлена пікова потужність СЕС (якщо порожньо — сумує поля)
    total_power_entity: '', // Порожньо за замовчуванням — картка автоматично сумує потужність усіх стрінгів
    daily_yield_entity: 'sensor.deye_12k_inverter_daily_solar_energy',
    target_daily_yield: 55.0, // kWh
    auto_distribute_power: true,
    strings: [
      {
        id: 'pv1',
        name: 'PV 1',
        capacity_kw: 4.0, // kWp встановлена потужність поля 1
        voltage_entity: 'sensor.deye_12k_inverter_pv1_voltage',
        current_entity: 'sensor.deye_12k_inverter_pv1_current',
        power_entity: 'sensor.deye_12k_inverter_pv1_power'
      },
      {
        id: 'pv2',
        name: 'PV 2',
        capacity_kw: 4.0, // kWp встановлена потужність поля 2
        voltage_entity: 'sensor.deye_12k_inverter_pv2_voltage',
        current_entity: 'sensor.deye_12k_inverter_pv2_current',
        power_entity: 'sensor.deye_12k_inverter_pv2_power'
      },
      {
        id: 'pv3',
        name: 'PV 3',
        capacity_kw: 4.0, // kWp встановлена потужність поля 3
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
    power_entity: '', // За замовчуванням порожньо (в інверторах Deye немає окремого датчика потужності)
    status_entity: 'sensor.deye_12k_inverter_inverter_status',
    status_text: 'ПРАЦЮЄ',
    ac_temperature_entity: 'sensor.deye_12k_inverter_ac_temperature',
    dc_temperature_entity: 'sensor.deye_12k_inverter_dc_temperature',
    voltage_entity: 'sensor.deye_12k_inverter_grid_voltage',
    current_entity: 'sensor.deye_12k_inverter_grid_current',
    frequency_entity: 'sensor.deye_12k_inverter_grid_frequency',
    show_self_consumption: true,
    self_consumption_entity: '',
    standby_power: 100, // Watts: typical idle / conversion losses
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
    show: true, // Wind turbines enabled
    turbine_count: 2, // 1 to 4 wind turbines
    animation_threshold: 50, // Default Watts threshold to trigger rotor rotation
    max_power: 3000, // Watts: power for maximum rotor rotation speed
    daily_energy_entity: '',
    monthly_energy_entity: '',
    turbines: [
      {
        id: 'turbine_1',
        name: 'Вітряк 1',
        power_entity: 'sensor.wind_turbine_1_power',
        speed_entity: '',
        rpm_entity: '',
        daily_energy_entity: '',
        monthly_energy_entity: '',
        animation_threshold: 50
      },
      {
        id: 'turbine_2',
        name: 'Вітряк 2',
        power_entity: 'sensor.wind_turbine_2_power',
        speed_entity: '',
        rpm_entity: '',
        daily_energy_entity: '',
        monthly_energy_entity: '',
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
    cell_delta_entity: '',
    capacity_kwh: 13.0,
    capacity_entity: 'sensor.inverter_12_kvt_battery_capacity',
    charge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_charge',
    discharge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_discharge',
    reserve_soc: 20, // %
    power_sign: 'deye', // 'deye' (- = Заряд, + = Розряд) | 'standard' (+ = Заряд, - = Розряд)
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
        cell_delta_entity: 'sensor.bms_rack1_cell_delta',
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
        cell_delta_entity: 'sensor.bms_rack2_cell_delta',
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
    external_power_entity: '', // Зовнішній лічильник/трансформатор струму (CT clamp) на вводі мережі (опціонально)
    voltage_entity: '', // сенсор напруги мережі (якщо порожньо — береться з inverter.voltage_entity)
    status_entity: '', // бінарний сенсор наявності мережі (опціонально)
    voltage_threshold: 90, // поріг напруги (В), нижче якого мережа вважається вимкненою (блекаут)
    import_daily_entity: 'sensor.deye_12k_inverter_daily_energy_bought',
    export_daily_entity: 'sensor.deye_12k_inverter_daily_energy_sold',
    selling_enabled: false, // чи продає станція в мережу (Зелений тариф / Net billing). Якщо false — анімація та розрахунок продажу ЗАВЖДИ вимкнені!
    power_sign: 'deye', // 'deye' (+ = Імпорт, - = Експорт) | 'inverted' (+ = Експорт, - = Імпорт)
    min_power_threshold: 50, // Watts (нижче цього значення анімація вимикається)
    invert_power: false,
    show_car: false,
    car_power_entity: '',
    car_title: 'Авто',
    show_non_essential: false,
    non_essential_power_entity: '',
    color: '#38bdf8'
  },

  // 5. Essential House Loads & Sub-Loads
  load: {
    show: true,
    auto_calculate: true, // Авторозрахунок споживання будинку за балансом енергії
    separate_export: true, // Відокремлювати експорт від навантаження будинку (для Deye / Sunsynk)
    essential_power_entity: 'sensor.deye_12k_inverter_load_power',
    daily_house_entity: 'sensor.deye_12k_inverter_daily_load_energy',
    subloads: [
      { id: 'boiler', name: 'Бойлер', entity: 'sensor.boiler_power', icon: 'boiler' },
      { id: 'heat_pump', name: 'Тепловий насос', entity: 'sensor.heat_pump_power', icon: 'heat_pump' },
      { id: 'other', name: 'Інше', entity: 'sensor.other_loads_power', icon: 'other' }
    ],
    color: '#06b6d4'
  },

  // 6. Tariffs & Electricity Cost Calculation (Двозонний тариф День / Ніч та Зелений Тариф)
  tariffs: {
    enabled: true,
    currency: 'грн',
    day_rate: 4.32,
    night_rate: 2.16,
    export_rate: 5.30, // Зелений тариф / продаж в мережу (грн/кВт·год)
    night_start_hour: 23, // 23:00
    night_end_hour: 7,    // 07:00
    show_daily_cost: true, // показувати вартість біля імпорту з мережі
    show_export_income: true, // показувати дохід від експорту (Зелений тариф)
    show_active_badge: true, // показувати бейдж поточного активного тарифу
    show_solar_savings: true // показувати суму заощаджень від сонця
  }
};

