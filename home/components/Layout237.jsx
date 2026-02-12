"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Layout237() {
  return (
    <section id="relume" className="bg-black px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-white">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Practice</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What we handle for our clients
            </h2>
            <p className="md:text-md">
              Three core areas of law shape our work. Each demands focus. Each
              gets it.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12 invert"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personal injury claims
              </h3>
              <p>
                We pursue compensation for injuries caused by negligence,
                accidents, and wrongful acts.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12 invert"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Civil litigation and disputes
              </h3>
              <p>
                Business conflicts and contract breaches require strategy and
                experience in the courtroom.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12 invert"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Immigration law
              </h3>
              <p>
                Visa applications, residency matters, and citizenship cases
                handled with care and expertise.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center md:mt-14 lg:mt-16">
            <Button variant="secondary" asChild className="border-white bg-white text-black hover:bg-neutral-lightest">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
