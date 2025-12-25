export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  author: string;
  content: BlogSection[];
  tags: string[];
}

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  code?: {
    language: string;
    snippet: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building RESTful APIs with Laravel: A Complete Guide',
    excerpt: 'Learn how to create robust and scalable RESTful APIs using Laravel, including authentication, validation, and best practices for API development.',
    category: 'Laravel',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    slug: 'building-restful-apis-laravel',
    author: 'Amamul Ahasan',
    tags: ['Laravel', 'PHP', 'API', 'REST'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'RESTful APIs are the backbone of modern web applications. Laravel provides an elegant and powerful framework for building APIs that are both robust and maintainable. In this comprehensive guide, we will explore how to create a complete RESTful API from scratch, covering everything from routing to authentication.'
      },
      {
        id: 'setting-up',
        title: 'Setting Up Your Laravel Project',
        content: 'First, let\'s create a new Laravel project and configure it for API development. We\'ll use Laravel\'s built-in features to set up our environment properly.',
        code: {
          language: 'bash',
          snippet: `# Create a new Laravel project
composer create-project laravel/laravel api-project

# Navigate to the project
cd api-project

# Install API scaffolding
php artisan install:api`
        }
      },
      {
        id: 'creating-routes',
        title: 'Creating API Routes',
        content: 'Laravel makes it easy to define API routes in the routes/api.php file. All routes defined here are automatically prefixed with /api and have the API middleware applied.',
        code: {
          language: 'php',
          snippet: `// routes/api.php
use App\\Http\\Controllers\\PostController;

Route::apiResource('posts', PostController::class);

Route::get('/posts/{post}/comments', [PostController::class, 'comments']);
Route::post('/posts/{post}/comments', [PostController::class, 'storeComment']);`
        }
      },
      {
        id: 'controller-methods',
        title: 'Building the Controller',
        content: 'The controller handles all the business logic for our API endpoints. We\'ll implement CRUD operations with proper error handling and response formatting.',
        code: {
          language: 'php',
          snippet: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Post;
use Illuminate\\Http\\Request;
use App\\Http\\Resources\\PostResource;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('author')->paginate(15);
        return PostResource::collection($posts);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        $post = Post::create($validated);
        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource($post->load('author', 'comments'));
    }
}`
        }
      },
      {
        id: 'api-resources',
        title: 'Using API Resources',
        content: 'API Resources in Laravel allow you to transform your models into JSON responses with precise control over the output format.',
        code: {
          language: 'php',
          snippet: `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Resources\\Json\\JsonResource;

class PostResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'author' => new UserResource($this->whenLoaded('author')),
            'comments_count' => $this->when(
                $this->comments_count !== null,
                $this->comments_count
            ),
            'created_at' => $this->created_at->toISOString(),
        ];
    }
}`
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'Building RESTful APIs with Laravel is a straightforward process thanks to its powerful features like API Resources, route model binding, and built-in validation. By following the patterns shown in this guide, you can create scalable and maintainable APIs for your applications. Remember to always implement proper authentication, rate limiting, and error handling in production environments.'
      }
    ]
  },
  {
    id: 2,
    title: 'Vue.js 3 Composition API: Getting Started',
    excerpt: 'Discover the power of Vue.js 3 Composition API and how it can improve your component organization and code reusability in modern applications.',
    category: 'Vue.js',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&h=400&fit=crop',
    slug: 'vuejs-3-composition-api',
    author: 'Amamul Ahasan',
    tags: ['Vue.js', 'JavaScript', 'Frontend', 'Composition API'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'The Composition API is one of the most significant additions to Vue.js 3. It provides a new way to organize component logic that scales better with complexity and enables better code reuse through composable functions.'
      },
      {
        id: 'why-composition-api',
        title: 'Why Use Composition API?',
        content: 'The Options API works great for simple components, but as components grow in complexity, related logic gets scattered across different options. The Composition API allows you to organize code by logical concern rather than option type.'
      },
      {
        id: 'setup-function',
        title: 'The Setup Function',
        content: 'The setup() function is the entry point for using the Composition API. It runs before the component is created and serves as the place where you set up your reactive state and methods.',
        code: {
          language: 'vue',
          snippet: `<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive state
const count = ref(0)
const name = ref('Vue.js')

// Computed property
const doubleCount = computed(() => count.value * 2)

// Methods
const increment = () => {
  count.value++
}

// Lifecycle hook
onMounted(() => {
  console.log('Component mounted!')
})
</script>

<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
    <p>Count: {{ count }} (Double: {{ doubleCount }})</p>
    <button @click="increment">Increment</button>
  </div>
</template>`
        }
      },
      {
        id: 'reactive-refs',
        title: 'Reactive References with ref()',
        content: 'The ref() function creates a reactive reference that can hold any value. When you access or modify the value, you need to use the .value property in JavaScript, but in templates, Vue automatically unwraps refs.',
        code: {
          language: 'javascript',
          snippet: `import { ref, watch } from 'vue'

// Create reactive refs
const message = ref('Hello')
const user = ref({ name: 'John', age: 25 })

// Access and modify
console.log(message.value) // 'Hello'
message.value = 'Hello, World!'

// Watch for changes
watch(message, (newValue, oldValue) => {
  console.log(\`Changed from \${oldValue} to \${newValue}\`)
})`
        }
      },
      {
        id: 'composables',
        title: 'Creating Composables',
        content: 'Composables are functions that encapsulate and reuse stateful logic. They are the key to code reuse in the Composition API.',
        code: {
          language: 'javascript',
          snippet: `// composables/useFetch.js
import { ref, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  watchEffect(async () => {
    loading.value = true
    try {
      const response = await fetch(url.value)
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}

// Usage in component
const { data, loading } = useFetch(ref('/api/users'))`
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'The Composition API is a powerful addition to Vue.js that enables better code organization and reusability. While the Options API remains valid and useful for simpler components, the Composition API shines when building complex applications with shared logic across components.'
      }
    ]
  },
  {
    id: 3,
    title: 'Database Optimization Tips for Laravel Applications',
    excerpt: 'Improve your Laravel application performance with these essential database optimization techniques and query improvements.',
    category: 'Performance',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
    slug: 'database-optimization-laravel',
    author: 'Amamul Ahasan',
    tags: ['Laravel', 'Database', 'Performance', 'MySQL'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'Database performance is crucial for any web application. A slow database can bottleneck your entire application, leading to poor user experience. In this guide, we\'ll explore essential techniques to optimize your Laravel application\'s database performance.'
      },
      {
        id: 'eager-loading',
        title: 'Eager Loading to Prevent N+1 Queries',
        content: 'The N+1 query problem is one of the most common performance issues in Laravel applications. Eager loading allows you to load related models upfront, reducing the number of queries significantly.',
        code: {
          language: 'php',
          snippet: `// Bad: N+1 problem (1 query for posts + N queries for authors)
$posts = Post::all();
foreach ($posts as $post) {
    echo $post->author->name; // Each iteration makes a query
}

// Good: Eager loading (only 2 queries total)
$posts = Post::with('author')->get();
foreach ($posts as $post) {
    echo $post->author->name; // No additional queries
}

// Multiple relationships
$posts = Post::with(['author', 'comments', 'tags'])->get();

// Nested relationships
$posts = Post::with('comments.author')->get();`
        }
      },
      {
        id: 'indexing',
        title: 'Proper Database Indexing',
        content: 'Indexes are essential for fast query performance. Add indexes to columns that are frequently used in WHERE clauses, JOIN conditions, and ORDER BY statements.',
        code: {
          language: 'php',
          snippet: `// Migration with indexes
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->string('slug')->unique(); // Unique index
    $table->foreignId('user_id')->constrained(); // Foreign key index
    $table->timestamp('published_at')->nullable();
    $table->timestamps();
    
    // Composite index for common queries
    $table->index(['user_id', 'published_at']);
    
    // Full-text index for search
    $table->fullText('title');
});`
        }
      },
      {
        id: 'query-optimization',
        title: 'Query Optimization Techniques',
        content: 'Select only the columns you need, use chunking for large datasets, and leverage query caching to improve performance.',
        code: {
          language: 'php',
          snippet: `// Select only needed columns
$users = User::select('id', 'name', 'email')->get();

// Chunking for large datasets
User::chunk(1000, function ($users) {
    foreach ($users as $user) {
        // Process each user
    }
});

// Lazy collection for memory efficiency
User::lazy()->each(function ($user) {
    // Process without loading all into memory
});

// Query caching
$posts = Cache::remember('popular_posts', 3600, function () {
    return Post::with('author')
        ->where('views', '>', 1000)
        ->orderByDesc('views')
        ->limit(10)
        ->get();
});`
        }
      },
      {
        id: 'raw-queries',
        title: 'Using Raw Queries When Needed',
        content: 'Sometimes Eloquent generates suboptimal queries. For complex operations, raw queries or database-specific features can provide better performance.',
        code: {
          language: 'php',
          snippet: `// Raw expressions
$posts = Post::select([
    'posts.*',
    DB::raw('COUNT(comments.id) as comments_count')
])
->leftJoin('comments', 'posts.id', '=', 'comments.post_id')
->groupBy('posts.id')
->get();

// Subqueries
$users = User::addSelect([
    'last_post_title' => Post::select('title')
        ->whereColumn('user_id', 'users.id')
        ->latest()
        ->limit(1)
])->get();`
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'Database optimization is an ongoing process. Monitor your queries using Laravel Telescope or Debugbar, regularly analyze slow query logs, and continuously refine your database structure. Remember that premature optimization is the root of all evil - optimize based on actual performance data and bottlenecks.'
      }
    ]
  },
  {
    id: 4,
    title: 'Authentication in Laravel with Sanctum',
    excerpt: 'A comprehensive guide to implementing API authentication in Laravel using Sanctum for SPAs and mobile applications.',
    category: 'Laravel',
    date: 'Dec 5, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop',
    slug: 'laravel-sanctum-authentication',
    author: 'Amamul Ahasan',
    tags: ['Laravel', 'Authentication', 'Sanctum', 'Security'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'Laravel Sanctum provides a lightweight authentication system for SPAs, mobile applications, and simple token-based APIs. It offers both cookie-based and token-based authentication methods.'
      },
      {
        id: 'installation',
        title: 'Installing Sanctum',
        content: 'Sanctum comes pre-installed with Laravel, but you need to publish its configuration and migration files.',
        code: {
          language: 'bash',
          snippet: `# Publish Sanctum configuration
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"

# Run migrations
php artisan migrate`
        }
      },
      {
        id: 'spa-authentication',
        title: 'SPA Authentication',
        content: 'For single-page applications, Sanctum uses cookie-based session authentication. Configure your application to use the sanctum guard.',
        code: {
          language: 'php',
          snippet: `// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 
    'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000'
)),

// routes/api.php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('/logout', [AuthController::class, 'logout']);
});`
        }
      },
      {
        id: 'token-authentication',
        title: 'API Token Authentication',
        content: 'For mobile apps or third-party integrations, Sanctum supports token-based authentication with abilities (scopes).',
        code: {
          language: 'php',
          snippet: `// Creating tokens with abilities
$token = $user->createToken('api-token', ['posts:read', 'posts:write']);
return ['token' => $token->plainTextToken];

// Checking abilities in middleware
Route::middleware(['auth:sanctum', 'abilities:posts:write'])
    ->post('/posts', [PostController::class, 'store']);

// Manual ability check
if ($request->user()->tokenCan('posts:write')) {
    // User can write posts
}

// Revoking tokens
$user->currentAccessToken()->delete(); // Current token
$user->tokens()->delete(); // All tokens`
        }
      },
      {
        id: 'protecting-routes',
        title: 'Protecting Routes',
        content: 'Use the auth:sanctum middleware to protect your API routes from unauthenticated access.',
        code: {
          language: 'php',
          snippet: `// routes/api.php
use Illuminate\\Support\\Facades\\Route;

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $request) => $request->user());
    Route::apiResource('posts', PostController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});`
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'Laravel Sanctum provides a simple yet powerful authentication solution. Whether you\'re building a SPA with cookie-based auth or a mobile app with token-based auth, Sanctum has you covered with minimal configuration and maximum security.'
      }
    ]
  },
  {
    id: 5,
    title: 'Tailwind CSS Best Practices for Clean Code',
    excerpt: 'Learn how to write maintainable and clean Tailwind CSS code with component patterns, custom configurations, and utility organization.',
    category: 'CSS',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    slug: 'tailwind-css-best-practices',
    author: 'Amamul Ahasan',
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'Best Practices'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'Tailwind CSS revolutionized how we style web applications, but without proper organization, your code can become hard to maintain. Let\'s explore best practices for writing clean, maintainable Tailwind code.'
      },
      {
        id: 'component-extraction',
        title: 'Component Extraction',
        content: 'When you find yourself repeating the same utility combinations, extract them into reusable components or use @apply for common patterns.',
        code: {
          language: 'css',
          snippet: `/* styles/components.css */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium 
           transition-colors duration-200;
  }
  
  .btn-primary {
    @apply btn bg-primary text-primary-foreground 
           hover:bg-primary/90;
  }
  
  .btn-secondary {
    @apply btn bg-secondary text-secondary-foreground 
           hover:bg-secondary/80;
  }
  
  .card {
    @apply rounded-xl border bg-card p-6 
           shadow-sm transition-shadow 
           hover:shadow-md;
  }
}`
        }
      },
      {
        id: 'design-tokens',
        title: 'Using Design Tokens',
        content: 'Configure your tailwind.config.js with design tokens to ensure consistency and make theme changes easy.',
        code: {
          language: 'javascript',
          snippet: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
}`
        }
      },
      {
        id: 'class-organization',
        title: 'Organizing Utility Classes',
        content: 'Maintain a consistent order for your utility classes to improve readability and make code reviews easier.',
        code: {
          language: 'jsx',
          snippet: `// Recommended class order:
// 1. Layout (display, position, flex/grid)
// 2. Sizing (width, height, padding, margin)
// 3. Typography (font, text)
// 4. Visual (bg, border, shadow)
// 5. Interactive (hover, focus, transition)

// Good example with logical grouping
<div className={cn(
  // Layout
  "flex items-center justify-between",
  // Sizing
  "w-full px-6 py-4",
  // Typography  
  "text-sm font-medium",
  // Visual
  "bg-card border rounded-lg shadow-sm",
  // Interactive
  "hover:shadow-md transition-shadow"
)} />`
        }
      },
      {
        id: 'responsive-patterns',
        title: 'Responsive Design Patterns',
        content: 'Use Tailwind\'s responsive modifiers strategically to create maintainable responsive layouts.',
        code: {
          language: 'jsx',
          snippet: `// Mobile-first approach
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4 
  md:gap-6 
  lg:gap-8
">
  {items.map(item => (
    <Card 
      key={item.id}
      className="
        p-4 md:p-6
        text-sm md:text-base
      "
    />
  ))}
</div>`
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'Writing clean Tailwind CSS is about establishing patterns and staying consistent. Extract reusable components, use design tokens, organize classes logically, and adopt a mobile-first approach. Your future self will thank you!'
      }
    ]
  },
  {
    id: 6,
    title: 'State Management in Vue.js with Pinia',
    excerpt: 'Explore Pinia, the intuitive and type-safe state management solution for Vue.js applications that replaces Vuex.',
    category: 'Vue.js',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    slug: 'vuejs-pinia-state-management',
    author: 'Amamul Ahasan',
    tags: ['Vue.js', 'Pinia', 'State Management', 'JavaScript'],
    content: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: 'Pinia is the official state management library for Vue.js, recommended by the Vue.js core team as the successor to Vuex. It offers a simpler API, better TypeScript support, and seamless integration with Vue DevTools.'
      },
      {
        id: 'setup',
        title: 'Setting Up Pinia',
        content: 'Installing and configuring Pinia is straightforward. It integrates seamlessly with Vue 3 and the Composition API.',
        code: {
          language: 'javascript',
          snippet: `// Install Pinia
npm install pinia

// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')`
        }
      },
      {
        id: 'defining-stores',
        title: 'Defining Stores',
        content: 'Stores in Pinia are defined using defineStore(). You can use either the Options API style or the Setup/Composition API style.',
        code: {
          language: 'javascript',
          snippet: `// stores/user.js
import { defineStore } from 'pinia'

// Option 1: Options API style
export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    isAuthenticated: false,
  }),
  
  getters: {
    initials: (state) => state.name
      .split(' ')
      .map(n => n[0])
      .join(''),
  },
  
  actions: {
    async login(credentials) {
      const response = await api.login(credentials)
      this.name = response.name
      this.email = response.email
      this.isAuthenticated = true
    },
    
    logout() {
      this.$reset() // Reset to initial state
    },
  },
})`
        }
      },
      {
        id: 'composition-store',
        title: 'Composition API Style Stores',
        content: 'The setup function style offers more flexibility and feels natural if you\'re already using the Composition API.',
        code: {
          language: 'javascript',
          snippet: `// stores/cart.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([])
  
  // Getters
  const totalItems = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )
  
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => 
      sum + item.price * item.quantity, 0
    )
  )
  
  // Actions
  function addItem(product) {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }
  
  function removeItem(productId) {
    const index = items.value.findIndex(i => i.id === productId)
    if (index > -1) items.value.splice(index, 1)
  }
  
  return { items, totalItems, totalPrice, addItem, removeItem }
})`
        }
      },
      {
        id: 'using-stores',
        title: 'Using Stores in Components',
        content: 'Access your stores in components using the store functions. Pinia provides helpers like storeToRefs for reactive destructuring.',
        code: {
          language: 'vue',
          snippet: '<script setup>\nimport { storeToRefs } from \'pinia\'\nimport { useCartStore } from \'@/stores/cart\'\nimport { useUserStore } from \'@/stores/user\'\n\nconst cartStore = useCartStore()\nconst userStore = useUserStore()\n\n// Destructure reactive state (use storeToRefs!)\nconst { items, totalPrice } = storeToRefs(cartStore)\n\n// Actions can be destructured directly\nconst { addItem, removeItem } = cartStore\n\n// Or access via store\nconst handleCheckout = async () => {\n  if (!userStore.isAuthenticated) {\n    // Redirect to login\n    return\n  }\n  await processOrder(items.value)\n}\n</script>\n\n<template>\n  <div>\n    <p>Items: {{ items.length }}</p>\n    <p>Total: ${{ totalPrice.toFixed(2) }}</p>\n    <button @click="handleCheckout">Checkout</button>\n  </div>\n</template>'
        }
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: 'Pinia simplifies state management in Vue.js with its intuitive API and excellent TypeScript support. Whether you prefer the Options API or Composition API style, Pinia provides a flexible and powerful solution for managing application state.'
      }
    ]
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};
