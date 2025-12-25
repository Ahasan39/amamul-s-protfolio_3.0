import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amamulahasanmizan71@gmail.com',
    href: 'mailto:amamulahasanmizan71@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1842-299275',
    href: 'tel:+8801842299275',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chittagong, Bangladesh',
    href: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/ahasan.amamul', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/ahasan.amamul', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amamulahasan', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Ahasan39', label: 'GitHub' },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Get In Touch
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <StaggerContainer className="space-y-3 sm:space-y-4" staggerDelay={0.1}>
              {contactInfo.map((info) => (
                <AnimatedItem key={info.label}>
                  <div className="glass-card glass-card-hover p-4 sm:p-5 group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors text-sm sm:text-base break-words block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-sm sm:text-base break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </StaggerContainer>

            {/* Social Links */}
            <AnimatedSection delay={0.3}>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.label}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 60 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
