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

import ProjectSix from "./routes/Projects/ProjectSix";
import ProjectSeven from "./routes/Projects/ProjectSeven";
import ProjectNine from "./routes/Projects/ProjectNine";
import ProjectCarHubA from "./routes/Projects/ProjectCarHub";
import ProjectNewTabA from "./routes/Projects/ProjectNewTab";
import UploadFilesDS from "./routes/Projects/ProjectUploadFilesDS";
import ProjectOkrPlanner from "./routes/Projects/ProjectOkrPlanner";
import ProjectEDireta from "./routes/Projects/ProjectEdicaoDireta";

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
        <Route path="/projeto-downloader-system" element={<ProjectSix />} />
        <Route
          path="/projeto-downloader-system-nextjs"
          element={<ProjectSeven />}
        />
        <Route path="/projeto-prompts-full-stack" element={<ProjectNine />} />
        <Route path="/projeto-carhub" element={<ProjectCarHubA />} />
        <Route path="/projeto-newtab" element={<ProjectNewTabA />} />
        <Route path="/projeto-uploadfilesds" element={<UploadFilesDS />} />
        <Route path="/projeto-edicao-direta" element={<ProjectEDireta />} />
        <Route path="/projeto-okr-planner" element={<ProjectOkrPlanner />} />
      </Routes>
    </>
  );
}

export default App;
