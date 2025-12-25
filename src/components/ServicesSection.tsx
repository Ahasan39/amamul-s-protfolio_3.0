import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    shortDesc: 'Custom web applications built with modern technologies',
    technologies: ['Laravel', 'Vue.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'api-development',
    icon: Server,
    title: 'API Development',
    shortDesc: 'Robust RESTful APIs for seamless integrations',
    technologies: ['Laravel', 'Node.js', 'JWT', 'Swagger'],
  },
  {
    id: 'database-design',
    icon: Database,
    title: 'Database Design',
    shortDesc: 'Optimized database architecture for scalability',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Implementation',
    shortDesc: 'Beautiful, intuitive user interfaces',
    technologies: ['Tailwind CSS', 'Figma', 'Framer Motion'],
  },
  {
    id: 'full-stack',
    icon: Code2,
    title: 'Full Stack Solutions',
    shortDesc: 'End-to-end development from concept to deployment',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Git'],
  },
  {
    id: 'mobile-responsive',
    icon: Smartphone,
    title: 'Mobile-First Development',
    shortDesc: 'Applications optimized for all devices',
    technologies: ['Responsive CSS', 'PWA', 'Service Workers'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom relative z-10 px-4">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <motion.div
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              What I Offer
            </motion.div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive web development services to help you build powerful,
              scalable, and user-friendly digital solutions.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.08}>
          {services.map((service) => (
            <AnimatedItem key={service.id}>
              <motion.div
                className="glass-card p-4 sm:p-5 lg:p-6 h-full flex flex-col group cursor-pointer"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:bg-primary transition-all duration-300"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>

                <h3 className="font-heading text-sm sm:text-base lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-none">
                  {service.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-border/50">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-1.5 py-0.5 sm:px-2 text-[10px] sm:text-xs rounded bg-secondary text-muted-foreground"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
