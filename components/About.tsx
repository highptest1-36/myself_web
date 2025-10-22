"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiCode, HiLightningBolt } from "react-icons/hi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    "AI & ML": ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LSTM"],
    "Computer Vision": ["YOLO", "OpenCV", "Object Detection", "Lane Detection", "Image Segmentation"],
    "NLP & LLM": ["RAG", "Transformers", "Gemini", "NanoLLM", "Agent Systems"],
    "Embedded & Edge": ["Jetson Nano", "Jetson Orin", "Arduino", "STM32", "Raspberry Pi"],
    "Cloud & DevOps": ["Docker", "Git", "Google Cloud", "AWS", "FastAPI"],
    "Robotics": ["ROS2", "PX4", "Pixhawk", "Autonomous Systems", "Control Theory"],
  };

  const timeline = [
    { year: "2023–Present", event: "BSc in AI, FPT University", gpa: "GPA: 3.2/4.0" },
    { year: "2024", event: "Exchange at TAR UMT, Malaysia", gpa: "IELTS 6.0" },
    { year: "2025", event: "Paper accepted at EIDT'25", gpa: "Springer LNEE" },
    { year: "2025", event: "Paper accepted at RTIS'25", gpa: "Springer LNNS" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            AI & Robotics student with strong hands-on experience in computer vision, NLP, and embedded systems.
            I build real-time AI applications on Jetson platforms for autonomous control, lane-keeping, and intelligent assistants.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiAcademicCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Research Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time intelligent control, autonomous driving, and explainable AI
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiCode className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Publications</h3>
            <p className="text-gray-600 dark:text-gray-400">
              2 papers accepted in Springer LNEE and LNNS (2025)
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiLightningBolt className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Edge AI Expert</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Specialized in deploying AI models on Jetson Nano/Orin platforms
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-4 gradient-text">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Education Timeline</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 mb-8 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 mt-2"></div>
                  )}
                </div>
                <div className="glass rounded-xl p-4 flex-1 mb-4">
                  <div className="font-bold text-blue-600 dark:text-blue-400">{item.year}</div>
                  <div className="font-semibold text-lg">{item.event}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.gpa}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
