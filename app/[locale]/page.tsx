import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";
import Benefits from "@/sections/Benefits";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-emerald-500/30 w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
