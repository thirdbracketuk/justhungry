"use client";

import { useState } from "react";
import Image from "next/image";
import { LINKS } from "@/constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScroll = (targetID: string) => {
    const targetElement = document.getElementById(targetID);
    if (!targetElement) return;

    const navbarOffset = 80;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarOffset;

    let start = window.scrollY;
    let distance = offsetPosition - start;
    let startTime: number | null = null;
    const duration = 1000;
    const easingFunction = (t: number) => t * (2 - t);

    function scrollAnimation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easingFunction(progress);

      window.scrollTo(0, start + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      } else {
        setIsMobileMenuOpen(false);
      }
    }

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <Image src="/assets/logo2.svg" alt="logo" width={150} height={30} />

        <div className="hidden items-center space-x-4 lg:flex">
          {LINKS.map((link, index) => (
            <button
              key={index}
              className={`text-sm flex items-center gap-4 hover:opacity-50 ${
                index !== 0 ? "border-l border-neutral-300/20 pl-4" : ""
              }`}
              onClick={() => smoothScroll(link.targetId)}
            >
              {link.text}
            </button>
          ))}
          <a
            target="_blank"
            className="text-xs font-semibold text-white px-3 py-2 bg-gradient-to-l from-amber-500 to-orange-500 rounded-full flex items-center gap-1"
            href="https://www.thirdbracket.co.uk/contact"
          >
            Get a Website
            <BsArrowUpRight size={11} />
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <button
              key={index}
              className="block p-4 uppercase tracking-tighter"
              onClick={() => smoothScroll(link.targetId)}
            >
              {link.text}
            </button>
          ))}
          <a
            className="block p-4 uppercase tracking-tighter text-white bg-gradient-to-l from-amber-500 to-orange-500"
            target="_blank"
            href="https://www.thirdbracket.co.uk/contact"
          >
            Contact for website{" "}
            <BsArrowUpRight className="inline-flex ml-2 items-center" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
