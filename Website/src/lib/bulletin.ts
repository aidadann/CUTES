import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * The bulletin index.
 *
 * Publishing a bulletin is: drag a PDF into `public/bulletin/` on github.com
 * and commit. There is no CMS, no admin login and no upload form to secure.
 *
 * The entire publishing specification is one rule:
 *
 *     the filename must be YYYY-MM-DD.pdf
 *
 * Sorting falls out of that rule for free. A file that does not match is
 * ignored and reported in the build log rather than crashing the build — the
 * cost of a typo should be one missing row, not a dead site.
 */

const BULLETIN_DIR = fileURLToPath(new URL('../../public/bulletin', import.meta.url));
const FILENAME = /^(\d{4})-(\d{2})-(\d{2})\.pdf$/i;

export interface Bulletin {
  /** File name as uploaded, e.g. "2026-09-06.pdf". */
  file: string;
  /** Path relative to the site root, ready for `assetPath()`. */
  href: string;
  /** Parsed from the filename, at UTC midnight. */
  date: Date;
  /** "2026-09-06", handy for <time datetime>. */
  iso: string;
}

export function listBulletins(): Bulletin[] {
  let files: string[];
  try {
    files = readdirSync(BULLETIN_DIR);
  } catch {
    // The folder has not been created yet. An empty parish bulletin list is a
    // valid state on day one, not an error.
    return [];
  }

  const bulletins: Bulletin[] = [];
  for (const file of files) {
    const match = FILENAME.exec(file);
    if (!match) {
      if (file.toLowerCase().endsWith('.pdf')) {
        console.warn(
          `[bulletin] Skipping "${file}" — bulletins must be named YYYY-MM-DD.pdf (e.g. 2026-09-06.pdf)`,
        );
      }
      continue;
    }
    const [, year, month, day] = match;
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    if (Number.isNaN(date.getTime())) {
      console.warn(`[bulletin] Skipping "${file}" — that is not a real date.`);
      continue;
    }
    bulletins.push({
      file,
      href: `bulletin/${file}`,
      date,
      iso: `${year}-${month}-${day}`,
    });
  }

  // Newest first.
  return bulletins.sort((a, b) => b.date.getTime() - a.date.getTime());
}
