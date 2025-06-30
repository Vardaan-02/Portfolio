"use client";

import {
  Database,
  Stethoscope,
  Package,
  ShieldCheck,
  Cpu,
  Star,
  Github,
  ExternalLink,
  ChevronDown,
  BarChart3,
  Wrench,
  Boxes,
  Code,
} from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";
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
      type: "spring",
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
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
    label: "Healthcare + Tech",
    icon: <Stethoscope className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "Inventory Manager",
  },
  description: {
    main: "A full-stack medical inventory management system for hospitals and pharmacies.",
    sub: "Track, restock, and manage all medical assets in real-time with precision.",
  },
  buttons: [
    {
      label: "Explore GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/your-inventory-repo",
    },
  ],
  scrollIndicator: {
    label: "See how it works",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "1500+", label: "Items Tracked", icon: Package },
  { number: "99.9%", label: "Stock Accuracy", icon: ShieldCheck },
  { number: "24x7", label: "Access Anytime", icon: Cpu },
  { number: "100%", label: "Data Security", icon: Star },
];

const ProjectOverviewContent = {
  badgeText: "System Overview",
  title: { text: "Simplifying", highlight: "Medical Inventory Ops" },
  description: [
    "Built for small clinics to large hospitals, the system ensures transparency and accountability in managing life-saving resources.",
    "From stock levels to expiry alerts, everything is centralized with a clean, accessible UI.",
  ],
  technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "Chart.js"],
  icon: Database,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "PHP",
    icon: <Code className="h-6 w-6" />,
    color:
      "from-purple-700 to-indigo-500 dark:from-purple-600 dark:to-indigo-400",
  },
  {
    name: "MySQL",
    icon: <Database className="h-6 w-6" />,
    color: "from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300",
  },
  {
    name: "Bootstrap 5",
    icon: <Star className="h-6 w-6" />,
    color: "from-pink-600 to-rose-500 dark:from-pink-400 dark:to-rose-300",
  },
  {
    name: "jQuery",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-gray-700 to-gray-500 dark:from-gray-400 dark:to-gray-300",
  },
  {
    name: "Chart.js",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300",
  },
];

const challenges = [
  {
    challenge: "Managing Expired Stock",
    solution:
      "Implemented auto-expiry tracking logic with daily cron checks and visual alerts.",
    color: "from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400",
  },
  {
    challenge: "Access Control for Multiple Roles",
    solution:
      "Built a secure login flow with role-based dashboards for admins, pharmacists, and inventory staff.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    challenge: "Scalable Stock Architecture",
    solution:
      "Normalized SQL schema allowed tracking across multiple categories, departments, and suppliers.",
    color:
      "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
  },
];

const features = [
  {
    title: "Expiry Alerts",
    description: "Get notified before critical medicines expire.",
    icon: ShieldCheck,
    color: "from-rose-600 to-red-600 dark:from-rose-400 dark:to-red-400",
  },
  {
    title: "Live Stock Monitoring",
    description: "Track inventory quantity in real-time across locations.",
    icon: Boxes,
    color: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
  },
  {
    title: "Role-Based Access",
    description: "Different dashboards for Admins, Staff, and Auditors.",
    icon: Cpu,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Analytics Dashboard",
    description: "Visualize consumption, restocks, and wastage patterns.",
    icon: BarChart3,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
];

const improvements = [
  {
    title: "Barcode Scanner Integration",
    description: "Enable quick item updates via barcode-based entry.",
    icon: Wrench,
    timeline: "Q3 2024",
  },
  {
    title: "Multi-Location Sync",
    description: "Allow real-time stock sync across hospital branches.",
    icon: Cpu,
    timeline: "Q4 2024",
  },
  {
    title: "Mobile App Version",
    description: "Lightweight mobile-first UI for remote inventory checks.",
    icon: Star,
    timeline: "Q1 2025",
  },
];
