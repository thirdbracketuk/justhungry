import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";

import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      {/* <Expertise/> */}
      {/* <Review /> */}
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
