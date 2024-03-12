import { CategoriaLista } from "@/src/components/categoriaLista/CategoriaLista";
import { Featured } from "@/src/components/featured/Featured";
import { Card } from "../components/ui/card";
import { CardList } from "../components/cardList/CardList";
import { Menu } from "../components/menu/Menu";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoriaLista />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
