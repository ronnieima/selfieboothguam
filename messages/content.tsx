import { yearsSince } from "@/lib/utils";

const CLOUDINARY_URL =
  "https://res.cloudinary.com/dfpbpun9z/image/upload/f_auto,q_auto/v1/selfieboothguam/";

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100063500533195",
};

export const imageLinks = {
  props: CLOUDINARY_URL + "props",
  photobooth: CLOUDINARY_URL + "photobooth1",
  layout: CLOUDINARY_URL + "layout",
  hero: CLOUDINARY_URL + "hero",
};

const FOUNDED_YEAR = 2014;
const yearsInOperation = yearsSince(FOUNDED_YEAR);
export const achievements = [
  {
    metric: yearsInOperation,
    label: `years of service (established 2014)`,
  },
  {
    metric: "100+",
    label: "events served",
  },
];

export const prices = [
  { timeInHours: 2, priceInUSD: 250.0 },
  { timeInHours: 3, priceInUSD: 320.0 },
  { timeInHours: 4, priceInUSD: 390.0 },
  { timeInHours: 5, priceInUSD: 460.0 },
];
