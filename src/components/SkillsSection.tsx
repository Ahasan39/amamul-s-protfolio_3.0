import {
  Server,
  Database,
  Users,
  Palette,
  Terminal,
  GitBranch,
  Globe,
  Layers,
  Cpu,
  Code2,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Vue.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['PHP', 'Laravel', 'REST API', 'MVC Architecture'],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: ['MySQL', 'Git', 'GitHub', 'Agile', 'VS Code', 'ERP Software'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Professional Communication', 'Documentation', 'Troubleshooting', 'Data Entry', 'Reporting'],
    color: 'from-purple-500 to-pink-500',
  },
];

const techStack = [
  { name: 'Laravel', icon: Terminal, color: 'text-red-500' },
  { name: 'Vue.js', icon: Layers, color: 'text-green-500' },
  { name: 'MySQL', icon: Database, color: 'text-blue-500' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
  { name: 'REST API', icon: Globe, color: 'text-purple-500' },
  { name: 'Tailwind', icon: Cpu, color: 'text-cyan-500' },
];

export const SkillsSection = () => {
  const techRef = useRef(null);
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-secondary/20 overflow-hidden" aria-labelledby="skills-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-6">
            Skills & Expertise
          </div>
          <h2 id="skills-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </AnimatedSection>

        {/* Primary Tech Stack */}
        <motion.div
          ref={techRef}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-10 lg:mb-16"
          initial="hidden"
          animate={isTechInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="font-medium text-foreground text-xs sm:text-sm lg:text-base">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <AnimatedItem key={category.title}>
              <div className="glass-card glass-card-hover p-4 sm:p-5 lg:p-6 group h-full">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} p-2 sm:p-2.5 lg:p-3 mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3 lg:mb-4">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 text-xs sm:text-sm rounded-md sm:rounded-lg bg-secondary/80 text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
