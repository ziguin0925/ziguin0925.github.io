import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface FloatingBackButtonProps {
  to: string;
  label: string;
  category: 'it' | 'electrical';
}

const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({ to, label, category }) => {
  const getCategoryColor = (cat: 'it' | 'electrical') => {
    switch (cat) {
      case 'it':
        return 'from-blue-600 to-cyan-600';
      case 'electrical':
        return 'from-yellow-600 to-orange-600';
      default:
        return 'from-gray-600 to-slate-600';
    }
  };

  return (
    <Link
      to={to}
      className={`fixed bottom-8 right-8 z-50 group bg-gradient-to-r ${getCategoryColor(category)} text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
    >
      <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default FloatingBackButton;
