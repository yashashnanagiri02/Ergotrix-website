import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/80
      border-b
      border-gray-200
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >
        <Image
          src="/logo.png"
          alt="Ergotrix"
          width={350}
          height={90}
          className="w-44 md:w-72 h-auto"
          priority
        />

        <div
          className="
          hidden
          lg:flex
          gap-10
          text-lg
          font-semibold
          text-gray-700
          "
        >
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