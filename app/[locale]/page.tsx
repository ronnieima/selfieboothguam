import { useTranslations } from "next-intl";
import Hero from "../_components/Hero";
import Services from "../_components/Services";

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
}
