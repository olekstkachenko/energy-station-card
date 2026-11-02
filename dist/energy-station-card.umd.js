(function(it,ne){typeof exports=="object"&&typeof module<"u"?ne(exports):typeof define=="function"&&define.amd?define(["exports"],ne):(it=typeof globalThis<"u"?globalThis:it||self,ne(it.EnergyStationCard={}))})(this,function(it){"use strict";const ne={title:"Energy Station",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0}},ee='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',te={sun:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${ee} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${ee} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${ee} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${ee} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${ee} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};class Aa extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general",this._isInternalChange=!1,this._debounceTimer=null,this._rendered=!1,this._isDialogExpanded=!1}set hass(e){this._hass=e}setConfig(e){if(this._config=JSON.parse(JSON.stringify(e||ne)),this._isInternalChange){this._isInternalChange=!1;return}this.render()}connectedCallback(){this._rendered||this.render();const e=()=>{typeof window<"u"&&window.innerWidth>=850&&this._applyExpand(!0)};e(),setTimeout(e,80),setTimeout(e,250)}_findHuiDialog(){let e=this;for(;e;){if(e.tagName&&e.tagName.toLowerCase()==="hui-dialog-edit-card")return e;if(e.parentElement)e=e.parentElement;else if(e.parentNode)e=e.parentNode;else if(e.getRootNode&&e.getRootNode().host)e=e.getRootNode().host;else break}if(typeof document<"u"){const t=document.querySelector("hui-dialog-edit-card")||document.querySelector("ha-dialog-edit-card");if(t)return t;try{const n=document.querySelector("home-assistant");if(n!=null&&n.shadowRoot){const d=n.shadowRoot.querySelector("hui-dialog-edit-card")||n.shadowRoot.querySelector("ha-dialog-edit-card");if(d)return d;const r=n.shadowRoot.querySelectorAll("*");for(const c of r)if(c.shadowRoot){const g=c.shadowRoot.querySelector("hui-dialog-edit-card")||c.shadowRoot.querySelector("ha-dialog-edit-card");if(g)return g}}}catch{}}return null}_findHaDialog(e){if(e!=null&&e.shadowRoot){const n=e.shadowRoot.querySelector("ha-dialog")||e.shadowRoot.querySelector("mwc-dialog");if(n)return n}let t=this;for(;t;){if(t.tagName&&(t.tagName.toLowerCase()==="ha-dialog"||t.tagName.toLowerCase()==="mwc-dialog"))return t;if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}return typeof document<"u"?document.querySelector("ha-dialog")||document.querySelector("mwc-dialog"):null}_applyExpand(e){var d,r,c;this._isDialogExpanded=e;const t=this._findHuiDialog(),n=this._findHaDialog(t);if(e){if(t){typeof t._enlarge=="function"&&!t.large?t._enlarge():(t.large=!0,t.setAttribute("large",""));try{if(t.shadowRoot){let g=t.shadowRoot.getElementById("energy-station-wide-style");g||(g=document.createElement("style"),g.id="energy-station-wide-style",g.textContent=`
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
              `,t.shadowRoot.appendChild(g))}}catch{}}if(n){n.style.setProperty("--mdc-dialog-min-width","95vw","important"),n.style.setProperty("--mdc-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-width","95vw","important"),n.style.setProperty("--mdc-dialog-width","95vw","important");try{const g=(d=n.shadowRoot)==null?void 0:d.querySelector(".mdc-dialog__surface");g&&(g.style.setProperty("max-width","96vw","important"),g.style.setProperty("width","95vw","important"))}catch{}}}else{if(t){typeof t._enlarge=="function"&&t.large?t._enlarge():(t.large=!1,t.removeAttribute("large"));try{const g=(r=t.shadowRoot)==null?void 0:r.getElementById("energy-station-wide-style");g&&g.remove()}catch{}}if(n){n.style.removeProperty("--mdc-dialog-min-width"),n.style.removeProperty("--mdc-dialog-max-width"),n.style.removeProperty("--ha-dialog-max-width"),n.style.removeProperty("--ha-dialog-width"),n.style.removeProperty("--mdc-dialog-width");try{const g=(c=n.shadowRoot)==null?void 0:c.querySelector(".mdc-dialog__surface");g&&(g.style.removeProperty("max-width"),g.style.removeProperty("width"))}catch{}}}this._updateExpandBtn()}_updateExpandBtn(){var n;const e=(n=this.shadowRoot)==null?void 0:n.getElementById("btnToggleExpand");if(!e)return;const t=this._isDialogExpanded;e.innerHTML=t?"❐ Звичайний розмір":"⛶ На весь екран",e.title=t?"Згорнути вікно налаштувань до звичайного розміру":"Розширити вікно налаштувань на весь екран"}_flushConfig(){this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null,this._dispatchConfig())}_dispatchConfig(){if(!this._config)return;this._isInternalChange=!0;const e=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(e)}_valueChanged(e,t,n=!1){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const d=e.split(".");let r=this._config;for(let c=0;c<d.length-1;c++)r[d[c]]||(r[d[c]]={}),r=r[d[c]];r[d[d.length-1]]=t,this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),n?this._dispatchConfig():this._debounceTimer=setTimeout(()=>{this._dispatchConfig()},140)}_switchTab(e){this._flushConfig(),this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||ne)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load"),this._dispatchConfig(),this.render()}render(){var c,g,u,I,P,m,f,k,p,_,x,h,i,a,s,v,w,D,l,E,A,W,G,O,J,y,$,B,b,T,j,K,le,de,ke,pe,ce,ue,ve,be,Be,Ve,at,bt,we,Ee,st,fe,Ce,ge,He,ot,Ie,Ae,Ne,je,$e,ie,C,M,re,ye,_e,nt,De,rt,mt,$t,ze,lt,Zt,St,Ge,Pe,Bt,dt,ct,vt,wt,xt,Ct,Ht,jt,It,Tt,Gt,Ot,pt,Yt,ht,Pt,Mt,Nt,Lt,Ft,Rt;if(!this._config)return;this._rendered=!0;const e=this._config,t=(c=this.shadowRoot)==null?void 0:c.activeElement;let n=null,d=null,r=null;if(t&&(t.id?n=`#${t.id}`:((g=t.dataset)==null?void 0:g.idx)!==void 0&&t.className&&(n=`.${t.className.trim().split(/\s+/)[0]}[data-idx="${t.dataset.idx}"]`),"selectionStart"in t&&"selectionEnd"in t&&(d=t.selectionStart,r=t.selectionEnd)),this.shadowRoot.innerHTML=`
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
              <input type="text" id="title" value="${e.title||"Energy Station"}">
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
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((u=e.animations)==null?void 0:u.speed)||1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((I=e.animations)==null?void 0:I.speed)||1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings!==!1?"checked":""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((P=e.animations)==null?void 0:P.enabled)!==!1?"checked":""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((m=e.controls)==null?void 0:m.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((f=e.controls)==null?void 0:f.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((k=e.controls)==null?void 0:k.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((p=e.solar)==null?void 0:p.pv_count)||3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((_=e.solar)==null?void 0:_.pv_count)||3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((x=e.solar)==null?void 0:x.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((h=e.solar)==null?void 0:h.daily_yield_entity)||""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((i=e.solar)==null?void 0:i.target_daily_yield)||55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((a=e.solar)==null?void 0:a.installed_power)!==void 0?e.solar.installed_power:12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((s=e.solar)==null?void 0:s.show_metrics)!==!1?"checked":""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((v=e.solar)==null?void 0:v.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((w=e.solar)==null?void 0:w.pv_count)||3}).map((ae,N)=>{var Ke,Ue;const L=N+1,R=((Ue=(Ke=e.solar)==null?void 0:Ke.strings)==null?void 0:Ue[N])||{},Me=`sensor.deye_12k_inverter_pv${L}_voltage`,Oe=`sensor.deye_12k_inverter_pv${L}_current`,Ye=`sensor.deye_12k_inverter_pv${L}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${L} (Стрінг ${L})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${N}" value="${R.name||`PV ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${L} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${N}" value="${R.voltage_entity!==void 0?R.voltage_entity:Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${L} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${N}" value="${R.current_entity!==void 0?R.current_entity:Oe}" placeholder="${Oe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${L} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${N}" value="${R.capacity_kw!==void 0?R.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${L} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${N}" value="${R.power_entity!==void 0?R.power_entity:Ye}" placeholder="${Ye} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${((D=e.inverter)==null?void 0:D.model_name)||"DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((l=e.inverter)==null?void 0:l.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((E=e.inverter)==null?void 0:E.show_self_consumption)!==!1?"checked":""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((A=e.inverter)==null?void 0:A.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((W=e.inverter)==null?void 0:W.standby_power)!==void 0?e.inverter.standby_power:100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((G=e.inverter)==null?void 0:G.standby_power)!==void 0?e.inverter.standby_power:100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((O=e.inverter)==null?void 0:O.ac_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((J=e.inverter)==null?void 0:J.dc_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((y=e.inverter)==null?void 0:y.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${(($=e.inverter)==null?void 0:$.current_entity)||""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((B=e.inverter)==null?void 0:B.frequency_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((b=e.aux)==null?void 0:b.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((T=e.aux)==null?void 0:T.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((j=e.aux)==null?void 0:j.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((K=e.aux)==null?void 0:K.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((le=e.aux)==null?void 0:le.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((de=e.aux)==null?void 0:de.type)==="microinverter"&&(!((ke=e.aux)!=null&&ke.title)||((pe=e.aux)==null?void 0:pe.title)==="Вітрогенератор")?"Мікроінвертор":((ce=e.aux)==null?void 0:ce.title)||(((ue=e.aux)==null?void 0:ue.type)==="generator"?"Генератор":((ve=e.aux)==null?void 0:ve.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((be=e.aux)==null?void 0:be.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((Be=e.wind)==null?void 0:Be.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((Ve=e.wind)==null?void 0:Ve.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((at=e.wind)==null?void 0:at.animation_threshold)||((bt=e.aux)==null?void 0:bt.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((we=e.wind)==null?void 0:we.animation_threshold)||((Ee=e.aux)==null?void 0:Ee.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((st=e.wind)==null?void 0:st.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((fe=e.wind)==null?void 0:fe.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((Ce=e.wind)==null?void 0:Ce.turbine_count)||2}).map((ae,N)=>{var R,Me;const L=((Me=(R=e.wind)==null?void 0:R.turbines)==null?void 0:Me[N])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${N}" value="${L.name||`Вітряк ${N+1}`}" placeholder="Назва (напр. Вітряк ${N+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${N}" value="${L.power_entity||`sensor.wind_turbine_${N+1}_power`}" placeholder="sensor.wind_turbine_${N+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${N}" value="${L.rpm_entity||L.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${N}" value="${L.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${N+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${N}" value="${L.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${N+1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((ge=e.battery)==null?void 0:ge.soc_entity)||""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((He=e.battery)==null?void 0:He.power_entity)||""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((ot=e.battery)==null?void 0:ot.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ie=e.battery)==null?void 0:Ie.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Ae=e.battery)==null?void 0:Ae.capacity_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Ne=e.battery)==null?void 0:Ne.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((je=e.battery)==null?void 0:je.current_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${(($e=e.battery)==null?void 0:$e.temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((ie=e.battery)==null?void 0:ie.cell_delta_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((C=e.battery)==null?void 0:C.charge_daily_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((M=e.battery)==null?void 0:M.discharge_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((re=e.battery)==null?void 0:re.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((ye=e.battery)==null?void 0:ye.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((_e=e.battery)==null?void 0:_e.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((nt=e.battery)==null?void 0:nt.parallel_batteries)||2}).map((ae,N)=>{var At,Dt,zt,Wt;const L=N+1,R=((Dt=(At=e.battery)==null?void 0:At.modules)==null?void 0:Dt[N])||((Wt=(zt=e.battery)==null?void 0:zt.module_entities)==null?void 0:Wt[N])||{},Me=`sensor.bms_rack${L}_soc`,Oe=`sensor.bms_rack${L}_current`,Ye=`sensor.bms_rack${L}_voltage`,Ke=`sensor.bms_rack${L}_power`,Ue=`sensor.bms_rack${L}_temperature`,Vt=`sensor.bms_rack${L}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${L} (Модуль ${L})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${N}" value="${R.name||`Батарея ${L}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${L} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${N}" value="${R.soc_entity!==void 0?R.soc_entity:R.soc!==void 0?R.soc:Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${L} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${N}" value="${R.current_entity!==void 0?R.current_entity:Oe}" placeholder="${Oe}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${L} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${N}" value="${R.voltage_entity!==void 0?R.voltage_entity:R.volt!==void 0?R.volt:Ye}" placeholder="${Ye}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${L} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${N}" value="${R.temperature_entity!==void 0?R.temperature_entity:R.temp!==void 0?R.temp:Ue}" placeholder="${Ue}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${L} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${N}" value="${R.capacity_kwh!==void 0?R.capacity_kwh:L===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${L} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${N}" value="${R.cell_delta_entity!==void 0?R.cell_delta_entity:R.delta!==void 0?R.delta:Vt}" placeholder="${Vt}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${L} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${N}" value="${R.power_entity!==void 0?R.power_entity:Ke}" placeholder="${Ke} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(De=e.grid)!=null&&De.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((rt=e.grid)==null?void 0:rt.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((mt=e.grid)==null?void 0:mt.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${(($t=e.grid)==null?void 0:$t.auto_calculate)!==!1?"checked":""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((ze=e.grid)==null?void 0:ze.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((lt=e.grid)==null?void 0:lt.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Zt=e.grid)==null?void 0:Zt.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((St=e.grid)==null?void 0:St.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((Ge=e.grid)==null?void 0:Ge.status_entity)||""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((Pe=e.grid)==null?void 0:Pe.voltage_threshold)!==void 0?e.grid.voltage_threshold:90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((Bt=e.grid)==null?void 0:Bt.import_daily_entity)||""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((dt=e.grid)==null?void 0:dt.export_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((ct=e.grid)==null?void 0:ct.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((vt=e.grid)==null?void 0:vt.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((wt=e.load)==null?void 0:wt.auto_calculate)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((xt=e.load)==null?void 0:xt.separate_export)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((Ct=e.load)==null?void 0:Ct.essential_power_entity)||""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((Ht=e.load)==null?void 0:Ht.daily_house_entity)||""}">
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

          ${(((jt=e.load)==null?void 0:jt.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((It=e.load)==null?void 0:It.subloads)||[]).map((ae,N)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${N}" value="${ae.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${N}" style="width: 140px;">
                  <option value="boiler" ${ae.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${ae.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${ae.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${ae.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${ae.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${ae.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${ae.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${N}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${N}" value="${ae.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((Tt=e.tariffs)==null?void 0:Tt.enabled)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((Gt=e.tariffs)==null?void 0:Gt.currency)||"грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Ot=e.tariffs)==null?void 0:Ot.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((pt=e.tariffs)==null?void 0:pt.day_rate)??4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Yt=e.tariffs)==null?void 0:Yt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((ht=e.tariffs)==null?void 0:ht.night_rate)??2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Pt=e.tariffs)==null?void 0:Pt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Mt=e.tariffs)==null?void 0:Mt.export_rate)??5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(ae,N)=>{var L;return`<option value="${N}" ${(((L=e.tariffs)==null?void 0:L.night_start_hour)??23)===N?"selected":""}>${String(N).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(ae,N)=>{var L;return`<option value="${N}" ${(((L=e.tariffs)==null?void 0:L.night_end_hour)??7)===N?"selected":""}>${String(N).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 10px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі на нічну (з 23:00 до 07:00) та денну зону за годинником або з історії Home Assistant.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="fields-grid">
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowDailyCost" ${((Nt=e.tariffs)==null?void 0:Nt.show_daily_cost)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Lt=e.tariffs)==null?void 0:Lt.show_export_income)!==!1?"checked":""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Ft=e.tariffs)==null?void 0:Ft.show_active_badge)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((Rt=e.tariffs)==null?void 0:Rt.show_solar_savings)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `,this._bindEvents(),this._updateExpandBtn(),n){const ae=this.shadowRoot.querySelector(n);if(ae&&(ae.focus(),d!==null&&r!==null&&"setSelectionRange"in ae))try{ae.setSelectionRange(d,r)}catch{}}}_bindEvents(){var c,g,u,I,P,m,f,k,p,_,x,h;const e=this.shadowRoot;(c=e.getElementById("btnToggleExpand"))==null||c.addEventListener("click",()=>{this._applyExpand(!this._isDialogExpanded)}),e.querySelectorAll(".tab-btn").forEach(i=>{i.addEventListener("click",a=>{this._switchTab(a.target.dataset.tab)})}),(g=e.getElementById("btnPresetEsp"))==null||g.addEventListener("click",()=>this._applyPreset("deye_esphome")),(u=e.getElementById("btnPresetSolarman"))==null||u.addEventListener("click",()=>this._applyPreset("deye_solarman"));const t=(i,a)=>{const s=e.getElementById(i);s&&(s.addEventListener("input",v=>this._valueChanged(a,v.target.value,!1)),s.addEventListener("change",v=>this._valueChanged(a,v.target.value,!0)),s.addEventListener("blur",()=>this._flushConfig()))},n=(i,a)=>{const s=e.getElementById(i);s&&s.addEventListener("change",v=>this._valueChanged(a,v.target.checked,!0))},d=(i,a,s,v="")=>{const w=e.getElementById(i);w&&(w.addEventListener("input",D=>{const l=parseFloat(D.target.value);if(s){const E=e.getElementById(s);E&&(E.innerText=`${l}${v}`)}this._valueChanged(a,isNaN(l)?0:l,!1)}),w.addEventListener("change",D=>{const l=parseFloat(D.target.value);this._valueChanged(a,isNaN(l)?0:l,!0)}),w.addEventListener("blur",()=>this._flushConfig()))};t("title","title"),t("themeMode","theme_mode"),t("cardLanguage","language"),(I=e.getElementById("cardScale"))==null||I.addEventListener("input",i=>{const a=parseFloat(i.target.value),s=e.getElementById("cardScaleVal");s&&(s.innerText=`${Math.round(a*100)}%`),this._valueChanged("card_scale",a)}),(P=e.getElementById("cardScale"))==null||P.addEventListener("change",()=>this._flushConfig()),t("cardMaxWidth","max_width"),n("showQuickSettings","show_quick_settings"),t("ctrlSolarCharge","controls.solar_charge_entity"),t("ctrlSellPower","controls.sell_power_entity"),t("ctrlGridCharge","controls.grid_charge_entity"),n("animEnabled","animations.enabled"),d("animSpeed","animations.speed","animSpeedVal","s"),(m=e.getElementById("solarPvCount"))==null||m.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=a,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<a;){const s=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${s}`,name:`PV ${s}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${s}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${s}_current`,power_entity:`sensor.deye_12k_inverter_pv${s}_power`})}this._valueChanged("solar.pv_count",a,!0),this._valueChanged("solar.strings",this._config.solar.strings,!0),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[s]||(this._config.solar.strings[s]={}),this._config.solar.strings[s].name=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-volt-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[s]||(this._config.solar.strings[s]={}),this._config.solar.strings[s].voltage_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-curr-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[s]||(this._config.solar.strings[s]={}),this._config.solar.strings[s].current_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-power-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[s]||(this._config.solar.strings[s]={}),this._config.solar.strings[s].power_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-cap-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[s]||(this._config.solar.strings[s]={}),this._config.solar.strings[s].capacity_kw=parseFloat(a.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),t("solarTotalPower","solar.total_power_entity"),t("solarDailyYield","solar.daily_yield_entity"),d("solarTargetDaily","solar.target_daily_yield"),d("solarInstalledPower","solar.installed_power"),n("solarShowMetrics","solar.show_metrics"),t("invModel","inverter.model_name"),t("invPower","inverter.power_entity"),n("invShowSelfConsumption","inverter.show_self_consumption"),t("invSelfConsumptionEntity","inverter.self_consumption_entity"),d("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),t("invTempAc","inverter.ac_temperature_entity"),t("invTempDc","inverter.dc_temperature_entity"),t("invVolt","inverter.voltage_entity"),t("invCurrent","inverter.current_entity"),t("invFreq","inverter.frequency_entity"),(f=e.getElementById("auxType"))==null||f.addEventListener("change",i=>{const a=i.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=a;const v={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[a]||"Мікроінвертор";this._config.aux.title=v;const w=e.getElementById("auxTitle");w&&(w.value=v),this._valueChanged("aux.type",a,!0),this._valueChanged("aux.title",v,!0)}),t("auxTitle","aux.title"),t("auxPower","aux.power_entity"),(k=e.getElementById("windTurbineCount"))==null||k.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=a,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<a;){const s=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${s}`,name:`Вітряк ${s}`,power_entity:`sensor.wind_turbine_${s}_power`,speed_entity:`sensor.wind_turbine_${s}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",a,!0),this._valueChanged("wind.turbines",this._config.wind.turbines,!0),this.render()}),d("windThreshold","wind.animation_threshold","windThresholdVal","W"),(p=e.getElementById("windThreshold"))==null||p.addEventListener("input",i=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(i.target.value))}),t("windDailyEnergy","wind.daily_energy_entity"),t("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[s]||(this._config.wind.turbines[s]={}),this._config.wind.turbines[s].name=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-power-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[s]||(this._config.wind.turbines[s]={}),this._config.wind.turbines[s].power_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-speed-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[s]||(this._config.wind.turbines[s]={}),this._config.wind.turbines[s].rpm_entity=a.target.value,this._config.wind.turbines[s].speed_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-daily-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[s]||(this._config.wind.turbines[s]={}),this._config.wind.turbines[s].daily_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-monthly-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[s]||(this._config.wind.turbines[s]={}),this._config.wind.turbines[s].monthly_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),t("batSoc","battery.soc_entity"),t("batPower","battery.power_entity"),t("batPowerSign","battery.power_sign"),t("batVolt","battery.voltage_entity"),t("batCurrent","battery.current_entity"),t("batTemp","battery.temperature_entity"),t("batDelta","battery.cell_delta_entity"),t("batCapacity","battery.capacity_entity"),t("batChargeDaily","battery.charge_daily_entity"),t("batDischargeDaily","battery.discharge_daily_entity"),(_=e.getElementById("batParallelCount"))==null||_.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=a,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<a;){const s=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${s}`,name:`Батарея ${s}`,soc_entity:`sensor.bms_rack${s}_soc`,current_entity:`sensor.bms_rack${s}_current`,voltage_entity:`sensor.bms_rack${s}_voltage`,power_entity:`sensor.bms_rack${s}_power`,temperature_entity:`sensor.bms_rack${s}_temperature`,cell_delta_entity:`sensor.bms_rack${s}_cell_delta`})}this._valueChanged("battery.parallel_batteries",a,!0),this._valueChanged("battery.modules",this._config.battery.modules,!0),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].name=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-soc-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].soc_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-curr-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].current_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-volt-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].voltage_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-temp-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].temperature_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-delta-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].cell_delta_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-power-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].power_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-cap-inp").forEach(i=>{i.addEventListener("input",a=>{const s=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[s]||(this._config.battery.modules[s]={}),this._config.battery.modules[s].capacity_kwh=parseFloat(a.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),n("gridSellingEnabled","grid.selling_enabled"),n("gridAutoCalculate","grid.auto_calculate"),t("gridPower","grid.power_entity"),t("gridExternalPower","grid.external_power_entity"),t("gridVoltage","grid.voltage_entity"),t("gridStatus","grid.status_entity"),d("gridVoltageThreshold","grid.voltage_threshold"),t("gridPowerSign","grid.power_sign"),d("gridMinThreshold","grid.min_power_threshold"),t("gridImportDaily","grid.import_daily_entity"),t("gridExportDaily","grid.export_daily_entity"),t("gridNonEssential","grid.non_essential_power_entity"),t("gridCarPower","grid.car_power_entity"),n("loadAutoCalculate","load.auto_calculate"),n("loadSeparateExport","load.separate_export"),t("loadEssential","load.essential_power_entity"),t("loadDailyHouse","load.daily_house_entity");const r=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const i=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${i}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render()};(x=e.getElementById("btnAddSubload"))==null||x.addEventListener("click",r),(h=e.getElementById("btnAddSubloadBottom"))==null||h.addEventListener("click",r),e.querySelectorAll(".btn-del-subload").forEach(i=>{i.addEventListener("click",a=>{var w;const s=a.currentTarget||a.target.closest(".btn-del-subload"),v=parseInt(s.dataset.idx);(w=this._config.load)!=null&&w.subloads&&(this._config.load.subloads.splice(v,1),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render())})}),e.querySelectorAll(".subload-name").forEach(i=>{i.addEventListener("input",a=>{var v,w;const s=parseInt(a.target.dataset.idx);(w=(v=this._config.load)==null?void 0:v.subloads)!=null&&w[s]&&(this._config.load.subloads[s].name=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".subload-icon").forEach(i=>{i.addEventListener("change",a=>{var v,w;const s=parseInt(a.target.dataset.idx);(w=(v=this._config.load)==null?void 0:v.subloads)!=null&&w[s]&&(this._config.load.subloads[s].icon=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads,!0))})}),e.querySelectorAll(".subload-entity").forEach(i=>{i.addEventListener("input",a=>{var v,w;const s=parseInt(a.target.dataset.idx);(w=(v=this._config.load)==null?void 0:v.subloads)!=null&&w[s]&&(this._config.load.subloads[s].entity=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),i.addEventListener("blur",()=>this._flushConfig())}),n("tariffsEnabled","tariffs.enabled"),t("tariffCurrency","tariffs.currency"),d("tariffDayRate","tariffs.day_rate"),d("tariffNightRate","tariffs.night_rate"),d("tariffExportRate","tariffs.export_rate"),d("tariffNightStart","tariffs.night_start_hour"),d("tariffNightEnd","tariffs.night_end_hour"),n("tariffShowDailyCost","tariffs.show_daily_cost"),n("tariffShowExportIncome","tariffs.show_export_income"),n("tariffShowActiveBadge","tariffs.show_active_badge"),n("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",Aa);const Jt={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",bat_delta:"Розбаланс",bat_remaining:"Залишок",kwh_unit:"кВт·год"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",bat_delta:"Cell Delta",bat_remaining:"Remaining",kwh_unit:"kWh"}};class ei extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null}connectedCallback(){this._setupResizeObserver()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(ne))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=JSON.parse(JSON.stringify(e)),n=JSON.parse(JSON.stringify(ne));this._config=this._deepMerge(n,t);const d=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=d||this._config.theme_mode||"dark";const r=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=r||this._config.language||"uk";const c=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=c?parseFloat(c):this._config.card_scale||this._config.scale||1,this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(e){return typeof requestAnimationFrame<"u"?requestAnimationFrame(e):setTimeout(e,0)}_changeScale(e){var r,c;let t=typeof e=="number"?e:this._scale+(e||.1);t=Math.max(.7,Math.min(2,Math.round(t*100)/100)),this._scale=t,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",t.toString());const n=(r=this.shadowRoot)==null?void 0:r.querySelector(".energy-station-container");n&&(n.style.setProperty("--es-card-scale",t.toString()),n.style.zoom=t.toString());const d=(c=this.shadowRoot)==null?void 0:c.getElementById("headerZoomVal");d&&(d.innerText=`${Math.round(t*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,t){const n=Array.isArray(e)?[...e]:Object.assign({},e);if(!t||typeof t!="object")return n;for(const d of Object.keys(t)){const r=t[d],c=e?e[d]:void 0;r&&typeof r=="object"&&!Array.isArray(r)?n[d]=this._deepMerge(c||{},r):n[d]=r}return n}_getEntityState(e){var g;if(!this._hass||!e||!this._hass.states[e])return null;const t=this._hass.states[e],d=String(t.state).trim().replace(",","."),r=parseFloat(d),c=((g=t.attributes)==null?void 0:g.unit_of_measurement)||"";return{raw:t.state,val:isNaN(r)?0:r,unit:c,attributes:t.attributes}}_t(e){var n,d;const t=this._language||"uk";return((n=Jt[t])==null?void 0:n[e])||((d=Jt.uk)==null?void 0:d[e])||e}_toggleTheme(e){const t=e||(this._themeMode==="light"?"dark":"light");this._themeMode=t;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",t)}catch{}this._applyTheme()}_toggleLanguage(e){const t=e||(this._language==="en"?"uk":"en");this._language=t;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",t)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var c;const e=(c=this.shadowRoot)==null?void 0:c.querySelector(".energy-station-container");if(!e)return;const t=this._themeMode==="light";e.classList.toggle("theme-light",t);const n=this.shadowRoot.getElementById("headerThemeToggle");n&&(n.innerHTML=t?"☀️":"🌙",n.setAttribute("title",t?this._t("theme_dark"):this._t("theme_light")));const d=this.shadowRoot.getElementById("btnThemeDark"),r=this.shadowRoot.getElementById("btnThemeLight");d&&r&&(d.classList.toggle("active",!t),r.classList.toggle("active",t))}_formatPower(e,t=0){const n=this._language==="en"?"kW":"кВт";if(!e)return{num:t.toFixed(3),kw:t,str:`${t.toFixed(3)} ${n}`};let d=e.val;return e.unit==="W"&&(d=d/1e3),{num:d.toFixed(3),kw:d,str:`${d.toFixed(3)} ${n}`}}_fireMoreInfo(e){if(!e)return;const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_renderCardSkeleton(){var t,n,d,r,c,g,u,I,P,m,f,k,p,_,x,h,i,a;const e=this._config||ne;this._initialized=!0,this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((t=e.animations)==null?void 0:t.speed)||1.2}s;
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${te.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((n=e.solar)==null?void 0:n.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${te.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${te.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(d=e.grid)!=null&&d.show_non_essential&&((r=e.grid)!=null&&r.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${te.house_outline||te.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(c=e.grid)!=null&&c.show_car&&((g=e.grid)!=null&&g.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${te.car}</div>
              <div class="es-node-title" id="carTitle">${((u=e.grid)==null?void 0:u.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${te.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((I=e.inverter)==null?void 0:I.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((P=e.aux)==null?void 0:P.type)==="none"||((m=e.aux)==null?void 0:m.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${te[(f=e.aux)==null?void 0:f.type]||te.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((k=e.aux)==null?void 0:k.type)==="microinverter"&&(!((p=e.aux)!=null&&p.title)||((_=e.aux)==null?void 0:_.title)==="Вітрогенератор")?this._t("aux_microinverter"):((x=e.aux)==null?void 0:x.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((h=e.aux)==null?void 0:h.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((i=e.wind)==null?void 0:i.show)===!1&&((a=e.aux)==null?void 0:a.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${te.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),this._rAF(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),solarSavingsDaily:e.getElementById("solarSavingsDaily"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),totalPvPowerVal:e.getElementById("totalPvPowerVal"),totalPvPercentBadge:e.getElementById("totalPvPercentBadge"),totalPvSubline:e.getElementById("totalPvSubline"),totalPvCapDetail:e.getElementById("totalPvCapDetail"),totalPvCapTotal:e.getElementById("totalPvCapTotal"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridCostDailyRow:e.getElementById("gridCostDailyRow"),gridCostDailyVal:e.getElementById("gridCostDailyVal"),gridCostSplitVal:e.getElementById("gridCostSplitVal"),gridTariffBadge:e.getElementById("gridTariffBadge"),gridExportDaily:e.getElementById("gridExportDaily"),gridExportIncomeRow:e.getElementById("gridExportIncomeRow"),gridExportIncomeVal:e.getElementById("gridExportIncomeVal"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:e.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:e.getElementById("inverterSelfConsumptionVal"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batMasterTempVal:e.getElementById("batMasterTempVal"),batMasterTempBadge:e.getElementById("batMasterTempBadge"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer"),bottomControlsDock:e.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var u,I,P,m,f,k,p,_;const e=this._config||ne,t=((u=this._nodes)==null?void 0:u.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!t)return;if(t.innerHTML="",!(((I=e.wind)==null?void 0:I.show)!==!1||((P=e.aux)==null?void 0:P.type)==="wind")){t.classList.add("hidden");return}t.classList.remove("hidden");const d=((m=e.wind)==null?void 0:m.turbine_count)||((k=(f=e.wind)==null?void 0:f.turbines)==null?void 0:k.length)||2,r=((p=e.wind)==null?void 0:p.turbines)||[],c=document.createElement("div");c.className="es-wind-summary-bar es-mono",c.id="windStationSummaryBar",c.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,t.appendChild(c);const g=document.createElement("div");g.className="es-wind-pods-row",t.appendChild(g);for(let x=0;x<d;x++){const h=r[x]||{name:`Вітряк ${x+1}`,power_entity:`sensor.wind_turbine_${x+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((_=e.wind)==null?void 0:_.animation_threshold)||50},i=!!(h.daily_energy_entity||h.monthly_energy_entity),a=document.createElement("div");a.className="es-turbine-card glow-wind clickable-node",a.id=`turbineCard_${x+1}`,a.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${x+1}">
              ${te.wind_turbine}
            </div>
            <span>${h.name||`Вітряк ${x+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${x+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${x+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${x+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${x+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${x+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${i?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${x+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${x+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,a.addEventListener("click",()=>{this._fireMoreInfo(h.power_entity)}),g.appendChild(a)}}_renderDynamicPvPanels(){var c,g,u,I,P,m;const e=this._config||ne,t=this._nodes.pvPanelsContainer;if(!t)return;t.innerHTML="";const n=((c=e.solar)==null?void 0:c.pv_count)||((u=(g=e.solar)==null?void 0:g.strings)==null?void 0:u.length)||3,d=this._language==="en"?"kWp":"кВтп",r=((I=e.solar)==null?void 0:I.show_metrics)!==!1;for(let f=1;f<=n;f++){const k=f<10?`0${f}`:`${f}`,p=((m=(P=e.solar)==null?void 0:P.strings)==null?void 0:m[f-1])||{},_=p.name||`PV ${k}`,x=p.capacity_kw!==void 0?parseFloat(p.capacity_kw):4,h=p.voltage_entity||(f<=3?`sensor.deye_12k_inverter_pv${f}_voltage`:""),i=p.current_entity||(f<=3?`sensor.deye_12k_inverter_pv${f}_current`:""),a=document.createElement("div");a.className="es-pv-panel glow-solar clickable-node",a.dataset.pvIndex=f,a.id=`pvPanel_${f}`,a.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${te.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${_}</span>
        <span class="es-pv-val es-mono" id="pvVal_${f}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${f}" style="${r?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${f}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${f}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${f}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${f}">${x.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${d}</span> <span id="pvPercent_${f}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,a.addEventListener("click",()=>{var D;const w=p.power_entity||h||i||((D=e.solar)==null?void 0:D.total_power_entity);this._fireMoreInfo(w)});const s=a.querySelector(`#pvVolt_${f}`);s&&s.addEventListener("click",w=>{w.stopPropagation(),h?this._fireMoreInfo(h):p.power_entity&&this._fireMoreInfo(p.power_entity)});const v=a.querySelector(`#pvCurr_${f}`);v&&v.addEventListener("click",w=>{w.stopPropagation(),i?this._fireMoreInfo(i):p.power_entity&&this._fireMoreInfo(p.power_entity)}),t.appendChild(a)}}_renderDynamicSubloads(){var d;const e=this._config||ne,t=this._nodes.subloadsContainer;if(!t)return;t.innerHTML="",(((d=e.load)==null?void 0:d.subloads)||[]).forEach((r,c)=>{const g=document.createElement("div");g.className="es-subload-card clickable-node",g.id=`subloadCard_${c}`,g.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${te[r.icon]||te.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${r.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,g.addEventListener("click",()=>{this._fireMoreInfo(r.entity)}),t.appendChild(g)})}_renderDynamicBatteryRack(){var m,f,k,p,_,x,h;const e=this._config||ne,t=this._nodes.batteryRackContainer;if(!t)return;t.innerHTML="";const n=((m=e.battery)==null?void 0:m.parallel_batteries)||((k=(f=e.battery)==null?void 0:f.modules)==null?void 0:k.length)||2,d=[82,76,91,68,85,90,72,80],r=[52.4,52.4,52.4,52.4,52.4,52.4],c=[25,21,22.5,20,24,19.5,23,21.5],g=[12,8,15,9,14,11,18,10],u=this._t("bat_prefix"),I=this._language==="en"?"kW":"кВт",P=this._language==="en"?"kWh":"кВт·год";for(let i=1;i<=n;i++){const a=((_=(p=e.battery)==null?void 0:p.modules)==null?void 0:_[i-1])||((h=(x=e.battery)==null?void 0:x.module_entities)==null?void 0:h[i-1])||{},s=a.name||`${u} ${i}`,v=d[(i-1)%d.length],w=r[(i-1)%r.length],D=c[(i-1)%c.length],l=g[(i-1)%g.length],E=document.createElement("div");E.className="es-battery-pack-card glow-battery clickable-node",E.id=`batPackCard_${i}`,E.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${te.battery_vertical}</div>
        <span class="es-bat-name">${s}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${v}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${i}">${w.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${i}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${I}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${i}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${i}">${D.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${i}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${i}">${l} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${i}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${P}</div>
      `,E.addEventListener("click",A=>{var G;if(A.target.closest(`#batPackTemp_${i}`)){const O=a.temperature_entity||a.temp||`sensor.bms_rack${i}_temperature`;this._fireMoreInfo(O);return}if(A.target.closest(`#batPackDelta_${i}`)){const O=a.cell_delta_entity||a.delta_entity||`sensor.bms_rack${i}_cell_delta`;this._fireMoreInfo(O);return}const W=a.soc_entity||a.soc||a.voltage_entity||a.volt||a.current_entity||((G=e.battery)==null?void 0:G.soc_entity);this._fireMoreInfo(W)}),t.appendChild(E)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var _,x,h,i,a,s,v,w,D;const e=this._config||ne,t=((_=this._nodes)==null?void 0:_.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!t||(t.innerHTML="",e.show_quick_settings===!1))return;const n=this._themeMode==="light",d=this._language==="en",r=((x=e.controls)==null?void 0:x.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",c=((h=e.controls)==null?void 0:h.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",g=((i=e.controls)==null?void 0:i.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",u=document.createElement("div");u.className="es-quick-settings-card",u.id="quickSettingsCard",u.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${te.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n?te.sun_mode:te.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${d?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${r}">
              <span class="es-ctrl-icon es-ctrl-solar">${te.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${te.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${d?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${g}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${te.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(a=u.querySelector("#btnThemeToggle"))==null||a.addEventListener("click",l=>{l.stopPropagation(),this._toggleTheme()}),(s=u.querySelector("#btnLangToggle"))==null||s.addEventListener("click",l=>{l.stopPropagation(),this._toggleLanguage()}),(v=u.querySelector("#ctrlLabelWrapSolar"))==null||v.addEventListener("click",()=>this._fireMoreInfo(r)),(w=u.querySelector("#ctrlLabelWrapSell"))==null||w.addEventListener("click",()=>this._fireMoreInfo(c)),(D=u.querySelector("#ctrlLabelWrapGrid"))==null||D.addEventListener("click",()=>this._fireMoreInfo(g));const I=u.querySelector("#ctrlSliderSolar"),P=u.querySelector("#ctrlValSolar");I&&(this._updateSliderGradient(I),I.addEventListener("input",l=>{P&&(P.innerText=`${l.target.value} A`),this._updateSliderGradient(I)}),I.addEventListener("change",l=>{this._setNumberValue(r,l.target.value)}));const m=u.querySelector("#ctrlSliderSell"),f=u.querySelector("#ctrlValSell");m&&(this._updateSliderGradient(m),m.addEventListener("input",l=>{const E=Number(l.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");f&&(f.innerText=`${E} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(m)}),m.addEventListener("change",l=>{this._setNumberValue(c,l.target.value)}));const k=u.querySelector("#ctrlSliderGrid"),p=u.querySelector("#ctrlValGrid");k&&(this._updateSliderGradient(k),k.addEventListener("input",l=>{p&&(p.innerText=`${l.target.value} A`),this._updateSliderGradient(k)}),k.addEventListener("change",l=>{this._setNumberValue(g,l.target.value)})),t.appendChild(u),this._updateControlSliders()}_updateSliderGradient(e){if(!e)return;const t=parseFloat(e.min)||0,n=parseFloat(e.max)||100,d=parseFloat(e.value)||0,r=Math.max(0,Math.min(100,(d-t)/(n-t)*100));e.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${r}%, rgba(255, 255, 255, 0.12) ${r}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(e,t){if(!this._hass||!e)return;const d=e.split(".")[0]||"number",r=Number(t);this._hass.callService(d,"set_value",{entity_id:e,value:r})}_updateControlSliders(){var f,k,p,_,x,h,i,a,s;const e=this._config||ne;if(e.show_quick_settings===!1)return;const t=this.shadowRoot;if(!t)return;const n=((f=e.controls)==null?void 0:f.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",d=((k=e.controls)==null?void 0:k.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",r=((p=e.controls)==null?void 0:p.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",c=t.getElementById("ctrlSliderSolar"),g=t.getElementById("ctrlValSolar"),u=t.getElementById("ctrlSliderSell"),I=t.getElementById("ctrlValSell"),P=t.getElementById("ctrlSliderGrid"),m=t.getElementById("ctrlValGrid");if(c&&(!c.matches||!c.matches(":active"))){const v=(x=(_=this._hass)==null?void 0:_.states)==null?void 0:x[n],w=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):c.value?parseFloat(c.value):80;c.value=w,g&&(g.innerText=`${Math.round(w)} A`),this._updateSliderGradient(c)}if(u&&(!u.matches||!u.matches(":active"))){const v=(i=(h=this._hass)==null?void 0:h.states)==null?void 0:i[d],w=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):u.value?parseFloat(u.value):5e3;u.value=w;const D=Math.round(w).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),l=this._language==="uk"?"Вт":"W";I&&(I.innerText=`${D} ${l}`),this._updateSliderGradient(u)}if(P&&(!P.matches||!P.matches(":active"))){const v=(s=(a=this._hass)==null?void 0:a.states)==null?void 0:s[r],w=v&&!isNaN(parseFloat(v.state))?parseFloat(v.state):P.value?parseFloat(P.value):70;P.value=w,m&&(m.innerText=`${Math.round(w)} A`),this._updateSliderGradient(P)}}_bindInteractions(){var n,d,r,c,g,u,I,P,m,f,k,p,_,x,h,i,a,s,v,w,D;const e=this.shadowRoot,t=this._config||ne;(n=e.getElementById("headerThemeToggle"))==null||n.addEventListener("click",l=>{l.stopPropagation(),this._toggleTheme()}),(d=e.getElementById("headerLangToggle"))==null||d.addEventListener("click",l=>{l.stopPropagation(),this._toggleLanguage()}),(r=e.getElementById("headerZoomIn"))==null||r.addEventListener("click",l=>{l.stopPropagation(),this._changeScale(this._scale+.1)}),(c=e.getElementById("headerZoomOut"))==null||c.addEventListener("click",l=>{l.stopPropagation(),this._changeScale(this._scale-.1)}),(g=e.getElementById("headerZoomVal"))==null||g.addEventListener("click",l=>{l.stopPropagation(),this._changeScale(1)}),(u=e.getElementById("solarHeaderNode"))==null||u.addEventListener("click",()=>{var l,E;this._fireMoreInfo(((l=t.solar)==null?void 0:l.daily_yield_entity)||((E=t.solar)==null?void 0:E.total_power_entity))}),(I=e.getElementById("totalPvPowerBadge"))==null||I.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.solar)==null?void 0:l.total_power_entity)}),(P=e.getElementById("gridNode"))==null||P.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.grid)==null?void 0:l.power_entity)}),(m=e.getElementById("nonEssentialNode"))==null||m.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.grid)==null?void 0:l.non_essential_power_entity)}),(f=e.getElementById("carNode"))==null||f.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.grid)==null?void 0:l.car_power_entity)}),(k=e.getElementById("inverterNode"))==null||k.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.inverter)==null?void 0:l.power_entity)}),(p=e.getElementById("inverterSelfConsumptionBox"))==null||p.addEventListener("click",l=>{var E;l.stopPropagation(),(E=t.inverter)!=null&&E.self_consumption_entity&&this._fireMoreInfo(t.inverter.self_consumption_entity)}),(_=e.getElementById("auxNode"))==null||_.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.aux)==null?void 0:l.power_entity)}),(x=e.getElementById("essentialNode"))==null||x.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.load)==null?void 0:l.essential_power_entity)}),(h=e.getElementById("masterBatteryHub"))==null||h.addEventListener("click",()=>{var l;this._fireMoreInfo((l=t.battery)==null?void 0:l.soc_entity)}),(i=e.getElementById("batChargeDaily"))==null||i.addEventListener("click",l=>{var E;l.stopPropagation(),this._fireMoreInfo(((E=t.battery)==null?void 0:E.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(a=e.getElementById("batDischargeDaily"))==null||a.addEventListener("click",l=>{var E;l.stopPropagation(),this._fireMoreInfo(((E=t.battery)==null?void 0:E.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let l=1;l<=8;l++){const E=e.getElementById(`batBranchBadge_${l}`),A=((v=(s=t.battery)==null?void 0:s.modules)==null?void 0:v[l-1])||((D=(w=t.battery)==null?void 0:w.module_entities)==null?void 0:D[l-1])||{};E==null||E.addEventListener("click",()=>{var G;const W=A.power_entity||A.current_entity||A.soc_entity||((G=t.battery)==null?void 0:G.soc_entity);this._fireMoreInfo(W)})}}_fetchNightEndFromHa(e,t){var u,I;if(this._fetchingHistoryForDate===e)return;const d=(u=(this._config||ne).grid)==null?void 0:u.import_daily_entity;if(!((I=this._hass)!=null&&I.callWS)||!d)return;this._fetchingHistoryForDate=e;const r=new Date,c=new Date(r.getFullYear(),r.getMonth(),r.getDate(),t,0,0),g=new Date(r.getFullYear(),r.getMonth(),r.getDate(),t,15,0);this._hass.callWS({type:"history/history_during_period",start_time:c.toISOString(),end_time:g.toISOString(),entity_ids:[d],no_attributes:!0}).then(P=>{const m=P==null?void 0:P[d];if(m&&m.length>0){const f=parseFloat(m[0].state);if(!isNaN(f)&&f>=0){const k=`es_tariff_split_${e}`;let p={};if(typeof localStorage<"u")try{const _=localStorage.getItem(k);_&&(p=JSON.parse(_))}catch{}if(p.night_end=f,typeof localStorage<"u")try{localStorage.setItem(k,JSON.stringify(p))}catch{}this._hass&&this._updateValues()}}}).catch(()=>{})}_calculateTariffs(e,t,n){var v,w,D,l,E,A,W,G,O,J,y,$,B;const r=(this._config||ne).tariffs||{};if(r.enabled===!1){(v=this._nodes)!=null&&v.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(w=this._nodes)!=null&&w.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(D=this._nodes)!=null&&D.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),(l=this._nodes)!=null&&l.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");return}const c=r.currency||"грн",g=typeof r.day_rate=="number"?r.day_rate:4.32,u=typeof r.night_rate=="number"?r.night_rate:2.16,I=typeof r.export_rate=="number"?r.export_rate:5.3,P=typeof r.night_start_hour=="number"?r.night_start_hour:23,m=typeof r.night_end_hour=="number"?r.night_end_hour:7,f=new Date,k=f.getHours()+f.getMinutes()/60,p=P>m?k>=P||k<m:k>=P&&k<m;if((E=this._nodes)!=null&&E.gridTariffBadge&&r.show_active_badge!==!1){const b=p?u:g,T=p?this._t("tariff_night"):this._t("tariff_day"),j=p?"🌙":"☀️",K=p?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",le=p?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",de=p?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=K,this._nodes.gridTariffBadge.style.border=`1px solid ${le}`,this._nodes.gridTariffBadge.style.color=de,this._nodes.gridTariffBadge.innerText=`${j} ${T}: ${b.toFixed(2)} ${c}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(A=this._nodes)!=null&&A.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((W=this._nodes)!=null&&W.solarSavingsDaily&&r.show_solar_savings!==!1&&n>0){const b=n*g;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${b.toFixed(2)} ${c}`,this._nodes.solarSavingsDaily.style.display="block"}else(G=this._nodes)!=null&&G.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((O=this._nodes)!=null&&O.gridExportIncomeRow&&r.show_export_income!==!1&&typeof t=="number"&&t>0){const b=t*I;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${b.toFixed(2)} ${c}`),this._nodes.gridExportIncomeRow.style.display="block"}else(J=this._nodes)!=null&&J.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof e!="number"||isNaN(e)||e<0){(y=this._nodes)!=null&&y.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");return}const _=`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`,x=`es_tariff_split_${_}`;let h={};if(typeof localStorage<"u")try{const b=localStorage.getItem(x);b&&(h=JSON.parse(b))}catch{}let i=0,a=0;if(k<m){if(i=e,a=0,h.night_end=e,typeof localStorage<"u")try{localStorage.setItem(x,JSON.stringify(h))}catch{}}else if(k>=m&&k<P){if(typeof h.night_end=="number"&&h.night_end<=e)i=h.night_end,a=Math.max(0,e-i);else{this._fetchNightEndFromHa(_,m);const b=Math.min(1,m/k);i=e*b,a=Math.max(0,e-i)}if(h.day_end=e,typeof localStorage<"u")try{localStorage.setItem(x,JSON.stringify(h))}catch{}}else{const b=typeof h.night_end=="number"?h.night_end:e*(m/k),T=typeof h.day_end=="number"?h.day_end:e;a=Math.max(0,T-b);const j=Math.max(0,e-T);i=b+j}const s=i*u+a*g;($=this._nodes)!=null&&$.gridCostDailyRow&&r.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${s.toFixed(2)} ${c}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${i.toFixed(1)} + ☀️ ${a.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(B=this._nodes)!=null&&B.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none")}_updateValues(){var Mt,Nt,Lt,Ft,Rt,ae,N,L,R,Me,Oe,Ye,Ke,Ue,Vt,At,Dt,zt,Wt,ti,ii,ai,si,oi,ni,ri,li,di,ci,pi,hi,gi,_i,ui,yi,fi,bi,mi,vi,wi,xi,ki,Ei,$i,Si,Bi,Ci,Ii,Ti,Pi,Mi,Ni,Li,Fi,Ri,Vi,Ai,Di,zi,Wi,qi,Hi,ji,Gi,Oi,Yi,Ki,Ui,Ji,Xi,Zi,Qi,ea,ta,ia,aa,sa,oa,na,ra,la,da,ca,pa,ha,ga,_a,ua,ya,fa,ba,ma,va,wa,xa,ka,Ea,$a,Sa,Ba,Ca,Ia,Ta,Pa,Ma,Na,La;if(!this._nodes.dailySolarYield)return;const e=this._config||ne,t=this._language==="en"?"kW":"кВт",n=((Mt=e.solar)==null?void 0:Mt.pv_count)||((Lt=(Nt=e.solar)==null?void 0:Nt.strings)==null?void 0:Lt.length)||3;let d=0,r=0,c=!1;for(let o=1;o<=n;o++){const F=(Rt=(Ft=e.solar)==null?void 0:Ft.strings)==null?void 0:Rt[o-1],H=(F==null?void 0:F.voltage_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_voltage`:""),U=(F==null?void 0:F.current_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_current`:""),S=(F==null?void 0:F.power_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_power`:"");if(this._getEntityState(S)||this._getEntityState(H)||this._getEntityState(U)){c=!0;break}}for(let o=1;o<=n;o++){const F=this.shadowRoot.getElementById(`pvVal_${o}`),H=this.shadowRoot.getElementById(`pvVolt_${o}`),U=this.shadowRoot.getElementById(`pvCurr_${o}`),S=(N=(ae=e.solar)==null?void 0:ae.strings)==null?void 0:N[o-1],X=(S==null?void 0:S.voltage_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_voltage`:""),V=(S==null?void 0:S.current_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_current`:""),Y=(S==null?void 0:S.power_entity)||(o<=3?`sensor.deye_12k_inverter_pv${o}_power`:""),z=this._getEntityState(X),Z=this._getEntityState(V),q=this._getEntityState(Y);let se=0,Te=0,he=0;q?he=this._formatPower(q).kw:z&&Z?he=z.val*Z.val/1e3:z?he=0:he=c?0:4,z?se=z.val:se=c?0:380+o*4.5,Z?Te=Z.val:q&&se>0?Te=he*1e3/se:Te=c?0:3.12+o*.28,d+=he,r+=Te,F&&(F.innerText=`${he.toFixed(3)} ${t}`),H&&(H.innerText=`${se.toFixed(1)} V`),U&&(U.innerText=`${Te.toFixed(2)} A`);const oe=this.shadowRoot.getElementById(`pvMetrics_${o}`);if(oe){const Qe=((L=e.solar)==null?void 0:L.show_metrics)!==!1,et=!!(z||Z||!c||S!=null&&S.voltage_entity||S!=null&&S.current_entity||se>0||Te>0);oe.style.display=Qe&&et?"flex":"none"}const Se=(S==null?void 0:S.capacity_kw)!==void 0?parseFloat(S.capacity_kw):(S==null?void 0:S.installed_power)!==void 0?parseFloat(S.installed_power):c?0:4,Je=Se>0&&he>0?Math.min(100,Math.round(he/Se*100)):0,gt=this.shadowRoot.getElementById(`pvCapVal_${o}`),Xe=this.shadowRoot.getElementById(`pvPercent_${o}`),Ze=this.shadowRoot.getElementById(`pvCap_${o}`);gt&&(Se>0?(gt.innerText=Se.toFixed(1).replace(".",","),Xe&&(Xe.innerText=`(${Je}%)`,Xe.style.color=Je>=70?"#34d399":Je>=30?"#fbbf24":"#94a3b8"),Ze&&(Ze.style.display="flex")):Ze&&(Ze.style.display="none"))}const g=this._getEntityState((R=e.solar)==null?void 0:R.total_power_entity);let u=0;g?u=this._formatPower(g).kw:u=d;let I=((Me=e.solar)==null?void 0:Me.installed_power)!==void 0?parseFloat(e.solar.installed_power):0;if(isNaN(I)||I<=0){let o=0;for(let F=0;F<n;F++){const H=(Ye=(Oe=e.solar)==null?void 0:Oe.strings)==null?void 0:Ye[F],U=(H==null?void 0:H.capacity_kw)!==void 0?parseFloat(H.capacity_kw):(H==null?void 0:H.installed_power)!==void 0?parseFloat(H.installed_power):0;!isNaN(U)&&U>0&&(o+=U)}I=o>0?o:c?0:12}const P=I>0?u/I*100:0,m=Math.min(100,Math.max(0,P)),f=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${u.toFixed(3)} ${t}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${u.toFixed(3)} ${t}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${r.toFixed(2)} A`:`Сумарний струм СЕС: ${r.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(I>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(m)}%`,this._nodes.totalPvPercentBadge.style.color=m>=70?"#34d399":m>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=m>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(I>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${m.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=m>=70?"#34d399":m>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${I.toFixed(1).replace(".",",")} ${f})`)):r>0&&((Ke=e.solar)==null?void 0:Ke.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${r.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const k=this._getEntityState((Ue=e.solar)==null?void 0:Ue.daily_yield_entity),p=k?k.val:c?0:48.6;this._nodes.dailySolarYield.innerText=p.toFixed(1);const _=((Vt=e.solar)==null?void 0:Vt.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=_.toFixed(1);const x=Math.min(100,Math.round(p/_*100));this._nodes.solarProgressBar.style.width=`${x}%`;const h=this._getEntityState((At=e.inverter)==null?void 0:At.power_entity);this._nodes.inverterPowerVal&&((Dt=e.inverter)!=null&&Dt.power_entity&&h?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(h,0).str):this._nodes.inverterPowerVal.style.display="none");const i=this._getEntityState((zt=e.inverter)==null?void 0:zt.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=i?i.val.toFixed(2):"41,20";const a=this._getEntityState((Wt=e.inverter)==null?void 0:Wt.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=a?a.val.toFixed(2):"38,40";const s=this._getEntityState((ti=e.inverter)==null?void 0:ti.voltage_entity);this._nodes.inverterVolt.innerText=s?s.val.toFixed(2):"231,45";const v=this._getEntityState((ii=e.inverter)==null?void 0:ii.current_entity);this._nodes.inverterCurrent.innerText=v?v.val.toFixed(2):"8,60";const w=this._getEntityState((ai=e.inverter)==null?void 0:ai.frequency_entity);this._nodes.inverterFreq.innerText=w?w.val.toFixed(2):"50,01";const D=((si=e.wind)==null?void 0:si.show)!==!1||((oi=e.aux)==null?void 0:oi.type)==="wind",l=this.shadowRoot.getElementById("windStationContainer"),E=this._nodes.auxNode;let A=0;if(l)if(!D)l.classList.add("hidden");else{l.classList.remove("hidden");const o=((ni=e.wind)==null?void 0:ni.turbine_count)||((li=(ri=e.wind)==null?void 0:ri.turbines)==null?void 0:li.length)||2,F=((di=e.wind)==null?void 0:di.turbines)||[];let H=0,U=0,S=!1,X=!1;for(let q=0;q<o;q++){const se=F[q]||{power_entity:`sensor.wind_turbine_${q+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((ci=e.wind)==null?void 0:ci.animation_threshold)||50},Te=this.shadowRoot.getElementById(`turbinePower_${q+1}`),he=this.shadowRoot.getElementById(`turbineStatus_${q+1}`),oe=this.shadowRoot.getElementById(`turbineIcon_${q+1}`),Se=this.shadowRoot.getElementById(`turbineCard_${q+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${q+1}`);const Je=this.shadowRoot.getElementById(`turbineDailyVal_${q+1}`),gt=this.shadowRoot.getElementById(`turbineMonthlyVal_${q+1}`),Xe=this.shadowRoot.getElementById(`turbineEnergyFooter_${q+1}`),Ze=this._hass?0:q===0?1.56:.22,Qe=this._getEntityState(se.power_entity),et=this._formatPower(Qe,Ze);Te&&(Te.innerText=et.str),A+=et.kw;let _t=et.kw*1e3;Qe&&Qe.unit==="W"&&(_t=Qe.val);const kt=se.animation_threshold??((pi=e.wind)==null?void 0:pi.animation_threshold)??50,We=oe==null?void 0:oe.querySelector(".turbine-rotor"),Et=se.rpm_entity||se.speed_entity||((hi=e.wind)==null?void 0:hi.rpm_entity)||((gi=e.wind)==null?void 0:gi.speed_entity)||(q===0?"sensor.wind_rpm":"");let Q=Et&&((_i=this._hass)!=null&&_i.states[Et])?this._getEntityState(Et):null;if(!Q&&q===0&&((ui=this._hass)!=null&&ui.states["sensor.wind_rpm"])&&(Q=this._getEntityState("sensor.wind_rpm")),_t>=kt||Q&&typeof Q.val=="number"&&Q.val>0){We&&We.classList.add("spinning"),Se&&(Se.classList.add("glow-wind"),Se.style.borderColor="rgba(6, 182, 212, 0.55)");const Re=((yi=e.wind)==null?void 0:yi.max_power)||3e3,Kt=((fi=e.wind)==null?void 0:fi.max_rpm)||600;let qt=0;Q&&typeof Q.val=="number"&&Q.val>0?qt=Math.min(1,Math.max(0,Q.val/Kt)):qt=Math.min(1,Math.max(0,(_t-kt)/(Re-kt)));const me=(3.2-qt*2.75).toFixed(2);We&&We.style.setProperty("--turbine-speed",`${me}s`),he&&(he.innerText=this._t("wind_gen"),he.style.color="#67e8f9")}else We&&We.classList.remove("spinning"),Se&&(Se.classList.remove("glow-wind"),Se.style.borderColor="rgba(255, 255, 255, 0.08)"),he&&(he.innerText=this._t("wind_calm"),he.style.color="#94a3b8");const yt=this.shadowRoot.getElementById(`turbineRpmBox_${q+1}`);if(yt)if(Q&&Q.raw!=="unavailable"&&Q.raw!=="unknown"&&typeof Q.val=="number"&&!isNaN(Q.val)){yt.style.display="inline";const Kt=Q.unit?Q.unit:"RPM";yt.innerHTML=`<span id="turbineRpmVal_${q+1}">${Math.round(Q.val)}</span> ${Kt}`}else yt.style.display="none";const xe=this._getEntityState(se.daily_energy_entity),Le=this._getEntityState(se.monthly_energy_entity);Je&&(Je.innerText=xe&&typeof xe.val=="number"&&!isNaN(xe.val)?xe.val.toFixed(2):"0.00"),gt&&(gt.innerText=Le&&typeof Le.val=="number"&&!isNaN(Le.val)?Le.val.toFixed(1):"0.0");const Fe=!!(se.daily_energy_entity||se.monthly_energy_entity);Xe&&(Xe.style.display=Fe?"flex":"none"),xe&&typeof xe.val=="number"&&!isNaN(xe.val)&&(H+=xe.val,S=!0),Le&&typeof Le.val=="number"&&!isNaN(Le.val)&&(U+=Le.val,X=!0)}const V=this.shadowRoot.getElementById("windTotalDailyVal"),Y=this.shadowRoot.getElementById("windTotalMonthlyVal"),z=this._getEntityState((bi=e.wind)==null?void 0:bi.daily_energy_entity),Z=this._getEntityState((mi=e.wind)==null?void 0:mi.monthly_energy_entity);V&&(z&&typeof z.val=="number"&&!isNaN(z.val)?V.innerText=z.val.toFixed(2):S?V.innerText=H.toFixed(2):V.innerText="0.00"),Y&&(Z&&typeof Z.val=="number"&&!isNaN(Z.val)?Y.innerText=Z.val.toFixed(1):X?Y.innerText=U.toFixed(1):Y.innerText="0.0")}let W=0;if(E)if(((vi=e.aux)==null?void 0:vi.type)==="none"||((wi=e.aux)==null?void 0:wi.type)==="wind")E.classList.add("hidden");else{E.classList.remove("hidden");const o=this._getEntityState((xi=e.aux)==null?void 0:xi.power_entity),F=this._hass?0:2,H=this._formatPower(o,F);W=H.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=H.str);const U={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let S=(ki=e.aux)==null?void 0:ki.title;((Ei=e.aux)==null?void 0:Ei.type)==="microinverter"&&(!S||S==="Вітрогенератор")?S="Мікроінвертор":($i=e.aux)!=null&&$i.type&&U[e.aux.type]&&(!S||S==="Вітрогенератор")?S=U[e.aux.type]:S||(S="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=S),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=te[(Si=e.aux)==null?void 0:Si.type]||te.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Bi=e.aux)==null?void 0:Bi.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),E.style.borderColor="rgba(192, 132, 252, 0.45)",E.style.background="rgba(88, 28, 135, 0.35)",E.classList.remove("glow-wind"),E.classList.add("glow-aux")}const G=this.shadowRoot.getElementById("nonEssentialNode"),O=!!((Ci=e.grid)!=null&&Ci.show_non_essential&&((Ii=e.grid)!=null&&Ii.non_essential_power_entity))||((Ti=e.grid)==null?void 0:Ti.show_non_essential)!==!1&&!!((Pi=e.grid)!=null&&Pi.non_essential_power_entity);let J=0;if(G)if(O){G.classList.remove("hidden");const o=this._getEntityState(e.grid.non_essential_power_entity),F=this._formatPower(o,0);J=F.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=F.str)}else G.classList.add("hidden");const y=this.shadowRoot.getElementById("carNode"),$=!!((Mi=e.grid)!=null&&Mi.show_car&&((Ni=e.grid)!=null&&Ni.car_power_entity))||((Li=e.grid)==null?void 0:Li.show_car)!==!1&&!!((Fi=e.grid)!=null&&Fi.car_power_entity);let B=0;if(y)if($){y.classList.remove("hidden");const o=this._getEntityState(e.grid.car_power_entity),F=this._formatPower(o,0);B=F.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=F.str)}else y.classList.add("hidden");let b=0;(((Ri=e.load)==null?void 0:Ri.subloads)||[]).forEach((o,F)=>{const H=this.shadowRoot.getElementById(`subloadVal_${F}`),U=this._getEntityState(o.entity),S=this._formatPower(U,0);b+=S.kw,H&&(H.innerText=S.str)});const T=this._getEntityState((Vi=e.battery)==null?void 0:Vi.soc_entity),j=T?T.val:80;this._nodes.masterBatterySoc.innerText=`${j.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const K=this._getEntityState((Ai=e.battery)==null?void 0:Ai.power_entity),le=this._getEntityState((Di=e.battery)==null?void 0:Di.current_entity),de=K?K.unit==="W"?K.val/1e3:K.val:0,ke=((zi=e.battery)==null?void 0:zi.power_sign)||((Wi=e.battery)!=null&&Wi.invert_power?"standard":"deye");let pe=!1,ce=!1;const ue=Math.abs(de);ue>=.02?ke==="deye"?de<0?pe=!0:ce=!0:de>0?pe=!0:ce=!0:le&&Math.abs(le.val)>=.3&&(ke==="deye"?le.val<0?pe=!0:ce=!0:le.val>0?pe=!0:ce=!0),this._isCharging=pe,this._isDischarging=ce;const be=pe?ue:0,Be=ce?ue:0;if(this._nodes.masterBatteryFlowHint){let o=this._t("bat_idle"),F="#94a3b8";pe?(o=this._t("bat_dir_charge"),F="#34d399"):ce&&(o=this._t("bat_dir_discharge"),F="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ue.toFixed(3)} ${t}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${F}; font-weight: 700; font-size: 14px;">${o}</span>`}const Ve=this._getEntityState((qi=e.battery)==null?void 0:qi.voltage_entity),at=Ve?Ve.val.toFixed(2):"53.24",bt=le?le.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${at.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${bt.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Hi=e.battery)==null?void 0:Hi.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const o=((ji=e.battery)==null?void 0:ji.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${o}%`}let we=this._getEntityState((Gi=e.load)==null?void 0:Gi.essential_power_entity);!we&&(!((Oi=e.load)!=null&&Oi.essential_power_entity)||((Yi=e.load)==null?void 0:Yi.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((Ki=e.load)==null?void 0:Ki.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(we=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const Ee=we&&typeof we.val=="number"&&!isNaN(we.val)?Math.max(0,we.unit==="W"?we.val/1e3:we.val):0,st=!!(we&&Ee>0);let fe=null,Ce=!1;if((Ui=e.grid)!=null&&Ui.external_power_entity){const o=this._getEntityState(e.grid.external_power_entity);o&&typeof o.val=="number"&&!isNaN(o.val)&&(fe=o,Ce=!0)}if(!fe){let o=this._getEntityState((Ji=e.grid)==null?void 0:Ji.power_entity);if(!o){const U=["sensor.deye_12k_inverter_total_grid_power","sensor.deye_12k_inverter_grid_power","sensor.esp32_deye_inverter_grid_power","sensor.deye_grid_power","sensor.grid_power","sensor.inverter_12_kvt_grid_power","sensor.solarman_total_grid_power","sensor.solarman_grid_power","sensor.sunsynk_grid_power","sensor.sunsynk_total_grid_power"];for(const S of U){const X=this._getEntityState(S);if(X&&typeof X.val=="number"&&!isNaN(X.val)){o=X;break}}}const F=o?o.unit==="W"?o.val/1e3:o.val:0,H=u+A+(W>0?W:0)+Be;if(o&&F>.05)fe=o,Ce=!1;else{const U=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"],S=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),X=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),V=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");let Y=null;if(S&&X&&V&&!isNaN(S.val)&&!isNaN(X.val)&&!isNaN(V.val)){const z=(S.unit==="kW"?S.val*1e3:S.val)+(X.unit==="kW"?X.val*1e3:X.val)+(V.unit==="kW"?V.val*1e3:V.val);Y={val:z,unit:"W",raw:String(z)}}if(!Y)for(const z of U){const Z=this._getEntityState(z);if(Z&&typeof Z.val=="number"&&!isNaN(Z.val)){Y=Z;break}}if(!Y&&((Xi=this._hass)!=null&&Xi.states)){const Z=Object.keys(this._hass.states).find(q=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(q)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(q));if(Z){const q=this._getEntityState(Z);q&&typeof q.val=="number"&&!isNaN(q.val)&&(Y=q)}}if(Y){const z=Math.abs(Y.unit==="kW"?Y.val:Y.val/1e3);!(z<.03&&(be>.2&&H<.1||F>.1&&H<.1))&&z>0&&(fe=Y,Ce=!0)}fe||(fe=o,Ce=!1)}}const ge=fe?fe.unit==="W"?fe.val/1e3:fe.val:0,He=((Zi=e.grid)==null?void 0:Zi.power_sign)||((Qi=e.grid)!=null&&Qi.invert_power?"inverted":"deye"),ot=((ea=e.grid)==null?void 0:ea.selling_enabled)===!0,Ie=(((ta=e.grid)==null?void 0:ta.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3,Ae=this._getEntityState((ia=e.grid)==null?void 0:ia.status_entity),Ne=this._getEntityState(((aa=e.grid)==null?void 0:aa.voltage_entity)||((sa=e.inverter)==null?void 0:sa.voltage_entity)),je=((oa=e.grid)==null?void 0:oa.voltage_threshold)!==void 0?e.grid.voltage_threshold:90;let $e=!0;if(Ae){const o=String(Ae.raw||Ae.val).toLowerCase();(o==="off"||o==="false"||o==="0"||o==="disconnected"||o==="offline"||o==="unavailable"||o==="unknown")&&($e=!1)}else Ne&&typeof Ne.val=="number"&&!isNaN(Ne.val)&&Ne.val<je&&($e=!1);let ie=!1,C=!1,M=0;if(!$e)M=0,ie=!1,C=!1;else{if(Ce)M=Math.abs(ge),M>=Ie&&(He==="deye"?ge<0?ie=!0:C=!0:ge>0?ie=!0:C=!0);else{if(He==="deye"){if(ge>0)M=ge,M>=Ie&&(C=!0);else if(ge<0){const V=Math.abs(ge),Y=Math.max(0,V-Ee);Y>=Ie?(M=Y,ie=!0):(M=0,ie=!1)}}else if(ge<0)M=Math.abs(ge),M>=Ie&&(C=!0);else if(ge>0){const V=Math.max(0,ge-Ee);V>=Ie?(M=V,ie=!0):(M=0,ie=!1)}if(((na=e.grid)==null?void 0:na.auto_calculate)!==!1&&C){const V=Math.max(Ee,b),Y=u+A+(W>0?W:0)+Be;be+V+J+B>Y+M+.1&&(M=M+V)}}const o=u+A+(W>0?W:0)+Be,F=o<.15,H=o<be+.05;if(!Ce&&(F||H)){const X=this._getEntityState(((ra=e.grid)==null?void 0:ra.voltage_entity)||((la=e.inverter)==null?void 0:la.voltage_entity)),V=this._getEntityState(((da=e.inverter)==null?void 0:da.current_entity)||"sensor.deye_12k_inverter_grid_current"),Y=X&&typeof X.val=="number"&&!isNaN(X.val)?X.val:0,z=V&&typeof V.val=="number"&&!isNaN(V.val)?V.val:0,Z=Y>=je&&z>=1,q=be>.2&&o<.1;if(Z){const se=Y*z*.9/1e3;(M<.05||se>M+.2)&&(M=se,C=!0,ie=!1)}else if(q&&(M<.05||M<be-.05)){const se=Math.max(Ee,b);M=Math.max(M,be+.25+se),C=!0,ie=!1}}const S=Math.max(0,u+A+(W>0?W:0)+Be-be-Ee-J-B);ie&&M>S+.1&&(M=S,M<Ie&&(ie=!1,M=0)),ie&&!ot&&(ie=!1,M=0)}const re=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&($e?(this._nodes.gridPowerVal.innerText=`${M.toFixed(3)} ${t}`,ie?this._nodes.gridPowerVal.style.color="#34d399":C?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${t}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&($e?ie?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):C?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),re&&($e?(re.classList.add("glow-grid"),re.style.borderColor="rgba(56, 189, 248, 0.4)"):(re.classList.remove("glow-grid"),re.style.borderColor="rgba(239, 68, 68, 0.45)"));const ye=this._getEntityState((ca=e.grid)==null?void 0:ca.import_daily_entity);this._nodes.gridImportDaily.innerText=ye?`${ye.val.toFixed(2)} kWh`:"0.00 kWh";const _e=this._getEntityState((pa=e.grid)==null?void 0:pa.export_daily_entity);this._nodes.gridExportDaily.innerText=_e?`${_e.val.toFixed(2)} kWh`:"0.00 kWh",this._calculateTariffs(ye?ye.val:0,_e?_e.val:0,p);const nt=C?M:0,De=ie?M:0,rt=u+A+(W>0?W:0)+nt+Be,mt=be+De+J+B,$t=Math.max(0,rt-mt),ze=this._getEntityState((ha=e.inverter)==null?void 0:ha.self_consumption_entity),lt=ze&&typeof ze.val=="number"&&!isNaN(ze.val)?Math.max(0,ze.unit==="W"?ze.val/1e3:ze.val):null,St=(((ga=e.inverter)==null?void 0:ga.standby_power)!==void 0?e.inverter.standby_power:100)/1e3;let Ge=0,Pe=0;if(st)if(Ge=Math.max(b,Ee),lt!==null)Pe=lt;else{const o=Math.max(0,rt-(be+De+Ge+J+B));Pe=o>0?o:St}else lt!==null?Pe=lt:Pe=Math.min($t,St),Ge=Math.max(b,Math.max(0,$t-Pe));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((_a=e.inverter)==null?void 0:_a.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Pe<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Pe*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Pe.toFixed(3)} ${t}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${Ge.toFixed(3)} ${t}`;const Bt=this._getEntityState((ua=e.load)==null?void 0:ua.daily_house_entity);this._nodes.dailyHouseKwh.innerText=Bt?`${Bt.val.toFixed(2)} kWh`:"12,40 kWh";const dt=((ya=e.battery)==null?void 0:ya.parallel_batteries)||((ba=(fa=e.battery)==null?void 0:fa.modules)==null?void 0:ba.length)||2;let ct=0;for(let o=0;o<dt;o++){const F=((va=(ma=e.battery)==null?void 0:ma.modules)==null?void 0:va[o])||((xa=(wa=e.battery)==null?void 0:wa.module_entities)==null?void 0:xa[o])||{},H=F.capacity_kwh!==void 0?parseFloat(F.capacity_kwh):o===0?7.88:o===1?5.12:(((ka=e.battery)==null?void 0:ka.capacity_kwh)||13)/dt;ct+=isNaN(H)?0:H}ct<=0&&(ct=parseFloat((Ea=e.battery)==null?void 0:Ea.capacity_kwh)||13);const vt=this._getEntityState((($a=e.battery)==null?void 0:$a.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),wt=vt&&!isNaN(vt.val)?vt.val:null,xt=wt!==null&&wt<=40?wt:ct,Ct=this._getEntityState(((Sa=e.battery)==null?void 0:Sa.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),Ht=Ct?Ct.val:80,jt=xt*(Ht/100),It=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${jt.toFixed(2).replace(".",",")} ${It} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${xt.toFixed(1).replace(".",",")})</span></span>`);const Tt=this._getEntityState(((Ba=e.battery)==null?void 0:Ba.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),Gt=Tt?Tt.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${Gt.toFixed(1).replace(".",",")}`);const Ot=(Ca=e.battery)==null?void 0:Ca.charge_daily_entity;let pt=this._getEntityState(Ot);pt||(pt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge")||this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const Yt=(Ia=e.battery)==null?void 0:Ia.discharge_daily_entity;let ht=this._getEntityState(Yt);ht||(ht=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=pt?`${pt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=ht?`${ht.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const Pt=[];for(let o=1;o<=dt;o++){const F=this.shadowRoot.getElementById(`batPackSoc_${o}`),H=this.shadowRoot.getElementById(`batPackVolt_${o}`),U=this.shadowRoot.getElementById(`batPackCurr_${o}`),S=this.shadowRoot.getElementById(`batPackPower_${o}`),X=this.shadowRoot.getElementById(`batPackTempVal_${o}`),V=this.shadowRoot.getElementById(`batPackDelta_${o}`),Y=this.shadowRoot.getElementById(`batPackDeltaVal_${o}`),z=this.shadowRoot.getElementById(`batPackStateTag_${o}`),Z=this.shadowRoot.getElementById(`batPackKwh_${o}`),q=this.shadowRoot.getElementById(`batPackBar1_${o}`),se=this.shadowRoot.getElementById(`batPackBar2_${o}`),Te=this.shadowRoot.getElementById(`batPackBar3_${o}`),he=this.shadowRoot.getElementById(`batPackBar4_${o}`),oe=((Pa=(Ta=e.battery)==null?void 0:Ta.modules)==null?void 0:Pa[o-1])||((Na=(Ma=e.battery)==null?void 0:Ma.module_entities)==null?void 0:Na[o-1])||{},Se=oe.soc_entity||oe.soc||`sensor.bms_rack${o}_soc`,Je=oe.current_entity||`sensor.bms_rack${o}_current`,gt=oe.voltage_entity||oe.volt||`sensor.bms_rack${o}_voltage`,Xe=oe.power_entity||`sensor.bms_rack${o}_power`,Ze=oe.temperature_entity||oe.temp||`sensor.bms_rack${o}_temperature`,Qe=oe.cell_delta_entity||oe.delta_entity||`sensor.bms_rack${o}_cell_delta`,et=this._getEntityState(Se),_t=this._getEntityState(Je),kt=this._getEntityState(gt),We=this._getEntityState(Xe),Et=this._getEntityState(Ze);let Q=this._getEntityState(Qe);if(Q||(Q=this._getEntityState(`sensor.bms_rack${o}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${o}_cell_difference`)),!Q&&(oe.max_cell_voltage_entity||oe.min_cell_voltage_entity)){const qe=this._getEntityState(oe.max_cell_voltage_entity),Va=this._getEntityState(oe.min_cell_voltage_entity);if(qe&&Va){const Qt=Math.abs(qe.val-Va.val);Q={val:Qt<1?Math.round(Qt*1e3):Qt,unit:"mV"}}}const ut=et?et.val:o===1?82:o===2?85:75,yt=kt?kt.val:o===1?54.1:o===2?54:52.4,xe=_t?_t.val:o===1?18.4:o===2?25.2:8.2,Le=Et?Et.val:o===1?36.5:o===2?21:22.5;let Fe=null;if(Q){let qe=Q.val;qe<1&&qe>0?Fe=Math.round(qe*1e3):Fe=Math.round(qe)}else this._hass||(Fe=o===1?12:o===2?8:15);let Re=0;We?Re=Math.abs(this._formatPower(We).kw):Re=yt*Math.abs(xe)/1e3;const qt=(oe.capacity_kwh!==void 0?parseFloat(oe.capacity_kwh):o===1?7.88:o===2?5.12:xt/dt)*(ut/100);F&&(F.innerText=`${ut.toFixed(0)}%`),H&&(H.innerText=`${yt.toFixed(1).replace(".",",")} V`),U&&(U.innerText=`${Math.abs(xe).toFixed(1).replace(".",",")} A`),S&&(S.innerText=`${Re.toFixed(2).replace(".",",")} ${t}`),X&&(X.innerText=`${Le.toFixed(1).replace(".",",")}`),Y&&(Fe!==null&&!isNaN(Fe)?(Y.innerText=`${Fe} mV`,V&&(V.style.display="inline-flex",Fe<=25?(V.style.color="#34d399",V.style.background="rgba(52, 211, 153, 0.12)",V.style.borderColor="rgba(52, 211, 153, 0.3)"):Fe<=50?(V.style.color="#fbbf24",V.style.background="rgba(251, 191, 36, 0.12)",V.style.borderColor="rgba(251, 191, 36, 0.3)"):(V.style.color="#f87171",V.style.background="rgba(248, 113, 113, 0.16)",V.style.borderColor="rgba(248, 113, 113, 0.4)"))):V&&(V.style.display="none")),Z&&(Z.innerText=`~${qt.toFixed(2).replace(".",",")} ${It}`);let me=!1;ce?me=!1:pe?me=!0:_t?me=(((La=e.battery)==null?void 0:La.power_sign)||"deye")==="deye"?xe<0:xe>0:me=xe<0;const ft=this.shadowRoot.getElementById(`batBranchBadge_${o}`);ft&&(Re<.02?(ft.className="es-bat-branch-badge es-mono idle",ft.innerHTML=`<span>0.00 ${t}</span>`):me?(ft.className="es-bat-branch-badge es-mono charge",ft.innerHTML=`<span>${Re.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↓</span>`):(ft.className="es-bat-branch-badge es-mono discharge",ft.innerHTML=`<span>${Re.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↑</span>`));const tt=this.shadowRoot.getElementById(`batPackCard_${o}`),Fa=tt==null?void 0:tt.querySelector(".es-battery-gauge"),Ra=tt==null?void 0:tt.querySelector(".es-battery-gauge-nipple");tt&&(tt.style.borderColor=me?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),Fa&&(Fa.style.borderColor=me?"#10b981":"#ef4444"),Ra&&(Ra.style.background=me?"#10b981":"#ef4444"),z&&(me?(z.className="es-bat-state-tag charge",z.innerText=this._t("bat_charge"),z.style.color="#34d399",z.style.background="rgba(16, 185, 129, 0.18)",z.style.borderColor="rgba(16, 185, 129, 0.4)"):(z.className="es-bat-state-tag discharge",z.innerText=this._t("bat_discharge"),z.style.color="#f87171",z.style.background="rgba(239, 68, 68, 0.18)",z.style.borderColor="rgba(239, 68, 68, 0.4)")),S&&(S.style.color=me?"#34d399":"#f87171"),U&&(U.style.color=me?"#38bdf8":"#f87171");const Ut=me?"active-green":"active-red";q&&se&&Te&&he&&(q.className=`es-bat-bar ${ut>=10?Ut:""}`,se.className=`es-bat-bar ${ut>=35?Ut:""}`,Te.className=`es-bat-bar ${ut>=65?Ut:""}`,he.className=`es-bat-bar ${ut>=85?Ut:""}`),Pt.push({kwNum:Re,isChg:me})}this._updateFlowPaths(),this._updateFlowAnimations($e?ge:0,ie,C,u,Ge,ue,pe,ce,B,Pt,J,b,W),this._updateControlSliders()}_setupResizeObserver(){var t;if(this._resizeObserver)return;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,t,n,d,r,c,g,u,I;try{const P=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!P)return;const m=P.getBoundingClientRect();if(m.width===0||m.height===0)return;const f=this._config||ne,k=this._scale||1,p=(y,$=.5,B=.5)=>{if(!y)return null;const b=y.getBoundingClientRect();return{x:Math.round((b.left-m.left+b.width*$)/k),y:Math.round((b.top-m.top+b.height*B)/k)}},_=(y,$,B)=>{const b=this.shadowRoot.getElementById(y),T=this.shadowRoot.getElementById($);b&&b.setAttribute("d",B||""),T&&T.setAttribute("d",B||"")},x=this.shadowRoot.getElementById("gridNode"),h=this.shadowRoot.getElementById("inverterNode"),i=this.shadowRoot.getElementById("essentialNode"),a=this.shadowRoot.getElementById("totalPvPowerBadge"),s=this.shadowRoot.getElementById("masterBatteryHub"),v=this.shadowRoot.getElementById("carNode");if(x&&h){const y=x.getBoundingClientRect(),$=h.getBoundingClientRect();if(y.bottom<$.top+30){const b=p(x,.7,1),T=p(h,.2,0);if(b&&T){const j=Math.round((b.y+T.y)/2),K=`M ${b.x} ${b.y} C ${b.x} ${j}, ${T.x} ${j}, ${T.x} ${T.y}`;_("pathGridInvBase","pathGridInvFlow",K)}}else{const b=Math.round(($.top-m.top+$.height*.55)/k),T=Math.round((y.right-m.left)/k),j=Math.round(($.left-m.left)/k),K=Math.round((y.top-m.top+y.height*.5)/k);let le="";if(Math.abs(K-b)<=8)le=`M ${T} ${b} L ${j} ${b}`;else{const de=Math.round(T+24);le=`M ${T} ${K} C ${de} ${K}, ${de} ${b}, ${j} ${b}`}_("pathGridInvBase","pathGridInvFlow",le)}}if(h&&i){const y=i.getBoundingClientRect(),$=h.getBoundingClientRect();if(y.bottom<$.top+30){const b=p(h,.8,0),T=p(i,.3,1);if(b&&T){const j=Math.round((b.y+T.y)/2),K=`M ${b.x} ${b.y} C ${b.x} ${j}, ${T.x} ${j}, ${T.x} ${T.y}`;_("pathInvLoadBase","pathInvLoadFlow",K)}}else{const b=Math.round(($.top-m.top+$.height*.55)/k),T=Math.round(($.right-m.left)/k),j=Math.round((y.left-m.left)/k),K=Math.round((y.top-m.top+y.height*.5)/k);let le="";if(Math.abs(K-b)<=8)le=`M ${T} ${b} L ${j} ${b}`;else{const de=Math.round(j-24);le=`M ${T} ${b} C ${de} ${b}, ${de} ${K}, ${j} ${K}`}_("pathInvLoadBase","pathInvLoadFlow",le)}}if(a&&h){const y=p(a,.5,1),$=p(h,.5,0);if(y&&$){const B=`M ${y.x} ${y.y} L ${$.x} ${$.y}`;_("pathSolarInvBase","pathSolarInvFlow",B)}}if(h&&s){const y=p(h,.5,1),$=p(s,.5,0);if(y&&$){const B=`M ${y.x} ${y.y} L ${$.x} ${$.y}`;_("pathInvBatBase","pathInvBatFlow",B)}}const w=this.shadowRoot.getElementById("nonEssentialNode"),D=w&&!w.classList.contains("hidden")&&w.offsetHeight>0,l=v&&!v.classList.contains("hidden")&&v.offsetHeight>0;if(x&&D){const y=p(x,.5,1),$=p(w,.5,0);if(y&&$){const B=`M ${y.x} ${y.y} L ${$.x} ${$.y}`;_("pathGridNonEssBase","pathGridNonEssFlow",B)}}else _("pathGridNonEssBase","pathGridNonEssFlow","");if(l){const y=D?w:x;if(y){const $=p(y,.5,1),B=p(v,.5,0);if($&&B){const b=`M ${$.x} ${$.y} L ${B.x} ${B.y}`;_("pathNonEssCarBase","pathNonEssCarFlow",b)}}else _("pathNonEssCarBase","pathNonEssCarFlow","")}else _("pathNonEssCarBase","pathNonEssCarFlow","");const E=this.shadowRoot.getElementById("subloadsBusContainer");if(i&&E){const y=p(i,.5,1),$=p(E,.5,0);if(y&&$){const B=`M ${y.x} ${y.y} L ${$.x} ${$.y}`;_("pathLoadSubloadsBase","pathLoadSubloadsFlow",B)}}else _("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const A=this.shadowRoot.getElementById("auxNode");if(h&&A&&!A.classList.contains("hidden")&&A.offsetHeight>0){const y=p(A,.35,1),$=p(h,.9,0);if(y&&$){const B=Math.round((y.y+$.y)/2),b=`M ${y.x} ${y.y} C ${y.x} ${B}, ${$.x} ${B}, ${$.x} ${$.y}`;_("pathInvAuxBase","pathInvAuxFlow",b)}}else _("pathInvAuxBase","pathInvAuxFlow","");_("pathBatStemBase","pathBatStemFlow","");const W=this.shadowRoot.getElementById("windStationContainer"),O=((t=f.wind)==null?void 0:t.show)!==!1||((n=f.aux)==null?void 0:n.type)==="wind"?((d=f.wind)==null?void 0:d.turbine_count)||((c=(r=f.wind)==null?void 0:r.turbines)==null?void 0:c.length)||2:0;for(let y=1;y<=4;y++)if(y<=O&&W&&!W.classList.contains("hidden")){const $=this.shadowRoot.getElementById(`turbineCard_${y}`);if($&&s){const B=p($,.5,1),b=O===1?.5:.28+(y-1)/(O-1)*.44,T=p(s,b,0);if(B&&T){const j=`M ${B.x} ${B.y} L ${T.x} ${T.y}`;_(`pathTurbine${y}Base`,`pathTurbine${y}Flow`,j)}}else _(`pathTurbine${y}Base`,`pathTurbine${y}Flow`,"")}else _(`pathTurbine${y}Base`,`pathTurbine${y}Flow`,"");const J=((g=f.battery)==null?void 0:g.parallel_batteries)||((I=(u=f.battery)==null?void 0:u.modules)==null?void 0:I.length)||2;for(let y=1;y<=8;y++){const $=this.shadowRoot.getElementById(`batPackCard_${y}`),B=this.shadowRoot.getElementById(`batBranchBadge_${y}`);if(y<=J&&s&&$){const b=p(s,.5,1),T=p($,.5,0);if(b&&T){const j=Math.round(b.y+(T.y-b.y)*.45);let K="";Math.abs(b.x-T.x)<=4?K=`M ${b.x} ${b.y} L ${T.x} ${T.y}`:K=`M ${b.x} ${b.y} C ${b.x} ${j}, ${T.x} ${j}, ${T.x} ${T.y}`,_(`pathBat${y}Base`,`pathBat${y}Flow`,K),B&&(B.style.left=`${T.x}px`,B.style.top=`${j}px`,B.style.display="flex")}else _(`pathBat${y}Base`,`pathBat${y}Flow`,""),B&&(B.style.display="none")}else _(`pathBat${y}Base`,`pathBat${y}Flow`,""),B&&(B.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,t,n,d,r;try{const c=this._config||ne,g=this._scale||1,u=this.shadowRoot.getElementById("solarBusSvg"),I=((e=c.solar)==null?void 0:e.pv_count)||((n=(t=c.solar)==null?void 0:t.strings)==null?void 0:n.length)||3;if(u&&I>0){const f=u.getBoundingClientRect(),k=this.shadowRoot.getElementById("pvPanel_1"),p=this.shadowRoot.getElementById(`pvPanel_${I}`),_=this.shadowRoot.getElementById("solarBusBase"),x=this.shadowRoot.getElementById("solarFlowCollector"),h=this.shadowRoot.getElementById("solarBusStemBase"),i=this.shadowRoot.getElementById("solarBusStemFlow"),a=this.shadowRoot.getElementById("solarBusFeeders");if(k&&p&&f.width>0){const s=k.getBoundingClientRect(),v=p.getBoundingClientRect(),w=Math.round((s.left-f.left+s.width/2)/g),D=Math.round((v.left-f.left+v.width/2)/g),l=13,E=Math.round((w+D)/2);if(_&&(_.setAttribute("x1",w),_.setAttribute("y1",l),_.setAttribute("x2",D),_.setAttribute("y2",l)),x&&(x.setAttribute("x1",w),x.setAttribute("y1",l),x.setAttribute("x2",D),x.setAttribute("y2",l)),h&&(h.setAttribute("x1",E),h.setAttribute("y1",l),h.setAttribute("x2",E),h.setAttribute("y2",26)),i&&(i.setAttribute("x1",E),i.setAttribute("y1",l),i.setAttribute("x2",E),i.setAttribute("y2",26)),a){let A="";for(let W=1;W<=I;W++){const G=this.shadowRoot.getElementById(`pvPanel_${W}`);if(G){const O=G.getBoundingClientRect(),J=Math.round((O.left-f.left+O.width/2)/g);A+=`
                  <line x1="${J}" y1="0" x2="${J}" y2="${l}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${J}" y1="0" x2="${J}" y2="${l}" stroke="#fbbf24" stroke-width="2.5" />
                `}}a.innerHTML=A}}}const P=this.shadowRoot.getElementById("subloadsBusSvg"),m=((r=(d=c.load)==null?void 0:d.subloads)==null?void 0:r.length)||3;if(P&&m>0){const f=P.getBoundingClientRect(),k=this.shadowRoot.getElementById("subloadCard_0"),p=this.shadowRoot.getElementById(`subloadCard_${m-1}`),_=this.shadowRoot.getElementById("essentialNode"),x=this.shadowRoot.getElementById("subloadsBusBase"),h=this.shadowRoot.getElementById("subloadsFlowCollector"),i=this.shadowRoot.getElementById("subloadsBusStemBase"),a=this.shadowRoot.getElementById("subloadsBusStemFlow"),s=this.shadowRoot.getElementById("subloadsBusFeeders");if(k&&p&&f.width>0){const v=k.getBoundingClientRect(),w=p.getBoundingClientRect(),D=Math.round((v.left-f.left+v.width/2)/g),l=Math.round((w.left-f.left+w.width/2)/g),E=13;let A=Math.round((D+l)/2);if(_){const O=_.getBoundingClientRect();A=Math.round((O.left-f.left+O.width/2)/g)}const W=Math.min(D,A),G=Math.max(l,A);if(x&&(x.setAttribute("x1",W),x.setAttribute("y1",E),x.setAttribute("x2",G),x.setAttribute("y2",E)),h&&(h.setAttribute("x1",W),h.setAttribute("y1",E),h.setAttribute("x2",G),h.setAttribute("y2",E)),i&&(i.setAttribute("x1",A),i.setAttribute("y1",0),i.setAttribute("x2",A),i.setAttribute("y2",E)),a&&(a.setAttribute("x1",A),a.setAttribute("y1",0),a.setAttribute("x2",A),a.setAttribute("y2",E)),s){let O="";for(let J=0;J<m;J++){const y=this.shadowRoot.getElementById(`subloadCard_${J}`);if(y){const $=y.getBoundingClientRect(),B=Math.round(($.left-f.left+$.width/2)/g);O+=`
                  <line x1="${B}" y1="${E}" x2="${B}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${B}" y1="${E}" x2="${B}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}s.innerHTML=O}}}}catch{}}_applyFlowAnimation(e,t,n,d,r){if(!e)return;if(!r){e.setAttribute("class",`flow-pulse ${t} inactive`),e.style.opacity="0",e.style.animation="none";return}const c=n?"flow-reverse":"flow-forward",g=n?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${t} ${c}`),e.style.opacity="1",e.style.setProperty("--flow-speed",d),e.style.animation=`${g} ${d} linear infinite`}_updateFlowAnimations(e,t,n,d,r,c,g,u,I,P=[],m=0,f=0,k=0){var Ee,st,fe,Ce,ge,He,ot,Ie,Ae,Ne,je,$e,ie;const p=this._config||ne,_=((Ee=p.animations)==null?void 0:Ee.enabled)!==!1,x=((st=p.animations)==null?void 0:st.speed)||1.2,h=(C,M=10)=>{const re=Math.abs(C);if(re<.05)return"2.5s";const ye=Math.min(1,re/M);return`${Math.max(.4,(2.6-ye*1.9)*(x/1.2)).toFixed(2)}s`},i=this.shadowRoot.getElementById("pathGridInvFlow"),a=Math.abs(e),s=(((fe=p.grid)==null?void 0:fe.min_power_threshold)!==void 0?p.grid.min_power_threshold:50)/1e3,v=((Ce=p.grid)==null?void 0:Ce.selling_enabled)===!0,w=_&&a>=s&&(n||t&&v);this._applyFlowAnimation(i,"flow-grid",t,h(e,10),w);const D=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(D,"flow-solar",!1,h(d,12),_&&d>=.05);const l=this.shadowRoot.getElementById("pathInvLoadFlow"),E=Math.abs(r);this._applyFlowAnimation(l,"flow-load",!1,h(r,10),_&&E>=.05);const A=this.shadowRoot.getElementById("pathInvBatFlow"),W=Math.abs(c),G=_&&W>=.02&&(g||u),O=g?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(A,O,u,h(c,8),G);const J=this.shadowRoot.getElementById("pathGridNonEssFlow"),y=Math.abs(m);this._applyFlowAnimation(J,"flow-grid",!1,h(m,5),_&&y>=.05);const $=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),B=Math.abs(I);this._applyFlowAnimation($,"flow-car",!1,h(I,7),_&&B>=.05);const b=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),T=Math.abs(f||r);this._applyFlowAnimation(b,"flow-load",!1,h(T,8),_&&T>=.05);const j=this.shadowRoot.getElementById("pathInvAuxFlow"),K=Math.abs(k);this._applyFlowAnimation(j,"flow-aux",!0,h(k,5),_&&K>=.05);const le=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(le,O,u,h(c,8),G);const de=this.shadowRoot.getElementById("solarFlowCollector"),ke=this.shadowRoot.getElementById("solarBusStemFlow");if(de)if(!_||d<.05)de.style.opacity="0.2",de.style.animation="none",ke&&(ke.style.opacity="0.2",ke.style.animation="none");else{const C=h(d,12);de.style.opacity="1",de.setAttribute("class","flow-line"),de.style.animation=`esDashflow ${C} linear infinite`,ke&&(ke.style.opacity="1",ke.setAttribute("class","flow-line"),ke.style.animation=`esDashflow ${C} linear infinite`)}const pe=this.shadowRoot.getElementById("subloadsFlowCollector"),ce=this.shadowRoot.getElementById("subloadsBusStemFlow");if(pe)if(!_||T<.05)pe.style.opacity="0.2",pe.style.animation="none",ce&&(ce.style.opacity="0.2",ce.style.animation="none");else{const C=h(T,8);pe.style.opacity="1",pe.setAttribute("class","flow-line"),pe.style.animation=`esDashflow ${C} linear infinite`,ce&&(ce.style.opacity="1",ce.setAttribute("class","flow-line"),ce.style.animation=`esDashflow ${C} linear infinite`)}const ue=this.shadowRoot.getElementById("batteryFlowCollector"),ve=this.shadowRoot.getElementById("batteryBusStemFlow"),be=this.shadowRoot.getElementById("batteryBusFeeders"),Be=u?"#f87171":"#34d399",Ve=u?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(ue)if(ue.style.stroke=Be,ue.style.filter=Ve,ve&&(ve.style.stroke=Be,ve.style.filter=Ve),!_||!G)ue.style.opacity="0.2",ue.style.animation="none",ve&&(ve.style.opacity="0.2",ve.style.animation="none");else{const C=h(c,8),M=u?"esDashflowRev":"esDashflow";ue.style.opacity="1",ue.setAttribute("class",u?"flow-line-reverse":"flow-line"),ue.style.animation=`${M} ${C} linear infinite`,ve&&(ve.style.opacity="1",ve.setAttribute("class",u?"flow-line-reverse":"flow-line"),ve.style.animation=`${M} ${C} linear infinite`)}be&&be.querySelectorAll("line").forEach(C=>{if(C.style.stroke=Be,C.style.filter=Ve,!_||!G)C.style.opacity="0.2",C.style.animation="none";else{const M=h(c,8),re=u?"esDashflowRev":"esDashflow";C.style.opacity="1",C.setAttribute("class",u?"flow-line-reverse":"flow-line"),C.style.animation=`${re} ${M} linear infinite`}});for(let C=1;C<=8;C++){const M=this.shadowRoot.getElementById(`pathBat${C}Flow`);if(!M)continue;const re=P[C-1],ye=re?re.kwNum:0,_e=_&&(ye>=.02||G),nt=u;this._applyFlowAnimation(M,O,nt,h(ye||c,8),_e)}for(let C=0;C<6;C++){const M=this.shadowRoot.getElementById(`pathSubload${C}Flow`);if(!M)continue;const re=(He=(ge=p.load)==null?void 0:ge.subloads)==null?void 0:He[C],ye=re?this._getEntityState(re.entity):null,_e=ye?this._formatPower(ye,2).kw:C===0?2:C===1?3:4;this._applyFlowAnimation(M,"flow-load",!1,h(_e,8),_&&_e>=.05)}const at=((ot=p.wind)==null?void 0:ot.show)!==!1||((Ie=p.aux)==null?void 0:Ie.type)==="wind",bt=at?((Ae=p.wind)==null?void 0:Ae.turbine_count)||((je=(Ne=p.wind)==null?void 0:Ne.turbines)==null?void 0:je.length)||2:0,we=(($e=p.wind)==null?void 0:$e.turbines)||[];for(let C=1;C<=4;C++){const M=this.shadowRoot.getElementById(`pathTurbine${C}Flow`);if(M)if(C<=bt&&at){const re=we[C-1]||{},ye=this._hass?0:C===1?1.45:.85,_e=this._getEntityState(re.power_entity||`sensor.wind_turbine_${C}_power`);let De=this._formatPower(_e,ye).kw*1e3;_e&&_e.unit==="W"&&(De=_e.val);const rt=re.animation_threshold??((ie=p.wind)==null?void 0:ie.animation_threshold)??50,mt=De>=rt;this._applyFlowAnimation(M,"flow-wind",!1,h(De/1e3,3),_&&mt)}else this._applyFlowAnimation(M,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",ei),window.customCards=window.customCards||[],window.customCards.some(Xt=>Xt.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),it.EnergyStationCard=ei,it.I18N=Jt,Object.defineProperty(it,Symbol.toStringTag,{value:"Module"})});
