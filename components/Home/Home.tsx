
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero"
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden ">
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Experience/>
     <Contact/>
    </div>
  )
}

export default Home;