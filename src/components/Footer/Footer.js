import { urlFor } from "@/utils/UrlBuilder";
import { fetchData } from "@/utils/fetchData";
import * as LucideIcons from "lucide-react";
import React from "react";

const SocialLink = async ({ iconName, link }) => {
  // Get the icon component dynamically
  const IconComponent = LucideIcons[iconName];

  // Check if the icon exists
  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent />
    </a>
  );
};

const Footer = async () => {
  const data = await fetchData(
    "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22footer%22%5D%5B0%5D"
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="p-5 lg:p-20 flex flex-wrap gap-10 justify-between">
        <div className="flex items-center">
          {data.logo && (
            <img className="w-[400px]" src={urlFor(data.logo).url()} />
          )}
        </div>
        <div className="flex gap-3 items-center">
          {data.links &&
            data.links.map((linkItem, index) => (
              <SocialLink
                key={index}
                iconName={linkItem.icon}
                link={linkItem.link}
              />
            ))}
        </div>
      </div>
      <div className="p-5 bg-white/5 text-center">
        {data.copyrightText && <p>{data.copyrightText}</p>}
      </div>
    </div>
  );
};

export default Footer;
