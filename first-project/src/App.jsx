import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import banner from "./assets/banner-bg.jpg";
import CoreValue from "./components/home/CoreValue";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/services/ServiceSection";
import PartnerSection from "./components/about/PartnerSection";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(45, 5, 1, 0.75)),url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <section>
      <div className="w-full min-h-screen pb-16" style={styles}>
        <Nav />
        <HomePage />
        <CoreValue />
      </div>
      <AboutSection />
      <PartnerSection />
      <ServiceSection />
    </section>
  );
};

export default App;
