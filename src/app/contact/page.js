import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import { fetchData } from "@/utils/fetchData";
import { PortableText } from "next-sanity";
import React from "react";

const page = async () => {
  let data = await fetchData(
    "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22contact%22+%5D%5B0%5D%7B%0A++details%2C+cta%2C+email%0A%7D"
  );

  return (
    <>
      <Header home={false} />
      <div className="p-5 pt-52 md:p-10 lg:p-10 md:pt-52 lg:pt-52 flex flex-col items-center justify-center relative">
        <div className="max-w-[1200px] w-full flex gap-20 flex-col items-start">
          <h1 className=" text-7xl playfair heading underlineText">Contact</h1>
          <div className="flex flex-col lg:flex-row gap-5">
            <div>
              <h1 className=" text-5xl playfair heading hover-underline-animation">
                {data.cta}
              </h1>
              <form
                action={`https://formsubmit.co/${data.email}`}
                method="POST"
                className="my-5 flex gap-3 flex-col"
              >
                <div className="flex flex-col">
                  <label htmlFor="Name" className="text-[#215d64]">
                    Name<span className="text-red-600"> *</span>
                  </label>
                  <input
                    className="bg-[#f3f3f3] p-3 mt-1"
                    type="text"
                    id="Name"
                    name="Name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Email" className="text-[#215d64]">
                    Email<span className="text-red-600"> *</span>
                  </label>
                  <input
                    className="bg-[#f3f3f3] p-3 mt-1"
                    type="text"
                    id="Email"
                    name="Email"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Phone" className="text-[#215d64]">
                    Phone<span className="text-red-600"> *</span>
                  </label>
                  <input
                    className="bg-[#f3f3f3] p-3 mt-1"
                    type="text"
                    id="Phone"
                    name="Phone"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Message" className="text-[#215d64]">
                    Message<span className="text-red-600"> *</span>
                  </label>
                  <textarea
                    rows={"10"}
                    className="bg-[#f3f3f3] p-3 mt-1"
                    name="Message"
                    id="Message"
                  ></textarea>
                </div>
                <button className="bg-[#215d64] p-3 text-white" type="submit">
                  Send
                </button>
              </form>
            </div>
            <div className="flex prose prose-headings:text-4xl flex-col">
              <PortableText value={data.details} />
            </div>
          </div>
        </div>
        <div className=" w-[300px] h-[300px]  lg:w-[900px] lg:h-[900px] bg-[#cee4e8]  rounded-full absolute right-[-550px] bottom-[-100px] z-[-10]"></div>
        <div className=" w-[300px] h-[300px]  lg:w-[900px] lg:h-[900px]  bg-[#f2c7db] rounded-full absolute left-[-550px] top-[100px] z-[-10]"></div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
};

export default page;
