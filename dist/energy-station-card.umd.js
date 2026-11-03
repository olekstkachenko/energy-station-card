(function(Fe,G){typeof exports=="object"&&typeof module<"u"?G(exports):typeof define=="function"&&define.amd?define(["exports"],G):(Fe=typeof globalThis<"u"?globalThis:Fe||self,G(Fe.EnergyStationCard={}))})(this,function(Fe){"use strict";var dd=Object.defineProperty;var cd=(Fe,G,X)=>G in Fe?dd(Fe,G,{enumerable:!0,configurable:!0,writable:!0,value:X}):Fe[G]=X;var Ue=(Fe,G,X)=>cd(Fe,typeof G!="symbol"?G+"":G,X);const G={title:"Energy Station",card_style:"full",theme_mode:"dark",language:"uk",card_scale:1,max_width:"1400px",show_quick_settings:!0,appearance:{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"},controls:{show:!0,solar_charge_entity:"number.deye_12k_inverter_max_charge_current",grid_charge_entity:"number.deye_12k_inverter_grid_charge_current",sell_power_entity:"number.deye_12k_inverter_export_surplus_power"},refresh_rate:1e3,animations:{enabled:!0,speed:1.2,glow_intensity:"high"},solar:{show:!0,pv_count:3,installed_power:12,total_power_entity:"",daily_yield_entity:"sensor.deye_12k_inverter_daily_solar_energy",target_daily_yield:55,auto_distribute_power:!0,show_metrics:!0,strings:[{id:"pv1",name:"PV 1",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",capacity_kw:4,voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],color:"#fbbf24"},inverter:{model_name:"DEYE SUN-12K",power_entity:"",status_entity:"sensor.deye_12k_inverter_inverter_status",status_text:"ПРАЦЮЄ",ac_temperature_entity:"sensor.deye_12k_inverter_ac_temperature",dc_temperature_entity:"sensor.deye_12k_inverter_dc_temperature",voltage_entity:"sensor.deye_12k_inverter_grid_voltage",current_entity:"sensor.deye_12k_inverter_grid_current",frequency_entity:"sensor.deye_12k_inverter_grid_frequency",show_self_consumption:!0,self_consumption_entity:"",standby_power:100,color:"#f97316"},aux:{show:!0,type:"microinverter",title:"Мікроінвертор",subtitle:"Джерело → GEN port",power_entity:"sensor.deye_12k_inverter_aux_load_power",wind_animation_threshold:50,color:"#c084fc"},wind:{show:!0,turbine_count:2,animation_threshold:50,max_power:3e3,daily_energy_entity:"",monthly_energy_entity:"",turbines:[{id:"turbine_1",name:"Вітряк 1",power_entity:"sensor.wind_turbine_1_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50},{id:"turbine_2",name:"Вітряк 2",power_entity:"sensor.wind_turbine_2_power",speed_entity:"",rpm_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:50}]},battery:{show:!0,soc_entity:"sensor.deye_12k_inverter_battery_soc",power_entity:"sensor.deye_12k_inverter_battery_power",voltage_entity:"sensor.deye_12k_inverter_battery_voltage",current_entity:"sensor.deye_12k_inverter_battery_current",temperature_entity:"sensor.deye_12k_inverter_battery_temperature",cell_delta_entity:"",capacity_kwh:13,capacity_entity:"sensor.inverter_12_kvt_battery_capacity",charge_daily_entity:"sensor.deye_12k_inverter_daily_battery_charge",discharge_daily_entity:"sensor.deye_12k_inverter_daily_battery_discharge",reserve_soc:20,power_sign:"deye",invert_power:!1,parallel_batteries:2,auto_calculate_modules:!0,modules:[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",cell_delta_entity:"sensor.bms_rack1_cell_delta",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",cell_delta_entity:"sensor.bms_rack2_cell_delta",capacity_kwh:5.12}],module_entities:[{soc:"sensor.bms_rack1_soc",volt:"sensor.bms_rack1_voltage"},{soc:"sensor.bms_rack2_soc",volt:"sensor.bms_rack2_voltage"}],color:"#10b981"},grid:{show:!0,power_entity:"sensor.deye_12k_inverter_total_grid_power",external_power_entity:"",auto_calculate:!0,voltage_entity:"",status_entity:"",voltage_threshold:90,import_daily_entity:"sensor.deye_12k_inverter_daily_energy_bought",export_daily_entity:"sensor.deye_12k_inverter_daily_energy_sold",selling_enabled:!1,power_sign:"deye",min_power_threshold:50,invert_power:!1,show_car:!1,car_power_entity:"",car_title:"Авто",show_non_essential:!1,non_essential_power_entity:"",color:"#38bdf8"},load:{show:!0,auto_calculate:!0,separate_export:!0,essential_power_entity:"sensor.deye_12k_inverter_load_power",daily_house_entity:"sensor.deye_12k_inverter_daily_load_energy",subloads:[{id:"boiler",name:"Бойлер",entity:"sensor.boiler_power",icon:"boiler"},{id:"heat_pump",name:"Тепловий насос",entity:"sensor.heat_pump_power",icon:"heat_pump"},{id:"other",name:"Інше",entity:"sensor.other_loads_power",icon:"other"}],color:"#06b6d4"},tariffs:{enabled:!0,currency:"грн",day_rate:4.32,night_rate:2.16,export_rate:5.3,night_start_hour:23,night_end_hour:7,import_day_entity:"",import_night_entity:"",show_daily_cost:!0,show_export_income:!0,show_active_badge:!0,show_solar_savings:!0}},X='width="24" height="24" style="width: 24px; height: 24px; max-width: 24px; max-height: 24px; display: block; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"',le={sun:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,pv_panel:`<svg ${X} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18m9-9H3m14.5-6.5l-13 13m0-13l13 13"></path>
  </svg>`,inverter:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>`,grid_tower:`<svg ${X} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l4 18M12 2L8 20M4 7h16M2 13h20M6 18h12M10 2v20M14 2v20"></path>
  </svg>`,car:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.1C2 11.4 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>`,house:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`,battery:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
    <line x1="22" y1="11" x2="22" y2="13"></line>
  </svg>`,boiler:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
  </svg>`,heat_pump:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 3"></path>
    <path d="M8 12h.01M16 12h.01"></path>
  </svg>`,air_conditioner:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="3" width="20" height="10" rx="2"></rect>
    <path d="M6 9h12M6 17c1.5-2 3.5-2 5 0s3.5 2 5 0M9 21c1-1.3 2.5-1.3 3.5 0"></path>
  </svg>`,washing_machine:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="2"></rect>
    <circle cx="12" cy="13" r="5"></circle>
    <path d="M12 15a2 2 0 100-4 2 2 0 000 4zM6 6h.01M9 6h4"></path>
  </svg>`,other:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`,microinverter:`<svg ${X} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <path d="M7 5v14M17 5v14M2 12h20M11 9l2 3h-2l2 3"></path>
  </svg>`,generator:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
    <circle cx="9" cy="12" r="3"></circle>
    <path d="M15 9h3v6h-3"></path>
  </svg>`,wind:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`,settings:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
  </svg>`,fullscreen:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
  </svg>`,house_outline:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"></path>
  </svg>`,battery_vertical:`<svg ${X} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="6" width="12" height="15" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="15" y2="3"></line>
  </svg>`,moon:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
  </svg>`,sun_mode:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>`,globe:`<svg ${X} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
  </svg>`};class la extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._currentTab="general",this._isInternalChange=!1,this._debounceTimer=null,this._rendered=!1,this._isDialogExpanded=!1}set hass(t){this._hass=t}setConfig(t){if(this._config=JSON.parse(JSON.stringify(t||G)),this._isInternalChange){this._isInternalChange=!1;return}this.render()}connectedCallback(){this._rendered||this.render();const t=()=>{typeof window<"u"&&window.innerWidth>=850&&this._applyExpand(!0)};t(),setTimeout(t,80),setTimeout(t,250)}_findHuiDialog(){let t=this;for(;t;){if(t.tagName&&t.tagName.toLowerCase()==="hui-dialog-edit-card")return t;if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(typeof document<"u"){const i=document.querySelector("hui-dialog-edit-card")||document.querySelector("ha-dialog-edit-card");if(i)return i;try{const n=document.querySelector("home-assistant");if(n!=null&&n.shadowRoot){const r=n.shadowRoot.querySelector("hui-dialog-edit-card")||n.shadowRoot.querySelector("ha-dialog-edit-card");if(r)return r;const o=n.shadowRoot.querySelectorAll("*");for(const a of o)if(a.shadowRoot){const s=a.shadowRoot.querySelector("hui-dialog-edit-card")||a.shadowRoot.querySelector("ha-dialog-edit-card");if(s)return s}}}catch{}}return null}_findHaDialog(t){if(t!=null&&t.shadowRoot){const n=t.shadowRoot.querySelector("ha-dialog")||t.shadowRoot.querySelector("mwc-dialog");if(n)return n}let i=this;for(;i;){if(i.tagName&&(i.tagName.toLowerCase()==="ha-dialog"||i.tagName.toLowerCase()==="mwc-dialog"))return i;if(i.parentElement)i=i.parentElement;else if(i.parentNode)i=i.parentNode;else if(i.getRootNode&&i.getRootNode().host)i=i.getRootNode().host;else break}return typeof document<"u"?document.querySelector("ha-dialog")||document.querySelector("mwc-dialog"):null}_applyExpand(t){var r,o,a;this._isDialogExpanded=t;const i=this._findHuiDialog(),n=this._findHaDialog(i);if(t){if(i){typeof i._enlarge=="function"&&!i.large?i._enlarge():(i.large=!0,i.setAttribute("large",""));try{if(i.shadowRoot){let s=i.shadowRoot.getElementById("energy-station-wide-style");s||(s=document.createElement("style"),s.id="energy-station-wide-style",s.textContent=`
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
              `,i.shadowRoot.appendChild(s))}}catch{}}if(n){n.style.setProperty("--mdc-dialog-min-width","95vw","important"),n.style.setProperty("--mdc-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-max-width","96vw","important"),n.style.setProperty("--ha-dialog-width","95vw","important"),n.style.setProperty("--mdc-dialog-width","95vw","important");try{const s=(r=n.shadowRoot)==null?void 0:r.querySelector(".mdc-dialog__surface");s&&(s.style.setProperty("max-width","96vw","important"),s.style.setProperty("width","95vw","important"))}catch{}}}else{if(i){typeof i._enlarge=="function"&&i.large?i._enlarge():(i.large=!1,i.removeAttribute("large"));try{const s=(o=i.shadowRoot)==null?void 0:o.getElementById("energy-station-wide-style");s&&s.remove()}catch{}}if(n){n.style.removeProperty("--mdc-dialog-min-width"),n.style.removeProperty("--mdc-dialog-max-width"),n.style.removeProperty("--ha-dialog-max-width"),n.style.removeProperty("--ha-dialog-width"),n.style.removeProperty("--mdc-dialog-width");try{const s=(a=n.shadowRoot)==null?void 0:a.querySelector(".mdc-dialog__surface");s&&(s.style.removeProperty("max-width"),s.style.removeProperty("width"))}catch{}}}this._updateExpandBtn()}_updateExpandBtn(){var n;const t=(n=this.shadowRoot)==null?void 0:n.getElementById("btnToggleExpand");if(!t)return;const i=this._isDialogExpanded;t.innerHTML=i?"❐ Звичайний розмір":"⛶ На весь екран",t.title=i?"Згорнути вікно налаштувань до звичайного розміру":"Розширити вікно налаштувань на весь екран"}_flushConfig(){this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null,this._dispatchConfig())}_dispatchConfig(){if(!this._config)return;this._isInternalChange=!0;const t=new CustomEvent("config-changed",{detail:{config:JSON.parse(JSON.stringify(this._config))},bubbles:!0,composed:!0});this.dispatchEvent(t)}_valueChanged(t,i,n=!1){if(!this._config)return;this._config=JSON.parse(JSON.stringify(this._config));const r=t.split(".");let o=this._config;for(let a=0;a<r.length-1;a++)o[r[a]]||(o[r[a]]={}),o=o[r[a]];o[r[r.length-1]]=i,this._debounceTimer&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),n?this._dispatchConfig():this._debounceTimer=setTimeout(()=>{this._dispatchConfig()},140)}_switchTab(t){this._flushConfig(),this._currentTab=t,this.render()}_applyPreset(t){this._config=JSON.parse(JSON.stringify(this._config||G)),t==="deye_esphome"?(this._config.inverter.model_name="DEYE SUN-12K",this._config.solar.pv_count=3,this._config.solar.total_power_entity="",this._config.solar.daily_yield_entity="sensor.deye_12k_inverter_daily_solar_energy",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.deye_12k_inverter_pv1_voltage",current_entity:"sensor.deye_12k_inverter_pv1_current",power_entity:"sensor.deye_12k_inverter_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.deye_12k_inverter_pv2_voltage",current_entity:"sensor.deye_12k_inverter_pv2_current",power_entity:"sensor.deye_12k_inverter_pv2_power"},{id:"pv3",name:"PV 3",voltage_entity:"sensor.deye_12k_inverter_pv3_voltage",current_entity:"sensor.deye_12k_inverter_pv3_current",power_entity:"sensor.deye_12k_inverter_pv3_power"}],this._config.inverter.power_entity="sensor.deye_12k_inverter_inverter_power",this._config.inverter.ac_temperature_entity="sensor.deye_12k_inverter_ac_temperature",this._config.inverter.dc_temperature_entity="sensor.deye_12k_inverter_dc_temperature",this._config.inverter.voltage_entity="sensor.deye_12k_inverter_grid_voltage",this._config.inverter.current_entity="sensor.deye_12k_inverter_grid_current",this._config.inverter.frequency_entity="sensor.deye_12k_inverter_grid_frequency",this._config.battery.soc_entity="sensor.deye_12k_inverter_battery_soc",this._config.battery.power_entity="sensor.deye_12k_inverter_battery_power",this._config.battery.voltage_entity="sensor.deye_12k_inverter_battery_voltage",this._config.battery.current_entity="sensor.deye_12k_inverter_battery_current",this._config.battery.charge_daily_entity="sensor.deye_12k_inverter_daily_battery_charge",this._config.battery.discharge_daily_entity="sensor.deye_12k_inverter_daily_battery_discharge",this._config.battery.capacity_entity="sensor.inverter_12_kvt_battery_capacity",this._config.battery.parallel_batteries=2,this._config.battery.modules=[{id:"bat1",name:"Батарея 1",soc_entity:"sensor.bms_rack1_soc",current_entity:"sensor.bms_rack1_current",voltage_entity:"sensor.bms_rack1_voltage",power_entity:"sensor.bms_rack1_power",temperature_entity:"sensor.bms_rack1_temperature",capacity_kwh:7.88},{id:"bat2",name:"Батарея 2",soc_entity:"sensor.bms_rack2_soc",current_entity:"sensor.bms_rack2_current",voltage_entity:"sensor.bms_rack2_voltage",power_entity:"sensor.bms_rack2_power",temperature_entity:"sensor.bms_rack2_temperature",capacity_kwh:5.12}],this._config.grid.power_entity="sensor.deye_12k_inverter_total_grid_power",this._config.grid.import_daily_entity="sensor.deye_12k_inverter_daily_energy_bought",this._config.grid.export_daily_entity="sensor.deye_12k_inverter_daily_energy_sold",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.deye_12k_inverter_load_power",this._config.load.daily_house_entity="sensor.deye_12k_inverter_daily_load_energy"):t==="deye_solarman"&&(this._config.inverter.model_name="DEYE HYBRID",this._config.solar.pv_count=2,this._config.solar.total_power_entity="sensor.solarman_pv_total_power",this._config.solar.daily_yield_entity="sensor.solarman_daily_production",this._config.solar.strings=[{id:"pv1",name:"PV 1",voltage_entity:"sensor.solarman_pv1_voltage",current_entity:"sensor.solarman_pv1_current",power_entity:"sensor.solarman_pv1_power"},{id:"pv2",name:"PV 2",voltage_entity:"sensor.solarman_pv2_voltage",current_entity:"sensor.solarman_pv2_current",power_entity:"sensor.solarman_pv2_power"}],this._config.inverter.power_entity="sensor.solarman_inverter_power",this._config.battery.soc_entity="sensor.solarman_battery_soc",this._config.battery.power_entity="sensor.solarman_battery_power",this._config.grid.power_entity="sensor.solarman_grid_external_power",this._config.load.auto_calculate=!0,this._config.load.separate_export=!0,this._config.load.essential_power_entity="sensor.solarman_essential_load"),this._dispatchConfig(),this.render()}render(){var a,s,l,c,d,_,g,x,u,y,v,E,p,f,h,w,k,B,P,m,F,K,Z,J,te,C,$,I,S,N,Y,j,he,ge,ze,ue,pe,ke,Pe,me,Ze,st,It,Qt,Re,Me,Tt,Ie,je,Ne,lt,Oe,ve,gt,Bt,We,dt,et,D,ee,xe,De,Se,ne,ce,z,tt,Nt,Lt,Ni,He,Li,Ai,ai,si,Fi,li,ct,At,un,di,ut,Ye,ci,Ft,Pt,Xt,Zt,ei,pi,Pi,Ri,fi,hi,Mi,Oi,Rt,gi;if(!this._config)return;this._rendered=!0;const t=this._config,i=(a=this.shadowRoot)==null?void 0:a.activeElement;let n=null,r=null,o=null;if(i&&(i.id?n=`#${i.id}`:((s=i.dataset)==null?void 0:s.idx)!==void 0&&i.className&&(n=`.${i.className.trim().split(/\s+/)[0]}[data-idx="${i.dataset.idx}"]`),"selectionStart"in i&&"selectionEnd"in i&&(r=i.selectionStart,o=i.selectionEnd)),this.shadowRoot.innerHTML=`
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
              <input type="text" id="title" value="${t.title||"Energy Station"}">
            </div>
            <div class="field-row">
              <label>Максимальна ширина картки (Max Width):</label>
              <select id="cardMaxWidth">
                <option value="1400px" ${t.max_width==="1400px"||!t.max_width?"selected":""}>1400px (Стандартна)</option>
                <option value="1600px" ${t.max_width==="1600px"?"selected":""}>1600px (Широка)</option>
                <option value="1800px" ${t.max_width==="1800px"?"selected":""}>1800px (Дуже широка / 2K)</option>
                <option value="100%" ${t.max_width==="100%"?"selected":""}>100% (На всю ширину панелі)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Тема оформлення (Theme):</label>
              <select id="themeMode">
                <option value="dark" ${t.theme_mode!=="light"?"selected":""}>🌙 Темна (Dark)</option>
                <option value="light" ${t.theme_mode==="light"?"selected":""}>☀️ Світла (Light)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Мова інтерфейсу (Language):</label>
              <select id="cardLanguage">
                <option value="uk" ${t.language!=="en"?"selected":""}>🇺🇦 Українська (UK)</option>
                <option value="en" ${t.language==="en"?"selected":""}>🇬🇧 English (EN)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Масштаб картки (Zoom / Scale):</label>
              <div class="slider-row">
                <input type="range" id="cardScale" min="0.7" max="1.8" step="0.05" value="${t.card_scale||1}">
                <span id="cardScaleVal" style="font-family: monospace; font-weight: bold; width: 45px; color: #38bdf8;">${Math.round((t.card_scale||1)*100)}%</span>
              </div>
            </div>
            <div class="field-row">
              <label>Швидкість анімації (сек):</label>
              <div class="slider-row">
                <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="${((l=t.animations)==null?void 0:l.speed)||1.2}">
                <span id="animSpeedVal" style="font-family: monospace; font-weight: bold; width: 35px;">${((c=t.animations)==null?void 0:c.speed)||1.2}s</span>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="showQuickSettings" ${t.show_quick_settings!==!1?"checked":""}>
              <span>Показувати блок контролю струму та теми/мови на картці</span>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="animEnabled" ${((d=t.animations)==null?void 0:d.enabled)!==!1?"checked":""}>
              <span>Увімкнути імпульсні лінії енергії (анімація потоків)</span>
            </div>
            <div class="field-row">
              <label>Сенсор струму заряду АКБ від сонця:</label>
              <input type="text" id="ctrlSolarCharge" value="${((_=t.controls)==null?void 0:_.solar_charge_entity)||""}" placeholder="number.deye_12k_inverter_max_charge_current">
            </div>
            <div class="field-row">
              <label>Сенсор потужності продажу в мережу:</label>
              <input type="text" id="ctrlSellPower" value="${((g=t.controls)==null?void 0:g.sell_power_entity)||""}" placeholder="number.deye_12k_inverter_export_surplus_power">
            </div>
            <div class="field-row full-width">
              <label>Сенсор струму заряду АКБ від мережі:</label>
              <input type="text" id="ctrlGridCharge" value="${((x=t.controls)==null?void 0:x.grid_charge_entity)||""}" placeholder="number.deye_12k_inverter_grid_charge_current">
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
                <input type="range" id="solarPvCount" min="1" max="16" value="${((u=t.solar)==null?void 0:u.pv_count)||3}">
                <span id="solarPvCountVal" style="font-family: monospace; font-weight: bold; color: #fbbf24; width: 30px;">${((y=t.solar)==null?void 0:y.pv_count)||3}</span>
              </div>
            </div>
            <div class="field-row">
              <label>Сумарна сонячна потужність (сенсор, необов'язково):</label>
              <input type="text" id="solarTotalPower" value="${((v=t.solar)==null?void 0:v.total_power_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
              <span style="font-size: 10px; color: #94a3b8;">Картка автоматично сумує потужність усіх стрінгів, якщо порожньо.</span>
            </div>
            <div class="field-row">
              <label>Щоденна сонячна генерація (kWh):</label>
              <input type="text" id="solarDailyYield" value="${((E=t.solar)==null?void 0:E.daily_yield_entity)||""}">
            </div>
            <div class="field-row">
              <label>Ціль генерації на день (kWh):</label>
              <input type="number" id="solarTargetDaily" value="${((p=t.solar)==null?void 0:p.target_daily_yield)||55}">
            </div>
            <div class="field-row">
              <label>Встановлена пікова потужність СЕС (kWp / кВт):</label>
              <input type="number" step="0.1" id="solarInstalledPower" value="${((f=t.solar)==null?void 0:f.installed_power)!==void 0?t.solar.installed_power:12}" placeholder="12.0">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="solarShowMetrics" ${((h=t.solar)==null?void 0:h.show_metrics)!==!1?"checked":""}>
              <span>Відображати напругу (V) та струм (A) стрінгів на картці</span>
            </div>
          </div>
        </div>

        <!-- PV Strings Voltage & Current Configuration Section -->
        <div class="field-group" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 20, 5, 0.25);">
          <div class="field-group-title" style="color: #fbbf24;">
            <span>⚡ Стрінги сонячних панелей (PV Strings)</span>
            <span style="font-size: 10px; background: rgba(245, 158, 11, 0.2); padding: 2px 7px; border-radius: 4px; color: #fde047;">${((w=t.solar)==null?void 0:w.pv_count)||3} стрінгів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть сенсори напруги (Voltage) та струму (Current) для кожного стрінга. Потужність на картці розраховується автоматично (P = U × I) або береться з окремого сенсора.
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((k=t.solar)==null?void 0:k.pv_count)||3}).map((de,M)=>{var bt,mt;const V=M+1,W=((mt=(bt=t.solar)==null?void 0:bt.strings)==null?void 0:mt[M])||{},Je=`sensor.deye_12k_inverter_pv${V}_voltage`,_t=`sensor.deye_12k_inverter_pv${V}_current`,yt=`sensor.deye_12k_inverter_pv${V}_power`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #fbbf24; font-size: 12px;">PV${V} (Стрінг ${V})</span>
                    </div>
                    <input type="text" class="pv-str-name-inp" data-idx="${M}" value="${W.name||`PV ${V}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">PV${V} (voltage) — Напруга (V):</label>
                      <input type="text" class="pv-str-volt-inp" data-idx="${M}" value="${W.voltage_entity!==void 0?W.voltage_entity:Je}" placeholder="${Je}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">PV${V} (current) — Струм (A):</label>
                      <input type="text" class="pv-str-curr-inp" data-idx="${M}" value="${W.current_entity!==void 0?W.current_entity:_t}" placeholder="${_t}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">PV${V} Потужність поля (kWp / кВт):</label>
                      <input type="number" step="0.1" class="pv-str-cap-inp" data-idx="${M}" value="${W.capacity_kw!==void 0?W.capacity_kw:4}" placeholder="4.0">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px;">PV${V} Потужність (Power сенсор, опц.):</label>
                      <input type="text" class="pv-str-power-inp" data-idx="${M}" value="${W.power_entity!==void 0?W.power_entity:yt}" placeholder="${yt} (авто P = U × I)">
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
              <input type="text" id="invModel" value="${((B=t.inverter)==null?void 0:B.model_name)||"DEYE SUN-12K"}">
            </div>
            <div class="field-row">
              <label>Потужність інвертора (сенсор, опц.):</label>
              <input type="text" id="invPower" value="${((P=t.inverter)==null?void 0:P.power_entity)||""}" placeholder="Залиште порожнім, якщо немає">
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="invShowSelfConsumption" ${((m=t.inverter)==null?void 0:m.show_self_consumption)!==!1?"checked":""} style="accent-color: #f97316;">
              <span>Відображати «⚡ Власне споживання» всередині картки інвертора</span>
            </div>
            <div class="field-row">
              <label>Сенсор власного споживання (W/kW, опц.):</label>
              <input type="text" id="invSelfConsumptionEntity" value="${((F=t.inverter)==null?void 0:F.self_consumption_entity)||""}" placeholder="Залиште порожнім для авторозрахунку">
            </div>
            <div class="field-row">
              <label>Базові втрати інвертора (Вт):</label>
              <div class="slider-row">
                <input type="range" id="invStandbyPower" min="20" max="300" step="10" value="${((K=t.inverter)==null?void 0:K.standby_power)!==void 0?t.inverter.standby_power:100}">
                <span id="invStandbyPowerVal" style="font-family: monospace; font-weight: bold; color: #fb923c; width: 48px;">${((Z=t.inverter)==null?void 0:Z.standby_power)!==void 0?t.inverter.standby_power:100}W</span>
              </div>
            </div>
            <div class="field-row">
              <label>Температура AC (°C):</label>
              <input type="text" id="invTempAc" value="${((J=t.inverter)==null?void 0:J.ac_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура DC (°C):</label>
              <input type="text" id="invTempDc" value="${((te=t.inverter)==null?void 0:te.dc_temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга мережі інвертора (V):</label>
              <input type="text" id="invVolt" placeholder="Напруга V" value="${((C=t.inverter)==null?void 0:C.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм інвертора (A):</label>
              <input type="text" id="invCurrent" placeholder="Струм A" value="${(($=t.inverter)==null?void 0:$.current_entity)||""}">
            </div>
            <div class="field-row full-width">
              <label>Частота мережі (Hz):</label>
              <input type="text" id="invFreq" placeholder="Частота Hz" value="${((I=t.inverter)==null?void 0:I.frequency_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🔌 Додатковий AUX / GEN порт</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Тип підключеного пристрою:</label>
              <select id="auxType">
                <option value="microinverter" ${((S=t.aux)==null?void 0:S.type)==="microinverter"?"selected":""}>Мікроінвертор (Microinverter)</option>
                <option value="generator" ${((N=t.aux)==null?void 0:N.type)==="generator"?"selected":""}>Генератор (Generator / Дизель-бензин)</option>
                <option value="wind" ${((Y=t.aux)==null?void 0:Y.type)==="wind"?"selected":""}>Вітрогенератор (Wind Turbine)</option>
                <option value="smart_load" ${((j=t.aux)==null?void 0:j.type)==="smart_load"?"selected":""}>Smart Load (Розумне навантаження)</option>
                <option value="none" ${((he=t.aux)==null?void 0:he.type)==="none"?"selected":""}>Вимкнено (Не відображати)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Назва порту AUX:</label>
              <input type="text" id="auxTitle" value="${((ge=t.aux)==null?void 0:ge.type)==="microinverter"&&(!((ze=t.aux)!=null&&ze.title)||((ue=t.aux)==null?void 0:ue.title)==="Вітрогенератор")?"Мікроінвертор":((pe=t.aux)==null?void 0:pe.title)||(((ke=t.aux)==null?void 0:ke.type)==="generator"?"Генератор":((Pe=t.aux)==null?void 0:Pe.type)==="smart_load"?"Smart Load":"Мікроінвертор")}" placeholder="Мікроінвертор">
            </div>
            <div class="field-row full-width">
              <label>Потужність AUX порту (сенсор):</label>
              <input type="text" id="auxPower" value="${((me=t.aux)==null?void 0:me.power_entity)||""}">
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
              <input type="range" id="windTurbineCount" min="1" max="4" value="${((Ze=t.wind)==null?void 0:Ze.turbine_count)||2}">
              <span id="windTurbineCountVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 35px;">${((st=t.wind)==null?void 0:st.turbine_count)||2}</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">При 2 вітряках вони розташовуються симетрично під інвертором із власними незалежними роторами.</span>
          </div>

          <div class="field-row">
            <label>⚡ Поріг запуску анімації обертання вітряків (Вт):</label>
            <div class="slider-row">
              <input type="range" id="windThreshold" min="10" max="500" step="10" value="${((It=t.wind)==null?void 0:It.animation_threshold)||((Qt=t.aux)==null?void 0:Qt.wind_animation_threshold)||50}">
              <span id="windThresholdVal" style="font-family: monospace; font-weight: bold; color: #22d3ee; width: 48px;">${((Re=t.wind)==null?void 0:Re.animation_threshold)||((Me=t.aux)==null?void 0:Me.wind_animation_threshold)||50}W</span>
            </div>
            <span style="font-size: 10px; color: #94a3b8;">(Налаштування візуальної анімації): анімація обертання лопатей вітряка на картці вмикається ТІЛЬКИ коли генерація досягає цього значення. При нижчій потужності — анімація зупиняється (Штиль).</span>
          </div>

          <!-- Station-wide Wind Energy Sensors -->
          <div class="field-row">
            <label>Загальний сенсор дня станції (kWh, опціонально):</label>
            <input type="text" id="windDailyEnergy" value="${((Tt=t.wind)==null?void 0:Tt.daily_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: День». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <div class="field-row">
            <label>Загальний сенсор місяця станції (kWh, опціонально):</label>
            <input type="text" id="windMonthlyEnergy" value="${((Ie=t.wind)==null?void 0:Ie.monthly_energy_entity)||""}" placeholder="Залиште порожнім для автопідрахунку із суми вітряків">
            <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
              Відображається у верхній панелі «Вітер: Місяць». Якщо порожньо — автоматично підсумовує сенсори вітряків.
            </div>
          </div>

          <!-- Individual Turbines Configuration -->
          <div style="margin-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 10px;">
            <div style="font-size: 11px; font-weight: 700; color: #67e8f9; margin-bottom: 8px;">Індивідуальні сенсори вітряків:</div>
            ${Array.from({length:((je=t.wind)==null?void 0:je.turbine_count)||2}).map((de,M)=>{var W,Je;const V=((Je=(W=t.wind)==null?void 0:W.turbines)==null?void 0:Je[M])||{};return`
                <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; gap: 8px; margin-bottom: 6px;">
                    <input type="text" class="turbine-name-inp" data-idx="${M}" value="${V.name||`Вітряк ${M+1}`}" placeholder="Назва (напр. Вітряк ${M+1})" style="flex: 1;">
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <label style="font-size: 10px; color: #94a3b8;">Сенсор потужності (kW/W):</label>
                    <input type="text" class="turbine-power-inp" data-idx="${M}" value="${V.power_entity||`sensor.wind_turbine_${M+1}_power`}" placeholder="sensor.wind_turbine_${M+1}_power">
                    
                    <label style="font-size: 10px; color: #94a3b8; margin-top: 2px;">Сенсор обертів (RPM) або швидкості вітру (опціонально):</label>
                    <input type="text" class="turbine-speed-inp" data-idx="${M}" value="${V.rpm_entity||V.speed_entity||""}" placeholder="sensor.wind_rpm">
                    
                    <label style="font-size: 10px; color: #6ee7b7; margin-top: 2px;">Сенсор генерації за день (kWh, опціонально):</label>
                    <input type="text" class="turbine-daily-inp" data-idx="${M}" value="${V.daily_energy_entity||""}" placeholder="sensor.wind_turbine_${M+1}_daily_energy">
                    
                    <label style="font-size: 10px; color: #38bdf8; margin-top: 2px;">Сенсор генерації за місяць (kWh, опціонально):</label>
                    <input type="text" class="turbine-monthly-inp" data-idx="${M}" value="${V.monthly_energy_entity||""}" placeholder="sensor.wind_turbine_${M+1}_monthly_energy">
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
              <input type="text" id="batSoc" value="${((Ne=t.battery)==null?void 0:Ne.soc_entity)||""}">
            </div>
            <div class="field-row">
              <label>Потужність заряду/розряду (W або kW):</label>
              <input type="text" id="batPower" value="${((lt=t.battery)==null?void 0:lt.power_entity)||""}">
            </div>
            <div class="field-row">
              <label>Знак потужності/струму батареї (Напрямок):</label>
              <select id="batPowerSign">
                <option value="deye" ${((Oe=t.battery)==null?void 0:Oe.power_sign)!=="standard"?"selected":""}>Стандарт Deye / Sunsynk (- Заряд, + Розряд)</option>
                <option value="standard" ${((ve=t.battery)==null?void 0:ve.power_sign)==="standard"?"selected":""}>Стандартний (+ Заряд, - Розряд)</option>
              </select>
            </div>
            <div class="field-row">
              <label>Сенсор ємності інвертора (показується в дужках):</label>
              <input type="text" id="batCapacity" placeholder="sensor.inverter_12_kvt_battery_capacity" value="${((gt=t.battery)==null?void 0:gt.capacity_entity)||""}">
            </div>
            <div class="field-row">
              <label>Напруга батареї (V):</label>
              <input type="text" id="batVolt" placeholder="Напруга батареї V" value="${((Bt=t.battery)==null?void 0:Bt.voltage_entity)||""}">
            </div>
            <div class="field-row">
              <label>Струм батареї (A):</label>
              <input type="text" id="batCurrent" placeholder="Струм батареї A" value="${((We=t.battery)==null?void 0:We.current_entity)||""}">
            </div>
            <div class="field-row">
              <label>Температура АКБ (°C):</label>
              <input type="text" id="batTemp" placeholder="sensor.deye_12k_inverter_battery_temperature" value="${((dt=t.battery)==null?void 0:dt.temperature_entity)||""}">
            </div>
            <div class="field-row">
              <label>Загальний розбаланс банок (Cell Delta mV):</label>
              <input type="text" id="batDelta" placeholder="sensor.bms_cell_delta (опціонально)" value="${((et=t.battery)==null?void 0:et.cell_delta_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний заряд (kWh):</label>
              <input type="text" id="batChargeDaily" placeholder="Заряд kWh" value="${((D=t.battery)==null?void 0:D.charge_daily_entity)||""}">
            </div>
            <div class="field-row">
              <label>Щоденний розряд (kWh):</label>
              <input type="text" id="batDischargeDaily" placeholder="Розряд kWh" value="${((ee=t.battery)==null?void 0:ee.discharge_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Стек паралельних акумуляторів</div>
          <div class="field-row">
            <label>Кількість акумуляторних блоків у стеку (1 - 8):</label>
            <div class="slider-row">
              <input type="range" id="batParallelCount" min="1" max="8" value="${((xe=t.battery)==null?void 0:xe.parallel_batteries)||2}">
              <span id="batParallelCountVal" style="font-family: monospace; font-weight: bold; color: #10b981; width: 30px;">${((De=t.battery)==null?void 0:De.parallel_batteries)||2}</span>
            </div>
          </div>
        </div>

        <!-- Individual Battery Modules Configuration Section -->
        <div class="field-group" style="border-color: rgba(16, 185, 129, 0.4); background: rgba(6, 78, 59, 0.2);">
          <div class="field-group-title" style="color: #34d399;">
            <span>🔋 Модулі акумуляторного стеку (BMS)</span>
            <span style="font-size: 10px; background: rgba(16, 185, 129, 0.2); padding: 2px 7px; border-radius: 4px; color: #6ee7b7;">${((Se=t.battery)==null?void 0:Se.parallel_batteries)||2} модулів</span>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-bottom: 10px;">
            Вкажіть індивідуальні сенсори для кожного блоку: SOC (%), Струм заряду/розряду (A), Напругу (V), Потужність (W/kW) та Температуру (°C).
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Array.from({length:((ne=t.battery)==null?void 0:ne.parallel_batteries)||2}).map((de,M)=>{var _i,yi,bi,mi;const V=M+1,W=((yi=(_i=t.battery)==null?void 0:_i.modules)==null?void 0:yi[M])||((mi=(bi=t.battery)==null?void 0:bi.module_entities)==null?void 0:mi[M])||{},Je=`sensor.bms_rack${V}_soc`,_t=`sensor.bms_rack${V}_current`,yt=`sensor.bms_rack${V}_voltage`,bt=`sensor.bms_rack${V}_power`,mt=`sensor.bms_rack${V}_temperature`,ui=`sensor.bms_rack${V}_cell_delta`;return`
                <div style="background: #080d19; padding: 10px 12px; border-radius: 8px; border: 1px solid #1e293b;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-weight: 700; color: #34d399; font-size: 12px;">Батарея ${V} (Модуль ${V})</span>
                    </div>
                    <input type="text" class="bat-mod-name-inp" data-idx="${M}" value="${W.name||`Батарея ${V}`}" placeholder="Назва" style="width: 100px; padding: 3px 6px; font-size: 11px;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #34d399; font-size: 10px; font-weight: 600;">Батарея ${V} SOC (%) — Заряд:</label>
                      <input type="text" class="bat-mod-soc-inp" data-idx="${M}" value="${W.soc_entity!==void 0?W.soc_entity:W.soc!==void 0?W.soc:Je}" placeholder="${Je}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #38bdf8; font-size: 10px; font-weight: 600;">Батарея ${V} Струм (A) заряду/розряду:</label>
                      <input type="text" class="bat-mod-curr-inp" data-idx="${M}" value="${W.current_entity!==void 0?W.current_entity:_t}" placeholder="${_t}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #cbd5e1; font-size: 10px; font-weight: 600;">Батарея ${V} Напруга (V):</label>
                      <input type="text" class="bat-mod-volt-inp" data-idx="${M}" value="${W.voltage_entity!==void 0?W.voltage_entity:W.volt!==void 0?W.volt:yt}" placeholder="${yt}">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #fb7185; font-size: 10px; font-weight: 600;">Батарея ${V} Температура (°C):</label>
                      <input type="text" class="bat-mod-temp-inp" data-idx="${M}" value="${W.temperature_entity!==void 0?W.temperature_entity:W.temp!==void 0?W.temp:mt}" placeholder="${mt}">
                    </div>
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px;">
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #f59e0b; font-size: 10px; font-weight: 600;">Батарея ${V} Ємність (kWh):</label>
                      <input type="number" step="0.01" class="bat-mod-cap-inp" data-idx="${M}" value="${W.capacity_kwh!==void 0?W.capacity_kwh:V===1?7.88:5.12}" placeholder="5.12">
                    </div>
                    <div class="field-row" style="margin-bottom: 0;">
                      <label style="color: #a7f3d0; font-size: 10px; font-weight: 600;">Батарея ${V} Розбаланс (Cell Delta mV):</label>
                      <input type="text" class="bat-mod-delta-inp" data-idx="${M}" value="${W.cell_delta_entity!==void 0?W.cell_delta_entity:W.delta!==void 0?W.delta:ui}" placeholder="${ui}">
                    </div>
                  </div>

                  <div class="field-row" style="margin-top: 6px; margin-bottom: 0;">
                    <label style="color: #cbd5e1; font-size: 10px;">Батарея ${V} Потужність (опціонально):</label>
                    <input type="text" class="bat-mod-power-inp" data-idx="${M}" value="${W.power_entity!==void 0?W.power_entity:bt}" placeholder="${bt} (авто P = U × I)">
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
              <input type="checkbox" id="gridSellingEnabled" ${(ce=t.grid)!=null&&ce.selling_enabled?"checked":""} style="width: 18px; height: 18px; cursor: pointer; accent-color: #0284c7; flex-shrink: 0; margin-left: 12px;">
            </label>
          </div>

          <div class="fields-grid">
            <div class="field-row">
              <label>Потужність мережі (+/- або імпорт/експорт):</label>
              <input type="text" id="gridPower" value="${((z=t.grid)==null?void 0:z.power_entity)||""}" placeholder="sensor.deye_12k_inverter_total_grid_power">
            </div>

            <div class="field-row">
              <label>Зовнішній лічильник мережі (External CT / Smart Meter):</label>
              <input type="text" id="gridExternalPower" value="${((tt=t.grid)==null?void 0:tt.external_power_entity)||""}" placeholder="sensor.deye_12k_inverter_external_power">
            </div>

            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="gridAutoCalculate" ${((Nt=t.grid)==null?void 0:Nt.auto_calculate)!==!1?"checked":""}>
              <div>
                <span>Сумувати заряд АКБ та навантаження будинку (Grid Import Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Якщо зовнішній CT відсутній, автоматично додає споживання будинку для відображення реального вводу з вулиці.</div>
              </div>
            </div>

            <div class="field-row">
              <label>Знак потужності (Напрямок перетоку за сенсором):</label>
              <select id="gridPowerSign">
                <option value="deye" ${((Lt=t.grid)==null?void 0:Lt.power_sign)!=="inverted"?"selected":""}>Стандарт Deye / Sunsynk / Solarman (+ Імпорт, - Експорт)</option>
                <option value="inverted" ${((Ni=t.grid)==null?void 0:Ni.power_sign)==="inverted"?"selected":""}>Інвертований (+ Експорт, - Імпорт)</option>
              </select>
            </div>

            <div class="field-row">
              <label>Поріг чутливості анімації мережі (Вт):</label>
              <input type="number" id="gridMinThreshold" min="0" max="500" value="${((He=t.grid)==null?void 0:He.min_power_threshold)!==void 0?t.grid.min_power_threshold:50}">
            </div>

            <div class="field-row">
              <label>Сенсор напруги мережі (Grid Voltage, опціонально):</label>
              <input type="text" id="gridVoltage" value="${((Li=t.grid)==null?void 0:Li.voltage_entity)||""}" placeholder="sensor.deye_12k_inverter_grid_voltage">
            </div>

            <div class="field-row">
              <label>Сенсор наявності мережі (опціонально, binary_sensor):</label>
              <input type="text" id="gridStatus" value="${((Ai=t.grid)==null?void 0:Ai.status_entity)||""}" placeholder="binary_sensor.grid_connected">
            </div>

            <div class="field-row full-width">
              <label>Поріг напруги вимкнення мережі / блекаут (В):</label>
              <input type="number" id="gridVoltageThreshold" min="20" max="200" value="${((ai=t.grid)==null?void 0:ai.voltage_threshold)!==void 0?t.grid.voltage_threshold:90}">
              <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">
                Якщо напруга нижче цього значення (за замовчуванням 90 В) — мережа вважається знеструмленою. Експорт та імпорт блокуються, а вся енергія від АКБ і Сонця зараховується в дім.
              </div>
            </div>

            <div class="field-row">
              <label>Щоденний імпорт (kWh):</label>
              <input type="text" id="gridImportDaily" placeholder="sensor.grid_import_daily" value="${((si=t.grid)==null?void 0:si.import_daily_entity)||""}">
            </div>

            <div class="field-row">
              <label>Щоденний експорт (kWh):</label>
              <input type="text" id="gridExportDaily" placeholder="sensor.grid_export_daily" value="${((Fi=t.grid)==null?void 0:Fi.export_daily_entity)||""}">
            </div>
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">🚗 Негарантоване навантаження & Авто (Опціонально)</div>
          <div class="fields-grid">
            <div class="field-row">
              <label>Сенсор негарантованого навантаження:</label>
              <input type="text" id="gridNonEssential" value="${((li=t.grid)==null?void 0:li.non_essential_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
            </div>
            <div class="field-row">
              <label>Сенсор зарядки авто / EV:</label>
              <input type="text" id="gridCarPower" value="${((ct=t.grid)==null?void 0:ct.car_power_entity)||""}" placeholder="Залишіть порожнім, якщо немає">
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
              <input type="checkbox" id="loadAutoCalculate" ${((At=t.load)==null?void 0:At.auto_calculate)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Розраховувати за балансом енергії (Deye / Sunsynk Reconcile)</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Формула: (Мережа + Сонце + Вітер) - Заряд АКБ - Власне інвертора. Запобігає від'ємним значенням.</div>
              </div>
            </div>
            <div class="field-row full-width checkbox-row">
              <input type="checkbox" id="loadSeparateExport" ${((un=t.load)==null?void 0:un.separate_export)!==!1?"checked":""} style="accent-color: #06b6d4;">
              <div>
                <span>Відокремлювати експорт від навантаження будинку</span>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 1px;">Віднімати експорт у мережу від показників сенсора навантаження інвертора.</div>
              </div>
            </div>
            <div class="field-row">
              <label>Essential потужність будинку (сенсор, опціонально):</label>
              <input type="text" id="loadEssential" value="${((di=t.load)==null?void 0:di.essential_power_entity)||""}" placeholder="Залиште порожнім або сенсор навантаження">
            </div>
            <div class="field-row">
              <label>Щоденне споживання будинку (kWh):</label>
              <input type="text" id="loadDailyHouse" value="${((ut=t.load)==null?void 0:ut.daily_house_entity)||""}">
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

          ${(((Ye=t.load)==null?void 0:Ye.subloads)||[]).length===0?`
            <div style="font-size: 11px; color: #94a3b8; padding: 12px; text-align: center; border: 1px dashed #334155; border-radius: 8px; margin-bottom: 8px;">
              Немає доданих споживачів. Натисніть «+ Додати споживача», щоб створити нового.
            </div>
          `:""}

          ${(((ci=t.load)==null?void 0:ci.subloads)||[]).map((de,M)=>`
            <div style="background: #080d19; padding: 10px; border-radius: 8px; margin-bottom: 8px; border: 1px solid #1e293b; position: relative;">
              <div style="display: flex; gap: 6px; margin-bottom: 6px; align-items: center;">
                <input type="text" class="subload-name" data-idx="${M}" value="${de.name||""}" style="flex: 1;" placeholder="Назва (напр. Бойлер)">
                <select class="subload-icon" data-idx="${M}" style="width: 140px;">
                  <option value="boiler" ${de.icon==="boiler"?"selected":""}>Бойлер</option>
                  <option value="heat_pump" ${de.icon==="heat_pump"?"selected":""}>Тепловий насос</option>
                  <option value="air_conditioner" ${de.icon==="air_conditioner"?"selected":""}>Кондиціонер</option>
                  <option value="washing_machine" ${de.icon==="washing_machine"?"selected":""}>Пральна машина</option>
                  <option value="car" ${de.icon==="car"?"selected":""}>Авто / Зарядка</option>
                  <option value="house" ${de.icon==="house"?"selected":""}>Освітлення / Дім</option>
                  <option value="other" ${de.icon==="other"?"selected":""}>Інше</option>
                </select>
                <button type="button" class="btn-del-subload" data-idx="${M}" title="Прибрати споживача" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0; transition: all 0.2s;">
                  ✕
                </button>
              </div>
              <input type="text" class="subload-entity" data-idx="${M}" value="${de.entity||""}" placeholder="sensor.subload_power (сенсор потужності)">
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
              <input type="checkbox" id="tariffsEnabled" ${((Ft=t.tariffs)==null?void 0:Ft.enabled)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Увімкнути облік тарифів на картці</span>
            </div>

            <div class="field-row">
              <label>Валюта / позначення:</label>
              <input type="text" id="tariffCurrency" value="${((Pt=t.tariffs)==null?void 0:Pt.currency)||"грн"}" placeholder="грн або ₴">
            </div>

            <div class="field-row">
              <label>☀️ Денний тариф (${((Xt=t.tariffs)==null?void 0:Xt.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffDayRate" value="${((Zt=t.tariffs)==null?void 0:Zt.day_rate)??4.32}" placeholder="4.32">
            </div>

            <div class="field-row">
              <label>🌙 Нічний тариф (${((ei=t.tariffs)==null?void 0:ei.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffNightRate" value="${((pi=t.tariffs)==null?void 0:pi.night_rate)??2.16}" placeholder="2.16">
            </div>

            <div class="field-row">
              <label>🟢 Зелений тариф / експорт (${((Pi=t.tariffs)==null?void 0:Pi.currency)||"грн"}/кВт·год):</label>
              <input type="number" step="0.01" min="0" id="tariffExportRate" value="${((Ri=t.tariffs)==null?void 0:Ri.export_rate)??5.3}" placeholder="5.30">
            </div>

            <div class="field-row">
              <label>Початок ночі (година):</label>
              <select id="tariffNightStart" style="width: 100%;">
                ${Array.from({length:24},(de,M)=>{var V;return`<option value="${M}" ${(((V=t.tariffs)==null?void 0:V.night_start_hour)??23)===M?"selected":""}>${String(M).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>Кінець ночі (година):</label>
              <select id="tariffNightEnd" style="width: 100%;">
                ${Array.from({length:24},(de,M)=>{var V;return`<option value="${M}" ${(((V=t.tariffs)==null?void 0:V.night_end_hour)??7)===M?"selected":""}>${String(M).padStart(2,"0")}:00</option>`}).join("")}
              </select>
            </div>

            <div class="field-row">
              <label>☀️ Прямий сенсор денного імпорту (опціонально):</label>
              <input type="text" id="tariffImportDayEntity" value="${((fi=t.tariffs)==null?void 0:fi.import_day_entity)||""}" placeholder="sensor.daily_energy_day">
            </div>

            <div class="field-row">
              <label>🌙 Прямий сенсор нічного імпорту (опціонально):</label>
              <input type="text" id="tariffImportNightEntity" value="${((hi=t.tariffs)==null?void 0:hi.import_night_entity)||""}" placeholder="sensor.daily_energy_night">
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 10px; line-height: 1.4;">
            💡 Картка автоматично ділить добовий імпорт з мережі на нічну (з 23:00 до 07:00) та денну зону з історії Home Assistant та енергії заряду АКБ, або використовує вказані вище окремі сенсори.
          </div>
        </div>

        <div class="field-group">
          <div class="field-group-title">Відображення на станції</div>
          <div class="fields-grid">
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowDailyCost" ${((Mi=t.tariffs)==null?void 0:Mi.show_daily_cost)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати вартість імпорту за сьогодні</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowExportIncome" ${((Oi=t.tariffs)==null?void 0:Oi.show_export_income)!==!1?"checked":""} style="accent-color: #34d399;">
              <span>Показувати дохід від експорту (Зелений тариф)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowActiveBadge" ${((Rt=t.tariffs)==null?void 0:Rt.show_active_badge)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати бейдж активного тарифу (🌙 / ☀️)</span>
            </div>
            <div class="field-row checkbox-row">
              <input type="checkbox" id="tariffShowSolarSavings" ${((gi=t.tariffs)==null?void 0:gi.show_solar_savings)!==!1?"checked":""} style="accent-color: #38bdf8;">
              <span>Показувати заощадження від сонця (💰)</span>
            </div>
          </div>
        </div>
      </div>
    `,this._bindEvents(),this._updateExpandBtn(),n){const de=this.shadowRoot.querySelector(n);if(de&&(de.focus(),r!==null&&o!==null&&"setSelectionRange"in de))try{de.setSelectionRange(r,o)}catch{}}}_bindEvents(){var a,s,l,c,d,_,g,x,u,y,v,E;const t=this.shadowRoot;(a=t.getElementById("btnToggleExpand"))==null||a.addEventListener("click",()=>{this._applyExpand(!this._isDialogExpanded)}),t.querySelectorAll(".tab-btn").forEach(p=>{p.addEventListener("click",f=>{this._switchTab(f.target.dataset.tab)})}),(s=t.getElementById("btnPresetEsp"))==null||s.addEventListener("click",()=>this._applyPreset("deye_esphome")),(l=t.getElementById("btnPresetSolarman"))==null||l.addEventListener("click",()=>this._applyPreset("deye_solarman"));const i=(p,f)=>{const h=t.getElementById(p);h&&(h.addEventListener("input",w=>this._valueChanged(f,w.target.value,!1)),h.addEventListener("change",w=>this._valueChanged(f,w.target.value,!0)),h.addEventListener("blur",()=>this._flushConfig()))},n=(p,f)=>{const h=t.getElementById(p);h&&h.addEventListener("change",w=>this._valueChanged(f,w.target.checked,!0))},r=(p,f,h,w="")=>{const k=t.getElementById(p);k&&(k.addEventListener("input",B=>{const P=parseFloat(B.target.value);if(h){const m=t.getElementById(h);m&&(m.innerText=`${P}${w}`)}this._valueChanged(f,isNaN(P)?0:P,!1)}),k.addEventListener("change",B=>{const P=parseFloat(B.target.value);this._valueChanged(f,isNaN(P)?0:P,!0)}),k.addEventListener("blur",()=>this._flushConfig()))};i("title","title"),i("themeMode","theme_mode"),i("cardLanguage","language"),(c=t.getElementById("cardScale"))==null||c.addEventListener("input",p=>{const f=parseFloat(p.target.value),h=t.getElementById("cardScaleVal");h&&(h.innerText=`${Math.round(f*100)}%`),this._valueChanged("card_scale",f)}),(d=t.getElementById("cardScale"))==null||d.addEventListener("change",()=>this._flushConfig()),i("cardMaxWidth","max_width"),n("showQuickSettings","show_quick_settings"),i("ctrlSolarCharge","controls.solar_charge_entity"),i("ctrlSellPower","controls.sell_power_entity"),i("ctrlGridCharge","controls.grid_charge_entity"),n("animEnabled","animations.enabled"),r("animSpeed","animations.speed","animSpeedVal","s"),(_=t.getElementById("solarPvCount"))==null||_.addEventListener("input",p=>{const f=parseInt(p.target.value);for(this._config.solar||(this._config.solar={}),this._config.solar.pv_count=f,this._config.solar.strings||(this._config.solar.strings=[]);this._config.solar.strings.length<f;){const h=this._config.solar.strings.length+1;this._config.solar.strings.push({id:`pv${h}`,name:`PV ${h}`,capacity_kw:4,voltage_entity:`sensor.deye_12k_inverter_pv${h}_voltage`,current_entity:`sensor.deye_12k_inverter_pv${h}_current`,power_entity:`sensor.deye_12k_inverter_pv${h}_power`})}this._valueChanged("solar.pv_count",f,!0),this._valueChanged("solar.strings",this._config.solar.strings,!0),this.render()}),t.querySelectorAll(".pv-str-name-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[h]||(this._config.solar.strings[h]={}),this._config.solar.strings[h].name=f.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-volt-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[h]||(this._config.solar.strings[h]={}),this._config.solar.strings[h].voltage_entity=f.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-curr-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[h]||(this._config.solar.strings[h]={}),this._config.solar.strings[h].current_entity=f.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-power-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[h]||(this._config.solar.strings[h]={}),this._config.solar.strings[h].power_entity=f.target.value,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".pv-str-cap-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.solar.strings||(this._config.solar.strings=[]),this._config.solar.strings[h]||(this._config.solar.strings[h]={}),this._config.solar.strings[h].capacity_kw=parseFloat(f.target.value)||0,this._valueChanged("solar.strings",this._config.solar.strings)}),p.addEventListener("blur",()=>this._flushConfig())}),i("solarTotalPower","solar.total_power_entity"),i("solarDailyYield","solar.daily_yield_entity"),r("solarTargetDaily","solar.target_daily_yield"),r("solarInstalledPower","solar.installed_power"),n("solarShowMetrics","solar.show_metrics"),i("invModel","inverter.model_name"),i("invPower","inverter.power_entity"),n("invShowSelfConsumption","inverter.show_self_consumption"),i("invSelfConsumptionEntity","inverter.self_consumption_entity"),r("invStandbyPower","inverter.standby_power","invStandbyPowerVal","W"),i("invTempAc","inverter.ac_temperature_entity"),i("invTempDc","inverter.dc_temperature_entity"),i("invVolt","inverter.voltage_entity"),i("invCurrent","inverter.current_entity"),i("invFreq","inverter.frequency_entity"),(g=t.getElementById("auxType"))==null||g.addEventListener("change",p=>{const f=p.target.value;this._config.aux||(this._config.aux={}),this._config.aux.type=f;const w={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load",none:"Вимкнено"}[f]||"Мікроінвертор";this._config.aux.title=w;const k=t.getElementById("auxTitle");k&&(k.value=w),this._valueChanged("aux.type",f,!0),this._valueChanged("aux.title",w,!0)}),i("auxTitle","aux.title"),i("auxPower","aux.power_entity"),(x=t.getElementById("windTurbineCount"))==null||x.addEventListener("input",p=>{const f=parseInt(p.target.value);for(this._config.wind||(this._config.wind={}),this._config.wind.turbine_count=f,this._config.wind.turbines||(this._config.wind.turbines=[]);this._config.wind.turbines.length<f;){const h=this._config.wind.turbines.length+1;this._config.wind.turbines.push({id:`turbine_${h}`,name:`Вітряк ${h}`,power_entity:`sensor.wind_turbine_${h}_power`,speed_entity:`sensor.wind_turbine_${h}_speed`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:this._config.wind.animation_threshold||50})}this._valueChanged("wind.turbine_count",f,!0),this._valueChanged("wind.turbines",this._config.wind.turbines,!0),this.render()}),r("windThreshold","wind.animation_threshold","windThresholdVal","W"),(u=t.getElementById("windThreshold"))==null||u.addEventListener("input",p=>{this._valueChanged("aux.wind_animation_threshold",parseFloat(p.target.value))}),i("windDailyEnergy","wind.daily_energy_entity"),i("windMonthlyEnergy","wind.monthly_energy_entity"),t.querySelectorAll(".turbine-name-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[h]||(this._config.wind.turbines[h]={}),this._config.wind.turbines[h].name=f.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-power-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[h]||(this._config.wind.turbines[h]={}),this._config.wind.turbines[h].power_entity=f.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-speed-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[h]||(this._config.wind.turbines[h]={}),this._config.wind.turbines[h].rpm_entity=f.target.value,this._config.wind.turbines[h].speed_entity=f.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-daily-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[h]||(this._config.wind.turbines[h]={}),this._config.wind.turbines[h].daily_energy_entity=f.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".turbine-monthly-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.wind.turbines||(this._config.wind.turbines=[]),this._config.wind.turbines[h]||(this._config.wind.turbines[h]={}),this._config.wind.turbines[h].monthly_energy_entity=f.target.value,this._valueChanged("wind.turbines",this._config.wind.turbines)}),p.addEventListener("blur",()=>this._flushConfig())}),i("batSoc","battery.soc_entity"),i("batPower","battery.power_entity"),i("batPowerSign","battery.power_sign"),i("batVolt","battery.voltage_entity"),i("batCurrent","battery.current_entity"),i("batTemp","battery.temperature_entity"),i("batDelta","battery.cell_delta_entity"),i("batCapacity","battery.capacity_entity"),i("batChargeDaily","battery.charge_daily_entity"),i("batDischargeDaily","battery.discharge_daily_entity"),(y=t.getElementById("batParallelCount"))==null||y.addEventListener("input",p=>{const f=parseInt(p.target.value);for(this._config.battery||(this._config.battery={}),this._config.battery.parallel_batteries=f,this._config.battery.modules||(this._config.battery.modules=[]);this._config.battery.modules.length<f;){const h=this._config.battery.modules.length+1;this._config.battery.modules.push({id:`bat${h}`,name:`Батарея ${h}`,soc_entity:`sensor.bms_rack${h}_soc`,current_entity:`sensor.bms_rack${h}_current`,voltage_entity:`sensor.bms_rack${h}_voltage`,power_entity:`sensor.bms_rack${h}_power`,temperature_entity:`sensor.bms_rack${h}_temperature`,cell_delta_entity:`sensor.bms_rack${h}_cell_delta`})}this._valueChanged("battery.parallel_batteries",f,!0),this._valueChanged("battery.modules",this._config.battery.modules,!0),this.render()}),t.querySelectorAll(".bat-mod-name-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].name=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-soc-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].soc_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-curr-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].current_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-volt-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].voltage_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-temp-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].temperature_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-delta-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].cell_delta_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-power-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].power_entity=f.target.value,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".bat-mod-cap-inp").forEach(p=>{p.addEventListener("input",f=>{const h=parseInt(f.target.dataset.idx);this._config.battery.modules||(this._config.battery.modules=[]),this._config.battery.modules[h]||(this._config.battery.modules[h]={}),this._config.battery.modules[h].capacity_kwh=parseFloat(f.target.value)||0,this._valueChanged("battery.modules",this._config.battery.modules)}),p.addEventListener("blur",()=>this._flushConfig())}),n("gridSellingEnabled","grid.selling_enabled"),n("gridAutoCalculate","grid.auto_calculate"),i("gridPower","grid.power_entity"),i("gridExternalPower","grid.external_power_entity"),i("gridVoltage","grid.voltage_entity"),i("gridStatus","grid.status_entity"),r("gridVoltageThreshold","grid.voltage_threshold"),i("gridPowerSign","grid.power_sign"),r("gridMinThreshold","grid.min_power_threshold"),i("gridImportDaily","grid.import_daily_entity"),i("gridExportDaily","grid.export_daily_entity"),i("gridNonEssential","grid.non_essential_power_entity"),i("gridCarPower","grid.car_power_entity"),n("loadAutoCalculate","load.auto_calculate"),n("loadSeparateExport","load.separate_export"),i("loadEssential","load.essential_power_entity"),i("loadDailyHouse","load.daily_house_entity");const o=()=>{this._config.load||(this._config.load={}),this._config.load.subloads||(this._config.load.subloads=[]);const p=this._config.load.subloads.length+1;this._config.load.subloads.push({id:`sub_${Date.now()}`,name:`Споживач ${p}`,icon:"other",entity:""}),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render()};(v=t.getElementById("btnAddSubload"))==null||v.addEventListener("click",o),(E=t.getElementById("btnAddSubloadBottom"))==null||E.addEventListener("click",o),t.querySelectorAll(".btn-del-subload").forEach(p=>{p.addEventListener("click",f=>{var k;const h=f.currentTarget||f.target.closest(".btn-del-subload"),w=parseInt(h.dataset.idx);(k=this._config.load)!=null&&k.subloads&&(this._config.load.subloads.splice(w,1),this._valueChanged("load.subloads",this._config.load.subloads,!0),this.render())})}),t.querySelectorAll(".subload-name").forEach(p=>{p.addEventListener("input",f=>{var w,k;const h=parseInt(f.target.dataset.idx);(k=(w=this._config.load)==null?void 0:w.subloads)!=null&&k[h]&&(this._config.load.subloads[h].name=f.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),p.addEventListener("blur",()=>this._flushConfig())}),t.querySelectorAll(".subload-icon").forEach(p=>{p.addEventListener("change",f=>{var w,k;const h=parseInt(f.target.dataset.idx);(k=(w=this._config.load)==null?void 0:w.subloads)!=null&&k[h]&&(this._config.load.subloads[h].icon=f.target.value,this._valueChanged("load.subloads",this._config.load.subloads,!0))})}),t.querySelectorAll(".subload-entity").forEach(p=>{p.addEventListener("input",f=>{var w,k;const h=parseInt(f.target.dataset.idx);(k=(w=this._config.load)==null?void 0:w.subloads)!=null&&k[h]&&(this._config.load.subloads[h].entity=f.target.value,this._valueChanged("load.subloads",this._config.load.subloads))}),p.addEventListener("blur",()=>this._flushConfig())}),n("tariffsEnabled","tariffs.enabled"),i("tariffCurrency","tariffs.currency"),r("tariffDayRate","tariffs.day_rate"),r("tariffNightRate","tariffs.night_rate"),r("tariffExportRate","tariffs.export_rate"),r("tariffNightStart","tariffs.night_start_hour"),r("tariffNightEnd","tariffs.night_end_hour"),i("tariffImportDayEntity","tariffs.import_day_entity"),i("tariffImportNightEntity","tariffs.import_night_entity"),n("tariffShowDailyCost","tariffs.show_daily_cost"),n("tariffShowExportIncome","tariffs.show_export_income"),n("tariffShowActiveBadge","tariffs.show_active_badge"),n("tariffShowSolarSavings","tariffs.show_solar_savings")}}customElements.get("energy-station-card-editor")||customElements.define("energy-station-card-editor",la);/*! js-yaml 5.5.0 https://github.com/nodeca/js-yaml @license MIT */var H=Symbol("NOT_RESOLVED");function Ce(e,t){return{tagName:e,nodeKind:"scalar",implicit:t.implicit??!1,matchByTagPrefix:t.matchByTagPrefix??!1,implicitFirstChars:t.implicitFirstChars??null,resolve:t.resolve,identify:t.identify,represent:t.represent??(i=>String(i)),representTagName:t.representTagName??(()=>e)}}function zi(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addItem:t.addItem,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}function xi(e,t){const i=t.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:t.matchByTagPrefix??!1,create:t.create,addPair:t.addPair,has:t.has,keys:t.keys,get:t.get,finalize:t.finalize??(n=>n),carrierIsResult:i,identify:t.identify,represent:t.represent??(n=>n),representTagName:t.representTagName??(()=>e)}}var da=Ce("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),ca=["","~","null","Null","NULL"],pa=Ce("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>ca.indexOf(e)!==-1?null:H,identify:e=>e===null,represent:()=>"null"}),fa=Ce("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,t)=>e==="null"||t&&e===""?null:H,identify:e=>e===null,represent:()=>"null"}),ha=["","~","null","Null","NULL"],ga=Ce("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>ha.indexOf(e)!==-1?null:H,identify:e=>e===null,represent:()=>"null"}),ua=["true","True","TRUE"],_a=["false","False","FALSE"],ya=Ce("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>ua.indexOf(e)!==-1?!0:_a.indexOf(e)!==-1?!1:H,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),ba=["true"],ma=["false"],va=Ce("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>ba.indexOf(e)!==-1?!0:ma.indexOf(e)!==-1?!1:H,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),xa=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],wa=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],Ea=Ce("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>xa.indexOf(e)!==-1?!0:wa.indexOf(e)!==-1?!1:H,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),ka=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),Sa=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function Ca(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function $a(e,t){if(t){if(!Sa.test(e))return H}else if(!ka.test(e))return H;const i=Ca(e);return Number.isFinite(i)?i:H}var yn=Ce("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:$a,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),Ia=new RegExp("^-?(?:0|[1-9][0-9]*)$"),Ta=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function Ba(e){let t=e,i=1;return(t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b")?i*parseInt(t.slice(2),2):t.startsWith("0o")?i*parseInt(t.slice(2),8):t.startsWith("0x")?i*parseInt(t.slice(2),16):i*parseInt(t,10)}function Na(e,t){if(t){if(!Ta.test(e))return H}else if(!Ia.test(e))return H;const i=Ba(e);return Number.isFinite(i)?i:H}var La=Ce("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:Na,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),Aa=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function Fa(e){let t=e.replace(/_/g,""),i=1;if((t[0]==="-"||t[0]==="+")&&(t[0]==="-"&&(i=-1),t=t.slice(1)),t.startsWith("0b"))return i*parseInt(t.slice(2),2);if(t.startsWith("0x"))return i*parseInt(t.slice(2),16);if(t.includes(":")){let n=0;for(const r of t.split(":"))n=n*60+Number(r);return i*n}return t!=="0"&&t[0]==="0"?i*parseInt(t,8):i*parseInt(t,10)}function Pa(e){if(!Aa.test(e))return H;const t=Fa(e);return Number.isFinite(t)?t:H}var Wi=Ce("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:Pa,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf("e")<0,represent:e=>e.toString(10)}),Ra=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Ma=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Oa(e){if(!Ra.test(e))return H;let t=e.toLowerCase();const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;const n=i*parseFloat(t);return Number.isFinite(n)||Ma.test(e)?n:H}function Da(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var bn=Ce("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Oa,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:Da}),Va=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),za=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Wa(e,t){if(t){if(!za.test(e))return H;let n=e.toLowerCase();const r=n[0]==="-"?-1:1;if("+-".includes(n[0])&&(n=n.slice(1)),n===".inf")return r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===".nan")return NaN;const o=r*parseFloat(n);return Number.isFinite(o)?o:H}if(!Va.test(e))return H;const i=Number(e);return Number.isFinite(i)?i:H}function qa(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var Ga=Ce("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:Wa,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:qa}),ja=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Ha=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ua(e){if(!ja.test(e))return H;let t=e.toLowerCase().replace(/_/g,"");const i=t[0]==="-"?-1:1;if("+-".includes(t[0])&&(t=t.slice(1)),t===".inf")return i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(t===".nan")return NaN;let n=0;if(t.includes(":")){for(const r of t.split(":"))n=n*60+Number(r);n*=i}else n=i*parseFloat(t);return Number.isFinite(n)||Ha.test(e)?n:H}function Ka(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const t=e.toString(10);return/^[-+]?[0-9]+e/.test(t)?t.replace("e",".e"):t}var qi=Ce("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Ua,identify:e=>typeof e=="number"&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf("e")>=0),represent:Ka}),Ya=Ce("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,t)=>e==="<<"||t&&e===""?"<<":H,identify:()=>!1}),Ja=/^[A-Za-z0-9+/]*={0,2}$/;function Qa(e){const t=e.replace(/\s/g,"");if(t.length%4!==0||!Ja.test(t))return H;const i=atob(t),n=new Uint8Array(i.length);for(let r=0;r<i.length;r++)n[r]=i.charCodeAt(r);return n}function Xa(e){let t="";for(let i=0;i<e.length;i++)t+=String.fromCharCode(e[i]);return btoa(t)}var Za=Ce("tag:yaml.org,2002:binary",{resolve:Qa,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:Xa}),es=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ts=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function mn(e,t,i,n=0,r=0,o=0,a=0){const s=new Date(Date.UTC(e,t,i,n,r,o,a));return s.setUTCFullYear(e,t,i),s}function is(e){let t=es.exec(e);if(t===null&&(t=ts.exec(e)),t===null)return H;const i=+t[1],n=+t[2]-1,r=+t[3];if(!t[4]){const d=mn(i,n,r);return d.getUTCFullYear()!==i||d.getUTCMonth()!==n||d.getUTCDate()!==r?H:d}const o=+t[4],a=+t[5],s=+t[6];let l=0;if(o>23||a>59||s>59)return H;if(t[7]){let d=t[7].slice(0,3);for(;d.length<3;)d+="0";l=+d}const c=mn(i,n,r,o,a,s,l);if(c.getUTCFullYear()!==i||c.getUTCMonth()!==n||c.getUTCDate()!==r)return H;if(t[9]){const d=+t[10],_=+(t[11]||0);if(d>23||_>59)return H;const g=(d*60+_)*6e4;c.setTime(c.getTime()-(t[9]==="-"?-g:g))}return c}var ns=Ce("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:is,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),rs=zi("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,t)=>{e.push(t)},identify:Array.isArray});function wi(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function Gi(e,t){const i={};for(const n of t)e[n]!==void 0&&(i[n]=e[n]);return i}var os=zi("tag:yaml.org,2002:omap",{create:()=>({list:[],seen:new Set}),addItem:(e,t)=>{let i;if(t instanceof Map){if(t.size!==1)return"cannot resolve an ordered map item";i=t.keys().next().value}else if(wi(t)){const n=Object.keys(t);if(n.length!==1)return"cannot resolve an ordered map item";i=n[0]}else return"cannot resolve an ordered map item";return e.seen.has(i)?"duplicate key in ordered map":(e.seen.add(i),e.list.push(t),"")},finalize:e=>e.list,identify:()=>!1}),as=zi("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,t)=>{if(t instanceof Map)return t.size!==1?"cannot resolve a pairs item":(e.push(t.entries().next().value),"");if(Object.prototype.toString.call(t)!=="[object Object]")return"cannot resolve a pairs item";const i=t,n=Object.keys(i);return n.length!==1?"cannot resolve a pairs item":(e.push([n[0],i[n[0]]]),"")},identify:()=>!1}),ss=xi("tag:yaml.org,2002:map",{create:()=>({}),identify:wi,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{if(t!==null&&typeof t=="object")return"object-based map does not support complex keys";const n=String(t);return n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,""},has:(e,t)=>t!==null&&typeof t=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(t)),keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}}),ls=xi("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const t=new Map;for(const i of e)t.set(i,null);return t},addPair:(e,t,i)=>i!==null?"cannot resolve a set item":(e.add(t),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:()=>null});function ds(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function cs(){return{scalar:[],sequence:[],mapping:[]}}function ps(e){const t=[];for(const i of e){let n=t.length;for(let r=0;r<t.length;r++){const o=t[r];if(o.nodeKind===i.nodeKind&&o.tagName===i.tagName&&o.matchByTagPrefix===i.matchByTagPrefix){n=r;break}}t[n]=i}return t}var Ei=class aa{constructor(t){Ue(this,"tags");Ue(this,"implicitScalarTags");Ue(this,"implicitScalarByFirstChar");Ue(this,"implicitScalarAnyFirstChar");Ue(this,"defaultScalarTag");Ue(this,"defaultSequenceTag");Ue(this,"defaultMappingTag");Ue(this,"exact");Ue(this,"prefix");const i=ps(t),n=[],r=ds(),o=cs();for(const d of i){if(d.nodeKind==="scalar"&&d.implicit){if(d.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");n.push(d)}switch(d.nodeKind){case"scalar":d.matchByTagPrefix?o.scalar.push(d):r.scalar[d.tagName]=d;break;case"sequence":d.matchByTagPrefix?o.sequence.push(d):r.sequence[d.tagName]=d;break;case"mapping":d.matchByTagPrefix?o.mapping.push(d):r.mapping[d.tagName]=d}}const a=n.filter(d=>d.implicitFirstChars===null),s=new Set;for(const d of n)if(d.implicitFirstChars!==null)for(const _ of d.implicitFirstChars)s.add(_);const l=new Map;for(const d of s)l.set(d,n.filter(_=>_.implicitFirstChars===null||_.implicitFirstChars.indexOf(d)!==-1));const c=r.scalar["tag:yaml.org,2002:str"];if(!c)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=i,this.implicitScalarTags=n,this.implicitScalarByFirstChar=l,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=c,this.defaultSequenceTag=r.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=r.mapping["tag:yaml.org,2002:map"],this.exact=r,this.prefix=o}lookupScalarTag(t){const i=this.exact.scalar[t];if(i)return i;for(const n of this.prefix.scalar)if(t.startsWith(n.tagName))return n}lookupSequenceTag(t){const i=this.exact.sequence[t];if(i)return i;for(const n of this.prefix.sequence)if(t.startsWith(n.tagName))return n}lookupMappingTag(t){const i=this.exact.mapping[t];if(i)return i;for(const n of this.prefix.mapping)if(t.startsWith(n.tagName))return n}resolveImplicitScalarTag(t){const i=this.implicitScalarByFirstChar.get(t.charAt(0))??this.implicitScalarAnyFirstChar;for(const r of i){const o=r.resolve(t,!1,r.tagName);if(o!==H)return{value:o,tag:r}}const n=this.defaultScalarTag;return{value:n.resolve(t,!1,n.tagName),tag:n}}withTags(...t){let i=[];for(const n of t)i=i.concat(n);return new aa([...this.tags,...i])}},ji=new Ei([da,rs,ss]);new Ei([...ji.tags,fa,va,La,Ga]);var fs=new Ei([...ji.tags,pa,ya,yn,bn]),hs=new Ei([...ji.tags,ga,Ea,Wi,qi,ns,Ya,Za,os,as,ls]),gs=hs.withTags({...Wi,resolve:(e,t,i)=>{const n=Wi.resolve(e,t,i);return n===H?yn.resolve(e,t,i):n}},{...qi,resolve:(e,t,i)=>{const n=qi.resolve(e,t,i);return n===H?bn.resolve(e,t,i):n}});xi("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,t,i)=>(e.set(t,i),""),has:(e,t)=>e.has(t),keys:e=>e.keys(),get:(e,t)=>e.get(t),identify:e=>e instanceof Map||wi(e),represent:e=>{if(e instanceof Map)return e;const t=new Map,i=e;for(const n of Object.keys(i))t.set(n,i[n]);return t}});function vn(e){if(Array.isArray(e)){const t=Array.prototype.slice.call(e);for(let i=0;i<t.length;i++){if(Array.isArray(t[i]))return null;typeof t[i]=="object"&&Object.prototype.toString.call(t[i])==="[object Object]"&&(t[i]="[object Object]")}return String(t)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}xi("tag:yaml.org,2002:map",{create:()=>({}),identify:wi,represent:e=>{const t=new Map;for(const i of Object.keys(e))t.set(i,e[i]);return t},addPair:(e,t,i)=>{const n=vn(t);return n===null?"nested arrays are not supported inside keys":(n==="__proto__"?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,"")},has:(e,t)=>{const i=vn(t);return i!==null&&Object.prototype.hasOwnProperty.call(e,i)},keys:e=>Object.keys(e),get:(e,t)=>{const i=String(t);return Object.prototype.hasOwnProperty.call(e,i)?e[i]:null}});var us={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Hi(e,t,i,n,r){let o="",a="";const s=Math.floor(r/2)-1;return n-t>s&&(o=" ... ",t=n-s+o.length),i-n>s&&(a=" ...",i=n+s-a.length),{str:o+e.slice(t,i).replace(/\t/g,"→")+a,pos:n-t+o.length}}function Ui(e,t){return" ".repeat(Math.max(t-e.length,0))+e}function _s(e,t){if(!e.buffer)return null;const i={...us,...t},n=/\r?\n|\r|\0/g,r=[0],o=[];let a,s=-1;for(;a=n.exec(e.buffer);)o.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);let l="";const c=Math.min(e.line+i.linesAfter,o.length).toString().length,d=i.maxLength-(i.indent+c+3);for(let g=1;g<=i.linesBefore&&!(s-g<0);g++){const x=Hi(e.buffer,r[s-g],o[s-g],e.position-(r[s]-r[s-g]),d);l=`${" ".repeat(i.indent)}${Ui((e.line-g+1).toString(),c)} | ${x.str}
${l}`}const _=Hi(e.buffer,r[s],o[s],e.position,d);l+=`${" ".repeat(i.indent)}${Ui((e.line+1).toString(),c)} | ${_.str}
`,l+=`${"-".repeat(i.indent+c+3+_.pos)}^
`;for(let g=1;g<=i.linesAfter&&!(s+g>=o.length);g++){const x=Hi(e.buffer,r[s+g],o[s+g],e.position-(r[s]-r[s+g]),d);l+=`${" ".repeat(i.indent)}${Ui((e.line+g+1).toString(),c)} | ${x.str}
`}return l.replace(/\n$/,"")}function xn(e,t){let i="";return e.mark?(e.mark.name&&(i+=`in "${e.mark.name}" `),i+=`(${e.mark.line+1}:${e.mark.column+1})`,!t&&e.mark.snippet&&(i+=`

${e.mark.snippet}`),`${e.reason} ${i}`):e.reason}var ht=class sa extends Error{constructor(i,n){super();Ue(this,"reason");Ue(this,"mark");this.name="YAMLException",this.reason=i,this.mark=n,this.message=xn(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(i){return`${this.name}: ${xn(this,i)}`}static throwAt(i,n,r,o=""){let a=0,s=0;for(let c=0;c<n;c++){const d=i.charCodeAt(c);d===10?(a++,s=c+1):d===13&&(a++,i.charCodeAt(c+1)===10&&c++,s=c+1)}const l={name:o,buffer:i,position:n,line:a,column:n-s};throw l.snippet=_s(l),new sa(r,l)}},we={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6},O={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5},Ge={BLOCK:1,FLOW:2},Qe={CLIP:1,STRIP:2,KEEP:3},ys=-1;function wn(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var En=new Array(256),kn=new Array(256);for(let e=0;e<256;e++)En[e]=wn(e)?1:0,kn[e]=wn(e);function bs(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function ms(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function vs(e){return e===120?2:e===117?4:8}function ki(e,t,i){let n=0;for(;t<i;){const r=e.charCodeAt(t);if(r===10)n++,t++;else if(r===13)n++,t++,e.charCodeAt(t)===10&&t++;else if(r===32||r===9)t++;else break}return{position:t,breaks:n}}function Ki(e){return e===1?" ":`
`.repeat(e-1)}function xs(e,t,i){let n="",r=t,o=t,a=t;for(;r<i;){const s=e.charCodeAt(r);if(s===10||s===13){n+=e.slice(o,a);const l=ki(e,r,i);n+=Ki(l.breaks),r=o=a=l.position}else r++,s!==32&&s!==9&&(a=r)}return n+e.slice(o,a)}function ws(e,t,i){let n="",r=t,o=t,a=t;for(;r<i;){const s=e.charCodeAt(r);if(s===39)n+=e.slice(o,r)+"'",r+=2,o=a=r;else if(s===10||s===13){n+=e.slice(o,a);const l=ki(e,r,i);n+=Ki(l.breaks),r=o=a=l.position}else r++,s!==32&&s!==9&&(a=r)}return n+e.slice(o,i)}function Es(e,t,i){let n="",r=t,o=t,a=t;for(;r<i;){const s=e.charCodeAt(r);if(s===92){n+=e.slice(o,r),r++;const l=e.charCodeAt(r);if(l===10||l===13)r=ki(e,r,i).position;else if(l<256&&En[l])n+=kn[l],r++;else{let c=vs(l),d=0;for(;c>0;c--){r++;const _=ms(e.charCodeAt(r));d=(d<<4)+_}n+=bs(d),r++}o=a=r}else if(s===10||s===13){n+=e.slice(o,a);const l=ki(e,r,i);n+=Ki(l.breaks),r=o=a=l.position}else r++,s!==32&&s!==9&&(a=r)}return n+e.slice(o,i)}function Sn(e,t,i,n,r,o){const a=n<0?0:n,s=e.slice(t,i).replace(/\r\n?/g,`
`),l=s===""?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`);let c="",d=!1,_=0,g=!1;for(const x of l){let u=0;for(;u<a&&x.charCodeAt(u)===32;)u++;if(n<0||u>=x.length){_++;continue}const y=x.slice(a),v=y.charCodeAt(0);o?v===32||v===9?(g=!0,c+=`
`.repeat(d?1+_:_)):g?(g=!1,c+=`
`.repeat(_+1)):_===0?d&&(c+=" "):c+=`
`.repeat(_):c+=`
`.repeat(d?1+_:_),c+=y,d=!0,_=0}return r===Qe.KEEP?c+=`
`.repeat(d?1+_:_):r!==Qe.STRIP&&d&&(c+=`
`),c}function ks(e,t){if(t.valueStart===ys)return"";const{valueStart:i,valueEnd:n}=t;if(t.fast)return e.slice(i,n);switch(t.style){case O.SINGLE_QUOTED:return ws(e,i,n);case O.DOUBLE_QUOTED:return Es(e,i,n);case O.LITERAL_BLOCK:return Sn(e,i,n,t.indent,t.chomping,!1);case O.FOLDED_BLOCK:return Sn(e,i,n,t.indent,t.chomping,!0);default:return xs(e,i,n)}}var Ss=Object.assign(Object.create(null),{"!":"!","!!":"tag:yaml.org,2002:"}),Cn="-#;/?:@&=+$_.~*'()",Cs=Cn+"!,[]",$n="0123456789ABCDEF";function Xe(e){return"%"+$n[e>>4]+$n[e&15]}function Yi(e,t){const i=t?Cn:Cs;let n="";for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||i.includes(e[r])){n+=e[r];continue}o>=55296&&o<=56319&&(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023)),o<128?n+=Xe(o):o<2048?n+=Xe(192|o>>6)+Xe(128|o&63):o<65536?n+=Xe(224|o>>12)+Xe(128|o>>6&63)+Xe(128|o&63):n+=Xe(240|o>>18)+Xe(128|o>>12&63)+Xe(128|o>>6&63)+Xe(128|o&63)}return n}function Ji(e){let t="",i=0;for(;i<e.length;){if(e.charCodeAt(i)!==37){t+=e[i++];continue}let n=parseInt(e.slice(i+1,i+3),16);if(i+=3,n>=192){let r=n<224?1:n<240?2:3;for(n&=(1<<6-r)-1;r-- >0;)n=n<<6|parseInt(e.slice(i+1,i+3),16)&63,i+=3}n<65536?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023))}return t}function In(e,t){if(e.startsWith("!<")&&e.endsWith(">"))return Ji(e.slice(2,-1));const i=e.indexOf("!",1),n=i===-1?"!":e.slice(0,i+1);return Ji((t==null?void 0:t[n])??Ss[n]??n)+Ji(e.slice(n.length))}function Tn(e){let t=e;return t.charCodeAt(0)===33?(t=t.slice(1),`!${Yi(t,!0)}`):t.slice(0,18)==="tag:yaml.org,2002:"?`!!${Yi(t.slice(18),!0)}`:`!<${Yi(t,!1)}>`}var Wt=-1,$s="tag:yaml.org,2002:merge",Qi={filename:"",schema:fs,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function Is(e){return"tagStart"in e&&e.tagStart!==Wt?e.tagStart:"anchorStart"in e&&e.anchorStart!==Wt?e.anchorStart:"valueStart"in e&&e.valueStart!==Wt?e.valueStart:"start"in e?e.start:0}function Ee(e,t){ht.throwAt(e.source,e.position,t,e.filename)}function Bn(e,t,i,n){try{return i.finalize(n)}catch(r){if(r instanceof ht)throw r;ht.throwAt(e.source,t,r instanceof Error?r.message:String(r),e.filename)}}function Ts(e,t){const i=ks(e.source,t),n=t.tagStart===Wt?"":e.source.slice(t.tagStart,t.tagEnd),r=e.schema.defaultScalarTag;if(n!==""){if(n==="!")return{value:i,tag:r};const o=In(n,e.tagHandlers),a=e.schema.lookupScalarTag(o);if(a){const l=a.resolve(i,!0,o);return l===H&&Ee(e,`cannot resolve a node with !<${o}> explicit tag`),{value:l,tag:a}}const s=e.schema.lookupMappingTag(o)??e.schema.lookupSequenceTag(o);if(s){i!==""&&Ee(e,`cannot resolve a node with !<${o}> explicit tag`);const l=s.create(o);return{value:s.carrierIsResult?l:Bn(e,e.position,s,l),tag:s}}Ee(e,`unknown scalar tag !<${o}>`)}return t.style===O.PLAIN?e.schema.resolveImplicitScalarTag(i):{value:r.resolve(i,!1,r.tagName),tag:r}}function Nn(e,t,i){const n=t.tagStart===Wt?"":e.source.slice(t.tagStart,t.tagEnd);return n===""||n==="!"?i:In(n,e.tagHandlers)}function Ln(e){return e.nodeKind==="mapping"}function An(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&Ee(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Fn(e,t,i,n){An(e);for(const r of n.keys(i)){if(An(e),t.tag.has(t.value,r))continue;const o=t.tag.addPair(t.value,r,n.get(i,r));o&&Ee(e,o),t.overridable??(t.overridable=new Set),t.overridable.add(r)}}function Bs(e,t,i,n){if(e.position=t.keyPosition,Ln(n))Fn(e,t,i,n);else if(n.nodeKind==="sequence"&&Array.isArray(i)){i.length>100&&Ee(e,"abnormal merge sequence size");for(const r of i){const o=e.nodeTags.get(r);o||Ee(e,"cannot merge mappings; the provided source object is unacceptable"),Fn(e,t,r,o)}}else Ee(e,"cannot merge mappings; the provided source object is unacceptable")}function Ns(e,t,i,n,r){var a,s;if(e.position=t.keyPosition,t.keyIsMerge){Bs(e,t,n,r);return}!e.json&&t.tag.has(t.value,i)&&!((a=t.overridable)!=null&&a.has(i))&&Ee(e,"duplicated mapping key");const o=t.tag.addPair(t.value,i,n);o&&Ee(e,o),(s=t.overridable)==null||s.delete(i)}function Xi(e,t,i){const n=e.frames[e.frames.length-1];if(n.kind==="document")n.value=t,n.hasValue=!0;else if(n.kind==="sequence"){Ln(i)&&e.nodeTags.set(t,i);const r=n.tag.addItem(n.value,t,n.index++);r&&Ee(e,r)}else if(n.hasKey){const r=n.key;n.key=void 0,n.hasKey=!1,Ns(e,n,r,t,i)}else n.key=t,n.keyPosition=e.position,n.hasKey=!0,n.keyIsMerge=i.tagName===$s}function Zi(e,t,i,n,r){if(t.anchorStart!==Wt){const o={value:i,tag:n,isValueFinal:r};return e.anchors.set(e.source.slice(t.anchorStart,t.anchorEnd),o),o}return null}function Ls(e,t){const i={...Qi,...t,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,nodeTags:new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0};for(;i.eventIndex<i.events.length;){const n=i.events[i.eventIndex++];switch(i.position=Is(n),n.type){case we.DOCUMENT:i.anchors=new Map,i.nodeTags=new Map,i.aliasCount=0,i.tagHandlers=Object.create(null);for(const r of n.directives)r.kind==="tag"&&(i.tagHandlers[r.handle]=r.prefix);i.frames.push({kind:"document",position:i.position,value:void 0,hasValue:!1});break;case we.SCALAR:{const{value:r,tag:o}=Ts(i,n);Zi(i,n,r,o,!0),Xi(i,r,o);break}case we.SEQUENCE:{const r=Nn(i,n,"tag:yaml.org,2002:seq"),o=i.schema.lookupSequenceTag(r);o||Ee(i,`unknown sequence tag !<${r}>`);const a=o.create(r),s=Zi(i,n,a,o,o.carrierIsResult);i.frames.push({kind:"sequence",position:i.position,value:a,tag:o,anchor:s,index:0});break}case we.MAPPING:{const r=Nn(i,n,"tag:yaml.org,2002:map"),o=i.schema.lookupMappingTag(r);o||Ee(i,`unknown mapping tag !<${r}>`);const a=o.create(r),s=Zi(i,n,a,o,o.carrierIsResult);i.frames.push({kind:"mapping",position:i.position,value:a,tag:o,anchor:s,key:void 0,keyPosition:i.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case we.ALIAS:{i.maxAliases!==-1&&++i.aliasCount>i.maxAliases&&Ee(i,`aliases exceeded maxAliases (${i.maxAliases})`);const r=i.source.slice(n.anchorStart,n.anchorEnd),o=i.anchors.get(r);o||Ee(i,`unidentified alias "${r}"`),o.isValueFinal||Ee(i,`recursive alias "${r}" is not supported for tag ${o.tag.tagName} because it uses finalize()`),Xi(i,o.value,o.tag);break}case we.POP:{const r=i.frames.pop();if(r.kind==="mapping"&&r.hasKey&&(i.position=r.keyPosition,Ee(i,"incomplete mapping pair in event stream")),r.kind==="document")i.documents.push(r.value);else{const o=r.tag.carrierIsResult?r.value:Bn(i,r.position,r.tag,r.value);r.anchor&&(r.anchor.value=o,r.anchor.isValueFinal=!0),Xi(i,o,r.tag)}break}}}return i.documents}var U=-1,Pn=Object.prototype.hasOwnProperty,qt=1,Rn=2,Mn=3,Si=4,As=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Fs=/[,\[\]{}]/,On=/^(?:!|!!|![0-9A-Za-z-]+!)$/,en=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,Dn=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,Ps=new RegExp(`^(?:${en})*$`),Rs=new RegExp(`^(?:${Dn})+$`),Ms=new RegExp(`^(?:!(?:${en})*|${Dn}(?:${en})*)$`),tn={filename:"",maxDepth:100};function Os(e,t,i){e.events.push({type:we.DOCUMENT,explicitStart:t,explicitEnd:i,directives:e.directives})}function Vn(e,t,i,n,r,o,a){e.events.push({type:we.SEQUENCE,start:t,anchorStart:i,anchorEnd:n,tagStart:r,tagEnd:o,style:a})}function zn(e,t,i,n,r,o,a){e.events.push({type:we.MAPPING,start:t,anchorStart:i,anchorEnd:n,tagStart:r,tagEnd:o,style:a})}function Wn(e,t){e.events.splice(t.eventsLength,0,{type:we.MAPPING,start:t.position,anchorStart:U,anchorEnd:U,tagStart:U,tagEnd:U,style:Ge.FLOW})}function Gt(e,t,i,n,r,o,a,s,l=Qe.CLIP,c=-1,d=!1){e.events.push({type:we.SCALAR,valueStart:t,valueEnd:i,anchorStart:n,anchorEnd:r,tagStart:o,tagEnd:a,style:s,chomping:l,indent:c,fast:d})}function Ds(e,t,i){e.events.push({type:we.ALIAS,anchorStart:t,anchorEnd:i})}function jt(e){e.events.push({type:we.POP})}function Be(e){Gt(e,U,U,U,U,U,U,O.PLAIN)}function qn(){return{anchorStart:U,anchorEnd:U,tagStart:U,tagEnd:U}}function Ht(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function Ut(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.events.length=t.eventsLength}function L(e,t){ht.throwAt(e.input.slice(0,e.length),e.position,t,e.filename)}function be(e){return e===10||e===13}function Kt(e){return e===9||e===32}function Ke(e){return Kt(e)||be(e)}function ot(e){return e===0||Ke(e)}function Ct(e){return e===44||e===91||e===93||e===123||e===125}function Vs(e){return e>=48&&e<=57?e-48:-1}function zs(e){if(e>=48&&e<=57)return e-48;const t=e|32;return t>=97&&t<=102?t-97+10:-1}function Ws(e){return e===120?2:e===117?4:e===85?8:0}function qs(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function Ci(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function $e(e,t){let i=0,n=e.input.charCodeAt(e.position),r=e.position===e.lineStart||Ke(e.input.charCodeAt(e.position-1));for(;n!==0;){for(;Kt(n);)r=!0,n===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&r&&n===35)do n=e.input.charCodeAt(++e.position);while(!be(n)&&n!==0);if(!be(n))break;for(Ci(e),i++,r=!0,n=e.input.charCodeAt(e.position);n===32;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return i}function Yt(e,t=e.position){const i=e.input.charCodeAt(t);if((i===45||i===46)&&i===e.input.charCodeAt(t+1)&&i===e.input.charCodeAt(t+2)){const n=e.input.charCodeAt(t+3);return n===0||Ke(n)}return!1}function Gn(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function nn(e){if(e.position!==e.lineStart)return!1;if(Yt(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;const t=Ht(e);Gn(e),$e(e,!0);const i=e.input.charCodeAt(e.position),n=e.position===e.lineStart&&(i===37||i===45&&Yt(e));return Ut(e,t),n}function jn(e){let t=e.input.charCodeAt(e.position);for(;t!==0&&!be(t);)t=e.input.charCodeAt(++e.position)}function Hn(e,t,i){const n=As.exec(e.input.slice(t,i));n!==null&&(e.position=t+n.index+n[0].length-1,L(e,"the stream contains non-printable characters"))}function Gs(e,t,i){if(e.input.charCodeAt(e.position)!==33)return!1;t.tagStart!==U&&L(e,"duplication of a tag property");const n=e.position;let r=!1,o=!1,a="!",s=e.input.charCodeAt(++e.position);s===60?(r=!0,s=e.input.charCodeAt(++e.position)):s===33&&(o=!0,a="!!",s=e.input.charCodeAt(++e.position));let l=e.position,c;if(r){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&L(e,"unexpected end of the stream within a verbatim tag"),c=e.input.slice(l,e.position),e.position++}else{for(;s!==0&&!Ke(s)&&!(i&&Ct(s));)s===33&&(o?L(e,"tag suffix cannot contain exclamation marks"):(a=e.input.slice(l-1,e.position+1),On.test(a)||L(e,"named tag handle cannot contain such characters"),o=!0,l=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(l,e.position),Fs.test(c)&&L(e,"tag suffix cannot contain flow indicator characters")}return c&&!(r?Ps.test(c):Rs.test(c))&&L(e,`tag name cannot contain such characters: ${c}`),!r&&a!=="!"&&a!=="!!"&&!Pn.call(e.tagHandlers,a)&&L(e,`undeclared tag handle "${a}"`),t.tagStart=n,t.tagEnd=e.position,!0}function js(e,t){if(e.input.charCodeAt(e.position)!==38)return!1;t.anchorStart!==U&&L(e,"duplication of an anchor property"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ke(e.input.charCodeAt(e.position))&&!Ct(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&L(e,"name of an anchor node must contain at least one character"),t.anchorStart=i,t.anchorEnd=e.position,!0}function Hs(e,t){if(e.input.charCodeAt(e.position)!==42)return!1;(t.anchorStart!==U||t.tagStart!==U)&&L(e,"alias node should not have any properties"),e.position++;const i=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ke(e.input.charCodeAt(e.position))&&!Ct(e.input.charCodeAt(e.position));)e.position++;return e.position===i&&L(e,"name of an alias node must contain at least one character"),Ds(e,i,e.position),!0}function rn(e,t){$e(e,!1),e.lineIndent<t&&L(e,"deficient indentation")}function Us(e,t,i){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const n=e.position;let r=!0;for(;e.input.charCodeAt(e.position)!==0;){const o=e.input.charCodeAt(e.position);if(o===39){if(e.input.charCodeAt(e.position+1)===39){r=!1,e.position+=2;continue}const a=e.position;return e.position++,Gt(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,O.SINGLE_QUOTED,Qe.CLIP,-1,r),!0}be(o)?(r=!1,rn(e,t)):e.position===e.lineStart&&Yt(e)?L(e,"unexpected end of the document within a single quoted scalar"):o!==9&&o<32?L(e,"expected valid JSON character"):e.position++}L(e,"unexpected end of the stream within a single quoted scalar")}function Ks(e,t,i){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const n=e.position;let r=!0;for(;e.input.charCodeAt(e.position)!==0;){const o=e.input.charCodeAt(e.position);if(o===34){const a=e.position;return e.position++,Gt(e,n,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,O.DOUBLE_QUOTED,Qe.CLIP,-1,r),!0}if(o===92){r=!1;const a=e.input.charCodeAt(++e.position);if(be(a))rn(e,t);else if(qs(a))e.position++;else{let s=Ws(a);for(s===0&&L(e,"unknown escape sequence");s-- >0;)e.position++,zs(e.input.charCodeAt(e.position))<0&&L(e,"expected hexadecimal character");e.position++}}else be(o)?(r=!1,rn(e,t)):e.position===e.lineStart&&Yt(e)?L(e,"unexpected end of the document within a double quoted scalar"):o!==9&&o<32?L(e,"expected valid JSON character"):e.position++}L(e,"unexpected end of the stream within a double quoted scalar")}function Ys(e,t,i){const n=e.input.charCodeAt(e.position);let r=Qe.CLIP,o=-1,a=!1;if(n!==124&&n!==62)return!1;const s=n===124?O.LITERAL_BLOCK:O.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){const x=e.input.charCodeAt(e.position),u=Vs(x);if(x===43||x===45)r!==Qe.CLIP&&L(e,"repeat of a chomping mode identifier"),r=x===43?Qe.KEEP:Qe.STRIP,e.position++;else if(u>=0)u===0&&L(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),a&&L(e,"repeat of an indentation width identifier"),o=t+u-1,a=!0,e.position++;else break}let l=!1;for(;Kt(e.input.charCodeAt(e.position));)l=!0,e.position++;l&&e.input.charCodeAt(e.position)===35&&jn(e),be(e.input.charCodeAt(e.position))?Ci(e):e.input.charCodeAt(e.position)!==0&&L(e,"a line break is expected");let c=a?o:-1,d=0;const _=e.position;let g=e.position;for(;e.input.charCodeAt(e.position)!==0;){const x=e.position;let u=0;for(;e.input.charCodeAt(x+u)===32;)u++;const y=e.input.charCodeAt(x+u);if(y===0){c>=0?u>c&&(g=x+u):u>0&&(g=x+u);break}if(nn(e))break;if(!a&&c===-1&&be(y)&&(d=Math.max(d,u)),!a&&c===-1&&!be(y)&&(y===9&&u<t&&(e.position=x+u,L(e,"tab characters must not be used in indentation")),u>=t&&u<d&&(e.position=x+u,L(e,"bad indentation of a mapping entry"))),c===-1&&y!==0&&!be(y)&&u<t){e.lineIndent=u,e.position=x+u;break}!a&&y!==0&&!be(y)&&c===-1&&(c=u);const v=c===-1?t+1:c;if(y!==0&&!be(y)&&u<v){e.lineIndent=u,e.position=x+u;break}jn(e),g=e.position,be(e.input.charCodeAt(e.position))&&(Ci(e),g=e.position)}return Hn(e,_,g),Gt(e,_,g,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,s,r,c),!0}function Js(e,t){const i=e.input.charCodeAt(e.position),n=t===qt;if(i===0||Ke(i)||i===35||i===38||i===42||i===33||i===124||i===62||i===39||i===34||i===37||i===64||i===96||Ct(i))return!1;if(i===63||i===45){const r=e.input.charCodeAt(e.position+1);if(ot(r)||n&&Ct(r))return!1}return!0}function Qs(e,t,i,n){if(!Js(e,i))return!1;const r=e.position;let o=e.position,a=e.input.charCodeAt(e.position);const s=i===qt;let l=!1;for(;a!==0&&!nn(e);){if(a===58){const c=e.input.charCodeAt(e.position+1);if(ot(c)||s&&Ct(c))break}else if(a===35){if(Ke(e.input.charCodeAt(e.position-1)))break}else{if(s&&Ct(a))break;if(be(a)){const c=e.position,d=e.line,_=e.lineStart,g=e.lineIndent;if($e(e,!1),e.lineIndent>=t){l=!0,a=e.input.charCodeAt(e.position);continue}e.position=c,e.line=d,e.lineStart=_,e.lineIndent=g;break}}Kt(a)||(o=e.position+1),a=e.input.charCodeAt(++e.position)}return o===r?!1:(Hn(e,r,o),Gt(e,r,o,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,O.PLAIN,Qe.CLIP,-1,!l),!0)}function ni(e,t){const i=e.line;$e(e,!0),(e.line>i&&e.lineIndent<t||e.firstTabInLine!==-1&&e.lineIndent<t)&&L(e,"deficient indentation")}function Xs(e,t,i){const n=e.input.charCodeAt(e.position),r=n===123,o=e.position;let a=!0;if(n!==91&&n!==123)return!1;const s=r?125:93;for(r?zn(e,o,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,Ge.FLOW):Vn(e,o,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,Ge.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){ni(e,t);let l=e.input.charCodeAt(e.position);if(l===s)return e.position++,jt(e),!0;a?l===44&&L(e,"expected the node content, but found ','"):L(e,"missed comma between flow collection entries");let c=!1,d=!1;l===63&&Ke(e.input.charCodeAt(e.position+1))&&(c=d=!0,e.position+=1,ni(e,t));const _=e.line,g=Ht(e),x=Jt(e,t,qt,!1,!0);ni(e,t),l=e.input.charCodeAt(e.position),(r||d||e.line===_)&&l===58?(c=!0,e.position++,ni(e,t),r||Wn(e,g),x||Be(e),Jt(e,t,qt,!1,!0)||Be(e),ni(e,t),r||jt(e)):r&&c?(x||Be(e),Be(e)):r?Be(e):c&&(Wn(e,g),x||Be(e),Be(e),jt(e)),l=e.input.charCodeAt(e.position),l===44?(a=!0,e.position++):a=!1}L(e,"unexpected end of the stream within a flow collection")}function Un(e,t,i){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!ot(e.input.charCodeAt(e.position+1)))return!1;for(Vn(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,Ge.BLOCK);e.input.charCodeAt(e.position)===45&&ot(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,L(e,"tab characters must not be used in indentation"));const n=e.line;e.position++;const r=$e(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&ot(e.input.charCodeAt(e.position+1))&&L(e,"bad indentation of a sequence entry"),r&&e.lineIndent<=t?Be(e):Jt(e,t,Mn,!1,!0),$e(e,!0),e.lineIndent<t||e.position>=e.length)break;e.lineIndent>t&&L(e,"bad indentation of a sequence entry"),e.line===n&&e.input.charCodeAt(e.position)===45&&ot(e.input.charCodeAt(e.position+1))&&L(e,"bad indentation of a sequence entry")}return jt(e),!0}function on(e,t,i,n){let r=!1,o=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let l=e.input.charCodeAt(e.position);for(;l!==0;){!r&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,L(e,"tab characters must not be used in indentation"));const c=e.input.charCodeAt(e.position+1),d=e.line;if((l===63||l===58)&&ot(c))a||(zn(e,e.position,n.anchorStart,n.anchorEnd,n.tagStart,n.tagEnd,Ge.BLOCK),a=!0),l===63?(r&&Be(e),o=!0,r=!0):(r||(Be(e),o=!0),r=!1),e.position+=1,s=!0;else{r&&(Be(e),r=!1);const _=Ht(e);if(!Jt(e,i,Rn,!1,!0))break;if(e.line===d){for(l=e.input.charCodeAt(e.position);Kt(l);)l=e.input.charCodeAt(++e.position);if(l===58)l=e.input.charCodeAt(++e.position),ot(l)||L(e,"a whitespace character is expected after the key-value separator within a block mapping"),a||(e.events.splice(_.eventsLength,0,{type:we.MAPPING,start:_.position,anchorStart:n.anchorStart,anchorEnd:n.anchorEnd,tagStart:n.tagStart,tagEnd:n.tagEnd,style:Ge.BLOCK}),a=!0),o=!0,r=!1,s=!1;else if(o)L(e,"expected ':' after a mapping key");else return n.anchorStart!==U||n.tagStart!==U?(Ut(e,_),!1):!0}else if(o)L(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.anchorStart!==U||n.tagStart!==U?(Ut(e,_),!1):!0}if(Jt(e,t,Si,!0,s)&&(s=!1),r||s&&(Be(e),s=!1),$e(e,!0),l=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>t)&&l!==0)L(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return o?(r&&Be(e),a&&jt(e),!0):!1}function Jt(e,t,i,n,r,o=!0){var u,y;e.depth>=e.maxDepth&&L(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,l=!1,c=null;const d=qn();let _=i===Si||i===Mn,g=_;const x=_;if(n&&$e(e,!0)&&(s=!0,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1),a===1)for(;;){const v=e.input.charCodeAt(e.position),E=Ht(e);if(s&&a!==1&&(v===33||v===38))break;if(s&&x&&(d.tagStart!==U||d.anchorStart!==U)&&(v===33||v===38)){const p=Ht(e),f=t+1;if(on(e,e.position-e.lineStart,f,d)&&((u=e.events[p.eventsLength])==null?void 0:u.type)===we.MAPPING)return e.depth--,!0;Ut(e,p)}if(s&&(v===33&&d.tagStart!==U||v===38&&d.anchorStart!==U)||!Gs(e,d,i===qt)&&!js(e,d))break;c===null&&(c=E),$e(e,!0)?(s=!0,g=x,e.lineIndent>t?a=1:e.lineIndent===t?a=0:a=-1):g=!1}if(g&&(g=s||r),a===1||i===Si){const v=i===qt||i===Rn?t:t+1,E=e.position-e.lineStart;if(a===1)if(g&&(Un(e,E,d)||on(e,E,v,d))||Xs(e,v,d))l=!0;else{const p=e.input.charCodeAt(e.position);if(c!==null&&o&&x&&!g&&p!==124&&p!==62){const f=Ht(e),h=c.position-c.lineStart;Ut(e,c),on(e,h,v,qn())&&((y=e.events[f.eventsLength])==null?void 0:y.type)===we.MAPPING?l=!0:Ut(e,f)}!l&&(_&&Ys(e,v,d)||Us(e,v,d)||Ks(e,v,d)||Hs(e,d)||Qs(e,v,i,d))&&(l=!0)}else a===0&&(l=g&&Un(e,E,d))}return _=_&&!l,!l&&(d.anchorStart!==U||d.tagStart!==U||_)&&(Gt(e,U,U,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,O.PLAIN),l=!0),e.depth--,l||d.anchorStart!==U||d.tagStart!==U}function Zs(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ke(e.input.charCodeAt(e.position));)e.position++;const i=e.input.slice(t,e.position),n=[];for(i.length===0&&L(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!be(e.input.charCodeAt(e.position));){for(;Kt(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||be(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const r=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Ke(e.input.charCodeAt(e.position));)e.position++;n.push(e.input.slice(r,e.position))}if(be(e.input.charCodeAt(e.position))&&Ci(e),i==="YAML"){e.directives.some(o=>o.kind==="yaml")&&L(e,"duplication of %YAML directive"),n.length!==1&&L(e,"YAML directive accepts exactly one argument");const r=/^([0-9]+)\.([0-9]+)$/.exec(n[0]);r===null&&L(e,"ill-formed argument of the YAML directive"),parseInt(r[1],10)!==1&&L(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:n[0]})}else if(i==="TAG"){n.length!==2&&L(e,"TAG directive accepts exactly two arguments");const[r,o]=n;On.test(r)||L(e,"ill-formed tag handle (first argument) of the TAG directive"),Pn.call(e.tagHandlers,r)&&L(e,`there is a previously declared suffix for "${r}" tag handle`),Ms.test(o)||L(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[r]=o,e.directives.push({kind:"tag",handle:r,prefix:o})}return!0}function el(e){e.directives=[],e.tagHandlers=Object.create(null);let t=!1;for($e(e,!0);Zs(e);)t=!0,$e(e,!0);let i=!1,n=!1,r=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&ot(e.input.charCodeAt(e.position+3))){i=!0;const s=e.line;e.position+=3,$e(e,!0),r=e.line>s}else t&&L(e,"directives end mark is expected");const o=e.events.length;if(!i&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&Yt(e)){e.position+=3,$e(e,!0);return}if(Os(e,i,!1),Jt(e,e.lineIndent-1,Si,!1,r,r)||Be(e),$e(e,!0),e.position===e.lineStart&&Yt(e)&&(n=e.input.charCodeAt(e.position)===46,n)){const s=e.line;e.position+=3,$e(e,!0),e.line===s&&e.position<e.length&&L(e,"end of the stream or a document separator is expected")}const a=e.events[o];(a==null?void 0:a.type)===we.DOCUMENT&&(a.explicitEnd=n),jt(e),!n&&e.position<e.length&&!nn(e)&&L(e,"end of the stream or a document separator is expected")}function tl(e,t){const i=e.length,n={...tn,...t,input:`${e}\0`,length:i,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},r=e.indexOf("\0");for(r!==-1&&ht.throwAt(e,r,"null byte is not allowed in input",n.filename);n.position<n.length&&(Gn(n),$e(n,!0),!(n.position>=n.length));){const o=n.position;el(n),n.position===o&&L(n,"can not read a document")}return n.events}var il={...tn,...Qi};function nl(e,t={}){const i={...il,...t},n=String(e),r=Object.keys(tn),o=Object.keys(Qi);return Ls(tl(n,Gi(i,r)),{...Gi(i,o),source:n})}function rl(e,t){const i=nl(e,t);if(i.length===0)throw new ht("expected a document, but the input is empty");if(i.length===1)return i[0];throw new ht("expected a single document in the stream, but found more")}var $t=Symbol("INVALID");function ol(e){const t=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(o=>o!==void 0)),i=e.implicitScalarTags,n=e.tags.filter(o=>!(o.nodeKind==="scalar"&&o.implicit)&&!t.has(o)),r=e.tags.filter(o=>t.has(o));return[...i.map(o=>({tag:o,implicitTag:!0})),...n.map(o=>({tag:o,implicitTag:!1})),...r.map(o=>({tag:o,implicitTag:!0}))]}function al(e,t){for(let i=0,n=e.representTypes.length;i<n;i+=1){const{tag:r,implicitTag:o}=e.representTypes[i];if(r.identify(t)){let a;return r.matchByTagPrefix?a=r.representTagName(t):a=r.tagName,{tag:r,tagName:a,implicitTag:o}}}return null}function ri(e,t){if(!e.noRefs&&t!==null&&typeof t=="object"){const c=e.refs.get(t);if(c)return c.anchor===void 0&&(c.anchor=`ref_${e.refCounter++}`),{kind:"alias",anchor:c.anchor}}const i=al(e,t);if(!i){if(t===void 0||e.skipInvalid)return $t;throw new ht(`unacceptable kind of an object to dump ${Object.prototype.toString.call(t)}`)}const{tag:n,tagName:r,implicitTag:o}=i,a=o?r:Tn(r);if(n.nodeKind==="scalar")return{kind:"scalar",tag:a,tagged:!o,style:O.PLAIN,value:n.represent(t)};if(n.nodeKind==="sequence"){const c=n.represent(t),d={kind:"sequence",tag:a,tagged:!o,style:Ge.BLOCK,items:[]};e.noRefs||e.refs.set(t,d);for(let _=0,g=c.length;_<g;_+=1){let x=ri(e,c[_]);x===$t&&c[_]===void 0&&(x=ri(e,null)),x!==$t&&d.items.push(x)}return d}const s=n.represent(t),l={kind:"mapping",tag:a,tagged:!o,style:Ge.BLOCK,items:[]};e.noRefs||e.refs.set(t,l);for(const[c,d]of s){const _=ri(e,c);if(_===$t)continue;const g=ri(e,d);g!==$t&&l.items.push({key:_,value:g})}return l}function sl(e,t,i={}){const n=ri({representTypes:ol(t),noRefs:i.noRefs??!1,skipInvalid:i.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:n===$t?null:n,directives:[]}]}var ll=Symbol("visit:break"),Kn=Symbol("visit:skip");function $i(e,t,i){const n=t(e,i);if(n===ll)return!0;if(n===Kn)return!1;const r=i.depth+1;switch(e.kind){case"sequence":for(const o of e.items)if($i(o,t,{depth:r,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:o,value:a}of e.items)if($i(o,t,{depth:r,parent:e,isKey:!0})||$i(a,t,{depth:r,parent:e,isKey:!1}))return!0}return!1}function Yn(e,t){for(const i of e)if(i.contents&&$i(i.contents,t,{depth:0,parent:null,isKey:!1}))return}function Ii(e,t){return(e&1<<t)!==0}var Jn={applyQuoteFlowKeysOption:dl,doubleQuoteForInvisibles:cl,doubleQuoteWhitespaceOnly:pl,applyForceQuotesOption:fl,tryLongOrMultilineAsBlock:hl,quoteInvalidPlain:gl,fallbackToDoubleQuoted:ul};function Qn(e){return e.presenterOptions.quoteStyle==="single"&&Ii(e.allowedStylesMask,O.SINGLE_QUOTED)?O.SINGLE_QUOTED:O.DOUBLE_QUOTED}function dl(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==O.PLAIN||(e.style=O.DOUBLE_QUOTED))}function cl(e){e.style===O.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=O.DOUBLE_QUOTED)}function pl(e){e.style===O.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=O.DOUBLE_QUOTED)}function fl(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==O.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?O.DOUBLE_QUOTED:Qn(e)))}function hl(e){if(e.style!==O.PLAIN||e.isKey)return;const t=e.node.value,i=t.indexOf(`
`)!==-1;if(!Ii(e.allowedStylesMask,O.LITERAL_BLOCK)){i&&(e.style=O.DOUBLE_QUOTED);return}const n=e.presenterOptions.lineWidth;if(n===-1){i&&(e.style=O.LITERAL_BLOCK);return}const r=Math.max(Math.min(n,40),n-e.shiftOfContent);let o=0,a=!1;for(;o<=t.length;){let s=t.length;const l=t.indexOf(`
`,o);l!==-1&&(s=l);const c=t.slice(o,s);if(c.length>r&&c[0]!==" "&&/ [^ \t]/.test(c)&&(a=!0),l===-1)break;o=l+1}a?e.style=O.FOLDED_BLOCK:i&&(e.style=O.LITERAL_BLOCK)}function gl(e){e.style===O.PLAIN&&!Ii(e.allowedStylesMask,O.PLAIN)&&(e.style=Qn(e))}function ul(e){Ii(e.allowedStylesMask,e.style)||(e.style=O.DOUBLE_QUOTED)}function oi(e,t){return e|1<<t}var _l="[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]",yl="[\\n\\r]",bl="\\uFEFF",an="[ \\t]",Xn=`(?:(?!(?:${yl}|${bl}))${_l})`,Ti=`(?:(?!${an})${Xn})`,Zn="[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]",er="[-?:,\\[\\]{}#&*!|>'\"%@`]",ml="[,\\[\\]{}]",sn=Ti,ln=`(?:(?!${ml})${Ti})`,vl=`(?:(?:(?!${er})${Ti})|[?:-](?=${sn}))`,xl=`(?:(?:(?!${er})${Ti})|[?:-](?=${ln}))`,tr=`(?:(?:(?![:#])${sn})|:(?=${sn}))#*`,ir=`(?:(?:(?![:#])${ln})|:(?=${ln}))#*`,nr=`(?:${an}*${tr})*`,rr=`(?:${an}*${ir})*`,or=`${vl}#*${nr}`,ar=`${xl}#*${rr}`,wl=or,El=ar,kl=`\\n+${tr}${nr}`,Sl=`\\n+${ir}${rr}`,Cl=`${or}(?:${kl})*`,$l=`${ar}(?:${Sl})*`,Il=new RegExp(`^(?:${Cl})$`,"u"),Tl=new RegExp(`^(?:${$l})$`,"u"),Bl=new RegExp(`^(?:${wl})$`,"u"),Nl=new RegExp(`^(?:${El})$`,"u"),Ll=new RegExp(`^(?:${Zn})*$`,"u"),Al=new RegExp(`^(?:${Zn}|\\n)*$`,"u"),Fl=new RegExp(`^(?:${Xn}|\\n)*$`,"u"),Pl=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/,dn=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function Rl(e){const t=e.node.value;if(t!==""){if(!(e.isKey?e.flowOnly?Nl:Bl:e.flowOnly?Tl:Il).test(t)||e.shiftOfFirstLine===0&&Pl.test(t))return!1;if(e.shiftOfContent===0){const n=t.indexOf(`
`);if(n!==-1){const r=t.slice(n+1);if(dn.test(r))return!1}}}const i=e.presenterOptions.schema.resolveImplicitScalarTag(t).tag.tagName;return!(!e.node.tagged&&i!==e.node.tag||!e.node.tagged&&t==="="&&i===e.presenterOptions.schema.defaultScalarTag.tagName)}function Ml(e){const t=e.node.value;if(!(e.isKey?Ll:Al).test(t)||/[ \t]\n|\n[ \t]/.test(t))return!1;if(!e.isKey&&e.shiftOfContent===0){const i=t.indexOf(`
`);if(i!==-1&&dn.test(t.slice(i+1)))return!1}return!0}function Ol(e){if(e.flowOnly||!Fl.test(e.node.value))return!1;const t=e.shiftOfContent-e.shiftOfParent;return!(t<1||t>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&dn.test(e.node.value))}function Dl(e){let t=oi(0,O.DOUBLE_QUOTED);Rl(e)&&(t=oi(t,O.PLAIN)),Ml(e)&&(t=oi(t,O.SINGLE_QUOTED)),Ol(e)&&(t=oi(oi(t,O.LITERAL_BLOCK),O.FOLDED_BLOCK)),e.allowedStylesMask=t}function Vl(e){switch(e.style){case O.PLAIN:return zl(e);case O.SINGLE_QUOTED:return Wl(e);case O.LITERAL_BLOCK:return ql(e);case O.FOLDED_BLOCK:return Gl(e);case O.DOUBLE_QUOTED:return jl(e)}}function zl(e){return sr(e.node.value,e.shiftOfContent)}function Wl(e){return`'${sr(e.node.value,e.shiftOfContent).replace(/'/g,"''")}'`}function ql(e){const t=e.node.value;return"|"+dr(t,e.shiftOfParent,e.shiftOfContent)+cr(lr(t,e.shiftOfContent))}function Gl(e){const t=e.node.value,i=e.presenterOptions.lineWidth;let n=1/0;return i!==-1&&(n=Math.max(Math.min(i,40),i-e.shiftOfContent)),">"+dr(t,e.shiftOfParent,e.shiftOfContent)+cr(lr(Ul(t,n),e.shiftOfContent))}function jl(e){return`"${Jl(e.node.value)}"`}function sr(e,t){let i=e.indexOf(`
`);if(i===-1)return e;const n=" ".repeat(t);let r=e.slice(0,i);const o=/(\n+)([^\n]*)/g;o.lastIndex=i;let a;for(;a=o.exec(e);){const s=a[1].length,l=a[2];r+=`
`.repeat(s+1)+n+l}return r}function lr(e,t){const i=" ".repeat(t);let n=0,r="";const o=e.length;for(;n<o;){let a;const s=e.indexOf(`
`,n);s===-1?(a=e.slice(n),n=o):(a=e.slice(n,s+1),n=s+1),a.length&&a!==`
`&&(r+=i),r+=a}return r}function Hl(e){return/^\n* /.test(e)}function dr(e,t,i){const n=Hl(e)?String(i-t):"",r=e[e.length-1]===`
`;return`${n}${r&&(e[e.length-2]===`
`||e===`
`)?"+":r?"":"-"}
`}function cr(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function cn(e){return e===" "||e==="	"}function pr(e,t){if(e===""||cn(e[0]))return e;const i=/ [^ \t]/g;let n,r=0,o,a=0,s=0,l="";for(;n=i.exec(e);)s=n.index,s-r>t&&(o=a>r?a:s,l+=`
${e.slice(r,o)}`,r=o+1),a=s;return l+=`
`,e.length-r>t&&a>r?l+=`${e.slice(r,a)}
${e.slice(a+1)}`:l+=e.slice(r),l.slice(1)}function Ul(e,t){const i=/(\n+)([^\n]*)/g;let n=e.indexOf(`
`);n===-1&&(n=e.length),i.lastIndex=n;let r=pr(e.slice(0,n),t),o=e[0]===`
`||cn(e[0]),a,s;for(;s=i.exec(e);){const l=s[1],c=s[2];a=c!==""&&cn(c[0]),r+=l+(!o&&!a&&c!==""?`
`:"")+pr(c,t),o=a}return r}var Kl=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function Yl(e){switch(e){case"\0":return"\\0";case"\x07":return"\\a";case"\b":return"\\b";case"	":return"\\t";case`
`:return"\\n";case"\v":return"\\v";case"\f":return"\\f";case"\r":return"\\r";case"\x1B":return"\\e";case'"':return'\\"';case"\\":return"\\\\";case"":return"\\N";case" ":return"\\_";case"\u2028":return"\\L";case"\u2029":return"\\P"}const t=e.charCodeAt(0),i=t.toString(16).toUpperCase();return t<=255?`\\x${"0".repeat(2-i.length)}${i}`:`\\u${"0".repeat(4-i.length)}${i}`}function Jl(e){return e.replace(Kl,Yl)}var Bi=10,pn={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,scalarStyleRules:Object.keys(Jn).map(e=>Reflect.get(Jn,e)),tagBeforeAnchor:!1};function Ql(e){return e.tagged?e.tag:Tn(e.tag)}function Xl(e){const t={...pn,...e};return t.flowSkipColonSpace&&(t.quoteFlowKeys=!0),{...t,defaultScalarTagName:t.schema.defaultScalarTag.tagName,openEnded:!1}}function fn(e,t){return`
${" ".repeat(e.indent*t)}`}function Zl(e,t,i,n,r,o){return{node:t,parent:i,level:n,isKey:r,flowOnly:o,shiftOfParent:n===0?-1:e.indent*(n-1),shiftOfContent:e.indent*Math.max(1,n),shiftOfFirstLine:n===0?0:e.indent*n,presenterOptions:e,allowedStylesMask:0,style:t.style}}function ed(e,t,i){let n="";for(let o=0,a=i.items.length;o<a;o+=1){const s=at(e,t,i.items[o],i,{}).text;o>0&&(n+=`,${e.flowSkipCommaSpace?"":" "}`),n+=s}const r=e.flowBracketPadding&&i.items.length>0?" ":"";return`[${r}${n}${r}]`}function fr(e,t,i,n){let r="";for(let o=0,a=i.items.length;o<a;o+=1){const s=at(e,t+1,i.items[o],i,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!n||r!=="")&&(r+=fn(e,t)),s===""||Bi===s.charCodeAt(0)?r+="-":r+="- ",r+=s}return r}function td(e,t,i){let n="";for(const{key:o,value:a}of i.items){let s="";n!==""&&(s+=`,${e.flowSkipCommaSpace?"":" "}`);const l=at(e,t,o,i,{iskey:!0}),c=l.text,d=at(e,t,a,i,{}).text,_=e.flowSkipColonSpace||d===""?"":" ",g=o.kind==="scalar"&&l.noBody&&(o.tagged||o.anchor!==void 0),x=o.kind==="alias"||g?" ":"";s+=`${c}${x}:${_}${d}`,n+=s}const r=e.flowBracketPadding&&n!==""?" ":"";return`{${r}${n}${r}}`}function id(e,t,i,n){let r="";for(let o=0,a=i.items.length;o<a;o+=1){let s="";(!n||r!=="")&&(s+=fn(e,t));const{key:l,value:c}=i.items[o],d=(l.kind==="mapping"||l.kind==="sequence")&&l.style===Ge.BLOCK&&l.items.length!==0||l.kind==="scalar"&&(l.style===O.LITERAL_BLOCK||l.style===O.FOLDED_BLOCK),_=d?at(e,t+1,l,i,{block:!0,compact:!0,isblockseq:!hn(e,l,t+1)}):at(e,t+1,l,i,{block:!0,compact:!0,iskey:!0}),g=_.text,x=l.kind==="scalar"&&l.value.indexOf(`
`)!==-1,u=g.length>1024&&/^[\s\S]{1025}/u.test(g),y=d||x||u;y&&(g&&Bi===g.charCodeAt(0)?s+="?":s+="? "),s+=g,y&&(s+=fn(e,t));const v=at(e,t+1,c,i,{block:!0,compact:y,isblockseq:y&&!hn(e,c,t+1)}).text,E=l.kind==="scalar"&&_.noBody&&(l.tagged||l.anchor!==void 0),p=!y&&(l.kind==="alias"||E)?" ":"";v===""||Bi===v.charCodeAt(0)?s+=`${p}:`:s+=`${p}: `,s+=v,r+=s}return r}function hn(e,t,i){return t.kind==="alias"?!0:t.tagged||t.anchor!==void 0||e.indent<2&&i>0}function at(e,t,i,n,r){if(i.kind==="alias")return e.openEnded=!1,{text:`*${i.anchor}`,noBody:!1};const{block:o=!1,iskey:a=!1,isblockseq:s=!1}=r;let l=r.compact??!1;const c=i.anchor!==void 0;hn(e,i,t)&&(l=!1);let d,_=i.tagged;const g=o&&(i.kind==="mapping"||i.kind==="sequence")&&i.style===Ge.BLOCK&&i.items.length!==0;if(i.kind==="mapping")g?d=id(e,t,i,l):d=td(e,t,i);else if(i.kind==="sequence")g?e.seqNoIndent&&!s&&t>0?d=fr(e,t-1,i,l):d=fr(e,t,i,l):d=ed(e,t,i);else{const y=Zl(e,i,n,t,a,!o);Dl(y);for(const v of e.scalarStyleRules)v(y);d=Vl(y),e.openEnded=(y.style===O.LITERAL_BLOCK||y.style===O.FOLDED_BLOCK)&&(i.value===`
`||i.value.endsWith(`

`)),_=i.tagged||d===""&&y.flowOnly&&(n==null?void 0:n.kind)==="sequence"&&!c||y.style!==O.PLAIN&&i.tag!==e.defaultScalarTagName}(i.kind==="mapping"||i.kind==="sequence")&&!g&&(e.openEnded=!1),g&&l&&t>0&&e.indent>2&&(d=`${" ".repeat(e.indent-2)}${d}`);const x=d==="";let u=d;if(_||c){const y=[],v=_?Ql(i):null,E=c?`&${i.anchor}`:null;e.tagBeforeAnchor?(v!==null&&y.push(v),E!==null&&y.push(E)):(E!==null&&y.push(E),v!==null&&y.push(v));const p=d===""||d.charCodeAt(0)===Bi?"":" ";u=`${y.join(" ")}${p}${d}`}return{text:u,noBody:x}}function nd(e){return(e.kind==="sequence"||e.kind==="mapping")&&e.style===Ge.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function rd(e){let t="";for(const i of e.directives){if(i.kind==="yaml"){t+=`%YAML ${i.version}
`;continue}const{handle:n,prefix:r}=i;t+=`%TAG ${n} ${r}
`}return t}function od(e,t){const i=Xl(t);let n="",r=!1;for(let o=0;o<e.length;o+=1){const a=e[o];i.openEnded=!1;const s=rd(a),l=s!=="",c=a.explicitStart||l||o>0&&!r;if(n+=s,a.contents===null)c&&(n+=`---
`);else if(c){const d=at(i,0,a.contents,null,{block:!0,compact:!0}).text,_=d===""?"":l||nd(a.contents)?`
`:" ";n+=`---${_}${d}
`}else n+=at(i,0,a.contents,null,{block:!0,compact:!0}).text+`
`;r=a.explicitEnd||i.openEnded,r&&(n+=`...
`)}return n}var ad={...pn,schema:gs,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}};function sd(e,t){const i=String(e),n=String(t);return i<n?-1:i>n?1:0}function ld(e,t={}){const i={...ad,...t},n=sl(e,i.schema,{noRefs:i.noRefs,skipInvalid:i.skipInvalid});if(i.flowLevel>=0&&Yn(n,(r,o)=>{if(!(o.depth<i.flowLevel))return(r.kind==="sequence"||r.kind==="mapping")&&(r.style=Ge.FLOW),Kn}),i.sortKeys){const r=i.sortKeys===!0?sd:i.sortKeys;Yn(n,o=>{o.kind==="mapping"&&o.items.sort((a,s)=>r(a.key.kind==="scalar"?a.key.value:"",s.key.kind==="scalar"?s.key.value:""))})}return i.transform(n),od(n,{...Gi(i,Object.keys(pn)),schema:i.schema})}console.info("%c⚡ Energy Station Panel v1.4.8 Loaded ⚡","background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");class hr extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._hass=null,this._config=null,this._isDrawerOpen=!1,this._scale=1,this._cardNode=null,this._editorNode=null,this._hasAttemptedAutoImport=!1}set hass(t){this._hass=t,this._cardNode&&(this._cardNode.hass=t),this._editorNode&&(this._editorNode.hass=t),this._updateHaStatusBadge(),this._hasAttemptedAutoImport||(this._hasAttemptedAutoImport=!0,this._autoDiscoverLovelaceConfig())}connectedCallback(){this._loadConfig(),this._render(),this._bindEvents(),this._hass&&(this._cardNode&&(this._cardNode.hass=this._hass),this._editorNode&&(this._editorNode.hass=this._hass)),setTimeout(()=>{this._cardNode&&typeof this._cardNode._updateFlowPaths=="function"&&this._cardNode._updateFlowPaths()},120)}_loadConfig(){try{const t=localStorage.getItem("energy_station_app_config");t&&(this._config=JSON.parse(t))}catch{}this._config||(this._config=JSON.parse(JSON.stringify(G))),this._config.appearance||(this._config.appearance=JSON.parse(JSON.stringify(G.appearance||{font_family:"Inter",mono_font_family:"JetBrains Mono",power_font_size:"normal",label_font_size:"normal",theme_preset:"cyber_dark",density:"balanced",glow_intensity:"high"}))),this._scale=this._config.card_scale||1}_saveConfig(){try{typeof localStorage<"u"&&localStorage.setItem("energy_station_app_config",JSON.stringify(this._config))}catch{}this._cardNode&&this._cardNode.setConfig(this._config)}_updateCardConfig(){this._cardNode&&this._cardNode.setConfig(this._config),this._editorNode&&this._editorNode.setConfig(this._config),this._saveConfig()}async _autoDiscoverLovelaceConfig(){var t,i,n,r;if(this._hass)try{const o=localStorage.getItem("energy_station_app_config");if(o){const a=JSON.parse(o);if((n=(i=(t=a.solar)==null?void 0:t.strings)==null?void 0:i[0])!=null&&n.voltage_entity&&((r=a.inverter)!=null&&r.voltage_entity))return}await this._importFromLovelace(!1)}catch(o){console.warn("Lovelace auto-import skipped:",o)}}async _importFromLovelace(t=!0){var i,n;if(!this._hass){t&&alert("Немає підключення до Home Assistant");return}try{const r=[],o=a=>{for(const s of a||[])if(s.cards){for(const l of s.cards)if(l.type&&(l.type==="custom:energy-station-card"||l.type.includes("energy-station-card"))&&r.push(l),l.cards&&Array.isArray(l.cards))for(const c of l.cards)c.type&&(c.type==="custom:energy-station-card"||c.type.includes("energy-station-card"))&&r.push(c)}};try{const a=await this._hass.callWS({type:"lovelace/config"});o(a==null?void 0:a.views)}catch{}if(r.length===0&&this._hass.panels){const a=Object.values(this._hass.panels).filter(s=>s.component_name==="lovelace");for(const s of a)if(s.url_path&&s.url_path!=="energy-station")try{const l=await this._hass.callWS({type:"lovelace/config",url_path:s.url_path});if(o(l==null?void 0:l.views),r.length>0)break}catch{}}if(r.length>0){const a=r[0],s=JSON.parse(JSON.stringify(a));delete s.type,s.appearance={...G.appearance,...((i=this._config)==null?void 0:i.appearance)||{},...s.appearance||{}},this._config=s,this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно перенесено всі ваші налаштування (інвертор, PV, АКБ, бойлер) з дашборду Lovelace!");return}if(typeof window<"u"&&((n=window.parent)!=null&&n.document)){const a=window.parent.document.querySelectorAll("energy-station-card");for(const s of a)if(s!==this._cardNode&&s._config){this._config=JSON.parse(JSON.stringify(s._config)),this._saveConfig(),this._render(),this._bindEvents(),t&&alert("✓ Успішно скопійовано конфігурацію з відкритої картки на дашборді!");return}}t&&alert('Не знайдено збереженої картки на дашборді. Ви можете вставити конфігурацію вручну через кнопку "Вставити YAML / JSON".')}catch(r){console.error("Import from Lovelace error:",r),t&&alert("Помилка імпорту: "+r.message)}}_render(){var n;const t=this._config,i=t.appearance;this.shadowRoot.innerHTML=`
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
          display: block;
          transition: margin-right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        energy-station-card,
        #stationCard {
          display: block;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* SETTINGS DRAWER OVERLAY */
        .panel-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
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
          width: 660px;
          max-width: 96vw;
          height: 100vh;
          background: #090f1d;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: -15px 0 35px rgba(0, 0, 0, 0.85);
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
          background: rgba(14, 23, 42, 0.95);
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

        /* DRAWER BODY */
        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px 20px;
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
          padding: 14px 20px;
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

        /* YAML IMPORT / EXPORT MODAL */
        .panel-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          z-index: 120;
          display: none;
          align-items: center;
          justify-content: center;
        }
        .panel-modal-backdrop.active {
          display: flex;
        }

        .panel-modal-box {
          background: #090f1d;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          width: 680px;
          max-width: 95vw;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .panel-modal-header {
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(14, 23, 42, 0.95);
        }

        .panel-modal-body {
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        textarea.code-area {
          width: 100%;
          height: 340px;
          background: #050a14;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #38bdf8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 12px;
          outline: none;
          resize: vertical;
          box-sizing: border-box;
          line-height: 1.4;
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
              <span class="panel-brand-badge">PRO APP v1.4.8</span>
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
            ${t.theme_mode==="light"?"☀️ Світла":((n=t.appearance)==null?void 0:n.theme_preset)==="oled_black"?"⬛ OLED":"🌙 Темна"}
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

        <!-- DRAWER BODY -->
        <div class="drawer-body">

          <!-- TOOLBAR: ONE-CLICK LOVELACE MIGRATION & YAML IMPORT -->
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <button class="panel-pill-btn" id="btnSyncFromLovelace" style="background: rgba(2, 132, 199, 0.2); border-color: #38bdf8; color: #38bdf8; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📥</span>
              <span>Перенести налаштування з дашборду Lovelace</span>
            </button>
            <button class="panel-pill-btn" id="btnOpenYamlModal" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); color: #fbbf24; font-weight: 700; padding: 8px 14px; flex: 1 1 auto; justify-content: center;">
              <span>📋</span>
              <span>Вставити / Експорт YAML</span>
            </button>
          </div>

          <!-- SECTION 1: TYPOGRAPHY, SIZES & STYLES -->
          <div class="cfg-card">
            <div class="cfg-card-title">🎨 Шрифти, Розміри та Стилі</div>
            
            <!-- Font Family Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔤 Основний шрифт інтерфейсу:</div>
              <div class="font-tile-grid" id="mainFontGrid">
                <div class="font-tile ${i.font_family==="Inter"?"active":""}" data-val="Inter" style="font-family: 'Inter', sans-serif;">
                  <div class="font-tile-name">Inter</div>
                  <div class="font-tile-sample">Чистий гротеск</div>
                </div>
                <div class="font-tile ${i.font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">Моноширинний</div>
                </div>
                <div class="font-tile ${i.font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', sans-serif;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">Cyberpunk</div>
                </div>
                <div class="font-tile ${i.font_family==="Exo 2"?"active":""}" data-val="Exo 2" style="font-family: 'Exo 2', sans-serif;">
                  <div class="font-tile-name">Exo 2</div>
                  <div class="font-tile-sample">Технологічний</div>
                </div>
                <div class="font-tile ${i.font_family==="Roboto"?"active":""}" data-val="Roboto" style="font-family: 'Roboto', sans-serif;">
                  <div class="font-tile-name">Roboto</div>
                  <div class="font-tile-sample">Material</div>
                </div>
                <div class="font-tile ${i.font_family==="Ubuntu"?"active":""}" data-val="Ubuntu" style="font-family: 'Ubuntu', sans-serif;">
                  <div class="font-tile-name">Ubuntu</div>
                  <div class="font-tile-sample">Округлий</div>
                </div>
                <div class="font-tile ${i.font_family==="system-ui"?"active":""}" data-val="system-ui" style="font-family: system-ui;">
                  <div class="font-tile-name">Системний</div>
                  <div class="font-tile-sample">Рідний ОС</div>
                </div>
              </div>
            </div>

            <!-- Monospace Numbers Font -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🔢 Шрифт числових показників (кВт / V / A):</div>
              <div class="font-tile-grid" id="monoFontGrid">
                <div class="font-tile ${i.mono_font_family==="JetBrains Mono"?"active":""}" data-val="JetBrains Mono" style="font-family: 'JetBrains Mono', monospace;">
                  <div class="font-tile-name">JetBrains</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Orbitron"?"active":""}" data-val="Orbitron" style="font-family: 'Orbitron', monospace;">
                  <div class="font-tile-name">Orbitron</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Roboto Mono"?"active":""}" data-val="Roboto Mono" style="font-family: 'Roboto Mono', monospace;">
                  <div class="font-tile-name">Roboto Mono</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
                <div class="font-tile ${i.mono_font_family==="Fira Code"?"active":""}" data-val="Fira Code" style="font-family: 'Fira Code', monospace;">
                  <div class="font-tile-name">Fira Code</div>
                  <div class="font-tile-sample">3.500 кВт</div>
                </div>
              </div>
            </div>

            <!-- Power Value Size (Розмір цифр) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">📏 Розмір головних цифр потужності (кВт):</div>
              <div class="seg-btn-group" id="powerSizeSeg">
                <button class="seg-btn ${i.power_font_size==="compact"?"active":""}" data-val="compact">
                  <div>Компактний</div>
                  <div style="font-size: 10px; color: #64748b;">18px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="normal"||!i.power_font_size?"active":""}" data-val="normal">
                  <div>Стандартний</div>
                  <div style="font-size: 10px; color: #64748b;">22px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="large"?"active":""}" data-val="large">
                  <div>Великий</div>
                  <div style="font-size: 10px; color: #64748b;">28px</div>
                </button>
                <button class="seg-btn ${i.power_font_size==="huge"?"active":""}" data-val="huge">
                  <div>Гігантський</div>
                  <div style="font-size: 10px; color: #64748b;">34px (на стіну)</div>
                </button>
              </div>
            </div>

            <!-- Labels Font Size (Розмір підписів) -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🏷️ Розмір підписів блоків та статусів:</div>
              <div class="seg-btn-group" id="labelSizeSeg">
                <button class="seg-btn ${i.label_font_size==="compact"?"active":""}" data-val="compact">Дрібний (10px)</button>
                <button class="seg-btn ${i.label_font_size==="normal"||!i.label_font_size?"active":""}" data-val="normal">Звичайний (12px)</button>
                <button class="seg-btn ${i.label_font_size==="large"?"active":""}" data-val="large">Збільшений (14px)</button>
              </div>
            </div>

            <!-- Theme Preset Selection -->
            <div style="margin-bottom: 14px;">
              <div style="font-size: 11.5px; font-weight: 600; color: #cbd5e1; margin-bottom: 6px;">🌓 Колірна тема оформлення:</div>
              <div class="seg-btn-group" id="themePresetSeg">
                <button class="seg-btn ${i.theme_preset==="cyber_dark"||!i.theme_preset?"active":""}" data-val="cyber_dark">
                  🌙 Cyber Dark
                </button>
                <button class="seg-btn ${i.theme_preset==="oled_black"?"active":""}" data-val="oled_black">
                  ⬛ OLED True Black
                </button>
                <button class="seg-btn ${i.theme_preset==="clean_light"?"active":""}" data-val="clean_light">
                  ☀️ Clean Light
                </button>
              </div>
            </div>

            <!-- Zoom & Scale Slider -->
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11.5px; font-weight: 600; color: #cbd5e1;">🔍 Масштаб станції (Zoom / Scale):</span>
                <span id="lblCardScale" style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #38bdf8;">${Math.round(this._scale*100)}%</span>
              </div>
              <div class="slider-row">
                <input type="range" id="sliderCardScale" min="0.7" max="1.6" step="0.05" value="${this._scale}">
              </div>
            </div>
          </div>

          <!-- SECTION 2: COMPREHENSIVE CARD CONFIGURATION (ALL 100+ FIELDS) -->
          <div style="background: #0b1324; border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 12px; margin-top: 4px;">
            <div style="font-size: 13px; font-weight: 800; color: #38bdf8; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
              <span>⚡</span>
              <span>Повні параметри станції (Сенсори, Інвертор, PV, АКБ, Мережа, Дім, Тарифи):</span>
            </div>
            <energy-station-card-editor id="drawerCardEditor"></energy-station-card-editor>
          </div>

        </div>

        <!-- DRAWER FOOTER -->
        <div class="drawer-footer">
          <button class="btn-action-secondary" id="btnCancelDrawer">Закрити</button>
          <button class="btn-action-primary" id="btnSaveDrawer">✓ Зберегти зміни</button>
        </div>
      </aside>

      <!-- YAML / JSON MODAL -->
      <div class="panel-modal-backdrop" id="yamlModal">
        <div class="panel-modal-box">
          <div class="panel-modal-header">
            <span style="font-weight: 800; color: #38bdf8; font-size: 14px;">📋 Вставити або скопіювати YAML / JSON</span>
            <button class="drawer-close-btn" id="btnCloseYamlModal">✕</button>
          </div>
          <div class="panel-modal-body">
            <span style="font-size: 11.5px; color: #94a3b8;">
              Вставте конфігурацію картки (YAML або JSON) з коду Lovelace або скопіюйте поточну для резервної копії:
            </span>
            <textarea class="code-area" id="yamlCodeArea"></textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-top: 6px;">
              <button class="btn-action-secondary" id="btnCopyCurrentYaml">📋 Скопіювати поточну</button>
              <button class="btn-action-primary" id="btnApplyYaml">✓ Застосувати конфігурацію</button>
            </div>
          </div>
        </div>
      </div>
    `,this._cardNode=this.shadowRoot.getElementById("stationCard"),this._editorNode=this.shadowRoot.getElementById("drawerCardEditor"),this._cardNode&&(this._cardNode.setConfig(this._config),this._hass&&(this._cardNode.hass=this._hass)),this._editorNode&&(this._editorNode.setConfig(this._config),this._hass&&(this._editorNode.hass=this._hass))}_bindEvents(){var a,s,l,c,d,_,g,x,u,y,v,E,p,f,h;const t=this.shadowRoot;(a=t.getElementById("btnOpenDrawer"))==null||a.addEventListener("click",()=>this._openDrawer()),(s=t.getElementById("btnCloseDrawer"))==null||s.addEventListener("click",()=>this._closeDrawer()),(l=t.getElementById("btnCancelDrawer"))==null||l.addEventListener("click",()=>this._closeDrawer()),(c=t.getElementById("drawerBackdrop"))==null||c.addEventListener("click",()=>this._closeDrawer()),(d=t.getElementById("btnSaveDrawer"))==null||d.addEventListener("click",()=>{this._updateCardConfig(),this._closeDrawer(),alert("✓ Налаштування збережено!")}),(_=this._editorNode)==null||_.addEventListener("config-changed",w=>{var B;const k=w.detail.config;k.appearance={...G.appearance,...((B=this._config)==null?void 0:B.appearance)||{},...k.appearance||{}},this._config=k,this._cardNode&&this._cardNode.setConfig(this._config),this._saveConfig()}),(g=t.getElementById("btnZoomIn"))==null||g.addEventListener("click",()=>this._changeScale(this._scale+.1)),(x=t.getElementById("btnZoomOut"))==null||x.addEventListener("click",()=>this._changeScale(this._scale-.1)),(u=t.getElementById("btnFullscreen"))==null||u.addEventListener("click",()=>{var w,k,B;document.fullscreenElement?(B=document.exitFullscreen)==null||B.call(document):(k=(w=document.documentElement).requestFullscreen)==null||k.call(w)}),(y=t.getElementById("btnQuickTheme"))==null||y.addEventListener("click",()=>{var F;const w=["cyber_dark","oled_black","clean_light"],k=((F=this._config.appearance)==null?void 0:F.theme_preset)||"cyber_dark",B=(w.indexOf(k)+1)%w.length,P=w[B];this._config.appearance.theme_preset=P,this._config.theme_mode=P==="clean_light"?"light":"dark",this._updateCardConfig();const m=t.getElementById("btnQuickTheme");m&&(m.innerText=P==="clean_light"?"☀️ Світла":P==="oled_black"?"⬛ OLED":"🌙 Темна")}),(v=t.getElementById("btnSyncFromLovelace"))==null||v.addEventListener("click",()=>{this._importFromLovelace(!0)});const i=t.getElementById("yamlModal"),n=t.getElementById("yamlCodeArea");(E=t.getElementById("btnOpenYamlModal"))==null||E.addEventListener("click",()=>{if(i&&n){try{n.value=ld(this._config)}catch{n.value=JSON.stringify(this._config,null,2)}i.classList.add("active")}}),(p=t.getElementById("btnCloseYamlModal"))==null||p.addEventListener("click",()=>{i==null||i.classList.remove("active")}),(f=t.getElementById("btnCopyCurrentYaml"))==null||f.addEventListener("click",()=>{var w;n&&((w=navigator.clipboard)==null||w.writeText(n.value),alert("✓ Скопійовано в буфер обміну!"))}),(h=t.getElementById("btnApplyYaml"))==null||h.addEventListener("click",()=>{var w;if(n&&n.value.trim())try{const k=n.value.trim();let B=null;k.startsWith("{")?B=JSON.parse(k):B=rl(k),B&&typeof B=="object"&&(B.type&&delete B.type,B.appearance={...G.appearance,...((w=this._config)==null?void 0:w.appearance)||{},...B.appearance||{}},this._config=B,this._saveConfig(),this._render(),this._bindEvents(),i==null||i.classList.remove("active"),alert("✓ Конфігурацію успішно застосовано!"))}catch(k){alert("Помилка формату YAML / JSON: "+k.message)}}),t.querySelectorAll("#mainFontGrid .font-tile").forEach(w=>{w.addEventListener("click",()=>{t.querySelectorAll("#mainFontGrid .font-tile").forEach(k=>k.classList.remove("active")),w.classList.add("active"),this._config.appearance.font_family=w.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#monoFontGrid .font-tile").forEach(w=>{w.addEventListener("click",()=>{t.querySelectorAll("#monoFontGrid .font-tile").forEach(k=>k.classList.remove("active")),w.classList.add("active"),this._config.appearance.mono_font_family=w.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(w=>{w.addEventListener("click",()=>{t.querySelectorAll("#powerSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),w.classList.add("active"),this._config.appearance.power_font_size=w.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(w=>{w.addEventListener("click",()=>{t.querySelectorAll("#labelSizeSeg .seg-btn").forEach(k=>k.classList.remove("active")),w.classList.add("active"),this._config.appearance.label_font_size=w.dataset.val,this._updateCardConfig()})}),t.querySelectorAll("#themePresetSeg .seg-btn").forEach(w=>{w.addEventListener("click",()=>{t.querySelectorAll("#themePresetSeg .seg-btn").forEach(B=>B.classList.remove("active")),w.classList.add("active");const k=w.dataset.val;this._config.appearance.theme_preset=k,this._config.theme_mode=k==="clean_light"?"light":"dark",this._updateCardConfig()})});const r=t.getElementById("sliderCardScale"),o=t.getElementById("lblCardScale");r&&r.addEventListener("input",w=>{const k=parseFloat(w.target.value);o&&(o.innerText=`${Math.round(k*100)}%`),this._changeScale(k)})}_openDrawer(){var i,n;this._isDrawerOpen=!0;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.add("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.add("active")}_closeDrawer(){var i,n;this._isDrawerOpen=!1;const t=this.shadowRoot;(i=t.getElementById("settingsDrawer"))==null||i.classList.remove("active"),(n=t.getElementById("drawerBackdrop"))==null||n.classList.remove("active")}_changeScale(t){const i=Math.max(.65,Math.min(1.8,Math.round(t*100)/100));this._scale=i,this._config.card_scale=i;const n=this.shadowRoot.getElementById("txtZoomVal");n&&(n.innerText=`${Math.round(i*100)}%`),this._updateCardConfig()}_updateHaStatusBadge(){var i;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("haStatusText");if(t)if(this._hass){const n=Object.keys(this._hass.states||{}).length;t.innerText=`HA Live (${n} сенсорів)`}else t.innerText="Демо режим"}}console.info("%c⚡ Energy Station Card v1.4.8 Loaded ⚡","background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;");const gn={uk:{live_status:"HA Live",solar_yield_today:"Генерація сьогодні",total_pv:"СУМАРНО PV",inverter_title:"ГІБРИДНИЙ ІНВЕРТОР",inverter_working:"ПРАЦЮЄ",inverter_standby:"ОЧІКУВАННЯ",inverter_fault:"ПОМИЛКА",inverter_offline:"ВИМКНЕНО",inverter_self:"⚡ Власне:",grid_title:"Мережа",grid_import:"Імпорт",grid_export:"Експорт",grid_dir_import:"→ Імпорт",grid_dir_export:"← Експорт",grid_dir_off:"Вимкнено",grid_dir_idle:"Мережа",house_title:"Гарантоване",house_badge:"Будинок",bat_charge:"Заряд",bat_discharge:"Розряд",bat_dir_charge:"Заряд ↓",bat_dir_discharge:"Розряд ↑",bat_idle:"Очікування",wind_title:"Вітрогенерація",wind_day:"День:",wind_month:"Місяць:",wind_calm:"Штиль",wind_gen:"Генерація",aux_microinverter:"Мікроінвертор",aux_generator:"Генератор",aux_wind:"Вітрогенератор",aux_smart_load:"Smart Load",aux_source_gen:"Джерело → GEN port",subload_boiler:"Бойлер",subload_heat_pump:"Тепловий насос",subload_other:"Інше",settings_title:"Керування",theme_label:"Тема",theme_dark:"Темна",theme_light:"Світла",lang_label:"Мова",lang_uk:"УКР",lang_en:"ENG",bat_prefix:"Батарея",ctrl_title:"Контроль струму заряду акумулятора",ctrl_solar_charge:"Струм заряду АКБ від сонця",ctrl_sell_power:"Потужність Продажу",ctrl_grid_charge:"Струм заряду АКБ від мережі",tariff_night:"Ніч",tariff_day:"День",tariff_export:"Зелений тариф",tariff_cost:"Вартість",export_income:"Дохід від експорту",solar_saved:"Заощаджено",bat_delta:"Розбаланс",bat_remaining:"Залишок",edit_card:"Редагувати",kwh_unit:"кВт·год"},en:{live_status:"HA Live",solar_yield_today:"Today Yield",total_pv:"TOTAL PV",inverter_title:"HYBRID INVERTER",inverter_working:"WORKING",inverter_standby:"STANDBY",inverter_fault:"FAULT",inverter_offline:"OFFLINE",inverter_self:"⚡ Self:",grid_title:"Grid",grid_import:"Import",grid_export:"Export",grid_dir_import:"→ Import",grid_dir_export:"← Export",grid_dir_off:"Disconnected",grid_dir_idle:"Grid",house_title:"Essential Load",house_badge:"House",bat_charge:"Charge",bat_discharge:"Discharge",bat_dir_charge:"Charge ↓",bat_dir_discharge:"Discharge ↑",bat_idle:"Idle",wind_title:"Wind Generation",wind_day:"Day:",wind_month:"Month:",wind_calm:"Calm",wind_gen:"Generating",aux_microinverter:"Microinverter",aux_generator:"Generator",aux_wind:"Wind Turbine",aux_smart_load:"Smart Load",aux_source_gen:"Source → GEN port",subload_boiler:"Boiler",subload_heat_pump:"Heat Pump",subload_other:"Other",settings_title:"Controls",theme_label:"Theme",theme_dark:"Dark",theme_light:"Light",lang_label:"Language",lang_uk:"UA",lang_en:"EN",bat_prefix:"Battery",ctrl_title:"Battery Charge Current Control",ctrl_solar_charge:"Solar Charge Current",ctrl_sell_power:"Sell Power Limit",ctrl_grid_charge:"Grid Charge Current",tariff_night:"Night",tariff_day:"Day",tariff_export:"Feed-in Tariff",tariff_cost:"Cost",export_income:"Export Income",solar_saved:"Saved",bat_delta:"Cell Delta",bat_remaining:"Remaining",edit_card:"Edit",kwh_unit:"kWh"}};class gr extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._config=null,this._hass=null,this._initialized=!1,this._themeMode="dark",this._language="uk",this._scale=1,this._nodes={},this._resizeObserver=null}connectedCallback(){if(this._setupResizeObserver(),typeof sessionStorage<"u"&&sessionStorage.getItem("energy_station_auto_edit")==="1"){try{sessionStorage.removeItem("energy_station_auto_edit")}catch{}setTimeout(()=>this._openCardEditor(),350)}}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}_openCardEditor(){var n,r;let t=this,i=null;for(;t;){if(t.tagName&&(t.tagName.toLowerCase()==="hui-card-options"||t.tagName.toLowerCase()==="hui-card-edit-mode")){i=t;break}if(t.parentElement)t=t.parentElement;else if(t.parentNode)t=t.parentNode;else if(t.getRootNode&&t.getRootNode().host)t=t.getRootNode().host;else break}if(!i&&typeof document<"u"){const o=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const a of o)if(a.contains(this)||(n=a.shadowRoot)!=null&&n.contains(this)||o.length===1){i=a;break}}if(i){if(typeof i._editCard=="function"){i._editCard();return}const o=((r=i.shadowRoot)==null?void 0:r.querySelector("mwc-button, ha-button, button"))||i.querySelector("mwc-button, ha-button, button");if(o){o.click();return}if(i.path!==void 0){const a=new CustomEvent("ll-edit-card",{bubbles:!0,composed:!0,detail:{path:i.path}});i.dispatchEvent(a);return}}if(typeof window<"u"){try{typeof sessionStorage<"u"&&sessionStorage.setItem("energy_station_auto_edit","1")}catch{}const o=new URL(window.location.href);o.searchParams.has("edit")?setTimeout(()=>{var s,l;const a=document.querySelectorAll("hui-card-options, hui-card-edit-mode");for(const c of a)if(c.contains(this)||(s=c.shadowRoot)!=null&&s.contains(this)||a.length===1){if(typeof c._editCard=="function"){c._editCard();return}const d=((l=c.shadowRoot)==null?void 0:l.querySelector("mwc-button, ha-button, button"))||c.querySelector("mwc-button, ha-button, button");if(d){d.click();return}}},500):(o.searchParams.set("edit","1"),window.location.href=o.toString())}}static getConfigElement(){return document.createElement("energy-station-card-editor")}static getStubConfig(){return JSON.parse(JSON.stringify(G))}getCardSize(){return 6}setConfig(t){if(!t)throw new Error("Invalid configuration");const i=JSON.parse(JSON.stringify(t)),n=JSON.parse(JSON.stringify(G));this._config=this._deepMerge(n,i);const r=typeof localStorage<"u"?localStorage.getItem("energy_station_theme"):null;this._themeMode=r||this._config.theme_mode||"dark";const o=typeof localStorage<"u"?localStorage.getItem("energy_station_lang"):null;this._language=o||this._config.language||"uk";const a=typeof localStorage<"u"?localStorage.getItem("energy_station_scale"):null;this._scale=a?parseFloat(a):this._config.card_scale||this._config.scale||1,this._renderCardSkeleton(),this._hass&&this._updateValues()}_rAF(t){return typeof requestAnimationFrame<"u"?requestAnimationFrame(t):setTimeout(t,0)}_changeScale(t){var o,a;let i=typeof t=="number"?t:this._scale+(t||.1);i=Math.max(.7,Math.min(2,Math.round(i*100)/100)),this._scale=i,typeof localStorage<"u"&&localStorage.setItem("energy_station_scale",i.toString());const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".energy-station-container");n&&(n.style.setProperty("--es-card-scale",i.toString()),n.style.zoom=i.toString());const r=(a=this.shadowRoot)==null?void 0:a.getElementById("headerZoomVal");r&&(r.innerText=`${Math.round(i*100)}%`),this._rAF(()=>{this._updateFlowPaths(),setTimeout(()=>this._updateFlowPaths(),80)})}set hass(t){this._hass=t,this._initialized||this._renderCardSkeleton(),this._updateValues()}_deepMerge(t,i){const n=Array.isArray(t)?[...t]:Object.assign({},t);if(!i||typeof i!="object")return n;for(const r of Object.keys(i)){const o=i[r],a=t?t[r]:void 0;o&&typeof o=="object"&&!Array.isArray(o)?n[r]=this._deepMerge(a||{},o):n[r]=o}return n}_getEntityState(t){var s;if(!this._hass||!t||!this._hass.states[t])return null;const i=this._hass.states[t],r=String(i.state).trim().replace(",","."),o=parseFloat(r),a=((s=i.attributes)==null?void 0:s.unit_of_measurement)||"";return{raw:i.state,val:isNaN(o)?0:o,unit:a,attributes:i.attributes}}_t(t){var n,r;const i=this._language||"uk";return((n=gn[i])==null?void 0:n[t])||((r=gn.uk)==null?void 0:r[t])||t}_toggleTheme(t){const i=t||(this._themeMode==="light"?"dark":"light");this._themeMode=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_theme",i)}catch{}this._applyTheme()}_toggleLanguage(t){const i=t||(this._language==="en"?"uk":"en");this._language=i;try{typeof localStorage<"u"&&localStorage.setItem("energy_station_lang",i)}catch{}this._renderCardSkeleton(),this._hass&&this._updateValues()}_applyTheme(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".energy-station-container");if(!t)return;const i=this._themeMode==="light";t.classList.toggle("theme-light",i);const n=this.shadowRoot.getElementById("headerThemeToggle");n&&(n.innerHTML=i?"☀️":"🌙",n.setAttribute("title",i?this._t("theme_dark"):this._t("theme_light")));const r=this.shadowRoot.getElementById("btnThemeDark"),o=this.shadowRoot.getElementById("btnThemeLight");r&&o&&(r.classList.toggle("active",!i),o.classList.toggle("active",i))}_formatPower(t,i=0){const n=this._language==="en"?"kW":"кВт";if(!t)return{num:i.toFixed(3),kw:i,str:`${i.toFixed(3)} ${n}`};let r=t.val;return t.unit==="W"&&(r=r/1e3),{num:r.toFixed(3),kw:r,str:`${r.toFixed(3)} ${n}`}}_fireMoreInfo(t){if(!t)return;const i=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_renderCardSkeleton(){var l,c,d,_,g,x,u,y,v,E,p,f,h,w,k,B,P,m;const t=this._config||G;this._initialized=!0;const i=t.appearance||G.appearance||{},n={Inter:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif","JetBrains Mono":"'JetBrains Mono', monospace",Roboto:"'Roboto', sans-serif",Orbitron:"'Orbitron', sans-serif","Exo 2":"'Exo 2', sans-serif",Ubuntu:"'Ubuntu', sans-serif","system-ui":"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},r={"JetBrains Mono":"'JetBrains Mono', monospace","Roboto Mono":"'Roboto Mono', monospace",Orbitron:"'Orbitron', monospace","Fira Code":"'Fira Code', monospace","Share Tech Mono":"'Share Tech Mono', monospace"},o={compact:"18px",normal:"22px",large:"28px",huge:"34px"},a={compact:"10px",normal:"11.5px",large:"13.5px"},s={compact:"14px 18px",balanced:"22px 28px 24px 28px",spacious:"30px 36px"};this.shadowRoot.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&family=Orbitron:wght@500;700;900&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;600;700&family=Ubuntu:wght@400;500;700&display=swap');

        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          font-family: var(--es-font-family, ${n[i.font_family]||n.Inter});
          color: #e2e8f0;
          user-select: none;
          --es-bg: #050b14;
          --es-card-bg: #08101e;
          --es-border: rgba(255, 255, 255, 0.08);
          --flow-speed: ${((l=t.animations)==null?void 0:l.speed)||1.2}s;
          --es-power-font-size: ${o[i.power_font_size]||"22px"};
          --es-label-font-size: ${a[i.label_font_size]||"11.5px"};
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
          min-width: 280px;
          max-width: var(--es-card-max-width, ${t.max_width||"1400px"});
          margin: 0 auto;
          padding: ${s[i.density]||"22px 28px 24px 28px"};
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
          font-family: var(--es-mono-font-family, ${r[i.mono_font_family]||r["JetBrains Mono"]});
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
            <span>${t.title||"Energy Station"}</span>
            <span class="es-header-badge">PRO FLOW v1.4.8</span>
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
            <div style="width: 28px; height: 28px; color: #fbbf24; margin-bottom: 2px;">${le.sun}</div>
            <div class="es-mono" style="font-size: 17px; font-weight: 800; color: #fbbf24;">
              <span id="dailySolarYield">48,6</span> kWh <span style="color: #64748b;">/</span> <span id="targetSolarYield">${((c=t.solar)==null?void 0:c.target_daily_yield)||55}</span> kWh
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
            <div style="width: 20px; height: 20px; color: #fbbf24; margin-bottom: 1px;">${le.sun}</div>
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
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${le.grid_tower}</div>
              <div class="es-node-title">${this._t("grid_title")}</div>
              <div class="es-mono es-node-power" id="gridPowerVal" style="color: #38bdf8;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
              <div class="es-mono es-node-dir" id="gridDirectionLabel" style="color: #34d399;">${this._t("grid_dir_export")}</div>
            </div>

            <!-- 2. Non-essential Node (Негарантоване) -->
            <div class="es-schematic-node clickable-node ${(d=t.grid)!=null&&d.show_non_essential&&((_=t.grid)!=null&&_.non_essential_power_entity)?"":"hidden"}" id="nonEssentialNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${le.house_outline||le.house}</div>
              <div class="es-node-title">${this._t("non_essential")}</div>
              <div class="es-mono es-node-power" id="nonEssentialPowerVal" style="color: #38bdf8;">0.000 ${this._language==="en"?"kW":"кВт"}</div>
            </div>

            <!-- 3. Car Node (Авто) -->
            <div class="es-schematic-node clickable-node ${(g=t.grid)!=null&&g.show_car&&((x=t.grid)!=null&&x.car_power_entity)?"":"hidden"}" id="carNode" style="border-color: rgba(56, 189, 248, 0.25);">
              <div class="es-node-icon" style="color: #38bdf8; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${le.car}</div>
              <div class="es-node-title" id="carTitle">${((u=t.grid)==null?void 0:u.car_title)||this._t("car")}</div>
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
                  <div class="es-inverter-icon-box">${le.inverter}</div>
                  <div class="es-mono es-inverter-freq"><span id="inverterFreq">50,01</span> Hz</div>
                </div>
                <div class="es-inverter-title">${this._t("inverter_title")}</div>
                <div class="es-mono es-inverter-power" id="inverterPowerVal">8,000 ${this._language==="en"?"kW":"кВт"}</div>
                <div class="es-inverter-status-badge" id="inverterStatusBadge">${this._t("inverter_working")}</div>
                <div class="es-inverter-self-consumption es-mono" id="inverterSelfConsumptionBox" style="display: ${((y=t.inverter)==null?void 0:y.show_self_consumption)!==!1?"flex":"none"}; align-items: center; justify-content: center; gap: 4px; margin-top: 5px; padding: 2px 7px; border-radius: 6px; background: rgba(249, 115, 22, 0.12); border: 1px solid rgba(249, 115, 22, 0.35); font-size: 10px; color: #fdba74;">
                  <span style="color: #94a3b8;">${this._t("inverter_self")}</span>
                  <span id="inverterSelfConsumptionVal" style="font-weight: 700; color: #fb923c;">0 ${this._language==="en"?"W":"Вт"}</span>
                </div>
              </div>

              <!-- Right Telemetry: Voltage & Current -->
              <div class="es-inverter-side-telemetry right es-mono" id="inverterRightTelemetry">
                <!-- AUX Node (Microinverter / Generator moved here above telemetry to avoid animation collisions) -->
                <div class="es-aux-box glow-aux clickable-node ${((v=t.aux)==null?void 0:v.type)==="none"||((E=t.aux)==null?void 0:E.type)==="wind"?"hidden":""}" id="auxNode">
                  <div style="width: 22px; height: 22px; color: #c084fc; margin-bottom: 2px;" id="auxIconBox">
                    ${le[(p=t.aux)==null?void 0:p.type]||le.microinverter}
                  </div>
                  <div style="font-size: 11px; font-weight: 700; color: #cbd5e1; text-transform: uppercase;" id="auxTitle">${((f=t.aux)==null?void 0:f.type)==="microinverter"&&(!((h=t.aux)!=null&&h.title)||((w=t.aux)==null?void 0:w.title)==="Вітрогенератор")?this._t("aux_microinverter"):((k=t.aux)==null?void 0:k.title)||this._t("aux_microinverter")}</div>
                  <div class="es-mono" id="auxPowerVal" style="font-size: 16px; font-weight: 800; color: #c084fc; margin: 2px 0;">2,000 ${this._language==="en"?"kW":"кВт"}</div>
                  <div class="es-mono" style="font-size: 10px; color: rgba(216, 180, 254, 0.85);" id="auxSubtitle">${((B=t.aux)==null?void 0:B.subtitle)||this._t("aux_source_gen")}</div>
                </div>

                <div><span id="inverterVolt">231,45</span> V</div>
                <div><span id="inverterCurrent">8,60</span> A</div>
              </div>
            </div>

            <!-- WIND TURBINES STATION (Symmetrical Dual/Multi Pods) -->
            <div class="es-wind-station ${((P=t.wind)==null?void 0:P.show)===!1&&((m=t.aux)==null?void 0:m.type)!=="wind"?"hidden":""}" id="windStationContainer"></div>
          </div>

          <!-- RIGHT: ESSENTIAL HOUSE LOADS & SUBLOADS -->
          <div class="es-wing-right">
            <div class="es-mono" style="font-size: 13px; color: #cbd5e1; align-self: center; margin-bottom: 2px;">
              ${this._t("house_badge")} <span id="dailyHouseKwh" style="color: #22d3ee; font-weight: 700;">12,40 kWh</span>
            </div>

            <!-- Essential Loads Node (Гарантоване) -->
            <div class="es-schematic-node glow-load clickable-node" id="essentialNode" style="border-color: rgba(6, 182, 212, 0.4);">
              <div class="es-node-icon" style="color: #22d3ee; width: 24px; height: 24px; max-width: 24px; max-height: 24px; overflow: hidden; display: flex; align-items: center; justify-content: center;">${le.house}</div>
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
    `,this._cacheDomNodes(),this._renderDynamicPvPanels(),this._renderDynamicWindTurbines(),this._renderDynamicSubloads(),this._renderDynamicBatteryRack(),this._bindInteractions(),this._setupResizeObserver(),this._rAF(()=>this._updateFlowPaths())}_cacheDomNodes(){const t=this.shadowRoot;this._nodes={dailySolarYield:t.getElementById("dailySolarYield"),targetSolarYield:t.getElementById("targetSolarYield"),solarProgressBar:t.getElementById("solarProgressBar"),solarSavingsDaily:t.getElementById("solarSavingsDaily"),totalPvPowerBadge:t.getElementById("totalPvPowerBadge"),totalPvPowerVal:t.getElementById("totalPvPowerVal"),totalPvPercentBadge:t.getElementById("totalPvPercentBadge"),totalPvSubline:t.getElementById("totalPvSubline"),totalPvCapDetail:t.getElementById("totalPvCapDetail"),totalPvCapTotal:t.getElementById("totalPvCapTotal"),solarFlowCollector:t.getElementById("solarFlowCollector"),gridImportDaily:t.getElementById("gridImportDaily"),gridCostDailyRow:t.getElementById("gridCostDailyRow"),gridCostDailyVal:t.getElementById("gridCostDailyVal"),gridCostSplitVal:t.getElementById("gridCostSplitVal"),gridTariffBadge:t.getElementById("gridTariffBadge"),gridExportDaily:t.getElementById("gridExportDaily"),gridExportIncomeRow:t.getElementById("gridExportIncomeRow"),gridExportIncomeVal:t.getElementById("gridExportIncomeVal"),gridPowerVal:t.getElementById("gridPowerVal"),gridDirectionLabel:t.getElementById("gridDirectionLabel"),carPowerVal:t.getElementById("carPowerVal"),carNode:t.getElementById("carNode"),nonEssentialNode:t.getElementById("nonEssentialNode"),nonEssentialPowerVal:t.getElementById("nonEssentialPowerVal"),inverterAcTemp:t.getElementById("inverterAcTemp"),inverterDcTemp:t.getElementById("inverterDcTemp"),inverterModelTag:t.getElementById("inverterModelTag"),inverterPowerVal:t.getElementById("inverterPowerVal"),inverterStatusBadge:t.getElementById("inverterStatusBadge"),inverterSelfConsumptionBox:t.getElementById("inverterSelfConsumptionBox"),inverterSelfConsumptionVal:t.getElementById("inverterSelfConsumptionVal"),inverterVolt:t.getElementById("inverterVolt"),inverterCurrent:t.getElementById("inverterCurrent"),inverterFreq:t.getElementById("inverterFreq"),auxNode:t.getElementById("auxNode"),auxTitle:t.getElementById("auxTitle"),auxPowerVal:t.getElementById("auxPowerVal"),auxSubtitle:t.getElementById("auxSubtitle"),auxIconBox:t.getElementById("auxIconBox"),windStationContainer:t.getElementById("windStationContainer"),dailyHouseKwh:t.getElementById("dailyHouseKwh"),essentialPowerVal:t.getElementById("essentialPowerVal"),subloadsBusContainer:t.getElementById("subloadsBusContainer"),subloadsBusSvg:t.getElementById("subloadsBusSvg"),subloadsFlowCollector:t.getElementById("subloadsFlowCollector"),subloadsBusBase:t.getElementById("subloadsBusBase"),subloadsBusStemBase:t.getElementById("subloadsBusStemBase"),subloadsBusStemFlow:t.getElementById("subloadsBusStemFlow"),subloadsBusFeeders:t.getElementById("subloadsBusFeeders"),batChargeDaily:t.getElementById("batChargeDaily"),batDischargeDaily:t.getElementById("batDischargeDaily"),masterBatterySoc:t.getElementById("masterBatterySoc"),masterBatteryFlowHint:t.getElementById("masterBatteryFlowHint"),batVoltVal:t.getElementById("batVoltVal"),batCurrentVal:t.getElementById("batCurrentVal"),batMasterTempVal:t.getElementById("batMasterTempVal"),batMasterTempBadge:t.getElementById("batMasterTempBadge"),batReserveSoc:t.getElementById("batReserveSoc"),batReserveProgressBar:t.getElementById("batReserveProgressBar"),batCapacityVal:t.getElementById("batCapacityVal"),batteryFlowCollector:t.getElementById("batteryFlowCollector"),pvPanelsContainer:t.getElementById("pvPanelsContainer"),subloadsContainer:t.getElementById("subloadsContainer"),batteryRackContainer:t.getElementById("batteryRackContainer"),bottomControlsDock:t.getElementById("bottomControlsDock")}}_renderDynamicWindTurbines(){var l,c,d,_,g,x,u,y;const t=this._config||G,i=((l=this._nodes)==null?void 0:l.windStationContainer)||this.shadowRoot.getElementById("windStationContainer");if(!i)return;if(i.innerHTML="",!(((c=t.wind)==null?void 0:c.show)!==!1||((d=t.aux)==null?void 0:d.type)==="wind")){i.classList.add("hidden");return}i.classList.remove("hidden");const r=((_=t.wind)==null?void 0:_.turbine_count)||((x=(g=t.wind)==null?void 0:g.turbines)==null?void 0:x.length)||2,o=((u=t.wind)==null?void 0:u.turbines)||[],a=document.createElement("div");a.className="es-wind-summary-bar es-mono",a.id="windStationSummaryBar",a.innerHTML=`
      <span>Вітер:</span>
      <span style="color: #6ee7b7; font-weight: 700;">День: <span id="windTotalDailyVal">0.00</span> kWh</span>
      <span style="color: #64748b;">•</span>
      <span style="color: #38bdf8; font-weight: 700;">Місяць: <span id="windTotalMonthlyVal">0.0</span> kWh</span>
    `,i.appendChild(a);const s=document.createElement("div");s.className="es-wind-pods-row",i.appendChild(s);for(let v=0;v<r;v++){const E=o[v]||{name:`Вітряк ${v+1}`,power_entity:`sensor.wind_turbine_${v+1}_power`,daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((y=t.wind)==null?void 0:y.animation_threshold)||50},p=!!(E.daily_energy_entity||E.monthly_energy_entity),f=document.createElement("div");f.className="es-turbine-card glow-wind clickable-node",f.id=`turbineCard_${v+1}`,f.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; color: #67e8f9; font-size: 11px; font-weight: 700;">
            <div style="width: 20px; height: 20px;" class="turbine-icon-box" id="turbineIcon_${v+1}">
              ${le.wind_turbine}
            </div>
            <span>${E.name||`Вітряк ${v+1}`}</span>
          </div>
          <span style="font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 6px; background: rgba(6, 182, 212, 0.15); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.3);" id="turbineStatus_${v+1}">
            Штиль
          </span>
        </div>

        <div style="display: flex; align-items: baseline; justify-content: space-between; width: 100%; margin: 2px 0;">
          <span class="es-mono" id="turbinePower_${v+1}" style="font-size: 16px; font-weight: 900; color: #22d3ee;">
            0.000 кВт
          </span>
          <span class="es-mono" id="turbineRpmBox_${v+1}" style="font-size: 11px; font-weight: 700; color: #67e8f9; display: none;">
            <span id="turbineRpmVal_${v+1}">0</span> RPM
          </span>
        </div>

        <div id="turbineEnergyFooter_${v+1}" class="es-mono" style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 4px; margin-top: 2px; display: ${p?"flex":"none"}; justify-content: space-between; font-size: 10px; color: #cbd5e1;">
          <div><span style="color: #94a3b8;">День:</span> <span id="turbineDailyVal_${v+1}" style="color: #6ee7b7; font-weight: 700;">0.00</span> kWh</div>
          <div><span style="color: #94a3b8;">Міс:</span> <span id="turbineMonthlyVal_${v+1}" style="color: #38bdf8; font-weight: 700;">0.0</span> kWh</div>
        </div>
      `,f.addEventListener("click",()=>{this._fireMoreInfo(E.power_entity)}),s.appendChild(f)}}_renderDynamicPvPanels(){var a,s,l,c,d,_;const t=this._config||G,i=this._nodes.pvPanelsContainer;if(!i)return;i.innerHTML="";const n=((a=t.solar)==null?void 0:a.pv_count)||((l=(s=t.solar)==null?void 0:s.strings)==null?void 0:l.length)||3,r=this._language==="en"?"kWp":"кВтп",o=((c=t.solar)==null?void 0:c.show_metrics)!==!1;for(let g=1;g<=n;g++){const x=g<10?`0${g}`:`${g}`,u=((_=(d=t.solar)==null?void 0:d.strings)==null?void 0:_[g-1])||{},y=u.name||`PV ${x}`,v=u.capacity_kw!==void 0?parseFloat(u.capacity_kw):4,E=u.voltage_entity||(g<=3?`sensor.deye_12k_inverter_pv${g}_voltage`:""),p=u.current_entity||(g<=3?`sensor.deye_12k_inverter_pv${g}_current`:""),f=document.createElement("div");f.className="es-pv-panel glow-solar clickable-node",f.dataset.pvIndex=g,f.id=`pvPanel_${g}`,f.innerHTML=`
        <div class="es-pv-top-row">
          <div style="width: 22px; height: 22px; color: #fbbf24;">${le.pv_panel}</div>
        </div>
        <span class="es-pv-label es-mono">${y}</span>
        <span class="es-pv-val es-mono" id="pvVal_${g}">0,000 кВт</span>
        <div class="es-pv-metrics es-mono" id="pvMetrics_${g}" style="${o?"display: flex;":"display: none;"}">
          <span class="volt" id="pvVolt_${g}" title="${this._language==="en"?"PV Voltage":"Напруга поля"}">0.0 V</span>
          <span class="sep">•</span>
          <span class="curr" id="pvCurr_${g}" title="${this._language==="en"?"PV Current":"Струм поля"}">0.00 A</span>
        </div>
        <div class="es-pv-cap es-mono" id="pvCap_${g}" title="Встановлена пікова потужність та відсоток генерації поля">
          <span id="pvCapVal_${g}">${v.toFixed(1).replace(".",",")}</span> <span style="font-size: 9px; color: #64748b;">${r}</span> <span id="pvPercent_${g}" style="color: #fbbf24; font-weight: 700; margin-left: 2px;">(0%)</span>
        </div>
      `,f.addEventListener("click",()=>{var B;const k=u.power_entity||E||p||((B=t.solar)==null?void 0:B.total_power_entity);this._fireMoreInfo(k)});const h=f.querySelector(`#pvVolt_${g}`);h&&h.addEventListener("click",k=>{k.stopPropagation(),E?this._fireMoreInfo(E):u.power_entity&&this._fireMoreInfo(u.power_entity)});const w=f.querySelector(`#pvCurr_${g}`);w&&w.addEventListener("click",k=>{k.stopPropagation(),p?this._fireMoreInfo(p):u.power_entity&&this._fireMoreInfo(u.power_entity)}),i.appendChild(f)}}_renderDynamicSubloads(){var r;const t=this._config||G,i=this._nodes.subloadsContainer;if(!i)return;i.innerHTML="",(((r=t.load)==null?void 0:r.subloads)||[]).forEach((o,a)=>{const s=document.createElement("div");s.className="es-subload-card clickable-node",s.id=`subloadCard_${a}`,s.innerHTML=`
        <div style="width: 22px; height: 22px; color: #22d3ee; margin-bottom: 2px;">${le[o.icon]||le.other}</div>
        <span style="font-size: 11px; color: #cbd5e1; font-weight: 600; white-space: nowrap;">${o.name}</span>
        <span class="es-mono" id="subloadVal_${a}" style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-top: 2px;">2,000 кВт</span>
      `,s.addEventListener("click",()=>{this._fireMoreInfo(o.entity)}),i.appendChild(s)})}_renderDynamicBatteryRack(){var _,g,x,u,y,v,E;const t=this._config||G,i=this._nodes.batteryRackContainer;if(!i)return;i.innerHTML="";const n=((_=t.battery)==null?void 0:_.parallel_batteries)||((x=(g=t.battery)==null?void 0:g.modules)==null?void 0:x.length)||2,r=[82,76,91,68,85,90,72,80],o=[52.4,52.4,52.4,52.4,52.4,52.4],a=[25,21,22.5,20,24,19.5,23,21.5],s=[12,8,15,9,14,11,18,10],l=this._t("bat_prefix"),c=this._language==="en"?"kW":"кВт",d=this._language==="en"?"kWh":"кВт·год";for(let p=1;p<=n;p++){const f=((y=(u=t.battery)==null?void 0:u.modules)==null?void 0:y[p-1])||((E=(v=t.battery)==null?void 0:v.module_entities)==null?void 0:E[p-1])||{},h=f.name||`${l} ${p}`,w=r[(p-1)%r.length],k=o[(p-1)%o.length],B=a[(p-1)%a.length],P=s[(p-1)%s.length],m=document.createElement("div");m.className="es-battery-pack-card glow-battery clickable-node",m.id=`batPackCard_${p}`,m.innerHTML=`
        <div style="width: 24px; height: 24px; color: #34d399; margin-bottom: 2px;">${le.battery_vertical}</div>
        <span class="es-bat-name">${h}</span>
        <span class="es-bat-soc-val es-mono" id="batPackSoc_${p}">${w}%</span>
        <div class="es-mono es-bat-volt" id="batPackVolt_${p}">${k.toFixed(2).replace(".",",")} V</div>
        <div class="es-mono es-bat-power" id="batPackPower_${p}" style="font-size: 12px; font-weight: 800; color: #34d399; margin-top: 2px;">0.00 ${c}</div>

        <!-- Telemetry Row: Temperature & Cell Delta -->
        <div class="es-mono es-bat-telemetry-row">
          <span id="batPackTemp_${p}" style="color: #fdba74; font-weight: 600; display: inline-flex; align-items: center; gap: 1px; cursor: pointer;" title="Температура осередків">🌡️<span id="batPackTempVal_${p}">${B.toFixed(1)}</span>°C</span>
          <span id="batPackDelta_${p}" class="es-bat-delta-badge" style="font-weight: 700; font-size: 10px; padding: 1px 4px; border-radius: 4px; background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); cursor: pointer;" title="Розбаланс осередків (Cell Delta)">Δ <span id="batPackDeltaVal_${p}">${P} mV</span></span>
        </div>

        <!-- Approximate Remaining Capacity -->
        <div class="es-mono es-bat-kwh" id="batPackKwh_${p}" style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 3px;" title="Залишок ємності">~0,00 ${d}</div>
      `,m.addEventListener("click",F=>{var Z;if(F.target.closest(`#batPackTemp_${p}`)){const J=f.temperature_entity||f.temp||`sensor.bms_rack${p}_temperature`;this._fireMoreInfo(J);return}if(F.target.closest(`#batPackDelta_${p}`)){const J=f.cell_delta_entity||f.delta_entity||`sensor.bms_rack${p}_cell_delta`;this._fireMoreInfo(J);return}const K=f.soc_entity||f.soc||f.voltage_entity||f.volt||f.current_entity||((Z=t.battery)==null?void 0:Z.soc_entity);this._fireMoreInfo(K)}),i.appendChild(m)}this._renderQuickSettingsCard()}_renderQuickSettingsCard(){var y,v,E,p,f,h,w,k,B,P;const t=this._config||G,i=((y=this._nodes)==null?void 0:y.bottomControlsDock)||this.shadowRoot.getElementById("bottomControlsDock");if(!i||(i.innerHTML="",t.show_quick_settings===!1))return;const n=this._themeMode==="light",r=this._language==="en",o=((v=t.controls)==null?void 0:v.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",a=((E=t.controls)==null?void 0:E.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",s=((p=t.controls)==null?void 0:p.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",l=document.createElement("div");l.className="es-quick-settings-card",l.id="quickSettingsCard",l.innerHTML=`
      <div class="es-qs-header">
        <div class="es-qs-title-wrap">
          <span class="es-qs-icon">${le.battery_vertical}</span>
          <span class="es-qs-title">${this._t("ctrl_title")}</span>
        </div>
        <div class="es-qs-actions">
          <button class="es-qs-mini-btn" id="btnEditCardQs" title="${this._t("edit_card")}" style="color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(2, 132, 199, 0.18);">
            <span>⚙️</span>
          </button>
          <button class="es-qs-mini-btn" id="btnThemeToggle" title="${this._t("theme_label")}">
            <span class="es-qs-mini-icon">${n?le.sun_mode:le.moon}</span>
          </button>
          <button class="es-qs-mini-btn" id="btnLangToggle" title="${this._t("lang_label")}">
            <span>${r?"EN":"UA"}</span>
          </button>
        </div>
      </div>

      <div class="es-ctrl-tiles">
        <!-- 1. Solar Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileSolar">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSolar" title="${o}">
              <span class="es-ctrl-icon es-ctrl-solar">${le.sun_mode}</span>
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
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapSell" title="${a}">
              <span class="es-ctrl-icon es-ctrl-sell" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${le.inverter}</span>
              <span class="es-ctrl-label">${this._t("ctrl_sell_power")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValSell">5 000 ${r?"W":"Вт"}</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderSell" min="0" max="12000" step="100" value="5000">
          </div>
        </div>

        <!-- 3. Grid Charge Current -->
        <div class="es-ctrl-tile" id="ctrlTileGrid">
          <div class="es-ctrl-top">
            <div class="es-ctrl-label-wrap" id="ctrlLabelWrapGrid" title="${s}">
              <span class="es-ctrl-icon es-ctrl-grid" style="width: 18px; height: 18px; max-width: 18px; max-height: 18px; overflow: hidden; display: inline-flex; align-items: center; justify-content: center;">${le.grid_tower}</span>
              <span class="es-ctrl-label">${this._t("ctrl_grid_charge")}</span>
            </div>
            <div class="es-ctrl-val es-mono" id="ctrlValGrid">70 A</div>
          </div>
          <div class="es-ctrl-slider-wrap">
            <input type="range" class="es-ctrl-slider" id="ctrlSliderGrid" min="0" max="150" step="1" value="70">
          </div>
        </div>
      </div>
    `,(f=l.querySelector("#btnEditCardQs"))==null||f.addEventListener("click",m=>{m.stopPropagation(),this._openCardEditor()}),(h=l.querySelector("#btnThemeToggle"))==null||h.addEventListener("click",m=>{m.stopPropagation(),this._toggleTheme()}),(w=l.querySelector("#btnLangToggle"))==null||w.addEventListener("click",m=>{m.stopPropagation(),this._toggleLanguage()}),(k=l.querySelector("#ctrlLabelWrapSolar"))==null||k.addEventListener("click",()=>this._fireMoreInfo(o)),(B=l.querySelector("#ctrlLabelWrapSell"))==null||B.addEventListener("click",()=>this._fireMoreInfo(a)),(P=l.querySelector("#ctrlLabelWrapGrid"))==null||P.addEventListener("click",()=>this._fireMoreInfo(s));const c=l.querySelector("#ctrlSliderSolar"),d=l.querySelector("#ctrlValSolar");c&&(this._updateSliderGradient(c),c.addEventListener("input",m=>{d&&(d.innerText=`${m.target.value} A`),this._updateSliderGradient(c)}),c.addEventListener("change",m=>{this._setNumberValue(o,m.target.value)}));const _=l.querySelector("#ctrlSliderSell"),g=l.querySelector("#ctrlValSell");_&&(this._updateSliderGradient(_),_.addEventListener("input",m=>{const F=Number(m.target.value).toLocaleString(this._language==="uk"?"uk-UA":"en-US");g&&(g.innerText=`${F} ${this._language==="uk"?"Вт":"W"}`),this._updateSliderGradient(_)}),_.addEventListener("change",m=>{this._setNumberValue(a,m.target.value)}));const x=l.querySelector("#ctrlSliderGrid"),u=l.querySelector("#ctrlValGrid");x&&(this._updateSliderGradient(x),x.addEventListener("input",m=>{u&&(u.innerText=`${m.target.value} A`),this._updateSliderGradient(x)}),x.addEventListener("change",m=>{this._setNumberValue(s,m.target.value)})),i.appendChild(l),this._updateControlSliders()}_updateSliderGradient(t){if(!t)return;const i=parseFloat(t.min)||0,n=parseFloat(t.max)||100,r=parseFloat(t.value)||0,o=Math.max(0,Math.min(100,(r-i)/(n-i)*100));t.style.background=`linear-gradient(to right, #38bdf8 0%, #38bdf8 ${o}%, rgba(255, 255, 255, 0.12) ${o}%, rgba(255, 255, 255, 0.12) 100%)`}_setNumberValue(t,i){if(!this._hass||!t)return;const r=t.split(".")[0]||"number",o=Number(i);this._hass.callService(r,"set_value",{entity_id:t,value:o})}_updateControlSliders(){var g,x,u,y,v,E,p,f,h;const t=this._config||G;if(t.show_quick_settings===!1)return;const i=this.shadowRoot;if(!i)return;const n=((g=t.controls)==null?void 0:g.solar_charge_entity)||"number.deye_12k_inverter_max_charge_current",r=((x=t.controls)==null?void 0:x.sell_power_entity)||"number.deye_12k_inverter_export_surplus_power",o=((u=t.controls)==null?void 0:u.grid_charge_entity)||"number.deye_12k_inverter_grid_charge_current",a=i.getElementById("ctrlSliderSolar"),s=i.getElementById("ctrlValSolar"),l=i.getElementById("ctrlSliderSell"),c=i.getElementById("ctrlValSell"),d=i.getElementById("ctrlSliderGrid"),_=i.getElementById("ctrlValGrid");if(a&&(!a.matches||!a.matches(":active"))){const w=(v=(y=this._hass)==null?void 0:y.states)==null?void 0:v[n],k=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):a.value?parseFloat(a.value):80;a.value=k,s&&(s.innerText=`${Math.round(k)} A`),this._updateSliderGradient(a)}if(l&&(!l.matches||!l.matches(":active"))){const w=(p=(E=this._hass)==null?void 0:E.states)==null?void 0:p[r],k=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):l.value?parseFloat(l.value):5e3;l.value=k;const B=Math.round(k).toLocaleString(this._language==="uk"?"uk-UA":"en-US"),P=this._language==="uk"?"Вт":"W";c&&(c.innerText=`${B} ${P}`),this._updateSliderGradient(l)}if(d&&(!d.matches||!d.matches(":active"))){const w=(h=(f=this._hass)==null?void 0:f.states)==null?void 0:h[o],k=w&&!isNaN(parseFloat(w.state))?parseFloat(w.state):d.value?parseFloat(d.value):70;d.value=k,_&&(_.innerText=`${Math.round(k)} A`),this._updateSliderGradient(d)}}_bindInteractions(){var n,r,o,a,s,l,c,d,_,g,x,u,y,v,E,p,f,h,w,k,B,P;const t=this.shadowRoot,i=this._config||G;(n=t.getElementById("headerEditCard"))==null||n.addEventListener("click",m=>{m.stopPropagation(),this._openCardEditor()}),(r=t.getElementById("headerThemeToggle"))==null||r.addEventListener("click",m=>{m.stopPropagation(),this._toggleTheme()}),(o=t.getElementById("headerLangToggle"))==null||o.addEventListener("click",m=>{m.stopPropagation(),this._toggleLanguage()}),(a=t.getElementById("headerZoomIn"))==null||a.addEventListener("click",m=>{m.stopPropagation(),this._changeScale(this._scale+.1)}),(s=t.getElementById("headerZoomOut"))==null||s.addEventListener("click",m=>{m.stopPropagation(),this._changeScale(this._scale-.1)}),(l=t.getElementById("headerZoomVal"))==null||l.addEventListener("click",m=>{m.stopPropagation(),this._changeScale(1)}),(c=t.getElementById("solarHeaderNode"))==null||c.addEventListener("click",()=>{var m,F;this._fireMoreInfo(((m=i.solar)==null?void 0:m.daily_yield_entity)||((F=i.solar)==null?void 0:F.total_power_entity))}),(d=t.getElementById("totalPvPowerBadge"))==null||d.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.solar)==null?void 0:m.total_power_entity)}),(_=t.getElementById("gridNode"))==null||_.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.grid)==null?void 0:m.power_entity)}),(g=t.getElementById("nonEssentialNode"))==null||g.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.grid)==null?void 0:m.non_essential_power_entity)}),(x=t.getElementById("carNode"))==null||x.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.grid)==null?void 0:m.car_power_entity)}),(u=t.getElementById("inverterNode"))==null||u.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.inverter)==null?void 0:m.power_entity)}),(y=t.getElementById("inverterSelfConsumptionBox"))==null||y.addEventListener("click",m=>{var F;m.stopPropagation(),(F=i.inverter)!=null&&F.self_consumption_entity&&this._fireMoreInfo(i.inverter.self_consumption_entity)}),(v=t.getElementById("auxNode"))==null||v.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.aux)==null?void 0:m.power_entity)}),(E=t.getElementById("essentialNode"))==null||E.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.load)==null?void 0:m.essential_power_entity)}),(p=t.getElementById("masterBatteryHub"))==null||p.addEventListener("click",()=>{var m;this._fireMoreInfo((m=i.battery)==null?void 0:m.soc_entity)}),(f=t.getElementById("batChargeDaily"))==null||f.addEventListener("click",m=>{var F;m.stopPropagation(),this._fireMoreInfo(((F=i.battery)==null?void 0:F.charge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_charge")}),(h=t.getElementById("batDischargeDaily"))==null||h.addEventListener("click",m=>{var F;m.stopPropagation(),this._fireMoreInfo(((F=i.battery)==null?void 0:F.discharge_daily_entity)||"sensor.inverter_12_kvt_daily_battery_discharge")});for(let m=1;m<=8;m++){const F=t.getElementById(`batBranchBadge_${m}`),K=((k=(w=i.battery)==null?void 0:w.modules)==null?void 0:k[m-1])||((P=(B=i.battery)==null?void 0:B.module_entities)==null?void 0:P[m-1])||{};F==null||F.addEventListener("click",()=>{var J;const Z=K.power_entity||K.current_entity||K.soc_entity||((J=i.battery)==null?void 0:J.soc_entity);this._fireMoreInfo(Z)})}}_fetchNightEndFromHa(t,i){var l,c;if(this._fetchingHistoryForDate===t)return;const r=(l=(this._config||G).grid)==null?void 0:l.import_daily_entity;if(!((c=this._hass)!=null&&c.callWS)||!r)return;this._fetchingHistoryForDate=t;const o=new Date,a=new Date(o.getFullYear(),o.getMonth(),o.getDate(),0,0,0),s=new Date(o.getFullYear(),o.getMonth(),o.getDate(),i,5,0);this._hass.callWS({type:"history/history_during_period",start_time:a.toISOString(),end_time:s.toISOString(),entity_ids:[r],no_attributes:!0}).then(d=>{const _=d==null?void 0:d[r];if(_&&_.length>0){let g=null;for(let x=_.length-1;x>=0;x--){const u=parseFloat(_[x].state);if(!isNaN(u)&&u>=0){g=u;break}}if(g!==null){const x=`es_tariff_split_${t}`;let u={};if(typeof localStorage<"u")try{const y=localStorage.getItem(x);y&&(u=JSON.parse(y))}catch{}if(u.night_end=g,u.night_end_hour=i,u.night_end_verified=!0,typeof localStorage<"u")try{localStorage.setItem(x,JSON.stringify(u))}catch{}this._hass&&this._updateValues()}}}).catch(d=>{console.warn("Could not fetch night tariff history from HA:",d)})}_calculateTariffs(t,i,n,r=0){var f,h,w,k,B,P,m,F,K,Z,J,te,C;const a=(this._config||G).tariffs||{};if(a.enabled===!1){(f=this._nodes)!=null&&f.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none"),(h=this._nodes)!=null&&h.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none"),(w=this._nodes)!=null&&w.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none"),(k=this._nodes)!=null&&k.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");return}const s=a.currency||"грн",l=typeof a.day_rate=="number"?a.day_rate:4.32,c=typeof a.night_rate=="number"?a.night_rate:2.16,d=typeof a.export_rate=="number"?a.export_rate:5.3,_=typeof a.night_start_hour=="number"?a.night_start_hour:23,g=typeof a.night_end_hour=="number"?a.night_end_hour:7,x=new Date,u=x.getHours()+x.getMinutes()/60,y=_>g?u>=_||u<g:u>=_&&u<g;if((B=this._nodes)!=null&&B.gridTariffBadge&&a.show_active_badge!==!1){const $=y?c:l,I=y?this._t("tariff_night"):this._t("tariff_day"),S=y?"🌙":"☀️",N=y?"rgba(99, 102, 241, 0.15)":"rgba(245, 158, 11, 0.15)",Y=y?"rgba(129, 140, 248, 0.35)":"rgba(251, 191, 36, 0.35)",j=y?"#a5b4fc":"#fbbf24";this._nodes.gridTariffBadge.style.background=N,this._nodes.gridTariffBadge.style.border=`1px solid ${Y}`,this._nodes.gridTariffBadge.style.color=j,this._nodes.gridTariffBadge.innerText=`${S} ${I}: ${$.toFixed(2)} ${s}`,this._nodes.gridTariffBadge.style.display="inline-flex"}else(P=this._nodes)!=null&&P.gridTariffBadge&&(this._nodes.gridTariffBadge.style.display="none");if((m=this._nodes)!=null&&m.solarSavingsDaily&&a.show_solar_savings!==!1&&n>0){const $=n*l;this._nodes.solarSavingsDaily.innerText=`💰 ${this._t("solar_saved")}: ~${$.toFixed(2)} ${s}`,this._nodes.solarSavingsDaily.style.display="block"}else(F=this._nodes)!=null&&F.solarSavingsDaily&&(this._nodes.solarSavingsDaily.style.display="none");if((K=this._nodes)!=null&&K.gridExportIncomeRow&&a.show_export_income!==!1&&typeof i=="number"&&i>0){const $=i*d;this._nodes.gridExportIncomeVal&&(this._nodes.gridExportIncomeVal.innerText=`+${$.toFixed(2)} ${s}`),this._nodes.gridExportIncomeRow.style.display="block"}else(Z=this._nodes)!=null&&Z.gridExportIncomeRow&&(this._nodes.gridExportIncomeRow.style.display="none");if(typeof t!="number"||isNaN(t)||t<0){(J=this._nodes)!=null&&J.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none");return}let v=null,E=null;if(a.import_night_entity||a.import_day_entity){const $=a.import_night_entity?this._getEntityState(a.import_night_entity):null,I=a.import_day_entity?this._getEntityState(a.import_day_entity):null;$&&typeof $.val=="number"&&(v=$.val),I&&typeof I.val=="number"&&(E=I.val),v!==null&&E===null?E=Math.max(0,t-v):E!==null&&v===null&&(v=Math.max(0,t-E))}if(v===null||E===null){const $=`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,"0")}-${String(x.getDate()).padStart(2,"0")}`,I=`es_tariff_split_${$}`;let S={};if(typeof localStorage<"u")try{const N=localStorage.getItem(I);N&&(S=JSON.parse(N))}catch{}if(u<g){if(v=t,E=0,S.ongoing_night_val=t,S.ongoing_night_hour=u,S.night_end=t,S.night_end_hour=u,S.night_end_verified=!1,typeof localStorage<"u")try{localStorage.setItem(I,JSON.stringify(S))}catch{}}else if(u>=g&&u<_){const N=S.night_end_verified===!0,Y=typeof S.night_end_hour=="number"&&S.night_end_hour>=g-.25;if((N||Y)&&typeof S.night_end=="number"&&S.night_end<=t)v=S.night_end,E=Math.max(0,t-v);else{this._fetchNightEndFromHa($,g);let j=t*Math.min(1,g/Math.max(u,1));typeof r=="number"&&r>.5&&(j=Math.min(t,Math.max(j,r))),v=j,E=Math.max(0,t-v)}if(S.day_end=t,typeof localStorage<"u")try{localStorage.setItem(I,JSON.stringify(S))}catch{}}else{const N=typeof S.night_end=="number"&&S.night_end_verified?S.night_end:t*(g/u),Y=typeof S.day_end=="number"?S.day_end:t;E=Math.max(0,Y-N);const j=Math.max(0,t-Y);v=N+j}}const p=v*c+E*l;(te=this._nodes)!=null&&te.gridCostDailyRow&&a.show_daily_cost!==!1?(this._nodes.gridCostDailyVal&&(this._nodes.gridCostDailyVal.innerText=`~${p.toFixed(2)} ${s}`),this._nodes.gridCostSplitVal&&(this._nodes.gridCostSplitVal.innerText=`(🌙 ${v.toFixed(1)} + ☀️ ${E.toFixed(1)})`),this._nodes.gridCostDailyRow.style.display="block"):(C=this._nodes)!=null&&C.gridCostDailyRow&&(this._nodes.gridCostDailyRow.style.display="none")}_updateValues(){var de,M,V,W,Je,_t,yt,bt,mt,ui,_i,yi,bi,mi,ur,_r,yr,br,mr,vr,xr,wr,Er,kr,Sr,Cr,$r,Ir,Tr,Br,Nr,Lr,Ar,Fr,Pr,Rr,Mr,Or,Dr,Vr,zr,Wr,qr,Gr,jr,Hr,Ur,Kr,Yr,Jr,Qr,Xr,Zr,eo,to,io,no,ro,oo,ao,so,lo,co,po,fo,ho,go,uo,_o,yo,bo,mo,vo,xo,wo,Eo,ko,So,Co,$o,Io,To,Bo,No,Lo,Ao,Fo,Po,Ro,Mo,Oo,Do,Vo,zo,Wo,qo,Go,jo,Ho,Uo,Ko,Yo,Jo,Qo,Xo,Zo,ea,ta,ia;if(!this._nodes.dailySolarYield)return;const t=this._config||G,i=this._language==="en"?"kW":"кВт",n=((de=t.solar)==null?void 0:de.pv_count)||((V=(M=t.solar)==null?void 0:M.strings)==null?void 0:V.length)||3;let r=0,o=0,a=!1;for(let b=1;b<=n;b++){const R=(Je=(W=t.solar)==null?void 0:W.strings)==null?void 0:Je[b-1],A=(R==null?void 0:R.voltage_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_voltage`:""),q=(R==null?void 0:R.current_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_current`:""),T=(R==null?void 0:R.power_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_power`:"");if(this._getEntityState(T)||this._getEntityState(A)||this._getEntityState(q)){a=!0;break}}for(let b=1;b<=n;b++){const R=this.shadowRoot.getElementById(`pvVal_${b}`),A=this.shadowRoot.getElementById(`pvVolt_${b}`),q=this.shadowRoot.getElementById(`pvCurr_${b}`),T=(yt=(_t=t.solar)==null?void 0:_t.strings)==null?void 0:yt[b-1],_e=(T==null?void 0:T.voltage_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_voltage`:""),Q=(T==null?void 0:T.current_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_current`:""),ye=(T==null?void 0:T.power_entity)||(b<=3?`sensor.deye_12k_inverter_pv${b}_power`:""),ae=this._getEntityState(_e),Le=this._getEntityState(Q),ie=this._getEntityState(ye);let fe=0,Te=0,re=0;ie?re=this._formatPower(ie).kw:ae&&Le?re=ae.val*Le.val/1e3:ae?re=0:re=a?0:4,ae?fe=ae.val:fe=a?0:380+b*4.5,Le?Te=Le.val:ie&&fe>0?Te=re*1e3/fe:Te=a?0:3.12+b*.28,r+=re,o+=Te,R&&(R.innerText=`${re.toFixed(3)} ${i}`),A&&(A.innerText=`${fe.toFixed(1)} V`),q&&(q.innerText=`${Te.toFixed(2)} A`);const oe=this.shadowRoot.getElementById(`pvMetrics_${b}`);if(oe){const Et=((bt=t.solar)==null?void 0:bt.show_metrics)!==!1,kt=!!(ae||Le||!a||T!=null&&T.voltage_entity||T!=null&&T.current_entity||fe>0||Te>0);oe.style.display=Et&&kt?"flex":"none"}const qe=(T==null?void 0:T.capacity_kw)!==void 0?parseFloat(T.capacity_kw):(T==null?void 0:T.installed_power)!==void 0?parseFloat(T.installed_power):a?0:4,vt=qe>0&&re>0?Math.min(100,Math.round(re/qe*100)):0,Mt=this.shadowRoot.getElementById(`pvCapVal_${b}`),xt=this.shadowRoot.getElementById(`pvPercent_${b}`),wt=this.shadowRoot.getElementById(`pvCap_${b}`);Mt&&(qe>0?(Mt.innerText=qe.toFixed(1).replace(".",","),xt&&(xt.innerText=`(${vt}%)`,xt.style.color=vt>=70?"#34d399":vt>=30?"#fbbf24":"#94a3b8"),wt&&(wt.style.display="flex")):wt&&(wt.style.display="none"))}const s=this._getEntityState((mt=t.solar)==null?void 0:mt.total_power_entity);let l=0;s?l=this._formatPower(s).kw:l=r;let c=((ui=t.solar)==null?void 0:ui.installed_power)!==void 0?parseFloat(t.solar.installed_power):0;if(isNaN(c)||c<=0){let b=0;for(let R=0;R<n;R++){const A=(yi=(_i=t.solar)==null?void 0:_i.strings)==null?void 0:yi[R],q=(A==null?void 0:A.capacity_kw)!==void 0?parseFloat(A.capacity_kw):(A==null?void 0:A.installed_power)!==void 0?parseFloat(A.installed_power):0;!isNaN(q)&&q>0&&(b+=q)}c=b>0?b:a?0:12}const d=c>0?l/c*100:0,_=Math.min(100,Math.max(0,d)),g=this._language==="en"?"kWp":"кВтп";this._nodes.totalPvPowerVal&&(this._nodes.totalPvPowerVal.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge&&(this._nodes.totalPvPowerVal||(this._nodes.totalPvPowerBadge.innerText=`${l.toFixed(3)} ${i}`),this._nodes.totalPvPowerBadge.title=this._language==="en"?`Total PV current: ${o.toFixed(2)} A`:`Сумарний струм СЕС: ${o.toFixed(2)} A`),this._nodes.totalPvPercentBadge&&(c>0?(this._nodes.totalPvPercentBadge.style.display="inline-flex",this._nodes.totalPvPercentBadge.innerText=`${Math.round(_)}%`,this._nodes.totalPvPercentBadge.style.color=_>=70?"#34d399":_>=30?"#fbbf24":"#94a3b8",this._nodes.totalPvPercentBadge.style.borderColor=_>=70?"rgba(52, 211, 153, 0.35)":"rgba(245, 158, 11, 0.35)"):this._nodes.totalPvPercentBadge.style.display="none"),this._nodes.totalPvSubline&&(c>0?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${_.toFixed(1).replace(".",",")}%`,this._nodes.totalPvCapDetail.style.color=_>=70?"#34d399":_>=30?"#fbbf24":"#94a3b8"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=`(з ${c.toFixed(1).replace(".",",")} ${g})`)):o>0&&((bi=t.solar)==null?void 0:bi.show_metrics)!==!1?(this._nodes.totalPvSubline.style.display="flex",this._nodes.totalPvCapDetail&&(this._nodes.totalPvCapDetail.innerText=`${o.toFixed(2)} A`,this._nodes.totalPvCapDetail.style.color="#34d399"),this._nodes.totalPvCapTotal&&(this._nodes.totalPvCapTotal.innerText=this._language==="en"?"(current)":"(струм)")):this._nodes.totalPvSubline.style.display="none");const x=this._getEntityState((mi=t.solar)==null?void 0:mi.daily_yield_entity),u=x?x.val:a?0:48.6;this._nodes.dailySolarYield.innerText=u.toFixed(1);const y=((ur=t.solar)==null?void 0:ur.target_daily_yield)||55;this._nodes.targetSolarYield.innerText=y.toFixed(1);const v=Math.min(100,Math.round(u/y*100));this._nodes.solarProgressBar.style.width=`${v}%`;const E=this._getEntityState((_r=t.inverter)==null?void 0:_r.power_entity);this._nodes.inverterPowerVal&&((yr=t.inverter)!=null&&yr.power_entity&&E?(this._nodes.inverterPowerVal.style.display="block",this._nodes.inverterPowerVal.innerText=this._formatPower(E,0).str):this._nodes.inverterPowerVal.style.display="none");const p=this._getEntityState((br=t.inverter)==null?void 0:br.ac_temperature_entity);this._nodes.inverterAcTemp.innerText=p?p.val.toFixed(2):"41,20";const f=this._getEntityState((mr=t.inverter)==null?void 0:mr.dc_temperature_entity);this._nodes.inverterDcTemp.innerText=f?f.val.toFixed(2):"38,40";const h=this._getEntityState((vr=t.inverter)==null?void 0:vr.voltage_entity);this._nodes.inverterVolt.innerText=h?h.val.toFixed(2):"231,45";const w=this._getEntityState((xr=t.inverter)==null?void 0:xr.current_entity);this._nodes.inverterCurrent.innerText=w?w.val.toFixed(2):"8,60";const k=this._getEntityState((wr=t.inverter)==null?void 0:wr.frequency_entity);this._nodes.inverterFreq.innerText=k?k.val.toFixed(2):"50,01";const B=((Er=t.wind)==null?void 0:Er.show)!==!1||((kr=t.aux)==null?void 0:kr.type)==="wind",P=this.shadowRoot.getElementById("windStationContainer"),m=this._nodes.auxNode;let F=0;if(P)if(!B)P.classList.add("hidden");else{P.classList.remove("hidden");const b=((Sr=t.wind)==null?void 0:Sr.turbine_count)||(($r=(Cr=t.wind)==null?void 0:Cr.turbines)==null?void 0:$r.length)||2,R=((Ir=t.wind)==null?void 0:Ir.turbines)||[];let A=0,q=0,T=!1,_e=!1;for(let ie=0;ie<b;ie++){const fe=R[ie]||{power_entity:`sensor.wind_turbine_${ie+1}_power`,rpm_entity:"",speed_entity:"",daily_energy_entity:"",monthly_energy_entity:"",animation_threshold:((Tr=t.wind)==null?void 0:Tr.animation_threshold)||50},Te=this.shadowRoot.getElementById(`turbinePower_${ie+1}`),re=this.shadowRoot.getElementById(`turbineStatus_${ie+1}`),oe=this.shadowRoot.getElementById(`turbineIcon_${ie+1}`),qe=this.shadowRoot.getElementById(`turbineCard_${ie+1}`);this.shadowRoot.getElementById(`turbineRpmVal_${ie+1}`);const vt=this.shadowRoot.getElementById(`turbineDailyVal_${ie+1}`),Mt=this.shadowRoot.getElementById(`turbineMonthlyVal_${ie+1}`),xt=this.shadowRoot.getElementById(`turbineEnergyFooter_${ie+1}`),wt=this._hass?0:ie===0?1.56:.22,Et=this._getEntityState(fe.power_entity),kt=this._formatPower(Et,wt);Te&&(Te.innerText=kt.str),F+=kt.kw;let Ot=kt.kw*1e3;Et&&Et.unit==="W"&&(Ot=Et.val);const ti=fe.animation_threshold??((Br=t.wind)==null?void 0:Br.animation_threshold)??50,pt=oe==null?void 0:oe.querySelector(".turbine-rotor"),ii=fe.rpm_entity||fe.speed_entity||((Nr=t.wind)==null?void 0:Nr.rpm_entity)||((Lr=t.wind)==null?void 0:Lr.speed_entity)||(ie===0?"sensor.wind_rpm":"");let se=ii&&((Ar=this._hass)!=null&&Ar.states[ii])?this._getEntityState(ii):null;if(!se&&ie===0&&((Fr=this._hass)!=null&&Fr.states["sensor.wind_rpm"])&&(se=this._getEntityState("sensor.wind_rpm")),Ot>=ti||se&&typeof se.val=="number"&&se.val>0){pt&&pt.classList.add("spinning"),qe&&(qe.classList.add("glow-wind"),qe.style.borderColor="rgba(6, 182, 212, 0.55)");const rt=((Pr=t.wind)==null?void 0:Pr.max_power)||3e3,Di=((Rr=t.wind)==null?void 0:Rr.max_rpm)||600;let vi=0;se&&typeof se.val=="number"&&se.val>0?vi=Math.min(1,Math.max(0,se.val/Di)):vi=Math.min(1,Math.max(0,(Ot-ti)/(rt-ti)));const Ae=(3.2-vi*2.75).toFixed(2);pt&&pt.style.setProperty("--turbine-speed",`${Ae}s`),re&&(re.innerText=this._t("wind_gen"),re.style.color="#67e8f9")}else pt&&pt.classList.remove("spinning"),qe&&(qe.classList.remove("glow-wind"),qe.style.borderColor="rgba(255, 255, 255, 0.08)"),re&&(re.innerText=this._t("wind_calm"),re.style.color="#94a3b8");const Vt=this.shadowRoot.getElementById(`turbineRpmBox_${ie+1}`);if(Vt)if(se&&se.raw!=="unavailable"&&se.raw!=="unknown"&&typeof se.val=="number"&&!isNaN(se.val)){Vt.style.display="inline";const Di=se.unit?se.unit:"RPM";Vt.innerHTML=`<span id="turbineRpmVal_${ie+1}">${Math.round(se.val)}</span> ${Di}`}else Vt.style.display="none";const Ve=this._getEntityState(fe.daily_energy_entity),it=this._getEntityState(fe.monthly_energy_entity);vt&&(vt.innerText=Ve&&typeof Ve.val=="number"&&!isNaN(Ve.val)?Ve.val.toFixed(2):"0.00"),Mt&&(Mt.innerText=it&&typeof it.val=="number"&&!isNaN(it.val)?it.val.toFixed(1):"0.0");const nt=!!(fe.daily_energy_entity||fe.monthly_energy_entity);xt&&(xt.style.display=nt?"flex":"none"),Ve&&typeof Ve.val=="number"&&!isNaN(Ve.val)&&(A+=Ve.val,T=!0),it&&typeof it.val=="number"&&!isNaN(it.val)&&(q+=it.val,_e=!0)}const Q=this.shadowRoot.getElementById("windTotalDailyVal"),ye=this.shadowRoot.getElementById("windTotalMonthlyVal"),ae=this._getEntityState((Mr=t.wind)==null?void 0:Mr.daily_energy_entity),Le=this._getEntityState((Or=t.wind)==null?void 0:Or.monthly_energy_entity);Q&&(ae&&typeof ae.val=="number"&&!isNaN(ae.val)?Q.innerText=ae.val.toFixed(2):T?Q.innerText=A.toFixed(2):Q.innerText="0.00"),ye&&(Le&&typeof Le.val=="number"&&!isNaN(Le.val)?ye.innerText=Le.val.toFixed(1):_e?ye.innerText=q.toFixed(1):ye.innerText="0.0")}let K=0;if(m)if(((Dr=t.aux)==null?void 0:Dr.type)==="none"||((Vr=t.aux)==null?void 0:Vr.type)==="wind")m.classList.add("hidden");else{m.classList.remove("hidden");const b=this._getEntityState((zr=t.aux)==null?void 0:zr.power_entity),R=this._hass?0:2,A=this._formatPower(b,R);K=A.kw,this._nodes.auxPowerVal&&(this._nodes.auxPowerVal.innerText=A.str);const q={microinverter:"Мікроінвертор",generator:"Генератор",wind:"Вітрогенератор",smart_load:"Smart Load"};let T=(Wr=t.aux)==null?void 0:Wr.title;((qr=t.aux)==null?void 0:qr.type)==="microinverter"&&(!T||T==="Вітрогенератор")?T="Мікроінвертор":(Gr=t.aux)!=null&&Gr.type&&q[t.aux.type]&&(!T||T==="Вітрогенератор")?T=q[t.aux.type]:T||(T="Мікроінвертор"),this._nodes.auxTitle&&(this._nodes.auxTitle.innerText=T),this._nodes.auxIconBox&&(this._nodes.auxIconBox.innerHTML=le[(jr=t.aux)==null?void 0:jr.type]||le.microinverter),this._nodes.auxSubtitle&&(this._nodes.auxSubtitle.innerText=((Hr=t.aux)==null?void 0:Hr.subtitle)||"Джерело → GEN port",this._nodes.auxSubtitle.style.color="rgba(216, 180, 254, 0.85)"),m.style.borderColor="rgba(192, 132, 252, 0.45)",m.style.background="rgba(88, 28, 135, 0.35)",m.classList.remove("glow-wind"),m.classList.add("glow-aux")}const Z=this.shadowRoot.getElementById("nonEssentialNode"),J=!!((Ur=t.grid)!=null&&Ur.show_non_essential&&((Kr=t.grid)!=null&&Kr.non_essential_power_entity))||((Yr=t.grid)==null?void 0:Yr.show_non_essential)!==!1&&!!((Jr=t.grid)!=null&&Jr.non_essential_power_entity);let te=0;if(Z)if(J){Z.classList.remove("hidden");const b=this._getEntityState(t.grid.non_essential_power_entity),R=this._formatPower(b,0);te=R.kw,this._nodes.nonEssentialPowerVal&&(this._nodes.nonEssentialPowerVal.innerText=R.str)}else Z.classList.add("hidden");const C=this.shadowRoot.getElementById("carNode"),$=!!((Qr=t.grid)!=null&&Qr.show_car&&((Xr=t.grid)!=null&&Xr.car_power_entity))||((Zr=t.grid)==null?void 0:Zr.show_car)!==!1&&!!((eo=t.grid)!=null&&eo.car_power_entity);let I=0;if(C)if($){C.classList.remove("hidden");const b=this._getEntityState(t.grid.car_power_entity),R=this._formatPower(b,0);I=R.kw,this._nodes.carPowerVal&&(this._nodes.carPowerVal.innerText=R.str)}else C.classList.add("hidden");let S=0;(((to=t.load)==null?void 0:to.subloads)||[]).forEach((b,R)=>{const A=this.shadowRoot.getElementById(`subloadVal_${R}`),q=this._getEntityState(b.entity),T=this._formatPower(q,0);S+=T.kw,A&&(A.innerText=T.str)});const N=this._getEntityState((io=t.battery)==null?void 0:io.soc_entity),Y=N?N.val:80;this._nodes.masterBatterySoc.innerText=`${Y.toFixed(1)}%`,this._nodes.masterBatterySoc.style.fontSize="15px",this._nodes.masterBatterySoc.style.fontWeight="700";const j=this._getEntityState((no=t.battery)==null?void 0:no.power_entity),he=this._getEntityState((ro=t.battery)==null?void 0:ro.current_entity),ge=j?j.unit==="W"?j.val/1e3:j.val:0,ze=((oo=t.battery)==null?void 0:oo.power_sign)||((ao=t.battery)!=null&&ao.invert_power?"standard":"deye");let ue=!1,pe=!1;const ke=Math.abs(ge);ke>=.02?ze==="deye"?ge<0?ue=!0:pe=!0:ge>0?ue=!0:pe=!0:he&&Math.abs(he.val)>=.3&&(ze==="deye"?he.val<0?ue=!0:pe=!0:he.val>0?ue=!0:pe=!0),this._isCharging=ue,this._isDischarging=pe;const me=ue?ke:0,Ze=pe?ke:0;if(this._nodes.masterBatteryFlowHint){let b=this._t("bat_idle"),R="#94a3b8";ue?(b=this._t("bat_dir_charge"),R="#34d399"):pe&&(b=this._t("bat_dir_discharge"),R="#f87171"),this._nodes.masterBatteryFlowHint.innerHTML=`<span style="font-size: 20px; font-weight: 900; color: #f8fafc;">${ke.toFixed(3)} ${i}</span> <span style="color: #64748b; margin: 0 4px;">•</span> <span style="color: ${R}; font-weight: 700; font-size: 14px;">${b}</span>`}const st=this._getEntityState((so=t.battery)==null?void 0:so.voltage_entity),It=st?st.val.toFixed(2):"53.24",Qt=he?he.val.toFixed(2):"-56.30";if(this._nodes.batVoltVal&&(this._nodes.batVoltVal.innerText=`${It.replace(".",",")} V`),this._nodes.batCurrentVal&&(this._nodes.batCurrentVal.innerText=`${Qt.replace(".",",")} A`),this._nodes.batReserveSoc&&(this._nodes.batReserveSoc.innerText=((lo=t.battery)==null?void 0:lo.reserve_soc)!==void 0?t.battery.reserve_soc:20),this._nodes.batReserveProgressBar){const b=((co=t.battery)==null?void 0:co.reserve_soc)!==void 0?t.battery.reserve_soc:20;this._nodes.batReserveProgressBar.style.width=`${b}%`}let Re=this._getEntityState((po=t.load)==null?void 0:po.essential_power_entity);!Re&&(!((fo=t.load)!=null&&fo.essential_power_entity)||((ho=t.load)==null?void 0:ho.essential_power_entity)==="sensor.deye_12k_inverter_essential_load_power"||((go=t.load)==null?void 0:go.essential_power_entity)==="sensor.deye_12k_inverter_load_power")&&(Re=this._getEntityState("sensor.deye_12k_inverter_load_power")||this._getEntityState("sensor.deye_12k_inverter_essential_load_power")||this._getEntityState("sensor.load_power")||this._getEntityState("sensor.solarman_essential_load"));const Me=Re&&typeof Re.val=="number"&&!isNaN(Re.val)?Math.max(0,Re.unit==="W"?Re.val/1e3:Re.val):0,Tt=!!(Re&&Me>0);let Ie=null,je=!1,Ne=this._getEntityState((uo=t.grid)==null?void 0:uo.power_entity);if(!Ne){const b=["sensor.deye_12k_inverter_total_grid_power","sensor.deye_12k_inverter_grid_power","sensor.inverter_12_kvt_total_grid_power","sensor.inverter_12_kvt_grid_power","sensor.inverter_12_kvt_grid_l1_power","sensor.inverter_12_kvt_grid_l2_power","sensor.inverter_12_kvt_grid_l3_power","sensor.esp32_deye_inverter_grid_power","sensor.esp32_deye_inverter_total_grid_power","sensor.deye_grid_power","sensor.grid_power","sensor.solarman_total_grid_power","sensor.solarman_grid_power","sensor.sunsynk_grid_power","sensor.sunsynk_total_grid_power"];for(const R of b){const A=this._getEntityState(R);if(A&&typeof A.val=="number"&&!isNaN(A.val)){Ne=A;break}}}const lt=Ne?Ne.unit==="W"?Ne.val/1e3:Ne.val:0,Oe=l+F+(K>0?K:0)+Ze;if((_o=t.grid)!=null&&_o.external_power_entity){const b=this._getEntityState(t.grid.external_power_entity);b&&typeof b.val=="number"&&!isNaN(b.val)&&(Math.abs(b.unit==="W"?b.val/1e3:b.val)<.03&&(me>.1&&Oe<.1||lt>.1)||(Ie=b,je=!0))}if(!Ie)if(Ne&&lt>.05)Ie=Ne,je=!1;else{const b=["sensor.deye_12k_inverter_external_power","sensor.deye_12k_inverter_external_ct_power","sensor.deye_12k_inverter_external_ct_total_power","sensor.deye_12k_inverter_grid_external_power","sensor.solarman_grid_external_power","sensor.solarman_external_power","sensor.solarman_total_grid_external_power","sensor.sunsynk_external_grid_power","sensor.sunsynk_grid_external_power","sensor.external_power","sensor.grid_external_power"],R=this._getEntityState("sensor.deye_12k_inverter_external_ct_l1_power")||this._getEntityState("sensor.solarman_external_power_l1"),A=this._getEntityState("sensor.deye_12k_inverter_external_ct_l2_power")||this._getEntityState("sensor.solarman_external_power_l2"),q=this._getEntityState("sensor.deye_12k_inverter_external_ct_l3_power")||this._getEntityState("sensor.solarman_external_power_l3");let T=null;if(R&&A&&q&&!isNaN(R.val)&&!isNaN(A.val)&&!isNaN(q.val)){const _e=(R.unit==="kW"?R.val*1e3:R.val)+(A.unit==="kW"?A.val*1e3:A.val)+(q.unit==="kW"?q.val*1e3:q.val);T={val:_e,unit:"W",raw:String(_e)}}if(!T)for(const _e of b){const Q=this._getEntityState(_e);if(Q&&typeof Q.val=="number"&&!isNaN(Q.val)){T=Q;break}}if(!T&&((yo=this._hass)!=null&&yo.states)){const Q=Object.keys(this._hass.states).find(ye=>/(external_power|external_ct|ct1_power|grid_external_power)/i.test(ye)&&!/(daily|monthly|total_energy|energy|yesterday|status|voltage|current|freq)/i.test(ye));if(Q){const ye=this._getEntityState(Q);ye&&typeof ye.val=="number"&&!isNaN(ye.val)&&(T=ye)}}if(T){const _e=Math.abs(T.unit==="kW"?T.val:T.val/1e3);!(_e<.03&&(me>.1&&Oe<.1||lt>.1&&Oe<.1))&&_e>0&&(Ie=T,je=!0)}Ie||(Ie=Ne,je=!1)}const ve=Ie?Ie.unit==="W"?Ie.val/1e3:Ie.val:0,gt=((bo=t.grid)==null?void 0:bo.power_sign)||((mo=t.grid)!=null&&mo.invert_power?"inverted":"deye"),Bt=((vo=t.grid)==null?void 0:vo.selling_enabled)===!0,We=(((xo=t.grid)==null?void 0:xo.min_power_threshold)!==void 0?t.grid.min_power_threshold:50)/1e3,dt=this._getEntityState((wo=t.grid)==null?void 0:wo.status_entity),et=this._getEntityState(((Eo=t.grid)==null?void 0:Eo.voltage_entity)||((ko=t.inverter)==null?void 0:ko.voltage_entity)),D=((So=t.grid)==null?void 0:So.voltage_threshold)!==void 0?t.grid.voltage_threshold:90;let ee=!0;if(dt){const b=String(dt.raw||dt.val).toLowerCase();(b==="off"||b==="false"||b==="0"||b==="disconnected"||b==="offline"||b==="unavailable"||b==="unknown")&&(ee=!1)}else et&&typeof et.val=="number"&&!isNaN(et.val)&&et.val<D&&(ee=!1);const xe=Oe<.15,De=Oe<me+.05,Se=xe||De;let ne=!1,ce=!1,z=0;if(!ee)z=0,ne=!1,ce=!1;else{if(Se)z=Math.abs(ve),z>=We?(ce=!0,ne=!1):(z=0,ce=!1,ne=!1);else if(je)z=Math.abs(ve),z>=We&&(gt==="deye"?ve<0?ne=!0:ce=!0:ve>0?ne=!0:ce=!0);else if(gt==="deye"){if(ve>0)z=ve,z>=We&&(ce=!0);else if(ve<0){const A=Math.abs(ve),q=Math.max(0,A-Me);q>=We?(z=q,ne=!0):(z=0,ne=!1)}}else if(ve<0)z=Math.abs(ve),z>=We&&(ce=!0);else if(ve>0){const A=Math.max(0,ve-Me);A>=We?(z=A,ne=!0):(z=0,ne=!1)}if(((Co=t.grid)==null?void 0:Co.auto_calculate)!==!1&&ce&&!je){const A=Math.max(Me,S),q=me+A+te+I;A>.05&&q>Oe+z+.1&&(z=z+A)}if(Se){const A=this._getEntityState(($o=t.grid)==null?void 0:$o.voltage_entity)||this._getEntityState((Io=t.inverter)==null?void 0:Io.voltage_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_voltage")||this._getEntityState("sensor.esp32_deye_inverter_grid_voltage")||this._getEntityState("sensor.deye_12k_inverter_grid_voltage"),q=this._getEntityState((To=t.inverter)==null?void 0:To.current_entity)||this._getEntityState((Bo=t.grid)==null?void 0:Bo.current_entity)||this._getEntityState("sensor.inverter_12_kvt_grid_current")||this._getEntityState("sensor.inverter_12_kvt_current_l1")||this._getEntityState("sensor.esp32_deye_inverter_grid_current")||this._getEntityState("sensor.deye_12k_inverter_grid_current")||this._getEntityState("sensor.grid_current"),T=A&&typeof A.val=="number"&&!isNaN(A.val)?A.val:0,_e=q&&typeof q.val=="number"&&!isNaN(q.val)?q.val:0,Q=T>=D&&_e>=.5,ye=me>.1&&Oe<.1;if(Q){const re=T*_e/1e3;(z<.05||z<me-.05||re>z+.3)&&(z=re,ce=!0,ne=!1)}else if(ye&&(z<.05||z<me-.05)){const re=Math.max(Me,S),oe=re>0?re:.8;z=Math.max(z,me+.15+oe),ce=!0,ne=!1}const Le=(((No=t.inverter)==null?void 0:No.standby_power)!==void 0?t.inverter.standby_power:100)/1e3,ie=Math.max(Me,S),fe=me+ie+te+I+Le,Te=Math.max(0,fe-Oe);Te>.05&&z<Te-.1&&(z=Te,ce=!0,ne=!1)}const R=Math.max(0,l+F+(K>0?K:0)+Ze-me-Me-te-I);Se||!Bt?ne=!1:ne&&z>R+.1&&(z=R,z<We&&(ne=!1,z=0))}const tt=this.shadowRoot.getElementById("gridNode");this._nodes.gridPowerVal&&(ee?(this._nodes.gridPowerVal.innerText=`${z.toFixed(3)} ${i}`,ne?this._nodes.gridPowerVal.style.color="#34d399":ce?this._nodes.gridPowerVal.style.color="#38bdf8":this._nodes.gridPowerVal.style.color="#94a3b8"):(this._nodes.gridPowerVal.innerText=`0.000 ${i}`,this._nodes.gridPowerVal.style.color="#64748b")),this._nodes.gridDirectionLabel&&(ee?ne?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_export"),this._nodes.gridDirectionLabel.style.color="#34d399"):ce?(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_import"),this._nodes.gridDirectionLabel.style.color="#38bdf8"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_idle"),this._nodes.gridDirectionLabel.style.color="#64748b"):(this._nodes.gridDirectionLabel.innerText=this._t("grid_dir_off"),this._nodes.gridDirectionLabel.style.color="#ef4444")),tt&&(ee?(tt.classList.add("glow-grid"),tt.style.borderColor="rgba(56, 189, 248, 0.4)"):(tt.classList.remove("glow-grid"),tt.style.borderColor="rgba(239, 68, 68, 0.45)"));const Nt=this._getEntityState((Lo=t.grid)==null?void 0:Lo.import_daily_entity);this._nodes.gridImportDaily.innerText=Nt?`${Nt.val.toFixed(2)} kWh`:"0.00 kWh";const Lt=this._getEntityState((Ao=t.grid)==null?void 0:Ao.export_daily_entity);this._nodes.gridExportDaily.innerText=Lt?`${Lt.val.toFixed(2)} kWh`:"0.00 kWh";const Ni=(Fo=t.battery)==null?void 0:Fo.charge_daily_entity;let He=this._getEntityState(Ni);He||(He=this._getEntityState("sensor.inverter_12_kvt_daily_battery_charge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_charge")||this._getEntityState("sensor.daily_battery_charge"));const Li=He&&typeof He.val=="number"?He.val:0;this._calculateTariffs(Nt?Nt.val:0,Lt?Lt.val:0,u,Li);const Ai=ce?z:0,ai=ne?z:0,si=l+F+(K>0?K:0)+Ai+Ze,Fi=me+ai+te+I,li=Math.max(0,si-Fi),ct=this._getEntityState((Po=t.inverter)==null?void 0:Po.self_consumption_entity),At=ct&&typeof ct.val=="number"&&!isNaN(ct.val)?Math.max(0,ct.unit==="W"?ct.val/1e3:ct.val):null,di=(((Ro=t.inverter)==null?void 0:Ro.standby_power)!==void 0?t.inverter.standby_power:100)/1e3;let ut=0,Ye=0;if(Tt)if(ut=Math.max(S,Me),At!==null)Ye=At;else{const b=Math.max(0,si-(me+ai+ut+te+I));Ye=b>0?b:di}else At!==null?Ye=At:Ye=Math.min(li,di),ut=Math.max(S,Math.max(0,li-Ye));this._nodes.inverterSelfConsumptionBox&&this._nodes.inverterSelfConsumptionVal&&(((Mo=t.inverter)==null?void 0:Mo.show_self_consumption)!==!1?(this._nodes.inverterSelfConsumptionBox.style.display="flex",Ye<1?this._nodes.inverterSelfConsumptionVal.innerText=`${Math.round(Ye*1e3)} ${this._language==="en"?"W":"Вт"}`:this._nodes.inverterSelfConsumptionVal.innerText=`${Ye.toFixed(3)} ${i}`):this._nodes.inverterSelfConsumptionBox.style.display="none"),this._nodes.essentialPowerVal.innerText=`${ut.toFixed(3)} ${i}`;const ci=this._getEntityState((Oo=t.load)==null?void 0:Oo.daily_house_entity);this._nodes.dailyHouseKwh.innerText=ci?`${ci.val.toFixed(2)} kWh`:"12,40 kWh";const Ft=((Do=t.battery)==null?void 0:Do.parallel_batteries)||((zo=(Vo=t.battery)==null?void 0:Vo.modules)==null?void 0:zo.length)||2;let Pt=0;for(let b=0;b<Ft;b++){const R=((qo=(Wo=t.battery)==null?void 0:Wo.modules)==null?void 0:qo[b])||((jo=(Go=t.battery)==null?void 0:Go.module_entities)==null?void 0:jo[b])||{},A=R.capacity_kwh!==void 0?parseFloat(R.capacity_kwh):b===0?7.88:b===1?5.12:(((Ho=t.battery)==null?void 0:Ho.capacity_kwh)||13)/Ft;Pt+=isNaN(A)?0:A}Pt<=0&&(Pt=parseFloat((Uo=t.battery)==null?void 0:Uo.capacity_kwh)||13);const Xt=this._getEntityState(((Ko=t.battery)==null?void 0:Ko.capacity_entity)||"sensor.inverter_12_kvt_battery_capacity"),Zt=Xt&&!isNaN(Xt.val)?Xt.val:null,ei=Zt!==null&&Zt<=40?Zt:Pt,pi=this._getEntityState(((Yo=t.battery)==null?void 0:Yo.soc_entity)||"sensor.deye_12k_inverter_battery_soc"),Pi=pi?pi.val:80,Ri=ei*(Pi/100),fi=this._language==="en"?"kWh":"кВт·год";this._nodes.batCapacityVal&&(this._nodes.batCapacityVal.innerHTML=`<span title="Залишок ємності / Номінальна ємність">~${Ri.toFixed(2).replace(".",",")} ${fi} <span style="color: #94a3b8; font-size: 10px; font-weight: normal;">(${ei.toFixed(1).replace(".",",")})</span></span>`);const hi=this._getEntityState(((Jo=t.battery)==null?void 0:Jo.temperature_entity)||"sensor.deye_12k_inverter_battery_temperature")||this._getEntityState("sensor.inverter_12_kvt_battery_temperature")||this._getEntityState("sensor.solarman_battery_temperature"),Mi=hi?hi.val:25;this._nodes.batMasterTempVal&&(this._nodes.batMasterTempVal.innerText=`${Mi.toFixed(1).replace(".",",")}`),He||(He=this._getEntityState("sensor.solarman_daily_battery_charge")||this._getEntityState("sensor.solarman_battery_charge_energy_day"));const Oi=(Qo=t.battery)==null?void 0:Qo.discharge_daily_entity;let Rt=this._getEntityState(Oi);Rt||(Rt=this._getEntityState("sensor.inverter_12_kvt_daily_battery_discharge")||this._getEntityState("sensor.deye_12k_inverter_daily_battery_discharge")||this._getEntityState("sensor.daily_battery_discharge")||this._getEntityState("sensor.solarman_daily_battery_discharge")||this._getEntityState("sensor.solarman_battery_discharge_energy_day")),this._nodes.batChargeDaily&&(this._nodes.batChargeDaily.innerText=He?`${He.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"4,30 kWh"),this._nodes.batDischargeDaily&&(this._nodes.batDischargeDaily.innerText=Rt?`${Rt.val.toFixed(2)} kWh`:this._hass?"0.00 kWh":"6,10 kWh");const gi=[];for(let b=1;b<=Ft;b++){const R=this.shadowRoot.getElementById(`batPackSoc_${b}`),A=this.shadowRoot.getElementById(`batPackVolt_${b}`),q=this.shadowRoot.getElementById(`batPackCurr_${b}`),T=this.shadowRoot.getElementById(`batPackPower_${b}`),_e=this.shadowRoot.getElementById(`batPackTempVal_${b}`),Q=this.shadowRoot.getElementById(`batPackDelta_${b}`),ye=this.shadowRoot.getElementById(`batPackDeltaVal_${b}`),ae=this.shadowRoot.getElementById(`batPackStateTag_${b}`),Le=this.shadowRoot.getElementById(`batPackKwh_${b}`),ie=this.shadowRoot.getElementById(`batPackBar1_${b}`),fe=this.shadowRoot.getElementById(`batPackBar2_${b}`),Te=this.shadowRoot.getElementById(`batPackBar3_${b}`),re=this.shadowRoot.getElementById(`batPackBar4_${b}`),oe=((Zo=(Xo=t.battery)==null?void 0:Xo.modules)==null?void 0:Zo[b-1])||((ta=(ea=t.battery)==null?void 0:ea.module_entities)==null?void 0:ta[b-1])||{},qe=oe.soc_entity||oe.soc||`sensor.bms_rack${b}_soc`,vt=oe.current_entity||`sensor.bms_rack${b}_current`,Mt=oe.voltage_entity||oe.volt||`sensor.bms_rack${b}_voltage`,xt=oe.power_entity||`sensor.bms_rack${b}_power`,wt=oe.temperature_entity||oe.temp||`sensor.bms_rack${b}_temperature`,Et=oe.cell_delta_entity||oe.delta_entity||`sensor.bms_rack${b}_cell_delta`,kt=this._getEntityState(qe),Ot=this._getEntityState(vt),ti=this._getEntityState(Mt),pt=this._getEntityState(xt),ii=this._getEntityState(wt);let se=this._getEntityState(Et);if(se||(se=this._getEntityState(`sensor.bms_rack${b}_delta_cell_voltage`)||this._getEntityState(`sensor.bms_rack${b}_cell_difference`)),!se&&(oe.max_cell_voltage_entity||oe.min_cell_voltage_entity)){const ft=this._getEntityState(oe.max_cell_voltage_entity),oa=this._getEntityState(oe.min_cell_voltage_entity);if(ft&&oa){const _n=Math.abs(ft.val-oa.val);se={val:_n<1?Math.round(_n*1e3):_n,unit:"mV"}}}const Dt=kt?kt.val:b===1?82:b===2?85:75,Vt=ti?ti.val:b===1?54.1:b===2?54:52.4,Ve=Ot?Ot.val:b===1?18.4:b===2?25.2:8.2,it=ii?ii.val:b===1?36.5:b===2?21:22.5;let nt=null;if(se){let ft=se.val;ft<1&&ft>0?nt=Math.round(ft*1e3):nt=Math.round(ft)}else this._hass||(nt=b===1?12:b===2?8:15);let rt=0;pt?rt=Math.abs(this._formatPower(pt).kw):rt=Vt*Math.abs(Ve)/1e3;const vi=(oe.capacity_kwh!==void 0?parseFloat(oe.capacity_kwh):b===1?7.88:b===2?5.12:ei/Ft)*(Dt/100);R&&(R.innerText=`${Dt.toFixed(0)}%`),A&&(A.innerText=`${Vt.toFixed(1).replace(".",",")} V`),q&&(q.innerText=`${Math.abs(Ve).toFixed(1).replace(".",",")} A`),T&&(T.innerText=`${rt.toFixed(2).replace(".",",")} ${i}`),_e&&(_e.innerText=`${it.toFixed(1).replace(".",",")}`),ye&&(nt!==null&&!isNaN(nt)?(ye.innerText=`${nt} mV`,Q&&(Q.style.display="inline-flex",nt<=25?(Q.style.color="#34d399",Q.style.background="rgba(52, 211, 153, 0.12)",Q.style.borderColor="rgba(52, 211, 153, 0.3)"):nt<=50?(Q.style.color="#fbbf24",Q.style.background="rgba(251, 191, 36, 0.12)",Q.style.borderColor="rgba(251, 191, 36, 0.3)"):(Q.style.color="#f87171",Q.style.background="rgba(248, 113, 113, 0.16)",Q.style.borderColor="rgba(248, 113, 113, 0.4)"))):Q&&(Q.style.display="none")),Le&&(Le.innerText=`~${vi.toFixed(2).replace(".",",")} ${fi}`);let Ae=!1;pe?Ae=!1:ue?Ae=!0:Ot?Ae=(((ia=t.battery)==null?void 0:ia.power_sign)||"deye")==="deye"?Ve<0:Ve>0:Ae=Ve<0;const zt=this.shadowRoot.getElementById(`batBranchBadge_${b}`);zt&&(rt<.02?(zt.className="es-bat-branch-badge es-mono idle",zt.innerHTML=`<span>0.00 ${i}</span>`):Ae?(zt.className="es-bat-branch-badge es-mono charge",zt.innerHTML=`<span>${rt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↓</span>`):(zt.className="es-bat-branch-badge es-mono discharge",zt.innerHTML=`<span>${rt.toFixed(2)} ${i}</span> <span style="font-weight: 800;">↑</span>`));const St=this.shadowRoot.getElementById(`batPackCard_${b}`),na=St==null?void 0:St.querySelector(".es-battery-gauge"),ra=St==null?void 0:St.querySelector(".es-battery-gauge-nipple");St&&(St.style.borderColor=Ae?"rgba(16, 185, 129, 0.55)":"rgba(239, 68, 68, 0.55)"),na&&(na.style.borderColor=Ae?"#10b981":"#ef4444"),ra&&(ra.style.background=Ae?"#10b981":"#ef4444"),ae&&(Ae?(ae.className="es-bat-state-tag charge",ae.innerText=this._t("bat_charge"),ae.style.color="#34d399",ae.style.background="rgba(16, 185, 129, 0.18)",ae.style.borderColor="rgba(16, 185, 129, 0.4)"):(ae.className="es-bat-state-tag discharge",ae.innerText=this._t("bat_discharge"),ae.style.color="#f87171",ae.style.background="rgba(239, 68, 68, 0.18)",ae.style.borderColor="rgba(239, 68, 68, 0.4)")),T&&(T.style.color=Ae?"#34d399":"#f87171"),q&&(q.style.color=Ae?"#38bdf8":"#f87171");const Vi=Ae?"active-green":"active-red";ie&&fe&&Te&&re&&(ie.className=`es-bat-bar ${Dt>=10?Vi:""}`,fe.className=`es-bat-bar ${Dt>=35?Vi:""}`,Te.className=`es-bat-bar ${Dt>=65?Vi:""}`,re.className=`es-bat-bar ${Dt>=85?Vi:""}`),gi.push({kwNum:rt,isChg:Ae})}this._updateFlowPaths(),this._updateFlowAnimations(ee?z:0,ne,ce,l,ut,ke,ue,pe,I,gi,te,S,K),this._updateControlSliders()}_setupResizeObserver(){var i;if(this._resizeObserver)return;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".energy-station-container");t&&(window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>{this._updateFlowPaths()}),this._resizeObserver.observe(t)),this._rAF(()=>this._updateFlowPaths()),setTimeout(()=>this._updateFlowPaths(),150))}_updateFlowPaths(){var t,i,n,r,o,a,s,l,c;try{const d=(t=this.shadowRoot)==null?void 0:t.querySelector(".energy-station-container");if(!d)return;const _=d.getBoundingClientRect();if(_.width===0||_.height===0)return;const g=this._config||G,x=this._scale||1,u=(C,$=.5,I=.5)=>{if(!C)return null;const S=C.getBoundingClientRect();return{x:Math.round((S.left-_.left+S.width*$)/x),y:Math.round((S.top-_.top+S.height*I)/x)}},y=(C,$,I)=>{const S=this.shadowRoot.getElementById(C),N=this.shadowRoot.getElementById($);S&&S.setAttribute("d",I||""),N&&N.setAttribute("d",I||"")},v=this.shadowRoot.getElementById("gridNode"),E=this.shadowRoot.getElementById("inverterNode"),p=this.shadowRoot.getElementById("essentialNode"),f=this.shadowRoot.getElementById("totalPvPowerBadge"),h=this.shadowRoot.getElementById("masterBatteryHub"),w=this.shadowRoot.getElementById("carNode");if(v&&E){const C=v.getBoundingClientRect(),$=E.getBoundingClientRect();if(C.bottom<$.top+30){const S=u(v,.7,1),N=u(E,.2,0);if(S&&N){const Y=Math.round((S.y+N.y)/2),j=`M ${S.x} ${S.y} C ${S.x} ${Y}, ${N.x} ${Y}, ${N.x} ${N.y}`;y("pathGridInvBase","pathGridInvFlow",j)}}else{const S=Math.round(($.top-_.top+$.height*.55)/x),N=Math.round((C.right-_.left)/x),Y=Math.round(($.left-_.left)/x),j=Math.round((C.top-_.top+C.height*.5)/x);let he="";if(Math.abs(j-S)<=8)he=`M ${N} ${S} L ${Y} ${S}`;else{const ge=Math.round(N+24);he=`M ${N} ${j} C ${ge} ${j}, ${ge} ${S}, ${Y} ${S}`}y("pathGridInvBase","pathGridInvFlow",he)}}if(E&&p){const C=p.getBoundingClientRect(),$=E.getBoundingClientRect();if(C.bottom<$.top+30){const S=u(E,.8,0),N=u(p,.3,1);if(S&&N){const Y=Math.round((S.y+N.y)/2),j=`M ${S.x} ${S.y} C ${S.x} ${Y}, ${N.x} ${Y}, ${N.x} ${N.y}`;y("pathInvLoadBase","pathInvLoadFlow",j)}}else{const S=Math.round(($.top-_.top+$.height*.55)/x),N=Math.round(($.right-_.left)/x),Y=Math.round((C.left-_.left)/x),j=Math.round((C.top-_.top+C.height*.5)/x);let he="";if(Math.abs(j-S)<=8)he=`M ${N} ${S} L ${Y} ${S}`;else{const ge=Math.round(Y-24);he=`M ${N} ${S} C ${ge} ${S}, ${ge} ${j}, ${Y} ${j}`}y("pathInvLoadBase","pathInvLoadFlow",he)}}if(f&&E){const C=u(f,.5,1),$=u(E,.5,0);if(C&&$){const I=`M ${C.x} ${C.y} L ${$.x} ${$.y}`;y("pathSolarInvBase","pathSolarInvFlow",I)}}if(E&&h){const C=u(E,.5,1),$=u(h,.5,0);if(C&&$){const I=`M ${C.x} ${C.y} L ${$.x} ${$.y}`;y("pathInvBatBase","pathInvBatFlow",I)}}const k=this.shadowRoot.getElementById("nonEssentialNode"),B=k&&!k.classList.contains("hidden")&&k.offsetHeight>0,P=w&&!w.classList.contains("hidden")&&w.offsetHeight>0;if(v&&B){const C=u(v,.5,1),$=u(k,.5,0);if(C&&$){const I=`M ${C.x} ${C.y} L ${$.x} ${$.y}`;y("pathGridNonEssBase","pathGridNonEssFlow",I)}}else y("pathGridNonEssBase","pathGridNonEssFlow","");if(P){const C=B?k:v;if(C){const $=u(C,.5,1),I=u(w,.5,0);if($&&I){const S=`M ${$.x} ${$.y} L ${I.x} ${I.y}`;y("pathNonEssCarBase","pathNonEssCarFlow",S)}}else y("pathNonEssCarBase","pathNonEssCarFlow","")}else y("pathNonEssCarBase","pathNonEssCarFlow","");const m=this.shadowRoot.getElementById("subloadsBusContainer");if(p&&m){const C=u(p,.5,1),$=u(m,.5,0);if(C&&$){const I=`M ${C.x} ${C.y} L ${$.x} ${$.y}`;y("pathLoadSubloadsBase","pathLoadSubloadsFlow",I)}}else y("pathLoadSubloadsBase","pathLoadSubloadsFlow","");const F=this.shadowRoot.getElementById("auxNode");if(E&&F&&!F.classList.contains("hidden")&&F.offsetHeight>0){const C=u(F,.35,1),$=u(E,.9,0);if(C&&$){const I=Math.round((C.y+$.y)/2),S=`M ${C.x} ${C.y} C ${C.x} ${I}, ${$.x} ${I}, ${$.x} ${$.y}`;y("pathInvAuxBase","pathInvAuxFlow",S)}}else y("pathInvAuxBase","pathInvAuxFlow","");y("pathBatStemBase","pathBatStemFlow","");const K=this.shadowRoot.getElementById("windStationContainer"),J=((i=g.wind)==null?void 0:i.show)!==!1||((n=g.aux)==null?void 0:n.type)==="wind"?((r=g.wind)==null?void 0:r.turbine_count)||((a=(o=g.wind)==null?void 0:o.turbines)==null?void 0:a.length)||2:0;for(let C=1;C<=4;C++)if(C<=J&&K&&!K.classList.contains("hidden")){const $=this.shadowRoot.getElementById(`turbineCard_${C}`);if($&&h){const I=u($,.5,1),S=J===1?.5:.28+(C-1)/(J-1)*.44,N=u(h,S,0);if(I&&N){const Y=`M ${I.x} ${I.y} L ${N.x} ${N.y}`;y(`pathTurbine${C}Base`,`pathTurbine${C}Flow`,Y)}}else y(`pathTurbine${C}Base`,`pathTurbine${C}Flow`,"")}else y(`pathTurbine${C}Base`,`pathTurbine${C}Flow`,"");const te=((s=g.battery)==null?void 0:s.parallel_batteries)||((c=(l=g.battery)==null?void 0:l.modules)==null?void 0:c.length)||2;for(let C=1;C<=8;C++){const $=this.shadowRoot.getElementById(`batPackCard_${C}`),I=this.shadowRoot.getElementById(`batBranchBadge_${C}`);if(C<=te&&h&&$){const S=u(h,.5,1),N=u($,.5,0);if(S&&N){const Y=Math.round(S.y+(N.y-S.y)*.45);let j="";Math.abs(S.x-N.x)<=4?j=`M ${S.x} ${S.y} L ${N.x} ${N.y}`:j=`M ${S.x} ${S.y} C ${S.x} ${Y}, ${N.x} ${Y}, ${N.x} ${N.y}`,y(`pathBat${C}Base`,`pathBat${C}Flow`,j),I&&(I.style.left=`${N.x}px`,I.style.top=`${Y}px`,I.style.display="flex")}else y(`pathBat${C}Base`,`pathBat${C}Flow`,""),I&&(I.style.display="none")}else y(`pathBat${C}Base`,`pathBat${C}Flow`,""),I&&(I.style.display="none")}this._updateBusBars()}catch{}}_updateBusBars(){var t,i,n,r,o;try{const a=this._config||G,s=this._scale||1,l=this.shadowRoot.getElementById("solarBusSvg"),c=((t=a.solar)==null?void 0:t.pv_count)||((n=(i=a.solar)==null?void 0:i.strings)==null?void 0:n.length)||3;if(l&&c>0){const g=l.getBoundingClientRect(),x=this.shadowRoot.getElementById("pvPanel_1"),u=this.shadowRoot.getElementById(`pvPanel_${c}`),y=this.shadowRoot.getElementById("solarBusBase"),v=this.shadowRoot.getElementById("solarFlowCollector"),E=this.shadowRoot.getElementById("solarBusStemBase"),p=this.shadowRoot.getElementById("solarBusStemFlow"),f=this.shadowRoot.getElementById("solarBusFeeders");if(x&&u&&g.width>0){const h=x.getBoundingClientRect(),w=u.getBoundingClientRect(),k=Math.round((h.left-g.left+h.width/2)/s),B=Math.round((w.left-g.left+w.width/2)/s),P=13,m=Math.round((k+B)/2);if(y&&(y.setAttribute("x1",k),y.setAttribute("y1",P),y.setAttribute("x2",B),y.setAttribute("y2",P)),v&&(v.setAttribute("x1",k),v.setAttribute("y1",P),v.setAttribute("x2",B),v.setAttribute("y2",P)),E&&(E.setAttribute("x1",m),E.setAttribute("y1",P),E.setAttribute("x2",m),E.setAttribute("y2",26)),p&&(p.setAttribute("x1",m),p.setAttribute("y1",P),p.setAttribute("x2",m),p.setAttribute("y2",26)),f){let F="";for(let K=1;K<=c;K++){const Z=this.shadowRoot.getElementById(`pvPanel_${K}`);if(Z){const J=Z.getBoundingClientRect(),te=Math.round((J.left-g.left+J.width/2)/s);F+=`
                  <line x1="${te}" y1="0" x2="${te}" y2="${P}" stroke="#d97706" stroke-width="2" />
                  <line class="flow-line" x1="${te}" y1="0" x2="${te}" y2="${P}" stroke="#fbbf24" stroke-width="2.5" />
                `}}f.innerHTML=F}}}const d=this.shadowRoot.getElementById("subloadsBusSvg"),_=((o=(r=a.load)==null?void 0:r.subloads)==null?void 0:o.length)||3;if(d&&_>0){const g=d.getBoundingClientRect(),x=this.shadowRoot.getElementById("subloadCard_0"),u=this.shadowRoot.getElementById(`subloadCard_${_-1}`),y=this.shadowRoot.getElementById("essentialNode"),v=this.shadowRoot.getElementById("subloadsBusBase"),E=this.shadowRoot.getElementById("subloadsFlowCollector"),p=this.shadowRoot.getElementById("subloadsBusStemBase"),f=this.shadowRoot.getElementById("subloadsBusStemFlow"),h=this.shadowRoot.getElementById("subloadsBusFeeders");if(x&&u&&g.width>0){const w=x.getBoundingClientRect(),k=u.getBoundingClientRect(),B=Math.round((w.left-g.left+w.width/2)/s),P=Math.round((k.left-g.left+k.width/2)/s),m=13;let F=Math.round((B+P)/2);if(y){const J=y.getBoundingClientRect();F=Math.round((J.left-g.left+J.width/2)/s)}const K=Math.min(B,F),Z=Math.max(P,F);if(v&&(v.setAttribute("x1",K),v.setAttribute("y1",m),v.setAttribute("x2",Z),v.setAttribute("y2",m)),E&&(E.setAttribute("x1",K),E.setAttribute("y1",m),E.setAttribute("x2",Z),E.setAttribute("y2",m)),p&&(p.setAttribute("x1",F),p.setAttribute("y1",0),p.setAttribute("x2",F),p.setAttribute("y2",m)),f&&(f.setAttribute("x1",F),f.setAttribute("y1",0),f.setAttribute("x2",F),f.setAttribute("y2",m)),h){let J="";for(let te=0;te<_;te++){const C=this.shadowRoot.getElementById(`subloadCard_${te}`);if(C){const $=C.getBoundingClientRect(),I=Math.round(($.left-g.left+$.width/2)/s);J+=`
                  <line x1="${I}" y1="${m}" x2="${I}" y2="26" stroke="#0891b2" stroke-width="2" />
                  <line class="flow-line" x1="${I}" y1="${m}" x2="${I}" y2="26" stroke="#22d3ee" stroke-width="2.5" />
                `}}h.innerHTML=J}}}}catch{}}_applyFlowAnimation(t,i,n,r,o){if(!t)return;if(!o){t.setAttribute("class",`flow-pulse ${i} inactive`),t.style.opacity="0",t.style.animation="none";return}const a=n?"flow-reverse":"flow-forward",s=n?"esFlowBackward":"esFlowForward";t.setAttribute("class",`flow-pulse ${i} ${a}`),t.style.opacity="1",t.style.setProperty("--flow-speed",r),t.style.animation=`${s} ${r} linear infinite`}_updateFlowAnimations(t,i,n,r,o,a,s,l,c,d=[],_=0,g=0,x=0){var Me,Tt,Ie,je,Ne,lt,Oe,ve,gt,Bt,We,dt,et;const u=this._config||G,y=((Me=u.animations)==null?void 0:Me.enabled)!==!1,v=((Tt=u.animations)==null?void 0:Tt.speed)||1.2,E=(D,ee=10)=>{const xe=Math.abs(D);if(xe<.05)return"2.5s";const De=Math.min(1,xe/ee);return`${Math.max(.4,(2.6-De*1.9)*(v/1.2)).toFixed(2)}s`},p=this.shadowRoot.getElementById("pathGridInvFlow"),f=Math.abs(t),h=(((Ie=u.grid)==null?void 0:Ie.min_power_threshold)!==void 0?u.grid.min_power_threshold:50)/1e3,w=((je=u.grid)==null?void 0:je.selling_enabled)===!0,k=y&&f>=h&&(n||i&&w);this._applyFlowAnimation(p,"flow-grid",i,E(t,10),k);const B=this.shadowRoot.getElementById("pathSolarInvFlow");this._applyFlowAnimation(B,"flow-solar",!1,E(r,12),y&&r>=.05);const P=this.shadowRoot.getElementById("pathInvLoadFlow"),m=Math.abs(o);this._applyFlowAnimation(P,"flow-load",!1,E(o,10),y&&m>=.05);const F=this.shadowRoot.getElementById("pathInvBatFlow"),K=Math.abs(a),Z=y&&K>=.02&&(s||l),J=s?"flow-battery charging":"flow-battery discharging";this._applyFlowAnimation(F,J,l,E(a,8),Z);const te=this.shadowRoot.getElementById("pathGridNonEssFlow"),C=Math.abs(_);this._applyFlowAnimation(te,"flow-grid",!1,E(_,5),y&&C>=.05);const $=this.shadowRoot.getElementById("pathNonEssCarFlow")||this.shadowRoot.getElementById("pathGridCarFlow"),I=Math.abs(c);this._applyFlowAnimation($,"flow-car",!1,E(c,7),y&&I>=.05);const S=this.shadowRoot.getElementById("pathLoadSubloadsFlow"),N=Math.abs(g||o);this._applyFlowAnimation(S,"flow-load",!1,E(N,8),y&&N>=.05);const Y=this.shadowRoot.getElementById("pathInvAuxFlow"),j=Math.abs(x);this._applyFlowAnimation(Y,"flow-aux",!0,E(x,5),y&&j>=.05);const he=this.shadowRoot.getElementById("pathBatStemFlow");this._applyFlowAnimation(he,J,l,E(a,8),Z);const ge=this.shadowRoot.getElementById("solarFlowCollector"),ze=this.shadowRoot.getElementById("solarBusStemFlow");if(ge)if(!y||r<.05)ge.style.opacity="0.2",ge.style.animation="none",ze&&(ze.style.opacity="0.2",ze.style.animation="none");else{const D=E(r,12);ge.style.opacity="1",ge.setAttribute("class","flow-line"),ge.style.animation=`esDashflow ${D} linear infinite`,ze&&(ze.style.opacity="1",ze.setAttribute("class","flow-line"),ze.style.animation=`esDashflow ${D} linear infinite`)}const ue=this.shadowRoot.getElementById("subloadsFlowCollector"),pe=this.shadowRoot.getElementById("subloadsBusStemFlow");if(ue)if(!y||N<.05)ue.style.opacity="0.2",ue.style.animation="none",pe&&(pe.style.opacity="0.2",pe.style.animation="none");else{const D=E(N,8);ue.style.opacity="1",ue.setAttribute("class","flow-line"),ue.style.animation=`esDashflow ${D} linear infinite`,pe&&(pe.style.opacity="1",pe.setAttribute("class","flow-line"),pe.style.animation=`esDashflow ${D} linear infinite`)}const ke=this.shadowRoot.getElementById("batteryFlowCollector"),Pe=this.shadowRoot.getElementById("batteryBusStemFlow"),me=this.shadowRoot.getElementById("batteryBusFeeders"),Ze=l?"#f87171":"#34d399",st=l?"drop-shadow(0 0 6px #dc2626) drop-shadow(0 0 2px #fca5a5)":"drop-shadow(0 0 6px #059669) drop-shadow(0 0 2px #6ee7b7)";if(ke)if(ke.style.stroke=Ze,ke.style.filter=st,Pe&&(Pe.style.stroke=Ze,Pe.style.filter=st),!y||!Z)ke.style.opacity="0.2",ke.style.animation="none",Pe&&(Pe.style.opacity="0.2",Pe.style.animation="none");else{const D=E(a,8),ee=l?"esDashflowRev":"esDashflow";ke.style.opacity="1",ke.setAttribute("class",l?"flow-line-reverse":"flow-line"),ke.style.animation=`${ee} ${D} linear infinite`,Pe&&(Pe.style.opacity="1",Pe.setAttribute("class",l?"flow-line-reverse":"flow-line"),Pe.style.animation=`${ee} ${D} linear infinite`)}me&&me.querySelectorAll("line").forEach(D=>{if(D.style.stroke=Ze,D.style.filter=st,!y||!Z)D.style.opacity="0.2",D.style.animation="none";else{const ee=E(a,8),xe=l?"esDashflowRev":"esDashflow";D.style.opacity="1",D.setAttribute("class",l?"flow-line-reverse":"flow-line"),D.style.animation=`${xe} ${ee} linear infinite`}});for(let D=1;D<=8;D++){const ee=this.shadowRoot.getElementById(`pathBat${D}Flow`);if(!ee)continue;const xe=d[D-1],De=xe?xe.kwNum:0,Se=y&&(De>=.02||Z),ne=l;this._applyFlowAnimation(ee,J,ne,E(De||a,8),Se)}for(let D=0;D<6;D++){const ee=this.shadowRoot.getElementById(`pathSubload${D}Flow`);if(!ee)continue;const xe=(lt=(Ne=u.load)==null?void 0:Ne.subloads)==null?void 0:lt[D],De=xe?this._getEntityState(xe.entity):null,Se=De?this._formatPower(De,2).kw:D===0?2:D===1?3:4;this._applyFlowAnimation(ee,"flow-load",!1,E(Se,8),y&&Se>=.05)}const It=((Oe=u.wind)==null?void 0:Oe.show)!==!1||((ve=u.aux)==null?void 0:ve.type)==="wind",Qt=It?((gt=u.wind)==null?void 0:gt.turbine_count)||((We=(Bt=u.wind)==null?void 0:Bt.turbines)==null?void 0:We.length)||2:0,Re=((dt=u.wind)==null?void 0:dt.turbines)||[];for(let D=1;D<=4;D++){const ee=this.shadowRoot.getElementById(`pathTurbine${D}Flow`);if(ee)if(D<=Qt&&It){const xe=Re[D-1]||{},De=this._hass?0:D===1?1.45:.85,Se=this._getEntityState(xe.power_entity||`sensor.wind_turbine_${D}_power`);let ce=this._formatPower(Se,De).kw*1e3;Se&&Se.unit==="W"&&(ce=Se.val);const z=xe.animation_threshold??((et=u.wind)==null?void 0:et.animation_threshold)??50,tt=ce>=z;this._applyFlowAnimation(ee,"flow-wind",!1,E(ce/1e3,3),y&&tt)}else this._applyFlowAnimation(ee,"flow-wind",!1,"1.5s",!1)}}}customElements.get("energy-station-card")||customElements.define("energy-station-card",gr),typeof customElements<"u"&&!customElements.get("energy-station-panel")&&customElements.define("energy-station-panel",hr),window.customCards=window.customCards||[],window.customCards.some(e=>e.type==="energy-station-card")||window.customCards.push({type:"energy-station-card",name:"Energy Station Card",description:"Advanced real-time energy flow diagram for Deye, SunSynk and hybrid solar stations",preview:!0,documentationURL:"https://github.com/custom-cards/energy-station-card"}),Fe.EnergyStationCard=gr,Fe.EnergyStationPanel=hr,Fe.I18N=gn,Object.defineProperty(Fe,Symbol.toStringTag,{value:"Module"})});
