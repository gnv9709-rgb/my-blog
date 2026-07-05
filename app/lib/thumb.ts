import type { Video } from '../types';

/**
 * Resolve the best available thumbnail source for a video.
 * Priority: explicit thumbnail → YouTube still → null (external clip with no capture).
 */
export function thumbSrc(
  video: Video,
  quality: 'hq' | 'max' = 'hq',
): string | null {
  if (video.thumbnail) return video.thumbnail;
  if (video.youtubeId) {
    const variant = quality === 'max' ? 'maxresdefault' : 'hqdefault';
    return `https://img.youtube.com/vi/${video.youtubeId}/${variant}.jpg`;
  }
  return null;
}
