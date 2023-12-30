import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";
import { ToggleTheme } from "./ui/ToggleTheme";
import NavLinks from "./ui/NavLinks";

function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden lg:flex justify-between h-[84px] items-center px-16 sticky top-0 z-40 bg-background ">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <ul className="flex items-center gap-16">
          <NavLinks className="[&:nth-child(4)]:bg-green-800 [&:nth-child(4)]:text-white [&:nth-child(4)]:px-4 [&:nth-child(4)]:py-2 [&:nth-child(4)]:rounded-2xl text-xl [&:nth-child(4)]:shadow-xl [&:nth-child(4)]:hover:bg-green-800/90" />
          <li className="flex gap-2">
            <LocaleSwitcherSelect />
            <ToggleTheme />
          </li>
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="lg:hidden flex justify-between items-center px-4 h-[84px] ">
        <div>
          <Link href="/">Logo Here</Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <Menu size={48} />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <div className="flex gap-2">
                <LocaleSwitcherSelect />
                <ToggleTheme />
              </div>
            </SheetHeader>

            <ul className="flex flex-col gap-8 mt-32">
              <NavLinks className=" text-4xl " />
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;
