(function(it,j){typeof exports=="object"&&typeof module<"u"?j(exports):typeof define=="function"&&define.amd?define(["exports"],j):(it=typeof globalThis<"u"?globalThis:it||self,j(it.EnergyStationPanel={}))})(this,function(it){"use strict";var Gd=Object.defineProperty;var Hd=(it,j,pe)=>j in it?Gd(it,j,{enumerable:!0,configurable:!0,writable:!0,value:pe}):it[j]=pe;var ct=(it,j,pe)=>Hd(it,typeof j!="symbol"?j+"":j,pe);const j={title:"Energy Station",view_mode:"3d",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,appearance:{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"},controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,import_day_entity:"",import_night_entity:"",show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0,show_night_savings:!0,show_net_benefit:!0},outages:{show:!0,region:"kyiv-region",group:"6.1",source:"auto",status_entity:"",next_outage_entity:"",next_power_entity:""}},pe='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',ke={sun:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${pe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${pe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${pe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,wind_turbine:`<svg width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${pe} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${pe} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};function Ta(){return`
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
  `}function Ia(e,t){var i,n;return`
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
              <span class="es-3d-title">${t("solar")||"Сонячні панелі"}</span>
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
              <span class="es-3d-title">${t("wind")||"Вітрогенерація"}</span>
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
              <span class="es-3d-title">${t("grid")||"Електромережа"}</span>
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

          <div class="es-3d-outage-mini" id="gridOutageMini3D" style="${((i=e==null?void 0:e.outages)==null?void 0:i.show)===!1?"display: none;":""}">
            <span id="gridOutageMiniGroup3D">🕯️ Група ${(((n=e==null?void 0:e.outages)==null?void 0:n.group)||"6.1").replace(",",".")}</span>
            <span id="gridOutageMiniStatus3D">...</span>
          </div>
        </div>

      </div>

      <!-- CENTER ROW: DEYE HYBRID INVERTER -->
      <div class="es-3d-inverter-center">
        <div class="es-3d-inverter-card">
          <div class="es-3d-card-header">
            <span class="es-3d-badge" style="background: rgba(6,182,212,0.15); color: #22d3ee; border: 1px solid rgba(6,182,212,0.3);">
              ${t("inverter_title")||"ГІБРИДНИЙ ІНВЕРТОР"}
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
              <span class="es-3d-title">${t("battery")||"Система накопичення (АКБ)"}</span>
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
              <span class="es-3d-title">${t("house")||"Гарантоване навантаження"}</span>
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
                    ${t("smart_boiler")||"Розумний Бойлер (ГВП)"}
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
  `}function pt(e,t){if(e){typeof e.setAttribute=="function"&&e.setAttribute("class",t);try{e.className=t}catch{}}}function Ba(e,t,i){var Se,Me,$e,Ge,fe,ve,je,at;if(!e||!t)return;const n=te=>e.getElementById(te),o=n("solarPower3D");o&&(o.textContent=t.solarPowerStr);const r=n("solarStatus3D");r&&(r.textContent=t.solarStatusStr);const a=n("solarYieldToday3D");if(a&&(a.textContent=t.solarYieldTodayStr),t.pv1){const te=n("pv1Power3D"),ne=n("pv1V3D");te&&(te.textContent=t.pv1.powerStr),ne&&(ne.textContent=t.pv1.specStr)}if(t.pv2){const te=n("pv2Power3D"),ne=n("pv2V3D");te&&(te.textContent=t.pv2.powerStr),ne&&(ne.textContent=t.pv2.specStr)}if(t.pv3){const te=n("pv3Power3D"),ne=n("pv3V3D");te&&(te.textContent=t.pv3.powerStr),ne&&(ne.textContent=t.pv3.specStr)}const s=n("conduitSolar3D");s&&(s.style.display=t.solarPowerKw>.015?"block":"none");const l=n("windPower3D");l&&(l.textContent=t.windPowerStr);const d=n("windStatus3D");d&&(d.textContent=t.windStatusStr);const c=n("windRotor3D");c&&pt(c,t.windPowerKw>.005?"rotor-spinning":"rotor-idle");const b=n("turb1Power3D"),h=n("turb1Rpm3D");b&&(b.textContent=t.turb1PowerStr),h&&(h.textContent=t.turb1RpmStr);const _=n("turb2Power3D"),p=n("turb2Status3D");_&&(_.textContent=t.turb2PowerStr),p&&(p.textContent=t.turb2StatusStr);const y=n("conduitWind3D");y&&(y.style.display=t.windPowerKw>.005?"block":"none");const m=n("gridPower3D");m&&(m.textContent=t.gridPowerStr);const w=n("gridDirection3D");w&&(w.textContent=t.gridDirectionStr);const f=n("gridVoltage3D");f&&(f.textContent=t.gridVoltageStr);const u=n("gridCurrent3D");u&&(u.textContent=t.gridCurrentStr);const g=n("gridBadge3D"),v=n("gridDot3D"),k=n("gridBeacon3D"),T=n("flowGrid3D");t.isBlackout?(g&&(g.textContent="🚨 "+(i("blackout_alert")||"БЛЕКАУТ / ВІДКЛЮЧЕНО"),g.style.cssText="background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.5); font-weight: bold;"),v&&(v.style.background="#ef4444",pt(v,"es-3d-dot beacon-light")),k&&(k.style.display="block"),T&&(T.style.display="none")):(g&&(g.textContent=i("grid_stable")||"Живлення стабільне",g.style.cssText="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"),v&&(v.style.background="#3b82f6",pt(v,"es-3d-dot")),k&&(k.style.display="none"),T&&(Math.abs(t.gridPowerKw)>.015?(T.style.display="block",t.gridPowerKw>0?(pt(T,"conduit-flow glow-blue"),T.setAttribute("stroke","#3b82f6")):(pt(T,"conduit-flow conduit-flow-rev glow-green"),T.setAttribute("stroke","#10b981"))):T.style.display="none"));const N=n("gridOutageMini3D"),I=n("gridOutageMiniGroup3D"),O=n("gridOutageMiniStatus3D");N&&(t.outageShow===!1?N.style.display="none":(N.style.display="flex",t.outageMini&&(I&&(I.textContent=t.outageMini.groupText),O&&(O.textContent=t.outageMini.statusText),N.classList&&(t.outageMini.state==="off"?(Me=(Se=N.classList).add)==null||Me.call(Se,"is-off"):(Ge=($e=N.classList).remove)==null||Ge.call($e,"is-off"),t.outageMini.state==="on"?(ve=(fe=N.classList).add)==null||ve.call(fe,"is-on"):(at=(je=N.classList).remove)==null||at.call(je,"is-on")))));const U=n("invStatus3D"),P=n("invDot3D");U&&(U.textContent=t.invStatusStr,U.style.color=t.isBlackout?"#f59e0b":"#10b981"),P&&(P.style.background=t.isBlackout?"#f59e0b":"#10b981");const S=n("invLcdPower3D");S&&(S.textContent=t.invLcdPowerStr);const L=n("invTempAc3D");L&&(L.textContent=t.invTempAcStr);const E=n("invTempDc3D");E&&(E.textContent=t.invTempDcStr);const C=n("invSelfPower3D");C&&(C.textContent=t.invSelfStr);const B=n("batPower3D"),$=n("batDirection3D"),D=n("batSocText3D"),K=n("batSocCircle3D"),ee=n("batModeLabel3D"),le=n("batCardWrapper3D"),ae=n("batDot3D"),_e=n("batBadge3D"),G=n("flowBat3D");if(D&&(D.textContent=t.batSoc+"%"),K){const ne=201-201*Math.min(Math.max(t.batSoc,0),100)/100;K.setAttribute("stroke-dashoffset",ne)}const Q=t.isDischarging?"#ef4444":"#10b981";["batBar1_3D","batBar2_3D","batBar3_3D","batBar4_3D"].forEach(te=>{const ne=n(te);ne&&ne.setAttribute("fill",Q)}),t.isDischarging?(G&&(G.style.display="block",pt(G,"conduit-flow conduit-flow-rev glow-red"),G.setAttribute("stroke","#ef4444")),K&&(K.setAttribute("stroke","#ef4444"),pt(K,"glow-red")),ee&&(ee.textContent=i("discharging")||"РОЗРЯД",ee.setAttribute("fill","#ef4444")),ae&&(ae.style.background="#ef4444",pt(ae,"es-3d-dot beacon-light")),_e&&(_e.style.cssText="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.4);"),le&&le.classList.add("es-3d-card-bat-discharge"),$&&($.style.color="#ef4444",$.textContent="↑ "+(i("battery_discharging")||"Розряджається")+" · "+t.batCurrentStr),B&&(B.style.color="#f87171",B.textContent=t.batPowerStr)):t.isCharging?(G&&(G.style.display="block",pt(G,"conduit-flow glow-green"),G.setAttribute("stroke","#10b981")),K&&(K.setAttribute("stroke","#10b981"),pt(K,"glow-green")),ee&&(ee.textContent=i("charging")||"ЗАРЯД",ee.setAttribute("fill","#10b981")),ae&&(ae.style.background="#10b981",pt(ae,"es-3d-dot")),_e&&(_e.style.cssText="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"),le&&le.classList.remove("es-3d-card-bat-discharge"),$&&($.style.color="#10b981",$.textContent="↓ "+(i("battery_charging")||"Заряджається")+" · "+t.batCurrentStr),B&&(B.style.color="#ffffff",B.textContent=t.batPowerStr)):(G&&(G.style.display="none"),le&&le.classList.remove("es-3d-card-bat-discharge"),$&&($.style.color="#94a3b8",$.textContent=i("battery_idle")||"Очікування"),B&&(B.style.color="#ffffff",B.textContent=t.batPowerStr));const W=n("batBusStats3D");W&&(W.textContent=t.batBusStatsStr);const de=n("batEstTime3D");if(de&&(de.textContent=t.batEstTimeStr),t.rack1){const te=n("rack1Soc3D"),ne=n("rack1Power3D"),Le=n("rack1V3D"),V=n("rack1T3D"),Z=n("rack1Delta3D");te&&(te.textContent=t.rack1.socStr),ne&&(ne.textContent=t.rack1.powerStr,ne.style.color=t.isDischarging?"#f87171":"#10b981"),Le&&(Le.textContent=t.rack1.voltageStr),V&&(V.textContent=t.rack1.tempStr),Z&&(Z.textContent=t.rack1.deltaStr)}if(t.rack2){const te=n("rack2Soc3D"),ne=n("rack2Power3D"),Le=n("rack2V3D"),V=n("rack2T3D"),Z=n("rack2Delta3D");te&&(te.textContent=t.rack2.socStr),ne&&(ne.textContent=t.rack2.powerStr,ne.style.color=t.isDischarging?"#f87171":"#10b981"),Le&&(Le.textContent=t.rack2.voltageStr),V&&(V.textContent=t.rack2.tempStr),Z&&(Z.textContent=t.rack2.deltaStr)}const ie=n("housePower3D");ie&&(ie.textContent=t.housePowerStr);const me=n("houseStatus3D");me&&(me.textContent=t.houseStatusStr);const Ye=n("houseDayTotal3D");Ye&&(Ye.textContent=t.houseDayTotalStr);const ot=n("boilerPower3D"),gt=n("boilerTemp3D"),Ne=n("boilerStatus3D"),Ae=n("flowBoiler3D");ot&&(ot.textContent=t.boilerPowerStr),gt&&(gt.textContent=t.boilerTempStr),Ne&&(Ne.textContent=t.boilerStatusStr),Ae&&(Ae.style.display=t.boilerPowerKw>.05?"block":"none");const rt=n("houseOtherPower3D");rt&&(rt.textContent=t.otherPowerStr)}const Na="https://raw.githubusercontent.com/Baskerville42/outage-data-ua/main/data",tn={"kyiv-region":{uk:"Київська обл.",en:"Kyiv Oblast",jsonFile:"kyiv-region.json"},kyiv:{uk:"м. Київ",en:"Kyiv City",jsonFile:"kyiv.json"},dnipro:{uk:"Дніпропетровська обл.",en:"Dnipro Oblast",jsonFile:"dnipro.json"},odesa:{uk:"Одеська область",en:"Odesa Oblast",jsonFile:"odesa.json"}},Hn=new Map,Aa=5*60*1e3;function La(e){const i=String(e).trim().replace(",",".").toUpperCase().replace(/^GPV/,"").trim()||"6.1";return{key:`GPV${i}`,label:i}}function Da(e=new Date){const t="Europe/Kyiv",i=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",weekday:"short",hour12:!1}),n={};for(const p of i.formatToParts(e))n[p.type]=p.value;let o=parseInt(n.hour,10);o===24&&(o=0);const r=parseInt(n.minute,10)||0,a=`${n.year}-${n.month}-${n.day}`,s=new Date(`${a}T12:00:00Z`),l=new Date(s.getTime()+24*60*60*1e3),c=new Intl.DateTimeFormat("en-CA",{timeZone:"UTC",year:"numeric",month:"2-digit",day:"2-digit"}).format(l),h={Mon:"1",Tue:"2",Wed:"3",Thu:"4",Fri:"5",Sat:"6",Sun:"7"}[n.weekday]||"1",_=String(parseInt(h,10)%7+1);return{dateStr:a,tomorrowDateStr:c,hour:o,minute:r,minuteInDay:o*60+r,slotIndex:Math.min(47,o*2+(r>=30?1:0)),timeStr:`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}`,weekdayIso:h,tomorrowWeekdayIso:_}}function Pa(e){const t=new Date(Number(e)*1e3);return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Kyiv",year:"numeric",month:"2-digit",day:"2-digit"}).format(t)}function qn(e){const t=new Array(48).fill("on");if(!e||typeof e!="object")return t;for(let i=1;i<=24;i++){const n=e[String(i)]||"yes",o=(i-1)*2;n==="no"?(t[o]="off",t[o+1]="off"):n==="first"?(t[o]="off",t[o+1]="on"):n==="second"?(t[o]="on",t[o+1]="off"):n==="maybe"?(t[o]="maybe",t[o+1]="maybe"):n==="mfirst"?(t[o]="maybe",t[o+1]="on"):n==="msecond"?(t[o]="on",t[o+1]="maybe"):(t[o]="on",t[o+1]="on")}return t}function Ei(e){const t=e*30,i=Math.floor(t/60),n=t%60;return`${String(i).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Un(e){if(!Array.isArray(e)||e.length===0)return[];const t=[];let i=null;for(let n=0;n<e.length;n++){const o=e[n];o==="off"||o==="maybe"?i&&i.type===o?i.endSlot=n+1:(i&&t.push(hn(i)),i={startSlot:n,endSlot:n+1,type:o}):i&&(t.push(hn(i)),i=null)}return i&&t.push(hn(i)),t}function hn(e){return{startSlot:e.startSlot,endSlot:e.endSlot,start:Ei(e.startSlot),end:Ei(e.endSlot),durationMin:(e.endSlot-e.startSlot)*30,type:e.type}}function Yn(e,t="uk"){const i=Math.max(0,Math.round(e)),n=Math.floor(i/60),o=i%60;return t==="en"?n>0&&o>0?`${n}h ${o}m`:n>0?`${n}h`:`${o}m`:n>0&&o>0?`${n} год ${o} хв`:n>0?`${n} год`:`${o} хв`}function Ra(e,t,i){const n=i.slotIndex,r=(e[n]||"on")==="off",a=[...e];t&&a.push(...t);for(let s=n+1;s<a.length;s++){const l=a[s]||"on",d=l==="off";if(r&&l!=="off"){const b=s*30-i.minuteInDay;return{type:"on",isTomorrow:s>=48,atTime:Ei(s%48),minutesLeft:Math.max(1,b)}}if(!r&&d){const b=s*30-i.minuteInDay;return{type:"off",isTomorrow:s>=48,atTime:Ei(s%48),minutesLeft:Math.max(1,b)}}}return null}function Ma(e,t={},i=new Date,n=null){var T,N,I,O,U,P,S,L;const o=tn[t.region]?t.region:"kyiv-region",r=tn[o],{key:a,label:s}=La(t.group||"6.1"),l=Da(i);let d=null,c=null,b=!1,h=!1;if((T=e==null?void 0:e.fact)!=null&&T.data&&typeof e.fact.data=="object")for(const[E,C]of Object.entries(e.fact.data)){if(!C||typeof C!="object")continue;const B=Pa(E);B===l.dateStr&&C[a]?(d=C[a],b=!0):B===l.tomorrowDateStr&&C[a]&&(c=C[a],h=!0)}!d&&((O=(I=(N=e==null?void 0:e.preset)==null?void 0:N.data)==null?void 0:I[a])!=null&&O[l.weekdayIso])&&(d=e.preset.data[a][l.weekdayIso]),!c&&((S=(P=(U=e==null?void 0:e.preset)==null?void 0:U.data)==null?void 0:P[a])!=null&&S[l.tomorrowWeekdayIso])&&(c=e.preset.data[a][l.tomorrowWeekdayIso]);const _=!!d,p=d?qn(d):new Array(48).fill("on"),y=c?qn(c):null,m=Un(p),w=y?Un(y):[],f=p.reduce((E,C)=>E+(C==="off"?30:0),0),u=y?y.reduce((E,C)=>E+(C==="off"?30:0),0):null;let g=_?p[l.slotIndex]:"unknown",v=_?Ra(p,y,l):null;const k=t.source||"auto";if(n!=null&&n.statusRaw&&(k==="ha_entity"||!_&&k==="auto")){const E=String(n.statusRaw).toLowerCase();E.includes("outage")||E.includes("off")||E.includes("emergency")||E==="false"?g="off":(E.includes("connect")||E.includes("on")||E==="true")&&(g="on")}return{regionId:o,regionLabelUk:r.uk,regionLabelEn:r.en,groupKey:a,groupLabel:s,hasData:_,isFactToday:b,isFactTomorrow:h,todayDateStr:l.dateStr,tomorrowDateStr:l.tomorrowDateStr,currentSlotIndex:l.slotIndex,minuteInDay:l.minuteInDay,timeStr:l.timeStr,currentStatus:g,nextEvent:v,todaySlots:p,tomorrowSlots:y,todayIntervals:m,tomorrowIntervals:w,todayOffHours:+(f/60).toFixed(1),tomorrowOffHours:u!==null?+(u/60).toFixed(1):null,lastUpdatedStr:((L=e==null?void 0:e.fact)==null?void 0:L.update)||Fa(e==null?void 0:e.lastUpdated)||"",isGridBlackout:(n==null?void 0:n.isGridBlackout)??null,haNextOutageRaw:(n==null?void 0:n.nextOutageRaw)||null,haNextPowerRaw:(n==null?void 0:n.nextPowerRaw)||null}}function Fa(e){if(!e)return"";try{const t=new Date(e);return isNaN(t.getTime())?"":new Intl.DateTimeFormat("uk-UA",{timeZone:"Europe/Kyiv",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t)}catch{return""}}async function Oa(e="kyiv-region",t=globalThis.fetch,i=!1){const n=tn[e]?e:"kyiv-region",o=Hn.get(n),r=Date.now();if(!i&&o&&r-o.fetchedAt<Aa)return o.data;if(typeof t!="function")return(o==null?void 0:o.data)||null;const a=tn[n].jsonFile,s=`${Na}/${a}${i?`?t=${r}`:""}`;try{const l=await t(s,{cache:i?"no-store":"default"});if(!l.ok)throw new Error(`HTTP ${l.status}`);const d=await l.json();return Hn.set(n,{data:d,fetchedAt:r}),d}catch(l){if(o!=null&&o.data)return o.data;throw l}}function Va(){return`
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
  `}function jn(e,t={}){const i=t.lang==="en"?"en":"uk",n=i==="en",o=t.selectedDay==="tomorrow"&&e.tomorrowSlots?"tomorrow":"today",r=!!t.loading,a=t.error||null,s=!!t.is3D,l=n?e.regionLabelEn:e.regionLabelUk,d=n?"Outage Schedule":"Відключення світла",c=n?`Group ${e.groupLabel}`:`Група ${e.groupLabel}`,b=o==="tomorrow"?e.tomorrowSlots:e.todaySlots,h=o==="tomorrow"?e.tomorrowIntervals:e.todayIntervals,_=o==="tomorrow"?e.tomorrowOffHours:e.todayOffHours,p=o==="today";let y=n?"Schedule unavailable":"Графік завантажується...",m="#94a3b8",w="unknown";a&&!e.hasData?(y=n?"Error loading schedule":"Помилка завантаження",m="#f87171",w="off"):(e.hasData||e.currentStatus!=="unknown")&&(e.currentStatus==="off"?(y=n?"Scheduled Outage":"Відключення за графіком",m="#f87171",w="off"):e.currentStatus==="maybe"?(y=n?"Possible Outage":"Можливе відключення",m="#fbbf24",w="maybe"):(y=n?"Power ON (Schedule)":"Світло є (за графіком)",m="#34d399",w="on"));let f="";if(e.nextEvent){const P=Yn(e.nextEvent.minutesLeft,i),S=e.nextEvent.isTomorrow?n?" (tmrw)":" (завтра)":"";e.nextEvent.type==="off"?f=n?`Off in ${P} (${e.nextEvent.atTime}${S})`:`До відкл.: ${P} (о ${e.nextEvent.atTime}${S})`:f=n?`Back in ${P} (${e.nextEvent.atTime}${S})`:`Увімкнення: ${e.nextEvent.atTime}${S} (${P})`}else e.hasData&&(f=n?"No changes expected today":"Без змін до кінця доби");let u="";e.isGridBlackout===!0&&e.currentStatus==="on"?u=`<div class="es-outage-grid-verify warn es-mono">
      <span>⚠️ ${n?"Actual Grid: DOWN (Unscheduled)":"Факт: мережа знеструмлена поза графіком"}</span>
    </div>`:e.isGridBlackout===!1&&e.currentStatus==="off"&&(u=`<div class="es-outage-grid-verify bonus es-mono">
      <span>⚡ ${n?"Actual Grid: Connected":"Факт: світло поки є (мережа підключена)"}</span>
    </div>`);const g=(b||[]).map((P,S)=>{const L=p&&S<e.currentSlotIndex,E=p&&S===e.currentSlotIndex,C=Ei(S),B=Ei(S+1);return`<div class="es-outage-slot ${P} ${L?"past":""} ${E?"current":""}" title="${C}–${B}: ${P==="off"?n?"Outage":"Відключення":P==="maybe"?n?"Possible outage":"Можливе відключення":n?"Power ON":"Світло є"}"></div>`}).join(""),v=(e.minuteInDay/1440*100).toFixed(2),k=p?`<div class="es-outage-now-needle" style="left: ${v}%;" title="${e.timeStr}"></div>`:"";let T="";!e.hasData&&!r&&!a?T=`<span class="es-outage-win-chip none">${n?"Waiting for schedule data...":"Очікування даних графіка..."}</span>`:h.length===0?T=`<span class="es-outage-win-chip none">✅ ${n?"No outages scheduled":"Відключень не заплановано"}</span>`:T=h.map(P=>{const S=p&&e.currentSlotIndex>=P.startSlot&&e.currentSlotIndex<P.endSlot,L=p&&e.currentSlotIndex>=P.endSlot,E=P.type==="maybe"?"🟡":"🔴";return`<span class="es-outage-win-chip ${P.type} ${S?"active":""} ${L?"past":""} es-mono">${E} ${P.start}–${P.end}</span>`}).join("");const N=_!==null?n?`No power: ${_}h`:`Без світла: ${_} год`:"",I=e.lastUpdatedStr?n?`Updated: ${e.lastUpdatedStr}`:`Оновлено: ${e.lastUpdatedStr}`:"",O=o==="tomorrow"?n?"Tomorrow":"Завтра":n?"Today":"Сьогодні";return`
    <div class="es-outage-card ${`${s?"es-outage-card-3d":""} ${w==="off"?"is-off":w==="on"?"is-on":""}`}" data-outage-card="1">
      <div class="es-outage-header">
        <div class="es-outage-title-wrap">
          <span style="font-size: 14px;">🕯️</span>
          <span class="es-outage-title">${d}</span>
          <span class="es-outage-group-pill es-mono" data-action="edit-outage" title="${n?"Configure region & group":"Налаштувати регіон та чергу"}">${l} · ${c}</span>
        </div>
        <div class="es-outage-actions">
          ${e.tomorrowSlots?`
            <button type="button" class="es-outage-tab-btn ${o==="today"?"active":""}" data-outage-day="today">${n?"Today":"Сьогодні"}</button>
            <button type="button" class="es-outage-tab-btn ${o==="tomorrow"?"active":""}" data-outage-day="tomorrow">${n?"Tmrw":"Завтра"}</button>
          `:""}
          <button type="button" class="es-outage-refresh-btn" data-action="refresh-outage" title="${n?"Refresh schedule":"Оновити графік"}">${r?"⏳":"↻"}</button>
        </div>
      </div>

      <div class="es-outage-status-row">
        <div class="es-outage-status-badge" style="color: ${m};">
          <span class="es-outage-dot ${w}"></span>
          <span>${y}</span>
        </div>
        <div class="es-outage-countdown es-mono">${f}</div>
      </div>

      ${u}

      <div class="es-outage-timeline-wrap">
        <div class="es-outage-timeline">
          ${g}
          ${k}
        </div>
        <div class="es-outage-ticks es-mono">
          <span>00</span><span>03</span><span>06</span><span>09</span><span>12</span><span>15</span><span>18</span><span>21</span><span>24</span>
        </div>
      </div>

      <div class="es-outage-windows">
        ${T}
      </div>

      <div class="es-outage-footer es-mono">
        <span>${O}${N?` · ${N}`:""}</span>
        <span>${I}</span>
      </div>
    </div>
  `}class za extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general",this._isInternalChange=!1,this._debounceTimer=null,this._rendered=!1,this._isDialogExpanded=!1}set hass(t){this._hass=t}setConfig(t){if(this._config=JSON.parse(JSON.stringify(t||j)),this._isInternalChange){this._isInternalChange=!1;return}this.render()}connectedCallback(){this._rendered||this.render();const t=()=>{typeof window<"u"&&window.innerWidth>=850&&this._applyExpand(!0)};t(),setTimeout(t,80),setTimeout(t,250)}_findHuiDialog(){let t=this;for(;t;){if(t.tagName&&t.tagName.toLowerCase()==="hui-dialog-edit-card")return t;if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(typeof document<"u"){const i=document.querySelector("hui-dialog-edit-card")||document.querySelector("ha-dialog-edit-card");if(i)return i;try{const n=document.querySelector("home-assistant");if(n!=null&&n.shadowRoot){const o=n.shadowRoot.querySelector("hui-dialog-edit-card")||n.shadowRoot.querySelector("ha-dialog-edit-card");if(o)return o;const r=n.shadowRoot.querySelectorAll("*");for(const a of r)if(a.shadowRoot){const s=a.shadowRoot.querySelector("hui-dialog-edit-card")||a.shadowRoot.querySelector("ha-dialog-edit-card");if(s)return s}}}catch{}}return null}_findHaDialog(t){if(t!=null&&t.shadowRoot){const n=t.shadowRoot.querySelector("ha-dialog")||t.shadowRoot.querySelector("mwc-dialog");if(n)return n}let i=this;for(;i;){if(i.tagName&&(i.tagName.toLowerCase()==="ha-dialog"||i.tagName.toLowerCase()==="mwc-dialog"))return i;if(i.parentElement)i=i.parentElement;else if(i.parentNode)i=i.parentNode;else if(i.getRootNode&&i.getRootNode().host)i=i.getRootNode().host;else break}return typeof document<"u"?document.querySelector("ha-dialog")||document.querySelector("mwc-dialog"):null}_applyExpand(t){var o,r,a;this._isDialogExpanded=t;const i=this._findHuiDialog(),n=this._findHaDialog(i);if(t){if(i){typeof i._enlarge=="function"&&!i.large?i._enlarge():(i.large=!0,i.setAttribute("large",""));try{if(i.shadowRoot){let s=i.shadowRoot.getElementById("energy-station-wide-style");s||(s=document.createElement("style"),s.id="energy-station-wide-style",s.textContent=`
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
              `,i.shadowRoot.appendChild(s))}}catch{}}if(n){n.style.setProperty("--mdc-dialog-min-width","95vw","important"),n.style.setProperty("--mdc-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-width","95vw","important"),n.style.setProperty("--mdc-dialog-width","95vw","important");try{const s=(o=n.shadowRoot)==null?void 0:o.querySelector(".mdc-dialog__surface");s&&(s.style.setProperty("max-width","96vw","important"),s.style.setProperty("width","95vw","important"))}catch{}}}else{if(i){typeof i._enlarge=="function"&&i.large?i._enlarge():(i.large=!1,i.removeAttribute("large"));try{const s=(r=i.shadowRoot)==null?void 0:r.getElementById("energy-station-wide-style");s&&s.remove()}catch{}}if(n){n.style.removeProperty("--mdc-dialog-min-width"),n.style.removeProperty("--mdc-dialog-max-width"),n.style.removeProperty("--ha-dialog-max-width"),n.style.removeProperty("--ha-dialog-width"),n.style.removeProperty("--mdc-dialog-width");try{const s=(a=n.shadowRoot)==null?void 0:a.querySelector(".mdc-dialog__surface");s&&(s.style.removeProperty("max-width"),s.style.removeProperty("width"))}catch{}}}this._updateExpandBtn()}_updateExpandBtn(){var n;const t=(n=this.shadowRoot)==null?void 0:n.getElementById("btnToggleExpand");if(!t)return;const i=this._isDialogExpanded;t.innerHTML=i?"❐ Звичайний розмір":"⛶ На весь екран",t.title=i?"Згорнути вікно налаштувань до звичайного розміру":"Розширити вікно налаштувань на весь екран"}_flushConfig(){this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null,this._dispatchConfig())}_dispatchConfig(){if(!this._config)return;this._isInternalChange=!0;const t=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(t)}_valueChanged(t,i,n=!1){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const o=t.split(".");let r=this._config;for(let a=0;a<o.length-1;a++)r[o[a]]||(r[o[a]]={}),r=r[o[a]];r[o[o.length-1]]=i,this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),n?this._dispatchConfig():this._debounceTimer=setTimeout(()=>{this._dispatchConfig()},140)}_switchTab(t){this._flushConfig(),this._currentTab=t,this.render()}_applyPreset(t){this._config=JSON.parse(JSON.stringify(this._config||j)),t==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):t==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load"),this._dispatchConfig(),this.render()}render(){var a,s,l,d,c,b,h,_,p,y,m,w,f,u,g,v,k,T,N,I,O,U,P,S,L,E,C,B,$,D,K,ee,le,ae,_e,G,Q,W,de,ie,me,Ye,ot,gt,Ne,Ae,rt,Se,Me,$e,Ge,fe,ve,je,at,te,ne,Le,V,Z,Ee,Fe,Te,ce,ge,Y,et,Ke,Je,pi,He,fi,gi,Vt,zt,ui,Wt,st,xt,Pi,Gt,lt,Qe,dt,wt,kt,St,Et,Ct,$t,Dt,Pt,Rt,Ht,hi,bi,qt,Ut,yi,_i,Tt,Yt,jt,ut,mi,Kt,Jt,Qt;if(!this._config)return;this._rendered=!0;const t=this._config,i=(a=this.shadowRoot)==null?void 0:a.activeElement;let n=null,o=null,r=null;if(i&&(i.id?n=`#${i.id}`:((s=i.dataset)==null?void 0:s.idx)!==void 0&&i.className&&(n=`.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`),"selectionStart"in i&&"selectionEnd"in i&&(o=i.selectionStart,r=i.selectionEnd)),this.shadowRoot.innerHTML=`
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
            ${this._isDialogExpanded?"❐ Звичайний розмір":"⛶ На весь екран"}
          </button>
          <button class="preset-badge" id="btnPresetEsp" title="Швидко застосувати типові сенсори прошивки ESPHome Deye">⚡ ESPHome Deye</button>
          <button class="preset-badge" id="btnPresetSolarman" title="Швидко застосувати сенсори інтеграції Solarman">☀️ Solarman</button>
        </div>
      </div>

      <!-- TABS -->
      <div class="tabs">
        <button class="tab-btn ${this._currentTab==="general"?"active":""}" data-tab="general">⚙️ Загальні</button>
        <button class="tab-btn ${this._currentTab==="solar"?"active":""}" data-tab="solar">☀️ PV Сонячні</button>
        <button class="tab-btn ${this._currentTab==="inverter"?"active":""}" data-tab="inverter">⚡ Інвертор & AUX</button>
        <button class="tab-btn ${this._currentTab==="battery"?"active":""}" data-tab="battery">🔋 Батарея & Стек</button>
        <button class="tab-btn ${this._currentTab==="grid"?"active":""}" data-tab="grid">🌐 Мережа & Авто</button>
        <button class="tab-btn ${this._currentTab==="loads"?"active":""}" data-tab="loads">🏠 Дім & Споживачі</button>
        <button class="tab-btn ${this._currentTab==="tariffs"?"active":""}" data-tab="tariffs">💰 Тарифи</button>
      </div>

      <!-- TAB CONTENT: GENERAL -->
      <div style="display: ${this._currentTab==="general"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">Основні параметри картки</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Назва станції / Заголовок:</label>
              <input type="text" id="title" value="${t.title||"Energy Station"}">
            </div>
            <div class="field-row">
              <label>Максимальна ширина картки (Max Width):</label>
              <select id="cardMaxWidth">
                <option value="1400px" ${t.max_width==="1400px"||!t.max_width?"selected":""}>1400px (Стандартна)</option>
                <option value="1600px" ${t.max_width==="1600px"?"selected":""}>1600px (Широка)</option>
                <option value="1800px" ${t.max_width==="1800px"?"selected":""}>1800px (Дуже широка / 2K)</option>
                <option value="100%" ${t.max_width==="100%"?"selected":""}>100% (На всю ширину панелі)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Тема оформлення (Theme):</label>
              <select id="themeMode">
                <option value="dark" ${t.theme_mode!=="light"?"selected":""}>🌙 Темна (Dark)</option>
                <option value="light" ${t.theme_mode==="light"?"selected":""}>☀️ Світла (Light)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Мова інтерфейсу (Language):</label>
              <select id="cardLanguage">
                <option value="uk" ${t.language!=="en"?"selected":""}>🇺🇦 Українська (UK)</option>
                <option value="en" ${t.language==="en"?"selected":""}>🇬🇧 English (EN)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Масштаб картки (Zoom / Scale):</label>
              <div class="slider-row">
                <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${t.card_scale||1}">
                <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((t.card_scale||1)*100)}%</span>
              </div>
            </div>
            <div class="field-row">
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((l=t.animations)==null?void 0:l.speed)||1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((d=t.animations)==null?void 0:d.speed)||1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${t.show_quick_settings!==!1?"checked":""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((c=t.animations)==null?void 0:c.enabled)!==!1?"checked":""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((b=t.controls)==null?void 0:b.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((h=t.controls)==null?void 0:h.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((_=t.controls)==null?void 0:_.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: SOLAR -->
      <div style="display: ${this._currentTab==="solar"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">☀️ Сонячне поле (PV панелі)</div>
          <div class="fields-grid">
            <div class="field-row full-width">
              <label>Кількість панелей/стрингів (1 - 16):</label>
              <div class="slider-row">
                <input type="range" id="solarPvCount" min="1" max="16" value="${((p=t.solar)==null?void 0:p.pv_count)||3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y=t.solar)==null?void 0:y.pv_count)||3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((m=t.solar)==null?void 0:m.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((w=t.solar)==null?void 0:w.daily_yield_entity)||""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((f=t.solar)==null?void 0:f.target_daily_yield)||55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((u=t.solar)==null?void 0:u.installed_power)!==void 0?t.solar.installed_power:12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((g=t.solar)==null?void 0:g.show_metrics)!==!1?"checked":""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((v=t.solar)==null?void 0:v.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((k=t.solar)==null?void 0:k.pv_count)||3}).map((ue,z)=>{var yt,_t;const q=z+1,J=((_t=(yt=t.solar)==null?void 0:yt.strings)==null?void 0:_t[z])||{},Ze=`sensor.deye_12k_inverter_pv${q}_voltage`,ht=`sensor.deye_12k_inverter_pv${q}_current`,bt=`sensor.deye_12k_inverter_pv${q}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${q} (Стрінг ${q})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${z}" value="${J.name||`PV ${q}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${q} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${z}" value="${J.voltage_entity!==void 0?J.voltage_entity:Ze}" placeholder="${Ze}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${q} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${z}" value="${J.current_entity!==void 0?J.current_entity:ht}" placeholder="${ht}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${q} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${z}" value="${J.capacity_kw!==void 0?J.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${q} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${z}" value="${J.power_entity!==void 0?J.power_entity:bt}" placeholder="${bt} (авто P = U × I)">
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: INVERTER & AUX -->
      <div style="display: ${this._currentTab==="inverter"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">⚡ Гібридний інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Модель / Назва на шильдику:</label>
              <input type="text" id="invModel" value="${((T=t.inverter)==null?void 0:T.model_name)||"DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((N=t.inverter)==null?void 0:N.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((I=t.inverter)==null?void 0:I.show_self_consumption)!==!1?"checked":""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((O=t.inverter)==null?void 0:O.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((U=t.inverter)==null?void 0:U.standby_power)!==void 0?t.inverter.standby_power:100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((P=t.inverter)==null?void 0:P.standby_power)!==void 0?t.inverter.standby_power:100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((S=t.inverter)==null?void 0:S.ac_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((L=t.inverter)==null?void 0:L.dc_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((E=t.inverter)==null?void 0:E.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((C=t.inverter)==null?void 0:C.current_entity)||""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((B=t.inverter)==null?void 0:B.frequency_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${(($=t.aux)==null?void 0:$.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((D=t.aux)==null?void 0:D.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((K=t.aux)==null?void 0:K.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((ee=t.aux)==null?void 0:ee.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((le=t.aux)==null?void 0:le.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((ae=t.aux)==null?void 0:ae.type)==="microinverter"&&(!((_e=t.aux)!=null&&_e.title)||((G=t.aux)==null?void 0:G.title)==="Вітрогенератор")?"Мікроінвертор":((Q=t.aux)==null?void 0:Q.title)||(((W=t.aux)==null?void 0:W.type)==="generator"?"Генератор":((de=t.aux)==null?void 0:de.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((ie=t.aux)==null?void 0:ie.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((me=t.wind)==null?void 0:me.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((Ye=t.wind)==null?void 0:Ye.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((ot=t.wind)==null?void 0:ot.animation_threshold)||((gt=t.aux)==null?void 0:gt.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((Ne=t.wind)==null?void 0:Ne.animation_threshold)||((Ae=t.aux)==null?void 0:Ae.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((rt=t.wind)==null?void 0:rt.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((Se=t.wind)==null?void 0:Se.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((Me=t.wind)==null?void 0:Me.turbine_count)||2}).map((ue,z)=>{var J,Ze;const q=((Ze=(J=t.wind)==null?void 0:J.turbines)==null?void 0:Ze[z])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${z}" value="${q.name||`Вітряк ${z+1}`}" placeholder="Назва (напр. Вітряк ${z+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${z}" value="${q.power_entity||`sensor.wind_turbine_${z+1}_power`}" placeholder="sensor.wind_turbine_${z+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${z}" value="${q.rpm_entity||q.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${z}" value="${q.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${z+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${z}" value="${q.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${z+1}_monthly_energy">
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab==="battery"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Рівень заряду Battery SOC (%) (сенсор):</label>
              <input type="text" id="batSoc" value="${(($e=t.battery)==null?void 0:$e.soc_entity)||""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((Ge=t.battery)==null?void 0:Ge.power_entity)||""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((fe=t.battery)==null?void 0:fe.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((ve=t.battery)==null?void 0:ve.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((je=t.battery)==null?void 0:je.capacity_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((at=t.battery)==null?void 0:at.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((te=t.battery)==null?void 0:te.current_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((ne=t.battery)==null?void 0:ne.temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((Le=t.battery)==null?void 0:Le.cell_delta_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((V=t.battery)==null?void 0:V.charge_daily_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Z=t.battery)==null?void 0:Z.discharge_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ee=t.battery)==null?void 0:Ee.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Fe=t.battery)==null?void 0:Fe.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Te=t.battery)==null?void 0:Te.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((ce=t.battery)==null?void 0:ce.parallel_batteries)||2}).map((ue,z)=>{var Xt,ei,ti,ii;const q=z+1,J=((ei=(Xt=t.battery)==null?void 0:Xt.modules)==null?void 0:ei[z])||((ii=(ti=t.battery)==null?void 0:ti.module_entities)==null?void 0:ii[z])||{},Ze=`sensor.bms_rack${q}_soc`,ht=`sensor.bms_rack${q}_current`,bt=`sensor.bms_rack${q}_voltage`,yt=`sensor.bms_rack${q}_power`,_t=`sensor.bms_rack${q}_temperature`,Zt=`sensor.bms_rack${q}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${q} (Модуль ${q})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${z}" value="${J.name||`Батарея ${q}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${q} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${z}" value="${J.soc_entity!==void 0?J.soc_entity:J.soc!==void 0?J.soc:Ze}" placeholder="${Ze}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${q} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${z}" value="${J.current_entity!==void 0?J.current_entity:ht}" placeholder="${ht}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${q} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${z}" value="${J.voltage_entity!==void 0?J.voltage_entity:J.volt!==void 0?J.volt:bt}" placeholder="${bt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${q} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${z}" value="${J.temperature_entity!==void 0?J.temperature_entity:J.temp!==void 0?J.temp:_t}" placeholder="${_t}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${q} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${z}" value="${J.capacity_kwh!==void 0?J.capacity_kwh:q===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${q} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${z}" value="${J.cell_delta_entity!==void 0?J.cell_delta_entity:J.delta!==void 0?J.delta:Zt}" placeholder="${Zt}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${q} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${z}" value="${J.power_entity!==void 0?J.power_entity:yt}" placeholder="${yt} (авто P = U × I)">
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: GRID & EV -->
      <div style="display: ${this._currentTab==="grid"?"block":"none"};">
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
              <input type="checkbox" id="gridSellingEnabled" ${(ge=t.grid)!=null&&ge.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((Y=t.grid)==null?void 0:Y.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((et=t.grid)==null?void 0:et.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Ke=t.grid)==null?void 0:Ke.auto_calculate)!==!1?"checked":""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Je=t.grid)==null?void 0:Je.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((pi=t.grid)==null?void 0:pi.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((He=t.grid)==null?void 0:He.min_power_threshold)!==void 0?t.grid.min_power_threshold:50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((fi=t.grid)==null?void 0:fi.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((gi=t.grid)==null?void 0:gi.status_entity)||""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Vt=t.grid)==null?void 0:Vt.voltage_threshold)!==void 0?t.grid.voltage_threshold:90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((zt=t.grid)==null?void 0:zt.import_daily_entity)||""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((ui=t.grid)==null?void 0:ui.export_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((Wt=t.grid)==null?void 0:Wt.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((st=t.grid)==null?void 0:st.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🕯️ Графік відключень світла (ДТЕК / Yasno / HA)</div>
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="outagesShow" ${((xt=t.outages)==null?void 0:xt.show)!==!1?"checked":""} style="accent-color: #ef4444;">
              <div>
                <span>Показувати графік відключень світла на картці (2D і 3D)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Відображає 24-годинну шкалу відключень, таймер зворотного відліку та вікна на сьогодні/завтра.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Регіон:</label>
              <select id="outagesRegion">
                <option value="kyiv-region" ${(((Pi=t.outages)==null?void 0:Pi.region)||"kyiv-region")==="kyiv-region"?"selected":""}>Київська область (ДТЕК КРЕМ)</option>
                <option value="kyiv" ${((Gt=t.outages)==null?void 0:Gt.region)==="kyiv"?"selected":""}>м. Київ (ДТЕК / Yasno)</option>
                <option value="dnipro" ${((lt=t.outages)==null?void 0:lt.region)==="dnipro"?"selected":""}>Дніпропетровська область</option>
                <option value="odesa" ${((Qe=t.outages)==null?void 0:Qe.region)==="odesa"?"selected":""}>Одеська область</option>
              </select>
            </div>
            <div class="field-row">
              <label>Група / Черга (напр. 6.1):</label>
              <input type="text" id="outagesGroup" value="${((dt=t.outages)==null?void 0:dt.group)||"6.1"}" placeholder="6.1">
            </div>
            <div class="field-row">
              <label>Джерело даних:</label>
              <select id="outagesSource">
                <option value="auto" ${(((wt=t.outages)==null?void 0:wt.source)||"auto")==="auto"?"selected":""}>Авто (Онлайн графік + перевірка інвертора)</option>
                <option value="json" ${((kt=t.outages)==null?void 0:kt.source)==="json"?"selected":""}>Тільки онлайн графік</option>
                <option value="ha_entity" ${((St=t.outages)==null?void 0:St.source)==="ha_entity"?"selected":""}>Сенсор Home Assistant (Svitlo Yeah / Live)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор стану HA (опціонально):</label>
              <input type="text" id="outagesStatusEntity" value="${((Et=t.outages)==null?void 0:Et.status_entity)||""}" placeholder="sensor.electricity">
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab==="loads"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadAutoCalculate" ${((Ct=t.load)==null?void 0:Ct.auto_calculate)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${(($t=t.load)==null?void 0:$t.separate_export)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((Dt=t.load)==null?void 0:Dt.essential_power_entity)||""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((Pt=t.load)==null?void 0:Pt.daily_house_entity)||""}">
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

          ${(((Rt=t.load)==null?void 0:Rt.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Ht=t.load)==null?void 0:Ht.subloads)||[]).map((ue,z)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${z}" value="${ue.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${z}" style="width: 140px;">
                  <option value="boiler" ${ue.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${ue.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ue.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${ue.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${ue.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${ue.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${ue.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${z}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${z}" value="${ue.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>

      <!-- TAB CONTENT: TARIFFS -->
      <div style="display: ${this._currentTab==="tariffs"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">Двозонний облік тарифів (День / Ніч)</div>
          
          <div class="fields-grid">
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="tariffsEnabled" ${((hi=t.tariffs)==null?void 0:hi.enabled)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((bi=t.tariffs)==null?void 0:bi.currency)||"грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((qt=t.tariffs)==null?void 0:qt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Ut=t.tariffs)==null?void 0:Ut.day_rate)??4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((yi=t.tariffs)==null?void 0:yi.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((_i=t.tariffs)==null?void 0:_i.night_rate)??2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Tt=t.tariffs)==null?void 0:Tt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Yt=t.tariffs)==null?void 0:Yt.export_rate)??5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(ue,z)=>{var q;return`<option value="${z}" ${(((q=t.tariffs)==null?void 0:q.night_start_hour)??23)===z?"selected":""}>${String(z).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(ue,z)=>{var q;return`<option value="${z}" ${(((q=t.tariffs)==null?void 0:q.night_end_hour)??7)===z?"selected":""}>${String(z).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((jt=t.tariffs)==null?void 0:jt.import_day_entity)||""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((ut=t.tariffs)==null?void 0:ut.import_night_entity)||""}" placeholder="sensor.daily_energy_night">
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
              <input type="checkbox" id="tariffShowDailyCost" ${((mi=t.tariffs)==null?void 0:mi.show_daily_cost)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Kt=t.tariffs)==null?void 0:Kt.show_export_income)!==!1?"checked":""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Jt=t.tariffs)==null?void 0:Jt.show_active_badge)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((Qt=t.tariffs)==null?void 0:Qt.show_solar_savings)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `,this._bindEvents(),this._updateExpandBtn(),n){const ue=this.shadowRoot.querySelector(n);if(ue&&(ue.focus(),o!==null&&r!==null&&"setSelectionRange"in ue))try{ue.setSelectionRange(o,r)}catch{}}}_bindEvents(){var a,s,l,d,c,b,h,_,p,y,m,w;const t=this.shadowRoot;(a=t.getElementById("btnToggleExpand"))==null||a.addEventListener("click",()=>{this._applyExpand(!this._isDialogExpanded)}),t.querySelectorAll(".tab-btn").forEach(f=>{f.addEventListener("click",u=>{this._switchTab(u.target.dataset.tab)})}),(s=t.getElementById("btnPresetEsp"))==null||s.addEventListener("click",()=>this._applyPreset("deye_esphome")),(l=t.getElementById("btnPresetSolarman"))==null||l.addEventListener("click",()=>this._applyPreset("deye_solarman"));const i=(f,u)=>{const g=t.getElementById(f);g&&(g.addEventListener("input",v=>this._valueChanged(u,v.target.value,!1)),g.addEventListener("change",v=>this._valueChanged(u,v.target.value,!0)),g.addEventListener("blur",()=>this._flushConfig()))},n=(f,u)=>{const g=t.getElementById(f);g&&g.addEventListener("change",v=>this._valueChanged(u,v.target.checked,!0))},o=(f,u,g,v="")=>{const k=t.getElementById(f);k&&(k.addEventListener("input",T=>{const N=parseFloat(T.target.value);if(g){const I=t.getElementById(g);I&&(I.innerText=`${N}${v}`)}this._valueChanged(u,isNaN(N)?0:N,!1)}),k.addEventListener("change",T=>{const N=parseFloat(T.target.value);this._valueChanged(u,isNaN(N)?0:N,!0)}),k.addEventListener("blur",()=>this._flushConfig()))};i("title","title"),i("themeMode","theme_mode"),i("cardLanguage","language"),(d=t.getElementById("cardScale"))==null||d.addEventListener("input",f=>{const u=parseFloat(f.target.value),g=t.getElementById("cardScaleVal");g&&(g.innerText=`${Math.round(u*100)}%`),this._valueChanged("card_scale",u)}),(c=t.getElementById("cardScale"))==null||c.addEventListener("change",()=>this._flushConfig()),i("cardMaxWidth","max_width"),n("showQuickSettings","show_quick_settings"),i("ctrlSolarCharge","controls.solar_charge_entity"),i("ctrlSellPower","controls.sell_power_entity"),i("ctrlGridCharge","controls.grid_charge_entity"),n("animEnabled","animations.enabled"),o("animSpeed","animations.speed","animSpeedVal","s"),(b=t.getElementById("solarPvCount"))==null||b.addEventListener("input",f=>{const u=parseInt(f.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=u,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<u;){const g=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${g}`,name:`PV ${g}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${g}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${g}_current`,power_entity:`sensor.deye_12k_inverter_pv${g}_power`})}this._valueChanged("solar.pv_count",u,!0),this._valueChanged("solar.strings",this._config.solar.strings,!0),this.render()}),t.querySelectorAll(".pv-str-name-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[g]||(this._config.solar.strings[g]={}),this._config.solar.strings[g].name=u.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-volt-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[g]||(this._config.solar.strings[g]={}),this._config.solar.strings[g].voltage_entity=u.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-curr-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[g]||(this._config.solar.strings[g]={}),this._config.solar.strings[g].current_entity=u.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-power-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[g]||(this._config.solar.strings[g]={}),this._config.solar.strings[g].power_entity=u.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-cap-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[g]||(this._config.solar.strings[g]={}),this._config.solar.strings[g].capacity_kw=parseFloat(u.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)}),f.addEventListener("blur",()=>this._flushConfig())}),i("solarTotalPower","solar.total_power_entity"),i("solarDailyYield","solar.daily_yield_entity"),o("solarTargetDaily","solar.target_daily_yield"),o("solarInstalledPower","solar.installed_power"),n("solarShowMetrics","solar.show_metrics"),i("invModel","inverter.model_name"),i("invPower","inverter.power_entity"),n("invShowSelfConsumption","inverter.show_self_consumption"),i("invSelfConsumptionEntity","inverter.self_consumption_entity"),o("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),i("invTempAc","inverter.ac_temperature_entity"),i("invTempDc","inverter.dc_temperature_entity"),i("invVolt","inverter.voltage_entity"),i("invCurrent","inverter.current_entity"),i("invFreq","inverter.frequency_entity"),(h=t.getElementById("auxType"))==null||h.addEventListener("change",f=>{const u=f.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=u;const v={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[u]||"Мікроінвертор";this._config.aux.title=v;const k=t.getElementById("auxTitle");k&&(k.value=v),this._valueChanged("aux.type",u,!0),this._valueChanged("aux.title",v,!0)}),i("auxTitle","aux.title"),i("auxPower","aux.power_entity"),(_=t.getElementById("windTurbineCount"))==null||_.addEventListener("input",f=>{const u=parseInt(f.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=u,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<u;){const g=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${g}`,name:`Вітряк ${g}`,power_entity:`sensor.wind_turbine_${g}_power`,speed_entity:`sensor.wind_turbine_${g}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",u,!0),this._valueChanged("wind.turbines",this._config.wind.turbines,!0),this.render()}),o("windThreshold","wind.animation_threshold","windThresholdVal","W"),(p=t.getElementById("windThreshold"))==null||p.addEventListener("input",f=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(f.target.value))}),i("windDailyEnergy","wind.daily_energy_entity"),i("windMonthlyEnergy","wind.monthly_energy_entity"),t.querySelectorAll(".turbine-name-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[g]||(this._config.wind.turbines[g]={}),this._config.wind.turbines[g].name=u.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-power-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[g]||(this._config.wind.turbines[g]={}),this._config.wind.turbines[g].power_entity=u.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-speed-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[g]||(this._config.wind.turbines[g]={}),this._config.wind.turbines[g].rpm_entity=u.target.value,this._config.wind.turbines[g].speed_entity=u.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-daily-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[g]||(this._config.wind.turbines[g]={}),this._config.wind.turbines[g].daily_energy_entity=u.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-monthly-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[g]||(this._config.wind.turbines[g]={}),this._config.wind.turbines[g].monthly_energy_entity=u.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),f.addEventListener("blur",()=>this._flushConfig())}),i("batSoc","battery.soc_entity"),i("batPower","battery.power_entity"),i("batPowerSign","battery.power_sign"),i("batVolt","battery.voltage_entity"),i("batCurrent","battery.current_entity"),i("batTemp","battery.temperature_entity"),i("batDelta","battery.cell_delta_entity"),i("batCapacity","battery.capacity_entity"),i("batChargeDaily","battery.charge_daily_entity"),i("batDischargeDaily","battery.discharge_daily_entity"),(y=t.getElementById("batParallelCount"))==null||y.addEventListener("input",f=>{const u=parseInt(f.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=u,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<u;){const g=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${g}`,name:`Батарея ${g}`,soc_entity:`sensor.bms_rack${g}_soc`,current_entity:`sensor.bms_rack${g}_current`,voltage_entity:`sensor.bms_rack${g}_voltage`,power_entity:`sensor.bms_rack${g}_power`,temperature_entity:`sensor.bms_rack${g}_temperature`,cell_delta_entity:`sensor.bms_rack${g}_cell_delta`})}this._valueChanged("battery.parallel_batteries",u,!0),this._valueChanged("battery.modules",this._config.battery.modules,!0),this.render()}),t.querySelectorAll(".bat-mod-name-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].name=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-soc-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].soc_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-curr-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].current_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-volt-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].voltage_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-temp-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].temperature_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-delta-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].cell_delta_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-power-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].power_entity=u.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-cap-inp").forEach(f=>{f.addEventListener("input",u=>{const g=parseInt(u.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[g]||(this._config.battery.modules[g]={}),this._config.battery.modules[g].capacity_kwh=parseFloat(u.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)}),f.addEventListener("blur",()=>this._flushConfig())}),n("gridSellingEnabled","grid.selling_enabled"),n("gridAutoCalculate","grid.auto_calculate"),i("gridPower","grid.power_entity"),i("gridExternalPower","grid.external_power_entity"),i("gridVoltage","grid.voltage_entity"),i("gridStatus","grid.status_entity"),o("gridVoltageThreshold","grid.voltage_threshold"),i("gridPowerSign","grid.power_sign"),o("gridMinThreshold","grid.min_power_threshold"),i("gridImportDaily","grid.import_daily_entity"),i("gridExportDaily","grid.export_daily_entity"),i("gridNonEssential","grid.non_essential_power_entity"),i("gridCarPower","grid.car_power_entity"),n("outagesShow","outages.show"),i("outagesRegion","outages.region"),i("outagesGroup","outages.group"),i("outagesSource","outages.source"),i("outagesStatusEntity","outages.status_entity"),n("loadAutoCalculate","load.auto_calculate"),n("loadSeparateExport","load.separate_export"),i("loadEssential","load.essential_power_entity"),i("loadDailyHouse","load.daily_house_entity");const r=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const f=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${f}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render()};(m=t.getElementById("btnAddSubload"))==null||m.addEventListener("click",r),(w=t.getElementById("btnAddSubloadBottom"))==null||w.addEventListener("click",r),t.querySelectorAll(".btn-del-subload").forEach(f=>{f.addEventListener("click",u=>{var k;const g=u.currentTarget||u.target.closest(".btn-del-subload"),v=parseInt(g.dataset.idx);(k=this._config.load)!=null&&k.subloads&&(this._config.load.subloads.splice(v,1),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render())})}),t.querySelectorAll(".subload-name").forEach(f=>{f.addEventListener("input",u=>{var v,k;const g=parseInt(u.target.dataset.idx);(k=(v=this._config.load)==null?void 0:v.subloads)!=null&&k[g]&&(this._config.load.subloads[g].name=u.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),f.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".subload-icon").forEach(f=>{f.addEventListener("change",u=>{var v,k;const g=parseInt(u.target.dataset.idx);(k=(v=this._config.load)==null?void 0:v.subloads)!=null&&k[g]&&(this._config.load.subloads[g].icon=u.target.value,this._valueChanged("load.subloads",this._config.load.subloads,!0))})}),t.querySelectorAll(".subload-entity").forEach(f=>{f.addEventListener("input",u=>{var v,k;const g=parseInt(u.target.dataset.idx);(k=(v=this._config.load)==null?void 0:v.subloads)!=null&&k[g]&&(this._config.load.subloads[g].entity=u.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),f.addEventListener("blur",()=>this._flushConfig())}),n("tariffsEnabled","tariffs.enabled"),i("tariffCurrency","tariffs.currency"),o("tariffDayRate","tariffs.day_rate"),o("tariffNightRate","tariffs.night_rate"),o("tariffExportRate","tariffs.export_rate"),o("tariffNightStart","tariffs.night_start_hour"),o("tariffNightEnd","tariffs.night_end_hour"),i("tariffImportDayEntity","tariffs.import_day_entity"),i("tariffImportNightEntity","tariffs.import_night_entity"),n("tariffShowDailyCost","tariffs.show_daily_cost"),n("tariffShowExportIncome","tariffs.show_export_income"),n("tariffShowActiveBadge","tariffs.show_active_badge"),n("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",za);/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */var oe=Symbol("NOT_RESOLVED");function Oe(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(i=>String(i)),representTagName:t.representTagName??(()=>e)}}function bn(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}function nn(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}var Wa=Oe("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),Ga=["","~","null","Null","NULL"],Ha=Oe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>Ga.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>"null"}),qa=Oe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:oe,identify:e=>e===null,represent:()=>"null"}),Ua=["","~","null","Null","NULL"],Ya=Oe("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>Ua.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>"null"}),ja=["true","True","TRUE"],Ka=["false","False","FALSE"],Ja=Oe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>ja.indexOf(e)!==-1?!0:Ka.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Qa=["true"],Za=["false"],Xa=Oe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>Qa.indexOf(e)!==-1?!0:Za.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),es=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],ts=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],is=Oe("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>es.indexOf(e)!==-1?!0:ts.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),ns=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),os=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function rs(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function as(e,t){if(t){if(!os.test(e))return oe}else if(!ns.test(e))return oe;const i=rs(e);return Number.isFinite(i)?i:oe}var Kn=Oe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:as,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),ss=new RegExp("^-?(?:0|[1-9][0-9]*)$"),ls=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function ds(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function cs(e,t){if(t){if(!ls.test(e))return oe}else if(!ss.test(e))return oe;const i=ds(e);return Number.isFinite(i)?i:oe}var ps=Oe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:cs,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),fs=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function gs(e){let t=e.replace(/_/g,""),i=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b"))return i*parseInt(t.slice(2),2);if(t.startsWith("0x"))return i*parseInt(t.slice(2),16);if(t.includes(":")){let n=0;for(const o of t.split(":"))n=n*60+Number(o);return i*n}return t!=="0"&&t[0]==="0"?i*parseInt(t,8):i*parseInt(t,10)}function us(e){if(!fs.test(e))return oe;const t=gs(e);return Number.isFinite(t)?t:oe}var yn=Oe("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:us,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),hs=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),bs=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ys(e){if(!hs.test(e))return oe;let t=e.toLowerCase();const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const n=i*parseFloat(t);return Number.isFinite(n)||bs.test(e)?n:oe}function _s(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Jn=Oe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:ys,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:_s}),ms=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),vs=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function xs(e,t){if(t){if(!vs.test(e))return oe;let n=e.toLowerCase();const o=n[0]==="-"?-1:1;if("+-".includes(n[0])&&(n=n.slice(1)),n===".inf")return o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===".nan")return NaN;const r=o*parseFloat(n);return Number.isFinite(r)?r:oe}if(!ms.test(e))return oe;const i=Number(e);return Number.isFinite(i)?i:oe}function ws(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var ks=Oe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:xs,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:ws}),Ss=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Es=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Cs(e){if(!Ss.test(e))return oe;let t=e.toLowerCase().replace(/_/g,"");const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let n=0;if(t.includes(":")){for(const o of t.split(":"))n=n*60+Number(o);n*=i}else n=i*parseFloat(t);return Number.isFinite(n)||Es.test(e)?n:oe}function $s(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var _n=Oe("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Cs,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:$s}),Ts=Oe("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":oe,identify:()=>!1}),Is=/^[A-Za-z0-9+/]*={0,2}$/;function Bs(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!Is.test(t))return oe;const i=atob(t),n=new Uint8Array(i.length);for(let o=0;o<i.length;o++)n[o]=i.charCodeAt(o);return n}function Ns(e){let t="";for(let i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return btoa(t)}var As=Oe("tag:yaml.org,2002:binary",{resolve:Bs,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:Ns}),Ls=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ds=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Qn(e,t,i,n=0,o=0,r=0,a=0){const s=new Date(Date.UTC(e,t,i,n,o,r,a));return s.setUTCFullYear(e,t,i),s}function Ps(e){let t=Ls.exec(e);if(t===null&&(t=Ds.exec(e)),t===null)return oe;const i=+t[1],n=+t[2]-1,o=+t[3];if(!t[4]){const c=Qn(i,n,o);return c.getUTCFullYear()!==i||c.getUTCMonth()!==n||c.getUTCDate()!==o?oe:c}const r=+t[4],a=+t[5],s=+t[6];let l=0;if(r>23||a>59||s>59)return oe;if(t[7]){let c=t[7].slice(0,3);for(;c.length<3;)c+="0";l=+c}const d=Qn(i,n,o,r,a,s,l);if(d.getUTCFullYear()!==i||d.getUTCMonth()!==n||d.getUTCDate()!==o)return oe;if(t[9]){const c=+t[10],b=+(t[11]||0);if(c>23||b>59)return oe;const h=(c*60+b)*6e4;d.setTime(d.getTime()-(t[9]==="-"?-h:h))}return d}var Rs=Oe("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:Ps,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),Ms=bn("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function on(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function mn(e,t){const i={};for(const n of t)e[n]!==void 0&&(i[n]=e[n]);return i}var Fs=bn("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let i;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";i=t.keys().next().value}else if(on(t)){const n=Object.keys(t);if(n.length!==1)return"cannot resolve an ordered map item";i=n[0]}else return"cannot resolve an ordered map item";return e.seen.has(i)?"duplicate key in ordered map":(e.seen.add(i),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),Os=bn("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const i=t,n=Object.keys(i);return n.length!==1?"cannot resolve a pairs item":(e.push([n[0],i[n[0]]]),"")},identify:()=>!1}),Vs=nn("tag:yaml.org,2002:map",{create:()=>({}),identify:on,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const n=String(t);return n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}}),zs=nn("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const i of e)t.set(i,null);return t},addPair:(e,t,i)=>i!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function Ws(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function Gs(){return{scalar:[],sequence:[],mapping:[]}}function Hs(e){const t=[];for(const i of e){let n=t.length;for(let o=0;o<t.length;o++){const r=t[o];if(r.nodeKind===i.nodeKind&&r.tagName===i.tagName&&r.matchByTagPrefix===i.matchByTagPrefix){n=o;break}}t[n]=i}return t}var rn=class Ca{constructor(t){ct(this,"tags");ct(this,"implicitScalarTags");ct(this,"implicitScalarByFirstChar");ct(this,"implicitScalarAnyFirstChar");ct(this,"defaultScalarTag");ct(this,"defaultSequenceTag");ct(this,"defaultMappingTag");ct(this,"exact");ct(this,"prefix");const i=Hs(t),n=[],o=Ws(),r=Gs();for(const c of i){if(c.nodeKind==="scalar"&&c.implicit){if(c.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");n.push(c)}switch(c.nodeKind){case"scalar":c.matchByTagPrefix?r.scalar.push(c):o.scalar[c.tagName]=c;break;case"sequence":c.matchByTagPrefix?r.sequence.push(c):o.sequence[c.tagName]=c;break;case"mapping":c.matchByTagPrefix?r.mapping.push(c):o.mapping[c.tagName]=c}}const a=n.filter(c=>c.implicitFirstChars===null),s=new Set;for(const c of n)if(c.implicitFirstChars!==null)for(const b of c.implicitFirstChars)s.add(b);const l=new Map;for(const c of s)l.set(c,n.filter(b=>b.implicitFirstChars===null||b.implicitFirstChars.indexOf(c)!==-1));const d=o.scalar["tag:yaml.org,2002:str"];if(!d)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=i,this.implicitScalarTags=n,this.implicitScalarByFirstChar=l,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=d,this.defaultSequenceTag=o.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=o.mapping["tag:yaml.org,2002:map"],this.exact=o,this.prefix=r}lookupScalarTag(t){const i=this.exact.scalar[t];if(i)return i;for(const n of this.prefix.scalar)if(t.startsWith(n.tagName))return n}lookupSequenceTag(t){const i=this.exact.sequence[t];if(i)return i;for(const n of this.prefix.sequence)if(t.startsWith(n.tagName))return n}lookupMappingTag(t){const i=this.exact.mapping[t];if(i)return i;for(const n of this.prefix.mapping)if(t.startsWith(n.tagName))return n}resolveImplicitScalarTag(t){const i=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const o of i){const r=o.resolve(t,!1,o.tagName);if(r!==oe)return{value:r,tag:o}}const n=this.defaultScalarTag;return{value:n.resolve(t,!1,n.tagName),tag:n}}withTags(...t){let i=[];for(const n of t)i=i.concat(n);return new Ca([...this.tags,...i])}},vn=new rn([Wa,Ms,Vs]);new rn([...vn.tags,qa,Xa,ps,ks]);var qs=new rn([...vn.tags,Ha,Ja,Kn,Jn]),Us=new rn([...vn.tags,Ya,is,yn,_n,Rs,Ts,As,Fs,Os,zs]),Ys=Us.withTags({...yn,resolve:(e,t,i)=>{const n=yn.resolve(e,t,i);return n===oe?Kn.resolve(e,t,i):n}},{..._n,resolve:(e,t,i)=>{const n=_n.resolve(e,t,i);return n===oe?Jn.resolve(e,t,i):n}});nn("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,i)=>(e.set(t,i),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||on(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,i=e;for(const n of Object.keys(i))t.set(n,i[n]);return t}});function Zn(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let i=0;i<t.length;i++){if(Array.isArray(t[i]))return null;typeof t[i]=="object"&&Object.prototype.toString.call(t[i])==="[object Object]"&&(t[i]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}nn("tag:yaml.org,2002:map",{create:()=>({}),identify:on,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{const n=Zn(t);return n===null?"nested arrays are not supported inside keys":(n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,"")},has:(e,t)=>{const i=Zn(t);return i!==null&&Object.prototype.hasOwnProperty.call(e,i)},keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}});var js={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function xn(e,t,i,n,o){let r="",a="";const s=Math.floor(o/2)-1;return n-t>s&&(r=" ... ",t=n-s+r.length),i-n>s&&(a=" ...",i=n+s-a.length),{str:r+e.slice(t,i).replace(/\t/g,"→")+a,pos:n-t+r.length}}function wn(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function Ks(e,t){if(!e.buffer)return null;const i={...js,...t},n=/\r?\n|\r|\0/g,o=[0],r=[];let a,s=-1;for(;a=n.exec(e.buffer);)r.push(a.index),o.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);let l="";const d=Math.min(e.line+i.linesAfter,r.length).toString().length,c=i.maxLength-(i.indent+d+3);for(let h=1;h<=i.linesBefore&&!(s-h<0);h++){const _=xn(e.buffer,o[s-h],r[s-h],e.position-(o[s]-o[s-h]),c);l=`${" ".repeat(i.indent)}${wn((e.line-h+1).toString(),d)} | ${_.str}
${l}`}const b=xn(e.buffer,o[s],r[s],e.position,c);l+=`${" ".repeat(i.indent)}${wn((e.line+1).toString(),d)} | ${b.str}
`,l+=`${"-".repeat(i.indent+d+3+b.pos)}^
`;for(let h=1;h<=i.linesAfter&&!(s+h>=r.length);h++){const _=xn(e.buffer,o[s+h],r[s+h],e.position-(o[s]-o[s+h]),c);l+=`${" ".repeat(i.indent)}${wn((e.line+h+1).toString(),d)} | ${_.str}
`}return l.replace(/\n$/,"")}function Xn(e,t){let i="";return e.mark?(e.mark.name&&(i+=`in "${e.mark.name}" `),i+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(i+=`

${e.mark.snippet}`),`${e.reason} ${i}`):e.reason}var Ot=class $a extends Error{constructor(i,n){super();ct(this,"reason");ct(this,"mark");this.name="YAMLException",this.reason=i,this.mark=n,this.message=Xn(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(i){return`${this.name}: ${Xn(this,i)}`}static throwAt(i,n,o,r=""){let a=0,s=0;for(let d=0;d<n;d++){const c=i.charCodeAt(d);c===10?(a++,s=d+1):c===13&&(a++,i.charCodeAt(d+1)===10&&d++,s=d+1)}const l={name:r,buffer:i,position:n,line:a,column:n-s};throw l.snippet=Ks(l),new $a(o,l)}},Pe={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},H={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},nt={BLOCK:1,FLOW:2},mt={CLIP:1,STRIP:2,KEEP:3},Js=-1;function eo(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var to=new Array(256),io=new Array(256);for(let e=0;e<256;e++)to[e]=eo(e)?1:0,io[e]=eo(e);function Qs(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Zs(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function Xs(e){return e===120?2:e===117?4:8}function an(e,t,i){let n=0;for(;t<i;){const o=e.charCodeAt(t);if(o===10)n++,t++;else if(o===13)n++,t++,e.charCodeAt(t)===10&&t++;else if(o===32||o===9)t++;else break}return{position:t,breaks:n}}function kn(e){return e===1?" ":`
`.repeat(e-1)}function el(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===10||s===13){n+=e.slice(r,a);const l=an(e,o,i);n+=kn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,a)}function tl(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===39)n+=e.slice(r,o)+"'",o+=2,r=a=o;else if(s===10||s===13){n+=e.slice(r,a);const l=an(e,o,i);n+=kn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,i)}function il(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===92){n+=e.slice(r,o),o++;const l=e.charCodeAt(o);if(l===10||l===13)o=an(e,o,i).position;else if(l<256&&to[l])n+=io[l],o++;else{let d=Xs(l),c=0;for(;d>0;d--){o++;const b=Zs(e.charCodeAt(o));c=(c<<4)+b}n+=Qs(c),o++}r=a=o}else if(s===10||s===13){n+=e.slice(r,a);const l=an(e,o,i);n+=kn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,i)}function no(e,t,i,n,o,r){const a=n<0?0:n,s=e.slice(t,i).replace(/\r\n?/g,`
`),l=s===""?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`);let d="",c=!1,b=0,h=!1;for(const _ of l){let p=0;for(;p<a&&_.charCodeAt(p)===32;)p++;if(n<0||p>=_.length){b++;continue}const y=_.slice(a),m=y.charCodeAt(0);r?m===32||m===9?(h=!0,d+=`
`.repeat(c?1+b:b)):h?(h=!1,d+=`
`.repeat(b+1)):b===0?c&&(d+=" "):d+=`
`.repeat(b):d+=`
`.repeat(c?1+b:b),d+=y,c=!0,b=0}return o===mt.KEEP?d+=`
`.repeat(c?1+b:b):o!==mt.STRIP&&c&&(d+=`
`),d}function nl(e,t){if(t.valueStart===Js)return"";const{valueStart:i,valueEnd:n}=t;if(t.fast)return e.slice(i,n);switch(t.style){case H.SINGLE_QUOTED:return tl(e,i,n);case H.DOUBLE_QUOTED:return il(e,i,n);case H.LITERAL_BLOCK:return no(e,i,n,t.indent,t.chomping,!1);case H.FOLDED_BLOCK:return no(e,i,n,t.indent,t.chomping,!0);default:return el(e,i,n)}}var ol=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"}),oo="-#;/?:@&=+$_.~*'()",rl=oo+"!,[]",ro="0123456789ABCDEF";function vt(e){return"%"+ro[e>>4]+ro[e&15]}function Sn(e,t){const i=t?oo:rl;let n="";for(let o=0;o<e.length;o++){let r=e.charCodeAt(o);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i.includes(e[o])){n+=e[o];continue}r>=55296&&r<=56319&&(r=65536+((r&1023)<<10)+(e.charCodeAt(++o)&1023)),r<128?n+=vt(r):r<2048?n+=vt(192|r>>6)+vt(128|r&63):r<65536?n+=vt(224|r>>12)+vt(128|r>>6&63)+vt(128|r&63):n+=vt(240|r>>18)+vt(128|r>>12&63)+vt(128|r>>6&63)+vt(128|r&63)}return n}function En(e){let t="",i=0;for(;i<e.length;){if(e.charCodeAt(i)!==37){t+=e[i++];continue}let n=parseInt(e.slice(i+1,i+3),16);if(i+=3,n>=192){let o=n<224?1:n<240?2:3;for(n&=(1<<6-o)-1;o-- >0;)n=n<<6|parseInt(e.slice(i+1,i+3),16)&63,i+=3}n<65536?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023))}return t}function ao(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return En(e.slice(2,-1));const i=e.indexOf("!",1),n=i===-1?"!":e.slice(0,i+1);return En((t==null?void 0:t[n])??ol[n]??n)+En(e.slice(n.length))}function so(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${Sn(t,!0)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${Sn(t.slice(18),!0)}`:`!<${Sn(t,!1)}>`}var Ci=-1,al="tag:yaml.org,2002:merge",Cn={filename:"",schema:qs,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function sl(e){return"tagStart"in e&&e.tagStart!==Ci?e.tagStart:"anchorStart"in e&&e.anchorStart!==Ci?e.anchorStart:"valueStart"in e&&e.valueStart!==Ci?e.valueStart:"start"in e?e.start:0}function Re(e,t){Ot.throwAt(e.source,e.position,t,e.filename)}function lo(e,t,i,n){try{return i.finalize(n)}catch(o){if(o instanceof Ot)throw o;Ot.throwAt(e.source,t,o instanceof Error?o.message:String(o),e.filename)}}function ll(e,t){const i=nl(e.source,t),n=t.tagStart===Ci?"":e.source.slice(t.tagStart,t.tagEnd),o=e.schema.defaultScalarTag;if(n!==""){if(n==="!")return{value:i,tag:o};const r=ao(n,e.tagHandlers),a=e.schema.lookupScalarTag(r);if(a){const l=a.resolve(i,!0,r);return l===oe&&Re(e,`cannot resolve a node with !<${r}> explicit tag`),{value:l,tag:a}}const s=e.schema.lookupMappingTag(r)??e.schema.lookupSequenceTag(r);if(s){i!==""&&Re(e,`cannot resolve a node with !<${r}> explicit tag`);const l=s.create(r);return{value:s.carrierIsResult?l:lo(e,e.position,s,l),tag:s}}Re(e,`unknown scalar tag !<${r}>`)}return t.style===H.PLAIN?e.schema.resolveImplicitScalarTag(i):{value:o.resolve(i,!1,o.tagName),tag:o}}function co(e,t,i){const n=t.tagStart===Ci?"":e.source.slice(t.tagStart,t.tagEnd);return n===""||n==="!"?i:ao(n,e.tagHandlers)}function po(e){return e.nodeKind==="mapping"}function fo(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Re(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function go(e,t,i,n){fo(e);for(const o of n.keys(i)){if(fo(e),t.tag.has(t.value,o))continue;const r=t.tag.addPair(t.value,o,n.get(i,o));r&&Re(e,r),t.overridable??(t.overridable=new Set),t.overridable.add(o)}}function dl(e,t,i,n){if(e.position=t.keyPosition,po(n))go(e,t,i,n);else if(n.nodeKind==="sequence"&&Array.isArray(i)){i.length>100&&Re(e,"abnormal merge sequence size");for(const o of i){const r=e.nodeTags.get(o);r||Re(e,"cannot merge mappings; the provided source object is unacceptable"),go(e,t,o,r)}}else Re(e,"cannot merge mappings; the provided source object is unacceptable")}function cl(e,t,i,n,o){var a,s;if(e.position=t.keyPosition,t.keyIsMerge){dl(e,t,n,o);return}!e.json&&t.tag.has(t.value,i)&&!((a=t.overridable)!=null&&a.has(i))&&Re(e,"duplicated mapping key");const r=t.tag.addPair(t.value,i,n);r&&Re(e,r),(s=t.overridable)==null||s.delete(i)}function $n(e,t,i){const n=e.frames[e.frames.length-1];if(n.kind==="document")n.value=t,n.hasValue=!0;else if(n.kind==="sequence"){po(i)&&e.nodeTags.set(t,i);const o=n.tag.addItem(n.value,t,n.index++);o&&Re(e,o)}else if(n.hasKey){const o=n.key;n.key=void 0,n.hasKey=!1,cl(e,n,o,t,i)}else n.key=t,n.keyPosition=e.position,n.hasKey=!0,n.keyIsMerge=i.tagName===al}function Tn(e,t,i,n,o){if(t.anchorStart!==Ci){const r={value:i,tag:n,isValueFinal:o};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),r),r}return null}function pl(e,t){const i={...Cn,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;i.eventIndex<i.events.length;){const n=i.events[i.eventIndex++];switch(i.position=sl(n),n.type){case Pe.DOCUMENT:i.anchors=new Map,i.nodeTags=new Map,i.aliasCount=0,i.tagHandlers=Object.create(null);for(const o of n.directives)o.kind==="tag"&&(i.tagHandlers[o.handle]=o.prefix);i.frames.push({kind:"document",position:i.position,value:void 0,hasValue:!1});break;case Pe.SCALAR:{const{value:o,tag:r}=ll(i,n);Tn(i,n,o,r,!0),$n(i,o,r);break}case Pe.SEQUENCE:{const o=co(i,n,"tag:yaml.org,2002:seq"),r=i.schema.lookupSequenceTag(o);r||Re(i,`unknown sequence tag !<${o}>`);const a=r.create(o),s=Tn(i,n,a,r,r.carrierIsResult);i.frames.push({kind:"sequence",position:i.position,value:a,tag:r,anchor:s,index:0});break}case Pe.MAPPING:{const o=co(i,n,"tag:yaml.org,2002:map"),r=i.schema.lookupMappingTag(o);r||Re(i,`unknown mapping tag !<${o}>`);const a=r.create(o),s=Tn(i,n,a,r,r.carrierIsResult);i.frames.push({kind:"mapping",position:i.position,value:a,tag:r,anchor:s,key:void 0,keyPosition:i.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Pe.ALIAS:{i.maxAliases!==-1&&++i.aliasCount>i.maxAliases&&Re(i,`aliases exceeded maxAliases (${i.maxAliases})`);const o=i.source.slice(n.anchorStart,n.anchorEnd),r=i.anchors.get(o);r||Re(i,`unidentified alias "${o}"`),r.isValueFinal||Re(i,`recursive alias "${o}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),$n(i,r.value,r.tag);break}case Pe.POP:{const o=i.frames.pop();if(o.kind==="mapping"&&o.hasKey&&(i.position=o.keyPosition,Re(i,"incomplete mapping pair in event stream")),o.kind==="document")i.documents.push(o.value);else{const r=o.tag.carrierIsResult?o.value:lo(i,o.position,o.tag,o.value);o.anchor&&(o.anchor.value=r,o.anchor.isValueFinal=!0),$n(i,r,o.tag)}break}}}return i.documents}var re=-1,uo=Object.prototype.hasOwnProperty,$i=1,ho=2,bo=3,sn=4,fl=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,gl=/[,\[\]{}]/,yo=/^(?:!|!!|![0-9A-Za-z-]+!)$/,In=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,_o=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,ul=new RegExp(`^(?:${In})*$`),hl=new RegExp(`^(?:${_o})+$`),bl=new RegExp(`^(?:!(?:${In})*|${_o}(?:${In})*)$`),Bn={filename:"",maxDepth:100};function yl(e,t,i){e.events.push({type:Pe.DOCUMENT,explicitStart:t,explicitEnd:i,directives:e.directives})}function mo(e,t,i,n,o,r,a){e.events.push({type:Pe.SEQUENCE,start:t,anchorStart:i,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function vo(e,t,i,n,o,r,a){e.events.push({type:Pe.MAPPING,start:t,anchorStart:i,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function xo(e,t){e.events.splice(t.eventsLength,0,{type:Pe.MAPPING,start:t.position,anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re,style:nt.FLOW})}function Ti(e,t,i,n,o,r,a,s,l=mt.CLIP,d=-1,c=!1){e.events.push({type:Pe.SCALAR,valueStart:t,valueEnd:i,anchorStart:n,anchorEnd:o,tagStart:r,tagEnd:a,style:s,chomping:l,indent:d,fast:c})}function _l(e,t,i){e.events.push({type:Pe.ALIAS,anchorStart:t,anchorEnd:i})}function Ii(e){e.events.push({type:Pe.POP})}function We(e){Ti(e,re,re,re,re,re,re,H.PLAIN)}function wo(){return{anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re}}function Bi(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Ni(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function M(e,t){Ot.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function De(e){return e===10||e===13}function Ai(e){return e===9||e===32}function ft(e){return Ai(e)||De(e)}function At(e){return e===0||ft(e)}function di(e){return e===44||e===91||e===93||e===123||e===125}function ml(e){return e>=48&&e<=57?e-48:-1}function vl(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function xl(e){return e===120?2:e===117?4:e===85?8:0}function wl(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function ln(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function Ve(e,t){let i=0,n=e.input.charCodeAt(e.position),o=e.position===e.lineStart||ft(e.input.charCodeAt(e.position-1));for(;n!==0;){for(;Ai(n);)o=!0,n===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&o&&n===35)do n=e.input.charCodeAt(++e.position);while(!De(n)&&n!==0);if(!De(n))break;for(ln(e),i++,o=!0,n=e.input.charCodeAt(e.position);n===32;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return i}function Li(e,t=e.position){const i=e.input.charCodeAt(t);if((i===45||i===46)&&i===e.input.charCodeAt(t+1)&&i===e.input.charCodeAt(t+2)){const n=e.input.charCodeAt(t+3);return n===0||ft(n)}return!1}function ko(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Nn(e){if(e.position!==e.lineStart)return!1;if(Li(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=Bi(e);ko(e),Ve(e,!0);const i=e.input.charCodeAt(e.position),n=e.position===e.lineStart&&(i===37||i===45&&Li(e));return Ni(e,t),n}function So(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!De(t);)t=e.input.charCodeAt(++e.position)}function Eo(e,t,i){const n=fl.exec(e.input.slice(t,i));n!==null&&(e.position=t+n.index+n[0].length-1,M(e,"the stream contains non-printable characters"))}function kl(e,t,i){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==re&&M(e,"duplication of a tag property");const n=e.position;let o=!1,r=!1,a="!",s=e.input.charCodeAt(++e.position);s===60?(o=!0,s=e.input.charCodeAt(++e.position)):s===33&&(r=!0,a="!!",s=e.input.charCodeAt(++e.position));let l=e.position,d;if(o){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&M(e,"unexpected end of the stream within a verbatim tag"),d=e.input.slice(l,e.position),e.position++}else{for(;s!==0&&!ft(s)&&!(i&&di(s));)s===33&&(r?M(e,"tag suffix cannot contain exclamation marks"):(a=e.input.slice(l-1,e.position+1),yo.test(a)||M(e,"named tag handle cannot contain such characters"),r=!0,l=e.position+1)),s=e.input.charCodeAt(++e.position);d=e.input.slice(l,e.position),gl.test(d)&&M(e,"tag suffix cannot contain flow indicator characters")}return d&&!(o?ul.test(d):hl.test(d))&&M(e,`tag name cannot contain such characters: ${d}`),!o&&a!=="!"&&a!=="!!"&&!uo.call(e.tagHandlers,a)&&M(e,`undeclared tag handle "${a}"`),t.tagStart=n,t.tagEnd=e.position,!0}function Sl(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==re&&M(e,"duplication of an anchor property"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ft(e.input.charCodeAt(e.position))&&!di(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&M(e,"name of an anchor node must contain at least one character"),t.anchorStart=i,t.anchorEnd=e.position,!0}function El(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==re||t.tagStart!==re)&&M(e,"alias node should not have any properties"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ft(e.input.charCodeAt(e.position))&&!di(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&M(e,"name of an alias node must contain at least one character"),_l(e,i,e.position),!0}function An(e,t){Ve(e,!1),e.lineIndent<t&&M(e,"deficient indentation")}function Cl(e,t,i){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const n=e.position;let o=!0;for(;e.input.charCodeAt(e.position)!==0;){const r=e.input.charCodeAt(e.position);if(r===39){if(e.input.charCodeAt(e.position+1)===39){o=!1,e.position+=2;continue}const a=e.position;return e.position++,Ti(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,H.SINGLE_QUOTED,mt.CLIP,-1,o),!0}De(r)?(o=!1,An(e,t)):e.position===e.lineStart&&Li(e)?M(e,"unexpected end of the document within a single quoted scalar"):r!==9&&r<32?M(e,"expected valid JSON character"):e.position++}M(e,"unexpected end of the stream within a single quoted scalar")}function $l(e,t,i){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const n=e.position;let o=!0;for(;e.input.charCodeAt(e.position)!==0;){const r=e.input.charCodeAt(e.position);if(r===34){const a=e.position;return e.position++,Ti(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,H.DOUBLE_QUOTED,mt.CLIP,-1,o),!0}if(r===92){o=!1;const a=e.input.charCodeAt(++e.position);if(De(a))An(e,t);else if(wl(a))e.position++;else{let s=xl(a);for(s===0&&M(e,"unknown escape sequence");s-- >0;)e.position++,vl(e.input.charCodeAt(e.position))<0&&M(e,"expected hexadecimal character");e.position++}}else De(r)?(o=!1,An(e,t)):e.position===e.lineStart&&Li(e)?M(e,"unexpected end of the document within a double quoted scalar"):r!==9&&r<32?M(e,"expected valid JSON character"):e.position++}M(e,"unexpected end of the stream within a double quoted scalar")}function Tl(e,t,i){const n=e.input.charCodeAt(e.position);let o=mt.CLIP,r=-1,a=!1;if(n!==124&&n!==62)return!1;const s=n===124?H.LITERAL_BLOCK:H.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const _=e.input.charCodeAt(e.position),p=ml(_);if(_===43||_===45)o!==mt.CLIP&&M(e,"repeat of a chomping mode identifier"),o=_===43?mt.KEEP:mt.STRIP,e.position++;else if(p>=0)p===0&&M(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),a&&M(e,"repeat of an indentation width identifier"),r=t+p-1,a=!0,e.position++;else break}let l=!1;for(;Ai(e.input.charCodeAt(e.position));)l=!0,e.position++;l&&e.input.charCodeAt(e.position)===35&&So(e),De(e.input.charCodeAt(e.position))?ln(e):e.input.charCodeAt(e.position)!==0&&M(e,"a line break is expected");let d=a?r:-1,c=0;const b=e.position;let h=e.position;for(;e.input.charCodeAt(e.position)!==0;){const _=e.position;let p=0;for(;e.input.charCodeAt(_+p)===32;)p++;const y=e.input.charCodeAt(_+p);if(y===0){d>=0?p>d&&(h=_+p):p>0&&(h=_+p);break}if(Nn(e))break;if(!a&&d===-1&&De(y)&&(c=Math.max(c,p)),!a&&d===-1&&!De(y)&&(y===9&&p<t&&(e.position=_+p,M(e,"tab characters must not be used in indentation")),p>=t&&p<c&&(e.position=_+p,M(e,"bad indentation of a mapping entry"))),d===-1&&y!==0&&!De(y)&&p<t){e.lineIndent=p,e.position=_+p;break}!a&&y!==0&&!De(y)&&d===-1&&(d=p);const m=d===-1?t+1:d;if(y!==0&&!De(y)&&p<m){e.lineIndent=p,e.position=_+p;break}So(e),h=e.position,De(e.input.charCodeAt(e.position))&&(ln(e),h=e.position)}return Eo(e,b,h),Ti(e,b,h,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,s,o,d),!0}function Il(e,t){const i=e.input.charCodeAt(e.position),n=t===$i;if(i===0||ft(i)||i===35||i===38||i===42||i===33||i===124||i===62||i===39||i===34||i===37||i===64||i===96||di(i))return!1;if(i===63||i===45){const o=e.input.charCodeAt(e.position+1);if(At(o)||n&&di(o))return!1}return!0}function Bl(e,t,i,n){if(!Il(e,i))return!1;const o=e.position;let r=e.position,a=e.input.charCodeAt(e.position);const s=i===$i;let l=!1;for(;a!==0&&!Nn(e);){if(a===58){const d=e.input.charCodeAt(e.position+1);if(At(d)||s&&di(d))break}else if(a===35){if(ft(e.input.charCodeAt(e.position-1)))break}else{if(s&&di(a))break;if(De(a)){const d=e.position,c=e.line,b=e.lineStart,h=e.lineIndent;if(Ve(e,!1),e.lineIndent>=t){l=!0,a=e.input.charCodeAt(e.position);continue}e.position=d,e.line=c,e.lineStart=b,e.lineIndent=h;break}}Ai(a)||(r=e.position+1),a=e.input.charCodeAt(++e.position)}return r===o?!1:(Eo(e,o,r),Ti(e,o,r,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,H.PLAIN,mt.CLIP,-1,!l),!0)}function Fi(e,t){const i=e.line;Ve(e,!0),(e.line>i&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&M(e,"deficient indentation")}function Nl(e,t,i){const n=e.input.charCodeAt(e.position),o=n===123,r=e.position;let a=!0;if(n!==91&&n!==123)return!1;const s=o?125:93;for(o?vo(e,r,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,nt.FLOW):mo(e,r,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,nt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Fi(e,t);let l=e.input.charCodeAt(e.position);if(l===s)return e.position++,Ii(e),!0;a?l===44&&M(e,"expected the node content, but found ','"):M(e,"missed comma between flow collection entries");let d=!1,c=!1;l===63&&ft(e.input.charCodeAt(e.position+1))&&(d=c=!0,e.position+=1,Fi(e,t));const b=e.line,h=Bi(e),_=Di(e,t,$i,!1,!0);Fi(e,t),l=e.input.charCodeAt(e.position),(o||c||e.line===b)&&l===58?(d=!0,e.position++,Fi(e,t),o||xo(e,h),_||We(e),Di(e,t,$i,!1,!0)||We(e),Fi(e,t),o||Ii(e)):o&&d?(_||We(e),We(e)):o?We(e):d&&(xo(e,h),_||We(e),We(e),Ii(e)),l=e.input.charCodeAt(e.position),l===44?(a=!0,e.position++):a=!1}M(e,"unexpected end of the stream within a flow collection")}function Co(e,t,i){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!At(e.input.charCodeAt(e.position+1)))return!1;for(mo(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,nt.BLOCK);e.input.charCodeAt(e.position)===45&&At(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,M(e,"tab characters must not be used in indentation"));const n=e.line;e.position++;const o=Ve(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&At(e.input.charCodeAt(e.position+1))&&M(e,"bad indentation of a sequence entry"),o&&e.lineIndent<=t?We(e):Di(e,t,bo,!1,!0),Ve(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&M(e,"bad indentation of a sequence entry"),e.line===n&&e.input.charCodeAt(e.position)===45&&At(e.input.charCodeAt(e.position+1))&&M(e,"bad indentation of a sequence entry")}return Ii(e),!0}function Ln(e,t,i,n){let o=!1,r=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let l=e.input.charCodeAt(e.position);for(;l!==0;){!o&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,M(e,"tab characters must not be used in indentation"));const d=e.input.charCodeAt(e.position+1),c=e.line;if((l===63||l===58)&&At(d))a||(vo(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,nt.BLOCK),a=!0),l===63?(o&&We(e),r=!0,o=!0):(o||(We(e),r=!0),o=!1),e.position+=1,s=!0;else{o&&(We(e),o=!1);const b=Bi(e);if(!Di(e,i,ho,!1,!0))break;if(e.line===c){for(l=e.input.charCodeAt(e.position);Ai(l);)l=e.input.charCodeAt(++e.position);if(l===58)l=e.input.charCodeAt(++e.position),At(l)||M(e,"a whitespace character is expected after the key-value separator within a block mapping"),a||(e.events.splice(b.eventsLength,0,{type:Pe.MAPPING,start:b.position,anchorStart:n.anchorStart,anchorEnd:n.anchorEnd,tagStart:n.tagStart,tagEnd:n.tagEnd,style:nt.BLOCK}),a=!0),r=!0,o=!1,s=!1;else if(r)M(e,"expected ':' after a mapping key");else return n.anchorStart!==re||n.tagStart!==re?(Ni(e,b),!1):!0}else if(r)M(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.anchorStart!==re||n.tagStart!==re?(Ni(e,b),!1):!0}if(Di(e,t,sn,!0,s)&&(s=!1),o||s&&(We(e),s=!1),Ve(e,!0),l=e.input.charCodeAt(e.position),(e.line===c||e.lineIndent>t)&&l!==0)M(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return r?(o&&We(e),a&&Ii(e),!0):!1}function Di(e,t,i,n,o,r=!0){var p,y;e.depth>=e.maxDepth&&M(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,l=!1,d=null;const c=wo();let b=i===sn||i===bo,h=b;const _=b;if(n&&Ve(e,!0)&&(s=!0,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1),a===1)for(;;){const m=e.input.charCodeAt(e.position),w=Bi(e);if(s&&a!==1&&(m===33||m===38))break;if(s&&_&&(c.tagStart!==re||c.anchorStart!==re)&&(m===33||m===38)){const f=Bi(e),u=t+1;if(Ln(e,e.position-e.lineStart,u,c)&&((p=e.events[f.eventsLength])==null?void 0:p.type)===Pe.MAPPING)return e.depth--,!0;Ni(e,f)}if(s&&(m===33&&c.tagStart!==re||m===38&&c.anchorStart!==re)||!kl(e,c,i===$i)&&!Sl(e,c))break;d===null&&(d=w),Ve(e,!0)?(s=!0,h=_,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1):h=!1}if(h&&(h=s||o),a===1||i===sn){const m=i===$i||i===ho?t:t+1,w=e.position-e.lineStart;if(a===1)if(h&&(Co(e,w,c)||Ln(e,w,m,c))||Nl(e,m,c))l=!0;else{const f=e.input.charCodeAt(e.position);if(d!==null&&r&&_&&!h&&f!==124&&f!==62){const u=Bi(e),g=d.position-d.lineStart;Ni(e,d),Ln(e,g,m,wo())&&((y=e.events[u.eventsLength])==null?void 0:y.type)===Pe.MAPPING?l=!0:Ni(e,u)}!l&&(b&&Tl(e,m,c)||Cl(e,m,c)||$l(e,m,c)||El(e,c)||Bl(e,m,i,c))&&(l=!0)}else a===0&&(l=h&&Co(e,w,c))}return b=b&&!l,!l&&(c.anchorStart!==re||c.tagStart!==re||b)&&(Ti(e,re,re,c.anchorStart,c.anchorEnd,c.tagStart,c.tagEnd,H.PLAIN),l=!0),e.depth--,l||c.anchorStart!==re||c.tagStart!==re}function Al(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ft(e.input.charCodeAt(e.position));)e.position++;const i=e.input.slice(t,e.position),n=[];for(i.length===0&&M(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!De(e.input.charCodeAt(e.position));){for(;Ai(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||De(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const o=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ft(e.input.charCodeAt(e.position));)e.position++;n.push(e.input.slice(o,e.position))}if(De(e.input.charCodeAt(e.position))&&ln(e),i==="YAML"){e.directives.some(r=>r.kind==="yaml")&&M(e,"duplication of %YAML directive"),n.length!==1&&M(e,"YAML directive accepts exactly one argument");const o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]);o===null&&M(e,"ill-formed argument of the YAML directive"),parseInt(o[1],10)!==1&&M(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:n[0]})}else if(i==="TAG"){n.length!==2&&M(e,"TAG directive accepts exactly two arguments");const[o,r]=n;yo.test(o)||M(e,"ill-formed tag handle (first argument) of the TAG directive"),uo.call(e.tagHandlers,o)&&M(e,`there is a previously declared suffix for "${o}" tag handle`),bl.test(r)||M(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[o]=r,e.directives.push({kind:"tag",handle:o,prefix:r})}return!0}function Ll(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(Ve(e,!0);Al(e);)t=!0,Ve(e,!0);let i=!1,n=!1,o=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&At(e.input.charCodeAt(e.position+3))){i=!0;const s=e.line;e.position+=3,Ve(e,!0),o=e.line>s}else t&&M(e,"directives end mark is expected");const r=e.events.length;if(!i&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Li(e)){e.position+=3,Ve(e,!0);return}if(yl(e,i,!1),Di(e,e.lineIndent-1,sn,!1,o,o)||We(e),Ve(e,!0),e.position===e.lineStart&&Li(e)&&(n=e.input.charCodeAt(e.position)===46,n)){const s=e.line;e.position+=3,Ve(e,!0),e.line===s&&e.position<e.length&&M(e,"end of the stream or a document separator is expected")}const a=e.events[r];(a==null?void 0:a.type)===Pe.DOCUMENT&&(a.explicitEnd=n),Ii(e),!n&&e.position<e.length&&!Nn(e)&&M(e,"end of the stream or a document separator is expected")}function Dl(e,t){const i=e.length,n={...Bn,...t,input:`${e}\0`,length:i,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},o=e.indexOf("\0");for(o!==-1&&Ot.throwAt(e,o,"null byte is not allowed in input",n.filename);n.position<n.length&&(ko(n),Ve(n,!0),!(n.position>=n.length));){const r=n.position;Ll(n),n.position===r&&M(n,"can not read a document")}return n.events}var Pl={...Bn,...Cn};function Rl(e,t={}){const i={...Pl,...t},n=String(e),o=Object.keys(Bn),r=Object.keys(Cn);return pl(Dl(n,mn(i,o)),{...mn(i,r),source:n})}function Ml(e,t){const i=Rl(e,t);if(i.length===0)throw new Ot("expected a document, but the input is empty");if(i.length===1)return i[0];throw new Ot("expected a single document in the stream, but found more")}var ci=Symbol("INVALID");function Fl(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(r=>r!==void 0)),i=e.implicitScalarTags,n=e.tags.filter(r=>!(r.nodeKind==="scalar"&&r.implicit)&&!t.has(r)),o=e.tags.filter(r=>t.has(r));return[...i.map(r=>({tag:r,implicitTag:!0})),...n.map(r=>({tag:r,implicitTag:!1})),...o.map(r=>({tag:r,implicitTag:!0}))]}function Ol(e,t){for(let i=0,n=e.representTypes.length;i<n;i+=1){const{tag:o,implicitTag:r}=e.representTypes[i];if(o.identify(t)){let a;return o.matchByTagPrefix?a=o.representTagName(t):a=o.tagName,{tag:o,tagName:a,implicitTag:r}}}return null}function Oi(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const d=e.refs.get(t);if(d)return d.anchor===void 0&&(d.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:d.anchor}}const i=Ol(e,t);if(!i){if(t===void 0||e.skipInvalid)return ci;throw new Ot(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:n,tagName:o,implicitTag:r}=i,a=r?o:so(o);if(n.nodeKind==="scalar")return{kind:"scalar",tag:a,tagged:!r,style:H.PLAIN,value:n.represent(t)};if(n.nodeKind==="sequence"){const d=n.represent(t),c={kind:"sequence",tag:a,tagged:!r,style:nt.BLOCK,items:[]};e.noRefs||e.refs.set(t,c);for(let b=0,h=d.length;b<h;b+=1){let _=Oi(e,d[b]);_===ci&&d[b]===void 0&&(_=Oi(e,null)),_!==ci&&c.items.push(_)}return c}const s=n.represent(t),l={kind:"mapping",tag:a,tagged:!r,style:nt.BLOCK,items:[]};e.noRefs||e.refs.set(t,l);for(const[d,c]of s){const b=Oi(e,d);if(b===ci)continue;const h=Oi(e,c);h!==ci&&l.items.push({key:b,value:h})}return l}function Vl(e,t,i={}){const n=Oi({representTypes:Fl(t),noRefs:i.noRefs??!1,skipInvalid:i.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:n===ci?null:n,directives:[]}]}var zl=Symbol("visit:break"),$o=Symbol("visit:skip");function dn(e,t,i){const n=t(e,i);if(n===zl)return!0;if(n===$o)return!1;const o=i.depth+1;switch(e.kind){case"sequence":for(const r of e.items)if(dn(r,t,{depth:o,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:r,value:a}of e.items)if(dn(r,t,{depth:o,parent:e,isKey:!0})||dn(a,t,{depth:o,parent:e,isKey:!1}))return!0}return!1}function To(e,t){for(const i of e)if(i.contents&&dn(i.contents,t,{depth:0,parent:null,isKey:!1}))return}function cn(e,t){return(e&1<<t)!==0}var Io={applyQuoteFlowKeysOption:Wl,doubleQuoteForInvisibles:Gl,doubleQuoteWhitespaceOnly:Hl,applyForceQuotesOption:ql,tryLongOrMultilineAsBlock:Ul,quoteInvalidPlain:Yl,fallbackToDoubleQuoted:jl};function Bo(e){return e.presenterOptions.quoteStyle==="single"&&cn(e.allowedStylesMask,H.SINGLE_QUOTED)?H.SINGLE_QUOTED:H.DOUBLE_QUOTED}function Wl(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==H.PLAIN||(e.style=H.DOUBLE_QUOTED))}function Gl(e){e.style===H.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=H.DOUBLE_QUOTED)}function Hl(e){e.style===H.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=H.DOUBLE_QUOTED)}function ql(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==H.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?H.DOUBLE_QUOTED:Bo(e)))}function Ul(e){if(e.style!==H.PLAIN||e.isKey)return;const t=e.node.value,i=t.indexOf(`
`)!==-1;if(!cn(e.allowedStylesMask,H.LITERAL_BLOCK)){i&&(e.style=H.DOUBLE_QUOTED);return}const n=e.presenterOptions.lineWidth;if(n===-1){i&&(e.style=H.LITERAL_BLOCK);return}const o=Math.max(Math.min(n,40),n-e.shiftOfContent);let r=0,a=!1;for(;r<=t.length;){let s=t.length;const l=t.indexOf(`
`,r);l!==-1&&(s=l);const d=t.slice(r,s);if(d.length>o&&d[0]!==" "&&/ [^ \t]/.test(d)&&(a=!0),l===-1)break;r=l+1}a?e.style=H.FOLDED_BLOCK:i&&(e.style=H.LITERAL_BLOCK)}function Yl(e){e.style===H.PLAIN&&!cn(e.allowedStylesMask,H.PLAIN)&&(e.style=Bo(e))}function jl(e){cn(e.allowedStylesMask,e.style)||(e.style=H.DOUBLE_QUOTED)}function Vi(e,t){return e|1<<t}var Kl="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",Jl="[\\n\\r]",Ql="\\uFEFF",Dn="[ \\t]",No=`(?:(?!(?:${Jl}|${Ql}))${Kl})`,pn=`(?:(?!${Dn})${No})`,Ao="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",Lo="[-?:,\\[\\]{}#&*!|>'\"%@`]",Zl="[,\\[\\]{}]",Pn=pn,Rn=`(?:(?!${Zl})${pn})`,Xl=`(?:(?:(?!${Lo})${pn})|[?:-](?=${Pn}))`,ed=`(?:(?:(?!${Lo})${pn})|[?:-](?=${Rn}))`,Do=`(?:(?:(?![:#])${Pn})|:(?=${Pn}))#*`,Po=`(?:(?:(?![:#])${Rn})|:(?=${Rn}))#*`,Ro=`(?:${Dn}*${Do})*`,Mo=`(?:${Dn}*${Po})*`,Fo=`${Xl}#*${Ro}`,Oo=`${ed}#*${Mo}`,td=Fo,id=Oo,nd=`\\n+${Do}${Ro}`,od=`\\n+${Po}${Mo}`,rd=`${Fo}(?:${nd})*`,ad=`${Oo}(?:${od})*`,sd=new RegExp(`^(?:${rd})$`,"u"),ld=new RegExp(`^(?:${ad})$`,"u"),dd=new RegExp(`^(?:${td})$`,"u"),cd=new RegExp(`^(?:${id})$`,"u"),pd=new RegExp(`^(?:${Ao})*$`,"u"),fd=new RegExp(`^(?:${Ao}|\\n)*$`,"u"),gd=new RegExp(`^(?:${No}|\\n)*$`,"u"),ud=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,Mn=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function hd(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?cd:dd:e.flowOnly?ld:sd).test(t)||e.shiftOfFirstLine===0&&ud.test(t))return!1;if(e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1){const o=t.slice(n+1);if(Mn.test(o))return!1}}}const i=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&i!==e.node.tag||!e.node.tagged&&t==="="&&i===e.presenterOptions.schema.defaultScalarTag.tagName)}function bd(e){const t=e.node.value;if(!(e.isKey?pd:fd).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const i=t.indexOf(`
`);if(i!==-1&&Mn.test(t.slice(i+1)))return!1}return!0}function yd(e){if(e.flowOnly||!gd.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&Mn.test(e.node.value))}function _d(e){let t=Vi(0,H.DOUBLE_QUOTED);hd(e)&&(t=Vi(t,H.PLAIN)),bd(e)&&(t=Vi(t,H.SINGLE_QUOTED)),yd(e)&&(t=Vi(Vi(t,H.LITERAL_BLOCK),H.FOLDED_BLOCK)),e.allowedStylesMask=t}function md(e){switch(e.style){case H.PLAIN:return vd(e);case H.SINGLE_QUOTED:return xd(e);case H.LITERAL_BLOCK:return wd(e);case H.FOLDED_BLOCK:return kd(e);case H.DOUBLE_QUOTED:return Sd(e)}}function vd(e){return Vo(e.node.value,e.shiftOfContent)}function xd(e){return`'${Vo(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function wd(e){const t=e.node.value;return"|"+Wo(t,e.shiftOfParent,e.shiftOfContent)+Go(zo(t,e.shiftOfContent))}function kd(e){const t=e.node.value,i=e.presenterOptions.lineWidth;let n=1/0;return i!==-1&&(n=Math.max(Math.min(i,40),i-e.shiftOfContent)),">"+Wo(t,e.shiftOfParent,e.shiftOfContent)+Go(zo(Cd(t,n),e.shiftOfContent))}function Sd(e){return`"${Id(e.node.value)}"`}function Vo(e,t){let i=e.indexOf(`
`);if(i===-1)return e;const n=" ".repeat(t);let o=e.slice(0,i);const r=/(\n+)([^\n]*)/g;r.lastIndex=i;let a;for(;a=r.exec(e);){const s=a[1].length,l=a[2];o+=`
`.repeat(s+1)+n+l}return o}function zo(e,t){const i=" ".repeat(t);let n=0,o="";const r=e.length;for(;n<r;){let a;const s=e.indexOf(`
`,n);s===-1?(a=e.slice(n),n=r):(a=e.slice(n,s+1),n=s+1),a.length&&a!==`
`&&(o+=i),o+=a}return o}function Ed(e){return/^\n* /.test(e)}function Wo(e,t,i){const n=Ed(e)?String(i-t):"",o=e[e.length-1]===`
`;return`${n}${o&&(e[e.length-2]===`
`||e===`
`)?"+":o?"":"-"}
`}function Go(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Fn(e){return e===" "||e==="	"}function Ho(e,t){if(e===""||Fn(e[0]))return e;const i=/ [^ \t]/g;let n,o=0,r,a=0,s=0,l="";for(;n=i.exec(e);)s=n.index,s-o>t&&(r=a>o?a:s,l+=`
${e.slice(o,r)}`,o=r+1),a=s;return l+=`
`,e.length-o>t&&a>o?l+=`${e.slice(o,a)}
${e.slice(a+1)}`:l+=e.slice(o),l.slice(1)}function Cd(e,t){const i=/(\n+)([^\n]*)/g;let n=e.indexOf(`
`);n===-1&&(n=e.length),i.lastIndex=n;let o=Ho(e.slice(0,n),t),r=e[0]===`
`||Fn(e[0]),a,s;for(;s=i.exec(e);){const l=s[1],d=s[2];a=d!==""&&Fn(d[0]),o+=l+(!r&&!a&&d!==""?`
`:"")+Ho(d,t),r=a}return o}var $d=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function Td(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),i=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-i.length)}${i}`:`\\u${"0".repeat(4-i.length)}${i}`}function Id(e){return e.replace($d,Td)}var fn=10,On={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(Io).map(e=>Reflect.get(Io,e)),tagBeforeAnchor:!1};function Bd(e){return e.tagged?e.tag:so(e.tag)}function Nd(e){const t={...On,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function Vn(e,t){return`
${" ".repeat(e.indent*t)}`}function Ad(e,t,i,n,o,r){return{node:t,parent:i,level:n,isKey:o,flowOnly:r,shiftOfParent:n===0?-1:e.indent*(n-1),shiftOfContent:e.indent*Math.max(1,n),shiftOfFirstLine:n===0?0:e.indent*n,presenterOptions:e,allowedStylesMask:0,style:t.style}}function Ld(e,t,i){let n="";for(let r=0,a=i.items.length;r<a;r+=1){const s=Lt(e,t,i.items[r],i,{}).text;r>0&&(n+=`,${e.flowSkipCommaSpace?"":" "}`),n+=s}const o=e.flowBracketPadding&&i.items.length>0?" ":"";return`[${o}${n}${o}]`}function qo(e,t,i,n){let o="";for(let r=0,a=i.items.length;r<a;r+=1){const s=Lt(e,t+1,i.items[r],i,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!n||o!=="")&&(o+=Vn(e,t)),s===""||fn===s.charCodeAt(0)?o+="-":o+="- ",o+=s}return o}function Dd(e,t,i){let n="";for(const{key:r,value:a}of i.items){let s="";n!==""&&(s+=`,${e.flowSkipCommaSpace?"":" "}`);const l=Lt(e,t,r,i,{iskey:!0}),d=l.text,c=Lt(e,t,a,i,{}).text,b=e.flowSkipColonSpace||c===""?"":" ",h=r.kind==="scalar"&&l.noBody&&(r.tagged||r.anchor!==void 0),_=r.kind==="alias"||h?" ":"";s+=`${d}${_}:${b}${c}`,n+=s}const o=e.flowBracketPadding&&n!==""?" ":"";return`{${o}${n}${o}}`}function Pd(e,t,i,n){let o="";for(let r=0,a=i.items.length;r<a;r+=1){let s="";(!n||o!=="")&&(s+=Vn(e,t));const{key:l,value:d}=i.items[r],c=(l.kind==="mapping"||l.kind==="sequence")&&l.style===nt.BLOCK&&l.items.length!==0||l.kind==="scalar"&&(l.style===H.LITERAL_BLOCK||l.style===H.FOLDED_BLOCK),b=c?Lt(e,t+1,l,i,{block:!0,compact:!0,isblockseq:!zn(e,l,t+1)}):Lt(e,t+1,l,i,{block:!0,compact:!0,iskey:!0}),h=b.text,_=l.kind==="scalar"&&l.value.indexOf(`
`)!==-1,p=h.length>1024&&/^[\s\S]{1025}/u.test(h),y=c||_||p;y&&(h&&fn===h.charCodeAt(0)?s+="?":s+="? "),s+=h,y&&(s+=Vn(e,t));const m=Lt(e,t+1,d,i,{block:!0,compact:y,isblockseq:y&&!zn(e,d,t+1)}).text,w=l.kind==="scalar"&&b.noBody&&(l.tagged||l.anchor!==void 0),f=!y&&(l.kind==="alias"||w)?" ":"";m===""||fn===m.charCodeAt(0)?s+=`${f}:`:s+=`${f}: `,s+=m,o+=s}return o}function zn(e,t,i){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&i>0}function Lt(e,t,i,n,o){if(i.kind==="alias")return e.openEnded=!1,{text:`*${i.anchor}`,noBody:!1};const{block:r=!1,iskey:a=!1,isblockseq:s=!1}=o;let l=o.compact??!1;const d=i.anchor!==void 0;zn(e,i,t)&&(l=!1);let c,b=i.tagged;const h=r&&(i.kind==="mapping"||i.kind==="sequence")&&i.style===nt.BLOCK&&i.items.length!==0;if(i.kind==="mapping")h?c=Pd(e,t,i,l):c=Dd(e,t,i);else if(i.kind==="sequence")h?e.seqNoIndent&&!s&&t>0?c=qo(e,t-1,i,l):c=qo(e,t,i,l):c=Ld(e,t,i);else{const y=Ad(e,i,n,t,a,!r);_d(y);for(const m of e.scalarStyleRules)m(y);c=md(y),e.openEnded=(y.style===H.LITERAL_BLOCK||y.style===H.FOLDED_BLOCK)&&(i.value===`
`||i.value.endsWith(`

`)),b=i.tagged||c===""&&y.flowOnly&&(n==null?void 0:n.kind)==="sequence"&&!d||y.style!==H.PLAIN&&i.tag!==e.defaultScalarTagName}(i.kind==="mapping"||i.kind==="sequence")&&!h&&(e.openEnded=!1),h&&l&&t>0&&e.indent>2&&(c=`${" ".repeat(e.indent-2)}${c}`);const _=c==="";let p=c;if(b||d){const y=[],m=b?Bd(i):null,w=d?`&${i.anchor}`:null;e.tagBeforeAnchor?(m!==null&&y.push(m),w!==null&&y.push(w)):(w!==null&&y.push(w),m!==null&&y.push(m));const f=c===""||c.charCodeAt(0)===fn?"":" ";p=`${y.join(" ")}${f}${c}`}return{text:p,noBody:_}}function Rd(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===nt.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function Md(e){let t="";for(const i of e.directives){if(i.kind==="yaml"){t+=`%YAML ${i.version}
`;continue}const{handle:n,prefix:o}=i;t+=`%TAG ${n} ${o}
`}return t}function Fd(e,t){const i=Nd(t);let n="",o=!1;for(let r=0;r<e.length;r+=1){const a=e[r];i.openEnded=!1;const s=Md(a),l=s!=="",d=a.explicitStart||l||r>0&&!o;if(n+=s,a.contents===null)d&&(n+=`---
`);else if(d){const c=Lt(i,0,a.contents,null,{block:!0,compact:!0}).text,b=c===""?"":l||Rd(a.contents)?`
`:" ";n+=`---${b}${c}
`}else n+=Lt(i,0,a.contents,null,{block:!0,compact:!0}).text+`
`;o=a.explicitEnd||i.openEnded,o&&(n+=`...
`)}return n}var Od={...On,schema:Ys,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function Vd(e,t){const i=String(e),n=String(t);return i<n?-1:i>n?1:0}function zd(e,t={}){const i={...Od,...t},n=Vl(e,i.schema,{noRefs:i.noRefs,skipInvalid:i.skipInvalid});if(i.flowLevel>=0&&To(n,(o,r)=>{if(!(r.depth<i.flowLevel))return(o.kind==="sequence"||o.kind==="mapping")&&(o.style=nt.FLOW),$o}),i.sortKeys){const o=i.sortKeys===!0?Vd:i.sortKeys;To(n,r=>{r.kind==="mapping"&&r.items.sort((a,s)=>o(a.key.kind==="scalar"?a.key.value:"",s.key.kind==="scalar"?s.key.value:""))})}return i.transform(n),Fd(n,{...mn(i,Object.keys(On)),schema:i.schema})}console.info("%c⚡ Energy Station Panel v1.6.3 Loaded ⚡","background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");class Wn extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._config=null,this._isDrawerOpen=!1,this._scale=1,this._cardNode=null,this._editorNode=null,this._hasAttemptedAutoImport=!1}set hass(t){this._hass=t,this._cardNode&&(this._cardNode.hass=t),this._editorNode&&(this._editorNode.hass=t),this._updateHaStatusBadge(),this._hasAttemptedAutoImport||(this._hasAttemptedAutoImport=!0,this._autoDiscoverLovelaceConfig())}connectedCallback(){this._loadConfig(),this._render(),this._bindEvents(),this._hass&&(this._cardNode&&(this._cardNode.hass=this._hass),this._editorNode&&(this._editorNode.hass=this._hass)),setTimeout(()=>{this._cardNode&&typeof this._cardNode._updateFlowPaths=="function"&&this._cardNode._updateFlowPaths()},120)}_loadConfig(){try{const t=localStorage.getItem("energy_station_app_config");t&&(this._config=JSON.parse(t))}catch{}this._config||(this._config=JSON.parse(JSON.stringify(j))),this._config.appearance||(this._config.appearance=JSON.parse(JSON.stringify(j.appearance||{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"}))),this._scale=this._config.card_scale||1}_saveConfig(){try{typeof localStorage<"u"&&localStorage.setItem("energy_station_app_config",JSON.stringify(this._config))}catch{}this._cardNode&&this._cardNode.setConfig(this._config)}_updateCardConfig(){this._cardNode&&this._cardNode.setConfig(this._config),this._editorNode&&this._editorNode.setConfig(this._config),this._saveConfig()}async _autoDiscoverLovelaceConfig(){var t,i,n,o;if(this._hass)try{const r=localStorage.getItem("energy_station_app_config");if(r){const a=JSON.parse(r);if((n=(i=(t=a.solar)==null?void 0:t.strings)==null?void 0:i[0])!=null&&n.voltage_entity&&((o=a.inverter)!=null&&o.voltage_entity))return}await this._importFromLovelace(!1)}catch(r){console.warn("Lovelace auto-import skipped:",r)}}async _importFromLovelace(t=!0){var i,n;if(!this._hass){t&&alert("Немає підключення до Home Assistant");return}try{const o=[],r=a=>{for(const s of a||[])if(s.cards){for(const l of s.cards)if(l.type&&(l.type==="custom:energy-station-card"||l.type.includes("energy-station-card"))&&o.push(l),l.cards&&Array.isArray(l.cards))for(const d of l.cards)d.type&&(d.type==="custom:energy-station-card"||d.type.includes("energy-station-card"))&&o.push(d)}};try{const a=await this._hass.callWS({type:"lovelace/config"});r(a==null?void 0:a.views)}catch{}if(o.length===0&&this._hass.panels){const a=Object.values(this._hass.panels).filter(s=>s.component_name==="lovelace");for(const s of a)if(s.url_path&&s.url_path!=="energy-station")try{const l=await this._hass.callWS({type:"lovelace/config",url_path:s.url_path});if(r(l==null?void 0:l.views),o.length>0)break}catch{}}if(o.length>0){const a=o[0],s=JSON.parse(JSON.stringify(a));delete s.type,s.appearance={...j.appearance,...((i=this._config)==null?void 0:i.appearance)||{},...s.appearance||{}},this._config=s,this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");return}if(typeof window<"u"&&((n=window.parent)!=null&&n.document)){const a=window.parent.document.querySelectorAll("energy-station-card");for(const s of a)if(s!==this._cardNode&&s._config){this._config=JSON.parse(JSON.stringify(s._config)),this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");return}}t&&alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".')}catch(o){console.error("Import from Lovelace error:",o),t&&alert("Помилка імпорту: "+o.message)}}_render(){var n;const t=this._config,i=t.appearance;this.shadowRoot.innerHTML=`
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
              <span class="panel-brand-badge">PRO APP v1.6.3</span>
            </div>
          </div>
        </div>

        <div class="panel-controls">
          <!-- Zoom Controls -->
          <div style="display: flex; align-items: center; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 2px 4px; gap: 2px;">
            <button class="panel-pill-btn" id="btnZoomOut" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">−</button>
            <span id="txtZoomVal" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; min-width: 40px; text-align: center; color: #38bdf8; font-weight: 700;">${Math.round(this._scale*100)}%</span>
            <button class="panel-pill-btn" id="btnZoomIn" style="border: none; background: transparent; padding: 3px 8px; font-weight: 800;">+</button>
          </div>

          <!-- Quick Theme Toggle -->
          <button class="panel-pill-btn" id="btnQuickTheme" title="Змінити тему">
            ${t.theme_mode==="light"?"☀️ Світла":((n=t.appearance)==null?void 0:n.theme_preset)==="oled_black"?"⬛ OLED":"🌙 Темна"}
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
                <div class="font-tile ${i.font_family==="Inter"?"active":""}" data-val="Inter" style="font-family: 'Inter', sans-serif;">
                  <div class="font-tile-name">Inter</div>
                  <div class="font-tile-sample">Чистий гротеск</div>
                </div>
                <div class="font-tile ${i.font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">Моноширинний</div>
                </div>
                <div class="font-tile ${i.font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', sans-serif;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">Cyberpunk</div>
                </div>
                <div class="font-tile ${i.font_family==="Exo 2"?"active":""}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${i.font_family==="Roboto"?"active":""}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Material</div>
                </div>
                <div class="font-tile ${i.font_family==="Ubuntu"?"active":""}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий</div>
                </div>
                <div class="font-tile ${i.font_family==="system-ui"?"active":""}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔢 Шрифт числових показників (кВт / V / A):</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${i.mono_font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', monospace;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Roboto Mono"?"active":""}" data-val="Roboto Mono" style="font-family: 'Roboto Mono', monospace;">
                  <div class="font-tile-name">Roboto Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Fira Code"?"active":""}" data-val="Fira Code" style="font-family: 'Fira Code', monospace;">
                  <div class="font-tile-name">Fira Code</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
              </div>
            </div>

            <!-- Power Value Size (Розмір цифр) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">📏 Розмір головних цифр потужності (кВт):</div>
              <div class="seg-btn-group" id="powerSizeSeg">
                <button class="seg-btn ${i.power_font_size==="compact"?"active":""}" data-val="compact">
                  <div>Компактний</div>
                  <div style="font-size: 10px; color: #64748b;">18px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="normal"||!i.power_font_size?"active":""}" data-val="normal">
                  <div>Стандартний</div>
                  <div style="font-size: 10px; color: #64748b;">22px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="large"?"active":""}" data-val="large">
                  <div>Великий</div>
                  <div style="font-size: 10px; color: #64748b;">28px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="huge"?"active":""}" data-val="huge">
                  <div>Гігантський</div>
                  <div style="font-size: 10px; color: #64748b;">34px (на стіну)</div>
                </button>
              </div>
            </div>

            <!-- Labels Font Size (Розмір підписів) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🏷️ Розмір підписів блоків та статусів:</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${i.label_font_size==="compact"?"active":""}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${i.label_font_size==="normal"||!i.label_font_size?"active":""}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${i.label_font_size==="large"?"active":""}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🌓 Колірна тема оформлення:</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${i.theme_preset==="cyber_dark"||!i.theme_preset?"active":""}" data-val="cyber_dark">
                  🌙 Cyber Dark
                </button>
                <button class="seg-btn ${i.theme_preset==="oled_black"?"active":""}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${i.theme_preset==="clean_light"?"active":""}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11.5px; font-weight: 600; color: #cbd5e1;">🔍 Масштаб станції (Zoom / Scale):</span>
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8;">${Math.round(this._scale*100)}%</span>
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
    `,this._cardNode=this.shadowRoot.getElementById("stationCard"),this._editorNode=this.shadowRoot.getElementById("drawerCardEditor"),this._cardNode&&(this._cardNode.setConfig(this._config),this._hass&&(this._cardNode.hass=this._hass)),this._editorNode&&(this._editorNode.setConfig(this._config),this._hass&&(this._editorNode.hass=this._hass))}_bindEvents(){var a,s,l,d,c,b,h,_,p,y,m,w,f,u,g;const t=this.shadowRoot;(a=t.getElementById("btnOpenDrawer"))==null||a.addEventListener("click",()=>this._openDrawer()),(s=t.getElementById("btnCloseDrawer"))==null||s.addEventListener("click",()=>this._closeDrawer()),(l=t.getElementById("btnCancelDrawer"))==null||l.addEventListener("click",()=>this._closeDrawer()),(d=t.getElementById("drawerBackdrop"))==null||d.addEventListener("click",()=>this._closeDrawer()),(c=t.getElementById("btnSaveDrawer"))==null||c.addEventListener("click",()=>{this._updateCardConfig(),this._closeDrawer(),alert("✓ Налаштування збережено!")}),(b=this._editorNode)==null||b.addEventListener("config-changed",v=>{var T;const k=v.detail.config;k.appearance={...j.appearance,...((T=this._config)==null?void 0:T.appearance)||{},...k.appearance||{}},this._config=k,this._cardNode&&this._cardNode.setConfig(this._config),this._saveConfig()}),(h=t.getElementById("btnZoomIn"))==null||h.addEventListener("click",()=>this._changeScale(this._scale+.1)),(_=t.getElementById("btnZoomOut"))==null||_.addEventListener("click",()=>this._changeScale(this._scale-.1)),(p=t.getElementById("btnFullscreen"))==null||p.addEventListener("click",()=>{var v,k,T;document.fullscreenElement?(T=document.exitFullscreen)==null||T.call(document):(k=(v=document.documentElement).requestFullscreen)==null||k.call(v)}),(y=t.getElementById("btnQuickTheme"))==null||y.addEventListener("click",()=>{var O;const v=["cyber_dark","oled_black","clean_light"],k=((O=this._config.appearance)==null?void 0:O.theme_preset)||"cyber_dark",T=(v.indexOf(k)+1)%v.length,N=v[T];this._config.appearance.theme_preset=N,this._config.theme_mode=N==="clean_light"?"light":"dark",this._updateCardConfig();const I=t.getElementById("btnQuickTheme");I&&(I.innerText=N==="clean_light"?"☀️ Світла":N==="oled_black"?"⬛ OLED":"🌙 Темна")}),(m=t.getElementById("btnSyncFromLovelace"))==null||m.addEventListener("click",()=>{this._importFromLovelace(!0)});const i=t.getElementById("yamlModal"),n=t.getElementById("yamlCodeArea");(w=t.getElementById("btnOpenYamlModal"))==null||w.addEventListener("click",()=>{if(i&&n){try{n.value=zd(this._config)}catch{n.value=JSON.stringify(this._config,null,2)}i.classList.add("active")}}),(f=t.getElementById("btnCloseYamlModal"))==null||f.addEventListener("click",()=>{i==null||i.classList.remove("active")}),(u=t.getElementById("btnCopyCurrentYaml"))==null||u.addEventListener("click",()=>{var v;n&&((v=navigator.clipboard)==null||v.writeText(n.value),alert("✓ Скопійовано в буфер обміну!"))}),(g=t.getElementById("btnApplyYaml"))==null||g.addEventListener("click",()=>{var v;if(n&&n.value.trim())try{const k=n.value.trim();let T=null;k.startsWith("{")?T=JSON.parse(k):T=Ml(k),T&&typeof T=="object"&&(T.type&&delete T.type,T.appearance={...j.appearance,...((v=this._config)==null?void 0:v.appearance)||{},...T.appearance||{}},this._config=T,this._saveConfig(),this._render(),this._bindEvents(),i==null||i.classList.remove("active"),alert("✓ Конфігурацію успішно застосовано!"))}catch(k){alert("Помилка формату YAML / JSON: "+k.message)}}),t.querySelectorAll("#mainFontGrid .font-tile").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll("#mainFontGrid .font-tile").forEach(k=>k.classList.remove("active")),v.classList.add("active"),this._config.appearance.font_family=v.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#monoFontGrid .font-tile").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll("#monoFontGrid .font-tile").forEach(k=>k.classList.remove("active")),v.classList.add("active"),this._config.appearance.mono_font_family=v.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),v.classList.add("active"),this._config.appearance.power_font_size=v.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),v.classList.add("active"),this._config.appearance.label_font_size=v.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#themePresetSeg .seg-btn").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll("#themePresetSeg .seg-btn").forEach(T=>T.classList.remove("active")),v.classList.add("active");const k=v.dataset.val;this._config.appearance.theme_preset=k,this._config.theme_mode=k==="clean_light"?"light":"dark",this._updateCardConfig()})});const o=t.getElementById("sliderCardScale"),r=t.getElementById("lblCardScale");o&&o.addEventListener("input",v=>{const k=parseFloat(v.target.value);r&&(r.innerText=`${Math.round(k*100)}%`),this._changeScale(k)})}_openDrawer(){var i,n;this._isDrawerOpen=!0;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.add("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.add("active")}_closeDrawer(){var i,n;this._isDrawerOpen=!1;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.remove("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.remove("active")}_changeScale(t){const i=Math.max(.65,Math.min(1.8,Math.round(t*100)/100));this._scale=i,this._config.card_scale=i;const n=this.shadowRoot.getElementById("txtZoomVal");n&&(n.innerText=`${Math.round(i*100)}%`),this._updateCardConfig()}_updateHaStatusBadge(){var i;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("haStatusText");if(t)if(this._hass){const n=Object.keys(this._hass.states||{}).length;t.innerText=`HA Live (${n} сенсорів)`}else t.innerText="Демо режим"}}console.info("%c⚡ Energy Station Card v1.6.3 Loaded ⚡","background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");const Uo={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",tariff_night_saved:"Нічна економія",tariff_net_benefit:"Чиста вигода",tariff_net_cost:"Чисті витрати",autarky_title:"Автономність",self_consumption_title:"Власне споживання",bat_delta:"Розбаланс",bat_remaining:"Залишок",edit_card:"Редагувати",kwh_unit:"кВт·год",view_toggle_to_2d:"Перемкнути на 2D Схему",view_toggle_to_3d:"Перемкнути на 3D Станцію",charging:"ЗАРЯД",discharging:"РОЗРЯД",battery_charging:"Заряджається",battery_discharging:"Розряджається",battery_idle:"Очікування",blackout_alert:"БЛЕКАУТ / ВІДКЛЮЧЕНО",grid_stable:"Живлення стабільне",solar:"Сонячні панелі",wind:"Вітрогенерація",grid:"Електромережа",battery:"Система накопичення (АКБ)",house:"Гарантоване навантаження",smart_boiler:"Розумний Бойлер (ГВП)"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",tariff_night_saved:"Night Savings",tariff_net_benefit:"Net Benefit",tariff_net_cost:"Net Cost",autarky_title:"Autarky",self_consumption_title:"Self-Consumption",bat_delta:"Cell Delta",bat_remaining:"Remaining",edit_card:"Edit",kwh_unit:"kWh",view_toggle_to_2d:"Switch to 2D Schematic",view_toggle_to_3d:"Switch to 3D Station",charging:"CHARGE",discharging:"DISCHARGE",battery_charging:"Charging",battery_discharging:"Discharging",battery_idle:"Idle",blackout_alert:"BLACKOUT / GRID DOWN",grid_stable:"Grid Stable",solar:"Solar Panels",wind:"Wind Generation",grid:"Power Grid",battery:"Battery Storage System",house:"Essential Load",smart_boiler:"Smart Boiler (DHW)"}};class Wd extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null,this._outageJson=null,this._outageDay="today",this._outageLoading=!1,this._outageError=null,this._outageFetchedRegion=null,this._outageRefreshTimer=null,this._outageTickTimer=null,this._lastOutageSignature=null}connectedCallback(){if(this._setupResizeObserver(),this._startOutageTimers(),typeof sessionStorage<"u"&&sessionStorage.getItem("energy_station_auto_edit")==="1"){try{sessionStorage.removeItem("energy_station_auto_edit")}catch{}setTimeout(()=>this._openCardEditor(),350)}}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._stopOutageTimers()}_startOutageTimers(){var i,n,o,r,a,s;this._stopOutageTimers();const t=this._config||j;((i=t.outages)==null?void 0:i.show)===!1||((n=t.outages)==null?void 0:n.source)==="ha_entity"||(this._refreshOutageSchedule(!1),typeof setInterval=="function"&&(this._outageRefreshTimer=setInterval(()=>{this._refreshOutageSchedule(!0)},10*60*1e3),(r=(o=this._outageRefreshTimer)==null?void 0:o.unref)==null||r.call(o),this._outageTickTimer=setInterval(()=>{this._renderOutageWidgets()},30*1e3),(s=(a=this._outageTickTimer)==null?void 0:a.unref)==null||s.call(a)))}_stopOutageTimers(){this._outageRefreshTimer&&(clearInterval(this._outageRefreshTimer),this._outageRefreshTimer=null),this._outageTickTimer&&(clearInterval(this._outageTickTimer),this._outageTickTimer=null)}_openCardEditor(){var n,o;let t=this,i=null;for(;t;){if(t.tagName&&(t.tagName.toLowerCase()==="hui-card-options"||t.tagName.toLowerCase()==="hui-card-edit-mode")){i=t;break}if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(!i&&typeof document<"u"){const r=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const a of r)if(a.contains(this)||(n=a.shadowRoot)!=null&&n.contains(this)||r.length===1){i=a;break}}if(i){if(typeof i._editCard=="function"){i._editCard();return}const r=((o=i.shadowRoot)==null?void 0:o.querySelector("mwc-button, ha-button, button"))||i.querySelector("mwc-button, ha-button, button");if(r){r.click();return}if(i.path!==void 0){const a=new CustomEvent("ll-edit-card",{bubbles:!0,composed:!0,detail:{path:i.path}});i.dispatchEvent(a);return}}if(typeof window<"u"){try{typeof sessionStorage<"u"&&sessionStorage.setItem("energy_station_auto_edit","1")}catch{}const r=new URL(window.location.href);r.searchParams.has("edit")?setTimeout(()=>{var s,l;const a=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const d of a)if(d.contains(this)||(s=d.shadowRoot)!=null&&s.contains(this)||a.length===1){if(typeof d._editCard=="function"){d._editCard();return}const c=((l=d.shadowRoot)==null?void 0:l.querySelector("mwc-button, ha-button, button"))||d.querySelector("mwc-button, ha-button, button");if(c){c.click();return}}},500):(r.searchParams.set("edit","1"),window.location.href=r.toString())}}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(j))}getCardSize(){return 6}setConfig(t){if(!t)throw new Error("Invalid configuration");const i=JSON.parse(JSON.stringify(t)),n=JSON.parse(JSON.stringify(j));this._config=this._deepMerge(n,i);const o=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=o||this._config.theme_mode||"dark";const r=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=r||this._config.language||"uk";const a=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=a?parseFloat(a):this._config.card_scale||this._config.scale||1;const s=typeof localStorage<"u"?localStorage.getItem("energy_station_view_mode"):null;this._viewMode=s||this._config.view_mode||"3d",this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(t){return typeof requestAnimationFrame<"u"?requestAnimationFrame(t):setTimeout(t,0)}_changeScale(t){var r,a;let i=typeof t=="number"?t:this._scale+(t||.1);i=Math.max(.7,Math.min(2,Math.round(i*100)/100)),this._scale=i,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",i.toString());const n=(r=this.shadowRoot)==null?void 0:r.querySelector(".energy-station-container");n&&(n.style.setProperty("--es-card-scale",i.toString()),n.style.zoom=i.toString());const o=(a=this.shadowRoot)==null?void 0:a.getElementById("headerZoomVal");o&&(o.innerText=`${Math.round(i*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}_toggleViewMode(){if(this._viewMode=this._viewMode==="3d"?"2d":"3d",typeof localStorage<"u")try{localStorage.setItem("energy_station_view_mode",this._viewMode)}catch{}this._applyViewMode(),this._hass&&this._updateValues()}_applyViewMode(){var s,l,d,c,b;const t=this._viewMode==="3d",i=(s=this.shadowRoot)==null?void 0:s.getElementById("station3DContainer"),n=(l=this.shadowRoot)==null?void 0:l.getElementById("schematicView"),o=(d=this.shadowRoot)==null?void 0:d.getElementById("headerViewToggle"),r=(c=this.shadowRoot)==null?void 0:c.getElementById("energyFlowCanvas"),a=(b=this.shadowRoot)==null?void 0:b.getElementById("batBranchBadgesContainer");i&&(i.style.display=t?"block":"none"),n&&(n.style.display=t?"none":"block"),r&&(r.style.display=t?"none":"block"),a&&(a.style.display=t?"none":"block"),o&&(o.innerHTML=`<span>${t?"🧊 3D":"⚡ 2D"}</span>`,o.title=t?this._t("view_toggle_to_2d"):this._t("view_toggle_to_3d"))}set hass(t){this._hass=t,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(t,i){const n=Array.isArray(t)?[...t]:Object.assign({},t);if(!i||typeof i!="object")return n;for(const o of Object.keys(i)){const r=i[o],a=t?t[o]:void 0;r&&typeof r=="object"&&!Array.isArray(r)?n[o]=this._deepMerge(a||{},r):n[o]=r}return n}_getEntityState(t){var s;if(!this._hass||!t||!this._hass.states[t])return null;const i=this._hass.states[t],o=String(i.state).trim().replace(",","."),r=parseFloat(o),a=((s=i.attributes)==null?void 0:s.unit_of_measurement)||"";return{raw:i.state,val:isNaN(r)?0:r,unit:a,attributes:i.attributes}}_t(t){var n,o;const i=this._language||"uk";return((n=Uo[i])==null?void 0:n[t])||((o=Uo.uk)==null?void 0:o[t])||t}_toggleTheme(t){const i=t||(this._themeMode==="light"?"dark":"light");this._themeMode=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",i)}catch{}this._applyTheme()}_toggleLanguage(t){const i=t||(this._language==="en"?"uk":"en");this._language=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",i)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".energy-station-container");if(!t)return;const i=this._themeMode==="light";t.classList.toggle("theme-light",i);const n=this.shadowRoot.getElementById("headerThemeToggle");n&&(n.innerHTML=i?"☀️":"🌙",n.setAttribute("title",i?this._t("theme_dark"):this._t("theme_light")));const o=this.shadowRoot.getElementById("btnThemeDark"),r=this.shadowRoot.getElementById("btnThemeLight");o&&r&&(o.classList.toggle("active",!i),r.classList.toggle("active",i))}_formatPower(t,i=0){const n=this._language==="en"?"kW":"кВт";if(t==null){const a=(typeof i=="number"?i:0).toFixed(3);return{num:a,kw:i||0,str:a+" "+n,formatted:a+" "+n}}let o=typeof t=="number"?t:t&&typeof t.val=="number"?t.val:i;(typeof o!="number"||isNaN(o))&&(o=typeof i=="number"?i:0),t&&t.unit==="W"&&(o=o/1e3);const r=o.toFixed(3);return{num:r,kw:o,str:r+" "+n,formatted:r+" "+n}}_fireMoreInfo(t){if(!t)return;const i=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_renderCardSkeleton(){var d,c,b,h,_,p,y,m,w,f,u,g,v,k,T,N,I,O,U,P,S;const t=this._config||j;this._initialized=!0;const i=t.appearance||j.appearance||{},n={Inter:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif","JetBrains Mono":"'JetBrains Mono', monospace",Roboto:"'Roboto', sans-serif",Orbitron:"'Orbitron', sans-serif","Exo 2":"'Exo 2', sans-serif",Ubuntu:"'Ubuntu', sans-serif","system-ui":"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},o={"JetBrains Mono":"'JetBrains Mono', monospace","Roboto Mono":"'Roboto Mono', monospace",Orbitron:"'Orbitron', monospace","Fira Code":"'Fira Code', monospace","Share Tech Mono":"'Share Tech Mono', monospace"},r={compact:"18px",normal:"22px",large:"28px",huge:"34px"},a={compact:"10px",normal:"11.5px",large:"13.5px"},s={compact:"14px 18px",balanced:"22px 28px 24px 28px",spacious:"30px 36px"};this.shadowRoot.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          font-family: var(--es-font-family, ${n[i.font_family]||n.Inter});
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((d=t.animations)==null?void 0:d.speed)||1.2}s;
          --es-power-font-size: ${r[i.power_font_size]||"22px"};
          --es-label-font-size: ${a[i.label_font_size]||"11.5px"};
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
          max-width: var(--es-card-max-width, ${t.max_width||"1400px"});
          margin: 0 auto;
          padding: ${s[i.density]||"22px 28px 24px 28px"};
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
          zoom: var(--es-card-scale, ${this._scale||1});
        }

        .energy-station-container.theme-oled {
          background-color: #000000 !important;
          background-image: none !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.9) !important;
        }

        .es-mono {
          font-family: var(--es-mono-font-family, ${o[i.mono_font_family]||o["JetBrains Mono"]});
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
        ${Ta()}
        ${Va()}
      </style>

      <div class="energy-station-container ${this._themeMode==="light"?"theme-light":""}">
        
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
            <span>${t.title||"Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW v1.6.3</span>
          </div>
          <div class="es-header-controls">
            <button class="es-header-pill-btn es-header-edit-btn" id="headerEditCard" title="${this._t("edit_card")}">
              <span>⚙️</span>
              <span>${this._t("edit_card")}</span>
            </button>
            <button class="es-header-pill-btn es-mono" id="headerViewToggle" title="${this._viewMode==="3d"?this._t("view_toggle_to_2d")||"Перемкнути на 2D схему":this._t("view_toggle_to_3d")||"Перемкнути на 3D вигляд"}">
              <span>${this._viewMode==="3d"?"🧊 3D":"⚡ 2D"}</span>
            </button>
            <div class="es-zoom-control" style="display: flex; align-items: center; background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 1px 4px; gap: 2px;">
              <button class="es-header-pill-btn" id="headerZoomOut" title="Зменшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">−</button>
              <span class="es-mono" id="headerZoomVal" style="font-size: 11px; min-width: 36px; text-align: center; color: #38bdf8; font-weight: 700; cursor: pointer; user-select: none;" title="Скинути до 100%">${Math.round(this._scale*100)}%</span>
              <button class="es-header-pill-btn" id="headerZoomIn" title="Збільшити масштаб" style="border: none; background: transparent; padding: 2px 6px; font-weight: 800; font-size: 13px; line-height: 1;">+</button>
            </div>
            <button class="es-header-pill-btn" id="headerThemeToggle" title="${this._t("theme_label")}">
              ${this._themeMode==="light"?"☀️":"🌙"}
            </button>
            <button class="es-header-pill-btn es-mono" id="headerLangToggle" title="${this._t("lang_label")}">
              ${this._language==="uk"?"UA":"EN"}
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${ke.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((c=t.solar)==null?void 0:c.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${ke.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: var(--es-power-font-size, 20px); font-weight: 900; color: #fbbf24; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span id="totalPvPowerVal">12,000 ${this._language==="en"?"kW":"кВт"}</span>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ke.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(b=t.grid)!=null&&b.show_non_essential&&((h=t.grid)!=null&&h.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ke.house_outline||ke.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(_=t.grid)!=null&&_.show_car&&((p=t.grid)!=null&&p.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ke.car}</div>
              <div class="es-node-title" id="carTitle">${((y=t.grid)==null?void 0:y.car_title)||this._t("car")}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
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
                  <div class="es-inverter-icon-box">${ke.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((m=t.inverter)==null?void 0:m.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((w=t.aux)==null?void 0:w.type)==="none"||((f=t.aux)==null?void 0:f.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${ke[(u=t.aux)==null?void 0:u.type]||ke.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((g=t.aux)==null?void 0:g.type)==="microinverter"&&(!((v=t.aux)!=null&&v.title)||((k=t.aux)==null?void 0:k.title)==="Вітрогенератор")?this._t("aux_microinverter"):((T=t.aux)==null?void 0:T.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((N=t.aux)==null?void 0:N.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((I=t.wind)==null?void 0:I.show)===!1&&((O=t.aux)==null?void 0:O.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ke.house}</div>
              <div class="es-node-title">${this._t("house_title")}</div>
              <div class="es-mono es-node-power" id="essentialPowerVal" style="color: #22d3ee;">8,000 ${this._language==="en"?"kW":"кВт"}</div>
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
                <span id="batMasterPowerVal" style="font-size: var(--es-power-font-size, 20px); font-weight: 900; color: #f8fafc;">3,000 ${this._language==="en"?"kW":"кВт"}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">${this._t("bat_dir_charge")}</span>
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
        ${Ia(t,this._t.bind(this))}

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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._renderOutageWidgets(),this._bindInteractions(),this._setupResizeObserver(),this._applyViewMode(),this._rAF(()=>this._updateFlowPaths());const l=((U=t.outages)==null?void 0:U.region)||"kyiv-region";this.isConnected&&((P=t.outages)==null?void 0:P.show)!==!1&&((S=t.outages)==null?void 0:S.source)!=="ha_entity"&&this._outageFetchedRegion!==l&&this._refreshOutageSchedule(!1)}_cacheDomNodes(){const t=this.shadowRoot;this._nodes={dailySolarYield:t.getElementById("dailySolarYield"),targetSolarYield:t.getElementById("targetSolarYield"),solarProgressBar:t.getElementById("solarProgressBar"),solarSavingsDaily:t.getElementById("solarSavingsDaily"),autarkyVal:t.getElementById("autarkyVal"),selfConsVal:t.getElementById("selfConsVal"),energyBalanceRow:t.getElementById("energyBalanceRow"),totalPvPowerBadge:t.getElementById("totalPvPowerBadge"),totalPvPowerVal:t.getElementById("totalPvPowerVal"),totalPvPercentBadge:t.getElementById("totalPvPercentBadge"),totalPvSubline:t.getElementById("totalPvSubline"),totalPvCapDetail:t.getElementById("totalPvCapDetail"),totalPvCapTotal:t.getElementById("totalPvCapTotal"),solarFlowCollector:t.getElementById("solarFlowCollector"),gridImportDaily:t.getElementById("gridImportDaily"),gridCostDailyRow:t.getElementById("gridCostDailyRow"),gridCostDailyVal:t.getElementById("gridCostDailyVal"),gridCostSplitVal:t.getElementById("gridCostSplitVal"),gridTariffBadge:t.getElementById("gridTariffBadge"),gridExportDaily:t.getElementById("gridExportDaily"),gridExportIncomeRow:t.getElementById("gridExportIncomeRow"),gridExportIncomeVal:t.getElementById("gridExportIncomeVal"),gridNightSavingsRow:t.getElementById("gridNightSavingsRow"),gridNightSavingsVal:t.getElementById("gridNightSavingsVal"),netBenefitDailyRow:t.getElementById("netBenefitDailyRow"),netBenefitDailyBadge:t.getElementById("netBenefitDailyBadge"),gridPowerVal:t.getElementById("gridPowerVal"),gridDirectionLabel:t.getElementById("gridDirectionLabel"),carPowerVal:t.getElementById("carPowerVal"),carNode:t.getElementById("carNode"),nonEssentialNode:t.getElementById("nonEssentialNode"),nonEssentialPowerVal:t.getElementById("nonEssentialPowerVal"),inverterAcTemp:t.getElementById("inverterAcTemp"),inverterDcTemp:t.getElementById("inverterDcTemp"),inverterModelTag:t.getElementById("inverterModelTag"),inverterPowerVal:t.getElementById("inverterPowerVal"),inverterStatusBadge:t.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:t.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:t.getElementById("inverterSelfConsumptionVal"),inverterVolt:t.getElementById("inverterVolt"),inverterCurrent:t.getElementById("inverterCurrent"),inverterFreq:t.getElementById("inverterFreq"),auxNode:t.getElementById("auxNode"),auxTitle:t.getElementById("auxTitle"),auxPowerVal:t.getElementById("auxPowerVal"),auxSubtitle:t.getElementById("auxSubtitle"),auxIconBox:t.getElementById("auxIconBox"),windStationContainer:t.getElementById("windStationContainer"),dailyHouseKwh:t.getElementById("dailyHouseKwh"),essentialPowerVal:t.getElementById("essentialPowerVal"),subloadsBusContainer:t.getElementById("subloadsBusContainer"),subloadsBusSvg:t.getElementById("subloadsBusSvg"),subloadsFlowCollector:t.getElementById("subloadsFlowCollector"),subloadsBusBase:t.getElementById("subloadsBusBase"),subloadsBusStemBase:t.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:t.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:t.getElementById("subloadsBusFeeders"),batChargeDaily:t.getElementById("batChargeDaily"),batDischargeDaily:t.getElementById("batDischargeDaily"),masterBatterySoc:t.getElementById("masterBatterySoc"),masterBatteryFlowHint:t.getElementById("masterBatteryFlowHint"),batVoltVal:t.getElementById("batVoltVal"),batCurrentVal:t.getElementById("batCurrentVal"),batMasterTempVal:t.getElementById("batMasterTempVal"),batMasterTempBadge:t.getElementById("batMasterTempBadge"),batReserveSoc:t.getElementById("batReserveSoc"),batReserveProgressBar:t.getElementById("batReserveProgressBar"),batCapacityVal:t.getElementById("batCapacityVal"),batteryFlowCollector:t.getElementById("batteryFlowCollector"),pvPanelsContainer:t.getElementById("pvPanelsContainer"),subloadsContainer:t.getElementById("subloadsContainer"),batteryRackContainer:t.getElementById("batteryRackContainer"),bottomControlsDock:t.getElementById("bottomControlsDock"),bottomOutageDock:t.getElementById("bottomOutageDock"),outageDock3D:t.getElementById("outageDock3D")}}_renderDynamicWindTurbines(){var l,d,c,b,h,_,p,y;const t=this._config||j,i=((l=this._nodes)==null?void 0:l.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!i)return;if(i.innerHTML="",!(((d=t.wind)==null?void 0:d.show)!==!1||((c=t.aux)==null?void 0:c.type)==="wind")){i.classList.add("hidden");return}i.classList.remove("hidden");const o=((b=t.wind)==null?void 0:b.turbine_count)||((_=(h=t.wind)==null?void 0:h.turbines)==null?void 0:_.length)||2,r=((p=t.wind)==null?void 0:p.turbines)||[],a=document.createElement("div");a.className="es-wind-summary-bar es-mono",a.id="windStationSummaryBar",a.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,i.appendChild(a);const s=document.createElement("div");s.className="es-wind-pods-row",i.appendChild(s);for(let m=0;m<o;m++){const w=r[m]||{name:`Вітряк ${m+1}`,power_entity:`sensor.wind_turbine_${m+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((y=t.wind)==null?void 0:y.animation_threshold)||50},f=!!(w.daily_energy_entity||w.monthly_energy_entity),u=document.createElement("div");u.className="es-turbine-card glow-wind clickable-node",u.id=`turbineCard_${m+1}`,u.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${m+1}">
              ${ke.wind_turbine}
            </div>
            <span>${w.name||`Вітряк ${m+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${m+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${m+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${m+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${m+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${m+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${f?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${m+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${m+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,u.addEventListener("click",()=>{this._fireMoreInfo(w.power_entity)}),s.appendChild(u)}}_renderDynamicPvPanels(){var a,s,l,d,c,b;const t=this._config||j,i=this._nodes.pvPanelsContainer;if(!i)return;i.innerHTML="";const n=((a=t.solar)==null?void 0:a.pv_count)||((l=(s=t.solar)==null?void 0:s.strings)==null?void 0:l.length)||3,o=this._language==="en"?"kWp":"кВтп",r=((d=t.solar)==null?void 0:d.show_metrics)!==!1;for(let h=1;h<=n;h++){const _=h<10?`0${h}`:`${h}`,p=((b=(c=t.solar)==null?void 0:c.strings)==null?void 0:b[h-1])||{},y=p.name||`PV ${_}`,m=p.capacity_kw!==void 0?parseFloat(p.capacity_kw):4,w=p.voltage_entity||(h<=3?`sensor.deye_12k_inverter_pv${h}_voltage`:""),f=p.current_entity||(h<=3?`sensor.deye_12k_inverter_pv${h}_current`:""),u=document.createElement("div");u.className="es-pv-panel glow-solar clickable-node",u.dataset.pvIndex=h,u.id=`pvPanel_${h}`,u.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${ke.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${y}</span>
        <span class="es-pv-val es-mono" id="pvVal_${h}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${h}" style="${r?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${h}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${h}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${h}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${h}">${m.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${o}</span> <span id="pvPercent_${h}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,u.addEventListener("click",()=>{var T;const k=p.power_entity||w||f||((T=t.solar)==null?void 0:T.total_power_entity);this._fireMoreInfo(k)});const g=u.querySelector(`#pvVolt_${h}`);g&&g.addEventListener("click",k=>{k.stopPropagation(),w?this._fireMoreInfo(w):p.power_entity&&this._fireMoreInfo(p.power_entity)});const v=u.querySelector(`#pvCurr_${h}`);v&&v.addEventListener("click",k=>{k.stopPropagation(),f?this._fireMoreInfo(f):p.power_entity&&this._fireMoreInfo(p.power_entity)}),i.appendChild(u)}}_renderDynamicSubloads(){var o;const t=this._config||j,i=this._nodes.subloadsContainer;if(!i)return;i.innerHTML="",(((o=t.load)==null?void 0:o.subloads)||[]).forEach((r,a)=>{const s=document.createElement("div");s.className="es-subload-card clickable-node",s.id=`subloadCard_${a}`,s.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${ke[r.icon]||ke.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${a}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,s.addEventListener("click",()=>{this._fireMoreInfo(r.entity)}),i.appendChild(s)})}_renderDynamicBatteryRack(){var b,h,_,p,y,m,w;const t=this._config||j,i=this._nodes.batteryRackContainer;if(!i)return;i.innerHTML="";const n=((b=t.battery)==null?void 0:b.parallel_batteries)||((_=(h=t.battery)==null?void 0:h.modules)==null?void 0:_.length)||2,o=[82,76,91,68,85,90,72,80],r=[52.4,52.4,52.4,52.4,52.4,52.4],a=[25,21,22.5,20,24,19.5,23,21.5],s=[12,8,15,9,14,11,18,10],l=this._t("bat_prefix"),d=this._language==="en"?"kW":"кВт",c=this._language==="en"?"kWh":"кВт·год";for(let f=1;f<=n;f++){const u=((y=(p=t.battery)==null?void 0:p.modules)==null?void 0:y[f-1])||((w=(m=t.battery)==null?void 0:m.module_entities)==null?void 0:w[f-1])||{},g=u.name||`${l} ${f}`,v=o[(f-1)%o.length],k=r[(f-1)%r.length],T=a[(f-1)%a.length],N=s[(f-1)%s.length],I=document.createElement("div");I.className="es-battery-pack-card glow-battery clickable-node",I.id=`batPackCard_${f}`,I.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${ke.battery_vertical}</div>
        <span class="es-bat-name">${g}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${f}">${v}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${f}">${k.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${f}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${d}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${f}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${f}">${T.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${f}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${f}">${N} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${f}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${c}</div>
      `,I.addEventListener("click",O=>{var P;if(O.target.closest(`#batPackTemp_${f}`)){const S=u.temperature_entity||u.temp||`sensor.bms_rack${f}_temperature`;this._fireMoreInfo(S);return}if(O.target.closest(`#batPackDelta_${f}`)){const S=u.cell_delta_entity||u.delta_entity||`sensor.bms_rack${f}_cell_delta`;this._fireMoreInfo(S);return}const U=u.soc_entity||u.soc||u.voltage_entity||u.volt||u.current_entity||((P=t.battery)==null?void 0:P.soc_entity);this._fireMoreInfo(U)}),i.appendChild(I)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var y,m,w,f,u,g,v,k,T,N;const t=this._config||j,i=((y=this._nodes)==null?void 0:y.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!i||(i.innerHTML="",t.show_quick_settings===!1))return;const n=this._themeMode==="light",o=this._language==="en",r=((m=t.controls)==null?void 0:m.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",a=((w=t.controls)==null?void 0:w.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",s=((f=t.controls)==null?void 0:f.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",l=document.createElement("div");l.className="es-quick-settings-card",l.id="quickSettingsCard",l.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${ke.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n?ke.sun_mode:ke.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${o?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${r}">
              <span class="es-ctrl-icon es-ctrl-solar">${ke.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ke.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${o?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${s}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ke.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(u=l.querySelector("#btnEditCardQs"))==null||u.addEventListener("click",I=>{I.stopPropagation(),this._openCardEditor()}),(g=l.querySelector("#btnThemeToggle"))==null||g.addEventListener("click",I=>{I.stopPropagation(),this._toggleTheme()}),(v=l.querySelector("#btnLangToggle"))==null||v.addEventListener("click",I=>{I.stopPropagation(),this._toggleLanguage()}),(k=l.querySelector("#ctrlLabelWrapSolar"))==null||k.addEventListener("click",()=>this._fireMoreInfo(r)),(T=l.querySelector("#ctrlLabelWrapSell"))==null||T.addEventListener("click",()=>this._fireMoreInfo(a)),(N=l.querySelector("#ctrlLabelWrapGrid"))==null||N.addEventListener("click",()=>this._fireMoreInfo(s));const d=l.querySelector("#ctrlSliderSolar"),c=l.querySelector("#ctrlValSolar");d&&(this._updateSliderGradient(d),d.addEventListener("input",I=>{c&&(c.innerText=`${I.target.value} A`),this._updateSliderGradient(d)}),d.addEventListener("change",I=>{this._setNumberValue(r,I.target.value)}));const b=l.querySelector("#ctrlSliderSell"),h=l.querySelector("#ctrlValSell");b&&(this._updateSliderGradient(b),b.addEventListener("input",I=>{const O=Number(I.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");h&&(h.innerText=`${O} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(b)}),b.addEventListener("change",I=>{this._setNumberValue(a,I.target.value)}));const _=l.querySelector("#ctrlSliderGrid"),p=l.querySelector("#ctrlValGrid");_&&(this._updateSliderGradient(_),_.addEventListener("input",I=>{p&&(p.innerText=`${I.target.value} A`),this._updateSliderGradient(_)}),_.addEventListener("change",I=>{this._setNumberValue(s,I.target.value)})),i.appendChild(l),this._updateControlSliders()}_updateSliderGradient(t){if(!t)return;const i=parseFloat(t.min)||0,n=parseFloat(t.max)||100,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(100,(o-i)/(n-i)*100));t.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(t,i){if(!this._hass||!t)return;const o=t.split(".")[0]||"number",r=Number(i);this._hass.callService(o,"set_value",{entity_id:t,value:r})}_updateControlSliders(){var h,_,p,y,m,w,f,u,g;const t=this._config||j;if(t.show_quick_settings===!1)return;const i=this.shadowRoot;if(!i)return;const n=((h=t.controls)==null?void 0:h.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",o=((_=t.controls)==null?void 0:_.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",r=((p=t.controls)==null?void 0:p.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",a=i.getElementById("ctrlSliderSolar"),s=i.getElementById("ctrlValSolar"),l=i.getElementById("ctrlSliderSell"),d=i.getElementById("ctrlValSell"),c=i.getElementById("ctrlSliderGrid"),b=i.getElementById("ctrlValGrid");if(a&&(!a.matches||!a.matches(":active"))){const v=(m=(y=this._hass)==null?void 0:y.states)==null?void 0:m[n],k=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):a.value?parseFloat(a.value):80;a.value=k,s&&(s.innerText=`${Math.round(k)} A`),this._updateSliderGradient(a)}if(l&&(!l.matches||!l.matches(":active"))){const v=(f=(w=this._hass)==null?void 0:w.states)==null?void 0:f[o],k=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):l.value?parseFloat(l.value):5e3;l.value=k;const T=Math.round(k).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),N=this._language==="uk"?"Вт":"W";d&&(d.innerText=`${T} ${N}`),this._updateSliderGradient(l)}if(c&&(!c.matches||!c.matches(":active"))){const v=(g=(u=this._hass)==null?void 0:u.states)==null?void 0:g[r],k=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):c.value?parseFloat(c.value):70;c.value=k,b&&(b.innerText=`${Math.round(k)} A`),this._updateSliderGradient(c)}}_bindInteractions(){var o,r,a,s,l,d,c,b,h,_,p,y,m,w,f,u,g,v,k,T,N,I,O,U,P;const t=this.shadowRoot,i=this._config||j;(o=t.getElementById("headerEditCard"))==null||o.addEventListener("click",S=>{S.stopPropagation(),this._openCardEditor()}),(r=t.getElementById("headerViewToggle"))==null||r.addEventListener("click",S=>{S.stopPropagation(),this._toggleViewMode()}),(a=t.getElementById("headerThemeToggle"))==null||a.addEventListener("click",S=>{S.stopPropagation(),this._toggleTheme()}),(s=t.getElementById("headerLangToggle"))==null||s.addEventListener("click",S=>{S.stopPropagation(),this._toggleLanguage()}),(l=t.getElementById("headerZoomIn"))==null||l.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(this._scale+.1)}),(d=t.getElementById("headerZoomOut"))==null||d.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(this._scale-.1)}),(c=t.getElementById("headerZoomVal"))==null||c.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(1)}),(b=t.getElementById("solarHeaderNode"))==null||b.addEventListener("click",()=>{var S,L;this._fireMoreInfo(((S=i.solar)==null?void 0:S.daily_yield_entity)||((L=i.solar)==null?void 0:L.total_power_entity))}),(h=t.getElementById("totalPvPowerBadge"))==null||h.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.solar)==null?void 0:S.total_power_entity)}),(_=t.getElementById("gridNode"))==null||_.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.power_entity)}),(p=t.getElementById("nonEssentialNode"))==null||p.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.non_essential_power_entity)}),(y=t.getElementById("carNode"))==null||y.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.car_power_entity)}),(m=t.getElementById("inverterNode"))==null||m.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.inverter)==null?void 0:S.power_entity)}),(w=t.getElementById("inverterSelfConsumptionBox"))==null||w.addEventListener("click",S=>{var L;S.stopPropagation(),(L=i.inverter)!=null&&L.self_consumption_entity&&this._fireMoreInfo(i.inverter.self_consumption_entity)}),(f=t.getElementById("auxNode"))==null||f.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.aux)==null?void 0:S.power_entity)}),(u=t.getElementById("essentialNode"))==null||u.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.load)==null?void 0:S.essential_power_entity)}),(g=t.getElementById("masterBatteryHub"))==null||g.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.battery)==null?void 0:S.soc_entity)}),(v=t.getElementById("batChargeDaily"))==null||v.addEventListener("click",S=>{var L;S.stopPropagation(),this._fireMoreInfo(((L=i.battery)==null?void 0:L.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(k=t.getElementById("batDischargeDaily"))==null||k.addEventListener("click",S=>{var L;S.stopPropagation(),this._fireMoreInfo(((L=i.battery)==null?void 0:L.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let S=1;S<=8;S++){const L=t.getElementById(`batBranchBadge_${S}`),E=((N=(T=i.battery)==null?void 0:T.modules)==null?void 0:N[S-1])||((O=(I=i.battery)==null?void 0:I.module_entities)==null?void 0:O[S-1])||{};L==null||L.addEventListener("click",()=>{var B;const C=E.power_entity||E.current_entity||E.soc_entity||((B=i.battery)==null?void 0:B.soc_entity);this._fireMoreInfo(C)})}const n=S=>{var C,B,$,D;const L=(B=(C=S.target)==null?void 0:C.closest)==null?void 0:B.call(C,"[data-outage-day]");if(L){S.stopPropagation(),this._outageDay=L.getAttribute("data-outage-day")==="tomorrow"?"tomorrow":"today",this._renderOutageWidgets();return}const E=(D=($=S.target)==null?void 0:$.closest)==null?void 0:D.call($,"[data-action]");if(E){S.stopPropagation();const K=E.getAttribute("data-action");K==="refresh-outage"?this._refreshOutageSchedule(!0):K==="edit-outage"&&this._openCardEditor()}};(U=t.getElementById("bottomOutageDock"))==null||U.addEventListener("click",n),(P=t.getElementById("outageDock3D"))==null||P.addEventListener("click",n)}_getOutageHaInfo(t=null){var l,d,c;const i=this._config||j,n=i.outages||{},o=n.status_entity?this._getEntityState(n.status_entity):null,r=n.next_outage_entity?this._getEntityState(n.next_outage_entity):null,a=n.next_power_entity?this._getEntityState(n.next_power_entity):null;let s=t;if(s===null&&this._hass){const b=((l=i.grid)==null?void 0:l.voltage_entity)||((d=i.inverter)==null?void 0:d.voltage_entity),h=b?this._getEntityState(b):null,_=((c=i.grid)==null?void 0:c.voltage_threshold)??90;h&&(s=h.val<_)}return{statusRaw:(o==null?void 0:o.raw)||null,nextOutageRaw:(r==null?void 0:r.raw)||null,nextPowerRaw:(a==null?void 0:a.raw)||null,isGridBlackout:s}}async _refreshOutageSchedule(t=!1){const n=(this._config||j).outages||{};if(n.show===!1||n.source==="ha_entity")return;const o=n.region||"kyiv-region";this._outageFetchedRegion=o,this._outageLoading=!0,this._outageError=null,this._renderOutageWidgets();try{const r=await Oa(o,void 0,t);this._outageJson=r,this._outageError=null}catch(r){this._outageError=(r==null?void 0:r.message)||"Fetch error"}finally{this._outageLoading=!1,this._renderOutageWidgets()}}_getCurrentOutageSummary(t=null){const n=(this._config||j).outages||j.outages,o=this._getOutageHaInfo(t);return Ma(this._outageJson,n,new Date,o)}_renderOutageWidgets(t=null){var c,b,h,_,p,y,m,w,f,u,g;if(!this.shadowRoot)return;const i=this._config||j,n=((c=this._nodes)==null?void 0:c.bottomOutageDock)||this.shadowRoot.getElementById("bottomOutageDock"),o=((b=this._nodes)==null?void 0:b.outageDock3D)||this.shadowRoot.getElementById("outageDock3D");if(((h=i.outages)==null?void 0:h.show)===!1){n&&(n.innerHTML=""),o&&(o.innerHTML="");return}const r=this._getCurrentOutageSummary(t),a={lang:this._language,selectedDay:this._outageDay,loading:this._outageLoading,error:this._outageError};n&&(n.innerHTML=jn(r,{...a,is3D:!1})),o&&(o.innerHTML=jn(r,{...a,is3D:!0}));const s=this.shadowRoot.getElementById("gridOutageMini3D"),l=this.shadowRoot.getElementById("gridOutageMiniGroup3D"),d=this.shadowRoot.getElementById("gridOutageMiniStatus3D");if(s){s.style.display="flex";const v=this._buildOutageMiniPayload(r);l&&(l.textContent=v.groupText),d&&(d.textContent=v.statusText),s.classList&&(v.state==="off"?(p=(_=s.classList).add)==null||p.call(_,"is-off"):(m=(y=s.classList).remove)==null||m.call(y,"is-off"),v.state==="on"?(f=(w=s.classList).add)==null||f.call(w,"is-on"):(g=(u=s.classList).remove)==null||g.call(u,"is-on"))}}_buildOutageMiniPayload(t){const i=this._language==="en";let n=i?"Loading...":"Завантаження...";if(t.hasData||t.currentStatus!=="unknown"){const o=t.currentStatus==="off"?"🔴":t.currentStatus==="maybe"?"🟡":"🟢";if(t.nextEvent){const r=Yn(t.nextEvent.minutesLeft,this._language);n=t.currentStatus==="off"?`${o} ${i?"Back":"Увімк."} ${t.nextEvent.atTime} (${r})`:`${o} ${i?"Off in":"До відкл."} ${r}`}else n=t.currentStatus==="off"?`${o} ${i?"Outage":"Відключення"}`:`${o} ${i?"Power ON":"Світло є"}`}return{groupText:`🕯️ ${i?"Grp":"Група"} ${t.groupLabel}`,statusText:n,state:t.currentStatus}}_fetchNightEndFromHa(t,i){var l,d;if(this._fetchingHistoryForDate===t)return;const o=(l=(this._config||j).grid)==null?void 0:l.import_daily_entity;if(!((d=this._hass)!=null&&d.callWS)||!o)return;this._fetchingHistoryForDate=t;const r=new Date,a=new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0),s=new Date(r.getFullYear(),r.getMonth(),r.getDate(),i,5,0);this._hass.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:s.toISOString(),entity_ids:[o],no_attributes:!0}).then(c=>{const b=c==null?void 0:c[o];if(b&&b.length>0){let h=null;for(let _=b.length-1;_>=0;_--){const p=parseFloat(b[_].state);if(!isNaN(p)&&p>=0){h=p;break}}if(h!==null){const _=`es_tariff_split_${t}`;let p={};if(typeof localStorage<"u")try{const y=localStorage.getItem(_);y&&(p=JSON.parse(y))}catch{}if(p.night_end=h,p.night_end_hour=i,p.night_end_verified=!0,typeof localStorage<"u")try{localStorage.setItem(_,JSON.stringify(p))}catch{}this._hass&&this._updateValues()}}}).catch(c=>{console.warn("Could not fetch night tariff history from HA:",c)})}_calculateTariffs(t,i,n,o=0){var g,v,k,T,N,I,O,U,P,S,L,E,C,B,$,D,K,ee,le,ae,_e;const a=(this._config||j).tariffs||{};if(a.enabled===!1){(g=this._nodes)!=null&&g.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(v=this._nodes)!=null&&v.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(k=this._nodes)!=null&&k.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),(T=this._nodes)!=null&&T.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none"),(N=this._nodes)!=null&&N.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),(I=this._nodes)!=null&&I.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none");return}const s=a.currency||"грн",l=typeof a.day_rate=="number"?a.day_rate:4.32,d=typeof a.night_rate=="number"?a.night_rate:2.16,c=typeof a.export_rate=="number"?a.export_rate:5.3,b=typeof a.night_start_hour=="number"?a.night_start_hour:23,h=typeof a.night_end_hour=="number"?a.night_end_hour:7,_=new Date,p=_.getHours()+_.getMinutes()/60,y=b>h?p>=b||p<h:p>=b&&p<h;if((O=this._nodes)!=null&&O.gridTariffBadge&&a.show_active_badge!==!1){const G=y?d:l,Q=y?this._t("tariff_night"):this._t("tariff_day"),W=y?"🌙":"☀️",de=y?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",ie=y?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",me=y?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=de,this._nodes.gridTariffBadge.style.border=`1px solid ${ie}`,this._nodes.gridTariffBadge.style.color=me,this._nodes.gridTariffBadge.innerText=`${W} ${Q}: ${G.toFixed(2)} ${s}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(U=this._nodes)!=null&&U.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((P=this._nodes)!=null&&P.solarSavingsDaily&&a.show_solar_savings!==!1&&n>0){const G=n*l;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${G.toFixed(2)} ${s}`,this._nodes.solarSavingsDaily.style.display="block"}else(S=this._nodes)!=null&&S.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((L=this._nodes)!=null&&L.gridExportIncomeRow&&a.show_export_income!==!1&&typeof i=="number"&&i>0){const G=i*c;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${G.toFixed(2)} ${s}`),this._nodes.gridExportIncomeRow.style.display="block"}else(E=this._nodes)!=null&&E.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof t!="number"||isNaN(t)||t<0){(C=this._nodes)!=null&&C.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(B=this._nodes)!=null&&B.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),($=this._nodes)!=null&&$.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none");return}let m=null,w=null;if(a.import_night_entity||a.import_day_entity){const G=a.import_night_entity?this._getEntityState(a.import_night_entity):null,Q=a.import_day_entity?this._getEntityState(a.import_day_entity):null;G&&typeof G.val=="number"&&(m=G.val),Q&&typeof Q.val=="number"&&(w=Q.val),m!==null&&w===null?w=Math.max(0,t-m):w!==null&&m===null&&(m=Math.max(0,t-w))}if(m===null||w===null){const G=`${_.getFullYear()}-${String(_.getMonth()+1).padStart(2,"0")}-${String(_.getDate()).padStart(2,"0")}`,Q=`es_tariff_split_${G}`;let W={};if(typeof localStorage<"u")try{const de=localStorage.getItem(Q);de&&(W=JSON.parse(de))}catch{}if(p<h){if(m=t,w=0,W.ongoing_night_val=t,W.ongoing_night_hour=p,W.night_end=t,W.night_end_hour=p,W.night_end_verified=!1,typeof localStorage<"u")try{localStorage.setItem(Q,JSON.stringify(W))}catch{}}else if(p>=h&&p<b){const de=W.night_end_verified===!0,ie=typeof W.night_end_hour=="number"&&W.night_end_hour>=h-.25;if((de||ie)&&typeof W.night_end=="number"&&W.night_end<=t)m=W.night_end,w=Math.max(0,t-m);else{this._fetchNightEndFromHa(G,h);let me=t*Math.min(1,h/Math.max(p,1));typeof o=="number"&&o>.5&&(me=Math.min(t,Math.max(me,o))),m=me,w=Math.max(0,t-m)}if(W.day_end=t,typeof localStorage<"u")try{localStorage.setItem(Q,JSON.stringify(W))}catch{}}else{const de=typeof W.night_end=="number"&&W.night_end_verified?W.night_end:t*(h/p),ie=typeof W.day_end=="number"?W.day_end:t;w=Math.max(0,ie-de);const me=Math.max(0,t-ie);m=de+me}}const f=m*d+w*l;(D=this._nodes)!=null&&D.gridCostDailyRow&&a.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${f.toFixed(2)} ${s}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${m.toFixed(1)} + ☀️ ${w.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(K=this._nodes)!=null&&K.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");const u=m>0&&l>d?m*(l-d):0;if((ee=this._nodes)!=null&&ee.gridNightSavingsRow&&a.show_night_savings!==!1&&u>.05?(this._nodes.gridNightSavingsVal&&(this._nodes.gridNightSavingsVal.innerText=`🌙 ${this._t("tariff_night_saved")}: ~${u.toFixed(2)} ${s}`),this._nodes.gridNightSavingsRow.style.display="block"):(le=this._nodes)!=null&&le.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),(ae=this._nodes)!=null&&ae.netBenefitDailyRow&&a.show_net_benefit!==!1){const G=typeof n=="number"&&n>0?n*l:0,Q=typeof i=="number"&&i>0?i*c:0,W=G+Q-f;this._nodes.netBenefitDailyBadge&&(W>=0?(this._nodes.netBenefitDailyBadge.style.background="rgba(16, 185, 129, 0.15)",this._nodes.netBenefitDailyBadge.style.border="1px solid rgba(16, 185, 129, 0.35)",this._nodes.netBenefitDailyBadge.style.color="#34d399",this._nodes.netBenefitDailyBadge.innerText=`💰 ${this._t("tariff_net_benefit")}: +${W.toFixed(2)} ${s}`):(this._nodes.netBenefitDailyBadge.style.background="rgba(56, 189, 248, 0.12)",this._nodes.netBenefitDailyBadge.style.border="1px solid rgba(56, 189, 248, 0.3)",this._nodes.netBenefitDailyBadge.style.color="#38bdf8",this._nodes.netBenefitDailyBadge.innerText=`💰 ${this._t("tariff_net_cost")}: ${W.toFixed(2)} ${s}`)),this._nodes.netBenefitDailyRow.style.display="block"}else(_e=this._nodes)!=null&&_e.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none")}_updateValues(){var Jt,Qt,ue,z,q,J,Ze,ht,bt,yt,_t,Zt,Xt,ei,ti,ii,zi,Wi,Gi,Hi,qi,Ui,Yi,ji,Ki,Ji,Qi,Zi,Xi,Yo,jo,Ko,Jo,Qo,Zo,Xo,er,tr,ir,nr,or,rr,ar,sr,lr,dr,cr,pr,fr,gr,ur,hr,br,yr,_r,mr,vr,xr,wr,kr,Sr,Er,Cr,$r,Tr,Ir,Br,Nr,Ar,Lr,Dr,Pr,Rr,Mr,Fr,Or,Vr,zr,Wr,Gr,Hr,qr,Ur,Yr,jr,Kr,Jr,Qr,Zr,Xr,ea,ta,ia,na,oa,ra,aa,sa,la,da,ca,pa,fa,ga,ua,ha,ba,ya,_a,ma,va,xa,wa;if(!this._nodes.dailySolarYield)return;const t=this._config||j,i=this._language==="en"?"kW":"кВт",n=((Jt=t.solar)==null?void 0:Jt.pv_count)||((ue=(Qt=t.solar)==null?void 0:Qt.strings)==null?void 0:ue.length)||3;let o=0,r=0,a=!1;for(let x=1;x<=n;x++){const F=(q=(z=t.solar)==null?void 0:z.strings)==null?void 0:q[x-1],R=(F==null?void 0:F.voltage_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_voltage`:""),X=(F==null?void 0:F.current_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_current`:""),A=(F==null?void 0:F.power_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_power`:"");if(this._getEntityState(A)||this._getEntityState(R)||this._getEntityState(X)){a=!0;break}}for(let x=1;x<=n;x++){const F=this.shadowRoot.getElementById(`pvVal_${x}`),R=this.shadowRoot.getElementById(`pvVolt_${x}`),X=this.shadowRoot.getElementById(`pvCurr_${x}`),A=(Ze=(J=t.solar)==null?void 0:J.strings)==null?void 0:Ze[x-1],Ie=(A==null?void 0:A.voltage_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_voltage`:""),se=(A==null?void 0:A.current_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_current`:""),Ce=(A==null?void 0:A.power_entity)||(x<=3?`sensor.deye_12k_inverter_pv${x}_power`:""),xe=this._getEntityState(Ie),qe=this._getEntityState(se),he=this._getEntityState(Ce);let Be=0,ze=0,be=0;he?be=this._formatPower(he).kw:xe&&qe?be=xe.val*qe.val/1e3:xe?be=0:be=a?0:4,xe?Be=xe.val:Be=a?0:380+x*4.5,qe?ze=qe.val:he&&Be>0?ze=be*1e3/Be:ze=a?0:3.12+x*.28,o+=be,r+=ze,F&&(F.innerText=`${be.toFixed(3)} ${i}`),R&&(R.innerText=`${Be.toFixed(1)} V`),X&&(X.innerText=`${ze.toFixed(2)} A`);const ye=this.shadowRoot.getElementById(`pvMetrics_${x}`);if(ye){const ai=((ht=t.solar)==null?void 0:ht.show_metrics)!==!1,si=!!(xe||qe||!a||A!=null&&A.voltage_entity||A!=null&&A.current_entity||Be>0||ze>0);ye.style.display=ai&&si?"flex":"none"}const tt=(A==null?void 0:A.capacity_kw)!==void 0?parseFloat(A.capacity_kw):(A==null?void 0:A.installed_power)!==void 0?parseFloat(A.installed_power):a?0:4,ni=tt>0&&be>0?Math.min(100,Math.round(be/tt*100)):0,vi=this.shadowRoot.getElementById(`pvCapVal_${x}`),oi=this.shadowRoot.getElementById(`pvPercent_${x}`),ri=this.shadowRoot.getElementById(`pvCap_${x}`);vi&&(tt>0?(vi.innerText=tt.toFixed(1).replace(".",","),oi&&(oi.innerText=`(${ni}%)`,oi.style.color=ni>=70?"#34d399":ni>=30?"#fbbf24":"#94a3b8"),ri&&(ri.style.display="flex")):ri&&(ri.style.display="none"))}const s=this._getEntityState((bt=t.solar)==null?void 0:bt.total_power_entity);let l=0;s?l=this._formatPower(s).kw:l=o;let d=((yt=t.solar)==null?void 0:yt.installed_power)!==void 0?parseFloat(t.solar.installed_power):0;if(isNaN(d)||d<=0){let x=0;for(let F=0;F<n;F++){const R=(Zt=(_t=t.solar)==null?void 0:_t.strings)==null?void 0:Zt[F],X=(R==null?void 0:R.capacity_kw)!==void 0?parseFloat(R.capacity_kw):(R==null?void 0:R.installed_power)!==void 0?parseFloat(R.installed_power):0;!isNaN(X)&&X>0&&(x+=X)}d=x>0?x:a?0:12}const c=d>0?l/d*100:0,b=Math.min(100,Math.max(0,c)),h=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${r.toFixed(2)} A`:`Сумарний струм СЕС: ${r.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(d>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(b)}%`,this._nodes.totalPvPercentBadge.style.color=b>=70?"#34d399":b>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=b>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(d>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${b.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=b>=70?"#34d399":b>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${d.toFixed(1).replace(".",",")} ${h})`)):r>0&&((Xt=t.solar)==null?void 0:Xt.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${r.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const _=this._getEntityState((ei=t.solar)==null?void 0:ei.daily_yield_entity),p=_?_.val:a?0:48.6;this._nodes.dailySolarYield.innerText=p.toFixed(1);const y=((ti=t.solar)==null?void 0:ti.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=y.toFixed(1);const m=Math.min(100,Math.round(p/y*100));this._nodes.solarProgressBar.style.width=`${m}%`;const w=this._getEntityState((ii=t.inverter)==null?void 0:ii.power_entity);this._nodes.inverterPowerVal&&((zi=t.inverter)!=null&&zi.power_entity&&w?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(w,0).str):this._nodes.inverterPowerVal.style.display="none");const f=this._getEntityState((Wi=t.inverter)==null?void 0:Wi.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=f?f.val.toFixed(2):"41,20";const u=this._getEntityState((Gi=t.inverter)==null?void 0:Gi.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=u?u.val.toFixed(2):"38,40";const g=this._getEntityState((Hi=t.inverter)==null?void 0:Hi.voltage_entity);this._nodes.inverterVolt.innerText=g?g.val.toFixed(2):"231,45";const v=this._getEntityState((qi=t.inverter)==null?void 0:qi.current_entity);this._nodes.inverterCurrent.innerText=v?v.val.toFixed(2):"8,60";const k=this._getEntityState((Ui=t.inverter)==null?void 0:Ui.frequency_entity);this._nodes.inverterFreq.innerText=k?k.val.toFixed(2):"50,01";const T=((Yi=t.wind)==null?void 0:Yi.show)!==!1||((ji=t.aux)==null?void 0:ji.type)==="wind",N=this.shadowRoot.getElementById("windStationContainer"),I=this._nodes.auxNode;let O=0;if(N)if(!T)N.classList.add("hidden");else{N.classList.remove("hidden");const x=((Ki=t.wind)==null?void 0:Ki.turbine_count)||((Qi=(Ji=t.wind)==null?void 0:Ji.turbines)==null?void 0:Qi.length)||2,F=((Zi=t.wind)==null?void 0:Zi.turbines)||[];let R=0,X=0,A=!1,Ie=!1;for(let he=0;he<x;he++){const Be=F[he]||{power_entity:`sensor.wind_turbine_${he+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((Xi=t.wind)==null?void 0:Xi.animation_threshold)||50},ze=this.shadowRoot.getElementById(`turbinePower_${he+1}`),be=this.shadowRoot.getElementById(`turbineStatus_${he+1}`),ye=this.shadowRoot.getElementById(`turbineIcon_${he+1}`),tt=this.shadowRoot.getElementById(`turbineCard_${he+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${he+1}`);const ni=this.shadowRoot.getElementById(`turbineDailyVal_${he+1}`),vi=this.shadowRoot.getElementById(`turbineMonthlyVal_${he+1}`),oi=this.shadowRoot.getElementById(`turbineEnergyFooter_${he+1}`),ri=this._hass?0:he===0?1.56:.22,ai=this._getEntityState(Be.power_entity),si=this._formatPower(ai,ri);ze&&(ze.innerText=si.str),O+=si.kw;let xi=si.kw*1e3;ai&&ai.unit==="W"&&(xi=ai.val);const Ri=Be.animation_threshold??((Yo=t.wind)==null?void 0:Yo.animation_threshold)??50,Mt=ye==null?void 0:ye.querySelector(".turbine-rotor"),Mi=Be.rpm_entity||Be.speed_entity||((jo=t.wind)==null?void 0:jo.rpm_entity)||((Ko=t.wind)==null?void 0:Ko.speed_entity)||(he===0?"sensor.wind_rpm":"");let we=Mi&&((Jo=this._hass)!=null&&Jo.states[Mi])?this._getEntityState(Mi):null;if(!we&&he===0&&((Qo=this._hass)!=null&&Qo.states["sensor.wind_rpm"])&&(we=this._getEntityState("sensor.wind_rpm")),xi>=Ri||we&&typeof we.val=="number"&&we.val>0){Mt&&Mt.classList.add("spinning"),tt&&(tt.classList.add("glow-wind"),tt.style.borderColor="rgba(6, 182, 212, 0.55)");const Nt=((Zo=t.wind)==null?void 0:Zo.max_power)||3e3,gn=((Xo=t.wind)==null?void 0:Xo.max_rpm)||600;let en=0;we&&typeof we.val=="number"&&we.val>0?en=Math.min(1,Math.max(0,we.val/gn)):en=Math.min(1,Math.max(0,(xi-Ri)/(Nt-Ri)));const Ue=(3.2-en*2.75).toFixed(2);Mt&&Mt.style.setProperty("--turbine-speed",`${Ue}s`),be&&(be.innerText=this._t("wind_gen"),be.style.color="#67e8f9")}else Mt&&Mt.classList.remove("spinning"),tt&&(tt.classList.remove("glow-wind"),tt.style.borderColor="rgba(255, 255, 255, 0.08)"),be&&(be.innerText=this._t("wind_calm"),be.style.color="#94a3b8");const ki=this.shadowRoot.getElementById(`turbineRpmBox_${he+1}`);if(ki)if(we&&we.raw!=="unavailable"&&we.raw!=="unknown"&&typeof we.val=="number"&&!isNaN(we.val)){ki.style.display="inline";const gn=we.unit?we.unit:"RPM";ki.innerHTML=`<span id="turbineRpmVal_${he+1}">${Math.round(we.val)}</span> ${gn}`}else ki.style.display="none";const Xe=this._getEntityState(Be.daily_energy_entity),It=this._getEntityState(Be.monthly_energy_entity);ni&&(ni.innerText=Xe&&typeof Xe.val=="number"&&!isNaN(Xe.val)?Xe.val.toFixed(2):"0.00"),vi&&(vi.innerText=It&&typeof It.val=="number"&&!isNaN(It.val)?It.val.toFixed(1):"0.0");const Bt=!!(Be.daily_energy_entity||Be.monthly_energy_entity);oi&&(oi.style.display=Bt?"flex":"none"),Xe&&typeof Xe.val=="number"&&!isNaN(Xe.val)&&(R+=Xe.val,A=!0),It&&typeof It.val=="number"&&!isNaN(It.val)&&(X+=It.val,Ie=!0)}const se=this.shadowRoot.getElementById("windTotalDailyVal"),Ce=this.shadowRoot.getElementById("windTotalMonthlyVal"),xe=this._getEntityState((er=t.wind)==null?void 0:er.daily_energy_entity),qe=this._getEntityState((tr=t.wind)==null?void 0:tr.monthly_energy_entity);se&&(xe&&typeof xe.val=="number"&&!isNaN(xe.val)?se.innerText=xe.val.toFixed(2):A?se.innerText=R.toFixed(2):se.innerText="0.00"),Ce&&(qe&&typeof qe.val=="number"&&!isNaN(qe.val)?Ce.innerText=qe.val.toFixed(1):Ie?Ce.innerText=X.toFixed(1):Ce.innerText="0.0")}let U=0;if(I)if(((ir=t.aux)==null?void 0:ir.type)==="none"||((nr=t.aux)==null?void 0:nr.type)==="wind")I.classList.add("hidden");else{I.classList.remove("hidden");const x=this._getEntityState((or=t.aux)==null?void 0:or.power_entity),F=this._hass?0:2,R=this._formatPower(x,F);U=R.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=R.str);const X={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let A=(rr=t.aux)==null?void 0:rr.title;((ar=t.aux)==null?void 0:ar.type)==="microinverter"&&(!A||A==="Вітрогенератор")?A="Мікроінвертор":(sr=t.aux)!=null&&sr.type&&X[t.aux.type]&&(!A||A==="Вітрогенератор")?A=X[t.aux.type]:A||(A="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=A),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=ke[(lr=t.aux)==null?void 0:lr.type]||ke.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((dr=t.aux)==null?void 0:dr.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),I.style.borderColor="rgba(192, 132, 252, 0.45)",I.style.background="rgba(88, 28, 135, 0.35)",I.classList.remove("glow-wind"),I.classList.add("glow-aux")}const P=this.shadowRoot.getElementById("nonEssentialNode"),S=!!((cr=t.grid)!=null&&cr.show_non_essential&&((pr=t.grid)!=null&&pr.non_essential_power_entity))||((fr=t.grid)==null?void 0:fr.show_non_essential)!==!1&&!!((gr=t.grid)!=null&&gr.non_essential_power_entity);let L=0;if(P)if(S){P.classList.remove("hidden");const x=this._getEntityState(t.grid.non_essential_power_entity),F=this._formatPower(x,0);L=F.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=F.str)}else P.classList.add("hidden");const E=this.shadowRoot.getElementById("carNode"),C=!!((ur=t.grid)!=null&&ur.show_car&&((hr=t.grid)!=null&&hr.car_power_entity))||((br=t.grid)==null?void 0:br.show_car)!==!1&&!!((yr=t.grid)!=null&&yr.car_power_entity);let B=0;if(E)if(C){E.classList.remove("hidden");const x=this._getEntityState(t.grid.car_power_entity),F=this._formatPower(x,0);B=F.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=F.str)}else E.classList.add("hidden");let $=0;(((_r=t.load)==null?void 0:_r.subloads)||[]).forEach((x,F)=>{const R=this.shadowRoot.getElementById(`subloadVal_${F}`),X=this._getEntityState(x.entity),A=this._formatPower(X,0);$+=A.kw,R&&(R.innerText=A.str)});const D=this._getEntityState((mr=t.battery)==null?void 0:mr.soc_entity),K=D?D.val:80;this._nodes.masterBatterySoc.innerText=`${K.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const ee=this._getEntityState((vr=t.battery)==null?void 0:vr.power_entity),le=this._getEntityState((xr=t.battery)==null?void 0:xr.current_entity),ae=ee?ee.unit==="W"?ee.val/1e3:ee.val:0,_e=((wr=t.battery)==null?void 0:wr.power_sign)||((kr=t.battery)!=null&&kr.invert_power?"standard":"deye");let G=!1,Q=!1;const W=Math.abs(ae);W>=.02?_e==="deye"?ae<0?G=!0:Q=!0:ae>0?G=!0:Q=!0:le&&Math.abs(le.val)>=.3&&(_e==="deye"?le.val<0?G=!0:Q=!0:le.val>0?G=!0:Q=!0),this._isCharging=G,this._isDischarging=Q;const ie=G?W:0,me=Q?W:0;if(this._nodes.masterBatteryFlowHint){let x=this._t("bat_idle"),F="#94a3b8";G?(x=this._t("bat_dir_charge"),F="#34d399"):Q&&(x=this._t("bat_dir_discharge"),F="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${W.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${F}; font-weight: 700; font-size: 14px;">${x}</span>`}const Ye=this._getEntityState((Sr=t.battery)==null?void 0:Sr.voltage_entity),ot=Ye?Ye.val.toFixed(2):"53.24",gt=le?le.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${ot.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${gt.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Er=t.battery)==null?void 0:Er.reserve_soc)!==void 0?t.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const x=((Cr=t.battery)==null?void 0:Cr.reserve_soc)!==void 0?t.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${x}%`}let Ne=this._getEntityState(($r=t.load)==null?void 0:$r.essential_power_entity);!Ne&&(!((Tr=t.load)!=null&&Tr.essential_power_entity)||((Ir=t.load)==null?void 0:Ir.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((Br=t.load)==null?void 0:Br.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(Ne=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const Ae=Ne&&typeof Ne.val=="number"&&!isNaN(Ne.val)?Math.max(0,Ne.unit==="W"?Ne.val/1e3:Ne.val):0,rt=!!(Ne&&Ae>0);let Se=null,Me=!1,$e=this._getEntityState((Nr=t.grid)==null?void 0:Nr.power_entity);if(!$e){const x=["sensor.deye_12k_inverter_total_grid_power","sensor.deye_12k_inverter_grid_power","sensor.inverter_12_kvt_total_grid_power","sensor.inverter_12_kvt_grid_power","sensor.inverter_12_kvt_grid_l1_power","sensor.inverter_12_kvt_grid_l2_power","sensor.inverter_12_kvt_grid_l3_power","sensor.esp32_deye_inverter_grid_power","sensor.esp32_deye_inverter_total_grid_power","sensor.deye_grid_power","sensor.grid_power","sensor.solarman_total_grid_power","sensor.solarman_grid_power","sensor.sunsynk_grid_power","sensor.sunsynk_total_grid_power"];for(const F of x){const R=this._getEntityState(F);if(R&&typeof R.val=="number"&&!isNaN(R.val)){$e=R;break}}}const Ge=$e?$e.unit==="W"?$e.val/1e3:$e.val:0,fe=l+O+(U>0?U:0)+me;if((Ar=t.grid)!=null&&Ar.external_power_entity){const x=this._getEntityState(t.grid.external_power_entity);if(x&&typeof x.val=="number"&&!isNaN(x.val)){const F=Math.abs(x.unit==="W"?x.val/1e3:x.val),R=F<.03&&(ie>.1&&fe<.1||Ge>.1),X=ie>.5&&fe<.15&&F<ie-.2;!R&&!X&&(Se=x,Me=!0)}}if(!Se)if($e&&Ge>.05)Se=$e,Me=!1;else{const x=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"],F=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),R=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),X=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");let A=null;if(F&&R&&X&&!isNaN(F.val)&&!isNaN(R.val)&&!isNaN(X.val)){const Ie=(F.unit==="kW"?F.val*1e3:F.val)+(R.unit==="kW"?R.val*1e3:R.val)+(X.unit==="kW"?X.val*1e3:X.val);A={val:Ie,unit:"W",raw:String(Ie)}}if(!A)for(const Ie of x){const se=this._getEntityState(Ie);if(se&&typeof se.val=="number"&&!isNaN(se.val)){A=se;break}}if(!A&&((Lr=this._hass)!=null&&Lr.states)){const se=Object.keys(this._hass.states).find(Ce=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(Ce)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(Ce));if(se){const Ce=this._getEntityState(se);Ce&&typeof Ce.val=="number"&&!isNaN(Ce.val)&&(A=Ce)}}if(A){const Ie=Math.abs(A.unit==="kW"?A.val:A.val/1e3),se=Ie<.03&&(ie>.1&&fe<.1||Ge>.1&&fe<.1),Ce=ie>.5&&fe<.15&&Ie<ie-.2;!se&&!Ce&&Ie>0&&(Se=A,Me=!0)}Se||(Se=$e,Me=!1)}const ve=Se?Se.unit==="W"?Se.val/1e3:Se.val:0,je=((Dr=t.grid)==null?void 0:Dr.power_sign)||((Pr=t.grid)!=null&&Pr.invert_power?"inverted":"deye"),at=((Rr=t.grid)==null?void 0:Rr.selling_enabled)===!0,te=(((Mr=t.grid)==null?void 0:Mr.min_power_threshold)!==void 0?t.grid.min_power_threshold:50)/1e3,ne=this._getEntityState((Fr=t.grid)==null?void 0:Fr.status_entity),Le=this._getEntityState(((Or=t.grid)==null?void 0:Or.voltage_entity)||((Vr=t.inverter)==null?void 0:Vr.voltage_entity)),V=((zr=t.grid)==null?void 0:zr.voltage_threshold)!==void 0?t.grid.voltage_threshold:90;let Z=!0;if(ne){const x=String(ne.raw||ne.val).toLowerCase();(x==="off"||x==="false"||x==="0"||x==="disconnected"||x==="offline"||x==="unavailable"||x==="unknown")&&(Z=!1)}else Le&&typeof Le.val=="number"&&!isNaN(Le.val)&&Le.val<V&&(Z=!1);const Ee=fe<.15,Fe=fe<ie+.05,Te=Ee||Fe;let ce=!1,ge=!1,Y=0;if(!Z)Y=0,ce=!1,ge=!1;else{if(Te)Y=Math.abs(ve),Y>=te?(ge=!0,ce=!1):(Y=0,ge=!1,ce=!1);else if(Me)Y=Math.abs(ve),Y>=te&&(je==="deye"?ve<0?ce=!0:ge=!0:ve>0?ce=!0:ge=!0);else if(je==="deye"){if(ve>0)Y=ve,Y>=te&&(ge=!0);else if(ve<0){const R=Math.abs(ve),X=Math.max(0,R-Ae);X>=te?(Y=X,ce=!0):(Y=0,ce=!1)}}else if(ve<0)Y=Math.abs(ve),Y>=te&&(ge=!0);else if(ve>0){const R=Math.max(0,ve-Ae);R>=te?(Y=R,ce=!0):(Y=0,ce=!1)}if(((Wr=t.grid)==null?void 0:Wr.auto_calculate)!==!1&&ge&&!Me){const R=Math.max(Ae,$),X=ie+R+L+B;R>.05&&X>fe+Y+.1&&(Y=Y+R)}if(Te){const R=this._getEntityState((Gr=t.grid)==null?void 0:Gr.voltage_entity)||this._getEntityState((Hr=t.inverter)==null?void 0:Hr.voltage_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_voltage")||this._getEntityState("sensor.esp32_deye_inverter_grid_voltage")||this._getEntityState("sensor.deye_12k_inverter_grid_voltage"),X=this._getEntityState((qr=t.inverter)==null?void 0:qr.current_entity)||this._getEntityState((Ur=t.grid)==null?void 0:Ur.current_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_current")||this._getEntityState("sensor.inverter_12_kvt_current_l1")||this._getEntityState("sensor.esp32_deye_inverter_grid_current")||this._getEntityState("sensor.deye_12k_inverter_grid_current")||this._getEntityState("sensor.grid_current"),A=R&&typeof R.val=="number"&&!isNaN(R.val)?R.val:0,Ie=X&&typeof X.val=="number"&&!isNaN(X.val)?X.val:0,se=A>=V&&Ie>=.5,Ce=ie>.1&&fe<.1;if(se){const be=A*Ie/1e3;(Y<.05||Y<ie-.05||be>Y+.3)&&(Y=be,ge=!0,ce=!1)}else if(Ce&&(Y<.05||Y<ie-.05)){const be=Math.max(Ae,$),ye=be>0?be:.8;Y=Math.max(Y,ie+.15+ye),ge=!0,ce=!1}const qe=(((Yr=t.inverter)==null?void 0:Yr.standby_power)!==void 0?t.inverter.standby_power:100)/1e3,he=Math.max(Ae,$),Be=ie+he+L+B+qe,ze=Math.max(0,Be-fe);ze>.05&&Y<ze-.1&&(Y=ze,ge=!0,ce=!1)}const F=Math.max(0,l+O+(U>0?U:0)+me-ie-Ae-L-B);Te||!at?ce=!1:ce&&Y>F+.1&&(Y=F,Y<te&&(ce=!1,Y=0))}const et=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(Z?(this._nodes.gridPowerVal.innerText=`${Y.toFixed(3)} ${i}`,ce?this._nodes.gridPowerVal.style.color="#34d399":ge?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${i}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(Z?ce?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):ge?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),et&&(Z?(et.classList.add("glow-grid"),et.style.borderColor="rgba(56, 189, 248, 0.4)"):(et.classList.remove("glow-grid"),et.style.borderColor="rgba(239, 68, 68, 0.45)"));const Ke=this._getEntityState((jr=t.grid)==null?void 0:jr.import_daily_entity);this._nodes.gridImportDaily.innerText=Ke?`${Ke.val.toFixed(2)} kWh`:"0.00 kWh";const Je=this._getEntityState((Kr=t.grid)==null?void 0:Kr.export_daily_entity);this._nodes.gridExportDaily.innerText=Je?`${Je.val.toFixed(2)} kWh`:"0.00 kWh";const pi=(Jr=t.battery)==null?void 0:Jr.charge_daily_entity;let He=this._getEntityState(pi);He||(He=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge"));const fi=He&&typeof He.val=="number"?He.val:0;this._calculateTariffs(Ke?Ke.val:0,Je?Je.val:0,p,fi);const gi=ge?Y:0,Vt=ce?Y:0,zt=l+O+(U>0?U:0)+gi+me,ui=ie+Vt+L+B,Wt=Math.max(0,zt-ui),st=this._getEntityState((Qr=t.inverter)==null?void 0:Qr.self_consumption_entity),xt=st&&typeof st.val=="number"&&!isNaN(st.val)?Math.max(0,st.unit==="W"?st.val/1e3:st.val):null,Gt=(((Zr=t.inverter)==null?void 0:Zr.standby_power)!==void 0?t.inverter.standby_power:100)/1e3;let lt=0,Qe=0;if(rt)if(lt=Math.max($,Ae),xt!==null)Qe=xt;else{const x=Math.max(0,zt-(ie+Vt+lt+L+B));Qe=x>0?x:Gt}else xt!==null?Qe=xt:Qe=Math.min(Wt,Gt),lt=Math.max($,Math.max(0,Wt-Qe));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((Xr=t.inverter)==null?void 0:Xr.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Qe<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Qe*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Qe.toFixed(3)} ${i}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${lt.toFixed(3)} ${i}`;const dt=this._getEntityState((ea=t.load)==null?void 0:ea.daily_house_entity);this._nodes.dailyHouseKwh.innerText=dt?`${dt.val.toFixed(2)} kWh`:"12,40 kWh";const wt=this._getEntityState(((ta=t.solar)==null?void 0:ta.autarky_entity)||"sensor.deye_inverter_daily_autarky"),kt=this._getEntityState(((ia=t.solar)==null?void 0:ia.self_consumption_entity)||"sensor.deye_inverter_daily_self_consumption");let St=wt&&typeof wt.val=="number"&&!isNaN(wt.val)?wt.val:null;if(St===null){const x=dt&&typeof dt.val=="number"&&!isNaN(dt.val)?dt.val:12.4,F=Ke&&typeof Ke.val=="number"&&!isNaN(Ke.val)?Ke.val:0;x>.05?St=Math.min(100,Math.max(0,(x-F)/x*100)):St=100}let Et=kt&&typeof kt.val=="number"&&!isNaN(kt.val)?kt.val:null;if(Et===null){const x=Je&&typeof Je.val=="number"&&!isNaN(Je.val)?Je.val:0;p>.05?Et=Math.min(100,Math.max(0,(p-x)/p*100)):Et=0}this._nodes.autarkyVal&&(this._nodes.autarkyVal.innerText=`${Math.round(St)}%`),this._nodes.selfConsVal&&(this._nodes.selfConsVal.innerText=`${Math.round(Et)}%`);const Ct=((na=t.battery)==null?void 0:na.parallel_batteries)||((ra=(oa=t.battery)==null?void 0:oa.modules)==null?void 0:ra.length)||2;let $t=0;for(let x=0;x<Ct;x++){const F=((sa=(aa=t.battery)==null?void 0:aa.modules)==null?void 0:sa[x])||((da=(la=t.battery)==null?void 0:la.module_entities)==null?void 0:da[x])||{},R=F.capacity_kwh!==void 0?parseFloat(F.capacity_kwh):x===0?7.88:x===1?5.12:(((ca=t.battery)==null?void 0:ca.capacity_kwh)||13)/Ct;$t+=isNaN(R)?0:R}$t<=0&&($t=parseFloat((pa=t.battery)==null?void 0:pa.capacity_kwh)||13);const Dt=this._getEntityState(((fa=t.battery)==null?void 0:fa.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Pt=Dt&&!isNaN(Dt.val)?Dt.val:null,Rt=Pt!==null&&Pt<=40?Pt:$t,Ht=this._getEntityState(((ga=t.battery)==null?void 0:ga.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),hi=Ht?Ht.val:80,bi=Rt*(hi/100),qt=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${bi.toFixed(2).replace(".",",")} ${qt} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${Rt.toFixed(1).replace(".",",")})</span></span>`);const Ut=this._getEntityState(((ua=t.battery)==null?void 0:ua.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),yi=Ut?Ut.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${yi.toFixed(1).replace(".",",")}`),He||(He=this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const _i=(ha=t.battery)==null?void 0:ha.discharge_daily_entity;let Tt=this._getEntityState(_i);Tt||(Tt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=He?`${He.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=Tt?`${Tt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const Yt=[];for(let x=1;x<=Ct;x++){const F=this.shadowRoot.getElementById(`batPackSoc_${x}`),R=this.shadowRoot.getElementById(`batPackVolt_${x}`),X=this.shadowRoot.getElementById(`batPackCurr_${x}`),A=this.shadowRoot.getElementById(`batPackPower_${x}`),Ie=this.shadowRoot.getElementById(`batPackTempVal_${x}`),se=this.shadowRoot.getElementById(`batPackDelta_${x}`),Ce=this.shadowRoot.getElementById(`batPackDeltaVal_${x}`),xe=this.shadowRoot.getElementById(`batPackStateTag_${x}`),qe=this.shadowRoot.getElementById(`batPackKwh_${x}`),he=this.shadowRoot.getElementById(`batPackBar1_${x}`),Be=this.shadowRoot.getElementById(`batPackBar2_${x}`),ze=this.shadowRoot.getElementById(`batPackBar3_${x}`),be=this.shadowRoot.getElementById(`batPackBar4_${x}`),ye=((ya=(ba=t.battery)==null?void 0:ba.modules)==null?void 0:ya[x-1])||((ma=(_a=t.battery)==null?void 0:_a.module_entities)==null?void 0:ma[x-1])||{},tt=ye.soc_entity||ye.soc||`sensor.bms_rack${x}_soc`,ni=ye.current_entity||`sensor.bms_rack${x}_current`,vi=ye.voltage_entity||ye.volt||`sensor.bms_rack${x}_voltage`,oi=ye.power_entity||`sensor.bms_rack${x}_power`,ri=ye.temperature_entity||ye.temp||`sensor.bms_rack${x}_temperature`,ai=ye.cell_delta_entity||ye.delta_entity||`sensor.bms_rack${x}_cell_delta`,si=this._getEntityState(tt),xi=this._getEntityState(ni),Ri=this._getEntityState(vi),Mt=this._getEntityState(oi),Mi=this._getEntityState(ri);let we=this._getEntityState(ai);if(we||(we=this._getEntityState(`sensor.bms_rack${x}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${x}_cell_difference`)),!we&&(ye.max_cell_voltage_entity||ye.min_cell_voltage_entity)){const Ft=this._getEntityState(ye.max_cell_voltage_entity),Ea=this._getEntityState(ye.min_cell_voltage_entity);if(Ft&&Ea){const Gn=Math.abs(Ft.val-Ea.val);we={val:Gn<1?Math.round(Gn*1e3):Gn,unit:"mV"}}}const wi=si?si.val:x===1?82:x===2?85:75,ki=Ri?Ri.val:x===1?54.1:x===2?54:52.4,Xe=xi?xi.val:x===1?18.4:x===2?25.2:8.2,It=Mi?Mi.val:x===1?36.5:x===2?21:22.5;let Bt=null;if(we){let Ft=we.val;Ft<1&&Ft>0?Bt=Math.round(Ft*1e3):Bt=Math.round(Ft)}else this._hass||(Bt=x===1?12:x===2?8:15);let Nt=0;Mt?Nt=Math.abs(this._formatPower(Mt).kw):Nt=ki*Math.abs(Xe)/1e3;const en=(ye.capacity_kwh!==void 0?parseFloat(ye.capacity_kwh):x===1?7.88:x===2?5.12:Rt/Ct)*(wi/100);F&&(F.innerText=`${wi.toFixed(0)}%`),R&&(R.innerText=`${ki.toFixed(1).replace(".",",")} V`),X&&(X.innerText=`${Math.abs(Xe).toFixed(1).replace(".",",")} A`),A&&(A.innerText=`${Nt.toFixed(2).replace(".",",")} ${i}`),Ie&&(Ie.innerText=`${It.toFixed(1).replace(".",",")}`),Ce&&(Bt!==null&&!isNaN(Bt)?(Ce.innerText=`${Bt} mV`,se&&(se.style.display="inline-flex",Bt<=25?(se.style.color="#34d399",se.style.background="rgba(52, 211, 153, 0.12)",se.style.borderColor="rgba(52, 211, 153, 0.3)"):Bt<=50?(se.style.color="#fbbf24",se.style.background="rgba(251, 191, 36, 0.12)",se.style.borderColor="rgba(251, 191, 36, 0.3)"):(se.style.color="#f87171",se.style.background="rgba(248, 113, 113, 0.16)",se.style.borderColor="rgba(248, 113, 113, 0.4)"))):se&&(se.style.display="none")),qe&&(qe.innerText=`~${en.toFixed(2).replace(".",",")} ${qt}`);let Ue=!1;Q?Ue=!1:G?Ue=!0:xi?Ue=(((va=t.battery)==null?void 0:va.power_sign)||"deye")==="deye"?Xe<0:Xe>0:Ue=Xe<0;const Si=this.shadowRoot.getElementById(`batBranchBadge_${x}`);Si&&(Nt<.02?(Si.className="es-bat-branch-badge es-mono idle",Si.innerHTML=`<span>0.00 ${i}</span>`):Ue?(Si.className="es-bat-branch-badge es-mono charge",Si.innerHTML=`<span>${Nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`):(Si.className="es-bat-branch-badge es-mono discharge",Si.innerHTML=`<span>${Nt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));const li=this.shadowRoot.getElementById(`batPackCard_${x}`),ka=li==null?void 0:li.querySelector(".es-battery-gauge"),Sa=li==null?void 0:li.querySelector(".es-battery-gauge-nipple");li&&(li.style.borderColor=Ue?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),ka&&(ka.style.borderColor=Ue?"#10b981":"#ef4444"),Sa&&(Sa.style.background=Ue?"#10b981":"#ef4444"),xe&&(Ue?(xe.className="es-bat-state-tag charge",xe.innerText=this._t("bat_charge"),xe.style.color="#34d399",xe.style.background="rgba(16, 185, 129, 0.18)",xe.style.borderColor="rgba(16, 185, 129, 0.4)"):(xe.className="es-bat-state-tag discharge",xe.innerText=this._t("bat_discharge"),xe.style.color="#f87171",xe.style.background="rgba(239, 68, 68, 0.18)",xe.style.borderColor="rgba(239, 68, 68, 0.4)")),A&&(A.style.color=Ue?"#34d399":"#f87171"),X&&(X.style.color=Ue?"#38bdf8":"#f87171");const un=Ue?"active-green":"active-red";he&&Be&&ze&&be&&(he.className=`es-bat-bar ${wi>=10?un:""}`,Be.className=`es-bat-bar ${wi>=35?un:""}`,ze.className=`es-bat-bar ${wi>=65?un:""}`,be.className=`es-bat-bar ${wi>=85?un:""}`),Yt.push({kwNum:Nt,isChg:Ue})}this._updateFlowPaths(),this._updateFlowAnimations(Z?Y:0,ce,ge,l,lt,W,G,Q,B,Yt,L,$,U),this._updateControlSliders();const jt=!Z,ut=((xa=this._config)==null?void 0:xa.outages)||{},mi=ut.status_entity&&((wa=this._getEntityState(ut.status_entity))==null?void 0:wa.raw)||"",Kt=`${jt}|${mi}|${ut.region||""}|${ut.group||""}|${ut.show!==!1}`;Kt!==this._lastOutageSignature&&(this._lastOutageSignature=Kt,this._renderOutageWidgets(jt)),this._update3DStationView(l,O,!Z,Z,ce,ge,Y,lt,W,G,Q,K,$)}_update3DStationView(t,i,n,o,r,a,s,l,d,c,b,h,_){var ne,Le,V,Z,Ee,Fe,Te,ce,ge,Y,et,Ke,Je,pi,He,fi,gi,Vt,zt,ui,Wt,st,xt,Pi,Gt,lt,Qe,dt,wt,kt,St,Et,Ct,$t,Dt,Pt,Rt,Ht,hi,bi,qt,Ut,yi,_i,Tt,Yt,jt,ut,mi,Kt,Jt,Qt,ue,z,q,J,Ze,ht,bt,yt,_t,Zt,Xt,ei,ti,ii,zi,Wi,Gi,Hi,qi,Ui,Yi,ji,Ki,Ji,Qi,Zi;if(!this.shadowRoot)return;const p=this._config||j,y=this._getEntityState((ne=p.solar)==null?void 0:ne.daily_yield_entity),m=y?`${y.val.toFixed(1)} ${this._t("kwh_unit")||"кВт·год"}`:(V=(Le=this._nodes)==null?void 0:Le.dailySolarYield)!=null&&V.innerText?`${this._nodes.dailySolarYield.innerText.replace(",",".")} ${this._t("kwh_unit")||"кВт·год"}`:"11.0 кВт·год",w=((Z=this.shadowRoot.getElementById("pvVal_1"))==null?void 0:Z.innerText)||this._formatPower(this._getEntityState(((Te=(Fe=(Ee=p.solar)==null?void 0:Ee.strings)==null?void 0:Fe[0])==null?void 0:Te.power_entity)||"sensor.deye_12k_inverter_pv1_power")).formatted,f=((ce=this.shadowRoot.getElementById("pvVolt_1"))==null?void 0:ce.innerText)||"195.3 V",u=((ge=this.shadowRoot.getElementById("pvCurr_1"))==null?void 0:ge.innerText)||"0.30 A",g=((Y=this.shadowRoot.getElementById("pvVal_2"))==null?void 0:Y.innerText)||this._formatPower(this._getEntityState(((Je=(Ke=(et=p.solar)==null?void 0:et.strings)==null?void 0:Ke[1])==null?void 0:Je.power_entity)||"sensor.deye_12k_inverter_pv2_power")).formatted,v=((pi=this.shadowRoot.getElementById("pvVolt_2"))==null?void 0:pi.innerText)||"183.9 V",k=((He=this.shadowRoot.getElementById("pvCurr_2"))==null?void 0:He.innerText)||"0.40 A",T=((fi=this.shadowRoot.getElementById("pvVal_3"))==null?void 0:fi.innerText)||this._formatPower(this._getEntityState(((zt=(Vt=(gi=p.solar)==null?void 0:gi.strings)==null?void 0:Vt[2])==null?void 0:zt.power_entity)||"sensor.deye_12k_inverter_pv3_power")).formatted,N=((ui=this.shadowRoot.getElementById("pvVolt_3"))==null?void 0:ui.innerText)||"205.4 V",I=((Wt=this.shadowRoot.getElementById("pvCurr_3"))==null?void 0:Wt.innerText)||"0.30 A",O=((st=this.shadowRoot.getElementById("turbinePower_1"))==null?void 0:st.innerText)||this._formatPower(this._getEntityState(((Gt=(Pi=(xt=p.wind)==null?void 0:xt.turbines)==null?void 0:Pi[0])==null?void 0:Gt.power_entity)||"sensor.wind_turbine_1_power")).formatted,U=((lt=this.shadowRoot.getElementById("turbineRpmVal_1"))==null?void 0:lt.innerText)||"90 rpm",P=((Qe=this.shadowRoot.getElementById("turbinePower_2"))==null?void 0:Qe.innerText)||this._formatPower(this._getEntityState(((kt=(wt=(dt=p.wind)==null?void 0:dt.turbines)==null?void 0:wt[1])==null?void 0:kt.power_entity)||"sensor.wind_turbine_2_power")).formatted,S=((St=this.shadowRoot.getElementById("turbineStatus_2"))==null?void 0:St.innerText)||this._t("wind_calm")||"Штиль",L=this._getEntityState(((Et=p.grid)==null?void 0:Et.voltage_entity)||((Ct=p.inverter)==null?void 0:Ct.voltage_entity)),E=this._getEntityState((($t=p.grid)==null?void 0:$t.current_entity)||((Dt=p.inverter)==null?void 0:Dt.current_entity)),C=L?`${L.val.toFixed(1)} V`:(Rt=(Pt=this._nodes)==null?void 0:Pt.inverterVolt)!=null&&Rt.innerText?`${this._nodes.inverterVolt.innerText} V`:n?"8.8 V":"230.0 V",B=E?`${E.val.toFixed(1)} A`:(hi=(Ht=this._nodes)==null?void 0:Ht.inverterCurrent)!=null&&hi.innerText?`${this._nodes.inverterCurrent.innerText} A`:"0.0 A",$=this._getEntityState((bi=p.inverter)==null?void 0:bi.ac_temperature_entity)||this._getEntityState("sensor.deye_12k_inverter_ac_temperature"),D=this._getEntityState((qt=p.inverter)==null?void 0:qt.dc_temperature_entity)||this._getEntityState("sensor.deye_12k_inverter_dc_temperature"),K=$?`${$.val.toFixed(2)} °C`:(yi=(Ut=this._nodes)==null?void 0:Ut.inverterAcTemp)!=null&&yi.innerText?`${this._nodes.inverterAcTemp.innerText} °C`:"41.20 °C",ee=D?`${D.val.toFixed(2)} °C`:(Tt=(_i=this._nodes)==null?void 0:_i.inverterDcTemp)!=null&&Tt.innerText?`${this._nodes.inverterDcTemp.innerText} °C`:"38.80 °C",le=(jt=(Yt=this._nodes)==null?void 0:Yt.inverterSelfVal)!=null&&jt.innerText?`⚡ ${this._nodes.inverterSelfVal.innerText}`:"⚡ 214 Вт",ae=this._getEntityState((ut=p.battery)==null?void 0:ut.voltage_entity),_e=this._getEntityState((mi=p.battery)==null?void 0:mi.current_entity),G=this._getEntityState(((Kt=p.battery)==null?void 0:Kt.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature"),Q=ae?`${ae.val.toFixed(2).replace(".",",")} V`:((Qt=(Jt=this._nodes)==null?void 0:Jt.batVoltVal)==null?void 0:Qt.innerText)||"52,85 V",W=_e?`${Math.abs(_e.val).toFixed(2).replace(".",",")} A`:(z=(ue=this._nodes)==null?void 0:ue.batCurrentVal)!=null&&z.innerText?this._nodes.batCurrentVal.innerText.replace("-",""):"2,96 A",de=G?`${G.val.toFixed(1).replace(".",",")} °C`:(J=(q=this._nodes)==null?void 0:q.batMasterTempVal)!=null&&J.innerText?`${this._nodes.batMasterTempVal.innerText} °C`:"25,0 °C",ie=((ht=(Ze=this._nodes)==null?void 0:Ze.batCapacityVal)==null?void 0:ht.innerText)||((bt=this.shadowRoot.getElementById("batEstTime"))==null?void 0:bt.innerText)||"~23,70 кВт·год",me=((yt=this.shadowRoot.getElementById("batPackSoc_1"))==null?void 0:yt.innerText)||`${Math.round(h)}%`,Ye=((_t=this.shadowRoot.getElementById("batPackPower_1"))==null?void 0:_t.innerText)||`${(d*.51).toFixed(2)} кВт`,ot=((Zt=this.shadowRoot.getElementById("batPackVolt_1"))==null?void 0:Zt.innerText)||Q,gt=((Xt=this.shadowRoot.getElementById("batPackTempVal_1"))==null?void 0:Xt.innerText)||"30.5 °C",Ne=((ei=this.shadowRoot.getElementById("batPackDeltaVal_1"))==null?void 0:ei.innerText)||"Δ6 мВ",Ae=((ti=this.shadowRoot.getElementById("batPackSoc_2"))==null?void 0:ti.innerText)||`${Math.round(h)}%`,rt=((ii=this.shadowRoot.getElementById("batPackPower_2"))==null?void 0:ii.innerText)||`${(d*.49).toFixed(2)} кВт`,Se=((zi=this.shadowRoot.getElementById("batPackVolt_2"))==null?void 0:zi.innerText)||Q,Me=((Wi=this.shadowRoot.getElementById("batPackTempVal_2"))==null?void 0:Wi.innerText)||"16.0 °C",$e=((Gi=this.shadowRoot.getElementById("batPackDeltaVal_2"))==null?void 0:Gi.innerText)||"Δ11 мВ",Ge=(Hi=this.shadowRoot.getElementById("subloadVal_0"))==null?void 0:Hi.innerText;let fe=0;if(Ge){const Xi=parseFloat(Ge.replace(",","."));fe=isNaN(Xi)?_>0?_:1.127:Xi}else fe=_>0?_:1.127;const ve=this._getEntityState((Yi=(Ui=(qi=p.load)==null?void 0:qi.subloads)==null?void 0:Ui[0])==null?void 0:Yi.temperature_entity),je=this._getEntityState((ji=p.load)==null?void 0:ji.daily_energy_entity),at=je?`Спожито за добу: ${je.val.toFixed(1)} ${this._t("kwh_unit")||"кВт·год"}`:(Ji=(Ki=this._nodes)==null?void 0:Ki.dailyHouseKwh)!=null&&Ji.innerText?`Спожито за добу: ${this._nodes.dailyHouseKwh.innerText}`:"Спожито за добу: 21.3 кВт·год",te={solarPowerKw:t,solarPowerStr:this._formatPower(t).formatted,solarStatusStr:t>.02?this._t("solar_yield_today")||"Генерація активна":this._t("inverter_offline")||"Генерації зараз немає (ніч)",solarYieldTodayStr:m,pv1:{powerStr:w,specStr:`${f} · ${u}`},pv2:{powerStr:g,specStr:`${v} · ${k}`},pv3:{powerStr:T,specStr:`${N} · ${I}`},windPowerKw:i,windPowerStr:this._formatPower(i).formatted,windStatusStr:i>.01?this._t("wind_gen")||"Генерація":this._t("wind_calm")||"Штиль",turb1PowerStr:O,turb1RpmStr:U,turb2PowerStr:P,turb2StatusStr:S,gridPowerKw:n?0:r?-s:s,gridPowerStr:n?"0.000 кВт":this._formatPower(s).formatted,gridDirectionStr:n?this._t("grid_dir_off")||"ВИМКНЕНО":r?this._t("grid_dir_export")||"← Експорт у мережу":s>.02?this._t("grid_dir_import")||"→ Імпорт з мережі":"Мережа (0 експорт)",gridVoltageStr:C,gridCurrentStr:B,isBlackout:n,invStatusStr:n?this._t("inverter_standby")||"АВТОНОМНИЙ РЕЖИМ (EPS)":this._t("inverter_working")||"ПРАЦЮЄ (ON-GRID)",invLcdPowerStr:this._formatPower(l||s||t).formatted,invTempAcStr:K,invTempDcStr:ee,invSelfStr:le,batPowerStr:this._formatPower(d).formatted,batSoc:Math.round(h),isDischarging:b,isCharging:c,batCurrentStr:W,batBusStatsStr:`Шина: ${Q} · Темп: ${de}`,batEstTimeStr:ie,rack1:{socStr:me,powerStr:Ye,voltageStr:ot,tempStr:gt,deltaStr:Ne},rack2:{socStr:Ae,powerStr:rt,voltageStr:Se,tempStr:Me,deltaStr:$e},housePowerStr:this._formatPower(l).formatted,houseStatusStr:n?"Живлення від батареї (EPS)":"Споживання будинку",houseDayTotalStr:at,boilerPowerKw:fe,boilerPowerStr:this._formatPower(fe).formatted,boilerTempStr:ve?`${ve.val.toFixed(0)} °C`:"65 °C",boilerStatusStr:fe>.05?"Нагрів активний":"Очікування",otherPowerStr:this._formatPower(Math.max(0,l-fe)).formatted,outageShow:((Qi=p.outages)==null?void 0:Qi.show)!==!1,outageMini:((Zi=p.outages)==null?void 0:Zi.show)!==!1?this._buildOutageMiniPayload(this._getCurrentOutageSummary(n)):null};Ba(this.shadowRoot,te,this._t.bind(this))}_setupResizeObserver(){var i;if(this._resizeObserver)return;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".energy-station-container");t&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(t)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var t,i,n,o,r,a,s,l,d;try{const c=(t=this.shadowRoot)==null?void 0:t.querySelector(".energy-station-container");if(!c)return;const b=c.getBoundingClientRect();if(b.width===0||b.height===0)return;const h=this._config||j,_=this._scale||1,p=(E,C=.5,B=.5)=>{if(!E)return null;const $=E.getBoundingClientRect();return{x:Math.round(($.left-b.left+$.width*C)/_),y:Math.round(($.top-b.top+$.height*B)/_)}},y=(E,C,B)=>{const $=this.shadowRoot.getElementById(E),D=this.shadowRoot.getElementById(C);$&&$.setAttribute("d",B||""),D&&D.setAttribute("d",B||"")},m=this.shadowRoot.getElementById("gridNode"),w=this.shadowRoot.getElementById("inverterNode"),f=this.shadowRoot.getElementById("essentialNode"),u=this.shadowRoot.getElementById("totalPvPowerBadge"),g=this.shadowRoot.getElementById("masterBatteryHub"),v=this.shadowRoot.getElementById("carNode");if(m&&w){const E=m.getBoundingClientRect(),C=w.getBoundingClientRect();if(E.bottom<C.top+30){const $=p(m,.7,1),D=p(w,.2,0);if($&&D){const K=Math.round(($.y+D.y)/2),ee=`M ${$.x} ${$.y} C ${$.x} ${K}, ${D.x} ${K}, ${D.x} ${D.y}`;y("pathGridInvBase","pathGridInvFlow",ee)}}else{const $=Math.round((C.top-b.top+C.height*.55)/_),D=Math.round((E.right-b.left)/_),K=Math.round((C.left-b.left)/_),ee=Math.round((E.top-b.top+E.height*.5)/_);let le="";if(Math.abs(ee-$)<=8)le=`M ${D} ${$} L ${K} ${$}`;else{const ae=Math.round(D+24);le=`M ${D} ${ee} C ${ae} ${ee}, ${ae} ${$}, ${K} ${$}`}y("pathGridInvBase","pathGridInvFlow",le)}}if(w&&f){const E=f.getBoundingClientRect(),C=w.getBoundingClientRect();if(E.bottom<C.top+30){const $=p(w,.8,0),D=p(f,.3,1);if($&&D){const K=Math.round(($.y+D.y)/2),ee=`M ${$.x} ${$.y} C ${$.x} ${K}, ${D.x} ${K}, ${D.x} ${D.y}`;y("pathInvLoadBase","pathInvLoadFlow",ee)}}else{const $=Math.round((C.top-b.top+C.height*.55)/_),D=Math.round((C.right-b.left)/_),K=Math.round((E.left-b.left)/_),ee=Math.round((E.top-b.top+E.height*.5)/_);let le="";if(Math.abs(ee-$)<=8)le=`M ${D} ${$} L ${K} ${$}`;else{const ae=Math.round(K-24);le=`M ${D} ${$} C ${ae} ${$}, ${ae} ${ee}, ${K} ${ee}`}y("pathInvLoadBase","pathInvLoadFlow",le)}}if(u&&w){const E=p(u,.5,1),C=p(w,.5,0);if(E&&C){const B=`M ${E.x} ${E.y} L ${C.x} ${C.y}`;y("pathSolarInvBase","pathSolarInvFlow",B)}}if(w&&g){const E=p(w,.5,1),C=p(g,.5,0);if(E&&C){const B=`M ${E.x} ${E.y} L ${C.x} ${C.y}`;y("pathInvBatBase","pathInvBatFlow",B)}}const k=this.shadowRoot.getElementById("nonEssentialNode"),T=k&&!k.classList.contains("hidden")&&k.offsetHeight>0,N=v&&!v.classList.contains("hidden")&&v.offsetHeight>0;if(m&&T){const E=p(m,.5,1),C=p(k,.5,0);if(E&&C){const B=`M ${E.x} ${E.y} L ${C.x} ${C.y}`;y("pathGridNonEssBase","pathGridNonEssFlow",B)}}else y("pathGridNonEssBase","pathGridNonEssFlow","");if(N){const E=T?k:m;if(E){const C=p(E,.5,1),B=p(v,.5,0);if(C&&B){const $=`M ${C.x} ${C.y} L ${B.x} ${B.y}`;y("pathNonEssCarBase","pathNonEssCarFlow",$)}}else y("pathNonEssCarBase","pathNonEssCarFlow","")}else y("pathNonEssCarBase","pathNonEssCarFlow","");const I=this.shadowRoot.getElementById("subloadsBusContainer");if(f&&I){const E=p(f,.5,1),C=p(I,.5,0);if(E&&C){const B=`M ${E.x} ${E.y} L ${C.x} ${C.y}`;y("pathLoadSubloadsBase","pathLoadSubloadsFlow",B)}}else y("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const O=this.shadowRoot.getElementById("auxNode");if(w&&O&&!O.classList.contains("hidden")&&O.offsetHeight>0){const E=p(O,.35,1),C=p(w,.9,0);if(E&&C){const B=Math.round((E.y+C.y)/2),$=`M ${E.x} ${E.y} C ${E.x} ${B}, ${C.x} ${B}, ${C.x} ${C.y}`;y("pathInvAuxBase","pathInvAuxFlow",$)}}else y("pathInvAuxBase","pathInvAuxFlow","");y("pathBatStemBase","pathBatStemFlow","");const U=this.shadowRoot.getElementById("windStationContainer"),S=((i=h.wind)==null?void 0:i.show)!==!1||((n=h.aux)==null?void 0:n.type)==="wind"?((o=h.wind)==null?void 0:o.turbine_count)||((a=(r=h.wind)==null?void 0:r.turbines)==null?void 0:a.length)||2:0;for(let E=1;E<=4;E++)if(E<=S&&U&&!U.classList.contains("hidden")){const C=this.shadowRoot.getElementById(`turbineCard_${E}`);if(C&&g){const B=p(C,.5,1),$=S===1?.5:.28+(E-1)/(S-1)*.44,D=p(g,$,0);if(B&&D){const K=`M ${B.x} ${B.y} L ${D.x} ${D.y}`;y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,K)}}else y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,"")}else y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,"");const L=((s=h.battery)==null?void 0:s.parallel_batteries)||((d=(l=h.battery)==null?void 0:l.modules)==null?void 0:d.length)||2;for(let E=1;E<=8;E++){const C=this.shadowRoot.getElementById(`batPackCard_${E}`),B=this.shadowRoot.getElementById(`batBranchBadge_${E}`);if(E<=L&&g&&C){const $=p(g,.5,1),D=p(C,.5,0);if($&&D){const K=Math.round($.y+(D.y-$.y)*.45);let ee="";Math.abs($.x-D.x)<=4?ee=`M ${$.x} ${$.y} L ${D.x} ${D.y}`:ee=`M ${$.x} ${$.y} C ${$.x} ${K}, ${D.x} ${K}, ${D.x} ${D.y}`,y(`pathBat${E}Base`,`pathBat${E}Flow`,ee),B&&(B.style.left=`${D.x}px`,B.style.top=`${K}px`,B.style.display="flex")}else y(`pathBat${E}Base`,`pathBat${E}Flow`,""),B&&(B.style.display="none")}else y(`pathBat${E}Base`,`pathBat${E}Flow`,""),B&&(B.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var t,i,n,o,r;try{const a=this._config||j,s=this._scale||1,l=this.shadowRoot.getElementById("solarBusSvg"),d=((t=a.solar)==null?void 0:t.pv_count)||((n=(i=a.solar)==null?void 0:i.strings)==null?void 0:n.length)||3;if(l&&d>0){const h=l.getBoundingClientRect(),_=this.shadowRoot.getElementById("pvPanel_1"),p=this.shadowRoot.getElementById(`pvPanel_${d}`),y=this.shadowRoot.getElementById("solarBusBase"),m=this.shadowRoot.getElementById("solarFlowCollector"),w=this.shadowRoot.getElementById("solarBusStemBase"),f=this.shadowRoot.getElementById("solarBusStemFlow"),u=this.shadowRoot.getElementById("solarBusFeeders");if(_&&p&&h.width>0){const g=_.getBoundingClientRect(),v=p.getBoundingClientRect(),k=Math.round((g.left-h.left+g.width/2)/s),T=Math.round((v.left-h.left+v.width/2)/s),N=13,I=Math.round((k+T)/2);if(y&&(y.setAttribute("x1",k),y.setAttribute("y1",N),y.setAttribute("x2",T),y.setAttribute("y2",N)),m&&(m.setAttribute("x1",k),m.setAttribute("y1",N),m.setAttribute("x2",T),m.setAttribute("y2",N)),w&&(w.setAttribute("x1",I),w.setAttribute("y1",N),w.setAttribute("x2",I),w.setAttribute("y2",26)),f&&(f.setAttribute("x1",I),f.setAttribute("y1",N),f.setAttribute("x2",I),f.setAttribute("y2",26)),u){let O="";for(let U=1;U<=d;U++){const P=this.shadowRoot.getElementById(`pvPanel_${U}`);if(P){const S=P.getBoundingClientRect(),L=Math.round((S.left-h.left+S.width/2)/s);O+=`
                  <line x1="${L}" y1="0" x2="${L}" y2="${N}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${L}" y1="0" x2="${L}" y2="${N}" stroke="#fbbf24" stroke-width="2.5" />
                `}}u.innerHTML=O}}}const c=this.shadowRoot.getElementById("subloadsBusSvg"),b=((r=(o=a.load)==null?void 0:o.subloads)==null?void 0:r.length)||3;if(c&&b>0){const h=c.getBoundingClientRect(),_=this.shadowRoot.getElementById("subloadCard_0"),p=this.shadowRoot.getElementById(`subloadCard_${b-1}`),y=this.shadowRoot.getElementById("essentialNode"),m=this.shadowRoot.getElementById("subloadsBusBase"),w=this.shadowRoot.getElementById("subloadsFlowCollector"),f=this.shadowRoot.getElementById("subloadsBusStemBase"),u=this.shadowRoot.getElementById("subloadsBusStemFlow"),g=this.shadowRoot.getElementById("subloadsBusFeeders");if(_&&p&&h.width>0){const v=_.getBoundingClientRect(),k=p.getBoundingClientRect(),T=Math.round((v.left-h.left+v.width/2)/s),N=Math.round((k.left-h.left+k.width/2)/s),I=13;let O=Math.round((T+N)/2);if(y){const S=y.getBoundingClientRect();O=Math.round((S.left-h.left+S.width/2)/s)}const U=Math.min(T,O),P=Math.max(N,O);if(m&&(m.setAttribute("x1",U),m.setAttribute("y1",I),m.setAttribute("x2",P),m.setAttribute("y2",I)),w&&(w.setAttribute("x1",U),w.setAttribute("y1",I),w.setAttribute("x2",P),w.setAttribute("y2",I)),f&&(f.setAttribute("x1",O),f.setAttribute("y1",0),f.setAttribute("x2",O),f.setAttribute("y2",I)),u&&(u.setAttribute("x1",O),u.setAttribute("y1",0),u.setAttribute("x2",O),u.setAttribute("y2",I)),g){let S="";for(let L=0;L<b;L++){const E=this.shadowRoot.getElementById(`subloadCard_${L}`);if(E){const C=E.getBoundingClientRect(),B=Math.round((C.left-h.left+C.width/2)/s);S+=`
                  <line x1="${B}" y1="${I}" x2="${B}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${B}" y1="${I}" x2="${B}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}g.innerHTML=S}}}}catch{}}_applyFlowAnimation(t,i,n,o,r){if(!t)return;if(!r){t.setAttribute("class",`flow-pulse ${i} inactive`),t.style.opacity="0",t.style.animation="none";return}const a=n?"flow-reverse":"flow-forward",s=n?"esFlowBackward":"esFlowForward";t.setAttribute("class",`flow-pulse ${i} ${a}`),t.style.opacity="1",t.style.setProperty("--flow-speed",o),t.style.animation=`${s} ${o} linear infinite`}_updateFlowAnimations(t,i,n,o,r,a,s,l,d,c=[],b=0,h=0,_=0){var Ae,rt,Se,Me,$e,Ge,fe,ve,je,at,te,ne,Le;const p=this._config||j,y=((Ae=p.animations)==null?void 0:Ae.enabled)!==!1,m=((rt=p.animations)==null?void 0:rt.speed)||1.2,w=(V,Z=10)=>{const Ee=Math.abs(V);if(Ee<.05)return"2.5s";const Fe=Math.min(1,Ee/Z);return`${Math.max(.4,(2.6-Fe*1.9)*(m/1.2)).toFixed(2)}s`},f=this.shadowRoot.getElementById("pathGridInvFlow"),u=Math.abs(t),g=(((Se=p.grid)==null?void 0:Se.min_power_threshold)!==void 0?p.grid.min_power_threshold:50)/1e3,v=((Me=p.grid)==null?void 0:Me.selling_enabled)===!0,k=y&&u>=g&&(n||i&&v);this._applyFlowAnimation(f,"flow-grid",i,w(t,10),k);const T=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(T,"flow-solar",!1,w(o,12),y&&o>=.05);const N=this.shadowRoot.getElementById("pathInvLoadFlow"),I=Math.abs(r);this._applyFlowAnimation(N,"flow-load",!1,w(r,10),y&&I>=.05);const O=this.shadowRoot.getElementById("pathInvBatFlow"),U=Math.abs(a),P=y&&U>=.02&&(s||l),S=s?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(O,S,l,w(a,8),P);const L=this.shadowRoot.getElementById("pathGridNonEssFlow"),E=Math.abs(b);this._applyFlowAnimation(L,"flow-grid",!1,w(b,5),y&&E>=.05);const C=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),B=Math.abs(d);this._applyFlowAnimation(C,"flow-car",!1,w(d,7),y&&B>=.05);const $=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),D=Math.abs(h||r);this._applyFlowAnimation($,"flow-load",!1,w(D,8),y&&D>=.05);const K=this.shadowRoot.getElementById("pathInvAuxFlow"),ee=Math.abs(_);this._applyFlowAnimation(K,"flow-aux",!0,w(_,5),y&&ee>=.05);const le=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(le,S,l,w(a,8),P);const ae=this.shadowRoot.getElementById("solarFlowCollector"),_e=this.shadowRoot.getElementById("solarBusStemFlow");if(ae)if(!y||o<.05)ae.style.opacity="0.2",ae.style.animation="none",_e&&(_e.style.opacity="0.2",_e.style.animation="none");else{const V=w(o,12);ae.style.opacity="1",ae.setAttribute("class","flow-line"),ae.style.animation=`esDashflow ${V} linear infinite`,_e&&(_e.style.opacity="1",_e.setAttribute("class","flow-line"),_e.style.animation=`esDashflow ${V} linear infinite`)}const G=this.shadowRoot.getElementById("subloadsFlowCollector"),Q=this.shadowRoot.getElementById("subloadsBusStemFlow");if(G)if(!y||D<.05)G.style.opacity="0.2",G.style.animation="none",Q&&(Q.style.opacity="0.2",Q.style.animation="none");else{const V=w(D,8);G.style.opacity="1",G.setAttribute("class","flow-line"),G.style.animation=`esDashflow ${V} linear infinite`,Q&&(Q.style.opacity="1",Q.setAttribute("class","flow-line"),Q.style.animation=`esDashflow ${V} linear infinite`)}const W=this.shadowRoot.getElementById("batteryFlowCollector"),de=this.shadowRoot.getElementById("batteryBusStemFlow"),ie=this.shadowRoot.getElementById("batteryBusFeeders"),me=l?"#f87171":"#34d399",Ye=l?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(W)if(W.style.stroke=me,W.style.filter=Ye,de&&(de.style.stroke=me,de.style.filter=Ye),!y||!P)W.style.opacity="0.2",W.style.animation="none",de&&(de.style.opacity="0.2",de.style.animation="none");else{const V=w(a,8),Z=l?"esDashflowRev":"esDashflow";W.style.opacity="1",W.setAttribute("class",l?"flow-line-reverse":"flow-line"),W.style.animation=`${Z} ${V} linear infinite`,de&&(de.style.opacity="1",de.setAttribute("class",l?"flow-line-reverse":"flow-line"),de.style.animation=`${Z} ${V} linear infinite`)}ie&&ie.querySelectorAll("line").forEach(V=>{if(V.style.stroke=me,V.style.filter=Ye,!y||!P)V.style.opacity="0.2",V.style.animation="none";else{const Z=w(a,8),Ee=l?"esDashflowRev":"esDashflow";V.style.opacity="1",V.setAttribute("class",l?"flow-line-reverse":"flow-line"),V.style.animation=`${Ee} ${Z} linear infinite`}});for(let V=1;V<=8;V++){const Z=this.shadowRoot.getElementById(`pathBat${V}Flow`);if(!Z)continue;const Ee=c[V-1],Fe=Ee?Ee.kwNum:0,Te=y&&(Fe>=.02||P),ce=l;this._applyFlowAnimation(Z,S,ce,w(Fe||a,8),Te)}for(let V=0;V<6;V++){const Z=this.shadowRoot.getElementById(`pathSubload${V}Flow`);if(!Z)continue;const Ee=(Ge=($e=p.load)==null?void 0:$e.subloads)==null?void 0:Ge[V],Fe=Ee?this._getEntityState(Ee.entity):null,Te=Fe?this._formatPower(Fe,2).kw:V===0?2:V===1?3:4;this._applyFlowAnimation(Z,"flow-load",!1,w(Te,8),y&&Te>=.05)}const ot=((fe=p.wind)==null?void 0:fe.show)!==!1||((ve=p.aux)==null?void 0:ve.type)==="wind",gt=ot?((je=p.wind)==null?void 0:je.turbine_count)||((te=(at=p.wind)==null?void 0:at.turbines)==null?void 0:te.length)||2:0,Ne=((ne=p.wind)==null?void 0:ne.turbines)||[];for(let V=1;V<=4;V++){const Z=this.shadowRoot.getElementById(`pathTurbine${V}Flow`);if(Z)if(V<=gt&&ot){const Ee=Ne[V-1]||{},Fe=this._hass?0:V===1?1.45:.85,Te=this._getEntityState(Ee.power_entity||`sensor.wind_turbine_${V}_power`);let ge=this._formatPower(Te,Fe).kw*1e3;Te&&Te.unit==="W"&&(ge=Te.val);const Y=Ee.animation_threshold??((Le=p.wind)==null?void 0:Le.animation_threshold)??50,et=ge>=Y;this._applyFlowAnimation(Z,"flow-wind",!1,w(ge/1e3,3),y&&et)}else this._applyFlowAnimation(Z,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",Wd),typeof customElements<"u"&&!customElements.get("energy-station-panel")&&customElements.define("energy-station-panel",Wn),window.customCards=window.customCards||[],window.customCards.some(e=>e.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),typeof customElements<"u"&&!customElements.get("energy-station-panel")&&customElements.define("energy-station-panel",Wn),it.EnergyStationPanel=Wn,Object.defineProperty(it,Symbol.toStringTag,{value:"Module"})});
