import { getAllPosts } from "@/lib/blog/mdx";
import PostCard from "@/app/modules/blog/components/PostCard";
import BackLink from "@/app/modules/blog/components/BackLink";
import { nunitoSans } from "@/utils/fontIndex";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className={nunitoSans.className}>
      <BackLink href="/" label="Back to home" />
      <header className="mb-12 flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Blog
        </h1>
        <p className="text-lg font-thin text-[#bfbfbf]">
          Writing about web development, building products, and things I learn
          along the way.
        </p>
      </header>
      {posts.length === 0 ? (
        <p className="text-[#999]">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
