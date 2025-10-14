import React from 'react';
import { EnvelopeIcon, PaperAirplaneIcon, TrashIcon, StarIcon } from '@heroicons/react/24/outline';

const EmailPage: React.FC = () => {
  const emails = [
    {
      id: 1,
      from: 'john@example.com',
      subject: '프로젝트 협업 제안',
      preview: '안녕하세요. 새로운 프로젝트에 대한 협업을 제안드립니다...',
      time: '2시간 전',
      unread: true
    },
    {
      id: 2,
      from: 'sarah@company.com',
      subject: '기술 스택 문의',
      preview: 'React와 TypeScript를 사용한 프로젝트에 대해 문의드립니다...',
      time: '4시간 전',
      unread: true
    },
    {
      id: 3,
      from: 'admin@github.com',
      subject: 'Repository 업데이트 알림',
      preview: 'Your repository has been updated with new commits...',
      time: '1일 전',
      unread: false
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <EnvelopeIcon className="w-6 h-6 mr-2" />
            이메일 관리
          </h2>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <PaperAirplaneIcon className="w-4 h-4 mr-2" />
            새 이메일 작성
          </button>
        </div>

        <div className="space-y-4">
          {emails.map((email) => (
            <div key={email.id} className={`p-4 border rounded-lg hover:bg-gray-50 transition-colors ${
              email.unread ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-medium ${email.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                      {email.from}
                    </h3>
                    {email.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                  <p className={`font-semibold mb-1 ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                    {email.subject}
                  </p>
                  <p className="text-sm text-gray-600">{email.preview}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-sm text-gray-500">{email.time}</span>
                  <div className="flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-500">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
