(function(We,q){typeof exports=="object"&&typeof module<"u"?q(exports):typeof define=="function"&&define.amd?define(["exports"],q):(We=typeof globalThis<"u"?globalThis:We||self,q(We.EnergyStationCard={}))})(this,function(We){"use strict";const q={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,color:"#06b6d4",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",rpm_entity:"",daily_energy_entity:"sensor.wind_turbine_1_daily_energy",monthly_energy_entity:"sensor.wind_turbine_1_monthly_energy",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",rpm_entity:"",daily_energy_entity:"sensor.wind_turbine_2_daily_energy",monthly_energy_entity:"sensor.wind_turbine_2_monthly_energy",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},Q={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`};class _i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||q)),this.render()}connectedCallback(){this.render()}_valueChanged(e,s){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const g=e.split(".");let c=this._config;for(let h=0;h<g.length-1;h++)c[g[h]]||(c[g[h]]={}),c=c[g[h]];c[g[g.length-1]]=s;const f=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(f)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||q)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const s=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(s),this.render()}render(){var s,g,c,f,h,$,E,S,T,_,C,l,r,o,t,i,d,v,P,M,V,j,N,z,D,K,R,O,a,p,w,y,x,F,L,Y,ae,de,re,he,ee,U,X,Be,te,ie,me,qe,Ne,Le,Ve,ge,ue,xe,Ee,$e,Se,Ce,Ie,Te,Fe,Pe;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
              <input type="checkbox" id="animEnabled" ${((s=e.animations)==null?void 0:s.enabled)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((g=e.animations)==null?void 0:g.speed)||1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((c=e.animations)==null?void 0:c.speed)||1.2}s</span>
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
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((h=e.solar)==null?void 0:h.pv_count)||3}</span>
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
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((T=e.solar)==null?void 0:T.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((_=e.solar)==null?void 0:_.pv_count)||3}).map((u,b)=>{var be,_e;const m=b+1,k=((_e=(be=e.solar)==null?void 0:be.strings)==null?void 0:_e[b])||{},H=`sensor.deye_12k_inverter_pv${m}_voltage`,ye=`sensor.deye_12k_inverter_pv${m}_current`,ce=`sensor.deye_12k_inverter_pv${m}_power`;return`
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
                      <input type="text" class="pv-str-volt-inp" data-idx="${b}" value="${k.voltage_entity!==void 0?k.voltage_entity:H}" placeholder="${H}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${m} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${b}" value="${k.current_entity!==void 0?k.current_entity:ye}" placeholder="${ye}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${m} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${b}" value="${k.power_entity!==void 0?k.power_entity:ce}" placeholder="${ce} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invTempDc" value="${((o=e.inverter)==null?void 0:o.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((t=e.inverter)==null?void 0:t.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((i=e.inverter)==null?void 0:i.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((d=e.inverter)==null?void 0:d.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((v=e.aux)==null?void 0:v.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((P=e.aux)==null?void 0:P.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((M=e.aux)==null?void 0:M.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((V=e.aux)==null?void 0:V.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((j=e.aux)==null?void 0:j.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((N=e.aux)==null?void 0:N.type)==="microinverter"&&(!((z=e.aux)!=null&&z.title)||((D=e.aux)==null?void 0:D.title)==="Вітрогенератор")?"Мікроінвертор":((K=e.aux)==null?void 0:K.title)||(((R=e.aux)==null?void 0:R.type)==="generator"?"Генератор":((O=e.aux)==null?void 0:O.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((a=e.aux)==null?void 0:a.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((p=e.wind)==null?void 0:p.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((w=e.wind)==null?void 0:w.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((y=e.wind)==null?void 0:y.animation_threshold)||((x=e.aux)==null?void 0:x.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((F=e.wind)==null?void 0:F.animation_threshold)||((L=e.aux)==null?void 0:L.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((Y=e.wind)==null?void 0:Y.turbine_count)||2}).map((u,b)=>{var k,H;const m=((H=(k=e.wind)==null?void 0:k.turbines)==null?void 0:H[b])||{};return`
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
        </div>
      </div>

      <!-- TAB CONTENT: BATTERY -->
      <div style="display: ${this._currentTab==="battery"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🔋 Шина акумуляторів & Інвертор</div>
          <div class="field-row">
            <label>Рівень заряду Battery SOC (%) (сенсор):</label>
            <input type="text" id="batSoc" value="${((ae=e.battery)==null?void 0:ae.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((de=e.battery)==null?void 0:de.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((re=e.battery)==null?void 0:re.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((he=e.battery)==null?void 0:he.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((ee=e.battery)==null?void 0:ee.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((U=e.battery)==null?void 0:U.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((X=e.battery)==null?void 0:X.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((Be=e.battery)==null?void 0:Be.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((te=e.battery)==null?void 0:te.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((ie=e.battery)==null?void 0:ie.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((me=e.battery)==null?void 0:me.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((qe=e.battery)==null?void 0:qe.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((Ne=e.battery)==null?void 0:Ne.parallel_batteries)||2}).map((u,b)=>{var Ye,Ue,Je,Ke;const m=b+1,k=((Ue=(Ye=e.battery)==null?void 0:Ye.modules)==null?void 0:Ue[b])||((Ke=(Je=e.battery)==null?void 0:Je.module_entities)==null?void 0:Ke[b])||{},H=`sensor.bms_rack${m}_soc`,ye=`sensor.bms_rack${m}_current`,ce=`sensor.bms_rack${m}_voltage`,be=`sensor.bms_rack${m}_power`,_e=`sensor.bms_rack${m}_temperature`;return`
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
                      <input type="text" class="bat-mod-soc-inp" data-idx="${b}" value="${k.soc_entity!==void 0?k.soc_entity:k.soc!==void 0?k.soc:H}" placeholder="${H}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${m} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${b}" value="${k.current_entity!==void 0?k.current_entity:ye}" placeholder="${ye}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${m} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${b}" value="${k.voltage_entity!==void 0?k.voltage_entity:k.volt!==void 0?k.volt:ce}" placeholder="${ce}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${m} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${b}" value="${k.temperature_entity!==void 0?k.temperature_entity:k.temp!==void 0?k.temp:_e}" placeholder="${_e}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${m} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${b}" value="${k.capacity_kwh!==void 0?k.capacity_kwh:m===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${m} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${b}" value="${k.power_entity!==void 0?k.power_entity:be}" placeholder="${be} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(Le=e.grid)!=null&&Le.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((Ve=e.grid)==null?void 0:Ve.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((ge=e.grid)==null?void 0:ge.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((ue=e.grid)==null?void 0:ue.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((xe=e.grid)==null?void 0:xe.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Ee=e.grid)==null?void 0:Ee.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${(($e=e.grid)==null?void 0:$e.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Se=e.grid)==null?void 0:Se.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Ce=e.grid)==null?void 0:Ce.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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

          ${(((Fe=e.load)==null?void 0:Fe.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Pe=e.load)==null?void 0:Pe.subloads)||[]).map((u,b)=>`
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
    `,this._bindEvents()}_bindEvents(){var h,$,E,S,T,_,C,l,r;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(o=>{o.addEventListener("click",t=>{this._switchTab(t.target.dataset.tab)})}),(h=e.getElementById("btnPresetEsp"))==null||h.addEventListener("click",()=>this._applyPreset("deye_esphome")),($=e.getElementById("btnPresetSolarman"))==null||$.addEventListener("click",()=>this._applyPreset("deye_solarman"));const s=(o,t)=>{const i=e.getElementById(o);i&&i.addEventListener("input",d=>this._valueChanged(t,d.target.value))},g=(o,t)=>{const i=e.getElementById(o);i&&i.addEventListener("change",d=>this._valueChanged(t,d.target.checked))},c=(o,t,i,d="")=>{const v=e.getElementById(o);v&&v.addEventListener("input",P=>{const M=parseFloat(P.target.value);if(i){const V=e.getElementById(i);V&&(V.innerText=`${M}${d}`)}this._valueChanged(t,M)})};s("title","title"),g("animEnabled","animations.enabled"),c("animSpeed","animations.speed","animSpeedVal","s"),(E=e.getElementById("solarPvCount"))==null||E.addEventListener("input",o=>{const t=parseInt(o.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=t,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<t;){const i=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${i}`,name:`PV ${i}`,voltage_entity:`sensor.deye_12k_inverter_pv${i}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${i}_current`,power_entity:`sensor.deye_12k_inverter_pv${i}_power`})}this._valueChanged("solar.pv_count",t),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].name=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].voltage_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].current_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].power_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),s("solarTotalPower","solar.total_power_entity"),s("solarDailyYield","solar.daily_yield_entity"),c("solarTargetDaily","solar.target_daily_yield"),s("invModel","inverter.model_name"),s("invPower","inverter.power_entity"),s("invTempAc","inverter.ac_temperature_entity"),s("invTempDc","inverter.dc_temperature_entity"),s("invVolt","inverter.voltage_entity"),s("invCurrent","inverter.current_entity"),s("invFreq","inverter.frequency_entity"),(S=e.getElementById("auxType"))==null||S.addEventListener("change",o=>{const t=o.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=t;const d={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[t]||"Мікроінвертор";this._config.aux.title=d;const v=e.getElementById("auxTitle");v&&(v.value=d),this._valueChanged("aux.type",t),this._valueChanged("aux.title",d)}),s("auxTitle","aux.title"),s("auxPower","aux.power_entity"),(T=e.getElementById("windTurbineCount"))==null||T.addEventListener("input",o=>{const t=parseInt(o.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=t,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<t;){const i=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${i}`,name:`Вітряк ${i}`,power_entity:`sensor.wind_turbine_${i}_power`,speed_entity:`sensor.wind_turbine_${i}_speed`,animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",t),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),c("windThreshold","wind.animation_threshold","windThresholdVal","W"),(_=e.getElementById("windThreshold"))==null||_.addEventListener("input",o=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(o.target.value))}),e.querySelectorAll(".turbine-name-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].name=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].power_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].speed_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),s("batSoc","battery.soc_entity"),s("batPower","battery.power_entity"),s("batPowerSign","battery.power_sign"),s("batVolt","battery.voltage_entity"),s("batCurrent","battery.current_entity"),s("batCapacity","battery.capacity_entity"),s("batChargeDaily","battery.charge_daily_entity"),s("batDischargeDaily","battery.discharge_daily_entity"),(C=e.getElementById("batParallelCount"))==null||C.addEventListener("input",o=>{const t=parseInt(o.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=t,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<t;){const i=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${i}`,name:`Батарея ${i}`,soc_entity:`sensor.bms_rack${i}_soc`,current_entity:`sensor.bms_rack${i}_current`,voltage_entity:`sensor.bms_rack${i}_voltage`,power_entity:`sensor.bms_rack${i}_power`,temperature_entity:`sensor.bms_rack${i}_temperature`})}this._valueChanged("battery.parallel_batteries",t),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].name=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].soc_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].current_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].voltage_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].temperature_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].power_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(o=>{o.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].capacity_kwh=parseFloat(t.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),g("gridSellingEnabled","grid.selling_enabled"),s("gridPower","grid.power_entity"),s("gridPowerSign","grid.power_sign"),c("gridMinThreshold","grid.min_power_threshold"),s("gridImportDaily","grid.import_daily_entity"),s("gridExportDaily","grid.export_daily_entity"),s("gridNonEssential","grid.non_essential_power_entity"),s("gridCarPower","grid.car_power_entity"),s("loadEssential","load.essential_power_entity"),s("loadDailyHouse","load.daily_house_entity");const f=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const o=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${o}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(l=e.getElementById("btnAddSubload"))==null||l.addEventListener("click",f),(r=e.getElementById("btnAddSubloadBottom"))==null||r.addEventListener("click",f),e.querySelectorAll(".btn-del-subload").forEach(o=>{o.addEventListener("click",t=>{var v;const i=t.currentTarget||t.target.closest(".btn-del-subload"),d=parseInt(i.dataset.idx);(v=this._config.load)!=null&&v.subloads&&(this._config.load.subloads.splice(d,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(o=>{o.addEventListener("input",t=>{var d,v;const i=parseInt(t.target.dataset.idx);(v=(d=this._config.load)==null?void 0:d.subloads)!=null&&v[i]&&(this._config.load.subloads[i].name=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(o=>{o.addEventListener("change",t=>{var d,v;const i=parseInt(t.target.dataset.idx);(v=(d=this._config.load)==null?void 0:d.subloads)!=null&&v[i]&&(this._config.load.subloads[i].icon=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(o=>{o.addEventListener("input",t=>{var d,v;const i=parseInt(t.target.dataset.idx);(v=(d=this._config.load)==null?void 0:d.subloads)!=null&&v[i]&&(this._config.load.subloads[i].entity=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",_i);class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(q))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const s=JSON.parse(JSON.stringify(e)),g=JSON.parse(JSON.stringify(q));this._config=this._deepMerge(g,s),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,s){const g=Array.isArray(e)?[...e]:Object.assign({},e);if(!s||typeof s!="object")return g;for(const c of Object.keys(s)){const f=s[c],h=e?e[c]:void 0;f&&typeof f=="object"&&!Array.isArray(f)?g[c]=this._deepMerge(h||{},f):g[c]=f}return g}_getEntityState(e){var f;if(!this._hass||!e||!this._hass.states[e])return null;const s=this._hass.states[e],g=parseFloat(s.state),c=((f=s.attributes)==null?void 0:f.unit_of_measurement)||"";return{raw:s.state,val:isNaN(g)?0:g,unit:c,attributes:s.attributes}}_formatPower(e,s=0){if(!e)return{num:s.toFixed(3),kw:s,str:`${s.toFixed(3)} кВт`};let g=e.val;return e.unit==="W"&&(g=g/1e3),{num:g.toFixed(3),kw:g,str:`${g.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const s=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(s)}_renderCardSkeleton(){var s,g,c,f,h,$,E,S,T,_,C,l,r,o,t,i,d;const e=this._config||q;this._initialized=!0,this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((s=e.animations)==null?void 0:s.speed)||1.2}s;
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
            <div class="es-schematic-node clickable-node ${(c=e.grid)!=null&&c.show_non_essential&&((f=e.grid)!=null&&f.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Q.house_outline}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(h=e.grid)!=null&&h.show_car&&(($=e.grid)!=null&&$.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${Q.car}</div>
              <div class="es-node-title" id="carTitle">${((E=e.grid)==null?void 0:E.car_title)||"Авто"}</div>
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
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((S=e.aux)==null?void 0:S.type)==="none"||((T=e.aux)==null?void 0:T.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${Q[(_=e.aux)==null?void 0:_.type]||Q.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((C=e.aux)==null?void 0:C.type)==="microinverter"&&(!((l=e.aux)!=null&&l.title)||((r=e.aux)==null?void 0:r.title)==="Вітрогенератор")?"Мікроінвертор":((o=e.aux)==null?void 0:o.title)||"Мікроінвертор"}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((t=e.aux)==null?void 0:t.subtitle)||"Джерело → GEN"}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((i=e.wind)==null?void 0:i.show)===!1&&((d=e.aux)==null?void 0:d.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var E,S,T,_,C,l,r,o;const e=this._config||q,s=((E=this._nodes)==null?void 0:E.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!s)return;if(s.innerHTML="",!(((S=e.wind)==null?void 0:S.show)!==!1||((T=e.aux)==null?void 0:T.type)==="wind")){s.classList.add("hidden");return}s.classList.remove("hidden");const c=((_=e.wind)==null?void 0:_.turbine_count)||((l=(C=e.wind)==null?void 0:C.turbines)==null?void 0:l.length)||2,f=((r=e.wind)==null?void 0:r.turbines)||[],h=document.createElement("div");h.className="es-wind-summary-bar es-mono",h.id="windStationSummaryBar",h.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">5.90</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">109.2</span> kWh</span>
    `,s.appendChild(h);const $=document.createElement("div");$.className="es-wind-pods-row",s.appendChild($);for(let t=0;t<c;t++){const i=f[t]||{name:`Вітряк ${t+1}`,power_entity:`sensor.wind_turbine_${t+1}_power`,animation_threshold:((o=e.wind)==null?void 0:o.animation_threshold)||50},d=document.createElement("div");d.className="es-turbine-card glow-wind clickable-node",d.id=`turbineCard_${t+1}`,d.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${t+1}">
              ${Q.wind_turbine}
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
      `,d.addEventListener("click",()=>{this._fireMoreInfo(i.power_entity)}),$.appendChild(d)}}_renderDynamicPvPanels(){var c,f,h,$,E;const e=this._config||q,s=this._nodes.pvPanelsContainer;if(!s)return;s.innerHTML="";const g=((c=e.solar)==null?void 0:c.pv_count)||((h=(f=e.solar)==null?void 0:f.strings)==null?void 0:h.length)||3;for(let S=1;S<=g;S++){const T=S<10?`0${S}`:`${S}`,_=((E=($=e.solar)==null?void 0:$.strings)==null?void 0:E[S-1])||{},C=_.name||`PV ${T}`,l=document.createElement("div");l.className="es-pv-panel glow-solar clickable-node",l.dataset.pvIndex=S,l.id=`pvPanel_${S}`,l.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${Q.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${C}</span>
        <span class="es-pv-val es-mono" id="pvVal_${S}">1,200 кВт</span>
      `,l.addEventListener("click",()=>{var o;const r=_.power_entity||_.voltage_entity||_.current_entity||((o=e.solar)==null?void 0:o.total_power_entity);this._fireMoreInfo(r)}),s.appendChild(l)}}_renderDynamicSubloads(){var c;const e=this._config||q,s=this._nodes.subloadsContainer;if(!s)return;s.innerHTML="",(((c=e.load)==null?void 0:c.subloads)||[]).forEach((f,h)=>{const $=document.createElement("div");$.className="es-subload-card clickable-node",$.id=`subloadCard_${h}`,$.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${Q[f.icon]||Q.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${f.name}</span>
        <span class="es-mono" id="subloadVal_${h}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,$.addEventListener("click",()=>{this._fireMoreInfo(f.entity)}),s.appendChild($)})}_renderDynamicBatteryRack(){var h,$,E,S,T,_,C;const e=this._config||q,s=this._nodes.batteryRackContainer;if(!s)return;s.innerHTML="";const g=((h=e.battery)==null?void 0:h.parallel_batteries)||((E=($=e.battery)==null?void 0:$.modules)==null?void 0:E.length)||2,c=[82,76,91,68,85,90,72,80],f=[52.4,52.4,52.4,52.4,52.4,52.4];for(let l=1;l<=g;l++){const r=((T=(S=e.battery)==null?void 0:S.modules)==null?void 0:T[l-1])||((C=(_=e.battery)==null?void 0:_.module_entities)==null?void 0:C[l-1])||{},o=r.name||`Батарея ${l}`,t=c[(l-1)%c.length],i=f[(l-1)%f.length],d=document.createElement("div");d.className="es-battery-pack-card glow-battery clickable-node",d.id=`batPackCard_${l}`,d.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${Q.battery_vertical}</div>
        <span class="es-bat-name">${o}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${l}">${t}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${l}">${i.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${l}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
      `,d.addEventListener("click",()=>{var P;const v=r.soc_entity||r.soc||r.voltage_entity||r.volt||r.current_entity||((P=e.battery)==null?void 0:P.soc_entity);this._fireMoreInfo(v)}),s.appendChild(d)}}_bindInteractions(){var g,c,f,h,$,E,S,T,_,C,l,r,o;const e=this.shadowRoot,s=this._config||q;(g=e.getElementById("solarHeaderNode"))==null||g.addEventListener("click",()=>{var t,i;this._fireMoreInfo(((t=s.solar)==null?void 0:t.daily_yield_entity)||((i=s.solar)==null?void 0:i.total_power_entity))}),(c=e.getElementById("totalPvPowerBadge"))==null||c.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.solar)==null?void 0:t.total_power_entity)}),(f=e.getElementById("gridNode"))==null||f.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.grid)==null?void 0:t.power_entity)}),(h=e.getElementById("nonEssentialNode"))==null||h.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.grid)==null?void 0:t.non_essential_power_entity)}),($=e.getElementById("carNode"))==null||$.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.grid)==null?void 0:t.car_power_entity)}),(E=e.getElementById("inverterNode"))==null||E.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.inverter)==null?void 0:t.power_entity)}),(S=e.getElementById("auxNode"))==null||S.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.aux)==null?void 0:t.power_entity)}),(T=e.getElementById("essentialNode"))==null||T.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.load)==null?void 0:t.essential_power_entity)}),(_=e.getElementById("masterBatteryHub"))==null||_.addEventListener("click",()=>{var t;this._fireMoreInfo((t=s.battery)==null?void 0:t.soc_entity)});for(let t=1;t<=8;t++){const i=e.getElementById(`batBranchBadge_${t}`),d=((l=(C=s.battery)==null?void 0:C.modules)==null?void 0:l[t-1])||((o=(r=s.battery)==null?void 0:r.module_entities)==null?void 0:o[t-1])||{};i==null||i.addEventListener("click",()=>{var P;const v=d.power_entity||d.current_entity||d.soc_entity||((P=s.battery)==null?void 0:P.soc_entity);this._fireMoreInfo(v)})}}_updateValues(){var Ie,Te,Fe,Pe,u,b,m,k,H,ye,ce,be,_e,Ye,Ue,Je,Ke,nt,at,rt,lt,dt,ct,pt,ht,yt,gt,ut,bt,_t,ft,vt,wt,mt,xt,kt,Bt,Et,$t,St,Ct,It,Tt,Ft,Pt,Mt,Rt,At,Nt,Lt,Vt,zt,Dt,Ht,Wt,jt,Ot,Gt,qt,Yt,Ut,Jt,Kt,Xt,Zt,Qt,ei,ti,ii,oi,si,ni,ai,ri,li,di,ci,pi,hi,yi,gi;if(!this._nodes.dailySolarYield)return;const e=this._config||q,s=((Ie=e.solar)==null?void 0:Ie.pv_count)||((Fe=(Te=e.solar)==null?void 0:Te.strings)==null?void 0:Fe.length)||3;let g=0,c=!1;for(let n=1;n<=s;n++){const I=(u=(Pe=e.solar)==null?void 0:Pe.strings)==null?void 0:u[n-1],G=(I==null?void 0:I.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),A=(I==null?void 0:I.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),W=(I==null?void 0:I.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:"");if(this._getEntityState(W)||this._getEntityState(G)||this._getEntityState(A)){c=!0;break}}for(let n=1;n<=s;n++){const I=this.shadowRoot.getElementById(`pvVal_${n}`),G=this.shadowRoot.getElementById(`pvVolt_${n}`),A=this.shadowRoot.getElementById(`pvCurr_${n}`),W=(m=(b=e.solar)==null?void 0:b.strings)==null?void 0:m[n-1],ze=(W==null?void 0:W.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),B=(W==null?void 0:W.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),le=(W==null?void 0:W.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:""),ne=this._getEntityState(ze),Z=this._getEntityState(B),fe=this._getEntityState(le);let oe=0,J=0,pe=0;fe?pe=this._formatPower(fe).kw:ne&&Z?pe=ne.val*Z.val/1e3:ne?pe=0:pe=c?0:4,ne?oe=ne.val:oe=c?0:380+n*4.5,Z?J=Z.val:fe&&oe>0?J=pe*1e3/oe:J=c?0:3.12+n*.28,g+=pe,I&&(I.innerText=`${pe.toFixed(3)} кВт`),G&&(G.innerText=`${oe.toFixed(1)} V`),A&&(A.innerText=`${J.toFixed(2)} A`)}const f=this._getEntityState((k=e.solar)==null?void 0:k.total_power_entity);let h=0;f?h=this._formatPower(f).kw:h=g,this._nodes.totalPvPowerBadge.innerText=`${h.toFixed(3)} кВт`;const $=this._getEntityState((H=e.solar)==null?void 0:H.daily_yield_entity),E=$?$.val:c?0:48.6;this._nodes.dailySolarYield.innerText=E.toFixed(1);const S=((ye=e.solar)==null?void 0:ye.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=S.toFixed(1);const T=Math.min(100,Math.round(E/S*100));this._nodes.solarProgressBar.style.width=`${T}%`;const _=this._getEntityState((ce=e.inverter)==null?void 0:ce.power_entity);this._nodes.inverterPowerVal&&((be=e.inverter)!=null&&be.power_entity&&_?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(_,0).str):this._nodes.inverterPowerVal.style.display="none");const C=this._getEntityState((_e=e.inverter)==null?void 0:_e.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=C?C.val.toFixed(2):"41,20";const l=this._getEntityState((Ye=e.inverter)==null?void 0:Ye.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=l?l.val.toFixed(2):"38,40";const r=this._getEntityState((Ue=e.inverter)==null?void 0:Ue.voltage_entity);this._nodes.inverterVolt.innerText=r?r.val.toFixed(2):"231,45";const o=this._getEntityState((Je=e.inverter)==null?void 0:Je.current_entity);this._nodes.inverterCurrent.innerText=o?o.val.toFixed(2):"8,60";const t=this._getEntityState((Ke=e.inverter)==null?void 0:Ke.frequency_entity);this._nodes.inverterFreq.innerText=t?t.val.toFixed(2):"50,01";const i=((nt=e.wind)==null?void 0:nt.show)!==!1||((at=e.aux)==null?void 0:at.type)==="wind",d=this.shadowRoot.getElementById("windStationContainer"),v=this._nodes.auxNode;if(d)if(!i)d.classList.add("hidden");else{d.classList.remove("hidden");const n=((rt=e.wind)==null?void 0:rt.turbine_count)||((dt=(lt=e.wind)==null?void 0:lt.turbines)==null?void 0:dt.length)||2,I=((ct=e.wind)==null?void 0:ct.turbines)||[];for(let B=0;B<n;B++){const le=I[B]||{power_entity:`sensor.wind_turbine_${B+1}_power`,rpm_entity:"",daily_energy_entity:`sensor.wind_turbine_${B+1}_daily_energy`,monthly_energy_entity:`sensor.wind_turbine_${B+1}_monthly_energy`,animation_threshold:((pt=e.wind)==null?void 0:pt.animation_threshold)||50},ne=this.shadowRoot.getElementById(`turbinePower_${B+1}`),Z=this.shadowRoot.getElementById(`turbineStatus_${B+1}`),fe=this.shadowRoot.getElementById(`turbineIcon_${B+1}`),oe=this.shadowRoot.getElementById(`turbineCard_${B+1}`),J=this.shadowRoot.getElementById(`turbineRpmVal_${B+1}`),pe=this.shadowRoot.getElementById(`turbineDailyVal_${B+1}`),Ze=this.shadowRoot.getElementById(`turbineMonthlyVal_${B+1}`),ot=B===0?1.56:.22,je=this._getEntityState(le.power_entity),Qe=this._formatPower(je,ot);ne&&(ne.innerText=Qe.str);let Oe=Qe.kw*1e3;je&&je.unit==="W"&&(Oe=je.val);const De=le.animation_threshold??((ht=e.wind)==null?void 0:ht.animation_threshold)??50,ke=fe==null?void 0:fe.querySelector(".turbine-rotor");if(Oe>=De){ke&&ke.classList.add("spinning"),oe&&(oe.classList.add("glow-wind"),oe.style.borderColor="rgba(6, 182, 212, 0.55)");const et=((yt=e.wind)==null?void 0:yt.max_power)||3e3,se=(3.2-Math.min(1,Math.max(0,(Oe-De)/(et-De)))*2.75).toFixed(2);ke&&ke.style.setProperty("--turbine-speed",`${se}s`),Z&&(Z.innerText="Генерація",Z.style.color="#67e8f9")}else ke&&ke.classList.remove("spinning"),oe&&(oe.classList.remove("glow-wind"),oe.style.borderColor="rgba(255, 255, 255, 0.08)"),Z&&(Z.innerText="Штиль",Z.style.color="#94a3b8");const Ge=le.rpm_entity,ve=Ge&&((gt=this._hass)!=null&&gt.states[Ge])?this._getEntityState(Ge):null,we=this.shadowRoot.getElementById(`turbineRpmBox_${B+1}`);we&&(ve&&ve.raw!=="unavailable"&&ve.raw!=="unknown"&&typeof ve.val=="number"&&!isNaN(ve.val)&&ve.val>0?(we.style.display="inline",J&&(J.innerText=Math.round(ve.val))):we.style.display="none");const Xe=this._getEntityState(le.daily_energy_entity);pe&&(pe.innerText=Xe?Xe.val.toFixed(2):B===0?"4.80":"1.10");const Me=this._getEntityState(le.monthly_energy_entity);Ze&&(Ze.innerText=Me?Me.val.toFixed(1):B===0?"86.4":"22.8")}let G=0,A=0;for(let B=0;B<n;B++){const le=I[B]||{},ne=this._getEntityState(le.daily_energy_entity),Z=this._getEntityState(le.monthly_energy_entity);G+=ne?ne.val:B===0?4.8:1.1,A+=Z?Z.val:B===0?86.4:22.8}const W=this.shadowRoot.getElementById("windTotalDailyVal"),ze=this.shadowRoot.getElementById("windTotalMonthlyVal");if(W){const B=this._getEntityState((ut=e.wind)==null?void 0:ut.daily_energy_entity);W.innerText=B?B.val.toFixed(2):G.toFixed(2)}if(ze){const B=this._getEntityState((bt=e.wind)==null?void 0:bt.monthly_energy_entity);ze.innerText=B?B.val.toFixed(1):A.toFixed(1)}}let P=0;if(v)if(((_t=e.aux)==null?void 0:_t.type)==="none"||((ft=e.aux)==null?void 0:ft.type)==="wind")v.classList.add("hidden");else{v.classList.remove("hidden");const n=this._getEntityState((vt=e.aux)==null?void 0:vt.power_entity),I=this._formatPower(n,2);P=I.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=I.str);const G={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let A=(wt=e.aux)==null?void 0:wt.title;((mt=e.aux)==null?void 0:mt.type)==="microinverter"&&(!A||A==="Вітрогенератор")?A="Мікроінвертор":(xt=e.aux)!=null&&xt.type&&G[e.aux.type]&&(!A||A==="Вітрогенератор")?A=G[e.aux.type]:A||(A="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=A),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=Q[(kt=e.aux)==null?void 0:kt.type]||Q.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Bt=e.aux)==null?void 0:Bt.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),v.style.borderColor="rgba(192, 132, 252, 0.45)",v.style.background="rgba(88, 28, 135, 0.35)",v.classList.remove("glow-wind"),v.classList.add("glow-aux")}const M=this._getEntityState((Et=e.grid)==null?void 0:Et.power_entity),V=M?M.unit==="W"?M.val/1e3:M.val:0,j=(($t=e.grid)==null?void 0:$t.power_sign)||((St=e.grid)!=null&&St.invert_power?"inverted":"deye"),N=((Ct=e.grid)==null?void 0:Ct.selling_enabled)===!0,z=(((It=e.grid)==null?void 0:It.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3;let D=!1,K=!1;const R=Math.abs(V);R>=z&&(j==="deye"?V<0?D=!0:K=!0:V>0?D=!0:K=!0),D&&!N&&(D=!1),this._nodes.gridPowerVal&&(this._nodes.gridPowerVal.innerText=`${R.toFixed(3)} кВт`,D?this._nodes.gridPowerVal.style.color="#34d399":K?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"),this._nodes.gridDirectionLabel&&(D?(this._nodes.gridDirectionLabel.innerText="← Експорт",this._nodes.gridDirectionLabel.style.color="#34d399"):K?(this._nodes.gridDirectionLabel.innerText="→ Імпорт",this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText="Мережа",this._nodes.gridDirectionLabel.style.color="#64748b"));const O=this._getEntityState((Tt=e.grid)==null?void 0:Tt.import_daily_entity);this._nodes.gridImportDaily.innerText=O?`${O.val.toFixed(2)} kWh`:"0.00 kWh";const a=this._getEntityState((Ft=e.grid)==null?void 0:Ft.export_daily_entity);this._nodes.gridExportDaily.innerText=a?`${a.val.toFixed(2)} kWh`:"0.00 kWh";const p=this.shadowRoot.getElementById("nonEssentialNode"),w=!!((Pt=e.grid)!=null&&Pt.show_non_essential&&((Mt=e.grid)!=null&&Mt.non_essential_power_entity))||((Rt=e.grid)==null?void 0:Rt.show_non_essential)!==!1&&!!((At=e.grid)!=null&&At.non_essential_power_entity);let y=0;if(p)if(w){p.classList.remove("hidden");const n=this._getEntityState(e.grid.non_essential_power_entity),I=this._formatPower(n,0);y=I.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=I.str)}else p.classList.add("hidden");const x=this.shadowRoot.getElementById("carNode"),F=!!((Nt=e.grid)!=null&&Nt.show_car&&((Lt=e.grid)!=null&&Lt.car_power_entity))||((Vt=e.grid)==null?void 0:Vt.show_car)!==!1&&!!((zt=e.grid)!=null&&zt.car_power_entity);let L=0;if(x)if(F){x.classList.remove("hidden");const n=this._getEntityState(e.grid.car_power_entity),I=this._formatPower(n,0);L=I.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=I.str)}else x.classList.add("hidden");const Y=this._getEntityState((Dt=e.load)==null?void 0:Dt.essential_power_entity);this._nodes.essentialPowerVal.innerText=this._formatPower(Y,0).str;const ae=this._getEntityState((Ht=e.load)==null?void 0:Ht.daily_house_entity);this._nodes.dailyHouseKwh.innerText=ae?`${ae.val.toFixed(2)} kWh`:"12,40 kWh";let de=0;(((Wt=e.load)==null?void 0:Wt.subloads)||[]).forEach((n,I)=>{const G=this.shadowRoot.getElementById(`subloadVal_${I}`),A=this._getEntityState(n.entity),W=this._formatPower(A,2);de+=W.kw,G&&(G.innerText=W.str)});const re=this._getEntityState((jt=e.battery)==null?void 0:jt.soc_entity),he=re?re.val:80;this._nodes.masterBatterySoc.innerText=`${he.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const ee=this._getEntityState((Ot=e.battery)==null?void 0:Ot.power_entity),U=this._getEntityState((Gt=e.battery)==null?void 0:Gt.current_entity),X=ee?ee.unit==="W"?ee.val/1e3:ee.val:0,Be=((qt=e.battery)==null?void 0:qt.power_sign)||((Yt=e.battery)!=null&&Yt.invert_power?"standard":"deye");let te=!1,ie=!1;const me=Math.abs(X);if(me>=.02?Be==="deye"?X<0?te=!0:ie=!0:X>0?te=!0:ie=!0:U&&Math.abs(U.val)>=.3&&(Be==="deye"?U.val<0?te=!0:ie=!0:U.val>0?te=!0:ie=!0),this._isCharging=te,this._isDischarging=ie,this._nodes.masterBatteryFlowHint){let n="Очікування",I="#94a3b8";te?(n="Заряд ↓",I="#34d399"):ie&&(n="Розряд ↑",I="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${me.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${I}; font-weight: 700; font-size: 14px;">${n}</span>`}const Ne=this._getEntityState((Ut=e.battery)==null?void 0:Ut.voltage_entity),Le=Ne?Ne.val.toFixed(2):"53.24",Ve=U?U.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${Le.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${Ve.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Jt=e.battery)==null?void 0:Jt.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const n=((Kt=e.battery)==null?void 0:Kt.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${n}%`}const ge=((Xt=e.battery)==null?void 0:Xt.parallel_batteries)||((Qt=(Zt=e.battery)==null?void 0:Zt.modules)==null?void 0:Qt.length)||2;let ue=0;for(let n=0;n<ge;n++){const I=((ti=(ei=e.battery)==null?void 0:ei.modules)==null?void 0:ti[n])||((oi=(ii=e.battery)==null?void 0:ii.module_entities)==null?void 0:oi[n])||{},G=I.capacity_kwh!==void 0?parseFloat(I.capacity_kwh):n===0?7.88:n===1?5.12:(((si=e.battery)==null?void 0:si.capacity_kwh)||13)/ge;ue+=isNaN(G)?0:G}ue<=0&&(ue=parseFloat((ni=e.battery)==null?void 0:ni.capacity_kwh)||13);const xe=this._getEntityState(((ai=e.battery)==null?void 0:ai.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Ee=xe&&!isNaN(xe.val)?xe.val:null;if(this._nodes.batCapacityVal){const n=Ee!==null?Ee:ue;this._nodes.batCapacityVal.innerText=`${n.toFixed(2).replace(".",",")} kWh`}const $e=this._getEntityState((ri=e.battery)==null?void 0:ri.charge_daily_entity);this._nodes.batChargeDaily.innerText=$e?`${$e.val.toFixed(2)} kWh`:"4,30 kWh";const Se=this._getEntityState((li=e.battery)==null?void 0:li.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=Se?`${Se.val.toFixed(2)} kWh`:"6,10 kWh";const Ce=[];for(let n=1;n<=ge;n++){const I=this.shadowRoot.getElementById(`batPackSoc_${n}`),G=this.shadowRoot.getElementById(`batPackVolt_${n}`),A=this.shadowRoot.getElementById(`batPackCurr_${n}`),W=this.shadowRoot.getElementById(`batPackPower_${n}`),ze=this.shadowRoot.getElementById(`batPackTempVal_${n}`),B=this.shadowRoot.getElementById(`batPackStateTag_${n}`),le=this.shadowRoot.getElementById(`batPackKwh_${n}`),ne=this.shadowRoot.getElementById(`batPackBar1_${n}`),Z=this.shadowRoot.getElementById(`batPackBar2_${n}`),fe=this.shadowRoot.getElementById(`batPackBar3_${n}`),oe=this.shadowRoot.getElementById(`batPackBar4_${n}`),J=((ci=(di=e.battery)==null?void 0:di.modules)==null?void 0:ci[n-1])||((hi=(pi=e.battery)==null?void 0:pi.module_entities)==null?void 0:hi[n-1])||{},pe=J.soc_entity||J.soc||`sensor.bms_rack${n}_soc`,Ze=J.current_entity||`sensor.bms_rack${n}_current`,ot=J.voltage_entity||J.volt||`sensor.bms_rack${n}_voltage`,je=J.power_entity||`sensor.bms_rack${n}_power`,Qe=J.temperature_entity||J.temp||`sensor.bms_rack${n}_temperature`,Oe=this._getEntityState(pe),De=this._getEntityState(Ze),ke=this._getEntityState(ot),Ge=this._getEntityState(je),ve=this._getEntityState(Qe),we=Oe?Oe.val:n===1?82:n===2?85:75,Xe=ke?ke.val:n===1?54.1:n===2?54:52.4,Me=De?De.val:n===1?18.4:n===2?25.2:8.2,et=ve?ve.val:n===1?38.2:n===2?21:21.5;let Re=0;Ge?Re=Math.abs(this._formatPower(Ge).kw):Re=Xe*Math.abs(Me)/1e3,I&&(I.innerText=`${we.toFixed(0)}%`),G&&(G.innerText=`${Xe.toFixed(1)} V`),A&&(A.innerText=`${Math.abs(Me).toFixed(1)} A`),W&&(W.innerText=`${Re.toFixed(2)} кВт`),ze&&(ze.innerText=`${et.toFixed(1)}`);let se=!1;ie?se=!1:te?se=!0:De?se=(((yi=e.battery)==null?void 0:yi.power_sign)||"deye")==="deye"?Me<0:Me>0:se=Me<0;const He=this.shadowRoot.getElementById(`batBranchBadge_${n}`);He&&(Re<.02?(He.className="es-bat-branch-badge es-mono idle",He.innerHTML="<span>0.00 кВт</span>"):se?(He.className="es-bat-branch-badge es-mono charge",He.innerHTML=`<span>${Re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`):(He.className="es-bat-branch-badge es-mono discharge",He.innerHTML=`<span>${Re.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`));const Ae=this.shadowRoot.getElementById(`batPackCard_${n}`),ui=Ae==null?void 0:Ae.querySelector(".es-battery-gauge"),bi=Ae==null?void 0:Ae.querySelector(".es-battery-gauge-nipple");Ae&&(Ae.style.borderColor=se?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),ui&&(ui.style.borderColor=se?"#10b981":"#ef4444"),bi&&(bi.style.background=se?"#10b981":"#ef4444"),B&&(se?(B.className="es-bat-state-tag charge",B.innerText="Заряд",B.style.color="#34d399",B.style.background="rgba(16, 185, 129, 0.18)",B.style.borderColor="rgba(16, 185, 129, 0.4)"):(B.className="es-bat-state-tag discharge",B.innerText="Розряд",B.style.color="#f87171",B.style.background="rgba(239, 68, 68, 0.18)",B.style.borderColor="rgba(239, 68, 68, 0.4)")),W&&(W.style.color=se?"#34d399":"#f87171"),A&&(A.style.color=se?"#38bdf8":"#f87171");const fi=((J.capacity_kwh!==void 0?parseFloat(J.capacity_kwh):(((gi=e.battery)==null?void 0:gi.capacity_kwh)||10)/ge)*(we/100)).toFixed(2);le&&(le.innerText=`${fi} kWh`);const tt=se?"active-green":"active-red";ne&&Z&&fe&&oe&&(ne.className=`es-bat-bar ${we>=10?tt:""}`,Z.className=`es-bat-bar ${we>=35?tt:""}`,fe.className=`es-bat-bar ${we>=65?tt:""}`,oe.className=`es-bat-bar ${we>=85?tt:""}`),Ce.push({kwNum:Re,isChg:se})}this._updateFlowPaths(),this._updateFlowAnimations(V,D,K,h,Y?Y.unit==="W"?Y.val/1e3:Y.val:0,me,te,ie,L,Ce,y,de,P)}_setupResizeObserver(){var s;if(this._resizeObserver)return;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,s,g,c,f,h,$,E,S;try{const T=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!T)return;const _=T.getBoundingClientRect();if(_.width===0||_.height===0)return;const C=this._config||q,l=(a,p=.5,w=.5)=>{if(!a)return null;const y=a.getBoundingClientRect();return{x:Math.round(y.left-_.left+y.width*p),y:Math.round(y.top-_.top+y.height*w)}},r=(a,p,w)=>{const y=this.shadowRoot.getElementById(a),x=this.shadowRoot.getElementById(p);y&&y.setAttribute("d",w||""),x&&x.setAttribute("d",w||"")},o=this.shadowRoot.getElementById("gridNode"),t=this.shadowRoot.getElementById("inverterNode"),i=this.shadowRoot.getElementById("essentialNode"),d=this.shadowRoot.getElementById("totalPvPowerBadge"),v=this.shadowRoot.getElementById("masterBatteryHub"),P=this.shadowRoot.getElementById("carNode");if(o&&t){const a=o.getBoundingClientRect(),p=t.getBoundingClientRect();if(a.bottom<p.top+30){const y=l(o,.7,1),x=l(t,.2,0);if(y&&x){const F=Math.round((y.y+x.y)/2),L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${x.x} ${F}, ${x.x} ${x.y}`;r("pathGridInvBase","pathGridInvFlow",L)}}else{const y=Math.round(p.top-_.top+p.height*.55),x=Math.round(a.right-_.left),F=Math.round(p.left-_.left),L=Math.round(a.top-_.top+a.height*.5);let Y="";if(Math.abs(L-y)<=8)Y=`M ${x} ${y} L ${F} ${y}`;else{const ae=Math.round(x+24);Y=`M ${x} ${L} C ${ae} ${L}, ${ae} ${y}, ${F} ${y}`}r("pathGridInvBase","pathGridInvFlow",Y)}}if(t&&i){const a=i.getBoundingClientRect(),p=t.getBoundingClientRect();if(a.bottom<p.top+30){const y=l(t,.8,0),x=l(i,.3,1);if(y&&x){const F=Math.round((y.y+x.y)/2),L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${x.x} ${F}, ${x.x} ${x.y}`;r("pathInvLoadBase","pathInvLoadFlow",L)}}else{const y=Math.round(p.top-_.top+p.height*.55),x=Math.round(p.right-_.left),F=Math.round(a.left-_.left),L=Math.round(a.top-_.top+a.height*.5);let Y="";if(Math.abs(L-y)<=8)Y=`M ${x} ${y} L ${F} ${y}`;else{const ae=Math.round(F-24);Y=`M ${x} ${y} C ${ae} ${y}, ${ae} ${L}, ${F} ${L}`}r("pathInvLoadBase","pathInvLoadFlow",Y)}}if(d&&t){const a=l(d,.5,1),p=l(t,.5,0);if(a&&p){const w=`M ${a.x} ${a.y} L ${p.x} ${p.y}`;r("pathSolarInvBase","pathSolarInvFlow",w)}}if(t&&v){const a=l(t,.5,1),p=l(v,.5,0);if(a&&p){const w=`M ${a.x} ${a.y} L ${p.x} ${p.y}`;r("pathInvBatBase","pathInvBatFlow",w)}}const M=this.shadowRoot.getElementById("nonEssentialNode"),V=M&&!M.classList.contains("hidden")&&M.offsetHeight>0,j=P&&!P.classList.contains("hidden")&&P.offsetHeight>0;if(o&&V){const a=l(o,.5,1),p=l(M,.5,0);if(a&&p){const w=`M ${a.x} ${a.y} L ${p.x} ${p.y}`;r("pathGridNonEssBase","pathGridNonEssFlow",w)}}else r("pathGridNonEssBase","pathGridNonEssFlow","");if(j){const a=V?M:o;if(a){const p=l(a,.5,1),w=l(P,.5,0);if(p&&w){const y=`M ${p.x} ${p.y} L ${w.x} ${w.y}`;r("pathNonEssCarBase","pathNonEssCarFlow",y)}}else r("pathNonEssCarBase","pathNonEssCarFlow","")}else r("pathNonEssCarBase","pathNonEssCarFlow","");const N=this.shadowRoot.getElementById("subloadsBusContainer");if(i&&N){const a=l(i,.5,1),p=l(N,.5,0);if(a&&p){const w=`M ${a.x} ${a.y} L ${p.x} ${p.y}`;r("pathLoadSubloadsBase","pathLoadSubloadsFlow",w)}}else r("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const z=this.shadowRoot.getElementById("auxNode");if(t&&z&&!z.classList.contains("hidden")&&z.offsetHeight>0){const a=l(z,.35,1),p=l(t,.9,0);if(a&&p){const w=Math.round((a.y+p.y)/2),y=`M ${a.x} ${a.y} C ${a.x} ${w}, ${p.x} ${w}, ${p.x} ${p.y}`;r("pathInvAuxBase","pathInvAuxFlow",y)}}else r("pathInvAuxBase","pathInvAuxFlow","");r("pathBatStemBase","pathBatStemFlow","");const D=this.shadowRoot.getElementById("windStationContainer"),R=((s=C.wind)==null?void 0:s.show)!==!1||((g=C.aux)==null?void 0:g.type)==="wind"?((c=C.wind)==null?void 0:c.turbine_count)||((h=(f=C.wind)==null?void 0:f.turbines)==null?void 0:h.length)||2:0;for(let a=1;a<=4;a++)if(a<=R&&D&&!D.classList.contains("hidden")){const p=this.shadowRoot.getElementById(`turbineCard_${a}`);if(p&&v){const w=l(p,.5,1),y=R===1?.5:.28+(a-1)/(R-1)*.44,x=l(v,y,0);if(w&&x){const F=`M ${w.x} ${w.y} L ${x.x} ${x.y}`;r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,F)}}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"")}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"");const O=(($=C.battery)==null?void 0:$.parallel_batteries)||((S=(E=C.battery)==null?void 0:E.modules)==null?void 0:S.length)||2;for(let a=1;a<=8;a++){const p=this.shadowRoot.getElementById(`batPackCard_${a}`),w=this.shadowRoot.getElementById(`batBranchBadge_${a}`);if(a<=O&&v&&p){const y=l(v,.5,1),x=l(p,.5,0);if(y&&x){const F=Math.round(y.y+(x.y-y.y)*.45);let L="";Math.abs(y.x-x.x)<=4?L=`M ${y.x} ${y.y} L ${x.x} ${x.y}`:L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${x.x} ${F}, ${x.x} ${x.y}`,r(`pathBat${a}Base`,`pathBat${a}Flow`,L),w&&(w.style.left=`${x.x}px`,w.style.top=`${F}px`,w.style.display="flex")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),w&&(w.style.display="none")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),w&&(w.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,s,g,c,f;try{const h=this._config||q,$=this.shadowRoot.getElementById("solarBusSvg"),E=((e=h.solar)==null?void 0:e.pv_count)||((g=(s=h.solar)==null?void 0:s.strings)==null?void 0:g.length)||3;if($&&E>0){const _=$.getBoundingClientRect(),C=this.shadowRoot.getElementById("pvPanel_1"),l=this.shadowRoot.getElementById(`pvPanel_${E}`),r=this.shadowRoot.getElementById("solarBusBase"),o=this.shadowRoot.getElementById("solarFlowCollector"),t=this.shadowRoot.getElementById("solarBusStemBase"),i=this.shadowRoot.getElementById("solarBusStemFlow"),d=this.shadowRoot.getElementById("solarBusFeeders");if(C&&l&&_.width>0){const v=C.getBoundingClientRect(),P=l.getBoundingClientRect(),M=Math.round(v.left-_.left+v.width/2),V=Math.round(P.left-_.left+P.width/2),j=13,N=Math.round((M+V)/2);if(r&&(r.setAttribute("x1",M),r.setAttribute("y1",j),r.setAttribute("x2",V),r.setAttribute("y2",j)),o&&(o.setAttribute("x1",M),o.setAttribute("y1",j),o.setAttribute("x2",V),o.setAttribute("y2",j)),t&&(t.setAttribute("x1",N),t.setAttribute("y1",j),t.setAttribute("x2",N),t.setAttribute("y2",26)),i&&(i.setAttribute("x1",N),i.setAttribute("y1",j),i.setAttribute("x2",N),i.setAttribute("y2",26)),d){let z="";for(let D=1;D<=E;D++){const K=this.shadowRoot.getElementById(`pvPanel_${D}`);if(K){const R=K.getBoundingClientRect(),O=Math.round(R.left-_.left+R.width/2);z+=`
                  <line x1="${O}" y1="0" x2="${O}" y2="${j}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${O}" y1="0" x2="${O}" y2="${j}" stroke="#fbbf24" stroke-width="2.5" />
                `}}d.innerHTML=z}}}const S=this.shadowRoot.getElementById("subloadsBusSvg"),T=((f=(c=h.load)==null?void 0:c.subloads)==null?void 0:f.length)||3;if(S&&T>0){const _=S.getBoundingClientRect(),C=this.shadowRoot.getElementById("subloadCard_0"),l=this.shadowRoot.getElementById(`subloadCard_${T-1}`),r=this.shadowRoot.getElementById("essentialNode"),o=this.shadowRoot.getElementById("subloadsBusBase"),t=this.shadowRoot.getElementById("subloadsFlowCollector"),i=this.shadowRoot.getElementById("subloadsBusStemBase"),d=this.shadowRoot.getElementById("subloadsBusStemFlow"),v=this.shadowRoot.getElementById("subloadsBusFeeders");if(C&&l&&_.width>0){const P=C.getBoundingClientRect(),M=l.getBoundingClientRect(),V=Math.round(P.left-_.left+P.width/2),j=Math.round(M.left-_.left+M.width/2),N=13;let z=Math.round((V+j)/2);if(r){const R=r.getBoundingClientRect();z=Math.round(R.left-_.left+R.width/2)}const D=Math.min(V,z),K=Math.max(j,z);if(o&&(o.setAttribute("x1",D),o.setAttribute("y1",N),o.setAttribute("x2",K),o.setAttribute("y2",N)),t&&(t.setAttribute("x1",D),t.setAttribute("y1",N),t.setAttribute("x2",K),t.setAttribute("y2",N)),i&&(i.setAttribute("x1",z),i.setAttribute("y1",0),i.setAttribute("x2",z),i.setAttribute("y2",N)),d&&(d.setAttribute("x1",z),d.setAttribute("y1",0),d.setAttribute("x2",z),d.setAttribute("y2",N)),v){let R="";for(let O=0;O<T;O++){const a=this.shadowRoot.getElementById(`subloadCard_${O}`);if(a){const p=a.getBoundingClientRect(),w=Math.round(p.left-_.left+p.width/2);R+=`
                  <line x1="${w}" y1="${N}" x2="${w}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${w}" y1="${N}" x2="${w}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}v.innerHTML=R}}}}catch{}}_applyFlowAnimation(e,s,g,c,f){if(!e)return;if(!f){e.setAttribute("class",`flow-pulse ${s} inactive`),e.style.opacity="0",e.style.animation="none";return}const h=g?"flow-reverse":"flow-forward",$=g?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${s} ${h}`),e.style.opacity="1",e.style.setProperty("--flow-speed",c),e.style.animation=`${$} ${c} linear infinite`}_updateFlowAnimations(e,s,g,c,f,h,$,E,S,T=[],_=0,C=0,l=0){var Le,Ve,ge,ue,xe,Ee,$e,Se,Ce,Ie,Te,Fe,Pe;const r=this._config||q,o=((Le=r.animations)==null?void 0:Le.enabled)!==!1,t=((Ve=r.animations)==null?void 0:Ve.speed)||1.2,i=(u,b=10)=>{const m=Math.abs(u);if(m<.05)return"2.5s";const k=Math.min(1,m/b);return`${Math.max(.4,(2.6-k*1.9)*(t/1.2)).toFixed(2)}s`},d=this.shadowRoot.getElementById("pathGridInvFlow"),v=Math.abs(e),P=(((ge=r.grid)==null?void 0:ge.min_power_threshold)!==void 0?r.grid.min_power_threshold:50)/1e3,M=((ue=r.grid)==null?void 0:ue.selling_enabled)===!0,V=o&&v>=P&&(g||s&&M);this._applyFlowAnimation(d,"flow-grid",s,i(e,10),V);const j=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(j,"flow-solar",!1,i(c,12),o&&c>=.05);const N=this.shadowRoot.getElementById("pathInvLoadFlow"),z=Math.abs(f);this._applyFlowAnimation(N,"flow-load",!1,i(f,10),o&&z>=.05);const D=this.shadowRoot.getElementById("pathInvBatFlow"),K=Math.abs(h),R=o&&K>=.02&&($||E),O=$?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(D,O,E,i(h,8),R);const a=this.shadowRoot.getElementById("pathGridNonEssFlow"),p=Math.abs(_);this._applyFlowAnimation(a,"flow-grid",!1,i(_,5),o&&p>=.05);const w=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),y=Math.abs(S);this._applyFlowAnimation(w,"flow-car",!1,i(S,7),o&&y>=.05);const x=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),F=Math.abs(C||f);this._applyFlowAnimation(x,"flow-load",!1,i(F,8),o&&F>=.05);const L=this.shadowRoot.getElementById("pathInvAuxFlow"),Y=Math.abs(l);this._applyFlowAnimation(L,"flow-aux",!0,i(l,5),o&&Y>=.05);const ae=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(ae,O,E,i(h,8),R);const de=this.shadowRoot.getElementById("solarFlowCollector"),re=this.shadowRoot.getElementById("solarBusStemFlow");if(de)if(!o||c<.05)de.style.opacity="0.2",de.style.animation="none",re&&(re.style.opacity="0.2",re.style.animation="none");else{const u=i(c,12);de.style.opacity="1",de.setAttribute("class","flow-line"),de.style.animation=`esDashflow ${u} linear infinite`,re&&(re.style.opacity="1",re.setAttribute("class","flow-line"),re.style.animation=`esDashflow ${u} linear infinite`)}const he=this.shadowRoot.getElementById("subloadsFlowCollector"),ee=this.shadowRoot.getElementById("subloadsBusStemFlow");if(he)if(!o||F<.05)he.style.opacity="0.2",he.style.animation="none",ee&&(ee.style.opacity="0.2",ee.style.animation="none");else{const u=i(F,8);he.style.opacity="1",he.setAttribute("class","flow-line"),he.style.animation=`esDashflow ${u} linear infinite`,ee&&(ee.style.opacity="1",ee.setAttribute("class","flow-line"),ee.style.animation=`esDashflow ${u} linear infinite`)}const U=this.shadowRoot.getElementById("batteryFlowCollector"),X=this.shadowRoot.getElementById("batteryBusStemFlow"),Be=this.shadowRoot.getElementById("batteryBusFeeders"),te=E?"#f87171":"#34d399",ie=E?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(U)if(U.style.stroke=te,U.style.filter=ie,X&&(X.style.stroke=te,X.style.filter=ie),!o||!R)U.style.opacity="0.2",U.style.animation="none",X&&(X.style.opacity="0.2",X.style.animation="none");else{const u=i(h,8),b=E?"esDashflowRev":"esDashflow";U.style.opacity="1",U.setAttribute("class",E?"flow-line-reverse":"flow-line"),U.style.animation=`${b} ${u} linear infinite`,X&&(X.style.opacity="1",X.setAttribute("class",E?"flow-line-reverse":"flow-line"),X.style.animation=`${b} ${u} linear infinite`)}Be&&Be.querySelectorAll("line").forEach(u=>{if(u.style.stroke=te,u.style.filter=ie,!o||!R)u.style.opacity="0.2",u.style.animation="none";else{const b=i(h,8),m=E?"esDashflowRev":"esDashflow";u.style.opacity="1",u.setAttribute("class",E?"flow-line-reverse":"flow-line"),u.style.animation=`${m} ${b} linear infinite`}});for(let u=1;u<=8;u++){const b=this.shadowRoot.getElementById(`pathBat${u}Flow`);if(!b)continue;const m=T[u-1],k=m?m.kwNum:0,H=o&&(k>=.02||R),ye=E;this._applyFlowAnimation(b,O,ye,i(k||h,8),H)}for(let u=0;u<6;u++){const b=this.shadowRoot.getElementById(`pathSubload${u}Flow`);if(!b)continue;const m=(Ee=(xe=r.load)==null?void 0:xe.subloads)==null?void 0:Ee[u],k=m?this._getEntityState(m.entity):null,H=k?this._formatPower(k,2).kw:u===0?2:u===1?3:4;this._applyFlowAnimation(b,"flow-load",!1,i(H,8),o&&H>=.05)}const me=(($e=r.wind)==null?void 0:$e.show)!==!1||((Se=r.aux)==null?void 0:Se.type)==="wind",qe=me?((Ce=r.wind)==null?void 0:Ce.turbine_count)||((Te=(Ie=r.wind)==null?void 0:Ie.turbines)==null?void 0:Te.length)||2:0,Ne=((Fe=r.wind)==null?void 0:Fe.turbines)||[];for(let u=1;u<=4;u++){const b=this.shadowRoot.getElementById(`pathTurbine${u}Flow`);if(b)if(u<=qe&&me){const m=Ne[u-1]||{},k=u===1?1.45:.85,H=this._getEntityState(m.power_entity||`sensor.wind_turbine_${u}_power`);let ce=this._formatPower(H,k).kw*1e3;H&&H.unit==="W"&&(ce=H.val);const be=m.animation_threshold??((Pe=r.wind)==null?void 0:Pe.animation_threshold)??50,_e=ce>=be;this._applyFlowAnimation(b,"flow-wind",!1,i(ce/1e3,3),o&&_e)}else this._applyFlowAnimation(b,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",st),window.customCards=window.customCards||[],window.customCards.some(it=>it.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),We.EnergyStationCard=st,Object.defineProperty(We,Symbol.toStringTag,{value:"Module"})});
