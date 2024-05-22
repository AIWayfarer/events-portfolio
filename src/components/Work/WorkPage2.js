"use client"

import { urlFor } from "@/utils/UrlBuilder";
import { useScroll, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import { useGlobalStore } from "../../../store/useStore";

const WorkPage = ({ projectData }) => {
  const containerRef = useRef();

  const setAnimate = useGlobalStore((state) => state.setAnimate);
  const animate = useGlobalStore((state) => state.animate);

  // const [animate, setAnimate] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  useEffect(()=>{
console.log("changed :", animate);
  },[animate])

  useEffect(() => {
    const handleScroll = (value) => {
      setAnimate(value > 0.1);
    };

    const unsubscribe = scrollYProgress.on("change", handleScroll);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="p-20 h-[100svh] justify-center gap-3 flex flex-row flex-wrap w-full">
        <div className="relative justify-center flex flex-col w-full">
          <div className="relative w-full flex justify-center items-center">
            {projectData.images.slice(0, 4).map((img, index) => {
              const position = [
                { opacity: 1, x: 0, rotate: 3 },
                { opacity: 1, x: -100, y: -50, rotate: -7 },
                { opacity: 1, x: 200, y: -130, rotate: 7 },
                { opacity: 1, x: -200, y: -70, rotate: 10 },
              ];

              const zIndex = projectData.images.length - index;

              return (
                <>
                  {!animate && (
                    <motion.div
                      layoutId={`img-${index}`}
                      className="absolute"
                      style={{ zIndex }}
                    >
                      <motion.img
                        animate={position[index]}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          type: "smooth",
                        }}
                        className="w-[400px] object-cover h-[400px]"
                        src={urlFor(img).url()}
                      />
                    </motion.div>
                  )}
                </>
              );
            })}
          </div>
          <div
            id="name"
            className="w-full flex flex-col justify-center items-center translate-y-[200px] z-30"
          >
            <motion.h1
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                type: "smooth",
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl text-center font-black text-[#d10000]"
            >
              {projectData.title}
            </motion.h1>
            <motion.p
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                type: "smooth",
                delay: 0.1,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl text-center max-w-full mt-2 lg:max-w-[80vw] noto font-medium text-white"
            >
              {projectData.description}
            </motion.p>
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex flex-row gap-5 justify-center items-start flex-wrap p-3 md:p-20"
      >
        {projectData.images.map((img, index) => (
          <motion.div
            key={index}
            whileInView={() => setAnimate(true)}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 1 }}
            layoutId={`img-${index}`}
            className=""
          >
            <motion.img
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                type: "smooth",
              }}
              className="w-[400px] object-cover h-[400px]"
              src={urlFor(img).url()}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default WorkPage;
