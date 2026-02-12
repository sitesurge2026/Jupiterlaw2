"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React, { useState } from "react";

const FORM_EMAIL = "0.sukoon@gmail.com";

export function Contact9() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-2xl">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Reach</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Get in touch
            </h2>
            <p className="md:text-md">
              We handle your case with care and precision
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >
            <input type="hidden" name="_subject" value="New enquiry from Jupiter Law" />
            <input type="hidden" name="_template" value="box" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Query
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us what happened"
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" name="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                I agree to Jupiter Law contacting me
              </Label>
            </div>
            {status === "success" && (
              <p className="text-green-600 font-medium">Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
            )}
            <div>
              <Button title="Send" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
