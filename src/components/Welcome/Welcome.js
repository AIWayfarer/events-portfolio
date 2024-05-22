"use client";

import React, { useRef } from "react";
import WelcomeTitle from "./WelcomeTitle";
import { useScroll } from "framer-motion";

const Welcome = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      className="w-full  h-[100svh] flex flex-col justify-center items-center"
    >
      {/* <video
        className="w-[90vw] h-[90vh]"
        autoPlay
        muted
        src="https://player.vimeo.com/external/369321390.hd.mp4?s=cb7186988c4858a9dc8c7f24bd6b9d0624220574&profile_id=175"
      /> */}
      <WelcomeTitle scrollYProgress={scrollYProgress} title={"EVENTS"} />
      <WelcomeTitle scrollYProgress={scrollYProgress} title={"BY"} />

      <WelcomeTitle scrollYProgress={scrollYProgress} title={"BLAKE"} />
    </div>
  );
};

export default Welcome;
