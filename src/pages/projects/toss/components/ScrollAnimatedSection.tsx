import React from 'react';
import { useScrollVisibility } from '../../../../hooks';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  animationType?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  delay?: number;
  className?: string;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  animationType = 'fade-in',
  delay = 0,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollVisibility();

  const getAnimationClass = () => {
    const baseClass = `scroll-${animationType}`;
    return isVisible ? `${baseClass} visible` : baseClass;
  };

  const getDelayClass = () => {
    if (delay === 0) return '';
    const delayMap: { [key: number]: string } = {
      1: 'stagger-1',
      2: 'stagger-2', 
      3: 'stagger-3',
      4: 'stagger-4',
      5: 'stagger-5'
    };
    return delayMap[delay] || '';
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
      style={{ transitionDelay: delay > 5 ? `${delay * 0.1}s` : undefined }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;
