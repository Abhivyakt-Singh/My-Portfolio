import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experience = {
  company: 'Tellies Technologies Pvt. Ltd.',
  role: 'Software Developer Intern',
  duration: 'Jan 2025 – Jun 2025',
  location: 'Bhopal, India',
  responsibilities: [
    'Developed backend modules using Java and MySQL for enterprise applications',
    'Built scalable web applications with comprehensive API integration',
    'Implemented version control workflows using Git/GitHub for team collaboration',
    'Participated in code reviews and debugging sessions to ensure code quality',
    'Collaborated with cross-functional teams in Agile development environment'
  ]
};

const education = {
  degree: 'Bachelor of Engineering (BE)',
  university: 'RKDF University',
  location: 'Bhopal, India',
  duration: '2021 – 2025',
  cgpa: '7.56 / 10'
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
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
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />

            <div className="ml-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {experience.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />

            <div className="ml-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="text-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    {education.university}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
                    CGPA: {education.cgpa}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
