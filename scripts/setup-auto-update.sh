#!/bin/sh
# One-time setup script for Home Assistant (run inside HA SSH terminal).
# Configures unified symlinks (/config/www <-> /config/www/community/energy-station-card)
# and installs permanent Auto-Loaders + offline local fallbacks so future updates require zero manual SSH commands.

set -e

RAW_BASE="https://raw.githubusercontent.com/olekstkachenko/energy-station-card/main"
TS="$(date +%s)"
WWW_DIR="/config/www"
HACS_DIR="/config/www/community/energy-station-card"

echo "[1/4] Preparing directories..."
mkdir -p "$WWW_DIR" "$HACS_DIR"

echo "[2/4] Downloading local offline fallbacks (latest dist bundles)..."
wget -q -O "$WWW_DIR/energy-station-card.local.js" "$RAW_BASE/dist/energy-station-card.js?$TS"
wget -q -O "$WWW_DIR/energy-station-panel.local.js" "$RAW_BASE/dist/energy-station-panel.js?$TS"

echo "[3/4] Installing permanent Auto-Loaders..."
wget -q -O "$WWW_DIR/energy-station-card.js" "$RAW_BASE/scripts/loaders/energy-station-card-loader.js?$TS"
wget -q -O "$WWW_DIR/energy-station-panel.js" "$RAW_BASE/scripts/loaders/energy-station-panel-loader.js?$TS"

echo "[4/4] Linking HACS directory to /config/www and clearing stale .gz caches..."
rm -f "$HACS_DIR"/*.gz
for f in energy-station-card.js energy-station-panel.js energy-station-card.local.js energy-station-panel.local.js; do
  rm -f "$HACS_DIR/$f"
  ln -s "$WWW_DIR/$f" "$HACS_DIR/$f" 2>/dev/null || cp "$WWW_DIR/$f" "$HACS_DIR/$f"
done

RESTART_NEEDED=0

if [ -f "/config/.storage/lovelace_resources" ]; then
  if grep -q "energy-station-card\.js" "/config/.storage/lovelace_resources"; then
    cp "/config/.storage/lovelace_resources" "/config/.storage/lovelace_resources.bak.$TS"
    sed -E -i 's|(energy-station-card\.js)(\?[^"]*)?"|\1?v=auto"|g' "/config/.storage/lovelace_resources"
    echo " -> Updated /config/.storage/lovelace_resources to ?v=auto"
    RESTART_NEEDED=1
  fi
fi

if [ -f "/config/configuration.yaml" ]; then
  if grep -q "energy-station-panel\.js" "/config/configuration.yaml"; then
    cp "/config/configuration.yaml" "/config/configuration.yaml.bak.$TS"
    sed -E -i 's|(energy-station-panel\.js)(\?[^[:space:]"'"'"']*)?|\1?v=auto|g' "/config/configuration.yaml"
    echo " -> Updated /config/configuration.yaml module_url to ?v=auto"
    RESTART_NEEDED=1
  fi
fi

echo ""
echo "================================================================"
echo "  Energy Station Auto-Updater installed successfully!"
echo "================================================================"
if [ "$RESTART_NEEDED" -eq 1 ]; then
  echo "  Final one-time step:"
  echo "    Restart Home Assistant (run: ha core restart) OR purge"
  echo "    Cloudflare cache once, then press Ctrl+F5 in your browser."
  echo "  After this, all future updates load automatically on F5!"
else
  echo "  Purge Cloudflare cache once (or bump ?v=auto in Resources)"
  echo "  and press Ctrl+F5 in your browser."
fi
echo "================================================================"
