import { client, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const query = `*[_type == 'category'] {
  title,
    image
}`;

  const data = await client.fetch(query);
  return data;
}

export const CategoriaLista = async () => {
  const data = await getPosts();

  const colors = [
    "bg-cyan-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-red-200",
    "bg-amber-200",
  ];

  return (
    <div className="mt-10 w-full">
      <h1 className="font-semibold text-2xl font-pop">Mais Populares</h1>

      <div className="flex flex-wrap gap-5 mt-6 w-full bg-">
        {data?.map((item, idx) => (
          <div
            key={idx}
            className={`flex justify-between gap-5 ${
              colors[idx % colors.length]
            } w-40 h-14 flex-grow rounded-md hover:scale-110 duration-300 ease-in-out`}
          >
            <div className="w-1/2 xs:w-full flex items-center justify-start xs:justify-center mx-auto">
              <Link
                href="blog?cat=style"
                className="flex items-center gap-2 capitalize text-slate-800 font-semibold"
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8 mr-4 xs:mr-0"
                />
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
