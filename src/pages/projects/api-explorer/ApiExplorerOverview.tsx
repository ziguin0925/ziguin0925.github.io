import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, getPosts, getAlbums, getTodos } from './apiService';

interface Stats {
  users: number;
  posts: number;
  albums: number;
  todos: number;
}

const ApiExplorerOverview: React.FC = () => {
  const [stats, setStats] = useState<Stats>({ users: 0, posts: 0, albums: 0, todos: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [users, posts, albums, todos] = await Promise.all([
          getUsers(),
          getPosts(),
          getAlbums(),
          getTodos(),
        ]);
        setStats({
          users: users.length,
          posts: posts.length,
          albums: albums.length,
          todos: todos.length,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Users',
      count: stats.users,
      icon: '👥',
      gradient: 'from-blue-500 to-cyan-500',
      link: '/api-explorer/users',
    },
    {
      title: 'Posts',
      count: stats.posts,
      icon: '📝',
      gradient: 'from-purple-500 to-pink-500',
      link: '/api-explorer/posts',
    },
    {
      title: 'Albums',
      count: stats.albums,
      icon: '📷',
      gradient: 'from-emerald-500 to-teal-500',
      link: '/api-explorer/albums',
    },
    {
      title: 'Todos',
      count: stats.todos,
      icon: '✅',
      gradient: 'from-orange-500 to-red-500',
      link: '/api-explorer/todos',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Welcome to API Explorer 🚀
        </h1>
        <p className="text-gray-600 text-lg">
          Explore and interact with JSONPlaceholder's REST API resources
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{card.icon}</span>
                <div className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                  {loading ? '...' : card.count}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Features */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h3 className="font-semibold mb-1">Real-time Data</h3>
              <p className="text-emerald-50">Fetch and display live data from API</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🔍</span>
            <div>
              <h3 className="font-semibold mb-1">Search & Filter</h3>
              <p className="text-emerald-50">Find exactly what you're looking for</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Detailed Views</h3>
              <p className="text-emerald-50">Explore comprehensive data details</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🎨</span>
            <div>
              <h3 className="font-semibold mb-1">Modern UI</h3>
              <p className="text-emerald-50">Beautiful and responsive design</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Start</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/api-explorer/users"
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👥</span>
              <span className="font-semibold text-gray-700 group-hover:text-emerald-600">
                Browse Users
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
          <Link
            to="/api-explorer/posts"
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📝</span>
              <span className="font-semibold text-gray-700 group-hover:text-purple-600">
                Read Posts
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApiExplorerOverview;

