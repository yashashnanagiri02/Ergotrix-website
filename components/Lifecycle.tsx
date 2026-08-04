"use client";

import {
  Lightbulb,
  PencilRuler,
  Cog,
  FlaskConical,
  Factory,
} from "lucide-react";

const process = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Ideation",
    description:
      "Transforming innovative ideas into practical engineering solutions tailored to project requirements.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Concept Design",
    description:
      "Developing detailed concepts and engineering strategies focused on performance, usability and manufacturability.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Engineering",
    description:
      "Applying CAD modelling, engineering analysis and design optimisation to develop reliable products.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Prototype & Validation",
    description:
      "Testing, validating and refining designs before moving towards production.",
  },
  {
    number: "05",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Supporting production with manufacturing-ready designs, documentation and technical assistance.",
  },
];

export default function Lifecycle() {
  return (
    <section
      id="engineering-process"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Our Workflow
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Our Engineering
            <span className="block text-blue-700">
              Process
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From the first idea to manufacturing support, our structured
            engineering workflow helps deliver precise, reliable and
            production-ready solutions.
          </p>

        </div>

        {/* PROCESS */}

        <div className="relative mt-20 lg:mt-24">

          {/* Desktop connecting line */}

          <div className="absolute left-[10%] right-[10%] top-[76px] hidden h-px bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            {process.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative"
                >

                  {/* CARD */}

                  <div className="relative h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

                    {/* Number */}

                    <div className="flex items-center justify-between">

                      <span className="text-sm font-bold tracking-[2px] text-blue-200">
                        {step.number}
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Step
                      </span>

                    </div>

                    {/* Icon */}

                    <div className="relative z-10 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 shadow-lg shadow-blue-700/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">

                      <Icon
                        size={30}
                        strokeWidth={2}
                        className="text-white"
                      />

                    </div>

                    {/* Title */}

                    <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-950">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-16 rounded-[28px] border border-blue-100 bg-blue-50/70 px-6 py-8 text-center sm:px-10">

          <p className="text-lg font-semibold text-blue-950">
            From concept to production — engineering every stage with
            precision.
          </p>

        </div>

      </div>
    </section>
  );
}