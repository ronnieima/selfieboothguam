import { cn } from "@/lib/utils";
import { achievements } from "@/messages/content";
import React from "react";

function AchievmentsList() {
  return (
    <>
      {achievements.map((achievement) => {
        return (
          <div
            key={achievement.label}
            className={cn("w-full flex flex-col items-center")}
          >
            <h3 className={cn("text-5xl font-semibold")}>
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
