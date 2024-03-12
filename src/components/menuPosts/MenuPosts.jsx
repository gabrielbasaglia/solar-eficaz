import Image from "next/image";
import Link from "next/link";

export const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col items-center gap-10 mt-2">
      <Link href="/">
        <div className="flex gap-8 mt-2">
          {withImage && (
            <div className="h-full w-20">
              <Image
                src="/p3.jpeg"
                alt=""
                width={56}
                height={56}
                className="aspect-square border-2 border-slate-400 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-4 flex-col">
            <span className="bg-green-200 rounded-full w-fit text-black px-2 ">
              Dicas
            </span>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-xs flex gap-1 mt-1">
              <span className="font-semibold">Gabriel Coutinho</span>
              <span>-</span>
              <span className="text-slate-400">10.03.2024</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-5 mt-2">
          {withImage && (
            <div className="h-full w-20">
              <Image
                src="/p3.jpeg"
                alt=""
                width={56}
                height={56}
                className="aspect-square border-2 border-slate-400 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-4 flex-col">
            <span className="bg-cyan-200 rounded-full w-fit text-black px-2">
              Notícias
            </span>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-xs flex gap-1 mt-1">
              <span className="font-semibold">Gabriel Coutinho</span>
              <span>-</span>
              <span className="text-slate-400">10.03.2024</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-5 mt-2">
          {withImage && (
            <div className="h-full w-20">
              <Image
                src="/p3.jpeg"
                alt=""
                width={56}
                height={56}
                className="aspect-square border-2 border-slate-400 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-4 flex-col">
            <span className="bg-purple-200 rounded-full w-fit text-black px-2">
              Tecnologia
            </span>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-xs flex gap-1 mt-1">
              <span className="font-semibold">Gabriel Coutinho</span>
              <span>-</span>
              <span className="text-slate-400">10.03.2024</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-5 mt-2">
          {withImage && (
            <div className="h-full w-20">
              <Image
                src="/p3.jpeg"
                alt=""
                width={56}
                height={56}
                className="aspect-square border-2 border-slate-400 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-4 flex-col">
            <span className="bg-amber-100 rounded-full w-fit text-black px-2">
              Pesquisa
            </span>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-xs flex gap-1 mt-1">
              <span className="font-semibold">Gabriel Coutinho</span>
              <span>-</span>
              <span className="text-slate-400">10.03.2024</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="flex gap-5 mt-2">
          {withImage && (
            <div className="h-full w-20">
              <Image
                src="/p3.jpeg"
                alt=""
                width={56}
                height={56}
                className="aspect-square border-2 border-slate-400 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-4 flex-col">
            <span className="bg-green-200 rounded-full w-fit text-black px-2">
              Dicas
            </span>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <div className="text-xs flex gap-1 mt-1">
              <span className="font-semibold">Gabriel Coutinho</span>
              <span>-</span>
              <span className="text-slate-400">10.03.2024</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
