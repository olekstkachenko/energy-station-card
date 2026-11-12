// Auto-updating ES module loader for Energy Station Card
// Installed once on Home Assistant; always loads the latest tagged release with offline local fallback.
const REPO = 'olekstkachenko/energy-station-card';
const FILE = 'dist/energy-station-card.js';
const LOCAL_FALLBACK = new URL('./energy-station-card.local.js', import.meta.url).href;

async function fetchWithTimeout(url, timeoutMs = 2500) {
  const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
  try {
    return await fetch(url, {
      cache: 'no-store',
      signal: ctrl ? ctrl.signal : undefined
    });
  } finally {
    if (timer) clearTimeout(timer);
  }
}

async function resolveLatestTag() {
  const storageKey = 'es_auto_loader_tag';
  const tsKey = 'es_auto_loader_tag_ts';
  let isReload = false;
  try {
    const nav = performance?.getEntriesByType?.('navigation')?.[0];
    isReload = nav?.type === 'reload';
  } catch (e) {}

  if (!isReload) {
    try {
      const cached = sessionStorage.getItem(storageKey);
      const cachedAt = Number(sessionStorage.getItem(tsKey) || '0');
      if (cached && (Date.now() - cachedAt) < 60000) return cached;
    } catch (e) {}
  }

  try {
    const res = await fetchWithTimeout(`https://api.github.com/repos/${REPO}/tags?per_page=1`);
    if (res.ok) {
      const tags = await res.json();
      if (Array.isArray(tags) && tags[0]?.name) {
        try {
          sessionStorage.setItem(storageKey, tags[0].name);
          sessionStorage.setItem(tsKey, String(Date.now()));
        } catch (e) {}
        return tags[0].name;
      }
    }
  } catch (e) {}

  try {
    const res = await fetchWithTimeout(
      `https://raw.githubusercontent.com/${REPO}/main/package.json?t=${Math.floor(Date.now() / 60000)}`
    );
    if (res.ok) {
      const pkg = await res.json();
      if (pkg?.version) {
        const tag = `v${pkg.version}`;
        try {
          sessionStorage.setItem(storageKey, tag);
          sessionStorage.setItem(tsKey, String(Date.now()));
        } catch (e) {}
        return tag;
      }
    }
  } catch (e) {}

  return null;
}

const tag = await resolveLatestTag();
if (tag) {
  try {
    await import(/* @vite-ignore */ `https://cdn.jsdelivr.net/gh/${REPO}@${tag}/${FILE}`);
  } catch (err) {
    console.warn('[EnergyStation AutoLoader] CDN failed, falling back to local bundle:', err);
    await import(/* @vite-ignore */ LOCAL_FALLBACK);
  }
} else {
  await import(/* @vite-ignore */ LOCAL_FALLBACK);
}

