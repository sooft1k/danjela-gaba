"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "article" | "h1" | "h2" | "h3" | "p" | "li" | "ul";
}

/**
 * A subtle, editorial reveal. Default: 28px lift, 1s easing, fires once
 * when 8% of the element is in the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 1,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.08, margin: "0px 0px -40px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
