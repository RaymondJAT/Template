import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import hero from "./assets/hero-banner.jpg";
import CoreValue from "./components/home/CoreValue";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/services/ServiceSection";
import PartnerSection from "./components/about/PartnerSection";
import ContactPage from "./components/contact/ContactPage";
import NewsPage from "./components/news/NewsPage";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(85, 0, 0, 0.4)),url(${hero})`,
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
      <ContactPage />
      <NewsPage />
    </section>
  );
};

export default App;
