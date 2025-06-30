"use client"

import { motion, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

export interface ProjectOverviewContent {
  badgeText: string
  title: {
    text: string
    highlight: string
  }
  description: string[]
  technologies: string[]
  icon: LucideIcon
  containerVariants: Variants
  itemVariants: Variants
}


export default function ProjectOverview({
  content
}: {
  content: ProjectOverviewContent
}) {
  const {
    badgeText,
    title,
    description,
    technologies,
    icon: Icon,
    containerVariants,
    itemVariants
  } = content

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-500/20 dark:to-rose-500/20 text-white dark:text-pink-800 border-pink-500/20 dark:border-pink-500/30">
              {badgeText}
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title.text}{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                {title.highlight}
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm">
                  <Icon className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
