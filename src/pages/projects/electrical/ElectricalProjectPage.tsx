import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BoltIcon, 
  CpuChipIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const ElectricalProjectPage: React.FC = () => {
  const heroRef = useRef(null);

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
      '.bg-decoration-electrical',
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

    // 섹션 애니메이션
    gsap.fromTo(
      '.section-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.section-content',
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

  const features = [
    {
      icon: BoltIcon,
      title: '스마트 그리드 시스템',
      description: 'IoT 센서와 AI 알고리즘을 활용한 실시간 전력 모니터링 및 최적화 시스템',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CpuChipIcon,
      title: '자동화 제어 시스템',
      description: 'PLC와 HMI를 연동한 산업용 자동화 제어 시스템 설계 및 구현',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: LightBulbIcon,
      title: 'LED 조명 제어',
      description: 'DALI 프로토콜 기반의 스마트 LED 조명 제어 및 에너지 절약 시스템',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: '예방 정비 시스템',
      description: '진동 센서와 온도 센서를 활용한 전기 장비 예방 정비 및 고장 예측 시스템',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const technologies = [
    { name: 'PLC Programming', level: 90 },
    { name: 'SCADA Systems', level: 85 },
    { name: 'HMI Design', level: 80 },
    { name: 'IoT Integration', level: 88 },
    { name: 'Power Analysis', level: 92 },
    { name: 'Safety Systems', level: 87 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-decoration-electrical absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-electrical absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-electrical absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero 섹션 */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="hero-content mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
              <BoltIcon className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600">전기공학 프로젝트</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Smart Electrical
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-8" />
          </div>
          
          <div className="hero-content">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              전기공학과 IT 기술의 융합으로 구현한<br className="hidden md:block" />
              <span className="font-bold text-yellow-600">스마트 전력 관리 시스템</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              IoT, AI, 자동화 기술을 활용하여 전력 효율성을 극대화하고 
              안전한 전기 시스템을 구축하는 혁신적인 프로젝트입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 프로젝트 개요 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              프로젝트 개요
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              전통적인 전기 시스템에 최신 IT 기술을 접목하여 
              더욱 효율적이고 안전한 전력 관리 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              사용 기술
            </h2>
            <p className="text-gray-600 text-lg">
              전기공학과 IT 분야의 전문 기술을 활용합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-800">{tech.name}</span>
                  <span className="text-sm font-medium text-gray-600">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 결과 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              프로젝트 성과
            </h2>
            <p className="text-gray-600 text-lg">
              혁신적인 기술 융합으로 달성한 주요 성과들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <ChartBarIcon className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">30%</div>
              <div className="text-gray-600">에너지 절약</div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <CogIcon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600">자동화율</div>
            </div>
            
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <BoltIcon className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-800 mb-2">99.9%</div>
              <div className="text-gray-600">시스템 안정성</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              전기공학과 IT의 융합 프로젝트
            </h2>
            <p className="text-yellow-100 text-lg mb-8">
              더 많은 혁신적인 전기 프로젝트를 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects?category=electrical"
                className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                전기 프로젝트 보기
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                전체 프로젝트
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalProjectPage;
