import React, { useEffect, useState } from 'react';
import { getPosts, getUsers, getPostComments } from './apiService';
import { Post, User, Comment } from './types';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([getPosts(), getUsers()]);
        setPosts(postsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
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

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostClick = async (post: Post) => {
    setSelectedPost(post);
    setLoadingComments(true);
    try {
      const commentsData = await getPostComments(post.id);
      setComments(commentsData);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    } finally {
      setLoadingComments(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Posts Feed</h1>
          <p className="text-gray-600 mt-1">Browse and explore community posts</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold">
          {filteredPosts.length} Posts
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts by title or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
        <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.body}</p>
              </div>
              <span className="ml-4 text-xs text-gray-500 whitespace-nowrap">Post #{post.id}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>👤</span>
                <span>{getUserName(post.userId)}</span>
              </div>
              <span className="text-purple-500 group-hover:translate-x-1 transition-transform">
                Read more →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPost.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>👤</span>
                  <span>{getUserName(selectedPost.userId)}</span>
                  <span>•</span>
                  <span>Post #{selectedPost.id}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl ml-4"
              >
                ×
              </button>
            </div>

            <div className="prose max-w-none mb-6">
              <p className="text-gray-700 leading-relaxed">{selectedPost.body}</p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <span>💬</span>
                <span>Comments ({comments.length})</span>
              </h3>

              {loadingComments ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                        <span className="text-xs text-gray-500">#{comment.id}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{comment.body}</p>
                      <p className="text-xs text-gray-500">📧 {comment.email}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No posts found matching your search.
        </div>
      )}
    </div>
  );
};

export default PostsPage;

