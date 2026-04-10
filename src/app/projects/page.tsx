import PageTransition from "@/components/atoms/PageTransition";
import ProjectList from "@/components/organism/project/ProjectList";

export default function ProjectsPage() {
    return (
        <PageTransition>
            <ProjectList/>
        </PageTransition>
    );
}