import React from 'react';
import HeaderCom from './HeaderCom';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderCom />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
