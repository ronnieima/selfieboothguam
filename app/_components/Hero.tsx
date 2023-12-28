import { Button } from "@/components/ui/button";
import { fontLeagueSpartan } from "../layout";
import { Camera } from "lucide-react";

function Hero() {
  return (
    <section className="grid lg:grid-cols-[95%_5%] h-[50svh] lg:h-[80svh]">
      <div className="relative bg-hero lg:rounded-r-[3rem]  bg-cover bg-center">
        <div className="bg-black/50 absolute h-full w-full top-0 p-8 lg:p-32 text-white lg:rounded-r-[3rem] flex flex-col justify-center gap-8">
          <span className="text-xl flex gap-2">
            <Camera /> Selfiebooth Guam
          </span>
          <header className="italic py-8">
            <h1
              className={`${fontLeagueSpartan.className} text-6xl sm:text-8xl font-semibold`}
            >
              Click, Pose, Smile!
            </h1>
            <h2 className="text-2xl">Turning Moments into Memories</h2>
          </header>
          <Button
            className="w-full lg:w-32 text-foreground"
            variant={"outline"}
          >
            Learn more
          </Button>
        </div>
      </div>
      <span
        className={`${fontLeagueSpartan.className} hidden lg:flex text-6xl font-bold cursor-vertical-text  items-center justify-center gap-4 uppercase`}
        style={{ writingMode: "vertical-rl" }}
      >
        Photobooth service
      </span>
    </section>
  );
}

export default Hero;
