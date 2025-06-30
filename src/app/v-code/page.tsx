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
    label: "Cloud IDE Launch 2024",
    icon: <Star className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "V-Code",
  },
  description: {
    main: "Your personal, high-performance Replit alternative — spin up containers, code live, and deploy instantly.",
    sub: "Collaborative. Containerized. Cloud-native.",
  },
  buttons: [
    {
      label: "View V-Code",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "https://youtu.be/918YdzN05hY?si=fBG_GsnesdlYO7tL",
    },
    {
      label: "Explore GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/v-code",
    },
  ],
  scrollIndicator: {
    label: "See what V-Code can do",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "10k+", label: "Containers Spawned", icon: Zap },
  { number: "100%", label: "WebSocket Live Sync", icon: Cpu },
  { number: "Zero", label: "Cold Starts", icon: Rocket },
  { number: "Multi-Cloud", label: "AWS + GKE Ready", icon: Code },
];

const ProjectOverviewContent = {
  badgeText: "Platform Overview",
  title: { text: "Replit-Level", highlight: "Cloud Dev Experience" },
  description: [
    "V-Code is a full-stack collaborative IDE built to emulate and extend Replit’s core experience.",
    "Supports container orchestration, real-time code sync, terminal access, and instant preview — all from your browser.",
  ],
  technologies: [
    "React",
    "Node.js",
    "TypeScript",
    "WebSockets",
    "Kubernetes",
    "AWS",
    "GKE",
  ],
  icon: Cpu,
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
    name: "WebSockets",
    icon: <Users className="h-6 w-6" />,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    name: "Kubernetes",
    icon: <Rocket className="h-6 w-6" />,
    color:
      "from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",
  },
  {
    name: "AWS",
    icon: <Star className="h-6 w-6" />,
    color: "from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-200",
  },
  {
    name: "GKE",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400",
  },
];

const challenges = [
  {
    challenge: "Container Spinning & Isolation",
    solution:
      "Used Kubernetes with GKE to orchestrate isolated dev containers with secure namespaces.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Real-time Code Collab",
    solution:
      "Leveraged WebSockets and in-memory data sync to power live editing across clients.",
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    challenge: "Cloud Resource Management",
    solution:
      "Implemented autoscaling logic with Node backend to manage container cost and efficiency on AWS.",
    color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
  },
];

const features = [
  {
    title: "Live Code Collaboration",
    description:
      "Multiple users, real-time sync, zero lag — Replit-style coding.",
    icon: Users,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
  {
    title: "Containerized Workspaces",
    description:
      "K8s-powered isolated runtime for every project, ready on demand.",
    icon: Rocket,
    color:
      "from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",
  },
  {
    title: "Integrated Terminal",
    description:
      "Access terminal directly from the browser with persistent state.",
    icon: Cpu,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    title: "Instant Preview",
    description:
      "Run and preview web apps with one click — instant feedback loop.",
    icon: Zap,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
];

const improvements = [
  {
    title: "AI Pair Programmer",
    description:
      "Copilot-style suggestions built into the IDE for smart autocompletions.",
    icon: Cpu,
    timeline: "Q3 2024",
  },
  {
    title: "Custom Dockerfile Support",
    description:
      "Upload or write your own Dockerfile for full-stack custom environments.",
    icon: Code,
    timeline: "Q4 2024",
  },
  {
    title: "Persistent Workspace Storage",
    description: "Add S3-based persistent volume options for saved sessions.",
    icon: Rocket,
    timeline: "Q1 2025",
  },
];
