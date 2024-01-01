import Hero from "../_components/Hero";
import Services from "../_components/Services";
import Pricing from "../_components/Pricing";
import Achievements from "../_components/Achievements";

export default function Home() {
  return (
    <main>
      <Hero />
      <Achievements />
      <Services />
      <Pricing />
    </main>
  );
}
