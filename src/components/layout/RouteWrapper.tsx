import React from 'react';
import Layout from './Layout';
import StatisticsLayout from './StatisticsLayout';
import ApiExplorerLayout from './ApiExplorerLayout';
import { LayoutType } from '../../types';

interface RouteWrapperProps {
  children: React.ReactNode;
  useLayout?: LayoutType | boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * 라우트별 레이아웃 래퍼
 * @param useLayout - 레이아웃 타입
 *   - 'main': 메인 레이아웃 (Header + Footer)
 *   - 'statistics': 통계 대시보드 레이아웃
 *   - 'api-explorer': API Explorer 레이아웃
 *   - 'none': 레이아웃 없음
 * @param showHeader - 헤더 표시 여부 (기본: true)
 * @param showFooter - 푸터 표시 여부 (기본: true)
 */
const RouteWrapper: React.FC<RouteWrapperProps> = ({ 
  children, 
  useLayout = 'main',
  showHeader = true,
  showFooter = true
}) => {
  // 메인 레이아웃 (Header + Footer)
  if (useLayout === 'main') {
    return (
      <Layout showHeader={showHeader} showFooter={showFooter}>
        {children}
      </Layout>
    );
  }
  
  // 통계 대시보드 레이아웃
  if (useLayout === 'statistics') {
    return <StatisticsLayout>{children}</StatisticsLayout>;
  }
  
  // API Explorer 레이아웃
  if (useLayout === 'api-explorer') {
    return <ApiExplorerLayout>{children}</ApiExplorerLayout>;
  }
  
  // 레이아웃 없음
  return <>{children}</>;
};

export default RouteWrapper;
