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
    icon: Lightbulb,
    title: "Ideation",
    description:
      "Transforming innovative ideas into practical engineering solutions.",
  },
  {
    icon: PencilRuler,
    title: "Concept Design",
    description:
      "Developing detailed concepts and engineering strategies.",
  },
  {
    icon: Cog,
    title: "Engineering",
    description:
      "CAD modelling, CAE analysis and design optimisation.",
  },
  {
    icon: FlaskConical,
    title: "Prototype",
    description:
      "Validation, testing and performance verification.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production support and manufacturing-ready documentation.",
  },
];

export default function Lifecycle() {
  return (
    <section
      id="engineering-process"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-100 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            Workflow
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl font-extrabold text-blue-950">
            Our Engineering Process
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600 leading-9">
            Every project follows a structured engineering workflow ensuring
            quality, innovation and manufacturing excellence.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-28">

          {/* Center Line */}

          <div className="absolute top-12 left-0 w-full h-[3px] bg-blue-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-14 relative">

            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group text-center"
                >

                  {/* Step Number */}

                  <div className="mb-5 text-blue-300 text-2xl font-bold">
                    0{index + 1}
                  </div>

                  {/* Circle */}

                  <div
                    className="
                    relative
                    z-10
                    mx-auto
                    w-24
                    h-24
                    rounded-full
                    bg-gradient-to-br
                    from-blue-700
                    to-blue-500
                    flex
                    items-center
                    justify-center
                    shadow-[0_20px_40px_rgba(37,99,235,0.35)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:-translate-y-2
                    "
                  >
                    <Icon
                      size={42}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-10 text-[30px] font-bold text-blue-950">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-slate-600 leading-8 text-lg">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}