import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechnicalAuthority } from "@/components/TechnicalAuthority";
import { Services } from "@/components/Services";
import { Locations } from "@/components/Locations";
import { SocialProof } from "@/components/SocialProof";
import { LocationMap } from "@/components/LocationMap";
import { InstagramSection } from "@/components/InstagramSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBFC] text-[#0C1D32] selection:bg-[#007AAD] selection:text-white">
      {/* Editorial Sticky Navigation */}
      <Navbar />

      {/* 100vh Hero Section with Gradient Mask Integration */}
      <Hero />

      {/* Rigor & Technical Authority Section */}
      <TechnicalAuthority />

      {/* Editorial Service Cards */}
      <Services />

      {/* Regional Operating Presence: Pindamonhangaba (SP) & Marabá (PA) */}
      <Locations />

      {/* Social Proof: 5-Star Google Review from Lucas Alves */}
      <SocialProof />

      {/* Local Physical Base & Mapping: Moreira César, Pindamonhangaba */}
      <LocationMap />

      {/* Official Instagram Spotlight (@jlclima) */}
      <InstagramSection />

      {/* High-Impact Closing Conversion */}
      <FinalCta />

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />
    </main>
  );
}
