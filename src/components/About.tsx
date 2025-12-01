import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Briefcase } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Strong foundation in Java, OOP, and Data Structures'
  },
  {
    icon: Globe,
    title: 'Full Stack Development',
    description: 'Experience with React, Node.js, and modern web technologies'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Proficient in MySQL and MongoDB'
  },
  {
    icon: Briefcase,
    title: 'Real-World Experience',
    description: 'Worked on scalable applications and API integrations'
  }
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3" />
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                  <img src="../public/assest/profile.jpg" alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Software Developer with a Passion for Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Software Developer with a strong foundation in Java, Data Structures,
              and Web Development. Currently pursuing my Bachelor of Engineering at RKDF
              University, Bhopal with a CGPA of 7.56/10.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to building
              scalable, efficient applications. I've worked on real-world projects ranging
              from e-commerce platforms to AI-powered interfaces, always focusing on clean
              code and optimal solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-semibold">
                Team Player
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-full text-sm font-semibold">
                Quick Learner
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
