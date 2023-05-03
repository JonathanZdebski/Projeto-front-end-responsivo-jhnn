import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectDownloaderNext from "../../components/ProjectDownloaderNext";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectSix() {
  return (
    <div>
      <PageTitle title="Projeto DownloaderSystem - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectDownloaderNext />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectSix;
