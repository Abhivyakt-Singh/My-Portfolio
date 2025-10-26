import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2024',
    icon: BookOpen,
    gradient: 'from-blue-600 to-cyan-600'
  }
];

const achievements = [
  {
    title: '2nd Position - Science Exhibition',
    description: 'Secured second position in Science Exhibition, Bhopal for innovative "Precision Farming" project',
    location: 'Bhopal, India',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500'
  }
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
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
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <Award className="text-blue-600" size={28} />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.date}
                      </p>
                    </div>
                    <div className={`px-4 py-2 bg-gradient-to-r ${cert.gradient} text-white rounded-full text-sm font-semibold`}>
                      Certified
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <Trophy className="text-yellow-500" size={28} />
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${achievement.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <achievement.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
