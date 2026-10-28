export const PRESETS = {
  deye_esphome: {
    name: 'Deye SUN-12K (Ваш ESPHome / Modbus)',
    description: 'Точна конфігурація сенсорів з вашого проекту esp32-deye-inverter',
    config: {
      title: 'Energy Station',
      inverter: {
        model_name: 'DEYE SUN-12K',
        power_entity: 'sensor.deye_12k_inverter_inverter_power',
        ac_temperature_entity: 'sensor.deye_12k_inverter_ac_temperature',
        dc_temperature_entity: 'sensor.deye_12k_inverter_dc_temperature',
        voltage_entity: 'sensor.deye_12k_inverter_grid_voltage',
        current_entity: 'sensor.deye_12k_inverter_grid_current',
        frequency_entity: 'sensor.deye_12k_inverter_grid_frequency'
      },
      solar: {
        pv_count: 3,
        total_power_entity: '', // Автоматично розраховується як сума стрінгів PV
        daily_yield_entity: 'sensor.deye_12k_inverter_daily_solar_energy',
        target_daily_yield: 55.0,
        strings: [
          {
            id: 'pv1',
            name: 'PV 1',
            voltage_entity: 'sensor.deye_12k_inverter_pv1_voltage',
            current_entity: 'sensor.deye_12k_inverter_pv1_current',
            power_entity: 'sensor.deye_12k_inverter_pv1_power'
          },
          {
            id: 'pv2',
            name: 'PV 2',
            voltage_entity: 'sensor.deye_12k_inverter_pv2_voltage',
            current_entity: 'sensor.deye_12k_inverter_pv2_current',
            power_entity: 'sensor.deye_12k_inverter_pv2_power'
          },
          {
            id: 'pv3',
            name: 'PV 3',
            voltage_entity: 'sensor.deye_12k_inverter_pv3_voltage',
            current_entity: 'sensor.deye_12k_inverter_pv3_current',
            power_entity: 'sensor.deye_12k_inverter_pv3_power'
          }
        ]
      },
      battery: {
        parallel_batteries: 2,
        soc_entity: 'sensor.deye_12k_inverter_battery_soc',
        power_entity: 'sensor.deye_12k_inverter_battery_power',
        voltage_entity: 'sensor.deye_12k_inverter_battery_voltage',
        current_entity: 'sensor.deye_12k_inverter_battery_current',
        temperature_entity: 'sensor.deye_12k_inverter_battery_temperature',
        capacity_entity: 'sensor.inverter_12_kvt_battery_capacity',
        charge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_charge',
        discharge_daily_entity: 'sensor.deye_12k_inverter_daily_battery_discharge',
        reserve_soc: 20,
        modules: [
          {
            id: 'bat1',
            name: 'Батарея 1',
            soc_entity: 'sensor.bms_rack1_soc',
            current_entity: 'sensor.bms_rack1_current',
            voltage_entity: 'sensor.bms_rack1_voltage',
            power_entity: 'sensor.bms_rack1_power',
            temperature_entity: 'sensor.bms_rack1_temperature',
            cell_delta_entity: 'sensor.bms_rack1_cell_delta',
            capacity_kwh: 7.88
          },
          {
            id: 'bat2',
            name: 'Батарея 2',
            soc_entity: 'sensor.bms_rack2_soc',
            current_entity: 'sensor.bms_rack2_current',
            voltage_entity: 'sensor.bms_rack2_voltage',
            power_entity: 'sensor.bms_rack2_power',
            temperature_entity: 'sensor.bms_rack2_temperature',
            cell_delta_entity: 'sensor.bms_rack2_cell_delta',
            capacity_kwh: 5.12
          }
        ]
      },
      grid: {
        power_entity: 'sensor.deye_12k_inverter_total_grid_power',
        import_daily_entity: 'sensor.deye_12k_inverter_daily_energy_bought',
        export_daily_entity: 'sensor.deye_12k_inverter_daily_energy_sold',
        car_power_entity: 'sensor.ev_charger_power'
      },
      load: {
        essential_power_entity: 'sensor.deye_12k_inverter_load_power',
        daily_house_entity: 'sensor.deye_12k_inverter_daily_load_energy',
        subloads: [
          { id: 'boiler', name: 'Бойлер', entity: 'sensor.boiler_power', icon: 'boiler' },
          { id: 'heat_pump', name: 'Тепловий насос', entity: 'sensor.heat_pump_power', icon: 'heat_pump' },
          { id: 'other', name: 'Інше', entity: 'sensor.other_loads_power', icon: 'other' }
        ]
      },
      aux: {
        type: 'microinverter',
        title: 'Мікроінвертор',
        subtitle: 'Джерело → GEN port',
        power_entity: 'sensor.deye_12k_inverter_aux_load_power',
        wind_animation_threshold: 50
      },
      wind: {
        show: true,
        turbine_count: 2,
        animation_threshold: 50,
        max_power: 3000,
        turbines: [
          {
            id: 'turbine_1',
            name: 'Вітряк 1',
            power_entity: 'sensor.wind_turbine_1_power',
            speed_entity: 'sensor.wind_turbine_1_speed',
            animation_threshold: 50
          },
          {
            id: 'turbine_2',
            name: 'Вітряк 2',
            power_entity: 'sensor.wind_turbine_2_power',
            speed_entity: 'sensor.wind_turbine_2_speed',
            animation_threshold: 50
          }
        ]
      }
    }
  },

  deye_solarman: {
    name: 'Deye Solarman Інтеграція',
    description: 'Стандартні entity_id хмарної або локальної Solarman інтеграції',
    config: {
      title: 'Energy Station',
      inverter: {
        model_name: 'DEYE HYBRID',
        power_entity: 'sensor.solarman_inverter_power',
        ac_temperature_entity: 'sensor.solarman_radiator_temperature',
        dc_temperature_entity: 'sensor.solarman_dc_temperature',
        voltage_entity: 'sensor.solarman_grid_voltage',
        current_entity: 'sensor.solarman_grid_current',
        frequency_entity: 'sensor.solarman_grid_frequency'
      },
      solar: {
        pv_count: 2,
        total_power_entity: 'sensor.solarman_pv_total_power',
        daily_yield_entity: 'sensor.solarman_daily_production',
        target_daily_yield: 50.0,
        strings: [
          {
            id: 'pv1',
            name: 'PV 1',
            voltage_entity: 'sensor.solarman_pv1_voltage',
            current_entity: 'sensor.solarman_pv1_current',
            power_entity: 'sensor.solarman_pv1_power'
          },
          {
            id: 'pv2',
            name: 'PV 2',
            voltage_entity: 'sensor.solarman_pv2_voltage',
            current_entity: 'sensor.solarman_pv2_current',
            power_entity: 'sensor.solarman_pv2_power'
          }
        ]
      },
      battery: {
        parallel_batteries: 2,
        soc_entity: 'sensor.solarman_battery_soc',
        power_entity: 'sensor.solarman_battery_power',
        voltage_entity: 'sensor.solarman_battery_voltage',
        current_entity: 'sensor.solarman_battery_current',
        temperature_entity: 'sensor.solarman_battery_temperature',
        charge_daily_entity: 'sensor.solarman_daily_battery_charge',
        discharge_daily_entity: 'sensor.solarman_daily_battery_discharge',
        reserve_soc: 20,
        modules: [
          {
            id: 'bat1',
            name: 'Батарея 1',
            soc_entity: 'sensor.solarman_battery_soc',
            current_entity: 'sensor.solarman_battery_current',
            voltage_entity: 'sensor.solarman_battery_voltage',
            power_entity: 'sensor.solarman_battery_power',
            temperature_entity: 'sensor.solarman_battery_temperature',
            cell_delta_entity: 'sensor.solarman_battery_cell_delta'
          },
          {
            id: 'bat2',
            name: 'Батарея 2',
            soc_entity: 'sensor.solarman_battery_pack2_soc',
            current_entity: 'sensor.solarman_battery_pack2_current',
            voltage_entity: 'sensor.solarman_battery_pack2_voltage',
            power_entity: 'sensor.solarman_battery_pack2_power',
            temperature_entity: 'sensor.solarman_battery_pack2_temperature',
            cell_delta_entity: 'sensor.solarman_battery_pack2_cell_delta'
          }
        ]
      },
      grid: {
        power_entity: 'sensor.solarman_grid_external_power',
        import_daily_entity: 'sensor.solarman_daily_energy_bought',
        export_daily_entity: 'sensor.solarman_daily_energy_sold',
        car_power_entity: 'sensor.ev_charger_power'
      },
      load: {
        essential_power_entity: 'sensor.solarman_essential_load',
        daily_house_entity: 'sensor.solarman_daily_load_energy',
        subloads: [
          { id: 'boiler', name: 'Бойлер', entity: 'sensor.boiler_power', icon: 'boiler' },
          { id: 'heat_pump', name: 'Тепловий насос', entity: 'sensor.heat_pump_power', icon: 'heat_pump' },
          { id: 'other', name: 'Інше', entity: 'sensor.other_loads_power', icon: 'other' }
        ]
      },
      aux: {
        type: 'microinverter',
        title: 'Мікроінвертор',
        subtitle: 'Джерело → GEN port',
        power_entity: 'sensor.microinverter_power'
      }
    }
  },

  screenshot_simulation: {
    name: 'Демо / Симуляція зі скріншоту',
    description: '10 PV панелей, 5 батарейних модулів, бойлер, тепловий насос, мікроінвертор',
    config: {
      title: 'Energy Station',
      inverter: {
        model_name: 'DEYE SUN-8K',
        power_entity: 'mock.inverter_power',
        ac_temperature_entity: 'mock.ac_temp',
        dc_temperature_entity: 'mock.dc_temp',
        voltage_entity: 'mock.volt',
        current_entity: 'mock.current',
        frequency_entity: 'mock.freq'
      },
      solar: {
        pv_count: 10,
        total_power_entity: 'mock.pv_total',
        daily_yield_entity: 'mock.pv_daily',
        target_daily_yield: 55.0
      },
      battery: {
        parallel_batteries: 5,
        soc_entity: 'mock.bat_soc',
        power_entity: 'mock.bat_power',
        voltage_entity: 'mock.bat_volt',
        current_entity: 'mock.bat_current',
        capacity_entity: 'mock.bat_cap',
        charge_daily_entity: 'mock.bat_charge',
        discharge_daily_entity: 'mock.bat_discharge',
        reserve_soc: 20
      },
      grid: {
        power_entity: 'mock.grid_power',
        import_daily_entity: 'mock.grid_import',
        export_daily_entity: 'mock.grid_export',
        car_power_entity: 'mock.car_power'
      },
      load: {
        essential_power_entity: 'mock.essential_power',
        daily_house_entity: 'mock.house_daily',
        subloads: [
          { id: 'boiler', name: 'Бойлер', entity: 'mock.boiler_power', icon: 'boiler' },
          { id: 'heat_pump', name: 'Тепловий насос', entity: 'mock.heat_pump_power', icon: 'heat_pump' },
          { id: 'other', name: 'Інше', entity: 'mock.other_power', icon: 'other' }
        ]
      },
      aux: {
        type: 'microinverter',
        title: 'Мікроінвертор',
        subtitle: 'Джерело → GEN port',
        power_entity: 'mock.aux_power'
      },
      wind: {
        show: true,
        turbine_count: 2,
        animation_threshold: 50,
        max_power: 3000,
        turbines: [
          {
            id: 'turbine_1',
            name: 'Вітряк 1',
            power_entity: 'mock.wind_turbine_1_power',
            daily_energy_entity: 'mock.wind_turbine_1_daily_energy',
            monthly_energy_entity: 'mock.wind_turbine_1_monthly_energy',
            animation_threshold: 50
          },
          {
            id: 'turbine_2',
            name: 'Вітряк 2',
            power_entity: 'mock.wind_turbine_2_power',
            daily_energy_entity: 'mock.wind_turbine_2_daily_energy',
            monthly_energy_entity: 'mock.wind_turbine_2_monthly_energy',
            animation_threshold: 50
          }
        ]
      }
    }
  }
};
