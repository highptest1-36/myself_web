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
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-2xl p-12 shadow-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">Skills Overview</h3>
              <div className="relative w-full max-w-3xl mx-auto" style={{ paddingBottom: '100%' }}>
                <svg viewBox="0 0 640 680" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="strongGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <linearGradient id="polyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    </linearGradient>
                    <radialGradient id="centerGradient">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </radialGradient>
                  </defs>
                  
                  {/* Background concentric circles */}
                  {[80, 140, 200, 260].map((r, i) => (
                    <motion.circle
                      key={i}
                      cx="320"
                      cy="320"
                      r={r}
                      fill="none"
                      stroke="rgba(96, 165, 250, 0.12)"
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        delay: i * 0.1, 
                        duration: 0.8,
                        rotate: {
                          duration: 80 + i * 10,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    />
                  ))}
                  
                  {/* Axis lines from center */}
                  {radarSkills.map((skill, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const x = 320 + Math.cos(angle) * 260;
                    const y = 320 + Math.sin(angle) * 260;
                    return (
                      <motion.line
                        key={i}
                        x1="320"
                        y1="320"
                        x2={x}
                        y2={y}
                        stroke="rgba(96, 165, 250, 0.25)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: i * 0.08, duration: 0.6 }}
                      />
                    );
                  })}
                  
                  {/* Skill polygon - filled area */}
                  <motion.polygon
                    points={radarSkills.map((skill, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const r = (skill.value / 100) * 260;
                      const x = 320 + Math.cos(angle) * r;
                      const y = 320 + Math.sin(angle) * r;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="url(#polyGradient)"
                    stroke="none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1
                    }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  />
                  
                  {/* Skill polygon - border with glow */}
                  <motion.polygon
                    points={radarSkills.map((skill, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const r = (skill.value / 100) * 260;
                      const x = 320 + Math.cos(angle) * r;
                      const y = 320 + Math.sin(angle) * r;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    filter="url(#strongGlow)"
                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0 
                    }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  />
                  
                  {/* Skill points with labels */}
                  {radarSkills.map((skill, i) => {
                    const angle = (i * 60 - 90) * (Math.PI / 180);
                    const r = (skill.value / 100) * 260;
                    const x = 320 + Math.cos(angle) * r;
                    const y = 320 + Math.sin(angle) * r;
                    
                    // Label position (outside the chart) - adjusted for better spacing
                    const labelR = 310;
                    const labelX = 320 + Math.cos(angle) * labelR;
                    const labelY = 320 + Math.sin(angle) * labelR;
                    
                    // Adjust text anchor based on position
                    let textAnchor = "middle";
                    let dx = 0;
                    if (labelX < 300) textAnchor = "end";
                    if (labelX > 340) textAnchor = "start";
                    if (labelX < 300) dx = -10;
                    if (labelX > 340) dx = 10;
                    
                    return (
                      <g key={i}>
                        {/* Outer pulse circle */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="18"
                          fill="#3b82f6"
                          opacity="0.2"
                          initial={{ scale: 0 }}
                          animate={{ 
                            scale: [1, 1.8, 1],
                            opacity: [0.2, 0, 0.2]
                          }}
                          transition={{ 
                            delay: i * 0.12 + 1,
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        {/* Main point circle */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="11"
                          fill="#60a5fa"
                          filter="url(#glow)"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.12 + 1, duration: 0.4 }}
                        />
                        {/* Inner white circle */}
                        <motion.circle
                          cx={x}
                          cy={y}
                          r="6"
                          fill="#ffffff"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.12 + 1.1, duration: 0.3 }}
                        />
                        
                        {/* Background rectangle for better text visibility */}
                        <motion.rect
                          x={labelX + dx - 45}
                          y={labelY - 20}
                          width="90"
                          height="38"
                          rx="6"
                          fill="rgba(15, 23, 42, 0.85)"
                          stroke="rgba(96, 165, 250, 0.3)"
                          strokeWidth="1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.12 + 1.2, duration: 0.4 }}
                        />
                        
                        {/* Skill labels */}
                        <motion.text
                          x={labelX + dx}
                          y={labelY - 5}
                          textAnchor="middle"
                          className="text-xs font-bold fill-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.12 + 1.3, duration: 0.5 }}
                        >
                          {skill.skill}
                        </motion.text>
                        <motion.text
                          x={labelX + dx}
                          y={labelY + 10}
                          textAnchor="middle"
                          className="text-sm font-extrabold fill-cyan-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.12 + 1.4, duration: 0.5 }}
                        >
                          {skill.value}%
                        </motion.text>
                      </g>
                    );
                  })}
                  
                  {/* Center circle decoration */}
                  <motion.circle
                    cx="320"
                    cy="320"
                    r="28"
                    fill="url(#centerGradient)"
                    filter="url(#strongGlow)"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <circle
                    cx="320"
                    cy="320"
                    r="14"
                    fill="#ffffff"
                  />
                  <circle
                    cx="320"
                    cy="320"
                    r="6"
                    fill="#60a5fa"
                  />
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
