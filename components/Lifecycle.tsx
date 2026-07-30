export default function Lifecycle() {
  const processSteps = [
    {
      number: "01",
      title: "Ideation",
      description:
        "Transforming innovative ideas into feasible engineering solutions tailored to client requirements.",
    },
    {
      number: "02",
      title: "Concept Design",
      description:
        "Developing detailed concepts and design strategies for efficient product development.",
    },
    {
      number: "03",
      title: "Engineering & Analysis",
      description:
        "Performing CAD modelling and engineering analysis to ensure performance and manufacturability.",
    },
    {
      number: "04",
      title: "Prototyping & Validation",
      description:
        "Testing and validating designs before moving towards production.",
    },
    {
      number: "05",
      title: "Manufacturing Support",
      description:
        "Providing end-to-end manufacturing support for seamless product delivery.",
    },
  ];

  return (
    <section
      id="engineering-process"
      className="bg-slate-50 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Engineering Process
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Our proven engineering methodology ensures innovative,
            manufacturing-ready solutions for every project.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              border border-slate-200
              "
            >
              {/* Step Number */}

              <h3 className="text-6xl font-bold text-blue-100">
                {step.number}
              </h3>

              {/* Title */}

              <h4 className="mt-4 text-3xl font-bold text-blue-900">
                {step.title}
              </h4>

              {/* Description */}

              <p className="mt-4 text-gray-600 leading-8">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}