/**
 * JSONPlaceholder API 서비스
 * https://jsonplaceholder.typicode.com/
 */

import { User, Post, Comment, Album, Photo, Todo } from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Generic fetch wrapper
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

// Users
export const getUsers = (): Promise<User[]> => fetchAPI<User[]>('/users');
export const getUser = (id: number): Promise<User> => fetchAPI<User>(`/users/${id}`);
export const getUserPosts = (userId: number): Promise<Post[]> => 
  fetchAPI<Post[]>(`/users/${userId}/posts`);
export const getUserAlbums = (userId: number): Promise<Album[]> => 
  fetchAPI<Album[]>(`/users/${userId}/albums`);
export const getUserTodos = (userId: number): Promise<Todo[]> => 
  fetchAPI<Todo[]>(`/users/${userId}/todos`);

// Posts
export const getPosts = (): Promise<Post[]> => fetchAPI<Post[]>('/posts');
export const getPost = (id: number): Promise<Post> => fetchAPI<Post>(`/posts/${id}`);
export const getPostComments = (postId: number): Promise<Comment[]> => 
  fetchAPI<Comment[]>(`/posts/${postId}/comments`);

// Albums
export const getAlbums = (): Promise<Album[]> => fetchAPI<Album[]>('/albums');
export const getAlbum = (id: number): Promise<Album> => fetchAPI<Album>(`/albums/${id}`);
export const getAlbumPhotos = (albumId: number): Promise<Photo[]> => 
  fetchAPI<Photo[]>(`/albums/${albumId}/photos`);

// Photos
export const getPhotos = (): Promise<Photo[]> => fetchAPI<Photo[]>('/photos');
export const getPhoto = (id: number): Promise<Photo> => fetchAPI<Photo>(`/photos/${id}`);

// Todos
export const getTodos = (): Promise<Todo[]> => fetchAPI<Todo[]>('/todos');
export const getTodo = (id: number): Promise<Todo> => fetchAPI<Todo>(`/todos/${id}`);

// Comments
export const getComments = (): Promise<Comment[]> => fetchAPI<Comment[]>('/comments');
export const getComment = (id: number): Promise<Comment> => fetchAPI<Comment>(`/comments/${id}`);

