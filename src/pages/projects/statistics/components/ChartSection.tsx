import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart
} from 'recharts';

const ChartSection: React.FC = () => {
  const performanceData = [
    { month: '1월', traffic: 4000, conversions: 240, bounce: 32 },
    { month: '2월', traffic: 3000, conversions: 139, bounce: 28 },
    { month: '3월', traffic: 5000, conversions: 980, bounce: 35 },
    { month: '4월', traffic: 2780, conversions: 390, bounce: 25 },
    { month: '5월', traffic: 1890, conversions: 480, bounce: 30 },
    { month: '6월', traffic: 2390, conversions: 380, bounce: 27 },
  ];

  const hourlyData = [
    { hour: '00:00', visits: 45 },
    { hour: '02:00', visits: 23 },
    { hour: '04:00', visits: 12 },
    { hour: '06:00', visits: 78 },
    { hour: '08:00', visits: 234 },
    { hour: '10:00', visits: 456 },
    { hour: '12:00', visits: 678 },
    { hour: '14:00', visits: 789 },
    { hour: '16:00', visits: 567 },
    { hour: '18:00', visits: 345 },
    { hour: '20:00', visits: 234 },
    { hour: '22:00', visits: 123 },
  ];

  const conversionData = [
    { page: '홈', visits: 12000, conversions: 1200, rate: 10 },
    { page: '프로젝트', visits: 8000, conversions: 800, rate: 10 },
    { page: '블로그', visits: 6000, conversions: 480, rate: 8 },
    { page: '소개', visits: 4000, conversions: 200, rate: 5 },
    { page: '연락', visits: 2000, conversions: 100, rate: 5 },
  ];

  return (
    <div className="space-y-6">
      {/* 성능 분석 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 성능 분석</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="traffic" 
              fill="#3B82F6" 
              fillOpacity={0.3}
              stroke="#3B82F6"
            />
            <Bar 
              yAxisId="right"
              dataKey="conversions" 
              fill="#10B981"
              opacity={0.7}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="bounce" 
              stroke="#F59E0B" 
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 시간대별 방문자 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">시간대별 방문자</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="visits" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 페이지별 전환율 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">페이지별 전환율</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="page" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rate" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 상세 분석 테이블 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">페이지별 상세 분석</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  페이지
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  방문자
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  전환
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  전환율
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {conversionData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.page}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.visits.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.conversions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.rate >= 8 ? 'bg-green-100 text-green-800' : 
                      row.rate >= 5 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {row.rate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
