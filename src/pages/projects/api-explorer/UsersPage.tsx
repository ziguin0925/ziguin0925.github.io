import React, { useEffect, useState } from 'react';
import { getUsers } from './apiService';
import { User } from './types';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Users Directory</h1>
          <p className="text-gray-600 mt-1">Manage and explore user profiles</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold">
          {filteredUsers.length} Users
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search users by name, email, or username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        />
        <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
      </div>

      {/* Users Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {user.name.charAt(0)}
              </div>
              <span className="text-xs text-gray-500">ID: {user.id}</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
              {user.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">@{user.username}</p>
            <div className="space-y-1 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span className="truncate">{user.address.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedUser.name}</h2>
                <p className="text-gray-600">@{selectedUser.username}</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                  <span>📧</span>
                  <span>Contact Information</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Email:</span> {selectedUser.email}</p>
                  <p><span className="font-medium">Phone:</span> {selectedUser.phone}</p>
                  <p><span className="font-medium">Website:</span> {selectedUser.website}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                  <span>📍</span>
                  <span>Address</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <p>{selectedUser.address.suite}, {selectedUser.address.street}</p>
                  <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                  <span>🏢</span>
                  <span>Company</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">{selectedUser.company.name}</p>
                  <p className="italic">{selectedUser.company.catchPhrase}</p>
                  <p className="text-gray-600">{selectedUser.company.bs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No users found matching your search.
        </div>
      )}
    </div>
  );
};

export default UsersPage;

