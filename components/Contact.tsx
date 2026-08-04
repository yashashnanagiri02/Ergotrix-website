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
        setSuccess(
          "Thank you! Your enquiry has been sent successfully. Our team will get back to you soon."
        );

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError(
          data.message || "Unable to send your enquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-100 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[4px] text-blue-700">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950 md:text-5xl">
            Contact Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Have an engineering requirement or product development
            idea? Get in touch with our team and let's build something
            exceptional together.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ================================= */}
          {/* LEFT - ENQUIRY FORM */}
          {/* ================================= */}

          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">

            <h3 className="text-3xl font-bold text-blue-900">
              Send an Enquiry
            </h3>

            <p className="mt-3 text-gray-600">
              Tell us about your project requirements and our team
              will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* FULL NAME */}

              <div>

                <label
                  htmlFor="fullName"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    placeholder:text-gray-500
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                  required
                />

              </div>

              {/* COMPANY */}

              <div>

                <label
                  htmlFor="companyName"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Company Name
                </label>

                <input
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    placeholder:text-gray-500
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                />

              </div>

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    placeholder:text-gray-500
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                  required
                />

              </div>

              {/* PHONE */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    placeholder:text-gray-500
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                  required
                />

              </div>

              {/* SERVICE */}

              <div>

                <label
                  htmlFor="service"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Product Design & Development">
                    Product Design & Development
                  </option>

                  <option value="Engineering Services">
                    Engineering Services
                  </option>

                  <option value="Manufacturing Support">
                    Manufacturing Support
                  </option>

                  <option value="Automotive Seating Solutions">
                    Automotive Seating Solutions
                  </option>

                  <option value="Reverse Engineering">
                    Reverse Engineering
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Project Requirements *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project, requirements, timeline, or any other details..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    p-4
                    text-black
                    placeholder:text-gray-500
                    focus:border-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                  "
                  required
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-blue-900
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-800
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {loading
                  ? "Sending Enquiry..."
                  : "Send Enquiry"}

              </button>

              {/* SUCCESS */}

              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                  <p className="font-medium">
                    ✓ {success}
                  </p>
                </div>
              )}

              {/* ERROR */}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <p className="font-medium">
                    {error}
                  </p>
                </div>
              )}

            </form>

          </div>

          {/* ================================= */}
          {/* RIGHT - COMPANY INFORMATION */}
          {/* ================================= */}

          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">

            <p className="font-semibold uppercase tracking-[3px] text-blue-700">
              ERGOTRIX
            </p>

            <h3 className="mt-4 text-3xl font-bold text-blue-950">
              Engineering Solutions Pvt Ltd
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Engineering Excellence. Innovation Delivered.
            </p>

            {/* CONTACT INFORMATION */}

            <div className="mt-10 space-y-8">

              {/* EMAIL */}

              <div>

                <h4 className="font-bold text-blue-900">
                  Email Address
                </h4>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ergotrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2
                    inline-block
                    text-gray-600
                    transition-colors
                    hover:text-blue-700
                    hover:underline
                  "
                >
                  info@ergotrix.com
                </a>

              </div>

              {/* BUSINESS HOURS */}

              <div>

                <h4 className="font-bold text-blue-900">
                  Business Hours
                </h4>

                <p className="mt-2 text-gray-600">
                  Monday – Saturday
                </p>

                <p className="text-gray-600">
                  9:00 AM – 6:00 PM
                </p>

              </div>

              {/* OFFICE */}

              <div>

                <h4 className="font-bold text-blue-900">
                  Office Location
                </h4>

                <a
                  href="#location"
                  className="
                    mt-2
                    inline-block
                    text-gray-600
                    transition-colors
                    hover:text-blue-700
                    hover:underline
                  "
                >
                  Pune, Maharashtra, India
                </a>

              </div>

              {/* PROMISE */}

              <div>

                <h4 className="font-bold text-blue-900">
                  Our Promise
                </h4>

                <p className="mt-3 leading-8 text-gray-600">
                  We are committed to delivering innovative,
                  precise and manufacturing-ready engineering
                  solutions tailored to our clients' requirements.
                </p>

              </div>

            </div>

            {/* DIRECT ENQUIRY */}

            <div className="mt-10 rounded-2xl bg-blue-50 p-6">

              <h4 className="text-xl font-bold text-blue-900">
                Looking for Engineering Support?
              </h4>

              <p className="mt-3 leading-7 text-gray-600">
                Share your requirements with our engineering team
                and let's discuss how we can help bring your idea
                to reality.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ergotrix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  rounded-xl
                  bg-blue-900
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-800
                  hover:shadow-lg
                "
              >
                Email Our Team →
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}