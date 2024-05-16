"use client";
import { urlFor } from "@/utils/UrlBuilder";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import PortableText from "react-portable-text";

const AboutMe = ({ data }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.2, 1], [250, -250]);

  useEffect(() => {
    scrollYProgress.onChange((e) => console.log(e));
  }, [scrollYProgress]);

  return (
    <div
      ref={ref}
      className="flex  flex-row flex-wrap-reverse justify-center gap-10   w-full relative "
    >
      <div
        style={{ height: "100% !important" }}
        className="max-w-[800px] flex flex-col !justify-between  z-30"
      >
        <motion.div
          viewport={{ once: true, amount: 0.7 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "smooth", ease: "easeInOut" }}
          className="pr-40 mb-20"
        >
          <PortableText content={data.content} />
        </motion.div>
        <motion.h1
          viewport={{ once: true, amount: 0.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "smooth", ease: "easeInOut" }}
          style={{
            x: 200,
          }}
          className=" text-8xl text-right  playfair heading flex flex-col  mb-10"
        >
          <span>
            Wedding <span className="text-white">+</span>
          </span>{" "}
          <span className="pl-10">
            <motion.span className="hover-underline-animation ">
              Event
            </motion.span>{" "}
            Planner.
          </span>
        </motion.h1>
      </div>
      <motion.div
        style={{ y: y }}
        transition={{ duration: 0.7, type: "smooth", ease: "easeInOut" }}
        className=" z-10"
      >
        <span className="">
          <img
            className="max-w-[600px] h-full"
            src={urlFor(data.image).url()}
          />
        </span>
      </motion.div>
      <div className="circle1 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-white/5 rounded-full absolute right-[-100px] bottom-[-150px] z-0 "></div>
      <div className="circle2 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-white/5 rounded-full absolute left-[-100px] top-[-100px] z-0"></div>
    </div>
  );
};

export default AboutMe;
