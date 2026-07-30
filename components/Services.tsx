import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Product Design & Development",
      description:
        "Transforming innovative ideas into manufacturing-ready products through concept design, product development and reverse engineering solutions.",
      link: "/services/product-design-development",
      image: "/images/product-design.png",
    },

    {
      title: "Engineering Services",
      description:
        "Providing CAD modelling, engineering analysis and design validation services for efficient product development.",
      link: "/services/cad-engineering",
      image: "/images/engineering-services.png",
    },

    {
      title: "Manufacturing Support Services",
      description:
        "Delivering manufacturing support, product documentation and technical assistance to ensure seamless production.",
      link: "/services/manufacturing-support",
      image: "/images/manufacturing-support.png",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-blue-50 to-white px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-blue-700 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-blue-950">
            Engineering Solutions Tailored For Industry
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-8">
            Comprehensive engineering and manufacturing support
            services designed to transform ideas into world-class
            products.
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="grid lg:grid-cols-3 gap-10">

          {services.map((service) => (

            <div
              key={service.title}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-xl
              border
              border-slate-200
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-300
              flex
              flex-col
              "
            >

              {/* IMAGE */}

              <div className="relative h-[260px]">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-8 flex-grow">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="
                  mt-8
                  inline-flex
                  items-center
                  font-semibold
                  text-blue-900
                  hover:text-blue-700
                  transition-all
                  "
                >
                  Learn More →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}