'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'stephenjuma500@gmail.com',
    href: 'mailto:stephenjuma500@gmail.com',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 707 322 993',
    href: 'tel:+254707322993',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya (Remote)',
    href: null,
    gradient: 'from-green-600 to-emerald-600',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/steph500',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/stephen-juma-a13489150',
    gradient: 'from-blue-600 to-blue-800',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build something amazing together? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href || undefined}
                onClick={(e) => !info.href && e.preventDefault()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: info.href ? 1.02 : 1 }}
                className={`glass-card flex items-center gap-4 ${info.href ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <info.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all`}
                  >
                    <social.icon size={28} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:stephenjuma500@gmail.com';
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                This will open your email client to send the message directly.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
