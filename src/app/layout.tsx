import "@/styles/globals.css";

export const metadata = {
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
      </body>
    </html>
  );
}
