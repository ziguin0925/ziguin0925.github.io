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

interface HeroSectionProps {
  section: Feature;
  index: number;
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section, index, sectionsRef }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section
      key={section.id}
      ref={(el) => { sectionsRef.current[index] = el; }}
      className="section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: isEven ? '#ffffff' : '#f8fafc' }}
    >
      {/* 동적 배경 */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${section.color}30 0%, transparent 50%), radial-gradient(circle at 70% 80%, ${section.color}20 0%, transparent 50%)`
          }}
        />
        
        {/* 플로팅 도형들 */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: section.color }}
        />
        <div 
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-15 animate-bounce"
          style={{ backgroundColor: section.color }}
        />
        <div 
          className="absolute top-1/2 left-10 w-16 h-16 rounded-full opacity-10 animate-spin"
          style={{ backgroundColor: section.color }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* 메인 콘텐츠 */}
        <ScrollAnimatedSection animationType="fade-in" delay={1}>
          <div className="space-y-12">
            {/* 서브타이틀 */}
            <div className="flex justify-center">
              <span 
                className="px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase border-2 shadow-lg"
                style={{ 
                  backgroundColor: `${section.color}15`,
                  color: section.color,
                  borderColor: `${section.color}30`
                }}
              >
                {section.subtitle}
              </span>
            </div>

            {/* 메인 타이틀 */}
            <h2 
              className="text-7xl md:text-9xl font-black leading-tight"
              style={{ 
                background: `linear-gradient(135deg, ${section.color}, ${section.color}80, ${section.color}60)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {section.title}
            </h2>

            {/* 설명 */}
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-5xl mx-auto font-light">
              {section.description}
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* 기능 카드들 - 원형 배치 */}
        <ScrollAnimatedSection animationType="fade-in" delay={3}>
          <div className="mt-20 relative">
            {/* 중앙 원 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dashed opacity-30" style={{ borderColor: section.color }} />
            
            {/* 기능 카드들 */}
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
                      backgroundColor: `${section.color}08`,
                      borderColor: `${section.color}25`
                    }}
                  >
                    {/* 호버 효과 */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${section.color}15, ${section.color}08)`
                      }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <div 
                        className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: section.color }}
                      >
                        <div className="w-10 h-10 bg-white rounded-xl opacity-90" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{feature}</h3>
                      <p className="text-sm text-gray-600">자세히 보기</p>
                    </div>
                  </div>
                </ScrollAnimatedSection>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* CTA 버튼들 */}
        <ScrollAnimatedSection animationType="fade-in" delay={8}>
          <div className="mt-20 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              className="px-12 py-6 rounded-3xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group text-lg"
              style={{ backgroundColor: section.color }}
            >
              <span className="relative z-10">지금 시작하기</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${section.color}20` }}
              />
            </button>
            
            <button 
              className="px-12 py-6 rounded-3xl font-bold border-2 transition-all duration-300 hover:scale-105 text-lg"
              style={{ 
                borderColor: section.color,
                color: section.color,
                backgroundColor: `${section.color}08`
              }}
            >
              데모 체험하기
            </button>
          </div>
        </ScrollAnimatedSection>

        {/* 통계 섹션 */}
        <ScrollAnimatedSection animationType="fade-in" delay={10}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "99%", label: "만족도" },
              { number: "1M+", label: "사용자" },
              { number: "24/7", label: "지원" }
            ].map((stat, statIndex) => (
              <div key={statIndex} className="text-center group">
                <div 
                  className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: section.color }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;

