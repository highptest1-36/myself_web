"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Virtual Assistant for FPT",
      description: "Multimodal RAG-based AI Assistant on Jetson Orin with speech recognition, gesture and object recognition. Users can control services through natural voice commands.",
      tech: ["FastAPI", "Gemini", "Vertex AI", "RAG", "NLP", "Computer Vision"],
      image: "/image/vibe_code (1).jpg",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["Edge AI", "NLP", "Multimodal"],
    },
    {
      title: "Self-Driving Car",
      description: "Autonomous vehicle with PID + SMC control, YOLO + Hough lane detection. Real-time inference on Jetson Nano with Arduino motor control.",
      tech: ["Jetson Nano", "OpenCV", "PyTorch", "YOLO", "Unity"],
      image: "/image/car_1.png",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["Autonomous", "Vision", "Control Theory"],
    },
    {
      title: "Drone Control System",
      description: "Pixhawk 4, Jetson Orin Nano, GPS M9N autonomous system for human tracking, package delivery, and GPS-based navigation.",
      tech: ["ROS2", "PX4", "Deep Learning", "GPS", "Computer Vision"],
      image: "/image/drone_1.jpg",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["Robotics", "UAV", "Real-time"],
    },
    {
      title: "Bitcoin Forecasting (XAI)",
      description: "Explainable AI for Bitcoin price prediction using XGBoost, LSTM, and SVM. Applied SHAP and LIME for model interpretability.",
      tech: ["Python", "XGBoost", "LSTM", "SHAP", "LIME"],
      image: "/image/car_2.jpg",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["XAI", "Finance", "Research"],
    },
    {
      title: "Real-Time Video Processing",
      description: "Deploy NanoLLM, NanoOWL, and OWL-ViT for object and text recognition. Optimized with TensorRT for Jetson Orin Nano with chatbot integration.",
      tech: ["TensorRT", "NanoLLM", "Jetson Orin", "LLM"],
      image: "/image/vibe_code (5).jpg",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["Edge AI", "LLM", "Vision"],
    },
    {
      title: "Small Object Detection UAV",
      description: "UAV-based small-object detection integrating BiFPN, C3Ghost, CBAM, and MPDIoU. Published in RTIS 2025 (Springer LNNS).",
      tech: ["PyTorch", "YOLOv8", "BiFPN", "CBAM"],
      image: "/image/drone_2.jpg",
      github: "https://github.com/caophuc",
      demo: "#",
      badges: ["Research", "UAV", "Detection"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world AI applications bridging research and practice
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
