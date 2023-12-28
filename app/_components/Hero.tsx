import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="grid grid-cols-[95%_5%] h-[100svh]">
      <div className="relative bg-hero rounded-tr-[3rem]  bg-cover bg-center">
        <div className="bg-black/40 absolute h-full w-full top-0 pl-32 text-white rounded-tr-[3rem] flex flex-col justify-center gap-8">
          <span className="text-xl">Sefliebooth Guam</span>
          <header className="space-y-2">
            <h1 className="text-8xl font-semibold">Click, Pose, Smile!</h1>
            <h2 className="text-4xl">Turning Moments into Memories</h2>
          </header>
          <Button className="w-32">Learn more</Button>
        </div>
      </div>
      <span
        className="text-xl font-bold cursor-vertical-text flex items-center justify-end gap-4"
        style={{ writingMode: "vertical-rl" }}
      >
        Scroll down <ArrowDown />
      </span>
    </section>
  );
}

export default Hero;
