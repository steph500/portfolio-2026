'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'LLM Integration', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'TensorFlow/PyTorch', level: 85 },
      { name: 'Ollama & Local AI', level: 88 },
      { name: 'NLP', level: 82 },
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Frontend Development',
    icon: '⚛️',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 88 },
      { name: 'Three.js', level: 75 },
    ],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Backend & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'API Design', level: 90 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'CI/CD', level: 82 },
    ],
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Embedded & IoT',
    icon: '🔌',
    skills: [
      { name: 'Arduino', level: 85 },
      { name: 'ESP32', level: 82 },
      { name: 'Embedded C/C++', level: 78 },
      { name: 'IoT Systems', level: 80 },
    ],
    gradient: 'from-orange-600 to-red-600',
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category List */}
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.gradient} shadow-2xl shadow-purple-500/20`
                    : 'glass hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        activeCategory === index ? 'text-white' : 'text-gray-200'
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className={`text-sm ${activeCategory === index ? 'text-white/80' : 'text-gray-500'}`}>
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skill Details */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass-card h-full">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{skillCategories[activeCategory].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <div className={`h-1 w-24 bg-gradient-to-r ${skillCategories[activeCategory].gradient} rounded-full mt-2`} />
                </div>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
