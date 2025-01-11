import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const certificates = [
  'United Nations Cyber Security Specialist - UNOICT',
  'Certified Ethical Hacker (CEH)',
  'OSCP (Offensive Security Certified Professional)',
  'Bachelor of Sport Science and Recreations (UiTM Shah Alam)',
];

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <p className="text-lg text-gray-300">{cert}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/file/d/14EAk1rB9FyR4PwyiIxb7dy45IOQ2_DWL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={20} />
            Review CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;