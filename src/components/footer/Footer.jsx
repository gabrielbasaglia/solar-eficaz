import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-14 px-5 text-softTextColor items-center mb-4">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/desconta.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-bold">Solar Eficaz</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          mollitia velit? Saepe tempore quibusdam quidem amet deserunt aut
          ducimus labore nemo consequatur nulla quas illo nostrum, rerum aliquid
          ex a!
        </p>
        <div className="flex gap-2 mt-5 md:mt-0 ">
          <Image src="/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="instagram" width={18} height={18} />
        </div>
      </div>
      <div className="flex flex-1 gap-5 mt-7 md:mt-0 sm:gap-10 md:gap-20 justify-between md:justify-end w-full">
        <div className="flex flex-col">
          <h2 className="font-bold">Links</h2>
          <Link href="/">Início</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Sobre</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Tags</h2>
          <Link href="/">Notícias</Link>
          <Link href="/">Tecnologias</Link>
          <Link href="/">Pesquisa</Link>
          <Link href="/">Projetos</Link>
          <Link href="/">Economia</Link>
          <Link href="/">Dicas</Link>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Social</h2>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
        </div>
      </div>
    </div>
  );
};
