import { MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const AboutSection = () => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-10%" });

  return (
    <section id="about" className="section-padding relative bg-background/50 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Profile Card */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: -60 }}
            animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative group order-2 lg:order-1"
          >
            <div className="glass-card glass-card-hover p-5 sm:p-6 md:p-10">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />

              {/* Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-4 sm:mb-6">
                <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-2 ring-offset-background">
                  <img
                    src={profilePhoto}
                    alt="Amamul Ahasan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                  Amamul Ahasan
                </h3>
                <p className="text-primary font-medium text-sm sm:text-base">Full Stack Web Developer</p>
              </div>

              {/* Info Cards */}
              <StaggerContainer className="space-y-2 sm:space-y-3" staggerDelay={0.1}>
                <AnimatedItem>
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-secondary/50">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">Chittagong, Bangladesh</span>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-secondary/50">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">B.Sc. in CSE, Premier University</span>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-secondary/50">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">Laravel • Vue.js • PHP • MySQL</span>
                  </div>
                </AnimatedItem>
              </StaggerContainer>
            </div>
          </motion.div>

          {/* About Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-6">
                About Me
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Passionate About
                <br className="hidden sm:block" />
                <span className="gradient-text"> Building Web Solutions</span>
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed" staggerDelay={0.15}>
              <AnimatedItem>
                <p>
                  A highly motivated and passionate <span className="text-foreground font-medium">Computer Science and Engineering graduate</span> from
                  Premier University, Chittagong. I bring strong technical knowledge, problem-solving ability, and creativity to every project.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <p>
                  With expertise in <span className="text-primary font-medium">Laravel, PHP, and modern frontend technologies</span>, I specialize in building
                  full-stack solutions that solve real-world problems. From e-commerce platforms to management systems, I bring ideas to life with clean code and
                  intuitive interfaces.
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <p>
                  I'm eager to contribute to the growth of dynamic organizations while continuously developing both
                  <span className="text-foreground font-medium"> professional and personal skills</span>.
                </p>
              </AnimatedItem>
            </StaggerContainer>

            {/* Key Points */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-6 sm:mt-8">
                {[
                  'Clean & Efficient Code',
                  'Responsive Design',
                  'API Development',
                  'Database Optimization',
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground text-xs sm:text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
