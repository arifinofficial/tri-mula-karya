// src/data/global/projectData.ts
import { homeAboutImgLandscape, homeAboutImgPotrait, homeHeroImg } from "@/assets";
import { StaticImageData } from "next/image";

export interface ProjectDataType {
  slug: string;
  projectName: string;
  projectDesc: string;
  category: string;
  projectYear: string;
  projectHero: StaticImageData;        // bisa diganti ke StaticImageData jika pakai Next.js Image
  projectThumbnail: StaticImageData;   // sama seperti di atas
  projectInfo: {
    dateCompleted: string;
    projectType: string;
    projectLocation: string;
  };
  projectGallery: StaticImageData[];   // array of images
}

const projectData: ProjectDataType[] = [
    {
        slug:"villa-sari-indah",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Architecture",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah1",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Interior Design",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah2",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah3",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah4",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah5",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah6",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
    {
        slug:"villa-sari-indah7",
        projectName:"Villa Sari Indah",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin,",
        category: "Construction",
        projectYear: "2024",
        projectHero: homeHeroImg,
        projectThumbnail: homeHeroImg,
        projectInfo: {
            dateCompleted: "2024",
            projectType : "New Build",
            projectLocation: "Bali, Indonesia"
        },
        projectGallery : [
            homeHeroImg,
            homeAboutImgLandscape,
            homeHeroImg,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
            homeAboutImgLandscape,
            homeAboutImgPotrait,
            homeAboutImgPotrait,
        ]
    },
]

export default projectData