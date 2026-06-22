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
        position: 'relative',
      }}
    >
      {/* Top border */}
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* Section heading area */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem)',
          paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          overflow: 'hidden',
        }}
      >
        {/* Ghost index number behind heading */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 3vw, 3rem)',
            bottom: '-0.12em',
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: 'clamp(8rem, 22vw, 22rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,235,229,0.045)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          {indexStr}
        </span>

        {/* Small index label */}
        <p
          style={{
            fontSize: '0.475rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
            marginBottom: '0.75rem',
            position: 'relative',
          }}
        >
          {indexStr}
        </p>

        {/* Category name */}
        <h2
          id={`cat-heading-${index}`}
          style={{
            fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
            fontSize: 'clamp(2.5rem, 12vw, 12rem)',
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            color: 'var(--accent)',
            position: 'relative',
          }}
        >
          {category}
        </h2>

        {/* Count — right aligned, bottom */}
        <p
          style={{
            position: 'absolute',
            right: 'clamp(1.5rem, 4vw, 4rem)',
            top: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontSize: '0.475rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
          }}
        >
          ×{videos.length}
        </p>
      </div>

      {/* Horizontal slider */}
      <div
        style={{
          position: 'relative',
          paddingBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
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
