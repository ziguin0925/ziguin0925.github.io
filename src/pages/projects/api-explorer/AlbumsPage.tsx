import React, { useEffect, useState } from 'react';
import { getAlbums, getUsers, getAlbumPhotos } from './apiService';
import { Album, User, Photo } from './types';

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [albumsData, usersData] = await Promise.all([getAlbums(), getUsers()]);
        setAlbums(albumsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch albums:', error);
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

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAlbumClick = async (album: Album) => {
    setSelectedAlbum(album);
    setLoadingPhotos(true);
    try {
      const photosData = await getAlbumPhotos(album.id);
      setPhotos(photosData);
    } catch (error) {
      console.error('Failed to fetch photos:', error);
    } finally {
      setLoadingPhotos(false);
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-800">Photo Albums</h1>
          <p className="text-gray-600 mt-1">Browse beautiful photo collections</p>
        </div>
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full font-semibold">
          {filteredAlbums.length} Albums
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search albums by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        />
        <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
      </div>

      {/* Albums Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAlbums.map((album) => (
          <div
            key={album.id}
            onClick={() => handleAlbumClick(album)}
            className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-full h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg mb-4 group-hover:scale-105 transition-transform">
              <span className="text-5xl">📷</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {album.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>👤</span>
                <span className="truncate">{getUserName(album.userId)}</span>
              </div>
              <span className="text-xs">#{album.id}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Album Detail Modal */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedAlbum(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedAlbum.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>👤</span>
                  <span>{getUserName(selectedAlbum.userId)}</span>
                  <span>•</span>
                  <span>Album #{selectedAlbum.id}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl ml-4"
              >
                ×
              </button>
            </div>

            {loadingPhotos ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                      <p className="text-white text-xs text-center line-clamp-3">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              {photos.length} photos in this album
            </div>
          </div>
        </div>
      )}

      {filteredAlbums.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No albums found matching your search.
        </div>
      )}
    </div>
  );
};

export default AlbumsPage;

