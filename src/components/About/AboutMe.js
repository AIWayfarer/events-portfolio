"use client";

import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
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
        <motion.p
          viewport={{ once: true, amount: 0.7 }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "smooth", ease: "easeInOut" }}
        >
          An inventive eye, a passion for party planning, and a calming kindness
          on a wedding day are what Mindy Weiss believes has allowed her company
          to withstand the test of time over the past three decades. Known as
          one of the most creative minds in the events community, bringing to
          life the unimaginable in uniquely personal ways is what she does best.
          Mindy and her energetic team plan and produce parties and weddings
          around the world for couples, corporations, non-profit organizations,
          celebrity, and social hosts of all kinds. With a home base in Los
          Angeles and a vast experience on the road, no matter where one
          celebrates, a Mindy Weiss signature event is one that is truly yours,
          never hers. Since launching in 1992, Mindy has expanded her brand into
          product lines, best-selling books, and brand partnerships, continuing
          to bring a sense of whimsy and love to all that she does.
        </motion.p>
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
            src="https://mindyweiss.com/wp-content/uploads/2020/06/mindy-1-1024x1024.jpg"
          />
        </span>
      </motion.div>
      <div className="circle1 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-[#f2c7db] rounded-full absolute right-[-100px] bottom-[-150px] z-0"></div>
      <div className="circle2 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-[#cee4e8] rounded-full absolute left-[-100px] top-[-100px] z-0"></div>
    </div>
  );
};

export default AboutMe;
