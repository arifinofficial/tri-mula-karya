import type { Metadata } from "next";
import Footer from "@/components/organism/global/Footer";
import PressDetail from "@/components/organism/press/PressDetail";
import pressData from "@/data/press/pressData";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = pressData.find((p) => p.slug === slug);
    if (!article) return {};
    return {
        title: article.title,
        description: `${article.title} — A ${article.category} article by Tri Mula Karya, ${article.location}, ${article.date}.`,
        alternates: { canonical: `/press/${slug}` },
        openGraph: {
            url: `/press/${slug}`,
            type: "article",
            title: `${article.title} | Tri Mula Karya`,
            description: `${article.title} — ${article.category}, ${article.date}.`,
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = pressData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <>
            <PressDetail data={project} />
            <Footer/>
        </>
    );
}