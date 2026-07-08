'use client';

import { useRef, useCallback, type CSSProperties } from 'react';

interface CoverSectionProps {
  /** English display name rendered as the script signature. */
  englishName: string;
}

const monoFont = 'var(--font-geist-mono, monospace)';

/* Neo-grotesque wordmark (cover type ref: clean Helvetica-like bold caps) */
const WORDMARK: CSSProperties = {
  fontFamily: 'var(--font-archivo), system-ui, sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(2.9rem, 12vw, 12.5rem)',
  lineHeight: 1,
  letterSpacing: '-0.025em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  margin: 0,
  userSelect: 'none',
};

/**
 * Cover (page 1) — giant PORTFOLIO wordmark with the portrait breaking through
 * the letters (cover refs: solid type behind the subject, outline type in
 * front) + brush-script signature, staged with mouse parallax.
 */
export default function CoverSection({ englishName }: CoverSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const onStageMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', mx.toFixed(3));
      el.style.setProperty('--my', my.toFixed(3));
    });
  }, []);

  return (
    <section
      ref={stageRef}
      aria-label="커버"
      className="grain persp"
      onPointerMove={onStageMove}
      style={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background:
          'radial-gradient(120% 90% at 50% 110%, #221a33 0%, #100d15 55%, #0d0a11 100%)',
      }}
    >
      {/* meta strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
          paddingTop: 'calc(64px + clamp(1rem, 2vw, 1.5rem))',
          position: 'relative',
          zIndex: 6,
        }}
      >
        <p className="hero-label" style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
          Video Content Creator
        </p>
        <p className="hero-label" style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.4em', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
          © {new Date().getFullYear()}
        </p>
      </div>

      {/* wordmark + portrait composition */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          display: 'grid',
          placeItems: 'center',
          padding: '0 clamp(1rem, 3vw, 3rem)',
        }}
      >
        {/* solid wordmark — behind the portrait */}
        <h1
          className="hero-title"
          style={{
            ...WORDMARK,
            position: 'relative',
            zIndex: 1,
            color: 'var(--cream)',
            transform: 'translate3d(calc(var(--mx, 0) * -14px), calc(var(--my, 0) * -8px), 0)',
          }}
        >
          Portfolio
        </h1>

        {/* outline wordmark — in front, doubling the solid type with a gold edge */}
        <p
          aria-hidden="true"
          className="hero-title"
          style={{
            ...WORDMARK,
            position: 'absolute',
            zIndex: 3,
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(240,213,160,0.55)',
            transform: 'translate3d(calc(var(--mx, 0) * -14px), calc(var(--my, 0) * -8px), 0)',
            pointerEvents: 'none',
          }}
        >
          Portfolio
        </p>

        {/* brush-script signature over the lower right of the portrait */}
        <p
          className="hero-play script-accent"
          style={{
            position: 'absolute',
            zIndex: 4,
            bottom: 'clamp(3rem, 12vh, 7rem)',
            left: 'calc(50% + clamp(0rem, 9vw, 9rem))',
            transform: 'translateX(-50%) rotate(-6deg)',
            fontSize: 'clamp(1.65rem, 4.6vw, 3.8rem)',
            whiteSpace: 'nowrap',
            textShadow: '0 10px 34px rgba(0,0,0,0.75)',
          }}
        >
          {englishName}
        </p>

        {/* small spec tags (cover ref 3: IDEA / DESIGN markers) */}
        <span
          aria-hidden="true"
          className="hero-meta"
          style={{
            position: 'absolute',
            top: 'clamp(4rem, 14vh, 8rem)',
            left: 'clamp(1.5rem, 7vw, 7rem)',
            zIndex: 4,
            fontFamily: monoFont,
            fontSize: '0.625rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--accent-bright)',
          }}
        >
          ● Plan — Shoot — Edit
        </span>
      </div>

      {/* bottom strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
          position: 'relative',
          zIndex: 6,
        }}
      >
        <p className="hero-play" style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
          Seoul, KR
        </p>
        <p className="hero-play" style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
          Scroll ↓
        </p>
      </div>
    </section>
  );
}
