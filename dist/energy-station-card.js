const oe = {
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
}, J = 'width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"', X = {
  sun: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  pv_panel: `<svg ${J} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg ${J} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg ${J} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  settings: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg ${J} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  globe: `<svg ${J} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
class Pa extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general";
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    this._config = JSON.parse(JSON.stringify(e || oe)), this.render();
  }
  connectedCallback() {
    this.render();
  }
  _valueChanged(e, i) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const p = e.split(".");
    let l = this._config;
    for (let c = 0; c < p.length - 1; c++)
      l[p[c]] || (l[p[c]] = {}), l = l[p[c]];
    l[p[p.length - 1]] = i;
    const r = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(r);
  }
  _switchTab(e) {
    this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || oe)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    ], this._config.inverter.power_entity = "sensor.solarman_inverter_power", this._config.battery.soc_entity = "sensor.solarman_battery_soc", this._config.battery.power_entity = "sensor.solarman_battery_power", this._config.grid.power_entity = "sensor.solarman_grid_external_power", this._config.load.auto_calculate = !0, this._config.load.separate_export = !0, this._config.load.essential_power_entity = "sensor.solarman_essential_load");
    const i = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(i), this.render();
  }
  render() {
    var i, p, l, r, c, b, g, C, f, v, x, m, h, d, s, a, t, _, E, I, M, R, n, S, N, q, z, W, ee, y, w, $, u, k, L, A, Q, K, ce, _e, ye, fe, ne, Me, ze, Be, We, ct, Fe, me, Ve, He, pe, he, ke, pt, je, Xe, Ze, Qe, et, tt, T, O, ae, re, se, ve, $e, ue, Le, Tt, Pt, Mt, ht, zt, Ft, qe, Ee, vt, it, at, gt, _t, yt, xt, Vt, Lt, wt, kt, Nt;
    if (!this._config) return;
    const e = this._config;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: #e2e8f0;
          background: #090e1a;
          border-radius: 12px;
          padding: 14px;
          box-sizing: border-box;
        }
        .editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #1e293b;
          margin-bottom: 12px;
        }
        .editor-title {
          font-size: 15px;
          font-weight: 700;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tabs {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding-bottom: 6px;
          border-bottom: 1px solid #1e293b;
          margin-bottom: 14px;
        }
        .tab-btn {
          background: #0f172a;
          border: 1px solid #1e293b;
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tab-btn.active {
          background: #0284c7;
          border-color: #38bdf8;
          color: #ffffff;
        }
        .field-group {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 10px;
          padding: 12px;
          margin-bottom: 12px;
        }
        .field-group-title {
          font-weight: 700;
          font-size: 12px;
          color: #38bdf8;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .field-row {
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
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
          border-radius: 6px;
          padding: 7px 10px;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          outline: none;
          box-sizing: border-box;
          width: 100%;
        }
        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border-color: #38bdf8;
        }
        .slider-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        input[type="range"] {
          flex: 1;
          accent-color: #0284c7;
        }
        .preset-badge {
          background: #1e293b;
          border: 1px solid #334155;
          color: #f1f5f9;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: background 0.2s;
        }
        .preset-badge:hover {
          background: #0284c7;
          border-color: #38bdf8;
        }
      </style>

      <div class="editor-header">
        <div class="editor-title">
          <span>⚡ Energy Station</span>
          <span style="font-size: 10px; background: rgba(245,158,11,0.2); color: #fbbf24; padding: 2px 6px; border-radius: 4px;">HA PRO</span>
        </div>
        <div>
          <button class="preset-badge" id="btnPresetEsp">⚡ ESPHome Deye</button>
          <button class="preset-badge" id="btnPresetSolarman">☀️ Solarman</button>
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
          <div class="field-row">
            <label>Назва станції / Заголовок:</label>
            <input type="text" id="title" value="${e.title || "Energy Station"}">
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
            <label>Максимальна ширина картки (Max Width):</label>
            <select id="cardMaxWidth">
              <option value="1400px" ${e.max_width === "1400px" || !e.max_width ? "selected" : ""}>1400px (Стандартна)</option>
              <option value="1600px" ${e.max_width === "1600px" ? "selected" : ""}>1600px (Широка)</option>
              <option value="1800px" ${e.max_width === "1800px" ? "selected" : ""}>1800px (Дуже широка / 2K)</option>
              <option value="100%" ${e.max_width === "100%" ? "selected" : ""}>100% (На всю ширину панелі)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Панель перемикачів на картці:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Показувати блок контролю струму та теми/мови</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор струму заряду АКБ від сонця:</label>
            <input type="text" id="ctrlSolarCharge" value="${((i = e.controls) == null ? void 0 : i.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
          </div>
          <div class="field-row">
            <label>Сенсор потужності продажу в мережу:</label>
            <input type="text" id="ctrlSellPower" value="${((p = e.controls) == null ? void 0 : p.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
          </div>
          <div class="field-row">
            <label>Сенсор струму заряду АКБ від мережі:</label>
            <input type="text" id="ctrlGridCharge" value="${((l = e.controls) == null ? void 0 : l.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
          </div>
          <div class="field-row">
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((r = e.animations) == null ? void 0 : r.enabled) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((c = e.animations) == null ? void 0 : c.speed) || 1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((b = e.animations) == null ? void 0 : b.speed) || 1.2}s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: SOLAR -->
      <div style="display: ${this._currentTab === "solar" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">☀️ Сонячне поле (PV панелі)</div>
          <div class="field-row">
            <label>Кількість панелей/стрингів (1 - 16):</label>
            <div class="slider-row">
              <input type="range" id="solarPvCount" min="1" max="16" value="${((g = e.solar) == null ? void 0 : g.pv_count) || 3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((C = e.solar) == null ? void 0 : C.pv_count) || 3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((f = e.solar) == null ? void 0 : f.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((v = e.solar) == null ? void 0 : v.daily_yield_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((x = e.solar) == null ? void 0 : x.target_daily_yield) || 55}">
          </div>
          <div class="field-row">
            <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
            <input type="number" step="0.1" id="solarInstalledPower" value="${((m = e.solar) == null ? void 0 : m.installed_power) !== void 0 ? e.solar.installed_power : 12}" placeholder="12.0">
            <span style="font-size: 10px; color: #94a3b8;">Повна встановлена потужність усіх сонячних панелей для розрахунку % поточної генерації СЕС. Якщо не вказано — сумує потужність окремих полів.</span>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((h = e.solar) == null ? void 0 : h.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((d = e.solar) == null ? void 0 : d.pv_count) || 3 }).map((de, B) => {
      var Ye, Ue;
      const P = B + 1, F = ((Ue = (Ye = e.solar) == null ? void 0 : Ye.strings) == null ? void 0 : Ue[B]) || {}, Se = `sensor.deye_12k_inverter_pv${P}_voltage`, Ge = `sensor.deye_12k_inverter_pv${P}_current`, Oe = `sensor.deye_12k_inverter_pv${P}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${P} (Стрінг ${P})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${B}" value="${F.name || `PV ${P}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${P} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${B}" value="${F.voltage_entity !== void 0 ? F.voltage_entity : Se}" placeholder="${Se}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${P} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${B}" value="${F.current_entity !== void 0 ? F.current_entity : Ge}" placeholder="${Ge}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${P} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${B}" value="${F.capacity_kw !== void 0 ? F.capacity_kw : 4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${P} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${B}" value="${F.power_entity !== void 0 ? F.power_entity : Oe}" placeholder="${Oe} (авто P = U × I)">
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
          <div class="field-row">
            <label>Модель / Назва на шильдику:</label>
            <input type="text" id="invModel" value="${((s = e.inverter) == null ? void 0 : s.model_name) || "DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((a = e.inverter) == null ? void 0 : a.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((t = e.inverter) == null ? void 0 : t.show_self_consumption) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${((_ = e.inverter) == null ? void 0 : _.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((E = e.inverter) == null ? void 0 : E.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((I = e.inverter) == null ? void 0 : I.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((M = e.inverter) == null ? void 0 : M.ac_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((R = e.inverter) == null ? void 0 : R.dc_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((n = e.inverter) == null ? void 0 : n.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((S = e.inverter) == null ? void 0 : S.current_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((N = e.inverter) == null ? void 0 : N.frequency_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((q = e.aux) == null ? void 0 : q.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((z = e.aux) == null ? void 0 : z.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((W = e.aux) == null ? void 0 : W.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((ee = e.aux) == null ? void 0 : ee.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((y = e.aux) == null ? void 0 : y.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((w = e.aux) == null ? void 0 : w.type) === "microinverter" && (!(($ = e.aux) != null && $.title) || ((u = e.aux) == null ? void 0 : u.title) === "Вітрогенератор") ? "Мікроінвертор" : ((k = e.aux) == null ? void 0 : k.title) || (((L = e.aux) == null ? void 0 : L.type) === "generator" ? "Генератор" : ((A = e.aux) == null ? void 0 : A.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((Q = e.aux) == null ? void 0 : Q.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((K = e.wind) == null ? void 0 : K.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((ce = e.wind) == null ? void 0 : ce.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((_e = e.wind) == null ? void 0 : _e.animation_threshold) || ((ye = e.aux) == null ? void 0 : ye.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((fe = e.wind) == null ? void 0 : fe.animation_threshold) || ((ne = e.aux) == null ? void 0 : ne.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Me = e.wind) == null ? void 0 : Me.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((ze = e.wind) == null ? void 0 : ze.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((Be = e.wind) == null ? void 0 : Be.turbine_count) || 2 }).map((de, B) => {
      var F, Se;
      const P = ((Se = (F = e.wind) == null ? void 0 : F.turbines) == null ? void 0 : Se[B]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${B}" value="${P.name || `Вітряк ${B + 1}`}" placeholder="Назва (напр. Вітряк ${B + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${B}" value="${P.power_entity || `sensor.wind_turbine_${B + 1}_power`}" placeholder="sensor.wind_turbine_${B + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${B}" value="${P.rpm_entity || P.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${B}" value="${P.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${B + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${B}" value="${P.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${B + 1}_monthly_energy">
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
          <div class="field-row">
            <label>Рівень заряду Battery SOC (%) (сенсор):</label>
            <input type="text" id="batSoc" value="${((We = e.battery) == null ? void 0 : We.soc_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((ct = e.battery) == null ? void 0 : ct.power_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((Fe = e.battery) == null ? void 0 : Fe.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((me = e.battery) == null ? void 0 : me.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Ve = e.battery) == null ? void 0 : Ve.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((He = e.battery) == null ? void 0 : He.current_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура АКБ (°C) та Загальний розбаланс банок (mV):</label>
            <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((pe = e.battery) == null ? void 0 : pe.temperature_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((he = e.battery) == null ? void 0 : he.cell_delta_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((ke = e.battery) == null ? void 0 : ke.capacity_entity) || ""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((pt = e.battery) == null ? void 0 : pt.charge_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((je = e.battery) == null ? void 0 : je.discharge_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Xe = e.battery) == null ? void 0 : Xe.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ze = e.battery) == null ? void 0 : Ze.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Qe = e.battery) == null ? void 0 : Qe.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((et = e.battery) == null ? void 0 : et.parallel_batteries) || 2 }).map((de, B) => {
      var Et, St, Bt, Ct;
      const P = B + 1, F = ((St = (Et = e.battery) == null ? void 0 : Et.modules) == null ? void 0 : St[B]) || ((Ct = (Bt = e.battery) == null ? void 0 : Bt.module_entities) == null ? void 0 : Ct[B]) || {}, Se = `sensor.bms_rack${P}_soc`, Ge = `sensor.bms_rack${P}_current`, Oe = `sensor.bms_rack${P}_voltage`, Ye = `sensor.bms_rack${P}_power`, Ue = `sensor.bms_rack${P}_temperature`, $t = `sensor.bms_rack${P}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${P} (Модуль ${P})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${B}" value="${F.name || `Батарея ${P}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${P} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${B}" value="${F.soc_entity !== void 0 ? F.soc_entity : F.soc !== void 0 ? F.soc : Se}" placeholder="${Se}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${P} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${B}" value="${F.current_entity !== void 0 ? F.current_entity : Ge}" placeholder="${Ge}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${P} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${B}" value="${F.voltage_entity !== void 0 ? F.voltage_entity : F.volt !== void 0 ? F.volt : Oe}" placeholder="${Oe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${P} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${B}" value="${F.temperature_entity !== void 0 ? F.temperature_entity : F.temp !== void 0 ? F.temp : Ue}" placeholder="${Ue}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${P} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${B}" value="${F.capacity_kwh !== void 0 ? F.capacity_kwh : P === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${P} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${B}" value="${F.cell_delta_entity !== void 0 ? F.cell_delta_entity : F.delta !== void 0 ? F.delta : $t}" placeholder="${$t}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${P} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${B}" value="${F.power_entity !== void 0 ? F.power_entity : Ye}" placeholder="${Ye} (авто P = U × I)">
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

          <div class="field-row" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 10px; margin-bottom: 12px;">
            <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; margin-bottom: 0;">
              <div>
                <span style="font-weight: 700; color: #38bdf8; font-size: 13px;">Дозволити продаж в мережу (Експорт)</span>
                <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">
                  Увімкніть, якщо станція продає надлишки («зелений тариф» / Net Billing). Якщо вимкнено (Zero Export) — анімація продажу ЗАВЖДИ вимкнена.
                </div>
              </div>
              <input type="checkbox" id="gridSellingEnabled" ${(tt = e.grid) != null && tt.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((T = e.grid) == null ? void 0 : T.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((O = e.grid) == null ? void 0 : O.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((ae = e.grid) == null ? void 0 : ae.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((re = e.grid) == null ? void 0 : re.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((se = e.grid) == null ? void 0 : se.voltage_entity) || ""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((ve = e.grid) == null ? void 0 : ve.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${(($e = e.grid) == null ? void 0 : $e.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((ue = e.grid) == null ? void 0 : ue.import_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Le = e.grid) == null ? void 0 : Le.export_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Tt = e.grid) == null ? void 0 : Tt.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Pt = e.grid) == null ? void 0 : Pt.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab === "loads" ? "block" : "none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="field-row">
            <label>Автоматичний розрахунок навантаження за балансом:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="loadAutoCalculate" ${((Mt = e.load) == null ? void 0 : Mt.auto_calculate) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Відокремлювати експорт від навантаження будинку:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="loadSeparateExport" ${((ht = e.load) == null ? void 0 : ht.separate_export) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Віднімати експорт у мережу від показників сенсора навантаження (Deye / Sunsynk)</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              У гібридних інверторах Deye сенсор Load Power або Inverter Power під час продажу в мережу підсумовує експорт з навантаженням будинку. Ця опція гарантує коректне розділення.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((zt = e.load) == null ? void 0 : zt.essential_power_entity) || ""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((Ft = e.load) == null ? void 0 : Ft.daily_house_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((qe = e.load) == null ? void 0 : qe.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Ee = e.load) == null ? void 0 : Ee.subloads) || []).map((de, B) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${B}" value="${de.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${B}" style="width: 140px;">
                  <option value="boiler" ${de.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${de.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${de.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${de.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${de.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${de.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${de.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${B}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${B}" value="${de.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
          
          <div class="field-row">
            <label>Увімкнути облік тарифів:</label>
            <input type="checkbox" id="tariffsEnabled" ${((vt = e.tariffs) == null ? void 0 : vt.enabled) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>

          <div class="field-row">
            <label>Валюта / позначення:</label>
            <input type="text" id="tariffCurrency" value="${((it = e.tariffs) == null ? void 0 : it.currency) || "грн"}" placeholder="грн або ₴" style="max-width: 120px;">
          </div>

          <div class="field-row">
            <label>☀️ Денний тариф (${((at = e.tariffs) == null ? void 0 : at.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((gt = e.tariffs) == null ? void 0 : gt.day_rate) ?? 4.32}" placeholder="4.32" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🌙 Нічний тариф (${((_t = e.tariffs) == null ? void 0 : _t.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((yt = e.tariffs) == null ? void 0 : yt.night_rate) ?? 2.16}" placeholder="2.16" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🟢 Зелений тариф / експорт (${((xt = e.tariffs) == null ? void 0 : xt.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Vt = e.tariffs) == null ? void 0 : Vt.export_rate) ?? 5.3}" placeholder="5.30" style="max-width: 140px;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px;">
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (de, B) => {
      var P;
      return `<option value="${B}" ${(((P = e.tariffs) == null ? void 0 : P.night_start_hour) ?? 23) === B ? "selected" : ""}>${String(B).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (de, B) => {
      var P;
      return `<option value="${B}" ${(((P = e.tariffs) == null ? void 0 : P.night_end_hour) ?? 7) === B ? "selected" : ""}>${String(B).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі (наприклад 22.9 кВт·год) на нічну (з 23:00 до 07:00) та денну зону за годинником або з історії Home Assistant.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="field-row">
            <label>Показувати вартість імпорту за сьогодні:</label>
            <input type="checkbox" id="tariffShowDailyCost" ${((Lt = e.tariffs) == null ? void 0 : Lt.show_daily_cost) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати дохід від експорту (Зелений тариф):</label>
            <input type="checkbox" id="tariffShowExportIncome" ${((wt = e.tariffs) == null ? void 0 : wt.show_export_income) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #34d399;">
          </div>
          <div class="field-row">
            <label>Показувати бейдж активного тарифу (🌙 Ніч / ☀️ День):</label>
            <input type="checkbox" id="tariffShowActiveBadge" ${((kt = e.tariffs) == null ? void 0 : kt.show_active_badge) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати заощадження від сонця (💰):</label>
            <input type="checkbox" id="tariffShowSolarSavings" ${((Nt = e.tariffs) == null ? void 0 : Nt.show_solar_savings) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
        </div>
      </div>
    `, this._bindEvents();
  }
  _bindEvents() {
    var c, b, g, C, f, v, x, m, h, d;
    const e = this.shadowRoot;
    e.querySelectorAll(".tab-btn").forEach((s) => {
      s.addEventListener("click", (a) => {
        this._switchTab(a.target.dataset.tab);
      });
    }), (c = e.getElementById("btnPresetEsp")) == null || c.addEventListener("click", () => this._applyPreset("deye_esphome")), (b = e.getElementById("btnPresetSolarman")) == null || b.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (s, a) => {
      const t = e.getElementById(s);
      t && t.addEventListener("input", (_) => this._valueChanged(a, _.target.value));
    }, p = (s, a) => {
      const t = e.getElementById(s);
      t && t.addEventListener("change", (_) => this._valueChanged(a, _.target.checked));
    }, l = (s, a, t, _ = "") => {
      const E = e.getElementById(s);
      E && E.addEventListener("input", (I) => {
        const M = parseFloat(I.target.value);
        if (t) {
          const R = e.getElementById(t);
          R && (R.innerText = `${M}${_}`);
        }
        this._valueChanged(a, M);
      });
    };
    i("title", "title"), i("themeMode", "theme_mode"), i("cardLanguage", "language"), (g = e.getElementById("cardScale")) == null || g.addEventListener("input", (s) => {
      const a = parseFloat(s.target.value), t = e.getElementById("cardScaleVal");
      t && (t.innerText = `${Math.round(a * 100)}%`), this._valueChanged("card_scale", a);
    }), i("cardMaxWidth", "max_width"), p("showQuickSettings", "show_quick_settings"), i("ctrlSolarCharge", "controls.solar_charge_entity"), i("ctrlSellPower", "controls.sell_power_entity"), i("ctrlGridCharge", "controls.grid_charge_entity"), p("animEnabled", "animations.enabled"), l("animSpeed", "animations.speed", "animSpeedVal", "s"), (C = e.getElementById("solarPvCount")) == null || C.addEventListener("input", (s) => {
      const a = parseInt(s.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = a, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < a; ) {
        const t = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${t}`,
          name: `PV ${t}`,
          capacity_kw: 4,
          voltage_entity: `sensor.deye_12k_inverter_pv${t}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${t}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${t}_power`
        });
      }
      this._valueChanged("solar.pv_count", a), this._valueChanged("solar.strings", this._config.solar.strings), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].name = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].voltage_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].current_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-power-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].power_entity = a.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-cap-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].capacity_kw = parseFloat(a.target.value) || 0, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), i("solarTotalPower", "solar.total_power_entity"), i("solarDailyYield", "solar.daily_yield_entity"), l("solarTargetDaily", "solar.target_daily_yield"), l("solarInstalledPower", "solar.installed_power"), i("invModel", "inverter.model_name"), i("invPower", "inverter.power_entity"), p("invShowSelfConsumption", "inverter.show_self_consumption"), i("invSelfConsumptionEntity", "inverter.self_consumption_entity"), l("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), i("invTempAc", "inverter.ac_temperature_entity"), i("invTempDc", "inverter.dc_temperature_entity"), i("invVolt", "inverter.voltage_entity"), i("invCurrent", "inverter.current_entity"), i("invFreq", "inverter.frequency_entity"), (f = e.getElementById("auxType")) == null || f.addEventListener("change", (s) => {
      const a = s.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = a;
      const _ = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[a] || "Мікроінвертор";
      this._config.aux.title = _;
      const E = e.getElementById("auxTitle");
      E && (E.value = _), this._valueChanged("aux.type", a), this._valueChanged("aux.title", _);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (v = e.getElementById("windTurbineCount")) == null || v.addEventListener("input", (s) => {
      const a = parseInt(s.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = a, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < a; ) {
        const t = this._config.wind.turbines.length + 1;
        this._config.wind.turbines.push({
          id: `turbine_${t}`,
          name: `Вітряк ${t}`,
          power_entity: `sensor.wind_turbine_${t}_power`,
          speed_entity: `sensor.wind_turbine_${t}_speed`,
          daily_energy_entity: "",
          monthly_energy_entity: "",
          animation_threshold: this._config.wind.animation_threshold || 50
        });
      }
      this._valueChanged("wind.turbine_count", a), this._valueChanged("wind.turbines", this._config.wind.turbines), this.render();
    }), l("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (x = e.getElementById("windThreshold")) == null || x.addEventListener("input", (s) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(s.target.value));
    }), i("windDailyEnergy", "wind.daily_energy_entity"), i("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].name = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-power-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].power_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-speed-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].rpm_entity = a.target.value, this._config.wind.turbines[t].speed_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-daily-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].daily_energy_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].monthly_energy_entity = a.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), i("batSoc", "battery.soc_entity"), i("batPower", "battery.power_entity"), i("batPowerSign", "battery.power_sign"), i("batVolt", "battery.voltage_entity"), i("batCurrent", "battery.current_entity"), i("batTemp", "battery.temperature_entity"), i("batDelta", "battery.cell_delta_entity"), i("batCapacity", "battery.capacity_entity"), i("batChargeDaily", "battery.charge_daily_entity"), i("batDischargeDaily", "battery.discharge_daily_entity"), (m = e.getElementById("batParallelCount")) == null || m.addEventListener("input", (s) => {
      const a = parseInt(s.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = a, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < a; ) {
        const t = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${t}`,
          name: `Батарея ${t}`,
          soc_entity: `sensor.bms_rack${t}_soc`,
          current_entity: `sensor.bms_rack${t}_current`,
          voltage_entity: `sensor.bms_rack${t}_voltage`,
          power_entity: `sensor.bms_rack${t}_power`,
          temperature_entity: `sensor.bms_rack${t}_temperature`,
          cell_delta_entity: `sensor.bms_rack${t}_cell_delta`
        });
      }
      this._valueChanged("battery.parallel_batteries", a), this._valueChanged("battery.modules", this._config.battery.modules), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].name = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].soc_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].current_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].voltage_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].temperature_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-delta-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].cell_delta_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].power_entity = a.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((s) => {
      s.addEventListener("input", (a) => {
        const t = parseInt(a.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].capacity_kwh = parseFloat(a.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), p("gridSellingEnabled", "grid.selling_enabled"), i("gridPower", "grid.power_entity"), i("gridVoltage", "grid.voltage_entity"), i("gridStatus", "grid.status_entity"), l("gridVoltageThreshold", "grid.voltage_threshold"), i("gridPowerSign", "grid.power_sign"), l("gridMinThreshold", "grid.min_power_threshold"), i("gridImportDaily", "grid.import_daily_entity"), i("gridExportDaily", "grid.export_daily_entity"), i("gridNonEssential", "grid.non_essential_power_entity"), i("gridCarPower", "grid.car_power_entity"), p("loadAutoCalculate", "load.auto_calculate"), p("loadSeparateExport", "load.separate_export"), i("loadEssential", "load.essential_power_entity"), i("loadDailyHouse", "load.daily_house_entity");
    const r = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const s = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${s}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads), this.render();
    };
    (h = e.getElementById("btnAddSubload")) == null || h.addEventListener("click", r), (d = e.getElementById("btnAddSubloadBottom")) == null || d.addEventListener("click", r), e.querySelectorAll(".btn-del-subload").forEach((s) => {
      s.addEventListener("click", (a) => {
        var E;
        const t = a.currentTarget || a.target.closest(".btn-del-subload"), _ = parseInt(t.dataset.idx);
        (E = this._config.load) != null && E.subloads && (this._config.load.subloads.splice(_, 1), this._valueChanged("load.subloads", this._config.load.subloads), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((s) => {
      s.addEventListener("input", (a) => {
        var _, E;
        const t = parseInt(a.target.dataset.idx);
        (E = (_ = this._config.load) == null ? void 0 : _.subloads) != null && E[t] && (this._config.load.subloads[t].name = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-icon").forEach((s) => {
      s.addEventListener("change", (a) => {
        var _, E;
        const t = parseInt(a.target.dataset.idx);
        (E = (_ = this._config.load) == null ? void 0 : _.subloads) != null && E[t] && (this._config.load.subloads[t].icon = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-entity").forEach((s) => {
      s.addEventListener("input", (a) => {
        var _, E;
        const t = parseInt(a.target.dataset.idx);
        (E = (_ = this._config.load) == null ? void 0 : _.subloads) != null && E[t] && (this._config.load.subloads[t].entity = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), p("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), l("tariffDayRate", "tariffs.day_rate"), l("tariffNightRate", "tariffs.night_rate"), l("tariffExportRate", "tariffs.export_rate"), l("tariffNightStart", "tariffs.night_start_hour"), l("tariffNightEnd", "tariffs.night_end_hour"), p("tariffShowDailyCost", "tariffs.show_daily_cost"), p("tariffShowExportIncome", "tariffs.show_export_income"), p("tariffShowActiveBadge", "tariffs.show_active_badge"), p("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", Pa);
const Ta = {
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
    kwh_unit: "kWh"
  }
};
class Ma extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._initialized = !1, this._themeMode = "dark", this._language = "uk", this._scale = 1, this._nodes = {}, this._resizeObserver = null;
  }
  connectedCallback() {
    this._setupResizeObserver();
  }
  disconnectedCallback() {
    this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
  }
  static getConfigElement() {
    return document.createElement("energy-station-card-editor");
  }
  static getStubConfig() {
    return JSON.parse(JSON.stringify(oe));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(e)), p = JSON.parse(JSON.stringify(oe));
    this._config = this._deepMerge(p, i);
    const l = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = l || this._config.theme_mode || "dark";
    const r = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = r || this._config.language || "uk";
    const c = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = c ? parseFloat(c) : this._config.card_scale || this._config.scale || 1, this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var r, c;
    let i = typeof e == "number" ? e : this._scale + (e || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const p = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".energy-station-container");
    p && (p.style.setProperty("--es-card-scale", i.toString()), p.style.zoom = i.toString());
    const l = (c = this.shadowRoot) == null ? void 0 : c.getElementById("headerZoomVal");
    l && (l.innerText = `${Math.round(i * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, i) {
    const p = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!i || typeof i != "object") return p;
    for (const l of Object.keys(i)) {
      const r = i[l], c = e ? e[l] : void 0;
      r && typeof r == "object" && !Array.isArray(r) ? p[l] = this._deepMerge(c || {}, r) : p[l] = r;
    }
    return p;
  }
  _getEntityState(e) {
    var b;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const i = this._hass.states[e], l = String(i.state).trim().replace(",", "."), r = parseFloat(l), c = ((b = i.attributes) == null ? void 0 : b.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(r) ? 0 : r,
      unit: c,
      attributes: i.attributes
    };
  }
  _t(e) {
    var p, l;
    const i = this._language || "uk";
    return ((p = Ta[i]) == null ? void 0 : p[e]) || ((l = Ta.uk) == null ? void 0 : l[e]) || e;
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
    var c;
    const e = (c = this.shadowRoot) == null ? void 0 : c.querySelector(".energy-station-container");
    if (!e) return;
    const i = this._themeMode === "light";
    e.classList.toggle("theme-light", i);
    const p = this.shadowRoot.getElementById("headerThemeToggle");
    p && (p.innerHTML = i ? "☀️" : "🌙", p.setAttribute("title", i ? this._t("theme_dark") : this._t("theme_light")));
    const l = this.shadowRoot.getElementById("btnThemeDark"), r = this.shadowRoot.getElementById("btnThemeLight");
    l && r && (l.classList.toggle("active", !i), r.classList.toggle("active", i));
  }
  _formatPower(e, i = 0) {
    const p = this._language === "en" ? "kW" : "кВт";
    if (!e) return { num: i.toFixed(3), kw: i, str: `${i.toFixed(3)} ${p}` };
    let l = e.val;
    return e.unit === "W" && (l = l / 1e3), {
      num: l.toFixed(3),
      kw: l,
      str: `${l.toFixed(3)} ${p}`
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
    var i, p, l, r, c, b, g, C, f, v, x, m, h, d, s, a, t, _;
    const e = this._config || oe;
    this._initialized = !0, this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((i = e.animations) == null ? void 0 : i.speed) || 1.2}s;
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
          padding: 22px 28px 24px 28px;
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
          zoom: var(--es-card-scale, ${this._scale || 1});
        }

        .es-mono {
          font-family: 'JetBrains Mono', monospace;
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
          font-size: 13px;
          font-weight: 600;
          color: #cbd5e1;
        }
        .es-node-power {
          font-size: 20px;
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${X.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((p = e.solar) == null ? void 0 : p.target_daily_yield) || 55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${X.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24; display: flex; align-items: center; justify-content: center; gap: 6px;">
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${X.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(l = e.grid) != null && l.show_non_essential && ((r = e.grid) != null && r.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${X.house_outline || X.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c = e.grid) != null && c.show_car && ((b = e.grid) != null && b.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${X.car}</div>
              <div class="es-node-title" id="carTitle">${((g = e.grid) == null ? void 0 : g.car_title) || this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${X.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((C = e.inverter) == null ? void 0 : C.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((f = e.aux) == null ? void 0 : f.type) === "none" || ((v = e.aux) == null ? void 0 : v.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${X[(x = e.aux) == null ? void 0 : x.type] || X.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((m = e.aux) == null ? void 0 : m.type) === "microinverter" && (!((h = e.aux) != null && h.title) || ((d = e.aux) == null ? void 0 : d.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((s = e.aux) == null ? void 0 : s.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((a = e.aux) == null ? void 0 : a.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((t = e.wind) == null ? void 0 : t.show) === !1 && ((_ = e.aux) == null ? void 0 : _.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${X.house}</div>
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
                <span style="font-size: 20px; font-weight: 900; color: #f8fafc;">3,000 ${this._language === "en" ? "kW" : "кВт"}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">${this._t("bat_dir_charge")}</span>
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
    var g, C, f, v, x, m, h, d;
    const e = this._config || oe, i = ((g = this._nodes) == null ? void 0 : g.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !(((C = e.wind) == null ? void 0 : C.show) !== !1 || ((f = e.aux) == null ? void 0 : f.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const l = ((v = e.wind) == null ? void 0 : v.turbine_count) || ((m = (x = e.wind) == null ? void 0 : x.turbines) == null ? void 0 : m.length) || 2, r = ((h = e.wind) == null ? void 0 : h.turbines) || [], c = document.createElement("div");
    c.className = "es-wind-summary-bar es-mono", c.id = "windStationSummaryBar", c.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(c);
    const b = document.createElement("div");
    b.className = "es-wind-pods-row", i.appendChild(b);
    for (let s = 0; s < l; s++) {
      const a = r[s] || {
        name: `Вітряк ${s + 1}`,
        power_entity: `sensor.wind_turbine_${s + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((d = e.wind) == null ? void 0 : d.animation_threshold) || 50
      }, t = !!(a.daily_energy_entity || a.monthly_energy_entity), _ = document.createElement("div");
      _.className = "es-turbine-card glow-wind clickable-node", _.id = `turbineCard_${s + 1}`, _.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${s + 1}">
              ${X.wind_turbine}
            </div>
            <span>${a.name || `Вітряк ${s + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${s + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${s + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${s + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${s + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${s + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${t ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${s + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${s + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, _.addEventListener("click", () => {
        this._fireMoreInfo(a.power_entity);
      }), b.appendChild(_);
    }
  }
  _renderDynamicPvPanels() {
    var r, c, b, g, C;
    const e = this._config || oe, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const p = ((r = e.solar) == null ? void 0 : r.pv_count) || ((b = (c = e.solar) == null ? void 0 : c.strings) == null ? void 0 : b.length) || 3, l = this._language === "en" ? "kWp" : "кВтп";
    for (let f = 1; f <= p; f++) {
      const v = f < 10 ? `0${f}` : `${f}`, x = ((C = (g = e.solar) == null ? void 0 : g.strings) == null ? void 0 : C[f - 1]) || {}, m = x.name || `PV ${v}`, h = x.capacity_kw !== void 0 ? parseFloat(x.capacity_kw) : 4, d = document.createElement("div");
      d.className = "es-pv-panel glow-solar clickable-node", d.dataset.pvIndex = f, d.id = `pvPanel_${f}`, d.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${X.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${m}</span>
        <span class="es-pv-val es-mono" id="pvVal_${f}">0,000 кВт</span>
        <div class="es-pv-cap es-mono" id="pvCap_${f}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${f}">${h.toFixed(1).replace(".", ",")}</span> <span style="font-size: 9px; color: #64748b;">${l}</span> <span id="pvPercent_${f}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `, d.addEventListener("click", () => {
        var a;
        const s = x.power_entity || x.voltage_entity || x.current_entity || ((a = e.solar) == null ? void 0 : a.total_power_entity);
        this._fireMoreInfo(s);
      }), i.appendChild(d);
    }
  }
  _renderDynamicSubloads() {
    var l;
    const e = this._config || oe, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((l = e.load) == null ? void 0 : l.subloads) || []).forEach((r, c) => {
      const b = document.createElement("div");
      b.className = "es-subload-card clickable-node", b.id = `subloadCard_${c}`, b.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${X[r.icon] || X.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, b.addEventListener("click", () => {
        this._fireMoreInfo(r.entity);
      }), i.appendChild(b);
    });
  }
  _renderDynamicBatteryRack() {
    var v, x, m, h, d, s, a;
    const e = this._config || oe, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const p = ((v = e.battery) == null ? void 0 : v.parallel_batteries) || ((m = (x = e.battery) == null ? void 0 : x.modules) == null ? void 0 : m.length) || 2, l = [82, 76, 91, 68, 85, 90, 72, 80], r = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], c = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], b = [12, 8, 15, 9, 14, 11, 18, 10], g = this._t("bat_prefix"), C = this._language === "en" ? "kW" : "кВт", f = this._language === "en" ? "kWh" : "кВт·год";
    for (let t = 1; t <= p; t++) {
      const _ = ((d = (h = e.battery) == null ? void 0 : h.modules) == null ? void 0 : d[t - 1]) || ((a = (s = e.battery) == null ? void 0 : s.module_entities) == null ? void 0 : a[t - 1]) || {}, E = _.name || `${g} ${t}`, I = l[(t - 1) % l.length], M = r[(t - 1) % r.length], R = c[(t - 1) % c.length], n = b[(t - 1) % b.length], S = document.createElement("div");
      S.className = "es-battery-pack-card glow-battery clickable-node", S.id = `batPackCard_${t}`, S.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${X.battery_vertical}</div>
        <span class="es-bat-name">${E}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${t}">${I}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${t}">${M.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${t}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${C}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${t}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${t}">${R.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${t}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${t}">${n} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${t}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${f}</div>
      `, S.addEventListener("click", (N) => {
        var z;
        if (N.target.closest(`#batPackTemp_${t}`)) {
          const W = _.temperature_entity || _.temp || `sensor.bms_rack${t}_temperature`;
          this._fireMoreInfo(W);
          return;
        }
        if (N.target.closest(`#batPackDelta_${t}`)) {
          const W = _.cell_delta_entity || _.delta_entity || `sensor.bms_rack${t}_cell_delta`;
          this._fireMoreInfo(W);
          return;
        }
        const q = _.soc_entity || _.soc || _.voltage_entity || _.volt || _.current_entity || ((z = e.battery) == null ? void 0 : z.soc_entity);
        this._fireMoreInfo(q);
      }), i.appendChild(S);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var d, s, a, t, _, E, I, M, R;
    const e = this._config || oe, i = ((d = this._nodes) == null ? void 0 : d.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", e.show_quick_settings === !1)) return;
    const p = this._themeMode === "light", l = this._language === "en", r = ((s = e.controls) == null ? void 0 : s.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", c = ((a = e.controls) == null ? void 0 : a.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", b = ((t = e.controls) == null ? void 0 : t.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", g = document.createElement("div");
    g.className = "es-quick-settings-card", g.id = "quickSettingsCard", g.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${X.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${p ? X.sun_mode : X.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${l ? "EN" : "UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${r}">
              <span class="es-ctrl-icon es-ctrl-solar">${X.sun_mode}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${c}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${X.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${l ? "W" : "Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${b}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${X.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (_ = g.querySelector("#btnThemeToggle")) == null || _.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleTheme();
    }), (E = g.querySelector("#btnLangToggle")) == null || E.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleLanguage();
    }), (I = g.querySelector("#ctrlLabelWrapSolar")) == null || I.addEventListener("click", () => this._fireMoreInfo(r)), (M = g.querySelector("#ctrlLabelWrapSell")) == null || M.addEventListener("click", () => this._fireMoreInfo(c)), (R = g.querySelector("#ctrlLabelWrapGrid")) == null || R.addEventListener("click", () => this._fireMoreInfo(b));
    const C = g.querySelector("#ctrlSliderSolar"), f = g.querySelector("#ctrlValSolar");
    C && (this._updateSliderGradient(C), C.addEventListener("input", (n) => {
      f && (f.innerText = `${n.target.value} A`), this._updateSliderGradient(C);
    }), C.addEventListener("change", (n) => {
      this._setNumberValue(r, n.target.value);
    }));
    const v = g.querySelector("#ctrlSliderSell"), x = g.querySelector("#ctrlValSell");
    v && (this._updateSliderGradient(v), v.addEventListener("input", (n) => {
      const S = Number(n.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      x && (x.innerText = `${S} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(v);
    }), v.addEventListener("change", (n) => {
      this._setNumberValue(c, n.target.value);
    }));
    const m = g.querySelector("#ctrlSliderGrid"), h = g.querySelector("#ctrlValGrid");
    m && (this._updateSliderGradient(m), m.addEventListener("input", (n) => {
      h && (h.innerText = `${n.target.value} A`), this._updateSliderGradient(m);
    }), m.addEventListener("change", (n) => {
      this._setNumberValue(b, n.target.value);
    })), i.appendChild(g), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const i = parseFloat(e.min) || 0, p = parseFloat(e.max) || 100, l = parseFloat(e.value) || 0, r = Math.max(0, Math.min(100, (l - i) / (p - i) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, i) {
    if (!this._hass || !e) return;
    const l = e.split(".")[0] || "number", r = Number(i);
    this._hass.callService(l, "set_value", {
      entity_id: e,
      value: r
    });
  }
  _updateControlSliders() {
    var x, m, h, d, s, a, t, _, E;
    const e = this._config || oe;
    if (e.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const p = ((x = e.controls) == null ? void 0 : x.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", l = ((m = e.controls) == null ? void 0 : m.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", r = ((h = e.controls) == null ? void 0 : h.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", c = i.getElementById("ctrlSliderSolar"), b = i.getElementById("ctrlValSolar"), g = i.getElementById("ctrlSliderSell"), C = i.getElementById("ctrlValSell"), f = i.getElementById("ctrlSliderGrid"), v = i.getElementById("ctrlValGrid");
    if (c && (!c.matches || !c.matches(":active"))) {
      const I = (s = (d = this._hass) == null ? void 0 : d.states) == null ? void 0 : s[p], M = I && !isNaN(parseFloat(I.state)) ? parseFloat(I.state) : c.value ? parseFloat(c.value) : 80;
      c.value = M, b && (b.innerText = `${Math.round(M)} A`), this._updateSliderGradient(c);
    }
    if (g && (!g.matches || !g.matches(":active"))) {
      const I = (t = (a = this._hass) == null ? void 0 : a.states) == null ? void 0 : t[l], M = I && !isNaN(parseFloat(I.state)) ? parseFloat(I.state) : g.value ? parseFloat(g.value) : 5e3;
      g.value = M;
      const R = Math.round(M).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), n = this._language === "uk" ? "Вт" : "W";
      C && (C.innerText = `${R} ${n}`), this._updateSliderGradient(g);
    }
    if (f && (!f.matches || !f.matches(":active"))) {
      const I = (E = (_ = this._hass) == null ? void 0 : _.states) == null ? void 0 : E[r], M = I && !isNaN(parseFloat(I.state)) ? parseFloat(I.state) : f.value ? parseFloat(f.value) : 70;
      f.value = M, v && (v.innerText = `${Math.round(M)} A`), this._updateSliderGradient(f);
    }
  }
  _bindInteractions() {
    var p, l, r, c, b, g, C, f, v, x, m, h, d, s, a, t, _, E, I, M, R;
    const e = this.shadowRoot, i = this._config || oe;
    (p = e.getElementById("headerThemeToggle")) == null || p.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleTheme();
    }), (l = e.getElementById("headerLangToggle")) == null || l.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleLanguage();
    }), (r = e.getElementById("headerZoomIn")) == null || r.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (c = e.getElementById("headerZoomOut")) == null || c.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (b = e.getElementById("headerZoomVal")) == null || b.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(1);
    }), (g = e.getElementById("solarHeaderNode")) == null || g.addEventListener("click", () => {
      var n, S;
      this._fireMoreInfo(((n = i.solar) == null ? void 0 : n.daily_yield_entity) || ((S = i.solar) == null ? void 0 : S.total_power_entity));
    }), (C = e.getElementById("totalPvPowerBadge")) == null || C.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.solar) == null ? void 0 : n.total_power_entity);
    }), (f = e.getElementById("gridNode")) == null || f.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.grid) == null ? void 0 : n.power_entity);
    }), (v = e.getElementById("nonEssentialNode")) == null || v.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.grid) == null ? void 0 : n.non_essential_power_entity);
    }), (x = e.getElementById("carNode")) == null || x.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.grid) == null ? void 0 : n.car_power_entity);
    }), (m = e.getElementById("inverterNode")) == null || m.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.inverter) == null ? void 0 : n.power_entity);
    }), (h = e.getElementById("inverterSelfConsumptionBox")) == null || h.addEventListener("click", (n) => {
      var S;
      n.stopPropagation(), (S = i.inverter) != null && S.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (d = e.getElementById("auxNode")) == null || d.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.aux) == null ? void 0 : n.power_entity);
    }), (s = e.getElementById("essentialNode")) == null || s.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.load) == null ? void 0 : n.essential_power_entity);
    }), (a = e.getElementById("masterBatteryHub")) == null || a.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = i.battery) == null ? void 0 : n.soc_entity);
    }), (t = e.getElementById("batChargeDaily")) == null || t.addEventListener("click", (n) => {
      var S;
      n.stopPropagation(), this._fireMoreInfo(((S = i.battery) == null ? void 0 : S.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (_ = e.getElementById("batDischargeDaily")) == null || _.addEventListener("click", (n) => {
      var S;
      n.stopPropagation(), this._fireMoreInfo(((S = i.battery) == null ? void 0 : S.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let n = 1; n <= 8; n++) {
      const S = e.getElementById(`batBranchBadge_${n}`), N = ((I = (E = i.battery) == null ? void 0 : E.modules) == null ? void 0 : I[n - 1]) || ((R = (M = i.battery) == null ? void 0 : M.module_entities) == null ? void 0 : R[n - 1]) || {};
      S == null || S.addEventListener("click", () => {
        var z;
        const q = N.power_entity || N.current_entity || N.soc_entity || ((z = i.battery) == null ? void 0 : z.soc_entity);
        this._fireMoreInfo(q);
      });
    }
  }
  _fetchNightEndFromHa(e, i) {
    var g, C;
    if (this._fetchingHistoryForDate === e) return;
    const l = (g = (this._config || oe).grid) == null ? void 0 : g.import_daily_entity;
    if (!((C = this._hass) != null && C.callWS) || !l) return;
    this._fetchingHistoryForDate = e;
    const r = /* @__PURE__ */ new Date(), c = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i, 0, 0), b = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i, 15, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: c.toISOString(),
      end_time: b.toISOString(),
      entity_ids: [l],
      no_attributes: !0
    }).then((f) => {
      const v = f == null ? void 0 : f[l];
      if (v && v.length > 0) {
        const x = parseFloat(v[0].state);
        if (!isNaN(x) && x >= 0) {
          const m = `es_tariff_split_${e}`;
          let h = {};
          if (typeof localStorage < "u")
            try {
              const d = localStorage.getItem(m);
              d && (h = JSON.parse(d));
            } catch {
            }
          if (h.night_end = x, typeof localStorage < "u")
            try {
              localStorage.setItem(m, JSON.stringify(h));
            } catch {
            }
          this._hass && this._updateValues();
        }
      }
    }).catch(() => {
    });
  }
  _calculateTariffs(e, i, p) {
    var I, M, R, n, S, N, q, z, W, ee, y, w, $;
    const r = (this._config || oe).tariffs || {};
    if (r.enabled === !1) {
      (I = this._nodes) != null && I.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (M = this._nodes) != null && M.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (R = this._nodes) != null && R.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (n = this._nodes) != null && n.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
      return;
    }
    const c = r.currency || "грн", b = typeof r.day_rate == "number" ? r.day_rate : 4.32, g = typeof r.night_rate == "number" ? r.night_rate : 2.16, C = typeof r.export_rate == "number" ? r.export_rate : 5.3, f = typeof r.night_start_hour == "number" ? r.night_start_hour : 23, v = typeof r.night_end_hour == "number" ? r.night_end_hour : 7, x = /* @__PURE__ */ new Date(), m = x.getHours() + x.getMinutes() / 60, h = f > v ? m >= f || m < v : m >= f && m < v;
    if ((S = this._nodes) != null && S.gridTariffBadge && r.show_active_badge !== !1) {
      const u = h ? g : b, k = h ? this._t("tariff_night") : this._t("tariff_day"), L = h ? "🌙" : "☀️", A = h ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", Q = h ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", K = h ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = A, this._nodes.gridTariffBadge.style.border = `1px solid ${Q}`, this._nodes.gridTariffBadge.style.color = K, this._nodes.gridTariffBadge.innerText = `${L} ${k}: ${u.toFixed(2)} ${c}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (N = this._nodes) != null && N.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((q = this._nodes) != null && q.solarSavingsDaily && r.show_solar_savings !== !1 && p > 0) {
      const u = p * b;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${u.toFixed(2)} ${c}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (z = this._nodes) != null && z.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((W = this._nodes) != null && W.gridExportIncomeRow && r.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const u = i * C;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${u.toFixed(2)} ${c}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (ee = this._nodes) != null && ee.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (y = this._nodes) != null && y.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
      return;
    }
    const d = `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`, s = `es_tariff_split_${d}`;
    let a = {};
    if (typeof localStorage < "u")
      try {
        const u = localStorage.getItem(s);
        u && (a = JSON.parse(u));
      } catch {
      }
    let t = 0, _ = 0;
    if (m < v) {
      if (t = e, _ = 0, a.night_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
    } else if (m >= v && m < f) {
      if (typeof a.night_end == "number" && a.night_end <= e)
        t = a.night_end, _ = Math.max(0, e - t);
      else {
        this._fetchNightEndFromHa(d, v);
        const u = Math.min(1, v / m);
        t = e * u, _ = Math.max(0, e - t);
      }
      if (a.day_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
    } else {
      const u = typeof a.night_end == "number" ? a.night_end : e * (v / m), k = typeof a.day_end == "number" ? a.day_end : e;
      _ = Math.max(0, k - u);
      const L = Math.max(0, e - k);
      t = u + L;
    }
    const E = t * g + _ * b;
    (w = this._nodes) != null && w.gridCostDailyRow && r.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${E.toFixed(2)} ${c}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${t.toFixed(1)} + ☀️ ${_.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : ($ = this._nodes) != null && $.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
  }
  _updateValues() {
    var Ge, Oe, Ye, Ue, $t, Et, St, Bt, Ct, jt, qt, Gt, Ot, Yt, Ut, Kt, Jt, Xt, Zt, Qt, ei, ti, ii, ai, si, oi, ni, ri, li, di, ci, pi, hi, gi, _i, yi, ui, bi, fi, mi, vi, xi, wi, ki, $i, Ei, Si, Bi, Ci, Ii, Ti, Pi, Mi, Fi, Vi, Li, Ni, Ri, Ai, Di, zi, Wi, Hi, ji, qi, Gi, Oi, Yi, Ui, Ki, Ji, Xi, Zi, Qi, ea, ta, ia, aa, sa, oa, na, ra, la, da, ca, pa, ha, ga, _a, ya, ua, ba, fa, ma, va, xa, wa, ka, $a, Ea, Sa;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || oe, i = this._language === "en" ? "kW" : "кВт", p = ((Ge = e.solar) == null ? void 0 : Ge.pv_count) || ((Ye = (Oe = e.solar) == null ? void 0 : Oe.strings) == null ? void 0 : Ye.length) || 3;
    let l = 0, r = !1;
    for (let o = 1; o <= p; o++) {
      const V = ($t = (Ue = e.solar) == null ? void 0 : Ue.strings) == null ? void 0 : $t[o - 1], H = (V == null ? void 0 : V.voltage_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_voltage` : ""), j = (V == null ? void 0 : V.current_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_current` : ""), D = (V == null ? void 0 : V.power_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_power` : "");
      if (this._getEntityState(D) || this._getEntityState(H) || this._getEntityState(j)) {
        r = !0;
        break;
      }
    }
    for (let o = 1; o <= p; o++) {
      const V = this.shadowRoot.getElementById(`pvVal_${o}`), H = this.shadowRoot.getElementById(`pvVolt_${o}`), j = this.shadowRoot.getElementById(`pvCurr_${o}`), D = (St = (Et = e.solar) == null ? void 0 : Et.strings) == null ? void 0 : St[o - 1], st = (D == null ? void 0 : D.voltage_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_voltage` : ""), te = (D == null ? void 0 : D.current_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_current` : ""), Ne = (D == null ? void 0 : D.power_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_power` : ""), Z = this._getEntityState(st), xe = this._getEntityState(te), Y = this._getEntityState(Ne);
      let le = 0, Ce = 0, ie = 0;
      Y ? ie = this._formatPower(Y).kw : Z && xe ? ie = Z.val * xe.val / 1e3 : Z ? ie = 0 : ie = r ? 0 : 4, Z ? le = Z.val : le = r ? 0 : 380 + o * 4.5, xe ? Ce = xe.val : Y && le > 0 ? Ce = ie * 1e3 / le : Ce = r ? 0 : 3.12 + o * 0.28, l += ie, V && (V.innerText = `${ie.toFixed(3)} ${i}`), H && (H.innerText = `${le.toFixed(1)} V`), j && (j.innerText = `${Ce.toFixed(2)} A`);
      const G = (D == null ? void 0 : D.capacity_kw) !== void 0 ? parseFloat(D.capacity_kw) : (D == null ? void 0 : D.installed_power) !== void 0 ? parseFloat(D.installed_power) : r ? 0 : 4, we = G > 0 && ie > 0 ? Math.min(100, Math.round(ie / G * 100)) : 0, ot = this.shadowRoot.getElementById(`pvCapVal_${o}`), Ke = this.shadowRoot.getElementById(`pvPercent_${o}`), Re = this.shadowRoot.getElementById(`pvCap_${o}`);
      ot && (G > 0 ? (ot.innerText = G.toFixed(1).replace(".", ","), Ke && (Ke.innerText = `(${we}%)`, Ke.style.color = we >= 70 ? "#34d399" : we >= 30 ? "#fbbf24" : "#94a3b8"), Re && (Re.style.display = "flex")) : Re && (Re.style.display = "none"));
    }
    const c = this._getEntityState((Bt = e.solar) == null ? void 0 : Bt.total_power_entity);
    let b = 0;
    c ? b = this._formatPower(c).kw : b = l;
    let g = ((Ct = e.solar) == null ? void 0 : Ct.installed_power) !== void 0 ? parseFloat(e.solar.installed_power) : 0;
    if (isNaN(g) || g <= 0) {
      let o = 0;
      for (let V = 0; V < count; V++) {
        const H = (qt = (jt = e.solar) == null ? void 0 : jt.strings) == null ? void 0 : qt[V], j = (H == null ? void 0 : H.capacity_kw) !== void 0 ? parseFloat(H.capacity_kw) : (H == null ? void 0 : H.installed_power) !== void 0 ? parseFloat(H.installed_power) : 0;
        !isNaN(j) && j > 0 && (o += j);
      }
      g = o > 0 ? o : r ? 0 : 12;
    }
    const C = g > 0 ? b / g * 100 : 0, f = Math.min(100, Math.max(0, C)), v = this._language === "en" ? "kWp" : "кВтп";
    this._nodes.totalPvPowerVal && (this._nodes.totalPvPowerVal.innerText = `${b.toFixed(3)} ${i}`), this._nodes.totalPvPowerBadge && (this._nodes.totalPvPowerVal || (this._nodes.totalPvPowerBadge.innerText = `${b.toFixed(3)} ${i}`)), this._nodes.totalPvPercentBadge && (g > 0 ? (this._nodes.totalPvPercentBadge.style.display = "inline-flex", this._nodes.totalPvPercentBadge.innerText = `${Math.round(f)}%`, this._nodes.totalPvPercentBadge.style.color = f >= 70 ? "#34d399" : f >= 30 ? "#fbbf24" : "#94a3b8", this._nodes.totalPvPercentBadge.style.borderColor = f >= 70 ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.35)") : this._nodes.totalPvPercentBadge.style.display = "none"), this._nodes.totalPvSubline && (g > 0 ? (this._nodes.totalPvSubline.style.display = "flex", this._nodes.totalPvCapDetail && (this._nodes.totalPvCapDetail.innerText = `${f.toFixed(1).replace(".", ",")}%`, this._nodes.totalPvCapDetail.style.color = f >= 70 ? "#34d399" : f >= 30 ? "#fbbf24" : "#94a3b8"), this._nodes.totalPvCapTotal && (this._nodes.totalPvCapTotal.innerText = `(з ${g.toFixed(1).replace(".", ",")} ${v})`)) : this._nodes.totalPvSubline.style.display = "none");
    const x = this._getEntityState((Gt = e.solar) == null ? void 0 : Gt.daily_yield_entity), m = x ? x.val : r ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = m.toFixed(1);
    const h = ((Ot = e.solar) == null ? void 0 : Ot.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = h.toFixed(1);
    const d = Math.min(100, Math.round(m / h * 100));
    this._nodes.solarProgressBar.style.width = `${d}%`;
    const s = this._getEntityState((Yt = e.inverter) == null ? void 0 : Yt.power_entity);
    this._nodes.inverterPowerVal && ((Ut = e.inverter) != null && Ut.power_entity && s ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(s, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const a = this._getEntityState((Kt = e.inverter) == null ? void 0 : Kt.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = a ? a.val.toFixed(2) : "41,20";
    const t = this._getEntityState((Jt = e.inverter) == null ? void 0 : Jt.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = t ? t.val.toFixed(2) : "38,40";
    const _ = this._getEntityState((Xt = e.inverter) == null ? void 0 : Xt.voltage_entity);
    this._nodes.inverterVolt.innerText = _ ? _.val.toFixed(2) : "231,45";
    const E = this._getEntityState((Zt = e.inverter) == null ? void 0 : Zt.current_entity);
    this._nodes.inverterCurrent.innerText = E ? E.val.toFixed(2) : "8,60";
    const I = this._getEntityState((Qt = e.inverter) == null ? void 0 : Qt.frequency_entity);
    this._nodes.inverterFreq.innerText = I ? I.val.toFixed(2) : "50,01";
    const M = ((ei = e.wind) == null ? void 0 : ei.show) !== !1 || ((ti = e.aux) == null ? void 0 : ti.type) === "wind", R = this.shadowRoot.getElementById("windStationContainer"), n = this._nodes.auxNode;
    let S = 0;
    if (R)
      if (!M)
        R.classList.add("hidden");
      else {
        R.classList.remove("hidden");
        const o = ((ii = e.wind) == null ? void 0 : ii.turbine_count) || ((si = (ai = e.wind) == null ? void 0 : ai.turbines) == null ? void 0 : si.length) || 2, V = ((oi = e.wind) == null ? void 0 : oi.turbines) || [];
        let H = 0, j = 0, D = !1, st = !1;
        for (let Y = 0; Y < o; Y++) {
          const le = V[Y] || {
            power_entity: `sensor.wind_turbine_${Y + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((ni = e.wind) == null ? void 0 : ni.animation_threshold) || 50
          }, Ce = this.shadowRoot.getElementById(`turbinePower_${Y + 1}`), ie = this.shadowRoot.getElementById(`turbineStatus_${Y + 1}`), G = this.shadowRoot.getElementById(`turbineIcon_${Y + 1}`), we = this.shadowRoot.getElementById(`turbineCard_${Y + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${Y + 1}`);
          const ot = this.shadowRoot.getElementById(`turbineDailyVal_${Y + 1}`), Ke = this.shadowRoot.getElementById(`turbineMonthlyVal_${Y + 1}`), Re = this.shadowRoot.getElementById(`turbineEnergyFooter_${Y + 1}`), Wt = this._hass ? 0 : Y === 0 ? 1.56 : 0.22, ut = this._getEntityState(le.power_entity), bt = this._formatPower(ut, Wt);
          Ce && (Ce.innerText = bt.str), S += bt.kw;
          let nt = bt.kw * 1e3;
          ut && ut.unit === "W" && (nt = ut.val);
          const ft = le.animation_threshold ?? ((ri = e.wind) == null ? void 0 : ri.animation_threshold) ?? 50, Ae = G == null ? void 0 : G.querySelector(".turbine-rotor"), mt = le.rpm_entity || le.speed_entity || ((li = e.wind) == null ? void 0 : li.rpm_entity) || ((di = e.wind) == null ? void 0 : di.speed_entity) || (Y === 0 ? "sensor.wind_rpm" : "");
          let U = mt && ((ci = this._hass) != null && ci.states[mt]) ? this._getEntityState(mt) : null;
          if (!U && Y === 0 && ((pi = this._hass) != null && pi.states["sensor.wind_rpm"]) && (U = this._getEntityState("sensor.wind_rpm")), nt >= ft || U && typeof U.val == "number" && U.val > 0) {
            Ae && Ae.classList.add("spinning"), we && (we.classList.add("glow-wind"), we.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const Pe = ((hi = e.wind) == null ? void 0 : hi.max_power) || 3e3, Rt = ((gi = e.wind) == null ? void 0 : gi.max_rpm) || 600;
            let It = 0;
            U && typeof U.val == "number" && U.val > 0 ? It = Math.min(1, Math.max(0, U.val / Rt)) : It = Math.min(1, Math.max(0, (nt - ft) / (Pe - ft)));
            const ge = (3.2 - It * 2.75).toFixed(2);
            Ae && Ae.style.setProperty("--turbine-speed", `${ge}s`), ie && (ie.innerText = this._t("wind_gen"), ie.style.color = "#67e8f9");
          } else
            Ae && Ae.classList.remove("spinning"), we && (we.classList.remove("glow-wind"), we.style.borderColor = "rgba(255, 255, 255, 0.08)"), ie && (ie.innerText = this._t("wind_calm"), ie.style.color = "#94a3b8");
          const lt = this.shadowRoot.getElementById(`turbineRpmBox_${Y + 1}`);
          if (lt)
            if (U && U.raw !== "unavailable" && U.raw !== "unknown" && typeof U.val == "number" && !isNaN(U.val)) {
              lt.style.display = "inline";
              const Rt = U.unit ? U.unit : "RPM";
              lt.innerHTML = `<span id="turbineRpmVal_${Y + 1}">${Math.round(U.val)}</span> ${Rt}`;
            } else
              lt.style.display = "none";
          const be = this._getEntityState(le.daily_energy_entity), Ie = this._getEntityState(le.monthly_energy_entity);
          ot && (ot.innerText = be && typeof be.val == "number" && !isNaN(be.val) ? be.val.toFixed(2) : "0.00"), Ke && (Ke.innerText = Ie && typeof Ie.val == "number" && !isNaN(Ie.val) ? Ie.val.toFixed(1) : "0.0");
          const Te = !!(le.daily_energy_entity || le.monthly_energy_entity);
          Re && (Re.style.display = Te ? "flex" : "none"), be && typeof be.val == "number" && !isNaN(be.val) && (H += be.val, D = !0), Ie && typeof Ie.val == "number" && !isNaN(Ie.val) && (j += Ie.val, st = !0);
        }
        const te = this.shadowRoot.getElementById("windTotalDailyVal"), Ne = this.shadowRoot.getElementById("windTotalMonthlyVal"), Z = this._getEntityState((_i = e.wind) == null ? void 0 : _i.daily_energy_entity), xe = this._getEntityState((yi = e.wind) == null ? void 0 : yi.monthly_energy_entity);
        te && (Z && typeof Z.val == "number" && !isNaN(Z.val) ? te.innerText = Z.val.toFixed(2) : D ? te.innerText = H.toFixed(2) : te.innerText = "0.00"), Ne && (xe && typeof xe.val == "number" && !isNaN(xe.val) ? Ne.innerText = xe.val.toFixed(1) : st ? Ne.innerText = j.toFixed(1) : Ne.innerText = "0.0");
      }
    let N = 0;
    if (n)
      if (((ui = e.aux) == null ? void 0 : ui.type) === "none" || ((bi = e.aux) == null ? void 0 : bi.type) === "wind")
        n.classList.add("hidden");
      else {
        n.classList.remove("hidden");
        const o = this._getEntityState((fi = e.aux) == null ? void 0 : fi.power_entity), V = this._formatPower(o, 2);
        N = V.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = V.str);
        const H = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let j = (mi = e.aux) == null ? void 0 : mi.title;
        ((vi = e.aux) == null ? void 0 : vi.type) === "microinverter" && (!j || j === "Вітрогенератор") ? j = "Мікроінвертор" : (xi = e.aux) != null && xi.type && H[e.aux.type] && (!j || j === "Вітрогенератор") ? j = H[e.aux.type] : j || (j = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = j), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = X[(wi = e.aux) == null ? void 0 : wi.type] || X.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((ki = e.aux) == null ? void 0 : ki.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), n.style.borderColor = "rgba(192, 132, 252, 0.45)", n.style.background = "rgba(88, 28, 135, 0.35)", n.classList.remove("glow-wind"), n.classList.add("glow-aux");
      }
    const q = this._getEntityState(($i = e.grid) == null ? void 0 : $i.power_entity), z = q ? q.unit === "W" ? q.val / 1e3 : q.val : 0, W = ((Ei = e.grid) == null ? void 0 : Ei.power_sign) || ((Si = e.grid) != null && Si.invert_power ? "inverted" : "deye"), ee = ((Bi = e.grid) == null ? void 0 : Bi.selling_enabled) === !0, y = (((Ci = e.grid) == null ? void 0 : Ci.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, w = this._getEntityState((Ii = e.grid) == null ? void 0 : Ii.status_entity), $ = this._getEntityState(((Ti = e.grid) == null ? void 0 : Ti.voltage_entity) || ((Pi = e.inverter) == null ? void 0 : Pi.voltage_entity)), u = ((Mi = e.grid) == null ? void 0 : Mi.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90;
    let k = !0;
    if (w) {
      const o = String(w.raw || w.val).toLowerCase();
      (o === "off" || o === "false" || o === "0" || o === "disconnected" || o === "offline" || o === "unavailable" || o === "unknown") && (k = !1);
    } else $ && typeof $.val == "number" && !isNaN($.val) && $.val < u && (k = !1);
    let L = !1, A = !1, Q = 0;
    k ? (Q = Math.abs(z), Q >= y && (W === "deye" ? z < 0 ? L = !0 : A = !0 : z > 0 ? L = !0 : A = !0), L && !ee && (L = !1)) : (Q = 0, L = !1, A = !1);
    const K = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (k ? (this._nodes.gridPowerVal.innerText = `${Q.toFixed(3)} ${i}`, L ? this._nodes.gridPowerVal.style.color = "#34d399" : A ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (k ? L ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : A ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), K && (k ? (K.classList.add("glow-grid"), K.style.borderColor = "rgba(56, 189, 248, 0.4)") : (K.classList.remove("glow-grid"), K.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const ce = this._getEntityState((Fi = e.grid) == null ? void 0 : Fi.import_daily_entity);
    this._nodes.gridImportDaily.innerText = ce ? `${ce.val.toFixed(2)} kWh` : "0.00 kWh";
    const _e = this._getEntityState((Vi = e.grid) == null ? void 0 : Vi.export_daily_entity);
    this._nodes.gridExportDaily.innerText = _e ? `${_e.val.toFixed(2)} kWh` : "0.00 kWh", this._calculateTariffs(ce ? ce.val : 0, _e ? _e.val : 0, m);
    const ye = this.shadowRoot.getElementById("nonEssentialNode"), fe = !!((Li = e.grid) != null && Li.show_non_essential && ((Ni = e.grid) != null && Ni.non_essential_power_entity)) || ((Ri = e.grid) == null ? void 0 : Ri.show_non_essential) !== !1 && !!((Ai = e.grid) != null && Ai.non_essential_power_entity);
    let ne = 0;
    if (ye)
      if (fe) {
        ye.classList.remove("hidden");
        const o = this._getEntityState(e.grid.non_essential_power_entity), V = this._formatPower(o, 0);
        ne = V.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = V.str);
      } else
        ye.classList.add("hidden");
    const Me = this.shadowRoot.getElementById("carNode"), ze = !!((Di = e.grid) != null && Di.show_car && ((zi = e.grid) != null && zi.car_power_entity)) || ((Wi = e.grid) == null ? void 0 : Wi.show_car) !== !1 && !!((Hi = e.grid) != null && Hi.car_power_entity);
    let Be = 0;
    if (Me)
      if (ze) {
        Me.classList.remove("hidden");
        const o = this._getEntityState(e.grid.car_power_entity), V = this._formatPower(o, 0);
        Be = V.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = V.str);
      } else
        Me.classList.add("hidden");
    const We = this._getEntityState((ji = e.battery) == null ? void 0 : ji.soc_entity), ct = We ? We.val : 80;
    this._nodes.masterBatterySoc.innerText = `${ct.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const Fe = this._getEntityState((qi = e.battery) == null ? void 0 : qi.power_entity), me = this._getEntityState((Gi = e.battery) == null ? void 0 : Gi.current_entity), Ve = Fe ? Fe.unit === "W" ? Fe.val / 1e3 : Fe.val : 0, He = ((Oi = e.battery) == null ? void 0 : Oi.power_sign) || ((Yi = e.battery) != null && Yi.invert_power ? "standard" : "deye");
    let pe = !1, he = !1;
    const ke = Math.abs(Ve);
    if (ke >= 0.02 ? He === "deye" ? Ve < 0 ? pe = !0 : he = !0 : Ve > 0 ? pe = !0 : he = !0 : me && Math.abs(me.val) >= 0.3 && (He === "deye" ? me.val < 0 ? pe = !0 : he = !0 : me.val > 0 ? pe = !0 : he = !0), this._isCharging = pe, this._isDischarging = he, this._nodes.masterBatteryFlowHint) {
      let o = this._t("bat_idle"), V = "#94a3b8";
      pe ? (o = this._t("bat_dir_charge"), V = "#34d399") : he && (o = this._t("bat_dir_discharge"), V = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ke.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${V}; font-weight: 700; font-size: 14px;">${o}</span>`;
    }
    const je = this._getEntityState((Ui = e.battery) == null ? void 0 : Ui.voltage_entity), Xe = je ? je.val.toFixed(2) : "53.24", Ze = me ? me.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${Xe.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${Ze.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((Ki = e.battery) == null ? void 0 : Ki.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const o = ((Ji = e.battery) == null ? void 0 : Ji.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${o}%`;
    }
    const Qe = A ? Q : 0, et = he ? ke : 0, tt = b + S + (N > 0 ? N : 0) + Qe + et, T = pe ? ke : 0, O = L ? Q : 0, ae = T + O + ne + Be, re = Math.max(0, tt - ae);
    let se = 0;
    (((Xi = e.load) == null ? void 0 : Xi.subloads) || []).forEach((o, V) => {
      const H = this.shadowRoot.getElementById(`subloadVal_${V}`), j = this._getEntityState(o.entity), D = this._formatPower(j, 0);
      se += D.kw, H && (H.innerText = D.str);
    });
    const ve = this._getEntityState((Zi = e.inverter) == null ? void 0 : Zi.self_consumption_entity), $e = ve && typeof ve.val == "number" && !isNaN(ve.val) ? Math.max(0, ve.unit === "W" ? ve.val / 1e3 : ve.val) : null;
    let ue = this._getEntityState((Qi = e.load) == null ? void 0 : Qi.essential_power_entity);
    !ue && (!((ea = e.load) != null && ea.essential_power_entity) || ((ta = e.load) == null ? void 0 : ta.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((ia = e.load) == null ? void 0 : ia.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (ue = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const Le = ue && typeof ue.val == "number" && !isNaN(ue.val) ? Math.max(0, ue.unit === "W" ? ue.val / 1e3 : ue.val) : 0, Tt = !!(ue && Le > 0), Pt = ((aa = e.load) == null ? void 0 : aa.separate_export) !== !1, Mt = ((sa = e.load) == null ? void 0 : sa.auto_calculate) !== !1;
    let ht = Le;
    Pt && L && O > 0 && Le >= O - 0.05 && (ht = Math.max(0, Le - O));
    const Ft = (((oa = e.inverter) == null ? void 0 : oa.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
    let qe = 0, Ee = 0;
    if (Tt && (!Mt || ht > 0)) {
      let o = Math.max(se, ht);
      o = Math.min(re, o), qe = o, $e !== null ? Ee = $e : Ee = Math.max(0, re - qe);
    } else
      $e !== null ? Ee = $e : Ee = Math.min(re, Ft), qe = Math.max(se, Math.max(0, re - Ee));
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((na = e.inverter) == null ? void 0 : na.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", Ee < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(Ee * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${Ee.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${qe.toFixed(3)} ${i}`;
    const vt = this._getEntityState((ra = e.load) == null ? void 0 : ra.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = vt ? `${vt.val.toFixed(2)} kWh` : "12,40 kWh";
    const it = ((la = e.battery) == null ? void 0 : la.parallel_batteries) || ((ca = (da = e.battery) == null ? void 0 : da.modules) == null ? void 0 : ca.length) || 2;
    let at = 0;
    for (let o = 0; o < it; o++) {
      const V = ((ha = (pa = e.battery) == null ? void 0 : pa.modules) == null ? void 0 : ha[o]) || ((_a = (ga = e.battery) == null ? void 0 : ga.module_entities) == null ? void 0 : _a[o]) || {}, H = V.capacity_kwh !== void 0 ? parseFloat(V.capacity_kwh) : o === 0 ? 7.88 : o === 1 ? 5.12 : (((ya = e.battery) == null ? void 0 : ya.capacity_kwh) || 13) / it;
      at += isNaN(H) ? 0 : H;
    }
    at <= 0 && (at = parseFloat((ua = e.battery) == null ? void 0 : ua.capacity_kwh) || 13);
    const gt = this._getEntityState(((ba = e.battery) == null ? void 0 : ba.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), _t = gt && !isNaN(gt.val) ? gt.val : null, yt = _t !== null && _t <= 40 ? _t : at, xt = this._getEntityState(((fa = e.battery) == null ? void 0 : fa.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), Vt = xt ? xt.val : 80, Lt = yt * (Vt / 100), wt = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${Lt.toFixed(2).replace(".", ",")} ${wt} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${yt.toFixed(1).replace(".", ",")})</span></span>`);
    const kt = this._getEntityState(((ma = e.battery) == null ? void 0 : ma.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), Nt = kt ? kt.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${Nt.toFixed(1).replace(".", ",")}`);
    const de = (va = e.battery) == null ? void 0 : va.charge_daily_entity;
    let B = this._getEntityState(de);
    B || (B = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge") || this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const P = (xa = e.battery) == null ? void 0 : xa.discharge_daily_entity;
    let F = this._getEntityState(P);
    F || (F = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = B ? `${B.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = F ? `${F.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const Se = [];
    for (let o = 1; o <= it; o++) {
      const V = this.shadowRoot.getElementById(`batPackSoc_${o}`), H = this.shadowRoot.getElementById(`batPackVolt_${o}`), j = this.shadowRoot.getElementById(`batPackCurr_${o}`), D = this.shadowRoot.getElementById(`batPackPower_${o}`), st = this.shadowRoot.getElementById(`batPackTempVal_${o}`), te = this.shadowRoot.getElementById(`batPackDelta_${o}`), Ne = this.shadowRoot.getElementById(`batPackDeltaVal_${o}`), Z = this.shadowRoot.getElementById(`batPackStateTag_${o}`), xe = this.shadowRoot.getElementById(`batPackKwh_${o}`), Y = this.shadowRoot.getElementById(`batPackBar1_${o}`), le = this.shadowRoot.getElementById(`batPackBar2_${o}`), Ce = this.shadowRoot.getElementById(`batPackBar3_${o}`), ie = this.shadowRoot.getElementById(`batPackBar4_${o}`), G = ((ka = (wa = e.battery) == null ? void 0 : wa.modules) == null ? void 0 : ka[o - 1]) || ((Ea = ($a = e.battery) == null ? void 0 : $a.module_entities) == null ? void 0 : Ea[o - 1]) || {}, we = G.soc_entity || G.soc || `sensor.bms_rack${o}_soc`, ot = G.current_entity || `sensor.bms_rack${o}_current`, Ke = G.voltage_entity || G.volt || `sensor.bms_rack${o}_voltage`, Re = G.power_entity || `sensor.bms_rack${o}_power`, Wt = G.temperature_entity || G.temp || `sensor.bms_rack${o}_temperature`, ut = G.cell_delta_entity || G.delta_entity || `sensor.bms_rack${o}_cell_delta`, bt = this._getEntityState(we), nt = this._getEntityState(ot), ft = this._getEntityState(Ke), Ae = this._getEntityState(Re), mt = this._getEntityState(Wt);
      let U = this._getEntityState(ut);
      if (U || (U = this._getEntityState(`sensor.bms_rack${o}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${o}_cell_difference`)), !U && (G.max_cell_voltage_entity || G.min_cell_voltage_entity)) {
        const De = this._getEntityState(G.max_cell_voltage_entity), Ia = this._getEntityState(G.min_cell_voltage_entity);
        if (De && Ia) {
          const Ht = Math.abs(De.val - Ia.val);
          U = { val: Ht < 1 ? Math.round(Ht * 1e3) : Ht, unit: "mV" };
        }
      }
      const rt = bt ? bt.val : o === 1 ? 82 : o === 2 ? 85 : 75, lt = ft ? ft.val : o === 1 ? 54.1 : o === 2 ? 54 : 52.4, be = nt ? nt.val : o === 1 ? 18.4 : o === 2 ? 25.2 : 8.2, Ie = mt ? mt.val : o === 1 ? 36.5 : o === 2 ? 21 : 22.5;
      let Te = null;
      if (U) {
        let De = U.val;
        De < 1 && De > 0 ? Te = Math.round(De * 1e3) : Te = Math.round(De);
      } else this._hass || (Te = o === 1 ? 12 : o === 2 ? 8 : 15);
      let Pe = 0;
      Ae ? Pe = Math.abs(this._formatPower(Ae).kw) : Pe = lt * Math.abs(be) / 1e3;
      const It = (G.capacity_kwh !== void 0 ? parseFloat(G.capacity_kwh) : o === 1 ? 7.88 : o === 2 ? 5.12 : yt / it) * (rt / 100);
      V && (V.innerText = `${rt.toFixed(0)}%`), H && (H.innerText = `${lt.toFixed(1).replace(".", ",")} V`), j && (j.innerText = `${Math.abs(be).toFixed(1).replace(".", ",")} A`), D && (D.innerText = `${Pe.toFixed(2).replace(".", ",")} ${i}`), st && (st.innerText = `${Ie.toFixed(1).replace(".", ",")}`), Ne && (Te !== null && !isNaN(Te) ? (Ne.innerText = `${Te} mV`, te && (te.style.display = "inline-flex", Te <= 25 ? (te.style.color = "#34d399", te.style.background = "rgba(52, 211, 153, 0.12)", te.style.borderColor = "rgba(52, 211, 153, 0.3)") : Te <= 50 ? (te.style.color = "#fbbf24", te.style.background = "rgba(251, 191, 36, 0.12)", te.style.borderColor = "rgba(251, 191, 36, 0.3)") : (te.style.color = "#f87171", te.style.background = "rgba(248, 113, 113, 0.16)", te.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : te && (te.style.display = "none")), xe && (xe.innerText = `~${It.toFixed(2).replace(".", ",")} ${wt}`);
      let ge = !1;
      he ? ge = !1 : pe ? ge = !0 : nt ? ge = (((Sa = e.battery) == null ? void 0 : Sa.power_sign) || "deye") === "deye" ? be < 0 : be > 0 : ge = be < 0;
      const dt = this.shadowRoot.getElementById(`batBranchBadge_${o}`);
      dt && (Pe < 0.02 ? (dt.className = "es-bat-branch-badge es-mono idle", dt.innerHTML = `<span>0.00 ${i}</span>`) : ge ? (dt.className = "es-bat-branch-badge es-mono charge", dt.innerHTML = `<span>${Pe.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (dt.className = "es-bat-branch-badge es-mono discharge", dt.innerHTML = `<span>${Pe.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const Je = this.shadowRoot.getElementById(`batPackCard_${o}`), Ba = Je == null ? void 0 : Je.querySelector(".es-battery-gauge"), Ca = Je == null ? void 0 : Je.querySelector(".es-battery-gauge-nipple");
      Je && (Je.style.borderColor = ge ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), Ba && (Ba.style.borderColor = ge ? "#10b981" : "#ef4444"), Ca && (Ca.style.background = ge ? "#10b981" : "#ef4444"), Z && (ge ? (Z.className = "es-bat-state-tag charge", Z.innerText = this._t("bat_charge"), Z.style.color = "#34d399", Z.style.background = "rgba(16, 185, 129, 0.18)", Z.style.borderColor = "rgba(16, 185, 129, 0.4)") : (Z.className = "es-bat-state-tag discharge", Z.innerText = this._t("bat_discharge"), Z.style.color = "#f87171", Z.style.background = "rgba(239, 68, 68, 0.18)", Z.style.borderColor = "rgba(239, 68, 68, 0.4)")), D && (D.style.color = ge ? "#34d399" : "#f87171"), j && (j.style.color = ge ? "#38bdf8" : "#f87171");
      const At = ge ? "active-green" : "active-red";
      Y && le && Ce && ie && (Y.className = `es-bat-bar ${rt >= 10 ? At : ""}`, le.className = `es-bat-bar ${rt >= 35 ? At : ""}`, Ce.className = `es-bat-bar ${rt >= 65 ? At : ""}`, ie.className = `es-bat-bar ${rt >= 85 ? At : ""}`), Se.push({ kwNum: Pe, isChg: ge });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      k ? z : 0,
      L,
      A,
      b,
      qe,
      ke,
      pe,
      he,
      Be,
      Se,
      ne,
      se,
      N
    ), this._updateControlSliders();
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
    var e, i, p, l, r, c, b, g, C;
    try {
      const f = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!f) return;
      const v = f.getBoundingClientRect();
      if (v.width === 0 || v.height === 0) return;
      const x = this._config || oe, m = this._scale || 1, h = (y, w = 0.5, $ = 0.5) => {
        if (!y) return null;
        const u = y.getBoundingClientRect();
        return {
          x: Math.round((u.left - v.left + u.width * w) / m),
          y: Math.round((u.top - v.top + u.height * $) / m)
        };
      }, d = (y, w, $) => {
        const u = this.shadowRoot.getElementById(y), k = this.shadowRoot.getElementById(w);
        u && u.setAttribute("d", $ || ""), k && k.setAttribute("d", $ || "");
      }, s = this.shadowRoot.getElementById("gridNode"), a = this.shadowRoot.getElementById("inverterNode"), t = this.shadowRoot.getElementById("essentialNode"), _ = this.shadowRoot.getElementById("totalPvPowerBadge"), E = this.shadowRoot.getElementById("masterBatteryHub"), I = this.shadowRoot.getElementById("carNode");
      if (s && a) {
        const y = s.getBoundingClientRect(), w = a.getBoundingClientRect();
        if (y.bottom < w.top + 30) {
          const u = h(s, 0.7, 1), k = h(a, 0.2, 0);
          if (u && k) {
            const L = Math.round((u.y + k.y) / 2), A = `M ${u.x} ${u.y} C ${u.x} ${L}, ${k.x} ${L}, ${k.x} ${k.y}`;
            d("pathGridInvBase", "pathGridInvFlow", A);
          }
        } else {
          const u = Math.round((w.top - v.top + w.height * 0.55) / m), k = Math.round((y.right - v.left) / m), L = Math.round((w.left - v.left) / m), A = Math.round((y.top - v.top + y.height * 0.5) / m);
          let Q = "";
          if (Math.abs(A - u) <= 8)
            Q = `M ${k} ${u} L ${L} ${u}`;
          else {
            const K = Math.round(k + 24);
            Q = `M ${k} ${A} C ${K} ${A}, ${K} ${u}, ${L} ${u}`;
          }
          d("pathGridInvBase", "pathGridInvFlow", Q);
        }
      }
      if (a && t) {
        const y = t.getBoundingClientRect(), w = a.getBoundingClientRect();
        if (y.bottom < w.top + 30) {
          const u = h(a, 0.8, 0), k = h(t, 0.3, 1);
          if (u && k) {
            const L = Math.round((u.y + k.y) / 2), A = `M ${u.x} ${u.y} C ${u.x} ${L}, ${k.x} ${L}, ${k.x} ${k.y}`;
            d("pathInvLoadBase", "pathInvLoadFlow", A);
          }
        } else {
          const u = Math.round((w.top - v.top + w.height * 0.55) / m), k = Math.round((w.right - v.left) / m), L = Math.round((y.left - v.left) / m), A = Math.round((y.top - v.top + y.height * 0.5) / m);
          let Q = "";
          if (Math.abs(A - u) <= 8)
            Q = `M ${k} ${u} L ${L} ${u}`;
          else {
            const K = Math.round(L - 24);
            Q = `M ${k} ${u} C ${K} ${u}, ${K} ${A}, ${L} ${A}`;
          }
          d("pathInvLoadBase", "pathInvLoadFlow", Q);
        }
      }
      if (_ && a) {
        const y = h(_, 0.5, 1), w = h(a, 0.5, 0);
        if (y && w) {
          const $ = `M ${y.x} ${y.y} L ${w.x} ${w.y}`;
          d("pathSolarInvBase", "pathSolarInvFlow", $);
        }
      }
      if (a && E) {
        const y = h(a, 0.5, 1), w = h(E, 0.5, 0);
        if (y && w) {
          const $ = `M ${y.x} ${y.y} L ${w.x} ${w.y}`;
          d("pathInvBatBase", "pathInvBatFlow", $);
        }
      }
      const M = this.shadowRoot.getElementById("nonEssentialNode"), R = M && !M.classList.contains("hidden") && M.offsetHeight > 0, n = I && !I.classList.contains("hidden") && I.offsetHeight > 0;
      if (s && R) {
        const y = h(s, 0.5, 1), w = h(M, 0.5, 0);
        if (y && w) {
          const $ = `M ${y.x} ${y.y} L ${w.x} ${w.y}`;
          d("pathGridNonEssBase", "pathGridNonEssFlow", $);
        }
      } else
        d("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (n) {
        const y = R ? M : s;
        if (y) {
          const w = h(y, 0.5, 1), $ = h(I, 0.5, 0);
          if (w && $) {
            const u = `M ${w.x} ${w.y} L ${$.x} ${$.y}`;
            d("pathNonEssCarBase", "pathNonEssCarFlow", u);
          }
        } else
          d("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        d("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const S = this.shadowRoot.getElementById("subloadsBusContainer");
      if (t && S) {
        const y = h(t, 0.5, 1), w = h(S, 0.5, 0);
        if (y && w) {
          const $ = `M ${y.x} ${y.y} L ${w.x} ${w.y}`;
          d("pathLoadSubloadsBase", "pathLoadSubloadsFlow", $);
        }
      } else
        d("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const N = this.shadowRoot.getElementById("auxNode");
      if (a && N && !N.classList.contains("hidden") && N.offsetHeight > 0) {
        const y = h(N, 0.35, 1), w = h(a, 0.9, 0);
        if (y && w) {
          const $ = Math.round((y.y + w.y) / 2), u = `M ${y.x} ${y.y} C ${y.x} ${$}, ${w.x} ${$}, ${w.x} ${w.y}`;
          d("pathInvAuxBase", "pathInvAuxFlow", u);
        }
      } else
        d("pathInvAuxBase", "pathInvAuxFlow", "");
      d("pathBatStemBase", "pathBatStemFlow", "");
      const q = this.shadowRoot.getElementById("windStationContainer"), W = ((i = x.wind) == null ? void 0 : i.show) !== !1 || ((p = x.aux) == null ? void 0 : p.type) === "wind" ? ((l = x.wind) == null ? void 0 : l.turbine_count) || ((c = (r = x.wind) == null ? void 0 : r.turbines) == null ? void 0 : c.length) || 2 : 0;
      for (let y = 1; y <= 4; y++)
        if (y <= W && q && !q.classList.contains("hidden")) {
          const w = this.shadowRoot.getElementById(`turbineCard_${y}`);
          if (w && E) {
            const $ = h(w, 0.5, 1), u = W === 1 ? 0.5 : 0.28 + (y - 1) / (W - 1) * 0.44, k = h(E, u, 0);
            if ($ && k) {
              const L = `M ${$.x} ${$.y} L ${k.x} ${k.y}`;
              d(`pathTurbine${y}Base`, `pathTurbine${y}Flow`, L);
            }
          } else
            d(`pathTurbine${y}Base`, `pathTurbine${y}Flow`, "");
        } else
          d(`pathTurbine${y}Base`, `pathTurbine${y}Flow`, "");
      const ee = ((b = x.battery) == null ? void 0 : b.parallel_batteries) || ((C = (g = x.battery) == null ? void 0 : g.modules) == null ? void 0 : C.length) || 2;
      for (let y = 1; y <= 8; y++) {
        const w = this.shadowRoot.getElementById(`batPackCard_${y}`), $ = this.shadowRoot.getElementById(`batBranchBadge_${y}`);
        if (y <= ee && E && w) {
          const u = h(E, 0.5, 1), k = h(w, 0.5, 0);
          if (u && k) {
            const L = Math.round(u.y + (k.y - u.y) * 0.45);
            let A = "";
            Math.abs(u.x - k.x) <= 4 ? A = `M ${u.x} ${u.y} L ${k.x} ${k.y}` : A = `M ${u.x} ${u.y} C ${u.x} ${L}, ${k.x} ${L}, ${k.x} ${k.y}`, d(`pathBat${y}Base`, `pathBat${y}Flow`, A), $ && ($.style.left = `${k.x}px`, $.style.top = `${L}px`, $.style.display = "flex");
          } else
            d(`pathBat${y}Base`, `pathBat${y}Flow`, ""), $ && ($.style.display = "none");
        } else
          d(`pathBat${y}Base`, `pathBat${y}Flow`, ""), $ && ($.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, i, p, l, r;
    try {
      const c = this._config || oe, b = this._scale || 1, g = this.shadowRoot.getElementById("solarBusSvg"), C = ((e = c.solar) == null ? void 0 : e.pv_count) || ((p = (i = c.solar) == null ? void 0 : i.strings) == null ? void 0 : p.length) || 3;
      if (g && C > 0) {
        const x = g.getBoundingClientRect(), m = this.shadowRoot.getElementById("pvPanel_1"), h = this.shadowRoot.getElementById(`pvPanel_${C}`), d = this.shadowRoot.getElementById("solarBusBase"), s = this.shadowRoot.getElementById("solarFlowCollector"), a = this.shadowRoot.getElementById("solarBusStemBase"), t = this.shadowRoot.getElementById("solarBusStemFlow"), _ = this.shadowRoot.getElementById("solarBusFeeders");
        if (m && h && x.width > 0) {
          const E = m.getBoundingClientRect(), I = h.getBoundingClientRect(), M = Math.round((E.left - x.left + E.width / 2) / b), R = Math.round((I.left - x.left + I.width / 2) / b), n = 13, S = Math.round((M + R) / 2);
          if (d && (d.setAttribute("x1", M), d.setAttribute("y1", n), d.setAttribute("x2", R), d.setAttribute("y2", n)), s && (s.setAttribute("x1", M), s.setAttribute("y1", n), s.setAttribute("x2", R), s.setAttribute("y2", n)), a && (a.setAttribute("x1", S), a.setAttribute("y1", n), a.setAttribute("x2", S), a.setAttribute("y2", 26)), t && (t.setAttribute("x1", S), t.setAttribute("y1", n), t.setAttribute("x2", S), t.setAttribute("y2", 26)), _) {
            let N = "";
            for (let q = 1; q <= C; q++) {
              const z = this.shadowRoot.getElementById(`pvPanel_${q}`);
              if (z) {
                const W = z.getBoundingClientRect(), ee = Math.round((W.left - x.left + W.width / 2) / b);
                N += `
                  <line x1="${ee}" y1="0" x2="${ee}" y2="${n}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${ee}" y1="0" x2="${ee}" y2="${n}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            _.innerHTML = N;
          }
        }
      }
      const f = this.shadowRoot.getElementById("subloadsBusSvg"), v = ((r = (l = c.load) == null ? void 0 : l.subloads) == null ? void 0 : r.length) || 3;
      if (f && v > 0) {
        const x = f.getBoundingClientRect(), m = this.shadowRoot.getElementById("subloadCard_0"), h = this.shadowRoot.getElementById(`subloadCard_${v - 1}`), d = this.shadowRoot.getElementById("essentialNode"), s = this.shadowRoot.getElementById("subloadsBusBase"), a = this.shadowRoot.getElementById("subloadsFlowCollector"), t = this.shadowRoot.getElementById("subloadsBusStemBase"), _ = this.shadowRoot.getElementById("subloadsBusStemFlow"), E = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (m && h && x.width > 0) {
          const I = m.getBoundingClientRect(), M = h.getBoundingClientRect(), R = Math.round((I.left - x.left + I.width / 2) / b), n = Math.round((M.left - x.left + M.width / 2) / b), S = 13;
          let N = Math.round((R + n) / 2);
          if (d) {
            const W = d.getBoundingClientRect();
            N = Math.round((W.left - x.left + W.width / 2) / b);
          }
          const q = Math.min(R, N), z = Math.max(n, N);
          if (s && (s.setAttribute("x1", q), s.setAttribute("y1", S), s.setAttribute("x2", z), s.setAttribute("y2", S)), a && (a.setAttribute("x1", q), a.setAttribute("y1", S), a.setAttribute("x2", z), a.setAttribute("y2", S)), t && (t.setAttribute("x1", N), t.setAttribute("y1", 0), t.setAttribute("x2", N), t.setAttribute("y2", S)), _ && (_.setAttribute("x1", N), _.setAttribute("y1", 0), _.setAttribute("x2", N), _.setAttribute("y2", S)), E) {
            let W = "";
            for (let ee = 0; ee < v; ee++) {
              const y = this.shadowRoot.getElementById(`subloadCard_${ee}`);
              if (y) {
                const w = y.getBoundingClientRect(), $ = Math.round((w.left - x.left + w.width / 2) / b);
                W += `
                  <line x1="${$}" y1="${S}" x2="${$}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${$}" y1="${S}" x2="${$}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            E.innerHTML = W;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, i, p, l, r) {
    if (!e) return;
    if (!r) {
      e.setAttribute("class", `flow-pulse ${i} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const c = p ? "flow-reverse" : "flow-forward", b = p ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${i} ${c}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", l), e.style.animation = `${b} ${l} linear infinite`;
  }
  _updateFlowAnimations(e, i, p, l, r, c, b, g, C, f = [], v = 0, x = 0, m = 0) {
    var me, Ve, He, pe, he, ke, pt, je, Xe, Ze, Qe, et, tt;
    const h = this._config || oe, d = ((me = h.animations) == null ? void 0 : me.enabled) !== !1, s = ((Ve = h.animations) == null ? void 0 : Ve.speed) || 1.2, a = (T, O = 10) => {
      const ae = Math.abs(T);
      if (ae < 0.05) return "2.5s";
      const re = Math.min(1, ae / O);
      return `${Math.max(0.4, (2.6 - re * 1.9) * (s / 1.2)).toFixed(2)}s`;
    }, t = this.shadowRoot.getElementById("pathGridInvFlow"), _ = Math.abs(e), E = (((He = h.grid) == null ? void 0 : He.min_power_threshold) !== void 0 ? h.grid.min_power_threshold : 50) / 1e3, I = ((pe = h.grid) == null ? void 0 : pe.selling_enabled) === !0, M = d && _ >= E && (p || i && I);
    this._applyFlowAnimation(t, "flow-grid", i, a(e, 10), M);
    const R = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(R, "flow-solar", !1, a(l, 12), d && l >= 0.05);
    const n = this.shadowRoot.getElementById("pathInvLoadFlow"), S = Math.abs(r);
    this._applyFlowAnimation(n, "flow-load", !1, a(r, 10), d && S >= 0.05);
    const N = this.shadowRoot.getElementById("pathInvBatFlow"), q = Math.abs(c), z = d && q >= 0.02 && (b || g), W = b ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(N, W, g, a(c, 8), z);
    const ee = this.shadowRoot.getElementById("pathGridNonEssFlow"), y = Math.abs(v);
    this._applyFlowAnimation(ee, "flow-grid", !1, a(v, 5), d && y >= 0.05);
    const w = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), $ = Math.abs(C);
    this._applyFlowAnimation(w, "flow-car", !1, a(C, 7), d && $ >= 0.05);
    const u = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), k = Math.abs(x || r);
    this._applyFlowAnimation(u, "flow-load", !1, a(k, 8), d && k >= 0.05);
    const L = this.shadowRoot.getElementById("pathInvAuxFlow"), A = Math.abs(m);
    this._applyFlowAnimation(L, "flow-aux", !0, a(m, 5), d && A >= 0.05);
    const Q = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(Q, W, g, a(c, 8), z);
    const K = this.shadowRoot.getElementById("solarFlowCollector"), ce = this.shadowRoot.getElementById("solarBusStemFlow");
    if (K)
      if (!d || l < 0.05)
        K.style.opacity = "0.2", K.style.animation = "none", ce && (ce.style.opacity = "0.2", ce.style.animation = "none");
      else {
        const T = a(l, 12);
        K.style.opacity = "1", K.setAttribute("class", "flow-line"), K.style.animation = `esDashflow ${T} linear infinite`, ce && (ce.style.opacity = "1", ce.setAttribute("class", "flow-line"), ce.style.animation = `esDashflow ${T} linear infinite`);
      }
    const _e = this.shadowRoot.getElementById("subloadsFlowCollector"), ye = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (_e)
      if (!d || k < 0.05)
        _e.style.opacity = "0.2", _e.style.animation = "none", ye && (ye.style.opacity = "0.2", ye.style.animation = "none");
      else {
        const T = a(k, 8);
        _e.style.opacity = "1", _e.setAttribute("class", "flow-line"), _e.style.animation = `esDashflow ${T} linear infinite`, ye && (ye.style.opacity = "1", ye.setAttribute("class", "flow-line"), ye.style.animation = `esDashflow ${T} linear infinite`);
      }
    const fe = this.shadowRoot.getElementById("batteryFlowCollector"), ne = this.shadowRoot.getElementById("batteryBusStemFlow"), Me = this.shadowRoot.getElementById("batteryBusFeeders"), ze = g ? "#f87171" : "#34d399", Be = g ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (fe)
      if (fe.style.stroke = ze, fe.style.filter = Be, ne && (ne.style.stroke = ze, ne.style.filter = Be), !d || !z)
        fe.style.opacity = "0.2", fe.style.animation = "none", ne && (ne.style.opacity = "0.2", ne.style.animation = "none");
      else {
        const T = a(c, 8), O = g ? "esDashflowRev" : "esDashflow";
        fe.style.opacity = "1", fe.setAttribute("class", g ? "flow-line-reverse" : "flow-line"), fe.style.animation = `${O} ${T} linear infinite`, ne && (ne.style.opacity = "1", ne.setAttribute("class", g ? "flow-line-reverse" : "flow-line"), ne.style.animation = `${O} ${T} linear infinite`);
      }
    Me && Me.querySelectorAll("line").forEach((T) => {
      if (T.style.stroke = ze, T.style.filter = Be, !d || !z)
        T.style.opacity = "0.2", T.style.animation = "none";
      else {
        const O = a(c, 8), ae = g ? "esDashflowRev" : "esDashflow";
        T.style.opacity = "1", T.setAttribute("class", g ? "flow-line-reverse" : "flow-line"), T.style.animation = `${ae} ${O} linear infinite`;
      }
    });
    for (let T = 1; T <= 8; T++) {
      const O = this.shadowRoot.getElementById(`pathBat${T}Flow`);
      if (!O) continue;
      const ae = f[T - 1], re = ae ? ae.kwNum : 0, se = d && (re >= 0.02 || z), ve = g;
      this._applyFlowAnimation(O, W, ve, a(re || c, 8), se);
    }
    for (let T = 0; T < 6; T++) {
      const O = this.shadowRoot.getElementById(`pathSubload${T}Flow`);
      if (!O) continue;
      const ae = (ke = (he = h.load) == null ? void 0 : he.subloads) == null ? void 0 : ke[T], re = ae ? this._getEntityState(ae.entity) : null, se = re ? this._formatPower(re, 2).kw : T === 0 ? 2 : T === 1 ? 3 : 4;
      this._applyFlowAnimation(O, "flow-load", !1, a(se, 8), d && se >= 0.05);
    }
    const We = ((pt = h.wind) == null ? void 0 : pt.show) !== !1 || ((je = h.aux) == null ? void 0 : je.type) === "wind", ct = We ? ((Xe = h.wind) == null ? void 0 : Xe.turbine_count) || ((Qe = (Ze = h.wind) == null ? void 0 : Ze.turbines) == null ? void 0 : Qe.length) || 2 : 0, Fe = ((et = h.wind) == null ? void 0 : et.turbines) || [];
    for (let T = 1; T <= 4; T++) {
      const O = this.shadowRoot.getElementById(`pathTurbine${T}Flow`);
      if (O)
        if (T <= ct && We) {
          const ae = Fe[T - 1] || {}, re = this._hass ? 0 : T === 1 ? 1.45 : 0.85, se = this._getEntityState(ae.power_entity || `sensor.wind_turbine_${T}_power`);
          let $e = this._formatPower(se, re).kw * 1e3;
          se && se.unit === "W" && ($e = se.val);
          const ue = ae.animation_threshold ?? ((tt = h.wind) == null ? void 0 : tt.animation_threshold) ?? 50, Le = $e >= ue;
          this._applyFlowAnimation(O, "flow-wind", !1, a($e / 1e3, 3), d && Le);
        } else
          this._applyFlowAnimation(O, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", Ma);
window.customCards = window.customCards || [];
window.customCards.some((Dt) => Dt.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  Ma as EnergyStationCard,
  Ta as I18N
};
