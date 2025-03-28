"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

type LineAnimationProps = {
  width: number;
};

interface HoverLineProps {
  headings: string[];
}

export default function HoverLines({ headings }: HoverLineProps) {
  const style = `h-1 w-4 bg-primary`;

  const smallLineRef = useRef<(HTMLDivElement | null)[]>([]);

  const bigLineControls = useAnimationControls();
  const headingControls = useAnimationControls();

  const mouseY = useMotionValue(0);

  const [lineAnimationProps, setLineAnimationProps] = useState<
    LineAnimationProps[]
  >([]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    mouseY.set(event.clientY);

    const newAnimationProps = smallLineRef.current.map((ele) => {
      if (!ele) return { width: 16 };

      const { top } = ele.getBoundingClientRect();
      const diff = Math.abs(mouseY.get() - top);

      const width = Math.max((1 - Math.min(diff / 150, 1)) * 11 * 16, 16);

      return {
        width,
      };
    });

    setLineAnimationProps(newAnimationProps);
  }

  const handleMouseEnter = () => {
    bigLineControls.start("hover");
    headingControls.start("hover");
  };

  const handleMouseLeave = () => {
    bigLineControls.start("noHover");
    headingControls.start("noHover");
    const resetAnimationProps = smallLineRef.current.map(() => ({
      width: 16,
      transition: {
        type: "spring",
      },
    }));

    setLineAnimationProps(resetAnimationProps);
  };

  return (
    <div
      className="fixed hidden lg:flex right-0 top-0 h-screen flex-col justify-around w-[15rem] overflow-hidden z-[999]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {headings.map((ele, index1) => {
        return (
          <div
            key={ele}
            className="flex flex-col justify-around h-full items-end"
          >
            <motion.div
              className={cn(style, "w-8 ")}
              animate={bigLineControls}
              variants={{
                hover: { width: "13rem" },
                noHover: { width: "2rem" },
              }}
              transition={{
                type: "spring",
              }}
            >
              <Link href={`#${ele}`}>
                <motion.p
                  variants={{
                    noHover: { x: "3rem" },
                    hover: { x: "0.4rem" },
                  }}
                  className="translate-x-8 w-48"
                  animate={headingControls}
                >
                  {ele}
                </motion.p>
              </Link>
            </motion.div>
            {Array.from({ length: 4 }, (_, index2) => index2 + 1).map(
              (ele, index2) => {
                const currentLineIndex = index1 * 4 + index2;

                return (
                  <motion.div
                    className={cn(style)}
                    key={index2}
                    ref={(ele: HTMLDivElement | null) => {
                      smallLineRef.current[currentLineIndex] = ele;
                    }}
                    animate={lineAnimationProps[currentLineIndex]}
                    transition={{
                      type: "spring",
                      stiffness: 1000,
                      damping: 50,
                    }}
                  />
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
}
