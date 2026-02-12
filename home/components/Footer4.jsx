"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer4() {
  return (
    <footer id="relume" className="bg-white px-[5%] py-12 text-black md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[1fr_auto] lg:justify-between lg:gap-y-4 lg:pb-20">
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <a href="#" className="text-black hover:opacity-70">About Us</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black hover:opacity-70">Services</a>
            </li>
            <li className="font-semibold">
              <Link to="/contact-us" className="text-black hover:opacity-70">Contact</Link>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black hover:opacity-70">Resources</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="text-black hover:opacity-70">Careers</a>
            </li>
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            <a href="#" className="text-black hover:opacity-70">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 text-black md:mt-0">© 2024 Relume. All rights reserved.</p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
