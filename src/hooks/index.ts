// Hooks 중앙 Export
export { useScroll, useIntersectionObserver, useVisibility } from './useScroll';
export { 
  useFadeIn, 
  useScaleAnimation,
  useMultipleAnimations 
} from './useGSAPAnimation';

// useScrollAnimation은 useGSAPAnimation에서 이미 export됨
export { useScrollAnimation } from './useGSAPAnimation';

// Legacy exports (이전 버전 호환성)
export { useVisibility as useScrollVisibility } from './useScroll';

