"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const MysticDragon = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const animateDragon = async () => {
      while (true) {
        // Random start position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        // Random end position
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;

        // Calculate duration based on distance
        const distance = Math.sqrt(
          Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
        );
        const duration = (distance / 200) + 2; // Slower, more majestic

        // Show dragon
        setIsVisible(true);

        // Move dragon
        await controls.start({
          x: [startX, endX],
          y: [startY, endY],
          opacity: [0, 1, 1, 0.7, 0],
          scale: [0.5, 1, 1, 0.8, 0.5],
          rotate: [0, 360],
          transition: {
            duration: duration,
            ease: "easeInOut",
          },
        });

        // Hide and wait
        setIsVisible(false);
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 3000));
      }
    };

    animateDragon();
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className="fixed pointer-events-none z-50"
      style={{
        filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))",
      }}
    >
      {isVisible && (
        <div className="relative">
          {/* Dragon SVG with electric effect */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            {/* Electric aura */}
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="url(#electricGradient)"
              opacity="0.3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dragon body - serpentine shape */}
            <motion.path
              d="M 30 60 Q 40 40, 60 45 T 90 50 Q 95 55, 90 65 T 60 75 Q 40 80, 30 60 Z"
              fill="url(#dragonGradient)"
              stroke="url(#electricStroke)"
              strokeWidth="2"
              animate={{
                d: [
                  "M 30 60 Q 40 40, 60 45 T 90 50 Q 95 55, 90 65 T 60 75 Q 40 80, 30 60 Z",
                  "M 30 60 Q 40 45, 60 40 T 90 55 Q 95 60, 90 70 T 60 80 Q 40 75, 30 60 Z",
                  "M 30 60 Q 40 40, 60 45 T 90 50 Q 95 55, 90 65 T 60 75 Q 40 80, 30 60 Z",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dragon head */}
            <motion.circle
              cx="90"
              cy="50"
              r="15"
              fill="url(#headGradient)"
              stroke="url(#electricStroke)"
              strokeWidth="2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            {/* Dragon eye */}
            <motion.circle
              cx="95"
              cy="48"
              r="3"
              fill="#FFD700"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Horns */}
            <path
              d="M 88 40 L 85 32 M 92 38 L 95 30"
              stroke="#FFD700"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Electric sparks */}
            <motion.g
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <line x1="25" y1="55" x2="20" y2="50" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="28" y1="65" x2="23" y2="70" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="95" y1="65" x2="100" y2="70" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="92" y1="45" x2="97" y2="40" stroke="#8B5CF6" strokeWidth="2" />
            </motion.g>

            {/* Tail spikes */}
            <path
              d="M 32 58 L 28 52 M 34 62 L 30 68"
              stroke="#C084FC"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              <linearGradient id="electricStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>

              <radialGradient id="electricGradient">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Electric particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                style={{
                  left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                  top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Mystic trail */}
          <motion.div
            className="absolute -inset-10 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default MysticDragon;
