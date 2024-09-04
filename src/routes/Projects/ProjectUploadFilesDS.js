import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HImage2 from "../../components/HImage2";
import PageTitle from "../../components/PageTitle";
import BackToTopButton from "../../components/BackToTopButton";
import UploadFilesDS from "../../components/ProjectUploadFilesDS";

function ProjectUploadFilesDSA() {
  return (
    <div>
      <PageTitle title="Projeto Upload Files DS Responsivo - Portfolio" />
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes." />
      <UploadFilesDS />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default ProjectUploadFilesDSA;
