# React Practice Portfolio

A modern React portfolio website showcasing various projects and interactive components, built with TypeScript, Tailwind CSS, and GSAP animations.

## 🚀 Live Demo

Visit the live site: [https://ziguin0925.github.io/](https://ziguin0925.github.io/)

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Interactive Components**: Custom cursor effects, scroll animations, and transitions
- **Project Showcase**: Categorized project portfolio with filtering and pagination
- **Multiple Layouts**: Flexible routing system with different layout options
- **TypeScript**: Full type safety and better development experience
- **GSAP Animations**: Smooth, professional-grade animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP, React Spring
- **Routing**: React Router DOM v7
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── assets/              # 이미지, 아이콘, 글로벌 스타일
├── components/          # 전역 재사용 가능한 UI 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Hero, CTA, Carousel 등)
│   └── layout/         # 레이아웃 컴포넌트 (Header, Footer, Layout)
├── hooks/              # 커스텀 훅 (useScrollAnimation, useScrollVisibility)
├── pages/              # 라우트와 페이지 컴포넌트
│   ├── projects/       # 프로젝트 관련 페이지들
│   │   ├── electrical/ # 전기/스마트그리드 프로젝트
│   │   ├── future/     # 미래 기술 프로젝트
│   │   └── toss/       # 토스 스타일 페이지
│   └── AboutPage.tsx   # 소개 페이지
├── routes/             # 라우팅 설정
│   ├── MainRouter.tsx  # 메인 라우트 (컴포넌트 기반)
│   ├── PagesRouter.tsx # 페이지 라우트 (페이지 기반)
│   └── Router.tsx      # 라우터 통합
├── styles/             # 공통 스타일
├── types/              # TypeScript 타입 정의
└── constants/          # 상수 정의
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ziguin0925/react-practice.git
cd react-practice
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## 📱 Pages

- **Home** (`/`) - Main landing page with hero section
- **About** (`/about`) - Personal introduction and skills
- **Projects** (`/projects`) - Portfolio showcase with filtering
- **Smart Grid** (`/electrical/smart-grid`) - Electrical engineering project
- **Future Tech** (`/future`) - Future technology showcase
- **Toss Style** (`/started`) - Toss-inspired landing page

## 🎨 Key Components

- **BlobCursor**: Custom animated cursor component
- **HeroSection**: Reusable hero sections with animations
- **ProjectCard**: Project showcase cards with hover effects
- **CategoryFilter**: Project filtering by category
- **Pagination**: Project pagination component
- **CTASection**: Call-to-action sections
- **FadeSection**: Scroll-triggered fade animations

## 🔧 Customization

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_PUBLIC_URL=/
```

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/index.css` - Global styles
- `src/styles/` - Component-specific styles

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/routes/PagesRouter.tsx`
3. Update navigation if needed

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `typescript` - TypeScript support

### UI & Styling
- `tailwindcss` - Utility-first CSS framework
- `@headlessui/react` - Unstyled UI components
- `@heroicons/react` - Beautiful SVG icons

### Animations
- `gsap` - Professional animation library
- `@gsap/react` - React integration for GSAP
- `@react-spring/web` - Spring physics animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and for personal portfolio use.

## 📞 Contact

- GitHub: [@ziguin0925](https://github.com/ziguin0925)
- Portfolio: [https://ziguin0925.github.io/](https://ziguin0925.github.io/)

---

Made with ❤️ and React