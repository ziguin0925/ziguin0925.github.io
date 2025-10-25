/**
 * JSONPlaceholder API 서비스
 * https://jsonplaceholder.typicode.com/
 */

import { User, Post, Comment, Album, Photo, Todo } from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// ============================================
// Generic Fetch Wrapper
// ============================================

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// ============================================
// Users API
// ============================================

export const getUsers = (): Promise<User[]> => fetchAPI<User[]>('/users');

// ============================================
// Posts API
// ============================================

export const getPosts        = (): Promise<Post[]> => fetchAPI<Post[]>('/posts');
export const getPostComments = (postId: number): Promise<Comment[]> => fetchAPI<Comment[]>(`/posts/${postId}/comments`);

// ============================================
// Albums API
// ============================================

export const getAlbums      = (): Promise<Album[]> => fetchAPI<Album[]>('/albums');
export const getAlbumPhotos = (albumId: number): Promise<Photo[]> => fetchAPI<Photo[]>(`/albums/${albumId}/photos`);

// ============================================
// Todos API
// ============================================

export const getTodos = (): Promise<Todo[]> => fetchAPI<Todo[]>('/todos');

