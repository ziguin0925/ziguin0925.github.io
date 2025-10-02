import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  mousePosition: { x: number; y: number };
  index?: number;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  gradient,
  mousePosition,
  index = 0,
  containerRef
}) => {
  // 모바일 디바이스 감지
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768; // 768px 이하는 모바일로 감지
  

  // 화면 중앙을 기준으로 한 상대적 마우스 위치 계산
  const getRelativePosition = () => {
    if (!containerRef?.current || isMobile) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    return {
      x: (mousePosition.x - centerX) / 20, // 더 빠른 반응을 위해 15로 나눔
      y: (mousePosition.y - centerY) / 20
    };
  };

  const relativePos = getRelativePosition();

  return (
    <div
      className="feature-card group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        transform: isMobile 
          ? 'none' 
          : `perspective(1000px) rotateX(${-relativePos.y * 0.4}deg) rotateY(${relativePos.x * 0.4}deg)`,
        transition: isMobile 
          ? 'none' 
          : 'transform 0.1s ease-out' // 부드러운 효과를 위한 트랜지션
      }}
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      
      {/* 호버 시 나타나는 글로우 효과 */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    </div>
  );
};

export default FeatureCard;
