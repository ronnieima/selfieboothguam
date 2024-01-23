import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/messages/content";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type NavLinksProps = React.LiHTMLAttributes<HTMLLIElement>;

function NavLinks({ className }: NavLinksProps) {
  const t = useTranslations("Navbar");
  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("bookNow"), href: socialLinks.facebook },
  ];

  return (
    <>
      {navLinks.map((navLink) => (
        <li
          key={navLink.label}
          className={cn(
            "hover:underline font-semibold uppercase",
            { "text-green-700": navLink.label === "Book Now" },
            className
          )}
        >
          <Link
            href={navLink.href}
            target={navLink.href === socialLinks.facebook ? "_blank" : ""}
          >
            {navLink.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
