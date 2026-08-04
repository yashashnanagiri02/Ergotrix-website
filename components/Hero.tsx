import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
              ERGOTRIX ENGINEERING SOLUTIONS
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Engineering
              <span className="block text-blue-700">
                Excellence.
              </span>
              <span className="block">
                Innovation
              </span>
              <span className="block text-blue-700">
                Delivered.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Delivering world-class engineering solutions in
              Automotive Seating Systems, Product Design,
              CAD Engineering and Manufacturing Support
              for global industries.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Trusted by leading European manufacturers for innovative
              product development, precision engineering and
              manufacturing-ready solutions.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
              >
                Get Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl border-2 border-blue-800 px-7 py-4 font-semibold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white"
              >
                Explore Services
              </a>

              <a
                href="/company-profile.pdf"
                download
                className="rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                Company Profile
              </a>

            </div>

            {/* Small trust points */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
              <span>✓ Product Development</span>
              <span>✓ CAD Engineering</span>
              <span>✓ Manufacturing Support</span>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow behind image */}
            <div className="absolute inset-8 rounded-[40px] bg-blue-500/20 blur-3xl" />

            <div className="relative mx-auto aspect-[4/3] w-full max-w-[720px] overflow-hidden rounded-[32px] border border-white/70 bg-[#071426] shadow-[0_30px_80px_rgba(15,23,42,0.28)]">

              <Image
                src="/hero/hero-seat.png"
                alt="Automotive seating engineering"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-transparent" />

            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:left-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                Engineering Focus
              </p>
              <p className="mt-1 font-bold text-slate-900">
                Automotive Seating Systems
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}