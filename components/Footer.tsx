'use client';

import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              © {currentYear} Stefan O. Juma. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Built with <span className="text-gradient font-semibold">Next.js</span>,{' '}
              <span className="text-gradient font-semibold">Three.js</span>, &{' '}
              <span className="text-gradient font-semibold">Framer Motion</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400"
          >
            <span>Crafted with</span>
            <Heart size={18} className="text-red-500 fill-red-500" />
            <span>and</span>
            <Code2 size={18} className="text-cyan-400" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
