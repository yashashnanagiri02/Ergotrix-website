import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            ABOUT ERGOTRIX
          </p>

          <h2 className="mt-4 text-5xl font-bold text-blue-950">
            Engineering Innovation with Precision
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-9">
            Delivering innovative engineering and product development
            solutions for global industries through precision,
            creativity and manufacturing excellence.
          </p>

        </div>

        {/* Main Section */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <h3 className="text-3xl font-bold text-blue-900">
              Who We Are
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              ERGOTRIX Engineering Solutions Private Limited specialises
              in delivering world-class engineering services across
              product design, CAD engineering, manufacturing support
              and automotive seating solutions.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              From concept generation and CAD modelling to engineering
              validation and technical documentation, we provide
              end-to-end engineering solutions tailored to the
              requirements of modern industries.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-700">
              Our mission is to transform innovative ideas into
              manufacturing-ready products through engineering
              excellence, precision and continuous innovation.
            </p>

            {/* EXPERTISE */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                Product Design
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                CAD Services
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                CAE Services
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                Manufacturing Support
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                Reverse Engineering
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 font-semibold text-slate-700">
                Technical Documentation
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div
              className="
              relative
              w-full
              h-[600px]
              rounded-3xl
              overflow-hidden
              shadow-2xl
              border
              border-slate-200
              "
            >

              <Image
                src="/images/about-office.png"
                alt="Ergotrix Engineering Office"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}