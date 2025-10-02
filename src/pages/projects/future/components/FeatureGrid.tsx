import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface FeatureGridProps {
  features: Feature[];
  mousePosition: { x: number; y: number };
  title?: string;
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  mousePosition,
  title,
  className = "",
  containerRef
}) => {
  return (
    <section className={`py-32 px-4 relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              mousePosition={mousePosition}
              index={index}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
