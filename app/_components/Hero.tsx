import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/messages/content";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import HeroTypingAnimation from "./HeroTypingAnimation";
import { ArrowDown, ArrowRight } from "lucide-react";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className='grid lg:grid-cols-[95%_5%] max-h-[80svh]  lg:pb-20 '>
      <div className='relative lg:rounded-r-[3rem] min-h-[75svh] lg:dark:border-gray-600 lg:border-4 lg:border-l-0'>
        <Image
          className=' lg:rounded-r-[3rem] '
          src='/hero.jpg'
          fill
          alt='hero'
          style={{ objectFit: "cover" }}
          priority
        />
        <div className='bg-black/70 absolute h-full w-full lg:rounded-r-[3rem] flex flex-col justify-center items-center lg:items-start'>
          <header
            className={cn(
              "text-center text-white flex flex-col justify-center items-center gap-8 ",
              "lg:text-left lg:p-32  lg:items-start"
            )}
          >
            <div>
              <h1
                className={` text-6xl md:text-7xl font-extrabold tracking-tight  `}
              >
                {t.rich("title", {
                  gradient: (chunks) => (
                    <span
                      className=' bg-gradient-to-r from-[#ef3340] 
              ] to-[#0072ce] inline-block text-transparent bg-clip-text'
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
              asChild
              className='w-[300px] lg:w-44 bg-blue-900 hover:bg-blue-700 text-white mx-auto lg:mx-0'
            >
              <Link href={socialLinks.facebook} target='_blank'>
                {t("button")}
              </Link>
            </Button>
          </header>
        </div>
      </div>
      <aside
        className={` hidden lg:flex  font-bold cursor-vertical-text  items-center justify-end gap-4 uppercase w-full text-nowrap py-8`}
        style={{ writingMode: "vertical-rl" }}
      >
        {t("asideText")}
        <ArrowDown lengthAdjust={100} />
      </aside>
    </section>
  );
}

export default Hero;
