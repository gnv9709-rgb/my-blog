export type Category =
  | 'ALL'
  | 'COMMERCIAL'
  | 'MUSIC VIDEO'
  | 'SHORT FILM'
  | 'BRAND FILM'
  | 'DOCUMENTARY';

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  client?: string;
  category: Exclude<Category, 'ALL'>;
  year: number;
  featured?: boolean;
  description?: string;
}
