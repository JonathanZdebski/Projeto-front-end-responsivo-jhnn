import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import ProjectEcommerce from "../../components/ProjectEcommerce";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";

function ProjectOne() {
  return (
    <div>
      <PageTitle title="Projeto Ecommerce John Dala - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectEcommerce />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectOne;
