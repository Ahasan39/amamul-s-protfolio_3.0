import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroAnimatedSection } from '@/components/ui/motion';
import { blogPosts } from '@/data/blogPosts';

const categories = ['All', 'Laravel', 'Vue.js', 'Performance', 'CSS'];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10">
            <HeroAnimatedSection delay={0.1}>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.2}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Blog & Tutorials
              </div>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.3}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Insights & <span className="gradient-text">Tutorials</span>
              </h1>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
                Sharing knowledge about Laravel, Vue.js, and modern web development practices
              </p>
            </HeroAnimatedSection>

            {/* Category Filter */}
            <HeroAnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      category === 'All'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </HeroAnimatedSection>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <HeroAnimatedSection key={post.id} delay={0.1 + index * 0.1}>
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

                        <h2 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Author & Read More */}
                        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground text-xs font-semibold">
                              AA
                            </div>
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>
                          <span className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </HeroAnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
