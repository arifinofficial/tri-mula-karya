// // src/components/organism/project/ProjectList.tsx
// "use client";

// import { useState, useMemo, useRef, useEffect } from "react";
// import projectData from "@/data/global/projectData";
// import projectListData from "@/data/projects/projectListData";
// import Image from "next/image";
// import { TransitionLink } from "@/components/atoms/TransitionLink";

// const slugify = (str: string) => str.trim().replace(/\s+/g, "-");

// const ProjectList = () => {
//     // activeFilter hanya dipakai untuk styling tombol & counter teks
//     const [activeFilter, setActiveFilter] = useState("all");
//     const containerRef = useRef<HTMLDivElement>(null);
//     const isAnimating = useRef(false);
//     const filterRef = useRef("all");

//     const categories = useMemo(() => {
//         return Array.from(new Set(projectData.map((p) => p.category)));
//     }, []);

//     const visibleCount =
//         activeFilter === "all"
//             ? projectData.length
//             : projectData.filter((p) => slugify(p.category) === activeFilter).length;

//     // Initial entrance — set opacity 0 dulu via CSS, baru GSAP animate in
//     useEffect(() => {
//         const run = async () => {
//             const { gsap } = await import("gsap");
//             const container = containerRef.current;
//             if (!container) return;
//             const items = container.querySelectorAll<HTMLElement>(".project-item");
//             gsap.fromTo(
//                 items,
//                 { opacity: 0, y: 24 },
//                 { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08, delay: 0.05 }
//             );
//         };
//         run();
//     }, []);

//     const handleFilter = async (newFilter: string) => {
//         if (newFilter === filterRef.current || isAnimating.current) return;
//         isAnimating.current = true;
//         filterRef.current = newFilter;

//         const { gsap } = await import("gsap");
//         const container = containerRef.current;
//         if (!container) return;

//         const allItems = Array.from(
//             container.querySelectorAll<HTMLElement>(".project-item")
//         );

//         // Pisahkan item berdasarkan filter baru
//         const leaving = allItems.filter((el) => {
//             if (newFilter === "all") return false;
//             return el.dataset.category !== newFilter;
//         });

//         const entering = allItems.filter((el) => {
//             if (newFilter === "all") return true;
//             return el.dataset.category === newFilter;
//         });

//         // Kill semua animasi yang sedang berjalan
//         gsap.killTweensOf(allItems);

//         // 1. Fade + slide up leaving items
//         // 2. Bersamaan, fade out entering items sedikit (akan fade in lagi dengan posisi baru)
//         // 3. Setelah semua selesai, update React state → re-render dengan layout baru
//         // 4. Setelah re-render, fade in items baru

//         const tl = gsap.timeline();

//         if (leaving.length > 0) {
//             tl.to(leaving, {
//                 opacity: 0,
//                 y: -10,
//                 duration: 0.3,
//                 ease: "power2.in",
//                 stagger: { amount: 0.12 },
//             });
//         }

//         // Fade out entering items supaya tidak flicker saat re-render
//         tl.to(
//             entering,
//             { opacity: 0, duration: 0.2, ease: "power1.in" },
//             0 // mulai bersamaan dengan leaving
//         );

//         tl.call(() => {
//             // Update React state — trigger re-render dengan layout baru
//             setActiveFilter(newFilter);
//         });

//         // Tunggu 2 frame agar React selesai render + browser paint
//         tl.call(
//             () => {
//                 const newItems = Array.from(
//                     container.querySelectorAll<HTMLElement>(".project-item")
//                 );
//                 // Pastikan semua invisible dulu (handle kasus React re-render)
//                 gsap.set(newItems, { opacity: 0, y: 16 });

//                 // Fade in semua item baru
//                 gsap.to(newItems, {
//                     opacity: 1,
//                     y: 0,
//                     duration: 0.45,
//                     ease: "power3.out",
//                     stagger: 0.07,
//                     onComplete: () => {
//                         isAnimating.current = false;
//                     },
//                 });
//             },
//             [],
//             // Delay cukup untuk React render + 2 RAF
//             "+=0.05"
//         );
//     };

//     // Filtered projects untuk di-render — index di-reset agar layoutConfig dari 0
//     const filteredProjects = useMemo(() => {
//         if (activeFilter === "all") return projectData;
//         return projectData.filter((p) => slugify(p.category) === activeFilter);
//     }, [activeFilter]);

//     return (
//         <section className="pt-50 pb-25 px-9 xl:px-21 bg-primary border-b border-foreground/30 md:border-0">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
//                 <div className="md:col-span-3">
//                     <pre className="font-sans! font-medium text-sm md:text-base">
//                         {projectListData.preTitle}
//                     </pre>
//                 </div>
//                 <div className="md:col-span-8 md:col-start-5">
//                     <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-[4rem] font-medium">
//                         {projectListData.title}
//                     </h1>
//                 </div>
//             </div>

//             <div className="my-12.5 lg:my-25 w-full h-px bg-foreground/30"></div>

//             <div className="flex flex-col gap-25 lg:gap-50">
//                 {/* Filters */}
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
//                     <div className="md:col-span-3 flex flex-row gap-4 items-center">
//                         <div className="w-3 h-3 bg-foreground"></div>
//                         <span className="text-lg md:text-2xl xl:text-[2rem] font-normal">
//                             Filters
//                         </span>
//                     </div>

//                     <div className="md:col-span-8 md:col-start-5 flex flex-wrap gap-4 lg:gap-7.5 md:justify-end">
//                         <button
//                             className={`cursor-pointer p-2.5 px-5 flex items-center gap-2.5 text-base transition-all duration-500 ease-in-out shrink-0 w-fit ${
//                                 activeFilter === "all"
//                                     ? "text-[#1A1A19] bg-[#F8FAFC]"
//                                     : "text-[#F8FAFC] border border-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#1A1A19]"
//                             }`}
//                             onClick={() => handleFilter("all")}
//                         >
//                             All
//                         </button>

//                         {categories.map((category) => {
//                             const slug = slugify(category);
//                             return (
//                                 <button
//                                     key={slug}
//                                     className={`cursor-pointer p-2.5 px-5 capitalize flex items-center gap-2.5 text-base transition-all duration-500 ease-in-out shrink-0 w-fit ${
//                                         activeFilter === slug
//                                             ? "text-[#1A1A19] bg-[#F8FAFC]"
//                                             : "text-[#F8FAFC] border border-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#1A1A19]"
//                                     }`}
//                                     onClick={() => handleFilter(slug)}
//                                 >
//                                     {category}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Projects */}
//                 <div className="flex flex-col gap-8 lg:gap-15">
//                     <span className="text-base lg:text-xl xl:text-2xl text-foreground">
//                         Showing{" "}
//                         {activeFilter === "all"
//                             ? "All"
//                             : categories.find((c) => slugify(c) === activeFilter)}{" "}
//                         — {visibleCount} Project{visibleCount !== 1 ? "s" : ""}
//                     </span>

//                     <div
//                         ref={containerRef}
//                         className="grid grid-cols-12 gap-2 lg:gap-8 gap-y-10 lg:gap-y-16"
//                     >
//                         {filteredProjects.map((project, index) => {
//                             // const config = layoutConfig[index % layoutConfig.length];
//                             const categorySlug = slugify(project.category);

//                             return (
//                                 <div
//                                     key={project.slug}
//                                     data-slug={project.slug}
//                                     data-category={categorySlug}
//                                     // opacity: 0 default — GSAP yang akan set ke 1
//                                     // Ini mencegah flash saat item baru mount
//                                     style={{ opacity: 0 }}
//                                     className={`project-item col-span-12 md:col-span-6`}
//                                 >
//                                     <TransitionLink href={`/projects/${project.slug}`} className="group">
//                                         <div className="relative mb-5">
//                                             <Image
//                                                 src={project.projectThumbnail}
//                                                 alt={project.projectName}
//                                                 className={`w-full h-full aspect-square object-cover`}
//                                             />
//                                             <div className="absolute top-0 left-0 w-full h-full bg-primary/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
//                                             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//                                                 <Image
//                                                     src={project.projectThumbnail}
//                                                     alt={project.projectName}
//                                                     className={`w-full h-full aspect-square object-cover scale-0 group-hover:scale-75 transition-all duration-500 ease-in-out`}
//                                                 />
//                                             </div>
//                                         </div>

//                                         <div className="flex justify-between items-center">
//                                             <div className="flex gap-4 lg:gap-10 h-[1.3em] lg:h-[1.2em] items-center">
//                                                 <span className="text-sm lg:text-lg text-foreground/70">
//                                                     [{String(index + 1).padStart(2, "0")}]
//                                                 </span>
//                                                 <span className="text-sm lg:text-lg font-medium">
//                                                     {project.projectName}
//                                                 </span>
//                                             </div>

//                                             <div className="overflow-hidden h-[1lh] lg:h-[1.2lh]">
//                                                 <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-[0.8lh] lg:group-hover:-translate-y-[1lh] items-end">
//                                                     <span className="text-sm lg:text-lg font-medium">
//                                                         {project.projectYear}
//                                                     </span>
//                                                     <span className="text-sm lg:text-lg font-medium">
//                                                         View project →
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </TransitionLink>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProjectList;


// ====================================================== Sekat ======================================================

// src/components/organism/project/ProjectList.tsx
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import projectData from "@/data/global/projectData";
import projectListData from "@/data/projects/projectListData";
import Image from "next/image";
import { TransitionLink } from "@/components/atoms/TransitionLink";

const slugify = (str: string) => str.trim().replace(/\s+/g, "-");

const ProjectList = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Baca initial filter dari URL param ?category=...
    const initialFilter = searchParams.get("category") ?? "all";

    const [activeFilter, setActiveFilter] = useState(initialFilter);
    const containerRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
    const filterRef = useRef(initialFilter);

    const categories = useMemo(() => {
    return Array.from(new Set(projectData.map((p) => p.category))).sort();
}, []);

    const visibleCount =
        activeFilter === "all"
            ? projectData.length
            : projectData.filter((p) => slugify(p.category) === activeFilter).length;

    // Initial entrance — set opacity 0 dulu via CSS, baru GSAP animate in
    useEffect(() => {
        const run = async () => {
            const { gsap } = await import("gsap");
            const container = containerRef.current;
            if (!container) return;
            const items = container.querySelectorAll<HTMLElement>(".project-item");
            gsap.fromTo(
                items,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08, delay: 0.05 }
            );
        };
        run();
    }, []);

    // Sinkronisasi filter jika user navigasi back/forward (browser history)
    useEffect(() => {
        const param = searchParams.get("category") ?? "all";
        if (param !== filterRef.current) {
            handleFilter(param);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const handleFilter = async (newFilter: string) => {
        if (newFilter === filterRef.current || isAnimating.current) return;
        isAnimating.current = true;
        filterRef.current = newFilter;

        const { gsap } = await import("gsap");
        const container = containerRef.current;
        if (!container) return;

        const allItems = Array.from(
            container.querySelectorAll<HTMLElement>(".project-item")
        );

        // Pisahkan item berdasarkan filter baru
        const leaving = allItems.filter((el) => {
            if (newFilter === "all") return false;
            return el.dataset.category !== newFilter;
        });

        const entering = allItems.filter((el) => {
            if (newFilter === "all") return true;
            return el.dataset.category === newFilter;
        });

        // Kill semua animasi yang sedang berjalan
        gsap.killTweensOf(allItems);

        const tl = gsap.timeline();

        if (leaving.length > 0) {
            tl.to(leaving, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in",
                stagger: { amount: 0.12 },
            });
        }

        // Fade out entering items supaya tidak flicker saat re-render
        tl.to(
            entering,
            { opacity: 0, duration: 0.2, ease: "power1.in" },
            0 // mulai bersamaan dengan leaving
        );

        tl.call(() => {
            // Update React state
            setActiveFilter(newFilter);

            // Update URL param tanpa full reload
            const params = new URLSearchParams(searchParams.toString());
            if (newFilter === "all") {
                params.delete("category");
            } else {
                params.set("category", newFilter);
            }
            router.replace(`?${params.toString()}`, { scroll: false });
        });

        // Tunggu 2 frame agar React selesai render + browser paint
        tl.call(
            () => {
                const newItems = Array.from(
                    container.querySelectorAll<HTMLElement>(".project-item")
                );
                gsap.set(newItems, { opacity: 0, y: 16 });

                gsap.to(newItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: "power3.out",
                    stagger: 0.07,
                    onComplete: () => {
                        isAnimating.current = false;
                    },
                });
            },
            [],
            "+=0.05"
        );
    };

    // Filtered projects untuk di-render
    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projectData;
        return projectData.filter((p) => slugify(p.category) === activeFilter);
    }, [activeFilter]);

    return (
        <section className="pt-35 lg:pt-50 pb-25 px-9 xl:px-21 bg-primary border-b border-foreground/30 md:border-0">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
                <div className="md:col-span-3">
                    <pre className="font-sans! font-medium text-sm md:text-base">
                        {projectListData.preTitle}
                    </pre>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-[4rem] font-medium">
                        {projectListData.title}
                    </h1>
                </div>
            </div>

            <div className="my-12.5 lg:my-25 w-full h-px bg-foreground/30"></div>

            <div className="flex flex-col gap-12.5 lg:gap-50">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
                    <div className="md:col-span-3 hidden md:flex flex-row gap-4 items-center">
                        <div className="w-3 h-3 bg-foreground"></div>
                        <span className="text-lg md:text-2xl xl:text-[2rem] font-normal">
                            Filters
                        </span>
                    </div>

                    <div className="md:col-span-8 md:col-start-5 flex overflow-x-auto pb-2 md:pb-0 md:overflow-x-visible md:flex-wrap gap-4 lg:gap-7.5 md:justify-end scrollbar-none">
                        <button
                            className={`hidden md:flex cursor-pointer p-2.5 px-5 items-center gap-2.5 text-base transition-all duration-500 ease-in-out shrink-0 w-fit ${
                                activeFilter === "all"
                                    ? "text-[#1A1A19] bg-[#F8FAFC]"
                                    : "text-[#F8FAFC] border border-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#1A1A19]"
                            }`}
                            onClick={() => handleFilter("all")}
                        >
                            All
                        </button>

                        {categories.map((category) => {
                            const slug = slugify(category);
                            return (
                                <button
                                    key={slug}
                                    className={`cursor-pointer p-2.5 px-5 capitalize flex items-center gap-2.5 text-base transition-all duration-500 ease-in-out shrink-0 w-fit ${
                                        activeFilter === slug
                                            ? "text-[#1A1A19] bg-[#F8FAFC]"
                                            : "text-[#F8FAFC] border border-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#1A1A19]"
                                    }`}
                                    onClick={() => handleFilter(slug)}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-8 lg:gap-15">
                    <span className="text-base lg:text-xl xl:text-2xl text-foreground">
                        Showing{" "}
                        {activeFilter === "all"
                            ? "All"
                            : categories.find((c) => slugify(c) === activeFilter)}{" "}
                        — {visibleCount} Project{visibleCount !== 1 ? "s" : ""}
                    </span>

                    <div
                        ref={containerRef}
                        className="grid grid-cols-12 gap-2 lg:gap-8 gap-y-10 lg:gap-y-16"
                    >
                        {filteredProjects.map((project, index) => {
                            const categorySlug = slugify(project.category);

                            return (
                                <div
                                    key={project.slug}
                                    data-slug={project.slug}
                                    data-category={categorySlug}
                                    style={{ opacity: 0 }}
                                    className={`project-item col-span-12 md:col-span-6`}
                                >
                                    <TransitionLink href={`/projects/${project.slug}`} className="group">
                                        <div className="relative mb-5">
                                            <Image
                                                src={project.projectThumbnail}
                                                alt={project.projectName}
                                                className={`w-full h-full aspect-square object-cover`}
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-primary/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                                <Image
                                                    src={project.projectThumbnail}
                                                    alt={project.projectName}
                                                    className={`w-full h-full aspect-square object-cover scale-0 group-hover:scale-75 transition-all duration-500 ease-in-out`}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4 lg:gap-10 h-[1.3em] lg:h-[1.2em] items-center">
                                                <span className="text-sm lg:text-lg text-foreground/70">
                                                    [{String(index + 1).padStart(2, "0")}]
                                                </span>
                                                <span className="text-sm lg:text-lg font-medium">
                                                    {project.projectName}
                                                </span>
                                            </div>

                                            <div className="overflow-hidden h-[1lh] lg:h-[1.2lh]">
                                                <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-[0.8lh] lg:group-hover:-translate-y-[1lh] items-end">
                                                    <span className="text-sm lg:text-lg font-medium">
                                                        {project.projectYear}
                                                    </span>
                                                    <span className="text-sm lg:text-lg font-medium">
                                                        View project →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </TransitionLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;