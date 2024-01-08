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
export const locales = ["en", "de"] as const;
export const localePrefix = "always"; // Default
export const { useRouter, usePathname } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});

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
      <SelectTrigger className="w-16 bg-foreground text-background">
        <SelectValue placeholder={<Globe />} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ja">JA</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcherSelect;
