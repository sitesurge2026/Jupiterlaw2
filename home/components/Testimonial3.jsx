"use client";

import React from "react";

export function Testimonial3() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Customer testimonials
          </h1>
          <p className="md:text-md">Clients who trusted us with their cases</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex flex-col items-center justify-center text-center">
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "Aatif fought for me when I needed it most. The settlement was
              fair and the process was clear."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <p className="font-semibold">Marcus Chen</p>
              <p>Injury claimant</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "They understood our business dispute better than we did. The
              strategy worked and we won."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <p className="font-semibold">Sarah Mitchell</p>
              <p>Business owner</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
              "My visa case seemed impossible. Jupiter Law made it happen.
              Professional and thorough."
            </blockquote>
            <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
              <p className="font-semibold">David Okonkwo</p>
              <p>Immigration client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
