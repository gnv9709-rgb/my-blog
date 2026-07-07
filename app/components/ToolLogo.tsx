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
  fit?: 'cover' | 'contain'; // how the image fills the tile (default cover)
  scale?: number; // zoom the image to crop out a screenshot's background margin
  appIcon?: boolean; // official macOS .icns export: already rounded + transparent → no tile chrome
  mono?: string; // Adobe-style two-letter monogram
  icon?: (id: string) => ReactNode; // fallback SVG emblem (viewBox 0 0 100 100)
  light?: boolean; // light (white) tile → gets a hairline border for definition
  custom?: (size: number) => ReactNode; // fully self-rendered mark (no tile chrome)
}

// Gemini's 4-point spark: a conic rainbow clipped to the star silhouette.
const GEMINI_MASK = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 3C54 28 72 46 97 50C72 54 54 72 50 97C46 72 28 54 3 50C28 46 46 28 50 3Z' fill='black'/></svg>",
)}")`;

const TOOLS: Record<string, ToolSpec> = {
  // ── Adobe: official app icons exported from the installed apps. mono kept as fallback. ──
  Photoshop: { bg: '#001e36', fg: '#31a8ff', mono: 'Ps', img: '/logos/photoshop.png', appIcon: true },
  'Premiere Pro': { bg: '#2a0a4d', fg: '#e6a3ff', mono: 'Pr', img: '/logos/premiere.png', appIcon: true },
  'After Effects': { bg: '#0a0a3b', fg: '#a49bff', mono: 'Ae', img: '/logos/aftereffects.png', appIcon: true },

  // ── Real logo images the user provided (drop files into /public/logos) ──
  '힉스필드': {
    bg: '#c6f23c',
    fg: '#111',
    img: '/logos/higgsfield.jpg',
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
    img: '/logos/kling.jpg',
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
    img: '/logos/nano-banana.webp',
    fit: 'cover',
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
    bg: '#ffffff',
    fg: '#484848',
    light: true,
    img: '/logos/midjourney.jpg',
    fit: 'contain',
    scale: 1.12,
    icon: () => (
      <g fill="none" stroke="#484848" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 16 C 27 40 27 60 29 72 L 60 72 C 46 55 37 35 30 16 Z" />
        <path d="M41 28 C 55 41 65 56 69 72 L 61 72 C 56 57 49 42 41 28 Z" />
        <path d="M17 74 L 85 71 L 74 85 L 27 85 Z" />
        <path d="M12 92 q 8 -7 15 0 t 15 0 t 15 0 t 15 0" />
      </g>
    ),
  },
  '클로드': {
    bg: '#d97757',
    fg: '#fff',
    img: '/logos/claude.png',
    appIcon: true,
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
    appIcon: true,
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

  // ── Real logo images the user provided (exact brand assets) ──
  Gemini: {
    bg: 'transparent',
    fg: '#000',
    img: '/logos/gemini.webp',
    appIcon: true,
    scale: 1,
  },
  ChatGPT: {
    bg: '#10a37f',
    fg: '#ffffff',
    img: '/logos/chatgpt.png',
    appIcon: true,
    scale: 1,
  },
  '캡컷': {
    bg: '#ffffff',
    fg: '#000000',
    light: true,
    img: '/logos/capcut.png',
    fit: 'contain',
    scale: 1.05,
  },
  '타입캐스트': {
    bg: 'transparent',
    fg: '#0d1b3a',
    img: '/logos/typecast.png',
    appIcon: true,
    scale: 1,
  },
  '아이폰 15pro': {
    bg: '#1d1d1f',
    fg: '#f5f5f7',
    icon: () => (
      <>
        <path
          fill="#f5f5f7"
          d="M67.6 53.1c-.1-9.2 7.5-13.6 7.8-13.8-4.3-6.2-10.9-7.1-13.3-7.2-5.6-.6-11 3.3-13.8 3.3-2.9 0-7.3-3.3-12-3.2-6.1.1-11.8 3.6-15 9.1-6.4 11.1-1.6 27.6 4.6 36.6 3 4.4 6.6 9.4 11.3 9.2 4.5-.2 6.3-2.9 11.7-2.9 5.4 0 7 2.9 11.7 2.8 4.8-.1 7.9-4.5 10.9-8.9 3.4-5.1 4.8-10.1 4.9-10.4-.1-.1-9.4-3.6-9.5-14.3z"
        />
        <path
          fill="#f5f5f7"
          d="M58.9 26.6c2.5-3 4.2-7.3 3.7-11.5-3.6.1-8 2.4-10.6 5.4-2.3 2.6-4.3 6.9-3.8 11 4 .3 8.1-2 10.7-4.9z"
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
  '캡컷': 'CapCut',
  '아이폰 15pro': 'iPhone 15 Pro',
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

  // Every logo sits in the same rounded-square frame, filled edge-to-edge.
  // No shadow (nothing reads as a floating "card"); white tiles get a hairline
  // border just so their edge is visible against the page.
  // Real macOS app icons already carry their own rounded shape + transparency,
  // so they get no tile background/border — the icon itself is the whole mark.
  const useImage = Boolean(spec.img);
  const isAppIcon = spec.appIcon && useImage;
  const tile: CSSProperties = {
    position: 'relative',
    width: size,
    height: size,
    borderRadius: size * 0.24,
    background: isAppIcon ? 'transparent' : spec.bg,
    color: spec.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-geist-sans, system-ui, sans-serif)',
    fontWeight: 700,
    fontSize: size * 0.4,
    letterSpacing: '-0.03em',
    border: spec.light && !isAppIcon ? '1px solid rgba(0,0,0,0.08)' : 'none',
    flexShrink: 0,
    overflow: isAppIcon ? 'visible' : 'hidden',
  };

  const renderMark = () => {
    if (spec.img) {
      return (
        <Image
          src={spec.img}
          alt={`${displayName} 로고`}
          fill
          sizes={`${size}px`}
          style={{
            objectFit: isAppIcon ? 'contain' : spec.fit ?? 'cover',
            transform: `scale(${spec.scale ?? (isAppIcon ? 1.2 : 1)})`,
          }}
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

  // Give each item enough width for its label so neighbouring labels never collide.
  const itemWidth = Math.max(size, 68);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: itemWidth }}
      title={displayName}
    >
      {spec.custom ? (
        spec.custom(size)
      ) : (
        <div style={tile} aria-hidden={spec.img ? undefined : 'true'}>
          {renderMark()}
        </div>
      )}
      {showLabel && (
        <span
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.02em',
            color: 'var(--muted)',
            textAlign: 'center',
            lineHeight: 1.25,
            whiteSpace: 'normal',
            wordBreak: 'keep-all',
          }}
        >
          {displayName}
        </span>
      )}
    </div>
  );
}
