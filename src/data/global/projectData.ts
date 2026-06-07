// src/data/global/projectData.ts
import { daHaus1, daHaus10, daHaus11, daHaus2, daHaus3, daHaus4, daHaus5, daHaus6, daHaus7, daHaus8, daHaus9, dinaHaus1, dinaHaus10, dinaHaus11, dinaHaus12, dinaHaus13, dinaHaus14, dinaHaus15, dinaHaus16, dinaHaus17, dinaHaus18, dinaHaus19, dinaHaus2, dinaHaus3, dinaHaus4, dinaHaus5, dinaHaus6, dinaHaus7, dinaHaus8, dinaHaus9, grandeBistro1, grandeBistro2, grandeBistro3, grandeBistro4, grandeBistro5, grandeBistro6, grandeBistro7, gucStudio1, gucStudio2, gucStudio3, gucStudio4, gucStudio5, holyVilla1, holyVilla10, holyVilla11, holyVilla2, holyVilla3, holyVilla4, holyVilla5, holyVilla6, holyVilla7, holyVilla8, holyVilla9, homeAboutImgLandscape, homeAboutImgPotrait, homeHeroImg, hype1, hype2, hype3, hype4, hype5, hype6, hype7, inayaVilla1, inayaVilla10, inayaVilla11, inayaVilla12, inayaVilla13, inayaVilla2, inayaVilla3, inayaVilla4, inayaVilla5, inayaVilla6, inayaVilla7, inayaVilla8, inayaVilla9, jbproject1, jbproject10, jbproject11, jbproject12, jbproject13, jbproject14, jbproject15, jbproject16, jbproject17, jbproject18, jbproject19, jbproject2, jbproject20, jbproject3, jbproject4, jbproject5, jbproject6, jbproject7, jbproject8, jbproject9, juiceGuy1, juiceGuy10, juiceGuy2, juiceGuy3, juiceGuy4, juiceGuy5, juiceGuy6, juiceGuy7, juiceGuy8, juiceGuy9, kulidanKitchen1, kulidanKitchen10, kulidanKitchen11, kulidanKitchen2, kulidanKitchen3, kulidanKitchen4, kulidanKitchen5, kulidanKitchen6, kulidanKitchen7, kulidanKitchen8, kulidanKitchen9, maisonHyndrich1, maisonHyndrich10, maisonHyndrich11, maisonHyndrich12, maisonHyndrich13, maisonHyndrich14, maisonHyndrich2, maisonHyndrich3, maisonHyndrich4, maisonHyndrich5, maisonHyndrich6, maisonHyndrich7, maisonHyndrich8, maisonHyndrich9, mmcMerdeka1, mmcMerdeka10, mmcMerdeka11, mmcMerdeka12, mmcMerdeka2, mmcMerdeka3, mmcMerdeka4, mmcMerdeka5, mmcMerdeka6, mmcMerdeka7, mmcMerdeka8, mmcMerdeka9, mooHous1, msGlowBarber1, msGlowBarber2, msGlowBarber3, msGlowBarber4, msGlowBarber5, mwKitchen1, mwKitchen2, mwKitchen3, mwKitchen4, mwKitchen5, mwKitchen6, niceWild1, niceWild2, niceWild3, niceWild4, niceWild5, niceWild6, niceWild7, shHous1, shHous10, shHous11, shHous12, shHous13, shHous14, shHous15, shHous16, shHous17, shHous18, shHous19, shHous2, shHous20, shHous21, shHous22, shHous23, shHous24, shHous25, shHous3, shHous4, shHous5, shHous6, shHous7, shHous8, shHous9, vHaus1, vHaus10, vHaus11, vHaus2, vHaus3, vHaus4, vHaus5, vHaus6, vHaus7, vHaus8, vHaus9 } from "@/assets";
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
        slug:"sh-haus",
        projectName:"SH Haus",
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
    {
        slug:"jb-project",
        projectName:"JB Project",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: jbproject1,
        projectThumbnail: jbproject1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            jbproject1,
            jbproject2,
            jbproject3,
            jbproject4,
            jbproject5,
            jbproject6,
            jbproject7,
            jbproject8,
            jbproject9,
            jbproject10,
            jbproject11,
            jbproject12,
            jbproject13,
            jbproject14,
            jbproject15,
            jbproject16,
            jbproject17,
            jbproject18,
            jbproject19,
            jbproject20,
        ]
    },
    {
        slug:"maison-hyndrich",
        projectName:"Maison Hyndrich",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: maisonHyndrich1,
        projectThumbnail: maisonHyndrich1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            maisonHyndrich1, maisonHyndrich2, maisonHyndrich3, maisonHyndrich4, maisonHyndrich5, maisonHyndrich6, maisonHyndrich7, maisonHyndrich8, maisonHyndrich9, maisonHyndrich10, maisonHyndrich11, maisonHyndrich12, maisonHyndrich13, maisonHyndrich14,
            
        ]
    },
    {
        slug:"mmc-merdeka",
        projectName:"MMC Merdeka",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: mmcMerdeka1,
        projectThumbnail: mmcMerdeka1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            mmcMerdeka1, mmcMerdeka2, mmcMerdeka3, mmcMerdeka4, mmcMerdeka5, mmcMerdeka6, mmcMerdeka7, mmcMerdeka8, mmcMerdeka9, mmcMerdeka10, mmcMerdeka11, mmcMerdeka12, 
        ]
    },
    {
        slug:"ms-glow-barber",
        projectName:"MS Glow Barber",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: msGlowBarber1,
        projectThumbnail: msGlowBarber1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            msGlowBarber1,
            msGlowBarber2,
            msGlowBarber3,
            msGlowBarber4,
            msGlowBarber5,
        ]
    },
    {
        slug:"mw-kitchen",
        projectName:"MW Kitchen",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: mwKitchen1,
        projectThumbnail: mwKitchen1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            mwKitchen1,
            mwKitchen2,
            mwKitchen3,
            mwKitchen4,
            mwKitchen5,
            mwKitchen6,
        ]
    },
    {
        slug:"nice-and-wild",
        projectName:"Nice & Wild",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: niceWild1,
        projectThumbnail: niceWild1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            niceWild1,
            niceWild2,
            niceWild3,
            niceWild4,
            niceWild5,
            niceWild6,
            niceWild7
        ]
    },
    
    {
        slug:"sh-haus-interior",
        projectName:"SH Haus",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: shHous6,
        projectThumbnail: shHous6,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Denpasar, Bali"
        },
        projectGallery : [
            shHous6,
            shHous7,
            shHous8,
            shHous9,
            shHous10,
            shHous11,
            shHous12,
            shHous13,
            shHous14,
            shHous15,
            shHous16,
            shHous17,
            shHous18,
            shHous19,
            shHous20,
            shHous21,
            shHous22,
            shHous23,
            shHous24,
            shHous25,
        ]
    },

    {
        slug:"v-haus",
        projectName:"V Haus",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: vHaus1,
        projectThumbnail: vHaus1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            vHaus1,
            vHaus2,
            vHaus3,
            vHaus4,
            vHaus5,
            vHaus6,
            vHaus7,
            vHaus8,
            vHaus9,
            vHaus10,
            vHaus11
        ]
    },
    {
        slug:"dina-haus",
        projectName:"Dina Haus",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: dinaHaus1,
        projectThumbnail: dinaHaus1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            dinaHaus5,
            dinaHaus6,
            dinaHaus1,
            dinaHaus7,
            dinaHaus8,
            dinaHaus2,
            dinaHaus10,
            dinaHaus11,
            dinaHaus3,
            dinaHaus12,
            dinaHaus13,
            dinaHaus4,
            dinaHaus14,
            dinaHaus15,
            dinaHaus9,
            dinaHaus16,
            dinaHaus17,
            dinaHaus18,
            dinaHaus19,
        ]
    },
    {
        slug:"inaya-villa",
        projectName:"Inaya Villa",
        projectDesc: "",
        category: "interior",
        projectYear: "",
        projectHero: inayaVilla1,
        projectThumbnail: inayaVilla1,
        projectInfo: {
            dateCompleted: "",
            projectType : "",
            projectLocation: "Badung, Bali"
        },
        projectGallery : [
            inayaVilla1,
            inayaVilla2,
            inayaVilla3,
            inayaVilla4,
            inayaVilla5,
            inayaVilla6,
            inayaVilla7,
            inayaVilla8,
            inayaVilla9,
            inayaVilla10,
            inayaVilla11,
            inayaVilla12,
            inayaVilla13
        ]
    },
]

export default projectData