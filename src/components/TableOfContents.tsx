import { useState, useEffect } from 'react';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections?: TocItem[];
  items?: TocItem[];
}

export const TableOfContents = ({ sections, items }: TableOfContentsProps) => {
  const tocItems = sections || items || [];
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%', threshold: 0 }
    );

    tocItems.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="glass-card p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-primary" />
        <h3 className="font-heading font-semibold text-foreground">Table of Contents</h3>
      </div>
      
      <ul className="space-y-2">
        {tocItems.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "text-left w-full text-sm py-1.5 px-3 rounded-lg transition-all duration-200",
                activeSection === section.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
