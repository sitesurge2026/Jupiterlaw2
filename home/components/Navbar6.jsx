"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar6() {
  const useActive = useRelume();
  const location = useLocation();
  const [isOverDarkBg, setIsOverDarkBg] = useState(() => location.pathname !== "/contact-us");

  useEffect(() => {
    if (location.pathname === "/contact-us") {
      setIsOverDarkBg(false);
      return;
    }
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverDarkBg(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const isLightPage = location.pathname === "/contact-us" || !isOverDarkBg;
  const bgClass = isLightPage ? "bg-black" : "bg-white";
  const textClass = isLightPage ? "text-white" : "text-black";
  const logoFilter = isLightPage ? "brightness(0) invert(1)" : "brightness(0)";
  const hamburgerClass = isLightPage ? "bg-white" : "bg-black";
  const borderClass = isLightPage ? "border-white/20" : "border-black/20";

  return (
    <section
      id="relume"
      className={`fixed top-4 left-4 right-4 z-[999] flex min-h-7 items-center rounded-full border py-0.5 pl-4 pr-[5%] md:min-h-8 md:left-[5%] md:right-[5%] md:top-6 md:py-1 md:pl-6 md:pr-[5%] ${bgClass} ${borderClass}`}
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <Link to="/" className="-ml-1 flex items-center gap-2">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full md:h-14 md:w-14"
            style={{ filter: logoFilter }}
          >
            <img
              src="/logo.png"
              alt="Jupiter Law"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className={`font-semibold md:text-xl ${textClass}`}>Jupiter Law</span>
        </Link>
        <div className="absolute hidden h-screen overflow-auto border-b border-neutral-lighter bg-white px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <Link
              to="/"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              Home
            </Link>
            <a
              href="#"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              About
            </a>
            <a
              href="#"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              Services
            </a>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className={`my-[3px] h-0.5 w-6 ${hamburgerClass}`}
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className={`my-[3px] h-0.5 w-6 ${hamburgerClass}`}
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className={`my-[3px] h-0.5 w-6 ${hamburgerClass}`}
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      <AnimatePresence>
        <motion.div
          variants={{ open: { opacity: 1, y: 0 }, close: { opacity: 0, y: -10 } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.3 }}
          className={`absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl border px-6 py-4 lg:hidden md:left-[5%] md:right-[5%] ${isLightPage ? "border-white/20 bg-black" : "border-black/20 bg-white"}`}
        >
          <div className="flex flex-col">
            <Link
              to="/"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              Home
            </Link>
            <Link
              to="/"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className={`relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base ${textClass}`}
            >
              Contact Us
            </Link>
            <div className="mt-4 flex flex-col gap-4">
              <Button title="Contact Us" size="sm" asChild className={isLightPage ? "border-white text-white hover:bg-white/20" : "border-black text-black hover:bg-black/10"}>
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </section>
  );
}
