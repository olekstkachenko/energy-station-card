const ae = {
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
}, K = {
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  pv_panel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,
  inverter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,
  grid_tower: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,
  house: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,
  boiler: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,
  heat_pump: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,
  air_conditioner: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,
  washing_machine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,
  other: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,
  microinverter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,
  generator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,
  wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,
  wind_turbine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
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
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,
  fullscreen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,
  house_outline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,
  battery_vertical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,
  sun_mode: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`
};
class _a extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general";
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    this._config = JSON.parse(JSON.stringify(e || ae)), this.render();
  }
  connectedCallback() {
    this.render();
  }
  _valueChanged(e, i) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const g = e.split(".");
    let l = this._config;
    for (let c = 0; c < g.length - 1; c++)
      l[g[c]] || (l[g[c]] = {}), l = l[g[c]];
    l[g[g.length - 1]] = i;
    const n = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  _switchTab(e) {
    this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || ae)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    ], this._config.grid.power_entity = "sensor.deye_12k_inverter_total_grid_power", this._config.grid.import_daily_entity = "sensor.deye_12k_inverter_daily_energy_bought", this._config.grid.export_daily_entity = "sensor.deye_12k_inverter_daily_energy_sold", this._config.load.essential_power_entity = "sensor.deye_12k_inverter_load_power", this._config.load.daily_house_entity = "sensor.deye_12k_inverter_daily_load_energy") : e === "deye_solarman" && (this._config.inverter.model_name = "DEYE HYBRID", this._config.solar.pv_count = 2, this._config.solar.total_power_entity = "sensor.solarman_pv_total_power", this._config.solar.daily_yield_entity = "sensor.solarman_daily_production", this._config.solar.strings = [
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
    ], this._config.inverter.power_entity = "sensor.solarman_inverter_power", this._config.battery.soc_entity = "sensor.solarman_battery_soc", this._config.battery.power_entity = "sensor.solarman_battery_power", this._config.grid.power_entity = "sensor.solarman_grid_external_power", this._config.load.essential_power_entity = "sensor.solarman_essential_load");
    const i = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(i), this.render();
  }
  render() {
    var i, g, l, n, c, v, u, $, S, f, w, b, h, d, s, a, t, _, x, M, T, L, r, C, N, O, D, A, J, p, m, k, y, E, R, W, ie, Q, pe, ye, be, le, re, He, me, ue, Be, qe, ge, de, ve, at, Ve, je, Ge, Oe, Ye, Ue, st, ot, Ke, Se, B, z, H, he, ee, Le, Ce, Ie, Te, nt, rt, lt, ht, St, Ct, _t, yt, It, Tt, Je, Mt, Xe, ut, bt, ft, mt, vt;
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
            <input type="text" id="ctrlSellPower" value="${((g = e.controls) == null ? void 0 : g.sell_power_entity) || ""}" placeholder="number.deye_12k_inverter_export_surplus_power">
          </div>
          <div class="field-row">
            <label>Сенсор струму заряду АКБ від мережі:</label>
            <input type="text" id="ctrlGridCharge" value="${((l = e.controls) == null ? void 0 : l.grid_charge_entity) || ""}" placeholder="number.deye_12k_inverter_grid_charge_current">
          </div>
          <div class="field-row">
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((n = e.animations) == null ? void 0 : n.enabled) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((c = e.animations) == null ? void 0 : c.speed) || 1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((v = e.animations) == null ? void 0 : v.speed) || 1.2}s</span>
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((u = e.solar) == null ? void 0 : u.pv_count) || 3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${(($ = e.solar) == null ? void 0 : $.pv_count) || 3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((S = e.solar) == null ? void 0 : S.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((f = e.solar) == null ? void 0 : f.daily_yield_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((w = e.solar) == null ? void 0 : w.target_daily_yield) || 55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((b = e.solar) == null ? void 0 : b.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((h = e.solar) == null ? void 0 : h.pv_count) || 3 }).map((se, I) => {
      var Ae, De;
      const F = I + 1, P = ((De = (Ae = e.solar) == null ? void 0 : Ae.strings) == null ? void 0 : De[I]) || {}, we = `sensor.deye_12k_inverter_pv${F}_voltage`, Ne = `sensor.deye_12k_inverter_pv${F}_current`, Re = `sensor.deye_12k_inverter_pv${F}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${F} (Стрінг ${F})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${I}" value="${P.name || `PV ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${F} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${I}" value="${P.voltage_entity !== void 0 ? P.voltage_entity : we}" placeholder="${we}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${F} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${I}" value="${P.current_entity !== void 0 ? P.current_entity : Ne}" placeholder="${Ne}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${F} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${I}" value="${P.power_entity !== void 0 ? P.power_entity : Re}" placeholder="${Re} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((d = e.inverter) == null ? void 0 : d.model_name) || "DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((s = e.inverter) == null ? void 0 : s.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((a = e.inverter) == null ? void 0 : a.show_self_consumption) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${((t = e.inverter) == null ? void 0 : t.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((_ = e.inverter) == null ? void 0 : _.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((x = e.inverter) == null ? void 0 : x.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((M = e.inverter) == null ? void 0 : M.ac_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((T = e.inverter) == null ? void 0 : T.dc_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((L = e.inverter) == null ? void 0 : L.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((r = e.inverter) == null ? void 0 : r.current_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((C = e.inverter) == null ? void 0 : C.frequency_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((N = e.aux) == null ? void 0 : N.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((O = e.aux) == null ? void 0 : O.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((D = e.aux) == null ? void 0 : D.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((A = e.aux) == null ? void 0 : A.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((J = e.aux) == null ? void 0 : J.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((p = e.aux) == null ? void 0 : p.type) === "microinverter" && (!((m = e.aux) != null && m.title) || ((k = e.aux) == null ? void 0 : k.title) === "Вітрогенератор") ? "Мікроінвертор" : ((y = e.aux) == null ? void 0 : y.title) || (((E = e.aux) == null ? void 0 : E.type) === "generator" ? "Генератор" : ((R = e.aux) == null ? void 0 : R.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((W = e.aux) == null ? void 0 : W.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((ie = e.wind) == null ? void 0 : ie.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((Q = e.wind) == null ? void 0 : Q.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((pe = e.wind) == null ? void 0 : pe.animation_threshold) || ((ye = e.aux) == null ? void 0 : ye.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((be = e.wind) == null ? void 0 : be.animation_threshold) || ((le = e.aux) == null ? void 0 : le.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((re = e.wind) == null ? void 0 : re.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((He = e.wind) == null ? void 0 : He.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((me = e.wind) == null ? void 0 : me.turbine_count) || 2 }).map((se, I) => {
      var P, we;
      const F = ((we = (P = e.wind) == null ? void 0 : P.turbines) == null ? void 0 : we[I]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${I}" value="${F.name || `Вітряк ${I + 1}`}" placeholder="Назва (напр. Вітряк ${I + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${I}" value="${F.power_entity || `sensor.wind_turbine_${I + 1}_power`}" placeholder="sensor.wind_turbine_${I + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${I}" value="${F.rpm_entity || F.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${I}" value="${F.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${I + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${I}" value="${F.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${I + 1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((ue = e.battery) == null ? void 0 : ue.soc_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((Be = e.battery) == null ? void 0 : Be.power_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((qe = e.battery) == null ? void 0 : qe.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((ge = e.battery) == null ? void 0 : ge.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((de = e.battery) == null ? void 0 : de.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((ve = e.battery) == null ? void 0 : ve.current_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура АКБ (°C) та Загальний розбаланс банок (mV):</label>
            <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((at = e.battery) == null ? void 0 : at.temperature_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((Ve = e.battery) == null ? void 0 : Ve.cell_delta_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((je = e.battery) == null ? void 0 : je.capacity_entity) || ""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((Ge = e.battery) == null ? void 0 : Ge.charge_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Oe = e.battery) == null ? void 0 : Oe.discharge_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ye = e.battery) == null ? void 0 : Ye.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ue = e.battery) == null ? void 0 : Ue.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((st = e.battery) == null ? void 0 : st.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((ot = e.battery) == null ? void 0 : ot.parallel_batteries) || 2 }).map((se, I) => {
      var xt, kt, $t, Et;
      const F = I + 1, P = ((kt = (xt = e.battery) == null ? void 0 : xt.modules) == null ? void 0 : kt[I]) || ((Et = ($t = e.battery) == null ? void 0 : $t.module_entities) == null ? void 0 : Et[I]) || {}, we = `sensor.bms_rack${F}_soc`, Ne = `sensor.bms_rack${F}_current`, Re = `sensor.bms_rack${F}_voltage`, Ae = `sensor.bms_rack${F}_power`, De = `sensor.bms_rack${F}_temperature`, wt = `sensor.bms_rack${F}_cell_delta`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${F} (Модуль ${F})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${I}" value="${P.name || `Батарея ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${F} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${I}" value="${P.soc_entity !== void 0 ? P.soc_entity : P.soc !== void 0 ? P.soc : we}" placeholder="${we}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${F} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${I}" value="${P.current_entity !== void 0 ? P.current_entity : Ne}" placeholder="${Ne}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${F} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${I}" value="${P.voltage_entity !== void 0 ? P.voltage_entity : P.volt !== void 0 ? P.volt : Re}" placeholder="${Re}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${F} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${I}" value="${P.temperature_entity !== void 0 ? P.temperature_entity : P.temp !== void 0 ? P.temp : De}" placeholder="${De}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${F} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${I}" value="${P.capacity_kwh !== void 0 ? P.capacity_kwh : F === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${F} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${I}" value="${P.cell_delta_entity !== void 0 ? P.cell_delta_entity : P.delta !== void 0 ? P.delta : wt}" placeholder="${wt}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${F} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${I}" value="${P.power_entity !== void 0 ? P.power_entity : Ae}" placeholder="${Ae} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(Ke = e.grid) != null && Ke.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((Se = e.grid) == null ? void 0 : Se.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((B = e.grid) == null ? void 0 : B.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((z = e.grid) == null ? void 0 : z.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((H = e.grid) == null ? void 0 : H.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((he = e.grid) == null ? void 0 : he.voltage_entity) || ""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((ee = e.grid) == null ? void 0 : ee.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Le = e.grid) == null ? void 0 : Le.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Ce = e.grid) == null ? void 0 : Ce.import_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Ie = e.grid) == null ? void 0 : Ie.export_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Te = e.grid) == null ? void 0 : Te.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((nt = e.grid) == null ? void 0 : nt.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((rt = e.load) == null ? void 0 : rt.auto_calculate) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((lt = e.load) == null ? void 0 : lt.essential_power_entity) || ""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((ht = e.load) == null ? void 0 : ht.daily_house_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((St = e.load) == null ? void 0 : St.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Ct = e.load) == null ? void 0 : Ct.subloads) || []).map((se, I) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${I}" value="${se.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${I}" style="width: 140px;">
                  <option value="boiler" ${se.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${se.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${se.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${se.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${se.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${se.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${se.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${I}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${I}" value="${se.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
            <input type="checkbox" id="tariffsEnabled" ${((_t = e.tariffs) == null ? void 0 : _t.enabled) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>

          <div class="field-row">
            <label>Валюта / позначення:</label>
            <input type="text" id="tariffCurrency" value="${((yt = e.tariffs) == null ? void 0 : yt.currency) || "грн"}" placeholder="грн або ₴" style="max-width: 120px;">
          </div>

          <div class="field-row">
            <label>☀️ Денний тариф (${((It = e.tariffs) == null ? void 0 : It.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Tt = e.tariffs) == null ? void 0 : Tt.day_rate) ?? 4.32}" placeholder="4.32" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🌙 Нічний тариф (${((Je = e.tariffs) == null ? void 0 : Je.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((Mt = e.tariffs) == null ? void 0 : Mt.night_rate) ?? 2.16}" placeholder="2.16" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🟢 Зелений тариф / експорт (${((Xe = e.tariffs) == null ? void 0 : Xe.currency) || "грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((ut = e.tariffs) == null ? void 0 : ut.export_rate) ?? 5.3}" placeholder="5.30" style="max-width: 140px;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px;">
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({ length: 24 }, (se, I) => {
      var F;
      return `<option value="${I}" ${(((F = e.tariffs) == null ? void 0 : F.night_start_hour) ?? 23) === I ? "selected" : ""}>${String(I).padStart(2, "0")}:00</option>`;
    }).join("")}
              </select>
            </div>
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({ length: 24 }, (se, I) => {
      var F;
      return `<option value="${I}" ${(((F = e.tariffs) == null ? void 0 : F.night_end_hour) ?? 7) === I ? "selected" : ""}>${String(I).padStart(2, "0")}:00</option>`;
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
            <input type="checkbox" id="tariffShowDailyCost" ${((bt = e.tariffs) == null ? void 0 : bt.show_daily_cost) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати дохід від експорту (Зелений тариф):</label>
            <input type="checkbox" id="tariffShowExportIncome" ${((ft = e.tariffs) == null ? void 0 : ft.show_export_income) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #34d399;">
          </div>
          <div class="field-row">
            <label>Показувати бейдж активного тарифу (🌙 Ніч / ☀️ День):</label>
            <input type="checkbox" id="tariffShowActiveBadge" ${((mt = e.tariffs) == null ? void 0 : mt.show_active_badge) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати заощадження від сонця (💰):</label>
            <input type="checkbox" id="tariffShowSolarSavings" ${((vt = e.tariffs) == null ? void 0 : vt.show_solar_savings) !== !1 ? "checked" : ""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
        </div>
      </div>
    `, this._bindEvents();
  }
  _bindEvents() {
    var c, v, u, $, S, f, w, b, h, d;
    const e = this.shadowRoot;
    e.querySelectorAll(".tab-btn").forEach((s) => {
      s.addEventListener("click", (a) => {
        this._switchTab(a.target.dataset.tab);
      });
    }), (c = e.getElementById("btnPresetEsp")) == null || c.addEventListener("click", () => this._applyPreset("deye_esphome")), (v = e.getElementById("btnPresetSolarman")) == null || v.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const i = (s, a) => {
      const t = e.getElementById(s);
      t && t.addEventListener("input", (_) => this._valueChanged(a, _.target.value));
    }, g = (s, a) => {
      const t = e.getElementById(s);
      t && t.addEventListener("change", (_) => this._valueChanged(a, _.target.checked));
    }, l = (s, a, t, _ = "") => {
      const x = e.getElementById(s);
      x && x.addEventListener("input", (M) => {
        const T = parseFloat(M.target.value);
        if (t) {
          const L = e.getElementById(t);
          L && (L.innerText = `${T}${_}`);
        }
        this._valueChanged(a, T);
      });
    };
    i("title", "title"), i("themeMode", "theme_mode"), i("cardLanguage", "language"), (u = e.getElementById("cardScale")) == null || u.addEventListener("input", (s) => {
      const a = parseFloat(s.target.value), t = e.getElementById("cardScaleVal");
      t && (t.innerText = `${Math.round(a * 100)}%`), this._valueChanged("card_scale", a);
    }), i("cardMaxWidth", "max_width"), g("showQuickSettings", "show_quick_settings"), i("ctrlSolarCharge", "controls.solar_charge_entity"), i("ctrlSellPower", "controls.sell_power_entity"), i("ctrlGridCharge", "controls.grid_charge_entity"), g("animEnabled", "animations.enabled"), l("animSpeed", "animations.speed", "animSpeedVal", "s"), ($ = e.getElementById("solarPvCount")) == null || $.addEventListener("input", (s) => {
      const a = parseInt(s.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = a, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < a; ) {
        const t = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${t}`,
          name: `PV ${t}`,
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
    }), i("solarTotalPower", "solar.total_power_entity"), i("solarDailyYield", "solar.daily_yield_entity"), l("solarTargetDaily", "solar.target_daily_yield"), i("invModel", "inverter.model_name"), i("invPower", "inverter.power_entity"), g("invShowSelfConsumption", "inverter.show_self_consumption"), i("invSelfConsumptionEntity", "inverter.self_consumption_entity"), l("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), i("invTempAc", "inverter.ac_temperature_entity"), i("invTempDc", "inverter.dc_temperature_entity"), i("invVolt", "inverter.voltage_entity"), i("invCurrent", "inverter.current_entity"), i("invFreq", "inverter.frequency_entity"), (S = e.getElementById("auxType")) == null || S.addEventListener("change", (s) => {
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
      const x = e.getElementById("auxTitle");
      x && (x.value = _), this._valueChanged("aux.type", a), this._valueChanged("aux.title", _);
    }), i("auxTitle", "aux.title"), i("auxPower", "aux.power_entity"), (f = e.getElementById("windTurbineCount")) == null || f.addEventListener("input", (s) => {
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
    }), l("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (w = e.getElementById("windThreshold")) == null || w.addEventListener("input", (s) => {
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
    }), i("batSoc", "battery.soc_entity"), i("batPower", "battery.power_entity"), i("batPowerSign", "battery.power_sign"), i("batVolt", "battery.voltage_entity"), i("batCurrent", "battery.current_entity"), i("batTemp", "battery.temperature_entity"), i("batDelta", "battery.cell_delta_entity"), i("batCapacity", "battery.capacity_entity"), i("batChargeDaily", "battery.charge_daily_entity"), i("batDischargeDaily", "battery.discharge_daily_entity"), (b = e.getElementById("batParallelCount")) == null || b.addEventListener("input", (s) => {
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
    }), g("gridSellingEnabled", "grid.selling_enabled"), i("gridPower", "grid.power_entity"), i("gridVoltage", "grid.voltage_entity"), i("gridStatus", "grid.status_entity"), l("gridVoltageThreshold", "grid.voltage_threshold"), i("gridPowerSign", "grid.power_sign"), l("gridMinThreshold", "grid.min_power_threshold"), i("gridImportDaily", "grid.import_daily_entity"), i("gridExportDaily", "grid.export_daily_entity"), i("gridNonEssential", "grid.non_essential_power_entity"), i("gridCarPower", "grid.car_power_entity"), g("loadAutoCalculate", "load.auto_calculate"), i("loadEssential", "load.essential_power_entity"), i("loadDailyHouse", "load.daily_house_entity");
    const n = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const s = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${s}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads), this.render();
    };
    (h = e.getElementById("btnAddSubload")) == null || h.addEventListener("click", n), (d = e.getElementById("btnAddSubloadBottom")) == null || d.addEventListener("click", n), e.querySelectorAll(".btn-del-subload").forEach((s) => {
      s.addEventListener("click", (a) => {
        var x;
        const t = a.currentTarget || a.target.closest(".btn-del-subload"), _ = parseInt(t.dataset.idx);
        (x = this._config.load) != null && x.subloads && (this._config.load.subloads.splice(_, 1), this._valueChanged("load.subloads", this._config.load.subloads), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((s) => {
      s.addEventListener("input", (a) => {
        var _, x;
        const t = parseInt(a.target.dataset.idx);
        (x = (_ = this._config.load) == null ? void 0 : _.subloads) != null && x[t] && (this._config.load.subloads[t].name = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-icon").forEach((s) => {
      s.addEventListener("change", (a) => {
        var _, x;
        const t = parseInt(a.target.dataset.idx);
        (x = (_ = this._config.load) == null ? void 0 : _.subloads) != null && x[t] && (this._config.load.subloads[t].icon = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-entity").forEach((s) => {
      s.addEventListener("input", (a) => {
        var _, x;
        const t = parseInt(a.target.dataset.idx);
        (x = (_ = this._config.load) == null ? void 0 : _.subloads) != null && x[t] && (this._config.load.subloads[t].entity = a.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), g("tariffsEnabled", "tariffs.enabled"), i("tariffCurrency", "tariffs.currency"), l("tariffDayRate", "tariffs.day_rate"), l("tariffNightRate", "tariffs.night_rate"), l("tariffExportRate", "tariffs.export_rate"), l("tariffNightStart", "tariffs.night_start_hour"), l("tariffNightEnd", "tariffs.night_end_hour"), g("tariffShowDailyCost", "tariffs.show_daily_cost"), g("tariffShowExportIncome", "tariffs.show_export_income"), g("tariffShowActiveBadge", "tariffs.show_active_badge"), g("tariffShowSolarSavings", "tariffs.show_solar_savings");
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", _a);
const ha = {
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
class ya extends HTMLElement {
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
    return JSON.parse(JSON.stringify(ae));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const i = JSON.parse(JSON.stringify(e)), g = JSON.parse(JSON.stringify(ae));
    this._config = this._deepMerge(g, i);
    const l = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = l || this._config.theme_mode || "dark";
    const n = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = n || this._config.language || "uk";
    const c = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = c ? parseFloat(c) : this._config.card_scale || this._config.scale || 1, this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var n, c;
    let i = typeof e == "number" ? e : this._scale + (e || 0.1);
    i = Math.max(0.7, Math.min(2, Math.round(i * 100) / 100)), this._scale = i, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", i.toString());
    const g = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".energy-station-container");
    g && (g.style.setProperty("--es-card-scale", i.toString()), g.style.zoom = i.toString());
    const l = (c = this.shadowRoot) == null ? void 0 : c.getElementById("headerZoomVal");
    l && (l.innerText = `${Math.round(i * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, i) {
    const g = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!i || typeof i != "object") return g;
    for (const l of Object.keys(i)) {
      const n = i[l], c = e ? e[l] : void 0;
      n && typeof n == "object" && !Array.isArray(n) ? g[l] = this._deepMerge(c || {}, n) : g[l] = n;
    }
    return g;
  }
  _getEntityState(e) {
    var v;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const i = this._hass.states[e], l = String(i.state).trim().replace(",", "."), n = parseFloat(l), c = ((v = i.attributes) == null ? void 0 : v.unit_of_measurement) || "";
    return {
      raw: i.state,
      val: isNaN(n) ? 0 : n,
      unit: c,
      attributes: i.attributes
    };
  }
  _t(e) {
    var g, l;
    const i = this._language || "uk";
    return ((g = ha[i]) == null ? void 0 : g[e]) || ((l = ha.uk) == null ? void 0 : l[e]) || e;
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
    const g = this.shadowRoot.getElementById("headerThemeToggle");
    g && (g.innerHTML = i ? "☀️" : "🌙", g.setAttribute("title", i ? this._t("theme_dark") : this._t("theme_light")));
    const l = this.shadowRoot.getElementById("btnThemeDark"), n = this.shadowRoot.getElementById("btnThemeLight");
    l && n && (l.classList.toggle("active", !i), n.classList.toggle("active", i));
  }
  _formatPower(e, i = 0) {
    const g = this._language === "en" ? "kW" : "кВт";
    if (!e) return { num: i.toFixed(3), kw: i, str: `${i.toFixed(3)} ${g}` };
    let l = e.val;
    return e.unit === "W" && (l = l / 1e3), {
      num: l.toFixed(3),
      kw: l,
      str: `${l.toFixed(3)} ${g}`
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
    var i, g, l, n, c, v, u, $, S, f, w, b, h, d, s, a, t, _;
    const e = this._config || ae;
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
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${K.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((g = e.solar) == null ? void 0 : g.target_daily_yield) || 55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${K.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24;">
              12,000 ${this._language === "en" ? "kW" : "кВт"}
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
              <div class="es-node-icon" style="color: #38bdf8;">${K.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(l = e.grid) != null && l.show_non_essential && ((n = e.grid) != null && n.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${K.house_outline}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c = e.grid) != null && c.show_car && ((v = e.grid) != null && v.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${K.car}</div>
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
                  <div class="es-inverter-icon-box">${K.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${(($ = e.inverter) == null ? void 0 : $.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((S = e.aux) == null ? void 0 : S.type) === "none" || ((f = e.aux) == null ? void 0 : f.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${K[(w = e.aux) == null ? void 0 : w.type] || K.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((b = e.aux) == null ? void 0 : b.type) === "microinverter" && (!((h = e.aux) != null && h.title) || ((d = e.aux) == null ? void 0 : d.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((s = e.aux) == null ? void 0 : s.title) || this._t("aux_microinverter")}</div>
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
              <div class="es-node-icon" style="color: #22d3ee;">${K.house}</div>
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
    var u, $, S, f, w, b, h, d;
    const e = this._config || ae, i = ((u = this._nodes) == null ? void 0 : u.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!i) return;
    if (i.innerHTML = "", !((($ = e.wind) == null ? void 0 : $.show) !== !1 || ((S = e.aux) == null ? void 0 : S.type) === "wind")) {
      i.classList.add("hidden");
      return;
    }
    i.classList.remove("hidden");
    const l = ((f = e.wind) == null ? void 0 : f.turbine_count) || ((b = (w = e.wind) == null ? void 0 : w.turbines) == null ? void 0 : b.length) || 2, n = ((h = e.wind) == null ? void 0 : h.turbines) || [], c = document.createElement("div");
    c.className = "es-wind-summary-bar es-mono", c.id = "windStationSummaryBar", c.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, i.appendChild(c);
    const v = document.createElement("div");
    v.className = "es-wind-pods-row", i.appendChild(v);
    for (let s = 0; s < l; s++) {
      const a = n[s] || {
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
              ${K.wind_turbine}
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
      }), v.appendChild(_);
    }
  }
  _renderDynamicPvPanels() {
    var l, n, c, v, u;
    const e = this._config || ae, i = this._nodes.pvPanelsContainer;
    if (!i) return;
    i.innerHTML = "";
    const g = ((l = e.solar) == null ? void 0 : l.pv_count) || ((c = (n = e.solar) == null ? void 0 : n.strings) == null ? void 0 : c.length) || 3;
    for (let $ = 1; $ <= g; $++) {
      const S = $ < 10 ? `0${$}` : `${$}`, f = ((u = (v = e.solar) == null ? void 0 : v.strings) == null ? void 0 : u[$ - 1]) || {}, w = f.name || `PV ${S}`, b = document.createElement("div");
      b.className = "es-pv-panel glow-solar clickable-node", b.dataset.pvIndex = $, b.id = `pvPanel_${$}`, b.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${K.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${w}</span>
        <span class="es-pv-val es-mono" id="pvVal_${$}">1,200 кВт</span>
      `, b.addEventListener("click", () => {
        var d;
        const h = f.power_entity || f.voltage_entity || f.current_entity || ((d = e.solar) == null ? void 0 : d.total_power_entity);
        this._fireMoreInfo(h);
      }), i.appendChild(b);
    }
  }
  _renderDynamicSubloads() {
    var l;
    const e = this._config || ae, i = this._nodes.subloadsContainer;
    if (!i) return;
    i.innerHTML = "", (((l = e.load) == null ? void 0 : l.subloads) || []).forEach((n, c) => {
      const v = document.createElement("div");
      v.className = "es-subload-card clickable-node", v.id = `subloadCard_${c}`, v.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${K[n.icon] || K.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${n.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, v.addEventListener("click", () => {
        this._fireMoreInfo(n.entity);
      }), i.appendChild(v);
    });
  }
  _renderDynamicBatteryRack() {
    var f, w, b, h, d, s, a;
    const e = this._config || ae, i = this._nodes.batteryRackContainer;
    if (!i) return;
    i.innerHTML = "";
    const g = ((f = e.battery) == null ? void 0 : f.parallel_batteries) || ((b = (w = e.battery) == null ? void 0 : w.modules) == null ? void 0 : b.length) || 2, l = [82, 76, 91, 68, 85, 90, 72, 80], n = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], c = [25, 21, 22.5, 20, 24, 19.5, 23, 21.5], v = [12, 8, 15, 9, 14, 11, 18, 10], u = this._t("bat_prefix"), $ = this._language === "en" ? "kW" : "кВт", S = this._language === "en" ? "kWh" : "кВт·год";
    for (let t = 1; t <= g; t++) {
      const _ = ((d = (h = e.battery) == null ? void 0 : h.modules) == null ? void 0 : d[t - 1]) || ((a = (s = e.battery) == null ? void 0 : s.module_entities) == null ? void 0 : a[t - 1]) || {}, x = _.name || `${u} ${t}`, M = l[(t - 1) % l.length], T = n[(t - 1) % n.length], L = c[(t - 1) % c.length], r = v[(t - 1) % v.length], C = document.createElement("div");
      C.className = "es-battery-pack-card glow-battery clickable-node", C.id = `batPackCard_${t}`, C.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${K.battery_vertical}</div>
        <span class="es-bat-name">${x}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${t}">${M}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${t}">${T.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${t}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${$}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${t}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${t}">${L.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${t}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${t}">${r} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${t}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${S}</div>
      `, C.addEventListener("click", (N) => {
        var D;
        if (N.target.closest(`#batPackTemp_${t}`)) {
          const A = _.temperature_entity || _.temp || `sensor.bms_rack${t}_temperature`;
          this._fireMoreInfo(A);
          return;
        }
        if (N.target.closest(`#batPackDelta_${t}`)) {
          const A = _.cell_delta_entity || _.delta_entity || `sensor.bms_rack${t}_cell_delta`;
          this._fireMoreInfo(A);
          return;
        }
        const O = _.soc_entity || _.soc || _.voltage_entity || _.volt || _.current_entity || ((D = e.battery) == null ? void 0 : D.soc_entity);
        this._fireMoreInfo(O);
      }), i.appendChild(C);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var d, s, a, t, _, x, M, T, L;
    const e = this._config || ae, i = ((d = this._nodes) == null ? void 0 : d.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!i || (i.innerHTML = "", e.show_quick_settings === !1)) return;
    const g = this._themeMode === "light", l = this._language === "en", n = ((s = e.controls) == null ? void 0 : s.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", c = ((a = e.controls) == null ? void 0 : a.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", v = ((t = e.controls) == null ? void 0 : t.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", u = document.createElement("div");
    u.className = "es-quick-settings-card", u.id = "quickSettingsCard", u.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${K.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${g ? K.sun_mode : K.moon}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${n}">
              <span class="es-ctrl-icon es-ctrl-solar">${K.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell">${K.inverter}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${v}">
              <span class="es-ctrl-icon es-ctrl-grid">${K.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (_ = u.querySelector("#btnThemeToggle")) == null || _.addEventListener("click", (r) => {
      r.stopPropagation(), this._toggleTheme();
    }), (x = u.querySelector("#btnLangToggle")) == null || x.addEventListener("click", (r) => {
      r.stopPropagation(), this._toggleLanguage();
    }), (M = u.querySelector("#ctrlLabelWrapSolar")) == null || M.addEventListener("click", () => this._fireMoreInfo(n)), (T = u.querySelector("#ctrlLabelWrapSell")) == null || T.addEventListener("click", () => this._fireMoreInfo(c)), (L = u.querySelector("#ctrlLabelWrapGrid")) == null || L.addEventListener("click", () => this._fireMoreInfo(v));
    const $ = u.querySelector("#ctrlSliderSolar"), S = u.querySelector("#ctrlValSolar");
    $ && (this._updateSliderGradient($), $.addEventListener("input", (r) => {
      S && (S.innerText = `${r.target.value} A`), this._updateSliderGradient($);
    }), $.addEventListener("change", (r) => {
      this._setNumberValue(n, r.target.value);
    }));
    const f = u.querySelector("#ctrlSliderSell"), w = u.querySelector("#ctrlValSell");
    f && (this._updateSliderGradient(f), f.addEventListener("input", (r) => {
      const C = Number(r.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      w && (w.innerText = `${C} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(f);
    }), f.addEventListener("change", (r) => {
      this._setNumberValue(c, r.target.value);
    }));
    const b = u.querySelector("#ctrlSliderGrid"), h = u.querySelector("#ctrlValGrid");
    b && (this._updateSliderGradient(b), b.addEventListener("input", (r) => {
      h && (h.innerText = `${r.target.value} A`), this._updateSliderGradient(b);
    }), b.addEventListener("change", (r) => {
      this._setNumberValue(v, r.target.value);
    })), i.appendChild(u), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const i = parseFloat(e.min) || 0, g = parseFloat(e.max) || 100, l = parseFloat(e.value) || 0, n = Math.max(0, Math.min(100, (l - i) / (g - i) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${n}%, rgba(255, 255, 255, 0.12) ${n}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, i) {
    if (!this._hass || !e) return;
    const l = e.split(".")[0] || "number", n = Number(i);
    this._hass.callService(l, "set_value", {
      entity_id: e,
      value: n
    });
  }
  _updateControlSliders() {
    var w, b, h, d, s, a, t, _, x;
    const e = this._config || ae;
    if (e.show_quick_settings === !1) return;
    const i = this.shadowRoot;
    if (!i) return;
    const g = ((w = e.controls) == null ? void 0 : w.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", l = ((b = e.controls) == null ? void 0 : b.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", n = ((h = e.controls) == null ? void 0 : h.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", c = i.getElementById("ctrlSliderSolar"), v = i.getElementById("ctrlValSolar"), u = i.getElementById("ctrlSliderSell"), $ = i.getElementById("ctrlValSell"), S = i.getElementById("ctrlSliderGrid"), f = i.getElementById("ctrlValGrid");
    if (c && (!c.matches || !c.matches(":active"))) {
      const M = (s = (d = this._hass) == null ? void 0 : d.states) == null ? void 0 : s[g], T = M && !isNaN(parseFloat(M.state)) ? parseFloat(M.state) : c.value ? parseFloat(c.value) : 80;
      c.value = T, v && (v.innerText = `${Math.round(T)} A`), this._updateSliderGradient(c);
    }
    if (u && (!u.matches || !u.matches(":active"))) {
      const M = (t = (a = this._hass) == null ? void 0 : a.states) == null ? void 0 : t[l], T = M && !isNaN(parseFloat(M.state)) ? parseFloat(M.state) : u.value ? parseFloat(u.value) : 5e3;
      u.value = T;
      const L = Math.round(T).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), r = this._language === "uk" ? "Вт" : "W";
      $ && ($.innerText = `${L} ${r}`), this._updateSliderGradient(u);
    }
    if (S && (!S.matches || !S.matches(":active"))) {
      const M = (x = (_ = this._hass) == null ? void 0 : _.states) == null ? void 0 : x[n], T = M && !isNaN(parseFloat(M.state)) ? parseFloat(M.state) : S.value ? parseFloat(S.value) : 70;
      S.value = T, f && (f.innerText = `${Math.round(T)} A`), this._updateSliderGradient(S);
    }
  }
  _bindInteractions() {
    var g, l, n, c, v, u, $, S, f, w, b, h, d, s, a, t, _, x, M, T, L;
    const e = this.shadowRoot, i = this._config || ae;
    (g = e.getElementById("headerThemeToggle")) == null || g.addEventListener("click", (r) => {
      r.stopPropagation(), this._toggleTheme();
    }), (l = e.getElementById("headerLangToggle")) == null || l.addEventListener("click", (r) => {
      r.stopPropagation(), this._toggleLanguage();
    }), (n = e.getElementById("headerZoomIn")) == null || n.addEventListener("click", (r) => {
      r.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (c = e.getElementById("headerZoomOut")) == null || c.addEventListener("click", (r) => {
      r.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (v = e.getElementById("headerZoomVal")) == null || v.addEventListener("click", (r) => {
      r.stopPropagation(), this._changeScale(1);
    }), (u = e.getElementById("solarHeaderNode")) == null || u.addEventListener("click", () => {
      var r, C;
      this._fireMoreInfo(((r = i.solar) == null ? void 0 : r.daily_yield_entity) || ((C = i.solar) == null ? void 0 : C.total_power_entity));
    }), ($ = e.getElementById("totalPvPowerBadge")) == null || $.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.solar) == null ? void 0 : r.total_power_entity);
    }), (S = e.getElementById("gridNode")) == null || S.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.grid) == null ? void 0 : r.power_entity);
    }), (f = e.getElementById("nonEssentialNode")) == null || f.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.grid) == null ? void 0 : r.non_essential_power_entity);
    }), (w = e.getElementById("carNode")) == null || w.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.grid) == null ? void 0 : r.car_power_entity);
    }), (b = e.getElementById("inverterNode")) == null || b.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.inverter) == null ? void 0 : r.power_entity);
    }), (h = e.getElementById("inverterSelfConsumptionBox")) == null || h.addEventListener("click", (r) => {
      var C;
      r.stopPropagation(), (C = i.inverter) != null && C.self_consumption_entity && this._fireMoreInfo(i.inverter.self_consumption_entity);
    }), (d = e.getElementById("auxNode")) == null || d.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.aux) == null ? void 0 : r.power_entity);
    }), (s = e.getElementById("essentialNode")) == null || s.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.load) == null ? void 0 : r.essential_power_entity);
    }), (a = e.getElementById("masterBatteryHub")) == null || a.addEventListener("click", () => {
      var r;
      this._fireMoreInfo((r = i.battery) == null ? void 0 : r.soc_entity);
    }), (t = e.getElementById("batChargeDaily")) == null || t.addEventListener("click", (r) => {
      var C;
      r.stopPropagation(), this._fireMoreInfo(((C = i.battery) == null ? void 0 : C.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (_ = e.getElementById("batDischargeDaily")) == null || _.addEventListener("click", (r) => {
      var C;
      r.stopPropagation(), this._fireMoreInfo(((C = i.battery) == null ? void 0 : C.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let r = 1; r <= 8; r++) {
      const C = e.getElementById(`batBranchBadge_${r}`), N = ((M = (x = i.battery) == null ? void 0 : x.modules) == null ? void 0 : M[r - 1]) || ((L = (T = i.battery) == null ? void 0 : T.module_entities) == null ? void 0 : L[r - 1]) || {};
      C == null || C.addEventListener("click", () => {
        var D;
        const O = N.power_entity || N.current_entity || N.soc_entity || ((D = i.battery) == null ? void 0 : D.soc_entity);
        this._fireMoreInfo(O);
      });
    }
  }
  _fetchNightEndFromHa(e, i) {
    var u, $;
    if (this._fetchingHistoryForDate === e) return;
    const l = (u = (this._config || ae).grid) == null ? void 0 : u.import_daily_entity;
    if (!(($ = this._hass) != null && $.callWS) || !l) return;
    this._fetchingHistoryForDate = e;
    const n = /* @__PURE__ */ new Date(), c = new Date(n.getFullYear(), n.getMonth(), n.getDate(), i, 0, 0), v = new Date(n.getFullYear(), n.getMonth(), n.getDate(), i, 15, 0);
    this._hass.callWS({
      type: "history/history_during_period",
      start_time: c.toISOString(),
      end_time: v.toISOString(),
      entity_ids: [l],
      no_attributes: !0
    }).then((S) => {
      const f = S == null ? void 0 : S[l];
      if (f && f.length > 0) {
        const w = parseFloat(f[0].state);
        if (!isNaN(w) && w >= 0) {
          const b = `es_tariff_split_${e}`;
          let h = {};
          if (typeof localStorage < "u")
            try {
              const d = localStorage.getItem(b);
              d && (h = JSON.parse(d));
            } catch {
            }
          if (h.night_end = w, typeof localStorage < "u")
            try {
              localStorage.setItem(b, JSON.stringify(h));
            } catch {
            }
          this._hass && this._updateValues();
        }
      }
    }).catch(() => {
    });
  }
  _calculateTariffs(e, i, g) {
    var M, T, L, r, C, N, O, D, A, J, p, m, k;
    const n = (this._config || ae).tariffs || {};
    if (n.enabled === !1) {
      (M = this._nodes) != null && M.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none"), (T = this._nodes) != null && T.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none"), (L = this._nodes) != null && L.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none"), (r = this._nodes) != null && r.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
      return;
    }
    const c = n.currency || "грн", v = typeof n.day_rate == "number" ? n.day_rate : 4.32, u = typeof n.night_rate == "number" ? n.night_rate : 2.16, $ = typeof n.export_rate == "number" ? n.export_rate : 5.3, S = typeof n.night_start_hour == "number" ? n.night_start_hour : 23, f = typeof n.night_end_hour == "number" ? n.night_end_hour : 7, w = /* @__PURE__ */ new Date(), b = w.getHours() + w.getMinutes() / 60, h = S > f ? b >= S || b < f : b >= S && b < f;
    if ((C = this._nodes) != null && C.gridTariffBadge && n.show_active_badge !== !1) {
      const y = h ? u : v, E = h ? this._t("tariff_night") : this._t("tariff_day"), R = h ? "🌙" : "☀️", W = h ? "rgba(99, 102, 241, 0.15)" : "rgba(245, 158, 11, 0.15)", ie = h ? "rgba(129, 140, 248, 0.35)" : "rgba(251, 191, 36, 0.35)", Q = h ? "#a5b4fc" : "#fbbf24";
      this._nodes.gridTariffBadge.style.background = W, this._nodes.gridTariffBadge.style.border = `1px solid ${ie}`, this._nodes.gridTariffBadge.style.color = Q, this._nodes.gridTariffBadge.innerText = `${R} ${E}: ${y.toFixed(2)} ${c}`, this._nodes.gridTariffBadge.style.display = "inline-flex";
    } else (N = this._nodes) != null && N.gridTariffBadge && (this._nodes.gridTariffBadge.style.display = "none");
    if ((O = this._nodes) != null && O.solarSavingsDaily && n.show_solar_savings !== !1 && g > 0) {
      const y = g * v;
      this._nodes.solarSavingsDaily.innerText = `💰 ${this._t("solar_saved")}: ~${y.toFixed(2)} ${c}`, this._nodes.solarSavingsDaily.style.display = "block";
    } else (D = this._nodes) != null && D.solarSavingsDaily && (this._nodes.solarSavingsDaily.style.display = "none");
    if ((A = this._nodes) != null && A.gridExportIncomeRow && n.show_export_income !== !1 && typeof i == "number" && i > 0) {
      const y = i * $;
      this._nodes.gridExportIncomeVal && (this._nodes.gridExportIncomeVal.innerText = `+${y.toFixed(2)} ${c}`), this._nodes.gridExportIncomeRow.style.display = "block";
    } else (J = this._nodes) != null && J.gridExportIncomeRow && (this._nodes.gridExportIncomeRow.style.display = "none");
    if (typeof e != "number" || isNaN(e) || e < 0) {
      (p = this._nodes) != null && p.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
      return;
    }
    const d = `${w.getFullYear()}-${String(w.getMonth() + 1).padStart(2, "0")}-${String(w.getDate()).padStart(2, "0")}`, s = `es_tariff_split_${d}`;
    let a = {};
    if (typeof localStorage < "u")
      try {
        const y = localStorage.getItem(s);
        y && (a = JSON.parse(y));
      } catch {
      }
    let t = 0, _ = 0;
    if (b < f) {
      if (t = e, _ = 0, a.night_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
    } else if (b >= f && b < S) {
      if (typeof a.night_end == "number" && a.night_end <= e)
        t = a.night_end, _ = Math.max(0, e - t);
      else {
        this._fetchNightEndFromHa(d, f);
        const y = Math.min(1, f / b);
        t = e * y, _ = Math.max(0, e - t);
      }
      if (a.day_end = e, typeof localStorage < "u")
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
    } else {
      const y = typeof a.night_end == "number" ? a.night_end : e * (f / b), E = typeof a.day_end == "number" ? a.day_end : e;
      _ = Math.max(0, E - y);
      const R = Math.max(0, e - E);
      t = y + R;
    }
    const x = t * u + _ * v;
    (m = this._nodes) != null && m.gridCostDailyRow && n.show_daily_cost !== !1 ? (this._nodes.gridCostDailyVal && (this._nodes.gridCostDailyVal.innerText = `~${x.toFixed(2)} ${c}`), this._nodes.gridCostSplitVal && (this._nodes.gridCostSplitVal.innerText = `(🌙 ${t.toFixed(1)} + ☀️ ${_.toFixed(1)})`), this._nodes.gridCostDailyRow.style.display = "block") : (k = this._nodes) != null && k.gridCostDailyRow && (this._nodes.gridCostDailyRow.style.display = "none");
  }
  _updateValues() {
    var bt, ft, mt, vt, se, I, F, P, we, Ne, Re, Ae, De, wt, xt, kt, $t, Et, zt, Wt, Ht, qt, jt, Gt, Ot, Yt, Ut, Kt, Jt, Xt, Zt, Qt, ei, ti, ii, ai, si, oi, ni, ri, li, di, ci, pi, gi, hi, _i, yi, ui, bi, fi, mi, vi, wi, xi, ki, $i, Ei, Bi, Si, Ci, Ii, Ti, Mi, Fi, Pi, Vi, Li, Ni, Ri, Ai, Di, zi, Wi, Hi, qi, ji, Gi, Oi, Yi, Ui, Ki, Ji, Xi, Zi, Qi, ea, ta, ia, aa, sa, oa, na, ra, la, da;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || ae, i = this._language === "en" ? "kW" : "кВт", g = ((bt = e.solar) == null ? void 0 : bt.pv_count) || ((mt = (ft = e.solar) == null ? void 0 : ft.strings) == null ? void 0 : mt.length) || 3;
    let l = 0, n = !1;
    for (let o = 1; o <= g; o++) {
      const V = (se = (vt = e.solar) == null ? void 0 : vt.strings) == null ? void 0 : se[o - 1], te = (V == null ? void 0 : V.voltage_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_voltage` : ""), q = (V == null ? void 0 : V.current_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_current` : ""), Y = (V == null ? void 0 : V.power_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_power` : "");
      if (this._getEntityState(Y) || this._getEntityState(te) || this._getEntityState(q)) {
        n = !0;
        break;
      }
    }
    for (let o = 1; o <= g; o++) {
      const V = this.shadowRoot.getElementById(`pvVal_${o}`), te = this.shadowRoot.getElementById(`pvVolt_${o}`), q = this.shadowRoot.getElementById(`pvCurr_${o}`), Y = (F = (I = e.solar) == null ? void 0 : I.strings) == null ? void 0 : F[o - 1], Ze = (Y == null ? void 0 : Y.voltage_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_voltage` : ""), X = (Y == null ? void 0 : Y.current_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_current` : ""), Me = (Y == null ? void 0 : Y.power_entity) || (o <= 3 ? `sensor.deye_12k_inverter_pv${o}_power` : ""), U = this._getEntityState(Ze), fe = this._getEntityState(X), j = this._getEntityState(Me);
      let oe = 0, xe = 0, ne = 0;
      j ? ne = this._formatPower(j).kw : U && fe ? ne = U.val * fe.val / 1e3 : U ? ne = 0 : ne = n ? 0 : 4, U ? oe = U.val : oe = n ? 0 : 380 + o * 4.5, fe ? xe = fe.val : j && oe > 0 ? xe = ne * 1e3 / oe : xe = n ? 0 : 3.12 + o * 0.28, l += ne, V && (V.innerText = `${ne.toFixed(3)} ${i}`), te && (te.innerText = `${oe.toFixed(1)} V`), q && (q.innerText = `${xe.toFixed(2)} A`);
    }
    const c = this._getEntityState((P = e.solar) == null ? void 0 : P.total_power_entity);
    let v = 0;
    c ? v = this._formatPower(c).kw : v = l, this._nodes.totalPvPowerBadge.innerText = `${v.toFixed(3)} ${i}`;
    const u = this._getEntityState((we = e.solar) == null ? void 0 : we.daily_yield_entity), $ = u ? u.val : n ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = $.toFixed(1);
    const S = ((Ne = e.solar) == null ? void 0 : Ne.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = S.toFixed(1);
    const f = Math.min(100, Math.round($ / S * 100));
    this._nodes.solarProgressBar.style.width = `${f}%`;
    const w = this._getEntityState((Re = e.inverter) == null ? void 0 : Re.power_entity);
    this._nodes.inverterPowerVal && ((Ae = e.inverter) != null && Ae.power_entity && w ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(w, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const b = this._getEntityState((De = e.inverter) == null ? void 0 : De.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = b ? b.val.toFixed(2) : "41,20";
    const h = this._getEntityState((wt = e.inverter) == null ? void 0 : wt.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = h ? h.val.toFixed(2) : "38,40";
    const d = this._getEntityState((xt = e.inverter) == null ? void 0 : xt.voltage_entity);
    this._nodes.inverterVolt.innerText = d ? d.val.toFixed(2) : "231,45";
    const s = this._getEntityState((kt = e.inverter) == null ? void 0 : kt.current_entity);
    this._nodes.inverterCurrent.innerText = s ? s.val.toFixed(2) : "8,60";
    const a = this._getEntityState(($t = e.inverter) == null ? void 0 : $t.frequency_entity);
    this._nodes.inverterFreq.innerText = a ? a.val.toFixed(2) : "50,01";
    const t = ((Et = e.wind) == null ? void 0 : Et.show) !== !1 || ((zt = e.aux) == null ? void 0 : zt.type) === "wind", _ = this.shadowRoot.getElementById("windStationContainer"), x = this._nodes.auxNode;
    let M = 0;
    if (_)
      if (!t)
        _.classList.add("hidden");
      else {
        _.classList.remove("hidden");
        const o = ((Wt = e.wind) == null ? void 0 : Wt.turbine_count) || ((qt = (Ht = e.wind) == null ? void 0 : Ht.turbines) == null ? void 0 : qt.length) || 2, V = ((jt = e.wind) == null ? void 0 : jt.turbines) || [];
        let te = 0, q = 0, Y = !1, Ze = !1;
        for (let j = 0; j < o; j++) {
          const oe = V[j] || {
            power_entity: `sensor.wind_turbine_${j + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((Gt = e.wind) == null ? void 0 : Gt.animation_threshold) || 50
          }, xe = this.shadowRoot.getElementById(`turbinePower_${j + 1}`), ne = this.shadowRoot.getElementById(`turbineStatus_${j + 1}`), Z = this.shadowRoot.getElementById(`turbineIcon_${j + 1}`), ze = this.shadowRoot.getElementById(`turbineCard_${j + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${j + 1}`);
          const Ft = this.shadowRoot.getElementById(`turbineDailyVal_${j + 1}`), Pt = this.shadowRoot.getElementById(`turbineMonthlyVal_${j + 1}`), Vt = this.shadowRoot.getElementById(`turbineEnergyFooter_${j + 1}`), At = this._hass ? 0 : j === 0 ? 1.56 : 0.22, dt = this._getEntityState(oe.power_entity), ct = this._formatPower(dt, At);
          xe && (xe.innerText = ct.str), M += ct.kw;
          let Qe = ct.kw * 1e3;
          dt && dt.unit === "W" && (Qe = dt.val);
          const pt = oe.animation_threshold ?? ((Ot = e.wind) == null ? void 0 : Ot.animation_threshold) ?? 50, Fe = Z == null ? void 0 : Z.querySelector(".turbine-rotor"), gt = oe.rpm_entity || oe.speed_entity || ((Yt = e.wind) == null ? void 0 : Yt.rpm_entity) || ((Ut = e.wind) == null ? void 0 : Ut.speed_entity) || (j === 0 ? "sensor.wind_rpm" : "");
          let G = gt && ((Kt = this._hass) != null && Kt.states[gt]) ? this._getEntityState(gt) : null;
          if (!G && j === 0 && ((Jt = this._hass) != null && Jt.states["sensor.wind_rpm"]) && (G = this._getEntityState("sensor.wind_rpm")), Qe >= pt || G && typeof G.val == "number" && G.val > 0) {
            Fe && Fe.classList.add("spinning"), ze && (ze.classList.add("glow-wind"), ze.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const Ee = ((Xt = e.wind) == null ? void 0 : Xt.max_power) || 3e3, Lt = ((Zt = e.wind) == null ? void 0 : Zt.max_rpm) || 600;
            let Bt = 0;
            G && typeof G.val == "number" && G.val > 0 ? Bt = Math.min(1, Math.max(0, G.val / Lt)) : Bt = Math.min(1, Math.max(0, (Qe - pt) / (Ee - pt)));
            const ce = (3.2 - Bt * 2.75).toFixed(2);
            Fe && Fe.style.setProperty("--turbine-speed", `${ce}s`), ne && (ne.innerText = this._t("wind_gen"), ne.style.color = "#67e8f9");
          } else
            Fe && Fe.classList.remove("spinning"), ze && (ze.classList.remove("glow-wind"), ze.style.borderColor = "rgba(255, 255, 255, 0.08)"), ne && (ne.innerText = this._t("wind_calm"), ne.style.color = "#94a3b8");
          const tt = this.shadowRoot.getElementById(`turbineRpmBox_${j + 1}`);
          if (tt)
            if (G && G.raw !== "unavailable" && G.raw !== "unknown" && typeof G.val == "number" && !isNaN(G.val)) {
              tt.style.display = "inline";
              const Lt = G.unit ? G.unit : "RPM";
              tt.innerHTML = `<span id="turbineRpmVal_${j + 1}">${Math.round(G.val)}</span> ${Lt}`;
            } else
              tt.style.display = "none";
          const _e = this._getEntityState(oe.daily_energy_entity), ke = this._getEntityState(oe.monthly_energy_entity);
          Ft && (Ft.innerText = _e && typeof _e.val == "number" && !isNaN(_e.val) ? _e.val.toFixed(2) : "0.00"), Pt && (Pt.innerText = ke && typeof ke.val == "number" && !isNaN(ke.val) ? ke.val.toFixed(1) : "0.0");
          const $e = !!(oe.daily_energy_entity || oe.monthly_energy_entity);
          Vt && (Vt.style.display = $e ? "flex" : "none"), _e && typeof _e.val == "number" && !isNaN(_e.val) && (te += _e.val, Y = !0), ke && typeof ke.val == "number" && !isNaN(ke.val) && (q += ke.val, Ze = !0);
        }
        const X = this.shadowRoot.getElementById("windTotalDailyVal"), Me = this.shadowRoot.getElementById("windTotalMonthlyVal"), U = this._getEntityState((Qt = e.wind) == null ? void 0 : Qt.daily_energy_entity), fe = this._getEntityState((ei = e.wind) == null ? void 0 : ei.monthly_energy_entity);
        X && (U && typeof U.val == "number" && !isNaN(U.val) ? X.innerText = U.val.toFixed(2) : Y ? X.innerText = te.toFixed(2) : X.innerText = "0.00"), Me && (fe && typeof fe.val == "number" && !isNaN(fe.val) ? Me.innerText = fe.val.toFixed(1) : Ze ? Me.innerText = q.toFixed(1) : Me.innerText = "0.0");
      }
    let T = 0;
    if (x)
      if (((ti = e.aux) == null ? void 0 : ti.type) === "none" || ((ii = e.aux) == null ? void 0 : ii.type) === "wind")
        x.classList.add("hidden");
      else {
        x.classList.remove("hidden");
        const o = this._getEntityState((ai = e.aux) == null ? void 0 : ai.power_entity), V = this._formatPower(o, 2);
        T = V.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = V.str);
        const te = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let q = (si = e.aux) == null ? void 0 : si.title;
        ((oi = e.aux) == null ? void 0 : oi.type) === "microinverter" && (!q || q === "Вітрогенератор") ? q = "Мікроінвертор" : (ni = e.aux) != null && ni.type && te[e.aux.type] && (!q || q === "Вітрогенератор") ? q = te[e.aux.type] : q || (q = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = q), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = K[(ri = e.aux) == null ? void 0 : ri.type] || K.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((li = e.aux) == null ? void 0 : li.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), x.style.borderColor = "rgba(192, 132, 252, 0.45)", x.style.background = "rgba(88, 28, 135, 0.35)", x.classList.remove("glow-wind"), x.classList.add("glow-aux");
      }
    const L = this._getEntityState((di = e.grid) == null ? void 0 : di.power_entity), r = L ? L.unit === "W" ? L.val / 1e3 : L.val : 0, C = ((ci = e.grid) == null ? void 0 : ci.power_sign) || ((pi = e.grid) != null && pi.invert_power ? "inverted" : "deye"), N = ((gi = e.grid) == null ? void 0 : gi.selling_enabled) === !0, O = (((hi = e.grid) == null ? void 0 : hi.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, D = this._getEntityState((_i = e.grid) == null ? void 0 : _i.status_entity), A = this._getEntityState(((yi = e.grid) == null ? void 0 : yi.voltage_entity) || ((ui = e.inverter) == null ? void 0 : ui.voltage_entity)), J = ((bi = e.grid) == null ? void 0 : bi.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90;
    let p = !0;
    if (D) {
      const o = String(D.raw || D.val).toLowerCase();
      (o === "off" || o === "false" || o === "0" || o === "disconnected" || o === "offline" || o === "unavailable" || o === "unknown") && (p = !1);
    } else A && typeof A.val == "number" && !isNaN(A.val) && A.val < J && (p = !1);
    let m = !1, k = !1, y = 0;
    p ? (y = Math.abs(r), y >= O && (C === "deye" ? r < 0 ? m = !0 : k = !0 : r > 0 ? m = !0 : k = !0), m && !N && (m = !1)) : (y = 0, m = !1, k = !1);
    const E = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (p ? (this._nodes.gridPowerVal.innerText = `${y.toFixed(3)} ${i}`, m ? this._nodes.gridPowerVal.style.color = "#34d399" : k ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${i}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (p ? m ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : k ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), E && (p ? (E.classList.add("glow-grid"), E.style.borderColor = "rgba(56, 189, 248, 0.4)") : (E.classList.remove("glow-grid"), E.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const R = this._getEntityState((fi = e.grid) == null ? void 0 : fi.import_daily_entity);
    this._nodes.gridImportDaily.innerText = R ? `${R.val.toFixed(2)} kWh` : "0.00 kWh";
    const W = this._getEntityState((mi = e.grid) == null ? void 0 : mi.export_daily_entity);
    this._nodes.gridExportDaily.innerText = W ? `${W.val.toFixed(2)} kWh` : "0.00 kWh", this._calculateTariffs(R ? R.val : 0, W ? W.val : 0, $);
    const ie = this.shadowRoot.getElementById("nonEssentialNode"), Q = !!((vi = e.grid) != null && vi.show_non_essential && ((wi = e.grid) != null && wi.non_essential_power_entity)) || ((xi = e.grid) == null ? void 0 : xi.show_non_essential) !== !1 && !!((ki = e.grid) != null && ki.non_essential_power_entity);
    let pe = 0;
    if (ie)
      if (Q) {
        ie.classList.remove("hidden");
        const o = this._getEntityState(e.grid.non_essential_power_entity), V = this._formatPower(o, 0);
        pe = V.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = V.str);
      } else
        ie.classList.add("hidden");
    const ye = this.shadowRoot.getElementById("carNode"), be = !!(($i = e.grid) != null && $i.show_car && ((Ei = e.grid) != null && Ei.car_power_entity)) || ((Bi = e.grid) == null ? void 0 : Bi.show_car) !== !1 && !!((Si = e.grid) != null && Si.car_power_entity);
    let le = 0;
    if (ye)
      if (be) {
        ye.classList.remove("hidden");
        const o = this._getEntityState(e.grid.car_power_entity), V = this._formatPower(o, 0);
        le = V.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = V.str);
      } else
        ye.classList.add("hidden");
    const re = this._getEntityState((Ci = e.battery) == null ? void 0 : Ci.soc_entity), He = re ? re.val : 80;
    this._nodes.masterBatterySoc.innerText = `${He.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const me = this._getEntityState((Ii = e.battery) == null ? void 0 : Ii.power_entity), ue = this._getEntityState((Ti = e.battery) == null ? void 0 : Ti.current_entity), Be = me ? me.unit === "W" ? me.val / 1e3 : me.val : 0, qe = ((Mi = e.battery) == null ? void 0 : Mi.power_sign) || ((Fi = e.battery) != null && Fi.invert_power ? "standard" : "deye");
    let ge = !1, de = !1;
    const ve = Math.abs(Be);
    if (ve >= 0.02 ? qe === "deye" ? Be < 0 ? ge = !0 : de = !0 : Be > 0 ? ge = !0 : de = !0 : ue && Math.abs(ue.val) >= 0.3 && (qe === "deye" ? ue.val < 0 ? ge = !0 : de = !0 : ue.val > 0 ? ge = !0 : de = !0), this._isCharging = ge, this._isDischarging = de, this._nodes.masterBatteryFlowHint) {
      let o = this._t("bat_idle"), V = "#94a3b8";
      ge ? (o = this._t("bat_dir_charge"), V = "#34d399") : de && (o = this._t("bat_dir_discharge"), V = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ve.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${V}; font-weight: 700; font-size: 14px;">${o}</span>`;
    }
    const Ve = this._getEntityState((Pi = e.battery) == null ? void 0 : Pi.voltage_entity), je = Ve ? Ve.val.toFixed(2) : "53.24", Ge = ue ? ue.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${je.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${Ge.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((Vi = e.battery) == null ? void 0 : Vi.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const o = ((Li = e.battery) == null ? void 0 : Li.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${o}%`;
    }
    const Oe = k ? y : 0, Ye = de ? ve : 0, Ue = v + M + (T > 0 ? T : 0) + Oe + Ye, Ke = (ge ? ve : 0) + (m ? y : 0) + pe + le, Se = Math.max(0, Ue - Ke), B = this._getEntityState((Ni = e.inverter) == null ? void 0 : Ni.self_consumption_entity);
    let z = 0, H = this._getEntityState((Ri = e.load) == null ? void 0 : Ri.essential_power_entity);
    !H && (!((Ai = e.load) != null && Ai.essential_power_entity) || ((Di = e.load) == null ? void 0 : Di.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((zi = e.load) == null ? void 0 : zi.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (H = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const he = !!(H && typeof H.val == "number" && !isNaN(H.val) && H.val > 0);
    let ee = 0;
    if (he)
      ee = Math.max(0, H.unit === "W" ? H.val / 1e3 : H.val), B && typeof B.val == "number" && !isNaN(B.val) ? z = Math.max(0, B.unit === "W" ? B.val / 1e3 : B.val) : z = Math.max(0, Se - ee);
    else {
      if (B && typeof B.val == "number" && !isNaN(B.val))
        z = Math.max(0, B.unit === "W" ? B.val / 1e3 : B.val);
      else {
        const V = (((Wi = e.inverter) == null ? void 0 : Wi.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
        z = Math.min(Se, V);
      }
      ee = Math.max(0, Se - z);
    }
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((Hi = e.inverter) == null ? void 0 : Hi.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", z < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(z * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${z.toFixed(3)} ${i}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${ee.toFixed(3)} ${i}`;
    const Le = this._getEntityState((qi = e.load) == null ? void 0 : qi.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = Le ? `${Le.val.toFixed(2)} kWh` : "12,40 kWh";
    let Ce = 0;
    (((ji = e.load) == null ? void 0 : ji.subloads) || []).forEach((o, V) => {
      const te = this.shadowRoot.getElementById(`subloadVal_${V}`), q = this._getEntityState(o.entity), Y = this._formatPower(q, 2);
      Ce += Y.kw, te && (te.innerText = Y.str);
    });
    const Ie = ((Gi = e.battery) == null ? void 0 : Gi.parallel_batteries) || ((Yi = (Oi = e.battery) == null ? void 0 : Oi.modules) == null ? void 0 : Yi.length) || 2;
    let Te = 0;
    for (let o = 0; o < Ie; o++) {
      const V = ((Ki = (Ui = e.battery) == null ? void 0 : Ui.modules) == null ? void 0 : Ki[o]) || ((Xi = (Ji = e.battery) == null ? void 0 : Ji.module_entities) == null ? void 0 : Xi[o]) || {}, te = V.capacity_kwh !== void 0 ? parseFloat(V.capacity_kwh) : o === 0 ? 7.88 : o === 1 ? 5.12 : (((Zi = e.battery) == null ? void 0 : Zi.capacity_kwh) || 13) / Ie;
      Te += isNaN(te) ? 0 : te;
    }
    Te <= 0 && (Te = parseFloat((Qi = e.battery) == null ? void 0 : Qi.capacity_kwh) || 13);
    const nt = this._getEntityState(((ea = e.battery) == null ? void 0 : ea.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), rt = nt && !isNaN(nt.val) ? nt.val : null, lt = rt !== null && rt <= 40 ? rt : Te, ht = this._getEntityState(((ta = e.battery) == null ? void 0 : ta.soc_entity) || "sensor.deye_12k_inverter_battery_soc"), St = ht ? ht.val : 80, Ct = lt * (St / 100), _t = this._language === "en" ? "kWh" : "кВт·год";
    this._nodes.batCapacityVal && (this._nodes.batCapacityVal.innerHTML = `<span title="Залишок ємності / Номінальна ємність">~${Ct.toFixed(2).replace(".", ",")} ${_t} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${lt.toFixed(1).replace(".", ",")})</span></span>`);
    const yt = this._getEntityState(((ia = e.battery) == null ? void 0 : ia.temperature_entity) || "sensor.deye_12k_inverter_battery_temperature") || this._getEntityState("sensor.inverter_12_kvt_battery_temperature") || this._getEntityState("sensor.solarman_battery_temperature"), It = yt ? yt.val : 25;
    this._nodes.batMasterTempVal && (this._nodes.batMasterTempVal.innerText = `${It.toFixed(1).replace(".", ",")}`);
    const Tt = (aa = e.battery) == null ? void 0 : aa.charge_daily_entity;
    let Je = this._getEntityState(Tt);
    Je || (Je = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge") || this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const Mt = (sa = e.battery) == null ? void 0 : sa.discharge_daily_entity;
    let Xe = this._getEntityState(Mt);
    Xe || (Xe = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = Je ? `${Je.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = Xe ? `${Xe.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const ut = [];
    for (let o = 1; o <= Ie; o++) {
      const V = this.shadowRoot.getElementById(`batPackSoc_${o}`), te = this.shadowRoot.getElementById(`batPackVolt_${o}`), q = this.shadowRoot.getElementById(`batPackCurr_${o}`), Y = this.shadowRoot.getElementById(`batPackPower_${o}`), Ze = this.shadowRoot.getElementById(`batPackTempVal_${o}`), X = this.shadowRoot.getElementById(`batPackDelta_${o}`), Me = this.shadowRoot.getElementById(`batPackDeltaVal_${o}`), U = this.shadowRoot.getElementById(`batPackStateTag_${o}`), fe = this.shadowRoot.getElementById(`batPackKwh_${o}`), j = this.shadowRoot.getElementById(`batPackBar1_${o}`), oe = this.shadowRoot.getElementById(`batPackBar2_${o}`), xe = this.shadowRoot.getElementById(`batPackBar3_${o}`), ne = this.shadowRoot.getElementById(`batPackBar4_${o}`), Z = ((na = (oa = e.battery) == null ? void 0 : oa.modules) == null ? void 0 : na[o - 1]) || ((la = (ra = e.battery) == null ? void 0 : ra.module_entities) == null ? void 0 : la[o - 1]) || {}, ze = Z.soc_entity || Z.soc || `sensor.bms_rack${o}_soc`, Ft = Z.current_entity || `sensor.bms_rack${o}_current`, Pt = Z.voltage_entity || Z.volt || `sensor.bms_rack${o}_voltage`, Vt = Z.power_entity || `sensor.bms_rack${o}_power`, At = Z.temperature_entity || Z.temp || `sensor.bms_rack${o}_temperature`, dt = Z.cell_delta_entity || Z.delta_entity || `sensor.bms_rack${o}_cell_delta`, ct = this._getEntityState(ze), Qe = this._getEntityState(Ft), pt = this._getEntityState(Pt), Fe = this._getEntityState(Vt), gt = this._getEntityState(At);
      let G = this._getEntityState(dt);
      if (G || (G = this._getEntityState(`sensor.bms_rack${o}_delta_cell_voltage`) || this._getEntityState(`sensor.bms_rack${o}_cell_difference`)), !G && (Z.max_cell_voltage_entity || Z.min_cell_voltage_entity)) {
        const Pe = this._getEntityState(Z.max_cell_voltage_entity), ga = this._getEntityState(Z.min_cell_voltage_entity);
        if (Pe && ga) {
          const Dt = Math.abs(Pe.val - ga.val);
          G = { val: Dt < 1 ? Math.round(Dt * 1e3) : Dt, unit: "mV" };
        }
      }
      const et = ct ? ct.val : o === 1 ? 82 : o === 2 ? 85 : 75, tt = pt ? pt.val : o === 1 ? 54.1 : o === 2 ? 54 : 52.4, _e = Qe ? Qe.val : o === 1 ? 18.4 : o === 2 ? 25.2 : 8.2, ke = gt ? gt.val : o === 1 ? 36.5 : o === 2 ? 21 : 22.5;
      let $e = null;
      if (G) {
        let Pe = G.val;
        Pe < 1 && Pe > 0 ? $e = Math.round(Pe * 1e3) : $e = Math.round(Pe);
      } else this._hass || ($e = o === 1 ? 12 : o === 2 ? 8 : 15);
      let Ee = 0;
      Fe ? Ee = Math.abs(this._formatPower(Fe).kw) : Ee = tt * Math.abs(_e) / 1e3;
      const Bt = (Z.capacity_kwh !== void 0 ? parseFloat(Z.capacity_kwh) : o === 1 ? 7.88 : o === 2 ? 5.12 : lt / Ie) * (et / 100);
      V && (V.innerText = `${et.toFixed(0)}%`), te && (te.innerText = `${tt.toFixed(1).replace(".", ",")} V`), q && (q.innerText = `${Math.abs(_e).toFixed(1).replace(".", ",")} A`), Y && (Y.innerText = `${Ee.toFixed(2).replace(".", ",")} ${i}`), Ze && (Ze.innerText = `${ke.toFixed(1).replace(".", ",")}`), Me && ($e !== null && !isNaN($e) ? (Me.innerText = `${$e} mV`, X && (X.style.display = "inline-flex", $e <= 25 ? (X.style.color = "#34d399", X.style.background = "rgba(52, 211, 153, 0.12)", X.style.borderColor = "rgba(52, 211, 153, 0.3)") : $e <= 50 ? (X.style.color = "#fbbf24", X.style.background = "rgba(251, 191, 36, 0.12)", X.style.borderColor = "rgba(251, 191, 36, 0.3)") : (X.style.color = "#f87171", X.style.background = "rgba(248, 113, 113, 0.16)", X.style.borderColor = "rgba(248, 113, 113, 0.4)"))) : X && (X.style.display = "none")), fe && (fe.innerText = `~${Bt.toFixed(2).replace(".", ",")} ${_t}`);
      let ce = !1;
      de ? ce = !1 : ge ? ce = !0 : Qe ? ce = (((da = e.battery) == null ? void 0 : da.power_sign) || "deye") === "deye" ? _e < 0 : _e > 0 : ce = _e < 0;
      const it = this.shadowRoot.getElementById(`batBranchBadge_${o}`);
      it && (Ee < 0.02 ? (it.className = "es-bat-branch-badge es-mono idle", it.innerHTML = `<span>0.00 ${i}</span>`) : ce ? (it.className = "es-bat-branch-badge es-mono charge", it.innerHTML = `<span>${Ee.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`) : (it.className = "es-bat-branch-badge es-mono discharge", it.innerHTML = `<span>${Ee.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));
      const We = this.shadowRoot.getElementById(`batPackCard_${o}`), ca = We == null ? void 0 : We.querySelector(".es-battery-gauge"), pa = We == null ? void 0 : We.querySelector(".es-battery-gauge-nipple");
      We && (We.style.borderColor = ce ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), ca && (ca.style.borderColor = ce ? "#10b981" : "#ef4444"), pa && (pa.style.background = ce ? "#10b981" : "#ef4444"), U && (ce ? (U.className = "es-bat-state-tag charge", U.innerText = this._t("bat_charge"), U.style.color = "#34d399", U.style.background = "rgba(16, 185, 129, 0.18)", U.style.borderColor = "rgba(16, 185, 129, 0.4)") : (U.className = "es-bat-state-tag discharge", U.innerText = this._t("bat_discharge"), U.style.color = "#f87171", U.style.background = "rgba(239, 68, 68, 0.18)", U.style.borderColor = "rgba(239, 68, 68, 0.4)")), Y && (Y.style.color = ce ? "#34d399" : "#f87171"), q && (q.style.color = ce ? "#38bdf8" : "#f87171");
      const Nt = ce ? "active-green" : "active-red";
      j && oe && xe && ne && (j.className = `es-bat-bar ${et >= 10 ? Nt : ""}`, oe.className = `es-bat-bar ${et >= 35 ? Nt : ""}`, xe.className = `es-bat-bar ${et >= 65 ? Nt : ""}`, ne.className = `es-bat-bar ${et >= 85 ? Nt : ""}`), ut.push({ kwNum: Ee, isChg: ce });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      p ? r : 0,
      m,
      k,
      v,
      ee,
      ve,
      ge,
      de,
      le,
      ut,
      pe,
      Ce,
      T
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
    var e, i, g, l, n, c, v, u, $;
    try {
      const S = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!S) return;
      const f = S.getBoundingClientRect();
      if (f.width === 0 || f.height === 0) return;
      const w = this._config || ae, b = this._scale || 1, h = (p, m = 0.5, k = 0.5) => {
        if (!p) return null;
        const y = p.getBoundingClientRect();
        return {
          x: Math.round((y.left - f.left + y.width * m) / b),
          y: Math.round((y.top - f.top + y.height * k) / b)
        };
      }, d = (p, m, k) => {
        const y = this.shadowRoot.getElementById(p), E = this.shadowRoot.getElementById(m);
        y && y.setAttribute("d", k || ""), E && E.setAttribute("d", k || "");
      }, s = this.shadowRoot.getElementById("gridNode"), a = this.shadowRoot.getElementById("inverterNode"), t = this.shadowRoot.getElementById("essentialNode"), _ = this.shadowRoot.getElementById("totalPvPowerBadge"), x = this.shadowRoot.getElementById("masterBatteryHub"), M = this.shadowRoot.getElementById("carNode");
      if (s && a) {
        const p = s.getBoundingClientRect(), m = a.getBoundingClientRect();
        if (p.bottom < m.top + 30) {
          const y = h(s, 0.7, 1), E = h(a, 0.2, 0);
          if (y && E) {
            const R = Math.round((y.y + E.y) / 2), W = `M ${y.x} ${y.y} C ${y.x} ${R}, ${E.x} ${R}, ${E.x} ${E.y}`;
            d("pathGridInvBase", "pathGridInvFlow", W);
          }
        } else {
          const y = Math.round((m.top - f.top + m.height * 0.55) / b), E = Math.round((p.right - f.left) / b), R = Math.round((m.left - f.left) / b), W = Math.round((p.top - f.top + p.height * 0.5) / b);
          let ie = "";
          if (Math.abs(W - y) <= 8)
            ie = `M ${E} ${y} L ${R} ${y}`;
          else {
            const Q = Math.round(E + 24);
            ie = `M ${E} ${W} C ${Q} ${W}, ${Q} ${y}, ${R} ${y}`;
          }
          d("pathGridInvBase", "pathGridInvFlow", ie);
        }
      }
      if (a && t) {
        const p = t.getBoundingClientRect(), m = a.getBoundingClientRect();
        if (p.bottom < m.top + 30) {
          const y = h(a, 0.8, 0), E = h(t, 0.3, 1);
          if (y && E) {
            const R = Math.round((y.y + E.y) / 2), W = `M ${y.x} ${y.y} C ${y.x} ${R}, ${E.x} ${R}, ${E.x} ${E.y}`;
            d("pathInvLoadBase", "pathInvLoadFlow", W);
          }
        } else {
          const y = Math.round((m.top - f.top + m.height * 0.55) / b), E = Math.round((m.right - f.left) / b), R = Math.round((p.left - f.left) / b), W = Math.round((p.top - f.top + p.height * 0.5) / b);
          let ie = "";
          if (Math.abs(W - y) <= 8)
            ie = `M ${E} ${y} L ${R} ${y}`;
          else {
            const Q = Math.round(R - 24);
            ie = `M ${E} ${y} C ${Q} ${y}, ${Q} ${W}, ${R} ${W}`;
          }
          d("pathInvLoadBase", "pathInvLoadFlow", ie);
        }
      }
      if (_ && a) {
        const p = h(_, 0.5, 1), m = h(a, 0.5, 0);
        if (p && m) {
          const k = `M ${p.x} ${p.y} L ${m.x} ${m.y}`;
          d("pathSolarInvBase", "pathSolarInvFlow", k);
        }
      }
      if (a && x) {
        const p = h(a, 0.5, 1), m = h(x, 0.5, 0);
        if (p && m) {
          const k = `M ${p.x} ${p.y} L ${m.x} ${m.y}`;
          d("pathInvBatBase", "pathInvBatFlow", k);
        }
      }
      const T = this.shadowRoot.getElementById("nonEssentialNode"), L = T && !T.classList.contains("hidden") && T.offsetHeight > 0, r = M && !M.classList.contains("hidden") && M.offsetHeight > 0;
      if (s && L) {
        const p = h(s, 0.5, 1), m = h(T, 0.5, 0);
        if (p && m) {
          const k = `M ${p.x} ${p.y} L ${m.x} ${m.y}`;
          d("pathGridNonEssBase", "pathGridNonEssFlow", k);
        }
      } else
        d("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (r) {
        const p = L ? T : s;
        if (p) {
          const m = h(p, 0.5, 1), k = h(M, 0.5, 0);
          if (m && k) {
            const y = `M ${m.x} ${m.y} L ${k.x} ${k.y}`;
            d("pathNonEssCarBase", "pathNonEssCarFlow", y);
          }
        } else
          d("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        d("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const C = this.shadowRoot.getElementById("subloadsBusContainer");
      if (t && C) {
        const p = h(t, 0.5, 1), m = h(C, 0.5, 0);
        if (p && m) {
          const k = `M ${p.x} ${p.y} L ${m.x} ${m.y}`;
          d("pathLoadSubloadsBase", "pathLoadSubloadsFlow", k);
        }
      } else
        d("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const N = this.shadowRoot.getElementById("auxNode");
      if (a && N && !N.classList.contains("hidden") && N.offsetHeight > 0) {
        const p = h(N, 0.35, 1), m = h(a, 0.9, 0);
        if (p && m) {
          const k = Math.round((p.y + m.y) / 2), y = `M ${p.x} ${p.y} C ${p.x} ${k}, ${m.x} ${k}, ${m.x} ${m.y}`;
          d("pathInvAuxBase", "pathInvAuxFlow", y);
        }
      } else
        d("pathInvAuxBase", "pathInvAuxFlow", "");
      d("pathBatStemBase", "pathBatStemFlow", "");
      const O = this.shadowRoot.getElementById("windStationContainer"), A = ((i = w.wind) == null ? void 0 : i.show) !== !1 || ((g = w.aux) == null ? void 0 : g.type) === "wind" ? ((l = w.wind) == null ? void 0 : l.turbine_count) || ((c = (n = w.wind) == null ? void 0 : n.turbines) == null ? void 0 : c.length) || 2 : 0;
      for (let p = 1; p <= 4; p++)
        if (p <= A && O && !O.classList.contains("hidden")) {
          const m = this.shadowRoot.getElementById(`turbineCard_${p}`);
          if (m && x) {
            const k = h(m, 0.5, 1), y = A === 1 ? 0.5 : 0.28 + (p - 1) / (A - 1) * 0.44, E = h(x, y, 0);
            if (k && E) {
              const R = `M ${k.x} ${k.y} L ${E.x} ${E.y}`;
              d(`pathTurbine${p}Base`, `pathTurbine${p}Flow`, R);
            }
          } else
            d(`pathTurbine${p}Base`, `pathTurbine${p}Flow`, "");
        } else
          d(`pathTurbine${p}Base`, `pathTurbine${p}Flow`, "");
      const J = ((v = w.battery) == null ? void 0 : v.parallel_batteries) || (($ = (u = w.battery) == null ? void 0 : u.modules) == null ? void 0 : $.length) || 2;
      for (let p = 1; p <= 8; p++) {
        const m = this.shadowRoot.getElementById(`batPackCard_${p}`), k = this.shadowRoot.getElementById(`batBranchBadge_${p}`);
        if (p <= J && x && m) {
          const y = h(x, 0.5, 1), E = h(m, 0.5, 0);
          if (y && E) {
            const R = Math.round(y.y + (E.y - y.y) * 0.45);
            let W = "";
            Math.abs(y.x - E.x) <= 4 ? W = `M ${y.x} ${y.y} L ${E.x} ${E.y}` : W = `M ${y.x} ${y.y} C ${y.x} ${R}, ${E.x} ${R}, ${E.x} ${E.y}`, d(`pathBat${p}Base`, `pathBat${p}Flow`, W), k && (k.style.left = `${E.x}px`, k.style.top = `${R}px`, k.style.display = "flex");
          } else
            d(`pathBat${p}Base`, `pathBat${p}Flow`, ""), k && (k.style.display = "none");
        } else
          d(`pathBat${p}Base`, `pathBat${p}Flow`, ""), k && (k.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, i, g, l, n;
    try {
      const c = this._config || ae, v = this._scale || 1, u = this.shadowRoot.getElementById("solarBusSvg"), $ = ((e = c.solar) == null ? void 0 : e.pv_count) || ((g = (i = c.solar) == null ? void 0 : i.strings) == null ? void 0 : g.length) || 3;
      if (u && $ > 0) {
        const w = u.getBoundingClientRect(), b = this.shadowRoot.getElementById("pvPanel_1"), h = this.shadowRoot.getElementById(`pvPanel_${$}`), d = this.shadowRoot.getElementById("solarBusBase"), s = this.shadowRoot.getElementById("solarFlowCollector"), a = this.shadowRoot.getElementById("solarBusStemBase"), t = this.shadowRoot.getElementById("solarBusStemFlow"), _ = this.shadowRoot.getElementById("solarBusFeeders");
        if (b && h && w.width > 0) {
          const x = b.getBoundingClientRect(), M = h.getBoundingClientRect(), T = Math.round((x.left - w.left + x.width / 2) / v), L = Math.round((M.left - w.left + M.width / 2) / v), r = 13, C = Math.round((T + L) / 2);
          if (d && (d.setAttribute("x1", T), d.setAttribute("y1", r), d.setAttribute("x2", L), d.setAttribute("y2", r)), s && (s.setAttribute("x1", T), s.setAttribute("y1", r), s.setAttribute("x2", L), s.setAttribute("y2", r)), a && (a.setAttribute("x1", C), a.setAttribute("y1", r), a.setAttribute("x2", C), a.setAttribute("y2", 26)), t && (t.setAttribute("x1", C), t.setAttribute("y1", r), t.setAttribute("x2", C), t.setAttribute("y2", 26)), _) {
            let N = "";
            for (let O = 1; O <= $; O++) {
              const D = this.shadowRoot.getElementById(`pvPanel_${O}`);
              if (D) {
                const A = D.getBoundingClientRect(), J = Math.round((A.left - w.left + A.width / 2) / v);
                N += `
                  <line x1="${J}" y1="0" x2="${J}" y2="${r}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${J}" y1="0" x2="${J}" y2="${r}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            _.innerHTML = N;
          }
        }
      }
      const S = this.shadowRoot.getElementById("subloadsBusSvg"), f = ((n = (l = c.load) == null ? void 0 : l.subloads) == null ? void 0 : n.length) || 3;
      if (S && f > 0) {
        const w = S.getBoundingClientRect(), b = this.shadowRoot.getElementById("subloadCard_0"), h = this.shadowRoot.getElementById(`subloadCard_${f - 1}`), d = this.shadowRoot.getElementById("essentialNode"), s = this.shadowRoot.getElementById("subloadsBusBase"), a = this.shadowRoot.getElementById("subloadsFlowCollector"), t = this.shadowRoot.getElementById("subloadsBusStemBase"), _ = this.shadowRoot.getElementById("subloadsBusStemFlow"), x = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (b && h && w.width > 0) {
          const M = b.getBoundingClientRect(), T = h.getBoundingClientRect(), L = Math.round((M.left - w.left + M.width / 2) / v), r = Math.round((T.left - w.left + T.width / 2) / v), C = 13;
          let N = Math.round((L + r) / 2);
          if (d) {
            const A = d.getBoundingClientRect();
            N = Math.round((A.left - w.left + A.width / 2) / v);
          }
          const O = Math.min(L, N), D = Math.max(r, N);
          if (s && (s.setAttribute("x1", O), s.setAttribute("y1", C), s.setAttribute("x2", D), s.setAttribute("y2", C)), a && (a.setAttribute("x1", O), a.setAttribute("y1", C), a.setAttribute("x2", D), a.setAttribute("y2", C)), t && (t.setAttribute("x1", N), t.setAttribute("y1", 0), t.setAttribute("x2", N), t.setAttribute("y2", C)), _ && (_.setAttribute("x1", N), _.setAttribute("y1", 0), _.setAttribute("x2", N), _.setAttribute("y2", C)), x) {
            let A = "";
            for (let J = 0; J < f; J++) {
              const p = this.shadowRoot.getElementById(`subloadCard_${J}`);
              if (p) {
                const m = p.getBoundingClientRect(), k = Math.round((m.left - w.left + m.width / 2) / v);
                A += `
                  <line x1="${k}" y1="${C}" x2="${k}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${k}" y1="${C}" x2="${k}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            x.innerHTML = A;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, i, g, l, n) {
    if (!e) return;
    if (!n) {
      e.setAttribute("class", `flow-pulse ${i} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const c = g ? "flow-reverse" : "flow-forward", v = g ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${i} ${c}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", l), e.style.animation = `${v} ${l} linear infinite`;
  }
  _updateFlowAnimations(e, i, g, l, n, c, v, u, $, S = [], f = 0, w = 0, b = 0) {
    var de, ve, at, Ve, je, Ge, Oe, Ye, Ue, st, ot, Ke, Se;
    const h = this._config || ae, d = ((de = h.animations) == null ? void 0 : de.enabled) !== !1, s = ((ve = h.animations) == null ? void 0 : ve.speed) || 1.2, a = (B, z = 10) => {
      const H = Math.abs(B);
      if (H < 0.05) return "2.5s";
      const he = Math.min(1, H / z);
      return `${Math.max(0.4, (2.6 - he * 1.9) * (s / 1.2)).toFixed(2)}s`;
    }, t = this.shadowRoot.getElementById("pathGridInvFlow"), _ = Math.abs(e), x = (((at = h.grid) == null ? void 0 : at.min_power_threshold) !== void 0 ? h.grid.min_power_threshold : 50) / 1e3, M = ((Ve = h.grid) == null ? void 0 : Ve.selling_enabled) === !0, T = d && _ >= x && (g || i && M);
    this._applyFlowAnimation(t, "flow-grid", i, a(e, 10), T);
    const L = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(L, "flow-solar", !1, a(l, 12), d && l >= 0.05);
    const r = this.shadowRoot.getElementById("pathInvLoadFlow"), C = Math.abs(n);
    this._applyFlowAnimation(r, "flow-load", !1, a(n, 10), d && C >= 0.05);
    const N = this.shadowRoot.getElementById("pathInvBatFlow"), O = Math.abs(c), D = d && O >= 0.02 && (v || u), A = v ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(N, A, u, a(c, 8), D);
    const J = this.shadowRoot.getElementById("pathGridNonEssFlow"), p = Math.abs(f);
    this._applyFlowAnimation(J, "flow-grid", !1, a(f, 5), d && p >= 0.05);
    const m = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), k = Math.abs($);
    this._applyFlowAnimation(m, "flow-car", !1, a($, 7), d && k >= 0.05);
    const y = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), E = Math.abs(w || n);
    this._applyFlowAnimation(y, "flow-load", !1, a(E, 8), d && E >= 0.05);
    const R = this.shadowRoot.getElementById("pathInvAuxFlow"), W = Math.abs(b);
    this._applyFlowAnimation(R, "flow-aux", !0, a(b, 5), d && W >= 0.05);
    const ie = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(ie, A, u, a(c, 8), D);
    const Q = this.shadowRoot.getElementById("solarFlowCollector"), pe = this.shadowRoot.getElementById("solarBusStemFlow");
    if (Q)
      if (!d || l < 0.05)
        Q.style.opacity = "0.2", Q.style.animation = "none", pe && (pe.style.opacity = "0.2", pe.style.animation = "none");
      else {
        const B = a(l, 12);
        Q.style.opacity = "1", Q.setAttribute("class", "flow-line"), Q.style.animation = `esDashflow ${B} linear infinite`, pe && (pe.style.opacity = "1", pe.setAttribute("class", "flow-line"), pe.style.animation = `esDashflow ${B} linear infinite`);
      }
    const ye = this.shadowRoot.getElementById("subloadsFlowCollector"), be = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (ye)
      if (!d || E < 0.05)
        ye.style.opacity = "0.2", ye.style.animation = "none", be && (be.style.opacity = "0.2", be.style.animation = "none");
      else {
        const B = a(E, 8);
        ye.style.opacity = "1", ye.setAttribute("class", "flow-line"), ye.style.animation = `esDashflow ${B} linear infinite`, be && (be.style.opacity = "1", be.setAttribute("class", "flow-line"), be.style.animation = `esDashflow ${B} linear infinite`);
      }
    const le = this.shadowRoot.getElementById("batteryFlowCollector"), re = this.shadowRoot.getElementById("batteryBusStemFlow"), He = this.shadowRoot.getElementById("batteryBusFeeders"), me = u ? "#f87171" : "#34d399", ue = u ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (le)
      if (le.style.stroke = me, le.style.filter = ue, re && (re.style.stroke = me, re.style.filter = ue), !d || !D)
        le.style.opacity = "0.2", le.style.animation = "none", re && (re.style.opacity = "0.2", re.style.animation = "none");
      else {
        const B = a(c, 8), z = u ? "esDashflowRev" : "esDashflow";
        le.style.opacity = "1", le.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), le.style.animation = `${z} ${B} linear infinite`, re && (re.style.opacity = "1", re.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), re.style.animation = `${z} ${B} linear infinite`);
      }
    He && He.querySelectorAll("line").forEach((B) => {
      if (B.style.stroke = me, B.style.filter = ue, !d || !D)
        B.style.opacity = "0.2", B.style.animation = "none";
      else {
        const z = a(c, 8), H = u ? "esDashflowRev" : "esDashflow";
        B.style.opacity = "1", B.setAttribute("class", u ? "flow-line-reverse" : "flow-line"), B.style.animation = `${H} ${z} linear infinite`;
      }
    });
    for (let B = 1; B <= 8; B++) {
      const z = this.shadowRoot.getElementById(`pathBat${B}Flow`);
      if (!z) continue;
      const H = S[B - 1], he = H ? H.kwNum : 0, ee = d && (he >= 0.02 || D), Le = u;
      this._applyFlowAnimation(z, A, Le, a(he || c, 8), ee);
    }
    for (let B = 0; B < 6; B++) {
      const z = this.shadowRoot.getElementById(`pathSubload${B}Flow`);
      if (!z) continue;
      const H = (Ge = (je = h.load) == null ? void 0 : je.subloads) == null ? void 0 : Ge[B], he = H ? this._getEntityState(H.entity) : null, ee = he ? this._formatPower(he, 2).kw : B === 0 ? 2 : B === 1 ? 3 : 4;
      this._applyFlowAnimation(z, "flow-load", !1, a(ee, 8), d && ee >= 0.05);
    }
    const Be = ((Oe = h.wind) == null ? void 0 : Oe.show) !== !1 || ((Ye = h.aux) == null ? void 0 : Ye.type) === "wind", qe = Be ? ((Ue = h.wind) == null ? void 0 : Ue.turbine_count) || ((ot = (st = h.wind) == null ? void 0 : st.turbines) == null ? void 0 : ot.length) || 2 : 0, ge = ((Ke = h.wind) == null ? void 0 : Ke.turbines) || [];
    for (let B = 1; B <= 4; B++) {
      const z = this.shadowRoot.getElementById(`pathTurbine${B}Flow`);
      if (z)
        if (B <= qe && Be) {
          const H = ge[B - 1] || {}, he = this._hass ? 0 : B === 1 ? 1.45 : 0.85, ee = this._getEntityState(H.power_entity || `sensor.wind_turbine_${B}_power`);
          let Ce = this._formatPower(ee, he).kw * 1e3;
          ee && ee.unit === "W" && (Ce = ee.val);
          const Ie = H.animation_threshold ?? ((Se = h.wind) == null ? void 0 : Se.animation_threshold) ?? 50, Te = Ce >= Ie;
          this._applyFlowAnimation(z, "flow-wind", !1, a(Ce / 1e3, 3), d && Te);
        } else
          this._applyFlowAnimation(z, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", ya);
window.customCards = window.customCards || [];
window.customCards.some((Rt) => Rt.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  ya as EnergyStationCard,
  ha as I18N
};
