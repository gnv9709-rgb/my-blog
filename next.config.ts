import type { NextConfig } from 'next';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const nextConfig: NextConfig = {
  adapterPath: require.resolve('@vercel/next/dist/adapter'),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
};

export default nextConfig;
