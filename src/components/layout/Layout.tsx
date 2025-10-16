import React from 'react';
import HeaderCom from './HeaderCom';
import Footer from './Footer';
import { LayoutProps } from '../../types';

/**
 * 메인 레이아웃 컴포넌트
 * Header와 Footer를 선택적으로 표시할 수 있음
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  return (
    <div className="layout-wrapper">
      {showHeader && <HeaderCom />}
      <main className="layout-content">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
