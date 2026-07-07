'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Video } from '../types';
import { thumbSrc } from '../lib/thumb';
import ToolLogo from './ToolLogo';

// Map the Korean tool names used in video data → ToolLogo brand keys.
const TOOL_ALIAS: Record<string, string> = {
  '프리미어 프로': 'Premiere Pro',
  '프리미어프로': 'Premiere Pro',
  '애프터 이펙트': 'After Effects',
  '애프터이펙트': 'After Effects',
  '포토샵': 'Photoshop',
  '미드저니': 'Midjourney',
  '힉스필드 나노바나나': '나노바나나',
};

interface CategorySectionProps {
  category: string;
  videos: Video[];
  index: number;
}

function getPlatformLabel(url: string): string {
  if (url.includes('instagram.com')) return 'Instagram';
  if (url.includes('naver.com')) return 'Naver';
  return 'External';
}

/** Cover image that degrades to a neutral placeholder if the file is missing (e.g. not uploaded yet). */
function SafeThumb({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="absolute inset-0" style={{ background: 'var(--surface-hover)' }} />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}

/** Inline detail panel — thumbnail/player + credits shown in place (no navigation). */
// Compact meta label — minimal tracking so Korean stays readable (no "기 여 도" spacing).
const metaLabel = {
  fontSize: '0.6875rem',
  letterSpacing: '0.06em',
  color: 'var(--muted)',
  fontWeight: 600,
  marginBottom: '0.7rem',
};

function DetailPanel({ video }: { video: Video }) {
  const isExternal = video.youtubeId == null;
  const thumb = thumbSrc(video, 'max');

  return (
    <div
      style={{
        gridColumn: '1 / -1',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: 'clamp(1.25rem, 3vw, 2.25rem)',
        marginTop: '0.5rem',
      }}
    >
      {/* Media */}
      <div>
        {video.youtubeId ? (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: video.vertical ? '300px' : '100%',
              margin: video.vertical ? '0 auto' : undefined,
              paddingBottom: video.vertical ? undefined : '56.25%',
              aspectRatio: video.vertical ? '9 / 16' : undefined,
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        ) : (
          <div style={{ maxWidth: video.vertical ? '300px' : '460px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: video.vertical ? '9 / 16' : '16 / 9',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: '#000',
              }}
            >
              {video.videoFile ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={thumb ?? undefined}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={video.videoFile} type="video/mp4" />
                </video>
              ) : (
                thumb && <SafeThumb src={thumb} alt={video.title} sizes="460px" />
              )}
            </div>
            {video.externalUrl && (
              <a
                href={video.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[11px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-200"
                style={{ border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '4px' }}
              >
                {getPlatformLabel(video.externalUrl)}에서 보기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Credits */}
      <div>
        {video.client && (
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
              paddingBottom: 'clamp(1rem, 2vw, 1.25rem)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: 'clamp(1.0625rem, 1.6vw, 1.3rem)', fontWeight: 700, color: 'var(--foreground)', letterSpacing: '-0.01em' }}>
              {video.client}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontFamily: 'var(--font-geist-mono, monospace)' }}>
              {video.year}
            </span>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          {video.details?.map((d) => {
            const isTools = d.label.includes('툴');
            return (
              <div key={d.label}>
                <p style={metaLabel}>{d.label}</p>
                {isTools ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.75rem, 1.5vw, 1.15rem)' }}>
                    {d.value.split(/[,·]/).map((t) => t.trim()).filter(Boolean).map((tool) => (
                      <ToolLogo key={tool} name={TOOL_ALIAS[tool] ?? tool} size={46} />
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--foreground)', opacity: 0.92 }}>
                    {d.value}
                  </p>
                )}
              </div>
            );
          })}

          {video.equipment && Object.keys(video.equipment).length > 0 && (
            <div style={{ paddingTop: 'clamp(0.75rem, 1.5vw, 1.25rem)', borderTop: '1px solid var(--border)' }}>
              <p style={metaLabel}>사용 장비</p>
              <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                {(Object.entries(video.equipment) as [string, string[]][]).map(([key, items]) => (
                  <div key={key}>
                    <dt style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>
                      {key}
                    </dt>
                    <dd style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--foreground)', opacity: 0.82 }}>
                      {items.join(', ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CategorySection({ category, videos, index }: CategorySectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <section
      id={`category-${index}`}
      aria-labelledby={`cat-heading-${index}`}
      style={{
        scrollMarginTop: '120px',
        borderTop: '1px solid var(--border)',
        background: index % 2 === 1 ? 'var(--surface)' : 'transparent',
      }}
    >
      {/* Heading */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem) clamp(1.25rem, 2.5vw, 2rem)',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 3vw, 3rem)',
            top: '-0.1em',
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: 'clamp(5rem, 15vw, 15rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(36,26,20,0.07)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
            zIndex: 0,
          }}
        >
          {indexStr}
        </span>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'var(--text-label, 0.625rem)',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontFamily: 'var(--font-geist-mono, monospace)',
              marginBottom: 'clamp(0.5rem, 1.5vw, 1rem)',
            }}
          >
            {indexStr} — Category <span style={{ color: 'var(--accent)' }}>★</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h2
              id={`cat-heading-${index}`}
              style={{
                fontFamily: 'var(--font-display-stack)',
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '0',
                color: 'var(--foreground)',
              }}
            >
              {category}
            </h2>
            <span
              style={{
                fontFamily: 'var(--font-geist-mono, monospace)',
                fontSize: 'var(--text-label, 0.625rem)',
                letterSpacing: '0.3em',
                color: 'var(--muted)',
              }}
            >
              ×{videos.length}
            </span>
          </div>
        </div>
      </div>

      {/* Red separator */}
      <div style={{ height: '2px', background: 'var(--accent)', margin: '0 clamp(1.5rem, 4vw, 4rem)', opacity: 0.85 }} />

      {/* Gallery grid — uniform cards, click to expand inline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 2vw, 1.75rem)',
          padding: 'clamp(1.75rem, 3.5vw, 3rem) clamp(1.5rem, 4vw, 4rem) clamp(2.5rem, 5vw, 4.5rem)',
          alignItems: 'start',
        }}
      >
        {videos.map((video) => {
          const isOpen = openId === video.id;
          const thumb = thumbSrc(video);
          const platform = video.youtubeId == null && video.externalUrl ? getPlatformLabel(video.externalUrl) : null;
          return (
            <div key={video.id} style={{ display: 'contents' }}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : video.id)}
                aria-expanded={isOpen}
                className="group"
                style={{
                  display: 'block',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                }}
              >
                {/* Thumbnail (uniform) */}
                <div
                  className="relative overflow-hidden slider-card"
                  style={{
                    borderRadius: '10px',
                    border: isOpen ? '2px solid var(--accent)' : '1px solid var(--border)',
                    background: 'var(--surface-hover)',
                  }}
                >
                  <div className="relative w-full" style={{ paddingBottom: video.vertical ? '177.78%' : '56.25%' }}>
                    {thumb ? (
                      <SafeThumb
                        src={thumb}
                        alt={video.title}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                    ) : (
                      <div className="absolute inset-0" style={{ background: 'var(--surface-hover)' }} />
                    )}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                      style={{ background: 'rgba(36,26,20,0.32)', opacity: isOpen ? 1 : 0 }}
                    >
                      <span
                        className="flex items-center justify-center w-11 h-11 rounded-full"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 250ms' }}>
                          <path d="M11 5h2v14h-2z M5 11h14v2H5z" />
                        </svg>
                      </span>
                    </div>
                    {platform && (
                      <span
                        className="absolute top-2.5 right-2.5 text-[9px] tracking-widest uppercase px-2 py-1"
                        style={{ background: 'rgba(250,245,236,0.9)', color: 'var(--foreground)', borderRadius: '3px' }}
                      >
                        {platform}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title (real YouTube title) */}
                <div className="mt-2.5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3
                      className="text-sm font-medium leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]"
                      style={{
                        color: isOpen ? 'var(--accent)' : 'var(--foreground)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {video.title}
                    </h3>
                    {video.client && (
                      <p className="text-xs mt-1 tracking-wide truncate" style={{ color: 'var(--muted)' }}>
                        {video.client}
                      </p>
                    )}
                  </div>
                  <span
                    className="shrink-0 text-xs tabular-nums mt-0.5"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-geist-mono, monospace)' }}
                  >
                    {video.year}
                  </span>
                </div>
              </button>

              {isOpen && <DetailPanel video={video} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
