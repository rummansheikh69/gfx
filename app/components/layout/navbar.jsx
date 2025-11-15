"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import gsap from "gsap";

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
    document.documentElement.animate(
      [
        {
          scale: 1,
          transform: "translateY(0%)",
          rotate: "0deg",
          opacity: 1,
        },
        {
          scale: 1.2,
          transform: "translateY(-10%)",
          rotate: "-5deg",
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
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

  return (
    <div className=" w-full fixed top-0 inset-x-0 z-40 site-navbar">
      <div className=" px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-24 h-24 flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className=" w-32 flex items-center justify-center bg-transparent backdrop-blur-[4px]  py-3 rounded-md"
          >
            <h1 className=" text-3xl font-tommy-regular tracking-wide leading-none -mt-3  bg-gradient-to-r from-white via-white to-[#aeaeae] bg-clip-text text-transparent">
              UXGFX®
            </h1>
          </Link>
          <div className=" flex items-center bg-transparent backdrop-blur-[4px] px-5 py-3 rounded-md gap-10 lg:gap-14 text-lg 2xl:text-xl text-[#a8a8a8]">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
