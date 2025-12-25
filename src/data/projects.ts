import ecommerceImg from '@/assets/project-ecommerce.jpg';
import thesisImg from '@/assets/project-thesis.jpg';
import restaurantImg from '@/assets/project-restaurant.jpg';
import companyImg from '@/assets/project-company.jpg';
import landingImg from '@/assets/project-landing.jpg';
import businessImg from '@/assets/project-business.jpg';

// E-commerce screenshots
import ecomHomepage from '@/assets/screenshots/ecom-homepage.jpg';
import ecomUserDashboard from '@/assets/screenshots/ecom-user-dashboard.jpg';
import ecomAdminDashboard from '@/assets/screenshots/ecom-admin-dashboard.jpg';

// Thesis screenshots
import thesisStudentPortal from '@/assets/screenshots/thesis-student-portal.jpg';
import thesisSupervisorDashboard from '@/assets/screenshots/thesis-supervisor-dashboard.jpg';

// Restaurant screenshots
import restoMenu from '@/assets/screenshots/resto-menu.jpg';
import restoReservation from '@/assets/screenshots/resto-reservation.jpg';

// CMS screenshots
import cmsHomepage from '@/assets/screenshots/cms-homepage.jpg';
import cmsPageBuilder from '@/assets/screenshots/cms-page-builder.jpg';

// Landing page screenshots
import landingHero from '@/assets/screenshots/landing-hero.jpg';

// Portfolio screenshots
import portfolioGrid from '@/assets/screenshots/portfolio-grid.jpg';
import portfolioDetail from '@/assets/screenshots/portfolio-detail.jpg';

// School Management screenshots
import schoolAdminDashboard from '@/assets/screenshots/school-admin-dashboard.jpg';
import schoolStudentPortal from '@/assets/screenshots/school-student-portal.jpg';
import schoolTeacherDashboard from '@/assets/screenshots/school-teacher-dashboard.jpg';
import schoolParentPortal from '@/assets/screenshots/school-parent-portal.jpg';

export interface ProjectSection {
  title: string;
  content: string;
  code?: string;
  codeLanguage?: string;
}

export interface ProjectScreenshot {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
  screenshots: ProjectScreenshot[];
  demo: string;
  github: string;
  featured: boolean;
  category: string;
  sections: ProjectSection[];
  challenges: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    slug: 'laravel-ecommerce-platform',
    title: 'Laravel E-commerce Platform',
    description: 'A full-featured e-commerce solution with user authentication, shopping cart, order management, and a comprehensive admin dashboard. Built with Laravel and modern UI principles.',
    longDescription: 'This comprehensive e-commerce platform demonstrates my expertise in building scalable, secure, and user-friendly online shopping solutions. The application features a complete shopping experience from product browsing to checkout, along with a powerful admin dashboard for managing products, orders, and customers.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    features: ['Authentication', 'Cart System', 'Order Management', 'Admin Dashboard', 'Responsive Design', 'Payment Integration', 'Inventory Management', 'Email Notifications'],
    image: ecommerceImg,
    screenshots: [
      { title: 'Public Homepage', description: 'Landing page with featured products and promotions', image: ecomHomepage },
      { title: 'User Dashboard', description: 'Customer dashboard with order history and account settings', image: ecomUserDashboard },
      { title: 'Admin Dashboard', description: 'Admin panel with sales analytics and order management', image: ecomAdminDashboard },
      { title: 'Product Catalog', description: 'Product listing with filters and search functionality', image: ecommerceImg },
      { title: 'Shopping Cart', description: 'Cart page with quantity controls and price summary', image: ecommerceImg },
    ],
    demo: '#',
    github: '#',
    featured: true,
    category: 'Web Application',
    sections: [
      {
        title: 'Project Overview',
        content: 'The Laravel E-commerce Platform is a full-stack web application designed to provide a seamless online shopping experience. Built with Laravel 10 and following MVC architecture, it incorporates best practices for security, performance, and maintainability. The platform supports multiple product categories, user reviews, wishlists, and a comprehensive order tracking system.'
      },
      {
        title: 'Authentication System',
        content: 'Implemented a robust authentication system using Laravel\'s built-in authentication scaffolding with custom modifications for role-based access control. Users can register, login, and manage their profiles while admins have access to additional dashboard features.',
        code: `// User Authentication Controller
public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:8',
    ]);

    if (Auth::attempt($credentials, $request->remember)) {
        $request->session()->regenerate();
        
        if (Auth::user()->isAdmin()) {
            return redirect()->intended('admin/dashboard');
        }
        
        return redirect()->intended('dashboard');
    }

    return back()->withErrors([
        'email' => 'Invalid credentials provided.',
    ]);
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Shopping Cart Implementation',
        content: 'The cart system uses session-based storage for guests and database storage for authenticated users. It supports quantity updates, item removal, and automatic price calculations with tax and shipping.',
        code: `// Cart Service
class CartService
{
    public function addToCart(Product $product, int $quantity = 1): void
    {
        $cart = $this->getCart();
        
        if (isset($cart[$product->id])) {
            $cart[$product->id]['quantity'] += $quantity;
        } else {
            $cart[$product->id] = [
                'product_id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'quantity' => $quantity,
                'image' => $product->image_url,
            ];
        }
        
        $this->saveCart($cart);
    }
    
    public function getTotal(): float
    {
        return collect($this->getCart())
            ->sum(fn($item) => $item['price'] * $item['quantity']);
    }
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Admin Dashboard',
        content: 'A comprehensive admin panel built with Bootstrap and Chart.js for analytics. Features include product management, order processing, customer management, and sales reports with visual charts.'
      }
    ],
    challenges: [
      'Implementing real-time inventory updates to prevent overselling',
      'Designing a scalable database schema for product variants',
      'Ensuring secure payment processing with proper error handling',
      'Optimizing database queries for product listings with filters'
    ],
    solutions: [
      'Used database transactions and row locking for inventory management',
      'Implemented EAV (Entity-Attribute-Value) pattern for flexible product attributes',
      'Integrated Stripe with webhook handling and comprehensive logging',
      'Applied eager loading and query caching with Redis'
    ]
  },
  {
    slug: 'university-thesis-repository',
    title: 'University Repository Management System',
    description: 'A production-ready thesis lifecycle automation platform developed over 1.5 years for Premier University, Chattogram. Officially integrated with the university website and actively used in production with real-time API integration.',
    longDescription: 'This University Repository Management System represents 1.5 years of dedicated development as our Final Year Project at Premier University, Chattogram. The system is now officially integrated with the university\'s main website and is actively used in production. It automates the entire thesis lifecycle — from group formation and intelligent supervisor assignment to report submission, review, PDF annotation, evaluation, and public thesis archiving — replacing inefficient manual workflows.',
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'REST API', 'JavaScript', 'jQuery', 'Chart.js'],
    features: [
      'Multi-role RBAC (Admin, Advisor, Supervisor, Co-Supervisor, Panel Member, Student)',
      'Intelligent Supervisor Assignment Algorithms',
      'Area of Interest-based Matching',
      'Rank/Priority-based Matching',
      'Hybrid Algorithm with Workload Balancing',
      'PDF Annotation Studio (in-browser feedback)',
      'Real-time University API Integration',
      'Meeting Management & History Tracking',
      'Excel-based Bulk Group Import',
      'Public Thesis Repository',
      'Real-time Notifications',
      'Performance Monitoring Dashboards',
      'Supervisor Capacity Validation'
    ],
    image: thesisImg,
    screenshots: [
      { title: 'Student Portal', description: 'Student dashboard for group formation and thesis submission', image: thesisStudentPortal },
      { title: 'Supervisor Dashboard', description: 'Supervisor panel with assigned groups and review tools', image: thesisSupervisorDashboard },
      { title: 'PDF Annotation Studio', description: 'In-browser PDF feedback and commenting system', image: thesisImg },
      { title: 'Admin Control Panel', description: 'System configuration and user management', image: thesisImg },
    ],
    demo: '#',
    github: '#',
    featured: true,
    category: 'Full-Stack Application',
    sections: [
      {
        title: 'Project Overview',
        content: 'This University Repository Management System represents 1.5 years of dedicated development as our Final Year Project at Premier University, Chattogram. The system is now officially integrated with the university\'s main website and is actively used in production. It revolutionizes the thesis management process by replacing inefficient manual workflows with a fully automated digital solution that handles everything from initial group formation through intelligent supervisor assignment algorithms to final thesis archiving in a public repository.'
      },
      {
        title: 'Intelligent Supervisor Assignment Algorithms',
        content: 'Our proprietary matching system uses three sophisticated algorithms:\n\n**1. Area of Interest Matching**: Analyzes student research topics against supervisor expertise areas using keyword matching and semantic similarity scoring.\n\n**2. Rank/Priority-based Matching**: Considers faculty seniority, publication history, and current research focus to optimize assignments.\n\n**3. Hybrid Algorithm**: Combines both approaches with configurable weights, ensuring optimal matches while respecting supervisor capacity limits and workload distribution.',
        code: `// Hybrid Supervisor Assignment Algorithm
public function assignSupervisor(Group $group): Supervisor
{
    $candidates = $this->getSupervisorCandidates($group->area_of_interest);
    
    return collect($candidates)
        ->filter(fn($s) => $s->current_load < $s->max_capacity)
        ->map(fn($s) => [
            'supervisor' => $s,
            'interest_score' => $this->calculateInterestMatch($group, $s),
            'rank_score' => $this->calculateRankScore($s),
            'workload_score' => $this->calculateWorkloadBalance($s)
        ])
        ->sortByDesc(fn($item) => 
            ($item['interest_score'] * 0.5) + 
            ($item['rank_score'] * 0.3) + 
            ($item['workload_score'] * 0.2)
        )
        ->first()['supervisor'];
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Multi-Role Access Control System',
        content: 'The system implements comprehensive Role-Based Access Control (RBAC) supporting six distinct roles:\n\n• **Admin**: Full system control, user management, system configuration\n• **Advisor**: Department-level oversight, batch management, report generation\n• **Supervisor**: Group management, thesis review, meeting scheduling\n• **Co-Supervisor**: Collaborative supervision with limited permissions\n• **Panel Member**: Evaluation access, defense scheduling, grading\n• **Student**: Group formation, submission, progress tracking\n\nEach role has granular permissions controlling access to specific features and data.',
        code: `// Role-Based Policy
class ThesisPolicy
{
    public function review(User $user, Thesis $thesis): bool
    {
        return $user->hasRole(['supervisor', 'co_supervisor']) 
            && $thesis->supervisors->contains($user->id);
    }

    public function evaluate(User $user, Thesis $thesis): bool
    {
        return $user->hasRole('panel_member')
            && $thesis->panel_members->contains($user->id);
    }

    public function approve(User $user, Thesis $thesis): bool
    {
        return $user->hasRole(['admin', 'advisor'])
            || ($user->hasRole('supervisor') && $thesis->supervisor_id === $user->id);
    }
}`,
        codeLanguage: 'php'
      },
      {
        title: 'PDF Annotation Studio',
        content: 'A fully-featured in-browser PDF annotation system that enables supervisors and panel members to provide feedback directly on thesis documents:\n\n• Highlight text with color-coded annotations\n• Add margin comments and suggestions\n• Draw shapes and arrows for visual feedback\n• Threaded discussion on specific annotations\n• Export annotated PDF with all comments\n• Version history tracking for all annotations\n\nThis eliminates the need for external PDF tools and keeps all feedback within the system.'
      },
      {
        title: 'Real-time University API Integration',
        content: 'The system maintains live connection with Premier University\'s backend systems for seamless data synchronization:\n\n• **Authentication**: SSO integration with university credentials\n• **Student Data**: Real-time sync of enrollment, department, and batch info\n• **Faculty Data**: Current faculty roster with designations and departments\n• **Batch Sync**: Automatic semester and batch updates\n\nAll data remains synchronized without manual intervention.',
        code: `// University API Service
class UniversityApiService
{
    public function syncStudentData(string $studentId): Student
    {
        $response = Http::withToken($this->apiToken)
            ->get("{$this->baseUrl}/students/{$studentId}");
        
        return Student::updateOrCreate(
            ['university_id' => $studentId],
            [
                'name' => $response['name'],
                'email' => $response['email'],
                'department_id' => $response['department_id'],
                'batch' => $response['batch'],
                'semester' => $response['current_semester'],
                'synced_at' => now()
            ]
        );
    }
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Complete Thesis Lifecycle Management',
        content: 'The system automates every stage of the thesis journey:\n\n**1. Group Formation**: Students form groups with size validation and deadline enforcement\n**2. Supervisor Assignment**: Intelligent matching using our algorithms\n**3. Proposal Submission**: Document upload with version control\n**4. Progress Tracking**: Milestone management with meeting logs\n**5. Report Submission**: Multi-stage submission (Proposal, Mid-term, Final)\n**6. Review & Annotation**: In-browser PDF feedback system\n**7. Defense Scheduling**: Panel assignment and calendar integration\n**8. Evaluation**: Rubric-based grading with panel consensus\n**9. Public Archive**: Approved theses published to searchable repository'
      }
    ],
    challenges: [
      'Integrating with legacy university systems lacking modern API standards',
      'Designing fair and efficient supervisor matching algorithms',
      'Building a performant in-browser PDF annotation system',
      'Managing complex role hierarchies with granular permissions',
      'Ensuring system reliability for production university use'
    ],
    solutions: [
      'Built adapter layer to normalize legacy API responses with caching for reliability',
      'Developed hybrid algorithm combining interest matching, rankings, and workload balancing',
      'Implemented PDF.js with custom annotation layer and real-time sync via WebSockets',
      'Designed policy-based RBAC system with hierarchical permission inheritance',
      'Extensive testing, monitoring dashboards, and automated backup systems for 99.9% uptime'
    ]
  },
  {
    slug: 'restaurant-management-system',
    title: 'Smart Restaurant Management System',
    description: 'A comprehensive restaurant solution featuring Admin Panel, POS System, KOT Management, Multi-language Support, QR Code Ordering, and Customer Portal with role-based access control.',
    longDescription: 'A full-featured Smart Restaurant Management System built with Laravel 12 and Vue.js 3. The system provides a complete solution for restaurant operations including an Admin Panel with real-time analytics, POS System, Kitchen Order Ticket (KOT) management, inventory tracking, supplier management, and a responsive public website with multi-language support (English, Arabic, Bengali) and RTL layout.',
    tech: ['Laravel 12', 'Vue.js 3', 'Inertia.js', 'MySQL 8.0', 'Tailwind CSS', 'Pinia', 'Chart.js', 'DomPDF', 'Vue I18n'],
    features: [
      'Role-Based Access Control',
      'Real-time Analytics Dashboard',
      'Menu & Category Management',
      'QR Code Generation',
      'POS System',
      'KOT System',
      'Table Management',
      'Online Ordering',
      'Reservation System',
      'Inventory Management',
      'Supplier Management',
      'Multi-Language (EN/AR/BN)',
      'RTL Support',
      'Customer Portal',
      'Order Tracking',
      'Reports & Analytics'
    ],
    image: restaurantImg,
    screenshots: [
      { title: 'Admin Dashboard', description: 'Real-time analytics with sales, orders, and performance metrics', image: restoMenu },
      { title: 'POS System', description: 'Point of sale interface for quick transactions', image: restoReservation },
      { title: 'Kitchen Display (KOT)', description: 'Kitchen Order Ticket management for chefs', image: restaurantImg },
      { title: 'Menu Management', description: 'Categories, items, variations, and pricing control', image: restaurantImg },
      { title: 'Table Management', description: 'QR code generation and table tracking', image: restoReservation },
      { title: 'Public Website', description: 'Customer-facing menu with multi-language support', image: restoMenu },
    ],
    demo: '#',
    github: '#',
    featured: true,
    category: 'Full-Stack Application',
    sections: [
      {
        title: 'Project Overview',
        content: 'The Smart Restaurant Management System is a comprehensive solution designed to digitize and streamline all restaurant operations. It features a powerful Admin Panel for management, a responsive public website for customers, and a dedicated Customer Portal. The system supports 6 user roles (Admin, Manager, Chef, Waiter, Cashier, Customer) with granular access control, multi-language support with RTL layout, and real-time order management.'
      },
      {
        title: 'Admin Panel Features',
        content: 'The admin panel includes Dashboard with real-time analytics, User Management with role-based access, Menu Management with categories and variations, QR Code Generation, Print Menu Card functionality, Order Management for dine-in/takeaway/online orders, Table Management, Reservation System, POS System, KOT System, Inventory Management, Supplier Management, Reports & Analytics, Expenses Management, Staff Notifications, and System Settings.'
      },
      {
        title: 'Role-Based Access Control',
        content: 'Implemented a sophisticated permission system with 6 distinct roles: Admin (full access), Manager (operations management), Chef (kitchen & KOT access), Waiter (order taking), Cashier (POS access), and Customer (ordering & reservations). Each role has carefully designed permissions for secure access control.',
        code: `// Role-Based Middleware
class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!$request->user() || !$request->user()->hasAnyRole($roles)) {
            abort(403, 'Unauthorized action.');
        }
        return $next($request);
    }
}

// Usage in routes
Route::middleware(['auth', 'role:admin,manager'])->group(function () {
    Route::resource('menu-items', MenuItemController::class);
    Route::resource('categories', CategoryController::class);
    Route::get('reports', [ReportController::class, 'index']);
});

Route::middleware(['auth', 'role:chef,manager,admin'])->group(function () {
    Route::get('kot', [KOTController::class, 'index']);
    Route::patch('kot/{order}/status', [KOTController::class, 'updateStatus']);
});`,
        codeLanguage: 'php'
      },
      {
        title: 'Kitchen Order Ticket (KOT) System',
        content: 'Real-time Kitchen Order Ticket management system that displays orders to kitchen staff with priority queuing, order status updates, and sound notifications for new orders. The KOT interface is optimized for kitchen displays with large fonts and color-coded status indicators.',
        code: `<script setup>
import { ref, computed, onMounted } from 'vue'
import { useOrderStore } from '@/stores/orders'

const orderStore = useOrderStore()
const activeOrders = computed(() => 
  orderStore.orders.filter(o => ['pending', 'preparing'].includes(o.status))
)

const updateOrderStatus = async (orderId, status) => {
  await orderStore.updateStatus(orderId, status)
  if (status === 'ready') {
    notifyWaiter(orderId)
  }
}

// Real-time order subscription
onMounted(() => {
  Echo.channel('kitchen')
    .listen('NewOrderPlaced', (e) => {
      orderStore.addOrder(e.order)
      playNotificationSound()
    })
})
</script>`,
        codeLanguage: 'vue'
      },
      {
        title: 'Multi-Language & RTL Support',
        content: 'The public website supports 3 languages (English, Arabic, Bengali) using Vue I18n. Full RTL (Right-to-Left) layout support for Arabic language with automatic direction switching based on selected locale.',
        code: `// i18n Configuration
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'
import bn from '@/locales/bn.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, ar, bn }
})

// RTL Direction Handler
watch(() => i18n.global.locale.value, (newLocale) => {
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = newLocale
})`,
        codeLanguage: 'typescript'
      },
      {
        title: 'QR Code & Table Management',
        content: 'Automatic QR code generation for menu items and tables. Customers can scan table QR codes to view the menu and place orders directly from their phones. The system tracks table occupancy and manages reservations.',
        code: `// QR Code Generation Service
class QRCodeService
{
    public function generateTableQR(Table $table): string
    {
        $url = route('menu.table', ['table' => $table->id]);
        
        return QrCode::format('png')
            ->size(300)
            ->margin(2)
            ->generate($url);
    }

    public function generateMenuItemQR(MenuItem $item): string
    {
        $url = route('menu.item', ['item' => $item->slug]);
        
        return QrCode::format('png')
            ->size(200)
            ->generate($url);
    }
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Customer Portal',
        content: 'A dedicated customer portal where users can view their dashboard with order statistics, browse order history, track active orders in real-time, manage their profile, reorder from previous orders, and cancel pending orders.'
      },
      {
        title: 'Public Website',
        content: 'A fully responsive public website with 13 sections on the home page, category-wise menu filtering with search, detailed menu item pages with image galleries, shopping cart with Pinia state management, complete checkout process, order confirmation with tracking, online table reservation, gallery page, contact page with Google Maps, and about page.'
      }
    ],
    challenges: [
      'Implementing real-time order synchronization between POS, kitchen, and waiters',
      'Building a flexible role-based access control system for 6 user types',
      'Supporting RTL layout with seamless language switching',
      'Managing concurrent table reservations and preventing double-booking',
      'Optimizing kitchen display for real-time order updates during peak hours',
      'Generating printable menu cards with QR codes in PDF format'
    ],
    solutions: [
      'Used Laravel Echo with Pusher for WebSocket-based real-time updates',
      'Implemented Spatie Laravel Permission with custom middleware for granular access control',
      'Utilized Tailwind CSS RTL plugin with Vue I18n for automatic direction switching',
      'Applied database transactions with pessimistic locking for reservation management',
      'Implemented Vue.js Composition API with Pinia for reactive state management',
      'Integrated DomPDF with custom blade templates for professional menu PDF generation'
    ]
  },
  {
    slug: 'company-website-cms',
    title: 'Company Website CMS',
    description: 'Dynamic company website with CMS-based pages, blog system, services showcase, and contact forms.',
    longDescription: 'A flexible content management system built for corporate websites. Features include dynamic page creation, blog management, service showcases, team member profiles, and integrated contact forms with email notifications.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    features: ['Dynamic Pages', 'Blog System', 'Services Showcase', 'Contact Forms', 'Team Management', 'SEO Tools'],
    image: companyImg,
    screenshots: [
      { title: 'Homepage', description: 'Company landing page with hero section', image: cmsHomepage },
      { title: 'Page Builder', description: 'Drag-and-drop page editor interface', image: cmsPageBuilder },
      { title: 'Blog Manager', description: 'Blog post creation and management panel', image: companyImg },
      { title: 'Admin Settings', description: 'Site-wide configuration and SEO settings', image: companyImg },
    ],
    demo: '#',
    github: '#',
    featured: false,
    category: 'CMS',
    sections: [
      {
        title: 'Project Overview',
        content: 'The Company Website CMS provides businesses with a powerful yet easy-to-use platform for managing their online presence. The modular architecture allows for easy customization and extension.'
      },
      {
        title: 'Page Builder',
        content: 'Created a flexible page builder using Vue.js components that allows non-technical users to create and arrange page sections through a drag-and-drop interface.',
        code: `// Page Builder Component
<template>
  <draggable 
    v-model="sections" 
    group="sections"
    @change="updatePageContent"
  >
    <template #item="{ element }">
      <component 
        :is="getSectionComponent(element.type)"
        :data="element.data"
        @update="updateSection"
      />
    </template>
  </draggable>
</template>`,
        codeLanguage: 'vue'
      },
      {
        title: 'SEO Management',
        content: 'Built-in SEO tools for meta tags, Open Graph data, sitemap generation, and schema markup to improve search engine visibility.'
      }
    ],
    challenges: [
      'Creating a user-friendly page builder',
      'Maintaining performance with dynamic content',
      'Implementing flexible theming system'
    ],
    solutions: [
      'Used Vue.js with draggable components',
      'Implemented aggressive caching strategies',
      'Created a theme configuration system with CSS variables'
    ]
  },
  {
    slug: 'business-landing-pages',
    title: 'Business Landing Pages',
    description: 'Collection of responsive landing pages and business websites with modern UI and optimal performance.',
    longDescription: 'A collection of high-converting landing pages designed for various business needs. Each landing page is optimized for performance, accessibility, and conversion, featuring modern design patterns and smooth animations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready', 'Animation Effects', 'Contact Integration', 'Analytics Ready'],
    image: landingImg,
    screenshots: [
      { title: 'Hero Section', description: 'High-impact hero with CTA buttons', image: landingHero },
      { title: 'Features Section', description: 'Product features showcase', image: landingImg },
      { title: 'Testimonials', description: 'Customer reviews and social proof', image: landingImg },
      { title: 'Mobile View', description: 'Responsive mobile design', image: landingImg },
    ],
    demo: '#',
    github: '#',
    featured: false,
    category: 'Frontend',
    sections: [
      {
        title: 'Project Overview',
        content: 'These landing pages demonstrate expertise in frontend development with focus on conversion optimization, performance, and user experience. Each page is built with semantic HTML, modern CSS, and vanilla JavaScript for maximum compatibility and speed.'
      },
      {
        title: 'Performance Optimization',
        content: 'Achieved 95+ scores on Google Lighthouse through careful optimization of assets, lazy loading, and efficient code practices.',
        code: `// Lazy Loading Implementation
const lazyImages = document.querySelectorAll('[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));`,
        codeLanguage: 'javascript'
      },
      {
        title: 'Responsive Design',
        content: 'Mobile-first approach ensuring perfect display across all device sizes, from smartphones to large desktop monitors.'
      }
    ],
    challenges: [
      'Achieving fast load times with rich visuals',
      'Ensuring cross-browser compatibility',
      'Creating smooth animations without jank'
    ],
    solutions: [
      'Optimized images and implemented lazy loading',
      'Used progressive enhancement and polyfills',
      'Leveraged CSS transforms and requestAnimationFrame'
    ]
  },
  {
    slug: 'client-portfolio-websites',
    title: 'Client Portfolio Websites',
    description: 'Custom portfolio websites for clients featuring modern design, animations, and responsive layouts.',
    longDescription: 'Custom-designed portfolio websites for creative professionals including photographers, designers, and artists. Each portfolio is tailored to showcase the client\'s work in the best possible light with elegant galleries, smooth transitions, and intuitive navigation.',
    tech: ['Tailwind CSS', 'JavaScript', 'Laravel'],
    features: ['Custom Design', 'Image Galleries', 'Smooth Animations', 'Responsive Layout', 'Contact Forms', 'Blog Integration'],
    image: businessImg,
    screenshots: [
      { title: 'Portfolio Grid', description: 'Gallery view of client work samples', image: portfolioGrid },
      { title: 'Project Detail', description: 'Individual project showcase page', image: portfolioDetail },
      { title: 'About Page', description: 'Client biography and credentials', image: businessImg },
      { title: 'Contact Form', description: 'Inquiry form with social links', image: businessImg },
    ],
    demo: '#',
    github: '#',
    featured: false,
    category: 'Portfolio',
    sections: [
      {
        title: 'Project Overview',
        content: 'These portfolio websites are crafted to help creative professionals showcase their work effectively. Each site is uniquely designed to reflect the client\'s personal brand and style.'
      },
      {
        title: 'Gallery System',
        content: 'Built a flexible gallery system with lightbox functionality, lazy loading, and smooth transitions for an optimal viewing experience.',
        code: `// Gallery Lightbox
class Lightbox {
  constructor(gallery) {
    this.gallery = gallery;
    this.images = gallery.querySelectorAll('.gallery-item');
    this.currentIndex = 0;
    this.init();
  }

  open(index) {
    this.currentIndex = index;
    this.overlay.classList.add('active');
    this.updateImage();
    document.body.style.overflow = 'hidden';
  }

  updateImage() {
    const img = this.images[this.currentIndex];
    this.lightboxImage.src = img.dataset.full;
    this.caption.textContent = img.dataset.caption;
  }
}`,
        codeLanguage: 'javascript'
      },
      {
        title: 'Animation System',
        content: 'Implemented scroll-triggered animations using Intersection Observer API for performant, smooth reveal effects throughout the site.'
      }
    ],
    challenges: [
      'Balancing visual richness with performance',
      'Creating unique designs that still feel cohesive',
      'Implementing accessible image galleries'
    ],
    solutions: [
      'Used modern image formats and responsive images',
      'Created a component library with customizable themes',
      'Implemented ARIA labels and keyboard navigation'
    ]
  },
  {
    slug: 'school-management-system',
    title: 'School Management System',
    description: 'A comprehensive school administration platform with student portals, attendance tracking, grade management, and parent communication features.',
    longDescription: 'A full-featured School Management System built to streamline educational institution operations. The platform covers all aspects of school administration including student enrollment, attendance tracking, grade management, class scheduling, fee management, and seamless communication between teachers, students, and parents.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'REST API', 'Chart.js'],
    features: [
      'Student Information System',
      'Attendance Management',
      'Grade & Report Cards',
      'Class Scheduling',
      'Fee Management',
      'Parent Portal',
      'Teacher Dashboard',
      'Exam Management',
      'Library Management',
      'Notice Board',
      'SMS/Email Notifications',
      'Role-Based Access Control'
    ],
    image: schoolAdminDashboard,
    screenshots: [
      { title: 'Admin Dashboard', description: 'Overview of school statistics and quick actions', image: schoolAdminDashboard },
      { title: 'Student Portal', description: 'Student view with grades, attendance, and assignments', image: schoolStudentPortal },
      { title: 'Teacher Dashboard', description: 'Class management and grade entry interface', image: schoolTeacherDashboard },
      { title: 'Parent Portal', description: 'Parent access to student progress and fee status', image: schoolParentPortal },
    ],
    demo: '#',
    github: '#',
    featured: false,
    category: 'Web Application',
    sections: [
      {
        title: 'Project Overview',
        content: 'The School Management System is a comprehensive solution designed to digitize and streamline all administrative and academic processes of educational institutions. It provides dedicated portals for administrators, teachers, students, and parents with role-specific features and dashboards.'
      },
      {
        title: 'Student Management',
        content: 'Complete student lifecycle management from admission to graduation, including profile management, document storage, and academic history tracking.',
        code: `// Student Enrollment Service
class StudentService
{
    public function enroll(array $data): Student
    {
        return DB::transaction(function () use ($data) {
            $student = Student::create([
                'admission_no' => $this->generateAdmissionNumber(),
                'name' => $data['name'],
                'class_id' => $data['class_id'],
                'section_id' => $data['section_id'],
                'guardian_id' => $data['guardian_id'],
            ]);
            
            $student->academicRecords()->create([
                'academic_year_id' => AcademicYear::current()->id,
                'status' => 'active'
            ]);
            
            return $student;
        });
    }
}`,
        codeLanguage: 'php'
      },
      {
        title: 'Attendance System',
        content: 'Digital attendance tracking with daily/period-wise recording, absence notifications to parents, and comprehensive attendance reports with visual analytics.'
      },
      {
        title: 'Grade Management',
        content: 'Flexible grading system supporting multiple assessment types, automatic grade calculation, and professional report card generation with customizable templates.'
      }
    ],
    challenges: [
      'Managing complex relationships between students, classes, and subjects',
      'Implementing flexible grading systems for different standards',
      'Ensuring real-time parent notifications for attendance and grades',
      'Creating printable report cards with customizable formats'
    ],
    solutions: [
      'Designed normalized database schema with proper foreign key relationships',
      'Built configurable grading rules engine with weighted calculations',
      'Integrated SMS gateway and email notifications with queue processing',
      'Implemented DomPDF with Blade templates for dynamic report generation'
    ]
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
