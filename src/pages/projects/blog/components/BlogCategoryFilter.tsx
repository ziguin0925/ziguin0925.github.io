import React from 'react';

interface BlogCategoryFilterProps {
  selectedCategory: 'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all';
  onCategoryChange: (category: 'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all') => void;
  counts: {
    all: number;
    tech: number;
    design: number;
    development: number;
    tutorial: number;
    news: number;
  };
}

const BlogCategoryFilter: React.FC<BlogCategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  counts,
}) => {
  const categories = [
    { id: 'all' as const, label: 'All' },
    { id: 'tech' as const, label: 'Tech' },
    { id: 'design' as const, label: 'Design' },
    { id: 'development' as const, label: 'Development' },
    { id: 'tutorial' as const, label: 'Tutorial' },
    { id: 'news' as const, label: 'News' },
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-6 overflow-x-auto pb-px">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          const count = counts[category.id];

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                whitespace-nowrap pb-4 border-b-2 transition-colors
                ${isSelected 
                  ? 'border-black text-black font-semibold' 
                  : 'border-transparent text-gray-500 hover:text-black'
                }
              `}
            >
              {category.label} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
