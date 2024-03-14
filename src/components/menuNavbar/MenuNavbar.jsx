"use client";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export const MenuNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="visible md:invisible">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      {isOpen && (
        <div className="absolute flex flex-col gap-12 h-[calc(100vh-10rem)] w-full text-3xl top-24 left-0 items-center justify-center font-bold bg-white dark:bg-slate-950">
          <Link href="/">Início</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Sobre</Link>
        </div>
      )}
    </div>
  );
};
