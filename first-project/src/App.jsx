import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import banner from "./assets/banner-bg.jpg";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgrounAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
  };

  return (
    <div>
      <main className="w-auto h-screen" style={styles}>
        <Nav />
        <HomePage />
      </main>
    </div>
  );
};

export default App;
