import React, { useEffect, useState } from 'react';
import { getTodos, getUsers } from './apiService';
import { Todo, User } from './types';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending'>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todosData, usersData] = await Promise.all([getTodos(), getUsers()]);
        setTodos(todosData);
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getUserName = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'completed' && todo.completed) ||
      (filterStatus === 'pending' && !todo.completed);
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
          <p className="text-gray-600 mt-1">Track and manage tasks</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-4">
          <div className="text-3xl font-bold">{stats.total}</div>
          <div className="text-sm opacity-90">Total Tasks</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-4">
          <div className="text-3xl font-bold">{stats.completed}</div>
          <div className="text-sm opacity-90">Completed</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-4">
          <div className="text-3xl font-bold">{stats.pending}</div>
          <div className="text-sm opacity-90">Pending</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              filterStatus === 'all'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-orange-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('completed')}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              filterStatus === 'completed'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-green-300'
            }`}
          >
            ✓ Done
          </button>
          <button
            onClick={() => setFilterStatus('pending')}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              filterStatus === 'pending'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-red-300'
            }`}
          >
            ○ Pending
          </button>
        </div>
      </div>

      {/* Todos List */}
      <div className="space-y-2">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`bg-white rounded-xl p-4 border transition-all duration-200 hover:shadow-md ${
              todo.completed
                ? 'border-green-200 bg-green-50/50'
                : 'border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  todo.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 hover:border-orange-400'
                }`}
              >
                {todo.completed && <span className="text-white text-xs">✓</span>}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium ${
                    todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
                  }`}
                >
                  {todo.title}
                </p>
                <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                  <span>👤</span>
                  <span>{getUserName(todo.userId)}</span>
                  <span>•</span>
                  <span>#{todo.id}</span>
                </div>
              </div>
              <div
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                  todo.completed
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {todo.completed ? 'Completed' : 'Pending'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTodos.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No todos found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default TodosPage;

