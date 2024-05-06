"use client";

import Header from "@/components/Header";
import { urlFor } from "@/utils/UrlBuilder";
import { fetchData } from "@/utils/fetchData";
import { motion } from "framer-motion";
import React from "react";

const page = async ({ params }) => {
  let projectData = await fetchData(
    "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22project%22+%26%26+slug.current+%3D%3D+%22project-number-4%22%5D%5B0%5D"
  );

  return (
    <>
      <Header home={false}/>
      <div className="p-10 ">
        <div className="flex flex-col justify-center items-center py-[200px]">
          <div className="max-w-[1000px] w-full">
            <p className="text-sm font-semibold text-[#f4c6da]">
              {projectData.title}
            </p>
            <p className="playfair text-5xl font-bold">{projectData.title}</p>
            <p className="playfair text-3xl font-semibold">
              {projectData.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="p-20 justify-center gap-3 flex flex-row flex-wrap w-full">
            {projectData.images.map((img, index) => (
              <motion.img drag className="w-[400px]" src={urlFor(img).url()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
