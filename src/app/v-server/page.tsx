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
  Network,
  Database,
  BarChart,
  Lock,
  Server,
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
    label: "Infra Drop 2024",
    icon: <Rocket className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Powering URLs with",
    highlight: "V-Server",
  },
  description: {
    main: "A blazing-fast C++ server with a custom-built database — optimized for performance and scalability.",
    sub: "Shorten. Serve. Scale — engineered from scratch.",
  },
  buttons: [
    {
      label: "Try V Server",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/vserver-demo",
    },
    {
      label: "GitHub Repo",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/v-server",
    },
  ],
  scrollIndicator: {
    label: "Explore the Stack",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "100%", label: "Custom C++ Codebase", icon: Code },
  { number: "0", label: "External DBs Used", icon: Cpu },
  { number: "~1ms", label: "Avg Redirect Time", icon: Zap },
  { number: "∞", label: "Scalability Horizon", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "System Design",
  title: { text: "Built from", highlight: "Scratch for Speed" },
  description: [
    "V Server is a high-efficiency HTTP server written in C++, designed for ultra-fast URL shortening and redirection.",
    "It runs on a lightweight custom database that minimizes read/write latency and optimizes memory footprint.",
  ],
  technologies: ["C++", "Custom DB", "Raw TCP", "HTTP 1.1", "Linux Networking"],
  icon: Rocket,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "C++17",
    icon: <Code className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600 dark:from-gray-500 dark:to-gray-400",
  },
  {
    name: "Custom DB Engine",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-green-800 to-green-600 dark:from-green-500 dark:to-green-400",
  },
  {
    name: "Raw HTTP Server",
    icon: <Zap className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300",
  },
  {
    name: "TCP/IP Stack",
    icon: <Network className="h-6 w-6" />,
    color:
      "from-purple-700 to-purple-500 dark:from-purple-400 dark:to-purple-300",
  },
];

const challenges = [
  {
    challenge: "Minimal Latency URL Redirects",
    solution:
      "Optimized custom hash-based storage and memory mapping for lightning-fast lookups.",
    color: "from-indigo-700 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "No External Dependencies",
    solution:
      "Engineered a full-stack solution in pure C++, including networking, routing, and data storage layers.",
    color: "from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400",
  },
  {
    challenge: "High Throughput Under Load",
    solution:
      "Implemented multi-threaded request handling with event-driven architecture to handle spikes gracefully.",
    color:
      "from-green-700 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
];

const features = [
  {
    title: "Ultra-Fast Redirects",
    description: "Avg response time < 1ms for shortened URLs.",
    icon: Zap,
    color:
      "from-yellow-600 to-orange-500 dark:from-yellow-400 dark:to-orange-300",
  },
  {
    title: "Zero-Dependency Server",
    description: "No NGINX. No Node. Just pure C++ performance.",
    icon: Cpu,
    color: "from-slate-700 to-slate-500 dark:from-slate-400 dark:to-slate-300",
  },
  {
    title: "Memory-Mapped Storage",
    description: "Blazing-fast read/write with OS-level memory mapping.",
    icon: Database,
    color: "from-green-600 to-lime-600 dark:from-green-400 dark:to-lime-400",
  },
  {
    title: "Clean REST API",
    description: "Supports short link creation, analytics, and admin ops.",
    icon: Network,
    color: "from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
  },
];

const improvements = [
  {
    title: "Link Analytics Dashboard",
    description: "Visualize traffic, CTR, and performance metrics.",
    icon: BarChart,
    timeline: "Q3 2024",
  },
  {
    title: "Custom Expiry & Access Control",
    description: "Add TTL, role-based access, and one-time redirects.",
    icon: Lock,
    timeline: "Q4 2024",
  },
  {
    title: "Load Balancer Integration",
    description: "Cluster-ready design for horizontal scaling.",
    icon: Server,
    timeline: "Q1 2025",
  },
];
