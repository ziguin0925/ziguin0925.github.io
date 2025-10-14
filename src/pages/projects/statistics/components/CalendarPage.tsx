import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

const CalendarPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: '프로젝트 회의',
      time: '09:00 - 10:00',
      location: '회의실 A',
      attendees: 5,
      type: 'meeting'
    },
    {
      id: 2,
      title: '코드 리뷰',
      time: '14:00 - 15:00',
      location: '온라인',
      attendees: 3,
      type: 'review'
    },
    {
      id: 3,
      title: '프로젝트 발표',
      time: '16:00 - 17:00',
      location: '강의실 B',
      attendees: 20,
      type: 'presentation'
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800';
      case 'review':
        return 'bg-green-100 text-green-800';
      case 'presentation':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <CalendarIcon className="w-6 h-6 mr-2" />
            일정 관리
          </h2>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            새 일정 추가
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 오늘의 일정 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">오늘의 일정</h3>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(event.type)}`}>
                          {event.type === 'meeting' ? '회의' :
                           event.type === 'review' ? '리뷰' : '발표'}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="w-4 h-4" />
                          {event.attendees}명 참석
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 월간 캘린더 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">이번 달</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className={`text-center text-sm py-2 rounded ${
                    i === 14 ? 'bg-blue-500 text-white' : 
                    i < 5 ? 'text-gray-300' : 
                    'text-gray-700 hover:bg-gray-200'
                  }`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
