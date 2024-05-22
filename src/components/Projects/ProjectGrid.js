"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useGlobalStore } from "../../../store/useStore";
import { urlFor } from "@/utils/UrlBuilder";

const ProjectGrid = ({ data }) => {
  const containerRef = useRef();

  const { bgImg, setBgImg } = useGlobalStore();

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    if (bgImg === null) {
      setBgImg(urlFor(data[0].images[0]).url());
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div id="work" className=" relative ">
      <div
        ref={containerRef}
        style={{ height: `${data.length * 60}svh` }}
        className=" w-full  relative"
      >
        <div className="sticky pt-[200px] md:pt-0 top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 pl-20 ">
            {data &&
              data.map((card, index) => (
                <ProjectCard index={index} key={card.id} data={card} />
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
