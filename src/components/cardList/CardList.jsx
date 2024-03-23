import { Card } from "../card/Card";
import { client } from "@/sanity/lib/client";
import { Pagination } from "../pagination/Pagination";

const POSTS_PER_PAGE = 4;

async function buildPostQuery(page) {
  return `*[_type == 'post'] [0...${POSTS_PER_PAGE}]{
  title,
  slug,
  body,
  publishedAt,
  excerpt,
  categories[] -> {
    _id,
    title,
  },
  mainImage,
  _id,
} | order(publishedAt desc)`;
}

async function getPosts(page) {
  const query = await buildPostQuery(page);
  const posts = await client.fetch(query);

  return posts;
}

export const CardList = async ({ page }) => {
  const posts = await getPosts(page);
  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = posts.length === POSTS_PER_PAGE;

  return (
    <div className="flex-5 mt-10 max-w-5xl">
      <h1 className="font-bold text-2xl capitalize font-pop">Mais recentes</h1>
      <div className="mt-6 max-w-5xl">
        {posts?.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};
