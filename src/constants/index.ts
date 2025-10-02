// 애플리케이션 상수
export const SECTIONS_DATA = [
  {
    id: 'home',
    title: '내 모든 금융 내역을 한눈에',
    subtitle: '소비',
    description: '토스에 계좌와 카드를 연결해 보세요. 계좌 잔액, 대출·투자 내역은 기본, 일자별 소비와 수입까지 한 번에 볼 수 있어요.',
    features: ['실시간 계좌 잔액 조회', '일자별 소비 패턴 분석', '대출·투자 내역 통합 관리'],
    color: '#0064FF'
  },
  {
    id: 'transfer',
    title: '간편하고 안전하게',
    subtitle: '송금',
    description: '평생 무료 송금으로 모두의 금융에 자유를. 누구에게 보내든 은행 상관 없이, 이제 토스와 함께 수수료 걱정 없이 송금하세요.',
    features: ['평생 무료 송금', '사기계좌 조회', '자동이체 예약'],
    color: '#00D4AA'
  },
  {
    id: 'loan',
    title: '여러 은행의 조건을 1분 만에',
    subtitle: '대출',
    description: '앉은 자리에서 여러 은행의 한도와 금리를 비교하고 내게 꼭 맞는 대출을 찾아보세요.',
    features: ['신용 대출', '비상금 대출', '대환 대출', '주택담보대출'],
    color: '#FF6B35'
  },
  {
    id: 'credit',
    title: '금융 생활의 첫 걸음',
    subtitle: '신용',
    description: '언제 어디서든, 원할 때 간편하게 KCB, NICE 신용점수를 한 곳에서 확인할 수 있어요.',
    features: ['내 신용점수 확인', '신용점수 올리기', '신용관리 알림', '신용관리 팁'],
    color: '#8B5CF6'
  },
  {
    id: 'investment',
    title: '투자, 모두가 할 수 있도록',
    subtitle: '투자',
    description: '이해하기 쉬운 용어, 설명이 필요 없는 직관적인 화면 구성, 송금처럼 쉬운 구매 경험',
    features: ['이해하기 쉬운 용어', '직관적인 화면 구성', '쉬운 구매 경험', '투자 판단 도움 콘텐츠'],
    color: '#F59E0B'
  },
  {
    id: 'payment',
    title: '결제는 간편하게, 할인과 적립은 두둑히',
    subtitle: '결제',
    description: '온라인과 오프라인 모두 국내는 물론, 해외에서도 토스로 간편하게 결제해요.',
    features: ['온라인/오프라인 결제', '해외 결제 지원', '쿠폰과 포인트', '토스프라임 적립'],
    color: '#EF4444'
  }
];

export const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '시작하기', href: '/started' },
  { label: '서비스', href: '/services' },
  { label: '소개', href: '/about' }
];
