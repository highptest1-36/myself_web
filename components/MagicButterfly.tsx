"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MagicButterfly = () => {
  const [butterflies, setButterflies] = useState<Array<{
    id: number;
    x: number;
    y: number;
    rotation: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    // Create 3 cute butterflies
    const initButterflies = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: 0,
      scale: 1,
    }));
    setButterflies(initButterflies);

    const animateButterflies = () => {
      const time = Date.now() * 0.001;

      setButterflies((prev) =>
        prev.map((butterfly, index) => {
          const offset = index * 2;
          const radius = 250 + index * 50;
          
          // Each butterfly has its own wandering path
          const x = Math.sin(time * 0.4 + offset) * radius + window.innerWidth / 2;
          const y = Math.sin(time * 0.6 + offset) * 150 + Math.cos(time * 0.3 + offset) * 100 + window.innerHeight / 2;
          const rotation = Math.sin(time * 2 + offset) * 15;
          const scale = 0.8 + Math.sin(time * 3 + offset) * 0.2;

          return { ...butterfly, x, y, rotation, scale };
        })
      );

      requestAnimationFrame(animateButterflies);
    };

    animateButterflies();
  }, []);

  return (
    <>
      {butterflies.map((butterfly, index) => (
        <motion.div
          key={butterfly.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: butterfly.x,
            top: butterfly.y,
            transform: `rotate(${butterfly.rotation}deg) scale(${butterfly.scale})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <div className="relative w-20 h-20">
            {/* Glowing aura */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: index === 0 ? 
                  'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)' :
                  index === 1 ?
                  'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)' :
                  'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Butterfly SVG */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="relative z-10"
            >
              <defs>
                <linearGradient id={`wingGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"} />
                  <stop offset="50%" stopColor={index === 0 ? "#A855F7" : index === 1 ? "#60A5FA" : "#F472B6"} />
                  <stop offset="100%" stopColor={index === 0 ? "#C084FC" : index === 1 ? "#93C5FD" : "#FBCFE8"} />
                </linearGradient>
                
                <filter id={`glow${index}`}>
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Left upper wing */}
              <motion.path
                d="M 40 40 Q 15 20, 10 35 Q 5 45, 15 50 Q 25 52, 40 45 Z"
                fill={`url(#wingGradient${index})`}
                stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                strokeWidth="1"
                opacity="0.9"
                filter={`url(#glow${index})`}
                animate={{
                  d: [
                    "M 40 40 Q 15 20, 10 35 Q 5 45, 15 50 Q 25 52, 40 45 Z",
                    "M 40 40 Q 12 18, 8 33 Q 3 43, 13 48 Q 23 50, 40 45 Z",
                    "M 40 40 Q 15 20, 10 35 Q 5 45, 15 50 Q 25 52, 40 45 Z",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Right upper wing */}
              <motion.path
                d="M 40 40 Q 65 20, 70 35 Q 75 45, 65 50 Q 55 52, 40 45 Z"
                fill={`url(#wingGradient${index})`}
                stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                strokeWidth="1"
                opacity="0.9"
                filter={`url(#glow${index})`}
                animate={{
                  d: [
                    "M 40 40 Q 65 20, 70 35 Q 75 45, 65 50 Q 55 52, 40 45 Z",
                    "M 40 40 Q 68 18, 72 33 Q 77 43, 67 48 Q 57 50, 40 45 Z",
                    "M 40 40 Q 65 20, 70 35 Q 75 45, 65 50 Q 55 52, 40 45 Z",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Left lower wing */}
              <motion.path
                d="M 40 45 Q 20 55, 18 65 Q 20 72, 28 70 Q 35 68, 40 55 Z"
                fill={`url(#wingGradient${index})`}
                stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                strokeWidth="1"
                opacity="0.85"
                filter={`url(#glow${index})`}
                animate={{
                  d: [
                    "M 40 45 Q 20 55, 18 65 Q 20 72, 28 70 Q 35 68, 40 55 Z",
                    "M 40 45 Q 18 53, 16 63 Q 18 70, 26 68 Q 33 66, 40 55 Z",
                    "M 40 45 Q 20 55, 18 65 Q 20 72, 28 70 Q 35 68, 40 55 Z",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />

              {/* Right lower wing */}
              <motion.path
                d="M 40 45 Q 60 55, 62 65 Q 60 72, 52 70 Q 45 68, 40 55 Z"
                fill={`url(#wingGradient${index})`}
                stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                strokeWidth="1"
                opacity="0.85"
                filter={`url(#glow${index})`}
                animate={{
                  d: [
                    "M 40 45 Q 60 55, 62 65 Q 60 72, 52 70 Q 45 68, 40 55 Z",
                    "M 40 45 Q 62 53, 64 63 Q 62 70, 54 68 Q 47 66, 40 55 Z",
                    "M 40 45 Q 60 55, 62 65 Q 60 72, 52 70 Q 45 68, 40 55 Z",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />

              {/* Body */}
              <ellipse
                cx="40"
                cy="45"
                rx="3"
                ry="12"
                fill={index === 0 ? "#7C3AED" : index === 1 ? "#2563EB" : "#DB2777"}
              />

              {/* Head */}
              <circle
                cx="40"
                cy="35"
                r="4"
                fill={index === 0 ? "#7C3AED" : index === 1 ? "#2563EB" : "#DB2777"}
              />

              {/* Cute eyes */}
              <circle cx="38" cy="34" r="1" fill="#FFF" />
              <circle cx="42" cy="34" r="1" fill="#FFF" />

              {/* Antennae */}
              <motion.g
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "40px 35px" }}
              >
                <path
                  d="M 38 33 Q 35 25, 33 22"
                  stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="33" cy="22" r="1.5" fill={index === 0 ? "#A855F7" : index === 1 ? "#60A5FA" : "#F472B6"} />
                
                <path
                  d="M 42 33 Q 45 25, 47 22"
                  stroke={index === 0 ? "#9333EA" : index === 1 ? "#3B82F6" : "#EC4899"}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="47" cy="22" r="1.5" fill={index === 0 ? "#A855F7" : index === 1 ? "#60A5FA" : "#F472B6"} />
              </motion.g>

              {/* Wing patterns - decorative spots */}
              <circle cx="25" cy="35" r="3" fill="#FFF" opacity="0.6" />
              <circle cx="55" cy="35" r="3" fill="#FFF" opacity="0.6" />
              <circle cx="22" cy="45" r="2" fill="#FFF" opacity="0.5" />
              <circle cx="58" cy="45" r="2" fill="#FFF" opacity="0.5" />
              <circle cx="24" cy="60" r="2.5" fill="#FFF" opacity="0.4" />
              <circle cx="56" cy="60" r="2.5" fill="#FFF" opacity="0.4" />
            </svg>

            {/* Sparkle particles trailing */}
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: `${50 + Math.cos(angle) * 35}%`,
                    top: `${50 + Math.sin(angle) * 35}%`,
                    background: index === 0 ? '#A855F7' : index === 1 ? '#60A5FA' : '#F472B6',
                    boxShadow: '0 0 6px currentColor',
                  }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MagicButterfly;
