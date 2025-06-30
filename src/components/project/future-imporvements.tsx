"use client";

import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Clock, ArrowRight, Sparkles, LucideProps } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function FutureImprovements({
  improvements,
  containerVariants,
  itemVariants,
}: {
  improvements: {
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    timeline: string;
    priority?: "high" | "medium" | "low";
    status?: "planned" | "in-progress" | "research";
  }[];
  containerVariants: Variants;
  itemVariants: Variants;
}) {
  const getPriorityColor = (priority = "medium") => {
    switch (priority) {
      case "high":
        return "from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border-red-500/20 text-red-600 dark:text-red-400";
      case "low":
        return "from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border-green-500/20 text-green-600 dark:text-green-400";
      default:
        return "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border-blue-500/20 text-blue-600 dark:text-blue-400";
    }
  };

  const getStatusIcon = (status = "planned") => {
    switch (status) {
      case "in-progress":
        return <Clock className="h-3 w-3" />;
      case "research":
        return <Sparkles className="h-3 w-3" />;
      default:
        return <ArrowRight className="h-3 w-3" />;
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const timelineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-blue-50/50 dark:from-cyan-950/20 dark:via-transparent dark:to-blue-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-500/20 dark:to-blue-500/20 text-white dark:text-cyan-800 border-cyan-500/20 dark:border-cyan-500/30 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Development Roadmap
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Building the{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
                Our commitment to continuous innovation and excellence drives
                every enhancement we plan
              </p>
            </div>
          </motion.div>

          {/* Timeline Layout */}
          <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                variants={timelineVariants}
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-0.5 origin-top"
              />

              {/* Timeline Items */}
              <div className="space-y-12">
                {improvements.map((improvement, index) => (
                  <motion.div
                    key={improvement.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:space-x-8`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg" />

                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="relative">
                          <div className="flex items-center justify-between mb-4">
                            <motion.div
                              className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 dark:group-hover:from-cyan-500/30 dark:group-hover:to-blue-500/30 transition-all duration-300"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <improvement.icon className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
                            </motion.div>

                            <div className="flex flex-col items-end space-y-2">
                              <Badge
                                variant="outline"
                                className={`${getPriorityColor(
                                  improvement.priority
                                )} text-xs font-medium px-3 py-1`}
                              >
                                {improvement.priority?.toUpperCase() ||
                                  "MEDIUM"}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs flex items-center gap-1"
                              >
                                {getStatusIcon(improvement.status)}
                                {improvement.status
                                  ?.replace("-", " ")
                                  .toUpperCase() || "PLANNED"}
                              </Badge>
                            </div>
                          </div>

                          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                            {improvement.title}
                          </CardTitle>

                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="font-medium">
                              {improvement.timeline}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="relative">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {improvement.description}
                          </p>

                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
