import React from 'react';
import { CodeBracketIcon, BoltIcon } from '@heroicons/react/24/outline';

interface CategoryFilterProps {
  selectedCategory: 'it' | 'electrical' | 'all';
  onCategoryChange: (category: 'it' | 'electrical' | 'all') => void;
  counts: {
    all: number;
    it: number;
    electrical: number;
  };
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  counts
}) => {
  const categories = [
    {
      id: 'all' as const,
      name: '전체',
      icon: null,
      count: counts.all,
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-50 to-slate-50'
    },
    {
      id: 'it' as const,
      name: 'IT 프로젝트',
      icon: CodeBracketIcon,
      count: counts.it,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'electrical' as const,
      name: '전기 프로젝트',
      icon: BoltIcon,
      count: counts.electrical,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
            selectedCategory === category.id
              ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
              : `bg-gradient-to-r ${category.bgGradient} text-gray-700 border-2 border-transparent hover:border-gray-300`
          }`}
        >
          <div className="flex items-center gap-2">
            {category.icon && (
              <category.icon className="w-5 h-5" />
            )}
            <span>{category.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}>
              {category.count}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
