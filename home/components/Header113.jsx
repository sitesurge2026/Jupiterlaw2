"use client";

import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export function Header113() {
  return (
    <section id="hero" className="relative px-[5%]">
      <div className="container flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 flex h-full flex-col justify-end">
            <div className="flex flex-col justify-start md:justify-end">
              <motion.h1
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-6xl font-bold text-white md:text-9xl lg:text-10xl"
              >
                Legal representation that<br />
                stands with you
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="mt-6 flex flex-wrap gap-4 md:mt-8"
              >
                <Button title="Contact Us" variant="secondary" asChild className="bg-white text-black border-black hover:bg-neutral-lightest">
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
