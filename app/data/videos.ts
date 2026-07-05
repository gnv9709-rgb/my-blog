import type { Video, Category } from '../types';


export const CATEGORIES: Category[] = [
  'ALL',
  '인터뷰 촬영',
  '모션그래픽',
  'AI',
  '예능',
  '현장 스케치',
  '스케치 코미디',
  '숏폼',
  '라이브 방송',
];

export const videos: Video[] = [
  // ── 인터뷰 촬영 ───────────────────────────────────────────────
  {
    id: '1',
    youtubeId: 'UBF8lMbPLXQ',
    title: '엄마 말 들을걸! 엎질러진 물 여드름 흉터! 피부과 전문의가 확실히 닦아낼 방법을 알려드립니다.',
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
    title: '치과의사가 1등으로 뽑은 올리브영 칫솔 Best5 🪥 I 칫솔 유목민 다 모여라!',
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
  {
    id: '13',
    youtubeId: 'oD7up76JcR8',
    title: '골드PTT의 모든 것, 이 영상만 확인하세요!',
    client: '포워드 피부과',
    category: '인터뷰 촬영',
    year: 2025,
    details: [
      { label: '기여도', value: '촬영 50%, 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로, 포토샵' },
    ],
    equipment: {
      카메라: ['SONY A7S III ×3'],
      렌즈: ['FE 24-70mm F2.8 GM II ×2', 'FE 70-200mm F2.8 GM OSS'],
      조명: ['Aputure 300X Bi ×3'],
      마이크: ['SONY UWP-D21'],
    },
  },

  // ── 스케치 코미디 ─────────────────────────────────────────────
  {
    id: '3',
    youtubeId: 'dSPB_YJ_Rsc',
    title: '스타킹이 찢어졌다',
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
  {
    id: '16',
    youtubeId: 'fllDXukVcPw',
    title: '챗GPT',
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
  {
    id: '17',
    youtubeId: '9xsQc73xJCs',
    title: '다이어트',
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
    title: '꽈추형과 진중한(?) 꽈추 토크 시작합니다｜아침부터 쌉소리 EP.5',
    client: '아침부터 쌉소리',
    category: '라이브 방송',
    year: 2025,
    details: [
      { label: '기여도', value: '라이브 송출, 기획 50%, 조연출, 게스트 섭외, 대본 작성' },
    ],
  },

  // ── 숏폼 ──────────────────────────────────────────────────────
  // 외부 링크 영상: thumbnail 필드에 '/thumbnails/파일명.jpg' 경로를 추가하면 썸네일이 표시됩니다.
  // 스크린샷을 public/thumbnails/ 폴더에 저장하세요.
  {
    id: '5',
    externalUrl: 'https://www.instagram.com/reel/DJGn0eeyNcP/',
    // thumbnail: '/thumbnails/5.jpg',
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
    id: '15',
    youtubeId: 'UZDEoyScu2E',
    title: "[EP.01] 미스코리아 찐친들의 휴가 '美친휴가'",
    client: '미친휴가',
    category: '예능',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 50%, 음향 100%, 조연출 (장소 섭외, 미스코리아 촬영 디렉팅, 소품 관리), 인트로·예고편·썸네일 제작' },
      { label: '사용 툴', value: '프리미어 프로, 캡컷, 힉스필드, 포토샵' },
    ],
  },
  {
    id: '6',
    youtubeId: '3b_JjyXdoKs',
    title: "[EP.02] 미스코리아 찐친들의 휴가 '美친휴가'",
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
    title: '포트폴리오_법무법인 아리율 홈피영상',
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
    title: '넓어진 모공, 얼룩덜룩한 여드름 흉터 개선할 수 있을까?',
    client: '가미의원',
    category: '모션그래픽',
    year: 2025,
    details: [
      { label: '기여도', value: '기획 50%, 편집 100%' },
      { label: '사용 툴', value: '포토샵, 애프터 이펙트, 프리미어 프로' },
    ],
  },
  {
    id: '14',
    youtubeId: 'hIcbrQGzOiQ',
    title: '멍 붓기😱빨리 없애는 방법👍 피부과전문의',
    client: '엘케이 피부과',
    category: '모션그래픽',
    year: 2025,
    description: '브이빔 레이저(멍 치료, 사고로 인한 흉터 치료) 홍보영상',
    details: [
      { label: '소개', value: '브이빔 레이저(멍 치료, 사고로 인한 흉터 치료) 홍보영상' },
      { label: '기여도', value: '기획 50% (소스 제작), 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로, 포토샵' },
    ],
  },

  // ── 현장 스케치 ───────────────────────────────────────────────
  {
    id: '9',
    youtubeId: '29HZdMjsRBk',
    title: 'Wellcomet at KIMES 2026',
    client: '웰코멧',
    category: '현장 스케치',
    year: 2026,
    details: [
      { label: '기여도', value: '기획 100%, 촬영 100%, 편집 100%' },
      { label: '사용 툴', value: '프리미어 프로' },
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
    // thumbnail: '/thumbnails/10.jpg',
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
    // thumbnail: '/thumbnails/11.jpg',
    title: '자취 생활 꿀팁 릴스 #1',
    client: '개인 채널',
    category: 'AI',
    year: 2026,
    vertical: true,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '힉스필드, 프리미어 프로, 타입캐스트' },
    ],
  },
  {
    id: '12',
    externalUrl: 'https://www.instagram.com/reel/DXvAaPMz3Qm/',
    // thumbnail: '/thumbnails/12.jpg',
    title: '자취 생활 꿀팁 릴스 #2',
    client: '개인 채널',
    category: 'AI',
    year: 2026,
    vertical: true,
    details: [
      { label: '기여도', value: '기획 100%, 편집 100%' },
      { label: '사용 툴', value: '힉스필드, 프리미어 프로, 타입캐스트' },
    ],
  },
];
