import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectHBanks from "../../components/ProjectHBanks";
import PageTitle from "../../components/PageTitle";

function ProjectTwo() {
  return (
    <div>
      <PageTitle title="Projeto HBanks Responsivo - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectHBanks />
      <Footer />
    </div>
  );
}

export default ProjectTwo;
