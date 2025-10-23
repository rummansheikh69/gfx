"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const smallUp = {
  hidden: { y: 160, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: 1,
    transition: { duration: 1.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const bigUp = {
  hidden: { y: 240, opacity: 0, skewY: 2 },
  visible: {
    y: 0,
    opacity: 1,
    skewY: 0,
    delay: 1,
    transition: { duration: 1.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero({ startAnim = false }) {
  // track global scroll to dim the second line when the page is scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setIsScrolled(window.scrollY > 100); // adjust threshold if needed
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full h-screen">
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate={startAnim ? "visible" : "hidden"}
      >
        <motion.div
          variants={smallUp}
          className="py-2.5 px-[18px] rounded-full bg-white/5 flex items-center gap-4"
        >
          <div className="p-[6px] bg-[#2a3526] rounded-full">
            <div className="p-[5px] bg-[#49ff0a] rounded-full"></div>
          </div>
          <h5 className="text-lg font-tommy-light font-semibold tracking-wider">
            Available For Hire
          </h5>
        </motion.div>

        <motion.div
          variants={bigUp}
          className="flex items-center gap-4 text-[200px] 2xl:text-[300px] font-tommy-bold leading-none mt-5"
        >
          <h1 className="text-[#ababab]">UX</h1>
          <h1>GFX</h1>
        </motion.div>

        <motion.div
          variants={smallUp}
          className="flex flex-col items-center gap-4 text-4xl 2xl:text-5xl font-tommy-light font-semibold leading-none mt-10"
        >
          <h2 className="text-[#e4e4e4]">
            Enhancing the visual representation of your businesses
          </h2>

          {/* second line: default bright, dims when page is scrolled */}
          <motion.h2
            // animate color: default = #e4e4e4, when scrolled -> #b5b5b5
            animate={{ color: isScrolled ? "#e4e4e4" : "#b5b5b5" }}
            initial={{ color: "#e4e4e4" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-center"
          >
            by providing you with the highest quality designs.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={smallUp}
          className="flex items-center gap-12 mt-20"
        >
          <div className="w-56 h-14 border-2 rounded-xl border-white flex items-center justify-center group cursor-pointer">
            <div className="flex items-center gap-3 ">
              <h3 className="text-[25px]">Gallery</h3>
              <Image
                src="/arrow-right.svg"
                alt="arrow"
                width={22}
                height={22}
                className="group-hover:translate-x-2 duration-300"
              />
            </div>
          </div>
          <div className="w-56 h-14 border-2 rounded-xl border-white bg-gradient-to-l from-[#999999] to-white flex items-center justify-center group cursor-pointer">
            <div className="flex items-center gap-3 ">
              <h3 className="text-[25px] text-black">Get Started</h3>
              <Image
                src="/arrow-right-black.svg"
                alt="arrow"
                width={22}
                height={22}
                className="group-hover:translate-x-2 duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
