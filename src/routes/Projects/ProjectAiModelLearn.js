import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import ProjectAiModelLearn from "../../components/ProjectAiModelLearn";

function ProjectAiModelLearnRoute() {
  return (
    <div>
      <PageTitle title="Projeto AI Model Learn - Portfolio Jonathan Zdebski" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <ProjectAiModelLearn />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectAiModelLearnRoute;
