export default function OfficeLocation() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Find Us
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Our Office
            <span className="text-blue-700">
              {" "}Location
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Visit us or get in touch to discuss your engineering,
            product development and manufacturing requirements.
          </p>

        </div>

        {/* LOCATION CARD */}

        <div className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">

          <div className="grid lg:grid-cols-[0.35fr_0.65fr]">

            {/* LOCATION INFO */}

            <div className="flex flex-col justify-center bg-blue-950 p-8 sm:p-10 lg:p-12">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
                ERGOTRIX
              </p>

              <h3 className="mt-4 text-3xl font-bold text-white">
                Engineering Solutions
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                Our engineering team is based in Pune, Maharashtra,
                serving clients across India, Europe and global markets.
              </p>

              {/* Address */}

              <div className="mt-10">

                <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-300">
                  Office
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Pune, Maharashtra
                </p>

                <p className="mt-1 text-slate-300">
                  India
                </p>

              </div>

              {/* CTA */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ergotrix%20Engineering%20Solutions%20Private%20Limited"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Get Directions
                <span className="ml-2">
                  →
                </span>
              </a>

            </div>

            {/* GOOGLE MAP */}

            <div className="relative h-[450px] lg:h-[550px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.5594233390116!2d73.87559587465334!3d18.57172686761067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c170acbe801%3A0x9772f7e944da63d6!2sErgotrix%20Engineering%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1785331063340!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ergotrix Engineering Solutions office location"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}