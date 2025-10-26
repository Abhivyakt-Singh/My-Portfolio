import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, GitBranch, Server, Blocks } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frameworks',
    icon: Blocks,
    skills: ['JDBC', 'OOP', 'Multithreading', 'Data Structures'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Tools & Cloud',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS'],
    color: 'from-yellow-500 to-orange-500'
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in a wide range of technologies and tools for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                }}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'Debugging', 'Agile Development', 'Version Control'].map((competency) => (
                <span
                  key={competency}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
