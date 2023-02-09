import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import HImage2 from "../components/HImage2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <HImage2 heading="PROJECTS." text="Alguns dos meus trabalhos recentes" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Project;
