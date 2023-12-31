import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fontLeagueSpartan, fontLibreBakersville } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { prices } from "@/messages/content";
import { Separator } from "@radix-ui/react-select";
import { Check } from "lucide-react";
import React from "react";

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-background flex flex-col items-center gap-8 py-16 max-w-[80rem] mx-auto scroll-m-16"
    >
      <header className="flex flex-col items-center">
        <h2
          className={`${fontLibreBakersville.className} text-center text-4xl md:text-6xl `}
        >
          Pricing
        </h2>
        <span>Billed hourly</span>
      </header>
      <div className={cn("flex flex-col w-full px-2", "lg:flex-row")}>
        {prices.map((price) => (
          <Card
            key={price.timeInHours}
            className={cn(
              "p-4 shadow-xl rounded-none first:rounded-t-xl last:rounded-b-xl",
              "lg:first:rounded-r-none lg:first:rounded-l-xl lg:last:rounded-r-xl lg:last:rounded-l-none"
            )}
          >
            <CardHeader className="self-start">
              <CardTitle>
                <p
                  className={cn(
                    `${fontLeagueSpartan.className} text-3xl font-thin`,
                    `lg:text-4xl`
                  )}
                >
                  {`${price.timeInHours} Hours`}
                </p>
                <p
                  className={cn(
                    `${fontLeagueSpartan.className} text-4xl`,
                    "lg:text-5xl"
                  )}
                >{`$${price.priceInUSD.toFixed(2)}`}</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ol className={`list-image-checkmark `}>
                <li className="text-sm">DVD containing all event photos</li>
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <Card>
        <CardContent>Test</CardContent>
      </Card> */}
    </section>
  );
}

export default Pricing;
