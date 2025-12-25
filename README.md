# Amamul Ahasan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as a Full Stack Web Developer.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [License](#-license)

---

## 🛠 Tech Stack

### Frontend Framework
| Technology | Version | Description |
|------------|---------|-------------|
| **React** | ^18.3.1 | UI library for building component-based interfaces |
| **TypeScript** | Latest | Type-safe JavaScript for better developer experience |
| **Vite** | Latest | Next-generation frontend build tool |

### Styling & UI
| Technology | Description |
|------------|-------------|
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | Re-usable UI components built with Radix UI |
| **Framer Motion** | Production-ready animation library |
| **Lucide React** | Beautiful & consistent icon pack |

### Routing & State
| Technology | Description |
|------------|-------------|
| **React Router DOM** | Client-side routing |
| **TanStack Query** | Powerful data fetching & caching |
| **React Hook Form** | Performant form handling |
| **Zod** | TypeScript-first schema validation |

---

## 🎨 Design System

### Theme
**Dark Theme** - Modern dark color scheme with teal/cyan accent colors for a professional look.

### Color Palette (HSL Values)
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `222 47% 6%` | Dark navy background |
| `--foreground` | `210 40% 98%` | Light text color |
| `--primary` | `172 66% 50%` | Teal/cyan accent color |
| `--secondary` | `222 30% 14%` | Darker secondary surfaces |
| `--muted` | `222 30% 18%` | Muted backgrounds |
| `--muted-foreground` | `215 20% 55%` | Subdued text |
| `--card` | `222 47% 8%` | Card backgrounds |
| `--border` | `222 30% 18%` | Border color |

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(172 66% 50%), hsl(190 80% 45%));
--gradient-hero: linear-gradient(135deg, hsl(222 47% 6%) 0%, hsl(222 47% 10%) 50%, hsl(222 47% 6%) 100%);
--gradient-card: linear-gradient(145deg, hsl(222 47% 10%), hsl(222 47% 8%));
--gradient-glow: radial-gradient(ellipse at center, hsl(172 66% 50% / 0.15), transparent 70%);
```

### Shadows
```css
--shadow-glow: 0 0 60px hsl(172 66% 50% / 0.2);
--shadow-card: 0 8px 32px hsl(0 0% 0% / 0.3);
--shadow-card-hover: 0 16px 48px hsl(0 0% 0% / 0.4);
```

### Typography
| Font | Usage | Weights |
|------|-------|---------|
| **Sora** | Headings (h1-h6) | 300, 400, 500, 600, 700, 800 |
| **Inter** | Body text | 300, 400, 500, 600, 700 |

### Border Radius
- Default radius: `0.75rem` (12px)

---

## ✨ Features

### Core Sections
- **Hero Section** - Animated introduction with profile photo and key stats
- **About Section** - Personal information and background
- **Skills Section** - Technical skills with animated tech stack display
- **Projects Section** - Featured and other professional projects
- **Services Section** - Web development services offered
- **Testimonials Section** - Client feedback and reviews
- **Experience Section** - Professional journey and education timeline
- **Blog Section** - Technical articles and tutorials
- **Contact Section** - Contact form and social links

### UI/UX Features
- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✅ **Dark Theme** - Modern dark color scheme
- ✅ **Smooth Animations** - Framer Motion powered animations
- ✅ **Glass Morphism** - Glassmorphism card effects
- ✅ **Glow Effects** - Primary color glow on interactive elements
- ✅ **Scroll Animations** - Elements animate as they enter viewport
- ✅ **WhatsApp Integration** - Floating WhatsApp button for quick contact

### Technical Features
- ✅ **TypeScript** - Full type safety
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Fast Performance** - Vite build optimization
- ✅ **Component Library** - shadcn/ui components
- ✅ **Form Validation** - Zod schema validation
- ✅ **Toast Notifications** - User feedback system

---

## 📁 Project Structure

```
src/
├── assets/                 # Images and static assets
│   ├── profile-photo.jpg
│   ├── project-*.jpg      # Project images
│   └── screenshots/       # Project screenshots
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── motion.tsx     # Animation components
│   │   └── ...
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── BlogSection.tsx
│   ├── CTASection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── projects.ts        # Project data
│   └── blogPosts.ts       # Blog post data
├── hooks/
│   ├── use-mobile.tsx     # Mobile detection hook
│   └── use-toast.ts       # Toast notification hook
├── lib/
│   └── utils.ts           # Utility functions
├── pages/
│   ├── Index.tsx          # Home page
│   ├── About.tsx          # About page
│   ├── Skills.tsx         # Skills page
│   ├── Experience.tsx     # Experience page
│   ├── Projects.tsx       # Projects listing page
│   ├── ProjectDetails.tsx # Project detail page
│   ├── Services.tsx       # Services page
│   ├── Blog.tsx           # Blog listing page
│   ├── BlogPost.tsx       # Individual blog post
│   ├── Contact.tsx        # Contact page
│   └── NotFound.tsx       # 404 page
├── App.tsx                # Main app component
├── App.css                # Global styles
├── index.css              # Tailwind & design tokens
└── main.tsx               # App entry point
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun

### Installation

1. Clone the repository
```bash
git clone https://github.com/Ahasan39/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Start development server
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎯 Key Components

### Animation System
The project uses a custom animation system built on Framer Motion:

```tsx
import { 
  AnimatedSection,    // Fade-in on scroll
  StaggerContainer,   // Staggered children animations
  AnimatedItem,       // Individual animated items
  motion,             // Framer motion
  useInView           // Viewport detection
} from '@/components/ui/motion';
```

### Glass Card Effect
```tsx
<div className="glass-card glass-card-hover p-6">
  {/* Content */}
</div>
```

### Gradient Text
```tsx
<span className="gradient-text">Highlighted Text</span>
```

---

## 👤 Author

**Amamul Ahasan**
- GitHub: [@Ahasan39](https://github.com/Ahasan39)
- LinkedIn: [Amamul Ahasan](https://www.linkedin.com/in/amamul-ahasn)
- Facebook: [Ahasan Amamul](https://www.facebook.com/share/1E3xoyVnEK/)
- Email: amamulahasanmizan71@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Lovable](https://lovable.dev/) - AI-powered development platform

---

<p align="center">
  Made with ❤️ by Amamul Ahasan
</p>
