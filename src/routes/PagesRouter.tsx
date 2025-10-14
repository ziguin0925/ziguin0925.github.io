import React from "react";
import { Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ElectricalProjectPage from "../pages/projects/electrical/ElectricalProjectPage";
import SmartGridPage from "../pages/projects/electrical/SmartGridPage";
import FuturePage from "../pages/projects/future/FuturePage";
import NotFound from "../pages/NotFound";
import RouteWrapper from "../components/layout/RouteWrapper";
import StartedPage from "../pages/projects/toss/StartedPage";
import BlogPage from "../pages/projects/blog/BlogPage";
import BlogPostPage from "../pages/projects/blog/BlogPostPage";
import StatisticsPage from "../pages/projects/statistics/StatisticsPage";

// pages 폴더 기반 라우트 설정
export const pagesRoutes = [
  // Header + Footer가 필요한 pages
  { 
    path: "/about", 
    component: AboutPage, 
    layout: 'pages' as const,
    showHeader: true,
    showFooter: true
  },
  { 
    path: "/projects", 
    component: ProjectsPage, 
    layout: 'pages' as const,
    showHeader: true,
    showFooter: true
  },
  { 
    path: "/electrical/smart-grid", 
    component: SmartGridPage, 
    layout: 'pages' as const,
    showHeader: true,
    showFooter: true
  },
  
  // 블로그 페이지들 (자체 레이아웃 사용)
  { 
    path: "/blog", 
    component: BlogPage, 
    layout: 'none' as const 
  },
  { 
    path: "/blog/:id", 
    component: BlogPostPage, 
    layout: 'none' as const 
  },
  
  // 통계 대시보드 (자체 레이아웃 사용)
  { 
    path: "/statistics", 
    component: StatisticsPage, 
    layout: 'none' as const 
  },
  { 
    path: "/statistics/:section", 
    component: StatisticsPage, 
    layout: 'none' as const 
  },
  { 
    path: "*", 
    component: NotFound, 
    layout: 'pages' as const,
    showHeader: true,
    showFooter: true
  },
  
  // 레이아웃이 필요없는 pages (자체 레이아웃 포함)
  { 
    path: "/started", 
    component: StartedPage, 
    layout: 'none' as const 
  },
  { 
    path: "/future", 
    component: FuturePage, 
    layout: 'none' as const 
  },
];

// Route 엘리먼트 배열 반환
export const getPagesRoutes = () => {
  return pagesRoutes.map(({ path, component: Component, layout, showHeader, showFooter }) => (
    <Route 
      key={path}
      path={path} 
      element={
        <RouteWrapper 
          useLayout={layout}
          showHeader={showHeader}
          showFooter={showFooter}
        >
          <Component />
        </RouteWrapper>
      } 
    />
  ));
};

