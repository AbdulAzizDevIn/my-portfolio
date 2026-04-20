"use client";
import { useEffect } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  {/* for animation */}
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS()
  });
  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
