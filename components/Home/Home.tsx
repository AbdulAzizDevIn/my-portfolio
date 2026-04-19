
import About from "./About/About";
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
    </div>
  )
}

export default Home;