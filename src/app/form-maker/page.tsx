"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Rocket,
  Zap,
  Play,
  Github,
  ExternalLink,
  ChevronDown,
  LayoutTemplate,
  Wrench,
  FileText,
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
    label: "No-Code Platform",
    icon: <LayoutTemplate className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "Form Maker",
  },
  description: {
    main: "Build powerful forms visually using Next.js — no code required.",
    sub: "Drag, drop, deploy. Designed for developers and non-devs alike.",
  },
  buttons: [
    {
      label: "Try Builder",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/form-maker/demo",
    },
    {
      label: "View Code",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/Vardaan-02/Form-Maker",
    },
  ],
  scrollIndicator: {
    label: "See how it works",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "0", label: "Lines of Backend Code Written", icon: Code },
  { number: "100%", label: "Customizable Fields", icon: Wrench },
  { number: "∞", label: "Form Layouts Possible", icon: LayoutTemplate },
  { number: "Next.js", label: "Powered By", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "Project Overview",
  title: { text: "Visual", highlight: "Form Builder for Web Devs" },
  description: [
    "Form Maker is a no-code form builder built on Next.js and Tailwind.",
    "It allows drag-and-drop layout generation with instant preview and export as components.",
  ],
  technologies: ["Next.js", "Tailwind CSS", "Zod", "TypeScript"],
  icon: LayoutTemplate,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "Next.js",
    icon: <Rocket className="h-6 w-6" />,
    color: "from-black to-gray-800 dark:from-white dark:to-gray-500",
  },
  {
    name: "Tailwind CSS",
    icon: <LayoutTemplate className="h-6 w-6" />,
    color: "from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-400",
  },
  {
    name: "TypeScript",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "Zod",
    icon: <FileText className="h-6 w-6" />,
    color:
      "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",
  },
];

const challenges = [
  {
    challenge: "Dynamic Field Validation",
    solution:
      "Integrated Zod schema generation based on user config with real-time feedback.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Preview Consistency",
    solution:
      "Synced form canvas state with live DOM renderer and persisted design state.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    challenge: "Exporting as Component",
    solution:
      "Enabled export-to-code feature that converts form layout to reusable TSX files.",
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
];

const features = [
  {
    title: "Drag-and-Drop Builder",
    description: "Create forms visually with a clean, interactive interface.",
    icon: LayoutTemplate,
    color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
  },
  {
    title: "Validation Logic",
    description: "Add field-level and form-wide validation using Zod.",
    icon: FileText,
    color:
      "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",
  },
  {
    title: "Component Export",
    description: "Download forms as clean, ready-to-use React components.",
    icon: Code,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    title: "Zero Backend Required",
    description: "Designed to run purely on frontend with schema validation.",
    icon: Zap,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
];

const improvements = [
  {
    title: "Templates Gallery",
    description: "Add pre-built form templates for rapid creation.",
    icon: LayoutTemplate,
    timeline: "Q3 2024",
  },
  {
    title: "Conditional Logic",
    description: "Enable logic-based field visibility and chaining.",
    icon: Cpu,
    timeline: "Q4 2024",
  },
  {
    title: "One-click Deploy",
    description: "Push generated forms to Vercel or export as JSON schema.",
    icon: Rocket,
    timeline: "Q1 2025",
  },
];
