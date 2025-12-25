import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Instagram, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion, useInView } from '@/components/ui/motion';
import { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amamulahasanmizan71@gmail.com',
    href: 'mailto:amamulahasanmizan71@gmail.com',
    description: 'Drop me an email anytime',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1842-299275',
    href: 'tel:+8801842299275',
    description: 'Available for calls',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chittagong, Bangladesh',
    href: null,
    description: 'Open to remote work worldwide',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 Hours',
    href: null,
    description: 'I respond to all inquiries promptly',
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1E3xoyVnEK/', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amamul-ahasn', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Ahasan39', label: 'GitHub' },
];

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex web applications may take 4-8 weeks.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! I offer maintenance packages and ongoing support for all projects I deliver.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer both fixed-price and hourly rates depending on project scope. Contact me for a custom quote.',
  },
  {
    question: 'Can you work with existing designs?',
    answer: 'Absolutely! I can work with designs from Figma, Adobe XD, or any other design tool.',
  },
];

const Contact = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Let's Connect
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info Side */}
            <div className="space-y-10">
              {/* Contact Cards */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" staggerDelay={0.1}>
                {contactInfo.map((info) => (
                  <AnimatedItem key={info.label}>
                    <div className="glass-card glass-card-hover p-4 sm:p-6 h-full group">
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-semibold hover:text-primary transition-colors block text-sm sm:text-base break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold text-sm sm:text-base">{info.value}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </StaggerContainer>

              {/* Social Links */}
              <AnimatedSection delay={0.3}>
                <div className="glass-card p-5 sm:p-8">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2">
                    Connect On Social Media
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                    Follow me for updates, tips, and behind-the-scenes content
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Message via WhatsApp */}
              <AnimatedSection delay={0.4}>
                <div className="glass-card p-5 sm:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                        Quick Chat on WhatsApp
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                        Need a faster response? Send me a message on WhatsApp for quick inquiries.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-xs sm:text-sm"
                        onClick={() => window.open('https://wa.me/8801842299275', '_blank')}
                      >
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form Side */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 60 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-card p-5 sm:p-8 lg:p-10 sticky top-24">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Send Me a Message
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">
                        Your Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-foreground">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={5}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 bg-secondary/30 px-4 sm:px-0">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Quick answers to common questions about working with me
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {faqs.map((faq, index) => (
              <AnimatedItem key={index}>
                <div className="glass-card p-4 sm:p-6 h-full">
                  <h3 className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-0">
        <div className="container-custom">
          <AnimatedSection>
            <div className="glass-card p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you have a detailed plan or just an idea, I'm here to help you
                create something amazing. Let's build together!
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Button variant="hero" size="lg" className="text-sm sm:text-base" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send a Message
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base"
                  onClick={() => window.open('https://wa.me/8801842299275', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp Me
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

export default Contact;
