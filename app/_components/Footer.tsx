import React from "react";
import NavLinks from "./ui/NavLinks";
import { fontLeagueSpartan, fontLibreBakersville } from "@/lib/fonts";

function Footer() {
  return (
    <footer className="px-16 py-8 h-[400px] bg-neutral-800 text-background grid grid-cols-3">
      <div>
        <h3 className={`${fontLeagueSpartan.className} text-3xl `}>
          Selfiebooth Guam
        </h3>
        <ul className="flex flex-col gap-2">
          <NavLinks />
        </ul>
      </div>
      <span className="self-end justify-self-center">
        Copyright 2023 | Developed by Ronnie Kaito Imagawa
      </span>
    </footer>
  );
}

export default Footer;
