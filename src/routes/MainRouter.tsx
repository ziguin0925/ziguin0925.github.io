import React from "react";
import { Route } from "react-router-dom";

import Main from "../components/common/Main";
import { BlobCursor } from "../components/common/BlobCursor";
import RouteWrapper from "../components/layout/RouteWrapper";

// components 기반 라우트 설정 (기본 레이아웃 사용)
export const componentRoutes = [
  { path: "/", component: Main },
  { path: "/1", component: BlobCursor },
];

// Route 엘리먼트 배열 반환
export const getMainRoutes = () => {
  return componentRoutes.map(({ path, component: Component }) => (
    <Route 
      key={path}
      path={path} 
      element={
        <RouteWrapper useLayout={true}>
          <Component />
        </RouteWrapper>
      } 
    />
  ));
};
