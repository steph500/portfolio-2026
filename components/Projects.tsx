'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const projects = [
  {
    name: 'JobBot',
    description: 'Automated job application system with AI-powered resume optimization. Handles multi-platform job searching and applications with intelligent targeting.',
    tech: ['TypeScript', 'Python', 'Ollama', 'Next.js'],
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    color: 'from-blue-500 to-cyan-500',
    url: 'https://github.com/steph500/openclaw-workspace',
  },
  {
    name: 'CCNetViz',
    description: 'JavaScript library for visualization of large-scale network graphs using WebGL. High-performance rendering for complex data visualizations.',
    tech: ['JavaScript', 'WebGL', 'Three.js'],
    stars: 0,
    forks: 0,
    language: 'JavaScript',
    color: 'from-purple-500 to-pink-500',
    url: 'https://github.com/steph500/ccNetViz',
  },
  {
    name: 'Chatbot Chorus',
    description: 'AI-powered conversational interface with multi-model support. Seamless integration with various LLM providers for dynamic interactions.',
    tech: ['TypeScript', 'React', 'AI/ML'],
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    color: 'from-green-500 to-emerald-500',
    url: 'https://github.com/steph500/chatbot-chorus',
  },
  {
    name: 'Ivy',
    description: 'The Unified Machine Learning Framework. A unified interface for multiple ML frameworks enabling seamless model development and deployment.',
    tech: ['Python', 'ML', 'Framework'],
    stars: 0,
    forks: 0,
    language: 'Python',
    color: 'from-yellow-500 to-orange-500',
    url: 'https://github.com/steph500/ivy',
  },
  {
    name: 'Arduino Projects',
    description: 'Embedded systems experiments including IoT sensors, automation controllers, and hardware-software integration projects.',
    tech: ['C++', 'Arduino', 'IoT'],
    stars: 0,
    forks: 0,
    language: 'C++',
    color: 'from-red-500 to-pink-500',
    url: 'https://github.com/steph500/Arduino',
  },
  {
    name: 'Schedule App',
    description: 'Modern scheduling application with intelligent time management features. Built with TypeScript and Next.js for optimal performance.',
    tech: ['TypeScript', 'Next.js', 'React'],
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    color: 'from-indigo-500 to-purple-500',
    url: 'https://github.com/steph500/schedule',
  },
];

const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3776ab',
    'C++': '#00599C',
    HTML: '#e34c26',
  };
  return colors[language] || '#8b949e';
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my work across AI/ML, web development, and embedded systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card group"
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}
                  >
                    <Github size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center gap-1 text-sm text-gray-400"
                      style={{ color: getLanguageColor(project.language) }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      />
                      {project.language}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 group-hover:bg-white/10 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={16} />
                      {project.forks}
                    </span>
                  </div>

                  {/* Action Link */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all`}
                  >
                    View Project
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/steph500?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
