export default function Industries() {
  const industries = [
    "Automotive",
    "Medical Devices",
    "Industrial Equipment",
    "Consumer Products",
    "Mechanical Engineering",
    "Manufacturing",
  ];

  return (
    <section id="industries" className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Engineering solutions tailored for diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="
              bg-white
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
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}