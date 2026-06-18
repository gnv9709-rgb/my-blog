'use client';

import { useEffect } from 'react';
import type { Video, Equipment } from '../types';

const EQUIPMENT_ORDER: (keyof Equipment)[] = ['카메라', '렌즈', '조명', '마이크', '기타'];

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
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: 'rgba(8, 8, 8, 0.96)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      <div className="min-h-full flex items-start justify-center px-4 py-12 md:px-10 md:py-16">
        <div
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute -top-8 right-0 flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            aria-label="닫기"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            <span>Close</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* YouTube embed */}
          {video.youtubeId != null && (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {/* ── Info section ── */}
          <div className="mt-8">
            {/* Title row */}
            <div className="flex items-start justify-between gap-6">
              <h2
                className="leading-tight"
                style={{
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 500,
                }}
              >
                {video.title}
              </h2>
              <span
                className="shrink-0 text-3xl font-light tabular-nums"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                {video.year}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span
                className="text-[10px] tracking-[0.25em] uppercase px-2.5 py-1"
                style={{
                  color: 'var(--accent)',
                  border: '1px solid rgba(196,150,90,0.35)',
                }}
              >
                {video.category}
              </span>
              {video.client && (
                <span
                  className="text-[10px] tracking-[0.25em] uppercase px-2.5 py-1"
                  style={{
                    color: 'var(--muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {video.client}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="mt-6 mb-6" style={{ height: '1px', background: 'var(--border)' }} />

            {/* Description */}
            {video.description && (
              <p
                className="leading-[1.85] text-sm md:text-base"
                style={{ color: 'rgba(236,232,225,0.7)' }}
              >
                {video.description}
              </p>
            )}

            {/* Details (기여도, 사용 장비 등) */}
            {video.details && video.details.length > 0 && (
              <>
                <div className="mt-8 mb-6" style={{ height: '1px', background: 'var(--border)' }} />
                <dl className="flex flex-col gap-5">
                  {video.details.map((detail) => (
                    <div key={detail.label}>
                      <dt
                        className="text-[9px] tracking-[0.3em] uppercase mb-1.5"
                        style={{ color: 'var(--muted)' }}
                      >
                        {detail.label}
                      </dt>
                      <dd
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {/* Credits */}
            {video.credits && video.credits.length > 0 && (
              <>
                <div className="mt-8 mb-4" style={{ height: '1px', background: 'var(--border)' }} />
                <dl
                  className="grid gap-x-12 gap-y-3"
                  style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
                >
                  {video.credits.map((credit) => (
                    <div key={credit.role} className="flex flex-col gap-0.5">
                      <dt
                        className="text-[9px] tracking-[0.3em] uppercase"
                        style={{ color: 'var(--muted)' }}
                      >
                        {credit.role}
                      </dt>
                      <dd
                        className="text-sm font-medium"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {credit.name}
                      </dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
