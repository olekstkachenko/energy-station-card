(function(qe,U){typeof exports=="object"&&typeof module<"u"?U(exports):typeof define=="function"&&define.amd?define(["exports"],U):(qe=typeof globalThis<"u"?globalThis:qe||self,U(qe.EnergyStationCard={}))})(this,function(qe){"use strict";const U={title:"Energy Station",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,appearance:{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"},controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0}},te='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',ie={sun:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${te} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${te} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${te} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${te} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${te} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};class Da extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general",this._isInternalChange=!1,this._debounceTimer=null,this._rendered=!1,this._isDialogExpanded=!1}set hass(e){this._hass=e}setConfig(e){if(this._config=JSON.parse(JSON.stringify(e||U)),this._isInternalChange){this._isInternalChange=!1;return}this.render()}connectedCallback(){this._rendered||this.render();const e=()=>{typeof window<"u"&&window.innerWidth>=850&&this._applyExpand(!0)};e(),setTimeout(e,80),setTimeout(e,250)}_findHuiDialog(){let e=this;for(;e;){if(e.tagName&&e.tagName.toLowerCase()==="hui-dialog-edit-card")return e;if(e.parentElement)e=e.parentElement;else if(e.parentNode)e=e.parentNode;else if(e.getRootNode&&e.getRootNode().host)e=e.getRootNode().host;else break}if(typeof document<"u"){const t=document.querySelector("hui-dialog-edit-card")||document.querySelector("ha-dialog-edit-card");if(t)return t;try{const s=document.querySelector("home-assistant");if(s!=null&&s.shadowRoot){const p=s.shadowRoot.querySelector("hui-dialog-edit-card")||s.shadowRoot.querySelector("ha-dialog-edit-card");if(p)return p;const d=s.shadowRoot.querySelectorAll("*");for(const c of d)if(c.shadowRoot){const h=c.shadowRoot.querySelector("hui-dialog-edit-card")||c.shadowRoot.querySelector("ha-dialog-edit-card");if(h)return h}}}catch{}}return null}_findHaDialog(e){if(e!=null&&e.shadowRoot){const s=e.shadowRoot.querySelector("ha-dialog")||e.shadowRoot.querySelector("mwc-dialog");if(s)return s}let t=this;for(;t;){if(t.tagName&&(t.tagName.toLowerCase()==="ha-dialog"||t.tagName.toLowerCase()==="mwc-dialog"))return t;if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}return typeof document<"u"?document.querySelector("ha-dialog")||document.querySelector("mwc-dialog"):null}_applyExpand(e){var p,d,c;this._isDialogExpanded=e;const t=this._findHuiDialog(),s=this._findHaDialog(t);if(e){if(t){typeof t._enlarge=="function"&&!t.large?t._enlarge():(t.large=!0,t.setAttribute("large",""));try{if(t.shadowRoot){let h=t.shadowRoot.getElementById("energy-station-wide-style");h||(h=document.createElement("style"),h.id="energy-station-wide-style",h.textContent=`
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
              `,t.shadowRoot.appendChild(h))}}catch{}}if(s){s.style.setProperty("--mdc-dialog-min-width","95vw","important"),s.style.setProperty("--mdc-dialog-max-width","96vw","important"),s.style.setProperty("--ha-dialog-max-width","96vw","important"),s.style.setProperty("--ha-dialog-width","95vw","important"),s.style.setProperty("--mdc-dialog-width","95vw","important");try{const h=(p=s.shadowRoot)==null?void 0:p.querySelector(".mdc-dialog__surface");h&&(h.style.setProperty("max-width","96vw","important"),h.style.setProperty("width","95vw","important"))}catch{}}}else{if(t){typeof t._enlarge=="function"&&t.large?t._enlarge():(t.large=!1,t.removeAttribute("large"));try{const h=(d=t.shadowRoot)==null?void 0:d.getElementById("energy-station-wide-style");h&&h.remove()}catch{}}if(s){s.style.removeProperty("--mdc-dialog-min-width"),s.style.removeProperty("--mdc-dialog-max-width"),s.style.removeProperty("--ha-dialog-max-width"),s.style.removeProperty("--ha-dialog-width"),s.style.removeProperty("--mdc-dialog-width");try{const h=(c=s.shadowRoot)==null?void 0:c.querySelector(".mdc-dialog__surface");h&&(h.style.removeProperty("max-width"),h.style.removeProperty("width"))}catch{}}}this._updateExpandBtn()}_updateExpandBtn(){var s;const e=(s=this.shadowRoot)==null?void 0:s.getElementById("btnToggleExpand");if(!e)return;const t=this._isDialogExpanded;e.innerHTML=t?"❐ Звичайний розмір":"⛶ На весь екран",e.title=t?"Згорнути вікно налаштувань до звичайного розміру":"Розширити вікно налаштувань на весь екран"}_flushConfig(){this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null,this._dispatchConfig())}_dispatchConfig(){if(!this._config)return;this._isInternalChange=!0;const e=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(e)}_valueChanged(e,t,s=!1){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const p=e.split(".");let d=this._config;for(let c=0;c<p.length-1;c++)d[p[c]]||(d[p[c]]={}),d=d[p[c]];d[p[p.length-1]]=t,this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),s?this._dispatchConfig():this._debounceTimer=setTimeout(()=>{this._dispatchConfig()},140)}_switchTab(e){this._flushConfig(),this._currentTab=e,this.render()}_applyPreset(e){this._config=JSON.parse(JSON.stringify(this._config||U)),e==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):e==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load"),this._dispatchConfig(),this.render()}render(){var c,h,b,S,$,m,u,E,g,_,k,f,i,a,o,w,l,y,B,n,I,V,H,W,Z,v,C,P,x,L,j,J,le,de,ke,pe,ce,_e,me,ye,Be,Ae,at,yt,we,Ee,ot,ue,Ce,he,Ge,st,Ie,Ve,Le,He,Se,ae,M,N,re,be,fe,nt,De,rt,vt,St,ze,lt,Xt,$t,je,Pe,Bt,dt,ct,mt,wt,xt,Ct,Gt,Ht,It,Tt,jt,Yt,pt,Jt,gt,Pt,Mt,Lt,Nt,Rt,Ft;if(!this._config)return;this._rendered=!0;const e=this._config,t=(c=this.shadowRoot)==null?void 0:c.activeElement;let s=null,p=null,d=null;if(t&&(t.id?s=`#${t.id}`:((h=t.dataset)==null?void 0:h.idx)!==void 0&&t.className&&(s=`.${t.className.trim().split(/\s+/)[0]}[data-idx="${t.dataset.idx}"]`),"selectionStart"in t&&"selectionEnd"in t&&(p=t.selectionStart,d=t.selectionEnd)),this.shadowRoot.innerHTML=`
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
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((b=e.animations)==null?void 0:b.speed)||1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((S=e.animations)==null?void 0:S.speed)||1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${e.show_quick_settings!==!1?"checked":""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${(($=e.animations)==null?void 0:$.enabled)!==!1?"checked":""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((m=e.controls)==null?void 0:m.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((u=e.controls)==null?void 0:u.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((E=e.controls)==null?void 0:E.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((g=e.solar)==null?void 0:g.pv_count)||3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((_=e.solar)==null?void 0:_.pv_count)||3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((k=e.solar)==null?void 0:k.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((f=e.solar)==null?void 0:f.daily_yield_entity)||""}">
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
              <input type="checkbox" id="solarShowMetrics" ${((o=e.solar)==null?void 0:o.show_metrics)!==!1?"checked":""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((w=e.solar)==null?void 0:w.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((l=e.solar)==null?void 0:l.pv_count)||3}).map((oe,R)=>{var Ue,Ke;const F=R+1,D=((Ke=(Ue=e.solar)==null?void 0:Ue.strings)==null?void 0:Ke[R])||{},Me=`sensor.deye_12k_inverter_pv${F}_voltage`,Ye=`sensor.deye_12k_inverter_pv${F}_current`,Je=`sensor.deye_12k_inverter_pv${F}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${F} (Стрінг ${F})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${R}" value="${D.name||`PV ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${F} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${R}" value="${D.voltage_entity!==void 0?D.voltage_entity:Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${F} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${R}" value="${D.current_entity!==void 0?D.current_entity:Ye}" placeholder="${Ye}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${F} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${R}" value="${D.capacity_kw!==void 0?D.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${F} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${R}" value="${D.power_entity!==void 0?D.power_entity:Je}" placeholder="${Je} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${((y=e.inverter)==null?void 0:y.model_name)||"DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((B=e.inverter)==null?void 0:B.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((n=e.inverter)==null?void 0:n.show_self_consumption)!==!1?"checked":""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((I=e.inverter)==null?void 0:I.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((V=e.inverter)==null?void 0:V.standby_power)!==void 0?e.inverter.standby_power:100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((H=e.inverter)==null?void 0:H.standby_power)!==void 0?e.inverter.standby_power:100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((W=e.inverter)==null?void 0:W.ac_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((Z=e.inverter)==null?void 0:Z.dc_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((v=e.inverter)==null?void 0:v.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${((C=e.inverter)==null?void 0:C.current_entity)||""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((P=e.inverter)==null?void 0:P.frequency_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((x=e.aux)==null?void 0:x.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((L=e.aux)==null?void 0:L.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((j=e.aux)==null?void 0:j.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((J=e.aux)==null?void 0:J.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((le=e.aux)==null?void 0:le.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((de=e.aux)==null?void 0:de.type)==="microinverter"&&(!((ke=e.aux)!=null&&ke.title)||((pe=e.aux)==null?void 0:pe.title)==="Вітрогенератор")?"Мікроінвертор":((ce=e.aux)==null?void 0:ce.title)||(((_e=e.aux)==null?void 0:_e.type)==="generator"?"Генератор":((me=e.aux)==null?void 0:me.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((ye=e.aux)==null?void 0:ye.power_entity)||""}">
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
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((Ae=e.wind)==null?void 0:Ae.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((at=e.wind)==null?void 0:at.animation_threshold)||((yt=e.aux)==null?void 0:yt.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((we=e.wind)==null?void 0:we.animation_threshold)||((Ee=e.aux)==null?void 0:Ee.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((ot=e.wind)==null?void 0:ot.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((ue=e.wind)==null?void 0:ue.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((Ce=e.wind)==null?void 0:Ce.turbine_count)||2}).map((oe,R)=>{var D,Me;const F=((Me=(D=e.wind)==null?void 0:D.turbines)==null?void 0:Me[R])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${R}" value="${F.name||`Вітряк ${R+1}`}" placeholder="Назва (напр. Вітряк ${R+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${R}" value="${F.power_entity||`sensor.wind_turbine_${R+1}_power`}" placeholder="sensor.wind_turbine_${R+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${R}" value="${F.rpm_entity||F.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${R}" value="${F.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${R+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${R}" value="${F.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${R+1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((he=e.battery)==null?void 0:he.soc_entity)||""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((Ge=e.battery)==null?void 0:Ge.power_entity)||""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((st=e.battery)==null?void 0:st.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((Ie=e.battery)==null?void 0:Ie.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((Ve=e.battery)==null?void 0:Ve.capacity_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Le=e.battery)==null?void 0:Le.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((He=e.battery)==null?void 0:He.current_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((Se=e.battery)==null?void 0:Se.temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((ae=e.battery)==null?void 0:ae.cell_delta_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((M=e.battery)==null?void 0:M.charge_daily_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((N=e.battery)==null?void 0:N.discharge_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((re=e.battery)==null?void 0:re.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((be=e.battery)==null?void 0:be.parallel_batteries)||2}</span>
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
            ${Array.from({length:((nt=e.battery)==null?void 0:nt.parallel_batteries)||2}).map((oe,R)=>{var Vt,Dt,zt,Ot;const F=R+1,D=((Dt=(Vt=e.battery)==null?void 0:Vt.modules)==null?void 0:Dt[R])||((Ot=(zt=e.battery)==null?void 0:zt.module_entities)==null?void 0:Ot[R])||{},Me=`sensor.bms_rack${F}_soc`,Ye=`sensor.bms_rack${F}_current`,Je=`sensor.bms_rack${F}_voltage`,Ue=`sensor.bms_rack${F}_power`,Ke=`sensor.bms_rack${F}_temperature`,At=`sensor.bms_rack${F}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${F} (Модуль ${F})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${R}" value="${D.name||`Батарея ${F}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${F} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${R}" value="${D.soc_entity!==void 0?D.soc_entity:D.soc!==void 0?D.soc:Me}" placeholder="${Me}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${F} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${R}" value="${D.current_entity!==void 0?D.current_entity:Ye}" placeholder="${Ye}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${F} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${R}" value="${D.voltage_entity!==void 0?D.voltage_entity:D.volt!==void 0?D.volt:Je}" placeholder="${Je}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${F} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${R}" value="${D.temperature_entity!==void 0?D.temperature_entity:D.temp!==void 0?D.temp:Ke}" placeholder="${Ke}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${F} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${R}" value="${D.capacity_kwh!==void 0?D.capacity_kwh:F===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${F} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${R}" value="${D.cell_delta_entity!==void 0?D.cell_delta_entity:D.delta!==void 0?D.delta:At}" placeholder="${At}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${F} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${R}" value="${D.power_entity!==void 0?D.power_entity:Ue}" placeholder="${Ue} (авто P = U × I)">
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
              <input type="text" id="gridExternalPower" value="${((vt=e.grid)==null?void 0:vt.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((St=e.grid)==null?void 0:St.auto_calculate)!==!1?"checked":""}>
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
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((Xt=e.grid)==null?void 0:Xt.min_power_threshold)!==void 0?e.grid.min_power_threshold:50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${(($t=e.grid)==null?void 0:$t.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((je=e.grid)==null?void 0:je.status_entity)||""}" placeholder="binary_sensor.grid_connected">
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
              <input type="text" id="gridCarPower" value="${((mt=e.grid)==null?void 0:mt.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="text" id="loadDailyHouse" value="${((Gt=e.load)==null?void 0:Gt.daily_house_entity)||""}">
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

          ${(((Ht=e.load)==null?void 0:Ht.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((It=e.load)==null?void 0:It.subloads)||[]).map((oe,R)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${R}" value="${oe.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${R}" style="width: 140px;">
                  <option value="boiler" ${oe.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${oe.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${oe.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${oe.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${oe.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${oe.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${oe.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${R}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${R}" value="${oe.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="text" id="tariffCurrency" value="${((jt=e.tariffs)==null?void 0:jt.currency)||"грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Yt=e.tariffs)==null?void 0:Yt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((pt=e.tariffs)==null?void 0:pt.day_rate)??4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((Jt=e.tariffs)==null?void 0:Jt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((gt=e.tariffs)==null?void 0:gt.night_rate)??2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Pt=e.tariffs)==null?void 0:Pt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Mt=e.tariffs)==null?void 0:Mt.export_rate)??5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(oe,R)=>{var F;return`<option value="${R}" ${(((F=e.tariffs)==null?void 0:F.night_start_hour)??23)===R?"selected":""}>${String(R).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(oe,R)=>{var F;return`<option value="${R}" ${(((F=e.tariffs)==null?void 0:F.night_end_hour)??7)===R?"selected":""}>${String(R).padStart(2,"0")}:00</option>`}).join("")}
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
              <input type="checkbox" id="tariffShowDailyCost" ${((Lt=e.tariffs)==null?void 0:Lt.show_daily_cost)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Nt=e.tariffs)==null?void 0:Nt.show_export_income)!==!1?"checked":""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Rt=e.tariffs)==null?void 0:Rt.show_active_badge)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((Ft=e.tariffs)==null?void 0:Ft.show_solar_savings)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `,this._bindEvents(),this._updateExpandBtn(),s){const oe=this.shadowRoot.querySelector(s);if(oe&&(oe.focus(),p!==null&&d!==null&&"setSelectionRange"in oe))try{oe.setSelectionRange(p,d)}catch{}}}_bindEvents(){var c,h,b,S,$,m,u,E,g,_,k,f;const e=this.shadowRoot;(c=e.getElementById("btnToggleExpand"))==null||c.addEventListener("click",()=>{this._applyExpand(!this._isDialogExpanded)}),e.querySelectorAll(".tab-btn").forEach(i=>{i.addEventListener("click",a=>{this._switchTab(a.target.dataset.tab)})}),(h=e.getElementById("btnPresetEsp"))==null||h.addEventListener("click",()=>this._applyPreset("deye_esphome")),(b=e.getElementById("btnPresetSolarman"))==null||b.addEventListener("click",()=>this._applyPreset("deye_solarman"));const t=(i,a)=>{const o=e.getElementById(i);o&&(o.addEventListener("input",w=>this._valueChanged(a,w.target.value,!1)),o.addEventListener("change",w=>this._valueChanged(a,w.target.value,!0)),o.addEventListener("blur",()=>this._flushConfig()))},s=(i,a)=>{const o=e.getElementById(i);o&&o.addEventListener("change",w=>this._valueChanged(a,w.target.checked,!0))},p=(i,a,o,w="")=>{const l=e.getElementById(i);l&&(l.addEventListener("input",y=>{const B=parseFloat(y.target.value);if(o){const n=e.getElementById(o);n&&(n.innerText=`${B}${w}`)}this._valueChanged(a,isNaN(B)?0:B,!1)}),l.addEventListener("change",y=>{const B=parseFloat(y.target.value);this._valueChanged(a,isNaN(B)?0:B,!0)}),l.addEventListener("blur",()=>this._flushConfig()))};t("title","title"),t("themeMode","theme_mode"),t("cardLanguage","language"),(S=e.getElementById("cardScale"))==null||S.addEventListener("input",i=>{const a=parseFloat(i.target.value),o=e.getElementById("cardScaleVal");o&&(o.innerText=`${Math.round(a*100)}%`),this._valueChanged("card_scale",a)}),($=e.getElementById("cardScale"))==null||$.addEventListener("change",()=>this._flushConfig()),t("cardMaxWidth","max_width"),s("showQuickSettings","show_quick_settings"),t("ctrlSolarCharge","controls.solar_charge_entity"),t("ctrlSellPower","controls.sell_power_entity"),t("ctrlGridCharge","controls.grid_charge_entity"),s("animEnabled","animations.enabled"),p("animSpeed","animations.speed","animSpeedVal","s"),(m=e.getElementById("solarPvCount"))==null||m.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=a,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<a;){const o=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${o}`,name:`PV ${o}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${o}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${o}_current`,power_entity:`sensor.deye_12k_inverter_pv${o}_power`})}this._valueChanged("solar.pv_count",a,!0),this._valueChanged("solar.strings",this._config.solar.strings,!0),this.render()}),e.querySelectorAll(".pv-str-name-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[o]||(this._config.solar.strings[o]={}),this._config.solar.strings[o].name=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-volt-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[o]||(this._config.solar.strings[o]={}),this._config.solar.strings[o].voltage_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-curr-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[o]||(this._config.solar.strings[o]={}),this._config.solar.strings[o].current_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-power-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[o]||(this._config.solar.strings[o]={}),this._config.solar.strings[o].power_entity=a.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".pv-str-cap-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[o]||(this._config.solar.strings[o]={}),this._config.solar.strings[o].capacity_kw=parseFloat(a.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)}),i.addEventListener("blur",()=>this._flushConfig())}),t("solarTotalPower","solar.total_power_entity"),t("solarDailyYield","solar.daily_yield_entity"),p("solarTargetDaily","solar.target_daily_yield"),p("solarInstalledPower","solar.installed_power"),s("solarShowMetrics","solar.show_metrics"),t("invModel","inverter.model_name"),t("invPower","inverter.power_entity"),s("invShowSelfConsumption","inverter.show_self_consumption"),t("invSelfConsumptionEntity","inverter.self_consumption_entity"),p("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),t("invTempAc","inverter.ac_temperature_entity"),t("invTempDc","inverter.dc_temperature_entity"),t("invVolt","inverter.voltage_entity"),t("invCurrent","inverter.current_entity"),t("invFreq","inverter.frequency_entity"),(u=e.getElementById("auxType"))==null||u.addEventListener("change",i=>{const a=i.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=a;const w={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[a]||"Мікроінвертор";this._config.aux.title=w;const l=e.getElementById("auxTitle");l&&(l.value=w),this._valueChanged("aux.type",a,!0),this._valueChanged("aux.title",w,!0)}),t("auxTitle","aux.title"),t("auxPower","aux.power_entity"),(E=e.getElementById("windTurbineCount"))==null||E.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=a,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<a;){const o=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${o}`,name:`Вітряк ${o}`,power_entity:`sensor.wind_turbine_${o}_power`,speed_entity:`sensor.wind_turbine_${o}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",a,!0),this._valueChanged("wind.turbines",this._config.wind.turbines,!0),this.render()}),p("windThreshold","wind.animation_threshold","windThresholdVal","W"),(g=e.getElementById("windThreshold"))==null||g.addEventListener("input",i=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(i.target.value))}),t("windDailyEnergy","wind.daily_energy_entity"),t("windMonthlyEnergy","wind.monthly_energy_entity"),e.querySelectorAll(".turbine-name-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[o]||(this._config.wind.turbines[o]={}),this._config.wind.turbines[o].name=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-power-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[o]||(this._config.wind.turbines[o]={}),this._config.wind.turbines[o].power_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-speed-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[o]||(this._config.wind.turbines[o]={}),this._config.wind.turbines[o].rpm_entity=a.target.value,this._config.wind.turbines[o].speed_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-daily-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[o]||(this._config.wind.turbines[o]={}),this._config.wind.turbines[o].daily_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".turbine-monthly-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[o]||(this._config.wind.turbines[o]={}),this._config.wind.turbines[o].monthly_energy_entity=a.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),i.addEventListener("blur",()=>this._flushConfig())}),t("batSoc","battery.soc_entity"),t("batPower","battery.power_entity"),t("batPowerSign","battery.power_sign"),t("batVolt","battery.voltage_entity"),t("batCurrent","battery.current_entity"),t("batTemp","battery.temperature_entity"),t("batDelta","battery.cell_delta_entity"),t("batCapacity","battery.capacity_entity"),t("batChargeDaily","battery.charge_daily_entity"),t("batDischargeDaily","battery.discharge_daily_entity"),(_=e.getElementById("batParallelCount"))==null||_.addEventListener("input",i=>{const a=parseInt(i.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=a,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<a;){const o=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${o}`,name:`Батарея ${o}`,soc_entity:`sensor.bms_rack${o}_soc`,current_entity:`sensor.bms_rack${o}_current`,voltage_entity:`sensor.bms_rack${o}_voltage`,power_entity:`sensor.bms_rack${o}_power`,temperature_entity:`sensor.bms_rack${o}_temperature`,cell_delta_entity:`sensor.bms_rack${o}_cell_delta`})}this._valueChanged("battery.parallel_batteries",a,!0),this._valueChanged("battery.modules",this._config.battery.modules,!0),this.render()}),e.querySelectorAll(".bat-mod-name-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].name=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-soc-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].soc_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-curr-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].current_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-volt-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].voltage_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-temp-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].temperature_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-delta-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].cell_delta_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-power-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].power_entity=a.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".bat-mod-cap-inp").forEach(i=>{i.addEventListener("input",a=>{const o=parseInt(a.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[o]||(this._config.battery.modules[o]={}),this._config.battery.modules[o].capacity_kwh=parseFloat(a.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)}),i.addEventListener("blur",()=>this._flushConfig())}),s("gridSellingEnabled","grid.selling_enabled"),s("gridAutoCalculate","grid.auto_calculate"),t("gridPower","grid.power_entity"),t("gridExternalPower","grid.external_power_entity"),t("gridVoltage","grid.voltage_entity"),t("gridStatus","grid.status_entity"),p("gridVoltageThreshold","grid.voltage_threshold"),t("gridPowerSign","grid.power_sign"),p("gridMinThreshold","grid.min_power_threshold"),t("gridImportDaily","grid.import_daily_entity"),t("gridExportDaily","grid.export_daily_entity"),t("gridNonEssential","grid.non_essential_power_entity"),t("gridCarPower","grid.car_power_entity"),s("loadAutoCalculate","load.auto_calculate"),s("loadSeparateExport","load.separate_export"),t("loadEssential","load.essential_power_entity"),t("loadDailyHouse","load.daily_house_entity");const d=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const i=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${i}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render()};(k=e.getElementById("btnAddSubload"))==null||k.addEventListener("click",d),(f=e.getElementById("btnAddSubloadBottom"))==null||f.addEventListener("click",d),e.querySelectorAll(".btn-del-subload").forEach(i=>{i.addEventListener("click",a=>{var l;const o=a.currentTarget||a.target.closest(".btn-del-subload"),w=parseInt(o.dataset.idx);(l=this._config.load)!=null&&l.subloads&&(this._config.load.subloads.splice(w,1),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render())})}),e.querySelectorAll(".subload-name").forEach(i=>{i.addEventListener("input",a=>{var w,l;const o=parseInt(a.target.dataset.idx);(l=(w=this._config.load)==null?void 0:w.subloads)!=null&&l[o]&&(this._config.load.subloads[o].name=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),i.addEventListener("blur",()=>this._flushConfig())}),e.querySelectorAll(".subload-icon").forEach(i=>{i.addEventListener("change",a=>{var w,l;const o=parseInt(a.target.dataset.idx);(l=(w=this._config.load)==null?void 0:w.subloads)!=null&&l[o]&&(this._config.load.subloads[o].icon=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads,!0))})}),e.querySelectorAll(".subload-entity").forEach(i=>{i.addEventListener("input",a=>{var w,l;const o=parseInt(a.target.dataset.idx);(l=(w=this._config.load)==null?void 0:w.subloads)!=null&&l[o]&&(this._config.load.subloads[o].entity=a.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),i.addEventListener("blur",()=>this._flushConfig())}),s("tariffsEnabled","tariffs.enabled"),t("tariffCurrency","tariffs.currency"),p("tariffDayRate","tariffs.day_rate"),p("tariffNightRate","tariffs.night_rate"),p("tariffExportRate","tariffs.export_rate"),p("tariffNightStart","tariffs.night_start_hour"),p("tariffNightEnd","tariffs.night_end_hour"),s("tariffShowDailyCost","tariffs.show_daily_cost"),s("tariffShowExportIncome","tariffs.show_export_income"),s("tariffShowActiveBadge","tariffs.show_active_badge"),s("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",Da);class ei extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._config=null,this._isDrawerOpen=!1,this._activeTab="typography",this._scale=1,this._cardNode=null}set hass(e){this._hass=e,this._cardNode&&(this._cardNode.hass=e),this._updateHaStatusBadge()}connectedCallback(){this._loadConfig(),this._render(),this._bindEvents(),this._hass&&this._cardNode&&(this._cardNode.hass=this._hass),setTimeout(()=>{this._cardNode&&typeof this._cardNode._updateFlowPaths=="function"&&this._cardNode._updateFlowPaths()},120)}_loadConfig(){try{const e=localStorage.getItem("energy_station_app_config");e&&(this._config=JSON.parse(e))}catch{}this._config||(this._config=JSON.parse(JSON.stringify(U))),this._config.appearance||(this._config.appearance=JSON.parse(JSON.stringify(U.appearance||{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"}))),this._scale=this._config.card_scale||1}_saveConfig(){try{typeof localStorage<"u"&&localStorage.setItem("energy_station_app_config",JSON.stringify(this._config))}catch{}this._cardNode&&this._cardNode.setConfig(this._config)}_updateCardConfig(){this._cardNode&&this._cardNode.setConfig(this._config),this._saveConfig()}_render(){var s,p,d,c,h,b,S,$,m,u,E,g,_,k,f,i,a,o,w,l,y,B,n,I,V,H,W;const e=this._config,t=e.appearance;this.shadowRoot.innerHTML=`
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
          display: flex;
          justify-content: center;
          align-items: flex-start;
          transition: margin-right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        energy-station-card,
        #stationCard {
          display: block;
          width: 100%;
          max-width: 1600px;
          min-width: 0;
          flex: 1 1 100%;
          box-sizing: border-box;
        }

        /* SETTINGS DRAWER OVERLAY */
        .panel-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
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
          width: 580px;
          max-width: 95vw;
          height: 100vh;
          background: #090f1d;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.8);
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
          background: rgba(14, 23, 42, 0.85);
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

        /* DRAWER TABS */
        .drawer-tabs {
          display: flex;
          overflow-x: auto;
          background: rgba(8, 14, 26, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 6px 12px;
          gap: 6px;
          scrollbar-width: none;
        }
        .drawer-tabs::-webkit-scrollbar { display: none; }

        .drawer-tab {
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .drawer-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .drawer-tab.active {
          color: #ffffff;
          background: #0284c7;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(2, 132, 199, 0.4);
        }

        /* DRAWER BODY & SECTIONS */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
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

        .cfg-row {
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cfg-label {
          font-size: 12px;
          font-weight: 600;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cfg-hint {
          font-size: 11px;
          color: #64748b;
          line-height: 1.35;
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

        /* INPUTS & CONTROLS */
        input[type="text"], input[type="number"], select {
          background: #080d19;
          border: 1px solid #334155;
          color: #f8fafc;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          font-family: 'JetBrains Mono', monospace;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
        }

        input[type="text"]:focus, input[type="number"]:focus, select:focus {
          border-color: #38bdf8;
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

        /* DRAWER FOOTER */
        .drawer-footer {
          padding: 16px 20px;
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
              <span class="panel-brand-badge">PRO APP</span>
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
            ${e.theme_mode==="light"?"☀️ Світла":((s=e.appearance)==null?void 0:s.theme_preset)==="oled_black"?"⬛ OLED":"🌙 Темна"}
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

        <!-- TABS -->
        <nav class="drawer-tabs">
          <button class="drawer-tab active" data-tab="typography">🎨 Шрифти & Стиль</button>
          <button class="drawer-tab" data-tab="inverter">⚡ Інвертор & Мережа</button>
          <button class="drawer-tab" data-tab="solar">☀️ Сонячні PV</button>
          <button class="drawer-tab" data-tab="battery">🔋 Акумулятори</button>
          <button class="drawer-tab" data-tab="loads">🏠 Споживання</button>
          <button class="drawer-tab" data-tab="tariffs">💰 Тарифи & Слайдери</button>
          <button class="drawer-tab" data-tab="presets">💾 Пресети & Експорт</button>
        </nav>

        <!-- DRAWER BODY -->
        <div class="drawer-body">

          <!-- TAB 1: TYPOGRAPHY & APPEARANCE -->
          <div class="tab-pane" id="pane-typography">
            
            <!-- Font Family Selection -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔤 Основний шрифт інтерфейсу</div>
              <div class="font-tile-grid" id="mainFontGrid">
                <div class="font-tile ${t.font_family==="Inter"?"active":""}" data-val="Inter" style="font-family: 'Inter', sans-serif;">
                  <div class="font-tile-name">Inter</div>
                  <div class="font-tile-sample">Чистий гротеск</div>
                </div>
                <div class="font-tile ${t.font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">Моноширинний</div>
                </div>
                <div class="font-tile ${t.font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', sans-serif;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">Cyberpunk / Sci-Fi</div>
                </div>
                <div class="font-tile ${t.font_family==="Exo 2"?"active":""}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${t.font_family==="Roboto"?"active":""}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Android / Material</div>
                </div>
                <div class="font-tile ${t.font_family==="Ubuntu"?"active":""}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий плавний</div>
                </div>
                <div class="font-tile ${t.font_family==="system-ui"?"active":""}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний шрифт ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔢 Шрифт числових показників (кВт / V / A)</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${t.mono_font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${t.mono_font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', monospace;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${t.mono_font_family==="Roboto Mono"?"active":""}" data-val="Roboto Mono" style="font-family: 'Roboto Mono', monospace;">
                  <div class="font-tile-name">Roboto Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${t.mono_font_family==="Fira Code"?"active":""}" data-val="Fira Code" style="font-family: 'Fira Code', monospace;">
                  <div class="font-tile-name">Fira Code</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
              </div>
            </div>

            <!-- Power Value Size (Розмір цифр) -->
            <div class="cfg-card">
              <div class="cfg-card-title">📏 Розмір головних цифр потужності (кВт)</div>
              <div class="seg-btn-group" id="powerSizeSeg">
                <button class="seg-btn ${t.power_font_size==="compact"?"active":""}" data-val="compact">
                  <div>Компактний</div>
                  <div style="font-size: 10px; color: #64748b;">18px</div>
                </button>
                <button class="seg-btn ${t.power_font_size==="normal"||!t.power_font_size?"active":""}" data-val="normal">
                  <div>Стандартний</div>
                  <div style="font-size: 10px; color: #64748b;">22px</div>
                </button>
                <button class="seg-btn ${t.power_font_size==="large"?"active":""}" data-val="large">
                  <div>Великий</div>
                  <div style="font-size: 10px; color: #64748b;">28px</div>
                </button>
                <button class="seg-btn ${t.power_font_size==="huge"?"active":""}" data-val="huge">
                  <div>Гігантський</div>
                  <div style="font-size: 10px; color: #64748b;">34px (на стіну)</div>
                </button>
              </div>
            </div>

            <!-- Labels Font Size (Розмір підписів) -->
            <div class="cfg-card">
              <div class="cfg-card-title">🏷️ Розмір підписів блоків та статусів</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${t.label_font_size==="compact"?"active":""}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${t.label_font_size==="normal"||!t.label_font_size?"active":""}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${t.label_font_size==="large"?"active":""}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div class="cfg-card">
              <div class="cfg-card-title">🌓 Колірна тема оформлення</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${t.theme_preset==="cyber_dark"||!t.theme_preset?"active":""}" data-val="cyber_dark">
                  🌙 Cyber Dark (Неон)
                </button>
                <button class="seg-btn ${t.theme_preset==="oled_black"?"active":""}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${t.theme_preset==="clean_light"?"active":""}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
              <div class="cfg-hint" style="margin-top: 6px;">
                Режим OLED True Black вимикає синє підсвічування фону і робить його абсолютно чорним (#000000), що економить енергію на AMOLED/OLED планшетах.
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div class="cfg-card">
              <div class="cfg-card-title">🔍 Масштаб та розмір станції (Zoom / Scale)</div>
              <div class="slider-row">
                <input type="range" id="sliderCardScale" min="0.7" max="1.6" step="0.05" value="${this._scale}">
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8; min-width: 44px;">${Math.round(this._scale*100)}%</span>
              </div>
              <div style="display: flex; gap: 6px; margin-top: 10px;">
                <button class="panel-pill-btn btn-scale-preset" data-val="0.85">85% Мобільний</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.0">100% Стандарт</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.2">120% Планшет</button>
                <button class="panel-pill-btn btn-scale-preset" data-val="1.4">140% ТВ / Монітор</button>
              </div>
            </div>

            <!-- Density / Paddings -->
            <div class="cfg-card">
              <div class="cfg-card-title">📦 Щільність розташування елементів (Відступи)</div>
              <div class="seg-btn-group" id="densitySeg">
                <button class="seg-btn ${t.density==="compact"?"active":""}" data-val="compact">Компактна</button>
                <button class="seg-btn ${t.density==="balanced"||!t.density?"active":""}" data-val="balanced">Збалансована</button>
                <button class="seg-btn ${t.density==="spacious"?"active":""}" data-val="spacious">Простора</button>
              </div>
            </div>

            <!-- Animations -->
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Анімація імпульсів енергії</div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Швидкість анімації:</span>
                  <span id="lblAnimSpeed" style="color: #38bdf8; font-family: 'JetBrains Mono', monospace;">${((p=e.animations)==null?void 0:p.speed)||1.2}s</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderAnimSpeed" min="0.6" max="3.0" step="0.1" value="${((d=e.animations)==null?void 0:d.speed)||1.2}">
                </div>
              </div>
            </div>

          </div>

          <!-- TAB 2: INVERTER & GRID -->
          <div class="tab-pane" id="pane-inverter" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Гібридний інвертор</div>
              <div class="cfg-row">
                <label class="cfg-label">Модель / Заголовок інвертора:</label>
                <input type="text" id="inpInverterModel" value="${((c=e.inverter)==null?void 0:c.model_name)||"DEYE SUN-12K"}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор напруги мережі (Grid Voltage, V):</label>
                <input type="text" id="inpGridVolt" value="${((h=e.inverter)==null?void 0:h.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор струму мережі (Grid Current, A):</label>
                <input type="text" id="inpGridCurr" value="${((b=e.inverter)==null?void 0:b.current_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_current">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор потужності на порту інвертора (Total Grid Power):</label>
                <input type="text" id="inpGridPower" value="${((S=e.grid)==null?void 0:S.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Зовнішній лічильник мережі (External CT / Smart Meter):</label>
                <input type="text" id="inpGridExtPower" value="${(($=e.grid)==null?void 0:$.external_power_entity)||""}" placeholder="sensor.esp32_deye_inverter_external_power">
                <span class="cfg-hint">Трансформатор струму на вводі від стовпа. Відображає реальний перетік вулиці.</span>
              </div>
            </div>
          </div>

          <!-- TAB 3: SOLAR PV -->
          <div class="tab-pane" id="pane-solar" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">☀️ Сонячне поле (PV панелі)</div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Кількість стрінгів / полів (1 - 16):</span>
                  <span id="lblPvCount" style="color: #fbbf24; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${((m=e.solar)==null?void 0:m.pv_count)||3}</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderPvCount" min="1" max="16" step="1" value="${((u=e.solar)==null?void 0:u.pv_count)||3}">
                </div>
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Встановлена пікова потужність СЕС (kWp / кВт):</label>
                <input type="number" step="0.1" id="inpSolarInstalled" value="${((E=e.solar)==null?void 0:E.installed_power)||12}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Ціль генерації на день (kWh):</label>
                <input type="number" id="inpSolarTarget" value="${((g=e.solar)==null?void 0:g.target_daily_yield)||55}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор щоденної генерації СЕС (kWh):</label>
                <input type="text" id="inpSolarDailyYield" value="${((_=e.solar)==null?void 0:_.daily_yield_entity)||""}">
              </div>
            </div>
          </div>

          <!-- TAB 4: BATTERY -->
          <div class="tab-pane" id="pane-battery" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">🔋 Акумуляторна система (АКБ)</div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор заряду батареї (SOC, %):</label>
                <input type="text" id="inpBatSoc" value="${((k=e.battery)==null?void 0:k.soc_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор потужності батареї (Power, W/kW):</label>
                <input type="text" id="inpBatPower" value="${((f=e.battery)==null?void 0:f.power_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор напруги батареї (Voltage, V):</label>
                <input type="text" id="inpBatVolt" value="${((i=e.battery)==null?void 0:i.voltage_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор струму батареї (Current, A):</label>
                <input type="text" id="inpBatCurr" value="${((a=e.battery)==null?void 0:a.current_entity)||""}">
              </div>
              <div class="cfg-row">
                <div class="cfg-label">
                  <span>Кількість паралельних блоків АКБ (1 - 8):</span>
                  <span id="lblBatCount" style="color: #34d399; font-family: 'JetBrains Mono', monospace; font-weight: 700;">${((o=e.battery)==null?void 0:o.parallel_batteries)||2}</span>
                </div>
                <div class="slider-row">
                  <input type="range" id="sliderBatCount" min="1" max="8" step="1" value="${((w=e.battery)==null?void 0:w.parallel_batteries)||2}">
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 5: LOADS -->
          <div class="tab-pane" id="pane-loads" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">🏠 Навантаження будинку</div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор споживання будинку (Essential Load Power):</label>
                <input type="text" id="inpLoadPower" value="${((l=e.load)==null?void 0:l.essential_power_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Сенсор щоденного споживання будинку (kWh):</label>
                <input type="text" id="inpLoadDaily" value="${((y=e.load)==null?void 0:y.daily_house_entity)||""}">
              </div>
            </div>
          </div>

          <!-- TAB 6: TARIFFS & CONTROLS -->
          <div class="tab-pane" id="pane-tariffs" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">💰 Тарифи на електроенергію</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="cfg-row">
                  <label class="cfg-label">Денний тариф (грн/кВт·год):</label>
                  <input type="number" step="0.01" id="inpTariffDay" value="${((B=e.tariffs)==null?void 0:B.day_rate)||4.32}">
                </div>
                <div class="cfg-row">
                  <label class="cfg-label">Нічний тариф (грн/кВт·год):</label>
                  <input type="number" step="0.01" id="inpTariffNight" value="${((n=e.tariffs)==null?void 0:n.night_rate)||2.16}">
                </div>
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Зелений тариф / Продаж (грн/кВт·год):</label>
                <input type="number" step="0.01" id="inpTariffExport" value="${((I=e.tariffs)==null?void 0:I.export_rate)||5.3}">
              </div>
            </div>

            <div class="cfg-card">
              <div class="cfg-card-title">🎛️ Сенсори керування струмом заряду</div>
              <div class="cfg-row">
                <label class="cfg-label">Струм заряду АКБ від сонця (number):</label>
                <input type="text" id="inpCtrlSolar" value="${((V=e.controls)==null?void 0:V.solar_charge_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Струм заряду АКБ від мережі (number):</label>
                <input type="text" id="inpCtrlGrid" value="${((H=e.controls)==null?void 0:H.grid_charge_entity)||""}">
              </div>
              <div class="cfg-row">
                <label class="cfg-label">Потужність продажу в мережу (number):</label>
                <input type="text" id="inpCtrlSell" value="${((W=e.controls)==null?void 0:W.sell_power_entity)||""}">
              </div>
            </div>
          </div>

          <!-- TAB 7: PRESETS & EXPORT -->
          <div class="tab-pane" id="pane-presets" style="display: none;">
            <div class="cfg-card">
              <div class="cfg-card-title">⚡ Швидкі готові пресети конфігурації</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn-action-secondary" id="btnPresetDeye" style="text-align: left;">
                  <div style="font-weight: 700; color: #38bdf8;">⚡ Deye SUN-12K (Ваш ESPHome)</div>
                  <div style="font-size: 11px; color: #94a3b8;">Автоматичні сенсори ESPHome для Deye 12 кВт, 3 стрінги PV, 2 АКБ, бойлер</div>
                </button>
                <button class="btn-action-secondary" id="btnPresetSolarman" style="text-align: left;">
                  <div style="font-weight: 700; color: #fbbf24;">☀️ Deye Solarman Інтеграція</div>
                  <div style="font-size: 11px; color: #94a3b8;">Для інверторів, підключених через Solarman Wi-Fi логер</div>
                </button>
              </div>
            </div>

            <div class="cfg-card">
              <div class="cfg-card-title">📋 Експорт / Резервна копія</div>
              <button class="btn-action-secondary" id="btnCopyJson" style="width: 100%; margin-bottom: 8px;">
                Скопіювати конфігурацію (JSON)
              </button>
              <button class="btn-action-secondary" id="btnResetDefaults" style="width: 100%; color: #f87171;">
                Скинути все до стандартних
              </button>
            </div>
          </div>

        </div>

        <!-- DRAWER FOOTER -->
        <div class="drawer-footer">
          <button class="btn-action-secondary" id="btnCancelDrawer">Закрити</button>
          <button class="btn-action-primary" id="btnSaveDrawer">✓ Застосувати зміни</button>
        </div>
      </aside>
    `,this._cardNode=this.shadowRoot.getElementById("stationCard"),this._cardNode&&(this._cardNode.setConfig(this._config),this._hass&&(this._cardNode.hass=this._hass))}_bindEvents(){var $,m,u,E,g,_,k,f,i,a,o,w;const e=this.shadowRoot;($=e.getElementById("btnOpenDrawer"))==null||$.addEventListener("click",()=>this._openDrawer()),(m=e.getElementById("btnCloseDrawer"))==null||m.addEventListener("click",()=>this._closeDrawer()),(u=e.getElementById("btnCancelDrawer"))==null||u.addEventListener("click",()=>this._closeDrawer()),(E=e.getElementById("drawerBackdrop"))==null||E.addEventListener("click",()=>this._closeDrawer()),(g=e.getElementById("btnSaveDrawer"))==null||g.addEventListener("click",()=>{this._collectFormData(),this._updateCardConfig(),this._closeDrawer()}),(_=e.getElementById("btnZoomIn"))==null||_.addEventListener("click",()=>this._changeScale(this._scale+.1)),(k=e.getElementById("btnZoomOut"))==null||k.addEventListener("click",()=>this._changeScale(this._scale-.1)),(f=e.getElementById("btnFullscreen"))==null||f.addEventListener("click",()=>{var l,y,B;document.fullscreenElement?(B=document.exitFullscreen)==null||B.call(document):(y=(l=document.documentElement).requestFullscreen)==null||y.call(l)}),(i=e.getElementById("btnQuickTheme"))==null||i.addEventListener("click",()=>{var V;const l=["cyber_dark","oled_black","clean_light"],y=((V=this._config.appearance)==null?void 0:V.theme_preset)||"cyber_dark",B=(l.indexOf(y)+1)%l.length,n=l[B];this._config.appearance.theme_preset=n,this._config.theme_mode=n==="clean_light"?"light":"dark",this._updateCardConfig();const I=e.getElementById("btnQuickTheme");I&&(I.innerText=n==="clean_light"?"☀️ Світла":n==="oled_black"?"⬛ OLED":"🌙 Темна")}),e.querySelectorAll(".drawer-tab").forEach(l=>{l.addEventListener("click",()=>{const y=l.dataset.tab;e.querySelectorAll(".drawer-tab").forEach(n=>n.classList.remove("active")),l.classList.add("active"),e.querySelectorAll(".tab-pane").forEach(n=>n.style.display="none");const B=e.getElementById(`pane-${y}`);B&&(B.style.display="block")})}),e.querySelectorAll("#mainFontGrid .font-tile").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#mainFontGrid .font-tile").forEach(y=>y.classList.remove("active")),l.classList.add("active"),this._config.appearance.font_family=l.dataset.val,this._updateCardConfig()})}),e.querySelectorAll("#monoFontGrid .font-tile").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#monoFontGrid .font-tile").forEach(y=>y.classList.remove("active")),l.classList.add("active"),this._config.appearance.mono_font_family=l.dataset.val,this._updateCardConfig()})}),e.querySelectorAll("#powerSizeSeg .seg-btn").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#powerSizeSeg .seg-btn").forEach(y=>y.classList.remove("active")),l.classList.add("active"),this._config.appearance.power_font_size=l.dataset.val,this._updateCardConfig()})}),e.querySelectorAll("#labelSizeSeg .seg-btn").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#labelSizeSeg .seg-btn").forEach(y=>y.classList.remove("active")),l.classList.add("active"),this._config.appearance.label_font_size=l.dataset.val,this._updateCardConfig()})}),e.querySelectorAll("#themePresetSeg .seg-btn").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#themePresetSeg .seg-btn").forEach(B=>B.classList.remove("active")),l.classList.add("active");const y=l.dataset.val;this._config.appearance.theme_preset=y,this._config.theme_mode=y==="clean_light"?"light":"dark",this._updateCardConfig()})}),e.querySelectorAll("#densitySeg .seg-btn").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#densitySeg .seg-btn").forEach(y=>y.classList.remove("active")),l.classList.add("active"),this._config.appearance.density=l.dataset.val,this._updateCardConfig()})});const t=e.getElementById("sliderCardScale"),s=e.getElementById("lblCardScale");t&&t.addEventListener("input",l=>{const y=parseFloat(l.target.value);s&&(s.innerText=`${Math.round(y*100)}%`),this._changeScale(y)}),e.querySelectorAll(".btn-scale-preset").forEach(l=>{l.addEventListener("click",()=>{const y=parseFloat(l.dataset.val);t&&(t.value=y),s&&(s.innerText=`${Math.round(y*100)}%`),this._changeScale(y)})});const p=e.getElementById("sliderAnimSpeed"),d=e.getElementById("lblAnimSpeed");p&&p.addEventListener("input",l=>{const y=parseFloat(l.target.value);d&&(d.innerText=`${y}s`),this._config.animations||(this._config.animations={}),this._config.animations.speed=y,this._updateCardConfig()});const c=e.getElementById("sliderPvCount"),h=e.getElementById("lblPvCount");c&&c.addEventListener("input",l=>{const y=parseInt(l.target.value,10);h&&(h.innerText=y),this._config.solar||(this._config.solar={}),this._config.solar.pv_count=y,this._updateCardConfig()});const b=e.getElementById("sliderBatCount"),S=e.getElementById("lblBatCount");b&&b.addEventListener("input",l=>{const y=parseInt(l.target.value,10);S&&(S.innerText=y),this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=y,this._updateCardConfig()}),(a=e.getElementById("btnPresetDeye"))==null||a.addEventListener("click",()=>{this._applyPreset("deye_esphome")}),(o=e.getElementById("btnResetDefaults"))==null||o.addEventListener("click",()=>{confirm("Скинути всі налаштування до початкових?")&&(this._config=JSON.parse(JSON.stringify(U)),this._scale=1,this._saveConfig(),this._render(),this._bindEvents())}),(w=e.getElementById("btnCopyJson"))==null||w.addEventListener("click",()=>{var l;(l=navigator.clipboard)==null||l.writeText(JSON.stringify(this._config,null,2)),alert("Конфігурацію скопійовано в буфер обміну!")})}_collectFormData(){const e=this.shadowRoot,t=this._config;e.getElementById("inpInverterModel")&&(t.inverter.model_name=e.getElementById("inpInverterModel").value),e.getElementById("inpGridVolt")&&(t.inverter.voltage_entity=e.getElementById("inpGridVolt").value),e.getElementById("inpGridCurr")&&(t.inverter.current_entity=e.getElementById("inpGridCurr").value),e.getElementById("inpGridPower")&&(t.grid.power_entity=e.getElementById("inpGridPower").value),e.getElementById("inpGridExtPower")&&(t.grid.external_power_entity=e.getElementById("inpGridExtPower").value),e.getElementById("inpSolarInstalled")&&(t.solar.installed_power=parseFloat(e.getElementById("inpSolarInstalled").value)||12),e.getElementById("inpSolarTarget")&&(t.solar.target_daily_yield=parseFloat(e.getElementById("inpSolarTarget").value)||55),e.getElementById("inpSolarDailyYield")&&(t.solar.daily_yield_entity=e.getElementById("inpSolarDailyYield").value),e.getElementById("inpBatSoc")&&(t.battery.soc_entity=e.getElementById("inpBatSoc").value),e.getElementById("inpBatPower")&&(t.battery.power_entity=e.getElementById("inpBatPower").value),e.getElementById("inpBatVolt")&&(t.battery.voltage_entity=e.getElementById("inpBatVolt").value),e.getElementById("inpBatCurr")&&(t.battery.current_entity=e.getElementById("inpBatCurr").value),e.getElementById("inpLoadPower")&&(t.load.essential_power_entity=e.getElementById("inpLoadPower").value),e.getElementById("inpLoadDaily")&&(t.load.daily_house_entity=e.getElementById("inpLoadDaily").value),e.getElementById("inpTariffDay")&&(t.tariffs.day_rate=parseFloat(e.getElementById("inpTariffDay").value)||4.32),e.getElementById("inpTariffNight")&&(t.tariffs.night_rate=parseFloat(e.getElementById("inpTariffNight").value)||2.16),e.getElementById("inpTariffExport")&&(t.tariffs.export_rate=parseFloat(e.getElementById("inpTariffExport").value)||5.3),e.getElementById("inpCtrlSolar")&&(t.controls.solar_charge_entity=e.getElementById("inpCtrlSolar").value),e.getElementById("inpCtrlGrid")&&(t.controls.grid_charge_entity=e.getElementById("inpCtrlGrid").value),e.getElementById("inpCtrlSell")&&(t.controls.sell_power_entity=e.getElementById("inpCtrlSell").value)}_applyPreset(e){e==="deye_esphome"&&(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.external_power_entity="sensor.esp32_deye_inverter_external_power",this._config.load.essential_power_entity="sensor.boiler_power",this._config.controls={show:!0,solar_charge_entity:"number.inverter_12_kvt_battery_max_charging_current",grid_charge_entity:"number.inverter_12_kvt_battery_grid_charging_current",sell_power_entity:"number.inverter_12_kvt_export_surplus_power"},this._saveConfig(),this._render(),this._bindEvents(),alert("Застосовано пресет: Deye SUN-12K (ESPHome)!"))}_openDrawer(){var t,s;this._isDrawerOpen=!0;const e=this.shadowRoot;(t=e.getElementById("settingsDrawer"))==null||t.classList.add("active"),(s=e.getElementById("drawerBackdrop"))==null||s.classList.add("active")}_closeDrawer(){var t,s;this._isDrawerOpen=!1;const e=this.shadowRoot;(t=e.getElementById("settingsDrawer"))==null||t.classList.remove("active"),(s=e.getElementById("drawerBackdrop"))==null||s.classList.remove("active")}_changeScale(e){const t=Math.max(.65,Math.min(1.8,Math.round(e*100)/100));this._scale=t,this._config.card_scale=t;const s=this.shadowRoot.getElementById("txtZoomVal");s&&(s.innerText=`${Math.round(t*100)}%`),this._updateCardConfig()}_updateHaStatusBadge(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("haStatusText");if(e)if(this._hass){const s=Object.keys(this._hass.states||{}).length;e.innerText=`HA Live (${s} сенсорів)`}else e.innerText="Демо режим"}}const Zt={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",bat_delta:"Розбаланс",bat_remaining:"Залишок",edit_card:"Редагувати",kwh_unit:"кВт·год"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",bat_delta:"Cell Delta",bat_remaining:"Remaining",edit_card:"Edit",kwh_unit:"kWh"}};class ti extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null}connectedCallback(){if(this._setupResizeObserver(),typeof sessionStorage<"u"&&sessionStorage.getItem("energy_station_auto_edit")==="1"){try{sessionStorage.removeItem("energy_station_auto_edit")}catch{}setTimeout(()=>this._openCardEditor(),350)}}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}_openCardEditor(){var s,p;let e=this,t=null;for(;e;){if(e.tagName&&(e.tagName.toLowerCase()==="hui-card-options"||e.tagName.toLowerCase()==="hui-card-edit-mode")){t=e;break}if(e.parentElement)e=e.parentElement;else if(e.parentNode)e=e.parentNode;else if(e.getRootNode&&e.getRootNode().host)e=e.getRootNode().host;else break}if(!t&&typeof document<"u"){const d=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const c of d)if(c.contains(this)||(s=c.shadowRoot)!=null&&s.contains(this)||d.length===1){t=c;break}}if(t){if(typeof t._editCard=="function"){t._editCard();return}const d=((p=t.shadowRoot)==null?void 0:p.querySelector("mwc-button, ha-button, button"))||t.querySelector("mwc-button, ha-button, button");if(d){d.click();return}if(t.path!==void 0){const c=new CustomEvent("ll-edit-card",{bubbles:!0,composed:!0,detail:{path:t.path}});t.dispatchEvent(c);return}}if(typeof window<"u"){try{typeof sessionStorage<"u"&&sessionStorage.setItem("energy_station_auto_edit","1")}catch{}const d=new URL(window.location.href);d.searchParams.has("edit")?setTimeout(()=>{var h,b;const c=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const S of c)if(S.contains(this)||(h=S.shadowRoot)!=null&&h.contains(this)||c.length===1){if(typeof S._editCard=="function"){S._editCard();return}const $=((b=S.shadowRoot)==null?void 0:b.querySelector("mwc-button, ha-button, button"))||S.querySelector("mwc-button, ha-button, button");if($){$.click();return}}},500):(d.searchParams.set("edit","1"),window.location.href=d.toString())}}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(U))}getCardSize(){return 6}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=JSON.parse(JSON.stringify(e)),s=JSON.parse(JSON.stringify(U));this._config=this._deepMerge(s,t);const p=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=p||this._config.theme_mode||"dark";const d=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=d||this._config.language||"uk";const c=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=c?parseFloat(c):this._config.card_scale||this._config.scale||1,this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(e){return typeof requestAnimationFrame<"u"?requestAnimationFrame(e):setTimeout(e,0)}_changeScale(e){var d,c;let t=typeof e=="number"?e:this._scale+(e||.1);t=Math.max(.7,Math.min(2,Math.round(t*100)/100)),this._scale=t,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",t.toString());const s=(d=this.shadowRoot)==null?void 0:d.querySelector(".energy-station-container");s&&(s.style.setProperty("--es-card-scale",t.toString()),s.style.zoom=t.toString());const p=(c=this.shadowRoot)==null?void 0:c.getElementById("headerZoomVal");p&&(p.innerText=`${Math.round(t*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}set hass(e){this._hass=e,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(e,t){const s=Array.isArray(e)?[...e]:Object.assign({},e);if(!t||typeof t!="object")return s;for(const p of Object.keys(t)){const d=t[p],c=e?e[p]:void 0;d&&typeof d=="object"&&!Array.isArray(d)?s[p]=this._deepMerge(c||{},d):s[p]=d}return s}_getEntityState(e){var h;if(!this._hass||!e||!this._hass.states[e])return null;const t=this._hass.states[e],p=String(t.state).trim().replace(",","."),d=parseFloat(p),c=((h=t.attributes)==null?void 0:h.unit_of_measurement)||"";return{raw:t.state,val:isNaN(d)?0:d,unit:c,attributes:t.attributes}}_t(e){var s,p;const t=this._language||"uk";return((s=Zt[t])==null?void 0:s[e])||((p=Zt.uk)==null?void 0:p[e])||e}_toggleTheme(e){const t=e||(this._themeMode==="light"?"dark":"light");this._themeMode=t;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",t)}catch{}this._applyTheme()}_toggleLanguage(e){const t=e||(this._language==="en"?"uk":"en");this._language=t;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",t)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var c;const e=(c=this.shadowRoot)==null?void 0:c.querySelector(".energy-station-container");if(!e)return;const t=this._themeMode==="light";e.classList.toggle("theme-light",t);const s=this.shadowRoot.getElementById("headerThemeToggle");s&&(s.innerHTML=t?"☀️":"🌙",s.setAttribute("title",t?this._t("theme_dark"):this._t("theme_light")));const p=this.shadowRoot.getElementById("btnThemeDark"),d=this.shadowRoot.getElementById("btnThemeLight");p&&d&&(p.classList.toggle("active",!t),d.classList.toggle("active",t))}_formatPower(e,t=0){const s=this._language==="en"?"kW":"кВт";if(!e)return{num:t.toFixed(3),kw:t,str:`${t.toFixed(3)} ${s}`};let p=e.val;return e.unit==="W"&&(p=p/1e3),{num:p.toFixed(3),kw:p,str:`${p.toFixed(3)} ${s}`}}_fireMoreInfo(e){if(!e)return;const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_renderCardSkeleton(){var b,S,$,m,u,E,g,_,k,f,i,a,o,w,l,y,B,n;const e=this._config||U;this._initialized=!0;const t=e.appearance||U.appearance||{},s={Inter:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif","JetBrains Mono":"'JetBrains Mono', monospace",Roboto:"'Roboto', sans-serif",Orbitron:"'Orbitron', sans-serif","Exo 2":"'Exo 2', sans-serif",Ubuntu:"'Ubuntu', sans-serif","system-ui":"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},p={"JetBrains Mono":"'JetBrains Mono', monospace","Roboto Mono":"'Roboto Mono', monospace",Orbitron:"'Orbitron', monospace","Fira Code":"'Fira Code', monospace","Share Tech Mono":"'Share Tech Mono', monospace"},d={compact:"18px",normal:"22px",large:"28px",huge:"34px"},c={compact:"10px",normal:"11.5px",large:"13.5px"},h={compact:"14px 18px",balanced:"22px 28px 24px 28px",spacious:"30px 36px"};this.shadowRoot.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          font-family: var(--es-font-family, ${s[t.font_family]||s.Inter});
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((b=e.animations)==null?void 0:b.speed)||1.2}s;
          --es-power-font-size: ${d[t.power_font_size]||"22px"};
          --es-label-font-size: ${c[t.label_font_size]||"11.5px"};
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
          padding: ${h[t.density]||"22px 28px 24px 28px"};
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
          font-family: var(--es-mono-font-family, ${p[t.mono_font_family]||p["JetBrains Mono"]});
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
            <button class="es-header-pill-btn es-header-edit-btn" id="headerEditCard" title="${this._t("edit_card")}">
              <span>⚙️</span>
              <span>${this._t("edit_card")}</span>
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

        <!-- SOLAR PV SECTION -->
        <div class="es-solar-section">
          <div class="es-sun-header clickable-node" id="solarHeaderNode">
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${ie.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((S=e.solar)==null?void 0:S.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${ie.sun}</div>
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
            </div>

            <!-- Active Tariff Badge -->
            <div id="gridTariffBadgeContainer" style="display: flex; justify-content: flex-end; margin-bottom: 3px;">
              <div class="es-mono" id="gridTariffBadge" style="font-size: 10px; font-weight: 700; border-radius: 9999px; padding: 2px 8px; display: none; align-items: center; gap: 4px;"></div>
            </div>

            <!-- 1. Grid Node (Мережа) -->
            <div class="es-schematic-node glow-grid clickable-node" id="gridNode" style="border-color: rgba(56, 189, 248, 0.4);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ie.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${($=e.grid)!=null&&$.show_non_essential&&((m=e.grid)!=null&&m.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ie.house_outline||ie.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(u=e.grid)!=null&&u.show_car&&((E=e.grid)!=null&&E.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ie.car}</div>
              <div class="es-node-title" id="carTitle">${((g=e.grid)==null?void 0:g.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${ie.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((_=e.inverter)==null?void 0:_.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((k=e.aux)==null?void 0:k.type)==="none"||((f=e.aux)==null?void 0:f.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${ie[(i=e.aux)==null?void 0:i.type]||ie.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((a=e.aux)==null?void 0:a.type)==="microinverter"&&(!((o=e.aux)!=null&&o.title)||((w=e.aux)==null?void 0:w.title)==="Вітрогенератор")?this._t("aux_microinverter"):((l=e.aux)==null?void 0:l.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((y=e.aux)==null?void 0:y.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((B=e.wind)==null?void 0:B.show)===!1&&((n=e.aux)==null?void 0:n.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${ie.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),this._rAF(()=>this._updateFlowPaths())}_cacheDomNodes(){const e=this.shadowRoot;this._nodes={dailySolarYield:e.getElementById("dailySolarYield"),targetSolarYield:e.getElementById("targetSolarYield"),solarProgressBar:e.getElementById("solarProgressBar"),solarSavingsDaily:e.getElementById("solarSavingsDaily"),totalPvPowerBadge:e.getElementById("totalPvPowerBadge"),totalPvPowerVal:e.getElementById("totalPvPowerVal"),totalPvPercentBadge:e.getElementById("totalPvPercentBadge"),totalPvSubline:e.getElementById("totalPvSubline"),totalPvCapDetail:e.getElementById("totalPvCapDetail"),totalPvCapTotal:e.getElementById("totalPvCapTotal"),solarFlowCollector:e.getElementById("solarFlowCollector"),gridImportDaily:e.getElementById("gridImportDaily"),gridCostDailyRow:e.getElementById("gridCostDailyRow"),gridCostDailyVal:e.getElementById("gridCostDailyVal"),gridCostSplitVal:e.getElementById("gridCostSplitVal"),gridTariffBadge:e.getElementById("gridTariffBadge"),gridExportDaily:e.getElementById("gridExportDaily"),gridExportIncomeRow:e.getElementById("gridExportIncomeRow"),gridExportIncomeVal:e.getElementById("gridExportIncomeVal"),gridPowerVal:e.getElementById("gridPowerVal"),gridDirectionLabel:e.getElementById("gridDirectionLabel"),carPowerVal:e.getElementById("carPowerVal"),carNode:e.getElementById("carNode"),nonEssentialNode:e.getElementById("nonEssentialNode"),nonEssentialPowerVal:e.getElementById("nonEssentialPowerVal"),inverterAcTemp:e.getElementById("inverterAcTemp"),inverterDcTemp:e.getElementById("inverterDcTemp"),inverterModelTag:e.getElementById("inverterModelTag"),inverterPowerVal:e.getElementById("inverterPowerVal"),inverterStatusBadge:e.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:e.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:e.getElementById("inverterSelfConsumptionVal"),inverterVolt:e.getElementById("inverterVolt"),inverterCurrent:e.getElementById("inverterCurrent"),inverterFreq:e.getElementById("inverterFreq"),auxNode:e.getElementById("auxNode"),auxTitle:e.getElementById("auxTitle"),auxPowerVal:e.getElementById("auxPowerVal"),auxSubtitle:e.getElementById("auxSubtitle"),auxIconBox:e.getElementById("auxIconBox"),windStationContainer:e.getElementById("windStationContainer"),dailyHouseKwh:e.getElementById("dailyHouseKwh"),essentialPowerVal:e.getElementById("essentialPowerVal"),subloadsBusContainer:e.getElementById("subloadsBusContainer"),subloadsBusSvg:e.getElementById("subloadsBusSvg"),subloadsFlowCollector:e.getElementById("subloadsFlowCollector"),subloadsBusBase:e.getElementById("subloadsBusBase"),subloadsBusStemBase:e.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:e.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:e.getElementById("subloadsBusFeeders"),batChargeDaily:e.getElementById("batChargeDaily"),batDischargeDaily:e.getElementById("batDischargeDaily"),masterBatterySoc:e.getElementById("masterBatterySoc"),masterBatteryFlowHint:e.getElementById("masterBatteryFlowHint"),batVoltVal:e.getElementById("batVoltVal"),batCurrentVal:e.getElementById("batCurrentVal"),batMasterTempVal:e.getElementById("batMasterTempVal"),batMasterTempBadge:e.getElementById("batMasterTempBadge"),batReserveSoc:e.getElementById("batReserveSoc"),batReserveProgressBar:e.getElementById("batReserveProgressBar"),batCapacityVal:e.getElementById("batCapacityVal"),batteryFlowCollector:e.getElementById("batteryFlowCollector"),pvPanelsContainer:e.getElementById("pvPanelsContainer"),subloadsContainer:e.getElementById("subloadsContainer"),batteryRackContainer:e.getElementById("batteryRackContainer"),bottomControlsDock:e.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var b,S,$,m,u,E,g,_;const e=this._config||U,t=((b=this._nodes)==null?void 0:b.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!t)return;if(t.innerHTML="",!(((S=e.wind)==null?void 0:S.show)!==!1||(($=e.aux)==null?void 0:$.type)==="wind")){t.classList.add("hidden");return}t.classList.remove("hidden");const p=((m=e.wind)==null?void 0:m.turbine_count)||((E=(u=e.wind)==null?void 0:u.turbines)==null?void 0:E.length)||2,d=((g=e.wind)==null?void 0:g.turbines)||[],c=document.createElement("div");c.className="es-wind-summary-bar es-mono",c.id="windStationSummaryBar",c.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,t.appendChild(c);const h=document.createElement("div");h.className="es-wind-pods-row",t.appendChild(h);for(let k=0;k<p;k++){const f=d[k]||{name:`Вітряк ${k+1}`,power_entity:`sensor.wind_turbine_${k+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((_=e.wind)==null?void 0:_.animation_threshold)||50},i=!!(f.daily_energy_entity||f.monthly_energy_entity),a=document.createElement("div");a.className="es-turbine-card glow-wind clickable-node",a.id=`turbineCard_${k+1}`,a.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${k+1}">
              ${ie.wind_turbine}
            </div>
            <span>${f.name||`Вітряк ${k+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${k+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${k+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${k+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${k+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${k+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${i?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${k+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${k+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,a.addEventListener("click",()=>{this._fireMoreInfo(f.power_entity)}),h.appendChild(a)}}_renderDynamicPvPanels(){var c,h,b,S,$,m;const e=this._config||U,t=this._nodes.pvPanelsContainer;if(!t)return;t.innerHTML="";const s=((c=e.solar)==null?void 0:c.pv_count)||((b=(h=e.solar)==null?void 0:h.strings)==null?void 0:b.length)||3,p=this._language==="en"?"kWp":"кВтп",d=((S=e.solar)==null?void 0:S.show_metrics)!==!1;for(let u=1;u<=s;u++){const E=u<10?`0${u}`:`${u}`,g=((m=($=e.solar)==null?void 0:$.strings)==null?void 0:m[u-1])||{},_=g.name||`PV ${E}`,k=g.capacity_kw!==void 0?parseFloat(g.capacity_kw):4,f=g.voltage_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_voltage`:""),i=g.current_entity||(u<=3?`sensor.deye_12k_inverter_pv${u}_current`:""),a=document.createElement("div");a.className="es-pv-panel glow-solar clickable-node",a.dataset.pvIndex=u,a.id=`pvPanel_${u}`,a.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${ie.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${_}</span>
        <span class="es-pv-val es-mono" id="pvVal_${u}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${u}" style="${d?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${u}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${u}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${u}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${u}">${k.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${p}</span> <span id="pvPercent_${u}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,a.addEventListener("click",()=>{var y;const l=g.power_entity||f||i||((y=e.solar)==null?void 0:y.total_power_entity);this._fireMoreInfo(l)});const o=a.querySelector(`#pvVolt_${u}`);o&&o.addEventListener("click",l=>{l.stopPropagation(),f?this._fireMoreInfo(f):g.power_entity&&this._fireMoreInfo(g.power_entity)});const w=a.querySelector(`#pvCurr_${u}`);w&&w.addEventListener("click",l=>{l.stopPropagation(),i?this._fireMoreInfo(i):g.power_entity&&this._fireMoreInfo(g.power_entity)}),t.appendChild(a)}}_renderDynamicSubloads(){var p;const e=this._config||U,t=this._nodes.subloadsContainer;if(!t)return;t.innerHTML="",(((p=e.load)==null?void 0:p.subloads)||[]).forEach((d,c)=>{const h=document.createElement("div");h.className="es-subload-card clickable-node",h.id=`subloadCard_${c}`,h.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${ie[d.icon]||ie.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${d.name}</span>
        <span class="es-mono" id="subloadVal_${c}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,h.addEventListener("click",()=>{this._fireMoreInfo(d.entity)}),t.appendChild(h)})}_renderDynamicBatteryRack(){var m,u,E,g,_,k,f;const e=this._config||U,t=this._nodes.batteryRackContainer;if(!t)return;t.innerHTML="";const s=((m=e.battery)==null?void 0:m.parallel_batteries)||((E=(u=e.battery)==null?void 0:u.modules)==null?void 0:E.length)||2,p=[82,76,91,68,85,90,72,80],d=[52.4,52.4,52.4,52.4,52.4,52.4],c=[25,21,22.5,20,24,19.5,23,21.5],h=[12,8,15,9,14,11,18,10],b=this._t("bat_prefix"),S=this._language==="en"?"kW":"кВт",$=this._language==="en"?"kWh":"кВт·год";for(let i=1;i<=s;i++){const a=((_=(g=e.battery)==null?void 0:g.modules)==null?void 0:_[i-1])||((f=(k=e.battery)==null?void 0:k.module_entities)==null?void 0:f[i-1])||{},o=a.name||`${b} ${i}`,w=p[(i-1)%p.length],l=d[(i-1)%d.length],y=c[(i-1)%c.length],B=h[(i-1)%h.length],n=document.createElement("div");n.className="es-battery-pack-card glow-battery clickable-node",n.id=`batPackCard_${i}`,n.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${ie.battery_vertical}</div>
        <span class="es-bat-name">${o}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${i}">${w}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${i}">${l.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${i}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${S}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${i}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${i}">${y.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${i}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${i}">${B} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${i}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${$}</div>
      `,n.addEventListener("click",I=>{var H;if(I.target.closest(`#batPackTemp_${i}`)){const W=a.temperature_entity||a.temp||`sensor.bms_rack${i}_temperature`;this._fireMoreInfo(W);return}if(I.target.closest(`#batPackDelta_${i}`)){const W=a.cell_delta_entity||a.delta_entity||`sensor.bms_rack${i}_cell_delta`;this._fireMoreInfo(W);return}const V=a.soc_entity||a.soc||a.voltage_entity||a.volt||a.current_entity||((H=e.battery)==null?void 0:H.soc_entity);this._fireMoreInfo(V)}),t.appendChild(n)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var _,k,f,i,a,o,w,l,y,B;const e=this._config||U,t=((_=this._nodes)==null?void 0:_.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!t||(t.innerHTML="",e.show_quick_settings===!1))return;const s=this._themeMode==="light",p=this._language==="en",d=((k=e.controls)==null?void 0:k.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",c=((f=e.controls)==null?void 0:f.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",h=((i=e.controls)==null?void 0:i.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",b=document.createElement("div");b.className="es-quick-settings-card",b.id="quickSettingsCard",b.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${ie.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${s?ie.sun_mode:ie.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${p?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${d}">
              <span class="es-ctrl-icon es-ctrl-solar">${ie.sun_mode}</span>
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
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ie.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${p?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${h}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${ie.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(a=b.querySelector("#btnEditCardQs"))==null||a.addEventListener("click",n=>{n.stopPropagation(),this._openCardEditor()}),(o=b.querySelector("#btnThemeToggle"))==null||o.addEventListener("click",n=>{n.stopPropagation(),this._toggleTheme()}),(w=b.querySelector("#btnLangToggle"))==null||w.addEventListener("click",n=>{n.stopPropagation(),this._toggleLanguage()}),(l=b.querySelector("#ctrlLabelWrapSolar"))==null||l.addEventListener("click",()=>this._fireMoreInfo(d)),(y=b.querySelector("#ctrlLabelWrapSell"))==null||y.addEventListener("click",()=>this._fireMoreInfo(c)),(B=b.querySelector("#ctrlLabelWrapGrid"))==null||B.addEventListener("click",()=>this._fireMoreInfo(h));const S=b.querySelector("#ctrlSliderSolar"),$=b.querySelector("#ctrlValSolar");S&&(this._updateSliderGradient(S),S.addEventListener("input",n=>{$&&($.innerText=`${n.target.value} A`),this._updateSliderGradient(S)}),S.addEventListener("change",n=>{this._setNumberValue(d,n.target.value)}));const m=b.querySelector("#ctrlSliderSell"),u=b.querySelector("#ctrlValSell");m&&(this._updateSliderGradient(m),m.addEventListener("input",n=>{const I=Number(n.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");u&&(u.innerText=`${I} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(m)}),m.addEventListener("change",n=>{this._setNumberValue(c,n.target.value)}));const E=b.querySelector("#ctrlSliderGrid"),g=b.querySelector("#ctrlValGrid");E&&(this._updateSliderGradient(E),E.addEventListener("input",n=>{g&&(g.innerText=`${n.target.value} A`),this._updateSliderGradient(E)}),E.addEventListener("change",n=>{this._setNumberValue(h,n.target.value)})),t.appendChild(b),this._updateControlSliders()}_updateSliderGradient(e){if(!e)return;const t=parseFloat(e.min)||0,s=parseFloat(e.max)||100,p=parseFloat(e.value)||0,d=Math.max(0,Math.min(100,(p-t)/(s-t)*100));e.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${d}%, rgba(255, 255, 255, 0.12) ${d}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(e,t){if(!this._hass||!e)return;const p=e.split(".")[0]||"number",d=Number(t);this._hass.callService(p,"set_value",{entity_id:e,value:d})}_updateControlSliders(){var u,E,g,_,k,f,i,a,o;const e=this._config||U;if(e.show_quick_settings===!1)return;const t=this.shadowRoot;if(!t)return;const s=((u=e.controls)==null?void 0:u.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",p=((E=e.controls)==null?void 0:E.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",d=((g=e.controls)==null?void 0:g.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",c=t.getElementById("ctrlSliderSolar"),h=t.getElementById("ctrlValSolar"),b=t.getElementById("ctrlSliderSell"),S=t.getElementById("ctrlValSell"),$=t.getElementById("ctrlSliderGrid"),m=t.getElementById("ctrlValGrid");if(c&&(!c.matches||!c.matches(":active"))){const w=(k=(_=this._hass)==null?void 0:_.states)==null?void 0:k[s],l=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):c.value?parseFloat(c.value):80;c.value=l,h&&(h.innerText=`${Math.round(l)} A`),this._updateSliderGradient(c)}if(b&&(!b.matches||!b.matches(":active"))){const w=(i=(f=this._hass)==null?void 0:f.states)==null?void 0:i[p],l=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):b.value?parseFloat(b.value):5e3;b.value=l;const y=Math.round(l).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),B=this._language==="uk"?"Вт":"W";S&&(S.innerText=`${y} ${B}`),this._updateSliderGradient(b)}if($&&(!$.matches||!$.matches(":active"))){const w=(o=(a=this._hass)==null?void 0:a.states)==null?void 0:o[d],l=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):$.value?parseFloat($.value):70;$.value=l,m&&(m.innerText=`${Math.round(l)} A`),this._updateSliderGradient($)}}_bindInteractions(){var s,p,d,c,h,b,S,$,m,u,E,g,_,k,f,i,a,o,w,l,y,B;const e=this.shadowRoot,t=this._config||U;(s=e.getElementById("headerEditCard"))==null||s.addEventListener("click",n=>{n.stopPropagation(),this._openCardEditor()}),(p=e.getElementById("headerThemeToggle"))==null||p.addEventListener("click",n=>{n.stopPropagation(),this._toggleTheme()}),(d=e.getElementById("headerLangToggle"))==null||d.addEventListener("click",n=>{n.stopPropagation(),this._toggleLanguage()}),(c=e.getElementById("headerZoomIn"))==null||c.addEventListener("click",n=>{n.stopPropagation(),this._changeScale(this._scale+.1)}),(h=e.getElementById("headerZoomOut"))==null||h.addEventListener("click",n=>{n.stopPropagation(),this._changeScale(this._scale-.1)}),(b=e.getElementById("headerZoomVal"))==null||b.addEventListener("click",n=>{n.stopPropagation(),this._changeScale(1)}),(S=e.getElementById("solarHeaderNode"))==null||S.addEventListener("click",()=>{var n,I;this._fireMoreInfo(((n=t.solar)==null?void 0:n.daily_yield_entity)||((I=t.solar)==null?void 0:I.total_power_entity))}),($=e.getElementById("totalPvPowerBadge"))==null||$.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.solar)==null?void 0:n.total_power_entity)}),(m=e.getElementById("gridNode"))==null||m.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.grid)==null?void 0:n.power_entity)}),(u=e.getElementById("nonEssentialNode"))==null||u.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.grid)==null?void 0:n.non_essential_power_entity)}),(E=e.getElementById("carNode"))==null||E.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.grid)==null?void 0:n.car_power_entity)}),(g=e.getElementById("inverterNode"))==null||g.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.inverter)==null?void 0:n.power_entity)}),(_=e.getElementById("inverterSelfConsumptionBox"))==null||_.addEventListener("click",n=>{var I;n.stopPropagation(),(I=t.inverter)!=null&&I.self_consumption_entity&&this._fireMoreInfo(t.inverter.self_consumption_entity)}),(k=e.getElementById("auxNode"))==null||k.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.aux)==null?void 0:n.power_entity)}),(f=e.getElementById("essentialNode"))==null||f.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.load)==null?void 0:n.essential_power_entity)}),(i=e.getElementById("masterBatteryHub"))==null||i.addEventListener("click",()=>{var n;this._fireMoreInfo((n=t.battery)==null?void 0:n.soc_entity)}),(a=e.getElementById("batChargeDaily"))==null||a.addEventListener("click",n=>{var I;n.stopPropagation(),this._fireMoreInfo(((I=t.battery)==null?void 0:I.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(o=e.getElementById("batDischargeDaily"))==null||o.addEventListener("click",n=>{var I;n.stopPropagation(),this._fireMoreInfo(((I=t.battery)==null?void 0:I.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let n=1;n<=8;n++){const I=e.getElementById(`batBranchBadge_${n}`),V=((l=(w=t.battery)==null?void 0:w.modules)==null?void 0:l[n-1])||((B=(y=t.battery)==null?void 0:y.module_entities)==null?void 0:B[n-1])||{};I==null||I.addEventListener("click",()=>{var W;const H=V.power_entity||V.current_entity||V.soc_entity||((W=t.battery)==null?void 0:W.soc_entity);this._fireMoreInfo(H)})}}_fetchNightEndFromHa(e,t){var b,S;if(this._fetchingHistoryForDate===e)return;const p=(b=(this._config||U).grid)==null?void 0:b.import_daily_entity;if(!((S=this._hass)!=null&&S.callWS)||!p)return;this._fetchingHistoryForDate=e;const d=new Date,c=new Date(d.getFullYear(),d.getMonth(),d.getDate(),t,0,0),h=new Date(d.getFullYear(),d.getMonth(),d.getDate(),t,15,0);this._hass.callWS({type:"history/history_during_period",start_time:c.toISOString(),end_time:h.toISOString(),entity_ids:[p],no_attributes:!0}).then($=>{const m=$==null?void 0:$[p];if(m&&m.length>0){const u=parseFloat(m[0].state);if(!isNaN(u)&&u>=0){const E=`es_tariff_split_${e}`;let g={};if(typeof localStorage<"u")try{const _=localStorage.getItem(E);_&&(g=JSON.parse(_))}catch{}if(g.night_end=u,typeof localStorage<"u")try{localStorage.setItem(E,JSON.stringify(g))}catch{}this._hass&&this._updateValues()}}}).catch(()=>{})}_calculateTariffs(e,t,s){var w,l,y,B,n,I,V,H,W,Z,v,C,P;const d=(this._config||U).tariffs||{};if(d.enabled===!1){(w=this._nodes)!=null&&w.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(l=this._nodes)!=null&&l.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(y=this._nodes)!=null&&y.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),(B=this._nodes)!=null&&B.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");return}const c=d.currency||"грн",h=typeof d.day_rate=="number"?d.day_rate:4.32,b=typeof d.night_rate=="number"?d.night_rate:2.16,S=typeof d.export_rate=="number"?d.export_rate:5.3,$=typeof d.night_start_hour=="number"?d.night_start_hour:23,m=typeof d.night_end_hour=="number"?d.night_end_hour:7,u=new Date,E=u.getHours()+u.getMinutes()/60,g=$>m?E>=$||E<m:E>=$&&E<m;if((n=this._nodes)!=null&&n.gridTariffBadge&&d.show_active_badge!==!1){const x=g?b:h,L=g?this._t("tariff_night"):this._t("tariff_day"),j=g?"🌙":"☀️",J=g?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",le=g?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",de=g?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=J,this._nodes.gridTariffBadge.style.border=`1px solid ${le}`,this._nodes.gridTariffBadge.style.color=de,this._nodes.gridTariffBadge.innerText=`${j} ${L}: ${x.toFixed(2)} ${c}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(I=this._nodes)!=null&&I.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((V=this._nodes)!=null&&V.solarSavingsDaily&&d.show_solar_savings!==!1&&s>0){const x=s*h;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${x.toFixed(2)} ${c}`,this._nodes.solarSavingsDaily.style.display="block"}else(H=this._nodes)!=null&&H.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((W=this._nodes)!=null&&W.gridExportIncomeRow&&d.show_export_income!==!1&&typeof t=="number"&&t>0){const x=t*S;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${x.toFixed(2)} ${c}`),this._nodes.gridExportIncomeRow.style.display="block"}else(Z=this._nodes)!=null&&Z.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof e!="number"||isNaN(e)||e<0){(v=this._nodes)!=null&&v.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");return}const _=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`,k=`es_tariff_split_${_}`;let f={};if(typeof localStorage<"u")try{const x=localStorage.getItem(k);x&&(f=JSON.parse(x))}catch{}let i=0,a=0;if(E<m){if(i=e,a=0,f.night_end=e,typeof localStorage<"u")try{localStorage.setItem(k,JSON.stringify(f))}catch{}}else if(E>=m&&E<$){if(typeof f.night_end=="number"&&f.night_end<=e)i=f.night_end,a=Math.max(0,e-i);else{this._fetchNightEndFromHa(_,m);const x=Math.min(1,m/E);i=e*x,a=Math.max(0,e-i)}if(f.day_end=e,typeof localStorage<"u")try{localStorage.setItem(k,JSON.stringify(f))}catch{}}else{const x=typeof f.night_end=="number"?f.night_end:e*(m/E),L=typeof f.day_end=="number"?f.day_end:e;a=Math.max(0,L-x);const j=Math.max(0,e-L);i=x+j}const o=i*b+a*h;(C=this._nodes)!=null&&C.gridCostDailyRow&&d.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${o.toFixed(2)} ${c}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${i.toFixed(1)} + ☀️ ${a.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(P=this._nodes)!=null&&P.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none")}_updateValues(){var Mt,Lt,Nt,Rt,Ft,oe,R,F,D,Me,Ye,Je,Ue,Ke,At,Vt,Dt,zt,Ot,ii,ai,oi,si,ni,ri,li,di,ci,pi,gi,hi,fi,_i,bi,ui,yi,vi,mi,wi,xi,ki,Ei,Si,$i,Bi,Ci,Ii,Ti,Pi,Mi,Li,Ni,Ri,Fi,Ai,Vi,Di,zi,Oi,Wi,qi,Gi,Hi,ji,Yi,Ji,Ui,Ki,Zi,Xi,Qi,ea,ta,ia,aa,oa,sa,na,ra,la,da,ca,pa,ga,ha,fa,_a,ba,ua,ya,va,ma,wa,xa,ka,Ea,Sa,$a,Ba,Ca,Ia,Ta,Pa,Ma,La,Na,Ra;if(!this._nodes.dailySolarYield)return;const e=this._config||U,t=this._language==="en"?"kW":"кВт",s=((Mt=e.solar)==null?void 0:Mt.pv_count)||((Nt=(Lt=e.solar)==null?void 0:Lt.strings)==null?void 0:Nt.length)||3;let p=0,d=0,c=!1;for(let r=1;r<=s;r++){const A=(Ft=(Rt=e.solar)==null?void 0:Rt.strings)==null?void 0:Ft[r-1],G=(A==null?void 0:A.voltage_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_voltage`:""),K=(A==null?void 0:A.current_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_current`:""),T=(A==null?void 0:A.power_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_power`:"");if(this._getEntityState(T)||this._getEntityState(G)||this._getEntityState(K)){c=!0;break}}for(let r=1;r<=s;r++){const A=this.shadowRoot.getElementById(`pvVal_${r}`),G=this.shadowRoot.getElementById(`pvVolt_${r}`),K=this.shadowRoot.getElementById(`pvCurr_${r}`),T=(R=(oe=e.solar)==null?void 0:oe.strings)==null?void 0:R[r-1],X=(T==null?void 0:T.voltage_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_voltage`:""),z=(T==null?void 0:T.current_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_current`:""),Y=(T==null?void 0:T.power_entity)||(r<=3?`sensor.deye_12k_inverter_pv${r}_power`:""),O=this._getEntityState(X),Q=this._getEntityState(z),q=this._getEntityState(Y);let se=0,Te=0,ge=0;q?ge=this._formatPower(q).kw:O&&Q?ge=O.val*Q.val/1e3:O?ge=0:ge=c?0:4,O?se=O.val:se=c?0:380+r*4.5,Q?Te=Q.val:q&&se>0?Te=ge*1e3/se:Te=c?0:3.12+r*.28,p+=ge,d+=Te,A&&(A.innerText=`${ge.toFixed(3)} ${t}`),G&&(G.innerText=`${se.toFixed(1)} V`),K&&(K.innerText=`${Te.toFixed(2)} A`);const ne=this.shadowRoot.getElementById(`pvMetrics_${r}`);if(ne){const et=((F=e.solar)==null?void 0:F.show_metrics)!==!1,tt=!!(O||Q||!c||T!=null&&T.voltage_entity||T!=null&&T.current_entity||se>0||Te>0);ne.style.display=et&&tt?"flex":"none"}const $e=(T==null?void 0:T.capacity_kw)!==void 0?parseFloat(T.capacity_kw):(T==null?void 0:T.installed_power)!==void 0?parseFloat(T.installed_power):c?0:4,Ze=$e>0&&ge>0?Math.min(100,Math.round(ge/$e*100)):0,ht=this.shadowRoot.getElementById(`pvCapVal_${r}`),Xe=this.shadowRoot.getElementById(`pvPercent_${r}`),Qe=this.shadowRoot.getElementById(`pvCap_${r}`);ht&&($e>0?(ht.innerText=$e.toFixed(1).replace(".",","),Xe&&(Xe.innerText=`(${Ze}%)`,Xe.style.color=Ze>=70?"#34d399":Ze>=30?"#fbbf24":"#94a3b8"),Qe&&(Qe.style.display="flex")):Qe&&(Qe.style.display="none"))}const h=this._getEntityState((D=e.solar)==null?void 0:D.total_power_entity);let b=0;h?b=this._formatPower(h).kw:b=p;let S=((Me=e.solar)==null?void 0:Me.installed_power)!==void 0?parseFloat(e.solar.installed_power):0;if(isNaN(S)||S<=0){let r=0;for(let A=0;A<s;A++){const G=(Je=(Ye=e.solar)==null?void 0:Ye.strings)==null?void 0:Je[A],K=(G==null?void 0:G.capacity_kw)!==void 0?parseFloat(G.capacity_kw):(G==null?void 0:G.installed_power)!==void 0?parseFloat(G.installed_power):0;!isNaN(K)&&K>0&&(r+=K)}S=r>0?r:c?0:12}const $=S>0?b/S*100:0,m=Math.min(100,Math.max(0,$)),u=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${b.toFixed(3)} ${t}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${b.toFixed(3)} ${t}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${d.toFixed(2)} A`:`Сумарний струм СЕС: ${d.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(S>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(m)}%`,this._nodes.totalPvPercentBadge.style.color=m>=70?"#34d399":m>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=m>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(S>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${m.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=m>=70?"#34d399":m>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${S.toFixed(1).replace(".",",")} ${u})`)):d>0&&((Ue=e.solar)==null?void 0:Ue.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${d.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const E=this._getEntityState((Ke=e.solar)==null?void 0:Ke.daily_yield_entity),g=E?E.val:c?0:48.6;this._nodes.dailySolarYield.innerText=g.toFixed(1);const _=((At=e.solar)==null?void 0:At.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=_.toFixed(1);const k=Math.min(100,Math.round(g/_*100));this._nodes.solarProgressBar.style.width=`${k}%`;const f=this._getEntityState((Vt=e.inverter)==null?void 0:Vt.power_entity);this._nodes.inverterPowerVal&&((Dt=e.inverter)!=null&&Dt.power_entity&&f?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(f,0).str):this._nodes.inverterPowerVal.style.display="none");const i=this._getEntityState((zt=e.inverter)==null?void 0:zt.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=i?i.val.toFixed(2):"41,20";const a=this._getEntityState((Ot=e.inverter)==null?void 0:Ot.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=a?a.val.toFixed(2):"38,40";const o=this._getEntityState((ii=e.inverter)==null?void 0:ii.voltage_entity);this._nodes.inverterVolt.innerText=o?o.val.toFixed(2):"231,45";const w=this._getEntityState((ai=e.inverter)==null?void 0:ai.current_entity);this._nodes.inverterCurrent.innerText=w?w.val.toFixed(2):"8,60";const l=this._getEntityState((oi=e.inverter)==null?void 0:oi.frequency_entity);this._nodes.inverterFreq.innerText=l?l.val.toFixed(2):"50,01";const y=((si=e.wind)==null?void 0:si.show)!==!1||((ni=e.aux)==null?void 0:ni.type)==="wind",B=this.shadowRoot.getElementById("windStationContainer"),n=this._nodes.auxNode;let I=0;if(B)if(!y)B.classList.add("hidden");else{B.classList.remove("hidden");const r=((ri=e.wind)==null?void 0:ri.turbine_count)||((di=(li=e.wind)==null?void 0:li.turbines)==null?void 0:di.length)||2,A=((ci=e.wind)==null?void 0:ci.turbines)||[];let G=0,K=0,T=!1,X=!1;for(let q=0;q<r;q++){const se=A[q]||{power_entity:`sensor.wind_turbine_${q+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((pi=e.wind)==null?void 0:pi.animation_threshold)||50},Te=this.shadowRoot.getElementById(`turbinePower_${q+1}`),ge=this.shadowRoot.getElementById(`turbineStatus_${q+1}`),ne=this.shadowRoot.getElementById(`turbineIcon_${q+1}`),$e=this.shadowRoot.getElementById(`turbineCard_${q+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${q+1}`);const Ze=this.shadowRoot.getElementById(`turbineDailyVal_${q+1}`),ht=this.shadowRoot.getElementById(`turbineMonthlyVal_${q+1}`),Xe=this.shadowRoot.getElementById(`turbineEnergyFooter_${q+1}`),Qe=this._hass?0:q===0?1.56:.22,et=this._getEntityState(se.power_entity),tt=this._formatPower(et,Qe);Te&&(Te.innerText=tt.str),I+=tt.kw;let ft=tt.kw*1e3;et&&et.unit==="W"&&(ft=et.val);const kt=se.animation_threshold??((gi=e.wind)==null?void 0:gi.animation_threshold)??50,Oe=ne==null?void 0:ne.querySelector(".turbine-rotor"),Et=se.rpm_entity||se.speed_entity||((hi=e.wind)==null?void 0:hi.rpm_entity)||((fi=e.wind)==null?void 0:fi.speed_entity)||(q===0?"sensor.wind_rpm":"");let ee=Et&&((_i=this._hass)!=null&&_i.states[Et])?this._getEntityState(Et):null;if(!ee&&q===0&&((bi=this._hass)!=null&&bi.states["sensor.wind_rpm"])&&(ee=this._getEntityState("sensor.wind_rpm")),ft>=kt||ee&&typeof ee.val=="number"&&ee.val>0){Oe&&Oe.classList.add("spinning"),$e&&($e.classList.add("glow-wind"),$e.style.borderColor="rgba(6, 182, 212, 0.55)");const Fe=((ui=e.wind)==null?void 0:ui.max_power)||3e3,Ut=((yi=e.wind)==null?void 0:yi.max_rpm)||600;let Wt=0;ee&&typeof ee.val=="number"&&ee.val>0?Wt=Math.min(1,Math.max(0,ee.val/Ut)):Wt=Math.min(1,Math.max(0,(ft-kt)/(Fe-kt)));const ve=(3.2-Wt*2.75).toFixed(2);Oe&&Oe.style.setProperty("--turbine-speed",`${ve}s`),ge&&(ge.innerText=this._t("wind_gen"),ge.style.color="#67e8f9")}else Oe&&Oe.classList.remove("spinning"),$e&&($e.classList.remove("glow-wind"),$e.style.borderColor="rgba(255, 255, 255, 0.08)"),ge&&(ge.innerText=this._t("wind_calm"),ge.style.color="#94a3b8");const bt=this.shadowRoot.getElementById(`turbineRpmBox_${q+1}`);if(bt)if(ee&&ee.raw!=="unavailable"&&ee.raw!=="unknown"&&typeof ee.val=="number"&&!isNaN(ee.val)){bt.style.display="inline";const Ut=ee.unit?ee.unit:"RPM";bt.innerHTML=`<span id="turbineRpmVal_${q+1}">${Math.round(ee.val)}</span> ${Ut}`}else bt.style.display="none";const xe=this._getEntityState(se.daily_energy_entity),Ne=this._getEntityState(se.monthly_energy_entity);Ze&&(Ze.innerText=xe&&typeof xe.val=="number"&&!isNaN(xe.val)?xe.val.toFixed(2):"0.00"),ht&&(ht.innerText=Ne&&typeof Ne.val=="number"&&!isNaN(Ne.val)?Ne.val.toFixed(1):"0.0");const Re=!!(se.daily_energy_entity||se.monthly_energy_entity);Xe&&(Xe.style.display=Re?"flex":"none"),xe&&typeof xe.val=="number"&&!isNaN(xe.val)&&(G+=xe.val,T=!0),Ne&&typeof Ne.val=="number"&&!isNaN(Ne.val)&&(K+=Ne.val,X=!0)}const z=this.shadowRoot.getElementById("windTotalDailyVal"),Y=this.shadowRoot.getElementById("windTotalMonthlyVal"),O=this._getEntityState((vi=e.wind)==null?void 0:vi.daily_energy_entity),Q=this._getEntityState((mi=e.wind)==null?void 0:mi.monthly_energy_entity);z&&(O&&typeof O.val=="number"&&!isNaN(O.val)?z.innerText=O.val.toFixed(2):T?z.innerText=G.toFixed(2):z.innerText="0.00"),Y&&(Q&&typeof Q.val=="number"&&!isNaN(Q.val)?Y.innerText=Q.val.toFixed(1):X?Y.innerText=K.toFixed(1):Y.innerText="0.0")}let V=0;if(n)if(((wi=e.aux)==null?void 0:wi.type)==="none"||((xi=e.aux)==null?void 0:xi.type)==="wind")n.classList.add("hidden");else{n.classList.remove("hidden");const r=this._getEntityState((ki=e.aux)==null?void 0:ki.power_entity),A=this._hass?0:2,G=this._formatPower(r,A);V=G.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=G.str);const K={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let T=(Ei=e.aux)==null?void 0:Ei.title;((Si=e.aux)==null?void 0:Si.type)==="microinverter"&&(!T||T==="Вітрогенератор")?T="Мікроінвертор":($i=e.aux)!=null&&$i.type&&K[e.aux.type]&&(!T||T==="Вітрогенератор")?T=K[e.aux.type]:T||(T="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=T),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=ie[(Bi=e.aux)==null?void 0:Bi.type]||ie.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Ci=e.aux)==null?void 0:Ci.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),n.style.borderColor="rgba(192, 132, 252, 0.45)",n.style.background="rgba(88, 28, 135, 0.35)",n.classList.remove("glow-wind"),n.classList.add("glow-aux")}const H=this.shadowRoot.getElementById("nonEssentialNode"),W=!!((Ii=e.grid)!=null&&Ii.show_non_essential&&((Ti=e.grid)!=null&&Ti.non_essential_power_entity))||((Pi=e.grid)==null?void 0:Pi.show_non_essential)!==!1&&!!((Mi=e.grid)!=null&&Mi.non_essential_power_entity);let Z=0;if(H)if(W){H.classList.remove("hidden");const r=this._getEntityState(e.grid.non_essential_power_entity),A=this._formatPower(r,0);Z=A.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=A.str)}else H.classList.add("hidden");const v=this.shadowRoot.getElementById("carNode"),C=!!((Li=e.grid)!=null&&Li.show_car&&((Ni=e.grid)!=null&&Ni.car_power_entity))||((Ri=e.grid)==null?void 0:Ri.show_car)!==!1&&!!((Fi=e.grid)!=null&&Fi.car_power_entity);let P=0;if(v)if(C){v.classList.remove("hidden");const r=this._getEntityState(e.grid.car_power_entity),A=this._formatPower(r,0);P=A.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=A.str)}else v.classList.add("hidden");let x=0;(((Ai=e.load)==null?void 0:Ai.subloads)||[]).forEach((r,A)=>{const G=this.shadowRoot.getElementById(`subloadVal_${A}`),K=this._getEntityState(r.entity),T=this._formatPower(K,0);x+=T.kw,G&&(G.innerText=T.str)});const L=this._getEntityState((Vi=e.battery)==null?void 0:Vi.soc_entity),j=L?L.val:80;this._nodes.masterBatterySoc.innerText=`${j.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const J=this._getEntityState((Di=e.battery)==null?void 0:Di.power_entity),le=this._getEntityState((zi=e.battery)==null?void 0:zi.current_entity),de=J?J.unit==="W"?J.val/1e3:J.val:0,ke=((Oi=e.battery)==null?void 0:Oi.power_sign)||((Wi=e.battery)!=null&&Wi.invert_power?"standard":"deye");let pe=!1,ce=!1;const _e=Math.abs(de);_e>=.02?ke==="deye"?de<0?pe=!0:ce=!0:de>0?pe=!0:ce=!0:le&&Math.abs(le.val)>=.3&&(ke==="deye"?le.val<0?pe=!0:ce=!0:le.val>0?pe=!0:ce=!0),this._isCharging=pe,this._isDischarging=ce;const ye=pe?_e:0,Be=ce?_e:0;if(this._nodes.masterBatteryFlowHint){let r=this._t("bat_idle"),A="#94a3b8";pe?(r=this._t("bat_dir_charge"),A="#34d399"):ce&&(r=this._t("bat_dir_discharge"),A="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${_e.toFixed(3)} ${t}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${A}; font-weight: 700; font-size: 14px;">${r}</span>`}const Ae=this._getEntityState((qi=e.battery)==null?void 0:qi.voltage_entity),at=Ae?Ae.val.toFixed(2):"53.24",yt=le?le.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${at.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${yt.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((Gi=e.battery)==null?void 0:Gi.reserve_soc)!==void 0?e.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const r=((Hi=e.battery)==null?void 0:Hi.reserve_soc)!==void 0?e.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${r}%`}let we=this._getEntityState((ji=e.load)==null?void 0:ji.essential_power_entity);!we&&(!((Yi=e.load)!=null&&Yi.essential_power_entity)||((Ji=e.load)==null?void 0:Ji.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((Ui=e.load)==null?void 0:Ui.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(we=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const Ee=we&&typeof we.val=="number"&&!isNaN(we.val)?Math.max(0,we.unit==="W"?we.val/1e3:we.val):0,ot=!!(we&&Ee>0);let ue=null,Ce=!1;if((Ki=e.grid)!=null&&Ki.external_power_entity){const r=this._getEntityState(e.grid.external_power_entity);r&&typeof r.val=="number"&&!isNaN(r.val)&&(ue=r,Ce=!0)}if(!ue){let r=this._getEntityState((Zi=e.grid)==null?void 0:Zi.power_entity);if(!r){const K=["sensor.deye_12k_inverter_total_grid_power","sensor.deye_12k_inverter_grid_power","sensor.esp32_deye_inverter_grid_power","sensor.deye_grid_power","sensor.grid_power","sensor.inverter_12_kvt_grid_power","sensor.solarman_total_grid_power","sensor.solarman_grid_power","sensor.sunsynk_grid_power","sensor.sunsynk_total_grid_power"];for(const T of K){const X=this._getEntityState(T);if(X&&typeof X.val=="number"&&!isNaN(X.val)){r=X;break}}}const A=r?r.unit==="W"?r.val/1e3:r.val:0,G=b+I+(V>0?V:0)+Be;if(r&&A>.05)ue=r,Ce=!1;else{const K=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"],T=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),X=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),z=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");let Y=null;if(T&&X&&z&&!isNaN(T.val)&&!isNaN(X.val)&&!isNaN(z.val)){const O=(T.unit==="kW"?T.val*1e3:T.val)+(X.unit==="kW"?X.val*1e3:X.val)+(z.unit==="kW"?z.val*1e3:z.val);Y={val:O,unit:"W",raw:String(O)}}if(!Y)for(const O of K){const Q=this._getEntityState(O);if(Q&&typeof Q.val=="number"&&!isNaN(Q.val)){Y=Q;break}}if(!Y&&((Xi=this._hass)!=null&&Xi.states)){const Q=Object.keys(this._hass.states).find(q=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(q)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(q));if(Q){const q=this._getEntityState(Q);q&&typeof q.val=="number"&&!isNaN(q.val)&&(Y=q)}}if(Y){const O=Math.abs(Y.unit==="kW"?Y.val:Y.val/1e3);!(O<.03&&(ye>.2&&G<.1||A>.1&&G<.1))&&O>0&&(ue=Y,Ce=!0)}ue||(ue=r,Ce=!1)}}const he=ue?ue.unit==="W"?ue.val/1e3:ue.val:0,Ge=((Qi=e.grid)==null?void 0:Qi.power_sign)||((ea=e.grid)!=null&&ea.invert_power?"inverted":"deye"),st=((ta=e.grid)==null?void 0:ta.selling_enabled)===!0,Ie=(((ia=e.grid)==null?void 0:ia.min_power_threshold)!==void 0?e.grid.min_power_threshold:50)/1e3,Ve=this._getEntityState((aa=e.grid)==null?void 0:aa.status_entity),Le=this._getEntityState(((oa=e.grid)==null?void 0:oa.voltage_entity)||((sa=e.inverter)==null?void 0:sa.voltage_entity)),He=((na=e.grid)==null?void 0:na.voltage_threshold)!==void 0?e.grid.voltage_threshold:90;let Se=!0;if(Ve){const r=String(Ve.raw||Ve.val).toLowerCase();(r==="off"||r==="false"||r==="0"||r==="disconnected"||r==="offline"||r==="unavailable"||r==="unknown")&&(Se=!1)}else Le&&typeof Le.val=="number"&&!isNaN(Le.val)&&Le.val<He&&(Se=!1);let ae=!1,M=!1,N=0;if(!Se)N=0,ae=!1,M=!1;else{if(Ce)N=Math.abs(he),N>=Ie&&(Ge==="deye"?he<0?ae=!0:M=!0:he>0?ae=!0:M=!0);else{if(Ge==="deye"){if(he>0)N=he,N>=Ie&&(M=!0);else if(he<0){const z=Math.abs(he),Y=Math.max(0,z-Ee);Y>=Ie?(N=Y,ae=!0):(N=0,ae=!1)}}else if(he<0)N=Math.abs(he),N>=Ie&&(M=!0);else if(he>0){const z=Math.max(0,he-Ee);z>=Ie?(N=z,ae=!0):(N=0,ae=!1)}if(((ra=e.grid)==null?void 0:ra.auto_calculate)!==!1&&M){const z=Math.max(Ee,x),Y=b+I+(V>0?V:0)+Be;ye+z+Z+P>Y+N+.1&&(N=N+z)}}const r=b+I+(V>0?V:0)+Be,A=r<.15,G=r<ye+.05;if(!Ce&&(A||G)){const X=this._getEntityState(((la=e.grid)==null?void 0:la.voltage_entity)||((da=e.inverter)==null?void 0:da.voltage_entity)),z=this._getEntityState(((ca=e.inverter)==null?void 0:ca.current_entity)||"sensor.deye_12k_inverter_grid_current"),Y=X&&typeof X.val=="number"&&!isNaN(X.val)?X.val:0,O=z&&typeof z.val=="number"&&!isNaN(z.val)?z.val:0,Q=Y>=He&&O>=1,q=ye>.2&&r<.1;if(Q){const se=Y*O*.9/1e3;(N<.05||se>N+.2)&&(N=se,M=!0,ae=!1)}else if(q&&(N<.05||N<ye-.05)){const se=Math.max(Ee,x);N=Math.max(N,ye+.25+se),M=!0,ae=!1}}const T=Math.max(0,b+I+(V>0?V:0)+Be-ye-Ee-Z-P);ae&&N>T+.1&&(N=T,N<Ie&&(ae=!1,N=0)),ae&&!st&&(ae=!1,N=0)}const re=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(Se?(this._nodes.gridPowerVal.innerText=`${N.toFixed(3)} ${t}`,ae?this._nodes.gridPowerVal.style.color="#34d399":M?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${t}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(Se?ae?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):M?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),re&&(Se?(re.classList.add("glow-grid"),re.style.borderColor="rgba(56, 189, 248, 0.4)"):(re.classList.remove("glow-grid"),re.style.borderColor="rgba(239, 68, 68, 0.45)"));const be=this._getEntityState((pa=e.grid)==null?void 0:pa.import_daily_entity);this._nodes.gridImportDaily.innerText=be?`${be.val.toFixed(2)} kWh`:"0.00 kWh";const fe=this._getEntityState((ga=e.grid)==null?void 0:ga.export_daily_entity);this._nodes.gridExportDaily.innerText=fe?`${fe.val.toFixed(2)} kWh`:"0.00 kWh",this._calculateTariffs(be?be.val:0,fe?fe.val:0,g);const nt=M?N:0,De=ae?N:0,rt=b+I+(V>0?V:0)+nt+Be,vt=ye+De+Z+P,St=Math.max(0,rt-vt),ze=this._getEntityState((ha=e.inverter)==null?void 0:ha.self_consumption_entity),lt=ze&&typeof ze.val=="number"&&!isNaN(ze.val)?Math.max(0,ze.unit==="W"?ze.val/1e3:ze.val):null,$t=(((fa=e.inverter)==null?void 0:fa.standby_power)!==void 0?e.inverter.standby_power:100)/1e3;let je=0,Pe=0;if(ot)if(je=Math.max(x,Ee),lt!==null)Pe=lt;else{const r=Math.max(0,rt-(ye+De+je+Z+P));Pe=r>0?r:$t}else lt!==null?Pe=lt:Pe=Math.min(St,$t),je=Math.max(x,Math.max(0,St-Pe));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((_a=e.inverter)==null?void 0:_a.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Pe<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Pe*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Pe.toFixed(3)} ${t}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${je.toFixed(3)} ${t}`;const Bt=this._getEntityState((ba=e.load)==null?void 0:ba.daily_house_entity);this._nodes.dailyHouseKwh.innerText=Bt?`${Bt.val.toFixed(2)} kWh`:"12,40 kWh";const dt=((ua=e.battery)==null?void 0:ua.parallel_batteries)||((va=(ya=e.battery)==null?void 0:ya.modules)==null?void 0:va.length)||2;let ct=0;for(let r=0;r<dt;r++){const A=((wa=(ma=e.battery)==null?void 0:ma.modules)==null?void 0:wa[r])||((ka=(xa=e.battery)==null?void 0:xa.module_entities)==null?void 0:ka[r])||{},G=A.capacity_kwh!==void 0?parseFloat(A.capacity_kwh):r===0?7.88:r===1?5.12:(((Ea=e.battery)==null?void 0:Ea.capacity_kwh)||13)/dt;ct+=isNaN(G)?0:G}ct<=0&&(ct=parseFloat((Sa=e.battery)==null?void 0:Sa.capacity_kwh)||13);const mt=this._getEntityState((($a=e.battery)==null?void 0:$a.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),wt=mt&&!isNaN(mt.val)?mt.val:null,xt=wt!==null&&wt<=40?wt:ct,Ct=this._getEntityState(((Ba=e.battery)==null?void 0:Ba.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),Gt=Ct?Ct.val:80,Ht=xt*(Gt/100),It=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${Ht.toFixed(2).replace(".",",")} ${It} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${xt.toFixed(1).replace(".",",")})</span></span>`);const Tt=this._getEntityState(((Ca=e.battery)==null?void 0:Ca.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),jt=Tt?Tt.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${jt.toFixed(1).replace(".",",")}`);const Yt=(Ia=e.battery)==null?void 0:Ia.charge_daily_entity;let pt=this._getEntityState(Yt);pt||(pt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge")||this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const Jt=(Ta=e.battery)==null?void 0:Ta.discharge_daily_entity;let gt=this._getEntityState(Jt);gt||(gt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=pt?`${pt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=gt?`${gt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const Pt=[];for(let r=1;r<=dt;r++){const A=this.shadowRoot.getElementById(`batPackSoc_${r}`),G=this.shadowRoot.getElementById(`batPackVolt_${r}`),K=this.shadowRoot.getElementById(`batPackCurr_${r}`),T=this.shadowRoot.getElementById(`batPackPower_${r}`),X=this.shadowRoot.getElementById(`batPackTempVal_${r}`),z=this.shadowRoot.getElementById(`batPackDelta_${r}`),Y=this.shadowRoot.getElementById(`batPackDeltaVal_${r}`),O=this.shadowRoot.getElementById(`batPackStateTag_${r}`),Q=this.shadowRoot.getElementById(`batPackKwh_${r}`),q=this.shadowRoot.getElementById(`batPackBar1_${r}`),se=this.shadowRoot.getElementById(`batPackBar2_${r}`),Te=this.shadowRoot.getElementById(`batPackBar3_${r}`),ge=this.shadowRoot.getElementById(`batPackBar4_${r}`),ne=((Ma=(Pa=e.battery)==null?void 0:Pa.modules)==null?void 0:Ma[r-1])||((Na=(La=e.battery)==null?void 0:La.module_entities)==null?void 0:Na[r-1])||{},$e=ne.soc_entity||ne.soc||`sensor.bms_rack${r}_soc`,Ze=ne.current_entity||`sensor.bms_rack${r}_current`,ht=ne.voltage_entity||ne.volt||`sensor.bms_rack${r}_voltage`,Xe=ne.power_entity||`sensor.bms_rack${r}_power`,Qe=ne.temperature_entity||ne.temp||`sensor.bms_rack${r}_temperature`,et=ne.cell_delta_entity||ne.delta_entity||`sensor.bms_rack${r}_cell_delta`,tt=this._getEntityState($e),ft=this._getEntityState(Ze),kt=this._getEntityState(ht),Oe=this._getEntityState(Xe),Et=this._getEntityState(Qe);let ee=this._getEntityState(et);if(ee||(ee=this._getEntityState(`sensor.bms_rack${r}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${r}_cell_difference`)),!ee&&(ne.max_cell_voltage_entity||ne.min_cell_voltage_entity)){const We=this._getEntityState(ne.max_cell_voltage_entity),Va=this._getEntityState(ne.min_cell_voltage_entity);if(We&&Va){const Qt=Math.abs(We.val-Va.val);ee={val:Qt<1?Math.round(Qt*1e3):Qt,unit:"mV"}}}const _t=tt?tt.val:r===1?82:r===2?85:75,bt=kt?kt.val:r===1?54.1:r===2?54:52.4,xe=ft?ft.val:r===1?18.4:r===2?25.2:8.2,Ne=Et?Et.val:r===1?36.5:r===2?21:22.5;let Re=null;if(ee){let We=ee.val;We<1&&We>0?Re=Math.round(We*1e3):Re=Math.round(We)}else this._hass||(Re=r===1?12:r===2?8:15);let Fe=0;Oe?Fe=Math.abs(this._formatPower(Oe).kw):Fe=bt*Math.abs(xe)/1e3;const Wt=(ne.capacity_kwh!==void 0?parseFloat(ne.capacity_kwh):r===1?7.88:r===2?5.12:xt/dt)*(_t/100);A&&(A.innerText=`${_t.toFixed(0)}%`),G&&(G.innerText=`${bt.toFixed(1).replace(".",",")} V`),K&&(K.innerText=`${Math.abs(xe).toFixed(1).replace(".",",")} A`),T&&(T.innerText=`${Fe.toFixed(2).replace(".",",")} ${t}`),X&&(X.innerText=`${Ne.toFixed(1).replace(".",",")}`),Y&&(Re!==null&&!isNaN(Re)?(Y.innerText=`${Re} mV`,z&&(z.style.display="inline-flex",Re<=25?(z.style.color="#34d399",z.style.background="rgba(52, 211, 153, 0.12)",z.style.borderColor="rgba(52, 211, 153, 0.3)"):Re<=50?(z.style.color="#fbbf24",z.style.background="rgba(251, 191, 36, 0.12)",z.style.borderColor="rgba(251, 191, 36, 0.3)"):(z.style.color="#f87171",z.style.background="rgba(248, 113, 113, 0.16)",z.style.borderColor="rgba(248, 113, 113, 0.4)"))):z&&(z.style.display="none")),Q&&(Q.innerText=`~${Wt.toFixed(2).replace(".",",")} ${It}`);let ve=!1;ce?ve=!1:pe?ve=!0:ft?ve=(((Ra=e.battery)==null?void 0:Ra.power_sign)||"deye")==="deye"?xe<0:xe>0:ve=xe<0;const ut=this.shadowRoot.getElementById(`batBranchBadge_${r}`);ut&&(Fe<.02?(ut.className="es-bat-branch-badge es-mono idle",ut.innerHTML=`<span>0.00 ${t}</span>`):ve?(ut.className="es-bat-branch-badge es-mono charge",ut.innerHTML=`<span>${Fe.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↓</span>`):(ut.className="es-bat-branch-badge es-mono discharge",ut.innerHTML=`<span>${Fe.toFixed(2)} ${t}</span> <span style="font-weight: 800;">↑</span>`));const it=this.shadowRoot.getElementById(`batPackCard_${r}`),Fa=it==null?void 0:it.querySelector(".es-battery-gauge"),Aa=it==null?void 0:it.querySelector(".es-battery-gauge-nipple");it&&(it.style.borderColor=ve?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),Fa&&(Fa.style.borderColor=ve?"#10b981":"#ef4444"),Aa&&(Aa.style.background=ve?"#10b981":"#ef4444"),O&&(ve?(O.className="es-bat-state-tag charge",O.innerText=this._t("bat_charge"),O.style.color="#34d399",O.style.background="rgba(16, 185, 129, 0.18)",O.style.borderColor="rgba(16, 185, 129, 0.4)"):(O.className="es-bat-state-tag discharge",O.innerText=this._t("bat_discharge"),O.style.color="#f87171",O.style.background="rgba(239, 68, 68, 0.18)",O.style.borderColor="rgba(239, 68, 68, 0.4)")),T&&(T.style.color=ve?"#34d399":"#f87171"),K&&(K.style.color=ve?"#38bdf8":"#f87171");const Kt=ve?"active-green":"active-red";q&&se&&Te&&ge&&(q.className=`es-bat-bar ${_t>=10?Kt:""}`,se.className=`es-bat-bar ${_t>=35?Kt:""}`,Te.className=`es-bat-bar ${_t>=65?Kt:""}`,ge.className=`es-bat-bar ${_t>=85?Kt:""}`),Pt.push({kwNum:Fe,isChg:ve})}this._updateFlowPaths(),this._updateFlowAnimations(Se?he:0,ae,M,b,je,_e,pe,ce,P,Pt,Z,x,V),this._updateControlSliders()}_setupResizeObserver(){var t;if(this._resizeObserver)return;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".energy-station-container");e&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(e)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var e,t,s,p,d,c,h,b,S;try{const $=(e=this.shadowRoot)==null?void 0:e.querySelector(".energy-station-container");if(!$)return;const m=$.getBoundingClientRect();if(m.width===0||m.height===0)return;const u=this._config||U,E=this._scale||1,g=(v,C=.5,P=.5)=>{if(!v)return null;const x=v.getBoundingClientRect();return{x:Math.round((x.left-m.left+x.width*C)/E),y:Math.round((x.top-m.top+x.height*P)/E)}},_=(v,C,P)=>{const x=this.shadowRoot.getElementById(v),L=this.shadowRoot.getElementById(C);x&&x.setAttribute("d",P||""),L&&L.setAttribute("d",P||"")},k=this.shadowRoot.getElementById("gridNode"),f=this.shadowRoot.getElementById("inverterNode"),i=this.shadowRoot.getElementById("essentialNode"),a=this.shadowRoot.getElementById("totalPvPowerBadge"),o=this.shadowRoot.getElementById("masterBatteryHub"),w=this.shadowRoot.getElementById("carNode");if(k&&f){const v=k.getBoundingClientRect(),C=f.getBoundingClientRect();if(v.bottom<C.top+30){const x=g(k,.7,1),L=g(f,.2,0);if(x&&L){const j=Math.round((x.y+L.y)/2),J=`M ${x.x} ${x.y} C ${x.x} ${j}, ${L.x} ${j}, ${L.x} ${L.y}`;_("pathGridInvBase","pathGridInvFlow",J)}}else{const x=Math.round((C.top-m.top+C.height*.55)/E),L=Math.round((v.right-m.left)/E),j=Math.round((C.left-m.left)/E),J=Math.round((v.top-m.top+v.height*.5)/E);let le="";if(Math.abs(J-x)<=8)le=`M ${L} ${x} L ${j} ${x}`;else{const de=Math.round(L+24);le=`M ${L} ${J} C ${de} ${J}, ${de} ${x}, ${j} ${x}`}_("pathGridInvBase","pathGridInvFlow",le)}}if(f&&i){const v=i.getBoundingClientRect(),C=f.getBoundingClientRect();if(v.bottom<C.top+30){const x=g(f,.8,0),L=g(i,.3,1);if(x&&L){const j=Math.round((x.y+L.y)/2),J=`M ${x.x} ${x.y} C ${x.x} ${j}, ${L.x} ${j}, ${L.x} ${L.y}`;_("pathInvLoadBase","pathInvLoadFlow",J)}}else{const x=Math.round((C.top-m.top+C.height*.55)/E),L=Math.round((C.right-m.left)/E),j=Math.round((v.left-m.left)/E),J=Math.round((v.top-m.top+v.height*.5)/E);let le="";if(Math.abs(J-x)<=8)le=`M ${L} ${x} L ${j} ${x}`;else{const de=Math.round(j-24);le=`M ${L} ${x} C ${de} ${x}, ${de} ${J}, ${j} ${J}`}_("pathInvLoadBase","pathInvLoadFlow",le)}}if(a&&f){const v=g(a,.5,1),C=g(f,.5,0);if(v&&C){const P=`M ${v.x} ${v.y} L ${C.x} ${C.y}`;_("pathSolarInvBase","pathSolarInvFlow",P)}}if(f&&o){const v=g(f,.5,1),C=g(o,.5,0);if(v&&C){const P=`M ${v.x} ${v.y} L ${C.x} ${C.y}`;_("pathInvBatBase","pathInvBatFlow",P)}}const l=this.shadowRoot.getElementById("nonEssentialNode"),y=l&&!l.classList.contains("hidden")&&l.offsetHeight>0,B=w&&!w.classList.contains("hidden")&&w.offsetHeight>0;if(k&&y){const v=g(k,.5,1),C=g(l,.5,0);if(v&&C){const P=`M ${v.x} ${v.y} L ${C.x} ${C.y}`;_("pathGridNonEssBase","pathGridNonEssFlow",P)}}else _("pathGridNonEssBase","pathGridNonEssFlow","");if(B){const v=y?l:k;if(v){const C=g(v,.5,1),P=g(w,.5,0);if(C&&P){const x=`M ${C.x} ${C.y} L ${P.x} ${P.y}`;_("pathNonEssCarBase","pathNonEssCarFlow",x)}}else _("pathNonEssCarBase","pathNonEssCarFlow","")}else _("pathNonEssCarBase","pathNonEssCarFlow","");const n=this.shadowRoot.getElementById("subloadsBusContainer");if(i&&n){const v=g(i,.5,1),C=g(n,.5,0);if(v&&C){const P=`M ${v.x} ${v.y} L ${C.x} ${C.y}`;_("pathLoadSubloadsBase","pathLoadSubloadsFlow",P)}}else _("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const I=this.shadowRoot.getElementById("auxNode");if(f&&I&&!I.classList.contains("hidden")&&I.offsetHeight>0){const v=g(I,.35,1),C=g(f,.9,0);if(v&&C){const P=Math.round((v.y+C.y)/2),x=`M ${v.x} ${v.y} C ${v.x} ${P}, ${C.x} ${P}, ${C.x} ${C.y}`;_("pathInvAuxBase","pathInvAuxFlow",x)}}else _("pathInvAuxBase","pathInvAuxFlow","");_("pathBatStemBase","pathBatStemFlow","");const V=this.shadowRoot.getElementById("windStationContainer"),W=((t=u.wind)==null?void 0:t.show)!==!1||((s=u.aux)==null?void 0:s.type)==="wind"?((p=u.wind)==null?void 0:p.turbine_count)||((c=(d=u.wind)==null?void 0:d.turbines)==null?void 0:c.length)||2:0;for(let v=1;v<=4;v++)if(v<=W&&V&&!V.classList.contains("hidden")){const C=this.shadowRoot.getElementById(`turbineCard_${v}`);if(C&&o){const P=g(C,.5,1),x=W===1?.5:.28+(v-1)/(W-1)*.44,L=g(o,x,0);if(P&&L){const j=`M ${P.x} ${P.y} L ${L.x} ${L.y}`;_(`pathTurbine${v}Base`,`pathTurbine${v}Flow`,j)}}else _(`pathTurbine${v}Base`,`pathTurbine${v}Flow`,"")}else _(`pathTurbine${v}Base`,`pathTurbine${v}Flow`,"");const Z=((h=u.battery)==null?void 0:h.parallel_batteries)||((S=(b=u.battery)==null?void 0:b.modules)==null?void 0:S.length)||2;for(let v=1;v<=8;v++){const C=this.shadowRoot.getElementById(`batPackCard_${v}`),P=this.shadowRoot.getElementById(`batBranchBadge_${v}`);if(v<=Z&&o&&C){const x=g(o,.5,1),L=g(C,.5,0);if(x&&L){const j=Math.round(x.y+(L.y-x.y)*.45);let J="";Math.abs(x.x-L.x)<=4?J=`M ${x.x} ${x.y} L ${L.x} ${L.y}`:J=`M ${x.x} ${x.y} C ${x.x} ${j}, ${L.x} ${j}, ${L.x} ${L.y}`,_(`pathBat${v}Base`,`pathBat${v}Flow`,J),P&&(P.style.left=`${L.x}px`,P.style.top=`${j}px`,P.style.display="flex")}else _(`pathBat${v}Base`,`pathBat${v}Flow`,""),P&&(P.style.display="none")}else _(`pathBat${v}Base`,`pathBat${v}Flow`,""),P&&(P.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var e,t,s,p,d;try{const c=this._config||U,h=this._scale||1,b=this.shadowRoot.getElementById("solarBusSvg"),S=((e=c.solar)==null?void 0:e.pv_count)||((s=(t=c.solar)==null?void 0:t.strings)==null?void 0:s.length)||3;if(b&&S>0){const u=b.getBoundingClientRect(),E=this.shadowRoot.getElementById("pvPanel_1"),g=this.shadowRoot.getElementById(`pvPanel_${S}`),_=this.shadowRoot.getElementById("solarBusBase"),k=this.shadowRoot.getElementById("solarFlowCollector"),f=this.shadowRoot.getElementById("solarBusStemBase"),i=this.shadowRoot.getElementById("solarBusStemFlow"),a=this.shadowRoot.getElementById("solarBusFeeders");if(E&&g&&u.width>0){const o=E.getBoundingClientRect(),w=g.getBoundingClientRect(),l=Math.round((o.left-u.left+o.width/2)/h),y=Math.round((w.left-u.left+w.width/2)/h),B=13,n=Math.round((l+y)/2);if(_&&(_.setAttribute("x1",l),_.setAttribute("y1",B),_.setAttribute("x2",y),_.setAttribute("y2",B)),k&&(k.setAttribute("x1",l),k.setAttribute("y1",B),k.setAttribute("x2",y),k.setAttribute("y2",B)),f&&(f.setAttribute("x1",n),f.setAttribute("y1",B),f.setAttribute("x2",n),f.setAttribute("y2",26)),i&&(i.setAttribute("x1",n),i.setAttribute("y1",B),i.setAttribute("x2",n),i.setAttribute("y2",26)),a){let I="";for(let V=1;V<=S;V++){const H=this.shadowRoot.getElementById(`pvPanel_${V}`);if(H){const W=H.getBoundingClientRect(),Z=Math.round((W.left-u.left+W.width/2)/h);I+=`
                  <line x1="${Z}" y1="0" x2="${Z}" y2="${B}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${Z}" y1="0" x2="${Z}" y2="${B}" stroke="#fbbf24" stroke-width="2.5" />
                `}}a.innerHTML=I}}}const $=this.shadowRoot.getElementById("subloadsBusSvg"),m=((d=(p=c.load)==null?void 0:p.subloads)==null?void 0:d.length)||3;if($&&m>0){const u=$.getBoundingClientRect(),E=this.shadowRoot.getElementById("subloadCard_0"),g=this.shadowRoot.getElementById(`subloadCard_${m-1}`),_=this.shadowRoot.getElementById("essentialNode"),k=this.shadowRoot.getElementById("subloadsBusBase"),f=this.shadowRoot.getElementById("subloadsFlowCollector"),i=this.shadowRoot.getElementById("subloadsBusStemBase"),a=this.shadowRoot.getElementById("subloadsBusStemFlow"),o=this.shadowRoot.getElementById("subloadsBusFeeders");if(E&&g&&u.width>0){const w=E.getBoundingClientRect(),l=g.getBoundingClientRect(),y=Math.round((w.left-u.left+w.width/2)/h),B=Math.round((l.left-u.left+l.width/2)/h),n=13;let I=Math.round((y+B)/2);if(_){const W=_.getBoundingClientRect();I=Math.round((W.left-u.left+W.width/2)/h)}const V=Math.min(y,I),H=Math.max(B,I);if(k&&(k.setAttribute("x1",V),k.setAttribute("y1",n),k.setAttribute("x2",H),k.setAttribute("y2",n)),f&&(f.setAttribute("x1",V),f.setAttribute("y1",n),f.setAttribute("x2",H),f.setAttribute("y2",n)),i&&(i.setAttribute("x1",I),i.setAttribute("y1",0),i.setAttribute("x2",I),i.setAttribute("y2",n)),a&&(a.setAttribute("x1",I),a.setAttribute("y1",0),a.setAttribute("x2",I),a.setAttribute("y2",n)),o){let W="";for(let Z=0;Z<m;Z++){const v=this.shadowRoot.getElementById(`subloadCard_${Z}`);if(v){const C=v.getBoundingClientRect(),P=Math.round((C.left-u.left+C.width/2)/h);W+=`
                  <line x1="${P}" y1="${n}" x2="${P}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${P}" y1="${n}" x2="${P}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}o.innerHTML=W}}}}catch{}}_applyFlowAnimation(e,t,s,p,d){if(!e)return;if(!d){e.setAttribute("class",`flow-pulse ${t} inactive`),e.style.opacity="0",e.style.animation="none";return}const c=s?"flow-reverse":"flow-forward",h=s?"esFlowBackward":"esFlowForward";e.setAttribute("class",`flow-pulse ${t} ${c}`),e.style.opacity="1",e.style.setProperty("--flow-speed",p),e.style.animation=`${h} ${p} linear infinite`}_updateFlowAnimations(e,t,s,p,d,c,h,b,S,$=[],m=0,u=0,E=0){var Ee,ot,ue,Ce,he,Ge,st,Ie,Ve,Le,He,Se,ae;const g=this._config||U,_=((Ee=g.animations)==null?void 0:Ee.enabled)!==!1,k=((ot=g.animations)==null?void 0:ot.speed)||1.2,f=(M,N=10)=>{const re=Math.abs(M);if(re<.05)return"2.5s";const be=Math.min(1,re/N);return`${Math.max(.4,(2.6-be*1.9)*(k/1.2)).toFixed(2)}s`},i=this.shadowRoot.getElementById("pathGridInvFlow"),a=Math.abs(e),o=(((ue=g.grid)==null?void 0:ue.min_power_threshold)!==void 0?g.grid.min_power_threshold:50)/1e3,w=((Ce=g.grid)==null?void 0:Ce.selling_enabled)===!0,l=_&&a>=o&&(s||t&&w);this._applyFlowAnimation(i,"flow-grid",t,f(e,10),l);const y=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(y,"flow-solar",!1,f(p,12),_&&p>=.05);const B=this.shadowRoot.getElementById("pathInvLoadFlow"),n=Math.abs(d);this._applyFlowAnimation(B,"flow-load",!1,f(d,10),_&&n>=.05);const I=this.shadowRoot.getElementById("pathInvBatFlow"),V=Math.abs(c),H=_&&V>=.02&&(h||b),W=h?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(I,W,b,f(c,8),H);const Z=this.shadowRoot.getElementById("pathGridNonEssFlow"),v=Math.abs(m);this._applyFlowAnimation(Z,"flow-grid",!1,f(m,5),_&&v>=.05);const C=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),P=Math.abs(S);this._applyFlowAnimation(C,"flow-car",!1,f(S,7),_&&P>=.05);const x=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),L=Math.abs(u||d);this._applyFlowAnimation(x,"flow-load",!1,f(L,8),_&&L>=.05);const j=this.shadowRoot.getElementById("pathInvAuxFlow"),J=Math.abs(E);this._applyFlowAnimation(j,"flow-aux",!0,f(E,5),_&&J>=.05);const le=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(le,W,b,f(c,8),H);const de=this.shadowRoot.getElementById("solarFlowCollector"),ke=this.shadowRoot.getElementById("solarBusStemFlow");if(de)if(!_||p<.05)de.style.opacity="0.2",de.style.animation="none",ke&&(ke.style.opacity="0.2",ke.style.animation="none");else{const M=f(p,12);de.style.opacity="1",de.setAttribute("class","flow-line"),de.style.animation=`esDashflow ${M} linear infinite`,ke&&(ke.style.opacity="1",ke.setAttribute("class","flow-line"),ke.style.animation=`esDashflow ${M} linear infinite`)}const pe=this.shadowRoot.getElementById("subloadsFlowCollector"),ce=this.shadowRoot.getElementById("subloadsBusStemFlow");if(pe)if(!_||L<.05)pe.style.opacity="0.2",pe.style.animation="none",ce&&(ce.style.opacity="0.2",ce.style.animation="none");else{const M=f(L,8);pe.style.opacity="1",pe.setAttribute("class","flow-line"),pe.style.animation=`esDashflow ${M} linear infinite`,ce&&(ce.style.opacity="1",ce.setAttribute("class","flow-line"),ce.style.animation=`esDashflow ${M} linear infinite`)}const _e=this.shadowRoot.getElementById("batteryFlowCollector"),me=this.shadowRoot.getElementById("batteryBusStemFlow"),ye=this.shadowRoot.getElementById("batteryBusFeeders"),Be=b?"#f87171":"#34d399",Ae=b?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(_e)if(_e.style.stroke=Be,_e.style.filter=Ae,me&&(me.style.stroke=Be,me.style.filter=Ae),!_||!H)_e.style.opacity="0.2",_e.style.animation="none",me&&(me.style.opacity="0.2",me.style.animation="none");else{const M=f(c,8),N=b?"esDashflowRev":"esDashflow";_e.style.opacity="1",_e.setAttribute("class",b?"flow-line-reverse":"flow-line"),_e.style.animation=`${N} ${M} linear infinite`,me&&(me.style.opacity="1",me.setAttribute("class",b?"flow-line-reverse":"flow-line"),me.style.animation=`${N} ${M} linear infinite`)}ye&&ye.querySelectorAll("line").forEach(M=>{if(M.style.stroke=Be,M.style.filter=Ae,!_||!H)M.style.opacity="0.2",M.style.animation="none";else{const N=f(c,8),re=b?"esDashflowRev":"esDashflow";M.style.opacity="1",M.setAttribute("class",b?"flow-line-reverse":"flow-line"),M.style.animation=`${re} ${N} linear infinite`}});for(let M=1;M<=8;M++){const N=this.shadowRoot.getElementById(`pathBat${M}Flow`);if(!N)continue;const re=$[M-1],be=re?re.kwNum:0,fe=_&&(be>=.02||H),nt=b;this._applyFlowAnimation(N,W,nt,f(be||c,8),fe)}for(let M=0;M<6;M++){const N=this.shadowRoot.getElementById(`pathSubload${M}Flow`);if(!N)continue;const re=(Ge=(he=g.load)==null?void 0:he.subloads)==null?void 0:Ge[M],be=re?this._getEntityState(re.entity):null,fe=be?this._formatPower(be,2).kw:M===0?2:M===1?3:4;this._applyFlowAnimation(N,"flow-load",!1,f(fe,8),_&&fe>=.05)}const at=((st=g.wind)==null?void 0:st.show)!==!1||((Ie=g.aux)==null?void 0:Ie.type)==="wind",yt=at?((Ve=g.wind)==null?void 0:Ve.turbine_count)||((He=(Le=g.wind)==null?void 0:Le.turbines)==null?void 0:He.length)||2:0,we=((Se=g.wind)==null?void 0:Se.turbines)||[];for(let M=1;M<=4;M++){const N=this.shadowRoot.getElementById(`pathTurbine${M}Flow`);if(N)if(M<=yt&&at){const re=we[M-1]||{},be=this._hass?0:M===1?1.45:.85,fe=this._getEntityState(re.power_entity||`sensor.wind_turbine_${M}_power`);let De=this._formatPower(fe,be).kw*1e3;fe&&fe.unit==="W"&&(De=fe.val);const rt=re.animation_threshold??((ae=g.wind)==null?void 0:ae.animation_threshold)??50,vt=De>=rt;this._applyFlowAnimation(N,"flow-wind",!1,f(De/1e3,3),_&&vt)}else this._applyFlowAnimation(N,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",ti),typeof customElements<"u"&&!customElements.get("energy-station-panel")&&customElements.define("energy-station-panel",ei),window.customCards=window.customCards||[],window.customCards.some(qt=>qt.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),qe.EnergyStationCard=ti,qe.EnergyStationPanel=ei,qe.I18N=Zt,Object.defineProperty(qe,Symbol.toStringTag,{value:"Module"})});
