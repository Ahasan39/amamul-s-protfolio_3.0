import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles, Download, Briefcase, Heart, Target, Zap, Award, Calendar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const timeline = [
  {
    year: '2024',
    title: 'Freelance Full Stack Developer',
    description: 'Working on various web applications including e-commerce, management systems, and custom solutions.',
    icon: Briefcase,
  },
  {
    year: '2021 - 2025',
    title: 'B.Sc. in Computer Science & Engineering',
    description: 'Graduated from Premier University, Chittagong with a strong foundation in software development.',
    icon: GraduationCap,
  },
  {
    year: '2022',
    title: 'Started Web Development Journey',
    description: 'Began learning Laravel, PHP, and modern web technologies. Built first projects.',
    icon: Code2,
  },
];

const values = [
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'I focus on delivering results that align with client objectives and business goals.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Writing clean, optimized code that performs well and scales effectively.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Genuinely passionate about technology and creating meaningful digital experiences.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Committed to delivering high-quality work that exceeds expectations.',
  },
];

const skills = [
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Vue.js', level: 75 },
  { name: 'MySQL', level: 85 },
  { name: 'React', level: 70 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git', level: 80 },
];

const About = () => {
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Me
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Amamul Ahasan
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Full Stack Web Developer
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A highly motivated and passionate Computer Science and Engineering graduate from Premier University, Chittagong. 
                I bring strong technical knowledge, problem-solving ability, and creativity to every project I undertake.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Chittagong, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>B.Sc. in CSE</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                    <img 
                      src={profilePhoto} 
                      alt="Amamul Ahasan" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Available for Freelance
                  </h3>
                  <p className="text-muted-foreground">
                    Open to exciting projects and collaborations
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Laravel • Vue.js • PHP • MySQL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">2+ Years of Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              What Drives Me
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Skills
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I specialize in building full-stack web applications using Laravel and modern frontend technologies. 
                My focus is on creating scalable, maintainable, and user-friendly solutions.
              </p>
              <Button variant="hero" asChild>
                <Link to="/projects">View My Projects</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              My Career Path
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className="glass-card p-6 ml-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                I'm always excited to take on new projects and challenges. Whether you need a web application, 
                want to collaborate, or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Contact Me</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;
