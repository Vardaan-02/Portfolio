"use client";

import { useTheme } from "@/hooks/use-theme";
import { Bold } from "./ui/bold";
import { ContactUs } from "./ui/contact-us";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function BasicInfo() {
  useTheme();

  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="h-screen w-screen dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col" id="basic-info">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_80%)]" />
      <div className="w-full h-screen flex justify-center items-center">
        <motion.div
          className="flex flex-col items-start w-3/4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            ref={headerRef}
            className="text-4xl lg:text-9xl md:text-6xl font-bold relative z-20 text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 py-8 leading-0 dark:from-neutral-200 dark:to-neutral-500"
            variants={headerAnimation}
          >
            Hi, I&apos;m Vardaan.
          </motion.p>

          <motion.p
            ref={subtitleRef}
            className="text-neutral-800 dark:text-neutral-200 ml-2 text-sm md:text-lg lg:text-3xl z-[999]"
            variants={fadeInUp}
          >
            Sophomore at Indian Institute of Information Technology Allahabad
          </motion.p>

          <motion.p
            ref={descriptionRef}
            className="ml-2 mt-4 text-xs lg:text-lg md:text-sm z-[999]"
            variants={fadeInUp}
          >
            Over the past two years at IIITA, I&apos;ve excelled in{" "}
            <Bold>full-stack development</Bold>
            with Next.js, <Bold>low-level programming</Bold> with C++ servers
            and OpenGL, <Bold>competitive coding</Bold>, and{" "}
            <Bold>machine learning</Bold>, showcasing expertise through projects
            and a strong coding profile.
          </motion.p>

          <motion.div
            ref={contactRef}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ContactUs />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
