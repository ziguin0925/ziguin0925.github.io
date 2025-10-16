# 라우트 구조 설명

## 전체 구조

```
App
├── Router (BrowserRouter)
│   └── Routes
│       ├── Main Routes (routeConfig.ts)
│       │   ├── / (Main)
│       │   ├── /about (AboutPage)
│       │   ├── /projects (ProjectsPage)
│       │   └── ...
│       └── Statistics Route (statisticsRoutes.ts) ⭐ 중첩 라우트
│           ├── /statistics (StatisticsPage - Layout)
│           │   ├── / (index) → StatsOverview
│           │   ├── /overview → StatsOverview
│           │   ├── /analytics → ChartSection
│           │   ├── /geographic → GeographicChart
│           │   └── ...
```

## 레이아웃 적용 방식

### 1. 일반 라우트 (Header + Footer 적용)

```tsx
// routeConfig.ts
{
  path: '/about',
  component: AboutPage,
  layout: 'pages',     // ✅ RouteWrapper가 Layout을 적용
  showHeader: true,
  showFooter: true,
}

// 결과 DOM 구조:
<Layout>
  <HeaderCom />
  <AboutPage />
  <Footer />
</Layout>
```

### 2. 통계 대시보드 (자체 레이아웃)

```tsx
// statisticsRoutes.ts
{
  path: '/statistics',
  component: StatisticsPage,  // DashboardLayout을 포함하고 있음
  layout: 'statistics',       // ✅ 통계 전용 레이아웃 타입 (RouteWrapper가 래핑하지 않음)
  children: [...]
}

// 결과 DOM 구조:
<StatisticsPage>
  <DashboardLayout>
    <Sidebar />
    <TopBar />
    <Outlet />  {/* 자식 라우트가 여기 렌더링 */}
  </DashboardLayout>
</StatisticsPage>
```

### 3. 통계 자식 라우트

```tsx
// statisticsRoutes.ts - children
{
  path: 'analytics',
  component: ChartSection,
  // layout 속성 없음 → 기본값 'none' 사용
}

// 결과 DOM 구조:
<StatisticsPage>
  <DashboardLayout>
    <Sidebar />
    <TopBar />
    <ChartSection />  {/* Outlet 위치에 렌더링 */}
  </DashboardLayout>
</StatisticsPage>
```

## 핵심 포인트

### 1. **부모 라우트의 레이아웃 설정**

```typescript
export const statisticsRoute: RouteConfig = {
  path: '/statistics',
  component: StatisticsPage,
  layout: 'statistics',  // ⭐ 중요: 통계 전용 레이아웃
  children: [...]
};
```

**이유:**
- `StatisticsPage`가 이미 `DashboardLayout`을 포함하고 있음
- `layout: 'statistics'`로 설정하여 통계 대시보드 레이아웃 사용을 명시
- `RouteWrapper`가 Header/Footer를 적용하지 않음
- 만약 `layout: 'pages'`로 설정하면:
  ```tsx
  <Layout>
    <Header />
    <StatisticsPage>
      <DashboardLayout>...</DashboardLayout>
    </StatisticsPage>
    <Footer />
  </Layout>
  ```
  이렇게 되어 이중 레이아웃이 적용됨 ❌

### 2. **자식 라우트의 레이아웃 설정**

```typescript
children: [
  {
    path: 'analytics',
    component: ChartSection,
    // layout을 명시하지 않음 → 기본값 'statistics' (부모로부터 상속)
  }
]
```

**이유:**
- 자식 라우트는 이미 부모의 `DashboardLayout` 안에서 렌더링됨
- `layout` 속성을 지정할 필요 없음 (기본값이 부모의 레이아웃을 따름)
- `<Outlet />`을 통해 부모의 레이아웃 안에서 렌더링되므로 추가 래핑 불필요

### 3. **Router.tsx의 재귀 렌더링**

```typescript
const renderRoute = (route: RouteConfig) => {
  const { layout = 'statistics', ... } = route;  // 기본값 'statistics'
  
  if (children && children.length > 0) {
    return (
      <Route path={path} element={<RouteWrapper useLayout={layout}>...}>
        {children.map((childRoute) => renderRoute(childRoute))}
      </Route>
    );
  }
  // ...
};
```

**동작:**
1. 부모 라우트: `layout: 'statistics'` → `RouteWrapper`가 래핑하지 않음 (자체 레이아웃)
2. 자식 라우트: `layout` 없음 → 기본값 'statistics' → `RouteWrapper`가 래핑하지 않음
3. 결과: 부모의 DashboardLayout만 적용됨 ✅

## 레이아웃 타입 정리

| Layout Type | 적용되는 것 | 사용 예시 |
|------------|-----------|---------|
| `'main'` | Header + Footer | 메인 페이지 |
| `'pages'` | Header + Footer | About, Projects 등 일반 페이지 |
| `'statistics'` | 통계 대시보드 (자체 레이아웃) | Statistics 페이지 |
| `'none'` | 아무것도 없음 | 자체 레이아웃이 있는 기타 페이지 (Blog 등) |

## 새로운 중첩 라우트 추가하는 방법

예시: Blog 페이지를 중첩 라우트로 만들기

```typescript
// src/routes/blogRoutes.ts
export const blogRoute: RouteConfig = {
  path: '/blog',
  component: BlogLayout,  // BlogLayout 컴포넌트 (자체 레이아웃 포함)
  layout: 'none',         // ⭐ 자체 레이아웃 사용
  children: [
    {
      path: '',
      component: BlogList,
      index: true,
    },
    {
      path: ':id',
      component: BlogPost,
    },
  ],
};

// BlogLayout.tsx
const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <BlogHeader />
      <Outlet />  {/* 자식 라우트가 여기 렌더링 */}
      <BlogFooter />
    </div>
  );
};
```

## 정리

✅ **부모 라우트**: `layout: 'statistics'` (통계 전용 레이아웃)  
✅ **자식 라우트**: `layout` 명시하지 않음 (기본값 'statistics', 부모의 `<Outlet />`에서 렌더링)  
✅ **결과**: 깔끔한 중첩 라우트 구조, 레이아웃 중복 없음  
✅ **명시성**: 'statistics' 타입으로 통계 페이지임을 명확히 표현  

