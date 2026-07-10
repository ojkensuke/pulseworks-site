const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

function prune(now: number) {
  if (hits.size < 5000) return;
  for (const [key, timestamps] of hits) {
    const recent = timestamps.filter((t) => now - t < WINDOW_MS);
    if (recent.length === 0) hits.delete(key);
    else hits.set(key, recent);
  }
}

/**
 * In-memory sliding-window limiter, scoped to a single warm function instance.
 * Not a substitute for a distributed limiter under real load, but meaningfully
 * raises the cost of scripted abuse against a low-traffic contact endpoint.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  prune(now);
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }
  timestamps.push(now);
  hits.set(key, timestamps);
  return false;
}
