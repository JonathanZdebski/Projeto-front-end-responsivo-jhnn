import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import ProjectOkrPlanner from "../../components/ProjectOkrPlanner";

function ProjectOkr() {
  return (
    <div>
      <PageTitle title="Projeto Edição Direta - Portfolio Jonathan Zdebski" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectOkrPlanner />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectOkr;
