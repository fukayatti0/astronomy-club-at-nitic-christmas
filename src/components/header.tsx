import React, { useState, useEffect } from "react";
import { Image } from "@unpic/react";
import LogoBlackImage from "/public/Logo-black.webp?url";
import LogoWhiteImage from "/public/Logo-white.webp?url";
import { Menu, X, Home, Calendar, Users, BookOpenCheck } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dark mode and scroll detection
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    setIsDarkMode(matchMedia.matches);
    matchMedia.addEventListener("change", handleColorSchemeChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      matchMedia.removeEventListener("change", handleColorSchemeChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      // Prevent the page from shifting
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = [
    { href: "/", label: "Home", icon: Home },
    {
      href: "/Event",
      label: "Events",
      icon: Calendar,
      subLinks: [
        { href: "/Event/ScienceShow", label: "Science Show" },
        { href: "/Event/WorkShop", label: "Workshop" },
        { href: "/Event/Stargazing", label: "Stargazing" },
      ],
    },
    { href: "/Quiz", label: "Quiz", icon: BookOpenCheck },
    { href: "/About", label: "About Us", icon: Users },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
        ${isDarkMode ? "text-white" : "text-gray-900"}
      `}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <Image
            src={isDarkMode ? LogoWhiteImage : LogoBlackImage}
            alt="Astronomy Christmas"
            className="object-contain"
            width={75}
            height={60}
            sizes="(max-width: 600px) 30px, (max-width: 1200px) 50px, 60px"
            srcSet={`${LogoBlackImage} 30w, ${LogoBlackImage} 50w, ${LogoBlackImage} 60w`}
          />
          <span className="font-bold text-xl tracking-wider">
            Chrsitmas Scienceshow
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-700/30 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NavLinks.map((link) => (
            <div key={link.href} className="group relative">
              <a
                href={link.href}
                className="
                  flex items-center space-x-2 
                  hover:text-blue-400 transition-colors 
                  font-medium group-hover:text-blue-300
                  hover:underline
                "
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </a>
              {link.subLinks && (
                <div
                  className="
                  absolute top-full left-0 mt-2 
                  hidden group-hover:block 
                  bg-gray-700 text-white 
                  rounded-md shadow-lg 
                  min-w-[200px] py-2
                "
                >
                  {link.subLinks.map((subLink) => (
                    <a
                      key={subLink.href}
                      href={subLink.href}
                      className="
                        block px-4 py-2 
                        hover:bg-gray-600 
                        transition-colors
                      "
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://x.com/nitic_astronomy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.222l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/nitic_astronomy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C0 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 24 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
            md:hidden fixed inset-0 bg-gray-800 
            transform transition-transform duration-500 
            ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0
            flex flex-col items-center justify-center space-y-6 
            overflow-y-auto overscroll-contain
          `}
          style={{
            // Ensure the menu covers the entire viewport
            height: "100dvh", // Use dynamic viewport height
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "fixed",
          }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-700/30 transition"
            aria-label="Close menu"
          >
            <X size={24} color="white" />
          </button>
          {NavLinks.map((link) => (
            <div key={link.href} className="text-center group">
              <a
              href={link.href}
              className="
                flex items-center justify-center space-x-3 
                text-2xl text-white
                hover:text-blue-400 transition-colors
              "
              onClick={toggleMenu}
              >
              <link.icon size={24} />
              <span>{link.label}</span>
              </a>
              {link.subLinks && (
                <div className="mt-4 space-y-2">
                {link.subLinks.map((subLink) => (
                  <a
                  key={subLink.href}
                  href={subLink.href}
                  className="block text-white hover:text-blue-400"
                  onClick={toggleMenu}
                  >
                  {subLink.label}
                  </a>
                ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Social Links */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://x.com/nitic_astronomy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.222l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nitic_astronomy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C0 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 24 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
