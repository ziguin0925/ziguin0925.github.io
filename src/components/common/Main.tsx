import React, { forwardRef, Ref, useImperativeHandle, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleCarousel from "./SimpleCarousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);


interface FadeInProps {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
}


// 🔹 forwardRef는 Tween만 받도록 (null 제거)
const FadeIn = forwardRef<GSAPTween, FadeInProps>(
  ({ children, stagger = 0, y = 0 }, ref: Ref<GSAPTween>) => {
    const el = useRef<HTMLSpanElement | null>(null);
    const animation = useRef<GSAPTween>(null);

    useGSAP(() => {
      if (el.current) {
        animation.current = gsap.from(el.current.children, {
          duration: 2,
          opacity: 0,
          stagger,
          y
        }
        );
      }
    });

    // Tween이 항상 존재한다고 가정
    useImperativeHandle(ref, () => animation.current!);

    return <span ref={el}>{children}</span>;
  }
);


const Main = () => {
  const animation = useRef(null);
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const navigate = useNavigate();

  useGSAP(() => {
    // 배경 요소들 애니메이션
    gsap.fromTo('.bg-decoration', 
      { 
        opacity: 0,
        scale: 0.8,
        rotation: 45
      },
      { 
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.3
      }
    );

    // 메인 제목 애니메이션
    gsap.fromTo('.main-title', 
      { 
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.5
      }
    );

    // 부제목 애니메이션
    gsap.fromTo('.main-subtitle', 
      { 
        opacity: 0,
        y: 50,
        rotationX: 15
      },
      { 
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 1
      }
    );

    // 기술 태그들 애니메이션
    gsap.fromTo('.tech-tag', 
      { 
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1.5
      }
    );

    // CTA 버튼들 애니메이션
    gsap.fromTo('.cta-buttons', 
      { 
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 2
      }
    );

    // 통계 섹션 애니메이션
    gsap.fromTo('.stat-item', 
      { 
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      { 
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 2.5
      }
    );

    // 프로젝트 섹션 애니메이션
    gsap.fromTo('.project-section', 
      { 
        opacity: 0,
        y: 100
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.project-section',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // 호버 효과를 위한 애니메이션
    gsap.set('.hover-lift', {
      transformOrigin: "center center"
    });

  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-decoration absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl pt-32 pb-32 sm:pb-48 lg:pb-56">
          <div className="text-center">
            <FadeIn stagger={0.2} y={50} ref={animation}>
              {/* 메인 제목 */}
              <div className="main-title mb-8">
                <h1 className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight pb-4 break-words" 
                    style={{ fontSize: 'clamp(2rem, 9vw, 6.5rem)' }}>
                  JeongRyongWoo
                </h1>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>

              {/* 부제목 */}
              <p className="main-subtitle mt-8 font-medium text-gray-700 leading-relaxed max-w-3xl mx-auto" 
                 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                혁신적인 기술과 창의적인 아이디어로<br />
                <span className="text-blue-600 font-semibold">더 나은 디지털 경험</span>을 제공합니다
              </p>

              {/* 특징 태그들 */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {['React', 'TypeScript', 'Java', 'Spring'].map((tech, index) => (
                  <span
                    key={tech}
                    className="tech-tag px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover-lift"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA 버튼들 */}
              <div className="cta-buttons mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/started"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">시작하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <Link 
                  to="/future" 
                  className="group px-8 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  미래 페이지 보기
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>

              {/* 통계 섹션 */}
              <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { number: "1+", label: "년 경험" },
                  { number: "10+", label: "프로젝트" },
                ].map((stat, index) => (
                  <div key={index} className="stat-item text-center group">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 개선된 캐러셀 섹션 */}
        <div className="project-section mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 프로젝트</h2>
            <p className="text-gray-600">다양한 기술 스택으로 구현한 프로젝트들을 확인해보세요</p>
          </div>
            <SimpleCarousel />
        </div>
      </div>
    </div>
  );
};

export default Main;