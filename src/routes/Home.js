import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import WorkHome from "../components/WorkHome";
import BackToTopButton from "../components/BackToTopButton";
import ButtonView from "../components/ButtonView";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <div>
      <PageTitle title="Portfólio - Jonathan Zdebski" />
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
