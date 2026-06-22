import type { CSSProperties } from 'react';

interface IntroSectionProps {
  name: string;
  email: string;
  videoCount: number;
}

const careerData = [
  {
    index: '01',
    company: '마음을그리다',
    team: '영상팀 · 사원/팀원',
    role: '영상팀 PD',
    period: '2024.05 ~ 재직중',
    type: '병원 광고대행사',
    tasks: [
      '메디컬 컨텐츠 기획 및 인터뷰 영상 촬영 및 편집',
      '병원 유튜브 채널 운영 및 관리 (피부과, 치과, 성형외과 등)',
      '스케치코미디 채널 편집 및 동시녹음',
      '인터넷 라이브 방송 기획 및 송출',
    ],
    current: true,
  },
  {
    index: '02',
    company: '법무법인 아리율',
    team: '법률마케팅팀 · 주임',
    role: '광고마케팅',
    period: '2023.11 ~ 2024.03',
    type: '5개월',
    tasks: [
      '영상, 사진 촬영 및 블로그 마케팅 업무',
      '홈페이지 및 플레이스 홍보 영상 촬영 및 제작',
    ],
    current: false,
  },
  {
    index: '03',
    company: '한국바리스타자격검정협회',
    team: '디자인팀 · 사원',
    role: '사진·영상촬영',
    period: '2022.08 ~ 2023.08',
    type: '1년 1개월',
    tasks: [
      '가맹 및 직영점 시설·메뉴·인테리어 영상 촬영 및 편집',
    ],
    current: false,
  },
  {
    index: '04',
    company: '㈜세원',
    team: '생산기술보전팀 · 사원',
    role: '자동화설비 유지보수',
    period: '2018.07 ~ 2021.08',
    type: '3년 2개월',
    tasks: ['자동화 설비 유지/보수 업무'],
    current: false,
  },
];

const skillGroups = [
  {
    label: '영상 편집',
    items: ['Premiere Pro', 'After Effects', 'CapCut'],
  },
  {
    label: '디자인',
    items: ['Photoshop', 'Illustrator'],
  },
  {
    label: 'AI 툴',
    items: ['힉스필드', '클링', 'Midjourney', '클로드'],
  },
  {
    label: '촬영·제작',
    items: ['자막', '색보정', '모션그래픽', '라이브 송출'],
  },
];

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

export default function IntroSection({ name, email, videoCount }: IntroSectionProps) {
  return (
    <section aria-label="소개" style={{ background: 'var(--background)' }}>

      {/* ── 01 HERO ──────────────────────────── */}
      <div
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* meta strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
            paddingTop: 'calc(64px + clamp(1rem, 2vw, 1.5rem))',
          }}
        >
          <p style={{ fontSize: '0.5rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Portfolio
          </p>
          <p style={{ fontSize: '0.5rem', letterSpacing: '0.4em', color: 'var(--muted)', fontFamily: 'var(--font-geist-mono, monospace)' }}>
            {new Date().getFullYear()}
          </p>
        </div>

        {/* name */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '0 clamp(1rem, 2.5vw, 2.5rem)',
            position: 'relative',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-0.04em',
              bottom: '-0.1em',
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(16rem, 60vw, 72rem)',
              fontWeight: 700,
              lineHeight: 0.82,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(237,235,229,0.055)',
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
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              color: 'var(--foreground)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {name}
          </h1>
        </div>

        {/* red band — role */}
        <div
          style={{
            background: 'var(--accent)',
            padding: 'clamp(0.875rem, 1.75vw, 1.375rem) clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 2.8vw, 2.5rem)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#f0ece6',
              fontWeight: 700,
            }}
          >
            영상 콘텐츠 제작자
          </p>
        </div>

        {/* bottom info bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto',
            gap: 'clamp(1.5rem, 4vw, 5rem)',
            padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem)',
            borderTop: '1px solid var(--border)',
            alignItems: 'end',
          }}
        >
          <div>
            <p style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', lineHeight: 1.85, color: 'var(--muted)', maxWidth: '44ch', marginBottom: '1rem' }}>
              기획부터 촬영, 편집, 음향까지 영상 한 편의 전 과정을 직접 챙깁니다.
              장르를 가리지 않고 클라이언트가 전하고 싶은 이야기를 영상으로 풀어냅니다.
            </p>
            <a
              href={`mailto:${email}`}
              style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}
            >
              {email}
            </a>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 5.5vw, 5rem)', fontWeight: 500, lineHeight: 1, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
              {videoCount}
            </p>
            <p style={{ fontSize: '0.44rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.375rem' }}>Works</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(2rem, 5.5vw, 5rem)', fontWeight: 500, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.02em' }}>
              3+
            </p>
            <p style={{ fontSize: '0.44rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.375rem' }}>Years</p>
          </div>
        </div>
      </div>

      {/* ── 02 PROFILE ───────────────────────── */}
      <div
        style={{
          ...sectionPad,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(2.5rem, 5vw, 5rem)',
        }}
      >
        {/* Left: basic info */}
        <div>
          <p style={labelStyle}>About</p>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { dt: '이름', dd: '이정석' },
              { dt: '생년', dd: '1997년 (28세)' },
              { dt: '성별', dd: '남' },
              { dt: '거주지', dd: '서울 금천구' },
              { dt: '연락처', dd: email },
              { dt: '총 경력', dd: '3년 8개월' },
            ].map(({ dt, dd }) => (
              <div
                key={dt}
                style={{ display: 'grid', gridTemplateColumns: '5.5rem 1fr', gap: '0 1.25rem', alignItems: 'baseline' }}
              >
                <dt style={{ fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {dt}
                </dt>
                <dd style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.82 }}>
                  {dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: current position */}
        <div>
          <p style={labelStyle}>Current</p>
          <p
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '0.375rem',
              letterSpacing: '-0.01em',
            }}
          >
            마음을그리다
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>
            영상팀 PD
          </p>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '1.5rem' }}>
            2024.05 ~ 재직중
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            병원 광고대행사 소속 영상팀 PD로 메디컬 콘텐츠 기획부터 촬영, 편집, 라이브 방송 송출까지 영상 제작 전 과정을 담당합니다.
          </p>
        </div>
      </div>

      {/* ── 03 CAREER ────────────────────────── */}
      <div style={sectionPad}>
        <p style={labelStyle}>Career — 총 3년 8개월</p>
        <div>
          {careerData.map((c, i) => (
            <div
              key={c.index}
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr',
                gap: '0 clamp(1.25rem, 2.5vw, 2.5rem)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem) 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                alignItems: 'start',
                opacity: i >= 3 ? 0.55 : 1,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.475rem',
                  letterSpacing: '0.3em',
                  color: 'var(--muted)',
                  paddingTop: '0.3rem',
                }}
              >
                {c.index}
              </span>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.5rem 1rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.8vw, 1.25rem)',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                    }}
                  >
                    {c.company}
                  </p>
                  {c.current && (
                    <span
                      style={{
                        fontSize: '0.4375rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#f0ece6',
                        background: 'var(--accent)',
                        padding: '0.25rem 0.625rem',
                      }}
                    >
                      재직중
                    </span>
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.25rem 1rem',
                    marginBottom: '0.875rem',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.team}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--border)' }}>·</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.period}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--border)' }}>·</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.type}</span>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {c.tasks.map((task) => (
                    <li
                      key={task}
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--foreground)',
                        opacity: 0.62,
                        paddingLeft: '1rem',
                        position: 'relative',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', opacity: 1 }}>—</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 04 SKILLS ────────────────────────── */}
      <div style={sectionPad}>
        <p style={labelStyle}>Skills</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p
                style={{
                  fontSize: '0.475rem',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                }}
              >
                {group.label}
              </p>
              <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.3rem 0.75rem',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                      opacity: 0.75,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── 05 EDUCATION ─────────────────────── */}
      <div
        style={{
          ...sectionPad,
          display: 'grid',
          gridTemplateColumns: '3rem 1fr',
          gap: '0 clamp(1.25rem, 2.5vw, 2.5rem)',
          alignItems: 'start',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: '0.475rem',
            letterSpacing: '0.3em',
            color: 'var(--muted)',
            paddingTop: '0.3rem',
          }}
        >
          Edu
        </span>
        <div>
          <p style={labelStyle}>Education</p>
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.25rem)',
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '0.375rem',
            }}
          >
            춘천기계공업고등학교
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
            전문(실업)계 디지털기계과 · 2013.03 ~ 2016.02 졸업
          </p>
        </div>
      </div>

    </section>
  );
}

