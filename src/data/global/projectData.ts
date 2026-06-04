// src/data/global/projectData.ts
import { daHaus1, daHaus10, daHaus11, daHaus2, daHaus3, daHaus4, daHaus5, daHaus6, daHaus7, daHaus8, daHaus9, grandeBistro1, grandeBistro2, grandeBistro3, grandeBistro4, grandeBistro5, grandeBistro6, grandeBistro7, gucStudio1, gucStudio2, gucStudio3, gucStudio4, gucStudio5, holyVilla1, holyVilla10, holyVilla11, holyVilla2, holyVilla3, holyVilla4, holyVilla5, holyVilla6, holyVilla7, holyVilla8, holyVilla9, homeAboutImgLandscape, homeAboutImgPotrait, homeHeroImg, hype1, hype2, hype3, hype4, hype5, hype6, hype7, juiceGuy1, juiceGuy10, juiceGuy2, juiceGuy3, juiceGuy4, juiceGuy5, juiceGuy6, juiceGuy7, juiceGuy8, juiceGuy9, kulidanKitchen1, kulidanKitchen10, kulidanKitchen11, kulidanKitchen2, kulidanKitchen3, kulidanKitchen4, kulidanKitchen5, kulidanKitchen6, kulidanKitchen7, kulidanKitchen8, kulidanKitchen9, mooHous1, shHous1, shHous2, shHous3, shHous4, shHous5 } from "@/assets";
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
        slug:"moo-haus",
        projectName:"Moo Haus",
        projectDesc: "",
        category: "architecture",
        projectYear: "",
        projectHero: mooHous1,
        projectThumbnail: mooHous1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            mooHous1,
        ]
    },
    {
        slug:"sh-hous",
        projectName:"SH Hous",
        projectDesc: "",
        category: "architecture",
        projectYear: "",
        projectHero: shHous1,
        projectThumbnail: shHous1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            shHous1,
            shHous2,
            shHous3,
            shHous4,
            shHous5,
        ]
    },
    {
        slug:"juice-guy",
        projectName:"Juice Guy",
        projectDesc: "",
        category: "construction",
        projectYear: "",
        projectHero: juiceGuy1,
        projectThumbnail: juiceGuy1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            juiceGuy1,
            juiceGuy2,
            juiceGuy3,
            juiceGuy4,
            juiceGuy5,
            juiceGuy6,
            juiceGuy7,
            juiceGuy8,
            juiceGuy9,
            juiceGuy10,
        ]
    },
    {
        slug:"kulidan-kitchen-and-space",
        projectName:"Kulidan Kitchen & Space",
        projectDesc: "",
        category: "construction",
        projectYear: "",
        projectHero: kulidanKitchen1,
        projectThumbnail: kulidanKitchen1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Gianyar, Bali"
        },
        projectGallery : [
            kulidanKitchen1,
            kulidanKitchen2,
            kulidanKitchen3,
            kulidanKitchen4,
            kulidanKitchen5,
            kulidanKitchen6,
            kulidanKitchen7,            
            kulidanKitchen8,
            kulidanKitchen9,
            kulidanKitchen10,
            kulidanKitchen11,
        ]
    },
    {
        slug:"da-haus",
        projectName:"Da Haus",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: daHaus1,
        projectThumbnail: daHaus1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            daHaus1,
            daHaus2,
            daHaus3,
            daHaus4,
            daHaus5,
            daHaus6,
            daHaus7,
            daHaus8,
            daHaus9,
            daHaus10,
            daHaus11,
        ]
    },
    {
        slug:"grande-bistro",
        projectName:"Grande Bistro",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: grandeBistro1,
        projectThumbnail: grandeBistro1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            grandeBistro1,
            grandeBistro2,
            grandeBistro3,
            grandeBistro4,
            grandeBistro5,
            grandeBistro6,
            grandeBistro7,
        ]
    },
    {
        slug:"guc-studio",
        projectName:"Guc Studio",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: gucStudio1,
        projectThumbnail: gucStudio1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            gucStudio1,
            gucStudio2,
            gucStudio3,
            gucStudio4,
            gucStudio5,
        ]
    },
    {
        slug:"holy-villa",
        projectName:"Holy Villa",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: holyVilla1,
        projectThumbnail: holyVilla1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            holyVilla1,
            holyVilla2,
            holyVilla3,
            holyVilla4,
            holyVilla5,
            holyVilla6,
            holyVilla7,
            holyVilla8,
            holyVilla9,
            holyVilla10,
            holyVilla11,
        ]
    },
    {
        slug:"hype",
        projectName:"Hype",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: hype1,
        projectThumbnail: hype1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            hype1,
            hype2,
            hype3,
            hype4,
            hype5,
            hype6,
            hype7,
        ]
    },
    
]

export default projectData