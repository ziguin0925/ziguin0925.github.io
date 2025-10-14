import React from 'react';
import { 
  CpuChipIcon,
  CodeBracketIcon,
  BoltIcon,
  ChartBarIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const ProjectAnalytics: React.FC = () => {
  const projectViews = [
    { name: '1월', views: 1200, likes: 45 },
    { name: '2월', views: 1900, likes: 67 },
    { name: '3월', views: 3000, likes: 89 },
    { name: '4월', views: 2800, likes: 76 },
    { name: '5월', views: 1890, likes: 54 },
    { name: '6월', views: 2390, likes: 68 },
  ];

  const projectData = [
    {
      name: 'React Portfolio',
      category: 'IT',
      views: 15420,
      likes: 234,
      shares: 45,
      duration: '2:30',
      status: 'active'
    },
    {
      name: 'Smart Grid System',
      category: '전기',
      views: 8930,
      likes: 156,
      shares: 23,
      duration: '1:45',
      status: 'active'
    },
    {
      name: 'Blog Platform',
      category: 'IT',
      views: 6780,
      likes: 98,
      shares: 34,
      duration: '3:15',
      status: 'active'
    },
    {
      name: 'IoT Dashboard',
      category: 'IT',
      views: 5420,
      likes: 67,
      shares: 12,
      duration: '2:00',
      status: 'completed'
    },
    {
      name: 'Energy Monitor',
      category: '전기',
      views: 3210,
      likes: 43,
      shares: 8,
      duration: '1:20',
      status: 'completed'
    },
  ];

  const categoryStats = [
    { category: 'IT 프로젝트', count: 8, views: 45680, avgDuration: '2:15' },
    { category: '전기 프로젝트', count: 5, views: 23450, avgDuration: '1:30' },
    { category: '기타', count: 2, views: 5670, avgDuration: '1:45' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'IT':
        return 'bg-blue-100 text-blue-800';
      case '전기':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* 프로젝트 조회수 및 좋아요 추이 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <ChartBarIcon className="w-5 h-5 mr-2" />
          프로젝트 조회수 및 좋아요 추이
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={projectViews}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="views" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
            <Area type="monotone" dataKey="likes" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 카테고리별 통계 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">{stat.category}</h4>
              <CpuChipIcon className="w-6 h-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">프로젝트 수</span>
                <span className="font-semibold text-gray-900">{stat.count}개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">총 조회수</span>
                <span className="font-semibold text-gray-900">{stat.views.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">평균 체류시간</span>
                <span className="font-semibold text-gray-900">{stat.avgDuration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 프로젝트별 상세 분석 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <CodeBracketIcon className="w-5 h-5 mr-2" />
            프로젝트별 상세 분석
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  프로젝트
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  카테고리
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  조회수
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  좋아요
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  공유
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  체류시간
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projectData.map((project, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <CodeBracketIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{project.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <EyeIcon className="w-4 h-4 mr-1 text-gray-400" />
                      {project.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <HeartIcon className="w-4 h-4 mr-1 text-red-400" />
                      {project.likes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <ShareIcon className="w-4 h-4 mr-1 text-blue-400" />
                      {project.shares}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1 text-gray-400" />
                      {project.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status === 'active' ? '진행중' : 
                       project.status === 'completed' ? '완료' : '일시정지'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 인기 프로젝트 TOP 3 */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BoltIcon className="w-5 h-5 mr-2" />
          인기 프로젝트 TOP 3
        </h3>
        <div className="space-y-4">
          {projectData.slice(0, 3).map((project, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                  index === 0 ? 'bg-yellow-500' :
                  index === 1 ? 'bg-gray-400' :
                  'bg-orange-500'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-500">{project.category} 프로젝트</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{project.views.toLocaleString()}</div>
                <div className="text-sm text-gray-500">조회수</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
