import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { prices } from "@/messages/content";
import { useTranslations } from "next-intl";

function PriceCards() {
  const t = useTranslations("Pricing");

  return (
    <>
      {prices.map((price) => (
        <Card
          key={price.timeInHours}
          className={cn("p-4 shadow-xl rounded-none")}
        >
          <CardHeader className="self-start">
            <CardTitle>
              <p className={cn(`text-3xl font-thin`, `lg:text-4xl`)}>
                {`${price.timeInHours} ${t("hours")}`}
              </p>
              <p
                className={cn(` text-4xl`, "lg:text-5xl")}
              >{`$${price.priceInUSD.toFixed(2)}`}</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <ol className={`list-image-checkmark `}>
              <li className="text-sm">{t("DVD")}</li>
            </ol>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default PriceCards;
