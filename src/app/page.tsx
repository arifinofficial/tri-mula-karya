import CTA from "@/components/organism/global/CTA";
import HomeAbout from "@/components/organism/home/HomeAbout";
import HomeExpertise from "@/components/organism/home/HomeExpertise";
import HomeHero from "@/components/organism/home/HomeHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeHero/>
      <HomeAbout/>
      <HomeExpertise/>
      <CTA/>
    </main>
  );
}
