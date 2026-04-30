import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "@/components/organism/global/Footer";
import ProjectList from "@/components/organism/project/ProjectList";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore the architecture, construction, and interior design portfolio of Tri Mula Karya in Bali. From villas to residences and commercial spaces — all delivered to the highest standard.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
    return (
        <>
            <Suspense>
                <ProjectList/>
            </Suspense>
            <Footer />
        </>
    );
}