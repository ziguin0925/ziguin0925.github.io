import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SectionFactory from './components/SectionFactory';
import ScrollAnimatedSection from './components/ScrollAnimatedSection';
import { useIntersectionObserver, useScroll } from '../../../hooks';
import { SectionData } from '../../../types';

// 샘플 섹션 데이터
const SECTIONS_DATA: SectionData[] = [
  {
    id: 'home',
    title: '홈',
    subtitle: '금융의 시작',
    description: '모든 금융 서비스를 한 곳에서',
    features: ['간편한 계좌 관리', '실시간 알림', '스마트 분석'],
    color: 'blue'
  },
  {
    id: 'spending',
    title: '소비',
    subtitle: '똑똑한 소비',
    description: '소비 패턴 분석과 관리',
    features: ['자동 분류', '예산 설정', '소비 리포트'],
    color: 'purple'
  },
  {
    id: 'transfer',
    title: '송금',
    subtitle: '빠른 송금',
    description: '간편하고 안전한 송금',
    features: ['즉시 송금', '예약 송금', '연락처 송금'],
    color: 'green'
  },
  {
    id: 'loan',
    title: '대출',
    subtitle: '맞춤 대출',
    description: '나에게 맞는 대출 상품',
    features: ['한도 조회', '금리 비교', '빠른 승인'],
    color: 'orange'
  },
  {
    id: 'credit',
    title: '신용',
    subtitle: '신용 관리',
    description: '신용 점수 관리',
    features: ['신용 점수 조회', '개선 팁', '신용카드 추천'],
    color: 'red'
  },
  {
    id: 'investment',
    title: '투자',
    subtitle: '스마트 투자',
    description: '투자를 쉽고 간편하게',
    features: ['자동 투자', '포트폴리오', '투자 정보'],
    color: 'indigo'
  },
  {
    id: 'payment',
    title: '결제',
    subtitle: '간편 결제',
    description: '어디서나 간편하게',
    features: ['QR 결제', '카드 등록', '결제 내역'],
    color: 'pink'
  }
];

const StartedPage: React.FC = () => {
  const { scrollY, isScrollingDown } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionsRef.current.findIndex(ref => ref === entry.target);
        if (index !== -1) {
          setCurrentSection(index);
        }
      }
    });
  };

  const { observe, unobserve } = useIntersectionObserver(handleIntersection);

  useEffect(() => {
    sectionsRef.current.forEach((ref) => {
      if (ref) observe(ref);
    });

    return () => {
      sectionsRef.current.forEach((ref) => {
        if (ref) unobserve(ref);
      });
    };
  }, [observe, unobserve]);

  useGSAP(() => {
    // 초기 애니메이션
    gsap.fromTo('.section', 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3
      }
    );

    // 텍스트 애니메이션
    gsap.fromTo('.section-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      }
    );

    // 카드 애니메이션
    gsap.fromTo('.feature-card',
      {
        opacity: 0,
        y: 30,
        rotationX: 15
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1
      }
    );
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600"> 예시 </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['홈', '소비', '송금', '대출', '신용', '투자', '결제'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentSection === index 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="pt-16">
        {SECTIONS_DATA.map((section, index) => {
          // 각 섹션마다 다른 스타일 적용
          const variants = ['default', 'slide', 'fade', 'card', 'hero'] as const;
          const variant = variants[index % variants.length];
          
          return (
            <SectionFactory
            key={section.id}
              section={section}
              index={index}
              sectionsRef={sectionsRef}
              variant={variant}
            />
          );
        })}
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimatedSection animationType="fade-in" delay={1}>
              <div className="text-3xl font-bold mb-4">예시</div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="fade-in" delay={2}>
              <p className="text-gray-400 mb-8">
                모든 금융 서비스를 한 곳에서, 쉽고 편리하게
              </p>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="fade-in" delay={3}>
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">고객센터</a>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartedPage;
