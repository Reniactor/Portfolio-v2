import { getAllPosts } from "@/lib/blog/mdx";
import { nunitoSans } from "@/utils/fontIndex";
import PostCard from "@/app/modules/blog/components/PostCard";
import SectionComponent from "../SectionComponent";
import Link from "next/link";

const latestPostsScaffolding = {
  id: "latest-posts",
  h1: "Latest Posts",
  h2: "Writing about web development, building products, and things I learn along the way.",
};

const LatestPosts = async () => {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <SectionComponent
      id={latestPostsScaffolding.id}
      h1={latestPostsScaffolding.h1}
      h2={latestPostsScaffolding.h2}
    >
      <div
        className={`${nunitoSans.className} grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`}
      >
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {posts.length > 3 && (
        <div className="mt-6 flex justify-center">
          <Link
            href="/blog"
            className="rounded-md bg-[#2f2f2f] px-6 py-2 text-sm font-medium text-color30 transition-colors hover:bg-color10 hover:text-color60"
          >
            View all posts
          </Link>
        </div>
      )}
    </SectionComponent>
  );
};

export default LatestPosts;
