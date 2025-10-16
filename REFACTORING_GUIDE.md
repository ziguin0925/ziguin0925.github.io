# 프로젝트 리팩토링 가이드

## 개요
이 문서는 프로젝트 구조 개선 작업에 대한 전체적인 가이드입니다.

## 주요 변경 사항

### 1. 타입 시스템 개선 ✅
**위치**: `src/types/index.ts`

- 모든 공통 타입을 중앙에서 관리
- Layout, Navigation, Animation, Section, Button 등 재사용 가능한 타입 정의
- Hook 반환 타입 명확화

```typescript
// 사용 예시
import { LayoutProps, ButtonProps, CategoryConfig } from './types';
```

### 2. Hooks 통합 및 개선 ✅
**위치**: `src/hooks/`

#### 새로운 Hooks:
- `useScroll.ts` - 스크롤 관련 모든 훅 통합
  - `useScroll()` - 스크롤 위치와 방향 추적
  - `useIntersectionObserver()` - 교차 관찰자 패턴
  - `useVisibility()` - 요소 가시성 추적

- `useGSAPAnimation.ts` - GSAP 애니메이션 훅
  - `useFadeIn()` - 페이드인 애니메이션
  - `useScrollAnimation()` - 스크롤 트리거 애니메이션
  - `useScaleAnimation()` - 스케일 애니메이션
  - `useMultipleAnimations()` - 복합 애니메이션

```typescript
// 사용 예시
import { useScroll, useFadeIn } from './hooks';

const { scrollY, isScrollingDown } = useScroll();
useFadeIn('.element', { duration: 1, delay: 0.5 });
```

### 3. 유틸리티 함수 추가 ✅
**위치**: `src/utils/`

#### colors.ts
- `getCategoryColorScheme()` - 카테고리별 색상 스킴
- `createGradient()` - 그라데이션 생성
- `createTextGradient()` - 텍스트 그라데이션
- `withOpacity()` - 투명도 추가

#### styles.ts
- `cn()` - 클래스명 조건부 결합
- `createCardStyle()` - 카드 스타일 생성
- `createButtonStyle()` - 버튼 스타일 생성
- `responsiveText()` - 반응형 텍스트 크기
- `containerMaxWidth()` - 컨테이너 최대 너비
- `createGridLayout()` - 그리드 레이아웃 생성

#### routing.ts
- `isActivePath()` - 경로 활성 상태 확인
- `parseQueryParams()` - 쿼리 파라미터 파싱
- `stringifyQueryParams()` - 쿼리 파라미터 문자열화
- `createPaginationUrl()` - 페이지네이션 URL 생성
- `scrollManager` - 스크롤 위치 관리

```typescript
// 사용 예시
import { cn, createButtonStyle, getCategoryColorScheme } from './utils';

const className = cn('base-class', condition && 'conditional-class');
const buttonStyle = createButtonStyle('primary', 'lg');
const colors = getCategoryColorScheme('it');
```

### 4. 상수 재구성 ✅
**위치**: `src/config/`, `src/constants/`

#### config/index.ts
- `APP_CONFIG` - 애플리케이션 설정
- `NAVIGATION` - 네비게이션 메뉴
- `SOCIAL_LINKS` - 소셜 미디어 링크
- `CATEGORIES` - 카테고리 설정
- `TECH_STACK` - 기술 스택
- `ANIMATION_CONFIG` - 애니메이션 설정
- `PAGINATION_CONFIG` - 페이지네이션 설정

#### constants/app.ts
- 환경 변수
- 로컬/세션 스토리지 키
- 타임아웃 설정
- 브레이크포인트
- Z-index 레이어

```typescript
// 사용 예시
import { APP_CONFIG, NAVIGATION, CATEGORIES } from './config';
import { BREAKPOINTS, Z_INDEX } from './constants/app';
```

### 5. 레이아웃 시스템 단순화 ✅
**위치**: `src/components/layout/`

**변경 사항**:
- `PagesLayout.tsx` 삭제 → `Layout.tsx`로 통합
- 단일 레이아웃 컴포넌트로 모든 페이지 처리
- `showHeader`, `showFooter` props로 유연한 제어

```typescript
// Layout.tsx - 통합된 레이아웃
<Layout showHeader={true} showFooter={true}>
  {children}
</Layout>
```

### 6. 라우팅 시스템 개선 ✅
**위치**: `src/routes/`

**변경 사항**:
- `MainRouter.tsx`, `PagesRouter.tsx` 삭제
- `routeConfig.ts` - 모든 라우트를 중앙에서 관리
- `Router.tsx` - 단순화된 라우터 컴포넌트

```typescript
// routeConfig.ts
export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    layout: 'main',
  },
  {
    path: '/about',
    component: AboutPage,
    layout: 'pages',
    showHeader: true,
    showFooter: true,
  },
  // ...
];
```

### 7. 재사용 가능한 UI 컴포넌트 ✅
**위치**: `src/components/ui/`

#### 새로운 컴포넌트:
- `Button` - 범용 버튼 컴포넌트
- `Card` - 카드 컴포넌트
- `Container` - 컨테이너 컴포넌트
- `Grid` - 그리드 레이아웃 컴포넌트
- `Section` - 섹션 래퍼 컴포넌트
- `Heading` - 헤딩 컴포넌트

```typescript
// 사용 예시
import { Button, Card, Container, Grid } from './components/ui';

<Container size="lg">
  <Grid cols={[1, 2, 3]} gap={6}>
    <Card 
      title="제목" 
      description="설명" 
      href="/link"
      gradient="from-blue-600 to-purple-600"
    />
  </Grid>
</Container>
```

## 삭제된 파일

- `src/hooks/useScrollAnimation.ts` → `src/hooks/useScroll.ts`로 통합
- `src/hooks/useScrollVisibility.ts` → `src/hooks/useScroll.ts`로 통합
- `src/components/layout/PagesLayout.tsx` → `Layout.tsx`로 통합
- `src/routes/MainRouter.tsx` → `routeConfig.ts`로 통합
- `src/routes/PagesRouter.tsx` → `routeConfig.ts`로 통합

## 마이그레이션 가이드

### Hook 사용 변경
```typescript
// Before
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useScrollVisibility } from './hooks/useScrollVisibility';

// After
import { useScroll, useVisibility } from './hooks';
```

### 레이아웃 사용 변경
```typescript
// Before
import Layout from './components/layout/Layout';
import PagesLayout from './components/layout/PagesLayout';

// After
import Layout from './components/layout/Layout';

<Layout showHeader={true} showFooter={true}>
  {children}
</Layout>
```

### 라우트 추가하기
```typescript
// routeConfig.ts에 추가
{
  path: '/new-page',
  component: NewPage,
  layout: 'pages', // 'main' | 'pages' | 'none'
  showHeader: true,
  showFooter: true,
}
```

## 베스트 프랙티스

### 1. 타입 사용
모든 컴포넌트에서 `types/index.ts`의 공통 타입 사용

### 2. 유틸리티 활용
스타일링이나 공통 로직은 `utils/` 함수 사용

### 3. 상수 사용
하드코딩 대신 `config/`와 `constants/`의 값 사용

### 4. UI 컴포넌트 재사용
`components/ui/`의 범용 컴포넌트 적극 활용

### 5. Hooks 활용
애니메이션이나 스크롤 로직은 커스텀 훅 사용

## 폴더 구조

```
src/
├── components/
│   ├── common/          # 공통 컴포넌트
│   ├── layout/          # 레이아웃 컴포넌트 (통합됨)
│   └── ui/              # 재사용 가능한 UI 컴포넌트 (신규)
├── config/              # 애플리케이션 설정 (신규)
├── constants/           # 상수 (재구성)
├── hooks/               # 커스텀 훅 (개선)
├── pages/               # 페이지 컴포넌트
├── routes/              # 라우팅 설정 (단순화)
├── types/               # 타입 정의 (개선)
└── utils/               # 유틸리티 함수 (신규)
```

## 개선 효과

1. **코드 재사용성** ↑ - 공통 컴포넌트와 유틸리티로 중복 코드 감소
2. **가독성** ↑ - 명확한 타입과 구조화된 폴더
3. **유지보수성** ↑ - 중앙 집중식 설정과 타입 관리
4. **확장성** ↑ - 새로운 기능 추가가 용이한 구조
5. **성능** ↑ - 최적화된 훅과 컴포넌트 구조

## 추가 고려사항

1. 프로젝트별 상수는 해당 프로젝트 폴더 내에 별도 관리
2. 복잡한 애니메이션은 `useGSAPAnimation` 훅 활용
3. 스타일링은 Tailwind CSS와 유틸리티 함수 조합 사용
4. 타입은 가능한 한 재사용하고, 필요시 확장

## 문의 및 개선 제안

프로젝트 구조에 대한 문의나 개선 제안이 있으시면 이슈를 등록해주세요.

