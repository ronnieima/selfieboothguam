import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book Now", href: "#" },
];

function Navbar() {
  return (
    <nav className="flex justify-between h-[84px] items-center px-16">
      <div className="">
        <Link href="/">Logo Here</Link>
      </div>
      <ul className="flex gap-16">
        {navLinks.map((navLink) => (
          <li key={navLink.label}>
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
