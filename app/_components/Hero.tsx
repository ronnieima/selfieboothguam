import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroTypingAnimation from "./HeroTypingAnimation";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="grid lg:grid-cols-[95%_5%] min-h-[100svh] lg:min-h-[100svh] lg:pb-20 ">
      <div className=" relative   lg:rounded-r-[3rem]  lg:dark:border-primary lg:border-4 lg:border-l-0">
        <Image
          className=" lg:rounded-r-[3rem] "
          src="https://res.cloudinary.com/dfpbpun9z/image/upload/v1704028730/selfieboothguam/hero.jpg"
          fill
          alt="hero"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="bg-black/70 absolute h-full w-full lg:rounded-r-[3rem] flex flex-col justify-center items-center lg:items-start">
          <header
            className={cn(
              "text-center text-white flex flex-col justify-center items-center gap-8 ",
              "lg:text-left lg:p-32  lg:items-start"
            )}
          >
            {/* <span className="text-xl flex gap-2">
              <Camera /> Selfiebooth Guam
            </span> */}

            <div>
              <h1
                className={` text-6xl md:text-8xl font-semibold tracking-tight  `}
              >
                {t.rich("title", {
                  gradient: (chunks) => (
                    <span
                      className=" bg-gradient-to-r from-[#ef3340] 
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
              variant={"secondary"}
            >
              {t("button")}
            </Button>
          </header>
        </div>
      </div>
      <aside
        className={` hidden lg:flex text-4xl lg:text-6xl font-bold cursor-vertical-text  items-center justify-center gap-4 uppercase w-full text-nowrap`}
        style={{ writingMode: "vertical-rl" }}
      >
        {t("asideText")}
      </aside>
    </section>
  );
}

export default Hero;
