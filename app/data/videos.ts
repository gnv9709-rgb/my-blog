import type { Video, Category } from '../types';

export const CATEGORIES: Category[] = [
  'ALL',
  'COMMERCIAL',
  'MUSIC VIDEO',
  'SHORT FILM',
  'BRAND FILM',
  'DOCUMENTARY',
];

export const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'UBF8lMbPLXQ',
    title: 'Film 01',
    category: 'COMMERCIAL',
    year: 2024,
    featured: true,
  },
  {
    id: '2',
    youtubeId: 'dSPB_YJ_Rsc',
    title: 'Film 02',
    category: 'COMMERCIAL',
    year: 2024,
  },
  {
    id: '3',
    youtubeId: '3b_JjyXdoKs',
    title: 'Film 03',
    category: 'MUSIC VIDEO',
    year: 2024,
  },
  {
    id: '4',
    externalUrl:
      'https://mybox.naver.com/share/list?shareKey=MiKVGW-oraLERChqENEw-5-DYZkKpYj0wgXCFPvEDpvwXOe5Fwg9_o09D1jVeb-gOGuT8PjfU9JG8iBo2jpdFgQ%3D',
    title: 'Film 04',
    category: 'SHORT FILM',
    year: 2024,
  },
  {
    id: '5',
    youtubeId: '4eWhDzDpMB8',
    title: 'Film 05',
    category: 'BRAND FILM',
    year: 2024,
  },
];
