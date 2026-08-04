"use client";

import {
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Product Design & Development",
  "Engineering Services",
  "Manufacturing Support",
  "Automotive Seating Solutions",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-900/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-800/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* MAIN FOOTER */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <span className="text-lg font-extrabold text-white">
                  E
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-wide">
                  ERGOTRIX
                </h2>

                <p className="text-xs font-medium uppercase tracking-[2px] text-blue-400">
                  Engineering Solutions
                </p>
              </div>

            </div>

            <p className="mt-7 max-w-sm text-base leading-7 text-slate-400">
              Delivering innovative engineering solutions in product
              design, CAD engineering, automotive seating and
              manufacturing support.
            </p>

            <div className="mt-7 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3">
              <p className="text-sm font-semibold text-blue-300">
                Engineering Excellence.
                <br />
                <span className="text-white">
                  Innovation Delivered.
                </span>
              </p>
            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[2px] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[2px] text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-blue-400"
                >
                  {service}
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[2px] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* EMAIL */}

              <a
                href="mailto:info@ergotrix.com"
                className="group flex items-start gap-3"
              >

                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-blue-400">
                    info@ergotrix.com
                  </p>

                </div>

              </a>

              {/* LOCATION */}

              <a
                href="#location"
                className="group flex items-start gap-3"
              >

                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Office
                  </p>

                  <p className="mt-1 text-sm text-slate-300 transition-colors group-hover:text-blue-400">
                    Pune, Maharashtra, India
                  </p>

                </div>

              </a>

              {/* BUSINESS HOURS */}

              <div className="flex items-start gap-3">

                <Clock3
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Business Hours
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Monday – Saturday
                  </p>

                  <p className="text-sm text-slate-400">
                    9:00 AM – 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM */}

        <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-slate-500">
            © {new Date().getFullYear()} ERGOTRIX Engineering Solutions
            Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#contact"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Contact Us
            </a>

            <a
              href="#location"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Find Us
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}