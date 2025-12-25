import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User, Share2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/CodeBlock';
import { TableOfContents } from '@/components/TableOfContents';
import { HeroAnimatedSection } from '@/components/ui/motion';
import { getBlogPost, getRelatedPosts } from '@/data/blogPosts';
import { useEffect } from 'react';
import { toast } from 'sonner';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPost(slug) : undefined;
  const relatedPosts = post ? getRelatedPosts(post.slug, post.category) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post?.title,
        url: window.location.href,
      });
    } catch {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 section-padding">
          <div className="container-custom text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button variant="default" onClick={() => navigate('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden pb-8">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-custom relative z-10 max-w-4xl mx-auto">
            <HeroAnimatedSection delay={0.1}>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.2}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {post.category}
              </div>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.3}>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
            </HeroAnimatedSection>

            <HeroAnimatedSection delay={0.4}>
              <p className="text-lg text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            </HeroAnimatedSection>

            {/* Meta Info */}
            <HeroAnimatedSection delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold">
                    AA
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-xs">Author</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </HeroAnimatedSection>

            {/* Tags */}
            <HeroAnimatedSection delay={0.6}>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </HeroAnimatedSection>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="container-custom max-w-4xl mx-auto">
            <HeroAnimatedSection delay={0.7}>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </HeroAnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_280px] gap-8 max-w-6xl mx-auto">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {post.content.map((section, index) => (
                  <HeroAnimatedSection key={section.id} delay={0.1 + index * 0.05}>
                    <div id={section.id} className="scroll-mt-24 mb-12">
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>
                      {section.code && (
                        <CodeBlock 
                          code={section.code.snippet} 
                          language={section.code.language} 
                        />
                      )}
                    </div>
                  </HeroAnimatedSection>
                ))}
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents sections={post.content} />
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-secondary/20">
            <div className="container-custom max-w-4xl mx-auto">
              <HeroAnimatedSection delay={0.1}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
              </HeroAnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <HeroAnimatedSection key={relatedPost.id} delay={0.2 + index * 0.1}>
                    <Link to={`/blog/${relatedPost.slug}`} className="block group">
                      <article className="glass-card glass-card-hover overflow-hidden h-full">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center text-primary font-medium text-sm">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </HeroAnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
