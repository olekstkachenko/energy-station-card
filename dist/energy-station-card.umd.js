(function(He,G){typeof exports=="object"&&typeof module<"u"?G(exports):typeof define=="function"&&define.amd?define(["exports"],G):(He=typeof globalThis<"u"?globalThis:He||self,G(He.EnergyStationCard={}))})(this,function(He){"use strict";const G={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,color:"#06b6d4",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",rpm_entity:"",daily_energy_entity:"sensor.wind_turbine_1_daily_energy",monthly_energy_entity:"sensor.wind_turbine_1_monthly_energy",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",rpm_entity:"",daily_energy_entity:"sensor.wind_turbine_2_daily_energy",monthly_energy_entity:"sensor.wind_turbine_2_monthly_energy",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!0,car_power_entity:"sensor.ev_charger_power",car_title:"Авто",show_non_essential:!0,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},Z={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,house_outline:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`};class li extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||G)),this.render()}connectedCallback(){this.render()}_valueChanged(e,o){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const g=e.split(".");let p=this._config;for(let y=0;y<g.length-1;y++)p[g[y]]||(p[g[y]]={}),p=p[g[y]];p[g[g.length-1]]=o;const v=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(v)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||G)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const o=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(o),this.render()}render(){var o,g,p,v,y,$,E,S,I,_,C,l,r,s,t,i,h,w,F,M,z,A,V,q,L,Y,n,d,x,c,f,P,N,U,se,We,ue,Q,ie,ae,j,W,X,je,be,me,Ve,_e,fe,ve,xe,ke,Be,Ee,Le,$e,Se,Ce,Ie,Te,Pe,Fe;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((g=e.animations)==null?void 0:g.speed)||1.2}">
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((v=e.solar)==null?void 0:v.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y=e.solar)==null?void 0:y.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${(($=e.solar)==null?void 0:$.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((E=e.solar)==null?void 0:E.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((S=e.solar)==null?void 0:S.target_daily_yield)||55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((I=e.solar)==null?void 0:I.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((_=e.solar)==null?void 0:_.pv_count)||3}).map((u,b)=>{var ce,pe;const m=b+1,k=((pe=(ce=e.solar)==null?void 0:ce.strings)==null?void 0:pe[b])||{},D=`sensor.deye_12k_inverter_pv${m}_voltage`,de=`sensor.deye_12k_inverter_pv${m}_current`,re=`sensor.deye_12k_inverter_pv${m}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${m} (Стрінг ${m})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${b}" value="${k.name||`PV ${m}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${m} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${b}" value="${k.voltage_entity!==void 0?k.voltage_entity:D}" placeholder="${D}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${m} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${b}" value="${k.current_entity!==void 0?k.current_entity:de}" placeholder="${de}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${m} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${b}" value="${k.power_entity!==void 0?k.power_entity:re}" placeholder="${re} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((C=e.inverter)==null?void 0:C.model_name)||"DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((l=e.inverter)==null?void 0:l.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((r=e.inverter)==null?void 0:r.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((s=e.inverter)==null?void 0:s.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((t=e.inverter)==null?void 0:t.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((i=e.inverter)==null?void 0:i.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((h=e.inverter)==null?void 0:h.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((w=e.aux)==null?void 0:w.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((F=e.aux)==null?void 0:F.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((M=e.aux)==null?void 0:M.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((z=e.aux)==null?void 0:z.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((A=e.aux)==null?void 0:A.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((V=e.aux)==null?void 0:V.type)==="microinverter"&&(!((q=e.aux)!=null&&q.title)||((L=e.aux)==null?void 0:L.title)==="Вітрогенератор")?"Мікроінвертор":((Y=e.aux)==null?void 0:Y.title)||(((n=e.aux)==null?void 0:n.type)==="generator"?"Генератор":((d=e.aux)==null?void 0:d.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((x=e.aux)==null?void 0:x.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((c=e.wind)==null?void 0:c.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((f=e.wind)==null?void 0:f.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((P=e.wind)==null?void 0:P.animation_threshold)||((N=e.aux)==null?void 0:N.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((U=e.wind)==null?void 0:U.animation_threshold)||((se=e.aux)==null?void 0:se.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((We=e.wind)==null?void 0:We.turbine_count)||2}).map((u,b)=>{var k,D;const m=((D=(k=e.wind)==null?void 0:k.turbines)==null?void 0:D[b])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${b}" value="${m.name||`Вітряк ${b+1}`}" placeholder="Назва (напр. Вітряк ${b+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${b}" value="${m.power_entity||`sensor.wind_turbine_${b+1}_power`}" placeholder="sensor.wind_turbine_${b+1}_power">
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${b}" value="${m.speed_entity||`sensor.wind_turbine_${b+1}_speed`}" placeholder="sensor.wind_turbine_${b+1}_speed">
                  </div>
                </div>
              `}).join("")}
          </div>

          <div class="field-row" style="margin-top: 6px;">
            <label>Максимальна потужність для розрахунку швидкості (Вт):</label>
            <input type="number" id="windMaxPower" value="${((ue=e.wind)==null?void 0:ue.max_power)||3e3}">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab==="battery"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="field-row">
            <label>Рівень заряду Battery SOC (%) (сенсор):</label>
            <input type="text" id="batSoc" value="${((Q=e.battery)==null?void 0:Q.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((ie=e.battery)==null?void 0:ie.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((ae=e.battery)==null?void 0:ae.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((j=e.battery)==null?void 0:j.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((W=e.battery)==null?void 0:W.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((X=e.battery)==null?void 0:X.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((je=e.battery)==null?void 0:je.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((be=e.battery)==null?void 0:be.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((me=e.battery)==null?void 0:me.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ve=e.battery)==null?void 0:Ve.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((_e=e.battery)==null?void 0:_e.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((fe=e.battery)==null?void 0:fe.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((ve=e.battery)==null?void 0:ve.parallel_batteries)||2}).map((u,b)=>{var Ye,Ue,Je,Xe;const m=b+1,k=((Ue=(Ye=e.battery)==null?void 0:Ye.modules)==null?void 0:Ue[b])||((Xe=(Je=e.battery)==null?void 0:Je.module_entities)==null?void 0:Xe[b])||{},D=`sensor.bms_rack${m}_soc`,de=`sensor.bms_rack${m}_current`,re=`sensor.bms_rack${m}_voltage`,ce=`sensor.bms_rack${m}_power`,pe=`sensor.bms_rack${m}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${m} (Модуль ${m})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${b}" value="${k.name||`Батарея ${m}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${m} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${b}" value="${k.soc_entity!==void 0?k.soc_entity:k.soc!==void 0?k.soc:D}" placeholder="${D}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${m} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${b}" value="${k.current_entity!==void 0?k.current_entity:de}" placeholder="${de}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${m} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${b}" value="${k.voltage_entity!==void 0?k.voltage_entity:k.volt!==void 0?k.volt:re}" placeholder="${re}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${m} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${b}" value="${k.temperature_entity!==void 0?k.temperature_entity:k.temp!==void 0?k.temp:pe}" placeholder="${pe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${m} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${b}" value="${k.capacity_kwh!==void 0?k.capacity_kwh:m===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${m} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${b}" value="${k.power_entity!==void 0?k.power_entity:ce}" placeholder="${ce} (авто P = U × I)">
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

          <div class="field-row" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 10px; margin-bottom: 12px;">
            <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; margin-bottom: 0;">
              <div>
                <span style="font-weight: 700; color: #38bdf8; font-size: 13px;">Дозволити продаж в мережу (Експорт)</span>
                <div style="font-size: 11px; color: #94a3b8; margin-top: 2px;">
                  Увімкніть, якщо станція продає надлишки («зелений тариф» / Net Billing). Якщо вимкнено (Zero Export) — анімація продажу ЗАВЖДИ вимкнена.
                </div>
              </div>
              <input type="checkbox" id="gridSellingEnabled" ${(xe=e.grid)!=null&&xe.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((ke=e.grid)==null?void 0:ke.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((Be=e.grid)==null?void 0:Be.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((Ee=e.grid)==null?void 0:Ee.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Le=e.grid)==null?void 0:Le.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${(($e=e.grid)==null?void 0:$e.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Se=e.grid)==null?void 0:Se.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження (Авто / EV)</div>
          <div class="field-row">
            <label>Потужність зарядки авто / зовнішніх приладів:</label>
            <input type="text" id="gridCarPower" value="${((Ce=e.grid)==null?void 0:Ce.car_power_entity)||""}">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab==="loads"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор):</label>
            <input type="text" id="loadEssential" value="${((Ie=e.load)==null?void 0:Ie.essential_power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((Te=e.load)==null?void 0:Te.daily_house_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((Pe=e.load)==null?void 0:Pe.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Fe=e.load)==null?void 0:Fe.subloads)||[]).map((u,b)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${b}" value="${u.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${b}" style="width: 140px;">
                  <option value="boiler" ${u.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${u.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${u.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${u.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${u.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${u.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${u.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${b}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${b}" value="${u.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var y,$,E,S,I,_,C,l,r;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",t=>{this._switchTab(t.target.dataset.tab)})}),(y=e.getElementById("btnPresetEsp"))==null||y.addEventListener("click",()=>this._applyPreset("deye_esphome")),($=e.getElementById("btnPresetSolarman"))==null||$.addEventListener("click",()=>this._applyPreset("deye_solarman"));const o=(s,t)=>{const i=e.getElementById(s);i&&i.addEventListener("input",h=>this._valueChanged(t,h.target.value))},g=(s,t)=>{const i=e.getElementById(s);i&&i.addEventListener("change",h=>this._valueChanged(t,h.target.checked))},p=(s,t,i,h="")=>{const w=e.getElementById(s);w&&w.addEventListener("input",F=>{const M=parseFloat(F.target.value);if(i){const z=e.getElementById(i);z&&(z.innerText=`${M}${h}`)}this._valueChanged(t,M)})};o("title","title"),g("animEnabled","animations.enabled"),p("animSpeed","animations.speed","animSpeedVal","s"),(E=e.getElementById("solarPvCount"))==null||E.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=t,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<t;){const i=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${i}`,name:`PV ${i}`,voltage_entity:`sensor.deye_12k_inverter_pv${i}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${i}_current`,power_entity:`sensor.deye_12k_inverter_pv${i}_power`})}this._valueChanged("solar.pv_count",t),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].name=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].voltage_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].current_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].power_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),o("solarTotalPower","solar.total_power_entity"),o("solarDailyYield","solar.daily_yield_entity"),p("solarTargetDaily","solar.target_daily_yield"),o("invModel","inverter.model_name"),o("invPower","inverter.power_entity"),o("invTempAc","inverter.ac_temperature_entity"),o("invTempDc","inverter.dc_temperature_entity"),o("invVolt","inverter.voltage_entity"),o("invCurrent","inverter.current_entity"),o("invFreq","inverter.frequency_entity"),(S=e.getElementById("auxType"))==null||S.addEventListener("change",s=>{const t=s.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=t;const h={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[t]||"Мікроінвертор";this._config.aux.title=h;const w=e.getElementById("auxTitle");w&&(w.value=h),this._valueChanged("aux.type",t),this._valueChanged("aux.title",h)}),o("auxTitle","aux.title"),o("auxPower","aux.power_entity"),(I=e.getElementById("windTurbineCount"))==null||I.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=t,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<t;){const i=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${i}`,name:`Вітряк ${i}`,power_entity:`sensor.wind_turbine_${i}_power`,speed_entity:`sensor.wind_turbine_${i}_speed`,animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",t),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),p("windThreshold","wind.animation_threshold","windThresholdVal","W"),(_=e.getElementById("windThreshold"))==null||_.addEventListener("input",s=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(s.target.value))}),p("windMaxPower","wind.max_power"),e.querySelectorAll(".turbine-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].name=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].power_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].speed_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),o("batSoc","battery.soc_entity"),o("batPower","battery.power_entity"),o("batPowerSign","battery.power_sign"),o("batVolt","battery.voltage_entity"),o("batCurrent","battery.current_entity"),o("batCapacity","battery.capacity_entity"),o("batChargeDaily","battery.charge_daily_entity"),o("batDischargeDaily","battery.discharge_daily_entity"),(C=e.getElementById("batParallelCount"))==null||C.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=t,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<t;){const i=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${i}`,name:`Батарея ${i}`,soc_entity:`sensor.bms_rack${i}_soc`,current_entity:`sensor.bms_rack${i}_current`,voltage_entity:`sensor.bms_rack${i}_voltage`,power_entity:`sensor.bms_rack${i}_power`,temperature_entity:`sensor.bms_rack${i}_temperature`})}this._valueChanged("battery.parallel_batteries",t),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].name=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].soc_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].current_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].voltage_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].temperature_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].power_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].capacity_kwh=parseFloat(t.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),g("gridSellingEnabled","grid.selling_enabled"),o("gridPower","grid.power_entity"),o("gridPowerSign","grid.power_sign"),p("gridMinThreshold","grid.min_power_threshold"),o("gridImportDaily","grid.import_daily_entity"),o("gridExportDaily","grid.export_daily_entity"),o("gridCarPower","grid.car_power_entity"),o("loadEssential","load.essential_power_entity"),o("loadDailyHouse","load.daily_house_entity");const v=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const s=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${s}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(l=e.getElementById("btnAddSubload"))==null||l.addEventListener("click",v),(r=e.getElementById("btnAddSubloadBottom"))==null||r.addEventListener("click",v),e.querySelectorAll(".btn-del-subload").forEach(s=>{s.addEventListener("click",t=>{var w;const i=t.currentTarget||t.target.closest(".btn-del-subload"),h=parseInt(i.dataset.idx);(w=this._config.load)!=null&&w.subloads&&(this._config.load.subloads.splice(h,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(s=>{s.addEventListener("input",t=>{var h,w;const i=parseInt(t.target.dataset.idx);(w=(h=this._config.load)==null?void 0:h.subloads)!=null&&w[i]&&(this._config.load.subloads[i].name=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(s=>{s.addEventListener("change",t=>{var h,w;const i=parseInt(t.target.dataset.idx);(w=(h=this._config.load)==null?void 0:h.subloads)!=null&&w[i]&&(this._config.load.subloads[i].icon=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(s=>{s.addEventListener("input",t=>{var h,w;const i=parseInt(t.target.dataset.idx);(w=(h=this._config.load)==null?void 0:h.subloads)!=null&&w[i]&&(this._config.load.subloads[i].entity=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",li);class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(G))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const o=JSON.parse(JSON.stringify(e)),g=JSON.parse(JSON.stringify(G));this._config=this._deepMerge(g,o),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,o){const g=Array.isArray(e)?[...e]:Object.assign({},e);if(!o||typeof o!="object")return g;for(const p of Object.keys(o)){const v=o[p],y=e?e[p]:void 0;v&&typeof v=="object"&&!Array.isArray(v)?g[p]=this._deepMerge(y||{},v):g[p]=v}return g}_getEntityState(e){var v;if(!this._hass||!e||!this._hass.states[e])return null;const o=this._hass.states[e],g=parseFloat(o.state),p=((v=o.attributes)==null?void 0:v.unit_of_measurement)||"";return{raw:o.state,val:isNaN(g)?0:g,unit:p,attributes:o.attributes}}_formatPower(e,o=0){if(!e)return{num:o.toFixed(3),kw:o,str:`${o.toFixed(3)} кВт`};let g=e.val;return e.unit==="W"&&(g=g/1e3),{num:g.toFixed(3),kw:g,str:`${g.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const o=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}_renderCardSkeleton(){var o,g,p,v,y,$,E,S,I,_,C,l,r;const e=this._config||G;this._initialized=!0,this.shadowRoot.innerHTML=`
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${Z.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((g=e.solar)==null?void 0:g.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${Z.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8;">${Z.grid_tower}</div>
              <div class="es-node-title">Мережа</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">← ЕКСПОРТ</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Z.house_outline}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">1,000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Z.car}</div>
              <div class="es-node-title" id="carTitle">${((p=e.grid)==null?void 0:p.car_title)||"Авто"}</div>
              <div class="es-mono es-node-power" id="carPowerVal" style="color: #38bdf8;">1,000 кВт</div>
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
                  <div class="es-inverter-icon-box">${Z.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">Гібридний інвертор</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 кВт</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((v=e.aux)==null?void 0:v.type)==="none"||((y=e.aux)==null?void 0:y.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${Z[($=e.aux)==null?void 0:$.type]||Z.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((E=e.aux)==null?void 0:E.type)==="microinverter"&&(!((S=e.aux)!=null&&S.title)||((I=e.aux)==null?void 0:I.title)==="Вітрогенератор")?"Мікроінвертор":((_=e.aux)==null?void 0:_.title)||"Мікроінвертор"}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((C=e.aux)==null?void 0:C.subtitle)||"Джерело → GEN"}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((l=e.wind)==null?void 0:l.show)===!1&&((r=e.aux)==null?void 0:r.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              Будинок <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${Z.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var E,S,I,_,C,l,r,s;const e=this._config||G,o=((E=this._nodes)==null?void 0:E.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!o)return;if(o.innerHTML="",!(((S=e.wind)==null?void 0:S.show)!==!1||((I=e.aux)==null?void 0:I.type)==="wind")){o.classList.add("hidden");return}o.classList.remove("hidden");const p=((_=e.wind)==null?void 0:_.turbine_count)||((l=(C=e.wind)==null?void 0:C.turbines)==null?void 0:l.length)||2,v=((r=e.wind)==null?void 0:r.turbines)||[],y=document.createElement("div");y.className="es-wind-summary-bar es-mono",y.id="windStationSummaryBar",y.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">5.90</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">109.2</span> kWh</span>
    `,o.appendChild(y);const $=document.createElement("div");$.className="es-wind-pods-row",o.appendChild($);for(let t=0;t<p;t++){const i=v[t]||{name:`Вітряк ${t+1}`,power_entity:`sensor.wind_turbine_${t+1}_power`,animation_threshold:((s=e.wind)==null?void 0:s.animation_threshold)||50},h=document.createElement("div");h.className="es-turbine-card glow-wind clickable-node",h.id=`turbineCard_${t+1}`,h.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${t+1}">
              ${Z.wind_turbine}
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
          <span class="es-mono" id="turbineRpmBox_${t+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${t+1}">0</span> RPM
          </span>
        </div>

        <div class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: flex; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${t+1}" style="color: #6ee7b7; font-weight: 700;">${t===0?"4.80":"1.10"}</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${t+1}" style="color: #38bdf8; font-weight: 700;">${t===0?"86.4":"22.8"}</span> kWh</div>
        </div>
      `,h.addEventListener("click",()=>{this._fireMoreInfo(i.power_entity)}),$.appendChild(h)}}_renderDynamicPvPanels(){var p,v,y,$,E;const e=this._config||G,o=this._nodes.pvPanelsContainer;if(!o)return;o.innerHTML="";const g=((p=e.solar)==null?void 0:p.pv_count)||((y=(v=e.solar)==null?void 0:v.strings)==null?void 0:y.length)||3;for(let S=1;S<=g;S++){const I=S<10?`0${S}`:`${S}`,_=((E=($=e.solar)==null?void 0:$.strings)==null?void 0:E[S-1])||{},C=_.name||`PV ${I}`,l=document.createElement("div");l.className="es-pv-panel glow-solar clickable-node",l.dataset.pvIndex=S,l.id=`pvPanel_${S}`,l.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${Z.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${C}</span>
        <span class="es-pv-val es-mono" id="pvVal_${S}">1,200 кВт</span>
      `,l.addEventListener("click",()=>{var s;const r=_.power_entity||_.voltage_entity||_.current_entity||((s=e.solar)==null?void 0:s.total_power_entity);this._fireMoreInfo(r)}),o.appendChild(l)}}_renderDynamicSubloads(){var p;const e=this._config||G,o=this._nodes.subloadsContainer;if(!o)return;o.innerHTML="",(((p=e.load)==null?void 0:p.subloads)||[]).forEach((v,y)=>{const $=document.createElement("div");$.className="es-subload-card clickable-node",$.id=`subloadCard_${y}`,$.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${Z[v.icon]||Z.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${v.name}</span>
        <span class="es-mono" id="subloadVal_${y}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,$.addEventListener("click",()=>{this._fireMoreInfo(v.entity)}),o.appendChild($)})}_renderDynamicBatteryRack(){var y,$,E,S,I,_,C;const e=this._config||G,o=this._nodes.batteryRackContainer;if(!o)return;o.innerHTML="";const g=((y=e.battery)==null?void 0:y.parallel_batteries)||((E=($=e.battery)==null?void 0:$.modules)==null?void 0:E.length)||2,p=[82,76,91,68,85,90,72,80],v=[52.4,52.4,52.4,52.4,52.4,52.4];for(let l=1;l<=g;l++){const r=((I=(S=e.battery)==null?void 0:S.modules)==null?void 0:I[l-1])||((C=(_=e.battery)==null?void 0:_.module_entities)==null?void 0:C[l-1])||{},s=r.name||`Батарея ${l}`,t=p[(l-1)%p.length],i=v[(l-1)%v.length],h=document.createElement("div");h.className="es-battery-pack-card glow-battery clickable-node",h.id=`batPackCard_${l}`,h.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${Z.battery_vertical}</div>
        <span class="es-bat-name">${s}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${l}">${t}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${l}">${i.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${l}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
      `,h.addEventListener("click",()=>{var F;const w=r.soc_entity||r.soc||r.voltage_entity||r.volt||r.current_entity||((F=e.battery)==null?void 0:F.soc_entity);this._fireMoreInfo(w)}),o.appendChild(h)}}_bindInteractions(){var g,p,v,y,$,E,S,I,_,C,l,r,s;const e=this.shadowRoot,o=this._config||G;(g=e.getElementById("solarHeaderNode"))==null||g.addEventListener("click",()=>{var t,i;this._fireMoreInfo(((t=o.solar)==null?void 0:t.daily_yield_entity)||((i=o.solar)==null?void 0:i.total_power_entity))}),(p=e.getElementById("totalPvPowerBadge"))==null||p.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.solar)==null?void 0:t.total_power_entity)}),(v=e.getElementById("gridNode"))==null||v.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.power_entity)}),(y=e.getElementById("nonEssentialNode"))==null||y.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.non_essential_power_entity)}),($=e.getElementById("carNode"))==null||$.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.car_power_entity)}),(E=e.getElementById("inverterNode"))==null||E.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.inverter)==null?void 0:t.power_entity)}),(S=e.getElementById("auxNode"))==null||S.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.aux)==null?void 0:t.power_entity)}),(I=e.getElementById("essentialNode"))==null||I.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.load)==null?void 0:t.essential_power_entity)}),(_=e.getElementById("masterBatteryHub"))==null||_.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.battery)==null?void 0:t.soc_entity)});for(let t=1;t<=8;t++){const i=e.getElementById(`batBranchBadge_${t}`),h=((l=(C=o.battery)==null?void 0:C.modules)==null?void 0:l[t-1])||((s=(r=o.battery)==null?void 0:r.module_entities)==null?void 0:s[t-1])||{};i==null||i.addEventListener("click",()=>{var F;const w=h.power_entity||h.current_entity||h.soc_entity||((F=o.battery)==null?void 0:F.soc_entity);this._fireMoreInfo(w)})}}_updateValues(){var $e,Se,Ce,Ie,Te,Pe,Fe,u,b,m,k,D,de,re,ce,pe,Ye,Ue,Je,Xe,nt,at,rt,lt,dt,ct,pt,ht,yt,gt,ut,bt,_t,ft,vt,wt,mt,xt,kt,Bt,Et,$t,St,Ct,It,Tt,Pt,Ft,Mt,Rt,At,Vt,Lt,Nt,zt,Dt,Ht,Wt,jt,Ot,Gt,qt,Yt,Ut,Jt,Xt,Kt,Zt,Qt,ei,ti,ii,oi,si,ni;if(!this._nodes.dailySolarYield)return;const e=this._config||G,o=(($e=e.solar)==null?void 0:$e.pv_count)||((Ce=(Se=e.solar)==null?void 0:Se.strings)==null?void 0:Ce.length)||3;let g=0,p=!1;for(let a=1;a<=o;a++){const T=(Te=(Ie=e.solar)==null?void 0:Ie.strings)==null?void 0:Te[a-1],O=(T==null?void 0:T.voltage_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_voltage`:""),R=(T==null?void 0:T.current_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_current`:""),H=(T==null?void 0:T.power_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_power`:"");if(this._getEntityState(H)||this._getEntityState(O)||this._getEntityState(R)){p=!0;break}}for(let a=1;a<=o;a++){const T=this.shadowRoot.getElementById(`pvVal_${a}`),O=this.shadowRoot.getElementById(`pvVolt_${a}`),R=this.shadowRoot.getElementById(`pvCurr_${a}`),H=(Fe=(Pe=e.solar)==null?void 0:Pe.strings)==null?void 0:Fe[a-1],Ne=(H==null?void 0:H.voltage_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_voltage`:""),B=(H==null?void 0:H.current_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_current`:""),ne=(H==null?void 0:H.power_entity)||(a<=3?`sensor.deye_12k_inverter_pv${a}_power`:""),oe=this._getEntityState(Ne),K=this._getEntityState(B),he=this._getEntityState(ne);let ee=0,J=0,le=0;he?le=this._formatPower(he).kw:oe&&K?le=oe.val*K.val/1e3:oe?le=0:le=p?0:4,oe?ee=oe.val:ee=p?0:380+a*4.5,K?J=K.val:he&&ee>0?J=le*1e3/ee:J=p?0:3.12+a*.28,g+=le,T&&(T.innerText=`${le.toFixed(3)} кВт`),O&&(O.innerText=`${ee.toFixed(1)} V`),R&&(R.innerText=`${J.toFixed(2)} A`)}const v=this._getEntityState((u=e.solar)==null?void 0:u.total_power_entity);let y=0;v?y=this._formatPower(v).kw:y=g,this._nodes.totalPvPowerBadge.innerText=`${y.toFixed(3)} кВт`;const $=this._getEntityState((b=e.solar)==null?void 0:b.daily_yield_entity),E=$?$.val:p?0:48.6;this._nodes.dailySolarYield.innerText=E.toFixed(1);const S=((m=e.solar)==null?void 0:m.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=S.toFixed(1);const I=Math.min(100,Math.round(E/S*100));this._nodes.solarProgressBar.style.width=`${I}%`;const _=this._getEntityState((k=e.inverter)==null?void 0:k.power_entity);this._nodes.inverterPowerVal&&((D=e.inverter)!=null&&D.power_entity&&_?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(_,0).str):this._nodes.inverterPowerVal.style.display="none");const C=this._getEntityState((de=e.inverter)==null?void 0:de.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=C?C.val.toFixed(2):"41,20";const l=this._getEntityState((re=e.inverter)==null?void 0:re.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=l?l.val.toFixed(2):"38,40";const r=this._getEntityState((ce=e.inverter)==null?void 0:ce.voltage_entity);this._nodes.inverterVolt.innerText=r?r.val.toFixed(2):"231,45";const s=this._getEntityState((pe=e.inverter)==null?void 0:pe.current_entity);this._nodes.inverterCurrent.innerText=s?s.val.toFixed(2):"8,60";const t=this._getEntityState((Ye=e.inverter)==null?void 0:Ye.frequency_entity);this._nodes.inverterFreq.innerText=t?t.val.toFixed(2):"50,01";const i=((Ue=e.wind)==null?void 0:Ue.show)!==!1||((Je=e.aux)==null?void 0:Je.type)==="wind",h=this.shadowRoot.getElementById("windStationContainer"),w=this._nodes.auxNode;if(h)if(!i)h.classList.add("hidden");else{h.classList.remove("hidden");const a=((Xe=e.wind)==null?void 0:Xe.turbine_count)||((at=(nt=e.wind)==null?void 0:nt.turbines)==null?void 0:at.length)||2,T=((rt=e.wind)==null?void 0:rt.turbines)||[];for(let B=0;B<a;B++){const ne=T[B]||{power_entity:`sensor.wind_turbine_${B+1}_power`,rpm_entity:"",daily_energy_entity:`sensor.wind_turbine_${B+1}_daily_energy`,monthly_energy_entity:`sensor.wind_turbine_${B+1}_monthly_energy`,animation_threshold:((lt=e.wind)==null?void 0:lt.animation_threshold)||50},oe=this.shadowRoot.getElementById(`turbinePower_${B+1}`),K=this.shadowRoot.getElementById(`turbineStatus_${B+1}`),he=this.shadowRoot.getElementById(`turbineIcon_${B+1}`),ee=this.shadowRoot.getElementById(`turbineCard_${B+1}`),J=this.shadowRoot.getElementById(`turbineRpmVal_${B+1}`),le=this.shadowRoot.getElementById(`turbineDailyVal_${B+1}`),Ze=this.shadowRoot.getElementById(`turbineMonthlyVal_${B+1}`),ot=B===0?1.56:.22,Oe=this._getEntityState(ne.power_entity),Qe=this._formatPower(Oe,ot);oe&&(oe.innerText=Qe.str);let Ge=Qe.kw*1e3;Oe&&Oe.unit==="W"&&(Ge=Oe.val);const ze=ne.animation_threshold??((dt=e.wind)==null?void 0:dt.animation_threshold)??50,we=he==null?void 0:he.querySelector(".turbine-rotor");if(Ge>=ze){we&&we.classList.add("spinning"),ee&&(ee.classList.add("glow-wind"),ee.style.borderColor="rgba(6, 182, 212, 0.55)");const et=((ct=e.wind)==null?void 0:ct.max_power)||3e3,te=(3.2-Math.min(1,Math.max(0,(Ge-ze)/(et-ze)))*2.75).toFixed(2);we&&we.style.setProperty("--turbine-speed",`${te}s`),K&&(K.innerText="Генерація",K.style.color="#67e8f9")}else we&&we.classList.remove("spinning"),ee&&(ee.classList.remove("glow-wind"),ee.style.borderColor="rgba(255, 255, 255, 0.08)"),K&&(K.innerText="Штиль",K.style.color="#94a3b8");const qe=ne.rpm_entity,ye=qe&&((pt=this._hass)!=null&&pt.states[qe])?this._getEntityState(qe):null,ge=this.shadowRoot.getElementById(`turbineRpmBox_${B+1}`);ge&&(ye&&ye.raw!=="unavailable"&&ye.raw!=="unknown"&&typeof ye.val=="number"&&!isNaN(ye.val)&&ye.val>0?(ge.style.display="inline",J&&(J.innerText=Math.round(ye.val))):ge.style.display="none");const Ke=this._getEntityState(ne.daily_energy_entity);le&&(le.innerText=Ke?Ke.val.toFixed(2):B===0?"4.80":"1.10");const Me=this._getEntityState(ne.monthly_energy_entity);Ze&&(Ze.innerText=Me?Me.val.toFixed(1):B===0?"86.4":"22.8")}let O=0,R=0;for(let B=0;B<a;B++){const ne=T[B]||{},oe=this._getEntityState(ne.daily_energy_entity),K=this._getEntityState(ne.monthly_energy_entity);O+=oe?oe.val:B===0?4.8:1.1,R+=K?K.val:B===0?86.4:22.8}const H=this.shadowRoot.getElementById("windTotalDailyVal"),Ne=this.shadowRoot.getElementById("windTotalMonthlyVal");if(H){const B=this._getEntityState((ht=e.wind)==null?void 0:ht.daily_energy_entity);H.innerText=B?B.val.toFixed(2):O.toFixed(2)}if(Ne){const B=this._getEntityState((yt=e.wind)==null?void 0:yt.monthly_energy_entity);Ne.innerText=B?B.val.toFixed(1):R.toFixed(1)}}let F=0;if(w)if(((gt=e.aux)==null?void 0:gt.type)==="none"||((ut=e.aux)==null?void 0:ut.type)==="wind")w.classList.add("hidden");else{w.classList.remove("hidden");const a=this._getEntityState((bt=e.aux)==null?void 0:bt.power_entity),T=this._formatPower(a,2);F=T.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=T.str);const O={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let R=(_t=e.aux)==null?void 0:_t.title;((ft=e.aux)==null?void 0:ft.type)==="microinverter"&&(!R||R==="Вітрогенератор")?R="Мікроінвертор":(vt=e.aux)!=null&&vt.type&&O[e.aux.type]&&(!R||R==="Вітрогенератор")?R=O[e.aux.type]:R||(R="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=R),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=Z[(wt=e.aux)==null?void 0:wt.type]||Z.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((mt=e.aux)==null?void 0:mt.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),w.style.borderColor="rgba(192, 132, 252, 0.45)",w.style.background="rgba(88, 28, 135, 0.35)",w.classList.remove("glow-wind"),w.classList.add("glow-aux")}const M=this._getEntityState((xt=e.grid)==null?void 0:xt.power_entity),z=M?M.unit==="W"?M.val/1e3:M.val:0,A=((kt=e.grid)==null?void 0:kt.power_sign)||((Bt=e.grid)!=null&&Bt.invert_power?"inverted":"deye"),V=((Et=e.grid)==null?void 0:Et.selling_enabled)===!0,q=((($t=e.grid)==null?void 0:$t.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3;let L=!1,Y=!1;const n=Math.abs(z);n>=q&&(A==="deye"?z<0?L=!0:Y=!0:z>0?L=!0:Y=!0),L&&!V&&(L=!1),this._nodes.gridPowerVal&&(this._nodes.gridPowerVal.innerText=`${n.toFixed(3)} кВт`,L?this._nodes.gridPowerVal.style.color="#34d399":Y?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"),this._nodes.gridDirectionLabel&&(L?(this._nodes.gridDirectionLabel.innerText="← Експорт",this._nodes.gridDirectionLabel.style.color="#34d399"):Y?(this._nodes.gridDirectionLabel.innerText="→ Імпорт",this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText="Мережа",this._nodes.gridDirectionLabel.style.color="#64748b"));const d=this._getEntityState((St=e.grid)==null?void 0:St.import_daily_entity);this._nodes.gridImportDaily.innerText=d?`${d.val.toFixed(2)} kWh`:"0.00 kWh";const x=this._getEntityState((Ct=e.grid)==null?void 0:Ct.export_daily_entity);this._nodes.gridExportDaily.innerText=x?`${x.val.toFixed(2)} kWh`:"0.00 kWh";const c=this._getEntityState((It=e.grid)==null?void 0:It.non_essential_power_entity);this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=c?this._formatPower(c,0).str:"1,000 кВт");const f=this._getEntityState((Tt=e.grid)==null?void 0:Tt.car_power_entity);this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=f?this._formatPower(f,0).str:"1,000 кВт");const P=this._getEntityState((Pt=e.load)==null?void 0:Pt.essential_power_entity);this._nodes.essentialPowerVal.innerText=this._formatPower(P,0).str;const N=this._getEntityState((Ft=e.load)==null?void 0:Ft.daily_house_entity);this._nodes.dailyHouseKwh.innerText=N?`${N.val.toFixed(2)} kWh`:"12,40 kWh";let U=0;(((Mt=e.load)==null?void 0:Mt.subloads)||[]).forEach((a,T)=>{const O=this.shadowRoot.getElementById(`subloadVal_${T}`),R=this._getEntityState(a.entity),H=this._formatPower(R,2);U+=H.kw,O&&(O.innerText=H.str)});const se=this._getEntityState((Rt=e.battery)==null?void 0:Rt.soc_entity),We=se?se.val:80;this._nodes.masterBatterySoc.innerText=`${We.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const ue=this._getEntityState((At=e.battery)==null?void 0:At.power_entity),Q=this._getEntityState((Vt=e.battery)==null?void 0:Vt.current_entity),ie=ue?ue.unit==="W"?ue.val/1e3:ue.val:0,ae=((Lt=e.battery)==null?void 0:Lt.power_sign)||((Nt=e.battery)!=null&&Nt.invert_power?"standard":"deye");let j=!1,W=!1;const X=Math.abs(ie);if(X>=.02?ae==="deye"?ie<0?j=!0:W=!0:ie>0?j=!0:W=!0:Q&&Math.abs(Q.val)>=.3&&(ae==="deye"?Q.val<0?j=!0:W=!0:Q.val>0?j=!0:W=!0),this._isCharging=j,this._isDischarging=W,this._nodes.masterBatteryFlowHint){let a="Очікування",T="#94a3b8";j?(a="Заряд ↓",T="#34d399"):W&&(a="Розряд ↑",T="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${X.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${T}; font-weight: 700; font-size: 14px;">${a}</span>`}const be=this._getEntityState((zt=e.battery)==null?void 0:zt.voltage_entity),me=be?be.val.toFixed(2):"53.24",Ve=Q?Q.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${me.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${Ve.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Dt=e.battery)==null?void 0:Dt.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const a=((Ht=e.battery)==null?void 0:Ht.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${a}%`}const _e=((Wt=e.battery)==null?void 0:Wt.parallel_batteries)||((Ot=(jt=e.battery)==null?void 0:jt.modules)==null?void 0:Ot.length)||2;let fe=0;for(let a=0;a<_e;a++){const T=((qt=(Gt=e.battery)==null?void 0:Gt.modules)==null?void 0:qt[a])||((Ut=(Yt=e.battery)==null?void 0:Yt.module_entities)==null?void 0:Ut[a])||{},O=T.capacity_kwh!==void 0?parseFloat(T.capacity_kwh):a===0?7.88:a===1?5.12:(((Jt=e.battery)==null?void 0:Jt.capacity_kwh)||13)/_e;fe+=isNaN(O)?0:O}fe<=0&&(fe=parseFloat((Xt=e.battery)==null?void 0:Xt.capacity_kwh)||13);const ve=this._getEntityState(((Kt=e.battery)==null?void 0:Kt.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),xe=ve&&!isNaN(ve.val)?ve.val:null;if(this._nodes.batCapacityVal){const a=xe!==null?xe:fe;this._nodes.batCapacityVal.innerText=`${a.toFixed(2).replace(".",",")} kWh`}const ke=this._getEntityState((Zt=e.battery)==null?void 0:Zt.charge_daily_entity);this._nodes.batChargeDaily.innerText=ke?`${ke.val.toFixed(2)} kWh`:"4,30 kWh";const Be=this._getEntityState((Qt=e.battery)==null?void 0:Qt.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=Be?`${Be.val.toFixed(2)} kWh`:"6,10 kWh";const Ee=[];for(let a=1;a<=_e;a++){const T=this.shadowRoot.getElementById(`batPackSoc_${a}`),O=this.shadowRoot.getElementById(`batPackVolt_${a}`),R=this.shadowRoot.getElementById(`batPackCurr_${a}`),H=this.shadowRoot.getElementById(`batPackPower_${a}`),Ne=this.shadowRoot.getElementById(`batPackTempVal_${a}`),B=this.shadowRoot.getElementById(`batPackStateTag_${a}`),ne=this.shadowRoot.getElementById(`batPackKwh_${a}`),oe=this.shadowRoot.getElementById(`batPackBar1_${a}`),K=this.shadowRoot.getElementById(`batPackBar2_${a}`),he=this.shadowRoot.getElementById(`batPackBar3_${a}`),ee=this.shadowRoot.getElementById(`batPackBar4_${a}`),J=((ti=(ei=e.battery)==null?void 0:ei.modules)==null?void 0:ti[a-1])||((oi=(ii=e.battery)==null?void 0:ii.module_entities)==null?void 0:oi[a-1])||{},le=J.soc_entity||J.soc||`sensor.bms_rack${a}_soc`,Ze=J.current_entity||`sensor.bms_rack${a}_current`,ot=J.voltage_entity||J.volt||`sensor.bms_rack${a}_voltage`,Oe=J.power_entity||`sensor.bms_rack${a}_power`,Qe=J.temperature_entity||J.temp||`sensor.bms_rack${a}_temperature`,Ge=this._getEntityState(le),ze=this._getEntityState(Ze),we=this._getEntityState(ot),qe=this._getEntityState(Oe),ye=this._getEntityState(Qe),ge=Ge?Ge.val:a===1?82:a===2?85:75,Ke=we?we.val:a===1?54.1:a===2?54:52.4,Me=ze?ze.val:a===1?18.4:a===2?25.2:8.2,et=ye?ye.val:a===1?38.2:a===2?21:21.5;let Re=0;qe?Re=Math.abs(this._formatPower(qe).kw):Re=Ke*Math.abs(Me)/1e3,T&&(T.innerText=`${ge.toFixed(0)}%`),O&&(O.innerText=`${Ke.toFixed(1)} V`),R&&(R.innerText=`${Math.abs(Me).toFixed(1)} A`),H&&(H.innerText=`${Re.toFixed(2)} кВт`),Ne&&(Ne.innerText=`${et.toFixed(1)}`);let te=!1;W?te=!1:j?te=!0:ze?te=(((si=e.battery)==null?void 0:si.power_sign)||"deye")==="deye"?Me<0:Me>0:te=Me<0;const De=this.shadowRoot.getElementById(`batBranchBadge_${a}`);De&&(Re<.02?(De.className="es-bat-branch-badge es-mono idle",De.innerHTML="<span>0.00 кВт</span>"):te?(De.className="es-bat-branch-badge es-mono charge",De.innerHTML=`<span>${Re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`):(De.className="es-bat-branch-badge es-mono discharge",De.innerHTML=`<span>${Re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`));const Ae=this.shadowRoot.getElementById(`batPackCard_${a}`),ai=Ae==null?void 0:Ae.querySelector(".es-battery-gauge"),ri=Ae==null?void 0:Ae.querySelector(".es-battery-gauge-nipple");Ae&&(Ae.style.borderColor=te?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),ai&&(ai.style.borderColor=te?"#10b981":"#ef4444"),ri&&(ri.style.background=te?"#10b981":"#ef4444"),B&&(te?(B.className="es-bat-state-tag charge",B.innerText="Заряд",B.style.color="#34d399",B.style.background="rgba(16, 185, 129, 0.18)",B.style.borderColor="rgba(16, 185, 129, 0.4)"):(B.className="es-bat-state-tag discharge",B.innerText="Розряд",B.style.color="#f87171",B.style.background="rgba(239, 68, 68, 0.18)",B.style.borderColor="rgba(239, 68, 68, 0.4)")),H&&(H.style.color=te?"#34d399":"#f87171"),R&&(R.style.color=te?"#38bdf8":"#f87171");const di=((J.capacity_kwh!==void 0?parseFloat(J.capacity_kwh):(((ni=e.battery)==null?void 0:ni.capacity_kwh)||10)/_e)*(ge/100)).toFixed(2);ne&&(ne.innerText=`${di} kWh`);const tt=te?"active-green":"active-red";oe&&K&&he&&ee&&(oe.className=`es-bat-bar ${ge>=10?tt:""}`,K.className=`es-bat-bar ${ge>=35?tt:""}`,he.className=`es-bat-bar ${ge>=65?tt:""}`,ee.className=`es-bat-bar ${ge>=85?tt:""}`),Ee.push({kwNum:Re,isChg:te})}const Le=c?c.unit==="W"?c.val/1e3:c.val:1;this._updateFlowPaths(),this._updateFlowAnimations(z,L,Y,y,P?P.unit==="W"?P.val/1e3:P.val:0,X,j,W,f?f.unit==="W"?f.val/1e3:f.val:0,Ee,Le,U,F)}_setupResizeObserver(){var o;if(this._resizeObserver)return;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,o,g,p,v,y,$,E,S;try{const I=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!I)return;const _=I.getBoundingClientRect();if(_.width===0||_.height===0)return;const C=this._config||G,l=(n,d=.5,x=.5)=>{if(!n)return null;const c=n.getBoundingClientRect();return{x:Math.round(c.left-_.left+c.width*d),y:Math.round(c.top-_.top+c.height*x)}},r=(n,d,x)=>{const c=this.shadowRoot.getElementById(n),f=this.shadowRoot.getElementById(d);c&&c.setAttribute("d",x||""),f&&f.setAttribute("d",x||"")},s=this.shadowRoot.getElementById("gridNode"),t=this.shadowRoot.getElementById("inverterNode"),i=this.shadowRoot.getElementById("essentialNode"),h=this.shadowRoot.getElementById("totalPvPowerBadge"),w=this.shadowRoot.getElementById("masterBatteryHub"),F=this.shadowRoot.getElementById("carNode");if(s&&t){const n=s.getBoundingClientRect(),d=t.getBoundingClientRect();if(n.bottom<d.top+30){const c=l(s,.7,1),f=l(t,.2,0);if(c&&f){const P=Math.round((c.y+f.y)/2),N=`M ${c.x} ${c.y} C ${c.x} ${P}, ${f.x} ${P}, ${f.x} ${f.y}`;r("pathGridInvBase","pathGridInvFlow",N)}}else{const c=Math.round(d.top-_.top+d.height*.55),f=Math.round(n.right-_.left),P=Math.round(d.left-_.left),N=Math.round(n.top-_.top+n.height*.5);let U="";if(Math.abs(N-c)<=8)U=`M ${f} ${c} L ${P} ${c}`;else{const se=Math.round(f+24);U=`M ${f} ${N} C ${se} ${N}, ${se} ${c}, ${P} ${c}`}r("pathGridInvBase","pathGridInvFlow",U)}}if(t&&i){const n=i.getBoundingClientRect(),d=t.getBoundingClientRect();if(n.bottom<d.top+30){const c=l(t,.8,0),f=l(i,.3,1);if(c&&f){const P=Math.round((c.y+f.y)/2),N=`M ${c.x} ${c.y} C ${c.x} ${P}, ${f.x} ${P}, ${f.x} ${f.y}`;r("pathInvLoadBase","pathInvLoadFlow",N)}}else{const c=Math.round(d.top-_.top+d.height*.55),f=Math.round(d.right-_.left),P=Math.round(n.left-_.left),N=Math.round(n.top-_.top+n.height*.5);let U="";if(Math.abs(N-c)<=8)U=`M ${f} ${c} L ${P} ${c}`;else{const se=Math.round(P-24);U=`M ${f} ${c} C ${se} ${c}, ${se} ${N}, ${P} ${N}`}r("pathInvLoadBase","pathInvLoadFlow",U)}}if(h&&t){const n=l(h,.5,1),d=l(t,.5,0);if(n&&d){const x=`M ${n.x} ${n.y} L ${d.x} ${d.y}`;r("pathSolarInvBase","pathSolarInvFlow",x)}}if(t&&w){const n=l(t,.5,1),d=l(w,.5,0);if(n&&d){const x=`M ${n.x} ${n.y} L ${d.x} ${d.y}`;r("pathInvBatBase","pathInvBatFlow",x)}}const M=this.shadowRoot.getElementById("nonEssentialNode");if(s&&M&&M.offsetHeight>0){const n=l(s,.5,1),d=l(M,.5,0);if(n&&d){const x=`M ${n.x} ${n.y} L ${d.x} ${d.y}`;r("pathGridNonEssBase","pathGridNonEssFlow",x)}}else r("pathGridNonEssBase","pathGridNonEssFlow","");if(M&&F&&F.offsetHeight>0){const n=l(M,.5,1),d=l(F,.5,0);if(n&&d){const x=`M ${n.x} ${n.y} L ${d.x} ${d.y}`;r("pathNonEssCarBase","pathNonEssCarFlow",x)}}else r("pathNonEssCarBase","pathNonEssCarFlow","");const z=this.shadowRoot.getElementById("subloadsBusContainer");if(i&&z){const n=l(i,.5,1),d=l(z,.5,0);if(n&&d){const x=`M ${n.x} ${n.y} L ${d.x} ${d.y}`;r("pathLoadSubloadsBase","pathLoadSubloadsFlow",x)}}else r("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const A=this.shadowRoot.getElementById("auxNode");if(t&&A&&!A.classList.contains("hidden")&&A.offsetHeight>0){const n=l(A,.35,1),d=l(t,.9,0);if(n&&d){const x=Math.round((n.y+d.y)/2),c=`M ${n.x} ${n.y} C ${n.x} ${x}, ${d.x} ${x}, ${d.x} ${d.y}`;r("pathInvAuxBase","pathInvAuxFlow",c)}}else r("pathInvAuxBase","pathInvAuxFlow","");r("pathBatStemBase","pathBatStemFlow","");const V=this.shadowRoot.getElementById("windStationContainer"),L=((o=C.wind)==null?void 0:o.show)!==!1||((g=C.aux)==null?void 0:g.type)==="wind"?((p=C.wind)==null?void 0:p.turbine_count)||((y=(v=C.wind)==null?void 0:v.turbines)==null?void 0:y.length)||2:0;for(let n=1;n<=4;n++)if(n<=L&&V&&!V.classList.contains("hidden")){const d=this.shadowRoot.getElementById(`turbineCard_${n}`);if(d&&w){const x=l(d,.5,1),c=L===1?.5:.28+(n-1)/(L-1)*.44,f=l(w,c,0);if(x&&f){const P=`M ${x.x} ${x.y} L ${f.x} ${f.y}`;r(`pathTurbine${n}Base`,`pathTurbine${n}Flow`,P)}}else r(`pathTurbine${n}Base`,`pathTurbine${n}Flow`,"")}else r(`pathTurbine${n}Base`,`pathTurbine${n}Flow`,"");const Y=(($=C.battery)==null?void 0:$.parallel_batteries)||((S=(E=C.battery)==null?void 0:E.modules)==null?void 0:S.length)||2;for(let n=1;n<=8;n++){const d=this.shadowRoot.getElementById(`batPackCard_${n}`),x=this.shadowRoot.getElementById(`batBranchBadge_${n}`);if(n<=Y&&w&&d){const c=l(w,.5,1),f=l(d,.5,0);if(c&&f){const P=Math.round(c.y+(f.y-c.y)*.45);let N="";Math.abs(c.x-f.x)<=4?N=`M ${c.x} ${c.y} L ${f.x} ${f.y}`:N=`M ${c.x} ${c.y} C ${c.x} ${P}, ${f.x} ${P}, ${f.x} ${f.y}`,r(`pathBat${n}Base`,`pathBat${n}Flow`,N),x&&(x.style.left=`${f.x}px`,x.style.top=`${P}px`,x.style.display="flex")}else r(`pathBat${n}Base`,`pathBat${n}Flow`,""),x&&(x.style.display="none")}else r(`pathBat${n}Base`,`pathBat${n}Flow`,""),x&&(x.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,o,g,p,v;try{const y=this._config||G,$=this.shadowRoot.getElementById("solarBusSvg"),E=((e=y.solar)==null?void 0:e.pv_count)||((g=(o=y.solar)==null?void 0:o.strings)==null?void 0:g.length)||3;if($&&E>0){const _=$.getBoundingClientRect(),C=this.shadowRoot.getElementById("pvPanel_1"),l=this.shadowRoot.getElementById(`pvPanel_${E}`),r=this.shadowRoot.getElementById("solarBusBase"),s=this.shadowRoot.getElementById("solarFlowCollector"),t=this.shadowRoot.getElementById("solarBusStemBase"),i=this.shadowRoot.getElementById("solarBusStemFlow"),h=this.shadowRoot.getElementById("solarBusFeeders");if(C&&l&&_.width>0){const w=C.getBoundingClientRect(),F=l.getBoundingClientRect(),M=Math.round(w.left-_.left+w.width/2),z=Math.round(F.left-_.left+F.width/2),A=13,V=Math.round((M+z)/2);if(r&&(r.setAttribute("x1",M),r.setAttribute("y1",A),r.setAttribute("x2",z),r.setAttribute("y2",A)),s&&(s.setAttribute("x1",M),s.setAttribute("y1",A),s.setAttribute("x2",z),s.setAttribute("y2",A)),t&&(t.setAttribute("x1",V),t.setAttribute("y1",A),t.setAttribute("x2",V),t.setAttribute("y2",26)),i&&(i.setAttribute("x1",V),i.setAttribute("y1",A),i.setAttribute("x2",V),i.setAttribute("y2",26)),h){let q="";for(let L=1;L<=E;L++){const Y=this.shadowRoot.getElementById(`pvPanel_${L}`);if(Y){const n=Y.getBoundingClientRect(),d=Math.round(n.left-_.left+n.width/2);q+=`
                  <line x1="${d}" y1="0" x2="${d}" y2="${A}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${d}" y1="0" x2="${d}" y2="${A}" stroke="#fbbf24" stroke-width="2.5" />
                `}}h.innerHTML=q}}}const S=this.shadowRoot.getElementById("subloadsBusSvg"),I=((v=(p=y.load)==null?void 0:p.subloads)==null?void 0:v.length)||3;if(S&&I>0){const _=S.getBoundingClientRect(),C=this.shadowRoot.getElementById("subloadCard_0"),l=this.shadowRoot.getElementById(`subloadCard_${I-1}`),r=this.shadowRoot.getElementById("essentialNode"),s=this.shadowRoot.getElementById("subloadsBusBase"),t=this.shadowRoot.getElementById("subloadsFlowCollector"),i=this.shadowRoot.getElementById("subloadsBusStemBase"),h=this.shadowRoot.getElementById("subloadsBusStemFlow"),w=this.shadowRoot.getElementById("subloadsBusFeeders");if(C&&l&&_.width>0){const F=C.getBoundingClientRect(),M=l.getBoundingClientRect(),z=Math.round(F.left-_.left+F.width/2),A=Math.round(M.left-_.left+M.width/2),V=13;let q=Math.round((z+A)/2);if(r){const n=r.getBoundingClientRect();q=Math.round(n.left-_.left+n.width/2)}const L=Math.min(z,q),Y=Math.max(A,q);if(s&&(s.setAttribute("x1",L),s.setAttribute("y1",V),s.setAttribute("x2",Y),s.setAttribute("y2",V)),t&&(t.setAttribute("x1",L),t.setAttribute("y1",V),t.setAttribute("x2",Y),t.setAttribute("y2",V)),i&&(i.setAttribute("x1",q),i.setAttribute("y1",0),i.setAttribute("x2",q),i.setAttribute("y2",V)),h&&(h.setAttribute("x1",q),h.setAttribute("y1",0),h.setAttribute("x2",q),h.setAttribute("y2",V)),w){let n="";for(let d=0;d<I;d++){const x=this.shadowRoot.getElementById(`subloadCard_${d}`);if(x){const c=x.getBoundingClientRect(),f=Math.round(c.left-_.left+c.width/2);n+=`
                  <line x1="${f}" y1="${V}" x2="${f}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${f}" y1="${V}" x2="${f}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}w.innerHTML=n}}}}catch{}}_applyFlowAnimation(e,o,g,p,v){if(!e)return;if(!v){e.setAttribute("class",`flow-pulse ${o} inactive`),e.style.opacity="0",e.style.animation="none";return}const y=g?"flow-reverse":"flow-forward",$=g?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${o} ${y}`),e.style.opacity="1",e.style.setProperty("--flow-speed",p),e.style.animation=`${$} ${p} linear infinite`}_updateFlowAnimations(e,o,g,p,v,y,$,E,S,I=[],_=0,C=0,l=0){var ve,xe,ke,Be,Ee,Le,$e,Se,Ce,Ie,Te,Pe,Fe;const r=this._config||G,s=((ve=r.animations)==null?void 0:ve.enabled)!==!1,t=((xe=r.animations)==null?void 0:xe.speed)||1.2,i=(u,b=10)=>{const m=Math.abs(u);if(m<.05)return"2.5s";const k=Math.min(1,m/b);return`${Math.max(.4,(2.6-k*1.9)*(t/1.2)).toFixed(2)}s`},h=this.shadowRoot.getElementById("pathGridInvFlow"),w=Math.abs(e),F=(((ke=r.grid)==null?void 0:ke.min_power_threshold)!==void 0?r.grid.min_power_threshold:50)/1e3,M=((Be=r.grid)==null?void 0:Be.selling_enabled)===!0,z=s&&w>=F&&(g||o&&M);this._applyFlowAnimation(h,"flow-grid",o,i(e,10),z);const A=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(A,"flow-solar",!1,i(p,12),s&&p>=.05);const V=this.shadowRoot.getElementById("pathInvLoadFlow"),q=Math.abs(v);this._applyFlowAnimation(V,"flow-load",!1,i(v,10),s&&q>=.05);const L=this.shadowRoot.getElementById("pathInvBatFlow"),Y=Math.abs(y),n=s&&Y>=.02&&($||E),d=$?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(L,d,E,i(y,8),n);const x=this.shadowRoot.getElementById("pathGridNonEssFlow"),c=Math.abs(_);this._applyFlowAnimation(x,"flow-grid",!1,i(_,5),s&&c>=.05);const f=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),P=Math.abs(S);this._applyFlowAnimation(f,"flow-car",!1,i(S,7),s&&P>=.05);const N=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),U=Math.abs(C||v);this._applyFlowAnimation(N,"flow-load",!1,i(U,8),s&&U>=.05);const se=this.shadowRoot.getElementById("pathInvAuxFlow"),We=Math.abs(l);this._applyFlowAnimation(se,"flow-aux",!0,i(l,5),s&&We>=.05);const ue=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(ue,d,E,i(y,8),n);const Q=this.shadowRoot.getElementById("solarFlowCollector"),ie=this.shadowRoot.getElementById("solarBusStemFlow");if(Q)if(!s||p<.05)Q.style.opacity="0.2",Q.style.animation="none",ie&&(ie.style.opacity="0.2",ie.style.animation="none");else{const u=i(p,12);Q.style.opacity="1",Q.setAttribute("class","flow-line"),Q.style.animation=`esDashflow ${u} linear infinite`,ie&&(ie.style.opacity="1",ie.setAttribute("class","flow-line"),ie.style.animation=`esDashflow ${u} linear infinite`)}const ae=this.shadowRoot.getElementById("subloadsFlowCollector"),j=this.shadowRoot.getElementById("subloadsBusStemFlow");if(ae)if(!s||U<.05)ae.style.opacity="0.2",ae.style.animation="none",j&&(j.style.opacity="0.2",j.style.animation="none");else{const u=i(U,8);ae.style.opacity="1",ae.setAttribute("class","flow-line"),ae.style.animation=`esDashflow ${u} linear infinite`,j&&(j.style.opacity="1",j.setAttribute("class","flow-line"),j.style.animation=`esDashflow ${u} linear infinite`)}const W=this.shadowRoot.getElementById("batteryFlowCollector"),X=this.shadowRoot.getElementById("batteryBusStemFlow"),je=this.shadowRoot.getElementById("batteryBusFeeders"),be=E?"#f87171":"#34d399",me=E?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(W)if(W.style.stroke=be,W.style.filter=me,X&&(X.style.stroke=be,X.style.filter=me),!s||!n)W.style.opacity="0.2",W.style.animation="none",X&&(X.style.opacity="0.2",X.style.animation="none");else{const u=i(y,8),b=E?"esDashflowRev":"esDashflow";W.style.opacity="1",W.setAttribute("class",E?"flow-line-reverse":"flow-line"),W.style.animation=`${b} ${u} linear infinite`,X&&(X.style.opacity="1",X.setAttribute("class",E?"flow-line-reverse":"flow-line"),X.style.animation=`${b} ${u} linear infinite`)}je&&je.querySelectorAll("line").forEach(u=>{if(u.style.stroke=be,u.style.filter=me,!s||!n)u.style.opacity="0.2",u.style.animation="none";else{const b=i(y,8),m=E?"esDashflowRev":"esDashflow";u.style.opacity="1",u.setAttribute("class",E?"flow-line-reverse":"flow-line"),u.style.animation=`${m} ${b} linear infinite`}});for(let u=1;u<=8;u++){const b=this.shadowRoot.getElementById(`pathBat${u}Flow`);if(!b)continue;const m=I[u-1],k=m?m.kwNum:0,D=s&&(k>=.02||n),de=E;this._applyFlowAnimation(b,d,de,i(k||y,8),D)}for(let u=0;u<6;u++){const b=this.shadowRoot.getElementById(`pathSubload${u}Flow`);if(!b)continue;const m=(Le=(Ee=r.load)==null?void 0:Ee.subloads)==null?void 0:Le[u],k=m?this._getEntityState(m.entity):null,D=k?this._formatPower(k,2).kw:u===0?2:u===1?3:4;this._applyFlowAnimation(b,"flow-load",!1,i(D,8),s&&D>=.05)}const Ve=(($e=r.wind)==null?void 0:$e.show)!==!1||((Se=r.aux)==null?void 0:Se.type)==="wind",_e=Ve?((Ce=r.wind)==null?void 0:Ce.turbine_count)||((Te=(Ie=r.wind)==null?void 0:Ie.turbines)==null?void 0:Te.length)||2:0,fe=((Pe=r.wind)==null?void 0:Pe.turbines)||[];for(let u=1;u<=4;u++){const b=this.shadowRoot.getElementById(`pathTurbine${u}Flow`);if(b)if(u<=_e&&Ve){const m=fe[u-1]||{},k=u===1?1.45:.85,D=this._getEntityState(m.power_entity||`sensor.wind_turbine_${u}_power`);let re=this._formatPower(D,k).kw*1e3;D&&D.unit==="W"&&(re=D.val);const ce=m.animation_threshold??((Fe=r.wind)==null?void 0:Fe.animation_threshold)??50,pe=re>=ce;this._applyFlowAnimation(b,"flow-wind",!1,i(re/1e3,3),s&&pe)}else this._applyFlowAnimation(b,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",st),window.customCards=window.customCards||[],window.customCards.some(it=>it.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),He.EnergyStationCard=st,Object.defineProperty(He,Symbol.toStringTag,{value:"Module"})});
