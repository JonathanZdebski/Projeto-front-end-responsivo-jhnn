import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectEcommerce from "../../components/ProjectEcommerce";

function ProjectOne() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectEcommerce />
      <Footer />
    </div>
  );
}

export default ProjectOne;
