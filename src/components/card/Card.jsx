import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/sanity/lib/client";
import { Button } from "../ui/button";

async function getPosts() {
  const query = `*[_type == 'post'] {
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
  
  }`;

  const post = await client.fetch(query);
  return post;
}

export const Card = async () => {
  const post = await getPosts();

  return (
    <section>
      {post?.map((post, _id) => (
        <div
          key={_id}
          className="lg:grid lg:grid-cols-2 mb-12 items-center gap-10 overflow-hidden"
        >
          <div className="h-80 relative hidden lg:block">
            <Image
              src={urlFor(post.mainImage).url()}
              alt=""
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full ">
            <div className="flex items-center gap-3">
              <span className="text-slate-400  font-medium ">
                {new Date(post?.publishedAt).toLocaleDateString("pt-BR")}
              </span>
              <span className="uppercase text-amber-700 font-semibold">
                {post?.categories[0]?.title}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-3xl font-ra">{post?.title}</h1>
              <p className=" font-mt font-light text-softTextColor text-lg font-ra">
                {post?.excerpt}
              </p>
            </div>
            <Link
              href="/"
              className="text-amber-700 hover:opacity-95 hover:scale-95 duration-300 ease-in-out border-b-2 w-fit"
            >
              <Button>Leia mais</Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
