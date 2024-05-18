import React from "react";
import AchievmentsList from "./ui/AchievmentsList";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function Achievements() {
  const t = useTranslations("Achievements");
  return (
    <section
      className={cn(
        "px-4 py-16 bg-neutral-50 dark:bg-primary-foreground w-full",
        "lg:flex-row"
      )}
    >
      <div className=' mx-auto space-y-16 max-w-[100rem]'>
        <h2 className='uppercase font-extrabold text-center text-4xl lg:text-7xl lg:text-left'>{t("header")}</h2>
        <div className='flex flex-col gap-8 w-full justify-center lg:flex-row items-center'>
          <AchievmentsList />
        </div>
      </div>
    </section>
  );
}

export default Achievements;
