import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero";
import ServiceCarousel from "./sections/ServicesCarousel";
import JoinUs from "./sections/JoinUs";
// import TrustedBy from "./sections/TrustedBy";
import OurPartners from "./sections/OurPartners"; 


export default function Home() {
  return (
    <>
    <main id="main">
      <Hero />
      <ServiceCarousel />
      <JoinUs />
      <OurPartners />
    </main>
    </>
  );
}
