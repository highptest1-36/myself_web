"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const projects = [
    {
      title: "NVIDIA Lab Projects",
      description: "Advanced AI projects on Jetson: Live LLaVA multimodal AI, OWL-ViT object detection, and NanoOWL for real-time vision tasks. Optimized with TensorRT for edge deployment.",
      tech: ["LLaVA", "OWL-ViT", "NanoOWL", "TensorRT", "Jetson Orin"],
      image: "/vibe_code (1).jpg",
      videos: ["/live_LLaVA.mp4", "/OWL.mp4", "/OWL_terminal.mp4"],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["NVIDIA Lab", "LLM", "Vision"],
    },
    {
      title: "Jetbot Chatbot on Jetson Orin Nano",
      description: "Interactive AI chatbot running on Jetson Orin Nano with real-time voice interaction, natural language understanding, and multimodal capabilities.",
      tech: ["Jetson Orin", "NLP", "Speech Recognition", "FastAPI"],
      image: "/vibe_code (5).jpg",
      videos: ["/chatbotonjetson.mp4"],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["Chatbot", "Edge AI", "NLP"],
    },
    {
      title: "Self-Driving Car System",
      description: "Autonomous vehicle with PID + SMC control, YOLO + Hough lane detection. Real-time inference on Jetson Nano with Arduino motor control. Includes simulation and UIT Racing competition vehicle.",
      tech: ["Jetson Nano", "OpenCV", "PyTorch", "YOLO", "Unity", "Arduino"],
      image: "/car_1.png",
      videos: ["/bam_lane.mp4", "/xe_ute.mp4", "/uit_racingcar.mp4", "/mo_phong.mp4"],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["Autonomous", "Vision", "Control"],
    },
    {
      title: "Jetbot NVIDIA Obstacle Avoidance",
      description: "NVIDIA Jetbot with real-time obstacle detection and avoidance using deep learning. Optimized for edge deployment on Jetson Nano platform.",
      tech: ["Jetson Nano", "Deep Learning", "Computer Vision", "ROS"],
      image: "/car_2.jpg",
      videos: ["/vat_can.mp4"],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["Robotics", "Jetbot", "Real-time"],
    },
    {
      title: "Autonomous Drone System",
      description: "Pixhawk 4, Jetson Orin Nano, GPS M9N autonomous system for human tracking, package delivery, and GPS-based navigation with computer vision.",
      tech: ["ROS2", "PX4", "Deep Learning", "GPS", "Computer Vision"],
      image: "/drone_1.jpg",
      videos: [],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["UAV", "Robotics", "Navigation"],
    },
    {
      title: "Small Object Detection for UAV",
      description: "UAV-based small-object detection integrating BiFPN, C3Ghost, CBAM, and MPDIoU. Published in RTIS 2025 (Springer LNNS). Advanced research in aerial computer vision.",
      tech: ["PyTorch", "YOLOv8", "BiFPN", "CBAM", "MPDIoU"],
      image: "/drone_2.jpg",
      videos: [],
      github: "https://github.com/highptest1-36",
      demo: "https://docs.google.com/presentation/d/19NWa4nTCt2IAmD0TVgM--fJo68OnBvM6JPK58ysWoYQ/edit?usp=sharing",
      badges: ["Research", "Published", "Detection"],
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
              {/* Project Image/Video */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                {selectedProject === index && project.videos.length > 0 ? (
                  <div className="relative h-full">
                    <video
                      key={currentVideoIndex}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                    >
                      <source src={project.videos[currentVideoIndex]} type="video/mp4" />
                    </video>
                    
                    {/* Video navigation if multiple videos */}
                    {project.videos.length > 1 && (
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
                        {project.videos.map((_, vidIndex) => (
                          <button
                            key={vidIndex}
                            onClick={() => setCurrentVideoIndex(vidIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentVideoIndex === vidIndex 
                                ? 'bg-blue-500 w-6' 
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Play button if videos available */}
                    {project.videos.length > 0 && (
                      <button
                        onClick={() => {
                          setSelectedProject(index);
                          setCurrentVideoIndex(0);
                        }}
                        className="absolute inset-0 flex items-center justify-center group/play"
                      >
                        <div className="w-16 h-16 bg-blue-500/80 rounded-full flex items-center justify-center group-hover/play:bg-blue-600 transition-colors backdrop-blur-sm">
                          <FaPlay className="w-6 h-6 text-white ml-1" />
                        </div>
                      </button>
                    )}
                  </>
                )}
                
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
                
                {/* Video count indicator */}
                {project.videos.length > 1 && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm">
                    🎥 {project.videos.length} videos
                  </div>
                )}
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
