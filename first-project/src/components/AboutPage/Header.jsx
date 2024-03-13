import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.cjs";
import About from "./About";
import hero from "../../assets/5L/hero.jpg";
import ContactPage from "../HomePage/contact/ContactSection";
import CoreValue from "./CoreValue";
import Team from "./Team";

const Header = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(10, 0, 0, 0.8), rgba(10, 0, 0, 1)),url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  const bg = {
    background: "#E7E5E4",
  };

  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="" style={bg}>
      {/* about header */}
      <div
        className="header w-full px-4 md:px-8 lg:px-16 xl:px-20 pt-48 pb-16"
        style={styles}
      >
        <h1
          className="text-stone-200 text-7xl font-bold capitalize"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          who we are
        </h1>
      </div>
      {/* about content */}
      <About />
      <CoreValue />
      <Team />
      <ContactPage />
    </section>
  );
};

export default Header;
