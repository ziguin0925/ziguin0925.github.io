import React from 'react';
import { 
  ChartBarIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  BoltIcon,
  CpuChipIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const StatsOverview: React.FC = () => {
  // 샘플 데이터
  const monthlyData = [
    { month: '1월', visits: 4000, users: 2400, projects: 2400 },
    { month: '2월', visits: 3000, users: 1398, projects: 2210 },
    { month: '3월', visits: 2000, users: 9800, projects: 2290 },
    { month: '4월', visits: 2780, users: 3908, projects: 2000 },
    { month: '5월', visits: 1890, users: 4800, projects: 2181 },
    { month: '6월', visits: 2390, users: 3800, projects: 2500 },
  ];

  const categoryData = [
    { name: 'IT 프로젝트', value: 45, color: '#3B82F6' },
    { name: '전기 프로젝트', value: 30, color: '#10B981' },
    { name: '기타', value: 25, color: '#F59E0B' },
  ];

  const deviceData = [
    { name: '데스크톱', visits: 4000, percentage: 60 },
    { name: '모바일', visits: 2500, percentage: 35 },
    { name: '태블릿', visits: 500, percentage: 5 },
  ];

  const statsCards = [
    {
      title: '총 방문자',
      value: '12,345',
      change: '+12%',
      trend: 'up',
      icon: UserGroupIcon,
      color: 'blue'
    },
    {
      title: '페이지 뷰',
      value: '45,678',
      change: '+8%',
      trend: 'up',
      icon: ChartBarIcon,
      color: 'green'
    },
    {
      title: '평균 체류시간',
      value: '3:42',
      change: '-5%',
      trend: 'down',
      icon: ClockIcon,
      color: 'purple'
    },
    {
      title: '이탈률',
      value: '32%',
      change: '-2%',
      trend: 'down',
      icon: PresentationChartLineIcon,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="space-y-8">
      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className={`flex items-center mt-2 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(stat.color)}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 차트 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 월별 방문자 추이 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 방문자 추이</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 프로젝트 카테고리 분포 */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 카테고리 분포</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 기기별 방문자 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">기기별 방문자</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={deviceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsOverview;
