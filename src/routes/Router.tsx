import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import RouteWrapper from '../components/layout/RouteWrapper';
import { RouteConfig } from '../types';
import { routes } from './routeConfig';
import { statisticsRoute } from './statisticsRoutes';
import { apiExplorerRoute } from './apiExplorerRoutes';

/**
 * 재귀적으로 라우트를 렌더링하는 함수
 * 중첩 라우트를 지원
 */
const renderRoute = (route: RouteConfig, isChildRoute = false) => {
  const { path, component: Component, layout = 'none', showHeader, showFooter, children, index } = route;

  // === 1. 부모 라우트 (children이 있는 경우) ===
  if (children && children.length > 0) {
    return (
      <Route
        key={path}
        path={path}
        element={
          <RouteWrapper useLayout={layout} showHeader={showHeader} showFooter={showFooter}>
            {Component ? <Component /> : <Outlet />}
          </RouteWrapper>
        }
      >
        {/* 자식 라우트들은 RouteWrapper 없이 렌더링 (부모의 레이아웃 사용) */}
        {children.map((childRoute) => renderRoute(childRoute, true))}
      </Route>
    );
  }

  // === 2. 인덱스 라우트 (index: true) ===
  if (index) {
    if (!Component) {
      throw new Error(`Index route must have a component`);
    }
    return <Route key={`${path}-index`} index element={<Component />} />;
  }

  // === 3. 자식 라우트 (부모의 레이아웃을 그대로 사용) ===
  if (isChildRoute) {
    if (!Component) {
      throw new Error(`Child route must have a component`);
    }
    return <Route key={path} path={path} element={<Component />} />;
  }

  // === 4. 일반 최상위 라우트 - RouteWrapper 적용 ===
  if (!Component) {
    throw new Error(`Route must have a component`);
  }
  
  return (
    <Route
      key={path}
      path={path}
      element={
        <RouteWrapper useLayout={layout} showHeader={showHeader} showFooter={showFooter}>
          <Component />
        </RouteWrapper>
      }
    />
  );
};

/**
 * 라우트 렌더러 컴포넌트
 */
const AppRoutes = () => {
  // 모든 라우트를 통합
  const allRoutes = [...routes, statisticsRoute, apiExplorerRoute];

  return (
    <Routes>
      {allRoutes.map((route) => renderRoute(route))}
    </Routes>
  );
};

/**
 * 메인 라우터 컴포넌트
 * routeConfig에서 설정된 모든 라우트를 렌더링
 */
const Router = ({ basename }: { basename: string }) => {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Router;