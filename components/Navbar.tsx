import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Company Logo */}
        <Image
          src="/logo.png"
          alt="Ergotrix"
          width={350}
          height={90}
          className="w-40 md:w-64 h-auto"
          priority
        />

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 text-lg font-medium text-gray-700 lg:flex">
          <a href="#about" className="hover:text-blue-900 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-900 transition">
            Services
          </a>

          <a href="#industries" className="hover:text-blue-900 transition">
            Industries
          </a>

          <a href="#contact" className="hover:text-blue-900 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}