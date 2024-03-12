import { Card } from "../card/Card";

export const CardList = () => {
  return (
    <div className="flex-5 mt-10 max-w-5xl">
      <h1 className="font-bold text-2xl capitalize font-pop">Mais recentes</h1>
      <div className="mt-6 max-w-5xl">
        <Card />
      </div>
    </div>
  );
};
