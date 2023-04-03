import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import HImage2 from "../components/HImage2";
import Work from "../components/Work";
import BackToTopButton from "../components/BackToTopButton";
import PageTitle from "../components/PageTitle";

function Project() {
  return (
    <div>
      <PageTitle title="Meus Projetos - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <Work />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Project;
