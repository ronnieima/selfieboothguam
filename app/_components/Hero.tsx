"use client";
import { Button } from "@/components/ui/button";
import { fontLeagueSpartan } from "@/lib/fonts";
import { Camera } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="grid lg:grid-cols-[95%_5%] h-[100svh] lg:h-[80svh] ">
      <div className="relative bg-hero bg-fixed lg:rounded-r-[3rem]  bg-cover bg-center ">
        <div className="bg-black/70  absolute h-full w-full top-0 left-0 lg:rounded-r-[3rem] flex flex-col justify-center items-center">
          <header className="absolute px-2 py-8 lg:p-32 text-white flex flex-col justify-center items-center lg:items-start gap-8 lg:gap-8 text-center lg:text-left ">
            <span className="text-xl flex gap-2">
              <Camera /> Selfiebooth Guam
            </span>

            <div>
              <h1
                className={`${fontLeagueSpartan.className} text-6xl md:text-8xl font-semibold tracking-tight  `}
              >
                A{" "}
                <span
                  className="bg-gradient-to-r from-[#ef3340] 
              ] to-[#0072ce] inline-block text-transparent bg-clip-text"
                >
                  Guam-based
                </span>{" "}
                <br />
                Rental Photobooth Service.
              </h1>

              <TypeAnimation
                sequence={[
                  " Perfect for graduation parties.",
                  5000,
                  " Perfect for birthday parties.",
                  5000,
                  " Perfect for corporate events.",
                  5000,
                  " Perfect for all occasions!",
                  5000,
                  " Perfect for holiday parties.",
                  5000,
                  "Perfect for weddings.",
                  5000,
                ]}
                className="text-neutral-300 text-center mx-auto lg:mx-0 text-3xl"
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </div>
            <Button
              className="w-[300px] lg:w-32 text-foreground mx-auto"
              variant={"outline"}
            >
              Learn more
            </Button>
          </header>
        </div>
      </div>
      <span
        className={`${fontLeagueSpartan.className} hidden lg:flex text-4xl lg:text-6xl font-bold cursor-vertical-text  items-center justify-center gap-4 uppercase w-full text-nowrap`}
        style={{ writingMode: "vertical-rl" }}
      >
        Photobooth service
      </span>
    </section>
  );
}

export default Hero;
