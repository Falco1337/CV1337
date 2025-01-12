import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import dilImage from './dil.jpg';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate visitor count (in a real app, this would come from a backend)
    const count = parseInt(localStorage.getItem('visitorCount') || '0');
    localStorage.setItem('visitorCount', (count + 1).toString());
    setVisitorCount(count + 1);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center blur-sm opacity-20" />
      
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img
                src={dilImage}
                alt="Aidil Hizwan"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onSelectStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              />
            </motion.div>

            <div className="text-4xl md:text-6xl font-bold mb-4">
              <TypeAnimation
                sequence={[
                  'Hello there!',
                  1000,
                  'Welcome to my Portfolio!',
                  1000,
                  "I'm Aidil Hizwan",
                  1000,
                  'UiTM Shah Alam',
                  1000,
                  'Bachelor of Sport Science and Recreation',
                  1000,
                  'Terengganu | Johor | Malaysia',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '45px', display: 'inline-block'}}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              Cybersecurity Researcher | Blockchain Developer | Backend Programmer | Pentester | Sport Scientist
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              <FaGithub href="https://github.com/Falco1337" icon={<FaGithub />} />
              <FaEnvelope href="mailto:xxxhtml00@gmail.com" icon={<FaEnvelope />} />
              <FaInstagram href="https://www.instagram.com/a.xydiel/" icon={<FaInstagram />} />
              <FaTelegram href="https://t.me/Mydiel" icon={<FaTelegram />} />
              <FaWhatsapp href="https://wa.me/message/WUVEKGT6NHMHJ1" icon={<FaWhatsapp />} />
            </motion.div>
          </div>
        </section>

        <About />
        <Projects />
        <Certificates />
        <Contact />

        <footer className="text-center py-6 bg-black/50 backdrop-blur-sm">
          <p className="text-sm text-gray-400">Viewer: {visitorCount}</p>
          <p className="text-sm text-gray-400">Aidil Hizwan. All Rights Reserved© 2025</p>
        </footer>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-purple-500 transition-colors"
  >
    {icon}
  </motion.a>
);

export default App;
