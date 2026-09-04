import type { ImageMetadata } from 'astro';

/**
 * Gallery photo discovery.
 *
 * Photos are found by looking at the filesystem, not by listing them in a YAML
 * file. Adding a photo is: drop it into `src/assets/gallery/<album>/` and
 * commit. One step, not two, because the multimedia ministry changes hands
 * every year and a two-step process is a process that stops happening.
 *
 * The trade-off, taken deliberately: alt text defaults to the album title plus
 * a number. That is weaker than a written description, but it is present and
 * accurate, and a caption can be added per photo in the album's YAML when
 * someone has time. An empty alt attribute would be worse than either.
 *
 * Build cost: every file here is resized and re-encoded to WebP. Downscale
 * source photos to at most 2000px on the long edge before committing a folder
 * of them, or a 30-second build becomes a 10-minute one.
 */

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/gallery/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export interface GalleryPhoto {
  /** Album folder name, e.g. "retreat". */
  album: string;
  /** File name without extension, used as a stable id and caption fallback. */
  name: string;
  image: ImageMetadata;
}

const byAlbum = new Map<string, GalleryPhoto[]>();

for (const [path, module] of Object.entries(files)) {
  // "/src/assets/gallery/retreat/2026-01-photo.jpg" -> ["retreat", "2026-01-photo.jpg"]
  const parts = path.split('/');
  const fileName = parts.pop()!;
  const album = parts.pop()!;
  if (album === 'gallery') continue; // a stray file at the top level

  const list = byAlbum.get(album) ?? [];
  list.push({
    album,
    name: fileName.replace(/\.[^.]+$/, ''),
    image: module.default,
  });
  byAlbum.set(album, list);
}

// Filename order is the committee's ordering tool: prefix with 01-, 02- to
// arrange an album without touching any code.
for (const list of byAlbum.values()) {
  list.sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }));
}

export function photosInAlbum(album: string): GalleryPhoto[] {
  return byAlbum.get(album) ?? [];
}

export function albumCover(album: string): ImageMetadata | undefined {
  return byAlbum.get(album)?.[0]?.image;
}

export function albumCount(album: string): number {
  return byAlbum.get(album)?.length ?? 0;
}

/** Album folder names that actually contain photos. Used only for diagnostics. */
export function albumsWithPhotos(): string[] {
  return [...byAlbum.keys()].sort();
}
