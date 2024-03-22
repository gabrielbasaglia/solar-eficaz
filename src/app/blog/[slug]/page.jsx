import { client, urlFor } from "@/sanity/lib/client";
import { Menu } from "@/src/components/menu/Menu";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getPosts(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}'] {
    "slug": slug.current,
    title,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image
    }    
  }[0]`;
  const post = await client.fetch(query);
  return post;
}

export default async function BlogPage({ params }) {
  const post = await getPosts(params.slug);
  console.log(post);

  return (
    <div className="mt-14">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="font-medium text-6xl font-pop">{post?.title}</h1>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-12 h-12 relative">
              <Image
                src={urlFor(post?.author?.image).url()}
                alt=""
                fill
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">{post?.author.name}</span>
              <span className="">{post?.publishedAt}</span>
            </div>
          </div>
        </div>

        <div className="flex-1 h-80 relative">
          <Image
            src={urlFor(post.mainImage).url()}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="mt-20 font-pop">
          <PortableText value={post?.body} className="prose max-w-none" />
        </div>
        <Menu />
      </div>
    </div>
  );
}
