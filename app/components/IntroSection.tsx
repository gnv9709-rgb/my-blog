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
      {/* Top metadata strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 4rem)',
          paddingTop: 'calc(64px + clamp(1rem, 2vw, 1.5rem))',
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
            color: 'var(--muted)',
            fontFamily: 'var(--font-geist-mono, monospace)',
          }}
        >
          {new Date().getFullYear()}
        </p>
      </div>

      {/* Name block — fills remaining space */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(1rem, 2.5vw, 2.5rem)',
          position: 'relative',
        }}
      >
        {/* Faint ghost letter */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-0.04em',
            bottom: '-0.1em',
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(20rem, 65vw, 80rem)',
            fontWeight: 700,
            lineHeight: 0.82,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(237,235,229,0.06)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          이
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(7rem, 32vw, 38rem)',
            fontWeight: 500,
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            color: 'var(--foreground)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {name}
        </h1>
      </div>

      {/* Red band — role label */}
      <div
        style={{
          background: 'var(--accent)',
          padding: 'clamp(0.75rem, 1.5vw, 1.125rem) clamp(1.5rem, 4vw, 4rem)',
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: 'clamp(0.75rem, 2vw, 1.125rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#f0ece6',
            fontWeight: 500,
          }}
        >
          영상 콘텐츠 제작자
        </p>
      </div>

      {/* Bottom info bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 'clamp(1.5rem, 4vw, 5rem)',
          padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
          alignItems: 'end',
          flexShrink: 0,
          borderTop: '1px solid var(--border)',
        }}
      >
        {/* Left — bio + email */}
        <div>
          <p
            style={{
              fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
              lineHeight: 1.85,
              color: 'var(--muted)',
              maxWidth: '42ch',
              marginBottom: '1rem',
            }}
          >
            기획부터 촬영, 편집, 음향까지 영상 한 편의 전 과정을 직접 챙깁니다.
            장르를 가리지 않고 클라이언트가 전하고 싶은 이야기를 영상으로 풀어냅니다.
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              fontSize: '0.5rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              textDecoration: 'none',
            }}
          >
            {email}
          </a>
        </div>

        {/* Stat: Works */}
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
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
              fontSize: '0.44rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '0.375rem',
            }}
          >
            Works
          </p>
        </div>

        {/* Stat: Years */}
        <div style={{ textAlign: 'right' }}>
          <p
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
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
              fontSize: '0.44rem',
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
