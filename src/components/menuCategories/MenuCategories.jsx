import Link from "next/link";

export const MenuCategories = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 rounded-full text-black">
      <Link
        href="/blog?cat=noticias"
        className="bg-cyan-200 rounded-full w-fit text-black px-4"
      >
        Notícias
      </Link>
      <Link
        href="/blog?cat=tecnologias"
        className="bg-purple-200 rounded-full w-fit text-black px-4"
      >
        Tecnologias
      </Link>
      <Link
        href="/blog?cat=pesquisa"
        className="bg-amber-100 rounded-full w-fit text-black px-4"
      >
        Pesquisa
      </Link>
      <Link
        href="/blog?cat=projetos"
        className="bg-red-100 rounded-full w-fit text-black px-4"
      >
        Projetos
      </Link>
      <Link
        href="/blog?cat=economia"
        className="bg-orange-200 rounded-full w-fit text-black px-4"
      >
        Economia
      </Link>
      <Link
        href="/blog?cat=dicas"
        className="bg-green-200 rounded-full w-fit text-black px-4"
      >
        Dicas
      </Link>
    </div>
  );
};
