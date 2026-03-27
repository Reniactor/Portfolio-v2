import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const text = typeof children === "string" ? children : "";
    const id = slugify(text);
    return (
      <h2 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = typeof children === "string" ? children : "";
    const id = slugify(text);
    return (
      <h3 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/") === true || href?.startsWith("#") === true;
    if (isInternal) {
      return (
        <Link href={href ?? ""} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="rounded-lg"
      />
    );
  },
};
