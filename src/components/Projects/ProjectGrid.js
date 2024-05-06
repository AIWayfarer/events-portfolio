import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ data }) => {
  return (
    <div id="work" className="relative">
      <div className="w-full h-full md:h-[90vh] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 space-y-5 md:space-y-0 z-10">
        <div className="col-span-2  overflow-hidden z-10">
          <ProjectCard data={data[0]} />
        </div>
        <div className="md:row-span-2 col-span-1  overflow-hidden z-10">
          <ProjectCard data={data[1]} />
        </div>
        <div className="md:row-span-1 col-span-1 overflow-hidden z-10">
          <ProjectCard data={data[2]} />
        </div>
        <div className="md:row-span-1 col-span-1  overflow-hidden z-10">
          <ProjectCard data={data[3]} />
        </div>
      </div>
      <div className="circle1 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px]  bg-[#cee4e8] rounded-full absolute right-[-100px] bottom-[-200px] z-[-5]"></div>
      <div className="circle2 w-[200px] h-[200px]  lg:w-[450px] lg:h-[450px] bg-[#f2c7db] rounded-full absolute left-[-100px] top-[-150px] z-[-5]"></div>
    </div>
  );
};

export default ProjectGrid;
