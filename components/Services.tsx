import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Product Design & Development",
      description:
        "Transforming innovative ideas into manufacturing-ready products through concept design, product development and reverse engineering solutions.",
      link: "/services/product-design-development",
    },

    {
      title: "Engineering Services",
      description:
        "Providing CAD modelling, engineering analysis and design validation services for efficient product development.",
      link: "/services/cad-engineering",
    },

    {
      title: "Manufacturing Support Services",
      description:
        "Delivering manufacturing support, product documentation and technical assistance to ensure seamless production.",
      link: "/services/manufacturing-support",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to
            modern product development requirements.
          </p>
        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
              bg-slate-50
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              border
              flex
              flex-col
              justify-between
              "
            >
              <div>
                <h3 className="text-2xl font-bold text-blue-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-8">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.link}
                className="
                mt-8
                inline-block
                text-blue-900
                font-semibold
                hover:text-blue-700
                transition-all
                "
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}