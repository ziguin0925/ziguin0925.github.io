import React from 'react';
import { UserGroupIcon } from '@heroicons/react/24/outline';

/**
 * 사용자 분석 페이지
 */
const UsersPage: React.FC = () => {
  const userStats = [
    {
      label: '총 사용자',
      value: '12,345',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      lightColor: 'text-blue-100',
    },
    {
      label: '신규 사용자',
      value: '1,234',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      lightColor: 'text-green-100',
    },
    {
      label: '활성 사용자',
      value: '8,765',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      lightColor: 'text-purple-100',
    },
    {
      label: '재방문율',
      value: '71%',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      lightColor: 'text-orange-100',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">사용자 분석</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${stat.gradient} rounded-lg p-6 text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={stat.lightColor}>{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <UserGroupIcon className="w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;

