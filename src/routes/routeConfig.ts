import { RouteConfig } from '../types';
import Main from '../components/common/Main';
import { BlobCursor } from '../components/common/BlobCursor';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/projects/ProjectsPage';
import SmartGridPage from '../pages/projects/electrical/SmartGridPage';
import FuturePage from '../pages/projects/future/FuturePage';
import NotFound from '../pages/NotFound';
import StartedPage from '../pages/projects/toss/StartedPage';
import BlogPage from '../pages/projects/blog/BlogPage';
import BlogPostPage from '../pages/projects/blog/BlogPostPage';

/**
 * 애플리케이션 메인 라우트 설정
 */
export const routes: RouteConfig[] = [
  // Main Layout을 사용하는 페이지들을 하나의 부모 라우트로 묶음
  {
    path: '/',
    component: undefined, // Outlet으로 자식 라우트 렌더링
    layout: 'main',
    showHeader: true,
    showFooter: true,
    children: [
      {
        path: '',
        component: Main,
        index: true,
      },
      {
        path: '1',
        component: BlobCursor,
      },
      {
        path: 'about',
        component: AboutPage,
      },
      {
        path: 'projects',
        component: ProjectsPage,
      },
      {
        path: 'electrical/smart-grid',
        component: SmartGridPage,
      },
    ],
  },
  // Blog 라우트 (독립 레이아웃)
  {
    path: '/blog',
    component: undefined,
    layout: 'none',
    children: [
      {
        path: '',
        component: BlogPage,
        index: true,
      },
      {
        path: ':id',
        component: BlogPostPage,
      },
    ],
  },
  // 독립적인 페이지들 (레이아웃 없음)
  {
    path: '/started',
    component: StartedPage,
    layout: 'none',
  },
  {
    path: '/future',
    component: FuturePage,
    layout: 'none',
  },
  // 404 페이지
  {
    path: '*',
    component: NotFound,
    layout: 'main',
    showHeader: true,
    showFooter: true,
  },
];

