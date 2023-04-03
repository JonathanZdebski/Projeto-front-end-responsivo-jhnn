import React from "react";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import Navbar from "../../components/Navbar";
import ProjectGen from "../../components/ProjectGen";
import PageTitle from "../../components/PageTitle";

function ProjectFivee() {
  return (
    <div>
      <PageTitle title="Projeto Gen - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectGen />
      <Footer />
    </div>
  );
}

export default ProjectFivee;
