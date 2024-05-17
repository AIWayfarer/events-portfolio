"use client";

import { urlFor } from "@/utils/UrlBuilder";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalStore } from "../../../store/useStore";

const ProjectCard = ({ data, index }) => {
  const { setBgImg } = useGlobalStore();

  const handleHoverEnter = () => {
    setBgImg(urlFor(data.images[0]).url());
  };

  return (
    <Link
      href={`/work/${data.slug.current}/#name`}
      className="group shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] relative h-[450px] w-[450px] overflow-hidden cursor-pointer"
    >
      <motion.img
        onMouseEnter={handleHoverEnter}
        
        // onMouseLeave={handleHoverLeave}
        className="w-[60svh] h-[60svh] hover:scale-105  object-cover transition-all duration-500 "
        src={urlFor(data.images[0]).url()}
        alt={data.title}
      />
    </Link>
  );
};

export default ProjectCard;
