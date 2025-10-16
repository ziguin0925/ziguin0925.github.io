import { ColorScheme, Category } from '../types';

/**
 * 카테고리에 따른 색상 스킴 반환
 * @param category - 카테고리
 * @returns ColorScheme 객체
 */
export const getCategoryColorScheme = (category: Category): ColorScheme => {
  const colorSchemes: Record<Category, ColorScheme> = {
    it: {
      primary: '#0064FF',
      secondary: '#00D4AA',
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    electrical: {
      primary: '#FF6B35',
      secondary: '#F59E0B',
      gradient: 'from-yellow-600 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
    },
    other: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    all: {
      primary: '#6B7280',
      secondary: '#9CA3AF',
      gradient: 'from-gray-600 to-slate-600',
      bgGradient: 'from-gray-50 to-slate-50',
    },
  };

  return colorSchemes[category] || colorSchemes.all;
};

/**
 * 그라데이션 클래스 생성
 * @param from - 시작 색상
 * @param to - 종료 색상
 * @param via - 중간 색상 (선택)
 * @returns Tailwind CSS 그라데이션 클래스
 */
export const createGradient = (from: string, to: string, via?: string): string => {
  if (via) {
    return `bg-gradient-to-r from-${from} via-${via} to-${to}`;
  }
  return `bg-gradient-to-r from-${from} to-${to}`;
};

/**
 * 텍스트 그라데이션 클래스 생성
 * @param from - 시작 색상
 * @param to - 종료 색상
 * @param via - 중간 색상 (선택)
 * @returns Tailwind CSS 텍스트 그라데이션 클래스
 */
export const createTextGradient = (from: string, to: string, via?: string): string => {
  const gradient = via 
    ? `from-${from} via-${via} to-${to}` 
    : `from-${from} to-${to}`;
  return `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`;
};

/**
 * 투명도가 있는 색상 생성
 * @param color - 기본 색상
 * @param opacity - 투명도 (0-100)
 * @returns 색상 문자열
 */
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${opacity}`;
};

/**
 * 호버 효과 클래스 생성
 * @param baseColor - 기본 색상
 * @param hoverColor - 호버 시 색상
 * @returns Tailwind CSS 클래스
 */
export const createHoverEffect = (baseColor: string, hoverColor: string): string => {
  return `${baseColor} hover:${hoverColor} transition-colors duration-300`;
};

