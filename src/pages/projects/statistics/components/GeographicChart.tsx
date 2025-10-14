import React from 'react';
import { 
  MapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const GeographicChart: React.FC = () => {
  const countryData = [
    { country: '한국', visitors: 45000, percentage: 65, color: '#3B82F6' },
    { country: '미국', visitors: 12000, percentage: 18, color: '#10B981' },
    { country: '일본', visitors: 8000, percentage: 12, color: '#F59E0B' },
    { country: '중국', visitors: 3000, percentage: 4, color: '#EF4444' },
    { country: '기타', visitors: 1000, percentage: 1, color: '#8B5CF6' },
  ];

  const cityData = [
    { city: '서울', visitors: 25000, growth: '+15%' },
    { city: '부산', visitors: 8000, growth: '+8%' },
    { city: '대구', visitors: 5000, growth: '+12%' },
    { city: '인천', visitors: 4000, growth: '+5%' },
    { city: '광주', visitors: 3000, growth: '+10%' },
  ];

  return (
    <div className="space-y-6">
      {/* 국가별 방문자 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <MapIcon className="w-5 h-5 mr-2" />
            국가별 방문자 분포
          </h3>
          <div className="text-sm text-gray-500">
            총 {countryData.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}명
          </div>
        </div>
        
        <div className="space-y-4">
          {countryData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div 
                  className="w-4 h-4 rounded-full mr-3" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-gray-700 w-16">{item.country}</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: item.color,
                        width: `${item.percentage}%`
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">
                  {item.visitors.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 도시별 방문자 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <GlobeAltIcon className="w-5 h-5 mr-2" />
            국내 주요 도시별 방문자
          </h3>
          <div className="text-sm text-gray-500">
            한국 내 방문자
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cityData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{item.city}</h4>
                <span className={`text-sm font-medium ${
                  item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.growth}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {item.visitors.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">방문자</div>
            </div>
          ))}
        </div>
      </div>

      {/* 지역별 상세 통계 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">아시아 지역</p>
              <p className="text-3xl font-bold">85%</p>
            </div>
            <GlobeAltIcon className="w-8 h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">북미 지역</p>
              <p className="text-3xl font-bold">12%</p>
            </div>
            <UserGroupIcon className="w-8 h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">기타 지역</p>
              <p className="text-3xl font-bold">3%</p>
            </div>
            <ChartBarIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* 지도 시뮬레이션 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">실시간 방문자 위치</h3>
        <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">지도 컴포넌트 영역</p>
            <p className="text-sm text-gray-400 mt-2">
              실제 구현 시 Google Maps API나 다른 지도 라이브러리를 사용할 수 있습니다.
            </p>
          </div>
          
          {/* 시뮬레이션 점들 */}
          <div className="absolute top-8 left-16 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute bottom-16 left-24 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <div className="absolute top-32 right-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default GeographicChart;
