const ue = {
  title: "Energy Station",
  card_style: "full",
  // 'full' | 'compact'
  theme_mode: "dark",
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
    import_daily_entity: "sensor.deye_12k_inverter_daily_energy_bought",
    export_daily_entity: "sensor.deye_12k_inverter_daily_energy_sold",
    selling_enabled: !1,
    // чи продає станція в мережу (Зелений тариф / Net billing). Якщо false — анімація продажу ЗАВЖДИ вимкнена!
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
    essential_power_entity: "sensor.deye_12k_inverter_essential_load_power",
    daily_house_entity: "sensor.deye_12k_inverter_daily_load_energy",
    subloads: [
      { id: "boiler", name: "Бойлер", entity: "sensor.boiler_power", icon: "boiler" },
      { id: "heat_pump", name: "Тепловий насос", entity: "sensor.heat_pump_power", icon: "heat_pump" },
      { id: "other", name: "Інше", entity: "sensor.other_loads_power", icon: "other" }
    ],
    color: "#06b6d4"
  }
}, le = {
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
  </svg>`
};
class Ni extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._currentTab = "general";
  }
  set hass(e) {
    this._hass = e;
  }
  setConfig(e) {
    this._config = JSON.parse(JSON.stringify(e || ue)), this.render();
  }
  connectedCallback() {
    this.render();
  }
  _valueChanged(e, s) {
    if (!this._config) return;
    this._config = JSON.parse(JSON.stringify(this._config));
    const h = e.split(".");
    let c = this._config;
    for (let y = 0; y < h.length - 1; y++)
      c[h[y]] || (c[h[y]] = {}), c = c[h[y]];
    c[h[h.length - 1]] = s;
    const _ = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(_);
  }
  _switchTab(e) {
    this._currentTab = e, this.render();
  }
  _applyPreset(e) {
    this._config = JSON.parse(JSON.stringify(this._config || ue)), e === "deye_esphome" ? (this._config.inverter.model_name = "DEYE SUN-12K", this._config.solar.pv_count = 3, this._config.solar.total_power_entity = "", this._config.solar.daily_yield_entity = "sensor.deye_12k_inverter_daily_solar_energy", this._config.solar.strings = [
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
    ], this._config.grid.power_entity = "sensor.deye_12k_inverter_total_grid_power", this._config.grid.import_daily_entity = "sensor.deye_12k_inverter_daily_energy_bought", this._config.grid.export_daily_entity = "sensor.deye_12k_inverter_daily_energy_sold", this._config.load.essential_power_entity = "sensor.deye_12k_inverter_essential_load_power", this._config.load.daily_house_entity = "sensor.deye_12k_inverter_daily_load_energy") : e === "deye_solarman" && (this._config.inverter.model_name = "DEYE HYBRID", this._config.solar.pv_count = 2, this._config.solar.total_power_entity = "sensor.solarman_pv_total_power", this._config.solar.daily_yield_entity = "sensor.solarman_daily_production", this._config.solar.strings = [
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
    const s = new CustomEvent("config-changed", {
      detail: { config: JSON.parse(JSON.stringify(this._config)) },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(s), this.render();
  }
  render() {
    var s, h, c, _, y, x, m, B, I, b, E, l, r, o, i, t, d, p, M, F, L, N, R, z, oe, G, P, D, a, u, f, g, v, T, W, se, ge, xe, de, ne, he, ye, V, ce, fe, Ve, Ie, qe, Ge, Le, ze, De, Ye, Ke, We, $e, ve, be, Y, Te, He, Be, w, H, O, X, Z, Fe, Se;
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
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((s = e.animations) == null ? void 0 : s.enabled) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((h = e.animations) == null ? void 0 : h.speed) || 1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((c = e.animations) == null ? void 0 : c.speed) || 1.2}s</span>
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
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y = e.solar) == null ? void 0 : y.pv_count) || 3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((x = e.solar) == null ? void 0 : x.total_power_entity) || ""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((m = e.solar) == null ? void 0 : m.daily_yield_entity) || ""}">
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
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((I = e.solar) == null ? void 0 : I.pv_count) || 3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((b = e.solar) == null ? void 0 : b.pv_count) || 3 }).map((Q, k) => {
      var Ae, Ne;
      const S = k + 1, C = ((Ne = (Ae = e.solar) == null ? void 0 : Ae.strings) == null ? void 0 : Ne[k]) || {}, ke = `sensor.deye_12k_inverter_pv${S}_voltage`, Pe = `sensor.deye_12k_inverter_pv${S}_current`, Me = `sensor.deye_12k_inverter_pv${S}_power`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${S} (Стрінг ${S})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${k}" value="${C.name || `PV ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${S} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${k}" value="${C.voltage_entity !== void 0 ? C.voltage_entity : ke}" placeholder="${ke}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${S} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${k}" value="${C.current_entity !== void 0 ? C.current_entity : Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${S} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${k}" value="${C.power_entity !== void 0 ? C.power_entity : Me}" placeholder="${Me} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((E = e.inverter) == null ? void 0 : E.model_name) || "DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((l = e.inverter) == null ? void 0 : l.power_entity) || ""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((r = e.inverter) == null ? void 0 : r.show_self_consumption) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #f97316;">
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
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((i = e.inverter) == null ? void 0 : i.standby_power) !== void 0 ? e.inverter.standby_power : 100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((t = e.inverter) == null ? void 0 : t.standby_power) !== void 0 ? e.inverter.standby_power : 100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((d = e.inverter) == null ? void 0 : d.ac_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((p = e.inverter) == null ? void 0 : p.dc_temperature_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((M = e.inverter) == null ? void 0 : M.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((F = e.inverter) == null ? void 0 : F.current_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((L = e.inverter) == null ? void 0 : L.frequency_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((N = e.aux) == null ? void 0 : N.type) === "microinverter" ? "selected" : ""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((R = e.aux) == null ? void 0 : R.type) === "generator" ? "selected" : ""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((z = e.aux) == null ? void 0 : z.type) === "wind" ? "selected" : ""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((oe = e.aux) == null ? void 0 : oe.type) === "smart_load" ? "selected" : ""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((G = e.aux) == null ? void 0 : G.type) === "none" ? "selected" : ""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((P = e.aux) == null ? void 0 : P.type) === "microinverter" && (!((D = e.aux) != null && D.title) || ((a = e.aux) == null ? void 0 : a.title) === "Вітрогенератор") ? "Мікроінвертор" : ((u = e.aux) == null ? void 0 : u.title) || (((f = e.aux) == null ? void 0 : f.type) === "generator" ? "Генератор" : ((g = e.aux) == null ? void 0 : g.type) === "smart_load" ? "Smart Load" : "Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((v = e.aux) == null ? void 0 : v.power_entity) || ""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((T = e.wind) == null ? void 0 : T.turbine_count) || 2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((W = e.wind) == null ? void 0 : W.turbine_count) || 2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((se = e.wind) == null ? void 0 : se.animation_threshold) || ((ge = e.aux) == null ? void 0 : ge.wind_animation_threshold) || 50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((xe = e.wind) == null ? void 0 : xe.animation_threshold) || ((de = e.aux) == null ? void 0 : de.wind_animation_threshold) || 50}W</span>
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
            <input type="text" id="windMonthlyEnergy" value="${((he = e.wind) == null ? void 0 : he.monthly_energy_entity) || ""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({ length: ((ye = e.wind) == null ? void 0 : ye.turbine_count) || 2 }).map((Q, k) => {
      var C, ke;
      const S = ((ke = (C = e.wind) == null ? void 0 : C.turbines) == null ? void 0 : ke[k]) || {};
      return `
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${k}" value="${S.name || `Вітряк ${k + 1}`}" placeholder="Назва (напр. Вітряк ${k + 1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${k}" value="${S.power_entity || `sensor.wind_turbine_${k + 1}_power`}" placeholder="sensor.wind_turbine_${k + 1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${k}" value="${S.speed_entity || S.rpm_entity || ""}" placeholder="sensor.wind_turbine_${k + 1}_speed">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${k}" value="${S.daily_energy_entity || ""}" placeholder="sensor.wind_turbine_${k + 1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${k}" value="${S.monthly_energy_entity || ""}" placeholder="sensor.wind_turbine_${k + 1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((V = e.battery) == null ? void 0 : V.soc_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((ce = e.battery) == null ? void 0 : ce.power_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((fe = e.battery) == null ? void 0 : fe.power_sign) !== "standard" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((Ve = e.battery) == null ? void 0 : Ve.power_sign) === "standard" ? "selected" : ""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Ie = e.battery) == null ? void 0 : Ie.voltage_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((qe = e.battery) == null ? void 0 : qe.current_entity) || ""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Ge = e.battery) == null ? void 0 : Ge.capacity_entity) || ""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((Le = e.battery) == null ? void 0 : Le.charge_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ze = e.battery) == null ? void 0 : ze.discharge_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((De = e.battery) == null ? void 0 : De.parallel_batteries) || 2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ye = e.battery) == null ? void 0 : Ye.parallel_batteries) || 2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Ke = e.battery) == null ? void 0 : Ke.parallel_batteries) || 2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({ length: ((We = e.battery) == null ? void 0 : We.parallel_batteries) || 2 }).map((Q, k) => {
      var Ze, Qe, et, tt;
      const S = k + 1, C = ((Qe = (Ze = e.battery) == null ? void 0 : Ze.modules) == null ? void 0 : Qe[k]) || ((tt = (et = e.battery) == null ? void 0 : et.module_entities) == null ? void 0 : tt[k]) || {}, ke = `sensor.bms_rack${S}_soc`, Pe = `sensor.bms_rack${S}_current`, Me = `sensor.bms_rack${S}_voltage`, Ae = `sensor.bms_rack${S}_power`, Ne = `sensor.bms_rack${S}_temperature`;
      return `
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${S} (Модуль ${S})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${k}" value="${C.name || `Батарея ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${S} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${k}" value="${C.soc_entity !== void 0 ? C.soc_entity : C.soc !== void 0 ? C.soc : ke}" placeholder="${ke}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${S} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${k}" value="${C.current_entity !== void 0 ? C.current_entity : Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${S} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${k}" value="${C.voltage_entity !== void 0 ? C.voltage_entity : C.volt !== void 0 ? C.volt : Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${S} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${k}" value="${C.temperature_entity !== void 0 ? C.temperature_entity : C.temp !== void 0 ? C.temp : Ne}" placeholder="${Ne}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${S} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${k}" value="${C.capacity_kwh !== void 0 ? C.capacity_kwh : S === 1 ? 7.88 : 5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${S} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${k}" value="${C.power_entity !== void 0 ? C.power_entity : Ae}" placeholder="${Ae} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${($e = e.grid) != null && $e.selling_enabled ? "checked" : ""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((ve = e.grid) == null ? void 0 : ve.power_entity) || ""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((be = e.grid) == null ? void 0 : be.power_sign) !== "inverted" ? "selected" : ""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((Y = e.grid) == null ? void 0 : Y.power_sign) === "inverted" ? "selected" : ""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Te = e.grid) == null ? void 0 : Te.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((He = e.grid) == null ? void 0 : He.import_daily_entity) || ""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Be = e.grid) == null ? void 0 : Be.export_daily_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((w = e.grid) == null ? void 0 : w.non_essential_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((H = e.grid) == null ? void 0 : H.car_power_entity) || ""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((O = e.load) == null ? void 0 : O.auto_calculate) !== !1 ? "checked" : ""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((X = e.load) == null ? void 0 : X.essential_power_entity) || ""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((Z = e.load) == null ? void 0 : Z.daily_house_entity) || ""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((Fe = e.load) == null ? void 0 : Fe.subloads) || []).length === 0 ? `
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          ` : ""}

          ${(((Se = e.load) == null ? void 0 : Se.subloads) || []).map((Q, k) => `
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${k}" value="${Q.name || ""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${k}" style="width: 140px;">
                  <option value="boiler" ${Q.icon === "boiler" ? "selected" : ""}>Бойлер</option>
                  <option value="heat_pump" ${Q.icon === "heat_pump" ? "selected" : ""}>Тепловий насос</option>
                  <option value="air_conditioner" ${Q.icon === "air_conditioner" ? "selected" : ""}>Кондиціонер</option>
                  <option value="washing_machine" ${Q.icon === "washing_machine" ? "selected" : ""}>Пральна машина</option>
                  <option value="car" ${Q.icon === "car" ? "selected" : ""}>Авто / Зарядка</option>
                  <option value="house" ${Q.icon === "house" ? "selected" : ""}>Освітлення / Дім</option>
                  <option value="other" ${Q.icon === "other" ? "selected" : ""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${k}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${k}" value="${Q.entity || ""}" placeholder="sensor.subload_power (сенсор потужності)">
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
    var y, x, m, B, I, b, E, l, r;
    const e = this.shadowRoot;
    e.querySelectorAll(".tab-btn").forEach((o) => {
      o.addEventListener("click", (i) => {
        this._switchTab(i.target.dataset.tab);
      });
    }), (y = e.getElementById("btnPresetEsp")) == null || y.addEventListener("click", () => this._applyPreset("deye_esphome")), (x = e.getElementById("btnPresetSolarman")) == null || x.addEventListener("click", () => this._applyPreset("deye_solarman"));
    const s = (o, i) => {
      const t = e.getElementById(o);
      t && t.addEventListener("input", (d) => this._valueChanged(i, d.target.value));
    }, h = (o, i) => {
      const t = e.getElementById(o);
      t && t.addEventListener("change", (d) => this._valueChanged(i, d.target.checked));
    }, c = (o, i, t, d = "") => {
      const p = e.getElementById(o);
      p && p.addEventListener("input", (M) => {
        const F = parseFloat(M.target.value);
        if (t) {
          const L = e.getElementById(t);
          L && (L.innerText = `${F}${d}`);
        }
        this._valueChanged(i, F);
      });
    };
    s("title", "title"), h("animEnabled", "animations.enabled"), c("animSpeed", "animations.speed", "animSpeedVal", "s"), (m = e.getElementById("solarPvCount")) == null || m.addEventListener("input", (o) => {
      const i = parseInt(o.target.value);
      for (this._config.solar || (this._config.solar = {}), this._config.solar.pv_count = i, this._config.solar.strings || (this._config.solar.strings = []); this._config.solar.strings.length < i; ) {
        const t = this._config.solar.strings.length + 1;
        this._config.solar.strings.push({
          id: `pv${t}`,
          name: `PV ${t}`,
          voltage_entity: `sensor.deye_12k_inverter_pv${t}_voltage`,
          current_entity: `sensor.deye_12k_inverter_pv${t}_current`,
          power_entity: `sensor.deye_12k_inverter_pv${t}_power`
        });
      }
      this._valueChanged("solar.pv_count", i), this._valueChanged("solar.strings", this._config.solar.strings), this.render();
    }), e.querySelectorAll(".pv-str-name-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].name = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-volt-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].voltage_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-curr-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].current_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), e.querySelectorAll(".pv-str-power-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.solar.strings || (this._config.solar.strings = []), this._config.solar.strings[t] || (this._config.solar.strings[t] = {}), this._config.solar.strings[t].power_entity = i.target.value, this._valueChanged("solar.strings", this._config.solar.strings);
      });
    }), s("solarTotalPower", "solar.total_power_entity"), s("solarDailyYield", "solar.daily_yield_entity"), c("solarTargetDaily", "solar.target_daily_yield"), s("invModel", "inverter.model_name"), s("invPower", "inverter.power_entity"), h("invShowSelfConsumption", "inverter.show_self_consumption"), s("invSelfConsumptionEntity", "inverter.self_consumption_entity"), c("invStandbyPower", "inverter.standby_power", "invStandbyPowerVal", "W"), s("invTempAc", "inverter.ac_temperature_entity"), s("invTempDc", "inverter.dc_temperature_entity"), s("invVolt", "inverter.voltage_entity"), s("invCurrent", "inverter.current_entity"), s("invFreq", "inverter.frequency_entity"), (B = e.getElementById("auxType")) == null || B.addEventListener("change", (o) => {
      const i = o.target.value;
      this._config.aux || (this._config.aux = {}), this._config.aux.type = i;
      const d = {
        microinverter: "Мікроінвертор",
        generator: "Генератор",
        wind: "Вітрогенератор",
        smart_load: "Smart Load",
        none: "Вимкнено"
      }[i] || "Мікроінвертор";
      this._config.aux.title = d;
      const p = e.getElementById("auxTitle");
      p && (p.value = d), this._valueChanged("aux.type", i), this._valueChanged("aux.title", d);
    }), s("auxTitle", "aux.title"), s("auxPower", "aux.power_entity"), (I = e.getElementById("windTurbineCount")) == null || I.addEventListener("input", (o) => {
      const i = parseInt(o.target.value);
      for (this._config.wind || (this._config.wind = {}), this._config.wind.turbine_count = i, this._config.wind.turbines || (this._config.wind.turbines = []); this._config.wind.turbines.length < i; ) {
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
      this._valueChanged("wind.turbine_count", i), this._valueChanged("wind.turbines", this._config.wind.turbines), this.render();
    }), c("windThreshold", "wind.animation_threshold", "windThresholdVal", "W"), (b = e.getElementById("windThreshold")) == null || b.addEventListener("input", (o) => {
      this._valueChanged("aux.wind_animation_threshold", parseFloat(o.target.value));
    }), s("windDailyEnergy", "wind.daily_energy_entity"), s("windMonthlyEnergy", "wind.monthly_energy_entity"), e.querySelectorAll(".turbine-name-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].name = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-power-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].power_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-speed-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].speed_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-daily-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].daily_energy_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), e.querySelectorAll(".turbine-monthly-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.wind.turbines || (this._config.wind.turbines = []), this._config.wind.turbines[t] || (this._config.wind.turbines[t] = {}), this._config.wind.turbines[t].monthly_energy_entity = i.target.value, this._valueChanged("wind.turbines", this._config.wind.turbines);
      });
    }), s("batSoc", "battery.soc_entity"), s("batPower", "battery.power_entity"), s("batPowerSign", "battery.power_sign"), s("batVolt", "battery.voltage_entity"), s("batCurrent", "battery.current_entity"), s("batCapacity", "battery.capacity_entity"), s("batChargeDaily", "battery.charge_daily_entity"), s("batDischargeDaily", "battery.discharge_daily_entity"), (E = e.getElementById("batParallelCount")) == null || E.addEventListener("input", (o) => {
      const i = parseInt(o.target.value);
      for (this._config.battery || (this._config.battery = {}), this._config.battery.parallel_batteries = i, this._config.battery.modules || (this._config.battery.modules = []); this._config.battery.modules.length < i; ) {
        const t = this._config.battery.modules.length + 1;
        this._config.battery.modules.push({
          id: `bat${t}`,
          name: `Батарея ${t}`,
          soc_entity: `sensor.bms_rack${t}_soc`,
          current_entity: `sensor.bms_rack${t}_current`,
          voltage_entity: `sensor.bms_rack${t}_voltage`,
          power_entity: `sensor.bms_rack${t}_power`,
          temperature_entity: `sensor.bms_rack${t}_temperature`
        });
      }
      this._valueChanged("battery.parallel_batteries", i), this._valueChanged("battery.modules", this._config.battery.modules), this.render();
    }), e.querySelectorAll(".bat-mod-name-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].name = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-soc-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].soc_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-curr-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].current_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-volt-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].voltage_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-temp-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].temperature_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-power-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].power_entity = i.target.value, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), e.querySelectorAll(".bat-mod-cap-inp").forEach((o) => {
      o.addEventListener("input", (i) => {
        const t = parseInt(i.target.dataset.idx);
        this._config.battery.modules || (this._config.battery.modules = []), this._config.battery.modules[t] || (this._config.battery.modules[t] = {}), this._config.battery.modules[t].capacity_kwh = parseFloat(i.target.value) || 0, this._valueChanged("battery.modules", this._config.battery.modules);
      });
    }), h("gridSellingEnabled", "grid.selling_enabled"), s("gridPower", "grid.power_entity"), s("gridPowerSign", "grid.power_sign"), c("gridMinThreshold", "grid.min_power_threshold"), s("gridImportDaily", "grid.import_daily_entity"), s("gridExportDaily", "grid.export_daily_entity"), s("gridNonEssential", "grid.non_essential_power_entity"), s("gridCarPower", "grid.car_power_entity"), h("loadAutoCalculate", "load.auto_calculate"), s("loadEssential", "load.essential_power_entity"), s("loadDailyHouse", "load.daily_house_entity");
    const _ = () => {
      this._config.load || (this._config.load = {}), this._config.load.subloads || (this._config.load.subloads = []);
      const o = this._config.load.subloads.length + 1;
      this._config.load.subloads.push({
        id: `sub_${Date.now()}`,
        name: `Споживач ${o}`,
        icon: "other",
        entity: ""
      }), this._valueChanged("load.subloads", this._config.load.subloads), this.render();
    };
    (l = e.getElementById("btnAddSubload")) == null || l.addEventListener("click", _), (r = e.getElementById("btnAddSubloadBottom")) == null || r.addEventListener("click", _), e.querySelectorAll(".btn-del-subload").forEach((o) => {
      o.addEventListener("click", (i) => {
        var p;
        const t = i.currentTarget || i.target.closest(".btn-del-subload"), d = parseInt(t.dataset.idx);
        (p = this._config.load) != null && p.subloads && (this._config.load.subloads.splice(d, 1), this._valueChanged("load.subloads", this._config.load.subloads), this.render());
      });
    }), e.querySelectorAll(".subload-name").forEach((o) => {
      o.addEventListener("input", (i) => {
        var d, p;
        const t = parseInt(i.target.dataset.idx);
        (p = (d = this._config.load) == null ? void 0 : d.subloads) != null && p[t] && (this._config.load.subloads[t].name = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-icon").forEach((o) => {
      o.addEventListener("change", (i) => {
        var d, p;
        const t = parseInt(i.target.dataset.idx);
        (p = (d = this._config.load) == null ? void 0 : d.subloads) != null && p[t] && (this._config.load.subloads[t].icon = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    }), e.querySelectorAll(".subload-entity").forEach((o) => {
      o.addEventListener("input", (i) => {
        var d, p;
        const t = parseInt(i.target.dataset.idx);
        (p = (d = this._config.load) == null ? void 0 : d.subloads) != null && p[t] && (this._config.load.subloads[t].entity = i.target.value, this._valueChanged("load.subloads", this._config.load.subloads));
      });
    });
  }
}
customElements.get("energy-station-card-editor") || customElements.define("energy-station-card-editor", Ni);
class Ri extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._config = null, this._hass = null, this._initialized = !1, this._nodes = {}, this._resizeObserver = null;
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
    return JSON.parse(JSON.stringify(ue));
  }
  getCardSize() {
    return 6;
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    const s = JSON.parse(JSON.stringify(e)), h = JSON.parse(JSON.stringify(ue));
    this._config = this._deepMerge(h, s), this._renderCardSkeleton(), this._hass && this._updateValues();
  }
  set hass(e) {
    this._hass = e, this._initialized || this._renderCardSkeleton(), this._updateValues();
  }
  _deepMerge(e, s) {
    const h = Array.isArray(e) ? [...e] : Object.assign({}, e);
    if (!s || typeof s != "object") return h;
    for (const c of Object.keys(s)) {
      const _ = s[c], y = e ? e[c] : void 0;
      _ && typeof _ == "object" && !Array.isArray(_) ? h[c] = this._deepMerge(y || {}, _) : h[c] = _;
    }
    return h;
  }
  _getEntityState(e) {
    var _;
    if (!this._hass || !e || !this._hass.states[e]) return null;
    const s = this._hass.states[e], h = parseFloat(s.state), c = ((_ = s.attributes) == null ? void 0 : _.unit_of_measurement) || "";
    return {
      raw: s.state,
      val: isNaN(h) ? 0 : h,
      unit: c,
      attributes: s.attributes
    };
  }
  _formatPower(e, s = 0) {
    if (!e) return { num: s.toFixed(3), kw: s, str: `${s.toFixed(3)} кВт` };
    let h = e.val;
    return e.unit === "W" && (h = h / 1e3), {
      num: h.toFixed(3),
      kw: h,
      str: `${h.toFixed(3)} кВт`
    };
  }
  _fireMoreInfo(e) {
    if (!e) return;
    const s = new CustomEvent("hass-more-info", {
      detail: { entityId: e },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(s);
  }
  _renderCardSkeleton() {
    var s, h, c, _, y, x, m, B, I, b, E, l, r, o, i, t, d, p;
    const e = this._config || ue;
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
          --flow-speed: ${((s = e.animations) == null ? void 0 : s.speed) || 1.2}s;
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 22px 28px 24px 28px;
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
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
        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container">
        
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
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="es-status-dot" id="liveStatusDot"></div>
            <span style="font-size: 11px; color: #94a3b8;" id="liveStatusText">HA Live</span>
          </div>
        </div>

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${le.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((h = e.solar) == null ? void 0 : h.target_daily_yield) || 55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${le.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">Сумарно PV</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24;">
              12,000 кВт
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID, NON-ESSENTIAL & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; display: flex; flex-direction: column; gap: 3px; align-items: flex-end; margin-bottom: 2px;">
              <div>Імпорт <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div>Експорт <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8;">${le.grid_tower}</div>
              <div class="es-node-title">Мережа</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">← ЕКСПОРТ</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(c = e.grid) != null && c.show_non_essential && ((_ = e.grid) != null && _.non_essential_power_entity) ? "" : "hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${le.house_outline}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(y = e.grid) != null && y.show_car && ((x = e.grid) != null && x.car_power_entity) ? "" : "hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${le.car}</div>
              <div class="es-node-title" id="carTitle">${((m = e.grid) == null ? void 0 : m.car_title) || "Авто"}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">0.000 кВт</div>
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
                  <div class="es-inverter-icon-box">${le.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">Гібридний інвертор</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 кВт</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((B = e.inverter) == null ? void 0 : B.show_self_consumption) !== !1 ? "flex" : "none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">⚡ Власне:</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 Вт</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((I = e.aux) == null ? void 0 : I.type) === "none" || ((b = e.aux) == null ? void 0 : b.type) === "wind" ? "hidden" : ""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${le[(E = e.aux) == null ? void 0 : E.type] || le.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((l = e.aux) == null ? void 0 : l.type) === "microinverter" && (!((r = e.aux) != null && r.title) || ((o = e.aux) == null ? void 0 : o.title) === "Вітрогенератор") ? "Мікроінвертор" : ((i = e.aux) == null ? void 0 : i.title) || "Мікроінвертор"}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((t = e.aux) == null ? void 0 : t.subtitle) || "Джерело → GEN"}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((d = e.wind) == null ? void 0 : d.show) === !1 && ((p = e.aux) == null ? void 0 : p.type) !== "wind" ? "hidden" : ""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              Будинок <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${le.house}</div>
              <div class="es-node-title">Гарантоване</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">8,000 кВт</div>
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
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase;">Заряд</div>
              <div id="batChargeDaily" style="color: #34d399; font-weight: 700; font-size: 13px;">4,30 kWh</div>
              <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; margin-top: 2px;">Розряд</div>
              <div id="batDischargeDaily" style="color: #fbbf24; font-weight: 700; font-size: 13px;">6,10 kWh</div>
            </div>

            <!-- Center SoC & Power (Icon and 'ГОЛОВНА БАТАРЕЯ' removed as requested) -->
            <div class="es-bat-hub-soc-col" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 15px; font-weight: 700; color: #34d399; margin: 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="display: flex; align-items: center; justify-content: center; margin-top: 2px;">
                <span style="font-size: 20px; font-weight: 900; color: #f8fafc;">3,000 кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">Заряд ↓</span>
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

          <!-- Parallel Modules Rack -->
          <div class="es-battery-rack" id="batteryRackContainer"></div>

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
    `, this._cacheDomNodes(), this._renderDynamicPvPanels(), this._renderDynamicWindTurbines(), this._renderDynamicSubloads(), this._renderDynamicBatteryRack(), this._bindInteractions(), this._setupResizeObserver(), requestAnimationFrame(() => this._updateFlowPaths());
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
      batteryRackContainer: e.getElementById("batteryRackContainer")
    };
  }
  _renderDynamicWindTurbines() {
    var m, B, I, b, E, l, r, o;
    const e = this._config || ue, s = ((m = this._nodes) == null ? void 0 : m.windStationContainer) || this.shadowRoot.getElementById("windStationContainer");
    if (!s) return;
    if (s.innerHTML = "", !(((B = e.wind) == null ? void 0 : B.show) !== !1 || ((I = e.aux) == null ? void 0 : I.type) === "wind")) {
      s.classList.add("hidden");
      return;
    }
    s.classList.remove("hidden");
    const c = ((b = e.wind) == null ? void 0 : b.turbine_count) || ((l = (E = e.wind) == null ? void 0 : E.turbines) == null ? void 0 : l.length) || 2, _ = ((r = e.wind) == null ? void 0 : r.turbines) || [], y = document.createElement("div");
    y.className = "es-wind-summary-bar es-mono", y.id = "windStationSummaryBar", y.innerHTML = `
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `, s.appendChild(y);
    const x = document.createElement("div");
    x.className = "es-wind-pods-row", s.appendChild(x);
    for (let i = 0; i < c; i++) {
      const t = _[i] || {
        name: `Вітряк ${i + 1}`,
        power_entity: `sensor.wind_turbine_${i + 1}_power`,
        daily_energy_entity: "",
        monthly_energy_entity: "",
        animation_threshold: ((o = e.wind) == null ? void 0 : o.animation_threshold) || 50
      }, d = !!(t.daily_energy_entity || t.monthly_energy_entity), p = document.createElement("div");
      p.className = "es-turbine-card glow-wind clickable-node", p.id = `turbineCard_${i + 1}`, p.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${i + 1}">
              ${le.wind_turbine}
            </div>
            <span>${t.name || `Вітряк ${i + 1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${i + 1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${i + 1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${i + 1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${i + 1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${i + 1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${d ? "flex" : "none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${i + 1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${i + 1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `, p.addEventListener("click", () => {
        this._fireMoreInfo(t.power_entity);
      }), x.appendChild(p);
    }
  }
  _renderDynamicPvPanels() {
    var c, _, y, x, m;
    const e = this._config || ue, s = this._nodes.pvPanelsContainer;
    if (!s) return;
    s.innerHTML = "";
    const h = ((c = e.solar) == null ? void 0 : c.pv_count) || ((y = (_ = e.solar) == null ? void 0 : _.strings) == null ? void 0 : y.length) || 3;
    for (let B = 1; B <= h; B++) {
      const I = B < 10 ? `0${B}` : `${B}`, b = ((m = (x = e.solar) == null ? void 0 : x.strings) == null ? void 0 : m[B - 1]) || {}, E = b.name || `PV ${I}`, l = document.createElement("div");
      l.className = "es-pv-panel glow-solar clickable-node", l.dataset.pvIndex = B, l.id = `pvPanel_${B}`, l.innerHTML = `
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${le.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${E}</span>
        <span class="es-pv-val es-mono" id="pvVal_${B}">1,200 кВт</span>
      `, l.addEventListener("click", () => {
        var o;
        const r = b.power_entity || b.voltage_entity || b.current_entity || ((o = e.solar) == null ? void 0 : o.total_power_entity);
        this._fireMoreInfo(r);
      }), s.appendChild(l);
    }
  }
  _renderDynamicSubloads() {
    var c;
    const e = this._config || ue, s = this._nodes.subloadsContainer;
    if (!s) return;
    s.innerHTML = "", (((c = e.load) == null ? void 0 : c.subloads) || []).forEach((_, y) => {
      const x = document.createElement("div");
      x.className = "es-subload-card clickable-node", x.id = `subloadCard_${y}`, x.innerHTML = `
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${le[_.icon] || le.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${_.name}</span>
        <span class="es-mono" id="subloadVal_${y}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `, x.addEventListener("click", () => {
        this._fireMoreInfo(_.entity);
      }), s.appendChild(x);
    });
  }
  _renderDynamicBatteryRack() {
    var y, x, m, B, I, b, E;
    const e = this._config || ue, s = this._nodes.batteryRackContainer;
    if (!s) return;
    s.innerHTML = "";
    const h = ((y = e.battery) == null ? void 0 : y.parallel_batteries) || ((m = (x = e.battery) == null ? void 0 : x.modules) == null ? void 0 : m.length) || 2, c = [82, 76, 91, 68, 85, 90, 72, 80], _ = [52.4, 52.4, 52.4, 52.4, 52.4, 52.4];
    for (let l = 1; l <= h; l++) {
      const r = ((I = (B = e.battery) == null ? void 0 : B.modules) == null ? void 0 : I[l - 1]) || ((E = (b = e.battery) == null ? void 0 : b.module_entities) == null ? void 0 : E[l - 1]) || {}, o = r.name || `Батарея ${l}`, i = c[(l - 1) % c.length], t = _[(l - 1) % _.length], d = document.createElement("div");
      d.className = "es-battery-pack-card glow-battery clickable-node", d.id = `batPackCard_${l}`, d.innerHTML = `
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${le.battery_vertical}</div>
        <span class="es-bat-name">${o}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${l}">${i}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${l}">${t.toFixed(2).replace(".", ",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${l}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
      `, d.addEventListener("click", () => {
        var M;
        const p = r.soc_entity || r.soc || r.voltage_entity || r.volt || r.current_entity || ((M = e.battery) == null ? void 0 : M.soc_entity);
        this._fireMoreInfo(p);
      }), s.appendChild(d);
    }
  }
  _bindInteractions() {
    var h, c, _, y, x, m, B, I, b, E, l, r, o, i;
    const e = this.shadowRoot, s = this._config || ue;
    (h = e.getElementById("solarHeaderNode")) == null || h.addEventListener("click", () => {
      var t, d;
      this._fireMoreInfo(((t = s.solar) == null ? void 0 : t.daily_yield_entity) || ((d = s.solar) == null ? void 0 : d.total_power_entity));
    }), (c = e.getElementById("totalPvPowerBadge")) == null || c.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.solar) == null ? void 0 : t.total_power_entity);
    }), (_ = e.getElementById("gridNode")) == null || _.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.grid) == null ? void 0 : t.power_entity);
    }), (y = e.getElementById("nonEssentialNode")) == null || y.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.grid) == null ? void 0 : t.non_essential_power_entity);
    }), (x = e.getElementById("carNode")) == null || x.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.grid) == null ? void 0 : t.car_power_entity);
    }), (m = e.getElementById("inverterNode")) == null || m.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.inverter) == null ? void 0 : t.power_entity);
    }), (B = e.getElementById("inverterSelfConsumptionBox")) == null || B.addEventListener("click", (t) => {
      var d;
      t.stopPropagation(), (d = s.inverter) != null && d.self_consumption_entity && this._fireMoreInfo(s.inverter.self_consumption_entity);
    }), (I = e.getElementById("auxNode")) == null || I.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.aux) == null ? void 0 : t.power_entity);
    }), (b = e.getElementById("essentialNode")) == null || b.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.load) == null ? void 0 : t.essential_power_entity);
    }), (E = e.getElementById("masterBatteryHub")) == null || E.addEventListener("click", () => {
      var t;
      this._fireMoreInfo((t = s.battery) == null ? void 0 : t.soc_entity);
    });
    for (let t = 1; t <= 8; t++) {
      const d = e.getElementById(`batBranchBadge_${t}`), p = ((r = (l = s.battery) == null ? void 0 : l.modules) == null ? void 0 : r[t - 1]) || ((i = (o = s.battery) == null ? void 0 : o.module_entities) == null ? void 0 : i[t - 1]) || {};
      d == null || d.addEventListener("click", () => {
        var F;
        const M = p.power_entity || p.current_entity || p.soc_entity || ((F = s.battery) == null ? void 0 : F.soc_entity);
        this._fireMoreInfo(M);
      });
    }
  }
  _updateValues() {
    var S, C, ke, Pe, Me, Ae, Ne, Ze, Qe, et, tt, yt, ut, gt, bt, _t, ft, vt, wt, mt, xt, kt, Bt, Et, $t, St, Ct, It, Tt, Ft, Pt, Mt, At, Nt, Rt, Vt, Lt, zt, Dt, Wt, Ht, jt, Ot, qt, Gt, Yt, Kt, Ut, Jt, Xt, Zt, Qt, ei, ti, ii, oi, si, ni, ai, ri, li, di, ci, pi, hi, yi, ui, gi, bi, _i, fi, vi, wi, mi, xi, ki, Bi, Ei, $i, Si, Ci, Ii, Ti, Fi, Pi;
    if (!this._nodes.dailySolarYield) return;
    const e = this._config || ue, s = ((S = e.solar) == null ? void 0 : S.pv_count) || ((ke = (C = e.solar) == null ? void 0 : C.strings) == null ? void 0 : ke.length) || 3;
    let h = 0, c = !1;
    for (let n = 1; n <= s; n++) {
      const $ = (Me = (Pe = e.solar) == null ? void 0 : Pe.strings) == null ? void 0 : Me[n - 1], K = ($ == null ? void 0 : $.voltage_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_voltage` : ""), A = ($ == null ? void 0 : $.current_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_current` : ""), j = ($ == null ? void 0 : $.power_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_power` : "");
      if (this._getEntityState(j) || this._getEntityState(K) || this._getEntityState(A)) {
        c = !0;
        break;
      }
    }
    for (let n = 1; n <= s; n++) {
      const $ = this.shadowRoot.getElementById(`pvVal_${n}`), K = this.shadowRoot.getElementById(`pvVolt_${n}`), A = this.shadowRoot.getElementById(`pvCurr_${n}`), j = (Ne = (Ae = e.solar) == null ? void 0 : Ae.strings) == null ? void 0 : Ne[n - 1], je = (j == null ? void 0 : j.voltage_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_voltage` : ""), U = (j == null ? void 0 : j.current_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_current` : ""), Ce = (j == null ? void 0 : j.power_entity) || (n <= 3 ? `sensor.deye_12k_inverter_pv${n}_power` : ""), _e = this._getEntityState(je), we = this._getEntityState(U), q = this._getEntityState(Ce);
      let ee = 0, J = 0, ae = 0;
      q ? ae = this._formatPower(q).kw : _e && we ? ae = _e.val * we.val / 1e3 : _e ? ae = 0 : ae = c ? 0 : 4, _e ? ee = _e.val : ee = c ? 0 : 380 + n * 4.5, we ? J = we.val : q && ee > 0 ? J = ae * 1e3 / ee : J = c ? 0 : 3.12 + n * 0.28, h += ae, $ && ($.innerText = `${ae.toFixed(3)} кВт`), K && (K.innerText = `${ee.toFixed(1)} V`), A && (A.innerText = `${J.toFixed(2)} A`);
    }
    const _ = this._getEntityState((Ze = e.solar) == null ? void 0 : Ze.total_power_entity);
    let y = 0;
    _ ? y = this._formatPower(_).kw : y = h, this._nodes.totalPvPowerBadge.innerText = `${y.toFixed(3)} кВт`;
    const x = this._getEntityState((Qe = e.solar) == null ? void 0 : Qe.daily_yield_entity), m = x ? x.val : c ? 0 : 48.6;
    this._nodes.dailySolarYield.innerText = m.toFixed(1);
    const B = ((et = e.solar) == null ? void 0 : et.target_daily_yield) || 55;
    this._nodes.targetSolarYield.innerText = B.toFixed(1);
    const I = Math.min(100, Math.round(m / B * 100));
    this._nodes.solarProgressBar.style.width = `${I}%`;
    const b = this._getEntityState((tt = e.inverter) == null ? void 0 : tt.power_entity);
    this._nodes.inverterPowerVal && ((yt = e.inverter) != null && yt.power_entity && b ? (this._nodes.inverterPowerVal.style.display = "block", this._nodes.inverterPowerVal.innerText = this._formatPower(b, 0).str) : this._nodes.inverterPowerVal.style.display = "none");
    const E = this._getEntityState((ut = e.inverter) == null ? void 0 : ut.ac_temperature_entity);
    this._nodes.inverterAcTemp.innerText = E ? E.val.toFixed(2) : "41,20";
    const l = this._getEntityState((gt = e.inverter) == null ? void 0 : gt.dc_temperature_entity);
    this._nodes.inverterDcTemp.innerText = l ? l.val.toFixed(2) : "38,40";
    const r = this._getEntityState((bt = e.inverter) == null ? void 0 : bt.voltage_entity);
    this._nodes.inverterVolt.innerText = r ? r.val.toFixed(2) : "231,45";
    const o = this._getEntityState((_t = e.inverter) == null ? void 0 : _t.current_entity);
    this._nodes.inverterCurrent.innerText = o ? o.val.toFixed(2) : "8,60";
    const i = this._getEntityState((ft = e.inverter) == null ? void 0 : ft.frequency_entity);
    this._nodes.inverterFreq.innerText = i ? i.val.toFixed(2) : "50,01";
    const t = ((vt = e.wind) == null ? void 0 : vt.show) !== !1 || ((wt = e.aux) == null ? void 0 : wt.type) === "wind", d = this.shadowRoot.getElementById("windStationContainer"), p = this._nodes.auxNode;
    let M = 0;
    if (d)
      if (!t)
        d.classList.add("hidden");
      else {
        d.classList.remove("hidden");
        const n = ((mt = e.wind) == null ? void 0 : mt.turbine_count) || ((kt = (xt = e.wind) == null ? void 0 : xt.turbines) == null ? void 0 : kt.length) || 2, $ = ((Bt = e.wind) == null ? void 0 : Bt.turbines) || [];
        let K = 0, A = 0, j = !1, je = !1;
        for (let q = 0; q < n; q++) {
          const ee = $[q] || {
            power_entity: `sensor.wind_turbine_${q + 1}_power`,
            rpm_entity: "",
            speed_entity: "",
            daily_energy_entity: "",
            monthly_energy_entity: "",
            animation_threshold: ((Et = e.wind) == null ? void 0 : Et.animation_threshold) || 50
          }, J = this.shadowRoot.getElementById(`turbinePower_${q + 1}`), ae = this.shadowRoot.getElementById(`turbineStatus_${q + 1}`), it = this.shadowRoot.getElementById(`turbineIcon_${q + 1}`), Re = this.shadowRoot.getElementById(`turbineCard_${q + 1}`), at = this.shadowRoot.getElementById(`turbineRpmVal_${q + 1}`), rt = this.shadowRoot.getElementById(`turbineDailyVal_${q + 1}`), ot = this.shadowRoot.getElementById(`turbineMonthlyVal_${q + 1}`), Ue = this.shadowRoot.getElementById(`turbineEnergyFooter_${q + 1}`), lt = this._hass ? 0 : q === 0 ? 1.56 : 0.22, Oe = this._getEntityState(ee.power_entity), Je = this._formatPower(Oe, lt);
          J && (J.innerText = Je.str), M += Je.kw;
          let Ee = Je.kw * 1e3;
          Oe && Oe.unit === "W" && (Ee = Oe.val);
          const Xe = ee.animation_threshold ?? (($t = e.wind) == null ? void 0 : $t.animation_threshold) ?? 50, me = it == null ? void 0 : it.querySelector(".turbine-rotor");
          if (Ee >= Xe) {
            me && me.classList.add("spinning"), Re && (Re.classList.add("glow-wind"), Re.style.borderColor = "rgba(6, 182, 212, 0.55)");
            const nt = ((St = e.wind) == null ? void 0 : St.max_power) || 3e3, ht = (3.2 - Math.min(1, Math.max(0, (Ee - Xe) / (nt - Xe))) * 2.75).toFixed(2);
            me && me.style.setProperty("--turbine-speed", `${ht}s`), ae && (ae.innerText = "Генерація", ae.style.color = "#67e8f9");
          } else
            me && me.classList.remove("spinning"), Re && (Re.classList.remove("glow-wind"), Re.style.borderColor = "rgba(255, 255, 255, 0.08)"), ae && (ae.innerText = "Штиль", ae.style.color = "#94a3b8");
          const st = ee.rpm_entity || ee.speed_entity, pe = st && ((Ct = this._hass) != null && Ct.states[st]) ? this._getEntityState(st) : null, te = this.shadowRoot.getElementById(`turbineRpmBox_${q + 1}`);
          te && (pe && pe.raw !== "unavailable" && pe.raw !== "unknown" && typeof pe.val == "number" && !isNaN(pe.val) && pe.val > 0 ? (te.style.display = "inline", at && (at.innerText = Math.round(pe.val))) : te.style.display = "none");
          const re = this._getEntityState(ee.daily_energy_entity), ie = this._getEntityState(ee.monthly_energy_entity);
          rt && (rt.innerText = re && typeof re.val == "number" && !isNaN(re.val) ? re.val.toFixed(2) : "0.00"), ot && (ot.innerText = ie && typeof ie.val == "number" && !isNaN(ie.val) ? ie.val.toFixed(1) : "0.0");
          const dt = !!(ee.daily_energy_entity || ee.monthly_energy_entity);
          Ue && (Ue.style.display = dt ? "flex" : "none"), re && typeof re.val == "number" && !isNaN(re.val) && (K += re.val, j = !0), ie && typeof ie.val == "number" && !isNaN(ie.val) && (A += ie.val, je = !0);
        }
        const U = this.shadowRoot.getElementById("windTotalDailyVal"), Ce = this.shadowRoot.getElementById("windTotalMonthlyVal"), _e = this._getEntityState((It = e.wind) == null ? void 0 : It.daily_energy_entity), we = this._getEntityState((Tt = e.wind) == null ? void 0 : Tt.monthly_energy_entity);
        U && (_e && typeof _e.val == "number" && !isNaN(_e.val) ? U.innerText = _e.val.toFixed(2) : j ? U.innerText = K.toFixed(2) : U.innerText = "0.00"), Ce && (we && typeof we.val == "number" && !isNaN(we.val) ? Ce.innerText = we.val.toFixed(1) : je ? Ce.innerText = A.toFixed(1) : Ce.innerText = "0.0");
      }
    let F = 0;
    if (p)
      if (((Ft = e.aux) == null ? void 0 : Ft.type) === "none" || ((Pt = e.aux) == null ? void 0 : Pt.type) === "wind")
        p.classList.add("hidden");
      else {
        p.classList.remove("hidden");
        const n = this._getEntityState((Mt = e.aux) == null ? void 0 : Mt.power_entity), $ = this._formatPower(n, 2);
        F = $.kw, this._nodes.auxPowerVal && (this._nodes.auxPowerVal.innerText = $.str);
        const K = {
          microinverter: "Мікроінвертор",
          generator: "Генератор",
          wind: "Вітрогенератор",
          smart_load: "Smart Load"
        };
        let A = (At = e.aux) == null ? void 0 : At.title;
        ((Nt = e.aux) == null ? void 0 : Nt.type) === "microinverter" && (!A || A === "Вітрогенератор") ? A = "Мікроінвертор" : (Rt = e.aux) != null && Rt.type && K[e.aux.type] && (!A || A === "Вітрогенератор") ? A = K[e.aux.type] : A || (A = "Мікроінвертор"), this._nodes.auxTitle && (this._nodes.auxTitle.innerText = A), this._nodes.auxIconBox && (this._nodes.auxIconBox.innerHTML = le[(Vt = e.aux) == null ? void 0 : Vt.type] || le.microinverter), this._nodes.auxSubtitle && (this._nodes.auxSubtitle.innerText = ((Lt = e.aux) == null ? void 0 : Lt.subtitle) || "Джерело → GEN port", this._nodes.auxSubtitle.style.color = "rgba(216, 180, 254, 0.85)"), p.style.borderColor = "rgba(192, 132, 252, 0.45)", p.style.background = "rgba(88, 28, 135, 0.35)", p.classList.remove("glow-wind"), p.classList.add("glow-aux");
      }
    const L = this._getEntityState((zt = e.grid) == null ? void 0 : zt.power_entity), N = L ? L.unit === "W" ? L.val / 1e3 : L.val : 0, R = ((Dt = e.grid) == null ? void 0 : Dt.power_sign) || ((Wt = e.grid) != null && Wt.invert_power ? "inverted" : "deye"), z = ((Ht = e.grid) == null ? void 0 : Ht.selling_enabled) === !0, oe = (((jt = e.grid) == null ? void 0 : jt.min_power_threshold) !== void 0 ? e.grid.min_power_threshold : 50) / 1e3;
    let G = !1, P = !1;
    const D = Math.abs(N);
    D >= oe && (R === "deye" ? N < 0 ? G = !0 : P = !0 : N > 0 ? G = !0 : P = !0), G && !z && (G = !1), this._nodes.gridPowerVal && (this._nodes.gridPowerVal.innerText = `${D.toFixed(3)} кВт`, G ? this._nodes.gridPowerVal.style.color = "#34d399" : P ? this._nodes.gridPowerVal.style.color = "#38bdf8" : this._nodes.gridPowerVal.style.color = "#94a3b8"), this._nodes.gridDirectionLabel && (G ? (this._nodes.gridDirectionLabel.innerText = "← Експорт", this._nodes.gridDirectionLabel.style.color = "#34d399") : P ? (this._nodes.gridDirectionLabel.innerText = "→ Імпорт", this._nodes.gridDirectionLabel.style.color = "#38bdf8") : (this._nodes.gridDirectionLabel.innerText = "Мережа", this._nodes.gridDirectionLabel.style.color = "#64748b"));
    const a = this._getEntityState((Ot = e.grid) == null ? void 0 : Ot.import_daily_entity);
    this._nodes.gridImportDaily.innerText = a ? `${a.val.toFixed(2)} kWh` : "0.00 kWh";
    const u = this._getEntityState((qt = e.grid) == null ? void 0 : qt.export_daily_entity);
    this._nodes.gridExportDaily.innerText = u ? `${u.val.toFixed(2)} kWh` : "0.00 kWh";
    const f = this.shadowRoot.getElementById("nonEssentialNode"), g = !!((Gt = e.grid) != null && Gt.show_non_essential && ((Yt = e.grid) != null && Yt.non_essential_power_entity)) || ((Kt = e.grid) == null ? void 0 : Kt.show_non_essential) !== !1 && !!((Ut = e.grid) != null && Ut.non_essential_power_entity);
    let v = 0;
    if (f)
      if (g) {
        f.classList.remove("hidden");
        const n = this._getEntityState(e.grid.non_essential_power_entity), $ = this._formatPower(n, 0);
        v = $.kw, this._nodes.nonEssentialPowerVal && (this._nodes.nonEssentialPowerVal.innerText = $.str);
      } else
        f.classList.add("hidden");
    const T = this.shadowRoot.getElementById("carNode"), W = !!((Jt = e.grid) != null && Jt.show_car && ((Xt = e.grid) != null && Xt.car_power_entity)) || ((Zt = e.grid) == null ? void 0 : Zt.show_car) !== !1 && !!((Qt = e.grid) != null && Qt.car_power_entity);
    let se = 0;
    if (T)
      if (W) {
        T.classList.remove("hidden");
        const n = this._getEntityState(e.grid.car_power_entity), $ = this._formatPower(n, 0);
        se = $.kw, this._nodes.carPowerVal && (this._nodes.carPowerVal.innerText = $.str);
      } else
        T.classList.add("hidden");
    const ge = this._getEntityState((ei = e.battery) == null ? void 0 : ei.soc_entity), xe = ge ? ge.val : 80;
    this._nodes.masterBatterySoc.innerText = `${xe.toFixed(1)}%`, this._nodes.masterBatterySoc.style.fontSize = "15px", this._nodes.masterBatterySoc.style.fontWeight = "700";
    const de = this._getEntityState((ti = e.battery) == null ? void 0 : ti.power_entity), ne = this._getEntityState((ii = e.battery) == null ? void 0 : ii.current_entity), he = de ? de.unit === "W" ? de.val / 1e3 : de.val : 0, ye = ((oi = e.battery) == null ? void 0 : oi.power_sign) || ((si = e.battery) != null && si.invert_power ? "standard" : "deye");
    let V = !1, ce = !1;
    const fe = Math.abs(he);
    if (fe >= 0.02 ? ye === "deye" ? he < 0 ? V = !0 : ce = !0 : he > 0 ? V = !0 : ce = !0 : ne && Math.abs(ne.val) >= 0.3 && (ye === "deye" ? ne.val < 0 ? V = !0 : ce = !0 : ne.val > 0 ? V = !0 : ce = !0), this._isCharging = V, this._isDischarging = ce, this._nodes.masterBatteryFlowHint) {
      let n = "Очікування", $ = "#94a3b8";
      V ? (n = "Заряд ↓", $ = "#34d399") : ce && (n = "Розряд ↑", $ = "#f87171"), this._nodes.masterBatteryFlowHint.innerHTML = `<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${fe.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${$}; font-weight: 700; font-size: 14px;">${n}</span>`;
    }
    const Ie = this._getEntityState((ni = e.battery) == null ? void 0 : ni.voltage_entity), qe = Ie ? Ie.val.toFixed(2) : "53.24", Ge = ne ? ne.val.toFixed(2) : "-56.30";
    if (this._nodes.batVoltVal && (this._nodes.batVoltVal.innerText = `${qe.replace(".", ",")} V`), this._nodes.batCurrentVal && (this._nodes.batCurrentVal.innerText = `${Ge.replace(".", ",")} A`), this._nodes.batReserveSoc && (this._nodes.batReserveSoc.innerText = ((ai = e.battery) == null ? void 0 : ai.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20), this._nodes.batReserveProgressBar) {
      const n = ((ri = e.battery) == null ? void 0 : ri.reserve_soc) !== void 0 ? e.battery.reserve_soc : 20;
      this._nodes.batReserveProgressBar.style.width = `${n}%`;
    }
    const Le = P ? D : 0, ze = ce ? fe : 0, De = y + M + (F > 0 ? F : 0) + Le + ze, We = (V ? fe : 0) + (G ? D : 0) + v + se, $e = Math.max(0, De - We), ve = this._getEntityState((li = e.inverter) == null ? void 0 : li.self_consumption_entity);
    let be = 0;
    const Y = this._getEntityState((di = e.load) == null ? void 0 : di.essential_power_entity), Te = ((ci = e.load) == null ? void 0 : ci.auto_calculate) !== !1, He = !!(Y && typeof Y.val == "number" && !isNaN(Y.val) && Y.val > 0 && !Te);
    if (ve && typeof ve.val == "number" && !isNaN(ve.val))
      be = Math.max(0, ve.unit === "W" ? ve.val / 1e3 : ve.val);
    else if (He) {
      const n = Y.unit === "W" ? Y.val / 1e3 : Y.val;
      be = Math.max(0, $e - n);
    } else {
      const $ = (((pi = e.inverter) == null ? void 0 : pi.standby_power) !== void 0 ? e.inverter.standby_power : 100) / 1e3;
      be = Math.min($e, $);
    }
    let Be = 0;
    Te || !Y || typeof Y.val != "number" || isNaN(Y.val) || Y.val <= 0 ? Be = Math.max(0, $e - be) : Be = Math.max(0, Y.unit === "W" ? Y.val / 1e3 : Y.val), this._nodes.inverterSelfConsumptionBox && this._nodes.inverterSelfConsumptionVal && (((hi = e.inverter) == null ? void 0 : hi.show_self_consumption) !== !1 ? (this._nodes.inverterSelfConsumptionBox.style.display = "flex", be < 1 ? this._nodes.inverterSelfConsumptionVal.innerText = `${Math.round(be * 1e3)} Вт` : this._nodes.inverterSelfConsumptionVal.innerText = `${be.toFixed(3)} кВт`) : this._nodes.inverterSelfConsumptionBox.style.display = "none"), this._nodes.essentialPowerVal.innerText = `${Be.toFixed(3)} кВт`;
    const w = this._getEntityState((yi = e.load) == null ? void 0 : yi.daily_house_entity);
    this._nodes.dailyHouseKwh.innerText = w ? `${w.val.toFixed(2)} kWh` : "12,40 kWh";
    let H = 0;
    (((ui = e.load) == null ? void 0 : ui.subloads) || []).forEach((n, $) => {
      const K = this.shadowRoot.getElementById(`subloadVal_${$}`), A = this._getEntityState(n.entity), j = this._formatPower(A, 2);
      H += j.kw, K && (K.innerText = j.str);
    });
    const O = ((gi = e.battery) == null ? void 0 : gi.parallel_batteries) || ((_i = (bi = e.battery) == null ? void 0 : bi.modules) == null ? void 0 : _i.length) || 2;
    let X = 0;
    for (let n = 0; n < O; n++) {
      const $ = ((vi = (fi = e.battery) == null ? void 0 : fi.modules) == null ? void 0 : vi[n]) || ((mi = (wi = e.battery) == null ? void 0 : wi.module_entities) == null ? void 0 : mi[n]) || {}, K = $.capacity_kwh !== void 0 ? parseFloat($.capacity_kwh) : n === 0 ? 7.88 : n === 1 ? 5.12 : (((xi = e.battery) == null ? void 0 : xi.capacity_kwh) || 13) / O;
      X += isNaN(K) ? 0 : K;
    }
    X <= 0 && (X = parseFloat((ki = e.battery) == null ? void 0 : ki.capacity_kwh) || 13);
    const Z = this._getEntityState(((Bi = e.battery) == null ? void 0 : Bi.capacity_entity) || "sensor.inverter_12_kvt_battery_capacity"), Fe = Z && !isNaN(Z.val) ? Z.val : null;
    if (this._nodes.batCapacityVal) {
      const n = Fe !== null ? Fe : X;
      this._nodes.batCapacityVal.innerText = `${n.toFixed(2).replace(".", ",")} kWh`;
    }
    const Se = this._getEntityState((Ei = e.battery) == null ? void 0 : Ei.charge_daily_entity);
    this._nodes.batChargeDaily.innerText = Se ? `${Se.val.toFixed(2)} kWh` : "4,30 kWh";
    const Q = this._getEntityState(($i = e.battery) == null ? void 0 : $i.discharge_daily_entity);
    this._nodes.batDischargeDaily.innerText = Q ? `${Q.val.toFixed(2)} kWh` : "6,10 kWh";
    const k = [];
    for (let n = 1; n <= O; n++) {
      const $ = this.shadowRoot.getElementById(`batPackSoc_${n}`), K = this.shadowRoot.getElementById(`batPackVolt_${n}`), A = this.shadowRoot.getElementById(`batPackCurr_${n}`), j = this.shadowRoot.getElementById(`batPackPower_${n}`), je = this.shadowRoot.getElementById(`batPackTempVal_${n}`), U = this.shadowRoot.getElementById(`batPackStateTag_${n}`), Ce = this.shadowRoot.getElementById(`batPackKwh_${n}`), _e = this.shadowRoot.getElementById(`batPackBar1_${n}`), we = this.shadowRoot.getElementById(`batPackBar2_${n}`), q = this.shadowRoot.getElementById(`batPackBar3_${n}`), ee = this.shadowRoot.getElementById(`batPackBar4_${n}`), J = ((Ci = (Si = e.battery) == null ? void 0 : Si.modules) == null ? void 0 : Ci[n - 1]) || ((Ti = (Ii = e.battery) == null ? void 0 : Ii.module_entities) == null ? void 0 : Ti[n - 1]) || {}, ae = J.soc_entity || J.soc || `sensor.bms_rack${n}_soc`, it = J.current_entity || `sensor.bms_rack${n}_current`, Re = J.voltage_entity || J.volt || `sensor.bms_rack${n}_voltage`, at = J.power_entity || `sensor.bms_rack${n}_power`, rt = J.temperature_entity || J.temp || `sensor.bms_rack${n}_temperature`, ot = this._getEntityState(ae), Ue = this._getEntityState(it), lt = this._getEntityState(Re), Oe = this._getEntityState(at), Je = this._getEntityState(rt), Ee = ot ? ot.val : n === 1 ? 82 : n === 2 ? 85 : 75, Xe = lt ? lt.val : n === 1 ? 54.1 : n === 2 ? 54 : 52.4, me = Ue ? Ue.val : n === 1 ? 18.4 : n === 2 ? 25.2 : 8.2, st = Je ? Je.val : n === 1 ? 38.2 : n === 2 ? 21 : 21.5;
      let pe = 0;
      Oe ? pe = Math.abs(this._formatPower(Oe).kw) : pe = Xe * Math.abs(me) / 1e3, $ && ($.innerText = `${Ee.toFixed(0)}%`), K && (K.innerText = `${Xe.toFixed(1)} V`), A && (A.innerText = `${Math.abs(me).toFixed(1)} A`), j && (j.innerText = `${pe.toFixed(2)} кВт`), je && (je.innerText = `${st.toFixed(1)}`);
      let te = !1;
      ce ? te = !1 : V ? te = !0 : Ue ? te = (((Fi = e.battery) == null ? void 0 : Fi.power_sign) || "deye") === "deye" ? me < 0 : me > 0 : te = me < 0;
      const re = this.shadowRoot.getElementById(`batBranchBadge_${n}`);
      re && (pe < 0.02 ? (re.className = "es-bat-branch-badge es-mono idle", re.innerHTML = "<span>0.00 кВт</span>") : te ? (re.className = "es-bat-branch-badge es-mono charge", re.innerHTML = `<span>${pe.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`) : (re.className = "es-bat-branch-badge es-mono discharge", re.innerHTML = `<span>${pe.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`));
      const ie = this.shadowRoot.getElementById(`batPackCard_${n}`), dt = ie == null ? void 0 : ie.querySelector(".es-battery-gauge"), nt = ie == null ? void 0 : ie.querySelector(".es-battery-gauge-nipple");
      ie && (ie.style.borderColor = te ? "rgba(16, 185, 129, 0.55)" : "rgba(239, 68, 68, 0.55)"), dt && (dt.style.borderColor = te ? "#10b981" : "#ef4444"), nt && (nt.style.background = te ? "#10b981" : "#ef4444"), U && (te ? (U.className = "es-bat-state-tag charge", U.innerText = "Заряд", U.style.color = "#34d399", U.style.background = "rgba(16, 185, 129, 0.18)", U.style.borderColor = "rgba(16, 185, 129, 0.4)") : (U.className = "es-bat-state-tag discharge", U.innerText = "Розряд", U.style.color = "#f87171", U.style.background = "rgba(239, 68, 68, 0.18)", U.style.borderColor = "rgba(239, 68, 68, 0.4)")), j && (j.style.color = te ? "#34d399" : "#f87171"), A && (A.style.color = te ? "#38bdf8" : "#f87171");
      const ht = ((J.capacity_kwh !== void 0 ? parseFloat(J.capacity_kwh) : (((Pi = e.battery) == null ? void 0 : Pi.capacity_kwh) || 10) / O) * (Ee / 100)).toFixed(2);
      Ce && (Ce.innerText = `${ht} kWh`);
      const ct = te ? "active-green" : "active-red";
      _e && we && q && ee && (_e.className = `es-bat-bar ${Ee >= 10 ? ct : ""}`, we.className = `es-bat-bar ${Ee >= 35 ? ct : ""}`, q.className = `es-bat-bar ${Ee >= 65 ? ct : ""}`, ee.className = `es-bat-bar ${Ee >= 85 ? ct : ""}`), k.push({ kwNum: pe, isChg: te });
    }
    this._updateFlowPaths(), this._updateFlowAnimations(
      N,
      G,
      P,
      y,
      Be,
      fe,
      V,
      ce,
      se,
      k,
      v,
      H,
      F
    );
  }
  _setupResizeObserver() {
    var s;
    if (this._resizeObserver) return;
    const e = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".energy-station-container");
    e && (window.ResizeObserver && (this._resizeObserver = new ResizeObserver(() => {
      this._updateFlowPaths();
    }), this._resizeObserver.observe(e)), requestAnimationFrame(() => this._updateFlowPaths()), setTimeout(() => this._updateFlowPaths(), 150));
  }
  _updateFlowPaths() {
    var e, s, h, c, _, y, x, m, B;
    try {
      const I = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".energy-station-container");
      if (!I) return;
      const b = I.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      const E = this._config || ue, l = (a, u = 0.5, f = 0.5) => {
        if (!a) return null;
        const g = a.getBoundingClientRect();
        return {
          x: Math.round(g.left - b.left + g.width * u),
          y: Math.round(g.top - b.top + g.height * f)
        };
      }, r = (a, u, f) => {
        const g = this.shadowRoot.getElementById(a), v = this.shadowRoot.getElementById(u);
        g && g.setAttribute("d", f || ""), v && v.setAttribute("d", f || "");
      }, o = this.shadowRoot.getElementById("gridNode"), i = this.shadowRoot.getElementById("inverterNode"), t = this.shadowRoot.getElementById("essentialNode"), d = this.shadowRoot.getElementById("totalPvPowerBadge"), p = this.shadowRoot.getElementById("masterBatteryHub"), M = this.shadowRoot.getElementById("carNode");
      if (o && i) {
        const a = o.getBoundingClientRect(), u = i.getBoundingClientRect();
        if (a.bottom < u.top + 30) {
          const g = l(o, 0.7, 1), v = l(i, 0.2, 0);
          if (g && v) {
            const T = Math.round((g.y + v.y) / 2), W = `M ${g.x} ${g.y} C ${g.x} ${T}, ${v.x} ${T}, ${v.x} ${v.y}`;
            r("pathGridInvBase", "pathGridInvFlow", W);
          }
        } else {
          const g = Math.round(u.top - b.top + u.height * 0.55), v = Math.round(a.right - b.left), T = Math.round(u.left - b.left), W = Math.round(a.top - b.top + a.height * 0.5);
          let se = "";
          if (Math.abs(W - g) <= 8)
            se = `M ${v} ${g} L ${T} ${g}`;
          else {
            const ge = Math.round(v + 24);
            se = `M ${v} ${W} C ${ge} ${W}, ${ge} ${g}, ${T} ${g}`;
          }
          r("pathGridInvBase", "pathGridInvFlow", se);
        }
      }
      if (i && t) {
        const a = t.getBoundingClientRect(), u = i.getBoundingClientRect();
        if (a.bottom < u.top + 30) {
          const g = l(i, 0.8, 0), v = l(t, 0.3, 1);
          if (g && v) {
            const T = Math.round((g.y + v.y) / 2), W = `M ${g.x} ${g.y} C ${g.x} ${T}, ${v.x} ${T}, ${v.x} ${v.y}`;
            r("pathInvLoadBase", "pathInvLoadFlow", W);
          }
        } else {
          const g = Math.round(u.top - b.top + u.height * 0.55), v = Math.round(u.right - b.left), T = Math.round(a.left - b.left), W = Math.round(a.top - b.top + a.height * 0.5);
          let se = "";
          if (Math.abs(W - g) <= 8)
            se = `M ${v} ${g} L ${T} ${g}`;
          else {
            const ge = Math.round(T - 24);
            se = `M ${v} ${g} C ${ge} ${g}, ${ge} ${W}, ${T} ${W}`;
          }
          r("pathInvLoadBase", "pathInvLoadFlow", se);
        }
      }
      if (d && i) {
        const a = l(d, 0.5, 1), u = l(i, 0.5, 0);
        if (a && u) {
          const f = `M ${a.x} ${a.y} L ${u.x} ${u.y}`;
          r("pathSolarInvBase", "pathSolarInvFlow", f);
        }
      }
      if (i && p) {
        const a = l(i, 0.5, 1), u = l(p, 0.5, 0);
        if (a && u) {
          const f = `M ${a.x} ${a.y} L ${u.x} ${u.y}`;
          r("pathInvBatBase", "pathInvBatFlow", f);
        }
      }
      const F = this.shadowRoot.getElementById("nonEssentialNode"), L = F && !F.classList.contains("hidden") && F.offsetHeight > 0, N = M && !M.classList.contains("hidden") && M.offsetHeight > 0;
      if (o && L) {
        const a = l(o, 0.5, 1), u = l(F, 0.5, 0);
        if (a && u) {
          const f = `M ${a.x} ${a.y} L ${u.x} ${u.y}`;
          r("pathGridNonEssBase", "pathGridNonEssFlow", f);
        }
      } else
        r("pathGridNonEssBase", "pathGridNonEssFlow", "");
      if (N) {
        const a = L ? F : o;
        if (a) {
          const u = l(a, 0.5, 1), f = l(M, 0.5, 0);
          if (u && f) {
            const g = `M ${u.x} ${u.y} L ${f.x} ${f.y}`;
            r("pathNonEssCarBase", "pathNonEssCarFlow", g);
          }
        } else
          r("pathNonEssCarBase", "pathNonEssCarFlow", "");
      } else
        r("pathNonEssCarBase", "pathNonEssCarFlow", "");
      const R = this.shadowRoot.getElementById("subloadsBusContainer");
      if (t && R) {
        const a = l(t, 0.5, 1), u = l(R, 0.5, 0);
        if (a && u) {
          const f = `M ${a.x} ${a.y} L ${u.x} ${u.y}`;
          r("pathLoadSubloadsBase", "pathLoadSubloadsFlow", f);
        }
      } else
        r("pathLoadSubloadsBase", "pathLoadSubloadsFlow", "");
      const z = this.shadowRoot.getElementById("auxNode");
      if (i && z && !z.classList.contains("hidden") && z.offsetHeight > 0) {
        const a = l(z, 0.35, 1), u = l(i, 0.9, 0);
        if (a && u) {
          const f = Math.round((a.y + u.y) / 2), g = `M ${a.x} ${a.y} C ${a.x} ${f}, ${u.x} ${f}, ${u.x} ${u.y}`;
          r("pathInvAuxBase", "pathInvAuxFlow", g);
        }
      } else
        r("pathInvAuxBase", "pathInvAuxFlow", "");
      r("pathBatStemBase", "pathBatStemFlow", "");
      const oe = this.shadowRoot.getElementById("windStationContainer"), P = ((s = E.wind) == null ? void 0 : s.show) !== !1 || ((h = E.aux) == null ? void 0 : h.type) === "wind" ? ((c = E.wind) == null ? void 0 : c.turbine_count) || ((y = (_ = E.wind) == null ? void 0 : _.turbines) == null ? void 0 : y.length) || 2 : 0;
      for (let a = 1; a <= 4; a++)
        if (a <= P && oe && !oe.classList.contains("hidden")) {
          const u = this.shadowRoot.getElementById(`turbineCard_${a}`);
          if (u && p) {
            const f = l(u, 0.5, 1), g = P === 1 ? 0.5 : 0.28 + (a - 1) / (P - 1) * 0.44, v = l(p, g, 0);
            if (f && v) {
              const T = `M ${f.x} ${f.y} L ${v.x} ${v.y}`;
              r(`pathTurbine${a}Base`, `pathTurbine${a}Flow`, T);
            }
          } else
            r(`pathTurbine${a}Base`, `pathTurbine${a}Flow`, "");
        } else
          r(`pathTurbine${a}Base`, `pathTurbine${a}Flow`, "");
      const D = ((x = E.battery) == null ? void 0 : x.parallel_batteries) || ((B = (m = E.battery) == null ? void 0 : m.modules) == null ? void 0 : B.length) || 2;
      for (let a = 1; a <= 8; a++) {
        const u = this.shadowRoot.getElementById(`batPackCard_${a}`), f = this.shadowRoot.getElementById(`batBranchBadge_${a}`);
        if (a <= D && p && u) {
          const g = l(p, 0.5, 1), v = l(u, 0.5, 0);
          if (g && v) {
            const T = Math.round(g.y + (v.y - g.y) * 0.45);
            let W = "";
            Math.abs(g.x - v.x) <= 4 ? W = `M ${g.x} ${g.y} L ${v.x} ${v.y}` : W = `M ${g.x} ${g.y} C ${g.x} ${T}, ${v.x} ${T}, ${v.x} ${v.y}`, r(`pathBat${a}Base`, `pathBat${a}Flow`, W), f && (f.style.left = `${v.x}px`, f.style.top = `${T}px`, f.style.display = "flex");
          } else
            r(`pathBat${a}Base`, `pathBat${a}Flow`, ""), f && (f.style.display = "none");
        } else
          r(`pathBat${a}Base`, `pathBat${a}Flow`, ""), f && (f.style.display = "none");
      }
      this._updateBusBars();
    } catch {
    }
  }
  _updateBusBars() {
    var e, s, h, c, _;
    try {
      const y = this._config || ue, x = this.shadowRoot.getElementById("solarBusSvg"), m = ((e = y.solar) == null ? void 0 : e.pv_count) || ((h = (s = y.solar) == null ? void 0 : s.strings) == null ? void 0 : h.length) || 3;
      if (x && m > 0) {
        const b = x.getBoundingClientRect(), E = this.shadowRoot.getElementById("pvPanel_1"), l = this.shadowRoot.getElementById(`pvPanel_${m}`), r = this.shadowRoot.getElementById("solarBusBase"), o = this.shadowRoot.getElementById("solarFlowCollector"), i = this.shadowRoot.getElementById("solarBusStemBase"), t = this.shadowRoot.getElementById("solarBusStemFlow"), d = this.shadowRoot.getElementById("solarBusFeeders");
        if (E && l && b.width > 0) {
          const p = E.getBoundingClientRect(), M = l.getBoundingClientRect(), F = Math.round(p.left - b.left + p.width / 2), L = Math.round(M.left - b.left + M.width / 2), N = 13, R = Math.round((F + L) / 2);
          if (r && (r.setAttribute("x1", F), r.setAttribute("y1", N), r.setAttribute("x2", L), r.setAttribute("y2", N)), o && (o.setAttribute("x1", F), o.setAttribute("y1", N), o.setAttribute("x2", L), o.setAttribute("y2", N)), i && (i.setAttribute("x1", R), i.setAttribute("y1", N), i.setAttribute("x2", R), i.setAttribute("y2", 26)), t && (t.setAttribute("x1", R), t.setAttribute("y1", N), t.setAttribute("x2", R), t.setAttribute("y2", 26)), d) {
            let z = "";
            for (let oe = 1; oe <= m; oe++) {
              const G = this.shadowRoot.getElementById(`pvPanel_${oe}`);
              if (G) {
                const P = G.getBoundingClientRect(), D = Math.round(P.left - b.left + P.width / 2);
                z += `
                  <line x1="${D}" y1="0" x2="${D}" y2="${N}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${D}" y1="0" x2="${D}" y2="${N}" stroke="#fbbf24" stroke-width="2.5" />
                `;
              }
            }
            d.innerHTML = z;
          }
        }
      }
      const B = this.shadowRoot.getElementById("subloadsBusSvg"), I = ((_ = (c = y.load) == null ? void 0 : c.subloads) == null ? void 0 : _.length) || 3;
      if (B && I > 0) {
        const b = B.getBoundingClientRect(), E = this.shadowRoot.getElementById("subloadCard_0"), l = this.shadowRoot.getElementById(`subloadCard_${I - 1}`), r = this.shadowRoot.getElementById("essentialNode"), o = this.shadowRoot.getElementById("subloadsBusBase"), i = this.shadowRoot.getElementById("subloadsFlowCollector"), t = this.shadowRoot.getElementById("subloadsBusStemBase"), d = this.shadowRoot.getElementById("subloadsBusStemFlow"), p = this.shadowRoot.getElementById("subloadsBusFeeders");
        if (E && l && b.width > 0) {
          const M = E.getBoundingClientRect(), F = l.getBoundingClientRect(), L = Math.round(M.left - b.left + M.width / 2), N = Math.round(F.left - b.left + F.width / 2), R = 13;
          let z = Math.round((L + N) / 2);
          if (r) {
            const P = r.getBoundingClientRect();
            z = Math.round(P.left - b.left + P.width / 2);
          }
          const oe = Math.min(L, z), G = Math.max(N, z);
          if (o && (o.setAttribute("x1", oe), o.setAttribute("y1", R), o.setAttribute("x2", G), o.setAttribute("y2", R)), i && (i.setAttribute("x1", oe), i.setAttribute("y1", R), i.setAttribute("x2", G), i.setAttribute("y2", R)), t && (t.setAttribute("x1", z), t.setAttribute("y1", 0), t.setAttribute("x2", z), t.setAttribute("y2", R)), d && (d.setAttribute("x1", z), d.setAttribute("y1", 0), d.setAttribute("x2", z), d.setAttribute("y2", R)), p) {
            let P = "";
            for (let D = 0; D < I; D++) {
              const a = this.shadowRoot.getElementById(`subloadCard_${D}`);
              if (a) {
                const u = a.getBoundingClientRect(), f = Math.round(u.left - b.left + u.width / 2);
                P += `
                  <line x1="${f}" y1="${R}" x2="${f}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${f}" y1="${R}" x2="${f}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `;
              }
            }
            p.innerHTML = P;
          }
        }
      }
    } catch {
    }
  }
  _applyFlowAnimation(e, s, h, c, _) {
    if (!e) return;
    if (!_) {
      e.setAttribute("class", `flow-pulse ${s} inactive`), e.style.opacity = "0", e.style.animation = "none";
      return;
    }
    const y = h ? "flow-reverse" : "flow-forward", x = h ? "esFlowBackward" : "esFlowForward";
    e.setAttribute("class", `flow-pulse ${s} ${y}`), e.style.opacity = "1", e.style.setProperty("--flow-speed", c), e.style.animation = `${x} ${c} linear infinite`;
  }
  _updateFlowAnimations(e, s, h, c, _, y, x, m, B, I = [], b = 0, E = 0, l = 0) {
    var Le, ze, De, Ye, Ke, We, $e, ve, be, Y, Te, He, Be;
    const r = this._config || ue, o = ((Le = r.animations) == null ? void 0 : Le.enabled) !== !1, i = ((ze = r.animations) == null ? void 0 : ze.speed) || 1.2, t = (w, H = 10) => {
      const O = Math.abs(w);
      if (O < 0.05) return "2.5s";
      const X = Math.min(1, O / H);
      return `${Math.max(0.4, (2.6 - X * 1.9) * (i / 1.2)).toFixed(2)}s`;
    }, d = this.shadowRoot.getElementById("pathGridInvFlow"), p = Math.abs(e), M = (((De = r.grid) == null ? void 0 : De.min_power_threshold) !== void 0 ? r.grid.min_power_threshold : 50) / 1e3, F = ((Ye = r.grid) == null ? void 0 : Ye.selling_enabled) === !0, L = o && p >= M && (h || s && F);
    this._applyFlowAnimation(d, "flow-grid", s, t(e, 10), L);
    const N = this.shadowRoot.getElementById("pathSolarInvFlow");
    this._applyFlowAnimation(N, "flow-solar", !1, t(c, 12), o && c >= 0.05);
    const R = this.shadowRoot.getElementById("pathInvLoadFlow"), z = Math.abs(_);
    this._applyFlowAnimation(R, "flow-load", !1, t(_, 10), o && z >= 0.05);
    const oe = this.shadowRoot.getElementById("pathInvBatFlow"), G = Math.abs(y), P = o && G >= 0.02 && (x || m), D = x ? "flow-battery charging" : "flow-battery discharging";
    this._applyFlowAnimation(oe, D, m, t(y, 8), P);
    const a = this.shadowRoot.getElementById("pathGridNonEssFlow"), u = Math.abs(b);
    this._applyFlowAnimation(a, "flow-grid", !1, t(b, 5), o && u >= 0.05);
    const f = this.shadowRoot.getElementById("pathNonEssCarFlow") || this.shadowRoot.getElementById("pathGridCarFlow"), g = Math.abs(B);
    this._applyFlowAnimation(f, "flow-car", !1, t(B, 7), o && g >= 0.05);
    const v = this.shadowRoot.getElementById("pathLoadSubloadsFlow"), T = Math.abs(E || _);
    this._applyFlowAnimation(v, "flow-load", !1, t(T, 8), o && T >= 0.05);
    const W = this.shadowRoot.getElementById("pathInvAuxFlow"), se = Math.abs(l);
    this._applyFlowAnimation(W, "flow-aux", !0, t(l, 5), o && se >= 0.05);
    const ge = this.shadowRoot.getElementById("pathBatStemFlow");
    this._applyFlowAnimation(ge, D, m, t(y, 8), P);
    const xe = this.shadowRoot.getElementById("solarFlowCollector"), de = this.shadowRoot.getElementById("solarBusStemFlow");
    if (xe)
      if (!o || c < 0.05)
        xe.style.opacity = "0.2", xe.style.animation = "none", de && (de.style.opacity = "0.2", de.style.animation = "none");
      else {
        const w = t(c, 12);
        xe.style.opacity = "1", xe.setAttribute("class", "flow-line"), xe.style.animation = `esDashflow ${w} linear infinite`, de && (de.style.opacity = "1", de.setAttribute("class", "flow-line"), de.style.animation = `esDashflow ${w} linear infinite`);
      }
    const ne = this.shadowRoot.getElementById("subloadsFlowCollector"), he = this.shadowRoot.getElementById("subloadsBusStemFlow");
    if (ne)
      if (!o || T < 0.05)
        ne.style.opacity = "0.2", ne.style.animation = "none", he && (he.style.opacity = "0.2", he.style.animation = "none");
      else {
        const w = t(T, 8);
        ne.style.opacity = "1", ne.setAttribute("class", "flow-line"), ne.style.animation = `esDashflow ${w} linear infinite`, he && (he.style.opacity = "1", he.setAttribute("class", "flow-line"), he.style.animation = `esDashflow ${w} linear infinite`);
      }
    const ye = this.shadowRoot.getElementById("batteryFlowCollector"), V = this.shadowRoot.getElementById("batteryBusStemFlow"), ce = this.shadowRoot.getElementById("batteryBusFeeders"), fe = m ? "#f87171" : "#34d399", Ve = m ? "drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)" : "drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";
    if (ye)
      if (ye.style.stroke = fe, ye.style.filter = Ve, V && (V.style.stroke = fe, V.style.filter = Ve), !o || !P)
        ye.style.opacity = "0.2", ye.style.animation = "none", V && (V.style.opacity = "0.2", V.style.animation = "none");
      else {
        const w = t(y, 8), H = m ? "esDashflowRev" : "esDashflow";
        ye.style.opacity = "1", ye.setAttribute("class", m ? "flow-line-reverse" : "flow-line"), ye.style.animation = `${H} ${w} linear infinite`, V && (V.style.opacity = "1", V.setAttribute("class", m ? "flow-line-reverse" : "flow-line"), V.style.animation = `${H} ${w} linear infinite`);
      }
    ce && ce.querySelectorAll("line").forEach((w) => {
      if (w.style.stroke = fe, w.style.filter = Ve, !o || !P)
        w.style.opacity = "0.2", w.style.animation = "none";
      else {
        const H = t(y, 8), O = m ? "esDashflowRev" : "esDashflow";
        w.style.opacity = "1", w.setAttribute("class", m ? "flow-line-reverse" : "flow-line"), w.style.animation = `${O} ${H} linear infinite`;
      }
    });
    for (let w = 1; w <= 8; w++) {
      const H = this.shadowRoot.getElementById(`pathBat${w}Flow`);
      if (!H) continue;
      const O = I[w - 1], X = O ? O.kwNum : 0, Z = o && (X >= 0.02 || P), Fe = m;
      this._applyFlowAnimation(H, D, Fe, t(X || y, 8), Z);
    }
    for (let w = 0; w < 6; w++) {
      const H = this.shadowRoot.getElementById(`pathSubload${w}Flow`);
      if (!H) continue;
      const O = (We = (Ke = r.load) == null ? void 0 : Ke.subloads) == null ? void 0 : We[w], X = O ? this._getEntityState(O.entity) : null, Z = X ? this._formatPower(X, 2).kw : w === 0 ? 2 : w === 1 ? 3 : 4;
      this._applyFlowAnimation(H, "flow-load", !1, t(Z, 8), o && Z >= 0.05);
    }
    const Ie = (($e = r.wind) == null ? void 0 : $e.show) !== !1 || ((ve = r.aux) == null ? void 0 : ve.type) === "wind", qe = Ie ? ((be = r.wind) == null ? void 0 : be.turbine_count) || ((Te = (Y = r.wind) == null ? void 0 : Y.turbines) == null ? void 0 : Te.length) || 2 : 0, Ge = ((He = r.wind) == null ? void 0 : He.turbines) || [];
    for (let w = 1; w <= 4; w++) {
      const H = this.shadowRoot.getElementById(`pathTurbine${w}Flow`);
      if (H)
        if (w <= qe && Ie) {
          const O = Ge[w - 1] || {}, X = this._hass ? 0 : w === 1 ? 1.45 : 0.85, Z = this._getEntityState(O.power_entity || `sensor.wind_turbine_${w}_power`);
          let Se = this._formatPower(Z, X).kw * 1e3;
          Z && Z.unit === "W" && (Se = Z.val);
          const Q = O.animation_threshold ?? ((Be = r.wind) == null ? void 0 : Be.animation_threshold) ?? 50, k = Se >= Q;
          this._applyFlowAnimation(H, "flow-wind", !1, t(Se / 1e3, 3), o && k);
        } else
          this._applyFlowAnimation(H, "flow-wind", !1, "1.5s", !1);
    }
  }
}
customElements.get("energy-station-card") || customElements.define("energy-station-card", Ri);
window.customCards = window.customCards || [];
window.customCards.some((pt) => pt.type === "energy-station-card") || window.customCards.push({
  type: "energy-station-card",
  name: "Energy Station Card",
  description: "Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",
  preview: !0,
  documentationURL: "https://github.com/custom-cards/energy-station-card"
});
export {
  Ri as EnergyStationCard
};
