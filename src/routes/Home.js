import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import WorkHome from "../components/WorkHome";
import BackToTopButton from "../components/BackToTopButton";
import ButtonView from "../components/ButtonView";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <WorkHome />
      <ButtonView />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
