import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BlogPost } from '../blogData';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const categoryLabels: Record<string, string> = {
    tech: 'Tech',
    design: 'Design',
    development: 'Development',
    tutorial: 'Tutorial',
    news: 'News',
  };

  return (
    <article className="blog-card group border-b border-gray-200 pb-8 last:border-b-0">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="flex flex-col md:flex-row gap-6">
          {/* 텍스트 콘텐츠 */}
          <div className="flex-1">
            {/* 메타 정보 */}
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
              <span className="font-medium text-black">
                {categoryLabels[post.category]}
              </span>
              <span>·</span>
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </div>

            {/* 제목 */}
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 group-hover:underline">
              {post.title}
            </h3>

            {/* 설명 */}
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* 태그들 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 읽기 링크 */}
            <div className="flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all">
              <span>Read more</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
