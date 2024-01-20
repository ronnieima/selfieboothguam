import { cn } from "@/lib/utils";
import layout from "@/public/layout.svg";
import props from "@/public/props.svg";
import touchscreen from "@/public/touchscreen.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      image: "/photobooth1.png",
      icon: touchscreen,
      label: t("service1.header"),
      description: t("service1.description"),
    },
    {
      image: "/layout.jpg",
      icon: layout,
      label: t("service2.header"),
      description: t("service2.description"),
    },
    {
      image: "/props.png",
      icon: props,
      label: t("service3.header"),
      description: t("service3.description"),
    },
  ];
  return (
    <section className="py-16 bg-secondary scroll-m-16 px-4" id="services">
      <div className="max-w-[100rem]  mx-auto flex flex-col items-center gap-16">
        <header>
          <h2 className={` text-center text-4xl md:text-6xl font-extrabold`}>
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
                  `lg:p-8 lg:order-1`
                )}
              >
                <Image src={service.icon} alt={service.label} />
                <h2 className="text-6xl font-semibold">{service.label}</h2>
                <p className={`text-xl text-muted-foreground`}>
                  {service.description}
                </p>
              </header>
              <Image
                src={service.image}
                alt={service.label}
                width={600}
                height={400}
                className="rounded-3xl shadow-lg lg:order-2 w-auto h-auto"
              />
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
