"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Header = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight - 300;
      const isScrolled = scrollY > viewportHeight;

      controls.start({ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -50 });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed top-0 flex flex-row z-50  w-full justify-between items-center p-5 lg:p-10"
    >
      <div className="relative">
        <h1 className="text-white playfair font-bold text-3xl">Blake</h1>
        <div className="w-[0px] h-[0px]  lg:w-[400px] lg:h-[400px]  bg-[#215d64] rounded-full absolute left-0 top-0 -translate-y-[66%] -translate-x-1/2 z-[-5]"></div>
      </div>
      <div className="space-x-5">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.div>
  );
};

export default Header;
