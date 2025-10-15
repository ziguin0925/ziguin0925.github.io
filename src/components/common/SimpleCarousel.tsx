import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getFeaturedProjects } from "../../pages/projects/projectsData";

const projects = getFeaturedProjects();

export default function SimpleCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // 0부터 시작
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // 4초마다 자동으로 다음 슬라이드로 이동 (호버 시 일시정지)
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
    const interval = setInterval(() => {
      nextSlide();
      }, 4000);
    return () => clearInterval(interval);
    }
  }, [isHovered, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // GSAP 애니메이션으로 자연스러운 전환
    gsap.timeline()
      .to('.carousel-slide', {
        duration: 0.4,
        scale: 0.95,
        opacity: 0.7,
        ease: "power2.out"
      })
      .call(() => {
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % projects.length;
          return newIndex;
        });
      })
      .to('.carousel-slide', {
        duration: 0.4,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsTransitioning(false);
        }
      });
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // GSAP 애니메이션으로 자연스러운 전환
    gsap.timeline()
      .to('.carousel-slide', {
        duration: 0.4,
        scale: 0.95,
        opacity: 0.7,
        ease: "power2.out"
      })
      .call(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev === 0 ? projects.length - 1 : prev - 1;
          return newIndex;
        });
      })
      .to('.carousel-slide', {
        duration: 0.4,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsTransitioning(false);
        }
      });
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // GSAP 애니메이션으로 자연스러운 전환
    gsap.timeline()
      .to('.carousel-slide', {
        duration: 0.3,
        scale: 0.95,
        opacity: 0.7,
        ease: "power2.out"
      })
      .call(() => {
        setCurrentIndex(slideIndex);
      })
      .to('.carousel-slide', {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsTransitioning(false);
        }
      });
  };

  useGSAP(() => {
    // 초기 애니메이션
    gsap.fromTo('.carousel-container', 
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    );

    // 미리보기 카드 애니메이션
    gsap.fromTo('.preview-card', 
      { 
        opacity: 0,
        scale: 0.8,
        y: 30
      },
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.5
      }
    );

  }, []);

  return (
    <div 
      className="carousel-container relative w-full max-w-none mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 메인 캐러셀 영역 */}
      <div className="relative h-[700px] overflow-hidden">
        {/* 데스크톱: 양옆 미리보기 영역, 모바일: 단일 슬라이드 */}
        <div className="absolute inset-0 flex">
          {/* 이전 슬라이드 미리보기 (데스크톱만) */}
          {!isMobile && (
            <div 
              className="w-1/3 h-full relative cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={prevSlide}
            >
              {(() => {
                const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
                const prevProject = projects[prevIndex];
                if (!prevProject) return null;
                
                return (
                  <div className="w-full h-full relative opacity-70">
                    <img
                      src={prevProject.image}
                      alt={prevProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${prevProject.gradient} opacity-60`} />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-base font-semibold truncate">{"<- " + prevProject.title}</h4>
                    </div>
                    {/* 클릭 힌트 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 중앙 메인 슬라이드 */}
          <div className={`${isMobile ? 'w-full' : 'w-1/3'} h-full relative z-10`}>
            <div className="carousel-slide w-full h-full relative">
              {(() => {
                const currentProject = projects[currentIndex];
                if (!currentProject) return null;
                
                return (
                  <>
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient} opacity-60 z-20`} />
                    
                    {/* 텍스트 가독성을 위한 어두운 오버레이 */}
                    <div className="absolute inset-0 bg-black/30 z-20" />
                    
                    {/* 미래지향적인 패턴 오버레이 */}
                    <div className="absolute inset-0 opacity-20 z-20">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12" />
                    </div>

                    {/* 콘텐츠 */}
                    <div className="absolute inset-0 z-30 h-full flex items-center justify-center p-4 md:p-8">
                      <div className="text-center text-white max-w-4xl px-8 sm:px-12 md:px-16">
                        <div className="mb-4 md:mb-6">
                        </div>
                        
                        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 drop-shadow-2xl leading-tight text-white">
                          {currentProject.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-12 leading-relaxed max-w-3xl mx-auto text-white/95 font-medium">
                          {currentProject.description}
                        </p>

                        {/* CTA 버튼 */}
                        <button 
                          onClick={() => navigate(currentProject.link)}
                          className="group relative px-6 py-3 md:px-10 md:py-5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm md:text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                          <span className="relative z-10">프로젝트 살펴보기</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* 다음 슬라이드 미리보기 (데스크톱만) */}
          {!isMobile && (
            <div 
              className="w-1/3 h-full relative cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={nextSlide}
            >
              {(() => {
                const nextIndex = (currentIndex + 1) % projects.length;
                const nextProject = projects[nextIndex];
                if (!nextProject) return null;
                
                return (
                  <div className="w-full h-full relative opacity-70">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${nextProject.gradient} opacity-60`} />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 right-4 text-white">
                      <h4 className="text-base font-semibold truncate">{nextProject.title + " ->"}</h4>
                    </div>
                    {/* 클릭 힌트 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
      </div>

      {/* 모바일 네비게이션 버튼 */}
      {isMobile && (
        <>
      <button
        onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-30"
      >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
      </button>
          
      <button
        onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-30"
      >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
      </button>
        </>
      )}

      </div>


      {/* 진행률 바 */}
      <div className="mt-8 w-full max-w-md mx-auto">
        <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative"
            style={{ 
              width: `${((currentIndex + 1) / projects.length) * 100}%` 
            }}
          >
            {/* 글로우 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-50" />
          </div>
        </div>
      </div>

      {/* 프로젝트 카운터 */}
      {/* <div className="mt-6 text-center">
        <span className="text-white/70 text-sm font-medium">
          {currentIndex > projects.length ? 1 : currentIndex === 0 ? projects.length : currentIndex} / {projects.length}
        </span>
      </div> */}
    </div>
  );
}