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
        minHeight: '100vh',
        background: 'var(--background)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        paddingBottom: 'clamp(4rem, 8vw, 8rem)',
      }}
    >
      {/* Background decorative ghost text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-0.05em',
          right: '-0.08em',
          fontFamily: 'var(--font-playfair, Georgia, serif)',
          fontSize: 'clamp(14rem, 48vw, 52rem)',
          fontWeight: 700,
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(237,235,229,0.035)',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.03em',
        }}
      >
        이
      </div>

      {/* Top-left label */}
      <div
        className="intro-label"
        style={{
          position: 'absolute',
          top: 'clamp(5rem, 8vw, 7rem)',
          left: 'clamp(1.5rem, 4vw, 4rem)',
        }}
      >
        <p
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          Portfolio — 영상 콘텐츠 제작자
        </p>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          padding: '0 clamp(1.5rem, 4vw, 4rem)',
        }}
      >
        {/* Name */}
        <h1
          className="intro-name"
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: 'clamp(5.5rem, 20vw, 20rem)',
            fontWeight: 500,
            lineHeight: 0.88,
            letterSpacing: '-0.025em',
            color: 'var(--foreground)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {name}
        </h1>

        {/* Role */}
        <div
          className="intro-role"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '1px',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            영상 콘텐츠 제작자
          </p>
        </div>

        {/* Bio + Stats + Email */}
        <div
          className="intro-body"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ maxWidth: '38ch' }}>
            <p
              style={{
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.9375rem)',
                lineHeight: 1.9,
                color: 'var(--muted)',
                marginBottom: '2rem',
              }}
            >
              기획부터 촬영, 편집, 음향까지 영상 한 편의 전 과정을 직접 챙깁니다.
              인터뷰, 예능, 모션그래픽, AI 광고 등 장르를 가리지 않고,
              클라이언트가 전하고 싶은 이야기를 영상으로 풀어냅니다.
            </p>
            <a
              href={`mailto:${email}`}
              style={{
                display: 'inline-block',
                fontSize: '0.625rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--foreground)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--accent)',
                paddingBottom: '3px',
              }}
            >
              {email}
            </a>
          </div>

          {/* Stats */}
          <div
            className="intro-stats"
            style={{
              display: 'flex',
              gap: 'clamp(2rem, 4vw, 4rem)',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  fontWeight: 500,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  letterSpacing: '-0.02em',
                }}
              >
                {videoCount}
              </p>
              <p
                style={{
                  fontSize: '0.5625rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: '0.5rem',
                }}
              >
                Projects
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-playfair, Georgia, serif)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
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
                  fontSize: '0.5625rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: '0.5rem',
                }}
              >
                Years
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(1.5rem, 4vw, 4rem)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '0.5rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '2rem',
            background: 'var(--border)',
          }}
        />
        Scroll
      </div>
    </section>
  );
}
