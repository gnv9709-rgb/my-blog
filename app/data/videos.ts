import type { Video, Category } from '../types';


export const CATEGORIES: Category[] = [
  'ALL',
  '인터뷰 촬영',
  '스케치 코미디',
  '라이브 방송',
  '숏폼',
  '예능',
  '모션그래픽',
  '현장 스케치',
  'AI',
];

export const videos: Video[] = [
  // ── 인터뷰 촬영 ───────────────────────────────────────────────
  {
    id: '1',
    youtubeId: 'UBF8lMbPLXQ',
    title: '셀로디피부과 인터뷰',
    client: '셀로디피부과',
    category: '인터뷰 촬영',
    year: 2025,
    featured: true,
    details: [
      { label: '기여도', value: '기획 50%, 촬영 100%, 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로, 힉스필드, 포토샵' },
    ],
    equipment: {
      카메라: ['SONY A7S III ×2'],
      렌즈: ['FE 24-70mm F2.8 GM II ×2'],
      조명: ['Nanlite Alien 150C ×2'],
      기타: ['17인치 프롬프터 KSH17', 'Sachtler Ace M MS Mk II 1001M'],
    },
  },
  {
    id: '2',
    youtubeId: 'bgdQR1viLI4',
    title: '르블랑치과 인터뷰',
    client: '르블랑치과',
    category: '인터뷰 촬영',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 100%, 촬영 100%, 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로, 포토샵' },
    ],
    equipment: {
      카메라: ['EOS 5D Mark Ⅳ ×2'],
      렌즈: ['FE 24-70mm F2.8 GM II ×2'],
      기타: ['17인치 프롬프터 KSH17'],
    },
  },

  // ── 스케치 코미디 ─────────────────────────────────────────────
  {
    id: '3',
    youtubeId: 'dSPB_YJ_Rsc',
    title: '원픽스',
    client: '원픽스',
    category: '스케치 코미디',
    year: 2025,
    details: [
      { label: '기여도', value: '편집 100%, 음향 100%' },
      { label: '사용 툴', value: '프리미어 프로' },
    ],
    equipment: {
      조명: ['Nanlite Alien 300C ×2'],
      마이크: ['SENNHEISER MKH-416P Boom Set', 'SONY UWP-D21'],
      기타: ['Zoom F6 Recorder'],
    },
  },

  // ── 라이브 방송 ───────────────────────────────────────────────
  {
    id: '4',
    youtubeId: 'jioH_jP6w5w',
    title: '아침부터 쌉소리',
    client: '아침부터 쌉소리',
    category: '라이브 방송',
    year: 2025,
    details: [
      { label: '기여도', value: '라이브 송출, 기획 50%, 조연출, 게스트 섭외, 대본 작성' },
    ],
  },

  // ── 숏폼 ──────────────────────────────────────────────────────
  {
    id: '5',
    externalUrl: 'https://www.instagram.com/k_father_1972',
    title: '개그맨 박성호 인스타그램',
    client: '박성호',
    category: '숏폼',
    year: 2025,
    vertical: true,
    details: [
      { label: '기여도', value: '촬영 50%, 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로' },
    ],
    equipment: {
      카메라: ['DJI Osmo Pocket 3 크리에이터 콤보'],
    },
  },

  // ── 예능 ──────────────────────────────────────────────────────
  {
    id: '6',
    youtubeId: '3b_JjyXdoKs',
    title: '미친휴가',
    client: '미친휴가',
    category: '예능',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 50%, 음향 100%, 조연출 (장소 섭외, 미스코리아 촬영 디렉팅, 소품 관리), 인트로·예고편·썸네일 제작' },
      { label: '사용 툴', value: '프리미어 프로, 캡컷, 힉스필드, 포토샵' },
    ],
  },

  // ── 모션그래픽 ────────────────────────────────────────────────
  {
    id: '7',
    youtubeId: '4eWhDzDpMB8',
    title: '법무법인 아리율 홈페이지 메인 영상',
    client: '법무법인 아리율',
    category: '모션그래픽',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '애프터 이펙트' },
    ],
  },
  {
    id: '8',
    youtubeId: 'gfZj0M25BFg',
    title: '가미의원 여드름 치료 광고영상',
    client: '가미의원',
    category: '모션그래픽',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 50%, 편집 100%' },
      { label: '사용 툴', value: '포토샵, 애프터 이펙트, 프리미어 프로' },
    ],
  },

  // ── 현장 스케치 ───────────────────────────────────────────────
  {
    id: '9',
    youtubeId: '29HZdMjsRBk',
    title: '코엑스 국제의료기기병원설비전시회 2026 스케치',
    client: '웰코멧',
    category: '현장 스케치',
    year: 2026,
    details: [
      { label: '기여도', value: '기획 100%, 촬영 100%, 편집 100%' },
    ],
    equipment: {
      카메라: ['SONY A7S III', 'DJI Osmo Action 6'],
      렌즈: ['FE 16-35mm F2.8 GM', 'FE 24-70mm F2.8 GM', 'FE 70-200mm F2.8 GM OSS'],
      마이크: ['DJI Mic Mini'],
      기타: ['DJI RS 4 Pro Combo', 'Sachtler Ace M MS Mk II 1001M'],
    },
  },

  // ── AI ────────────────────────────────────────────────────────
  {
    id: '10',
    externalUrl: 'https://www.instagram.com/reel/DV7cmt2jzA3/',
    title: '메디우스 크롬 레이저 AI 광고영상',
    client: '메디우스',
    category: 'AI',
    year: 2026,
    vertical: true,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '힉스필드 나노바나나, 클링' },
    ],
  },
  {
    id: '11',
    externalUrl: 'https://www.instagram.com/reel/DX3XtBzz38z/',
    title: '자취 생활 꿀팁 릴스 #1',
    client: '개인 채널',
    category: 'AI',
    year: 2026,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '힉스필드, 프리미어 프로, 타입캐스트' },
    ],
  },
  {
    id: '12',
    externalUrl: 'https://www.instagram.com/reel/DXvAaPMz3Qm/',
    title: '자취 생활 꿀팁 릴스 #2',
    client: '개인 채널',
    category: 'AI',
    year: 2026,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '힉스필드, 프리미어 프로, 타입캐스트' },
    ],
  },
];
