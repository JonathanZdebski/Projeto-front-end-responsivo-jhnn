import React from "react";
import "./index";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import ProjectOne from "./routes/Projects/ProjectOne";
import ProjectTwo from "./routes/Projects/ProjectTwo";
import ProjectThree from "./routes/Projects/ProjectThree";
import ProjectFour from "./routes/Projects/ProjectFour";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projeto-ecommerce-john-dala" element={<ProjectOne />} />
        <Route path="/projeto-hbanks-responsivo" element={<ProjectTwo />} />
        <Route path="/projeto-viagem-responsivo" element={<ProjectThree />} />
        <Route path="/projeto-portfolio-responsivo" element={<ProjectFour />} />
      </Routes>
    </>
  );
}

export default App;
