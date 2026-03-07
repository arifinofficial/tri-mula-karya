import { logo } from "@/assets";

const footerData = {
    logo: logo,
    nav: {
        label: "[ Navigation ]",
        navItems: [
            {
                label: "Home",
                url: "/"
            },
            {
                label: "Projects",
                url: "/projects"
            },
            {
                label: "About Us",
                url: "/about"
            },
            {
                label: "Contact Us",
                url: "/contact"
            },
            {
                label: "Press",
                url: "/press"
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
                label: "[ Architectural & Construction ]",
                value: "+62 858-0403-2504",
                url: "tel:+6285804032504"
            },
            {
                label: "[ Interior & custom furniture ]",
                value: "+62 878-8029-2388",
                url: "tel:+6287802292388"
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
                    label: "Facebook",
                    url: "https://www.facebook.com/"
                },
                {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/"
                },
            ]
        },
    },
    footerCopyright: "© 2026 Tri Mula Karya",
    basedOn: "Denpasar, Bali",
}

export default footerData;