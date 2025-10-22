import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './Images/ImageWithFallback';

const AnimatedAbout = () => {
  const subtitle1Text = "Passionate about creating digital experiences that matter.";
  const subtitle2Text = "With expertise spanning frontend development, user experience design, and emerging web technologies.";
  const paragraph1Text = "I'm a creative developer with a deep appreciation for clean, functional design. My approach combines technical precision with aesthetic sensibility, creating solutions that are both beautiful and purposeful.";
  const paragraph2Text = "I bring ideas to life through code that prioritizes performance, accessibility, and user delight. Every project is an opportunity to push boundaries and explore new possibilities in digital craftsmanship.";

  // REPLACE WITH YOUR LOCAL IMAGE
  // To use a local image: 
  // 1. Place your image in the /public folder (e.g., /public/about-image.jpg)
  // 2. Import it like this: import aboutImage from '/public/about-image.jpg'
  // 3. Replace the src below with: aboutImage
  const aboutImage = "https://i.imgur.com/rHLj6tE.jpeg";

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 md:mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>
          <motion.div
            className="w-20 h-px bg-gray-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start mb-20 md:mb-32">
          
          {/* Main content */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              
              {/* Animated subtitle 1 */}
              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed" 
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A Brief Intro
              </motion.h3>
              
              <div className="space-y-5 md:space-y-6">
                {/* Animated paragraph 1 */}
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 leading-relaxed font-light" 
                  style={{ fontFamily: "'EB Garamond', serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                 Hi, I’m Gautham — a tech enthusiast and developer from New Albany, Ohio. I’m passionate about building creative and functional digital experiences that combine design, technology, and problem-solving.
                  I’m currently enrolled in the Cybersecurity program at Eastland-Fairfield Career & Technical Schools, where I’m learning how to protect and secure digital systems while exploring how technology shapes the world around us.
                </motion.p>
                
                {/* Animated subtitle 2 */}
                <motion.h4 
                  className="text-lg md:text-xl text-gray-700 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Outside of class, I enjoy trading and studying financial markets, experimenting with new tech projects, and diving into web development, motion design, and automation tools. I love blending creativity with logic — whether that’s building something interactive on the web or analyzing data to spot market trends.
                  When I’m not coding or researching, you’ll probably find me working out, playing tennis, or learning about new ways to grow both technically and personally.
                </motion.h4>
                
                {/* Animated paragraph 2 */}
                <motion.p 
                  className="text-base md:text-lg text-gray-600 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                </motion.p>
              </div>
            </div>
          </div>

          {/* Single static image */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden relative">
                <ImageWithFallback
                  src={aboutImage}
                  alt="About Gautham Girish"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 border-l border-t border-gray-300" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-gray-300" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-px h-20 bg-gray-200 opacity-30" />
      <div className="absolute bottom-40 left-20 w-16 h-px bg-gray-200 opacity-30" />
    </section>
  );
};

export default AnimatedAbout;
