import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a versatile professional specializing in cybersecurity, blockchain development, and backend programming. 
          With expertise in penetration testing and system security, I create secure, efficient solutions. 
          As a sport scientist, I bring a unique perspective by merging technology with human performance.
        </p>
      </motion.div>
    </section>
  );
};

export default About;