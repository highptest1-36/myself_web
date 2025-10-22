"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiStar } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import Image from "next/image";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Runner-up RMIT Hackathon 2025",
      organization: "RMIT University",
      date: "October 2025",
      description: "🥈 Second place in RMIT Hackathon 2025 - Computer Vision Track",
      image: "/image/rmit_hackathon (1).jpg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Top 3 – Olympiad in Artificial Intelligence Hackathon 2025",
      organization: "Ho Chi Minh City",
      date: "April 2025",
      description: "🥇 Led Computer Vision development with ViT-based image classification enhanced by CutMix. Achieved 100% accuracy in final round.",
      image: "/image/OAI_1.jpg",
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Top 5 - Final Round Research Festival",
      organization: "Quy Nhon",
      date: "June 2025 – August 2025",
      description: "Agent–Trading–Forex (ATF): A LLM Orchestrated Multi-Model Architecture for Intelligent Forex Trading",
      image: "/image/vibe_code (3).jpg",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Top 4/26 & Top 5/31 – UIT Racing Car",
      organization: "UIT University",
      date: "July 2023 – August 2024",
      description: "🏎 Autonomous racing car competition - Top performance in multiple rounds",
      image: "/image/car_1.png",
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Outstanding Paper – Global Capstone Conference 2024",
      organization: "Ho Chi Minh City",
      date: "January 2024",
      description: "🧠 Recognized for exceptional research presentation and innovation",
      image: "/image/vibe_code (6).jpg",
      color: "from-indigo-400 to-purple-500",
    },
    {
      title: "Top 11 – Zalo AI Challenge: Background Music Generation",
      organization: "Zalo AI",
      date: "November 2023",
      description: "🎵 Advanced to top 11 in competitive AI music generation challenge",
      image: "/image/vibe_code (8).jpg",
      color: "from-pink-400 to-rose-500",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="awards" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Honors & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition for excellence in AI research, hackathons, and competitions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, rotate: 1 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-6">
                {/* Trophy Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${award.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <FaTrophy className="w-8 h-8 text-white" />
                </div>

                {/* Image Preview */}
                <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Award Title */}
                <h3 className="text-lg font-bold mb-2 text-center min-h-[3rem] flex items-center justify-center">
                  {award.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center justify-center gap-2 mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <HiStar className="w-4 h-4 text-yellow-500" />
                  <span>{award.organization}</span>
                </div>

                {/* Date */}
                <div className="text-sm text-center text-gray-500 dark:text-gray-500 mb-3">
                  {award.date}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Machine Learning Operations (MLOps) for Generative AI",
              "Introduction to Responsible AI & Applying AI Principles with Google Cloud",
              "Prompt Design in Vertex AI",
              "Introduction to AI, Generative AI, Responsible AI, LLMs and ML on Google Cloud",
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📜</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{cert}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Google Cloud</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
