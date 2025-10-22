"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaPython, FaRobot, FaChartLine, FaBrain, 
  FaCode, FaDatabase, FaCloud, FaMicrochip,
  FaGraduationCap, FaAward, FaCertificate
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiOpencv, SiRos, 
  SiCplusplus, SiArduino, SiDocker, SiGit 
} from 'react-icons/si';

export default function SkillsChart() {
  const [activeTab, setActiveTab] = useState<'technical' | 'academic' | 'certifications'>('technical');

  // Technical Skills với phần trăm thành thạo
  const technicalSkills = [
    { name: 'Python', level: 95, icon: <FaPython />, color: 'from-blue-500 to-yellow-500' },
    { name: 'PyTorch', level: 90, icon: <SiPytorch />, color: 'from-red-500 to-orange-500' },
    { name: 'TensorFlow', level: 85, icon: <SiTensorflow />, color: 'from-orange-500 to-yellow-500' },
    { name: 'OpenCV', level: 88, icon: <SiOpencv />, color: 'from-green-500 to-blue-500' },
    { name: 'C/C++', level: 82, icon: <SiCplusplus />, color: 'from-blue-600 to-blue-400' },
    { name: 'ROS/ROS2', level: 80, icon: <SiRos />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Deep Learning', level: 92, icon: <FaBrain />, color: 'from-purple-500 to-pink-500' },
    { name: 'Computer Vision', level: 90, icon: <FaChartLine />, color: 'from-cyan-500 to-blue-500' },
    { name: 'NLP & LLM', level: 85, icon: <FaCode />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Embedded Systems', level: 83, icon: <FaMicrochip />, color: 'from-gray-600 to-gray-400' },
    { name: 'Docker & DevOps', level: 78, icon: <SiDocker />, color: 'from-blue-500 to-cyan-400' },
    { name: 'Git & GitHub', level: 88, icon: <SiGit />, color: 'from-orange-500 to-red-500' },
  ];

  // Academic Achievements
  const academicData = [
    { 
      category: 'Research Publications',
      items: [
        { name: 'EIDT 2025 - Springer LNEE', value: 1, color: 'bg-blue-500' },
        { name: 'RTIS 2025 - Springer LNNS', value: 1, color: 'bg-purple-500' },
        { name: 'Under Review', value: 2, color: 'bg-yellow-500' }
      ]
    },
    {
      category: 'Academic Awards',
      items: [
        { name: 'Top 5 Research Festival', value: 1, color: 'bg-green-500' },
        { name: 'Outstanding Capstone', value: 1, color: 'bg-blue-500' },
        { name: 'Runner-up Hackathons', value: 2, color: 'bg-red-500' }
      ]
    },
    {
      category: 'Education Level',
      items: [
        { name: 'Bachelor (GPA 3.5+)', value: 85, color: 'bg-indigo-500' },
        { name: 'Exchange Program (TAR UMT)', value: 75, color: 'bg-cyan-500' },
        { name: 'Research Experience', value: 90, color: 'bg-purple-500' }
      ]
    }
  ];

  // Certifications
  const certifications = [
    { name: 'Google Cloud Engineer', issuer: 'Google Cloud', year: '2024', icon: <FaCloud />, color: 'from-blue-500 to-blue-600' },
    { name: 'AI/ML Specialization', issuer: 'Google Cloud', year: '2024', icon: <FaBrain />, color: 'from-purple-500 to-pink-500' },
    { name: 'Data Engineering', issuer: 'Google Cloud', year: '2024', icon: <FaDatabase />, color: 'from-green-500 to-teal-500' },
    { name: 'Advanced Solutions Lab', issuer: 'Google Cloud', year: '2024', icon: <FaCertificate />, color: 'from-yellow-500 to-orange-500' },
  ];

  // Radar Chart Data for Skills
  const radarSkills = [
    { skill: 'AI & ML', value: 92 },
    { skill: 'Computer Vision', value: 90 },
    { skill: 'Robotics', value: 85 },
    { skill: 'NLP', value: 85 },
    { skill: 'Embedded', value: 83 },
    { skill: 'Cloud', value: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills-chart" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive overview of technical proficiency and academic achievements
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {(['technical', 'academic', 'certifications'] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {tab === 'technical' && 'Technical Skills'}
              {tab === 'academic' && 'Academic Profile'}
              {tab === 'certifications' && 'Certifications'}
            </motion.button>
          ))}
        </div>

        {/* Technical Skills Tab */}
        {activeTab === 'technical' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Radar Chart Visualization */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Skills Overview</h3>
              <div className="relative w-full max-w-2xl mx-auto aspect-square">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Background circles */}
                  {[80, 160, 240, 320].map((r, i) => (
                    <circle
                      key={i}
                      cx="200"
                      cy="200"
                      r={r}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-300 dark:text-gray-600"
                      opacity="0.3"
                    />
                  ))}
                  
                  {/* Skill lines from center */}
                  {radarSkills.map((skill, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 200 + Math.cos(angle) * 320;
                    const y = 200 + Math.sin(angle) * 320;
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-300 dark:text-gray-600"
                        opacity="0.3"
                      />
                    );
                  })}
                  
                  {/* Skill polygon */}
                  <motion.polygon
                    points={radarSkills.map((skill, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const r = (skill.value / 100) * 320;
                      const x = 200 + Math.cos(angle) * r;
                      const y = 200 + Math.sin(angle) * r;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="url(#gradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  
                  {/* Skill points */}
                  {radarSkills.map((skill, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const r = (skill.value / 100) * 320;
                    const x = 200 + Math.cos(angle) * r;
                    const y = 200 + Math.sin(angle) * r;
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#3b82f6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      />
                    );
                  })}
                  
                  {/* Skill labels */}
                  {radarSkills.map((skill, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 200 + Math.cos(angle) * 360;
                    const y = 200 + Math.sin(angle) * 360;
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        className="text-sm font-semibold fill-current text-gray-700 dark:text-gray-300"
                      >
                        {skill.skill}
                      </text>
                    );
                  })}
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Skills Progress Bars */}
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{
                          x: [0, 10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Academic Profile Tab */}
        {activeTab === 'academic' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {academicData.map((category, idx) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={item.name} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-primary-600">
                          {item.value}{category.category === 'Education Level' ? '%' : ''}
                        </span>
                      </div>
                      
                      {category.category === 'Education Level' ? (
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`h-full ${item.color} rounded-full`}
                          />
                        </div>
                      ) : (
                        <div className="flex gap-1">
                          {Array.from({ length: item.value }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className={`w-8 h-8 ${item.color} rounded-lg`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                  {cert.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary-600 font-semibold">
                  {cert.year}
                </p>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full mt-4"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
