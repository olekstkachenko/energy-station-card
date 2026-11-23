var Ya = Object.defineProperty;
var Ka = (t, e, i) => e in t ? Ya(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var ht = (t, e, i) => Ka(t, typeof e != "symbol" ? e + "" : e, i);
const ie = {
  title: "Energy Station",
  view_mode: "3d",
  // '3d' | '2d'
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
    selling_enabled: !0,
    // чи продає станція в мережу (Зелений тариф / Net billing). За замовчуванням увімкнено!
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
  },
  // 7. Power Outage Schedule (Графік відключень світла)
  outages: {
    show: !0,
    region: "kyiv-region",
    // 'kyiv-region' (Київська обл.) | 'kyiv' | 'dnipro' | 'odesa'
    group: "6.1",
    // Група / Черга (напр. 6.1)
    source: "auto",
    // 'auto' | 'json' | 'ha_entity'
    status_entity: "",
    // Опціональний сенсор HA (Svitlo Yeah / Svitlo Live)
    next_outage_entity: "",
    // Опціональний сенсор наступного відключення HA
    next_power_entity: "",
    // Опціональний сенсор наступного увімкнення HA
    grid_voltage_entity: "sensor.breaker_phase_a_voltage",
    // Зовнішній сенсор вхідної напруги (якщо є напруга — мережа є)
    grid_voltage_threshold: 90
    // Поріг напруги (В), вище якого мережа вважається наявною
  }
}, Ce = 'width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"', $e = {
  sun: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  pv_panel: `<svg ${Ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg ${Ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg ${Ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  settings: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg ${Ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  globe: `<svg ${Ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
function Ja() {
  return `
    /* ========================================================================== */
    /* 3D REALISTIC HARDWARE STATION STYLES                                       */
    /* ========================================================================== */
    @keyframes conduitFlow {
      from { stroke-dashoffset: 40; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes conduitFlowReverse {
      from { stroke-dashoffset: 0; }
      to { stroke-dashoffset: 40; }
    }
    @keyframes rotorSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes beaconPulse {
      0%, 100% { opacity: 0.3; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 10px #ef4444); }
    }
    @keyframes sunGlow {
      0%, 100% { filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.4)); }
      50% { filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.8)); }
    }

    .es-3d-station-container {
      position: relative;
      background: radial-gradient(circle at 50% 30%, #0c142c 0%, #050814 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 24px 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      margin-top: 14px;
      box-sizing: border-box;
      color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .es-3d-conduit-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }

    .conduit-base {
      stroke: rgba(255, 255, 255, 0.08);
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }

    .conduit-flow {
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 8 12;
      fill: none;
      animation: conduitFlow 1.2s linear infinite;
    }

    .conduit-flow-rev {
      animation: conduitFlowReverse 1.2s linear infinite;
    }

    .rotor-spinning {
      transform-origin: 100px 92px;
      animation: rotorSpin 1.6s linear infinite;
    }

    .rotor-idle {
      transform-origin: 100px 92px;
    }

    .beacon-light {
      animation: beaconPulse 1.4s ease-in-out infinite;
    }

    .sun-flare {
      animation: sunGlow 3s ease-in-out infinite;
    }

    .glow-cyan { filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.6)); }
    .glow-amber { filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.6)); }
    .glow-green { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.6)); }
    .glow-red { filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.75)); }
    .glow-blue { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6)); }

    /* 3D Hardware Cards & Grid */
    .es-3d-grid-top {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
      position: relative;
      z-index: 20;
    }

    .es-3d-card {
      background: rgba(15, 23, 42, 0.82);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    .es-3d-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 16px 32px -6px rgba(0, 0, 0, 0.7);
    }

    .es-3d-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .es-3d-title-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .es-3d-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .es-3d-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #cbd5e1;
    }

    .es-3d-badge {
      font-size: 11px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 6px;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    .es-3d-main-power {
      font-size: 26px;
      font-weight: 900;
      font-family: 'JetBrains Mono', Consolas, monospace;
      color: #ffffff;
      line-height: 1.1;
      margin-top: 4px;
      text-align: center;
    }

    .es-3d-substatus {
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      margin-top: 3px;
    }

    /* Sub-metrics horizontal grids */
    .es-3d-subgrid {
      display: grid;
      gap: 8px;
      margin-top: 14px;
      padding-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .es-3d-metric-box {
      background: rgba(2, 6, 23, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 8px;
      text-align: center;
    }

    .es-3d-metric-label {
      font-size: 11px;
      color: #94a3b8;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .es-3d-metric-val {
      font-size: 13px;
      font-weight: 700;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    .es-3d-metric-sub {
      font-size: 10px;
      color: #64748b;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }

    /* CENTER INVERTER */
    .es-3d-inverter-center {
      margin: 28px auto;
      max-width: 580px;
      position: relative;
      z-index: 20;
    }

    .es-3d-inverter-card {
      background: linear-gradient(180deg, #0f172a 0%, #090e1f 100%);
      border: 1px solid rgba(6, 182, 212, 0.35);
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(6, 182, 212, 0.12);
    }

    /* BOTTOM ROW */
    .es-3d-grid-bottom {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      position: relative;
      z-index: 20;
    }

    /* BATTERY DISCHARGE RED HIGHLIGHTS */
    .es-3d-card-bat-discharge {
      border-color: rgba(239, 68, 68, 0.55) !important;
      box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.8), 0 0 24px rgba(239, 68, 68, 0.25) !important;
    }

    /* RESPONSIVE LAYOUT FOR MOBILE */
    @media (max-width: 860px) {
      .es-3d-grid-top {
        grid-template-columns: 1fr;
      }
      .es-3d-grid-bottom {
        grid-template-columns: 1fr;
      }
      .es-3d-conduit-svg {
        display: none; /* Hide SVG background conduits on narrow screens to prevent overlap */
      }
    }
  `;
}
function Qa(t, e) {
  var i, n;
  return `
    <div class="es-3d-station-container" id="station3DContainer">
      <div class="es-3d-stage" style="position: relative;">
      <!-- SVG CONDUIT LAYER (Exact Port-to-Port Connections) -->
      <svg class="es-3d-conduit-svg" id="station3DConduits" viewBox="0 0 1200 860" preserveAspectRatio="none">
        <defs>
          <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#fbbf24" />
          </linearGradient>
          <linearGradient id="windGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#38bdf8" />
          </linearGradient>
          <linearGradient id="gridGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#60a5fa" />
          </linearGradient>
        </defs>

        <!-- 1. SOLAR -> INVERTER CONDUIT -->
        <g id="conduitSolar3D">
          <path class="conduit-base" d="M 290 190 H 510 C 530 190, 545 205, 545 225 V 360" />
          <path class="conduit-flow glow-amber" stroke="#f59e0b" d="M 290 190 H 510 C 530 190, 545 205, 545 225 V 360" />
        </g>

        <!-- 2. WIND -> INVERTER CONDUIT -->
        <g id="conduitWind3D">
          <path class="conduit-base" d="M 600 230 V 360" />
          <path class="conduit-flow glow-cyan" stroke="#06b6d4" d="M 600 230 V 360" />
        </g>

        <!-- 3. GRID <-> INVERTER CONDUIT -->
        <g id="conduitGrid3D">
          <path class="conduit-base" d="M 910 190 H 690 C 670 190, 655 205, 655 225 V 360" />
          <path id="flowGrid3D" class="conduit-flow glow-blue" stroke="#3b82f6" d="M 910 190 H 690 C 670 190, 655 205, 655 225 V 360" />
        </g>

        <!-- 4. BATTERY <-> INVERTER CONDUIT -->
        <g id="conduitBat3D">
          <path class="conduit-base" d="M 330 600 H 510 C 530 600, 545 585, 545 565 V 500" />
          <path id="flowBat3D" class="conduit-flow glow-green" stroke="#10b981" d="M 330 600 H 510 C 530 600, 545 585, 545 565 V 500" />
        </g>

        <!-- 5. INVERTER -> HOUSE CONDUIT -->
        <g id="conduitHouse3D">
          <path class="conduit-base" d="M 655 500 V 565 C 655 585, 670 600, 690 600 H 870" />
          <path class="conduit-flow glow-cyan" stroke="#00e5ff" d="M 655 500 V 565 C 655 585, 670 600, 690 600 H 870" />
        </g>

        <!-- 6. HOUSE -> BOILER SUB-CONDUIT -->
        <g id="conduitBoiler3D">
          <path class="conduit-base" d="M 990 700 V 745" />
          <path id="flowBoiler3D" class="conduit-flow glow-amber" stroke="#f59e0b" d="M 990 700 V 745" />
        </g>
      </svg>

      <!-- TOP ROW: SOLAR, WIND, GRID -->
      <div class="es-3d-grid-top">

        <!-- 1. SOLAR ARRAY 3D -->
        <div class="es-3d-card" id="solarCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #f59e0b;"></span>
              <span class="es-3d-title">${e("solar") || "Сонячні панелі"}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.3);" id="solarYieldToday3D">
              0.0 кВт·год
            </span>
          </div>

          <div style="padding: 12px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 240 140" style="width: 170px; height: 100px;">
              <polygon points="35,115 205,115 195,122 45,122" fill="#334155" stroke="#475569" stroke-width="1.5" />
              <line x1="50" y1="95" x2="45" y2="120" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
              <line x1="190" y1="95" x2="195" y2="120" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
              <line x1="120" y1="85" x2="120" y2="120" stroke="#64748b" stroke-width="2.5" />
              <polygon points="50,95 190,95 225,35 15,35" fill="#0f172a" stroke="#38bdf8" stroke-width="2" class="sun-flare" />
              <!-- Cell matrix -->
              <polygon points="22,39 70,39 67,56 26,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="73,39 121,39 120,56 70,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="124,39 172,39 173,56 123,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="175,39 218,39 220,56 176,56" fill="#0284c7" fill-opacity="0.75" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="27,60 67,60 64,76 30,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="70,60 120,60 119,76 67,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="123,60 173,60 174,76 122,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="176,60 219,60 216,76 177,76" fill="#0369a1" fill-opacity="0.85" stroke="#0284c7" stroke-width="0.8" />
              <polygon points="32,80 64,80 60,93 35,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="67,80 119,80 118,93 63,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="122,80 174,80 175,93 121,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <polygon points="177,80 215,80 210,93 178,93" fill="#075985" fill-opacity="0.95" stroke="#0369a1" stroke-width="0.8" />
              <!-- Glare -->
              <polygon points="100,36 170,36 140,94 80,94" fill="white" fill-opacity="0.12" />
            </svg>
          </div>

          <div class="es-3d-main-power" id="solarPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #f59e0b;" id="solarStatus3D">Генерації немає</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 1</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv1Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv1V3D">-- V · -- A</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 2</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv2Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv2V3D">-- V · -- A</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">PV 3</div>
              <div class="es-3d-metric-val" style="color: #fde047;" id="pv3Power3D">0 Вт</div>
              <div class="es-3d-metric-sub" id="pv3V3D">-- V · -- A</div>
            </div>
          </div>
        </div>

        <!-- 2. WIND GENERATION 3D -->
        <div class="es-3d-card" id="windCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #06b6d4;"></span>
              <span class="es-3d-title">${e("wind") || "Вітрогенерація"}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.12); color: #06b6d4; border: 1px solid rgba(6,182,212,0.3);">
              2 турбіни
            </span>
          </div>

          <div style="padding: 10px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 200 135" style="width: 150px; height: 100px;">
              <polygon points="96,92 104,92 107,130 93,130" fill="#475569" stroke="#334155" stroke-width="1" />
              <rect x="88" y="86" width="24" height="12" rx="4" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1.2" />
              <circle cx="100" cy="92" r="5" fill="#0f172a" stroke="#00e5ff" stroke-width="1.5" />
              <g class="rotor-spinning" id="windRotor3D">
                <path d="M 100 92 C 98 65, 96 40, 100 25 C 104 40, 102 65, 100 92 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8" />
                <path d="M 100 92 C 120 106, 142 120, 155 125 C 147 114, 126 98, 100 92 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8" />
                <path d="M 100 92 C 80 106, 58 120, 45 125 C 53 114, 74 98, 100 92 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8" />
              </g>
            </svg>
          </div>

          <div class="es-3d-main-power" id="windPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #38bdf8;" id="windStatus3D">Штиль</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 2px;">
                <span style="color: #94a3b8;">1500W</span>
                <span style="color: #38bdf8;" id="turb1Rpm3D">0 rpm</span>
              </div>
              <div class="es-3d-metric-val" style="color: #38bdf8;" id="turb1Power3D">0.000 кВт</div>
            </div>
            <div class="es-3d-metric-box">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 2px;">
                <span style="color: #94a3b8;">Херсонець</span>
                <span style="color: #94a3b8;" id="turb2Status3D">Штиль</span>
              </div>
              <div class="es-3d-metric-val" style="color: #38bdf8;" id="turb2Power3D">0.000 кВт</div>
            </div>
          </div>
        </div>

        <!-- 3. POWER GRID 3D (ЛЕП ВЕЖА) -->
        <div class="es-3d-card" id="gridCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #3b82f6;" id="gridDot3D"></span>
              <span class="es-3d-title">${e("grid") || "Електромережа"}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);" id="gridBadge3D">
              Живлення стабільне
            </span>
          </div>

          <div style="padding: 10px 0; display: flex; justify-content: center;">
            <svg viewBox="0 0 160 135" style="width: 140px; height: 100px;">
              <circle cx="80" cy="12" r="3.5" fill="#ef4444" id="gridBeacon3D" class="beacon-light" style="display: none;" />
              <line x1="80" y1="12" x2="45" y2="130" stroke="#64748b" stroke-width="2.2" />
              <line x1="80" y1="12" x2="115" y2="130" stroke="#64748b" stroke-width="2.2" />
              <line x1="30" y1="42" x2="130" y2="42" stroke="#94a3b8" stroke-width="2" />
              <line x1="38" y1="72" x2="122" y2="72" stroke="#94a3b8" stroke-width="2" />
              <line x1="42" y1="102" x2="118" y2="102" stroke="#64748b" stroke-width="1.8" />
              <line x1="68" y1="42" x2="89" y2="72" stroke="#475569" stroke-width="1.2" />
              <line x1="92" y1="42" x2="71" y2="72" stroke="#475569" stroke-width="1.2" />
              <line x1="62" y1="72" x2="98" y2="102" stroke="#475569" stroke-width="1.2" />
              <line x1="98" y1="72" x2="62" y2="102" stroke="#475569" stroke-width="1.2" />
              <line x1="35" y1="42" x2="35" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="125" y1="42" x2="125" y2="52" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="42" y1="72" x2="42" y2="82" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <line x1="118" y1="72" x2="118" y2="82" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
              <circle cx="35" cy="53" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="125" cy="53" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="42" cy="83" r="2" fill="#00e5ff" class="glow-cyan" />
              <circle cx="118" cy="83" r="2" fill="#00e5ff" class="glow-cyan" />
            </svg>
          </div>

          <div class="es-3d-main-power" id="gridPower3D">0.000 кВт</div>
          <div class="es-3d-substatus" style="color: #60a5fa;" id="gridDirection3D">Мережа підключена</div>

          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">Напруга</div>
              <div class="es-3d-metric-val" style="color: #93c5fd;" id="gridVoltage3D">230.0 V</div>
            </div>
            <div class="es-3d-metric-box">
              <div class="es-3d-metric-label">Струм</div>
              <div class="es-3d-metric-val" style="color: #93c5fd;" id="gridCurrent3D">0.0 A</div>
            </div>
          </div>

          <div class="es-3d-outage-mini" id="gridOutageMini3D" style="${((i = t == null ? void 0 : t.outages) == null ? void 0 : i.show) === !1 ? "display: none;" : ""}">
            <span id="gridOutageMiniGroup3D">🕯️ Група ${(((n = t == null ? void 0 : t.outages) == null ? void 0 : n.group) || "6.1").replace(",", ".")}</span>
            <span id="gridOutageMiniStatus3D">...</span>
          </div>
        </div>

      </div>

      <!-- CENTER ROW: DEYE HYBRID INVERTER -->
      <div class="es-3d-inverter-center">
        <div class="es-3d-inverter-card">
          <div class="es-3d-card-header">
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.15); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3);">
              ${e("inverter_title") || "ГІБРИДНИЙ ІНВЕРТОР"}
            </span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="es-3d-dot" style="background: #10b981;" id="invDot3D"></span>
              <span class="es-3d-badge" style="background: transparent; color: #10b981; padding: 0;" id="invStatus3D">ПРАЦЮЄ (ON-GRID)</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 20px; margin: 16px 0; flex-wrap: wrap;">
            <!-- 3D Deye Hardware Body -->
            <svg viewBox="0 0 150 200" style="width: 140px; height: 180px;">
              <rect x="25" y="15" width="100" height="165" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" />
              <!-- Cooling Fins Left -->
              <line x1="20" y1="40" x2="25" y2="40" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="60" x2="25" y2="60" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="80" x2="25" y2="80" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="100" x2="25" y2="100" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="120" x2="25" y2="120" stroke="#64748b" stroke-width="2" />
              <line x1="20" y1="140" x2="25" y2="140" stroke="#64748b" stroke-width="2" />
              <!-- Cooling Fins Right -->
              <line x1="125" y1="40" x2="130" y2="40" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="60" x2="130" y2="60" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="80" x2="130" y2="80" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="100" x2="130" y2="100" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="120" x2="130" y2="120" stroke="#64748b" stroke-width="2" />
              <line x1="125" y1="140" x2="130" y2="140" stroke="#64748b" stroke-width="2" />
              <!-- Deye Logo -->
              <text x="75" y="42" font-family="sans-serif" font-weight="900" font-size="14" fill="#0284c7" text-anchor="middle">Deye</text>
              <!-- Color LCD -->
              <rect x="42" y="55" width="66" height="58" rx="5" fill="#090d16" stroke="#00e5ff" stroke-width="1.5" />
              <text x="75" y="70" font-family="monospace" font-size="7" fill="#38bdf8" text-anchor="middle">EPS LOAD</text>
              <text x="75" y="85" font-family="monospace" font-weight="bold" font-size="11" fill="#ffffff" text-anchor="middle" id="invLcdPower3D">0.00 kW</text>
              <text x="75" y="98" font-family="monospace" font-size="7" fill="#10b981" text-anchor="middle">NORMAL</text>
              <circle cx="50" cy="104" r="2" fill="#10b981" />
              <circle cx="75" cy="104" r="2" fill="#f59e0b" />
              <circle cx="100" cy="104" r="2" fill="#ef4444" />
              <line x1="28" y1="135" x2="122" y2="135" stroke="#cbd5e1" stroke-width="1.2" />
              <polygon points="75,142 84,158 66,158" fill="#f59e0b" stroke="#b45309" stroke-width="1" />
              <text x="75" y="156" font-family="sans-serif" font-weight="900" font-size="10" fill="#000" text-anchor="middle">!</text>
              <text x="75" y="172" font-family="sans-serif" font-weight="bold" font-size="6" fill="#64748b" text-anchor="middle">12kW HYBRID S3</text>
            </svg>

            <!-- Specs & Temps -->
            <div style="flex: 1; min-width: 200px;">
              <h3 style="font-size: 16px; font-weight: 800; color: #ffffff; margin: 0 0 4px 0;">Deye SUN-12K-SG01LP1-EU</h3>
              <p style="font-size: 11px; color: #94a3b8; margin: 0 0 12px 0;">1-фазний низьковольтний гібридний інвертор</p>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Температура AC</div>
                  <div class="es-3d-metric-val" style="color: #f59e0b;" id="invTempAc3D">-- °C</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Температура DC</div>
                  <div class="es-3d-metric-val" style="color: #f59e0b;" id="invTempDc3D">-- °C</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Власне споживання</div>
                  <div class="es-3d-metric-val" style="color: #22d3ee;" id="invSelfPower3D">⚡ 100 Вт</div>
                </div>
                <div class="es-3d-metric-box">
                  <div class="es-3d-metric-label">Ефективність MPPT</div>
                  <div class="es-3d-metric-val" style="color: #10b981;">97.6% (Dual)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM ROW: BATTERY STORAGE (Left) vs HOUSE LOADS (Right) -->
      <div class="es-3d-grid-bottom">

        <!-- 4. BATTERY STORAGE SYSTEM (З ЧЕРВОНОЮ АНІМАЦІЄЮ РОЗРЯДУ) -->
        <div class="es-3d-card" id="batCardWrapper3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #10b981;" id="batDot3D"></span>
              <span class="es-3d-title">${e("battery") || "Система накопичення (АКБ)"}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);" id="batBadge3D">
              2 Стійки · 28.8 кВт·г
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 14px 0; flex-wrap: wrap;">
            <!-- 3D Wall-Mounted Battery Unit with Digital SOC Faceplate -->
            <svg viewBox="0 0 140 180" style="width: 120px; height: 155px;">
              <rect x="15" y="15" width="110" height="150" rx="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2.5" />
              <rect id="batFaceplateBorder3D" x="28" y="28" width="84" height="124" rx="8" fill="#090d16" stroke="#10b981" stroke-width="1.5" />
              <circle cx="70" cy="70" r="32" fill="none" stroke="#1e293b" stroke-width="6" />
              <circle id="batSocCircle3D" cx="70" cy="70" r="32" fill="none" stroke="#10b981" stroke-width="6" stroke-dasharray="201" stroke-dashoffset="40" stroke-linecap="round" class="glow-green" />
              <text x="70" y="73" font-family="monospace" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle" id="batSocText3D">--%</text>
              <text id="batModeLabel3D" x="70" y="86" font-family="sans-serif" font-weight="bold" font-size="7" fill="#10b981" text-anchor="middle">ЗАРЯД</text>
              <!-- Indicator Bars -->
              <rect id="batBar1_3D" x="40" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar2_3D" x="56" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar3_3D" x="72" y="112" width="12" height="4" rx="1" fill="#10b981" />
              <rect id="batBar4_3D" x="88" y="112" width="12" height="4" rx="1" fill="#10b981" />
            </svg>

            <div style="flex: 1; min-width: 170px;">
              <div class="es-3d-main-power" style="text-align: left;" id="batPower3D">0.000 кВт</div>
              <div class="es-3d-substatus" style="text-align: left; color: #10b981;" id="batDirection3D">↓ Заряджається</div>
              <div style="font-size: 11px; color: #94a3b8; margin: 4px 0;" id="batBusStats3D">Шина: -- V · Темп: -- °C</div>
              <div class="es-3d-metric-box" style="text-align: left; margin-top: 8px;">
                <div class="es-3d-metric-label">Автономність / До повного заряду</div>
                <div class="es-3d-metric-val" style="color: #38bdf8;" id="batEstTime3D">~ --:--:--</div>
              </div>
            </div>
          </div>

          <!-- Dual Battery Racks - Spacious & Non-Squished -->
          <div class="es-3d-subgrid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="es-3d-metric-box" style="text-align: left;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 2px;">
                <span style="color: #cbd5e1;">Стійка 1 (АКБ 1)</span>
                <span style="color: #10b981;" id="rack1Soc3D">--%</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr auto; gap: 3px; font-size: 10px; font-family: monospace;">
                <span style="color: #94a3b8;">Потужність:</span><strong id="rack1Power3D" style="color: #10b981;">-- кВт</strong>
                <span style="color: #94a3b8;">Напруга:</span><span id="rack1V3D" style="color: #cbd5e1;">-- V</span>
                <span style="color: #94a3b8;">Температура:</span><span id="rack1T3D" style="color: #f59e0b;">-- °C</span>
                <span style="color: #94a3b8;">Дельта:</span><span id="rack1Delta3D" style="color: #38bdf8;">Δ-- мВ</span>
              </div>
            </div>

            <div class="es-3d-metric-box" style="text-align: left;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 11px; margin-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 2px;">
                <span style="color: #cbd5e1;">Стійка 2 (АКБ 2)</span>
                <span style="color: #10b981;" id="rack2Soc3D">--%</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr auto; gap: 3px; font-size: 10px; font-family: monospace;">
                <span style="color: #94a3b8;">Потужність:</span><strong id="rack2Power3D" style="color: #10b981;">-- кВт</strong>
                <span style="color: #94a3b8;">Напруга:</span><span id="rack2V3D" style="color: #cbd5e1;">-- V</span>
                <span style="color: #94a3b8;">Температура:</span><span id="rack2T3D" style="color: #f59e0b;">-- °C</span>
                <span style="color: #94a3b8;">Дельта:</span><span id="rack2Delta3D" style="color: #38bdf8;">Δ-- мВ</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. HOUSE AND GUARANTEED EPS LOADS -->
        <div class="es-3d-card" id="houseCard3D">
          <div class="es-3d-card-header">
            <div class="es-3d-title-group">
              <span class="es-3d-dot" style="background: #00e5ff;"></span>
              <span class="es-3d-title">${e("house") || "Гарантоване навантаження"}</span>
            </div>
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.12); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3);">
              Deye EPS (220V)
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 14px 0; flex-wrap: wrap;">
            <!-- 3D Modern House Villa SVG -->
            <svg viewBox="0 0 160 140" style="width: 130px; height: 110px;">
              <ellipse cx="80" cy="125" rx="65" ry="10" fill="#000000" fill-opacity="0.5" />
              <polygon points="30,65 105,45 140,70 65,90" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
              <polygon points="30,65 65,90 65,120 30,95" fill="#334155" stroke="#475569" stroke-width="1.5" />
              <polygon points="65,90 140,70 140,100 65,120" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
              <polygon points="25,62 105,40 145,67 65,88" fill="#475569" stroke="#64748b" stroke-width="2" />
              <!-- Lit Window -->
              <polygon points="75,65 105,57 105,72 75,80" fill="#f59e0b" fill-opacity="0.9" class="glow-amber" />
              <line x1="90" y1="61" x2="90" y2="76" stroke="#78350f" stroke-width="1" />
              <polygon points="75,93 125,80 125,108 75,116" fill="#fbbf24" fill-opacity="0.85" class="glow-amber" />
              <line x1="100" y1="87" x2="100" y2="112" stroke="#78350f" stroke-width="1.2" />
              <circle cx="50" cy="98" r="3" fill="#fef08a" class="glow-amber" />
            </svg>

            <div style="flex: 1; min-width: 170px;">
              <div class="es-3d-main-power" style="text-align: left;" id="housePower3D">0.000 кВт</div>
              <div class="es-3d-substatus" style="text-align: left; color: #22d3ee;" id="houseStatus3D">Споживання будинку</div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;" id="houseDayTotal3D">Спожито за добу: -- кВт·год</div>
            </div>
          </div>

          <!-- Sub-loads Breakdown: Smart Boiler and Sockets -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.07);">
            <!-- Boiler -->
            <div class="es-3d-metric-box" style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 18px;">♨️</div>
                <div style="text-align: left;">
                  <div style="font-size: 12px; font-weight: 700; color: #ffffff;">
                    ${e("smart_boiler") || "Розумний Бойлер (ГВП)"}
                    <span id="boilerTemp3D" style="font-size: 10px; color: #f59e0b; margin-left: 4px;">65 °C</span>
                  </div>
                  <div style="font-size: 11px; color: #f59e0b;" id="boilerStatus3D">Нагрів активний</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="es-3d-metric-val" style="color: #fde047;" id="boilerPower3D">0 Вт</div>
              </div>
            </div>

            <!-- Sockets -->
            <div class="es-3d-metric-box" style="display: flex; align-items: center; justify-content: space-between; padding: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 18px;">💡</div>
                <div style="text-align: left;">
                  <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Освітлення та розетки</div>
                  <div style="font-size: 11px; color: #94a3b8;">Побутові споживачі</div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="es-3d-metric-val" style="color: #38bdf8;" id="houseOtherPower3D">0 Вт</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div><!-- /.es-3d-stage -->

      <!-- OUTAGE SCHEDULE DOCK (Київська обл., Група 6.1) -->
      <div id="outageDock3D"></div>

    </div>
  `;
}
function St(t, e) {
  if (t) {
    typeof t.setAttribute == "function" && t.setAttribute("class", e);
    try {
      t.className = e;
    } catch {
    }
  }
}
function Za(t, e, i) {
  var ye, yt, Ne, De, _e, Ke, ge, Pe;
  if (!t || !e) return;
  const n = (ae) => t.getElementById(ae), o = n("solarPower3D");
  o && (o.textContent = e.solarPowerStr);
  const r = n("solarStatus3D");
  r && (r.textContent = e.solarStatusStr);
  const a = n("solarYieldToday3D");
  if (a && (a.textContent = e.solarYieldTodayStr), e.pv1) {
    const ae = n("pv1Power3D"), ee = n("pv1V3D");
    ae && (ae.textContent = e.pv1.powerStr), ee && (ee.textContent = e.pv1.specStr);
  }
  if (e.pv2) {
    const ae = n("pv2Power3D"), ee = n("pv2V3D");
    ae && (ae.textContent = e.pv2.powerStr), ee && (ee.textContent = e.pv2.specStr);
  }
  if (e.pv3) {
    const ae = n("pv3Power3D"), ee = n("pv3V3D");
    ae && (ae.textContent = e.pv3.powerStr), ee && (ee.textContent = e.pv3.specStr);
  }
  const s = n("conduitSolar3D");
  s && (s.style.display = e.solarPowerKw > 0.015 ? "block" : "none");
  const l = n("windPower3D");
  l && (l.textContent = e.windPowerStr);
  const c = n("windStatus3D");
  c && (c.textContent = e.windStatusStr);
  const d = n("windRotor3D");
  d && St(d, e.windPowerKw > 5e-3 ? "rotor-spinning" : "rotor-idle");
  const b = n("turb1Power3D"), h = n("turb1Rpm3D");
  b && (b.textContent = e.turb1PowerStr), h && (h.textContent = e.turb1RpmStr);
  const _ = n("turb2Power3D"), f = n("turb2Status3D");
  _ && (_.textContent = e.turb2PowerStr), f && (f.textContent = e.turb2StatusStr);
  const y = n("conduitWind3D");
  y && (y.style.display = e.windPowerKw > 5e-3 ? "block" : "none");
  const m = n("gridPower3D");
  m && (m.textContent = e.gridPowerStr);
  const w = n("gridDirection3D");
  w && (w.textContent = e.gridDirectionStr);
  const p = n("gridVoltage3D");
  p && (p.textContent = e.gridVoltageStr);
  const u = n("gridCurrent3D");
  u && (u.textContent = e.gridCurrentStr);
  const g = n("gridBadge3D"), x = n("gridDot3D"), S = n("gridBeacon3D"), $ = n("flowGrid3D");
  e.isBlackout ? (g && (g.textContent = "🚨 " + (i("blackout_alert") || "БЛЕКАУТ / ВІДКЛЮЧЕНО"), g.style.cssText = "background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.5); font-weight: bold;"), x && (x.style.background = "#ef4444", St(x, "es-3d-dot beacon-light")), S && (S.style.display = "block"), $ && ($.style.display = "none")) : (g && (g.textContent = i("grid_stable") || "Живлення стабільне", g.style.cssText = "background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"), x && (x.style.background = "#3b82f6", St(x, "es-3d-dot")), S && (S.style.display = "none"), $ && (Math.abs(e.gridPowerKw) > 0.015 ? ($.style.display = "block", e.gridPowerKw > 0 ? (St($, "conduit-flow glow-blue"), $.setAttribute("stroke", "#3b82f6")) : (St($, "conduit-flow conduit-flow-rev glow-green"), $.setAttribute("stroke", "#10b981"))) : $.style.display = "none"));
  const N = n("gridOutageMini3D"), A = n("gridOutageMiniGroup3D"), V = n("gridOutageMiniStatus3D");
  N && (e.outageShow === !1 ? N.style.display = "none" : (N.style.display = "flex", e.outageMini && (A && (A.textContent = e.outageMini.groupText), V && (V.textContent = e.outageMini.statusText), N.classList && (e.outageMini.state === "off" ? (yt = (ye = N.classList).add) == null || yt.call(ye, "is-off") : (De = (Ne = N.classList).remove) == null || De.call(Ne, "is-off"), e.outageMini.state === "on" ? (Ke = (_e = N.classList).add) == null || Ke.call(_e, "is-on") : (Pe = (ge = N.classList).remove) == null || Pe.call(ge, "is-on")))));
  const U = n("invStatus3D"), Y = n("invDot3D");
  U && (U.textContent = e.invStatusStr, U.style.color = e.isBlackout ? "#f59e0b" : "#10b981"), Y && (Y.style.background = e.isBlackout ? "#f59e0b" : "#10b981");
  const k = n("invLcdPower3D");
  k && (k.textContent = e.invLcdPowerStr);
  const B = n("invTempAc3D");
  B && (B.textContent = e.invTempAcStr);
  const E = n("invTempDc3D");
  E && (E.textContent = e.invTempDcStr);
  const C = n("invSelfPower3D");
  C && (C.textContent = e.invSelfStr);
  const T = n("batPower3D"), I = n("batDirection3D"), L = n("batSocText3D"), F = n("batSocCircle3D"), Q = n("batModeLabel3D"), fe = n("batCardWrapper3D"), ce = n("batDot3D"), he = n("batBadge3D"), K = n("flowBat3D");
  if (L && (L.textContent = e.batSoc + "%"), F) {
    const ee = 201 - 201 * Math.min(Math.max(e.batSoc, 0), 100) / 100;
    F.setAttribute("stroke-dashoffset", ee);
  }
  const be = e.isDischarging ? "#ef4444" : "#10b981";
  ["batBar1_3D", "batBar2_3D", "batBar3_3D", "batBar4_3D"].forEach((ae) => {
    const ee = n(ae);
    ee && ee.setAttribute("fill", be);
  }), e.isDischarging ? (K && (K.style.display = "block", St(K, "conduit-flow conduit-flow-rev glow-red"), K.setAttribute("stroke", "#ef4444")), F && (F.setAttribute("stroke", "#ef4444"), St(F, "glow-red")), Q && (Q.textContent = i("discharging") || "РОЗРЯД", Q.setAttribute("fill", "#ef4444")), ce && (ce.style.background = "#ef4444", St(ce, "es-3d-dot beacon-light")), he && (he.style.cssText = "background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.4);"), fe && fe.classList.add("es-3d-card-bat-discharge"), I && (I.style.color = "#ef4444", I.textContent = "↑ " + (i("battery_discharging") || "Розряджається") + " · " + e.batCurrentStr), T && (T.style.color = "#f87171", T.textContent = e.batPowerStr)) : e.isCharging ? (K && (K.style.display = "block", St(K, "conduit-flow glow-green"), K.setAttribute("stroke", "#10b981")), F && (F.setAttribute("stroke", "#10b981"), St(F, "glow-green")), Q && (Q.textContent = i("charging") || "ЗАРЯД", Q.setAttribute("fill", "#10b981")), ce && (ce.style.background = "#10b981", St(ce, "es-3d-dot")), he && (he.style.cssText = "background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"), fe && fe.classList.remove("es-3d-card-bat-discharge"), I && (I.style.color = "#10b981", I.textContent = "↓ " + (i("battery_charging") || "Заряджається") + " · " + e.batCurrentStr), T && (T.style.color = "#ffffff", T.textContent = e.batPowerStr)) : (K && (K.style.display = "none"), fe && fe.classList.remove("es-3d-card-bat-discharge"), I && (I.style.color = "#94a3b8", I.textContent = i("battery_idle") || "Очікування"), T && (T.style.color = "#ffffff", T.textContent = e.batPowerStr));
  const G = n("batBusStats3D");
  G && (G.textContent = e.batBusStatsStr);
  const J = n("batEstTime3D");
  if (J && (J.textContent = e.batEstTimeStr), e.rack1) {
    const ae = n("rack1Soc3D"), ee = n("rack1Power3D"), Re = n("rack1V3D"), me = n("rack1T3D"), Me = n("rack1Delta3D");
    ae && (ae.textContent = e.rack1.socStr), ee && (ee.textContent = e.rack1.powerStr, ee.style.color = e.isDischarging ? "#f87171" : "#10b981"), Re && (Re.textContent = e.rack1.voltageStr), me && (me.textContent = e.rack1.tempStr), Me && (Me.textContent = e.rack1.deltaStr);
  }
  if (e.rack2) {
    const ae = n("rack2Soc3D"), ee = n("rack2Power3D"), Re = n("rack2V3D"), me = n("rack2T3D"), Me = n("rack2Delta3D");
    ae && (ae.textContent = e.rack2.socStr), ee && (ee.textContent = e.rack2.powerStr, ee.style.color = e.isDischarging ? "#f87171" : "#10b981"), Re && (Re.textContent = e.rack2.voltageStr), me && (me.textContent = e.rack2.tempStr), Me && (Me.textContent = e.rack2.deltaStr);
  }
  const de = n("housePower3D");
  de && (de.textContent = e.housePowerStr);
  const xe = n("houseStatus3D");
  xe && (xe.textContent = e.houseStatusStr);
  const X = n("houseDayTotal3D");
  X && (X.textContent = e.houseDayTotalStr);
  const Ae = n("boilerPower3D"), Be = n("boilerTemp3D"), dt = n("boilerStatus3D"), rt = n("flowBoiler3D");
  Ae && (Ae.textContent = e.boilerPowerStr), Be && (Be.textContent = e.boilerTempStr), dt && (dt.textContent = e.boilerStatusStr), rt && (rt.style.display = e.boilerPowerKw > 0.05 ? "block" : "none");
  const Ie = n("houseOtherPower3D");
  Ie && (Ie.textContent = e.otherPowerStr);
}
const Xa = "https://raw.githubusercontent.com/Baskerville42/outage-data-ua/main/data", on = {
  "kyiv-region": { uk: "Київська обл.", en: "Kyiv Oblast", jsonFile: "kyiv-region.json" },
  kyiv: { uk: "м. Київ", en: "Kyiv City", jsonFile: "kyiv.json" },
  dnipro: { uk: "Дніпропетровська обл.", en: "Dnipro Oblast", jsonFile: "dnipro.json" },
  odesa: { uk: "Одеська область", en: "Odesa Oblast", jsonFile: "odesa.json" }
}, Gr = /* @__PURE__ */ new Map(), es = 5 * 60 * 1e3;
function ts(t) {
  const i = String(t).trim().replace(",", ".").toUpperCase().replace(/^GPV/, "").trim() || "6.1";
  return {
    key: `GPV${i}`,
    label: i
  };
}
function is(t = /* @__PURE__ */ new Date()) {
  const e = "Europe/Kyiv", i = new Intl.DateTimeFormat("en-CA", {
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: !1
  }), n = {};
  for (const f of i.formatToParts(t))
    n[f.type] = f.value;
  let o = parseInt(n.hour, 10);
  o === 24 && (o = 0);
  const r = parseInt(n.minute, 10) || 0, a = `${n.year}-${n.month}-${n.day}`, s = /* @__PURE__ */ new Date(`${a}T12:00:00Z`), l = new Date(s.getTime() + 24 * 60 * 60 * 1e3), d = new Intl.DateTimeFormat("en-CA", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(l), h = { Mon: "1", Tue: "2", Wed: "3", Thu: "4", Fri: "5", Sat: "6", Sun: "7" }[n.weekday] || "1", _ = String(parseInt(h, 10) % 7 + 1);
  return {
    dateStr: a,
    tomorrowDateStr: d,
    hour: o,
    minute: r,
    minuteInDay: o * 60 + r,
    slotIndex: Math.min(47, o * 2 + (r >= 30 ? 1 : 0)),
    timeStr: `${String(o).padStart(2, "0")}:${String(r).padStart(2, "0")}`,
    weekdayIso: h,
    tomorrowWeekdayIso: _
  };
}
function ns(t) {
  const e = new Date(Number(t) * 1e3);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(e);
}
function Hr(t) {
  const e = new Array(48).fill("on");
  if (!t || typeof t != "object") return e;
  for (let i = 1; i <= 24; i++) {
    const n = t[String(i)] || "yes", o = (i - 1) * 2;
    n === "no" ? (e[o] = "off", e[o + 1] = "off") : n === "first" ? (e[o] = "off", e[o + 1] = "on") : n === "second" ? (e[o] = "on", e[o + 1] = "off") : n === "maybe" ? (e[o] = "maybe", e[o + 1] = "maybe") : n === "mfirst" ? (e[o] = "maybe", e[o + 1] = "on") : n === "msecond" ? (e[o] = "on", e[o + 1] = "maybe") : (e[o] = "on", e[o + 1] = "on");
  }
  return e;
}
function Ni(t) {
  const e = t * 30, i = Math.floor(e / 60), n = e % 60;
  return `${String(i).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function qr(t) {
  if (!Array.isArray(t) || t.length === 0) return [];
  const e = [];
  let i = null;
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    o === "off" || o === "maybe" ? i && i.type === o ? i.endSlot = n + 1 : (i && e.push(hn(i)), i = { startSlot: n, endSlot: n + 1, type: o }) : i && (e.push(hn(i)), i = null);
  }
  return i && e.push(hn(i)), e;
}
function hn(t) {
  return {
    startSlot: t.startSlot,
    endSlot: t.endSlot,
    start: Ni(t.startSlot),
    end: Ni(t.endSlot),
    durationMin: (t.endSlot - t.startSlot) * 30,
    type: t.type
  };
}
function pa(t, e = "uk") {
  const i = Math.max(0, Math.round(t)), n = Math.floor(i / 60), o = i % 60;
  return e === "en" ? n > 0 && o > 0 ? `${n}h ${o}m` : n > 0 ? `${n}h` : `${o}m` : n > 0 && o > 0 ? `${n} год ${o} хв` : n > 0 ? `${n} год` : `${o} хв`;
}
function os(t, e, i) {
  const n = i.slotIndex, r = (t[n] || "on") === "off", a = [...t];
  e && a.push(...e);
  for (let s = n + 1; s < a.length; s++) {
    const l = a[s] || "on", c = l === "off";
    if (r && l !== "off") {
      const b = s * 30 - i.minuteInDay;
      return {
        type: "on",
        isTomorrow: s >= 48,
        atTime: Ni(s % 48),
        minutesLeft: Math.max(1, b)
      };
    }
    if (!r && c) {
      const b = s * 30 - i.minuteInDay;
      return {
        type: "off",
        isTomorrow: s >= 48,
        atTime: Ni(s % 48),
        minutesLeft: Math.max(1, b)
      };
    }
  }
  return null;
}
function rs(t, e = {}, i = /* @__PURE__ */ new Date(), n = null) {
  var V, U, Y, k;
  const o = on[e.region] ? e.region : "kyiv-region", r = on[o], { key: a, label: s } = ts(e.group || "6.1"), l = is(i);
  let c = null, d = null, b = !1, h = !1;
  const _ = typeof ((V = t == null ? void 0 : t.attention) == null ? void 0 : V.text) == "string" ? t.attention.text.trim() : "", f = !!(_ && (_.toLowerCase().includes("екстрен") || _.toLowerCase().includes("аварійн") || _.toLowerCase().includes("не діють"))), y = l.hour >= 22;
  if ((U = t == null ? void 0 : t.fact) != null && U.data && typeof t.fact.data == "object" && !Array.isArray(t.fact.data))
    for (const [B, E] of Object.entries(t.fact.data)) {
      if (!E || typeof E != "object") continue;
      const C = ns(B), T = E[a] || E[`${a}.1`] || E[`${a}.2`];
      C === l.dateStr && T ? (c = T, b = !0) : y && C === l.tomorrowDateStr && T && (d = T, h = !0);
    }
  if (!c) {
    const B = (Y = t == null ? void 0 : t.preset) == null ? void 0 : Y.data;
    if (B && typeof B == "object") {
      const E = B[a] || B[`${a}.1`] || B[`${a}.2`];
      E != null && E[l.weekdayIso] && (c = E[l.weekdayIso]);
    }
  }
  const m = !!c, w = c ? Hr(c) : new Array(48).fill("on"), p = d ? Hr(d) : null, u = qr(w), g = p ? qr(p) : [], x = w.reduce((B, E) => B + (E === "off" ? 30 : 0), 0), S = p ? p.reduce((B, E) => B + (E === "off" ? 30 : 0), 0) : null;
  let $ = m ? w[l.slotIndex] : "unknown", N = m ? os(w, p, l) : null;
  const A = e.source || "auto";
  if (n != null && n.statusRaw && (A === "ha_entity" || !m && A === "auto")) {
    const B = String(n.statusRaw).toLowerCase();
    B.includes("outage") || B.includes("off") || B.includes("emergency") || B === "false" ? $ = "off" : (B.includes("connect") || B.includes("on") || B === "true") && ($ = "on");
  }
  return {
    regionId: o,
    regionLabelUk: r.uk,
    regionLabelEn: r.en,
    groupKey: a,
    groupLabel: s,
    hasData: m,
    isFactToday: b,
    isFactTomorrow: h,
    isEmergency: f,
    attentionText: _,
    todayDateStr: l.dateStr,
    tomorrowDateStr: l.tomorrowDateStr,
    currentSlotIndex: l.slotIndex,
    minuteInDay: l.minuteInDay,
    timeStr: l.timeStr,
    currentStatus: $,
    nextEvent: N,
    todaySlots: w,
    tomorrowSlots: p,
    todayIntervals: u,
    tomorrowIntervals: g,
    todayOffHours: +(x / 60).toFixed(1),
    tomorrowOffHours: S !== null ? +(S / 60).toFixed(1) : null,
    lastUpdatedStr: ((k = t == null ? void 0 : t.fact) == null ? void 0 : k.update) || as(t == null ? void 0 : t.lastUpdated) || "",
    isGridBlackout: (n == null ? void 0 : n.isGridBlackout) ?? null,
    actualGridVoltage: typeof (n == null ? void 0 : n.actualGridVoltage) == "number" ? n.actualGridVoltage : null,
    haNextOutageRaw: (n == null ? void 0 : n.nextOutageRaw) || null,
    haNextPowerRaw: (n == null ? void 0 : n.nextPowerRaw) || null
  };
}
function as(t) {
  if (!t) return "";
  try {
    const e = new Date(t);
    return isNaN(e.getTime()) ? "" : new Intl.DateTimeFormat("uk-UA", {
      timeZone: "Europe/Kyiv",
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(e);
  } catch {
    return "";
  }
}
async function ss(t = "kyiv-region", e = globalThis.fetch, i = !1) {
  const n = on[t] ? t : "kyiv-region", o = Gr.get(n), r = Date.now();
  if (!i && o && r - o.fetchedAt < es)
    return o.data;
  if (typeof e != "function")
    return (o == null ? void 0 : o.data) || null;
  const a = on[n].jsonFile, s = Math.floor(r / (5 * 60 * 1e3)), l = `${Xa}/${a}?t=${i ? r : s}`;
  try {
    const c = await e(l, { cache: i ? "no-store" : "no-cache" });
    if (!c.ok) throw new Error(`HTTP ${c.status}`);
    const d = await c.json();
    return Gr.set(n, { data: d, fetchedAt: r }), d;
  } catch (c) {
    if (o != null && o.data) return o.data;
    throw c;
  }
}
function ls() {
  return `
    .es-bottom-outage-dock {
      display: flex;
      justify-content: center;
      align-items: stretch;
      width: 100%;
    }

    .es-outage-card {
      width: 100%;
      max-width: 390px;
      background: linear-gradient(155deg, rgba(14, 23, 42, 0.94), rgba(8, 13, 27, 0.98));
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 12px 14px;
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      gap: 9px;
      box-sizing: border-box;
      position: relative;
      z-index: 5;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .es-outage-card.is-off {
      border-color: rgba(239, 68, 68, 0.45);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 18px rgba(239, 68, 68, 0.16);
    }

    .es-outage-card.is-on {
      border-color: rgba(16, 185, 129, 0.32);
    }

    .es-outage-card-3d {
      max-width: 100%;
      margin-top: 20px;
      background: rgba(15, 23, 42, 0.86);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 16px 18px;
    }

    .es-outage-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding-bottom: 7px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .es-outage-title-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .es-outage-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #e2e8f0;
      white-space: nowrap;
    }

    .es-outage-group-pill {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.14);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38bdf8;
      white-space: nowrap;
      cursor: pointer;
    }

    .es-outage-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .es-outage-tab-btn,
    .es-outage-refresh-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #94a3b8;
      border-radius: 6px;
      padding: 2px 7px;
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      line-height: 1.3;
    }

    .es-outage-tab-btn.active {
      background: rgba(56, 189, 248, 0.2);
      border-color: rgba(56, 189, 248, 0.5);
      color: #38bdf8;
    }

    .es-outage-tab-btn:hover,
    .es-outage-refresh-btn:hover {
      border-color: #38bdf8;
      color: #f8fafc;
    }

    .es-outage-status-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      background: rgba(2, 6, 23, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      padding: 7px 10px;
    }

    .es-outage-status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 800;
    }

    .es-outage-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .es-outage-dot.on { background: #10b981; box-shadow: 0 0 8px #10b981; }
    .es-outage-dot.off { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
    .es-outage-dot.maybe { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; }
    .es-outage-dot.unknown { background: #64748b; }

    .es-outage-countdown {
      font-size: 11px;
      font-weight: 700;
      color: #cbd5e1;
      text-align: right;
    }

    .es-outage-grid-verify {
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
    .es-outage-grid-verify.warn {
      background: rgba(239, 68, 68, 0.14);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }
    .es-outage-grid-verify.bonus {
      background: rgba(16, 185, 129, 0.14);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #6ee7b7;
    }

    /* 24-Hour Timeline Bar */
    .es-outage-timeline-wrap {
      position: relative;
      padding-top: 2px;
    }

    .es-outage-timeline {
      display: grid;
      grid-template-columns: repeat(48, minmax(0, 1fr));
      gap: 1px;
      height: 14px;
      background: rgba(2, 6, 23, 0.8);
      padding: 2px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
    }

    .es-outage-slot {
      height: 100%;
      border-radius: 1.5px;
      transition: opacity 0.2s ease;
    }
    .es-outage-slot.on { background: rgba(16, 185, 129, 0.78); }
    .es-outage-slot.off { background: rgba(239, 68, 68, 0.88); }
    .es-outage-slot.maybe { background: rgba(245, 158, 11, 0.82); }
    .es-outage-slot.past { opacity: 0.42; }
    .es-outage-slot.current {
      outline: 1.5px solid #ffffff;
      outline-offset: -0.5px;
      opacity: 1 !important;
      z-index: 2;
    }

    .es-outage-now-needle {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #ffffff;
      box-shadow: 0 0 6px #38bdf8, 0 0 2px #ffffff;
      pointer-events: none;
      z-index: 4;
      transform: translateX(-1px);
    }

    .es-outage-ticks {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
      margin-top: 3px;
      padding: 0 1px;
    }

    /* Windows Chips */
    .es-outage-windows {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      align-items: center;
    }

    .es-outage-win-chip {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 7px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .es-outage-win-chip.off {
      background: rgba(239, 68, 68, 0.14);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }
    .es-outage-win-chip.maybe {
      background: rgba(245, 158, 11, 0.14);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fcd34d;
    }
    .es-outage-win-chip.active {
      background: rgba(239, 68, 68, 0.32);
      border-color: #ef4444;
      color: #ffffff;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.35);
    }
    .es-outage-win-chip.past {
      opacity: 0.45;
      text-decoration: line-through;
    }
    .es-outage-win-chip.none {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    .es-outage-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      color: #64748b;
      padding-top: 2px;
      flex-wrap: wrap;
      gap: 6px;
    }

    /* 3D Grid Card Compact Pill */
    .es-3d-outage-mini {
      margin-top: 10px;
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      background: rgba(2, 6, 23, 0.65);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: #cbd5e1;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }
    .es-3d-outage-mini.is-off {
      border-color: rgba(239, 68, 68, 0.45);
      background: rgba(239, 68, 68, 0.12);
      color: #fca5a5;
    }
    .es-3d-outage-mini.is-on {
      border-color: rgba(16, 185, 129, 0.35);
    }

    /* Light Theme Overrides */
    .theme-light .es-outage-card {
      background: linear-gradient(155deg, rgba(255, 255, 255, 0.96), rgba(241, 245, 249, 0.98)) !important;
      border-color: rgba(15, 23, 42, 0.12) !important;
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08) !important;
    }
    .theme-light .es-outage-card.is-off {
      border-color: rgba(239, 68, 68, 0.5) !important;
    }
    .theme-light .es-outage-header {
      border-bottom-color: rgba(15, 23, 42, 0.08);
    }
    .theme-light .es-outage-title { color: #0f172a; }
    .theme-light .es-outage-status-row {
      background: rgba(241, 245, 249, 0.9);
      border-color: rgba(15, 23, 42, 0.08);
    }
    .theme-light .es-outage-countdown { color: #334155; }
    .theme-light .es-outage-timeline {
      background: rgba(226, 232, 240, 0.85);
      border-color: rgba(15, 23, 42, 0.1);
    }
    .theme-light .es-outage-now-needle {
      background: #0f172a;
      box-shadow: 0 0 4px rgba(15, 23, 42, 0.6);
    }
    .theme-light .es-outage-win-chip.off {
      background: rgba(239, 68, 68, 0.12);
      color: #b91c1c;
    }
    .theme-light .es-outage-win-chip.active {
      background: #ef4444;
      color: #ffffff;
    }
    .theme-light .es-outage-tab-btn,
    .theme-light .es-outage-refresh-btn {
      background: rgba(15, 23, 42, 0.05);
      border-color: rgba(15, 23, 42, 0.12);
      color: #475569;
    }
  `;
}
function Ur(t, e = {}) {
  const i = e.lang === "en" ? "en" : "uk", n = i === "en", o = e.selectedDay === "tomorrow" && t.tomorrowSlots ? "tomorrow" : "today", r = !!e.loading, a = e.error || null, s = !!e.is3D, l = n ? t.regionLabelEn : t.regionLabelUk, c = n ? "Outage Schedule" : "Відключення світла", d = n ? `Group ${t.groupLabel}` : `Група ${t.groupLabel}`, b = o === "tomorrow" ? t.tomorrowSlots : t.todaySlots, h = o === "tomorrow" ? t.tomorrowIntervals : t.todayIntervals, _ = o === "tomorrow" ? t.tomorrowOffHours : t.todayOffHours, f = o === "today";
  let y = n ? "Schedule unavailable" : "Графік завантажується...", m = "#94a3b8", w = "unknown";
  a && !t.hasData ? (y = n ? "Error loading schedule" : "Помилка завантаження", m = "#f87171", w = "off") : (t.hasData || t.currentStatus !== "unknown") && (t.currentStatus === "off" ? (y = n ? "Scheduled Outage" : "Відключення за графіком", m = "#f87171", w = "off") : t.currentStatus === "maybe" ? (y = n ? "Possible Outage" : "Можливе відключення", m = "#fbbf24", w = "maybe") : (y = n ? "Power ON (Schedule)" : "Світло є (за графіком)", m = "#34d399", w = "on"));
  let p = "";
  if (t.nextEvent) {
    const k = pa(t.nextEvent.minutesLeft, i), B = t.nextEvent.isTomorrow ? n ? " (tmrw)" : " (завтра)" : "";
    t.nextEvent.type === "off" ? p = n ? `Off in ${k} (${t.nextEvent.atTime}${B})` : `До відкл.: ${k} (о ${t.nextEvent.atTime}${B})` : p = n ? `Back in ${k} (${t.nextEvent.atTime}${B})` : `Увімкнення: ${t.nextEvent.atTime}${B} (${k})`;
  } else t.hasData && (p = n ? "No changes expected today" : "Без змін до кінця доби");
  let u = "";
  t.isEmergency && (u = `<div class="es-outage-grid-verify warn es-mono" title="${t.attentionText}">
      <span>🚨 ${n ? "Emergency Outages: Schedules Suspended" : "Екстрені відключення: графіки тимчасово не діють"}</span>
    </div>`);
  let g = "";
  t.isGridBlackout === !0 && t.currentStatus === "on" ? g = `<div class="es-outage-grid-verify warn es-mono">
      <span>⚠️ ${n ? "Actual Grid: DOWN (Unscheduled)" : "Факт: мережа знеструмлена поза графіком"}</span>
    </div>` : t.isGridBlackout === !1 && t.currentStatus === "off" && (g = `<div class="es-outage-grid-verify bonus es-mono">
      <span>⚡ ${n ? "Actual Grid: Connected" : "Факт: світло є (мережа підключена)"}</span>
    </div>`);
  const x = (b || []).map((k, B) => {
    const E = f && B < t.currentSlotIndex, C = f && B === t.currentSlotIndex, T = Ni(B), I = Ni(B + 1);
    return `<div class="es-outage-slot ${k} ${E ? "past" : ""} ${C ? "current" : ""}" title="${T}–${I}: ${k === "off" ? n ? "Outage" : "Відключення" : k === "maybe" ? n ? "Possible outage" : "Можливе відключення" : n ? "Power ON" : "Світло є"}"></div>`;
  }).join(""), S = (t.minuteInDay / 1440 * 100).toFixed(2), $ = f ? `<div class="es-outage-now-needle" style="left: ${S}%;" title="${t.timeStr}"></div>` : "";
  let N = "";
  !t.hasData && !r && !a ? N = `<span class="es-outage-win-chip none">${n ? "Waiting for schedule data..." : "Очікування даних графіка..."}</span>` : h.length === 0 ? N = `<span class="es-outage-win-chip none">✅ ${n ? "No outages scheduled" : "Відключень не заплановано"}</span>` : N = h.map((k) => {
    const B = f && t.currentSlotIndex >= k.startSlot && t.currentSlotIndex < k.endSlot, E = f && t.currentSlotIndex >= k.endSlot, C = k.type === "maybe" ? "🟡" : "🔴";
    return `<span class="es-outage-win-chip ${k.type} ${B ? "active" : ""} ${E ? "past" : ""} es-mono">${C} ${k.start}–${k.end}</span>`;
  }).join("");
  const A = _ !== null ? n ? `No power: ${_}h` : `Без світла: ${_} год` : "", V = t.lastUpdatedStr ? n ? `Updated: ${t.lastUpdatedStr}` : `Оновлено: ${t.lastUpdatedStr}` : "", U = o === "tomorrow" ? n ? "Tomorrow" : "Завтра" : n ? "Today" : "Сьогодні";
  return `
    <div class="es-outage-card ${`${s ? "es-outage-card-3d" : ""} ${w === "off" ? "is-off" : w === "on" ? "is-on" : ""}`}" data-outage-card="1">
      <div class="es-outage-header">
        <div class="es-outage-title-wrap">
          <span style="font-size: 14px;">🕯️</span>
          <span class="es-outage-title">${c}</span>
          <span class="es-outage-group-pill es-mono" data-action="edit-outage" title="${n ? "Configure region & group" : "Налаштувати регіон та чергу"}">${l} · ${d}</span>
        </div>
        <div class="es-outage-actions">
          ${t.tomorrowSlots ? `
            <button type="button" class="es-outage-tab-btn ${o === "today" ? "active" : ""}" data-outage-day="today">${n ? "Today" : "Сьогодні"}</button>
            <button type="button" class="es-outage-tab-btn ${o === "tomorrow" ? "active" : ""}" data-outage-day="tomorrow">${n ? "Tmrw" : "Завтра"}</button>
          ` : ""}
          <button type="button" class="es-outage-refresh-btn" data-action="refresh-outage" title="${n ? "Refresh schedule" : "Оновити графік"}">${r ? "⏳" : "↻"}</button>
        </div>
      </div>

      <div class="es-outage-status-row">
        <div class="es-outage-status-badge" style="color: ${m};">
          <span class="es-outage-dot ${w}"></span>
          <span>${y}</span>
        </div>
        <div class="es-outage-countdown es-mono">${p}</div>
      </div>

      ${u}
      ${g}

      <div class="es-outage-timeline-wrap">
        <div class="es-outage-timeline">
          ${x}
          ${$}
        </div>
        <div class="es-outage-ticks es-mono">
          <span>00</span><span>03</span><span>06</span><span>09</span><span>12</span><span>15</span><span>18</span><span>21</span><span>24</span>
        </div>
      </div>

      <div class="es-outage-windows">
        ${N}
      </div>

      <div class="es-outage-footer es-mono">
        <span>${U}${A ? ` · ${A}` : ""}</span>
        <span>${V}</span>
      </div>
    </div>
  `;
}
class ds extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general", this._isInternalChange = !1, this._debounceTimer = null, this._rendered = !1, this._isDialogExpanded = !1;
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    if (this._config = JSON.parse(JSON.stringify(e || ie)), this._isInternalChange) {
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
          const o = n.shadowRoot.querySelector("hui-dialog-edit-card") || n.shadowRoot.querySelector("ha-dialog-edit-card");
          if (o) return o;
          const r = n.shadowRoot.querySelectorAll("*");
          for (const a of r)
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
    var o, r, a;
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
          const s = (o = n.shadowRoot) == null ? void 0 : o.querySelector(".mdc-dialog__surface");
          s && (s.style.setProperty("max-width", "96vw", "important"), s.style.setProperty("width", "95vw", "important"));
        } catch {
        }
      }
    } else {
      if (i) {
        typeof i._enlarge == "function" && i.large ? i._enlarge() : (i.large = !1, i.removeAttribute("large"));
        try {
          const s = (r = i.shadowRoot) == null ? void 0 : r.getElementById("energy-station-wide-style");
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
    const o = e.split(".");
    let r = this._config;
    for (let a = 0; a < o.length - 1; a++)
      r[o[a]] || (r[o[a]] = {}), r = r[o[a]];
    r[o[o.length - 1]] = i, this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null), n ? this._dispatchConfig() : this._debounceTimer = setTimeout(() => {
      this._dispatchConfig();
    }, 140);
  }
  _switchTab(e) {
    this._flushConfig(), this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || ie)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    var a, s, l, c, d, b, h, _, f, y, m, w, p, u, g, x, S, $, N, A, V, U, Y, k, B, E, C, T, I, L, F, Q, fe, ce, he, K, be, G, J, de, xe, X, Ae, Be, dt, rt, Ie, ye, yt, Ne, De, _e, Ke, ge, Pe, ae, ee, Re, me, Me, at, _t, mt, st, et, R, pe, Se, Oe, Le, vt, ct, Ot, Vt, ci, oe, ve, H, He, tt, it, pi, Je, fi, gi, xt, Yt, Kt, ui, Jt, pt, Ct, Ei, Qt, ft, nt, gt, $t, Tt, Bt, It, At, Nt, zt, Wt, Gt, Zt, hi, bi;
    if (!this._config) return;
    this._rendered = !0;
    const e = this._config, i = (a = this.shadowRoot) == null ? void 0 : a.activeElement;
    let n = null, o = null, r = null;
    if (i && (i.id ? n = `#${i.id}` : ((s = i.dataset) == null ? void 0 : s.idx) !== void 0 && i.className && (n = `.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`), "selectionStart" in i && "selectionEnd" in i && (o = i.selectionStart, r = i.selectionEnd)), this.shadowRoot.innerHTML = `
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
              <input type="text" id="ctrlSolarCharge" value="${((b = e.controls) == null ? void 0 : b.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((h = e.controls) == null ? void 0 : h.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((_ = e.controls) == null ? void 0 : _.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((f = e.solar) == null ? void 0 : f.pv_count) || 3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y = e.solar) == null ? void 0 : y.pv_count) || 3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((m = e.solar) == null ? void 0 : m.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((w = e.solar) == null ? void 0 : w.daily_yield_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((p = e.solar) == null ? void 0 : p.target_daily_yield) || 55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((u = e.solar) == null ? void 0 : u.installed_power) !== void 0 ? e.solar.installed_power : 12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((g = e.solar) == null ? void 0 : g.show_metrics) !== !1 ? "checked" : ""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((x = e.solar) == null ? void 0 : x.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((S = e.solar) == null ? void 0 : S.pv_count) || 3 }).map((ue, O) => {
      var Ue, Lt;
      const q = O + 1, j = ((Lt = (Ue = e.solar) == null ? void 0 : Ue.strings) == null ? void 0 : Lt[O]) || {}, qe = `sensor.deye_12k_inverter_pv${q}_voltage`, wt = `sensor.deye_12k_inverter_pv${q}_current`, kt = `sensor.deye_12k_inverter_pv${q}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${q} (Стрінг ${q})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${O}" value="${j.name || `PV ${q}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${q} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${O}" value="${j.voltage_entity !== void 0 ? j.voltage_entity : qe}" placeholder="${qe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${q} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${O}" value="${j.current_entity !== void 0 ? j.current_entity : wt}" placeholder="${wt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${q} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${O}" value="${j.capacity_kw !== void 0 ? j.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${q} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${O}" value="${j.power_entity !== void 0 ? j.power_entity : kt}" placeholder="${kt} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${(($ = e.inverter) == null ? void 0 : $.model_name) || "DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((N = e.inverter) == null ? void 0 : N.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((A = e.inverter) == null ? void 0 : A.show_self_consumption) !== !1 ? "checked" : ""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((V = e.inverter) == null ? void 0 : V.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((U = e.inverter) == null ? void 0 : U.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((Y = e.inverter) == null ? void 0 : Y.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((k = e.inverter) == null ? void 0 : k.ac_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((B = e.inverter) == null ? void 0 : B.dc_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((E = e.inverter) == null ? void 0 : E.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((C = e.inverter) == null ? void 0 : C.current_entity) || ""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((T = e.inverter) == null ? void 0 : T.frequency_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((I = e.aux) == null ? void 0 : I.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((L = e.aux) == null ? void 0 : L.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((F = e.aux) == null ? void 0 : F.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((Q = e.aux) == null ? void 0 : Q.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((fe = e.aux) == null ? void 0 : fe.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((ce = e.aux) == null ? void 0 : ce.type) === "microinverter" && (!((he = e.aux) != null && he.title) || ((K = e.aux) == null ? void 0 : K.title) === "Вітрогенератор") ? "Мікроінвертор" : ((be = e.aux) == null ? void 0 : be.title) || (((G = e.aux) == null ? void 0 : G.type) === "generator" ? "Генератор" : ((J = e.aux) == null ? void 0 : J.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((xe = e.wind) == null ? void 0 : xe.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((X = e.wind) == null ? void 0 : X.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((Ae = e.wind) == null ? void 0 : Ae.animation_threshold) || ((Be = e.aux) == null ? void 0 : Be.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((dt = e.wind) == null ? void 0 : dt.animation_threshold) || ((rt = e.aux) == null ? void 0 : rt.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Ie = e.wind) == null ? void 0 : Ie.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((ye = e.wind) == null ? void 0 : ye.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((yt = e.wind) == null ? void 0 : yt.turbine_count) || 2 }).map((ue, O) => {
      var j, qe;
      const q = ((qe = (j = e.wind) == null ? void 0 : j.turbines) == null ? void 0 : qe[O]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${O}" value="${q.name || `Вітряк ${O + 1}`}" placeholder="Назва (напр. Вітряк ${O + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${O}" value="${q.power_entity || `sensor.wind_turbine_${O + 1}_power`}" placeholder="sensor.wind_turbine_${O + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${O}" value="${q.rpm_entity || q.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${O}" value="${q.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${O + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${O}" value="${q.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${O + 1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((Ne = e.battery) == null ? void 0 : Ne.soc_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((De = e.battery) == null ? void 0 : De.power_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((_e = e.battery) == null ? void 0 : _e.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ke = e.battery) == null ? void 0 : Ke.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((ge = e.battery) == null ? void 0 : ge.capacity_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Pe = e.battery) == null ? void 0 : Pe.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((ae = e.battery) == null ? void 0 : ae.current_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((ee = e.battery) == null ? void 0 : ee.temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((Re = e.battery) == null ? void 0 : Re.cell_delta_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((me = e.battery) == null ? void 0 : me.charge_daily_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Me = e.battery) == null ? void 0 : Me.discharge_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((at = e.battery) == null ? void 0 : at.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((_t = e.battery) == null ? void 0 : _t.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((mt = e.battery) == null ? void 0 : mt.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((st = e.battery) == null ? void 0 : st.parallel_batteries) || 2 }).map((ue, O) => {
      var yi, ei, ti, ii;
      const q = O + 1, j = ((ei = (yi = e.battery) == null ? void 0 : yi.modules) == null ? void 0 : ei[O]) || ((ii = (ti = e.battery) == null ? void 0 : ti.module_entities) == null ? void 0 : ii[O]) || {}, qe = `sensor.bms_rack${q}_soc`, wt = `sensor.bms_rack${q}_current`, kt = `sensor.bms_rack${q}_voltage`, Ue = `sensor.bms_rack${q}_power`, Lt = `sensor.bms_rack${q}_temperature`, Xt = `sensor.bms_rack${q}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${q} (Модуль ${q})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${O}" value="${j.name || `Батарея ${q}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${q} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${O}" value="${j.soc_entity !== void 0 ? j.soc_entity : j.soc !== void 0 ? j.soc : qe}" placeholder="${qe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${q} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${O}" value="${j.current_entity !== void 0 ? j.current_entity : wt}" placeholder="${wt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${q} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${O}" value="${j.voltage_entity !== void 0 ? j.voltage_entity : j.volt !== void 0 ? j.volt : kt}" placeholder="${kt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${q} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${O}" value="${j.temperature_entity !== void 0 ? j.temperature_entity : j.temp !== void 0 ? j.temp : Lt}" placeholder="${Lt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${q} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${O}" value="${j.capacity_kwh !== void 0 ? j.capacity_kwh : q === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${q} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${O}" value="${j.cell_delta_entity !== void 0 ? j.cell_delta_entity : j.delta !== void 0 ? j.delta : Xt}" placeholder="${Xt}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${q} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${O}" value="${j.power_entity !== void 0 ? j.power_entity : Ue}" placeholder="${Ue} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${((et = e.grid) == null ? void 0 : et.selling_enabled) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((R = e.grid) == null ? void 0 : R.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((pe = e.grid) == null ? void 0 : pe.external_power_entity) || ""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Se = e.grid) == null ? void 0 : Se.auto_calculate) !== !1 ? "checked" : ""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Oe = e.grid) == null ? void 0 : Oe.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((Le = e.grid) == null ? void 0 : Le.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((vt = e.grid) == null ? void 0 : vt.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((ct = e.grid) == null ? void 0 : ct.voltage_entity) || ""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((Ot = e.grid) == null ? void 0 : Ot.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Vt = e.grid) == null ? void 0 : Vt.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((ci = e.grid) == null ? void 0 : ci.import_daily_entity) || ""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((oe = e.grid) == null ? void 0 : oe.export_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((ve = e.grid) == null ? void 0 : ve.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((H = e.grid) == null ? void 0 : H.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🕯️ Графік відключень світла (ДТЕК / Yasno / HA)</div>
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="outagesShow" ${((He = e.outages) == null ? void 0 : He.show) !== !1 ? "checked" : ""} style="accent-color: #ef4444;">
              <div>
                <span>Показувати графік відключень світла на картці (2D і 3D)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Відображає 24-годинну шкалу відключень, таймер зворотного відліку та вікна на сьогодні/завтра.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Регіон:</label>
              <select id="outagesRegion">
                <option value="kyiv-region" ${(((tt = e.outages) == null ? void 0 : tt.region) || "kyiv-region") === "kyiv-region" ? "selected" : ""}>Київська область (ДТЕК КРЕМ)</option>
                <option value="kyiv" ${((it = e.outages) == null ? void 0 : it.region) === "kyiv" ? "selected" : ""}>м. Київ (ДТЕК / Yasno)</option>
                <option value="dnipro" ${((pi = e.outages) == null ? void 0 : pi.region) === "dnipro" ? "selected" : ""}>Дніпропетровська область</option>
                <option value="odesa" ${((Je = e.outages) == null ? void 0 : Je.region) === "odesa" ? "selected" : ""}>Одеська область</option>
              </select>
            </div>
            <div class="field-row">
              <label>Група / Черга (напр. 6.1):</label>
              <input type="text" id="outagesGroup" value="${((fi = e.outages) == null ? void 0 : fi.group) || "6.1"}" placeholder="6.1">
            </div>
            <div class="field-row">
              <label>Джерело даних:</label>
              <select id="outagesSource">
                <option value="auto" ${(((gi = e.outages) == null ? void 0 : gi.source) || "auto") === "auto" ? "selected" : ""}>Авто (Онлайн графік + перевірка інвертора)</option>
                <option value="json" ${((xt = e.outages) == null ? void 0 : xt.source) === "json" ? "selected" : ""}>Тільки онлайн графік</option>
                <option value="ha_entity" ${((Yt = e.outages) == null ? void 0 : Yt.source) === "ha_entity" ? "selected" : ""}>Сенсор Home Assistant (Svitlo Yeah / Live)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор вхідної напруги мережі (перевірка світла):</label>
              <input type="text" id="outagesGridVoltageEntity" value="${((Kt = e.outages) == null ? void 0 : Kt.grid_voltage_entity) || "sensor.breaker_phase_a_voltage"}" placeholder="sensor.breaker_phase_a_voltage">
            </div>
            <div class="field-row">
              <label>Сенсор стану HA (опціонально):</label>
              <input type="text" id="outagesStatusEntity" value="${((ui = e.outages) == null ? void 0 : ui.status_entity) || ""}" placeholder="sensor.electricity">
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
              <input type="checkbox" id="loadAutoCalculate" ${((Jt = e.load) == null ? void 0 : Jt.auto_calculate) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((pt = e.load) == null ? void 0 : pt.separate_export) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((Ct = e.load) == null ? void 0 : Ct.essential_power_entity) || ""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((Ei = e.load) == null ? void 0 : Ei.daily_house_entity) || ""}">
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

          ${(((Qt = e.load) == null ? void 0 : Qt.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((ft = e.load) == null ? void 0 : ft.subloads) || []).map((ue, O) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${O}" value="${ue.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${O}" style="width: 140px;">
                  <option value="boiler" ${ue.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${ue.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ue.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${ue.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${ue.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${ue.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${ue.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${O}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${O}" value="${ue.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((nt = e.tariffs) == null ? void 0 : nt.enabled) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((gt = e.tariffs) == null ? void 0 : gt.currency) || "грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${(($t = e.tariffs) == null ? void 0 : $t.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Tt = e.tariffs) == null ? void 0 : Tt.day_rate) ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Bt = e.tariffs) == null ? void 0 : Bt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((It = e.tariffs) == null ? void 0 : It.night_rate) ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((At = e.tariffs) == null ? void 0 : At.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Nt = e.tariffs) == null ? void 0 : Nt.export_rate) ?? 5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (ue, O) => {
      var q;
      return `<option value="${O}" ${(((q = e.tariffs) == null ? void 0 : q.night_start_hour) ?? 23) === O ? "selected" : ""}>${String(O).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (ue, O) => {
      var q;
      return `<option value="${O}" ${(((q = e.tariffs) == null ? void 0 : q.night_end_hour) ?? 7) === O ? "selected" : ""}>${String(O).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((zt = e.tariffs) == null ? void 0 : zt.import_day_entity) || ""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((Wt = e.tariffs) == null ? void 0 : Wt.import_night_entity) || ""}" placeholder="sensor.daily_energy_night">
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
              <input type="checkbox" id="tariffShowDailyCost" ${((Gt = e.tariffs) == null ? void 0 : Gt.show_daily_cost) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Zt = e.tariffs) == null ? void 0 : Zt.show_export_income) !== !1 ? "checked" : ""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((hi = e.tariffs) == null ? void 0 : hi.show_active_badge) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((bi = e.tariffs) == null ? void 0 : bi.show_solar_savings) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `, this._bindEvents(), this._updateExpandBtn(), n) {
      const ue = this.shadowRoot.querySelector(n);
      if (ue && (ue.focus(), o !== null && r !== null && "setSelectionRange" in ue))
        try {
          ue.setSelectionRange(o, r);
        } catch {
        }
    }
  }
  _bindEvents() {
    var a, s, l, c, d, b, h, _, f, y, m, w;
    const e = this.shadowRoot;
    (a = e.getElementById("btnToggleExpand")) == null || a.addEventListener("click", () => {
      this._applyExpand(!this._isDialogExpanded);
    }), e.querySelectorAll(".tab-btn").forEach((p) => {
      p.addEventListener("click", (u) => {
        this._switchTab(u.target.dataset.tab);
      });
    }), (s = e.getElementById("btnPresetEsp")) == null || s.addEventListener("click", () => this._applyPreset("deye_esphome")), (l = e.getElementById("btnPresetSolarman")) == null || l.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (p, u) => {
      const g = e.getElementById(p);
      g && (g.addEventListener("input", (x) => this._valueChanged(u, x.target.value, !1)), g.addEventListener("change", (x) => this._valueChanged(u, x.target.value, !0)), g.addEventListener("blur", () => this._flushConfig()));
    }, n = (p, u) => {
      const g = e.getElementById(p);
      g && g.addEventListener("change", (x) => this._valueChanged(u, x.target.checked, !0));
    }, o = (p, u, g, x = "") => {
      const S = e.getElementById(p);
      S && (S.addEventListener("input", ($) => {
        const N = parseFloat($.target.value);
        if (g) {
          const A = e.getElementById(g);
          A && (A.innerText = `${N}${x}`);
        }
        this._valueChanged(u, isNaN(N) ? 0 : N, !1);
      }), S.addEventListener("change", ($) => {
        const N = parseFloat($.target.value);
        this._valueChanged(u, isNaN(N) ? 0 : N, !0);
      }), S.addEventListener("blur", () => this._flushConfig()));
    };
    i("title", "title"), i("themeMode", "theme_mode"), i("cardLanguage", "language"), (c = e.getElementById("cardScale")) == null || c.addEventListener("input", (p) => {
      const u = parseFloat(p.target.value), g = e.getElementById("cardScaleVal");
      g && (g.innerText = `${Math.round(u * 100)}%`), this._valueChanged("card_scale", u);
    }), (d = e.getElementById("cardScale")) == null || d.addEventListener("change", () => this._flushConfig()), i("cardMaxWidth", "max_width"), n("showQuickSettings", "show_quick_settings"), i("ctrlSolarCharge", "controls.solar_charge_entity"), i("ctrlSellPower", "controls.sell_power_entity"), i("ctrlGridCharge", "controls.grid_charge_entity"), n("animEnabled", "animations.enabled"), o("animSpeed", "animations.speed", "animSpeedVal", "s"), (b = e.getElementById("solarPvCount")) == null || b.addEventListener("input", (p) => {
      const u = parseInt(p.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = u, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < u; ) {
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
      this._valueChanged("solar.pv_count", u, !0), this._valueChanged("solar.strings", this._config.solar.strings, !0), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].name = u.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].voltage_entity = u.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].current_entity = u.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-power-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].power_entity = u.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-cap-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[g] || (this._config.solar.strings[g] = {}), this._config.solar.strings[g].capacity_kw = parseFloat(u.target.value) || 0, this._valueChanged("solar.strings", this._config.solar.strings);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), i("solarTotalPower", "solar.total_power_entity"), i("solarDailyYield", "solar.daily_yield_entity"), o("solarTargetDaily", "solar.target_daily_yield"), o("solarInstalledPower", "solar.installed_power"), n("solarShowMetrics", "solar.show_metrics"), i("invModel", "inverter.model_name"), i("invPower", "inverter.power_entity"), n("invShowSelfConsumption", "inverter.show_self_consumption"), i("invSelfConsumptionEntity", "inverter.self_consumption_entity"), o("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), i("invTempAc", "inverter.ac_temperature_entity"), i("invTempDc", "inverter.dc_temperature_entity"), i("invVolt", "inverter.voltage_entity"), i("invCurrent", "inverter.current_entity"), i("invFreq", "inverter.frequency_entity"), (h = e.getElementById("auxType")) == null || h.addEventListener("change", (p) => {
      const u = p.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = u;
      const x = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[u] || "Мікроінвертор";
      this._config.aux.title = x;
      const S = e.getElementById("auxTitle");
      S && (S.value = x), this._valueChanged("aux.type", u, !0), this._valueChanged("aux.title", x, !0);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (_ = e.getElementById("windTurbineCount")) == null || _.addEventListener("input", (p) => {
      const u = parseInt(p.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = u, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < u; ) {
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
      this._valueChanged("wind.turbine_count", u, !0), this._valueChanged("wind.turbines", this._config.wind.turbines, !0), this.render();
    }), o("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (f = e.getElementById("windThreshold")) == null || f.addEventListener("input", (p) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(p.target.value));
    }), i("windDailyEnergy", "wind.daily_energy_entity"), i("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].name = u.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-power-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].power_entity = u.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-speed-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].rpm_entity = u.target.value, this._config.wind.turbines[g].speed_entity = u.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-daily-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].daily_energy_entity = u.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[g] || (this._config.wind.turbines[g] = {}), this._config.wind.turbines[g].monthly_energy_entity = u.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), i("batSoc", "battery.soc_entity"), i("batPower", "battery.power_entity"), i("batPowerSign", "battery.power_sign"), i("batVolt", "battery.voltage_entity"), i("batCurrent", "battery.current_entity"), i("batTemp", "battery.temperature_entity"), i("batDelta", "battery.cell_delta_entity"), i("batCapacity", "battery.capacity_entity"), i("batChargeDaily", "battery.charge_daily_entity"), i("batDischargeDaily", "battery.discharge_daily_entity"), (y = e.getElementById("batParallelCount")) == null || y.addEventListener("input", (p) => {
      const u = parseInt(p.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = u, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < u; ) {
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
      this._valueChanged("battery.parallel_batteries", u, !0), this._valueChanged("battery.modules", this._config.battery.modules, !0), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].name = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].soc_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].current_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].voltage_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].temperature_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-delta-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].cell_delta_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].power_entity = u.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((p) => {
      p.addEventListener("input", (u) => {
        const g = parseInt(u.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[g] || (this._config.battery.modules[g] = {}), this._config.battery.modules[g].capacity_kwh = parseFloat(u.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      }), p.addEventListener("blur", () => this._flushConfig());
    }), n("gridSellingEnabled", "grid.selling_enabled"), n("gridAutoCalculate", "grid.auto_calculate"), i("gridPower", "grid.power_entity"), i("gridExternalPower", "grid.external_power_entity"), i("gridVoltage", "grid.voltage_entity"), i("gridStatus", "grid.status_entity"), o("gridVoltageThreshold", "grid.voltage_threshold"), i("gridPowerSign", "grid.power_sign"), o("gridMinThreshold", "grid.min_power_threshold"), i("gridImportDaily", "grid.import_daily_entity"), i("gridExportDaily", "grid.export_daily_entity"), i("gridNonEssential", "grid.non_essential_power_entity"), i("gridCarPower", "grid.car_power_entity"), n("outagesShow", "outages.show"), i("outagesRegion", "outages.region"), i("outagesGroup", "outages.group"), i("outagesSource", "outages.source"), i("outagesGridVoltageEntity", "outages.grid_voltage_entity"), i("outagesStatusEntity", "outages.status_entity"), n("loadAutoCalculate", "load.auto_calculate"), n("loadSeparateExport", "load.separate_export"), i("loadEssential", "load.essential_power_entity"), i("loadDailyHouse", "load.daily_house_entity");
    const r = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const p = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${p}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render();
    };
    (m = e.getElementById("btnAddSubload")) == null || m.addEventListener("click", r), (w = e.getElementById("btnAddSubloadBottom")) == null || w.addEventListener("click", r), e.querySelectorAll(".btn-del-subload").forEach((p) => {
      p.addEventListener("click", (u) => {
        var S;
        const g = u.currentTarget || u.target.closest(".btn-del-subload"), x = parseInt(g.dataset.idx);
        (S = this._config.load) != null && S.subloads && (this._config.load.subloads.splice(x, 1), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((p) => {
      p.addEventListener("input", (u) => {
        var x, S;
        const g = parseInt(u.target.dataset.idx);
        (S = (x = this._config.load) == null ? void 0 : x.subloads) != null && S[g] && (this._config.load.subloads[g].name = u.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), p.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".subload-icon").forEach((p) => {
      p.addEventListener("change", (u) => {
        var x, S;
        const g = parseInt(u.target.dataset.idx);
        (S = (x = this._config.load) == null ? void 0 : x.subloads) != null && S[g] && (this._config.load.subloads[g].icon = u.target.value, this._valueChanged("load.subloads", this._config.load.subloads, !0));
      });
    }), e.querySelectorAll(".subload-entity").forEach((p) => {
      p.addEventListener("input", (u) => {
        var x, S;
        const g = parseInt(u.target.dataset.idx);
        (S = (x = this._config.load) == null ? void 0 : x.subloads) != null && S[g] && (this._config.load.subloads[g].entity = u.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), p.addEventListener("blur", () => this._flushConfig());
    }), n("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), o("tariffDayRate", "tariffs.day_rate"), o("tariffNightRate", "tariffs.night_rate"), o("tariffExportRate", "tariffs.export_rate"), o("tariffNightStart", "tariffs.night_start_hour"), o("tariffNightEnd", "tariffs.night_end_hour"), i("tariffImportDayEntity", "tariffs.import_day_entity"), i("tariffImportNightEntity", "tariffs.import_night_entity"), n("tariffShowDailyCost", "tariffs.show_daily_cost"), n("tariffShowExportIncome", "tariffs.show_export_income"), n("tariffShowActiveBadge", "tariffs.show_active_badge"), n("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", ds);
/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */
var ne = Symbol("NOT_RESOLVED");
function Ye(t, e) {
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
function Ln(t, e) {
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
function dn(t, e) {
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
var cs = Ye("tag:yaml.org,2002:str", {
  resolve: (t) => t,
  identify: (t) => typeof t == "string"
}), ps = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], fs = Ye("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => ps.indexOf(t) !== -1 ? null : ne,
  identify: (t) => t === null,
  represent: () => "null"
}), gs = Ye("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: ["n"],
  resolve: (t, e) => t === "null" || e && t === "" ? null : ne,
  identify: (t) => t === null,
  represent: () => "null"
}), us = [
  "",
  "~",
  "null",
  "Null",
  "NULL"
], hs = Ye("tag:yaml.org,2002:null", {
  implicit: !0,
  implicitFirstChars: [
    "",
    "~",
    "n",
    "N"
  ],
  resolve: (t) => us.indexOf(t) !== -1 ? null : ne,
  identify: (t) => t === null,
  represent: () => "null"
}), bs = [
  "true",
  "True",
  "TRUE"
], ys = [
  "false",
  "False",
  "FALSE"
], _s = Ye("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: [
    "t",
    "T",
    "f",
    "F"
  ],
  resolve: (t) => bs.indexOf(t) !== -1 ? !0 : ys.indexOf(t) !== -1 ? !1 : ne,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), ms = ["true"], vs = ["false"], xs = Ye("tag:yaml.org,2002:bool", {
  implicit: !0,
  implicitFirstChars: ["t", "f"],
  resolve: (t) => ms.indexOf(t) !== -1 ? !0 : vs.indexOf(t) !== -1 ? !1 : ne,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), ws = [
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
], ks = [
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
], Ss = Ye("tag:yaml.org,2002:bool", {
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
  resolve: (t) => ws.indexOf(t) !== -1 ? !0 : ks.indexOf(t) !== -1 ? !1 : ne,
  identify: (t) => Object.prototype.toString.call(t) === "[object Boolean]",
  represent: (t) => t ? "true" : "false"
}), Es = /* @__PURE__ */ new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"), Cs = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function $s(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function Ts(t, e) {
  if (e) {
    if (!Cs.test(t)) return ne;
  } else if (!Es.test(t)) return ne;
  const i = $s(t);
  return Number.isFinite(i) ? i : ne;
}
var fa = Ye("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: Ts,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Bs = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)$"), Is = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function As(t) {
  let e = t, i = 1;
  return (e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b") ? i * parseInt(e.slice(2), 2) : e.startsWith("0o") ? i * parseInt(e.slice(2), 8) : e.startsWith("0x") ? i * parseInt(e.slice(2), 16) : i * parseInt(e, 10);
}
function Ns(t, e) {
  if (e) {
    if (!Is.test(t)) return ne;
  } else if (!Bs.test(t)) return ne;
  const i = As(t);
  return Number.isFinite(i) ? i : ne;
}
var Ls = Ye("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: Ns,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Ds = /* @__PURE__ */ new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function Ps(t) {
  let e = t.replace(/_/g, ""), i = 1;
  if ((e[0] === "-" || e[0] === "+") && (e[0] === "-" && (i = -1), e = e.slice(1)), e.startsWith("0b")) return i * parseInt(e.slice(2), 2);
  if (e.startsWith("0x")) return i * parseInt(e.slice(2), 16);
  if (e.includes(":")) {
    let n = 0;
    for (const o of e.split(":")) n = n * 60 + Number(o);
    return i * n;
  }
  return e !== "0" && e[0] === "0" ? i * parseInt(e, 8) : i * parseInt(e, 10);
}
function Rs(t) {
  if (!Ds.test(t)) return ne;
  const e = Ps(t);
  return Number.isFinite(e) ? e : ne;
}
var kn = Ye("tag:yaml.org,2002:int", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ..."0123456789"
  ],
  resolve: Rs,
  identify: (t) => Number.isInteger(t) && !Object.is(t, -0) && t.toString(10).indexOf("e") < 0,
  represent: (t) => t.toString(10)
}), Ms = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Fs = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Os(t) {
  if (!Ms.test(t)) return ne;
  let e = t.toLowerCase();
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  const n = i * parseFloat(e);
  return Number.isFinite(n) || Fs.test(t) ? n : ne;
}
function Vs(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var ga = Ye("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: Os,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: Vs
}), zs = /* @__PURE__ */ new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"), Ws = /* @__PURE__ */ new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Gs(t, e) {
  if (e) {
    if (!Ws.test(t)) return ne;
    let n = t.toLowerCase();
    const o = n[0] === "-" ? -1 : 1;
    if ("+-".includes(n[0]) && (n = n.slice(1)), n === ".inf") return o === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    if (n === ".nan") return NaN;
    const r = o * parseFloat(n);
    return Number.isFinite(r) ? r : ne;
  }
  if (!zs.test(t)) return ne;
  const i = Number(t);
  return Number.isFinite(i) ? i : ne;
}
function Hs(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var qs = Ye("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: ["-", ..."0123456789"],
  resolve: Gs,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: Hs
}), Us = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), js = /* @__PURE__ */ new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Ys(t) {
  if (!Us.test(t)) return ne;
  let e = t.toLowerCase().replace(/_/g, "");
  const i = e[0] === "-" ? -1 : 1;
  if ("+-".includes(e[0]) && (e = e.slice(1)), e === ".inf") return i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  if (e === ".nan") return NaN;
  let n = 0;
  if (e.includes(":")) {
    for (const o of e.split(":")) n = n * 60 + Number(o);
    n *= i;
  } else n = i * parseFloat(e);
  return Number.isFinite(n) || js.test(t) ? n : ne;
}
function Ks(t) {
  if (isNaN(t)) return ".nan";
  if (t === Number.POSITIVE_INFINITY) return ".inf";
  if (t === Number.NEGATIVE_INFINITY) return "-.inf";
  if (Object.is(t, -0)) return "-0.0";
  const e = t.toString(10);
  return /^[-+]?[0-9]+e/.test(e) ? e.replace("e", ".e") : e;
}
var Sn = Ye("tag:yaml.org,2002:float", {
  implicit: !0,
  implicitFirstChars: [
    "-",
    "+",
    ".",
    ..."0123456789"
  ],
  resolve: Ys,
  identify: (t) => typeof t == "number" && (!Number.isInteger(t) || Object.is(t, -0) || t.toString(10).indexOf("e") >= 0),
  represent: Ks
}), Js = Ye("tag:yaml.org,2002:merge", {
  implicit: !0,
  implicitFirstChars: ["<"],
  resolve: (t, e) => t === "<<" || e && t === "" ? "<<" : ne,
  identify: () => !1
}), Qs = /^[A-Za-z0-9+/]*={0,2}$/;
function Zs(t) {
  const e = t.replace(/\s/g, "");
  if (e.length % 4 !== 0 || !Qs.test(e)) return ne;
  const i = atob(e), n = new Uint8Array(i.length);
  for (let o = 0; o < i.length; o++) n[o] = i.charCodeAt(o);
  return n;
}
function Xs(t) {
  let e = "";
  for (let i = 0; i < t.length; i++) e += String.fromCharCode(t[i]);
  return btoa(e);
}
var el = Ye("tag:yaml.org,2002:binary", {
  resolve: Zs,
  identify: (t) => Object.prototype.toString.call(t) === "[object Uint8Array]",
  represent: Xs
}), tl = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), il = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function jr(t, e, i, n = 0, o = 0, r = 0, a = 0) {
  const s = new Date(Date.UTC(t, e, i, n, o, r, a));
  return s.setUTCFullYear(t, e, i), s;
}
function nl(t) {
  let e = tl.exec(t);
  if (e === null && (e = il.exec(t)), e === null) return ne;
  const i = +e[1], n = +e[2] - 1, o = +e[3];
  if (!e[4]) {
    const d = jr(i, n, o);
    return d.getUTCFullYear() !== i || d.getUTCMonth() !== n || d.getUTCDate() !== o ? ne : d;
  }
  const r = +e[4], a = +e[5], s = +e[6];
  let l = 0;
  if (r > 23 || a > 59 || s > 59) return ne;
  if (e[7]) {
    let d = e[7].slice(0, 3);
    for (; d.length < 3; ) d += "0";
    l = +d;
  }
  const c = jr(i, n, o, r, a, s, l);
  if (c.getUTCFullYear() !== i || c.getUTCMonth() !== n || c.getUTCDate() !== o) return ne;
  if (e[9]) {
    const d = +e[10], b = +(e[11] || 0);
    if (d > 23 || b > 59) return ne;
    const h = (d * 60 + b) * 6e4;
    c.setTime(c.getTime() - (e[9] === "-" ? -h : h));
  }
  return c;
}
var ol = Ye("tag:yaml.org,2002:timestamp", {
  implicit: !0,
  implicitFirstChars: [..."0123456789"],
  resolve: nl,
  identify: (t) => t instanceof Date,
  represent: (t) => t.toISOString()
}), rl = Ln("tag:yaml.org,2002:seq", {
  create: () => [],
  addItem: (t, e) => {
    t.push(e);
  },
  identify: Array.isArray
});
function cn(t) {
  if (t === null || typeof t != "object" || Array.isArray(t)) return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function En(t, e) {
  const i = {};
  for (const n of e) t[n] !== void 0 && (i[n] = t[n]);
  return i;
}
var al = Ln("tag:yaml.org,2002:omap", {
  create: () => ({
    list: [],
    seen: /* @__PURE__ */ new Set()
  }),
  addItem: (t, e) => {
    let i;
    if (e instanceof Map) {
      if (e.size !== 1) return "cannot resolve an ordered map item";
      i = e.keys().next().value;
    } else if (cn(e)) {
      const n = Object.keys(e);
      if (n.length !== 1) return "cannot resolve an ordered map item";
      i = n[0];
    } else return "cannot resolve an ordered map item";
    return t.seen.has(i) ? "duplicate key in ordered map" : (t.seen.add(i), t.list.push(e), "");
  },
  finalize: (t) => t.list,
  identify: () => !1
}), sl = Ln("tag:yaml.org,2002:pairs", {
  create: () => [],
  addItem: (t, e) => {
    if (e instanceof Map)
      return e.size !== 1 ? "cannot resolve a pairs item" : (t.push(e.entries().next().value), "");
    if (Object.prototype.toString.call(e) !== "[object Object]") return "cannot resolve a pairs item";
    const i = e, n = Object.keys(i);
    return n.length !== 1 ? "cannot resolve a pairs item" : (t.push([n[0], i[n[0]]]), "");
  },
  identify: () => !1
}), ll = dn("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: cn,
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
}), dl = dn("tag:yaml.org,2002:set", {
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
function cl() {
  return {
    scalar: /* @__PURE__ */ Object.create(null),
    sequence: /* @__PURE__ */ Object.create(null),
    mapping: /* @__PURE__ */ Object.create(null)
  };
}
function pl() {
  return {
    scalar: [],
    sequence: [],
    mapping: []
  };
}
function fl(t) {
  const e = [];
  for (const i of t) {
    let n = e.length;
    for (let o = 0; o < e.length; o++) {
      const r = e[o];
      if (r.nodeKind === i.nodeKind && r.tagName === i.tagName && r.matchByTagPrefix === i.matchByTagPrefix) {
        n = o;
        break;
      }
    }
    e[n] = i;
  }
  return e;
}
var pn = class ua {
  constructor(e) {
    ht(this, "tags");
    /** @internal */
    ht(this, "implicitScalarTags");
    /**
    * Dispatch implicit scalar resolvers by `source.charAt(0)`. Each bucket holds
    * the resolvers that may match that key, in schema order; a key absent from
    * the map uses
    * {@link Schema.implicitScalarAnyFirstChar}
    * (resolvers that declared no first-char constraint, so they apply to any
    * first character).
    */
    ht(this, "implicitScalarByFirstChar");
    ht(this, "implicitScalarAnyFirstChar");
    /**
    * The default scalar tag (`!!str`), resolved once so the composer's fallback
    * for unresolved plain scalars avoids a keyed lookup per scalar.
    *
    * @internal
    */
    ht(this, "defaultScalarTag");
    /**
    * The default container tags (`!!seq` / `!!map`), used by the dumper: when a
    * value is identified by its default tag, the tag is implicit and not
    * printed. Undefined if the schema does not define them (then such values
    * can't be dumped).
    *
    * @internal
    */
    ht(this, "defaultSequenceTag");
    /** @internal */
    ht(this, "defaultMappingTag");
    ht(this, "exact");
    ht(this, "prefix");
    const i = fl(e), n = [], o = cl(), r = pl();
    for (const d of i) {
      if (d.nodeKind === "scalar" && d.implicit) {
        if (d.matchByTagPrefix) throw new Error("Implicit scalar tags cannot match by tag prefix");
        n.push(d);
      }
      switch (d.nodeKind) {
        case "scalar":
          d.matchByTagPrefix ? r.scalar.push(d) : o.scalar[d.tagName] = d;
          break;
        case "sequence":
          d.matchByTagPrefix ? r.sequence.push(d) : o.sequence[d.tagName] = d;
          break;
        case "mapping":
          d.matchByTagPrefix ? r.mapping.push(d) : o.mapping[d.tagName] = d;
      }
    }
    const a = n.filter((d) => d.implicitFirstChars === null), s = /* @__PURE__ */ new Set();
    for (const d of n) if (d.implicitFirstChars !== null) for (const b of d.implicitFirstChars) s.add(b);
    const l = /* @__PURE__ */ new Map();
    for (const d of s) l.set(d, n.filter((b) => b.implicitFirstChars === null || b.implicitFirstChars.indexOf(d) !== -1));
    const c = o.scalar["tag:yaml.org,2002:str"];
    if (!c) throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
    this.tags = i, this.implicitScalarTags = n, this.implicitScalarByFirstChar = l, this.implicitScalarAnyFirstChar = a, this.defaultScalarTag = c, this.defaultSequenceTag = o.sequence["tag:yaml.org,2002:seq"], this.defaultMappingTag = o.mapping["tag:yaml.org,2002:map"], this.exact = o, this.prefix = r;
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
    for (const o of i) {
      const r = o.resolve(e, !1, o.tagName);
      if (r !== ne) return {
        value: r,
        tag: o
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
    return new ua([...this.tags, ...i]);
  }
}, Dn = new pn([
  cs,
  rl,
  ll
]);
new pn([
  ...Dn.tags,
  gs,
  xs,
  Ls,
  qs
]);
var gl = new pn([
  ...Dn.tags,
  fs,
  _s,
  fa,
  ga
]), ul = new pn([
  ...Dn.tags,
  hs,
  Ss,
  kn,
  Sn,
  ol,
  Js,
  el,
  al,
  sl,
  dl
]), hl = ul.withTags({
  ...kn,
  resolve: (t, e, i) => {
    const n = kn.resolve(t, e, i);
    return n === ne ? fa.resolve(t, e, i) : n;
  }
}, {
  ...Sn,
  resolve: (t, e, i) => {
    const n = Sn.resolve(t, e, i);
    return n === ne ? ga.resolve(t, e, i) : n;
  }
});
dn("tag:yaml.org,2002:map", {
  create: () => /* @__PURE__ */ new Map(),
  addPair: (t, e, i) => (t.set(e, i), ""),
  has: (t, e) => t.has(e),
  keys: (t) => t.keys(),
  get: (t, e) => t.get(e),
  identify: (t) => t instanceof Map || cn(t),
  represent: (t) => {
    if (t instanceof Map) return t;
    const e = /* @__PURE__ */ new Map(), i = t;
    for (const n of Object.keys(i)) e.set(n, i[n]);
    return e;
  }
});
function Yr(t) {
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
dn("tag:yaml.org,2002:map", {
  create: () => ({}),
  identify: cn,
  represent: (t) => {
    const e = /* @__PURE__ */ new Map();
    for (const i of Object.keys(t)) e.set(i, t[i]);
    return e;
  },
  addPair: (t, e, i) => {
    const n = Yr(e);
    return n === null ? "nested arrays are not supported inside keys" : (n === "__proto__" ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, "");
  },
  has: (t, e) => {
    const i = Yr(e);
    return i !== null && Object.prototype.hasOwnProperty.call(t, i);
  },
  keys: (t) => Object.keys(t),
  get: (t, e) => {
    const i = String(e);
    return Object.prototype.hasOwnProperty.call(t, i) ? t[i] : null;
  }
});
var bl = {
  maxLength: 79,
  indent: 1,
  linesBefore: 3,
  linesAfter: 2
};
function bn(t, e, i, n, o) {
  let r = "", a = "";
  const s = Math.floor(o / 2) - 1;
  return n - e > s && (r = " ... ", e = n - s + r.length), i - n > s && (a = " ...", i = n + s - a.length), {
    str: r + t.slice(e, i).replace(/\t/g, "→") + a,
    pos: n - e + r.length
  };
}
function yn(t, e) {
  return " ".repeat(Math.max(e - t.length, 0)) + t;
}
function yl(t, e) {
  if (!t.buffer) return null;
  const i = {
    ...bl,
    ...e
  }, n = /\r?\n|\r|\0/g, o = [0], r = [];
  let a, s = -1;
  for (; a = n.exec(t.buffer); )
    r.push(a.index), o.push(a.index + a[0].length), t.position <= a.index && s < 0 && (s = o.length - 2);
  s < 0 && (s = o.length - 1);
  let l = "";
  const c = Math.min(t.line + i.linesAfter, r.length).toString().length, d = i.maxLength - (i.indent + c + 3);
  for (let h = 1; h <= i.linesBefore && !(s - h < 0); h++) {
    const _ = bn(t.buffer, o[s - h], r[s - h], t.position - (o[s] - o[s - h]), d);
    l = `${" ".repeat(i.indent)}${yn((t.line - h + 1).toString(), c)} | ${_.str}
${l}`;
  }
  const b = bn(t.buffer, o[s], r[s], t.position, d);
  l += `${" ".repeat(i.indent)}${yn((t.line + 1).toString(), c)} | ${b.str}
`, l += `${"-".repeat(i.indent + c + 3 + b.pos)}^
`;
  for (let h = 1; h <= i.linesAfter && !(s + h >= r.length); h++) {
    const _ = bn(t.buffer, o[s + h], r[s + h], t.position - (o[s] - o[s + h]), d);
    l += `${" ".repeat(i.indent)}${yn((t.line + h + 1).toString(), c)} | ${_.str}
`;
  }
  return l.replace(/\n$/, "");
}
function Kr(t, e) {
  let i = "";
  return t.mark ? (t.mark.name && (i += `in "${t.mark.name}" `), i += `(${t.mark.line + 1}:${t.mark.column + 1})`, !e && t.mark.snippet && (i += `

${t.mark.snippet}`), `${t.reason} ${i}`) : t.reason;
}
var di = class ha extends Error {
  /**
  * Optional `mark` contains source snippet data. Usually, use
  * {@link YAMLException.throwAt} instead of passing it directly.
  */
  constructor(i, n) {
    super();
    ht(this, "reason");
    ht(this, "mark");
    this.name = "YAMLException", this.reason = i, this.mark = n, this.message = Kr(this, !1), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
  /**
  * Returns the formatted error, omitting the source snippet in compact mode.
  */
  toString(i) {
    return `${this.name}: ${Kr(this, i)}`;
  }
  /**
  * Builds a YAMLException with a source snippet and throws it. `source` is
  * the raw input text; `position` is an offset into it.
  */
  static throwAt(i, n, o, r = "") {
    let a = 0, s = 0;
    for (let c = 0; c < n; c++) {
      const d = i.charCodeAt(c);
      d === 10 ? (a++, s = c + 1) : d === 13 && (a++, i.charCodeAt(c + 1) === 10 && c++, s = c + 1);
    }
    const l = {
      name: r,
      buffer: i,
      position: n,
      line: a,
      column: n - s
    };
    throw l.snippet = yl(l), new ha(o, l);
  }
}, We = {
  DOCUMENT: 1,
  SEQUENCE: 2,
  MAPPING: 3,
  SCALAR: 4,
  ALIAS: 5,
  POP: 6
}, W = {
  PLAIN: 1,
  SINGLE_QUOTED: 2,
  DOUBLE_QUOTED: 3,
  LITERAL_BLOCK: 4,
  FOLDED_BLOCK: 5
}, bt = {
  BLOCK: 1,
  FLOW: 2
}, Ft = {
  CLIP: 1,
  STRIP: 2,
  KEEP: 3
}, _l = -1;
function Jr(t) {
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
var ba = new Array(256), ya = new Array(256);
for (let t = 0; t < 256; t++)
  ba[t] = Jr(t) ? 1 : 0, ya[t] = Jr(t);
function ml(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode((t - 65536 >> 10) + 55296, (t - 65536 & 1023) + 56320);
}
function vl(t) {
  return t >= 48 && t <= 57 ? t - 48 : (t | 32) - 97 + 10;
}
function xl(t) {
  return t === 120 ? 2 : t === 117 ? 4 : 8;
}
function rn(t, e, i) {
  let n = 0;
  for (; e < i; ) {
    const o = t.charCodeAt(e);
    if (o === 10)
      n++, e++;
    else if (o === 13)
      n++, e++, t.charCodeAt(e) === 10 && e++;
    else if (o === 32 || o === 9) e++;
    else break;
  }
  return {
    position: e,
    breaks: n
  };
}
function Pn(t) {
  return t === 1 ? " " : `
`.repeat(t - 1);
}
function wl(t, e, i) {
  let n = "", o = e, r = e, a = e;
  for (; o < i; ) {
    const s = t.charCodeAt(o);
    if (s === 10 || s === 13) {
      n += t.slice(r, a);
      const l = rn(t, o, i);
      n += Pn(l.breaks), o = r = a = l.position;
    } else
      o++, s !== 32 && s !== 9 && (a = o);
  }
  return n + t.slice(r, a);
}
function kl(t, e, i) {
  let n = "", o = e, r = e, a = e;
  for (; o < i; ) {
    const s = t.charCodeAt(o);
    if (s === 39)
      n += t.slice(r, o) + "'", o += 2, r = a = o;
    else if (s === 10 || s === 13) {
      n += t.slice(r, a);
      const l = rn(t, o, i);
      n += Pn(l.breaks), o = r = a = l.position;
    } else
      o++, s !== 32 && s !== 9 && (a = o);
  }
  return n + t.slice(r, i);
}
function Sl(t, e, i) {
  let n = "", o = e, r = e, a = e;
  for (; o < i; ) {
    const s = t.charCodeAt(o);
    if (s === 92) {
      n += t.slice(r, o), o++;
      const l = t.charCodeAt(o);
      if (l === 10 || l === 13) o = rn(t, o, i).position;
      else if (l < 256 && ba[l])
        n += ya[l], o++;
      else {
        let c = xl(l), d = 0;
        for (; c > 0; c--) {
          o++;
          const b = vl(t.charCodeAt(o));
          d = (d << 4) + b;
        }
        n += ml(d), o++;
      }
      r = a = o;
    } else if (s === 10 || s === 13) {
      n += t.slice(r, a);
      const l = rn(t, o, i);
      n += Pn(l.breaks), o = r = a = l.position;
    } else
      o++, s !== 32 && s !== 9 && (a = o);
  }
  return n + t.slice(r, i);
}
function Qr(t, e, i, n, o, r) {
  const a = n < 0 ? 0 : n, s = t.slice(e, i).replace(/\r\n?/g, `
`), l = s === "" ? [] : (s.endsWith(`
`) ? s.slice(0, -1) : s).split(`
`);
  let c = "", d = !1, b = 0, h = !1;
  for (const _ of l) {
    let f = 0;
    for (; f < a && _.charCodeAt(f) === 32; ) f++;
    if (n < 0 || f >= _.length) {
      b++;
      continue;
    }
    const y = _.slice(a), m = y.charCodeAt(0);
    r ? m === 32 || m === 9 ? (h = !0, c += `
`.repeat(d ? 1 + b : b)) : h ? (h = !1, c += `
`.repeat(b + 1)) : b === 0 ? d && (c += " ") : c += `
`.repeat(b) : c += `
`.repeat(d ? 1 + b : b), c += y, d = !0, b = 0;
  }
  return o === Ft.KEEP ? c += `
`.repeat(d ? 1 + b : b) : o !== Ft.STRIP && d && (c += `
`), c;
}
function El(t, e) {
  if (e.valueStart === _l) return "";
  const { valueStart: i, valueEnd: n } = e;
  if (e.fast) return t.slice(i, n);
  switch (e.style) {
    case W.SINGLE_QUOTED:
      return kl(t, i, n);
    case W.DOUBLE_QUOTED:
      return Sl(t, i, n);
    case W.LITERAL_BLOCK:
      return Qr(t, i, n, e.indent, e.chomping, !1);
    case W.FOLDED_BLOCK:
      return Qr(t, i, n, e.indent, e.chomping, !0);
    default:
      return wl(t, i, n);
  }
}
var Cl = Object.assign(/* @__PURE__ */ Object.create(null), {
  "!": "!",
  "!!": "tag:yaml.org,2002:"
}), _a = "-#;/?:@&=+$_.~*'()", $l = _a + "!,[]", Zr = "0123456789ABCDEF";
function Mt(t) {
  return "%" + Zr[t >> 4] + Zr[t & 15];
}
function _n(t, e) {
  const i = e ? _a : $l;
  let n = "";
  for (let o = 0; o < t.length; o++) {
    let r = t.charCodeAt(o);
    if (r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 || i.includes(t[o])) {
      n += t[o];
      continue;
    }
    r >= 55296 && r <= 56319 && (r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++o) & 1023)), r < 128 ? n += Mt(r) : r < 2048 ? n += Mt(192 | r >> 6) + Mt(128 | r & 63) : r < 65536 ? n += Mt(224 | r >> 12) + Mt(128 | r >> 6 & 63) + Mt(128 | r & 63) : n += Mt(240 | r >> 18) + Mt(128 | r >> 12 & 63) + Mt(128 | r >> 6 & 63) + Mt(128 | r & 63);
  }
  return n;
}
function mn(t) {
  let e = "", i = 0;
  for (; i < t.length; ) {
    if (t.charCodeAt(i) !== 37) {
      e += t[i++];
      continue;
    }
    let n = parseInt(t.slice(i + 1, i + 3), 16);
    if (i += 3, n >= 192) {
      let o = n < 224 ? 1 : n < 240 ? 2 : 3;
      for (n &= (1 << 6 - o) - 1; o-- > 0; )
        n = n << 6 | parseInt(t.slice(i + 1, i + 3), 16) & 63, i += 3;
    }
    n < 65536 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023));
  }
  return e;
}
function ma(t, e) {
  if (t.startsWith("!<") && t.endsWith(">")) return mn(t.slice(2, -1));
  const i = t.indexOf("!", 1), n = i === -1 ? "!" : t.slice(0, i + 1);
  return mn((e == null ? void 0 : e[n]) ?? Cl[n] ?? n) + mn(t.slice(n.length));
}
function va(t) {
  let e = t;
  return e.charCodeAt(0) === 33 ? (e = e.slice(1), `!${_n(e, !0)}`) : e.slice(0, 18) === "tag:yaml.org,2002:" ? `!!${_n(e.slice(18), !0)}` : `!<${_n(e, !1)}>`;
}
var Ti = -1, Tl = "tag:yaml.org,2002:merge", Rn = {
  filename: "",
  schema: gl,
  json: !1,
  maxTotalMergeKeys: 1e4,
  maxAliases: -1
};
function Bl(t) {
  return "tagStart" in t && t.tagStart !== Ti ? t.tagStart : "anchorStart" in t && t.anchorStart !== Ti ? t.anchorStart : "valueStart" in t && t.valueStart !== Ti ? t.valueStart : "start" in t ? t.start : 0;
}
function Ge(t, e) {
  di.throwAt(t.source, t.position, e, t.filename);
}
function xa(t, e, i, n) {
  try {
    return i.finalize(n);
  } catch (o) {
    if (o instanceof di) throw o;
    di.throwAt(t.source, e, o instanceof Error ? o.message : String(o), t.filename);
  }
}
function Il(t, e) {
  const i = El(t.source, e), n = e.tagStart === Ti ? "" : t.source.slice(e.tagStart, e.tagEnd), o = t.schema.defaultScalarTag;
  if (n !== "") {
    if (n === "!") return {
      value: i,
      tag: o
    };
    const r = ma(n, t.tagHandlers), a = t.schema.lookupScalarTag(r);
    if (a) {
      const l = a.resolve(i, !0, r);
      return l === ne && Ge(t, `cannot resolve a node with !<${r}> explicit tag`), {
        value: l,
        tag: a
      };
    }
    const s = t.schema.lookupMappingTag(r) ?? t.schema.lookupSequenceTag(r);
    if (s) {
      i !== "" && Ge(t, `cannot resolve a node with !<${r}> explicit tag`);
      const l = s.create(r);
      return {
        value: s.carrierIsResult ? l : xa(t, t.position, s, l),
        tag: s
      };
    }
    Ge(t, `unknown scalar tag !<${r}>`);
  }
  return e.style === W.PLAIN ? t.schema.resolveImplicitScalarTag(i) : {
    value: o.resolve(i, !1, o.tagName),
    tag: o
  };
}
function Xr(t, e, i) {
  const n = e.tagStart === Ti ? "" : t.source.slice(e.tagStart, e.tagEnd);
  return n === "" || n === "!" ? i : ma(n, t.tagHandlers);
}
function wa(t) {
  return t.nodeKind === "mapping";
}
function ea(t) {
  t.totalMergeKeys++, t.maxTotalMergeKeys !== -1 && t.totalMergeKeys > t.maxTotalMergeKeys && Ge(t, `merge keys exceeded maxTotalMergeKeys (${t.maxTotalMergeKeys})`);
}
function ta(t, e, i, n) {
  ea(t);
  for (const o of n.keys(i)) {
    if (ea(t), e.tag.has(e.value, o)) continue;
    const r = e.tag.addPair(e.value, o, n.get(i, o));
    r && Ge(t, r), e.overridable ?? (e.overridable = /* @__PURE__ */ new Set()), e.overridable.add(o);
  }
}
function Al(t, e, i, n) {
  if (t.position = e.keyPosition, wa(n)) ta(t, e, i, n);
  else if (n.nodeKind === "sequence" && Array.isArray(i)) {
    i.length > 100 && Ge(t, "abnormal merge sequence size");
    for (const o of i) {
      const r = t.nodeTags.get(o);
      r || Ge(t, "cannot merge mappings; the provided source object is unacceptable"), ta(t, e, o, r);
    }
  } else Ge(t, "cannot merge mappings; the provided source object is unacceptable");
}
function Nl(t, e, i, n, o) {
  var a, s;
  if (t.position = e.keyPosition, e.keyIsMerge) {
    Al(t, e, n, o);
    return;
  }
  !t.json && e.tag.has(e.value, i) && !((a = e.overridable) != null && a.has(i)) && Ge(t, "duplicated mapping key");
  const r = e.tag.addPair(e.value, i, n);
  r && Ge(t, r), (s = e.overridable) == null || s.delete(i);
}
function vn(t, e, i) {
  const n = t.frames[t.frames.length - 1];
  if (n.kind === "document")
    n.value = e, n.hasValue = !0;
  else if (n.kind === "sequence") {
    wa(i) && t.nodeTags.set(e, i);
    const o = n.tag.addItem(n.value, e, n.index++);
    o && Ge(t, o);
  } else if (n.hasKey) {
    const o = n.key;
    n.key = void 0, n.hasKey = !1, Nl(t, n, o, e, i);
  } else
    n.key = e, n.keyPosition = t.position, n.hasKey = !0, n.keyIsMerge = i.tagName === Tl;
}
function xn(t, e, i, n, o) {
  if (e.anchorStart !== Ti) {
    const r = {
      value: i,
      tag: n,
      isValueFinal: o
    };
    return t.anchors.set(t.source.slice(e.anchorStart, e.anchorEnd), r), r;
  }
  return null;
}
function Ll(t, e) {
  const i = {
    ...Rn,
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
    switch (i.position = Bl(n), n.type) {
      case We.DOCUMENT:
        i.anchors = /* @__PURE__ */ new Map(), i.nodeTags = /* @__PURE__ */ new Map(), i.aliasCount = 0, i.tagHandlers = /* @__PURE__ */ Object.create(null);
        for (const o of n.directives) o.kind === "tag" && (i.tagHandlers[o.handle] = o.prefix);
        i.frames.push({
          kind: "document",
          position: i.position,
          value: void 0,
          hasValue: !1
        });
        break;
      case We.SCALAR: {
        const { value: o, tag: r } = Il(i, n);
        xn(i, n, o, r, !0), vn(i, o, r);
        break;
      }
      case We.SEQUENCE: {
        const o = Xr(i, n, "tag:yaml.org,2002:seq"), r = i.schema.lookupSequenceTag(o);
        r || Ge(i, `unknown sequence tag !<${o}>`);
        const a = r.create(o), s = xn(i, n, a, r, r.carrierIsResult);
        i.frames.push({
          kind: "sequence",
          position: i.position,
          value: a,
          tag: r,
          anchor: s,
          index: 0
        });
        break;
      }
      case We.MAPPING: {
        const o = Xr(i, n, "tag:yaml.org,2002:map"), r = i.schema.lookupMappingTag(o);
        r || Ge(i, `unknown mapping tag !<${o}>`);
        const a = r.create(o), s = xn(i, n, a, r, r.carrierIsResult);
        i.frames.push({
          kind: "mapping",
          position: i.position,
          value: a,
          tag: r,
          anchor: s,
          key: void 0,
          keyPosition: i.position,
          hasKey: !1,
          keyIsMerge: !1,
          overridable: null
        });
        break;
      }
      case We.ALIAS: {
        i.maxAliases !== -1 && ++i.aliasCount > i.maxAliases && Ge(i, `aliases exceeded maxAliases (${i.maxAliases})`);
        const o = i.source.slice(n.anchorStart, n.anchorEnd), r = i.anchors.get(o);
        r || Ge(i, `unidentified alias "${o}"`), r.isValueFinal || Ge(i, `recursive alias "${o}" is not supported for tag ${r.tag.tagName} because it uses finalize()`), vn(i, r.value, r.tag);
        break;
      }
      case We.POP: {
        const o = i.frames.pop();
        if (o.kind === "mapping" && o.hasKey && (i.position = o.keyPosition, Ge(i, "incomplete mapping pair in event stream")), o.kind === "document") i.documents.push(o.value);
        else {
          const r = o.tag.carrierIsResult ? o.value : xa(i, o.position, o.tag, o.value);
          o.anchor && (o.anchor.value = r, o.anchor.isValueFinal = !0), vn(i, r, o.tag);
        }
        break;
      }
    }
  }
  return i.documents;
}
var re = -1, ka = Object.prototype.hasOwnProperty, Li = 1, Sa = 2, Ea = 3, an = 4, Dl = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Pl = /[,\[\]{}]/, Ca = /^(?:!|!!|![0-9A-Za-z-]+!)$/, Cn = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`, $a = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`, Rl = new RegExp(`^(?:${Cn})*$`), Ml = new RegExp(`^(?:${$a})+$`), Fl = new RegExp(`^(?:!(?:${Cn})*|${$a}(?:${Cn})*)$`), Mn = {
  filename: "",
  maxDepth: 100
};
function Ol(t, e, i) {
  t.events.push({
    type: We.DOCUMENT,
    explicitStart: e,
    explicitEnd: i,
    directives: t.directives
  });
}
function Ta(t, e, i, n, o, r, a) {
  t.events.push({
    type: We.SEQUENCE,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: o,
    tagEnd: r,
    style: a
  });
}
function Ba(t, e, i, n, o, r, a) {
  t.events.push({
    type: We.MAPPING,
    start: e,
    anchorStart: i,
    anchorEnd: n,
    tagStart: o,
    tagEnd: r,
    style: a
  });
}
function ia(t, e) {
  t.events.splice(e.eventsLength, 0, {
    type: We.MAPPING,
    start: e.position,
    anchorStart: re,
    anchorEnd: re,
    tagStart: re,
    tagEnd: re,
    style: bt.FLOW
  });
}
function Ri(t, e, i, n, o, r, a, s, l = Ft.CLIP, c = -1, d = !1) {
  t.events.push({
    type: We.SCALAR,
    valueStart: e,
    valueEnd: i,
    anchorStart: n,
    anchorEnd: o,
    tagStart: r,
    tagEnd: a,
    style: s,
    chomping: l,
    indent: c,
    fast: d
  });
}
function Vl(t, e, i) {
  t.events.push({
    type: We.ALIAS,
    anchorStart: e,
    anchorEnd: i
  });
}
function Bi(t) {
  t.events.push({ type: We.POP });
}
function Xe(t) {
  Ri(t, re, re, re, re, re, re, W.PLAIN);
}
function na() {
  return {
    anchorStart: re,
    anchorEnd: re,
    tagStart: re,
    tagEnd: re
  };
}
function Ii(t) {
  return {
    position: t.position,
    line: t.line,
    lineStart: t.lineStart,
    lineIndent: t.lineIndent,
    firstTabInLine: t.firstTabInLine,
    eventsLength: t.events.length
  };
}
function Ai(t, e) {
  t.position = e.position, t.line = e.line, t.lineStart = e.lineStart, t.lineIndent = e.lineIndent, t.firstTabInLine = e.firstTabInLine, t.events.length = e.eventsLength;
}
function M(t, e) {
  di.throwAt(t.input.slice(0, t.length), t.position, e, t.filename);
}
function ze(t) {
  return t === 10 || t === 13;
}
function Mi(t) {
  return t === 9 || t === 32;
}
function Et(t) {
  return Mi(t) || ze(t);
}
function Ut(t) {
  return t === 0 || Et(t);
}
function Si(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function zl(t) {
  return t >= 48 && t <= 57 ? t - 48 : -1;
}
function Wl(t) {
  if (t >= 48 && t <= 57) return t - 48;
  const e = t | 32;
  return e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
function Gl(t) {
  return t === 120 ? 2 : t === 117 ? 4 : t === 85 ? 8 : 0;
}
function Hl(t) {
  return t === 48 || t === 97 || t === 98 || t === 116 || t === 9 || t === 110 || t === 118 || t === 102 || t === 114 || t === 101 || t === 32 || t === 34 || t === 47 || t === 92 || t === 78 || t === 95 || t === 76 || t === 80;
}
function sn(t) {
  t.input.charCodeAt(t.position) === 10 ? t.position++ : (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++), t.line++, t.lineStart = t.position, t.lineIndent = 0, t.firstTabInLine = -1;
}
function je(t, e) {
  let i = 0, n = t.input.charCodeAt(t.position), o = t.position === t.lineStart || Et(t.input.charCodeAt(t.position - 1));
  for (; n !== 0; ) {
    for (; Mi(n); )
      o = !0, n === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), n = t.input.charCodeAt(++t.position);
    if (e && o && n === 35) do
      n = t.input.charCodeAt(++t.position);
    while (!ze(n) && n !== 0);
    if (!ze(n)) break;
    for (sn(t), i++, o = !0, n = t.input.charCodeAt(t.position); n === 32; )
      t.lineIndent++, n = t.input.charCodeAt(++t.position);
  }
  return i;
}
function Di(t, e = t.position) {
  const i = t.input.charCodeAt(e);
  if ((i === 45 || i === 46) && i === t.input.charCodeAt(e + 1) && i === t.input.charCodeAt(e + 2)) {
    const n = t.input.charCodeAt(e + 3);
    return n === 0 || Et(n);
  }
  return !1;
}
function Ia(t) {
  t.position === t.lineStart && t.input.charCodeAt(t.position) === 65279 && (t.position++, t.lineStart = t.position);
}
function Fn(t) {
  if (t.position !== t.lineStart) return !1;
  if (Di(t)) return !0;
  if (t.input.charCodeAt(t.position) !== 65279) return !1;
  const e = Ii(t);
  Ia(t), je(t, !0);
  const i = t.input.charCodeAt(t.position), n = t.position === t.lineStart && (i === 37 || i === 45 && Di(t));
  return Ai(t, e), n;
}
function oa(t) {
  let e = t.input.charCodeAt(t.position);
  for (; e !== 0 && !ze(e); ) e = t.input.charCodeAt(++t.position);
}
function Aa(t, e, i) {
  const n = Dl.exec(t.input.slice(e, i));
  n !== null && (t.position = e + n.index + n[0].length - 1, M(t, "the stream contains non-printable characters"));
}
function ql(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 33) return !1;
  e.tagStart !== re && M(t, "duplication of a tag property");
  const n = t.position;
  let o = !1, r = !1, a = "!", s = t.input.charCodeAt(++t.position);
  s === 60 ? (o = !0, s = t.input.charCodeAt(++t.position)) : s === 33 && (r = !0, a = "!!", s = t.input.charCodeAt(++t.position));
  let l = t.position, c;
  if (o) {
    for (; s !== 0 && s !== 62; ) s = t.input.charCodeAt(++t.position);
    s !== 62 && M(t, "unexpected end of the stream within a verbatim tag"), c = t.input.slice(l, t.position), t.position++;
  } else {
    for (; s !== 0 && !Et(s) && !(i && Si(s)); )
      s === 33 && (r ? M(t, "tag suffix cannot contain exclamation marks") : (a = t.input.slice(l - 1, t.position + 1), Ca.test(a) || M(t, "named tag handle cannot contain such characters"), r = !0, l = t.position + 1)), s = t.input.charCodeAt(++t.position);
    c = t.input.slice(l, t.position), Pl.test(c) && M(t, "tag suffix cannot contain flow indicator characters");
  }
  return c && !(o ? Rl.test(c) : Ml.test(c)) && M(t, `tag name cannot contain such characters: ${c}`), !o && a !== "!" && a !== "!!" && !ka.call(t.tagHandlers, a) && M(t, `undeclared tag handle "${a}"`), e.tagStart = n, e.tagEnd = t.position, !0;
}
function Ul(t, e) {
  if (t.input.charCodeAt(t.position) !== 38) return !1;
  e.anchorStart !== re && M(t, "duplication of an anchor property"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !Et(t.input.charCodeAt(t.position)) && !Si(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && M(t, "name of an anchor node must contain at least one character"), e.anchorStart = i, e.anchorEnd = t.position, !0;
}
function jl(t, e) {
  if (t.input.charCodeAt(t.position) !== 42) return !1;
  (e.anchorStart !== re || e.tagStart !== re) && M(t, "alias node should not have any properties"), t.position++;
  const i = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !Et(t.input.charCodeAt(t.position)) && !Si(t.input.charCodeAt(t.position)); ) t.position++;
  return t.position === i && M(t, "name of an alias node must contain at least one character"), Vl(t, i, t.position), !0;
}
function $n(t, e) {
  je(t, !1), t.lineIndent < e && M(t, "deficient indentation");
}
function Yl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 39) return !1;
  t.position++;
  const n = t.position;
  let o = !0;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const r = t.input.charCodeAt(t.position);
    if (r === 39) {
      if (t.input.charCodeAt(t.position + 1) === 39) {
        o = !1, t.position += 2;
        continue;
      }
      const a = t.position;
      return t.position++, Ri(t, n, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, W.SINGLE_QUOTED, Ft.CLIP, -1, o), !0;
    }
    ze(r) ? (o = !1, $n(t, e)) : t.position === t.lineStart && Di(t) ? M(t, "unexpected end of the document within a single quoted scalar") : r !== 9 && r < 32 ? M(t, "expected valid JSON character") : t.position++;
  }
  M(t, "unexpected end of the stream within a single quoted scalar");
}
function Kl(t, e, i) {
  if (t.input.charCodeAt(t.position) !== 34) return !1;
  t.position++;
  const n = t.position;
  let o = !0;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const r = t.input.charCodeAt(t.position);
    if (r === 34) {
      const a = t.position;
      return t.position++, Ri(t, n, a, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, W.DOUBLE_QUOTED, Ft.CLIP, -1, o), !0;
    }
    if (r === 92) {
      o = !1;
      const a = t.input.charCodeAt(++t.position);
      if (ze(a)) $n(t, e);
      else if (Hl(a)) t.position++;
      else {
        let s = Gl(a);
        for (s === 0 && M(t, "unknown escape sequence"); s-- > 0; )
          t.position++, Wl(t.input.charCodeAt(t.position)) < 0 && M(t, "expected hexadecimal character");
        t.position++;
      }
    } else ze(r) ? (o = !1, $n(t, e)) : t.position === t.lineStart && Di(t) ? M(t, "unexpected end of the document within a double quoted scalar") : r !== 9 && r < 32 ? M(t, "expected valid JSON character") : t.position++;
  }
  M(t, "unexpected end of the stream within a double quoted scalar");
}
function Jl(t, e, i) {
  const n = t.input.charCodeAt(t.position);
  let o = Ft.CLIP, r = -1, a = !1;
  if (n !== 124 && n !== 62) return !1;
  const s = n === 124 ? W.LITERAL_BLOCK : W.FOLDED_BLOCK;
  for (t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    const _ = t.input.charCodeAt(t.position), f = zl(_);
    if (_ === 43 || _ === 45)
      o !== Ft.CLIP && M(t, "repeat of a chomping mode identifier"), o = _ === 43 ? Ft.KEEP : Ft.STRIP, t.position++;
    else if (f >= 0)
      f === 0 && M(t, "bad explicit indentation width of a block scalar; it cannot be less than one"), a && M(t, "repeat of an indentation width identifier"), r = e + f - 1, a = !0, t.position++;
    else break;
  }
  let l = !1;
  for (; Mi(t.input.charCodeAt(t.position)); )
    l = !0, t.position++;
  l && t.input.charCodeAt(t.position) === 35 && oa(t), ze(t.input.charCodeAt(t.position)) ? sn(t) : t.input.charCodeAt(t.position) !== 0 && M(t, "a line break is expected");
  let c = a ? r : -1, d = 0;
  const b = t.position;
  let h = t.position;
  for (; t.input.charCodeAt(t.position) !== 0; ) {
    const _ = t.position;
    let f = 0;
    for (; t.input.charCodeAt(_ + f) === 32; ) f++;
    const y = t.input.charCodeAt(_ + f);
    if (y === 0) {
      c >= 0 ? f > c && (h = _ + f) : f > 0 && (h = _ + f);
      break;
    }
    if (Fn(t)) break;
    if (!a && c === -1 && ze(y) && (d = Math.max(d, f)), !a && c === -1 && !ze(y) && (y === 9 && f < e && (t.position = _ + f, M(t, "tab characters must not be used in indentation")), f >= e && f < d && (t.position = _ + f, M(t, "bad indentation of a mapping entry"))), c === -1 && y !== 0 && !ze(y) && f < e) {
      t.lineIndent = f, t.position = _ + f;
      break;
    }
    !a && y !== 0 && !ze(y) && c === -1 && (c = f);
    const m = c === -1 ? e + 1 : c;
    if (y !== 0 && !ze(y) && f < m) {
      t.lineIndent = f, t.position = _ + f;
      break;
    }
    oa(t), h = t.position, ze(t.input.charCodeAt(t.position)) && (sn(t), h = t.position);
  }
  return Aa(t, b, h), Ri(t, b, h, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, s, o, c), !0;
}
function Ql(t, e) {
  const i = t.input.charCodeAt(t.position), n = e === Li;
  if (i === 0 || Et(i) || i === 35 || i === 38 || i === 42 || i === 33 || i === 124 || i === 62 || i === 39 || i === 34 || i === 37 || i === 64 || i === 96 || Si(i)) return !1;
  if (i === 63 || i === 45) {
    const o = t.input.charCodeAt(t.position + 1);
    if (Ut(o) || n && Si(o)) return !1;
  }
  return !0;
}
function Zl(t, e, i, n) {
  if (!Ql(t, i)) return !1;
  const o = t.position;
  let r = t.position, a = t.input.charCodeAt(t.position);
  const s = i === Li;
  let l = !1;
  for (; a !== 0 && !Fn(t); ) {
    if (a === 58) {
      const c = t.input.charCodeAt(t.position + 1);
      if (Ut(c) || s && Si(c)) break;
    } else if (a === 35) {
      if (Et(t.input.charCodeAt(t.position - 1))) break;
    } else {
      if (s && Si(a)) break;
      if (ze(a)) {
        const c = t.position, d = t.line, b = t.lineStart, h = t.lineIndent;
        if (je(t, !1), t.lineIndent >= e) {
          l = !0, a = t.input.charCodeAt(t.position);
          continue;
        }
        t.position = c, t.line = d, t.lineStart = b, t.lineIndent = h;
        break;
      }
    }
    Mi(a) || (r = t.position + 1), a = t.input.charCodeAt(++t.position);
  }
  return r === o ? !1 : (Aa(t, o, r), Ri(t, o, r, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, W.PLAIN, Ft.CLIP, -1, !l), !0);
}
function Qi(t, e) {
  const i = t.line;
  je(t, !0), (t.line > i && t.lineIndent < e || t.firstTabInLine !== -1 && t.lineIndent < e) && M(t, "deficient indentation");
}
function Xl(t, e, i) {
  const n = t.input.charCodeAt(t.position), o = n === 123, r = t.position;
  let a = !0;
  if (n !== 91 && n !== 123) return !1;
  const s = o ? 125 : 93;
  for (o ? Ba(t, r, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, bt.FLOW) : Ta(t, r, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, bt.FLOW), t.position++; t.input.charCodeAt(t.position) !== 0; ) {
    Qi(t, e);
    let l = t.input.charCodeAt(t.position);
    if (l === s)
      return t.position++, Bi(t), !0;
    a ? l === 44 && M(t, "expected the node content, but found ','") : M(t, "missed comma between flow collection entries");
    let c = !1, d = !1;
    l === 63 && Et(t.input.charCodeAt(t.position + 1)) && (c = d = !0, t.position += 1, Qi(t, e));
    const b = t.line, h = Ii(t), _ = Pi(t, e, Li, !1, !0);
    Qi(t, e), l = t.input.charCodeAt(t.position), (o || d || t.line === b) && l === 58 ? (c = !0, t.position++, Qi(t, e), o || ia(t, h), _ || Xe(t), Pi(t, e, Li, !1, !0) || Xe(t), Qi(t, e), o || Bi(t)) : o && c ? (_ || Xe(t), Xe(t)) : o ? Xe(t) : c && (ia(t, h), _ || Xe(t), Xe(t), Bi(t)), l = t.input.charCodeAt(t.position), l === 44 ? (a = !0, t.position++) : a = !1;
  }
  M(t, "unexpected end of the stream within a flow collection");
}
function ra(t, e, i) {
  if (t.firstTabInLine !== -1 || t.input.charCodeAt(t.position) !== 45 || !Ut(t.input.charCodeAt(t.position + 1))) return !1;
  for (Ta(t, t.position, i.anchorStart, i.anchorEnd, i.tagStart, i.tagEnd, bt.BLOCK); t.input.charCodeAt(t.position) === 45 && Ut(t.input.charCodeAt(t.position + 1)); ) {
    t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, M(t, "tab characters must not be used in indentation"));
    const n = t.line;
    t.position++;
    const o = je(t, !0) > 0;
    if (t.firstTabInLine !== -1 && t.input.charCodeAt(t.position) === 45 && Ut(t.input.charCodeAt(t.position + 1)) && M(t, "bad indentation of a sequence entry"), o && t.lineIndent <= e ? Xe(t) : Pi(t, e, Ea, !1, !0), je(t, !0), t.lineIndent < e || t.position >= t.length) break;
    t.lineIndent > e && M(t, "bad indentation of a sequence entry"), t.line === n && t.input.charCodeAt(t.position) === 45 && Ut(t.input.charCodeAt(t.position + 1)) && M(t, "bad indentation of a sequence entry");
  }
  return Bi(t), !0;
}
function wn(t, e, i, n) {
  let o = !1, r = !1, a = !1, s = !1;
  if (t.firstTabInLine !== -1) return !1;
  let l = t.input.charCodeAt(t.position);
  for (; l !== 0; ) {
    !o && t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, M(t, "tab characters must not be used in indentation"));
    const c = t.input.charCodeAt(t.position + 1), d = t.line;
    if ((l === 63 || l === 58) && Ut(c))
      a || (Ba(t, t.position, n.anchorStart, n.anchorEnd, n.tagStart, n.tagEnd, bt.BLOCK), a = !0), l === 63 ? (o && Xe(t), r = !0, o = !0) : (o || (Xe(t), r = !0), o = !1), t.position += 1, s = !0;
    else {
      o && (Xe(t), o = !1);
      const b = Ii(t);
      if (!Pi(t, i, Sa, !1, !0)) break;
      if (t.line === d) {
        for (l = t.input.charCodeAt(t.position); Mi(l); ) l = t.input.charCodeAt(++t.position);
        if (l === 58)
          l = t.input.charCodeAt(++t.position), Ut(l) || M(t, "a whitespace character is expected after the key-value separator within a block mapping"), a || (t.events.splice(b.eventsLength, 0, {
            type: We.MAPPING,
            start: b.position,
            anchorStart: n.anchorStart,
            anchorEnd: n.anchorEnd,
            tagStart: n.tagStart,
            tagEnd: n.tagEnd,
            style: bt.BLOCK
          }), a = !0), r = !0, o = !1, s = !1;
        else if (r) M(t, "expected ':' after a mapping key");
        else
          return n.anchorStart !== re || n.tagStart !== re ? (Ai(t, b), !1) : !0;
      } else if (r) M(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return n.anchorStart !== re || n.tagStart !== re ? (Ai(t, b), !1) : !0;
    }
    if (Pi(t, e, an, !0, s) && (s = !1), o || s && (Xe(t), s = !1), je(t, !0), l = t.input.charCodeAt(t.position), (t.line === d || t.lineIndent > e) && l !== 0) M(t, "bad indentation of a mapping entry");
    else if (t.lineIndent < e) break;
  }
  return r ? (o && Xe(t), a && Bi(t), !0) : !1;
}
function Pi(t, e, i, n, o, r = !0) {
  var f, y;
  t.depth >= t.maxDepth && M(t, `nesting exceeded maxDepth (${t.maxDepth})`), t.depth++;
  let a = 1, s = !1, l = !1, c = null;
  const d = na();
  let b = i === an || i === Ea, h = b;
  const _ = b;
  if (n && je(t, !0) && (s = !0, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : a = -1), a === 1) for (; ; ) {
    const m = t.input.charCodeAt(t.position), w = Ii(t);
    if (s && a !== 1 && (m === 33 || m === 38)) break;
    if (s && _ && (d.tagStart !== re || d.anchorStart !== re) && (m === 33 || m === 38)) {
      const p = Ii(t), u = e + 1;
      if (wn(t, t.position - t.lineStart, u, d) && ((f = t.events[p.eventsLength]) == null ? void 0 : f.type) === We.MAPPING)
        return t.depth--, !0;
      Ai(t, p);
    }
    if (s && (m === 33 && d.tagStart !== re || m === 38 && d.anchorStart !== re) || !ql(t, d, i === Li) && !Ul(t, d)) break;
    c === null && (c = w), je(t, !0) ? (s = !0, h = _, t.lineIndent > e ? a = 1 : t.lineIndent === e ? a = 0 : a = -1) : h = !1;
  }
  if (h && (h = s || o), a === 1 || i === an) {
    const m = i === Li || i === Sa ? e : e + 1, w = t.position - t.lineStart;
    if (a === 1)
      if (h && (ra(t, w, d) || wn(t, w, m, d)) || Xl(t, m, d)) l = !0;
      else {
        const p = t.input.charCodeAt(t.position);
        if (c !== null && r && _ && !h && p !== 124 && p !== 62) {
          const u = Ii(t), g = c.position - c.lineStart;
          Ai(t, c), wn(t, g, m, na()) && ((y = t.events[u.eventsLength]) == null ? void 0 : y.type) === We.MAPPING ? l = !0 : Ai(t, u);
        }
        !l && (b && Jl(t, m, d) || Yl(t, m, d) || Kl(t, m, d) || jl(t, d) || Zl(t, m, i, d)) && (l = !0);
      }
    else a === 0 && (l = h && ra(t, w, d));
  }
  return b = b && !l, !l && (d.anchorStart !== re || d.tagStart !== re || b) && (Ri(t, re, re, d.anchorStart, d.anchorEnd, d.tagStart, d.tagEnd, W.PLAIN), l = !0), t.depth--, l || d.anchorStart !== re || d.tagStart !== re;
}
function ed(t) {
  if (t.lineIndent > 0 || t.input.charCodeAt(t.position) !== 37) return !1;
  t.position++;
  const e = t.position;
  for (; t.input.charCodeAt(t.position) !== 0 && !Et(t.input.charCodeAt(t.position)); ) t.position++;
  const i = t.input.slice(e, t.position), n = [];
  for (i.length === 0 && M(t, "directive name must not be less than one character in length"); t.input.charCodeAt(t.position) !== 0 && !ze(t.input.charCodeAt(t.position)); ) {
    for (; Mi(t.input.charCodeAt(t.position)); ) t.position++;
    if (t.input.charCodeAt(t.position) === 35 || ze(t.input.charCodeAt(t.position)) || t.input.charCodeAt(t.position) === 0) break;
    const o = t.position;
    for (; t.input.charCodeAt(t.position) !== 0 && !Et(t.input.charCodeAt(t.position)); ) t.position++;
    n.push(t.input.slice(o, t.position));
  }
  if (ze(t.input.charCodeAt(t.position)) && sn(t), i === "YAML") {
    t.directives.some((r) => r.kind === "yaml") && M(t, "duplication of %YAML directive"), n.length !== 1 && M(t, "YAML directive accepts exactly one argument");
    const o = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
    o === null && M(t, "ill-formed argument of the YAML directive"), parseInt(o[1], 10) !== 1 && M(t, "unacceptable YAML version of the document"), t.directives.push({
      kind: "yaml",
      version: n[0]
    });
  } else if (i === "TAG") {
    n.length !== 2 && M(t, "TAG directive accepts exactly two arguments");
    const [o, r] = n;
    Ca.test(o) || M(t, "ill-formed tag handle (first argument) of the TAG directive"), ka.call(t.tagHandlers, o) && M(t, `there is a previously declared suffix for "${o}" tag handle`), Fl.test(r) || M(t, "ill-formed tag prefix (second argument) of the TAG directive"), t.tagHandlers[o] = r, t.directives.push({
      kind: "tag",
      handle: o,
      prefix: r
    });
  }
  return !0;
}
function td(t) {
  t.directives = [], t.tagHandlers = /* @__PURE__ */ Object.create(null);
  let e = !1;
  for (je(t, !0); ed(t); )
    e = !0, je(t, !0);
  let i = !1, n = !1, o = !0;
  if (t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 && Ut(t.input.charCodeAt(t.position + 3))) {
    i = !0;
    const s = t.line;
    t.position += 3, je(t, !0), o = t.line > s;
  } else e && M(t, "directives end mark is expected");
  const r = t.events.length;
  if (!i && t.position === t.lineStart && t.input.charCodeAt(t.position) === 46 && Di(t)) {
    t.position += 3, je(t, !0);
    return;
  }
  if (Ol(t, i, !1), Pi(t, t.lineIndent - 1, an, !1, o, o) || Xe(t), je(t, !0), t.position === t.lineStart && Di(t) && (n = t.input.charCodeAt(t.position) === 46, n)) {
    const s = t.line;
    t.position += 3, je(t, !0), t.line === s && t.position < t.length && M(t, "end of the stream or a document separator is expected");
  }
  const a = t.events[r];
  (a == null ? void 0 : a.type) === We.DOCUMENT && (a.explicitEnd = n), Bi(t), !n && t.position < t.length && !Fn(t) && M(t, "end of the stream or a document separator is expected");
}
function id(t, e) {
  const i = t.length, n = {
    ...Mn,
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
  }, o = t.indexOf("\0");
  for (o !== -1 && di.throwAt(t, o, "null byte is not allowed in input", n.filename); n.position < n.length && (Ia(n), je(n, !0), !(n.position >= n.length)); ) {
    const r = n.position;
    td(n), n.position === r && M(n, "can not read a document");
  }
  return n.events;
}
var nd = {
  ...Mn,
  ...Rn
};
function od(t, e = {}) {
  const i = {
    ...nd,
    ...e
  }, n = String(t), o = Object.keys(Mn), r = Object.keys(Rn);
  return Ll(id(n, En(i, o)), {
    ...En(i, r),
    source: n
  });
}
function rd(t, e) {
  const i = od(t, e);
  if (i.length === 0) throw new di("expected a document, but the input is empty");
  if (i.length === 1) return i[0];
  throw new di("expected a single document in the stream, but found more");
}
var ki = Symbol("INVALID");
function ad(t) {
  const e = new Set([
    t.defaultScalarTag,
    t.defaultSequenceTag,
    t.defaultMappingTag
  ].filter((r) => r !== void 0)), i = t.implicitScalarTags, n = t.tags.filter((r) => !(r.nodeKind === "scalar" && r.implicit) && !e.has(r)), o = t.tags.filter((r) => e.has(r));
  return [
    ...i.map((r) => ({
      tag: r,
      implicitTag: !0
    })),
    ...n.map((r) => ({
      tag: r,
      implicitTag: !1
    })),
    ...o.map((r) => ({
      tag: r,
      implicitTag: !0
    }))
  ];
}
function sd(t, e) {
  for (let i = 0, n = t.representTypes.length; i < n; i += 1) {
    const { tag: o, implicitTag: r } = t.representTypes[i];
    if (o.identify(e)) {
      let a;
      return o.matchByTagPrefix ? a = o.representTagName(e) : a = o.tagName, {
        tag: o,
        tagName: a,
        implicitTag: r
      };
    }
  }
  return null;
}
function Xi(t, e) {
  if (!t.noRefs && e !== null && typeof e == "object") {
    const c = t.refs.get(e);
    if (c)
      return c.anchor === void 0 && (c.anchor = `ref_${t.refCounter++}`), {
        kind: "alias",
        anchor: c.anchor
      };
  }
  const i = sd(t, e);
  if (!i) {
    if (e === void 0 || t.skipInvalid) return ki;
    throw new di(`unacceptable kind of an object to dump ${Object.prototype.toString.call(e)}`);
  }
  const { tag: n, tagName: o, implicitTag: r } = i, a = r ? o : va(o);
  if (n.nodeKind === "scalar") return {
    kind: "scalar",
    tag: a,
    tagged: !r,
    style: W.PLAIN,
    value: n.represent(e)
  };
  if (n.nodeKind === "sequence") {
    const c = n.represent(e), d = {
      kind: "sequence",
      tag: a,
      tagged: !r,
      style: bt.BLOCK,
      items: []
    };
    t.noRefs || t.refs.set(e, d);
    for (let b = 0, h = c.length; b < h; b += 1) {
      let _ = Xi(t, c[b]);
      _ === ki && c[b] === void 0 && (_ = Xi(t, null)), _ !== ki && d.items.push(_);
    }
    return d;
  }
  const s = n.represent(e), l = {
    kind: "mapping",
    tag: a,
    tagged: !r,
    style: bt.BLOCK,
    items: []
  };
  t.noRefs || t.refs.set(e, l);
  for (const [c, d] of s) {
    const b = Xi(t, c);
    if (b === ki) continue;
    const h = Xi(t, d);
    h !== ki && l.items.push({
      key: b,
      value: h
    });
  }
  return l;
}
function ld(t, e, i = {}) {
  const n = Xi({
    representTypes: ad(e),
    noRefs: i.noRefs ?? !1,
    skipInvalid: i.skipInvalid ?? !1,
    refs: /* @__PURE__ */ new Map(),
    refCounter: 0
  }, t);
  return [{
    contents: n === ki ? null : n,
    directives: []
  }];
}
var dd = Symbol("visit:break"), Na = Symbol("visit:skip");
function nn(t, e, i) {
  const n = e(t, i);
  if (n === dd) return !0;
  if (n === Na) return !1;
  const o = i.depth + 1;
  switch (t.kind) {
    case "sequence":
      for (const r of t.items) if (nn(r, e, {
        depth: o,
        parent: t,
        isKey: !1
      })) return !0;
      break;
    case "mapping":
      for (const { key: r, value: a } of t.items)
        if (nn(r, e, {
          depth: o,
          parent: t,
          isKey: !0
        }) || nn(a, e, {
          depth: o,
          parent: t,
          isKey: !1
        })) return !0;
  }
  return !1;
}
function aa(t, e) {
  for (const i of t) if (i.contents && nn(i.contents, e, {
    depth: 0,
    parent: null,
    isKey: !1
  })) return;
}
function fn(t, e) {
  return (t & 1 << e) !== 0;
}
var sa = {
  applyQuoteFlowKeysOption: cd,
  doubleQuoteForInvisibles: pd,
  doubleQuoteWhitespaceOnly: fd,
  applyForceQuotesOption: gd,
  tryLongOrMultilineAsBlock: ud,
  quoteInvalidPlain: hd,
  fallbackToDoubleQuoted: bd
};
function La(t) {
  return t.presenterOptions.quoteStyle === "single" && fn(t.allowedStylesMask, W.SINGLE_QUOTED) ? W.SINGLE_QUOTED : W.DOUBLE_QUOTED;
}
function cd(t) {
  t.presenterOptions.quoteFlowKeys && (!t.isKey || !t.flowOnly || t.style !== W.PLAIN || (t.style = W.DOUBLE_QUOTED));
}
function pd(t) {
  t.style === W.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(t.node.value) && (t.style = W.DOUBLE_QUOTED);
}
function fd(t) {
  t.style === W.PLAIN && /^\s+$/.test(t.node.value) && (t.style = W.DOUBLE_QUOTED);
}
function gd(t) {
  t.presenterOptions.forceQuotes && (t.isKey || t.style !== W.PLAIN || t.node.tag === t.presenterOptions.schema.defaultScalarTag.tagName && (t.style = t.node.value.includes(`
`) ? W.DOUBLE_QUOTED : La(t)));
}
function ud(t) {
  if (t.style !== W.PLAIN || t.isKey) return;
  const e = t.node.value, i = e.indexOf(`
`) !== -1;
  if (!fn(t.allowedStylesMask, W.LITERAL_BLOCK)) {
    i && (t.style = W.DOUBLE_QUOTED);
    return;
  }
  const n = t.presenterOptions.lineWidth;
  if (n === -1) {
    i && (t.style = W.LITERAL_BLOCK);
    return;
  }
  const o = Math.max(Math.min(n, 40), n - t.shiftOfContent);
  let r = 0, a = !1;
  for (; r <= e.length; ) {
    let s = e.length;
    const l = e.indexOf(`
`, r);
    l !== -1 && (s = l);
    const c = e.slice(r, s);
    if (c.length > o && c[0] !== " " && / [^ \t]/.test(c) && (a = !0), l === -1) break;
    r = l + 1;
  }
  a ? t.style = W.FOLDED_BLOCK : i && (t.style = W.LITERAL_BLOCK);
}
function hd(t) {
  t.style === W.PLAIN && !fn(t.allowedStylesMask, W.PLAIN) && (t.style = La(t));
}
function bd(t) {
  fn(t.allowedStylesMask, t.style) || (t.style = W.DOUBLE_QUOTED);
}
function Zi(t, e) {
  return t | 1 << e;
}
var yd = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]", _d = "[\\n\\r]", md = "\\uFEFF", On = "[ \\t]", Da = `(?:(?!(?:${_d}|${md}))${yd})`, gn = `(?:(?!${On})${Da})`, Pa = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]", Ra = "[-?:,\\[\\]{}#&*!|>'\"%@`]", vd = "[,\\[\\]{}]", Tn = gn, Bn = `(?:(?!${vd})${gn})`, xd = `(?:(?:(?!${Ra})${gn})|[?:-](?=${Tn}))`, wd = `(?:(?:(?!${Ra})${gn})|[?:-](?=${Bn}))`, Ma = `(?:(?:(?![:#])${Tn})|:(?=${Tn}))#*`, Fa = `(?:(?:(?![:#])${Bn})|:(?=${Bn}))#*`, Oa = `(?:${On}*${Ma})*`, Va = `(?:${On}*${Fa})*`, za = `${xd}#*${Oa}`, Wa = `${wd}#*${Va}`, kd = za, Sd = Wa, Ed = `\\n+${Ma}${Oa}`, Cd = `\\n+${Fa}${Va}`, $d = `${za}(?:${Ed})*`, Td = `${Wa}(?:${Cd})*`, Bd = new RegExp(`^(?:${$d})$`, "u"), Id = new RegExp(`^(?:${Td})$`, "u"), Ad = new RegExp(`^(?:${kd})$`, "u"), Nd = new RegExp(`^(?:${Sd})$`, "u"), Ld = new RegExp(`^(?:${Pa})*$`, "u"), Dd = new RegExp(`^(?:${Pa}|\\n)*$`, "u"), Pd = new RegExp(`^(?:${Da}|\\n)*$`, "u"), Rd = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/, Vn = /^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;
function Md(t) {
  const e = t.node.value;
  if (e !== "") {
    if (!(t.isKey ? t.flowOnly ? Nd : Ad : t.flowOnly ? Id : Bd).test(e) || t.shiftOfFirstLine === 0 && Rd.test(e)) return !1;
    if (t.shiftOfContent === 0) {
      const n = e.indexOf(`
`);
      if (n !== -1) {
        const o = e.slice(n + 1);
        if (Vn.test(o)) return !1;
      }
    }
  }
  const i = t.presenterOptions.schema.resolveImplicitScalarTag(e).tag.tagName;
  return !(!t.node.tagged && i !== t.node.tag || !t.node.tagged && e === "=" && i === t.presenterOptions.schema.defaultScalarTag.tagName);
}
function Fd(t) {
  const e = t.node.value;
  if (!(t.isKey ? Ld : Dd).test(e) || /[ \t]\n|\n[ \t]/.test(e)) return !1;
  if (!t.isKey && t.shiftOfContent === 0) {
    const i = e.indexOf(`
`);
    if (i !== -1 && Vn.test(e.slice(i + 1))) return !1;
  }
  return !0;
}
function Od(t) {
  if (t.flowOnly || !Pd.test(t.node.value)) return !1;
  const e = t.shiftOfContent - t.shiftOfParent;
  return !(e < 1 || e > 9 && /^\n* /.test(t.node.value) || t.shiftOfContent === 0 && Vn.test(t.node.value));
}
function Vd(t) {
  let e = Zi(0, W.DOUBLE_QUOTED);
  Md(t) && (e = Zi(e, W.PLAIN)), Fd(t) && (e = Zi(e, W.SINGLE_QUOTED)), Od(t) && (e = Zi(Zi(e, W.LITERAL_BLOCK), W.FOLDED_BLOCK)), t.allowedStylesMask = e;
}
function zd(t) {
  switch (t.style) {
    case W.PLAIN:
      return Wd(t);
    case W.SINGLE_QUOTED:
      return Gd(t);
    case W.LITERAL_BLOCK:
      return Hd(t);
    case W.FOLDED_BLOCK:
      return qd(t);
    case W.DOUBLE_QUOTED:
      return Ud(t);
  }
}
function Wd(t) {
  return Ga(t.node.value, t.shiftOfContent);
}
function Gd(t) {
  return `'${Ga(t.node.value, t.shiftOfContent).replace(/'/g, "''")}'`;
}
function Hd(t) {
  const e = t.node.value;
  return "|" + qa(e, t.shiftOfParent, t.shiftOfContent) + Ua(Ha(e, t.shiftOfContent));
}
function qd(t) {
  const e = t.node.value, i = t.presenterOptions.lineWidth;
  let n = 1 / 0;
  return i !== -1 && (n = Math.max(Math.min(i, 40), i - t.shiftOfContent)), ">" + qa(e, t.shiftOfParent, t.shiftOfContent) + Ua(Ha(Yd(e, n), t.shiftOfContent));
}
function Ud(t) {
  return `"${Qd(t.node.value)}"`;
}
function Ga(t, e) {
  let i = t.indexOf(`
`);
  if (i === -1) return t;
  const n = " ".repeat(e);
  let o = t.slice(0, i);
  const r = /(\n+)([^\n]*)/g;
  r.lastIndex = i;
  let a;
  for (; a = r.exec(t); ) {
    const s = a[1].length, l = a[2];
    o += `
`.repeat(s + 1) + n + l;
  }
  return o;
}
function Ha(t, e) {
  const i = " ".repeat(e);
  let n = 0, o = "";
  const r = t.length;
  for (; n < r; ) {
    let a;
    const s = t.indexOf(`
`, n);
    s === -1 ? (a = t.slice(n), n = r) : (a = t.slice(n, s + 1), n = s + 1), a.length && a !== `
` && (o += i), o += a;
  }
  return o;
}
function jd(t) {
  return /^\n* /.test(t);
}
function qa(t, e, i) {
  const n = jd(t) ? String(i - e) : "", o = t[t.length - 1] === `
`;
  return `${n}${o && (t[t.length - 2] === `
` || t === `
`) ? "+" : o ? "" : "-"}
`;
}
function Ua(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function In(t) {
  return t === " " || t === "	";
}
function la(t, e) {
  if (t === "" || In(t[0])) return t;
  const i = / [^ \t]/g;
  let n, o = 0, r, a = 0, s = 0, l = "";
  for (; n = i.exec(t); )
    s = n.index, s - o > e && (r = a > o ? a : s, l += `
${t.slice(o, r)}`, o = r + 1), a = s;
  return l += `
`, t.length - o > e && a > o ? l += `${t.slice(o, a)}
${t.slice(a + 1)}` : l += t.slice(o), l.slice(1);
}
function Yd(t, e) {
  const i = /(\n+)([^\n]*)/g;
  let n = t.indexOf(`
`);
  n === -1 && (n = t.length), i.lastIndex = n;
  let o = la(t.slice(0, n), e), r = t[0] === `
` || In(t[0]), a, s;
  for (; s = i.exec(t); ) {
    const l = s[1], c = s[2];
    a = c !== "" && In(c[0]), o += l + (!r && !a && c !== "" ? `
` : "") + la(c, e), r = a;
  }
  return o;
}
var Kd = /["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;
function Jd(t) {
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
function Qd(t) {
  return t.replace(Kd, Jd);
}
var ln = 10, zn = {
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
  scalarStyleRules: Object.keys(sa).map((t) => Reflect.get(sa, t)),
  tagBeforeAnchor: !1
};
function Zd(t) {
  return t.tagged ? t.tag : va(t.tag);
}
function Xd(t) {
  const e = {
    ...zn,
    ...t
  };
  return e.flowSkipColonSpace && (e.quoteFlowKeys = !0), {
    ...e,
    defaultScalarTagName: e.schema.defaultScalarTag.tagName,
    openEnded: !1
  };
}
function An(t, e) {
  return `
${" ".repeat(t.indent * e)}`;
}
function ec(t, e, i, n, o, r) {
  return {
    node: e,
    parent: i,
    level: n,
    isKey: o,
    flowOnly: r,
    shiftOfParent: n === 0 ? -1 : t.indent * (n - 1),
    shiftOfContent: t.indent * Math.max(1, n),
    shiftOfFirstLine: n === 0 ? 0 : t.indent * n,
    presenterOptions: t,
    allowedStylesMask: 0,
    style: e.style
  };
}
function tc(t, e, i) {
  let n = "";
  for (let r = 0, a = i.items.length; r < a; r += 1) {
    const s = jt(t, e, i.items[r], i, {}).text;
    r > 0 && (n += `,${t.flowSkipCommaSpace ? "" : " "}`), n += s;
  }
  const o = t.flowBracketPadding && i.items.length > 0 ? " " : "";
  return `[${o}${n}${o}]`;
}
function da(t, e, i, n) {
  let o = "";
  for (let r = 0, a = i.items.length; r < a; r += 1) {
    const s = jt(t, e + 1, i.items[r], i, {
      block: !0,
      compact: t.seqInlineFirst,
      isblockseq: !0
    }).text;
    (!n || o !== "") && (o += An(t, e)), s === "" || ln === s.charCodeAt(0) ? o += "-" : o += "- ", o += s;
  }
  return o;
}
function ic(t, e, i) {
  let n = "";
  for (const { key: r, value: a } of i.items) {
    let s = "";
    n !== "" && (s += `,${t.flowSkipCommaSpace ? "" : " "}`);
    const l = jt(t, e, r, i, { iskey: !0 }), c = l.text, d = jt(t, e, a, i, {}).text, b = t.flowSkipColonSpace || d === "" ? "" : " ", h = r.kind === "scalar" && l.noBody && (r.tagged || r.anchor !== void 0), _ = r.kind === "alias" || h ? " " : "";
    s += `${c}${_}:${b}${d}`, n += s;
  }
  const o = t.flowBracketPadding && n !== "" ? " " : "";
  return `{${o}${n}${o}}`;
}
function nc(t, e, i, n) {
  let o = "";
  for (let r = 0, a = i.items.length; r < a; r += 1) {
    let s = "";
    (!n || o !== "") && (s += An(t, e));
    const { key: l, value: c } = i.items[r], d = (l.kind === "mapping" || l.kind === "sequence") && l.style === bt.BLOCK && l.items.length !== 0 || l.kind === "scalar" && (l.style === W.LITERAL_BLOCK || l.style === W.FOLDED_BLOCK), b = d ? jt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      isblockseq: !Nn(t, l, e + 1)
    }) : jt(t, e + 1, l, i, {
      block: !0,
      compact: !0,
      iskey: !0
    }), h = b.text, _ = l.kind === "scalar" && l.value.indexOf(`
`) !== -1, f = h.length > 1024 && /^[\s\S]{1025}/u.test(h), y = d || _ || f;
    y && (h && ln === h.charCodeAt(0) ? s += "?" : s += "? "), s += h, y && (s += An(t, e));
    const m = jt(t, e + 1, c, i, {
      block: !0,
      compact: y,
      isblockseq: y && !Nn(t, c, e + 1)
    }).text, w = l.kind === "scalar" && b.noBody && (l.tagged || l.anchor !== void 0), p = !y && (l.kind === "alias" || w) ? " " : "";
    m === "" || ln === m.charCodeAt(0) ? s += `${p}:` : s += `${p}: `, s += m, o += s;
  }
  return o;
}
function Nn(t, e, i) {
  return e.kind === "alias" ? !0 : e.tagged || e.anchor !== void 0 || t.indent < 2 && i > 0;
}
function jt(t, e, i, n, o) {
  if (i.kind === "alias")
    return t.openEnded = !1, {
      text: `*${i.anchor}`,
      noBody: !1
    };
  const { block: r = !1, iskey: a = !1, isblockseq: s = !1 } = o;
  let l = o.compact ?? !1;
  const c = i.anchor !== void 0;
  Nn(t, i, e) && (l = !1);
  let d, b = i.tagged;
  const h = r && (i.kind === "mapping" || i.kind === "sequence") && i.style === bt.BLOCK && i.items.length !== 0;
  if (i.kind === "mapping")
    h ? d = nc(t, e, i, l) : d = ic(t, e, i);
  else if (i.kind === "sequence")
    h ? t.seqNoIndent && !s && e > 0 ? d = da(t, e - 1, i, l) : d = da(t, e, i, l) : d = tc(t, e, i);
  else {
    const y = ec(t, i, n, e, a, !r);
    Vd(y);
    for (const m of t.scalarStyleRules) m(y);
    d = zd(y), t.openEnded = (y.style === W.LITERAL_BLOCK || y.style === W.FOLDED_BLOCK) && (i.value === `
` || i.value.endsWith(`

`)), b = i.tagged || d === "" && y.flowOnly && (n == null ? void 0 : n.kind) === "sequence" && !c || y.style !== W.PLAIN && i.tag !== t.defaultScalarTagName;
  }
  (i.kind === "mapping" || i.kind === "sequence") && !h && (t.openEnded = !1), h && l && e > 0 && t.indent > 2 && (d = `${" ".repeat(t.indent - 2)}${d}`);
  const _ = d === "";
  let f = d;
  if (b || c) {
    const y = [], m = b ? Zd(i) : null, w = c ? `&${i.anchor}` : null;
    t.tagBeforeAnchor ? (m !== null && y.push(m), w !== null && y.push(w)) : (w !== null && y.push(w), m !== null && y.push(m));
    const p = d === "" || d.charCodeAt(0) === ln ? "" : " ";
    f = `${y.join(" ")}${p}${d}`;
  }
  return {
    text: f,
    noBody: _
  };
}
function oc(t) {
  return (t.kind === "sequence" || t.kind === "mapping") && t.style === bt.BLOCK && t.items.length !== 0 && !t.tagged && t.anchor === void 0;
}
function rc(t) {
  let e = "";
  for (const i of t.directives) {
    if (i.kind === "yaml") {
      e += `%YAML ${i.version}
`;
      continue;
    }
    const { handle: n, prefix: o } = i;
    e += `%TAG ${n} ${o}
`;
  }
  return e;
}
function ac(t, e) {
  const i = Xd(e);
  let n = "", o = !1;
  for (let r = 0; r < t.length; r += 1) {
    const a = t[r];
    i.openEnded = !1;
    const s = rc(a), l = s !== "", c = a.explicitStart || l || r > 0 && !o;
    if (n += s, a.contents === null)
      c && (n += `---
`);
    else if (c) {
      const d = jt(i, 0, a.contents, null, {
        block: !0,
        compact: !0
      }).text, b = d === "" ? "" : l || oc(a.contents) ? `
` : " ";
      n += `---${b}${d}
`;
    } else n += jt(i, 0, a.contents, null, {
      block: !0,
      compact: !0
    }).text + `
`;
    o = a.explicitEnd || i.openEnded, o && (n += `...
`);
  }
  return n;
}
var sc = {
  ...zn,
  schema: hl,
  skipInvalid: !1,
  noRefs: !1,
  flowLevel: -1,
  sortKeys: !1,
  transform: () => {
  }
};
function lc(t, e) {
  const i = String(t), n = String(e);
  return i < n ? -1 : i > n ? 1 : 0;
}
function dc(t, e = {}) {
  const i = {
    ...sc,
    ...e
  }, n = ld(t, i.schema, {
    noRefs: i.noRefs,
    skipInvalid: i.skipInvalid
  });
  if (i.flowLevel >= 0 && aa(n, (o, r) => {
    if (!(r.depth < i.flowLevel))
      return (o.kind === "sequence" || o.kind === "mapping") && (o.style = bt.FLOW), Na;
  }), i.sortKeys) {
    const o = i.sortKeys === !0 ? lc : i.sortKeys;
    aa(n, (r) => {
      r.kind === "mapping" && r.items.sort((a, s) => o(a.key.kind === "scalar" ? a.key.value : "", s.key.kind === "scalar" ? s.key.value : ""));
    });
  }
  return i.transform(n), ac(n, {
    ...En(i, Object.keys(zn)),
    schema: i.schema
  });
}
console.info(
  "%c⚡ Energy Station Panel v1.7.1 Loaded ⚡",
  "background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
class ja extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._hass = null, this._config = null, this._isDrawerOpen = !1, this._scale = 1, this._cardNode = null, this._editorNode = null, this._hasFoundConfig = !1, this._discoveryRetryCount = 0, this._discoveryRetryTimer = null;
  }
  set hass(e) {
    this._hass = e, this._cardNode && (this._cardNode.hass = e), this._editorNode && (this._editorNode.hass = e), this._updateHaStatusBadge(), this._hasFoundConfig || this._autoDiscoverLovelaceConfig();
  }
  disconnectedCallback() {
    this._discoveryRetryTimer && (clearTimeout(this._discoveryRetryTimer), this._discoveryRetryTimer = null);
  }
  _upgradeProperty(e) {
    if (Object.prototype.hasOwnProperty.call(this, e)) {
      const i = this[e];
      delete this[e], this[e] = i;
    }
  }
  connectedCallback() {
    this._loadConfig(), this._render(), this._bindEvents(), this._upgradeProperty("panel"), this._upgradeProperty("narrow"), this._upgradeProperty("route"), this._upgradeProperty("hass"), this._hass && (this._cardNode && (this._cardNode.hass = this._hass), this._editorNode && (this._editorNode.hass = this._hass), this._updateHaStatusBadge()), setTimeout(() => {
      this._cardNode && typeof this._cardNode._updateFlowPaths == "function" && this._cardNode._updateFlowPaths();
    }, 120);
  }
  _isDefaultConfig(e) {
    var n, o, r, a, s, l, c, d, b, h;
    if (!e || typeof e != "object") return !0;
    if (e._customized === !0) return !1;
    if (Object.keys(e).length <= 1) return !0;
    let i = 0;
    return ((n = e.aux) == null ? void 0 : n.type) === "microinverter" && ((o = e.aux) == null ? void 0 : o.show) === !0 && i++, ((r = e.solar) == null ? void 0 : r.target_daily_yield) === 55 && i++, Array.isArray((a = e.wind) == null ? void 0 : a.turbines) && ((s = e.wind.turbines[0]) == null ? void 0 : s.name) === "Вітряк 1" && ((l = e.wind.turbines[1]) == null ? void 0 : l.name) === "Вітряк 2" && i++, Array.isArray((c = e.load) == null ? void 0 : c.subloads) && e.load.subloads.length === 3 && e.load.subloads.some((_) => _.id === "heat_pump") && e.load.subloads.some((_) => _.id === "other") && i++, Array.isArray((d = e.solar) == null ? void 0 : d.strings) && e.solar.strings.length === 3 && ((b = e.solar.strings[0]) == null ? void 0 : b.voltage_entity) === "sensor.deye_12k_inverter_pv1_voltage" && ((h = e.inverter) == null ? void 0 : h.voltage_entity) === "sensor.deye_12k_inverter_grid_voltage" && i++, i >= 2;
  }
  _loadConfig() {
    try {
      const e = typeof localStorage < "u" ? localStorage.getItem("energy_station_app_config") : null;
      if (e) {
        const i = JSON.parse(e);
        i && !this._isDefaultConfig(i) && (this._config = i, this._hasFoundConfig = !0);
      }
    } catch {
    }
    this._config || (this._config = JSON.parse(JSON.stringify(ie))), this._config.appearance || (this._config.appearance = JSON.parse(JSON.stringify(ie.appearance || {
      font_family: "Inter",
      mono_font_family: "JetBrains Mono",
      power_font_size: "normal",
      label_font_size: "normal",
      theme_preset: "cyber_dark",
      density: "balanced",
      glow_intensity: "high"
    }))), this._scale = this._config.card_scale || 1;
  }
  _saveConfig(e = !0) {
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_app_config", JSON.stringify(this._config));
    } catch {
    }
    if (e && this._hass && typeof this._hass.callWS == "function" && !this._isDefaultConfig(this._config))
      try {
        this._hass.callWS({
          type: "frontend/set_user_data",
          key: "energy_station_app_config",
          value: this._config
        }).catch(() => {
        });
      } catch {
      }
    this._cardNode && this._cardNode.setConfig(this._config);
  }
  _updateCardConfig() {
    this._cardNode && this._cardNode.setConfig(this._config), this._editorNode && this._editorNode.setConfig(this._config), this._saveConfig(!0);
  }
  async _autoDiscoverLovelaceConfig() {
    if (this._hass && !this._hasFoundConfig) {
      try {
        const e = typeof localStorage < "u" ? localStorage.getItem("energy_station_app_config") : null;
        if (e)
          try {
            const n = JSON.parse(e);
            if (n && !this._isDefaultConfig(n)) {
              n._customized = !0, this._config = n, this._hasFoundConfig = !0, this._saveConfig(!0), this._render(), this._bindEvents();
              return;
            }
          } catch {
          }
        if (typeof this._hass.callWS == "function")
          try {
            const n = await this._hass.callWS({
              type: "frontend/get_user_data",
              key: "energy_station_app_config"
            });
            if (n != null && n.value && typeof n.value == "object" && !this._isDefaultConfig(n.value)) {
              const o = n.value;
              o._customized = !0, this._config = {
                ...JSON.parse(JSON.stringify(ie)),
                ...o,
                appearance: {
                  ...ie.appearance,
                  ...o.appearance || {}
                }
              }, this._hasFoundConfig = !0, this._saveConfig(!0), this._render(), this._bindEvents();
              return;
            }
          } catch {
          }
        if (await this._importFromLovelace(!1)) {
          this._hasFoundConfig = !0;
          return;
        }
      } catch (e) {
        console.warn("Lovelace auto-import attempt failed:", e);
      }
      this._hasFoundConfig || this._scheduleAutoImportRetry();
    }
  }
  _scheduleAutoImportRetry() {
    if (this._hasFoundConfig || (this._discoveryRetryCount = (this._discoveryRetryCount || 0) + 1, this._discoveryRetryCount > 8)) return;
    clearTimeout(this._discoveryRetryTimer);
    const e = Math.min(250 * this._discoveryRetryCount, 2e3);
    this._discoveryRetryTimer = setTimeout(() => {
      !this._hasFoundConfig && this._hass && this._autoDiscoverLovelaceConfig();
    }, e);
  }
  async _importFromLovelace(e = !0) {
    var i, n;
    if (!this._hass)
      return e && alert("Немає підключення до Home Assistant"), !1;
    try {
      const o = [], r = (s) => {
        if (!(!s || typeof s != "object")) {
          if (s.type && (s.type === "custom:energy-station-card" || s.type.includes("energy-station-card")) && o.push(s), Array.isArray(s.cards))
            for (const l of s.cards) r(l);
          s.card && typeof s.card == "object" && r(s.card);
        }
      }, a = (s) => {
        for (const l of s || []) {
          if (Array.isArray(l.cards))
            for (const c of l.cards) r(c);
          if (Array.isArray(l.sections)) {
            for (const c of l.sections)
              if (Array.isArray(c.cards))
                for (const d of c.cards) r(d);
          }
        }
      };
      try {
        const s = await this._hass.callWS({ type: "lovelace/config" });
        a(s == null ? void 0 : s.views);
      } catch {
      }
      if (o.length === 0 || !o.some((s) => !this._isDefaultConfig(s)))
        try {
          const s = await this._hass.callWS({ type: "lovelace/dashboards/list" });
          if (Array.isArray(s)) {
            for (const l of s)
              if (l.url_path && l.url_path !== "energy-station")
                try {
                  const c = await this._hass.callWS({ type: "lovelace/config", url_path: l.url_path });
                  if (a(c == null ? void 0 : c.views), o.some((d) => !this._isDefaultConfig(d))) break;
                } catch {
                }
          }
        } catch {
        }
      if ((o.length === 0 || !o.some((s) => !this._isDefaultConfig(s))) && this._hass.panels) {
        const s = Object.values(this._hass.panels).filter((l) => l.component_name === "lovelace");
        for (const l of s)
          if (l.url_path && l.url_path !== "energy-station")
            try {
              const c = await this._hass.callWS({ type: "lovelace/config", url_path: l.url_path });
              if (a(c == null ? void 0 : c.views), o.some((d) => !this._isDefaultConfig(d))) break;
            } catch {
            }
      }
      if (typeof window < "u" && ((i = window.parent) != null && i.document))
        try {
          const s = window.parent.document.querySelectorAll("energy-station-card");
          for (const l of s)
            l !== this._cardNode && l._config && o.push(l._config);
        } catch {
        }
      if (o.length > 0) {
        const s = o.find((c) => !this._isDefaultConfig(c)) || o[0], l = JSON.parse(JSON.stringify(s));
        return delete l.type, l._customized = !0, l.appearance = {
          ...ie.appearance,
          ...((n = this._config) == null ? void 0 : n.appearance) || {},
          ...l.appearance || {}
        }, this._config = l, this._hasFoundConfig = !0, this._saveConfig(!0), this._render(), this._bindEvents(), e && alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!"), !0;
      }
      return e && alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".'), !1;
    } catch (o) {
      return console.error("Import from Lovelace error:", o), e && alert("Помилка імпорту: " + o.message), !1;
    }
  }
  _render() {
    var n;
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
              <span class="panel-brand-badge">PRO APP v1.7.1</span>
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
            ${e.theme_mode === "light" ? "☀️ Світла" : ((n = e.appearance) == null ? void 0 : n.theme_preset) === "oled_black" ? "⬛ OLED" : "🌙 Темна"}
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
    var a, s, l, c, d, b, h, _, f, y, m, w, p, u, g;
    const e = this.shadowRoot;
    (a = e.getElementById("btnOpenDrawer")) == null || a.addEventListener("click", () => this._openDrawer()), (s = e.getElementById("btnCloseDrawer")) == null || s.addEventListener("click", () => this._closeDrawer()), (l = e.getElementById("btnCancelDrawer")) == null || l.addEventListener("click", () => this._closeDrawer()), (c = e.getElementById("drawerBackdrop")) == null || c.addEventListener("click", () => this._closeDrawer()), (d = e.getElementById("btnSaveDrawer")) == null || d.addEventListener("click", () => {
      this._updateCardConfig(), this._closeDrawer(), alert("✓ Налаштування збережено!");
    }), (b = this._editorNode) == null || b.addEventListener("config-changed", (x) => {
      var $;
      const S = x.detail.config;
      S.appearance = {
        ...ie.appearance,
        ...(($ = this._config) == null ? void 0 : $.appearance) || {},
        ...S.appearance || {}
      }, S._customized = !0, this._hasFoundConfig = !0, this._config = S, this._cardNode && this._cardNode.setConfig(this._config), this._saveConfig(!0);
    }), (h = e.getElementById("btnZoomIn")) == null || h.addEventListener("click", () => this._changeScale(this._scale + 0.1)), (_ = e.getElementById("btnZoomOut")) == null || _.addEventListener("click", () => this._changeScale(this._scale - 0.1)), (f = e.getElementById("btnFullscreen")) == null || f.addEventListener("click", () => {
      var x, S, $;
      document.fullscreenElement ? ($ = document.exitFullscreen) == null || $.call(document) : (S = (x = document.documentElement).requestFullscreen) == null || S.call(x);
    }), (y = e.getElementById("btnQuickTheme")) == null || y.addEventListener("click", () => {
      var V;
      const x = ["cyber_dark", "oled_black", "clean_light"], S = ((V = this._config.appearance) == null ? void 0 : V.theme_preset) || "cyber_dark", $ = (x.indexOf(S) + 1) % x.length, N = x[$];
      this._config.appearance.theme_preset = N, this._config.theme_mode = N === "clean_light" ? "light" : "dark", this._updateCardConfig();
      const A = e.getElementById("btnQuickTheme");
      A && (A.innerText = N === "clean_light" ? "☀️ Світла" : N === "oled_black" ? "⬛ OLED" : "🌙 Темна");
    }), (m = e.getElementById("btnSyncFromLovelace")) == null || m.addEventListener("click", () => {
      this._importFromLovelace(!0);
    });
    const i = e.getElementById("yamlModal"), n = e.getElementById("yamlCodeArea");
    (w = e.getElementById("btnOpenYamlModal")) == null || w.addEventListener("click", () => {
      if (i && n) {
        try {
          n.value = dc(this._config);
        } catch {
          n.value = JSON.stringify(this._config, null, 2);
        }
        i.classList.add("active");
      }
    }), (p = e.getElementById("btnCloseYamlModal")) == null || p.addEventListener("click", () => {
      i == null || i.classList.remove("active");
    }), (u = e.getElementById("btnCopyCurrentYaml")) == null || u.addEventListener("click", () => {
      var x;
      n && ((x = navigator.clipboard) == null || x.writeText(n.value), alert("✓ Скопійовано в буфер обміну!"));
    }), (g = e.getElementById("btnApplyYaml")) == null || g.addEventListener("click", () => {
      var x;
      if (n && n.value.trim())
        try {
          const S = n.value.trim();
          let $ = null;
          S.startsWith("{") ? $ = JSON.parse(S) : $ = rd(S), $ && typeof $ == "object" && ($.type && delete $.type, $.appearance = {
            ...ie.appearance,
            ...((x = this._config) == null ? void 0 : x.appearance) || {},
            ...$.appearance || {}
          }, $._customized = !0, this._hasFoundConfig = !0, this._config = $, this._saveConfig(!0), this._render(), this._bindEvents(), i == null || i.classList.remove("active"), alert("✓ Конфігурацію успішно застосовано!"));
        } catch (S) {
          alert("Помилка формату YAML / JSON: " + S.message);
        }
    }), e.querySelectorAll("#mainFontGrid .font-tile").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#mainFontGrid .font-tile").forEach((S) => S.classList.remove("active")), x.classList.add("active"), this._config.appearance.font_family = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#monoFontGrid .font-tile").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#monoFontGrid .font-tile").forEach((S) => S.classList.remove("active")), x.classList.add("active"), this._config.appearance.mono_font_family = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#powerSizeSeg .seg-btn").forEach((S) => S.classList.remove("active")), x.classList.add("active"), this._config.appearance.power_font_size = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#labelSizeSeg .seg-btn").forEach((S) => S.classList.remove("active")), x.classList.add("active"), this._config.appearance.label_font_size = x.dataset.val, this._updateCardConfig();
      });
    }), e.querySelectorAll("#themePresetSeg .seg-btn").forEach((x) => {
      x.addEventListener("click", () => {
        e.querySelectorAll("#themePresetSeg .seg-btn").forEach(($) => $.classList.remove("active")), x.classList.add("active");
        const S = x.dataset.val;
        this._config.appearance.theme_preset = S, this._config.theme_mode = S === "clean_light" ? "light" : "dark", this._updateCardConfig();
      });
    });
    const o = e.getElementById("sliderCardScale"), r = e.getElementById("lblCardScale");
    o && o.addEventListener("input", (x) => {
      const S = parseFloat(x.target.value);
      r && (r.innerText = `${Math.round(S * 100)}%`), this._changeScale(S);
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
  "%c⚡ Energy Station Card v1.7.1 Loaded ⚡",
  "background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"
);
const ca = {
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
    view_toggle_to_2d: "Перемкнути на 2D Схему",
    view_toggle_to_3d: "Перемкнути на 3D Станцію",
    charging: "ЗАРЯД",
    discharging: "РОЗРЯД",
    battery_charging: "Заряджається",
    battery_discharging: "Розряджається",
    battery_idle: "Очікування",
    blackout_alert: "БЛЕКАУТ / ВІДКЛЮЧЕНО",
    grid_stable: "Живлення стабільне",
    solar: "Сонячні панелі",
    wind: "Вітрогенерація",
    grid: "Електромережа",
    battery: "Система накопичення (АКБ)",
    house: "Гарантоване навантаження",
    smart_boiler: "Розумний Бойлер (ГВП)"
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
    view_toggle_to_2d: "Switch to 2D Schematic",
    view_toggle_to_3d: "Switch to 3D Station",
    charging: "CHARGE",
    discharging: "DISCHARGE",
    battery_charging: "Charging",
    battery_discharging: "Discharging",
    battery_idle: "Idle",
    blackout_alert: "BLACKOUT / GRID DOWN",
    grid_stable: "Grid Stable",
    solar: "Solar Panels",
    wind: "Wind Generation",
    grid: "Power Grid",
    battery: "Battery Storage System",
    house: "Essential Load",
    smart_boiler: "Smart Boiler (DHW)"
  }
};
class cc extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._initialized = !1, this._themeMode = "dark", this._language = "uk", this._scale = 1, this._nodes = {}, this._resizeObserver = null, this._outageJson = null, this._outageDay = "today", this._outageLoading = !1, this._outageError = null, this._outageFetchedRegion = null, this._outageRefreshTimer = null, this._outageTickTimer = null, this._lastOutageSignature = null;
  }
  _upgradeProperty(e) {
    if (Object.prototype.hasOwnProperty.call(this, e)) {
      const i = this[e];
      delete this[e], this[e] = i;
    }
  }
  connectedCallback() {
    if (this._setupResizeObserver(), this._startOutageTimers(), this._upgradeProperty("hass"), typeof sessionStorage < "u" && sessionStorage.getItem("energy_station_auto_edit") === "1") {
      try {
        sessionStorage.removeItem("energy_station_auto_edit");
      } catch {
      }
      setTimeout(() => this._openCardEditor(), 350);
    }
  }
  disconnectedCallback() {
    this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), this._stopOutageTimers();
  }
  _startOutageTimers() {
    var i, n, o, r, a, s;
    this._stopOutageTimers();
    const e = this._config || ie;
    ((i = e.outages) == null ? void 0 : i.show) === !1 || ((n = e.outages) == null ? void 0 : n.source) === "ha_entity" || (this._refreshOutageSchedule(!1), typeof setInterval == "function" && (this._outageRefreshTimer = setInterval(() => {
      this._refreshOutageSchedule(!0);
    }, 10 * 60 * 1e3), (r = (o = this._outageRefreshTimer) == null ? void 0 : o.unref) == null || r.call(o), this._outageTickTimer = setInterval(() => {
      this._renderOutageWidgets();
    }, 30 * 1e3), (s = (a = this._outageTickTimer) == null ? void 0 : a.unref) == null || s.call(a)));
  }
  _stopOutageTimers() {
    this._outageRefreshTimer && (clearInterval(this._outageRefreshTimer), this._outageRefreshTimer = null), this._outageTickTimer && (clearInterval(this._outageTickTimer), this._outageTickTimer = null);
  }
  _openCardEditor() {
    var n, o;
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
      const r = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
      for (const a of r)
        if (a.contains(this) || (n = a.shadowRoot) != null && n.contains(this) || r.length === 1) {
          i = a;
          break;
        }
    }
    if (i) {
      if (typeof i._editCard == "function") {
        i._editCard();
        return;
      }
      const r = ((o = i.shadowRoot) == null ? void 0 : o.querySelector("mwc-button, ha-button, button")) || i.querySelector("mwc-button, ha-button, button");
      if (r) {
        r.click();
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
      const r = new URL(window.location.href);
      r.searchParams.has("edit") ? setTimeout(() => {
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
      }, 500) : (r.searchParams.set("edit", "1"), window.location.href = r.toString());
    }
  }
  static getConfigElement() {
    return document.createElement("energy-station-card-editor");
  }
  static getStubConfig() {
    return JSON.parse(JSON.stringify(ie));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(e)), n = JSON.parse(JSON.stringify(ie));
    this._config = this._deepMerge(n, i);
    const o = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = o || this._config.theme_mode || "dark";
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = r || this._config.language || "uk";
    const a = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = a ? parseFloat(a) : this._config.card_scale || this._config.scale || 1;
    const s = typeof localStorage < "u" ? localStorage.getItem("energy_station_view_mode") : null;
    this._viewMode = s || this._config.view_mode || "3d", this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var r, a;
    let i = typeof e == "number" ? e : this._scale + (e || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const n = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".energy-station-container");
    n && (n.style.setProperty("--es-card-scale", i.toString()), n.style.zoom = i.toString());
    const o = (a = this.shadowRoot) == null ? void 0 : a.getElementById("headerZoomVal");
    o && (o.innerText = `${Math.round(i * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  _toggleViewMode() {
    if (this._viewMode = this._viewMode === "3d" ? "2d" : "3d", typeof localStorage < "u")
      try {
        localStorage.setItem("energy_station_view_mode", this._viewMode);
      } catch {
      }
    this._applyViewMode(), this._hass && this._updateValues();
  }
  _applyViewMode() {
    var s, l, c, d, b;
    const e = this._viewMode === "3d", i = (s = this.shadowRoot) == null ? void 0 : s.getElementById("station3DContainer"), n = (l = this.shadowRoot) == null ? void 0 : l.getElementById("schematicView"), o = (c = this.shadowRoot) == null ? void 0 : c.getElementById("headerViewToggle"), r = (d = this.shadowRoot) == null ? void 0 : d.getElementById("energyFlowCanvas"), a = (b = this.shadowRoot) == null ? void 0 : b.getElementById("batBranchBadgesContainer");
    i && (i.style.display = e ? "block" : "none"), n && (n.style.display = e ? "none" : "block"), r && (r.style.display = e ? "none" : "block"), a && (a.style.display = e ? "none" : "block"), o && (o.innerHTML = `<span>${e ? "🧊 3D" : "⚡ 2D"}</span>`, o.title = e ? this._t("view_toggle_to_2d") : this._t("view_toggle_to_3d"));
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, i) {
    const n = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!i || typeof i != "object") return n;
    for (const o of Object.keys(i)) {
      const r = i[o], a = e ? e[o] : void 0;
      r && typeof r == "object" && !Array.isArray(r) ? n[o] = this._deepMerge(a || {}, r) : n[o] = r;
    }
    return n;
  }
  _getEntityState(e) {
    var s;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const i = this._hass.states[e], o = String(i.state).trim().replace(",", "."), r = parseFloat(o), a = ((s = i.attributes) == null ? void 0 : s.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(r) ? 0 : r,
      unit: a,
      attributes: i.attributes
    };
  }
  _t(e) {
    var n, o;
    const i = this._language || "uk";
    return ((n = ca[i]) == null ? void 0 : n[e]) || ((o = ca.uk) == null ? void 0 : o[e]) || e;
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
  _applyTheme() {
    var a;
    const e = (a = this.shadowRoot) == null ? void 0 : a.querySelector(".energy-station-container");
    if (!e) return;
    const i = this._themeMode === "light";
    e.classList.toggle("theme-light", i);
    const n = this.shadowRoot.getElementById("headerThemeToggle");
    n && (n.innerHTML = i ? "☀️" : "🌙", n.setAttribute("title", i ? this._t("theme_dark") : this._t("theme_light")));
    const o = this.shadowRoot.getElementById("btnThemeDark"), r = this.shadowRoot.getElementById("btnThemeLight");
    o && r && (o.classList.toggle("active", !i), r.classList.toggle("active", i));
  }
  _formatPower(e, i = 0) {
    const n = this._language === "en" ? "kW" : "кВт";
    if (e == null) {
      const a = (typeof i == "number" ? i : 0).toFixed(3);
      return { num: a, kw: i || 0, str: a + " " + n, formatted: a + " " + n };
    }
    let o = typeof e == "number" ? e : e && typeof e.val == "number" ? e.val : i;
    (typeof o != "number" || isNaN(o)) && (o = typeof i == "number" ? i : 0), e && e.unit === "W" && (o = o / 1e3);
    const r = o.toFixed(3);
    return {
      num: r,
      kw: o,
      str: r + " " + n,
      formatted: r + " " + n
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
    var c, d, b, h, _, f, y, m, w, p, u, g, x, S, $, N, A, V, U, Y, k;
    const e = this._config || ie;
    this._initialized = !0;
    const i = e.appearance || ie.appearance || {}, n = {
      Inter: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "JetBrains Mono": "'JetBrains Mono', monospace",
      Roboto: "'Roboto', sans-serif",
      Orbitron: "'Orbitron', sans-serif",
      "Exo 2": "'Exo 2', sans-serif",
      Ubuntu: "'Ubuntu', sans-serif",
      "system-ui": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }, o = {
      "JetBrains Mono": "'JetBrains Mono', monospace",
      "Roboto Mono": "'Roboto Mono', monospace",
      Orbitron: "'Orbitron', monospace",
      "Fira Code": "'Fira Code', monospace",
      "Share Tech Mono": "'Share Tech Mono', monospace"
    }, r = {
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
          --flow-speed: ${((c = e.animations) == null ? void 0 : c.speed) || 1.2}s;
          --es-power-font-size: ${r[i.power_font_size] || "22px"};
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
          font-family: var(--es-mono-font-family, ${o[i.mono_font_family] || o["JetBrains Mono"]});
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

        .flow-pulse.flow-grid.exporting {
          stroke: #34d399;
          filter: drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #34d399);
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
        .glow-grid-export { filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.55)); }
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

          .es-bottom-outage-dock {
            width: 100%;
            order: 2;
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
        ${Ja()}
        ${ls()}
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
            <span class="es-header-badge">PRO FLOW v1.7.1</span>
          </div>
          <div class="es-header-controls">
            <button class="es-header-pill-btn es-header-edit-btn" id="headerEditCard" title="${this._t("edit_card")}">
              <span>⚙️</span>
              <span>${this._t("edit_card")}</span>
            </button>
            <button class="es-header-pill-btn es-mono" id="headerViewToggle" title="${this._viewMode === "3d" ? this._t("view_toggle_to_2d") || "Перемкнути на 2D схему" : this._t("view_toggle_to_3d") || "Перемкнути на 3D вигляд"}">
              <span>${this._viewMode === "3d" ? "🧊 3D" : "⚡ 2D"}</span>
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

        <!-- SCHEMATIC 2D VIEW -->
        <div class="schematic-view" id="schematicView">
        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${$e.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">0.0</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((d = e.solar) == null ? void 0 : d.target_daily_yield) || 55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${$e.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${$e.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(b = e.grid) != null && b.show_non_essential && ((h = e.grid) != null && h.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${$e.house_outline || $e.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(_ = e.grid) != null && _.show_car && ((f = e.grid) != null && f.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${$e.car}</div>
              <div class="es-node-title" id="carTitle">${((y = e.grid) == null ? void 0 : y.car_title) || this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${$e.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((m = e.inverter) == null ? void 0 : m.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((w = e.aux) == null ? void 0 : w.type) === "none" || ((p = e.aux) == null ? void 0 : p.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${$e[(u = e.aux) == null ? void 0 : u.type] || $e.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((g = e.aux) == null ? void 0 : g.type) === "microinverter" && (!((x = e.aux) != null && x.title) || ((S = e.aux) == null ? void 0 : S.title) === "Вітрогенератор") ? this._t("aux_microinverter") : (($ = e.aux) == null ? void 0 : $.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((N = e.aux) == null ? void 0 : N.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">0.0</span> V</div>
                <div><span id="inverterCurrent">0.00</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((A = e.wind) == null ? void 0 : A.show) === !1 && ((V = e.aux) == null ? void 0 : V.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">0.00 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${$e.house}</div>
              <div class="es-node-title">${this._t("house_title")}</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
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

          <!-- Bottom Grid Row: Outage Schedule (left), Batteries (center), Quick Controls Dock (right) -->
          <div class="es-bottom-row">
            <div class="es-bottom-outage-dock" id="bottomOutageDock"></div>
            <div class="es-battery-rack" id="batteryRackContainer"></div>
            <div class="es-bottom-controls-dock" id="bottomControlsDock"></div>
          </div>

        </div>
        </div>

        <!-- 3D HARDWARE VIEW -->
        ${Qa(e, this._t.bind(this))}

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
    `, this._cacheDomNodes(), this._renderDynamicPvPanels(), this._renderDynamicWindTurbines(), this._renderDynamicSubloads(), this._renderDynamicBatteryRack(), this._renderOutageWidgets(), this._bindInteractions(), this._setupResizeObserver(), this._applyViewMode(), this._rAF(() => this._updateFlowPaths());
    const l = ((U = e.outages) == null ? void 0 : U.region) || "kyiv-region";
    this.isConnected && ((Y = e.outages) == null ? void 0 : Y.show) !== !1 && ((k = e.outages) == null ? void 0 : k.source) !== "ha_entity" && this._outageFetchedRegion !== l && this._refreshOutageSchedule(!1);
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
      bottomControlsDock: e.getElementById("bottomControlsDock"),
      bottomOutageDock: e.getElementById("bottomOutageDock"),
      outageDock3D: e.getElementById("outageDock3D")
    };
  }
  _renderDynamicWindTurbines() {
    var l, c, d, b, h, _, f, y;
    const e = this._config || ie, i = ((l = this._nodes) == null ? void 0 : l.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !(((c = e.wind) == null ? void 0 : c.show) !== !1 || ((d = e.aux) == null ? void 0 : d.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const o = ((b = e.wind) == null ? void 0 : b.turbine_count) || ((_ = (h = e.wind) == null ? void 0 : h.turbines) == null ? void 0 : _.length) || 2, r = ((f = e.wind) == null ? void 0 : f.turbines) || [], a = document.createElement("div");
    a.className = "es-wind-summary-bar es-mono", a.id = "windStationSummaryBar", a.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(a);
    const s = document.createElement("div");
    s.className = "es-wind-pods-row", i.appendChild(s);
    for (let m = 0; m < o; m++) {
      const w = r[m] || {
        name: `Вітряк ${m + 1}`,
        power_entity: `sensor.wind_turbine_${m + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((y = e.wind) == null ? void 0 : y.animation_threshold) || 50
      }, p = !!(w.daily_energy_entity || w.monthly_energy_entity), u = document.createElement("div");
      u.className = "es-turbine-card glow-wind clickable-node", u.id = `turbineCard_${m + 1}`, u.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${m + 1}">
              ${$e.wind_turbine}
            </div>
            <span>${w.name || `Вітряк ${m + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${m + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${m + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${m + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${m + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${m + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${p ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${m + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${m + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, u.addEventListener("click", () => {
        this._fireMoreInfo(w.power_entity);
      }), s.appendChild(u);
    }
  }
  _renderDynamicPvPanels() {
    var a, s, l, c, d, b;
    const e = this._config || ie, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((a = e.solar) == null ? void 0 : a.pv_count) || ((l = (s = e.solar) == null ? void 0 : s.strings) == null ? void 0 : l.length) || 3, o = this._language === "en" ? "kWp" : "кВтп", r = ((c = e.solar) == null ? void 0 : c.show_metrics) !== !1;
    for (let h = 1; h <= n; h++) {
      const _ = h < 10 ? `0${h}` : `${h}`, f = ((b = (d = e.solar) == null ? void 0 : d.strings) == null ? void 0 : b[h - 1]) || {}, y = f.name || `PV ${_}`, m = f.capacity_kw !== void 0 ? parseFloat(f.capacity_kw) : 4, w = f.voltage_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_voltage` : ""), p = f.current_entity || (h <= 3 ? `sensor.deye_12k_inverter_pv${h}_current` : ""), u = document.createElement("div");
      u.className = "es-pv-panel glow-solar clickable-node", u.dataset.pvIndex = h, u.id = `pvPanel_${h}`, u.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${$e.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${y}</span>
        <span class="es-pv-val es-mono" id="pvVal_${h}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${h}" style="${r ? "display: flex;" : "display: none;"}">
          <span class="volt" id="pvVolt_${h}" title="${this._language === "en" ? "PV Voltage" : "Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${h}" title="${this._language === "en" ? "PV Current" : "Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${h}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${h}">${m.toFixed(1).replace(".", ",")}</span> <span style="font-size: 9px; color: #64748b;">${o}</span> <span id="pvPercent_${h}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `, u.addEventListener("click", () => {
        var $;
        const S = f.power_entity || w || p || (($ = e.solar) == null ? void 0 : $.total_power_entity);
        this._fireMoreInfo(S);
      });
      const g = u.querySelector(`#pvVolt_${h}`);
      g && g.addEventListener("click", (S) => {
        S.stopPropagation(), w ? this._fireMoreInfo(w) : f.power_entity && this._fireMoreInfo(f.power_entity);
      });
      const x = u.querySelector(`#pvCurr_${h}`);
      x && x.addEventListener("click", (S) => {
        S.stopPropagation(), p ? this._fireMoreInfo(p) : f.power_entity && this._fireMoreInfo(f.power_entity);
      }), i.appendChild(u);
    }
  }
  _renderDynamicSubloads() {
    var o;
    const e = this._config || ie, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((o = e.load) == null ? void 0 : o.subloads) || []).forEach((r, a) => {
      const s = document.createElement("div");
      s.className = "es-subload-card clickable-node", s.id = `subloadCard_${a}`, s.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${$e[r.icon] || $e.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${a}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">0.000 ${this._language === "en" ? "kW" : "кВт"}</span>
      `, s.addEventListener("click", () => {
        this._fireMoreInfo(r.entity);
      }), i.appendChild(s);
    });
  }
  _renderDynamicBatteryRack() {
    var b, h, _, f, y, m, w;
    const e = this._config || ie, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const n = ((b = e.battery) == null ? void 0 : b.parallel_batteries) || ((_ = (h = e.battery) == null ? void 0 : h.modules) == null ? void 0 : _.length) || 2, o = [82, 76, 91, 68, 85, 90, 72, 80], r = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], a = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], s = [12, 8, 15, 9, 14, 11, 18, 10], l = this._t("bat_prefix"), c = this._language === "en" ? "kW" : "кВт", d = this._language === "en" ? "kWh" : "кВт·год";
    for (let p = 1; p <= n; p++) {
      const u = ((y = (f = e.battery) == null ? void 0 : f.modules) == null ? void 0 : y[p - 1]) || ((w = (m = e.battery) == null ? void 0 : m.module_entities) == null ? void 0 : w[p - 1]) || {}, g = u.name || `${l} ${p}`, x = o[(p - 1) % o.length], S = r[(p - 1) % r.length], $ = a[(p - 1) % a.length], N = s[(p - 1) % s.length], A = document.createElement("div");
      A.className = "es-battery-pack-card glow-battery clickable-node", A.id = `batPackCard_${p}`, A.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${$e.battery_vertical}</div>
        <span class="es-bat-name">${g}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${p}">${x}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${p}">${S.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${p}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${c}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${p}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${p}">${$.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${p}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${p}">${N} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${p}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${d}</div>
      `, A.addEventListener("click", (V) => {
        var Y;
        if (V.target.closest(`#batPackTemp_${p}`)) {
          const k = u.temperature_entity || u.temp || `sensor.bms_rack${p}_temperature`;
          this._fireMoreInfo(k);
          return;
        }
        if (V.target.closest(`#batPackDelta_${p}`)) {
          const k = u.cell_delta_entity || u.delta_entity || `sensor.bms_rack${p}_cell_delta`;
          this._fireMoreInfo(k);
          return;
        }
        const U = u.soc_entity || u.soc || u.voltage_entity || u.volt || u.current_entity || ((Y = e.battery) == null ? void 0 : Y.soc_entity);
        this._fireMoreInfo(U);
      }), i.appendChild(A);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var y, m, w, p, u, g, x, S, $, N;
    const e = this._config || ie, i = ((y = this._nodes) == null ? void 0 : y.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", e.show_quick_settings === !1)) return;
    const n = this._themeMode === "light", o = this._language === "en", r = ((m = e.controls) == null ? void 0 : m.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", a = ((w = e.controls) == null ? void 0 : w.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", s = ((p = e.controls) == null ? void 0 : p.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", l = document.createElement("div");
    l.className = "es-quick-settings-card", l.id = "quickSettingsCard", l.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${$e.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n ? $e.sun_mode : $e.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${o ? "EN" : "UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${r}">
              <span class="es-ctrl-icon es-ctrl-solar">${$e.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${$e.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${o ? "W" : "Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${s}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${$e.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (u = l.querySelector("#btnEditCardQs")) == null || u.addEventListener("click", (A) => {
      A.stopPropagation(), this._openCardEditor();
    }), (g = l.querySelector("#btnThemeToggle")) == null || g.addEventListener("click", (A) => {
      A.stopPropagation(), this._toggleTheme();
    }), (x = l.querySelector("#btnLangToggle")) == null || x.addEventListener("click", (A) => {
      A.stopPropagation(), this._toggleLanguage();
    }), (S = l.querySelector("#ctrlLabelWrapSolar")) == null || S.addEventListener("click", () => this._fireMoreInfo(r)), ($ = l.querySelector("#ctrlLabelWrapSell")) == null || $.addEventListener("click", () => this._fireMoreInfo(a)), (N = l.querySelector("#ctrlLabelWrapGrid")) == null || N.addEventListener("click", () => this._fireMoreInfo(s));
    const c = l.querySelector("#ctrlSliderSolar"), d = l.querySelector("#ctrlValSolar");
    c && (this._updateSliderGradient(c), c.addEventListener("input", (A) => {
      d && (d.innerText = `${A.target.value} A`), this._updateSliderGradient(c);
    }), c.addEventListener("change", (A) => {
      this._setNumberValue(r, A.target.value);
    }));
    const b = l.querySelector("#ctrlSliderSell"), h = l.querySelector("#ctrlValSell");
    b && (this._updateSliderGradient(b), b.addEventListener("input", (A) => {
      const V = Number(A.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      h && (h.innerText = `${V} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(b);
    }), b.addEventListener("change", (A) => {
      this._setNumberValue(a, A.target.value);
    }));
    const _ = l.querySelector("#ctrlSliderGrid"), f = l.querySelector("#ctrlValGrid");
    _ && (this._updateSliderGradient(_), _.addEventListener("input", (A) => {
      f && (f.innerText = `${A.target.value} A`), this._updateSliderGradient(_);
    }), _.addEventListener("change", (A) => {
      this._setNumberValue(s, A.target.value);
    })), i.appendChild(l), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const i = parseFloat(e.min) || 0, n = parseFloat(e.max) || 100, o = parseFloat(e.value) || 0, r = Math.max(0, Math.min(100, (o - i) / (n - i) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, i) {
    if (!this._hass || !e) return;
    const o = e.split(".")[0] || "number", r = Number(i);
    this._hass.callService(o, "set_value", {
      entity_id: e,
      value: r
    });
  }
  _updateControlSliders() {
    var h, _, f, y, m, w, p, u, g;
    const e = this._config || ie;
    if (e.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const n = ((h = e.controls) == null ? void 0 : h.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", o = ((_ = e.controls) == null ? void 0 : _.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", r = ((f = e.controls) == null ? void 0 : f.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", a = i.getElementById("ctrlSliderSolar"), s = i.getElementById("ctrlValSolar"), l = i.getElementById("ctrlSliderSell"), c = i.getElementById("ctrlValSell"), d = i.getElementById("ctrlSliderGrid"), b = i.getElementById("ctrlValGrid");
    if (a && (!a.matches || !a.matches(":active"))) {
      const x = (m = (y = this._hass) == null ? void 0 : y.states) == null ? void 0 : m[n], S = x && !isNaN(parseFloat(x.state)) ? parseFloat(x.state) : a.value ? parseFloat(a.value) : 80;
      a.value = S, s && (s.innerText = `${Math.round(S)} A`), this._updateSliderGradient(a);
    }
    if (l && (!l.matches || !l.matches(":active"))) {
      const x = (p = (w = this._hass) == null ? void 0 : w.states) == null ? void 0 : p[o], S = x && !isNaN(parseFloat(x.state)) ? parseFloat(x.state) : l.value ? parseFloat(l.value) : 5e3;
      l.value = S;
      const $ = Math.round(S).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), N = this._language === "uk" ? "Вт" : "W";
      c && (c.innerText = `${$} ${N}`), this._updateSliderGradient(l);
    }
    if (d && (!d.matches || !d.matches(":active"))) {
      const x = (g = (u = this._hass) == null ? void 0 : u.states) == null ? void 0 : g[r], S = x && !isNaN(parseFloat(x.state)) ? parseFloat(x.state) : d.value ? parseFloat(d.value) : 70;
      d.value = S, b && (b.innerText = `${Math.round(S)} A`), this._updateSliderGradient(d);
    }
  }
  _bindInteractions() {
    var o, r, a, s, l, c, d, b, h, _, f, y, m, w, p, u, g, x, S, $, N, A, V, U, Y;
    const e = this.shadowRoot, i = this._config || ie;
    (o = e.getElementById("headerEditCard")) == null || o.addEventListener("click", (k) => {
      k.stopPropagation(), this._openCardEditor();
    }), (r = e.getElementById("headerViewToggle")) == null || r.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleViewMode();
    }), (a = e.getElementById("headerThemeToggle")) == null || a.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleTheme();
    }), (s = e.getElementById("headerLangToggle")) == null || s.addEventListener("click", (k) => {
      k.stopPropagation(), this._toggleLanguage();
    }), (l = e.getElementById("headerZoomIn")) == null || l.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (c = e.getElementById("headerZoomOut")) == null || c.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (d = e.getElementById("headerZoomVal")) == null || d.addEventListener("click", (k) => {
      k.stopPropagation(), this._changeScale(1);
    }), (b = e.getElementById("solarHeaderNode")) == null || b.addEventListener("click", () => {
      var k, B;
      this._fireMoreInfo(((k = i.solar) == null ? void 0 : k.daily_yield_entity) || ((B = i.solar) == null ? void 0 : B.total_power_entity));
    }), (h = e.getElementById("totalPvPowerBadge")) == null || h.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.solar) == null ? void 0 : k.total_power_entity);
    }), (_ = e.getElementById("gridNode")) == null || _.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.power_entity);
    }), (f = e.getElementById("nonEssentialNode")) == null || f.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.non_essential_power_entity);
    }), (y = e.getElementById("carNode")) == null || y.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.grid) == null ? void 0 : k.car_power_entity);
    }), (m = e.getElementById("inverterNode")) == null || m.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.inverter) == null ? void 0 : k.power_entity);
    }), (w = e.getElementById("inverterSelfConsumptionBox")) == null || w.addEventListener("click", (k) => {
      var B;
      k.stopPropagation(), (B = i.inverter) != null && B.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (p = e.getElementById("auxNode")) == null || p.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.aux) == null ? void 0 : k.power_entity);
    }), (u = e.getElementById("essentialNode")) == null || u.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.load) == null ? void 0 : k.essential_power_entity);
    }), (g = e.getElementById("masterBatteryHub")) == null || g.addEventListener("click", () => {
      var k;
      this._fireMoreInfo((k = i.battery) == null ? void 0 : k.soc_entity);
    }), (x = e.getElementById("batChargeDaily")) == null || x.addEventListener("click", (k) => {
      var B;
      k.stopPropagation(), this._fireMoreInfo(((B = i.battery) == null ? void 0 : B.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (S = e.getElementById("batDischargeDaily")) == null || S.addEventListener("click", (k) => {
      var B;
      k.stopPropagation(), this._fireMoreInfo(((B = i.battery) == null ? void 0 : B.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let k = 1; k <= 8; k++) {
      const B = e.getElementById(`batBranchBadge_${k}`), E = ((N = ($ = i.battery) == null ? void 0 : $.modules) == null ? void 0 : N[k - 1]) || ((V = (A = i.battery) == null ? void 0 : A.module_entities) == null ? void 0 : V[k - 1]) || {};
      B == null || B.addEventListener("click", () => {
        var T;
        const C = E.power_entity || E.current_entity || E.soc_entity || ((T = i.battery) == null ? void 0 : T.soc_entity);
        this._fireMoreInfo(C);
      });
    }
    const n = (k) => {
      var C, T, I, L;
      const B = (T = (C = k.target) == null ? void 0 : C.closest) == null ? void 0 : T.call(C, "[data-outage-day]");
      if (B) {
        k.stopPropagation(), this._outageDay = B.getAttribute("data-outage-day") === "tomorrow" ? "tomorrow" : "today", this._renderOutageWidgets();
        return;
      }
      const E = (L = (I = k.target) == null ? void 0 : I.closest) == null ? void 0 : L.call(I, "[data-action]");
      if (E) {
        k.stopPropagation();
        const F = E.getAttribute("data-action");
        F === "refresh-outage" ? this._refreshOutageSchedule(!0) : F === "edit-outage" && this._openCardEditor();
      }
    };
    (U = e.getElementById("bottomOutageDock")) == null || U.addEventListener("click", n), (Y = e.getElementById("outageDock3D")) == null || Y.addEventListener("click", n);
  }
  _getOutageHaInfo(e = null) {
    var b, h, _;
    const i = this._config || ie, n = i.outages || {}, o = n.status_entity ? this._getEntityState(n.status_entity) : null, r = n.next_outage_entity ? this._getEntityState(n.next_outage_entity) : null, a = n.next_power_entity ? this._getEntityState(n.next_power_entity) : null;
    let s = e, l = null;
    const c = n.grid_voltage_entity !== void 0 ? n.grid_voltage_entity : "sensor.breaker_phase_a_voltage", d = n.grid_voltage_threshold ?? ((b = i.grid) == null ? void 0 : b.voltage_threshold) ?? 90;
    if (c && this._hass) {
      const f = this._getEntityState(c);
      if (f && f.raw !== "unavailable" && f.raw !== "unknown") {
        const y = parseFloat(String(f.raw).replace(",", "."));
        isNaN(y) || (l = y, s = y < d);
      }
    }
    if (s === null && this._hass) {
      const f = ((h = i.grid) == null ? void 0 : h.voltage_entity) || ((_ = i.inverter) == null ? void 0 : _.voltage_entity), y = f ? this._getEntityState(f) : null;
      if (y && y.raw !== "unavailable" && y.raw !== "unknown") {
        const m = parseFloat(String(y.raw).replace(",", "."));
        isNaN(m) || (l = m, s = m < d);
      }
    }
    return {
      statusRaw: (o == null ? void 0 : o.raw) || null,
      nextOutageRaw: (r == null ? void 0 : r.raw) || null,
      nextPowerRaw: (a == null ? void 0 : a.raw) || null,
      isGridBlackout: s,
      actualGridVoltage: l
    };
  }
  async _refreshOutageSchedule(e = !1) {
    const n = (this._config || ie).outages || {};
    if (n.show === !1 || n.source === "ha_entity") return;
    const o = n.region || "kyiv-region";
    this._outageFetchedRegion = o, this._outageLoading = !0, this._outageError = null, this._renderOutageWidgets();
    try {
      const r = await ss(o, void 0, e);
      this._outageJson = r, this._outageError = null;
    } catch (r) {
      this._outageError = (r == null ? void 0 : r.message) || "Fetch error";
    } finally {
      this._outageLoading = !1, this._renderOutageWidgets();
    }
  }
  _getCurrentOutageSummary(e = null) {
    const n = (this._config || ie).outages || ie.outages, o = this._getOutageHaInfo(e);
    return rs(this._outageJson, n, /* @__PURE__ */ new Date(), o);
  }
  _renderOutageWidgets(e = null) {
    var d, b, h, _, f, y, m, w, p, u, g;
    if (!this.shadowRoot) return;
    const i = this._config || ie, n = ((d = this._nodes) == null ? void 0 : d.bottomOutageDock) || this.shadowRoot.getElementById("bottomOutageDock"), o = ((b = this._nodes) == null ? void 0 : b.outageDock3D) || this.shadowRoot.getElementById("outageDock3D");
    if (((h = i.outages) == null ? void 0 : h.show) === !1) {
      n && (n.innerHTML = ""), o && (o.innerHTML = "");
      return;
    }
    const r = this._getCurrentOutageSummary(e), a = {
      lang: this._language,
      selectedDay: this._outageDay,
      loading: this._outageLoading,
      error: this._outageError
    };
    n && (n.innerHTML = Ur(r, { ...a, is3D: !1 })), o && (o.innerHTML = Ur(r, { ...a, is3D: !0 }));
    const s = this.shadowRoot.getElementById("gridOutageMini3D"), l = this.shadowRoot.getElementById("gridOutageMiniGroup3D"), c = this.shadowRoot.getElementById("gridOutageMiniStatus3D");
    if (s) {
      s.style.display = "flex";
      const x = this._buildOutageMiniPayload(r);
      l && (l.textContent = x.groupText), c && (c.textContent = x.statusText), s.classList && (x.state === "off" ? (f = (_ = s.classList).add) == null || f.call(_, "is-off") : (m = (y = s.classList).remove) == null || m.call(y, "is-off"), x.state === "on" ? (p = (w = s.classList).add) == null || p.call(w, "is-on") : (g = (u = s.classList).remove) == null || g.call(u, "is-on"));
    }
  }
  _buildOutageMiniPayload(e) {
    const i = this._language === "en";
    let n = i ? "Loading..." : "Завантаження...";
    if (e.hasData || e.currentStatus !== "unknown") {
      const o = e.currentStatus === "off" ? "🔴" : e.currentStatus === "maybe" ? "🟡" : "🟢";
      if (e.nextEvent) {
        const r = pa(e.nextEvent.minutesLeft, this._language);
        n = e.currentStatus === "off" ? `${o} ${i ? "Back" : "Увімк."} ${e.nextEvent.atTime} (${r})` : `${o} ${i ? "Off in" : "До відкл."} ${r}`;
      } else
        n = e.currentStatus === "off" ? `${o} ${i ? "Outage" : "Відключення"}` : `${o} ${i ? "Power ON" : "Світло є"}`;
    }
    return {
      groupText: `🕯️ ${i ? "Grp" : "Група"} ${e.groupLabel}`,
      statusText: n,
      state: e.currentStatus
    };
  }
  _fetchNightEndFromHa(e, i) {
    var l, c;
    if (this._fetchingHistoryForDate === e) return;
    const o = (l = (this._config || ie).grid) == null ? void 0 : l.import_daily_entity;
    if (!((c = this._hass) != null && c.callWS) || !o) return;
    this._fetchingHistoryForDate = e;
    const r = /* @__PURE__ */ new Date(), a = new Date(r.getFullYear(), r.getMonth(), r.getDate(), 0, 0, 0), s = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i, 5, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: a.toISOString(),
      end_time: s.toISOString(),
      entity_ids: [o],
      no_attributes: !0
    }).then((d) => {
      const b = d == null ? void 0 : d[o];
      if (b && b.length > 0) {
        let h = null;
        for (let _ = b.length - 1; _ >= 0; _--) {
          const f = parseFloat(b[_].state);
          if (!isNaN(f) && f >= 0) {
            h = f;
            break;
          }
        }
        if (h !== null) {
          const _ = `es_tariff_split_${e}`;
          let f = {};
          if (typeof localStorage < "u")
            try {
              const y = localStorage.getItem(_);
              y && (f = JSON.parse(y));
            } catch {
            }
          if (f.night_end = h, f.night_end_hour = i, f.night_end_verified = !0, typeof localStorage < "u")
            try {
              localStorage.setItem(_, JSON.stringify(f));
            } catch {
            }
          this._hass && this._updateValues();
        }
      }
    }).catch((d) => {
      console.warn("Could not fetch night tariff history from HA:", d);
    });
  }
  _calculateTariffs(e, i, n, o = 0) {
    var g, x, S, $, N, A, V, U, Y, k, B, E, C, T, I, L, F, Q, fe, ce, he;
    const a = (this._config || ie).tariffs || {};
    if (a.enabled === !1) {
      (g = this._nodes) != null && g.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (x = this._nodes) != null && x.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (S = this._nodes) != null && S.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), ($ = this._nodes) != null && $.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none"), (N = this._nodes) != null && N.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (A = this._nodes) != null && A.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    const s = a.currency || "грн", l = typeof a.day_rate == "number" ? a.day_rate : 4.32, c = typeof a.night_rate == "number" ? a.night_rate : 2.16, d = typeof a.export_rate == "number" ? a.export_rate : 5.3, b = typeof a.night_start_hour == "number" ? a.night_start_hour : 23, h = typeof a.night_end_hour == "number" ? a.night_end_hour : 7, _ = /* @__PURE__ */ new Date(), f = _.getHours() + _.getMinutes() / 60, y = b > h ? f >= b || f < h : f >= b && f < h;
    if ((V = this._nodes) != null && V.gridTariffBadge && a.show_active_badge !== !1) {
      const K = y ? c : l, be = y ? this._t("tariff_night") : this._t("tariff_day"), G = y ? "🌙" : "☀️", J = y ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", de = y ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", xe = y ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = J, this._nodes.gridTariffBadge.style.border = `1px solid ${de}`, this._nodes.gridTariffBadge.style.color = xe, this._nodes.gridTariffBadge.innerText = `${G} ${be}: ${K.toFixed(2)} ${s}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (U = this._nodes) != null && U.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((Y = this._nodes) != null && Y.solarSavingsDaily && a.show_solar_savings !== !1 && n > 0) {
      const K = n * l;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${K.toFixed(2)} ${s}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (k = this._nodes) != null && k.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((B = this._nodes) != null && B.gridExportIncomeRow && a.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const K = i * d;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${K.toFixed(2)} ${s}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (E = this._nodes) != null && E.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (C = this._nodes) != null && C.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (T = this._nodes) != null && T.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (I = this._nodes) != null && I.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
      return;
    }
    let m = null, w = null;
    if (a.import_night_entity || a.import_day_entity) {
      const K = a.import_night_entity ? this._getEntityState(a.import_night_entity) : null, be = a.import_day_entity ? this._getEntityState(a.import_day_entity) : null;
      K && typeof K.val == "number" && (m = K.val), be && typeof be.val == "number" && (w = be.val), m !== null && w === null ? w = Math.max(0, e - m) : w !== null && m === null && (m = Math.max(0, e - w));
    }
    if (m === null || w === null) {
      const K = `${_.getFullYear()}-${String(_.getMonth() + 1).padStart(2, "0")}-${String(_.getDate()).padStart(2, "0")}`, be = `es_tariff_split_${K}`;
      let G = {};
      if (typeof localStorage < "u")
        try {
          const J = localStorage.getItem(be);
          J && (G = JSON.parse(J));
        } catch {
        }
      if (f < h) {
        if (m = e, w = 0, G.ongoing_night_val = e, G.ongoing_night_hour = f, G.night_end = e, G.night_end_hour = f, G.night_end_verified = !1, typeof localStorage < "u")
          try {
            localStorage.setItem(be, JSON.stringify(G));
          } catch {
          }
      } else if (f >= h && f < b) {
        const J = G.night_end_verified === !0, de = typeof G.night_end_hour == "number" && G.night_end_hour >= h - 0.25;
        if ((J || de) && typeof G.night_end == "number" && G.night_end <= e)
          m = G.night_end, w = Math.max(0, e - m);
        else {
          this._fetchNightEndFromHa(K, h);
          let xe = e * Math.min(1, h / Math.max(f, 1));
          typeof o == "number" && o > 0.5 && (xe = Math.min(e, Math.max(xe, o))), m = xe, w = Math.max(0, e - m);
        }
        if (G.day_end = e, typeof localStorage < "u")
          try {
            localStorage.setItem(be, JSON.stringify(G));
          } catch {
          }
      } else {
        const J = typeof G.night_end == "number" && G.night_end_verified ? G.night_end : e * (h / f), de = typeof G.day_end == "number" ? G.day_end : e;
        w = Math.max(0, de - J);
        const xe = Math.max(0, e - de);
        m = J + xe;
      }
    }
    const p = m * c + w * l;
    (L = this._nodes) != null && L.gridCostDailyRow && a.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${p.toFixed(2)} ${s}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${m.toFixed(1)} + ☀️ ${w.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (F = this._nodes) != null && F.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
    const u = m > 0 && l > c ? m * (l - c) : 0;
    if ((Q = this._nodes) != null && Q.gridNightSavingsRow && a.show_night_savings !== !1 && u > 0.05 ? (this._nodes.gridNightSavingsVal && (this._nodes.gridNightSavingsVal.innerText = `🌙 ${this._t("tariff_night_saved")}: ~${u.toFixed(2)} ${s}`), this._nodes.gridNightSavingsRow.style.display = "block") : (fe = this._nodes) != null && fe.gridNightSavingsRow && (this._nodes.gridNightSavingsRow.style.display = "none"), (ce = this._nodes) != null && ce.netBenefitDailyRow && a.show_net_benefit !== !1) {
      const K = typeof n == "number" && n > 0 ? n * l : 0, be = typeof i == "number" && i > 0 ? i * d : 0, G = K + be - p;
      this._nodes.netBenefitDailyBadge && (G >= 0 ? (this._nodes.netBenefitDailyBadge.style.background = "rgba(16, 185, 129, 0.15)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(16, 185, 129, 0.35)", this._nodes.netBenefitDailyBadge.style.color = "#34d399", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_benefit")}: +${G.toFixed(2)} ${s}`) : (this._nodes.netBenefitDailyBadge.style.background = "rgba(56, 189, 248, 0.12)", this._nodes.netBenefitDailyBadge.style.border = "1px solid rgba(56, 189, 248, 0.3)", this._nodes.netBenefitDailyBadge.style.color = "#38bdf8", this._nodes.netBenefitDailyBadge.innerText = `💰 ${this._t("tariff_net_cost")}: ${G.toFixed(2)} ${s}`)), this._nodes.netBenefitDailyRow.style.display = "block";
    } else (he = this._nodes) != null && he.netBenefitDailyRow && (this._nodes.netBenefitDailyRow.style.display = "none");
  }
  _updateValues() {
    var ti, ii, Fi, Oi, Vi, zi, Wi, Gi, Hi, qi, Ui, ji, Yi, Ki, Wn, Gn, Hn, qn, Un, jn, Yn, Kn, Jn, Qn, Zn, Xn, eo, to, io, no, oo, ro, ao, so, lo, co, po, fo, go, uo, ho, bo, yo, _o, mo, vo, xo, wo, ko, So, Eo, Co, $o, To, Bo, Io, Ao, No, Lo, Do, Po, Ro, Mo, Fo, Oo, Vo, zo, Wo, Go, Ho, qo, Uo, jo, Yo, Ko, Jo, Qo, Zo, Xo, er, tr, ir, nr, or, rr, ar, sr, lr, dr, cr, pr, fr, gr, ur, hr, br, yr, _r, mr, vr, xr, wr, kr, Sr, Er, Cr, $r, Tr, Br, Ir, Ar, Nr, Lr, Dr, Pr, Rr, Mr, Fr, Or;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || ie, i = this._language === "en" ? "kW" : "кВт", n = ((ti = e.solar) == null ? void 0 : ti.pv_count) || ((Fi = (ii = e.solar) == null ? void 0 : ii.strings) == null ? void 0 : Fi.length) || 3;
    let o = 0, r = 0, a = !1;
    const s = !!(this._hass && this._hass.states && Object.keys(this._hass.states).length > 5);
    for (let v = 1; v <= n; v++) {
      const D = (Vi = (Oi = e.solar) == null ? void 0 : Oi.strings) == null ? void 0 : Vi[v - 1], z = (D == null ? void 0 : D.voltage_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_voltage` : ""), te = (D == null ? void 0 : D.current_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_current` : ""), P = (D == null ? void 0 : D.power_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_power` : "");
      if (this._getEntityState(P) || this._getEntityState(z) || this._getEntityState(te)) {
        a = !0;
        break;
      }
    }
    const l = s || a;
    for (let v = 1; v <= n; v++) {
      const D = this.shadowRoot.getElementById(`pvVal_${v}`), z = this.shadowRoot.getElementById(`pvVolt_${v}`), te = this.shadowRoot.getElementById(`pvCurr_${v}`), P = (Wi = (zi = e.solar) == null ? void 0 : zi.strings) == null ? void 0 : Wi[v - 1], Te = (P == null ? void 0 : P.voltage_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_voltage` : ""), Z = (P == null ? void 0 : P.current_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_current` : ""), se = (P == null ? void 0 : P.power_entity) || (v <= 3 ? `sensor.deye_12k_inverter_pv${v}_power` : ""), le = this._getEntityState(Te), Qe = this._getEntityState(Z), we = this._getEntityState(se);
      let Ve = 0, ut = 0, Fe = 0;
      we ? Fe = this._formatPower(we).kw : le && Qe ? Fe = le.val * Qe.val / 1e3 : le ? Fe = 0 : Fe = l ? 0 : 4, le ? Ve = le.val : Ve = l ? 0 : 380 + v * 4.5, Qe ? ut = Qe.val : we && Ve > 0 ? ut = Fe * 1e3 / Ve : ut = l ? 0 : 3.12 + v * 0.28, o += Fe, r += ut, D && (D.innerText = `${Fe.toFixed(3)} ${i}`), z && (z.innerText = `${Ve.toFixed(1)} V`), te && (te.innerText = `${ut.toFixed(2)} A`);
      const Ee = this.shadowRoot.getElementById(`pvMetrics_${v}`);
      if (Ee) {
        const ai = ((Gi = e.solar) == null ? void 0 : Gi.show_metrics) !== !1, si = !!(le || Qe || !l || P != null && P.voltage_entity || P != null && P.current_entity || Ve > 0 || ut > 0);
        Ee.style.display = ai && si ? "flex" : "none";
      }
      const lt = (P == null ? void 0 : P.capacity_kw) !== void 0 ? parseFloat(P.capacity_kw) : (P == null ? void 0 : P.installed_power) !== void 0 ? parseFloat(P.installed_power) : l ? 0 : 4, ni = lt > 0 && Fe > 0 ? Math.min(100, Math.round(Fe / lt * 100)) : 0, _i = this.shadowRoot.getElementById(`pvCapVal_${v}`), oi = this.shadowRoot.getElementById(`pvPercent_${v}`), ri = this.shadowRoot.getElementById(`pvCap_${v}`);
      _i && (lt > 0 ? (_i.innerText = lt.toFixed(1).replace(".", ","), oi && (oi.innerText = `(${ni}%)`, oi.style.color = ni >= 70 ? "#34d399" : ni >= 30 ? "#fbbf24" : "#94a3b8"), ri && (ri.style.display = "flex")) : ri && (ri.style.display = "none"));
    }
    const c = this._getEntityState((Hi = e.solar) == null ? void 0 : Hi.total_power_entity);
    let d = 0;
    c ? d = this._formatPower(c).kw : d = o;
    let b = ((qi = e.solar) == null ? void 0 : qi.installed_power) !== void 0 ? parseFloat(e.solar.installed_power) : 0;
    if (isNaN(b) || b <= 0) {
      let v = 0;
      for (let D = 0; D < n; D++) {
        const z = (ji = (Ui = e.solar) == null ? void 0 : Ui.strings) == null ? void 0 : ji[D], te = (z == null ? void 0 : z.capacity_kw) !== void 0 ? parseFloat(z.capacity_kw) : (z == null ? void 0 : z.installed_power) !== void 0 ? parseFloat(z.installed_power) : 0;
        !isNaN(te) && te > 0 && (v += te);
      }
      b = v > 0 ? v : l ? 0 : 12;
    }
    const h = b > 0 ? d / b * 100 : 0, _ = Math.min(100, Math.max(0, h)), f = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${d.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${d.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge.title = this._language === "en" ? `Total PV current: ${r.toFixed(2)} A` : `Сумарний струм СЕС: ${r.toFixed(2)} A`), this._nodes.totalPvPercentBadge && (b > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(_)}%`, this._nodes.totalPvPercentBadge.style.color = _ >= 70 ? "#34d399" : _ >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = _ >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (b > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${_.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = _ >= 70 ? "#34d399" : _ >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${b.toFixed(1).replace(".", ",")} ${f})`)) : r > 0 && ((Yi = e.solar) == null ? void 0 : Yi.show_metrics) !== !1 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${r.toFixed(2)} A`, this._nodes.totalPvCapDetail.style.color = "#34d399"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = this._language === "en" ? "(current)" : "(струм)")) : this._nodes.totalPvSubline.style.display = "none");
    const y = this._getEntityState((Ki = e.solar) == null ? void 0 : Ki.daily_yield_entity), m = y ? y.val : l ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = m.toFixed(1);
    const w = ((Wn = e.solar) == null ? void 0 : Wn.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = w.toFixed(1);
    const p = Math.min(100, Math.round(m / w * 100));
    this._nodes.solarProgressBar.style.width = `${p}%`;
    const u = this._getEntityState((Gn = e.inverter) == null ? void 0 : Gn.power_entity);
    this._nodes.inverterPowerVal && ((Hn = e.inverter) != null && Hn.power_entity && u ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(u, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const g = this._getEntityState((qn = e.inverter) == null ? void 0 : qn.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = g ? g.val.toFixed(2) : "41,20";
    const x = this._getEntityState((Un = e.inverter) == null ? void 0 : Un.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = x ? x.val.toFixed(2) : "38,40";
    const S = this._getEntityState((jn = e.inverter) == null ? void 0 : jn.voltage_entity);
    this._nodes.inverterVolt.innerText = S ? S.val.toFixed(2) : "231,45";
    const $ = this._getEntityState((Yn = e.inverter) == null ? void 0 : Yn.current_entity);
    this._nodes.inverterCurrent.innerText = $ ? $.val.toFixed(2) : "8,60";
    const N = this._getEntityState((Kn = e.inverter) == null ? void 0 : Kn.frequency_entity);
    this._nodes.inverterFreq.innerText = N ? N.val.toFixed(2) : "50,01";
    const A = ((Jn = e.wind) == null ? void 0 : Jn.show) !== !1 || ((Qn = e.aux) == null ? void 0 : Qn.type) === "wind", V = this.shadowRoot.getElementById("windStationContainer"), U = this._nodes.auxNode;
    let Y = 0;
    if (V)
      if (!A)
        V.classList.add("hidden");
      else {
        V.classList.remove("hidden");
        const v = ((Zn = e.wind) == null ? void 0 : Zn.turbine_count) || ((eo = (Xn = e.wind) == null ? void 0 : Xn.turbines) == null ? void 0 : eo.length) || 2, D = ((to = e.wind) == null ? void 0 : to.turbines) || [];
        let z = 0, te = 0, P = !1, Te = !1;
        for (let we = 0; we < v; we++) {
          const Ve = D[we] || {
            power_entity: `sensor.wind_turbine_${we + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((io = e.wind) == null ? void 0 : io.animation_threshold) || 50
          }, ut = this.shadowRoot.getElementById(`turbinePower_${we + 1}`), Fe = this.shadowRoot.getElementById(`turbineStatus_${we + 1}`), Ee = this.shadowRoot.getElementById(`turbineIcon_${we + 1}`), lt = this.shadowRoot.getElementById(`turbineCard_${we + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${we + 1}`);
          const ni = this.shadowRoot.getElementById(`turbineDailyVal_${we + 1}`), _i = this.shadowRoot.getElementById(`turbineMonthlyVal_${we + 1}`), oi = this.shadowRoot.getElementById(`turbineEnergyFooter_${we + 1}`), ri = this._hass ? 0 : we === 0 ? 1.56 : 0.22, ai = this._getEntityState(Ve.power_entity), si = this._formatPower(ai, ri);
          ut && (ut.innerText = si.str), Y += si.kw;
          let mi = si.kw * 1e3;
          ai && ai.unit === "W" && (mi = ai.val);
          const Ci = Ve.animation_threshold ?? ((no = e.wind) == null ? void 0 : no.animation_threshold) ?? 50, Ht = Ee == null ? void 0 : Ee.querySelector(".turbine-rotor"), $i = Ve.rpm_entity || Ve.speed_entity || ((oo = e.wind) == null ? void 0 : oo.rpm_entity) || ((ro = e.wind) == null ? void 0 : ro.speed_entity) || (we === 0 ? "sensor.wind_rpm" : "");
          let ke = $i && ((ao = this._hass) != null && ao.states[$i]) ? this._getEntityState($i) : null;
          if (!ke && we === 0 && ((so = this._hass) != null && so.states["sensor.wind_rpm"]) && (ke = this._getEntityState("sensor.wind_rpm")), mi >= Ci || ke && typeof ke.val == "number" && ke.val > 0) {
            Ht && Ht.classList.add("spinning"), lt && (lt.classList.add("glow-wind"), lt.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const Rt = ((lo = e.wind) == null ? void 0 : lo.max_power) || 3e3, en = ((co = e.wind) == null ? void 0 : co.max_rpm) || 600;
            let Ji = 0;
            ke && typeof ke.val == "number" && ke.val > 0 ? Ji = Math.min(1, Math.max(0, ke.val / en)) : Ji = Math.min(1, Math.max(0, (mi - Ci) / (Rt - Ci)));
            const Ze = (3.2 - Ji * 2.75).toFixed(2);
            Ht && Ht.style.setProperty("--turbine-speed", `${Ze}s`), Fe && (Fe.innerText = this._t("wind_gen"), Fe.style.color = "#67e8f9");
          } else
            Ht && Ht.classList.remove("spinning"), lt && (lt.classList.remove("glow-wind"), lt.style.borderColor = "rgba(255, 255, 255, 0.08)"), Fe && (Fe.innerText = this._t("wind_calm"), Fe.style.color = "#94a3b8");
          const xi = this.shadowRoot.getElementById(`turbineRpmBox_${we + 1}`);
          if (xi)
            if (ke && ke.raw !== "unavailable" && ke.raw !== "unknown" && typeof ke.val == "number" && !isNaN(ke.val)) {
              xi.style.display = "inline";
              const en = ke.unit ? ke.unit : "RPM";
              xi.innerHTML = `<span id="turbineRpmVal_${we + 1}">${Math.round(ke.val)}</span> ${en}`;
            } else
              xi.style.display = "none";
          const ot = this._getEntityState(Ve.daily_energy_entity), Dt = this._getEntityState(Ve.monthly_energy_entity);
          ni && (ni.innerText = ot && typeof ot.val == "number" && !isNaN(ot.val) ? ot.val.toFixed(2) : "0.00"), _i && (_i.innerText = Dt && typeof Dt.val == "number" && !isNaN(Dt.val) ? Dt.val.toFixed(1) : "0.0");
          const Pt = !!(Ve.daily_energy_entity || Ve.monthly_energy_entity);
          oi && (oi.style.display = Pt ? "flex" : "none"), ot && typeof ot.val == "number" && !isNaN(ot.val) && (z += ot.val, P = !0), Dt && typeof Dt.val == "number" && !isNaN(Dt.val) && (te += Dt.val, Te = !0);
        }
        const Z = this.shadowRoot.getElementById("windTotalDailyVal"), se = this.shadowRoot.getElementById("windTotalMonthlyVal"), le = this._getEntityState((po = e.wind) == null ? void 0 : po.daily_energy_entity), Qe = this._getEntityState((fo = e.wind) == null ? void 0 : fo.monthly_energy_entity);
        Z && (le && typeof le.val == "number" && !isNaN(le.val) ? Z.innerText = le.val.toFixed(2) : P ? Z.innerText = z.toFixed(2) : Z.innerText = "0.00"), se && (Qe && typeof Qe.val == "number" && !isNaN(Qe.val) ? se.innerText = Qe.val.toFixed(1) : Te ? se.innerText = te.toFixed(1) : se.innerText = "0.0");
      }
    let k = 0;
    if (U)
      if (((go = e.aux) == null ? void 0 : go.type) === "none" || ((uo = e.aux) == null ? void 0 : uo.type) === "wind")
        U.classList.add("hidden");
      else {
        U.classList.remove("hidden");
        const v = this._getEntityState((ho = e.aux) == null ? void 0 : ho.power_entity), D = this._hass ? 0 : 2, z = this._formatPower(v, D);
        k = z.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = z.str);
        const te = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let P = (bo = e.aux) == null ? void 0 : bo.title;
        ((yo = e.aux) == null ? void 0 : yo.type) === "microinverter" && (!P || P === "Вітрогенератор") ? P = "Мікроінвертор" : (_o = e.aux) != null && _o.type && te[e.aux.type] && (!P || P === "Вітрогенератор") ? P = te[e.aux.type] : P || (P = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = P), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = $e[(mo = e.aux) == null ? void 0 : mo.type] || $e.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((vo = e.aux) == null ? void 0 : vo.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), U.style.borderColor = "rgba(192, 132, 252, 0.45)", U.style.background = "rgba(88, 28, 135, 0.35)", U.classList.remove("glow-wind"), U.classList.add("glow-aux");
      }
    const B = this.shadowRoot.getElementById("nonEssentialNode"), E = !!((xo = e.grid) != null && xo.show_non_essential && ((wo = e.grid) != null && wo.non_essential_power_entity)) || ((ko = e.grid) == null ? void 0 : ko.show_non_essential) !== !1 && !!((So = e.grid) != null && So.non_essential_power_entity);
    let C = 0;
    if (B)
      if (E) {
        B.classList.remove("hidden");
        const v = this._getEntityState(e.grid.non_essential_power_entity), D = this._formatPower(v, 0);
        C = D.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = D.str);
      } else
        B.classList.add("hidden");
    const T = this.shadowRoot.getElementById("carNode"), I = !!((Eo = e.grid) != null && Eo.show_car && ((Co = e.grid) != null && Co.car_power_entity)) || (($o = e.grid) == null ? void 0 : $o.show_car) !== !1 && !!((To = e.grid) != null && To.car_power_entity);
    let L = 0;
    if (T)
      if (I) {
        T.classList.remove("hidden");
        const v = this._getEntityState(e.grid.car_power_entity), D = this._formatPower(v, 0);
        L = D.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = D.str);
      } else
        T.classList.add("hidden");
    let F = 0;
    (((Bo = e.load) == null ? void 0 : Bo.subloads) || []).forEach((v, D) => {
      const z = this.shadowRoot.getElementById(`subloadVal_${D}`), te = this._getEntityState(v.entity), P = this._formatPower(te, 0);
      F += P.kw, z && (z.innerText = P.str);
    });
    const Q = this._getEntityState((Io = e.battery) == null ? void 0 : Io.soc_entity), fe = Q ? Q.val : 80;
    this._nodes.masterBatterySoc.innerText = `${fe.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const ce = this._getEntityState((Ao = e.battery) == null ? void 0 : Ao.power_entity), he = this._getEntityState((No = e.battery) == null ? void 0 : No.current_entity), K = ce ? ce.unit === "W" ? ce.val / 1e3 : ce.val : 0, be = ((Lo = e.battery) == null ? void 0 : Lo.power_sign) || ((Do = e.battery) != null && Do.invert_power ? "standard" : "deye");
    let G = !1, J = !1;
    const de = Math.abs(K);
    de >= 0.02 ? be === "deye" ? K < 0 ? G = !0 : J = !0 : K > 0 ? G = !0 : J = !0 : he && Math.abs(he.val) >= 0.3 && (be === "deye" ? he.val < 0 ? G = !0 : J = !0 : he.val > 0 ? G = !0 : J = !0), this._isCharging = G, this._isDischarging = J;
    const X = G ? de : 0, Ae = J ? de : 0;
    if (this._nodes.masterBatteryFlowHint) {
      let v = this._t("bat_idle"), D = "#94a3b8";
      G ? (v = this._t("bat_dir_charge"), D = "#34d399") : J && (v = this._t("bat_dir_discharge"), D = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${de.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${D}; font-weight: 700; font-size: 14px;">${v}</span>`;
    }
    const Be = this._getEntityState((Po = e.battery) == null ? void 0 : Po.voltage_entity), dt = Be ? Be.val.toFixed(2) : "53.24", rt = he ? he.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${dt.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${rt.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((Ro = e.battery) == null ? void 0 : Ro.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const v = ((Mo = e.battery) == null ? void 0 : Mo.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${v}%`;
    }
    let Ie = this._getEntityState((Fo = e.load) == null ? void 0 : Fo.essential_power_entity);
    !Ie && (!((Oo = e.load) != null && Oo.essential_power_entity) || ((Vo = e.load) == null ? void 0 : Vo.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((zo = e.load) == null ? void 0 : zo.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (Ie = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const ye = Ie && typeof Ie.val == "number" && !isNaN(Ie.val) ? Math.max(0, Ie.unit === "W" ? Ie.val / 1e3 : Ie.val) : 0, yt = !!(Ie && ye > 0);
    let Ne = null, De = !1, _e = this._getEntityState((Wo = e.grid) == null ? void 0 : Wo.power_entity);
    if (!_e) {
      const v = [
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
      for (const D of v) {
        const z = this._getEntityState(D);
        if (z && typeof z.val == "number" && !isNaN(z.val)) {
          _e = z;
          break;
        }
      }
    }
    const Ke = _e ? _e.unit === "W" ? _e.val / 1e3 : _e.val : 0, ge = d + Y + (k > 0 ? k : 0) + Ae, Pe = (((Go = e.grid) == null ? void 0 : Go.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, ae = ((Ho = e.grid) == null ? void 0 : Ho.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90, ee = this._getEntityState((qo = e.grid) == null ? void 0 : qo.status_entity), Re = this._getEntityState(((Uo = e.grid) == null ? void 0 : Uo.voltage_entity) || ((jo = e.inverter) == null ? void 0 : jo.voltage_entity));
    let me = !0;
    if (ee) {
      const v = String(ee.raw || ee.val).toLowerCase();
      (v === "off" || v === "false" || v === "0" || v === "disconnected" || v === "offline" || v === "unavailable" || v === "unknown") && (me = !1);
    } else Re && typeof Re.val == "number" && !isNaN(Re.val) && Re.val < ae && (me = !1);
    const Me = this._getEntityState((Yo = e.grid) == null ? void 0 : Yo.voltage_entity) || this._getEntityState((Ko = e.inverter) == null ? void 0 : Ko.voltage_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_voltage") || this._getEntityState("sensor.esp32_deye_inverter_grid_voltage") || this._getEntityState("sensor.deye_12k_inverter_grid_voltage"), at = this._getEntityState((Jo = e.inverter) == null ? void 0 : Jo.current_entity) || this._getEntityState((Qo = e.grid) == null ? void 0 : Qo.current_entity) || this._getEntityState("sensor.inverter_12_kvt_grid_current") || this._getEntityState("sensor.inverter_12_kvt_current_l1") || this._getEntityState("sensor.esp32_deye_inverter_grid_current") || this._getEntityState("sensor.deye_12k_inverter_grid_current") || this._getEntityState("sensor.grid_current"), _t = Me && typeof Me.val == "number" && !isNaN(Me.val) ? Me.val : 0, mt = at && typeof at.val == "number" && !isNaN(at.val) ? Math.abs(at.val) : 0, st = _t >= ae && mt >= 0.5, et = st ? _t * mt / 1e3 : 0;
    if ((Zo = e.grid) != null && Zo.external_power_entity) {
      const v = this._getEntityState(e.grid.external_power_entity);
      if (v && typeof v.val == "number" && !isNaN(v.val)) {
        const D = Math.abs(v.unit === "W" ? v.val / 1e3 : v.val), z = D < 0.03 && (X > 0.1 && ge < 0.1 || Ke > 0.1), te = X > 0.5 && ge < 0.15 && D < X - 0.2;
        !z && !te && (Ne = v, De = !0);
      }
    }
    if (!Ne)
      if (_e && Ke > 0.05)
        Ne = _e, De = !1;
      else {
        const v = [
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
        ], D = this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power") || this._getEntityState("sensor.solarman_external_power_l1"), z = this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power") || this._getEntityState("sensor.solarman_external_power_l2"), te = this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power") || this._getEntityState("sensor.solarman_external_power_l3");
        let P = null;
        if (D && z && te && !isNaN(D.val) && !isNaN(z.val) && !isNaN(te.val)) {
          const Te = (D.unit === "kW" ? D.val * 1e3 : D.val) + (z.unit === "kW" ? z.val * 1e3 : z.val) + (te.unit === "kW" ? te.val * 1e3 : te.val);
          P = { val: Te, unit: "W", raw: String(Te) };
        }
        if (!P)
          for (const Te of v) {
            const Z = this._getEntityState(Te);
            if (Z && typeof Z.val == "number" && !isNaN(Z.val)) {
              P = Z;
              break;
            }
          }
        if (!P && ((Xo = this._hass) != null && Xo.states)) {
          const Z = Object.keys(this._hass.states).find(
            (se) => /(external_power|external_ct|ct1_power|grid_external_power)/i.test(se) && !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(se)
          );
          if (Z) {
            const se = this._getEntityState(Z);
            se && typeof se.val == "number" && !isNaN(se.val) && (P = se);
          }
        }
        if (P) {
          const Te = Math.abs(P.unit === "kW" ? P.val : P.val / 1e3), Z = Te < 0.03 && (X > 0.1 && ge < 0.1 || Ke > 0.1 && ge < 0.1), se = X > 0.5 && ge < 0.15 && Te < X - 0.2, le = Te < 0.02, Qe = st && Te < 0.05;
          !Z && !se && !le && !Qe && (Ne = P, De = !0);
        }
        Ne || (Ne = _e, De = !1);
      }
    const R = Ne ? Ne.unit === "W" ? Ne.val / 1e3 : Ne.val : 0, pe = ((er = e.grid) == null ? void 0 : er.power_sign) || ((tr = e.grid) != null && tr.invert_power ? "inverted" : "deye"), Se = this._getEntityState((ir = e.grid) == null ? void 0 : ir.export_daily_entity), Oe = Se && typeof Se.val == "number" && Se.val > 0.01, Le = this._getEntityState((nr = e.controls) == null ? void 0 : nr.sell_power_entity), vt = Le && typeof Le.val == "number" && Le.val > 0, ct = ((or = e.grid) == null ? void 0 : or.selling_enabled) !== !1 || Oe || vt, Ot = ge < 0.15, Vt = ge < X + 0.05, ci = Ot || Vt;
    let oe = !1, ve = !1, H = 0;
    if (!me)
      H = 0, oe = !1, ve = !1;
    else {
      if (ci) {
        H = Math.abs(R), H >= Pe ? (ve = !0, oe = !1) : (ve = !1, oe = !1);
        const v = X > 0.1 && ge < 0.1;
        if (st)
          (H < 0.05 || H < X - 0.05 || et > H + 0.3) && (H = et, ve = !0, oe = !1);
        else if (v && (H < 0.05 || H < X - 0.05)) {
          const se = Math.max(ye, F), le = se > 0 ? se : 0.8;
          H = Math.max(H, X + 0.15 + le), ve = !0, oe = !1;
        }
        if (((rr = e.grid) == null ? void 0 : rr.auto_calculate) !== !1 && !De) {
          const se = Math.max(ye, F), le = X + se + C + L;
          se > 0.05 && le > ge + H + 0.1 && (H = H + se, ve = !0);
        }
        const te = (((ar = e.inverter) == null ? void 0 : ar.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3, P = Math.max(ye, F), Te = X + P + C + L + te, Z = Math.max(0, Te - ge);
        Z > 0.05 && H < Z - 0.1 && (H = Z, ve = !0, oe = !1);
      } else {
        if (De)
          H = Math.abs(R), H >= Math.min(Pe, 0.02) && (pe === "deye" ? R < 0 ? oe = !0 : ve = !0 : R > 0 ? oe = !0 : ve = !0);
        else {
          const D = pe === "deye" && R < -Pe, z = pe === "inverted" && R > Pe, te = D || z, P = pe === "deye" && R > Pe, Te = pe === "inverted" && R < -Pe;
          if (P || Te)
            H = Math.abs(R), ve = !0, oe = !1;
          else if (te) {
            const se = Math.abs(R);
            Math.abs(se - ye) < 0.08 && ge < X + ye + se - 0.2 ? (H = 0, oe = !1) : (H = se, oe = !0);
          } else
            H = Math.abs(R);
        }
        if (st && (!oe && !ve || H < 0.05 || oe && et > H + 0.2)) {
          const D = ge > Math.max(F, ye) + 0.1;
          (Oe || vt || D) && ct ? (H = et, oe = !0, ve = !1) : oe || (H = et, ve = !0, oe = !1);
        }
        if (((sr = e.grid) == null ? void 0 : sr.auto_calculate) !== !1 && ve && !De) {
          const D = Math.max(ye, F), z = X + D + C + L;
          D > 0.05 && z > ge + H + 0.1 && (H = H + D);
        }
      }
      if (oe)
        if (!ct)
          oe = !1, H = 0;
        else {
          const v = ((lr = e.load) == null ? void 0 : lr.separate_export) !== !1 && ye >= H ? Math.max(F, ye - H) : Math.max(F, ye), D = ge + Ae, z = Math.max(0, D - X - v - C - L);
          H > z + 0.5 && (H = Math.max(Pe, z), H < Pe && (oe = !1, H = 0));
        }
    }
    const He = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (me ? (this._nodes.gridPowerVal.innerText = `${H.toFixed(3)} ${i}`, oe ? this._nodes.gridPowerVal.style.color = "#34d399" : ve ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (me ? oe ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : ve ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), He && (me ? oe ? (He.classList.add("glow-grid"), He.classList.add("glow-grid-export"), He.style.borderColor = "rgba(52, 211, 153, 0.5)") : (He.classList.add("glow-grid"), He.classList.remove("glow-grid-export"), He.style.borderColor = "rgba(56, 189, 248, 0.4)") : (He.classList.remove("glow-grid"), He.classList.remove("glow-grid-export"), He.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const tt = this._getEntityState((dr = e.grid) == null ? void 0 : dr.import_daily_entity);
    this._nodes.gridImportDaily.innerText = tt ? `${tt.val.toFixed(2)} kWh` : "0.00 kWh";
    const it = this._getEntityState((cr = e.grid) == null ? void 0 : cr.export_daily_entity);
    this._nodes.gridExportDaily.innerText = it ? `${it.val.toFixed(2)} kWh` : "0.00 kWh";
    const pi = (pr = e.battery) == null ? void 0 : pr.charge_daily_entity;
    let Je = this._getEntityState(pi);
    Je || (Je = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge"));
    const fi = Je && typeof Je.val == "number" ? Je.val : 0;
    this._calculateTariffs(tt ? tt.val : 0, it ? it.val : 0, m, fi);
    const gi = ve ? H : 0, xt = oe ? H : 0;
    let Yt = ye;
    ((fr = e.load) == null ? void 0 : fr.separate_export) !== !1 && oe && xt > 0 && ye >= xt - 0.05 && (Yt = Math.max(0, ye - xt));
    const Kt = d + Y + (k > 0 ? k : 0) + gi + Ae, ui = X + xt + C + L, Jt = Math.max(0, Kt - ui), pt = this._getEntityState((gr = e.inverter) == null ? void 0 : gr.self_consumption_entity), Ct = pt && typeof pt.val == "number" && !isNaN(pt.val) ? Math.max(0, pt.unit === "W" ? pt.val / 1e3 : pt.val) : null, Qt = (((ur = e.inverter) == null ? void 0 : ur.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
    let ft = 0, nt = 0;
    if (yt)
      if (ft = Math.max(F, Yt), Ct !== null)
        nt = Ct;
      else {
        const v = Math.max(0, Kt - (X + xt + ft + C + L));
        nt = v > 0 ? v : Qt;
      }
    else
      Ct !== null ? nt = Ct : nt = Math.min(Jt, Qt), ft = Math.max(F, Math.max(0, Jt - nt));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((hr = e.inverter) == null ? void 0 : hr.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", nt < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(nt * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${nt.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${ft.toFixed(3)} ${i}`;
    const gt = this._getEntityState((br = e.load) == null ? void 0 : br.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = gt ? `${gt.val.toFixed(2)} kWh` : "12,40 kWh";
    const $t = this._getEntityState(((yr = e.solar) == null ? void 0 : yr.autarky_entity) || "sensor.deye_inverter_daily_autarky"), Tt = this._getEntityState(((_r = e.solar) == null ? void 0 : _r.self_consumption_entity) || "sensor.deye_inverter_daily_self_consumption");
    let Bt = $t && typeof $t.val == "number" && !isNaN($t.val) ? $t.val : null;
    if (Bt === null) {
      const v = gt && typeof gt.val == "number" && !isNaN(gt.val) ? gt.val : 12.4, D = tt && typeof tt.val == "number" && !isNaN(tt.val) ? tt.val : 0;
      v > 0.05 ? Bt = Math.min(100, Math.max(0, (v - D) / v * 100)) : Bt = 100;
    }
    let It = Tt && typeof Tt.val == "number" && !isNaN(Tt.val) ? Tt.val : null;
    if (It === null) {
      const v = it && typeof it.val == "number" && !isNaN(it.val) ? it.val : 0;
      m > 0.05 ? It = Math.min(100, Math.max(0, (m - v) / m * 100)) : It = 0;
    }
    this._nodes.autarkyVal && (this._nodes.autarkyVal.innerText = `${Math.round(Bt)}%`), this._nodes.selfConsVal && (this._nodes.selfConsVal.innerText = `${Math.round(It)}%`);
    const At = ((mr = e.battery) == null ? void 0 : mr.parallel_batteries) || ((xr = (vr = e.battery) == null ? void 0 : vr.modules) == null ? void 0 : xr.length) || 2;
    let Nt = 0;
    for (let v = 0; v < At; v++) {
      const D = ((kr = (wr = e.battery) == null ? void 0 : wr.modules) == null ? void 0 : kr[v]) || ((Er = (Sr = e.battery) == null ? void 0 : Sr.module_entities) == null ? void 0 : Er[v]) || {}, z = D.capacity_kwh !== void 0 ? parseFloat(D.capacity_kwh) : v === 0 ? 7.88 : v === 1 ? 5.12 : (((Cr = e.battery) == null ? void 0 : Cr.capacity_kwh) || 13) / At;
      Nt += isNaN(z) ? 0 : z;
    }
    Nt <= 0 && (Nt = parseFloat(($r = e.battery) == null ? void 0 : $r.capacity_kwh) || 13);
    const zt = this._getEntityState(((Tr = e.battery) == null ? void 0 : Tr.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), Wt = zt && !isNaN(zt.val) ? zt.val : null, Gt = Wt !== null && Wt <= 40 ? Wt : Nt, Zt = this._getEntityState(((Br = e.battery) == null ? void 0 : Br.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), hi = Zt ? Zt.val : 80, bi = Gt * (hi / 100), ue = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${bi.toFixed(2).replace(".", ",")} ${ue} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${Gt.toFixed(1).replace(".", ",")})</span></span>`);
    const O = this._getEntityState(((Ir = e.battery) == null ? void 0 : Ir.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), q = O ? O.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${q.toFixed(1).replace(".", ",")}`), Je || (Je = this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const j = (Ar = e.battery) == null ? void 0 : Ar.discharge_daily_entity;
    let qe = this._getEntityState(j);
    qe || (qe = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = Je ? `${Je.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = qe ? `${qe.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const wt = [];
    for (let v = 1; v <= At; v++) {
      const D = this.shadowRoot.getElementById(`batPackSoc_${v}`), z = this.shadowRoot.getElementById(`batPackVolt_${v}`), te = this.shadowRoot.getElementById(`batPackCurr_${v}`), P = this.shadowRoot.getElementById(`batPackPower_${v}`), Te = this.shadowRoot.getElementById(`batPackTempVal_${v}`), Z = this.shadowRoot.getElementById(`batPackDelta_${v}`), se = this.shadowRoot.getElementById(`batPackDeltaVal_${v}`), le = this.shadowRoot.getElementById(`batPackStateTag_${v}`), Qe = this.shadowRoot.getElementById(`batPackKwh_${v}`), we = this.shadowRoot.getElementById(`batPackBar1_${v}`), Ve = this.shadowRoot.getElementById(`batPackBar2_${v}`), ut = this.shadowRoot.getElementById(`batPackBar3_${v}`), Fe = this.shadowRoot.getElementById(`batPackBar4_${v}`), Ee = ((Lr = (Nr = e.battery) == null ? void 0 : Nr.modules) == null ? void 0 : Lr[v - 1]) || ((Pr = (Dr = e.battery) == null ? void 0 : Dr.module_entities) == null ? void 0 : Pr[v - 1]) || {}, lt = Ee.soc_entity || Ee.soc || `sensor.bms_rack${v}_soc`, ni = Ee.current_entity || `sensor.bms_rack${v}_current`, _i = Ee.voltage_entity || Ee.volt || `sensor.bms_rack${v}_voltage`, oi = Ee.power_entity || `sensor.bms_rack${v}_power`, ri = Ee.temperature_entity || Ee.temp || `sensor.bms_rack${v}_temperature`, ai = Ee.cell_delta_entity || Ee.delta_entity || `sensor.bms_rack${v}_cell_delta`, si = this._getEntityState(lt), mi = this._getEntityState(ni), Ci = this._getEntityState(_i), Ht = this._getEntityState(oi), $i = this._getEntityState(ri);
      let ke = this._getEntityState(ai);
      if (ke || (ke = this._getEntityState(`sensor.bms_rack${v}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${v}_cell_difference`)), !ke && (Ee.max_cell_voltage_entity || Ee.min_cell_voltage_entity)) {
        const qt = this._getEntityState(Ee.max_cell_voltage_entity), Wr = this._getEntityState(Ee.min_cell_voltage_entity);
        if (qt && Wr) {
          const un = Math.abs(qt.val - Wr.val);
          ke = { val: un < 1 ? Math.round(un * 1e3) : un, unit: "mV" };
        }
      }
      const vi = si ? si.val : v === 1 ? 82 : v === 2 ? 85 : 75, xi = Ci ? Ci.val : v === 1 ? 54.1 : v === 2 ? 54 : 52.4, ot = mi ? mi.val : v === 1 ? 18.4 : v === 2 ? 25.2 : 8.2, Dt = $i ? $i.val : v === 1 ? 36.5 : v === 2 ? 21 : 22.5;
      let Pt = null;
      if (ke) {
        let qt = ke.val;
        qt < 1 && qt > 0 ? Pt = Math.round(qt * 1e3) : Pt = Math.round(qt);
      } else this._hass || (Pt = v === 1 ? 12 : v === 2 ? 8 : 15);
      let Rt = 0;
      Ht ? Rt = Math.abs(this._formatPower(Ht).kw) : Rt = xi * Math.abs(ot) / 1e3;
      const Ji = (Ee.capacity_kwh !== void 0 ? parseFloat(Ee.capacity_kwh) : v === 1 ? 7.88 : v === 2 ? 5.12 : Gt / At) * (vi / 100);
      D && (D.innerText = `${vi.toFixed(0)}%`), z && (z.innerText = `${xi.toFixed(1).replace(".", ",")} V`), te && (te.innerText = `${Math.abs(ot).toFixed(1).replace(".", ",")} A`), P && (P.innerText = `${Rt.toFixed(2).replace(".", ",")} ${i}`), Te && (Te.innerText = `${Dt.toFixed(1).replace(".", ",")}`), se && (Pt !== null && !isNaN(Pt) ? (se.innerText = `${Pt} mV`, Z && (Z.style.display = "inline-flex", Pt <= 25 ? (Z.style.color = "#34d399", Z.style.background = "rgba(52, 211, 153, 0.12)", Z.style.borderColor = "rgba(52, 211, 153, 0.3)") : Pt <= 50 ? (Z.style.color = "#fbbf24", Z.style.background = "rgba(251, 191, 36, 0.12)", Z.style.borderColor = "rgba(251, 191, 36, 0.3)") : (Z.style.color = "#f87171", Z.style.background = "rgba(248, 113, 113, 0.16)", Z.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : Z && (Z.style.display = "none")), Qe && (Qe.innerText = `~${Ji.toFixed(2).replace(".", ",")} ${ue}`);
      let Ze = !1;
      J ? Ze = !1 : G ? Ze = !0 : mi ? Ze = (((Rr = e.battery) == null ? void 0 : Rr.power_sign) || "deye") === "deye" ? ot < 0 : ot > 0 : Ze = ot < 0;
      const wi = this.shadowRoot.getElementById(`batBranchBadge_${v}`);
      wi && (Rt < 0.02 ? (wi.className = "es-bat-branch-badge es-mono idle", wi.innerHTML = `<span>0.00 ${i}</span>`) : Ze ? (wi.className = "es-bat-branch-badge es-mono charge", wi.innerHTML = `<span>${Rt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (wi.className = "es-bat-branch-badge es-mono discharge", wi.innerHTML = `<span>${Rt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const li = this.shadowRoot.getElementById(`batPackCard_${v}`), Vr = li == null ? void 0 : li.querySelector(".es-battery-gauge"), zr = li == null ? void 0 : li.querySelector(".es-battery-gauge-nipple");
      li && (li.style.borderColor = Ze ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), Vr && (Vr.style.borderColor = Ze ? "#10b981" : "#ef4444"), zr && (zr.style.background = Ze ? "#10b981" : "#ef4444"), le && (Ze ? (le.className = "es-bat-state-tag charge", le.innerText = this._t("bat_charge"), le.style.color = "#34d399", le.style.background = "rgba(16, 185, 129, 0.18)", le.style.borderColor = "rgba(16, 185, 129, 0.4)") : (le.className = "es-bat-state-tag discharge", le.innerText = this._t("bat_discharge"), le.style.color = "#f87171", le.style.background = "rgba(239, 68, 68, 0.18)", le.style.borderColor = "rgba(239, 68, 68, 0.4)")), P && (P.style.color = Ze ? "#34d399" : "#f87171"), te && (te.style.color = Ze ? "#38bdf8" : "#f87171");
      const tn = Ze ? "active-green" : "active-red";
      we && Ve && ut && Fe && (we.className = `es-bat-bar ${vi >= 10 ? tn : ""}`, Ve.className = `es-bat-bar ${vi >= 35 ? tn : ""}`, ut.className = `es-bat-bar ${vi >= 65 ? tn : ""}`, Fe.className = `es-bat-bar ${vi >= 85 ? tn : ""}`), wt.push({ kwNum: Rt, isChg: Ze });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      me ? H : 0,
      oe,
      ve,
      d,
      ft,
      de,
      G,
      J,
      L,
      wt,
      C,
      F,
      k
    ), this._updateControlSliders();
    const kt = !me, Ue = ((Mr = this._config) == null ? void 0 : Mr.outages) || {}, Lt = Ue.status_entity && ((Fr = this._getEntityState(Ue.status_entity)) == null ? void 0 : Fr.raw) || "", Xt = Ue.grid_voltage_entity !== void 0 ? Ue.grid_voltage_entity : "sensor.breaker_phase_a_voltage", yi = Xt && ((Or = this._getEntityState(Xt)) == null ? void 0 : Or.raw) || "", ei = `${kt}|${yi}|${Lt}|${Ue.region || ""}|${Ue.group || ""}|${Ue.show !== !1}`;
    ei !== this._lastOutageSignature && (this._lastOutageSignature = ei, this._renderOutageWidgets(kt)), this._update3DStationView(
      d,
      Y,
      !me,
      me,
      oe,
      ve,
      H,
      ft,
      de,
      G,
      J,
      fe,
      F
    );
  }
  _update3DStationView(e, i, n, o, r, a, s, l, c, d, b, h, _) {
    var ee, Re, me, Me, at, _t, mt, st, et, R, pe, Se, Oe, Le, vt, ct, Ot, Vt, ci, oe, ve, H, He, tt, it, pi, Je, fi, gi, xt, Yt, Kt, ui, Jt, pt, Ct, Ei, Qt, ft, nt, gt, $t, Tt, Bt, It, At, Nt, zt, Wt, Gt, Zt, hi, bi, ue, O, q, j, qe, wt, kt, Ue, Lt, Xt, yi, ei, ti, ii, Fi, Oi, Vi, zi, Wi, Gi, Hi, qi, Ui, ji, Yi;
    if (!this.shadowRoot) return;
    const f = this._config || ie, y = this._getEntityState((ee = f.solar) == null ? void 0 : ee.daily_yield_entity), m = y ? `${y.val.toFixed(1)} ${this._t("kwh_unit") || "кВт·год"}` : (me = (Re = this._nodes) == null ? void 0 : Re.dailySolarYield) != null && me.innerText ? `${this._nodes.dailySolarYield.innerText.replace(",", ".")} ${this._t("kwh_unit") || "кВт·год"}` : "11.0 кВт·год", w = ((Me = this.shadowRoot.getElementById("pvVal_1")) == null ? void 0 : Me.innerText) || this._formatPower(this._getEntityState(((mt = (_t = (at = f.solar) == null ? void 0 : at.strings) == null ? void 0 : _t[0]) == null ? void 0 : mt.power_entity) || "sensor.deye_12k_inverter_pv1_power")).formatted, p = ((st = this.shadowRoot.getElementById("pvVolt_1")) == null ? void 0 : st.innerText) || "195.3 V", u = ((et = this.shadowRoot.getElementById("pvCurr_1")) == null ? void 0 : et.innerText) || "0.30 A", g = ((R = this.shadowRoot.getElementById("pvVal_2")) == null ? void 0 : R.innerText) || this._formatPower(this._getEntityState(((Oe = (Se = (pe = f.solar) == null ? void 0 : pe.strings) == null ? void 0 : Se[1]) == null ? void 0 : Oe.power_entity) || "sensor.deye_12k_inverter_pv2_power")).formatted, x = ((Le = this.shadowRoot.getElementById("pvVolt_2")) == null ? void 0 : Le.innerText) || "183.9 V", S = ((vt = this.shadowRoot.getElementById("pvCurr_2")) == null ? void 0 : vt.innerText) || "0.40 A", $ = ((ct = this.shadowRoot.getElementById("pvVal_3")) == null ? void 0 : ct.innerText) || this._formatPower(this._getEntityState(((ci = (Vt = (Ot = f.solar) == null ? void 0 : Ot.strings) == null ? void 0 : Vt[2]) == null ? void 0 : ci.power_entity) || "sensor.deye_12k_inverter_pv3_power")).formatted, N = ((oe = this.shadowRoot.getElementById("pvVolt_3")) == null ? void 0 : oe.innerText) || "205.4 V", A = ((ve = this.shadowRoot.getElementById("pvCurr_3")) == null ? void 0 : ve.innerText) || "0.30 A", V = ((H = this.shadowRoot.getElementById("turbinePower_1")) == null ? void 0 : H.innerText) || this._formatPower(this._getEntityState(((it = (tt = (He = f.wind) == null ? void 0 : He.turbines) == null ? void 0 : tt[0]) == null ? void 0 : it.power_entity) || "sensor.wind_turbine_1_power")).formatted, U = ((pi = this.shadowRoot.getElementById("turbineRpmVal_1")) == null ? void 0 : pi.innerText) || "90 rpm", Y = ((Je = this.shadowRoot.getElementById("turbinePower_2")) == null ? void 0 : Je.innerText) || this._formatPower(this._getEntityState(((xt = (gi = (fi = f.wind) == null ? void 0 : fi.turbines) == null ? void 0 : gi[1]) == null ? void 0 : xt.power_entity) || "sensor.wind_turbine_2_power")).formatted, k = ((Yt = this.shadowRoot.getElementById("turbineStatus_2")) == null ? void 0 : Yt.innerText) || this._t("wind_calm") || "Штиль", B = this._getEntityState(((Kt = f.grid) == null ? void 0 : Kt.voltage_entity) || ((ui = f.inverter) == null ? void 0 : ui.voltage_entity)), E = this._getEntityState(((Jt = f.grid) == null ? void 0 : Jt.current_entity) || ((pt = f.inverter) == null ? void 0 : pt.current_entity)), C = B ? `${B.val.toFixed(1)} V` : (Ei = (Ct = this._nodes) == null ? void 0 : Ct.inverterVolt) != null && Ei.innerText ? `${this._nodes.inverterVolt.innerText} V` : n ? "8.8 V" : "230.0 V", T = E ? `${E.val.toFixed(1)} A` : (ft = (Qt = this._nodes) == null ? void 0 : Qt.inverterCurrent) != null && ft.innerText ? `${this._nodes.inverterCurrent.innerText} A` : "0.0 A", I = this._getEntityState((nt = f.inverter) == null ? void 0 : nt.ac_temperature_entity) || this._getEntityState("sensor.deye_12k_inverter_ac_temperature"), L = this._getEntityState((gt = f.inverter) == null ? void 0 : gt.dc_temperature_entity) || this._getEntityState("sensor.deye_12k_inverter_dc_temperature"), F = I ? `${I.val.toFixed(2)} °C` : (Tt = ($t = this._nodes) == null ? void 0 : $t.inverterAcTemp) != null && Tt.innerText ? `${this._nodes.inverterAcTemp.innerText} °C` : "41.20 °C", Q = L ? `${L.val.toFixed(2)} °C` : (It = (Bt = this._nodes) == null ? void 0 : Bt.inverterDcTemp) != null && It.innerText ? `${this._nodes.inverterDcTemp.innerText} °C` : "38.80 °C", fe = (Nt = (At = this._nodes) == null ? void 0 : At.inverterSelfVal) != null && Nt.innerText ? `⚡ ${this._nodes.inverterSelfVal.innerText}` : "⚡ 214 Вт", ce = this._getEntityState((zt = f.battery) == null ? void 0 : zt.voltage_entity), he = this._getEntityState((Wt = f.battery) == null ? void 0 : Wt.current_entity), K = this._getEntityState(((Gt = f.battery) == null ? void 0 : Gt.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature"), be = ce ? `${ce.val.toFixed(2).replace(".", ",")} V` : ((hi = (Zt = this._nodes) == null ? void 0 : Zt.batVoltVal) == null ? void 0 : hi.innerText) || "52,85 V", G = he ? `${Math.abs(he.val).toFixed(2).replace(".", ",")} A` : (ue = (bi = this._nodes) == null ? void 0 : bi.batCurrentVal) != null && ue.innerText ? this._nodes.batCurrentVal.innerText.replace("-", "") : "2,96 A", J = K ? `${K.val.toFixed(1).replace(".", ",")} °C` : (q = (O = this._nodes) == null ? void 0 : O.batMasterTempVal) != null && q.innerText ? `${this._nodes.batMasterTempVal.innerText} °C` : "25,0 °C", de = ((qe = (j = this._nodes) == null ? void 0 : j.batCapacityVal) == null ? void 0 : qe.innerText) || ((wt = this.shadowRoot.getElementById("batEstTime")) == null ? void 0 : wt.innerText) || "~23,70 кВт·год", xe = ((kt = this.shadowRoot.getElementById("batPackSoc_1")) == null ? void 0 : kt.innerText) || `${Math.round(h)}%`, X = ((Ue = this.shadowRoot.getElementById("batPackPower_1")) == null ? void 0 : Ue.innerText) || `${(c * 0.51).toFixed(2)} кВт`, Ae = ((Lt = this.shadowRoot.getElementById("batPackVolt_1")) == null ? void 0 : Lt.innerText) || be, Be = ((Xt = this.shadowRoot.getElementById("batPackTempVal_1")) == null ? void 0 : Xt.innerText) || "30.5 °C", dt = ((yi = this.shadowRoot.getElementById("batPackDeltaVal_1")) == null ? void 0 : yi.innerText) || "Δ6 мВ", rt = ((ei = this.shadowRoot.getElementById("batPackSoc_2")) == null ? void 0 : ei.innerText) || `${Math.round(h)}%`, Ie = ((ti = this.shadowRoot.getElementById("batPackPower_2")) == null ? void 0 : ti.innerText) || `${(c * 0.49).toFixed(2)} кВт`, ye = ((ii = this.shadowRoot.getElementById("batPackVolt_2")) == null ? void 0 : ii.innerText) || be, yt = ((Fi = this.shadowRoot.getElementById("batPackTempVal_2")) == null ? void 0 : Fi.innerText) || "16.0 °C", Ne = ((Oi = this.shadowRoot.getElementById("batPackDeltaVal_2")) == null ? void 0 : Oi.innerText) || "Δ11 мВ", De = (Vi = this.shadowRoot.getElementById("subloadVal_0")) == null ? void 0 : Vi.innerText;
    let _e = 0;
    if (De) {
      const Ki = parseFloat(De.replace(",", "."));
      _e = isNaN(Ki) ? _ > 0 ? _ : 1.127 : Ki;
    } else
      _e = _ > 0 ? _ : 1.127;
    const Ke = this._getEntityState((Gi = (Wi = (zi = f.load) == null ? void 0 : zi.subloads) == null ? void 0 : Wi[0]) == null ? void 0 : Gi.temperature_entity), ge = this._getEntityState((Hi = f.load) == null ? void 0 : Hi.daily_energy_entity), Pe = ge ? `Спожито за добу: ${ge.val.toFixed(1)} ${this._t("kwh_unit") || "кВт·год"}` : (Ui = (qi = this._nodes) == null ? void 0 : qi.dailyHouseKwh) != null && Ui.innerText ? `Спожито за добу: ${this._nodes.dailyHouseKwh.innerText}` : "Спожито за добу: 21.3 кВт·год", ae = {
      solarPowerKw: e,
      solarPowerStr: this._formatPower(e).formatted,
      solarStatusStr: e > 0.02 ? this._t("solar_yield_today") || "Генерація активна" : this._t("inverter_offline") || "Генерації зараз немає (ніч)",
      solarYieldTodayStr: m,
      pv1: {
        powerStr: w,
        specStr: `${p} · ${u}`
      },
      pv2: {
        powerStr: g,
        specStr: `${x} · ${S}`
      },
      pv3: {
        powerStr: $,
        specStr: `${N} · ${A}`
      },
      windPowerKw: i,
      windPowerStr: this._formatPower(i).formatted,
      windStatusStr: i > 0.01 ? this._t("wind_gen") || "Генерація" : this._t("wind_calm") || "Штиль",
      turb1PowerStr: V,
      turb1RpmStr: U,
      turb2PowerStr: Y,
      turb2StatusStr: k,
      gridPowerKw: n ? 0 : r ? -s : s,
      gridPowerStr: n ? "0.000 кВт" : this._formatPower(s).formatted,
      gridDirectionStr: n ? this._t("grid_dir_off") || "ВИМКНЕНО" : r ? this._t("grid_dir_export") || "← Експорт у мережу" : s > 0.02 ? this._t("grid_dir_import") || "→ Імпорт з мережі" : "Мережа (0 експорт)",
      gridVoltageStr: C,
      gridCurrentStr: T,
      isBlackout: n,
      invStatusStr: n ? this._t("inverter_standby") || "АВТОНОМНИЙ РЕЖИМ (EPS)" : this._t("inverter_working") || "ПРАЦЮЄ (ON-GRID)",
      invLcdPowerStr: this._formatPower(l || s || e).formatted,
      invTempAcStr: F,
      invTempDcStr: Q,
      invSelfStr: fe,
      batPowerStr: this._formatPower(c).formatted,
      batSoc: Math.round(h),
      isDischarging: b,
      isCharging: d,
      batCurrentStr: G,
      batBusStatsStr: `Шина: ${be} · Темп: ${J}`,
      batEstTimeStr: de,
      rack1: {
        socStr: xe,
        powerStr: X,
        voltageStr: Ae,
        tempStr: Be,
        deltaStr: dt
      },
      rack2: {
        socStr: rt,
        powerStr: Ie,
        voltageStr: ye,
        tempStr: yt,
        deltaStr: Ne
      },
      housePowerStr: this._formatPower(l).formatted,
      houseStatusStr: n ? "Живлення від батареї (EPS)" : "Споживання будинку",
      houseDayTotalStr: Pe,
      boilerPowerKw: _e,
      boilerPowerStr: this._formatPower(_e).formatted,
      boilerTempStr: Ke ? `${Ke.val.toFixed(0)} °C` : "65 °C",
      boilerStatusStr: _e > 0.05 ? "Нагрів активний" : "Очікування",
      otherPowerStr: this._formatPower(Math.max(0, l - _e)).formatted,
      outageShow: ((ji = f.outages) == null ? void 0 : ji.show) !== !1,
      outageMini: ((Yi = f.outages) == null ? void 0 : Yi.show) !== !1 ? this._buildOutageMiniPayload(this._getCurrentOutageSummary(n)) : null
    };
    Za(this.shadowRoot, ae, this._t.bind(this));
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
    var e, i, n, o, r, a, s, l, c;
    try {
      const d = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!d) return;
      const b = d.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      const h = this._config || ie, _ = this._scale || 1, f = (E, C = 0.5, T = 0.5) => {
        if (!E) return null;
        const I = E.getBoundingClientRect();
        return {
          x: Math.round((I.left - b.left + I.width * C) / _),
          y: Math.round((I.top - b.top + I.height * T) / _)
        };
      }, y = (E, C, T) => {
        const I = this.shadowRoot.getElementById(E), L = this.shadowRoot.getElementById(C);
        I && I.setAttribute("d", T || ""), L && L.setAttribute("d", T || "");
      }, m = this.shadowRoot.getElementById("gridNode"), w = this.shadowRoot.getElementById("inverterNode"), p = this.shadowRoot.getElementById("essentialNode"), u = this.shadowRoot.getElementById("totalPvPowerBadge"), g = this.shadowRoot.getElementById("masterBatteryHub"), x = this.shadowRoot.getElementById("carNode");
      if (m && w) {
        const E = m.getBoundingClientRect(), C = w.getBoundingClientRect();
        if (E.bottom < C.top + 30) {
          const I = f(m, 0.7, 1), L = f(w, 0.2, 0);
          if (I && L) {
            const F = Math.round((I.y + L.y) / 2), Q = `M ${I.x} ${I.y} C ${I.x} ${F}, ${L.x} ${F}, ${L.x} ${L.y}`;
            y("pathGridInvBase", "pathGridInvFlow", Q);
          }
        } else {
          const I = Math.round((C.top - b.top + C.height * 0.55) / _), L = Math.round((E.right - b.left) / _), F = Math.round((C.left - b.left) / _), Q = Math.round((E.top - b.top + E.height * 0.5) / _);
          let fe = "";
          if (Math.abs(Q - I) <= 8)
            fe = `M ${L} ${I} L ${F} ${I}`;
          else {
            const ce = Math.round(L + 24);
            fe = `M ${L} ${Q} C ${ce} ${Q}, ${ce} ${I}, ${F} ${I}`;
          }
          y("pathGridInvBase", "pathGridInvFlow", fe);
        }
      }
      if (w && p) {
        const E = p.getBoundingClientRect(), C = w.getBoundingClientRect();
        if (E.bottom < C.top + 30) {
          const I = f(w, 0.8, 0), L = f(p, 0.3, 1);
          if (I && L) {
            const F = Math.round((I.y + L.y) / 2), Q = `M ${I.x} ${I.y} C ${I.x} ${F}, ${L.x} ${F}, ${L.x} ${L.y}`;
            y("pathInvLoadBase", "pathInvLoadFlow", Q);
          }
        } else {
          const I = Math.round((C.top - b.top + C.height * 0.55) / _), L = Math.round((C.right - b.left) / _), F = Math.round((E.left - b.left) / _), Q = Math.round((E.top - b.top + E.height * 0.5) / _);
          let fe = "";
          if (Math.abs(Q - I) <= 8)
            fe = `M ${L} ${I} L ${F} ${I}`;
          else {
            const ce = Math.round(F - 24);
            fe = `M ${L} ${I} C ${ce} ${I}, ${ce} ${Q}, ${F} ${Q}`;
          }
          y("pathInvLoadBase", "pathInvLoadFlow", fe);
        }
      }
      if (u && w) {
        const E = f(u, 0.5, 1), C = f(w, 0.5, 0);
        if (E && C) {
          const T = `M ${E.x} ${E.y} L ${C.x} ${C.y}`;
          y("pathSolarInvBase", "pathSolarInvFlow", T);
        }
      }
      if (w && g) {
        const E = f(w, 0.5, 1), C = f(g, 0.5, 0);
        if (E && C) {
          const T = `M ${E.x} ${E.y} L ${C.x} ${C.y}`;
          y("pathInvBatBase", "pathInvBatFlow", T);
        }
      }
      const S = this.shadowRoot.getElementById("nonEssentialNode"), $ = S && !S.classList.contains("hidden") && S.offsetHeight > 0, N = x && !x.classList.contains("hidden") && x.offsetHeight > 0;
      if (m && $) {
        const E = f(m, 0.5, 1), C = f(S, 0.5, 0);
        if (E && C) {
          const T = `M ${E.x} ${E.y} L ${C.x} ${C.y}`;
          y("pathGridNonEssBase", "pathGridNonEssFlow", T);
        }
      } else
        y("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (N) {
        const E = $ ? S : m;
        if (E) {
          const C = f(E, 0.5, 1), T = f(x, 0.5, 0);
          if (C && T) {
            const I = `M ${C.x} ${C.y} L ${T.x} ${T.y}`;
            y("pathNonEssCarBase", "pathNonEssCarFlow", I);
          }
        } else
          y("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        y("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const A = this.shadowRoot.getElementById("subloadsBusContainer");
      if (p && A) {
        const E = f(p, 0.5, 1), C = f(A, 0.5, 0);
        if (E && C) {
          const T = `M ${E.x} ${E.y} L ${C.x} ${C.y}`;
          y("pathLoadSubloadsBase", "pathLoadSubloadsFlow", T);
        }
      } else
        y("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const V = this.shadowRoot.getElementById("auxNode");
      if (w && V && !V.classList.contains("hidden") && V.offsetHeight > 0) {
        const E = f(V, 0.35, 1), C = f(w, 0.9, 0);
        if (E && C) {
          const T = Math.round((E.y + C.y) / 2), I = `M ${E.x} ${E.y} C ${E.x} ${T}, ${C.x} ${T}, ${C.x} ${C.y}`;
          y("pathInvAuxBase", "pathInvAuxFlow", I);
        }
      } else
        y("pathInvAuxBase", "pathInvAuxFlow", "");
      y("pathBatStemBase", "pathBatStemFlow", "");
      const U = this.shadowRoot.getElementById("windStationContainer"), k = ((i = h.wind) == null ? void 0 : i.show) !== !1 || ((n = h.aux) == null ? void 0 : n.type) === "wind" ? ((o = h.wind) == null ? void 0 : o.turbine_count) || ((a = (r = h.wind) == null ? void 0 : r.turbines) == null ? void 0 : a.length) || 2 : 0;
      for (let E = 1; E <= 4; E++)
        if (E <= k && U && !U.classList.contains("hidden")) {
          const C = this.shadowRoot.getElementById(`turbineCard_${E}`);
          if (C && g) {
            const T = f(C, 0.5, 1), I = k === 1 ? 0.5 : 0.28 + (E - 1) / (k - 1) * 0.44, L = f(g, I, 0);
            if (T && L) {
              const F = `M ${T.x} ${T.y} L ${L.x} ${L.y}`;
              y(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, F);
            }
          } else
            y(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
        } else
          y(`pathTurbine${E}Base`, `pathTurbine${E}Flow`, "");
      const B = ((s = h.battery) == null ? void 0 : s.parallel_batteries) || ((c = (l = h.battery) == null ? void 0 : l.modules) == null ? void 0 : c.length) || 2;
      for (let E = 1; E <= 8; E++) {
        const C = this.shadowRoot.getElementById(`batPackCard_${E}`), T = this.shadowRoot.getElementById(`batBranchBadge_${E}`);
        if (E <= B && g && C) {
          const I = f(g, 0.5, 1), L = f(C, 0.5, 0);
          if (I && L) {
            const F = Math.round(I.y + (L.y - I.y) * 0.45);
            let Q = "";
            Math.abs(I.x - L.x) <= 4 ? Q = `M ${I.x} ${I.y} L ${L.x} ${L.y}` : Q = `M ${I.x} ${I.y} C ${I.x} ${F}, ${L.x} ${F}, ${L.x} ${L.y}`, y(`pathBat${E}Base`, `pathBat${E}Flow`, Q), T && (T.style.left = `${L.x}px`, T.style.top = `${F}px`, T.style.display = "flex");
          } else
            y(`pathBat${E}Base`, `pathBat${E}Flow`, ""), T && (T.style.display = "none");
        } else
          y(`pathBat${E}Base`, `pathBat${E}Flow`, ""), T && (T.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, i, n, o, r;
    try {
      const a = this._config || ie, s = this._scale || 1, l = this.shadowRoot.getElementById("solarBusSvg"), c = ((e = a.solar) == null ? void 0 : e.pv_count) || ((n = (i = a.solar) == null ? void 0 : i.strings) == null ? void 0 : n.length) || 3;
      if (l && c > 0) {
        const h = l.getBoundingClientRect(), _ = this.shadowRoot.getElementById("pvPanel_1"), f = this.shadowRoot.getElementById(`pvPanel_${c}`), y = this.shadowRoot.getElementById("solarBusBase"), m = this.shadowRoot.getElementById("solarFlowCollector"), w = this.shadowRoot.getElementById("solarBusStemBase"), p = this.shadowRoot.getElementById("solarBusStemFlow"), u = this.shadowRoot.getElementById("solarBusFeeders");
        if (_ && f && h.width > 0) {
          const g = _.getBoundingClientRect(), x = f.getBoundingClientRect(), S = Math.round((g.left - h.left + g.width / 2) / s), $ = Math.round((x.left - h.left + x.width / 2) / s), N = 13, A = Math.round((S + $) / 2);
          if (y && (y.setAttribute("x1", S), y.setAttribute("y1", N), y.setAttribute("x2", $), y.setAttribute("y2", N)), m && (m.setAttribute("x1", S), m.setAttribute("y1", N), m.setAttribute("x2", $), m.setAttribute("y2", N)), w && (w.setAttribute("x1", A), w.setAttribute("y1", N), w.setAttribute("x2", A), w.setAttribute("y2", 26)), p && (p.setAttribute("x1", A), p.setAttribute("y1", N), p.setAttribute("x2", A), p.setAttribute("y2", 26)), u) {
            let V = "";
            for (let U = 1; U <= c; U++) {
              const Y = this.shadowRoot.getElementById(`pvPanel_${U}`);
              if (Y) {
                const k = Y.getBoundingClientRect(), B = Math.round((k.left - h.left + k.width / 2) / s);
                V += `
                  <line x1="${B}" y1="0" x2="${B}" y2="${N}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${B}" y1="0" x2="${B}" y2="${N}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            u.innerHTML = V;
          }
        }
      }
      const d = this.shadowRoot.getElementById("subloadsBusSvg"), b = ((r = (o = a.load) == null ? void 0 : o.subloads) == null ? void 0 : r.length) || 3;
      if (d && b > 0) {
        const h = d.getBoundingClientRect(), _ = this.shadowRoot.getElementById("subloadCard_0"), f = this.shadowRoot.getElementById(`subloadCard_${b - 1}`), y = this.shadowRoot.getElementById("essentialNode"), m = this.shadowRoot.getElementById("subloadsBusBase"), w = this.shadowRoot.getElementById("subloadsFlowCollector"), p = this.shadowRoot.getElementById("subloadsBusStemBase"), u = this.shadowRoot.getElementById("subloadsBusStemFlow"), g = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (_ && f && h.width > 0) {
          const x = _.getBoundingClientRect(), S = f.getBoundingClientRect(), $ = Math.round((x.left - h.left + x.width / 2) / s), N = Math.round((S.left - h.left + S.width / 2) / s), A = 13;
          let V = Math.round(($ + N) / 2);
          if (y) {
            const k = y.getBoundingClientRect();
            V = Math.round((k.left - h.left + k.width / 2) / s);
          }
          const U = Math.min($, V), Y = Math.max(N, V);
          if (m && (m.setAttribute("x1", U), m.setAttribute("y1", A), m.setAttribute("x2", Y), m.setAttribute("y2", A)), w && (w.setAttribute("x1", U), w.setAttribute("y1", A), w.setAttribute("x2", Y), w.setAttribute("y2", A)), p && (p.setAttribute("x1", V), p.setAttribute("y1", 0), p.setAttribute("x2", V), p.setAttribute("y2", A)), u && (u.setAttribute("x1", V), u.setAttribute("y1", 0), u.setAttribute("x2", V), u.setAttribute("y2", A)), g) {
            let k = "";
            for (let B = 0; B < b; B++) {
              const E = this.shadowRoot.getElementById(`subloadCard_${B}`);
              if (E) {
                const C = E.getBoundingClientRect(), T = Math.round((C.left - h.left + C.width / 2) / s);
                k += `
                  <line x1="${T}" y1="${A}" x2="${T}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${T}" y1="${A}" x2="${T}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            g.innerHTML = k;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, i, n, o, r) {
    if (!e) return;
    if (!r) {
      e.setAttribute("class", `flow-pulse ${i} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const a = n ? "flow-reverse" : "flow-forward", s = n ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${i} ${a}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", o), e.style.animation = `${s} ${o} linear infinite`;
  }
  _updateFlowAnimations(e, i, n, o, r, a, s, l, c, d = [], b = 0, h = 0, _ = 0) {
    var De, _e, Ke, ge, Pe, ae, ee, Re, me, Me, at, _t, mt, st, et;
    const f = this._config || ie, y = ((De = f.animations) == null ? void 0 : De.enabled) !== !1, m = ((_e = f.animations) == null ? void 0 : _e.speed) || 1.2, w = (R, pe = 10) => {
      const Se = Math.abs(R);
      if (Se < 0.05) return "2.5s";
      const Oe = Math.min(1, Se / pe);
      return `${Math.max(0.4, (2.6 - Oe * 1.9) * (m / 1.2)).toFixed(2)}s`;
    }, p = this.shadowRoot.getElementById("pathGridInvFlow"), u = Math.abs(e), g = (((Ke = f.grid) == null ? void 0 : Ke.min_power_threshold) !== void 0 ? f.grid.min_power_threshold : 50) / 1e3, x = this._getEntityState((ge = f.grid) == null ? void 0 : ge.export_daily_entity), S = x && typeof x.val == "number" && x.val > 0.01, $ = this._getEntityState((Pe = f.controls) == null ? void 0 : Pe.sell_power_entity), N = $ && typeof $.val == "number" && $.val > 0, A = ((ae = f.grid) == null ? void 0 : ae.selling_enabled) !== !1 || S || N, V = y && u >= g && (n || i && A), U = i ? "flow-grid exporting" : "flow-grid";
    this._applyFlowAnimation(p, U, i, w(e, 10), V);
    const Y = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(Y, "flow-solar", !1, w(o, 12), y && o >= 0.05);
    const k = this.shadowRoot.getElementById("pathInvLoadFlow"), B = Math.abs(r);
    this._applyFlowAnimation(k, "flow-load", !1, w(r, 10), y && B >= 0.05);
    const E = this.shadowRoot.getElementById("pathInvBatFlow"), C = Math.abs(a), T = y && C >= 0.02 && (s || l), I = s ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(E, I, l, w(a, 8), T);
    const L = this.shadowRoot.getElementById("pathGridNonEssFlow"), F = Math.abs(b);
    this._applyFlowAnimation(L, "flow-grid", !1, w(b, 5), y && F >= 0.05);
    const Q = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), fe = Math.abs(c);
    this._applyFlowAnimation(Q, "flow-car", !1, w(c, 7), y && fe >= 0.05);
    const ce = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), he = Math.abs(h || r);
    this._applyFlowAnimation(ce, "flow-load", !1, w(he, 8), y && he >= 0.05);
    const K = this.shadowRoot.getElementById("pathInvAuxFlow"), be = Math.abs(_);
    this._applyFlowAnimation(K, "flow-aux", !0, w(_, 5), y && be >= 0.05);
    const G = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(G, I, l, w(a, 8), T);
    const J = this.shadowRoot.getElementById("solarFlowCollector"), de = this.shadowRoot.getElementById("solarBusStemFlow");
    if (J)
      if (!y || o < 0.05)
        J.style.opacity = "0.2", J.style.animation = "none", de && (de.style.opacity = "0.2", de.style.animation = "none");
      else {
        const R = w(o, 12);
        J.style.opacity = "1", J.setAttribute("class", "flow-line"), J.style.animation = `esDashflow ${R} linear infinite`, de && (de.style.opacity = "1", de.setAttribute("class", "flow-line"), de.style.animation = `esDashflow ${R} linear infinite`);
      }
    const xe = this.shadowRoot.getElementById("subloadsFlowCollector"), X = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (xe)
      if (!y || he < 0.05)
        xe.style.opacity = "0.2", xe.style.animation = "none", X && (X.style.opacity = "0.2", X.style.animation = "none");
      else {
        const R = w(he, 8);
        xe.style.opacity = "1", xe.setAttribute("class", "flow-line"), xe.style.animation = `esDashflow ${R} linear infinite`, X && (X.style.opacity = "1", X.setAttribute("class", "flow-line"), X.style.animation = `esDashflow ${R} linear infinite`);
      }
    const Ae = this.shadowRoot.getElementById("batteryFlowCollector"), Be = this.shadowRoot.getElementById("batteryBusStemFlow"), dt = this.shadowRoot.getElementById("batteryBusFeeders"), rt = l ? "#f87171" : "#34d399", Ie = l ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (Ae)
      if (Ae.style.stroke = rt, Ae.style.filter = Ie, Be && (Be.style.stroke = rt, Be.style.filter = Ie), !y || !T)
        Ae.style.opacity = "0.2", Ae.style.animation = "none", Be && (Be.style.opacity = "0.2", Be.style.animation = "none");
      else {
        const R = w(a, 8), pe = l ? "esDashflowRev" : "esDashflow";
        Ae.style.opacity = "1", Ae.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), Ae.style.animation = `${pe} ${R} linear infinite`, Be && (Be.style.opacity = "1", Be.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), Be.style.animation = `${pe} ${R} linear infinite`);
      }
    dt && dt.querySelectorAll("line").forEach((R) => {
      if (R.style.stroke = rt, R.style.filter = Ie, !y || !T)
        R.style.opacity = "0.2", R.style.animation = "none";
      else {
        const pe = w(a, 8), Se = l ? "esDashflowRev" : "esDashflow";
        R.style.opacity = "1", R.setAttribute("class", l ? "flow-line-reverse" : "flow-line"), R.style.animation = `${Se} ${pe} linear infinite`;
      }
    });
    for (let R = 1; R <= 8; R++) {
      const pe = this.shadowRoot.getElementById(`pathBat${R}Flow`);
      if (!pe) continue;
      const Se = d[R - 1], Oe = Se ? Se.kwNum : 0, Le = y && (Oe >= 0.02 || T), vt = l;
      this._applyFlowAnimation(pe, I, vt, w(Oe || a, 8), Le);
    }
    for (let R = 0; R < 6; R++) {
      const pe = this.shadowRoot.getElementById(`pathSubload${R}Flow`);
      if (!pe) continue;
      const Se = (Re = (ee = f.load) == null ? void 0 : ee.subloads) == null ? void 0 : Re[R], Oe = Se ? this._getEntityState(Se.entity) : null, Le = Oe ? this._formatPower(Oe, 2).kw : R === 0 ? 2 : R === 1 ? 3 : 4;
      this._applyFlowAnimation(pe, "flow-load", !1, w(Le, 8), y && Le >= 0.05);
    }
    const ye = ((me = f.wind) == null ? void 0 : me.show) !== !1 || ((Me = f.aux) == null ? void 0 : Me.type) === "wind", yt = ye ? ((at = f.wind) == null ? void 0 : at.turbine_count) || ((mt = (_t = f.wind) == null ? void 0 : _t.turbines) == null ? void 0 : mt.length) || 2 : 0, Ne = ((st = f.wind) == null ? void 0 : st.turbines) || [];
    for (let R = 1; R <= 4; R++) {
      const pe = this.shadowRoot.getElementById(`pathTurbine${R}Flow`);
      if (pe)
        if (R <= yt && ye) {
          const Se = Ne[R - 1] || {}, Oe = this._hass ? 0 : R === 1 ? 1.45 : 0.85, Le = this._getEntityState(Se.power_entity || `sensor.wind_turbine_${R}_power`);
          let ct = this._formatPower(Le, Oe).kw * 1e3;
          Le && Le.unit === "W" && (ct = Le.val);
          const Ot = Se.animation_threshold ?? ((et = f.wind) == null ? void 0 : et.animation_threshold) ?? 50, Vt = ct >= Ot;
          this._applyFlowAnimation(pe, "flow-wind", !1, w(ct / 1e3, 3), y && Vt);
        } else
          this._applyFlowAnimation(pe, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", cc);
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", ja);
window.customCards = window.customCards || [];
window.customCards.some((t) => t.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
typeof customElements < "u" && !customElements.get("energy-station-panel") && customElements.define("energy-station-panel", ja);
export {
  ja as EnergyStationPanel
};
