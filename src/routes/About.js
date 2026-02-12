import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HImage2 from "../components/HImage2";
import AboutContent from "../components/AboutContent";
import PageTitle from "../components/PageTitle";

function About() {
  return (
    <div>
      <PageTitle title="Quem Sou - Portfolio" />
      <Navbar />

      <HImage2
        heading="ABOUT."
        text="Desenvolvedor Front-end focado em criar experiências digitais modernas e acessíveis."
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
