import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatedSection, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';

export const CTASection = () => {
  const iconRef = useRef(null);
  const isIconInView = useInView(iconRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <motion.div
            ref={iconRef}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={isIconInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-primary/10 mb-6 sm:mb-8"
          >
            <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
          </motion.div>

          <AnimatedSection>
            <h2 id="cta-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Looking for a Laravel Developer
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              <span className="gradient-text">to Build Your Next Product?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2">
              Let's collaborate to turn your ideas into powerful, scalable web applications.
              I'm ready to bring your vision to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Hire Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
