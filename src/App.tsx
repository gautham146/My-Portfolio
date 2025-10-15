import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AdvancedNavigation from './components/AdvancedNavigation';
import MinimalistHero from './components/MinimalistHero';
import AnimatedAbout from './components/AnimatedAbout';
import ExpandableExtracurriculars from './components/ExpandableExtracurriculars';
import SimpleCertificates from './components/SimpleCertificates';
import HorizontalSkills from './components/HorizontalSkills';
import MediumBlogs from './components/MediumBlogs';
import RefinedContact from './components/RefinedContact';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function App() {

  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);

  useEffect(() => {
    // Add viewport meta tag for proper mobile rendering
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
      document.head.appendChild(viewportMeta);
    }

    // Add vintage fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);



  return (
    <div className="min-h-screen">

      

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-gray-900 relative min-h-screen"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >

          <AdvancedNavigation isHidden={isLeadershipModalOpen} />
          <div className="relative z-10">
            <MinimalistHero />
            <AnimatedAbout />
            <ExpandableExtracurriculars onModalChange={setIsLeadershipModalOpen} />
            <SimpleCertificates />
            <HorizontalSkills />
            <MediumBlogs />
            <RefinedContact />
          </div>
        </motion.div>
    </div>
  );
}