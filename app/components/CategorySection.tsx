import Link from 'next/link';
import type { Video } from '../types';
import VideoCard from './VideoCard';

interface CategorySectionProps {
  category: string;
  videos: Video[];
  index: number;
}

export default function CategorySection({ category, videos, index }: CategorySectionProps) {
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <section
      aria-labelledby={`cat-heading-${index}`}
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Heading area — title (left) + index table (right), reference style */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)',
          paddingBottom: 'clamp(1.75rem, 3.5vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          gap: 'clamp(2rem, 4vw, 4rem)',
        }}
        className="cat-header"
      >
        {/* Ghost number behind heading */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 'clamp(1rem, 3vw, 3rem)',
            top: '-0.15em',
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: 'clamp(6rem, 16vw, 16rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,235,229,0.045)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
            zIndex: 0,
          }}
        >
          {indexStr}
        </span>

        {/* Left: number label + big title */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontSize: 'var(--text-label, 0.625rem)',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontFamily: 'var(--font-geist-mono, monospace)',
              marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            }}
          >
            {indexStr} — Category
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
            <h2
              id={`cat-heading-${index}`}
              style={{
                fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
                fontSize: 'clamp(2rem, 5.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
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
                paddingBottom: 'clamp(0.5rem, 1vw, 0.9rem)',
              }}
            >
              ×{videos.length}
            </span>
          </div>
        </div>

        {/* Right: index table of works */}
        <ol
          style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid var(--border)',
          }}
        >
          {videos.map((v, i) => (
            <li key={v.id}>
              <Link
                href={`/works/${v.id}`}
                className="index-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto minmax(0, 1fr) auto',
                  alignItems: 'center',
                  gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                  padding: '0.85rem clamp(0.25rem, 1vw, 0.75rem)',
                  borderBottom: '1px solid var(--border)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: 'var(--text-label, 0.625rem)',
                    letterSpacing: '0.15em',
                    color: 'var(--muted)',
                  }}
                >
                  {indexStr}-{i + 1}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.4vw, 0.9375rem)',
                    color: 'var(--foreground)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {v.title}
                </span>
                {v.client && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: '0.625rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent-dim)',
                      background: 'var(--accent-dim)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '2px',
                    }}
                  >
                    {v.client}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Thin red separator */}
      <div
        style={{
          height: '1px',
          background: 'var(--accent)',
          margin: '0 clamp(1.5rem, 4vw, 4rem)',
          opacity: 0.3,
        }}
      />

      {/* Horizontal slider */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(1.5rem, 3vw, 2.5rem) 0 clamp(2.5rem, 5vw, 5rem)',
        }}
      >
        <div
          className="scrollbar-none"
          style={{
            display: 'flex',
            gap: 'clamp(0.625rem, 1.25vw, 1rem)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="slider-card"
              style={{
                flexShrink: 0,
                width: 'clamp(220px, 34vw, 380px)',
                scrollSnapAlign: 'start',
              }}
            >
              <VideoCard video={video} sliderMode />
            </div>
          ))}
        </div>

        {/* Right fade hint */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 'clamp(2.5rem, 5vw, 4rem)',
            background: 'linear-gradient(to right, transparent, var(--background))',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
}
