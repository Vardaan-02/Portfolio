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
  BrainCircuit,
  Server,
  Database,
  Lock,
  Brain,
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
    label: "AI × Automation Engine",
    icon: <Rocket className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "V-Graph",
  },
  description: {
    main: "Your private LangGraph-powered automation engine with full visibility and control.",
    sub: "Build. Deploy. Orchestrate — visually.",
  },
  buttons: [
    {
      label: "Try the Demo",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "https://youtu.be/wQSvXaQZiyg?si=gkZiCbeRb2j7O8H4",
    },
    {
      label: "Explore GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/V-Graphs",
    },
  ],
  scrollIndicator: {
    label: "Explore Workflow Capabilities",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "0→1", label: "Bootstrapped Infra", icon: Cpu },
  { number: "5+", label: "Event-Driven Systems", icon: Zap },
  { number: "100%", label: "LangGraph-Powered", icon: BrainCircuit },
  { number: "∞", label: "Workflow Possibilities", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "Workflow OS",
  title: { text: "Built to Orchestrate", highlight: "AI-Driven Automations" },
  description: [
    "V-Graph is an open-source n8n-inspired automation engine that leverages Spring Boot and LangGraph to create, manage, and trigger complex workflows visually.",
    "Kafka powers real-time events, Redis enables fast caching/state sync, and LangGraph handles structured agent flows — making it ideal for AI, internal tooling, and custom ops.",
  ],
  technologies: [
    "Spring Boot",
    "LangGraph",
    "Next.js",
    "Kafka",
    "Redis",
    "TypeScript",
  ],
  icon: BrainCircuit,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "Spring Boot",
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-700 to-red-500",
  },
  {
    name: "LangGraph",
    icon: <BrainCircuit className="h-6 w-6" />,
    color: "from-pink-600 to-purple-500",
  },
  {
    name: "Next.js",
    icon: <Code className="h-6 w-6" />,
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "Kafka",
    icon: <Server className="h-6 w-6" />,
    color: "from-yellow-600 to-orange-600",
  },
  {
    name: "Redis",
    icon: <Database className="h-6 w-6" />,
    color: "from-red-600 to-pink-500",
  },
  {
    name: "TypeScript",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-600 to-cyan-500",
  },
];

const challenges = [
  {
    challenge: "Visualizing LangGraph Nodes",
    solution:
      "Created a graph editor UI in Next.js that maps LangGraph agents to interactive components.",
    color: "from-pink-600 to-violet-600",
  },
  {
    challenge: "Real-time Event Triggering",
    solution:
      "Used Kafka for decoupled, scalable event buses across workflow executions.",
    color: "from-yellow-600 to-orange-500",
  },
  {
    challenge: "Custom Node Runtime",
    solution:
      "Designed a modular runtime layer in Spring Boot for integrating custom logic into LangGraph flows.",
    color: "from-green-600 to-emerald-500",
  },
];

const features = [
  {
    title: "Visual Node Graphs",
    description:
      "Drag, connect, and deploy LangGraph workflows with zero backend wiring.",
    icon: Code,
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Real-time Execution & Logs",
    description: "Live status, debugging, and Kafka event streaming.",
    icon: Zap,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "AI Agent Composition",
    description:
      "Add memory, tools, and custom handlers using LangGraph modules.",
    icon: BrainCircuit,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Redis-backed Caching",
    description: "Speed up workflows with in-memory persistence.",
    icon: Database,
    color: "from-red-600 to-pink-600",
  },
];

const improvements = [
  {
    title: "Cloud Execution Engine",
    description: "Spin up and autoscale workflows in cloud containers.",
    icon: Server,
    timeline: "Q4 2024",
  },
  {
    title: "LangChain Compatibility",
    description: "Drop-in support for LangChain-based agents.",
    icon: Brain,
    timeline: "Q1 2025",
  },
  {
    title: "Role-Based Access",
    description: "Secure multi-user environments for teams.",
    icon: Lock,
    timeline: "Q1 2025",
  },
];
