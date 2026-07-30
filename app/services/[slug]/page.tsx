import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "product-design-development": {
    title: "Product Design & Development",
    description:
      "Transforming concepts into manufacturing-ready engineering products.",

    overview:
      "ERGOTRIX Engineering Solutions provides end-to-end product design and development services for industrial and automotive applications.",

    offerings: [
      "Concept Design",
      "CAD Modelling",
      "Engineering Analysis",
      "Design Validation",
      "Prototype Development",
      "Manufacturing Documentation",
    ],

    process: [
      "Requirement Analysis",
      "Concept Development",
      "CAD Design",
      "Engineering Validation",
      "Prototype Development",
      "Manufacturing Support",
    ],

    industries: [
      "Automotive",
      "Industrial Equipment",
      "Consumer Products",
      "Manufacturing",
    ],
  },

  "prototype-development": {
    title: "Prototype Development",
    description:
      "Rapid and efficient prototype development services.",

    overview:
      "We help businesses convert concepts into working prototypes for validation and testing.",

    offerings: [
      "Rapid Prototyping",
      "3D Printing",
      "Prototype Testing",
      "Functional Models",
      "Validation",
      "Documentation",
    ],

    process: [
      "Design Review",
      "Prototype Planning",
      "Fabrication",
      "Testing",
      "Optimisation",
      "Final Approval",
    ],

    industries: [
      "Automotive",
      "Industrial",
      "Medical Devices",
      "Manufacturing",
    ],
  },

  "cad-engineering": {
    title: "CAD Engineering Services",
    description:
      "Professional CAD modelling and engineering design solutions.",

    overview:
      "Our engineers provide manufacturing-ready CAD designs using industry-standard tools.",

    offerings: [
      "3D CAD Modelling",
      "2D Drawings",
      "Assembly Design",
      "Engineering Drawings",
      "Design Optimisation",
      "Documentation",
    ],

    process: [
      "Requirement Analysis",
      "CAD Design",
      "Validation",
      "Review",
      "Optimisation",
      "Documentation",
    ],

    industries: [
      "Automotive",
      "Industrial",
      "Consumer Products",
      "Manufacturing",
    ],
  },

  "manufacturing-support": {
    title: "Manufacturing Support",
    description:
      "Complete manufacturing support for engineering products.",

    overview:
      "We provide manufacturing-ready solutions to ensure seamless production and scalability.",

    offerings: [
      "DFM Analysis",
      "Manufacturing Support",
      "Quality Assurance",
      "Vendor Coordination",
      "Production Planning",
      "Technical Documentation",
    ],

    process: [
      "Planning",
      "Manufacturing Review",
      "Vendor Support",
      "Production Assistance",
      "Quality Checks",
      "Delivery Support",
    ],

    industries: [
      "Automotive",
      "Industrial",
      "Manufacturing",
      "Consumer Products",
    ],
  },

  "engineering-consulting": {
    title: "Engineering Consulting",
    description:
      "Strategic engineering consulting for innovative products.",

    overview:
      "Our consulting services help businesses solve engineering challenges efficiently.",

    offerings: [
      "Product Strategy",
      "Engineering Review",
      "Design Consultation",
      "Technical Support",
      "Innovation Consulting",
      "Process Optimisation",
    ],

    process: [
      "Consultation",
      "Analysis",
      "Planning",
      "Recommendations",
      "Implementation Support",
      "Final Review",
    ],

    industries: [
      "Automotive",
      "Industrial",
      "Manufacturing",
      "Medical Devices",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-28 px-8">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-bold">
            {service.title}
          </h1>

          <p className="mt-8 text-xl max-w-4xl">
            {service.description}
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-10 bg-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all"
          >
            Get Consultation
          </Link>

        </div>
      </section>

      {/* OVERVIEW */}

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900">
            Overview
          </h2>

          <p className="mt-8 text-xl text-slate-800 leading-10">
            {service.overview}
          </p>

        </div>
      </section>

      {/* WHAT WE OFFER */}

      <section className="bg-slate-100 py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {service.offerings.map((item) => (
              <div
                key={item}
                className="
                bg-blue-50
                p-6
                rounded-2xl
                shadow-lg
                border
                border-blue-200
                text-slate-900
                font-semibold
                text-lg
                hover:bg-blue-100
                hover:shadow-xl
                transition-all
                duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENGINEERING PROCESS */}

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900">
            Our Engineering Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {service.process.map((item) => (
              <div
                key={item}
                className="
                bg-blue-50
                p-6
                rounded-2xl
                shadow-lg
                border
                border-blue-200
                text-slate-900
                font-semibold
                text-lg
                hover:bg-blue-100
                hover:shadow-xl
                transition-all
                duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INDUSTRIES SERVED */}

      <section className="bg-slate-100 py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900">
            Industries Served
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {service.industries.map((item) => (
              <div
                key={item}
                className="
                bg-blue-50
                p-6
                rounded-2xl
                shadow-lg
                border
                border-blue-200
                text-slate-900
                font-semibold
                text-lg
                hover:bg-blue-100
                hover:shadow-xl
                transition-all
                duration-300
                "
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="text-center py-28 px-8">

        <h2 className="text-5xl font-bold text-blue-900">
          Ready To Work With ERGOTRIX?
        </h2>

        <p className="mt-6 text-xl text-slate-700">
          Let's discuss your engineering requirements.
        </p>

        <Link
          href="/#contact"
          className="inline-block mt-10 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all"
        >
          Get Consultation
        </Link>

      </section>

    </main>
  );
}