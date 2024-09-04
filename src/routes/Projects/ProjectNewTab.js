import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import ProjectNewTab from "../../components/ProjectNewTab";

function ProjectNewTabA() {
  return (
    <div>
      <PageTitle title="Projeto NewTab - DownloaderSystem" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectNewTab />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectNewTabA;
