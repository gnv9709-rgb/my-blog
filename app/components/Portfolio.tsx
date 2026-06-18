'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { Video, Category } from '../types';
import { CATEGORIES } from '../data/videos';
import Hero from './Hero';
import About from './About';
import VideoCard from './VideoCard';

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
  const router = useRouter();
  // 카테고리 필터 버튼 하이라이트
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  // 실제 그리드에 표시되는 카테고리 (fade 전환 후 적용)
  const [displayCategory, setDisplayCategory] = useState<Category>('ALL');
  // 그리드 fade 전환 트리거
  const [gridFading, setGridFading] = useState(false);
  // 헤더 스크롤 hide/show
  const [headerHidden, setHeaderHidden] = useState(false);

  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  // 헤더 스크롤 감지
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHeaderHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 스크롤 reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [displayCategory]);

  const featuredVideo = useMemo(
    () => videos.find((v) => v.featured) ?? videos[0],
    [videos],
  );

  const filteredVideos = useMemo(
    () =>
      displayCategory === 'ALL'
        ? videos
        : videos.filter((v) => v.category === displayCategory),
    [videos, displayCategory],
  );

  const showHero = displayCategory === 'ALL' && featuredVideo != null;

  // 카테고리 전환 — fade out → 콘텐츠 교체 → fade in
  const handleCategoryChange = (cat: Category) => {
    if (cat === displayCategory) return;
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setActiveCategory(cat);
    setGridFading(true);
    fadeTimer.current = setTimeout(() => {
      setDisplayCategory(cat);
      setGridFading(false);
    }, 180);
  };

  return (
    <>
      {/* Header */}
      <header
        className="sticky top-0 z-40"
        style={{
          background: 'rgba(12,12,12,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          transform: headerHidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 350ms var(--ease-out-expo)',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-16 h-16">
          <a
            href="/"
            className="transition-colors duration-200"
            style={{
              color: 'var(--foreground)',
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: '1.05rem',
              letterSpacing: '0.08em',
            }}
          >
            {name}
          </a>
          <a
            href={`mailto:${email}`}
            className="text-[10px] tracking-[0.25em] uppercase transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Contact
          </a>
        </div>

        <div
          className="flex items-center gap-6 px-6 md:px-16 pb-4 overflow-x-auto scrollbar-none"
          role="navigation"
          aria-label="카테고리 필터"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`cat-btn shrink-0 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${isActive ? 'active' : ''}`}
                style={{ color: isActive ? 'var(--foreground)' : 'var(--muted)' }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
                }}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      <main>
        {showHero && <Hero video={featuredVideo} onPlay={() => {}} />}

        <About name={name} />

        {/* Works grid */}
        <section className="px-6 md:px-16 py-14 md:py-20">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <p
              className="reveal text-[10px] tracking-[0.35em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              Works
            </p>
            <p
              className="reveal text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--muted)', transitionDelay: '80ms' }}
            >
              {displayCategory !== 'ALL' ? displayCategory : `${filteredVideos.length}편`}
            </p>
          </div>

          {filteredVideos.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14"
              style={{
                opacity: gridFading ? 0 : 1,
                transform: gridFading ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 180ms ease, transform 180ms ease',
              }}
            >
              {filteredVideos.map((video, index) => {
                const isBentoFirst = displayCategory === 'ALL' && index === 0;
                return (
                  <div
                    key={video.id}
                    className={`reveal${isBentoFirst ? ' sm:col-span-2' : ''}`}
                    style={{ transitionDelay: `${(index % 9) * 60}ms` }}
                  >
                    <VideoCard video={video} large={isBentoFirst} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p
              className="text-center py-24 text-[10px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              No videos in this category
            </p>
          )}
        </section>

        {/* Contact CTA */}
        <section
          className="px-6 md:px-16 py-24 md:py-32 text-center reveal"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Contact
          </p>
          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: 'var(--font-playfair, Georgia, serif)',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              color: 'var(--foreground)',
              fontWeight: 500,
            }}
          >
            같이 만들어볼까요?
          </h2>
          <p className="text-sm mb-12" style={{ color: 'var(--muted)' }}>
            영상 제작 협업 문의는 언제든 환영합니다.
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300"
            style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--accent)';
              el.style.borderColor = 'var(--accent)';
              el.style.color = '#0c0c0c';
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
              className="w-4 h-4"
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
        className="px-6 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} {name}
        </p>
        <a
          href={`mailto:${email}`}
          className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {email}
        </a>
      </footer>
    </>
  );
}
