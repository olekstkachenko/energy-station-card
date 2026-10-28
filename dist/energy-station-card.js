const le = {
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
  }
}, O = {
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
class Qi extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general";
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    this._config = JSON.parse(JSON.stringify(e || le)), this.render();
  }
  connectedCallback() {
    this.render();
  }
  _valueChanged(e, t) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const p = e.split(".");
    let l = this._config;
    for (let c = 0; c < p.length - 1; c++)
      l[p[c]] || (l[p[c]] = {}), l = l[p[c]];
    l[p[p.length - 1]] = t;
    const h = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(h);
  }
  _switchTab(e) {
    this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || le)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    const t = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t), this.render();
  }
  render() {
    var t, p, l, h, c, f, _, E, C, x, B, m, g, r, s, i, o, b, v, T, S, N, n, I, A, J, G, D, ee, d, u, k, y, $, R, H, se, te, pe, ue, fe, de, ne, De, me, be, Ee, We, he, ce, we, Xe, Le, qe, He, Ge, je, Oe, Ze, Qe, Ye, $e, w, V, z, ge, Y, Fe, Be, Se, Ce, et, st, _t, Ke;
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
            <input type="text" id="ctrlSolarCharge" value="${((t = e.controls) == null ? void 0 : t.solar_charge_entity) || ""}" placeholder="number.deye_12k_inverter_max_charge_current">
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
              <input type="checkbox" id="animEnabled" ${((h = e.animations) == null ? void 0 : h.enabled) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((c = e.animations) == null ? void 0 : c.speed) || 1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((f = e.animations) == null ? void 0 : f.speed) || 1.2}s</span>
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((_ = e.solar) == null ? void 0 : _.pv_count) || 3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((E = e.solar) == null ? void 0 : E.pv_count) || 3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((C = e.solar) == null ? void 0 : C.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((x = e.solar) == null ? void 0 : x.daily_yield_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((B = e.solar) == null ? void 0 : B.target_daily_yield) || 55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((m = e.solar) == null ? void 0 : m.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((g = e.solar) == null ? void 0 : g.pv_count) || 3 }).map((_e, M) => {
      var Ve, Ae;
      const F = M + 1, P = ((Ae = (Ve = e.solar) == null ? void 0 : Ve.strings) == null ? void 0 : Ae[M]) || {}, xe = `sensor.deye_12k_inverter_pv${F}_voltage`, Pe = `sensor.deye_12k_inverter_pv${F}_current`, Ne = `sensor.deye_12k_inverter_pv${F}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${F} (Стрінг ${F})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${M}" value="${P.name || `PV ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${F} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${M}" value="${P.voltage_entity !== void 0 ? P.voltage_entity : xe}" placeholder="${xe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${F} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${M}" value="${P.current_entity !== void 0 ? P.current_entity : Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${F} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${M}" value="${P.power_entity !== void 0 ? P.power_entity : Ne}" placeholder="${Ne} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((r = e.inverter) == null ? void 0 : r.model_name) || "DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((s = e.inverter) == null ? void 0 : s.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((i = e.inverter) == null ? void 0 : i.show_self_consumption) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${((o = e.inverter) == null ? void 0 : o.self_consumption_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((b = e.inverter) == null ? void 0 : b.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((v = e.inverter) == null ? void 0 : v.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((T = e.inverter) == null ? void 0 : T.ac_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((S = e.inverter) == null ? void 0 : S.dc_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((N = e.inverter) == null ? void 0 : N.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((n = e.inverter) == null ? void 0 : n.current_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((I = e.inverter) == null ? void 0 : I.frequency_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((A = e.aux) == null ? void 0 : A.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((J = e.aux) == null ? void 0 : J.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((G = e.aux) == null ? void 0 : G.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((D = e.aux) == null ? void 0 : D.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((ee = e.aux) == null ? void 0 : ee.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((d = e.aux) == null ? void 0 : d.type) === "microinverter" && (!((u = e.aux) != null && u.title) || ((k = e.aux) == null ? void 0 : k.title) === "Вітрогенератор") ? "Мікроінвертор" : ((y = e.aux) == null ? void 0 : y.title) || ((($ = e.aux) == null ? void 0 : $.type) === "generator" ? "Генератор" : ((R = e.aux) == null ? void 0 : R.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((H = e.aux) == null ? void 0 : H.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((se = e.wind) == null ? void 0 : se.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((te = e.wind) == null ? void 0 : te.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((pe = e.wind) == null ? void 0 : pe.animation_threshold) || ((ue = e.aux) == null ? void 0 : ue.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((fe = e.wind) == null ? void 0 : fe.animation_threshold) || ((de = e.aux) == null ? void 0 : de.wind_animation_threshold) || 50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((ne = e.wind) == null ? void 0 : ne.daily_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((De = e.wind) == null ? void 0 : De.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((me = e.wind) == null ? void 0 : me.turbine_count) || 2 }).map((_e, M) => {
      var P, xe;
      const F = ((xe = (P = e.wind) == null ? void 0 : P.turbines) == null ? void 0 : xe[M]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${M}" value="${F.name || `Вітряк ${M + 1}`}" placeholder="Назва (напр. Вітряк ${M + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${M}" value="${F.power_entity || `sensor.wind_turbine_${M + 1}_power`}" placeholder="sensor.wind_turbine_${M + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${M}" value="${F.rpm_entity || F.speed_entity || ""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${M}" value="${F.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${M + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${M}" value="${F.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${M + 1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((be = e.battery) == null ? void 0 : be.soc_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((Ee = e.battery) == null ? void 0 : Ee.power_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((We = e.battery) == null ? void 0 : We.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((he = e.battery) == null ? void 0 : he.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((ce = e.battery) == null ? void 0 : ce.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((we = e.battery) == null ? void 0 : we.current_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Xe = e.battery) == null ? void 0 : Xe.capacity_entity) || ""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((Le = e.battery) == null ? void 0 : Le.charge_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((qe = e.battery) == null ? void 0 : qe.discharge_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((He = e.battery) == null ? void 0 : He.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ge = e.battery) == null ? void 0 : Ge.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((je = e.battery) == null ? void 0 : je.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((Oe = e.battery) == null ? void 0 : Oe.parallel_batteries) || 2 }).map((_e, M) => {
      var nt, at, rt, lt;
      const F = M + 1, P = ((at = (nt = e.battery) == null ? void 0 : nt.modules) == null ? void 0 : at[M]) || ((lt = (rt = e.battery) == null ? void 0 : rt.module_entities) == null ? void 0 : lt[M]) || {}, xe = `sensor.bms_rack${F}_soc`, Pe = `sensor.bms_rack${F}_current`, Ne = `sensor.bms_rack${F}_voltage`, Ve = `sensor.bms_rack${F}_power`, Ae = `sensor.bms_rack${F}_temperature`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${F} (Модуль ${F})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${M}" value="${P.name || `Батарея ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${F} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${M}" value="${P.soc_entity !== void 0 ? P.soc_entity : P.soc !== void 0 ? P.soc : xe}" placeholder="${xe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${F} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${M}" value="${P.current_entity !== void 0 ? P.current_entity : Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${F} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${M}" value="${P.voltage_entity !== void 0 ? P.voltage_entity : P.volt !== void 0 ? P.volt : Ne}" placeholder="${Ne}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${F} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${M}" value="${P.temperature_entity !== void 0 ? P.temperature_entity : P.temp !== void 0 ? P.temp : Ae}" placeholder="${Ae}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${F} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${M}" value="${P.capacity_kwh !== void 0 ? P.capacity_kwh : F === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${F} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${M}" value="${P.power_entity !== void 0 ? P.power_entity : Ve}" placeholder="${Ve} (авто P = U × I)">
                    </div>
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
              <input type="checkbox" id="gridSellingEnabled" ${(Ze = e.grid) != null && Ze.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((Qe = e.grid) == null ? void 0 : Qe.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((Ye = e.grid) == null ? void 0 : Ye.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${(($e = e.grid) == null ? void 0 : $e.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((w = e.grid) == null ? void 0 : w.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((V = e.grid) == null ? void 0 : V.voltage_entity) || ""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((z = e.grid) == null ? void 0 : z.status_entity) || ""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((ge = e.grid) == null ? void 0 : ge.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Y = e.grid) == null ? void 0 : Y.import_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Fe = e.grid) == null ? void 0 : Fe.export_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Be = e.grid) == null ? void 0 : Be.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Se = e.grid) == null ? void 0 : Se.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((Ce = e.load) == null ? void 0 : Ce.auto_calculate) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((et = e.load) == null ? void 0 : et.essential_power_entity) || ""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((st = e.load) == null ? void 0 : st.daily_house_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((_t = e.load) == null ? void 0 : _t.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Ke = e.load) == null ? void 0 : Ke.subloads) || []).map((_e, M) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${M}" value="${_e.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${M}" style="width: 140px;">
                  <option value="boiler" ${_e.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${_e.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${_e.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${_e.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${_e.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${_e.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${_e.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${M}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${M}" value="${_e.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `, this._bindEvents();
  }
  _bindEvents() {
    var c, f, _, E, C, x, B, m, g, r;
    const e = this.shadowRoot;
    e.querySelectorAll(".tab-btn").forEach((s) => {
      s.addEventListener("click", (i) => {
        this._switchTab(i.target.dataset.tab);
      });
    }), (c = e.getElementById("btnPresetEsp")) == null || c.addEventListener("click", () => this._applyPreset("deye_esphome")), (f = e.getElementById("btnPresetSolarman")) == null || f.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const t = (s, i) => {
      const o = e.getElementById(s);
      o && o.addEventListener("input", (b) => this._valueChanged(i, b.target.value));
    }, p = (s, i) => {
      const o = e.getElementById(s);
      o && o.addEventListener("change", (b) => this._valueChanged(i, b.target.checked));
    }, l = (s, i, o, b = "") => {
      const v = e.getElementById(s);
      v && v.addEventListener("input", (T) => {
        const S = parseFloat(T.target.value);
        if (o) {
          const N = e.getElementById(o);
          N && (N.innerText = `${S}${b}`);
        }
        this._valueChanged(i, S);
      });
    };
    t("title", "title"), t("themeMode", "theme_mode"), t("cardLanguage", "language"), (_ = e.getElementById("cardScale")) == null || _.addEventListener("input", (s) => {
      const i = parseFloat(s.target.value), o = e.getElementById("cardScaleVal");
      o && (o.innerText = `${Math.round(i * 100)}%`), this._valueChanged("card_scale", i);
    }), t("cardMaxWidth", "max_width"), p("showQuickSettings", "show_quick_settings"), t("ctrlSolarCharge", "controls.solar_charge_entity"), t("ctrlSellPower", "controls.sell_power_entity"), t("ctrlGridCharge", "controls.grid_charge_entity"), p("animEnabled", "animations.enabled"), l("animSpeed", "animations.speed", "animSpeedVal", "s"), (E = e.getElementById("solarPvCount")) == null || E.addEventListener("input", (s) => {
      const i = parseInt(s.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = i, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < i; ) {
        const o = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${o}`,
          name: `PV ${o}`,
          voltage_entity: `sensor.deye_12k_inverter_pv${o}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${o}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${o}_power`
        });
      }
      this._valueChanged("solar.pv_count", i), this._valueChanged("solar.strings", this._config.solar.strings), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].name = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].voltage_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].current_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-power-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[o] || (this._config.solar.strings[o] = {}), this._config.solar.strings[o].power_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), t("solarTotalPower", "solar.total_power_entity"), t("solarDailyYield", "solar.daily_yield_entity"), l("solarTargetDaily", "solar.target_daily_yield"), t("invModel", "inverter.model_name"), t("invPower", "inverter.power_entity"), p("invShowSelfConsumption", "inverter.show_self_consumption"), t("invSelfConsumptionEntity", "inverter.self_consumption_entity"), l("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), t("invTempAc", "inverter.ac_temperature_entity"), t("invTempDc", "inverter.dc_temperature_entity"), t("invVolt", "inverter.voltage_entity"), t("invCurrent", "inverter.current_entity"), t("invFreq", "inverter.frequency_entity"), (C = e.getElementById("auxType")) == null || C.addEventListener("change", (s) => {
      const i = s.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = i;
      const b = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[i] || "Мікроінвертор";
      this._config.aux.title = b;
      const v = e.getElementById("auxTitle");
      v && (v.value = b), this._valueChanged("aux.type", i), this._valueChanged("aux.title", b);
    }), t("auxTitle", "aux.title"), t("auxPower", "aux.power_entity"), (x = e.getElementById("windTurbineCount")) == null || x.addEventListener("input", (s) => {
      const i = parseInt(s.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = i, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < i; ) {
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
      this._valueChanged("wind.turbine_count", i), this._valueChanged("wind.turbines", this._config.wind.turbines), this.render();
    }), l("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (B = e.getElementById("windThreshold")) == null || B.addEventListener("input", (s) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(s.target.value));
    }), t("windDailyEnergy", "wind.daily_energy_entity"), t("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].name = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-power-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].power_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-speed-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].rpm_entity = i.target.value, this._config.wind.turbines[o].speed_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-daily-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].daily_energy_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[o] || (this._config.wind.turbines[o] = {}), this._config.wind.turbines[o].monthly_energy_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), t("batSoc", "battery.soc_entity"), t("batPower", "battery.power_entity"), t("batPowerSign", "battery.power_sign"), t("batVolt", "battery.voltage_entity"), t("batCurrent", "battery.current_entity"), t("batCapacity", "battery.capacity_entity"), t("batChargeDaily", "battery.charge_daily_entity"), t("batDischargeDaily", "battery.discharge_daily_entity"), (m = e.getElementById("batParallelCount")) == null || m.addEventListener("input", (s) => {
      const i = parseInt(s.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = i, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < i; ) {
        const o = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${o}`,
          name: `Батарея ${o}`,
          soc_entity: `sensor.bms_rack${o}_soc`,
          current_entity: `sensor.bms_rack${o}_current`,
          voltage_entity: `sensor.bms_rack${o}_voltage`,
          power_entity: `sensor.bms_rack${o}_power`,
          temperature_entity: `sensor.bms_rack${o}_temperature`
        });
      }
      this._valueChanged("battery.parallel_batteries", i), this._valueChanged("battery.modules", this._config.battery.modules), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].name = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].soc_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].current_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].voltage_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].temperature_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].power_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((s) => {
      s.addEventListener("input", (i) => {
        const o = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[o] || (this._config.battery.modules[o] = {}), this._config.battery.modules[o].capacity_kwh = parseFloat(i.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), p("gridSellingEnabled", "grid.selling_enabled"), t("gridPower", "grid.power_entity"), t("gridVoltage", "grid.voltage_entity"), t("gridStatus", "grid.status_entity"), l("gridVoltageThreshold", "grid.voltage_threshold"), t("gridPowerSign", "grid.power_sign"), l("gridMinThreshold", "grid.min_power_threshold"), t("gridImportDaily", "grid.import_daily_entity"), t("gridExportDaily", "grid.export_daily_entity"), t("gridNonEssential", "grid.non_essential_power_entity"), t("gridCarPower", "grid.car_power_entity"), p("loadAutoCalculate", "load.auto_calculate"), t("loadEssential", "load.essential_power_entity"), t("loadDailyHouse", "load.daily_house_entity");
    const h = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const s = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${s}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads), this.render();
    };
    (g = e.getElementById("btnAddSubload")) == null || g.addEventListener("click", h), (r = e.getElementById("btnAddSubloadBottom")) == null || r.addEventListener("click", h), e.querySelectorAll(".btn-del-subload").forEach((s) => {
      s.addEventListener("click", (i) => {
        var v;
        const o = i.currentTarget || i.target.closest(".btn-del-subload"), b = parseInt(o.dataset.idx);
        (v = this._config.load) != null && v.subloads && (this._config.load.subloads.splice(b, 1), this._valueChanged("load.subloads", this._config.load.subloads), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((s) => {
      s.addEventListener("input", (i) => {
        var b, v;
        const o = parseInt(i.target.dataset.idx);
        (v = (b = this._config.load) == null ? void 0 : b.subloads) != null && v[o] && (this._config.load.subloads[o].name = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-icon").forEach((s) => {
      s.addEventListener("change", (i) => {
        var b, v;
        const o = parseInt(i.target.dataset.idx);
        (v = (b = this._config.load) == null ? void 0 : b.subloads) != null && v[o] && (this._config.load.subloads[o].icon = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-entity").forEach((s) => {
      s.addEventListener("input", (i) => {
        var b, v;
        const o = parseInt(i.target.dataset.idx);
        (v = (b = this._config.load) == null ? void 0 : b.subloads) != null && v[o] && (this._config.load.subloads[o].entity = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    });
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", Qi);
const Xi = {
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
    ctrl_grid_charge: "Струм заряду АКБ від мережі"
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
    ctrl_grid_charge: "Grid Charge Current"
  }
};
class eo extends HTMLElement {
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
    return JSON.parse(JSON.stringify(le));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const t = JSON.parse(JSON.stringify(e)), p = JSON.parse(JSON.stringify(le));
    this._config = this._deepMerge(p, t);
    const l = typeof localStorage < "u" ? localStorage.getItem("energy_station_theme") : null;
    this._themeMode = l || this._config.theme_mode || "dark";
    const h = typeof localStorage < "u" ? localStorage.getItem("energy_station_lang") : null;
    this._language = h || this._config.language || "uk";
    const c = typeof localStorage < "u" ? localStorage.getItem("energy_station_scale") : null;
    this._scale = c ? parseFloat(c) : this._config.card_scale || this._config.scale || 1, this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  _rAF(e) {
    return typeof requestAnimationFrame < "u" ? requestAnimationFrame(e) : setTimeout(e, 0);
  }
  _changeScale(e) {
    var h, c;
    let t = typeof e == "number" ? e : this._scale + (e || 0.1);
    t = Math.max(0.7, Math.min(2, Math.round(t * 100) / 100)), this._scale = t, typeof localStorage < "u" && localStorage.setItem("energy_station_scale", t.toString());
    const p = (h = this.shadowRoot) == null ? void 0 : h.querySelector(".energy-station-container");
    p && (p.style.setProperty("--es-card-scale", t.toString()), p.style.zoom = t.toString());
    const l = (c = this.shadowRoot) == null ? void 0 : c.getElementById("headerZoomVal");
    l && (l.innerText = `${Math.round(t * 100)}%`), this._rAF(() => {
      this._updateFlowPaths(), setTimeout(() => this._updateFlowPaths(), 80);
    });
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, t) {
    const p = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!t || typeof t != "object") return p;
    for (const l of Object.keys(t)) {
      const h = t[l], c = e ? e[l] : void 0;
      h && typeof h == "object" && !Array.isArray(h) ? p[l] = this._deepMerge(c || {}, h) : p[l] = h;
    }
    return p;
  }
  _getEntityState(e) {
    var f;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const t = this._hass.states[e], l = String(t.state).trim().replace(",", "."), h = parseFloat(l), c = ((f = t.attributes) == null ? void 0 : f.unit_of_measurement) || "";
    return {
      raw: t.state,
      val: isNaN(h) ? 0 : h,
      unit: c,
      attributes: t.attributes
    };
  }
  _t(e) {
    var p, l;
    const t = this._language || "uk";
    return ((p = Xi[t]) == null ? void 0 : p[e]) || ((l = Xi.uk) == null ? void 0 : l[e]) || e;
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
    var c;
    const e = (c = this.shadowRoot) == null ? void 0 : c.querySelector(".energy-station-container");
    if (!e) return;
    const t = this._themeMode === "light";
    e.classList.toggle("theme-light", t);
    const p = this.shadowRoot.getElementById("headerThemeToggle");
    p && (p.innerHTML = t ? "☀️" : "🌙", p.setAttribute("title", t ? this._t("theme_dark") : this._t("theme_light")));
    const l = this.shadowRoot.getElementById("btnThemeDark"), h = this.shadowRoot.getElementById("btnThemeLight");
    l && h && (l.classList.toggle("active", !t), h.classList.toggle("active", t));
  }
  _formatPower(e, t = 0) {
    const p = this._language === "en" ? "kW" : "кВт";
    if (!e) return { num: t.toFixed(3), kw: t, str: `${t.toFixed(3)} ${p}` };
    let l = e.val;
    return e.unit === "W" && (l = l / 1e3), {
      num: l.toFixed(3),
      kw: l,
      str: `${l.toFixed(3)} ${p}`
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
    var t, p, l, h, c, f, _, E, C, x, B, m, g, r, s, i, o, b;
    const e = this._config || le;
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
          --flow-speed: ${((t = e.animations) == null ? void 0 : t.speed) || 1.2}s;
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${O.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((p = e.solar) == null ? void 0 : p.target_daily_yield) || 55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${O.sun}</div>
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
              <div>${this._t("grid_export")} <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8;">${O.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(l = e.grid) != null && l.show_non_essential && ((h = e.grid) != null && h.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${O.house_outline}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language === "en" ? "kW" : "кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c = e.grid) != null && c.show_car && ((f = e.grid) != null && f.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${O.car}</div>
              <div class="es-node-title" id="carTitle">${((_ = e.grid) == null ? void 0 : _.car_title) || this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${O.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((E = e.inverter) == null ? void 0 : E.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language === "en" ? "W" : "Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((C = e.aux) == null ? void 0 : C.type) === "none" || ((x = e.aux) == null ? void 0 : x.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${O[(B = e.aux) == null ? void 0 : B.type] || O.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((m = e.aux) == null ? void 0 : m.type) === "microinverter" && (!((g = e.aux) != null && g.title) || ((r = e.aux) == null ? void 0 : r.title) === "Вітрогенератор") ? this._t("aux_microinverter") : ((s = e.aux) == null ? void 0 : s.title) || this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language === "en" ? "kW" : "кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((i = e.aux) == null ? void 0 : i.subtitle) || this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((o = e.wind) == null ? void 0 : o.show) === !1 && ((b = e.aux) == null ? void 0 : b.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${O.house}</div>
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

            <!-- Right Telemetry ('До резерву 20%' and progress bar removed as requested) -->
            <div class="es-bat-hub-right-col es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 3px;">
              <div id="batVoltVal" style="color: #6ee7b7; font-weight: 700;">53,24 V</div>
              <div id="batCurrentVal" style="color: #38bdf8; font-weight: 700;">-56,30 A</div>
              <div id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;">9,00 kWh</div>
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
      totalPvPowerBadge: e.getElementById("totalPvPowerBadge"),
      solarFlowCollector: e.getElementById("solarFlowCollector"),
      gridImportDaily: e.getElementById("gridImportDaily"),
      gridExportDaily: e.getElementById("gridExportDaily"),
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
    var _, E, C, x, B, m, g, r;
    const e = this._config || le, t = ((_ = this._nodes) == null ? void 0 : _.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!t) return;
    if (t.innerHTML = "", !(((E = e.wind) == null ? void 0 : E.show) !== !1 || ((C = e.aux) == null ? void 0 : C.type) === "wind")) {
      t.classList.add("hidden");
      return;
    }
    t.classList.remove("hidden");
    const l = ((x = e.wind) == null ? void 0 : x.turbine_count) || ((m = (B = e.wind) == null ? void 0 : B.turbines) == null ? void 0 : m.length) || 2, h = ((g = e.wind) == null ? void 0 : g.turbines) || [], c = document.createElement("div");
    c.className = "es-wind-summary-bar es-mono", c.id = "windStationSummaryBar", c.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, t.appendChild(c);
    const f = document.createElement("div");
    f.className = "es-wind-pods-row", t.appendChild(f);
    for (let s = 0; s < l; s++) {
      const i = h[s] || {
        name: `Вітряк ${s + 1}`,
        power_entity: `sensor.wind_turbine_${s + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((r = e.wind) == null ? void 0 : r.animation_threshold) || 50
      }, o = !!(i.daily_energy_entity || i.monthly_energy_entity), b = document.createElement("div");
      b.className = "es-turbine-card glow-wind clickable-node", b.id = `turbineCard_${s + 1}`, b.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${s + 1}">
              ${O.wind_turbine}
            </div>
            <span>${i.name || `Вітряк ${s + 1}`}</span>
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

        <div id="turbineEnergyFooter_${s + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${o ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${s + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${s + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, b.addEventListener("click", () => {
        this._fireMoreInfo(i.power_entity);
      }), f.appendChild(b);
    }
  }
  _renderDynamicPvPanels() {
    var l, h, c, f, _;
    const e = this._config || le, t = this._nodes.pvPanelsContainer;
    if (!t) return;
    t.innerHTML = "";
    const p = ((l = e.solar) == null ? void 0 : l.pv_count) || ((c = (h = e.solar) == null ? void 0 : h.strings) == null ? void 0 : c.length) || 3;
    for (let E = 1; E <= p; E++) {
      const C = E < 10 ? `0${E}` : `${E}`, x = ((_ = (f = e.solar) == null ? void 0 : f.strings) == null ? void 0 : _[E - 1]) || {}, B = x.name || `PV ${C}`, m = document.createElement("div");
      m.className = "es-pv-panel glow-solar clickable-node", m.dataset.pvIndex = E, m.id = `pvPanel_${E}`, m.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${O.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${B}</span>
        <span class="es-pv-val es-mono" id="pvVal_${E}">1,200 кВт</span>
      `, m.addEventListener("click", () => {
        var r;
        const g = x.power_entity || x.voltage_entity || x.current_entity || ((r = e.solar) == null ? void 0 : r.total_power_entity);
        this._fireMoreInfo(g);
      }), t.appendChild(m);
    }
  }
  _renderDynamicSubloads() {
    var l;
    const e = this._config || le, t = this._nodes.subloadsContainer;
    if (!t) return;
    t.innerHTML = "", (((l = e.load) == null ? void 0 : l.subloads) || []).forEach((h, c) => {
      const f = document.createElement("div");
      f.className = "es-subload-card clickable-node", f.id = `subloadCard_${c}`, f.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${O[h.icon] || O.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${h.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, f.addEventListener("click", () => {
        this._fireMoreInfo(h.entity);
      }), t.appendChild(f);
    });
  }
  _renderDynamicBatteryRack() {
    var _, E, C, x, B, m, g;
    const e = this._config || le, t = this._nodes.batteryRackContainer;
    if (!t) return;
    t.innerHTML = "";
    const p = ((_ = e.battery) == null ? void 0 : _.parallel_batteries) || ((C = (E = e.battery) == null ? void 0 : E.modules) == null ? void 0 : C.length) || 2, l = [82, 76, 91, 68, 85, 90, 72, 80], h = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4], c = this._t("bat_prefix"), f = this._language === "en" ? "kW" : "кВт";
    for (let r = 1; r <= p; r++) {
      const s = ((B = (x = e.battery) == null ? void 0 : x.modules) == null ? void 0 : B[r - 1]) || ((g = (m = e.battery) == null ? void 0 : m.module_entities) == null ? void 0 : g[r - 1]) || {}, i = s.name || `${c} ${r}`, o = l[(r - 1) % l.length], b = h[(r - 1) % h.length], v = document.createElement("div");
      v.className = "es-battery-pack-card glow-battery clickable-node", v.id = `batPackCard_${r}`, v.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${O.battery_vertical}</div>
        <span class="es-bat-name">${i}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${r}">${o}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${r}">${b.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${r}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${f}</div>
      `, v.addEventListener("click", () => {
        var S;
        const T = s.soc_entity || s.soc || s.voltage_entity || s.volt || s.current_entity || ((S = e.battery) == null ? void 0 : S.soc_entity);
        this._fireMoreInfo(T);
      }), t.appendChild(v);
    }
    this._renderQuickSettingsCard();
  }
  _renderQuickSettingsCard() {
    var r, s, i, o, b, v, T, S, N;
    const e = this._config || le, t = ((r = this._nodes) == null ? void 0 : r.bottomControlsDock) || this.shadowRoot.getElementById("bottomControlsDock");
    if (!t || (t.innerHTML = "", e.show_quick_settings === !1)) return;
    const p = this._themeMode === "light", l = this._language === "en", h = ((s = e.controls) == null ? void 0 : s.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", c = ((i = e.controls) == null ? void 0 : i.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", f = ((o = e.controls) == null ? void 0 : o.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", _ = document.createElement("div");
    _.className = "es-quick-settings-card", _.id = "quickSettingsCard", _.innerHTML = `
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${O.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${p ? O.sun_mode : O.moon}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${h}">
              <span class="es-ctrl-icon es-ctrl-solar">${O.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell">${O.inverter}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${f}">
              <span class="es-ctrl-icon es-ctrl-grid">${O.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `, (b = _.querySelector("#btnThemeToggle")) == null || b.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleTheme();
    }), (v = _.querySelector("#btnLangToggle")) == null || v.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleLanguage();
    }), (T = _.querySelector("#ctrlLabelWrapSolar")) == null || T.addEventListener("click", () => this._fireMoreInfo(h)), (S = _.querySelector("#ctrlLabelWrapSell")) == null || S.addEventListener("click", () => this._fireMoreInfo(c)), (N = _.querySelector("#ctrlLabelWrapGrid")) == null || N.addEventListener("click", () => this._fireMoreInfo(f));
    const E = _.querySelector("#ctrlSliderSolar"), C = _.querySelector("#ctrlValSolar");
    E && (this._updateSliderGradient(E), E.addEventListener("input", (n) => {
      C && (C.innerText = `${n.target.value} A`), this._updateSliderGradient(E);
    }), E.addEventListener("change", (n) => {
      this._setNumberValue(h, n.target.value);
    }));
    const x = _.querySelector("#ctrlSliderSell"), B = _.querySelector("#ctrlValSell");
    x && (this._updateSliderGradient(x), x.addEventListener("input", (n) => {
      const I = Number(n.target.value).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US");
      B && (B.innerText = `${I} ${this._language === "uk" ? "Вт" : "W"}`), this._updateSliderGradient(x);
    }), x.addEventListener("change", (n) => {
      this._setNumberValue(c, n.target.value);
    }));
    const m = _.querySelector("#ctrlSliderGrid"), g = _.querySelector("#ctrlValGrid");
    m && (this._updateSliderGradient(m), m.addEventListener("input", (n) => {
      g && (g.innerText = `${n.target.value} A`), this._updateSliderGradient(m);
    }), m.addEventListener("change", (n) => {
      this._setNumberValue(f, n.target.value);
    })), t.appendChild(_), this._updateControlSliders();
  }
  _updateSliderGradient(e) {
    if (!e) return;
    const t = parseFloat(e.min) || 0, p = parseFloat(e.max) || 100, l = parseFloat(e.value) || 0, h = Math.max(0, Math.min(100, (l - t) / (p - t) * 100));
    e.style.background = `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${h}%, rgba(255, 255, 255, 0.12) ${h}%, rgba(255, 255, 255, 0.12) 100%)`;
  }
  _setNumberValue(e, t) {
    if (!this._hass || !e) return;
    const l = e.split(".")[0] || "number", h = Number(t);
    this._hass.callService(l, "set_value", {
      entity_id: e,
      value: h
    });
  }
  _updateControlSliders() {
    var B, m, g, r, s, i, o, b, v;
    const e = this._config || le;
    if (e.show_quick_settings === !1) return;
    const t = this.shadowRoot;
    if (!t) return;
    const p = ((B = e.controls) == null ? void 0 : B.solar_charge_entity) || "number.deye_12k_inverter_max_charge_current", l = ((m = e.controls) == null ? void 0 : m.sell_power_entity) || "number.deye_12k_inverter_export_surplus_power", h = ((g = e.controls) == null ? void 0 : g.grid_charge_entity) || "number.deye_12k_inverter_grid_charge_current", c = t.getElementById("ctrlSliderSolar"), f = t.getElementById("ctrlValSolar"), _ = t.getElementById("ctrlSliderSell"), E = t.getElementById("ctrlValSell"), C = t.getElementById("ctrlSliderGrid"), x = t.getElementById("ctrlValGrid");
    if (c && (!c.matches || !c.matches(":active"))) {
      const T = (s = (r = this._hass) == null ? void 0 : r.states) == null ? void 0 : s[p], S = T && !isNaN(parseFloat(T.state)) ? parseFloat(T.state) : c.value ? parseFloat(c.value) : 80;
      c.value = S, f && (f.innerText = `${Math.round(S)} A`), this._updateSliderGradient(c);
    }
    if (_ && (!_.matches || !_.matches(":active"))) {
      const T = (o = (i = this._hass) == null ? void 0 : i.states) == null ? void 0 : o[l], S = T && !isNaN(parseFloat(T.state)) ? parseFloat(T.state) : _.value ? parseFloat(_.value) : 5e3;
      _.value = S;
      const N = Math.round(S).toLocaleString(this._language === "uk" ? "uk-UA" : "en-US"), n = this._language === "uk" ? "Вт" : "W";
      E && (E.innerText = `${N} ${n}`), this._updateSliderGradient(_);
    }
    if (C && (!C.matches || !C.matches(":active"))) {
      const T = (v = (b = this._hass) == null ? void 0 : b.states) == null ? void 0 : v[h], S = T && !isNaN(parseFloat(T.state)) ? parseFloat(T.state) : C.value ? parseFloat(C.value) : 70;
      C.value = S, x && (x.innerText = `${Math.round(S)} A`), this._updateSliderGradient(C);
    }
  }
  _bindInteractions() {
    var p, l, h, c, f, _, E, C, x, B, m, g, r, s, i, o, b, v, T, S, N;
    const e = this.shadowRoot, t = this._config || le;
    (p = e.getElementById("headerThemeToggle")) == null || p.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleTheme();
    }), (l = e.getElementById("headerLangToggle")) == null || l.addEventListener("click", (n) => {
      n.stopPropagation(), this._toggleLanguage();
    }), (h = e.getElementById("headerZoomIn")) == null || h.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(this._scale + 0.1);
    }), (c = e.getElementById("headerZoomOut")) == null || c.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(this._scale - 0.1);
    }), (f = e.getElementById("headerZoomVal")) == null || f.addEventListener("click", (n) => {
      n.stopPropagation(), this._changeScale(1);
    }), (_ = e.getElementById("solarHeaderNode")) == null || _.addEventListener("click", () => {
      var n, I;
      this._fireMoreInfo(((n = t.solar) == null ? void 0 : n.daily_yield_entity) || ((I = t.solar) == null ? void 0 : I.total_power_entity));
    }), (E = e.getElementById("totalPvPowerBadge")) == null || E.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.solar) == null ? void 0 : n.total_power_entity);
    }), (C = e.getElementById("gridNode")) == null || C.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.grid) == null ? void 0 : n.power_entity);
    }), (x = e.getElementById("nonEssentialNode")) == null || x.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.grid) == null ? void 0 : n.non_essential_power_entity);
    }), (B = e.getElementById("carNode")) == null || B.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.grid) == null ? void 0 : n.car_power_entity);
    }), (m = e.getElementById("inverterNode")) == null || m.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.inverter) == null ? void 0 : n.power_entity);
    }), (g = e.getElementById("inverterSelfConsumptionBox")) == null || g.addEventListener("click", (n) => {
      var I;
      n.stopPropagation(), (I = t.inverter) != null && I.self_consumption_entity && this._fireMoreInfo(t.inverter.self_consumption_entity);
    }), (r = e.getElementById("auxNode")) == null || r.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.aux) == null ? void 0 : n.power_entity);
    }), (s = e.getElementById("essentialNode")) == null || s.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.load) == null ? void 0 : n.essential_power_entity);
    }), (i = e.getElementById("masterBatteryHub")) == null || i.addEventListener("click", () => {
      var n;
      this._fireMoreInfo((n = t.battery) == null ? void 0 : n.soc_entity);
    }), (o = e.getElementById("batChargeDaily")) == null || o.addEventListener("click", (n) => {
      var I;
      n.stopPropagation(), this._fireMoreInfo(((I = t.battery) == null ? void 0 : I.charge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_charge");
    }), (b = e.getElementById("batDischargeDaily")) == null || b.addEventListener("click", (n) => {
      var I;
      n.stopPropagation(), this._fireMoreInfo(((I = t.battery) == null ? void 0 : I.discharge_daily_entity) || "sensor.inverter_12_kvt_daily_battery_discharge");
    });
    for (let n = 1; n <= 8; n++) {
      const I = e.getElementById(`batBranchBadge_${n}`), A = ((T = (v = t.battery) == null ? void 0 : v.modules) == null ? void 0 : T[n - 1]) || ((N = (S = t.battery) == null ? void 0 : S.module_entities) == null ? void 0 : N[n - 1]) || {};
      I == null || I.addEventListener("click", () => {
        var G;
        const J = A.power_entity || A.current_entity || A.soc_entity || ((G = t.battery) == null ? void 0 : G.soc_entity);
        this._fireMoreInfo(J);
      });
    }
  }
  _updateValues() {
    var P, xe, Pe, Ne, Ve, Ae, nt, at, rt, lt, mt, wt, xt, kt, Et, $t, Bt, St, Ct, It, Tt, Mt, Lt, Ft, Pt, Nt, Vt, At, Rt, zt, Dt, Wt, qt, Ht, Gt, jt, Ot, Yt, Kt, Ut, Jt, Xt, Zt, Qt, ei, ti, ii, oi, si, ni, ai, ri, li, di, ci, pi, hi, gi, _i, ui, bi, yi, fi, vi, mi, wi, xi, ki, Ei, $i, Bi, Si, Ci, Ii, Ti, Mi, Li, Fi, Pi, Ni, Vi, Ai, Ri, zi, Di, Wi, qi, Hi, Gi, ji, Oi, Yi, Ki, Ui, Ji;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || le, t = this._language === "en" ? "kW" : "кВт", p = ((P = e.solar) == null ? void 0 : P.pv_count) || ((Pe = (xe = e.solar) == null ? void 0 : xe.strings) == null ? void 0 : Pe.length) || 3;
    let l = 0, h = !1;
    for (let a = 1; a <= p; a++) {
      const L = (Ve = (Ne = e.solar) == null ? void 0 : Ne.strings) == null ? void 0 : Ve[a - 1], K = (L == null ? void 0 : L.voltage_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_voltage` : ""), W = (L == null ? void 0 : L.current_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_current` : ""), j = (L == null ? void 0 : L.power_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_power` : "");
      if (this._getEntityState(j) || this._getEntityState(K) || this._getEntityState(W)) {
        h = !0;
        break;
      }
    }
    for (let a = 1; a <= p; a++) {
      const L = this.shadowRoot.getElementById(`pvVal_${a}`), K = this.shadowRoot.getElementById(`pvVolt_${a}`), W = this.shadowRoot.getElementById(`pvCurr_${a}`), j = (nt = (Ae = e.solar) == null ? void 0 : Ae.strings) == null ? void 0 : nt[a - 1], Ue = (j == null ? void 0 : j.voltage_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_voltage` : ""), X = (j == null ? void 0 : j.current_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_current` : ""), Ie = (j == null ? void 0 : j.power_entity) || (a <= 3 ? `sensor.deye_12k_inverter_pv${a}_power` : ""), ye = this._getEntityState(Ue), ve = this._getEntityState(X), q = this._getEntityState(Ie);
      let ie = 0, Z = 0, ae = 0;
      q ? ae = this._formatPower(q).kw : ye && ve ? ae = ye.val * ve.val / 1e3 : ye ? ae = 0 : ae = h ? 0 : 4, ye ? ie = ye.val : ie = h ? 0 : 380 + a * 4.5, ve ? Z = ve.val : q && ie > 0 ? Z = ae * 1e3 / ie : Z = h ? 0 : 3.12 + a * 0.28, l += ae, L && (L.innerText = `${ae.toFixed(3)} ${t}`), K && (K.innerText = `${ie.toFixed(1)} V`), W && (W.innerText = `${Z.toFixed(2)} A`);
    }
    const c = this._getEntityState((at = e.solar) == null ? void 0 : at.total_power_entity);
    let f = 0;
    c ? f = this._formatPower(c).kw : f = l, this._nodes.totalPvPowerBadge.innerText = `${f.toFixed(3)} ${t}`;
    const _ = this._getEntityState((rt = e.solar) == null ? void 0 : rt.daily_yield_entity), E = _ ? _.val : h ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = E.toFixed(1);
    const C = ((lt = e.solar) == null ? void 0 : lt.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = C.toFixed(1);
    const x = Math.min(100, Math.round(E / C * 100));
    this._nodes.solarProgressBar.style.width = `${x}%`;
    const B = this._getEntityState((mt = e.inverter) == null ? void 0 : mt.power_entity);
    this._nodes.inverterPowerVal && ((wt = e.inverter) != null && wt.power_entity && B ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(B, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const m = this._getEntityState((xt = e.inverter) == null ? void 0 : xt.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = m ? m.val.toFixed(2) : "41,20";
    const g = this._getEntityState((kt = e.inverter) == null ? void 0 : kt.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = g ? g.val.toFixed(2) : "38,40";
    const r = this._getEntityState((Et = e.inverter) == null ? void 0 : Et.voltage_entity);
    this._nodes.inverterVolt.innerText = r ? r.val.toFixed(2) : "231,45";
    const s = this._getEntityState(($t = e.inverter) == null ? void 0 : $t.current_entity);
    this._nodes.inverterCurrent.innerText = s ? s.val.toFixed(2) : "8,60";
    const i = this._getEntityState((Bt = e.inverter) == null ? void 0 : Bt.frequency_entity);
    this._nodes.inverterFreq.innerText = i ? i.val.toFixed(2) : "50,01";
    const o = ((St = e.wind) == null ? void 0 : St.show) !== !1 || ((Ct = e.aux) == null ? void 0 : Ct.type) === "wind", b = this.shadowRoot.getElementById("windStationContainer"), v = this._nodes.auxNode;
    let T = 0;
    if (b)
      if (!o)
        b.classList.add("hidden");
      else {
        b.classList.remove("hidden");
        const a = ((It = e.wind) == null ? void 0 : It.turbine_count) || ((Mt = (Tt = e.wind) == null ? void 0 : Tt.turbines) == null ? void 0 : Mt.length) || 2, L = ((Lt = e.wind) == null ? void 0 : Lt.turbines) || [];
        let K = 0, W = 0, j = !1, Ue = !1;
        for (let q = 0; q < a; q++) {
          const ie = L[q] || {
            power_entity: `sensor.wind_turbine_${q + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((Ft = e.wind) == null ? void 0 : Ft.animation_threshold) || 50
          }, Z = this.shadowRoot.getElementById(`turbinePower_${q + 1}`), ae = this.shadowRoot.getElementById(`turbineStatus_${q + 1}`), dt = this.shadowRoot.getElementById(`turbineIcon_${q + 1}`), Re = this.shadowRoot.getElementById(`turbineCard_${q + 1}`);
          this.shadowRoot.getElementById(`turbineRpmVal_${q + 1}`);
          const ut = this.shadowRoot.getElementById(`turbineDailyVal_${q + 1}`), bt = this.shadowRoot.getElementById(`turbineMonthlyVal_${q + 1}`), ct = this.shadowRoot.getElementById(`turbineEnergyFooter_${q + 1}`), pt = this._hass ? 0 : q === 0 ? 1.56 : 0.22, Je = this._getEntityState(ie.power_entity), tt = this._formatPower(Je, pt);
          Z && (Z.innerText = tt.str), T += tt.kw;
          let it = tt.kw * 1e3;
          Je && Je.unit === "W" && (it = Je.val);
          const ke = ie.animation_threshold ?? ((Pt = e.wind) == null ? void 0 : Pt.animation_threshold) ?? 50, Te = dt == null ? void 0 : dt.querySelector(".turbine-rotor"), Me = ie.rpm_entity || ie.speed_entity || ((Nt = e.wind) == null ? void 0 : Nt.rpm_entity) || ((Vt = e.wind) == null ? void 0 : Vt.speed_entity) || (q === 0 ? "sensor.wind_rpm" : "");
          let U = Me && ((At = this._hass) != null && At.states[Me]) ? this._getEntityState(Me) : null;
          if (!U && q === 0 && ((Rt = this._hass) != null && Rt.states["sensor.wind_rpm"]) && (U = this._getEntityState("sensor.wind_rpm")), it >= ke || U && typeof U.val == "number" && U.val > 0) {
            Te && Te.classList.add("spinning"), Re && (Re.classList.add("glow-wind"), Re.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const ht = ((zt = e.wind) == null ? void 0 : zt.max_power) || 3e3, ft = ((Dt = e.wind) == null ? void 0 : Dt.max_rpm) || 600;
            let gt = 0;
            U && typeof U.val == "number" && U.val > 0 ? gt = Math.min(1, Math.max(0, U.val / ft)) : gt = Math.min(1, Math.max(0, (it - ke) / (ht - ke)));
            const ot = (3.2 - gt * 2.75).toFixed(2);
            Te && Te.style.setProperty("--turbine-speed", `${ot}s`), ae && (ae.innerText = this._t("wind_gen"), ae.style.color = "#67e8f9");
          } else
            Te && Te.classList.remove("spinning"), Re && (Re.classList.remove("glow-wind"), Re.style.borderColor = "rgba(255, 255, 255, 0.08)"), ae && (ae.innerText = this._t("wind_calm"), ae.style.color = "#94a3b8");
          const Q = this.shadowRoot.getElementById(`turbineRpmBox_${q + 1}`);
          if (Q)
            if (U && U.raw !== "unavailable" && U.raw !== "unknown" && typeof U.val == "number" && !isNaN(U.val)) {
              Q.style.display = "inline";
              const ft = U.unit ? U.unit : "RPM";
              Q.innerHTML = `<span id="turbineRpmVal_${q + 1}">${Math.round(U.val)}</span> ${ft}`;
            } else
              Q.style.display = "none";
          const re = this._getEntityState(ie.daily_energy_entity), oe = this._getEntityState(ie.monthly_energy_entity);
          ut && (ut.innerText = re && typeof re.val == "number" && !isNaN(re.val) ? re.val.toFixed(2) : "0.00"), bt && (bt.innerText = oe && typeof oe.val == "number" && !isNaN(oe.val) ? oe.val.toFixed(1) : "0.0");
          const yt = !!(ie.daily_energy_entity || ie.monthly_energy_entity);
          ct && (ct.style.display = yt ? "flex" : "none"), re && typeof re.val == "number" && !isNaN(re.val) && (K += re.val, j = !0), oe && typeof oe.val == "number" && !isNaN(oe.val) && (W += oe.val, Ue = !0);
        }
        const X = this.shadowRoot.getElementById("windTotalDailyVal"), Ie = this.shadowRoot.getElementById("windTotalMonthlyVal"), ye = this._getEntityState((Wt = e.wind) == null ? void 0 : Wt.daily_energy_entity), ve = this._getEntityState((qt = e.wind) == null ? void 0 : qt.monthly_energy_entity);
        X && (ye && typeof ye.val == "number" && !isNaN(ye.val) ? X.innerText = ye.val.toFixed(2) : j ? X.innerText = K.toFixed(2) : X.innerText = "0.00"), Ie && (ve && typeof ve.val == "number" && !isNaN(ve.val) ? Ie.innerText = ve.val.toFixed(1) : Ue ? Ie.innerText = W.toFixed(1) : Ie.innerText = "0.0");
      }
    let S = 0;
    if (v)
      if (((Ht = e.aux) == null ? void 0 : Ht.type) === "none" || ((Gt = e.aux) == null ? void 0 : Gt.type) === "wind")
        v.classList.add("hidden");
      else {
        v.classList.remove("hidden");
        const a = this._getEntityState((jt = e.aux) == null ? void 0 : jt.power_entity), L = this._formatPower(a, 2);
        S = L.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = L.str);
        const K = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let W = (Ot = e.aux) == null ? void 0 : Ot.title;
        ((Yt = e.aux) == null ? void 0 : Yt.type) === "microinverter" && (!W || W === "Вітрогенератор") ? W = "Мікроінвертор" : (Kt = e.aux) != null && Kt.type && K[e.aux.type] && (!W || W === "Вітрогенератор") ? W = K[e.aux.type] : W || (W = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = W), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = O[(Ut = e.aux) == null ? void 0 : Ut.type] || O.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((Jt = e.aux) == null ? void 0 : Jt.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), v.style.borderColor = "rgba(192, 132, 252, 0.45)", v.style.background = "rgba(88, 28, 135, 0.35)", v.classList.remove("glow-wind"), v.classList.add("glow-aux");
      }
    const N = this._getEntityState((Xt = e.grid) == null ? void 0 : Xt.power_entity), n = N ? N.unit === "W" ? N.val / 1e3 : N.val : 0, I = ((Zt = e.grid) == null ? void 0 : Zt.power_sign) || ((Qt = e.grid) != null && Qt.invert_power ? "inverted" : "deye"), A = ((ei = e.grid) == null ? void 0 : ei.selling_enabled) === !0, J = (((ti = e.grid) == null ? void 0 : ti.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3, G = this._getEntityState((ii = e.grid) == null ? void 0 : ii.status_entity), D = this._getEntityState(((oi = e.grid) == null ? void 0 : oi.voltage_entity) || ((si = e.inverter) == null ? void 0 : si.voltage_entity)), ee = ((ni = e.grid) == null ? void 0 : ni.voltage_threshold) !== void 0 ? e.grid.voltage_threshold : 90;
    let d = !0;
    if (G) {
      const a = String(G.raw || G.val).toLowerCase();
      (a === "off" || a === "false" || a === "0" || a === "disconnected" || a === "offline" || a === "unavailable" || a === "unknown") && (d = !1);
    } else D && typeof D.val == "number" && !isNaN(D.val) && D.val < ee && (d = !1);
    let u = !1, k = !1, y = 0;
    d ? (y = Math.abs(n), y >= J && (I === "deye" ? n < 0 ? u = !0 : k = !0 : n > 0 ? u = !0 : k = !0), u && !A && (u = !1)) : (y = 0, u = !1, k = !1);
    const $ = this.shadowRoot.getElementById("gridNode");
    this._nodes.gridPowerVal && (d ? (this._nodes.gridPowerVal.innerText = `${y.toFixed(3)} ${t}`, u ? this._nodes.gridPowerVal.style.color = "#34d399" : k ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8") : (this._nodes.gridPowerVal.innerText = `0.000 ${t}`, this._nodes.gridPowerVal.style.color = "#64748b")), this._nodes.gridDirectionLabel && (d ? u ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_export"), this._nodes.gridDirectionLabel.style.color = "#34d399") : k ? (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_import"), this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_idle"), this._nodes.gridDirectionLabel.style.color = "#64748b") : (this._nodes.gridDirectionLabel.innerText = this._t("grid_dir_off"), this._nodes.gridDirectionLabel.style.color = "#ef4444")), $ && (d ? ($.classList.add("glow-grid"), $.style.borderColor = "rgba(56, 189, 248, 0.4)") : ($.classList.remove("glow-grid"), $.style.borderColor = "rgba(239, 68, 68, 0.45)"));
    const R = this._getEntityState((ai = e.grid) == null ? void 0 : ai.import_daily_entity);
    this._nodes.gridImportDaily.innerText = R ? `${R.val.toFixed(2)} kWh` : "0.00 kWh";
    const H = this._getEntityState((ri = e.grid) == null ? void 0 : ri.export_daily_entity);
    this._nodes.gridExportDaily.innerText = H ? `${H.val.toFixed(2)} kWh` : "0.00 kWh";
    const se = this.shadowRoot.getElementById("nonEssentialNode"), te = !!((li = e.grid) != null && li.show_non_essential && ((di = e.grid) != null && di.non_essential_power_entity)) || ((ci = e.grid) == null ? void 0 : ci.show_non_essential) !== !1 && !!((pi = e.grid) != null && pi.non_essential_power_entity);
    let pe = 0;
    if (se)
      if (te) {
        se.classList.remove("hidden");
        const a = this._getEntityState(e.grid.non_essential_power_entity), L = this._formatPower(a, 0);
        pe = L.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = L.str);
      } else
        se.classList.add("hidden");
    const ue = this.shadowRoot.getElementById("carNode"), fe = !!((hi = e.grid) != null && hi.show_car && ((gi = e.grid) != null && gi.car_power_entity)) || ((_i = e.grid) == null ? void 0 : _i.show_car) !== !1 && !!((ui = e.grid) != null && ui.car_power_entity);
    let de = 0;
    if (ue)
      if (fe) {
        ue.classList.remove("hidden");
        const a = this._getEntityState(e.grid.car_power_entity), L = this._formatPower(a, 0);
        de = L.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = L.str);
      } else
        ue.classList.add("hidden");
    const ne = this._getEntityState((bi = e.battery) == null ? void 0 : bi.soc_entity), De = ne ? ne.val : 80;
    this._nodes.masterBatterySoc.innerText = `${De.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const me = this._getEntityState((yi = e.battery) == null ? void 0 : yi.power_entity), be = this._getEntityState((fi = e.battery) == null ? void 0 : fi.current_entity), Ee = me ? me.unit === "W" ? me.val / 1e3 : me.val : 0, We = ((vi = e.battery) == null ? void 0 : vi.power_sign) || ((mi = e.battery) != null && mi.invert_power ? "standard" : "deye");
    let he = !1, ce = !1;
    const we = Math.abs(Ee);
    if (we >= 0.02 ? We === "deye" ? Ee < 0 ? he = !0 : ce = !0 : Ee > 0 ? he = !0 : ce = !0 : be && Math.abs(be.val) >= 0.3 && (We === "deye" ? be.val < 0 ? he = !0 : ce = !0 : be.val > 0 ? he = !0 : ce = !0), this._isCharging = he, this._isDischarging = ce, this._nodes.masterBatteryFlowHint) {
      let a = this._t("bat_idle"), L = "#94a3b8";
      he ? (a = this._t("bat_dir_charge"), L = "#34d399") : ce && (a = this._t("bat_dir_discharge"), L = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${we.toFixed(3)} ${t}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${L}; font-weight: 700; font-size: 14px;">${a}</span>`;
    }
    const Le = this._getEntityState((wi = e.battery) == null ? void 0 : wi.voltage_entity), qe = Le ? Le.val.toFixed(2) : "53.24", He = be ? be.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${qe.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${He.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((xi = e.battery) == null ? void 0 : xi.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const a = ((ki = e.battery) == null ? void 0 : ki.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${a}%`;
    }
    const Ge = k ? y : 0, je = ce ? we : 0, Oe = f + T + (S > 0 ? S : 0) + Ge + je, Ye = (he ? we : 0) + (u ? y : 0) + pe + de, $e = Math.max(0, Oe - Ye), w = this._getEntityState((Ei = e.inverter) == null ? void 0 : Ei.self_consumption_entity);
    let V = 0, z = this._getEntityState(($i = e.load) == null ? void 0 : $i.essential_power_entity);
    !z && (!((Bi = e.load) != null && Bi.essential_power_entity) || ((Si = e.load) == null ? void 0 : Si.essential_power_entity) === "sensor.deye_12k_inverter_essential_load_power" || ((Ci = e.load) == null ? void 0 : Ci.essential_power_entity) === "sensor.deye_12k_inverter_load_power") && (z = this._getEntityState("sensor.deye_12k_inverter_load_power") || this._getEntityState("sensor.deye_12k_inverter_essential_load_power") || this._getEntityState("sensor.load_power") || this._getEntityState("sensor.solarman_essential_load"));
    const ge = !!(z && typeof z.val == "number" && !isNaN(z.val) && z.val > 0);
    let Y = 0;
    if (ge)
      Y = Math.max(0, z.unit === "W" ? z.val / 1e3 : z.val), w && typeof w.val == "number" && !isNaN(w.val) ? V = Math.max(0, w.unit === "W" ? w.val / 1e3 : w.val) : V = Math.max(0, $e - Y);
    else {
      if (w && typeof w.val == "number" && !isNaN(w.val))
        V = Math.max(0, w.unit === "W" ? w.val / 1e3 : w.val);
      else {
        const L = (((Ii = e.inverter) == null ? void 0 : Ii.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
        V = Math.min($e, L);
      }
      Y = Math.max(0, $e - V);
    }
    this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((Ti = e.inverter) == null ? void 0 : Ti.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", V < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(V * 1e3)} ${this._language === "en" ? "W" : "Вт"}` : this._nodes.inverterSelfConsumptionVal.innerText = `${V.toFixed(3)} ${t}`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${Y.toFixed(3)} ${t}`;
    const Fe = this._getEntityState((Mi = e.load) == null ? void 0 : Mi.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = Fe ? `${Fe.val.toFixed(2)} kWh` : "12,40 kWh";
    let Be = 0;
    (((Li = e.load) == null ? void 0 : Li.subloads) || []).forEach((a, L) => {
      const K = this.shadowRoot.getElementById(`subloadVal_${L}`), W = this._getEntityState(a.entity), j = this._formatPower(W, 2);
      Be += j.kw, K && (K.innerText = j.str);
    });
    const Se = ((Fi = e.battery) == null ? void 0 : Fi.parallel_batteries) || ((Ni = (Pi = e.battery) == null ? void 0 : Pi.modules) == null ? void 0 : Ni.length) || 2;
    let Ce = 0;
    for (let a = 0; a < Se; a++) {
      const L = ((Ai = (Vi = e.battery) == null ? void 0 : Vi.modules) == null ? void 0 : Ai[a]) || ((zi = (Ri = e.battery) == null ? void 0 : Ri.module_entities) == null ? void 0 : zi[a]) || {}, K = L.capacity_kwh !== void 0 ? parseFloat(L.capacity_kwh) : a === 0 ? 7.88 : a === 1 ? 5.12 : (((Di = e.battery) == null ? void 0 : Di.capacity_kwh) || 13) / Se;
      Ce += isNaN(K) ? 0 : K;
    }
    Ce <= 0 && (Ce = parseFloat((Wi = e.battery) == null ? void 0 : Wi.capacity_kwh) || 13);
    const et = this._getEntityState(((qi = e.battery) == null ? void 0 : qi.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), st = et && !isNaN(et.val) ? et.val : null;
    if (this._nodes.batCapacityVal) {
      const a = st !== null ? st : Ce;
      this._nodes.batCapacityVal.innerText = `${a.toFixed(2).replace(".", ",")} kWh`;
    }
    const _t = (Hi = e.battery) == null ? void 0 : Hi.charge_daily_entity;
    let Ke = this._getEntityState(_t);
    Ke || (Ke = this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge") || this._getEntityState("sensor.daily_battery_charge") || this._getEntityState("sensor.solarman_daily_battery_charge") || this._getEntityState("sensor.solarman_battery_charge_energy_day"));
    const _e = (Gi = e.battery) == null ? void 0 : Gi.discharge_daily_entity;
    let M = this._getEntityState(_e);
    M || (M = this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge") || this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge") || this._getEntityState("sensor.daily_battery_discharge") || this._getEntityState("sensor.solarman_daily_battery_discharge") || this._getEntityState("sensor.solarman_battery_discharge_energy_day")), this._nodes.batChargeDaily && (this._nodes.batChargeDaily.innerText = Ke ? `${Ke.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "4,30 kWh"), this._nodes.batDischargeDaily && (this._nodes.batDischargeDaily.innerText = M ? `${M.val.toFixed(2)} kWh` : this._hass ? "0.00 kWh" : "6,10 kWh");
    const F = [];
    for (let a = 1; a <= Se; a++) {
      const L = this.shadowRoot.getElementById(`batPackSoc_${a}`), K = this.shadowRoot.getElementById(`batPackVolt_${a}`), W = this.shadowRoot.getElementById(`batPackCurr_${a}`), j = this.shadowRoot.getElementById(`batPackPower_${a}`), Ue = this.shadowRoot.getElementById(`batPackTempVal_${a}`), X = this.shadowRoot.getElementById(`batPackStateTag_${a}`), Ie = this.shadowRoot.getElementById(`batPackKwh_${a}`), ye = this.shadowRoot.getElementById(`batPackBar1_${a}`), ve = this.shadowRoot.getElementById(`batPackBar2_${a}`), q = this.shadowRoot.getElementById(`batPackBar3_${a}`), ie = this.shadowRoot.getElementById(`batPackBar4_${a}`), Z = ((Oi = (ji = e.battery) == null ? void 0 : ji.modules) == null ? void 0 : Oi[a - 1]) || ((Ki = (Yi = e.battery) == null ? void 0 : Yi.module_entities) == null ? void 0 : Ki[a - 1]) || {}, ae = Z.soc_entity || Z.soc || `sensor.bms_rack${a}_soc`, dt = Z.current_entity || `sensor.bms_rack${a}_current`, Re = Z.voltage_entity || Z.volt || `sensor.bms_rack${a}_voltage`, ut = Z.power_entity || `sensor.bms_rack${a}_power`, bt = Z.temperature_entity || Z.temp || `sensor.bms_rack${a}_temperature`, ct = this._getEntityState(ae), pt = this._getEntityState(dt), Je = this._getEntityState(Re), tt = this._getEntityState(ut), it = this._getEntityState(bt), ke = ct ? ct.val : a === 1 ? 82 : a === 2 ? 85 : 75, Te = Je ? Je.val : a === 1 ? 54.1 : a === 2 ? 54 : 52.4, Me = pt ? pt.val : a === 1 ? 18.4 : a === 2 ? 25.2 : 8.2, U = it ? it.val : a === 1 ? 38.2 : a === 2 ? 21 : 21.5;
      let ze = 0;
      tt ? ze = Math.abs(this._formatPower(tt).kw) : ze = Te * Math.abs(Me) / 1e3, L && (L.innerText = `${ke.toFixed(0)}%`), K && (K.innerText = `${Te.toFixed(1)} V`), W && (W.innerText = `${Math.abs(Me).toFixed(1)} A`), j && (j.innerText = `${ze.toFixed(2)} ${t}`), Ue && (Ue.innerText = `${U.toFixed(1)}`);
      let Q = !1;
      ce ? Q = !1 : he ? Q = !0 : pt ? Q = (((Ui = e.battery) == null ? void 0 : Ui.power_sign) || "deye") === "deye" ? Me < 0 : Me > 0 : Q = Me < 0;
      const re = this.shadowRoot.getElementById(`batBranchBadge_${a}`);
      re && (ze < 0.02 ? (re.className = "es-bat-branch-badge es-mono idle", re.innerHTML = `<span>0.00 ${t}</span>`) : Q ? (re.className = "es-bat-branch-badge es-mono charge", re.innerHTML = `<span>${ze.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↓</span>`) : (re.className = "es-bat-branch-badge es-mono discharge", re.innerHTML = `<span>${ze.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↑</span>`));
      const oe = this.shadowRoot.getElementById(`batPackCard_${a}`), yt = oe == null ? void 0 : oe.querySelector(".es-battery-gauge"), ht = oe == null ? void 0 : oe.querySelector(".es-battery-gauge-nipple");
      oe && (oe.style.borderColor = Q ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), yt && (yt.style.borderColor = Q ? "#10b981" : "#ef4444"), ht && (ht.style.background = Q ? "#10b981" : "#ef4444"), X && (Q ? (X.className = "es-bat-state-tag charge", X.innerText = this._t("bat_charge"), X.style.color = "#34d399", X.style.background = "rgba(16, 185, 129, 0.18)", X.style.borderColor = "rgba(16, 185, 129, 0.4)") : (X.className = "es-bat-state-tag discharge", X.innerText = this._t("bat_discharge"), X.style.color = "#f87171", X.style.background = "rgba(239, 68, 68, 0.18)", X.style.borderColor = "rgba(239, 68, 68, 0.4)")), j && (j.style.color = Q ? "#34d399" : "#f87171"), W && (W.style.color = Q ? "#38bdf8" : "#f87171");
      const gt = ((Z.capacity_kwh !== void 0 ? parseFloat(Z.capacity_kwh) : (((Ji = e.battery) == null ? void 0 : Ji.capacity_kwh) || 10) / Se) * (ke / 100)).toFixed(2);
      Ie && (Ie.innerText = `${gt} kWh`);
      const ot = Q ? "active-green" : "active-red";
      ye && ve && q && ie && (ye.className = `es-bat-bar ${ke >= 10 ? ot : ""}`, ve.className = `es-bat-bar ${ke >= 35 ? ot : ""}`, q.className = `es-bat-bar ${ke >= 65 ? ot : ""}`, ie.className = `es-bat-bar ${ke >= 85 ? ot : ""}`), F.push({ kwNum: ze, isChg: Q });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      d ? n : 0,
      u,
      k,
      f,
      Y,
      we,
      he,
      ce,
      de,
      F,
      pe,
      Be,
      S
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
    var e, t, p, l, h, c, f, _, E;
    try {
      const C = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!C) return;
      const x = C.getBoundingClientRect();
      if (x.width === 0 || x.height === 0) return;
      const B = this._config || le, m = this._scale || 1, g = (d, u = 0.5, k = 0.5) => {
        if (!d) return null;
        const y = d.getBoundingClientRect();
        return {
          x: Math.round((y.left - x.left + y.width * u) / m),
          y: Math.round((y.top - x.top + y.height * k) / m)
        };
      }, r = (d, u, k) => {
        const y = this.shadowRoot.getElementById(d), $ = this.shadowRoot.getElementById(u);
        y && y.setAttribute("d", k || ""), $ && $.setAttribute("d", k || "");
      }, s = this.shadowRoot.getElementById("gridNode"), i = this.shadowRoot.getElementById("inverterNode"), o = this.shadowRoot.getElementById("essentialNode"), b = this.shadowRoot.getElementById("totalPvPowerBadge"), v = this.shadowRoot.getElementById("masterBatteryHub"), T = this.shadowRoot.getElementById("carNode");
      if (s && i) {
        const d = s.getBoundingClientRect(), u = i.getBoundingClientRect();
        if (d.bottom < u.top + 30) {
          const y = g(s, 0.7, 1), $ = g(i, 0.2, 0);
          if (y && $) {
            const R = Math.round((y.y + $.y) / 2), H = `M ${y.x} ${y.y} C ${y.x} ${R}, ${$.x} ${R}, ${$.x} ${$.y}`;
            r("pathGridInvBase", "pathGridInvFlow", H);
          }
        } else {
          const y = Math.round((u.top - x.top + u.height * 0.55) / m), $ = Math.round((d.right - x.left) / m), R = Math.round((u.left - x.left) / m), H = Math.round((d.top - x.top + d.height * 0.5) / m);
          let se = "";
          if (Math.abs(H - y) <= 8)
            se = `M ${$} ${y} L ${R} ${y}`;
          else {
            const te = Math.round($ + 24);
            se = `M ${$} ${H} C ${te} ${H}, ${te} ${y}, ${R} ${y}`;
          }
          r("pathGridInvBase", "pathGridInvFlow", se);
        }
      }
      if (i && o) {
        const d = o.getBoundingClientRect(), u = i.getBoundingClientRect();
        if (d.bottom < u.top + 30) {
          const y = g(i, 0.8, 0), $ = g(o, 0.3, 1);
          if (y && $) {
            const R = Math.round((y.y + $.y) / 2), H = `M ${y.x} ${y.y} C ${y.x} ${R}, ${$.x} ${R}, ${$.x} ${$.y}`;
            r("pathInvLoadBase", "pathInvLoadFlow", H);
          }
        } else {
          const y = Math.round((u.top - x.top + u.height * 0.55) / m), $ = Math.round((u.right - x.left) / m), R = Math.round((d.left - x.left) / m), H = Math.round((d.top - x.top + d.height * 0.5) / m);
          let se = "";
          if (Math.abs(H - y) <= 8)
            se = `M ${$} ${y} L ${R} ${y}`;
          else {
            const te = Math.round(R - 24);
            se = `M ${$} ${y} C ${te} ${y}, ${te} ${H}, ${R} ${H}`;
          }
          r("pathInvLoadBase", "pathInvLoadFlow", se);
        }
      }
      if (b && i) {
        const d = g(b, 0.5, 1), u = g(i, 0.5, 0);
        if (d && u) {
          const k = `M ${d.x} ${d.y} L ${u.x} ${u.y}`;
          r("pathSolarInvBase", "pathSolarInvFlow", k);
        }
      }
      if (i && v) {
        const d = g(i, 0.5, 1), u = g(v, 0.5, 0);
        if (d && u) {
          const k = `M ${d.x} ${d.y} L ${u.x} ${u.y}`;
          r("pathInvBatBase", "pathInvBatFlow", k);
        }
      }
      const S = this.shadowRoot.getElementById("nonEssentialNode"), N = S && !S.classList.contains("hidden") && S.offsetHeight > 0, n = T && !T.classList.contains("hidden") && T.offsetHeight > 0;
      if (s && N) {
        const d = g(s, 0.5, 1), u = g(S, 0.5, 0);
        if (d && u) {
          const k = `M ${d.x} ${d.y} L ${u.x} ${u.y}`;
          r("pathGridNonEssBase", "pathGridNonEssFlow", k);
        }
      } else
        r("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (n) {
        const d = N ? S : s;
        if (d) {
          const u = g(d, 0.5, 1), k = g(T, 0.5, 0);
          if (u && k) {
            const y = `M ${u.x} ${u.y} L ${k.x} ${k.y}`;
            r("pathNonEssCarBase", "pathNonEssCarFlow", y);
          }
        } else
          r("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        r("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const I = this.shadowRoot.getElementById("subloadsBusContainer");
      if (o && I) {
        const d = g(o, 0.5, 1), u = g(I, 0.5, 0);
        if (d && u) {
          const k = `M ${d.x} ${d.y} L ${u.x} ${u.y}`;
          r("pathLoadSubloadsBase", "pathLoadSubloadsFlow", k);
        }
      } else
        r("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const A = this.shadowRoot.getElementById("auxNode");
      if (i && A && !A.classList.contains("hidden") && A.offsetHeight > 0) {
        const d = g(A, 0.35, 1), u = g(i, 0.9, 0);
        if (d && u) {
          const k = Math.round((d.y + u.y) / 2), y = `M ${d.x} ${d.y} C ${d.x} ${k}, ${u.x} ${k}, ${u.x} ${u.y}`;
          r("pathInvAuxBase", "pathInvAuxFlow", y);
        }
      } else
        r("pathInvAuxBase", "pathInvAuxFlow", "");
      r("pathBatStemBase", "pathBatStemFlow", "");
      const J = this.shadowRoot.getElementById("windStationContainer"), D = ((t = B.wind) == null ? void 0 : t.show) !== !1 || ((p = B.aux) == null ? void 0 : p.type) === "wind" ? ((l = B.wind) == null ? void 0 : l.turbine_count) || ((c = (h = B.wind) == null ? void 0 : h.turbines) == null ? void 0 : c.length) || 2 : 0;
      for (let d = 1; d <= 4; d++)
        if (d <= D && J && !J.classList.contains("hidden")) {
          const u = this.shadowRoot.getElementById(`turbineCard_${d}`);
          if (u && v) {
            const k = g(u, 0.5, 1), y = D === 1 ? 0.5 : 0.28 + (d - 1) / (D - 1) * 0.44, $ = g(v, y, 0);
            if (k && $) {
              const R = `M ${k.x} ${k.y} L ${$.x} ${$.y}`;
              r(`pathTurbine${d}Base`, `pathTurbine${d}Flow`, R);
            }
          } else
            r(`pathTurbine${d}Base`, `pathTurbine${d}Flow`, "");
        } else
          r(`pathTurbine${d}Base`, `pathTurbine${d}Flow`, "");
      const ee = ((f = B.battery) == null ? void 0 : f.parallel_batteries) || ((E = (_ = B.battery) == null ? void 0 : _.modules) == null ? void 0 : E.length) || 2;
      for (let d = 1; d <= 8; d++) {
        const u = this.shadowRoot.getElementById(`batPackCard_${d}`), k = this.shadowRoot.getElementById(`batBranchBadge_${d}`);
        if (d <= ee && v && u) {
          const y = g(v, 0.5, 1), $ = g(u, 0.5, 0);
          if (y && $) {
            const R = Math.round(y.y + ($.y - y.y) * 0.45);
            let H = "";
            Math.abs(y.x - $.x) <= 4 ? H = `M ${y.x} ${y.y} L ${$.x} ${$.y}` : H = `M ${y.x} ${y.y} C ${y.x} ${R}, ${$.x} ${R}, ${$.x} ${$.y}`, r(`pathBat${d}Base`, `pathBat${d}Flow`, H), k && (k.style.left = `${$.x}px`, k.style.top = `${R}px`, k.style.display = "flex");
          } else
            r(`pathBat${d}Base`, `pathBat${d}Flow`, ""), k && (k.style.display = "none");
        } else
          r(`pathBat${d}Base`, `pathBat${d}Flow`, ""), k && (k.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, t, p, l, h;
    try {
      const c = this._config || le, f = this._scale || 1, _ = this.shadowRoot.getElementById("solarBusSvg"), E = ((e = c.solar) == null ? void 0 : e.pv_count) || ((p = (t = c.solar) == null ? void 0 : t.strings) == null ? void 0 : p.length) || 3;
      if (_ && E > 0) {
        const B = _.getBoundingClientRect(), m = this.shadowRoot.getElementById("pvPanel_1"), g = this.shadowRoot.getElementById(`pvPanel_${E}`), r = this.shadowRoot.getElementById("solarBusBase"), s = this.shadowRoot.getElementById("solarFlowCollector"), i = this.shadowRoot.getElementById("solarBusStemBase"), o = this.shadowRoot.getElementById("solarBusStemFlow"), b = this.shadowRoot.getElementById("solarBusFeeders");
        if (m && g && B.width > 0) {
          const v = m.getBoundingClientRect(), T = g.getBoundingClientRect(), S = Math.round((v.left - B.left + v.width / 2) / f), N = Math.round((T.left - B.left + T.width / 2) / f), n = 13, I = Math.round((S + N) / 2);
          if (r && (r.setAttribute("x1", S), r.setAttribute("y1", n), r.setAttribute("x2", N), r.setAttribute("y2", n)), s && (s.setAttribute("x1", S), s.setAttribute("y1", n), s.setAttribute("x2", N), s.setAttribute("y2", n)), i && (i.setAttribute("x1", I), i.setAttribute("y1", n), i.setAttribute("x2", I), i.setAttribute("y2", 26)), o && (o.setAttribute("x1", I), o.setAttribute("y1", n), o.setAttribute("x2", I), o.setAttribute("y2", 26)), b) {
            let A = "";
            for (let J = 1; J <= E; J++) {
              const G = this.shadowRoot.getElementById(`pvPanel_${J}`);
              if (G) {
                const D = G.getBoundingClientRect(), ee = Math.round((D.left - B.left + D.width / 2) / f);
                A += `
                  <line x1="${ee}" y1="0" x2="${ee}" y2="${n}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${ee}" y1="0" x2="${ee}" y2="${n}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            b.innerHTML = A;
          }
        }
      }
      const C = this.shadowRoot.getElementById("subloadsBusSvg"), x = ((h = (l = c.load) == null ? void 0 : l.subloads) == null ? void 0 : h.length) || 3;
      if (C && x > 0) {
        const B = C.getBoundingClientRect(), m = this.shadowRoot.getElementById("subloadCard_0"), g = this.shadowRoot.getElementById(`subloadCard_${x - 1}`), r = this.shadowRoot.getElementById("essentialNode"), s = this.shadowRoot.getElementById("subloadsBusBase"), i = this.shadowRoot.getElementById("subloadsFlowCollector"), o = this.shadowRoot.getElementById("subloadsBusStemBase"), b = this.shadowRoot.getElementById("subloadsBusStemFlow"), v = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (m && g && B.width > 0) {
          const T = m.getBoundingClientRect(), S = g.getBoundingClientRect(), N = Math.round((T.left - B.left + T.width / 2) / f), n = Math.round((S.left - B.left + S.width / 2) / f), I = 13;
          let A = Math.round((N + n) / 2);
          if (r) {
            const D = r.getBoundingClientRect();
            A = Math.round((D.left - B.left + D.width / 2) / f);
          }
          const J = Math.min(N, A), G = Math.max(n, A);
          if (s && (s.setAttribute("x1", J), s.setAttribute("y1", I), s.setAttribute("x2", G), s.setAttribute("y2", I)), i && (i.setAttribute("x1", J), i.setAttribute("y1", I), i.setAttribute("x2", G), i.setAttribute("y2", I)), o && (o.setAttribute("x1", A), o.setAttribute("y1", 0), o.setAttribute("x2", A), o.setAttribute("y2", I)), b && (b.setAttribute("x1", A), b.setAttribute("y1", 0), b.setAttribute("x2", A), b.setAttribute("y2", I)), v) {
            let D = "";
            for (let ee = 0; ee < x; ee++) {
              const d = this.shadowRoot.getElementById(`subloadCard_${ee}`);
              if (d) {
                const u = d.getBoundingClientRect(), k = Math.round((u.left - B.left + u.width / 2) / f);
                D += `
                  <line x1="${k}" y1="${I}" x2="${k}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${k}" y1="${I}" x2="${k}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            v.innerHTML = D;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, t, p, l, h) {
    if (!e) return;
    if (!h) {
      e.setAttribute("class", `flow-pulse ${t} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const c = p ? "flow-reverse" : "flow-forward", f = p ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${t} ${c}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", l), e.style.animation = `${f} ${l} linear infinite`;
  }
  _updateFlowAnimations(e, t, p, l, h, c, f, _, E, C = [], x = 0, B = 0, m = 0) {
    var ce, we, Xe, Le, qe, He, Ge, je, Oe, Ze, Qe, Ye, $e;
    const g = this._config || le, r = ((ce = g.animations) == null ? void 0 : ce.enabled) !== !1, s = ((we = g.animations) == null ? void 0 : we.speed) || 1.2, i = (w, V = 10) => {
      const z = Math.abs(w);
      if (z < 0.05) return "2.5s";
      const ge = Math.min(1, z / V);
      return `${Math.max(0.4, (2.6 - ge * 1.9) * (s / 1.2)).toFixed(2)}s`;
    }, o = this.shadowRoot.getElementById("pathGridInvFlow"), b = Math.abs(e), v = (((Xe = g.grid) == null ? void 0 : Xe.min_power_threshold) !== void 0 ? g.grid.min_power_threshold : 50) / 1e3, T = ((Le = g.grid) == null ? void 0 : Le.selling_enabled) === !0, S = r && b >= v && (p || t && T);
    this._applyFlowAnimation(o, "flow-grid", t, i(e, 10), S);
    const N = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(N, "flow-solar", !1, i(l, 12), r && l >= 0.05);
    const n = this.shadowRoot.getElementById("pathInvLoadFlow"), I = Math.abs(h);
    this._applyFlowAnimation(n, "flow-load", !1, i(h, 10), r && I >= 0.05);
    const A = this.shadowRoot.getElementById("pathInvBatFlow"), J = Math.abs(c), G = r && J >= 0.02 && (f || _), D = f ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(A, D, _, i(c, 8), G);
    const ee = this.shadowRoot.getElementById("pathGridNonEssFlow"), d = Math.abs(x);
    this._applyFlowAnimation(ee, "flow-grid", !1, i(x, 5), r && d >= 0.05);
    const u = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), k = Math.abs(E);
    this._applyFlowAnimation(u, "flow-car", !1, i(E, 7), r && k >= 0.05);
    const y = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), $ = Math.abs(B || h);
    this._applyFlowAnimation(y, "flow-load", !1, i($, 8), r && $ >= 0.05);
    const R = this.shadowRoot.getElementById("pathInvAuxFlow"), H = Math.abs(m);
    this._applyFlowAnimation(R, "flow-aux", !0, i(m, 5), r && H >= 0.05);
    const se = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(se, D, _, i(c, 8), G);
    const te = this.shadowRoot.getElementById("solarFlowCollector"), pe = this.shadowRoot.getElementById("solarBusStemFlow");
    if (te)
      if (!r || l < 0.05)
        te.style.opacity = "0.2", te.style.animation = "none", pe && (pe.style.opacity = "0.2", pe.style.animation = "none");
      else {
        const w = i(l, 12);
        te.style.opacity = "1", te.setAttribute("class", "flow-line"), te.style.animation = `esDashflow ${w} linear infinite`, pe && (pe.style.opacity = "1", pe.setAttribute("class", "flow-line"), pe.style.animation = `esDashflow ${w} linear infinite`);
      }
    const ue = this.shadowRoot.getElementById("subloadsFlowCollector"), fe = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (ue)
      if (!r || $ < 0.05)
        ue.style.opacity = "0.2", ue.style.animation = "none", fe && (fe.style.opacity = "0.2", fe.style.animation = "none");
      else {
        const w = i($, 8);
        ue.style.opacity = "1", ue.setAttribute("class", "flow-line"), ue.style.animation = `esDashflow ${w} linear infinite`, fe && (fe.style.opacity = "1", fe.setAttribute("class", "flow-line"), fe.style.animation = `esDashflow ${w} linear infinite`);
      }
    const de = this.shadowRoot.getElementById("batteryFlowCollector"), ne = this.shadowRoot.getElementById("batteryBusStemFlow"), De = this.shadowRoot.getElementById("batteryBusFeeders"), me = _ ? "#f87171" : "#34d399", be = _ ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (de)
      if (de.style.stroke = me, de.style.filter = be, ne && (ne.style.stroke = me, ne.style.filter = be), !r || !G)
        de.style.opacity = "0.2", de.style.animation = "none", ne && (ne.style.opacity = "0.2", ne.style.animation = "none");
      else {
        const w = i(c, 8), V = _ ? "esDashflowRev" : "esDashflow";
        de.style.opacity = "1", de.setAttribute("class", _ ? "flow-line-reverse" : "flow-line"), de.style.animation = `${V} ${w} linear infinite`, ne && (ne.style.opacity = "1", ne.setAttribute("class", _ ? "flow-line-reverse" : "flow-line"), ne.style.animation = `${V} ${w} linear infinite`);
      }
    De && De.querySelectorAll("line").forEach((w) => {
      if (w.style.stroke = me, w.style.filter = be, !r || !G)
        w.style.opacity = "0.2", w.style.animation = "none";
      else {
        const V = i(c, 8), z = _ ? "esDashflowRev" : "esDashflow";
        w.style.opacity = "1", w.setAttribute("class", _ ? "flow-line-reverse" : "flow-line"), w.style.animation = `${z} ${V} linear infinite`;
      }
    });
    for (let w = 1; w <= 8; w++) {
      const V = this.shadowRoot.getElementById(`pathBat${w}Flow`);
      if (!V) continue;
      const z = C[w - 1], ge = z ? z.kwNum : 0, Y = r && (ge >= 0.02 || G), Fe = _;
      this._applyFlowAnimation(V, D, Fe, i(ge || c, 8), Y);
    }
    for (let w = 0; w < 6; w++) {
      const V = this.shadowRoot.getElementById(`pathSubload${w}Flow`);
      if (!V) continue;
      const z = (He = (qe = g.load) == null ? void 0 : qe.subloads) == null ? void 0 : He[w], ge = z ? this._getEntityState(z.entity) : null, Y = ge ? this._formatPower(ge, 2).kw : w === 0 ? 2 : w === 1 ? 3 : 4;
      this._applyFlowAnimation(V, "flow-load", !1, i(Y, 8), r && Y >= 0.05);
    }
    const Ee = ((Ge = g.wind) == null ? void 0 : Ge.show) !== !1 || ((je = g.aux) == null ? void 0 : je.type) === "wind", We = Ee ? ((Oe = g.wind) == null ? void 0 : Oe.turbine_count) || ((Qe = (Ze = g.wind) == null ? void 0 : Ze.turbines) == null ? void 0 : Qe.length) || 2 : 0, he = ((Ye = g.wind) == null ? void 0 : Ye.turbines) || [];
    for (let w = 1; w <= 4; w++) {
      const V = this.shadowRoot.getElementById(`pathTurbine${w}Flow`);
      if (V)
        if (w <= We && Ee) {
          const z = he[w - 1] || {}, ge = this._hass ? 0 : w === 1 ? 1.45 : 0.85, Y = this._getEntityState(z.power_entity || `sensor.wind_turbine_${w}_power`);
          let Be = this._formatPower(Y, ge).kw * 1e3;
          Y && Y.unit === "W" && (Be = Y.val);
          const Se = z.animation_threshold ?? (($e = g.wind) == null ? void 0 : $e.animation_threshold) ?? 50, Ce = Be >= Se;
          this._applyFlowAnimation(V, "flow-wind", !1, i(Be / 1e3, 3), r && Ce);
        } else
          this._applyFlowAnimation(V, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", eo);
window.customCards = window.customCards || [];
window.customCards.some((vt) => vt.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  eo as EnergyStationCard,
  Xi as I18N
};
