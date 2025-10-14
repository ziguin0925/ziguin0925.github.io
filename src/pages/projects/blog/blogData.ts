/**
 * 블로그 데이터 관리
 */

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  category: 'tech' | 'design' | 'development' | 'tutorial' | 'news';
  image?: string;
  featured?: boolean;
  gradient: string;
}

// 고정된 작성자 정보
export const BLOG_AUTHOR = {
  name: 'Your Name', // 여기에 실제 이름을 입력하세요
  avatar: '👨‍💻'
};

export const blogPosts: BlogPost[] = [
  {
    id: 'react-performance-optimization',
    title: 'React 성능 최적화 완벽 가이드',
    excerpt: 'React 애플리케이션의 성능을 극대화하는 실전 테크닉과 베스트 프랙티스를 알아봅니다.',
    content: `# React 성능 최적화 완벽 가이드

React 애플리케이션의 성능을 최적화하는 것은 사용자 경험을 향상시키는 핵심 요소입니다.

## 1. React.memo 활용하기

불필요한 리렌더링을 방지하기 위해 React.memo를 활용하세요.

\`\`\`jsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 2. useMemo와 useCallback

계산 비용이 큰 작업은 useMemo로, 함수는 useCallback으로 메모이제이션하세요.

## 3. Code Splitting

React.lazy와 Suspense를 활용한 코드 분할로 초기 로딩 시간을 단축하세요.

## 4. Virtual Scrolling

긴 리스트는 react-window나 react-virtualized를 사용하세요.

## 결론

이러한 최적화 기법들을 적절히 활용하면 React 애플리케이션의 성능을 크게 향상시킬 수 있습니다.`,
    date: '2024-10-15',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    category: 'tech',
    featured: true,
    gradient: 'from-gray-900 to-gray-700'
  },
  {
    id: 'modern-css-techniques',
    title: '2024년 최신 CSS 기법',
    excerpt: 'Container Queries, :has() 선택자, CSS Grid의 subgrid 등 최신 CSS 기능들을 소개합니다.',
    content: `# 2024년 최신 CSS 기법

CSS는 계속해서 진화하고 있습니다. 최신 CSS 기능들을 알아봅시다.

## Container Queries

요소의 컨테이너 크기에 따라 스타일을 조정할 수 있습니다.

\`\`\`css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card { 
    display: grid; 
  }
}
\`\`\`

## :has() 선택자

부모 선택자처럼 동작하는 강력한 선택자입니다.

## CSS Grid Subgrid

중첩된 그리드 레이아웃을 더 쉽게 구현할 수 있습니다.

## 결론

이러한 최신 CSS 기능들을 활용하면 더 우아하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.`,
    date: '2024-10-12',
    tags: ['CSS', 'Design', 'Frontend', 'Web'],
    category: 'design',
    featured: true,
    gradient: 'from-gray-800 to-gray-600'
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'TypeScript 고급 패턴과 활용법',
    excerpt: 'Generic Constraints, Conditional Types, Template Literal Types 등 TypeScript의 고급 기능을 마스터하세요.',
    content: `# TypeScript 고급 패턴과 활용법

TypeScript의 고급 타입 시스템을 활용하면 더 안전한 코드를 작성할 수 있습니다.

## Generic Constraints

제네릭에 제약 조건을 추가하여 타입 안정성을 높이세요.

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
\`\`\`

## Conditional Types

조건에 따라 다른 타입을 반환할 수 있습니다.

## Utility Types

TypeScript가 제공하는 유틸리티 타입들을 적극 활용하세요.

## 결론

고급 TypeScript 패턴을 익히면 타입 안정성과 코드 품질이 크게 향상됩니다.`,
    date: '2024-10-10',
    tags: ['TypeScript', 'Programming', 'Types', 'Advanced'],
    category: 'development',
    featured: true,
    gradient: 'from-gray-900 to-gray-700'
  },
  {
    id: 'web-accessibility-guide',
    title: '웹 접근성 완벽 가이드',
    excerpt: 'WCAG 2.1 가이드라인을 따르는 접근성 높은 웹사이트를 만드는 방법을 알아봅니다.',
    content: `# 웹 접근성 완벽 가이드

모든 사용자가 웹사이트를 이용할 수 있도록 접근성을 고려해야 합니다.

## Semantic HTML

의미 있는 HTML 태그를 사용하세요.

## ARIA 속성

스크린 리더를 위한 ARIA 속성을 적절히 활용하세요.

## 키보드 네비게이션

모든 기능이 키보드로 접근 가능해야 합니다.

## 색상 대비

충분한 색상 대비를 유지하세요.

## 결론

접근성은 선택이 아닌 필수입니다.`,
    date: '2024-10-08',
    tags: ['Accessibility', 'WCAG', 'Web Standards', 'UX'],
    category: 'tutorial',
    featured: false,
    gradient: 'from-gray-700 to-gray-500'
  },
  {
    id: 'next-js-13-app-router',
    title: 'Next.js 13 App Router 완벽 정복',
    excerpt: 'Next.js 13의 새로운 App Router와 Server Components를 활용하는 방법을 배워봅니다.',
    content: `# Next.js 13 App Router 완벽 정복

Next.js 13의 App Router는 혁신적인 기능들을 제공합니다.

## Server Components

기본적으로 서버 컴포넌트로 동작합니다.

## Streaming

점진적으로 UI를 렌더링할 수 있습니다.

## Data Fetching

새로운 데이터 페칭 패턴을 지원합니다.

## 결론

App Router를 마스터하면 더 빠르고 효율적인 웹 앱을 만들 수 있습니다.`,
    date: '2024-10-05',
    tags: ['Next.js', 'React', 'SSR', 'Server Components'],
    category: 'development',
    featured: false,
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    id: 'design-system-building',
    title: '확장 가능한 디자인 시스템 구축하기',
    excerpt: 'Storybook과 Figma를 활용하여 일관성 있고 확장 가능한 디자인 시스템을 만드는 방법을 소개합니다.',
    content: `# 확장 가능한 디자인 시스템 구축하기

디자인 시스템은 팀의 생산성과 일관성을 크게 향상시킵니다.

## Design Tokens

색상, 타이포그래피, 간격 등을 토큰화하세요.

## Component Library

재사용 가능한 컴포넌트 라이브러리를 구축하세요.

## Documentation

Storybook으로 컴포넌트를 문서화하세요.

## 결론

잘 구축된 디자인 시스템은 팀의 자산입니다.`,
    date: '2024-10-02',
    tags: ['Design System', 'Storybook', 'Components', 'Figma'],
    category: 'design',
    featured: false,
    gradient: 'from-gray-800 to-gray-600'
  },
  {
    id: 'graphql-vs-rest',
    title: 'GraphQL vs REST: 언제 무엇을 사용할까?',
    excerpt: 'GraphQL과 REST API의 장단점을 비교하고, 프로젝트에 맞는 선택 방법을 알아봅니다.',
    content: `# GraphQL vs REST: 언제 무엇을 사용할까?

API 설계 시 GraphQL과 REST 중 무엇을 선택해야 할까요?

## REST API의 장점

- 캐싱이 쉬움
- 표준화된 HTTP 메서드
- 간단한 구조

## GraphQL의 장점

- 정확한 데이터 페칭
- 단일 엔드포인트
- 강력한 타입 시스템

## 선택 가이드

프로젝트의 요구사항에 따라 선택하세요.

## 결론

둘 다 훌륭한 기술이며, 상황에 맞게 선택하면 됩니다.`,
    date: '2024-09-28',
    tags: ['GraphQL', 'REST', 'API', 'Backend'],
    category: 'development',
    featured: false,
    gradient: 'from-gray-900 to-gray-700'
  },
  {
    id: 'web-animation-guide',
    title: 'GSAP으로 만드는 웹 애니메이션',
    excerpt: 'GSAP 라이브러리를 활용하여 부드럽고 인상적인 웹 애니메이션을 구현하는 방법을 배워봅니다.',
    content: `# GSAP으로 만드는 웹 애니메이션

GSAP은 웹 애니메이션의 표준입니다.

## Timeline

복잡한 애니메이션 시퀀스를 쉽게 만드세요.

## ScrollTrigger

스크롤 기반 애니메이션을 간단하게 구현하세요.

## Easing

다양한 이징 함수로 자연스러운 움직임을 만드세요.

## 결론

GSAP을 마스터하면 웹사이트에 생동감을 불어넣을 수 있습니다.`,
    date: '2024-09-25',
    tags: ['GSAP', 'Animation', 'ScrollTrigger', 'Frontend'],
    category: 'tutorial',
    featured: false,
    gradient: 'from-gray-800 to-gray-600'
  },
  {
    id: 'docker-kubernetes-basics',
    title: 'Docker & Kubernetes 기초부터 실전까지',
    excerpt: '컨테이너 기반 개발과 배포의 모든 것. Docker와 Kubernetes의 기초 개념부터 실전 활용법까지.',
    content: `# Docker & Kubernetes 기초부터 실전까지

컨테이너 기술은 현대 개발의 필수 요소입니다.

## Docker 기초

컨테이너를 이용한 개발 환경 구축

## Docker Compose

멀티 컨테이너 애플리케이션 관리

## Kubernetes

대규모 컨테이너 오케스트레이션

## 결론

컨테이너 기술을 익히면 개발과 배포가 훨씬 쉬워집니다.`,
    date: '2024-09-20',
    tags: ['Docker', 'Kubernetes', 'DevOps', 'Containers'],
    category: 'tech',
    featured: false,
    gradient: 'from-gray-900 to-gray-700'
  },
  {
    id: 'ai-web-development',
    title: 'AI가 바꾸는 웹 개발의 미래',
    excerpt: 'ChatGPT, GitHub Copilot 등 AI 도구들이 웹 개발 프로세스를 어떻게 변화시키고 있는지 알아봅니다.',
    content: `# AI가 바꾸는 웹 개발의 미래

AI 도구들이 개발 생산성을 혁신적으로 향상시키고 있습니다.

## GitHub Copilot

AI 기반 코드 자동완성

## ChatGPT

코드 작성과 디버깅 도우미

## AI Code Review

자동화된 코드 리뷰

## 결론

AI는 개발자를 대체하는 것이 아니라 더 강력하게 만듭니다.`,
    date: '2024-09-15',
    tags: ['AI', 'ChatGPT', 'Copilot', 'Future'],
    category: 'news',
    featured: false,
    gradient: 'from-gray-800 to-gray-600'
  }
];

// 블로그 통계
export const getBlogStats = () => {
  const allTags = blogPosts.flatMap(p => p.tags);
  const uniqueTags = Array.from(new Set(allTags));
  
  return {
    total: blogPosts.length,
    featured: blogPosts.filter(p => p.featured).length,
    tags: uniqueTags.length,
    categories: {
      tech: blogPosts.filter(p => p.category === 'tech').length,
      design: blogPosts.filter(p => p.category === 'design').length,
      development: blogPosts.filter(p => p.category === 'development').length,
      tutorial: blogPosts.filter(p => p.category === 'tutorial').length,
      news: blogPosts.filter(p => p.category === 'news').length,
    }
  };
};

// 특정 블로그 포스트 찾기
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(p => p.id === id);
};

// Featured 블로그 포스트만 가져오기
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(p => p.featured);
};

// 카테고리별 블로그 포스트 가져오기
export const getBlogPostsByCategory = (
  category: 'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all'
): BlogPost[] => {
  if (category === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(p => p.category === category);
};

// 페이지네이션을 위한 블로그 포스트 가져오기
export const getBlogPostsPaginated = (
  category: 'tech' | 'design' | 'development' | 'tutorial' | 'news' | 'all' = 'all',
  page: number = 1,
  itemsPerPage: number = 6
) => {
  const filteredPosts = getBlogPostsByCategory(category);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const posts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: filteredPosts.length,
      itemsPerPage,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};

// 최근 블로그 포스트 가져오기
export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};

// 관련 블로그 포스트 가져오기 (같은 카테고리 또는 태그)
export const getRelatedBlogPosts = (postId: string, count: number = 3): BlogPost[] => {
  const currentPost = getBlogPostById(postId);
  if (!currentPost) return [];

  const related = blogPosts
    .filter(p => p.id !== postId)
    .filter(p => 
      p.category === currentPost.category || 
      p.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, count);

  return related;
};

