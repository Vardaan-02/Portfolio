"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  url: string;
  tags?: string[];
  date?: string;
  featured?: boolean;
}

export default function Projects() {
  const list: ProjectProps[] = [
    {
      id: "1",
      name: "ComX",
      description:
        "ComX fixes workload distribution with nested groups. My first full-stack project taught me everything about React, Node.js, and database design.",
      photo: "/comx/6.png",
      url: "",
      tags: ["React", "Node.js", "Postgres"],
      date: "",
      featured: false,
    },
    {
      id: "2",
      name: "ComX",
      description:
        "ComX fixes workload distribution with nested groups. My first full-stack project taught me everything about React, Node.js, and database design.",
      photo: "/comx/6.png",
      url: "",
      tags: ["React", "Node.js", "Postgres"],
      date: "",
      featured: false,
    },
    {
      id: "3",
      name: "ComX",
      description:
        "ComX fixes workload distribution with nested groups. My first full-stack project taught me everything about React, Node.js, and database design.",
      photo: "/comx/6.png",
      url: "",
      tags: ["React", "Node.js", "Postgres"],
      date: "",
      featured: false,
    },
    {
      id: "4",
      name: "ComX",
      description:
        "ComX fixes workload distribution with nested groups. My first full-stack project taught me everything about React, Node.js, and database design.",
      photo: "/comx/6.png",
      url: "",
      tags: ["React", "Node.js", "Postgres"],
      date: "",
      featured: false,
    },
  ];

  return (
    <div
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 md:py-12"
      id="Projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-row-reverse"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#565bac]">
            .
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Projects
          </h1>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack
        </motion.h1>
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {list.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                >
                  <ProjectCard project={item} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:shadow-lg",
        "dark:bg-neutral-950 dark:border-neutral-800 w-full",
        project.featured &&
          "ring-2 ring-primary ring-offset-2 dark:ring-offset-neutral-950"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.photo || "/placeholder.svg"}
          width={576}
          height={324}
          alt={`Screenshot of ${project.name}`}
          className={cn(
            "object-cover transition-transform duration-300",
            isHovering && "scale-105"
          )}
        />
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
              Featured
            </Badge>
          </motion.div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <motion.h3
            className="text-xl font-semibold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>
          {project.date && (
            <motion.div
              className="flex items-center text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Calendar className="mr-1 h-3 w-3" />
              {project.date}
            </motion.div>
          )}
        </div>

        {project.tags && project.tags.length > 0 && (
          <motion.div
            className="mt-2 flex flex-wrap gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.2 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.p
          className="mt-3 flex-1 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button asChild className="w-full group/button" variant="outline">
            <Link href={project.url}>
              Read More
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
