import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectPokeNext from "../../components/ProjectPokeNext";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectEight() {
  return (
    <div>
      <PageTitle title="Projeto PokeNext - DownloaderSystem" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectPokeNext />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectEight;
