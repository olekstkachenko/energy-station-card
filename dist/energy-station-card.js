var po = Object.defineProperty;
var fo = (e, t, i) => t in e ? po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var He = (e, t, i) => fo(e, typeof t != "symbol" ? t + "" : t, i);
const pe = {
  title: "Energy Station",
  card_style: "full",
  // 'full' | 'compact'
  theme_mode: "dark",
  // 'dark' | 'light'
  language: "uk",
  // 'uk' | 'en'
  card_scale: 1,
  // Масштаб картки: 0.7 - 2.0
  max_width: "1400px",
  // '1400px' | '1600px' | '1800px' | '100%'
  show_quick_settings: !0,
  // Показувати панель швидких перемикачів на картці
  // Visual & Typography Customization (Шрифти, розміри та стилі)
  appearance: {
    font_family: "Inter",
    // 'Inter' | 'JetBrains Mono' | 'Roboto' | 'Orbitron' | 'Exo 2' | 'Ubuntu' | 'system-ui'
    mono_font_family: "JetBrains Mono",
    // 'JetBrains Mono' | 'Roboto Mono' | 'Orbitron' | 'Fira Code' | 'Share Tech Mono'
    power_font_size: "normal",
    // 'compact' (18px) | 'normal' (22px) | 'large' (28px) | 'huge' (34px)
    label_font_size: "normal",
    // 'compact' (10px) | 'normal' (12px) | 'large' (14px)
    theme_preset: "cyber_dark",
    // 'cyber_dark' | 'oled_black' | 'clean_light'
    density: "balanced",
    // 'compact' | 'balanced' | 'spacious'
    glow_intensity: "high"
    // 'off' | 'subtle' | 'high'
  },
  controls: {
    show: !0,
    solar_charge_entity: "number.deye_12k_inverter_max_charge_current",
    grid_charge_entity: "number.deye_12k_inverter_grid_charge_current",
    sell_power_entity: "number.deye_12k_inverter_export_surplus_power"
  },
  refresh_rate: 1e3,
  animations: {
    enabled: !0,
    speed: 1.2,
    // seconds per pulse cycle
    glow_intensity: "high"
    // 'off' | 'subtle' | 'high'
  },
  // 1. Solar PV Configuration
  solar: {
    show: !0,
    pv_count: 3,
    // 1 to 16 strings/trackers
    installed_power: 12,
    // kWp: загальна встановлена пікова потужність СЕС (якщо порожньо — сумує поля)
    total_power_entity: "",
    // Порожньо за замовчуванням — картка автоматично сумує потужність усіх стрінгів
    daily_yield_entity: "sensor.deye_12k_inverter_daily_solar_energy",
    target_daily_yield: 55,
    // kWh
    auto_distribute_power: !0,
    show_metrics: !0,
    // Показувати струм (А) та напругу (В) для кожного поля
    strings: [
      {
        id: "pv1",
        name: "PV 1",
        capacity_kw: 4,
        // kWp встановлена потужність поля 1
        voltage_entity: "sensor.deye_12k_inverter_pv1_voltage",
        current_entity: "sensor.deye_12k_inverter_pv1_current",
        power_entity: "sensor.deye_12k_inverter_pv1_power"
      },
      {
        id: "pv2",
        name: "PV 2",
        capacity_kw: 4,
        // kWp встановлена потужність поля 2
        voltage_entity: "sensor.deye_12k_inverter_pv2_voltage",
        current_entity: "sensor.deye_12k_inverter_pv2_current",
        power_entity: "sensor.deye_12k_inverter_pv2_power"
      },
      {
        id: "pv3",
        name: "PV 3",
        capacity_kw: 4,
        // kWp встановлена потужність поля 3
        voltage_entity: "sensor.deye_12k_inverter_pv3_voltage",
        current_entity: "sensor.deye_12k_inverter_pv3_current",
        power_entity: "sensor.deye_12k_inverter_pv3_power"
      }
    ],
    color: "#fbbf24"
  },
  // 2. Inverter & AUX Port
  inverter: {
    model_name: "DEYE SUN-12K",
    power_entity: "",
    // За замовчуванням порожньо (в інверторах Deye немає окремого датчика потужності)
    status_entity: "sensor.deye_12k_inverter_inverter_status",
    status_text: "ПРАЦЮЄ",
    ac_temperature_entity: "sensor.deye_12k_inverter_ac_temperature",
    dc_temperature_entity: "sensor.deye_12k_inverter_dc_temperature",
    voltage_entity: "sensor.deye_12k_inverter_grid_voltage",
    current_entity: "sensor.deye_12k_inverter_grid_current",
    frequency_entity: "sensor.deye_12k_inverter_grid_frequency",
    show_self_consumption: !0,
    self_consumption_entity: "",
    standby_power: 100,
    // Watts: typical idle / conversion losses
    color: "#f97316"
  },
  aux: {
    show: !0,
    type: "microinverter",
    // 'microinverter' | 'generator' | 'wind' | 'smart_load' | 'none'
    title: "Мікроінвертор",
    subtitle: "Джерело → GEN port",
    power_entity: "sensor.deye_12k_inverter_aux_load_power",
    wind_animation_threshold: 50,
    // Watts: minimum power threshold to start rotor spinning
    color: "#c084fc"
  },
  // Wind Turbines System (Dual or Multiple Wind Turbines)
  wind: {
    show: !0,
    // Wind turbines enabled
    turbine_count: 2,
    // 1 to 4 wind turbines
    animation_threshold: 50,
    // Default Watts threshold to trigger rotor rotation
    max_power: 3e3,
    // Watts: power for maximum rotor rotation speed
    daily_energy_entity: "",
    monthly_energy_entity: "",
    turbines: [
      {
        id: "turbine_1",
        name: "Вітряк 1",
        power_entity: "sensor.wind_turbine_1_power",
        speed_entity: "",
        rpm_entity: "",
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: 50
      },
      {
        id: "turbine_2",
        name: "Вітряк 2",
        power_entity: "sensor.wind_turbine_2_power",
        speed_entity: "",
        rpm_entity: "",
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: 50
      }
    ]
  },
  // 3. Battery System & Individual Rack Modules
  battery: {
    show: !0,
    soc_entity: "sensor.deye_12k_inverter_battery_soc",
    power_entity: "sensor.deye_12k_inverter_battery_power",
    voltage_entity: "sensor.deye_12k_inverter_battery_voltage",
    current_entity: "sensor.deye_12k_inverter_battery_current",
    temperature_entity: "sensor.deye_12k_inverter_battery_temperature",
    cell_delta_entity: "",
    capacity_kwh: 13,
    capacity_entity: "sensor.inverter_12_kvt_battery_capacity",
    charge_daily_entity: "sensor.deye_12k_inverter_daily_battery_charge",
    discharge_daily_entity: "sensor.deye_12k_inverter_daily_battery_discharge",
    reserve_soc: 20,
    // %
    power_sign: "deye",
    // 'deye' (- = Заряд, + = Розряд) | 'standard' (+ = Заряд, - = Розряд)
    invert_power: !1,
    // if positive means charge or discharge
    parallel_batteries: 2,
    // 1 to 8 rack modules
    auto_calculate_modules: !0,
    modules: [
      {
        id: "bat1",
        name: "Батарея 1",
        soc_entity: "sensor.bms_rack1_soc",
        current_entity: "sensor.bms_rack1_current",
        voltage_entity: "sensor.bms_rack1_voltage",
        power_entity: "sensor.bms_rack1_power",
        temperature_entity: "sensor.bms_rack1_temperature",
        cell_delta_entity: "sensor.bms_rack1_cell_delta",
        capacity_kwh: 7.88
      },
      {
        id: "bat2",
        name: "Батарея 2",
        soc_entity: "sensor.bms_rack2_soc",
        current_entity: "sensor.bms_rack2_current",
        voltage_entity: "sensor.bms_rack2_voltage",
        power_entity: "sensor.bms_rack2_power",
        temperature_entity: "sensor.bms_rack2_temperature",
        cell_delta_entity: "sensor.bms_rack2_cell_delta",
        capacity_kwh: 5.12
      }
    ],
    module_entities: [
      { soc: "sensor.bms_rack1_soc", volt: "sensor.bms_rack1_voltage" },
      { soc: "sensor.bms_rack2_soc", volt: "sensor.bms_rack2_voltage" }
    ],
    color: "#10b981"
  },
  // 4. Grid & Non-Essential
  grid: {
    show: !0,
    power_entity: "sensor.deye_12k_inverter_total_grid_power",
    external_power_entity: "",
    // Зовнішній лічильник/трансформатор струму (CT clamp) на вводі мережі (опціонально)
    auto_calculate: !0,
    // Авторозрахунок повного споживання мережі (Grid Port + House Load), якщо сенсор CT відсутній
    voltage_entity: "",
    // сенсор напруги мережі (якщо порожньо — береться з inverter.voltage_entity)
    status_entity: "",
    // бінарний сенсор наявності мережі (опціонально)
    voltage_threshold: 90,
    // поріг напруги (В), нижче якого мережа вважається вимкненою (блекаут)
    import_daily_entity: "sensor.deye_12k_inverter_daily_energy_bought",
    export_daily_entity: "sensor.deye_12k_inverter_daily_energy_sold",
    selling_enabled: !1,
    // чи продає станція в мережу (Зелений тариф / Net billing). Якщо false — анімація та розрахунок продажу ЗАВЖДИ вимкнені!
    power_sign: "deye",
    // 'deye' (+ = Імпорт, - = Експорт) | 'inverted' (+ = Експорт, - = Імпорт)
    min_power_threshold: 50,
    // Watts (нижче цього значення анімація вимикається)
    invert_power: !1,
    show_car: !1,
    car_power_entity: "",
    car_title: "Авто",
    show_non_essential: !1,
    non_essential_power_entity: "",
    color: "#38bdf8"
  },
  // 5. Essential House Loads & Sub-Loads
  load: {
    show: !0,
    auto_calculate: !0,
    // Авторозрахунок споживання будинку за балансом енергії
    separate_export: !0,
    // Відокремлювати експорт від навантаження будинку (для Deye / Sunsynk)
    essential_power_entity: "sensor.deye_12k_inverter_load_power",
    daily_house_entity: "sensor.deye_12k_inverter_daily_load_energy",
    subloads: [
      { id: "boiler", name: "Бойлер", entity: "sensor.boiler_power", icon: "boiler" },
      { id: "heat_pump", name: "Тепловий насос", entity: "sensor.heat_pump_power", icon: "heat_pump" },
      { id: "other", name: "Інше", entity: "sensor.other_loads_power", icon: "other" }
    ],
    color: "#06b6d4"
  },
  // 6. Tariffs & Electricity Cost Calculation (Двозонний тариф День / Ніч та Зелений Тариф)
  tariffs: {
    enabled: !0,
    currency: "грн",
    day_rate: 4.32,
    night_rate: 2.16,
    export_rate: 5.3,
    // Зелений тариф / продаж в мережу (грн/кВт·год)
    night_start_hour: 23,
    // 23:00
    night_end_hour: 7,
    // 07:00
    import_day_entity: "",
    // Опціональний прямий сенсор денного імпорту (кВт·год)
    import_night_entity: "",
    // Опціональний прямий сенсор нічного імпорту (кВт·год)
    show_daily_cost: !0,
    // показувати вартість біля імпорту з мережі
    show_export_income: !0,
    // показувати дохід від експорту (Зелений тариф)
    show_active_badge: !0,
    // показувати бейдж поточного активного тарифу
    show_solar_savings: !0,
    // показувати суму заощаджень від сонця
    show_night_savings: !0,
    // показувати заощадження від нічного тарифу АКБ
    show_net_benefit: !0
    // показувати чистий баланс вигоди/витрат за добу
  }
}, fe = 'width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"', ge = {
  sun: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,
  pv_panel: `<svg ${fe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg ${fe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg ${fe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,
  wind_turbine: `<svg width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <!-- Mast / Tower -->
    <path d="M11 11.5L9.5 22m3.5-10.5L14.5 22M8 22h8" stroke="currentColor" stroke-width="1.8"/>
    <!-- Rotor Hub center -->
    <circle cx="12" cy="10" r="2.2" fill="currentColor"/>
    <!-- 3-Blade Aerodynamic Rotor Group -->
    <g class="turbine-rotor" style="transform-origin: 12px 10px;">
      <path d="M12 10 L12 2 C12.6 4.5 13.8 6.5 12.8 9.5 Z" fill="currentColor" stroke="none"/>
      <path d="M12 10 L18.9 14 C16.5 15.2 14.2 14.8 12.5 11.5 Z" fill="currentColor" stroke="none"/>
      <path d="M12 10 L5.1 14 C6.2 11.6 8.5 11.2 11.5 10.5 Z" fill="currentColor" stroke="none"/>
    </g>
  </svg>`,
  settings: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg ${fe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,
  globe: `<svg ${fe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
class go extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general", this._isInternalChange = !1, this._debounceTimer = null, this._rendered = !1, this._isDialogExpanded = !1;
  }
  set hass(t) {
    this._hass = t;
  }
  setConfig(t) {
    if (this._config = JSON.parse(JSON.stringify(t || pe)), this._isInternalChange) {
      this._isInternalChange = !1;
      return;
    }
    this.render();
  }
  connectedCallback() {
    this._rendered || this.render();
    const t = () => {
      typeof window < "u" && window.innerWidth >= 850 && this._applyExpand(!0);
    };
    t(), setTimeout(t, 80), setTimeout(t, 250);
  }
  _findHuiDialog() {
    let t = this;
    for (; t; ) {
      if (t.tagName && t.tagName.toLowerCase() === "hui-dialog-edit-card")
        return t;
      if (t.parentElement)
        t = t.parentElement;
      else if (t.parentNode)
        t = t.parentNode;
      else if (t.getRootNode && t.getRootNode().host)
        t = t.getRootNode().host;
      else
        break;
    }
    if (typeof document < "u") {
      const i = document.querySelector("hui-dialog-edit-card") || document.querySelector("ha-dialog-edit-card");
      if (i) return i;
      try {
        const n = document.querySelector("home-assistant");
        if (n != null && n.shadowRoot) {
          const r = n.shadowRoot.querySelector("hui-dialog-edit-card") || n.shadowRoot.querySelector("ha-dialog-edit-card");
          if (r) return r;
          const a = n.shadowRoot.querySelectorAll("*");
          for (const o of a)
            if (o.shadowRoot) {
              const s = o.shadowRoot.querySelector("hui-dialog-edit-card") || o.shadowRoot.querySelector("ha-dialog-edit-card");
              if (s) return s;
            }
        }
      } catch {
      }
    }
    return null;
  }
  _findHaDialog(t) {
    if (t != null && t.shadowRoot) {
      const n = t.shadowRoot.querySelector("ha-dialog") || t.shadowRoot.querySelector("mwc-dialog");
      if (n) return n;
    }
    let i = this;
    for (; i; ) {
      if (i.tagName && (i.tagName.toLowerCase() === "ha-dialog" || i.tagName.toLowerCase() === "mwc-dialog"))
        return i;
      if (i.parentElement)
        i = i.parentElement;
      else if (i.parentNode)
        i = i.parentNode;
      else if (i.getRootNode && i.getRootNode().host)
        i = i.getRootNode().host;
      else
        break;
    }
    return typeof document < "u" ? document.querySelector("ha-dialog") || document.querySelector("mwc-dialog") : null;
  }
  _applyExpand(t) {
    var r, a, o;
    this._isDialogExpanded = t;
    const i = this._findHuiDialog(), n = this._findHaDialog(i);
    if (t) {
      if (i) {
        typeof i._enlarge == "function" && !i.large ? i._enlarge() : (i.large = !0, i.setAttribute("large", ""));
        try {
          if (i.shadowRoot) {
            let s = i.shadowRoot.getElementById("energy-station-wide-style");
            s || (s = document.createElement("style"), s.id = "energy-station-wide-style", s.textContent = `
                ha-dialog {
                  --mdc-dialog-min-width: 95vw !important;
                  --mdc-dialog-max-width: 96vw !important;
                  --ha-dialog-max-width: 96vw !important;
                  --ha-dialog-width: 95vw !important;
                }
                .content {
                  width: 100% !important;
                  max-width: 100% !important;
                }
                .element-editor {
                  min-width: 0 !important;
                  flex: 1.1 !important;
                }
                .element-preview {
                  min-width: 0 !important;
                  flex: 0.9 !important;
                }
              `, i.shadowRoot.appendChild(s));
          }
        } catch {
        }
      }
      if (n) {
        n.style.setProperty("--mdc-dialog-min-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-width", "95vw", "important");
        try {
          const s = (r = n.shadowRoot) == null ? void 0 : r.querySelector(".mdc-dialog__surface");
          s && (s.style.setProperty("max-width", "96vw", "important"), s.style.setProperty("width", "95vw", "important"));
        } catch {
        }
      }
    } else {
      if (i) {
        typeof i._enlarge == "function" && i.large ? i._enlarge() : (i.large = !1, i.removeAttribute("large"));
        try {
          const s = (a = i.shadowRoot) == null ? void 0 : a.getElementById("energy-station-wide-style");
          s && s.remove();
        } catch {
        }
      }
      if (n) {
        n.style.removeProperty("--mdc-dialog-min-width"), n.style.removeProperty("--mdc-dialog-max-width"), n.style.removeProperty("--ha-dialog-max-width"), n.style.removeProperty("--ha-dialog-width"), n.style.removeProperty("--mdc-dialog-width");
        try {
          const s = (o = n.shadowRoot) == null ? void 0 : o.querySelector(".mdc-dialog__surface");
          s && (s.style.removeProperty("max-width"), s.style.removeProperty("width"));
        } catch {
        }
      }
    }
    this._updateExpandBtn();
  }
  _updateExpandBtn() {
    var n;
    const t = (n = this.shadowRoot) == null ? void 0 : n.getElementById("btnToggleExpand");
    if (!t) return;
    const i = this._isDialogExpanded;
    t.innerHTML = i ? "❐ Звичайний розмір" : "⛶ На весь екран", t.title = i ? "Згорнути вікно налаштувань до звичайного розміру" : "Розширити вікно налаштувань на весь екран";
  }
  _flushConfig() {
    this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null, this._dispatchConfig());
  }
  _dispatchConfig() {
    if (!this._config) return;
    this._isInternalChange = !0;
    const t = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  _valueChanged(t, i, n = !1) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const r = t.split(".");
    let a = this._config;
    for (let o = 0; o < r.length - 1; o++)
      a[r[o]] || (a[r[o]] = {}), a = a[r[o]];
    a[r[r.length - 1]] = i, this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null), n ? this._dispatchConfig() : this._debounceTimer = setTimeout(() => {
      this._dispatchConfig();
    }, 140);
  }
  _switchTab(t) {
    this._flushConfig(), this._currentTab = t, this.render();
  }
  _applyPreset(t) {
    this._config = JSON.parse(JSON.stringify(this._config || pe)), t === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
      {
        id: "pv1",
        name: "PV 1",
        voltage_entity: "sensor.deye_12k_inverter_pv1_voltage",
        current_entity: "sensor.deye_12k_inverter_pv1_current",
        power_entity: "sensor.deye_12k_inverter_pv1_power"
      },
      {
        id: "pv2",
        name: "PV 2",
        voltage_entity: "sensor.deye_12k_inverter_pv2_voltage",
        current_entity: "sensor.deye_12k_inverter_pv2_current",
        power_entity: "sensor.deye_12k_inverter_pv2_power"
      },
      {
        id: "pv3",
        name: "PV 3",
        voltage_entity: "sensor.deye_12k_inverter_pv3_voltage",
        current_entity: "sensor.deye_12k_inverter_pv3_current",
        power_entity: "sensor.deye_12k_inverter_pv3_power"
      }
    ], this._config.inverter.power_entity = "sensor.deye_12k_inverter_inverter_power", this._config.inverter.ac_temperature_entity = "sensor.deye_12k_inverter_ac_temperature", this._config.inverter.dc_temperature_entity = "sensor.deye_12k_inverter_dc_temperature", this._config.inverter.voltage_entity = "sensor.deye_12k_inverter_grid_voltage", this._config.inverter.current_entity = "sensor.deye_12k_inverter_grid_current", this._config.inverter.frequency_entity = "sensor.deye_12k_inverter_grid_frequency", this._config.battery.soc_entity = "sensor.deye_12k_inverter_battery_soc", this._config.battery.power_entity = "sensor.deye_12k_inverter_battery_power", this._config.battery.voltage_entity = "sensor.deye_12k_inverter_battery_voltage", this._config.battery.current_entity = "sensor.deye_12k_inverter_battery_current", this._config.battery.charge_daily_entity = "sensor.deye_12k_inverter_daily_battery_charge", this._config.battery.discharge_daily_entity = "sensor.deye_12k_inverter_daily_battery_discharge", this._config.battery.capacity_entity = "sensor.inverter_12_kvt_battery_capacity", this._config.battery.parallel_batteries = 2, this._config.battery.modules = [
      {
        id: "bat1",
        name: "Батарея 1",
        soc_entity: "sensor.bms_rack1_soc",
        current_entity: "sensor.bms_rack1_current",
        voltage_entity: "sensor.bms_rack1_voltage",
        power_entity: "sensor.bms_rack1_power",
        temperature_entity: "sensor.bms_rack1_temperature",
        capacity_kwh: 7.88
      },
      {
        id: "bat2",
        name: "Батарея 2",
        soc_entity: "sensor.bms_rack2_soc",
        current_entity: "sensor.bms_rack2_current",
        voltage_entity: "sensor.bms_rack2_voltage",
        power_entity: "sensor.bms_rack2_power",
        temperature_entity: "sensor.bms_rack2_temperature",
        capacity_kwh: 5.12
      }
    ], this._config.grid.power_entity = "sensor.deye_12k_inverter_total_grid_power", this._config.grid.import_daily_entity = "sensor.deye_12k_inverter_daily_energy_bought", this._config.grid.export_daily_entity = "sensor.deye_12k_inverter_daily_energy_sold", this._config.load.auto_calculate = !0, this._config.load.separate_export = !0, this._config.load.essential_power_entity = "sensor.deye_12k_inverter_load_power", this._config.load.daily_house_entity = "sensor.deye_12k_inverter_daily_load_energy") : t === "deye_solarman" && (this._config.inverter.model_name = "DEYE HYBRID", this._config.solar.pv_count = 2, this._config.solar.total_power_entity = "sensor.solarman_pv_total_power", this._config.solar.daily_yield_entity = "sensor.solarman_daily_production", this._config.solar.strings = [
      {
        id: "pv1",
        name: "PV 1",
        voltage_entity: "sensor.solarman_pv1_voltage",
        current_entity: "sensor.solarman_pv1_current",
        power_entity: "sensor.solarman_pv1_power"
      },
      {
        id: "pv2",
        name: "PV 2",
        voltage_entity: "sensor.solarman_pv2_voltage",
        current_entity: "sensor.solarman_pv2_current",
        power_entity: "sensor.solarman_pv2_power"
      }
    ], this._config.inverter.power_entity = "sensor.solarman_inverter_power", this._config.battery.soc_entity = "sensor.solarman_battery_soc", this._config.battery.power_entity = "sensor.solarman_battery_power", this._config.grid.power_entity = "sensor.solarman_grid_external_power", this._config.load.auto_calculate = !0, this._config.load.separate_export = !0, this._config.load.essential_power_entity = "sensor.solarman_essential_load"), this._dispatchConfig(), this.render();
  }
  render() {
    var o, s, l, c, d, _, h, x, u, y, v, E, p, f, g, w, k, I, P, m, F, U, te, Q, ne, S, B, T, C, R, Z, ee, he, ue, Ie, j, Y, V, re, X, xe, ot, It, jt, Oe, De, Bt, Be, Ge, Fe, st, Te, we, ut, Tt, We, lt, Ze, z, ie, Ee, Ve, Se, oe, _e, W, et, Ye, Ke, wi, je, Ei, ki, oi, si, Si, li, dt, Nt, Vi, di, _t, Je, ct, Lt, At, Ft, Pt, Rt, Mt, Ht, Ut, Yt, ci, Ci, $i, pi, fi;
    if (!this._config) return;
    this._rendered = !0;
    const t = this._config, i = (o = this.shadowRoot) == null ? void 0 : o.activeElement;
    let n = null, r = null, a = null;
    if (i && (i.id ? n = `#${i.id}` : ((s = i.dataset) == null ? void 0 : s.idx) !== void 0 && i.className && (n = `.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`), "selectionStart" in i && "selectionEnd" in i && (r = i.selectionStart, a = i.selectionEnd)), this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: #e2e8f0;
          background: #090e1a;
          border-radius: 14px;
          padding: 16px;
          box-sizing: border-box;
        }
        .editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #1e293b;
          margin-bottom: 14px;
          gap: 10px;
          flex-wrap: wrap;
        }
        .editor-title {
          font-size: 16px;
          font-weight: 700;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .presets-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .preset-badge {
          background: #1e293b;
          border: 1px solid #334155;
          color: #f1f5f9;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          user-select: none;
        }
        .preset-badge:hover {
          background: #0284c7;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
          transform: translateY(-1px);
        }
        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 6px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid #1e293b;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .tab-btn {
          flex: 1 1 auto;
          min-width: 110px;
          background: transparent;
          border: 1px solid transparent;
          color: #94a3b8;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11.5px;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          user-select: none;
        }
        .tab-btn:hover {
          background: #1e293b;
          color: #f1f5f9;
          border-color: #334155;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.45);
        }
        .field-group {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 14px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .field-group-title {
          font-weight: 700;
          font-size: 13px;
          color: #38bdf8;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .field-row {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        label {
          font-size: 11px;
          color: #cbd5e1;
          font-weight: 500;
        }
        input[type="text"], input[type="number"], select {
          background: #080d19;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          outline: none;
          box-sizing: border-box;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border-color: #38bdf8;
          background: #0b1324;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
        }
        .slider-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        input[type="range"] {
          flex: 1;
          accent-color: #0284c7;
          cursor: pointer;
        }
        .field-hint {
          font-size: 10.5px;
          color: #94a3b8;
          margin-top: 2px;
          line-height: 1.35;
        }
        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: rgba(8, 13, 25, 0.5);
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 8px 12px;
          transition: all 0.2s;
        }
        .checkbox-row:hover {
          border-color: #334155;
          background: rgba(15, 23, 42, 0.8);
        }
        .checkbox-row input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #0284c7;
          cursor: pointer;
          flex-shrink: 0;
        }
        .checkbox-row span {
          font-size: 11.5px;
          color: #e2e8f0;
          user-select: none;
        }
        .fields-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 12px;
        }
        .full-width {
          grid-column: 1 / -1;
        }
      </style>

      <div class="editor-header">
        <div class="editor-title">
          <span>⚡ Energy Station</span>
          <span style="font-size: 10px; background: rgba(245,158,11,0.2); color: #fbbf24; padding: 2px 7px; border-radius: 4px; border: 1px solid rgba(245,158,11,0.3);">HA PRO v1.2.9</span>
        </div>
        <div class="presets-row">
          <button class="preset-badge" id="btnToggleExpand" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8;" title="Розгорнути вікно налаштувань на весь екран / згорнути до стандартного розміру">
            ${this._isDialogExpanded ? "❐ Звичайний розмір" : "⛶ На весь екран"}
          </button>
          <button class="preset-badge" id="btnPresetEsp" title="Швидко застосувати типові сенсори прошивки ESPHome Deye">⚡ ESPHome Deye</button>
          <button class="preset-badge" id="btnPresetSolarman" title="Швидко застосувати сенсори інтеграції Solarman">☀️ Solarman</button>
        </div>
      </div>

      <!-- TABS -->
      <div class="tabs">
        <button class="tab-btn ${this._currentTab === "general" ? "active" : ""}" data-tab="general">⚙️ Загальні</button>
        <button class="tab-btn ${this._currentTab === "solar" ? "active" : ""}" data-tab="solar">☀️ PV Сонячні</button>
        <button class="tab-btn ${this._currentTab === "inverter" ? "active" : ""}" data-tab="inverter">⚡ Інвертор & AUX</button>
        <button class="tab-btn ${this._currentTab === "battery" ? "active" : ""}" data-tab="battery">🔋 Батарея & Стек</button>
        <button class="tab-btn ${this._currentTab === "grid" ? "active" : ""}" data-tab="grid">🌐 Мережа & Авто</button>
        <button class="tab-btn ${this._currentTab === "loads" ? "active" : ""}" data-tab="loads">🏠 Дім & Споживачі</button>
        <button class="tab-btn ${this._currentTab === "tariffs" ? "active" : ""}" data-tab="tariffs">💰 Тарифи</button>
      </div>

      <!-- TAB CONTENT: GENERAL -->
      <div style="display: ${this._currentTab === "general" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">Основні параметри картки</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Назва станції / Заголовок:</label>
              <input type="text" id="title" value="${t.title || "Energy Station"}">
            </div>
            <div class="field-row">
              <label>Максимальна ширина картки (Max Width):</label>
              <select id="cardMaxWidth">
                <option value="1400px" ${t.max_width === "1400px" || !t.max_width ? "selected" : ""}>1400px (Стандартна)</option>
                <option value="1600px" ${t.max_width === "1600px" ? "selected" : ""}>1600px (Широка)</option>
                <option value="1800px" ${t.max_width === "1800px" ? "selected" : ""}>1800px (Дуже широка / 2K)</option>
                <option value="100%" ${t.max_width === "100%" ? "selected" : ""}>100% (На всю ширину панелі)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Тема оформлення (Theme):</label>
              <select id="themeMode">
                <option value="dark" ${t.theme_mode !== "light" ? "selected" : ""}>🌙 Темна (Dark)</option>
                <option value="light" ${t.theme_mode === "light" ? "selected" : ""}>☀️ Світла (Light)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Мова інтерфейсу (Language):</label>
              <select id="cardLanguage">
                <option value="uk" ${t.language !== "en" ? "selected" : ""}>🇺🇦 Українська (UK)</option>
                <option value="en" ${t.language === "en" ? "selected" : ""}>🇬🇧 English (EN)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Масштаб картки (Zoom / Scale):</label>
              <div class="slider-row">
                <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${t.card_scale || 1}">
                <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((t.card_scale || 1) * 100)}%</span>
              </div>
            </div>
            <div class="field-row">
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((l = t.animations) == null ? void 0 : l.speed) || 1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((c = t.animations) == null ? void 0 : c.speed) || 1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${t.show_quick_settings !== !1 ? "checked" : ""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((d = t.animations) == null ? void 0 : d.enabled) !== !1 ? "checked" : ""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((_ = t.controls) == null ? void 0 : _.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((h = t.controls) == null ? void 0 : h.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((x = t.controls) == null ? void 0 : x.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: SOLAR -->
      <div style="display: ${this._currentTab === "solar" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">☀️ Сонячне поле (PV панелі)</div>
          <div class="fields-grid">
            <div class="field-row full-width">
              <label>Кількість панелей/стрингів (1 - 16):</label>
              <div class="slider-row">
                <input type="range" id="solarPvCount" min="1" max="16" value="${((u = t.solar) == null ? void 0 : u.pv_count) || 3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y = t.solar) == null ? void 0 : y.pv_count) || 3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((v = t.solar) == null ? void 0 : v.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((E = t.solar) == null ? void 0 : E.daily_yield_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((p = t.solar) == null ? void 0 : p.target_daily_yield) || 55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((f = t.solar) == null ? void 0 : f.installed_power) !== void 0 ? t.solar.installed_power : 12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((g = t.solar) == null ? void 0 : g.show_metrics) !== !1 ? "checked" : ""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((w = t.solar) == null ? void 0 : w.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((k = t.solar) == null ? void 0 : k.pv_count) || 3 }).map((ye, M) => {
      var mt, vt;
      const D = M + 1, q = ((vt = (mt = t.solar) == null ? void 0 : mt.strings) == null ? void 0 : vt[M]) || {}, Qe = `sensor.deye_12k_inverter_pv${D}_voltage`, yt = `sensor.deye_12k_inverter_pv${D}_current`, bt = `sensor.deye_12k_inverter_pv${D}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${D} (Стрінг ${D})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${M}" value="${q.name || `PV ${D}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${D} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${M}" value="${q.voltage_entity !== void 0 ? q.voltage_entity : Qe}" placeholder="${Qe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${D} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${M}" value="${q.current_entity !== void 0 ? q.current_entity : yt}" placeholder="${yt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${D} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${M}" value="${q.capacity_kw !== void 0 ? q.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${D} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${M}" value="${q.power_entity !== void 0 ? q.power_entity : bt}" placeholder="${bt} (авто P = U × I)">
                    </div>
                  </div>
                </div>
              `;
    }).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: INVERTER & AUX -->
      <div style="display: ${this._currentTab === "inverter" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">⚡ Гібридний інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Модель / Назва на шильдику:</label>
              <input type="text" id="invModel" value="${((I = t.inverter) == null ? void 0 : I.model_name) || "DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((P = t.inverter) == null ? void 0 : P.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((m = t.inverter) == null ? void 0 : m.show_self_consumption) !== !1 ? "checked" : ""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((F = t.inverter) == null ? void 0 : F.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((U = t.inverter) == null ? void 0 : U.standby_power) !== void 0 ? t.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((te = t.inverter) == null ? void 0 : te.standby_power) !== void 0 ? t.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((Q = t.inverter) == null ? void 0 : Q.ac_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((ne = t.inverter) == null ? void 0 : ne.dc_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((S = t.inverter) == null ? void 0 : S.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((B = t.inverter) == null ? void 0 : B.current_entity) || ""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((T = t.inverter) == null ? void 0 : T.frequency_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((C = t.aux) == null ? void 0 : C.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((R = t.aux) == null ? void 0 : R.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((Z = t.aux) == null ? void 0 : Z.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((ee = t.aux) == null ? void 0 : ee.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((he = t.aux) == null ? void 0 : he.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((ue = t.aux) == null ? void 0 : ue.type) === "microinverter" && (!((Ie = t.aux) != null && Ie.title) || ((j = t.aux) == null ? void 0 : j.title) === "Вітрогенератор") ? "Мікроінвертор" : ((Y = t.aux) == null ? void 0 : Y.title) || (((V = t.aux) == null ? void 0 : V.type) === "generator" ? "Генератор" : ((re = t.aux) == null ? void 0 : re.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((X = t.aux) == null ? void 0 : X.power_entity) || ""}">
            </div>
          </div>
        </div>

        <!-- WIND TURBINES SECTION (Supports Multiple Turbines) -->
        <div class="field-group" style="border-color: rgba(6, 182, 212, 0.45); background: rgba(8, 47, 73, 0.2);">
          <div class="field-group-title" style="color: #22d3ee;">
            <span>💨 Вітропарк (Вітрогенератори)</span>
            <span style="font-size: 10px; background: rgba(6, 182, 212, 0.2); padding: 2px 7px; border-radius: 4px; color: #67e8f9;">Multi-Turbine System</span>
          </div>

          <div class="field-row">
            <label>Кількість вітряків у системі (1 - 4):</label>
            <div class="slider-row">
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((xe = t.wind) == null ? void 0 : xe.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((ot = t.wind) == null ? void 0 : ot.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((It = t.wind) == null ? void 0 : It.animation_threshold) || ((jt = t.aux) == null ? void 0 : jt.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((Oe = t.wind) == null ? void 0 : Oe.animation_threshold) || ((De = t.aux) == null ? void 0 : De.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Bt = t.wind) == null ? void 0 : Bt.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((Be = t.wind) == null ? void 0 : Be.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((Ge = t.wind) == null ? void 0 : Ge.turbine_count) || 2 }).map((ye, M) => {
      var q, Qe;
      const D = ((Qe = (q = t.wind) == null ? void 0 : q.turbines) == null ? void 0 : Qe[M]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${M}" value="${D.name || `Вітряк ${M + 1}`}" placeholder="Назва (напр. Вітряк ${M + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${M}" value="${D.power_entity || `sensor.wind_turbine_${M + 1}_power`}" placeholder="sensor.wind_turbine_${M + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${M}" value="${D.rpm_entity || D.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${M}" value="${D.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${M + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${M}" value="${D.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${M + 1}_monthly_energy">
                  </div>
                </div>
              `;
    }).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab === "battery" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Рівень заряду Battery SOC (%) (сенсор):</label>
              <input type="text" id="batSoc" value="${((Fe = t.battery) == null ? void 0 : Fe.soc_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((st = t.battery) == null ? void 0 : st.power_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((Te = t.battery) == null ? void 0 : Te.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((we = t.battery) == null ? void 0 : we.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((ut = t.battery) == null ? void 0 : ut.capacity_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Tt = t.battery) == null ? void 0 : Tt.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((We = t.battery) == null ? void 0 : We.current_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((lt = t.battery) == null ? void 0 : lt.temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((Ze = t.battery) == null ? void 0 : Ze.cell_delta_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((z = t.battery) == null ? void 0 : z.charge_daily_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ie = t.battery) == null ? void 0 : ie.discharge_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ee = t.battery) == null ? void 0 : Ee.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ve = t.battery) == null ? void 0 : Ve.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Se = t.battery) == null ? void 0 : Se.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((oe = t.battery) == null ? void 0 : oe.parallel_batteries) || 2 }).map((ye, M) => {
      var hi, ui, _i, yi;
      const D = M + 1, q = ((ui = (hi = t.battery) == null ? void 0 : hi.modules) == null ? void 0 : ui[M]) || ((yi = (_i = t.battery) == null ? void 0 : _i.module_entities) == null ? void 0 : yi[M]) || {}, Qe = `sensor.bms_rack${D}_soc`, yt = `sensor.bms_rack${D}_current`, bt = `sensor.bms_rack${D}_voltage`, mt = `sensor.bms_rack${D}_power`, vt = `sensor.bms_rack${D}_temperature`, gi = `sensor.bms_rack${D}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${D} (Модуль ${D})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${M}" value="${q.name || `Батарея ${D}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${D} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${M}" value="${q.soc_entity !== void 0 ? q.soc_entity : q.soc !== void 0 ? q.soc : Qe}" placeholder="${Qe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${D} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${M}" value="${q.current_entity !== void 0 ? q.current_entity : yt}" placeholder="${yt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${D} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${M}" value="${q.voltage_entity !== void 0 ? q.voltage_entity : q.volt !== void 0 ? q.volt : bt}" placeholder="${bt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${D} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${M}" value="${q.temperature_entity !== void 0 ? q.temperature_entity : q.temp !== void 0 ? q.temp : vt}" placeholder="${vt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${D} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${M}" value="${q.capacity_kwh !== void 0 ? q.capacity_kwh : D === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${D} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${M}" value="${q.cell_delta_entity !== void 0 ? q.cell_delta_entity : q.delta !== void 0 ? q.delta : gi}" placeholder="${gi}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${D} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${M}" value="${q.power_entity !== void 0 ? q.power_entity : mt}" placeholder="${mt} (авто P = U × I)">
                  </div>
                </div>
              `;
    }).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: GRID & EV -->
      <div style="display: ${this._currentTab === "grid" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">🌐 Зовнішня електромережа</div>

          <div class="field-row full-width" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 10px; margin-bottom: 12px;">
            <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; margin-bottom: 0;">
              <div>
                <span style="font-weight: 700; color: #38bdf8; font-size: 13px;">Дозволити продаж в мережу (Експорт)</span>
                <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">
                  Увімкніть, якщо станція продає надлишки («зелений тариф» / Net Billing). Якщо вимкнено (Zero Export) — анімація продажу ЗАВЖДИ вимкнена.
                </div>
              </div>
              <input type="checkbox" id="gridSellingEnabled" ${(_e = t.grid) != null && _e.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((W = t.grid) == null ? void 0 : W.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((et = t.grid) == null ? void 0 : et.external_power_entity) || ""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Ye = t.grid) == null ? void 0 : Ye.auto_calculate) !== !1 ? "checked" : ""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Ke = t.grid) == null ? void 0 : Ke.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((wi = t.grid) == null ? void 0 : wi.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((je = t.grid) == null ? void 0 : je.min_power_threshold) !== void 0 ? t.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((Ei = t.grid) == null ? void 0 : Ei.voltage_entity) || ""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((ki = t.grid) == null ? void 0 : ki.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((oi = t.grid) == null ? void 0 : oi.voltage_threshold) !== void 0 ? t.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((si = t.grid) == null ? void 0 : si.import_daily_entity) || ""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((Si = t.grid) == null ? void 0 : Si.export_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((li = t.grid) == null ? void 0 : li.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((dt = t.grid) == null ? void 0 : dt.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab === "loads" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadAutoCalculate" ${((Nt = t.load) == null ? void 0 : Nt.auto_calculate) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((Vi = t.load) == null ? void 0 : Vi.separate_export) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((di = t.load) == null ? void 0 : di.essential_power_entity) || ""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((_t = t.load) == null ? void 0 : _t.daily_house_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((Je = t.load) == null ? void 0 : Je.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((ct = t.load) == null ? void 0 : ct.subloads) || []).map((ye, M) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${M}" value="${ye.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${M}" style="width: 140px;">
                  <option value="boiler" ${ye.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${ye.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ye.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${ye.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${ye.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${ye.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${ye.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${M}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${M}" value="${ye.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>

      <!-- TAB CONTENT: TARIFFS -->
      <div style="display: ${this._currentTab === "tariffs" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">Двозонний облік тарифів (День / Ніч)</div>
          
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="tariffsEnabled" ${((Lt = t.tariffs) == null ? void 0 : Lt.enabled) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((At = t.tariffs) == null ? void 0 : At.currency) || "грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Ft = t.tariffs) == null ? void 0 : Ft.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Pt = t.tariffs) == null ? void 0 : Pt.day_rate) ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Rt = t.tariffs) == null ? void 0 : Rt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((Mt = t.tariffs) == null ? void 0 : Mt.night_rate) ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Ht = t.tariffs) == null ? void 0 : Ht.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Ut = t.tariffs) == null ? void 0 : Ut.export_rate) ?? 5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (ye, M) => {
      var D;
      return `<option value="${M}" ${(((D = t.tariffs) == null ? void 0 : D.night_start_hour) ?? 23) === M ? "selected" : ""}>${String(M).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (ye, M) => {
      var D;
      return `<option value="${M}" ${(((D = t.tariffs) == null ? void 0 : D.night_end_hour) ?? 7) === M ? "selected" : ""}>${String(M).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((Yt = t.tariffs) == null ? void 0 : Yt.import_day_entity) || ""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((ci = t.tariffs) == null ? void 0 : ci.import_night_entity) || ""}" placeholder="sensor.daily_energy_night">
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 10px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі на нічну (з 23:00 до 07:00) та денну зону з історії Home Assistant та енергії заряду АКБ, або використовує вказані вище окремі сенсори.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="fields-grid">
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowDailyCost" ${((Ci = t.tariffs) == null ? void 0 : Ci.show_daily_cost) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${(($i = t.tariffs) == null ? void 0 : $i.show_export_income) !== !1 ? "checked" : ""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((pi = t.tariffs) == null ? void 0 : pi.show_active_badge) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((fi = t.tariffs) == null ? void 0 : fi.show_solar_savings) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `, this._bindEvents(), this._updateExpandBtn(), n) {
      const ye = this.shadowRoot.querySelector(n);
      if (ye && (ye.focus(), r !== null && a !== null && "setSelectionRange" in ye))
        try {
          ye.setSelectionRange(r, a);
        } catch {
        }
    }
  }
  _bindEvents() {
    var o, s, l, c, d, _, h, x, u, y, v, E;
    const t = this.shadowRoot;
    (o = t.getElementById("btnToggleExpand")) == null || o.addEventListener("click", () => {
      this._applyExpand(!this._isDialogExpanded);
    }), t.querySelectorAll(".tab-btn").forEach((p) => {
      p.addEventListener("click", (f) => {
        this._switchTab(f.target.dataset.tab);
      });
    }), (s = t.getElementById("btnPresetEsp")) == null || s.addEventListener("click", () => this._applyPreset("deye_esphome")), (l = t.getElementById("btnPresetSolarman")) == null || l.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (p, f) => {
      const g = t.getElementById(p);
      g && (g.addEventListener("input", (w) => this._valueChanged(f, w.target.value, !1)), g.addEventListener("change", (w) => this._valueChanged(f, w.target.value, !0)), g.addEventListener("blur", () => this._flushConfig()));
    }, n = (p, f) => {
      const g = t.getElementById(p);
      g && g.addEventListener("change", (w) => this._valueChanged(f, w.target.checked, !0));
    }, r = (p, f, g, w = "") => {
      const k = t.getElementById(p);
      k && (k.addEventListener("input", (I) => {
        const P = parseFloat(I.target.value);
        if (g) {
          const m = t.getElementById(g);
          m && (m.innerText = `${P}${w}`);
        }
        this._valueChanged(f, isNaN(P) ? 0 : P, !1);
      }), k.addEventListener("change", (I) => {
        const P = parseFloat(I.target.value);
        this._valueChanged(f, isNaN(P) ? 0 : P, !0);
      }), k.addEventListener("blur", () => this._flushConfig()));
    };
    i("title", "title"), i("themeMode", "theme_mode"), i("cardLanguage", "language"), (c = t.getElementById("cardScale")) == null || c.addEventListener("input", (p) => {
      const f = parseFloat(p.target.value), g = t.getElementById("cardScaleVal");
      g && (g.innerText = `${Math.round(f * 100)}%`), this._valueChanged("card_scale", f);
    }), (d = t.getElementById("cardScale")) == null || d.addEventListener("change", () => this._flushConfig()), i("cardMaxWidth", "max_width"), n("showQuickSettings", "show_quick_settings"), i("ctrlSolarCharge", "controls.solar_charge_entity"), i("ctrlSellPower", "controls.sell_power_entity"), i("ctrlGridCharge", "controls.grid_charge_entity"), n("animEnabled", "animations.enabled"), r("animSpeed", "animations.speed", "animSpeedVal", "s"), (_ = t.getElementById("solarPvCount")) == null || _.addEventListener("input", (p) => {
      const f = parseInt(p.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = f, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < f; ) {
        const g = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${g}`,
          name: `PV ${g}`,
          capacity_kw: 4,
          voltage_entity: `sensor.deye_12k_inverter_pv${g}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${g}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${g}_power`
        });
      }
      this._valueChanged("solar.pv_count", f, !0), this._valueChanged("solar.strings", this._config.solar.strings, !0), this.render();
    }), t.querySelectorAll(".pv-str-name-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].name = f.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".pv-str-volt-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].voltage_entity = f.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".pv-str-curr-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].current_entity = f.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".pv-str-power-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].power_entity = f.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".pv-str-cap-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].capacity_kw = parseFloat(f.target.value) || 0, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), i("solarTotalPower", "solar.total_power_entity"), i("solarDailyYield", "solar.daily_yield_entity"), r("solarTargetDaily", "solar.target_daily_yield"), r("solarInstalledPower", "solar.installed_power"), n("solarShowMetrics", "solar.show_metrics"), i("invModel", "inverter.model_name"), i("invPower", "inverter.power_entity"), n("invShowSelfConsumption", "inverter.show_self_consumption"), i("invSelfConsumptionEntity", "inverter.self_consumption_entity"), r("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), i("invTempAc", "inverter.ac_temperature_entity"), i("invTempDc", "inverter.dc_temperature_entity"), i("invVolt", "inverter.voltage_entity"), i("invCurrent", "inverter.current_entity"), i("invFreq", "inverter.frequency_entity"), (h = t.getElementById("auxType")) == null || h.addEventListener("change", (p) => {
      const f = p.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = f;
      const w = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[f] || "Мікроінвертор";
      this._config.aux.title = w;
      const k = t.getElementById("auxTitle");
      k && (k.value = w), this._valueChanged("aux.type", f, !0), this._valueChanged("aux.title", w, !0);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (x = t.getElementById("windTurbineCount")) == null || x.addEventListener("input", (p) => {
      const f = parseInt(p.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = f, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < f; ) {
        const g = this._config.wind.turbines.length + 1;
        this._config.wind.turbines.push({
          id: `turbine_${g}`,
          name: `Вітряк ${g}`,
          power_entity: `sensor.wind_turbine_${g}_power`,
          speed_entity: `sensor.wind_turbine_${g}_speed`,
          daily_energy_entity: "",
          monthly_energy_entity: "",
          animation_threshold: this._config.wind.animation_threshold || 50
        });
      }
      this._valueChanged("wind.turbine_count", f, !0), this._valueChanged("wind.turbines", this._config.wind.turbines, !0), this.render();
    }), r("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (u = t.getElementById("windThreshold")) == null || u.addEventListener("input", (p) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(p.target.value));
    }), i("windDailyEnergy", "wind.daily_energy_entity"), i("windMonthlyEnergy", "wind.monthly_energy_entity"), t.querySelectorAll(".turbine-name-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].name = f.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".turbine-power-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].power_entity = f.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".turbine-speed-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].rpm_entity = f.target.value, this._config.wind.turbines[g].speed_entity = f.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".turbine-daily-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].daily_energy_entity = f.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".turbine-monthly-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].monthly_energy_entity = f.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), i("batSoc", "battery.soc_entity"), i("batPower", "battery.power_entity"), i("batPowerSign", "battery.power_sign"), i("batVolt", "battery.voltage_entity"), i("batCurrent", "battery.current_entity"), i("batTemp", "battery.temperature_entity"), i("batDelta", "battery.cell_delta_entity"), i("batCapacity", "battery.capacity_entity"), i("batChargeDaily", "battery.charge_daily_entity"), i("batDischargeDaily", "battery.discharge_daily_entity"), (y = t.getElementById("batParallelCount")) == null || y.addEventListener("input", (p) => {
      const f = parseInt(p.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = f, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < f; ) {
        const g = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${g}`,
          name: `Батарея ${g}`,
          soc_entity: `sensor.bms_rack${g}_soc`,
          current_entity: `sensor.bms_rack${g}_current`,
          voltage_entity: `sensor.bms_rack${g}_voltage`,
          power_entity: `sensor.bms_rack${g}_power`,
          temperature_entity: `sensor.bms_rack${g}_temperature`,
          cell_delta_entity: `sensor.bms_rack${g}_cell_delta`
        });
      }
      this._valueChanged("battery.parallel_batteries", f, !0), this._valueChanged("battery.modules", this._config.battery.modules, !0), this.render();
    }), t.querySelectorAll(".bat-mod-name-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].name = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-soc-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].soc_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-curr-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].current_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-volt-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].voltage_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-temp-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].temperature_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-delta-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].cell_delta_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-power-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].power_entity = f.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".bat-mod-cap-inp").forEach((p) => {
      p.addEventListener("input", (f) => {
        const g = parseInt(f.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].capacity_kwh = parseFloat(f.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), n("gridSellingEnabled", "grid.selling_enabled"), n("gridAutoCalculate", "grid.auto_calculate"), i("gridPower", "grid.power_entity"), i("gridExternalPower", "grid.external_power_entity"), i("gridVoltage", "grid.voltage_entity"), i("gridStatus", "grid.status_entity"), r("gridVoltageThreshold", "grid.voltage_threshold"), i("gridPowerSign", "grid.power_sign"), r("gridMinThreshold", "grid.min_power_threshold"), i("gridImportDaily", "grid.import_daily_entity"), i("gridExportDaily", "grid.export_daily_entity"), i("gridNonEssential", "grid.non_essential_power_entity"), i("gridCarPower", "grid.car_power_entity"), n("loadAutoCalculate", "load.auto_calculate"), n("loadSeparateExport", "load.separate_export"), i("loadEssential", "load.essential_power_entity"), i("loadDailyHouse", "load.daily_house_entity");
    const a = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const p = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${p}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render();
    };
    (v = t.getElementById("btnAddSubload")) == null || v.addEventListener("click", a), (E = t.getElementById("btnAddSubloadBottom")) == null || E.addEventListener("click", a), t.querySelectorAll(".btn-del-subload").forEach((p) => {
      p.addEventListener("click", (f) => {
        var k;
        const g = f.currentTarget || f.target.closest(".btn-del-subload"), w = parseInt(g.dataset.idx);
        (k = this._config.load) != null && k.subloads && (this._config.load.subloads.splice(w, 1), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render());
      });
    }), t.querySelectorAll(".subload-name").forEach((p) => {
      p.addEventListener("input", (f) => {
        var w, k;
        const g = parseInt(f.target.dataset.idx);
        (k = (w = this._config.load) == null ? void 0 : w.subloads) != null && k[g] && (this._config.load.subloads[g].name = f.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), p.addEventListener("blur", () => this._flushConfig());
    }), t.querySelectorAll(".subload-icon").forEach((p) => {
      p.addEventListener("change", (f) => {
        var w, k;
        const g = parseInt(f.target.dataset.idx);
        (k = (w = this._config.load) == null ? void 0 : w.subloads) != null && k[g] && (this._config.load.subloads[g].icon = f.target.value, this._valueChanged("load.subloads", this._config.load.subloads, !0));
      });
    }), t.querySelectorAll(".subload-entity").forEach((p) => {
      p.addEventListener("input", (f) => {
        var w, k;
        const g = parseInt(f.target.dataset.idx);
        (k = (w = this._config.load) == null ? void 0 : w.subloads) != null && k[g] && (this._config.load.subloads[g].entity = f.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), p.addEventListener("blur", () => this._flushConfig());
    }), n("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), r("tariffDayRate", "tariffs.day_rate"), r("tariffNightRate", "tariffs.night_rate"), r("tariffExportRate", "tariffs.export_rate"), r("tariffNightStart", "tariffs.night_start_hour"), r("tariffNightEnd", "tariffs.night_end_hour"), i("tariffImportDayEntity", "tariffs.import_day_entity"), i("tariffImportNightEntity", "tariffs.import_night_entity"), n("tariffShowDailyCost", "tariffs.show_daily_cost"), n("tariffShowExportIncome", "tariffs.show_export_income"), n("tariffShowActiveBadge", "tariffs.show_active_badge"), n("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", go);
/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */
var H = Symbol("NOT_RESOLVED");
function Ae(e, t) {
  return {
    tagName: e,
    nodeKind: "scalar",
    implicit: t.implicit ?? !1,
    matchByTagPrefix: t.matchByTagPrefix ?? !1,
    implicitFirstChars: t.implicitFirstChars ?? null,
    resolve: t.resolve,
    identify: t.identify,
    represent: t.represent ?? ((i) => String(i)),
    representTagName: t.representTagName ?? (() => e)
  };
}
function on(e, t) {
  const i = t.finalize === void 0;
  return {
    tagName: e,
    nodeKind: "sequence",
    implicit: !1,
    matchByTagPrefix: t.matchByTagPrefix ?? !1,
    create: t.create,
    addItem: t.addItem,
    finalize: t.finalize ?? ((n) => n),
    carrierIsResult: i,
    identify: t.identify,
    represent: t.represent ?? ((n) => n),
    representTagName: t.representTagName ?? (() => e)
  };
}
function Pi(e, t) {
  const i = t.finalize === void 0;
  return {
    tagName: e,
    nodeKind: "mapping",
    implicit: !1,
    matchByTagPrefix: t.matchByTagPrefix ?? !1,
    create: t.create,
    addPair: t.addPair,
    has: t.has,
    keys: t.keys,
    get: t.get,
    finalize: t.finalize ?? ((n) => n),
    carrierIsResult: i,
    identify: t.identify,
    represent: t.represent ?? ((n) => n),
    representTagName: t.representTagName ?? (() => e)
  };
}
var ho = Ae("tag:yaml.org,2002:str", {
  resolve: (e) => e,
  identify: (e) => typeof e == "string"
}), uo = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], _o = Ae("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (e) => uo.indexOf(e) !== -1 ? null : H,
  identify: (e) => e === null,
  represent: () => "null"
}), yo = Ae("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: ["n"],
  resolve: (e, t) => e === "null" || t && e === "" ? null : H,
  identify: (e) => e === null,
  represent: () => "null"
}), bo = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], mo = Ae("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (e) => bo.indexOf(e) !== -1 ? null : H,
  identify: (e) => e === null,
  represent: () => "null"
}), vo = [
  "true",
  "True",
  "TRUE"
], xo = [
  "false",
  "False",
  "FALSE"
], wo = Ae("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: [
    "t",
    "T",
    "f",
    "F"
  ],
  resolve: (e) => vo.indexOf(e) !== -1 ? !0 : xo.indexOf(e) !== -1 ? !1 : H,
  identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
  represent: (e) => e ? "true" : "false"
}), Eo = ["true"], ko = ["false"], So = Ae("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: ["t", "f"],
  resolve: (e) => Eo.indexOf(e) !== -1 ? !0 : ko.indexOf(e) !== -1 ? !1 : H,
  identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
  represent: (e) => e ? "true" : "false"
}), Co = [
  "true",
  "True",
  "TRUE",
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON"
], $o = [
  "false",
  "False",
  "FALSE",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], Io = Ae("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: [
    "y",
    "Y",
    "n",
    "N",
    "t",
    "T",
    "f",
    "F",
    "o",
    "O"
  ],
  resolve: (e) => Co.indexOf(e) !== -1 ? !0 : $o.indexOf(e) !== -1 ? !1 : H,
  identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
  represent: (e) => e ? "true" : "false"
}), Bo = /* @__PURE__ */ new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"), To = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function No(e) {
  let t = e, i = 1;
  return (t[0] === "-" || t[0] === "+") && (t[0] === "-" && (i = -1), t = t.slice(1)), t.startsWith("0b") ? i * parseInt(t.slice(2), 2) : t.startsWith("0o") ? i * parseInt(t.slice(2), 8) : t.startsWith("0x") ? i * parseInt(t.slice(2), 16) : i * parseInt(t, 10);
}
function Lo(e, t) {
  if (t) {
    if (!To.test(e)) return H;
  } else if (!Bo.test(e)) return H;
  const i = No(e);
  return Number.isFinite(i) ? i : H;
}
var Ba = Ae("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: Lo,
  identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
  represent: (e) => e.toString(10)
}), Ao = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)$"), Fo = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function Po(e) {
  let t = e, i = 1;
  return (t[0] === "-" || t[0] === "+") && (t[0] === "-" && (i = -1), t = t.slice(1)), t.startsWith("0b") ? i * parseInt(t.slice(2), 2) : t.startsWith("0o") ? i * parseInt(t.slice(2), 8) : t.startsWith("0x") ? i * parseInt(t.slice(2), 16) : i * parseInt(t, 10);
}
function Ro(e, t) {
  if (t) {
    if (!Fo.test(e)) return H;
  } else if (!Ao.test(e)) return H;
  const i = Po(e);
  return Number.isFinite(i) ? i : H;
}
var Mo = Ae("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: Ro,
  identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
  represent: (e) => e.toString(10)
}), Oo = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function Do(e) {
  let t = e.replace(/_/g, ""), i = 1;
  if ((t[0] === "-" || t[0] === "+") && (t[0] === "-" && (i = -1), t = t.slice(1)), t.startsWith("0b")) return i * parseInt(t.slice(2), 2);
  if (t.startsWith("0x")) return i * parseInt(t.slice(2), 16);
  if (t.includes(":")) {
    let n = 0;
    for (const r of t.split(":")) n = n * 60 + Number(r);
    return i * n;
  }
  return t !== "0" && t[0] === "0" ? i * parseInt(t, 8) : i * parseInt(t, 10);
}
function Vo(e) {
  if (!Oo.test(e)) return H;
  const t = Do(e);
  return Number.isFinite(t) ? t : H;
}
var Ki = Ae("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: Vo,
  identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
  represent: (e) => e.toString(10)
}), zo = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Wo = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function qo(e) {
  if (!zo.test(e)) return H;
  let t = e.toLowerCase();
  const i = t[0] === "-" ? -1 : 1;
  if ("+-".includes(t[0]) && (t = t.slice(1)), t === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (t === ".nan") return NaN;
  const n = i * parseFloat(t);
  return Number.isFinite(n) || Wo.test(e) ? n : H;
}
function Go(e) {
  if (isNaN(e)) return ".nan";
  if (e === Number.POSITIVE_INFINITY) return ".inf";
  if (e === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(e, -0)) return "-0.0";
  const t = e.toString(10);
  return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Ta = Ae("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: qo,
  identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
  represent: Go
}), jo = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"), Ho = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Uo(e, t) {
  if (t) {
    if (!Ho.test(e)) return H;
    let n = e.toLowerCase();
    const r = n[0] === "-" ? -1 : 1;
    if ("+-".includes(n[0]) && (n = n.slice(1)), n === ".inf") return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    if (n === ".nan") return NaN;
    const a = r * parseFloat(n);
    return Number.isFinite(a) ? a : H;
  }
  if (!jo.test(e)) return H;
  const i = Number(e);
  return Number.isFinite(i) ? i : H;
}
function Yo(e) {
  if (isNaN(e)) return ".nan";
  if (e === Number.POSITIVE_INFINITY) return ".inf";
  if (e === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(e, -0)) return "-0.0";
  const t = e.toString(10);
  return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Ko = Ae("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: Uo,
  identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
  represent: Yo
}), Jo = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Qo = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Xo(e) {
  if (!Jo.test(e)) return H;
  let t = e.toLowerCase().replace(/_/g, "");
  const i = t[0] === "-" ? -1 : 1;
  if ("+-".includes(t[0]) && (t = t.slice(1)), t === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (t === ".nan") return NaN;
  let n = 0;
  if (t.includes(":")) {
    for (const r of t.split(":")) n = n * 60 + Number(r);
    n *= i;
  } else n = i * parseFloat(t);
  return Number.isFinite(n) || Qo.test(e) ? n : H;
}
function Zo(e) {
  if (isNaN(e)) return ".nan";
  if (e === Number.POSITIVE_INFINITY) return ".inf";
  if (e === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(e, -0)) return "-0.0";
  const t = e.toString(10);
  return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Ji = Ae("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: Xo,
  identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
  represent: Zo
}), es = Ae("tag:yaml.org,2002:merge", {
  implicit: !0,
  implicitFirstChars: ["<"],
  resolve: (e, t) => e === "<<" || t && e === "" ? "<<" : H,
  identify: () => !1
}), ts = /^[A-Za-z0-9+/]*={0,2}$/;
function is(e) {
  const t = e.replace(/\s/g, "");
  if (t.length % 4 !== 0 || !ts.test(t)) return H;
  const i = atob(t), n = new Uint8Array(i.length);
  for (let r = 0; r < i.length; r++) n[r] = i.charCodeAt(r);
  return n;
}
function ns(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
  return btoa(t);
}
var rs = Ae("tag:yaml.org,2002:binary", {
  resolve: is,
  identify: (e) => Object.prototype.toString.call(e) === "[object Uint8Array]",
  represent: ns
}), as = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), os = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function pa(e, t, i, n = 0, r = 0, a = 0, o = 0) {
  const s = new Date(Date.UTC(e, t, i, n, r, a, o));
  return s.setUTCFullYear(e, t, i), s;
}
function ss(e) {
  let t = as.exec(e);
  if (t === null && (t = os.exec(e)), t === null) return H;
  const i = +t[1], n = +t[2] - 1, r = +t[3];
  if (!t[4]) {
    const d = pa(i, n, r);
    return d.getUTCFullYear() !== i || d.getUTCMonth() !== n || d.getUTCDate() !== r ? H : d;
  }
  const a = +t[4], o = +t[5], s = +t[6];
  let l = 0;
  if (a > 23 || o > 59 || s > 59) return H;
  if (t[7]) {
    let d = t[7].slice(0, 3);
    for (; d.length < 3; ) d += "0";
    l = +d;
  }
  const c = pa(i, n, r, a, o, s, l);
  if (c.getUTCFullYear() !== i || c.getUTCMonth() !== n || c.getUTCDate() !== r) return H;
  if (t[9]) {
    const d = +t[10], _ = +(t[11] || 0);
    if (d > 23 || _ > 59) return H;
    const h = (d * 60 + _) * 6e4;
    c.setTime(c.getTime() - (t[9] === "-" ? -h : h));
  }
  return c;
}
var ls = Ae("tag:yaml.org,2002:timestamp", {
  implicit: !0,
  implicitFirstChars: [..."0123456789"],
  resolve: ss,
  identify: (e) => e instanceof Date,
  represent: (e) => e.toISOString()
}), ds = on("tag:yaml.org,2002:seq", {
  create: () => [],
  addItem: (e, t) => {
    e.push(t);
  },
  identify: Array.isArray
});
function Ri(e) {
  if (e === null || typeof e != "object" || Array.isArray(e)) return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Qi(e, t) {
  const i = {};
  for (const n of t) e[n] !== void 0 && (i[n] = e[n]);
  return i;
}
var cs = on("tag:yaml.org,2002:omap", {
  create: () => ({
    list: [],
    seen: /* @__PURE__ */ new Set()
  }),
  addItem: (e, t) => {
    let i;
    if (t instanceof Map) {
      if (t.size !== 1) return "cannot resolve an ordered map item";
      i = t.keys().next().value;
    } else if (Ri(t)) {
      const n = Object.keys(t);
      if (n.length !== 1) return "cannot resolve an ordered map item";
      i = n[0];
    } else return "cannot resolve an ordered map item";
    return e.seen.has(i) ? "duplicate key in ordered map" : (e.seen.add(i), e.list.push(t), "");
  },
  finalize: (e) => e.list,
  identify: () => !1
}), ps = on("tag:yaml.org,2002:pairs", {
  create: () => [],
  addItem: (e, t) => {
    if (t instanceof Map)
      return t.size !== 1 ? "cannot resolve a pairs item" : (e.push(t.entries().next().value), "");
    if (Object.prototype.toString.call(t) !== "[object Object]") return "cannot resolve a pairs item";
    const i = t, n = Object.keys(i);
    return n.length !== 1 ? "cannot resolve a pairs item" : (e.push([n[0], i[n[0]]]), "");
  },
  identify: () => !1
}), fs = Pi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Ri,
  represent: (e) => {
    const t = /* @__PURE__ */ new Map();
    for (const i of Object.keys(e)) t.set(i, e[i]);
    return t;
  },
  addPair: (e, t, i) => {
    if (t !== null && typeof t == "object") return "object-based map does not support complex keys";
    const n = String(t);
    return n === "__proto__" ? Object.defineProperty(e, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = i, "";
  },
  has: (e, t) => t !== null && typeof t == "object" ? !1 : Object.prototype.hasOwnProperty.call(e, String(t)),
  keys: (e) => Object.keys(e),
  get: (e, t) => {
    const i = String(t);
    return Object.prototype.hasOwnProperty.call(e, i) ? e[i] : null;
  }
}), gs = Pi("tag:yaml.org,2002:set", {
  create: () => /* @__PURE__ */ new Set(),
  identify: (e) => e instanceof Set,
  represent: (e) => {
    const t = /* @__PURE__ */ new Map();
    for (const i of e) t.set(i, null);
    return t;
  },
  addPair: (e, t, i) => i !== null ? "cannot resolve a set item" : (e.add(t), ""),
  has: (e, t) => e.has(t),
  keys: (e) => e.keys(),
  get: () => null
});
function hs() {
  return {
    scalar: /* @__PURE__ */ Object.create(null),
    sequence: /* @__PURE__ */ Object.create(null),
    mapping: /* @__PURE__ */ Object.create(null)
  };
}
function us() {
  return {
    scalar: [],
    sequence: [],
    mapping: []
  };
}
function _s(e) {
  const t = [];
  for (const i of e) {
    let n = t.length;
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      if (a.nodeKind === i.nodeKind && a.tagName === i.tagName && a.matchByTagPrefix === i.matchByTagPrefix) {
        n = r;
        break;
      }
    }
    t[n] = i;
  }
  return t;
}
var Mi = class Na {
  constructor(t) {
    He(this, "tags");
    /** @internal */
    He(this, "implicitScalarTags");
    /**
    * Dispatch implicit scalar resolvers by `source.charAt(0)`. Each bucket holds
    * the resolvers that may match that key, in schema order; a key absent from
    * the map uses
    * {@link Schema.implicitScalarAnyFirstChar}
    * (resolvers that declared no first-char constraint, so they apply to any
    * first character).
    */
    He(this, "implicitScalarByFirstChar");
    He(this, "implicitScalarAnyFirstChar");
    /**
    * The default scalar tag (`!!str`), resolved once so the composer's fallback
    * for unresolved plain scalars avoids a keyed lookup per scalar.
    *
    * @internal
    */
    He(this, "defaultScalarTag");
    /**
    * The default container tags (`!!seq` / `!!map`), used by the dumper: when a
    * value is identified by its default tag, the tag is implicit and not
    * printed. Undefined if the schema does not define them (then such values
    * can't be dumped).
    *
    * @internal
    */
    He(this, "defaultSequenceTag");
    /** @internal */
    He(this, "defaultMappingTag");
    He(this, "exact");
    He(this, "prefix");
    const i = _s(t), n = [], r = hs(), a = us();
    for (const d of i) {
      if (d.nodeKind === "scalar" && d.implicit) {
        if (d.matchByTagPrefix) throw new Error("Implicit scalar tags cannot match by tag prefix");
        n.push(d);
      }
      switch (d.nodeKind) {
        case "scalar":
          d.matchByTagPrefix ? a.scalar.push(d) : r.scalar[d.tagName] = d;
          break;
        case "sequence":
          d.matchByTagPrefix ? a.sequence.push(d) : r.sequence[d.tagName] = d;
          break;
        case "mapping":
          d.matchByTagPrefix ? a.mapping.push(d) : r.mapping[d.tagName] = d;
      }
    }
    const o = n.filter((d) => d.implicitFirstChars === null), s = /* @__PURE__ */ new Set();
    for (const d of n) if (d.implicitFirstChars !== null) for (const _ of d.implicitFirstChars) s.add(_);
    const l = /* @__PURE__ */ new Map();
    for (const d of s) l.set(d, n.filter((_) => _.implicitFirstChars === null || _.implicitFirstChars.indexOf(d) !== -1));
    const c = r.scalar["tag:yaml.org,2002:str"];
    if (!c) throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
    this.tags = i, this.implicitScalarTags = n, this.implicitScalarByFirstChar = l, this.implicitScalarAnyFirstChar = o, this.defaultScalarTag = c, this.defaultSequenceTag = r.sequence["tag:yaml.org,2002:seq"], this.defaultMappingTag = r.mapping["tag:yaml.org,2002:map"], this.exact = r, this.prefix = a;
  }
  /** @internal */
  lookupScalarTag(t) {
    const i = this.exact.scalar[t];
    if (i) return i;
    for (const n of this.prefix.scalar) if (t.startsWith(n.tagName)) return n;
  }
  /** @internal */
  lookupSequenceTag(t) {
    const i = this.exact.sequence[t];
    if (i) return i;
    for (const n of this.prefix.sequence) if (t.startsWith(n.tagName)) return n;
  }
  /** @internal */
  lookupMappingTag(t) {
    const i = this.exact.mapping[t];
    if (i) return i;
    for (const n of this.prefix.mapping) if (t.startsWith(n.tagName)) return n;
  }
  /** @internal */
  resolveImplicitScalarTag(t) {
    const i = this.implicitScalarByFirstChar.get(t.charAt(0)) ?? this.implicitScalarAnyFirstChar;
    for (const r of i) {
      const a = r.resolve(t, !1, r.tagName);
      if (a !== H) return {
        value: a,
        tag: r
      };
    }
    const n = this.defaultScalarTag;
    return {
      value: n.resolve(t, !1, n.tagName),
      tag: n
    };
  }
  /**
  * Creates a new schema with the specified tags added. If a tag already
  * exists, it is replaced by the specified tag.
  *
  * @example
  *
  * ```javascript
  * import { CORE_SCHEMA, mergeTag, realMapTag } from 'js-yaml'
  *
  * const schema = CORE_SCHEMA.withTags(mergeTag, realMapTag)
  * ```
  */
  withTags(...t) {
    let i = [];
    for (const n of t) i = i.concat(n);
    return new Na([...this.tags, ...i]);
  }
}, sn = new Mi([
  ho,
  ds,
  fs
]);
new Mi([
  ...sn.tags,
  yo,
  So,
  Mo,
  Ko
]);
var ys = new Mi([
  ...sn.tags,
  _o,
  wo,
  Ba,
  Ta
]), bs = new Mi([
  ...sn.tags,
  mo,
  Io,
  Ki,
  Ji,
  ls,
  es,
  rs,
  cs,
  ps,
  gs
]), ms = bs.withTags({
  ...Ki,
  resolve: (e, t, i) => {
    const n = Ki.resolve(e, t, i);
    return n === H ? Ba.resolve(e, t, i) : n;
  }
}, {
  ...Ji,
  resolve: (e, t, i) => {
    const n = Ji.resolve(e, t, i);
    return n === H ? Ta.resolve(e, t, i) : n;
  }
});
Pi("tag:yaml.org,2002:map", {
  create: () => /* @__PURE__ */ new Map(),
  addPair: (e, t, i) => (e.set(t, i), ""),
  has: (e, t) => e.has(t),
  keys: (e) => e.keys(),
  get: (e, t) => e.get(t),
  identify: (e) => e instanceof Map || Ri(e),
  represent: (e) => {
    if (e instanceof Map) return e;
    const t = /* @__PURE__ */ new Map(), i = e;
    for (const n of Object.keys(i)) t.set(n, i[n]);
    return t;
  }
});
function fa(e) {
  if (Array.isArray(e)) {
    const t = Array.prototype.slice.call(e);
    for (let i = 0; i < t.length; i++) {
      if (Array.isArray(t[i])) return null;
      typeof t[i] == "object" && Object.prototype.toString.call(t[i]) === "[object Object]" && (t[i] = "[object Object]");
    }
    return String(t);
  }
  return typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" ? "[object Object]" : String(e);
}
Pi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Ri,
  represent: (e) => {
    const t = /* @__PURE__ */ new Map();
    for (const i of Object.keys(e)) t.set(i, e[i]);
    return t;
  },
  addPair: (e, t, i) => {
    const n = fa(t);
    return n === null ? "nested arrays are not supported inside keys" : (n === "__proto__" ? Object.defineProperty(e, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = i, "");
  },
  has: (e, t) => {
    const i = fa(t);
    return i !== null && Object.prototype.hasOwnProperty.call(e, i);
  },
  keys: (e) => Object.keys(e),
  get: (e, t) => {
    const i = String(t);
    return Object.prototype.hasOwnProperty.call(e, i) ? e[i] : null;
  }
});
var vs = {
  maxLength: 79,
  indent: 1,
  linesBefore: 3,
  linesAfter: 2
};
function Wi(e, t, i, n, r) {
  let a = "", o = "";
  const s = Math.floor(r / 2) - 1;
  return n - t > s && (a = " ... ", t = n - s + a.length), i - n > s && (o = " ...", i = n + s - o.length), {
    str: a + e.slice(t, i).replace(/\t/g, "→") + o,
    pos: n - t + a.length
  };
}
function qi(e, t) {
  return " ".repeat(Math.max(t - e.length, 0)) + e;
}
function xs(e, t) {
  if (!e.buffer) return null;
  const i = {
    ...vs,
    ...t
  }, n = /\r?\n|\r|\0/g, r = [0], a = [];
  let o, s = -1;
  for (; o = n.exec(e.buffer); )
    a.push(o.index), r.push(o.index + o[0].length), e.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  let l = "";
  const c = Math.min(e.line + i.linesAfter, a.length).toString().length, d = i.maxLength - (i.indent + c + 3);
  for (let h = 1; h <= i.linesBefore && !(s - h < 0); h++) {
    const x = Wi(e.buffer, r[s - h], a[s - h], e.position - (r[s] - r[s - h]), d);
    l = `${" ".repeat(i.indent)}${qi((e.line - h + 1).toString(), c)} | ${x.str}
${l}`;
  }
  const _ = Wi(e.buffer, r[s], a[s], e.position, d);
  l += `${" ".repeat(i.indent)}${qi((e.line + 1).toString(), c)} | ${_.str}
`, l += `${"-".repeat(i.indent + c + 3 + _.pos)}^
`;
  for (let h = 1; h <= i.linesAfter && !(s + h >= a.length); h++) {
    const x = Wi(e.buffer, r[s + h], a[s + h], e.position - (r[s] - r[s + h]), d);
    l += `${" ".repeat(i.indent)}${qi((e.line + h + 1).toString(), c)} | ${x.str}
`;
  }
  return l.replace(/\n$/, "");
}
function ga(e, t) {
  let i = "";
  return e.mark ? (e.mark.name && (i += `in "${e.mark.name}" `), i += `(${e.mark.line + 1}:${e.mark.column + 1})`, !t && e.mark.snippet && (i += `

${e.mark.snippet}`), `${e.reason} ${i}`) : e.reason;
}
var $t = class La extends Error {
  /**
  * Optional `mark` contains source snippet data. Usually, use
  * {@link YAMLException.throwAt} instead of passing it directly.
  */
  constructor(i, n) {
    super();
    He(this, "reason");
    He(this, "mark");
    this.name = "YAMLException", this.reason = i, this.mark = n, this.message = ga(this, !1), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  /**
  * Returns the formatted error, omitting the source snippet in compact mode.
  */
  toString(i) {
    return `${this.name}: ${ga(this, i)}`;
  }
  /**
  * Builds a YAMLException with a source snippet and throws it. `source` is
  * the raw input text; `position` is an offset into it.
  */
  static throwAt(i, n, r, a = "") {
    let o = 0, s = 0;
    for (let c = 0; c < n; c++) {
      const d = i.charCodeAt(c);
      d === 10 ? (o++, s = c + 1) : d === 13 && (o++, i.charCodeAt(c + 1) === 10 && c++, s = c + 1);
    }
    const l = {
      name: a,
      buffer: i,
      position: n,
      line: o,
      column: n - s
    };
    throw l.snippet = xs(l), new La(r, l);
  }
}, Ce = {
  DOCUMENT: 1,
  SEQUENCE: 2,
  MAPPING: 3,
  SCALAR: 4,
  ALIAS: 5,
  POP: 6
}, O = {
  PLAIN: 1,
  SINGLE_QUOTED: 2,
  DOUBLE_QUOTED: 3,
  LITERAL_BLOCK: 4,
  FOLDED_BLOCK: 5
}, Ue = {
  BLOCK: 1,
  FLOW: 2
}, at = {
  CLIP: 1,
  STRIP: 2,
  KEEP: 3
}, ws = -1;
function ha(e) {
  switch (e) {
    case 48:
      return "\0";
    case 97:
      return "\x07";
    case 98:
      return "\b";
    case 116:
      return "	";
    case 9:
      return "	";
    case 110:
      return `
`;
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 114:
      return "\r";
    case 101:
      return "\x1B";
    case 32:
      return " ";
    case 34:
      return '"';
    case 47:
      return "/";
    case 92:
      return "\\";
    case 78:
      return "";
    case 95:
      return " ";
    case 76:
      return "\u2028";
    case 80:
      return "\u2029";
    default:
      return "";
  }
}
var Aa = new Array(256), Fa = new Array(256);
for (let e = 0; e < 256; e++)
  Aa[e] = ha(e) ? 1 : 0, Fa[e] = ha(e);
function Es(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
}
function ks(e) {
  return e >= 48 && e <= 57 ? e - 48 : (e | 32) - 97 + 10;
}
function Ss(e) {
  return e === 120 ? 2 : e === 117 ? 4 : 8;
}
function Ni(e, t, i) {
  let n = 0;
  for (; t < i; ) {
    const r = e.charCodeAt(t);
    if (r === 10)
      n++, t++;
    else if (r === 13)
      n++, t++, e.charCodeAt(t) === 10 && t++;
    else if (r === 32 || r === 9) t++;
    else break;
  }
  return {
    position: t,
    breaks: n
  };
}
function ln(e) {
  return e === 1 ? " " : `
`.repeat(e - 1);
}
function Cs(e, t, i) {
  let n = "", r = t, a = t, o = t;
  for (; r < i; ) {
    const s = e.charCodeAt(r);
    if (s === 10 || s === 13) {
      n += e.slice(a, o);
      const l = Ni(e, r, i);
      n += ln(l.breaks), r = a = o = l.position;
    } else
      r++, s !== 32 && s !== 9 && (o = r);
  }
  return n + e.slice(a, o);
}
function $s(e, t, i) {
  let n = "", r = t, a = t, o = t;
  for (; r < i; ) {
    const s = e.charCodeAt(r);
    if (s === 39)
      n += e.slice(a, r) + "'", r += 2, a = o = r;
    else if (s === 10 || s === 13) {
      n += e.slice(a, o);
      const l = Ni(e, r, i);
      n += ln(l.breaks), r = a = o = l.position;
    } else
      r++, s !== 32 && s !== 9 && (o = r);
  }
  return n + e.slice(a, i);
}
function Is(e, t, i) {
  let n = "", r = t, a = t, o = t;
  for (; r < i; ) {
    const s = e.charCodeAt(r);
    if (s === 92) {
      n += e.slice(a, r), r++;
      const l = e.charCodeAt(r);
      if (l === 10 || l === 13) r = Ni(e, r, i).position;
      else if (l < 256 && Aa[l])
        n += Fa[l], r++;
      else {
        let c = Ss(l), d = 0;
        for (; c > 0; c--) {
          r++;
          const _ = ks(e.charCodeAt(r));
          d = (d << 4) + _;
        }
        n += Es(d), r++;
      }
      a = o = r;
    } else if (s === 10 || s === 13) {
      n += e.slice(a, o);
      const l = Ni(e, r, i);
      n += ln(l.breaks), r = a = o = l.position;
    } else
      r++, s !== 32 && s !== 9 && (o = r);
  }
  return n + e.slice(a, i);
}
function ua(e, t, i, n, r, a) {
  const o = n < 0 ? 0 : n, s = e.slice(t, i).replace(/\r\n?/g, `
`), l = s === "" ? [] : (s.endsWith(`
`) ? s.slice(0, -1) : s).split(`
`);
  let c = "", d = !1, _ = 0, h = !1;
  for (const x of l) {
    let u = 0;
    for (; u < o && x.charCodeAt(u) === 32; ) u++;
    if (n < 0 || u >= x.length) {
      _++;
      continue;
    }
    const y = x.slice(o), v = y.charCodeAt(0);
    a ? v === 32 || v === 9 ? (h = !0, c += `
`.repeat(d ? 1 + _ : _)) : h ? (h = !1, c += `
`.repeat(_ + 1)) : _ === 0 ? d && (c += " ") : c += `
`.repeat(_) : c += `
`.repeat(d ? 1 + _ : _), c += y, d = !0, _ = 0;
  }
  return r === at.KEEP ? c += `
`.repeat(d ? 1 + _ : _) : r !== at.STRIP && d && (c += `
`), c;
}
function Bs(e, t) {
  if (t.valueStart === ws) return "";
  const { valueStart: i, valueEnd: n } = t;
  if (t.fast) return e.slice(i, n);
  switch (t.style) {
    case O.SINGLE_QUOTED:
      return $s(e, i, n);
    case O.DOUBLE_QUOTED:
      return Is(e, i, n);
    case O.LITERAL_BLOCK:
      return ua(e, i, n, t.indent, t.chomping, !1);
    case O.FOLDED_BLOCK:
      return ua(e, i, n, t.indent, t.chomping, !0);
    default:
      return Cs(e, i, n);
  }
}
var Ts = Object.assign(/* @__PURE__ */ Object.create(null), {
  "!": "!",
  "!!": "tag:yaml.org,2002:"
}), Pa = "-#;/?:@&=+$_.~*'()", Ns = Pa + "!,[]", _a = "0123456789ABCDEF";
function rt(e) {
  return "%" + _a[e >> 4] + _a[e & 15];
}
function Gi(e, t) {
  const i = t ? Pa : Ns;
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let a = e.charCodeAt(r);
    if (a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || i.includes(e[r])) {
      n += e[r];
      continue;
    }
    a >= 55296 && a <= 56319 && (a = 65536 + ((a & 1023) << 10) + (e.charCodeAt(++r) & 1023)), a < 128 ? n += rt(a) : a < 2048 ? n += rt(192 | a >> 6) + rt(128 | a & 63) : a < 65536 ? n += rt(224 | a >> 12) + rt(128 | a >> 6 & 63) + rt(128 | a & 63) : n += rt(240 | a >> 18) + rt(128 | a >> 12 & 63) + rt(128 | a >> 6 & 63) + rt(128 | a & 63);
  }
  return n;
}
function ji(e) {
  let t = "", i = 0;
  for (; i < e.length; ) {
    if (e.charCodeAt(i) !== 37) {
      t += e[i++];
      continue;
    }
    let n = parseInt(e.slice(i + 1, i + 3), 16);
    if (i += 3, n >= 192) {
      let r = n < 224 ? 1 : n < 240 ? 2 : 3;
      for (n &= (1 << 6 - r) - 1; r-- > 0; )
        n = n << 6 | parseInt(e.slice(i + 1, i + 3), 16) & 63, i += 3;
    }
    n < 65536 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023));
  }
  return t;
}
function Ra(e, t) {
  if (e.startsWith("!<") && e.endsWith(">")) return ji(e.slice(2, -1));
  const i = e.indexOf("!", 1), n = i === -1 ? "!" : e.slice(0, i + 1);
  return ji((t == null ? void 0 : t[n]) ?? Ts[n] ?? n) + ji(e.slice(n.length));
}
function Ma(e) {
  let t = e;
  return t.charCodeAt(0) === 33 ? (t = t.slice(1), `!${Gi(t, !0)}`) : t.slice(0, 18) === "tag:yaml.org,2002:" ? `!!${Gi(t.slice(18), !0)}` : `!<${Gi(t, !1)}>`;
}
var Qt = -1, Ls = "tag:yaml.org,2002:merge", dn = {
  filename: "",
  schema: ys,
  json: !1,
  maxTotalMergeKeys: 1e4,
  maxAliases: -1
};
function As(e) {
  return "tagStart" in e && e.tagStart !== Qt ? e.tagStart : "anchorStart" in e && e.anchorStart !== Qt ? e.anchorStart : "valueStart" in e && e.valueStart !== Qt ? e.valueStart : "start" in e ? e.start : 0;
}
function $e(e, t) {
  $t.throwAt(e.source, e.position, t, e.filename);
}
function Oa(e, t, i, n) {
  try {
    return i.finalize(n);
  } catch (r) {
    if (r instanceof $t) throw r;
    $t.throwAt(e.source, t, r instanceof Error ? r.message : String(r), e.filename);
  }
}
function Fs(e, t) {
  const i = Bs(e.source, t), n = t.tagStart === Qt ? "" : e.source.slice(t.tagStart, t.tagEnd), r = e.schema.defaultScalarTag;
  if (n !== "") {
    if (n === "!") return {
      value: i,
      tag: r
    };
    const a = Ra(n, e.tagHandlers), o = e.schema.lookupScalarTag(a);
    if (o) {
      const l = o.resolve(i, !0, a);
      return l === H && $e(e, `cannot resolve a node with !<${a}> explicit tag`), {
        value: l,
        tag: o
      };
    }
    const s = e.schema.lookupMappingTag(a) ?? e.schema.lookupSequenceTag(a);
    if (s) {
      i !== "" && $e(e, `cannot resolve a node with !<${a}> explicit tag`);
      const l = s.create(a);
      return {
        value: s.carrierIsResult ? l : Oa(e, e.position, s, l),
        tag: s
      };
    }
    $e(e, `unknown scalar tag !<${a}>`);
  }
  return t.style === O.PLAIN ? e.schema.resolveImplicitScalarTag(i) : {
    value: r.resolve(i, !1, r.tagName),
    tag: r
  };
}
function ya(e, t, i) {
  const n = t.tagStart === Qt ? "" : e.source.slice(t.tagStart, t.tagEnd);
  return n === "" || n === "!" ? i : Ra(n, e.tagHandlers);
}
function Da(e) {
  return e.nodeKind === "mapping";
}
function ba(e) {
  e.totalMergeKeys++, e.maxTotalMergeKeys !== -1 && e.totalMergeKeys > e.maxTotalMergeKeys && $e(e, `merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`);
}
function ma(e, t, i, n) {
  ba(e);
  for (const r of n.keys(i)) {
    if (ba(e), t.tag.has(t.value, r)) continue;
    const a = t.tag.addPair(t.value, r, n.get(i, r));
    a && $e(e, a), t.overridable ?? (t.overridable = /* @__PURE__ */ new Set()), t.overridable.add(r);
  }
}
function Ps(e, t, i, n) {
  if (e.position = t.keyPosition, Da(n)) ma(e, t, i, n);
  else if (n.nodeKind === "sequence" && Array.isArray(i)) {
    i.length > 100 && $e(e, "abnormal merge sequence size");
    for (const r of i) {
      const a = e.nodeTags.get(r);
      a || $e(e, "cannot merge mappings; the provided source object is unacceptable"), ma(e, t, r, a);
    }
  } else $e(e, "cannot merge mappings; the provided source object is unacceptable");
}
function Rs(e, t, i, n, r) {
  var o, s;
  if (e.position = t.keyPosition, t.keyIsMerge) {
    Ps(e, t, n, r);
    return;
  }
  !e.json && t.tag.has(t.value, i) && !((o = t.overridable) != null && o.has(i)) && $e(e, "duplicated mapping key");
  const a = t.tag.addPair(t.value, i, n);
  a && $e(e, a), (s = t.overridable) == null || s.delete(i);
}
function Hi(e, t, i) {
  const n = e.frames[e.frames.length - 1];
  if (n.kind === "document")
    n.value = t, n.hasValue = !0;
  else if (n.kind === "sequence") {
    Da(i) && e.nodeTags.set(t, i);
    const r = n.tag.addItem(n.value, t, n.index++);
    r && $e(e, r);
  } else if (n.hasKey) {
    const r = n.key;
    n.key = void 0, n.hasKey = !1, Rs(e, n, r, t, i);
  } else
    n.key = t, n.keyPosition = e.position, n.hasKey = !0, n.keyIsMerge = i.tagName === Ls;
}
function Ui(e, t, i, n, r) {
  if (t.anchorStart !== Qt) {
    const a = {
      value: i,
      tag: n,
      isValueFinal: r
    };
    return e.anchors.set(e.source.slice(t.anchorStart, t.anchorEnd), a), a;
  }
  return null;
}
function Ms(e, t) {
  const i = {
    ...dn,
    ...t,
    events: e,
    documents: [],
    eventIndex: 0,
    position: 0,
    frames: [],
    anchors: /* @__PURE__ */ new Map(),
    nodeTags: /* @__PURE__ */ new Map(),
    tagHandlers: /* @__PURE__ */ Object.create(null),
    totalMergeKeys: 0,
    aliasCount: 0
  };
  for (; i.eventIndex < i.events.length; ) {
    const n = i.events[i.eventIndex++];
    switch (i.position = As(n), n.type) {
      case Ce.DOCUMENT:
        i.anchors = /* @__PURE__ */ new Map(), i.nodeTags = /* @__PURE__ */ new Map(), i.aliasCount = 0, i.tagHandlers = /* @__PURE__ */ Object.create(null);
        for (const r of n.directives) r.kind === "tag" && (i.tagHandlers[r.handle] = r.prefix);
        i.frames.push({
          kind: "document",
          position: i.position,
          value: void 0,
          hasValue: !1
        });
        break;
      case Ce.SCALAR: {
        const { value: r, tag: a } = Fs(i, n);
        Ui(i, n, r, a, !0), Hi(i, r, a);
        break;
      }
      case Ce.SEQUENCE: {
        const r = ya(i, n, "tag:yaml.org,2002:seq"), a = i.schema.lookupSequenceTag(r);
        a || $e(i, `unknown sequence tag !<${r}>`);
        const o = a.create(r), s = Ui(i, n, o, a, a.carrierIsResult);
        i.frames.push({
          kind: "sequence",
          position: i.position,
          value: o,
          tag: a,
          anchor: s,
          index: 0
        });
        break;
      }
      case Ce.MAPPING: {
        const r = ya(i, n, "tag:yaml.org,2002:map"), a = i.schema.lookupMappingTag(r);
        a || $e(i, `unknown mapping tag !<${r}>`);
        const o = a.create(r), s = Ui(i, n, o, a, a.carrierIsResult);
        i.frames.push({
          kind: "mapping",
          position: i.position,
          value: o,
          tag: a,
          anchor: s,
          key: void 0,
          keyPosition: i.position,
          hasKey: !1,
          keyIsMerge: !1,
          overridable: null
        });
        break;
      }
      case Ce.ALIAS: {
        i.maxAliases !== -1 && ++i.aliasCount > i.maxAliases && $e(i, `aliases exceeded maxAliases (${i.maxAliases})`);
        const r = i.source.slice(n.anchorStart, n.anchorEnd), a = i.anchors.get(r);
        a || $e(i, `unidentified alias "${r}"`), a.isValueFinal || $e(i, `recursive alias "${r}" is not supported for tag ${a.tag.tagName} because it uses finalize()`), Hi(i, a.value, a.tag);
        break;
      }
      case Ce.POP: {
        const r = i.frames.pop();
        if (r.kind === "mapping" && r.hasKey && (i.position = r.keyPosition, $e(i, "incomplete mapping pair in event stream")), r.kind === "document") i.documents.push(r.value);
        else {
          const a = r.tag.carrierIsResult ? r.value : Oa(i, r.position, r.tag, r.value);
          r.anchor && (r.anchor.value = a, r.anchor.isValueFinal = !0), Hi(i, a, r.tag);
        }
        break;
      }
    }
  }
  return i.documents;
}
var J = -1, Va = Object.prototype.hasOwnProperty, ti = 1, za = 2, Wa = 3, Li = 4, Os = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Ds = /[,\[\]{}]/, qa = /^(?:!|!!|![0-9A-Za-z-]+!)$/, Xi = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`, Ga = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`, Vs = new RegExp(`^(?:${Xi})*$`), zs = new RegExp(`^(?:${Ga})+$`), Ws = new RegExp(`^(?:!(?:${Xi})*|${Ga}(?:${Xi})*)$`), cn = {
  filename: "",
  maxDepth: 100
};
function qs(e, t, i) {
  e.events.push({
    type: Ce.DOCUMENT,
    explicitStart: t,
    explicitEnd: i,
    directives: e.directives
  });
}
function ja(e, t, i, n, r, a, o) {
  e.events.push({
    type: Ce.SEQUENCE,
    start: t,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: a,
    style: o
  });
}
function Ha(e, t, i, n, r, a, o) {
  e.events.push({
    type: Ce.MAPPING,
    start: t,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: a,
    style: o
  });
}
function va(e, t) {
  e.events.splice(t.eventsLength, 0, {
    type: Ce.MAPPING,
    start: t.position,
    anchorStart: J,
    anchorEnd: J,
    tagStart: J,
    tagEnd: J,
    style: Ue.FLOW
  });
}
function ri(e, t, i, n, r, a, o, s, l = at.CLIP, c = -1, d = !1) {
  e.events.push({
    type: Ce.SCALAR,
    valueStart: t,
    valueEnd: i,
    anchorStart: n,
    anchorEnd: r,
    tagStart: a,
    tagEnd: o,
    style: s,
    chomping: l,
    indent: c,
    fast: d
  });
}
function Gs(e, t, i) {
  e.events.push({
    type: Ce.ALIAS,
    anchorStart: t,
    anchorEnd: i
  });
}
function Xt(e) {
  e.events.push({ type: Ce.POP });
}
function Me(e) {
  ri(e, J, J, J, J, J, J, O.PLAIN);
}
function xa() {
  return {
    anchorStart: J,
    anchorEnd: J,
    tagStart: J,
    tagEnd: J
  };
}
function Zt(e) {
  return {
    position: e.position,
    line: e.line,
    lineStart: e.lineStart,
    lineIndent: e.lineIndent,
    firstTabInLine: e.firstTabInLine,
    eventsLength: e.events.length
  };
}
function ei(e, t) {
  e.position = t.position, e.line = t.line, e.lineStart = t.lineStart, e.lineIndent = t.lineIndent, e.firstTabInLine = t.firstTabInLine, e.events.length = t.eventsLength;
}
function A(e, t) {
  $t.throwAt(e.input.slice(0, e.length), e.position, t, e.filename);
}
function ke(e) {
  return e === 10 || e === 13;
}
function ai(e) {
  return e === 9 || e === 32;
}
function Xe(e) {
  return ai(e) || ke(e);
}
function gt(e) {
  return e === 0 || Xe(e);
}
function Gt(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function js(e) {
  return e >= 48 && e <= 57 ? e - 48 : -1;
}
function Hs(e) {
  if (e >= 48 && e <= 57) return e - 48;
  const t = e | 32;
  return t >= 97 && t <= 102 ? t - 97 + 10 : -1;
}
function Us(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Ys(e) {
  return e === 48 || e === 97 || e === 98 || e === 116 || e === 9 || e === 110 || e === 118 || e === 102 || e === 114 || e === 101 || e === 32 || e === 34 || e === 47 || e === 92 || e === 78 || e === 95 || e === 76 || e === 80;
}
function Ai(e) {
  e.input.charCodeAt(e.position) === 10 ? e.position++ : (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++), e.line++, e.lineStart = e.position, e.lineIndent = 0, e.firstTabInLine = -1;
}
function Le(e, t) {
  let i = 0, n = e.input.charCodeAt(e.position), r = e.position === e.lineStart || Xe(e.input.charCodeAt(e.position - 1));
  for (; n !== 0; ) {
    for (; ai(n); )
      r = !0, n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
    if (t && r && n === 35) do
      n = e.input.charCodeAt(++e.position);
    while (!ke(n) && n !== 0);
    if (!ke(n)) break;
    for (Ai(e), i++, r = !0, n = e.input.charCodeAt(e.position); n === 32; )
      e.lineIndent++, n = e.input.charCodeAt(++e.position);
  }
  return i;
}
function ii(e, t = e.position) {
  const i = e.input.charCodeAt(t);
  if ((i === 45 || i === 46) && i === e.input.charCodeAt(t + 1) && i === e.input.charCodeAt(t + 2)) {
    const n = e.input.charCodeAt(t + 3);
    return n === 0 || Xe(n);
  }
  return !1;
}
function Ua(e) {
  e.position === e.lineStart && e.input.charCodeAt(e.position) === 65279 && (e.position++, e.lineStart = e.position);
}
function pn(e) {
  if (e.position !== e.lineStart) return !1;
  if (ii(e)) return !0;
  if (e.input.charCodeAt(e.position) !== 65279) return !1;
  const t = Zt(e);
  Ua(e), Le(e, !0);
  const i = e.input.charCodeAt(e.position), n = e.position === e.lineStart && (i === 37 || i === 45 && ii(e));
  return ei(e, t), n;
}
function wa(e) {
  let t = e.input.charCodeAt(e.position);
  for (; t !== 0 && !ke(t); ) t = e.input.charCodeAt(++e.position);
}
function Ya(e, t, i) {
  const n = Os.exec(e.input.slice(t, i));
  n !== null && (e.position = t + n.index + n[0].length - 1, A(e, "the stream contains non-printable characters"));
}
function Ks(e, t, i) {
  if (e.input.charCodeAt(e.position) !== 33) return !1;
  t.tagStart !== J && A(e, "duplication of a tag property");
  const n = e.position;
  let r = !1, a = !1, o = "!", s = e.input.charCodeAt(++e.position);
  s === 60 ? (r = !0, s = e.input.charCodeAt(++e.position)) : s === 33 && (a = !0, o = "!!", s = e.input.charCodeAt(++e.position));
  let l = e.position, c;
  if (r) {
    for (; s !== 0 && s !== 62; ) s = e.input.charCodeAt(++e.position);
    s !== 62 && A(e, "unexpected end of the stream within a verbatim tag"), c = e.input.slice(l, e.position), e.position++;
  } else {
    for (; s !== 0 && !Xe(s) && !(i && Gt(s)); )
      s === 33 && (a ? A(e, "tag suffix cannot contain exclamation marks") : (o = e.input.slice(l - 1, e.position + 1), qa.test(o) || A(e, "named tag handle cannot contain such characters"), a = !0, l = e.position + 1)), s = e.input.charCodeAt(++e.position);
    c = e.input.slice(l, e.position), Ds.test(c) && A(e, "tag suffix cannot contain flow indicator characters");
  }
  return c && !(r ? Vs.test(c) : zs.test(c)) && A(e, `tag name cannot contain such characters: ${c}`), !r && o !== "!" && o !== "!!" && !Va.call(e.tagHandlers, o) && A(e, `undeclared tag handle "${o}"`), t.tagStart = n, t.tagEnd = e.position, !0;
}
function Js(e, t) {
  if (e.input.charCodeAt(e.position) !== 38) return !1;
  t.anchorStart !== J && A(e, "duplication of an anchor property"), e.position++;
  const i = e.position;
  for (; e.input.charCodeAt(e.position) !== 0 && !Xe(e.input.charCodeAt(e.position)) && !Gt(e.input.charCodeAt(e.position)); ) e.position++;
  return e.position === i && A(e, "name of an anchor node must contain at least one character"), t.anchorStart = i, t.anchorEnd = e.position, !0;
}
function Qs(e, t) {
  if (e.input.charCodeAt(e.position) !== 42) return !1;
  (t.anchorStart !== J || t.tagStart !== J) && A(e, "alias node should not have any properties"), e.position++;
  const i = e.position;
  for (; e.input.charCodeAt(e.position) !== 0 && !Xe(e.input.charCodeAt(e.position)) && !Gt(e.input.charCodeAt(e.position)); ) e.position++;
  return e.position === i && A(e, "name of an alias node must contain at least one character"), Gs(e, i, e.position), !0;
}
function Zi(e, t) {
  Le(e, !1), e.lineIndent < t && A(e, "deficient indentation");
}
function Xs(e, t, i) {
  if (e.input.charCodeAt(e.position) !== 39) return !1;
  e.position++;
  const n = e.position;
  let r = !0;
  for (; e.input.charCodeAt(e.position) !== 0; ) {
    const a = e.input.charCodeAt(e.position);
    if (a === 39) {
      if (e.input.charCodeAt(e.position + 1) === 39) {
        r = !1, e.position += 2;
        continue;
      }
      const o = e.position;
      return e.position++, ri(e, n, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, O.SINGLE_QUOTED, at.CLIP, -1, r), !0;
    }
    ke(a) ? (r = !1, Zi(e, t)) : e.position === e.lineStart && ii(e) ? A(e, "unexpected end of the document within a single quoted scalar") : a !== 9 && a < 32 ? A(e, "expected valid JSON character") : e.position++;
  }
  A(e, "unexpected end of the stream within a single quoted scalar");
}
function Zs(e, t, i) {
  if (e.input.charCodeAt(e.position) !== 34) return !1;
  e.position++;
  const n = e.position;
  let r = !0;
  for (; e.input.charCodeAt(e.position) !== 0; ) {
    const a = e.input.charCodeAt(e.position);
    if (a === 34) {
      const o = e.position;
      return e.position++, ri(e, n, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, O.DOUBLE_QUOTED, at.CLIP, -1, r), !0;
    }
    if (a === 92) {
      r = !1;
      const o = e.input.charCodeAt(++e.position);
      if (ke(o)) Zi(e, t);
      else if (Ys(o)) e.position++;
      else {
        let s = Us(o);
        for (s === 0 && A(e, "unknown escape sequence"); s-- > 0; )
          e.position++, Hs(e.input.charCodeAt(e.position)) < 0 && A(e, "expected hexadecimal character");
        e.position++;
      }
    } else ke(a) ? (r = !1, Zi(e, t)) : e.position === e.lineStart && ii(e) ? A(e, "unexpected end of the document within a double quoted scalar") : a !== 9 && a < 32 ? A(e, "expected valid JSON character") : e.position++;
  }
  A(e, "unexpected end of the stream within a double quoted scalar");
}
function el(e, t, i) {
  const n = e.input.charCodeAt(e.position);
  let r = at.CLIP, a = -1, o = !1;
  if (n !== 124 && n !== 62) return !1;
  const s = n === 124 ? O.LITERAL_BLOCK : O.FOLDED_BLOCK;
  for (e.position++; e.input.charCodeAt(e.position) !== 0; ) {
    const x = e.input.charCodeAt(e.position), u = js(x);
    if (x === 43 || x === 45)
      r !== at.CLIP && A(e, "repeat of a chomping mode identifier"), r = x === 43 ? at.KEEP : at.STRIP, e.position++;
    else if (u >= 0)
      u === 0 && A(e, "bad explicit indentation width of a block scalar; it cannot be less than one"), o && A(e, "repeat of an indentation width identifier"), a = t + u - 1, o = !0, e.position++;
    else break;
  }
  let l = !1;
  for (; ai(e.input.charCodeAt(e.position)); )
    l = !0, e.position++;
  l && e.input.charCodeAt(e.position) === 35 && wa(e), ke(e.input.charCodeAt(e.position)) ? Ai(e) : e.input.charCodeAt(e.position) !== 0 && A(e, "a line break is expected");
  let c = o ? a : -1, d = 0;
  const _ = e.position;
  let h = e.position;
  for (; e.input.charCodeAt(e.position) !== 0; ) {
    const x = e.position;
    let u = 0;
    for (; e.input.charCodeAt(x + u) === 32; ) u++;
    const y = e.input.charCodeAt(x + u);
    if (y === 0) {
      c >= 0 ? u > c && (h = x + u) : u > 0 && (h = x + u);
      break;
    }
    if (pn(e)) break;
    if (!o && c === -1 && ke(y) && (d = Math.max(d, u)), !o && c === -1 && !ke(y) && (y === 9 && u < t && (e.position = x + u, A(e, "tab characters must not be used in indentation")), u >= t && u < d && (e.position = x + u, A(e, "bad indentation of a mapping entry"))), c === -1 && y !== 0 && !ke(y) && u < t) {
      e.lineIndent = u, e.position = x + u;
      break;
    }
    !o && y !== 0 && !ke(y) && c === -1 && (c = u);
    const v = c === -1 ? t + 1 : c;
    if (y !== 0 && !ke(y) && u < v) {
      e.lineIndent = u, e.position = x + u;
      break;
    }
    wa(e), h = e.position, ke(e.input.charCodeAt(e.position)) && (Ai(e), h = e.position);
  }
  return Ya(e, _, h), ri(e, _, h, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, s, r, c), !0;
}
function tl(e, t) {
  const i = e.input.charCodeAt(e.position), n = t === ti;
  if (i === 0 || Xe(i) || i === 35 || i === 38 || i === 42 || i === 33 || i === 124 || i === 62 || i === 39 || i === 34 || i === 37 || i === 64 || i === 96 || Gt(i)) return !1;
  if (i === 63 || i === 45) {
    const r = e.input.charCodeAt(e.position + 1);
    if (gt(r) || n && Gt(r)) return !1;
  }
  return !0;
}
function il(e, t, i, n) {
  if (!tl(e, i)) return !1;
  const r = e.position;
  let a = e.position, o = e.input.charCodeAt(e.position);
  const s = i === ti;
  let l = !1;
  for (; o !== 0 && !pn(e); ) {
    if (o === 58) {
      const c = e.input.charCodeAt(e.position + 1);
      if (gt(c) || s && Gt(c)) break;
    } else if (o === 35) {
      if (Xe(e.input.charCodeAt(e.position - 1))) break;
    } else {
      if (s && Gt(o)) break;
      if (ke(o)) {
        const c = e.position, d = e.line, _ = e.lineStart, h = e.lineIndent;
        if (Le(e, !1), e.lineIndent >= t) {
          l = !0, o = e.input.charCodeAt(e.position);
          continue;
        }
        e.position = c, e.line = d, e.lineStart = _, e.lineIndent = h;
        break;
      }
    }
    ai(o) || (a = e.position + 1), o = e.input.charCodeAt(++e.position);
  }
  return a === r ? !1 : (Ya(e, r, a), ri(e, r, a, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, O.PLAIN, at.CLIP, -1, !l), !0);
}
function mi(e, t) {
  const i = e.line;
  Le(e, !0), (e.line > i && e.lineIndent < t || e.firstTabInLine !== -1 && e.lineIndent < t) && A(e, "deficient indentation");
}
function nl(e, t, i) {
  const n = e.input.charCodeAt(e.position), r = n === 123, a = e.position;
  let o = !0;
  if (n !== 91 && n !== 123) return !1;
  const s = r ? 125 : 93;
  for (r ? Ha(e, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ue.FLOW) : ja(e, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ue.FLOW), e.position++; e.input.charCodeAt(e.position) !== 0; ) {
    mi(e, t);
    let l = e.input.charCodeAt(e.position);
    if (l === s)
      return e.position++, Xt(e), !0;
    o ? l === 44 && A(e, "expected the node content, but found ','") : A(e, "missed comma between flow collection entries");
    let c = !1, d = !1;
    l === 63 && Xe(e.input.charCodeAt(e.position + 1)) && (c = d = !0, e.position += 1, mi(e, t));
    const _ = e.line, h = Zt(e), x = ni(e, t, ti, !1, !0);
    mi(e, t), l = e.input.charCodeAt(e.position), (r || d || e.line === _) && l === 58 ? (c = !0, e.position++, mi(e, t), r || va(e, h), x || Me(e), ni(e, t, ti, !1, !0) || Me(e), mi(e, t), r || Xt(e)) : r && c ? (x || Me(e), Me(e)) : r ? Me(e) : c && (va(e, h), x || Me(e), Me(e), Xt(e)), l = e.input.charCodeAt(e.position), l === 44 ? (o = !0, e.position++) : o = !1;
  }
  A(e, "unexpected end of the stream within a flow collection");
}
function Ea(e, t, i) {
  if (e.firstTabInLine !== -1 || e.input.charCodeAt(e.position) !== 45 || !gt(e.input.charCodeAt(e.position + 1))) return !1;
  for (ja(e, e.position, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ue.BLOCK); e.input.charCodeAt(e.position) === 45 && gt(e.input.charCodeAt(e.position + 1)); ) {
    e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, A(e, "tab characters must not be used in indentation"));
    const n = e.line;
    e.position++;
    const r = Le(e, !0) > 0;
    if (e.firstTabInLine !== -1 && e.input.charCodeAt(e.position) === 45 && gt(e.input.charCodeAt(e.position + 1)) && A(e, "bad indentation of a sequence entry"), r && e.lineIndent <= t ? Me(e) : ni(e, t, Wa, !1, !0), Le(e, !0), e.lineIndent < t || e.position >= e.length) break;
    e.lineIndent > t && A(e, "bad indentation of a sequence entry"), e.line === n && e.input.charCodeAt(e.position) === 45 && gt(e.input.charCodeAt(e.position + 1)) && A(e, "bad indentation of a sequence entry");
  }
  return Xt(e), !0;
}
function Yi(e, t, i, n) {
  let r = !1, a = !1, o = !1, s = !1;
  if (e.firstTabInLine !== -1) return !1;
  let l = e.input.charCodeAt(e.position);
  for (; l !== 0; ) {
    !r && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, A(e, "tab characters must not be used in indentation"));
    const c = e.input.charCodeAt(e.position + 1), d = e.line;
    if ((l === 63 || l === 58) && gt(c))
      o || (Ha(e, e.position, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, Ue.BLOCK), o = !0), l === 63 ? (r && Me(e), a = !0, r = !0) : (r || (Me(e), a = !0), r = !1), e.position += 1, s = !0;
    else {
      r && (Me(e), r = !1);
      const _ = Zt(e);
      if (!ni(e, i, za, !1, !0)) break;
      if (e.line === d) {
        for (l = e.input.charCodeAt(e.position); ai(l); ) l = e.input.charCodeAt(++e.position);
        if (l === 58)
          l = e.input.charCodeAt(++e.position), gt(l) || A(e, "a whitespace character is expected after the key-value separator within a block mapping"), o || (e.events.splice(_.eventsLength, 0, {
            type: Ce.MAPPING,
            start: _.position,
            anchorStart: n.anchorStart,
            anchorEnd: n.anchorEnd,
            tagStart: n.tagStart,
            tagEnd: n.tagEnd,
            style: Ue.BLOCK
          }), o = !0), a = !0, r = !1, s = !1;
        else if (a) A(e, "expected ':' after a mapping key");
        else
          return n.anchorStart !== J || n.tagStart !== J ? (ei(e, _), !1) : !0;
      } else if (a) A(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return n.anchorStart !== J || n.tagStart !== J ? (ei(e, _), !1) : !0;
    }
    if (ni(e, t, Li, !0, s) && (s = !1), r || s && (Me(e), s = !1), Le(e, !0), l = e.input.charCodeAt(e.position), (e.line === d || e.lineIndent > t) && l !== 0) A(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t) break;
  }
  return a ? (r && Me(e), o && Xt(e), !0) : !1;
}
function ni(e, t, i, n, r, a = !0) {
  var u, y;
  e.depth >= e.maxDepth && A(e, `nesting exceeded maxDepth (${e.maxDepth})`), e.depth++;
  let o = 1, s = !1, l = !1, c = null;
  const d = xa();
  let _ = i === Li || i === Wa, h = _;
  const x = _;
  if (n && Le(e, !0) && (s = !0, e.lineIndent > t ? o = 1 : e.lineIndent === t ? o = 0 : o = -1), o === 1) for (; ; ) {
    const v = e.input.charCodeAt(e.position), E = Zt(e);
    if (s && o !== 1 && (v === 33 || v === 38)) break;
    if (s && x && (d.tagStart !== J || d.anchorStart !== J) && (v === 33 || v === 38)) {
      const p = Zt(e), f = t + 1;
      if (Yi(e, e.position - e.lineStart, f, d) && ((u = e.events[p.eventsLength]) == null ? void 0 : u.type) === Ce.MAPPING)
        return e.depth--, !0;
      ei(e, p);
    }
    if (s && (v === 33 && d.tagStart !== J || v === 38 && d.anchorStart !== J) || !Ks(e, d, i === ti) && !Js(e, d)) break;
    c === null && (c = E), Le(e, !0) ? (s = !0, h = x, e.lineIndent > t ? o = 1 : e.lineIndent === t ? o = 0 : o = -1) : h = !1;
  }
  if (h && (h = s || r), o === 1 || i === Li) {
    const v = i === ti || i === za ? t : t + 1, E = e.position - e.lineStart;
    if (o === 1)
      if (h && (Ea(e, E, d) || Yi(e, E, v, d)) || nl(e, v, d)) l = !0;
      else {
        const p = e.input.charCodeAt(e.position);
        if (c !== null && a && x && !h && p !== 124 && p !== 62) {
          const f = Zt(e), g = c.position - c.lineStart;
          ei(e, c), Yi(e, g, v, xa()) && ((y = e.events[f.eventsLength]) == null ? void 0 : y.type) === Ce.MAPPING ? l = !0 : ei(e, f);
        }
        !l && (_ && el(e, v, d) || Xs(e, v, d) || Zs(e, v, d) || Qs(e, d) || il(e, v, i, d)) && (l = !0);
      }
    else o === 0 && (l = h && Ea(e, E, d));
  }
  return _ = _ && !l, !l && (d.anchorStart !== J || d.tagStart !== J || _) && (ri(e, J, J, d.anchorStart, d.anchorEnd, d.tagStart, d.tagEnd, O.PLAIN), l = !0), e.depth--, l || d.anchorStart !== J || d.tagStart !== J;
}
function rl(e) {
  if (e.lineIndent > 0 || e.input.charCodeAt(e.position) !== 37) return !1;
  e.position++;
  const t = e.position;
  for (; e.input.charCodeAt(e.position) !== 0 && !Xe(e.input.charCodeAt(e.position)); ) e.position++;
  const i = e.input.slice(t, e.position), n = [];
  for (i.length === 0 && A(e, "directive name must not be less than one character in length"); e.input.charCodeAt(e.position) !== 0 && !ke(e.input.charCodeAt(e.position)); ) {
    for (; ai(e.input.charCodeAt(e.position)); ) e.position++;
    if (e.input.charCodeAt(e.position) === 35 || ke(e.input.charCodeAt(e.position)) || e.input.charCodeAt(e.position) === 0) break;
    const r = e.position;
    for (; e.input.charCodeAt(e.position) !== 0 && !Xe(e.input.charCodeAt(e.position)); ) e.position++;
    n.push(e.input.slice(r, e.position));
  }
  if (ke(e.input.charCodeAt(e.position)) && Ai(e), i === "YAML") {
    e.directives.some((a) => a.kind === "yaml") && A(e, "duplication of %YAML directive"), n.length !== 1 && A(e, "YAML directive accepts exactly one argument");
    const r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
    r === null && A(e, "ill-formed argument of the YAML directive"), parseInt(r[1], 10) !== 1 && A(e, "unacceptable YAML version of the document"), e.directives.push({
      kind: "yaml",
      version: n[0]
    });
  } else if (i === "TAG") {
    n.length !== 2 && A(e, "TAG directive accepts exactly two arguments");
    const [r, a] = n;
    qa.test(r) || A(e, "ill-formed tag handle (first argument) of the TAG directive"), Va.call(e.tagHandlers, r) && A(e, `there is a previously declared suffix for "${r}" tag handle`), Ws.test(a) || A(e, "ill-formed tag prefix (second argument) of the TAG directive"), e.tagHandlers[r] = a, e.directives.push({
      kind: "tag",
      handle: r,
      prefix: a
    });
  }
  return !0;
}
function al(e) {
  e.directives = [], e.tagHandlers = /* @__PURE__ */ Object.create(null);
  let t = !1;
  for (Le(e, !0); rl(e); )
    t = !0, Le(e, !0);
  let i = !1, n = !1, r = !0;
  if (e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 && gt(e.input.charCodeAt(e.position + 3))) {
    i = !0;
    const s = e.line;
    e.position += 3, Le(e, !0), r = e.line > s;
  } else t && A(e, "directives end mark is expected");
  const a = e.events.length;
  if (!i && e.position === e.lineStart && e.input.charCodeAt(e.position) === 46 && ii(e)) {
    e.position += 3, Le(e, !0);
    return;
  }
  if (qs(e, i, !1), ni(e, e.lineIndent - 1, Li, !1, r, r) || Me(e), Le(e, !0), e.position === e.lineStart && ii(e) && (n = e.input.charCodeAt(e.position) === 46, n)) {
    const s = e.line;
    e.position += 3, Le(e, !0), e.line === s && e.position < e.length && A(e, "end of the stream or a document separator is expected");
  }
  const o = e.events[a];
  (o == null ? void 0 : o.type) === Ce.DOCUMENT && (o.explicitEnd = n), Xt(e), !n && e.position < e.length && !pn(e) && A(e, "end of the stream or a document separator is expected");
}
function ol(e, t) {
  const i = e.length, n = {
    ...cn,
    ...t,
    input: `${e}\0`,
    length: i,
    position: 0,
    line: 0,
    lineStart: 0,
    lineIndent: 0,
    firstTabInLine: -1,
    depth: 0,
    directives: [],
    tagHandlers: /* @__PURE__ */ Object.create(null),
    events: []
  }, r = e.indexOf("\0");
  for (r !== -1 && $t.throwAt(e, r, "null byte is not allowed in input", n.filename); n.position < n.length && (Ua(n), Le(n, !0), !(n.position >= n.length)); ) {
    const a = n.position;
    al(n), n.position === a && A(n, "can not read a document");
  }
  return n.events;
}
var sl = {
  ...cn,
  ...dn
};
function ll(e, t = {}) {
  const i = {
    ...sl,
    ...t
  }, n = String(e), r = Object.keys(cn), a = Object.keys(dn);
  return Ms(ol(n, Qi(i, r)), {
    ...Qi(i, a),
    source: n
  });
}
function dl(e, t) {
  const i = ll(e, t);
  if (i.length === 0) throw new $t("expected a document, but the input is empty");
  if (i.length === 1) return i[0];
  throw new $t("expected a single document in the stream, but found more");
}
var qt = Symbol("INVALID");
function cl(e) {
  const t = new Set([
    e.defaultScalarTag,
    e.defaultSequenceTag,
    e.defaultMappingTag
  ].filter((a) => a !== void 0)), i = e.implicitScalarTags, n = e.tags.filter((a) => !(a.nodeKind === "scalar" && a.implicit) && !t.has(a)), r = e.tags.filter((a) => t.has(a));
  return [
    ...i.map((a) => ({
      tag: a,
      implicitTag: !0
    })),
    ...n.map((a) => ({
      tag: a,
      implicitTag: !1
    })),
    ...r.map((a) => ({
      tag: a,
      implicitTag: !0
    }))
  ];
}
function pl(e, t) {
  for (let i = 0, n = e.representTypes.length; i < n; i += 1) {
    const { tag: r, implicitTag: a } = e.representTypes[i];
    if (r.identify(t)) {
      let o;
      return r.matchByTagPrefix ? o = r.representTagName(t) : o = r.tagName, {
        tag: r,
        tagName: o,
        implicitTag: a
      };
    }
  }
  return null;
}
function xi(e, t) {
  if (!e.noRefs && t !== null && typeof t == "object") {
    const c = e.refs.get(t);
    if (c)
      return c.anchor === void 0 && (c.anchor = `ref_${e.refCounter++}`), {
        kind: "alias",
        anchor: c.anchor
      };
  }
  const i = pl(e, t);
  if (!i) {
    if (t === void 0 || e.skipInvalid) return qt;
    throw new $t(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`);
  }
  const { tag: n, tagName: r, implicitTag: a } = i, o = a ? r : Ma(r);
  if (n.nodeKind === "scalar") return {
    kind: "scalar",
    tag: o,
    tagged: !a,
    style: O.PLAIN,
    value: n.represent(t)
  };
  if (n.nodeKind === "sequence") {
    const c = n.represent(t), d = {
      kind: "sequence",
      tag: o,
      tagged: !a,
      style: Ue.BLOCK,
      items: []
    };
    e.noRefs || e.refs.set(t, d);
    for (let _ = 0, h = c.length; _ < h; _ += 1) {
      let x = xi(e, c[_]);
      x === qt && c[_] === void 0 && (x = xi(e, null)), x !== qt && d.items.push(x);
    }
    return d;
  }
  const s = n.represent(t), l = {
    kind: "mapping",
    tag: o,
    tagged: !a,
    style: Ue.BLOCK,
    items: []
  };
  e.noRefs || e.refs.set(t, l);
  for (const [c, d] of s) {
    const _ = xi(e, c);
    if (_ === qt) continue;
    const h = xi(e, d);
    h !== qt && l.items.push({
      key: _,
      value: h
    });
  }
  return l;
}
function fl(e, t, i = {}) {
  const n = xi({
    representTypes: cl(t),
    noRefs: i.noRefs ?? !1,
    skipInvalid: i.skipInvalid ?? !1,
    refs: /* @__PURE__ */ new Map(),
    refCounter: 0
  }, e);
  return [{
    contents: n === qt ? null : n,
    directives: []
  }];
}
var gl = Symbol("visit:break"), Ka = Symbol("visit:skip");
function Ti(e, t, i) {
  const n = t(e, i);
  if (n === gl) return !0;
  if (n === Ka) return !1;
  const r = i.depth + 1;
  switch (e.kind) {
    case "sequence":
      for (const a of e.items) if (Ti(a, t, {
        depth: r,
        parent: e,
        isKey: !1
      })) return !0;
      break;
    case "mapping":
      for (const { key: a, value: o } of e.items)
        if (Ti(a, t, {
          depth: r,
          parent: e,
          isKey: !0
        }) || Ti(o, t, {
          depth: r,
          parent: e,
          isKey: !1
        })) return !0;
  }
  return !1;
}
function ka(e, t) {
  for (const i of e) if (i.contents && Ti(i.contents, t, {
    depth: 0,
    parent: null,
    isKey: !1
  })) return;
}
function Oi(e, t) {
  return (e & 1 << t) !== 0;
}
var Sa = {
  applyQuoteFlowKeysOption: hl,
  doubleQuoteForInvisibles: ul,
  doubleQuoteWhitespaceOnly: _l,
  applyForceQuotesOption: yl,
  tryLongOrMultilineAsBlock: bl,
  quoteInvalidPlain: ml,
  fallbackToDoubleQuoted: vl
};
function Ja(e) {
  return e.presenterOptions.quoteStyle === "single" && Oi(e.allowedStylesMask, O.SINGLE_QUOTED) ? O.SINGLE_QUOTED : O.DOUBLE_QUOTED;
}
function hl(e) {
  e.presenterOptions.quoteFlowKeys && (!e.isKey || !e.flowOnly || e.style !== O.PLAIN || (e.style = O.DOUBLE_QUOTED));
}
function ul(e) {
  e.style === O.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value) && (e.style = O.DOUBLE_QUOTED);
}
function _l(e) {
  e.style === O.PLAIN && /^\s+$/.test(e.node.value) && (e.style = O.DOUBLE_QUOTED);
}
function yl(e) {
  e.presenterOptions.forceQuotes && (e.isKey || e.style !== O.PLAIN || e.node.tag === e.presenterOptions.schema.defaultScalarTag.tagName && (e.style = e.node.value.includes(`
`) ? O.DOUBLE_QUOTED : Ja(e)));
}
function bl(e) {
  if (e.style !== O.PLAIN || e.isKey) return;
  const t = e.node.value, i = t.indexOf(`
`) !== -1;
  if (!Oi(e.allowedStylesMask, O.LITERAL_BLOCK)) {
    i && (e.style = O.DOUBLE_QUOTED);
    return;
  }
  const n = e.presenterOptions.lineWidth;
  if (n === -1) {
    i && (e.style = O.LITERAL_BLOCK);
    return;
  }
  const r = Math.max(Math.min(n, 40), n - e.shiftOfContent);
  let a = 0, o = !1;
  for (; a <= t.length; ) {
    let s = t.length;
    const l = t.indexOf(`
`, a);
    l !== -1 && (s = l);
    const c = t.slice(a, s);
    if (c.length > r && c[0] !== " " && / [^ \t]/.test(c) && (o = !0), l === -1) break;
    a = l + 1;
  }
  o ? e.style = O.FOLDED_BLOCK : i && (e.style = O.LITERAL_BLOCK);
}
function ml(e) {
  e.style === O.PLAIN && !Oi(e.allowedStylesMask, O.PLAIN) && (e.style = Ja(e));
}
function vl(e) {
  Oi(e.allowedStylesMask, e.style) || (e.style = O.DOUBLE_QUOTED);
}
function vi(e, t) {
  return e | 1 << t;
}
var xl = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]", wl = "[\\n\\r]", El = "\\uFEFF", fn = "[ \\t]", Qa = `(?:(?!(?:${wl}|${El}))${xl})`, Di = `(?:(?!${fn})${Qa})`, Xa = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]", Za = "[-?:,\\[\\]{}#&*!|>'\"%@`]", kl = "[,\\[\\]{}]", en = Di, tn = `(?:(?!${kl})${Di})`, Sl = `(?:(?:(?!${Za})${Di})|[?:-](?=${en}))`, Cl = `(?:(?:(?!${Za})${Di})|[?:-](?=${tn}))`, eo = `(?:(?:(?![:#])${en})|:(?=${en}))#*`, to = `(?:(?:(?![:#])${tn})|:(?=${tn}))#*`, io = `(?:${fn}*${eo})*`, no = `(?:${fn}*${to})*`, ro = `${Sl}#*${io}`, ao = `${Cl}#*${no}`, $l = ro, Il = ao, Bl = `\\n+${eo}${io}`, Tl = `\\n+${to}${no}`, Nl = `${ro}(?:${Bl})*`, Ll = `${ao}(?:${Tl})*`, Al = new RegExp(`^(?:${Nl})$`, "u"), Fl = new RegExp(`^(?:${Ll})$`, "u"), Pl = new RegExp(`^(?:${$l})$`, "u"), Rl = new RegExp(`^(?:${Il})$`, "u"), Ml = new RegExp(`^(?:${Xa})*$`, "u"), Ol = new RegExp(`^(?:${Xa}|\\n)*$`, "u"), Dl = new RegExp(`^(?:${Qa}|\\n)*$`, "u"), Vl = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/, gn = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;
function zl(e) {
  const t = e.node.value;
  if (t !== "") {
    if (!(e.isKey ? e.flowOnly ? Rl : Pl : e.flowOnly ? Fl : Al).test(t) || e.shiftOfFirstLine === 0 && Vl.test(t)) return !1;
    if (e.shiftOfContent === 0) {
      const n = t.indexOf(`
`);
      if (n !== -1) {
        const r = t.slice(n + 1);
        if (gn.test(r)) return !1;
      }
    }
  }
  const i = e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;
  return !(!e.node.tagged && i !== e.node.tag || !e.node.tagged && t === "=" && i === e.presenterOptions.schema.defaultScalarTag.tagName);
}
function Wl(e) {
  const t = e.node.value;
  if (!(e.isKey ? Ml : Ol).test(t) || /[ \t]\n|\n[ \t]/.test(t)) return !1;
  if (!e.isKey && e.shiftOfContent === 0) {
    const i = t.indexOf(`
`);
    if (i !== -1 && gn.test(t.slice(i + 1))) return !1;
  }
  return !0;
}
function ql(e) {
  if (e.flowOnly || !Dl.test(e.node.value)) return !1;
  const t = e.shiftOfContent - e.shiftOfParent;
  return !(t < 1 || t > 9 && /^\n* /.test(e.node.value) || e.shiftOfContent === 0 && gn.test(e.node.value));
}
function Gl(e) {
  let t = vi(0, O.DOUBLE_QUOTED);
  zl(e) && (t = vi(t, O.PLAIN)), Wl(e) && (t = vi(t, O.SINGLE_QUOTED)), ql(e) && (t = vi(vi(t, O.LITERAL_BLOCK), O.FOLDED_BLOCK)), e.allowedStylesMask = t;
}
function jl(e) {
  switch (e.style) {
    case O.PLAIN:
      return Hl(e);
    case O.SINGLE_QUOTED:
      return Ul(e);
    case O.LITERAL_BLOCK:
      return Yl(e);
    case O.FOLDED_BLOCK:
      return Kl(e);
    case O.DOUBLE_QUOTED:
      return Jl(e);
  }
}
function Hl(e) {
  return oo(e.node.value, e.shiftOfContent);
}
function Ul(e) {
  return `'${oo(e.node.value, e.shiftOfContent).replace(/'/g, "''")}'`;
}
function Yl(e) {
  const t = e.node.value;
  return "|" + lo(t, e.shiftOfParent, e.shiftOfContent) + co(so(t, e.shiftOfContent));
}
function Kl(e) {
  const t = e.node.value, i = e.presenterOptions.lineWidth;
  let n = 1 / 0;
  return i !== -1 && (n = Math.max(Math.min(i, 40), i - e.shiftOfContent)), ">" + lo(t, e.shiftOfParent, e.shiftOfContent) + co(so(Xl(t, n), e.shiftOfContent));
}
function Jl(e) {
  return `"${td(e.node.value)}"`;
}
function oo(e, t) {
  let i = e.indexOf(`
`);
  if (i === -1) return e;
  const n = " ".repeat(t);
  let r = e.slice(0, i);
  const a = /(\n+)([^\n]*)/g;
  a.lastIndex = i;
  let o;
  for (; o = a.exec(e); ) {
    const s = o[1].length, l = o[2];
    r += `
`.repeat(s + 1) + n + l;
  }
  return r;
}
function so(e, t) {
  const i = " ".repeat(t);
  let n = 0, r = "";
  const a = e.length;
  for (; n < a; ) {
    let o;
    const s = e.indexOf(`
`, n);
    s === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, s + 1), n = s + 1), o.length && o !== `
` && (r += i), r += o;
  }
  return r;
}
function Ql(e) {
  return /^\n* /.test(e);
}
function lo(e, t, i) {
  const n = Ql(e) ? String(i - t) : "", r = e[e.length - 1] === `
`;
  return `${n}${r && (e[e.length - 2] === `
` || e === `
`) ? "+" : r ? "" : "-"}
`;
}
function co(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function nn(e) {
  return e === " " || e === "	";
}
function Ca(e, t) {
  if (e === "" || nn(e[0])) return e;
  const i = / [^ \t]/g;
  let n, r = 0, a, o = 0, s = 0, l = "";
  for (; n = i.exec(e); )
    s = n.index, s - r > t && (a = o > r ? o : s, l += `
${e.slice(r, a)}`, r = a + 1), o = s;
  return l += `
`, e.length - r > t && o > r ? l += `${e.slice(r, o)}
${e.slice(o + 1)}` : l += e.slice(r), l.slice(1);
}
function Xl(e, t) {
  const i = /(\n+)([^\n]*)/g;
  let n = e.indexOf(`
`);
  n === -1 && (n = e.length), i.lastIndex = n;
  let r = Ca(e.slice(0, n), t), a = e[0] === `
` || nn(e[0]), o, s;
  for (; s = i.exec(e); ) {
    const l = s[1], c = s[2];
    o = c !== "" && nn(c[0]), r += l + (!a && !o && c !== "" ? `
` : "") + Ca(c, t), a = o;
  }
  return r;
}
var Zl = /["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;
function ed(e) {
  switch (e) {
    case "\0":
      return "\\0";
    case "\x07":
      return "\\a";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case `
`:
      return "\\n";
    case "\v":
      return "\\v";
    case "\f":
      return "\\f";
    case "\r":
      return "\\r";
    case "\x1B":
      return "\\e";
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "":
      return "\\N";
    case " ":
      return "\\_";
    case "\u2028":
      return "\\L";
    case "\u2029":
      return "\\P";
  }
  const t = e.charCodeAt(0), i = t.toString(16).toUpperCase();
  return t <= 255 ? `\\x${"0".repeat(2 - i.length)}${i}` : `\\u${"0".repeat(4 - i.length)}${i}`;
}
function td(e) {
  return e.replace(Zl, ed);
}
var Fi = 10, hn = {
  indent: 2,
  seqNoIndent: !1,
  seqInlineFirst: !0,
  lineWidth: 80,
  flowBracketPadding: !1,
  flowSkipCommaSpace: !1,
  flowSkipColonSpace: !1,
  quoteFlowKeys: !1,
  quoteStyle: "single",
  forceQuotes: !1,
  scalarStyleRules: Object.keys(Sa).map((e) => Reflect.get(Sa, e)),
  tagBeforeAnchor: !1
};
function id(e) {
  return e.tagged ? e.tag : Ma(e.tag);
}
function nd(e) {
  const t = {
    ...hn,
    ...e
  };
  return t.flowSkipColonSpace && (t.quoteFlowKeys = !0), {
    ...t,
    defaultScalarTagName: t.schema.defaultScalarTag.tagName,
    openEnded: !1
  };
}
function rn(e, t) {
  return `
${" ".repeat(e.indent * t)}`;
}
function rd(e, t, i, n, r, a) {
  return {
    node: t,
    parent: i,
    level: n,
    isKey: r,
    flowOnly: a,
    shiftOfParent: n === 0 ? -1 : e.indent * (n - 1),
    shiftOfContent: e.indent * Math.max(1, n),
    shiftOfFirstLine: n === 0 ? 0 : e.indent * n,
    presenterOptions: e,
    allowedStylesMask: 0,
    style: t.style
  };
}
function ad(e, t, i) {
  let n = "";
  for (let a = 0, o = i.items.length; a < o; a += 1) {
    const s = ht(e, t, i.items[a], i, {}).text;
    a > 0 && (n += `,${e.flowSkipCommaSpace ? "" : " "}`), n += s;
  }
  const r = e.flowBracketPadding && i.items.length > 0 ? " " : "";
  return `[${r}${n}${r}]`;
}
function $a(e, t, i, n) {
  let r = "";
  for (let a = 0, o = i.items.length; a < o; a += 1) {
    const s = ht(e, t + 1, i.items[a], i, {
      block: !0,
      compact: e.seqInlineFirst,
      isblockseq: !0
    }).text;
    (!n || r !== "") && (r += rn(e, t)), s === "" || Fi === s.charCodeAt(0) ? r += "-" : r += "- ", r += s;
  }
  return r;
}
function od(e, t, i) {
  let n = "";
  for (const { key: a, value: o } of i.items) {
    let s = "";
    n !== "" && (s += `,${e.flowSkipCommaSpace ? "" : " "}`);
    const l = ht(e, t, a, i, { iskey: !0 }), c = l.text, d = ht(e, t, o, i, {}).text, _ = e.flowSkipColonSpace || d === "" ? "" : " ", h = a.kind === "scalar" && l.noBody && (a.tagged || a.anchor !== void 0), x = a.kind === "alias" || h ? " " : "";
    s += `${c}${x}:${_}${d}`, n += s;
  }
  const r = e.flowBracketPadding && n !== "" ? " " : "";
  return `{${r}${n}${r}}`;
}
function sd(e, t, i, n) {
  let r = "";
  for (let a = 0, o = i.items.length; a < o; a += 1) {
    let s = "";
    (!n || r !== "") && (s += rn(e, t));
    const { key: l, value: c } = i.items[a], d = (l.kind === "mapping" || l.kind === "sequence") && l.style === Ue.BLOCK && l.items.length !== 0 || l.kind === "scalar" && (l.style === O.LITERAL_BLOCK || l.style === O.FOLDED_BLOCK), _ = d ? ht(e, t + 1, l, i, {
      block: !0,
      compact: !0,
      isblockseq: !an(e, l, t + 1)
    }) : ht(e, t + 1, l, i, {
      block: !0,
      compact: !0,
      iskey: !0
    }), h = _.text, x = l.kind === "scalar" && l.value.indexOf(`
`) !== -1, u = h.length > 1024 && /^[\s\S]{1025}/u.test(h), y = d || x || u;
    y && (h && Fi === h.charCodeAt(0) ? s += "?" : s += "? "), s += h, y && (s += rn(e, t));
    const v = ht(e, t + 1, c, i, {
      block: !0,
      compact: y,
      isblockseq: y && !an(e, c, t + 1)
    }).text, E = l.kind === "scalar" && _.noBody && (l.tagged || l.anchor !== void 0), p = !y && (l.kind === "alias" || E) ? " " : "";
    v === "" || Fi === v.charCodeAt(0) ? s += `${p}:` : s += `${p}: `, s += v, r += s;
  }
  return r;
}
function an(e, t, i) {
  return t.kind === "alias" ? !0 : t.tagged || t.anchor !== void 0 || e.indent < 2 && i > 0;
}
function ht(e, t, i, n, r) {
  if (i.kind === "alias")
    return e.openEnded = !1, {
      text: `*${i.anchor}`,
      noBody: !1
    };
  const { block: a = !1, iskey: o = !1, isblockseq: s = !1 } = r;
  let l = r.compact ?? !1;
  const c = i.anchor !== void 0;
  an(e, i, t) && (l = !1);
  let d, _ = i.tagged;
  const h = a && (i.kind === "mapping" || i.kind === "sequence") && i.style === Ue.BLOCK && i.items.length !== 0;
  if (i.kind === "mapping")
    h ? d = sd(e, t, i, l) : d = od(e, t, i);
  else if (i.kind === "sequence")
    h ? e.seqNoIndent && !s && t > 0 ? d = $a(e, t - 1, i, l) : d = $a(e, t, i, l) : d = ad(e, t, i);
  else {
    const y = rd(e, i, n, t, o, !a);
    Gl(y);
    for (const v of e.scalarStyleRules) v(y);
    d = jl(y), e.openEnded = (y.style === O.LITERAL_BLOCK || y.style === O.FOLDED_BLOCK) && (i.value === `
` || i.value.endsWith(`

`)), _ = i.tagged || d === "" && y.flowOnly && (n == null ? void 0 : n.kind) === "sequence" && !c || y.style !== O.PLAIN && i.tag !== e.defaultScalarTagName;
  }
  (i.kind === "mapping" || i.kind === "sequence") && !h && (e.openEnded = !1), h && l && t > 0 && e.indent > 2 && (d = `${" ".repeat(e.indent - 2)}${d}`);
  const x = d === "";
  let u = d;
  if (_ || c) {
    const y = [], v = _ ? id(i) : null, E = c ? `&${i.anchor}` : null;
    e.tagBeforeAnchor ? (v !== null && y.push(v), E !== null && y.push(E)) : (E !== null && y.push(E), v !== null && y.push(v));
    const p = d === "" || d.charCodeAt(0) === Fi ? "" : " ";
    u = `${y.join(" ")}${p}${d}`;
  }
  return {
    text: u,
    noBody: x
  };
}
function ld(e) {
  return (e.kind === "sequence" || e.kind === "mapping") && e.style === Ue.BLOCK && e.items.length !== 0 && !e.tagged && e.anchor === void 0;
}
function dd(e) {
  let t = "";
  for (const i of e.directives) {
    if (i.kind === "yaml") {
      t += `%YAML ${i.version}
`;
      continue;
    }
    const { handle: n, prefix: r } = i;
    t += `%TAG ${n} ${r}
`;
  }
  return t;
}
function cd(e, t) {
  const i = nd(t);
  let n = "", r = !1;
  for (let a = 0; a < e.length; a += 1) {
    const o = e[a];
    i.openEnded = !1;
    const s = dd(o), l = s !== "", c = o.explicitStart || l || a > 0 && !r;
    if (n += s, o.contents === null)
      c && (n += `---
`);
    else if (c) {
      const d = ht(i, 0, o.contents, null, {
        block: !0,
        compact: !0
      }).text, _ = d === "" ? "" : l || ld(o.contents) ? `
` : " ";
      n += `---${_}${d}
`;
    } else n += ht(i, 0, o.contents, null, {
      block: !0,
      compact: !0
    }).text + `
`;
    r = o.explicitEnd || i.openEnded, r && (n += `...
`);
  }
  return n;
}
var pd = {
  ...hn,
  schema: ms,
  skipInvalid: !1,
  noRefs: !1,
  flowLevel: -1,
  sortKeys: !1,
  transform: () => {
  }
};
function fd(e, t) {
  const i = String(e), n = String(t);
  return i < n ? -1 : i > n ? 1 : 0;
}
function gd(e, t = {}) {
  const i = {
    ...pd,
    ...t
  }, n = fl(e, i.schema, {
    noRefs: i.noRefs,
    skipInvalid: i.skipInvalid
  });
  if (i.flowLevel >= 0 && ka(n, (r, a) => {
    if (!(a.depth < i.flowLevel))
      return (r.kind === "sequence" || r.kind === "mapping") && (r.style = Ue.FLOW), Ka;
  }), i.sortKeys) {
    const r = i.sortKeys === !0 ? fd : i.sortKeys;
    ka(n, (a) => {
      a.kind === "mapping" && a.items.sort((o, s) => r(o.key.kind === "scalar" ? o.key.value : "", s.key.kind === "scalar" ? s.key.value : ""));
    });
  }
  return i.transform(n), cd(n, {
    ...Qi(i, Object.keys(hn)),
    schema: i.schema
  });
}
console.info(
  "%c⚡ Energy Station Panel v1.5.3 Loaded ⚡",
  "background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
class hd extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._hass = null, this._config = null, this._isDrawerOpen = !1, this._scale = 1, this._cardNode = null, this._editorNode = null, this._hasAttemptedAutoImport = !1;
  }
  set hass(t) {
    this._hass = t, this._cardNode && (this._cardNode.hass = t), this._editorNode && (this._editorNode.hass = t), this._updateHaStatusBadge(), this._hasAttemptedAutoImport || (this._hasAttemptedAutoImport = !0, this._autoDiscoverLovelaceConfig());
  }
  connectedCallback() {
    this._loadConfig(), this._render(), this._bindEvents(), this._hass && (this._cardNode && (this._cardNode.hass = this._hass), this._editorNode && (this._editorNode.hass = this._hass)), setTimeout(() => {
      this._cardNode && typeof this._cardNode._updateFlowPaths == "function" && this._cardNode._updateFlowPaths();
    }, 120);
  }
  _loadConfig() {
    try {
      const t = localStorage.getItem("energy_station_app_config");
      t && (this._config = JSON.parse(t));
    } catch {
    }
    this._config || (this._config = JSON.parse(JSON.stringify(pe))), this._config.appearance || (this._config.appearance = JSON.parse(JSON.stringify(pe.appearance || {
      font_family: "Inter",
      mono_font_family: "JetBrains Mono",
      power_font_size: "normal",
      label_font_size: "normal",
      theme_preset: "cyber_dark",
      density: "balanced",
      glow_intensity: "high"
    }))), this._scale = this._config.card_scale || 1;
  }
  _saveConfig() {
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_app_config", JSON.stringify(this._config));
    } catch {
    }
    this._cardNode && this._cardNode.setConfig(this._config);
  }
  _updateCardConfig() {
    this._cardNode && this._cardNode.setConfig(this._config), this._editorNode && this._editorNode.setConfig(this._config), this._saveConfig();
  }
  async _autoDiscoverLovelaceConfig() {
    var t, i, n, r;
    if (this._hass)
      try {
        const a = localStorage.getItem("energy_station_app_config");
        if (a) {
          const o = JSON.parse(a);
          if ((n = (i = (t = o.solar) == null ? void 0 : t.strings) == null ? void 0 : i[0]) != null && n.voltage_entity && ((r = o.inverter) != null && r.voltage_entity))
            return;
        }
        await this._importFromLovelace(!1);
      } catch (a) {
        console.warn("Lovelace auto-import skipped:", a);
      }
  }
  async _importFromLovelace(t = !0) {
    var i, n;
    if (!this._hass) {
      t && alert("Немає підключення до Home Assistant");
      return;
    }
    try {
      const r = [], a = (o) => {
        for (const s of o || [])
          if (s.cards) {
            for (const l of s.cards)
              if (l.type && (l.type === "custom:energy-station-card" || l.type.includes("energy-station-card")) && r.push(l), l.cards && Array.isArray(l.cards))
                for (const c of l.cards)
                  c.type && (c.type === "custom:energy-station-card" || c.type.includes("energy-station-card")) && r.push(c);
          }
      };
      try {
        const o = await this._hass.callWS({ type: "lovelace/config" });
        a(o == null ? void 0 : o.views);
      } catch {
      }
      if (r.length === 0 && this._hass.panels) {
        const o = Object.values(this._hass.panels).filter((s) => s.component_name === "lovelace");
        for (const s of o)
          if (s.url_path && s.url_path !== "energy-station")
            try {
              const l = await this._hass.callWS({ type: "lovelace/config", url_path: s.url_path });
              if (a(l == null ? void 0 : l.views), r.length > 0) break;
            } catch {
            }
      }
      if (r.length > 0) {
        const o = r[0], s = JSON.parse(JSON.stringify(o));
        delete s.type, s.appearance = {
          ...pe.appearance,
          ...((i = this._config) == null ? void 0 : i.appearance) || {},
          ...s.appearance || {}
        }, this._config = s, this._saveConfig(), this._render(), this._bindEvents(), t && alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");
        return;
      }
      if (typeof window < "u" && ((n = window.parent) != null && n.document)) {
        const o = window.parent.document.querySelectorAll("energy-station-card");
        for (const s of o)
          if (s !== this._cardNode && s._config) {
            this._config = JSON.parse(JSON.stringify(s._config)), this._saveConfig(), this._render(), this._bindEvents(), t && alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");
            return;
          }
      }
      t && alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".');
    } catch (r) {
      console.error("Import from Lovelace error:", r), t && alert("Помилка імпорту: " + r.message);
    }
  }
  _render() {
    var n;
    const t = this._config, i = t.appearance;
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          min-height: 100vh;
          background: #030712;
          color: #f1f5f9;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
          position: relative;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        /* TOP NAVIGATION BAR */
        .panel-navbar {
          height: 56px;
          background: rgba(11, 19, 36, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .panel-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          user-select: none;
        }

        .panel-brand-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 14px rgba(2, 132, 199, 0.5);
          color: #ffffff;
        }

        .panel-brand-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-brand-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .panel-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-pill-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          user-select: none;
        }

        .panel-pill-btn:hover {
          background: rgba(2, 132, 199, 0.2);
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .panel-settings-btn {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;
          border-color: #38bdf8 !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.45);
        }

        .panel-settings-btn:hover {
          box-shadow: 0 0 22px rgba(56, 189, 248, 0.65);
          transform: translateY(-1px) scale(1.02);
        }

        /* MAIN CONTENT VIEWPORT */
        .panel-viewport {
          width: 100%;
          box-sizing: border-box;
          padding: 20px 24px 60px 24px;
          display: block;
          transition: margin-right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        energy-station-card,
        #stationCard {
          display: block;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* SETTINGS DRAWER OVERLAY */
        .panel-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 90;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .panel-drawer-backdrop.active {
          opacity: 1;
          pointer-events: auto;
        }

        .panel-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 660px;
          max-width: 96vw;
          height: 100vh;
          background: #090f1d;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.85);
          z-index: 100;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .panel-drawer.active {
          transform: translateX(0);
        }

        .drawer-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 23, 42, 0.95);
        }

        .drawer-title {
          font-size: 16px;
          font-weight: 800;
          color: #38bdf8;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .drawer-close-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 18px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .drawer-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        /* DRAWER BODY */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cfg-card {
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
        }

        .cfg-card-title {
          font-size: 13px;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 6px;
        }

        /* FONT PICKER TILES */
        .font-tile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 8px;
        }

        .font-tile {
          padding: 8px 10px;
          border-radius: 8px;
          background: #080d19;
          border: 1px solid #334155;
          color: #e2e8f0;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s;
          user-select: none;
        }

        .font-tile:hover {
          border-color: #38bdf8;
          background: #0d1527;
        }

        .font-tile.active {
          border-color: #38bdf8;
          background: rgba(2, 132, 199, 0.25);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
          color: #ffffff;
        }

        .font-tile-name {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .font-tile-sample {
          font-size: 10px;
          color: #94a3b8;
        }

        /* SEGMENTED BUTTONS (SIZES) */
        .seg-btn-group {
          display: flex;
          background: #080d19;
          border: 1px solid #334155;
          border-radius: 8px;
          overflow: hidden;
          padding: 2px;
          gap: 2px;
        }

        .seg-btn {
          flex: 1;
          padding: 8px 10px;
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
          text-align: center;
        }

        .seg-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .seg-btn.active {
          background: #0284c7;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 0 8px rgba(2, 132, 199, 0.45);
        }

        .slider-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        input[type="range"] {
          flex: 1;
          accent-color: #0284c7;
          cursor: pointer;
        }

        /* DRAWER FOOTER */
        .drawer-footer {
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(14, 23, 42, 0.95);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .btn-action-primary {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border: 1px solid #38bdf8;
          color: #ffffff;
          font-weight: 700;
          padding: 9px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }

        .btn-action-primary:hover {
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
          transform: translateY(-1px);
        }

        .btn-action-secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-weight: 600;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12.5px;
          transition: all 0.2s;
        }

        .btn-action-secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
        }

        /* YAML IMPORT / EXPORT MODAL */
        .panel-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 120;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .panel-modal-backdrop.active {
          display: flex;
        }

        .panel-modal-box {
          background: #090f1d;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 680px;
          max-width: 95vw;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .panel-modal-header {
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 23, 42, 0.95);
        }

        .panel-modal-body {
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        textarea.code-area {
          width: 100%;
          height: 340px;
          background: #050a14;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #38bdf8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 12px;
          outline: none;
          resize: vertical;
          box-sizing: border-box;
          line-height: 1.4;
        }
      </style>

      <!-- NAVIGATION HEADER -->
      <header class="panel-navbar">
        <div class="panel-brand">
          <div class="panel-brand-icon">
            <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <div class="panel-brand-title">
              <span>Energy Station</span>
              <span class="panel-brand-badge">PRO APP v1.5.3</span>
            </div>
          </div>
        </div>

        <div class="panel-controls">
          <!-- Zoom Controls -->
          <div style="display: flex; align-items: center; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 2px 4px; gap: 2px;">
            <button class="panel-pill-btn" id="btnZoomOut" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">−</button>
            <span id="txtZoomVal" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; min-width: 40px; text-align: center; color: #38bdf8; font-weight: 700;">${Math.round(this._scale * 100)}%</span>
            <button class="panel-pill-btn" id="btnZoomIn" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">+</button>
          </div>

          <!-- Quick Theme Toggle -->
          <button class="panel-pill-btn" id="btnQuickTheme" title="Змінити тему">
            ${t.theme_mode === "light" ? "☀️ Світла" : ((n = t.appearance) == null ? void 0 : n.theme_preset) === "oled_black" ? "⬛ OLED" : "🌙 Темна"}
          </button>

          <!-- Fullscreen Toggle -->
          <button class="panel-pill-btn" id="btnFullscreen" title="Повний екран (F11)">
            <span>⛶</span>
          </button>

          <!-- HA Status Badge -->
          <div style="display: flex; align-items: center; gap: 6px; padding: 5px 10px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></div>
            <span style="font-size: 11px; font-weight: 700; color: #34d399;" id="haStatusText">HA Live</span>
          </div>

          <!-- Open Settings Drawer Button -->
          <button class="panel-pill-btn panel-settings-btn" id="btnOpenDrawer">
            <span>⚙️</span>
            <span>Налаштування станції</span>
          </button>
        </div>
      </header>

      <!-- MAIN VIEWPORT -->
      <main class="panel-viewport" id="viewport">
        <energy-station-card id="stationCard"></energy-station-card>
      </main>

      <!-- SETTINGS DRAWER OVERLAY -->
      <div class="panel-drawer-backdrop" id="drawerBackdrop"></div>
      <aside class="panel-drawer" id="settingsDrawer">
        <div class="drawer-header">
          <div class="drawer-title">
            <span>⚙️</span>
            <span>Налаштування Energy Station</span>
          </div>
          <button class="drawer-close-btn" id="btnCloseDrawer">✕</button>
        </div>

        <!-- DRAWER BODY -->
        <div class="drawer-body">

          <!-- TOOLBAR: ONE-CLICK LOVELACE MIGRATION & YAML IMPORT -->
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <button class="panel-pill-btn" id="btnSyncFromLovelace" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📥</span>
              <span>Перенести налаштування з дашборду Lovelace</span>
            </button>
            <button class="panel-pill-btn" id="btnOpenYamlModal" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); color: #fbbf24; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📋</span>
              <span>Вставити / Експорт YAML</span>
            </button>
          </div>

          <!-- SECTION 1: TYPOGRAPHY, SIZES & STYLES -->
          <div class="cfg-card">
            <div class="cfg-card-title">🎨 Шрифти, Розміри та Стилі</div>
            
            <!-- Font Family Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔤 Основний шрифт інтерфейсу:</div>
              <div class="font-tile-grid" id="mainFontGrid">
                <div class="font-tile ${i.font_family === "Inter" ? "active" : ""}" data-val="Inter" style="font-family: 'Inter', sans-serif;">
                  <div class="font-tile-name">Inter</div>
                  <div class="font-tile-sample">Чистий гротеск</div>
                </div>
                <div class="font-tile ${i.font_family === "JetBrains Mono" ? "active" : ""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">Моноширинний</div>
                </div>
                <div class="font-tile ${i.font_family === "Orbitron" ? "active" : ""}" data-val="Orbitron" style="font-family: 'Orbitron', sans-serif;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">Cyberpunk</div>
                </div>
                <div class="font-tile ${i.font_family === "Exo 2" ? "active" : ""}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${i.font_family === "Roboto" ? "active" : ""}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Material</div>
                </div>
                <div class="font-tile ${i.font_family === "Ubuntu" ? "active" : ""}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий</div>
                </div>
                <div class="font-tile ${i.font_family === "system-ui" ? "active" : ""}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔢 Шрифт числових показників (кВт / V / A):</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${i.mono_font_family === "JetBrains Mono" ? "active" : ""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family === "Orbitron" ? "active" : ""}" data-val="Orbitron" style="font-family: 'Orbitron', monospace;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family === "Roboto Mono" ? "active" : ""}" data-val="Roboto Mono" style="font-family: 'Roboto Mono', monospace;">
                  <div class="font-tile-name">Roboto Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family === "Fira Code" ? "active" : ""}" data-val="Fira Code" style="font-family: 'Fira Code', monospace;">
                  <div class="font-tile-name">Fira Code</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
              </div>
            </div>

            <!-- Power Value Size (Розмір цифр) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">📏 Розмір головних цифр потужності (кВт):</div>
              <div class="seg-btn-group" id="powerSizeSeg">
                <button class="seg-btn ${i.power_font_size === "compact" ? "active" : ""}" data-val="compact">
                  <div>Компактний</div>
                  <div style="font-size: 10px; color: #64748b;">18px</div>
                </button>
                <button class="seg-btn ${i.power_font_size === "normal" || !i.power_font_size ? "active" : ""}" data-val="normal">
                  <div>Стандартний</div>
                  <div style="font-size: 10px; color: #64748b;">22px</div>
                </button>
                <button class="seg-btn ${i.power_font_size === "large" ? "active" : ""}" data-val="large">
                  <div>Великий</div>
                  <div style="font-size: 10px; color: #64748b;">28px</div>
                </button>
                <button class="seg-btn ${i.power_font_size === "huge" ? "active" : ""}" data-val="huge">
                  <div>Гігантський</div>
                  <div style="font-size: 10px; color: #64748b;">34px (на стіну)</div>
                </button>
              </div>
            </div>

            <!-- Labels Font Size (Розмір підписів) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🏷️ Розмір підписів блоків та статусів:</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${i.label_font_size === "compact" ? "active" : ""}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${i.label_font_size === "normal" || !i.label_font_size ? "active" : ""}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${i.label_font_size === "large" ? "active" : ""}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🌓 Колірна тема оформлення:</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${i.theme_preset === "cyber_dark" || !i.theme_preset ? "active" : ""}" data-val="cyber_dark">
                  🌙 Cyber Dark
                </button>
                <button class="seg-btn ${i.theme_preset === "oled_black" ? "active" : ""}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${i.theme_preset === "clean_light" ? "active" : ""}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11.5px; font-weight: 600; color: #cbd5e1;">🔍 Масштаб станції (Zoom / Scale):</span>
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8;">${Math.round(this._scale * 100)}%</span>
              </div>
              <div class="slider-row">
                <input type="range" id="sliderCardScale" min="0.7" max="1.6" step="0.05" value="${this._scale}">
              </div>
            </div>
          </div>

          <!-- SECTION 2: COMPREHENSIVE CARD CONFIGURATION (ALL 100+ FIELDS) -->
          <div style="background: #0b1324; border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 12px; margin-top: 4px;">
            <div style="font-size: 13px; font-weight: 800; color: #38bdf8; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
              <span>⚡</span>
              <span>Повні параметри станції (Сенсори, Інвертор, PV, АКБ, Мережа, Дім, Тарифи):</span>
            </div>
            <energy-station-card-editor id="drawerCardEditor"></energy-station-card-editor>
          </div>

        </div>

        <!-- DRAWER FOOTER -->
        <div class="drawer-footer">
          <button class="btn-action-secondary" id="btnCancelDrawer">Закрити</button>
          <button class="btn-action-primary" id="btnSaveDrawer">✓ Зберегти зміни</button>
        </div>
      </aside>

      <!-- YAML / JSON MODAL -->
      <div class="panel-modal-backdrop" id="yamlModal">
        <div class="panel-modal-box">
          <div class="panel-modal-header">
            <span style="font-weight: 800; color: #38bdf8; font-size: 14px;">📋 Вставити або скопіювати YAML / JSON</span>
            <button class="drawer-close-btn" id="btnCloseYamlModal">✕</button>
          </div>
          <div class="panel-modal-body">
            <span style="font-size: 11.5px; color: #94a3b8;">
              Вставте конфігурацію картки (YAML або JSON) з коду Lovelace або скопіюйте поточну для резервної копії:
            </span>
            <textarea class="code-area" id="yamlCodeArea"></textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 6px;">
              <button class="btn-action-secondary" id="btnCopyCurrentYaml">📋 Скопіювати поточну</button>
              <button class="btn-action-primary" id="btnApplyYaml">✓ Застосувати конфігурацію</button>
            </div>
          </div>
        </div>
      </div>
    `, this._cardNode = this.shadowRoot.getElementById("stationCard"), this._editorNode = this.shadowRoot.getElementById("drawerCardEditor"), this._cardNode && (this._cardNode.setConfig(this._config), this._hass && (this._cardNode.hass = this._hass)), this._editorNode && (this._editorNode.setConfig(this._config), this._hass && (this._editorNode.hass = this._hass));
  }
  _bindEvents() {
    var o, s, l, c, d, _, h, x, u, y, v, E, p, f, g;
    const t = this.shadowRoot;
    (o = t.getElementById("btnOpenDrawer")) == null || o.addEventListener("click", () => this._openDrawer()), (s = t.getElementById("btnCloseDrawer")) == null || s.addEventListener("click", () => this._closeDrawer()), (l = t.getElementById("btnCancelDrawer")) == null || l.addEventListener("click", () => this._closeDrawer()), (c = t.getElementById("drawerBackdrop")) == null || c.addEventListener("click", () => this._closeDrawer()), (d = t.getElementById("btnSaveDrawer")) == null || d.addEventListener("click", () => {
      this._updateCardConfig(), this._closeDrawer(), alert("✓ Налаштування збережено!");
    }), (_ = this._editorNode) == null || _.addEventListener("config-changed", (w) => {
      var I;
      const k = w.detail.config;
      k.appearance = {
        ...pe.appearance,
        ...((I = this._config) == null ? void 0 : I.appearance) || {},
        ...k.appearance || {}
      }, this._config = k, this._cardNode && this._cardNode.setConfig(this._config), this._saveConfig();
    }), (h = t.getElementById("btnZoomIn")) == null || h.addEventListener("click", () => this._changeScale(this._scale + 0.1)), (x = t.getElementById("btnZoomOut")) == null || x.addEventListener("click", () => this._changeScale(this._scale - 0.1)), (u = t.getElementById("btnFullscreen")) == null || u.addEventListener("click", () => {
      var w, k, I;
      document.fullscreenElement ? (I = document.exitFullscreen) == null || I.call(document) : (k = (w = document.documentElement).requestFullscreen) == null || k.call(w);
    }), (y = t.getElementById("btnQuickTheme")) == null || y.addEventListener("click", () => {
      var F;
      const w = ["cyber_dark", "oled_black", "clean_light"], k = ((F = this._config.appearance) == null ? void 0 : F.theme_preset) || "cyber_dark", I = (w.indexOf(k) + 1) % w.length, P = w[I];
      this._config.appearance.theme_preset = P, this._config.theme_mode = P === "clean_light" ? "light" : "dark", this._updateCardConfig();
      const m = t.getElementById("btnQuickTheme");
      m && (m.innerText = P === "clean_light" ? "☀️ Світла" : P === "oled_black" ? "⬛ OLED" : "🌙 Темна");
    }), (v = t.getElementById("btnSyncFromLovelace")) == null || v.addEventListener("click", () => {
      this._importFromLovelace(!0);
    });
    const i = t.getElementById("yamlModal"), n = t.getElementById("yamlCodeArea");
    (E = t.getElementById("btnOpenYamlModal")) == null || E.addEventListener("click", () => {
      if (i && n) {
        try {
          n.value = gd(this._config);
        } catch {
          n.value = JSON.stringify(this._config, null, 2);
        }
        i.classList.add("active");
      }
    }), (p = t.getElementById("btnCloseYamlModal")) == null || p.addEventListener("click", () => {
      i == null || i.classList.remove("active");
    }), (f = t.getElementById("btnCopyCurrentYaml")) == null || f.addEventListener("click", () => {
      var w;
      n && ((w = navigator.clipboard) == null || w.writeText(n.value), alert("✓ Скопійовано в буфер обміну!"));
    }), (g = t.getElementById("btnApplyYaml")) == null || g.addEventListener("click", () => {
      var w;
      if (n && n.value.trim())
        try {
          const k = n.value.trim();
          let I = null;
          k.startsWith("{") ? I = JSON.parse(k) : I = dl(k), I && typeof I == "object" && (I.type && delete I.type, I.appearance = {
            ...pe.appearance,
            ...((w = this._config) == null ? void 0 : w.appearance) || {},
            ...I.appearance || {}
          }, this._config = I, this._saveConfig(), this._render(), this._bindEvents(), i == null || i.classList.remove("active"), alert("✓ Конфігурацію успішно застосовано!"));
        } catch (k) {
          alert("Помилка формату YAML / JSON: " + k.message);
        }
    }), t.querySelectorAll("#mainFontGrid .font-tile").forEach((w) => {
      w.addEventListener("click", () => {
        t.querySelectorAll("#mainFontGrid .font-tile").forEach((k) => k.classList.remove("active")), w.classList.add("active"), this._config.appearance.font_family = w.dataset.val, this._updateCardConfig();
      });
    }), t.querySelectorAll("#monoFontGrid .font-tile").forEach((w) => {
      w.addEventListener("click", () => {
        t.querySelectorAll("#monoFontGrid .font-tile").forEach((k) => k.classList.remove("active")), w.classList.add("active"), this._config.appearance.mono_font_family = w.dataset.val, this._updateCardConfig();
      });
    }), t.querySelectorAll("#powerSizeSeg .seg-btn").forEach((w) => {
      w.addEventListener("click", () => {
        t.querySelectorAll("#powerSizeSeg .seg-btn").forEach((k) => k.classList.remove("active")), w.classList.add("active"), this._config.appearance.power_font_size = w.dataset.val, this._updateCardConfig();
      });
    }), t.querySelectorAll("#labelSizeSeg .seg-btn").forEach((w) => {
      w.addEventListener("click", () => {
        t.querySelectorAll("#labelSizeSeg .seg-btn").forEach((k) => k.classList.remove("active")), w.classList.add("active"), this._config.appearance.label_font_size = w.dataset.val, this._updateCardConfig();
      });
    }), t.querySelectorAll("#themePresetSeg .seg-btn").forEach((w) => {
      w.addEventListener("click", () => {
        t.querySelectorAll("#themePresetSeg .seg-btn").forEach((I) => I.classList.remove("active")), w.classList.add("active");
        const k = w.dataset.val;
        this._config.appearance.theme_preset = k, this._config.theme_mode = k === "clean_light" ? "light" : "dark", this._updateCardConfig();
      });
    });
    const r = t.getElementById("sliderCardScale"), a = t.getElementById("lblCardScale");
    r && r.addEventListener("input", (w) => {
      const k = parseFloat(w.target.value);
      a && (a.innerText = `${Math.round(k * 100)}%`), this._changeScale(k);
    });
  }
  _openDrawer() {
    var i, n;
    this._isDrawerOpen = !0;
    const t = this.shadowRoot;
    (i = t.getElementById("settingsDrawer")) == null || i.classList.add("active"), (n = t.getElementById("drawerBackdrop")) == null || n.classList.add("active");
  }
  _closeDrawer() {
    var i, n;
    this._isDrawerOpen = !1;
    const t = this.shadowRoot;
    (i = t.getElementById("settingsDrawer")) == null || i.classList.remove("active"), (n = t.getElementById("drawerBackdrop")) == null || n.classList.remove("active");
  }
  _changeScale(t) {
    const i = Math.max(0.65, Math.min(1.8, Math.round(t * 100) / 100));
    this._scale = i, this._config.card_scale = i;
    const n = this.shadowRoot.getElementById("txtZoomVal");
    n && (n.innerText = `${Math.round(i * 100)}%`), this._updateCardConfig();
  }
  _updateHaStatusBadge() {
    var i;
    const t = (i = this.shadowRoot) == null ? void 0 : i.getElementById("haStatusText");
    if (t)
      if (this._hass) {
        const n = Object.keys(this._hass.states || {}).length;
        t.innerText = `HA Live (${n} сенсорів)`;
      } else
        t.innerText = "Демо режим";
  }
}
console.info(
  "%c⚡ Energy Station Card v1.5.3 Loaded ⚡",
  "background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
const Ia = {
  uk: {
    live_status: "HA Live",
    solar_yield_today: "Генерація сьогодні",
    total_pv: "СУМАРНО PV",
    inverter_title: "ГІБРИДНИЙ ІНВЕРТОР",
    inverter_working: "ПРАЦЮЄ",
    inverter_standby: "ОЧІКУВАННЯ",
    inverter_fault: "ПОМИЛКА",
    inverter_offline: "ВИМКНЕНО",
    inverter_self: "⚡ Власне:",
    grid_title: "Мережа",
    grid_import: "Імпорт",
    grid_export: "Експорт",
    grid_dir_import: "→ Імпорт",
    grid_dir_export: "← Експорт",
    grid_dir_off: "Вимкнено",
    grid_dir_idle: "Мережа",
    house_title: "Гарантоване",
    house_badge: "Будинок",
    bat_charge: "Заряд",
    bat_discharge: "Розряд",
    bat_dir_charge: "Заряд ↓",
    bat_dir_discharge: "Розряд ↑",
    bat_idle: "Очікування",
    wind_title: "Вітрогенерація",
    wind_day: "День:",
    wind_month: "Місяць:",
    wind_calm: "Штиль",
    wind_gen: "Генерація",
    aux_microinverter: "Мікроінвертор",
    aux_generator: "Генератор",
    aux_wind: "Вітрогенератор",
    aux_smart_load: "Smart Load",
    aux_source_gen: "Джерело → GEN port",
    subload_boiler: "Бойлер",
    subload_heat_pump: "Тепловий насос",
    subload_other: "Інше",
    settings_title: "Керування",
    theme_label: "Тема",
    theme_dark: "Темна",
    theme_light: "Світла",
    lang_label: "Мова",
    lang_uk: "УКР",
    lang_en: "ENG",
    bat_prefix: "Батарея",
    ctrl_title: "Контроль струму заряду акумулятора",
    ctrl_solar_charge: "Струм заряду АКБ від сонця",
    ctrl_sell_power: "Потужність Продажу",
    ctrl_grid_charge: "Струм заряду АКБ від мережі",
    tariff_night: "Ніч",
    tariff_day: "День",
    tariff_export: "Зелений тариф",
    tariff_cost: "Вартість",
    export_income: "Дохід від експорту",
    solar_saved: "Заощаджено",
    tariff_night_saved: "Нічна економія",
    tariff_net_benefit: "Чиста вигода",
    tariff_net_cost: "Чисті витрати",
    autarky_title: "Автономність",
    self_consumption_title: "Власне споживання",
    bat_delta: "Розбаланс",
    bat_remaining: "Залишок",
    edit_card: "Редагувати",
    kwh_unit: "кВт·год"
  },
  en: {
    live_status: "HA Live",
    solar_yield_today: "Today Yield",
    total_pv: "TOTAL PV",
    inverter_title: "HYBRID INVERTER",
    inverter_working: "WORKING",
    inverter_standby: "STANDBY",
    inverter_fault: "FAULT",
    inverter_offline: "OFFLINE",
    inverter_self: "⚡ Self:",
    grid_title: "Grid",
    grid_import: "Import",
    grid_export: "Export",
    grid_dir_import: "→ Import",
    grid_dir_export: "← Export",
    grid_dir_off: "Disconnected",
    grid_dir_idle: "Grid",
    house_title: "Essential Load",
    house_badge: "House",
    bat_charge: "Charge",
    bat_discharge: "Discharge",
    bat_dir_charge: "Charge ↓",
    bat_dir_discharge: "Discharge ↑",
    bat_idle: "Idle",
    wind_title: "Wind Generation",
    wind_day: "Day:",
    wind_month: "Month:",
    wind_calm: "Calm",
    wind_gen: "Generating",
    aux_microinverter: "Microinverter",
    aux_generator: "Generator",
    aux_wind: "Wind Turbine",
    aux_smart_load: "Smart Load",
    aux_source_gen: "Source → GEN port",
    subload_boiler: "Boiler",
    subload_heat_pump: "Heat Pump",
    subload_other: "Other",
    settings_title: "Controls",
    theme_label: "Theme",
    theme_dark: "Dark",
    theme_light: "Light",
    lang_label: "Language",
    lang_uk: "UA",
    lang_en: "EN",
    bat_prefix: "Battery",
    ctrl_title: "Battery Charge Current Control",
    ctrl_solar_charge: "Solar Charge Current",
    ctrl_sell_power: "Sell Power Limit",
    ctrl_grid_charge: "Grid Charge Current",
    tariff_night: "Night",
    tariff_day: "Day",
    tariff_export: "Feed-in Tariff",
    tariff_cost: "Cost",
    export_income: "Export Income",
    solar_saved: "Saved",
    tariff_night_saved: "Night Savings",
    tariff_net_benefit: "Net Benefit",
    tariff_net_cost: "Net Cost",
    autarky_title: "Autarky",
    self_consumption_title: "Self-Consumption",
    bat_delta: "Cell Delta",
    bat_remaining: "Remaining",
    edit_card: "Edit",
    kwh_unit: "kWh"
  }
};
class ud extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._initialized = !1, this._themeMode = "dark", this._language = "uk", this._scale = 1, this._nodes = {}, this._resizeObserver = null;
  }
  connectedCallback() {
    if (this._setupResizeObserver(), typeof sessionStorage < "u" && sessionStorage.getItem("energy_station_auto_edit") === "1") {
      try {
        sessionStorage.removeItem("energy_station_auto_edit");
      } catch {
      }
      setTimeout(() => this._openCardEditor(), 350);
    }
  }
  disconnectedCallback() {
    this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
  }
  _openCardEditor() {
    var n, r;
    let t = this, i = null;
    for (; t; ) {
      if (t.tagName && (t.tagName.toLowerCase() === "hui-card-options" || t.tagName.toLowerCase() === "hui-card-edit-mode")) {
        i = t;
        break;
      }
      if (t.parentElement)
        t = t.parentElement;
      else if (t.parentNode)
        t = t.parentNode;
      else if (t.getRootNode && t.getRootNode().host)
        t = t.getRootNode().host;
      else
        break;
    }
    if (!i && typeof document < "u") {
      const a = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
      for (const o of a)
        if (o.contains(this) || (n = o.shadowRoot) != null && n.contains(this) || a.length === 1) {
          i = o;
          break;
        }
    }
    if (i) {
      if (typeof i._editCard == "function") {
        i._editCard();
        return;
      }
      const a = ((r = i.shadowRoot) == null ? void 0 : r.querySelector("mwc-button, ha-button, button")) || i.querySelector("mwc-button, ha-button, button");
      if (a) {
        a.click();
        return;
      }
      if (i.path !== void 0) {
        const o = new CustomEvent("ll-edit-card", {
          bubbles: !0,
          composed: !0,
          detail: { path: i.path }
        });
        i.dispatchEvent(o);
        return;
      }
    }
    if (typeof window < "u") {
      try {
        typeof sessionStorage < "u" && sessionStorage.setItem("energy_station_auto_edit", "1");
      } catch {
      }
      const a = new URL(window.location.href);
      a.searchParams.has("edit") ? setTimeout(() => {
        var s, l;
        const o = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
        for (const c of o)
          if (c.contains(this) || (s = c.shadowRoot) != null && s.contains(this) || o.length === 1) {
            if (typeof c._editCard == "function") {
              c._editCard();
              return;
            }
            const d = ((l = c.shadowRoot) == null ? void 0 : l.querySelector("mwc-button, ha-button, button")) || c.querySelector("mwc-button, ha-button, button");
            if (d) {
              d.click();
              return;
            }
          }
      }, 500) : (a.searchParams.set("edit", "1"), window.location.href = a.toString());
    }
  }
  static getConfigElement() {
    return document.createElement("energy-station-card-editor");
  }
  static getStubConfig() {
    return JSON.parse(JSON.stringify(pe));
  }
  getCardSize() {
    return 6;
  }
  setConfig(t) {
    if (!t) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(t)), n = JSON.parse(JSON.stringify(pe));
    this._config = this._deepMerge(n, i);
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = r || this._config.theme_mode || "dark";
    const a = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = a || this._config.language || "uk";
    const o = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = o ? parseFloat(o) : this._config.card_scale || this._config.scale || 1, this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(t) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(t) : setTimeout(t, 0);
  }
  _changeScale(t) {
    var a, o;
    let i = typeof t == "number" ? t : this._scale + (t || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const n = (a = this.shadowRoot) == null ? void 0 : a.querySelector(".energy-station-container");
    n && (n.style.setProperty("--es-card-scale", i.toString()), n.style.zoom = i.toString());
    const r = (o = this.shadowRoot) == null ? void 0 : o.getElementById("headerZoomVal");
    r && (r.innerText = `${Math.round(i * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(t) {
    this._hass = t, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(t, i) {
    const n = Array.isArray(t) ? [...t] : Object.assign({}, t);
    if (!i || typeof i != "object") return n;
    for (const r of Object.keys(i)) {
      const a = i[r], o = t ? t[r] : void 0;
      a && typeof a == "object" && !Array.isArray(a) ? n[r] = this._deepMerge(o || {}, a) : n[r] = a;
    }
    return n;
  }
  _getEntityState(t) {
    var s;
    if (!this._hass || !t || !this._hass.states[t]) return null;
    const i = this._hass.states[t], r = String(i.state).trim().replace(",", "."), a = parseFloat(r), o = ((s = i.attributes) == null ? void 0 : s.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(a) ? 0 : a,
      unit: o,
      attributes: i.attributes
    };
  }
  _t(t) {
    var n, r;
    const i = this._language || "uk";
    return ((n = Ia[i]) == null ? void 0 : n[t]) || ((r = Ia.uk) == null ? void 0 : r[t]) || t;
  }
  _toggleTheme(t) {
    const i = t || (this._themeMode === "light" ? "dark" : "light");
    this._themeMode = i;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_theme", i);
    } catch {
    }
    this._applyTheme();
  }
  _toggleLanguage(t) {
    const i = t || (this._language === "en" ? "uk" : "en");
    this._language = i;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_lang", i);
    } catch {
    }
    this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _applyTheme() {
    var o;
    const t = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".energy-station-container");
    if (!t) return;
    const i = this._themeMode === "light";
    t.classList.toggle("theme-light", i);
    const n = this.shadowRoot.getElementById("headerThemeToggle");
    n && (n.innerHTML = i ? "☀️" : "🌙", n.setAttribute("title", i ? this._t("theme_dark") : this._t("theme_light")));
    const r = this.shadowRoot.getElementById("btnThemeDark"), a = this.shadowRoot.getElementById("btnThemeLight");
    r && a && (r.classList.toggle("active", !i), a.classList.toggle("active", i));
  }
  _formatPower(t, i = 0) {
    const n = this._language === "en" ? "kW" : "кВт";
    if (!t) return { num: i.toFixed(3), kw: i, str: `${i.toFixed(3)} ${n}` };
    let r = t.val;
    return t.unit === "W" && (r = r / 1e3), {
      num: r.toFixed(3),
      kw: r,
      str: `${r.toFixed(3)} ${n}`
    };
  }
  _fireMoreInfo(t) {
    if (!t) return;
    const i = new CustomEvent("hass-more-info", {
      detail: { entityId: t },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(i);
  }
  _renderCardSkeleton() {
    var l, c, d, _, h, x, u, y, v, E, p, f, g, w, k, I, P, m;
    const t = this._config || pe;
    this._initialized = !0;
    const i = t.appearance || pe.appearance || {}, n = {
      Inter: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "JetBrains Mono": "'JetBrains Mono', monospace",
      Roboto: "'Roboto', sans-serif",
      Orbitron: "'Orbitron', sans-serif",
      "Exo 2": "'Exo 2', sans-serif",
      Ubuntu: "'Ubuntu', sans-serif",
      "system-ui": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }, r = {
      "JetBrains Mono": "'JetBrains Mono', monospace",
      "Roboto Mono": "'Roboto Mono', monospace",
      Orbitron: "'Orbitron', monospace",
      "Fira Code": "'Fira Code', monospace",
      "Share Tech Mono": "'Share Tech Mono', monospace"
    }, a = {
      compact: "18px",
      normal: "22px",
      large: "28px",
      huge: "34px"
    }, o = {
      compact: "10px",
      normal: "11.5px",
      large: "13.5px"
    }, s = {
      compact: "14px 18px",
      balanced: "22px 28px 24px 28px",
      spacious: "30px 36px"
    };
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          font-family: var(--es-font-family, ${n[i.font_family] || n.Inter});
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((l = t.animations) == null ? void 0 : l.speed) || 1.2}s;
          --es-power-font-size: ${a[i.power_font_size] || "22px"};
          --es-label-font-size: ${o[i.label_font_size] || "11.5px"};
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
          min-width: 280px;
          max-width: var(--es-card-max-width, ${t.max_width || "1400px"});
          margin: 0 auto;
          padding: ${s[i.density] || "22px 28px 24px 28px"};
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
          zoom: var(--es-card-scale, ${this._scale || 1});
        }

        .energy-station-container.theme-oled {
          background-color: #000000 !important;
          background-image: none !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.9) !important;
        }

        .es-mono {
          font-family: var(--es-mono-font-family, ${r[i.mono_font_family] || r["JetBrains Mono"]});
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
        .es-pv-metrics {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 3px;
          padding-top: 3px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          width: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }
        .es-pv-metrics .volt {
          color: #38bdf8;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .es-pv-metrics .volt:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .es-pv-metrics .sep {
          color: rgba(255, 255, 255, 0.25);
          font-size: 8px;
        }
        .es-pv-metrics .curr {
          color: #34d399;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .es-pv-metrics .curr:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
        .es-pv-cap {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          white-space: nowrap;
        }
        .es-pv-percent-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 800;
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
          vertical-align: middle;
        }
        .theme-light .es-pv-metrics {
          border-top-color: rgba(0, 0, 0, 0.08) !important;
        }
        .theme-light .es-pv-metrics .volt {
          color: #0284c7 !important;
        }
        .theme-light .es-pv-metrics .sep {
          color: rgba(0, 0, 0, 0.25) !important;
        }
        .theme-light .es-pv-metrics .curr {
          color: #059669 !important;
        }
        .theme-light .es-pv-cap {
          color: #64748b !important;
        }
        .theme-light .es-pv-percent-badge {
          background: rgba(245, 158, 11, 0.12) !important;
          color: #d97706 !important;
          border-color: rgba(245, 158, 11, 0.35) !important;
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
          min-width: 24px;
          min-height: 24px;
          max-width: 24px;
          max-height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .es-node-icon svg,
        .es-schematic-node .es-node-icon svg,
        .es-pv-panel svg,
        .es-inverter-icon-box svg,
        .turbine-icon-box svg,
        .es-subload-icon svg,
        .es-aux-box svg {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          display: block;
          flex-shrink: 0;
        }
        .es-node-title {
          font-size: var(--es-label-font-size, 13px);
          font-weight: 600;
          color: #cbd5e1;
        }
        .es-node-power {
          font-size: var(--es-power-font-size, 20px);
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

          .es-bottom-row {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }

          .es-bottom-spacer {
            display: none !important;
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

        .es-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1.6fr 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          position: relative;
        }
        .es-bottom-spacer {
          width: 100%;
        }
        .es-bottom-controls-dock {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
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
        .es-bat-telemetry-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 4px;
          font-size: 11px;
        }
        .es-bat-delta-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          transition: all 0.25s ease;
        }
        .theme-light .es-bat-delta-badge {
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        /* Quick Settings & Controls Card */
        .es-quick-settings-card {
          padding: 10px 14px 12px 14px;
          background: rgba(14, 23, 42, 0.88);
          border: 1.5px solid rgba(56, 189, 248, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          width: 100%;
          max-width: 320px;
          box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.45);
          transition: all 0.25s ease;
          position: relative;
          z-index: 2;
        }
        .es-quick-settings-card:hover {
          border-color: #38bdf8;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px -2px rgba(56, 189, 248, 0.25);
        }
        .es-qs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .es-qs-title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
        }
        .es-qs-icon {
          width: 16px;
          height: 16px;
          color: #38bdf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .es-qs-title {
          font-size: 11px;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .es-qs-actions {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
        }
        .es-qs-mini-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 6px;
          padding: 2px 6px;
          cursor: pointer;
          font-size: 10px;
          font-weight: 700;
          transition: all 0.2s ease;
          line-height: 1;
          user-select: none;
        }
        .es-qs-mini-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .es-qs-mini-icon {
          display: inline-flex;
          width: 12px;
          height: 12px;
        }

        /* Control Tiles */
        .es-ctrl-tiles {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .es-ctrl-tile {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: rgba(8, 14, 27, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 9px;
          padding: 6px 10px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .es-ctrl-tile:hover {
          border-color: rgba(56, 189, 248, 0.35);
          background: rgba(8, 14, 27, 0.85);
        }
        .es-ctrl-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .es-ctrl-label-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .es-ctrl-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 5px;
        }
        .es-ctrl-solar { color: #fbbf24; }
        .es-ctrl-sell { color: #34d399; }
        .es-ctrl-grid { color: #38bdf8; }
        .es-ctrl-label {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          white-space: nowrap;
        }
        .es-ctrl-val {
          font-size: 13px;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: -0.01em;
        }
        .es-ctrl-slider-wrap {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 2px 0;
        }
        .es-ctrl-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          outline: none;
          background: rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: background 0.08s linear;
        }
        .es-ctrl-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
          transition: transform 0.12s ease;
        }
        .es-ctrl-slider::-webkit-slider-thumb:hover {
          transform: scale(1.18);
          background: #0ea5e9;
        }
        .es-ctrl-slider::-moz-range-thumb {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #38bdf8;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
        }
        .es-segmented-toggle {
          display: flex;
          background: rgba(8, 13, 25, 0.7);
          border-radius: 10px;
          padding: 2px;
          gap: 2px;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .es-seg-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 4px 6px;
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }
        .es-seg-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.06);
        }
        .es-seg-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.45);
        }
        .es-header-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .es-header-pill-btn {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          border-radius: 9999px;
          padding: 3px 9px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .es-header-pill-btn:hover {
          border-color: #38bdf8;
          color: #38bdf8;
          background: rgba(14, 165, 233, 0.15);
          transform: translateY(-1px);
        }
        .es-header-edit-btn {
          background: rgba(2, 132, 199, 0.18) !important;
          border-color: rgba(56, 189, 248, 0.45) !important;
          color: #38bdf8 !important;
          gap: 5px;
          padding: 3px 10px;
          font-weight: 700;
        }
        .es-header-edit-btn:hover {
          background: rgba(2, 132, 199, 0.35) !important;
          border-color: #38bdf8 !important;
          color: #ffffff !important;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }

        /* LIGHT THEME STYLING OVERRIDES */
        .energy-station-container.theme-light {
          background: radial-gradient(circle at 50% 12%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%) !important;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08) !important;
          color: #0f172a !important;
        }
        .theme-light .es-header-title span:first-child {
          color: #0f172a !important;
        }
        .theme-light .es-header-badge {
          background: rgba(245, 158, 11, 0.15);
          color: #b45309;
          border-color: rgba(245, 158, 11, 0.35);
        }
        .theme-light .es-header-pill-btn {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(203, 213, 225, 0.9);
          color: #334155;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }
        .theme-light .es-header-pill-btn:hover {
          background: #ffffff;
          border-color: #0284c7;
          color: #0284c7;
        }
        .theme-light .es-header-edit-btn {
          background: rgba(2, 132, 199, 0.12) !important;
          border-color: rgba(2, 132, 199, 0.35) !important;
          color: #0284c7 !important;
        }
        .theme-light .es-header-edit-btn:hover {
          background: rgba(2, 132, 199, 0.22) !important;
          border-color: #0284c7 !important;
          color: #0369a1 !important;
        }
        .theme-light .flow-track {
          stroke: rgba(203, 213, 225, 0.85) !important;
        }
        .theme-light .es-schematic-node {
          background: rgba(255, 255, 255, 0.92) !important;
          box-shadow: 0 6px 20px -3px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04) !important;
        }
        .theme-light .es-node-title {
          color: #475569 !important;
        }
        .theme-light .es-inverter-card {
          background: rgba(255, 255, 255, 0.94) !important;
          border-color: rgba(249, 115, 22, 0.75) !important;
          box-shadow: 0 10px 25px -4px rgba(249, 115, 22, 0.18), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }
        .theme-light .es-inverter-title {
          color: #475569 !important;
        }
        .theme-light .es-inverter-side-telemetry {
          color: #c2410c !important;
        }
        .theme-light .es-inverter-self-consumption {
          background: rgba(249, 115, 22, 0.1) !important;
          border-color: rgba(249, 115, 22, 0.35) !important;
          color: #c2410c !important;
        }
        .theme-light .es-sun-header {
          background: rgba(255, 255, 255, 0.9) !important;
          border-color: rgba(245, 158, 11, 0.4) !important;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.1) !important;
        }
        .theme-light .es-pv-panel {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(245, 158, 11, 0.45) !important;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.08) !important;
        }
        .theme-light .es-pv-label {
          color: #475569 !important;
        }
        .theme-light .es-master-battery-hub {
          background: linear-gradient(90deg, rgba(209, 250, 229, 0.6) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(209, 250, 229, 0.6) 100%) !important;
          border-color: rgba(16, 185, 129, 0.5) !important;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12) !important;
        }
        .theme-light #masterBatteryFlowHint span:first-child {
          color: #0f172a !important;
        }
        .theme-light .es-battery-pack-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(16, 185, 129, 0.45) !important;
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.1) !important;
        }
        .theme-light .es-bat-name {
          color: #475569 !important;
        }
        .theme-light .es-bat-volt {
          color: #64748b !important;
        }
        .theme-light .es-bat-branch-badge {
          background: rgba(255, 255, 255, 0.98) !important;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12) !important;
        }
        .theme-light .es-bat-branch-badge.charge {
          border-color: #059669 !important;
          color: #047857 !important;
        }
        .theme-light .es-bat-branch-badge.discharge {
          border-color: #dc2626 !important;
          color: #b91c1c !important;
        }
        .theme-light .es-turbine-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(6, 182, 212, 0.45) !important;
          box-shadow: 0 6px 16px rgba(6, 182, 212, 0.1) !important;
        }
        .theme-light .es-wind-summary-bar {
          background: rgba(241, 245, 249, 0.9) !important;
          border-color: rgba(6, 182, 212, 0.3) !important;
          color: #475569 !important;
        }
        .theme-light .es-subload-card {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(6, 182, 212, 0.35) !important;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.08) !important;
        }
        .theme-light .es-subload-card span:nth-child(2) {
          color: #475569 !important;
        }
        .theme-light .es-aux-box {
          background: rgba(255, 255, 255, 0.92) !important;
          border-color: rgba(192, 132, 252, 0.6) !important;
          box-shadow: 0 6px 18px rgba(147, 51, 234, 0.12) !important;
        }
        .theme-light #auxTitle {
          color: #475569 !important;
        }
        .theme-light .es-quick-settings-card {
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(14, 165, 233, 0.45) !important;
          box-shadow: 0 6px 18px rgba(14, 165, 233, 0.12) !important;
        }
        .theme-light .es-qs-header {
          border-bottom-color: rgba(0, 0, 0, 0.08) !important;
        }
        .theme-light .es-qs-title {
          color: #334155 !important;
        }
        .theme-light .es-qs-mini-btn {
          background: rgba(0, 0, 0, 0.05) !important;
          border-color: rgba(0, 0, 0, 0.14) !important;
          color: #475569 !important;
        }
        .theme-light .es-qs-mini-btn:hover {
          background: rgba(14, 165, 233, 0.18) !important;
          border-color: #0ea5e9 !important;
          color: #0284c7 !important;
        }
        .theme-light .es-ctrl-tile {
          background: #f8fafc !important;
          border-color: rgba(0, 0, 0, 0.06) !important;
        }
        .theme-light .es-ctrl-tile:hover {
          border-color: rgba(14, 165, 233, 0.35) !important;
          background: #ffffff !important;
        }
        .theme-light .es-ctrl-label {
          color: #64748b !important;
        }
        .theme-light .es-ctrl-slider {
          background: rgba(0, 0, 0, 0.1) !important;
        }
        .theme-light .es-segmented-toggle {
          background: rgba(241, 245, 249, 0.9) !important;
          border-color: rgba(203, 213, 225, 0.8) !important;
        }
        .theme-light .es-seg-btn {
          color: #64748b !important;
        }
        .theme-light .es-seg-btn:hover {
          color: #0f172a !important;
          background: rgba(226, 232, 240, 0.6) !important;
        }
        .theme-light .es-seg-btn.active {
          background: #0284c7 !important;
          color: #ffffff !important;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35) !important;
        }

        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container ${this._themeMode === "light" ? "theme-light" : ""}">
        
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
            <span>${t.title || "Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW v1.5.3</span>
          </div>
          <div class="es-header-controls">
            <button class="es-header-pill-btn es-header-edit-btn" id="headerEditCard" title="${this._t("edit_card")}">
              <span>⚙️</span>
              <span>${this._t("edit_card")}</span>
            </button>
            <div class="es-zoom-control" style="display: flex; align-items: center; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 1px 4px; gap: 2px;">
              <button class="es-header-pill-btn" id="headerZoomOut" title="Зменшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">−</button>
              <span class="es-mono" id="headerZoomVal" style="font-size: 11px; min-width: 36px; text-align: center; color: #38bdf8; font-weight: 700; cursor: pointer; user-select: none;" title="Скинути до 100%">${Math.round(this._scale * 100)}%</span>
              <button class="es-header-pill-btn" id="headerZoomIn" title="Збільшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">+</button>
            </div>
            <button class="es-header-pill-btn" id="headerThemeToggle" title="${this._t("theme_label")}">
              ${this._themeMode === "light" ? "☀️" : "🌙"}
            </button>
            <button class="es-header-pill-btn es-mono" id="headerLangToggle" title="${this._t("lang_label")}">
              ${this._language === "uk" ? "UA" : "EN"}
            </button>
            <div class="es-status-dot" id="liveStatusDot"></div>
            <span style="font-size: 11px; color: #94a3b8;" id="liveStatusText">HA Live</span>
          </div>
        </div>

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${ge.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((c = t.solar) == null ? void 0 : c.target_daily_yield) || 55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
            </div>
            <div class="es-mono" id="solarSavingsDaily" style="font-size: 11px; font-weight: 700; color: #34d399; margin-top: 4px; display: none;"></div>

            <!-- Energy Balance Metrics (DuckSolar Model) -->
            <div class="es-energy-balance-row" id="energyBalanceRow" style="display: flex; gap: 6px; justify-content: center; align-items: center; margin-top: 5px; flex-wrap: wrap;">
              <div class="es-mono" id="autarkyBadge" title="Автономність: частка споживання будинку, забезпечена сонцем та АКБ" style="font-size: 10px; font-weight: 700; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); color: #34d399; padding: 1.5px 7px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 3px;">
                <span>🛡️ ${this._t("autarky_title")}:</span>
                <span id="autarkyVal">--%</span>
              </div>
              <div class="es-mono" id="selfConsBadge" title="Власне споживання: частка генерації СЕС, використана локально" style="font-size: 10px; font-weight: 700; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); color: #fbbf24; padding: 1.5px 7px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 3px;">
                <span>☀️ ${this._t("self_consumption_title")}:</span>
                <span id="selfConsVal">--%</span>
              </div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${ge.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: var(--es-power-font-size, 20px); font-weight: 900; color: #fbbf24; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span id="totalPvPowerVal">12,000 ${this._language === "en" ? "kW" : "кВт"}</span>
              <span id="totalPvPercentBadge" class="es-pv-percent-badge" title="Поточна віддача від встановленої потужності СЕС">0%</span>
            </div>
            <div id="totalPvSubline" class="es-mono" style="font-size: 11px; color: #94a3b8; margin-top: 1px; display: flex; align-items: center; justify-content: center; gap: 3px;" title="Поточний відсоток та встановлена пікова потужність СЕС">
              <span id="totalPvCapDetail" style="color: #fbbf24; font-weight: 700;">0.0%</span>
              <span id="totalPvCapTotal" style="color: #64748b; font-size: 10px;">(з 12.0 кВтп)</span>
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID, NON-ESSENTIAL & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; display: flex; flex-direction: column; gap: 3px; align-items: flex-end; margin-bottom: 2px;">
              <div>${this._t("grid_import")} <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div id="gridCostDailyRow" style="font-size: 11px; display: none; margin-top: -1px; text-align: right;">
                <span id="gridCostDailyVal" style="color: #38bdf8; font-weight: 700;">~0.00 грн</span>
                <span id="gridCostSplitVal" style="color: #64748b; font-size: 10px; margin-left: 2px;"></span>
              </div>
              <div>${this._t("grid_export")} <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
              <div id="gridExportIncomeRow" style="font-size: 11px; display: none; margin-top: -1px; text-align: right;">
                <span id="gridExportIncomeVal" style="color: #34d399; font-weight: 700;">+0.00 грн</span>
              </div>
              <div id="gridNightSavingsRow" style="font-size: 11px; display: none; margin-top: -1px; text-align: right;" title="Економія від зарядки АКБ або споживання за дешевим нічним тарифом замість денного">
                <span id="gridNightSavingsVal" style="color: #a5b4fc; font-weight: 700;">~0.00 грн</span>
              </div>
              <div id="netBenefitDailyRow" style="font-size: 11px; display: none; margin-top: 2px; text-align: right;">
                <span id="netBenefitDailyBadge" class="es-mono" style="font-size: 10px; font-weight: 800; border-radius: 9999px; padding: 1.5px 7px; display: inline-flex; align-items: center; gap: 3px;"></span>
              </div>
            </div>

            <!-- Active Tariff Badge -->
            <div id="gridTariffBadgeContainer" style="display: flex; justify-content: flex-end; margin-bottom: 3px;">
              <div class="es-mono" id="gridTariffBadge" style="font-size: 10px; font-weight: 700; border-radius: 9999px; padding: 2px 8px; display: none; align-items: center; gap: 4px;"></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ge.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(d = t.grid) != null && d.show_non_essential && ((_ = t.grid) != null && _.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ge.house_outline || ge.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(h = t.grid) != null && h.show_car && ((x = t.grid) != null && x.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ge.car}</div>
              <div class="es-node-title" id="carTitle">${((u = t.grid) == null ? void 0 : u.car_title) || this._t("car")}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
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
                  <div class="es-inverter-icon-box">${ge.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((y = t.inverter) == null ? void 0 : y.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((v = t.aux) == null ? void 0 : v.type) === "none" || ((E = t.aux) == null ? void 0 : E.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${ge[(p = t.aux) == null ? void 0 : p.type] || ge.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((f = t.aux) == null ? void 0 : f.type) === "microinverter" && (!((g = t.aux) != null && g.title) || ((w = t.aux) == null ? void 0 : w.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((k = t.aux) == null ? void 0 : k.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((I = t.aux) == null ? void 0 : I.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((P = t.wind) == null ? void 0 : P.show) === !1 && ((m = t.aux) == null ? void 0 : m.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ge.house}</div>
              <div class="es-node-title">${this._t("house_title")}</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
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
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase;">${this._t("bat_charge")}</div>
              <div id="batChargeDaily" style="color: #34d399; font-weight: 700; font-size: 13px;">4,30 kWh</div>
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-top: 2px;">${this._t("bat_discharge")}</div>
              <div id="batDischargeDaily" style="color: #fbbf24; font-weight: 700; font-size: 13px;">6,10 kWh</div>
            </div>

            <!-- Center SoC & Power (Icon and 'ГОЛОВНА БАТАРЕЯ' removed as requested) -->
            <div class="es-bat-hub-soc-col" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 15px; font-weight: 700; color: #34d399; margin: 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <span id="batMasterPowerVal" style="font-size: var(--es-power-font-size, 20px); font-weight: 900; color: #f8fafc;">3,000 ${this._language === "en" ? "kW" : "кВт"}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">${this._t("bat_dir_charge")}</span>
              </div>
            </div>

            <!-- Right Telemetry -->
            <div class="es-bat-hub-right-col es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 3px;">
              <div style="display: flex; align-items: center; justify-content: flex-start; gap: 8px;">
                <span id="batVoltVal" style="color: #6ee7b7; font-weight: 700;">53,24 V</span>
                <span id="batMasterTempBadge" style="color: #fdba74; font-size: 11px; font-weight: 600; cursor: pointer;" title="Температура АКБ">🌡️ <span id="batMasterTempVal">25,0</span>°C</span>
              </div>
              <div id="batCurrentVal" style="color: #38bdf8; font-weight: 700;">-56,30 A</div>
              <div id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;" title="Залишок ємності АКБ / Номінальна ємність">~10,40 kWh (13,00 kWh)</div>
            </div>
          </div>

          <!-- Battery Spacer (Conduits drawn on energyFlowCanvas) -->
          <div class="es-bus-container" id="batteryBusContainer" style="height: 44px; width: 100%;"></div>

          <!-- Bottom Grid Row: Spacer (left), Batteries (center), Quick Controls Dock (right) -->
          <div class="es-bottom-row">
            <div class="es-bottom-spacer"></div>
            <div class="es-battery-rack" id="batteryRackContainer"></div>
            <div class="es-bottom-controls-dock" id="bottomControlsDock"></div>
          </div>

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
    `, this._cacheDomNodes(), this._renderDynamicPvPanels(), this._renderDynamicWindTurbines(), this._renderDynamicSubloads(), this._renderDynamicBatteryRack(), this._bindInteractions(), this._setupResizeObserver(), this._rAF(() => this._updateFlowPaths());
  }
  _cacheDomNodes() {
    const t = this.shadowRoot;
    this._nodes = {
      dailySolarYield: t.getElementById("dailySolarYield"),
      targetSolarYield: t.getElementById("targetSolarYield"),
      solarProgressBar: t.getElementById("solarProgressBar"),
      solarSavingsDaily: t.getElementById("solarSavingsDaily"),
      autarkyVal: t.getElementById("autarkyVal"),
      selfConsVal: t.getElementById("selfConsVal"),
      energyBalanceRow: t.getElementById("energyBalanceRow"),
      totalPvPowerBadge: t.getElementById("totalPvPowerBadge"),
      totalPvPowerVal: t.getElementById("totalPvPowerVal"),
      totalPvPercentBadge: t.getElementById("totalPvPercentBadge"),
      totalPvSubline: t.getElementById("totalPvSubline"),
      totalPvCapDetail: t.getElementById("totalPvCapDetail"),
      totalPvCapTotal: t.getElementById("totalPvCapTotal"),
      solarFlowCollector: t.getElementById("solarFlowCollector"),
      gridImportDaily: t.getElementById("gridImportDaily"),
      gridCostDailyRow: t.getElementById("gridCostDailyRow"),
      gridCostDailyVal: t.getElementById("gridCostDailyVal"),
      gridCostSplitVal: t.getElementById("gridCostSplitVal"),
      gridTariffBadge: t.getElementById("gridTariffBadge"),
      gridExportDaily: t.getElementById("gridExportDaily"),
      gridExportIncomeRow: t.getElementById("gridExportIncomeRow"),
      gridExportIncomeVal: t.getElementById("gridExportIncomeVal"),
      gridNightSavingsRow: t.getElementById("gridNightSavingsRow"),
      gridNightSavingsVal: t.getElementById("gridNightSavingsVal"),
      netBenefitDailyRow: t.getElementById("netBenefitDailyRow"),
      netBenefitDailyBadge: t.getElementById("netBenefitDailyBadge"),
      gridPowerVal: t.getElementById("gridPowerVal"),
      gridDirectionLabel: t.getElementById("gridDirectionLabel"),
      carPowerVal: t.getElementById("carPowerVal"),
      carNode: t.getElementById("carNode"),
      nonEssentialNode: t.getElementById("nonEssentialNode"),
      nonEssentialPowerVal: t.getElementById("nonEssentialPowerVal"),
      inverterAcTemp: t.getElementById("inverterAcTemp"),
      inverterDcTemp: t.getElementById("inverterDcTemp"),
      inverterModelTag: t.getElementById("inverterModelTag"),
      inverterPowerVal: t.getElementById("inverterPowerVal"),
      inverterStatusBadge: t.getElementById("inverterStatusBadge"),
      inverterSelfConsumptionBox: t.getElementById("inverterSelfConsumptionBox"),
      inverterSelfConsumptionVal: t.getElementById("inverterSelfConsumptionVal"),
      inverterVolt: t.getElementById("inverterVolt"),
      inverterCurrent: t.getElementById("inverterCurrent"),
      inverterFreq: t.getElementById("inverterFreq"),
      auxNode: t.getElementById("auxNode"),
      auxTitle: t.getElementById("auxTitle"),
      auxPowerVal: t.getElementById("auxPowerVal"),
      auxSubtitle: t.getElementById("auxSubtitle"),
      auxIconBox: t.getElementById("auxIconBox"),
      windStationContainer: t.getElementById("windStationContainer"),
      dailyHouseKwh: t.getElementById("dailyHouseKwh"),
      essentialPowerVal: t.getElementById("essentialPowerVal"),
      subloadsBusContainer: t.getElementById("subloadsBusContainer"),
      subloadsBusSvg: t.getElementById("subloadsBusSvg"),
      subloadsFlowCollector: t.getElementById("subloadsFlowCollector"),
      subloadsBusBase: t.getElementById("subloadsBusBase"),
      subloadsBusStemBase: t.getElementById("subloadsBusStemBase"),
      subloadsBusStemFlow: t.getElementById("subloadsBusStemFlow"),
      subloadsBusFeeders: t.getElementById("subloadsBusFeeders"),
      batChargeDaily: t.getElementById("batChargeDaily"),
      batDischargeDaily: t.getElementById("batDischargeDaily"),
      masterBatterySoc: t.getElementById("masterBatterySoc"),
      masterBatteryFlowHint: t.getElementById("masterBatteryFlowHint"),
      batVoltVal: t.getElementById("batVoltVal"),
      batCurrentVal: t.getElementById("batCurrentVal"),
      batMasterTempVal: t.getElementById("batMasterTempVal"),
      batMasterTempBadge: t.getElementById("batMasterTempBadge"),
      batReserveSoc: t.getElementById("batReserveSoc"),
      batReserveProgressBar: t.getElementById("batReserveProgressBar"),
      batCapacityVal: t.getElementById("batCapacityVal"),
      batteryFlowCollector: t.getElementById("batteryFlowCollector"),
      pvPanelsContainer: t.getElementById("pvPanelsContainer"),
      subloadsContainer: t.getElementById("subloadsContainer"),
      batteryRackContainer: t.getElementById("batteryRackContainer"),
      bottomControlsDock: t.getElementById("bottomControlsDock")
    };
  }
  _renderDynamicWindTurbines() {
    var l, c, d, _, h, x, u, y;
    const t = this._config || pe, i = ((l = this._nodes) == null ? void 0 : l.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !(((c = t.wind) == null ? void 0 : c.show) !== !1 || ((d = t.aux) == null ? void 0 : d.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const r = ((_ = t.wind) == null ? void 0 : _.turbine_count) || ((x = (h = t.wind) == null ? void 0 : h.turbines) == null ? void 0 : x.length) || 2, a = ((u = t.wind) == null ? void 0 : u.turbines) || [], o = document.createElement("div");
    o.className = "es-wind-summary-bar es-mono", o.id = "windStationSummaryBar", o.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(o);
    const s = document.createElement("div");
    s.className = "es-wind-pods-row", i.appendChild(s);
    for (let v = 0; v < r; v++) {
      const E = a[v] || {
        name: `Вітряк ${v + 1}`,
        power_entity: `sensor.wind_turbine_${v + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((y = t.wind) == null ? void 0 : y.animation_threshold) || 50
      }, p = !!(E.daily_energy_entity || E.monthly_energy_entity), f = document.createElement("div");
      f.className = "es-turbine-card glow-wind clickable-node", f.id = `turbineCard_${v + 1}`, f.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${v + 1}">
              ${ge.wind_turbine}
            </div>
            <span>${E.name || `Вітряк ${v + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${v + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${v + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${v + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${v + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${v + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${p ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${v + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${v + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, f.addEventListener("click", () => {
        this._fireMoreInfo(E.power_entity);
      }), s.appendChild(f);
    }
  }
  _renderDynamicPvPanels() {
    var o, s, l, c, d, _;
    const t = this._config || pe, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((o = t.solar) == null ? void 0 : o.pv_count) || ((l = (s = t.solar) == null ? void 0 : s.strings) == null ? void 0 : l.length) || 3, r = this._language === "en" ? "kWp" : "кВтп", a = ((c = t.solar) == null ? void 0 : c.show_metrics) !== !1;
    for (let h = 1; h <= n; h++) {
      const x = h < 10 ? `0${h}` : `${h}`, u = ((_ = (d = t.solar) == null ? void 0 : d.strings) == null ? void 0 : _[h - 1]) || {}, y = u.name || `PV ${x}`, v = u.capacity_kw !== void 0 ? parseFloat(u.capacity_kw) : 4, E = u.voltage_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_voltage` : ""), p = u.current_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_current` : ""), f = document.createElement("div");
      f.className = "es-pv-panel glow-solar clickable-node", f.dataset.pvIndex = h, f.id = `pvPanel_${h}`, f.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${ge.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${y}</span>
        <span class="es-pv-val es-mono" id="pvVal_${h}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${h}" style="${a ? "display: flex;" : "display: none;"}">
          <span class="volt" id="pvVolt_${h}" title="${this._language === "en" ? "PV Voltage" : "Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${h}" title="${this._language === "en" ? "PV Current" : "Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${h}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${h}">${v.toFixed(1).replace(".", ",")}</span> <span style="font-size: 9px; color: #64748b;">${r}</span> <span id="pvPercent_${h}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `, f.addEventListener("click", () => {
        var I;
        const k = u.power_entity || E || p || ((I = t.solar) == null ? void 0 : I.total_power_entity);
        this._fireMoreInfo(k);
      });
      const g = f.querySelector(`#pvVolt_${h}`);
      g && g.addEventListener("click", (k) => {
        k.stopPropagation(), E ? this._fireMoreInfo(E) : u.power_entity && this._fireMoreInfo(u.power_entity);
      });
      const w = f.querySelector(`#pvCurr_${h}`);
      w && w.addEventListener("click", (k) => {
        k.stopPropagation(), p ? this._fireMoreInfo(p) : u.power_entity && this._fireMoreInfo(u.power_entity);
      }), i.appendChild(f);
    }
  }
  _renderDynamicSubloads() {
    var r;
    const t = this._config || pe, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((r = t.load) == null ? void 0 : r.subloads) || []).forEach((a, o) => {
      const s = document.createElement("div");
      s.className = "es-subload-card clickable-node", s.id = `subloadCard_${o}`, s.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${ge[a.icon] || ge.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${a.name}</span>
        <span class="es-mono" id="subloadVal_${o}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, s.addEventListener("click", () => {
        this._fireMoreInfo(a.entity);
      }), i.appendChild(s);
    });
  }
  _renderDynamicBatteryRack() {
    var _, h, x, u, y, v, E;
    const t = this._config || pe, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((_ = t.battery) == null ? void 0 : _.parallel_batteries) || ((x = (h = t.battery) == null ? void 0 : h.modules) == null ? void 0 : x.length) || 2, r = [82, 76, 91, 68, 85, 90, 72, 80], a = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], o = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], s = [12, 8, 15, 9, 14, 11, 18, 10], l = this._t("bat_prefix"), c = this._language === "en" ? "kW" : "кВт", d = this._language === "en" ? "kWh" : "кВт·год";
    for (let p = 1; p <= n; p++) {
      const f = ((y = (u = t.battery) == null ? void 0 : u.modules) == null ? void 0 : y[p - 1]) || ((E = (v = t.battery) == null ? void 0 : v.module_entities) == null ? void 0 : E[p - 1]) || {}, g = f.name || `${l} ${p}`, w = r[(p - 1) % r.length], k = a[(p - 1) % a.length], I = o[(p - 1) % o.length], P = s[(p - 1) % s.length], m = document.createElement("div");
      m.className = "es-battery-pack-card glow-battery clickable-node", m.id = `batPackCard_${p}`, m.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${ge.battery_vertical}</div>
        <span class="es-bat-name">${g}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${p}">${w}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${p}">${k.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${p}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${c}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${p}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${p}">${I.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${p}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${p}">${P} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${p}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${d}</div>
      `, m.addEventListener("click", (F) => {
        var te;
        if (F.target.closest(`#batPackTemp_${p}`)) {
          const Q = f.temperature_entity || f.temp || `sensor.bms_rack${p}_temperature`;
          this._fireMoreInfo(Q);
          return;
        }
        if (F.target.closest(`#batPackDelta_${p}`)) {
          const Q = f.cell_delta_entity || f.delta_entity || `sensor.bms_rack${p}_cell_delta`;
          this._fireMoreInfo(Q);
          return;
        }
        const U = f.soc_entity || f.soc || f.voltage_entity || f.volt || f.current_entity || ((te = t.battery) == null ? void 0 : te.soc_entity);
        this._fireMoreInfo(U);
      }), i.appendChild(m);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var y, v, E, p, f, g, w, k, I, P;
    const t = this._config || pe, i = ((y = this._nodes) == null ? void 0 : y.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", t.show_quick_settings === !1)) return;
    const n = this._themeMode === "light", r = this._language === "en", a = ((v = t.controls) == null ? void 0 : v.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", o = ((E = t.controls) == null ? void 0 : E.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", s = ((p = t.controls) == null ? void 0 : p.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", l = document.createElement("div");
    l.className = "es-quick-settings-card", l.id = "quickSettingsCard", l.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${ge.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n ? ge.sun_mode : ge.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${r ? "EN" : "UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${a}">
              <span class="es-ctrl-icon es-ctrl-solar">${ge.sun_mode}</span>
              <span class="es-ctrl-label">${this._t("ctrl_solar_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSolar">80 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSolar" min="0" max="150" step="1" value="80">
          </div>
        </div>

        <!-- 2. Sell Power Limit -->
        <div class="es-ctrl-tile" id="ctrlTileSell">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${o}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ge.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${r ? "W" : "Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${s}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ge.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (f = l.querySelector("#btnEditCardQs")) == null || f.addEventListener("click", (m) => {
      m.stopPropagation(), this._openCardEditor();
    }), (g = l.querySelector("#btnThemeToggle")) == null || g.addEventListener("click", (m) => {
      m.stopPropagation(), this._toggleTheme();
    }), (w = l.querySelector("#btnLangToggle")) == null || w.addEventListener("click", (m) => {
      m.stopPropagation(), this._toggleLanguage();
    }), (k = l.querySelector("#ctrlLabelWrapSolar")) == null || k.addEventListener("click", () => this._fireMoreInfo(a)), (I = l.querySelector("#ctrlLabelWrapSell")) == null || I.addEventListener("click", () => this._fireMoreInfo(o)), (P = l.querySelector("#ctrlLabelWrapGrid")) == null || P.addEventListener("click", () => this._fireMoreInfo(s));
    const c = l.querySelector("#ctrlSliderSolar"), d = l.querySelector("#ctrlValSolar");
    c && (this._updateSliderGradient(c), c.addEventListener("input", (m) => {
      d && (d.innerText = `${m.target.value} A`), this._updateSliderGradient(c);
    }), c.addEventListener("change", (m) => {
      this._setNumberValue(a, m.target.value);
    }));
    const _ = l.querySelector("#ctrlSliderSell"), h = l.querySelector("#ctrlValSell");
    _ && (this._updateSliderGradient(_), _.addEventListener("input", (m) => {
      const F = Number(m.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      h && (h.innerText = `${F} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(_);
    }), _.addEventListener("change", (m) => {
      this._setNumberValue(o, m.target.value);
    }));
    const x = l.querySelector("#ctrlSliderGrid"), u = l.querySelector("#ctrlValGrid");
    x && (this._updateSliderGradient(x), x.addEventListener("input", (m) => {
      u && (u.innerText = `${m.target.value} A`), this._updateSliderGradient(x);
    }), x.addEventListener("change", (m) => {
      this._setNumberValue(s, m.target.value);
    })), i.appendChild(l), this._updateControlSliders();
  }
  _updateSliderGradient(t) {
    if (!t) return;
    const i = parseFloat(t.min) || 0, n = parseFloat(t.max) || 100, r = parseFloat(t.value) || 0, a = Math.max(0, Math.min(100, (r - i) / (n - i) * 100));
    t.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${a}%, rgba(255, 255, 255, 0.12) ${a}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(t, i) {
    if (!this._hass || !t) return;
    const r = t.split(".")[0] || "number", a = Number(i);
    this._hass.callService(r, "set_value", {
      entity_id: t,
      value: a
    });
  }
  _updateControlSliders() {
    var h, x, u, y, v, E, p, f, g;
    const t = this._config || pe;
    if (t.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const n = ((h = t.controls) == null ? void 0 : h.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", r = ((x = t.controls) == null ? void 0 : x.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", a = ((u = t.controls) == null ? void 0 : u.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", o = i.getElementById("ctrlSliderSolar"), s = i.getElementById("ctrlValSolar"), l = i.getElementById("ctrlSliderSell"), c = i.getElementById("ctrlValSell"), d = i.getElementById("ctrlSliderGrid"), _ = i.getElementById("ctrlValGrid");
    if (o && (!o.matches || !o.matches(":active"))) {
      const w = (v = (y = this._hass) == null ? void 0 : y.states) == null ? void 0 : v[n], k = w && !isNaN(parseFloat(w.state)) ? parseFloat(w.state) : o.value ? parseFloat(o.value) : 80;
      o.value = k, s && (s.innerText = `${Math.round(k)} A`), this._updateSliderGradient(o);
    }
    if (l && (!l.matches || !l.matches(":active"))) {
      const w = (p = (E = this._hass) == null ? void 0 : E.states) == null ? void 0 : p[r], k = w && !isNaN(parseFloat(w.state)) ? parseFloat(w.state) : l.value ? parseFloat(l.value) : 5e3;
      l.value = k;
      const I = Math.round(k).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), P = this._language === "uk" ? "Вт" : "W";
      c && (c.innerText = `${I} ${P}`), this._updateSliderGradient(l);
    }
    if (d && (!d.matches || !d.matches(":active"))) {
      const w = (g = (f = this._hass) == null ? void 0 : f.states) == null ? void 0 : g[a], k = w && !isNaN(parseFloat(w.state)) ? parseFloat(w.state) : d.value ? parseFloat(d.value) : 70;
      d.value = k, _ && (_.innerText = `${Math.round(k)} A`), this._updateSliderGradient(d);
    }
  }
  _bindInteractions() {
    var n, r, a, o, s, l, c, d, _, h, x, u, y, v, E, p, f, g, w, k, I, P;
    const t = this.shadowRoot, i = this._config || pe;
    (n = t.getElementById("headerEditCard")) == null || n.addEventListener("click", (m) => {
      m.stopPropagation(), this._openCardEditor();
    }), (r = t.getElementById("headerThemeToggle")) == null || r.addEventListener("click", (m) => {
      m.stopPropagation(), this._toggleTheme();
    }), (a = t.getElementById("headerLangToggle")) == null || a.addEventListener("click", (m) => {
      m.stopPropagation(), this._toggleLanguage();
    }), (o = t.getElementById("headerZoomIn")) == null || o.addEventListener("click", (m) => {
      m.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (s = t.getElementById("headerZoomOut")) == null || s.addEventListener("click", (m) => {
      m.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (l = t.getElementById("headerZoomVal")) == null || l.addEventListener("click", (m) => {
      m.stopPropagation(), this._changeScale(1);
    }), (c = t.getElementById("solarHeaderNode")) == null || c.addEventListener("click", () => {
      var m, F;
      this._fireMoreInfo(((m = i.solar) == null ? void 0 : m.daily_yield_entity) || ((F = i.solar) == null ? void 0 : F.total_power_entity));
    }), (d = t.getElementById("totalPvPowerBadge")) == null || d.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.solar) == null ? void 0 : m.total_power_entity);
    }), (_ = t.getElementById("gridNode")) == null || _.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.grid) == null ? void 0 : m.power_entity);
    }), (h = t.getElementById("nonEssentialNode")) == null || h.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.grid) == null ? void 0 : m.non_essential_power_entity);
    }), (x = t.getElementById("carNode")) == null || x.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.grid) == null ? void 0 : m.car_power_entity);
    }), (u = t.getElementById("inverterNode")) == null || u.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.inverter) == null ? void 0 : m.power_entity);
    }), (y = t.getElementById("inverterSelfConsumptionBox")) == null || y.addEventListener("click", (m) => {
      var F;
      m.stopPropagation(), (F = i.inverter) != null && F.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (v = t.getElementById("auxNode")) == null || v.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.aux) == null ? void 0 : m.power_entity);
    }), (E = t.getElementById("essentialNode")) == null || E.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.load) == null ? void 0 : m.essential_power_entity);
    }), (p = t.getElementById("masterBatteryHub")) == null || p.addEventListener("click", () => {
      var m;
      this._fireMoreInfo((m = i.battery) == null ? void 0 : m.soc_entity);
    }), (f = t.getElementById("batChargeDaily")) == null || f.addEventListener("click", (m) => {
      var F;
      m.stopPropagation(), this._fireMoreInfo(((F = i.battery) == null ? void 0 : F.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (g = t.getElementById("batDischargeDaily")) == null || g.addEventListener("click", (m) => {
      var F;
      m.stopPropagation(), this._fireMoreInfo(((F = i.battery) == null ? void 0 : F.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let m = 1; m <= 8; m++) {
      const F = t.getElementById(`batBranchBadge_${m}`), U = ((k = (w = i.battery) == null ? void 0 : w.modules) == null ? void 0 : k[m - 1]) || ((P = (I = i.battery) == null ? void 0 : I.module_entities) == null ? void 0 : P[m - 1]) || {};
      F == null || F.addEventListener("click", () => {
        var Q;
        const te = U.power_entity || U.current_entity || U.soc_entity || ((Q = i.battery) == null ? void 0 : Q.soc_entity);
        this._fireMoreInfo(te);
      });
    }
  }
  _fetchNightEndFromHa(t, i) {
    var l, c;
    if (this._fetchingHistoryForDate === t) return;
    const r = (l = (this._config || pe).grid) == null ? void 0 : l.import_daily_entity;
    if (!((c = this._hass) != null && c.callWS) || !r) return;
    this._fetchingHistoryForDate = t;
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0), s = new Date(a.getFullYear(), a.getMonth(), a.getDate(), i, 5, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: o.toISOString(),
      end_time: s.toISOString(),
      entity_ids: [r],
      no_attributes: !0
    }).then((d) => {
      const _ = d == null ? void 0 : d[r];
      if (_ && _.length > 0) {
        let h = null;
        for (let x = _.length - 1; x >= 0; x--) {
          const u = parseFloat(_[x].state);
          if (!isNaN(u) && u >= 0) {
            h = u;
            break;
          }
        }
        if (h !== null) {
          const x = `es_tariff_split_${t}`;
          let u = {};
          if (typeof localStorage < "u")
            try {
              const y = localStorage.getItem(x);
              y && (u = JSON.parse(y));
            } catch {
            }
          if (u.night_end = h, u.night_end_hour = i, u.night_end_verified = !0, typeof localStorage < "u")
            try {
              localStorage.setItem(x, JSON.stringify(u));
            } catch {
            }
          this._hass && this._updateValues();
        }
      }
    }).catch((d) => {
      console.warn("Could not fetch night tariff history from HA:", d);
    });
  }
  _calculateTariffs(t, i, n, r = 0) {
    var g, w, k, I, P, m, F, U, te, Q, ne, S, B, T, C, R, Z, ee, he, ue, Ie;
    const o = (this._config || pe).tariffs || {};
    if (o.enabled === !1) {
      (g = this._nodes) != null && g.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (w = this._nodes) != null && w.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (k = this._nodes) != null && k.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (I = this._nodes) != null && I.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none"), (P = this._nodes) != null && P.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (m = this._nodes) != null && m.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    const s = o.currency || "грн", l = typeof o.day_rate == "number" ? o.day_rate : 4.32, c = typeof o.night_rate == "number" ? o.night_rate : 2.16, d = typeof o.export_rate == "number" ? o.export_rate : 5.3, _ = typeof o.night_start_hour == "number" ? o.night_start_hour : 23, h = typeof o.night_end_hour == "number" ? o.night_end_hour : 7, x = /* @__PURE__ */ new Date(), u = x.getHours() + x.getMinutes() / 60, y = _ > h ? u >= _ || u < h : u >= _ && u < h;
    if ((F = this._nodes) != null && F.gridTariffBadge && o.show_active_badge !== !1) {
      const j = y ? c : l, Y = y ? this._t("tariff_night") : this._t("tariff_day"), V = y ? "🌙" : "☀️", re = y ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", X = y ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", xe = y ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = re, this._nodes.gridTariffBadge.style.border = `1px solid ${X}`, this._nodes.gridTariffBadge.style.color = xe, this._nodes.gridTariffBadge.innerText = `${V} ${Y}: ${j.toFixed(2)} ${s}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (U = this._nodes) != null && U.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((te = this._nodes) != null && te.solarSavingsDaily && o.show_solar_savings !== !1 && n > 0) {
      const j = n * l;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${j.toFixed(2)} ${s}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (Q = this._nodes) != null && Q.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((ne = this._nodes) != null && ne.gridExportIncomeRow && o.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const j = i * d;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${j.toFixed(2)} ${s}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (S = this._nodes) != null && S.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof t != "number" || isNaN(t) || t < 0) {
      (B = this._nodes) != null && B.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (T = this._nodes) != null && T.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (C = this._nodes) != null && C.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    let v = null, E = null;
    if (o.import_night_entity || o.import_day_entity) {
      const j = o.import_night_entity ? this._getEntityState(o.import_night_entity) : null, Y = o.import_day_entity ? this._getEntityState(o.import_day_entity) : null;
      j && typeof j.val == "number" && (v = j.val), Y && typeof Y.val == "number" && (E = Y.val), v !== null && E === null ? E = Math.max(0, t - v) : E !== null && v === null && (v = Math.max(0, t - E));
    }
    if (v === null || E === null) {
      const j = `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`, Y = `es_tariff_split_${j}`;
      let V = {};
      if (typeof localStorage < "u")
        try {
          const re = localStorage.getItem(Y);
          re && (V = JSON.parse(re));
        } catch {
        }
      if (u < h) {
        if (v = t, E = 0, V.ongoing_night_val = t, V.ongoing_night_hour = u, V.night_end = t, V.night_end_hour = u, V.night_end_verified = !1, typeof localStorage < "u")
          try {
            localStorage.setItem(Y, JSON.stringify(V));
          } catch {
          }
      } else if (u >= h && u < _) {
        const re = V.night_end_verified === !0, X = typeof V.night_end_hour == "number" && V.night_end_hour >= h - 0.25;
        if ((re || X) && typeof V.night_end == "number" && V.night_end <= t)
          v = V.night_end, E = Math.max(0, t - v);
        else {
          this._fetchNightEndFromHa(j, h);
          let xe = t * Math.min(1, h / Math.max(u, 1));
          typeof r == "number" && r > 0.5 && (xe = Math.min(t, Math.max(xe, r))), v = xe, E = Math.max(0, t - v);
        }
        if (V.day_end = t, typeof localStorage < "u")
          try {
            localStorage.setItem(Y, JSON.stringify(V));
          } catch {
          }
      } else {
        const re = typeof V.night_end == "number" && V.night_end_verified ? V.night_end : t * (h / u), X = typeof V.day_end == "number" ? V.day_end : t;
        E = Math.max(0, X - re);
        const xe = Math.max(0, t - X);
        v = re + xe;
      }
    }
    const p = v * c + E * l;
    (R = this._nodes) != null && R.gridCostDailyRow && o.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${p.toFixed(2)} ${s}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${v.toFixed(1)} + ☀️ ${E.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (Z = this._nodes) != null && Z.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
    const f = v > 0 && l > c ? v * (l - c) : 0;
    if ((ee = this._nodes) != null && ee.gridNightSavingsRow && o.show_night_savings !== !1 && f > 0.05 ? (this._nodes.gridNightSavingsVal && (this._nodes.gridNightSavingsVal.innerText = `🌙 ${this._t("tariff_night_saved")}: ~${f.toFixed(2)} ${s}`), this._nodes.gridNightSavingsRow.style.display = "block") : (he = this._nodes) != null && he.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (ue = this._nodes) != null && ue.netBenefitDailyRow && o.show_net_benefit !== !1) {
      const j = typeof n == "number" && n > 0 ? n * l : 0, Y = typeof i == "number" && i > 0 ? i * d : 0, V = j + Y - p;
      this._nodes.netBenefitDailyBadge && (V >= 0 ? (this._nodes.netBenefitDailyBadge.style.background = "rgba(16, 185, 129, 0.15)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(16, 185, 129, 0.35)", this._nodes.netBenefitDailyBadge.style.color = "#34d399", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_benefit")}: +${V.toFixed(2)} ${s}`) : (this._nodes.netBenefitDailyBadge.style.background = "rgba(56, 189, 248, 0.12)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(56, 189, 248, 0.3)", this._nodes.netBenefitDailyBadge.style.color = "#38bdf8", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_cost")}: ${V.toFixed(2)} ${s}`)), this._nodes.netBenefitDailyRow.style.display = "block";
    } else (Ie = this._nodes) != null && Ie.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
  }
  _updateValues() {
    var Qe, yt, bt, mt, vt, gi, hi, ui, _i, yi, un, _n, yn, bn, mn, vn, xn, wn, En, kn, Sn, Cn, $n, In, Bn, Tn, Nn, Ln, An, Fn, Pn, Rn, Mn, On, Dn, Vn, zn, Wn, qn, Gn, jn, Hn, Un, Yn, Kn, Jn, Qn, Xn, Zn, er, tr, ir, nr, rr, ar, or, sr, lr, dr, cr, pr, fr, gr, hr, ur, _r, yr, br, mr, vr, xr, wr, Er, kr, Sr, Cr, $r, Ir, Br, Tr, Nr, Lr, Ar, Fr, Pr, Rr, Mr, Or, Dr, Vr, zr, Wr, qr, Gr, jr, Hr, Ur, Yr, Kr, Jr, Qr, Xr, Zr, ea, ta, ia, na, ra, aa, oa, sa;
    if (!this._nodes.dailySolarYield) return;
    const t = this._config || pe, i = this._language === "en" ? "kW" : "кВт", n = ((Qe = t.solar) == null ? void 0 : Qe.pv_count) || ((bt = (yt = t.solar) == null ? void 0 : yt.strings) == null ? void 0 : bt.length) || 3;
    let r = 0, a = 0, o = !1;
    for (let b = 1; b <= n; b++) {
      const L = (vt = (mt = t.solar) == null ? void 0 : mt.strings) == null ? void 0 : vt[b - 1], N = (L == null ? void 0 : L.voltage_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_voltage` : ""), G = (L == null ? void 0 : L.current_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_current` : ""), $ = (L == null ? void 0 : L.power_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_power` : "");
      if (this._getEntityState($) || this._getEntityState(N) || this._getEntityState(G)) {
        o = !0;
        break;
      }
    }
    for (let b = 1; b <= n; b++) {
      const L = this.shadowRoot.getElementById(`pvVal_${b}`), N = this.shadowRoot.getElementById(`pvVolt_${b}`), G = this.shadowRoot.getElementById(`pvCurr_${b}`), $ = (hi = (gi = t.solar) == null ? void 0 : gi.strings) == null ? void 0 : hi[b - 1], me = ($ == null ? void 0 : $.voltage_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_voltage` : ""), K = ($ == null ? void 0 : $.current_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_current` : ""), be = ($ == null ? void 0 : $.power_entity) || (b <= 3 ? `sensor.deye_12k_inverter_pv${b}_power` : ""), de = this._getEntityState(me), Pe = this._getEntityState(K), ae = this._getEntityState(be);
      let ve = 0, Ne = 0, se = 0;
      ae ? se = this._formatPower(ae).kw : de && Pe ? se = de.val * Pe.val / 1e3 : de ? se = 0 : se = o ? 0 : 4, de ? ve = de.val : ve = o ? 0 : 380 + b * 4.5, Pe ? Ne = Pe.val : ae && ve > 0 ? Ne = se * 1e3 / ve : Ne = o ? 0 : 3.12 + b * 0.28, r += se, a += Ne, L && (L.innerText = `${se.toFixed(3)} ${i}`), N && (N.innerText = `${ve.toFixed(1)} V`), G && (G.innerText = `${Ne.toFixed(2)} A`);
      const le = this.shadowRoot.getElementById(`pvMetrics_${b}`);
      if (le) {
        const kt = ((ui = t.solar) == null ? void 0 : ui.show_metrics) !== !1, St = !!(de || Pe || !o || $ != null && $.voltage_entity || $ != null && $.current_entity || ve > 0 || Ne > 0);
        le.style.display = kt && St ? "flex" : "none";
      }
      const qe = ($ == null ? void 0 : $.capacity_kw) !== void 0 ? parseFloat($.capacity_kw) : ($ == null ? void 0 : $.installed_power) !== void 0 ? parseFloat($.installed_power) : o ? 0 : 4, xt = qe > 0 && se > 0 ? Math.min(100, Math.round(se / qe * 100)) : 0, Ot = this.shadowRoot.getElementById(`pvCapVal_${b}`), wt = this.shadowRoot.getElementById(`pvPercent_${b}`), Et = this.shadowRoot.getElementById(`pvCap_${b}`);
      Ot && (qe > 0 ? (Ot.innerText = qe.toFixed(1).replace(".", ","), wt && (wt.innerText = `(${xt}%)`, wt.style.color = xt >= 70 ? "#34d399" : xt >= 30 ? "#fbbf24" : "#94a3b8"), Et && (Et.style.display = "flex")) : Et && (Et.style.display = "none"));
    }
    const s = this._getEntityState((_i = t.solar) == null ? void 0 : _i.total_power_entity);
    let l = 0;
    s ? l = this._formatPower(s).kw : l = r;
    let c = ((yi = t.solar) == null ? void 0 : yi.installed_power) !== void 0 ? parseFloat(t.solar.installed_power) : 0;
    if (isNaN(c) || c <= 0) {
      let b = 0;
      for (let L = 0; L < n; L++) {
        const N = (_n = (un = t.solar) == null ? void 0 : un.strings) == null ? void 0 : _n[L], G = (N == null ? void 0 : N.capacity_kw) !== void 0 ? parseFloat(N.capacity_kw) : (N == null ? void 0 : N.installed_power) !== void 0 ? parseFloat(N.installed_power) : 0;
        !isNaN(G) && G > 0 && (b += G);
      }
      c = b > 0 ? b : o ? 0 : 12;
    }
    const d = c > 0 ? l / c * 100 : 0, _ = Math.min(100, Math.max(0, d)), h = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${l.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${l.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge.title = this._language === "en" ? `Total PV current: ${a.toFixed(2)} A` : `Сумарний струм СЕС: ${a.toFixed(2)} A`), this._nodes.totalPvPercentBadge && (c > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(_)}%`, this._nodes.totalPvPercentBadge.style.color = _ >= 70 ? "#34d399" : _ >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = _ >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (c > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${_.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = _ >= 70 ? "#34d399" : _ >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${c.toFixed(1).replace(".", ",")} ${h})`)) : a > 0 && ((yn = t.solar) == null ? void 0 : yn.show_metrics) !== !1 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${a.toFixed(2)} A`, this._nodes.totalPvCapDetail.style.color = "#34d399"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = this._language === "en" ? "(current)" : "(струм)")) : this._nodes.totalPvSubline.style.display = "none");
    const x = this._getEntityState((bn = t.solar) == null ? void 0 : bn.daily_yield_entity), u = x ? x.val : o ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = u.toFixed(1);
    const y = ((mn = t.solar) == null ? void 0 : mn.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = y.toFixed(1);
    const v = Math.min(100, Math.round(u / y * 100));
    this._nodes.solarProgressBar.style.width = `${v}%`;
    const E = this._getEntityState((vn = t.inverter) == null ? void 0 : vn.power_entity);
    this._nodes.inverterPowerVal && ((xn = t.inverter) != null && xn.power_entity && E ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(E, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const p = this._getEntityState((wn = t.inverter) == null ? void 0 : wn.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = p ? p.val.toFixed(2) : "41,20";
    const f = this._getEntityState((En = t.inverter) == null ? void 0 : En.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = f ? f.val.toFixed(2) : "38,40";
    const g = this._getEntityState((kn = t.inverter) == null ? void 0 : kn.voltage_entity);
    this._nodes.inverterVolt.innerText = g ? g.val.toFixed(2) : "231,45";
    const w = this._getEntityState((Sn = t.inverter) == null ? void 0 : Sn.current_entity);
    this._nodes.inverterCurrent.innerText = w ? w.val.toFixed(2) : "8,60";
    const k = this._getEntityState((Cn = t.inverter) == null ? void 0 : Cn.frequency_entity);
    this._nodes.inverterFreq.innerText = k ? k.val.toFixed(2) : "50,01";
    const I = (($n = t.wind) == null ? void 0 : $n.show) !== !1 || ((In = t.aux) == null ? void 0 : In.type) === "wind", P = this.shadowRoot.getElementById("windStationContainer"), m = this._nodes.auxNode;
    let F = 0;
    if (P)
      if (!I)
        P.classList.add("hidden");
      else {
        P.classList.remove("hidden");
        const b = ((Bn = t.wind) == null ? void 0 : Bn.turbine_count) || ((Nn = (Tn = t.wind) == null ? void 0 : Tn.turbines) == null ? void 0 : Nn.length) || 2, L = ((Ln = t.wind) == null ? void 0 : Ln.turbines) || [];
        let N = 0, G = 0, $ = !1, me = !1;
        for (let ae = 0; ae < b; ae++) {
          const ve = L[ae] || {
            power_entity: `sensor.wind_turbine_${ae + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((An = t.wind) == null ? void 0 : An.animation_threshold) || 50
          }, Ne = this.shadowRoot.getElementById(`turbinePower_${ae + 1}`), se = this.shadowRoot.getElementById(`turbineStatus_${ae + 1}`), le = this.shadowRoot.getElementById(`turbineIcon_${ae + 1}`), qe = this.shadowRoot.getElementById(`turbineCard_${ae + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${ae + 1}`);
          const xt = this.shadowRoot.getElementById(`turbineDailyVal_${ae + 1}`), Ot = this.shadowRoot.getElementById(`turbineMonthlyVal_${ae + 1}`), wt = this.shadowRoot.getElementById(`turbineEnergyFooter_${ae + 1}`), Et = this._hass ? 0 : ae === 0 ? 1.56 : 0.22, kt = this._getEntityState(ve.power_entity), St = this._formatPower(kt, Et);
          Ne && (Ne.innerText = St.str), F += St.kw;
          let Dt = St.kw * 1e3;
          kt && kt.unit === "W" && (Dt = kt.val);
          const Kt = ve.animation_threshold ?? ((Fn = t.wind) == null ? void 0 : Fn.animation_threshold) ?? 50, pt = le == null ? void 0 : le.querySelector(".turbine-rotor"), Jt = ve.rpm_entity || ve.speed_entity || ((Pn = t.wind) == null ? void 0 : Pn.rpm_entity) || ((Rn = t.wind) == null ? void 0 : Rn.speed_entity) || (ae === 0 ? "sensor.wind_rpm" : "");
          let ce = Jt && ((Mn = this._hass) != null && Mn.states[Jt]) ? this._getEntityState(Jt) : null;
          if (!ce && ae === 0 && ((On = this._hass) != null && On.states["sensor.wind_rpm"]) && (ce = this._getEntityState("sensor.wind_rpm")), Dt >= Kt || ce && typeof ce.val == "number" && ce.val > 0) {
            pt && pt.classList.add("spinning"), qe && (qe.classList.add("glow-wind"), qe.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const nt = ((Dn = t.wind) == null ? void 0 : Dn.max_power) || 3e3, Ii = ((Vn = t.wind) == null ? void 0 : Vn.max_rpm) || 600;
            let bi = 0;
            ce && typeof ce.val == "number" && ce.val > 0 ? bi = Math.min(1, Math.max(0, ce.val / Ii)) : bi = Math.min(1, Math.max(0, (Dt - Kt) / (nt - Kt)));
            const Re = (3.2 - bi * 2.75).toFixed(2);
            pt && pt.style.setProperty("--turbine-speed", `${Re}s`), se && (se.innerText = this._t("wind_gen"), se.style.color = "#67e8f9");
          } else
            pt && pt.classList.remove("spinning"), qe && (qe.classList.remove("glow-wind"), qe.style.borderColor = "rgba(255, 255, 255, 0.08)"), se && (se.innerText = this._t("wind_calm"), se.style.color = "#94a3b8");
          const zt = this.shadowRoot.getElementById(`turbineRpmBox_${ae + 1}`);
          if (zt)
            if (ce && ce.raw !== "unavailable" && ce.raw !== "unknown" && typeof ce.val == "number" && !isNaN(ce.val)) {
              zt.style.display = "inline";
              const Ii = ce.unit ? ce.unit : "RPM";
              zt.innerHTML = `<span id="turbineRpmVal_${ae + 1}">${Math.round(ce.val)}</span> ${Ii}`;
            } else
              zt.style.display = "none";
          const ze = this._getEntityState(ve.daily_energy_entity), tt = this._getEntityState(ve.monthly_energy_entity);
          xt && (xt.innerText = ze && typeof ze.val == "number" && !isNaN(ze.val) ? ze.val.toFixed(2) : "0.00"), Ot && (Ot.innerText = tt && typeof tt.val == "number" && !isNaN(tt.val) ? tt.val.toFixed(1) : "0.0");
          const it = !!(ve.daily_energy_entity || ve.monthly_energy_entity);
          wt && (wt.style.display = it ? "flex" : "none"), ze && typeof ze.val == "number" && !isNaN(ze.val) && (N += ze.val, $ = !0), tt && typeof tt.val == "number" && !isNaN(tt.val) && (G += tt.val, me = !0);
        }
        const K = this.shadowRoot.getElementById("windTotalDailyVal"), be = this.shadowRoot.getElementById("windTotalMonthlyVal"), de = this._getEntityState((zn = t.wind) == null ? void 0 : zn.daily_energy_entity), Pe = this._getEntityState((Wn = t.wind) == null ? void 0 : Wn.monthly_energy_entity);
        K && (de && typeof de.val == "number" && !isNaN(de.val) ? K.innerText = de.val.toFixed(2) : $ ? K.innerText = N.toFixed(2) : K.innerText = "0.00"), be && (Pe && typeof Pe.val == "number" && !isNaN(Pe.val) ? be.innerText = Pe.val.toFixed(1) : me ? be.innerText = G.toFixed(1) : be.innerText = "0.0");
      }
    let U = 0;
    if (m)
      if (((qn = t.aux) == null ? void 0 : qn.type) === "none" || ((Gn = t.aux) == null ? void 0 : Gn.type) === "wind")
        m.classList.add("hidden");
      else {
        m.classList.remove("hidden");
        const b = this._getEntityState((jn = t.aux) == null ? void 0 : jn.power_entity), L = this._hass ? 0 : 2, N = this._formatPower(b, L);
        U = N.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = N.str);
        const G = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let $ = (Hn = t.aux) == null ? void 0 : Hn.title;
        ((Un = t.aux) == null ? void 0 : Un.type) === "microinverter" && (!$ || $ === "Вітрогенератор") ? $ = "Мікроінвертор" : (Yn = t.aux) != null && Yn.type && G[t.aux.type] && (!$ || $ === "Вітрогенератор") ? $ = G[t.aux.type] : $ || ($ = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = $), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = ge[(Kn = t.aux) == null ? void 0 : Kn.type] || ge.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((Jn = t.aux) == null ? void 0 : Jn.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), m.style.borderColor = "rgba(192, 132, 252, 0.45)", m.style.background = "rgba(88, 28, 135, 0.35)", m.classList.remove("glow-wind"), m.classList.add("glow-aux");
      }
    const te = this.shadowRoot.getElementById("nonEssentialNode"), Q = !!((Qn = t.grid) != null && Qn.show_non_essential && ((Xn = t.grid) != null && Xn.non_essential_power_entity)) || ((Zn = t.grid) == null ? void 0 : Zn.show_non_essential) !== !1 && !!((er = t.grid) != null && er.non_essential_power_entity);
    let ne = 0;
    if (te)
      if (Q) {
        te.classList.remove("hidden");
        const b = this._getEntityState(t.grid.non_essential_power_entity), L = this._formatPower(b, 0);
        ne = L.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = L.str);
      } else
        te.classList.add("hidden");
    const S = this.shadowRoot.getElementById("carNode"), B = !!((tr = t.grid) != null && tr.show_car && ((ir = t.grid) != null && ir.car_power_entity)) || ((nr = t.grid) == null ? void 0 : nr.show_car) !== !1 && !!((rr = t.grid) != null && rr.car_power_entity);
    let T = 0;
    if (S)
      if (B) {
        S.classList.remove("hidden");
        const b = this._getEntityState(t.grid.car_power_entity), L = this._formatPower(b, 0);
        T = L.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = L.str);
      } else
        S.classList.add("hidden");
    let C = 0;
    (((ar = t.load) == null ? void 0 : ar.subloads) || []).forEach((b, L) => {
      const N = this.shadowRoot.getElementById(`subloadVal_${L}`), G = this._getEntityState(b.entity), $ = this._formatPower(G, 0);
      C += $.kw, N && (N.innerText = $.str);
    });
    const R = this._getEntityState((or = t.battery) == null ? void 0 : or.soc_entity), Z = R ? R.val : 80;
    this._nodes.masterBatterySoc.innerText = `${Z.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const ee = this._getEntityState((sr = t.battery) == null ? void 0 : sr.power_entity), he = this._getEntityState((lr = t.battery) == null ? void 0 : lr.current_entity), ue = ee ? ee.unit === "W" ? ee.val / 1e3 : ee.val : 0, Ie = ((dr = t.battery) == null ? void 0 : dr.power_sign) || ((cr = t.battery) != null && cr.invert_power ? "standard" : "deye");
    let j = !1, Y = !1;
    const V = Math.abs(ue);
    V >= 0.02 ? Ie === "deye" ? ue < 0 ? j = !0 : Y = !0 : ue > 0 ? j = !0 : Y = !0 : he && Math.abs(he.val) >= 0.3 && (Ie === "deye" ? he.val < 0 ? j = !0 : Y = !0 : he.val > 0 ? j = !0 : Y = !0), this._isCharging = j, this._isDischarging = Y;
    const X = j ? V : 0, xe = Y ? V : 0;
    if (this._nodes.masterBatteryFlowHint) {
      let b = this._t("bat_idle"), L = "#94a3b8";
      j ? (b = this._t("bat_dir_charge"), L = "#34d399") : Y && (b = this._t("bat_dir_discharge"), L = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${V.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${L}; font-weight: 700; font-size: 14px;">${b}</span>`;
    }
    const ot = this._getEntityState((pr = t.battery) == null ? void 0 : pr.voltage_entity), It = ot ? ot.val.toFixed(2) : "53.24", jt = he ? he.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${It.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${jt.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((fr = t.battery) == null ? void 0 : fr.reserve_soc) !== void 0 ? t.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const b = ((gr = t.battery) == null ? void 0 : gr.reserve_soc) !== void 0 ? t.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${b}%`;
    }
    let Oe = this._getEntityState((hr = t.load) == null ? void 0 : hr.essential_power_entity);
    !Oe && (!((ur = t.load) != null && ur.essential_power_entity) || ((_r = t.load) == null ? void 0 : _r.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((yr = t.load) == null ? void 0 : yr.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (Oe = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const De = Oe && typeof Oe.val == "number" && !isNaN(Oe.val) ? Math.max(0, Oe.unit === "W" ? Oe.val / 1e3 : Oe.val) : 0, Bt = !!(Oe && De > 0);
    let Be = null, Ge = !1, Fe = this._getEntityState((br = t.grid) == null ? void 0 : br.power_entity);
    if (!Fe) {
      const b = [
        "sensor.deye_12k_inverter_total_grid_power",
        "sensor.deye_12k_inverter_grid_power",
        "sensor.inverter_12_kvt_total_grid_power",
        "sensor.inverter_12_kvt_grid_power",
        "sensor.inverter_12_kvt_grid_l1_power",
        "sensor.inverter_12_kvt_grid_l2_power",
        "sensor.inverter_12_kvt_grid_l3_power",
        "sensor.esp32_deye_inverter_grid_power",
        "sensor.esp32_deye_inverter_total_grid_power",
        "sensor.deye_grid_power",
        "sensor.grid_power",
        "sensor.solarman_total_grid_power",
        "sensor.solarman_grid_power",
        "sensor.sunsynk_grid_power",
        "sensor.sunsynk_total_grid_power"
      ];
      for (const L of b) {
        const N = this._getEntityState(L);
        if (N && typeof N.val == "number" && !isNaN(N.val)) {
          Fe = N;
          break;
        }
      }
    }
    const st = Fe ? Fe.unit === "W" ? Fe.val / 1e3 : Fe.val : 0, Te = l + F + (U > 0 ? U : 0) + xe;
    if ((mr = t.grid) != null && mr.external_power_entity) {
      const b = this._getEntityState(t.grid.external_power_entity);
      if (b && typeof b.val == "number" && !isNaN(b.val)) {
        const L = Math.abs(b.unit === "W" ? b.val / 1e3 : b.val), N = L < 0.03 && (X > 0.1 && Te < 0.1 || st > 0.1), G = X > 0.5 && Te < 0.15 && L < X - 0.2;
        !N && !G && (Be = b, Ge = !0);
      }
    }
    if (!Be)
      if (Fe && st > 0.05)
        Be = Fe, Ge = !1;
      else {
        const b = [
          "sensor.deye_12k_inverter_external_power",
          "sensor.deye_12k_inverter_external_ct_power",
          "sensor.deye_12k_inverter_external_ct_total_power",
          "sensor.deye_12k_inverter_grid_external_power",
          "sensor.solarman_grid_external_power",
          "sensor.solarman_external_power",
          "sensor.solarman_total_grid_external_power",
          "sensor.sunsynk_external_grid_power",
          "sensor.sunsynk_grid_external_power",
          "sensor.external_power",
          "sensor.grid_external_power"
        ], L = this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power") || this._getEntityState("sensor.solarman_external_power_l1"), N = this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power") || this._getEntityState("sensor.solarman_external_power_l2"), G = this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power") || this._getEntityState("sensor.solarman_external_power_l3");
        let $ = null;
        if (L && N && G && !isNaN(L.val) && !isNaN(N.val) && !isNaN(G.val)) {
          const me = (L.unit === "kW" ? L.val * 1e3 : L.val) + (N.unit === "kW" ? N.val * 1e3 : N.val) + (G.unit === "kW" ? G.val * 1e3 : G.val);
          $ = { val: me, unit: "W", raw: String(me) };
        }
        if (!$)
          for (const me of b) {
            const K = this._getEntityState(me);
            if (K && typeof K.val == "number" && !isNaN(K.val)) {
              $ = K;
              break;
            }
          }
        if (!$ && ((vr = this._hass) != null && vr.states)) {
          const K = Object.keys(this._hass.states).find(
            (be) => /(external_power|external_ct|ct1_power|grid_external_power)/i.test(be) && !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(be)
          );
          if (K) {
            const be = this._getEntityState(K);
            be && typeof be.val == "number" && !isNaN(be.val) && ($ = be);
          }
        }
        if ($) {
          const me = Math.abs($.unit === "kW" ? $.val : $.val / 1e3), K = me < 0.03 && (X > 0.1 && Te < 0.1 || st > 0.1 && Te < 0.1), be = X > 0.5 && Te < 0.15 && me < X - 0.2;
          !K && !be && me > 0 && (Be = $, Ge = !0);
        }
        Be || (Be = Fe, Ge = !1);
      }
    const we = Be ? Be.unit === "W" ? Be.val / 1e3 : Be.val : 0, ut = ((xr = t.grid) == null ? void 0 : xr.power_sign) || ((wr = t.grid) != null && wr.invert_power ? "inverted" : "deye"), Tt = ((Er = t.grid) == null ? void 0 : Er.selling_enabled) === !0, We = (((kr = t.grid) == null ? void 0 : kr.min_power_threshold) !== void 0 ? t.grid.min_power_threshold : 50) / 1e3, lt = this._getEntityState((Sr = t.grid) == null ? void 0 : Sr.status_entity), Ze = this._getEntityState(((Cr = t.grid) == null ? void 0 : Cr.voltage_entity) || (($r = t.inverter) == null ? void 0 : $r.voltage_entity)), z = ((Ir = t.grid) == null ? void 0 : Ir.voltage_threshold) !== void 0 ? t.grid.voltage_threshold : 90;
    let ie = !0;
    if (lt) {
      const b = String(lt.raw || lt.val).toLowerCase();
      (b === "off" || b === "false" || b === "0" || b === "disconnected" || b === "offline" || b === "unavailable" || b === "unknown") && (ie = !1);
    } else Ze && typeof Ze.val == "number" && !isNaN(Ze.val) && Ze.val < z && (ie = !1);
    const Ee = Te < 0.15, Ve = Te < X + 0.05, Se = Ee || Ve;
    let oe = !1, _e = !1, W = 0;
    if (!ie)
      W = 0, oe = !1, _e = !1;
    else {
      if (Se)
        W = Math.abs(we), W >= We ? (_e = !0, oe = !1) : (W = 0, _e = !1, oe = !1);
      else if (Ge)
        W = Math.abs(we), W >= We && (ut === "deye" ? we < 0 ? oe = !0 : _e = !0 : we > 0 ? oe = !0 : _e = !0);
      else if (ut === "deye") {
        if (we > 0)
          W = we, W >= We && (_e = !0);
        else if (we < 0) {
          const N = Math.abs(we), G = Math.max(0, N - De);
          G >= We ? (W = G, oe = !0) : (W = 0, oe = !1);
        }
      } else if (we < 0)
        W = Math.abs(we), W >= We && (_e = !0);
      else if (we > 0) {
        const N = Math.max(0, we - De);
        N >= We ? (W = N, oe = !0) : (W = 0, oe = !1);
      }
      if (((Br = t.grid) == null ? void 0 : Br.auto_calculate) !== !1 && _e && !Ge) {
        const N = Math.max(De, C), G = X + N + ne + T;
        N > 0.05 && G > Te + W + 0.1 && (W = W + N);
      }
      if (Se) {
        const N = this._getEntityState((Tr = t.grid) == null ? void 0 : Tr.voltage_entity) || this._getEntityState((Nr = t.inverter) == null ? void 0 : Nr.voltage_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_voltage") || this._getEntityState("sensor.esp32_deye_inverter_grid_voltage") || this._getEntityState("sensor.deye_12k_inverter_grid_voltage"), G = this._getEntityState((Lr = t.inverter) == null ? void 0 : Lr.current_entity) || this._getEntityState((Ar = t.grid) == null ? void 0 : Ar.current_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_current") || this._getEntityState("sensor.inverter_12_kvt_current_l1") || this._getEntityState("sensor.esp32_deye_inverter_grid_current") || this._getEntityState("sensor.deye_12k_inverter_grid_current") || this._getEntityState("sensor.grid_current"), $ = N && typeof N.val == "number" && !isNaN(N.val) ? N.val : 0, me = G && typeof G.val == "number" && !isNaN(G.val) ? G.val : 0, K = $ >= z && me >= 0.5, be = X > 0.1 && Te < 0.1;
        if (K) {
          const se = $ * me / 1e3;
          (W < 0.05 || W < X - 0.05 || se > W + 0.3) && (W = se, _e = !0, oe = !1);
        } else if (be && (W < 0.05 || W < X - 0.05)) {
          const se = Math.max(De, C), le = se > 0 ? se : 0.8;
          W = Math.max(W, X + 0.15 + le), _e = !0, oe = !1;
        }
        const Pe = (((Fr = t.inverter) == null ? void 0 : Fr.standby_power) !== void 0 ? t.inverter.standby_power : 100) / 1e3, ae = Math.max(De, C), ve = X + ae + ne + T + Pe, Ne = Math.max(0, ve - Te);
        Ne > 0.05 && W < Ne - 0.1 && (W = Ne, _e = !0, oe = !1);
      }
      const L = Math.max(0, l + F + (U > 0 ? U : 0) + xe - X - De - ne - T);
      Se || !Tt ? oe = !1 : oe && W > L + 0.1 && (W = L, W < We && (oe = !1, W = 0));
    }
    const et = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (ie ? (this._nodes.gridPowerVal.innerText = `${W.toFixed(3)} ${i}`, oe ? this._nodes.gridPowerVal.style.color = "#34d399" : _e ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (ie ? oe ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : _e ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), et && (ie ? (et.classList.add("glow-grid"), et.style.borderColor = "rgba(56, 189, 248, 0.4)") : (et.classList.remove("glow-grid"), et.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const Ye = this._getEntityState((Pr = t.grid) == null ? void 0 : Pr.import_daily_entity);
    this._nodes.gridImportDaily.innerText = Ye ? `${Ye.val.toFixed(2)} kWh` : "0.00 kWh";
    const Ke = this._getEntityState((Rr = t.grid) == null ? void 0 : Rr.export_daily_entity);
    this._nodes.gridExportDaily.innerText = Ke ? `${Ke.val.toFixed(2)} kWh` : "0.00 kWh";
    const wi = (Mr = t.battery) == null ? void 0 : Mr.charge_daily_entity;
    let je = this._getEntityState(wi);
    je || (je = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge"));
    const Ei = je && typeof je.val == "number" ? je.val : 0;
    this._calculateTariffs(Ye ? Ye.val : 0, Ke ? Ke.val : 0, u, Ei);
    const ki = _e ? W : 0, oi = oe ? W : 0, si = l + F + (U > 0 ? U : 0) + ki + xe, Si = X + oi + ne + T, li = Math.max(0, si - Si), dt = this._getEntityState((Or = t.inverter) == null ? void 0 : Or.self_consumption_entity), Nt = dt && typeof dt.val == "number" && !isNaN(dt.val) ? Math.max(0, dt.unit === "W" ? dt.val / 1e3 : dt.val) : null, di = (((Dr = t.inverter) == null ? void 0 : Dr.standby_power) !== void 0 ? t.inverter.standby_power : 100) / 1e3;
    let _t = 0, Je = 0;
    if (Bt)
      if (_t = Math.max(C, De), Nt !== null)
        Je = Nt;
      else {
        const b = Math.max(0, si - (X + oi + _t + ne + T));
        Je = b > 0 ? b : di;
      }
    else
      Nt !== null ? Je = Nt : Je = Math.min(li, di), _t = Math.max(C, Math.max(0, li - Je));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((Vr = t.inverter) == null ? void 0 : Vr.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", Je < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(Je * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${Je.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${_t.toFixed(3)} ${i}`;
    const ct = this._getEntityState((zr = t.load) == null ? void 0 : zr.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = ct ? `${ct.val.toFixed(2)} kWh` : "12,40 kWh";
    const Lt = this._getEntityState(((Wr = t.solar) == null ? void 0 : Wr.autarky_entity) || "sensor.deye_inverter_daily_autarky"), At = this._getEntityState(((qr = t.solar) == null ? void 0 : qr.self_consumption_entity) || "sensor.deye_inverter_daily_self_consumption");
    let Ft = Lt && typeof Lt.val == "number" && !isNaN(Lt.val) ? Lt.val : null;
    if (Ft === null) {
      const b = ct && typeof ct.val == "number" && !isNaN(ct.val) ? ct.val : 12.4, L = Ye && typeof Ye.val == "number" && !isNaN(Ye.val) ? Ye.val : 0;
      b > 0.05 ? Ft = Math.min(100, Math.max(0, (b - L) / b * 100)) : Ft = 100;
    }
    let Pt = At && typeof At.val == "number" && !isNaN(At.val) ? At.val : null;
    if (Pt === null) {
      const b = Ke && typeof Ke.val == "number" && !isNaN(Ke.val) ? Ke.val : 0;
      u > 0.05 ? Pt = Math.min(100, Math.max(0, (u - b) / u * 100)) : Pt = 0;
    }
    this._nodes.autarkyVal && (this._nodes.autarkyVal.innerText = `${Math.round(Ft)}%`), this._nodes.selfConsVal && (this._nodes.selfConsVal.innerText = `${Math.round(Pt)}%`);
    const Rt = ((Gr = t.battery) == null ? void 0 : Gr.parallel_batteries) || ((Hr = (jr = t.battery) == null ? void 0 : jr.modules) == null ? void 0 : Hr.length) || 2;
    let Mt = 0;
    for (let b = 0; b < Rt; b++) {
      const L = ((Yr = (Ur = t.battery) == null ? void 0 : Ur.modules) == null ? void 0 : Yr[b]) || ((Jr = (Kr = t.battery) == null ? void 0 : Kr.module_entities) == null ? void 0 : Jr[b]) || {}, N = L.capacity_kwh !== void 0 ? parseFloat(L.capacity_kwh) : b === 0 ? 7.88 : b === 1 ? 5.12 : (((Qr = t.battery) == null ? void 0 : Qr.capacity_kwh) || 13) / Rt;
      Mt += isNaN(N) ? 0 : N;
    }
    Mt <= 0 && (Mt = parseFloat((Xr = t.battery) == null ? void 0 : Xr.capacity_kwh) || 13);
    const Ht = this._getEntityState(((Zr = t.battery) == null ? void 0 : Zr.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), Ut = Ht && !isNaN(Ht.val) ? Ht.val : null, Yt = Ut !== null && Ut <= 40 ? Ut : Mt, ci = this._getEntityState(((ea = t.battery) == null ? void 0 : ea.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), Ci = ci ? ci.val : 80, $i = Yt * (Ci / 100), pi = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${$i.toFixed(2).replace(".", ",")} ${pi} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${Yt.toFixed(1).replace(".", ",")})</span></span>`);
    const fi = this._getEntityState(((ta = t.battery) == null ? void 0 : ta.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), ye = fi ? fi.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${ye.toFixed(1).replace(".", ",")}`), je || (je = this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const M = (ia = t.battery) == null ? void 0 : ia.discharge_daily_entity;
    let D = this._getEntityState(M);
    D || (D = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = je ? `${je.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = D ? `${D.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const q = [];
    for (let b = 1; b <= Rt; b++) {
      const L = this.shadowRoot.getElementById(`batPackSoc_${b}`), N = this.shadowRoot.getElementById(`batPackVolt_${b}`), G = this.shadowRoot.getElementById(`batPackCurr_${b}`), $ = this.shadowRoot.getElementById(`batPackPower_${b}`), me = this.shadowRoot.getElementById(`batPackTempVal_${b}`), K = this.shadowRoot.getElementById(`batPackDelta_${b}`), be = this.shadowRoot.getElementById(`batPackDeltaVal_${b}`), de = this.shadowRoot.getElementById(`batPackStateTag_${b}`), Pe = this.shadowRoot.getElementById(`batPackKwh_${b}`), ae = this.shadowRoot.getElementById(`batPackBar1_${b}`), ve = this.shadowRoot.getElementById(`batPackBar2_${b}`), Ne = this.shadowRoot.getElementById(`batPackBar3_${b}`), se = this.shadowRoot.getElementById(`batPackBar4_${b}`), le = ((ra = (na = t.battery) == null ? void 0 : na.modules) == null ? void 0 : ra[b - 1]) || ((oa = (aa = t.battery) == null ? void 0 : aa.module_entities) == null ? void 0 : oa[b - 1]) || {}, qe = le.soc_entity || le.soc || `sensor.bms_rack${b}_soc`, xt = le.current_entity || `sensor.bms_rack${b}_current`, Ot = le.voltage_entity || le.volt || `sensor.bms_rack${b}_voltage`, wt = le.power_entity || `sensor.bms_rack${b}_power`, Et = le.temperature_entity || le.temp || `sensor.bms_rack${b}_temperature`, kt = le.cell_delta_entity || le.delta_entity || `sensor.bms_rack${b}_cell_delta`, St = this._getEntityState(qe), Dt = this._getEntityState(xt), Kt = this._getEntityState(Ot), pt = this._getEntityState(wt), Jt = this._getEntityState(Et);
      let ce = this._getEntityState(kt);
      if (ce || (ce = this._getEntityState(`sensor.bms_rack${b}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${b}_cell_difference`)), !ce && (le.max_cell_voltage_entity || le.min_cell_voltage_entity)) {
        const ft = this._getEntityState(le.max_cell_voltage_entity), ca = this._getEntityState(le.min_cell_voltage_entity);
        if (ft && ca) {
          const zi = Math.abs(ft.val - ca.val);
          ce = { val: zi < 1 ? Math.round(zi * 1e3) : zi, unit: "mV" };
        }
      }
      const Vt = St ? St.val : b === 1 ? 82 : b === 2 ? 85 : 75, zt = Kt ? Kt.val : b === 1 ? 54.1 : b === 2 ? 54 : 52.4, ze = Dt ? Dt.val : b === 1 ? 18.4 : b === 2 ? 25.2 : 8.2, tt = Jt ? Jt.val : b === 1 ? 36.5 : b === 2 ? 21 : 22.5;
      let it = null;
      if (ce) {
        let ft = ce.val;
        ft < 1 && ft > 0 ? it = Math.round(ft * 1e3) : it = Math.round(ft);
      } else this._hass || (it = b === 1 ? 12 : b === 2 ? 8 : 15);
      let nt = 0;
      pt ? nt = Math.abs(this._formatPower(pt).kw) : nt = zt * Math.abs(ze) / 1e3;
      const bi = (le.capacity_kwh !== void 0 ? parseFloat(le.capacity_kwh) : b === 1 ? 7.88 : b === 2 ? 5.12 : Yt / Rt) * (Vt / 100);
      L && (L.innerText = `${Vt.toFixed(0)}%`), N && (N.innerText = `${zt.toFixed(1).replace(".", ",")} V`), G && (G.innerText = `${Math.abs(ze).toFixed(1).replace(".", ",")} A`), $ && ($.innerText = `${nt.toFixed(2).replace(".", ",")} ${i}`), me && (me.innerText = `${tt.toFixed(1).replace(".", ",")}`), be && (it !== null && !isNaN(it) ? (be.innerText = `${it} mV`, K && (K.style.display = "inline-flex", it <= 25 ? (K.style.color = "#34d399", K.style.background = "rgba(52, 211, 153, 0.12)", K.style.borderColor = "rgba(52, 211, 153, 0.3)") : it <= 50 ? (K.style.color = "#fbbf24", K.style.background = "rgba(251, 191, 36, 0.12)", K.style.borderColor = "rgba(251, 191, 36, 0.3)") : (K.style.color = "#f87171", K.style.background = "rgba(248, 113, 113, 0.16)", K.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : K && (K.style.display = "none")), Pe && (Pe.innerText = `~${bi.toFixed(2).replace(".", ",")} ${pi}`);
      let Re = !1;
      Y ? Re = !1 : j ? Re = !0 : Dt ? Re = (((sa = t.battery) == null ? void 0 : sa.power_sign) || "deye") === "deye" ? ze < 0 : ze > 0 : Re = ze < 0;
      const Wt = this.shadowRoot.getElementById(`batBranchBadge_${b}`);
      Wt && (nt < 0.02 ? (Wt.className = "es-bat-branch-badge es-mono idle", Wt.innerHTML = `<span>0.00 ${i}</span>`) : Re ? (Wt.className = "es-bat-branch-badge es-mono charge", Wt.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (Wt.className = "es-bat-branch-badge es-mono discharge", Wt.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const Ct = this.shadowRoot.getElementById(`batPackCard_${b}`), la = Ct == null ? void 0 : Ct.querySelector(".es-battery-gauge"), da = Ct == null ? void 0 : Ct.querySelector(".es-battery-gauge-nipple");
      Ct && (Ct.style.borderColor = Re ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), la && (la.style.borderColor = Re ? "#10b981" : "#ef4444"), da && (da.style.background = Re ? "#10b981" : "#ef4444"), de && (Re ? (de.className = "es-bat-state-tag charge", de.innerText = this._t("bat_charge"), de.style.color = "#34d399", de.style.background = "rgba(16, 185, 129, 0.18)", de.style.borderColor = "rgba(16, 185, 129, 0.4)") : (de.className = "es-bat-state-tag discharge", de.innerText = this._t("bat_discharge"), de.style.color = "#f87171", de.style.background = "rgba(239, 68, 68, 0.18)", de.style.borderColor = "rgba(239, 68, 68, 0.4)")), $ && ($.style.color = Re ? "#34d399" : "#f87171"), G && (G.style.color = Re ? "#38bdf8" : "#f87171");
      const Bi = Re ? "active-green" : "active-red";
      ae && ve && Ne && se && (ae.className = `es-bat-bar ${Vt >= 10 ? Bi : ""}`, ve.className = `es-bat-bar ${Vt >= 35 ? Bi : ""}`, Ne.className = `es-bat-bar ${Vt >= 65 ? Bi : ""}`, se.className = `es-bat-bar ${Vt >= 85 ? Bi : ""}`), q.push({ kwNum: nt, isChg: Re });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      ie ? W : 0,
      oe,
      _e,
      l,
      _t,
      V,
      j,
      Y,
      T,
      q,
      ne,
      C,
      U
    ), this._updateControlSliders();
  }
  _setupResizeObserver() {
    var i;
    if (this._resizeObserver) return;
    const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".energy-station-container");
    t && (window.ResizeObserver && (this._resizeObserver = new ResizeObserver(() => {
      this._updateFlowPaths();
    }), this._resizeObserver.observe(t)), this._rAF(() => this._updateFlowPaths()), setTimeout(() => this._updateFlowPaths(), 150));
  }
  _updateFlowPaths() {
    var t, i, n, r, a, o, s, l, c;
    try {
      const d = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".energy-station-container");
      if (!d) return;
      const _ = d.getBoundingClientRect();
      if (_.width === 0 || _.height === 0) return;
      const h = this._config || pe, x = this._scale || 1, u = (S, B = 0.5, T = 0.5) => {
        if (!S) return null;
        const C = S.getBoundingClientRect();
        return {
          x: Math.round((C.left - _.left + C.width * B) / x),
          y: Math.round((C.top - _.top + C.height * T) / x)
        };
      }, y = (S, B, T) => {
        const C = this.shadowRoot.getElementById(S), R = this.shadowRoot.getElementById(B);
        C && C.setAttribute("d", T || ""), R && R.setAttribute("d", T || "");
      }, v = this.shadowRoot.getElementById("gridNode"), E = this.shadowRoot.getElementById("inverterNode"), p = this.shadowRoot.getElementById("essentialNode"), f = this.shadowRoot.getElementById("totalPvPowerBadge"), g = this.shadowRoot.getElementById("masterBatteryHub"), w = this.shadowRoot.getElementById("carNode");
      if (v && E) {
        const S = v.getBoundingClientRect(), B = E.getBoundingClientRect();
        if (S.bottom < B.top + 30) {
          const C = u(v, 0.7, 1), R = u(E, 0.2, 0);
          if (C && R) {
            const Z = Math.round((C.y + R.y) / 2), ee = `M ${C.x} ${C.y} C ${C.x} ${Z}, ${R.x} ${Z}, ${R.x} ${R.y}`;
            y("pathGridInvBase", "pathGridInvFlow", ee);
          }
        } else {
          const C = Math.round((B.top - _.top + B.height * 0.55) / x), R = Math.round((S.right - _.left) / x), Z = Math.round((B.left - _.left) / x), ee = Math.round((S.top - _.top + S.height * 0.5) / x);
          let he = "";
          if (Math.abs(ee - C) <= 8)
            he = `M ${R} ${C} L ${Z} ${C}`;
          else {
            const ue = Math.round(R + 24);
            he = `M ${R} ${ee} C ${ue} ${ee}, ${ue} ${C}, ${Z} ${C}`;
          }
          y("pathGridInvBase", "pathGridInvFlow", he);
        }
      }
      if (E && p) {
        const S = p.getBoundingClientRect(), B = E.getBoundingClientRect();
        if (S.bottom < B.top + 30) {
          const C = u(E, 0.8, 0), R = u(p, 0.3, 1);
          if (C && R) {
            const Z = Math.round((C.y + R.y) / 2), ee = `M ${C.x} ${C.y} C ${C.x} ${Z}, ${R.x} ${Z}, ${R.x} ${R.y}`;
            y("pathInvLoadBase", "pathInvLoadFlow", ee);
          }
        } else {
          const C = Math.round((B.top - _.top + B.height * 0.55) / x), R = Math.round((B.right - _.left) / x), Z = Math.round((S.left - _.left) / x), ee = Math.round((S.top - _.top + S.height * 0.5) / x);
          let he = "";
          if (Math.abs(ee - C) <= 8)
            he = `M ${R} ${C} L ${Z} ${C}`;
          else {
            const ue = Math.round(Z - 24);
            he = `M ${R} ${C} C ${ue} ${C}, ${ue} ${ee}, ${Z} ${ee}`;
          }
          y("pathInvLoadBase", "pathInvLoadFlow", he);
        }
      }
      if (f && E) {
        const S = u(f, 0.5, 1), B = u(E, 0.5, 0);
        if (S && B) {
          const T = `M ${S.x} ${S.y} L ${B.x} ${B.y}`;
          y("pathSolarInvBase", "pathSolarInvFlow", T);
        }
      }
      if (E && g) {
        const S = u(E, 0.5, 1), B = u(g, 0.5, 0);
        if (S && B) {
          const T = `M ${S.x} ${S.y} L ${B.x} ${B.y}`;
          y("pathInvBatBase", "pathInvBatFlow", T);
        }
      }
      const k = this.shadowRoot.getElementById("nonEssentialNode"), I = k && !k.classList.contains("hidden") && k.offsetHeight > 0, P = w && !w.classList.contains("hidden") && w.offsetHeight > 0;
      if (v && I) {
        const S = u(v, 0.5, 1), B = u(k, 0.5, 0);
        if (S && B) {
          const T = `M ${S.x} ${S.y} L ${B.x} ${B.y}`;
          y("pathGridNonEssBase", "pathGridNonEssFlow", T);
        }
      } else
        y("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (P) {
        const S = I ? k : v;
        if (S) {
          const B = u(S, 0.5, 1), T = u(w, 0.5, 0);
          if (B && T) {
            const C = `M ${B.x} ${B.y} L ${T.x} ${T.y}`;
            y("pathNonEssCarBase", "pathNonEssCarFlow", C);
          }
        } else
          y("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        y("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const m = this.shadowRoot.getElementById("subloadsBusContainer");
      if (p && m) {
        const S = u(p, 0.5, 1), B = u(m, 0.5, 0);
        if (S && B) {
          const T = `M ${S.x} ${S.y} L ${B.x} ${B.y}`;
          y("pathLoadSubloadsBase", "pathLoadSubloadsFlow", T);
        }
      } else
        y("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const F = this.shadowRoot.getElementById("auxNode");
      if (E && F && !F.classList.contains("hidden") && F.offsetHeight > 0) {
        const S = u(F, 0.35, 1), B = u(E, 0.9, 0);
        if (S && B) {
          const T = Math.round((S.y + B.y) / 2), C = `M ${S.x} ${S.y} C ${S.x} ${T}, ${B.x} ${T}, ${B.x} ${B.y}`;
          y("pathInvAuxBase", "pathInvAuxFlow", C);
        }
      } else
        y("pathInvAuxBase", "pathInvAuxFlow", "");
      y("pathBatStemBase", "pathBatStemFlow", "");
      const U = this.shadowRoot.getElementById("windStationContainer"), Q = ((i = h.wind) == null ? void 0 : i.show) !== !1 || ((n = h.aux) == null ? void 0 : n.type) === "wind" ? ((r = h.wind) == null ? void 0 : r.turbine_count) || ((o = (a = h.wind) == null ? void 0 : a.turbines) == null ? void 0 : o.length) || 2 : 0;
      for (let S = 1; S <= 4; S++)
        if (S <= Q && U && !U.classList.contains("hidden")) {
          const B = this.shadowRoot.getElementById(`turbineCard_${S}`);
          if (B && g) {
            const T = u(B, 0.5, 1), C = Q === 1 ? 0.5 : 0.28 + (S - 1) / (Q - 1) * 0.44, R = u(g, C, 0);
            if (T && R) {
              const Z = `M ${T.x} ${T.y} L ${R.x} ${R.y}`;
              y(`pathTurbine${S}Base`, `pathTurbine${S}Flow`, Z);
            }
          } else
            y(`pathTurbine${S}Base`, `pathTurbine${S}Flow`, "");
        } else
          y(`pathTurbine${S}Base`, `pathTurbine${S}Flow`, "");
      const ne = ((s = h.battery) == null ? void 0 : s.parallel_batteries) || ((c = (l = h.battery) == null ? void 0 : l.modules) == null ? void 0 : c.length) || 2;
      for (let S = 1; S <= 8; S++) {
        const B = this.shadowRoot.getElementById(`batPackCard_${S}`), T = this.shadowRoot.getElementById(`batBranchBadge_${S}`);
        if (S <= ne && g && B) {
          const C = u(g, 0.5, 1), R = u(B, 0.5, 0);
          if (C && R) {
            const Z = Math.round(C.y + (R.y - C.y) * 0.45);
            let ee = "";
            Math.abs(C.x - R.x) <= 4 ? ee = `M ${C.x} ${C.y} L ${R.x} ${R.y}` : ee = `M ${C.x} ${C.y} C ${C.x} ${Z}, ${R.x} ${Z}, ${R.x} ${R.y}`, y(`pathBat${S}Base`, `pathBat${S}Flow`, ee), T && (T.style.left = `${R.x}px`, T.style.top = `${Z}px`, T.style.display = "flex");
          } else
            y(`pathBat${S}Base`, `pathBat${S}Flow`, ""), T && (T.style.display = "none");
        } else
          y(`pathBat${S}Base`, `pathBat${S}Flow`, ""), T && (T.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var t, i, n, r, a;
    try {
      const o = this._config || pe, s = this._scale || 1, l = this.shadowRoot.getElementById("solarBusSvg"), c = ((t = o.solar) == null ? void 0 : t.pv_count) || ((n = (i = o.solar) == null ? void 0 : i.strings) == null ? void 0 : n.length) || 3;
      if (l && c > 0) {
        const h = l.getBoundingClientRect(), x = this.shadowRoot.getElementById("pvPanel_1"), u = this.shadowRoot.getElementById(`pvPanel_${c}`), y = this.shadowRoot.getElementById("solarBusBase"), v = this.shadowRoot.getElementById("solarFlowCollector"), E = this.shadowRoot.getElementById("solarBusStemBase"), p = this.shadowRoot.getElementById("solarBusStemFlow"), f = this.shadowRoot.getElementById("solarBusFeeders");
        if (x && u && h.width > 0) {
          const g = x.getBoundingClientRect(), w = u.getBoundingClientRect(), k = Math.round((g.left - h.left + g.width / 2) / s), I = Math.round((w.left - h.left + w.width / 2) / s), P = 13, m = Math.round((k + I) / 2);
          if (y && (y.setAttribute("x1", k), y.setAttribute("y1", P), y.setAttribute("x2", I), y.setAttribute("y2", P)), v && (v.setAttribute("x1", k), v.setAttribute("y1", P), v.setAttribute("x2", I), v.setAttribute("y2", P)), E && (E.setAttribute("x1", m), E.setAttribute("y1", P), E.setAttribute("x2", m), E.setAttribute("y2", 26)), p && (p.setAttribute("x1", m), p.setAttribute("y1", P), p.setAttribute("x2", m), p.setAttribute("y2", 26)), f) {
            let F = "";
            for (let U = 1; U <= c; U++) {
              const te = this.shadowRoot.getElementById(`pvPanel_${U}`);
              if (te) {
                const Q = te.getBoundingClientRect(), ne = Math.round((Q.left - h.left + Q.width / 2) / s);
                F += `
                  <line x1="${ne}" y1="0" x2="${ne}" y2="${P}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${ne}" y1="0" x2="${ne}" y2="${P}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            f.innerHTML = F;
          }
        }
      }
      const d = this.shadowRoot.getElementById("subloadsBusSvg"), _ = ((a = (r = o.load) == null ? void 0 : r.subloads) == null ? void 0 : a.length) || 3;
      if (d && _ > 0) {
        const h = d.getBoundingClientRect(), x = this.shadowRoot.getElementById("subloadCard_0"), u = this.shadowRoot.getElementById(`subloadCard_${_ - 1}`), y = this.shadowRoot.getElementById("essentialNode"), v = this.shadowRoot.getElementById("subloadsBusBase"), E = this.shadowRoot.getElementById("subloadsFlowCollector"), p = this.shadowRoot.getElementById("subloadsBusStemBase"), f = this.shadowRoot.getElementById("subloadsBusStemFlow"), g = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (x && u && h.width > 0) {
          const w = x.getBoundingClientRect(), k = u.getBoundingClientRect(), I = Math.round((w.left - h.left + w.width / 2) / s), P = Math.round((k.left - h.left + k.width / 2) / s), m = 13;
          let F = Math.round((I + P) / 2);
          if (y) {
            const Q = y.getBoundingClientRect();
            F = Math.round((Q.left - h.left + Q.width / 2) / s);
          }
          const U = Math.min(I, F), te = Math.max(P, F);
          if (v && (v.setAttribute("x1", U), v.setAttribute("y1", m), v.setAttribute("x2", te), v.setAttribute("y2", m)), E && (E.setAttribute("x1", U), E.setAttribute("y1", m), E.setAttribute("x2", te), E.setAttribute("y2", m)), p && (p.setAttribute("x1", F), p.setAttribute("y1", 0), p.setAttribute("x2", F), p.setAttribute("y2", m)), f && (f.setAttribute("x1", F), f.setAttribute("y1", 0), f.setAttribute("x2", F), f.setAttribute("y2", m)), g) {
            let Q = "";
            for (let ne = 0; ne < _; ne++) {
              const S = this.shadowRoot.getElementById(`subloadCard_${ne}`);
              if (S) {
                const B = S.getBoundingClientRect(), T = Math.round((B.left - h.left + B.width / 2) / s);
                Q += `
                  <line x1="${T}" y1="${m}" x2="${T}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${T}" y1="${m}" x2="${T}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            g.innerHTML = Q;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(t, i, n, r, a) {
    if (!t) return;
    if (!a) {
      t.setAttribute("class", `flow-pulse ${i} inactive`), t.style.opacity = "0", t.style.animation = "none";
      return;
    }
    const o = n ? "flow-reverse" : "flow-forward", s = n ? "esFlowBackward" : "esFlowForward";
    t.setAttribute("class", `flow-pulse ${i} ${o}`), t.style.opacity = "1", t.style.setProperty("--flow-speed", r), t.style.animation = `${s} ${r} linear infinite`;
  }
  _updateFlowAnimations(t, i, n, r, a, o, s, l, c, d = [], _ = 0, h = 0, x = 0) {
    var De, Bt, Be, Ge, Fe, st, Te, we, ut, Tt, We, lt, Ze;
    const u = this._config || pe, y = ((De = u.animations) == null ? void 0 : De.enabled) !== !1, v = ((Bt = u.animations) == null ? void 0 : Bt.speed) || 1.2, E = (z, ie = 10) => {
      const Ee = Math.abs(z);
      if (Ee < 0.05) return "2.5s";
      const Ve = Math.min(1, Ee / ie);
      return `${Math.max(0.4, (2.6 - Ve * 1.9) * (v / 1.2)).toFixed(2)}s`;
    }, p = this.shadowRoot.getElementById("pathGridInvFlow"), f = Math.abs(t), g = (((Be = u.grid) == null ? void 0 : Be.min_power_threshold) !== void 0 ? u.grid.min_power_threshold : 50) / 1e3, w = ((Ge = u.grid) == null ? void 0 : Ge.selling_enabled) === !0, k = y && f >= g && (n || i && w);
    this._applyFlowAnimation(p, "flow-grid", i, E(t, 10), k);
    const I = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(I, "flow-solar", !1, E(r, 12), y && r >= 0.05);
    const P = this.shadowRoot.getElementById("pathInvLoadFlow"), m = Math.abs(a);
    this._applyFlowAnimation(P, "flow-load", !1, E(a, 10), y && m >= 0.05);
    const F = this.shadowRoot.getElementById("pathInvBatFlow"), U = Math.abs(o), te = y && U >= 0.02 && (s || l), Q = s ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(F, Q, l, E(o, 8), te);
    const ne = this.shadowRoot.getElementById("pathGridNonEssFlow"), S = Math.abs(_);
    this._applyFlowAnimation(ne, "flow-grid", !1, E(_, 5), y && S >= 0.05);
    const B = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), T = Math.abs(c);
    this._applyFlowAnimation(B, "flow-car", !1, E(c, 7), y && T >= 0.05);
    const C = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), R = Math.abs(h || a);
    this._applyFlowAnimation(C, "flow-load", !1, E(R, 8), y && R >= 0.05);
    const Z = this.shadowRoot.getElementById("pathInvAuxFlow"), ee = Math.abs(x);
    this._applyFlowAnimation(Z, "flow-aux", !0, E(x, 5), y && ee >= 0.05);
    const he = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(he, Q, l, E(o, 8), te);
    const ue = this.shadowRoot.getElementById("solarFlowCollector"), Ie = this.shadowRoot.getElementById("solarBusStemFlow");
    if (ue)
      if (!y || r < 0.05)
        ue.style.opacity = "0.2", ue.style.animation = "none", Ie && (Ie.style.opacity = "0.2", Ie.style.animation = "none");
      else {
        const z = E(r, 12);
        ue.style.opacity = "1", ue.setAttribute("class", "flow-line"), ue.style.animation = `esDashflow ${z} linear infinite`, Ie && (Ie.style.opacity = "1", Ie.setAttribute("class", "flow-line"), Ie.style.animation = `esDashflow ${z} linear infinite`);
      }
    const j = this.shadowRoot.getElementById("subloadsFlowCollector"), Y = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (j)
      if (!y || R < 0.05)
        j.style.opacity = "0.2", j.style.animation = "none", Y && (Y.style.opacity = "0.2", Y.style.animation = "none");
      else {
        const z = E(R, 8);
        j.style.opacity = "1", j.setAttribute("class", "flow-line"), j.style.animation = `esDashflow ${z} linear infinite`, Y && (Y.style.opacity = "1", Y.setAttribute("class", "flow-line"), Y.style.animation = `esDashflow ${z} linear infinite`);
      }
    const V = this.shadowRoot.getElementById("batteryFlowCollector"), re = this.shadowRoot.getElementById("batteryBusStemFlow"), X = this.shadowRoot.getElementById("batteryBusFeeders"), xe = l ? "#f87171" : "#34d399", ot = l ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (V)
      if (V.style.stroke = xe, V.style.filter = ot, re && (re.style.stroke = xe, re.style.filter = ot), !y || !te)
        V.style.opacity = "0.2", V.style.animation = "none", re && (re.style.opacity = "0.2", re.style.animation = "none");
      else {
        const z = E(o, 8), ie = l ? "esDashflowRev" : "esDashflow";
        V.style.opacity = "1", V.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), V.style.animation = `${ie} ${z} linear infinite`, re && (re.style.opacity = "1", re.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), re.style.animation = `${ie} ${z} linear infinite`);
      }
    X && X.querySelectorAll("line").forEach((z) => {
      if (z.style.stroke = xe, z.style.filter = ot, !y || !te)
        z.style.opacity = "0.2", z.style.animation = "none";
      else {
        const ie = E(o, 8), Ee = l ? "esDashflowRev" : "esDashflow";
        z.style.opacity = "1", z.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), z.style.animation = `${Ee} ${ie} linear infinite`;
      }
    });
    for (let z = 1; z <= 8; z++) {
      const ie = this.shadowRoot.getElementById(`pathBat${z}Flow`);
      if (!ie) continue;
      const Ee = d[z - 1], Ve = Ee ? Ee.kwNum : 0, Se = y && (Ve >= 0.02 || te), oe = l;
      this._applyFlowAnimation(ie, Q, oe, E(Ve || o, 8), Se);
    }
    for (let z = 0; z < 6; z++) {
      const ie = this.shadowRoot.getElementById(`pathSubload${z}Flow`);
      if (!ie) continue;
      const Ee = (st = (Fe = u.load) == null ? void 0 : Fe.subloads) == null ? void 0 : st[z], Ve = Ee ? this._getEntityState(Ee.entity) : null, Se = Ve ? this._formatPower(Ve, 2).kw : z === 0 ? 2 : z === 1 ? 3 : 4;
      this._applyFlowAnimation(ie, "flow-load", !1, E(Se, 8), y && Se >= 0.05);
    }
    const It = ((Te = u.wind) == null ? void 0 : Te.show) !== !1 || ((we = u.aux) == null ? void 0 : we.type) === "wind", jt = It ? ((ut = u.wind) == null ? void 0 : ut.turbine_count) || ((We = (Tt = u.wind) == null ? void 0 : Tt.turbines) == null ? void 0 : We.length) || 2 : 0, Oe = ((lt = u.wind) == null ? void 0 : lt.turbines) || [];
    for (let z = 1; z <= 4; z++) {
      const ie = this.shadowRoot.getElementById(`pathTurbine${z}Flow`);
      if (ie)
        if (z <= jt && It) {
          const Ee = Oe[z - 1] || {}, Ve = this._hass ? 0 : z === 1 ? 1.45 : 0.85, Se = this._getEntityState(Ee.power_entity || `sensor.wind_turbine_${z}_power`);
          let _e = this._formatPower(Se, Ve).kw * 1e3;
          Se && Se.unit === "W" && (_e = Se.val);
          const W = Ee.animation_threshold ?? ((Ze = u.wind) == null ? void 0 : Ze.animation_threshold) ?? 50, et = _e >= W;
          this._applyFlowAnimation(ie, "flow-wind", !1, E(_e / 1e3, 3), y && et);
        } else
          this._applyFlowAnimation(ie, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", ud);
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", hd);
window.customCards = window.customCards || [];
window.customCards.some((e) => e.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  ud as EnergyStationCard,
  hd as EnergyStationPanel,
  Ia as I18N
};
