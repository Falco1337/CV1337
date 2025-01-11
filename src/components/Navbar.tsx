import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['Home', 'About', 'Projects', 'Certificates', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.img
            src="src/Photo.png"
            alt="Logo"
            className="h-8 w-8"
            whileHover={{ scale: 1.1 }}
          />
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-500'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;