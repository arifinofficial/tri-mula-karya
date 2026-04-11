import PageTransition from "@/components/atoms/PageTransition";
import Footer from "@/components/organism/global/Footer";
import PressDetail from "@/components/organism/press/PressDetail";
import pressData from "@/data/press/pressData";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = pressData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <PageTransition>
            <PressDetail data={project} />
            <Footer/>
        </PageTransition>
    );
}