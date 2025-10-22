"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MysticDragon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const animateDragon = () => {
      setIsVisible(true);

      const animate = () => {
        const time = Date.now() * 0.001;

        // 3D path - figure-8 pattern in 3D space
        const radius = 400;
        const x = Math.sin(time * 0.3) * radius + window.innerWidth / 2;
        const y = Math.sin(time * 0.6) * 250 + window.innerHeight / 2;
        const z = Math.sin(time * 0.4) * 150;

        // Dynamic rotation
        const rotX = Math.sin(time * 0.5) * 15;
        const rotY = Math.cos(time * 0.3) * 20;
        const rotZ = Math.sin(time * 0.7) * 10;

        // Flip dragon based on movement direction
        const prevX = Math.sin((time - 0.016) * 0.3) * radius;
        const currentX = Math.sin(time * 0.3) * radius;
        setFlip(currentX < prevX);

        setPosition({ x, y, z });
        setRotation({ x: rotX, y: rotY, z: rotZ });

        requestAnimationFrame(animate);
      };

      animate();
    };

    animateDragon();
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: `
          perspective(1200px)
          translateZ(${position.z}px)
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
          rotateZ(${rotation.z}deg)
          scaleX(${flip ? -1 : 1})
        `,
        transformOrigin: "center center",
        filter: "drop-shadow(0 0 40px rgba(255, 140, 0, 0.8)) drop-shadow(0 0 25px rgba(255, 69, 0, 0.6))",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 0.6 + position.z / 300 : 0,
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 0.3 },
      }}
    >
      {isVisible && (
        <div className="relative w-[350px] h-[350px]">
          {/* Glowing aura layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-orange-500/50 via-orange-400/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-radial from-yellow-400/40 via-red-500/20 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1.6, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* 3D Dragon SVG */}
          <svg
            width="350"
            height="350"
            viewBox="0 0 350 350"
            className="w-full h-full relative z-10"
          >
            <defs>
              {/* Dragon body gradients - orange/brown theme */}
              <linearGradient id="dragonBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8C00" />
                <stop offset="30%" stopColor="#FF6347" />
                <stop offset="70%" stopColor="#D2691E" />
                <stop offset="100%" stopColor="#8B4513" />
              </linearGradient>

              <linearGradient id="dragonWing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB366" />
                <stop offset="40%" stopColor="#FF8C42" />
                <stop offset="80%" stopColor="#CD853F" />
                <stop offset="100%" stopColor="#8B5A3C" />
              </linearGradient>

              <linearGradient id="dragonBelly" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFE4B5" />
                <stop offset="50%" stopColor="#FFDAB9" />
                <stop offset="100%" stopColor="#DEB887" />
              </linearGradient>

              <radialGradient id="fireGlow">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FF8C00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background fire glow */}
            <motion.circle
              cx="175"
              cy="175"
              r="160"
              fill="url(#fireGlow)"
              opacity="0.4"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Wings - Western dragon style */}
            <motion.g
              animate={{
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "150px 180px" }}
            >
              {/* Left wing */}
              <motion.path
                d="M 150 180 Q 60 120, 50 200 Q 80 240, 120 220 Q 140 200, 150 190 Z"
                fill="url(#dragonWing)"
                stroke="#8B4513"
                strokeWidth="3"
                opacity="0.9"
                animate={{
                  d: [
                    "M 150 180 Q 60 120, 50 200 Q 80 240, 120 220 Q 140 200, 150 190 Z",
                    "M 150 180 Q 50 140, 45 210 Q 75 250, 120 225 Q 140 205, 150 190 Z",
                    "M 150 180 Q 60 120, 50 200 Q 80 240, 120 220 Q 140 200, 150 190 Z",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Wing membrane details */}
              <path
                d="M 150 185 Q 90 150, 70 210 M 145 192 Q 100 170, 85 220"
                stroke="#CD853F"
                strokeWidth="2"
                opacity="0.6"
                fill="none"
              />
            </motion.g>

            {/* Body - muscular Western dragon */}
            <motion.ellipse
              cx="180"
              cy="200"
              rx="45"
              ry="60"
              fill="url(#dragonBody)"
              stroke="#8B4513"
              strokeWidth="2"
              animate={{
                ry: [60, 63, 60],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Belly scales */}
            <ellipse cx="180" cy="210" rx="30" ry="45" fill="url(#dragonBelly)" opacity="0.8" />
            
            {/* Scales on body */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.ellipse
                key={i}
                cx={175 + i * 8}
                cy={170 + i * 12}
                rx="6"
                ry="8"
                fill="#CD853F"
                opacity="0.7"
                animate={{
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Neck */}
            <motion.path
              d="M 190 170 Q 210 140, 220 130"
              stroke="url(#dragonBody)"
              strokeWidth="40"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M 190 170 Q 210 140, 220 130",
                  "M 190 170 Q 215 145, 225 135",
                  "M 190 170 Q 210 140, 220 130",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Head - fierce dragon */}
            <motion.g
              animate={{
                y: [-4, 4, -4],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "235px 120px" }}
            >
              {/* Head shape */}
              <ellipse cx="235" cy="120" rx="28" ry="22" fill="url(#dragonBody)" />
              
              {/* Snout */}
              <path
                d="M 255 118 Q 270 120, 268 125 Q 270 120, 268 115 Z"
                fill="url(#dragonBody)"
                stroke="#8B4513"
                strokeWidth="2"
              />

              {/* Nostril */}
              <ellipse cx="262" cy="120" rx="2" ry="3" fill="#8B4513" />

              {/* Eye - fierce */}
              <motion.ellipse
                cx="245"
                cy="115"
                rx="5"
                ry="6"
                fill="#FFD700"
                stroke="#8B4513"
                strokeWidth="1"
                animate={{
                  opacity: [1, 0.4, 1],
                  scaleY: [1, 0.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              {/* Pupil */}
              <ellipse cx="245" cy="115" rx="2" ry="3" fill="#000" />

              {/* Horns */}
              <path
                d="M 225 105 Q 220 90, 218 85 Q 220 90, 222 85"
                stroke="#CD853F"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 235 102 Q 235 85, 236 78 Q 235 85, 238 80"
                stroke="#CD853F"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              {/* Spikes on head */}
              <path
                d="M 215 115 L 208 112 M 218 120 L 211 120"
                stroke="#8B4513"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Jaw/teeth hint */}
              <path
                d="M 258 125 L 260 128 M 262 125 L 264 128 M 265 122 L 267 125"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
              />
            </motion.g>

            {/* Front legs with muscles */}
            <motion.g
              animate={{
                y: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <path
                d="M 200 230 Q 200 260, 195 280"
                stroke="url(#dragonBody)"
                strokeWidth="22"
                fill="none"
                strokeLinecap="round"
              />
              {/* Claws */}
              <path
                d="M 192 280 L 185 290 M 195 280 L 193 292 M 198 280 L 200 292 M 201 280 L 206 290"
                stroke="#2F4F4F"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.g>

            <motion.g
              animate={{
                y: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M 165 240 Q 160 265, 155 285"
                stroke="url(#dragonBody)"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
              />
              {/* Claws */}
              <path
                d="M 152 285 L 145 295 M 155 285 L 153 297 M 158 285 L 160 297 M 161 285 L 166 295"
                stroke="#2F4F4F"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Tail - long and powerful */}
            <motion.path
              d="M 150 230 Q 120 260, 100 285 T 70 320"
              stroke="url(#dragonBody)"
              strokeWidth="25"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M 150 230 Q 120 260, 100 285 T 70 320",
                  "M 150 230 Q 115 265, 95 290 T 65 325",
                  "M 150 230 Q 125 255, 105 280 T 75 315",
                  "M 150 230 Q 120 260, 100 285 T 70 320",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Tail spikes */}
            <motion.g
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <path d="M 135 240 L 130 232" stroke="#CD853F" strokeWidth="5" strokeLinecap="round" />
              <path d="M 115 265 L 108 258" stroke="#CD853F" strokeWidth="5" strokeLinecap="round" />
              <path d="M 95 290 L 88 284" stroke="#CD853F" strokeWidth="5" strokeLinecap="round" />
              <path d="M 78 310 L 72 305" stroke="#CD853F" strokeWidth="5" strokeLinecap="round" />
            </motion.g>

            {/* Chest spikes */}
            <path d="M 175 165 L 172 155 M 185 162 L 185 152 M 195 165 L 198 155" 
              stroke="#CD853F" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* Fire particles around dragon */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => {
              const angle = (i / 15) * Math.PI * 2;
              const radius = 70;
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${50 + Math.cos(angle) * radius}%`,
                    top: `${50 + Math.sin(angle) * radius}%`,
                    background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF8C00' : '#FF6347',
                    boxShadow: '0 0 10px currentColor',
                  }}
                  animate={{
                    scale: [0, 2.5, 0],
                    opacity: [0, 1, 0],
                    x: [0, Math.cos(angle) * 25, 0],
                    y: [0, Math.sin(angle) * 25, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MysticDragon;
