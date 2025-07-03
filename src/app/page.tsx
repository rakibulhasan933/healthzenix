import TransitionCarousel from "@/components/demo-carousel";
import { Footer } from "@/components/footer";
import HealthcareInfographic from "@/components/healthcare-infographic";
import Hero from "@/components/Hero";
import { Navigation } from "@/components/navigation";
import Reclaim from "@/components/Reclaim";
import Restore from "@/components/Restore";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <HealthcareInfographic />
      <TransitionCarousel />
      <Restore />
      <Reclaim />
      <div className="md:mx-10 mx-4 my-10">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
