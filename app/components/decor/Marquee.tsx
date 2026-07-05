import type { CSSProperties } from 'react';

interface MarqueeProps {
  items: string[];
  tone?: 'crimson' | 'cream';
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  reverse?: boolean;
}

const STAR = '★'; // ★

const TONES: Record<'crimson' | 'cream', CSSProperties> = {
  crimson: {
    background: 'var(--crimson)',
    color: 'var(--on-crimson)',
    borderTop: '1px solid var(--crimson-deep)',
    borderBottom: '1px solid var(--crimson-deep)',
  },
  cream: {
    background: 'var(--surface)',
    color: 'var(--foreground)',
    borderTop: '1px solid var(--border)',
    borderBottom: '1px solid var(--border)',
  },
};

/**
 * Full-bleed running text band with ★ separators — editorial rhythm between
 * sections (ref: "WE DO THINGS DIFFERENTLY THAN THE REST ★").
 * Animation pauses under prefers-reduced-motion (see .marquee-track in globals.css).
 */
export default function Marquee({
  items,
  tone = 'crimson',
  duration = 32,
  reverse = false,
}: MarqueeProps) {
  // Duplicate the run so the -50% translate loops seamlessly.
  const run = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="grain"
      style={{
        overflow: 'hidden',
        position: 'relative',
        padding: 'clamp(0.75rem, 1.6vw, 1.15rem) 0',
        ...TONES[tone],
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {run.map((item, i) => (
          <span
            key={`${item}-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              fontFamily: 'var(--font-display-stack)',
              fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              lineHeight: 1,
              paddingRight: 'clamp(1.5rem, 3.5vw, 3rem)',
            }}
          >
            {item}
            <span
              style={{
                marginLeft: 'clamp(1.5rem, 3.5vw, 3rem)',
                fontSize: '0.7em',
                color: tone === 'crimson' ? 'var(--on-crimson-faint)' : 'var(--accent)',
              }}
            >
              {STAR}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
