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
    id: 'statistics-dashboard',
    title: 'Statistics Dashboard',
    description: '프로젝트 통계와 분석을 위한 종합 대시보드. 다양한 차트와 실시간 데이터 시각화를 제공합니다.',
    tags: ['React', 'Recharts', 'TypeScript', 'Dashboard'],
    image: 'https://media.istockphoto.com/id/516180836/ko/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A6%B0-%EB%9D%BC%EC%9D%B4%EC%8A%A4-fild-%EC%A0%80%EB%85%81-%ED%95%98%EB%8A%98%EC%97%90.jpg?s=612x612&w=0&k=20&c=qzZCsyadgMeZyDCcFAjUl1bRnD4kR7iTzaVkBTZZ7PA=',
    link: '/statistics',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    featured: true,
    category: 'it'
  },
  {
    id: 'blog',
    title: 'Tech Blog',
    description: '개발과 디자인에 대한 생각을 기록하는 미니멀 블로그. 깔끔한 타이포그래피와 심플한 레이아웃으로 콘텐츠에 집중합니다.',
    tags: ['React', 'TypeScript', 'Blog', 'Minimal Design'],
    image: 'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004',
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
    image: 'https://img.pikbest.com/origin/10/45/74/29fpIkbEsTzN6.jpg!w700wp',
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
    image: 'https://www.gyeongju.go.kr/upload/content/thumb/gyimage/%EC%B2%A8%EC%84%B1%EB%8C%80%EC%9D%98%20%EC%95%84%EB%A6%84%EB%8B%A4%EC%9B%80.jpg',
    link: '/started',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    featured: true,
    category: 'it'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Dashboard',
    description: '실시간 데이터 시각화와 분석을 위한 대시보드. 다양한 차트와 필터링 기능을 제공합니다.',
    tags: ['D3.js', 'Python', 'Pandas', 'Chart.js'],
    link: '/statistics',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    featured: false,
    category: 'it'
  },
  {
    id: 'api-explorer',
    title: 'API Explorer',
    description: 'REST API를 활용한 데이터 탐색 플랫폼. JSONPlaceholder API와 연동하여 사용자, 게시글, 앨범 등의 데이터를 실시간으로 조회하고 관리할 수 있습니다.',
    tags: ['React', 'REST API', 'TypeScript', 'Data Fetching'],
    image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg',
    link: '/api-explorer',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    featured: true,
    category: 'it'
  },


  // 전기 프로젝트
  {
    id: 'smart-grid',
    title: 'Smart Grid System',
    description: 'IoT 센서와 AI 알고리즘을 활용한 실시간 전력 모니터링 및 최적화 시스템. 에너지 효율성을 30% 향상시켰습니다.',
    tags: ['IoT', 'PLC', 'SCADA', 'Power Analysis'],
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg',
    link: '/electrical/smart-grid',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
    featured: true,
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

