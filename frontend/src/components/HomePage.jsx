import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ImproveSkills from "./ImproveSkills";
import QuoteSection from "./QuoteSection";
import Mixologists from "./Mixologists";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <Mixologists />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
