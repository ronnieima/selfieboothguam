import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { url } from "inspector";
import { Fingerprint, Layout, Presentation, VenetianMask } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { fontLeagueSpartan } from "../../lib/fonts";
import { cn } from "@/lib/utils";

const LUCIDE_ICON_SIZES = 64;

const services = [
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

function Services() {
  const t = useTranslations("Services");

  return (
    <section className="py-16  bg-secondary    px-4" id="services">
      <div className="max-w-[100rem] mx-auto flex flex-col items-center gap-32">
        <header className="bg-background rounded-full">
          <h2
            className={`${fontLeagueSpartan.className} text-center text-4xl md:text-6xl `}
          >
            {t("header")}
          </h2>
        </header>
        {services.map((service) => {
          return (
            <section
              key={service.label}
              className={cn(
                `flex flex-col gap-4 justify-center items-center w-full `,
                "lg:flex-row lg:justify-between",
                "odd:lg:flex-row-reverse"
              )}
            >
              <header
                className={cn(
                  "text-center order-2 flex flex-col justify-center items-center gap-6",
                  `lg:p-32 lg:order-1`
                )}
              >
                {service.icon}
                <h2 className="text-3xl font-bold">{service.label}</h2>
                <p>{service.description}</p>
              </header>
              <Image
                src="/test.jpg"
                alt={service.label}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg lg:order-2"
              />
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
