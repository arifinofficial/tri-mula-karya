import type { Metadata } from "next";
import CTA from "@/components/organism/global/CTA";
import Footer from "@/components/organism/global/Footer";
import HomeAbout from "@/components/organism/home/HomeAbout";
import HomeExpertise from "@/components/organism/home/HomeExpertise";
import HomeHero from "@/components/organism/home/HomeHero";
import HomeProject from "@/components/organism/home/HomeProject";

export const metadata: Metadata = {
  title: "Tri Mula Karya — Architecture, Construction & Interior in Bali",
  description:
    "Tri Mula Karya is a trusted architecture, construction, and interior design company in Denpasar, Bali. Let us bring your dream space to life.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeProject />
      <HomeExpertise />
      <CTA />
      <Footer />
    </>
  );
}
