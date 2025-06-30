import { Badge } from "@/components/ui/badge"
import { motion, Variants } from "framer-motion"

type Technology = {
  name: string
  icon: JSX.Element
  color: string
}

interface TechnologyStackProps {
  technologies: Technology[]
  containerVariants: Variants
  itemVariants: Variants
}

export default function TechnologyStack({
  technologies,
  containerVariants,
  itemVariants,
}: TechnologyStackProps) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-500/20 dark:to-teal-500/20 text-white dark:text-green-800 border-green-500/20 dark:border-green-500/30">
              Tech Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Powered by{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
              Cutting-edge technologies working in perfect harmony
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-10`}>
                    <div className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.icon}
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
