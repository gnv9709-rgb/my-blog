import type { Metadata } from 'next';
import { Geist, Geist_Mono, Yellowtail, Anton, Black_Han_Sans, Archivo } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
// Neo-grotesque display for the PORTFOLIO wordmark / A CREATOR (cover type ref)
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});
// Brush script for editorial accents ("Hi!", "Contact" — design ref lettering)
const yellowtail = Yellowtail({
  variable: '--font-yellowtail',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
// Bold condensed display — Anton covers Latin, Black Han Sans covers Korean (per-glyph fallback)
const anton = Anton({ variable: '--font-anton', subsets: ['latin'], weight: '400' });
const blackHanSans = Black_Han_Sans({
  variable: '--font-black-han',
  subsets: ['latin'],
  weight: '400',
  preload: false,
  display: 'swap',
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '이정석 — 영상 콘텐츠 제작자',
    template: '%s — 이정석',
  },
  description:
    '기획부터 촬영, 편집, 음향까지 영상 제작의 전 과정을 담당하는 영상 콘텐츠 제작자 이정석의 포트폴리오.',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '이정석 포트폴리오',
    title: '이정석 — 영상 콘텐츠 제작자',
    description:
      '기획부터 촬영, 편집, 음향까지 영상 제작의 전 과정을 담당하는 영상 콘텐츠 제작자 이정석의 포트폴리오.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '이정석 — 영상 콘텐츠 제작자',
    description:
      '기획부터 촬영, 편집, 음향까지 영상 제작의 전 과정을 담당하는 영상 콘텐츠 제작자 이정석의 포트폴리오.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${yellowtail.variable} ${anton.variable} ${blackHanSans.variable} ${archivo.variable} h-full`}
    >
      <head>
        {/* Pretendard variable (Korean-optimized grotesque) — category headings */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
