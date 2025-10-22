"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-scroll";
import Image from "next/image";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/highptest1-36", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/phucha04/", label: "LinkedIn" },
    { icon: FaGoogle, href: "https://scholar.google.com", label: "Google Scholar" },
    { icon: HiMail, href: "mailto:caophuc@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Cao-Phuc Ha</span>
          </motion.h1>

          <div className="text-2xl md:text-3xl font-semibold mb-6 h-20 text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Robotics Researcher",
                2000,
                "Computer Vision Expert",
                2000,
                "NLP Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
          >
            Building intelligent systems that bridge deep learning and control theory.
            Specialized in computer vision, NLP, and embedded AI on Jetson platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              View My Projects
            </Link>
            <a
              href="https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              📊 Project Resources
            </a>
            <a
              href="/Cao-Phuc-Ha-CV.pdf"
              download
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/author1.jpg"
                alt="Cao Phúc Hà"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 -left-4 glass px-4 py-2 rounded-full shadow-lg"
          >
            <span className="font-semibold text-sm">🤖 Robotics</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-1/3 -right-4 glass px-4 py-2 rounded-full shadow-lg"
          >
            <span className="font-semibold text-sm">🧠 Deep Learning</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-20 -left-4 glass px-4 py-2 rounded-full shadow-lg"
          >
            <span className="font-semibold text-sm">👁️ Computer Vision</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
