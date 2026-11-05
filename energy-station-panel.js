var Ia = Object.defineProperty;
var Na = (t, e, i) => e in t ? Ia(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Ye = (t, e, i) => Na(t, typeof e != "symbol" ? e + "" : e, i);
const fe = {
  title: "Energy Station",
  card_style: "full",
  // 'full' | 'compact'
  view_mode: "3d",
  // '3d' (3D Реалістичний макет обладнання) | 'schematic' (2D Кібер-схема)
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
}, ue = 'width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"', be = {
  sun: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  pv_panel: `<svg ${ue} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg ${ue} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg ${ue} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  settings: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg ${ue} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  globe: `<svg ${ue} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
class Aa extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general", this._isInternalChange = !1, this._debounceTimer = null, this._rendered = !1, this._isDialogExpanded = !1;
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    if (this._config = JSON.parse(JSON.stringify(e || fe)), this._isInternalChange) {
      this._isInternalChange = !1;
      return;
    }
    this.render();
  }
  connectedCallback() {
    this._rendered || this.render();
    const e = () => {
      typeof window < "u" && window.innerWidth >= 850 && this._applyExpand(!0);
    };
    e(), setTimeout(e, 80), setTimeout(e, 250);
  }
  _findHuiDialog() {
    let e = this;
    for (; e; ) {
      if (e.tagName && e.tagName.toLowerCase() === "hui-dialog-edit-card")
        return e;
      if (e.parentElement)
        e = e.parentElement;
      else if (e.parentNode)
        e = e.parentNode;
      else if (e.getRootNode && e.getRootNode().host)
        e = e.getRootNode().host;
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
          const o = n.shadowRoot.querySelectorAll("*");
          for (const a of o)
            if (a.shadowRoot) {
              const s = a.shadowRoot.querySelector("hui-dialog-edit-card") || a.shadowRoot.querySelector("ha-dialog-edit-card");
              if (s) return s;
            }
        }
      } catch {
      }
    }
    return null;
  }
  _findHaDialog(e) {
    if (e != null && e.shadowRoot) {
      const n = e.shadowRoot.querySelector("ha-dialog") || e.shadowRoot.querySelector("mwc-dialog");
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
  _applyExpand(e) {
    var r, o, a;
    this._isDialogExpanded = e;
    const i = this._findHuiDialog(), n = this._findHaDialog(i);
    if (e) {
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
          const s = (o = i.shadowRoot) == null ? void 0 : o.getElementById("energy-station-wide-style");
          s && s.remove();
        } catch {
        }
      }
      if (n) {
        n.style.removeProperty("--mdc-dialog-min-width"), n.style.removeProperty("--mdc-dialog-max-width"), n.style.removeProperty("--ha-dialog-max-width"), n.style.removeProperty("--ha-dialog-width"), n.style.removeProperty("--mdc-dialog-width");
        try {
          const s = (a = n.shadowRoot) == null ? void 0 : a.querySelector(".mdc-dialog__surface");
          s && (s.style.removeProperty("max-width"), s.style.removeProperty("width"));
        } catch {
        }
      }
    }
    this._updateExpandBtn();
  }
  _updateExpandBtn() {
    var n;
    const e = (n = this.shadowRoot) == null ? void 0 : n.getElementById("btnToggleExpand");
    if (!e) return;
    const i = this._isDialogExpanded;
    e.innerHTML = i ? "❐ Звичайний розмір" : "⛶ На весь екран", e.title = i ? "Згорнути вікно налаштувань до звичайного розміру" : "Розширити вікно налаштувань на весь екран";
  }
  _flushConfig() {
    this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null, this._dispatchConfig());
  }
  _dispatchConfig() {
    if (!this._config) return;
    this._isInternalChange = !0;
    const e = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(e);
  }
  _valueChanged(e, i, n = !1) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const r = e.split(".");
    let o = this._config;
    for (let a = 0; a < r.length - 1; a++)
      o[r[a]] || (o[r[a]] = {}), o = o[r[a]];
    o[r[r.length - 1]] = i, this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null), n ? this._dispatchConfig() : this._debounceTimer = setTimeout(() => {
      this._dispatchConfig();
    }, 140);
  }
  _switchTab(e) {
    this._flushConfig(), this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || fe)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    ], this._config.grid.power_entity = "sensor.deye_12k_inverter_total_grid_power", this._config.grid.import_daily_entity = "sensor.deye_12k_inverter_daily_energy_bought", this._config.grid.export_daily_entity = "sensor.deye_12k_inverter_daily_energy_sold", this._config.load.auto_calculate = !0, this._config.load.separate_export = !0, this._config.load.essential_power_entity = "sensor.deye_12k_inverter_load_power", this._config.load.daily_house_entity = "sensor.deye_12k_inverter_daily_load_energy") : e === "deye_solarman" && (this._config.inverter.model_name = "DEYE HYBRID", this._config.solar.pv_count = 2, this._config.solar.total_power_entity = "sensor.solarman_pv_total_power", this._config.solar.daily_yield_entity = "sensor.solarman_daily_production", this._config.solar.strings = [
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
    var a, s, l, c, d, y, h, x, u, b, _, w, g, p, f, S, v, C, B, $, k, O, K, Y, re, E, N, R, T, A, Q, oe, he, ee, ke, X, J, I, W, de, U, qe, Fe, mt, Jt, Oe, Ge, Rt, Ne, Ue, De, ct, Ae, Ce, _t, Mt, je, pt, D, ye, _e, Le, ce, Pt, vt, xt, se, Ee, q, wt, Qe, Xe, mi, Re, _i, vi, pi, fi, xi, gi, ft, Ft, Vi, Ot, ot, Ze, gt, Dt, Vt, zt, Wt, Gt, Kt, Qt, Xt, kt, hi, wi;
    if (!this._config) return;
    this._rendered = !0;
    const e = this._config, i = (a = this.shadowRoot) == null ? void 0 : a.activeElement;
    let n = null, r = null, o = null;
    if (i && (i.id ? n = `#${i.id}` : ((s = i.dataset) == null ? void 0 : s.idx) !== void 0 && i.className && (n = `.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`), "selectionStart" in i && "selectionEnd" in i && (r = i.selectionStart, o = i.selectionEnd)), this.shadowRoot.innerHTML = `
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
              <input type="text" id="title" value="${e.title || "Energy Station"}">
            </div>
            <div class="field-row">
              <label>Максимальна ширина картки (Max Width):</label>
              <select id="cardMaxWidth">
                <option value="1400px" ${e.max_width === "1400px" || !e.max_width ? "selected" : ""}>1400px (Стандартна)</option>
                <option value="1600px" ${e.max_width === "1600px" ? "selected" : ""}>1600px (Широка)</option>
                <option value="1800px" ${e.max_width === "1800px" ? "selected" : ""}>1800px (Дуже широка / 2K)</option>
                <option value="100%" ${e.max_width === "100%" ? "selected" : ""}>100% (На всю ширину панелі)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Режим відображення (View Mode):</label>
              <select id="cardViewMode">
                <option value="3d" ${e.view_mode !== "schematic" ? "selected" : ""}>🧊 3D Режим (3D Realistic Station)</option>
                <option value="schematic" ${e.view_mode === "schematic" ? "selected" : ""}>⚡ 2D Схема (Cyber Schematic)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Тема оформлення (Theme):</label>
              <select id="themeMode">
                <option value="dark" ${e.theme_mode !== "light" ? "selected" : ""}>🌙 Темна (Dark)</option>
                <option value="light" ${e.theme_mode === "light" ? "selected" : ""}>☀️ Світла (Light)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Мова інтерфейсу (Language):</label>
              <select id="cardLanguage">
                <option value="uk" ${e.language !== "en" ? "selected" : ""}>🇺🇦 Українська (UK)</option>
                <option value="en" ${e.language === "en" ? "selected" : ""}>🇬🇧 English (EN)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Масштаб картки (Zoom / Scale):</label>
              <div class="slider-row">
                <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${e.card_scale || 1}">
                <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((e.card_scale || 1) * 100)}%</span>
              </div>
            </div>
            <div class="field-row">
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((l = e.animations) == null ? void 0 : l.speed) || 1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((c = e.animations) == null ? void 0 : c.speed) || 1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings !== !1 ? "checked" : ""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((d = e.animations) == null ? void 0 : d.enabled) !== !1 ? "checked" : ""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((y = e.controls) == null ? void 0 : y.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((h = e.controls) == null ? void 0 : h.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((x = e.controls) == null ? void 0 : x.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((u = e.solar) == null ? void 0 : u.pv_count) || 3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((b = e.solar) == null ? void 0 : b.pv_count) || 3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((_ = e.solar) == null ? void 0 : _.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((w = e.solar) == null ? void 0 : w.daily_yield_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((g = e.solar) == null ? void 0 : g.target_daily_yield) || 55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((p = e.solar) == null ? void 0 : p.installed_power) !== void 0 ? e.solar.installed_power : 12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((f = e.solar) == null ? void 0 : f.show_metrics) !== !1 ? "checked" : ""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((S = e.solar) == null ? void 0 : S.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((v = e.solar) == null ? void 0 : v.pv_count) || 3 }).map((me, V) => {
      var et, St;
      const G = V + 1, j = ((St = (et = e.solar) == null ? void 0 : et.strings) == null ? void 0 : St[V]) || {}, at = `sensor.deye_12k_inverter_pv${G}_voltage`, Ke = `sensor.deye_12k_inverter_pv${G}_current`, Et = `sensor.deye_12k_inverter_pv${G}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${G} (Стрінг ${G})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${V}" value="${j.name || `PV ${G}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${G} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${V}" value="${j.voltage_entity !== void 0 ? j.voltage_entity : at}" placeholder="${at}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${G} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${V}" value="${j.current_entity !== void 0 ? j.current_entity : Ke}" placeholder="${Ke}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${G} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${V}" value="${j.capacity_kw !== void 0 ? j.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${G} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${V}" value="${j.power_entity !== void 0 ? j.power_entity : Et}" placeholder="${Et} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${((C = e.inverter) == null ? void 0 : C.model_name) || "DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((B = e.inverter) == null ? void 0 : B.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${(($ = e.inverter) == null ? void 0 : $.show_self_consumption) !== !1 ? "checked" : ""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((k = e.inverter) == null ? void 0 : k.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((O = e.inverter) == null ? void 0 : O.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((K = e.inverter) == null ? void 0 : K.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((Y = e.inverter) == null ? void 0 : Y.ac_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((re = e.inverter) == null ? void 0 : re.dc_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((E = e.inverter) == null ? void 0 : E.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((N = e.inverter) == null ? void 0 : N.current_entity) || ""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((R = e.inverter) == null ? void 0 : R.frequency_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((T = e.aux) == null ? void 0 : T.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((A = e.aux) == null ? void 0 : A.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((Q = e.aux) == null ? void 0 : Q.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((oe = e.aux) == null ? void 0 : oe.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((he = e.aux) == null ? void 0 : he.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((ee = e.aux) == null ? void 0 : ee.type) === "microinverter" && (!((ke = e.aux) != null && ke.title) || ((X = e.aux) == null ? void 0 : X.title) === "Вітрогенератор") ? "Мікроінвертор" : ((J = e.aux) == null ? void 0 : J.title) || (((I = e.aux) == null ? void 0 : I.type) === "generator" ? "Генератор" : ((W = e.aux) == null ? void 0 : W.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((de = e.aux) == null ? void 0 : de.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((U = e.wind) == null ? void 0 : U.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((qe = e.wind) == null ? void 0 : qe.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((Fe = e.wind) == null ? void 0 : Fe.animation_threshold) || ((mt = e.aux) == null ? void 0 : mt.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((Jt = e.wind) == null ? void 0 : Jt.animation_threshold) || ((Oe = e.aux) == null ? void 0 : Oe.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Ge = e.wind) == null ? void 0 : Ge.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((Rt = e.wind) == null ? void 0 : Rt.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((Ne = e.wind) == null ? void 0 : Ne.turbine_count) || 2 }).map((me, V) => {
      var j, at;
      const G = ((at = (j = e.wind) == null ? void 0 : j.turbines) == null ? void 0 : at[V]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${V}" value="${G.name || `Вітряк ${V + 1}`}" placeholder="Назва (напр. Вітряк ${V + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${V}" value="${G.power_entity || `sensor.wind_turbine_${V + 1}_power`}" placeholder="sensor.wind_turbine_${V + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${V}" value="${G.rpm_entity || G.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${V}" value="${G.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${V + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${V}" value="${G.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${V + 1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((Ue = e.battery) == null ? void 0 : Ue.soc_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((De = e.battery) == null ? void 0 : De.power_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((ct = e.battery) == null ? void 0 : ct.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ae = e.battery) == null ? void 0 : Ae.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Ce = e.battery) == null ? void 0 : Ce.capacity_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((_t = e.battery) == null ? void 0 : _t.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((Mt = e.battery) == null ? void 0 : Mt.current_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((je = e.battery) == null ? void 0 : je.temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((pt = e.battery) == null ? void 0 : pt.cell_delta_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((D = e.battery) == null ? void 0 : D.charge_daily_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ye = e.battery) == null ? void 0 : ye.discharge_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((_e = e.battery) == null ? void 0 : _e.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Le = e.battery) == null ? void 0 : Le.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((ce = e.battery) == null ? void 0 : ce.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((Pt = e.battery) == null ? void 0 : Pt.parallel_batteries) || 2 }).map((me, V) => {
      var Ei, Si, Ci, $i;
      const G = V + 1, j = ((Si = (Ei = e.battery) == null ? void 0 : Ei.modules) == null ? void 0 : Si[V]) || (($i = (Ci = e.battery) == null ? void 0 : Ci.module_entities) == null ? void 0 : $i[V]) || {}, at = `sensor.bms_rack${G}_soc`, Ke = `sensor.bms_rack${G}_current`, Et = `sensor.bms_rack${G}_voltage`, et = `sensor.bms_rack${G}_power`, St = `sensor.bms_rack${G}_temperature`, ki = `sensor.bms_rack${G}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${G} (Модуль ${G})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${V}" value="${j.name || `Батарея ${G}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${G} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${V}" value="${j.soc_entity !== void 0 ? j.soc_entity : j.soc !== void 0 ? j.soc : at}" placeholder="${at}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${G} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${V}" value="${j.current_entity !== void 0 ? j.current_entity : Ke}" placeholder="${Ke}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${G} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${V}" value="${j.voltage_entity !== void 0 ? j.voltage_entity : j.volt !== void 0 ? j.volt : Et}" placeholder="${Et}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${G} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${V}" value="${j.temperature_entity !== void 0 ? j.temperature_entity : j.temp !== void 0 ? j.temp : St}" placeholder="${St}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${G} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${V}" value="${j.capacity_kwh !== void 0 ? j.capacity_kwh : G === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${G} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${V}" value="${j.cell_delta_entity !== void 0 ? j.cell_delta_entity : j.delta !== void 0 ? j.delta : ki}" placeholder="${ki}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${G} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${V}" value="${j.power_entity !== void 0 ? j.power_entity : et}" placeholder="${et} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(vt = e.grid) != null && vt.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((xt = e.grid) == null ? void 0 : xt.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((se = e.grid) == null ? void 0 : se.external_power_entity) || ""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Ee = e.grid) == null ? void 0 : Ee.auto_calculate) !== !1 ? "checked" : ""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((q = e.grid) == null ? void 0 : q.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((wt = e.grid) == null ? void 0 : wt.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Qe = e.grid) == null ? void 0 : Qe.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((Xe = e.grid) == null ? void 0 : Xe.voltage_entity) || ""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((mi = e.grid) == null ? void 0 : mi.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Re = e.grid) == null ? void 0 : Re.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((_i = e.grid) == null ? void 0 : _i.import_daily_entity) || ""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((vi = e.grid) == null ? void 0 : vi.export_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((pi = e.grid) == null ? void 0 : pi.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((fi = e.grid) == null ? void 0 : fi.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((xi = e.load) == null ? void 0 : xi.auto_calculate) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((gi = e.load) == null ? void 0 : gi.separate_export) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((ft = e.load) == null ? void 0 : ft.essential_power_entity) || ""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((Ft = e.load) == null ? void 0 : Ft.daily_house_entity) || ""}">
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

          ${(((Vi = e.load) == null ? void 0 : Vi.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Ot = e.load) == null ? void 0 : Ot.subloads) || []).map((me, V) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${V}" value="${me.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${V}" style="width: 140px;">
                  <option value="boiler" ${me.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${me.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${me.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${me.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${me.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${me.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${me.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${V}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${V}" value="${me.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((ot = e.tariffs) == null ? void 0 : ot.enabled) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((Ze = e.tariffs) == null ? void 0 : Ze.currency) || "грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((gt = e.tariffs) == null ? void 0 : gt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Dt = e.tariffs) == null ? void 0 : Dt.day_rate) ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Vt = e.tariffs) == null ? void 0 : Vt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((zt = e.tariffs) == null ? void 0 : zt.night_rate) ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Wt = e.tariffs) == null ? void 0 : Wt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Gt = e.tariffs) == null ? void 0 : Gt.export_rate) ?? 5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (me, V) => {
      var G;
      return `<option value="${V}" ${(((G = e.tariffs) == null ? void 0 : G.night_start_hour) ?? 23) === V ? "selected" : ""}>${String(V).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (me, V) => {
      var G;
      return `<option value="${V}" ${(((G = e.tariffs) == null ? void 0 : G.night_end_hour) ?? 7) === V ? "selected" : ""}>${String(V).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((Kt = e.tariffs) == null ? void 0 : Kt.import_day_entity) || ""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((Qt = e.tariffs) == null ? void 0 : Qt.import_night_entity) || ""}" placeholder="sensor.daily_energy_night">
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
              <input type="checkbox" id="tariffShowDailyCost" ${((Xt = e.tariffs) == null ? void 0 : Xt.show_daily_cost) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((kt = e.tariffs) == null ? void 0 : kt.show_export_income) !== !1 ? "checked" : ""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((hi = e.tariffs) == null ? void 0 : hi.show_active_badge) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((wi = e.tariffs) == null ? void 0 : wi.show_solar_savings) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `, this._bindEvents(), this._updateExpandBtn(), n) {
      const me = this.shadowRoot.querySelector(n);
      if (me && (me.focus(), r !== null && o !== null && "setSelectionRange" in me))
        try {
          me.setSelectionRange(r, o);
        } catch {
        }
    }
  }
  _bindEvents() {
    var a, s, l, c, d, y, h, x, u, b, _, w;
    const e = this.shadowRoot;
    (a = e.getElementById("btnToggleExpand")) == null || a.addEventListener("click", () => {
      this._applyExpand(!this._isDialogExpanded);
    }), e.querySelectorAll(".tab-btn").forEach((g) => {
      g.addEventListener("click", (p) => {
        this._switchTab(p.target.dataset.tab);
      });
    }), (s = e.getElementById("btnPresetEsp")) == null || s.addEventListener("click", () => this._applyPreset("deye_esphome")), (l = e.getElementById("btnPresetSolarman")) == null || l.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (g, p) => {
      const f = e.getElementById(g);
      f && (f.addEventListener("input", (S) => this._valueChanged(p, S.target.value, !1)), f.addEventListener("change", (S) => this._valueChanged(p, S.target.value, !0)), f.addEventListener("blur", () => this._flushConfig()));
    }, n = (g, p) => {
      const f = e.getElementById(g);
      f && f.addEventListener("change", (S) => this._valueChanged(p, S.target.checked, !0));
    }, r = (g, p, f, S = "") => {
      const v = e.getElementById(g);
      v && (v.addEventListener("input", (C) => {
        const B = parseFloat(C.target.value);
        if (f) {
          const $ = e.getElementById(f);
          $ && ($.innerText = `${B}${S}`);
        }
        this._valueChanged(p, isNaN(B) ? 0 : B, !1);
      }), v.addEventListener("change", (C) => {
        const B = parseFloat(C.target.value);
        this._valueChanged(p, isNaN(B) ? 0 : B, !0);
      }), v.addEventListener("blur", () => this._flushConfig()));
    };
    i("title", "title"), i("cardViewMode", "view_mode"), i("themeMode", "theme_mode"), i("cardLanguage", "language"), (c = e.getElementById("cardScale")) == null || c.addEventListener("input", (g) => {
      const p = parseFloat(g.target.value), f = e.getElementById("cardScaleVal");
      f && (f.innerText = `${Math.round(p * 100)}%`), this._valueChanged("card_scale", p);
    }), (d = e.getElementById("cardScale")) == null || d.addEventListener("change", () => this._flushConfig()), i("cardMaxWidth", "max_width"), n("showQuickSettings", "show_quick_settings"), i("ctrlSolarCharge", "controls.solar_charge_entity"), i("ctrlSellPower", "controls.sell_power_entity"), i("ctrlGridCharge", "controls.grid_charge_entity"), n("animEnabled", "animations.enabled"), r("animSpeed", "animations.speed", "animSpeedVal", "s"), (y = e.getElementById("solarPvCount")) == null || y.addEventListener("input", (g) => {
      const p = parseInt(g.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = p, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < p; ) {
        const f = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${f}`,
          name: `PV ${f}`,
          capacity_kw: 4,
          voltage_entity: `sensor.deye_12k_inverter_pv${f}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${f}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${f}_power`
        });
      }
      this._valueChanged("solar.pv_count", p, !0), this._valueChanged("solar.strings", this._config.solar.strings, !0), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[f] || (this._config.solar.strings[f] = {}), this._config.solar.strings[f].name = p.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[f] || (this._config.solar.strings[f] = {}), this._config.solar.strings[f].voltage_entity = p.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[f] || (this._config.solar.strings[f] = {}), this._config.solar.strings[f].current_entity = p.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-power-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[f] || (this._config.solar.strings[f] = {}), this._config.solar.strings[f].power_entity = p.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-cap-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[f] || (this._config.solar.strings[f] = {}), this._config.solar.strings[f].capacity_kw = parseFloat(p.target.value) || 0, this._valueChanged("solar.strings", this._config.solar.strings);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), i("solarTotalPower", "solar.total_power_entity"), i("solarDailyYield", "solar.daily_yield_entity"), r("solarTargetDaily", "solar.target_daily_yield"), r("solarInstalledPower", "solar.installed_power"), n("solarShowMetrics", "solar.show_metrics"), i("invModel", "inverter.model_name"), i("invPower", "inverter.power_entity"), n("invShowSelfConsumption", "inverter.show_self_consumption"), i("invSelfConsumptionEntity", "inverter.self_consumption_entity"), r("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), i("invTempAc", "inverter.ac_temperature_entity"), i("invTempDc", "inverter.dc_temperature_entity"), i("invVolt", "inverter.voltage_entity"), i("invCurrent", "inverter.current_entity"), i("invFreq", "inverter.frequency_entity"), (h = e.getElementById("auxType")) == null || h.addEventListener("change", (g) => {
      const p = g.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = p;
      const S = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[p] || "Мікроінвертор";
      this._config.aux.title = S;
      const v = e.getElementById("auxTitle");
      v && (v.value = S), this._valueChanged("aux.type", p, !0), this._valueChanged("aux.title", S, !0);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (x = e.getElementById("windTurbineCount")) == null || x.addEventListener("input", (g) => {
      const p = parseInt(g.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = p, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < p; ) {
        const f = this._config.wind.turbines.length + 1;
        this._config.wind.turbines.push({
          id: `turbine_${f}`,
          name: `Вітряк ${f}`,
          power_entity: `sensor.wind_turbine_${f}_power`,
          speed_entity: `sensor.wind_turbine_${f}_speed`,
          daily_energy_entity: "",
          monthly_energy_entity: "",
          animation_threshold: this._config.wind.animation_threshold || 50
        });
      }
      this._valueChanged("wind.turbine_count", p, !0), this._valueChanged("wind.turbines", this._config.wind.turbines, !0), this.render();
    }), r("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (u = e.getElementById("windThreshold")) == null || u.addEventListener("input", (g) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(g.target.value));
    }), i("windDailyEnergy", "wind.daily_energy_entity"), i("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[f] || (this._config.wind.turbines[f] = {}), this._config.wind.turbines[f].name = p.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-power-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[f] || (this._config.wind.turbines[f] = {}), this._config.wind.turbines[f].power_entity = p.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-speed-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[f] || (this._config.wind.turbines[f] = {}), this._config.wind.turbines[f].rpm_entity = p.target.value, this._config.wind.turbines[f].speed_entity = p.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-daily-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[f] || (this._config.wind.turbines[f] = {}), this._config.wind.turbines[f].daily_energy_entity = p.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[f] || (this._config.wind.turbines[f] = {}), this._config.wind.turbines[f].monthly_energy_entity = p.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), i("batSoc", "battery.soc_entity"), i("batPower", "battery.power_entity"), i("batPowerSign", "battery.power_sign"), i("batVolt", "battery.voltage_entity"), i("batCurrent", "battery.current_entity"), i("batTemp", "battery.temperature_entity"), i("batDelta", "battery.cell_delta_entity"), i("batCapacity", "battery.capacity_entity"), i("batChargeDaily", "battery.charge_daily_entity"), i("batDischargeDaily", "battery.discharge_daily_entity"), (b = e.getElementById("batParallelCount")) == null || b.addEventListener("input", (g) => {
      const p = parseInt(g.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = p, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < p; ) {
        const f = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${f}`,
          name: `Батарея ${f}`,
          soc_entity: `sensor.bms_rack${f}_soc`,
          current_entity: `sensor.bms_rack${f}_current`,
          voltage_entity: `sensor.bms_rack${f}_voltage`,
          power_entity: `sensor.bms_rack${f}_power`,
          temperature_entity: `sensor.bms_rack${f}_temperature`,
          cell_delta_entity: `sensor.bms_rack${f}_cell_delta`
        });
      }
      this._valueChanged("battery.parallel_batteries", p, !0), this._valueChanged("battery.modules", this._config.battery.modules, !0), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].name = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].soc_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].current_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].voltage_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].temperature_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-delta-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].cell_delta_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].power_entity = p.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((g) => {
      g.addEventListener("input", (p) => {
        const f = parseInt(p.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[f] || (this._config.battery.modules[f] = {}), this._config.battery.modules[f].capacity_kwh = parseFloat(p.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      }), g.addEventListener("blur", () => this._flushConfig());
    }), n("gridSellingEnabled", "grid.selling_enabled"), n("gridAutoCalculate", "grid.auto_calculate"), i("gridPower", "grid.power_entity"), i("gridExternalPower", "grid.external_power_entity"), i("gridVoltage", "grid.voltage_entity"), i("gridStatus", "grid.status_entity"), r("gridVoltageThreshold", "grid.voltage_threshold"), i("gridPowerSign", "grid.power_sign"), r("gridMinThreshold", "grid.min_power_threshold"), i("gridImportDaily", "grid.import_daily_entity"), i("gridExportDaily", "grid.export_daily_entity"), i("gridNonEssential", "grid.non_essential_power_entity"), i("gridCarPower", "grid.car_power_entity"), n("loadAutoCalculate", "load.auto_calculate"), n("loadSeparateExport", "load.separate_export"), i("loadEssential", "load.essential_power_entity"), i("loadDailyHouse", "load.daily_house_entity");
    const o = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const g = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${g}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render();
    };
    (_ = e.getElementById("btnAddSubload")) == null || _.addEventListener("click", o), (w = e.getElementById("btnAddSubloadBottom")) == null || w.addEventListener("click", o), e.querySelectorAll(".btn-del-subload").forEach((g) => {
      g.addEventListener("click", (p) => {
        var v;
        const f = p.currentTarget || p.target.closest(".btn-del-subload"), S = parseInt(f.dataset.idx);
        (v = this._config.load) != null && v.subloads && (this._config.load.subloads.splice(S, 1), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((g) => {
      g.addEventListener("input", (p) => {
        var S, v;
        const f = parseInt(p.target.dataset.idx);
        (v = (S = this._config.load) == null ? void 0 : S.subloads) != null && v[f] && (this._config.load.subloads[f].name = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".subload-icon").forEach((g) => {
      g.addEventListener("change", (p) => {
        var S, v;
        const f = parseInt(p.target.dataset.idx);
        (v = (S = this._config.load) == null ? void 0 : S.subloads) != null && v[f] && (this._config.load.subloads[f].icon = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads, !0));
      });
    }), e.querySelectorAll(".subload-entity").forEach((g) => {
      g.addEventListener("input", (p) => {
        var S, v;
        const f = parseInt(p.target.dataset.idx);
        (v = (S = this._config.load) == null ? void 0 : S.subloads) != null && v[f] && (this._config.load.subloads[f].entity = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), g.addEventListener("blur", () => this._flushConfig());
    }), n("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), r("tariffDayRate", "tariffs.day_rate"), r("tariffNightRate", "tariffs.night_rate"), r("tariffExportRate", "tariffs.export_rate"), r("tariffNightStart", "tariffs.night_start_hour"), r("tariffNightEnd", "tariffs.night_end_hour"), i("tariffImportDayEntity", "tariffs.import_day_entity"), i("tariffImportNightEntity", "tariffs.import_night_entity"), n("tariffShowDailyCost", "tariffs.show_daily_cost"), n("tariffShowExportIncome", "tariffs.show_export_income"), n("tariffShowActiveBadge", "tariffs.show_active_badge"), n("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", Aa);
/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */
var Z = Symbol("NOT_RESOLVED");
function Pe(t, e) {
  return {
    tagName: t,
    nodeKind: "scalar",
    implicit: e.implicit ?? !1,
    matchByTagPrefix: e.matchByTagPrefix ?? !1,
    implicitFirstChars: e.implicitFirstChars ?? null,
    resolve: e.resolve,
    identify: e.identify,
    represent: e.represent ?? ((i) => String(i)),
    representTagName: e.representTagName ?? (() => t)
  };
}
function an(t, e) {
  const i = e.finalize === void 0;
  return {
    tagName: t,
    nodeKind: "sequence",
    implicit: !1,
    matchByTagPrefix: e.matchByTagPrefix ?? !1,
    create: e.create,
    addItem: e.addItem,
    finalize: e.finalize ?? ((n) => n),
    carrierIsResult: i,
    identify: e.identify,
    represent: e.represent ?? ((n) => n),
    representTagName: e.representTagName ?? (() => t)
  };
}
function Mi(t, e) {
  const i = e.finalize === void 0;
  return {
    tagName: t,
    nodeKind: "mapping",
    implicit: !1,
    matchByTagPrefix: e.matchByTagPrefix ?? !1,
    create: e.create,
    addPair: e.addPair,
    has: e.has,
    keys: e.keys,
    get: e.get,
    finalize: e.finalize ?? ((n) => n),
    carrierIsResult: i,
    identify: e.identify,
    represent: e.represent ?? ((n) => n),
    representTagName: e.representTagName ?? (() => t)
  };
}
var La = Pe("tag:yaml.org,2002:str", {
  resolve: (t) => t,
  identify: (t) => typeof t == "string"
}), Ra = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], Ma = Pe("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => Ra.indexOf(t) !== -1 ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), Pa = Pe("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: ["n"],
  resolve: (t, e) => t === "null" || e && t === "" ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), Fa = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], Oa = Pe("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => Fa.indexOf(t) !== -1 ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), Da = [
  "true",
  "True",
  "TRUE"
], Va = [
  "false",
  "False",
  "FALSE"
], za = Pe("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: [
    "t",
    "T",
    "f",
    "F"
  ],
  resolve: (t) => Da.indexOf(t) !== -1 ? !0 : Va.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Wa = ["true"], Ga = ["false"], Ka = Pe("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: ["t", "f"],
  resolve: (t) => Wa.indexOf(t) !== -1 ? !0 : Ga.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), qa = [
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
], ja = [
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
], Ha = Pe("tag:yaml.org,2002:bool", {
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
  resolve: (t) => qa.indexOf(t) !== -1 ? !0 : ja.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Ua = /* @__PURE__ */ new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"), Ya = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function Ja(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function Qa(t, e) {
  if (e) {
    if (!Ya.test(t)) return Z;
  } else if (!Ua.test(t)) return Z;
  const i = Ja(t);
  return Number.isFinite(i) ? i : Z;
}
var Ho = Pe("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: Qa,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Xa = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)$"), Za = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function es(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function ts(t, e) {
  if (e) {
    if (!Za.test(t)) return Z;
  } else if (!Xa.test(t)) return Z;
  const i = es(t);
  return Number.isFinite(i) ? i : Z;
}
var is = Pe("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: ts,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), ns = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function rs(t) {
  let e = t.replace(/_/g, ""), i = 1;
  if ((e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b")) return i * parseInt(e.slice(2), 2);
  if (e.startsWith("0x")) return i * parseInt(e.slice(2), 16);
  if (e.includes(":")) {
    let n = 0;
    for (const r of e.split(":")) n = n * 60 + Number(r);
    return i * n;
  }
  return e !== "0" && e[0] === "0" ? i * parseInt(e, 8) : i * parseInt(e, 10);
}
function os(t) {
  if (!ns.test(t)) return Z;
  const e = rs(t);
  return Number.isFinite(e) ? e : Z;
}
var Yi = Pe("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: os,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), as = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), ss = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function ls(t) {
  if (!as.test(t)) return Z;
  let e = t.toLowerCase();
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  const n = i * parseFloat(e);
  return Number.isFinite(n) || ss.test(t) ? n : Z;
}
function ds(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var Uo = Pe("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: ls,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: ds
}), cs = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"), ps = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function fs(t, e) {
  if (e) {
    if (!ps.test(t)) return Z;
    let n = t.toLowerCase();
    const r = n[0] === "-" ? -1 : 1;
    if ("+-".includes(n[0]) && (n = n.slice(1)), n === ".inf") return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    if (n === ".nan") return NaN;
    const o = r * parseFloat(n);
    return Number.isFinite(o) ? o : Z;
  }
  if (!cs.test(t)) return Z;
  const i = Number(t);
  return Number.isFinite(i) ? i : Z;
}
function gs(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var hs = Pe("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: fs,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: gs
}), us = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), bs = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function ys(t) {
  if (!us.test(t)) return Z;
  let e = t.toLowerCase().replace(/_/g, "");
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  let n = 0;
  if (e.includes(":")) {
    for (const r of e.split(":")) n = n * 60 + Number(r);
    n *= i;
  } else n = i * parseFloat(e);
  return Number.isFinite(n) || bs.test(t) ? n : Z;
}
function ms(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var Ji = Pe("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: ys,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: ms
}), _s = Pe("tag:yaml.org,2002:merge", {
  implicit: !0,
  implicitFirstChars: ["<"],
  resolve: (t, e) => t === "<<" || e && t === "" ? "<<" : Z,
  identify: () => !1
}), vs = /^[A-Za-z0-9+/]*={0,2}$/;
function xs(t) {
  const e = t.replace(/\s/g, "");
  if (e.length % 4 !== 0 || !vs.test(e)) return Z;
  const i = atob(e), n = new Uint8Array(i.length);
  for (let r = 0; r < i.length; r++) n[r] = i.charCodeAt(r);
  return n;
}
function ws(t) {
  let e = "";
  for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
  return btoa(e);
}
var ks = Pe("tag:yaml.org,2002:binary", {
  resolve: xs,
  identify: (t) => Object.prototype.toString.call(t) === "[object Uint8Array]",
  represent: ws
}), Es = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), Ss = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function Bo(t, e, i, n = 0, r = 0, o = 0, a = 0) {
  const s = new Date(Date.UTC(t, e, i, n, r, o, a));
  return s.setUTCFullYear(t, e, i), s;
}
function Cs(t) {
  let e = Es.exec(t);
  if (e === null && (e = Ss.exec(t)), e === null) return Z;
  const i = +e[1], n = +e[2] - 1, r = +e[3];
  if (!e[4]) {
    const d = Bo(i, n, r);
    return d.getUTCFullYear() !== i || d.getUTCMonth() !== n || d.getUTCDate() !== r ? Z : d;
  }
  const o = +e[4], a = +e[5], s = +e[6];
  let l = 0;
  if (o > 23 || a > 59 || s > 59) return Z;
  if (e[7]) {
    let d = e[7].slice(0, 3);
    for (; d.length < 3; ) d += "0";
    l = +d;
  }
  const c = Bo(i, n, r, o, a, s, l);
  if (c.getUTCFullYear() !== i || c.getUTCMonth() !== n || c.getUTCDate() !== r) return Z;
  if (e[9]) {
    const d = +e[10], y = +(e[11] || 0);
    if (d > 23 || y > 59) return Z;
    const h = (d * 60 + y) * 6e4;
    c.setTime(c.getTime() - (e[9] === "-" ? -h : h));
  }
  return c;
}
var $s = Pe("tag:yaml.org,2002:timestamp", {
  implicit: !0,
  implicitFirstChars: [..."0123456789"],
  resolve: Cs,
  identify: (t) => t instanceof Date,
  represent: (t) => t.toISOString()
}), Ts = an("tag:yaml.org,2002:seq", {
  create: () => [],
  addItem: (t, e) => {
    t.push(e);
  },
  identify: Array.isArray
});
function Pi(t) {
  if (t === null || typeof t != "object" || Array.isArray(t)) return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function Qi(t, e) {
  const i = {};
  for (const n of e) t[n] !== void 0 && (i[n] = t[n]);
  return i;
}
var Bs = an("tag:yaml.org,2002:omap", {
  create: () => ({
    list: [],
    seen: /* @__PURE__ */ new Set()
  }),
  addItem: (t, e) => {
    let i;
    if (e instanceof Map) {
      if (e.size !== 1) return "cannot resolve an ordered map item";
      i = e.keys().next().value;
    } else if (Pi(e)) {
      const n = Object.keys(e);
      if (n.length !== 1) return "cannot resolve an ordered map item";
      i = n[0];
    } else return "cannot resolve an ordered map item";
    return t.seen.has(i) ? "duplicate key in ordered map" : (t.seen.add(i), t.list.push(e), "");
  },
  finalize: (t) => t.list,
  identify: () => !1
}), Is = an("tag:yaml.org,2002:pairs", {
  create: () => [],
  addItem: (t, e) => {
    if (e instanceof Map)
      return e.size !== 1 ? "cannot resolve a pairs item" : (t.push(e.entries().next().value), "");
    if (Object.prototype.toString.call(e) !== "[object Object]") return "cannot resolve a pairs item";
    const i = e, n = Object.keys(i);
    return n.length !== 1 ? "cannot resolve a pairs item" : (t.push([n[0], i[n[0]]]), "");
  },
  identify: () => !1
}), Ns = Mi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Pi,
  represent: (t) => {
    const e = /* @__PURE__ */ new Map();
    for (const i of Object.keys(t)) e.set(i, t[i]);
    return e;
  },
  addPair: (t, e, i) => {
    if (e !== null && typeof e == "object") return "object-based map does not support complex keys";
    const n = String(e);
    return n === "__proto__" ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, "";
  },
  has: (t, e) => e !== null && typeof e == "object" ? !1 : Object.prototype.hasOwnProperty.call(t, String(e)),
  keys: (t) => Object.keys(t),
  get: (t, e) => {
    const i = String(e);
    return Object.prototype.hasOwnProperty.call(t, i) ? t[i] : null;
  }
}), As = Mi("tag:yaml.org,2002:set", {
  create: () => /* @__PURE__ */ new Set(),
  identify: (t) => t instanceof Set,
  represent: (t) => {
    const e = /* @__PURE__ */ new Map();
    for (const i of t) e.set(i, null);
    return e;
  },
  addPair: (t, e, i) => i !== null ? "cannot resolve a set item" : (t.add(e), ""),
  has: (t, e) => t.has(e),
  keys: (t) => t.keys(),
  get: () => null
});
function Ls() {
  return {
    scalar: /* @__PURE__ */ Object.create(null),
    sequence: /* @__PURE__ */ Object.create(null),
    mapping: /* @__PURE__ */ Object.create(null)
  };
}
function Rs() {
  return {
    scalar: [],
    sequence: [],
    mapping: []
  };
}
function Ms(t) {
  const e = [];
  for (const i of t) {
    let n = e.length;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (o.nodeKind === i.nodeKind && o.tagName === i.tagName && o.matchByTagPrefix === i.matchByTagPrefix) {
        n = r;
        break;
      }
    }
    e[n] = i;
  }
  return e;
}
var Fi = class Yo {
  constructor(e) {
    Ye(this, "tags");
    /** @internal */
    Ye(this, "implicitScalarTags");
    /**
    * Dispatch implicit scalar resolvers by `source.charAt(0)`. Each bucket holds
    * the resolvers that may match that key, in schema order; a key absent from
    * the map uses
    * {@link Schema.implicitScalarAnyFirstChar}
    * (resolvers that declared no first-char constraint, so they apply to any
    * first character).
    */
    Ye(this, "implicitScalarByFirstChar");
    Ye(this, "implicitScalarAnyFirstChar");
    /**
    * The default scalar tag (`!!str`), resolved once so the composer's fallback
    * for unresolved plain scalars avoids a keyed lookup per scalar.
    *
    * @internal
    */
    Ye(this, "defaultScalarTag");
    /**
    * The default container tags (`!!seq` / `!!map`), used by the dumper: when a
    * value is identified by its default tag, the tag is implicit and not
    * printed. Undefined if the schema does not define them (then such values
    * can't be dumped).
    *
    * @internal
    */
    Ye(this, "defaultSequenceTag");
    /** @internal */
    Ye(this, "defaultMappingTag");
    Ye(this, "exact");
    Ye(this, "prefix");
    const i = Ms(e), n = [], r = Ls(), o = Rs();
    for (const d of i) {
      if (d.nodeKind === "scalar" && d.implicit) {
        if (d.matchByTagPrefix) throw new Error("Implicit scalar tags cannot match by tag prefix");
        n.push(d);
      }
      switch (d.nodeKind) {
        case "scalar":
          d.matchByTagPrefix ? o.scalar.push(d) : r.scalar[d.tagName] = d;
          break;
        case "sequence":
          d.matchByTagPrefix ? o.sequence.push(d) : r.sequence[d.tagName] = d;
          break;
        case "mapping":
          d.matchByTagPrefix ? o.mapping.push(d) : r.mapping[d.tagName] = d;
      }
    }
    const a = n.filter((d) => d.implicitFirstChars === null), s = /* @__PURE__ */ new Set();
    for (const d of n) if (d.implicitFirstChars !== null) for (const y of d.implicitFirstChars) s.add(y);
    const l = /* @__PURE__ */ new Map();
    for (const d of s) l.set(d, n.filter((y) => y.implicitFirstChars === null || y.implicitFirstChars.indexOf(d) !== -1));
    const c = r.scalar["tag:yaml.org,2002:str"];
    if (!c) throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
    this.tags = i, this.implicitScalarTags = n, this.implicitScalarByFirstChar = l, this.implicitScalarAnyFirstChar = a, this.defaultScalarTag = c, this.defaultSequenceTag = r.sequence["tag:yaml.org,2002:seq"], this.defaultMappingTag = r.mapping["tag:yaml.org,2002:map"], this.exact = r, this.prefix = o;
  }
  /** @internal */
  lookupScalarTag(e) {
    const i = this.exact.scalar[e];
    if (i) return i;
    for (const n of this.prefix.scalar) if (e.startsWith(n.tagName)) return n;
  }
  /** @internal */
  lookupSequenceTag(e) {
    const i = this.exact.sequence[e];
    if (i) return i;
    for (const n of this.prefix.sequence) if (e.startsWith(n.tagName)) return n;
  }
  /** @internal */
  lookupMappingTag(e) {
    const i = this.exact.mapping[e];
    if (i) return i;
    for (const n of this.prefix.mapping) if (e.startsWith(n.tagName)) return n;
  }
  /** @internal */
  resolveImplicitScalarTag(e) {
    const i = this.implicitScalarByFirstChar.get(e.charAt(0)) ?? this.implicitScalarAnyFirstChar;
    for (const r of i) {
      const o = r.resolve(e, !1, r.tagName);
      if (o !== Z) return {
        value: o,
        tag: r
      };
    }
    const n = this.defaultScalarTag;
    return {
      value: n.resolve(e, !1, n.tagName),
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
  withTags(...e) {
    let i = [];
    for (const n of e) i = i.concat(n);
    return new Yo([...this.tags, ...i]);
  }
}, sn = new Fi([
  La,
  Ts,
  Ns
]);
new Fi([
  ...sn.tags,
  Pa,
  Ka,
  is,
  hs
]);
var Ps = new Fi([
  ...sn.tags,
  Ma,
  za,
  Ho,
  Uo
]), Fs = new Fi([
  ...sn.tags,
  Oa,
  Ha,
  Yi,
  Ji,
  $s,
  _s,
  ks,
  Bs,
  Is,
  As
]), Os = Fs.withTags({
  ...Yi,
  resolve: (t, e, i) => {
    const n = Yi.resolve(t, e, i);
    return n === Z ? Ho.resolve(t, e, i) : n;
  }
}, {
  ...Ji,
  resolve: (t, e, i) => {
    const n = Ji.resolve(t, e, i);
    return n === Z ? Uo.resolve(t, e, i) : n;
  }
});
Mi("tag:yaml.org,2002:map", {
  create: () => /* @__PURE__ */ new Map(),
  addPair: (t, e, i) => (t.set(e, i), ""),
  has: (t, e) => t.has(e),
  keys: (t) => t.keys(),
  get: (t, e) => t.get(e),
  identify: (t) => t instanceof Map || Pi(t),
  represent: (t) => {
    if (t instanceof Map) return t;
    const e = /* @__PURE__ */ new Map(), i = t;
    for (const n of Object.keys(i)) e.set(n, i[n]);
    return e;
  }
});
function Io(t) {
  if (Array.isArray(t)) {
    const e = Array.prototype.slice.call(t);
    for (let i = 0; i < e.length; i++) {
      if (Array.isArray(e[i])) return null;
      typeof e[i] == "object" && Object.prototype.toString.call(e[i]) === "[object Object]" && (e[i] = "[object Object]");
    }
    return String(e);
  }
  return typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" ? "[object Object]" : String(t);
}
Mi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Pi,
  represent: (t) => {
    const e = /* @__PURE__ */ new Map();
    for (const i of Object.keys(t)) e.set(i, t[i]);
    return e;
  },
  addPair: (t, e, i) => {
    const n = Io(e);
    return n === null ? "nested arrays are not supported inside keys" : (n === "__proto__" ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, "");
  },
  has: (t, e) => {
    const i = Io(e);
    return i !== null && Object.prototype.hasOwnProperty.call(t, i);
  },
  keys: (t) => Object.keys(t),
  get: (t, e) => {
    const i = String(e);
    return Object.prototype.hasOwnProperty.call(t, i) ? t[i] : null;
  }
});
var Ds = {
  maxLength: 79,
  indent: 1,
  linesBefore: 3,
  linesAfter: 2
};
function Wi(t, e, i, n, r) {
  let o = "", a = "";
  const s = Math.floor(r / 2) - 1;
  return n - e > s && (o = " ... ", e = n - s + o.length), i - n > s && (a = " ...", i = n + s - a.length), {
    str: o + t.slice(e, i).replace(/\t/g, "→") + a,
    pos: n - e + o.length
  };
}
function Gi(t, e) {
  return " ".repeat(Math.max(e - t.length, 0)) + t;
}
function Vs(t, e) {
  if (!t.buffer) return null;
  const i = {
    ...Ds,
    ...e
  }, n = /\r?\n|\r|\0/g, r = [0], o = [];
  let a, s = -1;
  for (; a = n.exec(t.buffer); )
    o.push(a.index), r.push(a.index + a[0].length), t.position <= a.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  let l = "";
  const c = Math.min(t.line + i.linesAfter, o.length).toString().length, d = i.maxLength - (i.indent + c + 3);
  for (let h = 1; h <= i.linesBefore && !(s - h < 0); h++) {
    const x = Wi(t.buffer, r[s - h], o[s - h], t.position - (r[s] - r[s - h]), d);
    l = `${" ".repeat(i.indent)}${Gi((t.line - h + 1).toString(), c)} | ${x.str}
${l}`;
  }
  const y = Wi(t.buffer, r[s], o[s], t.position, d);
  l += `${" ".repeat(i.indent)}${Gi((t.line + 1).toString(), c)} | ${y.str}
`, l += `${"-".repeat(i.indent + c + 3 + y.pos)}^
`;
  for (let h = 1; h <= i.linesAfter && !(s + h >= o.length); h++) {
    const x = Wi(t.buffer, r[s + h], o[s + h], t.position - (r[s] - r[s + h]), d);
    l += `${" ".repeat(i.indent)}${Gi((t.line + h + 1).toString(), c)} | ${x.str}
`;
  }
  return l.replace(/\n$/, "");
}
function No(t, e) {
  let i = "";
  return t.mark ? (t.mark.name && (i += `in "${t.mark.name}" `), i += `(${t.mark.line + 1}:${t.mark.column + 1})`, !e && t.mark.snippet && (i += `

${t.mark.snippet}`), `${t.reason} ${i}`) : t.reason;
}
var Lt = class Jo extends Error {
  /**
  * Optional `mark` contains source snippet data. Usually, use
  * {@link YAMLException.throwAt} instead of passing it directly.
  */
  constructor(i, n) {
    super();
    Ye(this, "reason");
    Ye(this, "mark");
    this.name = "YAMLException", this.reason = i, this.mark = n, this.message = No(this, !1), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  /**
  * Returns the formatted error, omitting the source snippet in compact mode.
  */
  toString(i) {
    return `${this.name}: ${No(this, i)}`;
  }
  /**
  * Builds a YAMLException with a source snippet and throws it. `source` is
  * the raw input text; `position` is an offset into it.
  */
  static throwAt(i, n, r, o = "") {
    let a = 0, s = 0;
    for (let c = 0; c < n; c++) {
      const d = i.charCodeAt(c);
      d === 10 ? (a++, s = c + 1) : d === 13 && (a++, i.charCodeAt(c + 1) === 10 && c++, s = c + 1);
    }
    const l = {
      name: o,
      buffer: i,
      position: n,
      line: a,
      column: n - s
    };
    throw l.snippet = Vs(l), new Jo(r, l);
  }
}, Be = {
  DOCUMENT: 1,
  SEQUENCE: 2,
  MAPPING: 3,
  SCALAR: 4,
  ALIAS: 5,
  POP: 6
}, z = {
  PLAIN: 1,
  SINGLE_QUOTED: 2,
  DOUBLE_QUOTED: 3,
  LITERAL_BLOCK: 4,
  FOLDED_BLOCK: 5
}, Je = {
  BLOCK: 1,
  FLOW: 2
}, dt = {
  CLIP: 1,
  STRIP: 2,
  KEEP: 3
}, zs = -1;
function Ao(t) {
  switch (t) {
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
var Qo = new Array(256), Xo = new Array(256);
for (let t = 0; t < 256; t++)
  Qo[t] = Ao(t) ? 1 : 0, Xo[t] = Ao(t);
function Ws(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode((t - 65536 >> 10) + 55296, (t - 65536 & 1023) + 56320);
}
function Gs(t) {
  return t >= 48 && t <= 57 ? t - 48 : (t | 32) - 97 + 10;
}
function Ks(t) {
  return t === 120 ? 2 : t === 117 ? 4 : 8;
}
function Ni(t, e, i) {
  let n = 0;
  for (; e < i; ) {
    const r = t.charCodeAt(e);
    if (r === 10)
      n++, e++;
    else if (r === 13)
      n++, e++, t.charCodeAt(e) === 10 && e++;
    else if (r === 32 || r === 9) e++;
    else break;
  }
  return {
    position: e,
    breaks: n
  };
}
function ln(t) {
  return t === 1 ? " " : `
`.repeat(t - 1);
}
function qs(t, e, i) {
  let n = "", r = e, o = e, a = e;
  for (; r < i; ) {
    const s = t.charCodeAt(r);
    if (s === 10 || s === 13) {
      n += t.slice(o, a);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = a = l.position;
    } else
      r++, s !== 32 && s !== 9 && (a = r);
  }
  return n + t.slice(o, a);
}
function js(t, e, i) {
  let n = "", r = e, o = e, a = e;
  for (; r < i; ) {
    const s = t.charCodeAt(r);
    if (s === 39)
      n += t.slice(o, r) + "'", r += 2, o = a = r;
    else if (s === 10 || s === 13) {
      n += t.slice(o, a);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = a = l.position;
    } else
      r++, s !== 32 && s !== 9 && (a = r);
  }
  return n + t.slice(o, i);
}
function Hs(t, e, i) {
  let n = "", r = e, o = e, a = e;
  for (; r < i; ) {
    const s = t.charCodeAt(r);
    if (s === 92) {
      n += t.slice(o, r), r++;
      const l = t.charCodeAt(r);
      if (l === 10 || l === 13) r = Ni(t, r, i).position;
      else if (l < 256 && Qo[l])
        n += Xo[l], r++;
      else {
        let c = Ks(l), d = 0;
        for (; c > 0; c--) {
          r++;
          const y = Gs(t.charCodeAt(r));
          d = (d << 4) + y;
        }
        n += Ws(d), r++;
      }
      o = a = r;
    } else if (s === 10 || s === 13) {
      n += t.slice(o, a);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = a = l.position;
    } else
      r++, s !== 32 && s !== 9 && (a = r);
  }
  return n + t.slice(o, i);
}
function Lo(t, e, i, n, r, o) {
  const a = n < 0 ? 0 : n, s = t.slice(e, i).replace(/\r\n?/g, `
`), l = s === "" ? [] : (s.endsWith(`
`) ? s.slice(0, -1) : s).split(`
`);
  let c = "", d = !1, y = 0, h = !1;
  for (const x of l) {
    let u = 0;
    for (; u < a && x.charCodeAt(u) === 32; ) u++;
    if (n < 0 || u >= x.length) {
      y++;
      continue;
    }
    const b = x.slice(a), _ = b.charCodeAt(0);
    o ? _ === 32 || _ === 9 ? (h = !0, c += `
`.repeat(d ? 1 + y : y)) : h ? (h = !1, c += `
`.repeat(y + 1)) : y === 0 ? d && (c += " ") : c += `
`.repeat(y) : c += `
`.repeat(d ? 1 + y : y), c += b, d = !0, y = 0;
  }
  return r === dt.KEEP ? c += `
`.repeat(d ? 1 + y : y) : r !== dt.STRIP && d && (c += `
`), c;
}
function Us(t, e) {
  if (e.valueStart === zs) return "";
  const { valueStart: i, valueEnd: n } = e;
  if (e.fast) return t.slice(i, n);
  switch (e.style) {
    case z.SINGLE_QUOTED:
      return js(t, i, n);
    case z.DOUBLE_QUOTED:
      return Hs(t, i, n);
    case z.LITERAL_BLOCK:
      return Lo(t, i, n, e.indent, e.chomping, !1);
    case z.FOLDED_BLOCK:
      return Lo(t, i, n, e.indent, e.chomping, !0);
    default:
      return qs(t, i, n);
  }
}
var Ys = Object.assign(/* @__PURE__ */ Object.create(null), {
  "!": "!",
  "!!": "tag:yaml.org,2002:"
}), Zo = "-#;/?:@&=+$_.~*'()", Js = Zo + "!,[]", Ro = "0123456789ABCDEF";
function lt(t) {
  return "%" + Ro[t >> 4] + Ro[t & 15];
}
function Ki(t, e) {
  const i = e ? Zo : Js;
  let n = "";
  for (let r = 0; r < t.length; r++) {
    let o = t.charCodeAt(r);
    if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || i.includes(t[r])) {
      n += t[r];
      continue;
    }
    o >= 55296 && o <= 56319 && (o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++r) & 1023)), o < 128 ? n += lt(o) : o < 2048 ? n += lt(192 | o >> 6) + lt(128 | o & 63) : o < 65536 ? n += lt(224 | o >> 12) + lt(128 | o >> 6 & 63) + lt(128 | o & 63) : n += lt(240 | o >> 18) + lt(128 | o >> 12 & 63) + lt(128 | o >> 6 & 63) + lt(128 | o & 63);
  }
  return n;
}
function qi(t) {
  let e = "", i = 0;
  for (; i < t.length; ) {
    if (t.charCodeAt(i) !== 37) {
      e += t[i++];
      continue;
    }
    let n = parseInt(t.slice(i + 1, i + 3), 16);
    if (i += 3, n >= 192) {
      let r = n < 224 ? 1 : n < 240 ? 2 : 3;
      for (n &= (1 << 6 - r) - 1; r-- > 0; )
        n = n << 6 | parseInt(t.slice(i + 1, i + 3), 16) & 63, i += 3;
    }
    n < 65536 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023));
  }
  return e;
}
function ea(t, e) {
  if (t.startsWith("!<") && t.endsWith(">")) return qi(t.slice(2, -1));
  const i = t.indexOf("!", 1), n = i === -1 ? "!" : t.slice(0, i + 1);
  return qi((e == null ? void 0 : e[n]) ?? Ys[n] ?? n) + qi(t.slice(n.length));
}
function ta(t) {
  let e = t;
  return e.charCodeAt(0) === 33 ? (e = e.slice(1), `!${Ki(e, !0)}`) : e.slice(0, 18) === "tag:yaml.org,2002:" ? `!!${Ki(e.slice(18), !0)}` : `!<${Ki(e, !1)}>`;
}
var ii = -1, Qs = "tag:yaml.org,2002:merge", dn = {
  filename: "",
  schema: Ps,
  json: !1,
  maxTotalMergeKeys: 1e4,
  maxAliases: -1
};
function Xs(t) {
  return "tagStart" in t && t.tagStart !== ii ? t.tagStart : "anchorStart" in t && t.anchorStart !== ii ? t.anchorStart : "valueStart" in t && t.valueStart !== ii ? t.valueStart : "start" in t ? t.start : 0;
}
function Ie(t, e) {
  Lt.throwAt(t.source, t.position, e, t.filename);
}
function ia(t, e, i, n) {
  try {
    return i.finalize(n);
  } catch (r) {
    if (r instanceof Lt) throw r;
    Lt.throwAt(t.source, e, r instanceof Error ? r.message : String(r), t.filename);
  }
}
function Zs(t, e) {
  const i = Us(t.source, e), n = e.tagStart === ii ? "" : t.source.slice(e.tagStart, e.tagEnd), r = t.schema.defaultScalarTag;
  if (n !== "") {
    if (n === "!") return {
      value: i,
      tag: r
    };
    const o = ea(n, t.tagHandlers), a = t.schema.lookupScalarTag(o);
    if (a) {
      const l = a.resolve(i, !0, o);
      return l === Z && Ie(t, `cannot resolve a node with !<${o}> explicit tag`), {
        value: l,
        tag: a
      };
    }
    const s = t.schema.lookupMappingTag(o) ?? t.schema.lookupSequenceTag(o);
    if (s) {
      i !== "" && Ie(t, `cannot resolve a node with !<${o}> explicit tag`);
      const l = s.create(o);
      return {
        value: s.carrierIsResult ? l : ia(t, t.position, s, l),
        tag: s
      };
    }
    Ie(t, `unknown scalar tag !<${o}>`);
  }
  return e.style === z.PLAIN ? t.schema.resolveImplicitScalarTag(i) : {
    value: r.resolve(i, !1, r.tagName),
    tag: r
  };
}
function Mo(t, e, i) {
  const n = e.tagStart === ii ? "" : t.source.slice(e.tagStart, e.tagEnd);
  return n === "" || n === "!" ? i : ea(n, t.tagHandlers);
}
function na(t) {
  return t.nodeKind === "mapping";
}
function Po(t) {
  t.totalMergeKeys++, t.maxTotalMergeKeys !== -1 && t.totalMergeKeys > t.maxTotalMergeKeys && Ie(t, `merge keys exceeded maxTotalMergeKeys (${t.maxTotalMergeKeys})`);
}
function Fo(t, e, i, n) {
  Po(t);
  for (const r of n.keys(i)) {
    if (Po(t), e.tag.has(e.value, r)) continue;
    const o = e.tag.addPair(e.value, r, n.get(i, r));
    o && Ie(t, o), e.overridable ?? (e.overridable = /* @__PURE__ */ new Set()), e.overridable.add(r);
  }
}
function el(t, e, i, n) {
  if (t.position = e.keyPosition, na(n)) Fo(t, e, i, n);
  else if (n.nodeKind === "sequence" && Array.isArray(i)) {
    i.length > 100 && Ie(t, "abnormal merge sequence size");
    for (const r of i) {
      const o = t.nodeTags.get(r);
      o || Ie(t, "cannot merge mappings; the provided source object is unacceptable"), Fo(t, e, r, o);
    }
  } else Ie(t, "cannot merge mappings; the provided source object is unacceptable");
}
function tl(t, e, i, n, r) {
  var a, s;
  if (t.position = e.keyPosition, e.keyIsMerge) {
    el(t, e, n, r);
    return;
  }
  !t.json && e.tag.has(e.value, i) && !((a = e.overridable) != null && a.has(i)) && Ie(t, "duplicated mapping key");
  const o = e.tag.addPair(e.value, i, n);
  o && Ie(t, o), (s = e.overridable) == null || s.delete(i);
}
function ji(t, e, i) {
  const n = t.frames[t.frames.length - 1];
  if (n.kind === "document")
    n.value = e, n.hasValue = !0;
  else if (n.kind === "sequence") {
    na(i) && t.nodeTags.set(e, i);
    const r = n.tag.addItem(n.value, e, n.index++);
    r && Ie(t, r);
  } else if (n.hasKey) {
    const r = n.key;
    n.key = void 0, n.hasKey = !1, tl(t, n, r, e, i);
  } else
    n.key = e, n.keyPosition = t.position, n.hasKey = !0, n.keyIsMerge = i.tagName === Qs;
}
function Hi(t, e, i, n, r) {
  if (e.anchorStart !== ii) {
    const o = {
      value: i,
      tag: n,
      isValueFinal: r
    };
    return t.anchors.set(t.source.slice(e.anchorStart, e.anchorEnd), o), o;
  }
  return null;
}
function il(t, e) {
  const i = {
    ...dn,
    ...e,
    events: t,
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
    switch (i.position = Xs(n), n.type) {
      case Be.DOCUMENT:
        i.anchors = /* @__PURE__ */ new Map(), i.nodeTags = /* @__PURE__ */ new Map(), i.aliasCount = 0, i.tagHandlers = /* @__PURE__ */ Object.create(null);
        for (const r of n.directives) r.kind === "tag" && (i.tagHandlers[r.handle] = r.prefix);
        i.frames.push({
          kind: "document",
          position: i.position,
          value: void 0,
          hasValue: !1
        });
        break;
      case Be.SCALAR: {
        const { value: r, tag: o } = Zs(i, n);
        Hi(i, n, r, o, !0), ji(i, r, o);
        break;
      }
      case Be.SEQUENCE: {
        const r = Mo(i, n, "tag:yaml.org,2002:seq"), o = i.schema.lookupSequenceTag(r);
        o || Ie(i, `unknown sequence tag !<${r}>`);
        const a = o.create(r), s = Hi(i, n, a, o, o.carrierIsResult);
        i.frames.push({
          kind: "sequence",
          position: i.position,
          value: a,
          tag: o,
          anchor: s,
          index: 0
        });
        break;
      }
      case Be.MAPPING: {
        const r = Mo(i, n, "tag:yaml.org,2002:map"), o = i.schema.lookupMappingTag(r);
        o || Ie(i, `unknown mapping tag !<${r}>`);
        const a = o.create(r), s = Hi(i, n, a, o, o.carrierIsResult);
        i.frames.push({
          kind: "mapping",
          position: i.position,
          value: a,
          tag: o,
          anchor: s,
          key: void 0,
          keyPosition: i.position,
          hasKey: !1,
          keyIsMerge: !1,
          overridable: null
        });
        break;
      }
      case Be.ALIAS: {
        i.maxAliases !== -1 && ++i.aliasCount > i.maxAliases && Ie(i, `aliases exceeded maxAliases (${i.maxAliases})`);
        const r = i.source.slice(n.anchorStart, n.anchorEnd), o = i.anchors.get(r);
        o || Ie(i, `unidentified alias "${r}"`), o.isValueFinal || Ie(i, `recursive alias "${r}" is not supported for tag ${o.tag.tagName} because it uses finalize()`), ji(i, o.value, o.tag);
        break;
      }
      case Be.POP: {
        const r = i.frames.pop();
        if (r.kind === "mapping" && r.hasKey && (i.position = r.keyPosition, Ie(i, "incomplete mapping pair in event stream")), r.kind === "document") i.documents.push(r.value);
        else {
          const o = r.tag.carrierIsResult ? r.value : ia(i, r.position, r.tag, r.value);
          r.anchor && (r.anchor.value = o, r.anchor.isValueFinal = !0), ji(i, o, r.tag);
        }
        break;
      }
    }
  }
  return i.documents;
}
var ne = -1, ra = Object.prototype.hasOwnProperty, ai = 1, oa = 2, aa = 3, Ai = 4, nl = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, rl = /[,\[\]{}]/, sa = /^(?:!|!!|![0-9A-Za-z-]+!)$/, Xi = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`, la = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`, ol = new RegExp(`^(?:${Xi})*$`), al = new RegExp(`^(?:${la})+$`), sl = new RegExp(`^(?:!(?:${Xi})*|${la}(?:${Xi})*)$`), cn = {
  filename: "",
  maxDepth: 100
};
function ll(t, e, i) {
  t.events.push({
    type: Be.DOCUMENT,
    explicitStart: e,
    explicitEnd: i,
    directives: t.directives
  });
}
function da(t, e, i, n, r, o, a) {
  t.events.push({
    type: Be.SEQUENCE,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: o,
    style: a
  });
}
function ca(t, e, i, n, r, o, a) {
  t.events.push({
    type: Be.MAPPING,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: o,
    style: a
  });
}
function Oo(t, e) {
  t.events.splice(e.eventsLength, 0, {
    type: Be.MAPPING,
    start: e.position,
    anchorStart: ne,
    anchorEnd: ne,
    tagStart: ne,
    tagEnd: ne,
    style: Je.FLOW
  });
}
function di(t, e, i, n, r, o, a, s, l = dt.CLIP, c = -1, d = !1) {
  t.events.push({
    type: Be.SCALAR,
    valueStart: e,
    valueEnd: i,
    anchorStart: n,
    anchorEnd: r,
    tagStart: o,
    tagEnd: a,
    style: s,
    chomping: l,
    indent: c,
    fast: d
  });
}
function dl(t, e, i) {
  t.events.push({
    type: Be.ALIAS,
    anchorStart: e,
    anchorEnd: i
  });
}
function ni(t) {
  t.events.push({ type: Be.POP });
}
function We(t) {
  di(t, ne, ne, ne, ne, ne, ne, z.PLAIN);
}
function Do() {
  return {
    anchorStart: ne,
    anchorEnd: ne,
    tagStart: ne,
    tagEnd: ne
  };
}
function ri(t) {
  return {
    position: t.position,
    line: t.line,
    lineStart: t.lineStart,
    lineIndent: t.lineIndent,
    firstTabInLine: t.firstTabInLine,
    eventsLength: t.events.length
  };
}
function oi(t, e) {
  t.position = e.position, t.line = e.line, t.lineStart = e.lineStart, t.lineIndent = e.lineIndent, t.firstTabInLine = e.firstTabInLine, t.events.length = e.eventsLength;
}
function F(t, e) {
  Lt.throwAt(t.input.slice(0, t.length), t.position, e, t.filename);
}
function $e(t) {
  return t === 10 || t === 13;
}
function ci(t) {
  return t === 9 || t === 32;
}
function rt(t) {
  return ci(t) || $e(t);
}
function bt(t) {
  return t === 0 || rt(t);
}
function Yt(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function cl(t) {
  return t >= 48 && t <= 57 ? t - 48 : -1;
}
function pl(t) {
  if (t >= 48 && t <= 57) return t - 48;
  const e = t | 32;
  return e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
function fl(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function gl(t) {
  return t === 48 || t === 97 || t === 98 || t === 116 || t === 9 || t === 110 || t === 118 || t === 102 || t === 114 || t === 101 || t === 32 || t === 34 || t === 47 || t === 92 || t === 78 || t === 95 || t === 76 || t === 80;
}
function Li(t) {
  t.input.charCodeAt(t.position) === 10 ? t.position++ : (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++), t.line++, t.lineStart = t.position, t.lineIndent = 0, t.firstTabInLine = -1;
}
function Me(t, e) {
  let i = 0, n = t.input.charCodeAt(t.position), r = t.position === t.lineStart || rt(t.input.charCodeAt(t.position - 1));
  for (; n !== 0; ) {
    for (; ci(n); )
      r = !0, n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && r && n === 35) do
      n = t.input.charCodeAt(++t.position);
    while (!$e(n) && n !== 0);
    if (!$e(n)) break;
    for (Li(t), i++, r = !0, n = t.input.charCodeAt(t.position); n === 32; )
      t.lineIndent++, n = t.input.charCodeAt(++t.position);
  }
  return i;
}
function si(t, e = t.position) {
  const i = t.input.charCodeAt(e);
  if ((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2)) {
    const n = t.input.charCodeAt(e + 3);
    return n === 0 || rt(n);
  }
  return !1;
}
function pa(t) {
  t.position === t.lineStart && t.input.charCodeAt(t.position) === 65279 && (t.position++, t.lineStart = t.position);
}
function pn(t) {
  if (t.position !== t.lineStart) return !1;
  if (si(t)) return !0;
  if (t.input.charCodeAt(t.position) !== 65279) return !1;
  const e = ri(t);
  pa(t), Me(t, !0);
  const i = t.input.charCodeAt(t.position), n = t.position === t.lineStart && (i === 37 || i === 45 && si(t));
  return oi(t, e), n;
}
function Vo(t) {
  let e = t.input.charCodeAt(t.position);
  for (; e !== 0 && !$e(e); ) e = t.input.charCodeAt(++t.position);
}
function fa(t, e, i) {
  const n = nl.exec(t.input.slice(e, i));
  n !== null && (t.position = e + n.index + n[0].length - 1, F(t, "the stream contains non-printable characters"));
}
function hl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 33) return !1;
  e.tagStart !== ne && F(t, "duplication of a tag property");
  const n = t.position;
  let r = !1, o = !1, a = "!", s = t.input.charCodeAt(++t.position);
  s === 60 ? (r = !0, s = t.input.charCodeAt(++t.position)) : s === 33 && (o = !0, a = "!!", s = t.input.charCodeAt(++t.position));
  let l = t.position, c;
  if (r) {
    for (; s !== 0 && s !== 62; ) s = t.input.charCodeAt(++t.position);
    s !== 62 && F(t, "unexpected end of the stream within a verbatim tag"), c = t.input.slice(l, t.position), t.position++;
  } else {
    for (; s !== 0 && !rt(s) && !(i && Yt(s)); )
      s === 33 && (o ? F(t, "tag suffix cannot contain exclamation marks") : (a = t.input.slice(l - 1, t.position + 1), sa.test(a) || F(t, "named tag handle cannot contain such characters"), o = !0, l = t.position + 1)), s = t.input.charCodeAt(++t.position);
    c = t.input.slice(l, t.position), rl.test(c) && F(t, "tag suffix cannot contain flow indicator characters");
  }
  return c && !(r ? ol.test(c) : al.test(c)) && F(t, `tag name cannot contain such characters: ${c}`), !r && a !== "!" && a !== "!!" && !ra.call(t.tagHandlers, a) && F(t, `undeclared tag handle "${a}"`), e.tagStart = n, e.tagEnd = t.position, !0;
}
function ul(t, e) {
  if (t.input.charCodeAt(t.position) !== 38) return !1;
  e.anchorStart !== ne && F(t, "duplication of an anchor property"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)) && !Yt(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && F(t, "name of an anchor node must contain at least one character"), e.anchorStart = i, e.anchorEnd = t.position, !0;
}
function bl(t, e) {
  if (t.input.charCodeAt(t.position) !== 42) return !1;
  (e.anchorStart !== ne || e.tagStart !== ne) && F(t, "alias node should not have any properties"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)) && !Yt(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && F(t, "name of an alias node must contain at least one character"), dl(t, i, t.position), !0;
}
function Zi(t, e) {
  Me(t, !1), t.lineIndent < e && F(t, "deficient indentation");
}
function yl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 39) return !1;
  t.position++;
  const n = t.position;
  let r = !0;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const o = t.input.charCodeAt(t.position);
    if (o === 39) {
      if (t.input.charCodeAt(t.position + 1) === 39) {
        r = !1, t.position += 2;
        continue;
      }
      const a = t.position;
      return t.position++, di(t, n, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, z.SINGLE_QUOTED, dt.CLIP, -1, r), !0;
    }
    $e(o) ? (r = !1, Zi(t, e)) : t.position === t.lineStart && si(t) ? F(t, "unexpected end of the document within a single quoted scalar") : o !== 9 && o < 32 ? F(t, "expected valid JSON character") : t.position++;
  }
  F(t, "unexpected end of the stream within a single quoted scalar");
}
function ml(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 34) return !1;
  t.position++;
  const n = t.position;
  let r = !0;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const o = t.input.charCodeAt(t.position);
    if (o === 34) {
      const a = t.position;
      return t.position++, di(t, n, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, z.DOUBLE_QUOTED, dt.CLIP, -1, r), !0;
    }
    if (o === 92) {
      r = !1;
      const a = t.input.charCodeAt(++t.position);
      if ($e(a)) Zi(t, e);
      else if (gl(a)) t.position++;
      else {
        let s = fl(a);
        for (s === 0 && F(t, "unknown escape sequence"); s-- > 0; )
          t.position++, pl(t.input.charCodeAt(t.position)) < 0 && F(t, "expected hexadecimal character");
        t.position++;
      }
    } else $e(o) ? (r = !1, Zi(t, e)) : t.position === t.lineStart && si(t) ? F(t, "unexpected end of the document within a double quoted scalar") : o !== 9 && o < 32 ? F(t, "expected valid JSON character") : t.position++;
  }
  F(t, "unexpected end of the stream within a double quoted scalar");
}
function _l(t, e, i) {
  const n = t.input.charCodeAt(t.position);
  let r = dt.CLIP, o = -1, a = !1;
  if (n !== 124 && n !== 62) return !1;
  const s = n === 124 ? z.LITERAL_BLOCK : z.FOLDED_BLOCK;
  for (t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    const x = t.input.charCodeAt(t.position), u = cl(x);
    if (x === 43 || x === 45)
      r !== dt.CLIP && F(t, "repeat of a chomping mode identifier"), r = x === 43 ? dt.KEEP : dt.STRIP, t.position++;
    else if (u >= 0)
      u === 0 && F(t, "bad explicit indentation width of a block scalar; it cannot be less than one"), a && F(t, "repeat of an indentation width identifier"), o = e + u - 1, a = !0, t.position++;
    else break;
  }
  let l = !1;
  for (; ci(t.input.charCodeAt(t.position)); )
    l = !0, t.position++;
  l && t.input.charCodeAt(t.position) === 35 && Vo(t), $e(t.input.charCodeAt(t.position)) ? Li(t) : t.input.charCodeAt(t.position) !== 0 && F(t, "a line break is expected");
  let c = a ? o : -1, d = 0;
  const y = t.position;
  let h = t.position;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const x = t.position;
    let u = 0;
    for (; t.input.charCodeAt(x + u) === 32; ) u++;
    const b = t.input.charCodeAt(x + u);
    if (b === 0) {
      c >= 0 ? u > c && (h = x + u) : u > 0 && (h = x + u);
      break;
    }
    if (pn(t)) break;
    if (!a && c === -1 && $e(b) && (d = Math.max(d, u)), !a && c === -1 && !$e(b) && (b === 9 && u < e && (t.position = x + u, F(t, "tab characters must not be used in indentation")), u >= e && u < d && (t.position = x + u, F(t, "bad indentation of a mapping entry"))), c === -1 && b !== 0 && !$e(b) && u < e) {
      t.lineIndent = u, t.position = x + u;
      break;
    }
    !a && b !== 0 && !$e(b) && c === -1 && (c = u);
    const _ = c === -1 ? e + 1 : c;
    if (b !== 0 && !$e(b) && u < _) {
      t.lineIndent = u, t.position = x + u;
      break;
    }
    Vo(t), h = t.position, $e(t.input.charCodeAt(t.position)) && (Li(t), h = t.position);
  }
  return fa(t, y, h), di(t, y, h, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, s, r, c), !0;
}
function vl(t, e) {
  const i = t.input.charCodeAt(t.position), n = e === ai;
  if (i === 0 || rt(i) || i === 35 || i === 38 || i === 42 || i === 33 || i === 124 || i === 62 || i === 39 || i === 34 || i === 37 || i === 64 || i === 96 || Yt(i)) return !1;
  if (i === 63 || i === 45) {
    const r = t.input.charCodeAt(t.position + 1);
    if (bt(r) || n && Yt(r)) return !1;
  }
  return !0;
}
function xl(t, e, i, n) {
  if (!vl(t, i)) return !1;
  const r = t.position;
  let o = t.position, a = t.input.charCodeAt(t.position);
  const s = i === ai;
  let l = !1;
  for (; a !== 0 && !pn(t); ) {
    if (a === 58) {
      const c = t.input.charCodeAt(t.position + 1);
      if (bt(c) || s && Yt(c)) break;
    } else if (a === 35) {
      if (rt(t.input.charCodeAt(t.position - 1))) break;
    } else {
      if (s && Yt(a)) break;
      if ($e(a)) {
        const c = t.position, d = t.line, y = t.lineStart, h = t.lineIndent;
        if (Me(t, !1), t.lineIndent >= e) {
          l = !0, a = t.input.charCodeAt(t.position);
          continue;
        }
        t.position = c, t.line = d, t.lineStart = y, t.lineIndent = h;
        break;
      }
    }
    ci(a) || (o = t.position + 1), a = t.input.charCodeAt(++t.position);
  }
  return o === r ? !1 : (fa(t, r, o), di(t, r, o, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, z.PLAIN, dt.CLIP, -1, !l), !0);
}
function ui(t, e) {
  const i = t.line;
  Me(t, !0), (t.line > i && t.lineIndent < e || t.firstTabInLine !== -1 && t.lineIndent < e) && F(t, "deficient indentation");
}
function wl(t, e, i) {
  const n = t.input.charCodeAt(t.position), r = n === 123, o = t.position;
  let a = !0;
  if (n !== 91 && n !== 123) return !1;
  const s = r ? 125 : 93;
  for (r ? ca(t, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Je.FLOW) : da(t, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Je.FLOW), t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    ui(t, e);
    let l = t.input.charCodeAt(t.position);
    if (l === s)
      return t.position++, ni(t), !0;
    a ? l === 44 && F(t, "expected the node content, but found ','") : F(t, "missed comma between flow collection entries");
    let c = !1, d = !1;
    l === 63 && rt(t.input.charCodeAt(t.position + 1)) && (c = d = !0, t.position += 1, ui(t, e));
    const y = t.line, h = ri(t), x = li(t, e, ai, !1, !0);
    ui(t, e), l = t.input.charCodeAt(t.position), (r || d || t.line === y) && l === 58 ? (c = !0, t.position++, ui(t, e), r || Oo(t, h), x || We(t), li(t, e, ai, !1, !0) || We(t), ui(t, e), r || ni(t)) : r && c ? (x || We(t), We(t)) : r ? We(t) : c && (Oo(t, h), x || We(t), We(t), ni(t)), l = t.input.charCodeAt(t.position), l === 44 ? (a = !0, t.position++) : a = !1;
  }
  F(t, "unexpected end of the stream within a flow collection");
}
function zo(t, e, i) {
  if (t.firstTabInLine !== -1 || t.input.charCodeAt(t.position) !== 45 || !bt(t.input.charCodeAt(t.position + 1))) return !1;
  for (da(t, t.position, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Je.BLOCK); t.input.charCodeAt(t.position) === 45 && bt(t.input.charCodeAt(t.position + 1)); ) {
    t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation"));
    const n = t.line;
    t.position++;
    const r = Me(t, !0) > 0;
    if (t.firstTabInLine !== -1 && t.input.charCodeAt(t.position) === 45 && bt(t.input.charCodeAt(t.position + 1)) && F(t, "bad indentation of a sequence entry"), r && t.lineIndent <= e ? We(t) : li(t, e, aa, !1, !0), Me(t, !0), t.lineIndent < e || t.position >= t.length) break;
    t.lineIndent > e && F(t, "bad indentation of a sequence entry"), t.line === n && t.input.charCodeAt(t.position) === 45 && bt(t.input.charCodeAt(t.position + 1)) && F(t, "bad indentation of a sequence entry");
  }
  return ni(t), !0;
}
function Ui(t, e, i, n) {
  let r = !1, o = !1, a = !1, s = !1;
  if (t.firstTabInLine !== -1) return !1;
  let l = t.input.charCodeAt(t.position);
  for (; l !== 0; ) {
    !r && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation"));
    const c = t.input.charCodeAt(t.position + 1), d = t.line;
    if ((l === 63 || l === 58) && bt(c))
      a || (ca(t, t.position, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, Je.BLOCK), a = !0), l === 63 ? (r && We(t), o = !0, r = !0) : (r || (We(t), o = !0), r = !1), t.position += 1, s = !0;
    else {
      r && (We(t), r = !1);
      const y = ri(t);
      if (!li(t, i, oa, !1, !0)) break;
      if (t.line === d) {
        for (l = t.input.charCodeAt(t.position); ci(l); ) l = t.input.charCodeAt(++t.position);
        if (l === 58)
          l = t.input.charCodeAt(++t.position), bt(l) || F(t, "a whitespace character is expected after the key-value separator within a block mapping"), a || (t.events.splice(y.eventsLength, 0, {
            type: Be.MAPPING,
            start: y.position,
            anchorStart: n.anchorStart,
            anchorEnd: n.anchorEnd,
            tagStart: n.tagStart,
            tagEnd: n.tagEnd,
            style: Je.BLOCK
          }), a = !0), o = !0, r = !1, s = !1;
        else if (o) F(t, "expected ':' after a mapping key");
        else
          return n.anchorStart !== ne || n.tagStart !== ne ? (oi(t, y), !1) : !0;
      } else if (o) F(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return n.anchorStart !== ne || n.tagStart !== ne ? (oi(t, y), !1) : !0;
    }
    if (li(t, e, Ai, !0, s) && (s = !1), r || s && (We(t), s = !1), Me(t, !0), l = t.input.charCodeAt(t.position), (t.line === d || t.lineIndent > e) && l !== 0) F(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e) break;
  }
  return o ? (r && We(t), a && ni(t), !0) : !1;
}
function li(t, e, i, n, r, o = !0) {
  var u, b;
  t.depth >= t.maxDepth && F(t, `nesting exceeded maxDepth (${t.maxDepth})`), t.depth++;
  let a = 1, s = !1, l = !1, c = null;
  const d = Do();
  let y = i === Ai || i === aa, h = y;
  const x = y;
  if (n && Me(t, !0) && (s = !0, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : a = -1), a === 1) for (; ; ) {
    const _ = t.input.charCodeAt(t.position), w = ri(t);
    if (s && a !== 1 && (_ === 33 || _ === 38)) break;
    if (s && x && (d.tagStart !== ne || d.anchorStart !== ne) && (_ === 33 || _ === 38)) {
      const g = ri(t), p = e + 1;
      if (Ui(t, t.position - t.lineStart, p, d) && ((u = t.events[g.eventsLength]) == null ? void 0 : u.type) === Be.MAPPING)
        return t.depth--, !0;
      oi(t, g);
    }
    if (s && (_ === 33 && d.tagStart !== ne || _ === 38 && d.anchorStart !== ne) || !hl(t, d, i === ai) && !ul(t, d)) break;
    c === null && (c = w), Me(t, !0) ? (s = !0, h = x, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : a = -1) : h = !1;
  }
  if (h && (h = s || r), a === 1 || i === Ai) {
    const _ = i === ai || i === oa ? e : e + 1, w = t.position - t.lineStart;
    if (a === 1)
      if (h && (zo(t, w, d) || Ui(t, w, _, d)) || wl(t, _, d)) l = !0;
      else {
        const g = t.input.charCodeAt(t.position);
        if (c !== null && o && x && !h && g !== 124 && g !== 62) {
          const p = ri(t), f = c.position - c.lineStart;
          oi(t, c), Ui(t, f, _, Do()) && ((b = t.events[p.eventsLength]) == null ? void 0 : b.type) === Be.MAPPING ? l = !0 : oi(t, p);
        }
        !l && (y && _l(t, _, d) || yl(t, _, d) || ml(t, _, d) || bl(t, d) || xl(t, _, i, d)) && (l = !0);
      }
    else a === 0 && (l = h && zo(t, w, d));
  }
  return y = y && !l, !l && (d.anchorStart !== ne || d.tagStart !== ne || y) && (di(t, ne, ne, d.anchorStart, d.anchorEnd, d.tagStart, d.tagEnd, z.PLAIN), l = !0), t.depth--, l || d.anchorStart !== ne || d.tagStart !== ne;
}
function kl(t) {
  if (t.lineIndent > 0 || t.input.charCodeAt(t.position) !== 37) return !1;
  t.position++;
  const e = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)); ) t.position++;
  const i = t.input.slice(e, t.position), n = [];
  for (i.length === 0 && F(t, "directive name must not be less than one character in length"); t.input.charCodeAt(t.position) !== 0 && !$e(t.input.charCodeAt(t.position)); ) {
    for (; ci(t.input.charCodeAt(t.position)); ) t.position++;
    if (t.input.charCodeAt(t.position) === 35 || $e(t.input.charCodeAt(t.position)) || t.input.charCodeAt(t.position) === 0) break;
    const r = t.position;
    for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)); ) t.position++;
    n.push(t.input.slice(r, t.position));
  }
  if ($e(t.input.charCodeAt(t.position)) && Li(t), i === "YAML") {
    t.directives.some((o) => o.kind === "yaml") && F(t, "duplication of %YAML directive"), n.length !== 1 && F(t, "YAML directive accepts exactly one argument");
    const r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
    r === null && F(t, "ill-formed argument of the YAML directive"), parseInt(r[1], 10) !== 1 && F(t, "unacceptable YAML version of the document"), t.directives.push({
      kind: "yaml",
      version: n[0]
    });
  } else if (i === "TAG") {
    n.length !== 2 && F(t, "TAG directive accepts exactly two arguments");
    const [r, o] = n;
    sa.test(r) || F(t, "ill-formed tag handle (first argument) of the TAG directive"), ra.call(t.tagHandlers, r) && F(t, `there is a previously declared suffix for "${r}" tag handle`), sl.test(o) || F(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagHandlers[r] = o, t.directives.push({
      kind: "tag",
      handle: r,
      prefix: o
    });
  }
  return !0;
}
function El(t) {
  t.directives = [], t.tagHandlers = /* @__PURE__ */ Object.create(null);
  let e = !1;
  for (Me(t, !0); kl(t); )
    e = !0, Me(t, !0);
  let i = !1, n = !1, r = !0;
  if (t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 && bt(t.input.charCodeAt(t.position + 3))) {
    i = !0;
    const s = t.line;
    t.position += 3, Me(t, !0), r = t.line > s;
  } else e && F(t, "directives end mark is expected");
  const o = t.events.length;
  if (!i && t.position === t.lineStart && t.input.charCodeAt(t.position) === 46 && si(t)) {
    t.position += 3, Me(t, !0);
    return;
  }
  if (ll(t, i, !1), li(t, t.lineIndent - 1, Ai, !1, r, r) || We(t), Me(t, !0), t.position === t.lineStart && si(t) && (n = t.input.charCodeAt(t.position) === 46, n)) {
    const s = t.line;
    t.position += 3, Me(t, !0), t.line === s && t.position < t.length && F(t, "end of the stream or a document separator is expected");
  }
  const a = t.events[o];
  (a == null ? void 0 : a.type) === Be.DOCUMENT && (a.explicitEnd = n), ni(t), !n && t.position < t.length && !pn(t) && F(t, "end of the stream or a document separator is expected");
}
function Sl(t, e) {
  const i = t.length, n = {
    ...cn,
    ...e,
    input: `${t}\0`,
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
  }, r = t.indexOf("\0");
  for (r !== -1 && Lt.throwAt(t, r, "null byte is not allowed in input", n.filename); n.position < n.length && (pa(n), Me(n, !0), !(n.position >= n.length)); ) {
    const o = n.position;
    El(n), n.position === o && F(n, "can not read a document");
  }
  return n.events;
}
var Cl = {
  ...cn,
  ...dn
};
function $l(t, e = {}) {
  const i = {
    ...Cl,
    ...e
  }, n = String(t), r = Object.keys(cn), o = Object.keys(dn);
  return il(Sl(n, Qi(i, r)), {
    ...Qi(i, o),
    source: n
  });
}
function Tl(t, e) {
  const i = $l(t, e);
  if (i.length === 0) throw new Lt("expected a document, but the input is empty");
  if (i.length === 1) return i[0];
  throw new Lt("expected a single document in the stream, but found more");
}
var Ut = Symbol("INVALID");
function Bl(t) {
  const e = new Set([
    t.defaultScalarTag,
    t.defaultSequenceTag,
    t.defaultMappingTag
  ].filter((o) => o !== void 0)), i = t.implicitScalarTags, n = t.tags.filter((o) => !(o.nodeKind === "scalar" && o.implicit) && !e.has(o)), r = t.tags.filter((o) => e.has(o));
  return [
    ...i.map((o) => ({
      tag: o,
      implicitTag: !0
    })),
    ...n.map((o) => ({
      tag: o,
      implicitTag: !1
    })),
    ...r.map((o) => ({
      tag: o,
      implicitTag: !0
    }))
  ];
}
function Il(t, e) {
  for (let i = 0, n = t.representTypes.length; i < n; i += 1) {
    const { tag: r, implicitTag: o } = t.representTypes[i];
    if (r.identify(e)) {
      let a;
      return r.matchByTagPrefix ? a = r.representTagName(e) : a = r.tagName, {
        tag: r,
        tagName: a,
        implicitTag: o
      };
    }
  }
  return null;
}
function yi(t, e) {
  if (!t.noRefs && e !== null && typeof e == "object") {
    const c = t.refs.get(e);
    if (c)
      return c.anchor === void 0 && (c.anchor = `ref_${t.refCounter++}`), {
        kind: "alias",
        anchor: c.anchor
      };
  }
  const i = Il(t, e);
  if (!i) {
    if (e === void 0 || t.skipInvalid) return Ut;
    throw new Lt(`unacceptable kind of an object to dump ${Object.prototype.toString.call(e)}`);
  }
  const { tag: n, tagName: r, implicitTag: o } = i, a = o ? r : ta(r);
  if (n.nodeKind === "scalar") return {
    kind: "scalar",
    tag: a,
    tagged: !o,
    style: z.PLAIN,
    value: n.represent(e)
  };
  if (n.nodeKind === "sequence") {
    const c = n.represent(e), d = {
      kind: "sequence",
      tag: a,
      tagged: !o,
      style: Je.BLOCK,
      items: []
    };
    t.noRefs || t.refs.set(e, d);
    for (let y = 0, h = c.length; y < h; y += 1) {
      let x = yi(t, c[y]);
      x === Ut && c[y] === void 0 && (x = yi(t, null)), x !== Ut && d.items.push(x);
    }
    return d;
  }
  const s = n.represent(e), l = {
    kind: "mapping",
    tag: a,
    tagged: !o,
    style: Je.BLOCK,
    items: []
  };
  t.noRefs || t.refs.set(e, l);
  for (const [c, d] of s) {
    const y = yi(t, c);
    if (y === Ut) continue;
    const h = yi(t, d);
    h !== Ut && l.items.push({
      key: y,
      value: h
    });
  }
  return l;
}
function Nl(t, e, i = {}) {
  const n = yi({
    representTypes: Bl(e),
    noRefs: i.noRefs ?? !1,
    skipInvalid: i.skipInvalid ?? !1,
    refs: /* @__PURE__ */ new Map(),
    refCounter: 0
  }, t);
  return [{
    contents: n === Ut ? null : n,
    directives: []
  }];
}
var Al = Symbol("visit:break"), ga = Symbol("visit:skip");
function Ii(t, e, i) {
  const n = e(t, i);
  if (n === Al) return !0;
  if (n === ga) return !1;
  const r = i.depth + 1;
  switch (t.kind) {
    case "sequence":
      for (const o of t.items) if (Ii(o, e, {
        depth: r,
        parent: t,
        isKey: !1
      })) return !0;
      break;
    case "mapping":
      for (const { key: o, value: a } of t.items)
        if (Ii(o, e, {
          depth: r,
          parent: t,
          isKey: !0
        }) || Ii(a, e, {
          depth: r,
          parent: t,
          isKey: !1
        })) return !0;
  }
  return !1;
}
function Wo(t, e) {
  for (const i of t) if (i.contents && Ii(i.contents, e, {
    depth: 0,
    parent: null,
    isKey: !1
  })) return;
}
function Oi(t, e) {
  return (t & 1 << e) !== 0;
}
var Go = {
  applyQuoteFlowKeysOption: Ll,
  doubleQuoteForInvisibles: Rl,
  doubleQuoteWhitespaceOnly: Ml,
  applyForceQuotesOption: Pl,
  tryLongOrMultilineAsBlock: Fl,
  quoteInvalidPlain: Ol,
  fallbackToDoubleQuoted: Dl
};
function ha(t) {
  return t.presenterOptions.quoteStyle === "single" && Oi(t.allowedStylesMask, z.SINGLE_QUOTED) ? z.SINGLE_QUOTED : z.DOUBLE_QUOTED;
}
function Ll(t) {
  t.presenterOptions.quoteFlowKeys && (!t.isKey || !t.flowOnly || t.style !== z.PLAIN || (t.style = z.DOUBLE_QUOTED));
}
function Rl(t) {
  t.style === z.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(t.node.value) && (t.style = z.DOUBLE_QUOTED);
}
function Ml(t) {
  t.style === z.PLAIN && /^\s+$/.test(t.node.value) && (t.style = z.DOUBLE_QUOTED);
}
function Pl(t) {
  t.presenterOptions.forceQuotes && (t.isKey || t.style !== z.PLAIN || t.node.tag === t.presenterOptions.schema.defaultScalarTag.tagName && (t.style = t.node.value.includes(`
`) ? z.DOUBLE_QUOTED : ha(t)));
}
function Fl(t) {
  if (t.style !== z.PLAIN || t.isKey) return;
  const e = t.node.value, i = e.indexOf(`
`) !== -1;
  if (!Oi(t.allowedStylesMask, z.LITERAL_BLOCK)) {
    i && (t.style = z.DOUBLE_QUOTED);
    return;
  }
  const n = t.presenterOptions.lineWidth;
  if (n === -1) {
    i && (t.style = z.LITERAL_BLOCK);
    return;
  }
  const r = Math.max(Math.min(n, 40), n - t.shiftOfContent);
  let o = 0, a = !1;
  for (; o <= e.length; ) {
    let s = e.length;
    const l = e.indexOf(`
`, o);
    l !== -1 && (s = l);
    const c = e.slice(o, s);
    if (c.length > r && c[0] !== " " && / [^ \t]/.test(c) && (a = !0), l === -1) break;
    o = l + 1;
  }
  a ? t.style = z.FOLDED_BLOCK : i && (t.style = z.LITERAL_BLOCK);
}
function Ol(t) {
  t.style === z.PLAIN && !Oi(t.allowedStylesMask, z.PLAIN) && (t.style = ha(t));
}
function Dl(t) {
  Oi(t.allowedStylesMask, t.style) || (t.style = z.DOUBLE_QUOTED);
}
function bi(t, e) {
  return t | 1 << e;
}
var Vl = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]", zl = "[\\n\\r]", Wl = "\\uFEFF", fn = "[ \\t]", ua = `(?:(?!(?:${zl}|${Wl}))${Vl})`, Di = `(?:(?!${fn})${ua})`, ba = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]", ya = "[-?:,\\[\\]{}#&*!|>'\"%@`]", Gl = "[,\\[\\]{}]", en = Di, tn = `(?:(?!${Gl})${Di})`, Kl = `(?:(?:(?!${ya})${Di})|[?:-](?=${en}))`, ql = `(?:(?:(?!${ya})${Di})|[?:-](?=${tn}))`, ma = `(?:(?:(?![:#])${en})|:(?=${en}))#*`, _a = `(?:(?:(?![:#])${tn})|:(?=${tn}))#*`, va = `(?:${fn}*${ma})*`, xa = `(?:${fn}*${_a})*`, wa = `${Kl}#*${va}`, ka = `${ql}#*${xa}`, jl = wa, Hl = ka, Ul = `\\n+${ma}${va}`, Yl = `\\n+${_a}${xa}`, Jl = `${wa}(?:${Ul})*`, Ql = `${ka}(?:${Yl})*`, Xl = new RegExp(`^(?:${Jl})$`, "u"), Zl = new RegExp(`^(?:${Ql})$`, "u"), ed = new RegExp(`^(?:${jl})$`, "u"), td = new RegExp(`^(?:${Hl})$`, "u"), id = new RegExp(`^(?:${ba})*$`, "u"), nd = new RegExp(`^(?:${ba}|\\n)*$`, "u"), rd = new RegExp(`^(?:${ua}|\\n)*$`, "u"), od = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/, gn = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;
function ad(t) {
  const e = t.node.value;
  if (e !== "") {
    if (!(t.isKey ? t.flowOnly ? td : ed : t.flowOnly ? Zl : Xl).test(e) || t.shiftOfFirstLine === 0 && od.test(e)) return !1;
    if (t.shiftOfContent === 0) {
      const n = e.indexOf(`
`);
      if (n !== -1) {
        const r = e.slice(n + 1);
        if (gn.test(r)) return !1;
      }
    }
  }
  const i = t.presenterOptions.schema.resolveImplicitScalarTag(e).tag.tagName;
  return !(!t.node.tagged && i !== t.node.tag || !t.node.tagged && e === "=" && i === t.presenterOptions.schema.defaultScalarTag.tagName);
}
function sd(t) {
  const e = t.node.value;
  if (!(t.isKey ? id : nd).test(e) || /[ \t]\n|\n[ \t]/.test(e)) return !1;
  if (!t.isKey && t.shiftOfContent === 0) {
    const i = e.indexOf(`
`);
    if (i !== -1 && gn.test(e.slice(i + 1))) return !1;
  }
  return !0;
}
function ld(t) {
  if (t.flowOnly || !rd.test(t.node.value)) return !1;
  const e = t.shiftOfContent - t.shiftOfParent;
  return !(e < 1 || e > 9 && /^\n* /.test(t.node.value) || t.shiftOfContent === 0 && gn.test(t.node.value));
}
function dd(t) {
  let e = bi(0, z.DOUBLE_QUOTED);
  ad(t) && (e = bi(e, z.PLAIN)), sd(t) && (e = bi(e, z.SINGLE_QUOTED)), ld(t) && (e = bi(bi(e, z.LITERAL_BLOCK), z.FOLDED_BLOCK)), t.allowedStylesMask = e;
}
function cd(t) {
  switch (t.style) {
    case z.PLAIN:
      return pd(t);
    case z.SINGLE_QUOTED:
      return fd(t);
    case z.LITERAL_BLOCK:
      return gd(t);
    case z.FOLDED_BLOCK:
      return hd(t);
    case z.DOUBLE_QUOTED:
      return ud(t);
  }
}
function pd(t) {
  return Ea(t.node.value, t.shiftOfContent);
}
function fd(t) {
  return `'${Ea(t.node.value, t.shiftOfContent).replace(/'/g, "''")}'`;
}
function gd(t) {
  const e = t.node.value;
  return "|" + Ca(e, t.shiftOfParent, t.shiftOfContent) + $a(Sa(e, t.shiftOfContent));
}
function hd(t) {
  const e = t.node.value, i = t.presenterOptions.lineWidth;
  let n = 1 / 0;
  return i !== -1 && (n = Math.max(Math.min(i, 40), i - t.shiftOfContent)), ">" + Ca(e, t.shiftOfParent, t.shiftOfContent) + $a(Sa(yd(e, n), t.shiftOfContent));
}
function ud(t) {
  return `"${vd(t.node.value)}"`;
}
function Ea(t, e) {
  let i = t.indexOf(`
`);
  if (i === -1) return t;
  const n = " ".repeat(e);
  let r = t.slice(0, i);
  const o = /(\n+)([^\n]*)/g;
  o.lastIndex = i;
  let a;
  for (; a = o.exec(t); ) {
    const s = a[1].length, l = a[2];
    r += `
`.repeat(s + 1) + n + l;
  }
  return r;
}
function Sa(t, e) {
  const i = " ".repeat(e);
  let n = 0, r = "";
  const o = t.length;
  for (; n < o; ) {
    let a;
    const s = t.indexOf(`
`, n);
    s === -1 ? (a = t.slice(n), n = o) : (a = t.slice(n, s + 1), n = s + 1), a.length && a !== `
` && (r += i), r += a;
  }
  return r;
}
function bd(t) {
  return /^\n* /.test(t);
}
function Ca(t, e, i) {
  const n = bd(t) ? String(i - e) : "", r = t[t.length - 1] === `
`;
  return `${n}${r && (t[t.length - 2] === `
` || t === `
`) ? "+" : r ? "" : "-"}
`;
}
function $a(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function nn(t) {
  return t === " " || t === "	";
}
function Ko(t, e) {
  if (t === "" || nn(t[0])) return t;
  const i = / [^ \t]/g;
  let n, r = 0, o, a = 0, s = 0, l = "";
  for (; n = i.exec(t); )
    s = n.index, s - r > e && (o = a > r ? a : s, l += `
${t.slice(r, o)}`, r = o + 1), a = s;
  return l += `
`, t.length - r > e && a > r ? l += `${t.slice(r, a)}
${t.slice(a + 1)}` : l += t.slice(r), l.slice(1);
}
function yd(t, e) {
  const i = /(\n+)([^\n]*)/g;
  let n = t.indexOf(`
`);
  n === -1 && (n = t.length), i.lastIndex = n;
  let r = Ko(t.slice(0, n), e), o = t[0] === `
` || nn(t[0]), a, s;
  for (; s = i.exec(t); ) {
    const l = s[1], c = s[2];
    a = c !== "" && nn(c[0]), r += l + (!o && !a && c !== "" ? `
` : "") + Ko(c, e), o = a;
  }
  return r;
}
var md = /["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;
function _d(t) {
  switch (t) {
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
  const e = t.charCodeAt(0), i = e.toString(16).toUpperCase();
  return e <= 255 ? `\\x${"0".repeat(2 - i.length)}${i}` : `\\u${"0".repeat(4 - i.length)}${i}`;
}
function vd(t) {
  return t.replace(md, _d);
}
var Ri = 10, hn = {
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
  scalarStyleRules: Object.keys(Go).map((t) => Reflect.get(Go, t)),
  tagBeforeAnchor: !1
};
function xd(t) {
  return t.tagged ? t.tag : ta(t.tag);
}
function wd(t) {
  const e = {
    ...hn,
    ...t
  };
  return e.flowSkipColonSpace && (e.quoteFlowKeys = !0), {
    ...e,
    defaultScalarTagName: e.schema.defaultScalarTag.tagName,
    openEnded: !1
  };
}
function rn(t, e) {
  return `
${" ".repeat(t.indent * e)}`;
}
function kd(t, e, i, n, r, o) {
  return {
    node: e,
    parent: i,
    level: n,
    isKey: r,
    flowOnly: o,
    shiftOfParent: n === 0 ? -1 : t.indent * (n - 1),
    shiftOfContent: t.indent * Math.max(1, n),
    shiftOfFirstLine: n === 0 ? 0 : t.indent * n,
    presenterOptions: t,
    allowedStylesMask: 0,
    style: e.style
  };
}
function Ed(t, e, i) {
  let n = "";
  for (let o = 0, a = i.items.length; o < a; o += 1) {
    const s = yt(t, e, i.items[o], i, {}).text;
    o > 0 && (n += `,${t.flowSkipCommaSpace ? "" : " "}`), n += s;
  }
  const r = t.flowBracketPadding && i.items.length > 0 ? " " : "";
  return `[${r}${n}${r}]`;
}
function qo(t, e, i, n) {
  let r = "";
  for (let o = 0, a = i.items.length; o < a; o += 1) {
    const s = yt(t, e + 1, i.items[o], i, {
      block: !0,
      compact: t.seqInlineFirst,
      isblockseq: !0
    }).text;
    (!n || r !== "") && (r += rn(t, e)), s === "" || Ri === s.charCodeAt(0) ? r += "-" : r += "- ", r += s;
  }
  return r;
}
function Sd(t, e, i) {
  let n = "";
  for (const { key: o, value: a } of i.items) {
    let s = "";
    n !== "" && (s += `,${t.flowSkipCommaSpace ? "" : " "}`);
    const l = yt(t, e, o, i, { iskey: !0 }), c = l.text, d = yt(t, e, a, i, {}).text, y = t.flowSkipColonSpace || d === "" ? "" : " ", h = o.kind === "scalar" && l.noBody && (o.tagged || o.anchor !== void 0), x = o.kind === "alias" || h ? " " : "";
    s += `${c}${x}:${y}${d}`, n += s;
  }
  const r = t.flowBracketPadding && n !== "" ? " " : "";
  return `{${r}${n}${r}}`;
}
function Cd(t, e, i, n) {
  let r = "";
  for (let o = 0, a = i.items.length; o < a; o += 1) {
    let s = "";
    (!n || r !== "") && (s += rn(t, e));
    const { key: l, value: c } = i.items[o], d = (l.kind === "mapping" || l.kind === "sequence") && l.style === Je.BLOCK && l.items.length !== 0 || l.kind === "scalar" && (l.style === z.LITERAL_BLOCK || l.style === z.FOLDED_BLOCK), y = d ? yt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      isblockseq: !on(t, l, e + 1)
    }) : yt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      iskey: !0
    }), h = y.text, x = l.kind === "scalar" && l.value.indexOf(`
`) !== -1, u = h.length > 1024 && /^[\s\S]{1025}/u.test(h), b = d || x || u;
    b && (h && Ri === h.charCodeAt(0) ? s += "?" : s += "? "), s += h, b && (s += rn(t, e));
    const _ = yt(t, e + 1, c, i, {
      block: !0,
      compact: b,
      isblockseq: b && !on(t, c, e + 1)
    }).text, w = l.kind === "scalar" && y.noBody && (l.tagged || l.anchor !== void 0), g = !b && (l.kind === "alias" || w) ? " " : "";
    _ === "" || Ri === _.charCodeAt(0) ? s += `${g}:` : s += `${g}: `, s += _, r += s;
  }
  return r;
}
function on(t, e, i) {
  return e.kind === "alias" ? !0 : e.tagged || e.anchor !== void 0 || t.indent < 2 && i > 0;
}
function yt(t, e, i, n, r) {
  if (i.kind === "alias")
    return t.openEnded = !1, {
      text: `*${i.anchor}`,
      noBody: !1
    };
  const { block: o = !1, iskey: a = !1, isblockseq: s = !1 } = r;
  let l = r.compact ?? !1;
  const c = i.anchor !== void 0;
  on(t, i, e) && (l = !1);
  let d, y = i.tagged;
  const h = o && (i.kind === "mapping" || i.kind === "sequence") && i.style === Je.BLOCK && i.items.length !== 0;
  if (i.kind === "mapping")
    h ? d = Cd(t, e, i, l) : d = Sd(t, e, i);
  else if (i.kind === "sequence")
    h ? t.seqNoIndent && !s && e > 0 ? d = qo(t, e - 1, i, l) : d = qo(t, e, i, l) : d = Ed(t, e, i);
  else {
    const b = kd(t, i, n, e, a, !o);
    dd(b);
    for (const _ of t.scalarStyleRules) _(b);
    d = cd(b), t.openEnded = (b.style === z.LITERAL_BLOCK || b.style === z.FOLDED_BLOCK) && (i.value === `
` || i.value.endsWith(`

`)), y = i.tagged || d === "" && b.flowOnly && (n == null ? void 0 : n.kind) === "sequence" && !c || b.style !== z.PLAIN && i.tag !== t.defaultScalarTagName;
  }
  (i.kind === "mapping" || i.kind === "sequence") && !h && (t.openEnded = !1), h && l && e > 0 && t.indent > 2 && (d = `${" ".repeat(t.indent - 2)}${d}`);
  const x = d === "";
  let u = d;
  if (y || c) {
    const b = [], _ = y ? xd(i) : null, w = c ? `&${i.anchor}` : null;
    t.tagBeforeAnchor ? (_ !== null && b.push(_), w !== null && b.push(w)) : (w !== null && b.push(w), _ !== null && b.push(_));
    const g = d === "" || d.charCodeAt(0) === Ri ? "" : " ";
    u = `${b.join(" ")}${g}${d}`;
  }
  return {
    text: u,
    noBody: x
  };
}
function $d(t) {
  return (t.kind === "sequence" || t.kind === "mapping") && t.style === Je.BLOCK && t.items.length !== 0 && !t.tagged && t.anchor === void 0;
}
function Td(t) {
  let e = "";
  for (const i of t.directives) {
    if (i.kind === "yaml") {
      e += `%YAML ${i.version}
`;
      continue;
    }
    const { handle: n, prefix: r } = i;
    e += `%TAG ${n} ${r}
`;
  }
  return e;
}
function Bd(t, e) {
  const i = wd(e);
  let n = "", r = !1;
  for (let o = 0; o < t.length; o += 1) {
    const a = t[o];
    i.openEnded = !1;
    const s = Td(a), l = s !== "", c = a.explicitStart || l || o > 0 && !r;
    if (n += s, a.contents === null)
      c && (n += `---
`);
    else if (c) {
      const d = yt(i, 0, a.contents, null, {
        block: !0,
        compact: !0
      }).text, y = d === "" ? "" : l || $d(a.contents) ? `
` : " ";
      n += `---${y}${d}
`;
    } else n += yt(i, 0, a.contents, null, {
      block: !0,
      compact: !0
    }).text + `
`;
    r = a.explicitEnd || i.openEnded, r && (n += `...
`);
  }
  return n;
}
var Id = {
  ...hn,
  schema: Os,
  skipInvalid: !1,
  noRefs: !1,
  flowLevel: -1,
  sortKeys: !1,
  transform: () => {
  }
};
function Nd(t, e) {
  const i = String(t), n = String(e);
  return i < n ? -1 : i > n ? 1 : 0;
}
function Ad(t, e = {}) {
  const i = {
    ...Id,
    ...e
  }, n = Nl(t, i.schema, {
    noRefs: i.noRefs,
    skipInvalid: i.skipInvalid
  });
  if (i.flowLevel >= 0 && Wo(n, (r, o) => {
    if (!(o.depth < i.flowLevel))
      return (r.kind === "sequence" || r.kind === "mapping") && (r.style = Je.FLOW), ga;
  }), i.sortKeys) {
    const r = i.sortKeys === !0 ? Nd : i.sortKeys;
    Wo(n, (o) => {
      o.kind === "mapping" && o.items.sort((a, s) => r(a.key.kind === "scalar" ? a.key.value : "", s.key.kind === "scalar" ? s.key.value : ""));
    });
  }
  return i.transform(n), Bd(n, {
    ...Qi(i, Object.keys(hn)),
    schema: i.schema
  });
}
console.info(
  "%c⚡ Energy Station Panel v1.5.2 Loaded ⚡",
  "background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
class Ta extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._hass = null, this._config = null, this._isDrawerOpen = !1, this._scale = 1, this._cardNode = null, this._editorNode = null, this._hasAttemptedAutoImport = !1;
  }
  set hass(e) {
    this._hass = e, this._cardNode && (this._cardNode.hass = e), this._editorNode && (this._editorNode.hass = e), this._updateHaStatusBadge(), this._hasAttemptedAutoImport || (this._hasAttemptedAutoImport = !0, this._autoDiscoverLovelaceConfig());
  }
  connectedCallback() {
    this._loadConfig(), this._render(), this._bindEvents(), this._hass && (this._cardNode && (this._cardNode.hass = this._hass), this._editorNode && (this._editorNode.hass = this._hass)), setTimeout(() => {
      this._cardNode && typeof this._cardNode._updateFlowPaths == "function" && this._cardNode._updateFlowPaths();
    }, 120);
  }
  _loadConfig() {
    try {
      const e = localStorage.getItem("energy_station_app_config");
      e && (this._config = JSON.parse(e));
    } catch {
    }
    this._config || (this._config = JSON.parse(JSON.stringify(fe))), this._config.appearance || (this._config.appearance = JSON.parse(JSON.stringify(fe.appearance || {
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
    var e, i, n, r;
    if (this._hass)
      try {
        const o = localStorage.getItem("energy_station_app_config");
        if (o) {
          const a = JSON.parse(o);
          if ((n = (i = (e = a.solar) == null ? void 0 : e.strings) == null ? void 0 : i[0]) != null && n.voltage_entity && ((r = a.inverter) != null && r.voltage_entity))
            return;
        }
        await this._importFromLovelace(!1);
      } catch (o) {
        console.warn("Lovelace auto-import skipped:", o);
      }
  }
  async _importFromLovelace(e = !0) {
    var i, n;
    if (!this._hass) {
      e && alert("Немає підключення до Home Assistant");
      return;
    }
    try {
      const r = [], o = (a) => {
        for (const s of a || [])
          if (s.cards) {
            for (const l of s.cards)
              if (l.type && (l.type === "custom:energy-station-card" || l.type.includes("energy-station-card")) && r.push(l), l.cards && Array.isArray(l.cards))
                for (const c of l.cards)
                  c.type && (c.type === "custom:energy-station-card" || c.type.includes("energy-station-card")) && r.push(c);
          }
      };
      try {
        const a = await this._hass.callWS({ type: "lovelace/config" });
        o(a == null ? void 0 : a.views);
      } catch {
      }
      if (r.length === 0 && this._hass.panels) {
        const a = Object.values(this._hass.panels).filter((s) => s.component_name === "lovelace");
        for (const s of a)
          if (s.url_path && s.url_path !== "energy-station")
            try {
              const l = await this._hass.callWS({ type: "lovelace/config", url_path: s.url_path });
              if (o(l == null ? void 0 : l.views), r.length > 0) break;
            } catch {
            }
      }
      if (r.length > 0) {
        const a = r[0], s = JSON.parse(JSON.stringify(a));
        delete s.type, s.appearance = {
          ...fe.appearance,
          ...((i = this._config) == null ? void 0 : i.appearance) || {},
          ...s.appearance || {}
        }, this._config = s, this._saveConfig(), this._render(), this._bindEvents(), e && alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");
        return;
      }
      if (typeof window < "u" && ((n = window.parent) != null && n.document)) {
        const a = window.parent.document.querySelectorAll("energy-station-card");
        for (const s of a)
          if (s !== this._cardNode && s._config) {
            this._config = JSON.parse(JSON.stringify(s._config)), this._saveConfig(), this._render(), this._bindEvents(), e && alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");
            return;
          }
      }
      e && alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".');
    } catch (r) {
      console.error("Import from Lovelace error:", r), e && alert("Помилка імпорту: " + r.message);
    }
  }
  _render() {
    var n, r, o;
    const e = this._config, i = e.appearance;
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
              <span class="panel-brand-badge">PRO APP v1.5.2</span>
            </div>
          </div>
        </div>

        <div class="panel-controls">
          <!-- 3D / 2D View Toggle in top bar -->
          <button class="panel-pill-btn" id="btnPanelViewToggle" title="Змінити режим 3D / 2D">
            ${(((n = this._cardNode) == null ? void 0 : n._viewMode) || ((r = this._config) == null ? void 0 : r.view_mode)) === "schematic" ? "⚡ 2D Схема" : "🧊 3D Режим"}
          </button>

          <!-- Zoom Controls -->
          <div style="display: flex; align-items: center; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 2px 4px; gap: 2px;">
            <button class="panel-pill-btn" id="btnZoomOut" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">−</button>
            <span id="txtZoomVal" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; min-width: 40px; text-align: center; color: #38bdf8; font-weight: 700;">${Math.round(this._scale * 100)}%</span>
            <button class="panel-pill-btn" id="btnZoomIn" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">+</button>
          </div>

          <!-- Quick Theme Toggle -->
          <button class="panel-pill-btn" id="btnQuickTheme" title="Змінити тему">
            ${e.theme_mode === "light" ? "☀️ Світла" : ((o = e.appearance) == null ? void 0 : o.theme_preset) === "oled_black" ? "⬛ OLED" : "🌙 Темна"}
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
    var a, s, l, c, d, y, h, x, u, b, _, w, g, p, f, S;
    const e = this.shadowRoot;
    (a = e.getElementById("btnOpenDrawer")) == null || a.addEventListener("click", () => this._openDrawer()), (s = e.getElementById("btnCloseDrawer")) == null || s.addEventListener("click", () => this._closeDrawer()), (l = e.getElementById("btnCancelDrawer")) == null || l.addEventListener("click", () => this._closeDrawer()), (c = e.getElementById("drawerBackdrop")) == null || c.addEventListener("click", () => this._closeDrawer()), (d = e.getElementById("btnSaveDrawer")) == null || d.addEventListener("click", () => {
      this._updateCardConfig(), this._closeDrawer(), alert("✓ Налаштування збережено!");
    }), (y = this._editorNode) == null || y.addEventListener("config-changed", (v) => {
      var B;
      const C = v.detail.config;
      C.appearance = {
        ...fe.appearance,
        ...((B = this._config) == null ? void 0 : B.appearance) || {},
        ...C.appearance || {}
      }, this._config = C, this._cardNode && this._cardNode.setConfig(this._config), this._saveConfig();
    }), (h = e.getElementById("btnPanelViewToggle")) == null || h.addEventListener("click", () => {
      var $, k;
      const C = ((($ = this._cardNode) == null ? void 0 : $._viewMode) || ((k = this._config) == null ? void 0 : k.view_mode) || "3d") === "3d" ? "schematic" : "3d";
      this._cardNode && typeof this._cardNode._toggleViewMode == "function" && this._cardNode._toggleViewMode(C), this._config.view_mode = C, this._saveConfig();
      const B = e.getElementById("btnPanelViewToggle");
      B && (B.innerHTML = C === "schematic" ? "⚡ 2D Схема" : "🧊 3D Режим");
    }), (x = e.getElementById("btnZoomIn")) == null || x.addEventListener("click", () => this._changeScale(this._scale + 0.1)), (u = e.getElementById("btnZoomOut")) == null || u.addEventListener("click", () => this._changeScale(this._scale - 0.1)), (b = e.getElementById("btnFullscreen")) == null || b.addEventListener("click", () => {
      var v, C, B;
      document.fullscreenElement ? (B = document.exitFullscreen) == null || B.call(document) : (C = (v = document.documentElement).requestFullscreen) == null || C.call(v);
    }), (_ = e.getElementById("btnQuickTheme")) == null || _.addEventListener("click", () => {
      var O;
      const v = ["cyber_dark", "oled_black", "clean_light"], C = ((O = this._config.appearance) == null ? void 0 : O.theme_preset) || "cyber_dark", B = (v.indexOf(C) + 1) % v.length, $ = v[B];
      this._config.appearance.theme_preset = $, this._config.theme_mode = $ === "clean_light" ? "light" : "dark", this._updateCardConfig();
      const k = e.getElementById("btnQuickTheme");
      k && (k.innerText = $ === "clean_light" ? "☀️ Світла" : $ === "oled_black" ? "⬛ OLED" : "🌙 Темна");
    }), (w = e.getElementById("btnSyncFromLovelace")) == null || w.addEventListener("click", () => {
      this._importFromLovelace(!0);
    });
    const i = e.getElementById("yamlModal"), n = e.getElementById("yamlCodeArea");
    (g = e.getElementById("btnOpenYamlModal")) == null || g.addEventListener("click", () => {
      if (i && n) {
        try {
          n.value = Ad(this._config);
        } catch {
          n.value = JSON.stringify(this._config, null, 2);
        }
        i.classList.add("active");
      }
    }), (p = e.getElementById("btnCloseYamlModal")) == null || p.addEventListener("click", () => {
      i == null || i.classList.remove("active");
    }), (f = e.getElementById("btnCopyCurrentYaml")) == null || f.addEventListener("click", () => {
      var v;
      n && ((v = navigator.clipboard) == null || v.writeText(n.value), alert("✓ Скопійовано в буфер обміну!"));
    }), (S = e.getElementById("btnApplyYaml")) == null || S.addEventListener("click", () => {
      var v;
      if (n && n.value.trim())
        try {
          const C = n.value.trim();
          let B = null;
          C.startsWith("{") ? B = JSON.parse(C) : B = Tl(C), B && typeof B == "object" && (B.type && delete B.type, B.appearance = {
            ...fe.appearance,
            ...((v = this._config) == null ? void 0 : v.appearance) || {},
            ...B.appearance || {}
          }, this._config = B, this._saveConfig(), this._render(), this._bindEvents(), i == null || i.classList.remove("active"), alert("✓ Конфігурацію успішно застосовано!"));
        } catch (C) {
          alert("Помилка формату YAML / JSON: " + C.message);
        }
    }), e.querySelectorAll("#mainFontGrid .font-tile").forEach((v) => {
      v.addEventListener("click", () => {
        e.querySelectorAll("#mainFontGrid .font-tile").forEach((C) => C.classList.remove("active")), v.classList.add("active"), this._config.appearance.font_family = v.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#monoFontGrid .font-tile").forEach((v) => {
      v.addEventListener("click", () => {
        e.querySelectorAll("#monoFontGrid .font-tile").forEach((C) => C.classList.remove("active")), v.classList.add("active"), this._config.appearance.mono_font_family = v.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((v) => {
      v.addEventListener("click", () => {
        e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((C) => C.classList.remove("active")), v.classList.add("active"), this._config.appearance.power_font_size = v.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((v) => {
      v.addEventListener("click", () => {
        e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((C) => C.classList.remove("active")), v.classList.add("active"), this._config.appearance.label_font_size = v.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#themePresetSeg .seg-btn").forEach((v) => {
      v.addEventListener("click", () => {
        e.querySelectorAll("#themePresetSeg .seg-btn").forEach((B) => B.classList.remove("active")), v.classList.add("active");
        const C = v.dataset.val;
        this._config.appearance.theme_preset = C, this._config.theme_mode = C === "clean_light" ? "light" : "dark", this._updateCardConfig();
      });
    });
    const r = e.getElementById("sliderCardScale"), o = e.getElementById("lblCardScale");
    r && r.addEventListener("input", (v) => {
      const C = parseFloat(v.target.value);
      o && (o.innerText = `${Math.round(C * 100)}%`), this._changeScale(C);
    });
  }
  _openDrawer() {
    var i, n;
    this._isDrawerOpen = !0;
    const e = this.shadowRoot;
    (i = e.getElementById("settingsDrawer")) == null || i.classList.add("active"), (n = e.getElementById("drawerBackdrop")) == null || n.classList.add("active");
  }
  _closeDrawer() {
    var i, n;
    this._isDrawerOpen = !1;
    const e = this.shadowRoot;
    (i = e.getElementById("settingsDrawer")) == null || i.classList.remove("active"), (n = e.getElementById("drawerBackdrop")) == null || n.classList.remove("active");
  }
  _changeScale(e) {
    const i = Math.max(0.65, Math.min(1.8, Math.round(e * 100) / 100));
    this._scale = i, this._config.card_scale = i;
    const n = this.shadowRoot.getElementById("txtZoomVal");
    n && (n.innerText = `${Math.round(i * 100)}%`), this._updateCardConfig();
  }
  _updateHaStatusBadge() {
    var i;
    const e = (i = this.shadowRoot) == null ? void 0 : i.getElementById("haStatusText");
    if (e)
      if (this._hass) {
        const n = Object.keys(this._hass.states || {}).length;
        e.innerText = `HA Live (${n} сенсорів)`;
      } else
        e.innerText = "Демо режим";
  }
}
console.info(
  "%c⚡ Energy Station Card v1.5.2 Loaded ⚡",
  "background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
const jo = {
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
    kwh_unit: "кВт·год",
    view_3d: "3D Макет",
    view_schematic: "2D Схема",
    view_toggle_to_2d: "Перемкнути на 2D Схему",
    view_toggle_to_3d: "Перемкнути на 3D Реалістичний макет",
    boiler_heating: "Нагрів активний",
    boiler_off_blackout: "Вимкнено для економії",
    boiler_idle: "Очікування (ГВП)",
    rack_title: "Стійка"
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
    kwh_unit: "kWh",
    view_3d: "3D Realistic",
    view_schematic: "2D Schematic",
    view_toggle_to_2d: "Switch to 2D Schematic",
    view_toggle_to_3d: "Switch to 3D Realistic",
    boiler_heating: "Heating Active",
    boiler_off_blackout: "Disabled for Power Saving",
    boiler_idle: "Standby (DHW)",
    rack_title: "Rack"
  }
};
class Ld extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._initialized = !1, this._themeMode = "dark", this._language = "uk", this._scale = 1, this._viewMode = "3d", this._nodes = {}, this._resizeObserver = null;
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
    let e = this, i = null;
    for (; e; ) {
      if (e.tagName && (e.tagName.toLowerCase() === "hui-card-options" || e.tagName.toLowerCase() === "hui-card-edit-mode")) {
        i = e;
        break;
      }
      if (e.parentElement)
        e = e.parentElement;
      else if (e.parentNode)
        e = e.parentNode;
      else if (e.getRootNode && e.getRootNode().host)
        e = e.getRootNode().host;
      else
        break;
    }
    if (!i && typeof document < "u") {
      const o = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
      for (const a of o)
        if (a.contains(this) || (n = a.shadowRoot) != null && n.contains(this) || o.length === 1) {
          i = a;
          break;
        }
    }
    if (i) {
      if (typeof i._editCard == "function") {
        i._editCard();
        return;
      }
      const o = ((r = i.shadowRoot) == null ? void 0 : r.querySelector("mwc-button, ha-button, button")) || i.querySelector("mwc-button, ha-button, button");
      if (o) {
        o.click();
        return;
      }
      if (i.path !== void 0) {
        const a = new CustomEvent("ll-edit-card", {
          bubbles: !0,
          composed: !0,
          detail: { path: i.path }
        });
        i.dispatchEvent(a);
        return;
      }
    }
    if (typeof window < "u") {
      try {
        typeof sessionStorage < "u" && sessionStorage.setItem("energy_station_auto_edit", "1");
      } catch {
      }
      const o = new URL(window.location.href);
      o.searchParams.has("edit") ? setTimeout(() => {
        var s, l;
        const a = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
        for (const c of a)
          if (c.contains(this) || (s = c.shadowRoot) != null && s.contains(this) || a.length === 1) {
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
      }, 500) : (o.searchParams.set("edit", "1"), window.location.href = o.toString());
    }
  }
  static getConfigElement() {
    return document.createElement("energy-station-card-editor");
  }
  static getStubConfig() {
    return JSON.parse(JSON.stringify(fe));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(e)), n = JSON.parse(JSON.stringify(fe));
    this._config = this._deepMerge(n, i);
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = r || this._config.theme_mode || "dark";
    const o = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = o || this._config.language || "uk";
    const a = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = a ? parseFloat(a) : this._config.card_scale || this._config.scale || 1;
    const s = typeof localStorage < "u" ? localStorage.getItem("energy_station_view_mode") : null;
    this._viewMode = s || this._config.view_mode || fe.view_mode || "3d", this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var o, a;
    let i = typeof e == "number" ? e : this._scale + (e || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const n = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".energy-station-container");
    n && (n.style.setProperty("--es-card-scale", i.toString()), n.style.zoom = i.toString());
    const r = (a = this.shadowRoot) == null ? void 0 : a.getElementById("headerZoomVal");
    r && (r.innerText = `${Math.round(i * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, i) {
    const n = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!i || typeof i != "object") return n;
    for (const r of Object.keys(i)) {
      const o = i[r], a = e ? e[r] : void 0;
      o && typeof o == "object" && !Array.isArray(o) ? n[r] = this._deepMerge(a || {}, o) : n[r] = o;
    }
    return n;
  }
  _getEntityState(e) {
    var s;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const i = this._hass.states[e], r = String(i.state).trim().replace(",", "."), o = parseFloat(r), a = ((s = i.attributes) == null ? void 0 : s.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(o) ? 0 : o,
      unit: a,
      attributes: i.attributes
    };
  }
  _t(e) {
    var n, r;
    const i = this._language || "uk";
    return ((n = jo[i]) == null ? void 0 : n[e]) || ((r = jo.uk) == null ? void 0 : r[e]) || e;
  }
  _toggleTheme(e) {
    const i = e || (this._themeMode === "light" ? "dark" : "light");
    this._themeMode = i;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_theme", i);
    } catch {
    }
    this._applyTheme();
  }
  _toggleLanguage(e) {
    const i = e || (this._language === "en" ? "uk" : "en");
    this._language = i;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_lang", i);
    } catch {
    }
    this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _toggleViewMode(e) {
    const i = e || (this._viewMode === "3d" ? "schematic" : "3d");
    this._viewMode = i;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_view_mode", i);
    } catch {
    }
    this._applyViewMode(), this._hass && this._updateValues();
  }
  _applyViewMode() {
    var l, c, d, y, h, x;
    const e = this._viewMode === "3d", i = (l = this.shadowRoot) == null ? void 0 : l.getElementById("realistic3dView"), n = (c = this.shadowRoot) == null ? void 0 : c.getElementById("schematicView"), r = (d = this.shadowRoot) == null ? void 0 : d.getElementById("headerViewToggle"), o = (y = this.shadowRoot) == null ? void 0 : y.getElementById("energyFlowCanvas"), a = (h = this.shadowRoot) == null ? void 0 : h.getElementById("batBranchBadgesContainer");
    i && (i.style.display = e ? "block" : "none"), n && (n.style.display = e ? "none" : "block"), o && (o.style.display = e ? "none" : "block"), a && (a.style.display = e ? "none" : "block"), r && (r.innerHTML = `<span>${e ? "🧊 3D" : "⚡ 2D"}</span>`, r.title = e ? this._t("view_toggle_to_2d") : this._t("view_toggle_to_3d"));
    const s = (x = this.shadowRoot) == null ? void 0 : x.querySelector(".energy-station-container");
    s && (s.classList.toggle("view-mode-3d", e), s.classList.toggle("view-mode-schematic", !e));
  }
  _applyTheme() {
    var a;
    const e = (a = this.shadowRoot) == null ? void 0 : a.querySelector(".energy-station-container");
    if (!e) return;
    const i = this._themeMode === "light";
    e.classList.toggle("theme-light", i);
    const n = this.shadowRoot.getElementById("headerThemeToggle");
    n && (n.innerHTML = i ? "☀️" : "🌙", n.setAttribute("title", i ? this._t("theme_dark") : this._t("theme_light")));
    const r = this.shadowRoot.getElementById("btnThemeDark"), o = this.shadowRoot.getElementById("btnThemeLight");
    r && o && (r.classList.toggle("active", !i), o.classList.toggle("active", i));
  }
  _formatPower(e, i = 0) {
    const n = this._language === "en" ? "kW" : "кВт";
    if (!e) return { num: i.toFixed(3), kw: i, str: `${i.toFixed(3)} ${n}` };
    let r = e.val;
    return e.unit === "W" && (r = r / 1e3), {
      num: r.toFixed(3),
      kw: r,
      str: `${r.toFixed(3)} ${n}`
    };
  }
  _fireMoreInfo(e) {
    if (!e) return;
    const i = new CustomEvent("hass-more-info", {
      detail: { entityId: e },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(i);
  }
  _renderCardSkeleton() {
    var l, c, d, y, h, x, u, b, _, w, g, p, f, S, v, C, B, $;
    const e = this._config || fe;
    this._initialized = !0;
    const i = e.appearance || fe.appearance || {}, n = {
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
    }, o = {
      compact: "18px",
      normal: "22px",
      large: "28px",
      huge: "34px"
    }, a = {
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
          --flow-speed: ${((l = e.animations) == null ? void 0 : l.speed) || 1.2}s;
          --es-power-font-size: ${o[i.power_font_size] || "22px"};
          --es-label-font-size: ${a[i.label_font_size] || "11.5px"};
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
          max-width: var(--es-card-max-width, ${e.max_width || "1400px"});
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


/* =========================================================================
   3D REALISTIC VIEWPORT & HARDWARE STYLING (ENERGY STATION PRO 3D)
   ========================================================================= */

.es-view-3d {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}

.es-3d-container {
  position: relative;
  width: 100%;
  border-radius: 20px;
  padding: 16px 20px;
  background: #040814;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 940px;
  overflow: hidden;
}

/* Dynamic SVG Conduits */
.flow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.conduit-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.07);
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.conduit-pulse {
  fill: none;
  stroke-width: 3.5;
  stroke-linecap: round;
  stroke-dasharray: 8 16;
  animation: flowParticles 1.4s linear infinite;
  transition: stroke 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
}

.conduit-pulse.pulse-reverse {
  animation: flowParticlesReverse 1.4s linear infinite;
}

@keyframes flowParticles {
  from { stroke-dashoffset: 48; }
  to { stroke-dashoffset: 0; }
}

@keyframes flowParticlesReverse {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 48; }
}

/* 3D Hardware Glows */
.card-3d-glow {
  box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.8),
              0 0 20px -4px rgba(2, 132, 199, 0.12);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-3d-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 45px -8px rgba(0, 0, 0, 0.9),
              0 0 28px 0px rgba(56, 189, 248, 0.22);
}

.card-discharge-glow {
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.95),
              0 0 32px -4px rgba(239, 68, 68, 0.35) !important;
  border-color: rgba(239, 68, 68, 0.55) !important;
}

/* Wind Turbine Rotors Centered Spin */
.rotor-spin-normal {
  transform-origin: 0px 0px;
  animation: spin360 1.8s linear infinite;
}
.rotor-spin-slow {
  transform-origin: 0px 0px;
  animation: spin360 4.2s linear infinite;
}
.rotor-spin-fast {
  transform-origin: 0px 0px;
  animation: spin360 0.75s linear infinite;
}
.rotor-spin-idle {
  transform-origin: 0px 0px;
  animation: spin360 9.0s linear infinite;
}

@keyframes spin360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.glass-card {
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.92) 0%, rgba(7, 12, 23, 0.98) 100%);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hardware-render {
  filter: drop-shadow(0 12px 20px rgba(0,0,0,0.7));
}

/* Layout Utilities inside 3D View */
.es-view-3d .grid { display: grid; }
.es-view-3d .flex { display: flex; }
.es-view-3d .flex-col { flex-direction: column; }
.es-view-3d .flex-row { flex-direction: row; }
.es-view-3d .flex-1 { flex: 1 1 0%; }
.es-view-3d .flex-shrink-0 { flex-shrink: 0; }
.es-view-3d .flex-wrap { flex-wrap: wrap; }
.es-view-3d .items-center { align-items: center; }
.es-view-3d .justify-between { justify-content: space-between; }
.es-view-3d .justify-center { justify-content: center; }
.es-view-3d .text-center { text-align: center; }
.es-view-3d .text-right { text-align: right; }
.es-view-3d .relative { position: relative; }
.es-view-3d .absolute { position: absolute; }
.es-view-3d .overflow-hidden { overflow: hidden; }
.es-view-3d .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.es-view-3d .whitespace-nowrap { white-space: nowrap; }
.es-view-3d .uppercase { text-transform: uppercase; }
.es-view-3d .w-full { width: 100%; }
.es-view-3d .h-auto { height: auto; }
.es-view-3d .min-w-0 { min-width: 0px; }

/* Grid Columns */
.es-view-3d .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.es-view-3d .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.es-view-3d .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.es-view-3d .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

/* Gaps */
.es-view-3d .gap-1 { gap: 4px; }
.es-view-3d .gap-1.5 { gap: 6px; }
.es-view-3d .gap-2 { gap: 8px; }
.es-view-3d .gap-2.5 { gap: 10px; }
.es-view-3d .gap-3 { gap: 12px; }
.es-view-3d .gap-3.5 { gap: 14px; }
.es-view-3d .gap-4 { gap: 16px; }
.es-view-3d .gap-5 { gap: 20px; }
.es-view-3d .gap-6 { gap: 24px; }

/* Padding & Margin */
.es-view-3d .p-1.5 { padding: 6px; }
.es-view-3d .p-2 { padding: 8px; }
.es-view-3d .p-2.5 { padding: 10px; }
.es-view-3d .p-3 { padding: 12px; }
.es-view-3d .p-4 { padding: 16px; }
.es-view-3d .p-5 { padding: 20px; }
.es-view-3d .px-1.5 { padding-left: 6px; padding-right: 6px; }
.es-view-3d .px-2 { padding-left: 8px; padding-right: 8px; }
.es-view-3d .px-2.5 { padding-left: 10px; padding-right: 10px; }
.es-view-3d .py-0.5 { padding-top: 2px; padding-bottom: 2px; }
.es-view-3d .py-1 { padding-top: 4px; padding-bottom: 4px; }
.es-view-3d .py-1.5 { padding-top: 6px; padding-bottom: 6px; }
.es-view-3d .pb-1 { padding-bottom: 4px; }
.es-view-3d .pb-1.5 { padding-bottom: 6px; }
.es-view-3d .pt-1.5 { padding-top: 6px; }
.es-view-3d .pt-2 { padding-top: 8px; }
.es-view-3d .mb-0.5 { margin-bottom: 2px; }
.es-view-3d .mb-1 { margin-bottom: 4px; }
.es-view-3d .mb-1.5 { margin-bottom: 6px; }
.es-view-3d .mb-2 { margin-bottom: 8px; }
.es-view-3d .mb-2.5 { margin-bottom: 10px; }
.es-view-3d .mb-3 { margin-bottom: 12px; }
.es-view-3d .mt-0.5 { margin-top: 2px; }
.es-view-3d .mt-1 { margin-top: 4px; }
.es-view-3d .mt-2 { margin-top: 8px; }
.es-view-3d .mt-2.5 { margin-top: 10px; }
.es-view-3d .my-1 { margin-top: 4px; margin-bottom: 4px; }
.es-view-3d .my-4 { margin-top: 16px; margin-bottom: 16px; }

/* Rounded */
.es-view-3d .rounded { border-radius: 4px; }
.es-view-3d .rounded-md { border-radius: 6px; }
.es-view-3d .rounded-lg { border-radius: 8px; }
.es-view-3d .rounded-xl { border-radius: 12px; }
.es-view-3d .rounded-2xl { border-radius: 16px; }
.es-view-3d .rounded-3xl { border-radius: 24px; }
.es-view-3d .rounded-full { border-radius: 9999px; }

/* Borders */
.es-view-3d .border { border-width: 1px; border-style: solid; }
.es-view-3d .border-b { border-bottom-width: 1px; border-bottom-style: solid; }
.es-view-3d .border-t { border-top-width: 1px; border-top-style: solid; }
.es-view-3d .border-slate-800 { border-color: #1e293b; }
.es-view-3d .border-slate-800/80 { border-color: rgba(30, 41, 59, 0.8); }
.es-view-3d .border-emerald-500/20 { border-color: rgba(16, 185, 129, 0.2); }
.es-view-3d .border-emerald-500/30 { border-color: rgba(16, 185, 129, 0.3); }
.es-view-3d .border-emerald-500/40 { border-color: rgba(16, 185, 129, 0.4); }
.es-view-3d .border-amber-500/20 { border-color: rgba(245, 158, 11, 0.2); }
.es-view-3d .border-cyan-500/20 { border-color: rgba(6, 182, 212, 0.2); }
.es-view-3d .border-cyan-500/25 { border-color: rgba(6, 182, 212, 0.25); }
.es-view-3d .border-cyan-500/30 { border-color: rgba(6, 182, 212, 0.3); }
.es-view-3d .border-purple-500/25 { border-color: rgba(168, 85, 247, 0.25); }
.es-view-3d .border-purple-500/30 { border-color: rgba(168, 85, 247, 0.3); }
.es-view-3d .border-sky-400/30 { border-color: rgba(56, 189, 248, 0.3); }
.es-view-3d .border-sky-500/20 { border-color: rgba(14, 165, 233, 0.2); }
.es-view-3d .border-sky-500/30 { border-color: rgba(14, 165, 233, 0.3); }
.es-view-3d .border-sky-800/40 { border-color: rgba(7, 89, 133, 0.4); }
.es-view-3d .border-rose-500/30 { border-color: rgba(244, 63, 94, 0.3); }
.es-view-3d .border-rose-500/50 { border-color: rgba(244, 63, 94, 0.5); }
.es-view-3d .border-red-500/30 { border-color: rgba(239, 68, 68, 0.3); }
.es-view-3d .border-red-500/40 { border-color: rgba(239, 68, 68, 0.4); }

/* Backgrounds */
.es-view-3d .bg-slate-900 { background-color: #0f172a; }
.es-view-3d .bg-slate-900/70 { background-color: rgba(15, 23, 42, 0.7); }
.es-view-3d .bg-slate-900/80 { background-color: rgba(15, 23, 42, 0.8); }
.es-view-3d .bg-slate-900/90 { background-color: rgba(15, 23, 42, 0.9); }
.es-view-3d .bg-slate-950/80 { background-color: rgba(2, 6, 23, 0.8); }
.es-view-3d .bg-emerald-950 { background-color: #022c22; }
.es-view-3d .bg-cyan-950 { background-color: #083344; }
.es-view-3d .bg-purple-950 { background-color: #3b0764; }
.es-view-3d .bg-sky-950 { background-color: #082f49; }
.es-view-3d .bg-rose-950 { background-color: #4c0519; }
.es-view-3d .bg-amber-500/10 { background-color: rgba(245, 158, 11, 0.1); }
.es-view-3d .bg-emerald-500/10 { background-color: rgba(16, 185, 129, 0.1); }
.es-view-3d .bg-emerald-500/15 { background-color: rgba(16, 185, 129, 0.15); }
.es-view-3d .bg-emerald-500/20 { background-color: rgba(16, 185, 129, 0.2); }
.es-view-3d .bg-sky-500/10 { background-color: rgba(14, 165, 233, 0.1); }
.es-view-3d .bg-red-500/20 { background-color: rgba(239, 68, 68, 0.2); }
.es-view-3d .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops, rgba(6, 78, 59, 0.6), #0f172a)); }

/* Colors */
.es-view-3d .text-white { color: #ffffff; }
.es-view-3d .text-slate-100 { color: #f1f5f9; }
.es-view-3d .text-slate-200 { color: #e2e8f0; }
.es-view-3d .text-slate-300 { color: #cbd5e1; }
.es-view-3d .text-slate-400 { color: #94a3b8; }
.es-view-3d .text-slate-500 { color: #64748b; }
.es-view-3d .text-amber-300 { color: #fcd34d; }
.es-view-3d .text-amber-400 { color: #fbbf24; }
.es-view-3d .text-cyan-300 { color: #67e8f9; }
.es-view-3d .text-cyan-400 { color: #22d3ee; }
.es-view-3d .text-emerald-300 { color: #6ee7b7; }
.es-view-3d .text-emerald-400 { color: #34d399; }
.es-view-3d .text-sky-300 { color: #7dd3fc; }
.es-view-3d .text-sky-400 { color: #38bdf8; }
.es-view-3d .text-purple-300 { color: #d8b4fe; }
.es-view-3d .text-purple-400 { color: #c084fc; }
.es-view-3d .text-rose-300 { color: #fda4af; }
.es-view-3d .text-rose-400 { color: #fb7185; }
.es-view-3d .text-orange-400 { color: #fb923c; }
.es-view-3d .text-red-400 { color: #f87171; }

/* Font Sizes & Weights */
.es-view-3d .text-[9px] { font-size: 9px; line-height: 12px; }
.es-view-3d .text-[10px] { font-size: 10px; line-height: 14px; }
.es-view-3d .text-[11px] { font-size: 11px; line-height: 15px; }
.es-view-3d .text-xs { font-size: 12px; line-height: 16px; }
.es-view-3d .text-sm { font-size: 14px; line-height: 20px; }
.es-view-3d .text-base { font-size: 16px; line-height: 24px; }
.es-view-3d .text-lg { font-size: 18px; line-height: 28px; }
.es-view-3d .text-xl { font-size: 20px; line-height: 28px; }
.es-view-3d .text-2xl { font-size: 24px; line-height: 32px; }
.es-view-3d .text-3xl { font-size: 30px; line-height: 36px; }

.es-view-3d .font-medium { font-weight: 500; }
.es-view-3d .font-semibold { font-weight: 600; }
.es-view-3d .font-bold { font-weight: 700; }
.es-view-3d .font-extrabold { font-weight: 800; }
.es-view-3d .font-black { font-weight: 900; }
.es-view-3d .font-mono { font-family: 'JetBrains Mono', monospace; }
.es-view-3d .font-sans { font-family: 'Inter', sans-serif; }
.es-view-3d .font-display { font-family: 'Orbitron', sans-serif; }
.es-view-3d .leading-tight { line-height: 1.25; }
.es-view-3d .tracking-tight { letter-spacing: -0.025em; }
.es-view-3d .tracking-wider { letter-spacing: 0.05em; }

/* Dimensions */
.es-view-3d .w-1.5 { width: 6px; }
.es-view-3d .h-1.5 { height: 6px; }
.es-view-3d .w-2.5 { width: 10px; }
.es-view-3d .h-2.5 { height: 10px; }
.es-view-3d .w-8 { width: 32px; }
.es-view-3d .h-8 { height: 32px; }
.es-view-3d .w-20 { width: 80px; }
.es-view-3d .w-24 { width: 96px; }
.es-view-3d .w-40 { width: 160px; }
.es-view-3d .w-[72px] { width: 72px; }
.es-view-3d .max-w-[640px] { max-w: 640px; }

/* Animations */
.es-view-3d .animate-pulse {
  animation: esPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.es-view-3d .animate-ping {
  animation: esPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes esPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .45; }
}
@keyframes esPing {
  75%, 100% { transform: scale(2); opacity: 0; }
}

/* Responsive Desktop vs Mobile Breakpoints */
/* Fluid Adaptive Layout based on Container Width */
.es-view-3d #topGrid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
  gap: 14px !important;
}

.es-view-3d #centerRow {
  margin: 16px 0 !important;
}

.es-view-3d #inverterCard {
  display: flex !important;
  flex-direction: row !important;
  text-align: left !important;
  max-width: 660px !important;
  margin: 0 auto !important;
}

.es-view-3d #inverterSpecsGrid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(85px, 1fr)) !important;
  gap: 6px !important;
}

.es-view-3d #bottomGrid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
  gap: 14px !important;
}

/* Battery Racks Container: Auto-fit min 260px (Stacks if container < 540px, 2-col if wider) */
.es-view-3d #batteryRacksContainer {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
  gap: 12px !important;
  width: 100% !important;
}

/* Individual Rack Card & Robust Scoped Layout */
.es-view-3d .rack-card {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 12px !important;
  padding: 12px 14px !important;
  background: rgba(15, 23, 42, 0.9) !important;
  border-radius: 12px !important;
  border: 1px solid rgba(16, 185, 129, 0.3) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4) !important;
  min-width: 0 !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.es-view-3d .rack-card.rack-discharge {
  border: 1px solid rgba(244, 63, 94, 0.5) !important;
  box-shadow: 0 0 20px rgba(244, 63, 94, 0.25) !important;
}

.es-view-3d .rack-svg-wrapper {
  width: 72px !important;
  min-width: 72px !important;
  max-width: 72px !important;
  flex-shrink: 0 !important;
}

.es-view-3d .rack-telemetry-col {
  flex: 1 1 0% !important;
  min-width: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  overflow: hidden !important;
}

.es-view-3d .rack-telemetry-header {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-bottom: 4px !important;
  border-bottom: 1px solid rgba(51, 65, 85, 0.6) !important;
  gap: 6px !important;
}

.es-view-3d .rack-title-text {
  font-family: 'Inter', sans-serif !important;
  font-size: 11.5px !important;
  font-weight: 700 !important;
  color: #34d399 !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.es-view-3d .rack-soc-badge {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  padding: 2px 7px !important;
  border-radius: 4px !important;
  background: rgba(6, 78, 59, 0.8) !important;
  color: #6ee7b7 !important;
  border: 1px solid rgba(16, 185, 129, 0.4) !important;
  white-space: nowrap !important;
}

.es-view-3d .rack-power-row {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 11.5px !important;
  white-space: nowrap !important;
}

.es-view-3d .rack-power-val {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 13.5px !important;
  font-weight: 800 !important;
  color: #6ee7b7 !important;
}

.es-view-3d .rack-metrics-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 4px !important;
  background: rgba(3, 7, 18, 0.8) !important;
  padding: 6px 4px !important;
  border-radius: 8px !important;
  border: 1px solid rgba(51, 65, 85, 0.5) !important;
  text-align: center !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.es-view-3d .rack-metric-cell {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
}

.es-view-3d .rack-metric-label {
  font-family: 'Inter', sans-serif !important;
  font-size: 9.5px !important;
  color: #94a3b8 !important;
  white-space: nowrap !important;
  line-height: 1.1 !important;
}

.es-view-3d .rack-metric-val {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 11.5px !important;
  font-weight: 700 !important;
  color: #e2e8f0 !important;
  white-space: nowrap !important;
  line-height: 1.2 !important;
}

.es-view-3d .rack-energy-row {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 11px !important;
  color: #94a3b8 !important;
  white-space: nowrap !important;
}

.es-view-3d .rack-energy-val {
  font-family: 'JetBrains Mono', monospace !important;
  font-weight: 700 !important;
  color: #cbd5e1 !important;
}

.energy-station-container {
  container-type: inline-size;
}

@media (max-width: 768px) {
  .es-view-3d #flowSvg3d {
    display: none !important;
  }
  .es-view-3d #stationContainer {
    min-height: auto !important;
    height: auto !important;
    padding: 10px !important;
    gap: 12px !important;
  }
  .es-view-3d #inverterCard {
    flex-direction: column !important;
    text-align: center !important;
    padding: 14px !important;
    gap: 12px !important;
  }
  .es-view-3d #inverterSpecsGrid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 6px !important;
  }
}

@container (max-width: 680px) {
  .es-view-3d #flowSvg3d {
    display: none !important;
  }
  .es-view-3d #stationContainer {
    min-height: auto !important;
    height: auto !important;
    padding: 10px !important;
    gap: 12px !important;
  }
  .es-view-3d #inverterCard {
    flex-direction: column !important;
    text-align: center !important;
    padding: 14px !important;
    gap: 12px !important;
  }
  .es-view-3d #inverterSpecsGrid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 6px !important;
  }
}


        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container ${this._themeMode === "light" ? "theme-light" : ""}">
        
        <!-- FULL CARD DYNAMIC ENERGY FLOW NETWORK -->
        <svg id="energyFlowCanvas" class="es-energy-flow-canvas" style="${this._viewMode === "3d" ? "display: none;" : ""}">
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
            <span>${e.title || "Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW v1.5.2</span>
          </div>
          <div class="es-header-controls">
            <button class="es-header-pill-btn" id="headerViewToggle" title="${this._viewMode === "3d" ? this._t("view_toggle_to_2d") : this._t("view_toggle_to_3d")}">
              <span>${this._viewMode === "3d" ? "🧊 3D" : "⚡ 2D"}</span>
            </button>
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

        <!-- 3D REALISTIC VIEW CONTAINER -->
        <div class="es-view-3d" id="realistic3dView" style="${this._viewMode === "3d" ? "display: block;" : "display: none;"}">
      <div class="relative w-full rounded-2xl p-3 sm:p-5 md:p-8 bg-[#040814] border border-slate-800/80 overflow-hidden shadow-2xl min-h-[960px] flex flex-col justify-between" id="stationContainer">

        <!-- BACKGROUND SVG CONDUIT WIRES -->
        <svg class="flow-svg" id="flowSvg3d" viewBox="0 0 1600 950" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradSolar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#fbbf24" />
            </linearGradient>
            <linearGradient id="gradWind" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
            <linearGradient id="gradGrid" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
            <linearGradient id="gradBat1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#34d399" />
            </linearGradient>
            <linearGradient id="gradBat2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#059669" />
              <stop offset="100%" stop-color="#10b981" />
            </linearGradient>
            <linearGradient id="gradBatDischarge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
            <linearGradient id="rackDoorGlowRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#991b1b" stop-opacity="0.06" />
            </linearGradient>
            <linearGradient id="gradHouse" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#06b6d4" />
              <stop offset="100%" stop-color="#22d3ee" />
            </linearGradient>
          </defs>

          <!-- Conduit Tracks & Pulses -->
          <path d="M 280 200 C 500 200, 600 380, 750 410" class="conduit-track" />
          <path d="M 280 200 C 500 200, 600 380, 750 410" class="conduit-pulse" id="pulseSolar3d" stroke="url(#gradSolar)" style="filter: drop-shadow(0 0 6px #f59e0b);" />

          <path d="M 800 170 C 800 250, 800 310, 800 370" class="conduit-track" />
          <path d="M 800 170 C 800 250, 800 310, 800 370" class="conduit-pulse" id="pulseWind3d" stroke="url(#gradWind)" style="filter: drop-shadow(0 0 6px #a855f7);" />

          <path d="M 1320 200 C 1100 200, 1000 380, 850 410" class="conduit-track" />
          <path d="M 1320 200 C 1100 200, 1000 380, 850 410" class="conduit-pulse" id="pulseGrid3d" stroke="url(#gradGrid)" style="filter: drop-shadow(0 0 6px #0284c7);" />

          <path d="M 760 470 C 620 500, 360 560, 260 670" class="conduit-track" />
          <path d="M 760 470 C 620 500, 360 560, 260 670" class="conduit-pulse" id="pulseBat1_3d" stroke="url(#gradBat1)" style="filter: drop-shadow(0 0 6px #10b981);" />

          <path d="M 780 470 C 690 510, 620 570, 580 670" class="conduit-track" />
          <path d="M 780 470 C 690 510, 620 570, 580 670" class="conduit-pulse" id="pulseBat2_3d" stroke="url(#gradBat2)" style="filter: drop-shadow(0 0 6px #059669);" />

          <path d="M 840 470 C 980 500, 1140 560, 1300 670" class="conduit-track" />
          <path d="M 840 470 C 980 500, 1140 560, 1300 670" class="conduit-pulse" id="pulseHouse3d" stroke="url(#gradHouse)" style="filter: drop-shadow(0 0 6px #06b6d4);" />
        </svg>

        <!-- TOP ROW: SOLAR | WIND | GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-20" id="topGrid">

          <!-- 1. 3D SOLAR PANELS CARD -->
          <div class="glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-amber-500/20" id="cardSolar">
            <div class="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="text-xs uppercase tracking-wider font-bold text-amber-400">Сонячні панелі</span>
              <span class="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800" id="pvForecast">Прогноз: 25.0 кВт·г</span>
            </div>

            <div class="flex items-center gap-3.5">
              <div class="w-24 sm:w-28 flex-shrink-0 hardware-render">
                <svg viewBox="0 0 200 150" class="w-full h-auto">
                  <polygon points="20,135 180,135 150,145 10,145" fill="#334155" />
                  <line x1="30" y1="135" x2="60" y2="60" stroke="#64748b" stroke-width="4" />
                  <line x1="160" y1="135" x2="140" y2="60" stroke="#64748b" stroke-width="4" />
                  <line x1="95" y1="135" x2="100" y2="60" stroke="#64748b" stroke-width="4" />
                  <polygon points="15,75 165,45 185,115 35,135" fill="url(#pvSurfaceGrad)" stroke="#94a3b8" stroke-width="2.5" />
                  <line x1="50" y1="68" x2="70" y2="130" stroke="#38bdf8" stroke-width="1.2" opacity="0.6" />
                  <line x1="90" y1="60" x2="110" y2="125" stroke="#38bdf8" stroke-width="1.2" opacity="0.6" />
                  <line x1="130" y1="52" x2="150" y2="120" stroke="#38bdf8" stroke-width="1.2" opacity="0.6" />
                  <polygon points="15,75 165,45 120,65 25,85" fill="white" opacity="0.12" />
                  <defs>
                    <linearGradient id="pvSurfaceGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#1e293b" />
                      <stop offset="40%" stop-color="#0f2b5c" />
                      <stop offset="100%" stop-color="#08142c" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono leading-tight" id="pvTotalVal">0.000 кВт</div>
                <div class="text-xs text-slate-300 mb-2 truncate" id="pvStatusText">Генерації зараз немає (ніч)</div>
                
                <div class="grid grid-cols-3 gap-1 font-mono text-center">
                  <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                    <span class="text-amber-400 block font-bold text-[10px]">PV 1</span>
                    <span id="pv1Val" class="text-xs font-bold text-slate-200 block">0 Вт</span>
                    <span class="text-[9px] text-slate-500 block">7.6V·0A</span>
                  </div>
                  <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                    <span class="text-amber-400 block font-bold text-[10px]">PV 2</span>
                    <span id="pv2Val" class="text-xs font-bold text-slate-200 block">0 Вт</span>
                    <span class="text-[9px] text-slate-500 block">2.9V·0A</span>
                  </div>
                  <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                    <span class="text-amber-400 block font-bold text-[10px]">PV 3</span>
                    <span id="pv3Val" class="text-xs font-bold text-slate-200 block">0 Вт</span>
                    <span class="text-[9px] text-slate-500 block">3.5V·0A</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2.5 flex items-center justify-between text-xs text-amber-400/90 font-medium bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
              <span>Факт: <b>4.7 кВт·г</b></span>
              <span>💰 ~20.30 грн</span>
            </div>
          </div>

          <!-- 2. 3D WIND TURBINES CARD (PRO BALANCED LAYOUT) -->
          <div class="glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-cyan-500/20" id="cardWind">
            <div class="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="text-xs uppercase tracking-wider font-bold text-cyan-400">Вітрогенерація</span>
              <span class="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">2 турбіни</span>
            </div>

            <!-- Top Row: Turbines Graphic + Total Readout -->
            <div class="flex items-center gap-3.5 mb-2.5">
              <div class="w-24 sm:w-28 flex-shrink-0 hardware-render relative flex justify-center">
                <svg viewBox="0 0 230 175" class="w-full h-auto">
                  <defs>
                    <linearGradient id="mastGrad1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="#334155"/>
                      <stop offset="35%" stop-color="#94a3b8"/>
                      <stop offset="70%" stop-color="#cbd5e1"/>
                      <stop offset="100%" stop-color="#475569"/>
                    </linearGradient>
                    <linearGradient id="mastGrad2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="#1e293b"/>
                      <stop offset="40%" stop-color="#64748b"/>
                      <stop offset="80%" stop-color="#94a3b8"/>
                      <stop offset="100%" stop-color="#334155"/>
                    </linearGradient>
                    <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#ffffff"/>
                      <stop offset="50%" stop-color="#e2e8f0"/>
                      <stop offset="100%" stop-color="#94a3b8"/>
                    </linearGradient>
                    <linearGradient id="nacelleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#f8fafc"/>
                      <stop offset="60%" stop-color="#cbd5e1"/>
                      <stop offset="100%" stop-color="#64748b"/>
                    </linearGradient>
                  </defs>

                  <!-- TURBINE 1: 1500W -->
                  <ellipse cx="72" cy="168" rx="18" ry="4" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
                  <polygon points="66,166 78,166 75,54 69,54" fill="url(#mastGrad1)"/>
                  <path d="M 58 52 L 86 52 Q 90 52 88 45 Q 73 43 58 45 Z" fill="url(#nacelleGrad)" stroke="#475569" stroke-width="0.8"/>
                  <circle cx="63" cy="44" r="1.5" fill="#ef4444" style="filter: drop-shadow(0 0 3px #ef4444);" />

                  <g transform="translate(72, 48)">
                    <g class="rotor-spin-normal" id="rotorSpin1">
                      <path d="M 0 0 C -2.8 -12 -3.8 -32 0 -44 C 3.8 -32 2.8 -12 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      <g transform="rotate(120)">
                        <path d="M 0 0 C -2.8 -12 -3.8 -32 0 -44 C 3.8 -32 2.8 -12 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      </g>
                      <g transform="rotate(240)">
                        <path d="M 0 0 C -2.8 -12 -3.8 -32 0 -44 C 3.8 -32 2.8 -12 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      </g>
                      <circle cx="0" cy="0" r="4.5" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
                      <circle cx="0" cy="0" r="2" fill="#0284c7"/>
                    </g>
                  </g>

                  <!-- TURBINE 2: Херсонець -->
                  <ellipse cx="165" cy="168" rx="15" ry="3.5" fill="#1e293b" stroke="#334155" stroke-width="1.2"/>
                  <polygon points="160,166 170,166 168,76 162,76" fill="url(#mastGrad2)"/>
                  <path d="M 152 74 L 178 74 Q 182 74 180 67 Q 166 65 152 67 Z" fill="url(#nacelleGrad)" stroke="#475569" stroke-width="0.8"/>
                  <circle cx="156" cy="66" r="1.2" fill="#a855f7" style="filter: drop-shadow(0 0 2px #a855f7);" />

                  <g transform="translate(165, 70)">
                    <g class="rotor-spin-slow" id="rotorSpin2">
                      <path d="M 0 0 C -2.2 -10 -3 -26 0 -35 C 3 -26 2.2 -10 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      <g transform="rotate(120)">
                        <path d="M 0 0 C -2.2 -10 -3 -26 0 -35 C 3 -26 2.2 -10 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      </g>
                      <g transform="rotate(240)">
                        <path d="M 0 0 C -2.2 -10 -3 -26 0 -35 C 3 -26 2.2 -10 0 0" fill="url(#bladeGrad)" stroke="#94a3b8" stroke-width="0.6"/>
                      </g>
                      <circle cx="0" cy="0" r="3.8" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
                      <circle cx="0" cy="0" r="1.8" fill="#a855f7"/>
                    </g>
                  </g>
                </svg>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono leading-tight" id="windTotalVal">0.000 кВт</div>
                <div class="text-xs text-slate-300 truncate" id="windStatusText">Штиль · 95 RPM</div>
                <div class="text-[11px] text-slate-400 mt-1">Місяць: <b class="text-slate-200">0.7 кВт·г</b></div>
              </div>
            </div>

            <!-- Full-Width Dual Turbines Pods (Never overlapping badges!) -->
            <div class="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-800/80">
              <div class="bg-slate-900/90 p-2 rounded-xl border border-cyan-500/25 flex flex-col justify-between">
                <div class="flex items-center justify-between gap-1 mb-1">
                  <span class="text-xs font-bold text-cyan-300">1500W</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 whitespace-nowrap" id="wt1Rpm">95 rpm</span>
                </div>
                <div class="text-slate-100 font-mono font-extrabold text-sm" id="wt1Power">0.000 кВт</div>
                <div class="text-[10px] text-slate-400 mt-0.5">День: 0.24 кВт·г</div>
              </div>

              <div class="bg-slate-900/90 p-2 rounded-xl border border-purple-500/25 flex flex-col justify-between">
                <div class="flex items-center justify-between gap-1 mb-1">
                  <span class="text-xs font-bold text-purple-300">Херсонець</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-500/30 whitespace-nowrap" id="wt2Rpm">Штиль</span>
                </div>
                <div class="text-slate-100 font-mono font-extrabold text-sm" id="wt2Power">-0.001 кВт</div>
                <div class="text-[10px] text-slate-400 mt-0.5">День: 0.02 кВт·г</div>
              </div>
            </div>
          </div>

          <!-- 3. 3D POWER GRID (ЛЕП) CARD -->
          <div class="glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-sky-500/20 md:col-span-2 lg:col-span-1" id="cardGrid">
            <div class="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="text-xs uppercase tracking-wider font-bold text-sky-400">Електромережа</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex-shrink-0" id="gridStatusBadge">
                --
              </span>
            </div>

            <div class="flex items-center gap-3.5">
              <div class="w-20 sm:w-24 flex-shrink-0 hardware-render">
                <svg viewBox="0 0 180 180" class="w-full h-auto">
                  <polygon points="50,175 130,175 105,95 75,95" fill="none" stroke="#64748b" stroke-width="2.5" />
                  <line x1="50" y1="175" x2="105" y2="95" stroke="#475569" stroke-width="1.5" />
                  <line x1="130" y1="175" x2="75" y2="95" stroke="#475569" stroke-width="1.5" />
                  <polygon points="75,95 105,95 98,25 82,25" fill="none" stroke="#64748b" stroke-width="2.5" />
                  <line x1="25" y1="70" x2="155" y2="70" stroke="#94a3b8" stroke-width="3" />
                  <line x1="40" y1="45" x2="140" y2="45" stroke="#94a3b8" stroke-width="3" />
                  <line x1="30" y1="70" x2="30" y2="85" stroke="#38bdf8" stroke-width="2" />
                  <line x1="150" y1="70" x2="150" y2="85" stroke="#38bdf8" stroke-width="2" />
                  <path d="M 5 85 Q 30 92 80 85" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.8" style="filter: drop-shadow(0 0 4px #0284c7);" />
                  <path d="M 100 85 Q 150 92 175 85" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.8" style="filter: drop-shadow(0 0 4px #0284c7);" />
                </svg>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono leading-tight" id="gridPowerVal3d">0.000 кВт</div>
                <div class="text-xs text-slate-400 font-bold mb-1.5 truncate" id="gridFlowDir3d">--</div>
                
                <div class="text-xs text-slate-300 font-mono flex items-center justify-between bg-slate-900/80 p-1.5 rounded mb-2 border border-slate-800">
                  <span>Напруга: <b class="text-slate-100" id="gridVolt3d">0.0 V</b></span>
                  <span>Струм: <b class="text-slate-100" id="gridCurrent3d">0.0 A</b></span>
                </div>

                <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 text-xs">
                  <div class="flex justify-between items-center text-slate-300">
                    <span>Імпорт за добу:</span>
                    <span class="font-mono font-bold text-sky-300" id="gridDailyImport">27.20 кВт·г</span>
                  </div>
                  <div class="flex justify-between items-center mt-1 text-[11px]">
                    <span class="text-amber-400 font-semibold" id="tariffActive">🌙 Ніч: 2.16 грн</span>
                    <span class="text-slate-400 font-mono" id="tariffSplit">(🌙 8.8 + ☀️ 18.4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- CENTER ROW: THE BRAIN — 3D DEYE 12KW INVERTER (PRO DISPLAY OVERHAUL) -->
        <div class="relative z-30 my-4 md:my-8 flex justify-center" id="centerRow">
          <div class="glass-card rounded-3xl p-5 md:p-6 card-3d-glow border-sky-400/30 max-w-[640px] w-full flex flex-col md:flex-row items-center gap-5 md:gap-6 relative" id="inverterCard">
            
            <!-- 3D Inverter Casing with roomier LCD screen -->
            <div class="w-40 md:w-48 flex-shrink-0 hardware-render">
              <svg viewBox="0 0 180 260" class="w-full h-auto">
                <rect x="25" y="10" width="130" height="20" rx="3" fill="#64748b" />
                <polygon points="15,25 165,25 165,230 15,230" fill="url(#inverterCasingGrad)" stroke="#cbd5e1" stroke-width="2" />
                <polygon points="165,25 175,35 175,238 165,230" fill="#94a3b8" />
                <polygon points="15,230 165,230 175,238 25,238" fill="#64748b" />
                <text x="90" y="55" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#0284c7" text-anchor="middle" letter-spacing="1.5">Deye</text>

                <!-- Expanded LCD Display Box (Width 108, Height 66) -->
                <rect x="36" y="68" width="108" height="66" rx="8" fill="#090f1d" stroke="#38bdf8" stroke-width="1.8" />
                <rect x="40" y="72" width="100" height="58" rx="5" fill="#030712" />
                
                <!-- Display Power Readout -->
                <text x="90" y="91" font-family="'JetBrains Mono', monospace" font-weight="800" font-size="13" fill="#38bdf8" text-anchor="middle" id="invScreenPower">0.00 kW</text>
                <!-- Display Status line with proper font size and letter-spacing -->
                <text x="90" y="106" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#38bdf8" text-anchor="middle" letter-spacing="0.5" id="invScreenStatus">--</text>
                
                <!-- LED Indicators -->
                <circle cx="60" cy="119" r="3" fill="#10b981" id="invScreenLed" style="filter: drop-shadow(0 0 3px #10b981);" />
                <circle cx="72" cy="119" r="3" fill="#38bdf8" />
                <circle cx="84" cy="119" r="3" fill="#f59e0b" />

                <line x1="25" y1="155" x2="155" y2="155" stroke="#cbd5e1" stroke-width="1.5" />
                <polygon points="90,170 80,188 100,188" fill="#facc15" stroke="#ca8a04" stroke-width="1" />
                <text x="90" y="186" font-family="'Inter', sans-serif" font-weight="900" font-size="12" fill="#000" text-anchor="middle">!</text>
                <text x="90" y="202" font-family="'Inter', sans-serif" font-weight="700" font-size="8.5" fill="#64748b" text-anchor="middle" letter-spacing="0.8">12kW HYBRID S3</text>
              </svg>
            </div>

            <!-- Inverter Data & Spacious Specs Grid -->
            <div class="flex-1 w-full min-w-0">
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  ГІБРИДНИЙ ІНВЕРТОР
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5" id="invWorkBadge">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  ПРАЦЮЄ
                </span>
              </div>

              <h2 class="text-lg sm:text-xl font-extrabold text-white mb-0.5">Deye SUN-12K-SG01LP1-EU</h2>
              <p class="text-xs text-slate-400 mb-3">Головний комутаційний вузол станції 12 кВт</p>

              <!-- Roomy 2x2 or 4-col Specs Tiles -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono w-full" id="inverterSpecsGrid">
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">Температура AC</span>
                  <span class="font-bold text-amber-300 text-sm" id="invAcTemp3d">-- °C</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">Температура DC</span>
                  <span class="font-bold text-amber-300 text-sm" id="invDcTemp3d">-- °C</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">Частота мережі</span>
                  <span class="font-bold text-sky-300 text-sm" id="invFreq3d">-- Hz</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">⚡ Власне</span>
                  <span class="font-bold text-orange-400 text-sm" id="invSelf3d">-- Вт</span>
                </div>
              </div>

              <div class="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Ефективність MPPT:</span>
                <span class="text-emerald-400 font-mono font-bold">97.6% (MPPT Dual)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM ROW: BATTERY STORAGE & HOUSE LOADS -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6 relative z-20" id="bottomGrid">

          <!-- 4. MASTER BATTERY STATION -->
          <div class="xl:col-span-7 glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-emerald-500/20 flex flex-col justify-between transition-all" id="cardBattery">
            
            <!-- Master Header -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" id="batMasterStatusDot"></span>
                  <span class="text-xs uppercase tracking-wider font-extrabold text-emerald-400" id="batMasterTitle">Система Накопичення (АКБ)</span>
                  <span class="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">2 Стійки · 28.8 кВт·г</span>
                </div>
                <div class="text-xs font-mono text-slate-300">
                  Сумарно: <b class="text-emerald-300 text-sm transition-colors" id="batMasterPower">3.960 кВт ↓ (Заряд)</b> · <span class="text-emerald-400 font-bold transition-colors" id="batMasterSoc">57%</span>
                </div>
              </div>

              <!-- SMART TIKTOK-STYLE PREDICTION BANNER -->
              <div class="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 p-3 rounded-xl border border-emerald-500/30 mb-3 flex flex-wrap items-center justify-between gap-3 transition-all" id="batPredictionBanner">
                <div>
                  <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider" id="batPredictionTitle">РОЗРАХУНОК ДО ПОВНОЇ ЗАРЯДКИ:</div>
                  <div class="text-xl md:text-2xl font-black text-emerald-300 font-mono tracking-tight transition-all" id="batTimerVal">--</div>
                  <div class="text-xs text-slate-400 mt-0.5" id="batSubTimer">
                    Запас енергії: <b>~16.42 кВт·год</b> (автономність будинку ~ 16.5 год)
                  </div>
                </div>
                <div class="flex items-center gap-3 text-xs font-mono text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-1.5 sm:pt-0 sm:pl-3">
                  <div>
                    <span class="text-[10px] text-slate-500 block">Шина</span>
                    <span class="font-bold text-slate-200" id="batBusVolt3d">-- V</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-slate-500 block">Струм</span>
                    <span class="font-bold text-slate-400 transition-colors" id="batBusCurrent3d">-- A</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-slate-500 block">Темп</span>
                    <span class="font-bold text-slate-200">25.0 °C</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- TWO RACKS CONTAINER (PRO HARDWARE RENDER WITHOUT BLURRY TEXT) -->
            <div id="batteryRacksContainer">

              <!-- RACK 1 -->
              <div class="rack-card card-3d-glow transition-all" id="rack1Card">
                <!-- 3D Rack 1 SVG -->
                <div class="rack-svg-wrapper hardware-render">
                  <svg viewBox="0 0 110 160" class="w-full h-auto">
                    <!-- Cabinet Frame -->
                    <polygon points="10,10 95,10 104,18 104,154 95,148 10,148" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
                    <polygon points="95,10 104,18 104,154 95,148" fill="#1e293b" />
                    <!-- Smoked Glass Door -->
                    <rect x="15" y="16" width="76" height="126" rx="4" fill="url(#rackDoorGlow1)" stroke="#10b981" stroke-width="1.2" id="rack1Door" />

                    <!-- Top OLED Display Box -->
                    <rect x="22" y="22" width="62" height="34" rx="4" fill="#030712" stroke="#34d399" stroke-width="1.5" id="rack1ScreenBorder" />
                    <text x="53" y="37" font-family="'Orbitron', sans-serif" font-weight="900" font-size="14" fill="#34d399" text-anchor="middle" id="rack1SocDisplay">77%</text>
                    <text x="53" y="49" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="rack1PowerDisplay">1.40 кВт ↓</text>

                    <!-- Industrial Hardware Module Trays -->
                    <!-- Tray 1 -->
                    <rect x="20" y="62" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="70" r="1.8" fill="#10b981" id="rack1Mod1Led" />
                    <rect x="36" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="68" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="68" x2="78" y2="68" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="72" x2="78" y2="72" stroke="#475569" stroke-width="1" />

                    <!-- Tray 2 -->
                    <rect x="20" y="82" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="85" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="85" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="90" r="1.8" fill="#10b981" id="rack1Mod2Led" />
                    <rect x="36" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="88" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="88" x2="78" y2="88" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="92" x2="78" y2="92" stroke="#475569" stroke-width="1" />

                    <!-- Tray 3 -->
                    <rect x="20" y="102" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="105" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="105" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="110" r="1.8" fill="#10b981" id="rack1Mod3Led" />
                    <rect x="36" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="108" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="108" x2="78" y2="108" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="112" x2="78" y2="112" stroke="#475569" stroke-width="1" />

                    <!-- Master BMS Unit at bottom -->
                    <rect x="20" y="122" width="66" height="16" rx="2" fill="#0b1329" stroke="#0284c7" stroke-width="1" />
                    <circle cx="28" cy="130" r="2.2" fill="#38bdf8" style="filter: drop-shadow(0 0 2px #38bdf8);" />
                    <circle cx="36" cy="130" r="2.2" fill="#10b981" />
                    <circle cx="70" cy="130" r="2.8" fill="#ef4444" />
                    <circle cx="78" cy="130" r="2.8" fill="#0284c7" />
                  </svg>
                </div>

                <!-- Telemetry -->
                <div class="rack-telemetry-col">
                  <div class="rack-telemetry-header">
                    <span class="rack-title-text" id="rack1Title">Стійка 1 (АКБ 1)</span>
                    <span class="rack-soc-badge" id="rack1SocBadge">77%</span>
                  </div>

                  <div class="rack-power-row">
                    <span style="color: #94a3b8;">Потужність:</span>
                    <span class="rack-power-val" id="rack1PowerVal">1.40 кВт ↓</span>
                  </div>

                  <div class="rack-metrics-grid">
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Напруга</span>
                      <span class="rack-metric-val" id="rack1Volt">54.2 V</span>
                    </div>
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Темп.</span>
                      <span class="rack-metric-val" style="color: #fcd34d;" id="rack1Temp">39.2 °C</span>
                    </div>
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Дельта</span>
                      <span class="rack-metric-val" style="color: #6ee7b7;" id="rack1Delta">Δ13 mV</span>
                    </div>
                  </div>

                  <div class="rack-energy-row">
                    <span>Запас енергії:</span>
                    <span class="rack-energy-val" id="rack1Kwh">~10.78 кВт·г</span>
                  </div>
                </div>
              </div>

              <!-- RACK 2 -->
              <div class="rack-card card-3d-glow transition-all" id="rack2Card">
                <!-- 3D Rack 2 SVG -->
                <div class="rack-svg-wrapper hardware-render">
                  <svg viewBox="0 0 110 160" class="w-full h-auto">
                    <!-- Cabinet Frame -->
                    <polygon points="10,10 95,10 104,18 104,154 95,148 10,148" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
                    <polygon points="95,10 104,18 104,154 95,148" fill="#1e293b" />
                    <!-- Smoked Glass Door -->
                    <rect x="15" y="16" width="76" height="126" rx="4" fill="url(#rackDoorGlow2)" stroke="#10b981" stroke-width="1.2" id="rack2Door" />

                    <!-- Top OLED Display Box -->
                    <rect x="22" y="22" width="62" height="34" rx="4" fill="#030712" stroke="#34d399" stroke-width="1.5" id="rack2ScreenBorder" />
                    <text x="53" y="37" font-family="'Orbitron', sans-serif" font-weight="900" font-size="14" fill="#34d399" text-anchor="middle" id="rack2SocDisplay">72%</text>
                    <text x="53" y="49" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="rack2PowerDisplay">1.79 кВт ↓</text>

                    <!-- Industrial Hardware Module Trays -->
                    <!-- Tray 1 -->
                    <rect x="20" y="62" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="70" r="1.8" fill="#10b981" id="rack2Mod1Led" />
                    <rect x="36" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="68" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="68" x2="78" y2="68" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="72" x2="78" y2="72" stroke="#475569" stroke-width="1" />

                    <!-- Tray 2 -->
                    <rect x="20" y="82" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="85" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="85" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="90" r="1.8" fill="#10b981" id="rack2Mod2Led" />
                    <rect x="36" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="88" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="88" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="88" x2="78" y2="88" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="92" x2="78" y2="92" stroke="#475569" stroke-width="1" />

                    <!-- Tray 3 -->
                    <rect x="20" y="102" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="105" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="105" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <circle cx="30" cy="110" r="1.8" fill="#10b981" id="rack2Mod3Led" />
                    <rect x="36" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="108" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="108" width="5" height="4" rx="1" fill="#334155" />
                    <line x1="68" y1="108" x2="78" y2="108" stroke="#475569" stroke-width="1" />
                    <line x1="68" y1="112" x2="78" y2="112" stroke="#475569" stroke-width="1" />

                    <!-- Master BMS Unit at bottom -->
                    <rect x="20" y="122" width="66" height="16" rx="2" fill="#0b1329" stroke="#0284c7" stroke-width="1" />
                    <circle cx="28" cy="130" r="2.2" fill="#38bdf8" style="filter: drop-shadow(0 0 2px #38bdf8);" />
                    <circle cx="36" cy="130" r="2.2" fill="#10b981" />
                    <circle cx="70" cy="130" r="2.8" fill="#ef4444" />
                    <circle cx="78" cy="130" r="2.8" fill="#0284c7" />
                  </svg>
                </div>

                <!-- Telemetry -->
                <div class="rack-telemetry-col">
                  <div class="rack-telemetry-header">
                    <span class="rack-title-text" id="rack2Title">Стійка 2 (АКБ 2)</span>
                    <span class="rack-soc-badge" id="rack2SocBadge">72%</span>
                  </div>

                  <div class="rack-power-row">
                    <span style="color: #94a3b8;">Потужність:</span>
                    <span class="rack-power-val" id="rack2PowerVal">1.79 кВт ↓</span>
                  </div>

                  <div class="rack-metrics-grid">
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Напруга</span>
                      <span class="rack-metric-val" id="rack2Volt">54.1 V</span>
                    </div>
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Темп.</span>
                      <span class="rack-metric-val" style="color: #6ee7b7;" id="rack2Temp">17.0 °C</span>
                    </div>
                    <div class="rack-metric-cell">
                      <span class="rack-metric-label">Дельта</span>
                      <span class="rack-metric-val" style="color: #fcd34d;" id="rack2Delta">Δ27 mV</span>
                    </div>
                  </div>

                  <div class="rack-energy-row">
                    <span>Запас енергії:</span>
                    <span class="rack-energy-val" id="rack2Kwh">~11.52 кВт·г</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2.5 pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Добовий заряд: <b class="text-emerald-400 font-mono">17.7 кВт·г</b></span>
              <span>Розряд: <b class="text-amber-400 font-mono">14.8 кВт·г</b></span>
            </div>
          </div>

          <!-- 5. 3D ESSENTIAL HOUSE LOADS & SMART BOILER CARD -->
          <div class="xl:col-span-5 glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-cyan-500/20" id="cardHouse">
            <div class="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800/80">
              <span class="text-xs uppercase tracking-wider font-bold text-cyan-400">Гарантоване навантаження</span>
              <span class="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Дім: 23.9 кВт·г</span>
            </div>

            <div class="flex items-center gap-3.5 mb-3">
              <div class="w-24 sm:w-28 flex-shrink-0 hardware-render">
                <svg viewBox="0 0 180 180" class="w-full h-auto">
                  <polygon points="90,30 160,65 90,105 20,65" fill="#334155" stroke="#475569" stroke-width="1.5" />
                  <polygon points="20,65 90,105 90,165 20,125" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
                  <polygon points="90,105 160,65 160,125 90,165" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
                  <polygon points="35,85 75,108 75,130 35,108" fill="#fef08a" opacity="0.9" style="filter: drop-shadow(0 0 8px #fde047);" />
                  <polygon points="105,108 145,85 145,108 105,130" fill="#fef08a" opacity="0.9" style="filter: drop-shadow(0 0 8px #fde047);" />
                  <rect x="145" y="125" width="22" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
                  <ellipse cx="156" cy="125" rx="11" ry="4" fill="#38bdf8" />
                  <text x="156" y="148" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="900" fill="#fff" text-anchor="middle">65°C</text>
                </svg>
              </div>

              <div class="flex-1 min-w-0">
                <div class="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono leading-tight" id="houseTotalVal3d">0.950 кВт</div>
                <div class="text-xs text-slate-300 truncate">Deye EPS / Load Port (220V)</div>
              </div>
            </div>

            <!-- Full-Width Subload Bars -->
            <div class="space-y-2 pt-2 border-t border-slate-800">
              
              <!-- Smart Boiler Subload -->
              <div class="bg-slate-900/90 p-2.5 rounded-xl border border-cyan-500/20 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg bg-sky-950 text-sky-400 flex items-center justify-center text-base flex-shrink-0 border border-sky-800/40">🛢️</div>
                  <div class="min-w-0">
                    <div class="text-xs font-bold text-slate-100 truncate">Розумний Бойлер (ГВП)</div>
                    <div class="text-[11px] text-slate-400 font-mono">Сенсор бойлера · 65°C</div>
                  </div>
                </div>
                <div class="text-right font-mono flex-shrink-0">
                  <div class="text-sm font-bold text-sky-300" id="boilerVal3d">0.000 кВт</div>
                  <div class="text-[10px] text-slate-400 font-sans" id="boilerStatusBadge3d" style="white-space: nowrap !important;">--</div>
                </div>
              </div>

              <!-- Sockets & Lighting Subload -->
              <div class="bg-slate-900/70 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-base flex-shrink-0 border border-slate-700/50">💡</div>
                  <div class="min-w-0">
                    <div class="text-xs font-bold text-slate-200 truncate">Освітлення та розетки</div>
                    <div class="text-[11px] text-slate-500">Побутові споживачі</div>
                  </div>
                </div>
                <div class="text-right font-mono flex-shrink-0">
                  <div class="text-xs font-bold text-slate-300">~ 0.000 кВт</div>
                  <div class="text-[10px] text-slate-500 font-sans">Резервна лінія</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>


        </div>

        <!-- 2D CYBER SCHEMATIC VIEW CONTAINER -->
        <div class="es-schematic-view" id="schematicView" style="${this._viewMode === "3d" ? "display: none;" : "display: block;"}">
        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${be.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((c = e.solar) == null ? void 0 : c.target_daily_yield) || 55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${be.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${be.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(d = e.grid) != null && d.show_non_essential && ((y = e.grid) != null && y.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${be.house_outline || be.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(h = e.grid) != null && h.show_car && ((x = e.grid) != null && x.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${be.car}</div>
              <div class="es-node-title" id="carTitle">${((u = e.grid) == null ? void 0 : u.car_title) || this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${be.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((b = e.inverter) == null ? void 0 : b.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((_ = e.aux) == null ? void 0 : _.type) === "none" || ((w = e.aux) == null ? void 0 : w.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${be[(g = e.aux) == null ? void 0 : g.type] || be.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((p = e.aux) == null ? void 0 : p.type) === "microinverter" && (!((f = e.aux) != null && f.title) || ((S = e.aux) == null ? void 0 : S.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((v = e.aux) == null ? void 0 : v.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((C = e.aux) == null ? void 0 : C.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((B = e.wind) == null ? void 0 : B.show) === !1 && (($ = e.aux) == null ? void 0 : $.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${be.house}</div>
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
        <div class="es-bat-branch-badges" id="batBranchBadgesContainer" style="${this._viewMode === "3d" ? "display: none;" : ""}">
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_1"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_2"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_3"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_4"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_5"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_6"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_7"></div>
          <div class="es-bat-branch-badge es-mono" id="batBranchBadge_8"></div>
        </div>
        </div><!-- /es-schematic-view -->

      </div>
    `, this._cacheDomNodes(), this._renderDynamicPvPanels(), this._renderDynamicWindTurbines(), this._renderDynamicSubloads(), this._renderDynamicBatteryRack(), this._bindInteractions(), this._setupResizeObserver(), this._rAF(() => this._updateFlowPaths());
  }
  _cacheDomNodes() {
    const e = this.shadowRoot;
    this._nodes = {
      dailySolarYield: e.getElementById("dailySolarYield"),
      targetSolarYield: e.getElementById("targetSolarYield"),
      solarProgressBar: e.getElementById("solarProgressBar"),
      solarSavingsDaily: e.getElementById("solarSavingsDaily"),
      autarkyVal: e.getElementById("autarkyVal"),
      selfConsVal: e.getElementById("selfConsVal"),
      energyBalanceRow: e.getElementById("energyBalanceRow"),
      totalPvPowerBadge: e.getElementById("totalPvPowerBadge"),
      totalPvPowerVal: e.getElementById("totalPvPowerVal"),
      totalPvPercentBadge: e.getElementById("totalPvPercentBadge"),
      totalPvSubline: e.getElementById("totalPvSubline"),
      totalPvCapDetail: e.getElementById("totalPvCapDetail"),
      totalPvCapTotal: e.getElementById("totalPvCapTotal"),
      solarFlowCollector: e.getElementById("solarFlowCollector"),
      gridImportDaily: e.getElementById("gridImportDaily"),
      gridCostDailyRow: e.getElementById("gridCostDailyRow"),
      gridCostDailyVal: e.getElementById("gridCostDailyVal"),
      gridCostSplitVal: e.getElementById("gridCostSplitVal"),
      gridTariffBadge: e.getElementById("gridTariffBadge"),
      gridExportDaily: e.getElementById("gridExportDaily"),
      gridExportIncomeRow: e.getElementById("gridExportIncomeRow"),
      gridExportIncomeVal: e.getElementById("gridExportIncomeVal"),
      gridNightSavingsRow: e.getElementById("gridNightSavingsRow"),
      gridNightSavingsVal: e.getElementById("gridNightSavingsVal"),
      netBenefitDailyRow: e.getElementById("netBenefitDailyRow"),
      netBenefitDailyBadge: e.getElementById("netBenefitDailyBadge"),
      gridPowerVal: e.getElementById("gridPowerVal"),
      gridDirectionLabel: e.getElementById("gridDirectionLabel"),
      carPowerVal: e.getElementById("carPowerVal"),
      carNode: e.getElementById("carNode"),
      nonEssentialNode: e.getElementById("nonEssentialNode"),
      nonEssentialPowerVal: e.getElementById("nonEssentialPowerVal"),
      inverterAcTemp: e.getElementById("inverterAcTemp"),
      inverterDcTemp: e.getElementById("inverterDcTemp"),
      inverterModelTag: e.getElementById("inverterModelTag"),
      inverterPowerVal: e.getElementById("inverterPowerVal"),
      inverterStatusBadge: e.getElementById("inverterStatusBadge"),
      inverterSelfConsumptionBox: e.getElementById("inverterSelfConsumptionBox"),
      inverterSelfConsumptionVal: e.getElementById("inverterSelfConsumptionVal"),
      inverterVolt: e.getElementById("inverterVolt"),
      inverterCurrent: e.getElementById("inverterCurrent"),
      inverterFreq: e.getElementById("inverterFreq"),
      auxNode: e.getElementById("auxNode"),
      auxTitle: e.getElementById("auxTitle"),
      auxPowerVal: e.getElementById("auxPowerVal"),
      auxSubtitle: e.getElementById("auxSubtitle"),
      auxIconBox: e.getElementById("auxIconBox"),
      windStationContainer: e.getElementById("windStationContainer"),
      dailyHouseKwh: e.getElementById("dailyHouseKwh"),
      essentialPowerVal: e.getElementById("essentialPowerVal"),
      subloadsBusContainer: e.getElementById("subloadsBusContainer"),
      subloadsBusSvg: e.getElementById("subloadsBusSvg"),
      subloadsFlowCollector: e.getElementById("subloadsFlowCollector"),
      subloadsBusBase: e.getElementById("subloadsBusBase"),
      subloadsBusStemBase: e.getElementById("subloadsBusStemBase"),
      subloadsBusStemFlow: e.getElementById("subloadsBusStemFlow"),
      subloadsBusFeeders: e.getElementById("subloadsBusFeeders"),
      batChargeDaily: e.getElementById("batChargeDaily"),
      batDischargeDaily: e.getElementById("batDischargeDaily"),
      masterBatterySoc: e.getElementById("masterBatterySoc"),
      masterBatteryFlowHint: e.getElementById("masterBatteryFlowHint"),
      batVoltVal: e.getElementById("batVoltVal"),
      batCurrentVal: e.getElementById("batCurrentVal"),
      batMasterTempVal: e.getElementById("batMasterTempVal"),
      batMasterTempBadge: e.getElementById("batMasterTempBadge"),
      batReserveSoc: e.getElementById("batReserveSoc"),
      batReserveProgressBar: e.getElementById("batReserveProgressBar"),
      batCapacityVal: e.getElementById("batCapacityVal"),
      batteryFlowCollector: e.getElementById("batteryFlowCollector"),
      pvPanelsContainer: e.getElementById("pvPanelsContainer"),
      subloadsContainer: e.getElementById("subloadsContainer"),
      batteryRackContainer: e.getElementById("batteryRackContainer"),
      bottomControlsDock: e.getElementById("bottomControlsDock")
    };
  }
  _renderDynamicWindTurbines() {
    var l, c, d, y, h, x, u, b;
    const e = this._config || fe, i = ((l = this._nodes) == null ? void 0 : l.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !(((c = e.wind) == null ? void 0 : c.show) !== !1 || ((d = e.aux) == null ? void 0 : d.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const r = ((y = e.wind) == null ? void 0 : y.turbine_count) || ((x = (h = e.wind) == null ? void 0 : h.turbines) == null ? void 0 : x.length) || 2, o = ((u = e.wind) == null ? void 0 : u.turbines) || [], a = document.createElement("div");
    a.className = "es-wind-summary-bar es-mono", a.id = "windStationSummaryBar", a.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(a);
    const s = document.createElement("div");
    s.className = "es-wind-pods-row", i.appendChild(s);
    for (let _ = 0; _ < r; _++) {
      const w = o[_] || {
        name: `Вітряк ${_ + 1}`,
        power_entity: `sensor.wind_turbine_${_ + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((b = e.wind) == null ? void 0 : b.animation_threshold) || 50
      }, g = !!(w.daily_energy_entity || w.monthly_energy_entity), p = document.createElement("div");
      p.className = "es-turbine-card glow-wind clickable-node", p.id = `turbineCard_${_ + 1}`, p.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${_ + 1}">
              ${be.wind_turbine}
            </div>
            <span>${w.name || `Вітряк ${_ + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${_ + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${_ + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${_ + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${_ + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${_ + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${g ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${_ + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${_ + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, p.addEventListener("click", () => {
        this._fireMoreInfo(w.power_entity);
      }), s.appendChild(p);
    }
  }
  _renderDynamicPvPanels() {
    var a, s, l, c, d, y;
    const e = this._config || fe, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((a = e.solar) == null ? void 0 : a.pv_count) || ((l = (s = e.solar) == null ? void 0 : s.strings) == null ? void 0 : l.length) || 3, r = this._language === "en" ? "kWp" : "кВтп", o = ((c = e.solar) == null ? void 0 : c.show_metrics) !== !1;
    for (let h = 1; h <= n; h++) {
      const x = h < 10 ? `0${h}` : `${h}`, u = ((y = (d = e.solar) == null ? void 0 : d.strings) == null ? void 0 : y[h - 1]) || {}, b = u.name || `PV ${x}`, _ = u.capacity_kw !== void 0 ? parseFloat(u.capacity_kw) : 4, w = u.voltage_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_voltage` : ""), g = u.current_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_current` : ""), p = document.createElement("div");
      p.className = "es-pv-panel glow-solar clickable-node", p.dataset.pvIndex = h, p.id = `pvPanel_${h}`, p.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${be.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${b}</span>
        <span class="es-pv-val es-mono" id="pvVal_${h}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${h}" style="${o ? "display: flex;" : "display: none;"}">
          <span class="volt" id="pvVolt_${h}" title="${this._language === "en" ? "PV Voltage" : "Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${h}" title="${this._language === "en" ? "PV Current" : "Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${h}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${h}">${_.toFixed(1).replace(".", ",")}</span> <span style="font-size: 9px; color: #64748b;">${r}</span> <span id="pvPercent_${h}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `, p.addEventListener("click", () => {
        var C;
        const v = u.power_entity || w || g || ((C = e.solar) == null ? void 0 : C.total_power_entity);
        this._fireMoreInfo(v);
      });
      const f = p.querySelector(`#pvVolt_${h}`);
      f && f.addEventListener("click", (v) => {
        v.stopPropagation(), w ? this._fireMoreInfo(w) : u.power_entity && this._fireMoreInfo(u.power_entity);
      });
      const S = p.querySelector(`#pvCurr_${h}`);
      S && S.addEventListener("click", (v) => {
        v.stopPropagation(), g ? this._fireMoreInfo(g) : u.power_entity && this._fireMoreInfo(u.power_entity);
      }), i.appendChild(p);
    }
  }
  _renderDynamicSubloads() {
    var r;
    const e = this._config || fe, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((r = e.load) == null ? void 0 : r.subloads) || []).forEach((o, a) => {
      const s = document.createElement("div");
      s.className = "es-subload-card clickable-node", s.id = `subloadCard_${a}`, s.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${be[o.icon] || be.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${o.name}</span>
        <span class="es-mono" id="subloadVal_${a}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, s.addEventListener("click", () => {
        this._fireMoreInfo(o.entity);
      }), i.appendChild(s);
    });
  }
  _renderDynamicBatteryRack() {
    var y, h, x, u, b, _, w;
    const e = this._config || fe, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((y = e.battery) == null ? void 0 : y.parallel_batteries) || ((x = (h = e.battery) == null ? void 0 : h.modules) == null ? void 0 : x.length) || 2, r = [82, 76, 91, 68, 85, 90, 72, 80], o = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], a = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], s = [12, 8, 15, 9, 14, 11, 18, 10], l = this._t("bat_prefix"), c = this._language === "en" ? "kW" : "кВт", d = this._language === "en" ? "kWh" : "кВт·год";
    for (let g = 1; g <= n; g++) {
      const p = ((b = (u = e.battery) == null ? void 0 : u.modules) == null ? void 0 : b[g - 1]) || ((w = (_ = e.battery) == null ? void 0 : _.module_entities) == null ? void 0 : w[g - 1]) || {}, f = p.name || `${l} ${g}`, S = r[(g - 1) % r.length], v = o[(g - 1) % o.length], C = a[(g - 1) % a.length], B = s[(g - 1) % s.length], $ = document.createElement("div");
      $.className = "es-battery-pack-card glow-battery clickable-node", $.id = `batPackCard_${g}`, $.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${be.battery_vertical}</div>
        <span class="es-bat-name">${f}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${g}">${S}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${g}">${v.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${g}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${c}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${g}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${g}">${C.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${g}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${g}">${B} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${g}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${d}</div>
      `, $.addEventListener("click", (k) => {
        var K;
        if (k.target.closest(`#batPackTemp_${g}`)) {
          const Y = p.temperature_entity || p.temp || `sensor.bms_rack${g}_temperature`;
          this._fireMoreInfo(Y);
          return;
        }
        if (k.target.closest(`#batPackDelta_${g}`)) {
          const Y = p.cell_delta_entity || p.delta_entity || `sensor.bms_rack${g}_cell_delta`;
          this._fireMoreInfo(Y);
          return;
        }
        const O = p.soc_entity || p.soc || p.voltage_entity || p.volt || p.current_entity || ((K = e.battery) == null ? void 0 : K.soc_entity);
        this._fireMoreInfo(O);
      }), i.appendChild($);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var b, _, w, g, p, f, S, v, C, B;
    const e = this._config || fe, i = ((b = this._nodes) == null ? void 0 : b.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", e.show_quick_settings === !1)) return;
    const n = this._themeMode === "light", r = this._language === "en", o = ((_ = e.controls) == null ? void 0 : _.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", a = ((w = e.controls) == null ? void 0 : w.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", s = ((g = e.controls) == null ? void 0 : g.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", l = document.createElement("div");
    l.className = "es-quick-settings-card", l.id = "quickSettingsCard", l.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${be.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n ? be.sun_mode : be.moon}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${o}">
              <span class="es-ctrl-icon es-ctrl-solar">${be.sun_mode}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${a}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${be.inverter}</span>
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
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${be.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (p = l.querySelector("#btnEditCardQs")) == null || p.addEventListener("click", ($) => {
      $.stopPropagation(), this._openCardEditor();
    }), (f = l.querySelector("#btnThemeToggle")) == null || f.addEventListener("click", ($) => {
      $.stopPropagation(), this._toggleTheme();
    }), (S = l.querySelector("#btnLangToggle")) == null || S.addEventListener("click", ($) => {
      $.stopPropagation(), this._toggleLanguage();
    }), (v = l.querySelector("#ctrlLabelWrapSolar")) == null || v.addEventListener("click", () => this._fireMoreInfo(o)), (C = l.querySelector("#ctrlLabelWrapSell")) == null || C.addEventListener("click", () => this._fireMoreInfo(a)), (B = l.querySelector("#ctrlLabelWrapGrid")) == null || B.addEventListener("click", () => this._fireMoreInfo(s));
    const c = l.querySelector("#ctrlSliderSolar"), d = l.querySelector("#ctrlValSolar");
    c && (this._updateSliderGradient(c), c.addEventListener("input", ($) => {
      d && (d.innerText = `${$.target.value} A`), this._updateSliderGradient(c);
    }), c.addEventListener("change", ($) => {
      this._setNumberValue(o, $.target.value);
    }));
    const y = l.querySelector("#ctrlSliderSell"), h = l.querySelector("#ctrlValSell");
    y && (this._updateSliderGradient(y), y.addEventListener("input", ($) => {
      const k = Number($.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      h && (h.innerText = `${k} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(y);
    }), y.addEventListener("change", ($) => {
      this._setNumberValue(a, $.target.value);
    }));
    const x = l.querySelector("#ctrlSliderGrid"), u = l.querySelector("#ctrlValGrid");
    x && (this._updateSliderGradient(x), x.addEventListener("input", ($) => {
      u && (u.innerText = `${$.target.value} A`), this._updateSliderGradient(x);
    }), x.addEventListener("change", ($) => {
      this._setNumberValue(s, $.target.value);
    })), i.appendChild(l), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const i = parseFloat(e.min) || 0, n = parseFloat(e.max) || 100, r = parseFloat(e.value) || 0, o = Math.max(0, Math.min(100, (r - i) / (n - i) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${o}%, rgba(255, 255, 255, 0.12) ${o}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, i) {
    if (!this._hass || !e) return;
    const r = e.split(".")[0] || "number", o = Number(i);
    this._hass.callService(r, "set_value", {
      entity_id: e,
      value: o
    });
  }
  _updateControlSliders() {
    var h, x, u, b, _, w, g, p, f;
    const e = this._config || fe;
    if (e.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const n = ((h = e.controls) == null ? void 0 : h.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", r = ((x = e.controls) == null ? void 0 : x.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", o = ((u = e.controls) == null ? void 0 : u.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", a = i.getElementById("ctrlSliderSolar"), s = i.getElementById("ctrlValSolar"), l = i.getElementById("ctrlSliderSell"), c = i.getElementById("ctrlValSell"), d = i.getElementById("ctrlSliderGrid"), y = i.getElementById("ctrlValGrid");
    if (a && (!a.matches || !a.matches(":active"))) {
      const S = (_ = (b = this._hass) == null ? void 0 : b.states) == null ? void 0 : _[n], v = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : a.value ? parseFloat(a.value) : 80;
      a.value = v, s && (s.innerText = `${Math.round(v)} A`), this._updateSliderGradient(a);
    }
    if (l && (!l.matches || !l.matches(":active"))) {
      const S = (g = (w = this._hass) == null ? void 0 : w.states) == null ? void 0 : g[r], v = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : l.value ? parseFloat(l.value) : 5e3;
      l.value = v;
      const C = Math.round(v).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), B = this._language === "uk" ? "Вт" : "W";
      c && (c.innerText = `${C} ${B}`), this._updateSliderGradient(l);
    }
    if (d && (!d.matches || !d.matches(":active"))) {
      const S = (f = (p = this._hass) == null ? void 0 : p.states) == null ? void 0 : f[o], v = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : d.value ? parseFloat(d.value) : 70;
      d.value = v, y && (y.innerText = `${Math.round(v)} A`), this._updateSliderGradient(d);
    }
  }
  _bindInteractions() {
    var n, r, o, a, s, l, c, d, y, h, x, u, b, _, w, g, p, f, S, v, C, B, $;
    const e = this.shadowRoot, i = this._config || fe;
    (n = e.getElementById("headerViewToggle")) == null || n.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleViewMode();
    }), (r = e.getElementById("headerEditCard")) == null || r.addEventListener("click", (k) => {
      k.stopPropagation(), this._openCardEditor();
    }), (o = e.getElementById("headerThemeToggle")) == null || o.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleTheme();
    }), (a = e.getElementById("headerLangToggle")) == null || a.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleLanguage();
    }), (s = e.getElementById("headerZoomIn")) == null || s.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (l = e.getElementById("headerZoomOut")) == null || l.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (c = e.getElementById("headerZoomVal")) == null || c.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(1);
    }), (d = e.getElementById("solarHeaderNode")) == null || d.addEventListener("click", () => {
      var k, O;
      this._fireMoreInfo(((k = i.solar) == null ? void 0 : k.daily_yield_entity) || ((O = i.solar) == null ? void 0 : O.total_power_entity));
    }), (y = e.getElementById("totalPvPowerBadge")) == null || y.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.solar) == null ? void 0 : k.total_power_entity);
    }), (h = e.getElementById("gridNode")) == null || h.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.power_entity);
    }), (x = e.getElementById("nonEssentialNode")) == null || x.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.non_essential_power_entity);
    }), (u = e.getElementById("carNode")) == null || u.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.car_power_entity);
    }), (b = e.getElementById("inverterNode")) == null || b.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.inverter) == null ? void 0 : k.power_entity);
    }), (_ = e.getElementById("inverterSelfConsumptionBox")) == null || _.addEventListener("click", (k) => {
      var O;
      k.stopPropagation(), (O = i.inverter) != null && O.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (w = e.getElementById("auxNode")) == null || w.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.aux) == null ? void 0 : k.power_entity);
    }), (g = e.getElementById("essentialNode")) == null || g.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.load) == null ? void 0 : k.essential_power_entity);
    }), (p = e.getElementById("masterBatteryHub")) == null || p.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.battery) == null ? void 0 : k.soc_entity);
    }), (f = e.getElementById("batChargeDaily")) == null || f.addEventListener("click", (k) => {
      var O;
      k.stopPropagation(), this._fireMoreInfo(((O = i.battery) == null ? void 0 : O.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (S = e.getElementById("batDischargeDaily")) == null || S.addEventListener("click", (k) => {
      var O;
      k.stopPropagation(), this._fireMoreInfo(((O = i.battery) == null ? void 0 : O.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let k = 1; k <= 8; k++) {
      const O = e.getElementById(`batBranchBadge_${k}`), K = ((C = (v = i.battery) == null ? void 0 : v.modules) == null ? void 0 : C[k - 1]) || (($ = (B = i.battery) == null ? void 0 : B.module_entities) == null ? void 0 : $[k - 1]) || {};
      O == null || O.addEventListener("click", () => {
        var re;
        const Y = K.power_entity || K.current_entity || K.soc_entity || ((re = i.battery) == null ? void 0 : re.soc_entity);
        this._fireMoreInfo(Y);
      });
    }
  }
  _fetchNightEndFromHa(e, i) {
    var l, c;
    if (this._fetchingHistoryForDate === e) return;
    const r = (l = (this._config || fe).grid) == null ? void 0 : l.import_daily_entity;
    if (!((c = this._hass) != null && c.callWS) || !r) return;
    this._fetchingHistoryForDate = e;
    const o = /* @__PURE__ */ new Date(), a = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), s = new Date(o.getFullYear(), o.getMonth(), o.getDate(), i, 5, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: a.toISOString(),
      end_time: s.toISOString(),
      entity_ids: [r],
      no_attributes: !0
    }).then((d) => {
      const y = d == null ? void 0 : d[r];
      if (y && y.length > 0) {
        let h = null;
        for (let x = y.length - 1; x >= 0; x--) {
          const u = parseFloat(y[x].state);
          if (!isNaN(u) && u >= 0) {
            h = u;
            break;
          }
        }
        if (h !== null) {
          const x = `es_tariff_split_${e}`;
          let u = {};
          if (typeof localStorage < "u")
            try {
              const b = localStorage.getItem(x);
              b && (u = JSON.parse(b));
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
  _calculateTariffs(e, i, n, r = 0) {
    var f, S, v, C, B, $, k, O, K, Y, re, E, N, R, T, A, Q, oe, he, ee, ke;
    const a = (this._config || fe).tariffs || {};
    if (a.enabled === !1) {
      (f = this._nodes) != null && f.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (S = this._nodes) != null && S.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (v = this._nodes) != null && v.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (C = this._nodes) != null && C.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none"), (B = this._nodes) != null && B.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), ($ = this._nodes) != null && $.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    const s = a.currency || "грн", l = typeof a.day_rate == "number" ? a.day_rate : 4.32, c = typeof a.night_rate == "number" ? a.night_rate : 2.16, d = typeof a.export_rate == "number" ? a.export_rate : 5.3, y = typeof a.night_start_hour == "number" ? a.night_start_hour : 23, h = typeof a.night_end_hour == "number" ? a.night_end_hour : 7, x = /* @__PURE__ */ new Date(), u = x.getHours() + x.getMinutes() / 60, b = y > h ? u >= y || u < h : u >= y && u < h;
    if ((k = this._nodes) != null && k.gridTariffBadge && a.show_active_badge !== !1) {
      const X = b ? c : l, J = b ? this._t("tariff_night") : this._t("tariff_day"), I = b ? "🌙" : "☀️", W = b ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", de = b ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", U = b ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = W, this._nodes.gridTariffBadge.style.border = `1px solid ${de}`, this._nodes.gridTariffBadge.style.color = U, this._nodes.gridTariffBadge.innerText = `${I} ${J}: ${X.toFixed(2)} ${s}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (O = this._nodes) != null && O.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((K = this._nodes) != null && K.solarSavingsDaily && a.show_solar_savings !== !1 && n > 0) {
      const X = n * l;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${X.toFixed(2)} ${s}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (Y = this._nodes) != null && Y.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((re = this._nodes) != null && re.gridExportIncomeRow && a.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const X = i * d;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${X.toFixed(2)} ${s}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (E = this._nodes) != null && E.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (N = this._nodes) != null && N.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (R = this._nodes) != null && R.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (T = this._nodes) != null && T.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    let _ = null, w = null;
    if (a.import_night_entity || a.import_day_entity) {
      const X = a.import_night_entity ? this._getEntityState(a.import_night_entity) : null, J = a.import_day_entity ? this._getEntityState(a.import_day_entity) : null;
      X && typeof X.val == "number" && (_ = X.val), J && typeof J.val == "number" && (w = J.val), _ !== null && w === null ? w = Math.max(0, e - _) : w !== null && _ === null && (_ = Math.max(0, e - w));
    }
    if (_ === null || w === null) {
      const X = `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`, J = `es_tariff_split_${X}`;
      let I = {};
      if (typeof localStorage < "u")
        try {
          const W = localStorage.getItem(J);
          W && (I = JSON.parse(W));
        } catch {
        }
      if (u < h) {
        if (_ = e, w = 0, I.ongoing_night_val = e, I.ongoing_night_hour = u, I.night_end = e, I.night_end_hour = u, I.night_end_verified = !1, typeof localStorage < "u")
          try {
            localStorage.setItem(J, JSON.stringify(I));
          } catch {
          }
      } else if (u >= h && u < y) {
        const W = I.night_end_verified === !0, de = typeof I.night_end_hour == "number" && I.night_end_hour >= h - 0.25;
        if ((W || de) && typeof I.night_end == "number" && I.night_end <= e)
          _ = I.night_end, w = Math.max(0, e - _);
        else {
          this._fetchNightEndFromHa(X, h);
          let U = e * Math.min(1, h / Math.max(u, 1));
          typeof r == "number" && r > 0.5 && (U = Math.min(e, Math.max(U, r))), _ = U, w = Math.max(0, e - _);
        }
        if (I.day_end = e, typeof localStorage < "u")
          try {
            localStorage.setItem(J, JSON.stringify(I));
          } catch {
          }
      } else {
        const W = typeof I.night_end == "number" && I.night_end_verified ? I.night_end : e * (h / u), de = typeof I.day_end == "number" ? I.day_end : e;
        w = Math.max(0, de - W);
        const U = Math.max(0, e - de);
        _ = W + U;
      }
    }
    const g = _ * c + w * l;
    (A = this._nodes) != null && A.gridCostDailyRow && a.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${g.toFixed(2)} ${s}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${_.toFixed(1)} + ☀️ ${w.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (Q = this._nodes) != null && Q.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
    const p = _ > 0 && l > c ? _ * (l - c) : 0;
    if ((oe = this._nodes) != null && oe.gridNightSavingsRow && a.show_night_savings !== !1 && p > 0.05 ? (this._nodes.gridNightSavingsVal && (this._nodes.gridNightSavingsVal.innerText = `🌙 ${this._t("tariff_night_saved")}: ~${p.toFixed(2)} ${s}`), this._nodes.gridNightSavingsRow.style.display = "block") : (he = this._nodes) != null && he.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (ee = this._nodes) != null && ee.netBenefitDailyRow && a.show_net_benefit !== !1) {
      const X = typeof n == "number" && n > 0 ? n * l : 0, J = typeof i == "number" && i > 0 ? i * d : 0, I = X + J - g;
      this._nodes.netBenefitDailyBadge && (I >= 0 ? (this._nodes.netBenefitDailyBadge.style.background = "rgba(16, 185, 129, 0.15)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(16, 185, 129, 0.35)", this._nodes.netBenefitDailyBadge.style.color = "#34d399", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_benefit")}: +${I.toFixed(2)} ${s}`) : (this._nodes.netBenefitDailyBadge.style.background = "rgba(56, 189, 248, 0.12)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(56, 189, 248, 0.3)", this._nodes.netBenefitDailyBadge.style.color = "#38bdf8", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_cost")}: ${I.toFixed(2)} ${s}`)), this._nodes.netBenefitDailyRow.style.display = "block";
    } else (ke = this._nodes) != null && ke.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
  }
  _updateValues() {
    var un, bn, yn, mn, _n, vn, xn, wn, kn, En, Sn, Cn, $n, Tn, Bn, In, Nn, An, Ln, Rn, Mn, Pn, Fn, On, Dn, Vn, zn, Wn, Gn, Kn, qn, jn, Hn, Un, Yn, Jn, Qn, Xn, Zn, er, tr, ir, nr, rr, or, ar, sr, lr, dr, cr, pr, fr, gr, hr, ur, br, yr, mr, _r, vr, xr, wr, kr, Er, Sr, Cr, $r, Tr, Br, Ir, Nr, Ar, Lr, Rr, Mr, Pr, Fr, Or, Dr, Vr, zr, Wr, Gr, Kr, qr, jr, Hr, Ur, Yr, Jr, Qr, Xr, Zr, eo, to, io, no, ro, oo, ao, so, lo, co, po, fo, go, ho, uo, bo, yo, mo, _o, vo, xo, wo, ko, Eo, So;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || fe, i = this._language === "en" ? "kW" : "кВт", n = ((un = e.solar) == null ? void 0 : un.pv_count) || ((yn = (bn = e.solar) == null ? void 0 : bn.strings) == null ? void 0 : yn.length) || 3;
    let r = 0, o = 0, a = !1;
    for (let m = 1; m <= n; m++) {
      const P = (_n = (mn = e.solar) == null ? void 0 : mn.strings) == null ? void 0 : _n[m - 1], M = (P == null ? void 0 : P.voltage_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_voltage` : ""), H = (P == null ? void 0 : P.current_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_current` : ""), L = (P == null ? void 0 : P.power_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_power` : "");
      if (this._getEntityState(L) || this._getEntityState(M) || this._getEntityState(H)) {
        a = !0;
        break;
      }
    }
    const s = [];
    for (let m = 1; m <= n; m++) {
      const P = this.shadowRoot.getElementById(`pvVal_${m}`), M = this.shadowRoot.getElementById(`pvVolt_${m}`), H = this.shadowRoot.getElementById(`pvCurr_${m}`), L = (xn = (vn = e.solar) == null ? void 0 : vn.strings) == null ? void 0 : xn[m - 1], Se = (L == null ? void 0 : L.voltage_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_voltage` : ""), te = (L == null ? void 0 : L.current_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_current` : ""), ve = (L == null ? void 0 : L.power_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_power` : ""), ge = this._getEntityState(Se), Ve = this._getEntityState(te), ae = this._getEntityState(ve);
      let xe = 0, Te = 0, le = 0;
      ae ? le = this._formatPower(ae).kw : ge && Ve ? le = ge.val * Ve.val / 1e3 : ge ? le = 0 : le = a ? 0 : 4, ge ? xe = ge.val : xe = a ? 0 : 380 + m * 4.5, Ve ? Te = Ve.val : ae && xe > 0 ? Te = le * 1e3 / xe : Te = a ? 0 : 3.12 + m * 0.28, r += le, o += Te, s.push({ kw: le, v: xe, a: Te }), P && (P.innerText = `${le.toFixed(3)} ${i}`), M && (M.innerText = `${xe.toFixed(1)} V`), H && (H.innerText = `${Te.toFixed(2)} A`);
      const pe = this.shadowRoot.getElementById(`pvMetrics_${m}`);
      if (pe) {
        const Bt = ((wn = e.solar) == null ? void 0 : wn.show_metrics) !== !1, st = !!(ge || Ve || !a || L != null && L.voltage_entity || L != null && L.current_entity || xe > 0 || Te > 0);
        pe.style.display = Bt && st ? "flex" : "none";
      }
      const He = (L == null ? void 0 : L.capacity_kw) !== void 0 ? parseFloat(L.capacity_kw) : (L == null ? void 0 : L.installed_power) !== void 0 ? parseFloat(L.installed_power) : a ? 0 : 4, Ct = He > 0 && le > 0 ? Math.min(100, Math.round(le / He * 100)) : 0, qt = this.shadowRoot.getElementById(`pvCapVal_${m}`), $t = this.shadowRoot.getElementById(`pvPercent_${m}`), Tt = this.shadowRoot.getElementById(`pvCap_${m}`);
      qt && (He > 0 ? (qt.innerText = He.toFixed(1).replace(".", ","), $t && ($t.innerText = `(${Ct}%)`, $t.style.color = Ct >= 70 ? "#34d399" : Ct >= 30 ? "#fbbf24" : "#94a3b8"), Tt && (Tt.style.display = "flex")) : Tt && (Tt.style.display = "none"));
    }
    const l = this._getEntityState((kn = e.solar) == null ? void 0 : kn.total_power_entity);
    let c = 0;
    l ? c = this._formatPower(l).kw : c = r;
    let d = ((En = e.solar) == null ? void 0 : En.installed_power) !== void 0 ? parseFloat(e.solar.installed_power) : 0;
    if (isNaN(d) || d <= 0) {
      let m = 0;
      for (let P = 0; P < n; P++) {
        const M = (Cn = (Sn = e.solar) == null ? void 0 : Sn.strings) == null ? void 0 : Cn[P], H = (M == null ? void 0 : M.capacity_kw) !== void 0 ? parseFloat(M.capacity_kw) : (M == null ? void 0 : M.installed_power) !== void 0 ? parseFloat(M.installed_power) : 0;
        !isNaN(H) && H > 0 && (m += H);
      }
      d = m > 0 ? m : a ? 0 : 12;
    }
    const y = d > 0 ? c / d * 100 : 0, h = Math.min(100, Math.max(0, y)), x = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${c.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${c.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge.title = this._language === "en" ? `Total PV current: ${o.toFixed(2)} A` : `Сумарний струм СЕС: ${o.toFixed(2)} A`), this._nodes.totalPvPercentBadge && (d > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(h)}%`, this._nodes.totalPvPercentBadge.style.color = h >= 70 ? "#34d399" : h >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = h >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (d > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${h.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = h >= 70 ? "#34d399" : h >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${d.toFixed(1).replace(".", ",")} ${x})`)) : o > 0 && (($n = e.solar) == null ? void 0 : $n.show_metrics) !== !1 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${o.toFixed(2)} A`, this._nodes.totalPvCapDetail.style.color = "#34d399"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = this._language === "en" ? "(current)" : "(струм)")) : this._nodes.totalPvSubline.style.display = "none");
    const u = this._getEntityState((Tn = e.solar) == null ? void 0 : Tn.daily_yield_entity), b = u ? u.val : a ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = b.toFixed(1);
    const _ = ((Bn = e.solar) == null ? void 0 : Bn.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = _.toFixed(1);
    const w = Math.min(100, Math.round(b / _ * 100));
    this._nodes.solarProgressBar.style.width = `${w}%`;
    const g = this._getEntityState((In = e.inverter) == null ? void 0 : In.power_entity);
    this._nodes.inverterPowerVal && ((Nn = e.inverter) != null && Nn.power_entity && g ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(g, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const p = this._getEntityState((An = e.inverter) == null ? void 0 : An.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = p ? p.val.toFixed(2) : "41,20";
    const f = this._getEntityState((Ln = e.inverter) == null ? void 0 : Ln.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = f ? f.val.toFixed(2) : "38,40";
    const S = this._getEntityState((Rn = e.inverter) == null ? void 0 : Rn.voltage_entity);
    this._nodes.inverterVolt.innerText = S ? S.val.toFixed(2) : "231,45";
    const v = this._getEntityState((Mn = e.inverter) == null ? void 0 : Mn.current_entity);
    this._nodes.inverterCurrent.innerText = v ? v.val.toFixed(2) : "8,60";
    const C = this._getEntityState((Pn = e.inverter) == null ? void 0 : Pn.frequency_entity);
    this._nodes.inverterFreq.innerText = C ? C.val.toFixed(2) : "50,01";
    const B = ((Fn = e.wind) == null ? void 0 : Fn.show) !== !1 || ((On = e.aux) == null ? void 0 : On.type) === "wind", $ = this.shadowRoot.getElementById("windStationContainer"), k = this._nodes.auxNode;
    let O = 0;
    if ($)
      if (!B)
        $.classList.add("hidden");
      else {
        $.classList.remove("hidden");
        const m = ((Dn = e.wind) == null ? void 0 : Dn.turbine_count) || ((zn = (Vn = e.wind) == null ? void 0 : Vn.turbines) == null ? void 0 : zn.length) || 2, P = ((Wn = e.wind) == null ? void 0 : Wn.turbines) || [];
        let M = 0, H = 0, L = !1, Se = !1;
        for (let ae = 0; ae < m; ae++) {
          const xe = P[ae] || {
            power_entity: `sensor.wind_turbine_${ae + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((Gn = e.wind) == null ? void 0 : Gn.animation_threshold) || 50
          }, Te = this.shadowRoot.getElementById(`turbinePower_${ae + 1}`), le = this.shadowRoot.getElementById(`turbineStatus_${ae + 1}`), pe = this.shadowRoot.getElementById(`turbineIcon_${ae + 1}`), He = this.shadowRoot.getElementById(`turbineCard_${ae + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${ae + 1}`);
          const Ct = this.shadowRoot.getElementById(`turbineDailyVal_${ae + 1}`), qt = this.shadowRoot.getElementById(`turbineMonthlyVal_${ae + 1}`), $t = this.shadowRoot.getElementById(`turbineEnergyFooter_${ae + 1}`), Tt = this._hass ? 0 : ae === 0 ? 1.56 : 0.22, Bt = this._getEntityState(xe.power_entity), st = this._formatPower(Bt, Tt);
          Te && (Te.innerText = st.str), O += st.kw;
          let jt = st.kw * 1e3;
          Bt && Bt.unit === "W" && (jt = Bt.val);
          const Zt = xe.animation_threshold ?? ((Kn = e.wind) == null ? void 0 : Kn.animation_threshold) ?? 50, ht = pe == null ? void 0 : pe.querySelector(".turbine-rotor"), ei = xe.rpm_entity || xe.speed_entity || ((qn = e.wind) == null ? void 0 : qn.rpm_entity) || ((jn = e.wind) == null ? void 0 : jn.speed_entity) || (ae === 0 ? "sensor.wind_rpm" : "");
          let ie = ei && ((Hn = this._hass) != null && Hn.states[ei]) ? this._getEntityState(ei) : null;
          if (!ie && ae === 0 && ((Un = this._hass) != null && Un.states["sensor.wind_rpm"]) && (ie = this._getEntityState("sensor.wind_rpm")), jt >= Zt || ie && typeof ie.val == "number" && ie.val > 0) {
            ht && ht.classList.add("spinning"), He && (He.classList.add("glow-wind"), He.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const nt = ((Yn = e.wind) == null ? void 0 : Yn.max_power) || 3e3, Ti = ((Jn = e.wind) == null ? void 0 : Jn.max_rpm) || 600;
            let ti = 0;
            ie && typeof ie.val == "number" && ie.val > 0 ? ti = Math.min(1, Math.max(0, ie.val / Ti)) : ti = Math.min(1, Math.max(0, (jt - Zt) / (nt - Zt)));
            const ze = (3.2 - ti * 2.75).toFixed(2);
            ht && ht.style.setProperty("--turbine-speed", `${ze}s`), le && (le.innerText = this._t("wind_gen"), le.style.color = "#67e8f9");
          } else
            ht && ht.classList.remove("spinning"), He && (He.classList.remove("glow-wind"), He.style.borderColor = "rgba(255, 255, 255, 0.08)"), le && (le.innerText = this._t("wind_calm"), le.style.color = "#94a3b8");
          const Nt = this.shadowRoot.getElementById(`turbineRpmBox_${ae + 1}`);
          if (Nt)
            if (ie && ie.raw !== "unavailable" && ie.raw !== "unknown" && typeof ie.val == "number" && !isNaN(ie.val)) {
              Nt.style.display = "inline";
              const Ti = ie.unit ? ie.unit : "RPM";
              Nt.innerHTML = `<span id="turbineRpmVal_${ae + 1}">${Math.round(ie.val)}</span> ${Ti}`;
            } else
              Nt.style.display = "none";
          const we = this._getEntityState(xe.daily_energy_entity), tt = this._getEntityState(xe.monthly_energy_entity);
          (ae === 0 || ae === 1) && (st.kw, ie && typeof ie.val == "number" && ie.val > 0 && Math.round(ie.val), we && typeof we.val == "number" && we.val), Ct && (Ct.innerText = we && typeof we.val == "number" && !isNaN(we.val) ? we.val.toFixed(2) : "0.00"), qt && (qt.innerText = tt && typeof tt.val == "number" && !isNaN(tt.val) ? tt.val.toFixed(1) : "0.0");
          const it = !!(xe.daily_energy_entity || xe.monthly_energy_entity);
          $t && ($t.style.display = it ? "flex" : "none"), we && typeof we.val == "number" && !isNaN(we.val) && (M += we.val, L = !0), tt && typeof tt.val == "number" && !isNaN(tt.val) && (H += tt.val, Se = !0);
        }
        const te = this.shadowRoot.getElementById("windTotalDailyVal"), ve = this.shadowRoot.getElementById("windTotalMonthlyVal"), ge = this._getEntityState((Qn = e.wind) == null ? void 0 : Qn.daily_energy_entity), Ve = this._getEntityState((Xn = e.wind) == null ? void 0 : Xn.monthly_energy_entity);
        te && (ge && typeof ge.val == "number" && !isNaN(ge.val) ? te.innerText = ge.val.toFixed(2) : L ? te.innerText = M.toFixed(2) : te.innerText = "0.00"), ve && (Ve && typeof Ve.val == "number" && !isNaN(Ve.val) ? ve.innerText = Ve.val.toFixed(1) : Se ? ve.innerText = H.toFixed(1) : ve.innerText = "0.0");
      }
    let K = 0;
    if (k)
      if (((Zn = e.aux) == null ? void 0 : Zn.type) === "none" || ((er = e.aux) == null ? void 0 : er.type) === "wind")
        k.classList.add("hidden");
      else {
        k.classList.remove("hidden");
        const m = this._getEntityState((tr = e.aux) == null ? void 0 : tr.power_entity), P = this._hass ? 0 : 2, M = this._formatPower(m, P);
        K = M.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = M.str);
        const H = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let L = (ir = e.aux) == null ? void 0 : ir.title;
        ((nr = e.aux) == null ? void 0 : nr.type) === "microinverter" && (!L || L === "Вітрогенератор") ? L = "Мікроінвертор" : (rr = e.aux) != null && rr.type && H[e.aux.type] && (!L || L === "Вітрогенератор") ? L = H[e.aux.type] : L || (L = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = L), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = be[(or = e.aux) == null ? void 0 : or.type] || be.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((ar = e.aux) == null ? void 0 : ar.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), k.style.borderColor = "rgba(192, 132, 252, 0.45)", k.style.background = "rgba(88, 28, 135, 0.35)", k.classList.remove("glow-wind"), k.classList.add("glow-aux");
      }
    const Y = this.shadowRoot.getElementById("nonEssentialNode"), re = !!((sr = e.grid) != null && sr.show_non_essential && ((lr = e.grid) != null && lr.non_essential_power_entity)) || ((dr = e.grid) == null ? void 0 : dr.show_non_essential) !== !1 && !!((cr = e.grid) != null && cr.non_essential_power_entity);
    let E = 0;
    if (Y)
      if (re) {
        Y.classList.remove("hidden");
        const m = this._getEntityState(e.grid.non_essential_power_entity), P = this._formatPower(m, 0);
        E = P.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = P.str);
      } else
        Y.classList.add("hidden");
    const N = this.shadowRoot.getElementById("carNode"), R = !!((pr = e.grid) != null && pr.show_car && ((fr = e.grid) != null && fr.car_power_entity)) || ((gr = e.grid) == null ? void 0 : gr.show_car) !== !1 && !!((hr = e.grid) != null && hr.car_power_entity);
    let T = 0;
    if (N)
      if (R) {
        N.classList.remove("hidden");
        const m = this._getEntityState(e.grid.car_power_entity), P = this._formatPower(m, 0);
        T = P.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = P.str);
      } else
        N.classList.add("hidden");
    let A = 0;
    (((ur = e.load) == null ? void 0 : ur.subloads) || []).forEach((m, P) => {
      const M = this.shadowRoot.getElementById(`subloadVal_${P}`), H = this._getEntityState(m.entity), L = this._formatPower(H, 0);
      A += L.kw, M && (M.innerText = L.str);
    });
    const Q = this._getEntityState((br = e.battery) == null ? void 0 : br.soc_entity), oe = Q ? Q.val : 80;
    this._nodes.masterBatterySoc.innerText = `${oe.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const he = this._getEntityState((yr = e.battery) == null ? void 0 : yr.power_entity), ee = this._getEntityState((mr = e.battery) == null ? void 0 : mr.current_entity), ke = he ? he.unit === "W" ? he.val / 1e3 : he.val : 0, X = ((_r = e.battery) == null ? void 0 : _r.power_sign) || ((vr = e.battery) != null && vr.invert_power ? "standard" : "deye");
    let J = !1, I = !1;
    const W = Math.abs(ke);
    W >= 0.02 ? X === "deye" ? ke < 0 ? J = !0 : I = !0 : ke > 0 ? J = !0 : I = !0 : ee && Math.abs(ee.val) >= 0.3 && (X === "deye" ? ee.val < 0 ? J = !0 : I = !0 : ee.val > 0 ? J = !0 : I = !0), this._isCharging = J, this._isDischarging = I;
    const U = J ? W : 0, qe = I ? W : 0;
    if (this._nodes.masterBatteryFlowHint) {
      let m = this._t("bat_idle"), P = "#94a3b8";
      J ? (m = this._t("bat_dir_charge"), P = "#34d399") : I && (m = this._t("bat_dir_discharge"), P = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${W.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${P}; font-weight: 700; font-size: 14px;">${m}</span>`;
    }
    const Fe = this._getEntityState((xr = e.battery) == null ? void 0 : xr.voltage_entity), mt = Fe ? Fe.val.toFixed(2) : "53.24", Jt = ee ? ee.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${mt.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${Jt.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((wr = e.battery) == null ? void 0 : wr.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const m = ((kr = e.battery) == null ? void 0 : kr.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${m}%`;
    }
    let Oe = this._getEntityState((Er = e.load) == null ? void 0 : Er.essential_power_entity);
    !Oe && (!((Sr = e.load) != null && Sr.essential_power_entity) || ((Cr = e.load) == null ? void 0 : Cr.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || (($r = e.load) == null ? void 0 : $r.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (Oe = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const Ge = Oe && typeof Oe.val == "number" && !isNaN(Oe.val) ? Math.max(0, Oe.unit === "W" ? Oe.val / 1e3 : Oe.val) : 0, Rt = !!(Oe && Ge > 0);
    let Ne = null, Ue = !1, De = this._getEntityState((Tr = e.grid) == null ? void 0 : Tr.power_entity);
    if (!De) {
      const m = [
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
      for (const P of m) {
        const M = this._getEntityState(P);
        if (M && typeof M.val == "number" && !isNaN(M.val)) {
          De = M;
          break;
        }
      }
    }
    const ct = De ? De.unit === "W" ? De.val / 1e3 : De.val : 0, Ae = c + O + (K > 0 ? K : 0) + qe;
    if ((Br = e.grid) != null && Br.external_power_entity) {
      const m = this._getEntityState(e.grid.external_power_entity);
      if (m && typeof m.val == "number" && !isNaN(m.val)) {
        const P = Math.abs(m.unit === "W" ? m.val / 1e3 : m.val), M = P < 0.03 && (U > 0.1 && Ae < 0.1 || ct > 0.1), H = U > 0.5 && Ae < 0.15 && P < U - 0.2;
        !M && !H && (Ne = m, Ue = !0);
      }
    }
    if (!Ne)
      if (De && ct > 0.05)
        Ne = De, Ue = !1;
      else {
        const m = [
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
        ], P = this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power") || this._getEntityState("sensor.solarman_external_power_l1"), M = this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power") || this._getEntityState("sensor.solarman_external_power_l2"), H = this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power") || this._getEntityState("sensor.solarman_external_power_l3");
        let L = null;
        if (P && M && H && !isNaN(P.val) && !isNaN(M.val) && !isNaN(H.val)) {
          const Se = (P.unit === "kW" ? P.val * 1e3 : P.val) + (M.unit === "kW" ? M.val * 1e3 : M.val) + (H.unit === "kW" ? H.val * 1e3 : H.val);
          L = { val: Se, unit: "W", raw: String(Se) };
        }
        if (!L)
          for (const Se of m) {
            const te = this._getEntityState(Se);
            if (te && typeof te.val == "number" && !isNaN(te.val)) {
              L = te;
              break;
            }
          }
        if (!L && ((Ir = this._hass) != null && Ir.states)) {
          const te = Object.keys(this._hass.states).find(
            (ve) => /(external_power|external_ct|ct1_power|grid_external_power)/i.test(ve) && !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(ve)
          );
          if (te) {
            const ve = this._getEntityState(te);
            ve && typeof ve.val == "number" && !isNaN(ve.val) && (L = ve);
          }
        }
        if (L) {
          const Se = Math.abs(L.unit === "kW" ? L.val : L.val / 1e3), te = Se < 0.03 && (U > 0.1 && Ae < 0.1 || ct > 0.1 && Ae < 0.1), ve = U > 0.5 && Ae < 0.15 && Se < U - 0.2;
          !te && !ve && Se > 0 && (Ne = L, Ue = !0);
        }
        Ne || (Ne = De, Ue = !1);
      }
    const Ce = Ne ? Ne.unit === "W" ? Ne.val / 1e3 : Ne.val : 0, _t = ((Nr = e.grid) == null ? void 0 : Nr.power_sign) || ((Ar = e.grid) != null && Ar.invert_power ? "inverted" : "deye"), Mt = ((Lr = e.grid) == null ? void 0 : Lr.selling_enabled) === !0, je = (((Rr = e.grid) == null ? void 0 : Rr.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, pt = this._getEntityState((Mr = e.grid) == null ? void 0 : Mr.status_entity), D = this._getEntityState(((Pr = e.grid) == null ? void 0 : Pr.voltage_entity) || ((Fr = e.inverter) == null ? void 0 : Fr.voltage_entity)), ye = ((Or = e.grid) == null ? void 0 : Or.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90, _e = this._getEntityState(((Dr = e.inverter) == null ? void 0 : Dr.frequency_entity) || ((Vr = e.grid) == null ? void 0 : Vr.frequency_entity)), Le = this._getEntityState((zr = e.inverter) == null ? void 0 : zr.status_entity);
    let ce = !0;
    if (pt) {
      const m = String(pt.raw || pt.val).toLowerCase();
      (m === "off" || m === "false" || m === "0" || m === "disconnected" || m === "offline" || m === "unavailable" || m === "unknown") && (ce = !1);
    } else D && typeof D.val == "number" && !isNaN(D.val) ? D.val < ye && (ce = !1) : _e && typeof _e.val == "number" && !isNaN(_e.val) && _e.val < 10 && (ce = !1);
    Le && Le.raw && /(eps|island|off-grid|standby|fault|no grid)/i.test(String(Le.raw)) && (ce = !1);
    const Pt = Ae < 0.15, vt = Ae < U + 0.05, xt = Pt || vt;
    let se = !1, Ee = !1, q = 0;
    if (!ce)
      q = 0, se = !1, Ee = !1;
    else {
      if (xt)
        q = Math.abs(Ce), q >= je ? (Ee = !0, se = !1) : (q = 0, Ee = !1, se = !1);
      else if (Ue)
        q = Math.abs(Ce), q >= je && (_t === "deye" ? Ce < 0 ? se = !0 : Ee = !0 : Ce > 0 ? se = !0 : Ee = !0);
      else if (_t === "deye") {
        if (Ce > 0)
          q = Ce, q >= je && (Ee = !0);
        else if (Ce < 0) {
          const M = Math.abs(Ce), H = Math.max(0, M - Ge);
          H >= je ? (q = H, se = !0) : (q = 0, se = !1);
        }
      } else if (Ce < 0)
        q = Math.abs(Ce), q >= je && (Ee = !0);
      else if (Ce > 0) {
        const M = Math.max(0, Ce - Ge);
        M >= je ? (q = M, se = !0) : (q = 0, se = !1);
      }
      if (((Wr = e.grid) == null ? void 0 : Wr.auto_calculate) !== !1 && Ee && !Ue) {
        const M = Math.max(Ge, A), H = U + M + E + T;
        M > 0.05 && H > Ae + q + 0.1 && (q = q + M);
      }
      if (xt) {
        const M = this._getEntityState((Gr = e.grid) == null ? void 0 : Gr.voltage_entity) || this._getEntityState((Kr = e.inverter) == null ? void 0 : Kr.voltage_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_voltage") || this._getEntityState("sensor.esp32_deye_inverter_grid_voltage") || this._getEntityState("sensor.deye_12k_inverter_grid_voltage"), H = this._getEntityState((qr = e.inverter) == null ? void 0 : qr.current_entity) || this._getEntityState((jr = e.grid) == null ? void 0 : jr.current_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_current") || this._getEntityState("sensor.inverter_12_kvt_current_l1") || this._getEntityState("sensor.esp32_deye_inverter_grid_current") || this._getEntityState("sensor.deye_12k_inverter_grid_current") || this._getEntityState("sensor.grid_current"), L = M && typeof M.val == "number" && !isNaN(M.val) ? M.val : 0, Se = H && typeof H.val == "number" && !isNaN(H.val) ? H.val : 0, te = L >= ye && Se >= 0.5, ve = U > 0.1 && Ae < 0.1;
        if (te) {
          const le = L * Se / 1e3;
          (q < 0.05 || q < U - 0.05 || le > q + 0.3) && (q = le, Ee = !0, se = !1);
        } else if (ve && (q < 0.05 || q < U - 0.05)) {
          const le = Math.max(Ge, A), pe = le > 0 ? le : 0.8;
          q = Math.max(q, U + 0.15 + pe), Ee = !0, se = !1;
        }
        const Ve = (((Hr = e.inverter) == null ? void 0 : Hr.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3, ae = Math.max(Ge, A), xe = U + ae + E + T + Ve, Te = Math.max(0, xe - Ae);
        Te > 0.05 && q < Te - 0.1 && (q = Te, Ee = !0, se = !1);
      }
      const P = Math.max(0, c + O + (K > 0 ? K : 0) + qe - U - Ge - E - T);
      xt || !Mt ? se = !1 : se && q > P + 0.1 && (q = P, q < je && (se = !1, q = 0));
    }
    const wt = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (ce ? (this._nodes.gridPowerVal.innerText = `${q.toFixed(3)} ${i}`, se ? this._nodes.gridPowerVal.style.color = "#34d399" : Ee ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (ce ? se ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : Ee ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), wt && (ce ? (wt.classList.add("glow-grid"), wt.style.borderColor = "rgba(56, 189, 248, 0.4)") : (wt.classList.remove("glow-grid"), wt.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const Qe = this._getEntityState((Ur = e.grid) == null ? void 0 : Ur.import_daily_entity);
    this._nodes.gridImportDaily.innerText = Qe ? `${Qe.val.toFixed(2)} kWh` : "0.00 kWh";
    const Xe = this._getEntityState((Yr = e.grid) == null ? void 0 : Yr.export_daily_entity);
    this._nodes.gridExportDaily.innerText = Xe ? `${Xe.val.toFixed(2)} kWh` : "0.00 kWh";
    const mi = (Jr = e.battery) == null ? void 0 : Jr.charge_daily_entity;
    let Re = this._getEntityState(mi);
    Re || (Re = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge"));
    const _i = Re && typeof Re.val == "number" ? Re.val : 0;
    this._calculateTariffs(Qe ? Qe.val : 0, Xe ? Xe.val : 0, b, _i);
    const vi = Ee ? q : 0, pi = se ? q : 0, fi = c + O + (K > 0 ? K : 0) + vi + qe, xi = U + pi + E + T, gi = Math.max(0, fi - xi), ft = this._getEntityState((Qr = e.inverter) == null ? void 0 : Qr.self_consumption_entity), Ft = ft && typeof ft.val == "number" && !isNaN(ft.val) ? Math.max(0, ft.unit === "W" ? ft.val / 1e3 : ft.val) : null, Ot = (((Xr = e.inverter) == null ? void 0 : Xr.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
    let ot = 0, Ze = 0;
    if (Rt)
      if (ot = Math.max(A, Ge), Ft !== null)
        Ze = Ft;
      else {
        const m = Math.max(0, fi - (U + pi + ot + E + T));
        Ze = m > 0 ? m : Ot;
      }
    else
      Ft !== null ? Ze = Ft : Ze = Math.min(gi, Ot), ot = Math.max(A, Math.max(0, gi - Ze));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((Zr = e.inverter) == null ? void 0 : Zr.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", Ze < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(Ze * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${Ze.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${ot.toFixed(3)} ${i}`;
    const gt = this._getEntityState((eo = e.load) == null ? void 0 : eo.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = gt ? `${gt.val.toFixed(2)} kWh` : "12,40 kWh";
    const Dt = this._getEntityState(((to = e.solar) == null ? void 0 : to.autarky_entity) || "sensor.deye_inverter_daily_autarky"), Vt = this._getEntityState(((io = e.solar) == null ? void 0 : io.self_consumption_entity) || "sensor.deye_inverter_daily_self_consumption");
    let zt = Dt && typeof Dt.val == "number" && !isNaN(Dt.val) ? Dt.val : null;
    if (zt === null) {
      const m = gt && typeof gt.val == "number" && !isNaN(gt.val) ? gt.val : 12.4, P = Qe && typeof Qe.val == "number" && !isNaN(Qe.val) ? Qe.val : 0;
      m > 0.05 ? zt = Math.min(100, Math.max(0, (m - P) / m * 100)) : zt = 100;
    }
    let Wt = Vt && typeof Vt.val == "number" && !isNaN(Vt.val) ? Vt.val : null;
    if (Wt === null) {
      const m = Xe && typeof Xe.val == "number" && !isNaN(Xe.val) ? Xe.val : 0;
      b > 0.05 ? Wt = Math.min(100, Math.max(0, (b - m) / b * 100)) : Wt = 0;
    }
    this._nodes.autarkyVal && (this._nodes.autarkyVal.innerText = `${Math.round(zt)}%`), this._nodes.selfConsVal && (this._nodes.selfConsVal.innerText = `${Math.round(Wt)}%`);
    const Gt = ((no = e.battery) == null ? void 0 : no.parallel_batteries) || ((oo = (ro = e.battery) == null ? void 0 : ro.modules) == null ? void 0 : oo.length) || 2;
    let Kt = 0;
    for (let m = 0; m < Gt; m++) {
      const P = ((so = (ao = e.battery) == null ? void 0 : ao.modules) == null ? void 0 : so[m]) || ((co = (lo = e.battery) == null ? void 0 : lo.module_entities) == null ? void 0 : co[m]) || {}, M = P.capacity_kwh !== void 0 ? parseFloat(P.capacity_kwh) : m === 0 ? 7.88 : m === 1 ? 5.12 : (((po = e.battery) == null ? void 0 : po.capacity_kwh) || 13) / Gt;
      Kt += isNaN(M) ? 0 : M;
    }
    Kt <= 0 && (Kt = parseFloat((fo = e.battery) == null ? void 0 : fo.capacity_kwh) || 13);
    const Qt = this._getEntityState(((go = e.battery) == null ? void 0 : go.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), Xt = Qt && !isNaN(Qt.val) ? Qt.val : null, kt = Xt !== null && Xt <= 40 ? Xt : Kt, hi = this._getEntityState(((ho = e.battery) == null ? void 0 : ho.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), wi = hi ? hi.val : 80, me = kt * (wi / 100), V = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${me.toFixed(2).replace(".", ",")} ${V} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${kt.toFixed(1).replace(".", ",")})</span></span>`);
    const G = this._getEntityState(((uo = e.battery) == null ? void 0 : uo.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), j = G ? G.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${j.toFixed(1).replace(".", ",")}`), Re || (Re = this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const at = (bo = e.battery) == null ? void 0 : bo.discharge_daily_entity;
    let Ke = this._getEntityState(at);
    Ke || (Ke = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = Re ? `${Re.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = Ke ? `${Ke.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const Et = [], et = [];
    for (let m = 1; m <= Gt; m++) {
      const P = this.shadowRoot.getElementById(`batPackSoc_${m}`), M = this.shadowRoot.getElementById(`batPackVolt_${m}`), H = this.shadowRoot.getElementById(`batPackCurr_${m}`), L = this.shadowRoot.getElementById(`batPackPower_${m}`), Se = this.shadowRoot.getElementById(`batPackTempVal_${m}`), te = this.shadowRoot.getElementById(`batPackDelta_${m}`), ve = this.shadowRoot.getElementById(`batPackDeltaVal_${m}`), ge = this.shadowRoot.getElementById(`batPackStateTag_${m}`), Ve = this.shadowRoot.getElementById(`batPackKwh_${m}`), ae = this.shadowRoot.getElementById(`batPackBar1_${m}`), xe = this.shadowRoot.getElementById(`batPackBar2_${m}`), Te = this.shadowRoot.getElementById(`batPackBar3_${m}`), le = this.shadowRoot.getElementById(`batPackBar4_${m}`), pe = ((mo = (yo = e.battery) == null ? void 0 : yo.modules) == null ? void 0 : mo[m - 1]) || ((vo = (_o = e.battery) == null ? void 0 : _o.module_entities) == null ? void 0 : vo[m - 1]) || {}, He = pe.soc_entity || pe.soc || `sensor.bms_rack${m}_soc`, Ct = pe.current_entity || `sensor.bms_rack${m}_current`, qt = pe.voltage_entity || pe.volt || `sensor.bms_rack${m}_voltage`, $t = pe.power_entity || `sensor.bms_rack${m}_power`, Tt = pe.temperature_entity || pe.temp || `sensor.bms_rack${m}_temperature`, Bt = pe.cell_delta_entity || pe.delta_entity || `sensor.bms_rack${m}_cell_delta`, st = this._getEntityState(He), jt = this._getEntityState(Ct), Zt = this._getEntityState(qt), ht = this._getEntityState($t), ei = this._getEntityState(Tt);
      let ie = this._getEntityState(Bt);
      if (ie || (ie = this._getEntityState(`sensor.bms_rack${m}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${m}_cell_difference`)), !ie && (pe.max_cell_voltage_entity || pe.min_cell_voltage_entity)) {
        const ut = this._getEntityState(pe.max_cell_voltage_entity), To = this._getEntityState(pe.min_cell_voltage_entity);
        if (ut && To) {
          const zi = Math.abs(ut.val - To.val);
          ie = { val: zi < 1 ? Math.round(zi * 1e3) : zi, unit: "mV" };
        }
      }
      const It = st ? st.val : m === 1 ? 82 : m === 2 ? 85 : 75, Nt = Zt ? Zt.val : m === 1 ? 54.1 : m === 2 ? 54 : 52.4, we = jt ? jt.val : m === 1 ? 18.4 : m === 2 ? 25.2 : 8.2, tt = ei ? ei.val : m === 1 ? 36.5 : m === 2 ? 21 : 22.5;
      let it = null;
      if (ie) {
        let ut = ie.val;
        ut < 1 && ut > 0 ? it = Math.round(ut * 1e3) : it = Math.round(ut);
      } else this._hass || (it = m === 1 ? 12 : m === 2 ? 8 : 15);
      let nt = 0;
      ht ? nt = Math.abs(this._formatPower(ht).kw) : nt = Nt * Math.abs(we) / 1e3;
      const ti = (pe.capacity_kwh !== void 0 ? parseFloat(pe.capacity_kwh) : m === 1 ? 7.88 : m === 2 ? 5.12 : kt / Gt) * (It / 100);
      P && (P.innerText = `${It.toFixed(0)}%`), M && (M.innerText = `${Nt.toFixed(1).replace(".", ",")} V`), H && (H.innerText = `${Math.abs(we).toFixed(1).replace(".", ",")} A`), L && (L.innerText = `${nt.toFixed(2).replace(".", ",")} ${i}`), Se && (Se.innerText = `${tt.toFixed(1).replace(".", ",")}`), ve && (it !== null && !isNaN(it) ? (ve.innerText = `${it} mV`, te && (te.style.display = "inline-flex", it <= 25 ? (te.style.color = "#34d399", te.style.background = "rgba(52, 211, 153, 0.12)", te.style.borderColor = "rgba(52, 211, 153, 0.3)") : it <= 50 ? (te.style.color = "#fbbf24", te.style.background = "rgba(251, 191, 36, 0.12)", te.style.borderColor = "rgba(251, 191, 36, 0.3)") : (te.style.color = "#f87171", te.style.background = "rgba(248, 113, 113, 0.16)", te.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : te && (te.style.display = "none")), Ve && (Ve.innerText = `~${ti.toFixed(2).replace(".", ",")} ${V}`);
      let ze = !1;
      I ? ze = !1 : J ? ze = !0 : jt ? ze = (((xo = e.battery) == null ? void 0 : xo.power_sign) || "deye") === "deye" ? we < 0 : we > 0 : ze = we < 0;
      const Ht = this.shadowRoot.getElementById(`batBranchBadge_${m}`);
      Ht && (nt < 0.02 ? (Ht.className = "es-bat-branch-badge es-mono idle", Ht.innerHTML = `<span>0.00 ${i}</span>`) : ze ? (Ht.className = "es-bat-branch-badge es-mono charge", Ht.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (Ht.className = "es-bat-branch-badge es-mono discharge", Ht.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const At = this.shadowRoot.getElementById(`batPackCard_${m}`), Co = At == null ? void 0 : At.querySelector(".es-battery-gauge"), $o = At == null ? void 0 : At.querySelector(".es-battery-gauge-nipple");
      At && (At.style.borderColor = ze ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), Co && (Co.style.borderColor = ze ? "#10b981" : "#ef4444"), $o && ($o.style.background = ze ? "#10b981" : "#ef4444"), ge && (ze ? (ge.className = "es-bat-state-tag charge", ge.innerText = this._t("bat_charge"), ge.style.color = "#34d399", ge.style.background = "rgba(16, 185, 129, 0.18)", ge.style.borderColor = "rgba(16, 185, 129, 0.4)") : (ge.className = "es-bat-state-tag discharge", ge.innerText = this._t("bat_discharge"), ge.style.color = "#f87171", ge.style.background = "rgba(239, 68, 68, 0.18)", ge.style.borderColor = "rgba(239, 68, 68, 0.4)")), L && (L.style.color = ze ? "#34d399" : "#f87171"), H && (H.style.color = ze ? "#38bdf8" : "#f87171");
      const Bi = ze ? "active-green" : "active-red";
      ae && xe && Te && le && (ae.className = `es-bat-bar ${It >= 10 ? Bi : ""}`, xe.className = `es-bat-bar ${It >= 35 ? Bi : ""}`, Te.className = `es-bat-bar ${It >= 65 ? Bi : ""}`, le.className = `es-bat-bar ${It >= 85 ? Bi : ""}`), Et.push({ kwNum: nt, isChg: ze }), et.push({ soc: Math.round(It), volt: Nt, curr: we, temp: tt, delta: it, kw: nt, kwh: ti });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      ce ? q : 0,
      se,
      Ee,
      c,
      ot,
      W,
      J,
      I,
      T,
      Et,
      E,
      A,
      K
    ), this._updateControlSliders();
    const St = D && typeof D.val == "number" && !isNaN(D.val) ? D.val : typeof sMainsVolt < "u" && sMainsVolt && typeof sMainsVolt.val == "number" && !isNaN(sMainsVolt.val) ? sMainsVolt.val : ce ? 220 : 0, ki = v && typeof v.val == "number" && !isNaN(v.val) ? v.val : typeof sMainsCurr < "u" && sMainsCurr && typeof sMainsCurr.val == "number" && !isNaN(sMainsCurr.val) ? sMainsCurr.val : 0, Ei = typeof p < "u" && (p == null ? void 0 : p.val) || (typeof acTempNum < "u" ? acTempNum : 41.2), Si = typeof f < "u" && (f == null ? void 0 : f.val) || (typeof dcTempNum < "u" ? dcTempNum : 34.5), Ci = typeof C < "u" && (C == null ? void 0 : C.val) || 50, $i = typeof Fe < "u" && (Fe == null ? void 0 : Fe.val) || 54.64, Ba = typeof ee < "u" && (ee == null ? void 0 : ee.val) || 0;
    this._update3DRealisticView({
      unitStr: i,
      totalSolarKw: c,
      totalPvPct: typeof h < "u" ? h : 0,
      dailySolarKwh: typeof b < "u" ? b : 0,
      solarSavingsUah: (typeof b < "u" ? b : 0) * (((wo = e.tariffs) == null ? void 0 : wo.day_rate) || 4.32),
      pvStrings: typeof s < "u" ? s : [],
      totalWindKw: typeof O < "u" ? O : 0,
      wt1Kw: typeof liveWt1Kw < "u" ? liveWt1Kw : 0,
      wt1Rpm: typeof liveWt1Rpm < "u" ? liveWt1Rpm : null,
      wt1Daily: typeof liveWt1Daily < "u" ? liveWt1Daily : null,
      wt1Spinning: !!(typeof liveWt1Spinning < "u" && liveWt1Spinning),
      wt2Kw: typeof liveWt2Kw < "u" ? liveWt2Kw : 0,
      wt2Rpm: typeof liveWt2Rpm < "u" ? liveWt2Rpm : null,
      wt2Daily: typeof liveWt2Daily < "u" ? liveWt2Daily : null,
      wt2Spinning: !!(typeof liveWt2Spinning < "u" && liveWt2Spinning),
      windMonthlyKwh: typeof totalTurbinesMonthly < "u" ? totalTurbinesMonthly : 0.7,
      isBlackout: !ce || St < (((ko = e.grid) == null ? void 0 : ko.voltage_threshold) || 90),
      gridKw: typeof q < "u" ? q : 0,
      isImport: !!(!(typeof Ee < "u") || Ee),
      isExport: !!(typeof se < "u" && se),
      gridVolt: St,
      gridCurrent: ki,
      costSplitStr: ((So = (Eo = this._nodes) == null ? void 0 : Eo.gridCostSplitVal) == null ? void 0 : So.innerText) || "",
      inverterKw: typeof invKwNum < "u" ? invKwNum : 0,
      inverterAcTemp: Ei,
      inverterDcTemp: Si,
      inverterFreq: Ci,
      inverterSelfWatts: typeof dynamicSelfConsWatts < "u" ? dynamicSelfConsWatts : typeof Ot < "u" ? Ot * 1e3 : 100,
      masterSoc: typeof socNum < "u" ? socNum : 50,
      batKw: typeof batKwNum < "u" ? batKwNum : 0,
      isBatCharging: !!(typeof J < "u" && J),
      isBatDischarging: !!(typeof I < "u" && I),
      batVolt: $i,
      batCurrent: Ba,
      batTemp: typeof j < "u" ? j : 25,
      totalCapacityKwh: typeof kt < "u" ? kt : 28.8,
      storedKwh: typeof batStoredEnergyKwh < "u" ? batStoredEnergyKwh : 16.42,
      dailyChargeKwh: typeof Re < "u" && (Re == null ? void 0 : Re.val) || 0,
      dailyDischargeKwh: typeof Ke < "u" && (Ke == null ? void 0 : Ke.val) || 0,
      rack1: typeof et < "u" && et[0] || null,
      rack2: typeof et < "u" && et[1] || null,
      houseKw: typeof ot < "u" ? ot : 0,
      boilerKw: typeof boilerKwNum < "u" ? boilerKwNum : 0
    });
  }
  _setupResizeObserver() {
    var i;
    if (this._resizeObserver) return;
    const e = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".energy-station-container");
    e && (window.ResizeObserver && (this._resizeObserver = new ResizeObserver(() => {
      this._updateFlowPaths();
    }), this._resizeObserver.observe(e)), this._rAF(() => this._updateFlowPaths()), setTimeout(() => this._updateFlowPaths(), 150));
  }
  _updateFlowPaths() {
    var e, i, n, r, o, a, s, l, c;
    if (this._viewMode !== "3d")
      try {
        const d = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
        if (!d) return;
        const y = d.getBoundingClientRect();
        if (y.width === 0 || y.height === 0) return;
        const h = this._config || fe, x = this._scale || 1, u = (E, N = 0.5, R = 0.5) => {
          if (!E) return null;
          const T = E.getBoundingClientRect();
          return {
            x: Math.round((T.left - y.left + T.width * N) / x),
            y: Math.round((T.top - y.top + T.height * R) / x)
          };
        }, b = (E, N, R) => {
          const T = this.shadowRoot.getElementById(E), A = this.shadowRoot.getElementById(N);
          T && T.setAttribute("d", R || ""), A && A.setAttribute("d", R || "");
        }, _ = this.shadowRoot.getElementById("gridNode"), w = this.shadowRoot.getElementById("inverterNode"), g = this.shadowRoot.getElementById("essentialNode"), p = this.shadowRoot.getElementById("totalPvPowerBadge"), f = this.shadowRoot.getElementById("masterBatteryHub"), S = this.shadowRoot.getElementById("carNode");
        if (_ && w) {
          const E = _.getBoundingClientRect(), N = w.getBoundingClientRect();
          if (E.bottom < N.top + 30) {
            const T = u(_, 0.7, 1), A = u(w, 0.2, 0);
            if (T && A) {
              const Q = Math.round((T.y + A.y) / 2), oe = `M ${T.x} ${T.y} C ${T.x} ${Q}, ${A.x} ${Q}, ${A.x} ${A.y}`;
              b("pathGridInvBase", "pathGridInvFlow", oe);
            }
          } else {
            const T = Math.round((N.top - y.top + N.height * 0.55) / x), A = Math.round((E.right - y.left) / x), Q = Math.round((N.left - y.left) / x), oe = Math.round((E.top - y.top + E.height * 0.5) / x);
            let he = "";
            if (Math.abs(oe - T) <= 8)
              he = `M ${A} ${T} L ${Q} ${T}`;
            else {
              const ee = Math.round(A + 24);
              he = `M ${A} ${oe} C ${ee} ${oe}, ${ee} ${T}, ${Q} ${T}`;
            }
            b("pathGridInvBase", "pathGridInvFlow", he);
          }
        }
        if (w && g) {
          const E = g.getBoundingClientRect(), N = w.getBoundingClientRect();
          if (E.bottom < N.top + 30) {
            const T = u(w, 0.8, 0), A = u(g, 0.3, 1);
            if (T && A) {
              const Q = Math.round((T.y + A.y) / 2), oe = `M ${T.x} ${T.y} C ${T.x} ${Q}, ${A.x} ${Q}, ${A.x} ${A.y}`;
              b("pathInvLoadBase", "pathInvLoadFlow", oe);
            }
          } else {
            const T = Math.round((N.top - y.top + N.height * 0.55) / x), A = Math.round((N.right - y.left) / x), Q = Math.round((E.left - y.left) / x), oe = Math.round((E.top - y.top + E.height * 0.5) / x);
            let he = "";
            if (Math.abs(oe - T) <= 8)
              he = `M ${A} ${T} L ${Q} ${T}`;
            else {
              const ee = Math.round(Q - 24);
              he = `M ${A} ${T} C ${ee} ${T}, ${ee} ${oe}, ${Q} ${oe}`;
            }
            b("pathInvLoadBase", "pathInvLoadFlow", he);
          }
        }
        if (p && w) {
          const E = u(p, 0.5, 1), N = u(w, 0.5, 0);
          if (E && N) {
            const R = `M ${E.x} ${E.y} L ${N.x} ${N.y}`;
            b("pathSolarInvBase", "pathSolarInvFlow", R);
          }
        }
        if (w && f) {
          const E = u(w, 0.5, 1), N = u(f, 0.5, 0);
          if (E && N) {
            const R = `M ${E.x} ${E.y} L ${N.x} ${N.y}`;
            b("pathInvBatBase", "pathInvBatFlow", R);
          }
        }
        const v = this.shadowRoot.getElementById("nonEssentialNode"), C = v && !v.classList.contains("hidden") && v.offsetHeight > 0, B = S && !S.classList.contains("hidden") && S.offsetHeight > 0;
        if (_ && C) {
          const E = u(_, 0.5, 1), N = u(v, 0.5, 0);
          if (E && N) {
            const R = `M ${E.x} ${E.y} L ${N.x} ${N.y}`;
            b("pathGridNonEssBase", "pathGridNonEssFlow", R);
          }
        } else
          b("pathGridNonEssBase", "pathGridNonEssFlow", "");
        if (B) {
          const E = C ? v : _;
          if (E) {
            const N = u(E, 0.5, 1), R = u(S, 0.5, 0);
            if (N && R) {
              const T = `M ${N.x} ${N.y} L ${R.x} ${R.y}`;
              b("pathNonEssCarBase", "pathNonEssCarFlow", T);
            }
          } else
            b("pathNonEssCarBase", "pathNonEssCarFlow", "");
        } else
          b("pathNonEssCarBase", "pathNonEssCarFlow", "");
        const $ = this.shadowRoot.getElementById("subloadsBusContainer");
        if (g && $) {
          const E = u(g, 0.5, 1), N = u($, 0.5, 0);
          if (E && N) {
            const R = `M ${E.x} ${E.y} L ${N.x} ${N.y}`;
            b("pathLoadSubloadsBase", "pathLoadSubloadsFlow", R);
          }
        } else
          b("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
        const k = this.shadowRoot.getElementById("auxNode");
        if (w && k && !k.classList.contains("hidden") && k.offsetHeight > 0) {
          const E = u(k, 0.35, 1), N = u(w, 0.9, 0);
          if (E && N) {
            const R = Math.round((E.y + N.y) / 2), T = `M ${E.x} ${E.y} C ${E.x} ${R}, ${N.x} ${R}, ${N.x} ${N.y}`;
            b("pathInvAuxBase", "pathInvAuxFlow", T);
          }
        } else
          b("pathInvAuxBase", "pathInvAuxFlow", "");
        b("pathBatStemBase", "pathBatStemFlow", "");
        const O = this.shadowRoot.getElementById("windStationContainer"), Y = ((i = h.wind) == null ? void 0 : i.show) !== !1 || ((n = h.aux) == null ? void 0 : n.type) === "wind" ? ((r = h.wind) == null ? void 0 : r.turbine_count) || ((a = (o = h.wind) == null ? void 0 : o.turbines) == null ? void 0 : a.length) || 2 : 0;
        for (let E = 1; E <= 4; E++)
          if (E <= Y && O && !O.classList.contains("hidden")) {
            const N = this.shadowRoot.getElementById(`turbineCard_${E}`);
            if (N && f) {
              const R = u(N, 0.5, 1), T = Y === 1 ? 0.5 : 0.28 + (E - 1) / (Y - 1) * 0.44, A = u(f, T, 0);
              if (R && A) {
                const Q = `M ${R.x} ${R.y} L ${A.x} ${A.y}`;
                b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, Q);
              }
            } else
              b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
          } else
            b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
        const re = ((s = h.battery) == null ? void 0 : s.parallel_batteries) || ((c = (l = h.battery) == null ? void 0 : l.modules) == null ? void 0 : c.length) || 2;
        for (let E = 1; E <= 8; E++) {
          const N = this.shadowRoot.getElementById(`batPackCard_${E}`), R = this.shadowRoot.getElementById(`batBranchBadge_${E}`);
          if (E <= re && f && N) {
            const T = u(f, 0.5, 1), A = u(N, 0.5, 0);
            if (T && A) {
              const Q = Math.round(T.y + (A.y - T.y) * 0.45);
              let oe = "";
              Math.abs(T.x - A.x) <= 4 ? oe = `M ${T.x} ${T.y} L ${A.x} ${A.y}` : oe = `M ${T.x} ${T.y} C ${T.x} ${Q}, ${A.x} ${Q}, ${A.x} ${A.y}`, b(`pathBat${E}Base`, `pathBat${E}Flow`, oe), R && (R.style.left = `${A.x}px`, R.style.top = `${Q}px`, R.style.display = "flex");
            } else
              b(`pathBat${E}Base`, `pathBat${E}Flow`, ""), R && (R.style.display = "none");
          } else
            b(`pathBat${E}Base`, `pathBat${E}Flow`, ""), R && (R.style.display = "none");
        }
        this._updateBusBars();
      } catch {
      }
  }
  _updateBusBars() {
    var e, i, n, r, o;
    try {
      const a = this._config || fe, s = this._scale || 1, l = this.shadowRoot.getElementById("solarBusSvg"), c = ((e = a.solar) == null ? void 0 : e.pv_count) || ((n = (i = a.solar) == null ? void 0 : i.strings) == null ? void 0 : n.length) || 3;
      if (l && c > 0) {
        const h = l.getBoundingClientRect(), x = this.shadowRoot.getElementById("pvPanel_1"), u = this.shadowRoot.getElementById(`pvPanel_${c}`), b = this.shadowRoot.getElementById("solarBusBase"), _ = this.shadowRoot.getElementById("solarFlowCollector"), w = this.shadowRoot.getElementById("solarBusStemBase"), g = this.shadowRoot.getElementById("solarBusStemFlow"), p = this.shadowRoot.getElementById("solarBusFeeders");
        if (x && u && h.width > 0) {
          const f = x.getBoundingClientRect(), S = u.getBoundingClientRect(), v = Math.round((f.left - h.left + f.width / 2) / s), C = Math.round((S.left - h.left + S.width / 2) / s), B = 13, $ = Math.round((v + C) / 2);
          if (b && (b.setAttribute("x1", v), b.setAttribute("y1", B), b.setAttribute("x2", C), b.setAttribute("y2", B)), _ && (_.setAttribute("x1", v), _.setAttribute("y1", B), _.setAttribute("x2", C), _.setAttribute("y2", B)), w && (w.setAttribute("x1", $), w.setAttribute("y1", B), w.setAttribute("x2", $), w.setAttribute("y2", 26)), g && (g.setAttribute("x1", $), g.setAttribute("y1", B), g.setAttribute("x2", $), g.setAttribute("y2", 26)), p) {
            let k = "";
            for (let O = 1; O <= c; O++) {
              const K = this.shadowRoot.getElementById(`pvPanel_${O}`);
              if (K) {
                const Y = K.getBoundingClientRect(), re = Math.round((Y.left - h.left + Y.width / 2) / s);
                k += `
                  <line x1="${re}" y1="0" x2="${re}" y2="${B}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${re}" y1="0" x2="${re}" y2="${B}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            p.innerHTML = k;
          }
        }
      }
      const d = this.shadowRoot.getElementById("subloadsBusSvg"), y = ((o = (r = a.load) == null ? void 0 : r.subloads) == null ? void 0 : o.length) || 3;
      if (d && y > 0) {
        const h = d.getBoundingClientRect(), x = this.shadowRoot.getElementById("subloadCard_0"), u = this.shadowRoot.getElementById(`subloadCard_${y - 1}`), b = this.shadowRoot.getElementById("essentialNode"), _ = this.shadowRoot.getElementById("subloadsBusBase"), w = this.shadowRoot.getElementById("subloadsFlowCollector"), g = this.shadowRoot.getElementById("subloadsBusStemBase"), p = this.shadowRoot.getElementById("subloadsBusStemFlow"), f = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (x && u && h.width > 0) {
          const S = x.getBoundingClientRect(), v = u.getBoundingClientRect(), C = Math.round((S.left - h.left + S.width / 2) / s), B = Math.round((v.left - h.left + v.width / 2) / s), $ = 13;
          let k = Math.round((C + B) / 2);
          if (b) {
            const Y = b.getBoundingClientRect();
            k = Math.round((Y.left - h.left + Y.width / 2) / s);
          }
          const O = Math.min(C, k), K = Math.max(B, k);
          if (_ && (_.setAttribute("x1", O), _.setAttribute("y1", $), _.setAttribute("x2", K), _.setAttribute("y2", $)), w && (w.setAttribute("x1", O), w.setAttribute("y1", $), w.setAttribute("x2", K), w.setAttribute("y2", $)), g && (g.setAttribute("x1", k), g.setAttribute("y1", 0), g.setAttribute("x2", k), g.setAttribute("y2", $)), p && (p.setAttribute("x1", k), p.setAttribute("y1", 0), p.setAttribute("x2", k), p.setAttribute("y2", $)), f) {
            let Y = "";
            for (let re = 0; re < y; re++) {
              const E = this.shadowRoot.getElementById(`subloadCard_${re}`);
              if (E) {
                const N = E.getBoundingClientRect(), R = Math.round((N.left - h.left + N.width / 2) / s);
                Y += `
                  <line x1="${R}" y1="${$}" x2="${R}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${R}" y1="${$}" x2="${R}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            f.innerHTML = Y;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, i, n, r, o) {
    if (!e) return;
    if (!o) {
      e.setAttribute("class", `flow-pulse ${i} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const a = n ? "flow-reverse" : "flow-forward", s = n ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${i} ${a}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", r), e.style.animation = `${s} ${r} linear infinite`;
  }
  _updateFlowAnimations(e, i, n, r, o, a, s, l, c, d = [], y = 0, h = 0, x = 0) {
    var Oe, Ge, Rt, Ne, Ue, De, ct, Ae, Ce, _t, Mt, je, pt;
    if (this._viewMode === "3d") return;
    const u = this._config || fe, b = ((Oe = u.animations) == null ? void 0 : Oe.enabled) !== !1, _ = ((Ge = u.animations) == null ? void 0 : Ge.speed) || 1.2, w = (D, ye = 10) => {
      const _e = Math.abs(D);
      if (_e < 0.05) return "2.5s";
      const Le = Math.min(1, _e / ye);
      return `${Math.max(0.4, (2.6 - Le * 1.9) * (_ / 1.2)).toFixed(2)}s`;
    }, g = this.shadowRoot.getElementById("pathGridInvFlow"), p = Math.abs(e), f = (((Rt = u.grid) == null ? void 0 : Rt.min_power_threshold) !== void 0 ? u.grid.min_power_threshold : 50) / 1e3, S = ((Ne = u.grid) == null ? void 0 : Ne.selling_enabled) === !0, v = b && p >= f && (n || i && S);
    this._applyFlowAnimation(g, "flow-grid", i, w(e, 10), v);
    const C = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(C, "flow-solar", !1, w(r, 12), b && r >= 0.05);
    const B = this.shadowRoot.getElementById("pathInvLoadFlow"), $ = Math.abs(o);
    this._applyFlowAnimation(B, "flow-load", !1, w(o, 10), b && $ >= 0.05);
    const k = this.shadowRoot.getElementById("pathInvBatFlow"), O = Math.abs(a), K = b && O >= 0.02 && (s || l), Y = s ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(k, Y, l, w(a, 8), K);
    const re = this.shadowRoot.getElementById("pathGridNonEssFlow"), E = Math.abs(y);
    this._applyFlowAnimation(re, "flow-grid", !1, w(y, 5), b && E >= 0.05);
    const N = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), R = Math.abs(c);
    this._applyFlowAnimation(N, "flow-car", !1, w(c, 7), b && R >= 0.05);
    const T = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), A = Math.abs(h || o);
    this._applyFlowAnimation(T, "flow-load", !1, w(A, 8), b && A >= 0.05);
    const Q = this.shadowRoot.getElementById("pathInvAuxFlow"), oe = Math.abs(x);
    this._applyFlowAnimation(Q, "flow-aux", !0, w(x, 5), b && oe >= 0.05);
    const he = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(he, Y, l, w(a, 8), K);
    const ee = this.shadowRoot.getElementById("solarFlowCollector"), ke = this.shadowRoot.getElementById("solarBusStemFlow");
    if (ee)
      if (!b || r < 0.05)
        ee.style.opacity = "0.2", ee.style.animation = "none", ke && (ke.style.opacity = "0.2", ke.style.animation = "none");
      else {
        const D = w(r, 12);
        ee.style.opacity = "1", ee.setAttribute("class", "flow-line"), ee.style.animation = `esDashflow ${D} linear infinite`, ke && (ke.style.opacity = "1", ke.setAttribute("class", "flow-line"), ke.style.animation = `esDashflow ${D} linear infinite`);
      }
    const X = this.shadowRoot.getElementById("subloadsFlowCollector"), J = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (X)
      if (!b || A < 0.05)
        X.style.opacity = "0.2", X.style.animation = "none", J && (J.style.opacity = "0.2", J.style.animation = "none");
      else {
        const D = w(A, 8);
        X.style.opacity = "1", X.setAttribute("class", "flow-line"), X.style.animation = `esDashflow ${D} linear infinite`, J && (J.style.opacity = "1", J.setAttribute("class", "flow-line"), J.style.animation = `esDashflow ${D} linear infinite`);
      }
    const I = this.shadowRoot.getElementById("batteryFlowCollector"), W = this.shadowRoot.getElementById("batteryBusStemFlow"), de = this.shadowRoot.getElementById("batteryBusFeeders"), U = l ? "#f87171" : "#34d399", qe = l ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (I)
      if (I.style.stroke = U, I.style.filter = qe, W && (W.style.stroke = U, W.style.filter = qe), !b || !K)
        I.style.opacity = "0.2", I.style.animation = "none", W && (W.style.opacity = "0.2", W.style.animation = "none");
      else {
        const D = w(a, 8), ye = l ? "esDashflowRev" : "esDashflow";
        I.style.opacity = "1", I.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), I.style.animation = `${ye} ${D} linear infinite`, W && (W.style.opacity = "1", W.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), W.style.animation = `${ye} ${D} linear infinite`);
      }
    de && de.querySelectorAll("line").forEach((D) => {
      if (D.style.stroke = U, D.style.filter = qe, !b || !K)
        D.style.opacity = "0.2", D.style.animation = "none";
      else {
        const ye = w(a, 8), _e = l ? "esDashflowRev" : "esDashflow";
        D.style.opacity = "1", D.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), D.style.animation = `${_e} ${ye} linear infinite`;
      }
    });
    for (let D = 1; D <= 8; D++) {
      const ye = this.shadowRoot.getElementById(`pathBat${D}Flow`);
      if (!ye) continue;
      const _e = d[D - 1], Le = _e ? _e.kwNum : 0, ce = b && (Le >= 0.02 || K), Pt = l;
      this._applyFlowAnimation(ye, Y, Pt, w(Le || a, 8), ce);
    }
    for (let D = 0; D < 6; D++) {
      const ye = this.shadowRoot.getElementById(`pathSubload${D}Flow`);
      if (!ye) continue;
      const _e = (De = (Ue = u.load) == null ? void 0 : Ue.subloads) == null ? void 0 : De[D], Le = _e ? this._getEntityState(_e.entity) : null, ce = Le ? this._formatPower(Le, 2).kw : D === 0 ? 2 : D === 1 ? 3 : 4;
      this._applyFlowAnimation(ye, "flow-load", !1, w(ce, 8), b && ce >= 0.05);
    }
    const Fe = ((ct = u.wind) == null ? void 0 : ct.show) !== !1 || ((Ae = u.aux) == null ? void 0 : Ae.type) === "wind", mt = Fe ? ((Ce = u.wind) == null ? void 0 : Ce.turbine_count) || ((Mt = (_t = u.wind) == null ? void 0 : _t.turbines) == null ? void 0 : Mt.length) || 2 : 0, Jt = ((je = u.wind) == null ? void 0 : je.turbines) || [];
    for (let D = 1; D <= 4; D++) {
      const ye = this.shadowRoot.getElementById(`pathTurbine${D}Flow`);
      if (ye)
        if (D <= mt && Fe) {
          const _e = Jt[D - 1] || {}, Le = this._hass ? 0 : D === 1 ? 1.45 : 0.85, ce = this._getEntityState(_e.power_entity || `sensor.wind_turbine_${D}_power`);
          let vt = this._formatPower(ce, Le).kw * 1e3;
          ce && ce.unit === "W" && (vt = ce.val);
          const xt = _e.animation_threshold ?? ((pt = u.wind) == null ? void 0 : pt.animation_threshold) ?? 50, se = vt >= xt;
          this._applyFlowAnimation(ye, "flow-wind", !1, w(vt / 1e3, 3), b && se);
        } else
          this._applyFlowAnimation(ye, "flow-wind", !1, "1.5s", !1);
    }
  }
  _update3DRealisticView(e) {
    var J;
    const i = this.shadowRoot;
    if (!i) return;
    const n = (I, W, de) => {
      const U = i.getElementById(I);
      U && (U.textContent = W, de && U.setAttribute("fill", de));
    }, r = (I, W) => {
      const de = i.getElementById(I);
      de && (de.innerText = W);
    }, o = e.totalSolarKw || 0;
    r("pvTotalVal", `${o.toFixed(3)} ${e.unitStr}`);
    const a = i.getElementById("pvStatusText");
    if (a)
      if (o <= 0)
        a.innerText = this._language === "en" ? "No generation (night)" : "Генерації зараз немає (ніч)";
      else {
        const I = e.totalPvPct ? Math.round(e.totalPvPct) : 0;
        a.innerText = this._language === "en" ? `Active generation (${I}%)` : `Активна генерація (${I}%)`;
      }
    for (let I = 1; I <= 3; I++) {
      const W = ((J = e.pvStrings) == null ? void 0 : J[I - 1]) || { kw: 0 }, de = W.kw >= 1 ? `${W.kw.toFixed(2)} кВт` : `${Math.round(W.kw * 1e3)} Вт`;
      r(`pv${I}Val`, de);
    }
    const s = i.getElementById("pulseSolar3d");
    s && (s.style.opacity = o > 0.05 ? "1" : "0.08");
    const l = e.totalWindKw || 0;
    r("windTotalVal", `${l.toFixed(3)} ${e.unitStr}`);
    const c = i.getElementById("windStatusText");
    if (c) {
      const I = e.wt1Rpm && e.wt1Rpm > 0 ? e.wt1Rpm : e.wt2Rpm && e.wt2Rpm > 0 ? e.wt2Rpm : null;
      l > 0.05 || e.wt1Spinning || e.wt2Spinning ? (c.innerText = I ? this._language === "en" ? `Generating · ${I} RPM` : `Генерація · ${I} RPM` : this._language === "en" ? "Generating" : "Генерація", c.style.color = "#67e8f9") : (c.innerText = this._language === "en" ? "Calm" : "Штиль", c.style.color = "#94a3b8");
    }
    r("wt1Power", `${(e.wt1Kw || 0).toFixed(3)} ${e.unitStr}`);
    const d = i.getElementById("wt1Rpm");
    d && (e.wt1Rpm && e.wt1Rpm > 0 ? (d.innerText = `${e.wt1Rpm} rpm`, d.style.color = "#22d3ee") : e.wt1Spinning || (e.wt1Kw || 0) > 5e-3 ? (d.innerText = this._language === "en" ? "Gen" : "Генерація", d.style.color = "#22d3ee") : (d.innerText = this._language === "en" ? "Calm" : "Штиль", d.style.color = "#94a3b8")), r("wt2Power", `${(e.wt2Kw || 0).toFixed(3)} ${e.unitStr}`);
    const y = i.getElementById("wt2Rpm");
    y && (e.wt2Rpm && e.wt2Rpm > 0 ? (y.innerText = `${e.wt2Rpm} rpm`, y.style.color = "#c084fc") : e.wt2Spinning || (e.wt2Kw || 0) > 5e-3 ? (y.innerText = this._language === "en" ? "Gen" : "Генерація", y.style.color = "#c084fc") : (y.innerText = this._language === "en" ? "Calm" : "Штиль", y.style.color = "#94a3b8"));
    const h = i.getElementById("rotorSpin1"), x = i.getElementById("rotorSpin2");
    h && (h.className = e.wt1Spinning || (e.wt1Kw || 0) > 5e-3 ? "rotor-spin-normal" : "rotor-spin-idle"), x && (x.className = e.wt2Spinning || (e.wt2Kw || 0) > 5e-3 ? "rotor-spin-normal" : "rotor-spin-idle");
    const u = i.getElementById("pulseWind3d");
    u && (u.style.opacity = l > 0.02 ? "1" : "0.15");
    const b = !!e.isBlackout, _ = e.gridKw || 0;
    r("gridPowerVal3d", `${_.toFixed(3)} ${e.unitStr}`);
    const w = i.getElementById("gridFlowDir3d"), g = i.getElementById("gridStatusBadge"), p = i.getElementById("pulseGrid3d");
    b ? (w && (w.innerText = this._language === "en" ? "DISCONNECTED (BLACKOUT)" : "ВІДКЛЮЧЕНО (БЛЕКАУТ)"), g && (g.innerText = this._language === "en" ? "⚠️ Grid Offline" : "⚠️ Мережа знеструмлена", g.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse flex-shrink-0"), p && (p.style.opacity = "0.05")) : (w && (e.isExport ? w.innerText = this._language === "en" ? "← EXPORT TO GRID" : "← ЕКСПОРТ В МЕРЕЖУ" : e.isImport ? w.innerText = this._language === "en" ? "→ IMPORT FROM GRID" : "→ ІМПОРТ З МЕРЕЖІ" : w.innerText = this._language === "en" ? "Zero Export Balance" : "Баланс (Нульовий експорт)"), g && (g.innerText = this._language === "en" ? "Grid Stable" : "Живлення стабільне", g.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0"), p && (p.style.opacity = e.isImport || e.isExport ? "1" : "0.15", e.isExport ? p.classList.add("pulse-reverse") : p.classList.remove("pulse-reverse"))), r("gridVolt3d", `${b ? "0.0" : (e.gridVolt !== void 0 ? e.gridVolt : 220).toFixed(1)} V`), r("gridCurrent3d", `${b ? "0.0" : (e.gridCurrent || 0).toFixed(1)} A`);
    const f = i.getElementById("invScreenLed"), S = i.getElementById("invWorkBadge"), v = e.inverterKw || o + l + _;
    b ? (n("invScreenPower", `${(e.houseKw || 1.5).toFixed(2)} kW`, "#f43f5e"), n("invScreenStatus", "ISLAND · EPS MODE", "#fb7185"), f && f.setAttribute("fill", "#ef4444"), S && (S.className = "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 flex items-center gap-1.5 animate-pulse", S.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> АВТОНОМІЯ (EPS)')) : (n("invScreenPower", `${Math.max(0.1, v).toFixed(2)} kW`, "#38bdf8"), o > 0.5 && l > 0.1 ? n("invScreenStatus", "SOLAR + WIND", "#fbbf24") : e.isBatCharging ? n("invScreenStatus", "ON-GRID · CHARGE", "#34d399") : n("invScreenStatus", "ON-GRID · NORMAL", "#38bdf8"), f && f.setAttribute("fill", "#10b981"), S && (S.className = "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5", S.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> ПРАЦЮЄ')), r("invAcTemp3d", `${(e.inverterAcTemp || 41.2).toFixed(1)} °C`), r("invDcTemp3d", `${(e.inverterDcTemp || 34.5).toFixed(1)} °C`), r("invFreq3d", `${(e.inverterFreq || 50).toFixed(2)} Hz`), r("invSelf3d", `${Math.round(e.inverterSelfWatts || 100)} Вт`);
    const C = !!(e.isBatDischarging || b), B = i.getElementById("cardBattery"), $ = i.getElementById("batMasterStatusDot"), k = i.getElementById("batMasterTitle"), O = i.getElementById("batMasterPower"), K = i.getElementById("batMasterSoc"), Y = i.getElementById("batPredictionBanner"), re = i.getElementById("batPredictionTitle"), E = i.getElementById("batTimerVal"), N = i.getElementById("batSubTimer"), R = i.getElementById("batBusCurrent3d"), T = i.getElementById("pulseBat1_3d"), A = i.getElementById("pulseBat2_3d"), Q = Math.abs(e.batKw || 0), oe = Math.round(e.masterSoc || 50);
    if (C) {
      if (B && (B.className = "xl:col-span-7 glass-card rounded-2xl p-4 md:p-5 card-discharge-glow flex flex-col justify-between transition-all"), $ && ($.className = "w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"), k && (k.className = "text-xs uppercase tracking-wider font-extrabold text-red-400"), O && (O.className = "text-rose-400 text-sm font-black transition-colors", O.innerText = `${Q.toFixed(3)} кВт ↑ (РОЗРЯД)`), K && (K.className = "text-rose-400 font-black transition-colors", K.innerText = `${oe}%`), Y && (Y.className = "bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-900 p-3 rounded-xl border border-rose-500/50 mb-3 flex flex-wrap items-center justify-between gap-3 transition-all"), re && (re.innerText = this._language === "en" ? "ESTIMATED AUTONOMY (TO EMPTY):" : "ОЧІКУВАНА АВТОНОМІЯ (ДО РОЗРЯДУ):", re.className = "text-[10px] text-rose-300 uppercase font-bold tracking-wider"), E) {
        E.className = "text-xl md:text-2xl font-black text-rose-400 font-mono tracking-tight transition-all drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]";
        const I = Q > 0.05 ? (e.storedKwh || 16.4) / Q : (e.storedKwh || 16.4) / (e.houseKw || 1.5), W = Math.floor(I), de = Math.round((I - W) * 60);
        E.innerText = `~ ${W} год ${de} хв`;
      }
      N && (N.innerHTML = `Автономність будинку при навантаженні <b>${(e.houseKw || 1.5).toFixed(1)} кВт</b> (живить EPS)`), R && (R.className = "font-bold text-rose-400 transition-colors", R.innerText = `+${Math.abs(e.batCurrent || 0).toFixed(1)} A (Розряд)`), this._updateRackDischargeUi(1, e.rack1, "#f43f5e", "#fb7185"), this._updateRackDischargeUi(2, e.rack2, "#f43f5e", "#fb7185"), T && (T.setAttribute("stroke", "url(#gradBatDischarge)"), T.style.filter = "drop-shadow(0 0 8px #ef4444)", T.style.opacity = "1", T.classList.add("pulse-reverse")), A && (A.setAttribute("stroke", "url(#gradBatDischarge)"), A.style.filter = "drop-shadow(0 0 8px #ef4444)", A.style.opacity = "1", A.classList.add("pulse-reverse"));
    } else {
      if (B && (B.className = "xl:col-span-7 glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-emerald-500/20 flex flex-col justify-between transition-all"), $ && ($.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"), k && (k.className = "text-xs uppercase tracking-wider font-extrabold text-emerald-400"), O && (O.className = "text-emerald-300 text-sm transition-colors", O.innerText = `${Q.toFixed(3)} кВт ↓ (Заряд)`), K && (K.className = "text-emerald-400 font-bold transition-colors", K.innerText = `${oe}%`), Y && (Y.className = "bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 p-3 rounded-xl border border-emerald-500/30 mb-3 flex flex-wrap items-center justify-between gap-3 transition-all"), re && (re.innerText = this._language === "en" ? "ESTIMATED TIME TO FULL CHARGE:" : "РОЗРАХУНОК ДО ПОВНОЇ ЗАРЯДКИ:", re.className = "text-[10px] text-slate-400 uppercase font-bold tracking-wider"), E) {
        E.className = "text-xl md:text-2xl font-black text-emerald-300 font-mono tracking-tight transition-all";
        const I = e.totalCapacityKwh || 28.8, W = e.storedKwh || 16.4, de = Math.max(0, I - W), U = Q > 0.1 ? Q : 3.5, qe = de / U, Fe = Math.floor(qe), mt = Math.round((qe - Fe) * 60);
        E.innerText = `~ ${String(Fe).padStart(2, "0")}:${String(mt).padStart(2, "0")}:00`;
      }
      N && (N.innerHTML = `Запас енергії: <b>~${(e.storedKwh || 16.42).toFixed(2)} кВт·год</b> (автономність будинку ~ 16.5 год)`), R && (R.className = "font-bold text-emerald-300 transition-colors", R.innerText = `${(e.batCurrent || -7.24).toFixed(2)} A`), this._updateRackChargeUi(1, e.rack1, "#10b981", "#34d399", "url(#rackDoorGlow1)"), this._updateRackChargeUi(2, e.rack2, "#059669", "#34d399", "url(#rackDoorGlow2)"), T && (T.setAttribute("stroke", "url(#gradBat1)"), T.style.filter = "drop-shadow(0 0 6px #10b981)", T.style.opacity = "1", T.classList.remove("pulse-reverse")), A && (A.setAttribute("stroke", "url(#gradBat2)"), A.style.filter = "drop-shadow(0 0 6px #059669)", A.style.opacity = "1", A.classList.remove("pulse-reverse"));
    }
    r("batBusVolt3d", `${(e.batVolt || 54.64).toFixed(2)} V`);
    const he = e.houseKw || 0.95;
    r("houseTotalVal3d", `${he.toFixed(3)} ${e.unitStr}`);
    const ee = i.getElementById("pulseHouse3d");
    ee && (ee.style.opacity = he > 0.05 ? "1" : "0.15");
    const ke = e.boilerKw || 0;
    r("boilerVal3d", `${ke.toFixed(3)} ${e.unitStr}`);
    const X = i.getElementById("boilerStatusBadge3d");
    X && (b ? (X.innerText = this._t("boiler_off_blackout"), X.className = "text-[10px] text-slate-400 font-sans") : ke > 0.1 ? (X.innerText = this._t("boiler_heating"), X.className = "text-[10px] text-emerald-400 font-sans font-bold") : (X.innerText = this._t("boiler_idle"), X.className = "text-[10px] text-slate-500 font-sans"));
  }
  _updateRackDischargeUi(e, i, n, r) {
    const o = this.shadowRoot, a = o.getElementById(`rack${e}Card`), s = o.getElementById(`rack${e}Door`), l = o.getElementById(`rack${e}ScreenBorder`), c = o.getElementById(`rack${e}SocBadge`), d = o.getElementById(`rack${e}Title`), y = o.getElementById(`rack${e}PowerVal`), h = o.getElementById(`rack${e}Volt`), x = o.getElementById(`rack${e}Temp`), u = o.getElementById(`rack${e}Delta`), b = o.getElementById(`rack${e}Kwh`);
    a && (a.className = "rack-card rack-discharge card-discharge-glow transition-all"), s && (s.setAttribute("stroke", "#ef4444"), s.setAttribute("fill", "url(#rackDoorGlowRed)")), l && l.setAttribute("stroke", n);
    const _ = (i == null ? void 0 : i.soc) !== void 0 ? i.soc : e === 1 ? 76 : 72, w = (i == null ? void 0 : i.kw) !== void 0 ? Math.abs(i.kw) : e === 1 ? 0.6 : 0.55, g = (p, f, S) => {
      const v = o.getElementById(p);
      v && (v.textContent = f, S && v.setAttribute("fill", S));
    };
    g(`rack${e}SocDisplay`, `${_}%`, r), g(`rack${e}PowerDisplay`, `${w.toFixed(2)} кВт ↑`, n), d && (d.className = "font-bold text-xs text-rose-400 font-sans"), c && (c.className = "text-xs px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold border border-rose-500/30", c.innerText = `${_}%`), y && (y.className = "font-bold text-rose-400 text-sm", y.innerText = `${w.toFixed(2)} кВт ↑ (розряд)`), h && (h.innerText = `${((i == null ? void 0 : i.volt) || 52.8).toFixed(1)} V`), x && (x.innerText = `${((i == null ? void 0 : i.temp) || (e === 1 ? 31 : 18.2)).toFixed(1)} °C`), u && (u.innerText = `Δ${(i == null ? void 0 : i.delta) || (e === 1 ? 12 : 18)} mV`), b && (b.innerText = `~${((i == null ? void 0 : i.kwh) || (e === 1 ? 10.64 : 10.08)).toFixed(2)} кВт·г`);
    for (let p = 1; p <= 3; p++) {
      const f = o.getElementById(`rack${e}Mod${p}Led`);
      f && f.setAttribute("fill", n);
    }
  }
  _updateRackChargeUi(e, i, n, r, o) {
    const a = this.shadowRoot, s = a.getElementById(`rack${e}Card`), l = a.getElementById(`rack${e}Door`), c = a.getElementById(`rack${e}ScreenBorder`), d = a.getElementById(`rack${e}SocBadge`), y = a.getElementById(`rack${e}Title`), h = a.getElementById(`rack${e}PowerVal`), x = a.getElementById(`rack${e}Volt`), u = a.getElementById(`rack${e}Temp`), b = a.getElementById(`rack${e}Delta`), _ = a.getElementById(`rack${e}Kwh`);
    s && (s.className = "rack-card card-3d-glow transition-all"), l && (l.setAttribute("stroke", n), l.setAttribute("fill", o)), c && c.setAttribute("stroke", r);
    const w = (i == null ? void 0 : i.soc) !== void 0 ? i.soc : e === 1 ? 77 : 72, g = (i == null ? void 0 : i.kw) !== void 0 ? Math.abs(i.kw) : e === 1 ? 1.4 : 1.79, p = (f, S, v) => {
      const C = a.getElementById(f);
      C && (C.textContent = S, v && C.setAttribute("fill", v));
    };
    p(`rack${e}SocDisplay`, `${w}%`, r), p(`rack${e}PowerDisplay`, `${g.toFixed(2)} кВт ↓`, "#a7f3d0"), y && (y.className = "font-bold text-xs text-emerald-400 font-sans"), d && (d.className = "text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold", d.innerText = `${w}%`), h && (h.className = "font-bold text-emerald-300 text-sm", h.innerText = `${g.toFixed(2)} кВт ↓`), x && (x.innerText = `${((i == null ? void 0 : i.volt) || (e === 1 ? 54.2 : 54.1)).toFixed(1)} V`), u && (u.innerText = `${((i == null ? void 0 : i.temp) || (e === 1 ? 39.2 : 17)).toFixed(1)} °C`), b && (b.innerText = `Δ${(i == null ? void 0 : i.delta) || (e === 1 ? 13 : 27)} mV`), _ && (_.innerText = `~${((i == null ? void 0 : i.kwh) || (e === 1 ? 10.78 : 11.52)).toFixed(2)} кВт·г`);
    for (let f = 1; f <= 3; f++) {
      const S = a.getElementById(`rack${e}Mod${f}Led`);
      S && S.setAttribute("fill", n);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", Ld);
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", Ta);
window.customCards = window.customCards || [];
window.customCards.some((t) => t.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", Ta);
export {
  Ta as EnergyStationPanel
};
