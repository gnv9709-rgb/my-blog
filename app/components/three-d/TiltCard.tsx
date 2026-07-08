'use client';

import { useRef, useCallback, type CSSProperties, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  /** Max tilt angle in degrees. */
  max?: number;
  /** translateZ pop distance on hover (px). */
  pop?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Pointer-tracking 3D tilt wrapper (layout ref: dreiraum.studio "websites you
 * want to touch"). Drives --rx/--ry/--pz consumed by .tilt-card in globals.css.
 * Compositor-only (transform), rAF-throttled, inert for touch + reduced motion.
 */
export default function TiltCard({ children, max = 8, pop = 14, className, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const isFinePointer = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || !isFinePointer()) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.classList.add('tilting');
        el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
        el.style.setProperty('--pz', `${pop}px`);
      });
    },
    [max, pop],
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.classList.remove('tilting');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--pz', '0px');
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className ?? ''}`}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
