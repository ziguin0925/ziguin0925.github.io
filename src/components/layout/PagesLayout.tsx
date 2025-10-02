import React from 'react';
import HeaderCom from './HeaderCom';
import Footer from './Footer';

interface PagesLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

/**
 * pages 폴더의 페이지들을 위한 레이아웃
 * Header/Footer를 선택적으로 표시할 수 있음
 */
const PagesLayout: React.FC<PagesLayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  return (
    <div className="pages-layout">
      {showHeader && <HeaderCom />}
      <main className="pages-content">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PagesLayout;

