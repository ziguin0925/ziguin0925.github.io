import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BoltIcon, 
  CpuChipIcon,
  LightBulbIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import FloatingBackButton from '../../../components/common/FloatingBackButton';

gsap.registerPlugin(ScrollTrigger);

const SmartGridPage: React.FC = () => {
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
      '.bg-decoration-smartgrid',
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
      icon: CpuChipIcon,
      title: '실시간 모니터링',
      description: 'IoT 센서를 통한 전력 사용량, 전압, 전류, 주파수 등 실시간 데이터 수집 및 분석',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'AI 기반 최적화',
      description: '머신러닝 알고리즘을 활용한 전력 수요 예측 및 자동 최적화 시스템',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: '안전성 보장',
      description: '다중 보안 계층과 실시간 위협 탐지로 전력 시스템의 안전성 확보',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: LightBulbIcon,
      title: '에너지 효율성',
      description: '스마트 배전과 부하 관리로 30% 이상의 에너지 절약 달성',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    { name: 'IoT Sensors', level: 95 },
    { name: 'Machine Learning', level: 88 },
    { name: 'SCADA Systems', level: 92 },
    { name: 'Cloud Computing', level: 85 },
    { name: 'Power Analysis', level: 90 },
    { name: 'Cybersecurity', level: 87 }
  ];

  const achievements = [
    { metric: '30%', label: '에너지 절약', icon: LightBulbIcon },
    { metric: '99.9%', label: '시스템 가동률', icon: CogIcon },
    { metric: '50+', label: '연결된 센서', icon: CpuChipIcon },
    { metric: '24/7', label: '실시간 모니터링', icon: ChartBarIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-decoration-smartgrid absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-smartgrid absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-smartgrid absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero 섹션 */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
                <BoltIcon className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-600">스마트 그리드 시스템</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Smart Grid
                </span>
                <br />
                <span className="text-gray-800">Power Management</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8" />
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                IoT 센서와 AI 알고리즘을 활용한 실시간 전력 모니터링 및 최적화 시스템으로 
                <span className="font-bold text-yellow-600"> 30% 에너지 절약</span>을 달성했습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects?category=electrical"
                  className="px-8 py-4 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300"
                >
                  다른 전기 프로젝트
                </a>
              </div>
            </div>
            
            {/* 프로젝트 이미지 */}
            <div className="hero-content">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Smart Grid System Dashboard"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">실시간 모니터링</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 개요 */}
      <section id="features" className="section-content relative z-10 py-20 px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              핵심 기능
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              전통적인 전력 시스템에 최신 IoT와 AI 기술을 접목하여 
              혁신적인 스마트 그리드 솔루션을 구현했습니다.
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

      {/* 프로젝트 이미지 갤러리 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              프로젝트 갤러리
            </h2>
            <p className="text-gray-600 text-lg">
              시스템 구현 과정과 주요 화면들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="IoT Sensors Installation"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">IoT 센서 설치</h3>
                <p className="text-gray-600">전력선과 변압기에 설치된 다양한 센서들</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Data Analytics Dashboard"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">데이터 분석 대시보드</h3>
                <p className="text-gray-600">실시간 전력 데이터 시각화 및 분석</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Control Room"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">제어실</h3>
                <p className="text-gray-600">24시간 모니터링 및 제어가 가능한 중앙 제어실</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Mobile App Interface"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">모바일 앱</h3>
                <p className="text-gray-600">언제 어디서나 시스템 상태를 확인할 수 있는 모바일 인터페이스</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              사용 기술
            </h2>
            <p className="text-gray-600 text-lg">
              전기공학과 IT 기술의 융합으로 구현된 기술 스택
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

      {/* 프로젝트 성과 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              프로젝트 성과
            </h2>
            <p className="text-gray-600 text-lg">
              혁신적인 기술 융합으로 달성한 주요 성과들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                <achievement.icon className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">{achievement.metric}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 특징 */}
      <section className="section-content relative z-10 py-20 px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              프로젝트 특징
            </h2>
            <p className="text-gray-600 text-lg">
              기존 전력 시스템과 차별화되는 혁신적인 특징들
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">실시간 모니터링</h3>
                  <p className="text-gray-600">IoT 센서를 통한 24/7 실시간 전력 상태 모니터링</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">AI 기반 예측</h3>
                  <p className="text-gray-600">머신러닝을 활용한 전력 수요 예측 및 자동 최적화</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">에너지 절약</h3>
                  <p className="text-gray-600">스마트 배전으로 30% 이상의 에너지 효율성 향상</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">원격 제어</h3>
                  <p className="text-gray-600">모바일 앱을 통한 언제 어디서나 시스템 제어</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">보안 강화</h3>
                  <p className="text-gray-600">다중 보안 계층으로 전력 시스템 보안 강화</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">확장성</h3>
                  <p className="text-gray-600">모듈화된 설계로 향후 기능 확장 용이</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 플로팅 뒤로가기 버튼 */}
      <FloatingBackButton
        to="/projects?category=electrical"
        label="전기 프로젝트로"
        category="electrical"
      />
    </div>
  );
};

export default SmartGridPage;
