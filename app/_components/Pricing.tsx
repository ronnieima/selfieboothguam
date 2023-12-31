import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fontLibreBakersville } from "@/lib/fonts";
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
            className="w-full rounded-2xl flex flex-col items-center gap-16"
          >
            <CardHeader>
              <CardTitle className="text-center">
                <p className={cn("text-5xl", "lg:text-8xl")}>
                  {price.timeInHours}
                </p>
                <p>Hours</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{`$${price.priceInUSD.toFixed(2)}`}</p>
            </CardContent>
            <CardFooter>
              <ol className={`list-image-checkmark pl-8`}>
                <li>DVD containing all event photos</li>
              </ol>
            </CardFooter>
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
