import React from 'react';
import { 
  DocumentChartBarIcon,
  TableCellsIcon,
  ChartBarSquareIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const WorkDataPage: React.FC = () => {
  const workDataItems = [
    {
      id: 1,
      title: '프로젝트 진행률',
      description: '현재 진행 중인 프로젝트들의 완료율과 상태',
      status: '진행중',
      progress: 75,
      lastUpdated: '2시간 전'
    },
    {
      id: 2,
      title: '작업 시간 분석',
      description: '팀원별 작업 시간과 생산성 분석',
      status: '완료',
      progress: 100,
      lastUpdated: '1일 전'
    },
    {
      id: 3,
      title: '품질 지표',
      description: '코드 품질, 테스트 커버리지, 버그 발생률',
      status: '검토중',
      progress: 60,
      lastUpdated: '3시간 전'
    },
    {
      id: 4,
      title: '리소스 사용량',
      description: '서버, 데이터베이스, API 사용량 모니터링',
      status: '모니터링',
      progress: 45,
      lastUpdated: '30분 전'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '진행중':
        return 'bg-blue-100 text-blue-800';
      case '완료':
        return 'bg-green-100 text-green-800';
      case '검토중':
        return 'bg-yellow-100 text-yellow-800';
      case '모니터링':
        return 'bg-purple-100 text-purple-800';
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
            작업 데이터
          </h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              새 데이터 추가
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              내보내기
            </button>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">총 작업</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <DocumentChartBarIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">완료</p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <ChartBarSquareIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">진행중</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <TableCellsIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">평균 진행률</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <DocumentTextIcon className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* 작업 데이터 목록 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">작업 데이터 목록</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {workDataItems.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>마지막 업데이트: {item.lastUpdated}</span>
                    <div className="flex items-center gap-2">
                      <span>진행률:</span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="font-medium">{item.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <DocumentChartBarIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <TableCellsIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 차트 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">작업 완료율</h3>
          <div className="space-y-4">
            {workDataItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12">{item.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">상태별 분포</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">완료</span>
              </div>
              <span className="text-sm font-medium text-gray-900">18개</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">진행중</span>
              </div>
              <span className="text-sm font-medium text-gray-900">4개</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">검토중</span>
              </div>
              <span className="text-sm font-medium text-gray-900">1개</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">모니터링</span>
              </div>
              <span className="text-sm font-medium text-gray-900">1개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDataPage;
