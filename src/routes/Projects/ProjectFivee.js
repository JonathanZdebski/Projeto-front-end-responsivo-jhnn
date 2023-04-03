import React from "react";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import Navbar from "../../components/Navbar";
import ProjectGen from "../../components/ProjectGen";

function ProjectFivee() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectGen />
      <Footer />
    </div>
  );
}

export default ProjectFivee;
