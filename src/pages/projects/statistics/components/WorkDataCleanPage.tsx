import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  TableCellsIcon,
  ArrowDownTrayIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { exportObjectsToCSV } from '../../../../utils/csvExport';

// CSV 헤더 매핑 (컴포넌트 외부에 선언하여 재생성 방지)
const CSV_COLUMN_MAPPING = {
  id: 'ID',
  title: '제목',
  category: '카테고리',
  status: '상태',
  progress: '진행률',
  assignee: '담당자',
  priority: '우선순위',
  date: '날짜',
  description: '설명'
} as const;

const WorkDataCleanPage: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    dateRange: '30days',
    status: 'all',
    category: 'all',
    priority: 'all',
    keyword: ''
  });

  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: 'React 컴포넌트 리팩토링',
      category: '개발',
      status: '완료',
      date: '2024-01-15',
      progress: 100,
      assignee: '김개발',
      priority: '높음',
      description: '기존 컴포넌트의 성능 최적화 및 코드 정리'
    },
    {
      id: 2,
      title: 'API 테스트 케이스 작성',
      category: '테스트',
      status: '진행중',
      date: '2024-01-14',
      progress: 75,
      assignee: '이테스트',
      priority: '중간',
      description: 'REST API 엔드포인트 테스트 케이스 작성 및 검증'
    },
    {
      id: 3,
      title: 'UI/UX 디자인 시스템 구축',
      category: '디자인',
      status: '대기',
      date: '2024-01-13',
      progress: 30,
      assignee: '박디자인',
      priority: '낮음',
      description: '일관된 디자인 시스템 구축을 위한 컴포넌트 설계'
    },
    {
      id: 4,
      title: '프로젝트 문서화',
      category: '문서',
      status: '완료',
      date: '2024-01-12',
      progress: 100,
      assignee: '최문서',
      priority: '중간',
      description: 'API 문서 및 사용자 가이드 작성'
    },
    {
      id: 5,
      title: '코드 리뷰 및 품질 검사',
      category: '리뷰',
      status: '진행중',
      date: '2024-01-11',
      progress: 60,
      assignee: '정리뷰',
      priority: '높음',
      description: '코드 품질 검사 및 리뷰 프로세스 개선'
    },
    {
      id: 6,
      title: '데이터베이스 최적화',
      category: '개발',
      status: '완료',
      date: '2024-01-10',
      progress: 100,
      assignee: '김개발',
      priority: '높음',
      description: '쿼리 성능 최적화 및 인덱스 개선'
    },
    {
      id: 7,
      title: '보안 취약점 점검',
      category: '보안',
      status: '진행중',
      date: '2024-01-09',
      progress: 45,
      assignee: '이보안',
      priority: '높음',
      description: '애플리케이션 보안 취약점 점검 및 수정'
    },
    {
      id: 8,
      title: '성능 모니터링 설정',
      category: '운영',
      status: '대기',
      date: '2024-01-08',
      progress: 20,
      assignee: '박운영',
      priority: '중간',
      description: '애플리케이션 성능 모니터링 도구 설정'
    }
  ]);

  const [filteredResults, setFilteredResults] = useState(searchResults);

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = {
      ...searchFilters,
      [key]: value
    };
    setSearchFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters: typeof searchFilters) => {
    let filtered = searchResults;

    // 키워드 검색
    if (filters.keyword) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.assignee.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    // 상태 필터
    if (filters.status !== 'all') {
      const statusMap: { [key: string]: string } = {
        'completed': '완료',
        'inprogress': '진행중',
        'pending': '대기'
      };
      filtered = filtered.filter(item => item.status === statusMap[filters.status]);
    }

    // 카테고리 필터
    if (filters.category !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'development': '개발',
        'test': '테스트',
        'design': '디자인',
        'document': '문서',
        'review': '리뷰',
        'security': '보안',
        'operation': '운영'
      };
      filtered = filtered.filter(item => item.category === categoryMap[filters.category]);
    }

    // 우선순위 필터
    if (filters.priority !== 'all') {
      const priorityMap: { [key: string]: string } = {
        'high': '높음',
        'medium': '중간',
        'low': '낮음'
      };
      filtered = filtered.filter(item => item.priority === priorityMap[filters.priority]);
    }

    setFilteredResults(filtered);
  };

  const clearFilters = () => {
    const defaultFilters = {
      dateRange: '30days',
      status: 'all',
      category: 'all',
      priority: 'all',
      keyword: ''
    };
    setSearchFilters(defaultFilters);
    setFilteredResults(searchResults);
  };

  const getStatusText = (status: string) => {
    return status;
  };

  const getPriorityText = (priority: string) => {
    return priority;
  };

  // CSV 다운로드 함수
  const downloadCSV = () => {
    const today = new Date().toISOString().split('T')[0];
    
    exportObjectsToCSV(
      filteredResults,
      CSV_COLUMN_MAPPING,
      `work_data_${today}.csv`
    );
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <DocumentChartBarIcon className="w-6 h-6 mr-2" />
              작업 데이터 검색
            </h2>
            <p className="text-gray-600 mt-1">프로젝트 작업 데이터를 검색하고 관리합니다</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={downloadCSV}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              내보내기 ({filteredResults.length}개)
            </button>
          </div>
        </div>

        {/* 검색 조건 */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FunnelIcon className="w-5 h-5 mr-2" />
              검색 조건
            </h3>
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              <XMarkIcon className="w-4 h-4 mr-1" />
              필터 초기화
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">기간</label>
              <select
                value={searchFilters.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7days">최근 7일</option>
                <option value="30days">최근 30일</option>
                <option value="90days">최근 90일</option>
                <option value="all">전체</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">상태</label>
              <select
                value={searchFilters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">전체</option>
                <option value="completed">완료</option>
                <option value="inprogress">진행중</option>
                <option value="pending">대기</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
              <select
                value={searchFilters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">전체</option>
                <option value="development">개발</option>
                <option value="test">테스트</option>
                <option value="design">디자인</option>
                <option value="document">문서</option>
                <option value="review">리뷰</option>
                <option value="security">보안</option>
                <option value="operation">운영</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">우선순위</label>
              <select
                value={searchFilters.priority}
                onChange={(e) => handleFilterChange('priority', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">전체</option>
                <option value="high">높음</option>
                <option value="medium">중간</option>
                <option value="low">낮음</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">키워드</label>
              <div className="flex">
                <input
                  type="text"
                  value={searchFilters.keyword}
                  onChange={(e) => handleFilterChange('keyword', e.target.value)}
                  placeholder="제목, 설명, 담당자 검색..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => applyFilters(searchFilters)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  <MagnifyingGlassIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 검색 결과 요약 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChartBarIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">
                검색 결과: <span className="font-bold">{filteredResults.length}개</span>
              </span>
            </div>
            <div className="text-sm text-blue-700">
              총 {searchResults.length}개 중 {filteredResults.length}개 표시
            </div>
          </div>
        </div>
      </div>

      {/* 검색 결과 테이블 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">검색 결과</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  제목
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  카테고리
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  진행률
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  담당자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  우선순위
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  날짜
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResults.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{item.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{getStatusText(item.status)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-900 font-medium">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.assignee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{getPriorityText(item.priority)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 빈 결과 상태 */}
        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <DocumentChartBarIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색 조건을 시도해보세요</p>
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {filteredResults.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              {filteredResults.length}개 결과 중 1-{filteredResults.length}개 표시
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                이전
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                다음
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkDataCleanPage;

