import React from "react";
import NavLinks from "./ui/NavLinks";
import { fontLeagueSpartan, fontLibreBakersville } from "@/lib/fonts";

function Footer() {
  return (
    <footer className="lg:px-16 lg:py-8 p-4 h-[400px] bg-neutral-800 text-background grid grid-cols-3">
      <div>
        <h3 className={`${fontLeagueSpartan.className} text-3xl `}>
          Selfiebooth Guam
        </h3>
        <ul className="flex flex-col gap-2">
          <NavLinks />
        </ul>
      </div>
      <div className="self-end justify-self-center col-span-3 text-center">
        <span className="text-xs">
          Developed by Ronnie Kaito Imagawa <br /> Copyright 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
