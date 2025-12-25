import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedSection, StaggerContainer, AnimatedItem, PageTransition, motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    shortDesc: 'Custom web applications built with modern technologies',
    description: 'I create responsive, high-performance web applications tailored to your business needs. From simple landing pages to complex enterprise solutions, I deliver clean, maintainable code.',
    features: [
      'Custom Laravel Applications',
      'Vue.js & React Frontends',
      'E-commerce Platforms',
      'Content Management Systems',
      'Progressive Web Apps (PWA)',
      'Single Page Applications (SPA)',
    ],
    technologies: ['Laravel', 'Vue.js', 'React', 'Tailwind CSS', 'MySQL'],
  },
  {
    id: 'api-development',
    icon: Server,
    title: 'API Development',
    shortDesc: 'Robust RESTful APIs for seamless integrations',
    description: 'I design and develop secure, scalable RESTful APIs that power your applications. Whether you need to integrate third-party services or build your own API ecosystem, I ensure reliability and performance.',
    features: [
      'RESTful API Design',
      'API Authentication (JWT, OAuth)',
      'Third-party API Integration',
      'API Documentation',
      'Rate Limiting & Security',
      'Webhook Implementation',
    ],
    technologies: ['Laravel', 'Node.js', 'Postman', 'Swagger', 'JWT'],
  },
  {
    id: 'database-design',
    icon: Database,
    title: 'Database Design',
    shortDesc: 'Optimized database architecture for scalability',
    description: 'I architect efficient database structures that ensure data integrity, optimal performance, and scalability. From schema design to query optimization, I handle all aspects of database management.',
    features: [
      'Database Schema Design',
      'Query Optimization',
      'Data Migration',
      'Backup & Recovery Solutions',
      'Performance Tuning',
      'Database Security',
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Eloquent ORM'],
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Implementation',
    shortDesc: 'Beautiful, intuitive user interfaces',
    description: 'I transform designs into pixel-perfect, responsive interfaces that delight users. With attention to detail and focus on user experience, I create interfaces that are both beautiful and functional.',
    features: [
      'Responsive Design',
      'Modern UI Components',
      'Animation & Micro-interactions',
      'Dark/Light Theme Support',
      'Accessibility Compliance',
      'Cross-browser Compatibility',
    ],
    technologies: ['Tailwind CSS', 'Bootstrap', 'Figma', 'Framer Motion', 'CSS3'],
  },
  {
    id: 'full-stack',
    icon: Code2,
    title: 'Full Stack Solutions',
    shortDesc: 'End-to-end development from concept to deployment',
    description: 'I provide complete full-stack development services, handling everything from frontend to backend, database to deployment. Get a fully functional application without coordinating multiple developers.',
    features: [
      'Complete Application Development',
      'Frontend & Backend Integration',
      'Server Configuration',
      'Deployment & DevOps',
      'Performance Optimization',
      'Ongoing Maintenance',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Git', 'Linux'],
  },
  {
    id: 'mobile-responsive',
    icon: Smartphone,
    title: 'Mobile-First Development',
    shortDesc: 'Applications optimized for all devices',
    description: 'I build applications with a mobile-first approach, ensuring your users have a seamless experience across all devices. From smartphones to desktops, your application will look and perform great.',
    features: [
      'Mobile-First Design',
      'Touch-Friendly Interfaces',
      'Responsive Layouts',
      'Performance Optimization',
      'PWA Development',
      'Cross-Device Testing',
    ],
    technologies: ['Responsive CSS', 'PWA', 'Service Workers', 'Touch Events'],
  },
];

const whyChooseMe = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality',
  },
  {
    icon: Shield,
    title: 'Secure Code',
    description: 'Security best practices in every project',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always available for urgent requirements',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Regular updates and transparent process',
  },
];

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="container-custom relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <motion.div 
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  What I Offer
                </motion.div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  My <span className="gradient-text">Services</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I provide comprehensive web development services to help businesses 
                  build powerful, scalable, and user-friendly digital solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {services.map((service) => (
                <AnimatedItem key={service.id}>
                  <motion.div 
                    className="glass-card p-6 h-full flex flex-col group"
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <motion.span 
                          key={tech} 
                          className="px-2 py-0.5 text-xs rounded bg-secondary text-muted-foreground"
                          whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

      {/* Detailed Services */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Details
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore what each service includes and how I can help bring your ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="glass-card p-6 md:p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="lg:border-l lg:border-border/50 lg:pl-6">
                      <h4 className="font-heading font-semibold text-foreground mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Work With Me?
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {whyChooseMe.map((item) => (
              <AnimatedItem key={item.title}>
                <motion.div 
                  className="text-center p-6 glass-card"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your requirements and build something amazing together.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" asChild>
                  <a href="/#contact">
                    Get In Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Services;
