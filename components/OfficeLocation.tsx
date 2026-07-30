export default function OfficeLocation() {
  return (
    <section
      id="location"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Our Office Location
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Visit us or get in touch to discuss your engineering requirements.
          </p>
        </div>

        {/* Google Maps */}

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.5594233390116!2d73.87559587465334!3d18.57172686761067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c170ac1be801%3A0x9772f7e944da63d6!2sErgotrix%20Engineering%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1785331063340!5m2!1sen!2sin"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>

        </div>

      </div>
    </section>
  );
}