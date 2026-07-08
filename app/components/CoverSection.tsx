'use client';

import { useRef, useCallback, type CSSProperties } from 'react';
import Image from 'next/image';

interface CoverSectionProps {
  /** English display name rendered as the script signature. */
  englishName: string;
  photo: string;
}

const monoFont = 'var(--font-geist-mono, monospace)';

/* Figma-style selection handles around the wordmark (cover refs 3–4) */
const HANDLES: CSSProperties[] = [
  { top: -5, left: -5 },
  { top: -5, left: '50%', marginLeft: -5 },
  { top: -5, right: -5 },
  { top: '50%', left: -5, marginTop: -5 },
  { top: '50%', right: -5, marginTop: -5 },
  { bottom: -5, left: -5 },
  { bottom: -5, left: '50%', marginLeft: -5 },
  { bottom: -5, right: -5 },
];

const WORDMARK: CSSProperties = {
  fontFamily: 'var(--font-anton), system-ui, sans-serif',
  fontSize: 'clamp(3.4rem, 14.5vw, 15rem)',
  lineHeight: 1,
  letterSpacing: '0.01em',
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
export default function CoverSection({ englishName, photo }: CoverSectionProps) {
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
        {/* dashed selection frame with handles */}
        <div
          aria-hidden="true"
          className="hero-meta"
          style={{
            position: 'absolute',
            inset: 'clamp(0.5rem, 4vh, 3rem) clamp(0.75rem, 3vw, 3rem)',
            border: '1px dashed rgba(243,234,217,0.25)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        >
          {HANDLES.map((pos, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                width: 9,
                height: 9,
                background: 'var(--background)',
                border: '1px solid rgba(243,234,217,0.6)',
                ...pos,
              }}
            />
          ))}
        </div>

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

        {/* portrait — breaks through the type, fades into the stage floor */}
        <div
          className="hero-meta"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            zIndex: 2,
            width: 'clamp(240px, 44vmin, 460px)',
            height: 'clamp(300px, 62vh, 640px)',
            transform: 'translate3d(calc(-50% + var(--mx, 0) * 12px), calc(var(--my, 0) * 6px), 0)',
            maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
          }}
        >
          <Image
            src={photo}
            alt="이정석 프로필 사진"
            fill
            preload
            fetchPriority="high"
            sizes="(max-width: 768px) 70vw, 460px"
            style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'saturate(0.86) contrast(1.04)' }}
          />
          {/* soften the photo edges into the stage */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              boxShadow: 'inset 0 0 48px 34px rgba(16, 13, 21, 0.9)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* outline wordmark — in front, letters cross over the face */}
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
            left: 'calc(50% + clamp(2rem, 10vw, 9rem))',
            transform: 'translateX(-50%) rotate(-6deg)',
            fontSize: 'clamp(1.9rem, 4.6vw, 3.8rem)',
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
