import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Category } from '../../types';
import { getCategoryColorScheme } from '../../utils';

interface FloatingBackButtonProps {
  to: string;
  label: string;
  category: 'it' | 'electrical';
}

/**
 * 플로팅 백 버튼 컴포넌트
 */
const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({ to, label, category }) => {
  const colorScheme = getCategoryColorScheme(category as Category);

  return (
    <Link
      to={to}
      className={`fixed bottom-8 right-8 z-50 group bg-gradient-to-r ${colorScheme.gradient} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
    >
      <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default FloatingBackButton;
