import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, BookOpen, PenTool, X } from 'lucide-react';
import { ImageWithFallback } from './Images/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

const desc1 = "I’m a member of FRC Team 5667 – The Digital Eagles, where I collaborate with teammates to design, build, and program competitive robots for the FIRST Robotics Competition. Being part of the team has given me hands-on experience working with real-world engineering and technology challenges while learning how to bring ideas from concept to creation. Throughout my time in robotics, I’ve contributed to building and testing mechanical components, helping with wiring and sensor integration, and assisting the programming team in refining autonomous and teleoperated robot functions. Working together under tight deadlines taught me how to communicate effectively and think critically under pressure."
const desc2 = "As a Youth Lead in the Youth Wing of the Central Ohio Malayalee Association (COMA), I play an active role in planning, coordinating, and executing events that bring the Malayalee community together in Central Ohio. I work with other youth volunteers and adult advisors to manage responsibilities like coordinating volunteer schedules, helping design events (such as cultural programs, charity drives, and youth-activities), and ensuring smooth operations on event days."
const desc3 = "As a member of the New Albany High School Tennis Team, I have developed discipline, teamwork, and focus through competitive training and matches. Being part of the team has taught me the importance of perseverance, strategic thinking, and effective communication both on and off the court. I actively participate in regular practices, conditioning sessions, and competitive matches against other schools, which has helped me improve my skills and contribute to the team's overall success."  
const desc4 = "As a SkillsUSA delegate, I represented my school at the state conference, collaborating with other student leaders to discuss, propose, and vote on key organizational initiatives. I participated in leadership workshops, networking events, and technical demonstrations that highlighted the connection between education and industry. Throughout the event, I worked with peers from across Ohio to refine proposals, exchange ideas, and learn from industry professionals. The experience strengthened my leadership, communication, and teamwork skills while giving me a deeper understanding of how SkillsUSA empowers students to grow both professionally and personally."

interface ExpandableExtracurricularsProps {
  onModalChange?: (isOpen: boolean) => void;
}

const ExpandableExtracurriculars = ({ onModalChange }: ExpandableExtracurricularsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  const activities = [
    {
      title: "Robotics Club",
      role: "Member",
      description: "Member of FRC Team 5667 – The Digital Eagles, contributing to robot design, building, and testing while developing teamwork, problem-solving, and technical skills. ",
      fullDescription: desc1,
      period: "2023 - Present",
      icon: Users,
      metrics: ["50+ Members", "15+ Colleges", "12 Events"],
      achievements: [
        "2 years Chamionships in a row",
        "Chairman’s Award – Buckeye Regional (2019)", 
        "Regional Winners – Buckeye Regional (2023)",
        "Buckeye Regional – Quality Award (2024)"
      ],
      images: [
        "https://i.imgur.com/LPTH411.jpeg",
        "https://i.imgur.com/QcrsO7X.jpeg"
      ]
    },
    {
      title: "Central Ohio Malayalee Association (COMA)",
      role: "Youth Lead",
      description: "Helped plan community events to promote cultural awareness and engagement.",
      period: "2024 - 2025",
      fullDescription: desc2,
      icon: Award,
      metrics: ["8 Competitions", "3 Awards", "2 Years"],
      achievements: [
        "Planned and executed 3 major community events",
        "Collaboration & teamwork with 9 other youth leads",
        "Youth Engagement initiatives",
      ],
      images: [
        "https://i.imgur.com/JrFgMji.jpeg",
        "https://i.imgur.com/2yJeHQx.jpeg",
        "https://i.imgur.com/IMqM7QN.jpeg"      ]
    },
    {
      title: "Tennis Team",
      role: "Team member",
      description: "2 year member of the New Albany High School Tennis Team, developing discipline, teamwork, and focus through competitive training and matches.",
      fullDescription: desc3,
      period: "2022 - 2024",
      icon: BookOpen,
      metrics: ["100+ Students", "5 Programs", "24 Months"],
      achievements: [
        "Commitment & Consistency",
        "Skill development through regular practices",
        "Mental Fortitude & Perseverance",
        "Time Management"
      ],
      images: [
        "https://i.imgur.com/oxp4bmT.jpeg"
      ]
    },
        {
      title: "IT Internship",
      role: "Intern",
      description: "IT Intern at the New Albany-Plain Local School District, assisting with managing district-issued devices, troubleshooting tech issues, and supporting day-to-day IT operations.",
      fullDescription: desc4,
      period: "2023 - Present", 
      icon: PenTool,
      metrics: ["15 Articles", "10K+ Readers", "Monthly"],
      achievements: [
        "1st Proffesional IT Experience",
        "Learned Work Ethic & Professionalism",
        "How to troubleshoot technical issues",
        "Exposure to IT environment"
      ],
      // Add your images here - these will appear in the modal carousel
      images: [
        "https://i.imgur.com/7HF6iQw.jpeg"
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Cards stagger animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(card, 
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power2.out"
            }
          );
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Auto-rotate images in modal every 4 seconds
  useEffect(() => {
    if (selectedActivity === null) return;
    
    const activity = activities[selectedActivity];
    if (!activity || activity.images.length <= 1) return;

    const interval = setInterval(() => {
      setModalImageIndex(prev => (prev + 1) % activity.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedActivity, activities]);

  const handleActivityClick = (index: number) => {
    const willBeOpen = selectedActivity !== index;
    setSelectedActivity(willBeOpen ? index : null);
    setModalImageIndex(0); // Reset to first image when opening modal
    
    // Notify parent component about modal state change
    if (onModalChange) {
      onModalChange(willBeOpen);
    }
  };

  const closeExpanded = () => {
    setSelectedActivity(null);
    
    // Notify parent that modal is closed
    if (onModalChange) {
      onModalChange(false);
    }
  };

  return (
    <section id="extracurriculars" ref={sectionRef} className="py-20 md:py-32 relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
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
            Leadership & Impact
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Click on any card to explore my leadership journey and community impact in detail.
          </motion.p>
          <motion.div
            className="w-20 h-px bg-gray-400 mx-auto mt-6 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="group cursor-pointer"
              onClick={() => handleActivityClick(index)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500">
                
                {/* Static Image Preview - Mobile Optimized */}
                <div className="h-40 md:h-48 overflow-hidden relative bg-gray-50">
                  <ImageWithFallback
                    src={activity.images[0]}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Icon indicator */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-800 transition-colors duration-300">
                    <activity.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {activity.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-light mb-3">
                    <span>{activity.role}</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{activity.period}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed line-clamp-2">
                    {activity.description}
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className="h-1 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedActivity !== null && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeExpanded}
              />

              {/* Modal Content */}
              <motion.div
                className="relative w-full h-full bg-white overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const activity = activities[selectedActivity];
                  const IconComponent = activity.icon;
                  
                  return (
                    <>
                      {/* Header - Mobile Optimized */}
                      <div className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200">
                        <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
                          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h1 className="text-lg md:text-2xl font-semibold text-gray-900 truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {activity.title}
                              </h1>
                              <p className="text-xs md:text-sm text-gray-600 truncate">{activity.role} • {activity.period}</p>
                            </div>
                          </div>
                          <button
                            onClick={closeExpanded}
                            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors duration-200 flex-shrink-0 ml-2"
                            aria-label="Close modal"
                          >
                            <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Main Content - Mobile Optimized with proper scrolling */}
                      <div className="pt-16 md:pt-24 h-full overflow-y-auto overscroll-contain"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                      >
                        
                        {/* Image Carousel - Mobile Optimized */}
                        <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] relative overflow-hidden px-4 md:px-12 pt-4 md:pt-6 bg-gray-50">
                          {/* Carousel Images */}
                          <div className="relative w-full h-full">
                            {activity.images.map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="absolute inset-0 transition-opacity duration-1000"
                                style={{
                                  opacity: modalImageIndex === imgIndex ? 1 : 0,
                                  pointerEvents: modalImageIndex === imgIndex ? 'auto' : 'none'
                                }}
                              >
                                <ImageWithFallback
                                  src={image}
                                  alt={`${activity.title} - Image ${imgIndex + 1}`}
                                  className="w-full h-full object-contain rounded-lg md:rounded-xl"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Carousel Controls - Only show if multiple images */}
                          {activity.images.length > 1 && (
                            <>
                              {/* Navigation Arrows */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setModalImageIndex(prev => 
                                    prev === 0 ? activity.images.length - 1 : prev - 1
                                  );
                                }}
                                className="absolute left-2 md:left-16 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                aria-label="Previous image"
                              >
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setModalImageIndex(prev => 
                                    prev === activity.images.length - 1 ? 0 : prev + 1
                                  );
                                }}
                                className="absolute right-2 md:right-16 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                aria-label="Next image"
                              >
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>

                              {/* Carousel Indicators */}
                              <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                                {activity.images.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setModalImageIndex(imgIndex);
                                    }}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                                      modalImageIndex === imgIndex
                                        ? 'bg-gray-800 w-6 md:w-8'
                                        : 'bg-gray-400 w-1.5 md:w-2 hover:bg-gray-600'
                                    }`}
                                    aria-label={`Go to image ${imgIndex + 1}`}
                                  />
                                ))}
                              </div>

                              {/* Image Counter */}
                              <div className="absolute top-4 md:top-10 right-4 md:right-16 bg-black/60 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm backdrop-blur-sm">
                                {modalImageIndex + 1} / {activity.images.length}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Content Below Image - Mobile Optimized */}
                        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8">
                          
                          {/* Overview */}
                          <div className="mb-5 md:mb-6">
                            <h2 className="text-lg md:text-xl font-light text-gray-900 mb-2 md:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                              Overview
                            </h2>
                            <p className="text-sm md:text-base text-gray-800 leading-relaxed font-light">
                              {activity.fullDescription}
                            </p>
                          </div>

                          {/* Key Achievements and Skills Side by Side */}
                          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pb-6 md:pb-8">
                            
                            {/* Key Achievements */}
                            <div>
                              <h3 className="text-base md:text-lg font-light text-gray-900 mb-2 md:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Key Achievements
                              </h3>
                              <div className="space-y-1.5 md:space-y-2">
                                {activity.achievements.map((achievement, achIndex) => (
                                  <div key={achIndex} className="flex items-start gap-2 text-xs md:text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-1.5 flex-shrink-0"></div>
                                    <span className="text-gray-700 leading-relaxed font-medium">
                                      {achievement}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Philosophy section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed italic">
              "Leadership isn't about being in charge. It's about taking care of those in your charge 
              and creating opportunities for others to grow."
            </p>
            <div className="w-12 h-px bg-gray-400 mx-auto mt-6 md:mt-8" />
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-32 left-16 w-16 h-px bg-gray-200 opacity-40" />
      <div className="absolute bottom-24 right-16 w-px h-20 bg-gray-200 opacity-40" />
    </section>
  );
};

export default ExpandableExtracurriculars;
