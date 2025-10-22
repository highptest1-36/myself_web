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
          {/* Asian Dragon SVG with electric effect */}
          <svg
            width="200"
            height="100"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Electric aura */}
            <motion.ellipse
              cx="100"
              cy="50"
              rx="90"
              ry="40"
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

            {/* Dragon serpentine body - long and flowing */}
            <motion.path
              d="M 10 50 Q 30 30, 50 40 T 90 45 Q 120 42, 140 48 T 180 52"
              stroke="url(#dragonGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M 10 50 Q 30 30, 50 40 T 90 45 Q 120 42, 140 48 T 180 52",
                  "M 10 50 Q 30 45, 50 35 T 90 48 Q 120 50, 140 42 T 180 52",
                  "M 10 50 Q 30 35, 50 45 T 90 42 Q 120 45, 140 52 T 180 52",
                  "M 10 50 Q 30 30, 50 40 T 90 45 Q 120 42, 140 48 T 180 52",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dragon scales along body */}
            <motion.g
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
                <ellipse
                  key={i}
                  cx={x}
                  cy={45 + Math.sin(i) * 5}
                  rx="4"
                  ry="6"
                  fill="url(#scaleGradient)"
                  opacity="0.7"
                />
              ))}
            </motion.g>

            {/* Dragon head - elongated Asian style */}
            <motion.g
              animate={{
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Head shape */}
              <ellipse
                cx="185"
                cy="52"
                rx="12"
                ry="10"
                fill="url(#headGradient)"
                stroke="url(#electricStroke)"
                strokeWidth="1.5"
              />
              
              {/* Snout */}
              <path
                d="M 193 52 Q 200 52, 198 54 Q 200 52, 198 50 Z"
                fill="url(#headGradient)"
                stroke="url(#electricStroke)"
                strokeWidth="1"
              />

              {/* Dragon eyes - fierce */}
              <motion.ellipse
                cx="190"
                cy="50"
                rx="2.5"
                ry="3"
                fill="#FFD700"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Horns - branching antlers */}
              <path
                d="M 182 45 L 180 38 L 178 40 M 180 38 L 182 35"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 186 44 L 185 36 L 183 38 M 185 36 L 187 33"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Whiskers/Barbels */}
              <motion.g
                animate={{
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                style={{ transformOrigin: "195px 55px" }}
              >
                <path
                  d="M 195 55 Q 200 58, 205 60"
                  stroke="#C084FC"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 195 57 Q 200 62, 204 65"
                  stroke="#C084FC"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.g>

              {/* Nose whiskers */}
              <path
                d="M 198 50 L 205 48 M 198 54 L 205 56"
                stroke="#A78BFA"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Front legs with claws */}
            <motion.g
              animate={{
                y: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <path
                d="M 120 45 L 120 58 M 118 58 L 115 62 M 120 58 L 120 62 M 122 58 L 125 62"
                stroke="url(#legGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Back legs with claws */}
            <motion.g
              animate={{
                y: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M 60 42 L 60 55 M 58 55 L 55 59 M 60 55 L 60 59 M 62 55 L 65 59"
                stroke="url(#legGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Tail with flowing fins */}
            <motion.path
              d="M 10 50 Q 5 45, 3 50 Q 5 55, 10 50 Z"
              fill="url(#tailGradient)"
              stroke="url(#electricStroke)"
              strokeWidth="1"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{ transformOrigin: "10px 50px" }}
            />

            {/* Spinal fins along the back */}
            <motion.g
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {[25, 45, 65, 85, 105, 125, 145, 165].map((x, i) => (
                <path
                  key={i}
                  d={`M ${x} ${38 + Math.sin(i * 0.5) * 3} L ${x} ${32 + Math.sin(i * 0.5) * 3}`}
                  stroke="url(#finGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ))}
            </motion.g>

            {/* Electric sparks around dragon */}
            <motion.g
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <circle cx="30" cy="25" r="2" fill="#8B5CF6" />
              <circle cx="70" cy="30" r="2" fill="#A78BFA" />
              <circle cx="110" cy="28" r="2" fill="#8B5CF6" />
              <circle cx="150" cy="32" r="2" fill="#A78BFA" />
              <circle cx="190" cy="38" r="2" fill="#FFD700" />
            </motion.g>

            {/* Pearl/orb in dragon's grasp */}
            <motion.circle
              cx="195"
              cy="65"
              r="5"
              fill="url(#pearlGradient)"
              stroke="#FFD700"
              strokeWidth="1"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="30%" stopColor="#A78BFA" />
                <stop offset="60%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>

              <linearGradient id="finGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
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

              <radialGradient id="pearlGradient">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
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
