# Router 구조 설명

## 📂 폴더별 라우터 분리 전략

### 1. **MainRouter** - `components/` 기반 페이지
**위치**: `src/routes/MainRouter.tsx`

**용도**: `src/components/` 폴더의 컴포넌트 기반 페이지들을 관리

**레이아웃**: `Layout` (Header + Content + Footer)

**라우트 목록**:
- `/` - Main (메인 페이지)
- `/1` - BlobCursor (예시 페이지)

```tsx
// 기본 레이아웃 적용 (useLayout: true)
<RouteWrapper useLayout={true}>
  <Component />
</RouteWrapper>
```

---

### 2. **PagesRouter** - `pages/` 기반 페이지
**위치**: `src/routes/PagesRouter.tsx`

**용도**: `src/pages/` 폴더의 페이지들을 관리 (Main과 다른 레이아웃 적용)

**레이아웃**: 3가지 옵션
- `'pages'` - PagesLayout (Header + Footer 선택 가능)
- `'none'` - 레이아웃 없음 (자체 레이아웃 포함 페이지)

**라우트 목록**:

#### Header + Footer 필요한 페이지 (`layout: 'pages'`)
- `/about` - AboutPage (소개 페이지)
- `/*` (404) - NotFound (404 에러 페이지)

#### 자체 레이아웃 포함 페이지 (`layout: 'none'`)
- `/started` - StartedPage (시작 페이지)
- `/future` - FuturePage (미래 페이지)

```tsx
// PagesLayout 적용
<RouteWrapper useLayout='pages' showHeader={true} showFooter={true}>
  <AboutPage />
</RouteWrapper>

// 레이아웃 없음
<RouteWrapper useLayout='none'>
  <StartedPage />
</RouteWrapper>
```

---

## 🎨 레이아웃 종류

### 1. Layout (기본 레이아웃)
- **파일**: `src/components/layout/Layout.tsx`
- **구조**: HeaderCom + Content + Footer
- **사용**: MainRouter (components 기반 페이지)

### 2. PagesLayout (페이지 전용 레이아웃)
- **파일**: `src/components/layout/PagesLayout.tsx`
- **구조**: HeaderCom (선택) + Content + Footer (선택)
- **사용**: PagesRouter (pages 기반 페이지)
- **특징**: Header/Footer를 선택적으로 표시 가능

### 3. No Layout (레이아웃 없음)
- **구조**: Content만 렌더링
- **사용**: 자체 레이아웃을 포함한 페이지 (StartedPage, FuturePage)

---

## 🔧 RouteWrapper 사용법

`RouteWrapper`는 라우트별로 다른 레이아웃을 적용하는 래퍼 컴포넌트입니다.

### Props
```tsx
interface RouteWrapperProps {
  children: React.ReactNode;
  useLayout?: boolean | 'main' | 'pages' | 'none';
  showHeader?: boolean;  // PagesLayout 사용 시
  showFooter?: boolean;  // PagesLayout 사용 시
}
```

### 사용 예시
```tsx
// 1. 기본 레이아웃 (MainRouter)
<RouteWrapper useLayout={true}>
  <Main />
</RouteWrapper>

// 2. Pages 레이아웃 - Header + Footer
<RouteWrapper useLayout='pages' showHeader={true} showFooter={true}>
  <AboutPage />
</RouteWrapper>

// 3. Pages 레이아웃 - Header만
<RouteWrapper useLayout='pages' showHeader={true} showFooter={false}>
  <SomePage />
</RouteWrapper>

// 4. 레이아웃 없음
<RouteWrapper useLayout='none'>
  <StartedPage />
</RouteWrapper>
```

---

## 📊 라우트 흐름도

```
Router.tsx (단일 <Routes>)
├── getMainRoutes() - components 기반
│   ├── / → Main (Layout)
│   └── /1 → BlobCursor (Layout)
│
└── getPagesRoutes() - pages 기반
    ├── /about → AboutPage (PagesLayout)
    ├── /started → StartedPage (No Layout)
    ├── /future → FuturePage (No Layout)
    └── * → NotFound (PagesLayout)
```

**중요**: 모든 라우트가 하나의 `<Routes>` 컴포넌트 안에서 처리되므로, React Router가 정확히 하나의 경로만 매칭합니다.

---

## ✅ 장점

1. **명확한 구조 분리**: `components`와 `pages` 폴더 기반으로 라우터 분리
2. **유연한 레이아웃**: 페이지별로 다른 레이아웃 적용 가능
3. **확장성**: 새 페이지 추가 시 해당 라우터에만 추가
4. **유지보수성**: 관심사 분리로 코드 관리 용이
5. **선택적 레이아웃**: Header/Footer를 페이지별로 선택 가능

---

## 🚀 새 페이지 추가하는 방법

### components 기반 페이지 추가
```tsx
// src/routes/MainRouter.tsx
export const componentRoutes = [
  { path: "/", component: Main },
  { path: "/new-page", component: NewPage },  // 추가
];
```

### pages 기반 페이지 추가 (Header + Footer 필요)
```tsx
// src/routes/PagesRouter.tsx
export const pagesRoutes = [
  { 
    path: "/new-page", 
    component: NewPage, 
    layout: 'pages',
    showHeader: true,
    showFooter: true
  },
];
```

### pages 기반 페이지 추가 (자체 레이아웃)
```tsx
// src/routes/PagesRouter.tsx
export const pagesRoutes = [
  { 
    path: "/new-page", 
    component: NewPage, 
    layout: 'none'
  },
];
```

---

## 📝 주의사항

1. **404 페이지 (`path: "*"`)는 항상 PagesRouter의 마지막에 위치**해야 합니다.
2. PagesRouter가 MainRouter 다음에 오므로, MainRouter의 경로들이 우선 처리됩니다.
3. 자체 레이아웃이 있는 페이지(StartedPage, FuturePage)는 `layout: 'none'`을 사용하세요.
4. Header/Footer가 필요한 pages는 `layout: 'pages'`를 사용하세요.

