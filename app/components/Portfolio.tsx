'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Video, Category } from '../types';
import { CATEGORIES } from '../data/videos';
import Hero from './Hero';
import About from './About';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';

interface PortfolioProps {
  videos: Video[];
  name?: string;
  email?: string;
}

export default function Portfolio({
  videos,
  name = '이름',
  email = 'your@email.com',
}: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const featuredVideo = useMemo(
    () => videos.find((v) => v.featured) ?? videos[0],
    [videos],
  );

  const filteredVideos = useMemo(
    () => (activeCategory === 'ALL' ? videos : videos.filter((v) => v.category === activeCategory)),
    [videos, activeCategory],
  );

  const showHero = activeCategory === 'ALL' && featuredVideo != null;

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
  }, [activeCategory, showHero]);

  const handleVideoClick = (video: Video) => {
    if (video.externalUrl != null && video.youtubeId == null) {
      window.open(video.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      setActiveVideo(video);
    }
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
        }}
      >
        {/* Top row */}
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

        {/* Category filter strip */}
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
                onClick={() => setActiveCategory(cat)}
                className={`cat-btn shrink-0 text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${isActive ? 'active' : ''}`}
                style={{ color: isActive ? 'var(--foreground)' : 'var(--muted)' }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
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
        {/* Hero — only in ALL view */}
        {showHero && <Hero video={featuredVideo} onPlay={handleVideoClick} />}

        {/* About — only in ALL view */}
        {activeCategory === 'ALL' && <About name={name} />}

        {/* Works grid */}
        <section className="px-6 md:px-16 py-14 md:py-20">
          {/* Section label */}
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
              {activeCategory !== 'ALL' ? activeCategory : `${filteredVideos.length}편`}
            </p>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
              {filteredVideos.map((video, index) => {
                const isBentoFirst = activeCategory === 'ALL' && index === 0;
                return (
                  <div
                    key={video.id}
                    className={`reveal${isBentoFirst ? ' sm:col-span-2' : ''}`}
                    style={{ transitionDelay: `${(index % 9) * 60}ms` }}
                  >
                    <VideoCard video={video} onClick={handleVideoClick} large={isBentoFirst} />
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

      {/* Modal — YouTube only */}
      {activeVideo != null && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}
