import AboutMe from "@/components/About/AboutMe";
import Qoute from "@/components/About/Qoute";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import Welcome from "@/components/Welcome/Welcome";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {
  let homeData = await fetchData(
    "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22homePage%22%5D%5B0%5D"
  );

  let projectsData = await fetchData(
    "https://9n04icih.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22project%22%5D%7B%0A++title%2C+description%2C+slug%2C+images%0A%7D"
  );

  return (
    <div className="w-full h-full  px-5">
      <div  className=" h-full flex flex-col gap-[400px]">
        <Header home={true} />
        <Welcome />
        <AboutMe data={homeData.about} />
        <Qoute data={homeData.quote} />
      </div>
      <ProjectGrid data={projectsData} />
      <Footer />
    </div>
  );
}
