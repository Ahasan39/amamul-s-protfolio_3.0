import { Quote, Star } from 'lucide-react';
import { AnimatedSection, StaggerContainer, AnimatedItem, motion } from '@/components/ui/motion';

const testimonials = [
  {
    name: 'Mohammad Rahman',
    role: 'CEO, Tech Solutions BD',
    content: "Amamul delivered an exceptional e-commerce platform for our business. His attention to detail and understanding of Laravel made the entire development process smooth. Highly recommended!",
    rating: 5,
    avatar: 'MR',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Project Manager, StartUp Hub',
    content: "Working with Amamul was a great experience. He understood our requirements perfectly and delivered a robust university management system on time. His communication skills are excellent.",
    rating: 5,
    avatar: 'SA',
  },
  {
    name: 'Karim Hassan',
    role: 'Owner, Flavor Restaurant',
    content: "The restaurant management system Amamul built for us transformed our operations. The table booking and order management features work flawlessly. Very professional work!",
    rating: 5,
    avatar: 'KH',
  },
  {
    name: 'Fatima Khan',
    role: 'Marketing Director, Brand Co.',
    content: "Amamul created a beautiful and functional company website for us. The CMS is easy to use, and the design perfectly represents our brand. Great developer to work with!",
    rating: 5,
    avatar: 'FK',
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background - CSS animations for better performance */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <motion.div 
            className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Testimonials
          </motion.div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Feedback from clients I have had the pleasure of working with
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={index}>
              <motion.div 
                className="glass-card p-4 sm:p-6 lg:p-8 h-full flex flex-col group"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: 12 }}
                >
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/50">
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-semibold text-sm sm:text-base"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
