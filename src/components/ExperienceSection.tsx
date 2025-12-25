import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';

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

export const ExperienceSection = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative bg-secondary/20 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Experience */}
          <div>
            <AnimatedSection>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-6">
                Experience
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
                Professional Journey
              </h2>
            </AnimatedSection>

            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isTimelineInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-6 top-0 w-0.5 bg-border origin-top"
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 sm:pl-14 lg:pl-16 pb-6 sm:pb-8 lg:pb-10"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                    className="absolute left-2 sm:left-3 lg:left-4 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-2 sm:border-4 border-background animate-pulse-glow"
                  />

                  <div className="glass-card glass-card-hover p-4 sm:p-5 lg:p-6">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium bg-primary/20 text-primary mb-2 sm:mb-3">
                        Current
                      </span>
                    )}

                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm sm:text-base mb-2 sm:mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-6">
                Education
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
                Academic Background
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-4 sm:space-y-6" staggerDelay={0.15}>
              {education.map((edu, index) => (
                <AnimatedItem key={index}>
                  <div className={`glass-card glass-card-hover p-4 sm:p-5 lg:p-6 ${index === 0 ? 'border-primary/30' : ''
                    }`}>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                        }`}>
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium text-xs sm:text-sm mb-1 sm:mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">
                          {edu.period}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <span
                              key={hIndex}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs rounded bg-secondary text-muted-foreground"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
