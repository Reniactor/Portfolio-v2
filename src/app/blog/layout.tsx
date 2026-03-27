import type { Metadata } from "next";
import NavBar from "@/app/modules/core/header/NavBar";

export const metadata: Metadata = {
  title: {
    template: "%s | Arquímedes Vásquez Blog",
    default: "Blog | Arquímedes Vásquez",
  },
  description:
    "Articles about web development, Next.js, and software engineering.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28">
        {children}
      </div>
    </>
  );
}
