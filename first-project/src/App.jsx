import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import banner from "./assets/banner-bg.jpg";
import CoreValue from "./components/home/CoreValue";
import HomeSection from "./components/home/HomeSection";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(45, 5, 1, 0.75)),url(${banner})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-full" style={styles}>
      <Nav />
      <HomePage />
      <CoreValue />
    </div>
  );
};

export default App;
