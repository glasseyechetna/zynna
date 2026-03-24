import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import LeadForm from "./component/LeadForm";
import Banner from "./component/Banner";
import ZynnaLoadPage from "./component/ZynnaLoadPage";

import HomeBanner from "./website/HomeBanner";
import Home from "./website/Home";
import About from "./website/About";
import Contact from "./website/Contact";
import Projects from "./website/Projects";
import Studio from "./website/Studio";

import Zynna from "./website/Zynna";
import Textile from "./website/Textile";
import ZynnaHomes from "./website/ZynnaHomes";
import RSD from "./website/RSD";

import FindUs from "./website/FindUs";
import Foundation from "./website/Foundation";
import ArtAndCraft from "./website/ArtAndCraft";

const AppContent = () => {
  const location = useLocation();
  const isHomeBannerPage = location.pathname === "/";
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleRefresh = () => {
      sessionStorage.removeItem("zynna_loader_done");
    };

    window.addEventListener("beforeunload", handleRefresh);

    const alreadyLoaded = sessionStorage.getItem("zynna_loader_done");
    if (alreadyLoaded) {
      setShowLoader(false);
    }

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  const handleLoaderFinish = () => {
    sessionStorage.setItem("zynna_loader_done", "true");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <ZynnaLoadPage onFinish={handleLoaderFinish} />}

      <div
        className={`font-poppins min-h-screen bg-black text-white flex flex-col ${
          showLoader ? "h-screen overflow-hidden" : ""
        }`}
      >
        {!isHomeBannerPage && <Header />}
        {!isHomeBannerPage && <Banner />}

        <main className={`flex-1 ${isHomeBannerPage ? "m-0 p-0" : ""}`}>
          <Routes>
            <Route path="/" element={<HomeBanner />} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/studio" element={<Studio />} />

            <Route path="/zynna" element={<Zynna />} />
            <Route path="/textile" element={<Textile />} />
            <Route path="/homes" element={<ZynnaHomes />} />
            <Route path="/rsd" element={<RSD />} />

            <Route path="/find-us" element={<FindUs />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/art-and-craft" element={<ArtAndCraft />} />
          </Routes>
        </main>

        {!isHomeBannerPage && <LeadForm />}
        {!isHomeBannerPage && <Footer />}
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;