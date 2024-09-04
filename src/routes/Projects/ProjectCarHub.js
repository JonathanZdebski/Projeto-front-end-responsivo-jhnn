import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import ProjectCarHub from "../../components/ProjectCarHub";

function ProjectCarHubA() {
  return (
    <div>
      <PageTitle title="Projeto CarHub - DownloaderSystem" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectCarHub />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectCarHubA;
