import React from 'react';
import ScrollAnimatedSection from '../../pages/projects/toss/components/ScrollAnimatedSection';

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  features: string[];
}

interface FadeSectionProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const FadeSection: React.FC<FadeSectionProps> = ({ section, index, sectionsRef }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section
      key={section.id}
      ref={(el) => { sectionsRef.current[index] = el; }}
      className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: isEven ? '#ffffff' : '#f8fafc' }}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${section.color}20 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${section.color}15 0%, transparent 50%)`
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ScrollAnimatedSection animationType="fade-in" delay={1}>
          <div className="space-y-8">
            {/* 서브타이틀 */}
            <div className="flex justify-center">
              <span 
                className="px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase border-2"
                style={{ 
                  backgroundColor: `${section.color}10`,
                  color: section.color,
                  borderColor: `${section.color}30`
                }}
              >
                {section.subtitle}
              </span>
            </div>

            {/* 메인 타이틀 */}
            <h2 
              className="text-6xl md:text-8xl font-black leading-tight"
              style={{ 
                background: `linear-gradient(135deg, ${section.color}, ${section.color}80)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {section.title}
            </h2>

            {/* 설명 */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {section.description}
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* 기능 카드들 - 원형 레이아웃 */}
        <div className="mt-20 relative">
          <ScrollAnimatedSection animationType="fade-in" delay={3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {section.features.map((feature, featureIndex) => (
                <ScrollAnimatedSection 
                  key={featureIndex}
                  animationType="scale" 
                  delay={4 + featureIndex}
                  className="group"
                >
                  <div 
                    className="p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-110 hover:shadow-2xl group-hover:border-opacity-100 relative overflow-hidden"
                    style={{ 
                      backgroundColor: `${section.color}05`,
                      borderColor: `${section.color}20`
                    }}
                  >
                    {/* 호버 효과 */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${section.color}10, ${section.color}05)`
                      }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div 
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: section.color }}
                      >
                        <div className="w-8 h-8 bg-white rounded-lg opacity-90" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{feature}</h3>
                    </div>
                  </div>
                </ScrollAnimatedSection>
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* CTA 버튼들 */}
        <ScrollAnimatedSection animationType="fade-in" delay={8}>
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
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
              더 알아보기
            </button>
          </div>
        </ScrollAnimatedSection>

        {/* 장식 요소들 */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: section.color }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-15 animate-bounce" style={{ backgroundColor: section.color }} />
        <div className="absolute top-1/2 left-5 w-16 h-16 rounded-full opacity-5 animate-spin" style={{ backgroundColor: section.color }} />
      </div>
    </section>
  );
};

export default FadeSection;

