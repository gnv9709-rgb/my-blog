'use client';

import { useState, useEffect } from 'react';
import type { Video } from '../types';
import { CATEGORIES } from '../data/videos';
import IntroSection from './IntroSection';
import CategorySection from './CategorySection';

interface PortfolioProps {
  videos: Video[];
  name?: string;
  email?: string;
  photo?: string;
}

export default function Portfolio({
  videos,
  name = '이정석',
  email = 'gnv9709@gmail.com',
}: PortfolioProps) {
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categorySections = CATEGORIES.filter((c) => c !== 'ALL')
    .map((cat) => ({
      category: cat,
      videos: videos.filter((v) => v.category === cat),
    }))
    .filter(({ videos: catVideos }) => catVideos.length > 0);

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 4vw, 4rem)',
          background: headerSolid ? 'rgba(5,5,5,0.94)' : 'transparent',
          backdropFilter: headerSolid ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: headerSolid ? 'blur(20px)' : 'none',
          borderBottom: headerSolid ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 400ms, border-color 400ms',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: '1.0625rem',
            letterSpacing: '0.08em',
            color: 'var(--foreground)',
            textDecoration: 'none',
          }}
        >
          {name}
        </a>
        <a
          href={`mailto:${email}`}
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Contact
        </a>
      </header>

      <main>
        <IntroSection name={name} email={email} videoCount={videos.length} videos={videos} />

        {categorySections.map(({ category, videos: catVideos }, i) => (
          <CategorySection key={category} category={category} videos={catVideos} index={i} />
        ))}

        {/* Contact CTA */}
        <section
          style={{
            borderTop: '1px solid var(--border)',
            padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 4vw, 4rem)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.5625rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '2rem',
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
              marginBottom: '1.75rem',
            }}
          >
            같이 만들어볼까요?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: 'var(--muted)',
              marginBottom: '3rem',
            }}
          >
            영상 제작 협업 문의는 언제든 환영합니다.
          </p>
          <a
            href={`mailto:${email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.625rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              padding: '1.125rem 2.75rem',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              textDecoration: 'none',
              transition: 'background 300ms, border-color 300ms, color 300ms',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--accent)';
              el.style.borderColor = 'var(--accent)';
              el.style.color = '#f0ece6';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.borderColor = 'var(--border)';
              el.style.color = 'var(--foreground)';
            }}
          >
            메일 보내기
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              style={{ width: '1rem', height: '1rem' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2.5rem clamp(1.5rem, 4vw, 4rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          © {new Date().getFullYear()} {name}
        </p>
        <a
          href={`mailto:${email}`}
          style={{
            fontSize: '0.5625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {email}
        </a>
      </footer>
    </>
  );
}
