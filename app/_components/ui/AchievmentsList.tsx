import { cn, yearsSince } from "@/lib/utils";
import { achievements } from "@/messages/content";
import { useTranslations } from "next-intl";
import React from "react";

function AchievmentsList() {
  const t = useTranslations("Achievements");
  const FOUNDED_YEAR = 2014;
  const yearsInOperation = yearsSince(FOUNDED_YEAR);
  const achievements = [
    {
      metric: yearsInOperation,
      label: t("achievement1"),
    },
    {
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
            <h3 className={cn("text-8xl font-semibold")}>
              {achievement.metric}
            </h3>
            <span className="text-lg text-center font-light">
              {achievement.label}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default AchievmentsList;
