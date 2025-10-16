import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { label: 'Overview', path: '/api-explorer', icon: '📊' },
  { label: 'Users', path: '/api-explorer/users', icon: '👥' },
  { label: 'Posts', path: '/api-explorer/posts', icon: '📝' },
  { label: 'Albums', path: '/api-explorer/albums', icon: '📷' },
  { label: 'Todos', path: '/api-explorer/todos', icon: '✅' },
];

/**
 * API Explorer 전용 레이아웃
 * 좌측 사이드바 네비게이션과 메인 콘텐츠 영역으로 구성
 */
const ApiExplorerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-emerald-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl hover:opacity-70 transition-opacity">
                🏠
              </Link>
              <div className="h-6 w-px bg-emerald-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                API Explorer
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Powered by</span>
              <a 
                href="https://jsonplaceholder.typicode.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                JSONPlaceholder
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 overflow-hidden sticky top-24">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500">
                <h2 className="text-white font-semibold text-lg">Navigation</h2>
              </div>
              <ul className="p-2 space-y-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                            : 'text-gray-700 hover:bg-emerald-50 hover:scale-102'
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 p-6 lg:p-8">
              {children}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ApiExplorerLayout;

