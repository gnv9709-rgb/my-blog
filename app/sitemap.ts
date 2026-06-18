import type { MetadataRoute } from 'next';
import { videos } from './data/videos';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export default function sitemap(): MetadataRoute.Sitemap {
  const works = videos.map((v) => ({
    url: `${baseUrl}/works/${v.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...works,
  ];
}
