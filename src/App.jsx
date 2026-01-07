import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Contact from "./website/Contact";
import Projects from "./website/Projects";
import Home from "./website/Home";
import About from "./website/About";
import Studio from "./website/Studio";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
