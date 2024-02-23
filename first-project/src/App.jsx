import React from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import HomePage from "./components/home/HomePage";
import banner from "./assets/banner-bg.jpg";

const App = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div>
      <main className="w-screen h-screen " style={styles}>
        <Nav />
        <HomePage />
      </main>
    </div>
  );
};

export default App;
