const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(process.env.TEMP, 'chrome_cap_' + Date.now());

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--window-size=1200,1200',
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
      // Wait 1.5 seconds for all animations and initial card render to settle
      await new Promise(r => setTimeout(r, 1500));

      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      if (screenshot && screenshot.data) {
        const outPath = path.resolve('subloads_fixed.png');
        fs.writeFileSync(outPath, Buffer.from(screenshot.data, 'base64'));
        console.log('SUCCESS: Screenshot saved to ' + outPath);
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
}, 1500);
