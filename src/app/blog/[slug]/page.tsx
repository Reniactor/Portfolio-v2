import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blog/mdx";
import { mdxComponents } from "@/app/modules/blog/components/MdxComponents";
import TableOfContents from "@/app/modules/blog/components/TableOfContents";
import BackLink from "@/app/modules/blog/components/BackLink";
import { nunitoSans, roboto } from "@/utils/fontIndex";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const ogImageUrl = `/api/og?title=${encodeURIComponent(post.frontmatter.title)}&description=${encodeURIComponent(post.frontmatter.description)}`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical: `https://www.arquimedesvasquez.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date.toISOString(),
      modifiedTime: post.frontmatter.updated?.toISOString(),
      tags: post.frontmatter.tags,
      url: `https://www.arquimedesvasquez.com/blog/${params.slug}`,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImageUrl],
    },
  };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date.toISOString(),
    dateModified: (
      post.frontmatter.updated ?? post.frontmatter.date
    ).toISOString(),
    author: {
      "@type": "Person",
      name: "Arquímedes Vásquez",
      url: "https://www.arquimedesvasquez.com",
    },
    url: `https://www.arquimedesvasquez.com/blog/${params.slug}`,
  };

  return (
    <div className={nunitoSans.className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      <BackLink href="/blog" label="Back to blog" />

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {post.frontmatter.title}
        </h1>
        <div
          className={`${roboto.className} flex flex-wrap items-center gap-3 text-sm text-[#999]`}
        >
          <time dateTime={post.frontmatter.date.toISOString()}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span className="text-[#555]">|</span>
          <span>{post.readingTime}</span>
        </div>
        {post.frontmatter.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {post.frontmatter.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-[#292929] px-2 py-0.5 text-xs text-color10"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <div className="relative flex gap-12">
        <article className="prose prose-invert max-w-3xl">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    { theme: "one-dark-pro", keepBackground: true },
                  ],
                ],
              },
            }}
          />
        </article>
        <TableOfContents entries={post.toc} />
      </div>
    </div>
  );
}
