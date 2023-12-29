import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Presentation, VenetianMask } from "lucide-react";
import Image from "next/image";
import { fontLeagueSpartan } from "../../lib/fonts";

const LUCIDE_ICON_SIZES = 64;

const services = [
  {
    icon: <Fingerprint size={LUCIDE_ICON_SIZES} />,
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
  return (
    <section
      className=" py-16  flex flex-col items-center gap-8 max-w-7xl mx-auto px-4"
      id="services"
    >
      <header className="text-center text-4xl md:text-6xl ">
        <h2 className={`${fontLeagueSpartan.className}`}>What We Offer</h2>
      </header>
      <div className="flex flex-col gap-16 w-full">
        {services.map((service, i) => {
          return (
            <Card
              key={service.label}
              className={`${
                i % 2 !== 0
                  ? "flex-row-reverse bg-gradient-to-l "
                  : "bg-gradient-to-r"
              } flex grid-cols-2  items-start justify-start shadow-none border-none  text-black text-center h-[500px] w-full rounded-full from-blue-200 gap-24  from-10% to-white to-70% p-16`}
            >
              <Image
                src="/test.jpg"
                className="h-full w-auto rounded-full"
                width={300}
                height={400}
                alt="test"
              />
              <div className={`text-left`}>
                <CardHeader>
                  <CardTitle className="text-4xl ">{service.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
