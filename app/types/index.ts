export type Category =
  | 'ALL'
  | '인터뷰 촬영'
  | '스케치 코미디'
  | '라이브 방송'
  | '숏폼'
  | '예능'
  | '모션그래픽'
  | '현장 스케치'
  | 'AI';

export interface Credit {
  role: string;
  name: string;
}

export interface Detail {
  label: string;
  value: string;
}

export interface Equipment {
  카메라?: string[];
  렌즈?: string[];
  조명?: string[];
  마이크?: string[];
  기타?: string[];
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
  equipment?: Equipment;
  credits?: Credit[];
}
