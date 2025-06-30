"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Zap,
  Star,
  Users,
  Play,
  Github,
  ExternalLink,
  ChevronDown,
  Component,
  Settings,
  Puzzle,
  LibraryBig,
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
    label: "Design Systems",
    icon: <LibraryBig className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "V-UI",
  },
  description: {
    main: "A blazing-fast, themeable, accessible UI library for modern web apps.",
    sub: "20+ beautifully crafted components, optimized for Next.js and Tailwind workflows.",
  },
  buttons: [
    {
      label: "Explore Components",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "https://ui.vardaan02.in/",
    },
    {
      label: "GitHub Repo",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/v-ui",
    },
  ],
  scrollIndicator: {
    label: "Discover how it works",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "20+", label: "UI Components", icon: Component },
  { number: "100% TS", label: "Strictly Typed", icon: Cpu },
  { number: "4", label: "Core Frameworks", icon: Code },
  { number: "∞", label: "Themeable Variants", icon: Puzzle },
];

const ProjectOverviewContent = {
  badgeText: "What is V-UI?",
  title: { text: "Reusable, Accessible", highlight: "Frontend Components" },
  description: [
    "V-UI is a component library designed for developers building products with Next.js, Tailwind CSS, and Framer Motion.",
    "It follows atomic design principles and ships with dark mode, animation support, and ShadCN integration out of the box.",
  ],
  technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
  icon: Settings,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "Next.js",
    icon: <Code className="h-6 w-6" />,
    color: "from-black to-gray-800 dark:from-gray-900 dark:to-gray-700",
  },
  {
    name: "Tailwind CSS",
    icon: <Star className="h-6 w-6" />,
    color: "from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400",
  },
  {
    name: "TypeScript",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "Framer Motion",
    icon: <Zap className="h-6 w-6" />,
    color: "from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400",
  },
  {
    name: "ShadCN UI",
    icon: <Component className="h-6 w-6" />,
    color: "from-gray-700 to-gray-600 dark:from-gray-500 dark:to-gray-400",
  },
];

const challenges = [
  {
    challenge: "Consistency Across Projects",
    solution:
      "Built a centralized design system with reusable components to ensure brand and UX consistency.",
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    challenge: "Developer Velocity",
    solution:
      "Created accessible, customizable UI elements to reduce development time by 30%.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    challenge: "Dark Mode + Accessibility",
    solution:
      "Integrated Tailwind theming and ensured WCAG compliance using Headless UI & ARIA standards.",
    color:
      "from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",
  },
];

const features = [
  {
    title: "Component Rich",
    description: "Includes buttons, cards, modals, forms, inputs, and more.",
    icon: Component,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Dark Mode Native",
    description: "All components support seamless dark mode toggle.",
    icon: Star,
    color: "from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300",
  },
  {
    title: "Framer Motion Animations",
    description: "Pre-wired motion variants for transitions and entrances.",
    icon: Zap,
    color:
      "from-pink-600 to-fuchsia-600 dark:from-pink-400 dark:to-fuchsia-400",
  },
  {
    title: "Tailwind First",
    description: "Each component uses utility classes for maximum flexibility.",
    icon: Code,
    color: "from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400",
  },
];

const improvements = [
  {
    title: "Component Playground",
    description: "Visual editor to tweak props and export code.",
    icon: Puzzle,
    timeline: "Q3 2024",
  },
  {
    title: "Themes Support",
    description: "Add multiple preset themes with toggles.",
    icon: Settings,
    timeline: "Q4 2024",
  },
  {
    title: "ARIA Audit Tool",
    description: "Live checks for accessibility and semantic compliance.",
    icon: Users,
    timeline: "Q1 2025",
  },
];
