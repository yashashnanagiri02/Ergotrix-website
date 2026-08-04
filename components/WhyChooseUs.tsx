"use client";

import {
  Award,
  Lightbulb,
  Layers3,
  Factory,
  Users,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    number: "01",
    title: "Industry Expertise",
    description:
      "Engineering solutions developed with a strong understanding of product development, automotive seating and manufacturing requirements.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Innovative Solutions",
    description:
      "Combining engineering knowledge with creative thinking to develop practical and efficient solutions for complex product challenges.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "End-to-End Development",
    description:
      "Supporting projects from concept and CAD development through engineering validation and manufacturing support.",
  },
  {
    icon: Factory,
    number: "04",
    title: "Manufacturing-Ready Designs",
    description:
      "Our designs focus not only on performance but also on manufacturability, helping products move efficiently towards production.",
  },
  {
    icon: Users,
    number: "05",
    title: "Client-Centric Approach",
    description:
      "Working closely with clients to understand their requirements and deliver engineering solutions aligned with their goals.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Quality & Precision",
    description:
      "Maintaining a strong focus on engineering accuracy, quality and attention to detail throughout every stage of development.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Why Ergotrix
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Engineering Excellence
            <span className="block text-blue-700">
              Built Around You
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine engineering expertise, innovation and
            manufacturing understanding to deliver solutions that
            create real value for our clients.
          </p>

        </div>

        {/* REASONS */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >

                {/* Number */}

                <div className="absolute right-6 top-5 text-5xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-blue-50">
                  {reason.number}
                </div>

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-500 group-hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-700/20">

                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-blue-700 transition-colors duration-500 group-hover:text-white"
                  />

                </div>

                {/* Content */}

                <h3 className="relative mt-7 text-2xl font-bold text-slate-950">
                  {reason.title}
                </h3>

                <p className="relative mt-4 text-base leading-7 text-slate-600">
                  {reason.description}
                </p>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* BOTTOM CTA / STATEMENT */}

        <div className="mt-16 overflow-hidden rounded-[32px] bg-blue-950 px-8 py-12 text-center shadow-2xl sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
            Our Commitment
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Turning engineering challenges into
            <span className="text-blue-300">
              {" "}practical solutions.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100">
            From the first concept to manufacturing support, Ergotrix
            works alongside clients to create precise, reliable and
            production-ready engineering solutions.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Talk to Our Team
          </a>

        </div>

      </div>
    </section>
  );
}