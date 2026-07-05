import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';

/**
 * Brand app-icon tiles for the skill/tool list.
 *
 * If a tool has a real logo image in /public/logos, that exact image is rendered
 * edge-to-edge in the rounded tile. Otherwise it falls back to a self-contained
 * SVG/monogram mark. Full names are exposed for a11y.
 */

interface ToolSpec {
  bg: string;
  fg: string; // used by monogram tools (Adobe)
  img?: string; // exact logo file under /public/logos
  mono?: string; // Adobe-style two-letter monogram
  icon?: (id: string) => ReactNode; // fallback SVG emblem (viewBox 0 0 100 100)
  light?: boolean; // light tile → needs a darker border
}

const TOOLS: Record<string, ToolSpec> = {
  // ── Adobe: the two-letter monogram *is* the brand mark. Add
  //    img: '/logos/photoshop.png' etc. once a cropped file exists. ──
  Photoshop: { bg: '#001e36', fg: '#31a8ff', mono: 'Ps' },
  'Premiere Pro': { bg: '#2a0a4d', fg: '#e6a3ff', mono: 'Pr' },
  'After Effects': { bg: '#0a0a3b', fg: '#a49bff', mono: 'Ae' },

  // ── Real logo images the user provided (drop files into /public/logos) ──
  '힉스필드': {
    bg: '#c6f23c',
    fg: '#111',
    // img: '/logos/higgsfield.png',
    icon: () => (
      <path
        d="M25 61 C 25 42 46 39 51 55 C 56 71 76 66 76 44"
        fill="none"
        stroke="#141414"
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  '클링': {
    bg: '#000000',
    fg: '#fff',
    // img: '/logos/kling.png',
    icon: (id) => (
      <>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#41e08c" />
            <stop offset="0.5" stopColor="#2ea8ff" />
            <stop offset="1" stopColor="#2b46ff" />
          </linearGradient>
        </defs>
        <g transform="rotate(-35 50 50)">
          <ellipse cx="50" cy="50" rx="42" ry="26" fill={`url(#${id})`} />
          <ellipse cx="50" cy="50" rx="23" ry="10.5" fill="#000" />
        </g>
      </>
    ),
  },
  '나노바나나': {
    bg: '#ffffff',
    fg: '#111',
    light: true,
    img: '/logos/nano-banana.png',
    icon: () => (
      <>
        <path
          d="M19 33 C 30 27 71 39 79 73 C 80 78 73 81 70 76 C 62 49 33 41 21 45 C 16 46 14 36 19 33 Z"
          fill="#f5ce3e"
        />
        <g transform="rotate(53 50 55)">
          <rect x="34" y="41" width="8" height="28" fill="#4285f4" />
          <rect x="42" y="41" width="8" height="28" fill="#ea4335" />
          <rect x="50" y="41" width="8" height="28" fill="#fbbc05" />
          <rect x="58" y="41" width="8" height="28" fill="#34a853" />
        </g>
      </>
    ),
  },
  Midjourney: {
    bg: '#f0531e',
    fg: '#fff',
    img: '/logos/midjourney.png',
    icon: () => (
      <>
        <path
          d="M50 20 C 42 34 35 50 33 65 C 44 60 56 60 67 65 C 65 50 58 34 50 20 Z"
          fill="#fff"
        />
        <path
          d="M23 68 C 38 80 62 80 77 68 C 70 76 60 80 50 80 C 40 80 30 76 23 68 Z"
          fill="#fff"
        />
      </>
    ),
  },
  '클로드': {
    bg: '#d97757',
    fg: '#fff',
    img: '/logos/claude.png',
    icon: () => (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="47.5"
            y="11"
            width="5"
            height="31"
            rx="2.5"
            fill="#fff"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </>
    ),
  },
  '안티그래비티': {
    bg: '#0d0f16',
    fg: '#fff',
    img: '/logos/antigravity.png',
    icon: (id) => (
      <>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#34d07f" />
            <stop offset="0.5" stopColor="#2ea8ff" />
            <stop offset="1" stopColor="#4b6bff" />
          </linearGradient>
        </defs>
        <path
          d="M16 74 C 34 74 38 27 50 27 C 62 27 66 74 84 74"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={9}
          strokeLinecap="round"
        />
      </>
    ),
  },
};

const NAME_KO: Record<string, string> = {
  '힉스필드': 'Higgsfield',
  '클링': 'Kling',
  '나노바나나': 'Nano Banana',
  '클로드': 'Claude',
  '안티그래비티': 'Antigravity',
};

interface ToolLogoProps {
  name: string;
  size?: number;
  showLabel?: boolean;
}

export default function ToolLogo({ name, size = 52, showLabel = true }: ToolLogoProps) {
  const spec = TOOLS[name] ?? { bg: '#141821', fg: '#ffffff', mono: name.slice(0, 2) };
  const displayName = NAME_KO[name] ?? name;
  const gradientId = `tool-${name.replace(/[^a-zA-Z가-힣]/g, '')}`;

  const tile: CSSProperties = {
    position: 'relative',
    width: size,
    height: size,
    borderRadius: size * 0.24,
    background: spec.bg,
    color: spec.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
    fontWeight: 700,
    fontSize: size * 0.4,
    letterSpacing: '-0.03em',
    boxShadow: '0 6px 18px -8px rgba(36,26,20,0.45)',
    border: spec.light ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.08)',
    flexShrink: 0,
    overflow: 'hidden',
  };

  const renderMark = () => {
    if (spec.img) {
      return (
        <Image
          src={spec.img}
          alt={`${displayName} 로고`}
          fill
          sizes={`${size}px`}
          style={{ objectFit: 'cover' }}
        />
      );
    }
    if (spec.icon) {
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" role="img">
          {spec.icon(gradientId)}
        </svg>
      );
    }
    return spec.mono;
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: size }}
      title={displayName}
    >
      <div style={tile} aria-hidden={spec.img ? undefined : 'true'}>
        {renderMark()}
      </div>
      {showLabel && (
        <span
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.02em',
            color: 'var(--muted)',
            textAlign: 'center',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
          }}
        >
          {displayName}
        </span>
      )}
    </div>
  );
}
