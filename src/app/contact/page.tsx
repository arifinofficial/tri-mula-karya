import type { Metadata } from "next";
import ContactSection from "@/components/organism/contact/ContactSection";
import Footer from "@/components/organism/global/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tri Mula Karya for architecture, construction, and interior design consultations in Bali. Visit us at Jl. Sumatera, Denpasar, or email info@trimulakarya.com.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
        <ContactSection/>
        <Footer/>
    </>
  );
}
