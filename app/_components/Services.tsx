import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import layout from "@/public/layout.svg";
import props from "@/public/props.svg";
import touchscreen from "@/public/touchscreen.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

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
    <section className='py-16 bg-secondary scroll-m-16 ppx-4' id='services'>
      <div className='max-w-[100rem]  mx-auto flex flex-col items-center gap-16'>
        <header className="lg:self-start self-center">
          <h2 className={`uppercase font-extrabold text-center text-4xl lg:text-7xl lg:text-left`}>{t("header")}</h2>
        </header>
        {services.map((service, i) => {
          return (
            <React.Fragment key={service.label}>
              <section
                className={cn(
                  `flex flex-col gap-4 justify-center items-center w-full  px-3`,
                  "lg:flex-row lg:justify-between",
                  { "lg:flex-row-reverse": i % 2 !== 0 }
                )}
              >
                <header
                  className={cn(
                    "text-center order-2 flex flex-col justify-center items-center gap-6",
                    `lg:p-8 lg:order-1`
                  )}
                >
                  <h2 className='text-6xl font-semibold text-center lg:text-left self-center lg:self-start'>
                    {service.label}
                  </h2>
                  <p
                    className={`text-xl text-muted-foreground text-left px-8 lg:px-0`}
                  >
                    {service.description}
                  </p>
                </header>
                <Image
                  src={service.image}
                  alt={service.label}
                  width={600}
                  height={400}
                  className='rounded-3xl shadow-lg lg:order-2 w-auto h-auto'
                />
              </section>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
