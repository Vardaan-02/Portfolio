"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Rocket,
  Zap,
  Star,
  Play,
  Github,
  ExternalLink,
  ChevronDown,
  Monitor,
} from "lucide-react";
import { HeroSection } from "@/components/project/hero-section";
import StatsSection from "@/components/project/stats-section";
import ProjectOverview from "@/components/project/project-overview";
import TechnologyStack from "@/components/project/technology-stack";
import ChallengesAndSolutions from "@/components/project/challenges-and-solutions";
import KeyFeatures from "@/components/project/key-features";
import FutureImprovements from "@/components/project/future-imporvements";
import ThemeButton from "@/components/ui/theme-changer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-300">
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 opacity-5 dark:opacity-10"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        <ThemeButton />
        <HeroSection content={heroContent} />
        <StatsSection
          stats={stats}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <ProjectOverview content={ProjectOverviewContent} />
        <TechnologyStack
          technologies={technologies}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <ChallengesAndSolutions
          challenges={challenges}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <KeyFeatures
          features={features}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
        <FutureImprovements
          improvements={improvements}
          itemVariants={itemVariants}
          containerVariants={containerVariants}
        />
      </div>
    </div>
  );
}

const heroContent = {
  badge: {
    label: "OpenGL Classic",
    icon: <Star className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Presenting",
    highlight: "Brick Breaker",
  },
  description: {
    main: "A nostalgic C++ OpenGL arcade game where precision meets speed.",
    sub: "Smash bricks, beat levels, and relive the classic gaming era.",
  },
  buttons: [
    {
      label: "Play Demo",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/brickbreaker-demo",
    },
    {
      label: "View Code",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/your-brick-breaker-repo",
    },
  ],
  scrollIndicator: {
    label: "Discover the Game Mechanics",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "5", label: "Levels of Gameplay", icon: Rocket },
  { number: "1000+", label: "Lines of C++ Code", icon: Code },
  { number: "60 FPS", label: "Smooth Rendering", icon: Zap },
  { number: "OpenGL", label: "Graphics Engine", icon: Monitor },
];

const ProjectOverviewContent = {
  badgeText: "Project Overview",
  title: { text: "Reliving", highlight: "Classic Arcade Gaming" },
  description: [
    "Brick Breaker is a retro-inspired arcade game built using modern OpenGL with C++.",
    "Designed for performance, simplicity, and that unbeatable old-school vibe.",
  ],
  technologies: ["C++", "OpenGL", "GLUT", "Object-Oriented Programming"],
  icon: Rocket,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "C++",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "OpenGL",
    icon: <Monitor className="h-6 w-6" />,
    color: "from-green-700 to-green-500 dark:from-green-600 dark:to-green-400",
  },
  {
    name: "GLUT",
    icon: <Zap className="h-6 w-6" />,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    name: "OOP",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
];

const challenges = [
  {
    challenge: "Frame-Rate Independent Physics",
    solution:
      "Used delta time to ensure consistent paddle and ball movement across systems.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Collision Accuracy",
    solution:
      "Implemented precise AABB collision detection for reliable brick and wall interaction.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    challenge: "Dynamic Level Design",
    solution:
      "Used grid-based level loaders with custom difficulty ramps per level.",
    color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
  },
];

const features = [
  {
    title: "Real-Time Gameplay",
    description: "Smooth input handling and rendering at 60 FPS.",
    icon: Zap,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
  {
    title: "Multiple Levels",
    description: "Progress through increasingly challenging stages.",
    icon: Rocket,
    color:
      "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",
  },
  {
    title: "Score Tracking",
    description: "Keep track of high scores and compete with friends.",
    icon: Cpu,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Minimal Dependencies",
    description: "Lightweight with GLUT only — no bloat.",
    icon: Code,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
];

const improvements = [
  {
    title: "Power-Ups",
    description: "Add speed boosts, multi-ball, and paddle size modifiers.",
    icon: Zap,
    timeline: "Q3 2024",
  },
  {
    title: "Level Editor",
    description: "Allow users to create and share their own custom levels.",
    icon: Cpu,
    timeline: "Q4 2024",
  },
  {
    title: "Cross-Platform Build",
    description: "Compile for Linux, Windows, and Mac natively.",
    icon: Rocket,
    timeline: "Q1 2025",
  },
];
