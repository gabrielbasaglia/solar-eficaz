import { CategoriaLista } from "@/components/categoriaLista/CategoriaLista";
import { Featured } from "@/components/featured/Featured";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoriaLista />
    </main>
  );
}
