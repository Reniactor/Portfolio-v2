import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { frontmatterSchema, type Frontmatter } from "./frontmatter";
import { getReadingTime } from "./reading-time";
import { extractToc, type TocEntry } from "./toc";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export interface PostMeta {
  slug: string;
  frontmatter: Frontmatter;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
  toc: TocEntry[];
}

function getMdxFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
}

function parsePost(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = frontmatterSchema.parse(data);

  if (!frontmatter.published) return null;

  return {
    slug,
    frontmatter,
    content,
    readingTime: getReadingTime(content),
    toc: extractToc(content),
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = getMdxFiles();
  const posts: PostMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const post = parsePost(slug);
    if (post) {
      posts.push({
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      });
    }
  }

  return posts.sort(
    (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime(),
  );
}

export function getAllSlugs(): string[] {
  return getMdxFiles().map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return parsePost(slug);
}
