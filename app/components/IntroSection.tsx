interface IntroSectionProps {
  name: string;
  email: string;
  videoCount: number;
}

export default function IntroSection({ name, email, videoCount }: IntroSectionProps) {
  return (
    <section
      aria-label="소개"
      style={{
        minHeight: '100svh',
        background: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top red bar */}
      <div style={{ height: '2px', background: 'var(--accent)', flexShrink: 0 }} />

      {/* Meta strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: '0.5rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          Portfolio
        </p>
        <p
          style={{
            fontSize: '0.5rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
          }}
        >
          {new Date().getFullYear()}
        </p>
      </div>

      {/* Name — dominates the screen */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(1rem, 2.5vw, 2.5rem)',
          position: 'relative',
        }}
      >
        {/* Ghost decoration */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.06em',
            bottom: '-0.12em',
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(18rem, 70vw, 80rem)',
            fontWeight: 700,
            lineHeight: 0.8,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,235,229,0.055)',
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.04em',
          }}
        >
          이
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(6.5rem, 28vw, 30rem)',
            fontWeight: 500,
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
            position: 'relative',
          }}
        >
          {name}
        </h1>
      </div>

      {/* Bottom info bar */}
      <div
        style={{
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 'clamp(1.5rem, 4vw, 5rem)',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
          alignItems: 'end',
          flexShrink: 0,
        }}
      >
        {/* Left — role + email + bio */}
        <div>
          <p
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}
          >
            영상 콘텐츠 제작자
          </p>
          <p
            style={{
              fontSize: '0.8125rem',
              lineHeight: 1.8,
              color: 'var(--muted)',
              maxWidth: '44ch',
              marginBottom: '1.25rem',
            }}
          >
            기획부터 촬영, 편집, 음향까지 영상 한 편의 전 과정을 직접 챙깁니다.
            인터뷰, 예능, 모션그래픽, AI 광고 등 장르를 가리지 않습니다.
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              fontSize: '0.5rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(86,86,86,0.4)',
              paddingBottom: '2px',
            }}
          >
            {email}
          </a>
        </div>

        {/* Stat 1 */}
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 500,
              lineHeight: 1,
              color: 'var(--foreground)',
              letterSpacing: '-0.02em',
            }}
          >
            {videoCount}
          </p>
          <p
            style={{
              fontSize: '0.45rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '0.375rem',
            }}
          >
            Works
          </p>
        </div>

        {/* Stat 2 */}
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 500,
              lineHeight: 1,
              color: 'var(--accent)',
              letterSpacing: '-0.02em',
            }}
          >
            3+
          </p>
          <p
            style={{
              fontSize: '0.45rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '0.375rem',
            }}
          >
            Years
          </p>
        </div>
      </div>
    </section>
  );
}
