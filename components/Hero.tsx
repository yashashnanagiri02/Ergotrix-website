export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
              Engineering Excellence.
              <br />
              Innovation Delivered.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              Transforming concepts into manufacturing-ready
              products through innovative engineering and
              product development solutions.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">

              {/* GET CONSULTATION */}

              <a
                href="#contact"
                className="
                inline-flex
                items-center
                justify-center
                bg-green-600
                text-white
                px-6
                py-4
                rounded-xl
                font-semibold
                hover:bg-green-700
                transition-all
                duration-300
                "
              >
                Get Consultation
              </a>


              {/* EXPLORE SERVICES */}

              <a
                href="#services"
                className="
                border-2
                border-blue-900
                text-blue-900
                px-6
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


              {/* DOWNLOAD COMPANY PROFILE */}

              <a
                href="/company-profile.pdf"
                download
                className="
                bg-blue-900
                text-white
                px-6
                py-4
                rounded-xl
                font-semibold
                hover:bg-blue-800
                transition-all
                duration-300
                "
              >
                Download Company Profile
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="
            flex
            items-center
            justify-center
            "
          >

            <div
              className="
              w-full
              h-[450px]
              rounded-3xl
              bg-gradient-to-br
              from-blue-100
              to-slate-200
              shadow-xl
              flex
              items-center
              justify-center
              "
            >

              <h2
                className="
                text-center
                text-3xl
                font-bold
                text-blue-900
                px-6
                "
              >
                Premium Engineering
                <br />
                Illustration Coming Soon
              </h2>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}