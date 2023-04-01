import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectViagem from "../../components/ProjectViagem";

function ProjectThree() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectViagem />
      <Footer />
    </div>
  );
}

export default ProjectThree;
