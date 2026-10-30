(function(et,Q){typeof exports=="object"&&typeof module<"u"?Q(exports):typeof define=="function"&&define.amd?define(["exports"],Q):(et=typeof globalThis<"u"?globalThis:et||self,Q(et.EnergyStationCard={}))})(this,function(et){"use strict";const Q={title:"Energy Station",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0}},U='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',J={sun:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${U} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${U} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${U} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${U} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${U} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};class Na extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general"}set hass(e){this._hass=e}setConfig(e){this._config=JSON.parse(JSON.stringify(e||Q)),this.render()}connectedCallback(){this.render()}_valueChanged(e,i){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const p=e.split(".");let l=this._config;for(let d=0;d<p.length-1;d++)l[p[d]]||(l[p[d]]={}),l=l[p[d]];l[p[p.length-1]]=i;const n=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(n)}_switchTab(e){this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||Q)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load");const i=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(i),this.render()}render(){var i,p,l,n,d,v,y,S,I,f,u,m,c,g,s,a,t,h,$,F,P,A,r,w,D,z,j,H,O,_,x,E,b,C,W,G,ie,ae,me,re,oe,he,ue,Ie,Te,Ne,tt,ft,be,ve,it,ee,Se,de,je,at,$e,Le,Pe,st,xe,se,B,L,te,ge,ce,ot,Re,nt,mt,Et,Ae,rt,Ot,St,He,Be,Bt,lt,dt,vt,xt,wt,Ct,Rt,At,It,Tt,Dt,zt,ct,Wt,pt;if(!this._config)return;const e=this._config;this.shadowRoot.innerHTML=`
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
        <button class="tab-btn ${this._currentTab==="tariffs"?"active":""}" data-tab="tariffs">💰 Тарифи</button>
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
            <label>Масштаб картки (Zoom / Scale):</label>
            <div class="slider-row">
              <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${e.card_scale||1}">
              <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((e.card_scale||1)*100)}%</span>
            </div>
          </div>
          <div class="field-row">
            <label>Максимальна ширина картки (Max Width):</label>
            <select id="cardMaxWidth">
              <option value="1400px" ${e.max_width==="1400px"||!e.max_width?"selected":""}>1400px (Стандартна)</option>
              <option value="1600px" ${e.max_width==="1600px"?"selected":""}>1600px (Широка)</option>
              <option value="1800px" ${e.max_width==="1800px"?"selected":""}>1800px (Дуже широка / 2K)</option>
              <option value="100%" ${e.max_width==="100%"?"selected":""}>100% (На всю ширину панелі)</option>
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
            <input type="text" id="ctrlGridCharge" value="${((l=e.controls)==null?void 0:l.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
          </div>
          <div class="field-row">
            <label>Анімація енергетичних потоків (струмки):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="animEnabled" ${((n=e.animations)==null?void 0:n.enabled)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Увімкнути імпульсні лінії енергії</span>
            </div>
          </div>
          <div class="field-row">
            <label>Швидкість анімації (сек):</label>
            <div class="slider-row">
              <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((d=e.animations)==null?void 0:d.speed)||1.2}">
              <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((v=e.animations)==null?void 0:v.speed)||1.2}s</span>
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
              <input type="range" id="solarPvCount" min="1" max="16" value="${((y=e.solar)==null?void 0:y.pv_count)||3}">
              <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((S=e.solar)==null?void 0:S.pv_count)||3}</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
            <input type="text" id="solarTotalPower" value="${((I=e.solar)==null?void 0:I.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку як суми стрінгів">
            <span style="font-size: 10px; color: #94a3b8;">Якщо не вказано або сенсор відсутній — картка автоматично сумує потужність усіх стрінгів (PV1 + PV2 + PV3...).</span>
          </div>
          <div class="field-row">
            <label>Щоденна сонячна генерація (kWh):</label>
            <input type="text" id="solarDailyYield" value="${((f=e.solar)==null?void 0:f.daily_yield_entity)||""}">
          </div>
          <div class="field-row">
            <label>Ціль генерації на день (kWh):</label>
            <input type="number" id="solarTargetDaily" value="${((u=e.solar)==null?void 0:u.target_daily_yield)||55}">
          </div>
          <div class="field-row">
            <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
            <input type="number" step="0.1" id="solarInstalledPower" value="${((m=e.solar)==null?void 0:m.installed_power)!==void 0?e.solar.installed_power:12}" placeholder="12.0">
            <span style="font-size: 10px; color: #94a3b8;">Повна встановлена потужність усіх сонячних панелей для розрахунку % поточної генерації СЕС. Якщо не вказано — сумує потужність окремих полів.</span>
          </div>
          <div class="field-row checkbox-row">
            <input type="checkbox" id="solarShowMetrics" ${((c=e.solar)==null?void 0:c.show_metrics)!==!1?"checked":""}>
            <label for="solarShowMetrics">Відображати напругу (V) та струм (A) стрінгів</label>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((g=e.solar)==null?void 0:g.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((s=e.solar)==null?void 0:s.pv_count)||3}).map((_e,M)=>{var Oe,Ye;const N=M+1,R=((Ye=(Oe=e.solar)==null?void 0:Oe.strings)==null?void 0:Ye[M])||{},Ce=`sensor.deye_12k_inverter_pv${N}_voltage`,qe=`sensor.deye_12k_inverter_pv${N}_current`,Ge=`sensor.deye_12k_inverter_pv${N}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${N} (Стрінг ${N})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${M}" value="${R.name||`PV ${N}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${N} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${M}" value="${R.voltage_entity!==void 0?R.voltage_entity:Ce}" placeholder="${Ce}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${N} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${M}" value="${R.current_entity!==void 0?R.current_entity:qe}" placeholder="${qe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${N} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${M}" value="${R.capacity_kw!==void 0?R.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${N} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${M}" value="${R.power_entity!==void 0?R.power_entity:Ge}" placeholder="${Ge} (авто P = U × I)">
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
          <div class="field-row">
            <label>Модель / Назва на шильдику:</label>
            <input type="text" id="invModel" value="${((a=e.inverter)==null?void 0:a.model_name)||"DEYE SUN-12K"}">
          </div>
          <div class="field-row">
            <label>Потужність інвертора (сенсор, опціонально):</label>
            <input type="text" id="invPower" value="${((t=e.inverter)==null?void 0:t.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">В інверторах Deye окремого датчика немає — залиште порожнім, щоб не показувати зайве значення.</div>
          </div>
          <div class="field-row">
            <label>Власне споживання інвертора:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="invShowSelfConsumption" ${((h=e.inverter)==null?void 0:h.show_self_consumption)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #f97316;">
              <span style="font-size: 11px;">Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
          </div>
          <div class="field-row">
            <label>Сенсор власного споживання (W або kW, опціонально):</label>
            <input type="text" id="invSelfConsumptionEntity" value="${(($=e.inverter)==null?void 0:$.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку за балансом">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Якщо не вказано — розраховується автоматично за балансом енергії.</div>
          </div>
          <div class="field-row">
            <label>Базове власне споживання / втрати інвертора (Вт):</label>
            <div class="slider-row">
              <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((F=e.inverter)==null?void 0:F.standby_power)!==void 0?e.inverter.standby_power:100}">
              <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((P=e.inverter)==null?void 0:P.standby_power)!==void 0?e.inverter.standby_power:100}W</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Власні втрати електроніки та охолодження (зазвичай 80–150 Вт для інверторів Deye 8–12 кВт).</div>
          </div>
          <div class="field-row">
            <label>Температура AC (°C):</label>
            <input type="text" id="invTempAc" value="${((A=e.inverter)==null?void 0:A.ac_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура DC (°C):</label>
            <input type="text" id="invTempDc" value="${((r=e.inverter)==null?void 0:r.dc_temperature_entity)||""}">
          </div>
          <div class="field-row">
            <label>Напруга мережі (V) / Струм (A) / Частота (Hz):</label>
            <input type="text" id="invVolt" placeholder="Напруга V" value="${((w=e.inverter)==null?void 0:w.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invCurrent" placeholder="Струм A" value="${((D=e.inverter)==null?void 0:D.current_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="invFreq" placeholder="Частота Hz" value="${((z=e.inverter)==null?void 0:z.frequency_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="field-row">
            <label>Тип підключеного пристрою:</label>
            <select id="auxType">
              <option value="microinverter" ${((j=e.aux)==null?void 0:j.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
              <option value="generator" ${((H=e.aux)==null?void 0:H.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
              <option value="wind" ${((O=e.aux)==null?void 0:O.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
              <option value="smart_load" ${((_=e.aux)==null?void 0:_.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
              <option value="none" ${((x=e.aux)==null?void 0:x.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
            </select>
          </div>
          <div class="field-row">
            <label>Назва порту AUX:</label>
            <input type="text" id="auxTitle" value="${((E=e.aux)==null?void 0:E.type)==="microinverter"&&(!((b=e.aux)!=null&&b.title)||((C=e.aux)==null?void 0:C.title)==="Вітрогенератор")?"Мікроінвертор":((W=e.aux)==null?void 0:W.title)||(((G=e.aux)==null?void 0:G.type)==="generator"?"Генератор":((ie=e.aux)==null?void 0:ie.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
          </div>
          <div class="field-row">
            <label>Потужність AUX порту (сенсор):</label>
            <input type="text" id="auxPower" value="${((ae=e.aux)==null?void 0:ae.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((me=e.wind)==null?void 0:me.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((re=e.wind)==null?void 0:re.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((oe=e.wind)==null?void 0:oe.animation_threshold)||((he=e.aux)==null?void 0:he.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((ue=e.wind)==null?void 0:ue.animation_threshold)||((Ie=e.aux)==null?void 0:Ie.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Te=e.wind)==null?void 0:Te.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((Ne=e.wind)==null?void 0:Ne.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((tt=e.wind)==null?void 0:tt.turbine_count)||2}).map((_e,M)=>{var R,Ce;const N=((Ce=(R=e.wind)==null?void 0:R.turbines)==null?void 0:Ce[M])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${M}" value="${N.name||`Вітряк ${M+1}`}" placeholder="Назва (напр. Вітряк ${M+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${M}" value="${N.power_entity||`sensor.wind_turbine_${M+1}_power`}" placeholder="sensor.wind_turbine_${M+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${M}" value="${N.rpm_entity||N.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${M}" value="${N.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${M+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${M}" value="${N.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${M+1}_monthly_energy">
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
            <input type="text" id="batSoc" value="${((ft=e.battery)==null?void 0:ft.soc_entity)||""}">
          </div>
          <div class="field-row">
            <label>Потужність заряду/розряду (W або kW):</label>
            <input type="text" id="batPower" value="${((be=e.battery)==null?void 0:be.power_entity)||""}">
          </div>
          <div class="field-row">
            <label>Знак потужності/струму батареї (Напрямок перетоку):</label>
            <select id="batPowerSign">
              <option value="deye" ${((ve=e.battery)==null?void 0:ve.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (- Заряд, + Розряд)</option>
              <option value="standard" ${((it=e.battery)==null?void 0:it.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають заряд із мінусом (-), а розряд із плюсом (+).
            </div>
          </div>
          <div class="field-row">
            <label>Напруга (V) та Струм (A):</label>
            <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((ee=e.battery)==null?void 0:ee.voltage_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((Se=e.battery)==null?void 0:Se.current_entity)||""}">
          </div>
          <div class="field-row">
            <label>Температура АКБ (°C) та Загальний розбаланс банок (mV):</label>
            <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((de=e.battery)==null?void 0:de.temperature_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((je=e.battery)==null?void 0:je.cell_delta_entity)||""}">
          </div>
          <div class="field-row">
            <label>Сенсор ємності інвертора (показується в дужках):</label>
            <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((at=e.battery)==null?void 0:at.capacity_entity)||""}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Ємність батареї розрахована інвертором (буде виведена в дужках поруч із сумою модулів)</div>
          </div>
          <div class="field-row">
            <label>Щоденний заряд (kWh) / Щоденний розряд (kWh):</label>
            <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${(($e=e.battery)==null?void 0:$e.charge_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((Le=e.battery)==null?void 0:Le.discharge_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((Pe=e.battery)==null?void 0:Pe.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((st=e.battery)==null?void 0:st.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((xe=e.battery)==null?void 0:xe.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((se=e.battery)==null?void 0:se.parallel_batteries)||2}).map((_e,M)=>{var Mt,Ft,Vt,Nt;const N=M+1,R=((Ft=(Mt=e.battery)==null?void 0:Mt.modules)==null?void 0:Ft[M])||((Nt=(Vt=e.battery)==null?void 0:Vt.module_entities)==null?void 0:Nt[M])||{},Ce=`sensor.bms_rack${N}_soc`,qe=`sensor.bms_rack${N}_current`,Ge=`sensor.bms_rack${N}_voltage`,Oe=`sensor.bms_rack${N}_power`,Ye=`sensor.bms_rack${N}_temperature`,Pt=`sensor.bms_rack${N}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${N} (Модуль ${N})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${M}" value="${R.name||`Батарея ${N}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${N} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${M}" value="${R.soc_entity!==void 0?R.soc_entity:R.soc!==void 0?R.soc:Ce}" placeholder="${Ce}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${N} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${M}" value="${R.current_entity!==void 0?R.current_entity:qe}" placeholder="${qe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${N} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${M}" value="${R.voltage_entity!==void 0?R.voltage_entity:R.volt!==void 0?R.volt:Ge}" placeholder="${Ge}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${N} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${M}" value="${R.temperature_entity!==void 0?R.temperature_entity:R.temp!==void 0?R.temp:Ye}" placeholder="${Ye}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${N} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${M}" value="${R.capacity_kwh!==void 0?R.capacity_kwh:N===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${N} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${M}" value="${R.cell_delta_entity!==void 0?R.cell_delta_entity:R.delta!==void 0?R.delta:Pt}" placeholder="${Pt}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${N} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${M}" value="${R.power_entity!==void 0?R.power_entity:Oe}" placeholder="${Oe} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(B=e.grid)!=null&&B.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="field-row">
            <label>Потужність мережі (+/- або імпорт/експорт):</label>
            <input type="text" id="gridPower" value="${((L=e.grid)==null?void 0:L.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
          </div>

          <div class="field-row">
            <label>Зовнішній лічильник мережі (External CT / Smart Meter, опціонально):</label>
            <input type="text" id="gridExternalPower" value="${((te=e.grid)==null?void 0:te.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power або sensor.solarman_grid_external_power">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Трансформатор струму (CT) на вводі з вулиці. Відображає реальний перетік на стовпі (напр. 30 Вт в режимі Zero Export).
            </div>
          </div>

          <div class="field-row">
            <label>Автоматичний розрахунок вводу мережі (Grid Import Reconcile):</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="gridAutoCalculate" ${((ge=e.grid)==null?void 0:ge.auto_calculate)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #0284c7;">
              <span style="font-size: 11px;">Сумувати заряд АКБ та навантаження будинку, якщо інвертор вимірює лише зарядне</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо зовнішній CT відсутній, а інвертор (Deye) у Grid Power обліковує лише ввід на заряд АКБ, картка автоматично додає споживання будинку для відображення реального вводу з вулиці.
            </div>
          </div>

          <div class="field-row">
            <label>Знак потужності (Напрямок перетоку за сенсором):</label>
            <select id="gridPowerSign">
              <option value="deye" ${((ce=e.grid)==null?void 0:ce.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
              <option value="inverted" ${((ot=e.grid)==null?void 0:ot.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
            </select>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Більшість інверторів Deye передають споживання з плюсом (+), а продаж з мінусом (-).
            </div>
          </div>

          <div class="field-row">
            <label>Поріг чутливості анімації мережі (Вт):</label>
            <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Re=e.grid)==null?void 0:Re.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Нижче цього значення (напр. 50 Вт) перетік вважається нульовим і анімація вимикається.
            </div>
          </div>

          <div class="field-row">
            <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
            <input type="text" id="gridVoltage" value="${((nt=e.grid)==null?void 0:nt.voltage_entity)||""}" placeholder="За замовчуванням береться з інвертора (напр. sensor.deye_12k_inverter_grid_voltage)">
          </div>

          <div class="field-row">
            <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
            <input type="text" id="gridStatus" value="${((mt=e.grid)==null?void 0:mt.status_entity)||""}" placeholder="binary_sensor.grid_connected">
          </div>

          <div class="field-row">
            <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
            <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Et=e.grid)==null?void 0:Et.voltage_threshold)!==void 0?e.grid.voltage_threshold:90}">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
            </div>
          </div>

          <div class="field-row">
            <label>Щоденний імпорт (kWh) / Експорт (kWh):</label>
            <input type="text" id="gridImportDaily" placeholder="Імпорт kWh (напр. sensor.grid_import_daily)" value="${((Ae=e.grid)==null?void 0:Ae.import_daily_entity)||""}" style="margin-bottom: 4px;">
            <input type="text" id="gridExportDaily" placeholder="Експорт kWh (напр. sensor.grid_export_daily)" value="${((rt=e.grid)==null?void 0:rt.export_daily_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="field-row">
            <label>Сенсор негарантованого навантаження (порожньо = приховати):</label>
            <input type="text" id="gridNonEssential" value="${((Ot=e.grid)==null?void 0:Ot.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
          </div>
          <div class="field-row">
            <label>Сенсор зарядки авто / EV (порожньо = приховати):</label>
            <input type="text" id="gridCarPower" value="${((St=e.grid)==null?void 0:St.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((He=e.load)==null?void 0:He.auto_calculate)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Розраховувати за балансом енергії: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Рекомендовано для Deye / Sunsynk. Запобігає від'ємним значенням під час заряду батареї з мережі.
            </div>
          </div>
          <div class="field-row">
            <label>Відокремлювати експорт від навантаження будинку:</label>
            <div style="display: flex; align-items: center; gap: 8px;">
              <input type="checkbox" id="loadSeparateExport" ${((Be=e.load)==null?void 0:Be.separate_export)!==!1?"checked":""} style="width: 18px; height: 18px; accent-color: #06b6d4;">
              <span style="font-size: 11px;">Віднімати експорт у мережу від показників сенсора навантаження (Deye / Sunsynk)</span>
            </div>
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              У гібридних інверторах Deye сенсор Load Power або Inverter Power під час продажу в мережу підсумовує експорт з навантаженням будинку. Ця опція гарантує коректне розділення.
            </div>
          </div>
          <div class="field-row">
            <label>Essential потужність будинку (сенсор, опціонально):</label>
            <input type="text" id="loadEssential" value="${((Bt=e.load)==null?void 0:Bt.essential_power_entity)||""}" placeholder="Залиште порожнім або вкажіть сенсор навантаження">
          </div>
          <div class="field-row">
            <label>Щоденне споживання будинку (kWh):</label>
            <input type="text" id="loadDailyHouse" value="${((lt=e.load)==null?void 0:lt.daily_house_entity)||""}">
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">
            <span>Окремі піднавантаження (Essential Sub-loads)</span>
            <button type="button" class="preset-badge" id="btnAddSubload" style="background: rgba(14, 165, 233, 0.2); border-color: #0284c7; color: #38bdf8; font-size: 11px; padding: 3px 8px;">
              + Додати споживача
            </button>
          </div>

          ${(((dt=e.load)==null?void 0:dt.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((vt=e.load)==null?void 0:vt.subloads)||[]).map((_e,M)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${M}" value="${_e.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${M}" style="width: 140px;">
                  <option value="boiler" ${_e.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${_e.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${_e.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${_e.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${_e.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${_e.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${_e.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${M}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${M}" value="${_e.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
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
          
          <div class="field-row">
            <label>Увімкнути облік тарифів:</label>
            <input type="checkbox" id="tariffsEnabled" ${((xt=e.tariffs)==null?void 0:xt.enabled)!==!1?"checked":""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>

          <div class="field-row">
            <label>Валюта / позначення:</label>
            <input type="text" id="tariffCurrency" value="${((wt=e.tariffs)==null?void 0:wt.currency)||"грн"}" placeholder="грн або ₴" style="max-width: 120px;">
          </div>

          <div class="field-row">
            <label>☀️ Денний тариф (${((Ct=e.tariffs)==null?void 0:Ct.currency)||"грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Rt=e.tariffs)==null?void 0:Rt.day_rate)??4.32}" placeholder="4.32" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🌙 Нічний тариф (${((At=e.tariffs)==null?void 0:At.currency)||"грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((It=e.tariffs)==null?void 0:It.night_rate)??2.16}" placeholder="2.16" style="max-width: 140px;">
          </div>

          <div class="field-row">
            <label>🟢 Зелений тариф / експорт (${((Tt=e.tariffs)==null?void 0:Tt.currency)||"грн"}/кВт·год):</label>
            <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Dt=e.tariffs)==null?void 0:Dt.export_rate)??5.3}" placeholder="5.30" style="max-width: 140px;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px;">
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(_e,M)=>{var N;return`<option value="${M}" ${(((N=e.tariffs)==null?void 0:N.night_start_hour)??23)===M?"selected":""}>${String(M).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>
            <div class="field-row" style="flex-direction: column; align-items: flex-start; gap: 4px;">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(_e,M)=>{var N;return`<option value="${M}" ${(((N=e.tariffs)==null?void 0:N.night_end_hour)??7)===M?"selected":""}>${String(M).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі (наприклад 22.9 кВт·год) на нічну (з 23:00 до 07:00) та денну зону за годинником або з історії Home Assistant.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="field-row">
            <label>Показувати вартість імпорту за сьогодні:</label>
            <input type="checkbox" id="tariffShowDailyCost" ${((zt=e.tariffs)==null?void 0:zt.show_daily_cost)!==!1?"checked":""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати дохід від експорту (Зелений тариф):</label>
            <input type="checkbox" id="tariffShowExportIncome" ${((ct=e.tariffs)==null?void 0:ct.show_export_income)!==!1?"checked":""} style="width: 20px; height: 20px; accent-color: #34d399;">
          </div>
          <div class="field-row">
            <label>Показувати бейдж активного тарифу (🌙 Ніч / ☀️ День):</label>
            <input type="checkbox" id="tariffShowActiveBadge" ${((Wt=e.tariffs)==null?void 0:Wt.show_active_badge)!==!1?"checked":""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
          <div class="field-row">
            <label>Показувати заощадження від сонця (💰):</label>
            <input type="checkbox" id="tariffShowSolarSavings" ${((pt=e.tariffs)==null?void 0:pt.show_solar_savings)!==!1?"checked":""} style="width: 20px; height: 20px; accent-color: #38bdf8;">
          </div>
        </div>
      </div>
    `,this._bindEvents()}_bindEvents(){var d,v,y,S,I,f,u,m,c,g;const e=this.shadowRoot;e.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",a=>{this._switchTab(a.target.dataset.tab)})}),(d=e.getElementById("btnPresetEsp"))==null||d.addEventListener("click",()=>this._applyPreset("deye_esphome")),(v=e.getElementById("btnPresetSolarman"))==null||v.addEventListener("click",()=>this._applyPreset("deye_solarman"));const i=(s,a)=>{const t=e.getElementById(s);t&&t.addEventListener("input",h=>this._valueChanged(a,h.target.value))},p=(s,a)=>{const t=e.getElementById(s);t&&t.addEventListener("change",h=>this._valueChanged(a,h.target.checked))},l=(s,a,t,h="")=>{const $=e.getElementById(s);$&&$.addEventListener("input",F=>{const P=parseFloat(F.target.value);if(t){const A=e.getElementById(t);A&&(A.innerText=`${P}${h}`)}this._valueChanged(a,P)})};i("title","title"),i("themeMode","theme_mode"),i("cardLanguage","language"),(y=e.getElementById("cardScale"))==null||y.addEventListener("input",s=>{const a=parseFloat(s.target.value),t=e.getElementById("cardScaleVal");t&&(t.innerText=`${Math.round(a*100)}%`),this._valueChanged("card_scale",a)}),i("cardMaxWidth","max_width"),p("showQuickSettings","show_quick_settings"),i("ctrlSolarCharge","controls.solar_charge_entity"),i("ctrlSellPower","controls.sell_power_entity"),i("ctrlGridCharge","controls.grid_charge_entity"),p("animEnabled","animations.enabled"),l("animSpeed","animations.speed","animSpeedVal","s"),(S=e.getElementById("solarPvCount"))==null||S.addEventListener("input",s=>{const a=parseInt(s.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=a,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<a;){const t=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${t}`,name:`PV ${t}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${t}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${t}_current`,power_entity:`sensor.deye_12k_inverter_pv${t}_power`})}this._valueChanged("solar.pv_count",a),this._valueChanged("solar.strings",this._config.solar.strings),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].name=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-volt-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].voltage_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-curr-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].current_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-power-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].power_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)})}),e.querySelectorAll(".pv-str-cap-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[t]||(this._config.solar.strings[t]={}),this._config.solar.strings[t].capacity_kw=parseFloat(a.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)})}),i("solarTotalPower","solar.total_power_entity"),i("solarDailyYield","solar.daily_yield_entity"),l("solarTargetDaily","solar.target_daily_yield"),l("solarInstalledPower","solar.installed_power"),p("solarShowMetrics","solar.show_metrics"),i("invModel","inverter.model_name"),i("invPower","inverter.power_entity"),p("invShowSelfConsumption","inverter.show_self_consumption"),i("invSelfConsumptionEntity","inverter.self_consumption_entity"),l("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),i("invTempAc","inverter.ac_temperature_entity"),i("invTempDc","inverter.dc_temperature_entity"),i("invVolt","inverter.voltage_entity"),i("invCurrent","inverter.current_entity"),i("invFreq","inverter.frequency_entity"),(I=e.getElementById("auxType"))==null||I.addEventListener("change",s=>{const a=s.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=a;const h={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[a]||"Мікроінвертор";this._config.aux.title=h;const $=e.getElementById("auxTitle");$&&($.value=h),this._valueChanged("aux.type",a),this._valueChanged("aux.title",h)}),i("auxTitle","aux.title"),i("auxPower","aux.power_entity"),(f=e.getElementById("windTurbineCount"))==null||f.addEventListener("input",s=>{const a=parseInt(s.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=a,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<a;){const t=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${t}`,name:`Вітряк ${t}`,power_entity:`sensor.wind_turbine_${t}_power`,speed_entity:`sensor.wind_turbine_${t}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",a),this._valueChanged("wind.turbines",this._config.wind.turbines),this.render()}),l("windThreshold","wind.animation_threshold","windThresholdVal","W"),(u=e.getElementById("windThreshold"))==null||u.addEventListener("input",s=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(s.target.value))}),i("windDailyEnergy","wind.daily_energy_entity"),i("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].name=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-power-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].power_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-speed-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].rpm_entity=a.target.value,this._config.wind.turbines[t].speed_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-daily-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].daily_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),e.querySelectorAll(".turbine-monthly-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[t]||(this._config.wind.turbines[t]={}),this._config.wind.turbines[t].monthly_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)})}),i("batSoc","battery.soc_entity"),i("batPower","battery.power_entity"),i("batPowerSign","battery.power_sign"),i("batVolt","battery.voltage_entity"),i("batCurrent","battery.current_entity"),i("batTemp","battery.temperature_entity"),i("batDelta","battery.cell_delta_entity"),i("batCapacity","battery.capacity_entity"),i("batChargeDaily","battery.charge_daily_entity"),i("batDischargeDaily","battery.discharge_daily_entity"),(m=e.getElementById("batParallelCount"))==null||m.addEventListener("input",s=>{const a=parseInt(s.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=a,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<a;){const t=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${t}`,name:`Батарея ${t}`,soc_entity:`sensor.bms_rack${t}_soc`,current_entity:`sensor.bms_rack${t}_current`,voltage_entity:`sensor.bms_rack${t}_voltage`,power_entity:`sensor.bms_rack${t}_power`,temperature_entity:`sensor.bms_rack${t}_temperature`,cell_delta_entity:`sensor.bms_rack${t}_cell_delta`})}this._valueChanged("battery.parallel_batteries",a),this._valueChanged("battery.modules",this._config.battery.modules),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].name=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-soc-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].soc_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-curr-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].current_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-volt-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].voltage_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-temp-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].temperature_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-delta-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].cell_delta_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-power-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].power_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)})}),e.querySelectorAll(".bat-mod-cap-inp").forEach(s=>{s.addEventListener("input",a=>{const t=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[t]||(this._config.battery.modules[t]={}),this._config.battery.modules[t].capacity_kwh=parseFloat(a.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)})}),p("gridSellingEnabled","grid.selling_enabled"),p("gridAutoCalculate","grid.auto_calculate"),i("gridPower","grid.power_entity"),i("gridExternalPower","grid.external_power_entity"),i("gridVoltage","grid.voltage_entity"),i("gridStatus","grid.status_entity"),l("gridVoltageThreshold","grid.voltage_threshold"),i("gridPowerSign","grid.power_sign"),l("gridMinThreshold","grid.min_power_threshold"),i("gridImportDaily","grid.import_daily_entity"),i("gridExportDaily","grid.export_daily_entity"),i("gridNonEssential","grid.non_essential_power_entity"),i("gridCarPower","grid.car_power_entity"),p("loadAutoCalculate","load.auto_calculate"),p("loadSeparateExport","load.separate_export"),i("loadEssential","load.essential_power_entity"),i("loadDailyHouse","load.daily_house_entity");const n=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const s=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${s}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads),this.render()};(c=e.getElementById("btnAddSubload"))==null||c.addEventListener("click",n),(g=e.getElementById("btnAddSubloadBottom"))==null||g.addEventListener("click",n),e.querySelectorAll(".btn-del-subload").forEach(s=>{s.addEventListener("click",a=>{var $;const t=a.currentTarget||a.target.closest(".btn-del-subload"),h=parseInt(t.dataset.idx);($=this._config.load)!=null&&$.subloads&&(this._config.load.subloads.splice(h,1),this._valueChanged("load.subloads",this._config.load.subloads),this.render())})}),e.querySelectorAll(".subload-name").forEach(s=>{s.addEventListener("input",a=>{var h,$;const t=parseInt(a.target.dataset.idx);($=(h=this._config.load)==null?void 0:h.subloads)!=null&&$[t]&&(this._config.load.subloads[t].name=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-icon").forEach(s=>{s.addEventListener("change",a=>{var h,$;const t=parseInt(a.target.dataset.idx);($=(h=this._config.load)==null?void 0:h.subloads)!=null&&$[t]&&(this._config.load.subloads[t].icon=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),e.querySelectorAll(".subload-entity").forEach(s=>{s.addEventListener("input",a=>{var h,$;const t=parseInt(a.target.dataset.idx);($=(h=this._config.load)==null?void 0:h.subloads)!=null&&$[t]&&(this._config.load.subloads[t].entity=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))})}),p("tariffsEnabled","tariffs.enabled"),i("tariffCurrency","tariffs.currency"),l("tariffDayRate","tariffs.day_rate"),l("tariffNightRate","tariffs.night_rate"),l("tariffExportRate","tariffs.export_rate"),l("tariffNightStart","tariffs.night_start_hour"),l("tariffNightEnd","tariffs.night_end_hour"),p("tariffShowDailyCost","tariffs.show_daily_cost"),p("tariffShowExportIncome","tariffs.show_export_income"),p("tariffShowActiveBadge","tariffs.show_active_badge"),p("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",Na);const qt={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",bat_delta:"Розбаланс",bat_remaining:"Залишок",kwh_unit:"кВт·год"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",bat_delta:"Cell Delta",bat_remaining:"Remaining",kwh_unit:"kWh"}};class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(Q))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const i=JSON.parse(JSON.stringify(e)),p=JSON.parse(JSON.stringify(Q));this._config=this._deepMerge(p,i);const l=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=l||this._config.theme_mode||"dark";const n=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=n||this._config.language||"uk";const d=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=d?parseFloat(d):this._config.card_scale||this._config.scale||1,this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(e){return typeof requestAnimationFrame<"u"?requestAnimationFrame(e):setTimeout(e,0)}_changeScale(e){var n,d;let i=typeof e=="number"?e:this._scale+(e||.1);i=Math.max(.7,Math.min(2,Math.round(i*100)/100)),this._scale=i,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",i.toString());const p=(n=this.shadowRoot)==null?void 0:n.querySelector(".energy-station-container");p&&(p.style.setProperty("--es-card-scale",i.toString()),p.style.zoom=i.toString());const l=(d=this.shadowRoot)==null?void 0:d.getElementById("headerZoomVal");l&&(l.innerText=`${Math.round(i*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,i){const p=Array.isArray(e)?[...e]:Object.assign({},e);if(!i||typeof i!="object")return p;for(const l of Object.keys(i)){const n=i[l],d=e?e[l]:void 0;n&&typeof n=="object"&&!Array.isArray(n)?p[l]=this._deepMerge(d||{},n):p[l]=n}return p}_getEntityState(e){var v;if(!this._hass||!e||!this._hass.states[e])return null;const i=this._hass.states[e],l=String(i.state).trim().replace(",","."),n=parseFloat(l),d=((v=i.attributes)==null?void 0:v.unit_of_measurement)||"";return{raw:i.state,val:isNaN(n)?0:n,unit:d,attributes:i.attributes}}_t(e){var p,l;const i=this._language||"uk";return((p=qt[i])==null?void 0:p[e])||((l=qt.uk)==null?void 0:l[e])||e}_toggleTheme(e){const i=e||(this._themeMode==="light"?"dark":"light");this._themeMode=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",i)}catch{}this._applyTheme()}_toggleLanguage(e){const i=e||(this._language==="en"?"uk":"en");this._language=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",i)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var d;const e=(d=this.shadowRoot)==null?void 0:d.querySelector(".energy-station-container");if(!e)return;const i=this._themeMode==="light";e.classList.toggle("theme-light",i);const p=this.shadowRoot.getElementById("headerThemeToggle");p&&(p.innerHTML=i?"☀️":"🌙",p.setAttribute("title",i?this._t("theme_dark"):this._t("theme_light")));const l=this.shadowRoot.getElementById("btnThemeDark"),n=this.shadowRoot.getElementById("btnThemeLight");l&&n&&(l.classList.toggle("active",!i),n.classList.toggle("active",i))}_formatPower(e,i=0){const p=this._language==="en"?"kW":"кВт";if(!e)return{num:i.toFixed(3),kw:i,str:`${i.toFixed(3)} ${p}`};let l=e.val;return e.unit==="W"&&(l=l/1e3),{num:l.toFixed(3),kw:l,str:`${l.toFixed(3)} ${p}`}}_fireMoreInfo(e){if(!e)return;const i=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}_renderCardSkeleton(){var i,p,l,n,d,v,y,S,I,f,u,m,c,g,s,a,t,h;const e=this._config||Q;this._initialized=!0,this.shadowRoot.innerHTML=`
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
          max-width: var(--es-card-max-width, ${e.max_width||"1400px"});
          margin: 0 auto;
          padding: 22px 28px 24px 28px;
          transition: all 0.3s ease;
          container-type: inline-size;
          container-name: es-card;
          box-sizing: border-box;
          zoom: var(--es-card-scale, ${this._scale||1});
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

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${J.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((p=e.solar)==null?void 0:p.target_daily_yield)||55}</span> kWh
            </div>
            <!-- Progress Bar -->
            <div style="width: 220px; height: 5px; background: #1e293b; border-radius: 9999px; margin-top: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06);">
              <div id="solarProgressBar" style="height: 100%; width: 88%; background: linear-gradient(90deg, #f59e0b, #fde047); border-radius: 9999px; transition: width 0.7s;"></div>
            </div>
            <div class="es-mono" id="solarSavingsDaily" style="font-size: 11px; font-weight: 700; color: #34d399; margin-top: 4px; display: none;"></div>
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${J.sun}</div>
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(245, 158, 11, 0.85); font-weight: 600;">${this._t("total_pv")}</span>
            <div class="es-mono glow-solar clickable-node" id="totalPvPowerBadge" style="font-size: 20px; font-weight: 900; color: #fbbf24; display: flex; align-items: center; justify-content: center; gap: 6px;">
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
            </div>

            <!-- Active Tariff Badge -->
            <div id="gridTariffBadgeContainer" style="display: flex; justify-content: flex-end; margin-bottom: 3px;">
              <div class="es-mono" id="gridTariffBadge" style="font-size: 10px; font-weight: 700; border-radius: 9999px; padding: 2px 8px; display: none; align-items: center; gap: 4px;"></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${J.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(l=e.grid)!=null&&l.show_non_essential&&((n=e.grid)!=null&&n.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${J.house_outline||J.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(d=e.grid)!=null&&d.show_car&&((v=e.grid)!=null&&v.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${J.car}</div>
              <div class="es-node-title" id="carTitle">${((y=e.grid)==null?void 0:y.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${J.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((S=e.inverter)==null?void 0:S.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((I=e.aux)==null?void 0:I.type)==="none"||((f=e.aux)==null?void 0:f.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${J[(u=e.aux)==null?void 0:u.type]||J.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((m=e.aux)==null?void 0:m.type)==="microinverter"&&(!((c=e.aux)!=null&&c.title)||((g=e.aux)==null?void 0:g.title)==="Вітрогенератор")?this._t("aux_microinverter"):((s=e.aux)==null?void 0:s.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((a=e.aux)==null?void 0:a.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((t=e.wind)==null?void 0:t.show)===!1&&((h=e.aux)==null?void 0:h.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${J.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),this._rAF(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),solarSavingsDaily:e.getElementById("solarSavingsDaily"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),totalPvPowerVal:e.getElementById("totalPvPowerVal"),totalPvPercentBadge:e.getElementById("totalPvPercentBadge"),totalPvSubline:e.getElementById("totalPvSubline"),totalPvCapDetail:e.getElementById("totalPvCapDetail"),totalPvCapTotal:e.getElementById("totalPvCapTotal"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridCostDailyRow:e.getElementById("gridCostDailyRow"),gridCostDailyVal:e.getElementById("gridCostDailyVal"),gridCostSplitVal:e.getElementById("gridCostSplitVal"),gridTariffBadge:e.getElementById("gridTariffBadge"),gridExportDaily:e.getElementById("gridExportDaily"),gridExportIncomeRow:e.getElementById("gridExportIncomeRow"),gridExportIncomeVal:e.getElementById("gridExportIncomeVal"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:e.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:e.getElementById("inverterSelfConsumptionVal"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batMasterTempVal:e.getElementById("batMasterTempVal"),batMasterTempBadge:e.getElementById("batMasterTempBadge"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer"),bottomControlsDock:e.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var y,S,I,f,u,m,c,g;const e=this._config||Q,i=((y=this._nodes)==null?void 0:y.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!i)return;if(i.innerHTML="",!(((S=e.wind)==null?void 0:S.show)!==!1||((I=e.aux)==null?void 0:I.type)==="wind")){i.classList.add("hidden");return}i.classList.remove("hidden");const l=((f=e.wind)==null?void 0:f.turbine_count)||((m=(u=e.wind)==null?void 0:u.turbines)==null?void 0:m.length)||2,n=((c=e.wind)==null?void 0:c.turbines)||[],d=document.createElement("div");d.className="es-wind-summary-bar es-mono",d.id="windStationSummaryBar",d.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,i.appendChild(d);const v=document.createElement("div");v.className="es-wind-pods-row",i.appendChild(v);for(let s=0;s<l;s++){const a=n[s]||{name:`Вітряк ${s+1}`,power_entity:`sensor.wind_turbine_${s+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((g=e.wind)==null?void 0:g.animation_threshold)||50},t=!!(a.daily_energy_entity||a.monthly_energy_entity),h=document.createElement("div");h.className="es-turbine-card glow-wind clickable-node",h.id=`turbineCard_${s+1}`,h.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${s+1}">
              ${J.wind_turbine}
            </div>
            <span>${a.name||`Вітряк ${s+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${s+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${s+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${s+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${s+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${s+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${t?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${s+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${s+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,h.addEventListener("click",()=>{this._fireMoreInfo(a.power_entity)}),v.appendChild(h)}}_renderDynamicPvPanels(){var d,v,y,S,I,f;const e=this._config||Q,i=this._nodes.pvPanelsContainer;if(!i)return;i.innerHTML="";const p=((d=e.solar)==null?void 0:d.pv_count)||((y=(v=e.solar)==null?void 0:v.strings)==null?void 0:y.length)||3,l=this._language==="en"?"kWp":"кВтп",n=((S=e.solar)==null?void 0:S.show_metrics)!==!1;for(let u=1;u<=p;u++){const m=u<10?`0${u}`:`${u}`,c=((f=(I=e.solar)==null?void 0:I.strings)==null?void 0:f[u-1])||{},g=c.name||`PV ${m}`,s=c.capacity_kw!==void 0?parseFloat(c.capacity_kw):4,a=c.voltage_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_voltage`:""),t=c.current_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_current`:""),h=document.createElement("div");h.className="es-pv-panel glow-solar clickable-node",h.dataset.pvIndex=u,h.id=`pvPanel_${u}`,h.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${J.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${g}</span>
        <span class="es-pv-val es-mono" id="pvVal_${u}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${u}" style="${n?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${u}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${u}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${u}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${u}">${s.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${l}</span> <span id="pvPercent_${u}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,h.addEventListener("click",()=>{var A;const P=c.power_entity||a||t||((A=e.solar)==null?void 0:A.total_power_entity);this._fireMoreInfo(P)});const $=h.querySelector(`#pvVolt_${u}`);$&&$.addEventListener("click",P=>{P.stopPropagation(),a?this._fireMoreInfo(a):c.power_entity&&this._fireMoreInfo(c.power_entity)});const F=h.querySelector(`#pvCurr_${u}`);F&&F.addEventListener("click",P=>{P.stopPropagation(),t?this._fireMoreInfo(t):c.power_entity&&this._fireMoreInfo(c.power_entity)}),i.appendChild(h)}}_renderDynamicSubloads(){var l;const e=this._config||Q,i=this._nodes.subloadsContainer;if(!i)return;i.innerHTML="",(((l=e.load)==null?void 0:l.subloads)||[]).forEach((n,d)=>{const v=document.createElement("div");v.className="es-subload-card clickable-node",v.id=`subloadCard_${d}`,v.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${J[n.icon]||J.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${n.name}</span>
        <span class="es-mono" id="subloadVal_${d}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,v.addEventListener("click",()=>{this._fireMoreInfo(n.entity)}),i.appendChild(v)})}_renderDynamicBatteryRack(){var f,u,m,c,g,s,a;const e=this._config||Q,i=this._nodes.batteryRackContainer;if(!i)return;i.innerHTML="";const p=((f=e.battery)==null?void 0:f.parallel_batteries)||((m=(u=e.battery)==null?void 0:u.modules)==null?void 0:m.length)||2,l=[82,76,91,68,85,90,72,80],n=[52.4,52.4,52.4,52.4,52.4,52.4],d=[25,21,22.5,20,24,19.5,23,21.5],v=[12,8,15,9,14,11,18,10],y=this._t("bat_prefix"),S=this._language==="en"?"kW":"кВт",I=this._language==="en"?"kWh":"кВт·год";for(let t=1;t<=p;t++){const h=((g=(c=e.battery)==null?void 0:c.modules)==null?void 0:g[t-1])||((a=(s=e.battery)==null?void 0:s.module_entities)==null?void 0:a[t-1])||{},$=h.name||`${y} ${t}`,F=l[(t-1)%l.length],P=n[(t-1)%n.length],A=d[(t-1)%d.length],r=v[(t-1)%v.length],w=document.createElement("div");w.className="es-battery-pack-card glow-battery clickable-node",w.id=`batPackCard_${t}`,w.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${J.battery_vertical}</div>
        <span class="es-bat-name">${$}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${t}">${F}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${t}">${P.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${t}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${S}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${t}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${t}">${A.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${t}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${t}">${r} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${t}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${I}</div>
      `,w.addEventListener("click",D=>{var j;if(D.target.closest(`#batPackTemp_${t}`)){const H=h.temperature_entity||h.temp||`sensor.bms_rack${t}_temperature`;this._fireMoreInfo(H);return}if(D.target.closest(`#batPackDelta_${t}`)){const H=h.cell_delta_entity||h.delta_entity||`sensor.bms_rack${t}_cell_delta`;this._fireMoreInfo(H);return}const z=h.soc_entity||h.soc||h.voltage_entity||h.volt||h.current_entity||((j=e.battery)==null?void 0:j.soc_entity);this._fireMoreInfo(z)}),i.appendChild(w)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var g,s,a,t,h,$,F,P,A;const e=this._config||Q,i=((g=this._nodes)==null?void 0:g.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!i||(i.innerHTML="",e.show_quick_settings===!1))return;const p=this._themeMode==="light",l=this._language==="en",n=((s=e.controls)==null?void 0:s.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",d=((a=e.controls)==null?void 0:a.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",v=((t=e.controls)==null?void 0:t.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",y=document.createElement("div");y.className="es-quick-settings-card",y.id="quickSettingsCard",y.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${J.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${p?J.sun_mode:J.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${l?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${n}">
              <span class="es-ctrl-icon es-ctrl-solar">${J.sun_mode}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${d}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${J.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${l?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${v}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${J.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(h=y.querySelector("#btnThemeToggle"))==null||h.addEventListener("click",r=>{r.stopPropagation(),this._toggleTheme()}),($=y.querySelector("#btnLangToggle"))==null||$.addEventListener("click",r=>{r.stopPropagation(),this._toggleLanguage()}),(F=y.querySelector("#ctrlLabelWrapSolar"))==null||F.addEventListener("click",()=>this._fireMoreInfo(n)),(P=y.querySelector("#ctrlLabelWrapSell"))==null||P.addEventListener("click",()=>this._fireMoreInfo(d)),(A=y.querySelector("#ctrlLabelWrapGrid"))==null||A.addEventListener("click",()=>this._fireMoreInfo(v));const S=y.querySelector("#ctrlSliderSolar"),I=y.querySelector("#ctrlValSolar");S&&(this._updateSliderGradient(S),S.addEventListener("input",r=>{I&&(I.innerText=`${r.target.value} A`),this._updateSliderGradient(S)}),S.addEventListener("change",r=>{this._setNumberValue(n,r.target.value)}));const f=y.querySelector("#ctrlSliderSell"),u=y.querySelector("#ctrlValSell");f&&(this._updateSliderGradient(f),f.addEventListener("input",r=>{const w=Number(r.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");u&&(u.innerText=`${w} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(f)}),f.addEventListener("change",r=>{this._setNumberValue(d,r.target.value)}));const m=y.querySelector("#ctrlSliderGrid"),c=y.querySelector("#ctrlValGrid");m&&(this._updateSliderGradient(m),m.addEventListener("input",r=>{c&&(c.innerText=`${r.target.value} A`),this._updateSliderGradient(m)}),m.addEventListener("change",r=>{this._setNumberValue(v,r.target.value)})),i.appendChild(y),this._updateControlSliders()}_updateSliderGradient(e){if(!e)return;const i=parseFloat(e.min)||0,p=parseFloat(e.max)||100,l=parseFloat(e.value)||0,n=Math.max(0,Math.min(100,(l-i)/(p-i)*100));e.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${n}%, rgba(255, 255, 255, 0.12) ${n}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(e,i){if(!this._hass||!e)return;const l=e.split(".")[0]||"number",n=Number(i);this._hass.callService(l,"set_value",{entity_id:e,value:n})}_updateControlSliders(){var u,m,c,g,s,a,t,h,$;const e=this._config||Q;if(e.show_quick_settings===!1)return;const i=this.shadowRoot;if(!i)return;const p=((u=e.controls)==null?void 0:u.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",l=((m=e.controls)==null?void 0:m.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",n=((c=e.controls)==null?void 0:c.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",d=i.getElementById("ctrlSliderSolar"),v=i.getElementById("ctrlValSolar"),y=i.getElementById("ctrlSliderSell"),S=i.getElementById("ctrlValSell"),I=i.getElementById("ctrlSliderGrid"),f=i.getElementById("ctrlValGrid");if(d&&(!d.matches||!d.matches(":active"))){const F=(s=(g=this._hass)==null?void 0:g.states)==null?void 0:s[p],P=F&&!isNaN(parseFloat(F.state))?parseFloat(F.state):d.value?parseFloat(d.value):80;d.value=P,v&&(v.innerText=`${Math.round(P)} A`),this._updateSliderGradient(d)}if(y&&(!y.matches||!y.matches(":active"))){const F=(t=(a=this._hass)==null?void 0:a.states)==null?void 0:t[l],P=F&&!isNaN(parseFloat(F.state))?parseFloat(F.state):y.value?parseFloat(y.value):5e3;y.value=P;const A=Math.round(P).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),r=this._language==="uk"?"Вт":"W";S&&(S.innerText=`${A} ${r}`),this._updateSliderGradient(y)}if(I&&(!I.matches||!I.matches(":active"))){const F=($=(h=this._hass)==null?void 0:h.states)==null?void 0:$[n],P=F&&!isNaN(parseFloat(F.state))?parseFloat(F.state):I.value?parseFloat(I.value):70;I.value=P,f&&(f.innerText=`${Math.round(P)} A`),this._updateSliderGradient(I)}}_bindInteractions(){var p,l,n,d,v,y,S,I,f,u,m,c,g,s,a,t,h,$,F,P,A;const e=this.shadowRoot,i=this._config||Q;(p=e.getElementById("headerThemeToggle"))==null||p.addEventListener("click",r=>{r.stopPropagation(),this._toggleTheme()}),(l=e.getElementById("headerLangToggle"))==null||l.addEventListener("click",r=>{r.stopPropagation(),this._toggleLanguage()}),(n=e.getElementById("headerZoomIn"))==null||n.addEventListener("click",r=>{r.stopPropagation(),this._changeScale(this._scale+.1)}),(d=e.getElementById("headerZoomOut"))==null||d.addEventListener("click",r=>{r.stopPropagation(),this._changeScale(this._scale-.1)}),(v=e.getElementById("headerZoomVal"))==null||v.addEventListener("click",r=>{r.stopPropagation(),this._changeScale(1)}),(y=e.getElementById("solarHeaderNode"))==null||y.addEventListener("click",()=>{var r,w;this._fireMoreInfo(((r=i.solar)==null?void 0:r.daily_yield_entity)||((w=i.solar)==null?void 0:w.total_power_entity))}),(S=e.getElementById("totalPvPowerBadge"))==null||S.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.solar)==null?void 0:r.total_power_entity)}),(I=e.getElementById("gridNode"))==null||I.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.power_entity)}),(f=e.getElementById("nonEssentialNode"))==null||f.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.non_essential_power_entity)}),(u=e.getElementById("carNode"))==null||u.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.grid)==null?void 0:r.car_power_entity)}),(m=e.getElementById("inverterNode"))==null||m.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.inverter)==null?void 0:r.power_entity)}),(c=e.getElementById("inverterSelfConsumptionBox"))==null||c.addEventListener("click",r=>{var w;r.stopPropagation(),(w=i.inverter)!=null&&w.self_consumption_entity&&this._fireMoreInfo(i.inverter.self_consumption_entity)}),(g=e.getElementById("auxNode"))==null||g.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.aux)==null?void 0:r.power_entity)}),(s=e.getElementById("essentialNode"))==null||s.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.load)==null?void 0:r.essential_power_entity)}),(a=e.getElementById("masterBatteryHub"))==null||a.addEventListener("click",()=>{var r;this._fireMoreInfo((r=i.battery)==null?void 0:r.soc_entity)}),(t=e.getElementById("batChargeDaily"))==null||t.addEventListener("click",r=>{var w;r.stopPropagation(),this._fireMoreInfo(((w=i.battery)==null?void 0:w.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(h=e.getElementById("batDischargeDaily"))==null||h.addEventListener("click",r=>{var w;r.stopPropagation(),this._fireMoreInfo(((w=i.battery)==null?void 0:w.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let r=1;r<=8;r++){const w=e.getElementById(`batBranchBadge_${r}`),D=((F=($=i.battery)==null?void 0:$.modules)==null?void 0:F[r-1])||((A=(P=i.battery)==null?void 0:P.module_entities)==null?void 0:A[r-1])||{};w==null||w.addEventListener("click",()=>{var j;const z=D.power_entity||D.current_entity||D.soc_entity||((j=i.battery)==null?void 0:j.soc_entity);this._fireMoreInfo(z)})}}_fetchNightEndFromHa(e,i){var y,S;if(this._fetchingHistoryForDate===e)return;const l=(y=(this._config||Q).grid)==null?void 0:y.import_daily_entity;if(!((S=this._hass)!=null&&S.callWS)||!l)return;this._fetchingHistoryForDate=e;const n=new Date,d=new Date(n.getFullYear(),n.getMonth(),n.getDate(),i,0,0),v=new Date(n.getFullYear(),n.getMonth(),n.getDate(),i,15,0);this._hass.callWS({type:"history/history_during_period",start_time:d.toISOString(),end_time:v.toISOString(),entity_ids:[l],no_attributes:!0}).then(I=>{const f=I==null?void 0:I[l];if(f&&f.length>0){const u=parseFloat(f[0].state);if(!isNaN(u)&&u>=0){const m=`es_tariff_split_${e}`;let c={};if(typeof localStorage<"u")try{const g=localStorage.getItem(m);g&&(c=JSON.parse(g))}catch{}if(c.night_end=u,typeof localStorage<"u")try{localStorage.setItem(m,JSON.stringify(c))}catch{}this._hass&&this._updateValues()}}}).catch(()=>{})}_calculateTariffs(e,i,p){var F,P,A,r,w,D,z,j,H,O,_,x,E;const n=(this._config||Q).tariffs||{};if(n.enabled===!1){(F=this._nodes)!=null&&F.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(P=this._nodes)!=null&&P.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(A=this._nodes)!=null&&A.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),(r=this._nodes)!=null&&r.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");return}const d=n.currency||"грн",v=typeof n.day_rate=="number"?n.day_rate:4.32,y=typeof n.night_rate=="number"?n.night_rate:2.16,S=typeof n.export_rate=="number"?n.export_rate:5.3,I=typeof n.night_start_hour=="number"?n.night_start_hour:23,f=typeof n.night_end_hour=="number"?n.night_end_hour:7,u=new Date,m=u.getHours()+u.getMinutes()/60,c=I>f?m>=I||m<f:m>=I&&m<f;if((w=this._nodes)!=null&&w.gridTariffBadge&&n.show_active_badge!==!1){const b=c?y:v,C=c?this._t("tariff_night"):this._t("tariff_day"),W=c?"🌙":"☀️",G=c?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",ie=c?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",ae=c?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=G,this._nodes.gridTariffBadge.style.border=`1px solid ${ie}`,this._nodes.gridTariffBadge.style.color=ae,this._nodes.gridTariffBadge.innerText=`${W} ${C}: ${b.toFixed(2)} ${d}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(D=this._nodes)!=null&&D.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((z=this._nodes)!=null&&z.solarSavingsDaily&&n.show_solar_savings!==!1&&p>0){const b=p*v;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${b.toFixed(2)} ${d}`,this._nodes.solarSavingsDaily.style.display="block"}else(j=this._nodes)!=null&&j.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((H=this._nodes)!=null&&H.gridExportIncomeRow&&n.show_export_income!==!1&&typeof i=="number"&&i>0){const b=i*S;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${b.toFixed(2)} ${d}`),this._nodes.gridExportIncomeRow.style.display="block"}else(O=this._nodes)!=null&&O.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof e!="number"||isNaN(e)||e<0){(_=this._nodes)!=null&&_.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");return}const g=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`,s=`es_tariff_split_${g}`;let a={};if(typeof localStorage<"u")try{const b=localStorage.getItem(s);b&&(a=JSON.parse(b))}catch{}let t=0,h=0;if(m<f){if(t=e,h=0,a.night_end=e,typeof localStorage<"u")try{localStorage.setItem(s,JSON.stringify(a))}catch{}}else if(m>=f&&m<I){if(typeof a.night_end=="number"&&a.night_end<=e)t=a.night_end,h=Math.max(0,e-t);else{this._fetchNightEndFromHa(g,f);const b=Math.min(1,f/m);t=e*b,h=Math.max(0,e-t)}if(a.day_end=e,typeof localStorage<"u")try{localStorage.setItem(s,JSON.stringify(a))}catch{}}else{const b=typeof a.night_end=="number"?a.night_end:e*(f/m),C=typeof a.day_end=="number"?a.day_end:e;h=Math.max(0,C-b);const W=Math.max(0,e-C);t=b+W}const $=t*y+h*v;(x=this._nodes)!=null&&x.gridCostDailyRow&&n.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${$.toFixed(2)} ${d}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${t.toFixed(1)} + ☀️ ${h.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(E=this._nodes)!=null&&E.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none")}_updateValues(){var M,N,R,Ce,qe,Ge,Oe,Ye,Pt,Mt,Ft,Vt,Nt,Ut,Jt,Xt,Zt,Qt,ei,ti,ii,ai,si,oi,ni,ri,li,di,ci,pi,hi,gi,_i,yi,ui,bi,fi,mi,vi,xi,wi,ki,$i,Ei,Si,Bi,Ci,Ii,Ti,Pi,Mi,Fi,Vi,Ni,Li,Ri,Ai,Di,zi,Wi,ji,Hi,qi,Gi,Oi,Yi,Ki,Ui,Ji,Xi,Zi,Qi,ea,ta,ia,aa,sa,oa,na,ra,la,da,ca,pa,ha,ga,_a,ya,ua,ba,fa,ma,va,xa,wa,ka,$a,Ea,Sa,Ba,Ca,Ia,Ta,Pa;if(!this._nodes.dailySolarYield)return;const e=this._config||Q,i=this._language==="en"?"kW":"кВт",p=((M=e.solar)==null?void 0:M.pv_count)||((R=(N=e.solar)==null?void 0:N.strings)==null?void 0:R.length)||3;let l=0,n=0,d=!1;for(let o=1;o<=p;o++){const T=(qe=(Ce=e.solar)==null?void 0:Ce.strings)==null?void 0:qe[o-1],k=(T==null?void 0:T.voltage_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_voltage`:""),q=(T==null?void 0:T.current_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_current`:""),V=(T==null?void 0:T.power_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_power`:"");if(this._getEntityState(V)||this._getEntityState(k)||this._getEntityState(q)){d=!0;break}}for(let o=1;o<=p;o++){const T=this.shadowRoot.getElementById(`pvVal_${o}`),k=this.shadowRoot.getElementById(`pvVolt_${o}`),q=this.shadowRoot.getElementById(`pvCurr_${o}`),V=(Oe=(Ge=e.solar)==null?void 0:Ge.strings)==null?void 0:Oe[o-1],ht=(V==null?void 0:V.voltage_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_voltage`:""),ne=(V==null?void 0:V.current_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_current`:""),De=(V==null?void 0:V.power_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_power`:""),X=this._getEntityState(ht),we=this._getEntityState(ne),Y=this._getEntityState(De);let pe=0,Ee=0,le=0;Y?le=this._formatPower(Y).kw:X&&we?le=X.val*we.val/1e3:X?le=0:le=d?0:4,X?pe=X.val:pe=d?0:380+o*4.5,we?Ee=we.val:Y&&pe>0?Ee=le*1e3/pe:Ee=d?0:3.12+o*.28,l+=le,n+=Ee,T&&(T.innerText=`${le.toFixed(3)} ${i}`),k&&(k.innerText=`${pe.toFixed(1)} V`),q&&(q.innerText=`${Ee.toFixed(2)} A`);const Z=this.shadowRoot.getElementById(`pvMetrics_${o}`);if(Z){const Xe=((Ye=e.solar)==null?void 0:Ye.show_metrics)!==!1,Ze=!!(X||we||!d||V!=null&&V.voltage_entity||V!=null&&V.current_entity||pe>0||Ee>0);Z.style.display=Xe&&Ze?"flex":"none"}const ke=(V==null?void 0:V.capacity_kw)!==void 0?parseFloat(V.capacity_kw):(V==null?void 0:V.installed_power)!==void 0?parseFloat(V.installed_power):d?0:4,Ke=ke>0&&le>0?Math.min(100,Math.round(le/ke*100)):0,gt=this.shadowRoot.getElementById(`pvCapVal_${o}`),Ue=this.shadowRoot.getElementById(`pvPercent_${o}`),Je=this.shadowRoot.getElementById(`pvCap_${o}`);gt&&(ke>0?(gt.innerText=ke.toFixed(1).replace(".",","),Ue&&(Ue.innerText=`(${Ke}%)`,Ue.style.color=Ke>=70?"#34d399":Ke>=30?"#fbbf24":"#94a3b8"),Je&&(Je.style.display="flex")):Je&&(Je.style.display="none"))}const v=this._getEntityState((Pt=e.solar)==null?void 0:Pt.total_power_entity);let y=0;v?y=this._formatPower(v).kw:y=l;let S=((Mt=e.solar)==null?void 0:Mt.installed_power)!==void 0?parseFloat(e.solar.installed_power):0;if(isNaN(S)||S<=0){let o=0;for(let T=0;T<p;T++){const k=(Vt=(Ft=e.solar)==null?void 0:Ft.strings)==null?void 0:Vt[T],q=(k==null?void 0:k.capacity_kw)!==void 0?parseFloat(k.capacity_kw):(k==null?void 0:k.installed_power)!==void 0?parseFloat(k.installed_power):0;!isNaN(q)&&q>0&&(o+=q)}S=o>0?o:d?0:12}const I=S>0?y/S*100:0,f=Math.min(100,Math.max(0,I)),u=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${y.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${y.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${n.toFixed(2)} A`:`Сумарний струм СЕС: ${n.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(S>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(f)}%`,this._nodes.totalPvPercentBadge.style.color=f>=70?"#34d399":f>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=f>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(S>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${f.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=f>=70?"#34d399":f>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${S.toFixed(1).replace(".",",")} ${u})`)):n>0&&((Nt=e.solar)==null?void 0:Nt.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${n.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const m=this._getEntityState((Ut=e.solar)==null?void 0:Ut.daily_yield_entity),c=m?m.val:d?0:48.6;this._nodes.dailySolarYield.innerText=c.toFixed(1);const g=((Jt=e.solar)==null?void 0:Jt.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=g.toFixed(1);const s=Math.min(100,Math.round(c/g*100));this._nodes.solarProgressBar.style.width=`${s}%`;const a=this._getEntityState((Xt=e.inverter)==null?void 0:Xt.power_entity);this._nodes.inverterPowerVal&&((Zt=e.inverter)!=null&&Zt.power_entity&&a?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(a,0).str):this._nodes.inverterPowerVal.style.display="none");const t=this._getEntityState((Qt=e.inverter)==null?void 0:Qt.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=t?t.val.toFixed(2):"41,20";const h=this._getEntityState((ei=e.inverter)==null?void 0:ei.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=h?h.val.toFixed(2):"38,40";const $=this._getEntityState((ti=e.inverter)==null?void 0:ti.voltage_entity);this._nodes.inverterVolt.innerText=$?$.val.toFixed(2):"231,45";const F=this._getEntityState((ii=e.inverter)==null?void 0:ii.current_entity);this._nodes.inverterCurrent.innerText=F?F.val.toFixed(2):"8,60";const P=this._getEntityState((ai=e.inverter)==null?void 0:ai.frequency_entity);this._nodes.inverterFreq.innerText=P?P.val.toFixed(2):"50,01";const A=((si=e.wind)==null?void 0:si.show)!==!1||((oi=e.aux)==null?void 0:oi.type)==="wind",r=this.shadowRoot.getElementById("windStationContainer"),w=this._nodes.auxNode;let D=0;if(r)if(!A)r.classList.add("hidden");else{r.classList.remove("hidden");const o=((ni=e.wind)==null?void 0:ni.turbine_count)||((li=(ri=e.wind)==null?void 0:ri.turbines)==null?void 0:li.length)||2,T=((di=e.wind)==null?void 0:di.turbines)||[];let k=0,q=0,V=!1,ht=!1;for(let Y=0;Y<o;Y++){const pe=T[Y]||{power_entity:`sensor.wind_turbine_${Y+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((ci=e.wind)==null?void 0:ci.animation_threshold)||50},Ee=this.shadowRoot.getElementById(`turbinePower_${Y+1}`),le=this.shadowRoot.getElementById(`turbineStatus_${Y+1}`),Z=this.shadowRoot.getElementById(`turbineIcon_${Y+1}`),ke=this.shadowRoot.getElementById(`turbineCard_${Y+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${Y+1}`);const Ke=this.shadowRoot.getElementById(`turbineDailyVal_${Y+1}`),gt=this.shadowRoot.getElementById(`turbineMonthlyVal_${Y+1}`),Ue=this.shadowRoot.getElementById(`turbineEnergyFooter_${Y+1}`),Je=this._hass?0:Y===0?1.56:.22,Xe=this._getEntityState(pe.power_entity),Ze=this._formatPower(Xe,Je);Ee&&(Ee.innerText=Ze.str),D+=Ze.kw;let _t=Ze.kw*1e3;Xe&&Xe.unit==="W"&&(_t=Xe.val);const kt=pe.animation_threshold??((pi=e.wind)==null?void 0:pi.animation_threshold)??50,ze=Z==null?void 0:Z.querySelector(".turbine-rotor"),$t=pe.rpm_entity||pe.speed_entity||((hi=e.wind)==null?void 0:hi.rpm_entity)||((gi=e.wind)==null?void 0:gi.speed_entity)||(Y===0?"sensor.wind_rpm":"");let K=$t&&((_i=this._hass)!=null&&_i.states[$t])?this._getEntityState($t):null;if(!K&&Y===0&&((yi=this._hass)!=null&&yi.states["sensor.wind_rpm"])&&(K=this._getEntityState("sensor.wind_rpm")),_t>=kt||K&&typeof K.val=="number"&&K.val>0){ze&&ze.classList.add("spinning"),ke&&(ke.classList.add("glow-wind"),ke.style.borderColor="rgba(6, 182, 212, 0.55)");const Ve=((ui=e.wind)==null?void 0:ui.max_power)||3e3,jt=((bi=e.wind)==null?void 0:bi.max_rpm)||600;let Lt=0;K&&typeof K.val=="number"&&K.val>0?Lt=Math.min(1,Math.max(0,K.val/jt)):Lt=Math.min(1,Math.max(0,(_t-kt)/(Ve-kt)));const ye=(3.2-Lt*2.75).toFixed(2);ze&&ze.style.setProperty("--turbine-speed",`${ye}s`),le&&(le.innerText=this._t("wind_gen"),le.style.color="#67e8f9")}else ze&&ze.classList.remove("spinning"),ke&&(ke.classList.remove("glow-wind"),ke.style.borderColor="rgba(255, 255, 255, 0.08)"),le&&(le.innerText=this._t("wind_calm"),le.style.color="#94a3b8");const ut=this.shadowRoot.getElementById(`turbineRpmBox_${Y+1}`);if(ut)if(K&&K.raw!=="unavailable"&&K.raw!=="unknown"&&typeof K.val=="number"&&!isNaN(K.val)){ut.style.display="inline";const jt=K.unit?K.unit:"RPM";ut.innerHTML=`<span id="turbineRpmVal_${Y+1}">${Math.round(K.val)}</span> ${jt}`}else ut.style.display="none";const fe=this._getEntityState(pe.daily_energy_entity),Me=this._getEntityState(pe.monthly_energy_entity);Ke&&(Ke.innerText=fe&&typeof fe.val=="number"&&!isNaN(fe.val)?fe.val.toFixed(2):"0.00"),gt&&(gt.innerText=Me&&typeof Me.val=="number"&&!isNaN(Me.val)?Me.val.toFixed(1):"0.0");const Fe=!!(pe.daily_energy_entity||pe.monthly_energy_entity);Ue&&(Ue.style.display=Fe?"flex":"none"),fe&&typeof fe.val=="number"&&!isNaN(fe.val)&&(k+=fe.val,V=!0),Me&&typeof Me.val=="number"&&!isNaN(Me.val)&&(q+=Me.val,ht=!0)}const ne=this.shadowRoot.getElementById("windTotalDailyVal"),De=this.shadowRoot.getElementById("windTotalMonthlyVal"),X=this._getEntityState((fi=e.wind)==null?void 0:fi.daily_energy_entity),we=this._getEntityState((mi=e.wind)==null?void 0:mi.monthly_energy_entity);ne&&(X&&typeof X.val=="number"&&!isNaN(X.val)?ne.innerText=X.val.toFixed(2):V?ne.innerText=k.toFixed(2):ne.innerText="0.00"),De&&(we&&typeof we.val=="number"&&!isNaN(we.val)?De.innerText=we.val.toFixed(1):ht?De.innerText=q.toFixed(1):De.innerText="0.0")}let z=0;if(w)if(((vi=e.aux)==null?void 0:vi.type)==="none"||((xi=e.aux)==null?void 0:xi.type)==="wind")w.classList.add("hidden");else{w.classList.remove("hidden");const o=this._getEntityState((wi=e.aux)==null?void 0:wi.power_entity),T=this._hass?0:2,k=this._formatPower(o,T);z=k.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=k.str);const q={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let V=(ki=e.aux)==null?void 0:ki.title;(($i=e.aux)==null?void 0:$i.type)==="microinverter"&&(!V||V==="Вітрогенератор")?V="Мікроінвертор":(Ei=e.aux)!=null&&Ei.type&&q[e.aux.type]&&(!V||V==="Вітрогенератор")?V=q[e.aux.type]:V||(V="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=V),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=J[(Si=e.aux)==null?void 0:Si.type]||J.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Bi=e.aux)==null?void 0:Bi.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),w.style.borderColor="rgba(192, 132, 252, 0.45)",w.style.background="rgba(88, 28, 135, 0.35)",w.classList.remove("glow-wind"),w.classList.add("glow-aux")}const j=this.shadowRoot.getElementById("nonEssentialNode"),H=!!((Ci=e.grid)!=null&&Ci.show_non_essential&&((Ii=e.grid)!=null&&Ii.non_essential_power_entity))||((Ti=e.grid)==null?void 0:Ti.show_non_essential)!==!1&&!!((Pi=e.grid)!=null&&Pi.non_essential_power_entity);let O=0;if(j)if(H){j.classList.remove("hidden");const o=this._getEntityState(e.grid.non_essential_power_entity),T=this._formatPower(o,0);O=T.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=T.str)}else j.classList.add("hidden");const _=this.shadowRoot.getElementById("carNode"),x=!!((Mi=e.grid)!=null&&Mi.show_car&&((Fi=e.grid)!=null&&Fi.car_power_entity))||((Vi=e.grid)==null?void 0:Vi.show_car)!==!1&&!!((Ni=e.grid)!=null&&Ni.car_power_entity);let E=0;if(_)if(x){_.classList.remove("hidden");const o=this._getEntityState(e.grid.car_power_entity),T=this._formatPower(o,0);E=T.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=T.str)}else _.classList.add("hidden");let b=0;(((Li=e.load)==null?void 0:Li.subloads)||[]).forEach((o,T)=>{const k=this.shadowRoot.getElementById(`subloadVal_${T}`),q=this._getEntityState(o.entity),V=this._formatPower(q,0);b+=V.kw,k&&(k.innerText=V.str)});const C=this._getEntityState((Ri=e.battery)==null?void 0:Ri.soc_entity),W=C?C.val:80;this._nodes.masterBatterySoc.innerText=`${W.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const G=this._getEntityState((Ai=e.battery)==null?void 0:Ai.power_entity),ie=this._getEntityState((Di=e.battery)==null?void 0:Di.current_entity),ae=G?G.unit==="W"?G.val/1e3:G.val:0,me=((zi=e.battery)==null?void 0:zi.power_sign)||((Wi=e.battery)!=null&&Wi.invert_power?"standard":"deye");let re=!1,oe=!1;const he=Math.abs(ae);he>=.02?me==="deye"?ae<0?re=!0:oe=!0:ae>0?re=!0:oe=!0:ie&&Math.abs(ie.val)>=.3&&(me==="deye"?ie.val<0?re=!0:oe=!0:ie.val>0?re=!0:oe=!0),this._isCharging=re,this._isDischarging=oe;const Ie=re?he:0,Te=oe?he:0;if(this._nodes.masterBatteryFlowHint){let o=this._t("bat_idle"),T="#94a3b8";re?(o=this._t("bat_dir_charge"),T="#34d399"):oe&&(o=this._t("bat_dir_discharge"),T="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${he.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${T}; font-weight: 700; font-size: 14px;">${o}</span>`}const Ne=this._getEntityState((ji=e.battery)==null?void 0:ji.voltage_entity),tt=Ne?Ne.val.toFixed(2):"53.24",ft=ie?ie.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${tt.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${ft.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Hi=e.battery)==null?void 0:Hi.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const o=((qi=e.battery)==null?void 0:qi.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${o}%`}let be=this._getEntityState((Gi=e.load)==null?void 0:Gi.essential_power_entity);!be&&(!((Oi=e.load)!=null&&Oi.essential_power_entity)||((Yi=e.load)==null?void 0:Yi.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((Ki=e.load)==null?void 0:Ki.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(be=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const ve=be&&typeof be.val=="number"&&!isNaN(be.val)?Math.max(0,be.unit==="W"?be.val/1e3:be.val):0,it=!!(be&&ve>0);let ee=null,Se=!1;if((Ui=e.grid)!=null&&Ui.external_power_entity&&(ee=this._getEntityState(e.grid.external_power_entity),ee&&typeof ee.val=="number"&&!isNaN(ee.val)&&(Se=!0)),!ee){const o=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"];for(const T of o){const k=this._getEntityState(T);if(k&&typeof k.val=="number"&&!isNaN(k.val)){ee=k,Se=!0;break}}}if(!ee){const o=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),T=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),k=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");if(o&&T&&k&&!isNaN(o.val)&&!isNaN(T.val)&&!isNaN(k.val)){const q=(o.unit==="kW"?o.val*1e3:o.val)+(T.unit==="kW"?T.val*1e3:T.val)+(k.unit==="kW"?k.val*1e3:k.val);ee={val:q,unit:"W",raw:String(q)},Se=!0}}if(!ee&&((Ji=this._hass)!=null&&Ji.states)){const T=Object.keys(this._hass.states).find(k=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(k)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(k));if(T){const k=this._getEntityState(T);k&&typeof k.val=="number"&&!isNaN(k.val)&&Math.abs(k.val)>0&&(ee=k,Se=!0)}}ee||(ee=this._getEntityState((Xi=e.grid)==null?void 0:Xi.power_entity));const de=ee?ee.unit==="W"?ee.val/1e3:ee.val:0,je=((Zi=e.grid)==null?void 0:Zi.power_sign)||((Qi=e.grid)!=null&&Qi.invert_power?"inverted":"deye"),at=((ea=e.grid)==null?void 0:ea.selling_enabled)===!0,$e=(((ta=e.grid)==null?void 0:ta.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3,Le=this._getEntityState((ia=e.grid)==null?void 0:ia.status_entity),Pe=this._getEntityState(((aa=e.grid)==null?void 0:aa.voltage_entity)||((sa=e.inverter)==null?void 0:sa.voltage_entity)),st=((oa=e.grid)==null?void 0:oa.voltage_threshold)!==void 0?e.grid.voltage_threshold:90;let xe=!0;if(Le){const o=String(Le.raw||Le.val).toLowerCase();(o==="off"||o==="false"||o==="0"||o==="disconnected"||o==="offline"||o==="unavailable"||o==="unknown")&&(xe=!1)}else Pe&&typeof Pe.val=="number"&&!isNaN(Pe.val)&&Pe.val<st&&(xe=!1);let se=!1,B=!1,L=0;if(!xe)L=0,se=!1,B=!1;else{if(Se)L=Math.abs(de),L>=$e&&(je==="deye"?de<0?se=!0:B=!0:de>0?se=!0:B=!0);else{if(je==="deye"){if(de>0)L=de,L>=$e&&(B=!0);else if(de<0){const k=Math.abs(de),q=Math.max(0,k-ve);q>=$e?(L=q,se=!0):(L=0,se=!1)}}else if(de<0)L=Math.abs(de),L>=$e&&(B=!0);else if(de>0){const k=Math.max(0,de-ve);k>=$e?(L=k,se=!0):(L=0,se=!1)}if(((na=e.grid)==null?void 0:na.auto_calculate)!==!1&&B){const k=y+D+(z>0?z:0)+Te;Ie+ve+O+E>k+L+.1&&(L=L+ve)}}const o=Math.max(0,y+D+(z>0?z:0)+Te-Ie-ve-O-E);se&&L>o+.1&&(L=o,L<$e&&(se=!1,L=0)),se&&!at&&(se=!1,L=0)}const te=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(xe?(this._nodes.gridPowerVal.innerText=`${L.toFixed(3)} ${i}`,se?this._nodes.gridPowerVal.style.color="#34d399":B?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${i}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(xe?se?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):B?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),te&&(xe?(te.classList.add("glow-grid"),te.style.borderColor="rgba(56, 189, 248, 0.4)"):(te.classList.remove("glow-grid"),te.style.borderColor="rgba(239, 68, 68, 0.45)"));const ge=this._getEntityState((ra=e.grid)==null?void 0:ra.import_daily_entity);this._nodes.gridImportDaily.innerText=ge?`${ge.val.toFixed(2)} kWh`:"0.00 kWh";const ce=this._getEntityState((la=e.grid)==null?void 0:la.export_daily_entity);this._nodes.gridExportDaily.innerText=ce?`${ce.val.toFixed(2)} kWh`:"0.00 kWh",this._calculateTariffs(ge?ge.val:0,ce?ce.val:0,c);const ot=B?L:0,Re=se?L:0,nt=y+D+(z>0?z:0)+ot+Te,mt=Ie+Re+O+E,Et=Math.max(0,nt-mt),Ae=this._getEntityState((da=e.inverter)==null?void 0:da.self_consumption_entity),rt=Ae&&typeof Ae.val=="number"&&!isNaN(Ae.val)?Math.max(0,Ae.unit==="W"?Ae.val/1e3:Ae.val):null,St=(((ca=e.inverter)==null?void 0:ca.standby_power)!==void 0?e.inverter.standby_power:100)/1e3;let He=0,Be=0;if(it)if(He=Math.max(b,ve),rt!==null)Be=rt;else{const o=Math.max(0,nt-(Ie+Re+He+O+E));Be=o>0?o:St}else rt!==null?Be=rt:Be=Math.min(Et,St),He=Math.max(b,Math.max(0,Et-Be));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((pa=e.inverter)==null?void 0:pa.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Be<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Be*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Be.toFixed(3)} ${i}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${He.toFixed(3)} ${i}`;const Bt=this._getEntityState((ha=e.load)==null?void 0:ha.daily_house_entity);this._nodes.dailyHouseKwh.innerText=Bt?`${Bt.val.toFixed(2)} kWh`:"12,40 kWh";const lt=((ga=e.battery)==null?void 0:ga.parallel_batteries)||((ya=(_a=e.battery)==null?void 0:_a.modules)==null?void 0:ya.length)||2;let dt=0;for(let o=0;o<lt;o++){const T=((ba=(ua=e.battery)==null?void 0:ua.modules)==null?void 0:ba[o])||((ma=(fa=e.battery)==null?void 0:fa.module_entities)==null?void 0:ma[o])||{},k=T.capacity_kwh!==void 0?parseFloat(T.capacity_kwh):o===0?7.88:o===1?5.12:(((va=e.battery)==null?void 0:va.capacity_kwh)||13)/lt;dt+=isNaN(k)?0:k}dt<=0&&(dt=parseFloat((xa=e.battery)==null?void 0:xa.capacity_kwh)||13);const vt=this._getEntityState(((wa=e.battery)==null?void 0:wa.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),xt=vt&&!isNaN(vt.val)?vt.val:null,wt=xt!==null&&xt<=40?xt:dt,Ct=this._getEntityState(((ka=e.battery)==null?void 0:ka.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),Rt=Ct?Ct.val:80,At=wt*(Rt/100),It=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${At.toFixed(2).replace(".",",")} ${It} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${wt.toFixed(1).replace(".",",")})</span></span>`);const Tt=this._getEntityState((($a=e.battery)==null?void 0:$a.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),Dt=Tt?Tt.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${Dt.toFixed(1).replace(".",",")}`);const zt=(Ea=e.battery)==null?void 0:Ea.charge_daily_entity;let ct=this._getEntityState(zt);ct||(ct=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge")||this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const Wt=(Sa=e.battery)==null?void 0:Sa.discharge_daily_entity;let pt=this._getEntityState(Wt);pt||(pt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=ct?`${ct.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=pt?`${pt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const _e=[];for(let o=1;o<=lt;o++){const T=this.shadowRoot.getElementById(`batPackSoc_${o}`),k=this.shadowRoot.getElementById(`batPackVolt_${o}`),q=this.shadowRoot.getElementById(`batPackCurr_${o}`),V=this.shadowRoot.getElementById(`batPackPower_${o}`),ht=this.shadowRoot.getElementById(`batPackTempVal_${o}`),ne=this.shadowRoot.getElementById(`batPackDelta_${o}`),De=this.shadowRoot.getElementById(`batPackDeltaVal_${o}`),X=this.shadowRoot.getElementById(`batPackStateTag_${o}`),we=this.shadowRoot.getElementById(`batPackKwh_${o}`),Y=this.shadowRoot.getElementById(`batPackBar1_${o}`),pe=this.shadowRoot.getElementById(`batPackBar2_${o}`),Ee=this.shadowRoot.getElementById(`batPackBar3_${o}`),le=this.shadowRoot.getElementById(`batPackBar4_${o}`),Z=((Ca=(Ba=e.battery)==null?void 0:Ba.modules)==null?void 0:Ca[o-1])||((Ta=(Ia=e.battery)==null?void 0:Ia.module_entities)==null?void 0:Ta[o-1])||{},ke=Z.soc_entity||Z.soc||`sensor.bms_rack${o}_soc`,Ke=Z.current_entity||`sensor.bms_rack${o}_current`,gt=Z.voltage_entity||Z.volt||`sensor.bms_rack${o}_voltage`,Ue=Z.power_entity||`sensor.bms_rack${o}_power`,Je=Z.temperature_entity||Z.temp||`sensor.bms_rack${o}_temperature`,Xe=Z.cell_delta_entity||Z.delta_entity||`sensor.bms_rack${o}_cell_delta`,Ze=this._getEntityState(ke),_t=this._getEntityState(Ke),kt=this._getEntityState(gt),ze=this._getEntityState(Ue),$t=this._getEntityState(Je);let K=this._getEntityState(Xe);if(K||(K=this._getEntityState(`sensor.bms_rack${o}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${o}_cell_difference`)),!K&&(Z.max_cell_voltage_entity||Z.min_cell_voltage_entity)){const We=this._getEntityState(Z.max_cell_voltage_entity),Va=this._getEntityState(Z.min_cell_voltage_entity);if(We&&Va){const Yt=Math.abs(We.val-Va.val);K={val:Yt<1?Math.round(Yt*1e3):Yt,unit:"mV"}}}const yt=Ze?Ze.val:o===1?82:o===2?85:75,ut=kt?kt.val:o===1?54.1:o===2?54:52.4,fe=_t?_t.val:o===1?18.4:o===2?25.2:8.2,Me=$t?$t.val:o===1?36.5:o===2?21:22.5;let Fe=null;if(K){let We=K.val;We<1&&We>0?Fe=Math.round(We*1e3):Fe=Math.round(We)}else this._hass||(Fe=o===1?12:o===2?8:15);let Ve=0;ze?Ve=Math.abs(this._formatPower(ze).kw):Ve=ut*Math.abs(fe)/1e3;const Lt=(Z.capacity_kwh!==void 0?parseFloat(Z.capacity_kwh):o===1?7.88:o===2?5.12:wt/lt)*(yt/100);T&&(T.innerText=`${yt.toFixed(0)}%`),k&&(k.innerText=`${ut.toFixed(1).replace(".",",")} V`),q&&(q.innerText=`${Math.abs(fe).toFixed(1).replace(".",",")} A`),V&&(V.innerText=`${Ve.toFixed(2).replace(".",",")} ${i}`),ht&&(ht.innerText=`${Me.toFixed(1).replace(".",",")}`),De&&(Fe!==null&&!isNaN(Fe)?(De.innerText=`${Fe} mV`,ne&&(ne.style.display="inline-flex",Fe<=25?(ne.style.color="#34d399",ne.style.background="rgba(52, 211, 153, 0.12)",ne.style.borderColor="rgba(52, 211, 153, 0.3)"):Fe<=50?(ne.style.color="#fbbf24",ne.style.background="rgba(251, 191, 36, 0.12)",ne.style.borderColor="rgba(251, 191, 36, 0.3)"):(ne.style.color="#f87171",ne.style.background="rgba(248, 113, 113, 0.16)",ne.style.borderColor="rgba(248, 113, 113, 0.4)"))):ne&&(ne.style.display="none")),we&&(we.innerText=`~${Lt.toFixed(2).replace(".",",")} ${It}`);let ye=!1;oe?ye=!1:re?ye=!0:_t?ye=(((Pa=e.battery)==null?void 0:Pa.power_sign)||"deye")==="deye"?fe<0:fe>0:ye=fe<0;const bt=this.shadowRoot.getElementById(`batBranchBadge_${o}`);bt&&(Ve<.02?(bt.className="es-bat-branch-badge es-mono idle",bt.innerHTML=`<span>0.00 ${i}</span>`):ye?(bt.className="es-bat-branch-badge es-mono charge",bt.innerHTML=`<span>${Ve.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`):(bt.className="es-bat-branch-badge es-mono discharge",bt.innerHTML=`<span>${Ve.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));const Qe=this.shadowRoot.getElementById(`batPackCard_${o}`),Ma=Qe==null?void 0:Qe.querySelector(".es-battery-gauge"),Fa=Qe==null?void 0:Qe.querySelector(".es-battery-gauge-nipple");Qe&&(Qe.style.borderColor=ye?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),Ma&&(Ma.style.borderColor=ye?"#10b981":"#ef4444"),Fa&&(Fa.style.background=ye?"#10b981":"#ef4444"),X&&(ye?(X.className="es-bat-state-tag charge",X.innerText=this._t("bat_charge"),X.style.color="#34d399",X.style.background="rgba(16, 185, 129, 0.18)",X.style.borderColor="rgba(16, 185, 129, 0.4)"):(X.className="es-bat-state-tag discharge",X.innerText=this._t("bat_discharge"),X.style.color="#f87171",X.style.background="rgba(239, 68, 68, 0.18)",X.style.borderColor="rgba(239, 68, 68, 0.4)")),V&&(V.style.color=ye?"#34d399":"#f87171"),q&&(q.style.color=ye?"#38bdf8":"#f87171");const Ht=ye?"active-green":"active-red";Y&&pe&&Ee&&le&&(Y.className=`es-bat-bar ${yt>=10?Ht:""}`,pe.className=`es-bat-bar ${yt>=35?Ht:""}`,Ee.className=`es-bat-bar ${yt>=65?Ht:""}`,le.className=`es-bat-bar ${yt>=85?Ht:""}`),_e.push({kwNum:Ve,isChg:ye})}this._updateFlowPaths(),this._updateFlowAnimations(xe?de:0,se,B,y,He,he,re,oe,E,_e,O,b,z),this._updateControlSliders()}_setupResizeObserver(){var i;if(this._resizeObserver)return;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,i,p,l,n,d,v,y,S;try{const I=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!I)return;const f=I.getBoundingClientRect();if(f.width===0||f.height===0)return;const u=this._config||Q,m=this._scale||1,c=(_,x=.5,E=.5)=>{if(!_)return null;const b=_.getBoundingClientRect();return{x:Math.round((b.left-f.left+b.width*x)/m),y:Math.round((b.top-f.top+b.height*E)/m)}},g=(_,x,E)=>{const b=this.shadowRoot.getElementById(_),C=this.shadowRoot.getElementById(x);b&&b.setAttribute("d",E||""),C&&C.setAttribute("d",E||"")},s=this.shadowRoot.getElementById("gridNode"),a=this.shadowRoot.getElementById("inverterNode"),t=this.shadowRoot.getElementById("essentialNode"),h=this.shadowRoot.getElementById("totalPvPowerBadge"),$=this.shadowRoot.getElementById("masterBatteryHub"),F=this.shadowRoot.getElementById("carNode");if(s&&a){const _=s.getBoundingClientRect(),x=a.getBoundingClientRect();if(_.bottom<x.top+30){const b=c(s,.7,1),C=c(a,.2,0);if(b&&C){const W=Math.round((b.y+C.y)/2),G=`M ${b.x} ${b.y} C ${b.x} ${W}, ${C.x} ${W}, ${C.x} ${C.y}`;g("pathGridInvBase","pathGridInvFlow",G)}}else{const b=Math.round((x.top-f.top+x.height*.55)/m),C=Math.round((_.right-f.left)/m),W=Math.round((x.left-f.left)/m),G=Math.round((_.top-f.top+_.height*.5)/m);let ie="";if(Math.abs(G-b)<=8)ie=`M ${C} ${b} L ${W} ${b}`;else{const ae=Math.round(C+24);ie=`M ${C} ${G} C ${ae} ${G}, ${ae} ${b}, ${W} ${b}`}g("pathGridInvBase","pathGridInvFlow",ie)}}if(a&&t){const _=t.getBoundingClientRect(),x=a.getBoundingClientRect();if(_.bottom<x.top+30){const b=c(a,.8,0),C=c(t,.3,1);if(b&&C){const W=Math.round((b.y+C.y)/2),G=`M ${b.x} ${b.y} C ${b.x} ${W}, ${C.x} ${W}, ${C.x} ${C.y}`;g("pathInvLoadBase","pathInvLoadFlow",G)}}else{const b=Math.round((x.top-f.top+x.height*.55)/m),C=Math.round((x.right-f.left)/m),W=Math.round((_.left-f.left)/m),G=Math.round((_.top-f.top+_.height*.5)/m);let ie="";if(Math.abs(G-b)<=8)ie=`M ${C} ${b} L ${W} ${b}`;else{const ae=Math.round(W-24);ie=`M ${C} ${b} C ${ae} ${b}, ${ae} ${G}, ${W} ${G}`}g("pathInvLoadBase","pathInvLoadFlow",ie)}}if(h&&a){const _=c(h,.5,1),x=c(a,.5,0);if(_&&x){const E=`M ${_.x} ${_.y} L ${x.x} ${x.y}`;g("pathSolarInvBase","pathSolarInvFlow",E)}}if(a&&$){const _=c(a,.5,1),x=c($,.5,0);if(_&&x){const E=`M ${_.x} ${_.y} L ${x.x} ${x.y}`;g("pathInvBatBase","pathInvBatFlow",E)}}const P=this.shadowRoot.getElementById("nonEssentialNode"),A=P&&!P.classList.contains("hidden")&&P.offsetHeight>0,r=F&&!F.classList.contains("hidden")&&F.offsetHeight>0;if(s&&A){const _=c(s,.5,1),x=c(P,.5,0);if(_&&x){const E=`M ${_.x} ${_.y} L ${x.x} ${x.y}`;g("pathGridNonEssBase","pathGridNonEssFlow",E)}}else g("pathGridNonEssBase","pathGridNonEssFlow","");if(r){const _=A?P:s;if(_){const x=c(_,.5,1),E=c(F,.5,0);if(x&&E){const b=`M ${x.x} ${x.y} L ${E.x} ${E.y}`;g("pathNonEssCarBase","pathNonEssCarFlow",b)}}else g("pathNonEssCarBase","pathNonEssCarFlow","")}else g("pathNonEssCarBase","pathNonEssCarFlow","");const w=this.shadowRoot.getElementById("subloadsBusContainer");if(t&&w){const _=c(t,.5,1),x=c(w,.5,0);if(_&&x){const E=`M ${_.x} ${_.y} L ${x.x} ${x.y}`;g("pathLoadSubloadsBase","pathLoadSubloadsFlow",E)}}else g("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const D=this.shadowRoot.getElementById("auxNode");if(a&&D&&!D.classList.contains("hidden")&&D.offsetHeight>0){const _=c(D,.35,1),x=c(a,.9,0);if(_&&x){const E=Math.round((_.y+x.y)/2),b=`M ${_.x} ${_.y} C ${_.x} ${E}, ${x.x} ${E}, ${x.x} ${x.y}`;g("pathInvAuxBase","pathInvAuxFlow",b)}}else g("pathInvAuxBase","pathInvAuxFlow","");g("pathBatStemBase","pathBatStemFlow","");const z=this.shadowRoot.getElementById("windStationContainer"),H=((i=u.wind)==null?void 0:i.show)!==!1||((p=u.aux)==null?void 0:p.type)==="wind"?((l=u.wind)==null?void 0:l.turbine_count)||((d=(n=u.wind)==null?void 0:n.turbines)==null?void 0:d.length)||2:0;for(let _=1;_<=4;_++)if(_<=H&&z&&!z.classList.contains("hidden")){const x=this.shadowRoot.getElementById(`turbineCard_${_}`);if(x&&$){const E=c(x,.5,1),b=H===1?.5:.28+(_-1)/(H-1)*.44,C=c($,b,0);if(E&&C){const W=`M ${E.x} ${E.y} L ${C.x} ${C.y}`;g(`pathTurbine${_}Base`,`pathTurbine${_}Flow`,W)}}else g(`pathTurbine${_}Base`,`pathTurbine${_}Flow`,"")}else g(`pathTurbine${_}Base`,`pathTurbine${_}Flow`,"");const O=((v=u.battery)==null?void 0:v.parallel_batteries)||((S=(y=u.battery)==null?void 0:y.modules)==null?void 0:S.length)||2;for(let _=1;_<=8;_++){const x=this.shadowRoot.getElementById(`batPackCard_${_}`),E=this.shadowRoot.getElementById(`batBranchBadge_${_}`);if(_<=O&&$&&x){const b=c($,.5,1),C=c(x,.5,0);if(b&&C){const W=Math.round(b.y+(C.y-b.y)*.45);let G="";Math.abs(b.x-C.x)<=4?G=`M ${b.x} ${b.y} L ${C.x} ${C.y}`:G=`M ${b.x} ${b.y} C ${b.x} ${W}, ${C.x} ${W}, ${C.x} ${C.y}`,g(`pathBat${_}Base`,`pathBat${_}Flow`,G),E&&(E.style.left=`${C.x}px`,E.style.top=`${W}px`,E.style.display="flex")}else g(`pathBat${_}Base`,`pathBat${_}Flow`,""),E&&(E.style.display="none")}else g(`pathBat${_}Base`,`pathBat${_}Flow`,""),E&&(E.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,i,p,l,n;try{const d=this._config||Q,v=this._scale||1,y=this.shadowRoot.getElementById("solarBusSvg"),S=((e=d.solar)==null?void 0:e.pv_count)||((p=(i=d.solar)==null?void 0:i.strings)==null?void 0:p.length)||3;if(y&&S>0){const u=y.getBoundingClientRect(),m=this.shadowRoot.getElementById("pvPanel_1"),c=this.shadowRoot.getElementById(`pvPanel_${S}`),g=this.shadowRoot.getElementById("solarBusBase"),s=this.shadowRoot.getElementById("solarFlowCollector"),a=this.shadowRoot.getElementById("solarBusStemBase"),t=this.shadowRoot.getElementById("solarBusStemFlow"),h=this.shadowRoot.getElementById("solarBusFeeders");if(m&&c&&u.width>0){const $=m.getBoundingClientRect(),F=c.getBoundingClientRect(),P=Math.round(($.left-u.left+$.width/2)/v),A=Math.round((F.left-u.left+F.width/2)/v),r=13,w=Math.round((P+A)/2);if(g&&(g.setAttribute("x1",P),g.setAttribute("y1",r),g.setAttribute("x2",A),g.setAttribute("y2",r)),s&&(s.setAttribute("x1",P),s.setAttribute("y1",r),s.setAttribute("x2",A),s.setAttribute("y2",r)),a&&(a.setAttribute("x1",w),a.setAttribute("y1",r),a.setAttribute("x2",w),a.setAttribute("y2",26)),t&&(t.setAttribute("x1",w),t.setAttribute("y1",r),t.setAttribute("x2",w),t.setAttribute("y2",26)),h){let D="";for(let z=1;z<=S;z++){const j=this.shadowRoot.getElementById(`pvPanel_${z}`);if(j){const H=j.getBoundingClientRect(),O=Math.round((H.left-u.left+H.width/2)/v);D+=`
                  <line x1="${O}" y1="0" x2="${O}" y2="${r}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${O}" y1="0" x2="${O}" y2="${r}" stroke="#fbbf24" stroke-width="2.5" />
                `}}h.innerHTML=D}}}const I=this.shadowRoot.getElementById("subloadsBusSvg"),f=((n=(l=d.load)==null?void 0:l.subloads)==null?void 0:n.length)||3;if(I&&f>0){const u=I.getBoundingClientRect(),m=this.shadowRoot.getElementById("subloadCard_0"),c=this.shadowRoot.getElementById(`subloadCard_${f-1}`),g=this.shadowRoot.getElementById("essentialNode"),s=this.shadowRoot.getElementById("subloadsBusBase"),a=this.shadowRoot.getElementById("subloadsFlowCollector"),t=this.shadowRoot.getElementById("subloadsBusStemBase"),h=this.shadowRoot.getElementById("subloadsBusStemFlow"),$=this.shadowRoot.getElementById("subloadsBusFeeders");if(m&&c&&u.width>0){const F=m.getBoundingClientRect(),P=c.getBoundingClientRect(),A=Math.round((F.left-u.left+F.width/2)/v),r=Math.round((P.left-u.left+P.width/2)/v),w=13;let D=Math.round((A+r)/2);if(g){const H=g.getBoundingClientRect();D=Math.round((H.left-u.left+H.width/2)/v)}const z=Math.min(A,D),j=Math.max(r,D);if(s&&(s.setAttribute("x1",z),s.setAttribute("y1",w),s.setAttribute("x2",j),s.setAttribute("y2",w)),a&&(a.setAttribute("x1",z),a.setAttribute("y1",w),a.setAttribute("x2",j),a.setAttribute("y2",w)),t&&(t.setAttribute("x1",D),t.setAttribute("y1",0),t.setAttribute("x2",D),t.setAttribute("y2",w)),h&&(h.setAttribute("x1",D),h.setAttribute("y1",0),h.setAttribute("x2",D),h.setAttribute("y2",w)),$){let H="";for(let O=0;O<f;O++){const _=this.shadowRoot.getElementById(`subloadCard_${O}`);if(_){const x=_.getBoundingClientRect(),E=Math.round((x.left-u.left+x.width/2)/v);H+=`
                  <line x1="${E}" y1="${w}" x2="${E}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${E}" y1="${w}" x2="${E}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}$.innerHTML=H}}}}catch{}}_applyFlowAnimation(e,i,p,l,n){if(!e)return;if(!n){e.setAttribute("class",`flow-pulse ${i} inactive`),e.style.opacity="0",e.style.animation="none";return}const d=p?"flow-reverse":"flow-forward",v=p?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${i} ${d}`),e.style.opacity="1",e.style.setProperty("--flow-speed",l),e.style.animation=`${v} ${l} linear infinite`}_updateFlowAnimations(e,i,p,l,n,d,v,y,S,I=[],f=0,u=0,m=0){var ve,it,ee,Se,de,je,at,$e,Le,Pe,st,xe,se;const c=this._config||Q,g=((ve=c.animations)==null?void 0:ve.enabled)!==!1,s=((it=c.animations)==null?void 0:it.speed)||1.2,a=(B,L=10)=>{const te=Math.abs(B);if(te<.05)return"2.5s";const ge=Math.min(1,te/L);return`${Math.max(.4,(2.6-ge*1.9)*(s/1.2)).toFixed(2)}s`},t=this.shadowRoot.getElementById("pathGridInvFlow"),h=Math.abs(e),$=(((ee=c.grid)==null?void 0:ee.min_power_threshold)!==void 0?c.grid.min_power_threshold:50)/1e3,F=((Se=c.grid)==null?void 0:Se.selling_enabled)===!0,P=g&&h>=$&&(p||i&&F);this._applyFlowAnimation(t,"flow-grid",i,a(e,10),P);const A=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(A,"flow-solar",!1,a(l,12),g&&l>=.05);const r=this.shadowRoot.getElementById("pathInvLoadFlow"),w=Math.abs(n);this._applyFlowAnimation(r,"flow-load",!1,a(n,10),g&&w>=.05);const D=this.shadowRoot.getElementById("pathInvBatFlow"),z=Math.abs(d),j=g&&z>=.02&&(v||y),H=v?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(D,H,y,a(d,8),j);const O=this.shadowRoot.getElementById("pathGridNonEssFlow"),_=Math.abs(f);this._applyFlowAnimation(O,"flow-grid",!1,a(f,5),g&&_>=.05);const x=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),E=Math.abs(S);this._applyFlowAnimation(x,"flow-car",!1,a(S,7),g&&E>=.05);const b=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),C=Math.abs(u||n);this._applyFlowAnimation(b,"flow-load",!1,a(C,8),g&&C>=.05);const W=this.shadowRoot.getElementById("pathInvAuxFlow"),G=Math.abs(m);this._applyFlowAnimation(W,"flow-aux",!0,a(m,5),g&&G>=.05);const ie=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(ie,H,y,a(d,8),j);const ae=this.shadowRoot.getElementById("solarFlowCollector"),me=this.shadowRoot.getElementById("solarBusStemFlow");if(ae)if(!g||l<.05)ae.style.opacity="0.2",ae.style.animation="none",me&&(me.style.opacity="0.2",me.style.animation="none");else{const B=a(l,12);ae.style.opacity="1",ae.setAttribute("class","flow-line"),ae.style.animation=`esDashflow ${B} linear infinite`,me&&(me.style.opacity="1",me.setAttribute("class","flow-line"),me.style.animation=`esDashflow ${B} linear infinite`)}const re=this.shadowRoot.getElementById("subloadsFlowCollector"),oe=this.shadowRoot.getElementById("subloadsBusStemFlow");if(re)if(!g||C<.05)re.style.opacity="0.2",re.style.animation="none",oe&&(oe.style.opacity="0.2",oe.style.animation="none");else{const B=a(C,8);re.style.opacity="1",re.setAttribute("class","flow-line"),re.style.animation=`esDashflow ${B} linear infinite`,oe&&(oe.style.opacity="1",oe.setAttribute("class","flow-line"),oe.style.animation=`esDashflow ${B} linear infinite`)}const he=this.shadowRoot.getElementById("batteryFlowCollector"),ue=this.shadowRoot.getElementById("batteryBusStemFlow"),Ie=this.shadowRoot.getElementById("batteryBusFeeders"),Te=y?"#f87171":"#34d399",Ne=y?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(he)if(he.style.stroke=Te,he.style.filter=Ne,ue&&(ue.style.stroke=Te,ue.style.filter=Ne),!g||!j)he.style.opacity="0.2",he.style.animation="none",ue&&(ue.style.opacity="0.2",ue.style.animation="none");else{const B=a(d,8),L=y?"esDashflowRev":"esDashflow";he.style.opacity="1",he.setAttribute("class",y?"flow-line-reverse":"flow-line"),he.style.animation=`${L} ${B} linear infinite`,ue&&(ue.style.opacity="1",ue.setAttribute("class",y?"flow-line-reverse":"flow-line"),ue.style.animation=`${L} ${B} linear infinite`)}Ie&&Ie.querySelectorAll("line").forEach(B=>{if(B.style.stroke=Te,B.style.filter=Ne,!g||!j)B.style.opacity="0.2",B.style.animation="none";else{const L=a(d,8),te=y?"esDashflowRev":"esDashflow";B.style.opacity="1",B.setAttribute("class",y?"flow-line-reverse":"flow-line"),B.style.animation=`${te} ${L} linear infinite`}});for(let B=1;B<=8;B++){const L=this.shadowRoot.getElementById(`pathBat${B}Flow`);if(!L)continue;const te=I[B-1],ge=te?te.kwNum:0,ce=g&&(ge>=.02||j),ot=y;this._applyFlowAnimation(L,H,ot,a(ge||d,8),ce)}for(let B=0;B<6;B++){const L=this.shadowRoot.getElementById(`pathSubload${B}Flow`);if(!L)continue;const te=(je=(de=c.load)==null?void 0:de.subloads)==null?void 0:je[B],ge=te?this._getEntityState(te.entity):null,ce=ge?this._formatPower(ge,2).kw:B===0?2:B===1?3:4;this._applyFlowAnimation(L,"flow-load",!1,a(ce,8),g&&ce>=.05)}const tt=((at=c.wind)==null?void 0:at.show)!==!1||(($e=c.aux)==null?void 0:$e.type)==="wind",ft=tt?((Le=c.wind)==null?void 0:Le.turbine_count)||((st=(Pe=c.wind)==null?void 0:Pe.turbines)==null?void 0:st.length)||2:0,be=((xe=c.wind)==null?void 0:xe.turbines)||[];for(let B=1;B<=4;B++){const L=this.shadowRoot.getElementById(`pathTurbine${B}Flow`);if(L)if(B<=ft&&tt){const te=be[B-1]||{},ge=this._hass?0:B===1?1.45:.85,ce=this._getEntityState(te.power_entity||`sensor.wind_turbine_${B}_power`);let Re=this._formatPower(ce,ge).kw*1e3;ce&&ce.unit==="W"&&(Re=ce.val);const nt=te.animation_threshold??((se=c.wind)==null?void 0:se.animation_threshold)??50,mt=Re>=nt;this._applyFlowAnimation(L,"flow-wind",!1,a(Re/1e3,3),g&&mt)}else this._applyFlowAnimation(L,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",Kt),window.customCards=window.customCards||[],window.customCards.some(Gt=>Gt.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),et.EnergyStationCard=Kt,et.I18N=qt,Object.defineProperty(et,Symbol.toStringTag,{value:"Module"})});
