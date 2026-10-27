(function(je,Y){typeof exports=="object"&&typeof module<"u"?Y(exports):typeof define=="function"&&define.amd?define(["exports"],Y):(je=typeof globalThis<"u"?globalThis:je||self,Y(je.EnergyStationCard={}))})(this,function(je){"use strict";const Y={title:"Energy Station",card_style:"full",theme_mode:"dark",refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,essential_power_entity:"sensor.deye_12k_inverter_essential_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},se={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`};class fi extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||Y)),this.render()}connectedCallback(){this.render()}_valueChanged(e,o){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const g=e.split(".");let d=this._config;for(let h=0;h<g.length-1;h++)d[g[h]]||(d[g[h]]={}),d=d[g[h]];d[g[g.length-1]]=o;const _=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(_)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||Y)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_essential_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const o=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(o),this.render()}render(){var o,g,d,_,h,B,k,E,I,b,$,l,r,s,t,i,p,u,P,M,V,O,N,z,D,Z,R,q,a,c,v,y,m,F,L,U,pe,ge,he,_e,ae,J,Q,$e,re,le,ke,Ge,Ve,ze,De,fe,ve,Be,Se,Ce,Ie,Te,Fe,Pe,Me,Re,x,H;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((d=e.animations)==null?void 0:d.speed)||1.2}s</span>
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((_=e.solar)==null?void 0:_.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((h=e.solar)==null?void 0:h.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((B=e.solar)==null?void 0:B.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((k=e.solar)==null?void 0:k.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((E=e.solar)==null?void 0:E.target_daily_yield)||55}">
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
            ${Array.from({length:((b=e.solar)==null?void 0:b.pv_count)||3}).map((T,f)=>{var Ae,Ne;const w=f+1,S=((Ne=(Ae=e.solar)==null?void 0:Ae.strings)==null?void 0:Ne[f])||{},de=`sensor.deye_12k_inverter_pv${w}_voltage`,we=`sensor.deye_12k_inverter_pv${w}_current`,me=`sensor.deye_12k_inverter_pv${w}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${w} (Стрінг ${w})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${f}" value="${S.name||`PV ${w}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${w} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${f}" value="${S.voltage_entity!==void 0?S.voltage_entity:de}" placeholder="${de}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${w} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${f}" value="${S.current_entity!==void 0?S.current_entity:we}" placeholder="${we}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${w} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${f}" value="${S.power_entity!==void 0?S.power_entity:me}" placeholder="${me} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${(($=e.inverter)==null?void 0:$.model_name)||"DEYE SUN-12K"}">
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
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((p=e.inverter)==null?void 0:p.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((u=e.aux)==null?void 0:u.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((P=e.aux)==null?void 0:P.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((M=e.aux)==null?void 0:M.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((V=e.aux)==null?void 0:V.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((O=e.aux)==null?void 0:O.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((N=e.aux)==null?void 0:N.type)==="microinverter"&&(!((z=e.aux)!=null&&z.title)||((D=e.aux)==null?void 0:D.title)==="Вітрогенератор")?"Мікроінвертор":((Z=e.aux)==null?void 0:Z.title)||(((R=e.aux)==null?void 0:R.type)==="generator"?"Генератор":((q=e.aux)==null?void 0:q.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((c=e.wind)==null?void 0:c.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((v=e.wind)==null?void 0:v.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((y=e.wind)==null?void 0:y.animation_threshold)||((m=e.aux)==null?void 0:m.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((F=e.wind)==null?void 0:F.animation_threshold)||((L=e.aux)==null?void 0:L.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((U=e.wind)==null?void 0:U.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((pe=e.wind)==null?void 0:pe.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((ge=e.wind)==null?void 0:ge.turbine_count)||2}).map((T,f)=>{var S,de;const w=((de=(S=e.wind)==null?void 0:S.turbines)==null?void 0:de[f])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${f}" value="${w.name||`Вітряк ${f+1}`}" placeholder="Назва (напр. Вітряк ${f+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${f}" value="${w.power_entity||`sensor.wind_turbine_${f+1}_power`}" placeholder="sensor.wind_turbine_${f+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор швидкості вітру (м/с, опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${f}" value="${w.speed_entity||w.rpm_entity||""}" placeholder="sensor.wind_turbine_${f+1}_speed">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${f}" value="${w.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${f+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${f}" value="${w.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${f+1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((he=e.battery)==null?void 0:he.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((_e=e.battery)==null?void 0:_e.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((ae=e.battery)==null?void 0:ae.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((J=e.battery)==null?void 0:J.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Q=e.battery)==null?void 0:Q.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${(($e=e.battery)==null?void 0:$e.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((re=e.battery)==null?void 0:re.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((le=e.battery)==null?void 0:le.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ke=e.battery)==null?void 0:ke.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ge=e.battery)==null?void 0:Ge.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((Ve=e.battery)==null?void 0:Ve.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((ze=e.battery)==null?void 0:ze.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((De=e.battery)==null?void 0:De.parallel_batteries)||2}).map((T,f)=>{var Ye,Ue,Je,Ke;const w=f+1,S=((Ue=(Ye=e.battery)==null?void 0:Ye.modules)==null?void 0:Ue[f])||((Ke=(Je=e.battery)==null?void 0:Je.module_entities)==null?void 0:Ke[f])||{},de=`sensor.bms_rack${w}_soc`,we=`sensor.bms_rack${w}_current`,me=`sensor.bms_rack${w}_voltage`,Ae=`sensor.bms_rack${w}_power`,Ne=`sensor.bms_rack${w}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${w} (Модуль ${w})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${f}" value="${S.name||`Батарея ${w}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${w} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${f}" value="${S.soc_entity!==void 0?S.soc_entity:S.soc!==void 0?S.soc:de}" placeholder="${de}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${w} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${f}" value="${S.current_entity!==void 0?S.current_entity:we}" placeholder="${we}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${w} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${f}" value="${S.voltage_entity!==void 0?S.voltage_entity:S.volt!==void 0?S.volt:me}" placeholder="${me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${w} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${f}" value="${S.temperature_entity!==void 0?S.temperature_entity:S.temp!==void 0?S.temp:Ne}" placeholder="${Ne}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${w} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${f}" value="${S.capacity_kwh!==void 0?S.capacity_kwh:w===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${w} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${f}" value="${S.power_entity!==void 0?S.power_entity:Ae}" placeholder="${Ae} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(fe=e.grid)!=null&&fe.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((ve=e.grid)==null?void 0:ve.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((Be=e.grid)==null?void 0:Be.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((Se=e.grid)==null?void 0:Se.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Ce=e.grid)==null?void 0:Ce.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Ie=e.grid)==null?void 0:Ie.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Te=e.grid)==null?void 0:Te.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Fe=e.grid)==null?void 0:Fe.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Pe=e.grid)==null?void 0:Pe.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
        </div>
      </div>

      <!-- TAB CONTENT: LOADS -->
      <div style="display: ${this._currentTab==="loads"?"block":"none"};">
        <div class="field-group">
          <div class="field-group-title">🏠 Гарантоване навантаження (Дім)</div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор):</label>
            <input type="text" id="loadEssential" value="${((Me=e.load)==null?void 0:Me.essential_power_entity)||""}">
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

          ${(((x=e.load)==null?void 0:x.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((H=e.load)==null?void 0:H.subloads)||[]).map((T,f)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${f}" value="${T.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${f}" style="width: 140px;">
                  <option value="boiler" ${T.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${T.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${T.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${T.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${T.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${T.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${T.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${f}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${f}" value="${T.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var h,B,k,E,I,b,$,l,r;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",t=>{this._switchTab(t.target.dataset.tab)})}),(h=e.getElementById("btnPresetEsp"))==null||h.addEventListener("click",()=>this._applyPreset("deye_esphome")),(B=e.getElementById("btnPresetSolarman"))==null||B.addEventListener("click",()=>this._applyPreset("deye_solarman"));const o=(s,t)=>{const i=e.getElementById(s);i&&i.addEventListener("input",p=>this._valueChanged(t,p.target.value))},g=(s,t)=>{const i=e.getElementById(s);i&&i.addEventListener("change",p=>this._valueChanged(t,p.target.checked))},d=(s,t,i,p="")=>{const u=e.getElementById(s);u&&u.addEventListener("input",P=>{const M=parseFloat(P.target.value);if(i){const V=e.getElementById(i);V&&(V.innerText=`${M}${p}`)}this._valueChanged(t,M)})};o("title","title"),g("animEnabled","animations.enabled"),d("animSpeed","animations.speed","animSpeedVal","s"),(k=e.getElementById("solarPvCount"))==null||k.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=t,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<t;){const i=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${i}`,name:`PV ${i}`,voltage_entity:`sensor.deye_12k_inverter_pv${i}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${i}_current`,power_entity:`sensor.deye_12k_inverter_pv${i}_power`})}this._valueChanged("solar.pv_count",t),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].name=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].voltage_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].current_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[i]||(this._config.solar.strings[i]={}),this._config.solar.strings[i].power_entity=t.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),o("solarTotalPower","solar.total_power_entity"),o("solarDailyYield","solar.daily_yield_entity"),d("solarTargetDaily","solar.target_daily_yield"),o("invModel","inverter.model_name"),o("invPower","inverter.power_entity"),o("invTempAc","inverter.ac_temperature_entity"),o("invTempDc","inverter.dc_temperature_entity"),o("invVolt","inverter.voltage_entity"),o("invCurrent","inverter.current_entity"),o("invFreq","inverter.frequency_entity"),(E=e.getElementById("auxType"))==null||E.addEventListener("change",s=>{const t=s.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=t;const p={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[t]||"Мікроінвертор";this._config.aux.title=p;const u=e.getElementById("auxTitle");u&&(u.value=p),this._valueChanged("aux.type",t),this._valueChanged("aux.title",p)}),o("auxTitle","aux.title"),o("auxPower","aux.power_entity"),(I=e.getElementById("windTurbineCount"))==null||I.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=t,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<t;){const i=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${i}`,name:`Вітряк ${i}`,power_entity:`sensor.wind_turbine_${i}_power`,speed_entity:`sensor.wind_turbine_${i}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",t),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),d("windThreshold","wind.animation_threshold","windThresholdVal","W"),(b=e.getElementById("windThreshold"))==null||b.addEventListener("input",s=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(s.target.value))}),o("windDailyEnergy","wind.daily_energy_entity"),o("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].name=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].power_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].speed_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-daily-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].daily_energy_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-monthly-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[i]||(this._config.wind.turbines[i]={}),this._config.wind.turbines[i].monthly_energy_entity=t.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),o("batSoc","battery.soc_entity"),o("batPower","battery.power_entity"),o("batPowerSign","battery.power_sign"),o("batVolt","battery.voltage_entity"),o("batCurrent","battery.current_entity"),o("batCapacity","battery.capacity_entity"),o("batChargeDaily","battery.charge_daily_entity"),o("batDischargeDaily","battery.discharge_daily_entity"),($=e.getElementById("batParallelCount"))==null||$.addEventListener("input",s=>{const t=parseInt(s.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=t,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<t;){const i=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${i}`,name:`Батарея ${i}`,soc_entity:`sensor.bms_rack${i}_soc`,current_entity:`sensor.bms_rack${i}_current`,voltage_entity:`sensor.bms_rack${i}_voltage`,power_entity:`sensor.bms_rack${i}_power`,temperature_entity:`sensor.bms_rack${i}_temperature`})}this._valueChanged("battery.parallel_batteries",t),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].name=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].soc_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].current_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].voltage_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].temperature_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].power_entity=t.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(s=>{s.addEventListener("input",t=>{const i=parseInt(t.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[i]||(this._config.battery.modules[i]={}),this._config.battery.modules[i].capacity_kwh=parseFloat(t.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),g("gridSellingEnabled","grid.selling_enabled"),o("gridPower","grid.power_entity"),o("gridPowerSign","grid.power_sign"),d("gridMinThreshold","grid.min_power_threshold"),o("gridImportDaily","grid.import_daily_entity"),o("gridExportDaily","grid.export_daily_entity"),o("gridNonEssential","grid.non_essential_power_entity"),o("gridCarPower","grid.car_power_entity"),o("loadEssential","load.essential_power_entity"),o("loadDailyHouse","load.daily_house_entity");const _=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const s=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${s}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(l=e.getElementById("btnAddSubload"))==null||l.addEventListener("click",_),(r=e.getElementById("btnAddSubloadBottom"))==null||r.addEventListener("click",_),e.querySelectorAll(".btn-del-subload").forEach(s=>{s.addEventListener("click",t=>{var u;const i=t.currentTarget||t.target.closest(".btn-del-subload"),p=parseInt(i.dataset.idx);(u=this._config.load)!=null&&u.subloads&&(this._config.load.subloads.splice(p,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(s=>{s.addEventListener("input",t=>{var p,u;const i=parseInt(t.target.dataset.idx);(u=(p=this._config.load)==null?void 0:p.subloads)!=null&&u[i]&&(this._config.load.subloads[i].name=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(s=>{s.addEventListener("change",t=>{var p,u;const i=parseInt(t.target.dataset.idx);(u=(p=this._config.load)==null?void 0:p.subloads)!=null&&u[i]&&(this._config.load.subloads[i].icon=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(s=>{s.addEventListener("input",t=>{var p,u;const i=parseInt(t.target.dataset.idx);(u=(p=this._config.load)==null?void 0:p.subloads)!=null&&u[i]&&(this._config.load.subloads[i].entity=t.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",fi);class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(Y))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const o=JSON.parse(JSON.stringify(e)),g=JSON.parse(JSON.stringify(Y));this._config=this._deepMerge(g,o),this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,o){const g=Array.isArray(e)?[...e]:Object.assign({},e);if(!o||typeof o!="object")return g;for(const d of Object.keys(o)){const _=o[d],h=e?e[d]:void 0;_&&typeof _=="object"&&!Array.isArray(_)?g[d]=this._deepMerge(h||{},_):g[d]=_}return g}_getEntityState(e){var _;if(!this._hass||!e||!this._hass.states[e])return null;const o=this._hass.states[e],g=parseFloat(o.state),d=((_=o.attributes)==null?void 0:_.unit_of_measurement)||"";return{raw:o.state,val:isNaN(g)?0:g,unit:d,attributes:o.attributes}}_formatPower(e,o=0){if(!e)return{num:o.toFixed(3),kw:o,str:`${o.toFixed(3)} кВт`};let g=e.val;return e.unit==="W"&&(g=g/1e3),{num:g.toFixed(3),kw:g,str:`${g.toFixed(3)} кВт`}}_fireMoreInfo(e){if(!e)return;const o=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}_renderCardSkeleton(){var o,g,d,_,h,B,k,E,I,b,$,l,r,s,t,i,p;const e=this._config||Y;this._initialized=!0,this.shadowRoot.innerHTML=`
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${se.sun}</div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${se.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8;">${se.grid_tower}</div>
              <div class="es-node-title">Мережа</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 кВт</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">← ЕКСПОРТ</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(d=e.grid)!=null&&d.show_non_essential&&((_=e.grid)!=null&&_.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${se.house_outline}</div>
              <div class="es-node-title">Негарантоване</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 кВт</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(h=e.grid)!=null&&h.show_car&&((B=e.grid)!=null&&B.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${se.car}</div>
              <div class="es-node-title" id="carTitle">${((k=e.grid)==null?void 0:k.car_title)||"Авто"}</div>
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
                  <div class="es-inverter-icon-box">${se.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">Гібридний інвертор</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 кВт</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">ПРАЦЮЄ</div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((E=e.aux)==null?void 0:E.type)==="none"||((I=e.aux)==null?void 0:I.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${se[(b=e.aux)==null?void 0:b.type]||se.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${(($=e.aux)==null?void 0:$.type)==="microinverter"&&(!((l=e.aux)!=null&&l.title)||((r=e.aux)==null?void 0:r.title)==="Вітрогенератор")?"Мікроінвертор":((s=e.aux)==null?void 0:s.title)||"Мікроінвертор"}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 кВт</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((t=e.aux)==null?void 0:t.subtitle)||"Джерело → GEN"}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((i=e.wind)==null?void 0:i.show)===!1&&((p=e.aux)==null?void 0:p.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              Будинок <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${se.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer")}}_renderDynamicWindTurbines(){var k,E,I,b,$,l,r,s;const e=this._config||Y,o=((k=this._nodes)==null?void 0:k.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!o)return;if(o.innerHTML="",!(((E=e.wind)==null?void 0:E.show)!==!1||((I=e.aux)==null?void 0:I.type)==="wind")){o.classList.add("hidden");return}o.classList.remove("hidden");const d=((b=e.wind)==null?void 0:b.turbine_count)||((l=($=e.wind)==null?void 0:$.turbines)==null?void 0:l.length)||2,_=((r=e.wind)==null?void 0:r.turbines)||[],h=document.createElement("div");h.className="es-wind-summary-bar es-mono",h.id="windStationSummaryBar",h.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,o.appendChild(h);const B=document.createElement("div");B.className="es-wind-pods-row",o.appendChild(B);for(let t=0;t<d;t++){const i=_[t]||{name:`Вітряк ${t+1}`,power_entity:`sensor.wind_turbine_${t+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((s=e.wind)==null?void 0:s.animation_threshold)||50},p=!!(i.daily_energy_entity||i.monthly_energy_entity),u=document.createElement("div");u.className="es-turbine-card glow-wind clickable-node",u.id=`turbineCard_${t+1}`,u.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${t+1}">
              ${se.wind_turbine}
            </div>
            <span>${i.name||`Вітряк ${t+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${t+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${t+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${t+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${t+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${t+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${p?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${t+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${t+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,u.addEventListener("click",()=>{this._fireMoreInfo(i.power_entity)}),B.appendChild(u)}}_renderDynamicPvPanels(){var d,_,h,B,k;const e=this._config||Y,o=this._nodes.pvPanelsContainer;if(!o)return;o.innerHTML="";const g=((d=e.solar)==null?void 0:d.pv_count)||((h=(_=e.solar)==null?void 0:_.strings)==null?void 0:h.length)||3;for(let E=1;E<=g;E++){const I=E<10?`0${E}`:`${E}`,b=((k=(B=e.solar)==null?void 0:B.strings)==null?void 0:k[E-1])||{},$=b.name||`PV ${I}`,l=document.createElement("div");l.className="es-pv-panel glow-solar clickable-node",l.dataset.pvIndex=E,l.id=`pvPanel_${E}`,l.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${se.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${$}</span>
        <span class="es-pv-val es-mono" id="pvVal_${E}">1,200 кВт</span>
      `,l.addEventListener("click",()=>{var s;const r=b.power_entity||b.voltage_entity||b.current_entity||((s=e.solar)==null?void 0:s.total_power_entity);this._fireMoreInfo(r)}),o.appendChild(l)}}_renderDynamicSubloads(){var d;const e=this._config||Y,o=this._nodes.subloadsContainer;if(!o)return;o.innerHTML="",(((d=e.load)==null?void 0:d.subloads)||[]).forEach((_,h)=>{const B=document.createElement("div");B.className="es-subload-card clickable-node",B.id=`subloadCard_${h}`,B.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${se[_.icon]||se.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${_.name}</span>
        <span class="es-mono" id="subloadVal_${h}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,B.addEventListener("click",()=>{this._fireMoreInfo(_.entity)}),o.appendChild(B)})}_renderDynamicBatteryRack(){var h,B,k,E,I,b,$;const e=this._config||Y,o=this._nodes.batteryRackContainer;if(!o)return;o.innerHTML="";const g=((h=e.battery)==null?void 0:h.parallel_batteries)||((k=(B=e.battery)==null?void 0:B.modules)==null?void 0:k.length)||2,d=[82,76,91,68,85,90,72,80],_=[52.4,52.4,52.4,52.4,52.4,52.4];for(let l=1;l<=g;l++){const r=((I=(E=e.battery)==null?void 0:E.modules)==null?void 0:I[l-1])||(($=(b=e.battery)==null?void 0:b.module_entities)==null?void 0:$[l-1])||{},s=r.name||`Батарея ${l}`,t=d[(l-1)%d.length],i=_[(l-1)%_.length],p=document.createElement("div");p.className="es-battery-pack-card glow-battery clickable-node",p.id=`batPackCard_${l}`,p.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${se.battery_vertical}</div>
        <span class="es-bat-name">${s}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${l}">${t}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${l}">${i.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${l}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 кВт</div>
      `,p.addEventListener("click",()=>{var P;const u=r.soc_entity||r.soc||r.voltage_entity||r.volt||r.current_entity||((P=e.battery)==null?void 0:P.soc_entity);this._fireMoreInfo(u)}),o.appendChild(p)}}_bindInteractions(){var g,d,_,h,B,k,E,I,b,$,l,r,s;const e=this.shadowRoot,o=this._config||Y;(g=e.getElementById("solarHeaderNode"))==null||g.addEventListener("click",()=>{var t,i;this._fireMoreInfo(((t=o.solar)==null?void 0:t.daily_yield_entity)||((i=o.solar)==null?void 0:i.total_power_entity))}),(d=e.getElementById("totalPvPowerBadge"))==null||d.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.solar)==null?void 0:t.total_power_entity)}),(_=e.getElementById("gridNode"))==null||_.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.power_entity)}),(h=e.getElementById("nonEssentialNode"))==null||h.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.non_essential_power_entity)}),(B=e.getElementById("carNode"))==null||B.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.grid)==null?void 0:t.car_power_entity)}),(k=e.getElementById("inverterNode"))==null||k.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.inverter)==null?void 0:t.power_entity)}),(E=e.getElementById("auxNode"))==null||E.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.aux)==null?void 0:t.power_entity)}),(I=e.getElementById("essentialNode"))==null||I.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.load)==null?void 0:t.essential_power_entity)}),(b=e.getElementById("masterBatteryHub"))==null||b.addEventListener("click",()=>{var t;this._fireMoreInfo((t=o.battery)==null?void 0:t.soc_entity)});for(let t=1;t<=8;t++){const i=e.getElementById(`batBranchBadge_${t}`),p=((l=($=o.battery)==null?void 0:$.modules)==null?void 0:l[t-1])||((s=(r=o.battery)==null?void 0:r.module_entities)==null?void 0:s[t-1])||{};i==null||i.addEventListener("click",()=>{var P;const u=p.power_entity||p.current_entity||p.soc_entity||((P=o.battery)==null?void 0:P.soc_entity);this._fireMoreInfo(u)})}}_updateValues(){var Fe,Pe,Me,Re,x,H,T,f,w,S,de,we,me,Ae,Ne,Ye,Ue,Je,Ke,ct,pt,ht,yt,gt,ut,bt,_t,ft,vt,wt,mt,xt,kt,Bt,Et,$t,St,Ct,It,Tt,Ft,Pt,Mt,Rt,At,Nt,Lt,Vt,zt,Dt,Ht,Wt,jt,Ot,qt,Gt,Yt,Ut,Jt,Kt,Xt,Zt,Qt,ei,ti,ii,si,oi,ni,ai,ri,li,di,ci,pi,hi,yi,gi,ui,bi,_i;if(!this._nodes.dailySolarYield)return;const e=this._config||Y,o=((Fe=e.solar)==null?void 0:Fe.pv_count)||((Me=(Pe=e.solar)==null?void 0:Pe.strings)==null?void 0:Me.length)||3;let g=0,d=!1;for(let n=1;n<=o;n++){const C=(x=(Re=e.solar)==null?void 0:Re.strings)==null?void 0:x[n-1],G=(C==null?void 0:C.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),A=(C==null?void 0:C.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),W=(C==null?void 0:C.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:"");if(this._getEntityState(W)||this._getEntityState(G)||this._getEntityState(A)){d=!0;break}}for(let n=1;n<=o;n++){const C=this.shadowRoot.getElementById(`pvVal_${n}`),G=this.shadowRoot.getElementById(`pvVolt_${n}`),A=this.shadowRoot.getElementById(`pvCurr_${n}`),W=(T=(H=e.solar)==null?void 0:H.strings)==null?void 0:T[n-1],He=(W==null?void 0:W.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),K=(W==null?void 0:W.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),Ee=(W==null?void 0:W.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:""),ye=this._getEntityState(He),ue=this._getEntityState(K),j=this._getEntityState(Ee);let ee=0,X=0,oe=0;j?oe=this._formatPower(j).kw:ye&&ue?oe=ye.val*ue.val/1e3:ye?oe=0:oe=d?0:4,ye?ee=ye.val:ee=d?0:380+n*4.5,ue?X=ue.val:j&&ee>0?X=oe*1e3/ee:X=d?0:3.12+n*.28,g+=oe,C&&(C.innerText=`${oe.toFixed(3)} кВт`),G&&(G.innerText=`${ee.toFixed(1)} V`),A&&(A.innerText=`${X.toFixed(2)} A`)}const _=this._getEntityState((f=e.solar)==null?void 0:f.total_power_entity);let h=0;_?h=this._formatPower(_).kw:h=g,this._nodes.totalPvPowerBadge.innerText=`${h.toFixed(3)} кВт`;const B=this._getEntityState((w=e.solar)==null?void 0:w.daily_yield_entity),k=B?B.val:d?0:48.6;this._nodes.dailySolarYield.innerText=k.toFixed(1);const E=((S=e.solar)==null?void 0:S.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=E.toFixed(1);const I=Math.min(100,Math.round(k/E*100));this._nodes.solarProgressBar.style.width=`${I}%`;const b=this._getEntityState((de=e.inverter)==null?void 0:de.power_entity);this._nodes.inverterPowerVal&&((we=e.inverter)!=null&&we.power_entity&&b?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(b,0).str):this._nodes.inverterPowerVal.style.display="none");const $=this._getEntityState((me=e.inverter)==null?void 0:me.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=$?$.val.toFixed(2):"41,20";const l=this._getEntityState((Ae=e.inverter)==null?void 0:Ae.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=l?l.val.toFixed(2):"38,40";const r=this._getEntityState((Ne=e.inverter)==null?void 0:Ne.voltage_entity);this._nodes.inverterVolt.innerText=r?r.val.toFixed(2):"231,45";const s=this._getEntityState((Ye=e.inverter)==null?void 0:Ye.current_entity);this._nodes.inverterCurrent.innerText=s?s.val.toFixed(2):"8,60";const t=this._getEntityState((Ue=e.inverter)==null?void 0:Ue.frequency_entity);this._nodes.inverterFreq.innerText=t?t.val.toFixed(2):"50,01";const i=((Je=e.wind)==null?void 0:Je.show)!==!1||((Ke=e.aux)==null?void 0:Ke.type)==="wind",p=this.shadowRoot.getElementById("windStationContainer"),u=this._nodes.auxNode;if(p)if(!i)p.classList.add("hidden");else{p.classList.remove("hidden");const n=((ct=e.wind)==null?void 0:ct.turbine_count)||((ht=(pt=e.wind)==null?void 0:pt.turbines)==null?void 0:ht.length)||2,C=((yt=e.wind)==null?void 0:yt.turbines)||[];let G=0,A=0,W=!1,He=!1;for(let j=0;j<n;j++){const ee=C[j]||{power_entity:`sensor.wind_turbine_${j+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((gt=e.wind)==null?void 0:gt.animation_threshold)||50},X=this.shadowRoot.getElementById(`turbinePower_${j+1}`),oe=this.shadowRoot.getElementById(`turbineStatus_${j+1}`),Xe=this.shadowRoot.getElementById(`turbineIcon_${j+1}`),Le=this.shadowRoot.getElementById(`turbineCard_${j+1}`),it=this.shadowRoot.getElementById(`turbineRpmVal_${j+1}`),st=this.shadowRoot.getElementById(`turbineDailyVal_${j+1}`),Ze=this.shadowRoot.getElementById(`turbineMonthlyVal_${j+1}`),Oe=this.shadowRoot.getElementById(`turbineEnergyFooter_${j+1}`),ot=this._hass?0:j===0?1.56:.22,We=this._getEntityState(ee.power_entity),Qe=this._formatPower(We,ot);X&&(X.innerText=Qe.str);let xe=Qe.kw*1e3;We&&We.unit==="W"&&(xe=We.val);const qe=ee.animation_threshold??((ut=e.wind)==null?void 0:ut.animation_threshold)??50,be=Xe==null?void 0:Xe.querySelector(".turbine-rotor");if(xe>=qe){be&&be.classList.add("spinning"),Le&&(Le.classList.add("glow-wind"),Le.style.borderColor="rgba(6, 182, 212, 0.55)");const tt=((bt=e.wind)==null?void 0:bt.max_power)||3e3,lt=(3.2-Math.min(1,Math.max(0,(xe-qe)/(tt-qe)))*2.75).toFixed(2);be&&be.style.setProperty("--turbine-speed",`${lt}s`),oe&&(oe.innerText="Генерація",oe.style.color="#67e8f9")}else be&&be.classList.remove("spinning"),Le&&(Le.classList.remove("glow-wind"),Le.style.borderColor="rgba(255, 255, 255, 0.08)"),oe&&(oe.innerText="Штиль",oe.style.color="#94a3b8");const et=ee.rpm_entity||ee.speed_entity,ce=et&&((_t=this._hass)!=null&&_t.states[et])?this._getEntityState(et):null,te=this.shadowRoot.getElementById(`turbineRpmBox_${j+1}`);te&&(ce&&ce.raw!=="unavailable"&&ce.raw!=="unknown"&&typeof ce.val=="number"&&!isNaN(ce.val)&&ce.val>0?(te.style.display="inline",it&&(it.innerText=Math.round(ce.val))):te.style.display="none");const ne=this._getEntityState(ee.daily_energy_entity),ie=this._getEntityState(ee.monthly_energy_entity);st&&(st.innerText=ne&&typeof ne.val=="number"&&!isNaN(ne.val)?ne.val.toFixed(2):"0.00"),Ze&&(Ze.innerText=ie&&typeof ie.val=="number"&&!isNaN(ie.val)?ie.val.toFixed(1):"0.0");const nt=!!(ee.daily_energy_entity||ee.monthly_energy_entity);Oe&&(Oe.style.display=nt?"flex":"none"),ne&&typeof ne.val=="number"&&!isNaN(ne.val)&&(G+=ne.val,W=!0),ie&&typeof ie.val=="number"&&!isNaN(ie.val)&&(A+=ie.val,He=!0)}const K=this.shadowRoot.getElementById("windTotalDailyVal"),Ee=this.shadowRoot.getElementById("windTotalMonthlyVal"),ye=this._getEntityState((ft=e.wind)==null?void 0:ft.daily_energy_entity),ue=this._getEntityState((vt=e.wind)==null?void 0:vt.monthly_energy_entity);K&&(ye&&typeof ye.val=="number"&&!isNaN(ye.val)?K.innerText=ye.val.toFixed(2):W?K.innerText=G.toFixed(2):K.innerText="0.00"),Ee&&(ue&&typeof ue.val=="number"&&!isNaN(ue.val)?Ee.innerText=ue.val.toFixed(1):He?Ee.innerText=A.toFixed(1):Ee.innerText="0.0")}let P=0;if(u)if(((wt=e.aux)==null?void 0:wt.type)==="none"||((mt=e.aux)==null?void 0:mt.type)==="wind")u.classList.add("hidden");else{u.classList.remove("hidden");const n=this._getEntityState((xt=e.aux)==null?void 0:xt.power_entity),C=this._formatPower(n,2);P=C.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=C.str);const G={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let A=(kt=e.aux)==null?void 0:kt.title;((Bt=e.aux)==null?void 0:Bt.type)==="microinverter"&&(!A||A==="Вітрогенератор")?A="Мікроінвертор":(Et=e.aux)!=null&&Et.type&&G[e.aux.type]&&(!A||A==="Вітрогенератор")?A=G[e.aux.type]:A||(A="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=A),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=se[($t=e.aux)==null?void 0:$t.type]||se.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((St=e.aux)==null?void 0:St.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),u.style.borderColor="rgba(192, 132, 252, 0.45)",u.style.background="rgba(88, 28, 135, 0.35)",u.classList.remove("glow-wind"),u.classList.add("glow-aux")}const M=this._getEntityState((Ct=e.grid)==null?void 0:Ct.power_entity),V=M?M.unit==="W"?M.val/1e3:M.val:0,O=((It=e.grid)==null?void 0:It.power_sign)||((Tt=e.grid)!=null&&Tt.invert_power?"inverted":"deye"),N=((Ft=e.grid)==null?void 0:Ft.selling_enabled)===!0,z=(((Pt=e.grid)==null?void 0:Pt.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3;let D=!1,Z=!1;const R=Math.abs(V);R>=z&&(O==="deye"?V<0?D=!0:Z=!0:V>0?D=!0:Z=!0),D&&!N&&(D=!1),this._nodes.gridPowerVal&&(this._nodes.gridPowerVal.innerText=`${R.toFixed(3)} кВт`,D?this._nodes.gridPowerVal.style.color="#34d399":Z?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"),this._nodes.gridDirectionLabel&&(D?(this._nodes.gridDirectionLabel.innerText="← Експорт",this._nodes.gridDirectionLabel.style.color="#34d399"):Z?(this._nodes.gridDirectionLabel.innerText="→ Імпорт",this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText="Мережа",this._nodes.gridDirectionLabel.style.color="#64748b"));const q=this._getEntityState((Mt=e.grid)==null?void 0:Mt.import_daily_entity);this._nodes.gridImportDaily.innerText=q?`${q.val.toFixed(2)} kWh`:"0.00 kWh";const a=this._getEntityState((Rt=e.grid)==null?void 0:Rt.export_daily_entity);this._nodes.gridExportDaily.innerText=a?`${a.val.toFixed(2)} kWh`:"0.00 kWh";const c=this.shadowRoot.getElementById("nonEssentialNode"),v=!!((At=e.grid)!=null&&At.show_non_essential&&((Nt=e.grid)!=null&&Nt.non_essential_power_entity))||((Lt=e.grid)==null?void 0:Lt.show_non_essential)!==!1&&!!((Vt=e.grid)!=null&&Vt.non_essential_power_entity);let y=0;if(c)if(v){c.classList.remove("hidden");const n=this._getEntityState(e.grid.non_essential_power_entity),C=this._formatPower(n,0);y=C.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=C.str)}else c.classList.add("hidden");const m=this.shadowRoot.getElementById("carNode"),F=!!((zt=e.grid)!=null&&zt.show_car&&((Dt=e.grid)!=null&&Dt.car_power_entity))||((Ht=e.grid)==null?void 0:Ht.show_car)!==!1&&!!((Wt=e.grid)!=null&&Wt.car_power_entity);let L=0;if(m)if(F){m.classList.remove("hidden");const n=this._getEntityState(e.grid.car_power_entity),C=this._formatPower(n,0);L=C.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=C.str)}else m.classList.add("hidden");const U=this._getEntityState((jt=e.load)==null?void 0:jt.essential_power_entity);this._nodes.essentialPowerVal.innerText=this._formatPower(U,0).str;const pe=this._getEntityState((Ot=e.load)==null?void 0:Ot.daily_house_entity);this._nodes.dailyHouseKwh.innerText=pe?`${pe.val.toFixed(2)} kWh`:"12,40 kWh";let ge=0;(((qt=e.load)==null?void 0:qt.subloads)||[]).forEach((n,C)=>{const G=this.shadowRoot.getElementById(`subloadVal_${C}`),A=this._getEntityState(n.entity),W=this._formatPower(A,2);ge+=W.kw,G&&(G.innerText=W.str)});const he=this._getEntityState((Gt=e.battery)==null?void 0:Gt.soc_entity),_e=he?he.val:80;this._nodes.masterBatterySoc.innerText=`${_e.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const ae=this._getEntityState((Yt=e.battery)==null?void 0:Yt.power_entity),J=this._getEntityState((Ut=e.battery)==null?void 0:Ut.current_entity),Q=ae?ae.unit==="W"?ae.val/1e3:ae.val:0,$e=((Jt=e.battery)==null?void 0:Jt.power_sign)||((Kt=e.battery)!=null&&Kt.invert_power?"standard":"deye");let re=!1,le=!1;const ke=Math.abs(Q);if(ke>=.02?$e==="deye"?Q<0?re=!0:le=!0:Q>0?re=!0:le=!0:J&&Math.abs(J.val)>=.3&&($e==="deye"?J.val<0?re=!0:le=!0:J.val>0?re=!0:le=!0),this._isCharging=re,this._isDischarging=le,this._nodes.masterBatteryFlowHint){let n="Очікування",C="#94a3b8";re?(n="Заряд ↓",C="#34d399"):le&&(n="Розряд ↑",C="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ke.toFixed(3)} кВт</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${C}; font-weight: 700; font-size: 14px;">${n}</span>`}const Ve=this._getEntityState((Xt=e.battery)==null?void 0:Xt.voltage_entity),ze=Ve?Ve.val.toFixed(2):"53.24",De=J?J.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${ze.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${De.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Zt=e.battery)==null?void 0:Zt.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const n=((Qt=e.battery)==null?void 0:Qt.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${n}%`}const fe=((ei=e.battery)==null?void 0:ei.parallel_batteries)||((ii=(ti=e.battery)==null?void 0:ti.modules)==null?void 0:ii.length)||2;let ve=0;for(let n=0;n<fe;n++){const C=((oi=(si=e.battery)==null?void 0:si.modules)==null?void 0:oi[n])||((ai=(ni=e.battery)==null?void 0:ni.module_entities)==null?void 0:ai[n])||{},G=C.capacity_kwh!==void 0?parseFloat(C.capacity_kwh):n===0?7.88:n===1?5.12:(((ri=e.battery)==null?void 0:ri.capacity_kwh)||13)/fe;ve+=isNaN(G)?0:G}ve<=0&&(ve=parseFloat((li=e.battery)==null?void 0:li.capacity_kwh)||13);const Be=this._getEntityState(((di=e.battery)==null?void 0:di.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Se=Be&&!isNaN(Be.val)?Be.val:null;if(this._nodes.batCapacityVal){const n=Se!==null?Se:ve;this._nodes.batCapacityVal.innerText=`${n.toFixed(2).replace(".",",")} kWh`}const Ce=this._getEntityState((ci=e.battery)==null?void 0:ci.charge_daily_entity);this._nodes.batChargeDaily.innerText=Ce?`${Ce.val.toFixed(2)} kWh`:"4,30 kWh";const Ie=this._getEntityState((pi=e.battery)==null?void 0:pi.discharge_daily_entity);this._nodes.batDischargeDaily.innerText=Ie?`${Ie.val.toFixed(2)} kWh`:"6,10 kWh";const Te=[];for(let n=1;n<=fe;n++){const C=this.shadowRoot.getElementById(`batPackSoc_${n}`),G=this.shadowRoot.getElementById(`batPackVolt_${n}`),A=this.shadowRoot.getElementById(`batPackCurr_${n}`),W=this.shadowRoot.getElementById(`batPackPower_${n}`),He=this.shadowRoot.getElementById(`batPackTempVal_${n}`),K=this.shadowRoot.getElementById(`batPackStateTag_${n}`),Ee=this.shadowRoot.getElementById(`batPackKwh_${n}`),ye=this.shadowRoot.getElementById(`batPackBar1_${n}`),ue=this.shadowRoot.getElementById(`batPackBar2_${n}`),j=this.shadowRoot.getElementById(`batPackBar3_${n}`),ee=this.shadowRoot.getElementById(`batPackBar4_${n}`),X=((yi=(hi=e.battery)==null?void 0:hi.modules)==null?void 0:yi[n-1])||((ui=(gi=e.battery)==null?void 0:gi.module_entities)==null?void 0:ui[n-1])||{},oe=X.soc_entity||X.soc||`sensor.bms_rack${n}_soc`,Xe=X.current_entity||`sensor.bms_rack${n}_current`,Le=X.voltage_entity||X.volt||`sensor.bms_rack${n}_voltage`,it=X.power_entity||`sensor.bms_rack${n}_power`,st=X.temperature_entity||X.temp||`sensor.bms_rack${n}_temperature`,Ze=this._getEntityState(oe),Oe=this._getEntityState(Xe),ot=this._getEntityState(Le),We=this._getEntityState(it),Qe=this._getEntityState(st),xe=Ze?Ze.val:n===1?82:n===2?85:75,qe=ot?ot.val:n===1?54.1:n===2?54:52.4,be=Oe?Oe.val:n===1?18.4:n===2?25.2:8.2,et=Qe?Qe.val:n===1?38.2:n===2?21:21.5;let ce=0;We?ce=Math.abs(this._formatPower(We).kw):ce=qe*Math.abs(be)/1e3,C&&(C.innerText=`${xe.toFixed(0)}%`),G&&(G.innerText=`${qe.toFixed(1)} V`),A&&(A.innerText=`${Math.abs(be).toFixed(1)} A`),W&&(W.innerText=`${ce.toFixed(2)} кВт`),He&&(He.innerText=`${et.toFixed(1)}`);let te=!1;le?te=!1:re?te=!0:Oe?te=(((bi=e.battery)==null?void 0:bi.power_sign)||"deye")==="deye"?be<0:be>0:te=be<0;const ne=this.shadowRoot.getElementById(`batBranchBadge_${n}`);ne&&(ce<.02?(ne.className="es-bat-branch-badge es-mono idle",ne.innerHTML="<span>0.00 кВт</span>"):te?(ne.className="es-bat-branch-badge es-mono charge",ne.innerHTML=`<span>${ce.toFixed(2)} кВт</span> <span style="font-weight: 800;">↓</span>`):(ne.className="es-bat-branch-badge es-mono discharge",ne.innerHTML=`<span>${ce.toFixed(2)} кВт</span> <span style="font-weight: 800;">↑</span>`));const ie=this.shadowRoot.getElementById(`batPackCard_${n}`),nt=ie==null?void 0:ie.querySelector(".es-battery-gauge"),tt=ie==null?void 0:ie.querySelector(".es-battery-gauge-nipple");ie&&(ie.style.borderColor=te?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),nt&&(nt.style.borderColor=te?"#10b981":"#ef4444"),tt&&(tt.style.background=te?"#10b981":"#ef4444"),K&&(te?(K.className="es-bat-state-tag charge",K.innerText="Заряд",K.style.color="#34d399",K.style.background="rgba(16, 185, 129, 0.18)",K.style.borderColor="rgba(16, 185, 129, 0.4)"):(K.className="es-bat-state-tag discharge",K.innerText="Розряд",K.style.color="#f87171",K.style.background="rgba(239, 68, 68, 0.18)",K.style.borderColor="rgba(239, 68, 68, 0.4)")),W&&(W.style.color=te?"#34d399":"#f87171"),A&&(A.style.color=te?"#38bdf8":"#f87171");const lt=((X.capacity_kwh!==void 0?parseFloat(X.capacity_kwh):(((_i=e.battery)==null?void 0:_i.capacity_kwh)||10)/fe)*(xe/100)).toFixed(2);Ee&&(Ee.innerText=`${lt} kWh`);const at=te?"active-green":"active-red";ye&&ue&&j&&ee&&(ye.className=`es-bat-bar ${xe>=10?at:""}`,ue.className=`es-bat-bar ${xe>=35?at:""}`,j.className=`es-bat-bar ${xe>=65?at:""}`,ee.className=`es-bat-bar ${xe>=85?at:""}`),Te.push({kwNum:ce,isChg:te})}this._updateFlowPaths(),this._updateFlowAnimations(V,D,Z,h,U?U.unit==="W"?U.val/1e3:U.val:0,ke,re,le,L,Te,y,ge,P)}_setupResizeObserver(){var o;if(this._resizeObserver)return;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,o,g,d,_,h,B,k,E;try{const I=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!I)return;const b=I.getBoundingClientRect();if(b.width===0||b.height===0)return;const $=this._config||Y,l=(a,c=.5,v=.5)=>{if(!a)return null;const y=a.getBoundingClientRect();return{x:Math.round(y.left-b.left+y.width*c),y:Math.round(y.top-b.top+y.height*v)}},r=(a,c,v)=>{const y=this.shadowRoot.getElementById(a),m=this.shadowRoot.getElementById(c);y&&y.setAttribute("d",v||""),m&&m.setAttribute("d",v||"")},s=this.shadowRoot.getElementById("gridNode"),t=this.shadowRoot.getElementById("inverterNode"),i=this.shadowRoot.getElementById("essentialNode"),p=this.shadowRoot.getElementById("totalPvPowerBadge"),u=this.shadowRoot.getElementById("masterBatteryHub"),P=this.shadowRoot.getElementById("carNode");if(s&&t){const a=s.getBoundingClientRect(),c=t.getBoundingClientRect();if(a.bottom<c.top+30){const y=l(s,.7,1),m=l(t,.2,0);if(y&&m){const F=Math.round((y.y+m.y)/2),L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${m.x} ${F}, ${m.x} ${m.y}`;r("pathGridInvBase","pathGridInvFlow",L)}}else{const y=Math.round(c.top-b.top+c.height*.55),m=Math.round(a.right-b.left),F=Math.round(c.left-b.left),L=Math.round(a.top-b.top+a.height*.5);let U="";if(Math.abs(L-y)<=8)U=`M ${m} ${y} L ${F} ${y}`;else{const pe=Math.round(m+24);U=`M ${m} ${L} C ${pe} ${L}, ${pe} ${y}, ${F} ${y}`}r("pathGridInvBase","pathGridInvFlow",U)}}if(t&&i){const a=i.getBoundingClientRect(),c=t.getBoundingClientRect();if(a.bottom<c.top+30){const y=l(t,.8,0),m=l(i,.3,1);if(y&&m){const F=Math.round((y.y+m.y)/2),L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${m.x} ${F}, ${m.x} ${m.y}`;r("pathInvLoadBase","pathInvLoadFlow",L)}}else{const y=Math.round(c.top-b.top+c.height*.55),m=Math.round(c.right-b.left),F=Math.round(a.left-b.left),L=Math.round(a.top-b.top+a.height*.5);let U="";if(Math.abs(L-y)<=8)U=`M ${m} ${y} L ${F} ${y}`;else{const pe=Math.round(F-24);U=`M ${m} ${y} C ${pe} ${y}, ${pe} ${L}, ${F} ${L}`}r("pathInvLoadBase","pathInvLoadFlow",U)}}if(p&&t){const a=l(p,.5,1),c=l(t,.5,0);if(a&&c){const v=`M ${a.x} ${a.y} L ${c.x} ${c.y}`;r("pathSolarInvBase","pathSolarInvFlow",v)}}if(t&&u){const a=l(t,.5,1),c=l(u,.5,0);if(a&&c){const v=`M ${a.x} ${a.y} L ${c.x} ${c.y}`;r("pathInvBatBase","pathInvBatFlow",v)}}const M=this.shadowRoot.getElementById("nonEssentialNode"),V=M&&!M.classList.contains("hidden")&&M.offsetHeight>0,O=P&&!P.classList.contains("hidden")&&P.offsetHeight>0;if(s&&V){const a=l(s,.5,1),c=l(M,.5,0);if(a&&c){const v=`M ${a.x} ${a.y} L ${c.x} ${c.y}`;r("pathGridNonEssBase","pathGridNonEssFlow",v)}}else r("pathGridNonEssBase","pathGridNonEssFlow","");if(O){const a=V?M:s;if(a){const c=l(a,.5,1),v=l(P,.5,0);if(c&&v){const y=`M ${c.x} ${c.y} L ${v.x} ${v.y}`;r("pathNonEssCarBase","pathNonEssCarFlow",y)}}else r("pathNonEssCarBase","pathNonEssCarFlow","")}else r("pathNonEssCarBase","pathNonEssCarFlow","");const N=this.shadowRoot.getElementById("subloadsBusContainer");if(i&&N){const a=l(i,.5,1),c=l(N,.5,0);if(a&&c){const v=`M ${a.x} ${a.y} L ${c.x} ${c.y}`;r("pathLoadSubloadsBase","pathLoadSubloadsFlow",v)}}else r("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const z=this.shadowRoot.getElementById("auxNode");if(t&&z&&!z.classList.contains("hidden")&&z.offsetHeight>0){const a=l(z,.35,1),c=l(t,.9,0);if(a&&c){const v=Math.round((a.y+c.y)/2),y=`M ${a.x} ${a.y} C ${a.x} ${v}, ${c.x} ${v}, ${c.x} ${c.y}`;r("pathInvAuxBase","pathInvAuxFlow",y)}}else r("pathInvAuxBase","pathInvAuxFlow","");r("pathBatStemBase","pathBatStemFlow","");const D=this.shadowRoot.getElementById("windStationContainer"),R=((o=$.wind)==null?void 0:o.show)!==!1||((g=$.aux)==null?void 0:g.type)==="wind"?((d=$.wind)==null?void 0:d.turbine_count)||((h=(_=$.wind)==null?void 0:_.turbines)==null?void 0:h.length)||2:0;for(let a=1;a<=4;a++)if(a<=R&&D&&!D.classList.contains("hidden")){const c=this.shadowRoot.getElementById(`turbineCard_${a}`);if(c&&u){const v=l(c,.5,1),y=R===1?.5:.28+(a-1)/(R-1)*.44,m=l(u,y,0);if(v&&m){const F=`M ${v.x} ${v.y} L ${m.x} ${m.y}`;r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,F)}}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"")}else r(`pathTurbine${a}Base`,`pathTurbine${a}Flow`,"");const q=((B=$.battery)==null?void 0:B.parallel_batteries)||((E=(k=$.battery)==null?void 0:k.modules)==null?void 0:E.length)||2;for(let a=1;a<=8;a++){const c=this.shadowRoot.getElementById(`batPackCard_${a}`),v=this.shadowRoot.getElementById(`batBranchBadge_${a}`);if(a<=q&&u&&c){const y=l(u,.5,1),m=l(c,.5,0);if(y&&m){const F=Math.round(y.y+(m.y-y.y)*.45);let L="";Math.abs(y.x-m.x)<=4?L=`M ${y.x} ${y.y} L ${m.x} ${m.y}`:L=`M ${y.x} ${y.y} C ${y.x} ${F}, ${m.x} ${F}, ${m.x} ${m.y}`,r(`pathBat${a}Base`,`pathBat${a}Flow`,L),v&&(v.style.left=`${m.x}px`,v.style.top=`${F}px`,v.style.display="flex")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),v&&(v.style.display="none")}else r(`pathBat${a}Base`,`pathBat${a}Flow`,""),v&&(v.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,o,g,d,_;try{const h=this._config||Y,B=this.shadowRoot.getElementById("solarBusSvg"),k=((e=h.solar)==null?void 0:e.pv_count)||((g=(o=h.solar)==null?void 0:o.strings)==null?void 0:g.length)||3;if(B&&k>0){const b=B.getBoundingClientRect(),$=this.shadowRoot.getElementById("pvPanel_1"),l=this.shadowRoot.getElementById(`pvPanel_${k}`),r=this.shadowRoot.getElementById("solarBusBase"),s=this.shadowRoot.getElementById("solarFlowCollector"),t=this.shadowRoot.getElementById("solarBusStemBase"),i=this.shadowRoot.getElementById("solarBusStemFlow"),p=this.shadowRoot.getElementById("solarBusFeeders");if($&&l&&b.width>0){const u=$.getBoundingClientRect(),P=l.getBoundingClientRect(),M=Math.round(u.left-b.left+u.width/2),V=Math.round(P.left-b.left+P.width/2),O=13,N=Math.round((M+V)/2);if(r&&(r.setAttribute("x1",M),r.setAttribute("y1",O),r.setAttribute("x2",V),r.setAttribute("y2",O)),s&&(s.setAttribute("x1",M),s.setAttribute("y1",O),s.setAttribute("x2",V),s.setAttribute("y2",O)),t&&(t.setAttribute("x1",N),t.setAttribute("y1",O),t.setAttribute("x2",N),t.setAttribute("y2",26)),i&&(i.setAttribute("x1",N),i.setAttribute("y1",O),i.setAttribute("x2",N),i.setAttribute("y2",26)),p){let z="";for(let D=1;D<=k;D++){const Z=this.shadowRoot.getElementById(`pvPanel_${D}`);if(Z){const R=Z.getBoundingClientRect(),q=Math.round(R.left-b.left+R.width/2);z+=`
                  <line x1="${q}" y1="0" x2="${q}" y2="${O}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${q}" y1="0" x2="${q}" y2="${O}" stroke="#fbbf24" stroke-width="2.5" />
                `}}p.innerHTML=z}}}const E=this.shadowRoot.getElementById("subloadsBusSvg"),I=((_=(d=h.load)==null?void 0:d.subloads)==null?void 0:_.length)||3;if(E&&I>0){const b=E.getBoundingClientRect(),$=this.shadowRoot.getElementById("subloadCard_0"),l=this.shadowRoot.getElementById(`subloadCard_${I-1}`),r=this.shadowRoot.getElementById("essentialNode"),s=this.shadowRoot.getElementById("subloadsBusBase"),t=this.shadowRoot.getElementById("subloadsFlowCollector"),i=this.shadowRoot.getElementById("subloadsBusStemBase"),p=this.shadowRoot.getElementById("subloadsBusStemFlow"),u=this.shadowRoot.getElementById("subloadsBusFeeders");if($&&l&&b.width>0){const P=$.getBoundingClientRect(),M=l.getBoundingClientRect(),V=Math.round(P.left-b.left+P.width/2),O=Math.round(M.left-b.left+M.width/2),N=13;let z=Math.round((V+O)/2);if(r){const R=r.getBoundingClientRect();z=Math.round(R.left-b.left+R.width/2)}const D=Math.min(V,z),Z=Math.max(O,z);if(s&&(s.setAttribute("x1",D),s.setAttribute("y1",N),s.setAttribute("x2",Z),s.setAttribute("y2",N)),t&&(t.setAttribute("x1",D),t.setAttribute("y1",N),t.setAttribute("x2",Z),t.setAttribute("y2",N)),i&&(i.setAttribute("x1",z),i.setAttribute("y1",0),i.setAttribute("x2",z),i.setAttribute("y2",N)),p&&(p.setAttribute("x1",z),p.setAttribute("y1",0),p.setAttribute("x2",z),p.setAttribute("y2",N)),u){let R="";for(let q=0;q<I;q++){const a=this.shadowRoot.getElementById(`subloadCard_${q}`);if(a){const c=a.getBoundingClientRect(),v=Math.round(c.left-b.left+c.width/2);R+=`
                  <line x1="${v}" y1="${N}" x2="${v}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${v}" y1="${N}" x2="${v}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}u.innerHTML=R}}}}catch{}}_applyFlowAnimation(e,o,g,d,_){if(!e)return;if(!_){e.setAttribute("class",`flow-pulse ${o} inactive`),e.style.opacity="0",e.style.animation="none";return}const h=g?"flow-reverse":"flow-forward",B=g?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${o} ${h}`),e.style.opacity="1",e.style.setProperty("--flow-speed",d),e.style.animation=`${B} ${d} linear infinite`}_updateFlowAnimations(e,o,g,d,_,h,B,k,E,I=[],b=0,$=0,l=0){var ze,De,fe,ve,Be,Se,Ce,Ie,Te,Fe,Pe,Me,Re;const r=this._config||Y,s=((ze=r.animations)==null?void 0:ze.enabled)!==!1,t=((De=r.animations)==null?void 0:De.speed)||1.2,i=(x,H=10)=>{const T=Math.abs(x);if(T<.05)return"2.5s";const f=Math.min(1,T/H);return`${Math.max(.4,(2.6-f*1.9)*(t/1.2)).toFixed(2)}s`},p=this.shadowRoot.getElementById("pathGridInvFlow"),u=Math.abs(e),P=(((fe=r.grid)==null?void 0:fe.min_power_threshold)!==void 0?r.grid.min_power_threshold:50)/1e3,M=((ve=r.grid)==null?void 0:ve.selling_enabled)===!0,V=s&&u>=P&&(g||o&&M);this._applyFlowAnimation(p,"flow-grid",o,i(e,10),V);const O=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(O,"flow-solar",!1,i(d,12),s&&d>=.05);const N=this.shadowRoot.getElementById("pathInvLoadFlow"),z=Math.abs(_);this._applyFlowAnimation(N,"flow-load",!1,i(_,10),s&&z>=.05);const D=this.shadowRoot.getElementById("pathInvBatFlow"),Z=Math.abs(h),R=s&&Z>=.02&&(B||k),q=B?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(D,q,k,i(h,8),R);const a=this.shadowRoot.getElementById("pathGridNonEssFlow"),c=Math.abs(b);this._applyFlowAnimation(a,"flow-grid",!1,i(b,5),s&&c>=.05);const v=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),y=Math.abs(E);this._applyFlowAnimation(v,"flow-car",!1,i(E,7),s&&y>=.05);const m=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),F=Math.abs($||_);this._applyFlowAnimation(m,"flow-load",!1,i(F,8),s&&F>=.05);const L=this.shadowRoot.getElementById("pathInvAuxFlow"),U=Math.abs(l);this._applyFlowAnimation(L,"flow-aux",!0,i(l,5),s&&U>=.05);const pe=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(pe,q,k,i(h,8),R);const ge=this.shadowRoot.getElementById("solarFlowCollector"),he=this.shadowRoot.getElementById("solarBusStemFlow");if(ge)if(!s||d<.05)ge.style.opacity="0.2",ge.style.animation="none",he&&(he.style.opacity="0.2",he.style.animation="none");else{const x=i(d,12);ge.style.opacity="1",ge.setAttribute("class","flow-line"),ge.style.animation=`esDashflow ${x} linear infinite`,he&&(he.style.opacity="1",he.setAttribute("class","flow-line"),he.style.animation=`esDashflow ${x} linear infinite`)}const _e=this.shadowRoot.getElementById("subloadsFlowCollector"),ae=this.shadowRoot.getElementById("subloadsBusStemFlow");if(_e)if(!s||F<.05)_e.style.opacity="0.2",_e.style.animation="none",ae&&(ae.style.opacity="0.2",ae.style.animation="none");else{const x=i(F,8);_e.style.opacity="1",_e.setAttribute("class","flow-line"),_e.style.animation=`esDashflow ${x} linear infinite`,ae&&(ae.style.opacity="1",ae.setAttribute("class","flow-line"),ae.style.animation=`esDashflow ${x} linear infinite`)}const J=this.shadowRoot.getElementById("batteryFlowCollector"),Q=this.shadowRoot.getElementById("batteryBusStemFlow"),$e=this.shadowRoot.getElementById("batteryBusFeeders"),re=k?"#f87171":"#34d399",le=k?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(J)if(J.style.stroke=re,J.style.filter=le,Q&&(Q.style.stroke=re,Q.style.filter=le),!s||!R)J.style.opacity="0.2",J.style.animation="none",Q&&(Q.style.opacity="0.2",Q.style.animation="none");else{const x=i(h,8),H=k?"esDashflowRev":"esDashflow";J.style.opacity="1",J.setAttribute("class",k?"flow-line-reverse":"flow-line"),J.style.animation=`${H} ${x} linear infinite`,Q&&(Q.style.opacity="1",Q.setAttribute("class",k?"flow-line-reverse":"flow-line"),Q.style.animation=`${H} ${x} linear infinite`)}$e&&$e.querySelectorAll("line").forEach(x=>{if(x.style.stroke=re,x.style.filter=le,!s||!R)x.style.opacity="0.2",x.style.animation="none";else{const H=i(h,8),T=k?"esDashflowRev":"esDashflow";x.style.opacity="1",x.setAttribute("class",k?"flow-line-reverse":"flow-line"),x.style.animation=`${T} ${H} linear infinite`}});for(let x=1;x<=8;x++){const H=this.shadowRoot.getElementById(`pathBat${x}Flow`);if(!H)continue;const T=I[x-1],f=T?T.kwNum:0,w=s&&(f>=.02||R),S=k;this._applyFlowAnimation(H,q,S,i(f||h,8),w)}for(let x=0;x<6;x++){const H=this.shadowRoot.getElementById(`pathSubload${x}Flow`);if(!H)continue;const T=(Se=(Be=r.load)==null?void 0:Be.subloads)==null?void 0:Se[x],f=T?this._getEntityState(T.entity):null,w=f?this._formatPower(f,2).kw:x===0?2:x===1?3:4;this._applyFlowAnimation(H,"flow-load",!1,i(w,8),s&&w>=.05)}const ke=((Ce=r.wind)==null?void 0:Ce.show)!==!1||((Ie=r.aux)==null?void 0:Ie.type)==="wind",Ge=ke?((Te=r.wind)==null?void 0:Te.turbine_count)||((Pe=(Fe=r.wind)==null?void 0:Fe.turbines)==null?void 0:Pe.length)||2:0,Ve=((Me=r.wind)==null?void 0:Me.turbines)||[];for(let x=1;x<=4;x++){const H=this.shadowRoot.getElementById(`pathTurbine${x}Flow`);if(H)if(x<=Ge&&ke){const T=Ve[x-1]||{},f=this._hass?0:x===1?1.45:.85,w=this._getEntityState(T.power_entity||`sensor.wind_turbine_${x}_power`);let de=this._formatPower(w,f).kw*1e3;w&&w.unit==="W"&&(de=w.val);const we=T.animation_threshold??((Re=r.wind)==null?void 0:Re.animation_threshold)??50,me=de>=we;this._applyFlowAnimation(H,"flow-wind",!1,i(de/1e3,3),s&&me)}else this._applyFlowAnimation(H,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",dt),window.customCards=window.customCards||[],window.customCards.some(rt=>rt.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),je.EnergyStationCard=dt,Object.defineProperty(je,Symbol.toStringTag,{value:"Module"})});
