"use client";

import { urlFor } from "@/utils/UrlBuilder";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProjectCard = ({ data }) => {
  const router = useRouter();

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Link
      href={`/work/${data.slug.current}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full overflow-hidden relative cursor-pointer"
    >
      <img
        className="w-full h-full  object-cover transition-all duration-500 "
        style={{ scale: hover ? 1.1 : 1 }}
        src={urlFor(data.images[0]).url()}
        alt={data.title}
      />
      {/* {hover && ( */}
        <div style={{width: "100%", height: "100%"}} className="absolute top-0 bg-red-500 z-30 opacity-50">
          da
        </div>
      {/* )} */}
    </Link>
  );
};

export default ProjectCard;
