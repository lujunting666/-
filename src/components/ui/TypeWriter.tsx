"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per character
  delay?: number; // initial delay before starting
}

export default function TypeWriter({
  text,
  className = "",
  speed = 40,
  delay = 0.5,
}: TypeWriterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const characters = text.split("");

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.01,
            delay: delay + index * (speed / 1000),
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 0.2,
          delay: delay + characters.length * (speed / 1000),
        }}
        className="inline-block w-[2px] h-[1em] bg-primary-500 dark:bg-primary-400 ml-0.5 align-middle"
      />
    </span>
  );
}
