import React from 'react';
import { responsiveText, createTextGradient, cn } from '../../utils';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  className?: string;
  responsive?: boolean;
}

/**
 * 재사용 가능한 헤딩 컴포넌트
 */
const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  gradient = false,
  className = '',
  responsive = true,
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  const baseClasses = {
    1: 'text-5xl md:text-6xl lg:text-7xl font-bold',
    2: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    3: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    4: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    5: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    6: 'text-lg md:text-xl lg:text-2xl font-semibold',
  };

  const gradientClass = gradient
    ? createTextGradient('blue-600', 'purple-600', 'pink-600')
    : 'text-gray-800';

  const combinedClass = cn(baseClasses[level], gradientClass, className);

  const style = responsive
    ? {
        1: responsiveText(2, 6.5, 9),
        2: responsiveText(1.75, 5, 8),
        3: responsiveText(1.5, 4, 7),
        4: responsiveText(1.25, 3, 6),
        5: responsiveText(1, 2.5, 5),
        6: responsiveText(0.875, 2, 4),
      }[level]
    : undefined;

  return (
    <Tag className={combinedClass} style={style}>
      {children}
    </Tag>
  );
};

export default Heading;

