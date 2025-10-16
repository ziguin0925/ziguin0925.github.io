import React from 'react';
import { createGridLayout, cn } from '../../utils';

interface GridProps {
  children: React.ReactNode;
  cols?: [number, number, number];
  gap?: number;
  className?: string;
}

/**
 * 재사용 가능한 그리드 컴포넌트
 */
const Grid: React.FC<GridProps> = ({ 
  children, 
  cols = [1, 2, 3],
  gap = 6,
  className = '' 
}) => {
  const gridClass = createGridLayout(cols, gap);
  
  return (
    <div className={cn(gridClass, className)}>
      {children}
    </div>
  );
};

export default Grid;

