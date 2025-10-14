import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // 실제 페이지가 변경된 경우에만 스크롤을 최상단으로 이동
    // 쿼리 파라미터나 해시만 변경된 경우는 무시
    const isPageChange = prevPathnameRef.current !== pathname;
    
    if (isPageChange) {
      // 페이지 이동 시 스크롤을 최상단으로 이동
      window.scrollTo(0, 0);
      
      // 추가적인 스크롤 리셋 (GitHub Pages에서 더 안정적)
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // 약간의 지연 후 다시 한번 확인
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
    
    // 현재 경로를 저장
    prevPathnameRef.current = pathname;
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
