"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Enquiry sent successfully!");

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-slate-100 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Let's build something amazing together.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-3xl font-semibold text-blue-900 mb-8">
              Send an Enquiry
            </h3>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
                required
              />

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
                required
              />

              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Required Service"
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements..."
                className="
                w-full
                p-4
                rounded-xl
                border
                border-gray-300
                text-black
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-900
                "
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="
                bg-blue-900
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-blue-800
                transition-all
                duration-300
                disabled:opacity-70
                "
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

              {success && (
                <p className="text-green-600 font-medium">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-red-600 font-medium">
                  {error}
                </p>
              )}

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h3 className="text-3xl font-semibold text-blue-900 mb-6">
              ERGOTRIX Engineering Solutions Pvt Ltd
            </h3>

            <p className="text-gray-600 text-lg mb-8">
              Engineering Excellence. Innovation Delivered.
            </p>

            <div className="space-y-6">

              <div>
                <h4 className="font-bold text-blue-900">
                  Business Hours
                </h4>
                <p className="text-gray-600">
                  Monday - Saturday
                </p>
                <p className="text-gray-600">
                  9 AM - 6 PM
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-900">
                  Email Address
                </h4>
                <p className="text-gray-600">
                  info@ergotrix.com
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-900">
                  Office Location
                </h4>
                <p className="text-gray-600">
                  Hyderabad, Telangana, India
                </p>
              </div>

              <div>
                <h4 className="font-bold text-blue-900">
                  Our Promise
                </h4>
                <p className="text-gray-600 leading-8">
                  We are committed to delivering innovative,
                  manufacturing-ready engineering solutions
                  tailored to your business requirements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}