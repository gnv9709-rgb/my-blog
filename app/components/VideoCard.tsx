'use client';

import Image from 'next/image';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <article
      className="group cursor-pointer"
      onClick={() => onClick(video)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(video)}
      aria-label={`${video.title} 재생`}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'var(--surface)', borderRadius: '1px' }}
      >
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <Image
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Dark vignette on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(12,12,12,0.45)' }}
          />

          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 24px rgba(196,150,90,0.4)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Category badge */}
          <span
            className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1"
            style={{
              background: 'rgba(12,12,12,0.75)',
              backdropFilter: 'blur(8px)',
              color: 'var(--accent)',
              border: '1px solid rgba(196,150,90,0.25)',
            }}
          >
            {video.category}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            className="font-medium leading-snug truncate transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--foreground)', fontSize: '0.9375rem' }}
          >
            {video.title}
          </h3>
          {video.client && (
            <p
              className="text-xs mt-0.5 tracking-wide truncate"
              style={{ color: 'var(--muted)' }}
            >
              {video.client}
            </p>
          )}
        </div>
        <span
          className="shrink-0 text-xs tabular-nums mt-0.5"
          style={{ color: 'var(--muted)' }}
        >
          {video.year}
        </span>
      </div>
    </article>
  );
}
