import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Tag, CheckCircle, AlertTriangle, Lightbulb, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { CodeBlock } from '@/components/CodeBlock';
import { TableOfContents } from '@/components/TableOfContents';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')} variant="hero">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const tocItems = project.sections.map(section => ({
    id: section.title.toLowerCase().replace(/\s+/g, '-'),
    title: section.title
  }));

  // Add screenshots and challenges/solutions to TOC
  tocItems.push(
    { id: 'screenshots', title: 'Screenshots' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'solutions', title: 'Solutions' }
  );

  const handlePrevScreenshot = () => {
    if (selectedScreenshot !== null && selectedScreenshot > 0) {
      setSelectedScreenshot(selectedScreenshot - 1);
    }
  };

  const handleNextScreenshot = () => {
    if (selectedScreenshot !== null && selectedScreenshot < project.screenshots.length - 1) {
      setSelectedScreenshot(selectedScreenshot + 1);
    }
  };

  const relatedProjects = projects
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-custom pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight max-w-4xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_8s_ease-in-out_infinite]">
                {project.title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-8 border-b border-border/50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag className="w-4 h-4" />
              <span className="font-medium">Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 rounded bg-secondary text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Key Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 p-4 rounded-lg bg-background border border-border/50"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section id="screenshots" className="py-12 scroll-mt-24">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Images className="w-7 h-7 text-primary" />
            Project Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedScreenshot(index)}
              >
                <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      View Full Size
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Lightbox */}
      <AnimatePresence>
        {selectedScreenshot !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedScreenshot(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {selectedScreenshot > 0 && (
                <button
                  onClick={handlePrevScreenshot}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {selectedScreenshot < project.screenshots.length - 1 && (
                <button
                  onClick={handleNextScreenshot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 text-foreground hover:bg-secondary transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden border border-border/50 bg-background">
                <img
                  src={project.screenshots[selectedScreenshot].image}
                  alt={project.screenshots[selectedScreenshot].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Screenshot Info */}
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.screenshots[selectedScreenshot].title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {project.screenshots[selectedScreenshot].description}
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  {project.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === selectedScreenshot ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with TOC */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article Content */}
            <article className="prose prose-lg prose-invert max-w-none">
              {project.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>
                  {section.code && (
                    <CodeBlock 
                      code={section.code} 
                      language={section.codeLanguage || 'php'} 
                    />
                  )}
                </motion.div>
              ))}

              {/* Challenges Section */}
              <motion.div
                id="challenges"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-yellow-500" />
                  Challenges Faced
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions Section */}
              <motion.div
                id="solutions"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-7 h-7 text-primary" />
                  Solutions Implemented
                </h2>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </article>

            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject, index) => (
              <motion.div
                key={relatedProject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link 
                  to={`/project/${relatedProject.slug}`}
                  className="block glass-card glass-card-hover overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium mb-2 block">
                      {relatedProject.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/#projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProjectDetails;
