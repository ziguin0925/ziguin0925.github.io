import React from 'react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
}

interface FeatureSectionProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ section, index, sectionsRef }) => {
  return (
    <section
      key={section.id}
      ref={(el) => { sectionsRef.current[index] = el; }}
      className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 텍스트 컨텐츠 */}
        <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="space-y-4">
            <ScrollAnimatedSection animationType="fade-in" delay={1}>
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{ 
                  backgroundColor: `${section.color}15`,
                  color: section.color 
                }}
              >
                {section.subtitle}
              </span>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'} delay={2}>
              <h2 className="section-title text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {section.title}
              </h2>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="fade-in" delay={3}>
              <p className="text-xl text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </ScrollAnimatedSection>
          </div>

          {/* 기능 카드들 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.features.map((feature, featureIndex) => (
              <ScrollAnimatedSection 
                key={featureIndex}
                animationType="scale" 
                delay={4 + featureIndex}
                className="feature-card bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: section.color }}
                  />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="pt-4">
            <ScrollAnimatedSection animationType="fade-in" delay={8}>
              <button 
                className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: section.color }}
              >
                시작하기
              </button>
            </ScrollAnimatedSection>
          </div>
        </div>

        {/* 이미지/그래픽 영역 */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          <ScrollAnimatedSection animationType="rotate" delay={6}>
            <div 
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden"
              style={{ backgroundColor: `${section.color}10` }}
            >
              {/* 그라데이션 배경 */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${section.color}20, ${section.color}05)`
                }}
              />
              
              {/* 플로팅 요소들 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: section.color }}
                    >
                      <div className="w-8 h-8 bg-white rounded-lg opacity-80" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 애니메이션 원 */}
              <div 
                className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: section.color }}
              />
              <div 
                className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full opacity-15 animate-bounce"
                style={{ backgroundColor: section.color }}
              />
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

