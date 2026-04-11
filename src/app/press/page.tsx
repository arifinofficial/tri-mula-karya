import PageTransition from "@/components/atoms/PageTransition";
import Footer from "@/components/organism/global/Footer";
import PressList from "@/components/organism/press/PressList";


export default function PressPage() {
    return (
        <PageTransition>
            <PressList/>
            <Footer/>
        </PageTransition>
    );
}