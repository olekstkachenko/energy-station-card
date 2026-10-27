(function(we,L){typeof exports=="object"&&typeof module<"u"?L(exports):typeof define=="function"&&define.amd?define(["exports"],L):(we=typeof globalThis<"u"?globalThis:we||self,L(we.EnergyStationCard={}))})(this,function(we){"use strict";const L={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"sensor.deye_12k_inverter_inverter_power",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,color:"#06b6d4",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",rpm_entity:"sensor.wind_turbine_1_rpm",daily_energy_entity:"sensor.wind_turbine_1_daily_energy",monthly_energy_entity:"sensor.wind_turbine_1_monthly_energy",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",rpm_entity:"sensor.wind_turbine_2_rpm",daily_energy_entity:"sensor.wind_turbine_2_daily_energy",monthly_energy_entity:"sensor.wind_turbine_2_monthly_energy",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",invert_power:!1,show_car:!0,car_power_entity:"sensor.ev_charger_power",car_title:"Авто",color:"#38bdf8"},load:{show:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},K={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`};class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||L)),this.render()}connectedCallback(){this.render()}_valueChanged(e,o){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const d=e.split(".");let p=this._config;for(let u=0;u<d.length-1;u++)p[d[u]]||(p[d[u]]={}),p=p[d[u]];p[d[d.length-1]]=o;const h=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(h)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||L)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const o=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(o),this.render()}render(){var o,d,p,h,u,f,x,l,$,r,m,g,E,n,t,i,y,w,a,_,b,B,C,A,N,D,j,Y,M,ie,oe,ae,le,ue,W,J,q,ee,Z,xe,ne,he,_e,Ee,Be,Ce,Se,Ie,Te,Pe,Ae,Me,Fe,Re,Ve,Le;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((p=e.animations)==null?void 0:p.speed)||1.2}s</span>
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((h=e.solar)==null?void 0:h.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((u=e.solar)==null?void 0:u.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((f=e.solar)==null?void 0:f.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((x=e.solar)==null?void 0:x.daily_yield_entity)||""}">
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
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${(($=e.solar)==null?void 0:$.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((r=e.solar)==null?void 0:r.pv_count)||3}).map((H,k)=>{var pe,ye;const I=k+1,S=((ye=(pe=e.solar)==null?void 0:pe.strings)==null?void 0:ye[k])||{},Q=`sensor.deye_12k_inverter_pv${I}_voltage`,de=`sensor.deye_12k_inverter_pv${I}_current`,ce=`sensor.deye_12k_inverter_pv${I}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${I} (Стрінг ${I})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${k}" value="${S.name||`PV ${I}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${I} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${k}" value="${S.voltage_entity!==void 0?S.voltage_entity:Q}" placeholder="${Q}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${I} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${k}" value="${S.current_entity!==void 0?S.current_entity:de}" placeholder="${de}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${I} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${k}" value="${S.power_entity!==void 0?S.power_entity:ce}" placeholder="${ce} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invPower" value="${((g=e.inverter)==null?void 0:g.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((E=e.inverter)==null?void 0:E.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((n=e.inverter)==null?void 0:n.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((t=e.inverter)==null?void 0:t.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((i=e.inverter)==null?void 0:i.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((y=e.inverter)==null?void 0:y.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((w=e.aux)==null?void 0:w.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((a=e.aux)==null?void 0:a.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((_=e.aux)==null?void 0:_.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((b=e.aux)==null?void 0:b.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((B=e.aux)==null?void 0:B.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((C=e.aux)==null?void 0:C.type)==="microinverter"&&(!((A=e.aux)!=null&&A.title)||((N=e.aux)==null?void 0:N.title)==="Вітрогенератор")?"Мікроінвертор":((D=e.aux)==null?void 0:D.title)||(((j=e.aux)==null?void 0:j.type)==="generator"?"Генератор":((Y=e.aux)==null?void 0:Y.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((ie=e.wind)==null?void 0:ie.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((oe=e.wind)==null?void 0:oe.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((ae=e.wind)==null?void 0:ae.animation_threshold)||((le=e.aux)==null?void 0:le.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((ue=e.wind)==null?void 0:ue.animation_threshold)||((W=e.aux)==null?void 0:W.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((J=e.wind)==null?void 0:J.turbine_count)||2}).map((H,k)=>{var S,Q;const I=((Q=(S=e.wind)==null?void 0:S.turbines)==null?void 0:Q[k])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${k}" value="${I.name||`Вітряк ${k+1}`}" placeholder="Назва (напр. Вітряк ${k+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${k}" value="${I.power_entity||`sensor.wind_turbine_${k+1}_power`}" placeholder="sensor.wind_turbine_${k+1}_power">
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${k}" value="${I.speed_entity||`sensor.wind_turbine_${k+1}_speed`}" placeholder="sensor.wind_turbine_${k+1}_speed">
                  </div>
                </div>
              `}).join("")}
          </div>

          <div class="field-row" style="margin-top: 6px;">
            <label>Максимальна потужність для розрахунку швидкості (Вт):</label>
            <input type="number" id="windMaxPower" value="${((q=e.wind)==null?void 0:q.max_power)||3e3}">
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
            <input type="text" id="batPower" value="${((Z=e.battery)==null?void 0:Z.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((xe=e.battery)==null?void 0:xe.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((ne=e.battery)==null?void 0:ne.current_entity)||""}">
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
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Se=e.battery)==null?void 0:Se.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((Ie=e.battery)==null?void 0:Ie.parallel_batteries)||2}).map((H,k)=>{var ze,Ne,De,We;const I=k+1,S=((Ne=(ze=e.battery)==null?void 0:ze.modules)==null?void 0:Ne[k])||((We=(De=e.battery)==null?void 0:De.module_entities)==null?void 0:We[k])||{},Q=`sensor.bms_rack${I}_soc`,de=`sensor.bms_rack${I}_current`,ce=`sensor.bms_rack${I}_voltage`,pe=`sensor.bms_rack${I}_power`,ye=`sensor.bms_rack${I}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${I} (Модуль ${I})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${k}" value="${S.name||`Батарея ${I}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${I} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${k}" value="${S.soc_entity!==void 0?S.soc_entity:S.soc!==void 0?S.soc:Q}" placeholder="${Q}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${I} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${k}" value="${S.current_entity!==void 0?S.current_entity:de}" placeholder="${de}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${I} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${k}" value="${S.voltage_entity!==void 0?S.voltage_entity:S.volt!==void 0?S.volt:ce}" placeholder="${ce}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${I} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${k}" value="${S.temperature_entity!==void 0?S.temperature_entity:S.temp!==void 0?S.temp:ye}" placeholder="${ye}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${I} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${k}" value="${S.capacity_kwh!==void 0?S.capacity_kwh:I===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${I} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${k}" value="${S.power_entity!==void 0?S.power_entity:pe}" placeholder="${pe} (авто P = U × I)">
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
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh" value="${((Ae=e.grid)==null?void 0:Ae.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження (Авто / EV)</div>
          <div class="field-row">
            <label>Потужність зарядки авто / зовнішніх приладів:</label>
            <input type="text" id="gridCarPower" value="${((Me=e.grid)==null?void 0:Me.car_power_entity)||""}">
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

          ${(((Le=e.load)==null?void 0:Le.subloads)||[]).map((H,k)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${k}" value="${H.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${k}" style="width: 140px;">
                  <option value="boiler" ${H.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${H.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${H.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${H.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${H.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${H.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${H.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${k}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${k}" value="${H.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var u,f,x,l,$,r,m,g,E;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",t=>{this._switchTab(t.target.dataset.tab)})}),(u=e.getElementById("btnPresetEsp"))==null||u.addEventListener("click",()=>this._applyPreset("deye_esphome")),(f=e.getElementById("btnPresetSolarman"))==null||f.addEventListener("click",()=>this._applyPreset("deye_solarman"));const o=(n,t)=>{const i=e.getElementById(n);i&&i.addEventListener("input",y=>this._valueChanged(t,y.target.value))},d=(n,t)=>{const i=e.getElementById(n);i&&i.addEventListener("change",y=>this._valueChanged(t,y.target.checked))},p=(n,t,i,y="")=>{const w=e.getElementById(n);w&&w.addEventListener("input",a=>{const _=parseFloat(a.target.value);if(i){const b=e.getElementById(i);b&&(b.innerText=`${_}${y}`)}this._valueChanged(t,_)})};o("title","title"),d("animEnabled","animations.enabled"),p("animSpeed","animations.speed","animSpeedVal","s"),(x=e.getElementById("solarPvCount"))==null||x.addEventListener("input",n=>{const t=parseInt(n.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=t,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<t;){const i=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${i}`,name:`PV ${i}`,voltage_entity:`sensor.deye_12k_inverter_pv${i}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${i}_current`,power_entity:`sensor.deye_12k_inverter_pv${i}_power`})}this._valueChanged("solar.pv_count",t),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].name=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].voltage_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].current_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].power_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),o("solarTotalPower","solar.total_power_entity"),o("solarDailyYield","solar.daily_yield_entity"),p("solarTargetDaily","solar.target_daily_yield"),o("invModel","inverter.model_name"),o("invPower","inverter.power_entity"),o("invTempAc","inverter.ac_temperature_entity"),o("invTempDc","inverter.dc_temperature_entity"),o("invVolt","inverter.voltage_entity"),o("invCurrent","inverter.current_entity"),o("invFreq","inverter.frequency_entity"),(l=e.getElementById("auxType"))==null||l.addEventListener("change",n=>{const t=n.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=t;const y={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[t]||"Мікроінвертор";this._config.aux.title=y;const w=e.getElementById("auxTitle");w&&(w.value=y),this._valueChanged("aux.type",t),this._valueChanged("aux.title",y)}),o("auxTitle","aux.title"),o("auxPower","aux.power_entity"),($=e.getElementById("windTurbineCount"))==null||$.addEventListener("input",n=>{const t=parseInt(n.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=t,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<t;){const i=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${i}`,name:`Вітряк ${i}`,power_entity:`sensor.wind_turbine_${i}_power`,speed_entity:`sensor.wind_turbine_${i}_speed`,animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",t),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),p("windThreshold","wind.animation_threshold","windThresholdVal","W"),(r=e.getElementById("windThreshold"))==null||r.addEventListener("input",n=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(n.target.value))}),p("windMaxPower","wind.max_power"),e.querySelectorAll(".turbine-name-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].name=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].power_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].speed_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),o("batSoc","battery.soc_entity"),o("batPower","battery.power_entity"),o("batVolt","battery.voltage_entity"),o("batCurrent","battery.current_entity"),o("batCapacity","battery.capacity_entity"),o("batChargeDaily","battery.charge_daily_entity"),o("batDischargeDaily","battery.discharge_daily_entity"),(m=e.getElementById("batParallelCount"))==null||m.addEventListener("input",n=>{const t=parseInt(n.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=t,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<t;){const i=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${i}`,name:`Батарея ${i}`,soc_entity:`sensor.bms_rack${i}_soc`,current_entity:`sensor.bms_rack${i}_current`,voltage_entity:`sensor.bms_rack${i}_voltage`,power_entity:`sensor.bms_rack${i}_power`,temperature_entity:`sensor.bms_rack${i}_temperature`})}this._valueChanged("battery.parallel_batteries",t),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].name=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].soc_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].current_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].voltage_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].temperature_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].power_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(n=>{n.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].capacity_kwh=parseFloat(t.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),o("gridPower","grid.power_entity"),o("gridImportDaily","grid.import_daily_entity"),o("gridExportDaily","grid.export_daily_entity"),o("gridCarPower","grid.car_power_entity"),o("loadEssential","load.essential_power_entity"),o("loadDailyHouse","load.daily_house_entity");const h=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const n=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${n}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(g=e.getElementById("btnAddSubload"))==null||g.addEventListener("click",h),(E=e.getElementById("btnAddSubloadBottom"))==null||E.addEventListener("click",h),e.querySelectorAll(".btn-del-subload").forEach(n=>{n.addEventListener("click",t=>{var w;const i=t.currentTarget||t.target.closest(".btn-del-subload"),y=parseInt(i.dataset.idx);(w=this._config.load)!=null&&w.subloads&&(this._config.load.subloads.splice(y,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(n=>{n.addEventListener("input",t=>{var y,w;const i=parseInt(t.target.dataset.idx);(w=(y=this._config.load)==null?void 0:y.subloads)!=null&&w[i]&&(this._config.load.subloads[i].name=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(n=>{n.addEventListener("change",t=>{var y,w;const i=parseInt(t.target.dataset.idx);(w=(y=this._config.load)==null?void 0:y.subloads)!=null&&w[i]&&(this._config.load.subloads[i].icon=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(n=>{n.addEventListener("input",t=>{var y,w;const i=parseInt(t.target.dataset.idx);(w=(y=this._config.load)==null?void 0:y.subloads)!=null&&w[i]&&(this._config.load.subloads[i].entity=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",Vt);class Ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(L))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const o=JSON.parse(JSON.stringify(e)),d=JSON.parse(JSON.stringify(L));this._config=this._deepMerge(d,o),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,o){const d=Array.isArray(e)?[...e]:Object.assign({},e);if(!o||typeof o!="object")return d;for(const p of Object.keys(o)){const h=o[p],u=e?e[p]:void 0;h&&typeof h=="object"&&!Array.isArray(h)?d[p]=this._deepMerge(u||{},h):d[p]=h}return d}_getEntityState(e){var h;if(!this._hass||!e||!this._hass.states[e])return null;const o=this._hass.states[e],d=parseFloat(o.state),p=((h=o.attributes)==null?void 0:h.unit_of_measurement)||"";return{raw:o.state,val:isNaN(d)?0:d,unit:p,attributes:o.attributes}}_formatPower(e,o=0){if(!e)return{num:o.toFixed(3),kw:o,str:`${o.toFixed(3)} кВт`};let d=e.val;return e.unit==="W"&&(d=d/1e3),{num:d.toFixed(3),kw:d,str:`${d.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const o=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}_renderCardSkeleton(){var o,d,p,h,u,f,x,l,$,r,m,g,E,n;const e=this._config||L;this._initialized=!0,this.shadowRoot.innerHTML=`
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
                <div style="width: 20px; height: 20px; color: #38bdf8;">${K.grid_tower}</div>
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
                  <div style="width: 18px; height: 18px; color: #34d399;">${K.car}</div>
                  <span style="font-size: 12px; color: #e2e8f0; font-weight: 600;">${((p=e.grid)==null?void 0:p.car_title)||"Авто"}</span>
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
              <div class="es-inverter-model-tag es-mono" id="inverterModelTag">${((h=e.inverter)==null?void 0:h.model_name)||"DEYE SUN-12K"}</div>
              <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; color: #fbbf24; margin: 4px 0 6px 0;">
                <div style="width: 26px; height: 26px;">${K.inverter}</div>
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
            <div class="es-wind-station ${!((u=e.wind)!=null&&u.show)&&((f=e.aux)==null?void 0:f.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>

            <!-- AUX Node (Microinverter / Generator when not in wind mode) -->
            <div class="es-aux-box glow-aux clickable-node ${((x=e.aux)==null?void 0:x.type)==="none"||((l=e.aux)==null?void 0:l.type)==="wind"?"hidden":""}" id="auxNode">
              <div style="display: flex; align-items: center; gap: 6px; color: #d8b4fe; font-size: 12px; font-weight: 600;" id="auxHeader">
                <div style="width: 18px; height: 18px;" id="auxIconBox">
                  ${K[($=e.aux)==null?void 0:$.type]||K.microinverter}
                </div>
                <span id="auxTitle">${((r=e.aux)==null?void 0:r.type)==="microinverter"&&(!((m=e.aux)!=null&&m.title)||((g=e.aux)==null?void 0:g.title)==="Вітрогенератор")?"Мікроінвертор":((E=e.aux)==null?void 0:E.title)||"Мікроінвертор"}</span>
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
                <div style="width: 20px; height: 20px; color: #22d3ee;">${K.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltCurrent:e.getElementById("batVoltCurrent"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var x,l,$,r,m,g,E,n;const e=this._config||L,o=((x=this._nodes)==null?void 0:x.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!o)return;if(o.innerHTML="",!(((l=e.wind)==null?void 0:l.show)||(($=e.aux)==null?void 0:$.type)==="wind")){o.classList.add("hidden");return}o.classList.remove("hidden");const p=((r=e.wind)==null?void 0:r.turbine_count)||((g=(m=e.wind)==null?void 0:m.turbines)==null?void 0:g.length)||2,h=((E=e.wind)==null?void 0:E.turbines)||[],u=document.createElement("div");u.className="es-wind-summary-bar es-mono",u.id="windStationSummaryBar",u.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">5.90</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">109.2</span> kWh</span>
    `,o.appendChild(u);const f=document.createElement("div");f.className="es-wind-pods-row",o.appendChild(f);for(let t=0;t<p;t++){const i=h[t]||{name:`Вітряк ${t+1}`,power_entity:`sensor.wind_turbine_${t+1}_power`,animation_threshold:((n=e.wind)==null?void 0:n.animation_threshold)||50},y=document.createElement("div");y.className="es-turbine-card glow-wind clickable-node",y.id=`turbineCard_${t+1}`,y.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${t+1}">
              ${K.wind_turbine}
            </div>
            <span>${i.name||`Вітряк ${t+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${t+1}">
            Генерація
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${t+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            ${(t===0?1.56:.22).toFixed(3)} кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${t+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9;">
            <span id="turbineRpmVal_${t+1}">${t===0?"480":"160"}</span> RPM
          </span>
        </div>

        <div class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: flex; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${t+1}" style="color: #6ee7b7; font-weight: 700;">${t===0?"4.80":"1.10"}</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${t+1}" style="color: #38bdf8; font-weight: 700;">${t===0?"86.4":"22.8"}</span> kWh</div>
        </div>
      `,y.addEventListener("click",()=>{this._fireMoreInfo(i.power_entity)}),f.appendChild(y)}}_renderDynamicPvPanels(){var p,h,u,f,x;const e=this._config||L,o=this._nodes.pvPanelsContainer;if(!o)return;o.innerHTML="";const d=((p=e.solar)==null?void 0:p.pv_count)||((u=(h=e.solar)==null?void 0:h.strings)==null?void 0:u.length)||3;for(let l=1;l<=d;l++){const $=l<10?`0${l}`:`${l}`,r=((x=(f=e.solar)==null?void 0:f.strings)==null?void 0:x[l-1])||{},m=r.name||`PV ${$}`,g=document.createElement("div");g.className="es-pv-panel glow-solar clickable-node",g.dataset.pvIndex=l,g.id=`pvPanel_${l}`,g.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 18px; height: 18px; color: #fbbf24;">${K.pv_panel}</div>
          <span class="es-pv-label es-mono">${m}</span>
        </div>
        <span class="es-pv-val es-mono" id="pvVal_${l}">1,200 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${l}">
          <span class="volt" id="pvVolt_${l}">385.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${l}">3.12 A</span>
        </div>
      `,g.addEventListener("click",()=>{var n;const E=r.power_entity||r.voltage_entity||r.current_entity||((n=e.solar)==null?void 0:n.total_power_entity);this._fireMoreInfo(E)}),o.appendChild(g)}}_renderDynamicSubloads(){var p;const e=this._config||L,o=this._nodes.subloadsContainer;if(!o)return;o.innerHTML="",(((p=e.load)==null?void 0:p.subloads)||[]).forEach((h,u)=>{const f=document.createElement("div");f.className="es-subload-card clickable-node",f.innerHTML=`
        <div style="width: 18px; height: 18px; color: #22d3ee; margin-bottom: 2px;">${K[h.icon]||K.other}</div>
        <span style="font-size: 10px; color: #94a3b8; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 72px;">${h.name}</span>
        <span class="es-mono" id="subloadVal_${u}" style="font-size: 11px; font-weight: 700; color: #22d3ee;">2,000 кВт</span>
      `,f.addEventListener("click",()=>{this._fireMoreInfo(h.entity)}),o.appendChild(f)})}_renderDynamicBatteryRack(){var u,f,x,l,$,r,m;const e=this._config||L,o=this._nodes.batteryRackContainer;if(!o)return;o.innerHTML="";const d=((u=e.battery)==null?void 0:u.parallel_batteries)||((x=(f=e.battery)==null?void 0:f.modules)==null?void 0:x.length)||2,p=[42,43,76,85,90,68,72,80],h=[25,18,22.5,21,24,20,19.5,23];for(let g=1;g<=d;g++){const E=(($=(l=e.battery)==null?void 0:l.modules)==null?void 0:$[g-1])||((m=(r=e.battery)==null?void 0:r.module_entities)==null?void 0:m[g-1])||{},n=E.name||`Батарея ${g}`,t=p[(g-1)%p.length],i=h[(g-1)%h.length],y=document.createElement("div");y.className="es-battery-pack-card glow-battery clickable-node",y.id=`batPackCard_${g}`,y.innerHTML=`
        <!-- Temperature above the battery -->
        <div class="es-bat-temp es-mono" id="batPackTemp_${g}">
          <span>🌡️</span> <span id="batPackTempVal_${g}">${i.toFixed(1)}</span>°C
        </div>
        
        <div class="es-bat-main-row">
          <!-- Big SOC percentage & label -->
          <div class="es-bat-soc-col">
            <span class="es-bat-soc-val es-mono" id="batPackSoc_${g}">${t}%</span>
            <span class="es-bat-name">${n}</span>
          </div>

          <!-- Battery graphic with level bars -->
          <div class="es-battery-gauge">
            <div class="es-battery-gauge-nipple"></div>
            <div class="es-battery-gauge-body">
              <div class="es-bat-bar" id="batPackBar1_${g}"></div>
              <div class="es-bat-bar" id="batPackBar2_${g}"></div>
              <div class="es-bat-bar" id="batPackBar3_${g}"></div>
              <div class="es-bat-bar" id="batPackBar4_${g}"></div>
            </div>
          </div>

          <!-- Rounded Telemetry Badge (Voltage, Current, Power) -->
          <div class="es-bat-telemetry-badge es-mono">
            <div class="volt" id="batPackVolt_${g}">51.6 V</div>
            <div class="curr" id="batPackCurr_${g}">4.4 A</div>
            <div class="power" id="batPackPower_${g}">2.27 kW</div>
          </div>
        </div>

        <!-- Bottom energy / status tag -->
        <div class="es-bat-bottom-row es-mono">
          <span class="es-bat-state-tag charge" id="batPackStateTag_${g}">Заряд</span>
          <span class="es-bat-kwh" id="batPackKwh_${g}">7.88 kWh</span>
        </div>
      `,y.addEventListener("click",()=>{var a;const w=E.soc_entity||E.soc||E.voltage_entity||E.volt||E.current_entity||((a=e.battery)==null?void 0:a.soc_entity);this._fireMoreInfo(w)}),o.appendChild(y)}}_bindInteractions(){var d,p,h,u,f,x,l,$;const e=this.shadowRoot,o=this._config||L;(d=e.getElementById("solarHeaderNode"))==null||d.addEventListener("click",()=>{var r,m;this._fireMoreInfo(((r=o.solar)==null?void 0:r.daily_yield_entity)||((m=o.solar)==null?void 0:m.total_power_entity))}),(p=e.getElementById("totalPvPowerBadge"))==null||p.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.solar)==null?void 0:r.total_power_entity)}),(h=e.getElementById("gridNode"))==null||h.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.grid)==null?void 0:r.power_entity)}),(u=e.getElementById("carNode"))==null||u.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.grid)==null?void 0:r.car_power_entity)}),(f=e.getElementById("inverterNode"))==null||f.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.inverter)==null?void 0:r.power_entity)}),(x=e.getElementById("auxNode"))==null||x.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.aux)==null?void 0:r.power_entity)}),(l=e.getElementById("essentialNode"))==null||l.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.load)==null?void 0:r.essential_power_entity)}),($=e.getElementById("masterBatteryHub"))==null||$.addEventListener("click",()=>{var r;this._fireMoreInfo((r=o.battery)==null?void 0:r.soc_entity)})}_updateValues(){var he,_e,Ee,Be,Ce,Se,Ie,Te,Pe,Ae,Me,Fe,Re,Ve,Le,H,k,I,S,Q,de,ce,pe,ye,ze,Ne,De,We,Qe,et,tt,it,ot,nt,st,rt,at,lt,dt,ct,pt,yt,gt,ut,ht,_t,bt,ft,vt,mt,wt,xt,kt,$t,Et,Bt,Ct,St,It,Tt,Pt,At,Mt;if(!this._nodes.dailySolarYield)return;const e=this._config||L,o=((he=e.solar)==null?void 0:he.pv_count)||((Ee=(_e=e.solar)==null?void 0:_e.strings)==null?void 0:Ee.length)||3;let d=0,p=!1;for(let s=1;s<=o;s++){const T=(Ce=(Be=e.solar)==null?void 0:Be.strings)==null?void 0:Ce[s-1],F=(T==null?void 0:T.voltage_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_voltage`:""),P=(T==null?void 0:T.current_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_current`:""),R=(T==null?void 0:T.power_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_power`:"");if(this._getEntityState(R)||this._getEntityState(F)||this._getEntityState(P)){p=!0;break}}for(let s=1;s<=o;s++){const T=this.shadowRoot.getElementById(`pvVal_${s}`),F=this.shadowRoot.getElementById(`pvVolt_${s}`),P=this.shadowRoot.getElementById(`pvCurr_${s}`),R=(Ie=(Se=e.solar)==null?void 0:Se.strings)==null?void 0:Ie[s-1],be=(R==null?void 0:R.voltage_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_voltage`:""),v=(R==null?void 0:R.current_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_current`:""),G=(R==null?void 0:R.power_entity)||(s<=3?`sensor.deye_12k_inverter_pv${s}_power`:""),U=this._getEntityState(be),z=this._getEntityState(v),te=this._getEntityState(G);let O=0,V=0,X=0;te?X=this._formatPower(te).kw:U&&z?X=U.val*z.val/1e3:U?X=0:X=p?0:4,U?O=U.val:O=p?0:380+s*4.5,z?V=z.val:te&&O>0?V=X*1e3/O:V=p?0:3.12+s*.28,d+=X,T&&(T.innerText=`${X.toFixed(3)} кВт`),F&&(F.innerText=`${O.toFixed(1)} V`),P&&(P.innerText=`${V.toFixed(2)} A`)}const h=this._getEntityState((Te=e.solar)==null?void 0:Te.total_power_entity);let u=0;h?u=this._formatPower(h).kw:u=d,this._nodes.totalPvPowerBadge.innerText=`${u.toFixed(3)} кВт`;const f=this._getEntityState((Pe=e.solar)==null?void 0:Pe.daily_yield_entity),x=f?f.val:p?0:48.6;this._nodes.dailySolarYield.innerText=x.toFixed(1);const l=((Ae=e.solar)==null?void 0:Ae.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=l.toFixed(1);const $=Math.min(100,Math.round(x/l*100));this._nodes.solarProgressBar.style.width=`${$}%`;const r=this._getEntityState((Me=e.inverter)==null?void 0:Me.power_entity);this._nodes.inverterPowerVal.innerText=this._formatPower(r,8).str;const m=this._getEntityState((Fe=e.inverter)==null?void 0:Fe.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=m?m.val.toFixed(2):"41,20";const g=this._getEntityState((Re=e.inverter)==null?void 0:Re.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=g?g.val.toFixed(2):"38,40";const E=this._getEntityState((Ve=e.inverter)==null?void 0:Ve.voltage_entity);this._nodes.inverterVolt.innerText=E?E.val.toFixed(2):"231,45";const n=this._getEntityState((Le=e.inverter)==null?void 0:Le.current_entity);this._nodes.inverterCurrent.innerText=n?n.val.toFixed(2):"8,60";const t=this._getEntityState((H=e.inverter)==null?void 0:H.frequency_entity);this._nodes.inverterFreq.innerText=t?t.val.toFixed(2):"50,01";const i=((k=e.wind)==null?void 0:k.show)||((I=e.aux)==null?void 0:I.type)==="wind",y=this.shadowRoot.getElementById("windStationContainer"),w=this._nodes.auxNode;if(y)if(!i)y.classList.add("hidden");else{y.classList.remove("hidden");const s=((S=e.wind)==null?void 0:S.turbine_count)||((de=(Q=e.wind)==null?void 0:Q.turbines)==null?void 0:de.length)||2,T=((ce=e.wind)==null?void 0:ce.turbines)||[];for(let v=0;v<s;v++){const G=T[v]||{power_entity:`sensor.wind_turbine_${v+1}_power`,rpm_entity:`sensor.wind_turbine_${v+1}_rpm`,daily_energy_entity:`sensor.wind_turbine_${v+1}_daily_energy`,monthly_energy_entity:`sensor.wind_turbine_${v+1}_monthly_energy`,animation_threshold:((pe=e.wind)==null?void 0:pe.animation_threshold)||50},U=this.shadowRoot.getElementById(`turbinePower_${v+1}`),z=this.shadowRoot.getElementById(`turbineStatus_${v+1}`),te=this.shadowRoot.getElementById(`turbineIcon_${v+1}`),O=this.shadowRoot.getElementById(`turbineCard_${v+1}`),V=this.shadowRoot.getElementById(`turbineRpmVal_${v+1}`),X=this.shadowRoot.getElementById(`turbineDailyVal_${v+1}`),je=this.shadowRoot.getElementById(`turbineMonthlyVal_${v+1}`),Je=v===0?1.56:.22,ke=this._getEntityState(G.power_entity),qe=this._formatPower(ke,Je);U&&(U.innerText=qe.str);let fe=qe.kw*1e3;ke&&ke.unit==="W"&&(fe=ke.val);const ve=G.animation_threshold??((ye=e.wind)==null?void 0:ye.animation_threshold)??50,se=te==null?void 0:te.querySelector(".turbine-rotor");if(fe>=ve){se&&se.classList.add("spinning"),O&&(O.classList.add("glow-wind"),O.style.borderColor="rgba(6, 182, 212, 0.55)");const $e=((ze=e.wind)==null?void 0:ze.max_power)||3e3,Ke=(3.2-Math.min(1,Math.max(0,(fe-ve)/($e-ve)))*2.75).toFixed(2);se&&se.style.setProperty("--turbine-speed",`${Ke}s`),z&&(z.innerText="Генерація",z.style.color="#67e8f9")}else se&&se.classList.remove("spinning"),O&&(O.classList.remove("glow-wind"),O.style.borderColor="rgba(255, 255, 255, 0.08)"),z&&(z.innerText="Штиль",z.style.color="#94a3b8");const He=this._getEntityState(G.rpm_entity||G.speed_entity);if(V)if(He)V.innerText=Math.round(He.val);else{const $e=v===0?480:160;V.innerText=fe>=ve?$e:0}const Oe=this._getEntityState(G.daily_energy_entity);X&&(X.innerText=Oe?Oe.val.toFixed(2):v===0?"4.80":"1.10");const re=this._getEntityState(G.monthly_energy_entity);je&&(je.innerText=re?re.val.toFixed(1):v===0?"86.4":"22.8")}let F=0,P=0;for(let v=0;v<s;v++){const G=T[v]||{},U=this._getEntityState(G.daily_energy_entity),z=this._getEntityState(G.monthly_energy_entity);F+=U?U.val:v===0?4.8:1.1,P+=z?z.val:v===0?86.4:22.8}const R=this.shadowRoot.getElementById("windTotalDailyVal"),be=this.shadowRoot.getElementById("windTotalMonthlyVal");if(R){const v=this._getEntityState((Ne=e.wind)==null?void 0:Ne.daily_energy_entity);R.innerText=v?v.val.toFixed(2):F.toFixed(2)}if(be){const v=this._getEntityState((De=e.wind)==null?void 0:De.monthly_energy_entity);be.innerText=v?v.val.toFixed(1):P.toFixed(1)}}if(w)if(((We=e.aux)==null?void 0:We.type)==="none"||((Qe=e.aux)==null?void 0:Qe.type)==="wind")w.classList.add("hidden");else{w.classList.remove("hidden");const s=this._getEntityState((et=e.aux)==null?void 0:et.power_entity),T=this._formatPower(s,2);this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=T.str);const F={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let P=(tt=e.aux)==null?void 0:tt.title;((it=e.aux)==null?void 0:it.type)==="microinverter"&&(!P||P==="Вітрогенератор")?P="Мікроінвертор":(ot=e.aux)!=null&&ot.type&&F[e.aux.type]&&(!P||P==="Вітрогенератор")?P=F[e.aux.type]:P||(P="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=P),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=K[(nt=e.aux)==null?void 0:nt.type]||K.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((st=e.aux)==null?void 0:st.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),w.style.borderColor="rgba(192, 132, 252, 0.45)",w.style.background="rgba(88, 28, 135, 0.35)",w.classList.remove("glow-wind"),w.classList.add("glow-aux")}const a=this._getEntityState((rt=e.grid)==null?void 0:rt.power_entity),_=a?a.unit==="W"?a.val/1e3:a.val:2,b=_>=0;this._nodes.gridPowerVal.innerText=`${Math.abs(_).toFixed(3)} кВт`,this._nodes.gridDirectionLabel.innerText=b?"← Експорт":"→ Імпорт";const B=this._getEntityState((at=e.grid)==null?void 0:at.import_daily_entity);this._nodes.gridImportDaily.innerText=B?`${B.val.toFixed(2)} kWh`:"3,10 kWh";const C=this._getEntityState((lt=e.grid)==null?void 0:lt.export_daily_entity);this._nodes.gridExportDaily.innerText=C?`${C.val.toFixed(2)} kWh`:"4,80 kWh";const A=this._getEntityState((dt=e.grid)==null?void 0:dt.car_power_entity);this._nodes.carPowerVal.innerText=this._formatPower(A,1).str;const N=this._getEntityState((ct=e.load)==null?void 0:ct.essential_power_entity);this._nodes.essentialPowerVal.innerText=this._formatPower(N,8).str;const D=this._getEntityState((pt=e.load)==null?void 0:pt.daily_house_entity);this._nodes.dailyHouseKwh.innerText=D?`${D.val.toFixed(2)} kWh`:"12,40 kWh",(((yt=e.load)==null?void 0:yt.subloads)||[]).forEach((s,T)=>{const F=this.shadowRoot.getElementById(`subloadVal_${T}`);if(F){const P=this._getEntityState(s.entity);F.innerText=this._formatPower(P,2+T).str}});const j=this._getEntityState((gt=e.battery)==null?void 0:gt.soc_entity),Y=j?j.val:80;this._nodes.masterBatterySoc.innerText=`${Y.toFixed(1)}%`;const M=this._getEntityState((ut=e.battery)==null?void 0:ut.power_entity),ie=M?M.unit==="W"?M.val/1e3:M.val:3,oe=ie>=0;this._nodes.masterBatteryFlowHint.innerHTML=`<span>${Math.abs(ie).toFixed(3)} кВт</span> • <span style="color: ${oe?"#34d399":"#fbbf24"};">${oe?"Заряд ↓":"Розряд ↑"}</span>`;const ae=this._getEntityState((ht=e.battery)==null?void 0:ht.voltage_entity),le=this._getEntityState((_t=e.battery)==null?void 0:_t.current_entity),ue=ae?ae.val.toFixed(2):"53,24",W=le?le.val.toFixed(2):"-56,30";this._nodes.batVoltCurrent.innerText=`U: ${ue} V / I: ${W} A`;const J=((bt=e.battery)==null?void 0:bt.parallel_batteries)||((vt=(ft=e.battery)==null?void 0:ft.modules)==null?void 0:vt.length)||2;let q=0;for(let s=0;s<J;s++){const T=((wt=(mt=e.battery)==null?void 0:mt.modules)==null?void 0:wt[s])||((kt=(xt=e.battery)==null?void 0:xt.module_entities)==null?void 0:kt[s])||{},F=T.capacity_kwh!==void 0?parseFloat(T.capacity_kwh):s===0?7.88:s===1?5.12:((($t=e.battery)==null?void 0:$t.capacity_kwh)||13)/J;q+=isNaN(F)?0:F}q<=0&&(q=parseFloat((Et=e.battery)==null?void 0:Et.capacity_kwh)||13);const ee=this._getEntityState(((Bt=e.battery)==null?void 0:Bt.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Z=ee&&!isNaN(ee.val)?ee.val:null;this._nodes.batCapacityVal&&(Z!==null?this._nodes.batCapacityVal.innerText=`${q.toFixed(2)} kWh (${Z.toFixed(2)} kWh)`:this._nodes.batCapacityVal.innerText=`${q.toFixed(2)} kWh`);const xe=this._getEntityState((Ct=e.battery)==null?void 0:Ct.charge_daily_entity);this._nodes.batChargeDaily.innerText=xe?`${xe.val.toFixed(2)} kWh`:"4,30 kWh";const ne=this._getEntityState((St=e.battery)==null?void 0:St.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=ne?`${ne.val.toFixed(2)} kWh`:"6,10 kWh";for(let s=1;s<=J;s++){const T=this.shadowRoot.getElementById(`batPackSoc_${s}`),F=this.shadowRoot.getElementById(`batPackVolt_${s}`),P=this.shadowRoot.getElementById(`batPackCurr_${s}`),R=this.shadowRoot.getElementById(`batPackPower_${s}`),be=this.shadowRoot.getElementById(`batPackTempVal_${s}`),v=this.shadowRoot.getElementById(`batPackStateTag_${s}`),G=this.shadowRoot.getElementById(`batPackKwh_${s}`),U=this.shadowRoot.getElementById(`batPackBar1_${s}`),z=this.shadowRoot.getElementById(`batPackBar2_${s}`),te=this.shadowRoot.getElementById(`batPackBar3_${s}`),O=this.shadowRoot.getElementById(`batPackBar4_${s}`),V=((Tt=(It=e.battery)==null?void 0:It.modules)==null?void 0:Tt[s-1])||((At=(Pt=e.battery)==null?void 0:Pt.module_entities)==null?void 0:At[s-1])||{},X=V.soc_entity||V.soc||`sensor.bms_rack${s}_soc`,je=V.current_entity||`sensor.bms_rack${s}_current`,Je=V.voltage_entity||V.volt||`sensor.bms_rack${s}_voltage`,ke=V.power_entity||`sensor.bms_rack${s}_power`,qe=V.temperature_entity||V.temp||`sensor.bms_rack${s}_temperature`,fe=this._getEntityState(X),ve=this._getEntityState(je),se=this._getEntityState(Je),He=this._getEntityState(ke),Oe=this._getEntityState(qe),re=fe?fe.val:s===1?42:s===2?43:75,$e=se?se.val:s===1?51.6:s===2?51.8:52.4,Ge=ve?ve.val:s===1?4.4:s===2?19.6:8.2,Ke=Oe?Oe.val:s===1?25:s===2?18:21.5;let Xe=0;He?Xe=this._formatPower(He).kw:Xe=$e*Math.abs(Ge)/1e3,T&&(T.innerText=`${re.toFixed(0)}%`),F&&(F.innerText=`${$e.toFixed(1)} V`),P&&(P.innerText=`${Math.abs(Ge).toFixed(1)} A`),R&&(R.innerText=`${Xe.toFixed(2)} kW`),be&&(be.innerText=`${Ke.toFixed(1)}`);const me=Ge>=0,ge=this.shadowRoot.getElementById(`batPackCard_${s}`),Ft=ge==null?void 0:ge.querySelector(".es-battery-gauge"),Rt=ge==null?void 0:ge.querySelector(".es-battery-gauge-nipple");ge&&(ge.style.borderColor=me?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),Ft&&(Ft.style.borderColor=me?"#10b981":"#ef4444"),Rt&&(Rt.style.background=me?"#10b981":"#ef4444"),v&&(me?(v.className="es-bat-state-tag charge",v.innerText="Заряд",v.style.color="#34d399",v.style.background="rgba(16, 185, 129, 0.18)",v.style.borderColor="rgba(16, 185, 129, 0.4)"):(v.className="es-bat-state-tag discharge",v.innerText="Розряд",v.style.color="#f87171",v.style.background="rgba(239, 68, 68, 0.18)",v.style.borderColor="rgba(239, 68, 68, 0.4)")),R&&(R.style.color=me?"#34d399":"#f87171"),P&&(P.style.color=me?"#38bdf8":"#f87171");const Lt=((V.capacity_kwh!==void 0?parseFloat(V.capacity_kwh):(((Mt=e.battery)==null?void 0:Mt.capacity_kwh)||10)/J)*(re/100)).toFixed(2);G&&(G.innerText=`${Lt} kWh`);const Ue=me?"active-green":"active-red";U&&z&&te&&O&&(U.className=`es-bat-bar ${re>=10?Ue:""}`,z.className=`es-bat-bar ${re>=35?Ue:""}`,te.className=`es-bat-bar ${re>=65?Ue:""}`,O.className=`es-bat-bar ${re>=85?Ue:""}`)}this._updateFlowPaths(),this._updateFlowAnimations(_,b,u,N?N.unit==="W"?N.val/1e3:N.val:8,ie,oe,A?A.unit==="W"?A.val/1e3:A.val:1)}_setupResizeObserver(){var o;if(this._resizeObserver)return;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,o,d,p,h,u;try{const f=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!f)return;const x=f.getBoundingClientRect();if(x.width===0||x.height===0)return;const l=(a,_=.5,b=.5)=>{if(!a)return null;const B=a.getBoundingClientRect();return{x:Math.round(B.left-x.left+B.width*_),y:Math.round(B.top-x.top+B.height*b)}},$=(a,_,b)=>{const B=this.shadowRoot.getElementById(a),C=this.shadowRoot.getElementById(_);B&&B.setAttribute("d",b||""),C&&C.setAttribute("d",b||"")},r=this.shadowRoot.getElementById("gridNode"),m=this.shadowRoot.getElementById("inverterNode"),g=this.shadowRoot.getElementById("essentialNode"),E=this.shadowRoot.getElementById("totalPvPowerBadge"),n=this.shadowRoot.getElementById("masterBatteryHub"),t=this.shadowRoot.getElementById("carNode");if(r&&m){const a=l(r,1,.45),_=l(m,0,.35);if(a&&_){const b=Math.round((a.x+_.x)/2),B=`M ${a.x} ${a.y} C ${b} ${a.y}, ${b} ${_.y}, ${_.x} ${_.y}`;$("pathGridInvBase","pathGridInvFlow",B)}}if(m&&g){const a=l(m,1,.35),_=l(g,0,.45);if(a&&_){const b=Math.round((a.x+_.x)/2),B=`M ${a.x} ${a.y} C ${b} ${a.y}, ${b} ${_.y}, ${_.x} ${_.y}`;$("pathInvLoadBase","pathInvLoadFlow",B)}}if(E&&m){const a=l(E,.5,1),_=l(m,.5,0);if(a&&_){const b=`M ${a.x} ${a.y} L ${_.x} ${_.y}`;$("pathSolarInvBase","pathSolarInvFlow",b)}}if(m&&n){const a=l(m,.5,1),_=l(n,.5,0);if(a&&_){const b=`M ${a.x} ${a.y} L ${_.x} ${_.y}`;$("pathInvBatBase","pathInvBatFlow",b)}}if(r&&t&&t.offsetHeight>0){const a=l(r,.5,1),_=l(t,.5,0);if(a&&_){const b=`M ${a.x} ${a.y} L ${_.x} ${_.y}`;$("pathGridCarBase","pathGridCarFlow",b)}}const i=this.shadowRoot.getElementById("windStationContainer"),w=((o=c.wind)==null?void 0:o.show)||((d=c.aux)==null?void 0:d.type)==="wind"?((p=c.wind)==null?void 0:p.turbine_count)||((u=(h=c.wind)==null?void 0:h.turbines)==null?void 0:u.length)||2:0;for(let a=1;a<=4;a++)if(a<=w&&i&&!i.classList.contains("hidden")){const _=this.shadowRoot.getElementById(`turbineCard_${a}`);if(_&&n){const b=l(_,.5,1),B=w===1?.5:.28+(a-1)/(w-1)*.44,C=l(n,B,0);if(b&&C){const A=`M ${b.x} ${b.y} L ${C.x} ${C.y}`;$(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,A)}}else $(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"")}else $(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"");this._updateBusBars()}catch{}}_updateBusBars(){var e,o,d,p,h,u;try{const f=this._config||L,x=this.shadowRoot.getElementById("solarBusSvg"),l=((e=f.solar)==null?void 0:e.pv_count)||((d=(o=f.solar)==null?void 0:o.strings)==null?void 0:d.length)||3;if(x&&l>0){const m=x.getBoundingClientRect(),g=this.shadowRoot.getElementById("pvPanel_1"),E=this.shadowRoot.getElementById(`pvPanel_${l}`),n=this.shadowRoot.getElementById("solarBusBase"),t=this.shadowRoot.getElementById("solarFlowCollector"),i=this.shadowRoot.getElementById("solarBusStemBase"),y=this.shadowRoot.getElementById("solarBusStemFlow"),w=this.shadowRoot.getElementById("solarBusFeeders");if(g&&E&&m.width>0){const a=g.getBoundingClientRect(),_=E.getBoundingClientRect(),b=Math.round(a.left-m.left+a.width/2),B=Math.round(_.left-m.left+_.width/2),C=13,A=Math.round((b+B)/2);if(n&&(n.setAttribute("x1",b),n.setAttribute("y1",C),n.setAttribute("x2",B),n.setAttribute("y2",C)),t&&(t.setAttribute("x1",b),t.setAttribute("y1",C),t.setAttribute("x2",B),t.setAttribute("y2",C)),i&&(i.setAttribute("x1",A),i.setAttribute("y1",C),i.setAttribute("x2",A),i.setAttribute("y2",26)),y&&(y.setAttribute("x1",A),y.setAttribute("y1",C),y.setAttribute("x2",A),y.setAttribute("y2",26)),w){let N="";for(let D=1;D<=l;D++){const j=this.shadowRoot.getElementById(`pvPanel_${D}`);if(j){const Y=j.getBoundingClientRect(),M=Math.round(Y.left-m.left+Y.width/2);N+=`
                  <line x1="${M}" y1="0" x2="${M}" y2="${C}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${M}" y1="0" x2="${M}" y2="${C}" stroke="#fbbf24" stroke-width="2.5" />
                `}}w.innerHTML=N}}}const $=this.shadowRoot.getElementById("batteryBusSvg"),r=((p=f.battery)==null?void 0:p.parallel_batteries)||((u=(h=f.battery)==null?void 0:h.modules)==null?void 0:u.length)||2;if($&&r>0){const m=$.getBoundingClientRect(),g=this.shadowRoot.getElementById("batPackCard_1"),E=this.shadowRoot.getElementById(`batPackCard_${r}`),n=this.shadowRoot.getElementById("batteryBusBase"),t=this.shadowRoot.getElementById("batteryFlowCollector"),i=this.shadowRoot.getElementById("batteryBusStemBase"),y=this.shadowRoot.getElementById("batteryBusStemFlow"),w=this.shadowRoot.getElementById("batteryBusFeeders");if(g&&E&&m.width>0){const a=g.getBoundingClientRect(),_=E.getBoundingClientRect(),b=Math.round(a.left-m.left+a.width/2),B=Math.round(_.left-m.left+_.width/2),C=13,A=Math.round((b+B)/2);if(n&&(n.setAttribute("x1",b),n.setAttribute("y1",C),n.setAttribute("x2",B),n.setAttribute("y2",C)),t&&(t.setAttribute("x1",b),t.setAttribute("y1",C),t.setAttribute("x2",B),t.setAttribute("y2",C)),i&&(i.setAttribute("x1",A),i.setAttribute("y1",0),i.setAttribute("x2",A),i.setAttribute("y2",C)),y&&(y.setAttribute("x1",A),y.setAttribute("y1",0),y.setAttribute("x2",A),y.setAttribute("y2",C)),w){let N="";for(let D=1;D<=r;D++){const j=this.shadowRoot.getElementById(`batPackCard_${D}`);if(j){const Y=j.getBoundingClientRect(),M=Math.round(Y.left-m.left+Y.width/2);N+=`
                  <line x1="${M}" y1="${C}" x2="${M}" y2="26" stroke="#059669" stroke-width="2" />
                  <line class="flow-line" x1="${M}" y1="${C}" x2="${M}" y2="26" stroke="#34d399" stroke-width="2.5" />
                `}}w.innerHTML=N}}}}catch{}}_applyFlowAnimation(e,o,d,p,h){if(!e)return;if(!h){e.setAttribute("class",`flow-pulse ${o} inactive`),e.style.opacity="0",e.style.animation="none";return}const u=d?"flow-reverse":"flow-forward",f=d?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${o} ${u}`),e.style.opacity="1",e.style.setProperty("--flow-speed",p),e.style.animation=`${f} ${p} linear infinite`}_updateFlowAnimations(e,o,d,p,h,u,f){var D,j,Y,M,ie,oe,ae,le,ue;const x=this._config||L,l=((D=x.animations)==null?void 0:D.enabled)!==!1,$=((j=x.animations)==null?void 0:j.speed)||1.2,r=(W,J=10)=>{const q=Math.abs(W);if(q<.05)return"2.5s";const ee=Math.min(1,q/J);return`${Math.max(.4,(2.6-ee*1.9)*($/1.2)).toFixed(2)}s`},m=this.shadowRoot.getElementById("pathGridInvFlow"),g=Math.abs(e);this._applyFlowAnimation(m,"flow-grid",o,r(e,10),l&&g>=.05);const E=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(E,"flow-solar",!1,r(d,12),l&&d>=.05);const n=this.shadowRoot.getElementById("pathInvLoadFlow"),t=Math.abs(p);this._applyFlowAnimation(n,"flow-load",!1,r(p,10),l&&t>=.05);const i=this.shadowRoot.getElementById("pathInvBatFlow"),y=Math.abs(h),w=u?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(i,w,!u,r(h,8),l&&y>=.05);const a=this.shadowRoot.getElementById("pathGridCarFlow"),_=Math.abs(f);this._applyFlowAnimation(a,"flow-car",!1,r(f,7),l&&_>=.05);const b=this.shadowRoot.getElementById("batteryFlowCollector");if(b)if(!l||y<.05)b.style.opacity="0.2",b.style.animation="none";else{b.style.opacity="1";const W=u?"esDashflow":"esDashflowRev";b.setAttribute("class",u?"flow-line":"flow-line-reverse"),b.style.stroke=u?"#34d399":"#f87171",b.style.animation=`${W} ${r(h,8)} linear infinite`}const B=this.shadowRoot.getElementById("solarFlowCollector");B&&(!l||d<.05?(B.style.opacity="0.2",B.style.animation="none"):(B.style.opacity="1",B.setAttribute("class","flow-line"),B.style.animation=`esDashflow ${r(d,12)} linear infinite`));const C=((Y=x.wind)==null?void 0:Y.show)||((M=x.aux)==null?void 0:M.type)==="wind",A=C?((ie=x.wind)==null?void 0:ie.turbine_count)||((ae=(oe=x.wind)==null?void 0:oe.turbines)==null?void 0:ae.length)||2:0,N=((le=x.wind)==null?void 0:le.turbines)||[];for(let W=1;W<=4;W++){const J=this.shadowRoot.getElementById(`pathTurbine${W}Flow`);if(J)if(W<=A&&C){const q=N[W-1]||{},ee=W===1?1.45:.85,Z=this._getEntityState(q.power_entity||`sensor.wind_turbine_${W}_power`);let ne=this._formatPower(Z,ee).kw*1e3;Z&&Z.unit==="W"&&(ne=Z.val);const he=q.animation_threshold??((ue=x.wind)==null?void 0:ue.animation_threshold)??50,_e=ne>=he;this._applyFlowAnimation(J,"flow-wind",!1,r(ne/1e3,3),l&&_e)}else this._applyFlowAnimation(J,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",Ze),window.customCards=window.customCards||[],window.customCards.some(Ye=>Ye.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),we.EnergyStationCard=Ze,Object.defineProperty(we,Symbol.toStringTag,{value:"Module"})});
