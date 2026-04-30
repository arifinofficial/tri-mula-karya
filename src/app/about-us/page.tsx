import type { Metadata } from "next";
import AboutHero from "@/components/organism/about/AboutHero";
import AboutProcess from "@/components/organism/about/AboutProcess";
import AboutService from "@/components/organism/about/AboutService";
import CTA from "@/components/organism/global/CTA";
import Footer from "@/components/organism/global/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Tri Mula Karya — an architecture, construction, and interior design company in Denpasar, Bali. We approach every project with curiosity towards space, material, activity, and culture.",
  alternates: { canonical: "/about-us" },
  openGraph: { url: "/about-us" },
};

export default function AboutPage() {
  return (
    <>
        <AboutHero/>
        <AboutService/>
        <AboutProcess/>
        <CTA/>
        <Footer/>
    </>
  );
}
