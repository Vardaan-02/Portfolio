import { motion, Variants } from "framer-motion";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function ChallengesAndSolutions({
  challenges,
  containerVariants,
  itemVariants,
}: {
  challenges: { challenge: string; solution: string; color: string }[];
  containerVariants: Variants;
  itemVariants: Variants;
}) {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-500/20 dark:to-red-500/20 text-white dark:text-orange-800 border-orange-500/20 dark:border-orange-500/30">
              Problem Solving
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Challenges{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Conquered
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
              Every obstacle became an opportunity for innovation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3"
          >
            {challenges.map((item) => (
              <motion.div
                key={item.challenge}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                    />
                    <Badge
                      variant="outline"
                      className="border-red-500/20 dark:border-red-500/30 text-red-600 dark:text-red-300 text-xs"
                    >
                      Challenge
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.challenge}
                  </h3>
                  <Separator className="bg-gray-200 dark:bg-gray-700" />
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400" />
                    <Badge
                      variant="outline"
                      className="border-green-500/20 dark:border-green-500/30 text-green-600 dark:text-green-300 text-xs"
                    >
                      Solution
                    </Badge>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
