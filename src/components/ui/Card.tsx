import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../../types';
import { createCardStyle, cn } from '../../utils';

/**
 * 재사용 가능한 카드 컴포넌트
 */
const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  href,
  gradient = 'from-blue-600 to-purple-600',
  className = '',
}) => {
  const cardClass = createCardStyle('hover');
  const combinedClass = cn(cardClass, className);

  const content = (
    <>
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40`} />
        </div>
      )}
      <div className={image ? 'p-6 pt-0' : ''}>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`${combinedClass} group block`}>
        {content}
      </Link>
    );
  }

  return <div className={combinedClass}>{content}</div>;
};

export default Card;

