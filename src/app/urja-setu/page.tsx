"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BrainCircuit,
  Globe,
  Rocket,
  Leaf,
  MapPin,
  SatelliteDish,
  ChevronDown,
  Github,
  ExternalLink,
  Play,
  Zap,
  BarChart3,
  Star,
  Cpu,
  ArrowRight,
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
        <div className="absolute top-10 left-20 w-80 h-80 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-500/20 dark:bg-yellow-500/10 rounded-full blur-3xl" />
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
    label: "SIH 2024 Finalist",
    icon: <Star className="w-3 h-3 mr-2" />,
  },
  title: {
    prefix: "Introducing",
    highlight: "Urja Setu",
  },
  description: {
    main: "AI-powered energy planning tool for smart and sustainable India.",
    sub: "Bridge the energy gap with GenAI insights. Empower rural & urban grid expansion with precision.",
  },
  buttons: [
    {
      label: "Live Demo",
      iconLeft: <Play className="w-5 h-5" />,
      iconRight: <ArrowRight className="w-5 h-5" />,
      variant: "primary",
      href: "/urja-setu",
    },
    {
      label: "View GitHub",
      iconLeft: <Github className="w-5 h-5" />,
      iconRight: <ExternalLink className="w-5 h-5" />,
      variant: "outline",
      href: "https://github.com/vardaan-02/urja-setu",
    },
  ],
  scrollIndicator: {
    label: "Explore use cases",
    icon: <ChevronDown className="w-5 h-5" />,
  },
};

const stats = [
  { number: "30+", label: "AI Models Integrated", icon: BrainCircuit },
  { number: "50k+", label: "Geospatial Data Points", icon: MapPin },
  { number: "98%", label: "Accuracy in Energy Forecast", icon: BarChart3 },
  { number: "∞", label: "Scalability Potential", icon: Rocket },
];

const ProjectOverviewContent = {
  badgeText: "Platform Overview",
  title: { text: "Powering", highlight: "Energy Transformation with AI" },
  description: [
    "Urja Setu enables smart energy deployment by combining AI, geospatial intelligence, and real-time environmental data.",
    "From recommending optimal solar and wind installation sites to generating predictive models for energy output, Urja Setu bridges policy and action.",
  ],
  technologies: [
    "NodeJS",
    "Flutter",
    "PostgreSQL",
    "Python",
    "GenAI",
    "Leaflet",
  ],
  icon: Leaf,
  containerVariants,
  itemVariants,
};

const technologies = [
  {
    name: "Flutter",
    icon: <Rocket className="h-6 w-6" />,
    color: "from-gray-700 to-gray-500 dark:from-gray-500 dark:to-gray-300",
  },
  {
    name: "NodeJS",
    icon: <SatelliteDish className="h-6 w-6" />,
    color: "from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400",
  },
  {
    name: "PostgreSQL",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-blue-800 to-blue-600 dark:from-blue-600 dark:to-blue-400",
  },
  {
    name: "Python",
    icon: <Zap className="h-6 w-6" />,
    color:
      "from-yellow-500 to-yellow-400 dark:from-yellow-300 dark:to-yellow-200",
  },
  {
    name: "GenAI",
    icon: <BrainCircuit className="h-6 w-6" />,
    color: "from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400",
  },
  {
    name: "Leaflet.js",
    icon: <Globe className="h-6 w-6" />,
    color: "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
  },
];

const challenges = [
  {
    challenge: "Geospatial Data Integration",
    solution:
      "Integrated Leaflet with real-time environmental datasets (solar intensity, wind speed, terrain) for accurate placement suggestions.",
    color: "from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400",
  },
  {
    challenge: "AI-Powered Decision Logic",
    solution:
      "Used GenAI to suggest energy sources based on region-specific metrics like sunlight hours, wind potential, and historical weather data.",
    color:
      "from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",
  },
  {
    challenge: "Policy Alignment",
    solution:
      "Embedded rule-based systems and filters to ensure all suggestions comply with Indian energy policies and land use regulations.",
    color:
      "from-orange-600 to-yellow-600 dark:from-orange-400 dark:to-yellow-400",
  },
];

const features = [
  {
    title: "Smart Site Selection",
    description: "Get AI-curated suggestions for solar/wind installations.",
    icon: MapPin,
    color: "from-green-600 to-lime-600 dark:from-green-400 dark:to-lime-400",
  },
  {
    title: "Energy Forecasting",
    description:
      "Predict daily, seasonal, and annual energy generation using ML models.",
    icon: BarChart3,
    color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  },
  {
    title: "Policy Compliance Engine",
    description:
      "Built-in rule layer to match MNRE and Smart India Hackathon criteria.",
    icon: Globe,
    color:
      "from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",
  },
  {
    title: "Interactive Maps",
    description:
      "Visual overlays showing solar zones, wind corridors, grid access.",
    icon: Leaf,
    color:
      "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
  },
];

const improvements = [
  {
    title: "Carbon Impact Tracking",
    description: "Estimate CO₂ offset based on installation plans.",
    icon: Leaf,
    timeline: "Q3 2024",
  },
  {
    title: "Smart Recommendations via LLMs",
    description:
      "Natural language queries for asking energy placement questions.",
    icon: BrainCircuit,
    timeline: "Q4 2024",
  },
  {
    title: "Integration with DISCOM APIs",
    description: "Push planning data to regional electricity boards.",
    icon: Globe,
    timeline: "Q1 2025",
  },
];
