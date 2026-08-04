"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919370796091?text=Hi%20ERGOTRIX%20Team,%20I%20am%20interested%20in%20your%20engineering%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact ERGOTRIX on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
      "
    >
      <FaWhatsapp
        size={34}
        color="white"
      />
    </a>
  );
}