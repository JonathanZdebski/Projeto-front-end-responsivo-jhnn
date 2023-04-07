import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectPortfolio from "../../components/ProjectPortfolio";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectFour() {
  return (
    <div>
      <PageTitle title="Projeto Portfolio Responsivo - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectPortfolio />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectFour;
