var Ss = Object.defineProperty;
var Cs = (t, e, i) => e in t ? Ss(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Ue = (t, e, i) => Cs(t, typeof e != "symbol" ? e + "" : e, i);
const ce = {
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
class $s extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general", this._isInternalChange = !1, this._debounceTimer = null, this._rendered = !1, this._isDialogExpanded = !1;
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    if (this._config = JSON.parse(JSON.stringify(e || ce)), this._isInternalChange) {
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
          for (const s of o)
            if (s.shadowRoot) {
              const a = s.shadowRoot.querySelector("hui-dialog-edit-card") || s.shadowRoot.querySelector("ha-dialog-edit-card");
              if (a) return a;
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
    var r, o, s;
    this._isDialogExpanded = e;
    const i = this._findHuiDialog(), n = this._findHaDialog(i);
    if (e) {
      if (i) {
        typeof i._enlarge == "function" && !i.large ? i._enlarge() : (i.large = !0, i.setAttribute("large", ""));
        try {
          if (i.shadowRoot) {
            let a = i.shadowRoot.getElementById("energy-station-wide-style");
            a || (a = document.createElement("style"), a.id = "energy-station-wide-style", a.textContent = `
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
              `, i.shadowRoot.appendChild(a));
          }
        } catch {
        }
      }
      if (n) {
        n.style.setProperty("--mdc-dialog-min-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-width", "95vw", "important");
        try {
          const a = (r = n.shadowRoot) == null ? void 0 : r.querySelector(".mdc-dialog__surface");
          a && (a.style.setProperty("max-width", "96vw", "important"), a.style.setProperty("width", "95vw", "important"));
        } catch {
        }
      }
    } else {
      if (i) {
        typeof i._enlarge == "function" && i.large ? i._enlarge() : (i.large = !1, i.removeAttribute("large"));
        try {
          const a = (o = i.shadowRoot) == null ? void 0 : o.getElementById("energy-station-wide-style");
          a && a.remove();
        } catch {
        }
      }
      if (n) {
        n.style.removeProperty("--mdc-dialog-min-width"), n.style.removeProperty("--mdc-dialog-max-width"), n.style.removeProperty("--ha-dialog-max-width"), n.style.removeProperty("--ha-dialog-width"), n.style.removeProperty("--mdc-dialog-width");
        try {
          const a = (s = n.shadowRoot) == null ? void 0 : s.querySelector(".mdc-dialog__surface");
          a && (a.style.removeProperty("max-width"), a.style.removeProperty("width"));
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
    for (let s = 0; s < r.length - 1; s++)
      o[r[s]] || (o[r[s]] = {}), o = o[r[s]];
    o[r[r.length - 1]] = i, this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null), n ? this._dispatchConfig() : this._debounceTimer = setTimeout(() => {
      this._dispatchConfig();
    }, 140);
  }
  _switchTab(e) {
    this._flushConfig(), this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || ce)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    var s, a, l, c, d, y, h, w, u, b, _, k, g, p, f, S, x, C, $, v, I, Y, H, j, le, E, T, A, B, R, ee, ne, ge, J, ve, W, z, N, Q, Te, X, qe, je, Ht, Ut, Re, ze, It, Be, He, Pe, lt, Ie, ke, yt, Nt, We, dt, O, ye, oe, Ge, Me, ct, re, _e, q, _t, Je, Qe, _i, Ne, mi, xi, di, ci, vi, pi, pt, At, Vi, Lt, ot, Xe, ft, Rt, Pt, Mt, Ft, Ot, Dt, Yt, Jt, mt, fi, wi, ki, gi;
    if (!this._config) return;
    this._rendered = !0;
    const e = this._config, i = (s = this.shadowRoot) == null ? void 0 : s.activeElement;
    let n = null, r = null, o = null;
    if (i && (i.id ? n = `#${i.id}` : ((a = i.dataset) == null ? void 0 : a.idx) !== void 0 && i.className && (n = `.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`), "selectionStart" in i && "selectionEnd" in i && (r = i.selectionStart, o = i.selectionEnd)), this.shadowRoot.innerHTML = `
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
              <input type="text" id="ctrlGridCharge" value="${((w = e.controls) == null ? void 0 : w.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
              <input type="text" id="solarDailyYield" value="${((k = e.solar) == null ? void 0 : k.daily_yield_entity) || ""}">
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
            ${Array.from({ length: ((x = e.solar) == null ? void 0 : x.pv_count) || 3 }).map((he, D) => {
      var Vt, zt;
      const K = D + 1, G = ((zt = (Vt = e.solar) == null ? void 0 : Vt.strings) == null ? void 0 : zt[D]) || {}, Ze = `sensor.deye_12k_inverter_pv${K}_voltage`, et = `sensor.deye_12k_inverter_pv${K}_current`, xt = `sensor.deye_12k_inverter_pv${K}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${K} (Стрінг ${K})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${D}" value="${G.name || `PV ${K}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${K} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${D}" value="${G.voltage_entity !== void 0 ? G.voltage_entity : Ze}" placeholder="${Ze}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${K} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${D}" value="${G.current_entity !== void 0 ? G.current_entity : et}" placeholder="${et}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${K} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${D}" value="${G.capacity_kw !== void 0 ? G.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${K} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${D}" value="${G.power_entity !== void 0 ? G.power_entity : xt}" placeholder="${xt} (авто P = U × I)">
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
              <input type="text" id="invPower" value="${(($ = e.inverter) == null ? void 0 : $.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((v = e.inverter) == null ? void 0 : v.show_self_consumption) !== !1 ? "checked" : ""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((I = e.inverter) == null ? void 0 : I.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((Y = e.inverter) == null ? void 0 : Y.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((H = e.inverter) == null ? void 0 : H.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((j = e.inverter) == null ? void 0 : j.ac_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((le = e.inverter) == null ? void 0 : le.dc_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((E = e.inverter) == null ? void 0 : E.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((T = e.inverter) == null ? void 0 : T.current_entity) || ""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((A = e.inverter) == null ? void 0 : A.frequency_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((B = e.aux) == null ? void 0 : B.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((R = e.aux) == null ? void 0 : R.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((ee = e.aux) == null ? void 0 : ee.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((ne = e.aux) == null ? void 0 : ne.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((ge = e.aux) == null ? void 0 : ge.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((J = e.aux) == null ? void 0 : J.type) === "microinverter" && (!((ve = e.aux) != null && ve.title) || ((W = e.aux) == null ? void 0 : W.title) === "Вітрогенератор") ? "Мікроінвертор" : ((z = e.aux) == null ? void 0 : z.title) || (((N = e.aux) == null ? void 0 : N.type) === "generator" ? "Генератор" : ((Q = e.aux) == null ? void 0 : Q.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((Te = e.aux) == null ? void 0 : Te.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((X = e.wind) == null ? void 0 : X.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((qe = e.wind) == null ? void 0 : qe.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((je = e.wind) == null ? void 0 : je.animation_threshold) || ((Ht = e.aux) == null ? void 0 : Ht.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((Ut = e.wind) == null ? void 0 : Ut.animation_threshold) || ((Re = e.aux) == null ? void 0 : Re.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((ze = e.wind) == null ? void 0 : ze.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((It = e.wind) == null ? void 0 : It.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((Be = e.wind) == null ? void 0 : Be.turbine_count) || 2 }).map((he, D) => {
      var G, Ze;
      const K = ((Ze = (G = e.wind) == null ? void 0 : G.turbines) == null ? void 0 : Ze[D]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${D}" value="${K.name || `Вітряк ${D + 1}`}" placeholder="Назва (напр. Вітряк ${D + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${D}" value="${K.power_entity || `sensor.wind_turbine_${D + 1}_power`}" placeholder="sensor.wind_turbine_${D + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${D}" value="${K.rpm_entity || K.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${D}" value="${K.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${D + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${D}" value="${K.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${D + 1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((He = e.battery) == null ? void 0 : He.soc_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((Pe = e.battery) == null ? void 0 : Pe.power_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((lt = e.battery) == null ? void 0 : lt.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ie = e.battery) == null ? void 0 : Ie.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((ke = e.battery) == null ? void 0 : ke.capacity_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((yt = e.battery) == null ? void 0 : yt.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((Nt = e.battery) == null ? void 0 : Nt.current_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((We = e.battery) == null ? void 0 : We.temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((dt = e.battery) == null ? void 0 : dt.cell_delta_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((O = e.battery) == null ? void 0 : O.charge_daily_entity) || ""}">
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
              <input type="range" id="batParallelCount" min="1" max="8" value="${((oe = e.battery) == null ? void 0 : oe.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ge = e.battery) == null ? void 0 : Ge.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Me = e.battery) == null ? void 0 : Me.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((ct = e.battery) == null ? void 0 : ct.parallel_batteries) || 2 }).map((he, D) => {
      var Si, Ci, $i, hi;
      const K = D + 1, G = ((Ci = (Si = e.battery) == null ? void 0 : Si.modules) == null ? void 0 : Ci[D]) || ((hi = ($i = e.battery) == null ? void 0 : $i.module_entities) == null ? void 0 : hi[D]) || {}, Ze = `sensor.bms_rack${K}_soc`, et = `sensor.bms_rack${K}_current`, xt = `sensor.bms_rack${K}_voltage`, Vt = `sensor.bms_rack${K}_power`, zt = `sensor.bms_rack${K}_temperature`, Ei = `sensor.bms_rack${K}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${K} (Модуль ${K})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${D}" value="${G.name || `Батарея ${K}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${K} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${D}" value="${G.soc_entity !== void 0 ? G.soc_entity : G.soc !== void 0 ? G.soc : Ze}" placeholder="${Ze}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${K} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${D}" value="${G.current_entity !== void 0 ? G.current_entity : et}" placeholder="${et}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${K} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${D}" value="${G.voltage_entity !== void 0 ? G.voltage_entity : G.volt !== void 0 ? G.volt : xt}" placeholder="${xt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${K} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${D}" value="${G.temperature_entity !== void 0 ? G.temperature_entity : G.temp !== void 0 ? G.temp : zt}" placeholder="${zt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${K} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${D}" value="${G.capacity_kwh !== void 0 ? G.capacity_kwh : K === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${K} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${D}" value="${G.cell_delta_entity !== void 0 ? G.cell_delta_entity : G.delta !== void 0 ? G.delta : Ei}" placeholder="${Ei}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${K} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${D}" value="${G.power_entity !== void 0 ? G.power_entity : Vt}" placeholder="${Vt} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(re = e.grid) != null && re.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((_e = e.grid) == null ? void 0 : _e.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((q = e.grid) == null ? void 0 : q.external_power_entity) || ""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((_t = e.grid) == null ? void 0 : _t.auto_calculate) !== !1 ? "checked" : ""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Je = e.grid) == null ? void 0 : Je.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((Qe = e.grid) == null ? void 0 : Qe.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((_i = e.grid) == null ? void 0 : _i.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((Ne = e.grid) == null ? void 0 : Ne.voltage_entity) || ""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((mi = e.grid) == null ? void 0 : mi.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((xi = e.grid) == null ? void 0 : xi.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((di = e.grid) == null ? void 0 : di.import_daily_entity) || ""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((ci = e.grid) == null ? void 0 : ci.export_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((vi = e.grid) == null ? void 0 : vi.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((pi = e.grid) == null ? void 0 : pi.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((pt = e.load) == null ? void 0 : pt.auto_calculate) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((At = e.load) == null ? void 0 : At.separate_export) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((Vi = e.load) == null ? void 0 : Vi.essential_power_entity) || ""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((Lt = e.load) == null ? void 0 : Lt.daily_house_entity) || ""}">
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

          ${(((ot = e.load) == null ? void 0 : ot.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Xe = e.load) == null ? void 0 : Xe.subloads) || []).map((he, D) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${D}" value="${he.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${D}" style="width: 140px;">
                  <option value="boiler" ${he.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${he.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${he.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${he.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${he.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${he.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${he.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${D}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${D}" value="${he.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((ft = e.tariffs) == null ? void 0 : ft.enabled) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((Rt = e.tariffs) == null ? void 0 : Rt.currency) || "грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Pt = e.tariffs) == null ? void 0 : Pt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Mt = e.tariffs) == null ? void 0 : Mt.day_rate) ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Ft = e.tariffs) == null ? void 0 : Ft.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((Ot = e.tariffs) == null ? void 0 : Ot.night_rate) ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Dt = e.tariffs) == null ? void 0 : Dt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Yt = e.tariffs) == null ? void 0 : Yt.export_rate) ?? 5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (he, D) => {
      var K;
      return `<option value="${D}" ${(((K = e.tariffs) == null ? void 0 : K.night_start_hour) ?? 23) === D ? "selected" : ""}>${String(D).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (he, D) => {
      var K;
      return `<option value="${D}" ${(((K = e.tariffs) == null ? void 0 : K.night_end_hour) ?? 7) === D ? "selected" : ""}>${String(D).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((Jt = e.tariffs) == null ? void 0 : Jt.import_day_entity) || ""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((mt = e.tariffs) == null ? void 0 : mt.import_night_entity) || ""}" placeholder="sensor.daily_energy_night">
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
              <input type="checkbox" id="tariffShowDailyCost" ${((fi = e.tariffs) == null ? void 0 : fi.show_daily_cost) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((wi = e.tariffs) == null ? void 0 : wi.show_export_income) !== !1 ? "checked" : ""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((ki = e.tariffs) == null ? void 0 : ki.show_active_badge) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((gi = e.tariffs) == null ? void 0 : gi.show_solar_savings) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `, this._bindEvents(), this._updateExpandBtn(), n) {
      const he = this.shadowRoot.querySelector(n);
      if (he && (he.focus(), r !== null && o !== null && "setSelectionRange" in he))
        try {
          he.setSelectionRange(r, o);
        } catch {
        }
    }
  }
  _bindEvents() {
    var s, a, l, c, d, y, h, w, u, b, _, k;
    const e = this.shadowRoot;
    (s = e.getElementById("btnToggleExpand")) == null || s.addEventListener("click", () => {
      this._applyExpand(!this._isDialogExpanded);
    }), e.querySelectorAll(".tab-btn").forEach((g) => {
      g.addEventListener("click", (p) => {
        this._switchTab(p.target.dataset.tab);
      });
    }), (a = e.getElementById("btnPresetEsp")) == null || a.addEventListener("click", () => this._applyPreset("deye_esphome")), (l = e.getElementById("btnPresetSolarman")) == null || l.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (g, p) => {
      const f = e.getElementById(g);
      f && (f.addEventListener("input", (S) => this._valueChanged(p, S.target.value, !1)), f.addEventListener("change", (S) => this._valueChanged(p, S.target.value, !0)), f.addEventListener("blur", () => this._flushConfig()));
    }, n = (g, p) => {
      const f = e.getElementById(g);
      f && f.addEventListener("change", (S) => this._valueChanged(p, S.target.checked, !0));
    }, r = (g, p, f, S = "") => {
      const x = e.getElementById(g);
      x && (x.addEventListener("input", (C) => {
        const $ = parseFloat(C.target.value);
        if (f) {
          const v = e.getElementById(f);
          v && (v.innerText = `${$}${S}`);
        }
        this._valueChanged(p, isNaN($) ? 0 : $, !1);
      }), x.addEventListener("change", (C) => {
        const $ = parseFloat(C.target.value);
        this._valueChanged(p, isNaN($) ? 0 : $, !0);
      }), x.addEventListener("blur", () => this._flushConfig()));
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
      const x = e.getElementById("auxTitle");
      x && (x.value = S), this._valueChanged("aux.type", p, !0), this._valueChanged("aux.title", S, !0);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (w = e.getElementById("windTurbineCount")) == null || w.addEventListener("input", (g) => {
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
    (_ = e.getElementById("btnAddSubload")) == null || _.addEventListener("click", o), (k = e.getElementById("btnAddSubloadBottom")) == null || k.addEventListener("click", o), e.querySelectorAll(".btn-del-subload").forEach((g) => {
      g.addEventListener("click", (p) => {
        var x;
        const f = p.currentTarget || p.target.closest(".btn-del-subload"), S = parseInt(f.dataset.idx);
        (x = this._config.load) != null && x.subloads && (this._config.load.subloads.splice(S, 1), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((g) => {
      g.addEventListener("input", (p) => {
        var S, x;
        const f = parseInt(p.target.dataset.idx);
        (x = (S = this._config.load) == null ? void 0 : S.subloads) != null && x[f] && (this._config.load.subloads[f].name = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), g.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".subload-icon").forEach((g) => {
      g.addEventListener("change", (p) => {
        var S, x;
        const f = parseInt(p.target.dataset.idx);
        (x = (S = this._config.load) == null ? void 0 : S.subloads) != null && x[f] && (this._config.load.subloads[f].icon = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads, !0));
      });
    }), e.querySelectorAll(".subload-entity").forEach((g) => {
      g.addEventListener("input", (p) => {
        var S, x;
        const f = parseInt(p.target.dataset.idx);
        (x = (S = this._config.load) == null ? void 0 : S.subloads) != null && x[f] && (this._config.load.subloads[f].entity = p.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), g.addEventListener("blur", () => this._flushConfig());
    }), n("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), r("tariffDayRate", "tariffs.day_rate"), r("tariffNightRate", "tariffs.night_rate"), r("tariffExportRate", "tariffs.export_rate"), r("tariffNightStart", "tariffs.night_start_hour"), r("tariffNightEnd", "tariffs.night_end_hour"), i("tariffImportDayEntity", "tariffs.import_day_entity"), i("tariffImportNightEntity", "tariffs.import_night_entity"), n("tariffShowDailyCost", "tariffs.show_daily_cost"), n("tariffShowExportIncome", "tariffs.show_export_income"), n("tariffShowActiveBadge", "tariffs.show_active_badge"), n("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", $s);
/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */
var Z = Symbol("NOT_RESOLVED");
function Le(t, e) {
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
function sn(t, e) {
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
function Pi(t, e) {
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
var Ts = Le("tag:yaml.org,2002:str", {
  resolve: (t) => t,
  identify: (t) => typeof t == "string"
}), Bs = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], Is = Le("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => Bs.indexOf(t) !== -1 ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), Ns = Le("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: ["n"],
  resolve: (t, e) => t === "null" || e && t === "" ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), As = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], Ls = Le("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => As.indexOf(t) !== -1 ? null : Z,
  identify: (t) => t === null,
  represent: () => "null"
}), Rs = [
  "true",
  "True",
  "TRUE"
], Ps = [
  "false",
  "False",
  "FALSE"
], Ms = Le("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: [
    "t",
    "T",
    "f",
    "F"
  ],
  resolve: (t) => Rs.indexOf(t) !== -1 ? !0 : Ps.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Fs = ["true"], Os = ["false"], Ds = Le("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: ["t", "f"],
  resolve: (t) => Fs.indexOf(t) !== -1 ? !0 : Os.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Vs = [
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
], zs = [
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
], Gs = Le("tag:yaml.org,2002:bool", {
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
  resolve: (t) => Vs.indexOf(t) !== -1 ? !0 : zs.indexOf(t) !== -1 ? !1 : Z,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Ws = /* @__PURE__ */ new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"), Ks = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function qs(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function js(t, e) {
  if (e) {
    if (!Ks.test(t)) return Z;
  } else if (!Ws.test(t)) return Z;
  const i = qs(t);
  return Number.isFinite(i) ? i : Z;
}
var Wo = Le("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: js,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Hs = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)$"), Us = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function Ys(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function Js(t, e) {
  if (e) {
    if (!Us.test(t)) return Z;
  } else if (!Hs.test(t)) return Z;
  const i = Ys(t);
  return Number.isFinite(i) ? i : Z;
}
var Qs = Le("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: Js,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Xs = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function Zs(t) {
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
function ea(t) {
  if (!Xs.test(t)) return Z;
  const e = Zs(t);
  return Number.isFinite(e) ? e : Z;
}
var Yi = Le("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: ea,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), ta = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), ia = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function na(t) {
  if (!ta.test(t)) return Z;
  let e = t.toLowerCase();
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  const n = i * parseFloat(e);
  return Number.isFinite(n) || ia.test(t) ? n : Z;
}
function ra(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var Ko = Le("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: na,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: ra
}), oa = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"), sa = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function aa(t, e) {
  if (e) {
    if (!sa.test(t)) return Z;
    let n = t.toLowerCase();
    const r = n[0] === "-" ? -1 : 1;
    if ("+-".includes(n[0]) && (n = n.slice(1)), n === ".inf") return r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    if (n === ".nan") return NaN;
    const o = r * parseFloat(n);
    return Number.isFinite(o) ? o : Z;
  }
  if (!oa.test(t)) return Z;
  const i = Number(t);
  return Number.isFinite(i) ? i : Z;
}
function la(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var da = Le("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: aa,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: la
}), ca = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), pa = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function fa(t) {
  if (!ca.test(t)) return Z;
  let e = t.toLowerCase().replace(/_/g, "");
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  let n = 0;
  if (e.includes(":")) {
    for (const r of e.split(":")) n = n * 60 + Number(r);
    n *= i;
  } else n = i * parseFloat(e);
  return Number.isFinite(n) || pa.test(t) ? n : Z;
}
function ga(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var Ji = Le("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: fa,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: ga
}), ha = Le("tag:yaml.org,2002:merge", {
  implicit: !0,
  implicitFirstChars: ["<"],
  resolve: (t, e) => t === "<<" || e && t === "" ? "<<" : Z,
  identify: () => !1
}), ua = /^[A-Za-z0-9+/]*={0,2}$/;
function ba(t) {
  const e = t.replace(/\s/g, "");
  if (e.length % 4 !== 0 || !ua.test(e)) return Z;
  const i = atob(e), n = new Uint8Array(i.length);
  for (let r = 0; r < i.length; r++) n[r] = i.charCodeAt(r);
  return n;
}
function ya(t) {
  let e = "";
  for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
  return btoa(e);
}
var _a = Le("tag:yaml.org,2002:binary", {
  resolve: ba,
  identify: (t) => Object.prototype.toString.call(t) === "[object Uint8Array]",
  represent: ya
}), ma = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), xa = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function So(t, e, i, n = 0, r = 0, o = 0, s = 0) {
  const a = new Date(Date.UTC(t, e, i, n, r, o, s));
  return a.setUTCFullYear(t, e, i), a;
}
function va(t) {
  let e = ma.exec(t);
  if (e === null && (e = xa.exec(t)), e === null) return Z;
  const i = +e[1], n = +e[2] - 1, r = +e[3];
  if (!e[4]) {
    const d = So(i, n, r);
    return d.getUTCFullYear() !== i || d.getUTCMonth() !== n || d.getUTCDate() !== r ? Z : d;
  }
  const o = +e[4], s = +e[5], a = +e[6];
  let l = 0;
  if (o > 23 || s > 59 || a > 59) return Z;
  if (e[7]) {
    let d = e[7].slice(0, 3);
    for (; d.length < 3; ) d += "0";
    l = +d;
  }
  const c = So(i, n, r, o, s, a, l);
  if (c.getUTCFullYear() !== i || c.getUTCMonth() !== n || c.getUTCDate() !== r) return Z;
  if (e[9]) {
    const d = +e[10], y = +(e[11] || 0);
    if (d > 23 || y > 59) return Z;
    const h = (d * 60 + y) * 6e4;
    c.setTime(c.getTime() - (e[9] === "-" ? -h : h));
  }
  return c;
}
var wa = Le("tag:yaml.org,2002:timestamp", {
  implicit: !0,
  implicitFirstChars: [..."0123456789"],
  resolve: va,
  identify: (t) => t instanceof Date,
  represent: (t) => t.toISOString()
}), ka = sn("tag:yaml.org,2002:seq", {
  create: () => [],
  addItem: (t, e) => {
    t.push(e);
  },
  identify: Array.isArray
});
function Mi(t) {
  if (t === null || typeof t != "object" || Array.isArray(t)) return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function Qi(t, e) {
  const i = {};
  for (const n of e) t[n] !== void 0 && (i[n] = t[n]);
  return i;
}
var Ea = sn("tag:yaml.org,2002:omap", {
  create: () => ({
    list: [],
    seen: /* @__PURE__ */ new Set()
  }),
  addItem: (t, e) => {
    let i;
    if (e instanceof Map) {
      if (e.size !== 1) return "cannot resolve an ordered map item";
      i = e.keys().next().value;
    } else if (Mi(e)) {
      const n = Object.keys(e);
      if (n.length !== 1) return "cannot resolve an ordered map item";
      i = n[0];
    } else return "cannot resolve an ordered map item";
    return t.seen.has(i) ? "duplicate key in ordered map" : (t.seen.add(i), t.list.push(e), "");
  },
  finalize: (t) => t.list,
  identify: () => !1
}), Sa = sn("tag:yaml.org,2002:pairs", {
  create: () => [],
  addItem: (t, e) => {
    if (e instanceof Map)
      return e.size !== 1 ? "cannot resolve a pairs item" : (t.push(e.entries().next().value), "");
    if (Object.prototype.toString.call(e) !== "[object Object]") return "cannot resolve a pairs item";
    const i = e, n = Object.keys(i);
    return n.length !== 1 ? "cannot resolve a pairs item" : (t.push([n[0], i[n[0]]]), "");
  },
  identify: () => !1
}), Ca = Pi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Mi,
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
}), $a = Pi("tag:yaml.org,2002:set", {
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
function Ta() {
  return {
    scalar: /* @__PURE__ */ Object.create(null),
    sequence: /* @__PURE__ */ Object.create(null),
    mapping: /* @__PURE__ */ Object.create(null)
  };
}
function Ba() {
  return {
    scalar: [],
    sequence: [],
    mapping: []
  };
}
function Ia(t) {
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
var Fi = class qo {
  constructor(e) {
    Ue(this, "tags");
    /** @internal */
    Ue(this, "implicitScalarTags");
    /**
    * Dispatch implicit scalar resolvers by `source.charAt(0)`. Each bucket holds
    * the resolvers that may match that key, in schema order; a key absent from
    * the map uses
    * {@link Schema.implicitScalarAnyFirstChar}
    * (resolvers that declared no first-char constraint, so they apply to any
    * first character).
    */
    Ue(this, "implicitScalarByFirstChar");
    Ue(this, "implicitScalarAnyFirstChar");
    /**
    * The default scalar tag (`!!str`), resolved once so the composer's fallback
    * for unresolved plain scalars avoids a keyed lookup per scalar.
    *
    * @internal
    */
    Ue(this, "defaultScalarTag");
    /**
    * The default container tags (`!!seq` / `!!map`), used by the dumper: when a
    * value is identified by its default tag, the tag is implicit and not
    * printed. Undefined if the schema does not define them (then such values
    * can't be dumped).
    *
    * @internal
    */
    Ue(this, "defaultSequenceTag");
    /** @internal */
    Ue(this, "defaultMappingTag");
    Ue(this, "exact");
    Ue(this, "prefix");
    const i = Ia(e), n = [], r = Ta(), o = Ba();
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
    const s = n.filter((d) => d.implicitFirstChars === null), a = /* @__PURE__ */ new Set();
    for (const d of n) if (d.implicitFirstChars !== null) for (const y of d.implicitFirstChars) a.add(y);
    const l = /* @__PURE__ */ new Map();
    for (const d of a) l.set(d, n.filter((y) => y.implicitFirstChars === null || y.implicitFirstChars.indexOf(d) !== -1));
    const c = r.scalar["tag:yaml.org,2002:str"];
    if (!c) throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
    this.tags = i, this.implicitScalarTags = n, this.implicitScalarByFirstChar = l, this.implicitScalarAnyFirstChar = s, this.defaultScalarTag = c, this.defaultSequenceTag = r.sequence["tag:yaml.org,2002:seq"], this.defaultMappingTag = r.mapping["tag:yaml.org,2002:map"], this.exact = r, this.prefix = o;
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
    return new qo([...this.tags, ...i]);
  }
}, an = new Fi([
  Ts,
  ka,
  Ca
]);
new Fi([
  ...an.tags,
  Ns,
  Ds,
  Qs,
  da
]);
var Na = new Fi([
  ...an.tags,
  Is,
  Ms,
  Wo,
  Ko
]), Aa = new Fi([
  ...an.tags,
  Ls,
  Gs,
  Yi,
  Ji,
  wa,
  ha,
  _a,
  Ea,
  Sa,
  $a
]), La = Aa.withTags({
  ...Yi,
  resolve: (t, e, i) => {
    const n = Yi.resolve(t, e, i);
    return n === Z ? Wo.resolve(t, e, i) : n;
  }
}, {
  ...Ji,
  resolve: (t, e, i) => {
    const n = Ji.resolve(t, e, i);
    return n === Z ? Ko.resolve(t, e, i) : n;
  }
});
Pi("tag:yaml.org,2002:map", {
  create: () => /* @__PURE__ */ new Map(),
  addPair: (t, e, i) => (t.set(e, i), ""),
  has: (t, e) => t.has(e),
  keys: (t) => t.keys(),
  get: (t, e) => t.get(e),
  identify: (t) => t instanceof Map || Mi(t),
  represent: (t) => {
    if (t instanceof Map) return t;
    const e = /* @__PURE__ */ new Map(), i = t;
    for (const n of Object.keys(i)) e.set(n, i[n]);
    return e;
  }
});
function Co(t) {
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
Pi("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: Mi,
  represent: (t) => {
    const e = /* @__PURE__ */ new Map();
    for (const i of Object.keys(t)) e.set(i, t[i]);
    return e;
  },
  addPair: (t, e, i) => {
    const n = Co(e);
    return n === null ? "nested arrays are not supported inside keys" : (n === "__proto__" ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, "");
  },
  has: (t, e) => {
    const i = Co(e);
    return i !== null && Object.prototype.hasOwnProperty.call(t, i);
  },
  keys: (t) => Object.keys(t),
  get: (t, e) => {
    const i = String(e);
    return Object.prototype.hasOwnProperty.call(t, i) ? t[i] : null;
  }
});
var Ra = {
  maxLength: 79,
  indent: 1,
  linesBefore: 3,
  linesAfter: 2
};
function Gi(t, e, i, n, r) {
  let o = "", s = "";
  const a = Math.floor(r / 2) - 1;
  return n - e > a && (o = " ... ", e = n - a + o.length), i - n > a && (s = " ...", i = n + a - s.length), {
    str: o + t.slice(e, i).replace(/\t/g, "→") + s,
    pos: n - e + o.length
  };
}
function Wi(t, e) {
  return " ".repeat(Math.max(e - t.length, 0)) + t;
}
function Pa(t, e) {
  if (!t.buffer) return null;
  const i = {
    ...Ra,
    ...e
  }, n = /\r?\n|\r|\0/g, r = [0], o = [];
  let s, a = -1;
  for (; s = n.exec(t.buffer); )
    o.push(s.index), r.push(s.index + s[0].length), t.position <= s.index && a < 0 && (a = r.length - 2);
  a < 0 && (a = r.length - 1);
  let l = "";
  const c = Math.min(t.line + i.linesAfter, o.length).toString().length, d = i.maxLength - (i.indent + c + 3);
  for (let h = 1; h <= i.linesBefore && !(a - h < 0); h++) {
    const w = Gi(t.buffer, r[a - h], o[a - h], t.position - (r[a] - r[a - h]), d);
    l = `${" ".repeat(i.indent)}${Wi((t.line - h + 1).toString(), c)} | ${w.str}
${l}`;
  }
  const y = Gi(t.buffer, r[a], o[a], t.position, d);
  l += `${" ".repeat(i.indent)}${Wi((t.line + 1).toString(), c)} | ${y.str}
`, l += `${"-".repeat(i.indent + c + 3 + y.pos)}^
`;
  for (let h = 1; h <= i.linesAfter && !(a + h >= o.length); h++) {
    const w = Gi(t.buffer, r[a + h], o[a + h], t.position - (r[a] - r[a + h]), d);
    l += `${" ".repeat(i.indent)}${Wi((t.line + h + 1).toString(), c)} | ${w.str}
`;
  }
  return l.replace(/\n$/, "");
}
function $o(t, e) {
  let i = "";
  return t.mark ? (t.mark.name && (i += `in "${t.mark.name}" `), i += `(${t.mark.line + 1}:${t.mark.column + 1})`, !e && t.mark.snippet && (i += `

${t.mark.snippet}`), `${t.reason} ${i}`) : t.reason;
}
var Bt = class jo extends Error {
  /**
  * Optional `mark` contains source snippet data. Usually, use
  * {@link YAMLException.throwAt} instead of passing it directly.
  */
  constructor(i, n) {
    super();
    Ue(this, "reason");
    Ue(this, "mark");
    this.name = "YAMLException", this.reason = i, this.mark = n, this.message = $o(this, !1), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  /**
  * Returns the formatted error, omitting the source snippet in compact mode.
  */
  toString(i) {
    return `${this.name}: ${$o(this, i)}`;
  }
  /**
  * Builds a YAMLException with a source snippet and throws it. `source` is
  * the raw input text; `position` is an offset into it.
  */
  static throwAt(i, n, r, o = "") {
    let s = 0, a = 0;
    for (let c = 0; c < n; c++) {
      const d = i.charCodeAt(c);
      d === 10 ? (s++, a = c + 1) : d === 13 && (s++, i.charCodeAt(c + 1) === 10 && c++, a = c + 1);
    }
    const l = {
      name: o,
      buffer: i,
      position: n,
      line: s,
      column: n - a
    };
    throw l.snippet = Pa(l), new jo(r, l);
  }
}, Ce = {
  DOCUMENT: 1,
  SEQUENCE: 2,
  MAPPING: 3,
  SCALAR: 4,
  ALIAS: 5,
  POP: 6
}, V = {
  PLAIN: 1,
  SINGLE_QUOTED: 2,
  DOUBLE_QUOTED: 3,
  LITERAL_BLOCK: 4,
  FOLDED_BLOCK: 5
}, Ye = {
  BLOCK: 1,
  FLOW: 2
}, at = {
  CLIP: 1,
  STRIP: 2,
  KEEP: 3
}, Ma = -1;
function To(t) {
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
var Ho = new Array(256), Uo = new Array(256);
for (let t = 0; t < 256; t++)
  Ho[t] = To(t) ? 1 : 0, Uo[t] = To(t);
function Fa(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode((t - 65536 >> 10) + 55296, (t - 65536 & 1023) + 56320);
}
function Oa(t) {
  return t >= 48 && t <= 57 ? t - 48 : (t | 32) - 97 + 10;
}
function Da(t) {
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
function Va(t, e, i) {
  let n = "", r = e, o = e, s = e;
  for (; r < i; ) {
    const a = t.charCodeAt(r);
    if (a === 10 || a === 13) {
      n += t.slice(o, s);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = s = l.position;
    } else
      r++, a !== 32 && a !== 9 && (s = r);
  }
  return n + t.slice(o, s);
}
function za(t, e, i) {
  let n = "", r = e, o = e, s = e;
  for (; r < i; ) {
    const a = t.charCodeAt(r);
    if (a === 39)
      n += t.slice(o, r) + "'", r += 2, o = s = r;
    else if (a === 10 || a === 13) {
      n += t.slice(o, s);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = s = l.position;
    } else
      r++, a !== 32 && a !== 9 && (s = r);
  }
  return n + t.slice(o, i);
}
function Ga(t, e, i) {
  let n = "", r = e, o = e, s = e;
  for (; r < i; ) {
    const a = t.charCodeAt(r);
    if (a === 92) {
      n += t.slice(o, r), r++;
      const l = t.charCodeAt(r);
      if (l === 10 || l === 13) r = Ni(t, r, i).position;
      else if (l < 256 && Ho[l])
        n += Uo[l], r++;
      else {
        let c = Da(l), d = 0;
        for (; c > 0; c--) {
          r++;
          const y = Oa(t.charCodeAt(r));
          d = (d << 4) + y;
        }
        n += Fa(d), r++;
      }
      o = s = r;
    } else if (a === 10 || a === 13) {
      n += t.slice(o, s);
      const l = Ni(t, r, i);
      n += ln(l.breaks), r = o = s = l.position;
    } else
      r++, a !== 32 && a !== 9 && (s = r);
  }
  return n + t.slice(o, i);
}
function Bo(t, e, i, n, r, o) {
  const s = n < 0 ? 0 : n, a = t.slice(e, i).replace(/\r\n?/g, `
`), l = a === "" ? [] : (a.endsWith(`
`) ? a.slice(0, -1) : a).split(`
`);
  let c = "", d = !1, y = 0, h = !1;
  for (const w of l) {
    let u = 0;
    for (; u < s && w.charCodeAt(u) === 32; ) u++;
    if (n < 0 || u >= w.length) {
      y++;
      continue;
    }
    const b = w.slice(s), _ = b.charCodeAt(0);
    o ? _ === 32 || _ === 9 ? (h = !0, c += `
`.repeat(d ? 1 + y : y)) : h ? (h = !1, c += `
`.repeat(y + 1)) : y === 0 ? d && (c += " ") : c += `
`.repeat(y) : c += `
`.repeat(d ? 1 + y : y), c += b, d = !0, y = 0;
  }
  return r === at.KEEP ? c += `
`.repeat(d ? 1 + y : y) : r !== at.STRIP && d && (c += `
`), c;
}
function Wa(t, e) {
  if (e.valueStart === Ma) return "";
  const { valueStart: i, valueEnd: n } = e;
  if (e.fast) return t.slice(i, n);
  switch (e.style) {
    case V.SINGLE_QUOTED:
      return za(t, i, n);
    case V.DOUBLE_QUOTED:
      return Ga(t, i, n);
    case V.LITERAL_BLOCK:
      return Bo(t, i, n, e.indent, e.chomping, !1);
    case V.FOLDED_BLOCK:
      return Bo(t, i, n, e.indent, e.chomping, !0);
    default:
      return Va(t, i, n);
  }
}
var Ka = Object.assign(/* @__PURE__ */ Object.create(null), {
  "!": "!",
  "!!": "tag:yaml.org,2002:"
}), Yo = "-#;/?:@&=+$_.~*'()", qa = Yo + "!,[]", Io = "0123456789ABCDEF";
function st(t) {
  return "%" + Io[t >> 4] + Io[t & 15];
}
function Ki(t, e) {
  const i = e ? Yo : qa;
  let n = "";
  for (let r = 0; r < t.length; r++) {
    let o = t.charCodeAt(r);
    if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || i.includes(t[r])) {
      n += t[r];
      continue;
    }
    o >= 55296 && o <= 56319 && (o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++r) & 1023)), o < 128 ? n += st(o) : o < 2048 ? n += st(192 | o >> 6) + st(128 | o & 63) : o < 65536 ? n += st(224 | o >> 12) + st(128 | o >> 6 & 63) + st(128 | o & 63) : n += st(240 | o >> 18) + st(128 | o >> 12 & 63) + st(128 | o >> 6 & 63) + st(128 | o & 63);
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
function Jo(t, e) {
  if (t.startsWith("!<") && t.endsWith(">")) return qi(t.slice(2, -1));
  const i = t.indexOf("!", 1), n = i === -1 ? "!" : t.slice(0, i + 1);
  return qi((e == null ? void 0 : e[n]) ?? Ka[n] ?? n) + qi(t.slice(n.length));
}
function Qo(t) {
  let e = t;
  return e.charCodeAt(0) === 33 ? (e = e.slice(1), `!${Ki(e, !0)}`) : e.slice(0, 18) === "tag:yaml.org,2002:" ? `!!${Ki(e.slice(18), !0)}` : `!<${Ki(e, !1)}>`;
}
var ei = -1, ja = "tag:yaml.org,2002:merge", dn = {
  filename: "",
  schema: Na,
  json: !1,
  maxTotalMergeKeys: 1e4,
  maxAliases: -1
};
function Ha(t) {
  return "tagStart" in t && t.tagStart !== ei ? t.tagStart : "anchorStart" in t && t.anchorStart !== ei ? t.anchorStart : "valueStart" in t && t.valueStart !== ei ? t.valueStart : "start" in t ? t.start : 0;
}
function $e(t, e) {
  Bt.throwAt(t.source, t.position, e, t.filename);
}
function Xo(t, e, i, n) {
  try {
    return i.finalize(n);
  } catch (r) {
    if (r instanceof Bt) throw r;
    Bt.throwAt(t.source, e, r instanceof Error ? r.message : String(r), t.filename);
  }
}
function Ua(t, e) {
  const i = Wa(t.source, e), n = e.tagStart === ei ? "" : t.source.slice(e.tagStart, e.tagEnd), r = t.schema.defaultScalarTag;
  if (n !== "") {
    if (n === "!") return {
      value: i,
      tag: r
    };
    const o = Jo(n, t.tagHandlers), s = t.schema.lookupScalarTag(o);
    if (s) {
      const l = s.resolve(i, !0, o);
      return l === Z && $e(t, `cannot resolve a node with !<${o}> explicit tag`), {
        value: l,
        tag: s
      };
    }
    const a = t.schema.lookupMappingTag(o) ?? t.schema.lookupSequenceTag(o);
    if (a) {
      i !== "" && $e(t, `cannot resolve a node with !<${o}> explicit tag`);
      const l = a.create(o);
      return {
        value: a.carrierIsResult ? l : Xo(t, t.position, a, l),
        tag: a
      };
    }
    $e(t, `unknown scalar tag !<${o}>`);
  }
  return e.style === V.PLAIN ? t.schema.resolveImplicitScalarTag(i) : {
    value: r.resolve(i, !1, r.tagName),
    tag: r
  };
}
function No(t, e, i) {
  const n = e.tagStart === ei ? "" : t.source.slice(e.tagStart, e.tagEnd);
  return n === "" || n === "!" ? i : Jo(n, t.tagHandlers);
}
function Zo(t) {
  return t.nodeKind === "mapping";
}
function Ao(t) {
  t.totalMergeKeys++, t.maxTotalMergeKeys !== -1 && t.totalMergeKeys > t.maxTotalMergeKeys && $e(t, `merge keys exceeded maxTotalMergeKeys (${t.maxTotalMergeKeys})`);
}
function Lo(t, e, i, n) {
  Ao(t);
  for (const r of n.keys(i)) {
    if (Ao(t), e.tag.has(e.value, r)) continue;
    const o = e.tag.addPair(e.value, r, n.get(i, r));
    o && $e(t, o), e.overridable ?? (e.overridable = /* @__PURE__ */ new Set()), e.overridable.add(r);
  }
}
function Ya(t, e, i, n) {
  if (t.position = e.keyPosition, Zo(n)) Lo(t, e, i, n);
  else if (n.nodeKind === "sequence" && Array.isArray(i)) {
    i.length > 100 && $e(t, "abnormal merge sequence size");
    for (const r of i) {
      const o = t.nodeTags.get(r);
      o || $e(t, "cannot merge mappings; the provided source object is unacceptable"), Lo(t, e, r, o);
    }
  } else $e(t, "cannot merge mappings; the provided source object is unacceptable");
}
function Ja(t, e, i, n, r) {
  var s, a;
  if (t.position = e.keyPosition, e.keyIsMerge) {
    Ya(t, e, n, r);
    return;
  }
  !t.json && e.tag.has(e.value, i) && !((s = e.overridable) != null && s.has(i)) && $e(t, "duplicated mapping key");
  const o = e.tag.addPair(e.value, i, n);
  o && $e(t, o), (a = e.overridable) == null || a.delete(i);
}
function ji(t, e, i) {
  const n = t.frames[t.frames.length - 1];
  if (n.kind === "document")
    n.value = e, n.hasValue = !0;
  else if (n.kind === "sequence") {
    Zo(i) && t.nodeTags.set(e, i);
    const r = n.tag.addItem(n.value, e, n.index++);
    r && $e(t, r);
  } else if (n.hasKey) {
    const r = n.key;
    n.key = void 0, n.hasKey = !1, Ja(t, n, r, e, i);
  } else
    n.key = e, n.keyPosition = t.position, n.hasKey = !0, n.keyIsMerge = i.tagName === ja;
}
function Hi(t, e, i, n, r) {
  if (e.anchorStart !== ei) {
    const o = {
      value: i,
      tag: n,
      isValueFinal: r
    };
    return t.anchors.set(t.source.slice(e.anchorStart, e.anchorEnd), o), o;
  }
  return null;
}
function Qa(t, e) {
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
    switch (i.position = Ha(n), n.type) {
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
        const { value: r, tag: o } = Ua(i, n);
        Hi(i, n, r, o, !0), ji(i, r, o);
        break;
      }
      case Ce.SEQUENCE: {
        const r = No(i, n, "tag:yaml.org,2002:seq"), o = i.schema.lookupSequenceTag(r);
        o || $e(i, `unknown sequence tag !<${r}>`);
        const s = o.create(r), a = Hi(i, n, s, o, o.carrierIsResult);
        i.frames.push({
          kind: "sequence",
          position: i.position,
          value: s,
          tag: o,
          anchor: a,
          index: 0
        });
        break;
      }
      case Ce.MAPPING: {
        const r = No(i, n, "tag:yaml.org,2002:map"), o = i.schema.lookupMappingTag(r);
        o || $e(i, `unknown mapping tag !<${r}>`);
        const s = o.create(r), a = Hi(i, n, s, o, o.carrierIsResult);
        i.frames.push({
          kind: "mapping",
          position: i.position,
          value: s,
          tag: o,
          anchor: a,
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
        const r = i.source.slice(n.anchorStart, n.anchorEnd), o = i.anchors.get(r);
        o || $e(i, `unidentified alias "${r}"`), o.isValueFinal || $e(i, `recursive alias "${r}" is not supported for tag ${o.tag.tagName} because it uses finalize()`), ji(i, o.value, o.tag);
        break;
      }
      case Ce.POP: {
        const r = i.frames.pop();
        if (r.kind === "mapping" && r.hasKey && (i.position = r.keyPosition, $e(i, "incomplete mapping pair in event stream")), r.kind === "document") i.documents.push(r.value);
        else {
          const o = r.tag.carrierIsResult ? r.value : Xo(i, r.position, r.tag, r.value);
          r.anchor && (r.anchor.value = o, r.anchor.isValueFinal = !0), ji(i, o, r.tag);
        }
        break;
      }
    }
  }
  return i.documents;
}
var ie = -1, es = Object.prototype.hasOwnProperty, ri = 1, ts = 2, is = 3, Ai = 4, Xa = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Za = /[,\[\]{}]/, ns = /^(?:!|!!|![0-9A-Za-z-]+!)$/, Xi = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`, rs = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`, el = new RegExp(`^(?:${Xi})*$`), tl = new RegExp(`^(?:${rs})+$`), il = new RegExp(`^(?:!(?:${Xi})*|${rs}(?:${Xi})*)$`), cn = {
  filename: "",
  maxDepth: 100
};
function nl(t, e, i) {
  t.events.push({
    type: Ce.DOCUMENT,
    explicitStart: e,
    explicitEnd: i,
    directives: t.directives
  });
}
function os(t, e, i, n, r, o, s) {
  t.events.push({
    type: Ce.SEQUENCE,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: o,
    style: s
  });
}
function ss(t, e, i, n, r, o, s) {
  t.events.push({
    type: Ce.MAPPING,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: r,
    tagEnd: o,
    style: s
  });
}
function Ro(t, e) {
  t.events.splice(e.eventsLength, 0, {
    type: Ce.MAPPING,
    start: e.position,
    anchorStart: ie,
    anchorEnd: ie,
    tagStart: ie,
    tagEnd: ie,
    style: Ye.FLOW
  });
}
function ai(t, e, i, n, r, o, s, a, l = at.CLIP, c = -1, d = !1) {
  t.events.push({
    type: Ce.SCALAR,
    valueStart: e,
    valueEnd: i,
    anchorStart: n,
    anchorEnd: r,
    tagStart: o,
    tagEnd: s,
    style: a,
    chomping: l,
    indent: c,
    fast: d
  });
}
function rl(t, e, i) {
  t.events.push({
    type: Ce.ALIAS,
    anchorStart: e,
    anchorEnd: i
  });
}
function ti(t) {
  t.events.push({ type: Ce.POP });
}
function Ve(t) {
  ai(t, ie, ie, ie, ie, ie, ie, V.PLAIN);
}
function Po() {
  return {
    anchorStart: ie,
    anchorEnd: ie,
    tagStart: ie,
    tagEnd: ie
  };
}
function ii(t) {
  return {
    position: t.position,
    line: t.line,
    lineStart: t.lineStart,
    lineIndent: t.lineIndent,
    firstTabInLine: t.firstTabInLine,
    eventsLength: t.events.length
  };
}
function ni(t, e) {
  t.position = e.position, t.line = e.line, t.lineStart = e.lineStart, t.lineIndent = e.lineIndent, t.firstTabInLine = e.firstTabInLine, t.events.length = e.eventsLength;
}
function F(t, e) {
  Bt.throwAt(t.input.slice(0, t.length), t.position, e, t.filename);
}
function Ee(t) {
  return t === 10 || t === 13;
}
function li(t) {
  return t === 9 || t === 32;
}
function rt(t) {
  return li(t) || Ee(t);
}
function ut(t) {
  return t === 0 || rt(t);
}
function jt(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function ol(t) {
  return t >= 48 && t <= 57 ? t - 48 : -1;
}
function sl(t) {
  if (t >= 48 && t <= 57) return t - 48;
  const e = t | 32;
  return e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
function al(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function ll(t) {
  return t === 48 || t === 97 || t === 98 || t === 116 || t === 9 || t === 110 || t === 118 || t === 102 || t === 114 || t === 101 || t === 32 || t === 34 || t === 47 || t === 92 || t === 78 || t === 95 || t === 76 || t === 80;
}
function Li(t) {
  t.input.charCodeAt(t.position) === 10 ? t.position++ : (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++), t.line++, t.lineStart = t.position, t.lineIndent = 0, t.firstTabInLine = -1;
}
function Ae(t, e) {
  let i = 0, n = t.input.charCodeAt(t.position), r = t.position === t.lineStart || rt(t.input.charCodeAt(t.position - 1));
  for (; n !== 0; ) {
    for (; li(n); )
      r = !0, n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && r && n === 35) do
      n = t.input.charCodeAt(++t.position);
    while (!Ee(n) && n !== 0);
    if (!Ee(n)) break;
    for (Li(t), i++, r = !0, n = t.input.charCodeAt(t.position); n === 32; )
      t.lineIndent++, n = t.input.charCodeAt(++t.position);
  }
  return i;
}
function oi(t, e = t.position) {
  const i = t.input.charCodeAt(e);
  if ((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2)) {
    const n = t.input.charCodeAt(e + 3);
    return n === 0 || rt(n);
  }
  return !1;
}
function as(t) {
  t.position === t.lineStart && t.input.charCodeAt(t.position) === 65279 && (t.position++, t.lineStart = t.position);
}
function pn(t) {
  if (t.position !== t.lineStart) return !1;
  if (oi(t)) return !0;
  if (t.input.charCodeAt(t.position) !== 65279) return !1;
  const e = ii(t);
  as(t), Ae(t, !0);
  const i = t.input.charCodeAt(t.position), n = t.position === t.lineStart && (i === 37 || i === 45 && oi(t));
  return ni(t, e), n;
}
function Mo(t) {
  let e = t.input.charCodeAt(t.position);
  for (; e !== 0 && !Ee(e); ) e = t.input.charCodeAt(++t.position);
}
function ls(t, e, i) {
  const n = Xa.exec(t.input.slice(e, i));
  n !== null && (t.position = e + n.index + n[0].length - 1, F(t, "the stream contains non-printable characters"));
}
function dl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 33) return !1;
  e.tagStart !== ie && F(t, "duplication of a tag property");
  const n = t.position;
  let r = !1, o = !1, s = "!", a = t.input.charCodeAt(++t.position);
  a === 60 ? (r = !0, a = t.input.charCodeAt(++t.position)) : a === 33 && (o = !0, s = "!!", a = t.input.charCodeAt(++t.position));
  let l = t.position, c;
  if (r) {
    for (; a !== 0 && a !== 62; ) a = t.input.charCodeAt(++t.position);
    a !== 62 && F(t, "unexpected end of the stream within a verbatim tag"), c = t.input.slice(l, t.position), t.position++;
  } else {
    for (; a !== 0 && !rt(a) && !(i && jt(a)); )
      a === 33 && (o ? F(t, "tag suffix cannot contain exclamation marks") : (s = t.input.slice(l - 1, t.position + 1), ns.test(s) || F(t, "named tag handle cannot contain such characters"), o = !0, l = t.position + 1)), a = t.input.charCodeAt(++t.position);
    c = t.input.slice(l, t.position), Za.test(c) && F(t, "tag suffix cannot contain flow indicator characters");
  }
  return c && !(r ? el.test(c) : tl.test(c)) && F(t, `tag name cannot contain such characters: ${c}`), !r && s !== "!" && s !== "!!" && !es.call(t.tagHandlers, s) && F(t, `undeclared tag handle "${s}"`), e.tagStart = n, e.tagEnd = t.position, !0;
}
function cl(t, e) {
  if (t.input.charCodeAt(t.position) !== 38) return !1;
  e.anchorStart !== ie && F(t, "duplication of an anchor property"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)) && !jt(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && F(t, "name of an anchor node must contain at least one character"), e.anchorStart = i, e.anchorEnd = t.position, !0;
}
function pl(t, e) {
  if (t.input.charCodeAt(t.position) !== 42) return !1;
  (e.anchorStart !== ie || e.tagStart !== ie) && F(t, "alias node should not have any properties"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)) && !jt(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && F(t, "name of an alias node must contain at least one character"), rl(t, i, t.position), !0;
}
function Zi(t, e) {
  Ae(t, !1), t.lineIndent < e && F(t, "deficient indentation");
}
function fl(t, e, i) {
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
      const s = t.position;
      return t.position++, ai(t, n, s, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, V.SINGLE_QUOTED, at.CLIP, -1, r), !0;
    }
    Ee(o) ? (r = !1, Zi(t, e)) : t.position === t.lineStart && oi(t) ? F(t, "unexpected end of the document within a single quoted scalar") : o !== 9 && o < 32 ? F(t, "expected valid JSON character") : t.position++;
  }
  F(t, "unexpected end of the stream within a single quoted scalar");
}
function gl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 34) return !1;
  t.position++;
  const n = t.position;
  let r = !0;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const o = t.input.charCodeAt(t.position);
    if (o === 34) {
      const s = t.position;
      return t.position++, ai(t, n, s, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, V.DOUBLE_QUOTED, at.CLIP, -1, r), !0;
    }
    if (o === 92) {
      r = !1;
      const s = t.input.charCodeAt(++t.position);
      if (Ee(s)) Zi(t, e);
      else if (ll(s)) t.position++;
      else {
        let a = al(s);
        for (a === 0 && F(t, "unknown escape sequence"); a-- > 0; )
          t.position++, sl(t.input.charCodeAt(t.position)) < 0 && F(t, "expected hexadecimal character");
        t.position++;
      }
    } else Ee(o) ? (r = !1, Zi(t, e)) : t.position === t.lineStart && oi(t) ? F(t, "unexpected end of the document within a double quoted scalar") : o !== 9 && o < 32 ? F(t, "expected valid JSON character") : t.position++;
  }
  F(t, "unexpected end of the stream within a double quoted scalar");
}
function hl(t, e, i) {
  const n = t.input.charCodeAt(t.position);
  let r = at.CLIP, o = -1, s = !1;
  if (n !== 124 && n !== 62) return !1;
  const a = n === 124 ? V.LITERAL_BLOCK : V.FOLDED_BLOCK;
  for (t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    const w = t.input.charCodeAt(t.position), u = ol(w);
    if (w === 43 || w === 45)
      r !== at.CLIP && F(t, "repeat of a chomping mode identifier"), r = w === 43 ? at.KEEP : at.STRIP, t.position++;
    else if (u >= 0)
      u === 0 && F(t, "bad explicit indentation width of a block scalar; it cannot be less than one"), s && F(t, "repeat of an indentation width identifier"), o = e + u - 1, s = !0, t.position++;
    else break;
  }
  let l = !1;
  for (; li(t.input.charCodeAt(t.position)); )
    l = !0, t.position++;
  l && t.input.charCodeAt(t.position) === 35 && Mo(t), Ee(t.input.charCodeAt(t.position)) ? Li(t) : t.input.charCodeAt(t.position) !== 0 && F(t, "a line break is expected");
  let c = s ? o : -1, d = 0;
  const y = t.position;
  let h = t.position;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const w = t.position;
    let u = 0;
    for (; t.input.charCodeAt(w + u) === 32; ) u++;
    const b = t.input.charCodeAt(w + u);
    if (b === 0) {
      c >= 0 ? u > c && (h = w + u) : u > 0 && (h = w + u);
      break;
    }
    if (pn(t)) break;
    if (!s && c === -1 && Ee(b) && (d = Math.max(d, u)), !s && c === -1 && !Ee(b) && (b === 9 && u < e && (t.position = w + u, F(t, "tab characters must not be used in indentation")), u >= e && u < d && (t.position = w + u, F(t, "bad indentation of a mapping entry"))), c === -1 && b !== 0 && !Ee(b) && u < e) {
      t.lineIndent = u, t.position = w + u;
      break;
    }
    !s && b !== 0 && !Ee(b) && c === -1 && (c = u);
    const _ = c === -1 ? e + 1 : c;
    if (b !== 0 && !Ee(b) && u < _) {
      t.lineIndent = u, t.position = w + u;
      break;
    }
    Mo(t), h = t.position, Ee(t.input.charCodeAt(t.position)) && (Li(t), h = t.position);
  }
  return ls(t, y, h), ai(t, y, h, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, a, r, c), !0;
}
function ul(t, e) {
  const i = t.input.charCodeAt(t.position), n = e === ri;
  if (i === 0 || rt(i) || i === 35 || i === 38 || i === 42 || i === 33 || i === 124 || i === 62 || i === 39 || i === 34 || i === 37 || i === 64 || i === 96 || jt(i)) return !1;
  if (i === 63 || i === 45) {
    const r = t.input.charCodeAt(t.position + 1);
    if (ut(r) || n && jt(r)) return !1;
  }
  return !0;
}
function bl(t, e, i, n) {
  if (!ul(t, i)) return !1;
  const r = t.position;
  let o = t.position, s = t.input.charCodeAt(t.position);
  const a = i === ri;
  let l = !1;
  for (; s !== 0 && !pn(t); ) {
    if (s === 58) {
      const c = t.input.charCodeAt(t.position + 1);
      if (ut(c) || a && jt(c)) break;
    } else if (s === 35) {
      if (rt(t.input.charCodeAt(t.position - 1))) break;
    } else {
      if (a && jt(s)) break;
      if (Ee(s)) {
        const c = t.position, d = t.line, y = t.lineStart, h = t.lineIndent;
        if (Ae(t, !1), t.lineIndent >= e) {
          l = !0, s = t.input.charCodeAt(t.position);
          continue;
        }
        t.position = c, t.line = d, t.lineStart = y, t.lineIndent = h;
        break;
      }
    }
    li(s) || (o = t.position + 1), s = t.input.charCodeAt(++t.position);
  }
  return o === r ? !1 : (ls(t, r, o), ai(t, r, o, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, V.PLAIN, at.CLIP, -1, !l), !0);
}
function ui(t, e) {
  const i = t.line;
  Ae(t, !0), (t.line > i && t.lineIndent < e || t.firstTabInLine !== -1 && t.lineIndent < e) && F(t, "deficient indentation");
}
function yl(t, e, i) {
  const n = t.input.charCodeAt(t.position), r = n === 123, o = t.position;
  let s = !0;
  if (n !== 91 && n !== 123) return !1;
  const a = r ? 125 : 93;
  for (r ? ss(t, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ye.FLOW) : os(t, o, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ye.FLOW), t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    ui(t, e);
    let l = t.input.charCodeAt(t.position);
    if (l === a)
      return t.position++, ti(t), !0;
    s ? l === 44 && F(t, "expected the node content, but found ','") : F(t, "missed comma between flow collection entries");
    let c = !1, d = !1;
    l === 63 && rt(t.input.charCodeAt(t.position + 1)) && (c = d = !0, t.position += 1, ui(t, e));
    const y = t.line, h = ii(t), w = si(t, e, ri, !1, !0);
    ui(t, e), l = t.input.charCodeAt(t.position), (r || d || t.line === y) && l === 58 ? (c = !0, t.position++, ui(t, e), r || Ro(t, h), w || Ve(t), si(t, e, ri, !1, !0) || Ve(t), ui(t, e), r || ti(t)) : r && c ? (w || Ve(t), Ve(t)) : r ? Ve(t) : c && (Ro(t, h), w || Ve(t), Ve(t), ti(t)), l = t.input.charCodeAt(t.position), l === 44 ? (s = !0, t.position++) : s = !1;
  }
  F(t, "unexpected end of the stream within a flow collection");
}
function Fo(t, e, i) {
  if (t.firstTabInLine !== -1 || t.input.charCodeAt(t.position) !== 45 || !ut(t.input.charCodeAt(t.position + 1))) return !1;
  for (os(t, t.position, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, Ye.BLOCK); t.input.charCodeAt(t.position) === 45 && ut(t.input.charCodeAt(t.position + 1)); ) {
    t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation"));
    const n = t.line;
    t.position++;
    const r = Ae(t, !0) > 0;
    if (t.firstTabInLine !== -1 && t.input.charCodeAt(t.position) === 45 && ut(t.input.charCodeAt(t.position + 1)) && F(t, "bad indentation of a sequence entry"), r && t.lineIndent <= e ? Ve(t) : si(t, e, is, !1, !0), Ae(t, !0), t.lineIndent < e || t.position >= t.length) break;
    t.lineIndent > e && F(t, "bad indentation of a sequence entry"), t.line === n && t.input.charCodeAt(t.position) === 45 && ut(t.input.charCodeAt(t.position + 1)) && F(t, "bad indentation of a sequence entry");
  }
  return ti(t), !0;
}
function Ui(t, e, i, n) {
  let r = !1, o = !1, s = !1, a = !1;
  if (t.firstTabInLine !== -1) return !1;
  let l = t.input.charCodeAt(t.position);
  for (; l !== 0; ) {
    !r && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, F(t, "tab characters must not be used in indentation"));
    const c = t.input.charCodeAt(t.position + 1), d = t.line;
    if ((l === 63 || l === 58) && ut(c))
      s || (ss(t, t.position, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, Ye.BLOCK), s = !0), l === 63 ? (r && Ve(t), o = !0, r = !0) : (r || (Ve(t), o = !0), r = !1), t.position += 1, a = !0;
    else {
      r && (Ve(t), r = !1);
      const y = ii(t);
      if (!si(t, i, ts, !1, !0)) break;
      if (t.line === d) {
        for (l = t.input.charCodeAt(t.position); li(l); ) l = t.input.charCodeAt(++t.position);
        if (l === 58)
          l = t.input.charCodeAt(++t.position), ut(l) || F(t, "a whitespace character is expected after the key-value separator within a block mapping"), s || (t.events.splice(y.eventsLength, 0, {
            type: Ce.MAPPING,
            start: y.position,
            anchorStart: n.anchorStart,
            anchorEnd: n.anchorEnd,
            tagStart: n.tagStart,
            tagEnd: n.tagEnd,
            style: Ye.BLOCK
          }), s = !0), o = !0, r = !1, a = !1;
        else if (o) F(t, "expected ':' after a mapping key");
        else
          return n.anchorStart !== ie || n.tagStart !== ie ? (ni(t, y), !1) : !0;
      } else if (o) F(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return n.anchorStart !== ie || n.tagStart !== ie ? (ni(t, y), !1) : !0;
    }
    if (si(t, e, Ai, !0, a) && (a = !1), r || a && (Ve(t), a = !1), Ae(t, !0), l = t.input.charCodeAt(t.position), (t.line === d || t.lineIndent > e) && l !== 0) F(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e) break;
  }
  return o ? (r && Ve(t), s && ti(t), !0) : !1;
}
function si(t, e, i, n, r, o = !0) {
  var u, b;
  t.depth >= t.maxDepth && F(t, `nesting exceeded maxDepth (${t.maxDepth})`), t.depth++;
  let s = 1, a = !1, l = !1, c = null;
  const d = Po();
  let y = i === Ai || i === is, h = y;
  const w = y;
  if (n && Ae(t, !0) && (a = !0, t.lineIndent > e ? s = 1 : t.lineIndent === e ? s = 0 : s = -1), s === 1) for (; ; ) {
    const _ = t.input.charCodeAt(t.position), k = ii(t);
    if (a && s !== 1 && (_ === 33 || _ === 38)) break;
    if (a && w && (d.tagStart !== ie || d.anchorStart !== ie) && (_ === 33 || _ === 38)) {
      const g = ii(t), p = e + 1;
      if (Ui(t, t.position - t.lineStart, p, d) && ((u = t.events[g.eventsLength]) == null ? void 0 : u.type) === Ce.MAPPING)
        return t.depth--, !0;
      ni(t, g);
    }
    if (a && (_ === 33 && d.tagStart !== ie || _ === 38 && d.anchorStart !== ie) || !dl(t, d, i === ri) && !cl(t, d)) break;
    c === null && (c = k), Ae(t, !0) ? (a = !0, h = w, t.lineIndent > e ? s = 1 : t.lineIndent === e ? s = 0 : s = -1) : h = !1;
  }
  if (h && (h = a || r), s === 1 || i === Ai) {
    const _ = i === ri || i === ts ? e : e + 1, k = t.position - t.lineStart;
    if (s === 1)
      if (h && (Fo(t, k, d) || Ui(t, k, _, d)) || yl(t, _, d)) l = !0;
      else {
        const g = t.input.charCodeAt(t.position);
        if (c !== null && o && w && !h && g !== 124 && g !== 62) {
          const p = ii(t), f = c.position - c.lineStart;
          ni(t, c), Ui(t, f, _, Po()) && ((b = t.events[p.eventsLength]) == null ? void 0 : b.type) === Ce.MAPPING ? l = !0 : ni(t, p);
        }
        !l && (y && hl(t, _, d) || fl(t, _, d) || gl(t, _, d) || pl(t, d) || bl(t, _, i, d)) && (l = !0);
      }
    else s === 0 && (l = h && Fo(t, k, d));
  }
  return y = y && !l, !l && (d.anchorStart !== ie || d.tagStart !== ie || y) && (ai(t, ie, ie, d.anchorStart, d.anchorEnd, d.tagStart, d.tagEnd, V.PLAIN), l = !0), t.depth--, l || d.anchorStart !== ie || d.tagStart !== ie;
}
function _l(t) {
  if (t.lineIndent > 0 || t.input.charCodeAt(t.position) !== 37) return !1;
  t.position++;
  const e = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)); ) t.position++;
  const i = t.input.slice(e, t.position), n = [];
  for (i.length === 0 && F(t, "directive name must not be less than one character in length"); t.input.charCodeAt(t.position) !== 0 && !Ee(t.input.charCodeAt(t.position)); ) {
    for (; li(t.input.charCodeAt(t.position)); ) t.position++;
    if (t.input.charCodeAt(t.position) === 35 || Ee(t.input.charCodeAt(t.position)) || t.input.charCodeAt(t.position) === 0) break;
    const r = t.position;
    for (; t.input.charCodeAt(t.position) !== 0 && !rt(t.input.charCodeAt(t.position)); ) t.position++;
    n.push(t.input.slice(r, t.position));
  }
  if (Ee(t.input.charCodeAt(t.position)) && Li(t), i === "YAML") {
    t.directives.some((o) => o.kind === "yaml") && F(t, "duplication of %YAML directive"), n.length !== 1 && F(t, "YAML directive accepts exactly one argument");
    const r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
    r === null && F(t, "ill-formed argument of the YAML directive"), parseInt(r[1], 10) !== 1 && F(t, "unacceptable YAML version of the document"), t.directives.push({
      kind: "yaml",
      version: n[0]
    });
  } else if (i === "TAG") {
    n.length !== 2 && F(t, "TAG directive accepts exactly two arguments");
    const [r, o] = n;
    ns.test(r) || F(t, "ill-formed tag handle (first argument) of the TAG directive"), es.call(t.tagHandlers, r) && F(t, `there is a previously declared suffix for "${r}" tag handle`), il.test(o) || F(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagHandlers[r] = o, t.directives.push({
      kind: "tag",
      handle: r,
      prefix: o
    });
  }
  return !0;
}
function ml(t) {
  t.directives = [], t.tagHandlers = /* @__PURE__ */ Object.create(null);
  let e = !1;
  for (Ae(t, !0); _l(t); )
    e = !0, Ae(t, !0);
  let i = !1, n = !1, r = !0;
  if (t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 && ut(t.input.charCodeAt(t.position + 3))) {
    i = !0;
    const a = t.line;
    t.position += 3, Ae(t, !0), r = t.line > a;
  } else e && F(t, "directives end mark is expected");
  const o = t.events.length;
  if (!i && t.position === t.lineStart && t.input.charCodeAt(t.position) === 46 && oi(t)) {
    t.position += 3, Ae(t, !0);
    return;
  }
  if (nl(t, i, !1), si(t, t.lineIndent - 1, Ai, !1, r, r) || Ve(t), Ae(t, !0), t.position === t.lineStart && oi(t) && (n = t.input.charCodeAt(t.position) === 46, n)) {
    const a = t.line;
    t.position += 3, Ae(t, !0), t.line === a && t.position < t.length && F(t, "end of the stream or a document separator is expected");
  }
  const s = t.events[o];
  (s == null ? void 0 : s.type) === Ce.DOCUMENT && (s.explicitEnd = n), ti(t), !n && t.position < t.length && !pn(t) && F(t, "end of the stream or a document separator is expected");
}
function xl(t, e) {
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
  for (r !== -1 && Bt.throwAt(t, r, "null byte is not allowed in input", n.filename); n.position < n.length && (as(n), Ae(n, !0), !(n.position >= n.length)); ) {
    const o = n.position;
    ml(n), n.position === o && F(n, "can not read a document");
  }
  return n.events;
}
var vl = {
  ...cn,
  ...dn
};
function wl(t, e = {}) {
  const i = {
    ...vl,
    ...e
  }, n = String(t), r = Object.keys(cn), o = Object.keys(dn);
  return Qa(xl(n, Qi(i, r)), {
    ...Qi(i, o),
    source: n
  });
}
function kl(t, e) {
  const i = wl(t, e);
  if (i.length === 0) throw new Bt("expected a document, but the input is empty");
  if (i.length === 1) return i[0];
  throw new Bt("expected a single document in the stream, but found more");
}
var qt = Symbol("INVALID");
function El(t) {
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
function Sl(t, e) {
  for (let i = 0, n = t.representTypes.length; i < n; i += 1) {
    const { tag: r, implicitTag: o } = t.representTypes[i];
    if (r.identify(e)) {
      let s;
      return r.matchByTagPrefix ? s = r.representTagName(e) : s = r.tagName, {
        tag: r,
        tagName: s,
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
  const i = Sl(t, e);
  if (!i) {
    if (e === void 0 || t.skipInvalid) return qt;
    throw new Bt(`unacceptable kind of an object to dump ${Object.prototype.toString.call(e)}`);
  }
  const { tag: n, tagName: r, implicitTag: o } = i, s = o ? r : Qo(r);
  if (n.nodeKind === "scalar") return {
    kind: "scalar",
    tag: s,
    tagged: !o,
    style: V.PLAIN,
    value: n.represent(e)
  };
  if (n.nodeKind === "sequence") {
    const c = n.represent(e), d = {
      kind: "sequence",
      tag: s,
      tagged: !o,
      style: Ye.BLOCK,
      items: []
    };
    t.noRefs || t.refs.set(e, d);
    for (let y = 0, h = c.length; y < h; y += 1) {
      let w = yi(t, c[y]);
      w === qt && c[y] === void 0 && (w = yi(t, null)), w !== qt && d.items.push(w);
    }
    return d;
  }
  const a = n.represent(e), l = {
    kind: "mapping",
    tag: s,
    tagged: !o,
    style: Ye.BLOCK,
    items: []
  };
  t.noRefs || t.refs.set(e, l);
  for (const [c, d] of a) {
    const y = yi(t, c);
    if (y === qt) continue;
    const h = yi(t, d);
    h !== qt && l.items.push({
      key: y,
      value: h
    });
  }
  return l;
}
function Cl(t, e, i = {}) {
  const n = yi({
    representTypes: El(e),
    noRefs: i.noRefs ?? !1,
    skipInvalid: i.skipInvalid ?? !1,
    refs: /* @__PURE__ */ new Map(),
    refCounter: 0
  }, t);
  return [{
    contents: n === qt ? null : n,
    directives: []
  }];
}
var $l = Symbol("visit:break"), ds = Symbol("visit:skip");
function Ii(t, e, i) {
  const n = e(t, i);
  if (n === $l) return !0;
  if (n === ds) return !1;
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
      for (const { key: o, value: s } of t.items)
        if (Ii(o, e, {
          depth: r,
          parent: t,
          isKey: !0
        }) || Ii(s, e, {
          depth: r,
          parent: t,
          isKey: !1
        })) return !0;
  }
  return !1;
}
function Oo(t, e) {
  for (const i of t) if (i.contents && Ii(i.contents, e, {
    depth: 0,
    parent: null,
    isKey: !1
  })) return;
}
function Oi(t, e) {
  return (t & 1 << e) !== 0;
}
var Do = {
  applyQuoteFlowKeysOption: Tl,
  doubleQuoteForInvisibles: Bl,
  doubleQuoteWhitespaceOnly: Il,
  applyForceQuotesOption: Nl,
  tryLongOrMultilineAsBlock: Al,
  quoteInvalidPlain: Ll,
  fallbackToDoubleQuoted: Rl
};
function cs(t) {
  return t.presenterOptions.quoteStyle === "single" && Oi(t.allowedStylesMask, V.SINGLE_QUOTED) ? V.SINGLE_QUOTED : V.DOUBLE_QUOTED;
}
function Tl(t) {
  t.presenterOptions.quoteFlowKeys && (!t.isKey || !t.flowOnly || t.style !== V.PLAIN || (t.style = V.DOUBLE_QUOTED));
}
function Bl(t) {
  t.style === V.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(t.node.value) && (t.style = V.DOUBLE_QUOTED);
}
function Il(t) {
  t.style === V.PLAIN && /^\s+$/.test(t.node.value) && (t.style = V.DOUBLE_QUOTED);
}
function Nl(t) {
  t.presenterOptions.forceQuotes && (t.isKey || t.style !== V.PLAIN || t.node.tag === t.presenterOptions.schema.defaultScalarTag.tagName && (t.style = t.node.value.includes(`
`) ? V.DOUBLE_QUOTED : cs(t)));
}
function Al(t) {
  if (t.style !== V.PLAIN || t.isKey) return;
  const e = t.node.value, i = e.indexOf(`
`) !== -1;
  if (!Oi(t.allowedStylesMask, V.LITERAL_BLOCK)) {
    i && (t.style = V.DOUBLE_QUOTED);
    return;
  }
  const n = t.presenterOptions.lineWidth;
  if (n === -1) {
    i && (t.style = V.LITERAL_BLOCK);
    return;
  }
  const r = Math.max(Math.min(n, 40), n - t.shiftOfContent);
  let o = 0, s = !1;
  for (; o <= e.length; ) {
    let a = e.length;
    const l = e.indexOf(`
`, o);
    l !== -1 && (a = l);
    const c = e.slice(o, a);
    if (c.length > r && c[0] !== " " && / [^ \t]/.test(c) && (s = !0), l === -1) break;
    o = l + 1;
  }
  s ? t.style = V.FOLDED_BLOCK : i && (t.style = V.LITERAL_BLOCK);
}
function Ll(t) {
  t.style === V.PLAIN && !Oi(t.allowedStylesMask, V.PLAIN) && (t.style = cs(t));
}
function Rl(t) {
  Oi(t.allowedStylesMask, t.style) || (t.style = V.DOUBLE_QUOTED);
}
function bi(t, e) {
  return t | 1 << e;
}
var Pl = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]", Ml = "[\\n\\r]", Fl = "\\uFEFF", fn = "[ \\t]", ps = `(?:(?!(?:${Ml}|${Fl}))${Pl})`, Di = `(?:(?!${fn})${ps})`, fs = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]", gs = "[-?:,\\[\\]{}#&*!|>'\"%@`]", Ol = "[,\\[\\]{}]", en = Di, tn = `(?:(?!${Ol})${Di})`, Dl = `(?:(?:(?!${gs})${Di})|[?:-](?=${en}))`, Vl = `(?:(?:(?!${gs})${Di})|[?:-](?=${tn}))`, hs = `(?:(?:(?![:#])${en})|:(?=${en}))#*`, us = `(?:(?:(?![:#])${tn})|:(?=${tn}))#*`, bs = `(?:${fn}*${hs})*`, ys = `(?:${fn}*${us})*`, _s = `${Dl}#*${bs}`, ms = `${Vl}#*${ys}`, zl = _s, Gl = ms, Wl = `\\n+${hs}${bs}`, Kl = `\\n+${us}${ys}`, ql = `${_s}(?:${Wl})*`, jl = `${ms}(?:${Kl})*`, Hl = new RegExp(`^(?:${ql})$`, "u"), Ul = new RegExp(`^(?:${jl})$`, "u"), Yl = new RegExp(`^(?:${zl})$`, "u"), Jl = new RegExp(`^(?:${Gl})$`, "u"), Ql = new RegExp(`^(?:${fs})*$`, "u"), Xl = new RegExp(`^(?:${fs}|\\n)*$`, "u"), Zl = new RegExp(`^(?:${ps}|\\n)*$`, "u"), ed = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/, gn = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;
function td(t) {
  const e = t.node.value;
  if (e !== "") {
    if (!(t.isKey ? t.flowOnly ? Jl : Yl : t.flowOnly ? Ul : Hl).test(e) || t.shiftOfFirstLine === 0 && ed.test(e)) return !1;
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
function id(t) {
  const e = t.node.value;
  if (!(t.isKey ? Ql : Xl).test(e) || /[ \t]\n|\n[ \t]/.test(e)) return !1;
  if (!t.isKey && t.shiftOfContent === 0) {
    const i = e.indexOf(`
`);
    if (i !== -1 && gn.test(e.slice(i + 1))) return !1;
  }
  return !0;
}
function nd(t) {
  if (t.flowOnly || !Zl.test(t.node.value)) return !1;
  const e = t.shiftOfContent - t.shiftOfParent;
  return !(e < 1 || e > 9 && /^\n* /.test(t.node.value) || t.shiftOfContent === 0 && gn.test(t.node.value));
}
function rd(t) {
  let e = bi(0, V.DOUBLE_QUOTED);
  td(t) && (e = bi(e, V.PLAIN)), id(t) && (e = bi(e, V.SINGLE_QUOTED)), nd(t) && (e = bi(bi(e, V.LITERAL_BLOCK), V.FOLDED_BLOCK)), t.allowedStylesMask = e;
}
function od(t) {
  switch (t.style) {
    case V.PLAIN:
      return sd(t);
    case V.SINGLE_QUOTED:
      return ad(t);
    case V.LITERAL_BLOCK:
      return ld(t);
    case V.FOLDED_BLOCK:
      return dd(t);
    case V.DOUBLE_QUOTED:
      return cd(t);
  }
}
function sd(t) {
  return xs(t.node.value, t.shiftOfContent);
}
function ad(t) {
  return `'${xs(t.node.value, t.shiftOfContent).replace(/'/g, "''")}'`;
}
function ld(t) {
  const e = t.node.value;
  return "|" + ws(e, t.shiftOfParent, t.shiftOfContent) + ks(vs(e, t.shiftOfContent));
}
function dd(t) {
  const e = t.node.value, i = t.presenterOptions.lineWidth;
  let n = 1 / 0;
  return i !== -1 && (n = Math.max(Math.min(i, 40), i - t.shiftOfContent)), ">" + ws(e, t.shiftOfParent, t.shiftOfContent) + ks(vs(fd(e, n), t.shiftOfContent));
}
function cd(t) {
  return `"${ud(t.node.value)}"`;
}
function xs(t, e) {
  let i = t.indexOf(`
`);
  if (i === -1) return t;
  const n = " ".repeat(e);
  let r = t.slice(0, i);
  const o = /(\n+)([^\n]*)/g;
  o.lastIndex = i;
  let s;
  for (; s = o.exec(t); ) {
    const a = s[1].length, l = s[2];
    r += `
`.repeat(a + 1) + n + l;
  }
  return r;
}
function vs(t, e) {
  const i = " ".repeat(e);
  let n = 0, r = "";
  const o = t.length;
  for (; n < o; ) {
    let s;
    const a = t.indexOf(`
`, n);
    a === -1 ? (s = t.slice(n), n = o) : (s = t.slice(n, a + 1), n = a + 1), s.length && s !== `
` && (r += i), r += s;
  }
  return r;
}
function pd(t) {
  return /^\n* /.test(t);
}
function ws(t, e, i) {
  const n = pd(t) ? String(i - e) : "", r = t[t.length - 1] === `
`;
  return `${n}${r && (t[t.length - 2] === `
` || t === `
`) ? "+" : r ? "" : "-"}
`;
}
function ks(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function nn(t) {
  return t === " " || t === "	";
}
function Vo(t, e) {
  if (t === "" || nn(t[0])) return t;
  const i = / [^ \t]/g;
  let n, r = 0, o, s = 0, a = 0, l = "";
  for (; n = i.exec(t); )
    a = n.index, a - r > e && (o = s > r ? s : a, l += `
${t.slice(r, o)}`, r = o + 1), s = a;
  return l += `
`, t.length - r > e && s > r ? l += `${t.slice(r, s)}
${t.slice(s + 1)}` : l += t.slice(r), l.slice(1);
}
function fd(t, e) {
  const i = /(\n+)([^\n]*)/g;
  let n = t.indexOf(`
`);
  n === -1 && (n = t.length), i.lastIndex = n;
  let r = Vo(t.slice(0, n), e), o = t[0] === `
` || nn(t[0]), s, a;
  for (; a = i.exec(t); ) {
    const l = a[1], c = a[2];
    s = c !== "" && nn(c[0]), r += l + (!o && !s && c !== "" ? `
` : "") + Vo(c, e), o = s;
  }
  return r;
}
var gd = /["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;
function hd(t) {
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
function ud(t) {
  return t.replace(gd, hd);
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
  scalarStyleRules: Object.keys(Do).map((t) => Reflect.get(Do, t)),
  tagBeforeAnchor: !1
};
function bd(t) {
  return t.tagged ? t.tag : Qo(t.tag);
}
function yd(t) {
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
function _d(t, e, i, n, r, o) {
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
function md(t, e, i) {
  let n = "";
  for (let o = 0, s = i.items.length; o < s; o += 1) {
    const a = bt(t, e, i.items[o], i, {}).text;
    o > 0 && (n += `,${t.flowSkipCommaSpace ? "" : " "}`), n += a;
  }
  const r = t.flowBracketPadding && i.items.length > 0 ? " " : "";
  return `[${r}${n}${r}]`;
}
function zo(t, e, i, n) {
  let r = "";
  for (let o = 0, s = i.items.length; o < s; o += 1) {
    const a = bt(t, e + 1, i.items[o], i, {
      block: !0,
      compact: t.seqInlineFirst,
      isblockseq: !0
    }).text;
    (!n || r !== "") && (r += rn(t, e)), a === "" || Ri === a.charCodeAt(0) ? r += "-" : r += "- ", r += a;
  }
  return r;
}
function xd(t, e, i) {
  let n = "";
  for (const { key: o, value: s } of i.items) {
    let a = "";
    n !== "" && (a += `,${t.flowSkipCommaSpace ? "" : " "}`);
    const l = bt(t, e, o, i, { iskey: !0 }), c = l.text, d = bt(t, e, s, i, {}).text, y = t.flowSkipColonSpace || d === "" ? "" : " ", h = o.kind === "scalar" && l.noBody && (o.tagged || o.anchor !== void 0), w = o.kind === "alias" || h ? " " : "";
    a += `${c}${w}:${y}${d}`, n += a;
  }
  const r = t.flowBracketPadding && n !== "" ? " " : "";
  return `{${r}${n}${r}}`;
}
function vd(t, e, i, n) {
  let r = "";
  for (let o = 0, s = i.items.length; o < s; o += 1) {
    let a = "";
    (!n || r !== "") && (a += rn(t, e));
    const { key: l, value: c } = i.items[o], d = (l.kind === "mapping" || l.kind === "sequence") && l.style === Ye.BLOCK && l.items.length !== 0 || l.kind === "scalar" && (l.style === V.LITERAL_BLOCK || l.style === V.FOLDED_BLOCK), y = d ? bt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      isblockseq: !on(t, l, e + 1)
    }) : bt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      iskey: !0
    }), h = y.text, w = l.kind === "scalar" && l.value.indexOf(`
`) !== -1, u = h.length > 1024 && /^[\s\S]{1025}/u.test(h), b = d || w || u;
    b && (h && Ri === h.charCodeAt(0) ? a += "?" : a += "? "), a += h, b && (a += rn(t, e));
    const _ = bt(t, e + 1, c, i, {
      block: !0,
      compact: b,
      isblockseq: b && !on(t, c, e + 1)
    }).text, k = l.kind === "scalar" && y.noBody && (l.tagged || l.anchor !== void 0), g = !b && (l.kind === "alias" || k) ? " " : "";
    _ === "" || Ri === _.charCodeAt(0) ? a += `${g}:` : a += `${g}: `, a += _, r += a;
  }
  return r;
}
function on(t, e, i) {
  return e.kind === "alias" ? !0 : e.tagged || e.anchor !== void 0 || t.indent < 2 && i > 0;
}
function bt(t, e, i, n, r) {
  if (i.kind === "alias")
    return t.openEnded = !1, {
      text: `*${i.anchor}`,
      noBody: !1
    };
  const { block: o = !1, iskey: s = !1, isblockseq: a = !1 } = r;
  let l = r.compact ?? !1;
  const c = i.anchor !== void 0;
  on(t, i, e) && (l = !1);
  let d, y = i.tagged;
  const h = o && (i.kind === "mapping" || i.kind === "sequence") && i.style === Ye.BLOCK && i.items.length !== 0;
  if (i.kind === "mapping")
    h ? d = vd(t, e, i, l) : d = xd(t, e, i);
  else if (i.kind === "sequence")
    h ? t.seqNoIndent && !a && e > 0 ? d = zo(t, e - 1, i, l) : d = zo(t, e, i, l) : d = md(t, e, i);
  else {
    const b = _d(t, i, n, e, s, !o);
    rd(b);
    for (const _ of t.scalarStyleRules) _(b);
    d = od(b), t.openEnded = (b.style === V.LITERAL_BLOCK || b.style === V.FOLDED_BLOCK) && (i.value === `
` || i.value.endsWith(`

`)), y = i.tagged || d === "" && b.flowOnly && (n == null ? void 0 : n.kind) === "sequence" && !c || b.style !== V.PLAIN && i.tag !== t.defaultScalarTagName;
  }
  (i.kind === "mapping" || i.kind === "sequence") && !h && (t.openEnded = !1), h && l && e > 0 && t.indent > 2 && (d = `${" ".repeat(t.indent - 2)}${d}`);
  const w = d === "";
  let u = d;
  if (y || c) {
    const b = [], _ = y ? bd(i) : null, k = c ? `&${i.anchor}` : null;
    t.tagBeforeAnchor ? (_ !== null && b.push(_), k !== null && b.push(k)) : (k !== null && b.push(k), _ !== null && b.push(_));
    const g = d === "" || d.charCodeAt(0) === Ri ? "" : " ";
    u = `${b.join(" ")}${g}${d}`;
  }
  return {
    text: u,
    noBody: w
  };
}
function wd(t) {
  return (t.kind === "sequence" || t.kind === "mapping") && t.style === Ye.BLOCK && t.items.length !== 0 && !t.tagged && t.anchor === void 0;
}
function kd(t) {
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
function Ed(t, e) {
  const i = yd(e);
  let n = "", r = !1;
  for (let o = 0; o < t.length; o += 1) {
    const s = t[o];
    i.openEnded = !1;
    const a = kd(s), l = a !== "", c = s.explicitStart || l || o > 0 && !r;
    if (n += a, s.contents === null)
      c && (n += `---
`);
    else if (c) {
      const d = bt(i, 0, s.contents, null, {
        block: !0,
        compact: !0
      }).text, y = d === "" ? "" : l || wd(s.contents) ? `
` : " ";
      n += `---${y}${d}
`;
    } else n += bt(i, 0, s.contents, null, {
      block: !0,
      compact: !0
    }).text + `
`;
    r = s.explicitEnd || i.openEnded, r && (n += `...
`);
  }
  return n;
}
var Sd = {
  ...hn,
  schema: La,
  skipInvalid: !1,
  noRefs: !1,
  flowLevel: -1,
  sortKeys: !1,
  transform: () => {
  }
};
function Cd(t, e) {
  const i = String(t), n = String(e);
  return i < n ? -1 : i > n ? 1 : 0;
}
function $d(t, e = {}) {
  const i = {
    ...Sd,
    ...e
  }, n = Cl(t, i.schema, {
    noRefs: i.noRefs,
    skipInvalid: i.skipInvalid
  });
  if (i.flowLevel >= 0 && Oo(n, (r, o) => {
    if (!(o.depth < i.flowLevel))
      return (r.kind === "sequence" || r.kind === "mapping") && (r.style = Ye.FLOW), ds;
  }), i.sortKeys) {
    const r = i.sortKeys === !0 ? Cd : i.sortKeys;
    Oo(n, (o) => {
      o.kind === "mapping" && o.items.sort((s, a) => r(s.key.kind === "scalar" ? s.key.value : "", a.key.kind === "scalar" ? a.key.value : ""));
    });
  }
  return i.transform(n), Ed(n, {
    ...Qi(i, Object.keys(hn)),
    schema: i.schema
  });
}
console.info(
  "%c⚡ Energy Station Panel v1.5.0 Loaded ⚡",
  "background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
class Es extends HTMLElement {
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
    this._config || (this._config = JSON.parse(JSON.stringify(ce))), this._config.appearance || (this._config.appearance = JSON.parse(JSON.stringify(ce.appearance || {
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
          const s = JSON.parse(o);
          if ((n = (i = (e = s.solar) == null ? void 0 : e.strings) == null ? void 0 : i[0]) != null && n.voltage_entity && ((r = s.inverter) != null && r.voltage_entity))
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
      const r = [], o = (s) => {
        for (const a of s || [])
          if (a.cards) {
            for (const l of a.cards)
              if (l.type && (l.type === "custom:energy-station-card" || l.type.includes("energy-station-card")) && r.push(l), l.cards && Array.isArray(l.cards))
                for (const c of l.cards)
                  c.type && (c.type === "custom:energy-station-card" || c.type.includes("energy-station-card")) && r.push(c);
          }
      };
      try {
        const s = await this._hass.callWS({ type: "lovelace/config" });
        o(s == null ? void 0 : s.views);
      } catch {
      }
      if (r.length === 0 && this._hass.panels) {
        const s = Object.values(this._hass.panels).filter((a) => a.component_name === "lovelace");
        for (const a of s)
          if (a.url_path && a.url_path !== "energy-station")
            try {
              const l = await this._hass.callWS({ type: "lovelace/config", url_path: a.url_path });
              if (o(l == null ? void 0 : l.views), r.length > 0) break;
            } catch {
            }
      }
      if (r.length > 0) {
        const s = r[0], a = JSON.parse(JSON.stringify(s));
        delete a.type, a.appearance = {
          ...ce.appearance,
          ...((i = this._config) == null ? void 0 : i.appearance) || {},
          ...a.appearance || {}
        }, this._config = a, this._saveConfig(), this._render(), this._bindEvents(), e && alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");
        return;
      }
      if (typeof window < "u" && ((n = window.parent) != null && n.document)) {
        const s = window.parent.document.querySelectorAll("energy-station-card");
        for (const a of s)
          if (a !== this._cardNode && a._config) {
            this._config = JSON.parse(JSON.stringify(a._config)), this._saveConfig(), this._render(), this._bindEvents(), e && alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");
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
              <span class="panel-brand-badge">PRO APP v1.5.0</span>
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
    var s, a, l, c, d, y, h, w, u, b, _, k, g, p, f, S;
    const e = this.shadowRoot;
    (s = e.getElementById("btnOpenDrawer")) == null || s.addEventListener("click", () => this._openDrawer()), (a = e.getElementById("btnCloseDrawer")) == null || a.addEventListener("click", () => this._closeDrawer()), (l = e.getElementById("btnCancelDrawer")) == null || l.addEventListener("click", () => this._closeDrawer()), (c = e.getElementById("drawerBackdrop")) == null || c.addEventListener("click", () => this._closeDrawer()), (d = e.getElementById("btnSaveDrawer")) == null || d.addEventListener("click", () => {
      this._updateCardConfig(), this._closeDrawer(), alert("✓ Налаштування збережено!");
    }), (y = this._editorNode) == null || y.addEventListener("config-changed", (x) => {
      var $;
      const C = x.detail.config;
      C.appearance = {
        ...ce.appearance,
        ...(($ = this._config) == null ? void 0 : $.appearance) || {},
        ...C.appearance || {}
      }, this._config = C, this._cardNode && this._cardNode.setConfig(this._config), this._saveConfig();
    }), (h = e.getElementById("btnPanelViewToggle")) == null || h.addEventListener("click", () => {
      var v, I;
      const C = (((v = this._cardNode) == null ? void 0 : v._viewMode) || ((I = this._config) == null ? void 0 : I.view_mode) || "3d") === "3d" ? "schematic" : "3d";
      this._cardNode && typeof this._cardNode._toggleViewMode == "function" && this._cardNode._toggleViewMode(C), this._config.view_mode = C, this._saveConfig();
      const $ = e.getElementById("btnPanelViewToggle");
      $ && ($.innerHTML = C === "schematic" ? "⚡ 2D Схема" : "🧊 3D Режим");
    }), (w = e.getElementById("btnZoomIn")) == null || w.addEventListener("click", () => this._changeScale(this._scale + 0.1)), (u = e.getElementById("btnZoomOut")) == null || u.addEventListener("click", () => this._changeScale(this._scale - 0.1)), (b = e.getElementById("btnFullscreen")) == null || b.addEventListener("click", () => {
      var x, C, $;
      document.fullscreenElement ? ($ = document.exitFullscreen) == null || $.call(document) : (C = (x = document.documentElement).requestFullscreen) == null || C.call(x);
    }), (_ = e.getElementById("btnQuickTheme")) == null || _.addEventListener("click", () => {
      var Y;
      const x = ["cyber_dark", "oled_black", "clean_light"], C = ((Y = this._config.appearance) == null ? void 0 : Y.theme_preset) || "cyber_dark", $ = (x.indexOf(C) + 1) % x.length, v = x[$];
      this._config.appearance.theme_preset = v, this._config.theme_mode = v === "clean_light" ? "light" : "dark", this._updateCardConfig();
      const I = e.getElementById("btnQuickTheme");
      I && (I.innerText = v === "clean_light" ? "☀️ Світла" : v === "oled_black" ? "⬛ OLED" : "🌙 Темна");
    }), (k = e.getElementById("btnSyncFromLovelace")) == null || k.addEventListener("click", () => {
      this._importFromLovelace(!0);
    });
    const i = e.getElementById("yamlModal"), n = e.getElementById("yamlCodeArea");
    (g = e.getElementById("btnOpenYamlModal")) == null || g.addEventListener("click", () => {
      if (i && n) {
        try {
          n.value = $d(this._config);
        } catch {
          n.value = JSON.stringify(this._config, null, 2);
        }
        i.classList.add("active");
      }
    }), (p = e.getElementById("btnCloseYamlModal")) == null || p.addEventListener("click", () => {
      i == null || i.classList.remove("active");
    }), (f = e.getElementById("btnCopyCurrentYaml")) == null || f.addEventListener("click", () => {
      var x;
      n && ((x = navigator.clipboard) == null || x.writeText(n.value), alert("✓ Скопійовано в буфер обміну!"));
    }), (S = e.getElementById("btnApplyYaml")) == null || S.addEventListener("click", () => {
      var x;
      if (n && n.value.trim())
        try {
          const C = n.value.trim();
          let $ = null;
          C.startsWith("{") ? $ = JSON.parse(C) : $ = kl(C), $ && typeof $ == "object" && ($.type && delete $.type, $.appearance = {
            ...ce.appearance,
            ...((x = this._config) == null ? void 0 : x.appearance) || {},
            ...$.appearance || {}
          }, this._config = $, this._saveConfig(), this._render(), this._bindEvents(), i == null || i.classList.remove("active"), alert("✓ Конфігурацію успішно застосовано!"));
        } catch (C) {
          alert("Помилка формату YAML / JSON: " + C.message);
        }
    }), e.querySelectorAll("#mainFontGrid .font-tile").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#mainFontGrid .font-tile").forEach((C) => C.classList.remove("active")), x.classList.add("active"), this._config.appearance.font_family = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#monoFontGrid .font-tile").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#monoFontGrid .font-tile").forEach((C) => C.classList.remove("active")), x.classList.add("active"), this._config.appearance.mono_font_family = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((C) => C.classList.remove("active")), x.classList.add("active"), this._config.appearance.power_font_size = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((C) => C.classList.remove("active")), x.classList.add("active"), this._config.appearance.label_font_size = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#themePresetSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#themePresetSeg .seg-btn").forEach(($) => $.classList.remove("active")), x.classList.add("active");
        const C = x.dataset.val;
        this._config.appearance.theme_preset = C, this._config.theme_mode = C === "clean_light" ? "light" : "dark", this._updateCardConfig();
      });
    });
    const r = e.getElementById("sliderCardScale"), o = e.getElementById("lblCardScale");
    r && r.addEventListener("input", (x) => {
      const C = parseFloat(x.target.value);
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
  "%c⚡ Energy Station Card v1.5.0 Loaded ⚡",
  "background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
const Go = {
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
class Td extends HTMLElement {
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
      for (const s of o)
        if (s.contains(this) || (n = s.shadowRoot) != null && n.contains(this) || o.length === 1) {
          i = s;
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
        const s = new CustomEvent("ll-edit-card", {
          bubbles: !0,
          composed: !0,
          detail: { path: i.path }
        });
        i.dispatchEvent(s);
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
        var a, l;
        const s = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
        for (const c of s)
          if (c.contains(this) || (a = c.shadowRoot) != null && a.contains(this) || s.length === 1) {
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
    return JSON.parse(JSON.stringify(ce));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(e)), n = JSON.parse(JSON.stringify(ce));
    this._config = this._deepMerge(n, i);
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = r || this._config.theme_mode || "dark";
    const o = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = o || this._config.language || "uk";
    const s = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = s ? parseFloat(s) : this._config.card_scale || this._config.scale || 1;
    const a = typeof localStorage < "u" ? localStorage.getItem("energy_station_view_mode") : null;
    this._viewMode = a || this._config.view_mode || ce.view_mode || "3d", this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var o, s;
    let i = typeof e == "number" ? e : this._scale + (e || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const n = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".energy-station-container");
    n && (n.style.setProperty("--es-card-scale", i.toString()), n.style.zoom = i.toString());
    const r = (s = this.shadowRoot) == null ? void 0 : s.getElementById("headerZoomVal");
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
      const o = i[r], s = e ? e[r] : void 0;
      o && typeof o == "object" && !Array.isArray(o) ? n[r] = this._deepMerge(s || {}, o) : n[r] = o;
    }
    return n;
  }
  _getEntityState(e) {
    var a;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const i = this._hass.states[e], r = String(i.state).trim().replace(",", "."), o = parseFloat(r), s = ((a = i.attributes) == null ? void 0 : a.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(o) ? 0 : o,
      unit: s,
      attributes: i.attributes
    };
  }
  _t(e) {
    var n, r;
    const i = this._language || "uk";
    return ((n = Go[i]) == null ? void 0 : n[e]) || ((r = Go.uk) == null ? void 0 : r[e]) || e;
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
    var s, a, l, c;
    const e = this._viewMode === "3d", i = (s = this.shadowRoot) == null ? void 0 : s.getElementById("realistic3dView"), n = (a = this.shadowRoot) == null ? void 0 : a.getElementById("schematicView"), r = (l = this.shadowRoot) == null ? void 0 : l.getElementById("headerViewToggle");
    i && (i.style.display = e ? "block" : "none"), n && (n.style.display = e ? "none" : "block"), r && (r.innerHTML = `<span>${e ? "🧊 3D" : "⚡ 2D"}</span>`, r.title = e ? this._t("view_toggle_to_2d") : this._t("view_toggle_to_3d"));
    const o = (c = this.shadowRoot) == null ? void 0 : c.querySelector(".energy-station-container");
    o && (o.classList.toggle("view-mode-3d", e), o.classList.toggle("view-mode-schematic", !e));
  }
  _applyTheme() {
    var s;
    const e = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".energy-station-container");
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
    var l, c, d, y, h, w, u, b, _, k, g, p, f, S, x, C, $, v;
    const e = this._config || ce;
    this._initialized = !0;
    const i = e.appearance || ce.appearance || {}, n = {
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
    }, s = {
      compact: "10px",
      normal: "11.5px",
      large: "13.5px"
    }, a = {
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
          --es-label-font-size: ${s[i.label_font_size] || "11.5px"};
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
          padding: ${a[i.density] || "22px 28px 24px 28px"};
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
@media (min-width: 768px) {
  .es-view-3d #topGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
  .es-view-3d #centerRow {
    margin: 24px 0 !important;
  }
  .es-view-3d #inverterCard {
    flex-direction: row !important;
    text-align: left !important;
    max-width: 640px !important;
  }
  .es-view-3d #inverterSpecsGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
  }
  .es-view-3d #bottomGrid {
    grid-template-columns: 7fr 5fr !important;
  }
  .es-view-3d #batteryRacksContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 767px) {
  .es-view-3d #flowSvg3d {
    display: none !important;
  }
  .es-view-3d .es-3d-container {
    min-height: auto !important;
    padding: 10px !important;
    gap: 12px !important;
  }
  .es-view-3d #topGrid,
  .es-view-3d #bottomGrid {
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
  }
  .es-view-3d #centerRow {
    margin: 8px 0 !important;
  }
  .es-view-3d #inverterCard {
    flex-direction: column !important;
    text-align: center !important;
    padding: 16px !important;
    gap: 14px !important;
  }
  .es-view-3d #inverterSpecsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
  .es-view-3d #batteryRacksContainer {
    grid-template-columns: 1fr !important;
  }
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
            <span>${e.title || "Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW v1.5.0</span>
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
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0" id="gridStatusBadge">
                Живлення стабільне
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
                <div class="text-2xl sm:text-3xl font-extrabold text-sky-300 font-mono leading-tight" id="gridPowerVal3d">5.940 кВт</div>
                <div class="text-xs text-sky-400 font-bold mb-1.5 truncate" id="gridFlowDir3d">→ ІМПОРТ З МЕРЕЖІ</div>
                
                <div class="text-xs text-slate-300 font-mono flex items-center justify-between bg-slate-900/80 p-1.5 rounded mb-2 border border-slate-800">
                  <span>Напруга: <b class="text-slate-100" id="gridVolt3d">204.2 V</b></span>
                  <span>Струм: <b class="text-slate-100" id="gridCurrent3d">29.1 A</b></span>
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
                <text x="90" y="91" font-family="'JetBrains Mono', monospace" font-weight="800" font-size="13" fill="#38bdf8" text-anchor="middle" id="invScreenPower">5.94 kW</text>
                <!-- Display Status line with proper font size and letter-spacing -->
                <text x="90" y="106" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#34d399" text-anchor="middle" letter-spacing="0.5" id="invScreenStatus">ON-GRID · CHARGE</text>
                
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
                  <span class="font-bold text-amber-300 text-sm">41.2 °C</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">Температура DC</span>
                  <span class="font-bold text-amber-300 text-sm">34.5 °C</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">Частота мережі</span>
                  <span class="font-bold text-sky-300 text-sm">50.00 Hz</span>
                </div>
                <div class="bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-center">
                  <span class="text-slate-400 text-[10px] block mb-0.5 font-sans">⚡ Власне</span>
                  <span class="font-bold text-orange-400 text-sm">100 Вт</span>
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
                  <div class="text-xl md:text-2xl font-black text-emerald-300 font-mono tracking-tight transition-all" id="batTimerVal">~ 02:45:10</div>
                  <div class="text-xs text-slate-400 mt-0.5" id="batSubTimer">
                    Запас енергії: <b>~16.42 кВт·год</b> (автономність будинку ~ 16.5 год)
                  </div>
                </div>
                <div class="flex items-center gap-3 text-xs font-mono text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-800 pt-1.5 sm:pt-0 sm:pl-3">
                  <div>
                    <span class="text-[10px] text-slate-500 block">Шина</span>
                    <span class="font-bold text-slate-200" id="batBusVolt3d">54.64 V</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-slate-500 block">Струм</span>
                    <span class="font-bold text-emerald-300 transition-colors" id="batBusCurrent3d">-7.24 A</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-slate-500 block">Темп</span>
                    <span class="font-bold text-slate-200">25.0 °C</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- TWO RACKS CONTAINER (PRO HARDWARE RENDER WITHOUT BLURRY TEXT) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4" id="batteryRacksContainer">

              <!-- RACK 1 -->
              <div class="bg-slate-900/90 rounded-xl p-3 border border-emerald-500/30 shadow-lg flex items-center gap-3.5 transition-all" id="rack1Card">
                <!-- 3D Rack 1 SVG (Realistic hardware without fake blurry text) -->
                <div class="w-[72px] sm:w-[84px] flex-shrink-0 hardware-render">
                  <svg viewBox="0 0 110 160" class="w-full h-auto">
                    <!-- Cabinet Frame -->
                    <polygon points="10,10 95,10 104,18 104,154 95,148 10,148" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
                    <polygon points="95,10 104,18 104,154 95,148" fill="#1e293b" />
                    <!-- Smoked Glass Door -->
                    <rect x="15" y="16" width="76" height="126" rx="4" fill="url(#rackDoorGlow1)" stroke="#10b981" stroke-width="1.2" id="rack1Door" />

                    <!-- Top OLED Display Box (Clean, readable text without overlap) -->
                    <rect x="22" y="22" width="62" height="34" rx="4" fill="#030712" stroke="#34d399" stroke-width="1.5" id="rack1ScreenBorder" />
                    <text x="53" y="37" font-family="'Orbitron', sans-serif" font-weight="900" font-size="14" fill="#34d399" text-anchor="middle" id="rack1SocDisplay">77%</text>
                    <text x="53" y="49" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="rack1PowerDisplay">1.40 кВт ↓</text>

                    <!-- Industrial Hardware Module Trays (Realistic Handles, Status LEDs, DC Terminals) -->
                    <!-- Tray 1 -->
                    <rect x="20" y="62" width="66" height="16" rx="2" fill="#1e293b" stroke="#475569" stroke-width="0.8" />
                    <rect x="22" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <rect x="81.5" y="65" width="2.5" height="10" rx="1" fill="#94a3b8" />
                    <!-- LED Cell Level Bar -->
                    <circle cx="30" cy="70" r="1.8" fill="#10b981" id="rack1Mod1Led" />
                    <rect x="36" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="43" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="50" y="68" width="5" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <rect x="57" y="68" width="5" height="4" rx="1" fill="#334155" />
                    <!-- Cooling vents -->
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

                    <!-- Bottom Master BMS Controller Hub -->
                    <rect x="20" y="122" width="66" height="16" rx="2" fill="#0b1329" stroke="#0284c7" stroke-width="1" />
                    <circle cx="28" cy="130" r="2.2" fill="#38bdf8" style="filter: drop-shadow(0 0 2px #38bdf8);" />
                    <circle cx="36" cy="130" r="2.2" fill="#10b981" />
                    <!-- DC Power Studs (+ and -) -->
                    <circle cx="70" cy="130" r="2.8" fill="#ef4444" />
                    <circle cx="78" cy="130" r="2.8" fill="#0284c7" />
                  </svg>
                </div>

                <!-- Telemetry -->
                <div class="flex-1 min-w-0 font-mono">
                  <div class="flex items-center justify-between pb-1 border-b border-slate-800 gap-1">
                    <span class="font-bold text-xs text-emerald-400 font-sans" id="rack1Title">Стійка 1 (АКБ 1)</span>
                    <span class="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold" id="rack1SocBadge">77%</span>
                  </div>

                  <div class="mt-2 space-y-1.5 text-xs">
                    <div class="flex justify-between items-center">
                      <span class="text-slate-400 text-xs font-sans">Потужність:</span>
                      <span class="font-bold text-emerald-300 text-sm" id="rack1PowerVal">1.40 кВт ↓</span>
                    </div>

                    <div class="grid grid-cols-3 gap-1 bg-slate-950/80 p-1.5 rounded-lg text-xs my-1 border border-slate-800 text-center">
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Напруга</span>
                        <span class="text-slate-200 font-bold" id="rack1Volt">54.2 V</span>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Темп.</span>
                        <span class="text-amber-300 font-bold" id="rack1Temp">39.2 °C</span>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Дельта</span>
                        <span class="text-emerald-300 font-bold" id="rack1Delta">Δ13 mV</span>
                      </div>
                    </div>

                    <div class="flex justify-between items-center text-xs text-slate-400">
                      <span class="font-sans">Запас енергії:</span>
                      <span class="font-bold text-slate-200" id="rack1Kwh">~10.78 кВт·г</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RACK 2 -->
              <div class="bg-slate-900/90 rounded-xl p-3 border border-emerald-500/30 shadow-lg flex items-center gap-3.5 transition-all" id="rack2Card">
                <!-- 3D Rack 2 SVG -->
                <div class="w-[72px] sm:w-[84px] flex-shrink-0 hardware-render">
                  <svg viewBox="0 0 110 160" class="w-full h-auto">
                    <polygon points="10,10 95,10 104,18 104,154 95,148 10,148" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
                    <polygon points="95,10 104,18 104,154 95,148" fill="#1e293b" />
                    <rect x="15" y="16" width="76" height="126" rx="4" fill="url(#rackDoorGlow2)" stroke="#059669" stroke-width="1.2" id="rack2Door" />

                    <!-- Top Display -->
                    <rect x="22" y="22" width="62" height="34" rx="4" fill="#030712" stroke="#10b981" stroke-width="1.5" id="rack2ScreenBorder" />
                    <text x="53" y="37" font-family="'Orbitron', sans-serif" font-weight="900" font-size="14" fill="#34d399" text-anchor="middle" id="rack2SocDisplay">72%</text>
                    <text x="53" y="49" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="700" fill="#a7f3d0" text-anchor="middle" id="rack2PowerDisplay">1.79 кВт ↓</text>

                    <!-- Trays with LED level bars (no fake illegible text) -->
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

                    <!-- Controller Hub -->
                    <rect x="20" y="122" width="66" height="16" rx="2" fill="#0b1329" stroke="#0284c7" stroke-width="1" />
                    <circle cx="28" cy="130" r="2.2" fill="#38bdf8" style="filter: drop-shadow(0 0 2px #38bdf8);" />
                    <circle cx="36" cy="130" r="2.2" fill="#10b981" />
                    <circle cx="70" cy="130" r="2.8" fill="#ef4444" />
                    <circle cx="78" cy="130" r="2.8" fill="#0284c7" />
                  </svg>
                </div>

                <!-- Telemetry -->
                <div class="flex-1 min-w-0 font-mono">
                  <div class="flex items-center justify-between pb-1 border-b border-slate-800 gap-1">
                    <span class="font-bold text-xs text-emerald-400 font-sans" id="rack2Title">Стійка 2 (АКБ 2)</span>
                    <span class="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold" id="rack2SocBadge">72%</span>
                  </div>

                  <div class="mt-2 space-y-1.5 text-xs">
                    <div class="flex justify-between items-center">
                      <span class="text-slate-400 text-xs font-sans">Потужність:</span>
                      <span class="font-bold text-emerald-300 text-sm" id="rack2PowerVal">1.79 кВт ↓</span>
                    </div>

                    <div class="grid grid-cols-3 gap-1 bg-slate-950/80 p-1.5 rounded-lg text-xs my-1 border border-slate-800 text-center">
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Напруга</span>
                        <span class="text-slate-200 font-bold" id="rack2Volt">54.1 V</span>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Темп.</span>
                        <span class="text-cyan-300 font-bold" id="rack2Temp">17.0 °C</span>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px] font-sans">Дельта</span>
                        <span class="text-amber-300 font-bold" id="rack2Delta">Δ27 mV</span>
                      </div>
                    </div>

                    <div class="flex justify-between items-center text-xs text-slate-400">
                      <span class="font-sans">Запас енергії:</span>
                      <span class="font-bold text-slate-200" id="rack2Kwh">~11.52 кВт·г</span>
                    </div>
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
                  <div class="text-sm font-bold text-sky-300" id="boilerVal3d">0.950 кВт</div>
                  <div class="text-[10px] text-emerald-400 font-sans" id="boilerStatusBadge3d">Нагрів активний</div>
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
            <div class="es-schematic-node clickable-node ${(h = e.grid) != null && h.show_car && ((w = e.grid) != null && w.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
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
                <div class="es-aux-box glow-aux clickable-node ${((_ = e.aux) == null ? void 0 : _.type) === "none" || ((k = e.aux) == null ? void 0 : k.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${be[(g = e.aux) == null ? void 0 : g.type] || be.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((p = e.aux) == null ? void 0 : p.type) === "microinverter" && (!((f = e.aux) != null && f.title) || ((S = e.aux) == null ? void 0 : S.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((x = e.aux) == null ? void 0 : x.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((C = e.aux) == null ? void 0 : C.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${(($ = e.wind) == null ? void 0 : $.show) === !1 && ((v = e.aux) == null ? void 0 : v.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
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
    var l, c, d, y, h, w, u, b;
    const e = this._config || ce, i = ((l = this._nodes) == null ? void 0 : l.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !(((c = e.wind) == null ? void 0 : c.show) !== !1 || ((d = e.aux) == null ? void 0 : d.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const r = ((y = e.wind) == null ? void 0 : y.turbine_count) || ((w = (h = e.wind) == null ? void 0 : h.turbines) == null ? void 0 : w.length) || 2, o = ((u = e.wind) == null ? void 0 : u.turbines) || [], s = document.createElement("div");
    s.className = "es-wind-summary-bar es-mono", s.id = "windStationSummaryBar", s.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(s);
    const a = document.createElement("div");
    a.className = "es-wind-pods-row", i.appendChild(a);
    for (let _ = 0; _ < r; _++) {
      const k = o[_] || {
        name: `Вітряк ${_ + 1}`,
        power_entity: `sensor.wind_turbine_${_ + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((b = e.wind) == null ? void 0 : b.animation_threshold) || 50
      }, g = !!(k.daily_energy_entity || k.monthly_energy_entity), p = document.createElement("div");
      p.className = "es-turbine-card glow-wind clickable-node", p.id = `turbineCard_${_ + 1}`, p.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${_ + 1}">
              ${be.wind_turbine}
            </div>
            <span>${k.name || `Вітряк ${_ + 1}`}</span>
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
        this._fireMoreInfo(k.power_entity);
      }), a.appendChild(p);
    }
  }
  _renderDynamicPvPanels() {
    var s, a, l, c, d, y;
    const e = this._config || ce, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((s = e.solar) == null ? void 0 : s.pv_count) || ((l = (a = e.solar) == null ? void 0 : a.strings) == null ? void 0 : l.length) || 3, r = this._language === "en" ? "kWp" : "кВтп", o = ((c = e.solar) == null ? void 0 : c.show_metrics) !== !1;
    for (let h = 1; h <= n; h++) {
      const w = h < 10 ? `0${h}` : `${h}`, u = ((y = (d = e.solar) == null ? void 0 : d.strings) == null ? void 0 : y[h - 1]) || {}, b = u.name || `PV ${w}`, _ = u.capacity_kw !== void 0 ? parseFloat(u.capacity_kw) : 4, k = u.voltage_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_voltage` : ""), g = u.current_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_current` : ""), p = document.createElement("div");
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
        const x = u.power_entity || k || g || ((C = e.solar) == null ? void 0 : C.total_power_entity);
        this._fireMoreInfo(x);
      });
      const f = p.querySelector(`#pvVolt_${h}`);
      f && f.addEventListener("click", (x) => {
        x.stopPropagation(), k ? this._fireMoreInfo(k) : u.power_entity && this._fireMoreInfo(u.power_entity);
      });
      const S = p.querySelector(`#pvCurr_${h}`);
      S && S.addEventListener("click", (x) => {
        x.stopPropagation(), g ? this._fireMoreInfo(g) : u.power_entity && this._fireMoreInfo(u.power_entity);
      }), i.appendChild(p);
    }
  }
  _renderDynamicSubloads() {
    var r;
    const e = this._config || ce, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((r = e.load) == null ? void 0 : r.subloads) || []).forEach((o, s) => {
      const a = document.createElement("div");
      a.className = "es-subload-card clickable-node", a.id = `subloadCard_${s}`, a.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${be[o.icon] || be.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${o.name}</span>
        <span class="es-mono" id="subloadVal_${s}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, a.addEventListener("click", () => {
        this._fireMoreInfo(o.entity);
      }), i.appendChild(a);
    });
  }
  _renderDynamicBatteryRack() {
    var y, h, w, u, b, _, k;
    const e = this._config || ce, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((y = e.battery) == null ? void 0 : y.parallel_batteries) || ((w = (h = e.battery) == null ? void 0 : h.modules) == null ? void 0 : w.length) || 2, r = [82, 76, 91, 68, 85, 90, 72, 80], o = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], s = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], a = [12, 8, 15, 9, 14, 11, 18, 10], l = this._t("bat_prefix"), c = this._language === "en" ? "kW" : "кВт", d = this._language === "en" ? "kWh" : "кВт·год";
    for (let g = 1; g <= n; g++) {
      const p = ((b = (u = e.battery) == null ? void 0 : u.modules) == null ? void 0 : b[g - 1]) || ((k = (_ = e.battery) == null ? void 0 : _.module_entities) == null ? void 0 : k[g - 1]) || {}, f = p.name || `${l} ${g}`, S = r[(g - 1) % r.length], x = o[(g - 1) % o.length], C = s[(g - 1) % s.length], $ = a[(g - 1) % a.length], v = document.createElement("div");
      v.className = "es-battery-pack-card glow-battery clickable-node", v.id = `batPackCard_${g}`, v.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${be.battery_vertical}</div>
        <span class="es-bat-name">${f}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${g}">${S}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${g}">${x.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${g}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${c}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${g}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${g}">${C.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${g}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${g}">${$} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${g}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${d}</div>
      `, v.addEventListener("click", (I) => {
        var H;
        if (I.target.closest(`#batPackTemp_${g}`)) {
          const j = p.temperature_entity || p.temp || `sensor.bms_rack${g}_temperature`;
          this._fireMoreInfo(j);
          return;
        }
        if (I.target.closest(`#batPackDelta_${g}`)) {
          const j = p.cell_delta_entity || p.delta_entity || `sensor.bms_rack${g}_cell_delta`;
          this._fireMoreInfo(j);
          return;
        }
        const Y = p.soc_entity || p.soc || p.voltage_entity || p.volt || p.current_entity || ((H = e.battery) == null ? void 0 : H.soc_entity);
        this._fireMoreInfo(Y);
      }), i.appendChild(v);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var b, _, k, g, p, f, S, x, C, $;
    const e = this._config || ce, i = ((b = this._nodes) == null ? void 0 : b.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", e.show_quick_settings === !1)) return;
    const n = this._themeMode === "light", r = this._language === "en", o = ((_ = e.controls) == null ? void 0 : _.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", s = ((k = e.controls) == null ? void 0 : k.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", a = ((g = e.controls) == null ? void 0 : g.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", l = document.createElement("div");
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${s}">
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${a}">
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
    `, (p = l.querySelector("#btnEditCardQs")) == null || p.addEventListener("click", (v) => {
      v.stopPropagation(), this._openCardEditor();
    }), (f = l.querySelector("#btnThemeToggle")) == null || f.addEventListener("click", (v) => {
      v.stopPropagation(), this._toggleTheme();
    }), (S = l.querySelector("#btnLangToggle")) == null || S.addEventListener("click", (v) => {
      v.stopPropagation(), this._toggleLanguage();
    }), (x = l.querySelector("#ctrlLabelWrapSolar")) == null || x.addEventListener("click", () => this._fireMoreInfo(o)), (C = l.querySelector("#ctrlLabelWrapSell")) == null || C.addEventListener("click", () => this._fireMoreInfo(s)), ($ = l.querySelector("#ctrlLabelWrapGrid")) == null || $.addEventListener("click", () => this._fireMoreInfo(a));
    const c = l.querySelector("#ctrlSliderSolar"), d = l.querySelector("#ctrlValSolar");
    c && (this._updateSliderGradient(c), c.addEventListener("input", (v) => {
      d && (d.innerText = `${v.target.value} A`), this._updateSliderGradient(c);
    }), c.addEventListener("change", (v) => {
      this._setNumberValue(o, v.target.value);
    }));
    const y = l.querySelector("#ctrlSliderSell"), h = l.querySelector("#ctrlValSell");
    y && (this._updateSliderGradient(y), y.addEventListener("input", (v) => {
      const I = Number(v.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      h && (h.innerText = `${I} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(y);
    }), y.addEventListener("change", (v) => {
      this._setNumberValue(s, v.target.value);
    }));
    const w = l.querySelector("#ctrlSliderGrid"), u = l.querySelector("#ctrlValGrid");
    w && (this._updateSliderGradient(w), w.addEventListener("input", (v) => {
      u && (u.innerText = `${v.target.value} A`), this._updateSliderGradient(w);
    }), w.addEventListener("change", (v) => {
      this._setNumberValue(a, v.target.value);
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
    var h, w, u, b, _, k, g, p, f;
    const e = this._config || ce;
    if (e.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const n = ((h = e.controls) == null ? void 0 : h.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", r = ((w = e.controls) == null ? void 0 : w.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", o = ((u = e.controls) == null ? void 0 : u.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", s = i.getElementById("ctrlSliderSolar"), a = i.getElementById("ctrlValSolar"), l = i.getElementById("ctrlSliderSell"), c = i.getElementById("ctrlValSell"), d = i.getElementById("ctrlSliderGrid"), y = i.getElementById("ctrlValGrid");
    if (s && (!s.matches || !s.matches(":active"))) {
      const S = (_ = (b = this._hass) == null ? void 0 : b.states) == null ? void 0 : _[n], x = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : s.value ? parseFloat(s.value) : 80;
      s.value = x, a && (a.innerText = `${Math.round(x)} A`), this._updateSliderGradient(s);
    }
    if (l && (!l.matches || !l.matches(":active"))) {
      const S = (g = (k = this._hass) == null ? void 0 : k.states) == null ? void 0 : g[r], x = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : l.value ? parseFloat(l.value) : 5e3;
      l.value = x;
      const C = Math.round(x).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), $ = this._language === "uk" ? "Вт" : "W";
      c && (c.innerText = `${C} ${$}`), this._updateSliderGradient(l);
    }
    if (d && (!d.matches || !d.matches(":active"))) {
      const S = (f = (p = this._hass) == null ? void 0 : p.states) == null ? void 0 : f[o], x = S && !isNaN(parseFloat(S.state)) ? parseFloat(S.state) : d.value ? parseFloat(d.value) : 70;
      d.value = x, y && (y.innerText = `${Math.round(x)} A`), this._updateSliderGradient(d);
    }
  }
  _bindInteractions() {
    var n, r, o, s, a, l, c, d, y, h, w, u, b, _, k, g, p, f, S, x, C, $;
    const e = this.shadowRoot, i = this._config || ce;
    (n = e.getElementById("headerEditCard")) == null || n.addEventListener("click", (v) => {
      v.stopPropagation(), this._openCardEditor();
    }), (r = e.getElementById("headerThemeToggle")) == null || r.addEventListener("click", (v) => {
      v.stopPropagation(), this._toggleTheme();
    }), (o = e.getElementById("headerLangToggle")) == null || o.addEventListener("click", (v) => {
      v.stopPropagation(), this._toggleLanguage();
    }), (s = e.getElementById("headerZoomIn")) == null || s.addEventListener("click", (v) => {
      v.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (a = e.getElementById("headerZoomOut")) == null || a.addEventListener("click", (v) => {
      v.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (l = e.getElementById("headerZoomVal")) == null || l.addEventListener("click", (v) => {
      v.stopPropagation(), this._changeScale(1);
    }), (c = e.getElementById("solarHeaderNode")) == null || c.addEventListener("click", () => {
      var v, I;
      this._fireMoreInfo(((v = i.solar) == null ? void 0 : v.daily_yield_entity) || ((I = i.solar) == null ? void 0 : I.total_power_entity));
    }), (d = e.getElementById("totalPvPowerBadge")) == null || d.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.solar) == null ? void 0 : v.total_power_entity);
    }), (y = e.getElementById("gridNode")) == null || y.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.grid) == null ? void 0 : v.power_entity);
    }), (h = e.getElementById("nonEssentialNode")) == null || h.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.grid) == null ? void 0 : v.non_essential_power_entity);
    }), (w = e.getElementById("carNode")) == null || w.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.grid) == null ? void 0 : v.car_power_entity);
    }), (u = e.getElementById("inverterNode")) == null || u.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.inverter) == null ? void 0 : v.power_entity);
    }), (b = e.getElementById("inverterSelfConsumptionBox")) == null || b.addEventListener("click", (v) => {
      var I;
      v.stopPropagation(), (I = i.inverter) != null && I.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (_ = e.getElementById("auxNode")) == null || _.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.aux) == null ? void 0 : v.power_entity);
    }), (k = e.getElementById("essentialNode")) == null || k.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.load) == null ? void 0 : v.essential_power_entity);
    }), (g = e.getElementById("masterBatteryHub")) == null || g.addEventListener("click", () => {
      var v;
      this._fireMoreInfo((v = i.battery) == null ? void 0 : v.soc_entity);
    }), (p = e.getElementById("batChargeDaily")) == null || p.addEventListener("click", (v) => {
      var I;
      v.stopPropagation(), this._fireMoreInfo(((I = i.battery) == null ? void 0 : I.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (f = e.getElementById("batDischargeDaily")) == null || f.addEventListener("click", (v) => {
      var I;
      v.stopPropagation(), this._fireMoreInfo(((I = i.battery) == null ? void 0 : I.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let v = 1; v <= 8; v++) {
      const I = e.getElementById(`batBranchBadge_${v}`), Y = ((x = (S = i.battery) == null ? void 0 : S.modules) == null ? void 0 : x[v - 1]) || (($ = (C = i.battery) == null ? void 0 : C.module_entities) == null ? void 0 : $[v - 1]) || {};
      I == null || I.addEventListener("click", () => {
        var j;
        const H = Y.power_entity || Y.current_entity || Y.soc_entity || ((j = i.battery) == null ? void 0 : j.soc_entity);
        this._fireMoreInfo(H);
      });
    }
  }
  _fetchNightEndFromHa(e, i) {
    var l, c;
    if (this._fetchingHistoryForDate === e) return;
    const r = (l = (this._config || ce).grid) == null ? void 0 : l.import_daily_entity;
    if (!((c = this._hass) != null && c.callWS) || !r) return;
    this._fetchingHistoryForDate = e;
    const o = /* @__PURE__ */ new Date(), s = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), a = new Date(o.getFullYear(), o.getMonth(), o.getDate(), i, 5, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: s.toISOString(),
      end_time: a.toISOString(),
      entity_ids: [r],
      no_attributes: !0
    }).then((d) => {
      const y = d == null ? void 0 : d[r];
      if (y && y.length > 0) {
        let h = null;
        for (let w = y.length - 1; w >= 0; w--) {
          const u = parseFloat(y[w].state);
          if (!isNaN(u) && u >= 0) {
            h = u;
            break;
          }
        }
        if (h !== null) {
          const w = `es_tariff_split_${e}`;
          let u = {};
          if (typeof localStorage < "u")
            try {
              const b = localStorage.getItem(w);
              b && (u = JSON.parse(b));
            } catch {
            }
          if (u.night_end = h, u.night_end_hour = i, u.night_end_verified = !0, typeof localStorage < "u")
            try {
              localStorage.setItem(w, JSON.stringify(u));
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
    var f, S, x, C, $, v, I, Y, H, j, le, E, T, A, B, R, ee, ne, ge, J, ve;
    const s = (this._config || ce).tariffs || {};
    if (s.enabled === !1) {
      (f = this._nodes) != null && f.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (S = this._nodes) != null && S.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (x = this._nodes) != null && x.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (C = this._nodes) != null && C.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none"), ($ = this._nodes) != null && $.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (v = this._nodes) != null && v.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    const a = s.currency || "грн", l = typeof s.day_rate == "number" ? s.day_rate : 4.32, c = typeof s.night_rate == "number" ? s.night_rate : 2.16, d = typeof s.export_rate == "number" ? s.export_rate : 5.3, y = typeof s.night_start_hour == "number" ? s.night_start_hour : 23, h = typeof s.night_end_hour == "number" ? s.night_end_hour : 7, w = /* @__PURE__ */ new Date(), u = w.getHours() + w.getMinutes() / 60, b = y > h ? u >= y || u < h : u >= y && u < h;
    if ((I = this._nodes) != null && I.gridTariffBadge && s.show_active_badge !== !1) {
      const W = b ? c : l, z = b ? this._t("tariff_night") : this._t("tariff_day"), N = b ? "🌙" : "☀️", Q = b ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", Te = b ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", X = b ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = Q, this._nodes.gridTariffBadge.style.border = `1px solid ${Te}`, this._nodes.gridTariffBadge.style.color = X, this._nodes.gridTariffBadge.innerText = `${N} ${z}: ${W.toFixed(2)} ${a}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (Y = this._nodes) != null && Y.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((H = this._nodes) != null && H.solarSavingsDaily && s.show_solar_savings !== !1 && n > 0) {
      const W = n * l;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${W.toFixed(2)} ${a}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (j = this._nodes) != null && j.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((le = this._nodes) != null && le.gridExportIncomeRow && s.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const W = i * d;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${W.toFixed(2)} ${a}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (E = this._nodes) != null && E.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (T = this._nodes) != null && T.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (A = this._nodes) != null && A.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (B = this._nodes) != null && B.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    let _ = null, k = null;
    if (s.import_night_entity || s.import_day_entity) {
      const W = s.import_night_entity ? this._getEntityState(s.import_night_entity) : null, z = s.import_day_entity ? this._getEntityState(s.import_day_entity) : null;
      W && typeof W.val == "number" && (_ = W.val), z && typeof z.val == "number" && (k = z.val), _ !== null && k === null ? k = Math.max(0, e - _) : k !== null && _ === null && (_ = Math.max(0, e - k));
    }
    if (_ === null || k === null) {
      const W = `${w.getFullYear()}-${String(w.getMonth() + 1).padStart(2, "0")}-${String(w.getDate()).padStart(2, "0")}`, z = `es_tariff_split_${W}`;
      let N = {};
      if (typeof localStorage < "u")
        try {
          const Q = localStorage.getItem(z);
          Q && (N = JSON.parse(Q));
        } catch {
        }
      if (u < h) {
        if (_ = e, k = 0, N.ongoing_night_val = e, N.ongoing_night_hour = u, N.night_end = e, N.night_end_hour = u, N.night_end_verified = !1, typeof localStorage < "u")
          try {
            localStorage.setItem(z, JSON.stringify(N));
          } catch {
          }
      } else if (u >= h && u < y) {
        const Q = N.night_end_verified === !0, Te = typeof N.night_end_hour == "number" && N.night_end_hour >= h - 0.25;
        if ((Q || Te) && typeof N.night_end == "number" && N.night_end <= e)
          _ = N.night_end, k = Math.max(0, e - _);
        else {
          this._fetchNightEndFromHa(W, h);
          let X = e * Math.min(1, h / Math.max(u, 1));
          typeof r == "number" && r > 0.5 && (X = Math.min(e, Math.max(X, r))), _ = X, k = Math.max(0, e - _);
        }
        if (N.day_end = e, typeof localStorage < "u")
          try {
            localStorage.setItem(z, JSON.stringify(N));
          } catch {
          }
      } else {
        const Q = typeof N.night_end == "number" && N.night_end_verified ? N.night_end : e * (h / u), Te = typeof N.day_end == "number" ? N.day_end : e;
        k = Math.max(0, Te - Q);
        const X = Math.max(0, e - Te);
        _ = Q + X;
      }
    }
    const g = _ * c + k * l;
    (R = this._nodes) != null && R.gridCostDailyRow && s.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${g.toFixed(2)} ${a}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${_.toFixed(1)} + ☀️ ${k.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (ee = this._nodes) != null && ee.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
    const p = _ > 0 && l > c ? _ * (l - c) : 0;
    if ((ne = this._nodes) != null && ne.gridNightSavingsRow && s.show_night_savings !== !1 && p > 0.05 ? (this._nodes.gridNightSavingsVal && (this._nodes.gridNightSavingsVal.innerText = `🌙 ${this._t("tariff_night_saved")}: ~${p.toFixed(2)} ${a}`), this._nodes.gridNightSavingsRow.style.display = "block") : (ge = this._nodes) != null && ge.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (J = this._nodes) != null && J.netBenefitDailyRow && s.show_net_benefit !== !1) {
      const W = typeof n == "number" && n > 0 ? n * l : 0, z = typeof i == "number" && i > 0 ? i * d : 0, N = W + z - g;
      this._nodes.netBenefitDailyBadge && (N >= 0 ? (this._nodes.netBenefitDailyBadge.style.background = "rgba(16, 185, 129, 0.15)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(16, 185, 129, 0.35)", this._nodes.netBenefitDailyBadge.style.color = "#34d399", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_benefit")}: +${N.toFixed(2)} ${a}`) : (this._nodes.netBenefitDailyBadge.style.background = "rgba(56, 189, 248, 0.12)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(56, 189, 248, 0.3)", this._nodes.netBenefitDailyBadge.style.color = "#38bdf8", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_cost")}: ${N.toFixed(2)} ${a}`)), this._nodes.netBenefitDailyRow.style.display = "block";
    } else (ve = this._nodes) != null && ve.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
  }
  _updateValues() {
    var hi, un, bn, yn, _n, mn, xn, vn, wn, kn, En, Sn, Cn, $n, Tn, Bn, In, Nn, An, Ln, Rn, Pn, Mn, Fn, On, Dn, Vn, zn, Gn, Wn, Kn, qn, jn, Hn, Un, Yn, Jn, Qn, Xn, Zn, er, tr, ir, nr, rr, or, sr, ar, lr, dr, cr, pr, fr, gr, hr, ur, br, yr, _r, mr, xr, vr, wr, kr, Er, Sr, Cr, $r, Tr, Br, Ir, Nr, Ar, Lr, Rr, Pr, Mr, Fr, Or, Dr, Vr, zr, Gr, Wr, Kr, qr, jr, Hr, Ur, Yr, Jr, Qr, Xr, Zr, eo, to, io, no, ro, oo, so, ao, lo, co, po, fo, go, ho, uo, bo, yo, _o, mo, xo, vo;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || ce, i = this._language === "en" ? "kW" : "кВт", n = ((hi = e.solar) == null ? void 0 : hi.pv_count) || ((bn = (un = e.solar) == null ? void 0 : un.strings) == null ? void 0 : bn.length) || 3;
    let r = 0, o = 0, s = !1;
    for (let m = 1; m <= n; m++) {
      const M = (_n = (yn = e.solar) == null ? void 0 : yn.strings) == null ? void 0 : _n[m - 1], P = (M == null ? void 0 : M.voltage_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_voltage` : ""), U = (M == null ? void 0 : M.current_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_current` : ""), L = (M == null ? void 0 : M.power_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_power` : "");
      if (this._getEntityState(L) || this._getEntityState(P) || this._getEntityState(U)) {
        s = !0;
        break;
      }
    }
    const a = [];
    for (let m = 1; m <= n; m++) {
      const M = this.shadowRoot.getElementById(`pvVal_${m}`), P = this.shadowRoot.getElementById(`pvVolt_${m}`), U = this.shadowRoot.getElementById(`pvCurr_${m}`), L = (xn = (mn = e.solar) == null ? void 0 : mn.strings) == null ? void 0 : xn[m - 1], we = (L == null ? void 0 : L.voltage_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_voltage` : ""), te = (L == null ? void 0 : L.current_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_current` : ""), me = (L == null ? void 0 : L.power_entity) || (m <= 3 ? `sensor.deye_12k_inverter_pv${m}_power` : ""), pe = this._getEntityState(we), Fe = this._getEntityState(te), se = this._getEntityState(me);
      let xe = 0, Se = 0, ae = 0;
      se ? ae = this._formatPower(se).kw : pe && Fe ? ae = pe.val * Fe.val / 1e3 : pe ? ae = 0 : ae = s ? 0 : 4, pe ? xe = pe.val : xe = s ? 0 : 380 + m * 4.5, Fe ? Se = Fe.val : se && xe > 0 ? Se = ae * 1e3 / xe : Se = s ? 0 : 3.12 + m * 0.28, r += ae, o += Se, a.push({ kw: ae, v: xe, a: Se }), M && (M.innerText = `${ae.toFixed(3)} ${i}`), P && (P.innerText = `${xe.toFixed(1)} V`), U && (U.innerText = `${Se.toFixed(2)} A`);
      const de = this.shadowRoot.getElementById(`pvMetrics_${m}`);
      if (de) {
        const Et = ((vn = e.solar) == null ? void 0 : vn.show_metrics) !== !1, St = !!(pe || Fe || !s || L != null && L.voltage_entity || L != null && L.current_entity || xe > 0 || Se > 0);
        de.style.display = Et && St ? "flex" : "none";
      }
      const Ke = (L == null ? void 0 : L.capacity_kw) !== void 0 ? parseFloat(L.capacity_kw) : (L == null ? void 0 : L.installed_power) !== void 0 ? parseFloat(L.installed_power) : s ? 0 : 4, vt = Ke > 0 && ae > 0 ? Math.min(100, Math.round(ae / Ke * 100)) : 0, Gt = this.shadowRoot.getElementById(`pvCapVal_${m}`), wt = this.shadowRoot.getElementById(`pvPercent_${m}`), kt = this.shadowRoot.getElementById(`pvCap_${m}`);
      Gt && (Ke > 0 ? (Gt.innerText = Ke.toFixed(1).replace(".", ","), wt && (wt.innerText = `(${vt}%)`, wt.style.color = vt >= 70 ? "#34d399" : vt >= 30 ? "#fbbf24" : "#94a3b8"), kt && (kt.style.display = "flex")) : kt && (kt.style.display = "none"));
    }
    const l = this._getEntityState((wn = e.solar) == null ? void 0 : wn.total_power_entity);
    let c = 0;
    l ? c = this._formatPower(l).kw : c = r;
    let d = ((kn = e.solar) == null ? void 0 : kn.installed_power) !== void 0 ? parseFloat(e.solar.installed_power) : 0;
    if (isNaN(d) || d <= 0) {
      let m = 0;
      for (let M = 0; M < n; M++) {
        const P = (Sn = (En = e.solar) == null ? void 0 : En.strings) == null ? void 0 : Sn[M], U = (P == null ? void 0 : P.capacity_kw) !== void 0 ? parseFloat(P.capacity_kw) : (P == null ? void 0 : P.installed_power) !== void 0 ? parseFloat(P.installed_power) : 0;
        !isNaN(U) && U > 0 && (m += U);
      }
      d = m > 0 ? m : s ? 0 : 12;
    }
    const y = d > 0 ? c / d * 100 : 0, h = Math.min(100, Math.max(0, y)), w = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${c.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${c.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge.title = this._language === "en" ? `Total PV current: ${o.toFixed(2)} A` : `Сумарний струм СЕС: ${o.toFixed(2)} A`), this._nodes.totalPvPercentBadge && (d > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(h)}%`, this._nodes.totalPvPercentBadge.style.color = h >= 70 ? "#34d399" : h >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = h >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (d > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${h.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = h >= 70 ? "#34d399" : h >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${d.toFixed(1).replace(".", ",")} ${w})`)) : o > 0 && ((Cn = e.solar) == null ? void 0 : Cn.show_metrics) !== !1 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${o.toFixed(2)} A`, this._nodes.totalPvCapDetail.style.color = "#34d399"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = this._language === "en" ? "(current)" : "(струм)")) : this._nodes.totalPvSubline.style.display = "none");
    const u = this._getEntityState(($n = e.solar) == null ? void 0 : $n.daily_yield_entity), b = u ? u.val : s ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = b.toFixed(1);
    const _ = ((Tn = e.solar) == null ? void 0 : Tn.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = _.toFixed(1);
    const k = Math.min(100, Math.round(b / _ * 100));
    this._nodes.solarProgressBar.style.width = `${k}%`;
    const g = this._getEntityState((Bn = e.inverter) == null ? void 0 : Bn.power_entity);
    this._nodes.inverterPowerVal && ((In = e.inverter) != null && In.power_entity && g ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(g, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const p = this._getEntityState((Nn = e.inverter) == null ? void 0 : Nn.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = p ? p.val.toFixed(2) : "41,20";
    const f = this._getEntityState((An = e.inverter) == null ? void 0 : An.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = f ? f.val.toFixed(2) : "38,40";
    const S = this._getEntityState((Ln = e.inverter) == null ? void 0 : Ln.voltage_entity);
    this._nodes.inverterVolt.innerText = S ? S.val.toFixed(2) : "231,45";
    const x = this._getEntityState((Rn = e.inverter) == null ? void 0 : Rn.current_entity);
    this._nodes.inverterCurrent.innerText = x ? x.val.toFixed(2) : "8,60";
    const C = this._getEntityState((Pn = e.inverter) == null ? void 0 : Pn.frequency_entity);
    this._nodes.inverterFreq.innerText = C ? C.val.toFixed(2) : "50,01";
    const $ = ((Mn = e.wind) == null ? void 0 : Mn.show) !== !1 || ((Fn = e.aux) == null ? void 0 : Fn.type) === "wind", v = this.shadowRoot.getElementById("windStationContainer"), I = this._nodes.auxNode;
    let Y = 0;
    if (v)
      if (!$)
        v.classList.add("hidden");
      else {
        v.classList.remove("hidden");
        const m = ((On = e.wind) == null ? void 0 : On.turbine_count) || ((Vn = (Dn = e.wind) == null ? void 0 : Dn.turbines) == null ? void 0 : Vn.length) || 2, M = ((zn = e.wind) == null ? void 0 : zn.turbines) || [];
        let P = 0, U = 0, L = !1, we = !1;
        for (let se = 0; se < m; se++) {
          const xe = M[se] || {
            power_entity: `sensor.wind_turbine_${se + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((Gn = e.wind) == null ? void 0 : Gn.animation_threshold) || 50
          }, Se = this.shadowRoot.getElementById(`turbinePower_${se + 1}`), ae = this.shadowRoot.getElementById(`turbineStatus_${se + 1}`), de = this.shadowRoot.getElementById(`turbineIcon_${se + 1}`), Ke = this.shadowRoot.getElementById(`turbineCard_${se + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${se + 1}`);
          const vt = this.shadowRoot.getElementById(`turbineDailyVal_${se + 1}`), Gt = this.shadowRoot.getElementById(`turbineMonthlyVal_${se + 1}`), wt = this.shadowRoot.getElementById(`turbineEnergyFooter_${se + 1}`), kt = this._hass ? 0 : se === 0 ? 1.56 : 0.22, Et = this._getEntityState(xe.power_entity), St = this._formatPower(Et, kt);
          Se && (Se.innerText = St.str), Y += St.kw;
          let Wt = St.kw * 1e3;
          Et && Et.unit === "W" && (Wt = Et.val);
          const Qt = xe.animation_threshold ?? ((Wn = e.wind) == null ? void 0 : Wn.animation_threshold) ?? 50, gt = de == null ? void 0 : de.querySelector(".turbine-rotor"), Xt = xe.rpm_entity || xe.speed_entity || ((Kn = e.wind) == null ? void 0 : Kn.rpm_entity) || ((qn = e.wind) == null ? void 0 : qn.speed_entity) || (se === 0 ? "sensor.wind_rpm" : "");
          let fe = Xt && ((jn = this._hass) != null && jn.states[Xt]) ? this._getEntityState(Xt) : null;
          if (!fe && se === 0 && ((Hn = this._hass) != null && Hn.states["sensor.wind_rpm"]) && (fe = this._getEntityState("sensor.wind_rpm")), Wt >= Qt || fe && typeof fe.val == "number" && fe.val > 0) {
            gt && gt.classList.add("spinning"), Ke && (Ke.classList.add("glow-wind"), Ke.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const nt = ((Un = e.wind) == null ? void 0 : Un.max_power) || 3e3, Ti = ((Yn = e.wind) == null ? void 0 : Yn.max_rpm) || 600;
            let Zt = 0;
            fe && typeof fe.val == "number" && fe.val > 0 ? Zt = Math.min(1, Math.max(0, fe.val / Ti)) : Zt = Math.min(1, Math.max(0, (Wt - Qt) / (nt - Qt)));
            const De = (3.2 - Zt * 2.75).toFixed(2);
            gt && gt.style.setProperty("--turbine-speed", `${De}s`), ae && (ae.innerText = this._t("wind_gen"), ae.style.color = "#67e8f9");
          } else
            gt && gt.classList.remove("spinning"), Ke && (Ke.classList.remove("glow-wind"), Ke.style.borderColor = "rgba(255, 255, 255, 0.08)"), ae && (ae.innerText = this._t("wind_calm"), ae.style.color = "#94a3b8");
          const $t = this.shadowRoot.getElementById(`turbineRpmBox_${se + 1}`);
          if ($t)
            if (fe && fe.raw !== "unavailable" && fe.raw !== "unknown" && typeof fe.val == "number" && !isNaN(fe.val)) {
              $t.style.display = "inline";
              const Ti = fe.unit ? fe.unit : "RPM";
              $t.innerHTML = `<span id="turbineRpmVal_${se + 1}">${Math.round(fe.val)}</span> ${Ti}`;
            } else
              $t.style.display = "none";
          const Oe = this._getEntityState(xe.daily_energy_entity), tt = this._getEntityState(xe.monthly_energy_entity);
          vt && (vt.innerText = Oe && typeof Oe.val == "number" && !isNaN(Oe.val) ? Oe.val.toFixed(2) : "0.00"), Gt && (Gt.innerText = tt && typeof tt.val == "number" && !isNaN(tt.val) ? tt.val.toFixed(1) : "0.0");
          const it = !!(xe.daily_energy_entity || xe.monthly_energy_entity);
          wt && (wt.style.display = it ? "flex" : "none"), Oe && typeof Oe.val == "number" && !isNaN(Oe.val) && (P += Oe.val, L = !0), tt && typeof tt.val == "number" && !isNaN(tt.val) && (U += tt.val, we = !0);
        }
        const te = this.shadowRoot.getElementById("windTotalDailyVal"), me = this.shadowRoot.getElementById("windTotalMonthlyVal"), pe = this._getEntityState((Jn = e.wind) == null ? void 0 : Jn.daily_energy_entity), Fe = this._getEntityState((Qn = e.wind) == null ? void 0 : Qn.monthly_energy_entity);
        te && (pe && typeof pe.val == "number" && !isNaN(pe.val) ? te.innerText = pe.val.toFixed(2) : L ? te.innerText = P.toFixed(2) : te.innerText = "0.00"), me && (Fe && typeof Fe.val == "number" && !isNaN(Fe.val) ? me.innerText = Fe.val.toFixed(1) : we ? me.innerText = U.toFixed(1) : me.innerText = "0.0");
      }
    let H = 0;
    if (I)
      if (((Xn = e.aux) == null ? void 0 : Xn.type) === "none" || ((Zn = e.aux) == null ? void 0 : Zn.type) === "wind")
        I.classList.add("hidden");
      else {
        I.classList.remove("hidden");
        const m = this._getEntityState((er = e.aux) == null ? void 0 : er.power_entity), M = this._hass ? 0 : 2, P = this._formatPower(m, M);
        H = P.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = P.str);
        const U = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let L = (tr = e.aux) == null ? void 0 : tr.title;
        ((ir = e.aux) == null ? void 0 : ir.type) === "microinverter" && (!L || L === "Вітрогенератор") ? L = "Мікроінвертор" : (nr = e.aux) != null && nr.type && U[e.aux.type] && (!L || L === "Вітрогенератор") ? L = U[e.aux.type] : L || (L = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = L), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = be[(rr = e.aux) == null ? void 0 : rr.type] || be.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((or = e.aux) == null ? void 0 : or.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), I.style.borderColor = "rgba(192, 132, 252, 0.45)", I.style.background = "rgba(88, 28, 135, 0.35)", I.classList.remove("glow-wind"), I.classList.add("glow-aux");
      }
    const j = this.shadowRoot.getElementById("nonEssentialNode"), le = !!((sr = e.grid) != null && sr.show_non_essential && ((ar = e.grid) != null && ar.non_essential_power_entity)) || ((lr = e.grid) == null ? void 0 : lr.show_non_essential) !== !1 && !!((dr = e.grid) != null && dr.non_essential_power_entity);
    let E = 0;
    if (j)
      if (le) {
        j.classList.remove("hidden");
        const m = this._getEntityState(e.grid.non_essential_power_entity), M = this._formatPower(m, 0);
        E = M.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = M.str);
      } else
        j.classList.add("hidden");
    const T = this.shadowRoot.getElementById("carNode"), A = !!((cr = e.grid) != null && cr.show_car && ((pr = e.grid) != null && pr.car_power_entity)) || ((fr = e.grid) == null ? void 0 : fr.show_car) !== !1 && !!((gr = e.grid) != null && gr.car_power_entity);
    let B = 0;
    if (T)
      if (A) {
        T.classList.remove("hidden");
        const m = this._getEntityState(e.grid.car_power_entity), M = this._formatPower(m, 0);
        B = M.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = M.str);
      } else
        T.classList.add("hidden");
    let R = 0;
    (((hr = e.load) == null ? void 0 : hr.subloads) || []).forEach((m, M) => {
      const P = this.shadowRoot.getElementById(`subloadVal_${M}`), U = this._getEntityState(m.entity), L = this._formatPower(U, 0);
      R += L.kw, P && (P.innerText = L.str);
    });
    const ee = this._getEntityState((ur = e.battery) == null ? void 0 : ur.soc_entity), ne = ee ? ee.val : 80;
    this._nodes.masterBatterySoc.innerText = `${ne.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const ge = this._getEntityState((br = e.battery) == null ? void 0 : br.power_entity), J = this._getEntityState((yr = e.battery) == null ? void 0 : yr.current_entity), ve = ge ? ge.unit === "W" ? ge.val / 1e3 : ge.val : 0, W = ((_r = e.battery) == null ? void 0 : _r.power_sign) || ((mr = e.battery) != null && mr.invert_power ? "standard" : "deye");
    let z = !1, N = !1;
    const Q = Math.abs(ve);
    Q >= 0.02 ? W === "deye" ? ve < 0 ? z = !0 : N = !0 : ve > 0 ? z = !0 : N = !0 : J && Math.abs(J.val) >= 0.3 && (W === "deye" ? J.val < 0 ? z = !0 : N = !0 : J.val > 0 ? z = !0 : N = !0), this._isCharging = z, this._isDischarging = N;
    const X = z ? Q : 0, qe = N ? Q : 0;
    if (this._nodes.masterBatteryFlowHint) {
      let m = this._t("bat_idle"), M = "#94a3b8";
      z ? (m = this._t("bat_dir_charge"), M = "#34d399") : N && (m = this._t("bat_dir_discharge"), M = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${Q.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${M}; font-weight: 700; font-size: 14px;">${m}</span>`;
    }
    const je = this._getEntityState((xr = e.battery) == null ? void 0 : xr.voltage_entity), Ht = je ? je.val.toFixed(2) : "53.24", Ut = J ? J.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${Ht.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${Ut.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((vr = e.battery) == null ? void 0 : vr.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const m = ((wr = e.battery) == null ? void 0 : wr.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${m}%`;
    }
    let Re = this._getEntityState((kr = e.load) == null ? void 0 : kr.essential_power_entity);
    !Re && (!((Er = e.load) != null && Er.essential_power_entity) || ((Sr = e.load) == null ? void 0 : Sr.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((Cr = e.load) == null ? void 0 : Cr.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (Re = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const ze = Re && typeof Re.val == "number" && !isNaN(Re.val) ? Math.max(0, Re.unit === "W" ? Re.val / 1e3 : Re.val) : 0, It = !!(Re && ze > 0);
    let Be = null, He = !1, Pe = this._getEntityState(($r = e.grid) == null ? void 0 : $r.power_entity);
    if (!Pe) {
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
      for (const M of m) {
        const P = this._getEntityState(M);
        if (P && typeof P.val == "number" && !isNaN(P.val)) {
          Pe = P;
          break;
        }
      }
    }
    const lt = Pe ? Pe.unit === "W" ? Pe.val / 1e3 : Pe.val : 0, Ie = c + Y + (H > 0 ? H : 0) + qe;
    if ((Tr = e.grid) != null && Tr.external_power_entity) {
      const m = this._getEntityState(e.grid.external_power_entity);
      if (m && typeof m.val == "number" && !isNaN(m.val)) {
        const M = Math.abs(m.unit === "W" ? m.val / 1e3 : m.val), P = M < 0.03 && (X > 0.1 && Ie < 0.1 || lt > 0.1), U = X > 0.5 && Ie < 0.15 && M < X - 0.2;
        !P && !U && (Be = m, He = !0);
      }
    }
    if (!Be)
      if (Pe && lt > 0.05)
        Be = Pe, He = !1;
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
        ], M = this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power") || this._getEntityState("sensor.solarman_external_power_l1"), P = this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power") || this._getEntityState("sensor.solarman_external_power_l2"), U = this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power") || this._getEntityState("sensor.solarman_external_power_l3");
        let L = null;
        if (M && P && U && !isNaN(M.val) && !isNaN(P.val) && !isNaN(U.val)) {
          const we = (M.unit === "kW" ? M.val * 1e3 : M.val) + (P.unit === "kW" ? P.val * 1e3 : P.val) + (U.unit === "kW" ? U.val * 1e3 : U.val);
          L = { val: we, unit: "W", raw: String(we) };
        }
        if (!L)
          for (const we of m) {
            const te = this._getEntityState(we);
            if (te && typeof te.val == "number" && !isNaN(te.val)) {
              L = te;
              break;
            }
          }
        if (!L && ((Br = this._hass) != null && Br.states)) {
          const te = Object.keys(this._hass.states).find(
            (me) => /(external_power|external_ct|ct1_power|grid_external_power)/i.test(me) && !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(me)
          );
          if (te) {
            const me = this._getEntityState(te);
            me && typeof me.val == "number" && !isNaN(me.val) && (L = me);
          }
        }
        if (L) {
          const we = Math.abs(L.unit === "kW" ? L.val : L.val / 1e3), te = we < 0.03 && (X > 0.1 && Ie < 0.1 || lt > 0.1 && Ie < 0.1), me = X > 0.5 && Ie < 0.15 && we < X - 0.2;
          !te && !me && we > 0 && (Be = L, He = !0);
        }
        Be || (Be = Pe, He = !1);
      }
    const ke = Be ? Be.unit === "W" ? Be.val / 1e3 : Be.val : 0, yt = ((Ir = e.grid) == null ? void 0 : Ir.power_sign) || ((Nr = e.grid) != null && Nr.invert_power ? "inverted" : "deye"), Nt = ((Ar = e.grid) == null ? void 0 : Ar.selling_enabled) === !0, We = (((Lr = e.grid) == null ? void 0 : Lr.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, dt = this._getEntityState((Rr = e.grid) == null ? void 0 : Rr.status_entity), O = this._getEntityState(((Pr = e.grid) == null ? void 0 : Pr.voltage_entity) || ((Mr = e.inverter) == null ? void 0 : Mr.voltage_entity)), ye = ((Fr = e.grid) == null ? void 0 : Fr.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90;
    let oe = !0;
    if (dt) {
      const m = String(dt.raw || dt.val).toLowerCase();
      (m === "off" || m === "false" || m === "0" || m === "disconnected" || m === "offline" || m === "unavailable" || m === "unknown") && (oe = !1);
    } else O && typeof O.val == "number" && !isNaN(O.val) && O.val < ye && (oe = !1);
    const Ge = Ie < 0.15, Me = Ie < X + 0.05, ct = Ge || Me;
    let re = !1, _e = !1, q = 0;
    if (!oe)
      q = 0, re = !1, _e = !1;
    else {
      if (ct)
        q = Math.abs(ke), q >= We ? (_e = !0, re = !1) : (q = 0, _e = !1, re = !1);
      else if (He)
        q = Math.abs(ke), q >= We && (yt === "deye" ? ke < 0 ? re = !0 : _e = !0 : ke > 0 ? re = !0 : _e = !0);
      else if (yt === "deye") {
        if (ke > 0)
          q = ke, q >= We && (_e = !0);
        else if (ke < 0) {
          const P = Math.abs(ke), U = Math.max(0, P - ze);
          U >= We ? (q = U, re = !0) : (q = 0, re = !1);
        }
      } else if (ke < 0)
        q = Math.abs(ke), q >= We && (_e = !0);
      else if (ke > 0) {
        const P = Math.max(0, ke - ze);
        P >= We ? (q = P, re = !0) : (q = 0, re = !1);
      }
      if (((Or = e.grid) == null ? void 0 : Or.auto_calculate) !== !1 && _e && !He) {
        const P = Math.max(ze, R), U = X + P + E + B;
        P > 0.05 && U > Ie + q + 0.1 && (q = q + P);
      }
      if (ct) {
        const P = this._getEntityState((Dr = e.grid) == null ? void 0 : Dr.voltage_entity) || this._getEntityState((Vr = e.inverter) == null ? void 0 : Vr.voltage_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_voltage") || this._getEntityState("sensor.esp32_deye_inverter_grid_voltage") || this._getEntityState("sensor.deye_12k_inverter_grid_voltage"), U = this._getEntityState((zr = e.inverter) == null ? void 0 : zr.current_entity) || this._getEntityState((Gr = e.grid) == null ? void 0 : Gr.current_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_current") || this._getEntityState("sensor.inverter_12_kvt_current_l1") || this._getEntityState("sensor.esp32_deye_inverter_grid_current") || this._getEntityState("sensor.deye_12k_inverter_grid_current") || this._getEntityState("sensor.grid_current"), L = P && typeof P.val == "number" && !isNaN(P.val) ? P.val : 0, we = U && typeof U.val == "number" && !isNaN(U.val) ? U.val : 0, te = L >= ye && we >= 0.5, me = X > 0.1 && Ie < 0.1;
        if (te) {
          const ae = L * we / 1e3;
          (q < 0.05 || q < X - 0.05 || ae > q + 0.3) && (q = ae, _e = !0, re = !1);
        } else if (me && (q < 0.05 || q < X - 0.05)) {
          const ae = Math.max(ze, R), de = ae > 0 ? ae : 0.8;
          q = Math.max(q, X + 0.15 + de), _e = !0, re = !1;
        }
        const Fe = (((Wr = e.inverter) == null ? void 0 : Wr.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3, se = Math.max(ze, R), xe = X + se + E + B + Fe, Se = Math.max(0, xe - Ie);
        Se > 0.05 && q < Se - 0.1 && (q = Se, _e = !0, re = !1);
      }
      const M = Math.max(0, c + Y + (H > 0 ? H : 0) + qe - X - ze - E - B);
      ct || !Nt ? re = !1 : re && q > M + 0.1 && (q = M, q < We && (re = !1, q = 0));
    }
    const _t = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (oe ? (this._nodes.gridPowerVal.innerText = `${q.toFixed(3)} ${i}`, re ? this._nodes.gridPowerVal.style.color = "#34d399" : _e ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (oe ? re ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : _e ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), _t && (oe ? (_t.classList.add("glow-grid"), _t.style.borderColor = "rgba(56, 189, 248, 0.4)") : (_t.classList.remove("glow-grid"), _t.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const Je = this._getEntityState((Kr = e.grid) == null ? void 0 : Kr.import_daily_entity);
    this._nodes.gridImportDaily.innerText = Je ? `${Je.val.toFixed(2)} kWh` : "0.00 kWh";
    const Qe = this._getEntityState((qr = e.grid) == null ? void 0 : qr.export_daily_entity);
    this._nodes.gridExportDaily.innerText = Qe ? `${Qe.val.toFixed(2)} kWh` : "0.00 kWh";
    const _i = (jr = e.battery) == null ? void 0 : jr.charge_daily_entity;
    let Ne = this._getEntityState(_i);
    Ne || (Ne = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge"));
    const mi = Ne && typeof Ne.val == "number" ? Ne.val : 0;
    this._calculateTariffs(Je ? Je.val : 0, Qe ? Qe.val : 0, b, mi);
    const xi = _e ? q : 0, di = re ? q : 0, ci = c + Y + (H > 0 ? H : 0) + xi + qe, vi = X + di + E + B, pi = Math.max(0, ci - vi), pt = this._getEntityState((Hr = e.inverter) == null ? void 0 : Hr.self_consumption_entity), At = pt && typeof pt.val == "number" && !isNaN(pt.val) ? Math.max(0, pt.unit === "W" ? pt.val / 1e3 : pt.val) : null, Lt = (((Ur = e.inverter) == null ? void 0 : Ur.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
    let ot = 0, Xe = 0;
    if (It)
      if (ot = Math.max(R, ze), At !== null)
        Xe = At;
      else {
        const m = Math.max(0, ci - (X + di + ot + E + B));
        Xe = m > 0 ? m : Lt;
      }
    else
      At !== null ? Xe = At : Xe = Math.min(pi, Lt), ot = Math.max(R, Math.max(0, pi - Xe));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((Yr = e.inverter) == null ? void 0 : Yr.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", Xe < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(Xe * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${Xe.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${ot.toFixed(3)} ${i}`;
    const ft = this._getEntityState((Jr = e.load) == null ? void 0 : Jr.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = ft ? `${ft.val.toFixed(2)} kWh` : "12,40 kWh";
    const Rt = this._getEntityState(((Qr = e.solar) == null ? void 0 : Qr.autarky_entity) || "sensor.deye_inverter_daily_autarky"), Pt = this._getEntityState(((Xr = e.solar) == null ? void 0 : Xr.self_consumption_entity) || "sensor.deye_inverter_daily_self_consumption");
    let Mt = Rt && typeof Rt.val == "number" && !isNaN(Rt.val) ? Rt.val : null;
    if (Mt === null) {
      const m = ft && typeof ft.val == "number" && !isNaN(ft.val) ? ft.val : 12.4, M = Je && typeof Je.val == "number" && !isNaN(Je.val) ? Je.val : 0;
      m > 0.05 ? Mt = Math.min(100, Math.max(0, (m - M) / m * 100)) : Mt = 100;
    }
    let Ft = Pt && typeof Pt.val == "number" && !isNaN(Pt.val) ? Pt.val : null;
    if (Ft === null) {
      const m = Qe && typeof Qe.val == "number" && !isNaN(Qe.val) ? Qe.val : 0;
      b > 0.05 ? Ft = Math.min(100, Math.max(0, (b - m) / b * 100)) : Ft = 0;
    }
    this._nodes.autarkyVal && (this._nodes.autarkyVal.innerText = `${Math.round(Mt)}%`), this._nodes.selfConsVal && (this._nodes.selfConsVal.innerText = `${Math.round(Ft)}%`);
    const Ot = ((Zr = e.battery) == null ? void 0 : Zr.parallel_batteries) || ((to = (eo = e.battery) == null ? void 0 : eo.modules) == null ? void 0 : to.length) || 2;
    let Dt = 0;
    for (let m = 0; m < Ot; m++) {
      const M = ((no = (io = e.battery) == null ? void 0 : io.modules) == null ? void 0 : no[m]) || ((oo = (ro = e.battery) == null ? void 0 : ro.module_entities) == null ? void 0 : oo[m]) || {}, P = M.capacity_kwh !== void 0 ? parseFloat(M.capacity_kwh) : m === 0 ? 7.88 : m === 1 ? 5.12 : (((so = e.battery) == null ? void 0 : so.capacity_kwh) || 13) / Ot;
      Dt += isNaN(P) ? 0 : P;
    }
    Dt <= 0 && (Dt = parseFloat((ao = e.battery) == null ? void 0 : ao.capacity_kwh) || 13);
    const Yt = this._getEntityState(((lo = e.battery) == null ? void 0 : lo.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), Jt = Yt && !isNaN(Yt.val) ? Yt.val : null, mt = Jt !== null && Jt <= 40 ? Jt : Dt, fi = this._getEntityState(((co = e.battery) == null ? void 0 : co.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), wi = fi ? fi.val : 80, ki = mt * (wi / 100), gi = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${ki.toFixed(2).replace(".", ",")} ${gi} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${mt.toFixed(1).replace(".", ",")})</span></span>`);
    const he = this._getEntityState(((po = e.battery) == null ? void 0 : po.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), D = he ? he.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${D.toFixed(1).replace(".", ",")}`), Ne || (Ne = this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const K = (fo = e.battery) == null ? void 0 : fo.discharge_daily_entity;
    let G = this._getEntityState(K);
    G || (G = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = Ne ? `${Ne.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = G ? `${G.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const Ze = [], et = [];
    for (let m = 1; m <= Ot; m++) {
      const M = this.shadowRoot.getElementById(`batPackSoc_${m}`), P = this.shadowRoot.getElementById(`batPackVolt_${m}`), U = this.shadowRoot.getElementById(`batPackCurr_${m}`), L = this.shadowRoot.getElementById(`batPackPower_${m}`), we = this.shadowRoot.getElementById(`batPackTempVal_${m}`), te = this.shadowRoot.getElementById(`batPackDelta_${m}`), me = this.shadowRoot.getElementById(`batPackDeltaVal_${m}`), pe = this.shadowRoot.getElementById(`batPackStateTag_${m}`), Fe = this.shadowRoot.getElementById(`batPackKwh_${m}`), se = this.shadowRoot.getElementById(`batPackBar1_${m}`), xe = this.shadowRoot.getElementById(`batPackBar2_${m}`), Se = this.shadowRoot.getElementById(`batPackBar3_${m}`), ae = this.shadowRoot.getElementById(`batPackBar4_${m}`), de = ((ho = (go = e.battery) == null ? void 0 : go.modules) == null ? void 0 : ho[m - 1]) || ((bo = (uo = e.battery) == null ? void 0 : uo.module_entities) == null ? void 0 : bo[m - 1]) || {}, Ke = de.soc_entity || de.soc || `sensor.bms_rack${m}_soc`, vt = de.current_entity || `sensor.bms_rack${m}_current`, Gt = de.voltage_entity || de.volt || `sensor.bms_rack${m}_voltage`, wt = de.power_entity || `sensor.bms_rack${m}_power`, kt = de.temperature_entity || de.temp || `sensor.bms_rack${m}_temperature`, Et = de.cell_delta_entity || de.delta_entity || `sensor.bms_rack${m}_cell_delta`, St = this._getEntityState(Ke), Wt = this._getEntityState(vt), Qt = this._getEntityState(Gt), gt = this._getEntityState(wt), Xt = this._getEntityState(kt);
      let fe = this._getEntityState(Et);
      if (fe || (fe = this._getEntityState(`sensor.bms_rack${m}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${m}_cell_difference`)), !fe && (de.max_cell_voltage_entity || de.min_cell_voltage_entity)) {
        const ht = this._getEntityState(de.max_cell_voltage_entity), Eo = this._getEntityState(de.min_cell_voltage_entity);
        if (ht && Eo) {
          const zi = Math.abs(ht.val - Eo.val);
          fe = { val: zi < 1 ? Math.round(zi * 1e3) : zi, unit: "mV" };
        }
      }
      const Ct = St ? St.val : m === 1 ? 82 : m === 2 ? 85 : 75, $t = Qt ? Qt.val : m === 1 ? 54.1 : m === 2 ? 54 : 52.4, Oe = Wt ? Wt.val : m === 1 ? 18.4 : m === 2 ? 25.2 : 8.2, tt = Xt ? Xt.val : m === 1 ? 36.5 : m === 2 ? 21 : 22.5;
      let it = null;
      if (fe) {
        let ht = fe.val;
        ht < 1 && ht > 0 ? it = Math.round(ht * 1e3) : it = Math.round(ht);
      } else this._hass || (it = m === 1 ? 12 : m === 2 ? 8 : 15);
      let nt = 0;
      gt ? nt = Math.abs(this._formatPower(gt).kw) : nt = $t * Math.abs(Oe) / 1e3;
      const Zt = (de.capacity_kwh !== void 0 ? parseFloat(de.capacity_kwh) : m === 1 ? 7.88 : m === 2 ? 5.12 : mt / Ot) * (Ct / 100);
      M && (M.innerText = `${Ct.toFixed(0)}%`), P && (P.innerText = `${$t.toFixed(1).replace(".", ",")} V`), U && (U.innerText = `${Math.abs(Oe).toFixed(1).replace(".", ",")} A`), L && (L.innerText = `${nt.toFixed(2).replace(".", ",")} ${i}`), we && (we.innerText = `${tt.toFixed(1).replace(".", ",")}`), me && (it !== null && !isNaN(it) ? (me.innerText = `${it} mV`, te && (te.style.display = "inline-flex", it <= 25 ? (te.style.color = "#34d399", te.style.background = "rgba(52, 211, 153, 0.12)", te.style.borderColor = "rgba(52, 211, 153, 0.3)") : it <= 50 ? (te.style.color = "#fbbf24", te.style.background = "rgba(251, 191, 36, 0.12)", te.style.borderColor = "rgba(251, 191, 36, 0.3)") : (te.style.color = "#f87171", te.style.background = "rgba(248, 113, 113, 0.16)", te.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : te && (te.style.display = "none")), Fe && (Fe.innerText = `~${Zt.toFixed(2).replace(".", ",")} ${gi}`);
      let De = !1;
      N ? De = !1 : z ? De = !0 : Wt ? De = (((yo = e.battery) == null ? void 0 : yo.power_sign) || "deye") === "deye" ? Oe < 0 : Oe > 0 : De = Oe < 0;
      const Kt = this.shadowRoot.getElementById(`batBranchBadge_${m}`);
      Kt && (nt < 0.02 ? (Kt.className = "es-bat-branch-badge es-mono idle", Kt.innerHTML = `<span>0.00 ${i}</span>`) : De ? (Kt.className = "es-bat-branch-badge es-mono charge", Kt.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (Kt.className = "es-bat-branch-badge es-mono discharge", Kt.innerHTML = `<span>${nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const Tt = this.shadowRoot.getElementById(`batPackCard_${m}`), wo = Tt == null ? void 0 : Tt.querySelector(".es-battery-gauge"), ko = Tt == null ? void 0 : Tt.querySelector(".es-battery-gauge-nipple");
      Tt && (Tt.style.borderColor = De ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), wo && (wo.style.borderColor = De ? "#10b981" : "#ef4444"), ko && (ko.style.background = De ? "#10b981" : "#ef4444"), pe && (De ? (pe.className = "es-bat-state-tag charge", pe.innerText = this._t("bat_charge"), pe.style.color = "#34d399", pe.style.background = "rgba(16, 185, 129, 0.18)", pe.style.borderColor = "rgba(16, 185, 129, 0.4)") : (pe.className = "es-bat-state-tag discharge", pe.innerText = this._t("bat_discharge"), pe.style.color = "#f87171", pe.style.background = "rgba(239, 68, 68, 0.18)", pe.style.borderColor = "rgba(239, 68, 68, 0.4)")), L && (L.style.color = De ? "#34d399" : "#f87171"), U && (U.style.color = De ? "#38bdf8" : "#f87171");
      const Bi = De ? "active-green" : "active-red";
      se && xe && Se && ae && (se.className = `es-bat-bar ${Ct >= 10 ? Bi : ""}`, xe.className = `es-bat-bar ${Ct >= 35 ? Bi : ""}`, Se.className = `es-bat-bar ${Ct >= 65 ? Bi : ""}`, ae.className = `es-bat-bar ${Ct >= 85 ? Bi : ""}`), Ze.push({ kwNum: nt, isChg: De }), et.push({ soc: Math.round(Ct), volt: $t, curr: Oe, temp: tt, delta: it, kw: nt, kwh: Zt });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      oe ? q : 0,
      re,
      _e,
      c,
      ot,
      Q,
      z,
      N,
      B,
      Ze,
      E,
      R,
      H
    ), this._updateControlSliders();
    const xt = typeof O < "u" && (O == null ? void 0 : O.val) || typeof sMainsVolt < "u" && (sMainsVolt == null ? void 0 : sMainsVolt.val) || typeof S < "u" && (S == null ? void 0 : S.val) || 220, Vt = typeof x < "u" && (x == null ? void 0 : x.val) || typeof sMainsCurr < "u" && (sMainsCurr == null ? void 0 : sMainsCurr.val) || 0, zt = typeof p < "u" && (p == null ? void 0 : p.val) || (typeof acTempNum < "u" ? acTempNum : 41.2), Ei = typeof f < "u" && (f == null ? void 0 : f.val) || (typeof dcTempNum < "u" ? dcTempNum : 34.5), Si = typeof C < "u" && (C == null ? void 0 : C.val) || 50, Ci = typeof je < "u" && (je == null ? void 0 : je.val) || 54.64, $i = typeof J < "u" && (J == null ? void 0 : J.val) || 0;
    this._update3DRealisticView({
      unitStr: i,
      totalSolarKw: c,
      totalPvPct: typeof h < "u" ? h : 0,
      dailySolarKwh: typeof b < "u" ? b : 0,
      solarSavingsUah: (typeof b < "u" ? b : 0) * (((_o = e.tariffs) == null ? void 0 : _o.day_rate) || 4.32),
      pvStrings: typeof a < "u" ? a : [],
      totalWindKw: typeof Y < "u" ? Y : 0,
      wt1Kw: typeof turbine1Kw < "u" ? turbine1Kw : 0,
      wt1Rpm: typeof turbine1Rpm < "u" ? turbine1Rpm : 95,
      wt2Kw: typeof turbine2Kw < "u" ? turbine2Kw : 0,
      wt2Rpm: typeof turbine2Rpm < "u" ? turbine2Rpm : 0,
      windMonthlyKwh: typeof totalTurbinesMonthly < "u" ? totalTurbinesMonthly : 0.7,
      isBlackout: !(!(typeof oe < "u") || oe) || xt < (((mo = e.grid) == null ? void 0 : mo.voltage_threshold) || 90),
      gridKw: typeof q < "u" ? q : 0,
      isImport: !!(!(typeof _e < "u") || _e),
      isExport: !!(typeof re < "u" && re),
      gridVolt: xt,
      gridCurrent: Vt,
      costSplitStr: ((vo = (xo = this._nodes) == null ? void 0 : xo.gridCostSplitVal) == null ? void 0 : vo.innerText) || "",
      inverterKw: typeof invKwNum < "u" ? invKwNum : 0,
      inverterAcTemp: zt,
      inverterDcTemp: Ei,
      inverterFreq: Si,
      inverterSelfWatts: typeof dynamicSelfConsWatts < "u" ? dynamicSelfConsWatts : typeof Lt < "u" ? Lt * 1e3 : 100,
      masterSoc: typeof socNum < "u" ? socNum : 50,
      batKw: typeof batKwNum < "u" ? batKwNum : 0,
      isBatCharging: !!(typeof z < "u" && z),
      isBatDischarging: !!(typeof N < "u" && N),
      batVolt: Ci,
      batCurrent: $i,
      batTemp: typeof D < "u" ? D : 25,
      totalCapacityKwh: typeof mt < "u" ? mt : 28.8,
      storedKwh: typeof batStoredEnergyKwh < "u" ? batStoredEnergyKwh : 16.42,
      dailyChargeKwh: typeof Ne < "u" && (Ne == null ? void 0 : Ne.val) || 0,
      dailyDischargeKwh: typeof G < "u" && (G == null ? void 0 : G.val) || 0,
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
    var e, i, n, r, o, s, a, l, c;
    try {
      const d = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!d) return;
      const y = d.getBoundingClientRect();
      if (y.width === 0 || y.height === 0) return;
      const h = this._config || ce, w = this._scale || 1, u = (E, T = 0.5, A = 0.5) => {
        if (!E) return null;
        const B = E.getBoundingClientRect();
        return {
          x: Math.round((B.left - y.left + B.width * T) / w),
          y: Math.round((B.top - y.top + B.height * A) / w)
        };
      }, b = (E, T, A) => {
        const B = this.shadowRoot.getElementById(E), R = this.shadowRoot.getElementById(T);
        B && B.setAttribute("d", A || ""), R && R.setAttribute("d", A || "");
      }, _ = this.shadowRoot.getElementById("gridNode"), k = this.shadowRoot.getElementById("inverterNode"), g = this.shadowRoot.getElementById("essentialNode"), p = this.shadowRoot.getElementById("totalPvPowerBadge"), f = this.shadowRoot.getElementById("masterBatteryHub"), S = this.shadowRoot.getElementById("carNode");
      if (_ && k) {
        const E = _.getBoundingClientRect(), T = k.getBoundingClientRect();
        if (E.bottom < T.top + 30) {
          const B = u(_, 0.7, 1), R = u(k, 0.2, 0);
          if (B && R) {
            const ee = Math.round((B.y + R.y) / 2), ne = `M ${B.x} ${B.y} C ${B.x} ${ee}, ${R.x} ${ee}, ${R.x} ${R.y}`;
            b("pathGridInvBase", "pathGridInvFlow", ne);
          }
        } else {
          const B = Math.round((T.top - y.top + T.height * 0.55) / w), R = Math.round((E.right - y.left) / w), ee = Math.round((T.left - y.left) / w), ne = Math.round((E.top - y.top + E.height * 0.5) / w);
          let ge = "";
          if (Math.abs(ne - B) <= 8)
            ge = `M ${R} ${B} L ${ee} ${B}`;
          else {
            const J = Math.round(R + 24);
            ge = `M ${R} ${ne} C ${J} ${ne}, ${J} ${B}, ${ee} ${B}`;
          }
          b("pathGridInvBase", "pathGridInvFlow", ge);
        }
      }
      if (k && g) {
        const E = g.getBoundingClientRect(), T = k.getBoundingClientRect();
        if (E.bottom < T.top + 30) {
          const B = u(k, 0.8, 0), R = u(g, 0.3, 1);
          if (B && R) {
            const ee = Math.round((B.y + R.y) / 2), ne = `M ${B.x} ${B.y} C ${B.x} ${ee}, ${R.x} ${ee}, ${R.x} ${R.y}`;
            b("pathInvLoadBase", "pathInvLoadFlow", ne);
          }
        } else {
          const B = Math.round((T.top - y.top + T.height * 0.55) / w), R = Math.round((T.right - y.left) / w), ee = Math.round((E.left - y.left) / w), ne = Math.round((E.top - y.top + E.height * 0.5) / w);
          let ge = "";
          if (Math.abs(ne - B) <= 8)
            ge = `M ${R} ${B} L ${ee} ${B}`;
          else {
            const J = Math.round(ee - 24);
            ge = `M ${R} ${B} C ${J} ${B}, ${J} ${ne}, ${ee} ${ne}`;
          }
          b("pathInvLoadBase", "pathInvLoadFlow", ge);
        }
      }
      if (p && k) {
        const E = u(p, 0.5, 1), T = u(k, 0.5, 0);
        if (E && T) {
          const A = `M ${E.x} ${E.y} L ${T.x} ${T.y}`;
          b("pathSolarInvBase", "pathSolarInvFlow", A);
        }
      }
      if (k && f) {
        const E = u(k, 0.5, 1), T = u(f, 0.5, 0);
        if (E && T) {
          const A = `M ${E.x} ${E.y} L ${T.x} ${T.y}`;
          b("pathInvBatBase", "pathInvBatFlow", A);
        }
      }
      const x = this.shadowRoot.getElementById("nonEssentialNode"), C = x && !x.classList.contains("hidden") && x.offsetHeight > 0, $ = S && !S.classList.contains("hidden") && S.offsetHeight > 0;
      if (_ && C) {
        const E = u(_, 0.5, 1), T = u(x, 0.5, 0);
        if (E && T) {
          const A = `M ${E.x} ${E.y} L ${T.x} ${T.y}`;
          b("pathGridNonEssBase", "pathGridNonEssFlow", A);
        }
      } else
        b("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if ($) {
        const E = C ? x : _;
        if (E) {
          const T = u(E, 0.5, 1), A = u(S, 0.5, 0);
          if (T && A) {
            const B = `M ${T.x} ${T.y} L ${A.x} ${A.y}`;
            b("pathNonEssCarBase", "pathNonEssCarFlow", B);
          }
        } else
          b("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        b("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const v = this.shadowRoot.getElementById("subloadsBusContainer");
      if (g && v) {
        const E = u(g, 0.5, 1), T = u(v, 0.5, 0);
        if (E && T) {
          const A = `M ${E.x} ${E.y} L ${T.x} ${T.y}`;
          b("pathLoadSubloadsBase", "pathLoadSubloadsFlow", A);
        }
      } else
        b("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const I = this.shadowRoot.getElementById("auxNode");
      if (k && I && !I.classList.contains("hidden") && I.offsetHeight > 0) {
        const E = u(I, 0.35, 1), T = u(k, 0.9, 0);
        if (E && T) {
          const A = Math.round((E.y + T.y) / 2), B = `M ${E.x} ${E.y} C ${E.x} ${A}, ${T.x} ${A}, ${T.x} ${T.y}`;
          b("pathInvAuxBase", "pathInvAuxFlow", B);
        }
      } else
        b("pathInvAuxBase", "pathInvAuxFlow", "");
      b("pathBatStemBase", "pathBatStemFlow", "");
      const Y = this.shadowRoot.getElementById("windStationContainer"), j = ((i = h.wind) == null ? void 0 : i.show) !== !1 || ((n = h.aux) == null ? void 0 : n.type) === "wind" ? ((r = h.wind) == null ? void 0 : r.turbine_count) || ((s = (o = h.wind) == null ? void 0 : o.turbines) == null ? void 0 : s.length) || 2 : 0;
      for (let E = 1; E <= 4; E++)
        if (E <= j && Y && !Y.classList.contains("hidden")) {
          const T = this.shadowRoot.getElementById(`turbineCard_${E}`);
          if (T && f) {
            const A = u(T, 0.5, 1), B = j === 1 ? 0.5 : 0.28 + (E - 1) / (j - 1) * 0.44, R = u(f, B, 0);
            if (A && R) {
              const ee = `M ${A.x} ${A.y} L ${R.x} ${R.y}`;
              b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, ee);
            }
          } else
            b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
        } else
          b(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
      const le = ((a = h.battery) == null ? void 0 : a.parallel_batteries) || ((c = (l = h.battery) == null ? void 0 : l.modules) == null ? void 0 : c.length) || 2;
      for (let E = 1; E <= 8; E++) {
        const T = this.shadowRoot.getElementById(`batPackCard_${E}`), A = this.shadowRoot.getElementById(`batBranchBadge_${E}`);
        if (E <= le && f && T) {
          const B = u(f, 0.5, 1), R = u(T, 0.5, 0);
          if (B && R) {
            const ee = Math.round(B.y + (R.y - B.y) * 0.45);
            let ne = "";
            Math.abs(B.x - R.x) <= 4 ? ne = `M ${B.x} ${B.y} L ${R.x} ${R.y}` : ne = `M ${B.x} ${B.y} C ${B.x} ${ee}, ${R.x} ${ee}, ${R.x} ${R.y}`, b(`pathBat${E}Base`, `pathBat${E}Flow`, ne), A && (A.style.left = `${R.x}px`, A.style.top = `${ee}px`, A.style.display = "flex");
          } else
            b(`pathBat${E}Base`, `pathBat${E}Flow`, ""), A && (A.style.display = "none");
        } else
          b(`pathBat${E}Base`, `pathBat${E}Flow`, ""), A && (A.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, i, n, r, o;
    try {
      const s = this._config || ce, a = this._scale || 1, l = this.shadowRoot.getElementById("solarBusSvg"), c = ((e = s.solar) == null ? void 0 : e.pv_count) || ((n = (i = s.solar) == null ? void 0 : i.strings) == null ? void 0 : n.length) || 3;
      if (l && c > 0) {
        const h = l.getBoundingClientRect(), w = this.shadowRoot.getElementById("pvPanel_1"), u = this.shadowRoot.getElementById(`pvPanel_${c}`), b = this.shadowRoot.getElementById("solarBusBase"), _ = this.shadowRoot.getElementById("solarFlowCollector"), k = this.shadowRoot.getElementById("solarBusStemBase"), g = this.shadowRoot.getElementById("solarBusStemFlow"), p = this.shadowRoot.getElementById("solarBusFeeders");
        if (w && u && h.width > 0) {
          const f = w.getBoundingClientRect(), S = u.getBoundingClientRect(), x = Math.round((f.left - h.left + f.width / 2) / a), C = Math.round((S.left - h.left + S.width / 2) / a), $ = 13, v = Math.round((x + C) / 2);
          if (b && (b.setAttribute("x1", x), b.setAttribute("y1", $), b.setAttribute("x2", C), b.setAttribute("y2", $)), _ && (_.setAttribute("x1", x), _.setAttribute("y1", $), _.setAttribute("x2", C), _.setAttribute("y2", $)), k && (k.setAttribute("x1", v), k.setAttribute("y1", $), k.setAttribute("x2", v), k.setAttribute("y2", 26)), g && (g.setAttribute("x1", v), g.setAttribute("y1", $), g.setAttribute("x2", v), g.setAttribute("y2", 26)), p) {
            let I = "";
            for (let Y = 1; Y <= c; Y++) {
              const H = this.shadowRoot.getElementById(`pvPanel_${Y}`);
              if (H) {
                const j = H.getBoundingClientRect(), le = Math.round((j.left - h.left + j.width / 2) / a);
                I += `
                  <line x1="${le}" y1="0" x2="${le}" y2="${$}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${le}" y1="0" x2="${le}" y2="${$}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            p.innerHTML = I;
          }
        }
      }
      const d = this.shadowRoot.getElementById("subloadsBusSvg"), y = ((o = (r = s.load) == null ? void 0 : r.subloads) == null ? void 0 : o.length) || 3;
      if (d && y > 0) {
        const h = d.getBoundingClientRect(), w = this.shadowRoot.getElementById("subloadCard_0"), u = this.shadowRoot.getElementById(`subloadCard_${y - 1}`), b = this.shadowRoot.getElementById("essentialNode"), _ = this.shadowRoot.getElementById("subloadsBusBase"), k = this.shadowRoot.getElementById("subloadsFlowCollector"), g = this.shadowRoot.getElementById("subloadsBusStemBase"), p = this.shadowRoot.getElementById("subloadsBusStemFlow"), f = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (w && u && h.width > 0) {
          const S = w.getBoundingClientRect(), x = u.getBoundingClientRect(), C = Math.round((S.left - h.left + S.width / 2) / a), $ = Math.round((x.left - h.left + x.width / 2) / a), v = 13;
          let I = Math.round((C + $) / 2);
          if (b) {
            const j = b.getBoundingClientRect();
            I = Math.round((j.left - h.left + j.width / 2) / a);
          }
          const Y = Math.min(C, I), H = Math.max($, I);
          if (_ && (_.setAttribute("x1", Y), _.setAttribute("y1", v), _.setAttribute("x2", H), _.setAttribute("y2", v)), k && (k.setAttribute("x1", Y), k.setAttribute("y1", v), k.setAttribute("x2", H), k.setAttribute("y2", v)), g && (g.setAttribute("x1", I), g.setAttribute("y1", 0), g.setAttribute("x2", I), g.setAttribute("y2", v)), p && (p.setAttribute("x1", I), p.setAttribute("y1", 0), p.setAttribute("x2", I), p.setAttribute("y2", v)), f) {
            let j = "";
            for (let le = 0; le < y; le++) {
              const E = this.shadowRoot.getElementById(`subloadCard_${le}`);
              if (E) {
                const T = E.getBoundingClientRect(), A = Math.round((T.left - h.left + T.width / 2) / a);
                j += `
                  <line x1="${A}" y1="${v}" x2="${A}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${A}" y1="${v}" x2="${A}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            f.innerHTML = j;
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
    const s = n ? "flow-reverse" : "flow-forward", a = n ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${i} ${s}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", r), e.style.animation = `${a} ${r} linear infinite`;
  }
  _updateFlowAnimations(e, i, n, r, o, s, a, l, c, d = [], y = 0, h = 0, w = 0) {
    var Re, ze, It, Be, He, Pe, lt, Ie, ke, yt, Nt, We, dt;
    const u = this._config || ce, b = ((Re = u.animations) == null ? void 0 : Re.enabled) !== !1, _ = ((ze = u.animations) == null ? void 0 : ze.speed) || 1.2, k = (O, ye = 10) => {
      const oe = Math.abs(O);
      if (oe < 0.05) return "2.5s";
      const Ge = Math.min(1, oe / ye);
      return `${Math.max(0.4, (2.6 - Ge * 1.9) * (_ / 1.2)).toFixed(2)}s`;
    }, g = this.shadowRoot.getElementById("pathGridInvFlow"), p = Math.abs(e), f = (((It = u.grid) == null ? void 0 : It.min_power_threshold) !== void 0 ? u.grid.min_power_threshold : 50) / 1e3, S = ((Be = u.grid) == null ? void 0 : Be.selling_enabled) === !0, x = b && p >= f && (n || i && S);
    this._applyFlowAnimation(g, "flow-grid", i, k(e, 10), x);
    const C = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(C, "flow-solar", !1, k(r, 12), b && r >= 0.05);
    const $ = this.shadowRoot.getElementById("pathInvLoadFlow"), v = Math.abs(o);
    this._applyFlowAnimation($, "flow-load", !1, k(o, 10), b && v >= 0.05);
    const I = this.shadowRoot.getElementById("pathInvBatFlow"), Y = Math.abs(s), H = b && Y >= 0.02 && (a || l), j = a ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(I, j, l, k(s, 8), H);
    const le = this.shadowRoot.getElementById("pathGridNonEssFlow"), E = Math.abs(y);
    this._applyFlowAnimation(le, "flow-grid", !1, k(y, 5), b && E >= 0.05);
    const T = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), A = Math.abs(c);
    this._applyFlowAnimation(T, "flow-car", !1, k(c, 7), b && A >= 0.05);
    const B = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), R = Math.abs(h || o);
    this._applyFlowAnimation(B, "flow-load", !1, k(R, 8), b && R >= 0.05);
    const ee = this.shadowRoot.getElementById("pathInvAuxFlow"), ne = Math.abs(w);
    this._applyFlowAnimation(ee, "flow-aux", !0, k(w, 5), b && ne >= 0.05);
    const ge = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(ge, j, l, k(s, 8), H);
    const J = this.shadowRoot.getElementById("solarFlowCollector"), ve = this.shadowRoot.getElementById("solarBusStemFlow");
    if (J)
      if (!b || r < 0.05)
        J.style.opacity = "0.2", J.style.animation = "none", ve && (ve.style.opacity = "0.2", ve.style.animation = "none");
      else {
        const O = k(r, 12);
        J.style.opacity = "1", J.setAttribute("class", "flow-line"), J.style.animation = `esDashflow ${O} linear infinite`, ve && (ve.style.opacity = "1", ve.setAttribute("class", "flow-line"), ve.style.animation = `esDashflow ${O} linear infinite`);
      }
    const W = this.shadowRoot.getElementById("subloadsFlowCollector"), z = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (W)
      if (!b || R < 0.05)
        W.style.opacity = "0.2", W.style.animation = "none", z && (z.style.opacity = "0.2", z.style.animation = "none");
      else {
        const O = k(R, 8);
        W.style.opacity = "1", W.setAttribute("class", "flow-line"), W.style.animation = `esDashflow ${O} linear infinite`, z && (z.style.opacity = "1", z.setAttribute("class", "flow-line"), z.style.animation = `esDashflow ${O} linear infinite`);
      }
    const N = this.shadowRoot.getElementById("batteryFlowCollector"), Q = this.shadowRoot.getElementById("batteryBusStemFlow"), Te = this.shadowRoot.getElementById("batteryBusFeeders"), X = l ? "#f87171" : "#34d399", qe = l ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (N)
      if (N.style.stroke = X, N.style.filter = qe, Q && (Q.style.stroke = X, Q.style.filter = qe), !b || !H)
        N.style.opacity = "0.2", N.style.animation = "none", Q && (Q.style.opacity = "0.2", Q.style.animation = "none");
      else {
        const O = k(s, 8), ye = l ? "esDashflowRev" : "esDashflow";
        N.style.opacity = "1", N.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), N.style.animation = `${ye} ${O} linear infinite`, Q && (Q.style.opacity = "1", Q.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), Q.style.animation = `${ye} ${O} linear infinite`);
      }
    Te && Te.querySelectorAll("line").forEach((O) => {
      if (O.style.stroke = X, O.style.filter = qe, !b || !H)
        O.style.opacity = "0.2", O.style.animation = "none";
      else {
        const ye = k(s, 8), oe = l ? "esDashflowRev" : "esDashflow";
        O.style.opacity = "1", O.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), O.style.animation = `${oe} ${ye} linear infinite`;
      }
    });
    for (let O = 1; O <= 8; O++) {
      const ye = this.shadowRoot.getElementById(`pathBat${O}Flow`);
      if (!ye) continue;
      const oe = d[O - 1], Ge = oe ? oe.kwNum : 0, Me = b && (Ge >= 0.02 || H), ct = l;
      this._applyFlowAnimation(ye, j, ct, k(Ge || s, 8), Me);
    }
    for (let O = 0; O < 6; O++) {
      const ye = this.shadowRoot.getElementById(`pathSubload${O}Flow`);
      if (!ye) continue;
      const oe = (Pe = (He = u.load) == null ? void 0 : He.subloads) == null ? void 0 : Pe[O], Ge = oe ? this._getEntityState(oe.entity) : null, Me = Ge ? this._formatPower(Ge, 2).kw : O === 0 ? 2 : O === 1 ? 3 : 4;
      this._applyFlowAnimation(ye, "flow-load", !1, k(Me, 8), b && Me >= 0.05);
    }
    const je = ((lt = u.wind) == null ? void 0 : lt.show) !== !1 || ((Ie = u.aux) == null ? void 0 : Ie.type) === "wind", Ht = je ? ((ke = u.wind) == null ? void 0 : ke.turbine_count) || ((Nt = (yt = u.wind) == null ? void 0 : yt.turbines) == null ? void 0 : Nt.length) || 2 : 0, Ut = ((We = u.wind) == null ? void 0 : We.turbines) || [];
    for (let O = 1; O <= 4; O++) {
      const ye = this.shadowRoot.getElementById(`pathTurbine${O}Flow`);
      if (ye)
        if (O <= Ht && je) {
          const oe = Ut[O - 1] || {}, Ge = this._hass ? 0 : O === 1 ? 1.45 : 0.85, Me = this._getEntityState(oe.power_entity || `sensor.wind_turbine_${O}_power`);
          let re = this._formatPower(Me, Ge).kw * 1e3;
          Me && Me.unit === "W" && (re = Me.val);
          const _e = oe.animation_threshold ?? ((dt = u.wind) == null ? void 0 : dt.animation_threshold) ?? 50, q = re >= _e;
          this._applyFlowAnimation(ye, "flow-wind", !1, k(re / 1e3, 3), b && q);
        } else
          this._applyFlowAnimation(ye, "flow-wind", !1, "1.5s", !1);
    }
  }
  _update3DRealisticView(e) {
    var ve;
    const i = this.shadowRoot;
    if (!i) return;
    const n = (W, z, N) => {
      const Q = i.getElementById(W);
      Q && (Q.textContent = z, N && Q.setAttribute("fill", N));
    }, r = (W, z) => {
      const N = i.getElementById(W);
      N && (N.innerText = z);
    }, o = e.totalSolarKw || 0;
    r("pvTotalVal", `${o.toFixed(3)} ${e.unitStr}`);
    const s = i.getElementById("pvStatusText");
    if (s)
      if (o <= 0)
        s.innerText = this._language === "en" ? "No generation (night)" : "Генерації зараз немає (ніч)";
      else {
        const W = e.totalPvPct ? Math.round(e.totalPvPct) : 0;
        s.innerText = this._language === "en" ? `Active generation (${W}%)` : `Активна генерація (${W}%)`;
      }
    for (let W = 1; W <= 3; W++) {
      const z = ((ve = e.pvStrings) == null ? void 0 : ve[W - 1]) || { kw: 0 }, N = z.kw >= 1 ? `${z.kw.toFixed(2)} кВт` : `${Math.round(z.kw * 1e3)} Вт`;
      r(`pv${W}Val`, N);
    }
    const a = i.getElementById("pulseSolar3d");
    a && (a.style.opacity = o > 0.05 ? "1" : "0.08");
    const l = e.totalWindKw || 0;
    r("windTotalVal", `${l.toFixed(3)} ${e.unitStr}`);
    const c = i.getElementById("windStatusText");
    c && (l > 0.05 ? c.innerText = this._language === "en" ? `Generation · ${e.wt1Rpm || 180} RPM` : `Генерація · ${e.wt1Rpm || 180} RPM` : c.innerText = this._language === "en" ? "Calm · 95 RPM" : "Штиль · 95 RPM"), r("wt1Power", `${(e.wt1Kw || 0).toFixed(3)} ${e.unitStr}`), r("wt2Power", `${(e.wt2Kw || 0).toFixed(3)} ${e.unitStr}`), r("wt1Rpm", `${e.wt1Rpm || 95} rpm`), r("wt2Rpm", (e.wt2Kw || 0) > 5e-3 ? `${e.wt2Rpm || 120} rpm` : this._language === "en" ? "Calm" : "Штиль");
    const d = i.getElementById("rotorSpin1"), y = i.getElementById("rotorSpin2");
    d && (d.className = (e.wt1Kw || 0) > 0.5 ? "rotor-spin-fast" : (e.wt1Kw || 0) > 0.05 ? "rotor-spin-normal" : "rotor-spin-slow"), y && (y.className = (e.wt2Kw || 0) > 0.3 ? "rotor-spin-normal" : "rotor-spin-slow");
    const h = i.getElementById("pulseWind3d");
    h && (h.style.opacity = l > 0.02 ? "1" : "0.15");
    const w = !!e.isBlackout, u = e.gridKw || 0;
    r("gridPowerVal3d", `${u.toFixed(3)} ${e.unitStr}`);
    const b = i.getElementById("gridFlowDir3d"), _ = i.getElementById("gridStatusBadge"), k = i.getElementById("pulseGrid3d");
    w ? (b && (b.innerText = this._language === "en" ? "DISCONNECTED (BLACKOUT)" : "ВІДКЛЮЧЕНО (БЛЕКАУТ)"), _ && (_.innerText = this._language === "en" ? "⚠️ Grid Offline" : "⚠️ Мережа знеструмлена", _.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse flex-shrink-0"), k && (k.style.opacity = "0.05")) : (b && (e.isExport ? b.innerText = this._language === "en" ? "← EXPORT TO GRID" : "← ЕКСПОРТ В МЕРЕЖУ" : e.isImport ? b.innerText = this._language === "en" ? "→ IMPORT FROM GRID" : "→ ІМПОРТ З МЕРЕЖІ" : b.innerText = this._language === "en" ? "Zero Export Balance" : "Баланс (Нульовий експорт)"), _ && (_.innerText = this._language === "en" ? "Grid Stable" : "Живлення стабільне", _.className = "text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0"), k && (k.style.opacity = e.isImport || e.isExport ? "1" : "0.15", e.isExport ? k.classList.add("pulse-reverse") : k.classList.remove("pulse-reverse"))), r("gridVolt3d", `${(e.gridVolt || 220).toFixed(1)} V`), r("gridCurrent3d", `${(e.gridCurrent || 0).toFixed(1)} A`);
    const g = i.getElementById("invScreenLed"), p = i.getElementById("invWorkBadge"), f = e.inverterKw || o + l + u;
    w ? (n("invScreenPower", `${(e.houseKw || 1.5).toFixed(2)} kW`, "#f43f5e"), n("invScreenStatus", "ISLAND · EPS MODE", "#fb7185"), g && g.setAttribute("fill", "#ef4444"), p && (p.className = "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 flex items-center gap-1.5 animate-pulse", p.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> АВТОНОМІЯ (EPS)')) : (n("invScreenPower", `${Math.max(0.1, f).toFixed(2)} kW`, "#38bdf8"), o > 0.5 && l > 0.1 ? n("invScreenStatus", "SOLAR + WIND", "#fbbf24") : e.isBatCharging ? n("invScreenStatus", "ON-GRID · CHARGE", "#34d399") : n("invScreenStatus", "ON-GRID · NORMAL", "#38bdf8"), g && g.setAttribute("fill", "#10b981"), p && (p.className = "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5", p.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> ПРАЦЮЄ')), r("invAcTemp3d", `${(e.inverterAcTemp || 41.2).toFixed(1)} °C`), r("invDcTemp3d", `${(e.inverterDcTemp || 34.5).toFixed(1)} °C`), r("invFreq3d", `${(e.inverterFreq || 50).toFixed(2)} Hz`), r("invSelf3d", `${Math.round(e.inverterSelfWatts || 100)} Вт`);
    const S = !!(e.isBatDischarging || w), x = i.getElementById("cardBattery"), C = i.getElementById("batMasterStatusDot"), $ = i.getElementById("batMasterTitle"), v = i.getElementById("batMasterPower"), I = i.getElementById("batMasterSoc"), Y = i.getElementById("batPredictionBanner"), H = i.getElementById("batPredictionTitle"), j = i.getElementById("batTimerVal"), le = i.getElementById("batSubTimer"), E = i.getElementById("batBusCurrent3d"), T = i.getElementById("pulseBat1_3d"), A = i.getElementById("pulseBat2_3d"), B = Math.abs(e.batKw || 0), R = Math.round(e.masterSoc || 50);
    if (S) {
      if (x && (x.className = "xl:col-span-7 glass-card rounded-2xl p-4 md:p-5 card-discharge-glow flex flex-col justify-between transition-all"), C && (C.className = "w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"), $ && ($.className = "text-xs uppercase tracking-wider font-extrabold text-red-400"), v && (v.className = "text-rose-400 text-sm font-black transition-colors", v.innerText = `${B.toFixed(3)} кВт ↑ (РОЗРЯД)`), I && (I.className = "text-rose-400 font-black transition-colors", I.innerText = `${R}%`), Y && (Y.className = "bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-900 p-3 rounded-xl border border-rose-500/50 mb-3 flex flex-wrap items-center justify-between gap-3 transition-all"), H && (H.innerText = this._language === "en" ? "ESTIMATED AUTONOMY (TO EMPTY):" : "ОЧІКУВАНА АВТОНОМІЯ (ДО РОЗРЯДУ):", H.className = "text-[10px] text-rose-300 uppercase font-bold tracking-wider"), j) {
        j.className = "text-xl md:text-2xl font-black text-rose-400 font-mono tracking-tight transition-all drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]";
        const W = B > 0.05 ? (e.storedKwh || 16.4) / B : (e.storedKwh || 16.4) / (e.houseKw || 1.5), z = Math.floor(W), N = Math.round((W - z) * 60);
        j.innerText = `~ ${z} год ${N} хв`;
      }
      le && (le.innerHTML = `Автономність будинку при навантаженні <b>${(e.houseKw || 1.5).toFixed(1)} кВт</b> (живить EPS)`), E && (E.className = "font-bold text-rose-400 transition-colors", E.innerText = `+${Math.abs(e.batCurrent || 0).toFixed(1)} A (Розряд)`), this._updateRackDischargeUi(1, e.rack1, "#f43f5e", "#fb7185"), this._updateRackDischargeUi(2, e.rack2, "#f43f5e", "#fb7185"), T && (T.setAttribute("stroke", "url(#gradBatDischarge)"), T.style.filter = "drop-shadow(0 0 8px #ef4444)", T.style.opacity = "1", T.classList.add("pulse-reverse")), A && (A.setAttribute("stroke", "url(#gradBatDischarge)"), A.style.filter = "drop-shadow(0 0 8px #ef4444)", A.style.opacity = "1", A.classList.add("pulse-reverse"));
    } else {
      if (x && (x.className = "xl:col-span-7 glass-card rounded-2xl p-4 md:p-5 card-3d-glow border-emerald-500/20 flex flex-col justify-between transition-all"), C && (C.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"), $ && ($.className = "text-xs uppercase tracking-wider font-extrabold text-emerald-400"), v && (v.className = "text-emerald-300 text-sm transition-colors", v.innerText = `${B.toFixed(3)} кВт ↓ (Заряд)`), I && (I.className = "text-emerald-400 font-bold transition-colors", I.innerText = `${R}%`), Y && (Y.className = "bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 p-3 rounded-xl border border-emerald-500/30 mb-3 flex flex-wrap items-center justify-between gap-3 transition-all"), H && (H.innerText = this._language === "en" ? "ESTIMATED TIME TO FULL CHARGE:" : "РОЗРАХУНОК ДО ПОВНОЇ ЗАРЯДКИ:", H.className = "text-[10px] text-slate-400 uppercase font-bold tracking-wider"), j) {
        j.className = "text-xl md:text-2xl font-black text-emerald-300 font-mono tracking-tight transition-all";
        const W = e.totalCapacityKwh || 28.8, z = e.storedKwh || 16.4, N = Math.max(0, W - z), Q = B > 0.1 ? B : 3.5, Te = N / Q, X = Math.floor(Te), qe = Math.round((Te - X) * 60);
        j.innerText = `~ ${String(X).padStart(2, "0")}:${String(qe).padStart(2, "0")}:00`;
      }
      le && (le.innerHTML = `Запас енергії: <b>~${(e.storedKwh || 16.42).toFixed(2)} кВт·год</b> (автономність будинку ~ 16.5 год)`), E && (E.className = "font-bold text-emerald-300 transition-colors", E.innerText = `${(e.batCurrent || -7.24).toFixed(2)} A`), this._updateRackChargeUi(1, e.rack1, "#10b981", "#34d399", "url(#rackDoorGlow1)"), this._updateRackChargeUi(2, e.rack2, "#059669", "#34d399", "url(#rackDoorGlow2)"), T && (T.setAttribute("stroke", "url(#gradBat1)"), T.style.filter = "drop-shadow(0 0 6px #10b981)", T.style.opacity = "1", T.classList.remove("pulse-reverse")), A && (A.setAttribute("stroke", "url(#gradBat2)"), A.style.filter = "drop-shadow(0 0 6px #059669)", A.style.opacity = "1", A.classList.remove("pulse-reverse"));
    }
    r("batBusVolt3d", `${(e.batVolt || 54.64).toFixed(2)} V`);
    const ee = e.houseKw || 0.95;
    r("houseTotalVal3d", `${ee.toFixed(3)} ${e.unitStr}`);
    const ne = i.getElementById("pulseHouse3d");
    ne && (ne.style.opacity = ee > 0.05 ? "1" : "0.15");
    const ge = e.boilerKw || 0;
    r("boilerVal3d", `${ge.toFixed(3)} ${e.unitStr}`);
    const J = i.getElementById("boilerStatusBadge3d");
    J && (w ? (J.innerText = this._t("boiler_off_blackout"), J.className = "text-[10px] text-slate-400 font-sans") : ge > 0.1 ? (J.innerText = this._t("boiler_heating"), J.className = "text-[10px] text-emerald-400 font-sans font-bold") : (J.innerText = this._t("boiler_idle"), J.className = "text-[10px] text-slate-500 font-sans"));
  }
  _updateRackDischargeUi(e, i, n, r) {
    const o = this.shadowRoot, s = o.getElementById(`rack${e}Card`), a = o.getElementById(`rack${e}Door`), l = o.getElementById(`rack${e}ScreenBorder`), c = o.getElementById(`rack${e}SocBadge`), d = o.getElementById(`rack${e}Title`), y = o.getElementById(`rack${e}PowerVal`), h = o.getElementById(`rack${e}Volt`), w = o.getElementById(`rack${e}Temp`), u = o.getElementById(`rack${e}Delta`), b = o.getElementById(`rack${e}Kwh`);
    s && (s.className = "bg-slate-900/90 rounded-xl p-3 border border-rose-500/50 hover:border-rose-400/80 transition-all shadow-lg flex items-center gap-3.5"), a && (a.setAttribute("stroke", "#ef4444"), a.setAttribute("fill", "url(#rackDoorGlowRed)")), l && l.setAttribute("stroke", n);
    const _ = (i == null ? void 0 : i.soc) !== void 0 ? i.soc : e === 1 ? 76 : 72, k = (i == null ? void 0 : i.kw) !== void 0 ? Math.abs(i.kw) : e === 1 ? 0.6 : 0.55, g = (p, f, S) => {
      const x = o.getElementById(p);
      x && (x.textContent = f, S && x.setAttribute("fill", S));
    };
    g(`rack${e}SocDisplay`, `${_}%`, r), g(`rack${e}PowerDisplay`, `${k.toFixed(2)} кВт ↑`, n), d && (d.className = "font-bold text-xs text-rose-400 font-sans"), c && (c.className = "text-xs px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold border border-rose-500/30", c.innerText = `${_}%`), y && (y.className = "font-bold text-rose-400 text-sm", y.innerText = `${k.toFixed(2)} кВт ↑ (розряд)`), h && (h.innerText = `${((i == null ? void 0 : i.volt) || 52.8).toFixed(1)} V`), w && (w.innerText = `${((i == null ? void 0 : i.temp) || (e === 1 ? 31 : 18.2)).toFixed(1)} °C`), u && (u.innerText = `Δ${(i == null ? void 0 : i.delta) || (e === 1 ? 12 : 18)} mV`), b && (b.innerText = `~${((i == null ? void 0 : i.kwh) || (e === 1 ? 10.64 : 10.08)).toFixed(2)} кВт·г`);
    for (let p = 1; p <= 3; p++) {
      const f = o.getElementById(`rack${e}Mod${p}Led`);
      f && f.setAttribute("fill", n);
    }
  }
  _updateRackChargeUi(e, i, n, r, o) {
    const s = this.shadowRoot, a = s.getElementById(`rack${e}Card`), l = s.getElementById(`rack${e}Door`), c = s.getElementById(`rack${e}ScreenBorder`), d = s.getElementById(`rack${e}SocBadge`), y = s.getElementById(`rack${e}Title`), h = s.getElementById(`rack${e}PowerVal`), w = s.getElementById(`rack${e}Volt`), u = s.getElementById(`rack${e}Temp`), b = s.getElementById(`rack${e}Delta`), _ = s.getElementById(`rack${e}Kwh`);
    a && (a.className = "bg-slate-900/90 rounded-xl p-3 border border-emerald-500/30 shadow-lg flex items-center gap-3.5 transition-all"), l && (l.setAttribute("stroke", n), l.setAttribute("fill", o)), c && c.setAttribute("stroke", r);
    const k = (i == null ? void 0 : i.soc) !== void 0 ? i.soc : e === 1 ? 77 : 72, g = (i == null ? void 0 : i.kw) !== void 0 ? Math.abs(i.kw) : e === 1 ? 1.4 : 1.79, p = (f, S, x) => {
      const C = s.getElementById(f);
      C && (C.textContent = S, x && C.setAttribute("fill", x));
    };
    p(`rack${e}SocDisplay`, `${k}%`, r), p(`rack${e}PowerDisplay`, `${g.toFixed(2)} кВт ↓`, "#a7f3d0"), y && (y.className = "font-bold text-xs text-emerald-400 font-sans"), d && (d.className = "text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold", d.innerText = `${k}%`), h && (h.className = "font-bold text-emerald-300 text-sm", h.innerText = `${g.toFixed(2)} кВт ↓`), w && (w.innerText = `${((i == null ? void 0 : i.volt) || (e === 1 ? 54.2 : 54.1)).toFixed(1)} V`), u && (u.innerText = `${((i == null ? void 0 : i.temp) || (e === 1 ? 39.2 : 17)).toFixed(1)} °C`), b && (b.innerText = `Δ${(i == null ? void 0 : i.delta) || (e === 1 ? 13 : 27)} mV`), _ && (_.innerText = `~${((i == null ? void 0 : i.kwh) || (e === 1 ? 10.78 : 11.52)).toFixed(2)} кВт·г`);
    for (let f = 1; f <= 3; f++) {
      const S = s.getElementById(`rack${e}Mod${f}Led`);
      S && S.setAttribute("fill", n);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", Td);
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", Es);
window.customCards = window.customCards || [];
window.customCards.some((t) => t.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", Es);
export {
  Es as EnergyStationPanel
};
