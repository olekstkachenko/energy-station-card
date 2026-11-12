// src/card/outage-schedule.js
// Power Outage Schedule module for Ukraine (default: Kyiv Oblast / ДТЕК КРЕМ, Group 6.1)

export const OUTAGE_DATA_BASE_URL =
  'https://raw.githubusercontent.com/Baskerville42/outage-data-ua/main/data';

export const OUTAGE_REGIONS = {
  'kyiv-region': { uk: 'Київська обл.', en: 'Kyiv Oblast', jsonFile: 'kyiv-region.json' },
  'kyiv': { uk: 'м. Київ', en: 'Kyiv City', jsonFile: 'kyiv.json' },
  'dnipro': { uk: 'Дніпропетровська обл.', en: 'Dnipro Oblast', jsonFile: 'dnipro.json' },
  'odesa': { uk: 'Одеська область', en: 'Odesa Oblast', jsonFile: 'odesa.json' }
};

const _scheduleCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Normalize user group input like "6,1", "6.1", "GPV6.1" -> { key: 'GPV6.1', label: '6.1' }.
 */
export function normalizeOutageGroup(group) {
  const raw = String(group || '6.1').trim().replace(',', '.').toUpperCase();
  const stripped = raw.replace(/^GPV/, '').trim() || '6.1';
  return {
    key: `GPV${stripped}`,
    label: stripped
  };
}

/**
 * Extract date/time fields in Europe/Kyiv timezone regardless of host browser TZ.
 */
export function getKyivTimeInfo(now = new Date()) {
  const tz = 'Europe/Kyiv';
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false
  });

  const parts = {};
  for (const p of fmt.formatToParts(now)) {
    parts[p.type] = p.value;
  }

  let hour = parseInt(parts.hour, 10);
  if (hour === 24) hour = 0;
  const minute = parseInt(parts.minute, 10) || 0;
  const dateStr = `${parts.year}-${parts.month}-${parts.day}`;

  // Compute tomorrow in Europe/Kyiv cleanly via noon UTC anchor of dateStr
  const noonUtc = new Date(`${dateStr}T12:00:00Z`);
  const tomorrowNoon = new Date(noonUtc.getTime() + 24 * 60 * 60 * 1000);
  const tomorrowFmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const tomorrowDateStr = tomorrowFmt.format(tomorrowNoon);

  const weekdayMap = { Mon: '1', Tue: '2', Wed: '3', Thu: '4', Fri: '5', Sat: '6', Sun: '7' };
  const weekdayIso = weekdayMap[parts.weekday] || '1';
  const tomorrowWeekdayIso = String((parseInt(weekdayIso, 10) % 7) + 1);

  return {
    dateStr,
    tomorrowDateStr,
    hour,
    minute,
    minuteInDay: hour * 60 + minute,
    slotIndex: Math.min(47, hour * 2 + (minute >= 30 ? 1 : 0)),
    timeStr: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
    weekdayIso,
    tomorrowWeekdayIso
  };
}

function unixSecToKyivDateStr(unixSec) {
  const d = new Date(Number(unixSec) * 1000);
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Kyiv',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return fmt.format(d);
}

/**
 * Convert provider 24-hour map ("1".."24") into 48 half-hour slots ('on' | 'off' | 'maybe').
 */
export function hourMapToSlots(hourMap) {
  const slots = new Array(48).fill('on');
  if (!hourMap || typeof hourMap !== 'object') return slots;

  for (let h = 1; h <= 24; h++) {
    const val = hourMap[String(h)] || 'yes';
    const baseIdx = (h - 1) * 2;
    if (val === 'no') {
      slots[baseIdx] = 'off';
      slots[baseIdx + 1] = 'off';
    } else if (val === 'first') {
      slots[baseIdx] = 'off';
      slots[baseIdx + 1] = 'on';
    } else if (val === 'second') {
      slots[baseIdx] = 'on';
      slots[baseIdx + 1] = 'off';
    } else if (val === 'maybe') {
      slots[baseIdx] = 'maybe';
      slots[baseIdx + 1] = 'maybe';
    } else if (val === 'mfirst') {
      slots[baseIdx] = 'maybe';
      slots[baseIdx + 1] = 'on';
    } else if (val === 'msecond') {
      slots[baseIdx] = 'on';
      slots[baseIdx + 1] = 'maybe';
    } else {
      slots[baseIdx] = 'on';
      slots[baseIdx + 1] = 'on';
    }
  }
  return slots;
}

export function slotToTimeStr(slotIdx) {
  const totalMin = slotIdx * 30;
  const hh = Math.floor(totalMin / 60);
  const mm = totalMin % 60;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

/**
 * Group contiguous 'off' or 'maybe' slots into readable intervals.
 */
export function extractOutageIntervals(slots) {
  if (!Array.isArray(slots) || slots.length === 0) return [];
  const intervals = [];
  let active = null;

  for (let i = 0; i < slots.length; i++) {
    const st = slots[i];
    if (st === 'off' || st === 'maybe') {
      if (active && active.type === st) {
        active.endSlot = i + 1;
      } else {
        if (active) intervals.push(finalizeInterval(active));
        active = { startSlot: i, endSlot: i + 1, type: st };
      }
    } else if (active) {
      intervals.push(finalizeInterval(active));
      active = null;
    }
  }
  if (active) intervals.push(finalizeInterval(active));
  return intervals;
}

function finalizeInterval(item) {
  return {
    startSlot: item.startSlot,
    endSlot: item.endSlot,
    start: slotToTimeStr(item.startSlot),
    end: slotToTimeStr(item.endSlot),
    durationMin: (item.endSlot - item.startSlot) * 30,
    type: item.type
  };
}

export function formatDuration(totalMinutes, lang = 'uk') {
  const mins = Math.max(0, Math.round(totalMinutes));
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (lang === 'en') {
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    return `${m}m`;
  }
  if (h > 0 && m > 0) return `${h} год ${m} хв`;
  if (h > 0) return `${h} год`;
  return `${m} хв`;
}

function findNextTransition(slotsToday, slotsTomorrow, nowInfo) {
  const curIdx = nowInfo.slotIndex;
  const curState = slotsToday[curIdx] || 'on';
  const isCurrentlyOff = curState === 'off';

  const combined = [...slotsToday];
  if (slotsTomorrow) combined.push(...slotsTomorrow);

  for (let i = curIdx + 1; i < combined.length; i++) {
    const st = combined[i] || 'on';
    const nextIsOff = st === 'off';
    // Track major ON <-> OFF (or OFF <-> ON / MAYBE) transitions
    if (isCurrentlyOff && st !== 'off') {
      const targetMin = i * 30;
      const diffMin = targetMin - nowInfo.minuteInDay;
      return {
        type: 'on',
        isTomorrow: i >= 48,
        atTime: slotToTimeStr(i % 48),
        minutesLeft: Math.max(1, diffMin)
      };
    }
    if (!isCurrentlyOff && nextIsOff) {
      const targetMin = i * 30;
      const diffMin = targetMin - nowInfo.minuteInDay;
      return {
        type: 'off',
        isTomorrow: i >= 48,
        atTime: slotToTimeStr(i % 48),
        minutesLeft: Math.max(1, diffMin)
      };
    }
  }
  return null;
}

/**
 * Compute full outage schedule summary for UI rendering.
 */
export function computeOutageSummary(json, outageCfg = {}, now = new Date(), haInfo = null) {
  const regionId = OUTAGE_REGIONS[outageCfg.region] ? outageCfg.region : 'kyiv-region';
  const regionMeta = OUTAGE_REGIONS[regionId];
  const { key: groupKey, label: groupLabel } = normalizeOutageGroup(outageCfg.group || '6.1');
  const nowInfo = getKyivTimeInfo(now);

  let todayHourMap = null;
  let tomorrowHourMap = null;
  let isFactToday = false;
  let isFactTomorrow = false;

  const showTomorrow = nowInfo.hour >= 22;

  if (json?.fact?.data && typeof json.fact.data === 'object') {
    for (const [tsKey, groupsObj] of Object.entries(json.fact.data)) {
      if (!groupsObj || typeof groupsObj !== 'object') continue;
      const dayDate = unixSecToKyivDateStr(tsKey);
      if (dayDate === nowInfo.dateStr && groupsObj[groupKey]) {
        todayHourMap = groupsObj[groupKey];
        isFactToday = true;
      } else if (showTomorrow && dayDate === nowInfo.tomorrowDateStr && groupsObj[groupKey]) {
        tomorrowHourMap = groupsObj[groupKey];
        isFactTomorrow = true;
      }
    }
  }

  // Preset weekly schedule fallback for today only when fact is not yet published.
  // Tomorrow schedule is intentionally hidden before 22:00 Kyiv time and requires updated fact data.
  if (!todayHourMap && json?.preset?.data?.[groupKey]?.[nowInfo.weekdayIso]) {
    todayHourMap = json.preset.data[groupKey][nowInfo.weekdayIso];
  }

  const hasData = Boolean(todayHourMap);
  const todaySlots = todayHourMap ? hourMapToSlots(todayHourMap) : new Array(48).fill('on');
  const tomorrowSlots = tomorrowHourMap ? hourMapToSlots(tomorrowHourMap) : null;

  const todayIntervals = extractOutageIntervals(todaySlots);
  const tomorrowIntervals = tomorrowSlots ? extractOutageIntervals(tomorrowSlots) : [];

  const todayOffMinutes = todaySlots.reduce((acc, s) => acc + (s === 'off' ? 30 : 0), 0);
  const tomorrowOffMinutes = tomorrowSlots
    ? tomorrowSlots.reduce((acc, s) => acc + (s === 'off' ? 30 : 0), 0)
    : null;

  let currentStatus = hasData ? todaySlots[nowInfo.slotIndex] : 'unknown';
  let nextEvent = hasData ? findNextTransition(todaySlots, tomorrowSlots, nowInfo) : null;

  // Optional HA entity override (Svitlo Yeah / Svitlo Live)
  const sourceMode = outageCfg.source || 'auto';
  if (haInfo?.statusRaw && (sourceMode === 'ha_entity' || (!hasData && sourceMode === 'auto'))) {
    const raw = String(haInfo.statusRaw).toLowerCase();
    if (raw.includes('outage') || raw.includes('off') || raw.includes('emergency') || raw === 'false') {
      currentStatus = 'off';
    } else if (raw.includes('connect') || raw.includes('on') || raw === 'true') {
      currentStatus = 'on';
    }
  }

  return {
    regionId,
    regionLabelUk: regionMeta.uk,
    regionLabelEn: regionMeta.en,
    groupKey,
    groupLabel,
    hasData,
    isFactToday,
    isFactTomorrow,
    todayDateStr: nowInfo.dateStr,
    tomorrowDateStr: nowInfo.tomorrowDateStr,
    currentSlotIndex: nowInfo.slotIndex,
    minuteInDay: nowInfo.minuteInDay,
    timeStr: nowInfo.timeStr,
    currentStatus,
    nextEvent,
    todaySlots,
    tomorrowSlots,
    todayIntervals,
    tomorrowIntervals,
    todayOffHours: +(todayOffMinutes / 60).toFixed(1),
    tomorrowOffHours: tomorrowOffMinutes !== null ? +(tomorrowOffMinutes / 60).toFixed(1) : null,
    lastUpdatedStr: json?.fact?.update || formatIsoUpdated(json?.lastUpdated) || '',
    isGridBlackout: haInfo?.isGridBlackout ?? null,
    actualGridVoltage: typeof haInfo?.actualGridVoltage === 'number' ? haInfo.actualGridVoltage : null,
    haNextOutageRaw: haInfo?.nextOutageRaw || null,
    haNextPowerRaw: haInfo?.nextPowerRaw || null
  };
}

function formatIsoUpdated(isoStr) {
  if (!isoStr) return '';
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat('uk-UA', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(d);
  } catch (e) {
    return '';
  }
}

/**
 * Fetch outage JSON for the selected region with in-memory TTL cache.
 */
export async function fetchOutageSchedule(region = 'kyiv-region', fetchFn = globalThis.fetch, force = false) {
  const regionId = OUTAGE_REGIONS[region] ? region : 'kyiv-region';
  const entry = _scheduleCache.get(regionId);
  const nowMs = Date.now();

  if (!force && entry && (nowMs - entry.fetchedAt) < CACHE_TTL_MS) {
    return entry.data;
  }

  if (typeof fetchFn !== 'function') {
    return entry?.data || null;
  }

  const file = OUTAGE_REGIONS[regionId].jsonFile;
  const url = `${OUTAGE_DATA_BASE_URL}/${file}${force ? `?t=${nowMs}` : ''}`;

  try {
    const res = await fetchFn(url, { cache: force ? 'no-store' : 'default' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    _scheduleCache.set(regionId, { data, fetchedAt: nowMs });
    return data;
  } catch (err) {
    if (entry?.data) return entry.data;
    throw err;
  }
}

export function clearOutageScheduleCache() {
  _scheduleCache.clear();
}

/**
 * Shared CSS for the Outage Schedule Card (2D bottom dock & 3D station bottom).
 */
export function getOutageWidgetStyles() {
  return `
    .es-bottom-outage-dock {
      display: flex;
      justify-content: center;
      align-items: stretch;
      width: 100%;
    }

    .es-outage-card {
      width: 100%;
      max-width: 390px;
      background: linear-gradient(155deg, rgba(14, 23, 42, 0.94), rgba(8, 13, 27, 0.98));
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 12px 14px;
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      gap: 9px;
      box-sizing: border-box;
      position: relative;
      z-index: 5;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .es-outage-card.is-off {
      border-color: rgba(239, 68, 68, 0.45);
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55), 0 0 18px rgba(239, 68, 68, 0.16);
    }

    .es-outage-card.is-on {
      border-color: rgba(16, 185, 129, 0.32);
    }

    .es-outage-card-3d {
      max-width: 100%;
      margin-top: 20px;
      background: rgba(15, 23, 42, 0.86);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 16px 18px;
    }

    .es-outage-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding-bottom: 7px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .es-outage-title-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .es-outage-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #e2e8f0;
      white-space: nowrap;
    }

    .es-outage-group-pill {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.14);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #38bdf8;
      white-space: nowrap;
      cursor: pointer;
    }

    .es-outage-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .es-outage-tab-btn,
    .es-outage-refresh-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #94a3b8;
      border-radius: 6px;
      padding: 2px 7px;
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      line-height: 1.3;
    }

    .es-outage-tab-btn.active {
      background: rgba(56, 189, 248, 0.2);
      border-color: rgba(56, 189, 248, 0.5);
      color: #38bdf8;
    }

    .es-outage-tab-btn:hover,
    .es-outage-refresh-btn:hover {
      border-color: #38bdf8;
      color: #f8fafc;
    }

    .es-outage-status-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      background: rgba(2, 6, 23, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 10px;
      padding: 7px 10px;
    }

    .es-outage-status-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: 800;
    }

    .es-outage-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .es-outage-dot.on { background: #10b981; box-shadow: 0 0 8px #10b981; }
    .es-outage-dot.off { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
    .es-outage-dot.maybe { background: #f59e0b; box-shadow: 0 0 8px #f59e0b; }
    .es-outage-dot.unknown { background: #64748b; }

    .es-outage-countdown {
      font-size: 11px;
      font-weight: 700;
      color: #cbd5e1;
      text-align: right;
    }

    .es-outage-grid-verify {
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
    .es-outage-grid-verify.warn {
      background: rgba(239, 68, 68, 0.14);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }
    .es-outage-grid-verify.bonus {
      background: rgba(16, 185, 129, 0.14);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #6ee7b7;
    }

    /* 24-Hour Timeline Bar */
    .es-outage-timeline-wrap {
      position: relative;
      padding-top: 2px;
    }

    .es-outage-timeline {
      display: grid;
      grid-template-columns: repeat(48, minmax(0, 1fr));
      gap: 1px;
      height: 14px;
      background: rgba(2, 6, 23, 0.8);
      padding: 2px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
    }

    .es-outage-slot {
      height: 100%;
      border-radius: 1.5px;
      transition: opacity 0.2s ease;
    }
    .es-outage-slot.on { background: rgba(16, 185, 129, 0.78); }
    .es-outage-slot.off { background: rgba(239, 68, 68, 0.88); }
    .es-outage-slot.maybe { background: rgba(245, 158, 11, 0.82); }
    .es-outage-slot.past { opacity: 0.42; }
    .es-outage-slot.current {
      outline: 1.5px solid #ffffff;
      outline-offset: -0.5px;
      opacity: 1 !important;
      z-index: 2;
    }

    .es-outage-now-needle {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #ffffff;
      box-shadow: 0 0 6px #38bdf8, 0 0 2px #ffffff;
      pointer-events: none;
      z-index: 4;
      transform: translateX(-1px);
    }

    .es-outage-ticks {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
      margin-top: 3px;
      padding: 0 1px;
    }

    /* Windows Chips */
    .es-outage-windows {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      align-items: center;
    }

    .es-outage-win-chip {
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 7px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .es-outage-win-chip.off {
      background: rgba(239, 68, 68, 0.14);
      border: 1px solid rgba(239, 68, 68, 0.35);
      color: #fca5a5;
    }
    .es-outage-win-chip.maybe {
      background: rgba(245, 158, 11, 0.14);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fcd34d;
    }
    .es-outage-win-chip.active {
      background: rgba(239, 68, 68, 0.32);
      border-color: #ef4444;
      color: #ffffff;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.35);
    }
    .es-outage-win-chip.past {
      opacity: 0.45;
      text-decoration: line-through;
    }
    .es-outage-win-chip.none {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    .es-outage-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      color: #64748b;
      padding-top: 2px;
      flex-wrap: wrap;
      gap: 6px;
    }

    /* 3D Grid Card Compact Pill */
    .es-3d-outage-mini {
      margin-top: 10px;
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      background: rgba(2, 6, 23, 0.65);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: #cbd5e1;
      font-family: 'JetBrains Mono', Consolas, monospace;
    }
    .es-3d-outage-mini.is-off {
      border-color: rgba(239, 68, 68, 0.45);
      background: rgba(239, 68, 68, 0.12);
      color: #fca5a5;
    }
    .es-3d-outage-mini.is-on {
      border-color: rgba(16, 185, 129, 0.35);
    }

    /* Light Theme Overrides */
    .theme-light .es-outage-card {
      background: linear-gradient(155deg, rgba(255, 255, 255, 0.96), rgba(241, 245, 249, 0.98)) !important;
      border-color: rgba(15, 23, 42, 0.12) !important;
      box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08) !important;
    }
    .theme-light .es-outage-card.is-off {
      border-color: rgba(239, 68, 68, 0.5) !important;
    }
    .theme-light .es-outage-header {
      border-bottom-color: rgba(15, 23, 42, 0.08);
    }
    .theme-light .es-outage-title { color: #0f172a; }
    .theme-light .es-outage-status-row {
      background: rgba(241, 245, 249, 0.9);
      border-color: rgba(15, 23, 42, 0.08);
    }
    .theme-light .es-outage-countdown { color: #334155; }
    .theme-light .es-outage-timeline {
      background: rgba(226, 232, 240, 0.85);
      border-color: rgba(15, 23, 42, 0.1);
    }
    .theme-light .es-outage-now-needle {
      background: #0f172a;
      box-shadow: 0 0 4px rgba(15, 23, 42, 0.6);
    }
    .theme-light .es-outage-win-chip.off {
      background: rgba(239, 68, 68, 0.12);
      color: #b91c1c;
    }
    .theme-light .es-outage-win-chip.active {
      background: #ef4444;
      color: #ffffff;
    }
    .theme-light .es-outage-tab-btn,
    .theme-light .es-outage-refresh-btn {
      background: rgba(15, 23, 42, 0.05);
      border-color: rgba(15, 23, 42, 0.12);
      color: #475569;
    }
  `;
}

/**
 * Render HTML inside .es-outage-card for both 2D and 3D docks.
 */
export function renderOutageWidgetHtml(summary, opts = {}) {
  const lang = opts.lang === 'en' ? 'en' : 'uk';
  const isEn = lang === 'en';
  const selectedDay = (opts.selectedDay === 'tomorrow' && summary.tomorrowSlots) ? 'tomorrow' : 'today';
  const loading = Boolean(opts.loading);
  const error = opts.error || null;
  const is3D = Boolean(opts.is3D);

  const regionText = isEn ? summary.regionLabelEn : summary.regionLabelUk;
  const titleText = isEn ? 'Outage Schedule' : 'Відключення світла';
  const groupText = isEn ? `Group ${summary.groupLabel}` : `Група ${summary.groupLabel}`;

  const slots = selectedDay === 'tomorrow' ? summary.tomorrowSlots : summary.todaySlots;
  const intervals = selectedDay === 'tomorrow' ? summary.tomorrowIntervals : summary.todayIntervals;
  const offHours = selectedDay === 'tomorrow' ? summary.tomorrowOffHours : summary.todayOffHours;
  const isToday = selectedDay === 'today';

  let statusText = isEn ? 'Schedule unavailable' : 'Графік завантажується...';
  let statusColor = '#94a3b8';
  let statusClass = 'unknown';

  if (error && !summary.hasData) {
    statusText = isEn ? 'Error loading schedule' : 'Помилка завантаження';
    statusColor = '#f87171';
    statusClass = 'off';
  } else if (summary.hasData || summary.currentStatus !== 'unknown') {
    if (summary.currentStatus === 'off') {
      statusText = isEn ? 'Scheduled Outage' : 'Відключення за графіком';
      statusColor = '#f87171';
      statusClass = 'off';
    } else if (summary.currentStatus === 'maybe') {
      statusText = isEn ? 'Possible Outage' : 'Можливе відключення';
      statusColor = '#fbbf24';
      statusClass = 'maybe';
    } else {
      statusText = isEn ? 'Power ON (Schedule)' : 'Світло є (за графіком)';
      statusColor = '#34d399';
      statusClass = 'on';
    }
  }

  let countdownText = '';
  if (summary.nextEvent) {
    const dur = formatDuration(summary.nextEvent.minutesLeft, lang);
    const tmr = summary.nextEvent.isTomorrow ? (isEn ? ' (tmrw)' : ' (завтра)') : '';
    if (summary.nextEvent.type === 'off') {
      countdownText = isEn
        ? `Off in ${dur} (${summary.nextEvent.atTime}${tmr})`
        : `До відкл.: ${dur} (о ${summary.nextEvent.atTime}${tmr})`;
    } else {
      countdownText = isEn
        ? `Back in ${dur} (${summary.nextEvent.atTime}${tmr})`
        : `Увімкнення: ${summary.nextEvent.atTime}${tmr} (${dur})`;
    }
  } else if (summary.hasData) {
    countdownText = isEn ? 'No changes expected today' : 'Без змін до кінця доби';
  }

  // Physical grid verification badge
  let verifyHtml = '';
  if (summary.isGridBlackout === true && summary.currentStatus === 'on') {
    verifyHtml = `<div class="es-outage-grid-verify warn es-mono">
      <span>⚠️ ${isEn ? 'Actual Grid: DOWN (Unscheduled)' : 'Факт: мережа знеструмлена поза графіком'}</span>
    </div>`;
  } else if (summary.isGridBlackout === false && summary.currentStatus === 'off') {
    verifyHtml = `<div class="es-outage-grid-verify bonus es-mono">
      <span>⚡ ${isEn ? 'Actual Grid: Connected' : 'Факт: світло є (мережа підключена)'}</span>
    </div>`;
  }

  const slotsHtml = (slots || []).map((st, idx) => {
    const isPast = isToday && idx < summary.currentSlotIndex;
    const isCur = isToday && idx === summary.currentSlotIndex;
    const tStart = slotToTimeStr(idx);
    const tEnd = slotToTimeStr(idx + 1);
    const stDesc = st === 'off'
      ? (isEn ? 'Outage' : 'Відключення')
      : (st === 'maybe' ? (isEn ? 'Possible outage' : 'Можливе відключення') : (isEn ? 'Power ON' : 'Світло є'));
    return `<div class="es-outage-slot ${st} ${isPast ? 'past' : ''} ${isCur ? 'current' : ''}" title="${tStart}–${tEnd}: ${stDesc}"></div>`;
  }).join('');

  const needleLeftPct = ((summary.minuteInDay / 1440) * 100).toFixed(2);
  const needleHtml = isToday ? `<div class="es-outage-now-needle" style="left: ${needleLeftPct}%;" title="${summary.timeStr}"></div>` : '';

  let windowsHtml = '';
  if (!summary.hasData && !loading && !error) {
    windowsHtml = `<span class="es-outage-win-chip none">${isEn ? 'Waiting for schedule data...' : 'Очікування даних графіка...'}</span>`;
  } else if (intervals.length === 0) {
    windowsHtml = `<span class="es-outage-win-chip none">✅ ${isEn ? 'No outages scheduled' : 'Відключень не заплановано'}</span>`;
  } else {
    windowsHtml = intervals.map((w) => {
      const isActive = isToday && summary.currentSlotIndex >= w.startSlot && summary.currentSlotIndex < w.endSlot;
      const isPast = isToday && summary.currentSlotIndex >= w.endSlot;
      const icon = w.type === 'maybe' ? '🟡' : '🔴';
      return `<span class="es-outage-win-chip ${w.type} ${isActive ? 'active' : ''} ${isPast ? 'past' : ''} es-mono">${icon} ${w.start}–${w.end}</span>`;
    }).join('');
  }

  const totalOffLabel = offHours !== null
    ? (isEn ? `No power: ${offHours}h` : `Без світла: ${offHours} год`)
    : '';
  const updatedLabel = summary.lastUpdatedStr
    ? (isEn ? `Updated: ${summary.lastUpdatedStr}` : `Оновлено: ${summary.lastUpdatedStr}`)
    : '';
  const dayLabel = selectedDay === 'tomorrow'
    ? (isEn ? 'Tomorrow' : 'Завтра')
    : (isEn ? 'Today' : 'Сьогодні');

  const cardExtraClass = `${is3D ? 'es-outage-card-3d' : ''} ${statusClass === 'off' ? 'is-off' : (statusClass === 'on' ? 'is-on' : '')}`;

  return `
    <div class="es-outage-card ${cardExtraClass}" data-outage-card="1">
      <div class="es-outage-header">
        <div class="es-outage-title-wrap">
          <span style="font-size: 14px;">🕯️</span>
          <span class="es-outage-title">${titleText}</span>
          <span class="es-outage-group-pill es-mono" data-action="edit-outage" title="${isEn ? 'Configure region & group' : 'Налаштувати регіон та чергу'}">${regionText} · ${groupText}</span>
        </div>
        <div class="es-outage-actions">
          ${summary.tomorrowSlots ? `
            <button type="button" class="es-outage-tab-btn ${selectedDay === 'today' ? 'active' : ''}" data-outage-day="today">${isEn ? 'Today' : 'Сьогодні'}</button>
            <button type="button" class="es-outage-tab-btn ${selectedDay === 'tomorrow' ? 'active' : ''}" data-outage-day="tomorrow">${isEn ? 'Tmrw' : 'Завтра'}</button>
          ` : ''}
          <button type="button" class="es-outage-refresh-btn" data-action="refresh-outage" title="${isEn ? 'Refresh schedule' : 'Оновити графік'}">${loading ? '⏳' : '↻'}</button>
        </div>
      </div>

      <div class="es-outage-status-row">
        <div class="es-outage-status-badge" style="color: ${statusColor};">
          <span class="es-outage-dot ${statusClass}"></span>
          <span>${statusText}</span>
        </div>
        <div class="es-outage-countdown es-mono">${countdownText}</div>
      </div>

      ${verifyHtml}

      <div class="es-outage-timeline-wrap">
        <div class="es-outage-timeline">
          ${slotsHtml}
          ${needleHtml}
        </div>
        <div class="es-outage-ticks es-mono">
          <span>00</span><span>03</span><span>06</span><span>09</span><span>12</span><span>15</span><span>18</span><span>21</span><span>24</span>
        </div>
      </div>

      <div class="es-outage-windows">
        ${windowsHtml}
      </div>

      <div class="es-outage-footer es-mono">
        <span>${dayLabel}${totalOffLabel ? ` · ${totalOffLabel}` : ''}</span>
        <span>${updatedLabel}</span>
      </div>
    </div>
  `;
}

