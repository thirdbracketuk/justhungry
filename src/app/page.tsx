import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Dishes from "@/components/Dishes";
import About from "@/components/About";

import Reviews from "@/components/Reviews";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hours from "@/components/Hours";

export default function Home() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <About />
      <Hours />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
