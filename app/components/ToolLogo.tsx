import type { CSSProperties } from 'react';

/**
 * Brand app-icon tiles for the skill/tool list. Self-contained (no network assets):
 * each tool renders as its recognizable colored tile + monogram, mirroring the
 * Adobe-style icon row in the reference. Full names are exposed for a11y.
 */

interface ToolSpec {
  label: string; // monogram shown on the tile
  bg: string;
  fg: string;
}

const TOOLS: Record<string, ToolSpec> = {
  'Premiere Pro': { label: 'Pr', bg: '#2b0a3d', fg: '#d3a0ff' },
  'After Effects': { label: 'Ae', bg: '#160038', fg: '#b3a4ff' },
  Photoshop: { label: 'Ps', bg: '#001e36', fg: '#31a8ff' },
  Illustrator: { label: 'Ai', bg: '#330000', fg: '#ff9a00' },
  CapCut: { label: 'Cc', bg: '#0b0b0f', fg: '#ffffff' },
  Midjourney: { label: 'Mj', bg: '#0b0b0f', fg: '#ffffff' },
  '클링': { label: 'KL', bg: '#3a54ff', fg: '#ffffff' },
  '힉스필드': { label: 'Hf', bg: '#141821', fg: '#ffffff' },
  '클로드': { label: 'Cl', bg: '#d97757', fg: '#ffffff' },
};

const NAME_KO: Record<string, string> = {
  '클링': 'Kling',
  '힉스필드': 'Higgsfield',
  '클로드': 'Claude',
};

interface ToolLogoProps {
  name: string;
  size?: number;
  showLabel?: boolean;
}

export default function ToolLogo({ name, size = 52, showLabel = true }: ToolLogoProps) {
  const spec = TOOLS[name] ?? { label: name.slice(0, 2), bg: '#141821', fg: '#ffffff' };
  const displayName = NAME_KO[name] ?? name;

  const tile: CSSProperties = {
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
    border: '1px solid rgba(255,255,255,0.08)',
    flexShrink: 0,
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: size }}
      title={displayName}
    >
      <div style={tile} aria-hidden="true">
        {spec.label}
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
