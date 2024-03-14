import { CardList } from "@/src/components/cardList/CardList";
import { Menu } from "@/src/components/menu/Menu";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
