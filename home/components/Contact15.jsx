"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact15() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Reach out</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Get in touch
              </h2>
              <p className="md:text-md">
                We're here to answer your questions and discuss your case with
                you.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiEnvelope className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Email
                    </h3>
                    <a className="text-black underline hover:opacity-70" href="mailto:hello@jupiterlaw.co.uk">
                      hello@jupiterlaw.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiPhone className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Phone
                    </h3>
                    <a className="text-black underline hover:opacity-70" href="tel:+447711287111">
                      +44 7711 287111
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <BiMap className="size-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                      Office
                    </h3>
                    <p className="text-black">We are in the processing of moving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 w-full overflow-hidden md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45582.2345!2d-2.2426!3d53.4808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143801fe5686!2sManchester%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manchester office location"
          />
        </div>
      </div>
    </section>
  );
}
