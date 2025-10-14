import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogLayout from '../../../components/layout/BlogLayout';
import BlogCard from './components/BlogCard';
import BlogCategoryFilter from './components/BlogCategoryFilter';
import Pagination from '../components/Pagination';
import { getBlogStats, getBlogPostsPaginated } from './blogData';

gsap.registerPlugin(ScrollTrigger);

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const stats = getBlogStats();
  const { posts, pagination } = getBlogPostsPaginated(selectedCategory, currentPage, itemsPerPage);

  useEffect(() => {
    // 카드 애니메이션
    gsap.fromTo(
      '.blog-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [posts]);

  // 카테고리 변경 시 페이지를 1로 리셋
  const handleCategoryChange = (category: 'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all') => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BlogLayout>
      {/* Hero 섹션 - 배경 이미지 */}
      <section className="relative h-[500px] bg-black overflow-hidden">
        {/* 배경 이미지 (Unsplash에서 가져온 코딩 이미지) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            개발과 디자인에 대한 생각을 기록합니다
          </p>
          <div className="mt-8 flex items-center gap-6 text-white">
            <div>
              <div className="text-3xl font-bold">{stats.total}</div>
              <div className="text-sm text-gray-400">Posts</div>
            </div>
            <div className="w-px h-12 bg-gray-600" />
            <div>
              <div className="text-3xl font-bold">{stats.categories.tech + stats.categories.development}</div>
              <div className="text-sm text-gray-400">Tech Articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* 카테고리 필터 */}
        <div className="mb-16">
          <BlogCategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            counts={{
              all: stats.total,
              tech: stats.categories.tech,
              design: stats.categories.design,
              development: stats.categories.development,
              tutorial: stats.categories.tutorial,
              news: stats.categories.news,
            }}
          />
        </div>

        {/* 블로그 그리드 */}
        <section className="blog-grid">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-2">
              {selectedCategory === 'all' ? 'All Posts' : 
               selectedCategory === 'tech' ? 'Tech' : 
               selectedCategory === 'design' ? 'Design' : 
               selectedCategory === 'development' ? 'Development' : 
               selectedCategory === 'tutorial' ? 'Tutorial' : 'News'}
            </h2>
            <p className="text-gray-600">
              {pagination.totalItems} {pagination.totalItems === 1 ? 'post' : 'posts'}
            </p>
          </div>

          {posts.length > 0 ? (
            <>
              <div className="space-y-8">
                {posts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    index={index}
                  />
                ))}
              </div>

              {/* 페이지네이션 */}
              {posts.length > 0 && (
                <div className="mt-16">
                  <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                    hasNextPage={pagination.hasNextPage}
                    hasPrevPage={pagination.hasPrevPage}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No posts found in this category.
              </p>
            </div>
          )}
        </section>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
