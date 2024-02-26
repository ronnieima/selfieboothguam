import { cn } from "@/lib/utils";
import PriceCards from "./ui/PriceCards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import pricing from "@/public/pricing.svg";

function Pricing() {
  const t = useTranslations("Pricing");
  return (
    <section className='bg-background flex flex-col items-center gap-8 py-16  lg:max-w-[80rem]  mx-auto '>
      <header id='pricing' className='flex flex-col items-center scroll-m-16'>
        {/* <Image className='h-64 w-full' src={pricing} alt='Pricing' /> */}
        <h2 className={`font-extrabold text-center text-4xl md:text-3xl `}>
          {t("header")}
        </h2>
        <span className='text-muted-foreground'>{t("subtitle")}</span>
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
