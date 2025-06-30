"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Zap,
  Github,
  ExternalLink,
  ChevronDown,
  Server,
  Gauge,
  Lock,
  Book,
  Plug,
  EyeOff,
  SwitchCamera,
  Terminal,
  Shield,
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
    label: "Built with C++",
    icon: <Cpu className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "V-Guard",
  },
  description: {
    main: "A blazing-fast VPN engine built in C++ with custom encryption and multi-threaded tunneling.",
    sub: "Speed. Security. Control — no dependencies, just pure performance.",
  },
  buttons: [
    {
      label: "View Source Code",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "primary",
      href: "https://github.com/vardaan-02/V-Guard",
    },
    {
      label: "Architecture Docs",
      iconLeft: <Book className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "outline",
      href: "/docs/v-guard",
    },
  ],
  scrollIndicator: {
    label: "How it works under the hood",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "0 Deps", label: "Fully Written in C++", icon: Cpu },
  { number: "1500+", label: "Lines of Core Logic", icon: Zap },
  { number: "5x+", label: "Throughput vs Baseline", icon: Gauge },
  { number: "100%", label: "Custom Encryption", icon: Lock },
];

const ProjectOverviewContent = {
  badgeText: "System-Level Architecture",
  title: { text: "Built for", highlight: "Privacy-Centric Networking" },
  description: [
    "V-Guard is a lightweight VPN engine written from scratch in C++, using raw sockets, thread pools, and AES encryption.",
    "It tunnels TCP traffic, encrypts/decrypts packets manually, and offers high throughput on both Linux and Windows.",
  ],
  technologies: [
    "C++",
    "Raw Sockets",
    "Multithreading",
    "OpenSSL",
    "Linux",
    "Windows API",
  ],
  icon: Lock,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "C++17",
    icon: <Code className="h-6 w-6" />,
    color: "from-slate-700 to-slate-500 dark:from-slate-500 dark:to-slate-300",
  },
  {
    name: "Raw Sockets",
    icon: <Plug className="h-6 w-6" />,
    color: "from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200",
  },
  {
    name: "OpenSSL",
    icon: <Lock className="h-6 w-6" />,
    color: "from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300",
  },
  {
    name: "Thread Pools",
    icon: <Cpu className="h-6 w-6" />,
    color:
      "from-green-700 to-emerald-500 dark:from-green-500 dark:to-emerald-300",
  },
  {
    name: "Linux Sockets API",
    icon: <Server className="h-6 w-6" />,
    color: "from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400",
  },
  {
    name: "Custom Protocol",
    icon: <Shield className="h-6 w-6" />,
    color:
      "from-purple-700 to-indigo-500 dark:from-purple-500 dark:to-indigo-300",
  },
];

const challenges = [
  {
    challenge: "Low-Level Packet Tunneling",
    solution:
      "Used raw sockets and platform-specific APIs to capture and reroute traffic at the OS level.",
    color: "from-gray-700 to-gray-500 dark:from-gray-400 dark:to-gray-200",
  },
  {
    challenge: "Encryption Without Overhead",
    solution:
      "Integrated AES-256 encryption using OpenSSL, optimized for speed with pre-allocated buffers.",
    color: "from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300",
  },
  {
    challenge: "Multi-Platform Support",
    solution:
      "Abstracted networking code to support both Windows (WinSock2) and Linux (epoll) environments.",
    color:
      "from-purple-700 to-indigo-500 dark:from-purple-500 dark:to-indigo-300",
  },
];

const features = [
  {
    title: "Encrypted Packet Tunneling",
    description:
      "Encrypts traffic using AES before routing through raw sockets.",
    icon: Lock,
    color: "from-blue-700 to-blue-500 dark:from-blue-500 dark:to-blue-300",
  },
  {
    title: "High Throughput Engine",
    description:
      "Multi-threaded packet processing ensures minimal latency and max performance.",
    icon: Gauge,
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Runs on both Linux and Windows with native socket APIs.",
    icon: Server,
    color: "from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400",
  },
  {
    title: "No Dependencies",
    description: "Written entirely in C++ with minimal external libraries.",
    icon: Cpu,
    color: "from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200",
  },
];

const improvements = [
  {
    title: "Traffic Obfuscation",
    description:
      "Add support for disguising traffic to avoid DPI-based blocking.",
    icon: EyeOff,
    timeline: "Q3 2024",
  },
  {
    title: "User-Space CLI",
    description: "A terminal-based interface to manage configs and logs.",
    icon: Terminal,
    timeline: "Q4 2024",
  },
  {
    title: "Protocol Switching",
    description: "Enable dynamic switching between TCP/UDP tunneling modes.",
    icon: SwitchCamera,
    timeline: "Q1 2025",
  },
];
