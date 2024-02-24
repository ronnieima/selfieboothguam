import { cn } from "@/lib/utils";
import NavLinks from "./ui/NavLinks";
import Link from "next/link";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";

function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col justify-between pt-8 px-8 pb-2 h-[400px] bg-neutral-950 text-white",
        `lg:px-16 lg:py-8  lg:grid lg:grid-cols-3`
      )}
    >
      <div className='space-y-4'>
        <h3 className={` text-3xl text-red-300`}>Selfiebooth Guam</h3>
        <ul className='flex flex-col gap-8'>
          <div className='space-y-2'>
            <NavLinks />
          </div>
          <LocaleSwitcherSelect />
        </ul>
      </div>
      <div
        className={cn(
          "text-center",
          "lg:self-end lg: justify-self-center lg:col-span-3"
        )}
      >
        <span className='text-xs'>
          Developed by{" "}
          <Link href='https://www.imagawa.dev' target='_blank'>
            Ronnie Kaito Imagawa
          </Link>
          <br /> Copyright 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
