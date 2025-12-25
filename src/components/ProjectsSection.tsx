import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, otherProjects } from '@/data/projects';

const FeaturedProjectCard = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card glass-card-hover overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image */}
        <Link
          to={`/project/${project.slug}`}
          className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''
            }`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </Link>

        {/* Content */}
        <div className={`p-5 sm:p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <Link to={`/project/${project.slug}`}>
            <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-lg bg-secondary text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button variant="hero" size="sm" className="sm:size-default" asChild>
              <Link to={`/project/${project.slug}`}>
                View Details
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="sm:size-default" asChild>
              <a href={project.github}>
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-6">
            My Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Real-world applications built with Laravel and modern technologies
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="space-y-6 sm:space-y-8 mb-12 lg:mb-20">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <AnimatedSection className="mb-6 lg:mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center">
              Other Professional Projects
            </h3>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.1}>
            {otherProjects.map((project) => (
              <AnimatedItem key={project.title}>
                <Link to={`/project/${project.slug}`} className="block h-full">
                  <div className="glass-card glass-card-hover overflow-hidden group h-full">
                    {/* Project Image */}
                    <div className="relative h-36 sm:h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between mb-2 sm:mb-3">
                        <h4 className="font-heading text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                          <span
                            className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View details"
                          >
                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </span>
                          <span
                            className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                            aria-label="View source"
                          >
                            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs rounded bg-secondary text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
