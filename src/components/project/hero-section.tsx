"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type HeroContent = {
  badge: {
    label: string
    icon: JSX.Element
  }
  title: {
    prefix: string
    highlight: string
  }
  description: {
    main: string
    sub: string
  }
  buttons: {
    label: string
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    variant: string
    href: string
  }[]
  scrollIndicator: {
    label: string
    icon: JSX.Element
  }
}

export function HeroSection({ content }: { content: HeroContent }) {
  const { badge, title, description, buttons, scrollIndicator } = content

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <Badge className="dark:bg-slate-800/30 bg-slate-200/30 mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-300">
              {badge.icon && <span className="w-3 h-3 mr-2">{badge.icon}</span>}
              {badge.label}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            {title.prefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {title.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {description.main}
            <span className="block mt-2 text-lg text-gray-600 dark:text-gray-400">
              {description.sub}
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                size="lg"
                variant={btn.variant === "outline" ? "outline" : "default"}
                className={btn.variant === "primary"
                  ? "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white border-0 px-8 py-6 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
                  : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white px-8 py-6 text-lg font-semibold group transition-all duration-300 bg-transparent"
                }
                asChild
              >
                <a href={btn.href} target="_blank" rel="noopener noreferrer">
                  {btn.iconLeft && <span className="mt-1 mr-2 h-5 w-5">{btn.iconLeft}</span>}
                  {btn.label}
                  {btn.iconRight && <span className="mt-1 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform">{btn.iconRight}</span>}
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-36 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400"
            >
              <span className="text-sm mb-2">{scrollIndicator.label}</span>
              <div className="w-5 h-5">{scrollIndicator.icon}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
