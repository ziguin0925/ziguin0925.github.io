// ============================================
// 애플리케이션 레벨 상수
// ============================================

export const APP_NAME = 'JeongRyongWoo';
export const APP_VERSION = '1.0.0';

// 환경 변수
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const BASE_URL = process.env.REACT_APP_PUBLIC_URL || '';

// 로컬 스토리지 키
export const STORAGE_KEYS = {
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  SCROLL_POSITION: 'scroll_position',
} as const;

// 세션 스토리지 키
export const SESSION_KEYS = {
  SCROLL_POSITION: 'session_scroll',
  FILTER_STATE: 'filter_state',
} as const;

// 타임아웃 설정 (ms)
export const TIMEOUTS = {
  ANIMATION: 300,
  DEBOUNCE: 300,
  THROTTLE: 100,
  AUTO_SLIDE: 4000,
} as const;

// 브레이크포인트
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Z-index 레이어
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;

