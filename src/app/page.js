import AboutMe from "@/components/About/AboutMe";
import Qoute from "@/components/About/Qoute";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-10">
        <Welcome />
        <div className="py-[400px] flex flex-col gap-[400px]">
          <AboutMe />
          <Qoute/>
          <ProjectGrid/>
        </div>
      </main>
          <Footer/>
    </>
  );
}
