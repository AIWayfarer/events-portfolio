"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const ProjectCard = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full overflow-hidden relative cursor-pointer"
    >
      <img
        className="w-full h-full overflow-hidden object-cover transition-all duration-500 "
        style={{ scale: hover ? 1.1 : 1 }}
        src="https://source.unsplash.com/random"
      />
      <motion.div
        style={{ opacity: hover ? 1 : 0 }}
        className="transition-all flex flex-col justify-end w-full h-full duration-700 absolute bottom-0 p-5 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
      >
        <span className="text-2xl text-white font-bold">
          Project Name
        </span>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum
          corrupti dolores iste tempora, vitae unde quod ullam accusamus optio?
        </p>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
