import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Fingerprint,
  Presentation,
  Touchpad,
  VenetianMask,
} from "lucide-react";
import { fontLeagueSpartan } from "../layout";

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
    <section className="h-[700px] p-32 flex flex-col gap-8">
      <header className="text-center text-6xl ">
        <h2 className={`${fontLeagueSpartan.className}`}>
          Photobooth Features
        </h2>
      </header>
      <div className="flex flex-col lg:grid grid-cols-3  gap-8">
        {services.map((service) => {
          return (
            <Card
              key={service.label}
              className="flex flex-col items-center justify-center bg-neutral-200 shadow-lg text-center h-80"
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
