import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import PriceCards from "./ui/PriceCards";

function Pricing() {
  const t = useTranslations("Pricing");
  return (
    <section className='bg-background flex flex-col items-center gap-8 py-16  lg:max-w-[100rem]  mx-auto '>
      <header id='pricing' className='uppercase font-extrabold text-center text-4xl lg:text-7xl lg:text-left lg:self-start'>
      
        <h2 className={`font-extrabold text-center text-4xl lg:text-7xl  `}>
          {t("header")}
        </h2>
        <span className='text-muted-foreground text-sm'>{t("subtitle")}</span>
      </header>
      <div
        className={cn(
          "flex flex-col flex-wrap items-center justify-center max-w-2xl px-2",
          "lg:flex-row"
        )}
      >
        <PriceCards />
      </div>
    </section>
  );
}

export default Pricing;
