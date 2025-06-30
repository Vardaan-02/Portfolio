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
  Database,
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
    label: "2024 Beta Launch",
    icon: <Star className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "V-Connect",
  },
  description: {
    main: "A next-gen social media platform built for real conversations, deep engagement, and real-time stories.",
    sub: "Post. React. Chat. All in one unified experience.",
  },
  buttons: [
    {
      label: "Try V-Connect",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/v-connect",
    },
    {
      label: "Explore GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/v-connect",
    },
  ],
  scrollIndicator: {
    label: "See what makes V-Connect different",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "100%", label: "GraphQL API Coverage", icon: Code },
  { number: "4+", label: "Social Features", icon: Users },
  { number: "3s", label: "Real-time Sync Delay", icon: Zap },
  { number: "∞", label: "Scalable Feed System", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "Platform Overview",
  title: { text: "Built for", highlight: "Modern Social Experiences" },
  description: [
    "V-Connect combines the best of stories, posts, comments, and DMs into one seamless social feed.",
    "It uses GraphQL for blazing-fast APIs, with real-time features to keep users connected at all times.",
  ],
  technologies: [
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "Socket.IO",
    "Tailwind",
    "Apollo Client",
  ],
  icon: Users,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "Next.js",
    icon: <Rocket className="h-6 w-6" />,
    color: "from-black to-gray-800 dark:from-white dark:to-gray-300",
  },
  {
    name: "GraphQL",
    icon: <Code className="h-6 w-6" />,
    color: "from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400",
  },
  {
    name: "PostgreSQL",
    icon: <Database className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: <Star className="h-6 w-6" />,
    color: "from-slate-600 to-slate-400 dark:from-slate-300 dark:to-slate-100",
  },
  {
    name: "Socket.IO",
    icon: <Zap className="h-6 w-6" />,
    color:
      "from-yellow-600 to-orange-500 dark:from-yellow-400 dark:to-orange-300",
  },
  {
    name: "Apollo Client",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400",
  },
];

const challenges = [
  {
    challenge: "Real-time Messaging & Story Sync",
    solution:
      "Implemented WebSocket-based live chat and dynamic story rendering with zero refresh.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Efficient Feed Generation",
    solution:
      "Built a scalable GraphQL resolver pipeline that fetches, paginates, and caches posts.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    challenge: "Comment Threading + Likes",
    solution:
      "Created relational models and GraphQL mutations for nested comments and reactions.",
    color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
  },
];

const features = [
  {
    title: "Stories & Posts",
    description:
      "Users can share time-bound stories and permanent posts in a clean feed.",
    icon: Video,
    color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
  {
    title: "Live Chat",
    description: "Socket-powered direct messaging with typing indicators.",
    icon: Zap,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Comments & Likes",
    description: "Nested comments and reaction system built for virality.",
    icon: Cpu,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
  {
    title: "Profile & Timeline",
    description:
      "Each user has a customizable profile with their personal activity log.",
    icon: Users,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
];

const improvements = [
  {
    title: "AI Content Moderation",
    description: "Filter out harmful posts and toxic comments using LLMs.",
    icon: Cpu,
    timeline: "Q4 2024",
  },
  {
    title: "Advanced Search & Tagging",
    description: "GraphQL-powered global search with smart tags and filters.",
    icon: Zap,
    timeline: "Q1 2025",
  },
  {
    title: "Custom User Themes",
    description: "Let users personalize their UI with themes and layouts.",
    icon: Star,
    timeline: "Q2 2025",
  },
];
