import Image from "next/image";

export default function About() {
  const expertise = [
    "Product Design & Development",
    "CAD Engineering",
    "CAE & Design Validation",
    "Automotive Seating",
    "Reverse Engineering",
    "Manufacturing Support",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            About Ergotrix
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Engineering Innovation
            <span className="block text-blue-700">
              with Precision
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Delivering innovative engineering and product development
            solutions for global industries through precision,
            creativity and manufacturing excellence.
          </p>

        </div>

        {/* MAIN CONTENT */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* IMAGE */}

          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-5 rounded-[40px] bg-blue-100/70 blur-2xl" />

            <div className="relative h-[500px] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-2xl lg:h-[600px]">

              <Image
                src="/images/about-office.png"
                alt="Ergotrix Engineering Office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">

                <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-700">
                  ERGOTRIX
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  Engineering • Innovation • Precision
                </p>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-700">
              Who We Are
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Turning Engineering Ideas into
              <span className="text-blue-700">
                {" "}Manufacturing-Ready Products
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ERGOTRIX Engineering Solutions Private Limited specialises
              in delivering world-class engineering services across
              product design, CAD engineering, manufacturing support
              and automotive seating solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From concept generation and CAD modelling to engineering
              validation and technical documentation, we provide
              end-to-end engineering solutions tailored to the
              requirements of modern industries.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our mission is to transform innovative ideas into
              manufacturing-ready products through engineering
              excellence, precision and continuous innovation.
            </p>

            {/* EXPERTISE */}

            <div className="mt-10">

              <p className="mb-5 text-sm font-bold uppercase tracking-[2px] text-slate-900">
                Our Core Expertise
              </p>

              <div className="grid gap-3 sm:grid-cols-2">

                {expertise.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-medium text-slate-700 group-hover:text-blue-900">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* Bottom highlight */}

            <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-8">

              <div>
                <p className="text-3xl font-extrabold text-blue-700">
                  End-to-End
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Engineering Solutions
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-blue-700">
                  Global
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Industry Focus
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-blue-700">
                  Precision
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Driven Engineering
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}