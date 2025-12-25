import { Heart, Github, Linkedin, Facebook, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ahasan39", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/amamul-ahasn", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/share/1E3xoyVnEK/", label: "Facebook" },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  // { name: 'Experience', href: '/experience' },
  // { name: 'Blog', href: '/blog' },
  { name: "Contact", href: "/contact" },
];

const services = ["Web Development", "API Development", "Database Design", "UI/UX Implementation"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative border-t border-border/50 bg-gradient-to-b from-background to-secondary/30">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Brand & About - Takes more space */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img src={profilePhoto} alt="Ahasan" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <span className="font-heading font-bold text-foreground block">
                  Ahasan<span className="text-primary">.</span>
                </span>
                <span className="text-xs text-primary">Full Stack Developer</span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
              Passionate about building scalable web applications with clean code and modern technologies.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary/80 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services - Combined on mobile */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 gap-6 lg:gap-4">
              {/* Links */}
              <nav aria-label="Footer navigation">
                <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                  Links
                </h4>
                <ul className="space-y-1.5 sm:space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Services */}
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">
                  Services
                </h4>
                <ul className="space-y-1.5 sm:space-y-2.5">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 sm:gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:amamulahasanmizan71@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="break-words">amamulahasanmizan71@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801842299275"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+880 1842-299275</span>
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Chittagong, Bangladesh</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Amamul Ahasan. All rights reserved.</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using Laravel & Vue.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
