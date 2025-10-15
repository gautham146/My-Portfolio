import React from 'react';
import { motion } from 'motion/react';

const HorizontalSkills = () => {
  const skillCategories = [
    {
      category: "Development",
      description: "Building & experimenting with code",
      skills: [
        { name: 'Front-end(CSS + React)', level: 72 },
        { name: 'Python', level: 68 },
        { name: 'JavaScript', level: 70 },
        { name: 'AI development', level: 61 }
      ]
    },
    {
      category: "Professional",
      description: "For the workplace & beyond",
      skills: [
        { name: 'Time Management', level: 73 },
        { name: 'Consistency', level: 58 },
        { name: 'Teamwork', level: 52 },
        { name: 'Adaptability', level: 78 }
      ]
    },
    {
      category: "Tools & Workflow",
      description: "Daily essentials for productivity",
      skills: [
        { name: 'Paper Journalling', level: 69 },
        { name: 'VS Code', level: 82 },
        { name: 'Obsidian', level: 84 },
        { name: 'Linux', level: 56 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curious student building, learning, and experimenting
          </motion.p>
          <motion.div
            className="w-20 h-px bg-gray-400 mx-auto mt-6 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Skills categories - Clean Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-500 h-full">
                {/* Category Title */}
                <h3 
                  className="text-xl md:text-2xl text-gray-900 mb-2 tracking-tight" 
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {category.category}
                </h3>
                
                {/* Category Description */}
                <p className="text-xs md:text-sm text-gray-500 font-light mb-6 md:mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Skills List - Clean & Simple */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      {/* Skill Name */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-light">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Two-layer Progress Bar System */}
                      <div className="relative h-1.5 rounded-full overflow-hidden">
                        {/* Bottom layer: Light grey bar (fades in first) */}
                        <motion.div
                          className="absolute inset-0 bg-gray-200 rounded-full"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.08 
                          }}
                          viewport={{ once: true }}
                        />
                        
                        {/* Top layer: Black bar (fills in after grey appears) */}
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-black rounded-full"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 font-light italic text-sm tracking-wide">
            "Still learning, always building"
          </p>
        </motion.div>
      </div>

      {/* Subtle background decorations */}
      <div className="absolute top-20 left-16 w-16 h-px bg-gray-200 opacity-40" />
      <div className="absolute bottom-32 right-16 w-px h-20 bg-gray-200 opacity-40" />
    </section>
  );
};

export default HorizontalSkills;
