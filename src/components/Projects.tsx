import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, Brain } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack shopping application featuring user authentication, comprehensive product catalog, shopping cart functionality, and order tracking system. Built with scalable architecture and deployed on Vercel.',
    icon: ShoppingCart,
    technologies: ['Java', 'MySQL', 'REST APIs', 'GitHub', 'Vercel'],
    features: [
      'User authentication & authorization',
      'Product catalog with search & filters',
      'Shopping cart & checkout process',
      'Order tracking & management',
      'Admin dashboard for inventory'
    ],
    gradient: 'from-blue-600 to-cyan-600',
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'AI Interface System',
    description: 'AI-powered interface with machine learning API integration. Enhanced user experience through interactive frontend design and real-time AI responses.',
    icon: Brain,
    technologies: ['JavaScript', 'API Integration', 'HTML5', 'CSS3', 'ML APIs'],
    features: [
      'ML API integration',
      'Real-time AI responses',
      'Interactive UI/UX design',
      'Responsive design',
      'Performance optimization'
    ],
    gradient: 'from-purple-600 to-pink-600',
    links: {
      demo: '#',
      github: '#'
    }
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world applications showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl`} />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <project.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-1.5 flex-shrink-0`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.demo}
                      className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.github}
                      className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Abhivyakt-Singh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
