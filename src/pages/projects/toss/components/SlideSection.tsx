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

interface SlideSectionProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const SlideSection: React.FC<SlideSectionProps> = ({ section, index, sectionsRef }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section
      key={section.id}
      ref={(el) => { sectionsRef.current[index] = el; }}
      className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: isEven ? '#ffffff' : '#f8fafc' }}
    >
      {/* 배경 그라데이션 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${section.color}20, ${section.color}05)`
        }}
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* 텍스트 컨텐츠 */}
        <div className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <ScrollAnimatedSection 
            animationType={isEven ? 'slide-right' : 'slide-left'} 
            delay={1}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span 
                className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase"
                style={{ 
                  backgroundColor: `${section.color}15`,
                  color: section.color,
                  border: `2px solid ${section.color}30`
                }}
              >
                {section.subtitle}
              </span>
              
              <h2 
                className="text-5xl md:text-7xl font-black leading-tight"
                style={{ 
                  background: `linear-gradient(135deg, ${section.color}, ${section.color}80)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {section.title}
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {section.description}
              </p>
            </div>

            {/* 기능 카드들 - 그리드 레이아웃 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.features.map((feature, featureIndex) => (
                <ScrollAnimatedSection 
                  key={featureIndex}
                  animationType="scale" 
                  delay={3 + featureIndex}
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

            {/* CTA 버튼 */}
            <ScrollAnimatedSection animationType="fade-in" delay={8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                  style={{ backgroundColor: section.color }}
                >
                  <span className="relative z-10">시작하기</span>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${section.color}20` }}
                  />
                </button>
                
                <button 
                  className="px-8 py-4 rounded-2xl font-bold border-2 transition-all duration-300 hover:scale-105"
                  style={{ 
                    borderColor: section.color,
                    color: section.color,
                    backgroundColor: `${section.color}05`
                  }}
                >
                  자세히 보기
                </button>
              </div>
            </ScrollAnimatedSection>
          </ScrollAnimatedSection>
        </div>

        {/* 이미지/그래픽 영역 */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <ScrollAnimatedSection 
            animationType={isEven ? 'slide-left' : 'slide-right'} 
            delay={2}
          >
            <div className="relative">
              {/* 메인 컨테이너 */}
              <div 
                className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: `${section.color}10` }}
              >
                {/* 그라데이션 오버레이 */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${section.color}30, ${section.color}10)`
                  }}
                />
                
                {/* 플로팅 카드들 */}
                <div className="absolute inset-0 p-8">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    {[...Array(4)].map((_, i) => (
                      <ScrollAnimatedSection 
                        key={i}
                        animationType="scale" 
                        delay={4 + i}
                        className="group"
                      >
                        <div
                          className="w-full h-full rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                          style={{ backgroundColor: section.color }}
                        >
                          <div className="w-12 h-12 bg-white rounded-xl opacity-90" />
                        </div>
                      </ScrollAnimatedSection>
                    ))}
                  </div>
                </div>

                {/* 애니메이션 요소들 */}
                <div 
                  className="absolute top-8 right-8 w-20 h-20 rounded-full opacity-20 animate-pulse"
                  style={{ backgroundColor: section.color }}
                />
                <div 
                  className="absolute bottom-8 left-8 w-16 h-16 rounded-full opacity-15 animate-bounce"
                  style={{ backgroundColor: section.color }}
                />
              </div>

              {/* 장식 요소들 */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 animate-spin"
                style={{ backgroundColor: section.color }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-5 animate-pulse"
                style={{ backgroundColor: section.color }}
              />
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SlideSection;
