import { useTranslations } from "next-intl";
import Image from "next/image";
import { fontLeagueSpartan, fontLibreBakersville } from "../../lib/fonts";
import { cn } from "@/lib/utils";
import { services } from "@/messages/content";

function Services() {
  const t = useTranslations("Services");

  return (
    <section className="py-16  bg-secondary scroll-m-16   px-4" id="services">
      <div className="max-w-[100rem] mx-auto flex flex-col items-center gap-16">
        <header>
          <h2
            className={`${fontLibreBakersville.className} text-center text-4xl md:text-6xl `}
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
                <p className={`${fontLeagueSpartan.className} text-xl`}>
                  {service.description}
                </p>
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
