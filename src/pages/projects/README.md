# Projects Page 사용 가이드

프로젝트 목록 페이지 관리 및 새 프로젝트 추가/삭제 가이드입니다.

---

## 📁 폴더 구조

```
src/pages/projects/
├── ProjectsPage.tsx          # 메인 프로젝트 목록 페이지
├── projectsData.ts           # 프로젝트 데이터 관리 (여기만 수정!)
├── components/
│   └── ProjectCard.tsx       # 개별 프로젝트 카드 컴포넌트
└── README.md                 # 이 파일
```

---

## 🎯 주요 기능

### 1. **ProjectsPage.tsx**
- 프로젝트 목록을 그리드 형태로 표시
- Hero 섹션 + 통계 섹션 + 프로젝트 그리드
- GSAP 애니메이션 적용
- Header + Footer 포함 (PagesLayout 사용)

### 2. **projectsData.ts**
- 모든 프로젝트 데이터를 한 곳에서 관리
- 프로젝트 추가/삭제는 **이 파일만 수정**하면 됩니다!

### 3. **ProjectCard.tsx**
- 재사용 가능한 프로젝트 카드 컴포넌트
- 호버 애니메이션 및 Featured 배지 지원
- 링크 클릭 시 해당 프로젝트 페이지로 이동

---

## 🚀 새 프로젝트 추가하기

### STEP 1: `projectsData.ts` 파일 열기
```bash
src/pages/projects/projectsData.ts
```

### STEP 2: `projectsData` 배열에 새 프로젝트 추가

```typescript
export const projectsData: Project[] = [
  {
    id: 'future',
    title: 'Future Project',
    description: '미래지향적인 인터랙티브 웹 경험...',
    tags: ['React', 'GSAP', 'TypeScript', 'Interactive'],
    link: '/future',
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    featured: true
  },
  // 👇 여기에 새 프로젝트 추가!
  {
    id: 'my-new-project',                              // 고유 ID
    title: 'My New Project',                           // 프로젝트 제목
    description: '새로운 프로젝트에 대한 설명입니다.',  // 설명
    tags: ['React', 'TypeScript', 'Node.js'],         // 사용 기술
    link: '/my-new-project',                          // 프로젝트 페이지 경로
    gradient: 'from-green-500 to-teal-500',           // 카드 그라디언트 색상
    bgGradient: 'from-green-50 to-teal-50',          // 카드 배경 그라디언트
    featured: false                                   // Featured 배지 표시 여부
  }
];
```

### STEP 3: 프로젝트 페이지 라우트 추가 (선택사항)

새 프로젝트에 전용 페이지가 필요한 경우:

```typescript
// src/routes/PagesRouter.tsx
{ 
  path: "/my-new-project", 
  component: MyNewProjectPage, 
  layout: 'none' as const 
}
```

### 완료! 🎉
이제 `/projects` 페이지에 새 프로젝트가 자동으로 표시됩니다.

---

## 🗑️ 프로젝트 삭제하기

### STEP 1: `projectsData.ts` 파일 열기

### STEP 2: 삭제할 프로젝트 객체 제거

```typescript
export const projectsData: Project[] = [
  {
    id: 'future',
    // ...
  },
  // 👇 이 프로젝트를 삭제하려면 전체 객체를 삭제
  // {
  //   id: 'old-project',
  //   title: 'Old Project',
  //   ...
  // },
  {
    id: 'toss',
    // ...
  }
];
```

### 완료! 🎉
프로젝트가 목록에서 자동으로 제거됩니다.

---

## 🎨 그라디언트 색상 옵션

카드의 `gradient`와 `bgGradient` 값으로 사용할 수 있는 Tailwind 그라디언트:

```typescript
// Blue 계열
gradient: 'from-blue-500 to-cyan-500'
bgGradient: 'from-blue-50 to-cyan-50'

// Purple 계열
gradient: 'from-purple-500 to-pink-500'
bgGradient: 'from-purple-50 to-pink-50'

// Green 계열
gradient: 'from-green-500 to-teal-500'
bgGradient: 'from-green-50 to-teal-50'

// Orange 계열
gradient: 'from-orange-500 to-red-500'
bgGradient: 'from-orange-50 to-red-50'

// Custom
gradient: 'from-indigo-500 to-purple-500'
bgGradient: 'from-indigo-50 to-purple-50'
```

---

## 📊 Project 인터페이스

```typescript
interface Project {
  id: string;              // 고유 식별자 (필수)
  title: string;           // 프로젝트 제목 (필수)
  description: string;     // 프로젝트 설명 (필수)
  tags: string[];          // 사용 기술 태그 (필수)
  image?: string;          // 프로젝트 이미지 URL (선택)
  link: string;            // 프로젝트 페이지 링크 (필수)
  gradient: string;        // 카드 아이콘/버튼 그라디언트 (필수)
  bgGradient: string;      // 카드 배경 그라디언트 (필수)
  featured?: boolean;      // Featured 배지 표시 여부 (선택, 기본: false)
}
```

---

## 🔧 유틸리티 함수

### 프로젝트 통계 가져오기
```typescript
import { getProjectStats } from './projectsData';

const stats = getProjectStats();
// { total: 2, featured: 2, tags: 8 }
```

### 특정 프로젝트 찾기
```typescript
import { getProjectById } from './projectsData';

const project = getProjectById('future');
// { id: 'future', title: 'Future Project', ... }
```

### Featured 프로젝트만 가져오기
```typescript
import { getFeaturedProjects } from './projectsData';

const featured = getFeaturedProjects();
// [{ id: 'future', ... }, { id: 'toss', ... }]
```

---

## 🎯 베스트 프랙티스

1. **ID는 항상 고유하게**: 프로젝트 ID는 중복되지 않도록 설정
2. **설명은 간결하게**: 2-3줄 정도로 핵심만 전달
3. **태그는 적절히**: 3-5개 정도의 주요 기술만 표시
4. **Featured는 신중하게**: 주요 프로젝트만 `featured: true` 설정
5. **색상은 일관성있게**: 프로젝트 성격에 맞는 색상 선택

---

## 📝 체크리스트

새 프로젝트를 추가할 때:

- [ ] `projectsData.ts`에 프로젝트 객체 추가
- [ ] 고유한 `id` 설정
- [ ] `title`, `description` 작성
- [ ] `tags` 배열 채우기
- [ ] `link` 경로 설정
- [ ] `gradient`, `bgGradient` 색상 선택
- [ ] `featured` 여부 결정
- [ ] (선택) 프로젝트 전용 페이지 생성
- [ ] (선택) 라우터에 경로 추가
- [ ] 브라우저에서 확인!

---

## 🌟 예제

### 완전한 프로젝트 추가 예제

```typescript
// src/pages/projects/projectsData.ts
{
  id: 'ecommerce-platform',
  title: 'E-Commerce Platform',
  description: '현대적인 UI/UX와 강력한 기능을 갖춘 전자상거래 플랫폼. 실시간 재고 관리와 결제 시스템을 통합했습니다.',
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '/ecommerce',
  gradient: 'from-emerald-500 to-green-500',
  bgGradient: 'from-emerald-50 to-green-50',
  featured: true
}
```

---

## 💡 팁

- **빠른 테스트**: `featured: true`로 설정하면 카드에 ✨ Featured 배지가 표시됩니다
- **통계 확인**: 프로젝트 추가 후 페이지 상단 통계가 자동으로 업데이트됩니다
- **반응형 디자인**: 모바일, 태블릿, 데스크톱에서 모두 잘 보입니다
- **애니메이션**: 스크롤 시 GSAP 애니메이션이 자동으로 적용됩니다

---

## 🆘 문제 해결

### 프로젝트가 표시되지 않아요
- `projectsData` 배열에 올바르게 추가되었는지 확인
- 문법 오류가 없는지 확인 (콤마, 중괄호 등)
- 브라우저 콘솔에서 에러 메시지 확인

### 색상이 적용되지 않아요
- Tailwind CSS 클래스 이름이 올바른지 확인
- `from-{color}-{shade} to-{color}-{shade}` 형식 사용

### 링크가 작동하지 않아요
- 라우터에 해당 경로가 추가되어 있는지 확인
- `link` 값이 `/`로 시작하는지 확인

---

더 자세한 내용은 프로젝트 담당자에게 문의하세요! 🚀

