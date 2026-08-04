"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

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
        setSuccess("Your enquiry has been sent successfully!");

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setError(data.message || "Unable to send your enquiry.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-900/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-800/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">
            Contact Ergotrix
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block text-blue-400">
              Exceptional Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Have a product idea, engineering challenge or manufacturing
            requirement? Tell us about your project and our team will
            get back to you.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* FORM */}

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-2xl sm:p-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <MessageSquare
                  size={24}
                  className="text-blue-700"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Send an Enquiry
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Tell us what you are looking to build.
                </p>
              </div>

            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              {/* Name + Company */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company Name
                  </label>

                  <input
                    id="companyName"
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* Email + Phone */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

              </div>

              {/* Service */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Required Service
                </label>

                <input
                  id="service"
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="e.g. Product Design, CAD Engineering, Automotive Seating"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Project Requirements
                </label>

                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, requirements or engineering challenge..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Enquiry..." : "Send Enquiry"}

                {!loading && (
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              {/* Success */}

              {success && (
                <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                  <CheckCircle2 size={20} />
                  {success}
                </div>
              )}

              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

            </form>
          </div>

          {/* CONTACT INFORMATION */}

          <div className="flex flex-col gap-6">

            {/* Company Card */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-400">
                ERGOTRIX
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Engineering Solutions
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Engineering Excellence. Innovation Delivered.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Connect with our team to discuss product development,
                CAD engineering, automotive seating, manufacturing
                support or your next engineering challenge.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              {/* Email */}

              <a
                href="mailto:info@ergotrix.com"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10"
              >

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                    <Mail
                      size={21}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 font-semibold text-white group-hover:text-blue-300">
                      info@ergotrix.com
                    </p>
                  </div>

                </div>

              </a>

              {/* Location */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                    <MapPin
                      size={21}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Office
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Pune, Maharashtra, India
                    </p>
                  </div>

                </div>

              </div>

              {/* Hours */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20">
                    <Clock3
                      size={21}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Business Hours
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Monday – Saturday
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      9:00 AM – 6:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Promise */}

            <div className="rounded-2xl border border-blue-500/20 bg-blue-600/10 p-6">

              <p className="text-sm font-semibold uppercase tracking-[2px] text-blue-400">
                Our Promise
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                We are committed to delivering innovative,
                manufacturing-ready engineering solutions tailored
                to your business requirements.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}