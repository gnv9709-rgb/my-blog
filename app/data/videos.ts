import type { Video, Category } from '../types';


export const CATEGORIES: Category[] = [
  'ALL',
  'COMMERCIAL',
  'MUSIC VIDEO',
  'SHORT FILM',
  'BRAND FILM',
  'DOCUMENTARY',
];

// 제목, 설명, 크레딧은 실제 내용으로 교체하세요.
export const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'UBF8lMbPLXQ',
    title: 'Film 01',
    client: '클라이언트명',
    category: 'COMMERCIAL',
    year: 2024,
    featured: true,
    description:
      '여기에 영상에 대한 자세한 설명을 입력하세요. 제작 배경, 연출 의도, 촬영 방식 등 이 작업에 담긴 이야기를 자유롭게 적어주세요.',
    credits: [
      { role: '감독', name: '이름' },
      { role: '촬영', name: '이름' },
      { role: '편집', name: '이름' },
      { role: '음악', name: '이름' },
    ],
  },
  {
    id: '2',
    youtubeId: 'dSPB_YJ_Rsc',
    title: 'Film 02',
    client: '클라이언트명',
    category: 'COMMERCIAL',
    year: 2024,
    description:
      '여기에 영상에 대한 자세한 설명을 입력하세요. 제작 배경, 연출 의도, 촬영 방식 등 이 작업에 담긴 이야기를 자유롭게 적어주세요.',
    credits: [
      { role: '감독', name: '이름' },
      { role: '촬영', name: '이름' },
      { role: '편집', name: '이름' },
      { role: '음악', name: '이름' },
    ],
  },
  {
    id: '3',
    youtubeId: '3b_JjyXdoKs',
    title: 'Film 03',
    category: 'MUSIC VIDEO',
    year: 2024,
    description:
      '여기에 영상에 대한 자세한 설명을 입력하세요. 제작 배경, 연출 의도, 촬영 방식 등 이 작업에 담긴 이야기를 자유롭게 적어주세요.',
    credits: [
      { role: '감독', name: '이름' },
      { role: '촬영', name: '이름' },
      { role: '편집', name: '이름' },
      { role: '아티스트', name: '이름' },
    ],
  },
  {
    id: '4',
    externalUrl:
      'https://mybox.naver.com/share/list?shareKey=MiKVGW-oraLERChqENEw-5-DYZkKpYj0wgXCFPvEDpvwXOe5Fwg9_o09D1jVeb-gOGuT8PjfU9JG8iBo2jpdFgQ%3D',
    title: 'Film 04',
    category: 'SHORT FILM',
    year: 2024,
    description:
      '여기에 영상에 대한 자세한 설명을 입력하세요. 제작 배경, 연출 의도, 촬영 방식 등 이 작업에 담긴 이야기를 자유롭게 적어주세요.',
    credits: [
      { role: '감독', name: '이름' },
      { role: '촬영', name: '이름' },
      { role: '편집', name: '이름' },
      { role: '음악', name: '이름' },
    ],
  },
  {
    id: '5',
    youtubeId: '4eWhDzDpMB8',
    title: 'Film 05',
    category: 'BRAND FILM',
    year: 2024,
    description:
      '여기에 영상에 대한 자세한 설명을 입력하세요. 제작 배경, 연출 의도, 촬영 방식 등 이 작업에 담긴 이야기를 자유롭게 적어주세요.',
    credits: [
      { role: '감독', name: '이름' },
      { role: '촬영', name: '이름' },
      { role: '편집', name: '이름' },
      { role: '음악', name: '이름' },
    ],
  },
];
