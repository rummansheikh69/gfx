import Image from "next/image";
import React from "react";

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

  return (
    <div className=" w-full fixed top-0 inset-x-0 z-40 site-navbar">
      <div className=" px-5 md:px-10 lg:px-14 xl:px-20 2xl:px-24 h-24 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className=" w-32 flex items-center justify-center bg-transparent backdrop-blur-[4px]  py-3 rounded-md">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>
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
            <a href="#" className="hover:text-[#e9e9e9] duration-400">
              Gallery
            </a>
            <a href="#" className="hover:text-[#e9e9e9] duration-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
