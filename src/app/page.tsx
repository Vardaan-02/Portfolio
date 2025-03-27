"use client";

import About from "@/components/about";
import Achievement from "@/components/achievement";
import BasicInfo from "@/components/basic-info";
import CodingProfile from "@/components/coding-profile";
import Education from "@/components/education";
import POR from "@/components/position-of-responsibility";
import Projects from "@/components/projects";
import HoverLines from "@/components/ui/hover-line";
import { Separator } from "@/components/ui/separator";
import ThemeChanger from "@/components/ui/theme-changer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const headings = [
  "About",
  "Projects",
  "Coding Profiles",
  "Education",
  "Achivements",
  "Positions Of Responsibility",
];

export default function Home() {
  const themeChangerRef = useRef(null);

  const themeChangerInView = useInView(themeChangerRef, {
    once: true,
    amount: 0.5,
  });

  const themeChangerAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="relative max-w-screen overflow-x-hidden overflow-y-scroll no-scrollbar flex flex-col justify-center items-center">
        <div className="relative z-[999] w-full">
          <motion.div
            ref={themeChangerRef}
            className="fixed h-20 w-full p-4"
            initial="hidden"
            animate={themeChangerInView ? "visible" : "hidden"}
            variants={themeChangerAnimation}
          >
            <ThemeChanger />
          </motion.div>
        </div>
        <HoverLines headings={headings} />
        <BasicInfo/>
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <About />
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <Projects />
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <CodingProfile />
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <Education />
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <Achievement />
        <Separator className="w-[calc(100%-26rem)] my-16" />
        <POR />
      </div>
    </>
  );
}
