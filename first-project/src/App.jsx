import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import hero from "./assets/5L/hero.jpg";
import CoreValue from "./components/home/CoreValue";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/services/ServiceSection";
import PartnerSection from "./components/about/About";
import ContactPage from "./components/contact/ContactPage";
import NewsPage from "./components/news/NewsPage";
import ProductSection from "./components/products/ProductSection";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.9)),url(${hero})`,
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
        {/* <CoreValue /> */}
      </div>
      <AboutSection />
      {/* <PartnerSection /> */}
      <ServiceSection />
      <ProductSection />
      <NewsPage />
      <ContactPage />
    </section>
  );
};

export default App;
