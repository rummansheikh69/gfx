"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Navbar from "./components/layout/navbar";
import Hero from "./components/hero/hero";
import {
  motion,
  animate as fmAnimate,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import Services from "./components/services/services";
import Review from "./components/review/review";
import Quote from "./components/quote/quote";

function Splash({ onFinish, splashControls, mv }) {
  const [num, setNum] = useState(0);
  const width = useTransform(mv, (v) => `${v}%`);

  useEffect(() => {
    const mvControls = fmAnimate(mv, 100, {
      duration: 2,
      ease: "linear",
      onUpdate: (v) => setNum(Math.round(v)),
      onComplete: async () => {
        // when progress completes, start both slide-up (splash) and content lift simultaneously
        onFinish?.(); // signal start of content animation (we'll still unmount splash after animations done)
      },
    });

    return () => mvControls.stop();
  }, [mv, onFinish]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={splashControls}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[#0b0b0b] bg-opacity-95"
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="text-4xl md:text-6xl font-semibold text-white tracking-wider">
          {num}%
        </div>

        <div className="w-64 md:w-96 h-2 bg-gray-800 rounded overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ width }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="text-xs text-gray-400 animate-pulse">Loading</div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [startContentChildren, setStartContentChildren] = useState(false);

  const mv = useMotionValue(0);
  const splashControls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // prevent page from scrolling while splash is active
  useEffect(() => {
    if (showSplash) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  // called by Splash when numeric progress hits 100%
  async function handleSplashComplete() {
    // ensure we're at top of page before animating
    if (typeof window !== "undefined") window.scrollTo({ top: 0, left: 0 });

    // allow hero children to start their staggered entrance while wrapper moves
    setStartContentChildren(true);

    // start both animations in parallel so they move in sync:
    const splashAnim = splashControls.start({
      y: "-100vh",
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // content starts below the viewport; animate it up into place exactly while splash moves up
    const contentAnim = contentControls.start({
      y: "0vh",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // wait for splash to fully finish moving up, then remove it from DOM
    await Promise.all([splashAnim, contentAnim]);
    setShowSplash(false);
  }

  return (
    <div className="font-tommy-light font-semibold text-white bg-[#121212] min-h-screen">
      {/* Splash - controls passed so we can drive its slide-up when progress completes */}
      {showSplash && (
        <Splash
          onFinish={handleSplashComplete}
          splashControls={splashControls}
          mv={mv}
        />
      )}

      {/* Main content is mounted from the start but positioned below the viewport.
          It will move up in sync with the splash when handleSplashComplete runs. */}
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={contentControls}
        className={`relative h-full w-full bg-[linear-gradient(to_right,#161616_2px,transparent_2px),linear-gradient(to_bottom,#161616_2px,transparent_2px)] bg-[size:50px_50px] ${
          showSplash ? "pointer-events-none" : ""
        }`}
      >
        {/* bottom fade overlay to smoothly blend the grid into the page background */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-56 pointer-events-none z-10 bg-gradient-to-b from-transparent to-[#121212]"
        />

        {/* content above the fade */}
        <div className="relative z-20">
          <Navbar />
          <Hero startAnim={startContentChildren} />
          <Review />
        </div>
      </motion.div>
      <Services />
      <Quote />
    </div>
  );
}
