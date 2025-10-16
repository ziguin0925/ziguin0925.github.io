/**
 * 경로가 활성 상태인지 확인
 * @param pathname - 현재 경로
 * @param targetPath - 대상 경로
 * @param exact - 정확히 일치해야 하는지 여부
 * @returns boolean
 */
export const isActivePath = (
  pathname: string,
  targetPath: string,
  exact: boolean = false
): boolean => {
  if (exact) {
    return pathname === targetPath;
  }
  return pathname.startsWith(targetPath);
};

/**
 * 쿼리 파라미터를 객체로 변환
 * @param search - URL 검색 문자열
 * @returns 쿼리 파라미터 객체
 */
export const parseQueryParams = (search: string): Record<string, string> => {
  const params = new URLSearchParams(search);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
};

/**
 * 객체를 쿼리 파라미터로 변환
 * @param params - 쿼리 파라미터 객체
 * @returns 쿼리 문자열
 */
export const stringifyQueryParams = (params: Record<string, string | number>): string => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  
  return searchParams.toString();
};

/**
 * 페이지네이션을 위한 URL 생성
 * @param basePath - 기본 경로
 * @param page - 페이지 번호
 * @param params - 추가 파라미터
 * @returns 생성된 URL
 */
export const createPaginationUrl = (
  basePath: string,
  page: number,
  params?: Record<string, string | number>
): string => {
  const allParams = { ...params, page };
  const queryString = stringifyQueryParams(allParams);
  return `${basePath}?${queryString}`;
};

/**
 * 스크롤 위치를 저장하고 복원
 */
export const scrollManager = {
  save: (key: string) => {
    sessionStorage.setItem(`scroll_${key}`, String(window.scrollY));
  },
  restore: (key: string) => {
    const scrollY = sessionStorage.getItem(`scroll_${key}`);
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  },
  clear: (key: string) => {
    sessionStorage.removeItem(`scroll_${key}`);
  },
};

