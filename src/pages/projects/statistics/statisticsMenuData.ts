/**
 * 통계 페이지 메뉴 데이터 관리
 */

export interface StatisticsMenuItem {
  path: string;
  text: string;
  code: string;
  idx: number;
  icon: string;
}

export const statisticsMenuList: StatisticsMenuItem[] = [
  // 기본 메뉴 (idx: 0)
  {
    path: '/statistics/overview',
    text: '개요',
    code: 'STAT_001',
    idx: 0,
    icon: 'ChartBarIcon'
  },
  {
    path: '/statistics/analytics',
    text: '분석',
    code: 'STAT_002',
    idx: 0,
    icon: 'PresentationChartLineIcon'
  },
  {
    path: '/statistics/geographic',
    text: '지역별',
    code: 'STAT_003',
    idx: 0,
    icon: 'MapIcon'
  },
  {
    path: '/statistics/devices',
    text: '기기별',
    code: 'STAT_004',
    idx: 0,
    icon: 'DevicePhoneMobileIcon'
  },
  {
    path: '/statistics/projects',
    text: '프로젝트',
    code: 'STAT_005',
    idx: 0,
    icon: 'CpuChipIcon'
  },
  {
    path: '/statistics/users',
    text: '사용자',
    code: 'STAT_006',
    idx: 0,
    icon: 'UserGroupIcon'
  },
  {
    path: '/statistics/email',
    text: '이메일',
    code: 'STAT_007',
    idx: 0,
    icon: 'GlobeAltIcon'
  },
  {
    path: '/statistics/calendar',
    text: '일정',
    code: 'STAT_008',
    idx: 0,
    icon: 'BoltIcon'
  },
  
  // 작업 데이터 (idx: 1)
  {
    path: '/statistics/work-data-1',
    text: '작업 데이터 1',
    code: 'STAT_101',
    idx: 1,
    icon: 'DocumentChartBarIcon'
  },
  {
    path: '/statistics/work-data-2',
    text: '작업 데이터 2',
    code: 'STAT_102',
    idx: 1,
    icon: 'DocumentChartBarIcon'
  },
  {
    path: '/statistics/work-data-3',
    text: '작업 데이터 3',
    code: 'STAT_103',
    idx: 1,
    icon: 'DocumentChartBarIcon'
  }
];

// 메뉴 그룹별로 필터링하는 함수
export const getMenuByGroup = (idx: number): StatisticsMenuItem[] => {
  return statisticsMenuList.filter(item => item.idx === idx);
};

// 경로로 메뉴 아이템 찾기
export const getMenuItemByPath = (path: string): StatisticsMenuItem | undefined => {
  return statisticsMenuList.find(item => item.path === path);
};

// 권한 체크 함수 (필요시 확장)
export const checkMenuPermission = (code: string, userPermissions: string[] = []): boolean => {
  // 모든 메뉴에 접근 가능하도록 설정 (실제로는 권한 체크 로직 구현)
  return true;
};
