import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { url } from "inspector";
import { Presentation, VenetianMask } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { fontLeagueSpartan } from "../../lib/fonts";
import { cn } from "@/lib/utils";

const LUCIDE_ICON_SIZES = 64;

const services = [
  {
    icon: url(),
    label: "Self-serve Touchscreen",
    description: "Text",
  },
  {
    icon: <VenetianMask size={LUCIDE_ICON_SIZES} />,
    label: "Themed Props",
    description: "Text",
  },
  {
    icon: <Presentation size={LUCIDE_ICON_SIZES} />,
    label: "Green Screen",
    description: "Text",
  },
];

function Services() {
  const t = useTranslations("Services");
  return (
    <section
      className=" py-16  flex flex-col items-center gap-32 max-w-[100rem] mx-auto px-4"
      id="services"
    >
      <header className="text-center text-4xl md:text-6xl ">
        <h2 className={`${fontLeagueSpartan.className}`}>{t("header")}</h2>
      </header>
      {services.map((service) => {
        return (
          <div
            key={service.label}
            className={cn(
              `flex justify-between w-full `,
              "odd:flex-row-reverse "
            )}
          >
            <div className="p-32">
              <h2 className="text-3xl font-bold">{service.label}</h2>
              <p>{service.description}</p>
            </div>
            <Image
              src="/test.jpg"
              alt={service.label}
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </div>
        );
      })}
    </section>
  );
}

export default Services;
