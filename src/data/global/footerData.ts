import { logo } from "@/assets";

const footerData = {
    logo: logo,
    nav: {
        label: "[ Navigation ]",
        navItems: [
            {
                label: "About",
                url: "/about-us"
            },
            {
                label: "Projects",
                url: "/projects"
            },
            {
                label: "Press",
                url: "/press"
            },
            {
                label: "Contact",
                url: "/contact"
            },
            

        ],
    },
    contact: {
        label: "[ Get in Touch ]",
        address: "Jl. Pulau moyo perumahan jadi pesona VII no. 2 Pedungan, Denpasar 80222",
        email: {
            label: "info@trimulakarya.com",
            url: "mailto:info@trimulakarya.com"
        },
        phone: [
            {
                label: "[ Phone Number ]",
                value: "+62 858-0403-2504",
                url: "tel:+6285804032504"
            },
        ],
        social: {
            label: "[ Social Media ]",
            socialItems: [
                {
                    label: "Instagram",
                    url: "https://www.instagram.com/"
                },
                {
                    label: "TikTok",
                    url: "https://www.tiktok.com/"
                },
                {
                    label: "Threads",
                    url: "https://www.threads.net/"
                },
            ]
        },
    },
    footerCopyright: "© 2026 Tri Mula Karya",
    basedOn: "Denpasar, Bali",
}

export default footerData;