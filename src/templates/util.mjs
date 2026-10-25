// Portfolio domains verified as reachable on 2026-10-25. Domains that no longer resolve, error out,
// or now serve unrelated content are deliberately NOT hyperlinked. Re-check periodically.
export const LIVE_SITES = new Set([
  'scrubharvard.com', 'gebbrapharma.com', 'goodwillstaffing.ca', 'bridgeandvalue.com', 'lexpraxisng.com',
  'abiodunodunuga.com', 'spotlightnigeria-france.com',
  // Blueinc's own products
  'staffintra.com', 'travelnursehouses.ca', 'myjobtests.com', 'teststreams.com',
]);
export const isLive = (site) => LIVE_SITES.has(site);
