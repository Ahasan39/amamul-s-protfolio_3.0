import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const experiences = [
  {
    title: 'Web Developer',
    company: 'Quick Tech Solution',
    location: 'Chittagong, Bangladesh',
    period: '2024 – 2025',
    current: true,
    responsibilities: [
      'Developed and maintained web applications for clients, ensuring high functionality and performance',
      'Managed technical documentation and maintained project documentation for clarity and team efficiency',
      'Collaborated cross-functionally on client projects, contributing to successful deployment',
      'Managed file systems, performed data entry, and handled hosting setup',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Fiverr / Upwork',
    location: 'Remote',
    period: '2023 – Present',
    current: true,
    responsibilities: [
      'Delivered custom web solutions for international clients across various industries',
      'Built responsive websites and web applications using Laravel, Vue.js, and Tailwind CSS',
      'Maintained strong client communication and ensured timely project delivery',
      'Achieved high client satisfaction ratings through quality work and professional service',
    ],
  },
];

const education = [
  {
    degree: 'B.Sc. in Computer Science and Engineering (CSE)',
    institution: 'Premier University, Chittagong',
    location: 'Chittagong, Bangladesh',
    period: '2021 – 2025',
    highlights: ['Focus on Web Development', 'Final Year Project: University Thesis Repository Management System'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Q.B.S.M City Corporation College, Chittagong',
    period: '2019 – 2021',
    highlights: ['Science Group'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sanowara Islam Boys\' High School, Chittagong',
    period: '2017 – 2018',
    highlights: ['Science Group'],
  },
];

const achievements = [
  {
    title: 'Client Satisfaction',
    value: '100%',
    description: 'Positive feedback from all clients',
  },
  {
    title: 'Projects Delivered',
    value: '10+',
    description: 'Successfully completed projects',
  },
  {
    title: 'Years Experience',
    value: '2+',
    description: 'Professional development experience',
  },
  {
    title: 'Technologies',
    value: '15+',
    description: 'Tools and frameworks mastered',
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Career Journey
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional growth, academic achievements, and the milestones 
              that have shaped my career as a web developer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-medium text-foreground mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 inline mr-2" />
              Work Experience
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My path through the tech industry, building solutions and growing as a developer.
            </p>
          </AnimatedSection>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-border origin-top"
            />

            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-14 md:pl-0 pb-12 md:pb-16 ${
                  index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-1 w-6 h-6 rounded-full bg-primary border-4 border-background animate-pulse-glow z-10" 
                />

                <div className="glass-card glass-card-hover p-6 lg:p-8">
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-primary/20 text-primary mb-3">
                      Current Position
                    </span>
                  )}

                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/20">
        <div className="container-custom px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Education
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Academic Background
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational journey that laid the foundation for my career in technology.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
            {education.map((edu, index) => (
              <AnimatedItem key={index}>
                <div className={`glass-card glass-card-hover p-6 h-full ${
                  index === 0 ? 'border-primary/30 md:col-span-2 lg:col-span-1' : ''
                }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {index === 0 ? <Award className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {edu.period}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="glass-card p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Looking for a dedicated developer to bring your ideas to life? 
                I'm always open to discussing new opportunities and projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
