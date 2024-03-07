import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/HomePage/navbar/Nav";
import HomePage from "./components/HomePage/home/Homes";
import CoreValue from "./components/HomePage/home/CoreValue";
import AboutSection from "./components/HomePage/about/AboutSection";
import ServiceSection from "./components/HomePage/services/ServiceSection";
import PartnerSection from "./components/HomePage/about/Eme";
import ContactPage from "./components/HomePage/contact/ContactSection";
import NewsPage from "./components/HomePage/news/NewsSection";
import ProductSection from "./components/HomePage/products/ProductSection";
import AboutPage from "./components/AboutPage/About";
import ArticlePage from "./components/ArticlePage/News";
import ContactPage from "./components/HomePage/contact/ContactSection";
import ServicePage from "./components/Service Page";
// images
import hero from "./assets/5L/hero.jpg";
import HomeSection from "./components/HomePage/home/HomeSection";
import ContactForm from "./components/HomePage/contact/ContactForm";
import News from "./components/ArticlePage/News";
import Services from "./components/ServicePage/Services";
import About from "./components/AboutPage/About";
import Products from "./components/ProductPage/Products";
import Contacts from "./components/ContactPage/Contacts";

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
        <HomePage />
        {/* Routing */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/news" element={<ArticlePage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>

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
