import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureGrid from './components/FeatureGrid';
gsap.registerPlugin(ScrollTrigger);

const FuturePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 파티클 생성
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #00d4ff, #ff00ff);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.8;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: float ${3 + Math.random() * 4}s linear infinite;
      `;
      
      if (particlesRef.current) {
        particlesRef.current.appendChild(particle);
      }

      // 파티클 제거
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    };

    // 파티클 생성 간격
    const interval = setInterval(createParticle, 200);
    
    return () => clearInterval(interval);
  }, []);

  // 마우스 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(() => {
    // 메인 컨테이너 애니메이션
    gsap.fromTo('.hero-section', 
      { 
        opacity: 0,
        scale: 0.8,
        rotationY: 45
      },
      { 
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 2,
        ease: "power3.out"
      }
    );

    // 제목 애니메이션
    gsap.fromTo('.hero-title', 
      { 
        opacity: 0,
        y: 100,
        skewY: 10
      },
      { 
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // 부제목 애니메이션
    gsap.fromTo('.hero-subtitle', 
      { 
        opacity: 0,
        y: 50,
        rotationX: 90
      },
      { 
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 1
      }
    );

    // 버튼들 애니메이션
    gsap.fromTo('.cta-buttons', 
      { 
        opacity: 0,
        scale: 0.5,
        rotation: 180
      },
      { 
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 1.5
      }
    );

    // 카드들 스태거 애니메이션
    gsap.fromTo('.feature-card', 
      { 
        opacity: 0,
        y: 100,
        rotationX: 45,
        scale: 0.8
      },
      { 
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        delay: 2
      }
    );

    // 스크롤 트리거 애니메이션
    gsap.utils.toArray('.scroll-section').forEach((section: any, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0,
          y: 150,
          scale: 0.9
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // 3D 회전 효과
    gsap.to('.floating-element', {
      rotationY: 360,
      rotationX: 20,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden relative">
      {/* 배경 파티클 */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0" />
      
      {/* 배경 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      
      {/* 메인 히어로 섹션 */}
      <section className="hero-section relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* 메인 제목 */}
          <h1 className="hero-title font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight break-words" 
              style={{ fontSize: 'clamp(2.5rem, 13vw, 6rem)' }}>
            미래의 디지털
            <br />
            <span className="block mt-4" style={{ fontSize: 'clamp(2rem, 6.5vw, 5rem)' }}>경험</span>
          </h1>
          
          {/* 부제목 */}
          <p className="hero-subtitle text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
            혁신적인 기술과 아름다운 디자인이 만나<br />
            새로운 차원의 사용자 경험을 제공합니다
          </p>
          
          {/* CTA 버튼들 */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">시작하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* 플로팅 3D 요소들 */}
      <div className="floating-element absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-sm" />
      <div className="floating-element absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-30 blur-sm" />
      <div className="floating-element absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-25 blur-sm" />

      {/* 기능 섹션 */}
      <FeatureGrid
        features={[
          {
            title: "AI 기반 분석",
            description: "인공지능을 활용한 실시간 데이터 분석과 예측",
            icon: "🤖",
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            title: "3D 인터랙션",
            description: "몰입감 있는 3차원 사용자 인터페이스",
            icon: "🎮",
            gradient: "from-purple-500 to-pink-500"
          },
          {
            title: "실시간 협업",
            description: "전 세계 어디서나 실시간으로 협업 가능",
            icon: "🌐",
            gradient: "from-green-500 to-teal-500"
          },
          {
            title: "자동화 워크플로우",
            description: "반복 작업을 자동화하여 효율성 극대화",
            icon: "⚡",
            gradient: "from-yellow-500 to-orange-500"
          },
          {
            title: "보안 강화",
            description: "최첨단 암호화 기술로 데이터 보호",
            icon: "🔒",
            gradient: "from-red-500 to-pink-500"
          },
          {
            title: "클라우드 통합",
            description: "모든 디바이스에서 동기화되는 클라우드 환경",
            icon: "☁️",
            gradient: "from-indigo-500 to-purple-500"
          }
        ]}
        mousePosition={mousePosition}
        title="혁신적인 기능들"
        className="scroll-section"
        containerRef={containerRef}
      />

      {/* 통계 섹션 */}
      <section className="scroll-section py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            놀라운 성과
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "가동률" },
              { number: "10M+", label: "사용자" },
              { number: "50+", label: "국가" },
              { number: "24/7", label: "지원" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="scroll-section py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            미래를 함께 만들어가세요
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            지금 바로 시작하여 혁신적인 디지털 경험의 일부가 되어보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">무료로 시작하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold text-xl rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              데모 보기
            </button>
          </div>
        </div>
      </section>

      {/* CSS 애니메이션 */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
              opacity: 1;
            }
          }
          
          .particle {
            animation: float 3s linear infinite;
          }
          
          .hero-section {
            background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
          }
        `
      }} />
    </div>
  );
};

export default FuturePage;
