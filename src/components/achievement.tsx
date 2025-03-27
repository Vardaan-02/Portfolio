"use client";

import type React from "react";
import { useMemo } from "react";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Code,
  BookOpen,
  Trophy,
  Star,
  Zap,
  ArrowRight,
  Medal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Achievement {
  title: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
  importance: "high" | "medium" | "low";
}

interface Category {
  name: string;
  icon: React.ReactNode;
  achievements: Achievement[];
}

function CategorySection({
  category,
  index,
  scrollY,
  achievementStartIndex,
}: {
  category: Category;
  index: number;
  scrollY: number;
  achievementStartIndex: number;
}) {
  const categoryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(categoryRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      className="space-y-6"
      ref={categoryRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
      style={{
        transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <motion.div
        className="flex items-center gap-2 border-b pb-2"
        initial={{ width: "0%" }}
        animate={{
          width: isInView ? "100%" : "0%",
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: isInView ? 1 : 0,
            }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {category.name}
          </motion.span>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
          >
            {category.icon}
          </motion.div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.achievements.map((achievement, idx) => (
          <AchievementCard
            key={idx}
            achievement={achievement}
            idx={idx}
            achievementIndex={achievementStartIndex + idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AchievementCard({
  achievement,
  idx,
}: {
  achievement: Achievement;
  idx: number;
  achievementIndex: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-lg border p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        achievement.importance === "high"
          ? "border-primary/50 bg-primary/5"
          : "border-muted bg-card"
      )}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 30,
        scale: isInView ? 1 : 0.95,
      }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="absolute top-0 right-0 p-2">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{
            x: isInView ? 0 : 20,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: idx * 0.1 + 0.2,
          }}
        >
          <Badge
            variant={
              achievement.importance === "high" ? "default" : "secondary"
            }
            className="opacity-80 group-hover:opacity-100 transition-opacity"
          >
            {achievement.highlight}
          </Badge>
        </motion.div>
      </div>

      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center gap-2">
          <motion.div
            className={cn(
              "p-2 rounded-full",
              achievement.importance === "high"
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            )}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1 + 0.3,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            {achievement.icon}
          </motion.div>
          <motion.h3
            className="text-xl font-bold"
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: isInView ? 0 : -10,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              delay: idx * 0.1 + 0.4,
            }}
          >
            {achievement.title}
          </motion.h3>
        </div>

        <motion.p
          className="text-muted-foreground flex-grow mb-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            delay: idx * 0.1 + 0.5,
          }}
        >
          {achievement.description}
        </motion.p>

        <motion.div
          className="flex items-center text-sm text-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span>Learn more</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>

      {achievement.importance === "high" && (
        <motion.div
          className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-primary/5 z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      )}

      {isInView && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent z-0 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 1.5,
            delay: idx * 0.1 + 0.2,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

export default function Achievement() {
  const categories: Category[] = useMemo(() => {
    return [
      {
        name: "Competitions",
        icon: <Trophy className="h-5 w-5" />,
        achievements: [
          {
            title: "Smart India Hackathon (SIH)",
            description:
              "National-level hackathon organized by the Government of India",
            highlight: "Finalist",
            icon: <Trophy className="h-5 w-5" />,
            importance: "high",
          },
          {
            title: "Three Musketeers Competitive Coding Contest",
            description: "Prestigious coding competition at IIIT Allahabad",
            highlight: "2nd Place",
            icon: <Award className="h-5 w-5" />,
            importance: "high",
          },
          {
            title: "AlgoRush",
            description: "Competitive algorithm contest at IIIT Allahabad",
            highlight: "7th Place",
            icon: <Code className="h-5 w-5" />,
            importance: "medium",
          },
          {
            title: "Competitive Coding Wing Trials",
            description: "Internal coding competition at IIIT Allahabad",
            highlight: "3rd Place",
            icon: <Award className="h-5 w-5" />,
            importance: "medium",
          },
          {
            title: "Code-X-Culture",
            description:
              "Campus-wide coding contest with participants from all departments",
            highlight: "8th Place",
            icon: <Code className="h-5 w-5" />,
            importance: "medium",
          },
          {
            title: "Code Red",
            description: "National Level Competitive coding event by IIITA",
            highlight: "Best Fresher",
            icon: <Star className="h-5 w-5" />,
            importance: "medium",
          },
        ],
      },
      {
        name: "Academics",
        icon: <BookOpen className="h-5 w-5" />,
        achievements: [
          {
            title: "JEE Main",
            description:
              "National-level engineering entrance examination in India",
            highlight: "AIR 1932",
            icon: <Zap className="h-5 w-5" />,
            importance: "high",
          },
        ],
      },
    ];
  }, []);

  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achievementStartIndices = useMemo(() => {
    const indices: number[] = [];
    let currentIndex = 0;

    categories.forEach((category) => {
      indices.push(currentIndex);
      currentIndex += category.achievements.length;
    });

    return indices;
  }, [categories]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 md:py-16 bg-background" id="Achivements">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          className="flex items-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHeaderInView ? 1 : 0,
            y: isHeaderInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Achievements
          </h1>
          <motion.span
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ml-1 text-[#565bac]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isHeaderInView ? 1 : 0,
              scale: isHeaderInView ? 1 : 0.5,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            .
          </motion.span>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              category={category}
              index={index}
              scrollY={scrollY}
              achievementStartIndex={achievementStartIndices[index]}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="inline-flex items-center justify-center gap-2 p-2 px-4 rounded-full bg-primary/10 text-primary">
            <Medal className="h-5 w-5" />
            <span className="font-medium">
              Continuing to achieve excellence
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
