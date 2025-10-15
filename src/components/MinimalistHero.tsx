import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MinimalistHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const name = nameRef.current;
    const title = titleRef.current;
    const desc = descRef.current;

    if (!hero || !name || !title || !desc) return;

    // Initial animations
    gsap.set([name, title, desc], { y: 60, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(name, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        title,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .to(
        desc,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      );

    // Scroll-triggered parallax
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(name, {
          y: -progress * 100,
          opacity: 1 - progress * 0.8,
          duration: 0.3,
        });
        gsap.to(title, {
          y: -progress * 80,
          opacity: 1 - progress * 0.6,
          duration: 0.3,
        });
        gsap.to(desc, {
          y: -progress * 60,
          opacity: 1 - progress * 0.4,
          duration: 0.3,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) =>
        trigger.kill(),
      );
    };
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-24"
    >
      <div className="text-center max-w-4xl mx-auto px-4 md:px-6">
        {/* Main title */}
        <motion.div ref={nameRef} className="mb-6 md:mb-8">
          <h1
            className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tight text-gray-900 mb-3 md:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gautham
          </h1>
          <h1
            className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tight text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Girish
          </h1>
        </motion.div>

        {/* Title with elegant spacing */}
        <motion.div ref={titleRef} className="mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="w-8 md:w-16 h-px bg-gray-400" />
            <h2
              className="text-sm md:text-xl lg:text-2xl font-normal text-gray-600 tracking-widest uppercase italic whitespace-nowrap"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Student • Developer • Creator
            </h2>
            <div className="w-8 md:w-16 h-px bg-gray-400" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div ref={descRef} className="max-w-2xl mx-auto">
          <p
            className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-12 md:mb-16 font-normal"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
          Passionate about technology and the financial markets, striving to gain more knowledge in any field. 

          </p>


        </motion.div>
      </div>

      {/* Minimal scroll indicator - hidden on mobile */}
      <motion.div
        className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gray-300"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-20 w-20 h-px bg-gray-200 opacity-40" />
      <div className="hidden md:block absolute top-40 right-32 w-12 h-px bg-gray-200 opacity-40" />
      <div className="hidden md:block absolute bottom-32 left-32 w-px h-16 bg-gray-200 opacity-40" />
      <div className="hidden md:block absolute bottom-20 right-20 w-8 h-px bg-gray-200 opacity-40" />
    </div>
  );
};

export default MinimalistHero;