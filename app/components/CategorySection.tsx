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
        borderTop: '1px solid var(--border)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 4vw, 4rem)',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        <div>
          <span
            style={{
              display: 'block',
              fontSize: '0.5rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '0.625rem',
              fontFamily: 'var(--font-geist-mono, monospace)',
            }}
          >
            {indexStr}
          </span>
          <h2
            id={`cat-heading-${index}`}
            style={{
              fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
              fontSize: 'clamp(2rem, 7.5vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
              color: 'var(--accent)',
            }}
          >
            {category}
          </h2>
        </div>
        <span
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
            paddingBottom: '0.5rem',
          }}
        >
          ×{videos.length}
        </span>
      </div>

      {/* Horizontal slider */}
      <div style={{ position: 'relative' }}>
        <div
          className="scrollbar-none"
          style={{
            display: 'flex',
            gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
            paddingBottom: '0.5rem',
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="slider-card"
              style={{
                flexShrink: 0,
                width: 'clamp(240px, 36vw, 400px)',
                scrollSnapAlign: 'start',
              }}
            >
              <VideoCard video={video} sliderMode />
            </div>
          ))}
        </div>

        {/* Right fade hint — only when scrollable */}
        {videos.length > 2 && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: '0.5rem',
              width: 'clamp(3rem, 6vw, 5rem)',
              background: 'linear-gradient(to right, transparent, var(--background))',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </section>
  );
}
