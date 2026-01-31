export interface Document {
  title: string;
  url: string;
  type: 'pdf' | 'pptx';
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  icon: string;
  imagesDir?: string[]; // Folders to scan images from (relative to public/images)
  images?: string[]; // Specific images
  documents?: Document[];
  video?: string;
  stats?: { label: string; value: string; sub: string }[];
  content?: string; // Additional text content
}

export const activities: Activity[] = [
  {
    id: 'gimhae-youth-research',
    title: '김해시 청년인구 연구',
    description: '지소멸 위기에 대응하기 위한 김해시 청년 인구 현황 분석 및 정책 제언 연구 활동입니다.',
    thumbnail: '/images/social/gimhae/research_01.webp',
    icon: '📊',
    images: [
      '/images/social/gimhae/research_01.webp',
      '/images/social/gimhae/research_02.webp',
      '/images/social/gimhae/research_03.webp',
      '/images/social/gimhae/research_04.webp',
      '/images/social/gimhae/research_05.webp',
      '/images/social/gimhae/research_06.webp',
      '/images/social/gimhae/research_07.webp',
      '/images/social/gimhae/research_08.webp',
      '/images/social/gimhae/research_09.webp',
      '/images/social/gimhae/research_10.webp',
      '/images/social/gimhae/research_11.webp',
      '/images/social/gimhae/research_12.webp',
      '/images/social/gimhae/research_13.webp',
      '/images/social/gimhae/research_14.webp',
    ],
    documents: [
      { title: '김해시 청년인구 연구 슬라이드 (착수 보고회)', url: '/documents/social/gimhae/김해시_청년인구_연구_슬라이드착수 보고회.pptx', type: 'pptx' },
      { title: '모아 협동조합 활동 보고', url: '/documents/social/gimhae/모아.pdf', type: 'pdf' },
      { title: '지역 소멸 대책 연구회', url: '/documents/social/gimhae/지역 소멸 대책 연구회.pdf', type: 'pdf' },
      { title: '쇠퇴위험지역 분석', url: '/documents/social/gimhae/쇠퇴위험지역.pdf', type: 'pdf' },
      { title: '모아협동조합 제주편', url: '/documents/social/gimhae/모아협동조합 제주편.pdf', type: 'pdf' },
    ],
    video: '/videos/social/gimhae/research_report.mp4',
    content: `김해시 청년 인구 유출 문제의 심각성을 인지하고, 이를 해결하기 위한 실질적인 방안을 모색합니다.
    데이터 기반의 현황 분석과 청년들의 목소리를 담은 정책 제언을 통해
    청년이 머물고 싶은 김해를 만드는 데 기여하고자 합니다.`
  },
  {
    id: 'welfare-foundation-agreement',
    title: '김해시복지재단 협약식',
    description: '김해시복지재단과 업무 협약을 체결하고, 지역 사회 복지 증진을 위한 다양한 협력 사업을 추진합니다.',
    thumbnail: '/images/social/agreement/agreement_03.webp',
    icon: '🤝',
    images: Array.from({ length: 29 }, (_, i) => `/images/social/agreement/agreement_${String(i + 1).padStart(2, '0')}.webp`),
    content: `(재)김해시복지재단과 모아 청년 협동조합이 업무 협약을 맺었습니다.
    이번 협약을 통해 양 기관은 지역 내 취약계층 발굴 및 지원, 주거 환경 개선 사업,
    그리고 청년들의 지역 사회 참여 확대를 위해 긴밀히 협력해 나갈 것입니다.
    지역 사회의 든든한 동반자로서 따뜻한 나눔을 실천하겠습니다.`
  },
  {
    id: 'residential-improvement',
    title: '주거환경 개선사업',
    description: '취약계층의 주거 환경을 개선하여 삶의 질을 높입니다. 도배, 장판 교체, 누수 수리 등 실질적인 도움을 제공합니다.',
    thumbnail: '/images/social/social_logo.webp',
    icon: '🏠',
    imagesDir: ['finished', 'working'],
    content: `도배가 필요한 어르신 댁, 비가 새는 지붕. 혼자서는 엄두가 나지 않던 일들을 전문가들이 함께 해결해 드립니다.
    땀 흘려 고친 집에서 편안히 쉬실 이웃의 모습을 생각하며 작업합니다.
    우리는 대단한 일을 하는 것이 아니라, 우리 이웃에게 당장 필요한 일을 합니다.`
  },
  {
    id: 'yellow-carpet-restoration',
    title: '관동초등학교 옐로카펫 보수',
    description: '김해시 장유3동 관동초등학교 어린이보호구역 내 옐로카펫 보수 및 율하천 환경 정화 활동을 진행했습니다.',
    thumbnail: '/images/social/yellow-carpet/yellow_01.webp',
    icon: '🚸',
    images: Array.from({ length: 81 }, (_, i) => `/images/social/yellow-carpet/yellow_${String(i + 1).padStart(2, '0')}.webp`),
    content: `김해시 장유3동 관동초등학교 어린이보호구역에 있는 옐로카펫 색상이 많이 바래고 벗겨져서 눈에 잘 띄지 않는 상태였습니다.
    이것을 새롭게 페인트 칠 해서 새것처럼 보여지도록 한 활동입니다.
    그리고 옐로카펫 작업 끝난 후 인근 율하천 쓰레기 줍는 활동도 했습니다.`
  }
];
