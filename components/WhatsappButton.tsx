import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Ergotrix%20Team,%20I%20am%20interested%20in%20your%20engineering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-green-500
      p-4
      rounded-full
      shadow-2xl
      hover:scale-110
      transition-all
      duration-300
      "
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
}