import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import LeadForm from "./component/LeadForm"
import Banner from "./component/Banner";


import Home from "./website/Home";
import About from "./website/About";
import Contact from "./website/Contact";
import Projects from "./website/Projects";
import Studio from "./website/Studio";

import Zynna from "./website/Zynna"
import Textile from "./website/Textile";
import ZynnaHomes from "./website/ZynnaHomes";
import RSD from "./website/RSD";

// Circle navigation pages
import FindUs from "./website/FindUs";
import Foundation from "./website/Foundation";
import ArtAndCraft from "./website/ArtAndCraft";


const App = () => {
  return (
    <Router>
      <div className="font-poppins min-h-screen bg-black text-white flex flex-col">
        <Header />
        <Banner />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/studio" element={<Studio />} />

            <Route path="/zynna" element={<Zynna />} />
            <Route path="/textile" element={<Textile />} />
             <Route path="/homes" element={<ZynnaHomes />} />
              <Route path="/rsd" element={<RSD />} />

            {/* Circle navigation */}
            <Route path="/find-us" element={<FindUs />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/art-and-craft" element={<ArtAndCraft />} />
          </Routes>
        </main>

        {/* LEAD FORM – APPEARS ON EVERY PAGE */}
        <LeadForm />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
