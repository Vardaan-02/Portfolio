"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Bold = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className="relative hover:bg-neutral-900  group/cover inline-block dark:bg-neutral-900 bg-neutral-200 px-1 mx-1 py-0 transition duration-200 rounded-sm">
      <span
        className={cn(
          "dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",
          className
        )}
      >
        {children}
      </span>
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
    </span>
  );
};

export const CircleIcon = ({
  className,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <span
      className={cn(
        `pointer-events-none animate-pulse group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:bg-white`,
        className
      )}
    ></span>
  );
};
