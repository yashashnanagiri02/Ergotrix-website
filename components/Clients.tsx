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
      className="bg-slate-50 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-blue-900">
            Our Valued Clients
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders across Europe and beyond.
          </p>

        </div>

        {/* Clients Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {clients.map((client) => (
            <div
              key={client.name}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                border
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                items-center
                justify-center
                min-h-[200px]
              "
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={250}
                height={120}
                className="object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}