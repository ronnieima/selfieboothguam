import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ToggleTheme } from "./ui/ToggleTheme";
import LanguageSelect from "./ui/LanguageSelect";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book Now", href: "#" },
];

function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden lg:flex justify-between h-[84px] items-center px-16 sticky top-0 z-40 bg-background ">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <ul className="flex items-center gap-16">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link href={navLink.href}>{navLink.label}</Link>
            </li>
          ))}
          <li>
            <LanguageSelect />
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="flex lg:hidden justify-between h-[84px] items-center px-4 sticky top-0 z-20 bg-background">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <Menu size={48} />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader></SheetHeader>
            <ul className="flex flex-col gap-8 mt-32">
              {navLinks.map((navLink) => (
                <li key={navLink.label}>
                  <Link href={navLink.href} className="text-4xl ">
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;
