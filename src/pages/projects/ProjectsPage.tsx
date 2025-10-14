import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  RocketLaunchIcon, 
  CodeBracketIcon,
  SparklesIcon,
  FolderOpenIcon
} from '@heroicons/react/24/outline';
import ProjectCard from './components/ProjectCard';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import CTASection from '../../components/common/CTASection';
import { getProjectStats, getProjectsPaginated } from './projectsData';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage: React.FC = () => {
  const heroRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<'it' | 'electrical' | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const stats = getProjectStats();
  const { projects, pagination } = getProjectsPaginated(selectedCategory, currentPage, itemsPerPage);

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
      '.bg-decoration-projects',
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

    // 프로젝트 카드 애니메이션
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // 통계 카운터 애니메이션
    gsap.fromTo(
      '.stat-card',
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]); // projects가 변경될 때마다 애니메이션 재실행

  // 카테고리 변경 시 페이지를 1로 리셋
  const handleCategoryChange = (category: 'it' | 'electrical' | 'all') => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지네이션 시에는 스크롤 위치 유지
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-decoration-projects absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-projects absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="bg-decoration-projects absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Hero 섹션 */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="hero-content mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <RocketLaunchIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">포트폴리오</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          </div>
          
          <div className="hero-content">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              다양한 기술 스택과 창의적인 아이디어로 구현한<br className="hidden md:block" />
              <span className="font-bold text-blue-600">프로젝트들을 확인해보세요</span>
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              각 프로젝트는 최신 웹 기술과 모던한 디자인 패턴을 적용하여 
              최상의 사용자 경험을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="stats-section relative z-10 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
              <FolderOpenIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {stats.total}
            </div>
            <div className="text-gray-600 font-medium">총 프로젝트</div>
          </div>
          
          <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
            <CodeBracketIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              {stats.it}
            </div>
            <div className="text-gray-600 font-medium">IT 프로젝트</div>
          </div>
          
          <div className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg text-center">
            <SparklesIcon className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
              {stats.electrical}
            </div>
            <div className="text-gray-600 font-medium">전기 프로젝트</div>
          </div>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="relative z-10 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            counts={{
              all: stats.total,
              it: stats.it,
              electrical: stats.electrical
            }}
          />
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section className="projects-grid relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {selectedCategory === 'all' ? '전체 프로젝트' : 
               selectedCategory === 'it' ? 'IT 프로젝트' : '전기 프로젝트'}
            </h2>
            <p className="text-gray-600 text-lg">
              {pagination.totalItems}개의 프로젝트 중 {pagination.currentPage}페이지
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* 빈 상태 (프로젝트가 없을 때) */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <FolderOpenIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                {selectedCategory === 'all' ? '아직 프로젝트가 없습니다.' :
                 selectedCategory === 'it' ? 'IT 프로젝트가 없습니다.' : '전기 프로젝트가 없습니다.'}
              </p>
              <p className="text-gray-400 mt-2">곧 멋진 프로젝트들이 추가될 예정입니다!</p>
            </div>
          )}

          {/* 페이지네이션 */}
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            hasNextPage={pagination.hasNextPage}
            hasPrevPage={pagination.hasPrevPage}
          />
        </div>
      </section>

      {/* CTA 섹션 */}
      <CTASection
        title="새로운 프로젝트 아이디어가 있나요?"
        description="함께 혁신적인 프로젝트를 만들어보세요"
        primaryButton={{
          text: "프로젝트 문의",
          href: "#"
        }}
        secondaryButton={{
          text: "GitHub 보기",
          href: "#"
        }}
      />
    </div>
  );
};

export default ProjectsPage;

