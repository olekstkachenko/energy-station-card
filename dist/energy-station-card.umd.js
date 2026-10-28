(function(Ke,q){typeof exports=="object"&&typeof module<"u"?q(exports):typeof define=="function"&&define.amd?define(["exports"],q):(Ke=typeof globalThis<"u"?globalThis:Ke||self,q(Ke.EnergyStationCard={}))})(this,function(Ke){"use strict";const q={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},Q={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`};class Oi extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||q)),this.render()}connectedCallback(){this.render()}_valueChanged(e,o){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const g=e.split(".");let p=this._config;for(let u=0;u<g.length-1;u++)p[g[u]]||(p[g[u]]={}),p=p[g[u]];p[g[g.length-1]]=o;const f=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(f)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||q)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const o=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(o),this.render()}render(){var o,g,p,f,u,x,m,k,T,b,E,l,r,s,i,t,c,y,N,F,z,R,V,D,ee,se,M,j,a,d,_,h,w,P,L,te,_e,ge,le,me,de,ce,ne,Be,ue,Ee,Fe,pe,he,xe,Ue,Me,De,We,He,je,Oe,Je,Xe,Ge,Se,fe,v,C,O,ye,Y,Ne,Ce,Ie,Te,Ze;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((f=e.solar)==null?void 0:f.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((u=e.solar)==null?void 0:u.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((x=e.solar)==null?void 0:x.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((m=e.solar)==null?void 0:m.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((k=e.solar)==null?void 0:k.target_daily_yield)||55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((T=e.solar)==null?void 0:T.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((b=e.solar)==null?void 0:b.pv_count)||3}).map((ae,B)=>{var Ve,Le;const S=B+1,I=((Le=(Ve=e.solar)==null?void 0:Ve.strings)==null?void 0:Le[B])||{},ke=`sensor.deye_12k_inverter_pv${S}_voltage`,Ae=`sensor.deye_12k_inverter_pv${S}_current`,Re=`sensor.deye_12k_inverter_pv${S}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${S} (Стрінг ${S})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${B}" value="${I.name||`PV ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${S} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${B}" value="${I.voltage_entity!==void 0?I.voltage_entity:ke}" placeholder="${ke}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${S} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${B}" value="${I.current_entity!==void 0?I.current_entity:Ae}" placeholder="${Ae}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${S} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${B}" value="${I.power_entity!==void 0?I.power_entity:Re}" placeholder="${Re} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((E=e.inverter)==null?void 0:E.model_name)||"DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((l=e.inverter)==null?void 0:l.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((r=e.inverter)==null?void 0:r.show_self_consumption)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${((s=e.inverter)==null?void 0:s.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((i=e.inverter)==null?void 0:i.standby_power)!==void 0?e.inverter.standby_power:100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((t=e.inverter)==null?void 0:t.standby_power)!==void 0?e.inverter.standby_power:100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((c=e.inverter)==null?void 0:c.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((y=e.inverter)==null?void 0:y.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((N=e.inverter)==null?void 0:N.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((F=e.inverter)==null?void 0:F.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((z=e.inverter)==null?void 0:z.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((R=e.aux)==null?void 0:R.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((V=e.aux)==null?void 0:V.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((D=e.aux)==null?void 0:D.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((ee=e.aux)==null?void 0:ee.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((se=e.aux)==null?void 0:se.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((M=e.aux)==null?void 0:M.type)==="microinverter"&&(!((j=e.aux)!=null&&j.title)||((a=e.aux)==null?void 0:a.title)==="Вітрогенератор")?"Мікроінвертор":((d=e.aux)==null?void 0:d.title)||(((_=e.aux)==null?void 0:_.type)==="generator"?"Генератор":((h=e.aux)==null?void 0:h.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((w=e.aux)==null?void 0:w.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((P=e.wind)==null?void 0:P.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((L=e.wind)==null?void 0:L.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((te=e.wind)==null?void 0:te.animation_threshold)||((_e=e.aux)==null?void 0:_e.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((ge=e.wind)==null?void 0:ge.animation_threshold)||((le=e.aux)==null?void 0:le.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((me=e.wind)==null?void 0:me.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((de=e.wind)==null?void 0:de.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((ce=e.wind)==null?void 0:ce.turbine_count)||2}).map((ae,B)=>{var I,ke;const S=((ke=(I=e.wind)==null?void 0:I.turbines)==null?void 0:ke[B])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${B}" value="${S.name||`Вітряк ${B+1}`}" placeholder="Назва (напр. Вітряк ${B+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${B}" value="${S.power_entity||`sensor.wind_turbine_${B+1}_power`}" placeholder="sensor.wind_turbine_${B+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${B}" value="${S.speed_entity||S.rpm_entity||""}" placeholder="sensor.wind_turbine_${B+1}_speed">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${B}" value="${S.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${B+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${B}" value="${S.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${B+1}_monthly_energy">
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
          <div class="field-row">
            <label>Рівень заряду Battery SOC (%) (сенсор):</label>
            <input type="text" id="batSoc" value="${((ne=e.battery)==null?void 0:ne.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((Be=e.battery)==null?void 0:Be.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((ue=e.battery)==null?void 0:ue.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((Ee=e.battery)==null?void 0:Ee.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Fe=e.battery)==null?void 0:Fe.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((pe=e.battery)==null?void 0:pe.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((he=e.battery)==null?void 0:he.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((xe=e.battery)==null?void 0:xe.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Ue=e.battery)==null?void 0:Ue.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Me=e.battery)==null?void 0:Me.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((De=e.battery)==null?void 0:De.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((We=e.battery)==null?void 0:We.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((He=e.battery)==null?void 0:He.parallel_batteries)||2}).map((ae,B)=>{var it,ot,st,nt;const S=B+1,I=((ot=(it=e.battery)==null?void 0:it.modules)==null?void 0:ot[B])||((nt=(st=e.battery)==null?void 0:st.module_entities)==null?void 0:nt[B])||{},ke=`sensor.bms_rack${S}_soc`,Ae=`sensor.bms_rack${S}_current`,Re=`sensor.bms_rack${S}_voltage`,Ve=`sensor.bms_rack${S}_power`,Le=`sensor.bms_rack${S}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${S} (Модуль ${S})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${B}" value="${I.name||`Батарея ${S}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${S} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${B}" value="${I.soc_entity!==void 0?I.soc_entity:I.soc!==void 0?I.soc:ke}" placeholder="${ke}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${S} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${B}" value="${I.current_entity!==void 0?I.current_entity:Ae}" placeholder="${Ae}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${S} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${B}" value="${I.voltage_entity!==void 0?I.voltage_entity:I.volt!==void 0?I.volt:Re}" placeholder="${Re}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${S} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${B}" value="${I.temperature_entity!==void 0?I.temperature_entity:I.temp!==void 0?I.temp:Le}" placeholder="${Le}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${S} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${B}" value="${I.capacity_kwh!==void 0?I.capacity_kwh:S===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${S} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${B}" value="${I.power_entity!==void 0?I.power_entity:Ve}" placeholder="${Ve} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(je=e.grid)!=null&&je.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((Oe=e.grid)==null?void 0:Oe.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((Je=e.grid)==null?void 0:Je.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((Xe=e.grid)==null?void 0:Xe.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Ge=e.grid)==null?void 0:Ge.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((Se=e.grid)==null?void 0:Se.voltage_entity)||""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((fe=e.grid)==null?void 0:fe.status_entity)||""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((v=e.grid)==null?void 0:v.voltage_threshold)!==void 0?e.grid.voltage_threshold:90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((C=e.grid)==null?void 0:C.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((O=e.grid)==null?void 0:O.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((ye=e.grid)==null?void 0:ye.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Y=e.grid)==null?void 0:Y.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab==="loads"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="field-row">
            <label>Автоматичний розрахунок навантаження за балансом:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="loadAutoCalculate" ${((Ne=e.load)==null?void 0:Ne.auto_calculate)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((Ce=e.load)==null?void 0:Ce.essential_power_entity)||""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((Ie=e.load)==null?void 0:Ie.daily_house_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((Te=e.load)==null?void 0:Te.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Ze=e.load)==null?void 0:Ze.subloads)||[]).map((ae,B)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${B}" value="${ae.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${B}" style="width: 140px;">
                  <option value="boiler" ${ae.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${ae.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ae.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${ae.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${ae.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${ae.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${ae.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${B}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${B}" value="${ae.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var u,x,m,k,T,b,E,l,r;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",i=>{this._switchTab(i.target.dataset.tab)})}),(u=e.getElementById("btnPresetEsp"))==null||u.addEventListener("click",()=>this._applyPreset("deye_esphome")),(x=e.getElementById("btnPresetSolarman"))==null||x.addEventListener("click",()=>this._applyPreset("deye_solarman"));const o=(s,i)=>{const t=e.getElementById(s);t&&t.addEventListener("input",c=>this._valueChanged(i,c.target.value))},g=(s,i)=>{const t=e.getElementById(s);t&&t.addEventListener("change",c=>this._valueChanged(i,c.target.checked))},p=(s,i,t,c="")=>{const y=e.getElementById(s);y&&y.addEventListener("input",N=>{const F=parseFloat(N.target.value);if(t){const z=e.getElementById(t);z&&(z.innerText=`${F}${c}`)}this._valueChanged(i,F)})};o("title","title"),g("animEnabled","animations.enabled"),p("animSpeed","animations.speed","animSpeedVal","s"),(m=e.getElementById("solarPvCount"))==null||m.addEventListener("input",s=>{const i=parseInt(s.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=i,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<i;){const t=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${t}`,name:`PV ${t}`,voltage_entity:`sensor.deye_12k_inverter_pv${t}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${t}_current`,power_entity:`sensor.deye_12k_inverter_pv${t}_power`})}this._valueChanged("solar.pv_count",i),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].name=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].voltage_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].current_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].power_entity=i.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),o("solarTotalPower","solar.total_power_entity"),o("solarDailyYield","solar.daily_yield_entity"),p("solarTargetDaily","solar.target_daily_yield"),o("invModel","inverter.model_name"),o("invPower","inverter.power_entity"),g("invShowSelfConsumption","inverter.show_self_consumption"),o("invSelfConsumptionEntity","inverter.self_consumption_entity"),p("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),o("invTempAc","inverter.ac_temperature_entity"),o("invTempDc","inverter.dc_temperature_entity"),o("invVolt","inverter.voltage_entity"),o("invCurrent","inverter.current_entity"),o("invFreq","inverter.frequency_entity"),(k=e.getElementById("auxType"))==null||k.addEventListener("change",s=>{const i=s.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=i;const c={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[i]||"Мікроінвертор";this._config.aux.title=c;const y=e.getElementById("auxTitle");y&&(y.value=c),this._valueChanged("aux.type",i),this._valueChanged("aux.title",c)}),o("auxTitle","aux.title"),o("auxPower","aux.power_entity"),(T=e.getElementById("windTurbineCount"))==null||T.addEventListener("input",s=>{const i=parseInt(s.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=i,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<i;){const t=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${t}`,name:`Вітряк ${t}`,power_entity:`sensor.wind_turbine_${t}_power`,speed_entity:`sensor.wind_turbine_${t}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",i),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),p("windThreshold","wind.animation_threshold","windThresholdVal","W"),(b=e.getElementById("windThreshold"))==null||b.addEventListener("input",s=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(s.target.value))}),o("windDailyEnergy","wind.daily_energy_entity"),o("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].name=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].power_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].speed_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-daily-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].daily_energy_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-monthly-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].monthly_energy_entity=i.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),o("batSoc","battery.soc_entity"),o("batPower","battery.power_entity"),o("batPowerSign","battery.power_sign"),o("batVolt","battery.voltage_entity"),o("batCurrent","battery.current_entity"),o("batCapacity","battery.capacity_entity"),o("batChargeDaily","battery.charge_daily_entity"),o("batDischargeDaily","battery.discharge_daily_entity"),(E=e.getElementById("batParallelCount"))==null||E.addEventListener("input",s=>{const i=parseInt(s.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=i,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<i;){const t=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${t}`,name:`Батарея ${t}`,soc_entity:`sensor.bms_rack${t}_soc`,current_entity:`sensor.bms_rack${t}_current`,voltage_entity:`sensor.bms_rack${t}_voltage`,power_entity:`sensor.bms_rack${t}_power`,temperature_entity:`sensor.bms_rack${t}_temperature`})}this._valueChanged("battery.parallel_batteries",i),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].name=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].soc_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].current_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].voltage_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].temperature_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].power_entity=i.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(s=>{s.addEventListener("input",i=>{const t=parseInt(i.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].capacity_kwh=parseFloat(i.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),g("gridSellingEnabled","grid.selling_enabled"),o("gridPower","grid.power_entity"),o("gridVoltage","grid.voltage_entity"),o("gridStatus","grid.status_entity"),p("gridVoltageThreshold","grid.voltage_threshold"),o("gridPowerSign","grid.power_sign"),p("gridMinThreshold","grid.min_power_threshold"),o("gridImportDaily","grid.import_daily_entity"),o("gridExportDaily","grid.export_daily_entity"),o("gridNonEssential","grid.non_essential_power_entity"),o("gridCarPower","grid.car_power_entity"),g("loadAutoCalculate","load.auto_calculate"),o("loadEssential","load.essential_power_entity"),o("loadDailyHouse","load.daily_house_entity");const f=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const s=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${s}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(l=e.getElementById("btnAddSubload"))==null||l.addEventListener("click",f),(r=e.getElementById("btnAddSubloadBottom"))==null||r.addEventListener("click",f),e.querySelectorAll(".btn-del-subload").forEach(s=>{s.addEventListener("click",i=>{var y;const t=i.currentTarget||i.target.closest(".btn-del-subload"),c=parseInt(t.dataset.idx);(y=this._config.load)!=null&&y.subloads&&(this._config.load.subloads.splice(c,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(s=>{s.addEventListener("input",i=>{var c,y;const t=parseInt(i.target.dataset.idx);(y=(c=this._config.load)==null?void 0:c.subloads)!=null&&y[t]&&(this._config.load.subloads[t].name=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(s=>{s.addEventListener("change",i=>{var c,y;const t=parseInt(i.target.dataset.idx);(y=(c=this._config.load)==null?void 0:c.subloads)!=null&&y[t]&&(this._config.load.subloads[t].icon=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(s=>{s.addEventListener("input",i=>{var c,y;const t=parseInt(i.target.dataset.idx);(y=(c=this._config.load)==null?void 0:c.subloads)!=null&&y[t]&&(this._config.load.subloads[t].entity=i.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",Oi);class _t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(q))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const o=JSON.parse(JSON.stringify(e)),g=JSON.parse(JSON.stringify(q));this._config=this._deepMerge(g,o),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,o){const g=Array.isArray(e)?[...e]:Object.assign({},e);if(!o||typeof o!="object")return g;for(const p of Object.keys(o)){const f=o[p],u=e?e[p]:void 0;f&&typeof f=="object"&&!Array.isArray(f)?g[p]=this._deepMerge(u||{},f):g[p]=f}return g}_getEntityState(e){var f;if(!this._hass||!e||!this._hass.states[e])return null;const o=this._hass.states[e],g=parseFloat(o.state),p=((f=o.attributes)==null?void 0:f.unit_of_measurement)||"";return{raw:o.state,val:isNaN(g)?0:g,unit:p,attributes:o.attributes}}_formatPower(e,o=0){if(!e)return{num:o.toFixed(3),kw:o,str:`${o.toFixed(3)} кВт`};let g=e.val;return e.unit==="W"&&(g=g/1e3),{num:g.toFixed(3),kw:g,str:`${g.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const o=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}_renderCardSkeleton(){var o,g,p,f,u,x,m,k,T,b,E,l,r,s,i,t,c,y;const e=this._config||q;this._initialized=!0,this.shadowRoot.innerHTML=`
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${Q.sun}</div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${Q.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8;">${Q.grid_tower}</div>
              <div class="es-node-title">Мережа</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">← ЕКСПОРТ</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(p=e.grid)!=null&&p.show_non_essential&&((f=e.grid)!=null&&f.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Q.house_outline}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(u=e.grid)!=null&&u.show_car&&((x=e.grid)!=null&&x.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Q.car}</div>
              <div class="es-node-title" id="carTitle">${((m=e.grid)==null?void 0:m.car_title)||"Авто"}</div>
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
                  <div class="es-inverter-icon-box">${Q.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">Гібридний інвертор</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 кВт</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((k=e.inverter)==null?void 0:k.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">⚡ Власне:</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 Вт</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((T=e.aux)==null?void 0:T.type)==="none"||((b=e.aux)==null?void 0:b.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${Q[(E=e.aux)==null?void 0:E.type]||Q.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((l=e.aux)==null?void 0:l.type)==="microinverter"&&(!((r=e.aux)!=null&&r.title)||((s=e.aux)==null?void 0:s.title)==="Вітрогенератор")?"Мікроінвертор":((i=e.aux)==null?void 0:i.title)||"Мікроінвертор"}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((t=e.aux)==null?void 0:t.subtitle)||"Джерело → GEN"}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((c=e.wind)==null?void 0:c.show)===!1&&((y=e.aux)==null?void 0:y.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              Будинок <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${Q.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:e.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:e.getElementById("inverterSelfConsumptionVal"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var m,k,T,b,E,l,r,s;const e=this._config||q,o=((m=this._nodes)==null?void 0:m.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!o)return;if(o.innerHTML="",!(((k=e.wind)==null?void 0:k.show)!==!1||((T=e.aux)==null?void 0:T.type)==="wind")){o.classList.add("hidden");return}o.classList.remove("hidden");const p=((b=e.wind)==null?void 0:b.turbine_count)||((l=(E=e.wind)==null?void 0:E.turbines)==null?void 0:l.length)||2,f=((r=e.wind)==null?void 0:r.turbines)||[],u=document.createElement("div");u.className="es-wind-summary-bar es-mono",u.id="windStationSummaryBar",u.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,o.appendChild(u);const x=document.createElement("div");x.className="es-wind-pods-row",o.appendChild(x);for(let i=0;i<p;i++){const t=f[i]||{name:`Вітряк ${i+1}`,power_entity:`sensor.wind_turbine_${i+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((s=e.wind)==null?void 0:s.animation_threshold)||50},c=!!(t.daily_energy_entity||t.monthly_energy_entity),y=document.createElement("div");y.className="es-turbine-card glow-wind clickable-node",y.id=`turbineCard_${i+1}`,y.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${i+1}">
              ${Q.wind_turbine}
            </div>
            <span>${t.name||`Вітряк ${i+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${i+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${i+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${i+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${i+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${i+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${c?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${i+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${i+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,y.addEventListener("click",()=>{this._fireMoreInfo(t.power_entity)}),x.appendChild(y)}}_renderDynamicPvPanels(){var p,f,u,x,m;const e=this._config||q,o=this._nodes.pvPanelsContainer;if(!o)return;o.innerHTML="";const g=((p=e.solar)==null?void 0:p.pv_count)||((u=(f=e.solar)==null?void 0:f.strings)==null?void 0:u.length)||3;for(let k=1;k<=g;k++){const T=k<10?`0${k}`:`${k}`,b=((m=(x=e.solar)==null?void 0:x.strings)==null?void 0:m[k-1])||{},E=b.name||`PV ${T}`,l=document.createElement("div");l.className="es-pv-panel glow-solar clickable-node",l.dataset.pvIndex=k,l.id=`pvPanel_${k}`,l.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${Q.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${E}</span>
        <span class="es-pv-val es-mono" id="pvVal_${k}">1,200 кВт</span>
      `,l.addEventListener("click",()=>{var s;const r=b.power_entity||b.voltage_entity||b.current_entity||((s=e.solar)==null?void 0:s.total_power_entity);this._fireMoreInfo(r)}),o.appendChild(l)}}_renderDynamicSubloads(){var p;const e=this._config||q,o=this._nodes.subloadsContainer;if(!o)return;o.innerHTML="",(((p=e.load)==null?void 0:p.subloads)||[]).forEach((f,u)=>{const x=document.createElement("div");x.className="es-subload-card clickable-node",x.id=`subloadCard_${u}`,x.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${Q[f.icon]||Q.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${f.name}</span>
        <span class="es-mono" id="subloadVal_${u}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,x.addEventListener("click",()=>{this._fireMoreInfo(f.entity)}),o.appendChild(x)})}_renderDynamicBatteryRack(){var u,x,m,k,T,b,E;const e=this._config||q,o=this._nodes.batteryRackContainer;if(!o)return;o.innerHTML="";const g=((u=e.battery)==null?void 0:u.parallel_batteries)||((m=(x=e.battery)==null?void 0:x.modules)==null?void 0:m.length)||2,p=[82,76,91,68,85,90,72,80],f=[52.4,52.4,52.4,52.4,52.4,52.4];for(let l=1;l<=g;l++){const r=((T=(k=e.battery)==null?void 0:k.modules)==null?void 0:T[l-1])||((E=(b=e.battery)==null?void 0:b.module_entities)==null?void 0:E[l-1])||{},s=r.name||`Батарея ${l}`,i=p[(l-1)%p.length],t=f[(l-1)%f.length],c=document.createElement("div");c.className="es-battery-pack-card glow-battery clickable-node",c.id=`batPackCard_${l}`,c.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${Q.battery_vertical}</div>
        <span class="es-bat-name">${s}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${l}">${i}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${l}">${t.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${l}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
      `,c.addEventListener("click",()=>{var N;const y=r.soc_entity||r.soc||r.voltage_entity||r.volt||r.current_entity||((N=e.battery)==null?void 0:N.soc_entity);this._fireMoreInfo(y)}),o.appendChild(c)}}_bindInteractions(){var g,p,f,u,x,m,k,T,b,E,l,r,s,i;const e=this.shadowRoot,o=this._config||q;(g=e.getElementById("solarHeaderNode"))==null||g.addEventListener("click",()=>{var t,c;this._fireMoreInfo(((t=o.solar)==null?void 0:t.daily_yield_entity)||((c=o.solar)==null?void 0:c.total_power_entity))}),(p=e.getElementById("totalPvPowerBadge"))==null||p.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.solar)==null?void 0:t.total_power_entity)}),(f=e.getElementById("gridNode"))==null||f.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.power_entity)}),(u=e.getElementById("nonEssentialNode"))==null||u.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.non_essential_power_entity)}),(x=e.getElementById("carNode"))==null||x.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.car_power_entity)}),(m=e.getElementById("inverterNode"))==null||m.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.inverter)==null?void 0:t.power_entity)}),(k=e.getElementById("inverterSelfConsumptionBox"))==null||k.addEventListener("click",t=>{var c;t.stopPropagation(),(c=o.inverter)!=null&&c.self_consumption_entity&&this._fireMoreInfo(o.inverter.self_consumption_entity)}),(T=e.getElementById("auxNode"))==null||T.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.aux)==null?void 0:t.power_entity)}),(b=e.getElementById("essentialNode"))==null||b.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.load)==null?void 0:t.essential_power_entity)}),(E=e.getElementById("masterBatteryHub"))==null||E.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.battery)==null?void 0:t.soc_entity)});for(let t=1;t<=8;t++){const c=e.getElementById(`batBranchBadge_${t}`),y=((r=(l=o.battery)==null?void 0:l.modules)==null?void 0:r[t-1])||((i=(s=o.battery)==null?void 0:s.module_entities)==null?void 0:i[t-1])||{};c==null||c.addEventListener("click",()=>{var F;const N=y.power_entity||y.current_entity||y.soc_entity||((F=o.battery)==null?void 0:F.soc_entity);this._fireMoreInfo(N)})}}_updateValues(){var ke,Ae,Re,Ve,Le,it,ot,st,nt,ft,vt,wt,mt,xt,kt,Bt,Et,$t,St,Ct,It,Tt,Pt,Ft,Mt,Nt,At,Rt,Vt,Lt,zt,Dt,Wt,Ht,jt,Ot,Gt,qt,Yt,Kt,Ut,Jt,Xt,Zt,Qt,ei,ti,ii,oi,si,ni,ai,ri,li,di,ci,pi,hi,yi,gi,ui,bi,_i,fi,vi,wi,mi,xi,ki,Bi,Ei,$i,Si,Ci,Ii,Ti,Pi,Fi,Mi,Ni,Ai,Ri,Vi,Li,zi,Di,Wi,Hi,ji;if(!this._nodes.dailySolarYield)return;const e=this._config||q,o=((ke=e.solar)==null?void 0:ke.pv_count)||((Re=(Ae=e.solar)==null?void 0:Ae.strings)==null?void 0:Re.length)||3;let g=0,p=!1;for(let n=1;n<=o;n++){const $=(Le=(Ve=e.solar)==null?void 0:Ve.strings)==null?void 0:Le[n-1],G=($==null?void 0:$.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),A=($==null?void 0:$.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),W=($==null?void 0:$.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:"");if(this._getEntityState(W)||this._getEntityState(G)||this._getEntityState(A)){p=!0;break}}for(let n=1;n<=o;n++){const $=this.shadowRoot.getElementById(`pvVal_${n}`),G=this.shadowRoot.getElementById(`pvVolt_${n}`),A=this.shadowRoot.getElementById(`pvCurr_${n}`),W=(ot=(it=e.solar)==null?void 0:it.strings)==null?void 0:ot[n-1],qe=(W==null?void 0:W.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),K=(W==null?void 0:W.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),Pe=(W==null?void 0:W.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:""),be=this._getEntityState(qe),ve=this._getEntityState(K),H=this._getEntityState(Pe);let J=0,U=0,ie=0;H?ie=this._formatPower(H).kw:be&&ve?ie=be.val*ve.val/1e3:be?ie=0:ie=p?0:4,be?J=be.val:J=p?0:380+n*4.5,ve?U=ve.val:H&&J>0?U=ie*1e3/J:U=p?0:3.12+n*.28,g+=ie,$&&($.innerText=`${ie.toFixed(3)} кВт`),G&&(G.innerText=`${J.toFixed(1)} V`),A&&(A.innerText=`${U.toFixed(2)} A`)}const f=this._getEntityState((st=e.solar)==null?void 0:st.total_power_entity);let u=0;f?u=this._formatPower(f).kw:u=g,this._nodes.totalPvPowerBadge.innerText=`${u.toFixed(3)} кВт`;const x=this._getEntityState((nt=e.solar)==null?void 0:nt.daily_yield_entity),m=x?x.val:p?0:48.6;this._nodes.dailySolarYield.innerText=m.toFixed(1);const k=((ft=e.solar)==null?void 0:ft.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=k.toFixed(1);const T=Math.min(100,Math.round(m/k*100));this._nodes.solarProgressBar.style.width=`${T}%`;const b=this._getEntityState((vt=e.inverter)==null?void 0:vt.power_entity);this._nodes.inverterPowerVal&&((wt=e.inverter)!=null&&wt.power_entity&&b?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(b,0).str):this._nodes.inverterPowerVal.style.display="none");const E=this._getEntityState((mt=e.inverter)==null?void 0:mt.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=E?E.val.toFixed(2):"41,20";const l=this._getEntityState((xt=e.inverter)==null?void 0:xt.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=l?l.val.toFixed(2):"38,40";const r=this._getEntityState((kt=e.inverter)==null?void 0:kt.voltage_entity);this._nodes.inverterVolt.innerText=r?r.val.toFixed(2):"231,45";const s=this._getEntityState((Bt=e.inverter)==null?void 0:Bt.current_entity);this._nodes.inverterCurrent.innerText=s?s.val.toFixed(2):"8,60";const i=this._getEntityState((Et=e.inverter)==null?void 0:Et.frequency_entity);this._nodes.inverterFreq.innerText=i?i.val.toFixed(2):"50,01";const t=(($t=e.wind)==null?void 0:$t.show)!==!1||((St=e.aux)==null?void 0:St.type)==="wind",c=this.shadowRoot.getElementById("windStationContainer"),y=this._nodes.auxNode;let N=0;if(c)if(!t)c.classList.add("hidden");else{c.classList.remove("hidden");const n=((Ct=e.wind)==null?void 0:Ct.turbine_count)||((Tt=(It=e.wind)==null?void 0:It.turbines)==null?void 0:Tt.length)||2,$=((Pt=e.wind)==null?void 0:Pt.turbines)||[];let G=0,A=0,W=!1,qe=!1;for(let H=0;H<n;H++){const J=$[H]||{power_entity:`sensor.wind_turbine_${H+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((Ft=e.wind)==null?void 0:Ft.animation_threshold)||50},U=this.shadowRoot.getElementById(`turbinePower_${H+1}`),ie=this.shadowRoot.getElementById(`turbineStatus_${H+1}`),at=this.shadowRoot.getElementById(`turbineIcon_${H+1}`),ze=this.shadowRoot.getElementById(`turbineCard_${H+1}`),ct=this.shadowRoot.getElementById(`turbineRpmVal_${H+1}`),pt=this.shadowRoot.getElementById(`turbineDailyVal_${H+1}`),rt=this.shadowRoot.getElementById(`turbineMonthlyVal_${H+1}`),Qe=this.shadowRoot.getElementById(`turbineEnergyFooter_${H+1}`),ht=this._hass?0:H===0?1.56:.22,Ye=this._getEntityState(J.power_entity),et=this._formatPower(Ye,ht);U&&(U.innerText=et.str),N+=et.kw;let $e=et.kw*1e3;Ye&&Ye.unit==="W"&&($e=Ye.val);const tt=J.animation_threshold??((Mt=e.wind)==null?void 0:Mt.animation_threshold)??50,we=at==null?void 0:at.querySelector(".turbine-rotor");if($e>=tt){we&&we.classList.add("spinning"),ze&&(ze.classList.add("glow-wind"),ze.style.borderColor="rgba(6, 182, 212, 0.55)");const dt=((Nt=e.wind)==null?void 0:Nt.max_power)||3e3,bt=(3.2-Math.min(1,Math.max(0,($e-tt)/(dt-tt)))*2.75).toFixed(2);we&&we.style.setProperty("--turbine-speed",`${bt}s`),ie&&(ie.innerText="Генерація",ie.style.color="#67e8f9")}else we&&we.classList.remove("spinning"),ze&&(ze.classList.remove("glow-wind"),ze.style.borderColor="rgba(255, 255, 255, 0.08)"),ie&&(ie.innerText="Штиль",ie.style.color="#94a3b8");const lt=J.rpm_entity||J.speed_entity,re=lt&&((At=this._hass)!=null&&At.states[lt])?this._getEntityState(lt):null,X=this.shadowRoot.getElementById(`turbineRpmBox_${H+1}`);X&&(re&&re.raw!=="unavailable"&&re.raw!=="unknown"&&typeof re.val=="number"&&!isNaN(re.val)&&re.val>0?(X.style.display="inline",ct&&(ct.innerText=Math.round(re.val))):X.style.display="none");const oe=this._getEntityState(J.daily_energy_entity),Z=this._getEntityState(J.monthly_energy_entity);pt&&(pt.innerText=oe&&typeof oe.val=="number"&&!isNaN(oe.val)?oe.val.toFixed(2):"0.00"),rt&&(rt.innerText=Z&&typeof Z.val=="number"&&!isNaN(Z.val)?Z.val.toFixed(1):"0.0");const yt=!!(J.daily_energy_entity||J.monthly_energy_entity);Qe&&(Qe.style.display=yt?"flex":"none"),oe&&typeof oe.val=="number"&&!isNaN(oe.val)&&(G+=oe.val,W=!0),Z&&typeof Z.val=="number"&&!isNaN(Z.val)&&(A+=Z.val,qe=!0)}const K=this.shadowRoot.getElementById("windTotalDailyVal"),Pe=this.shadowRoot.getElementById("windTotalMonthlyVal"),be=this._getEntityState((Rt=e.wind)==null?void 0:Rt.daily_energy_entity),ve=this._getEntityState((Vt=e.wind)==null?void 0:Vt.monthly_energy_entity);K&&(be&&typeof be.val=="number"&&!isNaN(be.val)?K.innerText=be.val.toFixed(2):W?K.innerText=G.toFixed(2):K.innerText="0.00"),Pe&&(ve&&typeof ve.val=="number"&&!isNaN(ve.val)?Pe.innerText=ve.val.toFixed(1):qe?Pe.innerText=A.toFixed(1):Pe.innerText="0.0")}let F=0;if(y)if(((Lt=e.aux)==null?void 0:Lt.type)==="none"||((zt=e.aux)==null?void 0:zt.type)==="wind")y.classList.add("hidden");else{y.classList.remove("hidden");const n=this._getEntityState((Dt=e.aux)==null?void 0:Dt.power_entity),$=this._formatPower(n,2);F=$.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=$.str);const G={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let A=(Wt=e.aux)==null?void 0:Wt.title;((Ht=e.aux)==null?void 0:Ht.type)==="microinverter"&&(!A||A==="Вітрогенератор")?A="Мікроінвертор":(jt=e.aux)!=null&&jt.type&&G[e.aux.type]&&(!A||A==="Вітрогенератор")?A=G[e.aux.type]:A||(A="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=A),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=Q[(Ot=e.aux)==null?void 0:Ot.type]||Q.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Gt=e.aux)==null?void 0:Gt.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),y.style.borderColor="rgba(192, 132, 252, 0.45)",y.style.background="rgba(88, 28, 135, 0.35)",y.classList.remove("glow-wind"),y.classList.add("glow-aux")}const z=this._getEntityState((qt=e.grid)==null?void 0:qt.power_entity),R=z?z.unit==="W"?z.val/1e3:z.val:0,V=((Yt=e.grid)==null?void 0:Yt.power_sign)||((Kt=e.grid)!=null&&Kt.invert_power?"inverted":"deye"),D=((Ut=e.grid)==null?void 0:Ut.selling_enabled)===!0,ee=(((Jt=e.grid)==null?void 0:Jt.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3,se=this._getEntityState((Xt=e.grid)==null?void 0:Xt.status_entity),M=this._getEntityState(((Zt=e.grid)==null?void 0:Zt.voltage_entity)||((Qt=e.inverter)==null?void 0:Qt.voltage_entity)),j=((ei=e.grid)==null?void 0:ei.voltage_threshold)!==void 0?e.grid.voltage_threshold:90;let a=!0;if(se){const n=String(se.raw||se.val).toLowerCase();(n==="off"||n==="false"||n==="0"||n==="disconnected"||n==="offline"||n==="unavailable"||n==="unknown")&&(a=!1)}else M&&typeof M.val=="number"&&!isNaN(M.val)&&M.val<j&&(a=!1);let d=!1,_=!1,h=0;a?(h=Math.abs(R),h>=ee&&(V==="deye"?R<0?d=!0:_=!0:R>0?d=!0:_=!0),d&&!D&&(d=!1)):(h=0,d=!1,_=!1);const w=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(a?(this._nodes.gridPowerVal.innerText=`${h.toFixed(3)} кВт`,d?this._nodes.gridPowerVal.style.color="#34d399":_?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText="0.000 кВт",this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(a?d?(this._nodes.gridDirectionLabel.innerText="← Експорт",this._nodes.gridDirectionLabel.style.color="#34d399"):_?(this._nodes.gridDirectionLabel.innerText="→ Імпорт",this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText="Мережа",this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText="Вимкнено",this._nodes.gridDirectionLabel.style.color="#ef4444")),w&&(a?(w.classList.add("glow-grid"),w.style.borderColor="rgba(56, 189, 248, 0.4)"):(w.classList.remove("glow-grid"),w.style.borderColor="rgba(239, 68, 68, 0.45)"));const P=this._getEntityState((ti=e.grid)==null?void 0:ti.import_daily_entity);this._nodes.gridImportDaily.innerText=P?`${P.val.toFixed(2)} kWh`:"0.00 kWh";const L=this._getEntityState((ii=e.grid)==null?void 0:ii.export_daily_entity);this._nodes.gridExportDaily.innerText=L?`${L.val.toFixed(2)} kWh`:"0.00 kWh";const te=this.shadowRoot.getElementById("nonEssentialNode"),_e=!!((oi=e.grid)!=null&&oi.show_non_essential&&((si=e.grid)!=null&&si.non_essential_power_entity))||((ni=e.grid)==null?void 0:ni.show_non_essential)!==!1&&!!((ai=e.grid)!=null&&ai.non_essential_power_entity);let ge=0;if(te)if(_e){te.classList.remove("hidden");const n=this._getEntityState(e.grid.non_essential_power_entity),$=this._formatPower(n,0);ge=$.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=$.str)}else te.classList.add("hidden");const le=this.shadowRoot.getElementById("carNode"),me=!!((ri=e.grid)!=null&&ri.show_car&&((li=e.grid)!=null&&li.car_power_entity))||((di=e.grid)==null?void 0:di.show_car)!==!1&&!!((ci=e.grid)!=null&&ci.car_power_entity);let de=0;if(le)if(me){le.classList.remove("hidden");const n=this._getEntityState(e.grid.car_power_entity),$=this._formatPower(n,0);de=$.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=$.str)}else le.classList.add("hidden");const ce=this._getEntityState((pi=e.battery)==null?void 0:pi.soc_entity),ne=ce?ce.val:80;this._nodes.masterBatterySoc.innerText=`${ne.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const Be=this._getEntityState((hi=e.battery)==null?void 0:hi.power_entity),ue=this._getEntityState((yi=e.battery)==null?void 0:yi.current_entity),Ee=Be?Be.unit==="W"?Be.val/1e3:Be.val:0,Fe=((gi=e.battery)==null?void 0:gi.power_sign)||((ui=e.battery)!=null&&ui.invert_power?"standard":"deye");let pe=!1,he=!1;const xe=Math.abs(Ee);if(xe>=.02?Fe==="deye"?Ee<0?pe=!0:he=!0:Ee>0?pe=!0:he=!0:ue&&Math.abs(ue.val)>=.3&&(Fe==="deye"?ue.val<0?pe=!0:he=!0:ue.val>0?pe=!0:he=!0),this._isCharging=pe,this._isDischarging=he,this._nodes.masterBatteryFlowHint){let n="Очікування",$="#94a3b8";pe?(n="Заряд ↓",$="#34d399"):he&&(n="Розряд ↑",$="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${xe.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${$}; font-weight: 700; font-size: 14px;">${n}</span>`}const Me=this._getEntityState((bi=e.battery)==null?void 0:bi.voltage_entity),De=Me?Me.val.toFixed(2):"53.24",We=ue?ue.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${De.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${We.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((_i=e.battery)==null?void 0:_i.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const n=((fi=e.battery)==null?void 0:fi.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${n}%`}const He=_?h:0,je=he?xe:0,Oe=u+N+(F>0?F:0)+He+je,Ge=(pe?xe:0)+(d?h:0)+ge+de,Se=Math.max(0,Oe-Ge),fe=this._getEntityState((vi=e.inverter)==null?void 0:vi.self_consumption_entity);let v=0;const C=this._getEntityState((wi=e.load)==null?void 0:wi.essential_power_entity),O=((mi=e.load)==null?void 0:mi.auto_calculate)!==!1,ye=!!(C&&typeof C.val=="number"&&!isNaN(C.val)&&C.val>0&&!O);if(fe&&typeof fe.val=="number"&&!isNaN(fe.val))v=Math.max(0,fe.unit==="W"?fe.val/1e3:fe.val);else if(ye){const n=C.unit==="W"?C.val/1e3:C.val;v=Math.max(0,Se-n)}else{const $=(((xi=e.inverter)==null?void 0:xi.standby_power)!==void 0?e.inverter.standby_power:100)/1e3;v=Math.min(Se,$)}let Y=0;O||!C||typeof C.val!="number"||isNaN(C.val)||C.val<=0?Y=Math.max(0,Se-v):Y=Math.max(0,C.unit==="W"?C.val/1e3:C.val),this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((ki=e.inverter)==null?void 0:ki.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",v<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(v*1e3)} Вт`:this._nodes.inverterSelfConsumptionVal.innerText=`${v.toFixed(3)} кВт`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${Y.toFixed(3)} кВт`;const Ne=this._getEntityState((Bi=e.load)==null?void 0:Bi.daily_house_entity);this._nodes.dailyHouseKwh.innerText=Ne?`${Ne.val.toFixed(2)} kWh`:"12,40 kWh";let Ce=0;(((Ei=e.load)==null?void 0:Ei.subloads)||[]).forEach((n,$)=>{const G=this.shadowRoot.getElementById(`subloadVal_${$}`),A=this._getEntityState(n.entity),W=this._formatPower(A,2);Ce+=W.kw,G&&(G.innerText=W.str)});const Ie=(($i=e.battery)==null?void 0:$i.parallel_batteries)||((Ci=(Si=e.battery)==null?void 0:Si.modules)==null?void 0:Ci.length)||2;let Te=0;for(let n=0;n<Ie;n++){const $=((Ti=(Ii=e.battery)==null?void 0:Ii.modules)==null?void 0:Ti[n])||((Fi=(Pi=e.battery)==null?void 0:Pi.module_entities)==null?void 0:Fi[n])||{},G=$.capacity_kwh!==void 0?parseFloat($.capacity_kwh):n===0?7.88:n===1?5.12:(((Mi=e.battery)==null?void 0:Mi.capacity_kwh)||13)/Ie;Te+=isNaN(G)?0:G}Te<=0&&(Te=parseFloat((Ni=e.battery)==null?void 0:Ni.capacity_kwh)||13);const Ze=this._getEntityState(((Ai=e.battery)==null?void 0:Ai.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),ae=Ze&&!isNaN(Ze.val)?Ze.val:null;if(this._nodes.batCapacityVal){const n=ae!==null?ae:Te;this._nodes.batCapacityVal.innerText=`${n.toFixed(2).replace(".",",")} kWh`}const B=this._getEntityState((Ri=e.battery)==null?void 0:Ri.charge_daily_entity);this._nodes.batChargeDaily.innerText=B?`${B.val.toFixed(2)} kWh`:"4,30 kWh";const S=this._getEntityState((Vi=e.battery)==null?void 0:Vi.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=S?`${S.val.toFixed(2)} kWh`:"6,10 kWh";const I=[];for(let n=1;n<=Ie;n++){const $=this.shadowRoot.getElementById(`batPackSoc_${n}`),G=this.shadowRoot.getElementById(`batPackVolt_${n}`),A=this.shadowRoot.getElementById(`batPackCurr_${n}`),W=this.shadowRoot.getElementById(`batPackPower_${n}`),qe=this.shadowRoot.getElementById(`batPackTempVal_${n}`),K=this.shadowRoot.getElementById(`batPackStateTag_${n}`),Pe=this.shadowRoot.getElementById(`batPackKwh_${n}`),be=this.shadowRoot.getElementById(`batPackBar1_${n}`),ve=this.shadowRoot.getElementById(`batPackBar2_${n}`),H=this.shadowRoot.getElementById(`batPackBar3_${n}`),J=this.shadowRoot.getElementById(`batPackBar4_${n}`),U=((zi=(Li=e.battery)==null?void 0:Li.modules)==null?void 0:zi[n-1])||((Wi=(Di=e.battery)==null?void 0:Di.module_entities)==null?void 0:Wi[n-1])||{},ie=U.soc_entity||U.soc||`sensor.bms_rack${n}_soc`,at=U.current_entity||`sensor.bms_rack${n}_current`,ze=U.voltage_entity||U.volt||`sensor.bms_rack${n}_voltage`,ct=U.power_entity||`sensor.bms_rack${n}_power`,pt=U.temperature_entity||U.temp||`sensor.bms_rack${n}_temperature`,rt=this._getEntityState(ie),Qe=this._getEntityState(at),ht=this._getEntityState(ze),Ye=this._getEntityState(ct),et=this._getEntityState(pt),$e=rt?rt.val:n===1?82:n===2?85:75,tt=ht?ht.val:n===1?54.1:n===2?54:52.4,we=Qe?Qe.val:n===1?18.4:n===2?25.2:8.2,lt=et?et.val:n===1?38.2:n===2?21:21.5;let re=0;Ye?re=Math.abs(this._formatPower(Ye).kw):re=tt*Math.abs(we)/1e3,$&&($.innerText=`${$e.toFixed(0)}%`),G&&(G.innerText=`${tt.toFixed(1)} V`),A&&(A.innerText=`${Math.abs(we).toFixed(1)} A`),W&&(W.innerText=`${re.toFixed(2)} кВт`),qe&&(qe.innerText=`${lt.toFixed(1)}`);let X=!1;he?X=!1:pe?X=!0:Qe?X=(((Hi=e.battery)==null?void 0:Hi.power_sign)||"deye")==="deye"?we<0:we>0:X=we<0;const oe=this.shadowRoot.getElementById(`batBranchBadge_${n}`);oe&&(re<.02?(oe.className="es-bat-branch-badge es-mono idle",oe.innerHTML="<span>0.00 кВт</span>"):X?(oe.className="es-bat-branch-badge es-mono charge",oe.innerHTML=`<span>${re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`):(oe.className="es-bat-branch-badge es-mono discharge",oe.innerHTML=`<span>${re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`));const Z=this.shadowRoot.getElementById(`batPackCard_${n}`),yt=Z==null?void 0:Z.querySelector(".es-battery-gauge"),dt=Z==null?void 0:Z.querySelector(".es-battery-gauge-nipple");Z&&(Z.style.borderColor=X?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),yt&&(yt.style.borderColor=X?"#10b981":"#ef4444"),dt&&(dt.style.background=X?"#10b981":"#ef4444"),K&&(X?(K.className="es-bat-state-tag charge",K.innerText="Заряд",K.style.color="#34d399",K.style.background="rgba(16, 185, 129, 0.18)",K.style.borderColor="rgba(16, 185, 129, 0.4)"):(K.className="es-bat-state-tag discharge",K.innerText="Розряд",K.style.color="#f87171",K.style.background="rgba(239, 68, 68, 0.18)",K.style.borderColor="rgba(239, 68, 68, 0.4)")),W&&(W.style.color=X?"#34d399":"#f87171"),A&&(A.style.color=X?"#38bdf8":"#f87171");const bt=((U.capacity_kwh!==void 0?parseFloat(U.capacity_kwh):(((ji=e.battery)==null?void 0:ji.capacity_kwh)||10)/Ie)*($e/100)).toFixed(2);Pe&&(Pe.innerText=`${bt} kWh`);const gt=X?"active-green":"active-red";be&&ve&&H&&J&&(be.className=`es-bat-bar ${$e>=10?gt:""}`,ve.className=`es-bat-bar ${$e>=35?gt:""}`,H.className=`es-bat-bar ${$e>=65?gt:""}`,J.className=`es-bat-bar ${$e>=85?gt:""}`),I.push({kwNum:re,isChg:X})}this._updateFlowPaths(),this._updateFlowAnimations(a?R:0,d,_,u,Y,xe,pe,he,de,I,ge,Ce,F)}_setupResizeObserver(){var o;if(this._resizeObserver)return;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,o,g,p,f,u,x,m,k;try{const T=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!T)return;const b=T.getBoundingClientRect();if(b.width===0||b.height===0)return;const E=this._config||q,l=(a,d=.5,_=.5)=>{if(!a)return null;const h=a.getBoundingClientRect();return{x:Math.round(h.left-b.left+h.width*d),y:Math.round(h.top-b.top+h.height*_)}},r=(a,d,_)=>{const h=this.shadowRoot.getElementById(a),w=this.shadowRoot.getElementById(d);h&&h.setAttribute("d",_||""),w&&w.setAttribute("d",_||"")},s=this.shadowRoot.getElementById("gridNode"),i=this.shadowRoot.getElementById("inverterNode"),t=this.shadowRoot.getElementById("essentialNode"),c=this.shadowRoot.getElementById("totalPvPowerBadge"),y=this.shadowRoot.getElementById("masterBatteryHub"),N=this.shadowRoot.getElementById("carNode");if(s&&i){const a=s.getBoundingClientRect(),d=i.getBoundingClientRect();if(a.bottom<d.top+30){const h=l(s,.7,1),w=l(i,.2,0);if(h&&w){const P=Math.round((h.y+w.y)/2),L=`M ${h.x} ${h.y} C ${h.x} ${P}, ${w.x} ${P}, ${w.x} ${w.y}`;r("pathGridInvBase","pathGridInvFlow",L)}}else{const h=Math.round(d.top-b.top+d.height*.55),w=Math.round(a.right-b.left),P=Math.round(d.left-b.left),L=Math.round(a.top-b.top+a.height*.5);let te="";if(Math.abs(L-h)<=8)te=`M ${w} ${h} L ${P} ${h}`;else{const _e=Math.round(w+24);te=`M ${w} ${L} C ${_e} ${L}, ${_e} ${h}, ${P} ${h}`}r("pathGridInvBase","pathGridInvFlow",te)}}if(i&&t){const a=t.getBoundingClientRect(),d=i.getBoundingClientRect();if(a.bottom<d.top+30){const h=l(i,.8,0),w=l(t,.3,1);if(h&&w){const P=Math.round((h.y+w.y)/2),L=`M ${h.x} ${h.y} C ${h.x} ${P}, ${w.x} ${P}, ${w.x} ${w.y}`;r("pathInvLoadBase","pathInvLoadFlow",L)}}else{const h=Math.round(d.top-b.top+d.height*.55),w=Math.round(d.right-b.left),P=Math.round(a.left-b.left),L=Math.round(a.top-b.top+a.height*.5);let te="";if(Math.abs(L-h)<=8)te=`M ${w} ${h} L ${P} ${h}`;else{const _e=Math.round(P-24);te=`M ${w} ${h} C ${_e} ${h}, ${_e} ${L}, ${P} ${L}`}r("pathInvLoadBase","pathInvLoadFlow",te)}}if(c&&i){const a=l(c,.5,1),d=l(i,.5,0);if(a&&d){const _=`M ${a.x} ${a.y} L ${d.x} ${d.y}`;r("pathSolarInvBase","pathSolarInvFlow",_)}}if(i&&y){const a=l(i,.5,1),d=l(y,.5,0);if(a&&d){const _=`M ${a.x} ${a.y} L ${d.x} ${d.y}`;r("pathInvBatBase","pathInvBatFlow",_)}}const F=this.shadowRoot.getElementById("nonEssentialNode"),z=F&&!F.classList.contains("hidden")&&F.offsetHeight>0,R=N&&!N.classList.contains("hidden")&&N.offsetHeight>0;if(s&&z){const a=l(s,.5,1),d=l(F,.5,0);if(a&&d){const _=`M ${a.x} ${a.y} L ${d.x} ${d.y}`;r("pathGridNonEssBase","pathGridNonEssFlow",_)}}else r("pathGridNonEssBase","pathGridNonEssFlow","");if(R){const a=z?F:s;if(a){const d=l(a,.5,1),_=l(N,.5,0);if(d&&_){const h=`M ${d.x} ${d.y} L ${_.x} ${_.y}`;r("pathNonEssCarBase","pathNonEssCarFlow",h)}}else r("pathNonEssCarBase","pathNonEssCarFlow","")}else r("pathNonEssCarBase","pathNonEssCarFlow","");const V=this.shadowRoot.getElementById("subloadsBusContainer");if(t&&V){const a=l(t,.5,1),d=l(V,.5,0);if(a&&d){const _=`M ${a.x} ${a.y} L ${d.x} ${d.y}`;r("pathLoadSubloadsBase","pathLoadSubloadsFlow",_)}}else r("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const D=this.shadowRoot.getElementById("auxNode");if(i&&D&&!D.classList.contains("hidden")&&D.offsetHeight>0){const a=l(D,.35,1),d=l(i,.9,0);if(a&&d){const _=Math.round((a.y+d.y)/2),h=`M ${a.x} ${a.y} C ${a.x} ${_}, ${d.x} ${_}, ${d.x} ${d.y}`;r("pathInvAuxBase","pathInvAuxFlow",h)}}else r("pathInvAuxBase","pathInvAuxFlow","");r("pathBatStemBase","pathBatStemFlow","");const ee=this.shadowRoot.getElementById("windStationContainer"),M=((o=E.wind)==null?void 0:o.show)!==!1||((g=E.aux)==null?void 0:g.type)==="wind"?((p=E.wind)==null?void 0:p.turbine_count)||((u=(f=E.wind)==null?void 0:f.turbines)==null?void 0:u.length)||2:0;for(let a=1;a<=4;a++)if(a<=M&&ee&&!ee.classList.contains("hidden")){const d=this.shadowRoot.getElementById(`turbineCard_${a}`);if(d&&y){const _=l(d,.5,1),h=M===1?.5:.28+(a-1)/(M-1)*.44,w=l(y,h,0);if(_&&w){const P=`M ${_.x} ${_.y} L ${w.x} ${w.y}`;r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,P)}}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"")}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"");const j=((x=E.battery)==null?void 0:x.parallel_batteries)||((k=(m=E.battery)==null?void 0:m.modules)==null?void 0:k.length)||2;for(let a=1;a<=8;a++){const d=this.shadowRoot.getElementById(`batPackCard_${a}`),_=this.shadowRoot.getElementById(`batBranchBadge_${a}`);if(a<=j&&y&&d){const h=l(y,.5,1),w=l(d,.5,0);if(h&&w){const P=Math.round(h.y+(w.y-h.y)*.45);let L="";Math.abs(h.x-w.x)<=4?L=`M ${h.x} ${h.y} L ${w.x} ${w.y}`:L=`M ${h.x} ${h.y} C ${h.x} ${P}, ${w.x} ${P}, ${w.x} ${w.y}`,r(`pathBat${a}Base`,`pathBat${a}Flow`,L),_&&(_.style.left=`${w.x}px`,_.style.top=`${P}px`,_.style.display="flex")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),_&&(_.style.display="none")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),_&&(_.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,o,g,p,f;try{const u=this._config||q,x=this.shadowRoot.getElementById("solarBusSvg"),m=((e=u.solar)==null?void 0:e.pv_count)||((g=(o=u.solar)==null?void 0:o.strings)==null?void 0:g.length)||3;if(x&&m>0){const b=x.getBoundingClientRect(),E=this.shadowRoot.getElementById("pvPanel_1"),l=this.shadowRoot.getElementById(`pvPanel_${m}`),r=this.shadowRoot.getElementById("solarBusBase"),s=this.shadowRoot.getElementById("solarFlowCollector"),i=this.shadowRoot.getElementById("solarBusStemBase"),t=this.shadowRoot.getElementById("solarBusStemFlow"),c=this.shadowRoot.getElementById("solarBusFeeders");if(E&&l&&b.width>0){const y=E.getBoundingClientRect(),N=l.getBoundingClientRect(),F=Math.round(y.left-b.left+y.width/2),z=Math.round(N.left-b.left+N.width/2),R=13,V=Math.round((F+z)/2);if(r&&(r.setAttribute("x1",F),r.setAttribute("y1",R),r.setAttribute("x2",z),r.setAttribute("y2",R)),s&&(s.setAttribute("x1",F),s.setAttribute("y1",R),s.setAttribute("x2",z),s.setAttribute("y2",R)),i&&(i.setAttribute("x1",V),i.setAttribute("y1",R),i.setAttribute("x2",V),i.setAttribute("y2",26)),t&&(t.setAttribute("x1",V),t.setAttribute("y1",R),t.setAttribute("x2",V),t.setAttribute("y2",26)),c){let D="";for(let ee=1;ee<=m;ee++){const se=this.shadowRoot.getElementById(`pvPanel_${ee}`);if(se){const M=se.getBoundingClientRect(),j=Math.round(M.left-b.left+M.width/2);D+=`
                  <line x1="${j}" y1="0" x2="${j}" y2="${R}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${j}" y1="0" x2="${j}" y2="${R}" stroke="#fbbf24" stroke-width="2.5" />
                `}}c.innerHTML=D}}}const k=this.shadowRoot.getElementById("subloadsBusSvg"),T=((f=(p=u.load)==null?void 0:p.subloads)==null?void 0:f.length)||3;if(k&&T>0){const b=k.getBoundingClientRect(),E=this.shadowRoot.getElementById("subloadCard_0"),l=this.shadowRoot.getElementById(`subloadCard_${T-1}`),r=this.shadowRoot.getElementById("essentialNode"),s=this.shadowRoot.getElementById("subloadsBusBase"),i=this.shadowRoot.getElementById("subloadsFlowCollector"),t=this.shadowRoot.getElementById("subloadsBusStemBase"),c=this.shadowRoot.getElementById("subloadsBusStemFlow"),y=this.shadowRoot.getElementById("subloadsBusFeeders");if(E&&l&&b.width>0){const N=E.getBoundingClientRect(),F=l.getBoundingClientRect(),z=Math.round(N.left-b.left+N.width/2),R=Math.round(F.left-b.left+F.width/2),V=13;let D=Math.round((z+R)/2);if(r){const M=r.getBoundingClientRect();D=Math.round(M.left-b.left+M.width/2)}const ee=Math.min(z,D),se=Math.max(R,D);if(s&&(s.setAttribute("x1",ee),s.setAttribute("y1",V),s.setAttribute("x2",se),s.setAttribute("y2",V)),i&&(i.setAttribute("x1",ee),i.setAttribute("y1",V),i.setAttribute("x2",se),i.setAttribute("y2",V)),t&&(t.setAttribute("x1",D),t.setAttribute("y1",0),t.setAttribute("x2",D),t.setAttribute("y2",V)),c&&(c.setAttribute("x1",D),c.setAttribute("y1",0),c.setAttribute("x2",D),c.setAttribute("y2",V)),y){let M="";for(let j=0;j<T;j++){const a=this.shadowRoot.getElementById(`subloadCard_${j}`);if(a){const d=a.getBoundingClientRect(),_=Math.round(d.left-b.left+d.width/2);M+=`
                  <line x1="${_}" y1="${V}" x2="${_}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${_}" y1="${V}" x2="${_}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}y.innerHTML=M}}}}catch{}}_applyFlowAnimation(e,o,g,p,f){if(!e)return;if(!f){e.setAttribute("class",`flow-pulse ${o} inactive`),e.style.opacity="0",e.style.animation="none";return}const u=g?"flow-reverse":"flow-forward",x=g?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${o} ${u}`),e.style.opacity="1",e.style.setProperty("--flow-speed",p),e.style.animation=`${x} ${p} linear infinite`}_updateFlowAnimations(e,o,g,p,f,u,x,m,k,T=[],b=0,E=0,l=0){var xe,Ue,Me,De,We,He,je,Oe,Je,Xe,Ge,Se,fe;const r=this._config||q,s=((xe=r.animations)==null?void 0:xe.enabled)!==!1,i=((Ue=r.animations)==null?void 0:Ue.speed)||1.2,t=(v,C=10)=>{const O=Math.abs(v);if(O<.05)return"2.5s";const ye=Math.min(1,O/C);return`${Math.max(.4,(2.6-ye*1.9)*(i/1.2)).toFixed(2)}s`},c=this.shadowRoot.getElementById("pathGridInvFlow"),y=Math.abs(e),N=(((Me=r.grid)==null?void 0:Me.min_power_threshold)!==void 0?r.grid.min_power_threshold:50)/1e3,F=((De=r.grid)==null?void 0:De.selling_enabled)===!0,z=s&&y>=N&&(g||o&&F);this._applyFlowAnimation(c,"flow-grid",o,t(e,10),z);const R=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(R,"flow-solar",!1,t(p,12),s&&p>=.05);const V=this.shadowRoot.getElementById("pathInvLoadFlow"),D=Math.abs(f);this._applyFlowAnimation(V,"flow-load",!1,t(f,10),s&&D>=.05);const ee=this.shadowRoot.getElementById("pathInvBatFlow"),se=Math.abs(u),M=s&&se>=.02&&(x||m),j=x?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(ee,j,m,t(u,8),M);const a=this.shadowRoot.getElementById("pathGridNonEssFlow"),d=Math.abs(b);this._applyFlowAnimation(a,"flow-grid",!1,t(b,5),s&&d>=.05);const _=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),h=Math.abs(k);this._applyFlowAnimation(_,"flow-car",!1,t(k,7),s&&h>=.05);const w=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),P=Math.abs(E||f);this._applyFlowAnimation(w,"flow-load",!1,t(P,8),s&&P>=.05);const L=this.shadowRoot.getElementById("pathInvAuxFlow"),te=Math.abs(l);this._applyFlowAnimation(L,"flow-aux",!0,t(l,5),s&&te>=.05);const _e=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(_e,j,m,t(u,8),M);const ge=this.shadowRoot.getElementById("solarFlowCollector"),le=this.shadowRoot.getElementById("solarBusStemFlow");if(ge)if(!s||p<.05)ge.style.opacity="0.2",ge.style.animation="none",le&&(le.style.opacity="0.2",le.style.animation="none");else{const v=t(p,12);ge.style.opacity="1",ge.setAttribute("class","flow-line"),ge.style.animation=`esDashflow ${v} linear infinite`,le&&(le.style.opacity="1",le.setAttribute("class","flow-line"),le.style.animation=`esDashflow ${v} linear infinite`)}const me=this.shadowRoot.getElementById("subloadsFlowCollector"),de=this.shadowRoot.getElementById("subloadsBusStemFlow");if(me)if(!s||P<.05)me.style.opacity="0.2",me.style.animation="none",de&&(de.style.opacity="0.2",de.style.animation="none");else{const v=t(P,8);me.style.opacity="1",me.setAttribute("class","flow-line"),me.style.animation=`esDashflow ${v} linear infinite`,de&&(de.style.opacity="1",de.setAttribute("class","flow-line"),de.style.animation=`esDashflow ${v} linear infinite`)}const ce=this.shadowRoot.getElementById("batteryFlowCollector"),ne=this.shadowRoot.getElementById("batteryBusStemFlow"),Be=this.shadowRoot.getElementById("batteryBusFeeders"),ue=m?"#f87171":"#34d399",Ee=m?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(ce)if(ce.style.stroke=ue,ce.style.filter=Ee,ne&&(ne.style.stroke=ue,ne.style.filter=Ee),!s||!M)ce.style.opacity="0.2",ce.style.animation="none",ne&&(ne.style.opacity="0.2",ne.style.animation="none");else{const v=t(u,8),C=m?"esDashflowRev":"esDashflow";ce.style.opacity="1",ce.setAttribute("class",m?"flow-line-reverse":"flow-line"),ce.style.animation=`${C} ${v} linear infinite`,ne&&(ne.style.opacity="1",ne.setAttribute("class",m?"flow-line-reverse":"flow-line"),ne.style.animation=`${C} ${v} linear infinite`)}Be&&Be.querySelectorAll("line").forEach(v=>{if(v.style.stroke=ue,v.style.filter=Ee,!s||!M)v.style.opacity="0.2",v.style.animation="none";else{const C=t(u,8),O=m?"esDashflowRev":"esDashflow";v.style.opacity="1",v.setAttribute("class",m?"flow-line-reverse":"flow-line"),v.style.animation=`${O} ${C} linear infinite`}});for(let v=1;v<=8;v++){const C=this.shadowRoot.getElementById(`pathBat${v}Flow`);if(!C)continue;const O=T[v-1],ye=O?O.kwNum:0,Y=s&&(ye>=.02||M),Ne=m;this._applyFlowAnimation(C,j,Ne,t(ye||u,8),Y)}for(let v=0;v<6;v++){const C=this.shadowRoot.getElementById(`pathSubload${v}Flow`);if(!C)continue;const O=(He=(We=r.load)==null?void 0:We.subloads)==null?void 0:He[v],ye=O?this._getEntityState(O.entity):null,Y=ye?this._formatPower(ye,2).kw:v===0?2:v===1?3:4;this._applyFlowAnimation(C,"flow-load",!1,t(Y,8),s&&Y>=.05)}const Fe=((je=r.wind)==null?void 0:je.show)!==!1||((Oe=r.aux)==null?void 0:Oe.type)==="wind",pe=Fe?((Je=r.wind)==null?void 0:Je.turbine_count)||((Ge=(Xe=r.wind)==null?void 0:Xe.turbines)==null?void 0:Ge.length)||2:0,he=((Se=r.wind)==null?void 0:Se.turbines)||[];for(let v=1;v<=4;v++){const C=this.shadowRoot.getElementById(`pathTurbine${v}Flow`);if(C)if(v<=pe&&Fe){const O=he[v-1]||{},ye=this._hass?0:v===1?1.45:.85,Y=this._getEntityState(O.power_entity||`sensor.wind_turbine_${v}_power`);let Ce=this._formatPower(Y,ye).kw*1e3;Y&&Y.unit==="W"&&(Ce=Y.val);const Ie=O.animation_threshold??((fe=r.wind)==null?void 0:fe.animation_threshold)??50,Te=Ce>=Ie;this._applyFlowAnimation(C,"flow-wind",!1,t(Ce/1e3,3),s&&Te)}else this._applyFlowAnimation(C,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",_t),window.customCards=window.customCards||[],window.customCards.some(ut=>ut.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),Ke.EnergyStationCard=_t,Object.defineProperty(Ke,Symbol.toStringTag,{value:"Module"})});
