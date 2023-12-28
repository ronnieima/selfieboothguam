import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Fingerprint,
  Presentation,
  Touchpad,
  VenetianMask,
} from "lucide-react";
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
    <section className="h-[700px] py-16 lg:p-32 flex flex-col items-center gap-8">
      <header className="text-center text-4xl md:text-6xl ">
        <h2 className={`${fontLeagueSpartan.className}`}>
          Photobooth Features
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {services.map((service, i) => {
          return (
            <Card
              key={service.label}
              className={`${
                i === 0 && "md:col-span-2 lg:col-span-1"
              } flex flex-col items-center justify-center bg-white shadow-lg text-center h-80`}
            >
              {service.icon}
              <CardHeader>
                <CardTitle>{service.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
