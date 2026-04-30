import type { Metadata } from "next";
import Footer from "@/components/organism/global/Footer";
import ProjectDetail from "@/components/organism/project/ProjectDetail";
import projectData from "@/data/global/projectData";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: project.projectName,
        description: `${project.projectDesc} — A ${project.category} project by Tri Mula Karya in ${project.projectInfo.projectLocation}, completed ${project.projectInfo.dateCompleted}.`,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: {
            url: `/projects/${slug}`,
            title: `${project.projectName} | Tri Mula Karya`,
            description: project.projectDesc,
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <>
            <ProjectDetail data={project} />
            <Footer/>
        </>
    );
}