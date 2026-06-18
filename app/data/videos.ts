import type { Video, Category } from '../types';


export const CATEGORIES: Category[] = [
  'ALL',
  'COMMERCIAL',
  'SHORT FILM',
  'BRAND FILM',
  'DOCUMENTARY',
  'VARIETY',
  'LIVE',
  'SHORT FORM',
  'AI',
];

export const videos: Video[] = [
  // ── 인터뷰 촬영 ───────────────────────────────────────────────
  {
    id: '1',
    youtubeId: 'UBF8lMbPLXQ',
    title: '셀로디피부과 인터뷰',
    client: '셀로디피부과',
    category: 'COMMERCIAL',
    year: 2025,
    featured: true,
    details: [
      {
        label: '기여도',
        value: '기획 50%, 촬영 100%, 편집 100%',
      },
      {
        label: '사용 장비',
        value:
          'SONY A7S III 2ea, 17인치 프롬프터 KSH17, FE 24-70mm F2.8 GM II 2ea, Sachtler Ace M MS Mk II 1001M 1ea, Nanlite Alien 150C 2ea',
      },
      {
        label: '사용 툴',
        value: '프리미어 프로, 힉스필드, 포토샵',
      },
    ],
  },
  {
    id: '2',
    youtubeId: 'bgdQR1viLI4',
    title: '르블랑치과 인터뷰',
    client: '르블랑치과',
    category: 'COMMERCIAL',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '기획 100%, 촬영 100%, 편집 100%',
      },
      {
        label: '사용 장비',
        value: 'EOS 5D Mark Ⅳ 2ea, 17인치 프롬프터 KSH17, FE 24-70mm F2.8 GM II 2ea',
      },
      {
        label: '사용 툴',
        value: '프리미어 프로, 포토샵',
      },
    ],
  },

  // ── 스케치 코미디 ─────────────────────────────────────────────
  {
    id: '3',
    youtubeId: 'dSPB_YJ_Rsc',
    title: '원픽스',
    client: '원픽스',
    category: 'SHORT FILM',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '편집 100%, 음향 100%',
      },
      {
        label: '사용 장비',
        value:
          'SENNHEISER MKH-416P Boom Set, Zoom F6 Recorder, SONY UWP-D21, Nanlite Alien 300C 2ea',
      },
      {
        label: '사용 툴',
        value: '프리미어 프로',
      },
    ],
  },

  // ── 라이브 방송 ───────────────────────────────────────────────
  {
    id: '4',
    youtubeId: 'jioH_jP6w5w',
    title: '아침부터 쌉소리',
    client: '아침부터 쌉소리',
    category: 'LIVE',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '라이브 송출, 기획 50%, 조연출, 게스트 섭외, 대본 작성',
      },
    ],
  },

  // ── 숏폼 ──────────────────────────────────────────────────────
  {
    id: '5',
    externalUrl: 'https://www.instagram.com/k_father_1972',
    title: '개그맨 박성호 인스타그램',
    client: '박성호',
    category: 'SHORT FORM',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '촬영 50%, 편집 100%',
      },
      {
        label: '사용 장비',
        value: 'DJI Osmo Pocket 3 크리에이터 콤보',
      },
      {
        label: '사용 툴',
        value: '프리미어 프로',
      },
    ],
  },

  // ── 예능 ──────────────────────────────────────────────────────
  {
    id: '6',
    youtubeId: '3b_JjyXdoKs',
    title: '미친휴가',
    client: '미친휴가',
    category: 'VARIETY',
    year: 2025,
    details: [
      {
        label: '기여도',
        value:
          '기획 50%, 음향 100%, 조연출 (장소 섭외, 미스코리아 촬영 디렉팅, 소품 관리), 인트로·예고편·썸네일 제작',
      },
      {
        label: '사용 툴',
        value: '프리미어 프로, 캡컷, 힉스필드, 포토샵',
      },
    ],
  },

  // ── 모션그래픽 ────────────────────────────────────────────────
  {
    id: '7',
    youtubeId: '4eWhDzDpMB8',
    title: '법무법인 아리율 홈페이지 메인 영상',
    client: '법무법인 아리율',
    category: 'BRAND FILM',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '기획 100%, 편집 100%',
      },
      {
        label: '사용 툴',
        value: '애프터 이펙트',
      },
    ],
  },
  {
    id: '8',
    youtubeId: 'gfZj0M25BFg',
    title: '가미의원 여드름 치료 광고영상',
    client: '가미의원',
    category: 'BRAND FILM',
    year: 2025,
    details: [
      {
        label: '기여도',
        value: '기획 50%, 편집 100%',
      },
      {
        label: '사용 툴',
        value: '포토샵, 애프터 이펙트, 프리미어 프로',
      },
    ],
  },

  // ── 현장 스케치 ───────────────────────────────────────────────
  {
    id: '9',
    youtubeId: '29HZdMjsRBk',
    title: '코엑스 국제의료기기병원설비전시회 2026 스케치',
    client: '웰코멧',
    category: 'DOCUMENTARY',
    year: 2026,
    details: [
      {
        label: '기여도',
        value: '기획 100%, 촬영 100%, 편집 100%',
      },
      {
        label: '사용 장비',
        value:
          'SONY A7S III 1ea, FE 16-35mm F2.8 GM, FE 24-70mm F2.8 GM, FE 70-200mm F2.8 GM OSS, DJI RS 4 Pro Combo, DJI Mic Mini, Sachtler Ace M MS Mk II 1001M, DJI Osmo Action 6',
      },
    ],
  },

  // ── AI ────────────────────────────────────────────────────────
  {
    id: '10',
    externalUrl: 'https://www.instagram.com/reel/DV7cmt2jzA3/',
    title: '메디우스 크롬 레이저 AI 광고영상',
    client: '메디우스',
    category: 'AI',
    year: 2026,
    details: [
      {
        label: '기여도',
        value: '기획 100%, 편집 100%',
      },
      {
        label: '사용 툴',
        value: '힉스필드 나노바나나, 클링',
      },
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
      {
        label: '기여도',
        value: '기획 100%, 편집 100%',
      },
      {
        label: '사용 툴',
        value: '힉스필드, 프리미어 프로, 타입캐스트',
      },
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
      {
        label: '기여도',
        value: '기획 100%, 편집 100%',
      },
      {
        label: '사용 툴',
        value: '힉스필드, 프리미어 프로, 타입캐스트',
      },
    ],
  },
];
