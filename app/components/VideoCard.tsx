'use client';

import Image from 'next/image';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  large?: boolean;
}

function getPlatformLabel(url: string): string {
  if (url.includes('instagram.com')) return 'Instagram';
  if (url.includes('naver.com')) return 'Naver';
  return 'External';
}

export default function VideoCard({ video, onClick, large = false }: VideoCardProps) {
  const isExternal = video.youtubeId == null;
  const thumbnailSrc =
    video.thumbnail ??
    (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : null);
  const platformLabel = isExternal && video.externalUrl ? getPlatformLabel(video.externalUrl) : null;

  const handleClick = () => {
    if (isExternal && video.externalUrl) {
      window.open(video.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      onClick(video);
    }
  };

  return (
    <article
      className="group cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`${video.title} ${isExternal ? '외부 링크로 열기' : '재생'}`}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'var(--surface)', borderRadius: '1px' }}
      >
        <div
          className="relative w-full"
          style={{ paddingBottom: video.vertical ? '177.78%' : '56.25%' }}
        >
          {thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, var(--surface) 0%, #1a1a1a 50%, #111 100%)',
              }}
            />
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(12,12,12,0.45)' }}
          />

          {/* Play / External icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 24px rgba(196,150,90,0.4)',
              }}
            >
              {isExternal ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
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

          {/* External link indicator */}
          {platformLabel && (
            <span
              className="absolute top-3 right-3 text-[9px] tracking-widest uppercase px-2 py-1"
              style={{
                background: 'rgba(12,12,12,0.75)',
                backdropFilter: 'blur(8px)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
              }}
            >
              {platformLabel}
            </span>
          )}
        </div>
      </div>

      {/* Text */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            className="font-medium leading-snug truncate transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--foreground)', fontSize: large ? '1.0625rem' : '0.9375rem' }}
          >
            {video.title}
          </h3>
          {video.client && (
            <p className="text-xs mt-0.5 tracking-wide truncate" style={{ color: 'var(--muted)' }}>
              {video.client}
            </p>
          )}
        </div>
        <span className="shrink-0 text-xs tabular-nums mt-0.5" style={{ color: 'var(--muted)' }}>
          {video.year}
        </span>
      </div>
    </article>
  );
}
