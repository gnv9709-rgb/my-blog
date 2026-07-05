import type { CSSProperties } from 'react';

type SquiggleVariant = 'a' | 'b' | 'c';

interface SquiggleProps {
  variant?: SquiggleVariant;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  style?: CSSProperties;
  className?: string;
}

// Loose, hand-drawn winding lines — the editorial "squiggle" motif that fills
// cream negative space (ref: Olivia Wilson / Studio La Terre red-editorial layouts).
const PATHS: Record<SquiggleVariant, string> = {
  a: 'M4 96 C 70 20, 140 176, 214 100 S 344 20, 418 92 S 548 172, 636 92',
  b: 'M8 60 C 96 150, 150 -6, 250 70 C 330 130, 372 150, 420 92 C 480 20, 560 40, 632 120',
  c: 'M6 110 C 80 60, 120 60, 150 110 C 190 176, 250 176, 288 110 C 322 52, 386 52, 420 110 C 456 172, 520 172, 556 110 C 588 58, 624 66, 636 96',
};

/**
 * Decorative organic squiggle. Purely presentational — always aria-hidden.
 * Sized by the caller via `style` (width/height + absolute positioning).
 */
export default function Squiggle({
  variant = 'a',
  color = 'var(--accent)',
  strokeWidth = 2,
  opacity = 0.5,
  style,
  className,
}: SquiggleProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 640 180"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      style={{ pointerEvents: 'none', opacity, ...style }}
    >
      <path
        d={PATHS[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
