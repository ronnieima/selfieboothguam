import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";
import { ToggleTheme } from "./ui/ToggleTheme";
import NavLinks from "./ui/NavLinks";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className='hidden lg:flex justify-between h-[64px] items-center px-16 sticky top-0 z-40 bg-background'>
        <div className=''>
          <Link href='/' className='uppercase tracking-tighter '>
            Selfiebooth Guam
          </Link>
        </div>
        <ul className={cn("flex items-center gap-8 ")}>
          <NavLinks />
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className='lg:hidden flex justify-between items-center px-4 h-[3rem]  sticky top-0 z-40 bg-background'>
        <div>
          <Link href='/' className='uppercase tracking-tighter'>
            Selfiebooth Guam
          </Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <Menu size={32} />
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetHeader>
              <div className='flex gap-2'>
                <LocaleSwitcherSelect />
                <ToggleTheme />
              </div>
            </SheetHeader>
            <ul className='flex flex-col gap-8 py-8'>
              <NavLinks className=' text-2xl ' />
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;
