'use client';

import { useRef, useState, useCallback, type CSSProperties } from 'react';
import Image from 'next/image';
import type { Video } from '../types';
import ToolLogo from './ToolLogo';

interface IntroSectionProps {
  name: string;
  email: string;
  videoCount: number;
  videos?: Video[];
  /** Profile photo path under /public (page 2 layout). */
  photo?: string;
}

// Software tools shown as brand logos, in the order requested; techniques listed as text.
const toolGroups = [
  {
    label: 'Tools',
    items: [
      'Premiere Pro',
      'Photoshop',
      'After Effects',
      '캡컷',
      '힉스필드',
      '클링',
      '나노바나나',
      'Midjourney',
      'Gemini',
      'ChatGPT',
      '타입캐스트',
      '클로드',
      '안티그래비티',
    ],
  },
];
const techniques = ['기획', '촬영', '편집', '자막', '모션그래픽', '라이브 송출'];

const displayFont = 'var(--font-display-stack)';
const monoFont = 'var(--font-geist-mono, monospace)';

const labelStyle: CSSProperties = {
  fontSize: 'var(--text-label, 0.625rem)',
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: 'var(--accent-bright)',
  fontFamily: monoFont,
};

/* Floating hashtag chips staged in 3D around the hero headline.
   `low` chips sit near the bottom copy and hide on narrow screens. */
const HERO_CHIPS: { text: string; style: CSSProperties; low?: boolean }[] = [
  { text: '기획', style: { top: '16%', right: '14%', '--pz': '90px', '--rot': '-6deg', '--float-delay': '0s', '--par': 2.4 } as CSSProperties },
  { text: '촬영', style: { top: '34%', right: '5%', '--pz': '40px', '--rot': '4deg', '--float-delay': '1.4s', '--par': 1.4 } as CSSProperties },
  { text: '편집', style: { bottom: '30%', right: '20%', '--pz': '120px', '--rot': '-3deg', '--float-delay': '2.6s', '--par': 3 } as CSSProperties, low: true },
  { text: '연출', style: { bottom: '16%', right: '7%', '--pz': '60px', '--rot': '7deg', '--float-delay': '3.4s', '--par': 1.8 } as CSSProperties, low: true },
];

/** Circular rotating badge — brush-era sticker, SVG textPath. */
function SpinBadge({ size = 130 }: { size?: number }) {
  return (
    <div className="spin-badge" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="49" fill="none" stroke="var(--border)" strokeWidth="0.5" />
        <text style={{ fontSize: '10.2px', letterSpacing: '0.22em', fontFamily: monoFont, fill: 'var(--on-stage-faint)' }}>
          <textPath href="#badge-circle">VIDEO ★ CONTENT ★ CREATOR ★ 2026 ★</textPath>
        </text>
        <circle cx="50" cy="50" r="4" fill="var(--accent)" />
      </svg>
    </div>
  );
}

/** Profile photo with graceful monogram fallback until the file exists. */
function ProfilePhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          background:
            'radial-gradient(120% 120% at 20% 10%, var(--accent-deep) 0%, var(--stage) 75%)',
        }}
      >
        <span className="script-accent" style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}>
          {name[0]}
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={`${name} 프로필 사진`}
      fill
      sizes="(max-width: 900px) 90vw, 480px"
      style={{ objectFit: 'cover' }}
      onError={() => setFailed(true)}
    />
  );
}

export default function IntroSection({
  name,
  email,
  videoCount,
  photo = '/profile.jpg',
}: IntroSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  // Mouse parallax: write -0.5..0.5 into --mx/--my; layers scale by --par.
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

  const facts = [
    { dt: '이름', dd: '이정석' },
    { dt: '생년', dd: '1997년 (28세)' },
    { dt: '성별', dd: '남' },
    { dt: '거주지', dd: '서울 금천구' },
    { dt: '연락처', dd: email },
  ];

  return (
    <section aria-label="소개" style={{ background: 'var(--background)' }}>

      {/* ── 01 HERO — dark violet stage, floating 3D layers ── */}
      <div
        ref={stageRef}
        className="grain persp"
        onPointerMove={onStageMove}
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          background:
            'radial-gradient(90% 80% at 12% 0%, #241a3d 0%, var(--stage) 55%, #120e18 100%)',
        }}
      >
        {/* depth glow orbs — parallax layers */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-18%',
            left: '-10%',
            width: 'clamp(320px, 46vw, 720px)',
            height: 'clamp(320px, 46vw, 720px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,92,255,0.32) 0%, transparent 70%)',
            transform: 'translate3d(calc(var(--mx, 0) * -28px), calc(var(--my, 0) * -28px), 0)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-24%',
            right: '-12%',
            width: 'clamp(280px, 40vw, 640px)',
            height: 'clamp(280px, 40vw, 640px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,93,143,0.13) 0%, transparent 70%)',
            transform: 'translate3d(calc(var(--mx, 0) * 40px), calc(var(--my, 0) * 40px), 0)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

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
          <p style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
            Portfolio
          </p>
          <p style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.4em', color: 'var(--on-stage-faint)', fontFamily: monoFont }}>
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* headline — parallax counter-move for depth */}
        <div
          className="preserve-3d"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(1.25rem, 3vw, 2.75rem) clamp(1.5rem, 4vw, 4rem)',
            position: 'relative',
            zIndex: 2,
            transform: 'translate3d(calc(var(--mx, 0) * -12px), calc(var(--my, 0) * -8px), 0)',
          }}
        >
          <p
            className="intro-label script-accent"
            style={{
              fontSize: 'clamp(1.6rem, 3.4vw, 2.9rem)',
              marginBottom: 'clamp(0.35rem, 1.2vw, 1rem)',
              marginLeft: '0.15em',
            }}
          >
            Creative
          </p>
          <h1
            className="intro-name"
            style={{
              fontFamily: 'var(--font-archivo), system-ui, sans-serif',
              fontSize: 'clamp(2.7rem, 9.5vw, 10rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
              textTransform: 'uppercase',
              textShadow: '0 30px 60px rgba(0,0,0,0.5)',
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
              color: 'var(--on-stage)',
              maxWidth: '34ch',
            }}
          >
            who takes a story from idea to final cut,
            <br />
            and always sees it through.
          </p>

          {/* floating hashtag chips in 3D space */}
          {HERO_CHIPS.map(({ text, style, low }) => (
            <span
              key={text}
              aria-hidden="true"
              className={`float-chip glass intro-body${low ? ' hero-chip-low' : ''}`}
              style={{
                position: 'absolute',
                zIndex: 3,
                padding: '0.55rem 1rem',
                borderRadius: '999px',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9375rem)',
                color: 'var(--on-stage)',
                boxShadow: '0 18px 40px -18px rgba(0,0,0,0.7)',
                '--px': 'calc(var(--mx, 0) * var(--par, 1) * 18px)',
                ...style,
              } as CSSProperties}
            >
              <span style={{ color: 'var(--accent-bright)', marginRight: '0.3em' }}>#</span>
              {text}
            </span>
          ))}
        </div>

        {/* bottom row — scroll hint + badge (left) · korean statement (right) */}
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
          <div className="intro-body" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.5vw, 2rem)' }}>
            <span className="hero-badge">
              <SpinBadge />
            </span>
            <p
              style={{
                fontSize: 'var(--text-label, 0.625rem)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--on-stage-faint)',
                fontFamily: monoFont,
              }}
            >
              Scroll ↓
            </p>
          </div>
          <p
            className="intro-stats"
            style={{
              textAlign: 'right',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.25rem)',
              lineHeight: 1.85,
              color: 'var(--on-stage-soft)',
              maxWidth: '36ch',
              marginLeft: 'auto',
            }}
          >
            하나의 아이디어가 완성된 영상이 될 때까지,
            <br />
            어떤 상황에서도 끝까지 책임지는
            <br />
            영상 콘텐츠 제작자{' '}
            <span style={{ color: 'var(--cream)', fontWeight: 600 }}>{name}</span>입니다.
          </p>
        </div>
      </div>

      {/* stats strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border-faint)' }}>
        {([
          [String(videoCount), 'Works'],
          ['3+', 'Years'],
          ['Seoul', 'Based in'],
        ] as const).map(([value, label], i) => (
          <div
            key={label}
            data-reveal
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border-faint)',
              '--reveal-delay': `${i * 110}ms`,
            } as CSSProperties}
          >
            <p
              style={{
                fontFamily: displayFont,
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1,
                color: i === 0 ? 'var(--accent-bright)' : 'var(--cream)',
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

      {/* ── 02 ABOUT (page 2) — "Hi! I'm ___" profile spread (design ref layout) ── */}
      <div
        id="about"
        className="persp"
        style={{
          scrollMarginTop: '120px',
          borderTop: '1px solid var(--border-faint)',
          padding: 'var(--space-section) clamp(1.5rem, 4vw, 4rem)',
        }}
      >
        {/* top spread: photo + Hi! (left) · intro + contact (right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Left: giant script Hi! overlapped by profile photo */}
          <div data-reveal style={{ position: 'relative', paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
            <span
              aria-hidden="true"
              className="script-accent"
              style={{
                position: 'absolute',
                top: 0,
                left: '-0.05em',
                fontSize: 'clamp(7rem, 17vw, 14rem)',
                color: 'var(--accent)',
                zIndex: 0,
                lineHeight: 0.9,
                textShadow: '0 24px 60px rgba(124,92,255,0.35)',
              }}
            >
              Hi!
            </span>
            <div
              className="preserve-3d"
              style={{
                position: 'relative',
                zIndex: 1,
                marginLeft: 'clamp(3rem, 9vw, 7rem)',
                maxWidth: '420px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 40px 80px -32px rgba(0,0,0,0.8), 0 0 0 6px rgba(124,92,255,0.12)',
                  background: 'var(--surface)',
                }}
              >
                <ProfilePhoto src={photo} name={name} />
              </div>
              {/* floating role tag over the photo corner */}
              <span
                className="glass float-chip"
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-0.75rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--cream)',
                  fontFamily: monoFont,
                  '--float-delay': '1s',
                } as CSSProperties}
              >
                Video Creator
              </span>
            </div>
          </div>

          {/* Right: I'm 이정석! + statement + contact */}
          <div>
            <div data-reveal style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              <p
                className="script-accent"
                style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)', margin: 0, whiteSpace: 'nowrap' }}
              >
                I&rsquo;m <span style={{ color: 'var(--cream)', marginLeft: '0.32em' }}>Lee Jeong Seok</span>
              </p>
              {/* brush underline (design ref: underlined "I'm Thao!") */}
              <svg
                aria-hidden="true"
                viewBox="0 0 240 14"
                style={{ width: 'min(280px, 60%)', height: 'auto', display: 'block', marginTop: '0.4rem' }}
              >
                <path
                  d="M4 9 C 60 3, 150 3, 236 7"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
              <p
                style={{
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.8rem)',
                  lineHeight: 1.5,
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
            </div>

            {/* Contact (script heading — design ref) */}
            <div data-reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)', '--reveal-delay': '200ms' } as CSSProperties}>
              <p className="script-accent" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', marginBottom: '1rem' }}>
                Contact
              </p>
              <div style={{ display: 'grid', gap: '0.7rem' }}>
                <a
                  href={`mailto:${email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.9375rem',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      border: '1.5px solid var(--accent)',
                      color: 'var(--accent-bright)',
                      fontSize: '0.7rem',
                    }}
                  >
                    ✉
                  </span>
                  {email}
                </a>
                <p
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.9375rem',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      border: '1.5px solid var(--accent)',
                      color: 'var(--accent-bright)',
                      fontSize: '0.7rem',
                    }}
                  >
                    ⌂
                  </span>
                  서울 금천구
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom spread: 기본 정보 · 제작 역량 · Software (design ref: Education / Languages / Software) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start',
            maxWidth: '1200px',
            margin: 'clamp(4rem, 7vw, 6rem) auto 0',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border-faint)',
          }}
        >
          {/* 기본 정보 */}
          <div data-reveal>
            <p className="script-accent" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: '1.25rem' }}>
              Info
            </p>
            <dl style={{ display: 'grid', gap: '1.1rem' }}>
              {facts.map(({ dt, dd }) => (
                <div key={dt} style={{ display: 'grid', gridTemplateColumns: '5.5em 1fr', gap: '0.75rem' }}>
                  <dt style={{ fontSize: 'var(--text-label, 0.625rem)', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', alignSelf: 'baseline', paddingTop: '0.2em' }}>
                    {dt}
                  </dt>
                  <dd style={{ fontSize: '0.9375rem', color: 'var(--foreground)', opacity: 0.9, margin: 0, wordBreak: 'break-all' }}>
                    {dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 제작 역량 */}
          <div data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
            <p className="script-accent" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: '1.25rem' }}>
              Skills
            </p>
            <p style={{ ...labelStyle, marginBottom: '1.1rem' }}>제작 역량</p>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(0.75rem, 1.8vw, 1.1rem)',
                maxWidth: '340px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {techniques.map((item) => (
                <li key={item} className="skill-disc" style={{ fontWeight: 600 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Software (tool logos — unchanged assets) */}
          <div data-reveal style={{ '--reveal-delay': '240ms' } as CSSProperties}>
            <p className="script-accent" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: '1.25rem' }}>
              Software
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.8rem, 1.6vw, 1.2rem)' }}>
              {toolGroups[0].items.map((item) => (
                <ToolLogo key={item} name={item} size={44} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
