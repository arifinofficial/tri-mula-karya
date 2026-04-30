import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/organism/global/Navbar";
import { LoadingScreen } from "@/components/organism/global/LoadingScreen";
import LenisProvider from "@/providers/LenisProvider";
import { TransitionOverlay } from "@/components/atoms/TransitionOverlay";
import { PageTransitionProvider } from "@/context/PageTransitionContext";
import WhatsappFloat from "@/components/atoms/WhatsappFloat";

const switzer = localFont({
  src: [
    { path: "../assets/fonts/Switzer-Thin.woff2", weight: "100", style: "normal" },
    { path: "../assets/fonts/Switzer-ThinItalic.woff2", weight: "100", style: "italic" },

    { path: "../assets/fonts/Switzer-Extralight.woff2", weight: "200", style: "normal" },
    { path: "../assets/fonts/Switzer-ExtralightItalic.woff2", weight: "200", style: "italic" },

    { path: "../assets/fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/Switzer-LightItalic.woff2", weight: "300", style: "italic" },

    { path: "../assets/fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Switzer-Italic.woff2", weight: "400", style: "italic" },

    { path: "../assets/fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/Switzer-MediumItalic.woff2", weight: "500", style: "italic" },

    { path: "../assets/fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/Switzer-SemiboldItalic.woff2", weight: "600", style: "italic" },

    { path: "../assets/fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/Switzer-BoldItalic.woff2", weight: "700", style: "italic" },

    { path: "../assets/fonts/Switzer-Extrabold.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/Switzer-ExtraboldItalic.woff2", weight: "800", style: "italic" },

    { path: "../assets/fonts/Switzer-Black.woff2", weight: "900", style: "normal" },
    { path: "../assets/fonts/Switzer-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const BASE_URL = "https://www.trimulakarya.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tri Mula Karya — Architecture, Construction & Interior in Bali",
    template: "%s | Tri Mula Karya",
  },
  description:
    "Tri Mula Karya is a trusted architecture, construction, and interior design company in Denpasar, Bali. We bring your dream spaces to life with high-quality craftsmanship and years of experience.",
  keywords: [
    "contractor Bali",
    "architect Denpasar",
    "interior design Bali",
    "construction company Bali",
    "home design Bali",
    "Tri Mula Karya",
    "villa construction Bali",
    "architecture Bali",
    "building contractor Denpasar",
    "design and build Bali",
  ],
  authors: [{ name: "Tri Mula Karya", url: BASE_URL }],
  creator: "Tri Mula Karya",
  publisher: "Tri Mula Karya",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tri Mula Karya",
    title: "Tri Mula Karya — Architecture, Construction & Interior in Bali",
    description:
      "Tri Mula Karya is a trusted architecture, construction, and interior design company in Denpasar, Bali. We bring your dream spaces to life.",
    images: [
      {
        url: "/favicon/apple-icon-180x180.png",
        width: 180,
        height: 180,
        alt: "Tri Mula Karya",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tri Mula Karya — Architecture, Construction & Interior in Bali",
    description:
      "Tri Mula Karya is a trusted architecture, construction, and interior design company in Denpasar, Bali.",
    images: ["/favicon/apple-icon-180x180.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon.png" },
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/favicon/apple-icon-precomposed.png" },
    ],
  },
  manifest: "/favicon/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${switzer.variable} antialiased`}
      >
        <PageTransitionProvider>
          <LenisProvider>
            <LoadingScreen />
            <Navbar />
            {children}
            <WhatsappFloat />

          </LenisProvider>
          <TransitionOverlay />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
