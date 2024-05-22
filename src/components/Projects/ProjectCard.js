"use client";

import { urlFor } from "@/utils/UrlBuilder";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useGlobalStore } from "../../../store/useStore";

const ProjectCard = ({ data }) => {
  const { setBgImg } = useGlobalStore();

  const handleHoverEnter = () => {
    setBgImg(urlFor(data.images[0]).url());
  };

  return (
    <Link
      href={`/work/${data.slug.current}/#name`}
      className="group relative w-[350px] md:w-[450px] cursor-pointer"
    >
      <div className="w-fit h-fit overflow-hidden">
        <motion.img
          onMouseEnter={handleHoverEnter}
          className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] h-[350px] w-[350px] md:h-[450px] md:w-[450px] hover:scale-105 object-cover transition-all duration-500"
          src={urlFor(data.images[0]).url()}
          alt={data.title}
        />
      </div>
      <div className="w-[350px] md:w-[450px] mt-2">
        <h1 className="text-lg font-semibold mb-2">{data.title}</h1>
        <p className="break-words overflow-hidden">{data.description} </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
