import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  DocumentChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  TableCellsIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const WorkDataSearchPage: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    dateRange: '7days',
    status: 'all',
    category: 'all',
    keyword: ''
  });

  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: '프로젝트 A 작업 데이터',
      category: '개발',
      status: '완료',
      date: '2024-01-15',
      progress: 100,
      assignee: '김개발',
      priority: '높음'
    },
    {
      id: 2,
      title: '프로젝트 B 테스트 데이터',
      category: '테스트',
      status: '진행중',
      date: '2024-01-14',
      progress: 75,
      assignee: '이테스트',
      priority: '중간'
    },
    {
      id: 3,
      title: '프로젝트 C 디자인 데이터',
      category: '디자인',
      status: '대기',
      date: '2024-01-13',
      progress: 30,
      assignee: '박디자인',
      priority: '낮음'
    },
    {
      id: 4,
      title: '프로젝트 D 문서화',
      category: '문서',
      status: '완료',
      date: '2024-01-12',
      progress: 100,
      assignee: '최문서',
      priority: '중간'
    },
    {
      id: 5,
      title: '프로젝트 E 리뷰',
      category: '리뷰',
      status: '진행중',
      date: '2024-01-11',
      progress: 60,
      assignee: '정리뷰',
      priority: '높음'
    }
  ]);

  const handleFilterChange = (key: string, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSearch = () => {
    // 실제 검색 로직 구현
    console.log('검색 조건:', searchFilters);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '완료':
        return 'bg-green-100 text-green-800';
      case '진행중':
        return 'bg-blue-100 text-blue-800';
      case '대기':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case '높음':
        return 'bg-red-100 text-red-800';
      case '중간':
        return 'bg-yellow-100 text-yellow-800';
      case '낮음':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DocumentChartBarIcon className="w-6 h-6 mr-2" />
            작업 데이터 검색
          </h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              내보내기
            </button>
          </div>
        </div>

        {/* 검색 조건 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">기간</label>
            <select
              value={searchFilters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">전체</option>
              <option value="development">개발</option>
              <option value="test">테스트</option>
              <option value="design">디자인</option>
              <option value="document">문서</option>
              <option value="review">리뷰</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">키워드</label>
            <div className="flex">
              <input
                type="text"
                value={searchFilters.keyword}
                onChange={(e) => handleFilterChange('keyword', e.target.value)}
                placeholder="검색어 입력..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
              >
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 검색 결과 통계 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">총 검색 결과</p>
                <p className="text-2xl font-bold">{searchResults.length}</p>
              </div>
              <ChartBarIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">완료</p>
                <p className="text-2xl font-bold">{searchResults.filter(r => r.status === '완료').length}</p>
              </div>
              <TableCellsIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">진행중</p>
                <p className="text-2xl font-bold">{searchResults.filter(r => r.status === '진행중').length}</p>
              </div>
              <UserGroupIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">대기</p>
                <p className="text-2xl font-bold">{searchResults.filter(r => r.status === '대기').length}</p>
              </div>
              <CalendarIcon className="w-8 h-8" />
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
              {searchResults.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-900">{item.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.assignee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            총 {searchResults.length}개 결과 중 1-{searchResults.length}개 표시
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDataSearchPage;
