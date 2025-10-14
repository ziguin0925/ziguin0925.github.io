import React from 'react';
import { 
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DeviceTabletIcon,
  ChartBarIcon,
  ChartPieIcon
} from '@heroicons/react/24/outline';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const DeviceStats: React.FC = () => {
  const deviceData = [
    { name: '데스크톱', value: 65, count: 65000, color: '#3B82F6' },
    { name: '모바일', value: 28, count: 28000, color: '#10B981' },
    { name: '태블릿', value: 7, count: 7000, color: '#F59E0B' },
  ];

  const browserData = [
    { browser: 'Chrome', users: 45000, percentage: 45 },
    { browser: 'Safari', users: 25000, percentage: 25 },
    { browser: 'Firefox', users: 15000, percentage: 15 },
    { browser: 'Edge', users: 10000, percentage: 10 },
    { browser: '기타', users: 5000, percentage: 5 },
  ];

  const osData = [
    { os: 'Windows', users: 60000, percentage: 60 },
    { os: 'macOS', users: 20000, percentage: 20 },
    { os: 'iOS', users: 12000, percentage: 12 },
    { os: 'Android', users: 6000, percentage: 6 },
    { os: 'Linux', users: 2000, percentage: 2 },
  ];

  const screenSizeData = [
    { size: '1920x1080', users: 25000 },
    { size: '1366x768', users: 20000 },
    { size: '375x667', users: 18000 },
    { size: '414x896', users: 15000 },
    { size: '1440x900', users: 12000 },
    { size: '기타', users: 10000 },
  ];

  const deviceIcons = {
    '데스크톱': ComputerDesktopIcon,
    '모바일': DevicePhoneMobileIcon,
    '태블릿': DeviceTabletIcon,
  };

  return (
    <div className="space-y-6">
      {/* 기기별 사용자 분포 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
            기기별 사용자 분포
          </h3>
          <div className="text-sm text-gray-500">
            총 {deviceData.reduce((sum, item) => sum + item.count, 0).toLocaleString()}명
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 파이 차트 */}
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* 기기별 상세 정보 */}
          <div className="space-y-4">
            {deviceData.map((item, index) => {
              const Icon = deviceIcons[item.name as keyof typeof deviceIcons];
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${
                      item.name === '데스크톱' ? 'from-blue-500 to-blue-600' :
                      item.name === '모바일' ? 'from-green-500 to-green-600' :
                      'from-yellow-500 to-yellow-600'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.count.toLocaleString()}명</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{item.value}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 브라우저별 사용자 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <ChartBarIcon className="w-5 h-5 mr-2" />
            브라우저별 사용자
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={browserData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="browser" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* OS별 사용자 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <ChartPieIcon className="w-5 h-5 mr-2" />
            운영체제별 사용자
          </h3>
          <div className="space-y-3">
            {osData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-3" />
                  <span className="text-sm font-medium text-gray-700">{item.os}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 화면 해상도별 사용자 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">화면 해상도별 사용자</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={screenSizeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="size" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 기기별 성능 지표 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">데스크톱 평균 체류시간</p>
              <p className="text-3xl font-bold">5:32</p>
            </div>
            <ComputerDesktopIcon className="w-8 h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">모바일 평균 체류시간</p>
              <p className="text-3xl font-bold">2:15</p>
            </div>
            <DevicePhoneMobileIcon className="w-8 h-8" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100">태블릿 평균 체류시간</p>
              <p className="text-3xl font-bold">3:45</p>
            </div>
            <DeviceTabletIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceStats;
