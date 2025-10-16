import {
  Zap,
  Gamepad,
  Gamepad2
} from "lucide-react";

import Game_LateFees from "./assets/games/late_fees.png";
import Game_MyPrettyAlien from "./assets/games/my_pretty_alien.png";
import Game_OpenAssassin from "./assets/games/open_assassin.png";
import Game_PlanetEscape from "./assets/games/planet_escape.png";
import Game_SoulMagician from "./assets/games/soul_magician.png";
import Game_SubjectZero from "./assets/games/subject_zero.png";

export interface Project {
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

export default projects;
