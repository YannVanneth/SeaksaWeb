"use client";

import { cn } from "../../lib/utils";
import { motion, MotionProps, useScroll, useSpring } from "motion/react";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgressDemo = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-[69px] z-[1000] h-1 origin-left bg-primary",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
});

ScrollProgressDemo.displayName = "ScrollProgress";
