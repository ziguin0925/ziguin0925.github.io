import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../../types';
import { createButtonStyle } from '../../utils';

/**
 * 재사용 가능한 버튼 컴포넌트
 */
const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const buttonClass = createButtonStyle(variant, size);
  const combinedClass = `${buttonClass} ${className}`;

  // 외부 링크인 경우
  if (href && href.startsWith('http')) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  // 내부 링크인 경우
  if (href) {
    return (
      <Link to={href} className={combinedClass} onClick={onClick}>
        {text}
      </Link>
    );
  }

  // 일반 버튼인 경우
  return (
    <button className={combinedClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

