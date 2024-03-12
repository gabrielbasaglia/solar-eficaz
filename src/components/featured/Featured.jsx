import Image from "next/image";
import { Button } from "../ui/button";

export const Featured = () => {
  return (
    <div className="mt-6">
      <h1 className="text-4xl lg:text-5xl xl:text-7xl text-center font-medium font-os">
        <b>Tudo</b> Sobre Energia Renovável
      </h1>
      <div className=" flex mt-10 lg:mt-14 items-center gap-12">
        <div className="hidden lg:flex relative flex-1 h-96 ">
          <Image
            src="/p1.jpg"
            alt="imagem de predios"
            fill
            className="object-cover "
          ></Image>
        </div>
        <div className="flex flex-col flex-1 gap-7">
          <h2 className="sm:text-4xl text-3xl font-ra">
            Cinco Ideias Para Economizar Energia
          </h2>
          <p className="sm:text-xl text-lg font-light text-softTextColor font-ra">
            Economizar energia é mais do que uma tendência; é uma necessidade
            crucial nos dias de hoje. Neste artigo, exploraremos cinco ideias
            inovadoras para ajudá-lo a reduzir o consumo de energia em sua casa
            ou escritório, proporcionando benefícios tanto para o meio ambiente
            quanto para o seu bolso.
          </p>
          <Button className="max-w-max font-ra">Leia Mais</Button>
        </div>
      </div>
    </div>
  );
};
