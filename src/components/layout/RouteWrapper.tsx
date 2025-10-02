import React from 'react';
import Layout from './Layout';
import PagesLayout from './PagesLayout';

interface RouteWrapperProps {
  children: React.ReactNode;
  useLayout?: boolean | 'main' | 'pages' | 'none';
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * 라우트별 레이아웃 래퍼
 * @param useLayout - 'main': 기본 레이아웃, 'pages': 페이지 레이아웃, 'none' 또는 false: 레이아웃 없음
 * @param showHeader - PagesLayout 사용 시 헤더 표시 여부 (기본: true)
 * @param showFooter - PagesLayout 사용 시 푸터 표시 여부 (기본: true)
 */
const RouteWrapper: React.FC<RouteWrapperProps> = ({ 
  children, 
  useLayout = 'main',
  showHeader = true,
  showFooter = true
}) => {
  // 기본 레이아웃 (components 기반 페이지용)
  if (useLayout === true || useLayout === 'main') {
    return <Layout>{children}</Layout>;
  }
  
  // pages 폴더 전용 레이아웃
  if (useLayout === 'pages') {
    return (
      <PagesLayout showHeader={showHeader} showFooter={showFooter}>
        {children}
      </PagesLayout>
    );
  }
  
  // 레이아웃 없음
  return <>{children}</>;
};

export default RouteWrapper;
