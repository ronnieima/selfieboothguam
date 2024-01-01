import React from "react";
import AchievmentsList from "./ui/AchievmentsList";
import { cn } from "@/lib/utils";

function Achievements() {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center gap-2 px-4 py-8 bg-neutral-50 dark:bg-neutral-950 w-full",
        "lg:flex-row"
      )}
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        <AchievmentsList />
      </div>
    </section>
  );
}

export default Achievements;
