import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import ProjectWebsiteInstitucional from "../../components/ProjectWebsiteInstitucional";

function ProjectWebsiteInstitucionalRoute() {
  return (
    <div>
      <PageTitle title="Projeto Website Institucional - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectWebsiteInstitucional />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectWebsiteInstitucionalRoute;
