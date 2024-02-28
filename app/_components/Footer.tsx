import { cn } from "@/lib/utils";
import NavLinks from "./ui/NavLinks";
import Link from "next/link";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";

import img from "@/public/photobooth1.png";
import Image from "next/image";
import { Mail, MapPin, Phone, Pin } from "lucide-react";

function Footer() {
  return (
    <footer
      className={cn("flex flex-col justify-between  bg-neutral-950 text-white")}
    >
      <div
        className={cn(
          "grid px-8 py-12 text-white",
          `md:grid-cols-2`,
          `lg:px-16 lg:py-8  lg:grid lg:grid-cols-4 gap-8`
        )}
      >
        <div className='flex flex-col gap-4 '>
          <div className='relative w-52  h-32'>
            <Image
              src={img}
              fill
              className='absolute h-full w-full rounded-xl'
              alt='a picture of a photobooth event'
            />
          </div>
          <h3 className={` text-3xl text-red-300`}>Selfiebooth Guam</h3>
          <p className='text-muted-foreground'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            magnam autem eum nihil cupiditate officia hic rerum in quasi itaque,
            blanditiis dolor laborum pariatur.
          </p>
        </div>

        <div>
          <h2 className='text-2xl pb-2 text-semibold'>Browse</h2>
          <ul className='flex flex-col items-start gap-2'>
            <NavLinks className='text-slate-100 text-left font-thin text-sm' />
          </ul>
        </div>

        <div>
          <h2 className='text-2xl pb-2 text-semibold'>Services</h2>
          <ul className='flex flex-col items-start gap-2'>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                Service
              </Link>
            </li>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                Service
              </Link>
            </li>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl pb-2 text-semibold'>Contact</h2>
          <ul className='flex flex-col items-start gap-2'>
            <li className='flex items-center gap-2 font-thin'>
              <MapPin /> Dededo, Guam
            </li>
            <li className='flex items-center gap-2 font-thin'>
              <Mail /> email@email.com
            </li>
            <li className='flex items-center gap-2 font-thin'>
              <Phone /> 671-123-4567
            </li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between bg-slate-900 px-16 py-2 items-center'>
        <span className='text-xs text-center text-muted-foreground'>
          Developed by{" "}
          <Link
            href='https://www.imagawa.dev'
            target='_blank'
            className='hover:underline text-neutral-400'
          >
            Ronnie Kaito Imagawa
          </Link>
          {" | "}
          &#169; Copyright 2023
        </span>
        <Link
          href={"#"}
          className=' text-xs text-muted-foreground hover:underline'
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
