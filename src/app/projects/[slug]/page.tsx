import ProjectDetail from "@/components/organism/project/ProjectDetail";
import projectData from "@/data/global/projectData";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main>
            <ProjectDetail data={project} />
        </main>
    );
}