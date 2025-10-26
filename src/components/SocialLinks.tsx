import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Abhivyakt-Singh',
    label: 'GitHub',
    color: 'hover:bg-gray-800 dark:hover:bg-gray-700'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/abhibykat-singh',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600'
  },
  {
    icon: Mail,
    href: 'mailto:abhivyakt.tech@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-600'
  },
  {
    icon: Phone,
    href: 'tel:+917800468307',
    label: 'Phone',
    color: 'hover:bg-green-600'
  }
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-8 bottom-8 z-40 hidden lg:block"
    >
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors ${link.color}`}
            aria-label={link.label}
          >
            <link.icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
