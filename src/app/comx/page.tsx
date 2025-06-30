"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Rocket,
  Zap,
  Star,
  Users,
  Play,
  Github,
  ExternalLink,
  ChevronDown,
  Video,
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
    label: "Featured Launch 2024",
    icon: <Star className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "ComX",
  },
  description: {
    main: "The ultimate digital HQ for communities to collaborate, build, and thrive together.",
    sub: "Create. Connect. Conquer — all in one platform.",
  },
  buttons: [
    {
      label: "View ComX",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/app",
    },
    {
      label: "Explore GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/your-comx-repo",
    },
  ],
  scrollIndicator: {
    label: "See what ComX can do",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "100% TS", label: "Type Safety Across Stack", icon: Cpu },
  { number: "6+", label: "Core Technologies", icon: Code },
  { number: "20k+", label: "Lines of Code", icon: Zap },
  { number: "∞", label: "Scalability Potential", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "Platform Overview",
  title: { text: "Built for", highlight: "Community-First Collaboration" },
  description: [
    "ComX brings together everything you need to manage your digital community: teams, tasks, deadlines, live chat, and video meetings.",
    "From creators to organizations, scale your projects with real-time tools designed to fuel productivity and connection.",
  ],
  technologies: [
    "React",
    "NodeJs",
    "TypeScript",
    "Socket.IO",
    "WebRTC",
    "Tailwind",
  ],
  icon: Rocket,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "React 18",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    name: "Node.js",
    icon: <Zap className="h-6 w-6" />,
    color: "from-green-700 to-green-500 dark:from-green-600 dark:to-green-400",
  },
  {
    name: "TypeScript",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "Socket.IO",
    icon: <Users className="h-6 w-6" />,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    name: "WebRTC",
    icon: <Video className="h-6 w-6" />,
    color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
  {
    name: "Tailwind CSS",
    icon: <Star className="h-6 w-6" />,
    color: "from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300",
  },
];

const challenges = [
  {
    challenge: "Seamless Real-Time Communication",
    solution:
      "Integrated Socket.IO and WebRTC to enable chat, task updates, and HD video calling without latency.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Complex Team Hierarchies",
    solution:
      "Built a flexible permission system to handle nested communities, team roles, and granular task access.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    challenge: "Task & Project Management UX",
    solution:
      "Designed an intuitive drag-and-drop interface for task creation, assignment, and deadline tracking.",
    color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
  },
];

const features = [
  {
    title: "Real-time Everything",
    description: "Chat, tasks, updates — all synced live, no refresh needed.",
    icon: Zap,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
  {
    title: "Video-First Collaboration",
    description: "Built-in group video calls powered by WebRTC.",
    icon: Video,
    color:
      "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",
  },
  {
    title: "Smart Task Boards",
    description: "Kanban-style boards with tagging, deadlines, and assignees.",
    icon: Cpu,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Community Management",
    description:
      "Organize users into nested teams with roles and access control.",
    icon: Users,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
];

const improvements = [
  {
    title: "AI Task Suggestions",
    description: "Smart suggestions to auto-assign tasks based on activity.",
    icon: Cpu,
    timeline: "Q3 2024",
  },
  {
    title: "Workflow Automations",
    description:
      "Automate reminders, recurring tasks, and role-based triggers.",
    icon: Zap,
    timeline: "Q4 2024",
  },
  {
    title: "Community Analytics",
    description: "Track engagement, growth, and task velocity with ease.",
    icon: Users,
    timeline: "Q1 2025",
  },
];
