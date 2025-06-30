import { motion, Variants } from "framer-motion";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Badge } from "../ui/badge";

export default function  KeyFeatures({
  features,
  containerVariants,
  itemVariants,
}: {
  features: {
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    color: string;
  }[];
  containerVariants: Variants;
  itemVariants: Variants;
}) {
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
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-500/20 dark:to-purple-500/20 text-white dark:text-indigo-800 border-indigo-500/20 dark:border-indigo-500/30">
              Key Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Built for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${feature.color} bg-opacity-10 w-fit`}
                  >
                    <feature.icon
                      className={`w-6 h-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature.description}
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
