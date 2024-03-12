import { MenuPosts } from "../menuPosts/MenuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className="mt-20 hidden md:block max-w-72">
      <h2 className="text-sm font-normal text-slate-400">
        {"O que há de novo"}
      </h2>
      <h1 className="text-xl font-bold">Mais Populares</h1>
      <MenuPosts withImage={false} />
      <div className="mt-20">
        <h2 className="text-sm font-normal text-slate-400">
          {"Descubra por categoria"}
        </h2>
        <h1 className="text-xl font-bold">Categorias</h1>
        <MenuCategories />
      </div>
      <div className="mt-20">
        <h2 className="text-sm font-normal text-slate-400">
          {"Escolhidos a dedo"}
        </h2>
        <h1 className="text-xl font-bold">Escolha do Editor</h1>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};
