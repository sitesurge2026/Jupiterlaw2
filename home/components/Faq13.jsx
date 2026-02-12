"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Faq13() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 text-black md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            What you need to know about working with Jupiter Law
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long do cases typically take?
            </h2>
            <p>
              Every case moves at its own pace. Personal injury claims may
              settle in months or take years depending on complexity. Civil
              litigation follows court schedules. Immigration matters depend on
              government processing times. We keep you informed at every step.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are your fees?
            </h2>
            <p>
              We work on contingency for personal injury cases, meaning you pay
              nothing unless we win. Civil litigation and immigration work are
              handled through fixed fees or hourly rates. We discuss costs
              upfront so there are no surprises.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you handle appeals?
            </h2>
            <p>
              Yes. If a case doesn't go your way, we can pursue appeals in
              higher courts. This requires careful review of trial records and
              legal grounds. We'll advise you honestly on whether an appeal
              makes sense.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you help with immigration visas?
            </h2>
            <p>
              We handle visa applications, residency petitions, and citizenship
              matters. Whether you need skilled migration assistance or family
              sponsorship, we know the requirements and the process. We've
              guided clients through complex cases successfully.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I can't afford a lawyer?
            </h2>
            <p>
              For personal injury, our contingency model means you don't pay
              upfront. For other matters, we discuss payment options. Some cases
              qualify for legal aid. Contact us to explore what works for your
              situation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How do I start?
            </h2>
            <p>
              Call or email to schedule a consultation. We'll listen to your
              case, explain your options, and tell you what comes next. There's
              no obligation. Just honest advice about whether we can help.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">
            Reach out directly and we'll answer what you need to know
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary" asChild>
              <Link to="/contact-us">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
