import "@/styles/globals.css";
import Footer from "./modules/core/footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arquimedesvasquez.com"),
  title: "Arquímedes Vásquez | Fullstack Developer in Bogotá",
  description:
    "Fullstack web developer based in Bogotá, Colombia. I build web apps with Next.js, NestJS, Tailwind, Supabase, and AWS.",
  authors: [{ name: "Arquímedes Vásquez" }],
  keywords: [
    "fullstack developer",
    "web developer",
    "Bogotá",
    "Colombia",
    "Next.js",
    "React",
    "NestJS",
    "Tailwind",
    "Supabase",
    "AWS",
    "freelance developer",
    "software developer",
  ],
  alternates: {
    canonical: "https://www.arquimedesvasquez.com",
  },
  openGraph: {
    title: "Arquímedes Vásquez | Fullstack Developer in Bogotá",
    description:
      "Fullstack web developer based in Bogotá, Colombia. I build web apps with Next.js, NestJS, Tailwind, Supabase, and AWS.",
    url: "https://www.arquimedesvasquez.com",
    siteName: "Arquímedes Vásquez Portfolio",
    images: [
      {
        url: "/OG_image.png",
        width: 1230,
        height: 600,
        alt: "Arquímedes Vásquez portfolio banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquímedes Vásquez | Fullstack Developer in Bogotá",
    description:
      "Fullstack web developer based in Bogotá, Colombia. I build web apps with Next.js, NestJS, Tailwind, Supabase, and AWS.",
    images: ["/OG_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    { rel: "shortcut icon", url: "/favicon.ico", type: "image/x-icon" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arquímedes Vásquez",
  url: "https://www.arquimedesvasquez.com",
  jobTitle: "Fullstack Web Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  sameAs: [
    "https://github.com/Reniactor",
    "https://www.linkedin.com/in/arquimedes-vasquez-668964238/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col items-center bg-color60 text-color30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
