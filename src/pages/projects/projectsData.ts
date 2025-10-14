/**
 * 프로젝트 데이터 관리
 * 새로운 프로젝트를 추가하거나 삭제할 때 이 파일만 수정하면 됩니다.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
  gradient: string;
  bgGradient: string;
  featured?: boolean;
  category: 'it' | 'electrical';
}

export const projectsData: Project[] = [
  // IT 프로젝트
  {
    id: 'blog',
    title: 'Tech Blog',
    description: '개발과 디자인에 대한 생각을 기록하는 미니멀 블로그. 깔끔한 타이포그래피와 심플한 레이아웃으로 콘텐츠에 집중합니다.',
    tags: ['React', 'TypeScript', 'Blog', 'Minimal Design'],
    link: '/blog',
    gradient: 'from-gray-900 to-gray-700',
    bgGradient: 'from-gray-50 to-white',
    featured: true,
    category: 'it'
  },
  {
    id: 'future',
    title: 'Future Project',
    description: '미래지향적인 인터랙티브 웹 경험. 파티클 효과와 GSAP 애니메이션으로 구현된 혁신적인 UI/UX 프로젝트입니다.',
    tags: ['React', 'GSAP', 'TypeScript', 'Interactive'],
    link: '/future',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    featured: true,
    category: 'it'
  },
  {
    id: 'toss',
    title: 'Toss Style Page',
    description: '토스 스타일의 스크롤 애니메이션 페이지. 섹션별 트랜지션과 인터랙티브한 요소들로 구성된 모던 웹 페이지입니다.',
    tags: ['React', 'Scroll Animation', 'TypeScript', 'Modern UI'],
    link: '/started',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    featured: true,
    category: 'it'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: '현대적인 UI/UX와 강력한 기능을 갖춘 전자상거래 플랫폼. 실시간 재고 관리와 결제 시스템을 통합했습니다.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/ecommerce',
    gradient: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-50 to-green-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: '팀 협업을 위한 실시간 작업 관리 애플리케이션. 드래그 앤 드롭과 실시간 동기화 기능을 제공합니다.',
    tags: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
    link: '/tasks',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Service',
    description: '자연어 처리를 활용한 지능형 챗봇 서비스. 고객 상담 자동화와 24/7 지원을 제공합니다.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    link: '/chatbot',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'mobile-app',
    title: 'Mobile Banking App',
    description: '안전하고 직관적인 모바일 뱅킹 애플리케이션. 생체 인증과 실시간 거래 내역을 지원합니다.',
    tags: ['React Native', 'TypeScript', 'Biometric', 'Encryption'],
    link: '/mobile-bank',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Dashboard',
    description: '실시간 데이터 시각화와 분석을 위한 대시보드. 다양한 차트와 필터링 기능을 제공합니다.',
    tags: ['D3.js', 'Python', 'Pandas', 'Chart.js'],
    link: '/analytics',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'statistics-dashboard',
    title: 'Statistics Dashboard',
    description: '프로젝트 통계와 분석을 위한 종합 대시보드. 다양한 차트와 실시간 데이터 시각화를 제공합니다.',
    tags: ['React', 'Recharts', 'TypeScript', 'Dashboard'],
    link: '/statistics',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    featured: true,
    category: 'it'
  },

  // 전기 프로젝트
  {
    id: 'smart-grid',
    title: 'Smart Grid System',
    description: 'IoT 센서와 AI 알고리즘을 활용한 실시간 전력 모니터링 및 최적화 시스템. 에너지 효율성을 30% 향상시켰습니다.',
    tags: ['IoT', 'PLC', 'SCADA', 'Power Analysis'],
    link: '/electrical/smart-grid',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
    featured: true,
    category: 'electrical'
  },
  {
    id: 'automation-control',
    title: 'Industrial Automation',
    description: 'PLC와 HMI를 연동한 산업용 자동화 제어 시스템. 생산 효율성을 40% 향상시키고 안전성을 극대화했습니다.',
    tags: ['PLC', 'HMI', 'Automation', 'Safety Systems'],
    link: '/electrical/automation',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    featured: true,
    category: 'electrical'
  },
  {
    id: 'led-control',
    title: 'Smart LED Control',
    description: 'DALI 프로토콜 기반의 스마트 LED 조명 제어 시스템. 에너지 절약과 사용자 편의성을 동시에 제공합니다.',
    tags: ['DALI', 'LED Control', 'Energy Saving', 'Wireless'],
    link: '/electrical/led-control',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    featured: false,
    category: 'electrical'
  },
  {
    id: 'power-monitoring',
    title: 'Power Monitoring System',
    description: '실시간 전력 품질 모니터링 및 분석 시스템. 전력 손실을 최소화하고 안정적인 전력 공급을 보장합니다.',
    tags: ['Power Quality', 'Monitoring', 'Analysis', 'Real-time'],
    link: '/electrical/power-monitoring',
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-50 to-teal-50',
    featured: false,
    category: 'electrical'
  },
  {
    id: 'motor-control',
    title: 'Variable Frequency Drive',
    description: '인버터를 활용한 모터 속도 제어 시스템. 에너지 효율성을 높이고 모터 수명을 연장합니다.',
    tags: ['VFD', 'Motor Control', 'Inverter', 'Energy Efficiency'],
    link: '/electrical/vfd',
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-50 to-pink-50',
    featured: false,
    category: 'electrical'
  },
  {
    id: 'safety-system',
    title: 'Electrical Safety System',
    description: '접지 및 누전 보호 시스템. 전기 안전을 위한 종합적인 보호 장치와 모니터링 시스템입니다.',
    tags: ['Grounding', 'Leakage Protection', 'Safety', 'Monitoring'],
    link: '/electrical/safety',
    gradient: 'from-gray-500 to-slate-500',
    bgGradient: 'from-gray-50 to-slate-50',
    featured: false,
    category: 'electrical'
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Integration',
    description: '태양광 및 풍력 발전을 통합한 하이브리드 전력 시스템. 신재생 에너지의 효율적인 활용을 위한 시스템입니다.',
    tags: ['Solar', 'Wind', 'Hybrid', 'Renewable Energy'],
    link: '/electrical/renewable',
    gradient: 'from-lime-500 to-green-500',
    bgGradient: 'from-lime-50 to-green-50',
    featured: false,
    category: 'electrical'
  }
];

// 프로젝트 통계
export const getProjectStats = () => {
  const allTags = projectsData.flatMap(p => p.tags);
  const uniqueTags = Array.from(new Set(allTags));
  
  return {
    total: projectsData.length,
    featured: projectsData.filter(p => p.featured).length,
    tags: uniqueTags.length,
    it: projectsData.filter(p => p.category === 'it').length,
    electrical: projectsData.filter(p => p.category === 'electrical').length
  };
};

// 특정 프로젝트 찾기
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(p => p.id === id);
};

// Featured 프로젝트만 가져오기
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(p => p.featured);
};

// 카테고리별 프로젝트 가져오기
export const getProjectsByCategory = (category: 'it' | 'electrical' | 'all'): Project[] => {
  if (category === 'all') {
    return projectsData;
  }
  return projectsData.filter(p => p.category === category);
};

// 페이지네이션을 위한 프로젝트 가져오기
export const getProjectsPaginated = (
  category: 'it' | 'electrical' | 'all' = 'all',
  page: number = 1,
  itemsPerPage: number = 6
) => {
  const filteredProjects = getProjectsByCategory(category);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projects = filteredProjects.slice(startIndex, endIndex);

  return {
    projects,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: filteredProjects.length,
      itemsPerPage,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};

