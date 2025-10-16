import React from 'react';
import { containerMaxWidth, cn } from '../../utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

/**
 * 재사용 가능한 컨테이너 컴포넌트
 */
const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'lg',
  className = '' 
}) => {
  const containerClass = containerMaxWidth(size);
  
  return (
    <div className={cn(containerClass, className)}>
      {children}
    </div>
  );
};

export default Container;

