import { Button } from "@/components/ui/button";
import { socialLinks } from "@/messages/content";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function CallToAction() {
  const t = useTranslations("CTA");
  return (
    <section className='bg-secondary'>
      <div className='flex flex-col items-center max-w-2xl mx-auto px-2 py-16 gap-4'>
        <h2 className='text-4xl font-bold text-center'>{t("header")}</h2>
        <p className='text-muted-foreground'>{t("subtitle")}</p>
        <Button asChild variant={"default"}>
          <Link href={socialLinks.facebook} target='_blank'>
            {t("button")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
