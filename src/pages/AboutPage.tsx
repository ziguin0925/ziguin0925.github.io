import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BoltIcon, 
  CpuChipIcon, 
  AcademicCapIcon,
  CodeBracketIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import CTASection from '../components/common/CTASection';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const expertiseRef = useRef(null);

  useEffect(() => {
    // Hero 섹션 애니메이션
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power3.out',
        stagger: 0.2
      }
    );

    // 배경 요소 애니메이션
    gsap.fromTo(
      '.bg-decoration-about',
      { scale: 0.8, opacity: 0, rotation: 45 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0, 
        duration: 2,
        ease: 'power2.out',
        stagger: 0.3
      }
    );

    // 스킬 카드 애니메이션
    gsap.fromTo(
      '.skill-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 전문성 카드 애니메이션
    gsap.fromTo(
      '.expertise-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.expertise-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skills = [
    {
      icon: BoltIcon,
      title: '전기공학',
      description: '전력 시스템, 제어 및 자동화, 전기 설비 설계',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: CpuChipIcon,
      title: 'IT 개발',
      description: 'Full-Stack 개발, 클라우드 아키텍처, DevOps',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: CodeBracketIcon,
      title: '소프트웨어',
      description: 'React, TypeScript, Java, Spring, Python',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const expertise = [
    {
      icon: WrenchScrewdriverIcon,
      title: '통합 솔루션 설계',
      description: '전기 시스템과 IT 인프라를 결합한 스마트 솔루션을 설계하고 구현합니다. IoT, 산업 자동화, 스마트 빌딩 시스템 등 다양한 융합 프로젝트 경험을 보유하고 있습니다.',
      features: ['IoT 시스템 통합', '산업 자동화', 'SCADA 시스템', '스마트 그리드']
    },
    {
      icon: LightBulbIcon,
      title: '혁신적인 문제 해결',
      description: '전기와 IT의 교차점에서 발생하는 복잡한 문제들을 창의적으로 해결합니다. 하드웨어와 소프트웨어를 아우르는 통합적 관점으로 최적의 솔루션을 제공합니다.',
      features: ['시스템 최적화', '에너지 효율화', '자동화 구현', '데이터 분석']
    },
    {
      icon: AcademicCapIcon,
      title: '지속적인 학습',
      description: '빠르게 변화하는 기술 트렌드를 따라가며, 전기공학과 IT 분야의 최신 기술을 지속적으로 학습하고 적용합니다. 이론과 실무를 겸비한 실질적인 전문성을 갖추고 있습니다.',
      features: ['최신 기술 연구', '실무 프로젝트', '기술 문서화', '지식 공유']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-decoration-about absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-about absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-about absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero 섹션 */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-content mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          </div>
          
          <div className="hero-content">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
              안녕하세요, <span className="font-bold text-blue-600">전기공학</span>과{' '}
              <span className="font-bold text-purple-600">IT 개발</span>을 
              <br className="hidden md:block" />
              모두 다루는 <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">융합형 엔지니어</span>입니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              하드웨어와 소프트웨어의 경계를 넘나들며, 전기 시스템과 IT 기술을 통합한 
              혁신적인 솔루션을 만들어갑니다. 두 분야의 전문성을 바탕으로 
              더 나은 디지털 미래를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 스킬 섹션 */}
      <section ref={skillsRef} className="skills-section relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              핵심 역량
            </h2>
            <p className="text-gray-600 text-lg">
              두 가지 전문 분야를 통합한 독특한 강점
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-card group relative bg-gradient-to-br ${skill.bgGradient} rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 전문성 상세 섹션 */}
      <section ref={expertiseRef} className="expertise-section relative z-10 py-20 px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              전문 분야
            </h2>
            <p className="text-gray-600 text-lg">
              전기와 IT의 융합으로 만들어내는 가치
            </p>
          </div>

          <div className="space-y-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <CTASection
        title="함께 혁신적인 프로젝트를 만들어보세요"
        description="전기와 IT의 융합으로 새로운 가능성을 열어갑니다"
        primaryButton={{
          text: "프로젝트 문의",
          href: "#"
        }}
        secondaryButton={{
          text: "이력서 다운로드",
          href: "#"
        }}
      />
    </div>
  );
};

export default AboutPage;

