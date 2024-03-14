import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../themeToggle/ThemeToggle";
import { MenuNavBar } from "../menuNavbar/MenuNavbar";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20">
      <div className="hidden md:flex md:gap-2 md:flex-1 ">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </div>
      <div className="md:flex-1 md:text-center text-3xl font-bold font-pop ">
        Solar Eficaz
      </div>
      <div className="flex md:gap-5 md:flex-1 items-center ">
        <ThemeToggle />
        <div className=" md:gap-5 md:flex hidden font-pop font-light">
          <Link href="/">Início</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Sobre</Link>
        </div>
        <MenuNavBar />
      </div>
    </div>
  );
};
