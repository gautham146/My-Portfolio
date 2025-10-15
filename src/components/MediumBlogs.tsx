import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight, Clock, TrendingUp } from 'lucide-react';

const MediumBlogs = () => {
  const blogs = [
    {
      title: "How to get started to learn AI",
      excerpt: "The basics of AI and how to get started in the field.",
      date: "August 26, 2025",
      readTime: "3 min read",
      link: "https://medium.com/@gauthamgirish2026/how-to-get-started-to-learn-ai-2110520a3e2b" 
    },
    {
      title: "Candlestick Basics: How to Read and Use in Trading",
      excerpt: "A dive into the brief history of the financial markets and beginner tricks.",
      date: "August 9th, 2025",
      readTime: "4 min read",
      link: "https://medium.com/@gauthamgirish2026/candlestick-basics-how-to-read-and-use-in-trading-878e3aecdb29"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/30" id="blogs">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-px bg-gray-300"></div>
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-gray-600" />
              <div className="w-8 md:w-12 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Blogs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Thoughts on technology and finance.
            </p>
            <div className="w-20 h-px bg-gray-400 mx-auto mt-6 md:mt-8" />
          </motion.div>
        </div>

        {/* Blog Articles */}
        <div className="space-y-4 md:space-y-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="block group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/50 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-light">Medium Article</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-xs text-gray-500">{blog.date}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl text-gray-900 group-hover:text-gray-700 transition-colors duration-300 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed font-light">
                        {blog.excerpt}
                      </p>
                      
                      {/* Meta info */}
                      <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gray-700 to-gray-900 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediumBlogs;
