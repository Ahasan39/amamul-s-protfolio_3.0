import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, AnimatedItem } from '@/components/ui/motion';

const featuredPosts = [
  {
    id: 1,
    title: 'Building RESTful APIs with Laravel: A Complete Guide',
    excerpt: 'Learn how to create robust and scalable RESTful APIs using Laravel, including authentication, validation, and best practices.',
    category: 'Laravel',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    slug: 'building-restful-apis-laravel',
  },
  {
    id: 2,
    title: 'Vue.js 3 Composition API: Getting Started',
    excerpt: 'Discover the power of Vue.js 3 Composition API and how it can improve your component organization and code reusability.',
    category: 'Vue.js',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&h=400&fit=crop',
    slug: 'vuejs-3-composition-api',
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
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding relative bg-secondary/20">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Blog & Articles
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-muted-foreground text-lg">
            Tutorials, tips, and thoughts on web development
          </p>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" staggerDelay={0.1}>
          {featuredPosts.map((post) => (
            <AnimatedItem key={post.id}>
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <article className="glass-card glass-card-hover overflow-hidden group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <AnimatedSection className="text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
