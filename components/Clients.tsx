import Image from "next/image";

const clients = [
  {
    name: "SITTAB",
    logo: "/clients/sittab.png",
  },
  {
    name: "FERITECH",
    logo: "/clients/feritech.png",
  },
  {
    name: "FRAMECO",
    logo: "/clients/frameco.png",
  },
  {
    name: "SCANWILL",
    logo: "/clients/scanwill.png",
  },
  {
    name: "OSCAR FÄH AG",
    logo: "/clients/oscar-fah.png",
  },
  {
    name: "IMPULSE RADAR",
    logo: "/clients/impulse-radar.png",
  },
  {
    name: "BEST SEATING SYSTEMS",
    logo: "/clients/best-seating.png",
  },
  {
    name: "MCS MOBILE CONTROL SYSTEMS",
    logo: "/clients/mcs.png",
  },
  {
    name: "TM AUTOMOTIVE SEATING SYSTEMS",
    logo: "/clients/tm-automotive.png",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            Our Clients
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Trusted by
            <span className="block text-blue-700">
              Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We are proud to support organisations across Europe and
            beyond with engineering, product development and
            manufacturing support solutions.
          </p>

        </div>

        {/* CLIENT GRID */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-[24px] border border-slate-200 bg-white px-8 py-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              {/* Subtle background */}

              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Logo */}

              <div className="relative flex h-[100px] w-full items-center justify-center">

                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={260}
                  height={110}
                  className="max-h-[90px] w-auto max-w-[230px] object-contain grayscale opacity-75 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />

              </div>

              {/* Client name */}

              <div className="absolute bottom-3 left-0 right-0 text-center">

                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                  {client.name}
                </p>

              </div>

              {/* Bottom accent */}

              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-blue-700 transition-all duration-500 group-hover:w-16" />

            </div>
          ))}

        </div>

        {/* TRUST STATEMENT */}

        <div className="mt-16 text-center">

          <div className="mx-auto h-px max-w-xs bg-slate-200" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-500">
            Building long-term engineering partnerships through
            quality, reliability and technical excellence.
          </p>

        </div>

      </div>
    </section>
  );
}