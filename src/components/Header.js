"use client";

import { urlFor } from "@/utils/UrlBuilder";
import { fetchData } from "@/utils/fetchData";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ home }) => {
  const controls = useAnimation();
  const [logo, setLogo] = useState();

  useEffect(() => {
    const fetchLogo = async () => {
      let logoData = await fetchData(
        "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22homePage%22+%5D%5B0%5D%7B%0A++logo%0A%7D"
      );

      setLogo(logoData.logo);
    };

    fetchLogo();

    if (home) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight - 300;
        const isScrolled = scrollY > viewportHeight;

        if (home) {
          controls.start({
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -50,
          });
        } else {
          controls.start({
            opacity: 1,
            y: 0,
          });
        }
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      controls.start({
        opacity: 1,
        y: 0,
      });
    }
  }, []);

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed top-0  flex flex-row z-50 w-full  justify-between items-center p-5 lg:p-10"
    >
      <div className="relative hidden lg:flex">
        {logo && <img className="w-28" src={urlFor(logo).url()} />}
        <div className="w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px]  bg-[#215d64] rounded-full absolute left-0 top-0 -translate-y-[66%] -translate-x-1/2 z-[-5]"></div>
      </div>
      <div className="space-x-5 playfair text-2xl">
        <a href={home ? `#about` : `/#about`}>About</a>
        <a href={home ? `#work` : `/#work`}>Work</a>
        <a href="/contact">Contact</a>
      </div>
    </motion.div>
  );
};

export default Header;
