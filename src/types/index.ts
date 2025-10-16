// ============================================
// 공통 타입 정의
// ============================================

import { ReactNode } from 'react';

// ============================================
// Layout & Navigation Types
// ============================================

export interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ============================================
// Animation Types
// ============================================

export interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface GSAPAnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

// ============================================
// Section & Feature Types
// ============================================

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  color: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
  icon?: ReactNode;
}

// ============================================
// Button & CTA Types
// ============================================

export interface ButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export interface CTAButton {
  text: string;
  href: string;
}

// ============================================
// Card Types
// ============================================

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  gradient?: string;
  className?: string;
}

// ============================================
// Category & Filter Types
// ============================================

export type Category = 'all' | 'it' | 'electrical' | 'other';

export interface CategoryConfig {
  label: string;
  value: Category;
  color: string;
  gradient: string;
}

// ============================================
// Route Types
// ============================================

export type LayoutType = 'main' | 'statistics' | 'api-explorer' | 'none';

export interface RouteConfig {
  path: string;
  component?: React.ComponentType; // ✅ optional: 중첩 라우트의 경우 component 없이 Outlet만 사용 가능
  layout?: LayoutType;
  showHeader?: boolean;
  showFooter?: boolean;
  children?: RouteConfig[]; // 중첩 라우트 지원
  index?: boolean; // 인덱스 라우트 여부
}

// ============================================
// Utility Types
// ============================================

export type ColorScheme = {
  primary: string;
  secondary: string;
  gradient: string;
  bgGradient: string;
};

export type Gradient = {
  from: string;
  to: string;
  via?: string;
};

// ============================================
// Hook Return Types
// ============================================

export interface UseScrollResult {
  scrollY: number;
  isScrollingDown: boolean;
}

export interface UseIntersectionObserverResult {
  observe: (element: Element | null) => void;
  unobserve: (element: Element | null) => void;
}

export interface UseVisibilityResult {
  elementRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}
