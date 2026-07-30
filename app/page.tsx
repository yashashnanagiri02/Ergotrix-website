import Clients from "@/components/Clients";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Lifecycle from "../components/Lifecycle";
import WhyChooseUs from "../components/WhyChooseUs";
import Industries from "../components/Industries";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import OfficeLocation from "../components/OfficeLocation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Lifecycle />
      <WhyChooseUs />
      <Industries />
      <Clients />
      <Contact />
      <OfficeLocation />
      <Footer />
      <WhatsappButton />
    </>
  );
}