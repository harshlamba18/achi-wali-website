"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Box, Sphere } from "@react-three/drei";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Zap,
  Code,
  Database,
  Smartphone,
  Globe,
  Cpu,
} from "lucide-react";
import * as THREE from "three";

function FloatingSphere({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={0.3}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  );
}

function AnimatedBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <FloatingSphere position={[-4, 2, -5]} color="#ff69b4" speed={0.8} />
      <FloatingSphere position={[4, -2, -3]} color="#ff1493" speed={1.2} />
      <FloatingSphere position={[-2, -3, -7]} color="#c71585" speed={0.6} />
      <FloatingSphere position={[3, 3, -4]} color="#ff69b4" speed={1.0} />
      <FloatingSphere position={[0, 4, -6]} color="#ff1493" speed={0.9} />
      <FloatingSphere position={[-5, 0, -8]} color="#c71585" speed={0.7} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Advanced machine learning dashboard with real-time data visualization and predictive analytics capabilities.",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Blockchain DeFi Platform",
    description:
      "Decentralized finance platform with smart contracts, yield farming, and NFT marketplace integration.",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "Blockchain",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-pink-600 via-rose-500 to-orange-400",
  },
  {
    id: 3,
    title: "Mobile AR Experience",
    description:
      "Immersive augmented reality mobile application with 3D object recognition and spatial mapping.",
    technologies: ["Unity", "ARCore", "C#", "Firebase", "Blender"],
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "Mobile/AR",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    id: 4,
    title: "Cloud-Native Microservices",
    description:
      "Scalable microservices architecture with Kubernetes orchestration and event-driven communication.",
    technologies: ["Docker", "Kubernetes", "Go", "gRPC", "Redis"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "DevOps",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-pink-400 via-purple-400 to-blue-500",
  },
  {
    id: 5,
    title: "Real-time Gaming Platform",
    description:
      "Multiplayer gaming platform with WebSocket connections, matchmaking, and tournament systems.",
    technologies: ["Node.js", "Socket.io", "React", "MongoDB", "WebGL"],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-pink-600 via-violet-500 to-purple-600",
  },
  {
    id: 6,
    title: "Full-Stack E-commerce",
    description:
      "Modern e-commerce platform with payment integration, inventory management, and admin dashboard.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    category: "E-commerce",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-pink-500 via-pink-600 to-red-500",
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  activeIndex: number;
  totalProjects: number;
}> = ({ project, index, activeIndex, totalProjects }) => {
  const getCardPosition = () => {
    const angle = ((index - activeIndex) * 360) / totalProjects;
    const radius = 350;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.abs(Math.sin((angle * Math.PI) / 180)) * -50;

    return { x, y, z, rotateY: -angle };
  };

  const position = getCardPosition();
  const isActive = index === activeIndex;
  const distance = Math.abs(index - activeIndex);
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.4;
  const scale = distance === 0 ? 1 : distance === 1 ? 0.8 : 0.6;

  return (
    <motion.div
      className="absolute"
      animate={{
        x: position.x,
        y: position.y,
        z: position.z,
        rotateY: position.rotateY,
        opacity,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        duration: 0.8,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className={`
        relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer
        ${
          isActive
            ? "shadow-2xl shadow-pink-500/30"
            : "shadow-lg shadow-black/20"
        }
        transition-all duration-500 hover:shadow-2xl hover:shadow-pink-400/40
        bg-gradient-to-br ${project.gradient}
        border border-pink-300/20 backdrop-blur-sm
      `}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-600/20 blur-sm"></div>

        <div className="relative z-10 h-full bg-black/40 backdrop-blur-sm flex flex-col">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-pink-500/90 backdrop-blur-sm rounded-full px-3 py-1">
              {project.icon}
              <span className="text-white text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {project.title}
            </h3>

            <p className="text-pink-100 text-sm mb-4 line-clamp-3 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-pink-500/20 backdrop-blur-sm rounded-md text-xs text-pink-200 border border-pink-400/30"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-pink-500/20 backdrop-blur-sm rounded-md text-xs text-pink-200 border border-pink-400/30">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-pink-500/80 hover:bg-pink-500 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Github className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pink-400 rounded-full"
                animate={{
                  x: [0, Math.random() * 300, 0],
                  y: [0, Math.random() * 400, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FeaturedProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const controls = useAnimation();

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const nextProject = () => {
    setIsAutoRotating(false);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const prevProject = () => {
    setIsAutoRotating(false);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0],
              scale: [1, Math.random() * 0.5 + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto leading-relaxed">
            Explore cutting-edge technologies and innovative solutions crafted
            with passion and precision
          </p>
        </motion.div>

        <div
          className="relative h-[600px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeIndex={activeIndex}
              totalProjects={projects.length}
            />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="p-4 bg-pink-500/20 hover:bg-pink-500/40 backdrop-blur-sm rounded-full text-pink-300 hover:text-white transition-all duration-200 border border-pink-400/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex space-x-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoRotating(false);
                  setActiveIndex(index);
                  setTimeout(() => setIsAutoRotating(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-pink-500 shadow-lg shadow-pink-500/50"
                    : "bg-pink-300/30 hover:bg-pink-300/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="p-4 bg-pink-500/20 hover:bg-pink-500/40 backdrop-blur-sm rounded-full text-pink-300 hover:text-white transition-all duration-200 border border-pink-400/30"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isAutoRotating
                ? "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoRotating
              ? "⏸️ Pause Auto-Rotation"
              : "▶️ Start Auto-Rotation"}
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
