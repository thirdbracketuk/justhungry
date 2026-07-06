import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Dishes from "@/components/Dishes";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Reviews from "@/components/Reviews";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
