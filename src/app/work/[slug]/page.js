"use client";

import Header from "@/components/Header";
import WorkPage from "@/components/Work/WorkPage";
import { fetchData } from "@/utils/fetchData";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const page = async ({ params }) => {
  let projectData = await fetchData(
    `https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22project%22+%26%26+slug.current+%3D%3D+%22${params.slug}%22%5D%5B0%5D`
  );

  return (
    <>
      <Header home={false} />
      <div className="p-3 md:p-10 ">
        <WorkPage projectData={projectData} />
      </div>
    </>
  );
};

export default page;
