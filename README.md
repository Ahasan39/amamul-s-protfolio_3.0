# Amamul Ahasan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as a Full Stack Web Developer.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ahasan39.github.io/)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/Ahasan39/ahasan39.github.io)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📋 Table of Contents

- [Languages & Technologies](#-languages--technologies)
- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Performance Optimizations](#-performance-optimizations)
- [Deployment](#-deployment)
- [License](#-license)

---

## 💻 Languages & Technologies

### Core Languages
| Language | Usage | Percentage |
|----------|-------|------------|
| **TypeScript** | Primary language for all components, pages, and logic | ~85% |
| **CSS/SCSS** | Styling with Tailwind CSS utilities and custom CSS | ~10% |
| **HTML** | Semantic markup structure | ~3% |
| **JavaScript** | Configuration files (Vite, ESLint, PostCSS) | ~2% |

### Language Features Used

#### TypeScript (v5.8.3)
- **Type Safety**: Full type annotations for components, props, and functions
- **Interfaces & Types**: Custom type definitions for data structures
- **Generics**: Reusable type-safe components
- **Path Aliases**: `@/*` imports for cleaner code organization
- **Strict Mode**: Enhanced type checking (with selective relaxation)
- **JSX/TSX**: React components with TypeScript

```typescript
// Example: Type-safe component props
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  // Component implementation
};
```

#### CSS Technologies
- **Tailwind CSS v3.4.17**: Utility-first CSS framework
- **PostCSS v8.5.6**: CSS processing and autoprefixing
- **CSS Variables**: Custom properties for theming
- **CSS Animations**: Keyframe animations for smooth transitions
- **CSS Grid & Flexbox**: Modern layout systems
- **Media Queries**: Responsive design breakpoints

```css
/* Custom CSS Variables */
:root {
  --background: 222 47% 6%;
  --foreground: 210 40% 98%;
  --primary: 172 66% 50%;
  --gradient-primary: linear-gradient(135deg, hsl(172 66% 50%), hsl(190 80% 45%));
}
```

#### HTML5 Features
- **Semantic Elements**: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- **ARIA Attributes**: Accessibility labels and roles
- **Meta Tags**: SEO optimization and social media cards
- **Structured Data**: JSON-LD schema for search engines

---

## 🛠 Tech Stack

### Frontend Framework & Build Tools
| Technology | Version | Description |
|------------|---------|-------------|
| **React** | 18.3.1 | Component-based UI library with hooks |
| **TypeScript** | 5.8.3 | Type-safe JavaScript superset |
| **Vite** | 5.4.19 | Next-generation frontend build tool with HMR |
| **SWC** | Latest | Super-fast TypeScript/JavaScript compiler |

### Styling & UI Components
| Technology | Version | Description |
|------------|---------|-------------|
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **shadcn/ui** | Latest | Accessible & customizable component library |
| **Radix UI** | Latest | Unstyled, accessible UI primitives |
| **Framer Motion** | 12.23.26 | Production-ready animation library |
| **Lucide React** | 0.462.0 | Beautiful & consistent icon pack (1000+ icons) |
| **class-variance-authority** | 0.7.1 | CSS variant management |
| **tailwind-merge** | 2.6.0 | Merge Tailwind classes without conflicts |
| **tailwindcss-animate** | 1.0.7 | Animation utilities for Tailwind |

### Routing & Navigation
| Technology | Version | Description |
|------------|---------|-------------|
| **React Router DOM** | 6.30.1 | Declarative client-side routing |

### State Management & Data Fetching
| Technology | Version | Description |
|------------|---------|-------------|
| **TanStack Query** | 5.83.0 | Powerful async state management |
| **React Hook Form** | 7.61.1 | Performant form handling with validation |
| **Zod** | 3.25.76 | TypeScript-first schema validation |

### UI Enhancement Libraries
| Technology | Version | Description |
|------------|---------|-------------|
| **Embla Carousel** | 8.6.0 | Lightweight carousel library |
| **Recharts** | 2.15.4 | Composable charting library |
| **Sonner** | 1.7.4 | Opinionated toast component |
| **date-fns** | 3.6.0 | Modern date utility library |
| **cmdk** | 1.1.1 | Command menu component |
| **Vaul** | 0.9.9 | Drawer component for mobile |

### Development Tools
| Technology | Version | Description |
|------------|---------|-------------|
| **ESLint** | 9.32.0 | JavaScript/TypeScript linter |
| **TypeScript ESLint** | 8.38.0 | TypeScript-specific linting rules |
| **PostCSS** | 8.5.6 | CSS transformation tool |
| **Autoprefixer** | 10.4.21 | Automatic vendor prefix addition |
| **Terser** | 5.44.1 | JavaScript minifier for production |

### Deployment & CI/CD
| Technology | Description |
|------------|-------------|
| **GitHub Pages** | Static site hosting |
| **GitHub Actions** | Automated build and deployment pipeline |

---

## 🎨 Design System

### Theme Architecture
**Dark Theme** - Modern dark color scheme with teal/cyan accent colors for a professional, eye-friendly interface.

### Color Palette (HSL Values)
| Token | HSL Value | RGB Equivalent | Usage |
|-------|-----------|----------------|-------|
| `--background` | `222 47% 6%` | `rgb(8, 15, 22)` | Main dark background |
| `--foreground` | `210 40% 98%` | `rgb(247, 249, 250)` | Primary text color |
| `--primary` | `172 66% 50%` | `rgb(43, 211, 191)` | Teal accent (buttons, links) |
| `--primary-foreground` | `0 0% 100%` | `rgb(255, 255, 255)` | Text on primary color |
| `--secondary` | `222 30% 14%` | `rgb(25, 30, 36)` | Secondary surfaces |
| `--secondary-foreground` | `210 40% 98%` | `rgb(247, 249, 250)` | Text on secondary |
| `--muted` | `222 30% 18%` | `rgb(32, 39, 46)` | Muted backgrounds |
| `--muted-foreground` | `215 20% 55%` | `rgb(112, 128, 144)` | Subdued text |
| `--accent` | `222 30% 18%` | `rgb(32, 39, 46)` | Accent backgrounds |
| `--accent-foreground` | `210 40% 98%` | `rgb(247, 249, 250)` | Text on accent |
| `--destructive` | `0 62% 50%` | `rgb(207, 48, 48)` | Error/danger color |
| `--card` | `222 47% 8%` | `rgb(11, 18, 26)` | Card backgrounds |
| `--border` | `222 30% 18%` | `rgb(32, 39, 46)` | Border color |
| `--input` | `222 30% 18%` | `rgb(32, 39, 46)` | Input backgrounds |
| `--ring` | `172 66% 50%` | `rgb(43, 211, 191)` | Focus ring color |

### Gradients
```css
/* Primary gradient for buttons and highlights */
--gradient-primary: linear-gradient(135deg, hsl(172 66% 50%), hsl(190 80% 45%));

/* Hero section background gradient */
--gradient-hero: linear-gradient(135deg, hsl(222 47% 6%) 0%, hsl(222 47% 10%) 50%, hsl(222 47% 6%) 100%);

/* Card gradient for depth */
--gradient-card: linear-gradient(145deg, hsl(222 47% 10%), hsl(222 47% 8%));

/* Glow effect for interactive elements */
--gradient-glow: radial-gradient(ellipse at center, hsl(172 66% 50% / 0.15), transparent 70%);

/* Radial gradient for backgrounds */
--gradient-radial: radial-gradient(circle, var(--tw-gradient-stops));
```

### Shadows & Effects
```css
/* Glow effect for primary elements */
--shadow-glow: 0 0 60px hsl(172 66% 50% / 0.2);

/* Card shadow */
--shadow-card: 0 8px 32px hsl(0 0% 0% / 0.3);

/* Card hover shadow */
--shadow-card-hover: 0 16px 48px hsl(0 0% 0% / 0.4);

/* Glass morphism effect */
backdrop-filter: blur(12px);
background: hsl(222 47% 10% / 0.8);
```

### Typography System
| Font Family | Usage | Weights Available | Source |
|-------------|-------|-------------------|--------|
| **Sora** | Headings (h1-h6) | 300, 400, 500, 600, 700, 800 | Google Fonts |
| **Inter** | Body text, UI elements | 300, 400, 500, 600, 700 | Google Fonts |

#### Font Sizes (Tailwind Scale)
```css
text-xs: 0.75rem (12px)
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
```

### Spacing System
Based on Tailwind's 4px base unit:
```css
spacing: {
  0: 0px,
  1: 4px,
  2: 8px,
  3: 12px,
  4: 16px,
  6: 24px,
  8: 32px,
  12: 48px,
  16: 64px,
  20: 80px,
  24: 96px,
}
```

### Border Radius
```css
--radius: 0.75rem (12px) - Default
rounded-sm: 0.125rem (2px)
rounded: 0.25rem (4px)
rounded-md: 0.375rem (6px)
rounded-lg: 0.5rem (8px)
rounded-xl: 0.75rem (12px)
rounded-2xl: 1rem (16px)
rounded-full: 9999px
```

### Breakpoints (Responsive Design)
```css
sm: 640px   - Small devices (landscape phones)
md: 768px   - Medium devices (tablets)
lg: 1024px  - Large devices (desktops)
xl: 1280px  - Extra large devices
2xl: 1536px - 2X large devices
```

---

## ✨ Features

### Core Sections
- **Hero Section** - Animated introduction with profile photo, availability badge, and key statistics
- **About Section** - Personal background, journey, and professional philosophy
- **Skills Section** - Interactive tech stack display with categorized skills
- **Projects Section** - Portfolio showcase with filtering and detailed project pages
- **Services Section** - Web development services with pricing and features
- **Testimonials Section** - Client feedback carousel with ratings
- **Experience Section** - Professional timeline and education history
- **Blog Section** - Technical articles with syntax highlighting
- **Contact Section** - Multi-channel contact form with validation
- **CTA Section** - Call-to-action for project inquiries

### UI/UX Features
- ✅ **Fully Responsive** - Mobile-first design optimized for all screen sizes
- ✅ **Dark Theme** - Professional dark color scheme with teal accents
- ✅ **Smooth Animations** - Framer Motion powered scroll and hover animations
- ✅ **Glass Morphism** - Modern glassmorphism card effects with backdrop blur
- ✅ **Glow Effects** - Primary color glow on interactive elements
- ✅ **Scroll Animations** - Elements fade and slide in as they enter viewport
- ✅ **Micro-interactions** - Button hover states, scale effects, and transitions
- ✅ **Loading States** - Skeleton loaders and loading indicators
- ✅ **Toast Notifications** - User feedback for form submissions
- ✅ **WhatsApp Integration** - Floating WhatsApp button for instant contact
- ✅ **Smooth Scrolling** - Native smooth scroll behavior
- ✅ **Keyboard Navigation** - Full keyboard accessibility support

### Technical Features
- ✅ **TypeScript** - Full type safety across the entire codebase
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and JSON-LD
- ✅ **Performance Optimized** - Code splitting, lazy loading, and minification
- ✅ **Component Library** - Reusable shadcn/ui components
- ✅ **Form Validation** - Zod schema validation with React Hook Form
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **404 Page** - Custom not found page
- ✅ **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation
- ✅ **Progressive Enhancement** - Works without JavaScript (basic functionality)

### Animation Features
- **Fade In Animations** - Elements fade in on scroll
- **Stagger Animations** - Children animate in sequence
- **Hover Effects** - Scale, glow, and transform on hover
- **Page Transitions** - Smooth transitions between routes
- **Floating Elements** - Subtle floating animations for visual interest
- **Parallax Effects** - Background elements move at different speeds

---

## 📁 Project Structure

```
ahasan39.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD pipeline
├── public/
│   ├── favicon.ico                 # Site favicon
│   ├── favicon.jpg                 # Alternative favicon
│   ├── placeholder.svg             # Placeholder image
│   ├── robots.txt                  # Search engine crawling rules
│   └── .nojekyll                   # Disable Jekyll processing
├── src/
│   ├── assets/                     # Static assets
│   │   ├── screenshots/            # Project screenshots (15 images)
│   │   ├── profile-photo.jpg       # Profile picture
│   │   └── project-*.jpg           # Project thumbnail images (6 images)
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components (50+ components)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── motion.tsx          # Animation wrapper components
│   │   │   ├── toast.tsx
│   │   │   └── ...                 # 40+ more UI components
│   │   ├── AboutSection.tsx        # About section component
│   │   ├── BlogSection.tsx         # Blog listing section
│   │   ├── CodeBlock.tsx           # Syntax highlighted code blocks
│   │   ├── ContactSection.tsx      # Contact form section
│   │   ├── CTASection.tsx          # Call-to-action section
│   │   ├── ExperienceSection.tsx   # Experience timeline
│   │   ├── Footer.tsx              # Site footer
│   │   ├── HeroSection.tsx         # Hero/landing section
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── NavLink.tsx             # Navigation link component
│   │   ├── OptimizedImage.tsx      # Lazy-loaded image component
│   │   ├── ProjectsSection.tsx     # Projects showcase
│   │   ├── ServicesSection.tsx     # Services offered
│   │   ├── SkillsSection.tsx       # Skills display
│   │   ├── TableOfContents.tsx     # Blog post TOC
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   └── WhatsAppButton.tsx      # Floating WhatsApp button
│   ├── data/
│   │   ├── blogPosts.ts            # Blog post data (TypeScript)
│   │   └── projects.ts             # Project data (TypeScript)
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── About.tsx               # About page
│   │   ├── Blog.tsx                # Blog listing page
│   │   ├── BlogPost.tsx            # Individual blog post page
│   │   ├── Contact.tsx             # Contact page
│   │   ├── Experience.tsx          # Experience page
│   │   ├── Index.tsx               # Home page (main landing)
│   │   ├── NotFound.tsx            # 404 error page
│   │   ├── ProjectDetails.tsx      # Project detail page
│   │   ├── Projects.tsx            # Projects listing page
│   │   ├── Services.tsx            # Services page
│   │   └── Skills.tsx              # Skills page
│   ├── App.css                     # Global application styles
│   ├── App.tsx                     # Main app component with routing
│   ├── index.css                   # Tailwind imports & CSS variables
│   ├── main.tsx                    # Application entry point
│   └── vite-env.d.ts               # Vite type definitions
├── .gitignore                      # Git ignore rules
├── bun.lockb                       # Bun package lock file
├── components.json                 # shadcn/ui configuration
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML entry point
├── package.json                    # NPM dependencies and scripts
├── package-lock.json               # NPM lock file
├── postcss.config.js               # PostCSS configuration
├── README.md                       # This file
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # TypeScript app config
├── tsconfig.node.json              # TypeScript node config
└── vite.config.ts                  # Vite build configuration
```

### File Statistics
- **Total Components**: 60+ React components
- **Total Pages**: 10 routable pages
- **UI Components**: 50+ shadcn/ui components
- **Data Files**: 2 TypeScript data files
- **Custom Hooks**: 2 React hooks
- **Assets**: 22+ images
- **Configuration Files**: 8 config files

---

## 🏁 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or **bun** 1.0+)
- **Git** for version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ahasan39/ahasan39.github.io.git
cd ahasan39.github.io
```

2. **Install dependencies**
```bash
npm install
# or using bun
bun install
```

3. **Start development server**
```bash
npm run dev
# or using bun
bun dev
```

4. **Open in browser**
Navigate to [http://localhost:8080](http://localhost:8080)

### Environment Setup

No environment variables required for basic setup. The project works out of the box.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server on port 8080 |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run build:dev` | Build in development mode (with source maps) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

### Build Output
Production build creates:
- Minified JavaScript bundles with code splitting
- Optimized CSS with purged unused styles
- Compressed assets (images, fonts)
- Source maps (in dev mode)
- Typical bundle size: ~500KB (gzipped: ~150KB)

---

## ⚡ Performance Optimizations

### Build Optimizations
- **Code Splitting**: Vendor chunks separated (React, UI, Animations)
- **Tree Shaking**: Unused code eliminated
- **Minification**: Terser minification with console removal
- **Compression**: Gzip compression ready
- **Asset Optimization**: Image lazy loading and preloading

### Runtime Optimizations
- **Lazy Loading**: Images load only when in viewport
- **Intersection Observer**: Efficient scroll-based animations
- **React.memo**: Memoized components to prevent re-renders
- **Debouncing**: Form inputs debounced for performance
- **Virtual Scrolling**: Efficient list rendering (where applicable)

### Performance Metrics (Lighthouse)
- **Performance**: 90+ (Mobile), 95+ (Desktop)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Bundle Analysis
```
Main Bundle: ~300KB (uncompressed)
React Vendor: ~150KB
UI Vendor: ~100KB
Animation Vendor: ~80KB
Total (gzipped): ~150KB
```

---

## 🚀 Deployment

### GitHub Pages Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

#### Deployment Workflow
1. Push code to `main` branch
2. GitHub Actions triggers build workflow
3. Vite builds production bundle
4. Artifacts uploaded to GitHub Pages
5. Site deployed to `https://ahasan39.github.io/`

#### Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Deploy dist/ folder to any static hosting service
```

#### Deployment Configuration
- **Base URL**: `/` (root domain)
- **Build Output**: `dist/`
- **Node Version**: 20.x
- **Build Command**: `npm run build`

### Alternative Hosting Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect repo
- **Cloudflare Pages**: Connect GitHub and auto-deploy
- **AWS S3 + CloudFront**: Upload `dist/` to S3 bucket

---

## 🎯 Key Components & Patterns

### Animation System
Custom animation components built on Framer Motion:

```tsx
import { 
  AnimatedSection,      // Fade-in on scroll
  HeroAnimatedSection,  // Hero-specific animations
  StaggerContainer,     // Staggered children animations
  AnimatedItem,         // Individual animated items
  FloatingElement,      // Floating animation
  motion,               // Framer motion
  useInView             // Viewport detection
} from '@/components/ui/motion';

// Usage
<AnimatedSection delay={0.2}>
  <h2>Animated Heading</h2>
</AnimatedSection>
```

### Glass Card Effect
```tsx
<div className="glass-card glass-card-hover p-6 rounded-xl">
  <h3>Card Title</h3>
  <p>Card content with glassmorphism effect</p>
</div>
```

### Gradient Text
```tsx
<h1>
  Regular text <span className="gradient-text">Highlighted Text</span>
</h1>
```

### Custom Hooks
```tsx
// Mobile detection
import { useIsMobile } from '@/hooks/use-mobile';
const isMobile = useIsMobile();

// Toast notifications
import { useToast } from '@/hooks/use-toast';
const { toast } = useToast();
toast({ title: "Success!", description: "Action completed" });
```

### Form Validation Pattern
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

const form = useForm({
  resolver: zodResolver(formSchema),
});
```

---

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- Base path: `/`
- Build optimizations: Code splitting, minification
- Path aliases: `@/` → `./src/`
- Plugins: React SWC, Component Tagger

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2020
- Module: ESNext
- JSX: react-jsx
- Strict mode: Partially enabled
- Path mapping: `@/*` → `src/*`

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color scheme
- Extended animations
- Custom border radius
- Typography plugin
- Container queries

### ESLint Configuration (`eslint.config.js`)
- React hooks rules
- TypeScript rules
- React refresh plugin

---

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Browsers**: iOS Safari 12+, Chrome Android

---

## 📊 Project Statistics

- **Lines of Code**: ~15,000+
- **Components**: 60+
- **Pages**: 10
- **Dependencies**: 40+
- **Dev Dependencies**: 15+
- **Build Time**: ~30 seconds
- **Bundle Size**: ~150KB (gzipped)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Amamul Ahasan**
- **Portfolio**: [https://ahasan39.github.io/](https://ahasan39.github.io/)
- **GitHub**: [@Ahasan39](https://github.com/Ahasan39)
- **LinkedIn**: [Amamul Ahasan](https://www.linkedin.com/in/amamul-ahasn)
- **Facebook**: [Ahasan Amamul](https://www.facebook.com/share/1E3xoyVnEK/)
- **Email**: amamulahasanmizan71@gmail.com
- **WhatsApp**: [+880 1580-088039](https://wa.me/8801580088039)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[React](https://react.dev/)** - JavaScript library for building UIs
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[Lovable](https://lovable.dev/)** - AI-powered development platform

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Initial release
- ✅ Full portfolio website with 10 pages
- ✅ Dark theme with teal accents
- ✅ Responsive design for all devices
- ✅ Performance optimizations (90+ Lighthouse score)
- ✅ SEO optimization with meta tags
- ✅ GitHub Pages deployment with CI/CD
- ✅ 60+ reusable components
- ✅ TypeScript throughout
- ✅ Accessibility features (ARIA, keyboard navigation)

---

<p align="center">
  <strong>Made with ❤️ by Amamul Ahasan</strong>
  <br>
  <sub>Built with React, TypeScript, and Tailwind CSS</sub>
</p>

<p align="center">
  <a href="https://ahasan39.github.io/">View Live Demo</a> •
  <a href="https://github.com/Ahasan39/ahasan39.github.io/issues">Report Bug</a> •
  <a href="https://github.com/Ahasan39/ahasan39.github.io/issues">Request Feature</a>
</p>
