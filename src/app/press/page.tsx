import type { Metadata } from "next";
import Footer from "@/components/organism/global/Footer";
import PressList from "@/components/organism/press/PressList";

export const metadata: Metadata = {
  title: "Press & News",
  description:
    "Read the latest articles, news, and features about Tri Mula Karya's projects and activities — an architecture and construction company in Denpasar, Bali.",
  alternates: { canonical: "/press" },
  openGraph: { url: "/press" },
};

export default function PressPage() {
    return (
        <>
            <PressList/>
            <Footer/>
        </>
    );
}