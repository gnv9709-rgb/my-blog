'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
  large?: boolean;
  sliderMode?: boolean;
}

function getPlatformLabel(url: string): string {
  if (url.includes('instagram.com')) return 'Instagram';
  if (url.includes('naver.com')) return 'Naver';
  return 'External';
}

export default function VideoCard({ video, large = false, sliderMode = false }: VideoCardProps) {
  const isExternal = video.youtubeId == null;
  const thumbnailSrc =
    video.thumbnail ??
    (video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : null);
  const platformLabel = isExternal && video.externalUrl ? getPlatformLabel(video.externalUrl) : null;

  return (
    <Link
      href={`/works/${video.id}`}
      className="group block"
      aria-label={`${video.title} 상세 보기`}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'var(--surface)',
          borderRadius: '10px',
          border: '1px solid var(--border)',
        }}
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
              sizes={sliderMode ? '400px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, var(--surface) 0%, #141414 50%, #0a0a0a 100%)',
              }}
            />
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'rgba(5,5,5,0.5)' }}
          />

          {/* Play / External icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 24px rgba(204,15,30,0.35)',
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

          {/* Category badge — hidden in slider mode (already shown by section heading) */}
          {!sliderMode && (
            <span
              className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1"
              style={{
                background: 'rgba(5,5,5,0.8)',
                backdropFilter: 'blur(8px)',
                color: 'var(--accent)',
                border: '1px solid rgba(204,15,30,0.2)',
              }}
            >
              {video.category}
            </span>
          )}

          {/* Platform badge */}
          {platformLabel && (
            <span
              className="absolute top-3 right-3 text-[9px] tracking-widest uppercase px-2 py-1"
              style={{
                background: 'rgba(5,5,5,0.8)',
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
            style={{
              color: 'var(--foreground)',
              fontSize: large ? '1.0625rem' : sliderMode ? '0.9375rem' : '0.9375rem',
            }}
          >
            {video.title}
          </h3>
          {video.client && (
            <p className="text-xs mt-0.5 tracking-wide truncate" style={{ color: 'var(--muted)' }}>
              {video.client}
            </p>
          )}
        </div>
        <span
          className="shrink-0 text-xs tabular-nums mt-0.5"
          style={{
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
          }}
        >
          {video.year}
        </span>
      </div>
    </Link>
  );
}
