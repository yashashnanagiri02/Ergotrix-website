export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-blue-900">
          About Ergotrix
        </h2>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              Engineering Innovation with Precision
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              ERGOTRIX Engineering Solutions Private Limited specialises
              in delivering innovative engineering and product
              development solutions across industries.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              From concept generation and CAD modelling to CAE
              analysis, manufacturing support and technical
              documentation, we provide end-to-end engineering
              services tailored to client requirements.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our mission is to transform ideas into
              manufacturing-ready products through precision,
              innovation and engineering excellence.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-slate-100 rounded-3xl p-12 shadow-lg">

            <h3 className="text-2xl font-bold text-blue-900">
              Our Expertise
            </h3>

            <ul className="mt-6 space-y-4 text-gray-700 text-lg">

              <li>✓ Product Design & Development</li>
              <li>✓ CAD Services</li>
              <li>✓ CAE Services</li>
              <li>✓ Reverse Engineering</li>
              <li>✓ Design Validation</li>
              <li>✓ Manufacturing Support</li>
              <li>✓ Technical Documentation</li>
              <li>✓ Product Visualisation</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}