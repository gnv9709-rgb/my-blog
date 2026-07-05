'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Video } from '../../types';

interface WorkDetailProps {
  video: Video;
  prev: Video | null;
  next: Video | null;
}

export default function WorkDetail({ video, prev, next }: WorkDetailProps) {
  const isExternal = video.youtubeId == null;
  const thumbnailSrc =
    video.thumbnail ??
    (video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : null);

  return (
    <div
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
        fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-16 h-16"
        style={{
          background: 'rgba(242,234,221,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-3.5 h-3.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          이정석
        </Link>
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'var(--accent)' }}
        >
          {video.category}
        </span>
      </header>

      {/* Media */}
      <div className="work-media" style={{ borderBottom: '1px solid var(--border)' }}>
        {video.youtubeId ? (
          <div className={video.vertical ? 'max-w-xs mx-auto py-16 px-6' : 'w-full'}>
            <div
              style={{
                position: 'relative',
                paddingBottom: video.vertical ? '177.78%' : '56.25%',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10 py-28 px-6">
            {thumbnailSrc ? (
              <div
                className="relative w-full overflow-hidden"
                style={{
                  maxWidth: '480px',
                  aspectRatio: video.vertical ? '9/16' : '16/9',
                  borderRadius: '2px',
                }}
              >
                <Image
                  src={thumbnailSrc}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="flex items-center justify-center w-full"
                style={{
                  maxWidth: '480px',
                  height: '200px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                }}
              >
                <span
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  외부 링크
                </span>
              </div>
            )}
            {video.externalUrl && (
              <a
                href={video.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300"
                style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'var(--accent)';
                  el.style.borderColor = 'var(--accent)';
                  el.style.color = '#f0ece6';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = 'transparent';
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--foreground)';
                }}
              >
                외부에서 보기
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Info — case-study layout */}
      <div
        className="work-details relative px-6 md:px-16 py-16 md:py-24 mx-auto"
        style={{ maxWidth: '84rem' }}
      >
        {/* Big case number + category, top-right */}
        <div
          className="absolute text-right pointer-events-none select-none"
          style={{ top: 'clamp(1.5rem, 4vw, 3.5rem)', right: 'clamp(1.5rem, 4vw, 4rem)' }}
          aria-hidden="true"
        >
          <p
            style={{
              fontFamily: 'var(--font-geist-mono, monospace)',
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(237,235,229,0.13)',
            }}
          >
            {String(video.id).padStart(2, '0')}
          </p>
          <p
            className="text-[10px] tracking-[0.4em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            {video.category}
          </p>
        </div>

        {/* Title block */}
        <div style={{ maxWidth: '60%' }} className="max-lg:!max-w-full">
          <p
            className="work-title text-[10px] tracking-[0.35em] uppercase mb-5"
            style={{ color: 'var(--accent)' }}
          >
            Work — {video.year}
          </p>
          <h1
            className="work-title leading-[1.05] mb-5"
            style={{
              fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            {video.title}
          </h1>
          {video.client && (
            <p className="text-sm tracking-wide" style={{ color: 'var(--muted)' }}>
              {video.client}
            </p>
          )}
        </div>

        {/* Meta blocks — 제작연도 / 역할·기여도 / 활용(tool chips) / 결과 등 */}
        <div
          className="work-details"
          style={{
            marginTop: 'clamp(2.5rem, 6vw, 5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {/* 제작 연도 */}
          <div>
            <p className="text-[9px] tracking-[0.45em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              제작 연도
            </p>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              {video.year}
            </p>
          </div>

          {/* details: 기여도 as text, 사용 툴 as chips */}
          {video.details?.map((d) => {
            const isTools = d.label.includes('툴');
            return (
              <div key={d.label}>
                <p className="text-[9px] tracking-[0.45em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
                  {d.label}
                </p>
                {isTools ? (
                  <ul className="flex flex-wrap gap-2">
                    {d.value
                      .split(/[,·]/)
                      .map((t) => t.trim())
                      .filter(Boolean)
                      .map((tool) => (
                        <li
                          key={tool}
                          className="text-xs px-2.5 py-1"
                          style={{
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)',
                            opacity: 0.8,
                            borderRadius: '3px',
                          }}
                        >
                          {tool}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-[1.8]" style={{ color: 'var(--foreground)', opacity: 0.75 }}>
                    {d.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Equipment — full-width row of grouped chips */}
        {video.equipment && Object.keys(video.equipment).length > 0 && (
          <div style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border)', paddingTop: 'clamp(2rem, 4vw, 3rem)' }}>
            <h3 className="text-[9px] tracking-[0.45em] uppercase mb-5" style={{ color: 'var(--muted)' }}>
              사용 장비
            </h3>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
              {(Object.entries(video.equipment) as [string, string[]][]).map(([key, items]) => (
                <div key={key}>
                  <dt className="text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                    {key}
                  </dt>
                  <dd className="text-xs leading-[1.9]" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
                    {items.join(', ')}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* External original link */}
        {isExternal && video.externalUrl && (
          <a
            href={video.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
            style={{ color: 'var(--muted)', marginTop: 'clamp(2rem, 4vw, 3rem)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            원본 링크 바로가기
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        )}
      </div>

      {/* Prev / Next */}
      <nav
        className="work-nav px-6 md:px-16 py-12 grid grid-cols-2"
        style={{ borderTop: '1px solid var(--border)' }}
        aria-label="작품 탐색"
      >
        {prev ? (
          <Link
            href={`/works/${prev.id}`}
            className="flex flex-col gap-2 transition-opacity duration-200 hover:opacity-60"
          >
            <span
              className="text-[9px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              ← 이전
            </span>
            <span className="text-sm truncate pr-4" style={{ color: 'var(--foreground)' }}>
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/works/${next.id}`}
            className="flex flex-col gap-2 items-end text-right transition-opacity duration-200 hover:opacity-60"
          >
            <span
              className="text-[9px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              다음 →
            </span>
            <span className="text-sm truncate pl-4" style={{ color: 'var(--foreground)' }}>
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
