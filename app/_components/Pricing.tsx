import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { prices } from "@/messages/content";
import PriceCards from "./ui/PriceCards";

function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-background flex flex-col items-center gap-8 py-16 lg:max-w-[80rem] mx-auto scroll-m-16"
    >
      <header className="flex flex-col items-center">
        <h2 className={` text-center text-4xl md:text-6xl `}>Pricing</h2>
        <span>Billed hourly</span>
      </header>
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full px-2",
          "lg:flex-row"
        )}
      >
        <PriceCards />
      </div>
      {/* <Card>
        <CardContent>Test</CardContent>
      </Card> */}
    </section>
  );
}

export default Pricing;
