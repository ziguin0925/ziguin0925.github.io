import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  BookOpenIcon, 
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface BlogLayoutProps {
  children: React.ReactNode;
}

/**
 * 블로그 페이지 전용 심플 레이아웃
 */
const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/blog', icon: BookOpenIcon, label: 'Blog' },
    { path: '/projects', icon: RocketLaunchIcon, label: 'Projects' },
  ];

  const isActive = (path: string) => {
    if (path === '/blog') {
      return location.pathname.startsWith('/blog');
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="flex items-center gap-2 group">
              <BookOpenIcon className="w-7 h-7 text-black" />
              <span className="text-xl font-bold text-black">Blog</span>
            </Link>

            {/* 네비게이션 */}
            <nav className="flex items-center gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      active
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="pt-16">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="bg-black text-white py-12 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="w-6 h-6" />
              <span className="font-bold">Blog</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
