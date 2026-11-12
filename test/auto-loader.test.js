import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

describe('Auto-Loader & HA Setup Script', () => {
  test('card and panel auto-loaders use jsDelivr tag resolution and local offline fallback', () => {
    const cardLoader = fs.readFileSync(
      path.resolve('scripts/loaders/energy-station-card-loader.js'),
      'utf8'
    );
    const panelLoader = fs.readFileSync(
      path.resolve('scripts/loaders/energy-station-panel-loader.js'),
      'utf8'
    );

    assert.ok(cardLoader.includes('dist/energy-station-card.js'));
    assert.ok(cardLoader.includes('./energy-station-card.local.js'));
    assert.ok(cardLoader.includes('api.github.com/repos/'));
    assert.ok(cardLoader.includes('cdn.jsdelivr.net/gh/'));
    assert.ok(cardLoader.includes('AbortController'));

    assert.ok(panelLoader.includes('dist/energy-station-panel.js'));
    assert.ok(panelLoader.includes('./energy-station-panel.local.js'));
    assert.ok(panelLoader.includes('api.github.com/repos/'));
    assert.ok(panelLoader.includes('cdn.jsdelivr.net/gh/'));
  });

  test('setup-auto-update.sh copies real files (no symlinks), strips .gz, and uses LF endings', () => {
    const script = fs.readFileSync(
      path.resolve('scripts/setup-auto-update.sh'),
      'utf8'
    );
    assert.ok(!script.includes('\r\n'), 'Shell script must use LF line endings for Alpine core-ssh');
    assert.ok(!script.includes('ln -s'), 'Must NOT use ln -s because Home Assistant aiohttp rejects symlinks with 404');
    assert.ok(script.includes('cp -f "$WWW_DIR/$f" "$HACS_DIR/$f"'));
    assert.ok(script.includes('/config/www/community/energy-station-card'));
    assert.ok(script.includes('rm -f "$HACS_DIR"/*.gz'));
    assert.ok(script.includes('energy-station-card.local.js'));
    assert.ok(script.includes('energy-station-panel.local.js'));
    assert.ok(script.includes('?v=auto'));
  });
});

