import { Menu } from "@/src/components/menu/Menu";

async function getPosts(slug) {
  const query = `*[_type == "post" && slug.current == '${slug}'] {
    "slug": slug.current,
    title,
    mainImage,
    body,    
  }[0]`;
  const posts = await client.fetch(query);
  return posts;
}

export default function BlogPage({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <div>
        <Menu />
      </div>
    </div>
  );
}
