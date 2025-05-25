import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Patient Registration Software',
    description: 'Hospital Sultanah Aminah Johor Bahru',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Blockchain Projects',
    description: 'Digital Identity Verification - MBKT & MBJB',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Procurement Analytics Dashboard',
    description: 'Power BI (SIRIM Berhad)',
    gradient: 'from-pink-500 to-blue-500',
  },
  {
    title: 'AI-Powered Security Analyzer',
    description: 'UiTM Hackathon',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Web Development, SOC Analyst and Administrator System',
    description: 'Jabatan Pendidikan Negeri Terengganu',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Digital Forensic Investigation',
    description: 'University College Sedaya International & Universiti Kebangsaan Malaysia',
    gradient: 'from-blue-500 to-purple-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}>
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
