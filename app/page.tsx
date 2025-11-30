import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-[#F6F6EF] dark:bg-neutral-800 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}