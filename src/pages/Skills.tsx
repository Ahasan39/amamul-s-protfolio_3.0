import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Wrench,
  BookOpen,
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Palette,
    description: 'Building responsive, interactive user interfaces with modern frameworks and libraries.',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Creating robust server-side applications with secure APIs and business logic.',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 95 },
      { name: 'REST API', level: 85 },
      { name: 'MVC Architecture', level: 90 },
      { name: 'Authentication', level: 85 },
      { name: 'Eloquent ORM', level: 90 },
    ],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Database & Storage',
    icon: Database,
    description: 'Designing efficient database schemas and managing data effectively.',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Database Design', level: 85 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Migrations', level: 90 },
      { name: 'Redis', level: 60 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    description: 'Using modern development tools and practices for efficient workflows.',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Composer', level: 85 },
      { name: 'NPM/Yarn', level: 80 },
      { name: 'Linux', level: 70 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

const techStack = [
  { name: 'Laravel', icon: Terminal, color: 'text-red-500', bgColor: 'bg-red-500/10' },
  { name: 'Vue.js', icon: Layers, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { name: 'MySQL', icon: Database, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  { name: 'REST API', icon: Globe, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { name: 'Tailwind', icon: Cpu, color: 'text-cyan-500', bgColor: 'bg-cyan-500/10' },
  { name: 'PHP', icon: Code2, color: 'text-indigo-500', bgColor: 'bg-indigo-500/10' },
  { name: 'JavaScript', icon: Terminal, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
];

const softSkills = [
  { name: 'Professional Communication', icon: Users },
  { name: 'Problem Solving', icon: Rocket },
  { name: 'Documentation', icon: BookOpen },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Time Management', icon: CheckCircle },
  { name: 'Adaptability', icon: Layers },
];

const certifications = [
  { name: 'Laravel Development', issuer: 'Self-Learning', year: '2023' },
  { name: 'Web Development Fundamentals', issuer: 'Online Courses', year: '2022' },
  { name: 'B.Sc. in CSE', issuer: 'Premier University', year: '2023' },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Skills & Expertise
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Technical Skills
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive toolkit for building modern, scalable web applications. 
              From frontend to backend, I bring expertise across the full development stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Tech Stack */}
      <section className="py-12 border-y border-border/50 bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground">Primary Technologies</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl ${tech.bgColor} border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default`}
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories with Progress */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Skill Categories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 flex-shrink-0`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Beyond Code
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Soft Skills
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card glass-card-hover p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Learning
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Education & Certifications
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 flex items-center justify-between group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Something?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's combine these skills to create something amazing for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Skills;
