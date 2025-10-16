"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Zap,
  Gamepad,
  Gamepad2,
} from "lucide-react";

import Game_LateFees from "./assets/games/late_fees.png";
import Game_MyPrettyAlien from "./assets/games/my_pretty_alien.png";
import Game_OpenAssassin from "./assets/games/open_assassin.png";
import Game_PlanetEscape from "./assets/games/planet_escape.png";
import Game_SoulMagician from "./assets/games/soul_magician.png";
import Game_SubjectZero from "./assets/games/subject_zero.png";

const AnimatedBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-10 animate-float"
          style={{
            width: `${120 + i * 30}px`,
            height: `${120 + i * 30}px`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            background: `radial-gradient(circle, ${
              ["#ff69b4", "#ff1493", "#c71585"][i % 3]
            }40, transparent)`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${20 + i * 5}s`,
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

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
    title: "Late Fees",
    description: "Late Fees.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],
    image: Game_LateFees.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "UE5",
    icon: <Gamepad className="w-6 h-6" />,
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "My Pretty Alien",
    description: "My Pretty Alien.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],

    image: Game_MyPrettyAlien.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: "from-pink-600 via-rose-500 to-orange-400",
  },
  {
    id: 3,
    title: "Open Assassin",
    description: "Open Assassin.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],
    image: Game_OpenAssassin.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Gamepad className="w-6 h-6" />,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    id: 4,
    title: "Planet Escape",
    description: "Planet Escape.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],
    image: Game_PlanetEscape.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: "from-pink-400 via-purple-400 to-blue-500",
  },
  {
    id: 5,
    title: "Soul Magician",
    description: "Soul Magician.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],
    image: Game_SoulMagician.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-pink-600 via-violet-500 to-purple-600",
  },
  {
    id: 6,
    title: "Subject Zero",
    description: "Subject Zero.",
    technologies: ["Unreal Engine", "Unreal Engine 5", "Epic Games"],
    image: Game_SubjectZero.src,
    demoUrl: "#",
    githubUrl: "#",
    category: "Gaming",
    icon: <Gamepad className="w-6 h-6" />,
    gradient: "from-pink-500 via-pink-600 to-red-500",
  },
];

const ProjectCard = React.memo<{
  project: Project;
  index: number;
  activeIndex: number;
  totalProjects: number;
  onClick: () => void;
}>(({ project, index, activeIndex, totalProjects, onClick }) => {
  const position = useMemo(() => {
    const angle = ((index - activeIndex) * 360) / totalProjects;
    const radius = 300;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.abs(Math.sin((angle * Math.PI) / 180)) * -30;

    return { x, y, z, rotateY: -angle };
  }, [index, activeIndex, totalProjects]);

  const isActive = index === activeIndex;
  const distance = Math.abs(index - activeIndex);

  const cardStyle = useMemo(
    () => ({
      opacity: distance === 0 ? 1 : distance === 1 ? 0.7 : 0.4,
      scale: distance === 0 ? 1 : distance === 1 ? 0.85 : 0.7,
    }),
    [distance]
  );

  return (
    <motion.div
      className="absolute cursor-pointer"
      animate={{
        x: position.x,
        y: position.y,
        z: position.z,
        rotateY: position.rotateY,
        ...cardStyle,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 25,
        duration: 0.6,
      }}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`
        relative w-72 h-80 rounded-xl overflow-hidden
        ${
          isActive
            ? "shadow-xl shadow-pink-500/20"
            : "shadow-md shadow-black/10"
        }
        transition-shadow duration-300
        bg-gradient-to-br ${project.gradient}
        border border-pink-300/10
      `}
      >
        <div className="relative z-10 h-full bg-black/30 flex flex-col">
          <div className="relative h-40 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute top-3 left-3 flex items-center space-x-2 bg-pink-500/80 rounded-full px-2 py-1">
              {project.icon}
              <span className="text-white text-xs font-medium">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex-1 p-4 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
              {project.title}
            </h3>

            <p className="text-pink-100 text-sm mb-3 line-clamp-2 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-pink-500/20 rounded text-xs text-pink-200 border border-pink-400/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-pink-500/20 rounded text-xs text-pink-200 border border-pink-400/20">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-pink-500/70 hover:bg-pink-500/90 text-white px-3 py-2 rounded text-sm transition-colors duration-200 flex items-center justify-center space-x-1">
                <ExternalLink className="w-3 h-3" />
                <span>Demo</span>
              </button>

              <button className="bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded text-sm transition-colors duration-200 flex items-center justify-center">
                <Github className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const FeaturedProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const nextProject = useCallback(() => {
    setIsAutoRotating(false);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAutoRotating(true), 8000);
  }, []);

  const prevProject = useCallback(() => {
    setIsAutoRotating(false);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAutoRotating(true), 8000);
  }, []);

  const selectProject = useCallback((index: number) => {
    setIsAutoRotating(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoRotating(true), 8000);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-pink-200 max-w-2xl mx-auto">
            Explore cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              activeIndex={activeIndex}
              totalProjects={projects.length}
              onClick={() => selectProject(index)}
            />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-6 mt-8">
          <button
            onClick={prevProject}
            className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-full text-pink-300 hover:text-white transition-all duration-200 border border-pink-400/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => selectProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-pink-500 shadow-sm shadow-pink-500/50"
                    : "bg-pink-300/20 hover:bg-pink-300/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-full text-pink-300 hover:text-white transition-all duration-200 border border-pink-400/20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
