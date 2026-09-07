# ⚛️ React Bootstrap Project (19SL)

A modern, type-safe React application built with Bootstrap 5 and React Router, showcasing clean architecture, comprehensive components, and best practices for frontend engineering.

## Overview

This project demonstrates a complete landing page for **19 Smart Learning**, an educational technology platform. Built as a portfolio piece to showcase frontend development skills including component architecture, type safety with TypeScript, routing, accessibility, and modern React patterns.

## 🚀 Features

### Core Functionality
- **Single Page Application** with client-side routing via React Router v7
- **Fully responsive design** using Bootstrap 5 grid system and custom media queries
- **Type-safe codebase** written in TypeScript with strict mode enabled
- **Accessible components** following WCAG guidelines (aria-labels, semantic HTML, keyboard navigation)
- **Modular architecture** with reusable, well-documented components

### Pages & Sections
- **Home** — Hero carousel with auto-rotating slides
- **About** — Company story, values, statistics, and team cards
- **Services** — Six service offerings (Web Dev, Mobile, UI/UX, Data, Security, DevOps)
- **Teams** — Team member grid with social links overlay
- **Testimonials** — Customer testimonials with star ratings
- **Pricing** — Three-tier pricing plans with feature comparison
- **Blog** — Latest articles in a responsive card layout
- **Footer** — Newsletter signup, quick links, and contact info

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19.1.0 |
| **Language** | TypeScript 5.x (strict mode) |
| **Routing** | React Router DOM 7.x |
| **UI Components** | React Bootstrap 2.10.10 |
| **Styling** | Bootstrap 5.3.6 + Custom CSS |
| **Icons** | React Icons (Font Awesome) |
| **Testing** | React Testing Library + Jest |
| **Build Tool** | Create React App / react-scripts 5.0.1 |

## 📁 Project Structure

```
react-bootstrap-19sl/
├── frontend/
│   ├── public/
│   │   ├── index.html          # HTML template with SEO meta tags
│   │   ├── manifest.json       # PWA manifest
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navigation bar with routing
│   │   │   ├── Hero.tsx        # Carousel hero section
│   │   │   ├── About.tsx       # About page with stats & team
│   │   │   ├── Services.tsx    # Services grid
│   │   │   ├── Teams.tsx       # Team members showcase
│   │   │   ├── Testimonials.tsx# Customer testimonials
│   │   │   ├── Pricing.tsx     # Pricing plans
│   │   │   ├── Blog.tsx        # Blog posts grid
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── styles/
│   │   │       └── Header.css  # Header-specific styles
│   │   ├── data/
│   │   │   └── heroData.ts     # Centralized data for hero carousel
│   │   ├── types/
│   │   │   └── index.ts        # Shared TypeScript interfaces
│   │   ├── App.tsx             # Root component with routing
│   │   ├── App.test.tsx        # Component tests
│   │   ├── index.tsx           # Entry point
│   │   ├── index.css           # Global styles
│   │   ├── App.css             # App-level styles
│   │   ├── reportWebVitals.ts  # Performance monitoring
│   │   ├── setupTests.ts       # Test configuration
│   │   └── react-app-env.d.ts  # Type declarations for assets
│   ├── package.json
│   └── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🏗️ Architecture Highlights

### TypeScript First
- Strict mode enabled (`"strict": true` in tsconfig)
- Centralized type definitions in `src/types/index.ts`
- All components use `React.FC` typing
- Type-safe props for all data-driven components (HeroSlide, TeamMember, PricingPlan, etc.)

### Component Design Patterns
- **Functional components** with hooks throughout
- **Data-driven rendering** — content stored in typed data arrays, mapped to JSX
- **Separation of concerns** — data, types, and components kept in distinct files
- **Consistent prop interfaces** — all components accept well-typed data

### Routing Strategy
- `BrowserRouter` wraps the entire app at the root level
- Header navigation uses `Link` components (no full page reloads)
- Each major section has its own route (`/`, `/about`, `/services`, etc.)

### Accessibility (a11y)
- Semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<blockquote>`)
- ARIA labels on interactive elements
- Alt text on all images
- Keyboard-navigable nav with proper focus management
- Form labels associated with inputs

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mvdevelop/react-bootstrap-19sl.git
   cd react-bootstrap-19sl
   ```

2. **Navigate to the frontend:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

5. **Run tests:**
   ```bash
   npm test
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

## 🧪 Testing

The project includes component tests using React Testing Library:

- ✅ Renders main application structure
- ✅ Renders brand name in navigation
- ✅ Renders navigation links
- ✅ Renders footer with copyright

Run tests with: `npm test`

## 🎨 Styling Approach

- **Bootstrap 5** as the base framework for grid, components, and utilities
- **Custom CSS** for brand-specific overrides and bespoke layouts
- **React Bootstrap** components for idiomatic React integration with Bootstrap
- **CSS variables** ready for theming (extensible architecture)

## 🔄 Modern Best Practices Demonstrated

- ✅ TypeScript with strict mode
- ✅ ES6+ syntax (const, arrow functions, destructuring, spread)
- ✅ Modern React patterns (hooks, functional components, composition)
- ✅ Client-side routing with React Router
- ✅ Data-driven component rendering
- ✅ Accessibility-first markup
- ✅ Modular file organization
- ✅ Centralized type definitions
- ✅ Component-level testing

## 📈 Future Enhancements

Ideas for taking this project further:
- Migrate from Create React App to Vite for faster builds
- Add Storybook for component documentation
- Implement code splitting with `React.lazy`
- Add a contact form with validation (Formik / React Hook Form)
- Integrate a CMS for blog posts (Contentful, Strapi)
- Add unit tests for every component
- Implement CI pipeline with GitHub Actions
- Add internationalization (i18n)

## 👨‍💻 Author

**mvdevelop** — GitHub: [@mvdevelop](https://github.com/mvdevelop)

## 📄 License

This project is licensed under the MIT License.