import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import BackToTopButton from "../components/BackToTopButton";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
