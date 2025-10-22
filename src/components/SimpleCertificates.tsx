import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const SimpleCertificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Certificate 1",
      issuer: "Issuing Organization",
      date: "January 2025",
      description: "Brief description of the certification",
      image: "https://i.imgur.com/St7naqV.png"
    },
    {
      id: 2,
      title: "Certificate 2",
      issuer: "Issuing Organization",
      date: "December 2024",
      description: "Brief description of the certification",
      image: "https://i.imgur.com/SMtAdoF.jpeg"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8" id="certificates">
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
              <Award className="w-6 h-6 md:w-7 md:h-7 text-gray-600" />
              <div className="w-8 md:w-12 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Certificates
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
              Professional certifications and recognitions
            </p>
            <div className="w-20 h-px bg-gray-400 mx-auto mt-6 md:mt-8" />
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Certificate Card */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow duration-500">
                
                {/* Certificate Image */}
                <div className="relative h-64 md:h-80 overflow-hidden bg-gray-50">
                  <ImageWithFallback
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Award badge overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl text-gray-900 mb-2 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {certificate.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-light mb-3">
                    <span>{certificate.issuer}</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{certificate.date}</span>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleCertificates;
