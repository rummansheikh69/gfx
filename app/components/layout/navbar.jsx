"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.scss";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./curve";
import { BsArrowRight } from "react-icons/bs";

function Navbar() {
  function handleNavClick(e) {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    // account for fixed navbar height
    const navbarEl = document.querySelector(".site-navbar");
    const navbarHeight = navbarEl ? navbarEl.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }

  const router = useTransitionRouter();
  const pathname = usePathname();

  const pageAnimation = () => {
    const animOld = document.documentElement.animate(
      [
        {
          scale: 1,
          transform: "translateY(0%)",
          rotate: "0deg",
          opacity: 1,
        },
        {
          scale: 0.8,
          transform: "translateY(-10%)",
          rotate: "0deg",
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.8, 0, 0.1, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    const animNew = document.documentElement.animate(
      [
        {
          transform: "translateY(100%)",
        },
        {
          transform: "translateY(0%)",
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    // Ensure transforms don't persist (which breaks fixed positioning / scrolling).
    // When the animations finish, cancel them to remove the final applied transform,
    // and clear any inline transform left on the root element.
    Promise.all([animOld.finished, animNew.finished]).finally(() => {
      try {
        animOld.cancel();
        animNew.cancel();
      } catch (e) {
        /* ignore */
      }
      // make absolutely sure no lingering root transform remains
      document.documentElement.style.transform = "";
    });
  };

  const handleNavigation = (e, path) => {
    if (pathname === path) {
      e.preventDefault();
      return;
    }

    router.push(path, {
      onTransitionReady: pageAnimation,
    });
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" w-full fixed top-0 inset-x-0 z-40 site-navbar">
      <div className=" px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-24 h-24 flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className=" w-32 flex items-center justify-center  bg-transparent backdrop-blur-[4px]  py-2.5 rounded-md"
          >
            <h1 className=" text-2xl 2xl:text-2xl  font-tommy-regular tracking-wide leading-none  bg-gradient-to-r from-white via-white to-[#aeaeae] bg-clip-text text-transparent">
              UXGFX®
            </h1>
          </Link>
          <div className=" hidden md:flex items-center bg-transparent backdrop-blur-[4px] px-5 py-3 rounded-md gap-10 lg:gap-14 text-[16px] 2xl:text-xl text-[#a8a8a8]">
            <a href="#" className="hover:text-[#e9e9e9] duration-400">
              About
            </a>
            <a
              href="#services"
              onClick={handleNavClick}
              className="hover:text-[#e9e9e9] duration-400"
            >
              Pricing
            </a>
            <Link
              href="/gallery"
              onClick={(e) => handleNavigation(e, "/gallery")}
              className="hover:text-[#e9e9e9] duration-400"
            >
              Gallery
            </Link>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="hover:text-[#e9e9e9] duration-400"
            >
              Contact
            </a>
          </div>

          {/* mobile menu */}
          <>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className=" fixed m-[20px] z-[999] w-[40px] h-[40px] flex items-center justify-center right-0 top-0 bg-[#202020] rounded-full cursor-pointer md:hidden"
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </div>
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  variants={menuSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="  w-52 bg-[#252525] h-screen fixed right-0 top-0"
                >
                  <div className=" w-full h-full px-5">
                    <div className=" pb-2 border-b border-zinc-600 mt-20">
                      <span className=" font-tommy-light font-light">
                        Navigation
                      </span>
                    </div>

                    <div className=" mt-10 font-tommy-light">
                      <ul className=" flex flex-col gap-6 text-lg">
                        <li>
                          <a
                            href="#"
                            onClick={() => {
                              handleNavClick;
                              setTimeout(() => setIsActive(false), 500);
                            }}
                            className=" hover:text-[#e9e9e9] duration-400"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={() => {
                              handleNavClick;
                              setTimeout(() => setIsActive(false), 500);
                            }}
                            className=" hover:text-[#e9e9e9] duration-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <Link
                            href="/gallery"
                            onClick={(e) => handleNavigation(e, "/gallery")}
                            className=" hover:text-[#e9e9e9] duration-400 flex items-center gap-2"
                          >
                            <span>Gallery</span>
                            <div>
                              <BsArrowRight className=" mt-1" />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            onClick={() => {
                              handleNavClick;
                              setTimeout(() => setIsActive(false), 500);
                            }}
                            className=" hover:text-[#e9e9e9] duration-400"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Curve />
                </motion.div>
              )}
            </AnimatePresence>
          </>
          {/* mobile menu end */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
