import PageTransition from "@/components/atoms/PageTransition";
import AboutHero from "@/components/organism/about/AboutHero";
import AboutProcess from "@/components/organism/about/AboutProcess";
import AboutService from "@/components/organism/about/AboutService";
import ContactSection from "@/components/organism/contact/ContactSection";
import CTA from "@/components/organism/global/CTA";
import Footer from "@/components/organism/global/Footer";


export default function ContactPage() {
  return (
    <PageTransition>
        <ContactSection/>
        <Footer/>
    </PageTransition>
  );
}
