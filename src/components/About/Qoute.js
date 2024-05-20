"use client";

import { motion } from "framer-motion";
import React from "react";

const Qoute = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true, amount: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "smooth" }}
      className="flex justify-center items-center w-full relative"
    >
      <div className="flex flex-col gap-5">
        <p className="max-w-[1000px] playfair text-2xl md:text-2xl">{data.text}</p>
        <p className="text-xl font-bold text-[#96c4b3]">{data.author}</p>
      </div>
    </motion.div>
  );
};

export default Qoute;
