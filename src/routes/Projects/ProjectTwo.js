import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectHBanks from "../../components/ProjectHBanks";

function ProjectTwo() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectHBanks />
      <Footer />
    </div>
  );
}

export default ProjectTwo;
