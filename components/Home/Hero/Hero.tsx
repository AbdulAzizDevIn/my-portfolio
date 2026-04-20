"use client";

import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,#A8E5FD_0%,#F4F4FE_42.3%,#F4F4FE_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,#712A5C_0.1%,#28192E_90%)]"
    >
      {/* content */}
      <div className="relative z-10 text-center">
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-purple-800 dark:text-yellow-300">
            Abdul Aziz
          </span>
        </h1>
        {/* Typewrite effects */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12 "
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Full Stack Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications.
        </p>
        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild className="px-5 py-5 w-fit mx-auto sm:mx-0">
            <a href="#projects">
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button asChild className="px-5 py-5 w-fit mx-auto sm:mx-0">
            <a href="https://www.overleaf.com/download/project/672b9a0b8d407286678e1153/build/19dabf7359d-d2ec352f7657f42e/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-c-f-2264&enable_pdf_caching=true&popupDownload=true&editorId=7bc0a88e-c70f-48e0-9236-0595b35e70a4">
              <Download className="w-5 h-5 mr-3" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
