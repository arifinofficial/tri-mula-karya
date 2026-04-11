
import PageTransition from "@/components/atoms/PageTransition";
import AboutHero from "@/components/organism/about/AboutHero";
import AboutProcess from "@/components/organism/about/AboutProcess";
import AboutService from "@/components/organism/about/AboutService";
import CTA from "@/components/organism/global/CTA";
import Footer from "@/components/organism/global/Footer";


export default function AboutPage() {
  return (
    <PageTransition>
        <AboutHero/>
        <AboutService/>
        <AboutProcess/>
        <CTA/>
        <Footer/>
    </PageTransition>
  );
}
