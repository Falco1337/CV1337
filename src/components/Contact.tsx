import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Instagram, MessageSquare, Phone } from 'lucide-react';

const contacts = [
  {
    icon: <Github />,
    label: 'GitHub',
    href: 'https://github.com/Falco1337',
  },
  {
    icon: <MessageSquare />,
    label: 'Telegram',
    href: 'https://t.me/Mydiel',
  },
  {
    icon: <Instagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/a.xydiel/',
  },
  {
    icon: <Mail />,
    label: 'Email',
    href: 'mailto:xxxhtml00@gmail.com',
  },
  {
    icon: <Phone />,
    label: 'WhatsApp',
    href: 'https://wa.me/message/WUVEKGT6NHMHJ1',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="text-purple-500">{contact.icon}</div>
              <span className="text-gray-300">{contact.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;