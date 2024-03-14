"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <Button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        variant="destructive"
      >
        Anterior
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        variant="destructive"
      >
        Próximo
      </Button>
    </div>
  );
};
