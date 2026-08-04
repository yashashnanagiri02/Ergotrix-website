"use client";

import {
  CarFront,
  HeartPulse,
  Factory,
  ShoppingBag,
  Cog,
  Boxes,
} from "lucide-react";

const industries = [
  {
    icon: CarFront,
    number: "01",
    title: "Automotive",
    description:
      "Engineering solutions for automotive components, seating systems and product development.",
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "Medical Devices",
    description:
      "Precision-focused engineering support for medical equipment and device development.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Industrial Equipment",
    description:
      "Product design and engineering solutions for industrial machinery and equipment.",
  },
  {
    icon: ShoppingBag,
    number: "04",
    title: "Consumer Products",
    description:
      "Engineering support for functional, reliable and manufacturable consumer products.",
  },
  {
    icon: Cog,
    number: "05",
    title: "Mechanical Engineering",
    description:
      "CAD modelling, engineering analysis and design support for mechanical applications.",
  },
  {
    icon: Boxes,
    number: "06",
    title: "Manufacturing",
    description:
      "Manufacturing support, technical documentation and production-ready engineering.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Engineering Across
            <span className="block text-blue-700">
              Multiple Industries
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our engineering capabilities can be adapted to the
            unique technical, manufacturing and product development
            requirements of diverse industries.
          </p>

        </div>

        {/* INDUSTRY GRID */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-2xl"
              >

                {/* Number */}

                <div className="absolute right-6 top-5 text-5xl font-extrabold text-white transition-colors duration-500 group-hover:text-blue-50">
                  {industry.number}
                </div>

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-500 group-hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-700/20">

                  <Icon
                    size={30}
                    strokeWidth={2}
                    className="text-blue-700 transition-colors duration-500 group-hover:text-white"
                  />

                </div>

                {/* Content */}

                <h3 className="relative mt-7 text-2xl font-bold text-slate-950">
                  {industry.title}
                </h3>

                <p className="relative mt-4 text-base leading-7 text-slate-600">
                  {industry.description}
                </p>

                {/* Learn more indicator */}

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-700 transition-all duration-300 group-hover:gap-3">
                  Engineering Solutions
                  <span>→</span>
                </div>

                {/* Bottom accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-16 rounded-[30px] bg-slate-950 px-8 py-12 text-center shadow-2xl sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
            Cross-Industry Engineering
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            One engineering partner.
            <span className="text-blue-400">
              {" "}Multiple possibilities.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Whether you are developing an automotive component,
            industrial product or precision mechanical system,
            Ergotrix provides the engineering expertise to move
            your ideas forward.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            Start a Conversation
          </a>

        </div>

      </div>
    </section>
  );
}