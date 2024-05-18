import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/messages/content";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import HeroTypingAnimation from "./HeroTypingAnimation";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="grid lg:grid-cols-[95%_5%] h-screen bg-secondary dark:bg-neutral-950 max-h-[1170px]">
      <div className="relative lg:rounded-tr-[3rem] lg:dark:border-gray-600 dark:lg:border-4 lg:border-l-0 h-full ">
        <Image
          className=" lg:rounded-tr-[3rem] absolute w-full h-full"
          src="/hero.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt='hero'
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="bg-black/55 absolute h-full w-full lg:rounded-tr-[3rem] flex flex-col justify-center items-center lg:items-start">
          <header
            className={cn(
              "text-center text-white flex flex-col justify-center items-center gap-16 ",
              "lg:text-left lg:p-32  lg:items-start"
            )}
          >
            <div>
              <h1
                className={` text-6xl md:text-9xl font-extrabold tracking-tight  `}
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
        className={`hidden lg:flex text-md lg:text-xl font-bold cursor-vertical-text  items-center justify-end gap-4 uppercase w-full text-nowrap`}
        style={{ writingMode: "vertical-rl" }}
      >
        &rarr;  Scroll down
      </aside>
    </section>
  );
}

export default Hero;
