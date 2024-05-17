"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const WelcomeTitle = ({ title }) => {
  const titleArr = title.split("");
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const moveSpeed = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const negitiveMoveSpeed = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [20, 65]);
  const rotateLK = useTransform(scrollYProgress, [0, 1], [-15, -55]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [25, 70]);
  const rotateE = useTransform(scrollYProgress, [0, 1], [10, 55]);

  const transformStyles = (char) => {
    switch (char) {
      case "B":
        return {
          top: "100px",
          x: moveSpeed,
          rotate: rotateB,
        };
      case "L":
        return {
          top: "130px",
          y: moveSpeed,
          rotate: rotateLK,
        };
      case "A":
        return {
          top: "70px",
          x: negitiveMoveSpeed,
          rotate: rotateA,
        };
      case "K":
        return {
          top: "140px",
          y: negitiveMoveSpeed,
          rotate: rotateLK,
        };
      case "E":
        return {
          top: "90px",
          y: moveSpeed,
          rotate: rotateE,
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      ref={ref}
      className="text-center pt-[200px] w-full h-full"
    >
      <motion.div className="flex relative flex-row justify-center">
        {titleArr.map((char, index) => {
          const styles = transformStyles(char);
          return (
            <div
              key={index}
              className="w-[220px] text-center flex flex-row justify-center h-fit"
            >
              <motion.span
                style={styles}
                transition={{ type: "smooth", ease: "easeInOut" }}
                className="absolute font-black text-[20rem]"
              >
                {char}
              </motion.span>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WelcomeTitle;
