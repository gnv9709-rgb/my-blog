import Image from 'next/image';
import type { Video } from '../types';
import { thumbSrc } from '../lib/thumb';

interface MediaClusterProps {
  videos: Video[];
  /** Rough footprint; the cluster fans out inside this box. */
  className?: string;
}

/**
 * Overlapping, slightly-tilted stack of work stills — echoes the reference's
 * floating media clusters to add depth and break the flat grid rhythm.
 * Purely decorative (aria-hidden); real navigation lives in the lists below.
 */

// Fixed fan-out slots (rotation, offset, scale, z). Cards beyond the table are dropped.
const SLOTS = [
  { rotate: -8, x: '-46%', y: '6%', scale: 0.92, z: 1 },
  { rotate: 5, x: '-16%', y: '-8%', scale: 1.02, z: 3 },
  { rotate: -3, x: '14%', y: '10%', scale: 0.97, z: 2 },
  { rotate: 9, x: '42%', y: '-4%', scale: 0.9, z: 1 },
  { rotate: -12, x: '-70%', y: '-2%', scale: 0.82, z: 0 },
] as const;

export default function MediaCluster({ videos, className }: MediaClusterProps) {
  const items = videos.filter((v) => thumbSrc(v)).slice(0, SLOTS.length);
  if (items.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      {items.map((video, i) => {
        const slot = SLOTS[i];
        const vertical = Boolean(video.vertical);
        return (
          <div
            key={video.id}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: vertical ? 'clamp(84px, 12vw, 150px)' : 'clamp(150px, 21vw, 280px)',
              aspectRatio: vertical ? '9 / 16' : '16 / 9',
              transform: `translate(-50%, -50%) translate(${slot.x}, ${slot.y}) rotate(${slot.rotate}deg) scale(${slot.scale})`,
              zIndex: slot.z,
              borderRadius: '10px',
              overflow: 'hidden',
              border: '3px solid #fff',
              boxShadow: '0 18px 40px -14px rgba(36,26,20,0.5)',
              background: 'var(--surface)',
            }}
          >
            <Image
              src={thumbSrc(video)!}
              alt=""
              fill
              sizes="280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}
    </div>
  );
}
