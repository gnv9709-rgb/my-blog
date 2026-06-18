import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
