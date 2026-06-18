export type Category =
  | 'ALL'
  | 'COMMERCIAL'
  | 'MUSIC VIDEO'
  | 'SHORT FILM'
  | 'BRAND FILM'
  | 'DOCUMENTARY'
  | 'VARIETY'
  | 'LIVE'
  | 'SHORT FORM'
  | 'AI';

export interface Credit {
  role: string;
  name: string;
}

export interface Detail {
  label: string;
  value: string;
}

export interface Video {
  id: string;
  youtubeId?: string;
  externalUrl?: string;
  title: string;
  client?: string;
  category: Exclude<Category, 'ALL'>;
  year: number;
  featured?: boolean;
  description?: string;
  details?: Detail[];
  credits?: Credit[];
}
