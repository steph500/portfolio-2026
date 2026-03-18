'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI & ML Engineering',
    description: 'Building intelligent systems with modern ML frameworks and LLM integration',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'React, TypeScript, Next.js, Python - creating scalable web applications',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Remote Ready',
    description: 'Experienced working with distributed teams across time zones',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and solving complex problems',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an <span className="text-gradient font-semibold">AI Engineer</span> and{' '}
              <span className="text-gradient font-semibold">ML Engineer</span> passionate about building
              intelligent systems that solve real-world problems. With a strong foundation in full-stack
              development and a deep interest in artificial intelligence, I bridge the gap between
              cutting-edge ML research and production applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Based in <span className="text-cyan-400 font-semibold">Kenya</span> but working globally,
              I thrive in remote environments where I can collaborate with diverse teams and deliver
              impactful solutions. My approach combines technical excellence with a user-centric mindset.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently focused on <span className="text-purple-400 font-semibold">LLM applications</span>,{' '}
              <span className="text-pink-400 font-semibold">AI automation</span>, and building systems that
              make AI accessible and useful for everyone.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['AI/ML', 'React', 'TypeScript', 'Python', 'Next.js', 'Three.js', 'Ollama', 'LLMs'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
