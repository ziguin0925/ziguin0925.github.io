import { RouteConfig } from '../types';
import StatsOverview from '../pages/projects/statistics/components/StatsOverview';
import ChartSection from '../pages/projects/statistics/components/ChartSection';
import GeographicChart from '../pages/projects/statistics/components/GeographicChart';
import DeviceStats from '../pages/projects/statistics/components/DeviceStats';
import ProjectAnalytics from '../pages/projects/statistics/components/ProjectAnalytics';
import UsersPage from '../pages/projects/statistics/components/UsersPage';
import EmailPage from '../pages/projects/statistics/components/EmailPage';
import CalendarPage from '../pages/projects/statistics/components/CalendarPage';
import WorkDataPage from '../pages/projects/statistics/components/WorkDataPage';
import WorkDataCleanPage from '../pages/projects/statistics/components/WorkDataCleanPage';
import WorkDataSearchPage from '../pages/projects/statistics/components/WorkDataSearchPage';

/**
 * 통계 대시보드 중첩 라우트 설정
 * RouteConfig 타입을 사용하여 routeConfig.ts와 통일된 구조
 * 
 * component를 생략하면 Router.tsx에서 자동으로 <Outlet />만 렌더링
 * layout: 'statistics'로 설정하여 StatisticsLayout(DashboardLayout) 사용
 * 자식 라우트들은 부모의 DashboardLayout 내부에서 <Outlet />을 통해 렌더링됨
 */
export const statisticsRoute: RouteConfig = {
  path: '/statistics',
  component: undefined,
  layout: 'statistics',
  children: [
    // 인덱스 라우트 - /statistics 접근 시 기본 페이지
    {
      path: '',
      component: StatsOverview,
      index: true,
    },
    // 개별 통계 페이지들 - 모두 부모의 DashboardLayout 안에서 렌더링
    {
      path: 'overview',
      component: StatsOverview,
    },
    {
      path: 'analytics',
      component: ChartSection,
    },
    {
      path: 'geographic',
      component: GeographicChart,
    },
    {
      path: 'devices',
      component: DeviceStats,
    },
    {
      path: 'projects',
      component: ProjectAnalytics,
    },
    {
      path: 'users',
      component: UsersPage,
    },
    {
      path: 'email',
      component: EmailPage,
    },
    {
      path: 'calendar',
      component: CalendarPage,
    },
    {
      path: 'work-data-1',
      component: WorkDataPage,
    },
    {
      path: 'work-data-2',
      component: WorkDataCleanPage,
    },
    {
      path: 'work-data-3',
      component: WorkDataSearchPage,
    },
  ],
};

