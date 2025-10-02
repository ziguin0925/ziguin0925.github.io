import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  hasNextPage,
  hasPrevPage
}) => {
  // 페이지 번호 생성 (최대 5개)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // 전체 페이지가 5개 이하면 모두 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 현재 페이지를 중심으로 5개 페이지 표시
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      // 시작 페이지 조정
      const adjustedStart = Math.max(1, end - maxVisiblePages + 1);
      
      for (let i = adjustedStart; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevPage}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          hasPrevPage
            ? 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
        }`}
      >
        <ChevronLeftIcon className="w-4 h-4" />
        <span>이전</span>
      </button>

      {/* 페이지 번호들 */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
              pageNum === currentPage
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          hasNextPage
            ? 'bg-white/80 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
        }`}
      >
        <span>다음</span>
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
