"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Layout239() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Services</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Legal work that delivers results
              </h2>
              <p className="md:text-md">
                Jupiter Law brings focused expertise to every case. We know the
                law. We know how to use it for you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=512&h=288&fit=crop"
                  alt="Personal injury law"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Personal injury
              </h3>
              <p>
                Accident claims, negligence cases, and injury compensation
                pursued with determination.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=512&h=288&fit=crop"
                  alt="Civil litigation"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Civil litigation
              </h3>
              <p>
                Contract disputes, business conflicts, and commercial litigation
                resolved through strategy and advocacy.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=512&h=288&fit=crop"
                  alt="Immigration law"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Immigration law
              </h3>
              <p>
                Visa applications, residency petitions, and citizenship matters
                handled with precision.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center md:mt-8">
            <Button variant="secondary" asChild>
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
