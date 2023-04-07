import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectViagem from "../../components/ProjectViagem";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectThree() {
  return (
    <div>
      <PageTitle title="Projeto Viagem Responsivo - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectViagem />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectThree;
