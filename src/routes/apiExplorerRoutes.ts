import { RouteConfig } from '../types';
import ApiExplorerOverview from '../pages/projects/api-explorer/ApiExplorerOverview';
import UsersPage from '../pages/projects/api-explorer/UsersPage';
import PostsPage from '../pages/projects/api-explorer/PostsPage';
import AlbumsPage from '../pages/projects/api-explorer/AlbumsPage';
import TodosPage from '../pages/projects/api-explorer/TodosPage';

/**
 * API Explorer 중첩 라우트 설정
 * statisticsRoutes.ts와 동일한 구조
 * 
 * component를 생략하면 Router.tsx에서 자동으로 <Outlet />만 렌더링
 * layout: 'api-explorer'로 설정하여 ApiExplorerLayout 사용
 * 자식 라우트들은 부모의 ApiExplorerLayout 내부에서 <Outlet />을 통해 렌더링됨
 */
export const apiExplorerRoute: RouteConfig = {
  path: '/api-explorer',
  component: undefined,
  layout: 'api-explorer',
  children: [
    // 인덱스 라우트 - /api-explorer 접근 시 기본 페이지
    {
      path: '',
      component: ApiExplorerOverview,
      index: true,
    },
    // 개별 데이터 페이지들 - 모두 부모의 ApiExplorerLayout 안에서 렌더링
    {
      path: 'users',
      component: UsersPage,
    },
    {
      path: 'posts',
      component: PostsPage,
    },
    {
      path: 'albums',
      component: AlbumsPage,
    },
    {
      path: 'todos',
      component: TodosPage,
    },
  ],
};

