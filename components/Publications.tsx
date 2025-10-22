"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiDocumentText, HiExternalLink } from "react-icons/hi";
import { FaBook, FaUniversity } from "react-icons/fa";

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "Real-Time Lane-Keeping Control Using Sliding Mode and Hough Transform in a Simulation-Based Environment",
      conference: "EIDT 2025",
      publisher: "Springer LNEE",
      location: "University of Macau, Macau",
      date: "July 2025 – September 2025",
      description: "Focus: Real-time autonomous lane-keeping using control theory and computer vision in simulated environments.",
      tags: ["Control Theory", "Computer Vision", "Autonomous Systems"],
      link: "#",
      icon: FaUniversity,
    },
    {
      title: "Small Object Detection in UAV Imagery: Integrating BiFPN, C3Ghost, CBAM, and MPDIoU",
      conference: "RTIS 2025",
      publisher: "Springer LNNS",
      location: "University of Macau, Macau",
      date: "August 2025 – October 2025",
      description: "Focus: UAV-based small-object detection and embedded vision optimization. Indexed in SCOPUS, EI Compendex, and Web of Science.",
      tags: ["UAV", "Object Detection", "Deep Learning"],
      link: "#",
      icon: FaUniversity,
    },
    {
      title: "Agent–Trading–Forex (ATF): A LLM Orchestrated Multi-Model Architecture for Intelligent and Adaptive Forex Trading",
      conference: "Research Festival 2025",
      publisher: "Top 5 - Final Round",
      location: "Quy Nhon",
      date: "June 2025 – August 2025",
      description: "LLM-based multi-agent system for intelligent forex trading with adaptive strategies.",
      tags: ["LLM", "Agent Systems", "Finance"],
      link: "#",
      icon: FaBook,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="publications" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Peer-reviewed publications in international conferences and journals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-500"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <pub.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm">
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                      <HiDocumentText className="w-4 h-4" />
                      {pub.conference}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      📚 {pub.publisher}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      📍 {pub.location}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date & Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {pub.date}
                    </span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      View Paper
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center glass rounded-2xl p-6">
            <div className="text-4xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400">Springer Publications</div>
          </div>
          <div className="text-center glass rounded-2xl p-6">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Conference Papers</div>
          </div>
          <div className="text-center glass rounded-2xl p-6">
            <div className="text-4xl font-bold gradient-text mb-2">SCOPUS</div>
            <div className="text-gray-600 dark:text-gray-400">Indexed Journals</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
