import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectPortfolio from "../../components/ProjectPortfolio";

function ProjectFour() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectPortfolio />
      <Footer />
    </div>
  );
}

export default ProjectFour;
