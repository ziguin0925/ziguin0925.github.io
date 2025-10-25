/**
 * CSV 내보내기 유틸리티
 */

export interface CSVExportOptions {
  headers: string[];
  rows: (string | number)[][];
  filename?: string;
}

/**
 * 데이터를 CSV 파일로 다운로드
 * @param options - CSV 내보내기 옵션
 * @param options.headers - CSV 헤더 배열
 * @param options.rows - CSV 데이터 행 배열
 * @param options.filename - 파일명 (기본값: data_YYYY-MM-DD.csv)
 */
export const exportToCSV = ({ headers, rows, filename }: CSVExportOptions): void => {
  // CSV 문자열 생성
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  // BOM(Byte Order Mark) 추가 - Excel에서 한글이 깨지지 않도록
  const BOM = '\uFEFF';
  const csvWithBOM = BOM + csvContent;
  
  // Blob 생성
  const blob = new Blob([csvWithBOM], { type: 'text/csv;charset=utf-8;' });
  
  // 파일명 생성
  const today = new Date().toISOString().split('T')[0];
  const finalFilename = filename || `data_${today}.csv`;
  
  // 다운로드 링크 생성 및 실행
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', finalFilename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * 문자열을 CSV 셀 형식으로 이스케이프 처리
 * 쉼표, 따옴표, 줄바꿈이 포함된 경우 따옴표로 감싸기
 * @param value - 이스케이프할 값
 * @returns 이스케이프된 문자열
 */
export const escapeCSVValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return value.toString();
  }
  
  // 쉼표, 따옴표, 줄바꿈이 포함되어 있으면 따옴표로 감싸기
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    // 내부의 따옴표는 두 개로 이스케이프
    return `"${value.replace(/"/g, '""')}"`;
  }
  
  return value;
};

/**
 * 객체 배열을 CSV 형식으로 변환하여 다운로드
 * @param data - 객체 배열 데이터
 * @param columnMapping - 컬럼 매핑 (키: 헤더명)
 * @param filename - 파일명
 */
export const exportObjectsToCSV = <T extends Record<string, any>>(
  data: T[],
  columnMapping: Record<keyof T, string>,
  filename?: string
): void => {
  if (data.length === 0) {
    console.warn('No data to export');
    return;
  }

  const keys = Object.keys(columnMapping) as (keyof T)[];
  const headers = keys.map(key => columnMapping[key]);
  
  const rows = data.map(item => 
    keys.map(key => escapeCSVValue(String(item[key] || '')))
  );

  exportToCSV({ headers, rows, filename });
};

