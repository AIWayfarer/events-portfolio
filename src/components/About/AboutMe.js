"use client";
import { urlFor } from "@/utils/UrlBuilder";
import { motion } from "framer-motion";
import React from "react";
import PortableText from "react-portable-text";

const AboutMe = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap-reverse justify-center gap-10 items-center  w-full relative ">
      <div className="max-w-[800px] z-10">
        <motion.h1
          viewport={{ once: true, amount: 0.7 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "smooth", ease: "easeInOut" }}
          className=" text-7xl playfair heading flex flex-col mb-10"
        >
          <span>
            Wedding <span className="text-pink-300">+</span>
          </span>{" "}
          <span className="pl-10">
            <motion.span className="hover-underline-animation ">
              Event
            </motion.span>{" "}
            Planner.
          </span>
        </motion.h1>
        <motion.div
          viewport={{ once: true, amount: 0.7 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "smooth", ease: "easeInOut" }}
        >
          <PortableText content={data.content} />
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true, amount: 0.7 }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "smooth", ease: "easeInOut" }}
        className=" z-10"
      >
        <span className="">
          <img
            className="w-[400px] h-[400px] rounded-full"
            src={urlFor(data.image).url()}
          />
        </span>
      </motion.div>
      <div className="circle1 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-[#f2c7db] rounded-full absolute right-[-100px] bottom-[-150px] z-0"></div>
      <div className="circle2 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-[#cee4e8] rounded-full absolute left-[-100px] top-[-100px] z-0"></div>
    </div>
  );
};

export default AboutMe;
