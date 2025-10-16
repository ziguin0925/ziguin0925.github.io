import React from 'react';
import { cn } from '../../utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
  centered?: boolean;
}

/**
 * 재사용 가능한 섹션 컴포넌트
 */
const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  gradient = false,
  centered = false,
}) => {
  const baseClass = 'py-20 px-6 lg:px-8';
  const gradientClass = gradient ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : '';
  const centeredClass = centered ? 'text-center' : '';

  return (
    <section
      id={id}
      className={cn(baseClass, gradientClass, centeredClass, className)}
    >
      {children}
    </section>
  );
};

export default Section;

