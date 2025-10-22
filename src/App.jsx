import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopProducts from "./components/TopProducts";
import Discount from "./components/Discount";
import ExploreMore from "./components/ExploreMore";
import About from "./components/About";
import FeaturedTreats from "./components/FeaturedTreats";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <>
      <div className="bg-hero-bg bg-colors-bgDark bg-cover bg-no-repeat bg-center relative">
        <Header scrolled={scrolled} />
        <Hero />
        <div className="absolute z-0 inset-0 h-full bg-colors-bgDark bg-opacity-75 md:bg-opacity-60 lg:bg-opacity-50" />
      </div>

      <TopProducts />

      <div className="bg-discount-bg bg-colors-bgDark bg-cover bg-no-repeat bg-center relative">
        <Discount />
        <div className="z-0 h-full bg-colors-bgDark absolute inset-0 bg-opacity-20 md:bg-opacity-10"></div>
      </div>

      <ExploreMore />

      <div className="bg-about-bg bg-colors-bgDark bg-cover bg-no-repeat bg-center relative">
        <About />
        <div className="z-0 h-full bg-colors-bgDark absolute inset-0 bg-opacity-30 md:bg-opacity-40"></div>
      </div>

      <FeaturedTreats />

      <div className="bg-footer-bg bg-colors-bgDark bg-cover bg-no-repeat bg-center relative">
        <Footer />
        <div className="z-0 h-full bg-colors-bgDark absolute inset-0 bg-opacity-30 md:bg-opacity-40"></div>
      </div>
    </>
  );
}

export default App;
