# ⚡ Energy Station PRO for Home Assistant (HA)

Повноцінний інтерактивний дашборд та кастомна Lovelace-картка для **Home Assistant** (спеціально оптимізовано під гібридні інвертори **Deye / SunSynk** та ESPHome / Solarman / Modbus).

---

## 🌟 Основні можливості

1. **Повна відповідність дизайну вашої станції**:
   - **☀️ Сонячне поле**: динамічний масив панелей (від 1 до 16 стрингів/панелей) з індивідуальними значеннями, анімованою сонячною шиною, добовою генерацією та шкалою прогресу.
   - **⚡ Гібридний інвертор**: відображення моделі (DEYE SUN-12K / SUN-8K / SUN-5K), робочої потужності, статусу, AC та DC температур, напруги, струму та частоти мережі (50.01 Hz).
   - **🔌 Додатковий порт (AUX / GEN)**: підтримка мікроінвертора, генератора, вітрогенератора або Smart Load з відображенням потужності.
   - **🌐 Мережа & Негарантоване**: відображення імпорту/експорту з автоматичною зміною напрямку потоку енергії, лічильники за день, зарядка електромобіля (EV).
   - **🏠 Гарантоване навантаження (Дім)**: споживання будинку, добовий лічильник та окремі піднавантаження (Бойлер, Тепловий насос, вентиляція, інше).
   - **🔋 Акумуляторний стек (BMS)**: головний рівень SOC%, потужність заряду/розряду з динамічним індикатором, напруга, струм, ємність kWh, поріг резерву, а також **стек із 1–8 паралельних батарейних модулів** з індивідуальними рівнями заряду та напругою.
   - **💨 Вітрогенератор (Вітряк) з динамічною анімацією**:
     - **3-лопатевий анімований ротор**: починає обертатися **тільки при досягненні заданого порогу потужності** (наприклад, ≥ 50 Вт).
     - **Адаптивна швидкість обертання**: чим вища генерація (Вт/кВт), тим швидше крутяться лопаті.
     - **Статус "Штиль / Зупинено"**: якщо вітер стихає або потужність нижча порогу, вітряк плавно зупиняється, а аура згасає.
     - Підтримка опціонального сенсора швидкості вітру (м/с).

2. **Графічний конфігуратор (Visual Card Editor)**:
   - Вбудований редактор з вкладками: *Загальні, PV Сонячні, Інвертор & AUX (з налаштуванням порогу вітряка), Батарея & Стек, Мережа & Авто, Дім & Споживачі*.
   - Швидкі пресети: **Deye ESPHome** (з вашого проекту `esp32-deye-inverter`), **Solarman** та **Демо-симуляція**.

3. **Веб-застосунок (Workbench)**:
   - Працює автономно в браузері (`http://localhost:3000`).
   - Має вбудовану симуляцію реальних коливань потужності, сонця та поривів вітру.
   - Пряме підключення до вашого Home Assistant через WebSocket API.
   - Генератор та експортер готового Lovelace YAML.

---

## 🚀 Як встановити у Home Assistant

### Крок 1. Скопіюйте файл картки
Готовий скомпільований файл знаходиться за адресою:
`energy-station-ha/dist/energy-station-card.js`

Скопіюйте його у ваш Home Assistant у папку:
```
/config/www/energy-station-card.js
```
*(Папка `www` у Home Assistant відповідає веб-шляху `/local/`)*.

### Крок 2. Додайте ресурс у Lovelace
1. У Home Assistant відкрийте: **Параметри -> Панелі керування**.
2. Натисніть **три крапки вгорі праворуч -> Ресурси** (або перейдіть за адресою `http://<IP-HA>:8123/config/lovelace/resources`).
3. Натисніть **Додати ресурс**:
   - **URL:** `/local/energy-station-card.js?v=1.0.0`
   - **Тип ресурсу:** `Модуль JavaScript (JavaScript-модуль)`
4. Натисніть **Створити** та оновіть сторінку в браузері (Ctrl + F5).

### Крок 3. Додайте картку на дашборд
1. На вашому дашборді натисніть **Редагувати панель керування -> Додати картку**.
2. Оберіть **Власний: Energy Station Card** (або у режимі YAML редактора вставте код нижче).

---

## 📋 Приклад Lovelace YAML (Deye ESPHome)

```yaml
type: custom:energy-station-card
title: "Energy Station"
animations:
  enabled: true
  speed: 1.2

solar:
  pv_count: 3
  target_daily_yield: 55.0
  total_power_entity: sensor.deye_12k_inverter_total_pv_power
  daily_yield_entity: sensor.deye_12k_inverter_daily_solar_energy
  strings:
    - name: "PV 1"
      voltage_entity: sensor.deye_12k_inverter_pv1_voltage
      current_entity: sensor.deye_12k_inverter_pv1_current
      power_entity: sensor.deye_12k_inverter_pv1_power
    - name: "PV 2"
      voltage_entity: sensor.deye_12k_inverter_pv2_voltage
      current_entity: sensor.deye_12k_inverter_pv2_current
      power_entity: sensor.deye_12k_inverter_pv2_power
    - name: "PV 3"
      voltage_entity: sensor.deye_12k_inverter_pv3_voltage
      current_entity: sensor.deye_12k_inverter_pv3_current
      power_entity: sensor.deye_12k_inverter_pv3_power

inverter:
  model_name: "DEYE SUN-12K"
  power_entity: sensor.deye_12k_inverter_inverter_power
  ac_temperature_entity: sensor.deye_12k_inverter_ac_temperature
  dc_temperature_entity: sensor.deye_12k_inverter_dc_temperature
  voltage_entity: sensor.deye_12k_inverter_grid_voltage
  current_entity: sensor.deye_12k_inverter_grid_current
  frequency_entity: sensor.deye_12k_inverter_grid_frequency

wind:
  show: true
  turbine_count: 2
  animation_threshold: 50 # Вт (поріг запуску обертання)
  max_power: 3000
  turbines:
    - name: "Вітряк 1"
      power_entity: sensor.wind_turbine_1_power
      speed_entity: sensor.wind_turbine_1_speed
      animation_threshold: 50
    - name: "Вітряк 2"
      power_entity: sensor.wind_turbine_2_power
      speed_entity: sensor.wind_turbine_2_speed
      animation_threshold: 50

aux:
  type: wind
  title: "Вітрогенератор"
  power_entity: sensor.deye_12k_inverter_aux_load_power

battery:
  parallel_batteries: 2
  reserve_soc: 20
  soc_entity: sensor.deye_12k_inverter_battery_soc
  power_entity: sensor.deye_12k_inverter_battery_power
  voltage_entity: sensor.deye_12k_inverter_battery_voltage
  current_entity: sensor.deye_12k_inverter_battery_current
  capacity_entity: sensor.inverter_12_kvt_battery_capacity
  charge_daily_entity: sensor.deye_12k_inverter_daily_battery_charge
  discharge_daily_entity: sensor.deye_12k_inverter_daily_battery_discharge
  modules:
    - name: "Батарея 1"
      soc_entity: sensor.bms_rack1_soc
      current_entity: sensor.bms_rack1_current
      voltage_entity: sensor.bms_rack1_voltage
      power_entity: sensor.bms_rack1_power
      temperature_entity: sensor.bms_rack1_temperature
      capacity_kwh: 7.88
    - name: "Батарея 2"
      soc_entity: sensor.bms_rack2_soc
      current_entity: sensor.bms_rack2_current
      voltage_entity: sensor.bms_rack2_voltage
      power_entity: sensor.bms_rack2_power
      temperature_entity: sensor.bms_rack2_temperature
      capacity_kwh: 5.12

grid:
  power_entity: sensor.deye_12k_inverter_total_grid_power
  import_daily_entity: sensor.deye_12k_inverter_daily_energy_bought
  export_daily_entity: sensor.deye_12k_inverter_daily_energy_sold
  car_power_entity: sensor.ev_charger_power

load:
  essential_power_entity: sensor.deye_12k_inverter_essential_load_power
  daily_house_entity: sensor.deye_12k_inverter_daily_load_energy
  subloads:
    - name: "Бойлер"
      entity: sensor.boiler_power
      icon: boiler
    - name: "Тепловий насос"
      entity: sensor.heat_pump_power
      icon: heat_pump
    - name: "Інше"
      entity: sensor.other_loads_power
      icon: other
```

---

## 💻 Локальний запуск веб-застосунку

```bash
cd C:\Users\Oleksandr\.gemini\antigravity-ide\scratch\energy-station-ha
npm run dev
```
Відкрийте в браузері: [http://localhost:3000](http://localhost:3000)

Для збірки нової версії картки:
```bash
npm run build:card
```
Зібраний файл з’явиться у папці `dist/energy-station-card.js`.
