// 공통 타입 정의
export interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
