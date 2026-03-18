'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Cell Collective / University of Nebraska–Lincoln',
    position: 'Full-Stack Software Engineer',
    period: 'Nov 2023 – Jan 2026',
    location: 'Lincoln, NE (Remote)',
    description: [
      'Built and maintained a scientific modeling platform serving 10,000+ users',
      'Developed TypeScript monorepo with Turborepo, reducing build time by 40%',
      'Collaborated with research scientists to translate complex models into user-friendly interfaces',
      'Implemented CI/CD pipelines and improved code quality standards',
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    company: 'Prospect 33',
    position: 'Full Stack Developer',
    period: 'May 2021 – May 2022',
    location: 'Remote',
    description: [
      'Built AI-powered interview platform integrating GPT-3 for real-time analysis',
      'Developed frontend using React with TypeScript for type safety',
      'Created RESTful APIs with Node.js and Express',
      'Implemented WebSocket connections for real-time features',
    ],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    company: 'EnigmaScore',
    position: 'Senior Software Developer',
    period: 'Jun 2019 – Jul 2022',
    location: 'Nairobi, Kenya',
    description: [
      'Developed automated recruitment platform for candidate screening',
      'Built scalable backend using Spring Boot with Angular frontend',
      'Implemented machine learning models for candidate assessment',
      'Led a team of 3 developers, ensuring code quality and timely delivery',
    ],
    gradient: 'from-green-600 to-emerald-600',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-green-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey through software development and AI engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50 z-10" />

                {/* Content */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card relative overflow-hidden group"
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.gradient} flex items-center justify-center`}
                        >
                          <Briefcase size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          <p className="text-gradient font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={16} className="text-purple-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin size={16} className="text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Empty div for alternating layout */}
                <div className="hidden md:block md:w-1/2 pl-12 md:pl-0 md:pr-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
