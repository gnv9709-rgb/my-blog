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
      {/* Heading area */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
          paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        {/* Ghost number behind heading */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 2vw, 2rem)',
            bottom: '-0.08em',
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: 'clamp(7rem, 20vw, 20rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,235,229,0.05)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          {indexStr}
        </span>

        {/* Index label */}
        <p
          style={{
            fontSize: '0.475rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
            marginBottom: '0.625rem',
          }}
        >
          {indexStr}
        </p>

        {/* Category name — dominates the section */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
          <h2
            id={`cat-heading-${index}`}
            style={{
              fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
              fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: 'var(--accent)',
            }}
          >
            {category}
          </h2>

          <p
            style={{
              flexShrink: 0,
              fontSize: '0.475rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              fontFamily: 'var(--font-geist-mono, monospace)',
              paddingBottom: 'clamp(0.5rem, 1vw, 1rem)',
            }}
          >
            ×{videos.length}
          </p>
        </div>
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
