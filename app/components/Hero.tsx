'use client';

import Image from 'next/image';
import type { Video } from '../types';

interface HeroProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export default function Hero({ video, onPlay }: HeroProps) {
  return (
    <section
      className="group relative w-full overflow-hidden cursor-pointer select-none"
      style={{ height: 'clamp(480px, 75vh, 900px)' }}
      onClick={() => onPlay(video)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onPlay(video)}
      aria-label={`${video.title} 재생`}
    >
      {/* Background thumbnail */}
      <Image
        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.02]"
        priority
        fetchPriority="high"
        sizes="100vw"
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.55) 40%, rgba(12,12,12,0.1) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(12,12,12,0.6) 0%, rgba(12,12,12,0.1) 60%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 pb-12 md:px-16 md:pb-16">
        <div className="max-w-2xl">
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Featured — {video.category}
          </p>

          <h2
            className="leading-[0.95] tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              color: 'var(--foreground)',
              fontWeight: 500,
            }}
          >
            {video.title}
          </h2>

          <div className="flex items-center gap-4">
            {video.client && (
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--muted)' }}
              >
                {video.client}
              </span>
            )}
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
              {video.year}
            </span>
          </div>
        </div>
      </div>

      {/* Play button — bottom right */}
      <div className="absolute bottom-10 right-8 md:bottom-14 md:right-16 flex items-center gap-3">
        <span
          className="text-xs tracking-[0.25em] uppercase transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ color: 'var(--foreground)' }}
        >
          Play
        </span>
        <div
          className="flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500"
          style={{
            borderColor: 'rgba(236,232,225,0.5)',
            color: 'var(--foreground)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.background = 'var(--accent)';
            el.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.background = 'transparent';
            el.style.borderColor = 'rgba(236,232,225,0.5)';
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
