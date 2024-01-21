"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useTransition } from "react";
import usFlag from "@/public/united-states-flag-icon.svg";
import jpFlag from "@/public/japan-flag-icon.svg";
import Image from "next/image";
export const locales = ["en", "de"] as const;
export const localePrefix = "always"; // Default
export const { useRouter, usePathname } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
const localeInfo = [
  {
    label: "English",
    value: "en",
    image: usFlag,
  },
  {
    label: "Japanese",
    value: "ja",
    image: jpFlag,
  },
];

function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  return (
    <Select
      value={locale}
      disabled={isPending}
      onValueChange={(value) => onSelectChange(value)}
    >
      <SelectTrigger className="w-36 bg-secondary text-foreground border border-gray-200 shadow-sm">
        <SelectValue placeholder={<Globe />} />
      </SelectTrigger>
      <SelectContent>
        {localeInfo.map((locale) => (
          <SelectItem
            className="hover:cursor-pointer"
            key={locale.value}
            value={locale.value}
          >
            <div className="flex items-center justify-center gap-2 ">
              <Image src={locale.image} alt={locale.label} className="w-5" />
              <span>{locale.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcherSelect;
