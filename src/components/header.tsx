import React, { useState } from "react";
import { Image } from "@unpic/react";
import LogoImage from "/public/image.webp?url";
import XLogo from "/public/x-logo.svg?url";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-5 flex justify-between items-center text-white z-50">
      <div className="w-20 h-20">
        <a href="/" className="w-20 h-20">
          <Image
            src={LogoImage}
            alt="Astronomy Christmas"
            layout="fullWidth"
            className="object-contain"
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
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center gap-4 transition-transform duration-300 ${
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
        <a
          href="/contact"
          className="text-white no-underline text-2xl transition-colors duration-300 hover:text-blue-400"
        >
          Contact
        </a>
          <div className="w-20 h-20">
            <Image
              src={LogoImage}
              alt="Astronomy Christmas"
              layout="fullWidth"
              className="object-contain"
            />
          </div>
          <a
            href="https://x.com/nitic_astronomy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 mb-5"
          >
            <Image
              src={XLogo}
              alt="X"
              layout="fullWidth"
              className="object-contain"
            />
          </a>
      </nav>
    </header>
  );
};

export default Header;
