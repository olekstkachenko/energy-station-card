(function(we,L){typeof exports=="object"&&typeof module<"u"?L(exports):typeof define=="function"&&define.amd?define(["exports"],L):(we=typeof globalThis<"u"?globalThis:we||self,L(we.EnergyStationCard={}))})(this,function(we){"use strict";const L={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"sensor.deye_12k_inverter_total_pv_power",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"sensor.deye_12k_inverter_inverter_power",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,color:"#06b6d4",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",rpm_entity:"sensor.wind_turbine_1_rpm",daily_energy_entity:"sensor.wind_turbine_1_daily_energy",monthly_energy_entity:"sensor.wind_turbine_1_monthly_energy",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",rpm_entity:"sensor.wind_turbine_2_rpm",daily_energy_entity:"sensor.wind_turbine_2_daily_energy",monthly_energy_entity:"sensor.wind_turbine_2_monthly_energy",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",invert_power:!1,show_car:!0,car_power_entity:"sensor.ev_charger_power",car_title:"Авто",color:"#38bdf8"},load:{show:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},Y={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>`,wind_turbine:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`};class At extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||L)),this.render()}connectedCallback(){this.render()}_valueChanged(e,o){if(!this._config)return;const d=e.split(".");let g=this._config;for(let u=0;u<d.length-1;u++)g[d[u]]||(g[d[u]]={}),g=g[d[u]];g[d[d.length-1]]=o;const f=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(f)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="sensor.deye_12k_inverter_total_pv_power",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const o=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(o),this.render()}render(){var o,d,g,f,u,v,w,l,E,s,m,y,B,n,i,t,a,x,r,h,_,C,k,T,q,z,G,N,M,Q,re,ae,ge,ue,A,j,K,ee,X,xe,te,he,_e,Ee,Be,Ce,Ie,Se,Te,Pe,Me,Ae,Fe,Re,Ve,Le;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
        <button class="tab-btn ${this._currentTab==="general"?"active":""}" data-tab="general">⚙️ Загальні</button>
        <button class="tab-btn ${this._currentTab==="solar"?"active":""}" data-tab="solar">☀️ PV Сонячні</button>
        <button class="tab-btn ${this._currentTab==="inverter"?"active":""}" data-tab="inverter">⚡ Інвертор & AUX</button>
        <button class="tab-btn ${this._currentTab==="battery"?"active":""}" data-tab="battery">🔋 Батарея & Стек</button>
        <button class="tab-btn ${this._currentTab==="grid"?"active":""}" data-tab="grid">🌐 Мережа & Авто</button>
        <button class="tab-btn ${this._currentTab==="loads"?"active":""}" data-tab="loads">🏠 Дім & Споживачі</button>
      </div>

      <!-- TAB CONTENT: GENERAL -->
      <div style="display: ${this._currentTab==="general"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">Основні параметри картки</div>
          <div class="field-row">
            <label>Назва станції / Заголовок:</label>
            <input type="text" id="title" value="${e.title||"Energy Station"}">
          </div>
          <div class="field-row">
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((o=e.animations)==null?void 0:o.enabled)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((d=e.animations)==null?void 0:d.speed)||1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((g=e.animations)==null?void 0:g.speed)||1.2}s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: SOLAR -->
      <div style="display: ${this._currentTab==="solar"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">☀️ Сонячне поле (PV панелі)</div>
          <div class="field-row">
            <label>Кількість панелей/стрингів (1 - 16):</label>
            <div class="slider-row">
              <input type="range" id="solarPvCount" min="1" max="16" value="${((f=e.solar)==null?void 0:f.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((u=e.solar)==null?void 0:u.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор):</label>
            <input type="text" id="solarTotalPower" value="${((v=e.solar)==null?void 0:v.total_power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((w=e.solar)==null?void 0:w.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((l=e.solar)==null?void 0:l.target_daily_yield)||55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((E=e.solar)==null?void 0:E.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((s=e.solar)==null?void 0:s.pv_count)||3}).map((H,$)=>{var ce,pe;const S=$+1,I=((pe=(ce=e.solar)==null?void 0:ce.strings)==null?void 0:pe[$])||{},J=`sensor.deye_12k_inverter_pv${S}_voltage`,le=`sensor.deye_12k_inverter_pv${S}_current`,de=`sensor.deye_12k_inverter_pv${S}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${S} (Стрінг ${S})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${$}" value="${I.name||`PV ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${S} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${$}" value="${I.voltage_entity!==void 0?I.voltage_entity:J}" placeholder="${J}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${S} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${$}" value="${I.current_entity!==void 0?I.current_entity:le}" placeholder="${le}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${S} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${$}" value="${I.power_entity!==void 0?I.power_entity:de}" placeholder="${de} (залиште пустим для авто P = U × I)">
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
          <div class="field-row">
            <label>Модель / Назва на шильдику:</label>
            <input type="text" id="invModel" value="${((m=e.inverter)==null?void 0:m.model_name)||"DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор):</label>
            <input type="text" id="invPower" value="${((y=e.inverter)==null?void 0:y.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((B=e.inverter)==null?void 0:B.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((n=e.inverter)==null?void 0:n.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((i=e.inverter)==null?void 0:i.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((t=e.inverter)==null?void 0:t.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((a=e.inverter)==null?void 0:a.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((x=e.aux)==null?void 0:x.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((r=e.aux)==null?void 0:r.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((h=e.aux)==null?void 0:h.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((_=e.aux)==null?void 0:_.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((C=e.aux)==null?void 0:C.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((k=e.aux)==null?void 0:k.type)==="microinverter"&&(!((T=e.aux)!=null&&T.title)||((q=e.aux)==null?void 0:q.title)==="Вітрогенератор")?"Мікроінвертор":((z=e.aux)==null?void 0:z.title)||(((G=e.aux)==null?void 0:G.type)==="generator"?"Генератор":((N=e.aux)==null?void 0:N.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((M=e.aux)==null?void 0:M.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((Q=e.wind)==null?void 0:Q.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((re=e.wind)==null?void 0:re.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((ae=e.wind)==null?void 0:ae.animation_threshold)||((ge=e.aux)==null?void 0:ge.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((ue=e.wind)==null?void 0:ue.animation_threshold)||((A=e.aux)==null?void 0:A.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((j=e.wind)==null?void 0:j.turbine_count)||2}).map((H,$)=>{var I,J;const S=((J=(I=e.wind)==null?void 0:I.turbines)==null?void 0:J[$])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${$}" value="${S.name||`Вітряк ${$+1}`}" placeholder="Назва (напр. Вітряк ${$+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${$}" value="${S.power_entity||`sensor.wind_turbine_${$+1}_power`}" placeholder="sensor.wind_turbine_${$+1}_power">
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${$}" value="${S.speed_entity||`sensor.wind_turbine_${$+1}_speed`}" placeholder="sensor.wind_turbine_${$+1}_speed">
                  </div>
                </div>
              `}).join("")}
          </div>

          <div class="field-row" style="margin-top: 6px;">
            <label>Максимальна потужність для розрахунку швидкості (Вт):</label>
            <input type="number" id="windMaxPower" value="${((K=e.wind)==null?void 0:K.max_power)||3e3}">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab==="battery"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="field-row">
            <label>Рівень заряду Battery SOC (%) (сенсор):</label>
            <input type="text" id="batSoc" value="${((ee=e.battery)==null?void 0:ee.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((X=e.battery)==null?void 0:X.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((xe=e.battery)==null?void 0:xe.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((te=e.battery)==null?void 0:te.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((he=e.battery)==null?void 0:he.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((_e=e.battery)==null?void 0:_e.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Ee=e.battery)==null?void 0:Ee.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Be=e.battery)==null?void 0:Be.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ce=e.battery)==null?void 0:Ce.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Ie=e.battery)==null?void 0:Ie.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((Se=e.battery)==null?void 0:Se.parallel_batteries)||2}).map((H,$)=>{var ze,Ne,De,We;const S=$+1,I=((Ne=(ze=e.battery)==null?void 0:ze.modules)==null?void 0:Ne[$])||((We=(De=e.battery)==null?void 0:De.module_entities)==null?void 0:We[$])||{},J=`sensor.bms_rack${S}_soc`,le=`sensor.bms_rack${S}_current`,de=`sensor.bms_rack${S}_voltage`,ce=`sensor.bms_rack${S}_power`,pe=`sensor.bms_rack${S}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${S} (Модуль ${S})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${$}" value="${I.name||`Батарея ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${S} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${$}" value="${I.soc_entity!==void 0?I.soc_entity:I.soc!==void 0?I.soc:J}" placeholder="${J}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${S} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${$}" value="${I.current_entity!==void 0?I.current_entity:le}" placeholder="${le}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${S} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${$}" value="${I.voltage_entity!==void 0?I.voltage_entity:I.volt!==void 0?I.volt:de}" placeholder="${de}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${S} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${$}" value="${I.temperature_entity!==void 0?I.temperature_entity:I.temp!==void 0?I.temp:pe}" placeholder="${pe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${S} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${$}" value="${I.capacity_kwh!==void 0?I.capacity_kwh:S===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${S} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${$}" value="${I.power_entity!==void 0?I.power_entity:ce}" placeholder="${ce} (авто P = U × I)">
                    </div>
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
          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((Te=e.grid)==null?void 0:Te.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh" value="${((Pe=e.grid)==null?void 0:Pe.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh" value="${((Me=e.grid)==null?void 0:Me.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження (Авто / EV)</div>
          <div class="field-row">
            <label>Потужність зарядки авто / зовнішніх приладів:</label>
            <input type="text" id="gridCarPower" value="${((Ae=e.grid)==null?void 0:Ae.car_power_entity)||""}">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab==="loads"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор):</label>
            <input type="text" id="loadEssential" value="${((Fe=e.load)==null?void 0:Fe.essential_power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((Re=e.load)==null?void 0:Re.daily_house_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((Ve=e.load)==null?void 0:Ve.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Le=e.load)==null?void 0:Le.subloads)||[]).map((H,$)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${$}" value="${H.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${$}" style="width: 140px;">
                  <option value="boiler" ${H.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${H.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${H.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${H.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${H.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${H.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${H.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${$}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${$}" value="${H.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var u,v,w,l,E,s,m,y,B;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",i=>{this._switchTab(i.target.dataset.tab)})}),(u=e.getElementById("btnPresetEsp"))==null||u.addEventListener("click",()=>this._applyPreset("deye_esphome")),(v=e.getElementById("btnPresetSolarman"))==null||v.addEventListener("click",()=>this._applyPreset("deye_solarman"));const o=(n,i)=>{const t=e.getElementById(n);t&&t.addEventListener("input",a=>this._valueChanged(i,a.target.value))},d=(n,i)=>{const t=e.getElementById(n);t&&t.addEventListener("change",a=>this._valueChanged(i,a.target.checked))},g=(n,i,t,a="")=>{const x=e.getElementById(n);x&&x.addEventListener("input",r=>{const h=parseFloat(r.target.value);if(t){const _=e.getElementById(t);_&&(_.innerText=`${h}${a}`)}this._valueChanged(i,h)})};o("title","title"),d("animEnabled","animations.enabled"),g("animSpeed","animations.speed","animSpeedVal","s"),(w=e.getElementById("solarPvCount"))==null||w.addEventListener("input",n=>{const i=parseInt(n.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=i,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<i;){const t=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${t}`,name:`PV ${t}`,voltage_entity:`sensor.deye_12k_inverter_pv${t}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${t}_current`,power_entity:`sensor.deye_12k_inverter_pv${t}_power`})}this._valueChanged("solar.pv_count",i),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].name=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].voltage_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].current_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].power_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),o("solarTotalPower","solar.total_power_entity"),o("solarDailyYield","solar.daily_yield_entity"),g("solarTargetDaily","solar.target_daily_yield"),o("invModel","inverter.model_name"),o("invPower","inverter.power_entity"),o("invTempAc","inverter.ac_temperature_entity"),o("invTempDc","inverter.dc_temperature_entity"),o("invVolt","inverter.voltage_entity"),o("invCurrent","inverter.current_entity"),o("invFreq","inverter.frequency_entity"),(l=e.getElementById("auxType"))==null||l.addEventListener("change",n=>{const i=n.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=i;const a={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[i]||"Мікроінвертор";this._config.aux.title=a;const x=e.getElementById("auxTitle");x&&(x.value=a),this._valueChanged("aux.type",i),this._valueChanged("aux.title",a)}),o("auxTitle","aux.title"),o("auxPower","aux.power_entity"),(E=e.getElementById("windTurbineCount"))==null||E.addEventListener("input",n=>{const i=parseInt(n.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=i,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<i;){const t=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${t}`,name:`Вітряк ${t}`,power_entity:`sensor.wind_turbine_${t}_power`,speed_entity:`sensor.wind_turbine_${t}_speed`,animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",i),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),g("windThreshold","wind.animation_threshold","windThresholdVal","W"),(s=e.getElementById("windThreshold"))==null||s.addEventListener("input",n=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(n.target.value))}),g("windMaxPower","wind.max_power"),e.querySelectorAll(".turbine-name-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].name=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].power_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].speed_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),o("batSoc","battery.soc_entity"),o("batPower","battery.power_entity"),o("batVolt","battery.voltage_entity"),o("batCurrent","battery.current_entity"),o("batCapacity","battery.capacity_entity"),o("batChargeDaily","battery.charge_daily_entity"),o("batDischargeDaily","battery.discharge_daily_entity"),(m=e.getElementById("batParallelCount"))==null||m.addEventListener("input",n=>{const i=parseInt(n.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=i,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<i;){const t=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${t}`,name:`Батарея ${t}`,soc_entity:`sensor.bms_rack${t}_soc`,current_entity:`sensor.bms_rack${t}_current`,voltage_entity:`sensor.bms_rack${t}_voltage`,power_entity:`sensor.bms_rack${t}_power`,temperature_entity:`sensor.bms_rack${t}_temperature`})}this._valueChanged("battery.parallel_batteries",i),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].name=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].soc_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].current_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].voltage_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].temperature_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].power_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(n=>{n.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].capacity_kwh=parseFloat(i.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),o("gridPower","grid.power_entity"),o("gridImportDaily","grid.import_daily_entity"),o("gridExportDaily","grid.export_daily_entity"),o("gridCarPower","grid.car_power_entity"),o("loadEssential","load.essential_power_entity"),o("loadDailyHouse","load.daily_house_entity");const f=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const n=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${n}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(y=e.getElementById("btnAddSubload"))==null||y.addEventListener("click",f),(B=e.getElementById("btnAddSubloadBottom"))==null||B.addEventListener("click",f),e.querySelectorAll(".btn-del-subload").forEach(n=>{n.addEventListener("click",i=>{var x;const t=i.currentTarget||i.target.closest(".btn-del-subload"),a=parseInt(t.dataset.idx);(x=this._config.load)!=null&&x.subloads&&(this._config.load.subloads.splice(a,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(n=>{n.addEventListener("input",i=>{var a,x;const t=parseInt(i.target.dataset.idx);(x=(a=this._config.load)==null?void 0:a.subloads)!=null&&x[t]&&(this._config.load.subloads[t].name=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(n=>{n.addEventListener("change",i=>{var a,x;const t=parseInt(i.target.dataset.idx);(x=(a=this._config.load)==null?void 0:a.subloads)!=null&&x[t]&&(this._config.load.subloads[t].icon=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(n=>{n.addEventListener("input",i=>{var a,x;const t=parseInt(i.target.dataset.idx);(x=(a=this._config.load)==null?void 0:a.subloads)!=null&&x[t]&&(this._config.load.subloads[t].entity=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",At);class Ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(L))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=this._deepMerge(JSON.parse(JSON.stringify(L)),e),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,o){for(const d of Object.keys(o))o[d]instanceof Object&&!Array.isArray(o[d])&&d in e&&Object.assign(o[d],this._deepMerge(e[d],o[d]));return Object.assign(e||{},o),e}_getEntityState(e){var f;if(!this._hass||!e||!this._hass.states[e])return null;const o=this._hass.states[e],d=parseFloat(o.state),g=((f=o.attributes)==null?void 0:f.unit_of_measurement)||"";return{raw:o.state,val:isNaN(d)?0:d,unit:g,attributes:o.attributes}}_formatPower(e,o=0){if(!e)return{num:o.toFixed(3),kw:o,str:`${o.toFixed(3)} кВт`};let d=e.val;return e.unit==="W"&&(d=d/1e3),{num:d.toFixed(3),kw:d,str:`${d.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const o=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}_renderCardSkeleton(){var o,d,g,f,u,v,w,l,E,s,m,y,B,n;const e=this._config||L;this._initialized=!0,this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((o=e.animations)==null?void 0:o.speed)||1.2}s;
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
          padding: 14px 16px 20px 16px;
          transition: all 0.3s ease;
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
          gap: 6px;
          width: 100%;
          padding: 4px 0;
        }
        .es-pv-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px 12px;
          background: rgba(14, 23, 42, 0.85);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 12px;
          min-width: 84px;
          transition: all 0.2s ease;
        }
        .es-pv-top-row {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 2px;
        }
        .es-pv-label {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .es-pv-val {
          font-size: 13px;
          font-weight: 800;
          color: #fbbf24;
        }
        .es-pv-metrics {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          margin-top: 3px;
          padding-top: 3px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
          justify-content: center;
        }
        .es-pv-metrics .volt {
          color: #38bdf8;
          font-weight: 600;
        }
        .es-pv-metrics .sep {
          color: rgba(255, 255, 255, 0.25);
          font-size: 8px;
        }
        .es-pv-metrics .curr {
          color: #34d399;
          font-weight: 600;
        }

        /* Bus */
        .es-bus-container {
          width: 100%;
          max-width: 880px;
          height: 26px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tri-col hub */
        .es-hub-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr 1fr;
          gap: 16px;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          margin: 4px auto 14px auto;
          position: relative;
        }
        @media (max-width: 820px) {
          .es-hub-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .es-wing-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }
        .es-wing-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        @media (max-width: 820px) {
          .es-wing-left, .es-wing-right {
            align-items: center;
          }
        }

        .es-node-box {
          background: rgba(11, 20, 37, 0.85);
          border-radius: 14px;
          padding: 10px 14px;
          width: 195px;
          display: flex;
          flex-direction: column;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .es-inverter-card {
          width: 236px;
          padding: 14px;
          border-radius: 18px;
          background: linear-gradient(180deg, #18233a 0%, #0d1628 100%);
          border: 2px solid rgba(249, 115, 22, 0.7);
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          margin: 0 auto;
        }
        .es-inverter-model-tag {
          position: absolute;
          top: -11px;
          padding: 2px 10px;
          border-radius: 9999px;
          background: #090e1a;
          border: 1px solid rgba(249, 115, 22, 0.6);
          color: #fdba74;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .es-inverter-status-badge {
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.4);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin: 4px 0 8px 0;
        }

        .es-aux-box {
          margin-top: 12px;
          padding: 8px 14px;
          border-radius: 12px;
          background: rgba(88, 28, 135, 0.35);
          border: 1px solid rgba(192, 132, 252, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 180px;
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

        /* Sub-loads grid */
        .es-subloads-row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          flex-wrap: wrap;
          max-width: 280px;
        }

        .es-subload-card {
          padding: 6px 10px;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 72px;
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
          gap: 28px;
          padding: 12px 24px;
          border-radius: 16px;
          background: linear-gradient(90deg, rgba(6, 78, 59, 0.25) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(6, 78, 59, 0.25) 100%);
          border: 1px solid rgba(16, 185, 129, 0.4);
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .es-battery-rack {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          width: 100%;
        }
        .es-battery-pack-card {
          padding: 8px 12px;
          background: rgba(14, 23, 42, 0.85);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 148px;
          transition: all 0.25s ease;
          position: relative;
        }
        .es-battery-pack-card:hover {
          border-color: #34d399;
          transform: translateY(-2px);
        }
        .es-bat-temp {
          font-size: 11px;
          font-weight: 700;
          color: #fb7185;
          margin-bottom: 3px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .es-bat-main-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        .es-bat-soc-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .es-bat-soc-val {
          font-size: 22px;
          font-weight: 900;
          color: #f1f5f9;
          line-height: 1;
        }
        .es-bat-name {
          font-size: 9px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .es-battery-gauge {
          width: 26px;
          height: 46px;
          border: 2px solid #fb7185;
          border-radius: 5px;
          padding: 2px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 2px;
          position: relative;
          background: rgba(0, 0, 0, 0.4);
        }
        .es-battery-gauge-nipple {
          position: absolute;
          top: -6px;
          left: 6px;
          width: 10px;
          height: 4px;
          background: #fb7185;
          border-radius: 2px 2px 0 0;
        }
        .es-battery-gauge-body {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          gap: 2px;
        }
        .es-bat-bar {
          width: 100%;
          height: 8px;
          border-radius: 1px;
          background: rgba(255, 255, 255, 0.08);
          transition: background 0.3s;
        }
        .es-bat-bar.active-red { background: #ef4444; }
        .es-bat-bar.active-orange { background: #f97316; }
        .es-bat-bar.active-yellow { background: #eab308; }
        .es-bat-bar.active-green { background: #10b981; }

        .es-bat-telemetry-badge {
          background: rgba(8, 13, 25, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 4px 7px;
          display: flex;
          flex-direction: column;
          gap: 1px;
          font-size: 10px;
          text-align: right;
        }
        .es-bat-telemetry-badge .volt {
          color: #f1f5f9;
          font-weight: 700;
        }
        .es-bat-telemetry-badge .curr {
          color: #38bdf8;
          font-weight: 700;
        }
        .es-bat-telemetry-badge .power {
          color: #34d399;
          font-weight: 800;
        }
        .es-bat-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 6px;
          padding-top: 4px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 10px;
        }
        .es-bat-state-tag {
          font-size: 9px;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .es-bat-state-tag.charge {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .es-bat-state-tag.discharge {
          background: rgba(249, 115, 22, 0.15);
          color: #fb923c;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }
        .es-bat-state-tag.idle {
          background: rgba(148, 163, 184, 0.15);
          color: #94a3b8;
          border: 1px solid rgba(148, 163, 184, 0.3);
        }
        .es-bat-kwh {
          color: #cbd5e1;
          font-weight: 600;
        }

        .hidden { display: none !important; }
      </style>

      <div class="energy-station-container">
        
        <!-- FULL CARD DYNAMIC ENERGY FLOW NETWORK -->
        <svg id="energyFlowCanvas" class="es-energy-flow-canvas">
          <!-- 1. Grid <-> Inverter Path -->
          <path id="pathGridInvBase" class="flow-track" />
          <path id="pathGridInvFlow" class="flow-pulse flow-grid" />

          <!-- 2. Solar -> Inverter Path -->
          <path id="pathSolarInvBase" class="flow-track" />
          <path id="pathSolarInvFlow" class="flow-pulse flow-solar" />

          <!-- 3. Inverter -> Essential Loads Path -->
          <path id="pathInvLoadBase" class="flow-track" />
          <path id="pathInvLoadFlow" class="flow-pulse flow-load" />

          <!-- 4. Inverter <-> Battery Hub Path -->
          <path id="pathInvBatBase" class="flow-track" />
          <path id="pathInvBatFlow" class="flow-pulse flow-battery" />

          <!-- 5. Grid -> Car Path -->
          <path id="pathGridCarBase" class="flow-track" />
          <path id="pathGridCarFlow" class="flow-pulse flow-car" />

          <!-- 6. Wind Turbines -> Inverter Paths -->
          <path id="pathTurbine1Base" class="flow-track" />
          <path id="pathTurbine1Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine2Base" class="flow-track" />
          <path id="pathTurbine2Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine3Base" class="flow-track" />
          <path id="pathTurbine3Flow" class="flow-pulse flow-wind" />
          <path id="pathTurbine4Base" class="flow-track" />
          <path id="pathTurbine4Flow" class="flow-pulse flow-wind" />
        </svg>

        <!-- HEADER -->
        <div class="es-header">
          <div class="es-header-title">
            <span>${e.title||"Energy Station"}</span>
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
            <div class="es-mono" style="font-size: 16px; font-weight: 700; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((d=e.solar)==null?void 0:d.target_daily_yield)||55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 6px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
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
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">Сумарно PV</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 19px; font-weight: 800; color: #fbbf24;">
              12,000 кВт
            </div>
          </div>
        </div>

        <!-- CENTER TRI-COL HUB -->
        <div class="es-hub-grid">
          
          <!-- LEFT: GRID & CAR -->
          <div class="es-wing-left">
            <div class="es-mono" style="font-size: 12px; color: #cbd5e1; display: flex; flex-direction: column; gap: 2px;">
              <div>Імпорт: <span id="gridImportDaily" style="color: #38bdf8; font-weight: 700;">3,10 kWh</span></div>
              <div>Експорт: <span id="gridExportDaily" style="color: #34d399; font-weight: 700;">4,80 kWh</span></div>
            </div>

            <!-- Grid Box -->
            <div class="es-node-box glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; color: #38bdf8;">${Y.grid_tower}</div>
                <span style="font-weight: 700; font-size: 14px; color: #f8fafc;">Мережа</span>
              </div>
              <div class="es-mono" id="gridPowerVal" style="font-size: 20px; font-weight: 800; color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono" id="gridDirectionLabel" style="font-size: 11px; font-weight: 600; color: rgba(56, 189, 248, 0.85); text-transform: uppercase; margin-top: 2px;">
                ← Експорт
              </div>
            </div>

            <!-- Non-essential / Car -->
            <div class="es-node-box clickable-node" id="carNode" style="width: 195px; padding: 8px 12px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                <span style="font-size: 11px; color: #94a3b8; font-weight: 500;">Негарантоване</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 4px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <div style="width: 18px; height: 18px; color: #34d399;">${Y.car}</div>
                  <span style="font-size: 12px; color: #e2e8f0; font-weight: 600;">${((g=e.grid)==null?void 0:g.car_title)||"Авто"}</span>
                </div>
                <span class="es-mono" id="carPowerVal" style="font-size: 13px; font-weight: 700; color: #38bdf8;">1,000 кВт</span>
              </div>
            </div>
          </div>

          <!-- CENTER: HYBRID INVERTER & AUX -->
          <div style="display: flex; flex-direction: column; align-items: center; position: relative;">

            <!-- Temperature row -->
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 6px; font-size: 12px; font-weight: 600; color: #f59e0b;" class="es-mono">
              <div><span style="color: #94a3b8;">AC</span> <span id="inverterAcTemp">41,20</span> °C</div>
              <div><span style="color: #94a3b8;">DC</span> <span id="inverterDcTemp">38,40</span> °C</div>
            </div>

            <!-- Inverter Card -->
            <div class="es-inverter-card glow-inverter clickable-node" id="inverterNode">
              <div class="es-inverter-model-tag es-mono" id="inverterModelTag">${((f=e.inverter)==null?void 0:f.model_name)||"DEYE SUN-12K"}</div>
              <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; color: #fbbf24; margin: 4px 0 6px 0;">
                <div style="width: 26px; height: 26px;">${Y.inverter}</div>
              </div>
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #cbd5e1; font-weight: 600;">Гібридний інвертор</div>
              <div class="es-mono" id="inverterPowerVal" style="font-size: 24px; font-weight: 900; color: #fbbf24; margin: 2px 0;">8,000 кВт</div>
              <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
              
              <!-- Metrics grid -->
              <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 6px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 11px; color: #cbd5e1;" class="es-mono">
                <div><span style="color: #94a3b8;">U:</span> <span id="inverterVolt">231,45</span> V</div>
                <div><span style="color: #94a3b8;">I:</span> <span id="inverterCurrent">8,60</span> A</div>
                <div style="grid-column: span 2; color: #fde047;"><span style="color: #94a3b8;">Freq:</span> <span id="inverterFreq">50,01</span> Hz</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${!((u=e.wind)!=null&&u.show)&&((v=e.aux)==null?void 0:v.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>

            <!-- AUX Node (Microinverter / Generator when not in wind mode) -->
            <div class="es-aux-box glow-aux clickable-node ${((w=e.aux)==null?void 0:w.type)==="none"||((l=e.aux)==null?void 0:l.type)==="wind"?"hidden":""}" id="auxNode">
              <div style="display: flex; align-items: center; gap: 6px; color: #d8b4fe; font-size: 12px; font-weight: 600;" id="auxHeader">
                <div style="width: 18px; height: 18px;" id="auxIconBox">
                  ${Y[(E=e.aux)==null?void 0:E.type]||Y.microinverter}
                </div>
                <span id="auxTitle">${((s=e.aux)==null?void 0:s.type)==="microinverter"&&(!((m=e.aux)!=null&&m.title)||((y=e.aux)==null?void 0:y.title)==="Вітрогенератор")?"Мікроінвертор":((B=e.aux)==null?void 0:B.title)||"Мікроінвертор"}</span>
              </div>
              <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #e9d5ff; margin: 2px 0;">2,000 кВт</div>
              <div style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((n=e.aux)==null?void 0:n.subtitle)||"Джерело → GEN port"}</div>
            </div>

          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 12px; color: #cbd5e1;">
              Будинок (сьогодні): <span id="dailyHouseKwh" style="color: #2dd4bf; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Box -->
            <div class="es-node-box clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4); filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.35));">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <div style="width: 20px; height: 20px; color: #22d3ee;">${Y.house}</div>
                <span style="font-weight: 700; font-size: 14px; color: #f8fafc;">Гарантоване</span>
              </div>
              <div class="es-mono" id="essentialPowerVal" style="font-size: 20px; font-weight: 800; color: #22d3ee;">8,000 кВт</div>
              <div class="es-mono" style="font-size: 11px; font-weight: 600; color: rgba(34, 211, 238, 0.85); text-transform: uppercase; margin-top: 2px;">
                Essential Loads
              </div>
            </div>

            <!-- Subloads -->
            <div class="es-subloads-row" id="subloadsContainer"></div>
          </div>

        </div>

        <!-- BATTERY TELEMETRY & MULTI-PACK RACK -->
        <div class="es-battery-section">
          
          <!-- Master Battery Hub -->
          <div class="es-master-battery-hub glow-battery clickable-node" id="masterBatteryHub">
            <!-- Left Counters -->
            <div class="es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 4px; text-align: right;">
              <div>Заряд: <span id="batChargeDaily" style="color: #34d399; font-weight: 700;">4,30 kWh</span></div>
              <div>Розряд: <span id="batDischargeDaily" style="color: #fbbf24; font-weight: 700;">6,10 kWh</span></div>
            </div>

            <!-- Center SoC -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <div class="es-mono" id="masterBatterySoc" style="font-size: 30px; font-weight: 900; color: #34d399; margin: 0 0 2px 0;">80.0%</div>
              <div class="es-mono" id="masterBatteryFlowHint" style="font-size: 11px; color: #94a3b8;">
                <span>3,000 кВт</span> • <span style="color: #34d399;">Заряд ↓</span>
              </div>
            </div>

            <!-- Right Telemetry -->
            <div class="es-mono" style="font-size: 12px; display: flex; flex-direction: column; gap: 4px;">
              <div id="batVoltCurrent" style="color: #6ee7b7; font-weight: 700;">U: 53,24 V / I: -56,30 A</div>
              <div>Ємність: <span id="batCapacityVal" style="color: #f1f5f9; font-weight: 600;">13,00 kWh (12,80 kWh)</span></div>
            </div>
          </div>

          <!-- Battery Bus (Dynamic width based on battery count) -->
          <div class="es-bus-container" id="batteryBusContainer" style="width: 100%; max-width: 900px; height: 26px;">
            <svg id="batteryBusSvg" style="width: 100%; height: 100%; overflow: visible;" preserveAspectRatio="none">
              <line id="batteryBusBase" stroke="#059669" stroke-width="2" stroke-linecap="round" />
              <line id="batteryFlowCollector" class="flow-line" stroke="#34d399" stroke-width="2.5" />
              <g id="batteryBusFeeders"></g>
              <line id="batteryBusStemBase" stroke="#059669" stroke-width="2" />
              <line id="batteryBusStemFlow" class="flow-line" stroke="#34d399" stroke-width="2.5" />
            </svg>
          </div>

          <!-- Parallel Modules Rack -->
          <div class="es-battery-rack" id="batteryRackContainer"></div>

        </div>

      </div>
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltCurrent:e.getElementById("batVoltCurrent"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var w,l,E,s,m,y,B,n;const e=this._config||L,o=((w=this._nodes)==null?void 0:w.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!o)return;if(o.innerHTML="",!(((l=e.wind)==null?void 0:l.show)||((E=e.aux)==null?void 0:E.type)==="wind")){o.classList.add("hidden");return}o.classList.remove("hidden");const g=((s=e.wind)==null?void 0:s.turbine_count)||((y=(m=e.wind)==null?void 0:m.turbines)==null?void 0:y.length)||2,f=((B=e.wind)==null?void 0:B.turbines)||[],u=document.createElement("div");u.className="es-wind-summary-bar es-mono",u.id="windStationSummaryBar",u.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">5.90</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">109.2</span> kWh</span>
    `,o.appendChild(u);const v=document.createElement("div");v.className="es-wind-pods-row",o.appendChild(v);for(let i=0;i<g;i++){const t=f[i]||{name:`Вітряк ${i+1}`,power_entity:`sensor.wind_turbine_${i+1}_power`,animation_threshold:((n=e.wind)==null?void 0:n.animation_threshold)||50},a=document.createElement("div");a.className="es-turbine-card glow-wind clickable-node",a.id=`turbineCard_${i+1}`,a.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${i+1}">
              ${Y.wind_turbine}
            </div>
            <span>${t.name||`Вітряк ${i+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${i+1}">
            Генерація
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${i+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            ${(i===0?1.56:.22).toFixed(3)} кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${i+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9;">
            <span id="turbineRpmVal_${i+1}">${i===0?"480":"160"}</span> RPM
          </span>
        </div>

        <div class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: flex; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${i+1}" style="color: #6ee7b7; font-weight: 700;">${i===0?"4.80":"1.10"}</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${i+1}" style="color: #38bdf8; font-weight: 700;">${i===0?"86.4":"22.8"}</span> kWh</div>
        </div>
      `,a.addEventListener("click",()=>{this._fireMoreInfo(t.power_entity)}),v.appendChild(a)}}_renderDynamicPvPanels(){var g,f,u,v,w;const e=this._config||L,o=this._nodes.pvPanelsContainer;if(!o)return;o.innerHTML="";const d=((g=e.solar)==null?void 0:g.pv_count)||((u=(f=e.solar)==null?void 0:f.strings)==null?void 0:u.length)||3;for(let l=1;l<=d;l++){const E=l<10?`0${l}`:`${l}`,s=((w=(v=e.solar)==null?void 0:v.strings)==null?void 0:w[l-1])||{},m=s.name||`PV ${E}`,y=document.createElement("div");y.className="es-pv-panel glow-solar clickable-node",y.dataset.pvIndex=l,y.id=`pvPanel_${l}`,y.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 18px; height: 18px; color: #fbbf24;">${Y.pv_panel}</div>
          <span class="es-pv-label es-mono">${m}</span>
        </div>
        <span class="es-pv-val es-mono" id="pvVal_${l}">1,200 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${l}">
          <span class="volt" id="pvVolt_${l}">385.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${l}">3.12 A</span>
        </div>
      `,y.addEventListener("click",()=>{var n;const B=s.power_entity||s.voltage_entity||s.current_entity||((n=e.solar)==null?void 0:n.total_power_entity);this._fireMoreInfo(B)}),o.appendChild(y)}}_renderDynamicSubloads(){var g;const e=this._config||L,o=this._nodes.subloadsContainer;if(!o)return;o.innerHTML="",(((g=e.load)==null?void 0:g.subloads)||[]).forEach((f,u)=>{const v=document.createElement("div");v.className="es-subload-card clickable-node",v.innerHTML=`
        <div style="width: 18px; height: 18px; color: #22d3ee; margin-bottom: 2px;">${Y[f.icon]||Y.other}</div>
        <span style="font-size: 10px; color: #94a3b8; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 72px;">${f.name}</span>
        <span class="es-mono" id="subloadVal_${u}" style="font-size: 11px; font-weight: 700; color: #22d3ee;">2,000 кВт</span>
      `,v.addEventListener("click",()=>{this._fireMoreInfo(f.entity)}),o.appendChild(v)})}_renderDynamicBatteryRack(){var u,v,w,l,E,s,m;const e=this._config||L,o=this._nodes.batteryRackContainer;if(!o)return;o.innerHTML="";const d=((u=e.battery)==null?void 0:u.parallel_batteries)||((w=(v=e.battery)==null?void 0:v.modules)==null?void 0:w.length)||2,g=[42,43,76,85,90,68,72,80],f=[25,18,22.5,21,24,20,19.5,23];for(let y=1;y<=d;y++){const B=((E=(l=e.battery)==null?void 0:l.modules)==null?void 0:E[y-1])||((m=(s=e.battery)==null?void 0:s.module_entities)==null?void 0:m[y-1])||{},n=B.name||`Батарея ${y}`,i=g[(y-1)%g.length],t=f[(y-1)%f.length],a=document.createElement("div");a.className="es-battery-pack-card glow-battery clickable-node",a.id=`batPackCard_${y}`,a.innerHTML=`
        <!-- Temperature above the battery -->
        <div class="es-bat-temp es-mono" id="batPackTemp_${y}">
          <span>🌡️</span> <span id="batPackTempVal_${y}">${t.toFixed(1)}</span>°C
        </div>
        
        <div class="es-bat-main-row">
          <!-- Big SOC percentage & label -->
          <div class="es-bat-soc-col">
            <span class="es-bat-soc-val es-mono" id="batPackSoc_${y}">${i}%</span>
            <span class="es-bat-name">${n}</span>
          </div>

          <!-- Battery graphic with level bars -->
          <div class="es-battery-gauge">
            <div class="es-battery-gauge-nipple"></div>
            <div class="es-battery-gauge-body">
              <div class="es-bat-bar" id="batPackBar1_${y}"></div>
              <div class="es-bat-bar" id="batPackBar2_${y}"></div>
              <div class="es-bat-bar" id="batPackBar3_${y}"></div>
              <div class="es-bat-bar" id="batPackBar4_${y}"></div>
            </div>
          </div>

          <!-- Rounded Telemetry Badge (Voltage, Current, Power) -->
          <div class="es-bat-telemetry-badge es-mono">
            <div class="volt" id="batPackVolt_${y}">51.6 V</div>
            <div class="curr" id="batPackCurr_${y}">4.4 A</div>
            <div class="power" id="batPackPower_${y}">2.27 kW</div>
          </div>
        </div>

        <!-- Bottom energy / status tag -->
        <div class="es-bat-bottom-row es-mono">
          <span class="es-bat-state-tag charge" id="batPackStateTag_${y}">Заряд</span>
          <span class="es-bat-kwh" id="batPackKwh_${y}">7.88 kWh</span>
        </div>
      `,a.addEventListener("click",()=>{var r;const x=B.soc_entity||B.soc||B.voltage_entity||B.volt||B.current_entity||((r=e.battery)==null?void 0:r.soc_entity);this._fireMoreInfo(x)}),o.appendChild(a)}}_bindInteractions(){var d,g,f,u,v,w,l,E;const e=this.shadowRoot,o=this._config||L;(d=e.getElementById("solarHeaderNode"))==null||d.addEventListener("click",()=>{var s,m;this._fireMoreInfo(((s=o.solar)==null?void 0:s.daily_yield_entity)||((m=o.solar)==null?void 0:m.total_power_entity))}),(g=e.getElementById("totalPvPowerBadge"))==null||g.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.solar)==null?void 0:s.total_power_entity)}),(f=e.getElementById("gridNode"))==null||f.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.grid)==null?void 0:s.power_entity)}),(u=e.getElementById("carNode"))==null||u.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.grid)==null?void 0:s.car_power_entity)}),(v=e.getElementById("inverterNode"))==null||v.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.inverter)==null?void 0:s.power_entity)}),(w=e.getElementById("auxNode"))==null||w.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.aux)==null?void 0:s.power_entity)}),(l=e.getElementById("essentialNode"))==null||l.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.load)==null?void 0:s.essential_power_entity)}),(E=e.getElementById("masterBatteryHub"))==null||E.addEventListener("click",()=>{var s;this._fireMoreInfo((s=o.battery)==null?void 0:s.soc_entity)})}_updateValues(){var te,he,_e,Ee,Be,Ce,Ie,Se,Te,Pe,Me,Ae,Fe,Re,Ve,Le,H,$,S,I,J,le,de,ce,pe,ze,Ne,De,We,Qe,et,tt,it,ot,nt,st,rt,at,lt,dt,ct,pt,yt,gt,ut,ht,_t,bt,ft,vt,mt,wt,xt,kt,$t,Et,Bt,Ct,It,St,Tt;if(!this._nodes.dailySolarYield)return;const e=this._config||L,o=this._getEntityState((te=e.solar)==null?void 0:te.total_power_entity),d=this._formatPower(o,12);this._nodes.totalPvPowerBadge.innerText=d.str;const g=this._getEntityState((he=e.solar)==null?void 0:he.daily_yield_entity),f=g?g.val:48.6;this._nodes.dailySolarYield.innerText=f.toFixed(1);const u=((_e=e.solar)==null?void 0:_e.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=u.toFixed(1);const v=Math.min(100,Math.round(f/u*100));this._nodes.solarProgressBar.style.width=`${v}%`;const w=((Ee=e.solar)==null?void 0:Ee.pv_count)||((Ce=(Be=e.solar)==null?void 0:Be.strings)==null?void 0:Ce.length)||3,l=(d.kw/w).toFixed(3);for(let p=1;p<=w;p++){const D=this.shadowRoot.getElementById(`pvVal_${p}`),F=this.shadowRoot.getElementById(`pvVolt_${p}`),P=this.shadowRoot.getElementById(`pvCurr_${p}`),R=(Se=(Ie=e.solar)==null?void 0:Ie.strings)==null?void 0:Se[p-1],be=(R==null?void 0:R.voltage_entity)||`sensor.deye_12k_inverter_pv${p}_voltage`,b=(R==null?void 0:R.current_entity)||`sensor.deye_12k_inverter_pv${p}_current`,O=(R==null?void 0:R.power_entity)||`sensor.deye_12k_inverter_pv${p}_power`,U=this._getEntityState(be),V=this._getEntityState(b),ie=this._getEntityState(O);let Z=U?U.val:380+p*4.5,W=V?V.val:3.12+p*.28,oe=0;ie?oe=this._formatPower(ie).kw:U&&V?oe=U.val*V.val/1e3:oe=parseFloat(l),D&&(D.innerText=`${oe.toFixed(3)} кВт`),F&&(F.innerText=`${Z.toFixed(1)} V`),P&&(P.innerText=`${W.toFixed(2)} A`)}const E=this._getEntityState((Te=e.inverter)==null?void 0:Te.power_entity);this._nodes.inverterPowerVal.innerText=this._formatPower(E,8).str;const s=this._getEntityState((Pe=e.inverter)==null?void 0:Pe.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=s?s.val.toFixed(2):"41,20";const m=this._getEntityState((Me=e.inverter)==null?void 0:Me.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=m?m.val.toFixed(2):"38,40";const y=this._getEntityState((Ae=e.inverter)==null?void 0:Ae.voltage_entity);this._nodes.inverterVolt.innerText=y?y.val.toFixed(2):"231,45";const B=this._getEntityState((Fe=e.inverter)==null?void 0:Fe.current_entity);this._nodes.inverterCurrent.innerText=B?B.val.toFixed(2):"8,60";const n=this._getEntityState((Re=e.inverter)==null?void 0:Re.frequency_entity);this._nodes.inverterFreq.innerText=n?n.val.toFixed(2):"50,01";const i=((Ve=e.wind)==null?void 0:Ve.show)||((Le=e.aux)==null?void 0:Le.type)==="wind",t=this.shadowRoot.getElementById("windStationContainer"),a=this._nodes.auxNode;if(t)if(!i)t.classList.add("hidden");else{t.classList.remove("hidden");const p=((H=e.wind)==null?void 0:H.turbine_count)||((S=($=e.wind)==null?void 0:$.turbines)==null?void 0:S.length)||2,D=((I=e.wind)==null?void 0:I.turbines)||[];for(let b=0;b<p;b++){const O=D[b]||{power_entity:`sensor.wind_turbine_${b+1}_power`,rpm_entity:`sensor.wind_turbine_${b+1}_rpm`,daily_energy_entity:`sensor.wind_turbine_${b+1}_daily_energy`,monthly_energy_entity:`sensor.wind_turbine_${b+1}_monthly_energy`,animation_threshold:((J=e.wind)==null?void 0:J.animation_threshold)||50},U=this.shadowRoot.getElementById(`turbinePower_${b+1}`),V=this.shadowRoot.getElementById(`turbineStatus_${b+1}`),ie=this.shadowRoot.getElementById(`turbineIcon_${b+1}`),Z=this.shadowRoot.getElementById(`turbineCard_${b+1}`),W=this.shadowRoot.getElementById(`turbineRpmVal_${b+1}`),oe=this.shadowRoot.getElementById(`turbineDailyVal_${b+1}`),Oe=this.shadowRoot.getElementById(`turbineMonthlyVal_${b+1}`),Ke=b===0?1.56:.22,ke=this._getEntityState(O.power_entity),qe=this._formatPower(ke,Ke);U&&(U.innerText=qe.str);let fe=qe.kw*1e3;ke&&ke.unit==="W"&&(fe=ke.val);const ve=O.animation_threshold??((le=e.wind)==null?void 0:le.animation_threshold)??50,ne=ie==null?void 0:ie.querySelector(".turbine-rotor");if(fe>=ve){ne&&ne.classList.add("spinning"),Z&&(Z.classList.add("glow-wind"),Z.style.borderColor="rgba(6, 182, 212, 0.55)");const $e=((de=e.wind)==null?void 0:de.max_power)||3e3,Xe=(3.2-Math.min(1,Math.max(0,(fe-ve)/($e-ve)))*2.75).toFixed(2);ne&&ne.style.setProperty("--turbine-speed",`${Xe}s`),V&&(V.innerText="Генерація",V.style.color="#67e8f9")}else ne&&ne.classList.remove("spinning"),Z&&(Z.classList.remove("glow-wind"),Z.style.borderColor="rgba(255, 255, 255, 0.08)"),V&&(V.innerText="Штиль",V.style.color="#94a3b8");const He=this._getEntityState(O.rpm_entity||O.speed_entity);if(W)if(He)W.innerText=Math.round(He.val);else{const $e=b===0?480:160;W.innerText=fe>=ve?$e:0}const je=this._getEntityState(O.daily_energy_entity);oe&&(oe.innerText=je?je.val.toFixed(2):b===0?"4.80":"1.10");const se=this._getEntityState(O.monthly_energy_entity);Oe&&(Oe.innerText=se?se.val.toFixed(1):b===0?"86.4":"22.8")}let F=0,P=0;for(let b=0;b<p;b++){const O=D[b]||{},U=this._getEntityState(O.daily_energy_entity),V=this._getEntityState(O.monthly_energy_entity);F+=U?U.val:b===0?4.8:1.1,P+=V?V.val:b===0?86.4:22.8}const R=this.shadowRoot.getElementById("windTotalDailyVal"),be=this.shadowRoot.getElementById("windTotalMonthlyVal");if(R){const b=this._getEntityState((ce=e.wind)==null?void 0:ce.daily_energy_entity);R.innerText=b?b.val.toFixed(2):F.toFixed(2)}if(be){const b=this._getEntityState((pe=e.wind)==null?void 0:pe.monthly_energy_entity);be.innerText=b?b.val.toFixed(1):P.toFixed(1)}}if(a)if(((ze=e.aux)==null?void 0:ze.type)==="none"||((Ne=e.aux)==null?void 0:Ne.type)==="wind")a.classList.add("hidden");else{a.classList.remove("hidden");const p=this._getEntityState((De=e.aux)==null?void 0:De.power_entity),D=this._formatPower(p,2);this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=D.str);const F={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let P=(We=e.aux)==null?void 0:We.title;((Qe=e.aux)==null?void 0:Qe.type)==="microinverter"&&(!P||P==="Вітрогенератор")?P="Мікроінвертор":(et=e.aux)!=null&&et.type&&F[e.aux.type]&&(!P||P==="Вітрогенератор")?P=F[e.aux.type]:P||(P="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=P),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=Y[(tt=e.aux)==null?void 0:tt.type]||Y.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((it=e.aux)==null?void 0:it.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),a.style.borderColor="rgba(192, 132, 252, 0.45)",a.style.background="rgba(88, 28, 135, 0.35)",a.classList.remove("glow-wind"),a.classList.add("glow-aux")}const x=this._getEntityState((ot=e.grid)==null?void 0:ot.power_entity),r=x?x.unit==="W"?x.val/1e3:x.val:2,h=r>=0;this._nodes.gridPowerVal.innerText=`${Math.abs(r).toFixed(3)} кВт`,this._nodes.gridDirectionLabel.innerText=h?"← Експорт":"→ Імпорт";const _=this._getEntityState((nt=e.grid)==null?void 0:nt.import_daily_entity);this._nodes.gridImportDaily.innerText=_?`${_.val.toFixed(2)} kWh`:"3,10 kWh";const C=this._getEntityState((st=e.grid)==null?void 0:st.export_daily_entity);this._nodes.gridExportDaily.innerText=C?`${C.val.toFixed(2)} kWh`:"4,80 kWh";const k=this._getEntityState((rt=e.grid)==null?void 0:rt.car_power_entity);this._nodes.carPowerVal.innerText=this._formatPower(k,1).str;const T=this._getEntityState((at=e.load)==null?void 0:at.essential_power_entity);this._nodes.essentialPowerVal.innerText=this._formatPower(T,8).str;const q=this._getEntityState((lt=e.load)==null?void 0:lt.daily_house_entity);this._nodes.dailyHouseKwh.innerText=q?`${q.val.toFixed(2)} kWh`:"12,40 kWh",(((dt=e.load)==null?void 0:dt.subloads)||[]).forEach((p,D)=>{const F=this.shadowRoot.getElementById(`subloadVal_${D}`);if(F){const P=this._getEntityState(p.entity);F.innerText=this._formatPower(P,2+D).str}});const z=this._getEntityState((ct=e.battery)==null?void 0:ct.soc_entity),G=z?z.val:80;this._nodes.masterBatterySoc.innerText=`${G.toFixed(1)}%`;const N=this._getEntityState((pt=e.battery)==null?void 0:pt.power_entity),M=N?N.unit==="W"?N.val/1e3:N.val:3,Q=M>=0;this._nodes.masterBatteryFlowHint.innerHTML=`<span>${Math.abs(M).toFixed(3)} кВт</span> • <span style="color: ${Q?"#34d399":"#fbbf24"};">${Q?"Заряд ↓":"Розряд ↑"}</span>`;const re=this._getEntityState((yt=e.battery)==null?void 0:yt.voltage_entity),ae=this._getEntityState((gt=e.battery)==null?void 0:gt.current_entity),ge=re?re.val.toFixed(2):"53,24",ue=ae?ae.val.toFixed(2):"-56,30";this._nodes.batVoltCurrent.innerText=`U: ${ge} V / I: ${ue} A`;const A=((ut=e.battery)==null?void 0:ut.parallel_batteries)||((_t=(ht=e.battery)==null?void 0:ht.modules)==null?void 0:_t.length)||2;let j=0;for(let p=0;p<A;p++){const D=((ft=(bt=e.battery)==null?void 0:bt.modules)==null?void 0:ft[p])||((mt=(vt=e.battery)==null?void 0:vt.module_entities)==null?void 0:mt[p])||{},F=D.capacity_kwh!==void 0?parseFloat(D.capacity_kwh):p===0?7.88:p===1?5.12:(((wt=e.battery)==null?void 0:wt.capacity_kwh)||13)/A;j+=isNaN(F)?0:F}j<=0&&(j=parseFloat((xt=e.battery)==null?void 0:xt.capacity_kwh)||13);const K=this._getEntityState(((kt=e.battery)==null?void 0:kt.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),ee=K&&!isNaN(K.val)?K.val:null;this._nodes.batCapacityVal&&(ee!==null?this._nodes.batCapacityVal.innerText=`${j.toFixed(2)} kWh (${ee.toFixed(2)} kWh)`:this._nodes.batCapacityVal.innerText=`${j.toFixed(2)} kWh`);const X=this._getEntityState(($t=e.battery)==null?void 0:$t.charge_daily_entity);this._nodes.batChargeDaily.innerText=X?`${X.val.toFixed(2)} kWh`:"4,30 kWh";const xe=this._getEntityState((Et=e.battery)==null?void 0:Et.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=xe?`${xe.val.toFixed(2)} kWh`:"6,10 kWh";for(let p=1;p<=A;p++){const D=this.shadowRoot.getElementById(`batPackSoc_${p}`),F=this.shadowRoot.getElementById(`batPackVolt_${p}`),P=this.shadowRoot.getElementById(`batPackCurr_${p}`),R=this.shadowRoot.getElementById(`batPackPower_${p}`),be=this.shadowRoot.getElementById(`batPackTempVal_${p}`),b=this.shadowRoot.getElementById(`batPackStateTag_${p}`),O=this.shadowRoot.getElementById(`batPackKwh_${p}`),U=this.shadowRoot.getElementById(`batPackBar1_${p}`),V=this.shadowRoot.getElementById(`batPackBar2_${p}`),ie=this.shadowRoot.getElementById(`batPackBar3_${p}`),Z=this.shadowRoot.getElementById(`batPackBar4_${p}`),W=((Ct=(Bt=e.battery)==null?void 0:Bt.modules)==null?void 0:Ct[p-1])||((St=(It=e.battery)==null?void 0:It.module_entities)==null?void 0:St[p-1])||{},oe=W.soc_entity||W.soc||`sensor.bms_rack${p}_soc`,Oe=W.current_entity||`sensor.bms_rack${p}_current`,Ke=W.voltage_entity||W.volt||`sensor.bms_rack${p}_voltage`,ke=W.power_entity||`sensor.bms_rack${p}_power`,qe=W.temperature_entity||W.temp||`sensor.bms_rack${p}_temperature`,fe=this._getEntityState(oe),ve=this._getEntityState(Oe),ne=this._getEntityState(Ke),He=this._getEntityState(ke),je=this._getEntityState(qe),se=fe?fe.val:p===1?42:p===2?43:75,$e=ne?ne.val:p===1?51.6:p===2?51.8:52.4,Ge=ve?ve.val:p===1?4.4:p===2?19.6:8.2,Xe=je?je.val:p===1?25:p===2?18:21.5;let Je=0;He?Je=this._formatPower(He).kw:Je=$e*Math.abs(Ge)/1e3,D&&(D.innerText=`${se.toFixed(0)}%`),F&&(F.innerText=`${$e.toFixed(1)} V`),P&&(P.innerText=`${Math.abs(Ge).toFixed(1)} A`),R&&(R.innerText=`${Je.toFixed(2)} kW`),be&&(be.innerText=`${Xe.toFixed(1)}`);const me=Ge>=0,ye=this.shadowRoot.getElementById(`batPackCard_${p}`),Pt=ye==null?void 0:ye.querySelector(".es-battery-gauge"),Mt=ye==null?void 0:ye.querySelector(".es-battery-gauge-nipple");ye&&(ye.style.borderColor=me?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),Pt&&(Pt.style.borderColor=me?"#10b981":"#ef4444"),Mt&&(Mt.style.background=me?"#10b981":"#ef4444"),b&&(me?(b.className="es-bat-state-tag charge",b.innerText="Заряд",b.style.color="#34d399",b.style.background="rgba(16, 185, 129, 0.18)",b.style.borderColor="rgba(16, 185, 129, 0.4)"):(b.className="es-bat-state-tag discharge",b.innerText="Розряд",b.style.color="#f87171",b.style.background="rgba(239, 68, 68, 0.18)",b.style.borderColor="rgba(239, 68, 68, 0.4)")),R&&(R.style.color=me?"#34d399":"#f87171"),P&&(P.style.color=me?"#38bdf8":"#f87171");const Ft=((W.capacity_kwh!==void 0?parseFloat(W.capacity_kwh):(((Tt=e.battery)==null?void 0:Tt.capacity_kwh)||10)/A)*(se/100)).toFixed(2);O&&(O.innerText=`${Ft} kWh`);const Ue=me?"active-green":"active-red";U&&V&&ie&&Z&&(U.className=`es-bat-bar ${se>=10?Ue:""}`,V.className=`es-bat-bar ${se>=35?Ue:""}`,ie.className=`es-bat-bar ${se>=65?Ue:""}`,Z.className=`es-bat-bar ${se>=85?Ue:""}`)}this._updateFlowPaths(),this._updateFlowAnimations(r,h,d.kw,T?T.unit==="W"?T.val/1e3:T.val:8,M,Q,k?k.unit==="W"?k.val/1e3:k.val:1)}_setupResizeObserver(){var o;if(this._resizeObserver)return;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,o,d,g,f,u;try{const v=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!v)return;const w=v.getBoundingClientRect();if(w.width===0||w.height===0)return;const l=(r,h=.5,_=.5)=>{if(!r)return null;const C=r.getBoundingClientRect();return{x:Math.round(C.left-w.left+C.width*h),y:Math.round(C.top-w.top+C.height*_)}},E=(r,h,_)=>{const C=this.shadowRoot.getElementById(r),k=this.shadowRoot.getElementById(h);C&&C.setAttribute("d",_||""),k&&k.setAttribute("d",_||"")},s=this.shadowRoot.getElementById("gridNode"),m=this.shadowRoot.getElementById("inverterNode"),y=this.shadowRoot.getElementById("essentialNode"),B=this.shadowRoot.getElementById("totalPvPowerBadge"),n=this.shadowRoot.getElementById("masterBatteryHub"),i=this.shadowRoot.getElementById("carNode");if(s&&m){const r=l(s,1,.45),h=l(m,0,.35);if(r&&h){const _=Math.round((r.x+h.x)/2),C=`M ${r.x} ${r.y} C ${_} ${r.y}, ${_} ${h.y}, ${h.x} ${h.y}`;E("pathGridInvBase","pathGridInvFlow",C)}}if(m&&y){const r=l(m,1,.35),h=l(y,0,.45);if(r&&h){const _=Math.round((r.x+h.x)/2),C=`M ${r.x} ${r.y} C ${_} ${r.y}, ${_} ${h.y}, ${h.x} ${h.y}`;E("pathInvLoadBase","pathInvLoadFlow",C)}}if(B&&m){const r=l(B,.5,1),h=l(m,.5,0);if(r&&h){const _=`M ${r.x} ${r.y} L ${h.x} ${h.y}`;E("pathSolarInvBase","pathSolarInvFlow",_)}}if(m&&n){const r=l(m,.5,1),h=l(n,.5,0);if(r&&h){const _=`M ${r.x} ${r.y} L ${h.x} ${h.y}`;E("pathInvBatBase","pathInvBatFlow",_)}}if(s&&i&&i.offsetHeight>0){const r=l(s,.5,1),h=l(i,.5,0);if(r&&h){const _=`M ${r.x} ${r.y} L ${h.x} ${h.y}`;E("pathGridCarBase","pathGridCarFlow",_)}}const t=this.shadowRoot.getElementById("windStationContainer"),x=((o=c.wind)==null?void 0:o.show)||((d=c.aux)==null?void 0:d.type)==="wind"?((g=c.wind)==null?void 0:g.turbine_count)||((u=(f=c.wind)==null?void 0:f.turbines)==null?void 0:u.length)||2:0;for(let r=1;r<=4;r++)if(r<=x&&t&&!t.classList.contains("hidden")){const h=this.shadowRoot.getElementById(`turbineCard_${r}`);if(h&&n){const _=l(h,.5,1),C=x===1?.5:.28+(r-1)/(x-1)*.44,k=l(n,C,0);if(_&&k){const T=`M ${_.x} ${_.y} L ${k.x} ${k.y}`;E(`pathTurbine${r}Base`,`pathTurbine${r}Flow`,T)}}else E(`pathTurbine${r}Base`,`pathTurbine${r}Flow`,"")}else E(`pathTurbine${r}Base`,`pathTurbine${r}Flow`,"");this._updateBusBars()}catch{}}_updateBusBars(){var e,o,d,g,f,u;try{const v=this._config||L,w=this.shadowRoot.getElementById("solarBusSvg"),l=((e=v.solar)==null?void 0:e.pv_count)||((d=(o=v.solar)==null?void 0:o.strings)==null?void 0:d.length)||3;if(w&&l>0){const m=w.getBoundingClientRect(),y=this.shadowRoot.getElementById("pvPanel_1"),B=this.shadowRoot.getElementById(`pvPanel_${l}`),n=this.shadowRoot.getElementById("solarBusBase"),i=this.shadowRoot.getElementById("solarFlowCollector"),t=this.shadowRoot.getElementById("solarBusStemBase"),a=this.shadowRoot.getElementById("solarBusStemFlow"),x=this.shadowRoot.getElementById("solarBusFeeders");if(y&&B&&m.width>0){const r=y.getBoundingClientRect(),h=B.getBoundingClientRect(),_=Math.round(r.left-m.left+r.width/2),C=Math.round(h.left-m.left+h.width/2),k=13,T=Math.round((_+C)/2);if(n&&(n.setAttribute("x1",_),n.setAttribute("y1",k),n.setAttribute("x2",C),n.setAttribute("y2",k)),i&&(i.setAttribute("x1",_),i.setAttribute("y1",k),i.setAttribute("x2",C),i.setAttribute("y2",k)),t&&(t.setAttribute("x1",T),t.setAttribute("y1",k),t.setAttribute("x2",T),t.setAttribute("y2",26)),a&&(a.setAttribute("x1",T),a.setAttribute("y1",k),a.setAttribute("x2",T),a.setAttribute("y2",26)),x){let q="";for(let z=1;z<=l;z++){const G=this.shadowRoot.getElementById(`pvPanel_${z}`);if(G){const N=G.getBoundingClientRect(),M=Math.round(N.left-m.left+N.width/2);q+=`
                  <line x1="${M}" y1="0" x2="${M}" y2="${k}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${M}" y1="0" x2="${M}" y2="${k}" stroke="#fbbf24" stroke-width="2.5" />
                `}}x.innerHTML=q}}}const E=this.shadowRoot.getElementById("batteryBusSvg"),s=((g=v.battery)==null?void 0:g.parallel_batteries)||((u=(f=v.battery)==null?void 0:f.modules)==null?void 0:u.length)||2;if(E&&s>0){const m=E.getBoundingClientRect(),y=this.shadowRoot.getElementById("batPackCard_1"),B=this.shadowRoot.getElementById(`batPackCard_${s}`),n=this.shadowRoot.getElementById("batteryBusBase"),i=this.shadowRoot.getElementById("batteryFlowCollector"),t=this.shadowRoot.getElementById("batteryBusStemBase"),a=this.shadowRoot.getElementById("batteryBusStemFlow"),x=this.shadowRoot.getElementById("batteryBusFeeders");if(y&&B&&m.width>0){const r=y.getBoundingClientRect(),h=B.getBoundingClientRect(),_=Math.round(r.left-m.left+r.width/2),C=Math.round(h.left-m.left+h.width/2),k=13,T=Math.round((_+C)/2);if(n&&(n.setAttribute("x1",_),n.setAttribute("y1",k),n.setAttribute("x2",C),n.setAttribute("y2",k)),i&&(i.setAttribute("x1",_),i.setAttribute("y1",k),i.setAttribute("x2",C),i.setAttribute("y2",k)),t&&(t.setAttribute("x1",T),t.setAttribute("y1",0),t.setAttribute("x2",T),t.setAttribute("y2",k)),a&&(a.setAttribute("x1",T),a.setAttribute("y1",0),a.setAttribute("x2",T),a.setAttribute("y2",k)),x){let q="";for(let z=1;z<=s;z++){const G=this.shadowRoot.getElementById(`batPackCard_${z}`);if(G){const N=G.getBoundingClientRect(),M=Math.round(N.left-m.left+N.width/2);q+=`
                  <line x1="${M}" y1="${k}" x2="${M}" y2="26" stroke="#059669" stroke-width="2" />
                  <line class="flow-line" x1="${M}" y1="${k}" x2="${M}" y2="26" stroke="#34d399" stroke-width="2.5" />
                `}}x.innerHTML=q}}}}catch{}}_applyFlowAnimation(e,o,d,g,f){if(!e)return;if(!f){e.setAttribute("class",`flow-pulse ${o} inactive`),e.style.opacity="0",e.style.animation="none";return}const u=d?"flow-reverse":"flow-forward",v=d?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${o} ${u}`),e.style.opacity="1",e.style.setProperty("--flow-speed",g),e.style.animation=`${v} ${g} linear infinite`}_updateFlowAnimations(e,o,d,g,f,u,v){var z,G,N,M,Q,re,ae,ge,ue;const w=this._config||L,l=((z=w.animations)==null?void 0:z.enabled)!==!1,E=((G=w.animations)==null?void 0:G.speed)||1.2,s=(A,j=10)=>{const K=Math.abs(A);if(K<.05)return"2.5s";const ee=Math.min(1,K/j);return`${Math.max(.4,(2.6-ee*1.9)*(E/1.2)).toFixed(2)}s`},m=this.shadowRoot.getElementById("pathGridInvFlow"),y=Math.abs(e);this._applyFlowAnimation(m,"flow-grid",o,s(e,10),l&&y>=.05);const B=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(B,"flow-solar",!1,s(d,12),l&&d>=.05);const n=this.shadowRoot.getElementById("pathInvLoadFlow"),i=Math.abs(g);this._applyFlowAnimation(n,"flow-load",!1,s(g,10),l&&i>=.05);const t=this.shadowRoot.getElementById("pathInvBatFlow"),a=Math.abs(f),x=u?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(t,x,!u,s(f,8),l&&a>=.05);const r=this.shadowRoot.getElementById("pathGridCarFlow"),h=Math.abs(v);this._applyFlowAnimation(r,"flow-car",!1,s(v,7),l&&h>=.05);const _=this.shadowRoot.getElementById("batteryFlowCollector");if(_)if(!l||a<.05)_.style.opacity="0.2",_.style.animation="none";else{_.style.opacity="1";const A=u?"esDashflow":"esDashflowRev";_.setAttribute("class",u?"flow-line":"flow-line-reverse"),_.style.stroke=u?"#34d399":"#f87171",_.style.animation=`${A} ${s(f,8)} linear infinite`}const C=this.shadowRoot.getElementById("solarFlowCollector");C&&(!l||d<.05?(C.style.opacity="0.2",C.style.animation="none"):(C.style.opacity="1",C.setAttribute("class","flow-line"),C.style.animation=`esDashflow ${s(d,12)} linear infinite`));const k=((N=w.wind)==null?void 0:N.show)||((M=w.aux)==null?void 0:M.type)==="wind",T=k?((Q=w.wind)==null?void 0:Q.turbine_count)||((ae=(re=w.wind)==null?void 0:re.turbines)==null?void 0:ae.length)||2:0,q=((ge=w.wind)==null?void 0:ge.turbines)||[];for(let A=1;A<=4;A++){const j=this.shadowRoot.getElementById(`pathTurbine${A}Flow`);if(j)if(A<=T&&k){const K=q[A-1]||{},ee=A===1?1.45:.85,X=this._getEntityState(K.power_entity||`sensor.wind_turbine_${A}_power`);let te=this._formatPower(X,ee).kw*1e3;X&&X.unit==="W"&&(te=X.val);const he=K.animation_threshold??((ue=w.wind)==null?void 0:ue.animation_threshold)??50,_e=te>=he;this._applyFlowAnimation(j,"flow-wind",!1,s(te/1e3,3),l&&_e)}else this._applyFlowAnimation(j,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",Ze),window.customCards=window.customCards||[],window.customCards.some(Ye=>Ye.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),we.EnergyStationCard=Ze,Object.defineProperty(we,Symbol.toStringTag,{value:"Module"})});
