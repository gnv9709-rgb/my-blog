'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Video } from '../types';
import { CATEGORIES } from '../data/videos';
import CoverSection from './CoverSection';
import IntroSection from './IntroSection';
import CategorySection from './CategorySection';
import Marquee from './decor/Marquee';
import Squiggle from './decor/Squiggle';

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
  photo,
}: PortfolioProps) {
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal: [data-reveal] elements stand up (rotateX) as they enter view.
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [videos]);

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
          background: headerSolid ? 'rgba(19, 16, 22, 0.78)' : 'transparent',
          backdropFilter: headerSolid ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: headerSolid ? 'blur(20px)' : 'none',
          borderBottom: headerSolid ? '1px solid var(--border-faint)' : '1px solid transparent',
          transition: 'background 400ms, border-color 400ms',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display-stack)',
            fontSize: '1.0625rem',
            letterSpacing: '0.08em',
            color: 'var(--cream)',
            textDecoration: 'none',
          }}
        >
          {name}
        </Link>
        <a
          href={`mailto:${email}`}
          style={{
            fontSize: '0.6875rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--on-stage-faint)',
            textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--on-stage-faint)')}
        >
          Contact
        </a>
      </header>

      <main>
        <IntroSection
          name={name}
          email={email}
          videoCount={videos.length}
          videos={videos}
          photo={photo}
        />

        {/* Editorial marquee — rhythm break between intro and works */}
        <Marquee
          items={['기획', '촬영', '편집', '연출', 'STORYTELLING', 'MOTION', 'COLOR', 'LIVE']}
          tone="violet"
          duration={34}
        />

        {/* Sticky category quick-nav — jump between categories to cut scroll time */}
        <nav
          aria-label="영상 카테고리"
          style={{
            position: 'sticky',
            top: '64px',
            zIndex: 30,
            background: 'rgba(19, 16, 22, 0.78)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid var(--border-faint)',
            borderBottom: '1px solid var(--border-faint)',
          }}
        >
          <div
            className="scrollbar-none"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 2.5vw, 2.25rem)',
              overflowX: 'auto',
              padding: '0.85rem clamp(1.5rem, 4vw, 4rem)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-label, 0.625rem)',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--accent-bright)',
                fontFamily: 'var(--font-geist-mono, monospace)',
                flexShrink: 0,
              }}
            >
              Works
            </span>
            {categorySections.map(({ category }, i) => (
              <a
                key={category}
                href={`#category-${i}`}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.8125rem',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  opacity: 0.75,
                  transition: 'color 200ms, opacity 200ms',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-bright)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--foreground)';
                  e.currentTarget.style.opacity = '0.75';
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </nav>

        {categorySections.map(({ category, videos: catVideos }, i) => (
          <CategorySection key={category} category={category} videos={catVideos} index={i} />
        ))}

        {/* Contact CTA */}
        <section
          id="contact"
          style={{
            position: 'relative',
            overflow: 'hidden',
            scrollMarginTop: '80px',
            borderTop: '1px solid var(--border-faint)',
            padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 4vw, 4rem)',
            textAlign: 'center',
          }}
        >
          {/* violet glow + squiggles filling the negative space */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-14%',
              left: '-6%',
              width: 'clamp(180px, 26vw, 420px)',
              height: 'clamp(180px, 26vw, 420px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
              zIndex: 0,
            }}
          />
          <Squiggle
            variant="a"
            opacity={0.3}
            style={{
              position: 'absolute',
              top: '18%',
              right: '-6%',
              width: '42%',
              height: 'clamp(90px, 12vw, 160px)',
              zIndex: 0,
            }}
          />
          <Squiggle
            variant="c"
            opacity={0.22}
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '-4%',
              width: '38%',
              height: 'clamp(80px, 10vw, 140px)',
              zIndex: 0,
            }}
          />
          <div data-reveal style={{ position: 'relative', zIndex: 1 }}>
          <span
            className="script-accent"
            style={{ display: 'block', fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '0.5rem' }}
          >
            let&rsquo;s talk
          </span>
          <p
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--accent-bright)',
              marginBottom: '2rem',
            }}
          >
            <span style={{ marginRight: '0.6em' }}>★</span>
            Contact
            <span style={{ marginLeft: '0.6em' }}>★</span>
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display-stack)',
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '0',
              color: 'var(--cream)',
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
              fontSize: '0.6875rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              padding: '1.125rem 2.75rem',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              color: 'var(--foreground)',
              textDecoration: 'none',
              transition: 'background 300ms, border-color 300ms, color 300ms, box-shadow 300ms',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--accent)';
              el.style.borderColor = 'var(--accent)';
              el.style.color = '#fff';
              el.style.boxShadow = '0 20px 50px -18px rgba(124,92,255,0.65)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.borderColor = 'var(--border)';
              el.style.color = 'var(--foreground)';
              el.style.boxShadow = 'none';
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
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--border-faint)',
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
            fontSize: '0.6875rem',
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
            fontSize: '0.6875rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bright)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {email}
        </a>
      </footer>
    </>
  );
}
