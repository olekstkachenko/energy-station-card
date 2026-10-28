(function(De,O){typeof exports=="object"&&typeof module<"u"?O(exports):typeof define=="function"&&define.amd?define(["exports"],O):(De=typeof globalThis<"u"?globalThis:De||self,O(De.EnergyStationCard={}))})(this,function(De){"use strict";const O={title:"Energy Station",card_style:"full",theme_mode:"dark",language:"uk",show_quick_settings:!0,controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,strings:[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"}},H={sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};class eo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||O)),this.render()}connectedCallback(){this.render()}_valueChanged(e,i){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const p=e.split(".");let a=this._config;for(let c=0;c<p.length-1;c++)a[p[c]]||(a[p[c]]={}),a=a[p[c]];a[p[p.length-1]]=i;const g=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(g)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||O)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.essential_power_entity="sensor.solarman_essential_load");const i=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(i),this.render()}render(){var i,p,a,g,c,x,h,E,S,b,C,_,l,s,o,t,v,f,I,r,k,P,B,A,te,he,z,G,d,u,m,y,$,N,q,ne,le,ve,de,_e,ye,re,ie,We,me,ue,Ee,qe,ce,ae,we,Qe,Le,He,Ge,je,Oe,Ye,Ze,et,Ke,$e,w,V,R,pe,Y,Fe,Be,Se,Ce,tt,nt,ut,Ue;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
            <label>Тема оформлення (Theme):</label>
            <select id="themeMode">
              <option value="dark" ${e.theme_mode!=="light"?"selected":""}>🌙 Темна (Dark)</option>
              <option value="light" ${e.theme_mode==="light"?"selected":""}>☀️ Світла (Light)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Мова інтерфейсу (Language):</label>
            <select id="cardLanguage">
              <option value="uk" ${e.language!=="en"?"selected":""}>🇺🇦 Українська (UK)</option>
              <option value="en" ${e.language==="en"?"selected":""}>🇬🇧 English (EN)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Панель перемикачів на картці:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Показувати блок контролю струму та теми/мови</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор струму заряду АКБ від сонця:</label>
            <input type="text" id="ctrlSolarCharge" value="${((i=e.controls)==null?void 0:i.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
          </div>
          <div class="field-row">
            <label>Сенсор потужності продажу в мережу:</label>
            <input type="text" id="ctrlSellPower" value="${((p=e.controls)==null?void 0:p.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
          </div>
          <div class="field-row">
            <label>Сенсор струму заряду АКБ від мережі:</label>
            <input type="text" id="ctrlGridCharge" value="${((a=e.controls)==null?void 0:a.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
          </div>
          <div class="field-row">
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((g=e.animations)==null?void 0:g.enabled)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((c=e.animations)==null?void 0:c.speed)||1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((x=e.animations)==null?void 0:x.speed)||1.2}s</span>
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
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((E=e.solar)==null?void 0:E.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((S=e.solar)==null?void 0:S.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((b=e.solar)==null?void 0:b.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((C=e.solar)==null?void 0:C.target_daily_yield)||55}">
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((_=e.solar)==null?void 0:_.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((l=e.solar)==null?void 0:l.pv_count)||3}).map((ge,T)=>{var Ve,Ae;const L=T+1,F=((Ae=(Ve=e.solar)==null?void 0:Ve.strings)==null?void 0:Ae[T])||{},xe=`sensor.deye_12k_inverter_pv${L}_voltage`,Pe=`sensor.deye_12k_inverter_pv${L}_current`,Ne=`sensor.deye_12k_inverter_pv${L}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${L} (Стрінг ${L})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${T}" value="${F.name||`PV ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${L} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${T}" value="${F.voltage_entity!==void 0?F.voltage_entity:xe}" placeholder="${xe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${L} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${T}" value="${F.current_entity!==void 0?F.current_entity:Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">PV${L} Потужність (Power, опціонально):</label>
                    <input type="text" class="pv-str-power-inp" data-idx="${T}" value="${F.power_entity!==void 0?F.power_entity:Ne}" placeholder="${Ne} (залиште пустим для авто P = U × I)">
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
            <input type="text" id="invModel" value="${((s=e.inverter)==null?void 0:s.model_name)||"DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((o=e.inverter)==null?void 0:o.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((t=e.inverter)==null?void 0:t.show_self_consumption)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${((v=e.inverter)==null?void 0:v.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((f=e.inverter)==null?void 0:f.standby_power)!==void 0?e.inverter.standby_power:100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((I=e.inverter)==null?void 0:I.standby_power)!==void 0?e.inverter.standby_power:100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((r=e.inverter)==null?void 0:r.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((k=e.inverter)==null?void 0:k.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((P=e.inverter)==null?void 0:P.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((B=e.inverter)==null?void 0:B.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((A=e.inverter)==null?void 0:A.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((te=e.aux)==null?void 0:te.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((he=e.aux)==null?void 0:he.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((z=e.aux)==null?void 0:z.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((G=e.aux)==null?void 0:G.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((d=e.aux)==null?void 0:d.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((u=e.aux)==null?void 0:u.type)==="microinverter"&&(!((m=e.aux)!=null&&m.title)||((y=e.aux)==null?void 0:y.title)==="Вітрогенератор")?"Мікроінвертор":(($=e.aux)==null?void 0:$.title)||(((N=e.aux)==null?void 0:N.type)==="generator"?"Генератор":((q=e.aux)==null?void 0:q.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((ne=e.aux)==null?void 0:ne.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((le=e.wind)==null?void 0:le.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((ve=e.wind)==null?void 0:ve.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((de=e.wind)==null?void 0:de.animation_threshold)||((_e=e.aux)==null?void 0:_e.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((ye=e.wind)==null?void 0:ye.animation_threshold)||((re=e.aux)==null?void 0:re.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((ie=e.wind)==null?void 0:ie.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((We=e.wind)==null?void 0:We.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((me=e.wind)==null?void 0:me.turbine_count)||2}).map((ge,T)=>{var F,xe;const L=((xe=(F=e.wind)==null?void 0:F.turbines)==null?void 0:xe[T])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${T}" value="${L.name||`Вітряк ${T+1}`}" placeholder="Назва (напр. Вітряк ${T+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${T}" value="${L.power_entity||`sensor.wind_turbine_${T+1}_power`}" placeholder="sensor.wind_turbine_${T+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${T}" value="${L.rpm_entity||L.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${T}" value="${L.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${T+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${T}" value="${L.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${T+1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((ue=e.battery)==null?void 0:ue.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((Ee=e.battery)==null?void 0:Ee.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((qe=e.battery)==null?void 0:qe.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((ce=e.battery)==null?void 0:ce.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((ae=e.battery)==null?void 0:ae.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((we=e.battery)==null?void 0:we.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Qe=e.battery)==null?void 0:Qe.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((Le=e.battery)==null?void 0:Le.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((He=e.battery)==null?void 0:He.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Ge=e.battery)==null?void 0:Ge.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((je=e.battery)==null?void 0:je.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Oe=e.battery)==null?void 0:Oe.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((Ye=e.battery)==null?void 0:Ye.parallel_batteries)||2}).map((ge,T)=>{var rt,at,lt,dt;const L=T+1,F=((at=(rt=e.battery)==null?void 0:rt.modules)==null?void 0:at[T])||((dt=(lt=e.battery)==null?void 0:lt.module_entities)==null?void 0:dt[T])||{},xe=`sensor.bms_rack${L}_soc`,Pe=`sensor.bms_rack${L}_current`,Ne=`sensor.bms_rack${L}_voltage`,Ve=`sensor.bms_rack${L}_power`,Ae=`sensor.bms_rack${L}_temperature`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${L} (Модуль ${L})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${T}" value="${F.name||`Батарея ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${L} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${T}" value="${F.soc_entity!==void 0?F.soc_entity:F.soc!==void 0?F.soc:xe}" placeholder="${xe}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${L} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${T}" value="${F.current_entity!==void 0?F.current_entity:Pe}" placeholder="${Pe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${L} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${T}" value="${F.voltage_entity!==void 0?F.voltage_entity:F.volt!==void 0?F.volt:Ne}" placeholder="${Ne}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${L} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${T}" value="${F.temperature_entity!==void 0?F.temperature_entity:F.temp!==void 0?F.temp:Ae}" placeholder="${Ae}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${L} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${T}" value="${F.capacity_kwh!==void 0?F.capacity_kwh:L===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">Батарея ${L} Потужність (опціонально):</label>
                      <input type="text" class="bat-mod-power-inp" data-idx="${T}" value="${F.power_entity!==void 0?F.power_entity:Ve}" placeholder="${Ve} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(Ze=e.grid)!=null&&Ze.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((et=e.grid)==null?void 0:et.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((Ke=e.grid)==null?void 0:Ke.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${(($e=e.grid)==null?void 0:$e.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((w=e.grid)==null?void 0:w.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((V=e.grid)==null?void 0:V.voltage_entity)||""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((R=e.grid)==null?void 0:R.status_entity)||""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((pe=e.grid)==null?void 0:pe.voltage_threshold)!==void 0?e.grid.voltage_threshold:90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Y=e.grid)==null?void 0:Y.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((Fe=e.grid)==null?void 0:Fe.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Be=e.grid)==null?void 0:Be.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((Se=e.grid)==null?void 0:Se.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((Ce=e.load)==null?void 0:Ce.auto_calculate)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((tt=e.load)==null?void 0:tt.essential_power_entity)||""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((nt=e.load)==null?void 0:nt.daily_house_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((ut=e.load)==null?void 0:ut.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((Ue=e.load)==null?void 0:Ue.subloads)||[]).map((ge,T)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${T}" value="${ge.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${T}" style="width: 140px;">
                  <option value="boiler" ${ge.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${ge.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ge.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${ge.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${ge.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${ge.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${ge.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${T}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${T}" value="${ge.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
            </div>
          `).join("")}

          <button type="button" class="preset-badge" id="btnAddSubloadBottom" style="width: 100%; background: rgba(14, 165, 233, 0.12); border-color: rgba(56, 189, 248, 0.35); color: #38bdf8; font-size: 12px; padding: 7px; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
            <span>+ Додати споживача</span>
          </button>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var c,x,h,E,S,b,C,_,l;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",o=>{this._switchTab(o.target.dataset.tab)})}),(c=e.getElementById("btnPresetEsp"))==null||c.addEventListener("click",()=>this._applyPreset("deye_esphome")),(x=e.getElementById("btnPresetSolarman"))==null||x.addEventListener("click",()=>this._applyPreset("deye_solarman"));const i=(s,o)=>{const t=e.getElementById(s);t&&t.addEventListener("input",v=>this._valueChanged(o,v.target.value))},p=(s,o)=>{const t=e.getElementById(s);t&&t.addEventListener("change",v=>this._valueChanged(o,v.target.checked))},a=(s,o,t,v="")=>{const f=e.getElementById(s);f&&f.addEventListener("input",I=>{const r=parseFloat(I.target.value);if(t){const k=e.getElementById(t);k&&(k.innerText=`${r}${v}`)}this._valueChanged(o,r)})};i("title","title"),i("themeMode","theme_mode"),i("cardLanguage","language"),p("showQuickSettings","show_quick_settings"),i("ctrlSolarCharge","controls.solar_charge_entity"),i("ctrlSellPower","controls.sell_power_entity"),i("ctrlGridCharge","controls.grid_charge_entity"),p("animEnabled","animations.enabled"),a("animSpeed","animations.speed","animSpeedVal","s"),(h=e.getElementById("solarPvCount"))==null||h.addEventListener("input",s=>{const o=parseInt(s.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=o,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<o;){const t=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${t}`,name:`PV ${t}`,voltage_entity:`sensor.deye_12k_inverter_pv${t}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${t}_current`,power_entity:`sensor.deye_12k_inverter_pv${t}_power`})}this._valueChanged("solar.pv_count",o),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].name=o.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].voltage_entity=o.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].current_entity=o.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].power_entity=o.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),i("solarTotalPower","solar.total_power_entity"),i("solarDailyYield","solar.daily_yield_entity"),a("solarTargetDaily","solar.target_daily_yield"),i("invModel","inverter.model_name"),i("invPower","inverter.power_entity"),p("invShowSelfConsumption","inverter.show_self_consumption"),i("invSelfConsumptionEntity","inverter.self_consumption_entity"),a("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),i("invTempAc","inverter.ac_temperature_entity"),i("invTempDc","inverter.dc_temperature_entity"),i("invVolt","inverter.voltage_entity"),i("invCurrent","inverter.current_entity"),i("invFreq","inverter.frequency_entity"),(E=e.getElementById("auxType"))==null||E.addEventListener("change",s=>{const o=s.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=o;const v={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[o]||"Мікроінвертор";this._config.aux.title=v;const f=e.getElementById("auxTitle");f&&(f.value=v),this._valueChanged("aux.type",o),this._valueChanged("aux.title",v)}),i("auxTitle","aux.title"),i("auxPower","aux.power_entity"),(S=e.getElementById("windTurbineCount"))==null||S.addEventListener("input",s=>{const o=parseInt(s.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=o,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<o;){const t=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${t}`,name:`Вітряк ${t}`,power_entity:`sensor.wind_turbine_${t}_power`,speed_entity:`sensor.wind_turbine_${t}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",o),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),a("windThreshold","wind.animation_threshold","windThresholdVal","W"),(b=e.getElementById("windThreshold"))==null||b.addEventListener("input",s=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(s.target.value))}),i("windDailyEnergy","wind.daily_energy_entity"),i("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].name=o.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].power_entity=o.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].rpm_entity=o.target.value,this._config.wind.turbines[t].speed_entity=o.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-daily-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].daily_energy_entity=o.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-monthly-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].monthly_energy_entity=o.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),i("batSoc","battery.soc_entity"),i("batPower","battery.power_entity"),i("batPowerSign","battery.power_sign"),i("batVolt","battery.voltage_entity"),i("batCurrent","battery.current_entity"),i("batCapacity","battery.capacity_entity"),i("batChargeDaily","battery.charge_daily_entity"),i("batDischargeDaily","battery.discharge_daily_entity"),(C=e.getElementById("batParallelCount"))==null||C.addEventListener("input",s=>{const o=parseInt(s.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=o,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<o;){const t=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${t}`,name:`Батарея ${t}`,soc_entity:`sensor.bms_rack${t}_soc`,current_entity:`sensor.bms_rack${t}_current`,voltage_entity:`sensor.bms_rack${t}_voltage`,power_entity:`sensor.bms_rack${t}_power`,temperature_entity:`sensor.bms_rack${t}_temperature`})}this._valueChanged("battery.parallel_batteries",o),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].name=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].soc_entity=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].current_entity=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].voltage_entity=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].temperature_entity=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].power_entity=o.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(s=>{s.addEventListener("input",o=>{const t=parseInt(o.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].capacity_kwh=parseFloat(o.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),p("gridSellingEnabled","grid.selling_enabled"),i("gridPower","grid.power_entity"),i("gridVoltage","grid.voltage_entity"),i("gridStatus","grid.status_entity"),a("gridVoltageThreshold","grid.voltage_threshold"),i("gridPowerSign","grid.power_sign"),a("gridMinThreshold","grid.min_power_threshold"),i("gridImportDaily","grid.import_daily_entity"),i("gridExportDaily","grid.export_daily_entity"),i("gridNonEssential","grid.non_essential_power_entity"),i("gridCarPower","grid.car_power_entity"),p("loadAutoCalculate","load.auto_calculate"),i("loadEssential","load.essential_power_entity"),i("loadDailyHouse","load.daily_house_entity");const g=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const s=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${s}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(_=e.getElementById("btnAddSubload"))==null||_.addEventListener("click",g),(l=e.getElementById("btnAddSubloadBottom"))==null||l.addEventListener("click",g),e.querySelectorAll(".btn-del-subload").forEach(s=>{s.addEventListener("click",o=>{var f;const t=o.currentTarget||o.target.closest(".btn-del-subload"),v=parseInt(t.dataset.idx);(f=this._config.load)!=null&&f.subloads&&(this._config.load.subloads.splice(v,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(s=>{s.addEventListener("input",o=>{var v,f;const t=parseInt(o.target.dataset.idx);(f=(v=this._config.load)==null?void 0:v.subloads)!=null&&f[t]&&(this._config.load.subloads[t].name=o.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(s=>{s.addEventListener("change",o=>{var v,f;const t=parseInt(o.target.dataset.idx);(f=(v=this._config.load)==null?void 0:v.subloads)!=null&&f[t]&&(this._config.load.subloads[t].icon=o.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(s=>{s.addEventListener("input",o=>{var v,f;const t=parseInt(o.target.dataset.idx);(f=(v=this._config.load)==null?void 0:v.subloads)!=null&&f[t]&&(this._config.load.subloads[t].entity=o.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})})}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",eo);const mt={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current"}};class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(O))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const i=JSON.parse(JSON.stringify(e)),p=JSON.parse(JSON.stringify(O));this._config=this._deepMerge(p,i);const a=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=a||this._config.theme_mode||"dark";const g=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=g||this._config.language||"uk",this._renderCardSkeleton(),this._hass&&this._updateValues()}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,i){const p=Array.isArray(e)?[...e]:Object.assign({},e);if(!i||typeof i!="object")return p;for(const a of Object.keys(i)){const g=i[a],c=e?e[a]:void 0;g&&typeof g=="object"&&!Array.isArray(g)?p[a]=this._deepMerge(c||{},g):p[a]=g}return p}_getEntityState(e){var x;if(!this._hass||!e||!this._hass.states[e])return null;const i=this._hass.states[e],a=String(i.state).trim().replace(",","."),g=parseFloat(a),c=((x=i.attributes)==null?void 0:x.unit_of_measurement)||"";return{raw:i.state,val:isNaN(g)?0:g,unit:c,attributes:i.attributes}}_t(e){var p,a;const i=this._language||"uk";return((p=mt[i])==null?void 0:p[e])||((a=mt.uk)==null?void 0:a[e])||e}_toggleTheme(e){const i=e||(this._themeMode==="light"?"dark":"light");this._themeMode=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",i)}catch{}this._applyTheme()}_toggleLanguage(e){const i=e||(this._language==="en"?"uk":"en");this._language=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",i)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var c;const e=(c=this.shadowRoot)==null?void 0:c.querySelector(".energy-station-container");if(!e)return;const i=this._themeMode==="light";e.classList.toggle("theme-light",i);const p=this.shadowRoot.getElementById("headerThemeToggle");p&&(p.innerHTML=i?"☀️":"🌙",p.setAttribute("title",i?this._t("theme_dark"):this._t("theme_light")));const a=this.shadowRoot.getElementById("btnThemeDark"),g=this.shadowRoot.getElementById("btnThemeLight");a&&g&&(a.classList.toggle("active",!i),g.classList.toggle("active",i))}_formatPower(e,i=0){const p=this._language==="en"?"kW":"кВт";if(!e)return{num:i.toFixed(3),kw:i,str:`${i.toFixed(3)} ${p}`};let a=e.val;return e.unit==="W"&&(a=a/1e3),{num:a.toFixed(3),kw:a,str:`${a.toFixed(3)} ${p}`}}_fireMoreInfo(e){if(!e)return;const i=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}_renderCardSkeleton(){var i,p,a,g,c,x,h,E,S,b,C,_,l,s,o,t,v,f;const e=this._config||O;this._initialized=!0,this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((i=e.animations)==null?void 0:i.speed)||1.2}s;
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
            <span>${e.title||"Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW</span>
          </div>
          <div class="es-header-controls">
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

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${H.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((p=e.solar)==null?void 0:p.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${H.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24;">
              12,000 ${this._language==="en"?"kW":"кВт"}
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
              <div class="es-node-icon" style="color: #38bdf8;">${H.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(a=e.grid)!=null&&a.show_non_essential&&((g=e.grid)!=null&&g.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${H.house_outline}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c=e.grid)!=null&&c.show_car&&((x=e.grid)!=null&&x.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8;">${H.car}</div>
              <div class="es-node-title" id="carTitle">${((h=e.grid)==null?void 0:h.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${H.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((E=e.inverter)==null?void 0:E.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((S=e.aux)==null?void 0:S.type)==="none"||((b=e.aux)==null?void 0:b.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${H[(C=e.aux)==null?void 0:C.type]||H.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((_=e.aux)==null?void 0:_.type)==="microinverter"&&(!((l=e.aux)!=null&&l.title)||((s=e.aux)==null?void 0:s.title)==="Вітрогенератор")?this._t("aux_microinverter"):((o=e.aux)==null?void 0:o.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((t=e.aux)==null?void 0:t.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((v=e.wind)==null?void 0:v.show)===!1&&((f=e.aux)==null?void 0:f.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee;">${H.house}</div>
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
                <span style="font-size: 20px; font-weight: 900; color: #f8fafc;">3,000 ${this._language==="en"?"kW":"кВт"}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: #34d399; font-weight: 700; font-size: 14px;">${this._t("bat_dir_charge")}</span>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),requestAnimationFrame(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridExportDaily:e.getElementById("gridExportDaily"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:e.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:e.getElementById("inverterSelfConsumptionVal"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer"),bottomControlsDock:e.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var h,E,S,b,C,_,l,s;const e=this._config||O,i=((h=this._nodes)==null?void 0:h.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!i)return;if(i.innerHTML="",!(((E=e.wind)==null?void 0:E.show)!==!1||((S=e.aux)==null?void 0:S.type)==="wind")){i.classList.add("hidden");return}i.classList.remove("hidden");const a=((b=e.wind)==null?void 0:b.turbine_count)||((_=(C=e.wind)==null?void 0:C.turbines)==null?void 0:_.length)||2,g=((l=e.wind)==null?void 0:l.turbines)||[],c=document.createElement("div");c.className="es-wind-summary-bar es-mono",c.id="windStationSummaryBar",c.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,i.appendChild(c);const x=document.createElement("div");x.className="es-wind-pods-row",i.appendChild(x);for(let o=0;o<a;o++){const t=g[o]||{name:`Вітряк ${o+1}`,power_entity:`sensor.wind_turbine_${o+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((s=e.wind)==null?void 0:s.animation_threshold)||50},v=!!(t.daily_energy_entity||t.monthly_energy_entity),f=document.createElement("div");f.className="es-turbine-card glow-wind clickable-node",f.id=`turbineCard_${o+1}`,f.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${o+1}">
              ${H.wind_turbine}
            </div>
            <span>${t.name||`Вітряк ${o+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${o+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${o+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${o+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${o+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${o+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${v?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${o+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${o+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,f.addEventListener("click",()=>{this._fireMoreInfo(t.power_entity)}),x.appendChild(f)}}_renderDynamicPvPanels(){var a,g,c,x,h;const e=this._config||O,i=this._nodes.pvPanelsContainer;if(!i)return;i.innerHTML="";const p=((a=e.solar)==null?void 0:a.pv_count)||((c=(g=e.solar)==null?void 0:g.strings)==null?void 0:c.length)||3;for(let E=1;E<=p;E++){const S=E<10?`0${E}`:`${E}`,b=((h=(x=e.solar)==null?void 0:x.strings)==null?void 0:h[E-1])||{},C=b.name||`PV ${S}`,_=document.createElement("div");_.className="es-pv-panel glow-solar clickable-node",_.dataset.pvIndex=E,_.id=`pvPanel_${E}`,_.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${H.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${C}</span>
        <span class="es-pv-val es-mono" id="pvVal_${E}">1,200 кВт</span>
      `,_.addEventListener("click",()=>{var s;const l=b.power_entity||b.voltage_entity||b.current_entity||((s=e.solar)==null?void 0:s.total_power_entity);this._fireMoreInfo(l)}),i.appendChild(_)}}_renderDynamicSubloads(){var a;const e=this._config||O,i=this._nodes.subloadsContainer;if(!i)return;i.innerHTML="",(((a=e.load)==null?void 0:a.subloads)||[]).forEach((g,c)=>{const x=document.createElement("div");x.className="es-subload-card clickable-node",x.id=`subloadCard_${c}`,x.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${H[g.icon]||H.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${g.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,x.addEventListener("click",()=>{this._fireMoreInfo(g.entity)}),i.appendChild(x)})}_renderDynamicBatteryRack(){var h,E,S,b,C,_,l;const e=this._config||O,i=this._nodes.batteryRackContainer;if(!i)return;i.innerHTML="";const p=((h=e.battery)==null?void 0:h.parallel_batteries)||((S=(E=e.battery)==null?void 0:E.modules)==null?void 0:S.length)||2,a=[82,76,91,68,85,90,72,80],g=[52.4,52.4,52.4,52.4,52.4,52.4],c=this._t("bat_prefix"),x=this._language==="en"?"kW":"кВт";for(let s=1;s<=p;s++){const o=((C=(b=e.battery)==null?void 0:b.modules)==null?void 0:C[s-1])||((l=(_=e.battery)==null?void 0:_.module_entities)==null?void 0:l[s-1])||{},t=o.name||`${c} ${s}`,v=a[(s-1)%a.length],f=g[(s-1)%g.length],I=document.createElement("div");I.className="es-battery-pack-card glow-battery clickable-node",I.id=`batPackCard_${s}`,I.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${H.battery_vertical}</div>
        <span class="es-bat-name">${t}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${s}">${v}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${s}">${f.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${s}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${x}</div>
      `,I.addEventListener("click",()=>{var k;const r=o.soc_entity||o.soc||o.voltage_entity||o.volt||o.current_entity||((k=e.battery)==null?void 0:k.soc_entity);this._fireMoreInfo(r)}),i.appendChild(I)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var s,o,t,v,f,I,r,k,P;const e=this._config||O,i=((s=this._nodes)==null?void 0:s.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!i||(i.innerHTML="",e.show_quick_settings===!1))return;const p=this._themeMode==="light",a=this._language==="en",g=((o=e.controls)==null?void 0:o.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",c=((t=e.controls)==null?void 0:t.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",x=((v=e.controls)==null?void 0:v.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",h=document.createElement("div");h.className="es-quick-settings-card",h.id="quickSettingsCard",h.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${H.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${p?H.sun_mode:H.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${a?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${g}">
              <span class="es-ctrl-icon es-ctrl-solar">${H.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell">${H.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${a?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${x}">
              <span class="es-ctrl-icon es-ctrl-grid">${H.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(f=h.querySelector("#btnThemeToggle"))==null||f.addEventListener("click",B=>{B.stopPropagation(),this._toggleTheme()}),(I=h.querySelector("#btnLangToggle"))==null||I.addEventListener("click",B=>{B.stopPropagation(),this._toggleLanguage()}),(r=h.querySelector("#ctrlLabelWrapSolar"))==null||r.addEventListener("click",()=>this._fireMoreInfo(g)),(k=h.querySelector("#ctrlLabelWrapSell"))==null||k.addEventListener("click",()=>this._fireMoreInfo(c)),(P=h.querySelector("#ctrlLabelWrapGrid"))==null||P.addEventListener("click",()=>this._fireMoreInfo(x));const E=h.querySelector("#ctrlSliderSolar"),S=h.querySelector("#ctrlValSolar");E&&(this._updateSliderGradient(E),E.addEventListener("input",B=>{S&&(S.innerText=`${B.target.value} A`),this._updateSliderGradient(E)}),E.addEventListener("change",B=>{this._setNumberValue(g,B.target.value)}));const b=h.querySelector("#ctrlSliderSell"),C=h.querySelector("#ctrlValSell");b&&(this._updateSliderGradient(b),b.addEventListener("input",B=>{const A=Number(B.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");C&&(C.innerText=`${A} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(b)}),b.addEventListener("change",B=>{this._setNumberValue(c,B.target.value)}));const _=h.querySelector("#ctrlSliderGrid"),l=h.querySelector("#ctrlValGrid");_&&(this._updateSliderGradient(_),_.addEventListener("input",B=>{l&&(l.innerText=`${B.target.value} A`),this._updateSliderGradient(_)}),_.addEventListener("change",B=>{this._setNumberValue(x,B.target.value)})),i.appendChild(h),this._updateControlSliders()}_updateSliderGradient(e){if(!e)return;const i=parseFloat(e.min)||0,p=parseFloat(e.max)||100,a=parseFloat(e.value)||0,g=Math.max(0,Math.min(100,(a-i)/(p-i)*100));e.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${g}%, rgba(255, 255, 255, 0.12) ${g}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(e,i){if(!this._hass||!e)return;const a=e.split(".")[0]||"number",g=Number(i);this._hass.callService(a,"set_value",{entity_id:e,value:g})}_updateControlSliders(){var C,_,l,s,o,t,v,f,I;const e=this._config||O;if(e.show_quick_settings===!1)return;const i=this.shadowRoot;if(!i)return;const p=((C=e.controls)==null?void 0:C.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",a=((_=e.controls)==null?void 0:_.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",g=((l=e.controls)==null?void 0:l.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",c=i.getElementById("ctrlSliderSolar"),x=i.getElementById("ctrlValSolar"),h=i.getElementById("ctrlSliderSell"),E=i.getElementById("ctrlValSell"),S=i.getElementById("ctrlSliderGrid"),b=i.getElementById("ctrlValGrid");if(c&&(!c.matches||!c.matches(":active"))){const r=(o=(s=this._hass)==null?void 0:s.states)==null?void 0:o[p],k=r&&!isNaN(parseFloat(r.state))?parseFloat(r.state):c.value?parseFloat(c.value):80;c.value=k,x&&(x.innerText=`${Math.round(k)} A`),this._updateSliderGradient(c)}if(h&&(!h.matches||!h.matches(":active"))){const r=(v=(t=this._hass)==null?void 0:t.states)==null?void 0:v[a],k=r&&!isNaN(parseFloat(r.state))?parseFloat(r.state):h.value?parseFloat(h.value):5e3;h.value=k;const P=Math.round(k).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),B=this._language==="uk"?"Вт":"W";E&&(E.innerText=`${P} ${B}`),this._updateSliderGradient(h)}if(S&&(!S.matches||!S.matches(":active"))){const r=(I=(f=this._hass)==null?void 0:f.states)==null?void 0:I[g],k=r&&!isNaN(parseFloat(r.state))?parseFloat(r.state):S.value?parseFloat(S.value):70;S.value=k,b&&(b.innerText=`${Math.round(k)} A`),this._updateSliderGradient(S)}}_bindInteractions(){var p,a,g,c,x,h,E,S,b,C,_,l,s,o,t,v,f,I;const e=this.shadowRoot,i=this._config||O;(p=e.getElementById("headerThemeToggle"))==null||p.addEventListener("click",r=>{r.stopPropagation(),this._toggleTheme()}),(a=e.getElementById("headerLangToggle"))==null||a.addEventListener("click",r=>{r.stopPropagation(),this._toggleLanguage()}),(g=e.getElementById("solarHeaderNode"))==null||g.addEventListener("click",()=>{var r,k;this._fireMoreInfo(((r=i.solar)==null?void 0:r.daily_yield_entity)||((k=i.solar)==null?void 0:k.total_power_entity))}),(c=e.getElementById("totalPvPowerBadge"))==null||c.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.solar)==null?void 0:r.total_power_entity)}),(x=e.getElementById("gridNode"))==null||x.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.power_entity)}),(h=e.getElementById("nonEssentialNode"))==null||h.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.non_essential_power_entity)}),(E=e.getElementById("carNode"))==null||E.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.car_power_entity)}),(S=e.getElementById("inverterNode"))==null||S.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.inverter)==null?void 0:r.power_entity)}),(b=e.getElementById("inverterSelfConsumptionBox"))==null||b.addEventListener("click",r=>{var k;r.stopPropagation(),(k=i.inverter)!=null&&k.self_consumption_entity&&this._fireMoreInfo(i.inverter.self_consumption_entity)}),(C=e.getElementById("auxNode"))==null||C.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.aux)==null?void 0:r.power_entity)}),(_=e.getElementById("essentialNode"))==null||_.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.load)==null?void 0:r.essential_power_entity)}),(l=e.getElementById("masterBatteryHub"))==null||l.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.battery)==null?void 0:r.soc_entity)}),(s=e.getElementById("batChargeDaily"))==null||s.addEventListener("click",r=>{var k;r.stopPropagation(),this._fireMoreInfo(((k=i.battery)==null?void 0:k.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(o=e.getElementById("batDischargeDaily"))==null||o.addEventListener("click",r=>{var k;r.stopPropagation(),this._fireMoreInfo(((k=i.battery)==null?void 0:k.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let r=1;r<=8;r++){const k=e.getElementById(`batBranchBadge_${r}`),P=((v=(t=i.battery)==null?void 0:t.modules)==null?void 0:v[r-1])||((I=(f=i.battery)==null?void 0:f.module_entities)==null?void 0:I[r-1])||{};k==null||k.addEventListener("click",()=>{var A;const B=P.power_entity||P.current_entity||P.soc_entity||((A=i.battery)==null?void 0:A.soc_entity);this._fireMoreInfo(B)})}}_updateValues(){var F,xe,Pe,Ne,Ve,Ae,rt,at,lt,dt,kt,Et,$t,Bt,St,Ct,It,Tt,Mt,Lt,Ft,Pt,Nt,Vt,At,Rt,zt,Dt,Wt,qt,Ht,Gt,jt,Ot,Yt,Kt,Ut,Jt,Xt,Qt,Zt,ei,ti,ii,oi,si,ni,ri,ai,li,di,ci,pi,gi,hi,_i,ui,bi,yi,fi,vi,mi,wi,xi,ki,Ei,$i,Bi,Si,Ci,Ii,Ti,Mi,Li,Fi,Pi,Ni,Vi,Ai,Ri,zi,Di,Wi,qi,Hi,Gi,ji,Oi,Yi,Ki,Ui,Ji,Xi,Qi,Zi;if(!this._nodes.dailySolarYield)return;const e=this._config||O,i=this._language==="en"?"kW":"кВт",p=((F=e.solar)==null?void 0:F.pv_count)||((Pe=(xe=e.solar)==null?void 0:xe.strings)==null?void 0:Pe.length)||3;let a=0,g=!1;for(let n=1;n<=p;n++){const M=(Ve=(Ne=e.solar)==null?void 0:Ne.strings)==null?void 0:Ve[n-1],K=(M==null?void 0:M.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),D=(M==null?void 0:M.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),j=(M==null?void 0:M.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:"");if(this._getEntityState(j)||this._getEntityState(K)||this._getEntityState(D)){g=!0;break}}for(let n=1;n<=p;n++){const M=this.shadowRoot.getElementById(`pvVal_${n}`),K=this.shadowRoot.getElementById(`pvVolt_${n}`),D=this.shadowRoot.getElementById(`pvCurr_${n}`),j=(rt=(Ae=e.solar)==null?void 0:Ae.strings)==null?void 0:rt[n-1],Je=(j==null?void 0:j.voltage_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_voltage`:""),J=(j==null?void 0:j.current_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_current`:""),Ie=(j==null?void 0:j.power_entity)||(n<=3?`sensor.deye_12k_inverter_pv${n}_power`:""),be=this._getEntityState(Je),fe=this._getEntityState(J),W=this._getEntityState(Ie);let Z=0,X=0,oe=0;W?oe=this._formatPower(W).kw:be&&fe?oe=be.val*fe.val/1e3:be?oe=0:oe=g?0:4,be?Z=be.val:Z=g?0:380+n*4.5,fe?X=fe.val:W&&Z>0?X=oe*1e3/Z:X=g?0:3.12+n*.28,a+=oe,M&&(M.innerText=`${oe.toFixed(3)} ${i}`),K&&(K.innerText=`${Z.toFixed(1)} V`),D&&(D.innerText=`${X.toFixed(2)} A`)}const c=this._getEntityState((at=e.solar)==null?void 0:at.total_power_entity);let x=0;c?x=this._formatPower(c).kw:x=a,this._nodes.totalPvPowerBadge.innerText=`${x.toFixed(3)} ${i}`;const h=this._getEntityState((lt=e.solar)==null?void 0:lt.daily_yield_entity),E=h?h.val:g?0:48.6;this._nodes.dailySolarYield.innerText=E.toFixed(1);const S=((dt=e.solar)==null?void 0:dt.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=S.toFixed(1);const b=Math.min(100,Math.round(E/S*100));this._nodes.solarProgressBar.style.width=`${b}%`;const C=this._getEntityState((kt=e.inverter)==null?void 0:kt.power_entity);this._nodes.inverterPowerVal&&((Et=e.inverter)!=null&&Et.power_entity&&C?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(C,0).str):this._nodes.inverterPowerVal.style.display="none");const _=this._getEntityState(($t=e.inverter)==null?void 0:$t.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=_?_.val.toFixed(2):"41,20";const l=this._getEntityState((Bt=e.inverter)==null?void 0:Bt.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=l?l.val.toFixed(2):"38,40";const s=this._getEntityState((St=e.inverter)==null?void 0:St.voltage_entity);this._nodes.inverterVolt.innerText=s?s.val.toFixed(2):"231,45";const o=this._getEntityState((Ct=e.inverter)==null?void 0:Ct.current_entity);this._nodes.inverterCurrent.innerText=o?o.val.toFixed(2):"8,60";const t=this._getEntityState((It=e.inverter)==null?void 0:It.frequency_entity);this._nodes.inverterFreq.innerText=t?t.val.toFixed(2):"50,01";const v=((Tt=e.wind)==null?void 0:Tt.show)!==!1||((Mt=e.aux)==null?void 0:Mt.type)==="wind",f=this.shadowRoot.getElementById("windStationContainer"),I=this._nodes.auxNode;let r=0;if(f)if(!v)f.classList.add("hidden");else{f.classList.remove("hidden");const n=((Lt=e.wind)==null?void 0:Lt.turbine_count)||((Pt=(Ft=e.wind)==null?void 0:Ft.turbines)==null?void 0:Pt.length)||2,M=((Nt=e.wind)==null?void 0:Nt.turbines)||[];let K=0,D=0,j=!1,Je=!1;for(let W=0;W<n;W++){const Z=M[W]||{power_entity:`sensor.wind_turbine_${W+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((Vt=e.wind)==null?void 0:Vt.animation_threshold)||50},X=this.shadowRoot.getElementById(`turbinePower_${W+1}`),oe=this.shadowRoot.getElementById(`turbineStatus_${W+1}`),ct=this.shadowRoot.getElementById(`turbineIcon_${W+1}`),Re=this.shadowRoot.getElementById(`turbineCard_${W+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${W+1}`);const bt=this.shadowRoot.getElementById(`turbineDailyVal_${W+1}`),yt=this.shadowRoot.getElementById(`turbineMonthlyVal_${W+1}`),pt=this.shadowRoot.getElementById(`turbineEnergyFooter_${W+1}`),gt=this._hass?0:W===0?1.56:.22,Xe=this._getEntityState(Z.power_entity),it=this._formatPower(Xe,gt);X&&(X.innerText=it.str),r+=it.kw;let ot=it.kw*1e3;Xe&&Xe.unit==="W"&&(ot=Xe.val);const ke=Z.animation_threshold??((At=e.wind)==null?void 0:At.animation_threshold)??50,Te=ct==null?void 0:ct.querySelector(".turbine-rotor"),Me=Z.rpm_entity||Z.speed_entity||((Rt=e.wind)==null?void 0:Rt.rpm_entity)||((zt=e.wind)==null?void 0:zt.speed_entity)||(W===0?"sensor.wind_rpm":"");let U=Me&&((Dt=this._hass)!=null&&Dt.states[Me])?this._getEntityState(Me):null;if(!U&&W===0&&((Wt=this._hass)!=null&&Wt.states["sensor.wind_rpm"])&&(U=this._getEntityState("sensor.wind_rpm")),ot>=ke||U&&typeof U.val=="number"&&U.val>0){Te&&Te.classList.add("spinning"),Re&&(Re.classList.add("glow-wind"),Re.style.borderColor="rgba(6, 182, 212, 0.55)");const ht=((qt=e.wind)==null?void 0:qt.max_power)||3e3,vt=((Ht=e.wind)==null?void 0:Ht.max_rpm)||600;let _t=0;U&&typeof U.val=="number"&&U.val>0?_t=Math.min(1,Math.max(0,U.val/vt)):_t=Math.min(1,Math.max(0,(ot-ke)/(ht-ke)));const st=(3.2-_t*2.75).toFixed(2);Te&&Te.style.setProperty("--turbine-speed",`${st}s`),oe&&(oe.innerText=this._t("wind_gen"),oe.style.color="#67e8f9")}else Te&&Te.classList.remove("spinning"),Re&&(Re.classList.remove("glow-wind"),Re.style.borderColor="rgba(255, 255, 255, 0.08)"),oe&&(oe.innerText=this._t("wind_calm"),oe.style.color="#94a3b8");const Q=this.shadowRoot.getElementById(`turbineRpmBox_${W+1}`);if(Q)if(U&&U.raw!=="unavailable"&&U.raw!=="unknown"&&typeof U.val=="number"&&!isNaN(U.val)){Q.style.display="inline";const vt=U.unit?U.unit:"RPM";Q.innerHTML=`<span id="turbineRpmVal_${W+1}">${Math.round(U.val)}</span> ${vt}`}else Q.style.display="none";const se=this._getEntityState(Z.daily_energy_entity),ee=this._getEntityState(Z.monthly_energy_entity);bt&&(bt.innerText=se&&typeof se.val=="number"&&!isNaN(se.val)?se.val.toFixed(2):"0.00"),yt&&(yt.innerText=ee&&typeof ee.val=="number"&&!isNaN(ee.val)?ee.val.toFixed(1):"0.0");const ft=!!(Z.daily_energy_entity||Z.monthly_energy_entity);pt&&(pt.style.display=ft?"flex":"none"),se&&typeof se.val=="number"&&!isNaN(se.val)&&(K+=se.val,j=!0),ee&&typeof ee.val=="number"&&!isNaN(ee.val)&&(D+=ee.val,Je=!0)}const J=this.shadowRoot.getElementById("windTotalDailyVal"),Ie=this.shadowRoot.getElementById("windTotalMonthlyVal"),be=this._getEntityState((Gt=e.wind)==null?void 0:Gt.daily_energy_entity),fe=this._getEntityState((jt=e.wind)==null?void 0:jt.monthly_energy_entity);J&&(be&&typeof be.val=="number"&&!isNaN(be.val)?J.innerText=be.val.toFixed(2):j?J.innerText=K.toFixed(2):J.innerText="0.00"),Ie&&(fe&&typeof fe.val=="number"&&!isNaN(fe.val)?Ie.innerText=fe.val.toFixed(1):Je?Ie.innerText=D.toFixed(1):Ie.innerText="0.0")}let k=0;if(I)if(((Ot=e.aux)==null?void 0:Ot.type)==="none"||((Yt=e.aux)==null?void 0:Yt.type)==="wind")I.classList.add("hidden");else{I.classList.remove("hidden");const n=this._getEntityState((Kt=e.aux)==null?void 0:Kt.power_entity),M=this._formatPower(n,2);k=M.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=M.str);const K={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let D=(Ut=e.aux)==null?void 0:Ut.title;((Jt=e.aux)==null?void 0:Jt.type)==="microinverter"&&(!D||D==="Вітрогенератор")?D="Мікроінвертор":(Xt=e.aux)!=null&&Xt.type&&K[e.aux.type]&&(!D||D==="Вітрогенератор")?D=K[e.aux.type]:D||(D="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=D),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=H[(Qt=e.aux)==null?void 0:Qt.type]||H.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Zt=e.aux)==null?void 0:Zt.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),I.style.borderColor="rgba(192, 132, 252, 0.45)",I.style.background="rgba(88, 28, 135, 0.35)",I.classList.remove("glow-wind"),I.classList.add("glow-aux")}const P=this._getEntityState((ei=e.grid)==null?void 0:ei.power_entity),B=P?P.unit==="W"?P.val/1e3:P.val:0,A=((ti=e.grid)==null?void 0:ti.power_sign)||((ii=e.grid)!=null&&ii.invert_power?"inverted":"deye"),te=((oi=e.grid)==null?void 0:oi.selling_enabled)===!0,he=(((si=e.grid)==null?void 0:si.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3,z=this._getEntityState((ni=e.grid)==null?void 0:ni.status_entity),G=this._getEntityState(((ri=e.grid)==null?void 0:ri.voltage_entity)||((ai=e.inverter)==null?void 0:ai.voltage_entity)),d=((li=e.grid)==null?void 0:li.voltage_threshold)!==void 0?e.grid.voltage_threshold:90;let u=!0;if(z){const n=String(z.raw||z.val).toLowerCase();(n==="off"||n==="false"||n==="0"||n==="disconnected"||n==="offline"||n==="unavailable"||n==="unknown")&&(u=!1)}else G&&typeof G.val=="number"&&!isNaN(G.val)&&G.val<d&&(u=!1);let m=!1,y=!1,$=0;u?($=Math.abs(B),$>=he&&(A==="deye"?B<0?m=!0:y=!0:B>0?m=!0:y=!0),m&&!te&&(m=!1)):($=0,m=!1,y=!1);const N=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(u?(this._nodes.gridPowerVal.innerText=`${$.toFixed(3)} ${i}`,m?this._nodes.gridPowerVal.style.color="#34d399":y?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${i}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(u?m?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):y?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),N&&(u?(N.classList.add("glow-grid"),N.style.borderColor="rgba(56, 189, 248, 0.4)"):(N.classList.remove("glow-grid"),N.style.borderColor="rgba(239, 68, 68, 0.45)"));const q=this._getEntityState((di=e.grid)==null?void 0:di.import_daily_entity);this._nodes.gridImportDaily.innerText=q?`${q.val.toFixed(2)} kWh`:"0.00 kWh";const ne=this._getEntityState((ci=e.grid)==null?void 0:ci.export_daily_entity);this._nodes.gridExportDaily.innerText=ne?`${ne.val.toFixed(2)} kWh`:"0.00 kWh";const le=this.shadowRoot.getElementById("nonEssentialNode"),ve=!!((pi=e.grid)!=null&&pi.show_non_essential&&((gi=e.grid)!=null&&gi.non_essential_power_entity))||((hi=e.grid)==null?void 0:hi.show_non_essential)!==!1&&!!((_i=e.grid)!=null&&_i.non_essential_power_entity);let de=0;if(le)if(ve){le.classList.remove("hidden");const n=this._getEntityState(e.grid.non_essential_power_entity),M=this._formatPower(n,0);de=M.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=M.str)}else le.classList.add("hidden");const _e=this.shadowRoot.getElementById("carNode"),ye=!!((ui=e.grid)!=null&&ui.show_car&&((bi=e.grid)!=null&&bi.car_power_entity))||((yi=e.grid)==null?void 0:yi.show_car)!==!1&&!!((fi=e.grid)!=null&&fi.car_power_entity);let re=0;if(_e)if(ye){_e.classList.remove("hidden");const n=this._getEntityState(e.grid.car_power_entity),M=this._formatPower(n,0);re=M.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=M.str)}else _e.classList.add("hidden");const ie=this._getEntityState((vi=e.battery)==null?void 0:vi.soc_entity),We=ie?ie.val:80;this._nodes.masterBatterySoc.innerText=`${We.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const me=this._getEntityState((mi=e.battery)==null?void 0:mi.power_entity),ue=this._getEntityState((wi=e.battery)==null?void 0:wi.current_entity),Ee=me?me.unit==="W"?me.val/1e3:me.val:0,qe=((xi=e.battery)==null?void 0:xi.power_sign)||((ki=e.battery)!=null&&ki.invert_power?"standard":"deye");let ce=!1,ae=!1;const we=Math.abs(Ee);if(we>=.02?qe==="deye"?Ee<0?ce=!0:ae=!0:Ee>0?ce=!0:ae=!0:ue&&Math.abs(ue.val)>=.3&&(qe==="deye"?ue.val<0?ce=!0:ae=!0:ue.val>0?ce=!0:ae=!0),this._isCharging=ce,this._isDischarging=ae,this._nodes.masterBatteryFlowHint){let n=this._t("bat_idle"),M="#94a3b8";ce?(n=this._t("bat_dir_charge"),M="#34d399"):ae&&(n=this._t("bat_dir_discharge"),M="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${we.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${M}; font-weight: 700; font-size: 14px;">${n}</span>`}const Le=this._getEntityState((Ei=e.battery)==null?void 0:Ei.voltage_entity),He=Le?Le.val.toFixed(2):"53.24",Ge=ue?ue.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${He.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${Ge.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=(($i=e.battery)==null?void 0:$i.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const n=((Bi=e.battery)==null?void 0:Bi.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${n}%`}const je=y?$:0,Oe=ae?we:0,Ye=x+r+(k>0?k:0)+je+Oe,Ke=(ce?we:0)+(m?$:0)+de+re,$e=Math.max(0,Ye-Ke),w=this._getEntityState((Si=e.inverter)==null?void 0:Si.self_consumption_entity);let V=0,R=this._getEntityState((Ci=e.load)==null?void 0:Ci.essential_power_entity);!R&&(!((Ii=e.load)!=null&&Ii.essential_power_entity)||((Ti=e.load)==null?void 0:Ti.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((Mi=e.load)==null?void 0:Mi.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(R=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const pe=!!(R&&typeof R.val=="number"&&!isNaN(R.val)&&R.val>0);let Y=0;if(pe)Y=Math.max(0,R.unit==="W"?R.val/1e3:R.val),w&&typeof w.val=="number"&&!isNaN(w.val)?V=Math.max(0,w.unit==="W"?w.val/1e3:w.val):V=Math.max(0,$e-Y);else{if(w&&typeof w.val=="number"&&!isNaN(w.val))V=Math.max(0,w.unit==="W"?w.val/1e3:w.val);else{const M=(((Li=e.inverter)==null?void 0:Li.standby_power)!==void 0?e.inverter.standby_power:100)/1e3;V=Math.min($e,M)}Y=Math.max(0,$e-V)}this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((Fi=e.inverter)==null?void 0:Fi.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",V<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(V*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${V.toFixed(3)} ${i}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${Y.toFixed(3)} ${i}`;const Fe=this._getEntityState((Pi=e.load)==null?void 0:Pi.daily_house_entity);this._nodes.dailyHouseKwh.innerText=Fe?`${Fe.val.toFixed(2)} kWh`:"12,40 kWh";let Be=0;(((Ni=e.load)==null?void 0:Ni.subloads)||[]).forEach((n,M)=>{const K=this.shadowRoot.getElementById(`subloadVal_${M}`),D=this._getEntityState(n.entity),j=this._formatPower(D,2);Be+=j.kw,K&&(K.innerText=j.str)});const Se=((Vi=e.battery)==null?void 0:Vi.parallel_batteries)||((Ri=(Ai=e.battery)==null?void 0:Ai.modules)==null?void 0:Ri.length)||2;let Ce=0;for(let n=0;n<Se;n++){const M=((Di=(zi=e.battery)==null?void 0:zi.modules)==null?void 0:Di[n])||((qi=(Wi=e.battery)==null?void 0:Wi.module_entities)==null?void 0:qi[n])||{},K=M.capacity_kwh!==void 0?parseFloat(M.capacity_kwh):n===0?7.88:n===1?5.12:(((Hi=e.battery)==null?void 0:Hi.capacity_kwh)||13)/Se;Ce+=isNaN(K)?0:K}Ce<=0&&(Ce=parseFloat((Gi=e.battery)==null?void 0:Gi.capacity_kwh)||13);const tt=this._getEntityState(((ji=e.battery)==null?void 0:ji.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),nt=tt&&!isNaN(tt.val)?tt.val:null;if(this._nodes.batCapacityVal){const n=nt!==null?nt:Ce;this._nodes.batCapacityVal.innerText=`${n.toFixed(2).replace(".",",")} kWh`}const ut=(Oi=e.battery)==null?void 0:Oi.charge_daily_entity;let Ue=this._getEntityState(ut);Ue||(Ue=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge")||this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const ge=(Yi=e.battery)==null?void 0:Yi.discharge_daily_entity;let T=this._getEntityState(ge);T||(T=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=Ue?`${Ue.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=T?`${T.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const L=[];for(let n=1;n<=Se;n++){const M=this.shadowRoot.getElementById(`batPackSoc_${n}`),K=this.shadowRoot.getElementById(`batPackVolt_${n}`),D=this.shadowRoot.getElementById(`batPackCurr_${n}`),j=this.shadowRoot.getElementById(`batPackPower_${n}`),Je=this.shadowRoot.getElementById(`batPackTempVal_${n}`),J=this.shadowRoot.getElementById(`batPackStateTag_${n}`),Ie=this.shadowRoot.getElementById(`batPackKwh_${n}`),be=this.shadowRoot.getElementById(`batPackBar1_${n}`),fe=this.shadowRoot.getElementById(`batPackBar2_${n}`),W=this.shadowRoot.getElementById(`batPackBar3_${n}`),Z=this.shadowRoot.getElementById(`batPackBar4_${n}`),X=((Ui=(Ki=e.battery)==null?void 0:Ki.modules)==null?void 0:Ui[n-1])||((Xi=(Ji=e.battery)==null?void 0:Ji.module_entities)==null?void 0:Xi[n-1])||{},oe=X.soc_entity||X.soc||`sensor.bms_rack${n}_soc`,ct=X.current_entity||`sensor.bms_rack${n}_current`,Re=X.voltage_entity||X.volt||`sensor.bms_rack${n}_voltage`,bt=X.power_entity||`sensor.bms_rack${n}_power`,yt=X.temperature_entity||X.temp||`sensor.bms_rack${n}_temperature`,pt=this._getEntityState(oe),gt=this._getEntityState(ct),Xe=this._getEntityState(Re),it=this._getEntityState(bt),ot=this._getEntityState(yt),ke=pt?pt.val:n===1?82:n===2?85:75,Te=Xe?Xe.val:n===1?54.1:n===2?54:52.4,Me=gt?gt.val:n===1?18.4:n===2?25.2:8.2,U=ot?ot.val:n===1?38.2:n===2?21:21.5;let ze=0;it?ze=Math.abs(this._formatPower(it).kw):ze=Te*Math.abs(Me)/1e3,M&&(M.innerText=`${ke.toFixed(0)}%`),K&&(K.innerText=`${Te.toFixed(1)} V`),D&&(D.innerText=`${Math.abs(Me).toFixed(1)} A`),j&&(j.innerText=`${ze.toFixed(2)} ${i}`),Je&&(Je.innerText=`${U.toFixed(1)}`);let Q=!1;ae?Q=!1:ce?Q=!0:gt?Q=(((Qi=e.battery)==null?void 0:Qi.power_sign)||"deye")==="deye"?Me<0:Me>0:Q=Me<0;const se=this.shadowRoot.getElementById(`batBranchBadge_${n}`);se&&(ze<.02?(se.className="es-bat-branch-badge es-mono idle",se.innerHTML=`<span>0.00 ${i}</span>`):Q?(se.className="es-bat-branch-badge es-mono charge",se.innerHTML=`<span>${ze.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`):(se.className="es-bat-branch-badge es-mono discharge",se.innerHTML=`<span>${ze.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));const ee=this.shadowRoot.getElementById(`batPackCard_${n}`),ft=ee==null?void 0:ee.querySelector(".es-battery-gauge"),ht=ee==null?void 0:ee.querySelector(".es-battery-gauge-nipple");ee&&(ee.style.borderColor=Q?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),ft&&(ft.style.borderColor=Q?"#10b981":"#ef4444"),ht&&(ht.style.background=Q?"#10b981":"#ef4444"),J&&(Q?(J.className="es-bat-state-tag charge",J.innerText=this._t("bat_charge"),J.style.color="#34d399",J.style.background="rgba(16, 185, 129, 0.18)",J.style.borderColor="rgba(16, 185, 129, 0.4)"):(J.className="es-bat-state-tag discharge",J.innerText=this._t("bat_discharge"),J.style.color="#f87171",J.style.background="rgba(239, 68, 68, 0.18)",J.style.borderColor="rgba(239, 68, 68, 0.4)")),j&&(j.style.color=Q?"#34d399":"#f87171"),D&&(D.style.color=Q?"#38bdf8":"#f87171");const _t=((X.capacity_kwh!==void 0?parseFloat(X.capacity_kwh):(((Zi=e.battery)==null?void 0:Zi.capacity_kwh)||10)/Se)*(ke/100)).toFixed(2);Ie&&(Ie.innerText=`${_t} kWh`);const st=Q?"active-green":"active-red";be&&fe&&W&&Z&&(be.className=`es-bat-bar ${ke>=10?st:""}`,fe.className=`es-bat-bar ${ke>=35?st:""}`,W.className=`es-bat-bar ${ke>=65?st:""}`,Z.className=`es-bat-bar ${ke>=85?st:""}`),L.push({kwNum:ze,isChg:Q})}this._updateFlowPaths(),this._updateFlowAnimations(u?B:0,m,y,x,Y,we,ce,ae,re,L,de,Be,k),this._updateControlSliders()}_setupResizeObserver(){var i;if(this._resizeObserver)return;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),requestAnimationFrame(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,i,p,a,g,c,x,h,E;try{const S=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!S)return;const b=S.getBoundingClientRect();if(b.width===0||b.height===0)return;const C=this._config||O,_=(d,u=.5,m=.5)=>{if(!d)return null;const y=d.getBoundingClientRect();return{x:Math.round(y.left-b.left+y.width*u),y:Math.round(y.top-b.top+y.height*m)}},l=(d,u,m)=>{const y=this.shadowRoot.getElementById(d),$=this.shadowRoot.getElementById(u);y&&y.setAttribute("d",m||""),$&&$.setAttribute("d",m||"")},s=this.shadowRoot.getElementById("gridNode"),o=this.shadowRoot.getElementById("inverterNode"),t=this.shadowRoot.getElementById("essentialNode"),v=this.shadowRoot.getElementById("totalPvPowerBadge"),f=this.shadowRoot.getElementById("masterBatteryHub"),I=this.shadowRoot.getElementById("carNode");if(s&&o){const d=s.getBoundingClientRect(),u=o.getBoundingClientRect();if(d.bottom<u.top+30){const y=_(s,.7,1),$=_(o,.2,0);if(y&&$){const N=Math.round((y.y+$.y)/2),q=`M ${y.x} ${y.y} C ${y.x} ${N}, ${$.x} ${N}, ${$.x} ${$.y}`;l("pathGridInvBase","pathGridInvFlow",q)}}else{const y=Math.round(u.top-b.top+u.height*.55),$=Math.round(d.right-b.left),N=Math.round(u.left-b.left),q=Math.round(d.top-b.top+d.height*.5);let ne="";if(Math.abs(q-y)<=8)ne=`M ${$} ${y} L ${N} ${y}`;else{const le=Math.round($+24);ne=`M ${$} ${q} C ${le} ${q}, ${le} ${y}, ${N} ${y}`}l("pathGridInvBase","pathGridInvFlow",ne)}}if(o&&t){const d=t.getBoundingClientRect(),u=o.getBoundingClientRect();if(d.bottom<u.top+30){const y=_(o,.8,0),$=_(t,.3,1);if(y&&$){const N=Math.round((y.y+$.y)/2),q=`M ${y.x} ${y.y} C ${y.x} ${N}, ${$.x} ${N}, ${$.x} ${$.y}`;l("pathInvLoadBase","pathInvLoadFlow",q)}}else{const y=Math.round(u.top-b.top+u.height*.55),$=Math.round(u.right-b.left),N=Math.round(d.left-b.left),q=Math.round(d.top-b.top+d.height*.5);let ne="";if(Math.abs(q-y)<=8)ne=`M ${$} ${y} L ${N} ${y}`;else{const le=Math.round(N-24);ne=`M ${$} ${y} C ${le} ${y}, ${le} ${q}, ${N} ${q}`}l("pathInvLoadBase","pathInvLoadFlow",ne)}}if(v&&o){const d=_(v,.5,1),u=_(o,.5,0);if(d&&u){const m=`M ${d.x} ${d.y} L ${u.x} ${u.y}`;l("pathSolarInvBase","pathSolarInvFlow",m)}}if(o&&f){const d=_(o,.5,1),u=_(f,.5,0);if(d&&u){const m=`M ${d.x} ${d.y} L ${u.x} ${u.y}`;l("pathInvBatBase","pathInvBatFlow",m)}}const r=this.shadowRoot.getElementById("nonEssentialNode"),k=r&&!r.classList.contains("hidden")&&r.offsetHeight>0,P=I&&!I.classList.contains("hidden")&&I.offsetHeight>0;if(s&&k){const d=_(s,.5,1),u=_(r,.5,0);if(d&&u){const m=`M ${d.x} ${d.y} L ${u.x} ${u.y}`;l("pathGridNonEssBase","pathGridNonEssFlow",m)}}else l("pathGridNonEssBase","pathGridNonEssFlow","");if(P){const d=k?r:s;if(d){const u=_(d,.5,1),m=_(I,.5,0);if(u&&m){const y=`M ${u.x} ${u.y} L ${m.x} ${m.y}`;l("pathNonEssCarBase","pathNonEssCarFlow",y)}}else l("pathNonEssCarBase","pathNonEssCarFlow","")}else l("pathNonEssCarBase","pathNonEssCarFlow","");const B=this.shadowRoot.getElementById("subloadsBusContainer");if(t&&B){const d=_(t,.5,1),u=_(B,.5,0);if(d&&u){const m=`M ${d.x} ${d.y} L ${u.x} ${u.y}`;l("pathLoadSubloadsBase","pathLoadSubloadsFlow",m)}}else l("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const A=this.shadowRoot.getElementById("auxNode");if(o&&A&&!A.classList.contains("hidden")&&A.offsetHeight>0){const d=_(A,.35,1),u=_(o,.9,0);if(d&&u){const m=Math.round((d.y+u.y)/2),y=`M ${d.x} ${d.y} C ${d.x} ${m}, ${u.x} ${m}, ${u.x} ${u.y}`;l("pathInvAuxBase","pathInvAuxFlow",y)}}else l("pathInvAuxBase","pathInvAuxFlow","");l("pathBatStemBase","pathBatStemFlow","");const te=this.shadowRoot.getElementById("windStationContainer"),z=((i=C.wind)==null?void 0:i.show)!==!1||((p=C.aux)==null?void 0:p.type)==="wind"?((a=C.wind)==null?void 0:a.turbine_count)||((c=(g=C.wind)==null?void 0:g.turbines)==null?void 0:c.length)||2:0;for(let d=1;d<=4;d++)if(d<=z&&te&&!te.classList.contains("hidden")){const u=this.shadowRoot.getElementById(`turbineCard_${d}`);if(u&&f){const m=_(u,.5,1),y=z===1?.5:.28+(d-1)/(z-1)*.44,$=_(f,y,0);if(m&&$){const N=`M ${m.x} ${m.y} L ${$.x} ${$.y}`;l(`pathTurbine${d}Base`,`pathTurbine${d}Flow`,N)}}else l(`pathTurbine${d}Base`,`pathTurbine${d}Flow`,"")}else l(`pathTurbine${d}Base`,`pathTurbine${d}Flow`,"");const G=((x=C.battery)==null?void 0:x.parallel_batteries)||((E=(h=C.battery)==null?void 0:h.modules)==null?void 0:E.length)||2;for(let d=1;d<=8;d++){const u=this.shadowRoot.getElementById(`batPackCard_${d}`),m=this.shadowRoot.getElementById(`batBranchBadge_${d}`);if(d<=G&&f&&u){const y=_(f,.5,1),$=_(u,.5,0);if(y&&$){const N=Math.round(y.y+($.y-y.y)*.45);let q="";Math.abs(y.x-$.x)<=4?q=`M ${y.x} ${y.y} L ${$.x} ${$.y}`:q=`M ${y.x} ${y.y} C ${y.x} ${N}, ${$.x} ${N}, ${$.x} ${$.y}`,l(`pathBat${d}Base`,`pathBat${d}Flow`,q),m&&(m.style.left=`${$.x}px`,m.style.top=`${N}px`,m.style.display="flex")}else l(`pathBat${d}Base`,`pathBat${d}Flow`,""),m&&(m.style.display="none")}else l(`pathBat${d}Base`,`pathBat${d}Flow`,""),m&&(m.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,i,p,a,g;try{const c=this._config||O,x=this.shadowRoot.getElementById("solarBusSvg"),h=((e=c.solar)==null?void 0:e.pv_count)||((p=(i=c.solar)==null?void 0:i.strings)==null?void 0:p.length)||3;if(x&&h>0){const b=x.getBoundingClientRect(),C=this.shadowRoot.getElementById("pvPanel_1"),_=this.shadowRoot.getElementById(`pvPanel_${h}`),l=this.shadowRoot.getElementById("solarBusBase"),s=this.shadowRoot.getElementById("solarFlowCollector"),o=this.shadowRoot.getElementById("solarBusStemBase"),t=this.shadowRoot.getElementById("solarBusStemFlow"),v=this.shadowRoot.getElementById("solarBusFeeders");if(C&&_&&b.width>0){const f=C.getBoundingClientRect(),I=_.getBoundingClientRect(),r=Math.round(f.left-b.left+f.width/2),k=Math.round(I.left-b.left+I.width/2),P=13,B=Math.round((r+k)/2);if(l&&(l.setAttribute("x1",r),l.setAttribute("y1",P),l.setAttribute("x2",k),l.setAttribute("y2",P)),s&&(s.setAttribute("x1",r),s.setAttribute("y1",P),s.setAttribute("x2",k),s.setAttribute("y2",P)),o&&(o.setAttribute("x1",B),o.setAttribute("y1",P),o.setAttribute("x2",B),o.setAttribute("y2",26)),t&&(t.setAttribute("x1",B),t.setAttribute("y1",P),t.setAttribute("x2",B),t.setAttribute("y2",26)),v){let A="";for(let te=1;te<=h;te++){const he=this.shadowRoot.getElementById(`pvPanel_${te}`);if(he){const z=he.getBoundingClientRect(),G=Math.round(z.left-b.left+z.width/2);A+=`
                  <line x1="${G}" y1="0" x2="${G}" y2="${P}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${G}" y1="0" x2="${G}" y2="${P}" stroke="#fbbf24" stroke-width="2.5" />
                `}}v.innerHTML=A}}}const E=this.shadowRoot.getElementById("subloadsBusSvg"),S=((g=(a=c.load)==null?void 0:a.subloads)==null?void 0:g.length)||3;if(E&&S>0){const b=E.getBoundingClientRect(),C=this.shadowRoot.getElementById("subloadCard_0"),_=this.shadowRoot.getElementById(`subloadCard_${S-1}`),l=this.shadowRoot.getElementById("essentialNode"),s=this.shadowRoot.getElementById("subloadsBusBase"),o=this.shadowRoot.getElementById("subloadsFlowCollector"),t=this.shadowRoot.getElementById("subloadsBusStemBase"),v=this.shadowRoot.getElementById("subloadsBusStemFlow"),f=this.shadowRoot.getElementById("subloadsBusFeeders");if(C&&_&&b.width>0){const I=C.getBoundingClientRect(),r=_.getBoundingClientRect(),k=Math.round(I.left-b.left+I.width/2),P=Math.round(r.left-b.left+r.width/2),B=13;let A=Math.round((k+P)/2);if(l){const z=l.getBoundingClientRect();A=Math.round(z.left-b.left+z.width/2)}const te=Math.min(k,A),he=Math.max(P,A);if(s&&(s.setAttribute("x1",te),s.setAttribute("y1",B),s.setAttribute("x2",he),s.setAttribute("y2",B)),o&&(o.setAttribute("x1",te),o.setAttribute("y1",B),o.setAttribute("x2",he),o.setAttribute("y2",B)),t&&(t.setAttribute("x1",A),t.setAttribute("y1",0),t.setAttribute("x2",A),t.setAttribute("y2",B)),v&&(v.setAttribute("x1",A),v.setAttribute("y1",0),v.setAttribute("x2",A),v.setAttribute("y2",B)),f){let z="";for(let G=0;G<S;G++){const d=this.shadowRoot.getElementById(`subloadCard_${G}`);if(d){const u=d.getBoundingClientRect(),m=Math.round(u.left-b.left+u.width/2);z+=`
                  <line x1="${m}" y1="${B}" x2="${m}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${m}" y1="${B}" x2="${m}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}f.innerHTML=z}}}}catch{}}_applyFlowAnimation(e,i,p,a,g){if(!e)return;if(!g){e.setAttribute("class",`flow-pulse ${i} inactive`),e.style.opacity="0",e.style.animation="none";return}const c=p?"flow-reverse":"flow-forward",x=p?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${i} ${c}`),e.style.opacity="1",e.style.setProperty("--flow-speed",a),e.style.animation=`${x} ${a} linear infinite`}_updateFlowAnimations(e,i,p,a,g,c,x,h,E,S=[],b=0,C=0,_=0){var ae,we,Qe,Le,He,Ge,je,Oe,Ye,Ze,et,Ke,$e;const l=this._config||O,s=((ae=l.animations)==null?void 0:ae.enabled)!==!1,o=((we=l.animations)==null?void 0:we.speed)||1.2,t=(w,V=10)=>{const R=Math.abs(w);if(R<.05)return"2.5s";const pe=Math.min(1,R/V);return`${Math.max(.4,(2.6-pe*1.9)*(o/1.2)).toFixed(2)}s`},v=this.shadowRoot.getElementById("pathGridInvFlow"),f=Math.abs(e),I=(((Qe=l.grid)==null?void 0:Qe.min_power_threshold)!==void 0?l.grid.min_power_threshold:50)/1e3,r=((Le=l.grid)==null?void 0:Le.selling_enabled)===!0,k=s&&f>=I&&(p||i&&r);this._applyFlowAnimation(v,"flow-grid",i,t(e,10),k);const P=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(P,"flow-solar",!1,t(a,12),s&&a>=.05);const B=this.shadowRoot.getElementById("pathInvLoadFlow"),A=Math.abs(g);this._applyFlowAnimation(B,"flow-load",!1,t(g,10),s&&A>=.05);const te=this.shadowRoot.getElementById("pathInvBatFlow"),he=Math.abs(c),z=s&&he>=.02&&(x||h),G=x?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(te,G,h,t(c,8),z);const d=this.shadowRoot.getElementById("pathGridNonEssFlow"),u=Math.abs(b);this._applyFlowAnimation(d,"flow-grid",!1,t(b,5),s&&u>=.05);const m=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),y=Math.abs(E);this._applyFlowAnimation(m,"flow-car",!1,t(E,7),s&&y>=.05);const $=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),N=Math.abs(C||g);this._applyFlowAnimation($,"flow-load",!1,t(N,8),s&&N>=.05);const q=this.shadowRoot.getElementById("pathInvAuxFlow"),ne=Math.abs(_);this._applyFlowAnimation(q,"flow-aux",!0,t(_,5),s&&ne>=.05);const le=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(le,G,h,t(c,8),z);const ve=this.shadowRoot.getElementById("solarFlowCollector"),de=this.shadowRoot.getElementById("solarBusStemFlow");if(ve)if(!s||a<.05)ve.style.opacity="0.2",ve.style.animation="none",de&&(de.style.opacity="0.2",de.style.animation="none");else{const w=t(a,12);ve.style.opacity="1",ve.setAttribute("class","flow-line"),ve.style.animation=`esDashflow ${w} linear infinite`,de&&(de.style.opacity="1",de.setAttribute("class","flow-line"),de.style.animation=`esDashflow ${w} linear infinite`)}const _e=this.shadowRoot.getElementById("subloadsFlowCollector"),ye=this.shadowRoot.getElementById("subloadsBusStemFlow");if(_e)if(!s||N<.05)_e.style.opacity="0.2",_e.style.animation="none",ye&&(ye.style.opacity="0.2",ye.style.animation="none");else{const w=t(N,8);_e.style.opacity="1",_e.setAttribute("class","flow-line"),_e.style.animation=`esDashflow ${w} linear infinite`,ye&&(ye.style.opacity="1",ye.setAttribute("class","flow-line"),ye.style.animation=`esDashflow ${w} linear infinite`)}const re=this.shadowRoot.getElementById("batteryFlowCollector"),ie=this.shadowRoot.getElementById("batteryBusStemFlow"),We=this.shadowRoot.getElementById("batteryBusFeeders"),me=h?"#f87171":"#34d399",ue=h?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(re)if(re.style.stroke=me,re.style.filter=ue,ie&&(ie.style.stroke=me,ie.style.filter=ue),!s||!z)re.style.opacity="0.2",re.style.animation="none",ie&&(ie.style.opacity="0.2",ie.style.animation="none");else{const w=t(c,8),V=h?"esDashflowRev":"esDashflow";re.style.opacity="1",re.setAttribute("class",h?"flow-line-reverse":"flow-line"),re.style.animation=`${V} ${w} linear infinite`,ie&&(ie.style.opacity="1",ie.setAttribute("class",h?"flow-line-reverse":"flow-line"),ie.style.animation=`${V} ${w} linear infinite`)}We&&We.querySelectorAll("line").forEach(w=>{if(w.style.stroke=me,w.style.filter=ue,!s||!z)w.style.opacity="0.2",w.style.animation="none";else{const V=t(c,8),R=h?"esDashflowRev":"esDashflow";w.style.opacity="1",w.setAttribute("class",h?"flow-line-reverse":"flow-line"),w.style.animation=`${R} ${V} linear infinite`}});for(let w=1;w<=8;w++){const V=this.shadowRoot.getElementById(`pathBat${w}Flow`);if(!V)continue;const R=S[w-1],pe=R?R.kwNum:0,Y=s&&(pe>=.02||z),Fe=h;this._applyFlowAnimation(V,G,Fe,t(pe||c,8),Y)}for(let w=0;w<6;w++){const V=this.shadowRoot.getElementById(`pathSubload${w}Flow`);if(!V)continue;const R=(Ge=(He=l.load)==null?void 0:He.subloads)==null?void 0:Ge[w],pe=R?this._getEntityState(R.entity):null,Y=pe?this._formatPower(pe,2).kw:w===0?2:w===1?3:4;this._applyFlowAnimation(V,"flow-load",!1,t(Y,8),s&&Y>=.05)}const Ee=((je=l.wind)==null?void 0:je.show)!==!1||((Oe=l.aux)==null?void 0:Oe.type)==="wind",qe=Ee?((Ye=l.wind)==null?void 0:Ye.turbine_count)||((et=(Ze=l.wind)==null?void 0:Ze.turbines)==null?void 0:et.length)||2:0,ce=((Ke=l.wind)==null?void 0:Ke.turbines)||[];for(let w=1;w<=4;w++){const V=this.shadowRoot.getElementById(`pathTurbine${w}Flow`);if(V)if(w<=qe&&Ee){const R=ce[w-1]||{},pe=this._hass?0:w===1?1.45:.85,Y=this._getEntityState(R.power_entity||`sensor.wind_turbine_${w}_power`);let Be=this._formatPower(Y,pe).kw*1e3;Y&&Y.unit==="W"&&(Be=Y.val);const Se=R.animation_threshold??(($e=l.wind)==null?void 0:$e.animation_threshold)??50,Ce=Be>=Se;this._applyFlowAnimation(V,"flow-wind",!1,t(Be/1e3,3),s&&Ce)}else this._applyFlowAnimation(V,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",xt),window.customCards=window.customCards||[],window.customCards.some(wt=>wt.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),De.EnergyStationCard=xt,De.I18N=mt,Object.defineProperty(De,Symbol.toStringTag,{value:"Module"})});
