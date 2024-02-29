import { Button, buttonVariants } from "@/components/ui/button";
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
      {navLinks.map((navLink) => {
        const isBookNow = navLink.href === socialLinks.facebook ? "_blank" : "";

        return (
          <li key={navLink.label}>
            <Link
              href={navLink.href}
              target={isBookNow ? "_blank" : ""}
              className={cn(
                `hover:underline ${
                  isBookNow && buttonVariants({ variant: "default" })
                }`,
                { "bg-green-700": isBookNow },
                className
              )}
            >
              {navLink.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
