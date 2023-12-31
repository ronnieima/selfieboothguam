import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type NavLinksProps = React.LiHTMLAttributes<HTMLLIElement>;

function NavLinks({ className }: NavLinksProps) {
  const t = useTranslations("Navbar");
  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("aboutUs"), href: "#aboutUs" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("bookNow"), href: "#bookNow" },
  ];

  return (
    <>
      {navLinks.map((navLink) => (
        <li key={navLink.label} className={cn("hover:underline", className)}>
          <Link href={navLink.href}>{navLink.label}</Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
