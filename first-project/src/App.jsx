import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/HomePage/navbar/Nav";
import HomePage from "./components/HomePage/home/HomePage";
import CoreValue from "./components/HomePage/home/CoreValue";
import AboutSection from "./components/HomePage/about/AboutSection";
import ServiceSection from "./components/HomePage/services/ServiceSection";
import PartnerSection from "./components/HomePage/about/About";
import ContactPage from "./components/HomePage/contact/ContactPage";
import NewsPage from "./components/HomePage/news/NewsPage";
import ProductSection from "./components/HomePage/products/ProductSection";
// images
import hero from "./assets/5L/hero.jpg";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.7), rgba(10, 0, 0, 0.9)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    innerWidth: "100%",
  };

  return (
    <section>
      <div className="w-full min-h-screen pb-16" style={styles}>
        <Nav />
        <main>
          <Routes>
            <Route />
          </Routes>
        </main>
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
