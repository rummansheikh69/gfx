"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function Skeleton({ className }) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-md bg-[#010101]",
        className
      )}
    >
      {/* Shimmer Line */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "300%" }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: [0.4, 0, 0.2, 1], // smooth bending curve
        }}
        className="absolute top-0 w-1/3 h-full 
                   bg-gradient-to-r 
                   from-transparent via-[#1a1a1a] to-transparent 
                   opacity-60 skew-x-[20deg]"
      />
    </div>
  );
}
