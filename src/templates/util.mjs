import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const imgDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../assets/img/clients');

export const hasShot = (site) => existsSync(path.join(imgDir, `${site}.jpg`));

// Long (scrollable) desktop/mobile captures used inside device mockups, keyed by bare name.
const longDir = path.resolve(imgDir, '../../media/sites');
export const longName = (site) => site.split('.')[0];
export const hasLong = (site) => existsSync(path.join(longDir, `${longName(site)}-d.jpg`));

// Portfolio domains verified as reachable on 2026-10-21. Domains that no longer resolve,
// error out, or now serve unrelated content (e.g. rccgfranceprovince.org, kochezmedical.com)
// are deliberately NOT hyperlinked. Re-check periodically and update this list.
export const LIVE_SITES = new Set([
  'scrubharvard.com', 'gebbrapharma.com', '365dayshampers.com', 'travelnursehouses.ca',
  'bridgeandvalue.com', 'goodwillstaffing.ca', 'lexpraxisng.com', 'abiodunodunuga.com',
  'spotlightnigeria-france.com',
  // Blueinc's own products
  'staffintra.com', 'myjobtests.com', 'teststreams.com',
]);
export const isLive = (site) => LIVE_SITES.has(site);
