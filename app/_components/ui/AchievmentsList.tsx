import { cn, yearsSince } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";
import certificate from "@/public/certificate.svg";
import festivities from "@/public/festivities.svg";
import Image from "next/image";

export default function AchievmentsList() {
  const t = useTranslations("Achievements");
  const FOUNDED_YEAR = 2014;
  const yearsInOperation = yearsSince(FOUNDED_YEAR);
  const achievements = [
    {
      image: certificate,
      metric: yearsInOperation,
      label: t("achievement1"),
    },
    {
      image: festivities,
      metric: "100+",
      label: t("achievement2"),
    },
  ];
  return (
    <>
      {achievements.map((achievement) => {
        return (
          <div
            key={achievement.label}
            className={cn("w-full flex flex-col items-center")}
          >
            <Image
              className='w-48 h-48'
              src={achievement.image}
              alt={achievement.label}
            />
            <h3 className={cn("text-8xl font-extrabold")}>
              {achievement.metric}
            </h3>
            <span className='text-lg text-center font-light'>
              {achievement.label}
            </span>
          </div>
        );
      })}
    </>
  );
}
