import { architecture, construction, interior } from "@/assets";
import { link } from "fs";

const homeExpertiseData = {
    preTitle : "[ Expertise ]",
    title: "Our Professional Expertise in Creating Functional and Timeless Spaces",
    expertiseItems: [
        {
            label: "Architecture Design",
            image: architecture,
            link: "/projects?category=architecture"
        },
        {
            label: "Construction",
            image: construction,
            link: "/projects?category=construction"
        },
        {
            label: "Interior",
            image: interior,
            link: "/projects?category=interior"
        },
    ]

}

export default homeExpertiseData;