import Link from "next/link";
import { type PostMeta } from "@/lib/blog/mdx";
import { nunitoSans, roboto } from "@/utils/fontIndex";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`${nunitoSans.className} flex h-full flex-col gap-3 rounded-md bg-[#0f0f0f] p-6 shadow-lg transition-colors hover:bg-[#181818]`}
      >
        <h3 className="text-xl font-bold text-color30">
          {post.frontmatter.title}
        </h3>
        <p className={`${roboto.className} text-sm font-light text-[#bfbfbf]`}>
          {post.frontmatter.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <span className={`${roboto.className} text-xs text-[#999]`}>
            {formatDate(post.frontmatter.date)}
          </span>
          <span className="text-xs text-[#555]">|</span>
          <span className={`${roboto.className} text-xs text-[#999]`}>
            {post.readingTime}
          </span>
        </div>
        {post.frontmatter.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1">
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
      </article>
    </Link>
  );
}
