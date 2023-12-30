import { Button } from "@/components/ui/button";
import { fontLeagueSpartan } from "@/lib/fonts";
import { Camera } from "lucide-react";
import { useTranslations } from "next-intl";
import HeroTypingAnimation from "./HeroTypingAnimation";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="grid lg:grid-cols-[95%_5%] h-[100svh] lg:h-[80svh] ">
      <div className="relative bg-hero bg-fixed lg:rounded-r-[3rem]  bg-cover bg-center ">
        <div className="bg-black/70 absolute h-full w-full lg:rounded-r-[3rem] flex flex-col justify-center items-center lg:items-start">
          <header className="absolute px-2 py-8 lg:p-32 text-white flex flex-col justify-center items-center lg:items-start gap-8 lg:gap-8 text-center lg:text-left w-[75%]">
            <span className="text-xl flex gap-2">
              <Camera /> Selfiebooth Guam
            </span>

            <div>
              <h1
                className={`${fontLeagueSpartan.className} text-6xl md:text-8xl font-semibold tracking-tight  `}
              >
                {t.rich("title", {
                  gradient: (chunks) => (
                    <span
                      className="bg-gradient-to-r from-[#ef3340] 
              ] to-[#0072ce] inline-block text-transparent bg-clip-text"
                    >
                      {chunks}
                    </span>
                  ),
                  br: () => <br />,
                })}
              </h1>

              <HeroTypingAnimation />
            </div>
            <Button
              className="w-[300px] lg:w-32 text-foreground mx-auto lg:mx-0"
              variant={"outline"}
            >
              {t("button")}
            </Button>
          </header>
        </div>
      </div>
      <aside
        className={`${fontLeagueSpartan.className} hidden lg:flex text-4xl lg:text-6xl font-bold cursor-vertical-text  items-center justify-center gap-4 uppercase w-full text-nowrap`}
        style={{ writingMode: "vertical-rl" }}
      >
        {t("asideText")}
      </aside>
    </section>
  );
}

export default Hero;
