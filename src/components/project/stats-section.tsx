import { motion, Variants } from "framer-motion";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatItem {
  number: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface StatsSectionProps {
  stats: StatItem[];
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function StatsSection({
  stats,
  containerVariants,
  itemVariants,
}: StatsSectionProps) {
  return (
    <section className="py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 group-hover:from-blue-500/20 group-hover:to-purple-500/20 dark:group-hover:from-blue-500/30 dark:group-hover:to-purple-500/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
