import CTA from "@/components/organism/global/CTA";
import HomeAbout from "@/components/organism/home/HomeAbout";
import HomeExpertise from "@/components/organism/home/HomeExpertise";
import HomeHero from "@/components/organism/home/HomeHero";
import HomeProject from "@/components/organism/home/HomeProject";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeHero/>
      <HomeAbout/>
      <HomeProject/>
      <HomeExpertise/>
      <CTA/>
    </main>
  );
}
