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
          background: 'rgba(12,12,12,0.92)',
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
                  el.style.color = '#0c0c0c';
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

      {/* Info */}
      <div className="px-6 md:px-16 py-16 md:py-20 max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-24 work-details">
        {/* Left: Title */}
        <div className="lg:w-2/5">
          <p
            className="work-title text-[10px] tracking-[0.35em] uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            {video.category}
          </p>
          <h1
            className="work-title mb-6 leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 500,
            }}
          >
            {video.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
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

        {/* Right: Details + Equipment */}
        <div className="lg:w-3/5 space-y-12">
          {/* Details */}
          {video.details && video.details.length > 0 && (
            <dl className="space-y-6">
              {video.details.map((d) => (
                <div key={d.label}>
                  <dt
                    className="text-[9px] tracking-[0.45em] uppercase mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    {d.label}
                  </dt>
                  <dd
                    className="text-sm leading-[1.8]"
                    style={{ color: 'var(--foreground)', opacity: 0.75 }}
                  >
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* Equipment */}
          {video.equipment && Object.keys(video.equipment).length > 0 && (
            <div>
              <h3
                className="text-[9px] tracking-[0.45em] uppercase mb-5"
                style={{ color: 'var(--muted)' }}
              >
                사용 장비
              </h3>
              <dl className="space-y-3">
                {(Object.entries(video.equipment) as [string, string[]][]).map(
                  ([key, items]) => (
                    <div key={key} className="flex gap-6">
                      <dt
                        className="text-[10px] tracking-widest uppercase shrink-0"
                        style={{ color: 'var(--muted)', width: '4rem' }}
                      >
                        {key}
                      </dt>
                      <dd
                        className="text-xs leading-[1.8]"
                        style={{ color: 'var(--foreground)', opacity: 0.65 }}
                      >
                        {items.join(', ')}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
            </div>
          )}

          {/* External link (in info section too) */}
          {isExternal && video.externalUrl && (
            <a
              href={video.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              원본 링크 바로가기
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-3.5 h-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          )}
        </div>
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
