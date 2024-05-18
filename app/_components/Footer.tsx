import { cn } from "@/lib/utils";
import Link from "next/link";
import NavLinks from "./ui/NavLinks";

import img from "@/public/photobooth1.png";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import LocaleSwitcherSelect from "./ui/LocaleSwitcherSelect";
import { ToggleTheme } from "./ui/ToggleTheme";
import { useTranslations } from "next-intl";

function Footer() {
  const t_footer = useTranslations("Footer");
  const t_services = useTranslations("Services");

  return (
    <footer
      className={cn("flex flex-col justify-between  bg-neutral-950 text-white")}
    >
      <div
        className={cn(
          "grid px-8 py-12 text-white",
          `sm:grid-cols-2`,
          `lg:px-16 lg:py-8 lg:grid lg:grid-cols-4 gap-16 max-w-[100rem] mx-auto`
        )}
      >
        <div className='flex flex-col gap-4 '>
          <div className='relative w-52 h-32'>
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
          <h2 className='text-2xl pb-2 text-bold mb-4'>{t_footer("browse")}</h2>
          <ul className='flex flex-col items-start gap-2'>
            <NavLinks className='text-slate-100 text-left font-thin text-sm' />
          </ul>
        </div>

        <div>
          <h2 className='text-2xl pb-2 text-bold mb-4'>
            {t_footer("services")}
          </h2>
          <ul className='flex flex-col items-start gap-2'>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                {t_services("service1.header")}
              </Link>
            </li>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                {t_services("service2.header")}
              </Link>
            </li>
            <li>
              <Link href={`#`} className='hover:underline font-thin text-sm'>
                {t_services("service3.header")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl pb-2 text-bold mb-4'>
            {t_footer("contact")}
          </h2>
          <ul className='flex flex-col items-start gap-2'>
            <li className='flex items-center gap-2 font-thin'>
              <MapPin size={16} /> Dededo, Guam
            </li>
            <li className='flex items-center gap-2 font-thin'>
              <Mail size={16} /> email@email.com
            </li>
            <li className='flex items-center gap-2 font-thin'>
              <Phone size={16} /> 671-123-4567
            </li>
          </ul>
        </div>
      </div>
      <div className='flex gap-2 justify-end pb-8 max-w-[80rem] w-full pr-16   mx-auto'>
        <LocaleSwitcherSelect />
        <ToggleTheme />
      </div>

      <div className=' bg-slate-900 sm:px-16 px-4 py-2 '>
        <div className='max-w-[80rem] mx-auto flex justify-between items-center'>
          <span className='text-xs text-left text-muted-foreground'>
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
            {t_footer("privacy_policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
