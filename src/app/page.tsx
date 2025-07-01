import TransitionCarousel from "@/components/demo-carousel";
import HealthcareInfographic from "@/components/healthcare-infographic";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HealthcareInfographic />
      <TransitionCarousel />
    </div>
  );
}
