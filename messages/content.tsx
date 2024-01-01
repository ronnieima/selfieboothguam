import { yearsSince } from "@/lib/utils";
import { Fingerprint, Layout, VenetianMask } from "lucide-react";

const LUCIDE_ICON_SIZES = 64;

export const services = [
  {
    image: "",
    icon: <Fingerprint size={LUCIDE_ICON_SIZES} />,
    label: "Self-serve Touchscreen",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit minima autem iste provident modi eveniet quos dolorem voluptatem magnam inventore aperiam natus, reiciendis laborum distinctio qui atque minus nobis, debitis quas corporis nihil delectus repudiandae.",
  },
  {
    image: "",
    icon: <Layout size={LUCIDE_ICON_SIZES} />,
    label: "Custom Layouts",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit minima autem iste provident modi eveniet quos dolorem voluptatem magnam inventore aperiam natus, reiciendis laborum distinctio qui atque minus nobis, debitis quas corporis nihil delectus repudiandae.",
  },
  {
    image: "",
    icon: <VenetianMask size={LUCIDE_ICON_SIZES} />,
    label: "Themed Props",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit minima autem iste provident modi eveniet quos dolorem voluptatem magnam inventore aperiam natus, reiciendis laborum distinctio qui atque minus nobis, debitis quas corporis nihil delectus repudiandae.",
  },
];
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
