import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectPrompts from "../../components/ProjectPrompts";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectNine() {
  return (
    <div>
      <PageTitle title="Projeto Prompts Full-Stack - DownloaderSystem" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectPrompts />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectNine;
