const he = {
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
    show_daily_cost: !0,
    // показувати вартість біля імпорту з мережі
    show_export_income: !0,
    // показувати дохід від експорту (Зелений тариф)
    show_active_badge: !0,
    // показувати бейдж поточного активного тарифу
    show_solar_savings: !0
    // показувати суму заощаджень від сонця
  }
}, oe = 'width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"', se = {
  sun: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  pv_panel: `<svg ${oe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg ${oe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg ${oe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  settings: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg ${oe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  globe: `<svg ${oe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
class Fa extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general", this._isInternalChange = !1, this._debounceTimer = null, this._rendered = !1, this._isDialogExpanded = !1;
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    if (this._config = JSON.parse(JSON.stringify(e || he)), this._isInternalChange) {
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
      const t = document.querySelector("hui-dialog-edit-card") || document.querySelector("ha-dialog-edit-card");
      if (t) return t;
      try {
        const n = document.querySelector("home-assistant");
        if (n != null && n.shadowRoot) {
          const c = n.shadowRoot.querySelector("hui-dialog-edit-card") || n.shadowRoot.querySelector("ha-dialog-edit-card");
          if (c) return c;
          const r = n.shadowRoot.querySelectorAll("*");
          for (const d of r)
            if (d.shadowRoot) {
              const h = d.shadowRoot.querySelector("hui-dialog-edit-card") || d.shadowRoot.querySelector("ha-dialog-edit-card");
              if (h) return h;
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
    let t = this;
    for (; t; ) {
      if (t.tagName && (t.tagName.toLowerCase() === "ha-dialog" || t.tagName.toLowerCase() === "mwc-dialog"))
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
    return typeof document < "u" ? document.querySelector("ha-dialog") || document.querySelector("mwc-dialog") : null;
  }
  _applyExpand(e) {
    var c, r, d;
    this._isDialogExpanded = e;
    const t = this._findHuiDialog(), n = this._findHaDialog(t);
    if (e) {
      if (t) {
        typeof t._enlarge == "function" && !t.large ? t._enlarge() : (t.large = !0, t.setAttribute("large", ""));
        try {
          if (t.shadowRoot) {
            let h = t.shadowRoot.getElementById("energy-station-wide-style");
            h || (h = document.createElement("style"), h.id = "energy-station-wide-style", h.textContent = `
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
              `, t.shadowRoot.appendChild(h));
          }
        } catch {
        }
      }
      if (n) {
        n.style.setProperty("--mdc-dialog-min-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-max-width", "96vw", "important"), n.style.setProperty("--ha-dialog-width", "95vw", "important"), n.style.setProperty("--mdc-dialog-width", "95vw", "important");
        try {
          const h = (c = n.shadowRoot) == null ? void 0 : c.querySelector(".mdc-dialog__surface");
          h && (h.style.setProperty("max-width", "96vw", "important"), h.style.setProperty("width", "95vw", "important"));
        } catch {
        }
      }
    } else {
      if (t) {
        typeof t._enlarge == "function" && t.large ? t._enlarge() : (t.large = !1, t.removeAttribute("large"));
        try {
          const h = (r = t.shadowRoot) == null ? void 0 : r.getElementById("energy-station-wide-style");
          h && h.remove();
        } catch {
        }
      }
      if (n) {
        n.style.removeProperty("--mdc-dialog-min-width"), n.style.removeProperty("--mdc-dialog-max-width"), n.style.removeProperty("--ha-dialog-max-width"), n.style.removeProperty("--ha-dialog-width"), n.style.removeProperty("--mdc-dialog-width");
        try {
          const h = (d = n.shadowRoot) == null ? void 0 : d.querySelector(".mdc-dialog__surface");
          h && (h.style.removeProperty("max-width"), h.style.removeProperty("width"));
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
    const t = this._isDialogExpanded;
    e.innerHTML = t ? "❐ Звичайний розмір" : "⛶ На весь екран", e.title = t ? "Згорнути вікно налаштувань до звичайного розміру" : "Розширити вікно налаштувань на весь екран";
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
  _valueChanged(e, t, n = !1) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const c = e.split(".");
    let r = this._config;
    for (let d = 0; d < c.length - 1; d++)
      r[c[d]] || (r[c[d]] = {}), r = r[c[d]];
    r[c[c.length - 1]] = t, this._debounceTimer && (clearTimeout(this._debounceTimer), this._debounceTimer = null), n ? this._dispatchConfig() : this._debounceTimer = setTimeout(() => {
      this._dispatchConfig();
    }, 140);
  }
  _switchTab(e) {
    this._flushConfig(), this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || he)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    var d, h, u, E, I, m, y, k, p, _, x, g, i, a, o, v, w, V, R, l, T, z, Y, j, J, f, $, B, b, P, G, K, re, le, ke, ce, de, ue, ve, be, Be, Ve, it, yt, we, Ee, at, ye, Ce, ge, He, ot, Ie, Ae, Ne, je, $e, ee, C, M, ne, fe, _e, st, De, nt, bt, Et, ze, rt, Jt, $t, Ge, Pe, St, lt, dt, mt, vt, wt, Bt, qt, Ht, Ct, It, jt, Gt, ct, Ot, pt, Tt, Pt, Mt, Nt, Rt, Lt;
    if (!this._config) return;
    this._rendered = !0;
    const e = this._config, t = (d = this.shadowRoot) == null ? void 0 : d.activeElement;
    let n = null, c = null, r = null;
    if (t && (t.id ? n = `#${t.id}` : ((h = t.dataset) == null ? void 0 : h.idx) !== void 0 && t.className && (n = `.${t.className.trim().split(/\s+/)[0]}[data-idx="${t.dataset.idx}"]`), "selectionStart" in t && "selectionEnd" in t && (c = t.selectionStart, r = t.selectionEnd)), this.shadowRoot.innerHTML = `
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
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((u = e.animations) == null ? void 0 : u.speed) || 1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((E = e.animations) == null ? void 0 : E.speed) || 1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings !== !1 ? "checked" : ""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((I = e.animations) == null ? void 0 : I.enabled) !== !1 ? "checked" : ""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((m = e.controls) == null ? void 0 : m.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((y = e.controls) == null ? void 0 : y.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((k = e.controls) == null ? void 0 : k.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((p = e.solar) == null ? void 0 : p.pv_count) || 3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((_ = e.solar) == null ? void 0 : _.pv_count) || 3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((x = e.solar) == null ? void 0 : x.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((g = e.solar) == null ? void 0 : g.daily_yield_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((i = e.solar) == null ? void 0 : i.target_daily_yield) || 55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((a = e.solar) == null ? void 0 : a.installed_power) !== void 0 ? e.solar.installed_power : 12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((o = e.solar) == null ? void 0 : o.show_metrics) !== !1 ? "checked" : ""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((v = e.solar) == null ? void 0 : v.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((w = e.solar) == null ? void 0 : w.pv_count) || 3 }).map((te, N) => {
      var Ke, Ue;
      const L = N + 1, A = ((Ue = (Ke = e.solar) == null ? void 0 : Ke.strings) == null ? void 0 : Ue[N]) || {}, Me = `sensor.deye_12k_inverter_pv${L}_voltage`, Oe = `sensor.deye_12k_inverter_pv${L}_current`, Ye = `sensor.deye_12k_inverter_pv${L}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${L} (Стрінг ${L})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${N}" value="${A.name || `PV ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${L} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${N}" value="${A.voltage_entity !== void 0 ? A.voltage_entity : Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${L} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${N}" value="${A.current_entity !== void 0 ? A.current_entity : Oe}" placeholder="${Oe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${L} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${N}" value="${A.capacity_kw !== void 0 ? A.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${L} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${N}" value="${A.power_entity !== void 0 ? A.power_entity : Ye}" placeholder="${Ye} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${((V = e.inverter) == null ? void 0 : V.model_name) || "DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((R = e.inverter) == null ? void 0 : R.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((l = e.inverter) == null ? void 0 : l.show_self_consumption) !== !1 ? "checked" : ""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((T = e.inverter) == null ? void 0 : T.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((z = e.inverter) == null ? void 0 : z.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((Y = e.inverter) == null ? void 0 : Y.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((j = e.inverter) == null ? void 0 : j.ac_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((J = e.inverter) == null ? void 0 : J.dc_temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((f = e.inverter) == null ? void 0 : f.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${(($ = e.inverter) == null ? void 0 : $.current_entity) || ""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((B = e.inverter) == null ? void 0 : B.frequency_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((b = e.aux) == null ? void 0 : b.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((P = e.aux) == null ? void 0 : P.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((G = e.aux) == null ? void 0 : G.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((K = e.aux) == null ? void 0 : K.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((re = e.aux) == null ? void 0 : re.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((le = e.aux) == null ? void 0 : le.type) === "microinverter" && (!((ke = e.aux) != null && ke.title) || ((ce = e.aux) == null ? void 0 : ce.title) === "Вітрогенератор") ? "Мікроінвертор" : ((de = e.aux) == null ? void 0 : de.title) || (((ue = e.aux) == null ? void 0 : ue.type) === "generator" ? "Генератор" : ((ve = e.aux) == null ? void 0 : ve.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((be = e.aux) == null ? void 0 : be.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((Be = e.wind) == null ? void 0 : Be.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((Ve = e.wind) == null ? void 0 : Ve.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((it = e.wind) == null ? void 0 : it.animation_threshold) || ((yt = e.aux) == null ? void 0 : yt.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((we = e.wind) == null ? void 0 : we.animation_threshold) || ((Ee = e.aux) == null ? void 0 : Ee.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((at = e.wind) == null ? void 0 : at.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
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
            ${Array.from({ length: ((Ce = e.wind) == null ? void 0 : Ce.turbine_count) || 2 }).map((te, N) => {
      var A, Me;
      const L = ((Me = (A = e.wind) == null ? void 0 : A.turbines) == null ? void 0 : Me[N]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${N}" value="${L.name || `Вітряк ${N + 1}`}" placeholder="Назва (напр. Вітряк ${N + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${N}" value="${L.power_entity || `sensor.wind_turbine_${N + 1}_power`}" placeholder="sensor.wind_turbine_${N + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${N}" value="${L.rpm_entity || L.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${N}" value="${L.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${N + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${N}" value="${L.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${N + 1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((ge = e.battery) == null ? void 0 : ge.soc_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((He = e.battery) == null ? void 0 : He.power_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((ot = e.battery) == null ? void 0 : ot.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ie = e.battery) == null ? void 0 : Ie.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Ae = e.battery) == null ? void 0 : Ae.capacity_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Ne = e.battery) == null ? void 0 : Ne.voltage_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((je = e.battery) == null ? void 0 : je.current_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${(($e = e.battery) == null ? void 0 : $e.temperature_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((ee = e.battery) == null ? void 0 : ee.cell_delta_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((C = e.battery) == null ? void 0 : C.charge_daily_entity) || ""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((M = e.battery) == null ? void 0 : M.discharge_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((ne = e.battery) == null ? void 0 : ne.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((fe = e.battery) == null ? void 0 : fe.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((_e = e.battery) == null ? void 0 : _e.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((st = e.battery) == null ? void 0 : st.parallel_batteries) || 2 }).map((te, N) => {
      var Vt, At, Dt, zt;
      const L = N + 1, A = ((At = (Vt = e.battery) == null ? void 0 : Vt.modules) == null ? void 0 : At[N]) || ((zt = (Dt = e.battery) == null ? void 0 : Dt.module_entities) == null ? void 0 : zt[N]) || {}, Me = `sensor.bms_rack${L}_soc`, Oe = `sensor.bms_rack${L}_current`, Ye = `sensor.bms_rack${L}_voltage`, Ke = `sensor.bms_rack${L}_power`, Ue = `sensor.bms_rack${L}_temperature`, Ft = `sensor.bms_rack${L}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${L} (Модуль ${L})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${N}" value="${A.name || `Батарея ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${L} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${N}" value="${A.soc_entity !== void 0 ? A.soc_entity : A.soc !== void 0 ? A.soc : Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${L} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${N}" value="${A.current_entity !== void 0 ? A.current_entity : Oe}" placeholder="${Oe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${L} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${N}" value="${A.voltage_entity !== void 0 ? A.voltage_entity : A.volt !== void 0 ? A.volt : Ye}" placeholder="${Ye}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${L} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${N}" value="${A.temperature_entity !== void 0 ? A.temperature_entity : A.temp !== void 0 ? A.temp : Ue}" placeholder="${Ue}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${L} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${N}" value="${A.capacity_kwh !== void 0 ? A.capacity_kwh : L === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${L} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${N}" value="${A.cell_delta_entity !== void 0 ? A.cell_delta_entity : A.delta !== void 0 ? A.delta : Ft}" placeholder="${Ft}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${L} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${N}" value="${A.power_entity !== void 0 ? A.power_entity : Ke}" placeholder="${Ke} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(De = e.grid) != null && De.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((nt = e.grid) == null ? void 0 : nt.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((bt = e.grid) == null ? void 0 : bt.external_power_entity) || ""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Et = e.grid) == null ? void 0 : Et.auto_calculate) !== !1 ? "checked" : ""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((ze = e.grid) == null ? void 0 : ze.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((rt = e.grid) == null ? void 0 : rt.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Jt = e.grid) == null ? void 0 : Jt.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${(($t = e.grid) == null ? void 0 : $t.voltage_entity) || ""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((Ge = e.grid) == null ? void 0 : Ge.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Pe = e.grid) == null ? void 0 : Pe.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((St = e.grid) == null ? void 0 : St.import_daily_entity) || ""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((lt = e.grid) == null ? void 0 : lt.export_daily_entity) || ""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((dt = e.grid) == null ? void 0 : dt.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((mt = e.grid) == null ? void 0 : mt.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((vt = e.load) == null ? void 0 : vt.auto_calculate) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((wt = e.load) == null ? void 0 : wt.separate_export) !== !1 ? "checked" : ""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((Bt = e.load) == null ? void 0 : Bt.essential_power_entity) || ""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((qt = e.load) == null ? void 0 : qt.daily_house_entity) || ""}">
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

          ${(((Ht = e.load) == null ? void 0 : Ht.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Ct = e.load) == null ? void 0 : Ct.subloads) || []).map((te, N) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${N}" value="${te.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${N}" style="width: 140px;">
                  <option value="boiler" ${te.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${te.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${te.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${te.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${te.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${te.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${te.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${N}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${N}" value="${te.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((It = e.tariffs) == null ? void 0 : It.enabled) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((jt = e.tariffs) == null ? void 0 : jt.currency) || "грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Gt = e.tariffs) == null ? void 0 : Gt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((ct = e.tariffs) == null ? void 0 : ct.day_rate) ?? 4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Ot = e.tariffs) == null ? void 0 : Ot.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((pt = e.tariffs) == null ? void 0 : pt.night_rate) ?? 2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Tt = e.tariffs) == null ? void 0 : Tt.currency) || "грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Pt = e.tariffs) == null ? void 0 : Pt.export_rate) ?? 5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (te, N) => {
      var L;
      return `<option value="${N}" ${(((L = e.tariffs) == null ? void 0 : L.night_start_hour) ?? 23) === N ? "selected" : ""}>${String(N).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (te, N) => {
      var L;
      return `<option value="${N}" ${(((L = e.tariffs) == null ? void 0 : L.night_end_hour) ?? 7) === N ? "selected" : ""}>${String(N).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 10px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі на нічну (з 23:00 до 07:00) та денну зону за годинником або з історії Home Assistant.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="fields-grid">
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowDailyCost" ${((Mt = e.tariffs) == null ? void 0 : Mt.show_daily_cost) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Nt = e.tariffs) == null ? void 0 : Nt.show_export_income) !== !1 ? "checked" : ""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Rt = e.tariffs) == null ? void 0 : Rt.show_active_badge) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((Lt = e.tariffs) == null ? void 0 : Lt.show_solar_savings) !== !1 ? "checked" : ""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `, this._bindEvents(), this._updateExpandBtn(), n) {
      const te = this.shadowRoot.querySelector(n);
      if (te && (te.focus(), c !== null && r !== null && "setSelectionRange" in te))
        try {
          te.setSelectionRange(c, r);
        } catch {
        }
    }
  }
  _bindEvents() {
    var d, h, u, E, I, m, y, k, p, _, x, g;
    const e = this.shadowRoot;
    (d = e.getElementById("btnToggleExpand")) == null || d.addEventListener("click", () => {
      this._applyExpand(!this._isDialogExpanded);
    }), e.querySelectorAll(".tab-btn").forEach((i) => {
      i.addEventListener("click", (a) => {
        this._switchTab(a.target.dataset.tab);
      });
    }), (h = e.getElementById("btnPresetEsp")) == null || h.addEventListener("click", () => this._applyPreset("deye_esphome")), (u = e.getElementById("btnPresetSolarman")) == null || u.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const t = (i, a) => {
      const o = e.getElementById(i);
      o && (o.addEventListener("input", (v) => this._valueChanged(a, v.target.value, !1)), o.addEventListener("change", (v) => this._valueChanged(a, v.target.value, !0)), o.addEventListener("blur", () => this._flushConfig()));
    }, n = (i, a) => {
      const o = e.getElementById(i);
      o && o.addEventListener("change", (v) => this._valueChanged(a, v.target.checked, !0));
    }, c = (i, a, o, v = "") => {
      const w = e.getElementById(i);
      w && (w.addEventListener("input", (V) => {
        const R = parseFloat(V.target.value);
        if (o) {
          const l = e.getElementById(o);
          l && (l.innerText = `${R}${v}`);
        }
        this._valueChanged(a, isNaN(R) ? 0 : R, !1);
      }), w.addEventListener("change", (V) => {
        const R = parseFloat(V.target.value);
        this._valueChanged(a, isNaN(R) ? 0 : R, !0);
      }), w.addEventListener("blur", () => this._flushConfig()));
    };
    t("title", "title"), t("themeMode", "theme_mode"), t("cardLanguage", "language"), (E = e.getElementById("cardScale")) == null || E.addEventListener("input", (i) => {
      const a = parseFloat(i.target.value), o = e.getElementById("cardScaleVal");
      o && (o.innerText = `${Math.round(a * 100)}%`), this._valueChanged("card_scale", a);
    }), (I = e.getElementById("cardScale")) == null || I.addEventListener("change", () => this._flushConfig()), t("cardMaxWidth", "max_width"), n("showQuickSettings", "show_quick_settings"), t("ctrlSolarCharge", "controls.solar_charge_entity"), t("ctrlSellPower", "controls.sell_power_entity"), t("ctrlGridCharge", "controls.grid_charge_entity"), n("animEnabled", "animations.enabled"), c("animSpeed", "animations.speed", "animSpeedVal", "s"), (m = e.getElementById("solarPvCount")) == null || m.addEventListener("input", (i) => {
      const a = parseInt(i.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = a, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < a; ) {
        const o = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${o}`,
          name: `PV ${o}`,
          capacity_kw: 4,
          voltage_entity: `sensor.deye_12k_inverter_pv${o}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${o}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${o}_power`
        });
      }
      this._valueChanged("solar.pv_count", a, !0), this._valueChanged("solar.strings", this._config.solar.strings, !0), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].name = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].voltage_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].current_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-power-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].power_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".pv-str-cap-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].capacity_kw = parseFloat(a.target.value) || 0, this._valueChanged("solar.strings", this._config.solar.strings);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), t("solarTotalPower", "solar.total_power_entity"), t("solarDailyYield", "solar.daily_yield_entity"), c("solarTargetDaily", "solar.target_daily_yield"), c("solarInstalledPower", "solar.installed_power"), n("solarShowMetrics", "solar.show_metrics"), t("invModel", "inverter.model_name"), t("invPower", "inverter.power_entity"), n("invShowSelfConsumption", "inverter.show_self_consumption"), t("invSelfConsumptionEntity", "inverter.self_consumption_entity"), c("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), t("invTempAc", "inverter.ac_temperature_entity"), t("invTempDc", "inverter.dc_temperature_entity"), t("invVolt", "inverter.voltage_entity"), t("invCurrent", "inverter.current_entity"), t("invFreq", "inverter.frequency_entity"), (y = e.getElementById("auxType")) == null || y.addEventListener("change", (i) => {
      const a = i.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = a;
      const v = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[a] || "Мікроінвертор";
      this._config.aux.title = v;
      const w = e.getElementById("auxTitle");
      w && (w.value = v), this._valueChanged("aux.type", a, !0), this._valueChanged("aux.title", v, !0);
    }), t("auxTitle", "aux.title"), t("auxPower", "aux.power_entity"), (k = e.getElementById("windTurbineCount")) == null || k.addEventListener("input", (i) => {
      const a = parseInt(i.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = a, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < a; ) {
        const o = this._config.wind.turbines.length + 1;
        this._config.wind.turbines.push({
          id: `turbine_${o}`,
          name: `Вітряк ${o}`,
          power_entity: `sensor.wind_turbine_${o}_power`,
          speed_entity: `sensor.wind_turbine_${o}_speed`,
          daily_energy_entity: "",
          monthly_energy_entity: "",
          animation_threshold: this._config.wind.animation_threshold || 50
        });
      }
      this._valueChanged("wind.turbine_count", a, !0), this._valueChanged("wind.turbines", this._config.wind.turbines, !0), this.render();
    }), c("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (p = e.getElementById("windThreshold")) == null || p.addEventListener("input", (i) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(i.target.value));
    }), t("windDailyEnergy", "wind.daily_energy_entity"), t("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].name = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-power-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].power_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-speed-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].rpm_entity = a.target.value, this._config.wind.turbines[o].speed_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-daily-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].daily_energy_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].monthly_energy_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), t("batSoc", "battery.soc_entity"), t("batPower", "battery.power_entity"), t("batPowerSign", "battery.power_sign"), t("batVolt", "battery.voltage_entity"), t("batCurrent", "battery.current_entity"), t("batTemp", "battery.temperature_entity"), t("batDelta", "battery.cell_delta_entity"), t("batCapacity", "battery.capacity_entity"), t("batChargeDaily", "battery.charge_daily_entity"), t("batDischargeDaily", "battery.discharge_daily_entity"), (_ = e.getElementById("batParallelCount")) == null || _.addEventListener("input", (i) => {
      const a = parseInt(i.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = a, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < a; ) {
        const o = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${o}`,
          name: `Батарея ${o}`,
          soc_entity: `sensor.bms_rack${o}_soc`,
          current_entity: `sensor.bms_rack${o}_current`,
          voltage_entity: `sensor.bms_rack${o}_voltage`,
          power_entity: `sensor.bms_rack${o}_power`,
          temperature_entity: `sensor.bms_rack${o}_temperature`,
          cell_delta_entity: `sensor.bms_rack${o}_cell_delta`
        });
      }
      this._valueChanged("battery.parallel_batteries", a, !0), this._valueChanged("battery.modules", this._config.battery.modules, !0), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].name = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].soc_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].current_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].voltage_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].temperature_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-delta-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].cell_delta_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].power_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((i) => {
      i.addEventListener("input", (a) => {
        const o = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].capacity_kwh = parseFloat(a.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      }), i.addEventListener("blur", () => this._flushConfig());
    }), n("gridSellingEnabled", "grid.selling_enabled"), n("gridAutoCalculate", "grid.auto_calculate"), t("gridPower", "grid.power_entity"), t("gridExternalPower", "grid.external_power_entity"), t("gridVoltage", "grid.voltage_entity"), t("gridStatus", "grid.status_entity"), c("gridVoltageThreshold", "grid.voltage_threshold"), t("gridPowerSign", "grid.power_sign"), c("gridMinThreshold", "grid.min_power_threshold"), t("gridImportDaily", "grid.import_daily_entity"), t("gridExportDaily", "grid.export_daily_entity"), t("gridNonEssential", "grid.non_essential_power_entity"), t("gridCarPower", "grid.car_power_entity"), n("loadAutoCalculate", "load.auto_calculate"), n("loadSeparateExport", "load.separate_export"), t("loadEssential", "load.essential_power_entity"), t("loadDailyHouse", "load.daily_house_entity");
    const r = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const i = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${i}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render();
    };
    (x = e.getElementById("btnAddSubload")) == null || x.addEventListener("click", r), (g = e.getElementById("btnAddSubloadBottom")) == null || g.addEventListener("click", r), e.querySelectorAll(".btn-del-subload").forEach((i) => {
      i.addEventListener("click", (a) => {
        var w;
        const o = a.currentTarget || a.target.closest(".btn-del-subload"), v = parseInt(o.dataset.idx);
        (w = this._config.load) != null && w.subloads && (this._config.load.subloads.splice(v, 1), this._valueChanged("load.subloads", this._config.load.subloads, !0), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((i) => {
      i.addEventListener("input", (a) => {
        var v, w;
        const o = parseInt(a.target.dataset.idx);
        (w = (v = this._config.load) == null ? void 0 : v.subloads) != null && w[o] && (this._config.load.subloads[o].name = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), i.addEventListener("blur", () => this._flushConfig());
    }), e.querySelectorAll(".subload-icon").forEach((i) => {
      i.addEventListener("change", (a) => {
        var v, w;
        const o = parseInt(a.target.dataset.idx);
        (w = (v = this._config.load) == null ? void 0 : v.subloads) != null && w[o] && (this._config.load.subloads[o].icon = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads, !0));
      });
    }), e.querySelectorAll(".subload-entity").forEach((i) => {
      i.addEventListener("input", (a) => {
        var v, w;
        const o = parseInt(a.target.dataset.idx);
        (w = (v = this._config.load) == null ? void 0 : v.subloads) != null && w[o] && (this._config.load.subloads[o].entity = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      }), i.addEventListener("blur", () => this._flushConfig());
    }), n("tariffsEnabled", "tariffs.enabled"), t("tariffCurrency", "tariffs.currency"), c("tariffDayRate", "tariffs.day_rate"), c("tariffNightRate", "tariffs.night_rate"), c("tariffExportRate", "tariffs.export_rate"), c("tariffNightStart", "tariffs.night_start_hour"), c("tariffNightEnd", "tariffs.night_end_hour"), n("tariffShowDailyCost", "tariffs.show_daily_cost"), n("tariffShowExportIncome", "tariffs.show_export_income"), n("tariffShowActiveBadge", "tariffs.show_active_badge"), n("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", Fa);
const La = {
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
    bat_delta: "Cell Delta",
    bat_remaining: "Remaining",
    edit_card: "Edit",
    kwh_unit: "kWh"
  }
};
class Va extends HTMLElement {
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
    var n, c;
    let e = this, t = null;
    for (; e; ) {
      if (e.tagName && (e.tagName.toLowerCase() === "hui-card-options" || e.tagName.toLowerCase() === "hui-card-edit-mode")) {
        t = e;
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
    if (!t && typeof document < "u") {
      const r = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
      for (const d of r)
        if (d.contains(this) || (n = d.shadowRoot) != null && n.contains(this) || r.length === 1) {
          t = d;
          break;
        }
    }
    if (t) {
      if (typeof t._editCard == "function") {
        t._editCard();
        return;
      }
      const r = ((c = t.shadowRoot) == null ? void 0 : c.querySelector("mwc-button, ha-button, button")) || t.querySelector("mwc-button, ha-button, button");
      if (r) {
        r.click();
        return;
      }
      if (t.path !== void 0) {
        const d = new CustomEvent("ll-edit-card", {
          bubbles: !0,
          composed: !0,
          detail: { path: t.path }
        });
        t.dispatchEvent(d);
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
        var h, u;
        const d = document.querySelectorAll("hui-card-options, hui-card-edit-mode");
        for (const E of d)
          if (E.contains(this) || (h = E.shadowRoot) != null && h.contains(this) || d.length === 1) {
            if (typeof E._editCard == "function") {
              E._editCard();
              return;
            }
            const I = ((u = E.shadowRoot) == null ? void 0 : u.querySelector("mwc-button, ha-button, button")) || E.querySelector("mwc-button, ha-button, button");
            if (I) {
              I.click();
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
    return JSON.parse(JSON.stringify(he));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const t = JSON.parse(JSON.stringify(e)), n = JSON.parse(JSON.stringify(he));
    this._config = this._deepMerge(n, t);
    const c = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = c || this._config.theme_mode || "dark";
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = r || this._config.language || "uk";
    const d = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = d ? parseFloat(d) : this._config.card_scale || this._config.scale || 1, this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var r, d;
    let t = typeof e == "number" ? e : this._scale + (e || 0.1);
    t = Math.max(0.7, Math.min(2, Math.round(t * 100) / 100)), this._scale = t, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", t.toString());
    const n = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".energy-station-container");
    n && (n.style.setProperty("--es-card-scale", t.toString()), n.style.zoom = t.toString());
    const c = (d = this.shadowRoot) == null ? void 0 : d.getElementById("headerZoomVal");
    c && (c.innerText = `${Math.round(t * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, t) {
    const n = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!t || typeof t != "object") return n;
    for (const c of Object.keys(t)) {
      const r = t[c], d = e ? e[c] : void 0;
      r && typeof r == "object" && !Array.isArray(r) ? n[c] = this._deepMerge(d || {}, r) : n[c] = r;
    }
    return n;
  }
  _getEntityState(e) {
    var h;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const t = this._hass.states[e], c = String(t.state).trim().replace(",", "."), r = parseFloat(c), d = ((h = t.attributes) == null ? void 0 : h.unit_of_measurement) || "";
    return {
      raw: t.state,
      val: isNaN(r) ? 0 : r,
      unit: d,
      attributes: t.attributes
    };
  }
  _t(e) {
    var n, c;
    const t = this._language || "uk";
    return ((n = La[t]) == null ? void 0 : n[e]) || ((c = La.uk) == null ? void 0 : c[e]) || e;
  }
  _toggleTheme(e) {
    const t = e || (this._themeMode === "light" ? "dark" : "light");
    this._themeMode = t;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_theme", t);
    } catch {
    }
    this._applyTheme();
  }
  _toggleLanguage(e) {
    const t = e || (this._language === "en" ? "uk" : "en");
    this._language = t;
    try {
      typeof localStorage < "u" && localStorage.setItem("energy_station_lang", t);
    } catch {
    }
    this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _applyTheme() {
    var d;
    const e = (d = this.shadowRoot) == null ? void 0 : d.querySelector(".energy-station-container");
    if (!e) return;
    const t = this._themeMode === "light";
    e.classList.toggle("theme-light", t);
    const n = this.shadowRoot.getElementById("headerThemeToggle");
    n && (n.innerHTML = t ? "☀️" : "🌙", n.setAttribute("title", t ? this._t("theme_dark") : this._t("theme_light")));
    const c = this.shadowRoot.getElementById("btnThemeDark"), r = this.shadowRoot.getElementById("btnThemeLight");
    c && r && (c.classList.toggle("active", !t), r.classList.toggle("active", t));
  }
  _formatPower(e, t = 0) {
    const n = this._language === "en" ? "kW" : "кВт";
    if (!e) return { num: t.toFixed(3), kw: t, str: `${t.toFixed(3)} ${n}` };
    let c = e.val;
    return e.unit === "W" && (c = c / 1e3), {
      num: c.toFixed(3),
      kw: c,
      str: `${c.toFixed(3)} ${n}`
    };
  }
  _fireMoreInfo(e) {
    if (!e) return;
    const t = new CustomEvent("hass-more-info", {
      detail: { entityId: e },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  _renderCardSkeleton() {
    var u, E, I, m, y, k, p, _, x, g, i, a, o, v, w, V, R, l;
    const e = this._config || he;
    this._initialized = !0;
    const t = e.appearance || he.appearance || {}, n = {
      Inter: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "JetBrains Mono": "'JetBrains Mono', monospace",
      Roboto: "'Roboto', sans-serif",
      Orbitron: "'Orbitron', sans-serif",
      "Exo 2": "'Exo 2', sans-serif",
      Ubuntu: "'Ubuntu', sans-serif",
      "system-ui": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }, c = {
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
    }, d = {
      compact: "10px",
      normal: "11.5px",
      large: "13.5px"
    }, h = {
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
          font-family: var(--es-font-family, ${n[t.font_family] || n.Inter});
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((u = e.animations) == null ? void 0 : u.speed) || 1.2}s;
          --es-power-font-size: ${r[t.power_font_size] || "22px"};
          --es-label-font-size: ${d[t.label_font_size] || "11.5px"};
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
          max-width: var(--es-card-max-width, ${e.max_width || "1400px"});
          margin: 0 auto;
          padding: ${h[t.density] || "22px 28px 24px 28px"};
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
          font-family: var(--es-mono-font-family, ${c[t.mono_font_family] || c["JetBrains Mono"]});
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
            <span>${e.title || "Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW</span>
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${se.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((E = e.solar) == null ? void 0 : E.target_daily_yield) || 55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
            </div>
            <div class="es-mono" id="solarSavingsDaily" style="font-size: 11px; font-weight: 700; color: #34d399; margin-top: 4px; display: none;"></div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${se.sun}</div>
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
            </div>

            <!-- Active Tariff Badge -->
            <div id="gridTariffBadgeContainer" style="display: flex; justify-content: flex-end; margin-bottom: 3px;">
              <div class="es-mono" id="gridTariffBadge" style="font-size: 10px; font-weight: 700; border-radius: 9999px; padding: 2px 8px; display: none; align-items: center; gap: 4px;"></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${se.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(I = e.grid) != null && I.show_non_essential && ((m = e.grid) != null && m.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${se.house_outline || se.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(y = e.grid) != null && y.show_car && ((k = e.grid) != null && k.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${se.car}</div>
              <div class="es-node-title" id="carTitle">${((p = e.grid) == null ? void 0 : p.car_title) || this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${se.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((_ = e.inverter) == null ? void 0 : _.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((x = e.aux) == null ? void 0 : x.type) === "none" || ((g = e.aux) == null ? void 0 : g.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${se[(i = e.aux) == null ? void 0 : i.type] || se.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((a = e.aux) == null ? void 0 : a.type) === "microinverter" && (!((o = e.aux) != null && o.title) || ((v = e.aux) == null ? void 0 : v.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((w = e.aux) == null ? void 0 : w.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((V = e.aux) == null ? void 0 : V.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((R = e.wind) == null ? void 0 : R.show) === !1 && ((l = e.aux) == null ? void 0 : l.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${se.house}</div>
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
    const e = this.shadowRoot;
    this._nodes = {
      dailySolarYield: e.getElementById("dailySolarYield"),
      targetSolarYield: e.getElementById("targetSolarYield"),
      solarProgressBar: e.getElementById("solarProgressBar"),
      solarSavingsDaily: e.getElementById("solarSavingsDaily"),
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
    var u, E, I, m, y, k, p, _;
    const e = this._config || he, t = ((u = this._nodes) == null ? void 0 : u.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!t) return;
    if (t.innerHTML = "", !(((E = e.wind) == null ? void 0 : E.show) !== !1 || ((I = e.aux) == null ? void 0 : I.type) === "wind")) {
      t.classList.add("hidden");
      return;
    }
    t.classList.remove("hidden");
    const c = ((m = e.wind) == null ? void 0 : m.turbine_count) || ((k = (y = e.wind) == null ? void 0 : y.turbines) == null ? void 0 : k.length) || 2, r = ((p = e.wind) == null ? void 0 : p.turbines) || [], d = document.createElement("div");
    d.className = "es-wind-summary-bar es-mono", d.id = "windStationSummaryBar", d.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, t.appendChild(d);
    const h = document.createElement("div");
    h.className = "es-wind-pods-row", t.appendChild(h);
    for (let x = 0; x < c; x++) {
      const g = r[x] || {
        name: `Вітряк ${x + 1}`,
        power_entity: `sensor.wind_turbine_${x + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((_ = e.wind) == null ? void 0 : _.animation_threshold) || 50
      }, i = !!(g.daily_energy_entity || g.monthly_energy_entity), a = document.createElement("div");
      a.className = "es-turbine-card glow-wind clickable-node", a.id = `turbineCard_${x + 1}`, a.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${x + 1}">
              ${se.wind_turbine}
            </div>
            <span>${g.name || `Вітряк ${x + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${x + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${x + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${x + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${x + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${x + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${i ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${x + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${x + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, a.addEventListener("click", () => {
        this._fireMoreInfo(g.power_entity);
      }), h.appendChild(a);
    }
  }
  _renderDynamicPvPanels() {
    var d, h, u, E, I, m;
    const e = this._config || he, t = this._nodes.pvPanelsContainer;
    if (!t) return;
    t.innerHTML = "";
    const n = ((d = e.solar) == null ? void 0 : d.pv_count) || ((u = (h = e.solar) == null ? void 0 : h.strings) == null ? void 0 : u.length) || 3, c = this._language === "en" ? "kWp" : "кВтп", r = ((E = e.solar) == null ? void 0 : E.show_metrics) !== !1;
    for (let y = 1; y <= n; y++) {
      const k = y < 10 ? `0${y}` : `${y}`, p = ((m = (I = e.solar) == null ? void 0 : I.strings) == null ? void 0 : m[y - 1]) || {}, _ = p.name || `PV ${k}`, x = p.capacity_kw !== void 0 ? parseFloat(p.capacity_kw) : 4, g = p.voltage_entity || (y <= 3 ? `sensor.deye_12k_inverter_pv${y}_voltage` : ""), i = p.current_entity || (y <= 3 ? `sensor.deye_12k_inverter_pv${y}_current` : ""), a = document.createElement("div");
      a.className = "es-pv-panel glow-solar clickable-node", a.dataset.pvIndex = y, a.id = `pvPanel_${y}`, a.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${se.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${_}</span>
        <span class="es-pv-val es-mono" id="pvVal_${y}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${y}" style="${r ? "display: flex;" : "display: none;"}">
          <span class="volt" id="pvVolt_${y}" title="${this._language === "en" ? "PV Voltage" : "Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${y}" title="${this._language === "en" ? "PV Current" : "Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${y}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${y}">${x.toFixed(1).replace(".", ",")}</span> <span style="font-size: 9px; color: #64748b;">${c}</span> <span id="pvPercent_${y}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `, a.addEventListener("click", () => {
        var V;
        const w = p.power_entity || g || i || ((V = e.solar) == null ? void 0 : V.total_power_entity);
        this._fireMoreInfo(w);
      });
      const o = a.querySelector(`#pvVolt_${y}`);
      o && o.addEventListener("click", (w) => {
        w.stopPropagation(), g ? this._fireMoreInfo(g) : p.power_entity && this._fireMoreInfo(p.power_entity);
      });
      const v = a.querySelector(`#pvCurr_${y}`);
      v && v.addEventListener("click", (w) => {
        w.stopPropagation(), i ? this._fireMoreInfo(i) : p.power_entity && this._fireMoreInfo(p.power_entity);
      }), t.appendChild(a);
    }
  }
  _renderDynamicSubloads() {
    var c;
    const e = this._config || he, t = this._nodes.subloadsContainer;
    if (!t) return;
    t.innerHTML = "", (((c = e.load) == null ? void 0 : c.subloads) || []).forEach((r, d) => {
      const h = document.createElement("div");
      h.className = "es-subload-card clickable-node", h.id = `subloadCard_${d}`, h.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${se[r.icon] || se.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${d}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, h.addEventListener("click", () => {
        this._fireMoreInfo(r.entity);
      }), t.appendChild(h);
    });
  }
  _renderDynamicBatteryRack() {
    var m, y, k, p, _, x, g;
    const e = this._config || he, t = this._nodes.batteryRackContainer;
    if (!t) return;
    t.innerHTML = "";
    const n = ((m = e.battery) == null ? void 0 : m.parallel_batteries) || ((k = (y = e.battery) == null ? void 0 : y.modules) == null ? void 0 : k.length) || 2, c = [82, 76, 91, 68, 85, 90, 72, 80], r = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], d = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], h = [12, 8, 15, 9, 14, 11, 18, 10], u = this._t("bat_prefix"), E = this._language === "en" ? "kW" : "кВт", I = this._language === "en" ? "kWh" : "кВт·год";
    for (let i = 1; i <= n; i++) {
      const a = ((_ = (p = e.battery) == null ? void 0 : p.modules) == null ? void 0 : _[i - 1]) || ((g = (x = e.battery) == null ? void 0 : x.module_entities) == null ? void 0 : g[i - 1]) || {}, o = a.name || `${u} ${i}`, v = c[(i - 1) % c.length], w = r[(i - 1) % r.length], V = d[(i - 1) % d.length], R = h[(i - 1) % h.length], l = document.createElement("div");
      l.className = "es-battery-pack-card glow-battery clickable-node", l.id = `batPackCard_${i}`, l.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${se.battery_vertical}</div>
        <span class="es-bat-name">${o}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${v}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${i}">${w.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${i}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${E}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${i}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${i}">${V.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${i}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${i}">${R} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${i}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${I}</div>
      `, l.addEventListener("click", (T) => {
        var Y;
        if (T.target.closest(`#batPackTemp_${i}`)) {
          const j = a.temperature_entity || a.temp || `sensor.bms_rack${i}_temperature`;
          this._fireMoreInfo(j);
          return;
        }
        if (T.target.closest(`#batPackDelta_${i}`)) {
          const j = a.cell_delta_entity || a.delta_entity || `sensor.bms_rack${i}_cell_delta`;
          this._fireMoreInfo(j);
          return;
        }
        const z = a.soc_entity || a.soc || a.voltage_entity || a.volt || a.current_entity || ((Y = e.battery) == null ? void 0 : Y.soc_entity);
        this._fireMoreInfo(z);
      }), t.appendChild(l);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var _, x, g, i, a, o, v, w, V, R;
    const e = this._config || he, t = ((_ = this._nodes) == null ? void 0 : _.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!t || (t.innerHTML = "", e.show_quick_settings === !1)) return;
    const n = this._themeMode === "light", c = this._language === "en", r = ((x = e.controls) == null ? void 0 : x.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", d = ((g = e.controls) == null ? void 0 : g.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", h = ((i = e.controls) == null ? void 0 : i.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", u = document.createElement("div");
    u.className = "es-quick-settings-card", u.id = "quickSettingsCard", u.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${se.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n ? se.sun_mode : se.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${c ? "EN" : "UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${r}">
              <span class="es-ctrl-icon es-ctrl-solar">${se.sun_mode}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${d}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${se.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${c ? "W" : "Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${h}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${se.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (a = u.querySelector("#btnEditCardQs")) == null || a.addEventListener("click", (l) => {
      l.stopPropagation(), this._openCardEditor();
    }), (o = u.querySelector("#btnThemeToggle")) == null || o.addEventListener("click", (l) => {
      l.stopPropagation(), this._toggleTheme();
    }), (v = u.querySelector("#btnLangToggle")) == null || v.addEventListener("click", (l) => {
      l.stopPropagation(), this._toggleLanguage();
    }), (w = u.querySelector("#ctrlLabelWrapSolar")) == null || w.addEventListener("click", () => this._fireMoreInfo(r)), (V = u.querySelector("#ctrlLabelWrapSell")) == null || V.addEventListener("click", () => this._fireMoreInfo(d)), (R = u.querySelector("#ctrlLabelWrapGrid")) == null || R.addEventListener("click", () => this._fireMoreInfo(h));
    const E = u.querySelector("#ctrlSliderSolar"), I = u.querySelector("#ctrlValSolar");
    E && (this._updateSliderGradient(E), E.addEventListener("input", (l) => {
      I && (I.innerText = `${l.target.value} A`), this._updateSliderGradient(E);
    }), E.addEventListener("change", (l) => {
      this._setNumberValue(r, l.target.value);
    }));
    const m = u.querySelector("#ctrlSliderSell"), y = u.querySelector("#ctrlValSell");
    m && (this._updateSliderGradient(m), m.addEventListener("input", (l) => {
      const T = Number(l.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      y && (y.innerText = `${T} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(m);
    }), m.addEventListener("change", (l) => {
      this._setNumberValue(d, l.target.value);
    }));
    const k = u.querySelector("#ctrlSliderGrid"), p = u.querySelector("#ctrlValGrid");
    k && (this._updateSliderGradient(k), k.addEventListener("input", (l) => {
      p && (p.innerText = `${l.target.value} A`), this._updateSliderGradient(k);
    }), k.addEventListener("change", (l) => {
      this._setNumberValue(h, l.target.value);
    })), t.appendChild(u), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const t = parseFloat(e.min) || 0, n = parseFloat(e.max) || 100, c = parseFloat(e.value) || 0, r = Math.max(0, Math.min(100, (c - t) / (n - t) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, t) {
    if (!this._hass || !e) return;
    const c = e.split(".")[0] || "number", r = Number(t);
    this._hass.callService(c, "set_value", {
      entity_id: e,
      value: r
    });
  }
  _updateControlSliders() {
    var y, k, p, _, x, g, i, a, o;
    const e = this._config || he;
    if (e.show_quick_settings === !1) return;
    const t = this.shadowRoot;
    if (!t) return;
    const n = ((y = e.controls) == null ? void 0 : y.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", c = ((k = e.controls) == null ? void 0 : k.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", r = ((p = e.controls) == null ? void 0 : p.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", d = t.getElementById("ctrlSliderSolar"), h = t.getElementById("ctrlValSolar"), u = t.getElementById("ctrlSliderSell"), E = t.getElementById("ctrlValSell"), I = t.getElementById("ctrlSliderGrid"), m = t.getElementById("ctrlValGrid");
    if (d && (!d.matches || !d.matches(":active"))) {
      const v = (x = (_ = this._hass) == null ? void 0 : _.states) == null ? void 0 : x[n], w = v && !isNaN(parseFloat(v.state)) ? parseFloat(v.state) : d.value ? parseFloat(d.value) : 80;
      d.value = w, h && (h.innerText = `${Math.round(w)} A`), this._updateSliderGradient(d);
    }
    if (u && (!u.matches || !u.matches(":active"))) {
      const v = (i = (g = this._hass) == null ? void 0 : g.states) == null ? void 0 : i[c], w = v && !isNaN(parseFloat(v.state)) ? parseFloat(v.state) : u.value ? parseFloat(u.value) : 5e3;
      u.value = w;
      const V = Math.round(w).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), R = this._language === "uk" ? "Вт" : "W";
      E && (E.innerText = `${V} ${R}`), this._updateSliderGradient(u);
    }
    if (I && (!I.matches || !I.matches(":active"))) {
      const v = (o = (a = this._hass) == null ? void 0 : a.states) == null ? void 0 : o[r], w = v && !isNaN(parseFloat(v.state)) ? parseFloat(v.state) : I.value ? parseFloat(I.value) : 70;
      I.value = w, m && (m.innerText = `${Math.round(w)} A`), this._updateSliderGradient(I);
    }
  }
  _bindInteractions() {
    var n, c, r, d, h, u, E, I, m, y, k, p, _, x, g, i, a, o, v, w, V, R;
    const e = this.shadowRoot, t = this._config || he;
    (n = e.getElementById("headerEditCard")) == null || n.addEventListener("click", (l) => {
      l.stopPropagation(), this._openCardEditor();
    }), (c = e.getElementById("headerThemeToggle")) == null || c.addEventListener("click", (l) => {
      l.stopPropagation(), this._toggleTheme();
    }), (r = e.getElementById("headerLangToggle")) == null || r.addEventListener("click", (l) => {
      l.stopPropagation(), this._toggleLanguage();
    }), (d = e.getElementById("headerZoomIn")) == null || d.addEventListener("click", (l) => {
      l.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (h = e.getElementById("headerZoomOut")) == null || h.addEventListener("click", (l) => {
      l.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (u = e.getElementById("headerZoomVal")) == null || u.addEventListener("click", (l) => {
      l.stopPropagation(), this._changeScale(1);
    }), (E = e.getElementById("solarHeaderNode")) == null || E.addEventListener("click", () => {
      var l, T;
      this._fireMoreInfo(((l = t.solar) == null ? void 0 : l.daily_yield_entity) || ((T = t.solar) == null ? void 0 : T.total_power_entity));
    }), (I = e.getElementById("totalPvPowerBadge")) == null || I.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.solar) == null ? void 0 : l.total_power_entity);
    }), (m = e.getElementById("gridNode")) == null || m.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.grid) == null ? void 0 : l.power_entity);
    }), (y = e.getElementById("nonEssentialNode")) == null || y.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.grid) == null ? void 0 : l.non_essential_power_entity);
    }), (k = e.getElementById("carNode")) == null || k.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.grid) == null ? void 0 : l.car_power_entity);
    }), (p = e.getElementById("inverterNode")) == null || p.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.inverter) == null ? void 0 : l.power_entity);
    }), (_ = e.getElementById("inverterSelfConsumptionBox")) == null || _.addEventListener("click", (l) => {
      var T;
      l.stopPropagation(), (T = t.inverter) != null && T.self_consumption_entity && this._fireMoreInfo(t.inverter.self_consumption_entity);
    }), (x = e.getElementById("auxNode")) == null || x.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.aux) == null ? void 0 : l.power_entity);
    }), (g = e.getElementById("essentialNode")) == null || g.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.load) == null ? void 0 : l.essential_power_entity);
    }), (i = e.getElementById("masterBatteryHub")) == null || i.addEventListener("click", () => {
      var l;
      this._fireMoreInfo((l = t.battery) == null ? void 0 : l.soc_entity);
    }), (a = e.getElementById("batChargeDaily")) == null || a.addEventListener("click", (l) => {
      var T;
      l.stopPropagation(), this._fireMoreInfo(((T = t.battery) == null ? void 0 : T.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (o = e.getElementById("batDischargeDaily")) == null || o.addEventListener("click", (l) => {
      var T;
      l.stopPropagation(), this._fireMoreInfo(((T = t.battery) == null ? void 0 : T.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let l = 1; l <= 8; l++) {
      const T = e.getElementById(`batBranchBadge_${l}`), z = ((w = (v = t.battery) == null ? void 0 : v.modules) == null ? void 0 : w[l - 1]) || ((R = (V = t.battery) == null ? void 0 : V.module_entities) == null ? void 0 : R[l - 1]) || {};
      T == null || T.addEventListener("click", () => {
        var j;
        const Y = z.power_entity || z.current_entity || z.soc_entity || ((j = t.battery) == null ? void 0 : j.soc_entity);
        this._fireMoreInfo(Y);
      });
    }
  }
  _fetchNightEndFromHa(e, t) {
    var u, E;
    if (this._fetchingHistoryForDate === e) return;
    const c = (u = (this._config || he).grid) == null ? void 0 : u.import_daily_entity;
    if (!((E = this._hass) != null && E.callWS) || !c) return;
    this._fetchingHistoryForDate = e;
    const r = /* @__PURE__ */ new Date(), d = new Date(r.getFullYear(), r.getMonth(), r.getDate(), t, 0, 0), h = new Date(r.getFullYear(), r.getMonth(), r.getDate(), t, 15, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: d.toISOString(),
      end_time: h.toISOString(),
      entity_ids: [c],
      no_attributes: !0
    }).then((I) => {
      const m = I == null ? void 0 : I[c];
      if (m && m.length > 0) {
        const y = parseFloat(m[0].state);
        if (!isNaN(y) && y >= 0) {
          const k = `es_tariff_split_${e}`;
          let p = {};
          if (typeof localStorage < "u")
            try {
              const _ = localStorage.getItem(k);
              _ && (p = JSON.parse(_));
            } catch {
            }
          if (p.night_end = y, typeof localStorage < "u")
            try {
              localStorage.setItem(k, JSON.stringify(p));
            } catch {
            }
          this._hass && this._updateValues();
        }
      }
    }).catch(() => {
    });
  }
  _calculateTariffs(e, t, n) {
    var v, w, V, R, l, T, z, Y, j, J, f, $, B;
    const r = (this._config || he).tariffs || {};
    if (r.enabled === !1) {
      (v = this._nodes) != null && v.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (w = this._nodes) != null && w.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (V = this._nodes) != null && V.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (R = this._nodes) != null && R.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
      return;
    }
    const d = r.currency || "грн", h = typeof r.day_rate == "number" ? r.day_rate : 4.32, u = typeof r.night_rate == "number" ? r.night_rate : 2.16, E = typeof r.export_rate == "number" ? r.export_rate : 5.3, I = typeof r.night_start_hour == "number" ? r.night_start_hour : 23, m = typeof r.night_end_hour == "number" ? r.night_end_hour : 7, y = /* @__PURE__ */ new Date(), k = y.getHours() + y.getMinutes() / 60, p = I > m ? k >= I || k < m : k >= I && k < m;
    if ((l = this._nodes) != null && l.gridTariffBadge && r.show_active_badge !== !1) {
      const b = p ? u : h, P = p ? this._t("tariff_night") : this._t("tariff_day"), G = p ? "🌙" : "☀️", K = p ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", re = p ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", le = p ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = K, this._nodes.gridTariffBadge.style.border = `1px solid ${re}`, this._nodes.gridTariffBadge.style.color = le, this._nodes.gridTariffBadge.innerText = `${G} ${P}: ${b.toFixed(2)} ${d}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (T = this._nodes) != null && T.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((z = this._nodes) != null && z.solarSavingsDaily && r.show_solar_savings !== !1 && n > 0) {
      const b = n * h;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${b.toFixed(2)} ${d}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (Y = this._nodes) != null && Y.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((j = this._nodes) != null && j.gridExportIncomeRow && r.show_export_income !== !1 && typeof t == "number" && t > 0) {
      const b = t * E;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${b.toFixed(2)} ${d}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (J = this._nodes) != null && J.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (f = this._nodes) != null && f.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
      return;
    }
    const _ = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, "0")}-${String(y.getDate()).padStart(2, "0")}`, x = `es_tariff_split_${_}`;
    let g = {};
    if (typeof localStorage < "u")
      try {
        const b = localStorage.getItem(x);
        b && (g = JSON.parse(b));
      } catch {
      }
    let i = 0, a = 0;
    if (k < m) {
      if (i = e, a = 0, g.night_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(x, JSON.stringify(g));
        } catch {
        }
    } else if (k >= m && k < I) {
      if (typeof g.night_end == "number" && g.night_end <= e)
        i = g.night_end, a = Math.max(0, e - i);
      else {
        this._fetchNightEndFromHa(_, m);
        const b = Math.min(1, m / k);
        i = e * b, a = Math.max(0, e - i);
      }
      if (g.day_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(x, JSON.stringify(g));
        } catch {
        }
    } else {
      const b = typeof g.night_end == "number" ? g.night_end : e * (m / k), P = typeof g.day_end == "number" ? g.day_end : e;
      a = Math.max(0, P - b);
      const G = Math.max(0, e - P);
      i = b + G;
    }
    const o = i * u + a * h;
    ($ = this._nodes) != null && $.gridCostDailyRow && r.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${o.toFixed(2)} ${d}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${i.toFixed(1)} + ☀️ ${a.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (B = this._nodes) != null && B.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
  }
  _updateValues() {
    var Pt, Mt, Nt, Rt, Lt, te, N, L, A, Me, Oe, Ye, Ke, Ue, Ft, Vt, At, Dt, zt, Zt, Qt, ei, ti, ii, ai, oi, si, ni, ri, li, di, ci, pi, hi, gi, _i, ui, fi, yi, bi, mi, vi, wi, xi, ki, Ei, $i, Si, Bi, Ci, Ii, Ti, Pi, Mi, Ni, Ri, Li, Fi, Vi, Ai, Di, zi, Wi, qi, Hi, ji, Gi, Oi, Yi, Ki, Ui, Ji, Xi, Zi, Qi, ea, ta, ia, aa, oa, sa, na, ra, la, da, ca, pa, ha, ga, _a, ua, fa, ya, ba, ma, va, wa, xa, ka, Ea, $a, Sa, Ba, Ca, Ia, Ta, Pa;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || he, t = this._language === "en" ? "kW" : "кВт", n = ((Pt = e.solar) == null ? void 0 : Pt.pv_count) || ((Nt = (Mt = e.solar) == null ? void 0 : Mt.strings) == null ? void 0 : Nt.length) || 3;
    let c = 0, r = 0, d = !1;
    for (let s = 1; s <= n; s++) {
      const F = (Lt = (Rt = e.solar) == null ? void 0 : Rt.strings) == null ? void 0 : Lt[s - 1], H = (F == null ? void 0 : F.voltage_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_voltage` : ""), U = (F == null ? void 0 : F.current_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_current` : ""), S = (F == null ? void 0 : F.power_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_power` : "");
      if (this._getEntityState(S) || this._getEntityState(H) || this._getEntityState(U)) {
        d = !0;
        break;
      }
    }
    for (let s = 1; s <= n; s++) {
      const F = this.shadowRoot.getElementById(`pvVal_${s}`), H = this.shadowRoot.getElementById(`pvVolt_${s}`), U = this.shadowRoot.getElementById(`pvCurr_${s}`), S = (N = (te = e.solar) == null ? void 0 : te.strings) == null ? void 0 : N[s - 1], X = (S == null ? void 0 : S.voltage_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_voltage` : ""), D = (S == null ? void 0 : S.current_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_current` : ""), O = (S == null ? void 0 : S.power_entity) || (s <= 3 ? `sensor.deye_12k_inverter_pv${s}_power` : ""), W = this._getEntityState(X), Z = this._getEntityState(D), q = this._getEntityState(O);
      let ie = 0, Te = 0, pe = 0;
      q ? pe = this._formatPower(q).kw : W && Z ? pe = W.val * Z.val / 1e3 : W ? pe = 0 : pe = d ? 0 : 4, W ? ie = W.val : ie = d ? 0 : 380 + s * 4.5, Z ? Te = Z.val : q && ie > 0 ? Te = pe * 1e3 / ie : Te = d ? 0 : 3.12 + s * 0.28, c += pe, r += Te, F && (F.innerText = `${pe.toFixed(3)} ${t}`), H && (H.innerText = `${ie.toFixed(1)} V`), U && (U.innerText = `${Te.toFixed(2)} A`);
      const ae = this.shadowRoot.getElementById(`pvMetrics_${s}`);
      if (ae) {
        const Qe = ((L = e.solar) == null ? void 0 : L.show_metrics) !== !1, et = !!(W || Z || !d || S != null && S.voltage_entity || S != null && S.current_entity || ie > 0 || Te > 0);
        ae.style.display = Qe && et ? "flex" : "none";
      }
      const Se = (S == null ? void 0 : S.capacity_kw) !== void 0 ? parseFloat(S.capacity_kw) : (S == null ? void 0 : S.installed_power) !== void 0 ? parseFloat(S.installed_power) : d ? 0 : 4, Je = Se > 0 && pe > 0 ? Math.min(100, Math.round(pe / Se * 100)) : 0, ht = this.shadowRoot.getElementById(`pvCapVal_${s}`), Xe = this.shadowRoot.getElementById(`pvPercent_${s}`), Ze = this.shadowRoot.getElementById(`pvCap_${s}`);
      ht && (Se > 0 ? (ht.innerText = Se.toFixed(1).replace(".", ","), Xe && (Xe.innerText = `(${Je}%)`, Xe.style.color = Je >= 70 ? "#34d399" : Je >= 30 ? "#fbbf24" : "#94a3b8"), Ze && (Ze.style.display = "flex")) : Ze && (Ze.style.display = "none"));
    }
    const h = this._getEntityState((A = e.solar) == null ? void 0 : A.total_power_entity);
    let u = 0;
    h ? u = this._formatPower(h).kw : u = c;
    let E = ((Me = e.solar) == null ? void 0 : Me.installed_power) !== void 0 ? parseFloat(e.solar.installed_power) : 0;
    if (isNaN(E) || E <= 0) {
      let s = 0;
      for (let F = 0; F < n; F++) {
        const H = (Ye = (Oe = e.solar) == null ? void 0 : Oe.strings) == null ? void 0 : Ye[F], U = (H == null ? void 0 : H.capacity_kw) !== void 0 ? parseFloat(H.capacity_kw) : (H == null ? void 0 : H.installed_power) !== void 0 ? parseFloat(H.installed_power) : 0;
        !isNaN(U) && U > 0 && (s += U);
      }
      E = s > 0 ? s : d ? 0 : 12;
    }
    const I = E > 0 ? u / E * 100 : 0, m = Math.min(100, Math.max(0, I)), y = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${u.toFixed(3)} ${t}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${u.toFixed(3)} ${t}`), this._nodes.totalPvPowerBadge.title = this._language === "en" ? `Total PV current: ${r.toFixed(2)} A` : `Сумарний струм СЕС: ${r.toFixed(2)} A`), this._nodes.totalPvPercentBadge && (E > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(m)}%`, this._nodes.totalPvPercentBadge.style.color = m >= 70 ? "#34d399" : m >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = m >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (E > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${m.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = m >= 70 ? "#34d399" : m >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${E.toFixed(1).replace(".", ",")} ${y})`)) : r > 0 && ((Ke = e.solar) == null ? void 0 : Ke.show_metrics) !== !1 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${r.toFixed(2)} A`, this._nodes.totalPvCapDetail.style.color = "#34d399"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = this._language === "en" ? "(current)" : "(струм)")) : this._nodes.totalPvSubline.style.display = "none");
    const k = this._getEntityState((Ue = e.solar) == null ? void 0 : Ue.daily_yield_entity), p = k ? k.val : d ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = p.toFixed(1);
    const _ = ((Ft = e.solar) == null ? void 0 : Ft.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = _.toFixed(1);
    const x = Math.min(100, Math.round(p / _ * 100));
    this._nodes.solarProgressBar.style.width = `${x}%`;
    const g = this._getEntityState((Vt = e.inverter) == null ? void 0 : Vt.power_entity);
    this._nodes.inverterPowerVal && ((At = e.inverter) != null && At.power_entity && g ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(g, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const i = this._getEntityState((Dt = e.inverter) == null ? void 0 : Dt.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = i ? i.val.toFixed(2) : "41,20";
    const a = this._getEntityState((zt = e.inverter) == null ? void 0 : zt.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = a ? a.val.toFixed(2) : "38,40";
    const o = this._getEntityState((Zt = e.inverter) == null ? void 0 : Zt.voltage_entity);
    this._nodes.inverterVolt.innerText = o ? o.val.toFixed(2) : "231,45";
    const v = this._getEntityState((Qt = e.inverter) == null ? void 0 : Qt.current_entity);
    this._nodes.inverterCurrent.innerText = v ? v.val.toFixed(2) : "8,60";
    const w = this._getEntityState((ei = e.inverter) == null ? void 0 : ei.frequency_entity);
    this._nodes.inverterFreq.innerText = w ? w.val.toFixed(2) : "50,01";
    const V = ((ti = e.wind) == null ? void 0 : ti.show) !== !1 || ((ii = e.aux) == null ? void 0 : ii.type) === "wind", R = this.shadowRoot.getElementById("windStationContainer"), l = this._nodes.auxNode;
    let T = 0;
    if (R)
      if (!V)
        R.classList.add("hidden");
      else {
        R.classList.remove("hidden");
        const s = ((ai = e.wind) == null ? void 0 : ai.turbine_count) || ((si = (oi = e.wind) == null ? void 0 : oi.turbines) == null ? void 0 : si.length) || 2, F = ((ni = e.wind) == null ? void 0 : ni.turbines) || [];
        let H = 0, U = 0, S = !1, X = !1;
        for (let q = 0; q < s; q++) {
          const ie = F[q] || {
            power_entity: `sensor.wind_turbine_${q + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((ri = e.wind) == null ? void 0 : ri.animation_threshold) || 50
          }, Te = this.shadowRoot.getElementById(`turbinePower_${q + 1}`), pe = this.shadowRoot.getElementById(`turbineStatus_${q + 1}`), ae = this.shadowRoot.getElementById(`turbineIcon_${q + 1}`), Se = this.shadowRoot.getElementById(`turbineCard_${q + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${q + 1}`);
          const Je = this.shadowRoot.getElementById(`turbineDailyVal_${q + 1}`), ht = this.shadowRoot.getElementById(`turbineMonthlyVal_${q + 1}`), Xe = this.shadowRoot.getElementById(`turbineEnergyFooter_${q + 1}`), Ze = this._hass ? 0 : q === 0 ? 1.56 : 0.22, Qe = this._getEntityState(ie.power_entity), et = this._formatPower(Qe, Ze);
          Te && (Te.innerText = et.str), T += et.kw;
          let gt = et.kw * 1e3;
          Qe && Qe.unit === "W" && (gt = Qe.val);
          const xt = ie.animation_threshold ?? ((li = e.wind) == null ? void 0 : li.animation_threshold) ?? 50, We = ae == null ? void 0 : ae.querySelector(".turbine-rotor"), kt = ie.rpm_entity || ie.speed_entity || ((di = e.wind) == null ? void 0 : di.rpm_entity) || ((ci = e.wind) == null ? void 0 : ci.speed_entity) || (q === 0 ? "sensor.wind_rpm" : "");
          let Q = kt && ((pi = this._hass) != null && pi.states[kt]) ? this._getEntityState(kt) : null;
          if (!Q && q === 0 && ((hi = this._hass) != null && hi.states["sensor.wind_rpm"]) && (Q = this._getEntityState("sensor.wind_rpm")), gt >= xt || Q && typeof Q.val == "number" && Q.val > 0) {
            We && We.classList.add("spinning"), Se && (Se.classList.add("glow-wind"), Se.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const Fe = ((gi = e.wind) == null ? void 0 : gi.max_power) || 3e3, Yt = ((_i = e.wind) == null ? void 0 : _i.max_rpm) || 600;
            let Wt = 0;
            Q && typeof Q.val == "number" && Q.val > 0 ? Wt = Math.min(1, Math.max(0, Q.val / Yt)) : Wt = Math.min(1, Math.max(0, (gt - xt) / (Fe - xt)));
            const me = (3.2 - Wt * 2.75).toFixed(2);
            We && We.style.setProperty("--turbine-speed", `${me}s`), pe && (pe.innerText = this._t("wind_gen"), pe.style.color = "#67e8f9");
          } else
            We && We.classList.remove("spinning"), Se && (Se.classList.remove("glow-wind"), Se.style.borderColor = "rgba(255, 255, 255, 0.08)"), pe && (pe.innerText = this._t("wind_calm"), pe.style.color = "#94a3b8");
          const ut = this.shadowRoot.getElementById(`turbineRpmBox_${q + 1}`);
          if (ut)
            if (Q && Q.raw !== "unavailable" && Q.raw !== "unknown" && typeof Q.val == "number" && !isNaN(Q.val)) {
              ut.style.display = "inline";
              const Yt = Q.unit ? Q.unit : "RPM";
              ut.innerHTML = `<span id="turbineRpmVal_${q + 1}">${Math.round(Q.val)}</span> ${Yt}`;
            } else
              ut.style.display = "none";
          const xe = this._getEntityState(ie.daily_energy_entity), Re = this._getEntityState(ie.monthly_energy_entity);
          Je && (Je.innerText = xe && typeof xe.val == "number" && !isNaN(xe.val) ? xe.val.toFixed(2) : "0.00"), ht && (ht.innerText = Re && typeof Re.val == "number" && !isNaN(Re.val) ? Re.val.toFixed(1) : "0.0");
          const Le = !!(ie.daily_energy_entity || ie.monthly_energy_entity);
          Xe && (Xe.style.display = Le ? "flex" : "none"), xe && typeof xe.val == "number" && !isNaN(xe.val) && (H += xe.val, S = !0), Re && typeof Re.val == "number" && !isNaN(Re.val) && (U += Re.val, X = !0);
        }
        const D = this.shadowRoot.getElementById("windTotalDailyVal"), O = this.shadowRoot.getElementById("windTotalMonthlyVal"), W = this._getEntityState((ui = e.wind) == null ? void 0 : ui.daily_energy_entity), Z = this._getEntityState((fi = e.wind) == null ? void 0 : fi.monthly_energy_entity);
        D && (W && typeof W.val == "number" && !isNaN(W.val) ? D.innerText = W.val.toFixed(2) : S ? D.innerText = H.toFixed(2) : D.innerText = "0.00"), O && (Z && typeof Z.val == "number" && !isNaN(Z.val) ? O.innerText = Z.val.toFixed(1) : X ? O.innerText = U.toFixed(1) : O.innerText = "0.0");
      }
    let z = 0;
    if (l)
      if (((yi = e.aux) == null ? void 0 : yi.type) === "none" || ((bi = e.aux) == null ? void 0 : bi.type) === "wind")
        l.classList.add("hidden");
      else {
        l.classList.remove("hidden");
        const s = this._getEntityState((mi = e.aux) == null ? void 0 : mi.power_entity), F = this._hass ? 0 : 2, H = this._formatPower(s, F);
        z = H.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = H.str);
        const U = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let S = (vi = e.aux) == null ? void 0 : vi.title;
        ((wi = e.aux) == null ? void 0 : wi.type) === "microinverter" && (!S || S === "Вітрогенератор") ? S = "Мікроінвертор" : (xi = e.aux) != null && xi.type && U[e.aux.type] && (!S || S === "Вітрогенератор") ? S = U[e.aux.type] : S || (S = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = S), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = se[(ki = e.aux) == null ? void 0 : ki.type] || se.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((Ei = e.aux) == null ? void 0 : Ei.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), l.style.borderColor = "rgba(192, 132, 252, 0.45)", l.style.background = "rgba(88, 28, 135, 0.35)", l.classList.remove("glow-wind"), l.classList.add("glow-aux");
      }
    const Y = this.shadowRoot.getElementById("nonEssentialNode"), j = !!(($i = e.grid) != null && $i.show_non_essential && ((Si = e.grid) != null && Si.non_essential_power_entity)) || ((Bi = e.grid) == null ? void 0 : Bi.show_non_essential) !== !1 && !!((Ci = e.grid) != null && Ci.non_essential_power_entity);
    let J = 0;
    if (Y)
      if (j) {
        Y.classList.remove("hidden");
        const s = this._getEntityState(e.grid.non_essential_power_entity), F = this._formatPower(s, 0);
        J = F.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = F.str);
      } else
        Y.classList.add("hidden");
    const f = this.shadowRoot.getElementById("carNode"), $ = !!((Ii = e.grid) != null && Ii.show_car && ((Ti = e.grid) != null && Ti.car_power_entity)) || ((Pi = e.grid) == null ? void 0 : Pi.show_car) !== !1 && !!((Mi = e.grid) != null && Mi.car_power_entity);
    let B = 0;
    if (f)
      if ($) {
        f.classList.remove("hidden");
        const s = this._getEntityState(e.grid.car_power_entity), F = this._formatPower(s, 0);
        B = F.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = F.str);
      } else
        f.classList.add("hidden");
    let b = 0;
    (((Ni = e.load) == null ? void 0 : Ni.subloads) || []).forEach((s, F) => {
      const H = this.shadowRoot.getElementById(`subloadVal_${F}`), U = this._getEntityState(s.entity), S = this._formatPower(U, 0);
      b += S.kw, H && (H.innerText = S.str);
    });
    const P = this._getEntityState((Ri = e.battery) == null ? void 0 : Ri.soc_entity), G = P ? P.val : 80;
    this._nodes.masterBatterySoc.innerText = `${G.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const K = this._getEntityState((Li = e.battery) == null ? void 0 : Li.power_entity), re = this._getEntityState((Fi = e.battery) == null ? void 0 : Fi.current_entity), le = K ? K.unit === "W" ? K.val / 1e3 : K.val : 0, ke = ((Vi = e.battery) == null ? void 0 : Vi.power_sign) || ((Ai = e.battery) != null && Ai.invert_power ? "standard" : "deye");
    let ce = !1, de = !1;
    const ue = Math.abs(le);
    ue >= 0.02 ? ke === "deye" ? le < 0 ? ce = !0 : de = !0 : le > 0 ? ce = !0 : de = !0 : re && Math.abs(re.val) >= 0.3 && (ke === "deye" ? re.val < 0 ? ce = !0 : de = !0 : re.val > 0 ? ce = !0 : de = !0), this._isCharging = ce, this._isDischarging = de;
    const be = ce ? ue : 0, Be = de ? ue : 0;
    if (this._nodes.masterBatteryFlowHint) {
      let s = this._t("bat_idle"), F = "#94a3b8";
      ce ? (s = this._t("bat_dir_charge"), F = "#34d399") : de && (s = this._t("bat_dir_discharge"), F = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ue.toFixed(3)} ${t}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${F}; font-weight: 700; font-size: 14px;">${s}</span>`;
    }
    const Ve = this._getEntityState((Di = e.battery) == null ? void 0 : Di.voltage_entity), it = Ve ? Ve.val.toFixed(2) : "53.24", yt = re ? re.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${it.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${yt.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((zi = e.battery) == null ? void 0 : zi.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const s = ((Wi = e.battery) == null ? void 0 : Wi.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${s}%`;
    }
    let we = this._getEntityState((qi = e.load) == null ? void 0 : qi.essential_power_entity);
    !we && (!((Hi = e.load) != null && Hi.essential_power_entity) || ((ji = e.load) == null ? void 0 : ji.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((Gi = e.load) == null ? void 0 : Gi.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (we = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const Ee = we && typeof we.val == "number" && !isNaN(we.val) ? Math.max(0, we.unit === "W" ? we.val / 1e3 : we.val) : 0, at = !!(we && Ee > 0);
    let ye = null, Ce = !1;
    if ((Oi = e.grid) != null && Oi.external_power_entity) {
      const s = this._getEntityState(e.grid.external_power_entity);
      s && typeof s.val == "number" && !isNaN(s.val) && (ye = s, Ce = !0);
    }
    if (!ye) {
      let s = this._getEntityState((Yi = e.grid) == null ? void 0 : Yi.power_entity);
      if (!s) {
        const U = [
          "sensor.deye_12k_inverter_total_grid_power",
          "sensor.deye_12k_inverter_grid_power",
          "sensor.esp32_deye_inverter_grid_power",
          "sensor.deye_grid_power",
          "sensor.grid_power",
          "sensor.inverter_12_kvt_grid_power",
          "sensor.solarman_total_grid_power",
          "sensor.solarman_grid_power",
          "sensor.sunsynk_grid_power",
          "sensor.sunsynk_total_grid_power"
        ];
        for (const S of U) {
          const X = this._getEntityState(S);
          if (X && typeof X.val == "number" && !isNaN(X.val)) {
            s = X;
            break;
          }
        }
      }
      const F = s ? s.unit === "W" ? s.val / 1e3 : s.val : 0, H = u + T + (z > 0 ? z : 0) + Be;
      if (s && F > 0.05)
        ye = s, Ce = !1;
      else {
        const U = [
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
        ], S = this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power") || this._getEntityState("sensor.solarman_external_power_l1"), X = this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power") || this._getEntityState("sensor.solarman_external_power_l2"), D = this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power") || this._getEntityState("sensor.solarman_external_power_l3");
        let O = null;
        if (S && X && D && !isNaN(S.val) && !isNaN(X.val) && !isNaN(D.val)) {
          const W = (S.unit === "kW" ? S.val * 1e3 : S.val) + (X.unit === "kW" ? X.val * 1e3 : X.val) + (D.unit === "kW" ? D.val * 1e3 : D.val);
          O = { val: W, unit: "W", raw: String(W) };
        }
        if (!O)
          for (const W of U) {
            const Z = this._getEntityState(W);
            if (Z && typeof Z.val == "number" && !isNaN(Z.val)) {
              O = Z;
              break;
            }
          }
        if (!O && ((Ki = this._hass) != null && Ki.states)) {
          const Z = Object.keys(this._hass.states).find(
            (q) => /(external_power|external_ct|ct1_power|grid_external_power)/i.test(q) && !/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(q)
          );
          if (Z) {
            const q = this._getEntityState(Z);
            q && typeof q.val == "number" && !isNaN(q.val) && (O = q);
          }
        }
        if (O) {
          const W = Math.abs(O.unit === "kW" ? O.val : O.val / 1e3);
          !(W < 0.03 && (be > 0.2 && H < 0.1 || F > 0.1 && H < 0.1)) && W > 0 && (ye = O, Ce = !0);
        }
        ye || (ye = s, Ce = !1);
      }
    }
    const ge = ye ? ye.unit === "W" ? ye.val / 1e3 : ye.val : 0, He = ((Ui = e.grid) == null ? void 0 : Ui.power_sign) || ((Ji = e.grid) != null && Ji.invert_power ? "inverted" : "deye"), ot = ((Xi = e.grid) == null ? void 0 : Xi.selling_enabled) === !0, Ie = (((Zi = e.grid) == null ? void 0 : Zi.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, Ae = this._getEntityState((Qi = e.grid) == null ? void 0 : Qi.status_entity), Ne = this._getEntityState(((ea = e.grid) == null ? void 0 : ea.voltage_entity) || ((ta = e.inverter) == null ? void 0 : ta.voltage_entity)), je = ((ia = e.grid) == null ? void 0 : ia.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90;
    let $e = !0;
    if (Ae) {
      const s = String(Ae.raw || Ae.val).toLowerCase();
      (s === "off" || s === "false" || s === "0" || s === "disconnected" || s === "offline" || s === "unavailable" || s === "unknown") && ($e = !1);
    } else Ne && typeof Ne.val == "number" && !isNaN(Ne.val) && Ne.val < je && ($e = !1);
    let ee = !1, C = !1, M = 0;
    if (!$e)
      M = 0, ee = !1, C = !1;
    else {
      if (Ce)
        M = Math.abs(ge), M >= Ie && (He === "deye" ? ge < 0 ? ee = !0 : C = !0 : ge > 0 ? ee = !0 : C = !0);
      else {
        if (He === "deye") {
          if (ge > 0)
            M = ge, M >= Ie && (C = !0);
          else if (ge < 0) {
            const D = Math.abs(ge), O = Math.max(0, D - Ee);
            O >= Ie ? (M = O, ee = !0) : (M = 0, ee = !1);
          }
        } else if (ge < 0)
          M = Math.abs(ge), M >= Ie && (C = !0);
        else if (ge > 0) {
          const D = Math.max(0, ge - Ee);
          D >= Ie ? (M = D, ee = !0) : (M = 0, ee = !1);
        }
        if (((aa = e.grid) == null ? void 0 : aa.auto_calculate) !== !1 && C) {
          const D = Math.max(Ee, b), O = u + T + (z > 0 ? z : 0) + Be;
          be + D + J + B > O + M + 0.1 && (M = M + D);
        }
      }
      const s = u + T + (z > 0 ? z : 0) + Be, F = s < 0.15, H = s < be + 0.05;
      if (!Ce && (F || H)) {
        const X = this._getEntityState(((oa = e.grid) == null ? void 0 : oa.voltage_entity) || ((sa = e.inverter) == null ? void 0 : sa.voltage_entity)), D = this._getEntityState(((na = e.inverter) == null ? void 0 : na.current_entity) || "sensor.deye_12k_inverter_grid_current"), O = X && typeof X.val == "number" && !isNaN(X.val) ? X.val : 0, W = D && typeof D.val == "number" && !isNaN(D.val) ? D.val : 0, Z = O >= je && W >= 1, q = be > 0.2 && s < 0.1;
        if (Z) {
          const ie = O * W * 0.9 / 1e3;
          (M < 0.05 || ie > M + 0.2) && (M = ie, C = !0, ee = !1);
        } else if (q && (M < 0.05 || M < be - 0.05)) {
          const ie = Math.max(Ee, b);
          M = Math.max(M, be + 0.25 + ie), C = !0, ee = !1;
        }
      }
      const S = Math.max(0, u + T + (z > 0 ? z : 0) + Be - be - Ee - J - B);
      ee && M > S + 0.1 && (M = S, M < Ie && (ee = !1, M = 0)), ee && !ot && (ee = !1, M = 0);
    }
    const ne = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && ($e ? (this._nodes.gridPowerVal.innerText = `${M.toFixed(3)} ${t}`, ee ? this._nodes.gridPowerVal.style.color = "#34d399" : C ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${t}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && ($e ? ee ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : C ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), ne && ($e ? (ne.classList.add("glow-grid"), ne.style.borderColor = "rgba(56, 189, 248, 0.4)") : (ne.classList.remove("glow-grid"), ne.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const fe = this._getEntityState((ra = e.grid) == null ? void 0 : ra.import_daily_entity);
    this._nodes.gridImportDaily.innerText = fe ? `${fe.val.toFixed(2)} kWh` : "0.00 kWh";
    const _e = this._getEntityState((la = e.grid) == null ? void 0 : la.export_daily_entity);
    this._nodes.gridExportDaily.innerText = _e ? `${_e.val.toFixed(2)} kWh` : "0.00 kWh", this._calculateTariffs(fe ? fe.val : 0, _e ? _e.val : 0, p);
    const st = C ? M : 0, De = ee ? M : 0, nt = u + T + (z > 0 ? z : 0) + st + Be, bt = be + De + J + B, Et = Math.max(0, nt - bt), ze = this._getEntityState((da = e.inverter) == null ? void 0 : da.self_consumption_entity), rt = ze && typeof ze.val == "number" && !isNaN(ze.val) ? Math.max(0, ze.unit === "W" ? ze.val / 1e3 : ze.val) : null, $t = (((ca = e.inverter) == null ? void 0 : ca.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
    let Ge = 0, Pe = 0;
    if (at)
      if (Ge = Math.max(b, Ee), rt !== null)
        Pe = rt;
      else {
        const s = Math.max(0, nt - (be + De + Ge + J + B));
        Pe = s > 0 ? s : $t;
      }
    else
      rt !== null ? Pe = rt : Pe = Math.min(Et, $t), Ge = Math.max(b, Math.max(0, Et - Pe));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((pa = e.inverter) == null ? void 0 : pa.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", Pe < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(Pe * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${Pe.toFixed(3)} ${t}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${Ge.toFixed(3)} ${t}`;
    const St = this._getEntityState((ha = e.load) == null ? void 0 : ha.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = St ? `${St.val.toFixed(2)} kWh` : "12,40 kWh";
    const lt = ((ga = e.battery) == null ? void 0 : ga.parallel_batteries) || ((ua = (_a = e.battery) == null ? void 0 : _a.modules) == null ? void 0 : ua.length) || 2;
    let dt = 0;
    for (let s = 0; s < lt; s++) {
      const F = ((ya = (fa = e.battery) == null ? void 0 : fa.modules) == null ? void 0 : ya[s]) || ((ma = (ba = e.battery) == null ? void 0 : ba.module_entities) == null ? void 0 : ma[s]) || {}, H = F.capacity_kwh !== void 0 ? parseFloat(F.capacity_kwh) : s === 0 ? 7.88 : s === 1 ? 5.12 : (((va = e.battery) == null ? void 0 : va.capacity_kwh) || 13) / lt;
      dt += isNaN(H) ? 0 : H;
    }
    dt <= 0 && (dt = parseFloat((wa = e.battery) == null ? void 0 : wa.capacity_kwh) || 13);
    const mt = this._getEntityState(((xa = e.battery) == null ? void 0 : xa.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), vt = mt && !isNaN(mt.val) ? mt.val : null, wt = vt !== null && vt <= 40 ? vt : dt, Bt = this._getEntityState(((ka = e.battery) == null ? void 0 : ka.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), qt = Bt ? Bt.val : 80, Ht = wt * (qt / 100), Ct = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${Ht.toFixed(2).replace(".", ",")} ${Ct} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${wt.toFixed(1).replace(".", ",")})</span></span>`);
    const It = this._getEntityState(((Ea = e.battery) == null ? void 0 : Ea.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), jt = It ? It.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${jt.toFixed(1).replace(".", ",")}`);
    const Gt = ($a = e.battery) == null ? void 0 : $a.charge_daily_entity;
    let ct = this._getEntityState(Gt);
    ct || (ct = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge") || this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const Ot = (Sa = e.battery) == null ? void 0 : Sa.discharge_daily_entity;
    let pt = this._getEntityState(Ot);
    pt || (pt = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = ct ? `${ct.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = pt ? `${pt.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const Tt = [];
    for (let s = 1; s <= lt; s++) {
      const F = this.shadowRoot.getElementById(`batPackSoc_${s}`), H = this.shadowRoot.getElementById(`batPackVolt_${s}`), U = this.shadowRoot.getElementById(`batPackCurr_${s}`), S = this.shadowRoot.getElementById(`batPackPower_${s}`), X = this.shadowRoot.getElementById(`batPackTempVal_${s}`), D = this.shadowRoot.getElementById(`batPackDelta_${s}`), O = this.shadowRoot.getElementById(`batPackDeltaVal_${s}`), W = this.shadowRoot.getElementById(`batPackStateTag_${s}`), Z = this.shadowRoot.getElementById(`batPackKwh_${s}`), q = this.shadowRoot.getElementById(`batPackBar1_${s}`), ie = this.shadowRoot.getElementById(`batPackBar2_${s}`), Te = this.shadowRoot.getElementById(`batPackBar3_${s}`), pe = this.shadowRoot.getElementById(`batPackBar4_${s}`), ae = ((Ca = (Ba = e.battery) == null ? void 0 : Ba.modules) == null ? void 0 : Ca[s - 1]) || ((Ta = (Ia = e.battery) == null ? void 0 : Ia.module_entities) == null ? void 0 : Ta[s - 1]) || {}, Se = ae.soc_entity || ae.soc || `sensor.bms_rack${s}_soc`, Je = ae.current_entity || `sensor.bms_rack${s}_current`, ht = ae.voltage_entity || ae.volt || `sensor.bms_rack${s}_voltage`, Xe = ae.power_entity || `sensor.bms_rack${s}_power`, Ze = ae.temperature_entity || ae.temp || `sensor.bms_rack${s}_temperature`, Qe = ae.cell_delta_entity || ae.delta_entity || `sensor.bms_rack${s}_cell_delta`, et = this._getEntityState(Se), gt = this._getEntityState(Je), xt = this._getEntityState(ht), We = this._getEntityState(Xe), kt = this._getEntityState(Ze);
      let Q = this._getEntityState(Qe);
      if (Q || (Q = this._getEntityState(`sensor.bms_rack${s}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${s}_cell_difference`)), !Q && (ae.max_cell_voltage_entity || ae.min_cell_voltage_entity)) {
        const qe = this._getEntityState(ae.max_cell_voltage_entity), Ra = this._getEntityState(ae.min_cell_voltage_entity);
        if (qe && Ra) {
          const Xt = Math.abs(qe.val - Ra.val);
          Q = { val: Xt < 1 ? Math.round(Xt * 1e3) : Xt, unit: "mV" };
        }
      }
      const _t = et ? et.val : s === 1 ? 82 : s === 2 ? 85 : 75, ut = xt ? xt.val : s === 1 ? 54.1 : s === 2 ? 54 : 52.4, xe = gt ? gt.val : s === 1 ? 18.4 : s === 2 ? 25.2 : 8.2, Re = kt ? kt.val : s === 1 ? 36.5 : s === 2 ? 21 : 22.5;
      let Le = null;
      if (Q) {
        let qe = Q.val;
        qe < 1 && qe > 0 ? Le = Math.round(qe * 1e3) : Le = Math.round(qe);
      } else this._hass || (Le = s === 1 ? 12 : s === 2 ? 8 : 15);
      let Fe = 0;
      We ? Fe = Math.abs(this._formatPower(We).kw) : Fe = ut * Math.abs(xe) / 1e3;
      const Wt = (ae.capacity_kwh !== void 0 ? parseFloat(ae.capacity_kwh) : s === 1 ? 7.88 : s === 2 ? 5.12 : wt / lt) * (_t / 100);
      F && (F.innerText = `${_t.toFixed(0)}%`), H && (H.innerText = `${ut.toFixed(1).replace(".", ",")} V`), U && (U.innerText = `${Math.abs(xe).toFixed(1).replace(".", ",")} A`), S && (S.innerText = `${Fe.toFixed(2).replace(".", ",")} ${t}`), X && (X.innerText = `${Re.toFixed(1).replace(".", ",")}`), O && (Le !== null && !isNaN(Le) ? (O.innerText = `${Le} mV`, D && (D.style.display = "inline-flex", Le <= 25 ? (D.style.color = "#34d399", D.style.background = "rgba(52, 211, 153, 0.12)", D.style.borderColor = "rgba(52, 211, 153, 0.3)") : Le <= 50 ? (D.style.color = "#fbbf24", D.style.background = "rgba(251, 191, 36, 0.12)", D.style.borderColor = "rgba(251, 191, 36, 0.3)") : (D.style.color = "#f87171", D.style.background = "rgba(248, 113, 113, 0.16)", D.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : D && (D.style.display = "none")), Z && (Z.innerText = `~${Wt.toFixed(2).replace(".", ",")} ${Ct}`);
      let me = !1;
      de ? me = !1 : ce ? me = !0 : gt ? me = (((Pa = e.battery) == null ? void 0 : Pa.power_sign) || "deye") === "deye" ? xe < 0 : xe > 0 : me = xe < 0;
      const ft = this.shadowRoot.getElementById(`batBranchBadge_${s}`);
      ft && (Fe < 0.02 ? (ft.className = "es-bat-branch-badge es-mono idle", ft.innerHTML = `<span>0.00 ${t}</span>`) : me ? (ft.className = "es-bat-branch-badge es-mono charge", ft.innerHTML = `<span>${Fe.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↓</span>`) : (ft.className = "es-bat-branch-badge es-mono discharge", ft.innerHTML = `<span>${Fe.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↑</span>`));
      const tt = this.shadowRoot.getElementById(`batPackCard_${s}`), Ma = tt == null ? void 0 : tt.querySelector(".es-battery-gauge"), Na = tt == null ? void 0 : tt.querySelector(".es-battery-gauge-nipple");
      tt && (tt.style.borderColor = me ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), Ma && (Ma.style.borderColor = me ? "#10b981" : "#ef4444"), Na && (Na.style.background = me ? "#10b981" : "#ef4444"), W && (me ? (W.className = "es-bat-state-tag charge", W.innerText = this._t("bat_charge"), W.style.color = "#34d399", W.style.background = "rgba(16, 185, 129, 0.18)", W.style.borderColor = "rgba(16, 185, 129, 0.4)") : (W.className = "es-bat-state-tag discharge", W.innerText = this._t("bat_discharge"), W.style.color = "#f87171", W.style.background = "rgba(239, 68, 68, 0.18)", W.style.borderColor = "rgba(239, 68, 68, 0.4)")), S && (S.style.color = me ? "#34d399" : "#f87171"), U && (U.style.color = me ? "#38bdf8" : "#f87171");
      const Kt = me ? "active-green" : "active-red";
      q && ie && Te && pe && (q.className = `es-bat-bar ${_t >= 10 ? Kt : ""}`, ie.className = `es-bat-bar ${_t >= 35 ? Kt : ""}`, Te.className = `es-bat-bar ${_t >= 65 ? Kt : ""}`, pe.className = `es-bat-bar ${_t >= 85 ? Kt : ""}`), Tt.push({ kwNum: Fe, isChg: me });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      $e ? ge : 0,
      ee,
      C,
      u,
      Ge,
      ue,
      ce,
      de,
      B,
      Tt,
      J,
      b,
      z
    ), this._updateControlSliders();
  }
  _setupResizeObserver() {
    var t;
    if (this._resizeObserver) return;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".energy-station-container");
    e && (window.ResizeObserver && (this._resizeObserver = new ResizeObserver(() => {
      this._updateFlowPaths();
    }), this._resizeObserver.observe(e)), this._rAF(() => this._updateFlowPaths()), setTimeout(() => this._updateFlowPaths(), 150));
  }
  _updateFlowPaths() {
    var e, t, n, c, r, d, h, u, E;
    try {
      const I = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!I) return;
      const m = I.getBoundingClientRect();
      if (m.width === 0 || m.height === 0) return;
      const y = this._config || he, k = this._scale || 1, p = (f, $ = 0.5, B = 0.5) => {
        if (!f) return null;
        const b = f.getBoundingClientRect();
        return {
          x: Math.round((b.left - m.left + b.width * $) / k),
          y: Math.round((b.top - m.top + b.height * B) / k)
        };
      }, _ = (f, $, B) => {
        const b = this.shadowRoot.getElementById(f), P = this.shadowRoot.getElementById($);
        b && b.setAttribute("d", B || ""), P && P.setAttribute("d", B || "");
      }, x = this.shadowRoot.getElementById("gridNode"), g = this.shadowRoot.getElementById("inverterNode"), i = this.shadowRoot.getElementById("essentialNode"), a = this.shadowRoot.getElementById("totalPvPowerBadge"), o = this.shadowRoot.getElementById("masterBatteryHub"), v = this.shadowRoot.getElementById("carNode");
      if (x && g) {
        const f = x.getBoundingClientRect(), $ = g.getBoundingClientRect();
        if (f.bottom < $.top + 30) {
          const b = p(x, 0.7, 1), P = p(g, 0.2, 0);
          if (b && P) {
            const G = Math.round((b.y + P.y) / 2), K = `M ${b.x} ${b.y} C ${b.x} ${G}, ${P.x} ${G}, ${P.x} ${P.y}`;
            _("pathGridInvBase", "pathGridInvFlow", K);
          }
        } else {
          const b = Math.round(($.top - m.top + $.height * 0.55) / k), P = Math.round((f.right - m.left) / k), G = Math.round(($.left - m.left) / k), K = Math.round((f.top - m.top + f.height * 0.5) / k);
          let re = "";
          if (Math.abs(K - b) <= 8)
            re = `M ${P} ${b} L ${G} ${b}`;
          else {
            const le = Math.round(P + 24);
            re = `M ${P} ${K} C ${le} ${K}, ${le} ${b}, ${G} ${b}`;
          }
          _("pathGridInvBase", "pathGridInvFlow", re);
        }
      }
      if (g && i) {
        const f = i.getBoundingClientRect(), $ = g.getBoundingClientRect();
        if (f.bottom < $.top + 30) {
          const b = p(g, 0.8, 0), P = p(i, 0.3, 1);
          if (b && P) {
            const G = Math.round((b.y + P.y) / 2), K = `M ${b.x} ${b.y} C ${b.x} ${G}, ${P.x} ${G}, ${P.x} ${P.y}`;
            _("pathInvLoadBase", "pathInvLoadFlow", K);
          }
        } else {
          const b = Math.round(($.top - m.top + $.height * 0.55) / k), P = Math.round(($.right - m.left) / k), G = Math.round((f.left - m.left) / k), K = Math.round((f.top - m.top + f.height * 0.5) / k);
          let re = "";
          if (Math.abs(K - b) <= 8)
            re = `M ${P} ${b} L ${G} ${b}`;
          else {
            const le = Math.round(G - 24);
            re = `M ${P} ${b} C ${le} ${b}, ${le} ${K}, ${G} ${K}`;
          }
          _("pathInvLoadBase", "pathInvLoadFlow", re);
        }
      }
      if (a && g) {
        const f = p(a, 0.5, 1), $ = p(g, 0.5, 0);
        if (f && $) {
          const B = `M ${f.x} ${f.y} L ${$.x} ${$.y}`;
          _("pathSolarInvBase", "pathSolarInvFlow", B);
        }
      }
      if (g && o) {
        const f = p(g, 0.5, 1), $ = p(o, 0.5, 0);
        if (f && $) {
          const B = `M ${f.x} ${f.y} L ${$.x} ${$.y}`;
          _("pathInvBatBase", "pathInvBatFlow", B);
        }
      }
      const w = this.shadowRoot.getElementById("nonEssentialNode"), V = w && !w.classList.contains("hidden") && w.offsetHeight > 0, R = v && !v.classList.contains("hidden") && v.offsetHeight > 0;
      if (x && V) {
        const f = p(x, 0.5, 1), $ = p(w, 0.5, 0);
        if (f && $) {
          const B = `M ${f.x} ${f.y} L ${$.x} ${$.y}`;
          _("pathGridNonEssBase", "pathGridNonEssFlow", B);
        }
      } else
        _("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (R) {
        const f = V ? w : x;
        if (f) {
          const $ = p(f, 0.5, 1), B = p(v, 0.5, 0);
          if ($ && B) {
            const b = `M ${$.x} ${$.y} L ${B.x} ${B.y}`;
            _("pathNonEssCarBase", "pathNonEssCarFlow", b);
          }
        } else
          _("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        _("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const l = this.shadowRoot.getElementById("subloadsBusContainer");
      if (i && l) {
        const f = p(i, 0.5, 1), $ = p(l, 0.5, 0);
        if (f && $) {
          const B = `M ${f.x} ${f.y} L ${$.x} ${$.y}`;
          _("pathLoadSubloadsBase", "pathLoadSubloadsFlow", B);
        }
      } else
        _("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const T = this.shadowRoot.getElementById("auxNode");
      if (g && T && !T.classList.contains("hidden") && T.offsetHeight > 0) {
        const f = p(T, 0.35, 1), $ = p(g, 0.9, 0);
        if (f && $) {
          const B = Math.round((f.y + $.y) / 2), b = `M ${f.x} ${f.y} C ${f.x} ${B}, ${$.x} ${B}, ${$.x} ${$.y}`;
          _("pathInvAuxBase", "pathInvAuxFlow", b);
        }
      } else
        _("pathInvAuxBase", "pathInvAuxFlow", "");
      _("pathBatStemBase", "pathBatStemFlow", "");
      const z = this.shadowRoot.getElementById("windStationContainer"), j = ((t = y.wind) == null ? void 0 : t.show) !== !1 || ((n = y.aux) == null ? void 0 : n.type) === "wind" ? ((c = y.wind) == null ? void 0 : c.turbine_count) || ((d = (r = y.wind) == null ? void 0 : r.turbines) == null ? void 0 : d.length) || 2 : 0;
      for (let f = 1; f <= 4; f++)
        if (f <= j && z && !z.classList.contains("hidden")) {
          const $ = this.shadowRoot.getElementById(`turbineCard_${f}`);
          if ($ && o) {
            const B = p($, 0.5, 1), b = j === 1 ? 0.5 : 0.28 + (f - 1) / (j - 1) * 0.44, P = p(o, b, 0);
            if (B && P) {
              const G = `M ${B.x} ${B.y} L ${P.x} ${P.y}`;
              _(`pathTurbine${f}Base`, `pathTurbine${f}Flow`, G);
            }
          } else
            _(`pathTurbine${f}Base`, `pathTurbine${f}Flow`, "");
        } else
          _(`pathTurbine${f}Base`, `pathTurbine${f}Flow`, "");
      const J = ((h = y.battery) == null ? void 0 : h.parallel_batteries) || ((E = (u = y.battery) == null ? void 0 : u.modules) == null ? void 0 : E.length) || 2;
      for (let f = 1; f <= 8; f++) {
        const $ = this.shadowRoot.getElementById(`batPackCard_${f}`), B = this.shadowRoot.getElementById(`batBranchBadge_${f}`);
        if (f <= J && o && $) {
          const b = p(o, 0.5, 1), P = p($, 0.5, 0);
          if (b && P) {
            const G = Math.round(b.y + (P.y - b.y) * 0.45);
            let K = "";
            Math.abs(b.x - P.x) <= 4 ? K = `M ${b.x} ${b.y} L ${P.x} ${P.y}` : K = `M ${b.x} ${b.y} C ${b.x} ${G}, ${P.x} ${G}, ${P.x} ${P.y}`, _(`pathBat${f}Base`, `pathBat${f}Flow`, K), B && (B.style.left = `${P.x}px`, B.style.top = `${G}px`, B.style.display = "flex");
          } else
            _(`pathBat${f}Base`, `pathBat${f}Flow`, ""), B && (B.style.display = "none");
        } else
          _(`pathBat${f}Base`, `pathBat${f}Flow`, ""), B && (B.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, t, n, c, r;
    try {
      const d = this._config || he, h = this._scale || 1, u = this.shadowRoot.getElementById("solarBusSvg"), E = ((e = d.solar) == null ? void 0 : e.pv_count) || ((n = (t = d.solar) == null ? void 0 : t.strings) == null ? void 0 : n.length) || 3;
      if (u && E > 0) {
        const y = u.getBoundingClientRect(), k = this.shadowRoot.getElementById("pvPanel_1"), p = this.shadowRoot.getElementById(`pvPanel_${E}`), _ = this.shadowRoot.getElementById("solarBusBase"), x = this.shadowRoot.getElementById("solarFlowCollector"), g = this.shadowRoot.getElementById("solarBusStemBase"), i = this.shadowRoot.getElementById("solarBusStemFlow"), a = this.shadowRoot.getElementById("solarBusFeeders");
        if (k && p && y.width > 0) {
          const o = k.getBoundingClientRect(), v = p.getBoundingClientRect(), w = Math.round((o.left - y.left + o.width / 2) / h), V = Math.round((v.left - y.left + v.width / 2) / h), R = 13, l = Math.round((w + V) / 2);
          if (_ && (_.setAttribute("x1", w), _.setAttribute("y1", R), _.setAttribute("x2", V), _.setAttribute("y2", R)), x && (x.setAttribute("x1", w), x.setAttribute("y1", R), x.setAttribute("x2", V), x.setAttribute("y2", R)), g && (g.setAttribute("x1", l), g.setAttribute("y1", R), g.setAttribute("x2", l), g.setAttribute("y2", 26)), i && (i.setAttribute("x1", l), i.setAttribute("y1", R), i.setAttribute("x2", l), i.setAttribute("y2", 26)), a) {
            let T = "";
            for (let z = 1; z <= E; z++) {
              const Y = this.shadowRoot.getElementById(`pvPanel_${z}`);
              if (Y) {
                const j = Y.getBoundingClientRect(), J = Math.round((j.left - y.left + j.width / 2) / h);
                T += `
                  <line x1="${J}" y1="0" x2="${J}" y2="${R}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${J}" y1="0" x2="${J}" y2="${R}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            a.innerHTML = T;
          }
        }
      }
      const I = this.shadowRoot.getElementById("subloadsBusSvg"), m = ((r = (c = d.load) == null ? void 0 : c.subloads) == null ? void 0 : r.length) || 3;
      if (I && m > 0) {
        const y = I.getBoundingClientRect(), k = this.shadowRoot.getElementById("subloadCard_0"), p = this.shadowRoot.getElementById(`subloadCard_${m - 1}`), _ = this.shadowRoot.getElementById("essentialNode"), x = this.shadowRoot.getElementById("subloadsBusBase"), g = this.shadowRoot.getElementById("subloadsFlowCollector"), i = this.shadowRoot.getElementById("subloadsBusStemBase"), a = this.shadowRoot.getElementById("subloadsBusStemFlow"), o = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (k && p && y.width > 0) {
          const v = k.getBoundingClientRect(), w = p.getBoundingClientRect(), V = Math.round((v.left - y.left + v.width / 2) / h), R = Math.round((w.left - y.left + w.width / 2) / h), l = 13;
          let T = Math.round((V + R) / 2);
          if (_) {
            const j = _.getBoundingClientRect();
            T = Math.round((j.left - y.left + j.width / 2) / h);
          }
          const z = Math.min(V, T), Y = Math.max(R, T);
          if (x && (x.setAttribute("x1", z), x.setAttribute("y1", l), x.setAttribute("x2", Y), x.setAttribute("y2", l)), g && (g.setAttribute("x1", z), g.setAttribute("y1", l), g.setAttribute("x2", Y), g.setAttribute("y2", l)), i && (i.setAttribute("x1", T), i.setAttribute("y1", 0), i.setAttribute("x2", T), i.setAttribute("y2", l)), a && (a.setAttribute("x1", T), a.setAttribute("y1", 0), a.setAttribute("x2", T), a.setAttribute("y2", l)), o) {
            let j = "";
            for (let J = 0; J < m; J++) {
              const f = this.shadowRoot.getElementById(`subloadCard_${J}`);
              if (f) {
                const $ = f.getBoundingClientRect(), B = Math.round(($.left - y.left + $.width / 2) / h);
                j += `
                  <line x1="${B}" y1="${l}" x2="${B}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${B}" y1="${l}" x2="${B}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            o.innerHTML = j;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, t, n, c, r) {
    if (!e) return;
    if (!r) {
      e.setAttribute("class", `flow-pulse ${t} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const d = n ? "flow-reverse" : "flow-forward", h = n ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${t} ${d}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", c), e.style.animation = `${h} ${c} linear infinite`;
  }
  _updateFlowAnimations(e, t, n, c, r, d, h, u, E, I = [], m = 0, y = 0, k = 0) {
    var Ee, at, ye, Ce, ge, He, ot, Ie, Ae, Ne, je, $e, ee;
    const p = this._config || he, _ = ((Ee = p.animations) == null ? void 0 : Ee.enabled) !== !1, x = ((at = p.animations) == null ? void 0 : at.speed) || 1.2, g = (C, M = 10) => {
      const ne = Math.abs(C);
      if (ne < 0.05) return "2.5s";
      const fe = Math.min(1, ne / M);
      return `${Math.max(0.4, (2.6 - fe * 1.9) * (x / 1.2)).toFixed(2)}s`;
    }, i = this.shadowRoot.getElementById("pathGridInvFlow"), a = Math.abs(e), o = (((ye = p.grid) == null ? void 0 : ye.min_power_threshold) !== void 0 ? p.grid.min_power_threshold : 50) / 1e3, v = ((Ce = p.grid) == null ? void 0 : Ce.selling_enabled) === !0, w = _ && a >= o && (n || t && v);
    this._applyFlowAnimation(i, "flow-grid", t, g(e, 10), w);
    const V = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(V, "flow-solar", !1, g(c, 12), _ && c >= 0.05);
    const R = this.shadowRoot.getElementById("pathInvLoadFlow"), l = Math.abs(r);
    this._applyFlowAnimation(R, "flow-load", !1, g(r, 10), _ && l >= 0.05);
    const T = this.shadowRoot.getElementById("pathInvBatFlow"), z = Math.abs(d), Y = _ && z >= 0.02 && (h || u), j = h ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(T, j, u, g(d, 8), Y);
    const J = this.shadowRoot.getElementById("pathGridNonEssFlow"), f = Math.abs(m);
    this._applyFlowAnimation(J, "flow-grid", !1, g(m, 5), _ && f >= 0.05);
    const $ = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), B = Math.abs(E);
    this._applyFlowAnimation($, "flow-car", !1, g(E, 7), _ && B >= 0.05);
    const b = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), P = Math.abs(y || r);
    this._applyFlowAnimation(b, "flow-load", !1, g(P, 8), _ && P >= 0.05);
    const G = this.shadowRoot.getElementById("pathInvAuxFlow"), K = Math.abs(k);
    this._applyFlowAnimation(G, "flow-aux", !0, g(k, 5), _ && K >= 0.05);
    const re = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(re, j, u, g(d, 8), Y);
    const le = this.shadowRoot.getElementById("solarFlowCollector"), ke = this.shadowRoot.getElementById("solarBusStemFlow");
    if (le)
      if (!_ || c < 0.05)
        le.style.opacity = "0.2", le.style.animation = "none", ke && (ke.style.opacity = "0.2", ke.style.animation = "none");
      else {
        const C = g(c, 12);
        le.style.opacity = "1", le.setAttribute("class", "flow-line"), le.style.animation = `esDashflow ${C} linear infinite`, ke && (ke.style.opacity = "1", ke.setAttribute("class", "flow-line"), ke.style.animation = `esDashflow ${C} linear infinite`);
      }
    const ce = this.shadowRoot.getElementById("subloadsFlowCollector"), de = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (ce)
      if (!_ || P < 0.05)
        ce.style.opacity = "0.2", ce.style.animation = "none", de && (de.style.opacity = "0.2", de.style.animation = "none");
      else {
        const C = g(P, 8);
        ce.style.opacity = "1", ce.setAttribute("class", "flow-line"), ce.style.animation = `esDashflow ${C} linear infinite`, de && (de.style.opacity = "1", de.setAttribute("class", "flow-line"), de.style.animation = `esDashflow ${C} linear infinite`);
      }
    const ue = this.shadowRoot.getElementById("batteryFlowCollector"), ve = this.shadowRoot.getElementById("batteryBusStemFlow"), be = this.shadowRoot.getElementById("batteryBusFeeders"), Be = u ? "#f87171" : "#34d399", Ve = u ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (ue)
      if (ue.style.stroke = Be, ue.style.filter = Ve, ve && (ve.style.stroke = Be, ve.style.filter = Ve), !_ || !Y)
        ue.style.opacity = "0.2", ue.style.animation = "none", ve && (ve.style.opacity = "0.2", ve.style.animation = "none");
      else {
        const C = g(d, 8), M = u ? "esDashflowRev" : "esDashflow";
        ue.style.opacity = "1", ue.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), ue.style.animation = `${M} ${C} linear infinite`, ve && (ve.style.opacity = "1", ve.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), ve.style.animation = `${M} ${C} linear infinite`);
      }
    be && be.querySelectorAll("line").forEach((C) => {
      if (C.style.stroke = Be, C.style.filter = Ve, !_ || !Y)
        C.style.opacity = "0.2", C.style.animation = "none";
      else {
        const M = g(d, 8), ne = u ? "esDashflowRev" : "esDashflow";
        C.style.opacity = "1", C.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), C.style.animation = `${ne} ${M} linear infinite`;
      }
    });
    for (let C = 1; C <= 8; C++) {
      const M = this.shadowRoot.getElementById(`pathBat${C}Flow`);
      if (!M) continue;
      const ne = I[C - 1], fe = ne ? ne.kwNum : 0, _e = _ && (fe >= 0.02 || Y), st = u;
      this._applyFlowAnimation(M, j, st, g(fe || d, 8), _e);
    }
    for (let C = 0; C < 6; C++) {
      const M = this.shadowRoot.getElementById(`pathSubload${C}Flow`);
      if (!M) continue;
      const ne = (He = (ge = p.load) == null ? void 0 : ge.subloads) == null ? void 0 : He[C], fe = ne ? this._getEntityState(ne.entity) : null, _e = fe ? this._formatPower(fe, 2).kw : C === 0 ? 2 : C === 1 ? 3 : 4;
      this._applyFlowAnimation(M, "flow-load", !1, g(_e, 8), _ && _e >= 0.05);
    }
    const it = ((ot = p.wind) == null ? void 0 : ot.show) !== !1 || ((Ie = p.aux) == null ? void 0 : Ie.type) === "wind", yt = it ? ((Ae = p.wind) == null ? void 0 : Ae.turbine_count) || ((je = (Ne = p.wind) == null ? void 0 : Ne.turbines) == null ? void 0 : je.length) || 2 : 0, we = (($e = p.wind) == null ? void 0 : $e.turbines) || [];
    for (let C = 1; C <= 4; C++) {
      const M = this.shadowRoot.getElementById(`pathTurbine${C}Flow`);
      if (M)
        if (C <= yt && it) {
          const ne = we[C - 1] || {}, fe = this._hass ? 0 : C === 1 ? 1.45 : 0.85, _e = this._getEntityState(ne.power_entity || `sensor.wind_turbine_${C}_power`);
          let De = this._formatPower(_e, fe).kw * 1e3;
          _e && _e.unit === "W" && (De = _e.val);
          const nt = ne.animation_threshold ?? ((ee = p.wind) == null ? void 0 : ee.animation_threshold) ?? 50, bt = De >= nt;
          this._applyFlowAnimation(M, "flow-wind", !1, g(De / 1e3, 3), _ && bt);
        } else
          this._applyFlowAnimation(M, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", Va);
window.customCards = window.customCards || [];
window.customCards.some((Ut) => Ut.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  Va as EnergyStationCard,
  La as I18N
};
