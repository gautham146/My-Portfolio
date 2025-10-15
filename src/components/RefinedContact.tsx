import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function RefinedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = 'New Contact Form Submission';
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A%Message: %0D%0A$ ${formData.message}`;
    const mailtoLink = `mailto:gauthamgirish2026@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
 
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gauthamgirish2026@gmail.com',
      href: 'mailto:gauthamgirish2026@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Albany, OH',
      href: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@gauthamgirish',
      href: 'https://github.com/gautham146'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Gautham Girish',
      href: 'https://www.linkedin.com/in/gautham-girish-561773303/'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Whether you have a project in mind or just want to connect, 
            I'd love to hear from you.
          </motion.p>
          <motion.div
            className="w-20 h-px bg-gray-500 mx-auto mt-6 md:mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-8">
                Let's start a conversation
              </h3>
              <p className="text-gray-300 leading-relaxed font-light mb-12">
                I'm always interested in new opportunities, creative collaborations, 
                and meaningful projects. Feel free to reach out through any of the 
                channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg group-hover:border-gray-500 group-hover:bg-gray-700 transition-colors duration-300">
                    <method.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-white">{method.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label className="block text-sm text-gray-400 mb-2 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm text-gray-400 mb-2 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 focus:border-gray-400 focus:outline-none transition-colors duration-300 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm text-gray-400 mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-0 py-3 text-white bg-transparent border-0 border-b border-gray-600 focus:border-gray-400 focus:outline-none resize-none transition-colors duration-300 placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="group relative flex items-center gap-3 px-8 py-4 bg-white text-gray-900 text-sm tracking-wide uppercase font-medium rounded-lg transition-all duration-300 hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm font-light">
            © 2024 Gautham Girish. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}