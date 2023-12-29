import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ToggleTheme } from "./ui/ToggleTheme";
import LanguageSelect from "./ui/LanguageSelect";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book Now", href: "#" },
];

function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden lg:flex justify-between h-[84px] items-center px-16">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <ul className="flex items-center gap-16">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link href={navLink.href}>{navLink.label}</Link>
            </li>
          ))}
          <LanguageSelect />
          <ToggleTheme />
        </ul>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="flex lg:hidden justify-between h-[84px] items-center px-4">
        <div className="">
          <Link href="/">Logo Here</Link>
        </div>
        <Menu size={48} />
      </nav>
    </>
  );
}

export default Navbar;
