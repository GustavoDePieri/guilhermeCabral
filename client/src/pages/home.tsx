import Navigation from "@/components/ui/navigation";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Hero from "@/components/sections/hero";
import Quiz from "@/components/sections/quiz";
import Protocol from "@/components/sections/protocol";
import InvisibleEnemy from "@/components/sections/invisible-enemy";
import Timeline from "@/components/sections/timeline";
import Video from "@/components/sections/video";
import Results from "@/components/sections/results";
import Testimonials from "@/components/sections/testimonials";
import Community from "@/components/sections/community";
import AboutDoctor from "@/components/sections/about-doctor";
import Philosophy from "@/components/sections/philosophy";
import Articles from "@/components/sections/articles";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Quiz />
      <Protocol />
      <InvisibleEnemy />
      <Timeline />
      <Video />
      <Results />
      <Testimonials />
      <Community />
      <AboutDoctor />
      <Philosophy />
      <Articles />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
