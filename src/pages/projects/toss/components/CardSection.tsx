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

interface CardSectionProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const CardSection: React.FC<CardSectionProps> = ({ section, index, sectionsRef }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section
      key={section.id}
      ref={(el) => { sectionsRef.current[index] = el; }}
      className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: isEven ? '#ffffff' : '#f8fafc' }}
    >
      {/* 배경 그라데이션 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(45deg, ${section.color}10, ${section.color}05, ${section.color}15)`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 헤더 섹션 */}
        <ScrollAnimatedSection animationType="fade-in" delay={1}>
          <div className="text-center mb-16">
            <span 
              className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase mb-6"
              style={{ 
                backgroundColor: `${section.color}15`,
                color: section.color,
                border: `2px solid ${section.color}30`
              }}
            >
              {section.subtitle}
            </span>
            
            <h2 
              className="text-5xl md:text-7xl font-black leading-tight mb-6"
              style={{ 
                background: `linear-gradient(135deg, ${section.color}, ${section.color}80)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {section.title}
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {section.description}
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* 메인 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 왼쪽 카드 - 메인 기능 */}
          <ScrollAnimatedSection 
            animationType="slide-right" 
            delay={2}
            className="lg:col-span-2"
          >
            <div 
              className="h-96 rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500"
              style={{ backgroundColor: section.color }}
            >
              {/* 배경 패턴 */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)`
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">주요 기능</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-lg" />
                  </div>
                  <span className="text-white font-semibold">자세히 보기</span>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* 오른쪽 카드들 */}
          <div className="space-y-8">
            {section.features.slice(0, 2).map((feature, featureIndex) => (
              <ScrollAnimatedSection 
                key={featureIndex}
                animationType="slide-left" 
                delay={3 + featureIndex}
                className="group"
              >
                <div 
                  className="h-40 rounded-2xl p-6 relative overflow-hidden hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: `${section.color}10` }}
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div 
                        className="w-8 h-8 rounded-lg mb-3"
                        style={{ backgroundColor: section.color }}
                      />
                      <h4 className="text-lg font-bold text-gray-800">{feature}</h4>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">더보기</span>
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: section.color }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>

        {/* 하단 기능 카드들 */}
        <ScrollAnimatedSection animationType="fade-in" delay={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.features.map((feature, featureIndex) => (
              <ScrollAnimatedSection 
                key={featureIndex}
                animationType="scale" 
                delay={6 + featureIndex}
                className="group"
              >
                <div 
                  className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:border-opacity-100"
                  style={{ 
                    backgroundColor: `${section.color}05`,
                    borderColor: `${section.color}20`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: section.color }}
                    />
                    <span className="text-gray-800 font-semibold">{feature}</span>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* CTA 섹션 */}
        <ScrollAnimatedSection animationType="fade-in" delay={8}>
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="px-10 py-5 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                style={{ backgroundColor: section.color }}
              >
                <span className="relative z-10">시작하기</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${section.color}20` }}
                />
              </button>
              
              <button 
                className="px-10 py-5 rounded-2xl font-bold border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: section.color,
                  color: section.color,
                  backgroundColor: `${section.color}05`
                }}
              >
                데모 보기
              </button>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* 장식 요소들 */}
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: section.color }} />
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-5 animate-bounce" style={{ backgroundColor: section.color }} />
      </div>
    </section>
  );
};

export default CardSection;

