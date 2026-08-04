import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Product Design & Development",
      description:
        "Transforming innovative ideas into manufacturing-ready products through concept development, detailed design, engineering refinement and reverse engineering.",
      link: "/services/product-design-development",
      image: "/images/product-design.png",
    },
    {
      number: "02",
      title: "Engineering Services",
      description:
        "Delivering CAD modelling, engineering analysis, design validation and technical engineering support for efficient product development.",
      link: "/services/cad-engineering",
      image: "/images/engineering-services.png",
    },
    {
      number: "03",
      title: "Manufacturing Support",
      description:
        "Providing manufacturing assistance, technical documentation and production support to help move engineered products seamlessly into production.",
      link: "/services/manufacturing-support",
      image: "/images/manufacturing-support.png",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto mb-16 max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Engineering Solutions
            <span className="block text-blue-700">
              Tailored for Industry
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comprehensive engineering and manufacturing support services
            designed to transform ideas into precise, reliable and
            production-ready products.
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* IMAGE */}

              <div className="relative h-[280px] overflow-hidden bg-slate-900">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-sm font-bold text-white backdrop-blur-md">
                  {service.number}
                </div>

                {/* Image title */}
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-sm font-medium uppercase tracking-[2px] text-blue-200">
                    Engineering Solution
                  </p>
                </div>

              </div>

              {/* CONTENT */}

              <div className="flex flex-1 flex-col p-8">

                <h3 className="text-2xl font-bold leading-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-5 flex-1 text-base leading-8 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-blue-700 transition-all duration-300 group-hover:gap-3 hover:text-blue-900"
                >
                  Explore Service
                  <span aria-hidden="true">→</span>
                </Link>

              </div>

              {/* Bottom accent */}
              <div className="h-1 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}

        <div className="mt-16 rounded-[28px] bg-blue-950 px-8 py-10 text-center shadow-xl sm:px-12">

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Custom Engineering Solution?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Talk to our engineering team about your product development,
            CAD, automotive seating or manufacturing requirements.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Discuss Your Project
          </a>

        </div>

      </div>
    </section>
  );
}