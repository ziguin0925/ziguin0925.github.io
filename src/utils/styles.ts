/**
 * 클래스명을 조건부로 결합하는 유틸리티
 * @param classes - 클래스명 배열 (false, null, undefined는 무시)
 * @returns 결합된 클래스명 문자열
 */
export const cn = (...classes: (string | boolean | null | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * 카드 스타일 생성
 * @param variant - 카드 변형 타입
 * @returns Tailwind CSS 클래스
 */
export const createCardStyle = (
  variant: 'default' | 'hover' | 'glass' = 'default'
): string => {
  const baseStyle = 'rounded-2xl p-6 border transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-gray-200 shadow-md hover:shadow-lg',
    hover: 'bg-white border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2',
    glass: 'bg-white/80 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-xl',
  };

  return `${baseStyle} ${variants[variant]}`;
};

/**
 * 버튼 스타일 생성
 * @param variant - 버튼 변형 타입
 * @param size - 버튼 크기
 * @returns Tailwind CSS 클래스
 */
export const createButtonStyle = (
  variant: 'primary' | 'secondary' | 'outline' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md'
): string => {
  const baseStyle = 'font-semibold rounded-full transition-all duration-300 hover:scale-105';
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/25',
    secondary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25',
    outline: 'border-2 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white',
  };

  return cn(baseStyle, sizes[size], variants[variant]);
};

/**
 * 반응형 텍스트 크기 생성
 * @param minSize - 최소 크기 (rem)
 * @param maxSize - 최대 크기 (rem)
 * @param viewport - 뷰포트 단위 (vw)
 * @returns CSS clamp 문자열
 */
export const responsiveText = (
  minSize: number,
  maxSize: number,
  viewport: number = 5
): { fontSize: string } => {
  return {
    fontSize: `clamp(${minSize}rem, ${viewport}vw, ${maxSize}rem)`,
  };
};

/**
 * 컨테이너 최대 너비 클래스
 * @param size - 크기
 * @returns Tailwind CSS 클래스
 */
export const containerMaxWidth = (
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'lg'
): string => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return `${sizes[size]} mx-auto px-6`;
};

/**
 * 그리드 레이아웃 클래스 생성
 * @param cols - 컬럼 수 (모바일, 태블릿, 데스크톱)
 * @param gap - 간격
 * @returns Tailwind CSS 클래스
 */
export const createGridLayout = (
  cols: [number, number, number] = [1, 2, 3],
  gap: number = 6
): string => {
  const [mobile, tablet, desktop] = cols;
  return `grid grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop} gap-${gap}`;
};

