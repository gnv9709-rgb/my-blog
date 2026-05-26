'use client';

import { useEffect } from 'react';
import type { Video } from '../types';

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(8, 8, 8, 0.95)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: 'var(--muted)' }}
          aria-label="닫기"
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          <span>Close</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Video embed */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Info */}
        <div
          className="mt-5 flex items-start justify-between gap-6 pb-1"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <h2
              className="text-xl font-medium leading-tight"
              style={{ color: 'var(--foreground)' }}
            >
              {video.title}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              {video.client && (
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {video.client}
                </span>
              )}
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                {video.category}
              </span>
            </div>
            {video.description && (
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {video.description}
              </p>
            )}
          </div>
          <span
            className="shrink-0 text-2xl font-light mt-0.5"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-playfair)' }}
          >
            {video.year}
          </span>
        </div>
      </div>
    </div>
  );
}
