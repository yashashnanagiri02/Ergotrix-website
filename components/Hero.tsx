import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100">

      <div className="max-w-7xl mx-auto px-8 py-24">

        {/* TOP CONTENT */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-blue-800 font-semibold">
            ERGOTRIX ENGINEERING SOLUTIONS PVT LTD
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-blue-950 leading-tight">
            Engineering Excellence.
            <br />
            Innovation Delivered.
          </h1>

          <p className="mt-8 text-xl text-gray-700 leading-9 max-w-5xl mx-auto">
            Delivering world-class engineering solutions in
            Automotive Seating Systems, Product Design,
            CAD Engineering and Manufacturing Support
            for global industries.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-8 max-w-4xl mx-auto">
            Trusted by leading manufacturers for innovative
            product development, precision engineering and
            manufacturing-ready solutions.
          </p>


          {/* BUTTONS */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#contact"
              className="
              bg-green-600
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              hover:bg-green-700
              transition-all
              duration-300
              "
            >
              Get Consultation
            </a>


            <a
              href="#services"
              className="
              border-2
              border-blue-900
              text-blue-900
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-900
              hover:text-white
              transition-all
              duration-300
              "
            >
              Explore Services
            </a>


            <a
              href="/company-profile.pdf"
              download
              className="
              bg-blue-900
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-blue-800
              transition-all
              duration-300
              "
            >
              Company Profile
            </a>

          </div>

        </div>



        {/* HERO IMAGE */}

        <div className="mt-20">

          <div
            className="
            relative
            w-full
            h-[650px]
            rounded-3xl
            overflow-hidden
            shadow-2xl
            border
            border-slate-200
            "
          >

            <Image
              src="/images/hero-seat.png"
              alt="Automotive Seating Engineering"
              fill
              priority
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}