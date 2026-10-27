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
      // 1. Wait for page to initialize
      await new Promise(r => setTimeout(r, 2000));

      // Capture Screenshot 1: Main card with zeroed out / deduplicated wind section
      const screenshot1 = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot1 && screenshot1.data) {
        const out1 = path.join(artifactDir, 'wind_fixed_card.png');
        fs.writeFileSync(out1, Buffer.from(screenshot1.data, 'base64'));
        console.log('SUCCESS: Saved Screenshot 1 to ' + out1);
      }

      // 2. Open Settings Modal and switch to Inverter tab
      await send('Runtime.evaluate', {
        expression: `
          (function() {
            document.getElementById('btnOpenSettings')?.click();
            const editor = document.getElementById('cardEditor');
            if (editor && editor.shadowRoot) {
              const invTabBtn = editor.shadowRoot.querySelector('[data-tab="inverter"]');
              if (invTabBtn) invTabBtn.click();
              setTimeout(() => {
                const windGroup = editor.shadowRoot.querySelector('#windThreshold')?.closest('.field-group');
                if (windGroup) {
                  windGroup.scrollIntoView({ behavior: 'instant', block: 'start' });
                }
              }, 100);
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 1200));

      // Capture Screenshot 2: Modal showing wind settings fields
      const screenshot2 = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot2 && screenshot2.data) {
        const out2 = path.join(artifactDir, 'wind_editor_fields.png');
        fs.writeFileSync(out2, Buffer.from(screenshot2.data, 'base64'));
        console.log('SUCCESS: Saved Screenshot 2 to ' + out2);
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
