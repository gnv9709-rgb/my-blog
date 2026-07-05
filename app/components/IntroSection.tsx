import type { CSSProperties } from 'react';
import type { Video } from '../types';
import MediaCluster from './MediaCluster';
import ToolLogo from './ToolLogo';
import Squiggle from './decor/Squiggle';

interface IntroSectionProps {
  name: string;
  email: string;
  videoCount: number;
  videos?: Video[];
}

// Software tools shown as brand logos, in the order requested; techniques listed as text.
const toolGroups = [
  {
    label: 'Tools',
    items: [
      '힉스필드',
      'Photoshop',
      'Premiere Pro',
      'After Effects',
      '클링',
      '나노바나나',
      'Midjourney',
      '클로드',
      '안티그래비티',
    ],
  },
];
const techniques = ['촬영', '편집', '기획', '자막', '모션그래픽', '라이브 송출'];

const displayFont = 'var(--font-display-stack)';

const labelStyle: CSSProperties = {
  fontSize: 'var(--text-label, 0.625rem)',
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
  fontFamily: 'var(--font-geist-mono, monospace)',
};

const sectionPad: CSSProperties = {
  padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)',
  borderTop: '1px solid var(--border)',
};

export default function IntroSection({ name, email, videoCount, videos = [] }: IntroSectionProps) {
  // A representative spread for the profile cluster: mix landscape + vertical.
  const clusterVideos = [
    ...videos.filter((v) => !v.vertical),
    ...videos.filter((v) => v.vertical),
  ].slice(0, 5);

  const facts = [
    { dt: '이름', dd: '이정석' },
    { dt: '생년', dd: '1997년 (28세)' },
    { dt: '성별', dd: '남' },
    { dt: '거주지', dd: '서울 금천구' },
    { dt: '연락처', dd: email },
  ];

  return (
    <section aria-label="소개" style={{ background: 'var(--background)' }}>

      {/* ── 01 HERO — red field ──────────────── */}
      <div
        className="grain"
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          background:
            'radial-gradient(120% 120% at 15% 0%, var(--crimson) 0%, var(--crimson-deep) 100%)',
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
            zIndex: 2,
          }}
        >
          <p style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--on-crimson-faint)', fontFamily: 'var(--font-geist-mono, monospace)' }}>
            Portfolio
          </p>
          <p style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.4em', color: 'var(--on-crimson-faint)', fontFamily: 'var(--font-geist-mono, monospace)' }}>
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* headline */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(1.25rem, 3vw, 2.75rem) clamp(1.5rem, 4vw, 4rem)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <p
            className="intro-label"
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2.6vw, 2rem)',
              color: 'var(--on-crimson-soft)',
              marginBottom: 'clamp(0.25rem, 1vw, 0.75rem)',
              marginLeft: '0.15em',
            }}
          >
            Creative
          </p>
          <h1
            className="intro-name"
            style={{
              fontFamily: displayFont,
              fontSize: 'clamp(3rem, 10.5vw, 11rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '0.01em',
              color: 'var(--on-crimson)',
              textTransform: 'uppercase',
            }}
          >
            A&nbsp;CREATOR
          </h1>
          <p
            className="intro-role"
            style={{
              marginTop: 'clamp(1.25rem, 2.2vw, 2rem)',
              fontSize: 'clamp(1.0625rem, 1.9vw, 1.5rem)',
              lineHeight: 1.6,
              color: 'var(--on-crimson)',
              maxWidth: '34ch',
            }}
          >
            who takes a story from idea to final cut,
            <br />
            and always sees it through.
          </p>
        </div>

        {/* bottom row — hashtags + korean statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
            alignItems: 'end',
            padding: '0 clamp(1.5rem, 4vw, 4rem) clamp(2rem, 4vw, 3.5rem)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div className="intro-body" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
            {['기획', '촬영', '편집', '연출'].map((t) => (
              <span key={t} className="hash-tag">
                <span className="hash-sign">#</span>
                {t}
              </span>
            ))}
          </div>
          <p
            className="intro-stats"
            style={{
              textAlign: 'right',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.25rem)',
              lineHeight: 1.85,
              color: 'var(--on-crimson-soft)',
              maxWidth: '36ch',
              marginLeft: 'auto',
            }}
          >
            하나의 아이디어가 완성된 영상이 될 때까지,
            <br />
            어떤 상황에서도 끝까지 책임지는
            <br />
            영상 콘텐츠 제작자{' '}
            <span style={{ color: 'var(--on-crimson)', fontWeight: 600 }}>{name}</span>입니다.
          </p>
        </div>
      </div>

      {/* stats strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {([
          [String(videoCount), 'Works'],
          ['3+', 'Years'],
          ['Seoul', 'Based in'],
        ] as const).map(([value, label], i) => (
          <div
            key={label}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
            }}
          >
            <p
              style={{
                fontFamily: displayFont,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1,
                color: i === 0 ? 'var(--accent)' : 'var(--foreground)',
                letterSpacing: '0',
              }}
            >
              {value}
            </p>
            <p
              style={{
                fontSize: 'var(--text-label, 0.625rem)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '0.5rem',
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* ── 02 INTRO + floating media cluster ── */}
      <div
        id="about"
        style={{
          ...sectionPad,
          scrollMarginTop: '120px',
          position: 'relative',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
          alignItems: 'center',
        }}
      >
        {/* editorial squiggle winding through the negative space */}
        <Squiggle
          variant="b"
          opacity={0.35}
          style={{
            position: 'absolute',
            top: 'clamp(-1rem, 2vw, 2rem)',
            right: '-4%',
            width: '46%',
            height: 'clamp(120px, 16vw, 200px)',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span
            className="script-accent"
            style={{ display: 'block', fontSize: 'clamp(1.5rem, 3.4vw, 2.6rem)', marginBottom: '0.4rem' }}
          >
            who I am
          </span>
          <p style={labelStyle}>About</p>
          <p
            style={{
              fontSize: 'clamp(1.35rem, 2.8vw, 2.15rem)',
              lineHeight: 1.45,
              fontWeight: 700,
              color: 'var(--foreground)',
              letterSpacing: '-0.01em',
            }}
          >
            기획부터 촬영, 편집, 음향까지
            <br />
            영상 한 편의 전 과정을 직접 챙깁니다.
          </p>
          <p
            style={{
              marginTop: '1.25rem',
              fontSize: '0.9375rem',
              lineHeight: 1.9,
              color: 'var(--muted)',
              maxWidth: '46ch',
            }}
          >
            장르를 가리지 않고 클라이언트가 전하고 싶은 이야기를 영상으로 풀어냅니다.
            인터뷰, 모션그래픽, AI, 예능, 현장 스케치까지 — 포맷에 맞춰 최적의 결과를 만듭니다.
          </p>

          {/* basic facts */}
          <dl
            style={{
              marginTop: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1.25rem 1.5rem',
            }}
          >
            {facts.map(({ dt, dd }) => (
              <div key={dt}>
                <dt style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.35rem' }}>
                  {dt}
                </dt>
                <dd style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.85 }}>
                  {dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          style={{
            position: 'relative',
            height: 'clamp(240px, 32vw, 380px)',
            overflow: 'hidden',
          }}
        >
          <MediaCluster videos={clusterVideos} />
        </div>
      </div>

      {/* ── 03 SKILLS — tool logos + techniques ── */}
      <div id="skills" style={{ ...sectionPad, scrollMarginTop: '120px', position: 'relative', overflow: 'hidden' }}>
        <Squiggle
          variant="c"
          opacity={0.28}
          style={{
            position: 'absolute',
            bottom: 'clamp(-1rem, 1vw, 1.5rem)',
            left: '-3%',
            width: '52%',
            height: 'clamp(110px, 14vw, 180px)',
            zIndex: 0,
          }}
        />
        <span
          className="script-accent"
          style={{ position: 'relative', zIndex: 1, display: 'block', fontSize: 'clamp(1.5rem, 3.4vw, 2.6rem)', marginBottom: '0.4rem' }}
        >
          what I use
        </span>
        <p style={labelStyle}>Skills &amp; Tools</p>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {toolGroups.map((group) => (
            <div key={group.label}>
              <p
                style={{
                  fontSize: 'var(--text-label, 0.625rem)',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {group.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.9rem, 2vw, 1.5rem)' }}>
                {group.items.map((item) => (
                  <ToolLogo key={item} name={item} />
                ))}
              </div>
            </div>
          ))}

          {/* techniques as text chips */}
          <div>
            <p
              style={{
                fontSize: 'var(--text-label, 0.625rem)',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: '1.25rem',
              }}
            >
              제작 역량
            </p>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(84px, 1fr))',
                gap: 'clamp(0.6rem, 1.5vw, 1rem)',
                maxWidth: '300px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {techniques.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    textAlign: 'center',
                    aspectRatio: '1',
                    borderRadius: '50%',
                    border: '1.5px solid var(--accent)',
                    color: 'var(--accent)',
                    fontSize: 'clamp(0.68rem, 1.4vw, 0.8rem)',
                    lineHeight: 1.25,
                    letterSpacing: '0.01em',
                    padding: '0.4rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
