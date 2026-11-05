(function(He,Q){typeof exports=="object"&&typeof module<"u"?Q(exports):typeof define=="function"&&define.amd?define(["exports"],Q):(He=typeof globalThis<"u"?globalThis:He||self,Q(He.EnergyStationCard={}))})(this,function(He){"use strict";var md=Object.defineProperty;var vd=(He,Q,ce)=>Q in He?md(He,Q,{enumerable:!0,configurable:!0,writable:!0,value:ce}):He[Q]=ce;var lt=(He,Q,ce)=>vd(He,typeof Q!="symbol"?Q+"":Q,ce);const Q={title:"Energy Station",view_mode:"3d",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,appearance:{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"},controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,import_day_entity:"",import_night_entity:"",show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0,show_night_savings:!0,show_net_benefit:!0}},ce='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',xe={sun:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${ce} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${ce} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};function ua(){return`
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
  `}function _a(e,t){return`
    <div class="es-3d-station-container" id="station3DContainer">
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

    </div>
  `}function dt(e,t){if(e){typeof e.setAttribute=="function"&&e.setAttribute("class",t);try{e.className=t}catch{}}}function ya(e,t,i){if(!e||!t)return;const n=X=>e.getElementById(X),o=n("solarPower3D");o&&(o.textContent=t.solarPowerStr);const r=n("solarStatus3D");r&&(r.textContent=t.solarStatusStr);const a=n("solarYieldToday3D");if(a&&(a.textContent=t.solarYieldTodayStr),t.pv1){const X=n("pv1Power3D"),J=n("pv1V3D");X&&(X.textContent=t.pv1.powerStr),J&&(J.textContent=t.pv1.specStr)}if(t.pv2){const X=n("pv2Power3D"),J=n("pv2V3D");X&&(X.textContent=t.pv2.powerStr),J&&(J.textContent=t.pv2.specStr)}if(t.pv3){const X=n("pv3Power3D"),J=n("pv3V3D");X&&(X.textContent=t.pv3.powerStr),J&&(J.textContent=t.pv3.specStr)}const s=n("conduitSolar3D");s&&(s.style.display=t.solarPowerKw>.015?"block":"none");const l=n("windPower3D");l&&(l.textContent=t.windPowerStr);const d=n("windStatus3D");d&&(d.textContent=t.windStatusStr);const c=n("windRotor3D");c&&dt(c,t.windPowerKw>.005?"rotor-spinning":"rotor-idle");const _=n("turb1Power3D"),u=n("turb1Rpm3D");_&&(_.textContent=t.turb1PowerStr),u&&(u.textContent=t.turb1RpmStr);const m=n("turb2Power3D"),h=n("turb2Status3D");m&&(m.textContent=t.turb2PowerStr),h&&(h.textContent=t.turb2StatusStr);const y=n("conduitWind3D");y&&(y.style.display=t.windPowerKw>.005?"block":"none");const v=n("gridPower3D");v&&(v.textContent=t.gridPowerStr);const w=n("gridDirection3D");w&&(w.textContent=t.gridDirectionStr);const p=n("gridVoltage3D");p&&(p.textContent=t.gridVoltageStr);const g=n("gridCurrent3D");g&&(g.textContent=t.gridCurrentStr);const f=n("gridBadge3D"),x=n("gridDot3D"),k=n("gridBeacon3D"),$=n("flowGrid3D");t.isBlackout?(f&&(f.textContent="🚨 "+(i("blackout_alert")||"БЛЕКАУТ / ВІДКЛЮЧЕНО"),f.style.cssText="background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.5); font-weight: bold;"),x&&(x.style.background="#ef4444",dt(x,"es-3d-dot beacon-light")),k&&(k.style.display="block"),$&&($.style.display="none")):(f&&(f.textContent=i("grid_stable")||"Живлення стабільне",f.style.cssText="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"),x&&(x.style.background="#3b82f6",dt(x,"es-3d-dot")),k&&(k.style.display="none"),$&&(Math.abs(t.gridPowerKw)>.015?($.style.display="block",t.gridPowerKw>0?(dt($,"conduit-flow glow-blue"),$.setAttribute("stroke","#3b82f6")):(dt($,"conduit-flow conduit-flow-rev glow-green"),$.setAttribute("stroke","#10b981"))):$.style.display="none"));const L=n("invStatus3D"),T=n("invDot3D");L&&(L.textContent=t.invStatusStr,L.style.color=t.isBlackout?"#f59e0b":"#10b981"),T&&(T.style.background=t.isBlackout?"#f59e0b":"#10b981");const S=n("invLcdPower3D");S&&(S.textContent=t.invLcdPowerStr);const O=n("invTempAc3D");O&&(O.textContent=t.invTempAcStr);const ie=n("invTempDc3D");ie&&(ie.textContent=t.invTempDcStr);const Z=n("invSelfPower3D");Z&&(Z.textContent=t.invSelfStr);const q=n("batPower3D"),E=n("batDirection3D"),I=n("batSocText3D"),B=n("batSocCircle3D"),C=n("batModeLabel3D"),A=n("batCardWrapper3D"),K=n("batDot3D"),ee=n("batBadge3D"),te=n("flowBat3D");if(I&&(I.textContent=t.batSoc+"%"),B){const J=201-201*Math.min(Math.max(t.batSoc,0),100)/100;B.setAttribute("stroke-dashoffset",J)}const pe=t.isDischarging?"#ef4444":"#10b981";["batBar1_3D","batBar2_3D","batBar3_3D","batBar4_3D"].forEach(X=>{const J=n(X);J&&J.setAttribute("fill",pe)}),t.isDischarging?(te&&(te.style.display="block",dt(te,"conduit-flow conduit-flow-rev glow-red"),te.setAttribute("stroke","#ef4444")),B&&(B.setAttribute("stroke","#ef4444"),dt(B,"glow-red")),C&&(C.textContent=i("discharging")||"РОЗРЯД",C.setAttribute("fill","#ef4444")),K&&(K.style.background="#ef4444",dt(K,"es-3d-dot beacon-light")),ee&&(ee.style.cssText="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.4);"),A&&A.classList.add("es-3d-card-bat-discharge"),E&&(E.style.color="#ef4444",E.textContent="↑ "+(i("battery_discharging")||"Розряджається")+" · "+t.batCurrentStr),q&&(q.style.color="#f87171",q.textContent=t.batPowerStr)):t.isCharging?(te&&(te.style.display="block",dt(te,"conduit-flow glow-green"),te.setAttribute("stroke","#10b981")),B&&(B.setAttribute("stroke","#10b981"),dt(B,"glow-green")),C&&(C.textContent=i("charging")||"ЗАРЯД",C.setAttribute("fill","#10b981")),K&&(K.style.background="#10b981",dt(K,"es-3d-dot")),ee&&(ee.style.cssText="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.3);"),A&&A.classList.remove("es-3d-card-bat-discharge"),E&&(E.style.color="#10b981",E.textContent="↓ "+(i("battery_charging")||"Заряджається")+" · "+t.batCurrentStr),q&&(q.style.color="#ffffff",q.textContent=t.batPowerStr)):(te&&(te.style.display="none"),A&&A.classList.remove("es-3d-card-bat-discharge"),E&&(E.style.color="#94a3b8",E.textContent=i("battery_idle")||"Очікування"),q&&(q.style.color="#ffffff",q.textContent=t.batPowerStr));const ke=n("batBusStats3D");ke&&(ke.textContent=t.batBusStatsStr);const j=n("batEstTime3D");if(j&&(j.textContent=t.batEstTimeStr),t.rack1){const X=n("rack1Soc3D"),J=n("rack1Power3D"),Ve=n("rack1V3D"),be=n("rack1T3D"),Te=n("rack1Delta3D");X&&(X.textContent=t.rack1.socStr),J&&(J.textContent=t.rack1.powerStr,J.style.color=t.isDischarging?"#f87171":"#10b981"),Ve&&(Ve.textContent=t.rack1.voltageStr),be&&(be.textContent=t.rack1.tempStr),Te&&(Te.textContent=t.rack1.deltaStr)}if(t.rack2){const X=n("rack2Soc3D"),J=n("rack2Power3D"),Ve=n("rack2V3D"),be=n("rack2T3D"),Te=n("rack2Delta3D");X&&(X.textContent=t.rack2.socStr),J&&(J.textContent=t.rack2.powerStr,J.style.color=t.isDischarging?"#f87171":"#10b981"),Ve&&(Ve.textContent=t.rack2.voltageStr),be&&(be.textContent=t.rack2.tempStr),Te&&(Te.textContent=t.rack2.deltaStr)}const U=n("housePower3D");U&&(U.textContent=t.housePowerStr);const M=n("houseStatus3D");M&&(M.textContent=t.houseStatusStr);const le=n("houseDayTotal3D");le&&(le.textContent=t.houseDayTotalStr);const ne=n("boilerPower3D"),ye=n("boilerTemp3D"),je=n("boilerStatus3D"),it=n("flowBoiler3D");ne&&(ne.textContent=t.boilerPowerStr),ye&&(ye.textContent=t.boilerTempStr),je&&(je.textContent=t.boilerStatusStr),it&&(it.style.display=t.boilerPowerKw>.05?"block":"none");const pt=n("houseOtherPower3D");pt&&(pt.textContent=t.otherPowerStr)}class ba extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general",this._isInternalChange=!1,this._debounceTimer=null,this._rendered=!1,this._isDialogExpanded=!1}set hass(t){this._hass=t}setConfig(t){if(this._config=JSON.parse(JSON.stringify(t||Q)),this._isInternalChange){this._isInternalChange=!1;return}this.render()}connectedCallback(){this._rendered||this.render();const t=()=>{typeof window<"u"&&window.innerWidth>=850&&this._applyExpand(!0)};t(),setTimeout(t,80),setTimeout(t,250)}_findHuiDialog(){let t=this;for(;t;){if(t.tagName&&t.tagName.toLowerCase()==="hui-dialog-edit-card")return t;if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(typeof document<"u"){const i=document.querySelector("hui-dialog-edit-card")||document.querySelector("ha-dialog-edit-card");if(i)return i;try{const n=document.querySelector("home-assistant");if(n!=null&&n.shadowRoot){const o=n.shadowRoot.querySelector("hui-dialog-edit-card")||n.shadowRoot.querySelector("ha-dialog-edit-card");if(o)return o;const r=n.shadowRoot.querySelectorAll("*");for(const a of r)if(a.shadowRoot){const s=a.shadowRoot.querySelector("hui-dialog-edit-card")||a.shadowRoot.querySelector("ha-dialog-edit-card");if(s)return s}}}catch{}}return null}_findHaDialog(t){if(t!=null&&t.shadowRoot){const n=t.shadowRoot.querySelector("ha-dialog")||t.shadowRoot.querySelector("mwc-dialog");if(n)return n}let i=this;for(;i;){if(i.tagName&&(i.tagName.toLowerCase()==="ha-dialog"||i.tagName.toLowerCase()==="mwc-dialog"))return i;if(i.parentElement)i=i.parentElement;else if(i.parentNode)i=i.parentNode;else if(i.getRootNode&&i.getRootNode().host)i=i.getRootNode().host;else break}return typeof document<"u"?document.querySelector("ha-dialog")||document.querySelector("mwc-dialog"):null}_applyExpand(t){var o,r,a;this._isDialogExpanded=t;const i=this._findHuiDialog(),n=this._findHaDialog(i);if(t){if(i){typeof i._enlarge=="function"&&!i.large?i._enlarge():(i.large=!0,i.setAttribute("large",""));try{if(i.shadowRoot){let s=i.shadowRoot.getElementById("energy-station-wide-style");s||(s=document.createElement("style"),s.id="energy-station-wide-style",s.textContent=`
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
              `,i.shadowRoot.appendChild(s))}}catch{}}if(n){n.style.setProperty("--mdc-dialog-min-width","95vw","important"),n.style.setProperty("--mdc-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-width","95vw","important"),n.style.setProperty("--mdc-dialog-width","95vw","important");try{const s=(o=n.shadowRoot)==null?void 0:o.querySelector(".mdc-dialog__surface");s&&(s.style.setProperty("max-width","96vw","important"),s.style.setProperty("width","95vw","important"))}catch{}}}else{if(i){typeof i._enlarge=="function"&&i.large?i._enlarge():(i.large=!1,i.removeAttribute("large"));try{const s=(r=i.shadowRoot)==null?void 0:r.getElementById("energy-station-wide-style");s&&s.remove()}catch{}}if(n){n.style.removeProperty("--mdc-dialog-min-width"),n.style.removeProperty("--mdc-dialog-max-width"),n.style.removeProperty("--ha-dialog-max-width"),n.style.removeProperty("--ha-dialog-width"),n.style.removeProperty("--mdc-dialog-width");try{const s=(a=n.shadowRoot)==null?void 0:a.querySelector(".mdc-dialog__surface");s&&(s.style.removeProperty("max-width"),s.style.removeProperty("width"))}catch{}}}this._updateExpandBtn()}_updateExpandBtn(){var n;const t=(n=this.shadowRoot)==null?void 0:n.getElementById("btnToggleExpand");if(!t)return;const i=this._isDialogExpanded;t.innerHTML=i?"❐ Звичайний розмір":"⛶ На весь екран",t.title=i?"Згорнути вікно налаштувань до звичайного розміру":"Розширити вікно налаштувань на весь екран"}_flushConfig(){this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null,this._dispatchConfig())}_dispatchConfig(){if(!this._config)return;this._isInternalChange=!0;const t=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(t)}_valueChanged(t,i,n=!1){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const o=t.split(".");let r=this._config;for(let a=0;a<o.length-1;a++)r[o[a]]||(r[o[a]]={}),r=r[o[a]];r[o[o.length-1]]=i,this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),n?this._dispatchConfig():this._debounceTimer=setTimeout(()=>{this._dispatchConfig()},140)}_switchTab(t){this._flushConfig(),this._currentTab=t,this.render()}_applyPreset(t){this._config=JSON.parse(JSON.stringify(this._config||Q)),t==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):t==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load"),this._dispatchConfig(),this.render()}render(){var a,s,l,d,c,_,u,m,h,y,v,w,p,g,f,x,k,$,L,T,S,O,ie,Z,q,E,I,B,C,A,K,ee,te,pe,ke,j,U,M,le,ne,ye,je,it,pt,X,J,Ve,be,Te,Pe,nt,we,Se,ft,Nt,ze,ot,Xe,W,ae,Ee,De,$e,de,fe,G,Ze,Ue,Ye,oi,We,ri,ai,Mt,Ot,si,Vt,rt,mt,Si,zt,at,Ke,st,vt,xt,wt,kt,St,Et,At,Lt,Pt,Wt,li,di,Gt,qt;if(!this._config)return;this._rendered=!0;const t=this._config,i=(a=this.shadowRoot)==null?void 0:a.activeElement;let n=null,o=null,r=null;if(i&&(i.id?n=`#${i.id}`:((s=i.dataset)==null?void 0:s.idx)!==void 0&&i.className&&(n=`.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`),"selectionStart"in i&&"selectionEnd"in i&&(o=i.selectionStart,r=i.selectionEnd)),this.shadowRoot.innerHTML=`
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
              <input type="text" id="ctrlSolarCharge" value="${((_=t.controls)==null?void 0:_.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((u=t.controls)==null?void 0:u.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((m=t.controls)==null?void 0:m.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((h=t.solar)==null?void 0:h.pv_count)||3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y=t.solar)==null?void 0:y.pv_count)||3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((v=t.solar)==null?void 0:v.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((w=t.solar)==null?void 0:w.daily_yield_entity)||""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((p=t.solar)==null?void 0:p.target_daily_yield)||55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((g=t.solar)==null?void 0:g.installed_power)!==void 0?t.solar.installed_power:12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((f=t.solar)==null?void 0:f.show_metrics)!==!1?"checked":""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((x=t.solar)==null?void 0:x.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((k=t.solar)==null?void 0:k.pv_count)||3}).map((he,F)=>{var ut,_t;const V=F+1,H=((_t=(ut=t.solar)==null?void 0:ut.strings)==null?void 0:_t[F])||{},Je=`sensor.deye_12k_inverter_pv${V}_voltage`,gt=`sensor.deye_12k_inverter_pv${V}_current`,ht=`sensor.deye_12k_inverter_pv${V}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${V} (Стрінг ${V})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${F}" value="${H.name||`PV ${V}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${V} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${F}" value="${H.voltage_entity!==void 0?H.voltage_entity:Je}" placeholder="${Je}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${V} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${F}" value="${H.current_entity!==void 0?H.current_entity:gt}" placeholder="${gt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${V} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${F}" value="${H.capacity_kw!==void 0?H.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${V} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${F}" value="${H.power_entity!==void 0?H.power_entity:ht}" placeholder="${ht} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${(($=t.inverter)==null?void 0:$.model_name)||"DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((L=t.inverter)==null?void 0:L.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((T=t.inverter)==null?void 0:T.show_self_consumption)!==!1?"checked":""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((S=t.inverter)==null?void 0:S.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((O=t.inverter)==null?void 0:O.standby_power)!==void 0?t.inverter.standby_power:100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((ie=t.inverter)==null?void 0:ie.standby_power)!==void 0?t.inverter.standby_power:100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((Z=t.inverter)==null?void 0:Z.ac_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((q=t.inverter)==null?void 0:q.dc_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((E=t.inverter)==null?void 0:E.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((I=t.inverter)==null?void 0:I.current_entity)||""}">
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
                <option value="microinverter" ${((C=t.aux)==null?void 0:C.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((A=t.aux)==null?void 0:A.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((K=t.aux)==null?void 0:K.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((ee=t.aux)==null?void 0:ee.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((te=t.aux)==null?void 0:te.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((pe=t.aux)==null?void 0:pe.type)==="microinverter"&&(!((ke=t.aux)!=null&&ke.title)||((j=t.aux)==null?void 0:j.title)==="Вітрогенератор")?"Мікроінвертор":((U=t.aux)==null?void 0:U.title)||(((M=t.aux)==null?void 0:M.type)==="generator"?"Генератор":((le=t.aux)==null?void 0:le.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((ne=t.aux)==null?void 0:ne.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((ye=t.wind)==null?void 0:ye.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((je=t.wind)==null?void 0:je.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((it=t.wind)==null?void 0:it.animation_threshold)||((pt=t.aux)==null?void 0:pt.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((X=t.wind)==null?void 0:X.animation_threshold)||((J=t.aux)==null?void 0:J.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Ve=t.wind)==null?void 0:Ve.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((be=t.wind)==null?void 0:be.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((Te=t.wind)==null?void 0:Te.turbine_count)||2}).map((he,F)=>{var H,Je;const V=((Je=(H=t.wind)==null?void 0:H.turbines)==null?void 0:Je[F])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${F}" value="${V.name||`Вітряк ${F+1}`}" placeholder="Назва (напр. Вітряк ${F+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${F}" value="${V.power_entity||`sensor.wind_turbine_${F+1}_power`}" placeholder="sensor.wind_turbine_${F+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${F}" value="${V.rpm_entity||V.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${F}" value="${V.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${F+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${F}" value="${V.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${F+1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((Pe=t.battery)==null?void 0:Pe.soc_entity)||""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((nt=t.battery)==null?void 0:nt.power_entity)||""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((we=t.battery)==null?void 0:we.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Se=t.battery)==null?void 0:Se.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((ft=t.battery)==null?void 0:ft.capacity_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Nt=t.battery)==null?void 0:Nt.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((ze=t.battery)==null?void 0:ze.current_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((ot=t.battery)==null?void 0:ot.temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((Xe=t.battery)==null?void 0:Xe.cell_delta_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((W=t.battery)==null?void 0:W.charge_daily_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ae=t.battery)==null?void 0:ae.discharge_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ee=t.battery)==null?void 0:Ee.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((De=t.battery)==null?void 0:De.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${(($e=t.battery)==null?void 0:$e.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((de=t.battery)==null?void 0:de.parallel_batteries)||2}).map((he,F)=>{var jt,Ut,Yt,Kt;const V=F+1,H=((Ut=(jt=t.battery)==null?void 0:jt.modules)==null?void 0:Ut[F])||((Kt=(Yt=t.battery)==null?void 0:Yt.module_entities)==null?void 0:Kt[F])||{},Je=`sensor.bms_rack${V}_soc`,gt=`sensor.bms_rack${V}_current`,ht=`sensor.bms_rack${V}_voltage`,ut=`sensor.bms_rack${V}_power`,_t=`sensor.bms_rack${V}_temperature`,Ht=`sensor.bms_rack${V}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${V} (Модуль ${V})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${F}" value="${H.name||`Батарея ${V}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${V} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${F}" value="${H.soc_entity!==void 0?H.soc_entity:H.soc!==void 0?H.soc:Je}" placeholder="${Je}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${V} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${F}" value="${H.current_entity!==void 0?H.current_entity:gt}" placeholder="${gt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${V} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${F}" value="${H.voltage_entity!==void 0?H.voltage_entity:H.volt!==void 0?H.volt:ht}" placeholder="${ht}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${V} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${F}" value="${H.temperature_entity!==void 0?H.temperature_entity:H.temp!==void 0?H.temp:_t}" placeholder="${_t}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${V} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${F}" value="${H.capacity_kwh!==void 0?H.capacity_kwh:V===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${V} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${F}" value="${H.cell_delta_entity!==void 0?H.cell_delta_entity:H.delta!==void 0?H.delta:Ht}" placeholder="${Ht}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${V} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${F}" value="${H.power_entity!==void 0?H.power_entity:ut}" placeholder="${ut} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(fe=t.grid)!=null&&fe.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((G=t.grid)==null?void 0:G.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((Ze=t.grid)==null?void 0:Ze.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Ue=t.grid)==null?void 0:Ue.auto_calculate)!==!1?"checked":""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Ye=t.grid)==null?void 0:Ye.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((oi=t.grid)==null?void 0:oi.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((We=t.grid)==null?void 0:We.min_power_threshold)!==void 0?t.grid.min_power_threshold:50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((ri=t.grid)==null?void 0:ri.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((ai=t.grid)==null?void 0:ai.status_entity)||""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Mt=t.grid)==null?void 0:Mt.voltage_threshold)!==void 0?t.grid.voltage_threshold:90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((Ot=t.grid)==null?void 0:Ot.import_daily_entity)||""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((si=t.grid)==null?void 0:si.export_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((Vt=t.grid)==null?void 0:Vt.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((rt=t.grid)==null?void 0:rt.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((mt=t.load)==null?void 0:mt.auto_calculate)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((Si=t.load)==null?void 0:Si.separate_export)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((zt=t.load)==null?void 0:zt.essential_power_entity)||""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((at=t.load)==null?void 0:at.daily_house_entity)||""}">
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

          ${(((Ke=t.load)==null?void 0:Ke.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((st=t.load)==null?void 0:st.subloads)||[]).map((he,F)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${F}" value="${he.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${F}" style="width: 140px;">
                  <option value="boiler" ${he.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${he.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${he.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${he.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${he.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${he.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${he.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${F}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${F}" value="${he.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((vt=t.tariffs)==null?void 0:vt.enabled)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((xt=t.tariffs)==null?void 0:xt.currency)||"грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((wt=t.tariffs)==null?void 0:wt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((kt=t.tariffs)==null?void 0:kt.day_rate)??4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((St=t.tariffs)==null?void 0:St.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((Et=t.tariffs)==null?void 0:Et.night_rate)??2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((At=t.tariffs)==null?void 0:At.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Lt=t.tariffs)==null?void 0:Lt.export_rate)??5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(he,F)=>{var V;return`<option value="${F}" ${(((V=t.tariffs)==null?void 0:V.night_start_hour)??23)===F?"selected":""}>${String(F).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(he,F)=>{var V;return`<option value="${F}" ${(((V=t.tariffs)==null?void 0:V.night_end_hour)??7)===F?"selected":""}>${String(F).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((Pt=t.tariffs)==null?void 0:Pt.import_day_entity)||""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((Wt=t.tariffs)==null?void 0:Wt.import_night_entity)||""}" placeholder="sensor.daily_energy_night">
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
              <input type="checkbox" id="tariffShowDailyCost" ${((li=t.tariffs)==null?void 0:li.show_daily_cost)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((di=t.tariffs)==null?void 0:di.show_export_income)!==!1?"checked":""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Gt=t.tariffs)==null?void 0:Gt.show_active_badge)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((qt=t.tariffs)==null?void 0:qt.show_solar_savings)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `,this._bindEvents(),this._updateExpandBtn(),n){const he=this.shadowRoot.querySelector(n);if(he&&(he.focus(),o!==null&&r!==null&&"setSelectionRange"in he))try{he.setSelectionRange(o,r)}catch{}}}_bindEvents(){var a,s,l,d,c,_,u,m,h,y,v,w;const t=this.shadowRoot;(a=t.getElementById("btnToggleExpand"))==null||a.addEventListener("click",()=>{this._applyExpand(!this._isDialogExpanded)}),t.querySelectorAll(".tab-btn").forEach(p=>{p.addEventListener("click",g=>{this._switchTab(g.target.dataset.tab)})}),(s=t.getElementById("btnPresetEsp"))==null||s.addEventListener("click",()=>this._applyPreset("deye_esphome")),(l=t.getElementById("btnPresetSolarman"))==null||l.addEventListener("click",()=>this._applyPreset("deye_solarman"));const i=(p,g)=>{const f=t.getElementById(p);f&&(f.addEventListener("input",x=>this._valueChanged(g,x.target.value,!1)),f.addEventListener("change",x=>this._valueChanged(g,x.target.value,!0)),f.addEventListener("blur",()=>this._flushConfig()))},n=(p,g)=>{const f=t.getElementById(p);f&&f.addEventListener("change",x=>this._valueChanged(g,x.target.checked,!0))},o=(p,g,f,x="")=>{const k=t.getElementById(p);k&&(k.addEventListener("input",$=>{const L=parseFloat($.target.value);if(f){const T=t.getElementById(f);T&&(T.innerText=`${L}${x}`)}this._valueChanged(g,isNaN(L)?0:L,!1)}),k.addEventListener("change",$=>{const L=parseFloat($.target.value);this._valueChanged(g,isNaN(L)?0:L,!0)}),k.addEventListener("blur",()=>this._flushConfig()))};i("title","title"),i("themeMode","theme_mode"),i("cardLanguage","language"),(d=t.getElementById("cardScale"))==null||d.addEventListener("input",p=>{const g=parseFloat(p.target.value),f=t.getElementById("cardScaleVal");f&&(f.innerText=`${Math.round(g*100)}%`),this._valueChanged("card_scale",g)}),(c=t.getElementById("cardScale"))==null||c.addEventListener("change",()=>this._flushConfig()),i("cardMaxWidth","max_width"),n("showQuickSettings","show_quick_settings"),i("ctrlSolarCharge","controls.solar_charge_entity"),i("ctrlSellPower","controls.sell_power_entity"),i("ctrlGridCharge","controls.grid_charge_entity"),n("animEnabled","animations.enabled"),o("animSpeed","animations.speed","animSpeedVal","s"),(_=t.getElementById("solarPvCount"))==null||_.addEventListener("input",p=>{const g=parseInt(p.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=g,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<g;){const f=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${f}`,name:`PV ${f}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${f}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${f}_current`,power_entity:`sensor.deye_12k_inverter_pv${f}_power`})}this._valueChanged("solar.pv_count",g,!0),this._valueChanged("solar.strings",this._config.solar.strings,!0),this.render()}),t.querySelectorAll(".pv-str-name-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[f]||(this._config.solar.strings[f]={}),this._config.solar.strings[f].name=g.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-volt-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[f]||(this._config.solar.strings[f]={}),this._config.solar.strings[f].voltage_entity=g.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-curr-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[f]||(this._config.solar.strings[f]={}),this._config.solar.strings[f].current_entity=g.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-power-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[f]||(this._config.solar.strings[f]={}),this._config.solar.strings[f].power_entity=g.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-cap-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[f]||(this._config.solar.strings[f]={}),this._config.solar.strings[f].capacity_kw=parseFloat(g.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),i("solarTotalPower","solar.total_power_entity"),i("solarDailyYield","solar.daily_yield_entity"),o("solarTargetDaily","solar.target_daily_yield"),o("solarInstalledPower","solar.installed_power"),n("solarShowMetrics","solar.show_metrics"),i("invModel","inverter.model_name"),i("invPower","inverter.power_entity"),n("invShowSelfConsumption","inverter.show_self_consumption"),i("invSelfConsumptionEntity","inverter.self_consumption_entity"),o("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),i("invTempAc","inverter.ac_temperature_entity"),i("invTempDc","inverter.dc_temperature_entity"),i("invVolt","inverter.voltage_entity"),i("invCurrent","inverter.current_entity"),i("invFreq","inverter.frequency_entity"),(u=t.getElementById("auxType"))==null||u.addEventListener("change",p=>{const g=p.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=g;const x={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[g]||"Мікроінвертор";this._config.aux.title=x;const k=t.getElementById("auxTitle");k&&(k.value=x),this._valueChanged("aux.type",g,!0),this._valueChanged("aux.title",x,!0)}),i("auxTitle","aux.title"),i("auxPower","aux.power_entity"),(m=t.getElementById("windTurbineCount"))==null||m.addEventListener("input",p=>{const g=parseInt(p.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=g,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<g;){const f=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${f}`,name:`Вітряк ${f}`,power_entity:`sensor.wind_turbine_${f}_power`,speed_entity:`sensor.wind_turbine_${f}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",g,!0),this._valueChanged("wind.turbines",this._config.wind.turbines,!0),this.render()}),o("windThreshold","wind.animation_threshold","windThresholdVal","W"),(h=t.getElementById("windThreshold"))==null||h.addEventListener("input",p=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(p.target.value))}),i("windDailyEnergy","wind.daily_energy_entity"),i("windMonthlyEnergy","wind.monthly_energy_entity"),t.querySelectorAll(".turbine-name-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[f]||(this._config.wind.turbines[f]={}),this._config.wind.turbines[f].name=g.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-power-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[f]||(this._config.wind.turbines[f]={}),this._config.wind.turbines[f].power_entity=g.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-speed-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[f]||(this._config.wind.turbines[f]={}),this._config.wind.turbines[f].rpm_entity=g.target.value,this._config.wind.turbines[f].speed_entity=g.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-daily-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[f]||(this._config.wind.turbines[f]={}),this._config.wind.turbines[f].daily_energy_entity=g.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-monthly-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[f]||(this._config.wind.turbines[f]={}),this._config.wind.turbines[f].monthly_energy_entity=g.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),i("batSoc","battery.soc_entity"),i("batPower","battery.power_entity"),i("batPowerSign","battery.power_sign"),i("batVolt","battery.voltage_entity"),i("batCurrent","battery.current_entity"),i("batTemp","battery.temperature_entity"),i("batDelta","battery.cell_delta_entity"),i("batCapacity","battery.capacity_entity"),i("batChargeDaily","battery.charge_daily_entity"),i("batDischargeDaily","battery.discharge_daily_entity"),(y=t.getElementById("batParallelCount"))==null||y.addEventListener("input",p=>{const g=parseInt(p.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=g,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<g;){const f=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${f}`,name:`Батарея ${f}`,soc_entity:`sensor.bms_rack${f}_soc`,current_entity:`sensor.bms_rack${f}_current`,voltage_entity:`sensor.bms_rack${f}_voltage`,power_entity:`sensor.bms_rack${f}_power`,temperature_entity:`sensor.bms_rack${f}_temperature`,cell_delta_entity:`sensor.bms_rack${f}_cell_delta`})}this._valueChanged("battery.parallel_batteries",g,!0),this._valueChanged("battery.modules",this._config.battery.modules,!0),this.render()}),t.querySelectorAll(".bat-mod-name-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].name=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-soc-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].soc_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-curr-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].current_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-volt-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].voltage_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-temp-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].temperature_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-delta-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].cell_delta_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-power-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].power_entity=g.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-cap-inp").forEach(p=>{p.addEventListener("input",g=>{const f=parseInt(g.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[f]||(this._config.battery.modules[f]={}),this._config.battery.modules[f].capacity_kwh=parseFloat(g.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),n("gridSellingEnabled","grid.selling_enabled"),n("gridAutoCalculate","grid.auto_calculate"),i("gridPower","grid.power_entity"),i("gridExternalPower","grid.external_power_entity"),i("gridVoltage","grid.voltage_entity"),i("gridStatus","grid.status_entity"),o("gridVoltageThreshold","grid.voltage_threshold"),i("gridPowerSign","grid.power_sign"),o("gridMinThreshold","grid.min_power_threshold"),i("gridImportDaily","grid.import_daily_entity"),i("gridExportDaily","grid.export_daily_entity"),i("gridNonEssential","grid.non_essential_power_entity"),i("gridCarPower","grid.car_power_entity"),n("loadAutoCalculate","load.auto_calculate"),n("loadSeparateExport","load.separate_export"),i("loadEssential","load.essential_power_entity"),i("loadDailyHouse","load.daily_house_entity");const r=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const p=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${p}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render()};(v=t.getElementById("btnAddSubload"))==null||v.addEventListener("click",r),(w=t.getElementById("btnAddSubloadBottom"))==null||w.addEventListener("click",r),t.querySelectorAll(".btn-del-subload").forEach(p=>{p.addEventListener("click",g=>{var k;const f=g.currentTarget||g.target.closest(".btn-del-subload"),x=parseInt(f.dataset.idx);(k=this._config.load)!=null&&k.subloads&&(this._config.load.subloads.splice(x,1),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render())})}),t.querySelectorAll(".subload-name").forEach(p=>{p.addEventListener("input",g=>{var x,k;const f=parseInt(g.target.dataset.idx);(k=(x=this._config.load)==null?void 0:x.subloads)!=null&&k[f]&&(this._config.load.subloads[f].name=g.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".subload-icon").forEach(p=>{p.addEventListener("change",g=>{var x,k;const f=parseInt(g.target.dataset.idx);(k=(x=this._config.load)==null?void 0:x.subloads)!=null&&k[f]&&(this._config.load.subloads[f].icon=g.target.value,this._valueChanged("load.subloads",this._config.load.subloads,!0))})}),t.querySelectorAll(".subload-entity").forEach(p=>{p.addEventListener("input",g=>{var x,k;const f=parseInt(g.target.dataset.idx);(k=(x=this._config.load)==null?void 0:x.subloads)!=null&&k[f]&&(this._config.load.subloads[f].entity=g.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),p.addEventListener("blur",()=>this._flushConfig())}),n("tariffsEnabled","tariffs.enabled"),i("tariffCurrency","tariffs.currency"),o("tariffDayRate","tariffs.day_rate"),o("tariffNightRate","tariffs.night_rate"),o("tariffExportRate","tariffs.export_rate"),o("tariffNightStart","tariffs.night_start_hour"),o("tariffNightEnd","tariffs.night_end_hour"),i("tariffImportDayEntity","tariffs.import_day_entity"),i("tariffImportNightEntity","tariffs.import_night_entity"),n("tariffShowDailyCost","tariffs.show_daily_cost"),n("tariffShowExportIncome","tariffs.show_export_income"),n("tariffShowActiveBadge","tariffs.show_active_badge"),n("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",ba);/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */var oe=Symbol("NOT_RESOLVED");function Re(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(i=>String(i)),representTagName:t.representTagName??(()=>e)}}function pn(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}function Xi(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}var ma=Re("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),va=["","~","null","Null","NULL"],xa=Re("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>va.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>"null"}),wa=Re("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:oe,identify:e=>e===null,represent:()=>"null"}),ka=["","~","null","Null","NULL"],Sa=Re("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>ka.indexOf(e)!==-1?null:oe,identify:e=>e===null,represent:()=>"null"}),Ea=["true","True","TRUE"],Ca=["false","False","FALSE"],Ta=Re("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>Ea.indexOf(e)!==-1?!0:Ca.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),$a=["true"],Ba=["false"],Ia=Re("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>$a.indexOf(e)!==-1?!0:Ba.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Na=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],Aa=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],La=Re("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>Na.indexOf(e)!==-1?!0:Aa.indexOf(e)!==-1?!1:oe,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Pa=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),Da=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function Ra(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function Fa(e,t){if(t){if(!Da.test(e))return oe}else if(!Pa.test(e))return oe;const i=Ra(e);return Number.isFinite(i)?i:oe}var On=Re("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:Fa,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),Ma=new RegExp("^-?(?:0|[1-9][0-9]*)$"),Oa=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function Va(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function za(e,t){if(t){if(!Oa.test(e))return oe}else if(!Ma.test(e))return oe;const i=Va(e);return Number.isFinite(i)?i:oe}var Wa=Re("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:za,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),Ga=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function qa(e){let t=e.replace(/_/g,""),i=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b"))return i*parseInt(t.slice(2),2);if(t.startsWith("0x"))return i*parseInt(t.slice(2),16);if(t.includes(":")){let n=0;for(const o of t.split(":"))n=n*60+Number(o);return i*n}return t!=="0"&&t[0]==="0"?i*parseInt(t,8):i*parseInt(t,10)}function Ha(e){if(!Ga.test(e))return oe;const t=qa(e);return Number.isFinite(t)?t:oe}var fn=Re("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:Ha,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),ja=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Ua=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ya(e){if(!ja.test(e))return oe;let t=e.toLowerCase();const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const n=i*parseFloat(t);return Number.isFinite(n)||Ua.test(e)?n:oe}function Ka(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Vn=Re("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Ya,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:Ka}),Ja=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),Qa=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Xa(e,t){if(t){if(!Qa.test(e))return oe;let n=e.toLowerCase();const o=n[0]==="-"?-1:1;if("+-".includes(n[0])&&(n=n.slice(1)),n===".inf")return o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===".nan")return NaN;const r=o*parseFloat(n);return Number.isFinite(r)?r:oe}if(!Ja.test(e))return oe;const i=Number(e);return Number.isFinite(i)?i:oe}function Za(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var es=Re("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:Xa,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:Za}),ts=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),is=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function ns(e){if(!ts.test(e))return oe;let t=e.toLowerCase().replace(/_/g,"");const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let n=0;if(t.includes(":")){for(const o of t.split(":"))n=n*60+Number(o);n*=i}else n=i*parseFloat(t);return Number.isFinite(n)||is.test(e)?n:oe}function os(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var gn=Re("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:ns,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:os}),rs=Re("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":oe,identify:()=>!1}),as=/^[A-Za-z0-9+/]*={0,2}$/;function ss(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!as.test(t))return oe;const i=atob(t),n=new Uint8Array(i.length);for(let o=0;o<i.length;o++)n[o]=i.charCodeAt(o);return n}function ls(e){let t="";for(let i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return btoa(t)}var ds=Re("tag:yaml.org,2002:binary",{resolve:ss,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:ls}),cs=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ps=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function zn(e,t,i,n=0,o=0,r=0,a=0){const s=new Date(Date.UTC(e,t,i,n,o,r,a));return s.setUTCFullYear(e,t,i),s}function fs(e){let t=cs.exec(e);if(t===null&&(t=ps.exec(e)),t===null)return oe;const i=+t[1],n=+t[2]-1,o=+t[3];if(!t[4]){const c=zn(i,n,o);return c.getUTCFullYear()!==i||c.getUTCMonth()!==n||c.getUTCDate()!==o?oe:c}const r=+t[4],a=+t[5],s=+t[6];let l=0;if(r>23||a>59||s>59)return oe;if(t[7]){let c=t[7].slice(0,3);for(;c.length<3;)c+="0";l=+c}const d=zn(i,n,o,r,a,s,l);if(d.getUTCFullYear()!==i||d.getUTCMonth()!==n||d.getUTCDate()!==o)return oe;if(t[9]){const c=+t[10],_=+(t[11]||0);if(c>23||_>59)return oe;const u=(c*60+_)*6e4;d.setTime(d.getTime()-(t[9]==="-"?-u:u))}return d}var gs=Re("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:fs,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),hs=pn("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function Zi(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function hn(e,t){const i={};for(const n of t)e[n]!==void 0&&(i[n]=e[n]);return i}var us=pn("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let i;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";i=t.keys().next().value}else if(Zi(t)){const n=Object.keys(t);if(n.length!==1)return"cannot resolve an ordered map item";i=n[0]}else return"cannot resolve an ordered map item";return e.seen.has(i)?"duplicate key in ordered map":(e.seen.add(i),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),_s=pn("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const i=t,n=Object.keys(i);return n.length!==1?"cannot resolve a pairs item":(e.push([n[0],i[n[0]]]),"")},identify:()=>!1}),ys=Xi("tag:yaml.org,2002:map",{create:()=>({}),identify:Zi,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const n=String(t);return n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}}),bs=Xi("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const i of e)t.set(i,null);return t},addPair:(e,t,i)=>i!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function ms(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function vs(){return{scalar:[],sequence:[],mapping:[]}}function xs(e){const t=[];for(const i of e){let n=t.length;for(let o=0;o<t.length;o++){const r=t[o];if(r.nodeKind===i.nodeKind&&r.tagName===i.tagName&&r.matchByTagPrefix===i.matchByTagPrefix){n=o;break}}t[n]=i}return t}var en=class ga{constructor(t){lt(this,"tags");lt(this,"implicitScalarTags");lt(this,"implicitScalarByFirstChar");lt(this,"implicitScalarAnyFirstChar");lt(this,"defaultScalarTag");lt(this,"defaultSequenceTag");lt(this,"defaultMappingTag");lt(this,"exact");lt(this,"prefix");const i=xs(t),n=[],o=ms(),r=vs();for(const c of i){if(c.nodeKind==="scalar"&&c.implicit){if(c.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");n.push(c)}switch(c.nodeKind){case"scalar":c.matchByTagPrefix?r.scalar.push(c):o.scalar[c.tagName]=c;break;case"sequence":c.matchByTagPrefix?r.sequence.push(c):o.sequence[c.tagName]=c;break;case"mapping":c.matchByTagPrefix?r.mapping.push(c):o.mapping[c.tagName]=c}}const a=n.filter(c=>c.implicitFirstChars===null),s=new Set;for(const c of n)if(c.implicitFirstChars!==null)for(const _ of c.implicitFirstChars)s.add(_);const l=new Map;for(const c of s)l.set(c,n.filter(_=>_.implicitFirstChars===null||_.implicitFirstChars.indexOf(c)!==-1));const d=o.scalar["tag:yaml.org,2002:str"];if(!d)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=i,this.implicitScalarTags=n,this.implicitScalarByFirstChar=l,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=d,this.defaultSequenceTag=o.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=o.mapping["tag:yaml.org,2002:map"],this.exact=o,this.prefix=r}lookupScalarTag(t){const i=this.exact.scalar[t];if(i)return i;for(const n of this.prefix.scalar)if(t.startsWith(n.tagName))return n}lookupSequenceTag(t){const i=this.exact.sequence[t];if(i)return i;for(const n of this.prefix.sequence)if(t.startsWith(n.tagName))return n}lookupMappingTag(t){const i=this.exact.mapping[t];if(i)return i;for(const n of this.prefix.mapping)if(t.startsWith(n.tagName))return n}resolveImplicitScalarTag(t){const i=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const o of i){const r=o.resolve(t,!1,o.tagName);if(r!==oe)return{value:r,tag:o}}const n=this.defaultScalarTag;return{value:n.resolve(t,!1,n.tagName),tag:n}}withTags(...t){let i=[];for(const n of t)i=i.concat(n);return new ga([...this.tags,...i])}},un=new en([ma,hs,ys]);new en([...un.tags,wa,Ia,Wa,es]);var ws=new en([...un.tags,xa,Ta,On,Vn]),ks=new en([...un.tags,Sa,La,fn,gn,gs,rs,ds,us,_s,bs]),Ss=ks.withTags({...fn,resolve:(e,t,i)=>{const n=fn.resolve(e,t,i);return n===oe?On.resolve(e,t,i):n}},{...gn,resolve:(e,t,i)=>{const n=gn.resolve(e,t,i);return n===oe?Vn.resolve(e,t,i):n}});Xi("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,i)=>(e.set(t,i),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||Zi(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,i=e;for(const n of Object.keys(i))t.set(n,i[n]);return t}});function Wn(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let i=0;i<t.length;i++){if(Array.isArray(t[i]))return null;typeof t[i]=="object"&&Object.prototype.toString.call(t[i])==="[object Object]"&&(t[i]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}Xi("tag:yaml.org,2002:map",{create:()=>({}),identify:Zi,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{const n=Wn(t);return n===null?"nested arrays are not supported inside keys":(n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,"")},has:(e,t)=>{const i=Wn(t);return i!==null&&Object.prototype.hasOwnProperty.call(e,i)},keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}});var Es={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function _n(e,t,i,n,o){let r="",a="";const s=Math.floor(o/2)-1;return n-t>s&&(r=" ... ",t=n-s+r.length),i-n>s&&(a=" ...",i=n+s-a.length),{str:r+e.slice(t,i).replace(/\t/g,"→")+a,pos:n-t+r.length}}function yn(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function Cs(e,t){if(!e.buffer)return null;const i={...Es,...t},n=/\r?\n|\r|\0/g,o=[0],r=[];let a,s=-1;for(;a=n.exec(e.buffer);)r.push(a.index),o.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);let l="";const d=Math.min(e.line+i.linesAfter,r.length).toString().length,c=i.maxLength-(i.indent+d+3);for(let u=1;u<=i.linesBefore&&!(s-u<0);u++){const m=_n(e.buffer,o[s-u],r[s-u],e.position-(o[s]-o[s-u]),c);l=`${" ".repeat(i.indent)}${yn((e.line-u+1).toString(),d)} | ${m.str}
${l}`}const _=_n(e.buffer,o[s],r[s],e.position,c);l+=`${" ".repeat(i.indent)}${yn((e.line+1).toString(),d)} | ${_.str}
`,l+=`${"-".repeat(i.indent+d+3+_.pos)}^
`;for(let u=1;u<=i.linesAfter&&!(s+u>=r.length);u++){const m=_n(e.buffer,o[s+u],r[s+u],e.position-(o[s]-o[s+u]),c);l+=`${" ".repeat(i.indent)}${yn((e.line+u+1).toString(),d)} | ${m.str}
`}return l.replace(/\n$/,"")}function Gn(e,t){let i="";return e.mark?(e.mark.name&&(i+=`in "${e.mark.name}" `),i+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(i+=`

${e.mark.snippet}`),`${e.reason} ${i}`):e.reason}var Ft=class ha extends Error{constructor(i,n){super();lt(this,"reason");lt(this,"mark");this.name="YAMLException",this.reason=i,this.mark=n,this.message=Gn(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(i){return`${this.name}: ${Gn(this,i)}`}static throwAt(i,n,o,r=""){let a=0,s=0;for(let d=0;d<n;d++){const c=i.charCodeAt(d);c===10?(a++,s=d+1):c===13&&(a++,i.charCodeAt(d+1)===10&&d++,s=d+1)}const l={name:r,buffer:i,position:n,line:a,column:n-s};throw l.snippet=Cs(l),new ha(o,l)}},Ae={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},z={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},tt={BLOCK:1,FLOW:2},yt={CLIP:1,STRIP:2,KEEP:3},Ts=-1;function qn(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var Hn=new Array(256),jn=new Array(256);for(let e=0;e<256;e++)Hn[e]=qn(e)?1:0,jn[e]=qn(e);function $s(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Bs(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function Is(e){return e===120?2:e===117?4:8}function tn(e,t,i){let n=0;for(;t<i;){const o=e.charCodeAt(t);if(o===10)n++,t++;else if(o===13)n++,t++,e.charCodeAt(t)===10&&t++;else if(o===32||o===9)t++;else break}return{position:t,breaks:n}}function bn(e){return e===1?" ":`
`.repeat(e-1)}function Ns(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===10||s===13){n+=e.slice(r,a);const l=tn(e,o,i);n+=bn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,a)}function As(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===39)n+=e.slice(r,o)+"'",o+=2,r=a=o;else if(s===10||s===13){n+=e.slice(r,a);const l=tn(e,o,i);n+=bn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,i)}function Ls(e,t,i){let n="",o=t,r=t,a=t;for(;o<i;){const s=e.charCodeAt(o);if(s===92){n+=e.slice(r,o),o++;const l=e.charCodeAt(o);if(l===10||l===13)o=tn(e,o,i).position;else if(l<256&&Hn[l])n+=jn[l],o++;else{let d=Is(l),c=0;for(;d>0;d--){o++;const _=Bs(e.charCodeAt(o));c=(c<<4)+_}n+=$s(c),o++}r=a=o}else if(s===10||s===13){n+=e.slice(r,a);const l=tn(e,o,i);n+=bn(l.breaks),o=r=a=l.position}else o++,s!==32&&s!==9&&(a=o)}return n+e.slice(r,i)}function Un(e,t,i,n,o,r){const a=n<0?0:n,s=e.slice(t,i).replace(/\r\n?/g,`
`),l=s===""?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`);let d="",c=!1,_=0,u=!1;for(const m of l){let h=0;for(;h<a&&m.charCodeAt(h)===32;)h++;if(n<0||h>=m.length){_++;continue}const y=m.slice(a),v=y.charCodeAt(0);r?v===32||v===9?(u=!0,d+=`
`.repeat(c?1+_:_)):u?(u=!1,d+=`
`.repeat(_+1)):_===0?c&&(d+=" "):d+=`
`.repeat(_):d+=`
`.repeat(c?1+_:_),d+=y,c=!0,_=0}return o===yt.KEEP?d+=`
`.repeat(c?1+_:_):o!==yt.STRIP&&c&&(d+=`
`),d}function Ps(e,t){if(t.valueStart===Ts)return"";const{valueStart:i,valueEnd:n}=t;if(t.fast)return e.slice(i,n);switch(t.style){case z.SINGLE_QUOTED:return As(e,i,n);case z.DOUBLE_QUOTED:return Ls(e,i,n);case z.LITERAL_BLOCK:return Un(e,i,n,t.indent,t.chomping,!1);case z.FOLDED_BLOCK:return Un(e,i,n,t.indent,t.chomping,!0);default:return Ns(e,i,n)}}var Ds=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"}),Yn="-#;/?:@&=+$_.~*'()",Rs=Yn+"!,[]",Kn="0123456789ABCDEF";function bt(e){return"%"+Kn[e>>4]+Kn[e&15]}function mn(e,t){const i=t?Yn:Rs;let n="";for(let o=0;o<e.length;o++){let r=e.charCodeAt(o);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i.includes(e[o])){n+=e[o];continue}r>=55296&&r<=56319&&(r=65536+((r&1023)<<10)+(e.charCodeAt(++o)&1023)),r<128?n+=bt(r):r<2048?n+=bt(192|r>>6)+bt(128|r&63):r<65536?n+=bt(224|r>>12)+bt(128|r>>6&63)+bt(128|r&63):n+=bt(240|r>>18)+bt(128|r>>12&63)+bt(128|r>>6&63)+bt(128|r&63)}return n}function vn(e){let t="",i=0;for(;i<e.length;){if(e.charCodeAt(i)!==37){t+=e[i++];continue}let n=parseInt(e.slice(i+1,i+3),16);if(i+=3,n>=192){let o=n<224?1:n<240?2:3;for(n&=(1<<6-o)-1;o-- >0;)n=n<<6|parseInt(e.slice(i+1,i+3),16)&63,i+=3}n<65536?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023))}return t}function Jn(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return vn(e.slice(2,-1));const i=e.indexOf("!",1),n=i===-1?"!":e.slice(0,i+1);return vn((t==null?void 0:t[n])??Ds[n]??n)+vn(e.slice(n.length))}function Qn(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${mn(t,!0)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${mn(t.slice(18),!0)}`:`!<${mn(t,!1)}>`}var ui=-1,Fs="tag:yaml.org,2002:merge",xn={filename:"",schema:ws,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function Ms(e){return"tagStart"in e&&e.tagStart!==ui?e.tagStart:"anchorStart"in e&&e.anchorStart!==ui?e.anchorStart:"valueStart"in e&&e.valueStart!==ui?e.valueStart:"start"in e?e.start:0}function Le(e,t){Ft.throwAt(e.source,e.position,t,e.filename)}function Xn(e,t,i,n){try{return i.finalize(n)}catch(o){if(o instanceof Ft)throw o;Ft.throwAt(e.source,t,o instanceof Error?o.message:String(o),e.filename)}}function Os(e,t){const i=Ps(e.source,t),n=t.tagStart===ui?"":e.source.slice(t.tagStart,t.tagEnd),o=e.schema.defaultScalarTag;if(n!==""){if(n==="!")return{value:i,tag:o};const r=Jn(n,e.tagHandlers),a=e.schema.lookupScalarTag(r);if(a){const l=a.resolve(i,!0,r);return l===oe&&Le(e,`cannot resolve a node with !<${r}> explicit tag`),{value:l,tag:a}}const s=e.schema.lookupMappingTag(r)??e.schema.lookupSequenceTag(r);if(s){i!==""&&Le(e,`cannot resolve a node with !<${r}> explicit tag`);const l=s.create(r);return{value:s.carrierIsResult?l:Xn(e,e.position,s,l),tag:s}}Le(e,`unknown scalar tag !<${r}>`)}return t.style===z.PLAIN?e.schema.resolveImplicitScalarTag(i):{value:o.resolve(i,!1,o.tagName),tag:o}}function Zn(e,t,i){const n=t.tagStart===ui?"":e.source.slice(t.tagStart,t.tagEnd);return n===""||n==="!"?i:Jn(n,e.tagHandlers)}function eo(e){return e.nodeKind==="mapping"}function to(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Le(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function io(e,t,i,n){to(e);for(const o of n.keys(i)){if(to(e),t.tag.has(t.value,o))continue;const r=t.tag.addPair(t.value,o,n.get(i,o));r&&Le(e,r),t.overridable??(t.overridable=new Set),t.overridable.add(o)}}function Vs(e,t,i,n){if(e.position=t.keyPosition,eo(n))io(e,t,i,n);else if(n.nodeKind==="sequence"&&Array.isArray(i)){i.length>100&&Le(e,"abnormal merge sequence size");for(const o of i){const r=e.nodeTags.get(o);r||Le(e,"cannot merge mappings; the provided source object is unacceptable"),io(e,t,o,r)}}else Le(e,"cannot merge mappings; the provided source object is unacceptable")}function zs(e,t,i,n,o){var a,s;if(e.position=t.keyPosition,t.keyIsMerge){Vs(e,t,n,o);return}!e.json&&t.tag.has(t.value,i)&&!((a=t.overridable)!=null&&a.has(i))&&Le(e,"duplicated mapping key");const r=t.tag.addPair(t.value,i,n);r&&Le(e,r),(s=t.overridable)==null||s.delete(i)}function wn(e,t,i){const n=e.frames[e.frames.length-1];if(n.kind==="document")n.value=t,n.hasValue=!0;else if(n.kind==="sequence"){eo(i)&&e.nodeTags.set(t,i);const o=n.tag.addItem(n.value,t,n.index++);o&&Le(e,o)}else if(n.hasKey){const o=n.key;n.key=void 0,n.hasKey=!1,zs(e,n,o,t,i)}else n.key=t,n.keyPosition=e.position,n.hasKey=!0,n.keyIsMerge=i.tagName===Fs}function kn(e,t,i,n,o){if(t.anchorStart!==ui){const r={value:i,tag:n,isValueFinal:o};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),r),r}return null}function Ws(e,t){const i={...xn,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;i.eventIndex<i.events.length;){const n=i.events[i.eventIndex++];switch(i.position=Ms(n),n.type){case Ae.DOCUMENT:i.anchors=new Map,i.nodeTags=new Map,i.aliasCount=0,i.tagHandlers=Object.create(null);for(const o of n.directives)o.kind==="tag"&&(i.tagHandlers[o.handle]=o.prefix);i.frames.push({kind:"document",position:i.position,value:void 0,hasValue:!1});break;case Ae.SCALAR:{const{value:o,tag:r}=Os(i,n);kn(i,n,o,r,!0),wn(i,o,r);break}case Ae.SEQUENCE:{const o=Zn(i,n,"tag:yaml.org,2002:seq"),r=i.schema.lookupSequenceTag(o);r||Le(i,`unknown sequence tag !<${o}>`);const a=r.create(o),s=kn(i,n,a,r,r.carrierIsResult);i.frames.push({kind:"sequence",position:i.position,value:a,tag:r,anchor:s,index:0});break}case Ae.MAPPING:{const o=Zn(i,n,"tag:yaml.org,2002:map"),r=i.schema.lookupMappingTag(o);r||Le(i,`unknown mapping tag !<${o}>`);const a=r.create(o),s=kn(i,n,a,r,r.carrierIsResult);i.frames.push({kind:"mapping",position:i.position,value:a,tag:r,anchor:s,key:void 0,keyPosition:i.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case Ae.ALIAS:{i.maxAliases!==-1&&++i.aliasCount>i.maxAliases&&Le(i,`aliases exceeded maxAliases (${i.maxAliases})`);const o=i.source.slice(n.anchorStart,n.anchorEnd),r=i.anchors.get(o);r||Le(i,`unidentified alias "${o}"`),r.isValueFinal||Le(i,`recursive alias "${o}" is not supported for tag ${r.tag.tagName} because it uses finalize()`),wn(i,r.value,r.tag);break}case Ae.POP:{const o=i.frames.pop();if(o.kind==="mapping"&&o.hasKey&&(i.position=o.keyPosition,Le(i,"incomplete mapping pair in event stream")),o.kind==="document")i.documents.push(o.value);else{const r=o.tag.carrierIsResult?o.value:Xn(i,o.position,o.tag,o.value);o.anchor&&(o.anchor.value=r,o.anchor.isValueFinal=!0),wn(i,r,o.tag)}break}}}return i.documents}var re=-1,no=Object.prototype.hasOwnProperty,_i=1,oo=2,ro=3,nn=4,Gs=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,qs=/[,\[\]{}]/,ao=/^(?:!|!!|![0-9A-Za-z-]+!)$/,Sn=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,so=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,Hs=new RegExp(`^(?:${Sn})*$`),js=new RegExp(`^(?:${so})+$`),Us=new RegExp(`^(?:!(?:${Sn})*|${so}(?:${Sn})*)$`),En={filename:"",maxDepth:100};function Ys(e,t,i){e.events.push({type:Ae.DOCUMENT,explicitStart:t,explicitEnd:i,directives:e.directives})}function lo(e,t,i,n,o,r,a){e.events.push({type:Ae.SEQUENCE,start:t,anchorStart:i,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function co(e,t,i,n,o,r,a){e.events.push({type:Ae.MAPPING,start:t,anchorStart:i,anchorEnd:n,tagStart:o,tagEnd:r,style:a})}function po(e,t){e.events.splice(t.eventsLength,0,{type:Ae.MAPPING,start:t.position,anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re,style:tt.FLOW})}function yi(e,t,i,n,o,r,a,s,l=yt.CLIP,d=-1,c=!1){e.events.push({type:Ae.SCALAR,valueStart:t,valueEnd:i,anchorStart:n,anchorEnd:o,tagStart:r,tagEnd:a,style:s,chomping:l,indent:d,fast:c})}function Ks(e,t,i){e.events.push({type:Ae.ALIAS,anchorStart:t,anchorEnd:i})}function bi(e){e.events.push({type:Ae.POP})}function Oe(e){yi(e,re,re,re,re,re,re,z.PLAIN)}function fo(){return{anchorStart:re,anchorEnd:re,tagStart:re,tagEnd:re}}function mi(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function vi(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function D(e,t){Ft.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function Ne(e){return e===10||e===13}function xi(e){return e===9||e===32}function ct(e){return xi(e)||Ne(e)}function Bt(e){return e===0||ct(e)}function ii(e){return e===44||e===91||e===93||e===123||e===125}function Js(e){return e>=48&&e<=57?e-48:-1}function Qs(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function Xs(e){return e===120?2:e===117?4:e===85?8:0}function Zs(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function on(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function Fe(e,t){let i=0,n=e.input.charCodeAt(e.position),o=e.position===e.lineStart||ct(e.input.charCodeAt(e.position-1));for(;n!==0;){for(;xi(n);)o=!0,n===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&o&&n===35)do n=e.input.charCodeAt(++e.position);while(!Ne(n)&&n!==0);if(!Ne(n))break;for(on(e),i++,o=!0,n=e.input.charCodeAt(e.position);n===32;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return i}function wi(e,t=e.position){const i=e.input.charCodeAt(t);if((i===45||i===46)&&i===e.input.charCodeAt(t+1)&&i===e.input.charCodeAt(t+2)){const n=e.input.charCodeAt(t+3);return n===0||ct(n)}return!1}function go(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Cn(e){if(e.position!==e.lineStart)return!1;if(wi(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=mi(e);go(e),Fe(e,!0);const i=e.input.charCodeAt(e.position),n=e.position===e.lineStart&&(i===37||i===45&&wi(e));return vi(e,t),n}function ho(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!Ne(t);)t=e.input.charCodeAt(++e.position)}function uo(e,t,i){const n=Gs.exec(e.input.slice(t,i));n!==null&&(e.position=t+n.index+n[0].length-1,D(e,"the stream contains non-printable characters"))}function el(e,t,i){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==re&&D(e,"duplication of a tag property");const n=e.position;let o=!1,r=!1,a="!",s=e.input.charCodeAt(++e.position);s===60?(o=!0,s=e.input.charCodeAt(++e.position)):s===33&&(r=!0,a="!!",s=e.input.charCodeAt(++e.position));let l=e.position,d;if(o){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&D(e,"unexpected end of the stream within a verbatim tag"),d=e.input.slice(l,e.position),e.position++}else{for(;s!==0&&!ct(s)&&!(i&&ii(s));)s===33&&(r?D(e,"tag suffix cannot contain exclamation marks"):(a=e.input.slice(l-1,e.position+1),ao.test(a)||D(e,"named tag handle cannot contain such characters"),r=!0,l=e.position+1)),s=e.input.charCodeAt(++e.position);d=e.input.slice(l,e.position),qs.test(d)&&D(e,"tag suffix cannot contain flow indicator characters")}return d&&!(o?Hs.test(d):js.test(d))&&D(e,`tag name cannot contain such characters: ${d}`),!o&&a!=="!"&&a!=="!!"&&!no.call(e.tagHandlers,a)&&D(e,`undeclared tag handle "${a}"`),t.tagStart=n,t.tagEnd=e.position,!0}function tl(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==re&&D(e,"duplication of an anchor property"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ct(e.input.charCodeAt(e.position))&&!ii(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&D(e,"name of an anchor node must contain at least one character"),t.anchorStart=i,t.anchorEnd=e.position,!0}function il(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==re||t.tagStart!==re)&&D(e,"alias node should not have any properties"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ct(e.input.charCodeAt(e.position))&&!ii(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&D(e,"name of an alias node must contain at least one character"),Ks(e,i,e.position),!0}function Tn(e,t){Fe(e,!1),e.lineIndent<t&&D(e,"deficient indentation")}function nl(e,t,i){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const n=e.position;let o=!0;for(;e.input.charCodeAt(e.position)!==0;){const r=e.input.charCodeAt(e.position);if(r===39){if(e.input.charCodeAt(e.position+1)===39){o=!1,e.position+=2;continue}const a=e.position;return e.position++,yi(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,z.SINGLE_QUOTED,yt.CLIP,-1,o),!0}Ne(r)?(o=!1,Tn(e,t)):e.position===e.lineStart&&wi(e)?D(e,"unexpected end of the document within a single quoted scalar"):r!==9&&r<32?D(e,"expected valid JSON character"):e.position++}D(e,"unexpected end of the stream within a single quoted scalar")}function ol(e,t,i){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const n=e.position;let o=!0;for(;e.input.charCodeAt(e.position)!==0;){const r=e.input.charCodeAt(e.position);if(r===34){const a=e.position;return e.position++,yi(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,z.DOUBLE_QUOTED,yt.CLIP,-1,o),!0}if(r===92){o=!1;const a=e.input.charCodeAt(++e.position);if(Ne(a))Tn(e,t);else if(Zs(a))e.position++;else{let s=Xs(a);for(s===0&&D(e,"unknown escape sequence");s-- >0;)e.position++,Qs(e.input.charCodeAt(e.position))<0&&D(e,"expected hexadecimal character");e.position++}}else Ne(r)?(o=!1,Tn(e,t)):e.position===e.lineStart&&wi(e)?D(e,"unexpected end of the document within a double quoted scalar"):r!==9&&r<32?D(e,"expected valid JSON character"):e.position++}D(e,"unexpected end of the stream within a double quoted scalar")}function rl(e,t,i){const n=e.input.charCodeAt(e.position);let o=yt.CLIP,r=-1,a=!1;if(n!==124&&n!==62)return!1;const s=n===124?z.LITERAL_BLOCK:z.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const m=e.input.charCodeAt(e.position),h=Js(m);if(m===43||m===45)o!==yt.CLIP&&D(e,"repeat of a chomping mode identifier"),o=m===43?yt.KEEP:yt.STRIP,e.position++;else if(h>=0)h===0&&D(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),a&&D(e,"repeat of an indentation width identifier"),r=t+h-1,a=!0,e.position++;else break}let l=!1;for(;xi(e.input.charCodeAt(e.position));)l=!0,e.position++;l&&e.input.charCodeAt(e.position)===35&&ho(e),Ne(e.input.charCodeAt(e.position))?on(e):e.input.charCodeAt(e.position)!==0&&D(e,"a line break is expected");let d=a?r:-1,c=0;const _=e.position;let u=e.position;for(;e.input.charCodeAt(e.position)!==0;){const m=e.position;let h=0;for(;e.input.charCodeAt(m+h)===32;)h++;const y=e.input.charCodeAt(m+h);if(y===0){d>=0?h>d&&(u=m+h):h>0&&(u=m+h);break}if(Cn(e))break;if(!a&&d===-1&&Ne(y)&&(c=Math.max(c,h)),!a&&d===-1&&!Ne(y)&&(y===9&&h<t&&(e.position=m+h,D(e,"tab characters must not be used in indentation")),h>=t&&h<c&&(e.position=m+h,D(e,"bad indentation of a mapping entry"))),d===-1&&y!==0&&!Ne(y)&&h<t){e.lineIndent=h,e.position=m+h;break}!a&&y!==0&&!Ne(y)&&d===-1&&(d=h);const v=d===-1?t+1:d;if(y!==0&&!Ne(y)&&h<v){e.lineIndent=h,e.position=m+h;break}ho(e),u=e.position,Ne(e.input.charCodeAt(e.position))&&(on(e),u=e.position)}return uo(e,_,u),yi(e,_,u,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,s,o,d),!0}function al(e,t){const i=e.input.charCodeAt(e.position),n=t===_i;if(i===0||ct(i)||i===35||i===38||i===42||i===33||i===124||i===62||i===39||i===34||i===37||i===64||i===96||ii(i))return!1;if(i===63||i===45){const o=e.input.charCodeAt(e.position+1);if(Bt(o)||n&&ii(o))return!1}return!0}function sl(e,t,i,n){if(!al(e,i))return!1;const o=e.position;let r=e.position,a=e.input.charCodeAt(e.position);const s=i===_i;let l=!1;for(;a!==0&&!Cn(e);){if(a===58){const d=e.input.charCodeAt(e.position+1);if(Bt(d)||s&&ii(d))break}else if(a===35){if(ct(e.input.charCodeAt(e.position-1)))break}else{if(s&&ii(a))break;if(Ne(a)){const d=e.position,c=e.line,_=e.lineStart,u=e.lineIndent;if(Fe(e,!1),e.lineIndent>=t){l=!0,a=e.input.charCodeAt(e.position);continue}e.position=d,e.line=c,e.lineStart=_,e.lineIndent=u;break}}xi(a)||(r=e.position+1),a=e.input.charCodeAt(++e.position)}return r===o?!1:(uo(e,o,r),yi(e,o,r,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,z.PLAIN,yt.CLIP,-1,!l),!0)}function Ti(e,t){const i=e.line;Fe(e,!0),(e.line>i&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&D(e,"deficient indentation")}function ll(e,t,i){const n=e.input.charCodeAt(e.position),o=n===123,r=e.position;let a=!0;if(n!==91&&n!==123)return!1;const s=o?125:93;for(o?co(e,r,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,tt.FLOW):lo(e,r,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,tt.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Ti(e,t);let l=e.input.charCodeAt(e.position);if(l===s)return e.position++,bi(e),!0;a?l===44&&D(e,"expected the node content, but found ','"):D(e,"missed comma between flow collection entries");let d=!1,c=!1;l===63&&ct(e.input.charCodeAt(e.position+1))&&(d=c=!0,e.position+=1,Ti(e,t));const _=e.line,u=mi(e),m=ki(e,t,_i,!1,!0);Ti(e,t),l=e.input.charCodeAt(e.position),(o||c||e.line===_)&&l===58?(d=!0,e.position++,Ti(e,t),o||po(e,u),m||Oe(e),ki(e,t,_i,!1,!0)||Oe(e),Ti(e,t),o||bi(e)):o&&d?(m||Oe(e),Oe(e)):o?Oe(e):d&&(po(e,u),m||Oe(e),Oe(e),bi(e)),l=e.input.charCodeAt(e.position),l===44?(a=!0,e.position++):a=!1}D(e,"unexpected end of the stream within a flow collection")}function _o(e,t,i){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Bt(e.input.charCodeAt(e.position+1)))return!1;for(lo(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,tt.BLOCK);e.input.charCodeAt(e.position)===45&&Bt(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,D(e,"tab characters must not be used in indentation"));const n=e.line;e.position++;const o=Fe(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Bt(e.input.charCodeAt(e.position+1))&&D(e,"bad indentation of a sequence entry"),o&&e.lineIndent<=t?Oe(e):ki(e,t,ro,!1,!0),Fe(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&D(e,"bad indentation of a sequence entry"),e.line===n&&e.input.charCodeAt(e.position)===45&&Bt(e.input.charCodeAt(e.position+1))&&D(e,"bad indentation of a sequence entry")}return bi(e),!0}function $n(e,t,i,n){let o=!1,r=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let l=e.input.charCodeAt(e.position);for(;l!==0;){!o&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,D(e,"tab characters must not be used in indentation"));const d=e.input.charCodeAt(e.position+1),c=e.line;if((l===63||l===58)&&Bt(d))a||(co(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,tt.BLOCK),a=!0),l===63?(o&&Oe(e),r=!0,o=!0):(o||(Oe(e),r=!0),o=!1),e.position+=1,s=!0;else{o&&(Oe(e),o=!1);const _=mi(e);if(!ki(e,i,oo,!1,!0))break;if(e.line===c){for(l=e.input.charCodeAt(e.position);xi(l);)l=e.input.charCodeAt(++e.position);if(l===58)l=e.input.charCodeAt(++e.position),Bt(l)||D(e,"a whitespace character is expected after the key-value separator within a block mapping"),a||(e.events.splice(_.eventsLength,0,{type:Ae.MAPPING,start:_.position,anchorStart:n.anchorStart,anchorEnd:n.anchorEnd,tagStart:n.tagStart,tagEnd:n.tagEnd,style:tt.BLOCK}),a=!0),r=!0,o=!1,s=!1;else if(r)D(e,"expected ':' after a mapping key");else return n.anchorStart!==re||n.tagStart!==re?(vi(e,_),!1):!0}else if(r)D(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.anchorStart!==re||n.tagStart!==re?(vi(e,_),!1):!0}if(ki(e,t,nn,!0,s)&&(s=!1),o||s&&(Oe(e),s=!1),Fe(e,!0),l=e.input.charCodeAt(e.position),(e.line===c||e.lineIndent>t)&&l!==0)D(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return r?(o&&Oe(e),a&&bi(e),!0):!1}function ki(e,t,i,n,o,r=!0){var h,y;e.depth>=e.maxDepth&&D(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,l=!1,d=null;const c=fo();let _=i===nn||i===ro,u=_;const m=_;if(n&&Fe(e,!0)&&(s=!0,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1),a===1)for(;;){const v=e.input.charCodeAt(e.position),w=mi(e);if(s&&a!==1&&(v===33||v===38))break;if(s&&m&&(c.tagStart!==re||c.anchorStart!==re)&&(v===33||v===38)){const p=mi(e),g=t+1;if($n(e,e.position-e.lineStart,g,c)&&((h=e.events[p.eventsLength])==null?void 0:h.type)===Ae.MAPPING)return e.depth--,!0;vi(e,p)}if(s&&(v===33&&c.tagStart!==re||v===38&&c.anchorStart!==re)||!el(e,c,i===_i)&&!tl(e,c))break;d===null&&(d=w),Fe(e,!0)?(s=!0,u=m,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1):u=!1}if(u&&(u=s||o),a===1||i===nn){const v=i===_i||i===oo?t:t+1,w=e.position-e.lineStart;if(a===1)if(u&&(_o(e,w,c)||$n(e,w,v,c))||ll(e,v,c))l=!0;else{const p=e.input.charCodeAt(e.position);if(d!==null&&r&&m&&!u&&p!==124&&p!==62){const g=mi(e),f=d.position-d.lineStart;vi(e,d),$n(e,f,v,fo())&&((y=e.events[g.eventsLength])==null?void 0:y.type)===Ae.MAPPING?l=!0:vi(e,g)}!l&&(_&&rl(e,v,c)||nl(e,v,c)||ol(e,v,c)||il(e,c)||sl(e,v,i,c))&&(l=!0)}else a===0&&(l=u&&_o(e,w,c))}return _=_&&!l,!l&&(c.anchorStart!==re||c.tagStart!==re||_)&&(yi(e,re,re,c.anchorStart,c.anchorEnd,c.tagStart,c.tagEnd,z.PLAIN),l=!0),e.depth--,l||c.anchorStart!==re||c.tagStart!==re}function dl(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ct(e.input.charCodeAt(e.position));)e.position++;const i=e.input.slice(t,e.position),n=[];for(i.length===0&&D(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!Ne(e.input.charCodeAt(e.position));){for(;xi(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||Ne(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const o=e.position;for(;e.input.charCodeAt(e.position)!==0&&!ct(e.input.charCodeAt(e.position));)e.position++;n.push(e.input.slice(o,e.position))}if(Ne(e.input.charCodeAt(e.position))&&on(e),i==="YAML"){e.directives.some(r=>r.kind==="yaml")&&D(e,"duplication of %YAML directive"),n.length!==1&&D(e,"YAML directive accepts exactly one argument");const o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]);o===null&&D(e,"ill-formed argument of the YAML directive"),parseInt(o[1],10)!==1&&D(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:n[0]})}else if(i==="TAG"){n.length!==2&&D(e,"TAG directive accepts exactly two arguments");const[o,r]=n;ao.test(o)||D(e,"ill-formed tag handle (first argument) of the TAG directive"),no.call(e.tagHandlers,o)&&D(e,`there is a previously declared suffix for "${o}" tag handle`),Us.test(r)||D(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[o]=r,e.directives.push({kind:"tag",handle:o,prefix:r})}return!0}function cl(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for(Fe(e,!0);dl(e);)t=!0,Fe(e,!0);let i=!1,n=!1,o=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Bt(e.input.charCodeAt(e.position+3))){i=!0;const s=e.line;e.position+=3,Fe(e,!0),o=e.line>s}else t&&D(e,"directives end mark is expected");const r=e.events.length;if(!i&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&wi(e)){e.position+=3,Fe(e,!0);return}if(Ys(e,i,!1),ki(e,e.lineIndent-1,nn,!1,o,o)||Oe(e),Fe(e,!0),e.position===e.lineStart&&wi(e)&&(n=e.input.charCodeAt(e.position)===46,n)){const s=e.line;e.position+=3,Fe(e,!0),e.line===s&&e.position<e.length&&D(e,"end of the stream or a document separator is expected")}const a=e.events[r];(a==null?void 0:a.type)===Ae.DOCUMENT&&(a.explicitEnd=n),bi(e),!n&&e.position<e.length&&!Cn(e)&&D(e,"end of the stream or a document separator is expected")}function pl(e,t){const i=e.length,n={...En,...t,input:`${e}\0`,length:i,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},o=e.indexOf("\0");for(o!==-1&&Ft.throwAt(e,o,"null byte is not allowed in input",n.filename);n.position<n.length&&(go(n),Fe(n,!0),!(n.position>=n.length));){const r=n.position;cl(n),n.position===r&&D(n,"can not read a document")}return n.events}var fl={...En,...xn};function gl(e,t={}){const i={...fl,...t},n=String(e),o=Object.keys(En),r=Object.keys(xn);return Ws(pl(n,hn(i,o)),{...hn(i,r),source:n})}function hl(e,t){const i=gl(e,t);if(i.length===0)throw new Ft("expected a document, but the input is empty");if(i.length===1)return i[0];throw new Ft("expected a single document in the stream, but found more")}var ni=Symbol("INVALID");function ul(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(r=>r!==void 0)),i=e.implicitScalarTags,n=e.tags.filter(r=>!(r.nodeKind==="scalar"&&r.implicit)&&!t.has(r)),o=e.tags.filter(r=>t.has(r));return[...i.map(r=>({tag:r,implicitTag:!0})),...n.map(r=>({tag:r,implicitTag:!1})),...o.map(r=>({tag:r,implicitTag:!0}))]}function _l(e,t){for(let i=0,n=e.representTypes.length;i<n;i+=1){const{tag:o,implicitTag:r}=e.representTypes[i];if(o.identify(t)){let a;return o.matchByTagPrefix?a=o.representTagName(t):a=o.tagName,{tag:o,tagName:a,implicitTag:r}}}return null}function $i(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const d=e.refs.get(t);if(d)return d.anchor===void 0&&(d.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:d.anchor}}const i=_l(e,t);if(!i){if(t===void 0||e.skipInvalid)return ni;throw new Ft(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:n,tagName:o,implicitTag:r}=i,a=r?o:Qn(o);if(n.nodeKind==="scalar")return{kind:"scalar",tag:a,tagged:!r,style:z.PLAIN,value:n.represent(t)};if(n.nodeKind==="sequence"){const d=n.represent(t),c={kind:"sequence",tag:a,tagged:!r,style:tt.BLOCK,items:[]};e.noRefs||e.refs.set(t,c);for(let _=0,u=d.length;_<u;_+=1){let m=$i(e,d[_]);m===ni&&d[_]===void 0&&(m=$i(e,null)),m!==ni&&c.items.push(m)}return c}const s=n.represent(t),l={kind:"mapping",tag:a,tagged:!r,style:tt.BLOCK,items:[]};e.noRefs||e.refs.set(t,l);for(const[d,c]of s){const _=$i(e,d);if(_===ni)continue;const u=$i(e,c);u!==ni&&l.items.push({key:_,value:u})}return l}function yl(e,t,i={}){const n=$i({representTypes:ul(t),noRefs:i.noRefs??!1,skipInvalid:i.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:n===ni?null:n,directives:[]}]}var bl=Symbol("visit:break"),yo=Symbol("visit:skip");function rn(e,t,i){const n=t(e,i);if(n===bl)return!0;if(n===yo)return!1;const o=i.depth+1;switch(e.kind){case"sequence":for(const r of e.items)if(rn(r,t,{depth:o,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:r,value:a}of e.items)if(rn(r,t,{depth:o,parent:e,isKey:!0})||rn(a,t,{depth:o,parent:e,isKey:!1}))return!0}return!1}function bo(e,t){for(const i of e)if(i.contents&&rn(i.contents,t,{depth:0,parent:null,isKey:!1}))return}function an(e,t){return(e&1<<t)!==0}var mo={applyQuoteFlowKeysOption:ml,doubleQuoteForInvisibles:vl,doubleQuoteWhitespaceOnly:xl,applyForceQuotesOption:wl,tryLongOrMultilineAsBlock:kl,quoteInvalidPlain:Sl,fallbackToDoubleQuoted:El};function vo(e){return e.presenterOptions.quoteStyle==="single"&&an(e.allowedStylesMask,z.SINGLE_QUOTED)?z.SINGLE_QUOTED:z.DOUBLE_QUOTED}function ml(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==z.PLAIN||(e.style=z.DOUBLE_QUOTED))}function vl(e){e.style===z.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=z.DOUBLE_QUOTED)}function xl(e){e.style===z.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=z.DOUBLE_QUOTED)}function wl(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==z.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?z.DOUBLE_QUOTED:vo(e)))}function kl(e){if(e.style!==z.PLAIN||e.isKey)return;const t=e.node.value,i=t.indexOf(`
`)!==-1;if(!an(e.allowedStylesMask,z.LITERAL_BLOCK)){i&&(e.style=z.DOUBLE_QUOTED);return}const n=e.presenterOptions.lineWidth;if(n===-1){i&&(e.style=z.LITERAL_BLOCK);return}const o=Math.max(Math.min(n,40),n-e.shiftOfContent);let r=0,a=!1;for(;r<=t.length;){let s=t.length;const l=t.indexOf(`
`,r);l!==-1&&(s=l);const d=t.slice(r,s);if(d.length>o&&d[0]!==" "&&/ [^ \t]/.test(d)&&(a=!0),l===-1)break;r=l+1}a?e.style=z.FOLDED_BLOCK:i&&(e.style=z.LITERAL_BLOCK)}function Sl(e){e.style===z.PLAIN&&!an(e.allowedStylesMask,z.PLAIN)&&(e.style=vo(e))}function El(e){an(e.allowedStylesMask,e.style)||(e.style=z.DOUBLE_QUOTED)}function Bi(e,t){return e|1<<t}var Cl="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",Tl="[\\n\\r]",$l="\\uFEFF",Bn="[ \\t]",xo=`(?:(?!(?:${Tl}|${$l}))${Cl})`,sn=`(?:(?!${Bn})${xo})`,wo="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",ko="[-?:,\\[\\]{}#&*!|>'\"%@`]",Bl="[,\\[\\]{}]",In=sn,Nn=`(?:(?!${Bl})${sn})`,Il=`(?:(?:(?!${ko})${sn})|[?:-](?=${In}))`,Nl=`(?:(?:(?!${ko})${sn})|[?:-](?=${Nn}))`,So=`(?:(?:(?![:#])${In})|:(?=${In}))#*`,Eo=`(?:(?:(?![:#])${Nn})|:(?=${Nn}))#*`,Co=`(?:${Bn}*${So})*`,To=`(?:${Bn}*${Eo})*`,$o=`${Il}#*${Co}`,Bo=`${Nl}#*${To}`,Al=$o,Ll=Bo,Pl=`\\n+${So}${Co}`,Dl=`\\n+${Eo}${To}`,Rl=`${$o}(?:${Pl})*`,Fl=`${Bo}(?:${Dl})*`,Ml=new RegExp(`^(?:${Rl})$`,"u"),Ol=new RegExp(`^(?:${Fl})$`,"u"),Vl=new RegExp(`^(?:${Al})$`,"u"),zl=new RegExp(`^(?:${Ll})$`,"u"),Wl=new RegExp(`^(?:${wo})*$`,"u"),Gl=new RegExp(`^(?:${wo}|\\n)*$`,"u"),ql=new RegExp(`^(?:${xo}|\\n)*$`,"u"),Hl=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,An=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function jl(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?zl:Vl:e.flowOnly?Ol:Ml).test(t)||e.shiftOfFirstLine===0&&Hl.test(t))return!1;if(e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1){const o=t.slice(n+1);if(An.test(o))return!1}}}const i=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&i!==e.node.tag||!e.node.tagged&&t==="="&&i===e.presenterOptions.schema.defaultScalarTag.tagName)}function Ul(e){const t=e.node.value;if(!(e.isKey?Wl:Gl).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const i=t.indexOf(`
`);if(i!==-1&&An.test(t.slice(i+1)))return!1}return!0}function Yl(e){if(e.flowOnly||!ql.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&An.test(e.node.value))}function Kl(e){let t=Bi(0,z.DOUBLE_QUOTED);jl(e)&&(t=Bi(t,z.PLAIN)),Ul(e)&&(t=Bi(t,z.SINGLE_QUOTED)),Yl(e)&&(t=Bi(Bi(t,z.LITERAL_BLOCK),z.FOLDED_BLOCK)),e.allowedStylesMask=t}function Jl(e){switch(e.style){case z.PLAIN:return Ql(e);case z.SINGLE_QUOTED:return Xl(e);case z.LITERAL_BLOCK:return Zl(e);case z.FOLDED_BLOCK:return ed(e);case z.DOUBLE_QUOTED:return td(e)}}function Ql(e){return Io(e.node.value,e.shiftOfContent)}function Xl(e){return`'${Io(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function Zl(e){const t=e.node.value;return"|"+Ao(t,e.shiftOfParent,e.shiftOfContent)+Lo(No(t,e.shiftOfContent))}function ed(e){const t=e.node.value,i=e.presenterOptions.lineWidth;let n=1/0;return i!==-1&&(n=Math.max(Math.min(i,40),i-e.shiftOfContent)),">"+Ao(t,e.shiftOfParent,e.shiftOfContent)+Lo(No(nd(t,n),e.shiftOfContent))}function td(e){return`"${ad(e.node.value)}"`}function Io(e,t){let i=e.indexOf(`
`);if(i===-1)return e;const n=" ".repeat(t);let o=e.slice(0,i);const r=/(\n+)([^\n]*)/g;r.lastIndex=i;let a;for(;a=r.exec(e);){const s=a[1].length,l=a[2];o+=`
`.repeat(s+1)+n+l}return o}function No(e,t){const i=" ".repeat(t);let n=0,o="";const r=e.length;for(;n<r;){let a;const s=e.indexOf(`
`,n);s===-1?(a=e.slice(n),n=r):(a=e.slice(n,s+1),n=s+1),a.length&&a!==`
`&&(o+=i),o+=a}return o}function id(e){return/^\n* /.test(e)}function Ao(e,t,i){const n=id(e)?String(i-t):"",o=e[e.length-1]===`
`;return`${n}${o&&(e[e.length-2]===`
`||e===`
`)?"+":o?"":"-"}
`}function Lo(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Ln(e){return e===" "||e==="	"}function Po(e,t){if(e===""||Ln(e[0]))return e;const i=/ [^ \t]/g;let n,o=0,r,a=0,s=0,l="";for(;n=i.exec(e);)s=n.index,s-o>t&&(r=a>o?a:s,l+=`
${e.slice(o,r)}`,o=r+1),a=s;return l+=`
`,e.length-o>t&&a>o?l+=`${e.slice(o,a)}
${e.slice(a+1)}`:l+=e.slice(o),l.slice(1)}function nd(e,t){const i=/(\n+)([^\n]*)/g;let n=e.indexOf(`
`);n===-1&&(n=e.length),i.lastIndex=n;let o=Po(e.slice(0,n),t),r=e[0]===`
`||Ln(e[0]),a,s;for(;s=i.exec(e);){const l=s[1],d=s[2];a=d!==""&&Ln(d[0]),o+=l+(!r&&!a&&d!==""?`
`:"")+Po(d,t),r=a}return o}var od=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function rd(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),i=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-i.length)}${i}`:`\\u${"0".repeat(4-i.length)}${i}`}function ad(e){return e.replace(od,rd)}var ln=10,Pn={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(mo).map(e=>Reflect.get(mo,e)),tagBeforeAnchor:!1};function sd(e){return e.tagged?e.tag:Qn(e.tag)}function ld(e){const t={...Pn,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function Dn(e,t){return`
${" ".repeat(e.indent*t)}`}function dd(e,t,i,n,o,r){return{node:t,parent:i,level:n,isKey:o,flowOnly:r,shiftOfParent:n===0?-1:e.indent*(n-1),shiftOfContent:e.indent*Math.max(1,n),shiftOfFirstLine:n===0?0:e.indent*n,presenterOptions:e,allowedStylesMask:0,style:t.style}}function cd(e,t,i){let n="";for(let r=0,a=i.items.length;r<a;r+=1){const s=It(e,t,i.items[r],i,{}).text;r>0&&(n+=`,${e.flowSkipCommaSpace?"":" "}`),n+=s}const o=e.flowBracketPadding&&i.items.length>0?" ":"";return`[${o}${n}${o}]`}function Do(e,t,i,n){let o="";for(let r=0,a=i.items.length;r<a;r+=1){const s=It(e,t+1,i.items[r],i,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!n||o!=="")&&(o+=Dn(e,t)),s===""||ln===s.charCodeAt(0)?o+="-":o+="- ",o+=s}return o}function pd(e,t,i){let n="";for(const{key:r,value:a}of i.items){let s="";n!==""&&(s+=`,${e.flowSkipCommaSpace?"":" "}`);const l=It(e,t,r,i,{iskey:!0}),d=l.text,c=It(e,t,a,i,{}).text,_=e.flowSkipColonSpace||c===""?"":" ",u=r.kind==="scalar"&&l.noBody&&(r.tagged||r.anchor!==void 0),m=r.kind==="alias"||u?" ":"";s+=`${d}${m}:${_}${c}`,n+=s}const o=e.flowBracketPadding&&n!==""?" ":"";return`{${o}${n}${o}}`}function fd(e,t,i,n){let o="";for(let r=0,a=i.items.length;r<a;r+=1){let s="";(!n||o!=="")&&(s+=Dn(e,t));const{key:l,value:d}=i.items[r],c=(l.kind==="mapping"||l.kind==="sequence")&&l.style===tt.BLOCK&&l.items.length!==0||l.kind==="scalar"&&(l.style===z.LITERAL_BLOCK||l.style===z.FOLDED_BLOCK),_=c?It(e,t+1,l,i,{block:!0,compact:!0,isblockseq:!Rn(e,l,t+1)}):It(e,t+1,l,i,{block:!0,compact:!0,iskey:!0}),u=_.text,m=l.kind==="scalar"&&l.value.indexOf(`
`)!==-1,h=u.length>1024&&/^[\s\S]{1025}/u.test(u),y=c||m||h;y&&(u&&ln===u.charCodeAt(0)?s+="?":s+="? "),s+=u,y&&(s+=Dn(e,t));const v=It(e,t+1,d,i,{block:!0,compact:y,isblockseq:y&&!Rn(e,d,t+1)}).text,w=l.kind==="scalar"&&_.noBody&&(l.tagged||l.anchor!==void 0),p=!y&&(l.kind==="alias"||w)?" ":"";v===""||ln===v.charCodeAt(0)?s+=`${p}:`:s+=`${p}: `,s+=v,o+=s}return o}function Rn(e,t,i){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&i>0}function It(e,t,i,n,o){if(i.kind==="alias")return e.openEnded=!1,{text:`*${i.anchor}`,noBody:!1};const{block:r=!1,iskey:a=!1,isblockseq:s=!1}=o;let l=o.compact??!1;const d=i.anchor!==void 0;Rn(e,i,t)&&(l=!1);let c,_=i.tagged;const u=r&&(i.kind==="mapping"||i.kind==="sequence")&&i.style===tt.BLOCK&&i.items.length!==0;if(i.kind==="mapping")u?c=fd(e,t,i,l):c=pd(e,t,i);else if(i.kind==="sequence")u?e.seqNoIndent&&!s&&t>0?c=Do(e,t-1,i,l):c=Do(e,t,i,l):c=cd(e,t,i);else{const y=dd(e,i,n,t,a,!r);Kl(y);for(const v of e.scalarStyleRules)v(y);c=Jl(y),e.openEnded=(y.style===z.LITERAL_BLOCK||y.style===z.FOLDED_BLOCK)&&(i.value===`
`||i.value.endsWith(`

`)),_=i.tagged||c===""&&y.flowOnly&&(n==null?void 0:n.kind)==="sequence"&&!d||y.style!==z.PLAIN&&i.tag!==e.defaultScalarTagName}(i.kind==="mapping"||i.kind==="sequence")&&!u&&(e.openEnded=!1),u&&l&&t>0&&e.indent>2&&(c=`${" ".repeat(e.indent-2)}${c}`);const m=c==="";let h=c;if(_||d){const y=[],v=_?sd(i):null,w=d?`&${i.anchor}`:null;e.tagBeforeAnchor?(v!==null&&y.push(v),w!==null&&y.push(w)):(w!==null&&y.push(w),v!==null&&y.push(v));const p=c===""||c.charCodeAt(0)===ln?"":" ";h=`${y.join(" ")}${p}${c}`}return{text:h,noBody:m}}function gd(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===tt.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function hd(e){let t="";for(const i of e.directives){if(i.kind==="yaml"){t+=`%YAML ${i.version}
`;continue}const{handle:n,prefix:o}=i;t+=`%TAG ${n} ${o}
`}return t}function ud(e,t){const i=ld(t);let n="",o=!1;for(let r=0;r<e.length;r+=1){const a=e[r];i.openEnded=!1;const s=hd(a),l=s!=="",d=a.explicitStart||l||r>0&&!o;if(n+=s,a.contents===null)d&&(n+=`---
`);else if(d){const c=It(i,0,a.contents,null,{block:!0,compact:!0}).text,_=c===""?"":l||gd(a.contents)?`
`:" ";n+=`---${_}${c}
`}else n+=It(i,0,a.contents,null,{block:!0,compact:!0}).text+`
`;o=a.explicitEnd||i.openEnded,o&&(n+=`...
`)}return n}var _d={...Pn,schema:Ss,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function yd(e,t){const i=String(e),n=String(t);return i<n?-1:i>n?1:0}function bd(e,t={}){const i={..._d,...t},n=yl(e,i.schema,{noRefs:i.noRefs,skipInvalid:i.skipInvalid});if(i.flowLevel>=0&&bo(n,(o,r)=>{if(!(r.depth<i.flowLevel))return(o.kind==="sequence"||o.kind==="mapping")&&(o.style=tt.FLOW),yo}),i.sortKeys){const o=i.sortKeys===!0?yd:i.sortKeys;bo(n,r=>{r.kind==="mapping"&&r.items.sort((a,s)=>o(a.key.kind==="scalar"?a.key.value:"",s.key.kind==="scalar"?s.key.value:""))})}return i.transform(n),ud(n,{...hn(i,Object.keys(Pn)),schema:i.schema})}console.info("%c⚡ Energy Station Panel v1.6.1 Loaded ⚡","background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");class Ro extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._config=null,this._isDrawerOpen=!1,this._scale=1,this._cardNode=null,this._editorNode=null,this._hasAttemptedAutoImport=!1}set hass(t){this._hass=t,this._cardNode&&(this._cardNode.hass=t),this._editorNode&&(this._editorNode.hass=t),this._updateHaStatusBadge(),this._hasAttemptedAutoImport||(this._hasAttemptedAutoImport=!0,this._autoDiscoverLovelaceConfig())}connectedCallback(){this._loadConfig(),this._render(),this._bindEvents(),this._hass&&(this._cardNode&&(this._cardNode.hass=this._hass),this._editorNode&&(this._editorNode.hass=this._hass)),setTimeout(()=>{this._cardNode&&typeof this._cardNode._updateFlowPaths=="function"&&this._cardNode._updateFlowPaths()},120)}_loadConfig(){try{const t=localStorage.getItem("energy_station_app_config");t&&(this._config=JSON.parse(t))}catch{}this._config||(this._config=JSON.parse(JSON.stringify(Q))),this._config.appearance||(this._config.appearance=JSON.parse(JSON.stringify(Q.appearance||{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"}))),this._scale=this._config.card_scale||1}_saveConfig(){try{typeof localStorage<"u"&&localStorage.setItem("energy_station_app_config",JSON.stringify(this._config))}catch{}this._cardNode&&this._cardNode.setConfig(this._config)}_updateCardConfig(){this._cardNode&&this._cardNode.setConfig(this._config),this._editorNode&&this._editorNode.setConfig(this._config),this._saveConfig()}async _autoDiscoverLovelaceConfig(){var t,i,n,o;if(this._hass)try{const r=localStorage.getItem("energy_station_app_config");if(r){const a=JSON.parse(r);if((n=(i=(t=a.solar)==null?void 0:t.strings)==null?void 0:i[0])!=null&&n.voltage_entity&&((o=a.inverter)!=null&&o.voltage_entity))return}await this._importFromLovelace(!1)}catch(r){console.warn("Lovelace auto-import skipped:",r)}}async _importFromLovelace(t=!0){var i,n;if(!this._hass){t&&alert("Немає підключення до Home Assistant");return}try{const o=[],r=a=>{for(const s of a||[])if(s.cards){for(const l of s.cards)if(l.type&&(l.type==="custom:energy-station-card"||l.type.includes("energy-station-card"))&&o.push(l),l.cards&&Array.isArray(l.cards))for(const d of l.cards)d.type&&(d.type==="custom:energy-station-card"||d.type.includes("energy-station-card"))&&o.push(d)}};try{const a=await this._hass.callWS({type:"lovelace/config"});r(a==null?void 0:a.views)}catch{}if(o.length===0&&this._hass.panels){const a=Object.values(this._hass.panels).filter(s=>s.component_name==="lovelace");for(const s of a)if(s.url_path&&s.url_path!=="energy-station")try{const l=await this._hass.callWS({type:"lovelace/config",url_path:s.url_path});if(r(l==null?void 0:l.views),o.length>0)break}catch{}}if(o.length>0){const a=o[0],s=JSON.parse(JSON.stringify(a));delete s.type,s.appearance={...Q.appearance,...((i=this._config)==null?void 0:i.appearance)||{},...s.appearance||{}},this._config=s,this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");return}if(typeof window<"u"&&((n=window.parent)!=null&&n.document)){const a=window.parent.document.querySelectorAll("energy-station-card");for(const s of a)if(s!==this._cardNode&&s._config){this._config=JSON.parse(JSON.stringify(s._config)),this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");return}}t&&alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".')}catch(o){console.error("Import from Lovelace error:",o),t&&alert("Помилка імпорту: "+o.message)}}_render(){var n;const t=this._config,i=t.appearance;this.shadowRoot.innerHTML=`
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
              <span class="panel-brand-badge">PRO APP v1.6.0</span>
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
    `,this._cardNode=this.shadowRoot.getElementById("stationCard"),this._editorNode=this.shadowRoot.getElementById("drawerCardEditor"),this._cardNode&&(this._cardNode.setConfig(this._config),this._hass&&(this._cardNode.hass=this._hass)),this._editorNode&&(this._editorNode.setConfig(this._config),this._hass&&(this._editorNode.hass=this._hass))}_bindEvents(){var a,s,l,d,c,_,u,m,h,y,v,w,p,g,f;const t=this.shadowRoot;(a=t.getElementById("btnOpenDrawer"))==null||a.addEventListener("click",()=>this._openDrawer()),(s=t.getElementById("btnCloseDrawer"))==null||s.addEventListener("click",()=>this._closeDrawer()),(l=t.getElementById("btnCancelDrawer"))==null||l.addEventListener("click",()=>this._closeDrawer()),(d=t.getElementById("drawerBackdrop"))==null||d.addEventListener("click",()=>this._closeDrawer()),(c=t.getElementById("btnSaveDrawer"))==null||c.addEventListener("click",()=>{this._updateCardConfig(),this._closeDrawer(),alert("✓ Налаштування збережено!")}),(_=this._editorNode)==null||_.addEventListener("config-changed",x=>{var $;const k=x.detail.config;k.appearance={...Q.appearance,...(($=this._config)==null?void 0:$.appearance)||{},...k.appearance||{}},this._config=k,this._cardNode&&this._cardNode.setConfig(this._config),this._saveConfig()}),(u=t.getElementById("btnZoomIn"))==null||u.addEventListener("click",()=>this._changeScale(this._scale+.1)),(m=t.getElementById("btnZoomOut"))==null||m.addEventListener("click",()=>this._changeScale(this._scale-.1)),(h=t.getElementById("btnFullscreen"))==null||h.addEventListener("click",()=>{var x,k,$;document.fullscreenElement?($=document.exitFullscreen)==null||$.call(document):(k=(x=document.documentElement).requestFullscreen)==null||k.call(x)}),(y=t.getElementById("btnQuickTheme"))==null||y.addEventListener("click",()=>{var S;const x=["cyber_dark","oled_black","clean_light"],k=((S=this._config.appearance)==null?void 0:S.theme_preset)||"cyber_dark",$=(x.indexOf(k)+1)%x.length,L=x[$];this._config.appearance.theme_preset=L,this._config.theme_mode=L==="clean_light"?"light":"dark",this._updateCardConfig();const T=t.getElementById("btnQuickTheme");T&&(T.innerText=L==="clean_light"?"☀️ Світла":L==="oled_black"?"⬛ OLED":"🌙 Темна")}),(v=t.getElementById("btnSyncFromLovelace"))==null||v.addEventListener("click",()=>{this._importFromLovelace(!0)});const i=t.getElementById("yamlModal"),n=t.getElementById("yamlCodeArea");(w=t.getElementById("btnOpenYamlModal"))==null||w.addEventListener("click",()=>{if(i&&n){try{n.value=bd(this._config)}catch{n.value=JSON.stringify(this._config,null,2)}i.classList.add("active")}}),(p=t.getElementById("btnCloseYamlModal"))==null||p.addEventListener("click",()=>{i==null||i.classList.remove("active")}),(g=t.getElementById("btnCopyCurrentYaml"))==null||g.addEventListener("click",()=>{var x;n&&((x=navigator.clipboard)==null||x.writeText(n.value),alert("✓ Скопійовано в буфер обміну!"))}),(f=t.getElementById("btnApplyYaml"))==null||f.addEventListener("click",()=>{var x;if(n&&n.value.trim())try{const k=n.value.trim();let $=null;k.startsWith("{")?$=JSON.parse(k):$=hl(k),$&&typeof $=="object"&&($.type&&delete $.type,$.appearance={...Q.appearance,...((x=this._config)==null?void 0:x.appearance)||{},...$.appearance||{}},this._config=$,this._saveConfig(),this._render(),this._bindEvents(),i==null||i.classList.remove("active"),alert("✓ Конфігурацію успішно застосовано!"))}catch(k){alert("Помилка формату YAML / JSON: "+k.message)}}),t.querySelectorAll("#mainFontGrid .font-tile").forEach(x=>{x.addEventListener("click",()=>{t.querySelectorAll("#mainFontGrid .font-tile").forEach(k=>k.classList.remove("active")),x.classList.add("active"),this._config.appearance.font_family=x.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#monoFontGrid .font-tile").forEach(x=>{x.addEventListener("click",()=>{t.querySelectorAll("#monoFontGrid .font-tile").forEach(k=>k.classList.remove("active")),x.classList.add("active"),this._config.appearance.mono_font_family=x.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(x=>{x.addEventListener("click",()=>{t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),x.classList.add("active"),this._config.appearance.power_font_size=x.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(x=>{x.addEventListener("click",()=>{t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),x.classList.add("active"),this._config.appearance.label_font_size=x.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#themePresetSeg .seg-btn").forEach(x=>{x.addEventListener("click",()=>{t.querySelectorAll("#themePresetSeg .seg-btn").forEach($=>$.classList.remove("active")),x.classList.add("active");const k=x.dataset.val;this._config.appearance.theme_preset=k,this._config.theme_mode=k==="clean_light"?"light":"dark",this._updateCardConfig()})});const o=t.getElementById("sliderCardScale"),r=t.getElementById("lblCardScale");o&&o.addEventListener("input",x=>{const k=parseFloat(x.target.value);r&&(r.innerText=`${Math.round(k*100)}%`),this._changeScale(k)})}_openDrawer(){var i,n;this._isDrawerOpen=!0;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.add("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.add("active")}_closeDrawer(){var i,n;this._isDrawerOpen=!1;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.remove("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.remove("active")}_changeScale(t){const i=Math.max(.65,Math.min(1.8,Math.round(t*100)/100));this._scale=i,this._config.card_scale=i;const n=this.shadowRoot.getElementById("txtZoomVal");n&&(n.innerText=`${Math.round(i*100)}%`),this._updateCardConfig()}_updateHaStatusBadge(){var i;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("haStatusText");if(t)if(this._hass){const n=Object.keys(this._hass.states||{}).length;t.innerText=`HA Live (${n} сенсорів)`}else t.innerText="Демо режим"}}console.info("%c⚡ Energy Station Card v1.6.1 Loaded ⚡","background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");const Fn={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",tariff_night_saved:"Нічна економія",tariff_net_benefit:"Чиста вигода",tariff_net_cost:"Чисті витрати",autarky_title:"Автономність",self_consumption_title:"Власне споживання",bat_delta:"Розбаланс",bat_remaining:"Залишок",edit_card:"Редагувати",kwh_unit:"кВт·год",view_toggle_to_2d:"Перемкнути на 2D Схему",view_toggle_to_3d:"Перемкнути на 3D Станцію",charging:"ЗАРЯД",discharging:"РОЗРЯД",battery_charging:"Заряджається",battery_discharging:"Розряджається",battery_idle:"Очікування",blackout_alert:"БЛЕКАУТ / ВІДКЛЮЧЕНО",grid_stable:"Живлення стабільне",solar:"Сонячні панелі",wind:"Вітрогенерація",grid:"Електромережа",battery:"Система накопичення (АКБ)",house:"Гарантоване навантаження",smart_boiler:"Розумний Бойлер (ГВП)"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",tariff_night_saved:"Night Savings",tariff_net_benefit:"Net Benefit",tariff_net_cost:"Net Cost",autarky_title:"Autarky",self_consumption_title:"Self-Consumption",bat_delta:"Cell Delta",bat_remaining:"Remaining",edit_card:"Edit",kwh_unit:"kWh",view_toggle_to_2d:"Switch to 2D Schematic",view_toggle_to_3d:"Switch to 3D Station",charging:"CHARGE",discharging:"DISCHARGE",battery_charging:"Charging",battery_discharging:"Discharging",battery_idle:"Idle",blackout_alert:"BLACKOUT / GRID DOWN",grid_stable:"Grid Stable",solar:"Solar Panels",wind:"Wind Generation",grid:"Power Grid",battery:"Battery Storage System",house:"Essential Load",smart_boiler:"Smart Boiler (DHW)"}};class Fo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null}connectedCallback(){if(this._setupResizeObserver(),typeof sessionStorage<"u"&&sessionStorage.getItem("energy_station_auto_edit")==="1"){try{sessionStorage.removeItem("energy_station_auto_edit")}catch{}setTimeout(()=>this._openCardEditor(),350)}}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}_openCardEditor(){var n,o;let t=this,i=null;for(;t;){if(t.tagName&&(t.tagName.toLowerCase()==="hui-card-options"||t.tagName.toLowerCase()==="hui-card-edit-mode")){i=t;break}if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(!i&&typeof document<"u"){const r=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const a of r)if(a.contains(this)||(n=a.shadowRoot)!=null&&n.contains(this)||r.length===1){i=a;break}}if(i){if(typeof i._editCard=="function"){i._editCard();return}const r=((o=i.shadowRoot)==null?void 0:o.querySelector("mwc-button, ha-button, button"))||i.querySelector("mwc-button, ha-button, button");if(r){r.click();return}if(i.path!==void 0){const a=new CustomEvent("ll-edit-card",{bubbles:!0,composed:!0,detail:{path:i.path}});i.dispatchEvent(a);return}}if(typeof window<"u"){try{typeof sessionStorage<"u"&&sessionStorage.setItem("energy_station_auto_edit","1")}catch{}const r=new URL(window.location.href);r.searchParams.has("edit")?setTimeout(()=>{var s,l;const a=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const d of a)if(d.contains(this)||(s=d.shadowRoot)!=null&&s.contains(this)||a.length===1){if(typeof d._editCard=="function"){d._editCard();return}const c=((l=d.shadowRoot)==null?void 0:l.querySelector("mwc-button, ha-button, button"))||d.querySelector("mwc-button, ha-button, button");if(c){c.click();return}}},500):(r.searchParams.set("edit","1"),window.location.href=r.toString())}}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(Q))}getCardSize(){return 6}setConfig(t){if(!t)throw new Error("Invalid configuration");const i=JSON.parse(JSON.stringify(t)),n=JSON.parse(JSON.stringify(Q));this._config=this._deepMerge(n,i);const o=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=o||this._config.theme_mode||"dark";const r=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=r||this._config.language||"uk";const a=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=a?parseFloat(a):this._config.card_scale||this._config.scale||1;const s=typeof localStorage<"u"?localStorage.getItem("energy_station_view_mode"):null;this._viewMode=s||this._config.view_mode||"3d",this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(t){return typeof requestAnimationFrame<"u"?requestAnimationFrame(t):setTimeout(t,0)}_changeScale(t){var r,a;let i=typeof t=="number"?t:this._scale+(t||.1);i=Math.max(.7,Math.min(2,Math.round(i*100)/100)),this._scale=i,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",i.toString());const n=(r=this.shadowRoot)==null?void 0:r.querySelector(".energy-station-container");n&&(n.style.setProperty("--es-card-scale",i.toString()),n.style.zoom=i.toString());const o=(a=this.shadowRoot)==null?void 0:a.getElementById("headerZoomVal");o&&(o.innerText=`${Math.round(i*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}_toggleViewMode(){if(this._viewMode=this._viewMode==="3d"?"2d":"3d",typeof localStorage<"u")try{localStorage.setItem("energy_station_view_mode",this._viewMode)}catch{}this._applyViewMode(),this._hass&&this._updateValues()}_applyViewMode(){var s,l,d,c,_;const t=this._viewMode==="3d",i=(s=this.shadowRoot)==null?void 0:s.getElementById("station3DContainer"),n=(l=this.shadowRoot)==null?void 0:l.getElementById("schematicView"),o=(d=this.shadowRoot)==null?void 0:d.getElementById("headerViewToggle"),r=(c=this.shadowRoot)==null?void 0:c.getElementById("energyFlowCanvas"),a=(_=this.shadowRoot)==null?void 0:_.getElementById("batBranchBadgesContainer");i&&(i.style.display=t?"block":"none"),n&&(n.style.display=t?"none":"block"),r&&(r.style.display=t?"none":"block"),a&&(a.style.display=t?"none":"block"),o&&(o.innerHTML=`<span>${t?"🧊 3D":"⚡ 2D"}</span>`,o.title=t?this._t("view_toggle_to_2d"):this._t("view_toggle_to_3d"))}set hass(t){this._hass=t,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(t,i){const n=Array.isArray(t)?[...t]:Object.assign({},t);if(!i||typeof i!="object")return n;for(const o of Object.keys(i)){const r=i[o],a=t?t[o]:void 0;r&&typeof r=="object"&&!Array.isArray(r)?n[o]=this._deepMerge(a||{},r):n[o]=r}return n}_getEntityState(t){var s;if(!this._hass||!t||!this._hass.states[t])return null;const i=this._hass.states[t],o=String(i.state).trim().replace(",","."),r=parseFloat(o),a=((s=i.attributes)==null?void 0:s.unit_of_measurement)||"";return{raw:i.state,val:isNaN(r)?0:r,unit:a,attributes:i.attributes}}_t(t){var n,o;const i=this._language||"uk";return((n=Fn[i])==null?void 0:n[t])||((o=Fn.uk)==null?void 0:o[t])||t}_toggleTheme(t){const i=t||(this._themeMode==="light"?"dark":"light");this._themeMode=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",i)}catch{}this._applyTheme()}_toggleLanguage(t){const i=t||(this._language==="en"?"uk":"en");this._language=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",i)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".energy-station-container");if(!t)return;const i=this._themeMode==="light";t.classList.toggle("theme-light",i);const n=this.shadowRoot.getElementById("headerThemeToggle");n&&(n.innerHTML=i?"☀️":"🌙",n.setAttribute("title",i?this._t("theme_dark"):this._t("theme_light")));const o=this.shadowRoot.getElementById("btnThemeDark"),r=this.shadowRoot.getElementById("btnThemeLight");o&&r&&(o.classList.toggle("active",!i),r.classList.toggle("active",i))}_formatPower(t,i=0){const n=this._language==="en"?"kW":"кВт";if(t==null){const a=(typeof i=="number"?i:0).toFixed(3);return{num:a,kw:i||0,str:a+" "+n,formatted:a+" "+n}}let o=typeof t=="number"?t:t&&typeof t.val=="number"?t.val:i;(typeof o!="number"||isNaN(o))&&(o=typeof i=="number"?i:0),t&&t.unit==="W"&&(o=o/1e3);const r=o.toFixed(3);return{num:r,kw:o,str:r+" "+n,formatted:r+" "+n}}_fireMoreInfo(t){if(!t)return;const i=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_renderCardSkeleton(){var l,d,c,_,u,m,h,y,v,w,p,g,f,x,k,$,L,T;const t=this._config||Q;this._initialized=!0;const i=t.appearance||Q.appearance||{},n={Inter:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif","JetBrains Mono":"'JetBrains Mono', monospace",Roboto:"'Roboto', sans-serif",Orbitron:"'Orbitron', sans-serif","Exo 2":"'Exo 2', sans-serif",Ubuntu:"'Ubuntu', sans-serif","system-ui":"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},o={"JetBrains Mono":"'JetBrains Mono', monospace","Roboto Mono":"'Roboto Mono', monospace",Orbitron:"'Orbitron', monospace","Fira Code":"'Fira Code', monospace","Share Tech Mono":"'Share Tech Mono', monospace"},r={compact:"18px",normal:"22px",large:"28px",huge:"34px"},a={compact:"10px",normal:"11.5px",large:"13.5px"},s={compact:"14px 18px",balanced:"22px 28px 24px 28px",spacious:"30px 36px"};this.shadowRoot.innerHTML=`
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
          --flow-speed: ${((l=t.animations)==null?void 0:l.speed)||1.2}s;
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
        ${ua()}
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
            <span class="es-header-badge">PRO FLOW v1.6.1</span>
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${xe.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((d=t.solar)==null?void 0:d.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${xe.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${xe.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(c=t.grid)!=null&&c.show_non_essential&&((_=t.grid)!=null&&_.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${xe.house_outline||xe.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(u=t.grid)!=null&&u.show_car&&((m=t.grid)!=null&&m.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${xe.car}</div>
              <div class="es-node-title" id="carTitle">${((h=t.grid)==null?void 0:h.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${xe.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((y=t.inverter)==null?void 0:y.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((v=t.aux)==null?void 0:v.type)==="none"||((w=t.aux)==null?void 0:w.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${xe[(p=t.aux)==null?void 0:p.type]||xe.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((g=t.aux)==null?void 0:g.type)==="microinverter"&&(!((f=t.aux)!=null&&f.title)||((x=t.aux)==null?void 0:x.title)==="Вітрогенератор")?this._t("aux_microinverter"):((k=t.aux)==null?void 0:k.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${(($=t.aux)==null?void 0:$.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((L=t.wind)==null?void 0:L.show)===!1&&((T=t.aux)==null?void 0:T.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${xe.house}</div>
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

          <!-- Bottom Grid Row: Spacer (left), Batteries (center), Quick Controls Dock (right) -->
          <div class="es-bottom-row">
            <div class="es-bottom-spacer"></div>
            <div class="es-battery-rack" id="batteryRackContainer"></div>
            <div class="es-bottom-controls-dock" id="bottomControlsDock"></div>
          </div>

        </div>
        </div>

        <!-- 3D HARDWARE VIEW -->
        ${_a(t,this._t.bind(this))}

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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),this._applyViewMode(),this._rAF(()=>this._updateFlowPaths())}_cacheDomNodes(){const t=this.shadowRoot;this._nodes={dailySolarYield:t.getElementById("dailySolarYield"),targetSolarYield:t.getElementById("targetSolarYield"),solarProgressBar:t.getElementById("solarProgressBar"),solarSavingsDaily:t.getElementById("solarSavingsDaily"),autarkyVal:t.getElementById("autarkyVal"),selfConsVal:t.getElementById("selfConsVal"),energyBalanceRow:t.getElementById("energyBalanceRow"),totalPvPowerBadge:t.getElementById("totalPvPowerBadge"),totalPvPowerVal:t.getElementById("totalPvPowerVal"),totalPvPercentBadge:t.getElementById("totalPvPercentBadge"),totalPvSubline:t.getElementById("totalPvSubline"),totalPvCapDetail:t.getElementById("totalPvCapDetail"),totalPvCapTotal:t.getElementById("totalPvCapTotal"),solarFlowCollector:t.getElementById("solarFlowCollector"),gridImportDaily:t.getElementById("gridImportDaily"),gridCostDailyRow:t.getElementById("gridCostDailyRow"),gridCostDailyVal:t.getElementById("gridCostDailyVal"),gridCostSplitVal:t.getElementById("gridCostSplitVal"),gridTariffBadge:t.getElementById("gridTariffBadge"),gridExportDaily:t.getElementById("gridExportDaily"),gridExportIncomeRow:t.getElementById("gridExportIncomeRow"),gridExportIncomeVal:t.getElementById("gridExportIncomeVal"),gridNightSavingsRow:t.getElementById("gridNightSavingsRow"),gridNightSavingsVal:t.getElementById("gridNightSavingsVal"),netBenefitDailyRow:t.getElementById("netBenefitDailyRow"),netBenefitDailyBadge:t.getElementById("netBenefitDailyBadge"),gridPowerVal:t.getElementById("gridPowerVal"),gridDirectionLabel:t.getElementById("gridDirectionLabel"),carPowerVal:t.getElementById("carPowerVal"),carNode:t.getElementById("carNode"),nonEssentialNode:t.getElementById("nonEssentialNode"),nonEssentialPowerVal:t.getElementById("nonEssentialPowerVal"),inverterAcTemp:t.getElementById("inverterAcTemp"),inverterDcTemp:t.getElementById("inverterDcTemp"),inverterModelTag:t.getElementById("inverterModelTag"),inverterPowerVal:t.getElementById("inverterPowerVal"),inverterStatusBadge:t.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:t.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:t.getElementById("inverterSelfConsumptionVal"),inverterVolt:t.getElementById("inverterVolt"),inverterCurrent:t.getElementById("inverterCurrent"),inverterFreq:t.getElementById("inverterFreq"),auxNode:t.getElementById("auxNode"),auxTitle:t.getElementById("auxTitle"),auxPowerVal:t.getElementById("auxPowerVal"),auxSubtitle:t.getElementById("auxSubtitle"),auxIconBox:t.getElementById("auxIconBox"),windStationContainer:t.getElementById("windStationContainer"),dailyHouseKwh:t.getElementById("dailyHouseKwh"),essentialPowerVal:t.getElementById("essentialPowerVal"),subloadsBusContainer:t.getElementById("subloadsBusContainer"),subloadsBusSvg:t.getElementById("subloadsBusSvg"),subloadsFlowCollector:t.getElementById("subloadsFlowCollector"),subloadsBusBase:t.getElementById("subloadsBusBase"),subloadsBusStemBase:t.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:t.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:t.getElementById("subloadsBusFeeders"),batChargeDaily:t.getElementById("batChargeDaily"),batDischargeDaily:t.getElementById("batDischargeDaily"),masterBatterySoc:t.getElementById("masterBatterySoc"),masterBatteryFlowHint:t.getElementById("masterBatteryFlowHint"),batVoltVal:t.getElementById("batVoltVal"),batCurrentVal:t.getElementById("batCurrentVal"),batMasterTempVal:t.getElementById("batMasterTempVal"),batMasterTempBadge:t.getElementById("batMasterTempBadge"),batReserveSoc:t.getElementById("batReserveSoc"),batReserveProgressBar:t.getElementById("batReserveProgressBar"),batCapacityVal:t.getElementById("batCapacityVal"),batteryFlowCollector:t.getElementById("batteryFlowCollector"),pvPanelsContainer:t.getElementById("pvPanelsContainer"),subloadsContainer:t.getElementById("subloadsContainer"),batteryRackContainer:t.getElementById("batteryRackContainer"),bottomControlsDock:t.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var l,d,c,_,u,m,h,y;const t=this._config||Q,i=((l=this._nodes)==null?void 0:l.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!i)return;if(i.innerHTML="",!(((d=t.wind)==null?void 0:d.show)!==!1||((c=t.aux)==null?void 0:c.type)==="wind")){i.classList.add("hidden");return}i.classList.remove("hidden");const o=((_=t.wind)==null?void 0:_.turbine_count)||((m=(u=t.wind)==null?void 0:u.turbines)==null?void 0:m.length)||2,r=((h=t.wind)==null?void 0:h.turbines)||[],a=document.createElement("div");a.className="es-wind-summary-bar es-mono",a.id="windStationSummaryBar",a.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,i.appendChild(a);const s=document.createElement("div");s.className="es-wind-pods-row",i.appendChild(s);for(let v=0;v<o;v++){const w=r[v]||{name:`Вітряк ${v+1}`,power_entity:`sensor.wind_turbine_${v+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((y=t.wind)==null?void 0:y.animation_threshold)||50},p=!!(w.daily_energy_entity||w.monthly_energy_entity),g=document.createElement("div");g.className="es-turbine-card glow-wind clickable-node",g.id=`turbineCard_${v+1}`,g.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${v+1}">
              ${xe.wind_turbine}
            </div>
            <span>${w.name||`Вітряк ${v+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${v+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${v+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${v+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${v+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${v+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${p?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${v+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${v+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,g.addEventListener("click",()=>{this._fireMoreInfo(w.power_entity)}),s.appendChild(g)}}_renderDynamicPvPanels(){var a,s,l,d,c,_;const t=this._config||Q,i=this._nodes.pvPanelsContainer;if(!i)return;i.innerHTML="";const n=((a=t.solar)==null?void 0:a.pv_count)||((l=(s=t.solar)==null?void 0:s.strings)==null?void 0:l.length)||3,o=this._language==="en"?"kWp":"кВтп",r=((d=t.solar)==null?void 0:d.show_metrics)!==!1;for(let u=1;u<=n;u++){const m=u<10?`0${u}`:`${u}`,h=((_=(c=t.solar)==null?void 0:c.strings)==null?void 0:_[u-1])||{},y=h.name||`PV ${m}`,v=h.capacity_kw!==void 0?parseFloat(h.capacity_kw):4,w=h.voltage_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_voltage`:""),p=h.current_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_current`:""),g=document.createElement("div");g.className="es-pv-panel glow-solar clickable-node",g.dataset.pvIndex=u,g.id=`pvPanel_${u}`,g.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${xe.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${y}</span>
        <span class="es-pv-val es-mono" id="pvVal_${u}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${u}" style="${r?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${u}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${u}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${u}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${u}">${v.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${o}</span> <span id="pvPercent_${u}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,g.addEventListener("click",()=>{var $;const k=h.power_entity||w||p||(($=t.solar)==null?void 0:$.total_power_entity);this._fireMoreInfo(k)});const f=g.querySelector(`#pvVolt_${u}`);f&&f.addEventListener("click",k=>{k.stopPropagation(),w?this._fireMoreInfo(w):h.power_entity&&this._fireMoreInfo(h.power_entity)});const x=g.querySelector(`#pvCurr_${u}`);x&&x.addEventListener("click",k=>{k.stopPropagation(),p?this._fireMoreInfo(p):h.power_entity&&this._fireMoreInfo(h.power_entity)}),i.appendChild(g)}}_renderDynamicSubloads(){var o;const t=this._config||Q,i=this._nodes.subloadsContainer;if(!i)return;i.innerHTML="",(((o=t.load)==null?void 0:o.subloads)||[]).forEach((r,a)=>{const s=document.createElement("div");s.className="es-subload-card clickable-node",s.id=`subloadCard_${a}`,s.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${xe[r.icon]||xe.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${a}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,s.addEventListener("click",()=>{this._fireMoreInfo(r.entity)}),i.appendChild(s)})}_renderDynamicBatteryRack(){var _,u,m,h,y,v,w;const t=this._config||Q,i=this._nodes.batteryRackContainer;if(!i)return;i.innerHTML="";const n=((_=t.battery)==null?void 0:_.parallel_batteries)||((m=(u=t.battery)==null?void 0:u.modules)==null?void 0:m.length)||2,o=[82,76,91,68,85,90,72,80],r=[52.4,52.4,52.4,52.4,52.4,52.4],a=[25,21,22.5,20,24,19.5,23,21.5],s=[12,8,15,9,14,11,18,10],l=this._t("bat_prefix"),d=this._language==="en"?"kW":"кВт",c=this._language==="en"?"kWh":"кВт·год";for(let p=1;p<=n;p++){const g=((y=(h=t.battery)==null?void 0:h.modules)==null?void 0:y[p-1])||((w=(v=t.battery)==null?void 0:v.module_entities)==null?void 0:w[p-1])||{},f=g.name||`${l} ${p}`,x=o[(p-1)%o.length],k=r[(p-1)%r.length],$=a[(p-1)%a.length],L=s[(p-1)%s.length],T=document.createElement("div");T.className="es-battery-pack-card glow-battery clickable-node",T.id=`batPackCard_${p}`,T.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${xe.battery_vertical}</div>
        <span class="es-bat-name">${f}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${p}">${x}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${p}">${k.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${p}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${d}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${p}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${p}">${$.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${p}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${p}">${L} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${p}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${c}</div>
      `,T.addEventListener("click",S=>{var ie;if(S.target.closest(`#batPackTemp_${p}`)){const Z=g.temperature_entity||g.temp||`sensor.bms_rack${p}_temperature`;this._fireMoreInfo(Z);return}if(S.target.closest(`#batPackDelta_${p}`)){const Z=g.cell_delta_entity||g.delta_entity||`sensor.bms_rack${p}_cell_delta`;this._fireMoreInfo(Z);return}const O=g.soc_entity||g.soc||g.voltage_entity||g.volt||g.current_entity||((ie=t.battery)==null?void 0:ie.soc_entity);this._fireMoreInfo(O)}),i.appendChild(T)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var y,v,w,p,g,f,x,k,$,L;const t=this._config||Q,i=((y=this._nodes)==null?void 0:y.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!i||(i.innerHTML="",t.show_quick_settings===!1))return;const n=this._themeMode==="light",o=this._language==="en",r=((v=t.controls)==null?void 0:v.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",a=((w=t.controls)==null?void 0:w.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",s=((p=t.controls)==null?void 0:p.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",l=document.createElement("div");l.className="es-quick-settings-card",l.id="quickSettingsCard",l.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${xe.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n?xe.sun_mode:xe.moon}</span>
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
              <span class="es-ctrl-icon es-ctrl-solar">${xe.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${xe.inverter}</span>
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
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${xe.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(g=l.querySelector("#btnEditCardQs"))==null||g.addEventListener("click",T=>{T.stopPropagation(),this._openCardEditor()}),(f=l.querySelector("#btnThemeToggle"))==null||f.addEventListener("click",T=>{T.stopPropagation(),this._toggleTheme()}),(x=l.querySelector("#btnLangToggle"))==null||x.addEventListener("click",T=>{T.stopPropagation(),this._toggleLanguage()}),(k=l.querySelector("#ctrlLabelWrapSolar"))==null||k.addEventListener("click",()=>this._fireMoreInfo(r)),($=l.querySelector("#ctrlLabelWrapSell"))==null||$.addEventListener("click",()=>this._fireMoreInfo(a)),(L=l.querySelector("#ctrlLabelWrapGrid"))==null||L.addEventListener("click",()=>this._fireMoreInfo(s));const d=l.querySelector("#ctrlSliderSolar"),c=l.querySelector("#ctrlValSolar");d&&(this._updateSliderGradient(d),d.addEventListener("input",T=>{c&&(c.innerText=`${T.target.value} A`),this._updateSliderGradient(d)}),d.addEventListener("change",T=>{this._setNumberValue(r,T.target.value)}));const _=l.querySelector("#ctrlSliderSell"),u=l.querySelector("#ctrlValSell");_&&(this._updateSliderGradient(_),_.addEventListener("input",T=>{const S=Number(T.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");u&&(u.innerText=`${S} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(_)}),_.addEventListener("change",T=>{this._setNumberValue(a,T.target.value)}));const m=l.querySelector("#ctrlSliderGrid"),h=l.querySelector("#ctrlValGrid");m&&(this._updateSliderGradient(m),m.addEventListener("input",T=>{h&&(h.innerText=`${T.target.value} A`),this._updateSliderGradient(m)}),m.addEventListener("change",T=>{this._setNumberValue(s,T.target.value)})),i.appendChild(l),this._updateControlSliders()}_updateSliderGradient(t){if(!t)return;const i=parseFloat(t.min)||0,n=parseFloat(t.max)||100,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(100,(o-i)/(n-i)*100));t.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(t,i){if(!this._hass||!t)return;const o=t.split(".")[0]||"number",r=Number(i);this._hass.callService(o,"set_value",{entity_id:t,value:r})}_updateControlSliders(){var u,m,h,y,v,w,p,g,f;const t=this._config||Q;if(t.show_quick_settings===!1)return;const i=this.shadowRoot;if(!i)return;const n=((u=t.controls)==null?void 0:u.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",o=((m=t.controls)==null?void 0:m.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",r=((h=t.controls)==null?void 0:h.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",a=i.getElementById("ctrlSliderSolar"),s=i.getElementById("ctrlValSolar"),l=i.getElementById("ctrlSliderSell"),d=i.getElementById("ctrlValSell"),c=i.getElementById("ctrlSliderGrid"),_=i.getElementById("ctrlValGrid");if(a&&(!a.matches||!a.matches(":active"))){const x=(v=(y=this._hass)==null?void 0:y.states)==null?void 0:v[n],k=x&&!isNaN(parseFloat(x.state))?parseFloat(x.state):a.value?parseFloat(a.value):80;a.value=k,s&&(s.innerText=`${Math.round(k)} A`),this._updateSliderGradient(a)}if(l&&(!l.matches||!l.matches(":active"))){const x=(p=(w=this._hass)==null?void 0:w.states)==null?void 0:p[o],k=x&&!isNaN(parseFloat(x.state))?parseFloat(x.state):l.value?parseFloat(l.value):5e3;l.value=k;const $=Math.round(k).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),L=this._language==="uk"?"Вт":"W";d&&(d.innerText=`${$} ${L}`),this._updateSliderGradient(l)}if(c&&(!c.matches||!c.matches(":active"))){const x=(f=(g=this._hass)==null?void 0:g.states)==null?void 0:f[r],k=x&&!isNaN(parseFloat(x.state))?parseFloat(x.state):c.value?parseFloat(c.value):70;c.value=k,_&&(_.innerText=`${Math.round(k)} A`),this._updateSliderGradient(c)}}_bindInteractions(){var n,o,r,a,s,l,d,c,_,u,m,h,y,v,w,p,g,f,x,k,$,L,T;const t=this.shadowRoot,i=this._config||Q;(n=t.getElementById("headerEditCard"))==null||n.addEventListener("click",S=>{S.stopPropagation(),this._openCardEditor()}),(o=t.getElementById("headerViewToggle"))==null||o.addEventListener("click",S=>{S.stopPropagation(),this._toggleViewMode()}),(r=t.getElementById("headerThemeToggle"))==null||r.addEventListener("click",S=>{S.stopPropagation(),this._toggleTheme()}),(a=t.getElementById("headerLangToggle"))==null||a.addEventListener("click",S=>{S.stopPropagation(),this._toggleLanguage()}),(s=t.getElementById("headerZoomIn"))==null||s.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(this._scale+.1)}),(l=t.getElementById("headerZoomOut"))==null||l.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(this._scale-.1)}),(d=t.getElementById("headerZoomVal"))==null||d.addEventListener("click",S=>{S.stopPropagation(),this._changeScale(1)}),(c=t.getElementById("solarHeaderNode"))==null||c.addEventListener("click",()=>{var S,O;this._fireMoreInfo(((S=i.solar)==null?void 0:S.daily_yield_entity)||((O=i.solar)==null?void 0:O.total_power_entity))}),(_=t.getElementById("totalPvPowerBadge"))==null||_.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.solar)==null?void 0:S.total_power_entity)}),(u=t.getElementById("gridNode"))==null||u.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.power_entity)}),(m=t.getElementById("nonEssentialNode"))==null||m.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.non_essential_power_entity)}),(h=t.getElementById("carNode"))==null||h.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.grid)==null?void 0:S.car_power_entity)}),(y=t.getElementById("inverterNode"))==null||y.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.inverter)==null?void 0:S.power_entity)}),(v=t.getElementById("inverterSelfConsumptionBox"))==null||v.addEventListener("click",S=>{var O;S.stopPropagation(),(O=i.inverter)!=null&&O.self_consumption_entity&&this._fireMoreInfo(i.inverter.self_consumption_entity)}),(w=t.getElementById("auxNode"))==null||w.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.aux)==null?void 0:S.power_entity)}),(p=t.getElementById("essentialNode"))==null||p.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.load)==null?void 0:S.essential_power_entity)}),(g=t.getElementById("masterBatteryHub"))==null||g.addEventListener("click",()=>{var S;this._fireMoreInfo((S=i.battery)==null?void 0:S.soc_entity)}),(f=t.getElementById("batChargeDaily"))==null||f.addEventListener("click",S=>{var O;S.stopPropagation(),this._fireMoreInfo(((O=i.battery)==null?void 0:O.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(x=t.getElementById("batDischargeDaily"))==null||x.addEventListener("click",S=>{var O;S.stopPropagation(),this._fireMoreInfo(((O=i.battery)==null?void 0:O.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let S=1;S<=8;S++){const O=t.getElementById(`batBranchBadge_${S}`),ie=(($=(k=i.battery)==null?void 0:k.modules)==null?void 0:$[S-1])||((T=(L=i.battery)==null?void 0:L.module_entities)==null?void 0:T[S-1])||{};O==null||O.addEventListener("click",()=>{var q;const Z=ie.power_entity||ie.current_entity||ie.soc_entity||((q=i.battery)==null?void 0:q.soc_entity);this._fireMoreInfo(Z)})}}_fetchNightEndFromHa(t,i){var l,d;if(this._fetchingHistoryForDate===t)return;const o=(l=(this._config||Q).grid)==null?void 0:l.import_daily_entity;if(!((d=this._hass)!=null&&d.callWS)||!o)return;this._fetchingHistoryForDate=t;const r=new Date,a=new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0),s=new Date(r.getFullYear(),r.getMonth(),r.getDate(),i,5,0);this._hass.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:s.toISOString(),entity_ids:[o],no_attributes:!0}).then(c=>{const _=c==null?void 0:c[o];if(_&&_.length>0){let u=null;for(let m=_.length-1;m>=0;m--){const h=parseFloat(_[m].state);if(!isNaN(h)&&h>=0){u=h;break}}if(u!==null){const m=`es_tariff_split_${t}`;let h={};if(typeof localStorage<"u")try{const y=localStorage.getItem(m);y&&(h=JSON.parse(y))}catch{}if(h.night_end=u,h.night_end_hour=i,h.night_end_verified=!0,typeof localStorage<"u")try{localStorage.setItem(m,JSON.stringify(h))}catch{}this._hass&&this._updateValues()}}}).catch(c=>{console.warn("Could not fetch night tariff history from HA:",c)})}_calculateTariffs(t,i,n,o=0){var f,x,k,$,L,T,S,O,ie,Z,q,E,I,B,C,A,K,ee,te,pe,ke;const a=(this._config||Q).tariffs||{};if(a.enabled===!1){(f=this._nodes)!=null&&f.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(x=this._nodes)!=null&&x.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(k=this._nodes)!=null&&k.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),($=this._nodes)!=null&&$.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none"),(L=this._nodes)!=null&&L.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),(T=this._nodes)!=null&&T.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none");return}const s=a.currency||"грн",l=typeof a.day_rate=="number"?a.day_rate:4.32,d=typeof a.night_rate=="number"?a.night_rate:2.16,c=typeof a.export_rate=="number"?a.export_rate:5.3,_=typeof a.night_start_hour=="number"?a.night_start_hour:23,u=typeof a.night_end_hour=="number"?a.night_end_hour:7,m=new Date,h=m.getHours()+m.getMinutes()/60,y=_>u?h>=_||h<u:h>=_&&h<u;if((S=this._nodes)!=null&&S.gridTariffBadge&&a.show_active_badge!==!1){const j=y?d:l,U=y?this._t("tariff_night"):this._t("tariff_day"),M=y?"🌙":"☀️",le=y?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",ne=y?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",ye=y?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=le,this._nodes.gridTariffBadge.style.border=`1px solid ${ne}`,this._nodes.gridTariffBadge.style.color=ye,this._nodes.gridTariffBadge.innerText=`${M} ${U}: ${j.toFixed(2)} ${s}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(O=this._nodes)!=null&&O.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((ie=this._nodes)!=null&&ie.solarSavingsDaily&&a.show_solar_savings!==!1&&n>0){const j=n*l;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${j.toFixed(2)} ${s}`,this._nodes.solarSavingsDaily.style.display="block"}else(Z=this._nodes)!=null&&Z.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((q=this._nodes)!=null&&q.gridExportIncomeRow&&a.show_export_income!==!1&&typeof i=="number"&&i>0){const j=i*c;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${j.toFixed(2)} ${s}`),this._nodes.gridExportIncomeRow.style.display="block"}else(E=this._nodes)!=null&&E.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof t!="number"||isNaN(t)||t<0){(I=this._nodes)!=null&&I.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(B=this._nodes)!=null&&B.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),(C=this._nodes)!=null&&C.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none");return}let v=null,w=null;if(a.import_night_entity||a.import_day_entity){const j=a.import_night_entity?this._getEntityState(a.import_night_entity):null,U=a.import_day_entity?this._getEntityState(a.import_day_entity):null;j&&typeof j.val=="number"&&(v=j.val),U&&typeof U.val=="number"&&(w=U.val),v!==null&&w===null?w=Math.max(0,t-v):w!==null&&v===null&&(v=Math.max(0,t-w))}if(v===null||w===null){const j=`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`,U=`es_tariff_split_${j}`;let M={};if(typeof localStorage<"u")try{const le=localStorage.getItem(U);le&&(M=JSON.parse(le))}catch{}if(h<u){if(v=t,w=0,M.ongoing_night_val=t,M.ongoing_night_hour=h,M.night_end=t,M.night_end_hour=h,M.night_end_verified=!1,typeof localStorage<"u")try{localStorage.setItem(U,JSON.stringify(M))}catch{}}else if(h>=u&&h<_){const le=M.night_end_verified===!0,ne=typeof M.night_end_hour=="number"&&M.night_end_hour>=u-.25;if((le||ne)&&typeof M.night_end=="number"&&M.night_end<=t)v=M.night_end,w=Math.max(0,t-v);else{this._fetchNightEndFromHa(j,u);let ye=t*Math.min(1,u/Math.max(h,1));typeof o=="number"&&o>.5&&(ye=Math.min(t,Math.max(ye,o))),v=ye,w=Math.max(0,t-v)}if(M.day_end=t,typeof localStorage<"u")try{localStorage.setItem(U,JSON.stringify(M))}catch{}}else{const le=typeof M.night_end=="number"&&M.night_end_verified?M.night_end:t*(u/h),ne=typeof M.day_end=="number"?M.day_end:t;w=Math.max(0,ne-le);const ye=Math.max(0,t-ne);v=le+ye}}const p=v*d+w*l;(A=this._nodes)!=null&&A.gridCostDailyRow&&a.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${p.toFixed(2)} ${s}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${v.toFixed(1)} + ☀️ ${w.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(K=this._nodes)!=null&&K.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");const g=v>0&&l>d?v*(l-d):0;if((ee=this._nodes)!=null&&ee.gridNightSavingsRow&&a.show_night_savings!==!1&&g>.05?(this._nodes.gridNightSavingsVal&&(this._nodes.gridNightSavingsVal.innerText=`🌙 ${this._t("tariff_night_saved")}: ~${g.toFixed(2)} ${s}`),this._nodes.gridNightSavingsRow.style.display="block"):(te=this._nodes)!=null&&te.gridNightSavingsRow&&(this._nodes.gridNightSavingsRow.style.display="none"),(pe=this._nodes)!=null&&pe.netBenefitDailyRow&&a.show_net_benefit!==!1){const j=typeof n=="number"&&n>0?n*l:0,U=typeof i=="number"&&i>0?i*c:0,M=j+U-p;this._nodes.netBenefitDailyBadge&&(M>=0?(this._nodes.netBenefitDailyBadge.style.background="rgba(16, 185, 129, 0.15)",this._nodes.netBenefitDailyBadge.style.border="1px solid rgba(16, 185, 129, 0.35)",this._nodes.netBenefitDailyBadge.style.color="#34d399",this._nodes.netBenefitDailyBadge.innerText=`💰 ${this._t("tariff_net_benefit")}: +${M.toFixed(2)} ${s}`):(this._nodes.netBenefitDailyBadge.style.background="rgba(56, 189, 248, 0.12)",this._nodes.netBenefitDailyBadge.style.border="1px solid rgba(56, 189, 248, 0.3)",this._nodes.netBenefitDailyBadge.style.color="#38bdf8",this._nodes.netBenefitDailyBadge.innerText=`💰 ${this._t("tariff_net_cost")}: ${M.toFixed(2)} ${s}`)),this._nodes.netBenefitDailyRow.style.display="block"}else(ke=this._nodes)!=null&&ke.netBenefitDailyRow&&(this._nodes.netBenefitDailyRow.style.display="none")}_updateValues(){var Je,gt,ht,ut,_t,Ht,jt,Ut,Yt,Kt,Ii,Ni,Ai,Li,Pi,Di,Ri,Fi,Mi,Oi,Vi,zi,Wi,Gi,qi,Hi,ji,Ui,Yi,Ki,Ji,Mo,Oo,Vo,zo,Wo,Go,qo,Ho,jo,Uo,Yo,Ko,Jo,Qo,Xo,Zo,er,tr,ir,nr,or,rr,ar,sr,lr,dr,cr,pr,fr,gr,hr,ur,_r,yr,br,mr,vr,xr,wr,kr,Sr,Er,Cr,Tr,$r,Br,Ir,Nr,Ar,Lr,Pr,Dr,Rr,Fr,Mr,Or,Vr,zr,Wr,Gr,qr,Hr,jr,Ur,Yr,Kr,Jr,Qr,Xr,Zr,ea,ta,ia,na,oa,ra,aa,sa,la,da;if(!this._nodes.dailySolarYield)return;const t=this._config||Q,i=this._language==="en"?"kW":"кВт",n=((Je=t.solar)==null?void 0:Je.pv_count)||((ht=(gt=t.solar)==null?void 0:gt.strings)==null?void 0:ht.length)||3;let o=0,r=0,a=!1;for(let b=1;b<=n;b++){const R=(_t=(ut=t.solar)==null?void 0:ut.strings)==null?void 0:_t[b-1],P=(R==null?void 0:R.voltage_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_voltage`:""),Y=(R==null?void 0:R.current_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_current`:""),N=(R==null?void 0:R.power_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_power`:"");if(this._getEntityState(N)||this._getEntityState(P)||this._getEntityState(Y)){a=!0;break}}for(let b=1;b<=n;b++){const R=this.shadowRoot.getElementById(`pvVal_${b}`),P=this.shadowRoot.getElementById(`pvVolt_${b}`),Y=this.shadowRoot.getElementById(`pvCurr_${b}`),N=(jt=(Ht=t.solar)==null?void 0:Ht.strings)==null?void 0:jt[b-1],Be=(N==null?void 0:N.voltage_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_voltage`:""),se=(N==null?void 0:N.current_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_current`:""),Ce=(N==null?void 0:N.power_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_power`:""),me=this._getEntityState(Be),Ge=this._getEntityState(se),ge=this._getEntityState(Ce);let Ie=0,Me=0,ue=0;ge?ue=this._formatPower(ge).kw:me&&Ge?ue=me.val*Ge.val/1e3:me?ue=0:ue=a?0:4,me?Ie=me.val:Ie=a?0:380+b*4.5,Ge?Me=Ge.val:ge&&Ie>0?Me=ue*1e3/Ie:Me=a?0:3.12+b*.28,o+=ue,r+=Me,R&&(R.innerText=`${ue.toFixed(3)} ${i}`),P&&(P.innerText=`${Ie.toFixed(1)} V`),Y&&(Y.innerText=`${Me.toFixed(2)} A`);const _e=this.shadowRoot.getElementById(`pvMetrics_${b}`);if(_e){const Zt=((Ut=t.solar)==null?void 0:Ut.show_metrics)!==!1,ei=!!(me||Ge||!a||N!=null&&N.voltage_entity||N!=null&&N.current_entity||Ie>0||Me>0);_e.style.display=Zt&&ei?"flex":"none"}const et=(N==null?void 0:N.capacity_kw)!==void 0?parseFloat(N.capacity_kw):(N==null?void 0:N.installed_power)!==void 0?parseFloat(N.installed_power):a?0:4,Jt=et>0&&ue>0?Math.min(100,Math.round(ue/et*100)):0,ci=this.shadowRoot.getElementById(`pvCapVal_${b}`),Qt=this.shadowRoot.getElementById(`pvPercent_${b}`),Xt=this.shadowRoot.getElementById(`pvCap_${b}`);ci&&(et>0?(ci.innerText=et.toFixed(1).replace(".",","),Qt&&(Qt.innerText=`(${Jt}%)`,Qt.style.color=Jt>=70?"#34d399":Jt>=30?"#fbbf24":"#94a3b8"),Xt&&(Xt.style.display="flex")):Xt&&(Xt.style.display="none"))}const s=this._getEntityState((Yt=t.solar)==null?void 0:Yt.total_power_entity);let l=0;s?l=this._formatPower(s).kw:l=o;let d=((Kt=t.solar)==null?void 0:Kt.installed_power)!==void 0?parseFloat(t.solar.installed_power):0;if(isNaN(d)||d<=0){let b=0;for(let R=0;R<n;R++){const P=(Ni=(Ii=t.solar)==null?void 0:Ii.strings)==null?void 0:Ni[R],Y=(P==null?void 0:P.capacity_kw)!==void 0?parseFloat(P.capacity_kw):(P==null?void 0:P.installed_power)!==void 0?parseFloat(P.installed_power):0;!isNaN(Y)&&Y>0&&(b+=Y)}d=b>0?b:a?0:12}const c=d>0?l/d*100:0,_=Math.min(100,Math.max(0,c)),u=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${r.toFixed(2)} A`:`Сумарний струм СЕС: ${r.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(d>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(_)}%`,this._nodes.totalPvPercentBadge.style.color=_>=70?"#34d399":_>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=_>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(d>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${_.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=_>=70?"#34d399":_>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${d.toFixed(1).replace(".",",")} ${u})`)):r>0&&((Ai=t.solar)==null?void 0:Ai.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${r.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const m=this._getEntityState((Li=t.solar)==null?void 0:Li.daily_yield_entity),h=m?m.val:a?0:48.6;this._nodes.dailySolarYield.innerText=h.toFixed(1);const y=((Pi=t.solar)==null?void 0:Pi.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=y.toFixed(1);const v=Math.min(100,Math.round(h/y*100));this._nodes.solarProgressBar.style.width=`${v}%`;const w=this._getEntityState((Di=t.inverter)==null?void 0:Di.power_entity);this._nodes.inverterPowerVal&&((Ri=t.inverter)!=null&&Ri.power_entity&&w?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(w,0).str):this._nodes.inverterPowerVal.style.display="none");const p=this._getEntityState((Fi=t.inverter)==null?void 0:Fi.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=p?p.val.toFixed(2):"41,20";const g=this._getEntityState((Mi=t.inverter)==null?void 0:Mi.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=g?g.val.toFixed(2):"38,40";const f=this._getEntityState((Oi=t.inverter)==null?void 0:Oi.voltage_entity);this._nodes.inverterVolt.innerText=f?f.val.toFixed(2):"231,45";const x=this._getEntityState((Vi=t.inverter)==null?void 0:Vi.current_entity);this._nodes.inverterCurrent.innerText=x?x.val.toFixed(2):"8,60";const k=this._getEntityState((zi=t.inverter)==null?void 0:zi.frequency_entity);this._nodes.inverterFreq.innerText=k?k.val.toFixed(2):"50,01";const $=((Wi=t.wind)==null?void 0:Wi.show)!==!1||((Gi=t.aux)==null?void 0:Gi.type)==="wind",L=this.shadowRoot.getElementById("windStationContainer"),T=this._nodes.auxNode;let S=0;if(L)if(!$)L.classList.add("hidden");else{L.classList.remove("hidden");const b=((qi=t.wind)==null?void 0:qi.turbine_count)||((ji=(Hi=t.wind)==null?void 0:Hi.turbines)==null?void 0:ji.length)||2,R=((Ui=t.wind)==null?void 0:Ui.turbines)||[];let P=0,Y=0,N=!1,Be=!1;for(let ge=0;ge<b;ge++){const Ie=R[ge]||{power_entity:`sensor.wind_turbine_${ge+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((Yi=t.wind)==null?void 0:Yi.animation_threshold)||50},Me=this.shadowRoot.getElementById(`turbinePower_${ge+1}`),ue=this.shadowRoot.getElementById(`turbineStatus_${ge+1}`),_e=this.shadowRoot.getElementById(`turbineIcon_${ge+1}`),et=this.shadowRoot.getElementById(`turbineCard_${ge+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${ge+1}`);const Jt=this.shadowRoot.getElementById(`turbineDailyVal_${ge+1}`),ci=this.shadowRoot.getElementById(`turbineMonthlyVal_${ge+1}`),Qt=this.shadowRoot.getElementById(`turbineEnergyFooter_${ge+1}`),Xt=this._hass?0:ge===0?1.56:.22,Zt=this._getEntityState(Ie.power_entity),ei=this._formatPower(Zt,Xt);Me&&(Me.innerText=ei.str),S+=ei.kw;let pi=ei.kw*1e3;Zt&&Zt.unit==="W"&&(pi=Zt.val);const Ei=Ie.animation_threshold??((Ki=t.wind)==null?void 0:Ki.animation_threshold)??50,Dt=_e==null?void 0:_e.querySelector(".turbine-rotor"),Ci=Ie.rpm_entity||Ie.speed_entity||((Ji=t.wind)==null?void 0:Ji.rpm_entity)||((Mo=t.wind)==null?void 0:Mo.speed_entity)||(ge===0?"sensor.wind_rpm":"");let ve=Ci&&((Oo=this._hass)!=null&&Oo.states[Ci])?this._getEntityState(Ci):null;if(!ve&&ge===0&&((Vo=this._hass)!=null&&Vo.states["sensor.wind_rpm"])&&(ve=this._getEntityState("sensor.wind_rpm")),pi>=Ei||ve&&typeof ve.val=="number"&&ve.val>0){Dt&&Dt.classList.add("spinning"),et&&(et.classList.add("glow-wind"),et.style.borderColor="rgba(6, 182, 212, 0.55)");const $t=((zo=t.wind)==null?void 0:zo.max_power)||3e3,dn=((Wo=t.wind)==null?void 0:Wo.max_rpm)||600;let Qi=0;ve&&typeof ve.val=="number"&&ve.val>0?Qi=Math.min(1,Math.max(0,ve.val/dn)):Qi=Math.min(1,Math.max(0,(pi-Ei)/($t-Ei)));const qe=(3.2-Qi*2.75).toFixed(2);Dt&&Dt.style.setProperty("--turbine-speed",`${qe}s`),ue&&(ue.innerText=this._t("wind_gen"),ue.style.color="#67e8f9")}else Dt&&Dt.classList.remove("spinning"),et&&(et.classList.remove("glow-wind"),et.style.borderColor="rgba(255, 255, 255, 0.08)"),ue&&(ue.innerText=this._t("wind_calm"),ue.style.color="#94a3b8");const gi=this.shadowRoot.getElementById(`turbineRpmBox_${ge+1}`);if(gi)if(ve&&ve.raw!=="unavailable"&&ve.raw!=="unknown"&&typeof ve.val=="number"&&!isNaN(ve.val)){gi.style.display="inline";const dn=ve.unit?ve.unit:"RPM";gi.innerHTML=`<span id="turbineRpmVal_${ge+1}">${Math.round(ve.val)}</span> ${dn}`}else gi.style.display="none";const Qe=this._getEntityState(Ie.daily_energy_entity),Ct=this._getEntityState(Ie.monthly_energy_entity);Jt&&(Jt.innerText=Qe&&typeof Qe.val=="number"&&!isNaN(Qe.val)?Qe.val.toFixed(2):"0.00"),ci&&(ci.innerText=Ct&&typeof Ct.val=="number"&&!isNaN(Ct.val)?Ct.val.toFixed(1):"0.0");const Tt=!!(Ie.daily_energy_entity||Ie.monthly_energy_entity);Qt&&(Qt.style.display=Tt?"flex":"none"),Qe&&typeof Qe.val=="number"&&!isNaN(Qe.val)&&(P+=Qe.val,N=!0),Ct&&typeof Ct.val=="number"&&!isNaN(Ct.val)&&(Y+=Ct.val,Be=!0)}const se=this.shadowRoot.getElementById("windTotalDailyVal"),Ce=this.shadowRoot.getElementById("windTotalMonthlyVal"),me=this._getEntityState((Go=t.wind)==null?void 0:Go.daily_energy_entity),Ge=this._getEntityState((qo=t.wind)==null?void 0:qo.monthly_energy_entity);se&&(me&&typeof me.val=="number"&&!isNaN(me.val)?se.innerText=me.val.toFixed(2):N?se.innerText=P.toFixed(2):se.innerText="0.00"),Ce&&(Ge&&typeof Ge.val=="number"&&!isNaN(Ge.val)?Ce.innerText=Ge.val.toFixed(1):Be?Ce.innerText=Y.toFixed(1):Ce.innerText="0.0")}let O=0;if(T)if(((Ho=t.aux)==null?void 0:Ho.type)==="none"||((jo=t.aux)==null?void 0:jo.type)==="wind")T.classList.add("hidden");else{T.classList.remove("hidden");const b=this._getEntityState((Uo=t.aux)==null?void 0:Uo.power_entity),R=this._hass?0:2,P=this._formatPower(b,R);O=P.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=P.str);const Y={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let N=(Yo=t.aux)==null?void 0:Yo.title;((Ko=t.aux)==null?void 0:Ko.type)==="microinverter"&&(!N||N==="Вітрогенератор")?N="Мікроінвертор":(Jo=t.aux)!=null&&Jo.type&&Y[t.aux.type]&&(!N||N==="Вітрогенератор")?N=Y[t.aux.type]:N||(N="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=N),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=xe[(Qo=t.aux)==null?void 0:Qo.type]||xe.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Xo=t.aux)==null?void 0:Xo.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),T.style.borderColor="rgba(192, 132, 252, 0.45)",T.style.background="rgba(88, 28, 135, 0.35)",T.classList.remove("glow-wind"),T.classList.add("glow-aux")}const ie=this.shadowRoot.getElementById("nonEssentialNode"),Z=!!((Zo=t.grid)!=null&&Zo.show_non_essential&&((er=t.grid)!=null&&er.non_essential_power_entity))||((tr=t.grid)==null?void 0:tr.show_non_essential)!==!1&&!!((ir=t.grid)!=null&&ir.non_essential_power_entity);let q=0;if(ie)if(Z){ie.classList.remove("hidden");const b=this._getEntityState(t.grid.non_essential_power_entity),R=this._formatPower(b,0);q=R.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=R.str)}else ie.classList.add("hidden");const E=this.shadowRoot.getElementById("carNode"),I=!!((nr=t.grid)!=null&&nr.show_car&&((or=t.grid)!=null&&or.car_power_entity))||((rr=t.grid)==null?void 0:rr.show_car)!==!1&&!!((ar=t.grid)!=null&&ar.car_power_entity);let B=0;if(E)if(I){E.classList.remove("hidden");const b=this._getEntityState(t.grid.car_power_entity),R=this._formatPower(b,0);B=R.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=R.str)}else E.classList.add("hidden");let C=0;(((sr=t.load)==null?void 0:sr.subloads)||[]).forEach((b,R)=>{const P=this.shadowRoot.getElementById(`subloadVal_${R}`),Y=this._getEntityState(b.entity),N=this._formatPower(Y,0);C+=N.kw,P&&(P.innerText=N.str)});const A=this._getEntityState((lr=t.battery)==null?void 0:lr.soc_entity),K=A?A.val:80;this._nodes.masterBatterySoc.innerText=`${K.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const ee=this._getEntityState((dr=t.battery)==null?void 0:dr.power_entity),te=this._getEntityState((cr=t.battery)==null?void 0:cr.current_entity),pe=ee?ee.unit==="W"?ee.val/1e3:ee.val:0,ke=((pr=t.battery)==null?void 0:pr.power_sign)||((fr=t.battery)!=null&&fr.invert_power?"standard":"deye");let j=!1,U=!1;const M=Math.abs(pe);M>=.02?ke==="deye"?pe<0?j=!0:U=!0:pe>0?j=!0:U=!0:te&&Math.abs(te.val)>=.3&&(ke==="deye"?te.val<0?j=!0:U=!0:te.val>0?j=!0:U=!0),this._isCharging=j,this._isDischarging=U;const ne=j?M:0,ye=U?M:0;if(this._nodes.masterBatteryFlowHint){let b=this._t("bat_idle"),R="#94a3b8";j?(b=this._t("bat_dir_charge"),R="#34d399"):U&&(b=this._t("bat_dir_discharge"),R="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${M.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${R}; font-weight: 700; font-size: 14px;">${b}</span>`}const je=this._getEntityState((gr=t.battery)==null?void 0:gr.voltage_entity),it=je?je.val.toFixed(2):"53.24",pt=te?te.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${it.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${pt.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((hr=t.battery)==null?void 0:hr.reserve_soc)!==void 0?t.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const b=((ur=t.battery)==null?void 0:ur.reserve_soc)!==void 0?t.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${b}%`}let X=this._getEntityState((_r=t.load)==null?void 0:_r.essential_power_entity);!X&&(!((yr=t.load)!=null&&yr.essential_power_entity)||((br=t.load)==null?void 0:br.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((mr=t.load)==null?void 0:mr.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(X=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const J=X&&typeof X.val=="number"&&!isNaN(X.val)?Math.max(0,X.unit==="W"?X.val/1e3:X.val):0,Ve=!!(X&&J>0);let be=null,Te=!1,Pe=this._getEntityState((vr=t.grid)==null?void 0:vr.power_entity);if(!Pe){const b=["sensor.deye_12k_inverter_total_grid_power","sensor.deye_12k_inverter_grid_power","sensor.inverter_12_kvt_total_grid_power","sensor.inverter_12_kvt_grid_power","sensor.inverter_12_kvt_grid_l1_power","sensor.inverter_12_kvt_grid_l2_power","sensor.inverter_12_kvt_grid_l3_power","sensor.esp32_deye_inverter_grid_power","sensor.esp32_deye_inverter_total_grid_power","sensor.deye_grid_power","sensor.grid_power","sensor.solarman_total_grid_power","sensor.solarman_grid_power","sensor.sunsynk_grid_power","sensor.sunsynk_total_grid_power"];for(const R of b){const P=this._getEntityState(R);if(P&&typeof P.val=="number"&&!isNaN(P.val)){Pe=P;break}}}const nt=Pe?Pe.unit==="W"?Pe.val/1e3:Pe.val:0,we=l+S+(O>0?O:0)+ye;if((xr=t.grid)!=null&&xr.external_power_entity){const b=this._getEntityState(t.grid.external_power_entity);if(b&&typeof b.val=="number"&&!isNaN(b.val)){const R=Math.abs(b.unit==="W"?b.val/1e3:b.val),P=R<.03&&(ne>.1&&we<.1||nt>.1),Y=ne>.5&&we<.15&&R<ne-.2;!P&&!Y&&(be=b,Te=!0)}}if(!be)if(Pe&&nt>.05)be=Pe,Te=!1;else{const b=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"],R=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),P=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),Y=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");let N=null;if(R&&P&&Y&&!isNaN(R.val)&&!isNaN(P.val)&&!isNaN(Y.val)){const Be=(R.unit==="kW"?R.val*1e3:R.val)+(P.unit==="kW"?P.val*1e3:P.val)+(Y.unit==="kW"?Y.val*1e3:Y.val);N={val:Be,unit:"W",raw:String(Be)}}if(!N)for(const Be of b){const se=this._getEntityState(Be);if(se&&typeof se.val=="number"&&!isNaN(se.val)){N=se;break}}if(!N&&((wr=this._hass)!=null&&wr.states)){const se=Object.keys(this._hass.states).find(Ce=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(Ce)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(Ce));if(se){const Ce=this._getEntityState(se);Ce&&typeof Ce.val=="number"&&!isNaN(Ce.val)&&(N=Ce)}}if(N){const Be=Math.abs(N.unit==="kW"?N.val:N.val/1e3),se=Be<.03&&(ne>.1&&we<.1||nt>.1&&we<.1),Ce=ne>.5&&we<.15&&Be<ne-.2;!se&&!Ce&&Be>0&&(be=N,Te=!0)}be||(be=Pe,Te=!1)}const Se=be?be.unit==="W"?be.val/1e3:be.val:0,ft=((kr=t.grid)==null?void 0:kr.power_sign)||((Sr=t.grid)!=null&&Sr.invert_power?"inverted":"deye"),Nt=((Er=t.grid)==null?void 0:Er.selling_enabled)===!0,ze=(((Cr=t.grid)==null?void 0:Cr.min_power_threshold)!==void 0?t.grid.min_power_threshold:50)/1e3,ot=this._getEntityState((Tr=t.grid)==null?void 0:Tr.status_entity),Xe=this._getEntityState((($r=t.grid)==null?void 0:$r.voltage_entity)||((Br=t.inverter)==null?void 0:Br.voltage_entity)),W=((Ir=t.grid)==null?void 0:Ir.voltage_threshold)!==void 0?t.grid.voltage_threshold:90;let ae=!0;if(ot){const b=String(ot.raw||ot.val).toLowerCase();(b==="off"||b==="false"||b==="0"||b==="disconnected"||b==="offline"||b==="unavailable"||b==="unknown")&&(ae=!1)}else Xe&&typeof Xe.val=="number"&&!isNaN(Xe.val)&&Xe.val<W&&(ae=!1);const Ee=we<.15,De=we<ne+.05,$e=Ee||De;let de=!1,fe=!1,G=0;if(!ae)G=0,de=!1,fe=!1;else{if($e)G=Math.abs(Se),G>=ze?(fe=!0,de=!1):(G=0,fe=!1,de=!1);else if(Te)G=Math.abs(Se),G>=ze&&(ft==="deye"?Se<0?de=!0:fe=!0:Se>0?de=!0:fe=!0);else if(ft==="deye"){if(Se>0)G=Se,G>=ze&&(fe=!0);else if(Se<0){const P=Math.abs(Se),Y=Math.max(0,P-J);Y>=ze?(G=Y,de=!0):(G=0,de=!1)}}else if(Se<0)G=Math.abs(Se),G>=ze&&(fe=!0);else if(Se>0){const P=Math.max(0,Se-J);P>=ze?(G=P,de=!0):(G=0,de=!1)}if(((Nr=t.grid)==null?void 0:Nr.auto_calculate)!==!1&&fe&&!Te){const P=Math.max(J,C),Y=ne+P+q+B;P>.05&&Y>we+G+.1&&(G=G+P)}if($e){const P=this._getEntityState((Ar=t.grid)==null?void 0:Ar.voltage_entity)||this._getEntityState((Lr=t.inverter)==null?void 0:Lr.voltage_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_voltage")||this._getEntityState("sensor.esp32_deye_inverter_grid_voltage")||this._getEntityState("sensor.deye_12k_inverter_grid_voltage"),Y=this._getEntityState((Pr=t.inverter)==null?void 0:Pr.current_entity)||this._getEntityState((Dr=t.grid)==null?void 0:Dr.current_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_current")||this._getEntityState("sensor.inverter_12_kvt_current_l1")||this._getEntityState("sensor.esp32_deye_inverter_grid_current")||this._getEntityState("sensor.deye_12k_inverter_grid_current")||this._getEntityState("sensor.grid_current"),N=P&&typeof P.val=="number"&&!isNaN(P.val)?P.val:0,Be=Y&&typeof Y.val=="number"&&!isNaN(Y.val)?Y.val:0,se=N>=W&&Be>=.5,Ce=ne>.1&&we<.1;if(se){const ue=N*Be/1e3;(G<.05||G<ne-.05||ue>G+.3)&&(G=ue,fe=!0,de=!1)}else if(Ce&&(G<.05||G<ne-.05)){const ue=Math.max(J,C),_e=ue>0?ue:.8;G=Math.max(G,ne+.15+_e),fe=!0,de=!1}const Ge=(((Rr=t.inverter)==null?void 0:Rr.standby_power)!==void 0?t.inverter.standby_power:100)/1e3,ge=Math.max(J,C),Ie=ne+ge+q+B+Ge,Me=Math.max(0,Ie-we);Me>.05&&G<Me-.1&&(G=Me,fe=!0,de=!1)}const R=Math.max(0,l+S+(O>0?O:0)+ye-ne-J-q-B);$e||!Nt?de=!1:de&&G>R+.1&&(G=R,G<ze&&(de=!1,G=0))}const Ze=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(ae?(this._nodes.gridPowerVal.innerText=`${G.toFixed(3)} ${i}`,de?this._nodes.gridPowerVal.style.color="#34d399":fe?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${i}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(ae?de?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):fe?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),Ze&&(ae?(Ze.classList.add("glow-grid"),Ze.style.borderColor="rgba(56, 189, 248, 0.4)"):(Ze.classList.remove("glow-grid"),Ze.style.borderColor="rgba(239, 68, 68, 0.45)"));const Ue=this._getEntityState((Fr=t.grid)==null?void 0:Fr.import_daily_entity);this._nodes.gridImportDaily.innerText=Ue?`${Ue.val.toFixed(2)} kWh`:"0.00 kWh";const Ye=this._getEntityState((Mr=t.grid)==null?void 0:Mr.export_daily_entity);this._nodes.gridExportDaily.innerText=Ye?`${Ye.val.toFixed(2)} kWh`:"0.00 kWh";const oi=(Or=t.battery)==null?void 0:Or.charge_daily_entity;let We=this._getEntityState(oi);We||(We=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge"));const ri=We&&typeof We.val=="number"?We.val:0;this._calculateTariffs(Ue?Ue.val:0,Ye?Ye.val:0,h,ri);const ai=fe?G:0,Mt=de?G:0,Ot=l+S+(O>0?O:0)+ai+ye,si=ne+Mt+q+B,Vt=Math.max(0,Ot-si),rt=this._getEntityState((Vr=t.inverter)==null?void 0:Vr.self_consumption_entity),mt=rt&&typeof rt.val=="number"&&!isNaN(rt.val)?Math.max(0,rt.unit==="W"?rt.val/1e3:rt.val):null,zt=(((zr=t.inverter)==null?void 0:zr.standby_power)!==void 0?t.inverter.standby_power:100)/1e3;let at=0,Ke=0;if(Ve)if(at=Math.max(C,J),mt!==null)Ke=mt;else{const b=Math.max(0,Ot-(ne+Mt+at+q+B));Ke=b>0?b:zt}else mt!==null?Ke=mt:Ke=Math.min(Vt,zt),at=Math.max(C,Math.max(0,Vt-Ke));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((Wr=t.inverter)==null?void 0:Wr.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Ke<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Ke*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Ke.toFixed(3)} ${i}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${at.toFixed(3)} ${i}`;const st=this._getEntityState((Gr=t.load)==null?void 0:Gr.daily_house_entity);this._nodes.dailyHouseKwh.innerText=st?`${st.val.toFixed(2)} kWh`:"12,40 kWh";const vt=this._getEntityState(((qr=t.solar)==null?void 0:qr.autarky_entity)||"sensor.deye_inverter_daily_autarky"),xt=this._getEntityState(((Hr=t.solar)==null?void 0:Hr.self_consumption_entity)||"sensor.deye_inverter_daily_self_consumption");let wt=vt&&typeof vt.val=="number"&&!isNaN(vt.val)?vt.val:null;if(wt===null){const b=st&&typeof st.val=="number"&&!isNaN(st.val)?st.val:12.4,R=Ue&&typeof Ue.val=="number"&&!isNaN(Ue.val)?Ue.val:0;b>.05?wt=Math.min(100,Math.max(0,(b-R)/b*100)):wt=100}let kt=xt&&typeof xt.val=="number"&&!isNaN(xt.val)?xt.val:null;if(kt===null){const b=Ye&&typeof Ye.val=="number"&&!isNaN(Ye.val)?Ye.val:0;h>.05?kt=Math.min(100,Math.max(0,(h-b)/h*100)):kt=0}this._nodes.autarkyVal&&(this._nodes.autarkyVal.innerText=`${Math.round(wt)}%`),this._nodes.selfConsVal&&(this._nodes.selfConsVal.innerText=`${Math.round(kt)}%`);const St=((jr=t.battery)==null?void 0:jr.parallel_batteries)||((Yr=(Ur=t.battery)==null?void 0:Ur.modules)==null?void 0:Yr.length)||2;let Et=0;for(let b=0;b<St;b++){const R=((Jr=(Kr=t.battery)==null?void 0:Kr.modules)==null?void 0:Jr[b])||((Xr=(Qr=t.battery)==null?void 0:Qr.module_entities)==null?void 0:Xr[b])||{},P=R.capacity_kwh!==void 0?parseFloat(R.capacity_kwh):b===0?7.88:b===1?5.12:(((Zr=t.battery)==null?void 0:Zr.capacity_kwh)||13)/St;Et+=isNaN(P)?0:P}Et<=0&&(Et=parseFloat((ea=t.battery)==null?void 0:ea.capacity_kwh)||13);const At=this._getEntityState(((ta=t.battery)==null?void 0:ta.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Lt=At&&!isNaN(At.val)?At.val:null,Pt=Lt!==null&&Lt<=40?Lt:Et,Wt=this._getEntityState(((ia=t.battery)==null?void 0:ia.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),li=Wt?Wt.val:80,di=Pt*(li/100),Gt=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${di.toFixed(2).replace(".",",")} ${Gt} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${Pt.toFixed(1).replace(".",",")})</span></span>`);const qt=this._getEntityState(((na=t.battery)==null?void 0:na.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),he=qt?qt.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${he.toFixed(1).replace(".",",")}`),We||(We=this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const F=(oa=t.battery)==null?void 0:oa.discharge_daily_entity;let V=this._getEntityState(F);V||(V=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=We?`${We.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=V?`${V.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const H=[];for(let b=1;b<=St;b++){const R=this.shadowRoot.getElementById(`batPackSoc_${b}`),P=this.shadowRoot.getElementById(`batPackVolt_${b}`),Y=this.shadowRoot.getElementById(`batPackCurr_${b}`),N=this.shadowRoot.getElementById(`batPackPower_${b}`),Be=this.shadowRoot.getElementById(`batPackTempVal_${b}`),se=this.shadowRoot.getElementById(`batPackDelta_${b}`),Ce=this.shadowRoot.getElementById(`batPackDeltaVal_${b}`),me=this.shadowRoot.getElementById(`batPackStateTag_${b}`),Ge=this.shadowRoot.getElementById(`batPackKwh_${b}`),ge=this.shadowRoot.getElementById(`batPackBar1_${b}`),Ie=this.shadowRoot.getElementById(`batPackBar2_${b}`),Me=this.shadowRoot.getElementById(`batPackBar3_${b}`),ue=this.shadowRoot.getElementById(`batPackBar4_${b}`),_e=((aa=(ra=t.battery)==null?void 0:ra.modules)==null?void 0:aa[b-1])||((la=(sa=t.battery)==null?void 0:sa.module_entities)==null?void 0:la[b-1])||{},et=_e.soc_entity||_e.soc||`sensor.bms_rack${b}_soc`,Jt=_e.current_entity||`sensor.bms_rack${b}_current`,ci=_e.voltage_entity||_e.volt||`sensor.bms_rack${b}_voltage`,Qt=_e.power_entity||`sensor.bms_rack${b}_power`,Xt=_e.temperature_entity||_e.temp||`sensor.bms_rack${b}_temperature`,Zt=_e.cell_delta_entity||_e.delta_entity||`sensor.bms_rack${b}_cell_delta`,ei=this._getEntityState(et),pi=this._getEntityState(Jt),Ei=this._getEntityState(ci),Dt=this._getEntityState(Qt),Ci=this._getEntityState(Xt);let ve=this._getEntityState(Zt);if(ve||(ve=this._getEntityState(`sensor.bms_rack${b}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${b}_cell_difference`)),!ve&&(_e.max_cell_voltage_entity||_e.min_cell_voltage_entity)){const Rt=this._getEntityState(_e.max_cell_voltage_entity),fa=this._getEntityState(_e.min_cell_voltage_entity);if(Rt&&fa){const Mn=Math.abs(Rt.val-fa.val);ve={val:Mn<1?Math.round(Mn*1e3):Mn,unit:"mV"}}}const fi=ei?ei.val:b===1?82:b===2?85:75,gi=Ei?Ei.val:b===1?54.1:b===2?54:52.4,Qe=pi?pi.val:b===1?18.4:b===2?25.2:8.2,Ct=Ci?Ci.val:b===1?36.5:b===2?21:22.5;let Tt=null;if(ve){let Rt=ve.val;Rt<1&&Rt>0?Tt=Math.round(Rt*1e3):Tt=Math.round(Rt)}else this._hass||(Tt=b===1?12:b===2?8:15);let $t=0;Dt?$t=Math.abs(this._formatPower(Dt).kw):$t=gi*Math.abs(Qe)/1e3;const Qi=(_e.capacity_kwh!==void 0?parseFloat(_e.capacity_kwh):b===1?7.88:b===2?5.12:Pt/St)*(fi/100);R&&(R.innerText=`${fi.toFixed(0)}%`),P&&(P.innerText=`${gi.toFixed(1).replace(".",",")} V`),Y&&(Y.innerText=`${Math.abs(Qe).toFixed(1).replace(".",",")} A`),N&&(N.innerText=`${$t.toFixed(2).replace(".",",")} ${i}`),Be&&(Be.innerText=`${Ct.toFixed(1).replace(".",",")}`),Ce&&(Tt!==null&&!isNaN(Tt)?(Ce.innerText=`${Tt} mV`,se&&(se.style.display="inline-flex",Tt<=25?(se.style.color="#34d399",se.style.background="rgba(52, 211, 153, 0.12)",se.style.borderColor="rgba(52, 211, 153, 0.3)"):Tt<=50?(se.style.color="#fbbf24",se.style.background="rgba(251, 191, 36, 0.12)",se.style.borderColor="rgba(251, 191, 36, 0.3)"):(se.style.color="#f87171",se.style.background="rgba(248, 113, 113, 0.16)",se.style.borderColor="rgba(248, 113, 113, 0.4)"))):se&&(se.style.display="none")),Ge&&(Ge.innerText=`~${Qi.toFixed(2).replace(".",",")} ${Gt}`);let qe=!1;U?qe=!1:j?qe=!0:pi?qe=(((da=t.battery)==null?void 0:da.power_sign)||"deye")==="deye"?Qe<0:Qe>0:qe=Qe<0;const hi=this.shadowRoot.getElementById(`batBranchBadge_${b}`);hi&&($t<.02?(hi.className="es-bat-branch-badge es-mono idle",hi.innerHTML=`<span>0.00 ${i}</span>`):qe?(hi.className="es-bat-branch-badge es-mono charge",hi.innerHTML=`<span>${$t.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`):(hi.className="es-bat-branch-badge es-mono discharge",hi.innerHTML=`<span>${$t.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));const ti=this.shadowRoot.getElementById(`batPackCard_${b}`),ca=ti==null?void 0:ti.querySelector(".es-battery-gauge"),pa=ti==null?void 0:ti.querySelector(".es-battery-gauge-nipple");ti&&(ti.style.borderColor=qe?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),ca&&(ca.style.borderColor=qe?"#10b981":"#ef4444"),pa&&(pa.style.background=qe?"#10b981":"#ef4444"),me&&(qe?(me.className="es-bat-state-tag charge",me.innerText=this._t("bat_charge"),me.style.color="#34d399",me.style.background="rgba(16, 185, 129, 0.18)",me.style.borderColor="rgba(16, 185, 129, 0.4)"):(me.className="es-bat-state-tag discharge",me.innerText=this._t("bat_discharge"),me.style.color="#f87171",me.style.background="rgba(239, 68, 68, 0.18)",me.style.borderColor="rgba(239, 68, 68, 0.4)")),N&&(N.style.color=qe?"#34d399":"#f87171"),Y&&(Y.style.color=qe?"#38bdf8":"#f87171");const cn=qe?"active-green":"active-red";ge&&Ie&&Me&&ue&&(ge.className=`es-bat-bar ${fi>=10?cn:""}`,Ie.className=`es-bat-bar ${fi>=35?cn:""}`,Me.className=`es-bat-bar ${fi>=65?cn:""}`,ue.className=`es-bat-bar ${fi>=85?cn:""}`),H.push({kwNum:$t,isChg:qe})}this._updateFlowPaths(),this._updateFlowAnimations(ae?G:0,de,fe,l,at,M,j,U,B,H,q,C,O),this._updateControlSliders(),this._update3DStationView(l,S,!ae,ae,de,fe,G,at,M,j,U,K,C)}_update3DStationView(t,i,n,o,r,a,s,l,d,c,_,u,m){var ot,Xe,W,ae,Ee,De,$e,de,fe,G,Ze,Ue,Ye,oi,We,ri,ai,Mt,Ot,si,Vt,rt,mt,Si,zt,at,Ke,st,vt,xt,wt,kt,St,Et,At,Lt,Pt,Wt,li,di,Gt,qt,he,F,V,H,Je,gt,ht,ut,_t,Ht,jt,Ut,Yt,Kt,Ii,Ni,Ai,Li,Pi,Di,Ri,Fi,Mi,Oi,Vi,zi,Wi,Gi,qi,Hi,ji,Ui,Yi,Ki;if(!this.shadowRoot)return;const h=this._config||Q,y=this._getEntityState((ot=h.solar)==null?void 0:ot.daily_yield_entity),v=y?`${y.val.toFixed(1)} ${this._t("kwh_unit")||"кВт·год"}`:(W=(Xe=this._nodes)==null?void 0:Xe.dailySolarYield)!=null&&W.innerText?`${this._nodes.dailySolarYield.innerText.replace(",",".")} ${this._t("kwh_unit")||"кВт·год"}`:"11.0 кВт·год",w=((ae=this.shadowRoot.getElementById("pvVal_1"))==null?void 0:ae.innerText)||this._formatPower(this._getEntityState((($e=(De=(Ee=h.solar)==null?void 0:Ee.strings)==null?void 0:De[0])==null?void 0:$e.power_entity)||"sensor.deye_12k_inverter_pv1_power")).formatted,p=((de=this.shadowRoot.getElementById("pvVolt_1"))==null?void 0:de.innerText)||"195.3 V",g=((fe=this.shadowRoot.getElementById("pvCurr_1"))==null?void 0:fe.innerText)||"0.30 A",f=((G=this.shadowRoot.getElementById("pvVal_2"))==null?void 0:G.innerText)||this._formatPower(this._getEntityState(((Ye=(Ue=(Ze=h.solar)==null?void 0:Ze.strings)==null?void 0:Ue[1])==null?void 0:Ye.power_entity)||"sensor.deye_12k_inverter_pv2_power")).formatted,x=((oi=this.shadowRoot.getElementById("pvVolt_2"))==null?void 0:oi.innerText)||"183.9 V",k=((We=this.shadowRoot.getElementById("pvCurr_2"))==null?void 0:We.innerText)||"0.40 A",$=((ri=this.shadowRoot.getElementById("pvVal_3"))==null?void 0:ri.innerText)||this._formatPower(this._getEntityState(((Ot=(Mt=(ai=h.solar)==null?void 0:ai.strings)==null?void 0:Mt[2])==null?void 0:Ot.power_entity)||"sensor.deye_12k_inverter_pv3_power")).formatted,L=((si=this.shadowRoot.getElementById("pvVolt_3"))==null?void 0:si.innerText)||"205.4 V",T=((Vt=this.shadowRoot.getElementById("pvCurr_3"))==null?void 0:Vt.innerText)||"0.30 A",S=((rt=this.shadowRoot.getElementById("turbinePower_1"))==null?void 0:rt.innerText)||this._formatPower(this._getEntityState(((zt=(Si=(mt=h.wind)==null?void 0:mt.turbines)==null?void 0:Si[0])==null?void 0:zt.power_entity)||"sensor.wind_turbine_1_power")).formatted,O=((at=this.shadowRoot.getElementById("turbineRpmVal_1"))==null?void 0:at.innerText)||"90 rpm",ie=((Ke=this.shadowRoot.getElementById("turbinePower_2"))==null?void 0:Ke.innerText)||this._formatPower(this._getEntityState(((xt=(vt=(st=h.wind)==null?void 0:st.turbines)==null?void 0:vt[1])==null?void 0:xt.power_entity)||"sensor.wind_turbine_2_power")).formatted,Z=((wt=this.shadowRoot.getElementById("turbineStatus_2"))==null?void 0:wt.innerText)||this._t("wind_calm")||"Штиль",q=this._getEntityState(((kt=h.grid)==null?void 0:kt.voltage_entity)||((St=h.inverter)==null?void 0:St.voltage_entity)),E=this._getEntityState(((Et=h.grid)==null?void 0:Et.current_entity)||((At=h.inverter)==null?void 0:At.current_entity)),I=q?`${q.val.toFixed(1)} V`:(Pt=(Lt=this._nodes)==null?void 0:Lt.inverterVolt)!=null&&Pt.innerText?`${this._nodes.inverterVolt.innerText} V`:n?"8.8 V":"230.0 V",B=E?`${E.val.toFixed(1)} A`:(li=(Wt=this._nodes)==null?void 0:Wt.inverterCurrent)!=null&&li.innerText?`${this._nodes.inverterCurrent.innerText} A`:"0.0 A",C=this._getEntityState((di=h.inverter)==null?void 0:di.ac_temperature_entity)||this._getEntityState("sensor.deye_12k_inverter_ac_temperature"),A=this._getEntityState((Gt=h.inverter)==null?void 0:Gt.dc_temperature_entity)||this._getEntityState("sensor.deye_12k_inverter_dc_temperature"),K=C?`${C.val.toFixed(2)} °C`:(he=(qt=this._nodes)==null?void 0:qt.inverterAcTemp)!=null&&he.innerText?`${this._nodes.inverterAcTemp.innerText} °C`:"41.20 °C",ee=A?`${A.val.toFixed(2)} °C`:(V=(F=this._nodes)==null?void 0:F.inverterDcTemp)!=null&&V.innerText?`${this._nodes.inverterDcTemp.innerText} °C`:"38.80 °C",te=(Je=(H=this._nodes)==null?void 0:H.inverterSelfVal)!=null&&Je.innerText?`⚡ ${this._nodes.inverterSelfVal.innerText}`:"⚡ 214 Вт",pe=this._getEntityState((gt=h.battery)==null?void 0:gt.voltage_entity),ke=this._getEntityState((ht=h.battery)==null?void 0:ht.current_entity),j=this._getEntityState(((ut=h.battery)==null?void 0:ut.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature"),U=pe?`${pe.val.toFixed(2).replace(".",",")} V`:((Ht=(_t=this._nodes)==null?void 0:_t.batVoltVal)==null?void 0:Ht.innerText)||"52,85 V",M=ke?`${Math.abs(ke.val).toFixed(2).replace(".",",")} A`:(Ut=(jt=this._nodes)==null?void 0:jt.batCurrentVal)!=null&&Ut.innerText?this._nodes.batCurrentVal.innerText.replace("-",""):"2,96 A",le=j?`${j.val.toFixed(1).replace(".",",")} °C`:(Kt=(Yt=this._nodes)==null?void 0:Yt.batMasterTempVal)!=null&&Kt.innerText?`${this._nodes.batMasterTempVal.innerText} °C`:"25,0 °C",ne=((Ni=(Ii=this._nodes)==null?void 0:Ii.batCapacityVal)==null?void 0:Ni.innerText)||((Ai=this.shadowRoot.getElementById("batEstTime"))==null?void 0:Ai.innerText)||"~23,70 кВт·год",ye=((Li=this.shadowRoot.getElementById("batPackSoc_1"))==null?void 0:Li.innerText)||`${Math.round(u)}%`,je=((Pi=this.shadowRoot.getElementById("batPackPower_1"))==null?void 0:Pi.innerText)||`${(d*.51).toFixed(2)} кВт`,it=((Di=this.shadowRoot.getElementById("batPackVolt_1"))==null?void 0:Di.innerText)||U,pt=((Ri=this.shadowRoot.getElementById("batPackTempVal_1"))==null?void 0:Ri.innerText)||"30.5 °C",X=((Fi=this.shadowRoot.getElementById("batPackDeltaVal_1"))==null?void 0:Fi.innerText)||"Δ6 мВ",J=((Mi=this.shadowRoot.getElementById("batPackSoc_2"))==null?void 0:Mi.innerText)||`${Math.round(u)}%`,Ve=((Oi=this.shadowRoot.getElementById("batPackPower_2"))==null?void 0:Oi.innerText)||`${(d*.49).toFixed(2)} кВт`,be=((Vi=this.shadowRoot.getElementById("batPackVolt_2"))==null?void 0:Vi.innerText)||U,Te=((zi=this.shadowRoot.getElementById("batPackTempVal_2"))==null?void 0:zi.innerText)||"16.0 °C",Pe=((Wi=this.shadowRoot.getElementById("batPackDeltaVal_2"))==null?void 0:Wi.innerText)||"Δ11 мВ",nt=(Gi=this.shadowRoot.getElementById("subloadVal_0"))==null?void 0:Gi.innerText;let we=0;if(nt){const Ji=parseFloat(nt.replace(",","."));we=isNaN(Ji)?m>0?m:1.127:Ji}else we=m>0?m:1.127;const Se=this._getEntityState((ji=(Hi=(qi=h.load)==null?void 0:qi.subloads)==null?void 0:Hi[0])==null?void 0:ji.temperature_entity),ft=this._getEntityState((Ui=h.load)==null?void 0:Ui.daily_energy_entity),Nt=ft?`Спожито за добу: ${ft.val.toFixed(1)} ${this._t("kwh_unit")||"кВт·год"}`:(Ki=(Yi=this._nodes)==null?void 0:Yi.dailyHouseKwh)!=null&&Ki.innerText?`Спожито за добу: ${this._nodes.dailyHouseKwh.innerText}`:"Спожито за добу: 21.3 кВт·год",ze={solarPowerKw:t,solarPowerStr:this._formatPower(t).formatted,solarStatusStr:t>.02?this._t("solar_yield_today")||"Генерація активна":this._t("inverter_offline")||"Генерації зараз немає (ніч)",solarYieldTodayStr:v,pv1:{powerStr:w,specStr:`${p} · ${g}`},pv2:{powerStr:f,specStr:`${x} · ${k}`},pv3:{powerStr:$,specStr:`${L} · ${T}`},windPowerKw:i,windPowerStr:this._formatPower(i).formatted,windStatusStr:i>.01?this._t("wind_gen")||"Генерація":this._t("wind_calm")||"Штиль",turb1PowerStr:S,turb1RpmStr:O,turb2PowerStr:ie,turb2StatusStr:Z,gridPowerKw:n?0:r?-s:s,gridPowerStr:n?"0.000 кВт":this._formatPower(s).formatted,gridDirectionStr:n?this._t("grid_dir_off")||"ВИМКНЕНО":r?this._t("grid_dir_export")||"← Експорт у мережу":s>.02?this._t("grid_dir_import")||"→ Імпорт з мережі":"Мережа (0 експорт)",gridVoltageStr:I,gridCurrentStr:B,isBlackout:n,invStatusStr:n?this._t("inverter_standby")||"АВТОНОМНИЙ РЕЖИМ (EPS)":this._t("inverter_working")||"ПРАЦЮЄ (ON-GRID)",invLcdPowerStr:this._formatPower(l||s||t).formatted,invTempAcStr:K,invTempDcStr:ee,invSelfStr:te,batPowerStr:this._formatPower(d).formatted,batSoc:Math.round(u),isDischarging:_,isCharging:c,batCurrentStr:M,batBusStatsStr:`Шина: ${U} · Темп: ${le}`,batEstTimeStr:ne,rack1:{socStr:ye,powerStr:je,voltageStr:it,tempStr:pt,deltaStr:X},rack2:{socStr:J,powerStr:Ve,voltageStr:be,tempStr:Te,deltaStr:Pe},housePowerStr:this._formatPower(l).formatted,houseStatusStr:n?"Живлення від батареї (EPS)":"Споживання будинку",houseDayTotalStr:Nt,boilerPowerKw:we,boilerPowerStr:this._formatPower(we).formatted,boilerTempStr:Se?`${Se.val.toFixed(0)} °C`:"65 °C",boilerStatusStr:we>.05?"Нагрів активний":"Очікування",otherPowerStr:this._formatPower(Math.max(0,l-we)).formatted};ya(this.shadowRoot,ze,this._t.bind(this))}_setupResizeObserver(){var i;if(this._resizeObserver)return;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".energy-station-container");t&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(t)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var t,i,n,o,r,a,s,l,d;try{const c=(t=this.shadowRoot)==null?void 0:t.querySelector(".energy-station-container");if(!c)return;const _=c.getBoundingClientRect();if(_.width===0||_.height===0)return;const u=this._config||Q,m=this._scale||1,h=(E,I=.5,B=.5)=>{if(!E)return null;const C=E.getBoundingClientRect();return{x:Math.round((C.left-_.left+C.width*I)/m),y:Math.round((C.top-_.top+C.height*B)/m)}},y=(E,I,B)=>{const C=this.shadowRoot.getElementById(E),A=this.shadowRoot.getElementById(I);C&&C.setAttribute("d",B||""),A&&A.setAttribute("d",B||"")},v=this.shadowRoot.getElementById("gridNode"),w=this.shadowRoot.getElementById("inverterNode"),p=this.shadowRoot.getElementById("essentialNode"),g=this.shadowRoot.getElementById("totalPvPowerBadge"),f=this.shadowRoot.getElementById("masterBatteryHub"),x=this.shadowRoot.getElementById("carNode");if(v&&w){const E=v.getBoundingClientRect(),I=w.getBoundingClientRect();if(E.bottom<I.top+30){const C=h(v,.7,1),A=h(w,.2,0);if(C&&A){const K=Math.round((C.y+A.y)/2),ee=`M ${C.x} ${C.y} C ${C.x} ${K}, ${A.x} ${K}, ${A.x} ${A.y}`;y("pathGridInvBase","pathGridInvFlow",ee)}}else{const C=Math.round((I.top-_.top+I.height*.55)/m),A=Math.round((E.right-_.left)/m),K=Math.round((I.left-_.left)/m),ee=Math.round((E.top-_.top+E.height*.5)/m);let te="";if(Math.abs(ee-C)<=8)te=`M ${A} ${C} L ${K} ${C}`;else{const pe=Math.round(A+24);te=`M ${A} ${ee} C ${pe} ${ee}, ${pe} ${C}, ${K} ${C}`}y("pathGridInvBase","pathGridInvFlow",te)}}if(w&&p){const E=p.getBoundingClientRect(),I=w.getBoundingClientRect();if(E.bottom<I.top+30){const C=h(w,.8,0),A=h(p,.3,1);if(C&&A){const K=Math.round((C.y+A.y)/2),ee=`M ${C.x} ${C.y} C ${C.x} ${K}, ${A.x} ${K}, ${A.x} ${A.y}`;y("pathInvLoadBase","pathInvLoadFlow",ee)}}else{const C=Math.round((I.top-_.top+I.height*.55)/m),A=Math.round((I.right-_.left)/m),K=Math.round((E.left-_.left)/m),ee=Math.round((E.top-_.top+E.height*.5)/m);let te="";if(Math.abs(ee-C)<=8)te=`M ${A} ${C} L ${K} ${C}`;else{const pe=Math.round(K-24);te=`M ${A} ${C} C ${pe} ${C}, ${pe} ${ee}, ${K} ${ee}`}y("pathInvLoadBase","pathInvLoadFlow",te)}}if(g&&w){const E=h(g,.5,1),I=h(w,.5,0);if(E&&I){const B=`M ${E.x} ${E.y} L ${I.x} ${I.y}`;y("pathSolarInvBase","pathSolarInvFlow",B)}}if(w&&f){const E=h(w,.5,1),I=h(f,.5,0);if(E&&I){const B=`M ${E.x} ${E.y} L ${I.x} ${I.y}`;y("pathInvBatBase","pathInvBatFlow",B)}}const k=this.shadowRoot.getElementById("nonEssentialNode"),$=k&&!k.classList.contains("hidden")&&k.offsetHeight>0,L=x&&!x.classList.contains("hidden")&&x.offsetHeight>0;if(v&&$){const E=h(v,.5,1),I=h(k,.5,0);if(E&&I){const B=`M ${E.x} ${E.y} L ${I.x} ${I.y}`;y("pathGridNonEssBase","pathGridNonEssFlow",B)}}else y("pathGridNonEssBase","pathGridNonEssFlow","");if(L){const E=$?k:v;if(E){const I=h(E,.5,1),B=h(x,.5,0);if(I&&B){const C=`M ${I.x} ${I.y} L ${B.x} ${B.y}`;y("pathNonEssCarBase","pathNonEssCarFlow",C)}}else y("pathNonEssCarBase","pathNonEssCarFlow","")}else y("pathNonEssCarBase","pathNonEssCarFlow","");const T=this.shadowRoot.getElementById("subloadsBusContainer");if(p&&T){const E=h(p,.5,1),I=h(T,.5,0);if(E&&I){const B=`M ${E.x} ${E.y} L ${I.x} ${I.y}`;y("pathLoadSubloadsBase","pathLoadSubloadsFlow",B)}}else y("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const S=this.shadowRoot.getElementById("auxNode");if(w&&S&&!S.classList.contains("hidden")&&S.offsetHeight>0){const E=h(S,.35,1),I=h(w,.9,0);if(E&&I){const B=Math.round((E.y+I.y)/2),C=`M ${E.x} ${E.y} C ${E.x} ${B}, ${I.x} ${B}, ${I.x} ${I.y}`;y("pathInvAuxBase","pathInvAuxFlow",C)}}else y("pathInvAuxBase","pathInvAuxFlow","");y("pathBatStemBase","pathBatStemFlow","");const O=this.shadowRoot.getElementById("windStationContainer"),Z=((i=u.wind)==null?void 0:i.show)!==!1||((n=u.aux)==null?void 0:n.type)==="wind"?((o=u.wind)==null?void 0:o.turbine_count)||((a=(r=u.wind)==null?void 0:r.turbines)==null?void 0:a.length)||2:0;for(let E=1;E<=4;E++)if(E<=Z&&O&&!O.classList.contains("hidden")){const I=this.shadowRoot.getElementById(`turbineCard_${E}`);if(I&&f){const B=h(I,.5,1),C=Z===1?.5:.28+(E-1)/(Z-1)*.44,A=h(f,C,0);if(B&&A){const K=`M ${B.x} ${B.y} L ${A.x} ${A.y}`;y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,K)}}else y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,"")}else y(`pathTurbine${E}Base`,`pathTurbine${E}Flow`,"");const q=((s=u.battery)==null?void 0:s.parallel_batteries)||((d=(l=u.battery)==null?void 0:l.modules)==null?void 0:d.length)||2;for(let E=1;E<=8;E++){const I=this.shadowRoot.getElementById(`batPackCard_${E}`),B=this.shadowRoot.getElementById(`batBranchBadge_${E}`);if(E<=q&&f&&I){const C=h(f,.5,1),A=h(I,.5,0);if(C&&A){const K=Math.round(C.y+(A.y-C.y)*.45);let ee="";Math.abs(C.x-A.x)<=4?ee=`M ${C.x} ${C.y} L ${A.x} ${A.y}`:ee=`M ${C.x} ${C.y} C ${C.x} ${K}, ${A.x} ${K}, ${A.x} ${A.y}`,y(`pathBat${E}Base`,`pathBat${E}Flow`,ee),B&&(B.style.left=`${A.x}px`,B.style.top=`${K}px`,B.style.display="flex")}else y(`pathBat${E}Base`,`pathBat${E}Flow`,""),B&&(B.style.display="none")}else y(`pathBat${E}Base`,`pathBat${E}Flow`,""),B&&(B.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var t,i,n,o,r;try{const a=this._config||Q,s=this._scale||1,l=this.shadowRoot.getElementById("solarBusSvg"),d=((t=a.solar)==null?void 0:t.pv_count)||((n=(i=a.solar)==null?void 0:i.strings)==null?void 0:n.length)||3;if(l&&d>0){const u=l.getBoundingClientRect(),m=this.shadowRoot.getElementById("pvPanel_1"),h=this.shadowRoot.getElementById(`pvPanel_${d}`),y=this.shadowRoot.getElementById("solarBusBase"),v=this.shadowRoot.getElementById("solarFlowCollector"),w=this.shadowRoot.getElementById("solarBusStemBase"),p=this.shadowRoot.getElementById("solarBusStemFlow"),g=this.shadowRoot.getElementById("solarBusFeeders");if(m&&h&&u.width>0){const f=m.getBoundingClientRect(),x=h.getBoundingClientRect(),k=Math.round((f.left-u.left+f.width/2)/s),$=Math.round((x.left-u.left+x.width/2)/s),L=13,T=Math.round((k+$)/2);if(y&&(y.setAttribute("x1",k),y.setAttribute("y1",L),y.setAttribute("x2",$),y.setAttribute("y2",L)),v&&(v.setAttribute("x1",k),v.setAttribute("y1",L),v.setAttribute("x2",$),v.setAttribute("y2",L)),w&&(w.setAttribute("x1",T),w.setAttribute("y1",L),w.setAttribute("x2",T),w.setAttribute("y2",26)),p&&(p.setAttribute("x1",T),p.setAttribute("y1",L),p.setAttribute("x2",T),p.setAttribute("y2",26)),g){let S="";for(let O=1;O<=d;O++){const ie=this.shadowRoot.getElementById(`pvPanel_${O}`);if(ie){const Z=ie.getBoundingClientRect(),q=Math.round((Z.left-u.left+Z.width/2)/s);S+=`
                  <line x1="${q}" y1="0" x2="${q}" y2="${L}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${q}" y1="0" x2="${q}" y2="${L}" stroke="#fbbf24" stroke-width="2.5" />
                `}}g.innerHTML=S}}}const c=this.shadowRoot.getElementById("subloadsBusSvg"),_=((r=(o=a.load)==null?void 0:o.subloads)==null?void 0:r.length)||3;if(c&&_>0){const u=c.getBoundingClientRect(),m=this.shadowRoot.getElementById("subloadCard_0"),h=this.shadowRoot.getElementById(`subloadCard_${_-1}`),y=this.shadowRoot.getElementById("essentialNode"),v=this.shadowRoot.getElementById("subloadsBusBase"),w=this.shadowRoot.getElementById("subloadsFlowCollector"),p=this.shadowRoot.getElementById("subloadsBusStemBase"),g=this.shadowRoot.getElementById("subloadsBusStemFlow"),f=this.shadowRoot.getElementById("subloadsBusFeeders");if(m&&h&&u.width>0){const x=m.getBoundingClientRect(),k=h.getBoundingClientRect(),$=Math.round((x.left-u.left+x.width/2)/s),L=Math.round((k.left-u.left+k.width/2)/s),T=13;let S=Math.round(($+L)/2);if(y){const Z=y.getBoundingClientRect();S=Math.round((Z.left-u.left+Z.width/2)/s)}const O=Math.min($,S),ie=Math.max(L,S);if(v&&(v.setAttribute("x1",O),v.setAttribute("y1",T),v.setAttribute("x2",ie),v.setAttribute("y2",T)),w&&(w.setAttribute("x1",O),w.setAttribute("y1",T),w.setAttribute("x2",ie),w.setAttribute("y2",T)),p&&(p.setAttribute("x1",S),p.setAttribute("y1",0),p.setAttribute("x2",S),p.setAttribute("y2",T)),g&&(g.setAttribute("x1",S),g.setAttribute("y1",0),g.setAttribute("x2",S),g.setAttribute("y2",T)),f){let Z="";for(let q=0;q<_;q++){const E=this.shadowRoot.getElementById(`subloadCard_${q}`);if(E){const I=E.getBoundingClientRect(),B=Math.round((I.left-u.left+I.width/2)/s);Z+=`
                  <line x1="${B}" y1="${T}" x2="${B}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${B}" y1="${T}" x2="${B}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}f.innerHTML=Z}}}}catch{}}_applyFlowAnimation(t,i,n,o,r){if(!t)return;if(!r){t.setAttribute("class",`flow-pulse ${i} inactive`),t.style.opacity="0",t.style.animation="none";return}const a=n?"flow-reverse":"flow-forward",s=n?"esFlowBackward":"esFlowForward";t.setAttribute("class",`flow-pulse ${i} ${a}`),t.style.opacity="1",t.style.setProperty("--flow-speed",o),t.style.animation=`${s} ${o} linear infinite`}_updateFlowAnimations(t,i,n,o,r,a,s,l,d,c=[],_=0,u=0,m=0){var J,Ve,be,Te,Pe,nt,we,Se,ft,Nt,ze,ot,Xe;const h=this._config||Q,y=((J=h.animations)==null?void 0:J.enabled)!==!1,v=((Ve=h.animations)==null?void 0:Ve.speed)||1.2,w=(W,ae=10)=>{const Ee=Math.abs(W);if(Ee<.05)return"2.5s";const De=Math.min(1,Ee/ae);return`${Math.max(.4,(2.6-De*1.9)*(v/1.2)).toFixed(2)}s`},p=this.shadowRoot.getElementById("pathGridInvFlow"),g=Math.abs(t),f=(((be=h.grid)==null?void 0:be.min_power_threshold)!==void 0?h.grid.min_power_threshold:50)/1e3,x=((Te=h.grid)==null?void 0:Te.selling_enabled)===!0,k=y&&g>=f&&(n||i&&x);this._applyFlowAnimation(p,"flow-grid",i,w(t,10),k);const $=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation($,"flow-solar",!1,w(o,12),y&&o>=.05);const L=this.shadowRoot.getElementById("pathInvLoadFlow"),T=Math.abs(r);this._applyFlowAnimation(L,"flow-load",!1,w(r,10),y&&T>=.05);const S=this.shadowRoot.getElementById("pathInvBatFlow"),O=Math.abs(a),ie=y&&O>=.02&&(s||l),Z=s?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(S,Z,l,w(a,8),ie);const q=this.shadowRoot.getElementById("pathGridNonEssFlow"),E=Math.abs(_);this._applyFlowAnimation(q,"flow-grid",!1,w(_,5),y&&E>=.05);const I=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),B=Math.abs(d);this._applyFlowAnimation(I,"flow-car",!1,w(d,7),y&&B>=.05);const C=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),A=Math.abs(u||r);this._applyFlowAnimation(C,"flow-load",!1,w(A,8),y&&A>=.05);const K=this.shadowRoot.getElementById("pathInvAuxFlow"),ee=Math.abs(m);this._applyFlowAnimation(K,"flow-aux",!0,w(m,5),y&&ee>=.05);const te=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(te,Z,l,w(a,8),ie);const pe=this.shadowRoot.getElementById("solarFlowCollector"),ke=this.shadowRoot.getElementById("solarBusStemFlow");if(pe)if(!y||o<.05)pe.style.opacity="0.2",pe.style.animation="none",ke&&(ke.style.opacity="0.2",ke.style.animation="none");else{const W=w(o,12);pe.style.opacity="1",pe.setAttribute("class","flow-line"),pe.style.animation=`esDashflow ${W} linear infinite`,ke&&(ke.style.opacity="1",ke.setAttribute("class","flow-line"),ke.style.animation=`esDashflow ${W} linear infinite`)}const j=this.shadowRoot.getElementById("subloadsFlowCollector"),U=this.shadowRoot.getElementById("subloadsBusStemFlow");if(j)if(!y||A<.05)j.style.opacity="0.2",j.style.animation="none",U&&(U.style.opacity="0.2",U.style.animation="none");else{const W=w(A,8);j.style.opacity="1",j.setAttribute("class","flow-line"),j.style.animation=`esDashflow ${W} linear infinite`,U&&(U.style.opacity="1",U.setAttribute("class","flow-line"),U.style.animation=`esDashflow ${W} linear infinite`)}const M=this.shadowRoot.getElementById("batteryFlowCollector"),le=this.shadowRoot.getElementById("batteryBusStemFlow"),ne=this.shadowRoot.getElementById("batteryBusFeeders"),ye=l?"#f87171":"#34d399",je=l?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(M)if(M.style.stroke=ye,M.style.filter=je,le&&(le.style.stroke=ye,le.style.filter=je),!y||!ie)M.style.opacity="0.2",M.style.animation="none",le&&(le.style.opacity="0.2",le.style.animation="none");else{const W=w(a,8),ae=l?"esDashflowRev":"esDashflow";M.style.opacity="1",M.setAttribute("class",l?"flow-line-reverse":"flow-line"),M.style.animation=`${ae} ${W} linear infinite`,le&&(le.style.opacity="1",le.setAttribute("class",l?"flow-line-reverse":"flow-line"),le.style.animation=`${ae} ${W} linear infinite`)}ne&&ne.querySelectorAll("line").forEach(W=>{if(W.style.stroke=ye,W.style.filter=je,!y||!ie)W.style.opacity="0.2",W.style.animation="none";else{const ae=w(a,8),Ee=l?"esDashflowRev":"esDashflow";W.style.opacity="1",W.setAttribute("class",l?"flow-line-reverse":"flow-line"),W.style.animation=`${Ee} ${ae} linear infinite`}});for(let W=1;W<=8;W++){const ae=this.shadowRoot.getElementById(`pathBat${W}Flow`);if(!ae)continue;const Ee=c[W-1],De=Ee?Ee.kwNum:0,$e=y&&(De>=.02||ie),de=l;this._applyFlowAnimation(ae,Z,de,w(De||a,8),$e)}for(let W=0;W<6;W++){const ae=this.shadowRoot.getElementById(`pathSubload${W}Flow`);if(!ae)continue;const Ee=(nt=(Pe=h.load)==null?void 0:Pe.subloads)==null?void 0:nt[W],De=Ee?this._getEntityState(Ee.entity):null,$e=De?this._formatPower(De,2).kw:W===0?2:W===1?3:4;this._applyFlowAnimation(ae,"flow-load",!1,w($e,8),y&&$e>=.05)}const it=((we=h.wind)==null?void 0:we.show)!==!1||((Se=h.aux)==null?void 0:Se.type)==="wind",pt=it?((ft=h.wind)==null?void 0:ft.turbine_count)||((ze=(Nt=h.wind)==null?void 0:Nt.turbines)==null?void 0:ze.length)||2:0,X=((ot=h.wind)==null?void 0:ot.turbines)||[];for(let W=1;W<=4;W++){const ae=this.shadowRoot.getElementById(`pathTurbine${W}Flow`);if(ae)if(W<=pt&&it){const Ee=X[W-1]||{},De=this._hass?0:W===1?1.45:.85,$e=this._getEntityState(Ee.power_entity||`sensor.wind_turbine_${W}_power`);let fe=this._formatPower($e,De).kw*1e3;$e&&$e.unit==="W"&&(fe=$e.val);const G=Ee.animation_threshold??((Xe=h.wind)==null?void 0:Xe.animation_threshold)??50,Ze=fe>=G;this._applyFlowAnimation(ae,"flow-wind",!1,w(fe/1e3,3),y&&Ze)}else this._applyFlowAnimation(ae,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",Fo),typeof customElements<"u"&&!customElements.get("energy-station-panel")&&customElements.define("energy-station-panel",Ro),window.customCards=window.customCards||[],window.customCards.some(e=>e.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),He.EnergyStationCard=Fo,He.EnergyStationPanel=Ro,He.I18N=Fn,Object.defineProperty(He,Symbol.toStringTag,{value:"Module"})});
