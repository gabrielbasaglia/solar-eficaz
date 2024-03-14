import { Card } from "../card/Card";
import { client } from "@/sanity/lib/client";
import { Pagination } from "../pagination/Pagination";

const POSTS_PER_PAGE = 4;

let lastPublishedAt = "";
let lastId = "";

async function buildPostQuery(page) {
  const skip = (page - 1) * POSTS_PER_PAGE;
  return `*[_type == "post" && (
    publishedAt > $lastPublishedAt
    || (publishedAt == $lastPublishedAt && _id > $lastId)
  )] | order(publishedAt desc) [${skip}...${skip + POSTS_PER_PAGE}] {
    title,
    slug,
    publishedAt,
    excerpt,
    categories[] -> {
      _id,
      title,
    },
    mainImage,
    _id,
  }`;
}

async function getPosts(page) {
  const query = await buildPostQuery(page);
  const posts = await client.fetch(query, { lastPublishedAt, lastId });

  if (posts.length > 0) {
    lastPublishedAt = posts[posts.length - 1].publishedAt;
    lastId = posts[posts.length - 1]._id;
  } else {
    lastId = null;
  }

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
