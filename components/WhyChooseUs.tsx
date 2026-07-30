export default function WhyChooseUs() {
  const reasons = [
    "Industry Expertise",
    "Innovative Engineering Solutions",
    "End-to-End Product Development",
    "Manufacturing-Ready Designs",
    "Client-Centric Approach",
    "Quality & Precision",
  ];

  return (
    <section id="why-us" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Why Choose Ergotrix?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Delivering engineering excellence through innovation and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="
              bg-slate-50
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {reason}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}