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
    <div id="work" className=" relative">
      <div
        ref={containerRef}
        style={{ height: `${data.length * 60}svh` }}
        className=" w-full"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: "all" }}
              transition={{ duration: 0.8, type: "smooth", ease: "easeInOut" }}
              exit={{ opacity: 0 }}
              style={{
                background: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px)",
                opacity: "80%",
              }}
              className="w-full bg-cover absolute top-0 h-screen "
            ></motion.div>
          </AnimatePresence>
          <motion.div style={{ x }} className="flex gap-10 pl-20 ">
            {data &&
              data.map((card) => <ProjectCard key={card.id} data={card} />)}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
