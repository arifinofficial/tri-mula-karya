import PageTransition from "@/components/atoms/PageTransition";
import Footer from "@/components/organism/global/Footer";
import ProjectList from "@/components/organism/project/ProjectList";

export default function ProjectsPage() {
    return (
        <PageTransition>
            <ProjectList/>
            <Footer />
        </PageTransition>
    );
}