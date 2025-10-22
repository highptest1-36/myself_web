"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // Send email using EmailJS SDK
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_vx9przg',
        'template_cxmab8a',
        templateParams,
        'yF_RyrMDGNH7KFZjW'
      );

      console.log('EmailJS Success:', result);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
      
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "caophucai@gmail.com",
      link: "mailto:caophucai@gmail.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "0365634908",
      link: "tel:0365634908",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Thu Duc, Ho Chi Minh City",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      link: "https://github.com/highptest1-36",
      color: "hover:bg-gray-800",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/phucha04/",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      link: "https://www.facebook.com/ha.cao.phuc.2024/",
      color: "hover:bg-blue-500",
    },
    {
      icon: FaGoogle,
      name: "Google Scholar",
      link: "https://scholar.google.com",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss opportunities in AI, robotics, or research collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white dark:bg-gray-800 rounded-xl ${social.color} hover:text-white transition-all shadow-md text-gray-700 dark:text-gray-300`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 glass rounded-2xl"
            >
              <h4 className="font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Available for Opportunities
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open to internships, research collaborations, and full-time positions in AI & Robotics
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                  status === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : status === "success"
                    ? "bg-green-500"
                    : status === "error"
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg"
                }`}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent! ✓" : status === "error" ? "Failed to send ✗" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Me */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Cao Phúc Hà</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                AI & Robotics student passionate about building intelligent systems. 
                Focused on Computer Vision, NLP, and Embedded AI on Jetson platforms.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                🎓 FPT University • 📍 Ho Chi Minh City, Vietnam
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    → About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    → Projects
                  </a>
                </li>
                <li>
                  <a href="#publications" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    → Publications
                  </a>
                </li>
                <li>
                  <a href="#awards" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    → Awards
                  </a>
                </li>
              </ul>
            </div>

            {/* Research Focus */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Research Interests</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>🤖 Autonomous Driving Systems</li>
                <li>👁️ Real-time Computer Vision</li>
                <li>🧠 Embedded AI on Edge Devices</li>
                <li>🗣️ Natural Language Processing</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Cao Phúc Hà. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:caophucai@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                caophucai@gmail.com
              </a>
              <span className="text-gray-400">•</span>
              <a href="tel:0365634908" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +84 365 634 908
              </a>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500 italic">
              "Bridging Deep Learning and Control Theory for Real-World Impact" 🤖✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
