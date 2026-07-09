import { videos } from '../../data/videos';
import { notFound } from 'next/navigation';
import WorkDetail from './WorkDetail';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const video = videos.find((v) => v.id === id);
  return {
    title: video ? `${video.title} — 이정석` : '이정석 — 영상 콘텐츠 제작자',
    description: video
      ? `${video.client ?? ''} · ${video.category}`
      : '',
  };
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const index = videos.findIndex((v) => v.id === id);
  if (index === -1) notFound();

  const video = videos[index];
  const prev = index > 0 ? videos[index - 1] : null;
  const next = index < videos.length - 1 ? videos[index + 1] : null;

  return <WorkDetail video={video} prev={prev} next={next} />;
}
