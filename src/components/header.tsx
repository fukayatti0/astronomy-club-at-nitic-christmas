import React, { useState, useEffect } from "react";
import { Image } from "@unpic/astro";
import LogoBlackImage from "/public/Logo-black.webp?url";
import LogoWhiteImage from "/public/Logo-white.webp?url";
import XLogo from "/public/x-logo.svg?url";
import InstagramLogo from "/public/Instagram-logo.svg?url";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-5 flex justify-between items-center text-white z-50">
      <div className="w-20 h-20">
        <a href="/" className="w-20 h-20">
          <Image
            src={isDarkMode ? LogoWhiteImage : LogoBlackImage}
            alt="Astronomy Christmas"
            layout="fullWidth"
            class="object-contain"
            width={80}
            height={80}
          />
        </a>
      </div>
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="absolute right-5 p-2 top-6 rounded-full bg-gray-800"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-4 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-5 p-2 rounded-full bg-gray-800"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <a
          href="/"
          className="text-white no-underline text-2xl transition-colors duration-300 hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="/Event"
          className="text-white no-underline text-2xl transition-colors duration-300 hover:text-blue-400"
        >
          Event
        </a>
        <div className="w-20 h-20">
          <Image
            src={isDarkMode ? LogoBlackImage : LogoWhiteImage}
            alt="Astronomy Christmas"
            layout="fullWidth"
            class="object-contain"
            width={80}
            height={80}
          />
        </div>
        <div className="flex space-x-4 mt-5">
          <a
            href="https://x.com/nitic_astronomy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 pt-1"
          >
            <Image
              src={XLogo}
              alt="X"
              layout="fullWidth"
              class="object-contain"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://www.instagram.com/nitic_astronomy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14"
          >
            <Image
              src={InstagramLogo}
              alt="Instagram"
              layout="fullWidth"
              class="object-contain"
              width={56}
              height={56}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
