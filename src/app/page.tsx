import CTA from "@/components/organism/global/CTA";
import Footer from "@/components/organism/global/Footer";
import HomeAbout from "@/components/organism/home/HomeAbout";
import HomeExpertise from "@/components/organism/home/HomeExpertise";
import HomeHero from "@/components/organism/home/HomeHero";
import HomeProject from "@/components/organism/home/HomeProject";

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
