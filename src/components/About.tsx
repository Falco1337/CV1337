import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaPhp, SiGnubash, BsFiletypeSql, DiRuby, } from 'react-icons/fa';

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

const proficienciess = [
  {
    icon: <FaPython />,
    label: 'Python',
  },
  {
    icon: <FaPhp />,
    label: 'Php',
  },
  {
    icon: <SiGnubash />,
    label: 'Bash',
  },
  {
    icon: <BsFiletypeSql />,
    label: 'SQL',
  },
  {
    icon: <DiRuby />,
    label: 'Ruby',
  },
];

const Proficiencies = () => {
  return (
    <section id="proficiencies" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Proficiencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Proficienciess.map((proficiencies, index) => (
            <motion.a
              key={index}
              href={proficiencies.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="text-purple-500">{proficiencies.icon}</div>
              <span className="text-gray-300">{proficiencies.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
