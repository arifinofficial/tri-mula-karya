// src/data/about/aboutServiceData.ts
import { aboutArrow, aboutService, architecture, construction, homeHeroImg, interior } from "@/assets";

const aboutServiceData = {
    title: "Services Tailored to Your Space and Needs",
    arrow: aboutArrow,
    imageBg: aboutService,
    serviceItems: [
        {
            name: "Architecture",
            image: architecture,
            desc: "Our architectural service focuses on creating well-planned, functional, and visually balanced designs tailored to your needs. We carefully translate ideas into clear concepts, layouts, and technical drawings, ensuring every design aligns with site conditions, regulations, and long-term usability.",
        },
        {
            name: "Construction",
            image: construction,
            desc: "Our construction service focuses on delivering high-quality, efficient, and safe construction projects. We manage every aspect of the construction process, ensuring that each project is completed on time, within budget, and to the highest standards.",
        },
        {
            name: "Interior Design",
            image: interior,
            desc: "Our interior design service focuses on creating aesthetically pleasing, functional, and comfortable spaces tailored to your needs. We carefully select materials, colors, and furnishings to ensure every design aligns with your vision and lifestyle.",
        },
    ]
}

export default aboutServiceData;