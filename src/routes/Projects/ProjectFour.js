import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectPortfolio from "../../components/ProjectPortfolio";
import PageTitle from "../../components/PageTitle";

function ProjectFour() {
  return (
    <div>
      <PageTitle title="Projeto Portfolio Responsivo - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectPortfolio />
      <Footer />
    </div>
  );
}

export default ProjectFour;
