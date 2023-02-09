import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HImage2 from "../components/HImage2";
import AboutContent from "../components/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <HImage2
        heading="ABOUT."
        text="Sou um desenvolvedor amigável de Front-end."
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
