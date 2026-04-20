"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NavLinks } from "@/Constant/Constant.";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <a
            href="https://www.overleaf.com/download/project/672b9a0b8d407286678e1153/build/19dabf7359d-d2ec352f7657f42e/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-c-f-2264&enable_pdf_caching=true&popupDownload=true&editorId=7bc0a88e-c70f-48e0-9236-0595b35e70a4"
            className="hidden sm:inline-flex box-border relative z-20  items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Burger Menu */}
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
