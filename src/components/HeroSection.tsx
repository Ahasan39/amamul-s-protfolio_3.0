import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeroAnimatedSection, motion, FloatingElement } from '@/components/ui/motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs - CSS animations for better performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Photo */}
          <HeroAnimatedSection delay={0.1}>
            <div className="relative w-32 h-32 mx-auto mb-8 group">
              <motion.div
                className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Amamul Ahasan"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(172 66% 50% / 0.3)',
                    '0 0 40px hsl(172 66% 50% / 0.5)',
                    '0 0 20px hsl(172 66% 50% / 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-primary-foreground" />
              </motion.div>
            </div>
          </HeroAnimatedSection>

          {/* Badge */}
          <HeroAnimatedSection delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Available for freelance work
            </motion.div>
          </HeroAnimatedSection>

          {/* Headline */}
          <HeroAnimatedSection delay={0.3}>
            <h1 id="hero-heading" className="font-heading text-[1.1rem] xs:text-[1.3rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] mb-6 mx-auto px-4">
              Using <span className="gradient-text">Laravel & Modern UI</span>
              <br />
              to Create Scalable Web Applications
            </h1>
          </HeroAnimatedSection>

          {/* Sub-headline */}
          <HeroAnimatedSection delay={0.5}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Laravel • Vue.js • REST APIs • MySQL • Full-Stack Development
            </p>
          </HeroAnimatedSection>

          {/* CTA Buttons */}
          <HeroAnimatedSection delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/projects">
                    View Projects
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="https://www.canva.com/design/DAG8CXA3VBA/GAYhFu-ClSBn7hzNe7Ih5Q/view" target="_blank" rel="noopener noreferrer">
                    Download CV
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </HeroAnimatedSection>

          {/* Stats */}
          <HeroAnimatedSection delay={0.9}>
            <div className="grid grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto px-4 sm:px-6">
              {[
                { value: '10+', label: 'Projects' },
                { value: '2+', label: 'Years Exp' },
                { value: '15+', label: 'Clients' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground whitespace-nowrap">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider leading-tight">
                    {stat.label === 'Satisfaction' ? (
                      <>Client Satisfaction</>
                    ) : stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </HeroAnimatedSection>
        </div>

        {/* Scroll Indicator - positioned separately */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <HeroAnimatedSection delay={1}>
            <Link to="/about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </Link>
          </HeroAnimatedSection>
        </div>
      </div>
    </section>
  );
};
