"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Cta31() {
  return (
    <section id="relume" className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ready to move forward
          </h2>
          <p className="md:text-md">
            Get the legal representation you deserve. Schedule your consultation
            today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Contact Us" variant="secondary" asChild className="border-white bg-white text-black hover:bg-neutral-lightest">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
