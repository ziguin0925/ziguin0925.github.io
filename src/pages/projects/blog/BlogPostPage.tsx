import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { 
  CalendarIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import BlogLayout from '../../../components/layout/BlogLayout';
import BlogCard from './components/BlogCard';
import { getBlogPostById, getRelatedBlogPosts, BLOG_AUTHOR } from './blogData';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getBlogPostById(id) : undefined;
  const relatedPosts = id ? getRelatedBlogPosts(id, 2) : [];

  if (!post) {
    return (
      <BlogLayout>
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-black hover:underline"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to blog
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const categoryLabels: Record<string, string> = {
    tech: 'Tech',
    design: 'Design',
    development: 'Development',
    tutorial: 'Tutorial',
    news: 'News',
  };

  return (
    <BlogLayout>
      <article>
        {/* 뒤로가기 버튼 */}
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>

        {/* 포스트 헤더 */}
        <header className="max-w-5xl mx-auto px-6 py-12 border-b border-gray-200">
          {/* 카테고리 */}
          <div className="mb-6">
            <span className="text-sm font-semibold text-black">
              {categoryLabels[post.category]}
            </span>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            {post.title}
          </h1>

          {/* 메타 정보 */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{BLOG_AUTHOR.avatar}</span>
              <div>
                <div className="font-semibold text-black">{BLOG_AUTHOR.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </header>

        {/* 포스트 내용 */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* 요약 */}
          <div className="mb-12 p-6 bg-gray-50 border-l-4 border-black">
            <p className="text-lg text-gray-700">
              {post.excerpt}
            </p>
          </div>

          {/* 본문 - 마크다운 렌더링 */}
          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-black
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-black prose-a:underline prose-a:font-medium
            prose-strong:text-black prose-strong:font-bold
            prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-800 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
          ">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* 태그들 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 py-12">
              <div className="mb-8 pb-4 border-b-2 border-black">
                <h2 className="text-3xl font-bold text-black">
                  Related Posts
                </h2>
                <p className="text-gray-600 mt-2">
                  Continue reading with these related articles
                </p>
              </div>
              <div className="space-y-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </BlogLayout>
  );
};

export default BlogPostPage;
