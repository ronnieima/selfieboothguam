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
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { cn } from "@/lib/utils";

function Navbar() {
  const t = useTranslations("Navbar");
  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("aboutUs"), href: "#" },
    { label: t("pricing"), href: "#" },
    { label: t("bookNow"), href: "#" },
  ];
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden lg:flex justify-between h-[84px] items-center px-16 sticky top-0 z-40 bg-background ">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <ul className="flex items-center gap-16">
          {navLinks.map((navLink, i) => (
            <li key={navLink.label}>
              <Link
                href={navLink.href}
                className={cn({
                  "bg-green-800 text-white px-4 py-2 rounded-2xl": i === 3,
                })}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
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
            <SheetHeader></SheetHeader>
            <ul className="flex flex-col gap-8 mt-32">
              {navLinks.map((navLink) => (
                <li key={navLink.label}>
                  <Link href={navLink.href} className="text-4xl ">
                    {navLink.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2">
                <LocaleSwitcherSelect />
                <ToggleTheme />
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;
