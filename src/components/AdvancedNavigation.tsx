import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface AdvancedNavigationProps {
  isHidden?: boolean;
}

const AdvancedNavigation = ({ isHidden = false }: AdvancedNavigationProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'extracurriculars', label: 'Leadership' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'blogs', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Show navigation after intro (faster)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Update active section based on scroll with more precise tracking
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    sections.forEach((section, index) => {
      if (!section) return;
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveSection(navItems[index].id),
        onEnterBack: () => setActiveSection(navItems[index].id),
      });
    });

    // Also track scroll to ensure active section updates smoothly
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollY >= sectionTop - windowHeight / 2 && 
              scrollY < sectionTop + sectionHeight - windowHeight / 2) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  if (!isVisible || isHidden) return null;

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <motion.nav
        ref={navRef}
        className="hidden lg:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-1 px-8 py-3 bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-full">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-900 rounded-full"
                  layoutId="activeNav"
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 35,
                    duration: 0.3
                  }}
                />
              )}
              
              <span className="relative z-10">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Button - Only visible on mobile and when not hidden */}
      {!isHidden && (
        <motion.button
          className="lg:hidden fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className={`w-5 h-5 text-gray-900 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <X className={`w-5 h-5 text-gray-900 absolute transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
        </motion.button>
      )}

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-40 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-8 pt-24">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg font-light tracking-wide" style={{ fontFamily: "'EB Garamond', serif" }}>
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Decorative line */}
                <motion.div
                  className="w-12 h-px bg-gray-300 mt-12"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdvancedNavigation;