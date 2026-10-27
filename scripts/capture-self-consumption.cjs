const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_cap_' + Date.now());
const artifactDir = 'C:\\Users\\Oleksandr\\.gemini\\antigravity-ide\\brain\\70724c5e-4a07-443b-8584-cb23f3824ff5';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1280,1200',
  '--disable-gpu',
  '--no-first-run',
  'http://localhost:3000/'
]);

chrome.stderr.on('data', d => process.stderr.write(d));

setTimeout(async () => {
  try {
    const json = await new Promise((resolve, reject) => {
      http.get('http://127.0.0.1:9222/json', res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = json.find(t => t.type === 'page' && t.url.includes('localhost:3000'));
    if (!page || !page.webSocketDebuggerUrl) {
      console.error('Page not found in targets:', json);
      chrome.kill();
      process.exit(1);
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let msgId = 1;
    const send = (method, params = {}) => new Promise((resolve) => {
      const id = msgId++;
      const handler = (event) => {
        const res = JSON.parse(event.data);
        if (res.id === id) {
          ws.removeEventListener('message', handler);
          resolve(res.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });

    ws.onopen = async () => {
      // 1. Wait for page load
      await new Promise(r => setTimeout(r, 2000));

      // 2. Inject user exact scenario into the card
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            if (window._simInterval) clearInterval(window._simInterval);

            const card = document.getElementById('energyStationCard');
            if (!card) return;

            const cfg = JSON.parse(JSON.stringify(card._config || {}));
            cfg.inverter = cfg.inverter || {};
            cfg.inverter.show_self_consumption = true;
            cfg.inverter.standby_power = 100; // 100W standby
            cfg.aux = cfg.aux || {};
            cfg.aux.type = 'none'; // Exactly matching user screenshot with no Aux
            cfg.load = cfg.load || {};
            cfg.load.auto_calculate = true; // Auto balance house load
            cfg.grid = cfg.grid || {};
            cfg.grid.power_sign = 'deye';
            cfg.battery = cfg.battery || {};
            cfg.battery.power_sign = 'deye';

            card.setConfig(cfg);

            const hass = {
              states: {
                'sensor.deye_12k_inverter_total_grid_power': { state: '3.763', attributes: { unit_of_measurement: 'kW' } },
                'sensor.deye_12k_inverter_battery_power': { state: '-3.383', attributes: { unit_of_measurement: 'kW' } },
                'sensor.deye_12k_inverter_battery_soc': { state: '31.0', attributes: { unit_of_measurement: '%' } },
                'sensor.deye_12k_inverter_battery_voltage': { state: '53.77', attributes: { unit_of_measurement: 'V' } },
                'sensor.deye_12k_inverter_battery_current': { state: '-6.28', attributes: { unit_of_measurement: 'A' } },
                'sensor.deye_12k_inverter_pv1_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
                'sensor.deye_12k_inverter_pv2_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
                'sensor.deye_12k_inverter_pv3_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
                'sensor.wind_turbine_1_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
                'sensor.wind_turbine_2_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } },
                'sensor.deye_12k_inverter_ac_temperature': { state: '41.20', attributes: { unit_of_measurement: '°C' } },
                'sensor.deye_12k_inverter_dc_temperature': { state: '39.40', attributes: { unit_of_measurement: '°C' } },
                'sensor.deye_12k_inverter_grid_voltage': { state: '226.40', attributes: { unit_of_measurement: 'V' } },
                'sensor.deye_12k_inverter_grid_current': { state: '16.40', attributes: { unit_of_measurement: 'A' } },
                'sensor.deye_12k_inverter_grid_frequency': { state: '50.00', attributes: { unit_of_measurement: 'Hz' } },
                'sensor.deye_12k_inverter_daily_load_energy': { state: '35.20', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.deye_12k_inverter_daily_energy_bought': { state: '30.20', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.deye_12k_inverter_daily_energy_sold': { state: '0.00', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.deye_12k_inverter_daily_battery_charge': { state: '4.30', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.deye_12k_inverter_daily_battery_discharge': { state: '6.10', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.inverter_12_kvt_battery_capacity': { state: '28.60', attributes: { unit_of_measurement: 'kWh' } },
                'sensor.bms_rack1_soc': { state: '66', attributes: { unit_of_measurement: '%' } },
                'sensor.bms_rack1_voltage': { state: '53.4', attributes: { unit_of_measurement: 'V' } },
                'sensor.bms_rack1_power': { state: '1.21', attributes: { unit_of_measurement: 'kW' } },
                'sensor.bms_rack2_soc': { state: '71', attributes: { unit_of_measurement: '%' } },
                'sensor.bms_rack2_voltage': { state: '53.4', attributes: { unit_of_measurement: 'V' } },
                'sensor.bms_rack2_power': { state: '1.48', attributes: { unit_of_measurement: 'kW' } },
                'sensor.boiler_power': { state: '0.000', attributes: { unit_of_measurement: 'kW' } }
              },
              callService: () => {}
            };

            card.hass = hass;
          })()
        `
      });

      await new Promise(r => setTimeout(r, 1200));

      // 3. Capture Screenshot 1: Card with exact user scenario
      const screenshot1 = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot1 && screenshot1.data) {
        const out1 = path.join(artifactDir, 'self_consumption_live_card.png');
        fs.writeFileSync(out1, Buffer.from(screenshot1.data, 'base64'));
        console.log('SUCCESS: Saved Screenshot 1 to ' + out1);
      }

      // 4. Open Settings Modal -> Inverter tab
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            document.getElementById('btnOpenSettings')?.click();
            const editor = document.getElementById('cardEditor');
            if (editor && editor.shadowRoot) {
              const invTabBtn = editor.shadowRoot.querySelector('[data-tab="inverter"]');
              if (invTabBtn) invTabBtn.click();
              setTimeout(() => {
                const group = editor.shadowRoot.querySelector('#invShowSelfConsumption')?.closest('.field-group');
                if (group) group.scrollIntoView({ behavior: 'instant', block: 'start' });
              }, 100);
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 1000));

      // 5. Capture Screenshot 2: Editor Inverter tab
      const screenshot2 = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot2 && screenshot2.data) {
        const out2 = path.join(artifactDir, 'self_consumption_editor_inverter.png');
        fs.writeFileSync(out2, Buffer.from(screenshot2.data, 'base64'));
        console.log('SUCCESS: Saved Screenshot 2 to ' + out2);
      }

      // 6. Switch to loads tab in Editor
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            const editor = document.getElementById('cardEditor');
            if (editor && editor.shadowRoot) {
              const loadTabBtn = editor.shadowRoot.querySelector('[data-tab="loads"]');
              if (loadTabBtn) loadTabBtn.click();
              setTimeout(() => {
                const group = editor.shadowRoot.querySelector('#loadAutoCalculate')?.closest('.field-group');
                if (group) group.scrollIntoView({ behavior: 'instant', block: 'start' });
              }, 100);
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 1000));

      // 7. Capture Screenshot 3: Editor Loads tab
      const screenshot3 = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot3 && screenshot3.data) {
        const out3 = path.join(artifactDir, 'self_consumption_editor_load.png');
        fs.writeFileSync(out3, Buffer.from(screenshot3.data, 'base64'));
        console.log('SUCCESS: Saved Screenshot 3 to ' + out3);
      }

      ws.close();
      chrome.kill();
      process.exit(0);
    };
  } catch (err) {
    console.error('Error during capture:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);
