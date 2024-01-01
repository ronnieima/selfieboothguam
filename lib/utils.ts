import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yearsSince(year: number) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}
