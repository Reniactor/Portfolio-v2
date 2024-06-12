import "@/styles/globals.css";
import Footer from "./components/footer/footer";

export const metadata = {
  openGraph: {
    title: "Arquímedes Vásquez | Software Developer in Bogotá",
    description: "Fullstack software developer based in Bogotá, Colombia",
    url: "https://arquimedes-vasquez.vercel.app",
    siteName: "Arquímedes Vásquez Portfolio",
    images: [
      {
        url: "https://i.imgur.com/H9n6jy6.jpeg",
        width: 1230,
        height: 600,
        alt: "Website banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Arquímedes Vásquez | Software Developer in Bogotá",
  description: "Fullstack software developer based in Bogotá, Colombia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  url: "https://arquimedes-vasquez.vercel.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col items-center bg-color60 text-color30">
        {children}
        <Footer />
      </body>
    </html>
  );
}
